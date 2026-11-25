import { useEffect, useRef } from 'react';

const STATUS_BADGE_STYLES = {
    MEASURED:
        'bg-emerald-500/15 text-emerald-700 border-emerald-500/30 dark:bg-emerald-400/15 dark:text-emerald-300 dark:border-emerald-400/30',
    ESTIMATED:
        'bg-amber-500/15 text-amber-700 border-amber-500/30 dark:bg-amber-400/15 dark:text-amber-300 dark:border-amber-400/30',
    PATCHED:
        'bg-orange-500/15 text-orange-700 border-orange-500/30 dark:bg-orange-400/15 dark:text-orange-300 dark:border-orange-400/30',
    SYNTHETIC:
        'bg-indigo-500/15 text-indigo-700 border-indigo-500/30 dark:bg-indigo-400/15 dark:text-indigo-300 dark:border-indigo-400/30',
    'NOT CREATED':
        'bg-slate-500/15 text-slate-600 border-slate-500/25 dark:bg-slate-400/10 dark:text-slate-400 dark:border-slate-400/20',
};

const DEFAULT_BADGE_STYLE =
    'bg-slate-500/15 text-slate-600 border-slate-500/25 dark:bg-slate-400/10 dark:text-slate-400 dark:border-slate-400/20';

function SectionHeading({ children }) {
    return (
        <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-3">
            {children}
        </h3>
    );
}

function formatValue(value) {
    if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
    }
    return String(value);
}

