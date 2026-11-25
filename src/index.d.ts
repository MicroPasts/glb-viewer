import * as React from 'react';
import * as THREE from 'three';

export interface MeshStats {
    triangles: number;
    vertices: number;
    meshes: number;
    rawSize: THREE.Vector3;
}

export interface CalibrationResult {
    scaleFactor: number;
    targetMm: number;
}

export type MeasureUnit = 'mm' | 'cm' | 'in';
export type AnnotationCategory = 'note' | 'damage' | 'iconography' | 'inscription' | 'manufacture';
export type Vector3Tuple = [number, number, number];
export type ProjectionMode = 'perspective' | 'orthographic';
export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface AnnotationTarget {
    position: Vector3Tuple;
    normal?: Vector3Tuple | null;
    meshName?: string | null;
}

export interface AnnotationCamera {
    position: Vector3Tuple;
    target: Vector3Tuple;
    projection?: ProjectionMode;
}

export interface AnnotationBody {
    title: string;
    summary: string;
    category: AnnotationCategory;
    tags: string[];
    author: string | null;
    createdAt: string | null;
}

export interface Annotation {
    id: string;
    target: AnnotationTarget;
    camera: AnnotationCamera | null;
    body: AnnotationBody;
    style: { color: string };
}

export interface NativeAnnotationInput {
    id?: string;
    target: AnnotationTarget;
    camera?: AnnotationCamera | null;
    body?: Partial<AnnotationBody>;
    style?: { color?: string };
}

export interface W3CAnnotationInput {
    '@context'?: string | string[];
    type: 'Annotation';
    id?: string;
    label?: string;
    body?: string | Record<string, unknown> | Array<string | Record<string, unknown>>;
    target: { selector: Record<string, unknown> | Record<string, unknown>[]; [key: string]: unknown };
    [key: string]: unknown;
}

export type AnnotationInput = NativeAnnotationInput | W3CAnnotationInput;
export type AnnotationMutation = (annotation: Annotation) => AnnotationInput | void | Promise<AnnotationInput | void>;

export interface ModelViewerProps {
    modelUrl: string;
    title?: string;
    subtitle?: string;
    badge?: string;
    fileName?: string;
    fileSize?: string | null;
    backUrl?: string | null;
    knownMaxDimensionMm?: number | null;
    defaultUnitScale?: number | null;
    sanityRangeMm?: [number, number];
    initialBackground?: string;
    initialTheme?: 'light' | 'dark';

    // Optional Component & Tool Toggles
    showHeader?: boolean;
    showBottomToolbar?: boolean;
    showScaleBar?: boolean;
    showReferenceObjects?: boolean;
    showAnimationTimeline?: boolean;
    showThemeToggle?: boolean;
    showTelemetry?: boolean;
    enableMeasure?: boolean;
    enableCalibrate?: boolean;
    enableExport?: boolean;
    enableFullscreen?: boolean;
    enableDeepLink?: boolean;
    annotations?: AnnotationInput[];
    defaultAnnotations?: AnnotationInput[];
    selectedAnnotationId?: string | null;
    showAnnotations?: boolean;
    showAnnotationTour?: boolean;
    enableAnnotationCreate?: boolean;
    enableAnnotationEdit?: boolean;
    enableAnnotationDelete?: boolean;
    onSelectAnnotation?: ((annotation: Annotation | null) => void) | null;
    onCreateAnnotation?: AnnotationMutation | null;
    onUpdateAnnotation?: AnnotationMutation | null;
    onDeleteAnnotation?: ((id: string) => void | Promise<void>) | null;
    renderAnnotationBody?: ((annotation: Annotation) => React.ReactNode) | null;

    dracoDecoderPath?: string;
    ktx2TranscoderPath?: string;
    onLoad?: ((stats: MeshStats) => void) | null;
    onError?: ((error: unknown) => void) | null;
    onCalibrate?: ((result: CalibrationResult) => void) | null;
    children?: React.ReactNode;
}

export declare const ModelViewer: React.FC<ModelViewerProps>;
export interface TopBarProps {
    title: string;
    subtitle?: string;
    badge?: string;
    backUrl?: string | null;
    isUnscaled: boolean;
    scaleSource: string;
    calibrationMode: boolean;
    measureMode: boolean;
    annotationMode: boolean;
    inspectOpen: boolean;
    showHeader?: boolean;
    enableCalibrate?: boolean;
    enableMeasure?: boolean;
    enableAnnotationCreate?: boolean;
    enableDeepLink?: boolean;
    enableExport?: boolean;
    showTelemetry?: boolean;
    showThemeToggle?: boolean;
    enableFullscreen?: boolean;
    downloadMenuOpen: boolean;
    setDownloadMenuOpen: StateSetter<boolean>;
    loading: boolean;
    error: unknown;
    exporting: boolean;
    recordingVideo: boolean;
    isFullscreen: boolean;
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
    onToggleCalibrate: () => void;
    onToggleMeasure: () => void;
    onToggleAnnotate: () => void;
    onCopyShareLink: () => void;
    onDownloadOriginal: () => void;
    onExportMesh: (format: 'obj' | 'stl') => void;
    onScreenshot: () => void;
    onRecordTurntable: () => void;
    onToggleInspect: () => void;
    onToggleFullscreen: () => void;
}

