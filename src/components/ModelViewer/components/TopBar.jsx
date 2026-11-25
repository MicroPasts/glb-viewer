import { useRef, useCallback } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import ThemeToggle from './ThemeToggle';

export default function TopBar({
    title,
    subtitle,
    badge,
    backUrl,
    isUnscaled,
    scaleSource,
    calibrationMode,
    measureMode,
    annotationMode,
    inspectOpen,
    paradata = null,
    paradataOpen = false,
    showHeader = true,
    enableCalibrate = true,
    enableMeasure = true,
    enableAnnotationCreate = false,
    enableDeepLink = true,
    enableExport = true,
    showParadata = true,
    showTelemetry = true,
    showThemeToggle = true,
    enableFullscreen = true,
    downloadMenuOpen,
    setDownloadMenuOpen,
    loading,
    error,
    exporting,
    recordingVideo,
    isFullscreen,
    theme,
    onToggleTheme,
    onToggleCalibrate,
    onToggleMeasure,
    onToggleAnnotate,
    onCopyShareLink,
    onDownloadOriginal,
    onExportMesh,
    onScreenshot,
    onRecordTurntable,
    onToggleParadata,
    onToggleInspect,
    onToggleFullscreen,
}) {
    const exportMenuRef = useRef(null);
    const exportButtonRef = useRef(null);
    const closeMenu = useCallback(() => setDownloadMenuOpen(false), [setDownloadMenuOpen]);
    useClickOutside(exportMenuRef, downloadMenuOpen, closeMenu);

    const hasParadata = Boolean(paradata && showParadata);

    const hasAnyTool =
        enableCalibrate ||
        enableMeasure ||
        enableAnnotationCreate ||
        enableDeepLink ||
        enableExport ||
        hasParadata ||
        showTelemetry ||
        showThemeToggle ||
        enableFullscreen;

    if (!showHeader && !hasAnyTool) return null;

    const pillBtnInactive =
        'bg-white/90 text-slate-700 border-slate-200/90 hover:bg-slate-100 dark:bg-slate-900/85 dark:text-slate-200 dark:border-slate-800/80 dark:hover:bg-slate-800';

    return (
        <div className="flex flex-wrap items-start justify-between gap-2 w-full">
            {/* Top Left Bar: Back Link, Model Title & Scale Status */}
            {showHeader && (
                <header className="pointer-events-auto flex items-center gap-3 bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/85 dark:text-slate-100 dark:border-slate-800/80 backdrop-blur-md border rounded-xl px-3.5 py-2 shadow-2xl max-w-full sm:max-w-md lg:max-w-lg">
                    {backUrl && (
                        <a
                            href={backUrl}
                            title="Back"
                            aria-label="Go back"
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white border dark:border-slate-700/70 transition shrink-0"
                        >
                            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </a>
                    )}
                    <div className="min-w-0">
                        <h1 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100 flex items-center gap-2 flex-wrap">
                            <span className="truncate">{title}</span>
                            {badge && (
                                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 border dark:border-amber-500/20 shrink-0">
                                    {badge}
                                </span>
                            )}
                            {isUnscaled ? (
                                enableCalibrate ? (
                                    <button
                                        type="button"
                                        onClick={onToggleCalibrate}
                                        title="Mesh has no physical scale. Click to calibrate using a known dimension."
                                        className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-700 border-red-500/30 hover:bg-red-500/25 dark:text-red-300 border transition shrink-0"
                                    >
                                        Unscaled &bull; Calibrate
                                    </button>
                                ) : (
                                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-700 border-red-500/30 dark:text-red-300 border shrink-0">
                                        Unscaled
                                    </span>
                                )
                            ) : (
                                <span
                                    title={`Scale source: ${scaleSource}`}
                                    className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 border dark:border-emerald-500/20 shrink-0"
                                >
                                    Scaled ({scaleSource})
                                </span>
                            )}
                        </h1>
                        {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{subtitle}</p>}
                    </div>
                </header>
            )}

            {/* Top Right Actions */}
            {hasAnyTool && (
                <div
                    role="group"
                    aria-label="Model tools and export actions"
                    className="pointer-events-auto flex items-center gap-1.5 flex-wrap justify-end ml-auto"
                >
                    {enableCalibrate && (
                        <button
                            type="button"
                            aria-pressed={calibrationMode}
                            aria-label="Toggle scale calibration"
                            onClick={onToggleCalibrate}
                            title="2-Point Scale Calibration (Shortcut: C)"
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                                calibrationMode
                                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/20'
                                    : pillBtnInactive
                            }`}
                        >
                            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            <span className="hidden md:inline">Calibrate</span>
                        </button>
                    )}

                    {enableMeasure && (
                        <button
                            type="button"
                            aria-pressed={measureMode}
                            aria-label="Toggle measurement"
                            onClick={onToggleMeasure}
                            title="Toggle Point-to-Point Measurement (Shortcut: M)"
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                                measureMode
                                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                                    : pillBtnInactive
                            }`}
                        >
                            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span className="hidden sm:inline">Measure</span>
                        </button>
                    )}

                    {enableAnnotationCreate && (
                        <button
                            type="button"
                            aria-pressed={annotationMode}
                            aria-label="Toggle annotation placement"
                            onClick={onToggleAnnotate}
                            title="Place 3D Surface Annotation Pin"
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                                annotationMode
                                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                                    : pillBtnInactive
                            }`}
                        >
                            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="hidden sm:inline">Annotate</span>
                        </button>
                    )}

                    {enableDeepLink && (
                        <button
                            type="button"
                            onClick={onCopyShareLink}
                            aria-label="Copy shareable link to current view"
                            title="Copy direct link to current camera angle, shading & calibration"
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${pillBtnInactive}`}
                        >
                            <svg aria-hidden="true" className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </button>
                    )}

                    {/* Export & Download Dropdown */}
                    {enableExport && (
                        <div ref={exportMenuRef} className="relative" onKeyDown={(event) => {
                            if (event.key === 'Escape' && downloadMenuOpen) {
                                event.stopPropagation();
                                closeMenu();
                                exportButtonRef.current?.focus();
                            }
                        }}>
                            <button
                                ref={exportButtonRef}
                                type="button"
                                aria-expanded={downloadMenuOpen}
                                onClick={() => setDownloadMenuOpen((prev) => !prev)}
                                disabled={loading || Boolean(error) || exporting || recordingVideo}
                                className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border disabled:opacity-50 backdrop-blur-md transition-all shadow-xl ${pillBtnInactive}`}
                            >
                                <svg aria-hidden="true" className="w-4 h-4 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>{recordingVideo ? 'Recording 360°...' : exporting ? 'Exporting...' : 'Export'}</span>
                            </button>

                            {downloadMenuOpen && (
                                <div
                                    role="group"
                                    aria-label="Export formats"
                                    className="absolute right-0 mt-2 w-60 bg-white/95 text-slate-800 border-slate-200 dark:bg-slate-900/95 dark:text-slate-200 dark:border-slate-800 backdrop-blur-xl border rounded-xl shadow-2xl py-1.5 z-30 text-xs"
                                >
                                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        3D Geometry Formats
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onDownloadOriginal}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
                                    >
                                        <span>Original GLB (Textures)</span>
                                        <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">.GLB</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onExportMesh('obj')}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
                                    >
                                        <span>Wavefront Mesh</span>
                                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">.OBJ</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onExportMesh('stl')}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
                                    >
                                        <span>3D Print Ready</span>
                                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">.STL</span>
                                    </button>
                                    <div role="separator" className="my-1 border-t border-slate-200 dark:border-slate-800" />
                                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        Media & Publication
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onScreenshot}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
                                    >
                                        <span>Viewport Snapshot</span>
                                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">.PNG</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onRecordTurntable}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
                                    >
                                        <span>360° Turntable Clip (5s)</span>
                                        <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400">.WEBM</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Paradata Drawer Toggle */}
                    {hasParadata && (
                        <button
                            type="button"
                            aria-pressed={paradataOpen}
                            aria-expanded={paradataOpen}
                            aria-label="Toggle paradata record"
                            onClick={onToggleParadata}
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                                paradataOpen
                                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                                    : pillBtnInactive
                            }`}
                        >
                            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="hidden sm:inline">Paradata</span>
                        </button>
                    )}

                    {/* Telemetry Drawer Toggle */}
                    {showTelemetry && (
                        <button
                            type="button"
                            aria-pressed={inspectOpen}
                            aria-expanded={inspectOpen}
                            aria-label="Toggle telemetry"
                            onClick={onToggleInspect}
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                                inspectOpen
                                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                                    : pillBtnInactive
                            }`}
                        >
                            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="hidden sm:inline">Telemetry</span>
                        </button>
                    )}

                    {/* Theme Toggle (Light / Dark) */}
                    {showThemeToggle && <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />}

                    {/* Fullscreen Toggle */}
                    {enableFullscreen && (
                        <button
                            type="button"
                            onClick={onToggleFullscreen}
                            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                            className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${pillBtnInactive}`}
                        >
                            {isFullscreen ? (
                                <svg aria-hidden="true" className="w-4 h-4 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9L4 4m0 0l5 0m-5 0l0 5m6 6l5 5m0 0l-5 0m5 0l0-5M15 9l5-5m0 0l-5 0m5 0l0 5m-6 6l-5 5m0 0l5 0m-5 0l0-5" />
                                </svg>
                            ) : (
                                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                            )}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}