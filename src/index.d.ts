import * as React from 'react';

export interface MeshStats {
    triangles: number;
    vertices: number;
    meshes: number;
    rawSize: { x: number; y: number; z: number };
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
    defaultUnitScale?: number | null;
    sanityRangeMm?: [number, number];
    initialBackground?: string;
    enableDeepLink?: boolean;
    onLoad?: ((stats: MeshStats) => void) | null;
    onError?: ((error: unknown) => void) | null;
    onCalibrate?: ((result: CalibrationResult) => void) | null;
}

export declare const ModelViewer: React.FC<ModelViewerProps>;
export default ModelViewer;
