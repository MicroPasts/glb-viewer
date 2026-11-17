# @micropasts/glb-model-viewer

A lightweight, high-precision Three.js GLB/glTF 3D artifact and model viewer for React. Built for cultural heritage, numismatics, archaeology, and scientific inspection, featuring 3-tier physical scale calibration, a collapsible zebra photoscale bar with universal reference object silhouettes, point-to-point surface measurements, glTF animation playback, cross-section slicing, raking studio lighting, and multi-format mesh exports.

The model in the demo is of the *Head and Shoulders of a Sphinx of Hatshepsut*, a 3D scan made on holiday in New York ([Met Museum collection record](https://www.metmuseum.org/art/collection/search/549029)).

## Features

- **3-Tier Scale Calibration**:
  - **Catalog Auto-Scale**: Pass `knownMaxDimensionMm` from your database record to normalize the bounding box's longest axis automatically.
  - **Metric Sanity Check**: Converts standard glTF meter units to millimeters (`defaultUnitScale={1000}`) while automatically flagging implausible dimensions as unscaled.
  - **Interactive 2-Point Calibration**: Click any two reference points on a scale bar or known feature and enter the real-world millimeter distance to calibrate unscaled photogrammetry meshes on the fly.
- **Zebra Photoscale & Reference Object Silhouettes**: A high-contrast 4-segment archaeological scale bar that automatically adapts to zoom level and metric/imperial units (`mm`, `cm`, `in`), paired with a collapsible comparison drawer featuring true-to-scale silhouettes (**AA Cell**, **Tennis Ball**, **330ml Can**, and **A4 Sheet**).
- **Point-to-Point Surface Measurements**: BVH-accelerated (`three-mesh-bvh`) 3D surface raycasting for instant point placement even on dense, multi-million-triangle scans, complete with projected 2D distance badges (`mm`, `cm`, and `in`).
- **glTF Keyframe Animation Timeline**: Automatically mounts a responsive playback bar whenever a `.glb`/`.gltf` contains embedded animations, supporting play/pause, clip selection, timeline scrubbing, and playback speed cycling (`0.5×`, `1×`, `2×`).
- **Diagnostic Shading & Studio IBL Lighting**: Switch between **PBR** (lit by Three.js `RoomEnvironment` Image-Based Lighting with adjustable **Env** intensity, **Exposure**, and raking **Light** angle), **Relief** (screen-space normal curvature shader for faint inscriptions and tool marks), **Clay** (Matcap raking relief), **Normals**, and **Vertex Colors**, plus **Wireframe** overlay.
- **Draco & KTX2 Compression Support**: Built-in `DRACOLoader` and `KTX2Loader` configuration with sensible CDN defaults and customizable decoder paths.
- **Cross-Section Slicer**: Interactive X, Y, and Z clipping planes (`0%–100%`) with a translucent slice plane indicator.
- **Scoped Light & Dark UI Themes**: Toggle between frosted Light and Dark HUD themes independently of the host page (`initialTheme="dark"` or `"light"`), with all CSS scoped under `.gmv-root`.
- **Modular & Composable**: Toggle individual toolbars, panels, and features on or off via boolean props, or import standalone HUD sub-components (`ScaleBarOverlay`, `AnimationTimeline`, `TelemetryDrawer`, etc.) directly.
- **Multi-Format Exports**: Download the original `.glb`, convert in-browser to `.obj` or binary 3D-print-ready `.stl`, capture `.png` viewport renders, or record a 5-second 360° turntable `.webm` clip.
- **Accessible & Memory-Safe**: Full keyboard navigation (orbit, pan, zoom, and tool shortcuts), ARIA roles/live regions, and strict WebGL geometry, texture, BVH, and context disposal on unmount.

---

## Installation

Install the package alongside its peer dependencies (`react`, `react-dom`, and `three` `>=0.163.0`):

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
            <ModelViewer
                modelUrl="/models/hatshepsut.glb"
                title="Head and Shoulders of a Sphinx of Hatshepsut"
                subtitle="Indurated Limestone • New Kingdom, Dynasty 18 (ca. 1479–1458 B.C.)"
                badge="GLB"
                fileName="hatshepsut_sphinx.glb"
                fileSize="8.4 MB"
                knownMaxDimensionMm={520}
                initialTheme="dark"
                onLoad={(stats) => {
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

### 2. Customizing Visible Tools & Presets

Every UI panel and interactive tool can be toggled independently via boolean props (all default to `true`). For example, to render a clean, minimal embed card for a catalog grid:

```jsx
<div className="w-full h-[420px]">
    <ModelViewer
        modelUrl="/models/hatshepsut.glb"
        title="Sphinx of Hatshepsut"
        knownMaxDimensionMm={520}
        initialTheme="light"
        showBottomToolbar={false}
        showReferenceObjects={false}
        showTelemetry={false}
        enableCalibrate={false}
        enableMeasure={false}
        enableExport={false}
        enableDeepLink={false}
    />
</div>
```

You can also pass custom JSX overlays as `children` inside `<ModelViewer>`—they will render inside the `.gmv-root` container above the WebGL canvas.

---

### 3. Next.js (App Router) Setup

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
            <ModelViewer modelUrl={modelUrl} title={title} />
        </div>
    );
}
```

---

### 4. Laravel + Blade Setup

Mount the viewer onto a DOM element carrying `data-*` attributes from your Eloquent model:

**`resources/js/threeD-viewer.jsx`**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModelViewer } from '@micropasts/glb-model-viewer';
import '@micropasts/glb-model-viewer/style.css';

const rootEl = document.getElementById('model-viewer-root');

if (rootEl) {
    const maxMm = rootEl.dataset.maxMm ? parseFloat(rootEl.dataset.maxMm) : null;

    createRoot(rootEl).render(
        <ModelViewer
            modelUrl={rootEl.dataset.modelUrl}
            title={rootEl.dataset.title}
            subtitle={rootEl.dataset.subtitle}
            fileName={rootEl.dataset.fileName}
            knownMaxDimensionMm={maxMm}
        />
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
        data-subtitle="{{ $find->objectTerm?->term }} • {{ $find->broadPeriod?->term }}"
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

1. **Database-Driven Calibration (`knownMaxDimensionMm`)**: If your catalog record already stores the object's longest physical measurement in millimeters, pass it via `knownMaxDimensionMm`. The viewer normalizes the bounding box so every point-to-point measurement and the zebra photoscale bar are accurate immediately.
2. **Metric Unit Scaling (`defaultUnitScale`)**: If `knownMaxDimensionMm` is omitted, the viewer multiplies raw mesh units by `defaultUnitScale` (`1000` by default, converting standard glTF meters to millimeters) and checks whether the result falls within `sanityRangeMm` (`[0.5, 5000]` mm).
3. **Interactive 2-Point Calibration**: If a model falls outside `sanityRangeMm` (or `defaultUnitScale={null}` is passed), the header displays an **Unscaled • Calibrate** badge. Clicking it (or pressing `C`) lets the user click two points of known distance on the mesh and enter the real millimeter length to calibrate the session.

---

## Props Reference

### Core & Asset Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelUrl` | `string` | **Required** | URL or path to the `.glb` or `.gltf` asset (must support CORS if hosted cross-origin). |
| `title` | `string` | `'3D Model'` | Primary heading displayed in the top-left header. |
| `subtitle` | `string` | `''` | Secondary metadata line (period, material, classification). |
| `badge` | `string` | `'GLB'` | Uppercase format badge next to the title. |
| `fileName` | `string` | `'model'` | Base filename used when exporting `.glb`, `.obj`, `.stl`, `.png`, or `.webm`. |
| `fileSize` | `string \| null` | `null` | Optional human-readable file size displayed in the Telemetry drawer. |
| `backUrl` | `string \| null` | `null` | Optional URL rendering a back navigation button in the top-left header. |
| `knownMaxDimensionMm` | `number \| null` | `null` | Known longest physical dimension (in mm) to auto-calibrate the mesh. |
| `defaultUnitScale` | `number \| null` | `1000` | Multiplier converting raw mesh units to mm (`1000` for meters, `10` for cm, `null` for unscaled). |
| `sanityRangeMm` | `[number, number]` | `[0.5, 5000]` | Plausible millimeter range before flagging `defaultUnitScale` output as unscaled. |
| `initialBackground` | `string` | `'#090d16'` | Initial hex background color of the WebGL viewport. |
| `initialTheme` | `'light' \| 'dark'` | `'dark'` | Initial UI theme for the frosted-glass HUD panels. |
| `dracoDecoderPath` | `string` | gstatic CDN `1.5.7` | Base path/URL to Draco WASM/JS decoder files for compressed meshes. |
| `ktx2TranscoderPath` | `string` | gstatic CDN `2021-04-15` | Base path/URL to Basis Universal KTX2 transcoder files. |

### Optional UI & Tool Toggles

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `showHeader` | `boolean` | `true` | Shows or hides the top-left title, badge, and scale status card. |
| `showBottomToolbar` | `boolean` | `true` | Shows or hides the bottom shading, overlay, camera, and lighting toolbar. |
| `showScaleBar` | `boolean` | `true` | Shows or hides the dynamic zebra photoscale bar (when model is scaled). |
| `showReferenceObjects` | `boolean` | `true` | Enables the expandable reference object silhouettes (AA Cell, Tennis Ball, 330ml Can, A4 Sheet) on the scale bar. |
| `showAnimationTimeline` | `boolean` | `true` | Shows the timeline scrubber bar when the loaded glTF/GLB contains animations. |
| `showThemeToggle` | `boolean` | `true` | Shows the Light/Dark UI theme toggle button in the top-right toolbar. |
| `showTelemetry` | `boolean` | `true` | Shows the Telemetry button and mesh statistics/measurements drawer. |
| `enableMeasure` | `boolean` | `true` | Enables the point-to-point measurement tool (`M` shortcut). |
| `enableCalibrate` | `boolean` | `true` | Enables the 2-point manual scale calibration tool (`C` shortcut). |
| `enableExport` | `boolean` | `true` | Shows the Export dropdown menu (`.glb`, `.obj`, `.stl`, `.png`, `.webm`). |
| `enableFullscreen` | `boolean` | `true` | Shows the fullscreen toggle button. |
| `enableDeepLink` | `boolean` | `true` | Enables `#view=...` shareable URL hash serialization and restoration. |

### Callbacks & Children

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onLoad` | `(stats: MeshStats) => void` | `null` | Callback fired once the model parses and renders (`{ triangles, vertices, meshes, rawSize }`). |
| `onError` | `(error: unknown) => void` | `null` | Callback fired if fetching or parsing the 3D asset fails. |
| `onCalibrate` | `(result: CalibrationResult) => void` | `null` | Callback fired when a user applies a manual 2-point calibration (`{ scaleFactor, targetMm }`). |
| `children` | `React.ReactNode` | `null` | Optional custom HUD elements rendered inside the `.gmv-root` viewport container. |

---

## Exported Sub-Components

In addition to `ModelViewer`, the package exports its individual HUD building blocks and distance formatter if you wish to build custom layouts:

```javascript
import {
    ModelViewer,
    TopBar,
    BottomToolbar,
    TelemetryDrawer,
    ScaleBarOverlay,
    AnimationTimeline,
    ThemeToggle,
    formatDistance,
} from '@micropasts/glb-model-viewer';
```

---

## Keyboard Shortcuts & Mouse Controls

| Input | Action |
| --- | --- |
| `Double-click` (surface) | Smoothly focus and orbit around the clicked surface point |
| `Double-click` (background) | Reset camera to isometric fit view |
| `↑` `↓` `←` `→` | Orbit camera around target |
| `Shift` + `↑` `↓` `←` `→` | Pan camera |
| `+` / `-` | Zoom in / out |
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