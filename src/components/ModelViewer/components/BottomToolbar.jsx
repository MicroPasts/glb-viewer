import { BG_PRESETS } from '../utils/threeHelpers';

const SHADING_MODES = [
    { id: 'pbr', label: 'PBR' },
    { id: 'relief', label: 'Relief' },
    { id: 'sculpt', label: 'Clay' },
    { id: 'normals', label: 'Normals' },
    { id: 'vertex', label: 'Vertex' },
];

const CAMERA_VIEWS = [
    { id: 'iso', label: 'Iso' },
    { id: 'front', label: 'Front' },
    { id: 'top', label: 'Top' },
    { id: 'side', label: 'Side' },
];

export default function BottomToolbar({
    shadingMode,
    setShadingMode,
    wireframe,
    setWireframe,
    clipEnabled,
    setClipEnabled,
    showGrid,
    setShowGrid,
    showBBox,
    setShowBBox,
    autoRotate,
    setAutoRotate,
    projectionMode,
    switchProjection,
    setCameraView,
    lightAngle,
    setLightAngle,
    exposure,
    setExposure,
    envIntensity,
    setEnvIntensity,
    bgColor,
    setBgColor,
}) {
    const pillWellClass =
        'flex items-center gap-1 bg-slate-100/80 border-slate-200/80 dark:bg-slate-950/60 dark:border-slate-800/60 p-1 rounded-xl border';

    const overlayBtnClass = (isActive, activeStyles = 'bg-amber-500/20 text-amber-800 border-amber-500/50 dark:text-amber-300 dark:border-amber-500/40') =>
        `px-2 py-1.5 rounded-lg font-medium border transition ${
            isActive
                ? activeStyles
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300/80 dark:bg-slate-800/50 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700/60'
        }`;

    return (
        <nav
            aria-label="Viewport rendering and camera controls"
            className="pointer-events-auto max-w-6xl w-full mx-auto bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/90 dark:text-slate-300 dark:border-slate-800/80 backdrop-blur-xl border rounded-xl p-1.5 shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs"
        >
            {/* Shading Modes */}
            <div role="group" aria-label="Shading mode" className={pillWellClass}>
                {SHADING_MODES.map((mode) => (
                    <button
                        type="button"
                        key={mode.id}
                        aria-pressed={shadingMode === mode.id}
                        onClick={() => setShadingMode(mode.id)}
                        className={`px-2 py-1 rounded-lg font-medium transition ${
                            shadingMode === mode.id
                                ? 'bg-amber-500 text-slate-950 shadow-sm'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50'
                        }`}
                    >
                        {mode.label}
                    </button>
                ))}
            </div>

            {/* Viewport Overlays */}
            <div role="group" aria-label="Viewport overlays" className="flex items-center gap-1">
                <button
                    type="button"
                    aria-pressed={wireframe}
                    onClick={() => setWireframe((prev) => !prev)}
                    className={overlayBtnClass(wireframe)}
                >
                    Wire
                </button>

                <button
                    type="button"
                    aria-pressed={clipEnabled}
                    onClick={() => setClipEnabled((prev) => !prev)}
                    title="Toggle Cross-Section Slicer"
                    className={overlayBtnClass(
                        clipEnabled,
                        'bg-sky-500/20 text-sky-800 border-sky-500/50 dark:text-sky-300 dark:border-sky-500/40'
                    )}
                >
                    Slice
                </button>

                <button
                    type="button"
                    aria-pressed={showGrid}
                    onClick={() => setShowGrid((prev) => !prev)}
                    title="Toggle Scale Grid (G)"
                    className={overlayBtnClass(showGrid)}
                >
                    Grid
                </button>

                <button
                    type="button"
                    aria-pressed={showBBox}
                    onClick={() => setShowBBox((prev) => !prev)}
                    className={overlayBtnClass(showBBox)}
                >
                    Bounds
                </button>

                <button
                    type="button"
                    aria-pressed={autoRotate}
                    onClick={() => setAutoRotate((prev) => !prev)}
                    title="Toggle Auto-Rotate (R)"
                    className={overlayBtnClass(autoRotate)}
                >
                    Rotate
                </button>
            </div>

            {/* Projection & Camera Presets */}
            <div role="group" aria-label="Camera projection and preset angles" className={pillWellClass}>
                <button
                    type="button"
                    aria-pressed={projectionMode === 'orthographic'}
                    aria-label={`Switch to ${projectionMode === 'perspective' ? 'orthographic' : 'perspective'} projection`}
                    onClick={() =>
                        switchProjection(projectionMode === 'perspective' ? 'orthographic' : 'perspective')
                    }
                    title="Toggle Perspective / Orthographic Projection (P)"
                    className={`px-2 py-1 rounded-lg font-mono text-[11px] uppercase transition ${
                        projectionMode === 'orthographic'
                            ? 'bg-sky-500 text-slate-950 font-bold'
                            : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                >
                    {projectionMode === 'orthographic' ? 'Ortho' : 'Persp'}
                </button>
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-800 mx-0.5" />
                {CAMERA_VIEWS.map((view) => (
                    <button
                        type="button"
                        key={view.id}
                        aria-label={`Camera preset: ${view.label} view`}
                        onClick={() => setCameraView(view.id)}
                        className="px-2 py-1 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition"
                    >
                        {view.label}
                    </button>
                ))}
            </div>

            {/* Lighting & Background */}
            <div className="flex items-center gap-2.5 bg-slate-100/80 border-slate-200/80 dark:bg-slate-950/60 dark:border-slate-800/60 px-2.5 py-1.5 rounded-xl border">
                <label className="flex items-center gap-1" title="Raking Light Angle">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Light</span>
                    <input
                        type="range"
                        aria-label="Raking light angle in degrees"
                        min="0"
                        max="360"
                        step="5"
                        value={lightAngle}
                        onChange={(e) => setLightAngle(parseFloat(e.target.value))}
                        className="w-11 accent-amber-500 cursor-pointer h-1 bg-slate-300 dark:bg-slate-800 rounded"
                    />
                </label>

                <label className="flex items-center gap-1" title="Studio Environment Reflection Intensity">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Env</span>
                    <input
                        type="range"
                        aria-label="Studio environment intensity"
                        min="0"
                        max="2.5"
                        step="0.1"
                        value={envIntensity}
                        onChange={(e) => setEnvIntensity(parseFloat(e.target.value))}
                        className="w-11 accent-amber-500 cursor-pointer h-1 bg-slate-300 dark:bg-slate-800 rounded"
                    />
                </label>

                <label className="flex items-center gap-1" title="Exposure">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Exp</span>
                    <input
                        type="range"
                        aria-label="Tone mapping exposure"
                        min="0.2"
                        max="3.0"
                        step="0.1"
                        value={exposure}
                        onChange={(e) => setExposure(parseFloat(e.target.value))}
                        className="w-11 accent-amber-500 cursor-pointer h-1 bg-slate-300 dark:bg-slate-800 rounded"
                    />
                </label>

                <div role="group" aria-label="Background color" className="flex items-center gap-1">
                    {BG_PRESETS.map((preset) => (
                        <button
                            type="button"
                            key={preset.hex}
                            aria-label={`Set background color to ${preset.name}`}
                            aria-pressed={bgColor === preset.hex}
                            onClick={() => setBgColor(preset.hex)}
                            style={{ backgroundColor: preset.hex }}
                            className={`w-3.5 h-3.5 rounded-full border transition ${
                                bgColor === preset.hex
                                    ? 'border-amber-500 dark:border-amber-400 scale-110'
                                    : 'border-slate-400 dark:border-slate-600 hover:scale-105'
                            }`}
                        />
                    ))}
                    <input
                        type="color"
                        aria-label="Custom background color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-4 h-4 rounded cursor-pointer bg-transparent border-0"
                        title="Custom background color"
                    />
                </div>
            </div>
        </nav>
    );
}