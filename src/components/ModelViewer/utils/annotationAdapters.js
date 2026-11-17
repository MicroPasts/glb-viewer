const VALID_CATEGORIES = new Set(['note', 'damage', 'iconography', 'inscription', 'manufacture']);
const HEX_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const SAFE_ID_REGEX = /^[a-zA-Z0-9._:-]{1,128}$/;

export const ANNOTATION_LIMITS = {
    maxAnnotations: 100,
    maxTitleLength: 140,
    maxSummaryLength: 2000,
    maxAuthorLength: 100,
    maxMeshNameLength: 128,
    maxTags: 12,
    maxTagLength: 32,
    maxCoordinateAbs: 1e6,
};

/**
 * Strips ASCII/Unicode control characters (preserving newlines/tabs in multiline text)
 * and enforces a strict character length cap.
 */
export function sanitizeText(value, maxLength, allowNewlines = false) {
    if (value === null || value === undefined) return '';
    const str = String(value);
    const cleaned = allowNewlines
        ? str.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
        : str.replace(/[\u0000-\u001F\u007F]/g, ' ');
    return cleaned.trim().slice(0, maxLength);
}

function sanitizeId(rawId, fallbackPrefix, index) {
    if (typeof rawId === 'string' && SAFE_ID_REGEX.test(rawId)) {
        return rawId;
    }
    return `${fallbackPrefix}-${index}-${Math.random().toString(36).slice(2, 8)}`;
}

function sanitizeHexColor(color, fallback = '#f59e0b') {
    return typeof color === 'string' && HEX_COLOR_REGEX.test(color.trim()) ? color.trim() : fallback;
}

function sanitizeVec3(arr) {
    if (!Array.isArray(arr) || arr.length < 3) return null;
    const x = Number(arr[0]);
    const y = Number(arr[1]);
    const z = Number(arr[2]);
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null;
    const max = ANNOTATION_LIMITS.maxCoordinateAbs;
    if (Math.abs(x) > max || Math.abs(y) > max || Math.abs(z) > max) return null;
    return [x, y, z];
}

function sanitizeNormalVec3(arr) {
    const vec = sanitizeVec3(arr);
    if (!vec) return null;
    const len = Math.hypot(vec[0], vec[1], vec[2]);
    if (len < 1e-6) return null;
    return [vec[0] / len, vec[1] / len, vec[2] / len];
}

function sanitizeTags(rawTags) {
    if (!Array.isArray(rawTags)) return [];
    const seen = new Set();
    const out = [];
    for (const tag of rawTags) {
        const clean = sanitizeText(tag, ANNOTATION_LIMITS.maxTagLength, false)
            .toLowerCase()
            .replace(/[^a-z0-9._-]/g, '-');
        if (clean && !seen.has(clean)) {
            seen.add(clean);
            out.push(clean);
            if (out.length >= ANNOTATION_LIMITS.maxTags) break;
        }
    }
    return out;
}

function sanitizeIsoDate(rawDate) {
    if (typeof rawDate !== 'string' || !rawDate.trim()) return null;
    const parsed = Date.parse(rawDate);
    return Number.isNaN(parsed) ? null : new Date(parsed).toISOString();
}

/**
 * Validates and normalizes a native annotation or W3C Web Annotation / IIIF 3D
 * PointSelector payload. Returns null if spatial coordinates are invalid.
 */
