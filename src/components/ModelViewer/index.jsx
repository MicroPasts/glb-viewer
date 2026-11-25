import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';

import {
    DEFAULT_SANITY_RANGE_MM,
    DEFAULT_DRACO_PATH,
    DEFAULT_KTX2_PATH,
    formatDistance,
    triggerBlobDownload,
    clearThreeGroup,
    disposeObjectTree,
    createSharedMaterials,
    disposeSharedMaterials,
} from './utils/threeHelpers';
import {
    normalizeAnnotation,
    normalizeAnnotationList,
    decodeAnnotationsHash,
} from './utils/annotationAdapters';
import { projectedPinsChanged } from './utils/projectedPins';
import { scaleNeedsUpdate } from './utils/scaleBar';
import { useViewerHotkeys } from './hooks/useViewerHotkeys';
import TopBar from './components/TopBar';
import BottomToolbar from './components/BottomToolbar';
import ToolBanners from './components/ToolBanners';
import TelemetryDrawer from './components/TelemetryDrawer';
import ParadataDrawer from './components/ParadataDrawer';
import ScaleBarOverlay from './components/ScaleBarOverlay';
import AnimationTimeline from './components/AnimationTimeline';
import AnnotationOverlay from './components/AnnotationOverlay';

export default function ModelViewer({
    modelUrl,
    title = '3D Model',
    subtitle = '',
    badge = 'GLB',
    fileName = 'model',
    fileSize = null,
    backUrl = null,
    knownMaxDimensionMm = null,
    defaultUnitScale = 1000,
    sanityRangeMm = DEFAULT_SANITY_RANGE_MM,
    initialBackground = '#090d16',
    initialTheme = 'dark',

    // Optional UI & Tool Feature Flags
    showHeader = true,
    showBottomToolbar = true,
    showScaleBar = true,
    showReferenceObjects = true,
    showAnimationTimeline = true,
    showThemeToggle = true,
    showTelemetry = true,
    showParadata = true,
    paradata = null,
    enableMeasure = true,
    enableCalibrate = true,
    enableExport = true,
    enableFullscreen = true,
    enableDeepLink = true,

    // Portable Spatial Annotations API (Controlled or Uncontrolled)
    annotations = undefined,
    defaultAnnotations = [],
    selectedAnnotationId = undefined,
    showAnnotations = true,
    showAnnotationTour = true,
    enableAnnotationCreate = false,
    enableAnnotationEdit = false,
    enableAnnotationDelete = false,
    onSelectAnnotation = null,
    onCreateAnnotation = null,
    onUpdateAnnotation = null,
    onDeleteAnnotation = null,
    renderAnnotationBody = null,

    // Decoders, Callbacks & Custom Overlays
    dracoDecoderPath = DEFAULT_DRACO_PATH,
    ktx2TranscoderPath = DEFAULT_KTX2_PATH,
    onLoad = null,
    onError = null,
    onCalibrate = null,
    children = null,
}) {
    const wrapperRef = useRef(null);
    const mountRef = useRef(null);
    const gizmoCanvasRef = useRef(null);

    // Core Three.js Refs
    const sceneRef = useRef(null);
    const perspCameraRef = useRef(null);
    const orthoCameraRef = useRef(null);
    const activeCameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);

    // Scene Groups & Helpers
    const modelGroupRef = useRef(new THREE.Group());
    const measureGroupRef = useRef(new THREE.Group());
    const calibGroupRef = useRef(new THREE.Group());
    const gridHelperRef = useRef(null);
    const boxHelperRef = useRef(null);
    const lightRigRef = useRef(null);
    const clipPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(-1, 0, 0), 1000));
    const clipHelperRef = useRef(null);
    const modelBoundsRef = useRef(new THREE.Box3());
    const originalMaterials = useRef(new Map());
    const cameraTweenRef = useRef(null);
    const toastTimerRef = useRef(null);

    // Animation & Scale Bar Refs
    const mixerRef = useRef(null);
    const activeActionRef = useRef(null);
    const animClipsRef = useRef([]);
    const animPlayingRef = useRef(false);
    const animSpeedRef = useRef(1);
    const pixelsPerMmRef = useRef(0);
    const scaleFactorRef = useRef(null);

    const configRef = useRef({
        knownMaxDimensionMm,
        defaultUnitScale,
        sanityRangeMm,
        enableDeepLink,
        dracoDecoderPath,
        ktx2TranscoderPath,
        onLoad,
        onError,
    });
    configRef.current = {
        knownMaxDimensionMm,
        defaultUnitScale,
        sanityRangeMm,
        enableDeepLink,
        dracoDecoderPath,
        ktx2TranscoderPath,
        onLoad,
        onError,
    };

    // Theme, Shading, Camera & Environment States
    const [theme, setTheme] = useState(initialTheme);
    const [shadingMode, setShadingMode] = useState('pbr');
    const [projectionMode, setProjectionMode] = useState('perspective');
    const [wireframe, setWireframe] = useState(false);
    const [autoRotate, setAutoRotate] = useState(false);
    const [exposure, setExposure] = useState(1.0);
    const [envIntensity, setEnvIntensity] = useState(0.8);
    const [lightAngle, setLightAngle] = useState(45);
    const [bgColor, setBgColor] = useState(
        initialTheme === 'light' && initialBackground === '#090d16' ? '#f1f5f9' : initialBackground
    );
    const [showGrid, setShowGrid] = useState(false);
    const [showBBox, setShowBBox] = useState(false);

    // Cross-Section Clipping Slicer States
    const [clipEnabled, setClipEnabled] = useState(false);
    const [clipAxis, setClipAxis] = useState('x');
    const [clipPercent, setClipPercent] = useState(100);

    // UI Panels, Toasts & Recording
    const [inspectOpen, setInspectOpen] = useState(false);
    const [paradataOpenFor, setParadataOpenFor] = useState(null);
    const paradataOpen = paradataOpenFor === modelUrl && showParadata && Boolean(paradata);

    useEffect(() => {
        setParadataOpenFor(null);
    }, [modelUrl, showParadata]);

    useEffect(() => {
        if (!paradata) setParadataOpenFor(null);
    }, [paradata]);
    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [recordingVideo, setRecordingVideo] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    // Scale & Calibration States
    const [customScaleFactor, setCustomScaleFactor] = useState(null);
    const [isUnscaled, setIsUnscaled] = useState(false);
    const [scaleSource, setScaleSource] = useState('default');
    const [calibrationMode, setCalibrationMode] = useState(false);
    const [calibPoints, setCalibPoints] = useState([]);
    const [calibInputMm, setCalibInputMm] = useState('');
    const [pixelsPerMm, setPixelsPerMm] = useState(0);

    // Animation Timeline States
    const [animations, setAnimations] = useState([]);
    const [activeClipIndex, setActiveClipIndex] = useState(0);
    const [animPlaying, setAnimPlaying] = useState(false);
    const [animTime, setAnimTime] = useState(0);
    const [animDuration, setAnimDuration] = useState(0);
    const [animSpeed, setAnimSpeed] = useState(1);

    // Measurement Tool States
    const [measureMode, setMeasureMode] = useState(false);
    const [measureUnit, setMeasureUnit] = useState('mm');
    const [measurements, setMeasurements] = useState([]);
    const [pendingPoint, setPendingPoint] = useState(null);
    const pointerDownPos = useRef({ x: 0, y: 0 });
    const measurementsRef = useRef([]);
    measurementsRef.current = measurements;

    // Spatial Annotations States (Controlled or Uncontrolled)
    const [internalAnnotations, setInternalAnnotations] = useState(() => {
        if (typeof window !== 'undefined' && enableDeepLink) {
            const hashAnns = decodeAnnotationsHash(window.location.hash);
            if (hashAnns && hashAnns.length > 0) return hashAnns;
        }
        return normalizeAnnotationList(defaultAnnotations);
    });
    const [internalSelectedId, setInternalSelectedId] = useState(null);
    const [annotationMode, setAnnotationMode] = useState(false);
    const [draftAnchor, setDraftAnchor] = useState(null);
    const [projectedPins, setProjectedPins] = useState([]);

    const resolvedAnnotations = useMemo(() => {
        if (annotations !== undefined) return normalizeAnnotationList(annotations);
        return internalAnnotations;
    }, [annotations, internalAnnotations]);

    const activeAnnotationId =
        selectedAnnotationId !== undefined ? selectedAnnotationId : internalSelectedId;

    const annotationsRef = useRef([]);
    annotationsRef.current = resolvedAnnotations;
    const projectedPinsRef = useRef([]);
    projectedPinsRef.current = projectedPins;

    // Diagnostics & Loading
    const [loading, setLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        triangles: 0,
        vertices: 0,
        meshes: 0,
        rawSize: new THREE.Vector3(),
    });

    animPlayingRef.current = animPlaying;
    animSpeedRef.current = animSpeed;
    scaleFactorRef.current = isUnscaled ? null : customScaleFactor;

    const handleToggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === 'dark' ? 'light' : 'dark';
            setBgColor((currentBg) => {
                if (next === 'light' && currentBg === '#090d16') return '#f1f5f9';
                if (next === 'dark' && currentBg === '#f1f5f9') return '#090d16';
                return currentBg;
            });
            return next;
        });
    }, []);

    const showToast = useCallback((msg) => {
        setToastMessage(msg);
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(() => {
            setToastMessage((prev) => (prev === msg ? null : prev));
        }, 2800);
    }, []);

    // Shared reusable materials (disposed on unmount)
    const sharedMaterialsRef = useRef(null);
    if (!sharedMaterialsRef.current && typeof document !== 'undefined') {
        sharedMaterialsRef.current = createSharedMaterials();
    }

    useEffect(() => {
        return () => {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
            disposeSharedMaterials(sharedMaterialsRef.current);
            sharedMaterialsRef.current = null;
        };
    }, []);

    const formatDistWithState = useCallback(
        (rawDistance, compact = false) =>
            formatDistance(rawDistance, { isUnscaled, customScaleFactor, measureUnit, compact }),
        [isUnscaled, customScaleFactor, measureUnit]
    );

    // Annotation Selection, Creation, Update & Delete Handlers
    const handleSelectAnnotation = useCallback(
        (ann) => {
            const nextId = ann ? ann.id : null;
            if (selectedAnnotationId === undefined) setInternalSelectedId(nextId);
            if (typeof onSelectAnnotation === 'function') onSelectAnnotation(ann);

            if (ann && activeCameraRef.current && controlsRef.current) {
                if (ann.camera?.position) {
                    cameraTweenRef.current = {
                        targetPos: new THREE.Vector3(...ann.camera.position),
                        targetLook: new THREE.Vector3(...(ann.camera.target || ann.target.position)),
                        alpha: 0,
                    };
                } else {
                    const pinPos = new THREE.Vector3(...ann.target.position);
                    const offset = activeCameraRef.current.position.clone().sub(controlsRef.current.target);
                    cameraTweenRef.current = {
                        targetPos: pinPos.clone().add(offset),
                        targetLook: pinPos,
                        alpha: 0,
                    };
                }
            }
        },
        [selectedAnnotationId, onSelectAnnotation]
    );

    const handleSaveDraftAnnotation = useCallback(
        async (draftPayload) => {
            const newItem = normalizeAnnotation({
                id: `ann-${Date.now()}`,
                ...draftPayload,
            });
            if (!newItem) throw new Error('Invalid annotation');
            if (annotations !== undefined && typeof onCreateAnnotation !== 'function') {
                throw new Error('Controlled annotations require an onCreateAnnotation callback');
            }

            if (typeof onCreateAnnotation === 'function') {
                const created = await onCreateAnnotation(newItem);
                const resolvedCreated = created ? normalizeAnnotation(created) : newItem;
                if (!resolvedCreated) throw new Error('Invalid annotation returned by onCreateAnnotation');
                if (annotations === undefined) {
                    setInternalAnnotations((prev) => [...prev, resolvedCreated]);
                }
                if (selectedAnnotationId === undefined) {
                    setInternalSelectedId(resolvedCreated.id);
                }
            } else if (annotations === undefined) {
                setInternalAnnotations((prev) => [...prev, newItem]);
                if (selectedAnnotationId === undefined) {
                    setInternalSelectedId(newItem.id);
                }
            }

            setDraftAnchor(null);
            setAnnotationMode(false);
            showToast('Annotation saved');
        },
        [annotations, selectedAnnotationId, onCreateAnnotation, showToast]
    );

    const handleUpdateAnnotation = useCallback(
        async (updatedPayload) => {
            const normalized = normalizeAnnotation(updatedPayload);
            if (!normalized) throw new Error('Invalid annotation');
            if (annotations !== undefined && typeof onUpdateAnnotation !== 'function') {
                throw new Error('Controlled annotations require an onUpdateAnnotation callback');
            }
            if (typeof onUpdateAnnotation === 'function') {
                const saved = await onUpdateAnnotation(normalized);
                const resolvedSaved = saved ? normalizeAnnotation(saved) : normalized;
                if (!resolvedSaved || resolvedSaved.id !== normalized.id) {
                    throw new Error('onUpdateAnnotation must return a valid annotation with the same id');
                }
                if (annotations === undefined) {
                    setInternalAnnotations((prev) =>
                        prev.map((item) => (item.id === resolvedSaved.id ? resolvedSaved : item))
                    );
                }
            } else if (annotations === undefined) {
                setInternalAnnotations((prev) =>
                    prev.map((item) => (item.id === normalized.id ? normalized : item))
                );
            }
            showToast('Annotation updated');
        },
        [annotations, onUpdateAnnotation, showToast]
    );

    const handleDeleteAnnotation = useCallback(
        async (id) => {
            if (annotations !== undefined && typeof onDeleteAnnotation !== 'function') {
                throw new Error('Controlled annotations require an onDeleteAnnotation callback');
            }
            if (typeof onDeleteAnnotation === 'function') {
                await onDeleteAnnotation(id);
            }
            if (annotations === undefined) {
                setInternalAnnotations((prev) => prev.filter((item) => item.id !== id));
            }
            if (activeAnnotationId === id) {
                if (selectedAnnotationId === undefined) setInternalSelectedId(null);
                if (typeof onSelectAnnotation === 'function') onSelectAnnotation(null);
            }
            showToast('Annotation removed');
        },
        [annotations, activeAnnotationId, selectedAnnotationId, onDeleteAnnotation, onSelectAnnotation, showToast]
    );

    // Animation Playback Handlers
    const playClip = useCallback((index, autoStart = true) => {
        const mixer = mixerRef.current;
        const clips = animClipsRef.current;
        if (!mixer || !clips[index]) return;

        mixer.stopAllAction();
        const action = mixer.clipAction(clips[index]);
        action.reset();
        action.play();
        action.paused = !autoStart;
        activeActionRef.current = action;

        setActiveClipIndex(index);
        setAnimDuration(clips[index].duration);
        setAnimTime(0);
        setAnimPlaying(autoStart);
    }, []);

    const handleToggleAnimPlay = useCallback(() => {
        const action = activeActionRef.current;
        if (!action) return;
        const nextState = !animPlaying;
        action.paused = !nextState;
        setAnimPlaying(nextState);
    }, [animPlaying]);

    const handleScrubAnim = useCallback((newTime) => {
        const mixer = mixerRef.current;
        const action = activeActionRef.current;
        if (!mixer || !action) return;

        action.paused = true;
        setAnimPlaying(false);
        action.time = newTime;
        mixer.update(0);
        setAnimTime(newTime);
    }, []);

    // Fullscreen
    const toggleFullscreen = useCallback(() => {
        if (!wrapperRef.current) return;
        if (!document.fullscreenElement) {
            wrapperRef.current.requestFullscreen().catch((err) => console.error(err));
        } else {
            document.exitFullscreen().catch((err) => console.error(err));
        }
    }, []);

    useEffect(() => {
        const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Projection Switcher
    const switchProjection = useCallback((targetMode) => {
        const persp = perspCameraRef.current;
        const ortho = orthoCameraRef.current;
        const controls = controlsRef.current;
        const container = wrapperRef.current || mountRef.current;
        if (!persp || !ortho || !controls || !container) return;

        const currentCam = activeCameraRef.current || persp;
        const target = controls.target.clone();
        const dist = currentCam.position.distanceTo(target);
        const aspect = (container.clientWidth || 800) / (container.clientHeight || 600);

        if (targetMode === 'orthographic') {
            const halfHeight = dist * Math.tan(THREE.MathUtils.degToRad(persp.fov * 0.5));
            ortho.left = -halfHeight * aspect;
            ortho.right = halfHeight * aspect;
            ortho.top = halfHeight;
            ortho.bottom = -halfHeight;
            ortho.zoom = 1;
            ortho.near = persp.near;
            ortho.far = persp.far;
            ortho.position.copy(persp.position);
            ortho.quaternion.copy(persp.quaternion);
            ortho.updateProjectionMatrix();

            activeCameraRef.current = ortho;
            controls.object = ortho;
        } else {
            const halfHeight = (ortho.top - ortho.bottom) / (2 * ortho.zoom);
            const rawDist = halfHeight / Math.tan(THREE.MathUtils.degToRad(persp.fov * 0.5));
            const newDist = THREE.MathUtils.clamp(rawDist, persp.near * 2, persp.far * 0.5);
            const dir = ortho.position.clone().sub(target).normalize();
            persp.position.copy(target).addScaledVector(dir, newDist);
            persp.quaternion.copy(ortho.quaternion);
            persp.aspect = aspect;
            persp.updateProjectionMatrix();

            activeCameraRef.current = persp;
            controls.object = persp;
        }

        controls.update();
        setProjectionMode(targetMode);
    }, []);

    // Camera Framing & Preset Views
    const setCameraView = useCallback((preset = 'iso') => {
        const cam = activeCameraRef.current;
        const controls = controlsRef.current;
        const container = wrapperRef.current || mountRef.current;
        if (!cam || !controls || !modelGroupRef.current) return;

        const box = new THREE.Box3().setFromObject(modelGroupRef.current);
        if (box.isEmpty()) return;

        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = (perspCameraRef.current?.fov || 45) * (Math.PI / 180);
        const dist = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.45;

        const framedCenter = center.clone();
        framedCenter.y -= maxDim * 0.04;

        const pos = framedCenter.clone();
        switch (preset) {
            case 'front':
                pos.z += dist;
                break;
            case 'top':
                pos.y += dist;
                pos.z += 0.001;
                break;
            case 'side':
                pos.x += dist;
                break;
            case 'iso':
            default:
                pos.set(
                    framedCenter.x + dist * 0.45,
                    framedCenter.y + dist * 0.3,
                    framedCenter.z + dist * 0.85
                );
                break;
        }

        cameraTweenRef.current = { targetPos: pos, targetLook: framedCenter, alpha: 0 };

        if (orthoCameraRef.current && container) {
            const aspect = (container.clientWidth || 800) / (container.clientHeight || 600);
            const halfH = maxDim * 0.8;
            orthoCameraRef.current.left = -halfH * aspect;
            orthoCameraRef.current.right = halfH * aspect;
            orthoCameraRef.current.top = halfH;
            orthoCameraRef.current.bottom = -halfH;
            orthoCameraRef.current.zoom = 1;
            orthoCameraRef.current.updateProjectionMatrix();
        }
    }, []);

    // Keyboard Orbit, Pan & Zoom Helper
    const nudgeCamera = useCallback((action, step = 1) => {
        const cam = activeCameraRef.current;
        const controls = controlsRef.current;
        if (!cam || !controls) return;

        cameraTweenRef.current = null;
        const offset = cam.position.clone().sub(controls.target);
        const dist = offset.length();

        if (action === 'rotateLeft' || action === 'rotateRight') {
            const angle = (action === 'rotateLeft' ? 1 : -1) * 0.08 * step;
            const spherical = new THREE.Spherical().setFromVector3(offset);
            spherical.theta += angle;
            offset.setFromSpherical(spherical);
            cam.position.copy(controls.target).add(offset);
        } else if (action === 'rotateUp' || action === 'rotateDown') {
            const angle = (action === 'rotateUp' ? -1 : 1) * 0.08 * step;
            const spherical = new THREE.Spherical().setFromVector3(offset);
            spherical.phi = THREE.MathUtils.clamp(spherical.phi + angle, 0.05, Math.PI - 0.05);
            offset.setFromSpherical(spherical);
            cam.position.copy(controls.target).add(offset);
        } else if (action === 'pan') {
            const panOffset = new THREE.Vector3();
            const panScale = dist * 0.05;
            const xAxis = new THREE.Vector3().setFromMatrixColumn(cam.matrix, 0);
            const yAxis = new THREE.Vector3().setFromMatrixColumn(cam.matrix, 1);
            panOffset.addScaledVector(xAxis, -step.x * panScale);
            panOffset.addScaledVector(yAxis, step.y * panScale);
            cam.position.add(panOffset);
            controls.target.add(panOffset);
        } else if (action === 'zoomIn' || action === 'zoomOut') {
            const factor = action === 'zoomIn' ? 0.88 : 1.14;
            if (cam.isOrthographicCamera) {
                cam.zoom = THREE.MathUtils.clamp(cam.zoom / factor, 0.1, 50);
                cam.updateProjectionMatrix();
            } else {
                offset.multiplyScalar(factor);
                cam.position.copy(controls.target).add(offset);
            }
        }
        controls.update();
    }, []);

    // Shareable Deep-Link Hash Generator
    const handleCopyShareLink = useCallback(() => {
        const cam = activeCameraRef.current;
        const controls = controlsRef.current;
        if (!cam || !controls) return;

        const payload = {
            p: cam.position.toArray().map((n) => Number(n.toFixed(4))),
            t: controls.target.toArray().map((n) => Number(n.toFixed(4))),
            proj: projectionMode,
            shade: shadingMode,
            scale: customScaleFactor ? Number(customScaleFactor.toFixed(4)) : null,
        };
        const encoded = btoa(encodeURIComponent(JSON.stringify(payload)));
        const url = `${window.location.origin}${window.location.pathname}${window.location.search}#view=${encoded}`;
        window.history.replaceState(null, '', `#view=${encoded}`);
        navigator.clipboard?.writeText(url).then(() => showToast('View link copied to clipboard'));
    }, [projectionMode, shadingMode, customScaleFactor, showToast]);

    // Exports & Downloads
    const handleDownloadOriginal = () => {
        const a = document.createElement('a');
        a.href = modelUrl;
        a.download = `${fileName.replace(/\.[^/.]+$/, '')}.glb`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setDownloadMenuOpen(false);
    };

    const handleExportMesh = (format) => {
        if (!modelGroupRef.current) return;
        setExporting(true);
        setDownloadMenuOpen(false);

        setTimeout(() => {
            try {
                const baseName = fileName.replace(/\.[^/.]+$/, '');
                if (format === 'obj') {
                    const result = new OBJExporter().parse(modelGroupRef.current);
                    triggerBlobDownload(new Blob([result], { type: 'text/plain' }), `${baseName}.obj`);
                } else if (format === 'stl') {
                    const result = new STLExporter().parse(modelGroupRef.current, { binary: true });
                    triggerBlobDownload(new Blob([result], { type: 'application/octet-stream' }), `${baseName}.stl`);
                }
            } catch (err) {
                console.error(`Failed to export ${format}:`, err);
            } finally {
                setExporting(false);
            }
        }, 30);
    };

    const handleScreenshot = () => {
        if (!rendererRef.current || !sceneRef.current || !activeCameraRef.current) return;
        setDownloadMenuOpen(false);
        rendererRef.current.render(sceneRef.current, activeCameraRef.current);
        rendererRef.current.domElement.toBlob((blob) => {
            if (blob) {
                const baseName = fileName.replace(/\.[^/.]+$/, '');
                triggerBlobDownload(blob, `${baseName}_render.png`);
            }
        });
    };

    const handleRecordTurntable = useCallback(() => {
        const renderer = rendererRef.current;
        const controls = controlsRef.current;
        if (!renderer || !controls || recordingVideo) return;

        if (typeof renderer.domElement.captureStream !== 'function' || typeof MediaRecorder === 'undefined') {
            showToast('Video capture not supported in this browser');
            return;
        }

        setDownloadMenuOpen(false);
        setRecordingVideo(true);
        const prevAutoRotate = controls.autoRotate;
        const prevSpeed = controls.autoRotateSpeed;

        controls.autoRotate = true;
        controls.autoRotateSpeed = 12.0;

        const stream = renderer.domElement.captureStream(30);
        const chunks = [];
        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

        recorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) chunks.push(e.data);
        };
        recorder.onstop = () => {
            controls.autoRotate = prevAutoRotate;
            controls.autoRotateSpeed = prevSpeed;
            setRecordingVideo(false);
            const blob = new Blob(chunks, { type: 'video/webm' });
            const baseName = fileName.replace(/\.[^/.]+$/, '');
            triggerBlobDownload(blob, `${baseName}_turntable.webm`);
            showToast('Turntable video saved');
        };

        recorder.start();
        setTimeout(() => {
            if (recorder.state === 'recording') recorder.stop();
        }, 5000);
    }, [recordingVideo, fileName, showToast]);

    const clearMeasurements = useCallback(() => {
        setMeasurements([]);
        setPendingPoint(null);
        clearThreeGroup(measureGroupRef.current);
    }, []);

    // Rebuild 3D Measurement Markers
    useEffect(() => {
        const group = measureGroupRef.current;
        clearThreeGroup(group);
        if (measurements.length === 0 && !pendingPoint) return;

        const box = modelBoundsRef.current;
        const maxDim = box.isEmpty() ? 1 : box.getSize(new THREE.Vector3()).length();
        const markerRadius = Math.max(maxDim * 0.008, 0.0005);

        const sphereGeo = new THREE.SphereGeometry(markerRadius, 12, 12);
        const sphereMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, depthTest: false });
        const lineMat = new THREE.LineBasicMaterial({ color: 0xfbbf24, depthTest: false });

        const addDot = (vec) => {
            const dot = new THREE.Mesh(sphereGeo, sphereMat);
            dot.position.copy(vec);
            dot.renderOrder = 999;
            group.add(dot);
        };

        measurements.forEach((m) => {
            addDot(m.p1);
            addDot(m.p2);
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([m.p1, m.p2]), lineMat);
            line.renderOrder = 998;
            group.add(line);
        });

        if (pendingPoint) addDot(pendingPoint);

        return () => {
            sphereGeo.dispose();
            sphereMat.dispose();
            lineMat.dispose();
        };
    }, [measurements, pendingPoint]);

    // Rebuild 3D Calibration Markers
    useEffect(() => {
        const group = calibGroupRef.current;
        clearThreeGroup(group);
        if (calibPoints.length === 0) return;

        const box = modelBoundsRef.current;
        const maxDim = box.isEmpty() ? 1 : box.getSize(new THREE.Vector3()).length();
        const markerRadius = Math.max(maxDim * 0.009, 0.0006);

        const sphereGeo = new THREE.SphereGeometry(markerRadius, 12, 12);
        const sphereMat = new THREE.MeshBasicMaterial({ color: 0x10b981, depthTest: false });
        const lineMat = new THREE.LineBasicMaterial({ color: 0x34d399, depthTest: false });

        calibPoints.forEach((pt) => {
            const dot = new THREE.Mesh(sphereGeo, sphereMat);
            dot.position.copy(pt);
            dot.renderOrder = 1000;
            group.add(dot);
        });

        if (calibPoints.length === 2) {
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(calibPoints), lineMat);
            line.renderOrder = 999;
            group.add(line);
        }

        return () => {
            sphereGeo.dispose();
            sphereMat.dispose();
            lineMat.dispose();
        };
    }, [calibPoints]);

    // BVH-Accelerated Surface Raycaster Helper (Point + World Normal + Mesh Name)
    const raycastSurfaceDetail = useCallback((clientX, clientY) => {
        if (!mountRef.current || !activeCameraRef.current) return null;

        const rect = mountRef.current.getBoundingClientRect();
        const mouse = new THREE.Vector2(
            ((clientX - rect.left) / rect.width) * 2 - 1,
            -((clientY - rect.top) / rect.height) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.firstHitOnly = true;
        raycaster.setFromCamera(mouse, activeCameraRef.current);

        const meshes = [];
        modelGroupRef.current.traverse((c) => {
            if (c.isMesh) meshes.push(c);
        });

        const hits = raycaster.intersectObjects(meshes, false);
        if (hits.length === 0) return null;

        const hit = hits[0];
        let worldNormal = null;
        if (hit.face) {
            const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
            worldNormal = hit.face.normal.clone().applyMatrix3(normalMatrix).normalize();
        }

        return {
            point: hit.point.clone(),
            normal: worldNormal,
            meshName: hit.object.name || null,
        };
    }, []);

    // Pointer Handlers
    const handleCanvasPointerDown = (e) => {
        if (!e.isPrimary) return;
        pointerDownPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleCanvasPointerUp = (e) => {
        if (!e.isPrimary) return;
        if (!measureMode && !calibrationMode && !annotationMode) return;

        const dx = e.clientX - pointerDownPos.current.x;
        const dy = e.clientY - pointerDownPos.current.y;
        if (Math.hypot(dx, dy) > 5) return;

        const surfaceHit = raycastSurfaceDetail(e.clientX, e.clientY);
        if (!surfaceHit) return;
        const hitPoint = surfaceHit.point;

        if (annotationMode && enableAnnotationCreate) {
            const cam = activeCameraRef.current;
            const controls = controlsRef.current;
            setDraftAnchor({
                target: {
                    position: hitPoint.toArray().map((n) => Number(n.toFixed(6))),
                    normal: surfaceHit.normal
                        ? surfaceHit.normal.toArray().map((n) => Number(n.toFixed(4)))
                        : null,
                    meshName: surfaceHit.meshName,
                },
                camera:
                    cam && controls
                        ? {
                              position: cam.position.toArray().map((n) => Number(n.toFixed(4))),
                              target: controls.target.toArray().map((n) => Number(n.toFixed(4))),
                              projection: projectionMode,
                          }
                        : null,
            });
            return;
        }

        if (calibrationMode && enableCalibrate) {
            if (calibPoints.length === 0) setCalibPoints([hitPoint]);
            else if (calibPoints.length === 1) setCalibPoints([calibPoints[0], hitPoint]);
            else setCalibPoints([hitPoint]);
            return;
        }

        if (measureMode && enableMeasure) {
            if (!pendingPoint) {
                setPendingPoint(hitPoint);
            } else {
                const rawDistance = pendingPoint.distanceTo(hitPoint);
                setMeasurements((prev) => [
                    ...prev,
                    { id: Date.now(), p1: pendingPoint, p2: hitPoint, rawDistance, screenX: 0, screenY: 0, visible: true },
                ]);
                setPendingPoint(null);
            }
        }
    };

    const handleCanvasDoubleClick = (e) => {
        if (measureMode || calibrationMode || annotationMode) return;
        const surfaceHit = raycastSurfaceDetail(e.clientX, e.clientY);

        if (surfaceHit && activeCameraRef.current && controlsRef.current) {
            const cam = activeCameraRef.current;
            const controls = controlsRef.current;
            const offset = cam.position.clone().sub(controls.target);
            cameraTweenRef.current = {
                targetPos: surfaceHit.point.clone().add(offset),
                targetLook: surfaceHit.point,
                alpha: 0,
            };
        } else {
            setCameraView('iso');
        }
    };

    const handleApplyCalibration = (e) => {
        e.preventDefault();
        if (calibPoints.length < 2) return;
        const targetMm = parseFloat(calibInputMm);
        const rawDist = calibPoints[0].distanceTo(calibPoints[1]);
        if (targetMm > 0 && rawDist > 0) {
            const newScale = targetMm / rawDist;
            setCustomScaleFactor(newScale);
            setIsUnscaled(false);
            setScaleSource('manual');
            setCalibrationMode(false);
            setCalibPoints([]);
            setCalibInputMm('');
            showToast(`Calibrated to ${targetMm} mm`);
            if (typeof onCalibrate === 'function') onCalibrate({ scaleFactor: newScale, targetMm });
        }
    };

    // Keyboard Shortcuts
    useViewerHotkeys({
        viewportRef: mountRef,
        enableMeasure,
        enableCalibrate,
        pendingPoint,
        setPendingPoint,
        measureMode,
        setMeasureMode: enableMeasure ? setMeasureMode : () => {},
        calibPoints,
        setCalibPoints,
        calibrationMode,
        setCalibrationMode: enableCalibrate ? setCalibrationMode : () => {},
        setDownloadMenuOpen,
        projectionMode,
        switchProjection,
        setShowGrid,
        setAutoRotate,
        setCameraView,
        nudgeCamera,
    });

    // Three.js Scene Setup & Model Loader
    useEffect(() => {
        const container = mountRef.current;
        const rootWrapper = wrapperRef.current || container;
        if (!container || !rootWrapper) return;

        container.innerHTML = '';

        const width = rootWrapper.clientWidth || 800;
        const height = rootWrapper.clientHeight || 600;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(bgColor);
        if ('environmentIntensity' in scene) {
            scene.environmentIntensity = 0.8;
        }
        sceneRef.current = scene;

        const perspCamera = new THREE.PerspectiveCamera(45, width / height, 0.001, 1000);
        perspCamera.position.set(0, 0.5, 3);
        perspCameraRef.current = perspCamera;

        const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, 1000);
        orthoCameraRef.current = orthoCamera;
        activeCameraRef.current = perspCamera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height, false);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.shadowMap.enabled = false;
        renderer.localClippingEnabled = false;
        rendererRef.current = renderer;
        container.appendChild(renderer.domElement);

        // Studio Image-Based Lighting (IBL)
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        const roomEnv = new RoomEnvironment();
        const envRT = pmremGenerator.fromScene(roomEnv, 0.04);
        scene.environment = envRT.texture;
        roomEnv.dispose();
        pmremGenerator.dispose();

        const controls = new OrbitControls(perspCamera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.autoRotateSpeed = 1.8;
        controlsRef.current = controls;

        scene.add(new THREE.AmbientLight(0xffffff, 0.35));
        const lightRig = new THREE.Group();
        const keyLight = new THREE.DirectionalLight(0xfffaed, 1.8);
        keyLight.position.set(5, 8, 6);
        lightRig.add(keyLight);

        const rimLight = new THREE.DirectionalLight(0x8ec5fc, 1.0);
        rimLight.position.set(-6, -2, -5);
        lightRig.add(rimLight);
        scene.add(lightRig);
        lightRigRef.current = lightRig;

        scene.add(modelGroupRef.current);
        scene.add(measureGroupRef.current);
        scene.add(calibGroupRef.current);

        // Corner Orientation Axis Gizmo Renderer
        let gizmoRenderer = null;
        const gizmoScene = new THREE.Scene();
        const gizmoCam = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
        gizmoCam.position.set(0, 0, 2.6);
        const axesHelper = new THREE.AxesHelper(1);
        gizmoScene.add(axesHelper);

        if (gizmoCanvasRef.current) {
            gizmoRenderer = new THREE.WebGLRenderer({ canvas: gizmoCanvasRef.current, alpha: true, antialias: true });
            gizmoRenderer.setSize(64, 64);
            gizmoRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        }

        let isCancelled = false;
        setLoading(true);
        setLoadProgress(0);
        setError(null);
        clearMeasurements();
        setCalibPoints([]);
        setCalibrationMode(false);
        setAnnotationMode(false);
        setDraftAnchor(null);
        setAnimations([]);

        // Configure GLTFLoader with Draco + KTX2 support
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(configRef.current.dracoDecoderPath);

        const ktx2Loader = new KTX2Loader();
        ktx2Loader.setTranscoderPath(configRef.current.ktx2TranscoderPath);
        ktx2Loader.detectSupport(renderer);

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        loader.setKTX2Loader(ktx2Loader);

        loader.load(
            modelUrl,
            (gltf) => {
                if (isCancelled) {
                    disposeObjectTree(gltf.scene);
                    return;
                }

                if (mixerRef.current) {
                    mixerRef.current.stopAllAction();
                    mixerRef.current = null;
                }

                disposeObjectTree(modelGroupRef.current);
                modelGroupRef.current.clear();
                originalMaterials.current.clear();

                let triCount = 0;
                let vertCount = 0;
                let meshCount = 0;

                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        meshCount++;
                        triCount += child.geometry.index
                            ? child.geometry.index.count / 3
                            : child.geometry.attributes.position.count / 3;
                        vertCount += child.geometry.attributes.position.count;

                        if (child.geometry && typeof child.geometry.computeBoundsTree === 'function') {
                            child.geometry.computeBoundsTree();
                        }

                        if (child.material) {
                            const mats = Array.isArray(child.material) ? child.material : [child.material];
                            mats.forEach((m) => {
                                m.clippingPlanes = [clipPlaneRef.current];
                                m.clipShadows = false;
                                m.side = THREE.DoubleSide;
                            });
                        }
                        originalMaterials.current.set(child.uuid, child.material);
                    }
                });

                modelGroupRef.current.add(gltf.scene);

                // Setup embedded glTF animations if present
                animClipsRef.current = gltf.animations || [];
                setAnimations(animClipsRef.current);

                if (animClipsRef.current.length > 0) {
                    const mixer = new THREE.AnimationMixer(gltf.scene);
                    mixerRef.current = mixer;
                    const firstAction = mixer.clipAction(animClipsRef.current[0]);
                    firstAction.play();
                    activeActionRef.current = firstAction;
                    setActiveClipIndex(0);
                    setAnimDuration(animClipsRef.current[0].duration);
                    setAnimTime(0);
                    setAnimPlaying(true);
                } else {
                    activeActionRef.current = null;
                    setAnimPlaying(false);
                }

                const box = new THREE.Box3().setFromObject(gltf.scene);
                modelBoundsRef.current.copy(box);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());
                const maxRawDim = Math.max(size.x, size.y, size.z);

                const meshStats = {
                    triangles: Math.round(triCount),
                    vertices: Math.round(vertCount),
                    meshes: meshCount,
                    rawSize: size,
                };
                setStats(meshStats);

                const {
                    knownMaxDimensionMm: knownMm,
                    defaultUnitScale: unitScale,
                    sanityRangeMm: sanity,
                    enableDeepLink: deepLink,
                    onLoad: handleOnLoad,
                } = configRef.current;

                if (knownMm && maxRawDim > 0) {
                    setCustomScaleFactor(knownMm / maxRawDim);
                    setIsUnscaled(false);
                    setScaleSource('catalog');
                } else if (unitScale && maxRawDim > 0) {
                    const impliedMm = maxRawDim * unitScale;
                    const [minSanity, maxSanity] = sanity;
                    if (impliedMm >= minSanity && impliedMm <= maxSanity) {
                        setCustomScaleFactor(unitScale);
                        setIsUnscaled(false);
                        setScaleSource('default');
                    } else {
                        setCustomScaleFactor(null);
                        setIsUnscaled(true);
                        setScaleSource('unscaled');
                    }
                } else {
                    setCustomScaleFactor(null);
                    setIsUnscaled(true);
                    setScaleSource('unscaled');
                }

                [gridHelperRef, boxHelperRef, clipHelperRef].forEach((ref) => {
                    if (ref.current) {
                        ref.current.geometry.dispose();
                        ref.current.material.dispose();
                        scene.remove(ref.current);
                    }
                });

                const gridSize = Math.pow(10, Math.ceil(Math.log10(Math.max(maxRawDim * 2, 0.001))));
                const grid = new THREE.GridHelper(gridSize, 20, 0xf59e0b, 0x334155);
                grid.position.set(center.x, box.min.y, center.z);
                grid.visible = false;
                scene.add(grid);
                gridHelperRef.current = grid;

                const bbox = new THREE.BoxHelper(gltf.scene, 0xf59e0b);
                bbox.visible = false;
                scene.add(bbox);
                boxHelperRef.current = bbox;

                const planeGeo = new THREE.PlaneGeometry(maxRawDim * 1.3, maxRawDim * 1.3);
                const planeMat = new THREE.MeshBasicMaterial({
                    color: 0x38bdf8,
                    transparent: true,
                    opacity: 0.14,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                });
                const planeMesh = new THREE.Mesh(planeGeo, planeMat);
                planeMesh.visible = false;
                scene.add(planeMesh);
                clipHelperRef.current = planeMesh;

                setLoading(false);
                if (typeof handleOnLoad === 'function') handleOnLoad(meshStats);

                if (deepLink) {
                    const hashMatch = window.location.hash.match(/view=([A-Za-z0-9+/=]+)/);
                    if (hashMatch) {
                        try {
                            const decoded = JSON.parse(decodeURIComponent(atob(hashMatch[1])));
                            if (decoded.p && decoded.t) {
                                perspCamera.position.fromArray(decoded.p);
                                controls.target.fromArray(decoded.t);
                                controls.update();
                                if (decoded.shade) setShadingMode(decoded.shade);
                                if (decoded.scale) {
                                    setCustomScaleFactor(decoded.scale);
                                    setIsUnscaled(false);
                                    setScaleSource('shared');
                                }
                                if (decoded.proj === 'orthographic') switchProjection('orthographic');
                                return;
                            }
                        } catch {
                            // Fall back to default iso view
                        }
                    }
                }

                setCameraView('iso');
            },
            (xhr) => {
                if (isCancelled) return;
                if (xhr.lengthComputable && xhr.total > 0) {
                    const pct = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
                    setLoadProgress(pct);
                }
            },
            (err) => {
                if (isCancelled) return;
                console.error('Error loading 3D asset:', err);
                setError('Failed to fetch or parse GLB binary. Check file path, Draco/KTX2 decoders, or CORS headers.');
                setLoading(false);
                if (typeof configRef.current.onError === 'function') configRef.current.onError(err);
            }
        );

        const clock = new THREE.Clock();
        let animationFrameId;
        const tempMid = new THREE.Vector3();
        const tempPinPos = new THREE.Vector3();
        const tempNormal = new THREE.Vector3();
        const tempToCam = new THREE.Vector3();
        let lastUiSync = 0;

        const animate = (now = 0) => {
            animationFrameId = requestAnimationFrame(animate);
            const delta = clock.getDelta();
            const activeCam = activeCameraRef.current || perspCamera;

            if (mixerRef.current && animPlayingRef.current) {
                mixerRef.current.update(delta * animSpeedRef.current);
            }

            if (cameraTweenRef.current) {
                const tw = cameraTweenRef.current;
                tw.alpha = Math.min(tw.alpha + 0.08, 1);
                activeCam.position.lerp(tw.targetPos, tw.alpha);
                controls.target.lerp(tw.targetLook, tw.alpha);
                if (tw.alpha >= 1) cameraTweenRef.current = null;
            }

            controls.update();
            renderer.render(scene, activeCam);

            if (gizmoRenderer) {
                axesHelper.quaternion.copy(activeCam.quaternion).invert();
                gizmoRenderer.render(gizmoScene, gizmoCam);
            }

            const w = rootWrapper.clientWidth;
            const h = rootWrapper.clientHeight;

            if (now - lastUiSync > 65 && h > 0) {
                lastUiSync = now;

                if (activeActionRef.current && animPlayingRef.current) {
                    setAnimTime(activeActionRef.current.time);
                }

                const sf = scaleFactorRef.current;
                if (sf && sf > 0) {
                    let visibleHeightUnits = 1;
                    if (activeCam.isOrthographicCamera) {
                        visibleHeightUnits = (activeCam.top - activeCam.bottom) / activeCam.zoom;
                    } else {
                        const dist = activeCam.position.distanceTo(controls.target);
                        const vFovRad = THREE.MathUtils.degToRad(activeCam.fov);
                        visibleHeightUnits = 2 * dist * Math.tan(vFovRad / 2);
                    }
                    const nextPxPerMm = h / (visibleHeightUnits * sf);
                    if (scaleNeedsUpdate(pixelsPerMmRef.current, nextPxPerMm)) {
                        pixelsPerMmRef.current = nextPxPerMm;
                        setPixelsPerMm(nextPxPerMm);
                    }
                } else if (pixelsPerMmRef.current !== 0) {
                    pixelsPerMmRef.current = 0;
                    setPixelsPerMm(0);
                }
            }

            // Project 2D Measurement Badges
            if (measurementsRef.current.length > 0 && w > 0 && h > 0) {
                const updated = measurementsRef.current.map((m) => {
                    tempMid.addVectors(m.p1, m.p2).multiplyScalar(0.5);
                    tempMid.project(activeCam);
                    return {
                        ...m,
                        screenX: (tempMid.x * 0.5 + 0.5) * w,
                        screenY: (-(tempMid.y * 0.5) + 0.5) * h,
                        visible: tempMid.z < 1,
                    };
                });

                const changed = updated.some(
                    (u, idx) =>
                        Math.abs(u.screenX - measurementsRef.current[idx].screenX) > 0.5 ||
                        Math.abs(u.screenY - measurementsRef.current[idx].screenY) > 0.5 ||
                        u.visible !== measurementsRef.current[idx].visible
                );
                if (changed) setMeasurements(updated);
            }

            // Project 2D Spatial Annotation Pins with Back-Face Normal Occlusion
            if (annotationsRef.current.length > 0 && w > 0 && h > 0) {
                const nextPins = annotationsRef.current.map((ann) => {
                    tempPinPos.set(...ann.target.position);
                    let occluded = false;

                    if (ann.target.normal) {
                        tempNormal.set(...ann.target.normal);
                        tempToCam.subVectors(activeCam.position, tempPinPos).normalize();
                        occluded = tempNormal.dot(tempToCam) < -0.05;
                    }

                    tempPinPos.project(activeCam);
                    return {
                        id: ann.id,
                        screenX: (tempPinPos.x * 0.5 + 0.5) * w,
                        screenY: (-(tempPinPos.y * 0.5) + 0.5) * h,
                        visible: tempPinPos.z < 1,
                        occluded,
                    };
                });

                const pinsChanged = projectedPinsChanged(nextPins, projectedPinsRef.current);
                if (pinsChanged) setProjectedPins(nextPins);
            } else if (projectedPinsRef.current.length > 0) {
                setProjectedPins([]);
            }
        };
        animate();

        const syncSize = () => {
            const w = rootWrapper.clientWidth;
            const h = rootWrapper.clientHeight;
            if (w > 0 && h > 0) {
                const aspect = w / h;
                perspCamera.aspect = aspect;
                perspCamera.updateProjectionMatrix();

                const halfH = (orthoCamera.top - orthoCamera.bottom) / 2;
                orthoCamera.left = -halfH * aspect;
                orthoCamera.right = halfH * aspect;
                orthoCamera.updateProjectionMatrix();

                renderer.setSize(w, h, false);
            }
        };

        syncSize();
        const rafSyncId = requestAnimationFrame(syncSize);
        const resizeObserver = new ResizeObserver(() => syncSize());
        resizeObserver.observe(rootWrapper);

        return () => {
            isCancelled = true;
            cancelAnimationFrame(animationFrameId);
            cancelAnimationFrame(rafSyncId);
            resizeObserver.disconnect();
            controls.dispose();
            dracoLoader.dispose();
            ktx2Loader.dispose();
            envRT.dispose();

            if (mixerRef.current) {
                mixerRef.current.stopAllAction();
                mixerRef.current = null;
            }

            disposeObjectTree(modelGroupRef.current);
            modelGroupRef.current.clear();
            originalMaterials.current.clear();

            clearThreeGroup(measureGroupRef.current);
            clearThreeGroup(calibGroupRef.current);

            [gridHelperRef, boxHelperRef, clipHelperRef].forEach((ref) => {
                if (ref.current) {
                    ref.current.geometry.dispose();
                    ref.current.material.dispose();
                }
            });
            if (gizmoRenderer) gizmoRenderer.dispose();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
            renderer.forceContextLoss();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modelUrl, setCameraView, switchProjection, clearMeasurements]);

    // Update Cross-Section Clipping Plane
    useEffect(() => {
        const renderer = rendererRef.current;
        const plane = clipPlaneRef.current;
        const helper = clipHelperRef.current;
        const box = modelBoundsRef.current;

        if (!renderer || !plane) return;
        renderer.localClippingEnabled = clipEnabled;

        if (helper) helper.visible = clipEnabled;
        if (!clipEnabled || box.isEmpty()) return;

        const minVal = box.min[clipAxis];
        const maxVal = box.max[clipAxis];
        const center = box.getCenter(new THREE.Vector3());
        const sliceCoord = minVal + (maxVal - minVal) * (clipPercent / 100);

        if (clipAxis === 'x') {
            plane.normal.set(-1, 0, 0);
            plane.constant = sliceCoord;
            if (helper) {
                helper.position.set(sliceCoord, center.y, center.z);
                helper.rotation.set(0, Math.PI / 2, 0);
            }
        } else if (clipAxis === 'y') {
            plane.normal.set(0, -1, 0);
            plane.constant = sliceCoord;
            if (helper) {
                helper.position.set(center.x, sliceCoord, center.z);
                helper.rotation.set(Math.PI / 2, 0, 0);
            }
        } else {
            plane.normal.set(0, 0, -1);
            plane.constant = sliceCoord;
            if (helper) {
                helper.position.set(center.x, center.y, sliceCoord);
                helper.rotation.set(0, 0, 0);
            }
        }
    }, [clipEnabled, clipAxis, clipPercent]);

    // Handle Shading Mode & Wireframe Updates
    useEffect(() => {
        if (!modelGroupRef.current || !sharedMaterialsRef.current) return;
        const shared = sharedMaterialsRef.current;
        const planes = [clipPlaneRef.current];

        [shared.normals, shared.sculpt, shared.relief, shared.vertexColored, shared.vertexPlain].forEach((m) => {
            m.wireframe = wireframe;
            m.clippingPlanes = planes;
        });

        modelGroupRef.current.traverse((child) => {
            if (!child.isMesh) return;
            const origMat = originalMaterials.current.get(child.uuid);

            if (shadingMode === 'pbr' && origMat) {
                const mats = Array.isArray(origMat) ? origMat : [origMat];
                mats.forEach((m) => {
                    m.wireframe = wireframe;
                    m.clippingPlanes = planes;
                });
                child.material = origMat;
            } else if (shadingMode === 'relief') {
                child.material = shared.relief;
            } else if (shadingMode === 'normals') {
                child.material = shared.normals;
            } else if (shadingMode === 'vertex') {
                child.material = child.geometry.attributes.color ? shared.vertexColored : shared.vertexPlain;
            } else if (shadingMode === 'sculpt') {
                child.material = shared.sculpt;
            }
        });
    }, [shadingMode, wireframe]);

    useEffect(() => {
        if (controlsRef.current) controlsRef.current.autoRotate = autoRotate;
    }, [autoRotate]);

    useEffect(() => {
        if (rendererRef.current) rendererRef.current.toneMappingExposure = exposure;
    }, [exposure]);

    useEffect(() => {
        if (sceneRef.current && 'environmentIntensity' in sceneRef.current) {
            sceneRef.current.environmentIntensity = envIntensity;
        }
    }, [envIntensity]);

    useEffect(() => {
        if (lightRigRef.current) lightRigRef.current.rotation.y = THREE.MathUtils.degToRad(lightAngle);
        if (sharedMaterialsRef.current?.relief) {
            const rad = THREE.MathUtils.degToRad(lightAngle);
            sharedMaterialsRef.current.relief.uniforms.uLightDir.value
                .set(Math.sin(rad), 0.75, Math.cos(rad))
                .normalize();
        }
    }, [lightAngle]);

    useEffect(() => {
        if (sceneRef.current) sceneRef.current.background = new THREE.Color(bgColor);
    }, [bgColor]);

    useEffect(() => {
        if (gridHelperRef.current) gridHelperRef.current.visible = showGrid;
    }, [showGrid]);

    useEffect(() => {
        if (boxHelperRef.current) boxHelperRef.current.visible = showBBox;
    }, [showBBox]);

    const formattedDims = `${formatDistWithState(stats.rawSize.x, true)} × ${formatDistWithState(
        stats.rawSize.y,
        true
    )} × ${formatDistWithState(stats.rawSize.z, true)}`;

    return (
        <div
            ref={wrapperRef}
            className={`gmv-root relative w-full h-full font-sans select-none overflow-hidden bg-slate-100 dark:bg-slate-950 ${
                theme === 'dark' ? 'dark' : ''
            }`}
        >
            {/* Interactive 3D Canvas */}
            <div
                ref={mountRef}
                role="application"
                tabIndex={0}
                aria-label="Interactive 3D model viewport. Use arrow keys to orbit, Shift plus arrows to pan, plus or minus to zoom, and double-click to focus on a surface."
                onPointerDown={handleCanvasPointerDown}
                onPointerUp={handleCanvasPointerUp}
                onDoubleClick={handleCanvasDoubleClick}
                className={`w-full h-full focus:outline-hidden ${
                    measureMode || calibrationMode || annotationMode
                        ? 'cursor-crosshair'
                        : 'cursor-grab active:cursor-grabbing'
                }`}
            />

            {/* Loading Overlay */}
            {loading && (
                <div
                    role="status"
                    aria-live="polite"
                    aria-busy="true"
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-slate-100/90 dark:bg-slate-950/90 backdrop-blur-sm"
                >
                    <div
                        role="progressbar"
                        aria-valuenow={loadProgress > 0 ? loadProgress : undefined}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Loading 3D geometry"
                        className="w-48 h-1.5 bg-slate-300 dark:bg-slate-800 rounded-full overflow-hidden mb-3"
                    >
                        <div
                            className={`h-full bg-amber-500 transition-all duration-200 ${
                                loadProgress === 0 ? 'w-1/3 animate-pulse' : ''
                            }`}
                            style={loadProgress > 0 ? { width: `${Math.min(loadProgress, 100)}%` } : undefined}
                        />
                    </div>
                    <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                        {loadProgress >= 100
                            ? 'Parsing & Decoding Mesh...'
                            : loadProgress > 0
                              ? `Downloading 3D Asset... ${loadProgress}%`
                              : 'Downloading 3D Asset...'}
                    </p>
                </div>
            )}

            {/* Error Overlay */}
            {error && (
                <div
                    role="alert"
                    className="absolute inset-0 z-40 flex items-center justify-center bg-slate-100/95 dark:bg-slate-950/95 p-6"
                >
                    <div className="max-w-md bg-red-50 border-red-300 dark:bg-red-950/40 dark:border-red-500/40 border rounded-2xl p-5 text-center">
                        <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-1">3D Asset Load Error</p>
                        <p className="text-xs text-red-600 dark:text-red-200/80">{error}</p>
                    </div>
                </div>
            )}

            {/* Projected 2D Measurement Badges */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                {measurements.map(
                    (m, idx) =>
                        m.visible && (
                            <div
                                key={m.id}
                                style={{
                                    transform: `translate(-50%, -50%) translate(${m.screenX}px, ${m.screenY}px)`,
                                }}
                                className="absolute top-0 left-0 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-mono text-[11px] font-bold shadow-lg border border-amber-300 whitespace-nowrap"
                            >
                                #{idx + 1}: {formatDistWithState(m.rawDistance, true)}
                            </div>
                        )
                )}
            </div>

            {/* Top HUD Stack (Title Card + Action Toolbar, Active Tool Banners, Toast) */}
            <div className="pointer-events-none absolute inset-x-0 top-3 z-20 px-3 sm:px-4 flex flex-col gap-2">
                <TopBar
                    title={title}
                    subtitle={subtitle}
                    badge={badge}
                    backUrl={backUrl}
                    isUnscaled={isUnscaled}
                    scaleSource={scaleSource}
                    calibrationMode={calibrationMode}
                    measureMode={measureMode}
                    annotationMode={annotationMode}
                    inspectOpen={inspectOpen}
                    paradata={paradata}
                    paradataOpen={paradataOpen}
                    showParadata={showParadata}
                    showHeader={showHeader}
                    enableCalibrate={enableCalibrate}
                    enableMeasure={enableMeasure}
                    enableAnnotationCreate={enableAnnotationCreate}
                    enableDeepLink={enableDeepLink}
                    enableExport={enableExport}
                    showTelemetry={showTelemetry}
                    showThemeToggle={showThemeToggle}
                    enableFullscreen={enableFullscreen}
                    downloadMenuOpen={downloadMenuOpen}
                    setDownloadMenuOpen={setDownloadMenuOpen}
                    loading={loading}
                    error={error}
                    exporting={exporting}
                    recordingVideo={recordingVideo}
                    isFullscreen={isFullscreen}
                    theme={theme}
                    onToggleTheme={handleToggleTheme}
                    onToggleCalibrate={() => {
                        setMeasureMode(false);
                        setPendingPoint(null);
                        setAnnotationMode(false);
                        setDraftAnchor(null);
                        setCalibrationMode((prev) => !prev);
                        setCalibPoints([]);
                    }}
                    onToggleMeasure={() => {
                        setCalibrationMode(false);
                        setCalibPoints([]);
                        setAnnotationMode(false);
                        setDraftAnchor(null);
                        setMeasureMode((prev) => !prev);
                        setPendingPoint(null);
                    }}
                    onToggleAnnotate={() => {
                        setCalibrationMode(false);
                        setCalibPoints([]);
                        setMeasureMode(false);
                        setPendingPoint(null);
                        setDraftAnchor(null);
                        setAnnotationMode((prev) => !prev);
                    }}
                    onCopyShareLink={handleCopyShareLink}
                    onDownloadOriginal={handleDownloadOriginal}
                    onExportMesh={handleExportMesh}
                    onScreenshot={handleScreenshot}
                    onRecordTurntable={handleRecordTurntable}
                    onToggleParadata={() => setParadataOpenFor((prev) => prev === modelUrl ? null : modelUrl)}
                    onToggleInspect={() => setInspectOpen((prev) => !prev)}
                    onToggleFullscreen={toggleFullscreen}
                />

                {annotationMode && enableAnnotationCreate && !draftAnchor && (
                    <div
                        role="status"
                        className="pointer-events-auto mx-auto flex items-center gap-3 bg-white/95 border-amber-500/40 text-slate-800 dark:bg-slate-900/95 dark:border-amber-500/40 dark:text-slate-200 backdrop-blur-md border rounded-full px-4 py-1.5 shadow-2xl text-xs"
                    >
                        <span className="font-medium text-amber-600 dark:text-amber-300">
                            Click any point on the 3D surface to drop an annotation pin
                        </span>
                        <button
                            type="button"
                            onClick={() => setAnnotationMode(false)}
                            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white underline font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                )}

                <ToolBanners
                    calibrationMode={calibrationMode && enableCalibrate}
                    calibPoints={calibPoints}
                    calibInputMm={calibInputMm}
                    setCalibInputMm={setCalibInputMm}
                    onApplyCalibration={handleApplyCalibration}
                    onCancelCalibration={() => {
                        setCalibrationMode(false);
                        setCalibPoints([]);
                    }}
                    measureMode={measureMode && enableMeasure}
                    pendingPoint={pendingPoint}
                    isUnscaled={isUnscaled}
                    enableCalibrate={enableCalibrate}
                    measureUnit={measureUnit}
                    setMeasureUnit={setMeasureUnit}
                    onSwitchToCalibrate={() => {
                        setMeasureMode(false);
                        setPendingPoint(null);
                        if (enableCalibrate) setCalibrationMode(true);
                    }}
                    measurementsCount={measurements.length}
                    onClearMeasurements={clearMeasurements}
                    clipEnabled={false}
                    clipAxis={clipAxis}
                    setClipAxis={setClipAxis}
                    clipPercent={clipPercent}
                    setClipPercent={setClipPercent}
                />

                {toastMessage && (
                    <div
                        role="status"
                        aria-live="polite"
                        className="mx-auto px-4 py-1.5 rounded-full bg-white/95 border-amber-500/50 text-amber-700 dark:bg-slate-800/95 dark:border-amber-500/40 dark:text-amber-300 border text-xs font-medium shadow-2xl"
                    >
                        {toastMessage}
                    </div>
                )}
            </div>

            {/* Portable Spatial Annotations Overlay (Pins, Detail Card, Editor & Guided Tour Bar) */}
            {showAnnotations && (
                <div style={{ zIndex: 40 }} className="pointer-events-none absolute inset-0 overflow-hidden">
                    <AnnotationOverlay
                        annotations={resolvedAnnotations}
                        projectedPins={projectedPins}
                        selectedId={activeAnnotationId}
                        onSelect={handleSelectAnnotation}
                        draftAnchor={draftAnchor}
                        onCancelDraft={() => setDraftAnchor(null)}
                        onSaveDraft={handleSaveDraftAnnotation}
                        canCreate={enableAnnotationCreate}
                        canEdit={enableAnnotationEdit}
                        canDelete={enableAnnotationDelete}
                        onUpdate={handleUpdateAnnotation}
                        onDelete={handleDeleteAnnotation}
                        renderAnnotationBody={renderAnnotationBody}
                        showTourBar={showAnnotationTour}
                    />
                </div>
            )}

            {/* Bottom HUD Stack (Gizmo + Scale Bar + Slice Bar, Animation Timeline, Main Toolbar) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 px-3 sm:px-4 flex flex-col gap-2">
                {/* Row 1: Orientation Gizmo, Physical Scale Bar & Cross-Section Slice Slider */}
                <div className="flex flex-wrap items-end justify-between gap-2 px-1">
                    <div className="flex items-end gap-3">
                        <div aria-hidden="true" className="flex flex-col items-center shrink-0">
                            <canvas ref={gizmoCanvasRef} width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 opacity-85" />
                            <span className="text-[9px] font-mono tracking-widest text-slate-600 dark:text-slate-500 -mt-1">X Y Z</span>
                        </div>
                        {showScaleBar && (
                            <ScaleBarOverlay
                                pixelsPerMm={pixelsPerMm}
                                isUnscaled={isUnscaled}
                                measureUnit={measureUnit}
                                allowReferenceToggle={showReferenceObjects}
                            />
                        )}
                    </div>

                    <ToolBanners
                        calibrationMode={false}
                        calibPoints={[]}
                        calibInputMm=""
                        setCalibInputMm={setCalibInputMm}
                        onApplyCalibration={handleApplyCalibration}
                        onCancelCalibration={() => {}}
                        measureMode={false}
                        pendingPoint={null}
                        isUnscaled={isUnscaled}
                        measureUnit={measureUnit}
                        setMeasureUnit={setMeasureUnit}
                        onSwitchToCalibrate={() => {}}
                        measurementsCount={0}
                        onClearMeasurements={clearMeasurements}
                        clipEnabled={clipEnabled}
                        clipAxis={clipAxis}
                        setClipAxis={setClipAxis}
                        clipPercent={clipPercent}
                        setClipPercent={setClipPercent}
                    />
                </div>

                {/* Row 2: Animation Timeline (only shown when enabled and glTF has animations) */}
                {showAnimationTimeline && (
                    <AnimationTimeline
                        animations={animations}
                        activeClipIndex={activeClipIndex}
                        onSelectClip={(idx) => playClip(idx, true)}
                        isPlaying={animPlaying}
                        onTogglePlay={handleToggleAnimPlay}
                        currentTime={animTime}
                        duration={animDuration}
                        onScrub={handleScrubAnim}
                        playbackSpeed={animSpeed}
                        onChangeSpeed={setAnimSpeed}
                    />
                )}

                {/* Row 3: Main Bottom Toolbar */}
                {showBottomToolbar && (
                    <BottomToolbar
                        shadingMode={shadingMode}
                        setShadingMode={setShadingMode}
                        wireframe={wireframe}
                        setWireframe={setWireframe}
                        clipEnabled={clipEnabled}
                        setClipEnabled={setClipEnabled}
                        showGrid={showGrid}
                        setShowGrid={setShowGrid}
                        showBBox={showBBox}
                        setShowBBox={setShowBBox}
                        autoRotate={autoRotate}
                        setAutoRotate={setAutoRotate}
                        projectionMode={projectionMode}
                        switchProjection={switchProjection}
                        setCameraView={setCameraView}
                        lightAngle={lightAngle}
                        setLightAngle={setLightAngle}
                        exposure={exposure}
                        setExposure={setExposure}
                        envIntensity={envIntensity}
                        setEnvIntensity={setEnvIntensity}
                        bgColor={bgColor}
                        setBgColor={setBgColor}
                    />
                )}
            </div>

            {showTelemetry && (
                <TelemetryDrawer
                    isOpen={inspectOpen}
                    onClose={() => setInspectOpen(false)}
                    formattedDims={formattedDims}
                    isUnscaled={isUnscaled}
                    scaleSource={scaleSource}
                    stats={stats}
                    fileName={fileName}
                    fileSize={fileSize}
                    measurements={measurements}
                    onClearMeasurements={clearMeasurements}
                    formatDistanceFn={formatDistWithState}
                />
            )}

            {/* Custom App-Specific HUD Overlays */}
            {children}
            {showParadata && paradata && (
                <ParadataDrawer isOpen={paradataOpen} onClose={() => setParadataOpenFor(null)} paradata={paradata} />
            )}
        </div>
    );
}