function KeyValueGrid({ fields }) {
    if (!fields || !fields.length) return null;

    return (
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs">
            {fields.map((field, idx) => (
                <div
                    key={`${field.label}-${idx}`}
                    className="grid grid-cols-[150px_1fr] gap-3 items-baseline"
                >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {field.label}
                    </dt>
                    <dd className="text-slate-800 dark:text-slate-100 leading-relaxed break-words">
                        {formatValue(field.value)}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

export default function ParadataDrawer({ isOpen, onClose, paradata }) {
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    useEffect(() => {
        if (!isOpen || !paradata) return;
        const previousFocus = document.activeElement;
        closeRef.current?.focus();
        return () => {
            if (previousFocus?.isConnected) previousFocus.focus();
        };
    }, [isOpen, Boolean(paradata)]);

    if (!isOpen || !paradata) return null;

    const headerTitle =
        paradata.title ||
        `FULL METADATA & PARADATA RECORD${paradata.recordId ? ` — ${paradata.recordId}` : ''}`;

    const hasProcessingSummary =
        Boolean(paradata.processingSummary) &&
        ((paradata.processingSummary.fields && paradata.processingSummary.fields.length > 0) ||
            (paradata.processingSummary.ratings && paradata.processingSummary.ratings.length > 0));

    const hasDerivedAssets =
        Boolean(paradata.derivedAssets) &&
        (Boolean(paradata.derivedAssets.software) ||
            (paradata.derivedAssets.assets && paradata.derivedAssets.assets.length > 0));

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={headerTitle}
            ref={dialogRef}
            className="absolute inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm"
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    onClose();
                } else if (e.key === 'Tab') {
                    const focusable = dialogRef.current.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
                    if (!focusable.length) return;
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }}
        >
            <div
                className="relative w-full max-w-5xl max-h-full flex flex-col rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top Header */}
                <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
                    <h2 className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-300 truncate">
                        {headerTitle}
                    </h2>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close paradata record"
                        className="shrink-0 rounded-lg px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
                    >
                        Close
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="overflow-y-auto px-5 py-5 space-y-6 divide-y divide-slate-200/80 dark:divide-slate-800">
                    {/* 1. Object / Curatorial Metadata */}
                    {paradata.objectMetadata && paradata.objectMetadata.length > 0 && (
                        <section>
                            <KeyValueGrid fields={paradata.objectMetadata} />
                        </section>
                    )}

                    {/* 2. Photogrammetry Processing */}
                    {hasProcessingSummary && (
                        <section className="pt-5">
                            <SectionHeading>Photogrammetry Processing</SectionHeading>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs">
                                <div className="space-y-2.5">
                                    {paradata.processingSummary.fields?.map((f, i) => (
                                        <div
                                            key={`${f.label}-${i}`}
                                            className="grid grid-cols-[150px_1fr] gap-3 items-baseline"
                                        >
                                            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                {f.label}
                                            </span>
                                            <span className="text-slate-800 dark:text-slate-100">
                                                {formatValue(f.value)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2.5">
                                    {paradata.processingSummary.ratings?.map((r, i) => (
                                        <div
                                            key={`${r.label}-${i}`}
                                            className="grid grid-cols-[150px_1fr] gap-3 items-baseline"
                                        >
                                            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                {r.label}
                                            </span>
                                            <span className="text-slate-800 dark:text-slate-100">
                                                {formatValue(r.value)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 3. Texture Maps Provenance Cards */}
                    {paradata.textureMaps && paradata.textureMaps.length > 0 && (
                        <section className="pt-5">
                            <SectionHeading>Texture Maps</SectionHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {paradata.textureMaps.map((tex) => (
                                    <div
                                        key={tex.name}
                                        className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-3.5"
                                    >
                                        <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2">
                                            {tex.name}
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {(tex.statuses || []).map((status) => (
                                                <span
                                                    key={status}
                                                    className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider ${
                                                        STATUS_BADGE_STYLES[status] ||
                                                        DEFAULT_BADGE_STYLE
                                                    }`}
                                                >
                                                    {status}
                                                </span>
                                            ))}
                                        </div>
                                        {tex.notes && (
                                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {tex.notes}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 4. Assessment */}
                    {paradata.assessment && paradata.assessment.length > 0 && (
                        <section className="pt-5">
                            <SectionHeading>Assessment</SectionHeading>
                            <KeyValueGrid fields={paradata.assessment} />
                        </section>
                    )}

                    {/* 5. Post-Processing Lab Notes */}
                    {paradata.labNotes && (
                        <section className="pt-5">
                            <SectionHeading>Post-Processing Lab Notes</SectionHeading>
                            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                                {paradata.labNotes}
                            </p>
                        </section>
                    )}

                    {/* 6. Capture Tolerances & Equipment */}
                    {paradata.captureTolerances && paradata.captureTolerances.length > 0 && (
                        <section className="pt-5">
                            <SectionHeading>Capture Tolerances &amp; Equipment</SectionHeading>
                            <KeyValueGrid fields={paradata.captureTolerances} />
                        </section>
                    )}

                    {/* 7. Acquisition, By Chunk */}
                    {paradata.acquisitionChunks && paradata.acquisitionChunks.length > 0 && (
                        <section className="pt-5">
                            <SectionHeading>Acquisition, By Chunk</SectionHeading>
                            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-slate-100/80 dark:bg-slate-800/70 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        <tr>
                                            <th className="px-3 py-2">Chunk</th>
                                            <th className="px-3 py-2">Exposure</th>
                                            <th className="px-3 py-2">Optics &amp; Focus</th>
                                            <th className="px-3 py-2">Rotational Steps</th>
                                            <th className="px-3 py-2 text-right">Images</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {paradata.acquisitionChunks.map((row, idx) => (
                                            <tr
                                                key={`${row.chunk}-${idx}`}
                                                className="hover:bg-slate-50 dark:hover:bg-slate-800/30"
                                            >
                                                <td className="px-3 py-2 font-medium text-slate-900 dark:text-slate-100">
                                                    {row.chunk}
                                                </td>
                                                <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                                                    {row.exposure ?? '—'}
                                                </td>
                                                <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                                                    {row.opticsAndFocus ?? '—'}
                                                </td>
                                                <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                                                    {row.rotationalSteps ?? '—'}
                                                </td>
                                                <td className="px-3 py-2 text-right font-mono text-slate-700 dark:text-slate-300">
                                                    {row.images ?? '—'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {/* 8. Processing & Derived Assets */}
                    {hasDerivedAssets && (
                        <section className="pt-5">
                            <SectionHeading>Processing &amp; Derived Assets</SectionHeading>
                            {paradata.derivedAssets.software && (
                                <div className="mb-3">
                                    <KeyValueGrid
                                        fields={[
                                            {
                                                label: 'Software',
                                                value: paradata.derivedAssets.software,
                                            },
                                        ]}
                                    />
                                </div>
                            )}
                            {paradata.derivedAssets.assets &&
                                paradata.derivedAssets.assets.length > 0 && (
                                    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                                        <table className="w-full text-left text-xs">
                                            <thead className="bg-slate-100/80 dark:bg-slate-800/70 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                <tr>
                                                    <th className="px-3 py-2">Asset</th>
                                                    <th className="px-3 py-2">Mesh</th>
                                                    <th className="px-3 py-2">Alignment</th>
                                                    <th className="px-3 py-2 text-right">
                                                        Tie Points
                                                    </th>
                                                    <th className="px-3 py-2 text-right">
                                                        Vertices
                                                    </th>
                                                    <th className="px-3 py-2 text-right">Faces</th>
                                                    <th className="px-3 py-2">Filename</th>
                                                    <th className="px-3 py-2">Format</th>
                                                    <th className="px-3 py-2 text-right">Size</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                                {paradata.derivedAssets.assets.map((asset, idx) => (
                                                    <tr
                                                        key={`${asset.asset}-${idx}`}
                                                        className="hover:bg-slate-50 dark:hover:bg-slate-800/30"
                                                    >
                                                        <td className="px-3 py-2 font-medium text-slate-900 dark:text-slate-100">
                                                            {asset.asset}
                                                        </td>
                                                        <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                                                            {asset.mesh ?? '—'}
                                                        </td>
                                                        <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                                                            {asset.alignment ?? '—'}
                                                        </td>
                                                        <td className="px-3 py-2 text-right font-mono text-slate-700 dark:text-slate-300">
                                                            {asset.tiePoints ?? '—'}
                                                        </td>
                                                        <td className="px-3 py-2 text-right font-mono text-slate-700 dark:text-slate-300">
                                                            {asset.vertices ?? '—'}
                                                        </td>
                                                        <td className="px-3 py-2 text-right font-mono text-slate-700 dark:text-slate-300">
                                                            {asset.faces ?? '—'}
                                                        </td>
                                                        <td className="px-3 py-2 font-mono text-indigo-600 dark:text-indigo-400">
                                                            {asset.downloadUrl && asset.filename ? (
                                                                <a
                                                                    href={asset.downloadUrl}
                                                                    className="underline hover:no-underline"
                                                                >
                                                                    {asset.filename}
                                                                </a>
                                                            ) : (
                                                                (asset.filename ?? '—')
                                                            )}
                                                        </td>
                                                        <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                                                            {asset.format ?? '—'}
                                                        </td>
                                                        <td className="px-3 py-2 text-right font-mono text-slate-700 dark:text-slate-300">
                                                            {asset.size ?? '—'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                        </section>
                    )}

                    {/* 9. Optional Extra Sections */}
                    {paradata.extraSections?.map((sec, idx) => (
                        <section key={`${sec.title}-${idx}`} className="pt-5">
                            <SectionHeading>{sec.title}</SectionHeading>
                            {sec.fields && sec.fields.length > 0 && (
                                <KeyValueGrid fields={sec.fields} />
                            )}
                            {sec.notes && (
                                <p className="mt-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                                    {sec.notes}
                                </p>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { ParadataDrawer };