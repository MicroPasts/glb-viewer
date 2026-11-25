import React, { useEffect, useState } from 'react';
import ModelViewer from '../src/index.js';

const DEMO_MODELS = [
    {
        id: 'hatshepsut',
        label: 'Hatshepsut (Scan)',
        modelUrl: './models/hatshepsut.glb',
        title: 'Head & Shoulders of a Sphinx of Hatshepsut',
        subtitle: 'Indurated Limestone • Photogrammetry GLB Scan',
        badge: 'GLB',
        fileName: 'hatshepsut.glb',
        fileSize: '32.2 MB',
        knownMaxDimensionMm: 520,
    },
    {
        id: 'aa',
        label: "Animated statue of A'a",
        modelUrl: './models/aa.glb',
        title: "Animated statue of A'a",
        subtitle: 'glTF Keyframe Animation Demo',
        badge: 'GLB • ANIM',
        fileName: 'aa.glb',
        fileSize: '29.2 MB',
        knownMaxDimensionMm: 1170,
    },
    {
        id: 'caryatid',
        label: 'Caryatid (Scan)',
        modelUrl: './models/caryatid.glb',
        title: 'Caryatid (Scan)',
        subtitle: 'Guerilla scan',
        badge: 'GLB',
        fileName: 'caryatid.glb',
        fileSize: '46.5 MB',
        knownMaxDimensionMm: 2280,
    },
    {
        id: 'scarab',
        label: 'Scarab (Scan)',
        modelUrl: './models/scarab.glb',
        title: 'Scarab sculpture (EA74)',
        subtitle: 'Diorite • British Museum',
        badge: 'GLB',
        fileName: 'scarab.glb',
        fileSize: '48.5 MB',
        knownMaxDimensionMm: 1535,
        paradataUrl: `${import.meta.env.BASE_URL}data/scarab.json`,
    },
];

export default function DemoApp() {
    const [activeId, setActiveId] = useState(DEMO_MODELS[0].id);
    const [paradataRecord, setParadataRecord] = useState(null);
    const [paradataError, setParadataError] = useState(false);
    const current = DEMO_MODELS.find((m) => m.id === activeId) || DEMO_MODELS[0];

    useEffect(() => {
        const controller = new AbortController();
        setParadataRecord(null);
        setParadataError(false);

        if (!current.paradataUrl) {
            return undefined;
        }

        fetch(new URL(current.paradataUrl, document.baseURI), { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Paradata request failed: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                if (!controller.signal.aborted) {
                    if (!data || typeof data !== 'object' || Array.isArray(data)) {
                        throw new Error('Paradata must be a JSON object');
                    }
                    setParadataRecord({ modelId: current.id, data });
                }
            })
            .catch((err) => {
                if (!controller.signal.aborted) {
                    console.error('Failed to load paradata:', err);
                    setParadataError(true);
                }
            });

        return () => {
            controller.abort();
        };
    }, [current.id, current.paradataUrl]);

    const handleSelectModel = (id) => {
        if (window.location.hash.startsWith('#view=')) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        setActiveId(id);
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {current.paradataUrl && paradataError && (
                <div role="alert" style={{ position: 'absolute', top: 0, left: 0, zIndex: 100, background: 'white', color: 'black', padding: 8 }}>
                    Failed to load the paradata record. See the browser console for details.
                </div>
            )}
            <ModelViewer
                modelUrl={current.modelUrl}
                title={current.title}
                subtitle={current.subtitle}
                badge={current.badge}
                fileName={current.fileName}
                fileSize={current.fileSize}
                knownMaxDimensionMm={current.knownMaxDimensionMm}
                paradata={paradataRecord?.modelId === current.id ? paradataRecord.data : null}
                initialTheme="dark"
                defaultAnnotations={current.defaultAnnotations}
                enableAnnotationCreate={true}
                enableAnnotationEdit={true}
                enableAnnotationDelete={true}
            >
                {/* Floating Model Switcher Pill injected via children slot */}
                <div
                    role="group"
                    aria-label="Switch demo 3D model"
                    className="pointer-events-auto absolute top-20 left-3 sm:left-4 z-20 inline-flex items-center gap-1 bg-white/90 text-slate-800 border-slate-200/90 dark:bg-slate-900/85 dark:text-slate-200 dark:border-slate-800/80 backdrop-blur-md border rounded-xl p-1 shadow-xl text-xs"
                >
                    <span className="px-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 hidden sm:inline">
                        Model
                    </span>
                    {DEMO_MODELS.map((model) => (
                        <button
                            key={model.id}
                            type="button"
                            aria-pressed={activeId === model.id}
                            onClick={() => handleSelectModel(model.id)}
                            className={`px-2.5 py-1 rounded-lg font-medium transition ${
                                activeId === model.id
                                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/60'
                            }`}
                        >
                            {model.label}
                        </button>
                    ))}
                </div>
            </ModelViewer>
        </div>
    );
}
