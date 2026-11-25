import { useEffect } from 'react';

export function useViewerHotkeys({
    viewportRef,
    enableMeasure,
    enableCalibrate,
    pendingPoint,
    setPendingPoint,
    measureMode,
    setMeasureMode,
    calibPoints,
    setCalibPoints,
    calibrationMode,
    setCalibrationMode,
    setDownloadMenuOpen,
    projectionMode,
    switchProjection,
    setShowGrid,
    setAutoRotate,
    setCameraView,
    nudgeCamera,
}) {
    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;
        const handleKeyDown = (e) => {
            if (e.target !== viewport || e.altKey || e.ctrlKey || e.metaKey) return;

            switch (e.key.toLowerCase()) {
                case 'arrowleft':
                    e.preventDefault();
                    e.shiftKey ? nudgeCamera('pan', { x: -1, y: 0 }) : nudgeCamera('rotateLeft');
                    break;
                case 'arrowright':
                    e.preventDefault();
                    e.shiftKey ? nudgeCamera('pan', { x: 1, y: 0 }) : nudgeCamera('rotateRight');
                    break;
                case 'arrowup':
                    e.preventDefault();
                    e.shiftKey ? nudgeCamera('pan', { x: 0, y: 1 }) : nudgeCamera('rotateUp');
                    break;
                case 'arrowdown':
                    e.preventDefault();
                    e.shiftKey ? nudgeCamera('pan', { x: 0, y: -1 }) : nudgeCamera('rotateDown');
                    break;
                case '+':
                case '=':
                    e.preventDefault();
                    nudgeCamera('zoomIn');
                    break;
                case '-':
                case '_':
                    e.preventDefault();
                    nudgeCamera('zoomOut');
                    break;
                case 'm':
                    if (!enableMeasure) break;
                    setCalibrationMode(false);
                    setCalibPoints([]);
                    setMeasureMode((prev) => !prev);
                    break;
                case 'c':
                    if (!enableCalibrate) break;
                    setMeasureMode(false);
                    setPendingPoint(null);
                    setCalibrationMode((prev) => !prev);
                    setCalibPoints([]);
                    break;
                case 'p':
                    switchProjection(projectionMode === 'perspective' ? 'orthographic' : 'perspective');
                    break;
                case 'g':
                    setShowGrid((prev) => !prev);
                    break;
                case 'r':
                    setAutoRotate((prev) => !prev);
                    break;
                case 'f':
                    setCameraView('iso');
                    break;
                case 'escape':
                    if (pendingPoint) setPendingPoint(null);
                    else if (measureMode) setMeasureMode(false);
                    if (calibPoints.length > 0) setCalibPoints([]);
                    else if (calibrationMode) setCalibrationMode(false);
                    setDownloadMenuOpen(false);
                    break;
                default:
                    break;
            }
        };

        viewport.addEventListener('keydown', handleKeyDown);
        return () => viewport.removeEventListener('keydown', handleKeyDown);
    }, [
        viewportRef,
        enableMeasure,
        enableCalibrate,
        pendingPoint,
        setPendingPoint,
        measureMode,
        setMeasureMode,
        calibPoints,
        setCalibPoints,
        calibrationMode,
        setCalibrationMode,
        setDownloadMenuOpen,
        projectionMode,
        switchProjection,
        setShowGrid,
        setAutoRotate,
        setCameraView,
        nudgeCamera,
    ]);
}