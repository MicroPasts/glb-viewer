import React from 'react';
import { readFile } from 'node:fs/promises';
import { afterEach, expect, it, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DemoApp from '../demo/DemoApp';
import { ParadataDrawer } from '../src/components/ModelViewer/components/ParadataDrawer';

vi.mock('../src/index.js', () => ({
    default: ({ children, paradata, knownMaxDimensionMm }) => (
        <div>
            <div data-testid="paradata">{paradata?.recordId || 'none'}</div>
            <div data-testid="dimension">{knownMaxDimensionMm}</div>
            {children}
        </div>
    ),
}));

afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
});

it('loads the scarab JSON only for the scarab model and clears it on switching', async () => {
    const record = JSON.parse(await readFile('demo/public/data/scarab.json', 'utf8'));
    expect(record.recordId).toBe('EA74');
    expect(record.captureTolerances).toContainEqual({ label: 'Camera', value: 'Nikon D500' });
    expect(record.processingSummary.fields).toContainEqual({ label: 'Scan creator', value: 'Daniel Pett' });
    expect(record.processingSummary.fields).toContainEqual({ label: 'Processing software', value: 'RealityCapture' });
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => record });
    vi.stubGlobal('fetch', fetchMock);
    render(<DemoApp />);
    const user = userEvent.setup();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getByTestId('paradata').textContent).toBe('none');
    await user.click(screen.getByRole('button', { name: 'Scarab (Scan)' }));
    await waitFor(() => expect(screen.getByTestId('paradata').textContent).toBe('EA74'));
    expect(String(fetchMock.mock.calls[0][0])).toMatch(/\/data\/scarab\.json$/);
    expect(screen.getByTestId('dimension').textContent).toBe('1535');
    await user.click(screen.getByRole('button', { name: 'Caryatid (Scan)' }));
    expect(screen.getByTestId('paradata').textContent).toBe('none');
    expect(fetchMock).toHaveBeenCalledTimes(1);
});

it('reports failed JSON requests without showing stale paradata', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 404, statusText: 'Not Found' }));
    render(<DemoApp />);
    await userEvent.click(screen.getByRole('button', { name: 'Scarab (Scan)' }));
    expect((await screen.findByRole('alert')).textContent).toContain('Failed to load');
    expect(screen.getByTestId('paradata').textContent).toBe('none');
});

it('preserves the original CHAN-009 record as valid JSON', async () => {
    const original = JSON.parse(await readFile('demo/public/data/chan009.json', 'utf8'));
    expect(original.recordId).toBe('CHAN-009');
    expect(original.derivedAssets.assets[0].filename).toBe('CHAN-009.fbx');
});

it('shows the expanded Scarab record and matches the bundled GLB metadata', async () => {
    const record = JSON.parse(await readFile('demo/public/data/scarab.json', 'utf8'));
    const glb = await readFile('demo/public/models/scarab.glb');
    const model = JSON.parse(glb.subarray(20, 20 + glb.readUInt32LE(12)).toString('utf8'));
    const primitives = model.meshes.flatMap((mesh) => mesh.primitives);
    const vertices = primitives.reduce((sum, primitive) => sum + model.accessors[primitive.attributes.POSITION].count, 0);
    const faces = primitives.reduce((sum, primitive) => sum + model.accessors[primitive.indices].count / 3, 0);
    const asset = record.derivedAssets.assets[0];
    expect(asset.mesh).toBe(`${primitives.length} mesh primitives`);
    expect(asset.vertices).toBe(vertices.toLocaleString('en-US'));
    expect(asset.faces).toBe(faces.toLocaleString('en-US'));
    expect(asset.size).toBe(`${glb.length.toLocaleString('en-US')} bytes`);
    expect(model.images).toHaveLength(2);
    expect(model.images.every((image) => image.mimeType === 'image/jpeg')).toBe(true);
    expect(model.materials.every((material) => (
        material.pbrMetallicRoughness.baseColorTexture &&
        !material.normalTexture &&
        !material.occlusionTexture &&
        !material.pbrMetallicRoughness.metallicRoughnessTexture
    ))).toBe(true);

    render(<ParadataDrawer isOpen onClose={() => {}} paradata={record} />);
    for (const heading of ['Photogrammetry Processing', 'Texture Maps', 'Assessment', 'Post-Processing Lab Notes', 'Capture Tolerances & Equipment', 'Acquisition, By Chunk', 'Processing & Derived Assets', 'Source']) {
        expect(screen.getByRole('heading', { name: heading })).toBeTruthy();
    }
    expect(screen.getByText('PROVENANCE NOT DOCUMENTED')).toBeTruthy();
    expect(screen.getAllByText('Not assessed')).toHaveLength(3);
});
