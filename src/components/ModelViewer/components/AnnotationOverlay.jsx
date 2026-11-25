import { useState, useEffect, useRef } from 'react';
import { ANNOTATION_LIMITS, sanitizeText } from '../utils/annotationAdapters';

const CATEGORY_BADGES = {
    note: { label: 'Note', classes: 'bg-amber-500/15 text-amber-700 border-amber-500/30 dark:text-amber-300' },
    damage: { label: 'Condition', classes: 'bg-rose-500/15 text-rose-700 border-rose-500/30 dark:text-rose-300' },
    iconography: { label: 'Iconography', classes: 'bg-sky-500/15 text-sky-700 border-sky-500/30 dark:text-sky-300' },
    inscription: { label: 'Inscription', classes: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30 dark:text-emerald-300' },
    manufacture: { label: 'Technique', classes: 'bg-purple-500/15 text-purple-700 border-purple-500/30 dark:text-purple-300' },
};

const VALID_CATEGORY_KEYS = new Set(Object.keys(CATEGORY_BADGES));
const MAX_TAGS_INPUT_LENGTH = ANNOTATION_LIMITS.maxTags * (ANNOTATION_LIMITS.maxTagLength + 2);

function AnnotationFields({ title, setTitle, summary, setSummary, category, setCategory, tagsInput, setTagsInput, titleInputRef }) {
    const fieldClass = 'w-full px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-base lg:text-xs focus:outline-hidden focus:border-amber-500';
    const labelClass = 'flex flex-col gap-1 text-slate-600 dark:text-slate-300';
    return (
        <>
            <label className={labelClass}>
                Title
                <input ref={titleInputRef} type="text" required maxLength={ANNOTATION_LIMITS.maxTitleLength}
                    value={title} onChange={(e) => setTitle(e.target.value)} className={fieldClass} />
            </label>
            <label className={labelClass}>
                Category
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={fieldClass}>
                    {Object.entries(CATEGORY_BADGES).map(([key, meta]) => (
                        <option key={key} value={key}>{meta.label}</option>
                    ))}
                </select>
            </label>
            <div className="flex flex-col gap-1">
                <label className={labelClass}>
                    Description
                    <textarea rows={2} maxLength={ANNOTATION_LIMITS.maxSummaryLength}
                        value={summary} onChange={(e) => setSummary(e.target.value)} className={`${fieldClass} resize-none`} />
                </label>
                <span className="text-[10px] font-mono text-right text-slate-400">
                    {summary.length}/{ANNOTATION_LIMITS.maxSummaryLength}
                </span>
            </div>
            <label className={labelClass}>
                Tags (comma-separated, max {ANNOTATION_LIMITS.maxTags})
                <input type="text" maxLength={MAX_TAGS_INPUT_LENGTH} value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)} className={fieldClass} />
            </label>
        </>
    );
}

