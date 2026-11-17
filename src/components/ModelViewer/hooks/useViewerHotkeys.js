import { useEffect } from 'react';

export function useViewerHotkeys({
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
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

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
                    setCalibrationMode(false);
                    setCalibPoints([]);
                    setMeasureMode((prev) => !prev);
                    break;
                case 'c':
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

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [
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