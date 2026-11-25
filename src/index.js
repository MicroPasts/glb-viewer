import './style.css';

export { default } from './components/ModelViewer/index.jsx';
export { default as ModelViewer } from './components/ModelViewer/index.jsx';

// Export optional HUD sub-components & helpers for advanced composition
export { default as TopBar } from './components/ModelViewer/components/TopBar.jsx';
export { default as BottomToolbar } from './components/ModelViewer/components/BottomToolbar.jsx';
export { default as TelemetryDrawer } from './components/ModelViewer/components/TelemetryDrawer.jsx';
export { ParadataDrawer } from './components/ModelViewer/components/ParadataDrawer.jsx';
export { default as ScaleBarOverlay } from './components/ModelViewer/components/ScaleBarOverlay.jsx';
export { default as AnimationTimeline } from './components/ModelViewer/components/AnimationTimeline.jsx';
export { default as AnnotationOverlay } from './components/ModelViewer/components/AnnotationOverlay.jsx';
export { default as ThemeToggle } from './components/ModelViewer/components/ThemeToggle.jsx';
export { formatDistance } from './components/ModelViewer/utils/threeHelpers.js';
export {
    normalizeAnnotation,
    normalizeAnnotationList,
    toW3CWebAnnotations,
    encodeAnnotationsHash,
    decodeAnnotationsHash,
} from './components/ModelViewer/utils/annotationAdapters.js';