export interface BottomToolbarProps {
    shadingMode: 'pbr' | 'relief' | 'sculpt' | 'normals' | 'vertex';
    setShadingMode: StateSetter<BottomToolbarProps['shadingMode']>;
    wireframe: boolean;
    setWireframe: StateSetter<boolean>;
    clipEnabled: boolean;
    setClipEnabled: StateSetter<boolean>;
    showGrid: boolean;
    setShowGrid: StateSetter<boolean>;
    showBBox: boolean;
    setShowBBox: StateSetter<boolean>;
    autoRotate: boolean;
    setAutoRotate: StateSetter<boolean>;
    projectionMode: ProjectionMode;
    switchProjection: (mode: ProjectionMode) => void;
    setCameraView: (view: 'iso' | 'front' | 'top' | 'side') => void;
    lightAngle: number;
    setLightAngle: StateSetter<number>;
    exposure: number;
    setExposure: StateSetter<number>;
    envIntensity: number;
    setEnvIntensity: StateSetter<number>;
    bgColor: string;
    setBgColor: StateSetter<string>;
}

export interface TelemetryDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    formattedDims: string;
    isUnscaled: boolean;
    scaleSource: string;
    stats: MeshStats;
    fileName?: string | null;
    fileSize?: string | null;
    measurements: Array<{ id: string; rawDistance: number }>;
    onClearMeasurements: () => void;
    formatDistanceFn: (distance: number, compact: boolean) => string;
}

export interface ScaleBarOverlayProps {
    pixelsPerMm: number;
    isUnscaled: boolean;
    measureUnit?: MeasureUnit;
    allowReferenceToggle?: boolean;
}

export interface AnimationTimelineProps {
    animations: Array<{ name: string }>;
    activeClipIndex: number;
    onSelectClip: (index: number) => void;
    isPlaying: boolean;
    onTogglePlay: () => void;
    currentTime: number;
    duration: number;
    onScrub: (time: number) => void;
    playbackSpeed: number;
    onChangeSpeed: (speed: number) => void;
}

export interface ProjectedPin {
    id: string;
    screenX: number;
    screenY: number;
    visible: boolean;
    occluded: boolean;
}

export interface AnnotationDraft {
    target: AnnotationTarget;
    camera: AnnotationCamera | null;
    body: Pick<AnnotationBody, 'title' | 'summary' | 'category' | 'tags' | 'createdAt'>;
}

export interface AnnotationOverlayProps {
    annotations?: Annotation[];
    projectedPins?: ProjectedPin[];
    selectedId?: string | null;
    onSelect?: (annotation: Annotation | null) => void;
    draftAnchor?: Pick<AnnotationDraft, 'target' | 'camera'> | null;
    onCancelDraft?: () => void;
    onSaveDraft?: (draft: AnnotationDraft) => void | Promise<void>;
    canCreate?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    onUpdate?: (annotation: Annotation) => void | Promise<void>;
    onDelete?: (id: string) => void | Promise<void>;
    renderAnnotationBody?: ((annotation: Annotation) => React.ReactNode) | null;
    showTourBar?: boolean;
}

export declare const TopBar: React.FC<TopBarProps>;
export declare const BottomToolbar: React.FC<BottomToolbarProps>;
export declare const TelemetryDrawer: React.FC<TelemetryDrawerProps>;
export declare const ScaleBarOverlay: React.FC<ScaleBarOverlayProps>;
export declare const AnimationTimeline: React.FC<AnimationTimelineProps>;
export declare const AnnotationOverlay: React.FC<AnnotationOverlayProps>;
export declare const ThemeToggle: React.FC<{ theme: 'light' | 'dark'; onToggleTheme: () => void }>;
export declare function normalizeAnnotation(raw: unknown, index?: number): Annotation | null;
export declare function normalizeAnnotationList(list: unknown): Annotation[];
export declare function toW3CWebAnnotations(annotations: AnnotationInput[], modelResourceId?: string): W3CAnnotationInput[];
export declare function encodeAnnotationsHash(annotations: AnnotationInput[]): string;
export declare function decodeAnnotationsHash(hashString: string): Annotation[] | null;
export declare function formatDistance(
    rawDistance: number,
    options: {
        isUnscaled: boolean;
        customScaleFactor: number | null;
        measureUnit: 'mm' | 'cm' | 'in';
        compact?: boolean;
    }
): string;

export default ModelViewer;