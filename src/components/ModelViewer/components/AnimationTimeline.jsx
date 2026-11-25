const SPEED_OPTIONS = [0.5, 1, 2];

export default function AnimationTimeline({
    animations,
    activeClipIndex,
    onSelectClip,
    isPlaying,
    onTogglePlay,
    currentTime,
    duration,
    onScrub,
    playbackSpeed,
    onChangeSpeed,
}) {
    if (!animations || animations.length === 0) return null;

    const formatSeconds = (sec) => `${Math.max(0, sec).toFixed(1)}s`;

    return (
        <div
            role="region"
            aria-label="3D animation playback timeline"
            className="pointer-events-auto w-full max-w-2xl mx-auto bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-800/80 backdrop-blur-xl border rounded-xl px-2.5 sm:px-3 py-1.5 shadow-2xl flex items-center gap-1.5 sm:gap-2.5 text-xs"
        >
            {/* Play / Pause Button */}
            <button
                type="button"
                onClick={onTogglePlay}
                aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
                title={isPlaying ? 'Pause' : 'Play'}
                className="p-1.5 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition shrink-0"
            >
                {isPlaying ? (
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                ) : (
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>

            {/* Clip Selector */}
            {animations.length > 1 ? (
                <select
                    aria-label="Select animation clip"
                    value={activeClipIndex}
                    onChange={(e) => onSelectClip(Number(e.target.value))}
                    className="bg-slate-100 border-slate-300 text-slate-800 dark:bg-slate-950 dark:border-slate-700/80 dark:text-slate-200 border rounded-lg px-1.5 sm:px-2 py-1 text-[11px] font-mono max-w-[90px] sm:max-w-[140px] truncate focus:outline-hidden focus:border-amber-500 shrink-0"
                >
                    {animations.map((clip, idx) => (
                        <option key={`${clip.name}-${idx}`} value={idx}>
                            {clip.name || `Clip ${idx + 1}`}
                        </option>
                    ))}
                </select>
            ) : (
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[110px] hidden md:inline shrink-0">
                    {animations[0].name || 'Animation'}
                </span>
            )}

            {/* Timeline Scrubber */}
            <input
                type="range"
                aria-label="Animation timeline scrubber"
                min={0}
                max={duration || 1}
                step={0.01}
                value={currentTime}
                onChange={(e) => onScrub(parseFloat(e.target.value))}
                className="flex-1 min-w-[60px] accent-amber-500 cursor-pointer h-1.5 bg-slate-300 dark:bg-slate-800 rounded-lg"
            />

            {/* Time Readout */}
            <span className="font-mono text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 tabular-nums shrink-0">
                {formatSeconds(currentTime)}
                <span className="hidden sm:inline"> / {formatSeconds(duration)}</span>
            </span>

            {/* Playback Speed Cycle */}
            <button
                type="button"
                onClick={() => {
                    const nextIdx = (SPEED_OPTIONS.indexOf(playbackSpeed) + 1) % SPEED_OPTIONS.length;
                    onChangeSpeed(SPEED_OPTIONS[nextIdx]);
                }}
                aria-label={`Animation playback speed ${playbackSpeed}x. Click to cycle speed.`}
                title="Playback Speed"
                className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 border-slate-300 text-amber-700 dark:bg-slate-800 dark:hover:bg-slate-700 border dark:border-slate-700/70 font-mono text-[10px] dark:text-amber-300 shrink-0"
            >
                {playbackSpeed}×
            </button>
        </div>
    );
}