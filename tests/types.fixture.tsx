import React from 'react';
import {
    AnnotationOverlay,
    ModelViewer,
    ScaleBarOverlay,
    normalizeAnnotation,
    type Annotation,
} from '../src/index.js';

const annotation: Annotation = {
    id: 'one',
    target: { position: [1, 2, 3] },
    camera: null,
    body: { title: 'Title', summary: '', category: 'note', tags: [], author: null, createdAt: null },
    style: { color: '#ffffff' },
};

<ModelViewer modelUrl="model.glb" annotations={[annotation]} enableAnnotationEdit
    onUpdateAnnotation={(updated) => ({ ...updated, body: { ...updated.body, title: 'Updated' } })} />;
<AnnotationOverlay annotations={[annotation]} onSelect={(selected) => selected?.id} />;
<ScaleBarOverlay pixelsPerMm={1} isUnscaled={false} measureUnit="cm" />;
normalizeAnnotation(annotation);

// @ts-expect-error Invalid measurement units are rejected.
<ScaleBarOverlay pixelsPerMm={1} isUnscaled={false} measureUnit="yards" />;
// @ts-expect-error A model URL is required.
<ModelViewer />;
