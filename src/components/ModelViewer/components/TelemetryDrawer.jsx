export default function TelemetryDrawer({
    isOpen,
    onClose,
    formattedDims,
    isUnscaled,
    scaleSource,
    stats,
    fileName,
    fileSize,
    measurements,
    onClearMeasurements,
    formatDistanceFn,
}) {
    if (!isOpen) return null;

    return (
        <aside
            aria-label="Mesh telemetry and measurements"
            className="absolute top-28 sm:top-16 right-3 sm:right-4 z-30 w-80 max-w-[calc(100vw-1.5rem)] bg-white/95 text-slate-700 border-slate-200/90 dark:bg-slate-900/95 dark:text-slate-300 dark:border-slate-800/90 backdrop-blur-xl border rounded-2xl p-4 shadow-2xl space-y-4"
        >
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Mesh Telemetry
                </h2>
                <button
                    type="button"
                    aria-label="Close telemetry drawer"
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 text-sm p-1"
                >
                    <span aria-hidden="true">✕</span>
                </button>
            </div>

            <dl className="space-y-2 text-xs">
                <div className="flex justify-between">
                    <dt className="text-slate-500">Bounding Box</dt>
                    <dd className="font-mono text-slate-900 dark:text-slate-200">{formattedDims}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-slate-500">Scale Status</dt>
                    <dd className="font-mono text-slate-900 dark:text-slate-200 capitalize">
                        {isUnscaled ? 'Unscaled' : `${scaleSource} calibrated`}
                    </dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-slate-500">Triangles</dt>
                    <dd className="font-mono text-slate-900 dark:text-slate-200">{stats.triangles.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-slate-500">Vertices</dt>
                    <dd className="font-mono text-slate-900 dark:text-slate-200">{stats.vertices.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-slate-500">Sub-meshes</dt>
                    <dd className="font-mono text-slate-900 dark:text-slate-200">{stats.meshes}</dd>
                </div>
                {fileName && (
                    <div className="flex justify-between">
                        <dt className="text-slate-500">Source File</dt>
                        <dd className="font-mono text-slate-900 dark:text-slate-200 truncate max-w-[160px]">{fileName}</dd>
                    </div>
                )}
                {fileSize && (
                    <div className="flex justify-between">
                        <dt className="text-slate-500">File Size</dt>
                        <dd className="font-mono text-slate-900 dark:text-slate-200">{fileSize}</dd>
                    </div>
                )}
            </dl>

            {measurements.length > 0 && (
                <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                            Recorded Measurements
                        </span>
                        <button
                            type="button"
                            onClick={onClearMeasurements}
                            className="text-[11px] text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400"
                        >
                            Clear All
                        </button>
                    </div>
                    <ul className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                        {measurements.map((m, idx) => (
                            <li
                                key={m.id}
                                className="flex items-center justify-between bg-slate-100/80 border-slate-200/80 dark:bg-slate-950/60 dark:border-slate-800/80 px-2.5 py-1.5 rounded-lg border text-xs font-mono"
                            >
                                <span className="text-slate-500 dark:text-slate-400">Point #{idx + 1}</span>
                                <span className="text-amber-600 dark:text-amber-300 font-semibold">
                                    {formatDistanceFn(m.rawDistance, true)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 grid grid-cols-2 gap-1.5">
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">↑↓←→</kbd> Orbit
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">⇧+Arrows</kbd> Pan
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">+ / -</kbd> Zoom
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">F</kbd> Fit View
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">M</kbd> Measure
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">C</kbd> Calibrate
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">P</kbd> Ortho/Persp
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">G</kbd> Grid
                </div>
                <div>
                    <kbd className="px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-transparent rounded font-mono">R</kbd> Rotate
                </div>
            </div>
        </aside>
    );
}