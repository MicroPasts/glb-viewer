import * as THREE from 'three';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// Patch Three.js prototypes once for BVH-accelerated raycasting on dense scans
if (!THREE.BufferGeometry.prototype.computeBoundsTree) {
    THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
    THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
    THREE.Mesh.prototype.raycast = acceleratedRaycast;
}

export const DEFAULT_SANITY_RANGE_MM = [0.5, 5000];
export const DEFAULT_DRACO_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/';
export const DEFAULT_KTX2_PATH = 'https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/';

export const BG_PRESETS = [
    { hex: '#090d16', name: 'Midnight' },
    { hex: '#18181b', name: 'Obsidian' },
    { hex: '#334155', name: 'Slate' },
    { hex: '#e2e8f0', name: 'Light Studio' },
];

export function formatDistance(rawDistance, { isUnscaled, customScaleFactor, measureUnit, compact = false }) {
    if (isUnscaled || !customScaleFactor) {
        return compact ? `${rawDistance.toFixed(2)} u` : `${rawDistance.toFixed(3)} units (unscaled)`;
    }
    const mm = rawDistance * customScaleFactor;
    if (measureUnit === 'cm') return `${(mm / 10).toFixed(2)} cm`;
    if (measureUnit === 'in') return `${(mm / 25.4).toFixed(2)} in`;
    return `${mm.toFixed(1)} mm`;
}

export function triggerBlobDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export function clearThreeGroup(group) {
    if (!group) return;
    while (group.children.length > 0) {
        const obj = group.children[0];
        if (obj.geometry) {
            if (obj.geometry.boundsTree) obj.geometry.disposeBoundsTree();
            obj.geometry.dispose();
        }
        if (obj.material) {
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            mats.forEach((m) => m.dispose());
        }
        group.remove(obj);
    }
}

export function disposeObjectTree(root) {
    if (!root) return;
    root.traverse((obj) => {
        if (obj.geometry) {
            if (obj.geometry.boundsTree) obj.geometry.disposeBoundsTree();
            obj.geometry.dispose();
        }
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
}

export function createSharedMaterials() {
    if (typeof document === 'undefined') return null;

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

    return {
        normals: new THREE.MeshNormalMaterial(),
        sculpt: new THREE.MeshMatcapMaterial({ matcap: matcapTex }),
        relief: reliefMaterial,
        vertexColored: new THREE.MeshBasicMaterial({ vertexColors: true }),
        vertexPlain: new THREE.MeshBasicMaterial({ color: 0xcccccc }),
        matcapTex,
    };
}

export function disposeSharedMaterials(shared) {
    if (!shared) return;
    shared.normals?.dispose();
    shared.sculpt?.dispose();
    shared.relief?.dispose();
    shared.vertexColored?.dispose();
    shared.vertexPlain?.dispose();
    shared.matcapTex?.dispose();
}