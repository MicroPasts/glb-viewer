# @micropasts/glb-model-viewer

A lightweight, high-precision Three.js GLB/glTF 3D artifact and model viewer for React. Built for cultural heritage, numismatics, archaeology, and scientific inspection, featuring 3-tier physical scale calibration, point-to-point surface measurements, cross-section slicing, raking studio lighting, and multi-format mesh exports.

The model in the demo is of the *Head and Shoulders of a Sphinx of Hatshepsut*, a 3D scan made on holiday in New York ([Met Museum collection record](https://www.metmuseum.org/art/collection/search/549029)).

## Features

- **3-Tier Scale Calibration**:
  - **Catalog Auto-Scale**: Pass `knownMaxDimensionMm` from your database record to normalize the bounding box's longest axis automatically.
  - **Metric Sanity Check**: Converts standard glTF meter units to millimeters (`defaultUnitScale={1000}`) while automatically flagging implausible dimensions as unscaled.
  - **Interactive 2-Point Calibration**: Click any two reference points on a scale bar or known feature and enter the real-world millimeter distance to calibrate unscaled photogrammetry meshes on the fly.
- **Point-to-Point Surface Measurements**: Raycasted 3D surface markers with projected 2D distance badges (`mm`, `cm`, and `in`).
- **Diagnostic Shading Modes**: Switch between **PBR** (original textures), **Relief** (screen-space normal curvature shader for faint inscriptions and tool marks), **Clay** (Matcap raking relief), **Normals**, and **Vertex Colors**, plus **Wireframe** overlay.
- **Cross-Section Slicer**: Interactive X, Y, and Z clipping planes (`0%–100%`) with a translucent slice plane indicator.
- **Camera & Orientation Controls**: Instant **Perspective / Orthographic** projection toggle, preset views (`Iso`, `Front`, `Top`, `Side`), synchronized 3D XYZ corner orientation gizmo, and shareable deep-link URL hashes (`#view=...`).
- **Multi-Format Exports**: Download the original `.glb`, convert in-browser to `.obj` or binary 3D-print-ready `.stl`, capture `.png` viewport renders, or record a 5-second 360° turntable `.webm` clip.
- **Scoped Styles & Zero Memory Leaks**: Pre-compiled CSS scoped under `.gmv-root` (no Tailwind setup required in host apps) with strict WebGL geometry, texture, and context cleanup.

---

## Installation

Install the package alongside its peer dependencies (`react`, `react-dom`, and `three`):

```bash
npm install @micropasts/glb-model-viewer three

```

---

## Usage in Your App

### 1. Basic React / Vite Setup

Import both `ModelViewer` and its bundled stylesheet (`@micropasts/glb-model-viewer/style.css`). Wrap the component in a container with an explicit width and height:

```jsx
import React from 'react';
import { ModelViewer } from '@micropasts/glb-model-viewer';
import '@micropasts/glb-model-viewer/style.css';

export default function ArtifactPage() {
    return (
        <div style={{ width: '100%', height: '650px' }}>
            <ModelViewer badge="GLB" fileName="hatshepsut_sphinx.glb" fileSize="8.4 MB" knownMaxDimensionMm="{520}" modelUrl="/models/hatshepsut.glb" onLoad="{(stats)" subtitle="Indurated Limestone • New Kingdom, Dynasty 18 (ca. 1479–1458 B.C.)" title="Head and Shoulders of a Sphinx of Hatshepsut"> {
                    console.log('Loaded mesh stats:', stats);
                }}
                onCalibrate={({ scaleFactor, targetMm }) => {
                    console.log(`Calibrated to ${targetMm} mm (factor: ${scaleFactor})`);
                }}
            />
        </div>
    );
}

```

> **Important:** `ModelViewer` fills `100%` of its parent container (`width: 100%; height: 100%`). Always give the wrapping `<div>` an explicit height (such as `height: 100vh`, `height: 600px`, or Tailwind's `h-[80vh]`), otherwise the WebGL canvas will collapse to `0px`.

---

### 2. Next.js (App Router) Setup

Because Three.js accesses `window` and WebGL APIs, load the component inside a Client Component (`'use client'`) or via `next/dynamic` with `ssr: false`:

```jsx
'use client';

import dynamic from 'next/dynamic';
import '@micropasts/glb-model-viewer/style.css';

const ModelViewer = dynamic(
    () => import('@micropasts/glb-model-viewer').then((mod) => mod.ModelViewer),
    { ssr: false }
);

export default function NextArtifactViewer({ modelUrl, title }) {
    return (
        <div className="w-full h-[80vh]">
            <ModelViewer modelUrl="{modelUrl}" title="{title}"/>
        </div>
    );
}

```

---

### 3. Laravel + Blade Setup

Mount the viewer onto a DOM element carrying `data-*` attributes from your Eloquent model:

**`resources/js/threeD-viewer.jsx`**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModelViewer } from '@micropasts/glb-model-viewer';
import '@micropasts/glb-model-viewer/style.css';

const rootEl = document.getElementById('model-viewer-root');

if (rootEl) {
    createRoot(rootEl).render(
        <ModelViewer : ? fileName="{rootEl.dataset.fileName}" knownMaxDimensionMm="{" modelUrl="{rootEl.dataset.modelUrl}" null parseFloat(rootEl.dataset.maxMm) rootEl.dataset.maxMm subtitle="{rootEl.dataset.subtitle}" title="{rootEl.dataset.title}" }/>
    );
}

```

**`resources/views/finds/viewer.blade.php`**

```blade
<div class="w-full h-[calc(100vh-4rem)]">
    <div
        id="model-viewer-root"
        data-model-url="{{ $modelUrl }}"
        data-title="{{ $find->find_identifier }}"
        data-subtitle="{{ $find->objectTerm?->term }} • {{$find->broadPeriod?->term }}"
        data-file-name="{{ $find->find_identifier }}.glb"
        data-max-mm="{{ $find->length ?? '' }}"
        class="w-full h-full"
    ></div>
</div>

@viteReactRefresh
@vite(['resources/js/threeD-viewer.jsx'])

```

---

## Handling Unscaled Photogrammetry Models

3D scans exported from photogrammetry tools (such as Agisoft Metashape or RealityCapture) without a scale bar often use arbitrary mesh units rather than meters. `ModelViewer` handles this automatically:

1. **Database-Driven Calibration (`knownMaxDimensionMm`)**: If your catalog record already stores the object's longest physical measurement in millimeters, pass it via `knownMaxDimensionMm`. The viewer normalizes the bounding box so every point-to-point measurement is accurate immediately.
2. **Metric Unit Scaling (`defaultUnitScale`)**: If `knownMaxDimensionMm` is omitted, the viewer multiplies raw mesh units by `defaultUnitScale` (`1000` by default, converting standard glTF meters to millimeters) and checks whether the result falls within `sanityRangeMm` (`[0.5, 5000]` mm).
3. **Interactive 2-Point Calibration**: If a model falls outside `sanityRangeMm` (or `defaultUnitScale={null}` is passed), the header displays an **Unscaled • Calibrate** badge. Clicking it (or pressing `C`) lets the user click two points of known distance on the mesh and type in the real millimeter length to calibrate the session.

---

## Props Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelUrl` | `string` | **Required** | URL or path to the `.glb` or `.gltf` asset (must support CORS if hosted cross-origin). |
| `title` | `string` | `'3D Model'` | Primary heading displayed in the top-left header. |
| `subtitle` | `string` | `''` | Secondary metadata line (period, material, classification). |
| `badge` | `string` | `'GLB'` | Uppercase format badge next to the title. |
| `fileName` | `string` | `'model'` | Base filename used when exporting `.glb`, `.obj`, `.stl`, `.png`, or `.webm`. |
| `fileSize` | `string | null` | `null` | Optional human-readable file size displayed in the Telemetry drawer. |
| `backUrl` | `string | null` | `null` | Optional URL rendering a back navigation button in the top-left header. |
| `knownMaxDimensionMm` | `number | null` | `null` | Known longest physical dimension (in mm) to auto-calibrate the mesh. |
| `defaultUnitScale` | `number | null` | `1000` | Multiplier converting raw mesh units to mm (`1000` for meters, `10` for cm, `null` for unscaled). |
| `sanityRangeMm` | `[number, number]` | `[0.5, 5000]` | Plausible millimeter range before flagging `defaultUnitScale` output as unscaled. |
| `initialBackground` | `string` | `'#090d16'` | Initial hex background color of the WebGL viewport. |
| `enableDeepLink` | `boolean` | `true` | Enables `#view=...` URL hash serialization and restoration. |
| `onLoad` | `(stats: MeshStats) => void` | `null` | Callback fired once the model parses and renders (`{ triangles, vertices, meshes, rawSize }`). |
| `onError` | `(error: unknown) => void` | `null` | Callback fired if fetching or parsing the 3D asset fails. |
| `onCalibrate` | `(result: CalibrationResult) => void` | `null` | Callback fired when a user applies a manual 2-point calibration (`{ scaleFactor, targetMm }`). |

---

## Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `M` | Toggle point-to-point measurement mode |
| `C` | Toggle 2-point scale calibration mode |
| `P` | Switch between Perspective and Orthographic projection |
| `G` | Toggle scale reference grid |
| `R` | Toggle turntable auto-rotation |
| `F` | Reset camera to isometric fit view |
| `Esc` | Cancel active measurement/calibration point or close menus |

---

## License

MIT © 2026 Daniel Pett