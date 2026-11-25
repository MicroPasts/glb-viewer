# Contributing to `@micropasts/glb-model-viewer`

Thank you for your interest in contributing to `@micropasts/glb-model-viewer`! This project provides a lightweight, accessible, open-source Three.js GLB/glTF 3D artifact and model viewer for React, tailored for cultural heritage, numismatics, archaeology, and scientific inspection.

Whether you are reporting a bug, improving documentation, adding tests, or proposing a new inspection tool, your contributions are welcome.

---

## Code of Conduct

Please be respectful, constructive, and welcoming in all issues, pull requests, and discussions. Focus feedback on the code and user experience, and assume good intent from fellow contributors.

---

## Reporting Bugs & Suggesting Features

Before opening a new issue, please search existing issues to see if the topic is already being discussed.

### Bug Reports
When filing a bug report, please include:
- **Environment details:** Browser and version, OS, React version, and `three` version (`>=0.163.0` is required).
- **Asset details:** Whether the model uses Draco compression, KTX2 textures, embedded animations, or external `.gltf` buffers/textures.
- **Reproduction steps:** Minimal code or steps needed to trigger the issue, plus any browser Console or Network errors (such as CORS or WebGL context warnings).

### Feature & Enhancement Proposals
When proposing a new feature:
- Describe the use case—especially if it supports museum, archaeological, conservation, or linked-data workflows (such as W3C Web Annotation, IIIF 3D, or paradata standards).
- Keep the core library lightweight and framework-agnostic on the backend; avoid adding heavy runtime dependencies unless strictly necessary.

---

## Local Development Setup

1. **Fork and clone the repository:**
   ```bash
   git clone [https://github.com/MicroPasts/glb-viewer.git](https://github.com/MicroPasts/glb-viewer.git)
   cd glb-viewer

```

2. **Install dependencies:**
```bash
npm install

```


3. **Run the local demo app:**
Start the Vite development server to test changes interactively against the sample models (Hatshepsut, *A'a*, Caryatid, and Scarab):
```bash
npm run dev

```


4. **Build and test before submitting:**
Run the test suite, linter, and library/CSS bundle build to verify everything compiles cleanly:
```bash
npm test
npm run build

```


*(Check `package.json` for any additional formatting or type-checking scripts.)*

---

## Project Architecture & Conventions

To keep the package modular, portable, and easy to maintain, please follow these conventions when editing or adding code:

### Component Structure

* **`src/index.jsx` (`ModelViewer`):** Main stateful orchestrator managing the Three.js scene, cameras, BVH raycasting, loaders, and HUD state.
* **`src/components/`:** Modular UI and HUD components (`TopBar`, `BottomToolbar`, `TelemetryDrawer`, `ParadataDrawer`, `ScaleBarOverlay`, `AnnotationOverlay`, `AnimationTimeline`, `ToolBanners`, `ThemeToggle`).
* Export components using `export default function ComponentName(...)` (you may also include a named export if helpful).
* Keep standalone HUD components decoupled from internal Three.js refs so integrators can mount them independently.


* **`src/hooks/` & `src/utils/`:** Reusable hooks (`useViewerHotkeys`, `useClickOutside`) and pure helpers (`threeHelpers`, `annotationAdapters`, `scaleBar`, `projectedPins`).

### Styling & Scoped CSS

* All styles are built with **Tailwind CSS v4** and scoped under `.gmv-root` so the viewer never leaks global styles into host applications.
* Every UI element must support both **Light** and **Dark** themes (`dark:` variants driven by the `.dark` class on `.gmv-root`).
* Avoid adding global CSS resets or unscoped element selectors.

### Three.js & Memory Safety

* Any Three.js geometries, materials, textures, render targets, BVH bounds trees, or `ResizeObserver` / DOM listeners created by a feature **must be disposed or cleaned up** on model switch and component unmount.
* Keep `onLoad` / `onError` / callback props stable via refs inside long-lived `useEffect` hooks so changing inline callbacks in a parent app does not reload the 3D scene.

### Accessibility & Security

* Interactive controls, drawers, and modals must support keyboard navigation (`Escape` to close, focus management/trapping in modal dialogs, and clear `aria-label` / `aria-pressed` / `aria-live` attributes).
* Sanitize and bound any user-supplied or URL-hash-decoded text (see `annotationAdapters`) before rendering or persisting it.

### TypeScript Declarations & Documentation

* If you add or change public props, exported components, or helper signatures, update the corresponding `.d.ts` type definitions and `README.md` props tables in the same pull request.

---

## Submitting a Pull Request

1. Create a focused branch from `main` (e.g., `feat/paradata-export` or `fix/obj-mtl-flip-y`).
2. Keep pull requests scoped to a single feature, fix, or documentation update.
3. Add or update unit/component tests for new logic and bug fixes.
4. Ensure `README.md` and TypeScript declarations reflect any public API changes.
5. Open a pull request against `main` with a clear summary of the motivation, changes made, and how you tested them (including both light and dark modes for UI changes).

---

## License

By contributing to `@micropasts/glb-model-viewer`, you agree that your contributions will be licensed under the repository's **MIT License** (note that sample 3D models in `demo/` carry their own open cultural heritage licenses as documented in `README.md`).
