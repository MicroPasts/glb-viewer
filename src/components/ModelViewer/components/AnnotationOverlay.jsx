import { useState, useEffect, useRef } from 'react';

const CATEGORY_BADGES = {
    note: { label: 'Note', classes: 'bg-amber-500/15 text-amber-700 border-amber-500/30 dark:text-amber-300' },
    damage: { label: 'Condition', classes: 'bg-rose-500/15 text-rose-700 border-rose-500/30 dark:text-rose-300' },
    iconography: { label: 'Iconography', classes: 'bg-sky-500/15 text-sky-700 border-sky-500/30 dark:text-sky-300' },
    inscription: { label: 'Inscription', classes: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30 dark:text-emerald-300' },
    manufacture: { label: 'Technique', classes: 'bg-purple-500/15 text-purple-700 border-purple-500/30 dark:text-purple-300' },
};

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
    const titleInputRef = useRef(null);

    // Reset form when a new 3D surface point is clicked (preventScroll avoids viewport jump)
    useEffect(() => {
        if (draftAnchor) {
            setEditingId(null);
            setTitle('');
            setSummary('');
            setCategory('note');
            setTagsInput('');
            requestAnimationFrame(() => {
                titleInputRef.current?.focus({ preventScroll: true });
            });
        }
    }, [draftAnchor]);

    const selectedIndex = annotations.findIndex((a) => a.id === selectedId);
    const selectedAnnotation = selectedIndex >= 0 ? annotations[selectedIndex] : null;
    const selectedPin = projectedPins.find((p) => p.id === selectedId);

    const startEditing = (ann) => {
        setEditingId(ann.id);
        setTitle(ann.body.title || '');
        setSummary(ann.body.summary || '');
        setCategory(ann.body.category || 'note');
        setTagsInput((ann.body.tags || []).join(', '));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || submitting) return;

        const parsedTags = tagsInput
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean);

        setSubmitting(true);
        try {
            if (editingId && onUpdate && selectedAnnotation) {
                await onUpdate({
                    ...selectedAnnotation,
                    body: {
                        ...selectedAnnotation.body,
                        title: title.trim(),
                        summary: summary.trim(),
                        category,
                        tags: parsedTags,
                    },
                });
                setEditingId(null);
            } else if (draftAnchor && onSaveDraft) {
                await onSaveDraft({
                    target: draftAnchor.target,
                    camera: draftAnchor.camera,
                    body: {
                        title: title.trim(),
                        summary: summary.trim(),
                        category,
                        tags: parsedTags,
                        createdAt: new Date().toISOString(),
                    },
                });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleStepTour = (delta) => {
        if (annotations.length === 0 || !onSelect) return;
        const nextIdx =
            selectedIndex < 0
                ? 0
                : (selectedIndex + delta + annotations.length) % annotations.length;
        onSelect(annotations[nextIdx]);
    };

    return (
        <>
            {/* 1. Projected 2D Spatial Pins */}
            <div aria-label="3D model annotations" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                {projectedPins.map((pin, idx) => {
                    if (!pin.visible) return null;
                    const isSelected = pin.id === selectedId;
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
                            }}
                            className={`pointer-events-auto absolute top-0 left-0 flex items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all duration-150 shadow-lg border ${
                                isSelected
                                    ? 'w-7 h-7 bg-amber-500 text-slate-950 border-white ring-4 ring-amber-500/30 scale-110 z-20'
                                    : 'w-6 h-6 bg-slate-900/90 text-amber-400 border-amber-400/80 hover:scale-110 hover:bg-amber-500 hover:text-slate-950 dark:bg-slate-900/95'
                            }`}
                        >
                            {idx + 1}
                        </button>
                    );
                })}
            </div>

            {/* 2. Selected Annotation Detail Popover (or Edit Form) */}
            {selectedAnnotation && !draftAnchor && (
                <aside
                    aria-label="Annotation details"
                    className="pointer-events-auto absolute top-20 right-3 sm:right-4 z-30 w-80 max-w-[calc(100vw-1.5rem)] bg-white/95 text-slate-800 border-slate-200 dark:bg-slate-900/95 dark:text-slate-100 dark:border-slate-800 backdrop-blur-xl border rounded-2xl p-4 shadow-2xl"
                >
                    {editingId === selectedAnnotation.id ? (
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2.5 text-xs">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                                    Edit Annotation #{selectedIndex + 1}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setEditingId(null)}
                                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                >
                                    Cancel
                                </button>
                            </div>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Feature title..."
                                className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                            />
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                            >
                                {Object.entries(CATEGORY_BADGES).map(([key, meta]) => (
                                    <option key={key} value={key}>
                                        {meta.label}
                                    </option>
                                ))}
                            </select>
                            <textarea
                                rows={3}
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                                placeholder="Curatorial observation or condition note..."
                                className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500 resize-none"
                            />
                            <input
                                type="text"
                                value={tagsInput}
                                onChange={(e) => setTagsInput(e.target.value)}
                                placeholder="Tags (comma-separated)"
                                className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                            />
                            <button
                                type="submit"
                                disabled={submitting}
                                className="mt-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition disabled:opacity-50"
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
                                <button
                                    type="button"
                                    aria-label="Close annotation"
                                    onClick={() => onSelect?.(null)}
                                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
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
                                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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

                            {(canEdit || canDelete) && (
                                <div className="flex items-center justify-end gap-2 pt-2 mt-1 border-t border-slate-200/80 dark:border-slate-800 text-[11px]">
                                    {canEdit && (
                                        <button
                                            type="button"
                                            onClick={() => startEditing(selectedAnnotation)}
                                            className="px-2 py-1 rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 font-medium"
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {canDelete && (
                                        <button
                                            type="button"
                                            onClick={() => onDelete?.(selectedAnnotation.id)}
                                            className="px-2 py-1 rounded-md text-red-600 hover:bg-red-500/10 dark:text-red-400 font-medium"
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

            {/* 3. New Annotation Creation Popover */}
            {canCreate && draftAnchor && (
                <aside
                    aria-label="New annotation form"
                    className="pointer-events-auto absolute top-20 right-3 sm:right-4 z-30 w-80 max-w-[calc(100vw-1.5rem)] bg-white/95 text-slate-800 border-amber-500/50 dark:bg-slate-900/95 dark:text-slate-100 dark:border-amber-500/40 backdrop-blur-xl border rounded-2xl p-4 shadow-2xl"
                >
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2.5 text-xs">
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                                New Surface Annotation
                            </span>
                            <button
                                type="button"
                                onClick={onCancelDraft}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                Cancel
                            </button>
                        </div>

                        <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            XYZ: [{draftAnchor.target.position.map((v) => v.toFixed(3)).join(', ')}]
                        </p>

                        <input
                            ref={titleInputRef}
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title (e.g. Uraeus Cobra, Tool Marks)..."
                            className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                        />

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                        >
                            {Object.entries(CATEGORY_BADGES).map(([key, meta]) => (
                                <option key={key} value={key}>
                                    {meta.label}
                                </option>
                            ))}
                        </select>

                        <textarea
                            rows={3}
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="Describe this feature..."
                            className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500 resize-none"
                        />

                        <input
                            type="text"
                            value={tagsInput}
                            onChange={(e) => setTagsInput(e.target.value)}
                            placeholder="Tags (comma-separated, optional)"
                            className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                        />

                        <button
                            type="submit"
                            disabled={submitting || !title.trim()}
                            className="mt-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition disabled:opacity-50"
                        >
                            {submitting ? 'Saving Pin...' : 'Save Annotation'}
                        </button>
                    </form>
                </aside>
            )}

            {/* 4. Compact Guided Tour Stepper Bar (when annotations exist) */}
            {showTourBar && annotations.length > 0 && (
                <div
                    role="region"
                    aria-label="Annotation tour navigation"
                    className="pointer-events-auto absolute bottom-20 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-800/80 backdrop-blur-md border rounded-full px-2.5 py-1 shadow-xl text-xs"
                >
                    <button
                        type="button"
                        aria-label="Previous annotation"
                        onClick={() => handleStepTour(-1)}
                        className="p-1 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800 transition"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleStepTour(1)}
                        className="px-2 font-mono text-[11px] font-medium truncate max-w-[180px] sm:max-w-[240px]"
                    >
                        {selectedAnnotation ? (
                            <span>
                                <strong className="text-amber-600 dark:text-amber-400">
                                    {selectedIndex + 1}/{annotations.length}
                                </strong>{' '}
                                {selectedAnnotation.body.title}
                            </span>
                        ) : (
                            <span>Annotations ({annotations.length})</span>
                        )}
                    </button>

                    <button
                        type="button"
                        aria-label="Next annotation"
                        onClick={() => handleStepTour(1)}
                        className="p-1 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800 transition"
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