export function normalizeAnnotation(raw, index = 0) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;

    const isW3C = Boolean(raw['@context'] || raw.type === 'Annotation' || raw.target?.selector);

    if (isW3C) {
        const selector = Array.isArray(raw.target?.selector)
            ? raw.target.selector.find((s) => s && s.type === 'PointSelector')
            : raw.target?.selector;

        if (!selector) return null;
        const pos = sanitizeVec3([selector.x, selector.y, selector.z]);
        if (!pos) return null;

        const bodyObj = Array.isArray(raw.body) ? raw.body[0] : raw.body;
        const rawSummary = typeof bodyObj === 'string' ? bodyObj : bodyObj?.value || '';
        const rawCategory = String(bodyObj?.purpose || 'note').toLowerCase();

        return {
            id: sanitizeId(raw.id, 'w3c-ann', index),
            target: {
                position: pos,
                normal: sanitizeNormalVec3(selector.normal),
                meshName: sanitizeText(selector.meshName, ANNOTATION_LIMITS.maxMeshNameLength, false) || null,
            },
            camera: null,
            body: {
                title:
                    sanitizeText(bodyObj?.title || raw.label, ANNOTATION_LIMITS.maxTitleLength, false) ||
                    `Annotation ${index + 1}`,
                summary: sanitizeText(rawSummary, ANNOTATION_LIMITS.maxSummaryLength, true),
                category: VALID_CATEGORIES.has(rawCategory) ? rawCategory : 'note',
                tags: sanitizeTags(bodyObj?.tags),
                author: sanitizeText(raw.creator?.name || raw.creator, ANNOTATION_LIMITS.maxAuthorLength, false) || null,
                createdAt: sanitizeIsoDate(raw.created),
            },
            style: {
                color: sanitizeHexColor(raw.style?.color),
            },
        };
    }

    // Native portable schema
    const pos = sanitizeVec3(raw.target?.position);
    if (!pos) return null;

    const camPos = sanitizeVec3(raw.camera?.position);
    const camTarget = sanitizeVec3(raw.camera?.target) || pos;
    const rawCategory = String(raw.body?.category || 'note').toLowerCase();

    return {
        id: sanitizeId(raw.id, 'ann', index),
        target: {
            position: pos,
            normal: sanitizeNormalVec3(raw.target?.normal),
            meshName: sanitizeText(raw.target?.meshName, ANNOTATION_LIMITS.maxMeshNameLength, false) || null,
        },
        camera: camPos
            ? {
                  position: camPos,
                  target: camTarget,
                  projection: raw.camera?.projection === 'orthographic' ? 'orthographic' : 'perspective',
              }
            : null,
        body: {
            title:
                sanitizeText(raw.body?.title, ANNOTATION_LIMITS.maxTitleLength, false) || `Point ${index + 1}`,
            summary: sanitizeText(raw.body?.summary, ANNOTATION_LIMITS.maxSummaryLength, true),
            category: VALID_CATEGORIES.has(rawCategory) ? rawCategory : 'note',
            tags: sanitizeTags(raw.body?.tags),
            author: sanitizeText(raw.body?.author, ANNOTATION_LIMITS.maxAuthorLength, false) || null,
            createdAt: sanitizeIsoDate(raw.body?.createdAt),
        },
        style: {
            color: sanitizeHexColor(raw.style?.color),
        },
    };
}

export function normalizeAnnotationList(list) {
    if (!Array.isArray(list)) return [];
    const result = [];
    const seenIds = new Set();

    for (let i = 0; i < list.length && result.length < ANNOTATION_LIMITS.maxAnnotations; i++) {
        const normalized = normalizeAnnotation(list[i], i);
        if (normalized && !seenIds.has(normalized.id)) {
            seenIds.add(normalized.id);
            result.push(normalized);
        }
    }
    return result;
}

/**
 * Exports internal annotations into W3C Web Annotation / IIIF 3D JSON-LD format.
 */
export function toW3CWebAnnotations(annotations, modelResourceId = '') {
    return normalizeAnnotationList(annotations).map((ann) => ({
        '@context': 'http://www.w3.org/ns/anno.jsonld',
        id: ann.id,
        type: 'Annotation',
        motivation: 'commenting',
        ...(ann.body.createdAt ? { created: ann.body.createdAt } : {}),
        ...(ann.body.author ? { creator: { type: 'Person', name: ann.body.author } } : {}),
        body: {
            type: 'TextualBody',
            format: 'text/plain',
            title: ann.body.title,
            value: ann.body.summary,
            purpose: ann.body.category,
            ...(ann.body.tags.length > 0 ? { tags: ann.body.tags } : {}),
        },
        target: {
            type: 'SpecificResource',
            source: sanitizeText(modelResourceId, 512, false),
            selector: {
                type: 'PointSelector',
                x: Number(ann.target.position[0].toFixed(6)),
                y: Number(ann.target.position[1].toFixed(6)),
                z: Number(ann.target.position[2].toFixed(6)),
                ...(ann.target.normal ? { normal: ann.target.normal } : {}),
                ...(ann.target.meshName ? { meshName: ann.target.meshName } : {}),
            },
        },
    }));
}

/**
 * Encodes/decodes compact annotation arrays for URL hash sharing (#annotations=...)
 * with strict base64 length limits to prevent URL payload abuse.
 */
export function encodeAnnotationsHash(annotations) {
    const compact = normalizeAnnotationList(annotations).map((a) => ({
        id: a.id,
        p: a.target.position.map((n) => Number(n.toFixed(5))),
        n: a.target.normal ? a.target.normal.map((n) => Number(n.toFixed(3))) : undefined,
        c: a.camera ? { p: a.camera.position, t: a.camera.target } : undefined,
        t: a.body.title,
        s: a.body.summary,
        k: a.body.category,
    }));
    return btoa(encodeURIComponent(JSON.stringify(compact)));
}

export function decodeAnnotationsHash(hashString) {
    const match = String(hashString || '').match(/annotations=([A-Za-z0-9+/=]{1,32768})/);
    if (!match) return null;
    try {
        const parsed = JSON.parse(decodeURIComponent(atob(match[1])));
        if (!Array.isArray(parsed)) return null;
        return normalizeAnnotationList(
            parsed.slice(0, ANNOTATION_LIMITS.maxAnnotations).map((item) => ({
                id: item?.id,
                target: { position: item?.p, normal: item?.n || null },
                camera: item?.c ? { position: item.c.p, target: item.c.t } : null,
                body: { title: item?.t, summary: item?.s, category: item?.k || 'note' },
            }))
        );
    } catch {
        return null;
    }
}