export default function AnnotationOverlay({
    annotations = [],
    projectedPins = [],
    selectedId = null,
    onSelect,
    draftAnchor = null,
    onCancelDraft,
    onSaveDraft,
    canCreate = false,
    canEdit = false,
    canDelete = false,
    onUpdate,
    onDelete,
    renderAnnotationBody = null,
    showTourBar = true,
}) {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [category, setCategory] = useState('note');
    const [tagsInput, setTagsInput] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const titleInputRef = useRef(null);

    const atMaxCapacity = annotations.length >= ANNOTATION_LIMITS.maxAnnotations;

    useEffect(() => {
        if (draftAnchor) {
            setError('');
            setEditingId(null);
            setTitle('');
            setSummary('');
            setCategory('note');
            setTagsInput('');
            const frame = requestAnimationFrame(() => {
                titleInputRef.current?.focus({ preventScroll: true });
            });
            return () => cancelAnimationFrame(frame);
        }
    }, [draftAnchor]);

    useEffect(() => {
        setError('');
        setEditingId(null);
    }, [selectedId]);

    const selectedIndex = annotations.findIndex((a) => a.id === selectedId);
    const selectedAnnotation = selectedIndex >= 0 ? annotations[selectedIndex] : null;
    const selectedPin = projectedPins.find((p) => p.id === selectedId);
    const isSheetOpen = Boolean(selectedAnnotation || (canCreate && draftAnchor));

    const startEditing = (ann) => {
        setError('');
        setEditingId(ann.id);
        setTitle(sanitizeText(ann.body.title, ANNOTATION_LIMITS.maxTitleLength, false));
        setSummary(sanitizeText(ann.body.summary, ANNOTATION_LIMITS.maxSummaryLength, true));
        setCategory(VALID_CATEGORY_KEYS.has(ann.body.category) ? ann.body.category : 'note');
        setTagsInput((ann.body.tags || []).slice(0, ANNOTATION_LIMITS.maxTags).join(', '));
    };

    const parseAndSanitizeTags = (rawInput) => {
        const seen = new Set();
        const out = [];
        for (const piece of String(rawInput || '').split(',')) {
            const clean = sanitizeText(piece, ANNOTATION_LIMITS.maxTagLength, false)
                .toLowerCase()
                .replace(/[^a-z0-9._-]/g, '-');
            if (clean && !seen.has(clean)) {
                seen.add(clean);
                out.push(clean);
                if (out.length >= ANNOTATION_LIMITS.maxTags) break;
            }
        }
        return out;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const cleanTitle = sanitizeText(title, ANNOTATION_LIMITS.maxTitleLength, false);
        if (!cleanTitle || submitting) return;

        const cleanSummary = sanitizeText(summary, ANNOTATION_LIMITS.maxSummaryLength, true);
        const cleanCategory = VALID_CATEGORY_KEYS.has(category) ? category : 'note';
        const parsedTags = parseAndSanitizeTags(tagsInput);

        setSubmitting(true);
        setError('');
        try {
            if (editingId && selectedAnnotation) {
                if (!onUpdate) throw new Error('An onUpdate callback is required to edit annotations');
                await onUpdate({
                    ...selectedAnnotation,
                    body: {
                        ...selectedAnnotation.body,
                        title: cleanTitle,
                        summary: cleanSummary,
                        category: cleanCategory,
                        tags: parsedTags,
                    },
                });
                setEditingId(null);
            } else if (draftAnchor && !atMaxCapacity) {
                if (!onSaveDraft) throw new Error('An onSaveDraft callback is required to create annotations');
                await onSaveDraft({
                    target: draftAnchor.target,
                    camera: draftAnchor.camera,
                    body: {
                        title: cleanTitle,
                        summary: cleanSummary,
                        category: cleanCategory,
                        tags: parsedTags,
                        createdAt: new Date().toISOString(),
                    },
                });
            }
        } catch (err) {
            console.error('Failed to save annotation:', err);
            setError('Could not save the annotation. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!selectedAnnotation || submitting) return;
        setSubmitting(true);
        setError('');
        try {
            if (!onDelete) throw new Error('An onDelete callback is required to delete annotations');
            await onDelete(selectedAnnotation.id);
        } catch (err) {
            console.error('Failed to delete annotation:', err);
            setError('Could not delete the annotation. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const fields = (
        <AnnotationFields title={title} setTitle={setTitle} summary={summary} setSummary={setSummary}
            category={category} setCategory={setCategory} tagsInput={tagsInput} setTagsInput={setTagsInput}
            titleInputRef={titleInputRef} />
    );

    const handleStepTour = (delta) => {
        if (annotations.length === 0 || !onSelect) return;
        const nextIdx =
            selectedIndex < 0
                ? 0
                : (selectedIndex + delta + annotations.length) % annotations.length;
        onSelect(annotations[nextIdx]);
    };

    // Positioned below the wrapped TopBar on mobile/tablet (<1024px) and top-right on desktop (>=1024px),
    // keeping it completely clear of both the TopBar and the bottom Zebra Scale Bar / Toolbar.
    const cardPositionClasses =
        'pointer-events-auto absolute top-32 sm:top-28 lg:top-20 inset-x-3 sm:inset-x-auto sm:right-4 w-auto sm:w-80 max-h-[calc(100%-13rem)] lg:max-h-[calc(100%-7rem)] overflow-y-auto bg-white dark:bg-slate-900 border rounded-2xl p-3.5 sm:p-4 shadow-2xl';

    return (
        <>
            {/* 1. Projected 2D Spatial Pins */}
            <div aria-label="3D model annotations" className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 10 }}>
                {projectedPins.map((pin) => {
                    if (!pin.visible) return null;
                    const isSelected = pin.id === selectedId;
                    const idx = annotations.findIndex((annotation) => annotation.id === pin.id);
                    const ann = annotations[idx];
                    if (!ann) return null;

                    return (
                        <button
                            key={pin.id}
                            type="button"
                            aria-label={`Annotation ${idx + 1}: ${ann.body.title}`}
                            aria-pressed={isSelected}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect?.(isSelected ? null : ann);
                            }}
                            style={{
                                transform: `translate(-50%, -50%) translate(${pin.screenX}px, ${pin.screenY}px)`,
                                opacity: isSelected ? 1 : pin.occluded ? 0.35 : 0.95,
                                zIndex: isSelected ? 20 : 10,
                            }}
                            className={`pointer-events-auto absolute top-0 left-0 flex items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all duration-150 shadow-lg border touch-manipulation ${
                                isSelected
                                    ? 'w-8 h-8 lg:w-7 lg:h-7 bg-amber-500 text-slate-950 border-white ring-4 ring-amber-500/30 scale-110'
                                    : 'w-7 h-7 lg:w-6 lg:h-6 bg-slate-900/90 text-amber-400 border-amber-400/80 hover:scale-110 hover:bg-amber-500 hover:text-slate-950 dark:bg-slate-900/95'
                            }`}
                        >
                            {idx + 1}
                        </button>
                    );
                })}
            </div>

            {/* 2. Selected Annotation Detail Card / Edit Form */}
            {selectedAnnotation && !draftAnchor && (
                <aside
                    aria-label="Annotation details"
                    style={{ zIndex: 50 }}
                    className={`${cardPositionClasses} text-slate-800 border-slate-200 dark:text-slate-100 dark:border-slate-800`}
                >
                    {editingId === selectedAnnotation.id ? (
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 text-xs">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                                    Edit Annotation #{selectedIndex + 1}
                                </span>
                                <button
                                    type="button"
                                    disabled={submitting}
                                    onClick={() => { setEditingId(null); setError(''); }}
                                    className="px-1.5 py-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                >
                                    Cancel
                                </button>
                            </div>
                            {fields}
                            {error && <p role="alert" className="text-red-600 dark:text-red-400">{error}</p>}
                            <button
                                type="submit"
                                disabled={submitting || !title.trim()}
                                className="mt-1 px-3 py-2 lg:py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition disabled:opacity-50"
                            >
                                {submitting ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-mono text-[11px] font-bold shrink-0">
                                        {selectedIndex + 1}
                                    </span>
                                    <h3 className="text-sm font-semibold truncate">{selectedAnnotation.body.title}</h3>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                    {annotations.length > 1 && (
                                        <div className="lg:hidden inline-flex items-center gap-0.5 mr-1">
                                            <button
                                                type="button"
                                                aria-label="Previous annotation"
                                                onClick={() => handleStepTour(-1)}
                                                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                aria-label="Next annotation"
                                                onClick={() => handleStepTour(1)}
                                                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                    <button
                                        type="button"
                                        aria-label="Close annotation"
                                        onClick={() => onSelect?.(null)}
                                        className="p-1.5 lg:p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {renderAnnotationBody ? (
                                renderAnnotationBody(selectedAnnotation)
                            ) : (
                                <>
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        {(() => {
                                            const badge =
                                                CATEGORY_BADGES[selectedAnnotation.body.category] || CATEGORY_BADGES.note;
                                            return (
                                                <span
                                                    className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${badge.classes}`}
                                                >
                                                    {badge.label}
                                                </span>
                                            );
                                        })()}
                                        {selectedPin?.occluded && (
                                            <span className="text-[10px] font-mono text-slate-400">
                                                (Reverse side)
                                            </span>
                                        )}
                                    </div>

                                    {selectedAnnotation.body.summary && (
                                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line break-words">
                                            {selectedAnnotation.body.summary}
                                        </p>
                                    )}

                                    {selectedAnnotation.body.tags?.length > 0 && (
                                        <div className="flex flex-wrap gap-1 pt-0.5">
                                            {selectedAnnotation.body.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}

                            {error && <p role="alert" className="text-red-600 dark:text-red-400">{error}</p>}
                            {(canEdit || canDelete) && (
                                <div className="flex items-center justify-end gap-2 pt-2 mt-1 border-t border-slate-200/80 dark:border-slate-800 text-xs lg:text-[11px]">
                                    {canEdit && (
                                        <button
                                            type="button"
                                            onClick={() => startEditing(selectedAnnotation)}
                                            className="px-2.5 py-1.5 lg:px-2 lg:py-1 rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 font-medium"
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {canDelete && (
                                        <button
                                            type="button"
                                            onClick={handleDelete}
                                            disabled={submitting}
                                            className="px-2.5 py-1.5 lg:px-2 lg:py-1 rounded-md text-red-600 hover:bg-red-500/10 dark:text-red-400 font-medium"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </aside>
            )}

            {/* 3. New Annotation Creation Card */}
            {canCreate && draftAnchor && (
                <aside
                    aria-label="New annotation form"
                    style={{ zIndex: 50 }}
                    className={`${cardPositionClasses} text-slate-800 border-amber-500/50 dark:text-slate-100 dark:border-amber-500/40`}
                >
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 text-xs">
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                                New Surface Annotation
                            </span>
                            <button
                                type="button"
                                disabled={submitting}
                                onClick={onCancelDraft}
                                className="px-1.5 py-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                Cancel
                            </button>
                        </div>

                        <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            XYZ: [{draftAnchor.target.position.map((v) => v.toFixed(3)).join(', ')}]
                        </p>

                        {atMaxCapacity && (
                            <p role="alert" className="text-[11px] text-red-600 dark:text-red-400">
                                Maximum limit of {ANNOTATION_LIMITS.maxAnnotations} annotations reached.
                            </p>
                        )}

                        {fields}
                        {error && <p role="alert" className="text-red-600 dark:text-red-400">{error}</p>}

                        <button
                            type="submit"
                            disabled={submitting || !title.trim() || atMaxCapacity}
                            className="mt-1 px-3 py-2 lg:py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition disabled:opacity-50"
                        >
                            {submitting ? 'Saving Pin...' : 'Save Annotation'}
                        </button>
                    </form>
                </aside>
            )}

            {/* 4. Compact Guided Tour Stepper Pill */}
            {showTourBar && annotations.length > 0 && (
                <div
                    role="region"
                    aria-label="Annotation tour navigation"
                    style={{ zIndex: 30 }}
                    className={`pointer-events-auto absolute bottom-32 sm:bottom-24 lg:bottom-20 right-3 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 items-center gap-1 bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-800/80 backdrop-blur-md border rounded-full px-2 py-1 shadow-xl text-xs max-w-[calc(100vw-6.5rem)] lg:max-w-sm ${
                        isSheetOpen ? 'hidden lg:inline-flex' : 'inline-flex'
                    }`}
                >
                    <button
                        type="button"
                        aria-label="Previous annotation"
                        onClick={() => handleStepTour(-1)}
                        className="p-1.5 lg:p-1 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800 transition shrink-0"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleStepTour(1)}
                        className="px-1.5 lg:px-2 font-mono text-[11px] font-medium truncate"
                    >
                        {selectedAnnotation ? (
                            <span>
                                <strong className="text-amber-600 dark:text-amber-400">
                                    {selectedIndex + 1}/{annotations.length}
                                </strong>{' '}
                                {selectedAnnotation.body.title}
                            </span>
                        ) : (
                            <span>Pins ({annotations.length})</span>
                        )}
                    </button>

                    <button
                        type="button"
                        aria-label="Next annotation"
                        onClick={() => handleStepTour(1)}
                        className="p-1.5 lg:p-1 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800 transition shrink-0"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}