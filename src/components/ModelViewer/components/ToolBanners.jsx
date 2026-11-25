export default function ToolBanners({
    calibrationMode,
    calibPoints,
    calibInputMm,
    setCalibInputMm,
    onApplyCalibration,
    onCancelCalibration,
    measureMode,
    pendingPoint,
    isUnscaled,
    enableCalibrate = true,
    measureUnit,
    setMeasureUnit,
    onSwitchToCalibrate,
    measurementsCount,
    onClearMeasurements,
    clipEnabled,
    clipAxis,
    setClipAxis,
    clipPercent,
    setClipPercent,
}) {
    return (
        <>
            {/* Active Calibration Banner (flows below TopBar) */}
            {calibrationMode && (
                <div
                    role="region"
                    aria-label="Scale calibration controls"
                    className="pointer-events-auto mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/95 text-slate-800 border-emerald-500/60 dark:bg-slate-900/95 dark:text-slate-100 dark:border-emerald-500/50 border px-4 py-2 rounded-2xl sm:rounded-full shadow-2xl text-xs max-w-full"
                >
                    {calibPoints.length < 2 ? (
                        <span aria-live="polite" className="text-emerald-700 dark:text-emerald-300 font-medium text-center">
                            {calibPoints.length === 0
                                ? 'Step 1/2: Click first reference point on scale bar or known feature'
                                : 'Step 2/2: Click second reference point to define known distance'}
                        </span>
                    ) : (
                        <form onSubmit={onApplyCalibration} className="flex flex-wrap items-center gap-2">
                            <label className="text-slate-600 dark:text-slate-300">
                                Known length (mm):
                            <input
                                type="number"
                                step="0.01"
                                min="0.01"
                                autoFocus
                                placeholder="e.g. 25.0"
                                value={calibInputMm}
                                onChange={(e) => setCalibInputMm(e.target.value)}
                                className="w-24 px-2 py-1 rounded bg-slate-100 border-slate-300 text-emerald-700 dark:bg-slate-950 dark:border-slate-700 dark:text-emerald-300 border font-mono focus:outline-hidden focus:border-emerald-500"
                            />
                            </label>
                            <button
                                type="submit"
                                className="px-2.5 py-1 rounded bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400"
                            >
                                Apply Scale
                            </button>
                        </form>
                    )}
                    <button
                        type="button"
                        onClick={onCancelCalibration}
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 ml-1"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Active Measurement Banner (flows below TopBar) */}
            {measureMode && !calibrationMode && (
                <div
                    role="region"
                    aria-label="Measurement tool controls"
                    className="pointer-events-auto mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-amber-500/95 text-slate-950 px-4 py-1.5 rounded-2xl sm:rounded-full shadow-xl text-xs font-medium max-w-full"
                >
                    <span aria-live="polite" className="text-center">
                        {pendingPoint
                            ? 'Click second point on surface to complete measurement'
                            : 'Click any surface point to start measuring'}
                    </span>
                    {!isUnscaled && (
                        <div role="group" aria-label="Measurement units" className="flex items-center gap-1 bg-slate-950/15 rounded-full px-1.5 py-0.5">
                            {['mm', 'cm', 'in'].map((u) => (
                                <button
                                    type="button"
                                    key={u}
                                    aria-pressed={measureUnit === u}
                                    onClick={() => setMeasureUnit(u)}
                                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase transition ${
                                        measureUnit === u
                                            ? 'bg-slate-950 text-amber-400'
                                            : 'text-slate-900 hover:bg-slate-950/10'
                                    }`}
                                >
                                    {u}
                                </button>
                            ))}
                        </div>
                    )}
                    {isUnscaled && enableCalibrate && (
                        <button
                            type="button"
                            onClick={onSwitchToCalibrate}
                            className="px-2 py-0.5 rounded-full bg-slate-950 text-emerald-400 text-[10px] font-mono uppercase hover:bg-slate-900"
                        >
                            Calibrate Scale
                        </button>
                    )}
                    {measurementsCount > 0 && (
                        <button
                            type="button"
                            onClick={onClearMeasurements}
                            className="underline font-semibold hover:text-slate-800 ml-1"
                        >
                            Clear ({measurementsCount})
                        </button>
                    )}
                </div>
            )}

            {/* Cross-Section Clipping Plane Slider Bar (sits cleanly inside bottom HUD stack) */}
            {clipEnabled && (
                <div
                    role="region"
                    aria-label="Cross-section slicing plane"
                    className="pointer-events-auto ml-auto flex items-center gap-2.5 bg-white/95 text-slate-800 border-sky-500/50 dark:bg-slate-900/95 dark:text-slate-200 dark:border-sky-500/40 backdrop-blur-xl border rounded-xl px-3.5 py-2 shadow-2xl text-xs"
                >
                    <span className="font-mono text-[11px] uppercase text-sky-600 dark:text-sky-400">Slice</span>
                    <div role="group" aria-label="Slice axis" className="flex items-center gap-1 bg-slate-100 border-slate-200 dark:bg-slate-950 dark:border-slate-800 p-0.5 rounded-lg border">
                        {['x', 'y', 'z'].map((ax) => (
                            <button
                                type="button"
                                key={ax}
                                aria-pressed={clipAxis === ax}
                                aria-label={`Slice along ${ax.toUpperCase()} axis`}
                                onClick={() => setClipAxis(ax)}
                                className={`px-2 py-0.5 rounded uppercase font-mono text-[10px] ${
                                    clipAxis === ax
                                        ? 'bg-sky-500 text-slate-950 font-bold'
                                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                            >
                                {ax}
                            </button>
                        ))}
                    </div>
                    <input
                        type="range"
                        aria-label="Cross-section slice position percentage"
                        min="0"
                        max="100"
                        step="1"
                        value={clipPercent}
                        onChange={(e) => setClipPercent(parseInt(e.target.value, 10))}
                        className="w-24 accent-sky-500 dark:accent-sky-400 cursor-pointer h-1 bg-slate-300 dark:bg-slate-800 rounded"
                    />
                    <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300 w-8">{clipPercent}%</span>
                </div>
            )}
        </>
    );
}