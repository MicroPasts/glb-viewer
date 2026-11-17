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

export interface ModelViewerProps {
    modelUrl: string;
    title?: string;
    subtitle?: string;
    badge?: string;
    fileName?: string;
    fileSize?: string | null;
    backUrl?: string | null;
    knownMaxDimensionMm?: number | null;
    defaultUnitScale?: number;
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

    dracoDecoderPath?: string;
    ktx2TranscoderPath?: string;
    onLoad?: ((stats: MeshStats) => void) | null;
    onError?: ((error: unknown) => void) | null;
    onCalibrate?: ((result: CalibrationResult) => void) | null;
    children?: React.ReactNode;
}

export declare const ModelViewer: React.FC<ModelViewerProps>;
export declare const TopBar: React.FC<any>;
export declare const BottomToolbar: React.FC<any>;
export declare const TelemetryDrawer: React.FC<any>;
export declare const ScaleBarOverlay: React.FC<any>;
export declare const AnimationTimeline: React.FC<any>;
export declare const ThemeToggle: React.FC<any>;
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