# @museologist/glb-model-viewer

A lightweight, high-precision Three.js GLB/glTF 3D artifact and model viewer for React. Built for cultural heritage, numismatics, archaeology, and scientific inspection, featuring 3-tier physical scale calibration, point-to-point surface measurements, cross-section slicing, raking studio lighting, and multi-format mesh exports.

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

!!! note
   To do this bit yet...

Install the package alongside its peer dependencies (`react`, `react-dom`, and `three`):

```bash
npm install @museologist/glb-model-viewer three
