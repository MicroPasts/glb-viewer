/**
 * Normalizes either a native annotation object or a W3C Web Annotation / IIIF 3D
 * PointSelector payload into a consistent internal structure.
 */
export function normalizeAnnotation(raw, index = 0) {
    if (!raw || typeof raw !== 'object') return null;

    // Detect W3C Web Annotation / IIIF 3D format
    const isW3C = Boolean(raw['@context'] || raw.type === 'Annotation' || raw.target?.selector);

    if (isW3C) {
        const selector = Array.isArray(raw.target?.selector)
            ? raw.target.selector.find((s) => s.type === 'PointSelector')
            : raw.target?.selector;

        const pos = selector
            ? [Number(selector.x) || 0, Number(selector.y) || 0, Number(selector.z) || 0]
            : [0, 0, 0];

        const bodyObj = Array.isArray(raw.body) ? raw.body[0] : raw.body;
        const textValue = typeof bodyObj === 'string' ? bodyObj : bodyObj?.value || '';

        return {
            id: raw.id || `w3c-ann-${index}-${Date.now()}`,
            target: {
                position: pos,
                normal: selector?.normal || null,
                meshName: selector?.meshName || null,
            },
            camera: raw.camera || null,
            body: {
                title: bodyObj?.title || raw.label || `Annotation ${index + 1}`,
                summary: textValue,
                category: bodyObj?.purpose || 'note',
                tags: Array.isArray(bodyObj?.tags) ? bodyObj.tags : [],
                author: raw.creator?.name || raw.creator || null,
                createdAt: raw.created || null,
            },
            style: raw.style || { color: '#f59e0b' },
            _raw: raw,
        };
    }

    // Native portable schema
    return {
        id: raw.id || `ann-${index}-${Date.now()}`,
        target: {
            position: Array.isArray(raw.target?.position) ? raw.target.position.map(Number) : [0, 0, 0],
            normal: Array.isArray(raw.target?.normal) ? raw.target.normal.map(Number) : null,
            meshName: raw.target?.meshName || null,
        },
        camera: raw.camera?.position
            ? {
                  position: raw.camera.position.map(Number),
                  target: Array.isArray(raw.camera.target)
                      ? raw.camera.target.map(Number)
                      : raw.target.position.map(Number),
                  projection: raw.camera.projection || 'perspective',
              }
            : null,
        body: {
            title: raw.body?.title || `Point ${index + 1}`,
            summary: raw.body?.summary || '',
            category: raw.body?.category || 'note',
            tags: Array.isArray(raw.body?.tags) ? raw.body.tags : [],
            author: raw.body?.author || null,
            createdAt: raw.body?.createdAt || null,
        },
        style: {
            color: raw.style?.color || '#f59e0b',
        },
    };
}

export function normalizeAnnotationList(list) {
    if (!Array.isArray(list)) return [];
    return list.map((item, idx) => normalizeAnnotation(item, idx)).filter(Boolean);
}

/**
 * Exports internal annotations into W3C Web Annotation / IIIF 3D JSON-LD format
 * suitable for Linked Art, IIIF manifests, or interoperable triple stores.
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
            source: modelResourceId,
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
    const match = String(hashString || '').match(/annotations=([A-Za-z0-9+/=]+)/);
    if (!match) return null;
    try {
        const parsed = JSON.parse(decodeURIComponent(atob(match[1])));
        if (!Array.isArray(parsed)) return null;
        return parsed.map((item, idx) =>
            normalizeAnnotation(
                {
                    id: item.id,
                    target: { position: item.p, normal: item.n || null },
                    camera: item.c ? { position: item.c.p, target: item.c.t } : null,
                    body: { title: item.t, summary: item.s, category: item.k || 'note' },
                },
                idx
            )
        );
    } catch {
        return null;
    }
}