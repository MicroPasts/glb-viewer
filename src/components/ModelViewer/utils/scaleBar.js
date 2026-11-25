const METRIC_STEPS_MM = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000];
const IMPERIAL_STEPS_IN = [0.05, 0.1, 0.25, 0.5, 1, 2, 4, 6, 12, 24, 36, 60];

export function scaleNeedsUpdate(previous, next) {
    return previous === 0 || Math.abs(next - previous) > next * 0.001;
}

export function calculateScaleBar(pixelsPerMm, measureUnit = 'mm') {
    if (!Number.isFinite(pixelsPerMm) || pixelsPerMm <= 0) return null;

    const imperial = measureUnit === 'in';
    const pixelsPerUnit = imperial ? pixelsPerMm * 25.4 : pixelsPerMm;
    const raw = 116 / pixelsPerUnit;
    const steps = imperial ? IMPERIAL_STEPS_IN : METRIC_STEPS_MM;
    const best = raw >= steps[steps.length - 1]
        ? steps[steps.length - 1]
        : steps.reduce((prev, curr) =>
            Math.abs(curr - raw) < Math.abs(prev - raw) ? curr : prev
        );
    const widthPx = best * pixelsPerUnit;
    let label;
    if (imperial) label = best >= 12 && best % 12 === 0 ? `${best / 12} ft` : `${best} in`;
    else if (best >= 1000) label = `${best / 1000} m`;
    else if (measureUnit === 'cm' && best >= 1) label = `${best / 10} cm`;
    else label = `${best} mm`;
    return { widthPx, label };
}
