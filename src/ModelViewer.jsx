// src/ModelViewer.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';

const DEFAULT_SANITY_RANGE_MM = [0.5, 5000];

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
    enableDeepLink = true,
    onLoad = null,
    onError = null,
    onCalibrate = null,
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

    // Keep latest callback & scale props in refs so the WebGL scene effect never re-triggers
    const configRef = useRef({
        knownMaxDimensionMm,
        defaultUnitScale,
        sanityRangeMm,
        enableDeepLink,
        onLoad,
        onError,
    });
    configRef.current = {
        knownMaxDimensionMm,
        defaultUnitScale,
        sanityRangeMm,
        enableDeepLink,
        onLoad,
        onError,
    };

    // Shading, Camera & Environment States
    const [shadingMode, setShadingMode] = useState('pbr'); // 'pbr' | 'relief' | 'sculpt' | 'normals' | 'vertex'
    const [projectionMode, setProjectionMode] = useState('perspective'); // 'perspective' | 'orthographic'
    const [wireframe, setWireframe] = useState(false);
    const [autoRotate, setAutoRotate] = useState(false);
    const [exposure, setExposure] = useState(1.1);
    const [lightAngle, setLightAngle] = useState(45);
    const [bgColor, setBgColor] = useState(initialBackground);
    const [showGrid, setShowGrid] = useState(false);
    const [showBBox, setShowBBox] = useState(false);

    // Cross-Section Clipping Slicer States
    const [clipEnabled, setClipEnabled] = useState(false);
    const [clipAxis, setClipAxis] = useState('x'); // 'x' | 'y' | 'z'
    const [clipPercent, setClipPercent] = useState(100);

    // UI Panels, Toasts & Recording
    const [inspectOpen, setInspectOpen] = useState(false);
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

    // Measurement Tool States
    const [measureMode, setMeasureMode] = useState(false);
    const [measureUnit, setMeasureUnit] = useState('mm'); // 'mm' | 'cm' | 'in'
    const [measurements, setMeasurements] = useState([]);
    const [pendingPoint, setPendingPoint] = useState(null);
    const pointerDownPos = useRef({ x: 0, y: 0 });
    const measurementsRef = useRef([]);
    measurementsRef.current = measurements;

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

    const showToast = useCallback((msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage((prev) => (prev === msg ? null : prev)), 2800);
    }, []);

    // Shared reusable materials (including lightweight GLSL Surface Relief / Curvature shader)
    const sharedMaterialsRef = useRef(null);
    if (!sharedMaterialsRef.current && typeof document !== 'undefined') {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(48, 40, 4, 64, 64, 64);
        grad.addColorStop(0, '#f2b5a0');
        grad.addColorStop(0.5, '#b55d45');
        grad.addColorStop(1, '#2e0d08');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
        const matcapTex = new THREE.CanvasTexture(canvas);

        const reliefMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.6).normalize() },
            },
            vertexShader: `
                varying vec3 vNormalView;
                varying vec3 vViewPos;
                void main() {
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    vViewPos = -mvPos.xyz;
                    vNormalView = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,
            fragmentShader: `
                uniform vec3 uLightDir;
                varying vec3 vNormalView;
                varying vec3 vViewPos;
                void main() {
                    vec3 n = normalize(vNormalView);
                    vec3 dx = dFdx(n);
                    vec3 dy = dFdy(n);
                    float curvature = clamp((dx.x + dy.y) * 4.5, -0.45, 0.45);
                    float diffuse = max(dot(n, normalize(uLightDir)), 0.0);
                    float rim = 1.0 - max(dot(n, normalize(vViewPos)), 0.0);
                    float shade = 0.28 + diffuse * 0.58 + curvature + pow(rim, 3.0) * 0.15;
                    vec3 baseTint = vec3(0.84, 0.81, 0.76);
                    gl_FragColor = vec4(baseTint * clamp(shade, 0.05, 1.25), 1.0);
                }
            `,
            side: THREE.DoubleSide,
        });

        sharedMaterialsRef.current = {
            normals: new THREE.MeshNormalMaterial(),
            sculpt: new THREE.MeshMatcapMaterial({ matcap: matcapTex }),
            relief: reliefMaterial,
            vertexColored: new THREE.MeshBasicMaterial({ vertexColors: true }),
            vertexPlain: new THREE.MeshBasicMaterial({ color: 0xcccccc }),
            matcapTex,
        };
    }

    // Format raw mesh distances using active scale factor & unit preference
    const formatDistance = useCallback(
        (rawDistance, compact = false) => {
            if (isUnscaled || !customScaleFactor) {
                return compact ? `${rawDistance.toFixed(2)} u` : `${rawDistance.toFixed(3)} units (unscaled)`;
            }
            const mm = rawDistance * customScaleFactor;
            if (measureUnit === 'cm') return `${(mm / 10).toFixed(2)} cm`;
            if (measureUnit === 'in') return `${(mm / 25.4).toFixed(2)} in`;
            return `${mm.toFixed(1)} mm`;
        },
        [isUnscaled, customScaleFactor, measureUnit]
    );

    // Toggle Fullscreen Handler
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

    // Switch between Perspective and Orthographic Cameras cleanly
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
            const newDist = halfHeight / Math.tan(THREE.MathUtils.degToRad(persp.fov * 0.5));
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

    // Camera Framing & Preset Views (Tighter framing & slight upward visual offset above toolbar)
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
        const dist = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.18;

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

        cameraTweenRef.current = {
            targetPos: pos,
            targetLook: framedCenter,
            alpha: 0,
        };

        if (orthoCameraRef.current && container) {
            const aspect = (container.clientWidth || 800) / (container.clientHeight || 600);
            const halfH = maxDim * 0.65;
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
        const encoded = btoa(JSON.stringify(payload));
        const url = `${window.location.origin}${window.location.pathname}${window.location.search}#view=${encoded}`;
        window.history.replaceState(null, '', `#view=${encoded}`);
        navigator.clipboard?.writeText(url).then(() => showToast('View link copied to clipboard'));
    }, [projectionMode, shadingMode, customScaleFactor, showToast]);

    // Export & Download Helpers
    const triggerBlobDownload = (blob, filename) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

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
                    const exporter = new OBJExporter();
                    const result = exporter.parse(modelGroupRef.current);
                    triggerBlobDownload(new Blob([result], { type: 'text/plain' }), `${baseName}.obj`);
                } else if (format === 'stl') {
                    const exporter = new STLExporter();
                    const result = exporter.parse(modelGroupRef.current, { binary: true });
                    triggerBlobDownload(
                        new Blob([result], { type: 'application/octet-stream' }),
                        `${baseName}.stl`
                    );
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

    // 360 Turntable Video Recorder (.webm)
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

    // Dispose all geometries/materials in a THREE.Group
    const clearThreeGroup = useCallback((group) => {
        while (group.children.length > 0) {
            const obj = group.children[0];
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
                else obj.material.dispose();
            }
            group.remove(obj);
        }
    }, []);

    // Deep dispose loaded GLTF scene resources
    const disposeObjectTree = useCallback((root) => {
        root.traverse((obj) => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
                mats.forEach((mat) => {
                    Object.values(mat).forEach((val) => {
                        if (val && val.isTexture) val.dispose();
                    });
                    mat.dispose();
                });
            }
        });
    }, []);

    const clearMeasurements = useCallback(() => {
        setMeasurements([]);
        setPendingPoint(null);
        clearThreeGroup(measureGroupRef.current);
    }, [clearThreeGroup]);

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
            const lineGeo = new THREE.BufferGeometry().setFromPoints([m.p1, m.p2]);
            const line = new THREE.Line(lineGeo, lineMat);
            line.renderOrder = 998;
            group.add(line);
        });

        if (pendingPoint) {
            addDot(pendingPoint);
        }

        return () => {
            sphereGeo.dispose();
            sphereMat.dispose();
            lineMat.dispose();
        };
    }, [measurements, pendingPoint, clearThreeGroup]);

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
            const lineGeo = new THREE.BufferGeometry().setFromPoints(calibPoints);
            const line = new THREE.Line(lineGeo, lineMat);
            line.renderOrder = 999;
            group.add(line);
        }

        return () => {
            sphereGeo.dispose();
            sphereMat.dispose();
            lineMat.dispose();
        };
    }, [calibPoints, clearThreeGroup]);

    // Raycast Click Handler (Measurements & Calibration)
    const handleCanvasPointerDown = (e) => {
        if (!e.isPrimary) return;
        pointerDownPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleCanvasPointerUp = (e) => {
        if (!e.isPrimary) return;
        if ((!measureMode && !calibrationMode) || !mountRef.current || !activeCameraRef.current) return;

        const dx = e.clientX - pointerDownPos.current.x;
        const dy = e.clientY - pointerDownPos.current.y;
        if (Math.hypot(dx, dy) > 5) return;

        const rect = mountRef.current.getBoundingClientRect();
        const mouse = new THREE.Vector2(
            ((e.clientX - rect.left) / rect.width) * 2 - 1,
            -((e.clientY - rect.top) / rect.height) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, activeCameraRef.current);

        const meshes = [];
        modelGroupRef.current.traverse((c) => {
            if (c.isMesh) meshes.push(c);
        });

        const hits = raycaster.intersectObjects(meshes, false);
        if (hits.length === 0) return;

        const hitPoint = hits[0].point.clone();

        if (calibrationMode) {
            if (calibPoints.length === 0) setCalibPoints([hitPoint]);
            else if (calibPoints.length === 1) setCalibPoints([calibPoints[0], hitPoint]);
            else setCalibPoints([hitPoint]);
            return;
        }

        if (measureMode) {
            if (!pendingPoint) {
                setPendingPoint(hitPoint);
            } else {
                const rawDistance = pendingPoint.distanceTo(hitPoint);
                setMeasurements((prev) => [
                    ...prev,
                    {
                        id: Date.now(),
                        p1: pendingPoint,
                        p2: hitPoint,
                        rawDistance,
                        screenX: 0,
                        screenY: 0,
                        visible: true,
                    },
                ]);
                setPendingPoint(null);
            }
        }
    };

    // Apply Manual Calibration
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
            if (typeof onCalibrate === 'function') {
                onCalibrate({ scaleFactor: newScale, targetMm });
            }
        }
    };

    // Keyboard Shortcuts (Tools + Camera Orbit/Pan/Zoom)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            switch (e.key.toLowerCase()) {
                case 'arrowleft':
                    e.preventDefault();
                    if (e.shiftKey) nudgeCamera('pan', { x: -1, y: 0 });
                    else nudgeCamera('rotateLeft');
                    break;
                case 'arrowright':
                    e.preventDefault();
                    if (e.shiftKey) nudgeCamera('pan', { x: 1, y: 0 });
                    else nudgeCamera('rotateRight');
                    break;
                case 'arrowup':
                    e.preventDefault();
                    if (e.shiftKey) nudgeCamera('pan', { x: 0, y: 1 });
                    else nudgeCamera('rotateUp');
                    break;
                case 'arrowdown':
                    e.preventDefault();
                    if (e.shiftKey) nudgeCamera('pan', { x: 0, y: -1 });
                    else nudgeCamera('rotateDown');
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
        measureMode,
        calibPoints,
        calibrationMode,
        projectionMode,
        switchProjection,
        setCameraView,
        nudgeCamera,
    ]);

    // Three.js Scene Setup & Model Loader (Single Context Lifecycle)
    useEffect(() => {
        const container = mountRef.current;
        const rootWrapper = wrapperRef.current || container;
        if (!container || !rootWrapper) return;

        container.innerHTML = '';

        const width = rootWrapper.clientWidth || 800;
        const height = rootWrapper.clientHeight || 600;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#090d16');
        sceneRef.current = scene;

        const perspCamera = new THREE.PerspectiveCamera(45, width / height, 0.001, 1000);
        perspCamera.position.set(0, 0.5, 3);
        perspCameraRef.current = perspCamera;

        const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, 1000);
        orthoCameraRef.current = orthoCamera;
        activeCameraRef.current = perspCamera;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height, false);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
        renderer.shadowMap.enabled = false;
        renderer.localClippingEnabled = false;
        rendererRef.current = renderer;
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(perspCamera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.autoRotateSpeed = 1.8;
        controlsRef.current = controls;

        // Studio Lighting Rig
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        scene.add(ambientLight);

        const lightRig = new THREE.Group();
        const keyLight = new THREE.DirectionalLight(0xfffaed, 2.2);
        keyLight.position.set(5, 8, 6);
        lightRig.add(keyLight);

        const rimLight = new THREE.DirectionalLight(0x8ec5fc, 1.3);
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
            gizmoRenderer = new THREE.WebGLRenderer({
                canvas: gizmoCanvasRef.current,
                alpha: true,
                antialias: true,
            });
            gizmoRenderer.setSize(64, 64);
            gizmoRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        }

        let isCancelled = false;
        setLoading(true);
        setError(null);
        clearMeasurements();
        setCalibPoints([]);
        setCalibrationMode(false);

        const loader = new GLTFLoader();
        loader.load(
            modelUrl,
            (gltf) => {
                if (isCancelled) {
                    disposeObjectTree(gltf.scene);
                    return;
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

                        if (child.material) {
                            child.material.clippingPlanes = [clipPlaneRef.current];
                            child.material.clipShadows = false;
                            child.material.side = THREE.DoubleSide;
                        }
                        originalMaterials.current.set(child.uuid, child.material);
                    }
                });

                modelGroupRef.current.add(gltf.scene);

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

                // 3-Tier Scale Resolution
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

                if (gridHelperRef.current) {
                    gridHelperRef.current.geometry.dispose();
                    gridHelperRef.current.material.dispose();
                    scene.remove(gridHelperRef.current);
                }
                if (boxHelperRef.current) {
                    boxHelperRef.current.geometry.dispose();
                    boxHelperRef.current.material.dispose();
                    scene.remove(boxHelperRef.current);
                }
                if (clipHelperRef.current) {
                    clipHelperRef.current.geometry.dispose();
                    clipHelperRef.current.material.dispose();
                    scene.remove(clipHelperRef.current);
                }

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
                            const decoded = JSON.parse(atob(hashMatch[1]));
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
                                if (decoded.proj === 'orthographic') {
                                    switchProjection('orthographic');
                                }
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
                if (!isCancelled && xhr.total > 0) {
                    setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
                }
            },
            (err) => {
                if (isCancelled) return;
                console.error('Error loading 3D asset:', err);
                const errMsg = 'Failed to fetch or parse GLB binary. Check file path or CORS headers.';
                setError(errMsg);
                setLoading(false);
                if (typeof configRef.current.onError === 'function') {
                    configRef.current.onError(err);
                }
            }
        );

        let animationFrameId;
        const tempMid = new THREE.Vector3();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const activeCam = activeCameraRef.current || perspCamera;

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

            disposeObjectTree(modelGroupRef.current);
            modelGroupRef.current.clear();
            originalMaterials.current.clear();

            clearThreeGroup(measureGroupRef.current);
            clearThreeGroup(calibGroupRef.current);

            if (gridHelperRef.current) {
                gridHelperRef.current.geometry.dispose();
                gridHelperRef.current.material.dispose();
            }
            if (boxHelperRef.current) {
                boxHelperRef.current.geometry.dispose();
                boxHelperRef.current.material.dispose();
            }
            if (clipHelperRef.current) {
                clipHelperRef.current.geometry.dispose();
                clipHelperRef.current.material.dispose();
            }
            if (gizmoRenderer) {
                gizmoRenderer.dispose();
            }

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
            renderer.forceContextLoss();
        };
    }, [modelUrl, setCameraView, switchProjection, clearMeasurements, clearThreeGroup, disposeObjectTree]);

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
        const t = clipPercent / 100;
        const sliceCoord = minVal + (maxVal - minVal) * t;

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

            if (shadingMode === 'pbr') {
                if (origMat) {
                    origMat.wireframe = wireframe;
                    origMat.clippingPlanes = planes;
                    child.material = origMat;
                }
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
        if (lightRigRef.current) {
            lightRigRef.current.rotation.y = THREE.MathUtils.degToRad(lightAngle);
        }
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

    const formattedDims = `${formatDistance(stats.rawSize.x, true)} × ${formatDistance(
        stats.rawSize.y,
        true
    )} × ${formatDistance(stats.rawSize.z, true)}`;

    return (
        <div
            ref={wrapperRef}
            className="gmv-root relative w-full h-full font-sans select-none overflow-hidden bg-slate-950"
        >
            {/* 3D Canvas */}
            <div
                ref={mountRef}
                onPointerDown={handleCanvasPointerDown}
                onPointerUp={handleCanvasPointerUp}
                className={`w-full h-full ${
                    measureMode || calibrationMode ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'
                }`}
            />

            {/* Bottom-Left Orientation Axis Gizmo */}
            <div className="pointer-events-none absolute bottom-16 left-4 z-10 flex flex-col items-center">
                <canvas ref={gizmoCanvasRef} width={64} height={64} className="w-16 h-16 opacity-85" />
                <span className="text-[9px] font-mono tracking-widest text-slate-500 -mt-1">X Y Z</span>
            </div>

            {/* Notification Toast */}
            {toastMessage && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-slate-800/95 border border-amber-500/40 text-amber-300 text-xs font-medium shadow-2xl">
                    {toastMessage}
                </div>
            )}

            {/* Loading Overlay */}
            {loading && (
                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm">
                    <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                        <div
                            className="h-full bg-amber-500 transition-all duration-200"
                            style={{ width: `${loadProgress || 25}%` }}
                        />
                    </div>
                    <p className="text-xs font-mono text-slate-300">
                        Loading 3D Geometry... {loadProgress > 0 ? `${loadProgress}%` : ''}
                    </p>
                </div>
            )}

            {/* Error Overlay */}
            {error && (
                <div className="absolute inset-0 z-40 flex items-center justify-center bg-slate-950/95 p-6">
                    <div className="max-w-md bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-center">
                        <p className="text-sm font-semibold text-red-300 mb-1">3D Asset Load Error</p>
                        <p className="text-xs text-red-200/80">{error}</p>
                    </div>
                </div>
            )}

            {/* Projected 2D Measurement Badges */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
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
                                #{idx + 1}: {formatDistance(m.rawDistance, true)}
                            </div>
                        )
                )}
            </div>

            {/* Active Calibration Banner */}
            {calibrationMode && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-slate-900/95 border border-emerald-500/50 text-slate-100 px-4 py-2 rounded-full shadow-2xl text-xs">
                    {calibPoints.length < 2 ? (
                        <span className="text-emerald-300 font-medium">
                            {calibPoints.length === 0
                                ? 'Step 1/2: Click first reference point on scale bar or known feature'
                                : 'Step 2/2: Click second reference point to define known distance'}
                        </span>
                    ) : (
                        <form onSubmit={handleApplyCalibration} className="flex items-center gap-2">
                            <span className="text-slate-300">Known length (mm):</span>
                            <input
                                type="number"
                                step="0.01"
                                min="0.01"
                                autoFocus
                                placeholder="e.g. 25.0"
                                value={calibInputMm}
                                onChange={(e) => setCalibInputMm(e.target.value)}
                                className="w-24 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-emerald-300 font-mono focus:outline-none focus:border-emerald-500"
                            />
                            <button
                                type="submit"
                                className="px-2.5 py-1 rounded bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400"
                            >
                                Apply Scale
                            </button>
                        </form>
                    )}
                    <button
                        onClick={() => {
                            setCalibrationMode(false);
                            setCalibPoints([]);
                        }}
                        className="text-slate-400 hover:text-slate-200 ml-1"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Active Measurement Banner */}
            {measureMode && !calibrationMode && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-amber-500/95 text-slate-950 px-4 py-1.5 rounded-full shadow-xl text-xs font-medium">
                    <span>
                        {pendingPoint
                            ? 'Click second point on surface to complete measurement'
                            : 'Click any surface point to start measuring'}
                    </span>
                    {!isUnscaled && (
                        <div className="flex items-center gap-1 bg-slate-950/20 rounded-full px-1.5 py-0.5">
                            {['mm', 'cm', 'in'].map((u) => (
                                <button
                                    key={u}
                                    onClick={() => setMeasureUnit(u)}
                                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase transition ${
                                        measureUnit === u
                                            ? 'bg-slate-950 text-amber-400'
                                            : 'text-slate-900 hover:bg-slate-950/10'
                                    }`}
                                >
                                    {u}
                                </button>
                            ))}
                        </div>
                    )}
                    {isUnscaled && (
                        <button
                            onClick={() => {
                                setMeasureMode(false);
                                setPendingPoint(null);
                                setCalibrationMode(true);
                            }}
                            className="px-2 py-0.5 rounded-full bg-slate-950 text-emerald-400 text-[10px] font-mono uppercase hover:bg-slate-900"
                        >
                            Calibrate Scale
                        </button>
                    )}
                    {measurements.length > 0 && (
                        <button
                            onClick={clearMeasurements}
                            className="underline font-semibold hover:text-slate-800 ml-1"
                        >
                            Clear ({measurements.length})
                        </button>
                    )}
                </div>
            )}

            {/* Cross-Section Clipping Plane Slider Bar */}
            {clipEnabled && (
                <div className="absolute bottom-16 right-4 z-20 flex items-center gap-2.5 bg-slate-900/95 backdrop-blur-xl border border-sky-500/40 rounded-xl px-3.5 py-2 shadow-2xl text-xs">
                    <span className="font-mono text-[11px] uppercase text-sky-400">Slice</span>
                    <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
                        {['x', 'y', 'z'].map((ax) => (
                            <button
                                key={ax}
                                onClick={() => setClipAxis(ax)}
                                className={`px-2 py-0.5 rounded uppercase font-mono text-[10px] ${
                                    clipAxis === ax
                                        ? 'bg-sky-500 text-slate-950 font-bold'
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                {ax}
                            </button>
                        ))}
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={clipPercent}
                        onChange={(e) => setClipPercent(parseInt(e.target.value, 10))}
                        className="w-24 accent-sky-400 cursor-pointer h-1 bg-slate-800 rounded"
                    />
                    <span className="font-mono text-[11px] text-slate-300 w-8">{clipPercent}%</span>
                </div>
            )}

            {/* Top Left Bar: Back Link, Model Title & Scale Status */}
            <header className="absolute top-4 left-4 z-20 flex items-center gap-3 bg-slate-900/85 backdrop-blur-md border border-slate-800/80 rounded-xl px-4 py-2.5 shadow-2xl">
                {backUrl && (
                    <a
                        href={backUrl}
                        title="Back"
                        className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </a>
                )}
                <div>
                    <h1 className="text-sm font-semibold tracking-wide text-slate-100 flex items-center gap-2 flex-wrap">
                        <span>{title}</span>
                        {badge && (
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                {badge}
                            </span>
                        )}
                        {isUnscaled ? (
                            <button
                                onClick={() => {
                                    setMeasureMode(false);
                                    setCalibrationMode(true);
                                    setCalibPoints([]);
                                }}
                                title="Mesh has no physical scale. Click to calibrate using a known dimension."
                                className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25 transition"
                            >
                                Unscaled &bull; Calibrate
                            </button>
                        ) : (
                            <span
                                title={`Scale source: ${scaleSource}`}
                                className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            >
                                Scaled ({scaleSource})
                            </span>
                        )}
                    </h1>
                    {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
                </div>
            </header>

            {/* Top Right Actions: Calibrate, Measure, Share, Export, Telemetry, Fullscreen */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 flex-wrap justify-end">
                <button
                    onClick={() => {
                        setMeasureMode(false);
                        setPendingPoint(null);
                        setCalibrationMode(!calibrationMode);
                        setCalibPoints([]);
                    }}
                    title="2-Point Scale Calibration (Shortcut: C)"
                    className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                        calibrationMode
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/20'
                            : 'bg-slate-900/85 text-slate-200 border-slate-800/80 hover:bg-slate-800'
                    }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span className="hidden md:inline">Calibrate</span>
                </button>

                <button
                    onClick={() => {
                        setCalibrationMode(false);
                        setCalibPoints([]);
                        setMeasureMode(!measureMode);
                        setPendingPoint(null);
                    }}
                    title="Toggle Point-to-Point Measurement (Shortcut: M)"
                    className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                        measureMode
                            ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                            : 'bg-slate-900/85 text-slate-200 border-slate-800/80 hover:bg-slate-800'
                    }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="hidden sm:inline">Measure</span>
                </button>

                {enableDeepLink && (
                    <button
                        onClick={handleCopyShareLink}
                        title="Copy direct link to current camera angle, shading & calibration"
                        className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border border-slate-800/80 bg-slate-900/85 text-slate-200 hover:bg-slate-800 backdrop-blur-md transition-all shadow-xl"
                    >
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </button>
                )}

                {/* Export & Download Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
                        disabled={loading || Boolean(error) || exporting || recordingVideo}
                        className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border border-slate-800/80 bg-slate-900/85 text-slate-200 hover:bg-slate-800 disabled:opacity-50 backdrop-blur-md transition-all shadow-xl"
                    >
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{recordingVideo ? 'Recording 360°...' : exporting ? 'Exporting...' : 'Export'}</span>
                    </button>

                    {downloadMenuOpen && (
                        <div className="absolute right-0 mt-2 w-60 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-xs">
                            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                                3D Geometry Formats
                            </div>
                            <button
                                onClick={handleDownloadOriginal}
                                className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between"
                            >
                                <span>Original GLB (Textures)</span>
                                <span className="text-[10px] font-mono text-amber-400">.GLB</span>
                            </button>
                            <button
                                onClick={() => handleExportMesh('obj')}
                                className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between"
                            >
                                <span>Wavefront Mesh</span>
                                <span className="text-[10px] font-mono text-slate-400">.OBJ</span>
                            </button>
                            <button
                                onClick={() => handleExportMesh('stl')}
                                className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between"
                            >
                                <span>3D Print Ready</span>
                                <span className="text-[10px] font-mono text-slate-400">.STL</span>
                            </button>
                            <div className="my-1 border-t border-slate-800" />
                            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                                Media & Publication
                            </div>
                            <button
                                onClick={handleScreenshot}
                                className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between"
                            >
                                <span>Viewport Snapshot</span>
                                <span className="text-[10px] font-mono text-emerald-400">.PNG</span>
                            </button>
                            <button
                                onClick={handleRecordTurntable}
                                className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between"
                            >
                                <span>360° Turntable Clip (5s)</span>
                                <span className="text-[10px] font-mono text-sky-400">.WEBM</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Telemetry Drawer Toggle */}
                <button
                    onClick={() => setInspectOpen(!inspectOpen)}
                    className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                        inspectOpen
                            ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                            : 'bg-slate-900/85 text-slate-200 border-slate-800/80 hover:bg-slate-800'
                    }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="hidden sm:inline">Telemetry</span>
                </button>

                {/* Fullscreen Toggle */}
                <button
                    onClick={toggleFullscreen}
                    className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border border-slate-800/80 bg-slate-900/85 text-slate-200 hover:bg-slate-800 backdrop-blur-md transition-all shadow-xl"
                    title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                >
                    {isFullscreen ? (
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9L4 4m0 0l5 0m-5 0l0 5m6 6l5 5m0 0l-5 0m5 0l0-5M15 9l5-5m0 0l-5 0m5 0l0 5m-6 6l-5 5m0 0l5 0m-5 0l0-5" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Bottom Toolbar */}
            <nav className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 max-w-6xl w-[96%] bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-xl p-1.5 shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/60">
                    {[
                        { id: 'pbr', label: 'PBR' },
                        { id: 'relief', label: 'Relief' },
                        { id: 'sculpt', label: 'Clay' },
                        { id: 'normals', label: 'Normals' },
                        { id: 'vertex', label: 'Vertex' },
                    ].map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setShadingMode(mode.id)}
                            className={`px-2 py-1 rounded-lg font-medium transition ${
                                shadingMode === mode.id
                                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            {mode.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setWireframe(!wireframe)}
                        className={`px-2 py-1.5 rounded-lg font-medium border transition ${
                            wireframe
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                    >
                        Wire
                    </button>

                    <button
                        onClick={() => setClipEnabled(!clipEnabled)}
                        title="Toggle Cross-Section Slicer"
                        className={`px-2 py-1.5 rounded-lg font-medium border transition ${
                            clipEnabled
                                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                    >
                        Slice
                    </button>

                    <button
                        onClick={() => setShowGrid(!showGrid)}
                        title="Toggle Scale Grid (G)"
                        className={`px-2 py-1.5 rounded-lg font-medium border transition ${
                            showGrid
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                    >
                        Grid
                    </button>

                    <button
                        onClick={() => setShowBBox(!showBBox)}
                        className={`px-2 py-1.5 rounded-lg font-medium border transition ${
                            showBBox
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                    >
                        Bounds
                    </button>

                    <button
                        onClick={() => setAutoRotate(!autoRotate)}
                        title="Toggle Auto-Rotate (R)"
                        className={`px-2 py-1.5 rounded-lg font-medium border transition ${
                            autoRotate
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                    >
                        Rotate
                    </button>
                </div>

                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/60">
                    <button
                        onClick={() =>
                            switchProjection(projectionMode === 'perspective' ? 'orthographic' : 'perspective')
                        }
                        title="Toggle Perspective / Orthographic Projection (P)"
                        className={`px-2 py-1 rounded-lg font-mono text-[11px] uppercase transition ${
                            projectionMode === 'orthographic'
                                ? 'bg-sky-500 text-slate-950 font-bold'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                    >
                        {projectionMode === 'orthographic' ? 'Ortho' : 'Persp'}
                    </button>
                    <div className="w-px h-4 bg-slate-800 mx-0.5" />
                    {[
                        { id: 'iso', label: 'Iso' },
                        { id: 'front', label: 'Front' },
                        { id: 'top', label: 'Top' },
                        { id: 'side', label: 'Side' },
                    ].map((view) => (
                        <button
                            key={view.id}
                            onClick={() => setCameraView(view.id)}
                            className="px-2 py-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition"
                        >
                            {view.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2.5 bg-slate-950/60 px-2.5 py-1.5 rounded-xl border border-slate-800/60">
                    <div className="flex items-center gap-1" title="Raking Light Angle">
                        <span className="text-[10px] text-slate-400 font-mono">Light</span>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            step="5"
                            value={lightAngle}
                            onChange={(e) => setLightAngle(parseFloat(e.target.value))}
                            className="w-12 accent-amber-500 cursor-pointer h-1 bg-slate-800 rounded"
                        />
                    </div>

                    <div className="flex items-center gap-1" title="Exposure">
                        <span className="text-[10px] text-slate-400 font-mono">Exp</span>
                        <input
                            type="range"
                            min="0.2"
                            max="3.0"
                            step="0.1"
                            value={exposure}
                            onChange={(e) => setExposure(parseFloat(e.target.value))}
                            className="w-12 accent-amber-500 cursor-pointer h-1 bg-slate-800 rounded"
                        />
                    </div>

                    <div className="flex items-center gap-1">
                        {['#090d16', '#18181b', '#334155', '#e2e8f0'].map((color) => (
                            <button
                                key={color}
                                onClick={() => setBgColor(color)}
                                style={{ backgroundColor: color }}
                                className={`w-3.5 h-3.5 rounded-full border transition ${
                                    bgColor === color ? 'border-amber-400 scale-110' : 'border-slate-600 hover:scale-105'
                                }`}
                            />
                        ))}
                        <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="w-4 h-4 rounded cursor-pointer bg-transparent border-0"
                            title="Custom background color"
                        />
                    </div>
                </div>
            </nav>

            {/* Telemetry & Measurements Drawer */}
            {inspectOpen && (
                <aside className="absolute top-16 right-4 z-30 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-4 shadow-2xl text-slate-300 space-y-4">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
                            Mesh Telemetry
                        </h2>
                        <button
                            onClick={() => setInspectOpen(false)}
                            className="text-slate-500 hover:text-slate-300 text-sm"
                        >
                            ✕
                        </button>
                    </div>

                    <dl className="space-y-2 text-xs">
                        <div className="flex justify-between">
                            <dt className="text-slate-500">Bounding Box</dt>
                            <dd className="font-mono text-slate-200">{formattedDims}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500">Scale Status</dt>
                            <dd className="font-mono text-slate-200 capitalize">
                                {isUnscaled ? 'Unscaled' : `${scaleSource} calibrated`}
                            </dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500">Triangles</dt>
                            <dd className="font-mono text-slate-200">{stats.triangles.toLocaleString()}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500">Vertices</dt>
                            <dd className="font-mono text-slate-200">{stats.vertices.toLocaleString()}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500">Sub-meshes</dt>
                            <dd className="font-mono text-slate-200">{stats.meshes}</dd>
                        </div>
                        {fileName && (
                            <div className="flex justify-between">
                                <dt className="text-slate-500">Source File</dt>
                                <dd className="font-mono text-slate-200 truncate max-w-[160px]">{fileName}</dd>
                            </div>
                        )}
                        {fileSize && (
                            <div className="flex justify-between">
                                <dt className="text-slate-500">File Size</dt>
                                <dd className="font-mono text-slate-200">{fileSize}</dd>
                            </div>
                        )}
                    </dl>

                    {measurements.length > 0 && (
                        <div className="pt-2.5 border-t border-slate-800">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                                    Recorded Measurements
                                </span>
                                <button
                                    onClick={clearMeasurements}
                                    className="text-[11px] text-slate-400 hover:text-red-400"
                                >
                                    Clear All
                                </button>
                            </div>
                            <ul className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                                {measurements.map((m, idx) => (
                                    <li
                                        key={m.id}
                                        className="flex items-center justify-between bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80 text-xs font-mono"
                                    >
                                        <span className="text-slate-400">Point #{idx + 1}</span>
                                        <span className="text-amber-300 font-semibold">
                                            {formatDistance(m.rawDistance, true)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="pt-2.5 border-t border-slate-800 text-[11px] text-slate-500 grid grid-cols-2 gap-1.5">
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">↑↓←→</kbd> Orbit
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">⇧+Arrows</kbd>{' '}
                            Pan
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">+ / -</kbd> Zoom
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">F</kbd> Fit View
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">M</kbd> Measure
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">C</kbd>{' '}
                            Calibrate
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">P</kbd>{' '}
                            Ortho/Persp
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">G</kbd> Grid
                        </div>
                        <div>
                            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">R</kbd> Rotate
                        </div>
                    </div>
                </aside>
            )}
        </div>
    );
}
