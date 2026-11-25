import { useState } from 'react';

const METRIC_STEPS_MM = [
    0.1, 0.2, 0.5,
    1, 2, 5,
    10, 20, 25, 50,
    100, 200, 250, 500,
    1000, 2000, 5000,
];

const IMPERIAL_STEPS_IN = [
    0.05, 0.1, 0.25, 0.5,
    1, 2, 4, 6, 12, 24, 36, 60,
];

const REFERENCE_OBJECTS = [
    { id: 'battery', label: 'AA Cell', widthMm: 50.5, heightMm: 14.5, detail: '50.5 × 14.5 mm' },
    { id: 'ball', label: 'Tennis Ball', widthMm: 67.0, heightMm: 67.0, detail: 'Ø 67 mm' },
    { id: 'can', label: '330ml Can', widthMm: 66.0, heightMm: 115.0, detail: '66 × 115 mm' },
    { id: 'a4', label: 'A4 Sheet', widthMm: 210.0, heightMm: 297.0, detail: '210 × 297 mm' },
];

export default function ScaleBarOverlay({
    pixelsPerMm,
    isUnscaled,
    measureUnit = 'mm',
    allowReferenceToggle = true,
}) {
    const [expanded, setExpanded] = useState(false);
    const [selectedRefId, setSelectedRefId] = useState('battery');

    if (isUnscaled || !pixelsPerMm || pixelsPerMm <= 0 || !Number.isFinite(pixelsPerMm)) {
        return null;
    }

    // 1. Compute Zebra Scale Bar dimensions
    const targetWidthPx = 116;
    let barWidthPx = 0;
    let label = '';

    if (measureUnit === 'in') {
        const pixelsPerInch = pixelsPerMm * 25.4;
        const rawInches = targetWidthPx / pixelsPerInch;
        const bestIn = IMPERIAL_STEPS_IN.reduce((prev, curr) =>
            Math.abs(curr - rawInches) < Math.abs(prev - rawInches) ? curr : prev
        );
        barWidthPx = bestIn * pixelsPerInch;
        label = bestIn >= 12 && bestIn % 12 === 0 ? `${bestIn / 12} ft` : `${bestIn} in`;
    } else {
        const rawMm = targetWidthPx / pixelsPerMm;
        const bestMm = METRIC_STEPS_MM.reduce((prev, curr) =>
            Math.abs(curr - rawMm) < Math.abs(prev - rawMm) ? curr : prev
        );
        barWidthPx = bestMm * pixelsPerMm;

        if (bestMm >= 1000) {
            label = `${bestMm / 1000} m`;
        } else if (measureUnit === 'cm' && bestMm >= 1) {
            label = `${bestMm / 10} cm`;
        } else {
            label = `${bestMm} mm`;
        }
    }

    const activeRef = REFERENCE_OBJECTS.find((r) => r.id === selectedRefId) || REFERENCE_OBJECTS[0];
    const refWidthPx = activeRef.widthMm * pixelsPerMm;
    const refHeightPx = activeRef.heightMm * pixelsPerMm;
    const refFitsViewport = refWidthPx >= 14 && refWidthPx <= 260 && refHeightPx <= 220;

    return (
        <div
            role="region"
            aria-label="Physical scale and reference object overlay"
            className="pointer-events-auto inline-flex flex-col gap-2 bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-800/80 backdrop-blur-md border rounded-xl px-3 py-2 shadow-2xl select-none transition-all"
        >
            {/* Expanded Panel: Universal Reference Object Silhouettes */}
            {allowReferenceToggle && expanded && (
                <div className="flex flex-col gap-2 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
                    <div
                        role="group"
                        aria-label="Select physical reference object"
                        className="flex items-center gap-1 bg-slate-100/90 border-slate-200/80 dark:bg-slate-950/70 dark:border-slate-800/70 p-0.5 rounded-lg border"
                    >
                        {REFERENCE_OBJECTS.map((obj) => (
                            <button
                                type="button"
                                key={obj.id}
                                aria-pressed={selectedRefId === obj.id}
                                onClick={() => setSelectedRefId(obj.id)}
                                className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono transition ${
                                    selectedRefId === obj.id
                                        ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                            >
                                {obj.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 text-[10px] font-mono">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{activeRef.label}</span>
                        <span className="text-amber-600 dark:text-amber-400 font-bold">{activeRef.detail}</span>
                    </div>

                    {!refFitsViewport ? (
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 py-1">
                            {refWidthPx > 260 || refHeightPx > 220
                                ? 'Zoom out or pick a smaller object'
                                : 'Zoom in or pick a larger object'}
                        </span>
                    ) : (
                        <div className="flex items-center justify-start py-0.5">
                            {selectedRefId === 'battery' && (
                                <svg
                                    width={Math.round(refWidthPx)}
                                    height={Math.round(refHeightPx)}
                                    viewBox="0 0 101 29"
                                    aria-hidden="true"
                                    className="shrink-0 drop-shadow-xs"
                                >
                                    <rect
                                        x="1"
                                        y="2"
                                        width="93"
                                        height="25"
                                        rx="3"
                                        className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400"
                                        strokeWidth="2"
                                    />
                                    <rect
                                        x="94"
                                        y="9"
                                        width="6"
                                        height="11"
                                        rx="1.5"
                                        className="fill-amber-600 dark:fill-amber-400"
                                    />
                                    <line
                                        x1="24"
                                        y1="2"
                                        x2="24"
                                        y2="27"
                                        className="stroke-amber-600/60 dark:stroke-amber-400/60"
                                        strokeWidth="1.5"
                                    />
                                    <text
                                        x="58"
                                        y="19"
                                        textAnchor="middle"
                                        fontSize="13"
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        className="fill-slate-800 dark:fill-amber-300"
                                    >
                                        AA
                                    </text>
                                </svg>
                            )}

                            {selectedRefId === 'ball' && (
                                <svg
                                    width={Math.round(refWidthPx)}
                                    height={Math.round(refHeightPx)}
                                    viewBox="0 0 100 100"
                                    aria-hidden="true"
                                    className="shrink-0 drop-shadow-xs"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="47"
                                        className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M 18 16 C 42 40, 42 60, 18 84 M 82 16 C 58 40, 58 60, 82 84"
                                        fill="none"
                                        className="stroke-amber-600/70 dark:stroke-amber-300/70"
                                        strokeWidth="2.5"
                                    />
                                </svg>
                            )}

                            {selectedRefId === 'can' && (
                                <svg
                                    width={Math.round(refWidthPx)}
                                    height={Math.round(refHeightPx)}
                                    viewBox="0 0 66 115"
                                    aria-hidden="true"
                                    className="shrink-0 drop-shadow-xs"
                                >
                                    <path
                                        d="M 6 2 L 60 2 L 64 11 L 64 104 L 58 113 L 8 113 L 2 104 L 2 11 Z"
                                        className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400"
                                        strokeWidth="2"
                                    />
                                    <line
                                        x1="2"
                                        y1="11"
                                        x2="64"
                                        y2="11"
                                        className="stroke-amber-600/60 dark:stroke-amber-400/60"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="2"
                                        y1="104"
                                        x2="64"
                                        y2="104"
                                        className="stroke-amber-600/60 dark:stroke-amber-400/60"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            )}

                            {selectedRefId === 'a4' && (
                                <svg
                                    width={Math.round(refWidthPx)}
                                    height={Math.round(refHeightPx)}
                                    viewBox="0 0 210 297"
                                    aria-hidden="true"
                                    className="shrink-0 drop-shadow-xs"
                                >
                                    <polygon
                                        points="2,2 168,2 208,42 208,295 2,295"
                                        className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400"
                                        strokeWidth="3"
                                    />
                                    <polyline
                                        points="168,2 168,42 208,42"
                                        fill="none"
                                        className="stroke-amber-600 dark:stroke-amber-400"
                                        strokeWidth="3"
                                    />
                                    <text
                                        x="105"
                                        y="165"
                                        textAnchor="middle"
                                        fontSize="44"
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        className="fill-slate-800 dark:fill-amber-300"
                                    >
                                        A4
                                    </text>
                                </svg>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Always-Visible Row: Zebra Photoscale Bar + Optional Expand/Collapse Toggle */}
            <div className="flex items-center gap-2.5">
                {barWidthPx >= 32 && barWidthPx <= 260 ? (
                    <div className="flex flex-col gap-1">
                        <div
                            style={{ width: `${Math.round(barWidthPx)}px` }}
                            className="flex items-center justify-between text-[10px] font-mono font-semibold leading-none"
                        >
                            <span className="text-slate-400 dark:text-slate-500">0</span>
                            <span className="text-amber-600 dark:text-amber-400 font-bold">{label}</span>
                        </div>
                        <div
                            style={{ width: `${Math.round(barWidthPx)}px` }}
                            className="h-2.5 w-full grid grid-cols-4 rounded-[2px] overflow-hidden border border-slate-900/80 dark:border-slate-300/80 shadow-inner"
                        >
                            <div className="bg-slate-900 dark:bg-amber-400" />
                            <div className="bg-white dark:bg-slate-950" />
                            <div className="bg-slate-900 dark:bg-amber-400" />
                            <div className="bg-white dark:bg-slate-950" />
                        </div>
                    </div>
                ) : (
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        Zoom for scale
                    </span>
                )}

                {allowReferenceToggle && (
                    <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-expanded={expanded}
                        aria-label={expanded ? 'Hide reference object comparison' : 'Compare against real-world reference objects'}
                        title={expanded ? 'Hide Reference Objects' : 'Compare Size (AA Cell, Tennis Ball, Can, A4)'}
                        className={`p-1 rounded-lg border transition shrink-0 ${
                            expanded
                                ? 'bg-amber-500 text-slate-950 border-amber-400'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:border-slate-700/70'
                        }`}
                    >
                        <svg
                            aria-hidden="true"
                            className={`w-3.5 h-3.5 transition-transform duration-150 ${expanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}