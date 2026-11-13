import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModelViewer } from '../src/index.js';

function DemoApp() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ModelViewer
                modelUrl="./models/hatshepsut.glb"
                title="Hapshet (3D Scan)"
                subtitle="Photogrammetry / GLB Asset • Demo"
                badge="GLB"
                fileName="hapshet.glb"
                defaultUnitScale={1000}
                onLoad={(stats) => {
                    console.log('Model loaded:', stats);
                }}
            />
        </div>
    );
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DemoApp />
    </React.StrictMode>
);