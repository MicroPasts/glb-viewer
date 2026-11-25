import React, { useRef, useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnnotationOverlay from '../src/components/ModelViewer/components/AnnotationOverlay';
import ScaleBarOverlay from '../src/components/ModelViewer/components/ScaleBarOverlay';
import ToolBanners from '../src/components/ModelViewer/components/ToolBanners';
import TopBar from '../src/components/ModelViewer/components/TopBar';
import { ParadataDrawer } from '../src/components/ModelViewer/components/ParadataDrawer';
import { useViewerHotkeys } from '../src/components/ModelViewer/hooks/useViewerHotkeys';
import { calculateScaleBar, scaleNeedsUpdate } from '../src/components/ModelViewer/utils/scaleBar';
import { projectedPinsChanged } from '../src/components/ModelViewer/utils/projectedPins';

afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
});

const annotation = (id, title) => ({
    id,
    target: { position: [0, 0, 0] },
    camera: null,
    body: { title, summary: '', category: 'note', tags: [] },
});
const pin = (id) => ({ id, screenX: 30, screenY: 40, visible: true, occluded: false });

describe('annotations', () => {
    it('matches reordered pins by id rather than position', async () => {
        const onSelect = vi.fn();
        render(<AnnotationOverlay annotations={[annotation('b', 'Second'), annotation('a', 'First')]}
            projectedPins={[pin('a'), pin('b')]} onSelect={onSelect} />);
        await userEvent.click(screen.getByRole('button', { name: 'Annotation 2: First' }));
        expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 'a' }));
    });

    it('updates projected pins when ids change even if coordinates do not', () => {
        expect(projectedPinsChanged([pin('b')], [pin('a')])).toBe(true);
        expect(projectedPinsChanged([pin('a')], [pin('a')])).toBe(false);
    });

    it('retains the creation form and reports failures before a successful retry', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => {});
        const onSaveDraft = vi.fn().mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce();
        render(<AnnotationOverlay canCreate draftAnchor={{ target: { position: [0, 0, 0] }, camera: null }}
            onSaveDraft={onSaveDraft} />);
        const user = userEvent.setup();
        await user.type(screen.getByLabelText('Title'), 'Test');
        expect(screen.getByLabelText('Category')).toBeTruthy();
        expect(screen.getByLabelText('Description')).toBeTruthy();
        await user.click(screen.getByRole('button', { name: 'Save Annotation' }));
        expect((await screen.findByRole('alert')).textContent).toContain('Could not save');
        expect(screen.getByLabelText('Title').value).toBe('Test');
        await user.click(screen.getByRole('button', { name: 'Save Annotation' }));
        await waitFor(() => expect(onSaveDraft).toHaveBeenCalledTimes(2));
        await waitFor(() => expect(screen.queryByRole('alert')).toBeNull());
    });

    it('reports update and delete failures without losing data', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => {});
        const onUpdate = vi.fn().mockRejectedValue(new Error('offline'));
        const onDelete = vi.fn().mockRejectedValue(new Error('offline'));
        render(<AnnotationOverlay annotations={[annotation('a', 'First')]} selectedId="a"
            canEdit canDelete onUpdate={onUpdate} onDelete={onDelete} />);
        const user = userEvent.setup();
        await user.click(screen.getByRole('button', { name: 'Edit' }));
        await user.click(screen.getByRole('button', { name: 'Save Changes' }));
        expect((await screen.findByRole('alert')).textContent).toContain('Could not save');
        expect(screen.getByLabelText('Title').value).toBe('First');
        await user.click(screen.getByRole('button', { name: 'Cancel' }));
        await user.click(screen.getByRole('button', { name: 'Delete' }));
        expect((await screen.findByRole('alert')).textContent).toContain('Could not delete');
        expect(onDelete).toHaveBeenCalledWith('a');
    });
});

describe('scale bar', () => {
    it('computes metric and imperial steps and rejects invalid scales', () => {
        expect(calculateScaleBar(1, 'mm')).toEqual({ widthPx: 100, label: '100 mm' });
        expect(calculateScaleBar(1, 'cm')).toEqual({ widthPx: 100, label: '10 cm' });
        expect(calculateScaleBar(1, 'in')).toEqual({ widthPx: 101.6, label: '4 in' });
        expect(calculateScaleBar(0.01, 'mm')).toEqual({ widthPx: 50, label: '5 m' });
        expect(calculateScaleBar(1e-310, 'mm').label).toBe('5 m');
        expect(calculateScaleBar(1e-100, 'mm').label).toBe('5 m');
        expect(calculateScaleBar(0.38, 'in').label).toBe('1 ft');
        for (const value of [0, -1, NaN, Infinity]) expect(calculateScaleBar(value)).toBeNull();
    });

    it('hides invalid scales and shows a zoom message at extreme scales', () => {
        const { rerender } = render(<ScaleBarOverlay pixelsPerMm={0} isUnscaled={false} />);
        expect(screen.queryByRole('region')).toBeNull();
        rerender(<ScaleBarOverlay pixelsPerMm={0.00001} isUnscaled={false} />);
        expect(screen.getByText('Zoom for scale')).toBeTruthy();
    });

    it('updates scale at small relative changes even at distant zoom levels', () => {
        expect(scaleNeedsUpdate(0, 0.001)).toBe(true);
        expect(scaleNeedsUpdate(0.001, 0.0010005)).toBe(false);
        expect(scaleNeedsUpdate(0.001, 0.001002)).toBe(true);
    });
});

it('does not offer calibration when disabled', () => {
    render(<ToolBanners measureMode isUnscaled enableCalibrate={false} measurementsCount={0} />);
    expect(screen.queryByRole('button', { name: 'Calibrate Scale' })).toBeNull();
});

function HotkeyHarness({ onNudge, label = 'viewport', onCalibrate = vi.fn() }) {
    const ref = useRef(null);
    const [mode, setMode] = useState(false);
    useViewerHotkeys({
        viewportRef: ref, enableMeasure: true, enableCalibrate: false,
        pendingPoint: null, setPendingPoint: vi.fn(), measureMode: mode, setMeasureMode: setMode,
        calibPoints: [], setCalibPoints: vi.fn(), calibrationMode: false,
        setCalibrationMode: onCalibrate, setDownloadMenuOpen: vi.fn(), projectionMode: 'perspective',
        switchProjection: vi.fn(), setShowGrid: vi.fn(), setAutoRotate: vi.fn(),
        setCameraView: vi.fn(), nudgeCamera: onNudge,
    });
    return <><div ref={ref} tabIndex={0} aria-label={label} /><select aria-label={`${label} other`}><option>one</option></select></>;
}

it('only handles shortcuts on the focused viewport and respects disabled tools', () => {
    const onNudge = vi.fn();
    const otherNudge = vi.fn();
    const onCalibrate = vi.fn();
    render(<><HotkeyHarness onNudge={onNudge} onCalibrate={onCalibrate} />
        <HotkeyHarness label="second viewport" onNudge={otherNudge} /></>);
    fireEvent.keyDown(screen.getByLabelText('viewport other'), { key: 'ArrowDown' });
    expect(onNudge).not.toHaveBeenCalled();
    fireEvent.keyDown(screen.getByLabelText('viewport'), { key: 'ArrowDown' });
    expect(onNudge).toHaveBeenCalledWith('rotateDown');
    expect(otherNudge).not.toHaveBeenCalled();
    fireEvent.keyDown(screen.getByLabelText('viewport'), { key: 'c' });
    expect(onCalibrate).not.toHaveBeenCalled();
    fireEvent.keyDown(screen.getByLabelText('viewport'), { key: 'ArrowDown', ctrlKey: true });
    expect(onNudge).toHaveBeenCalledTimes(1);
});

function ExportHarness() {
    const [open, setOpen] = useState(false);
    return <TopBar showHeader={false} enableCalibrate={false} enableMeasure={false}
        enableAnnotationCreate={false} enableDeepLink={false} showTelemetry={false}
        showThemeToggle={false} enableFullscreen={false} enableExport downloadMenuOpen={open}
        setDownloadMenuOpen={setOpen} loading={false} error={null} exporting={false} recordingVideo={false} />;
}

it('uses ordinary buttons for export and returns focus on Escape', async () => {
    render(<ExportHarness />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button', { name: 'Export' });
    await user.click(trigger);
    const item = screen.getByRole('button', { name: /Original GLB/ });
    item.focus();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('group', { name: 'Export formats' })).toBeNull();
    expect(document.activeElement).toBe(trigger);
});

function ParadataHarness({ paradata, showParadata = true }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <TopBar showHeader={false} enableCalibrate={false} enableMeasure={false}
                enableAnnotationCreate={false} enableDeepLink={false} enableExport={false}
                showTelemetry={false} showThemeToggle={false} enableFullscreen={false}
                paradata={paradata} showParadata={showParadata} paradataOpen={open}
                onToggleParadata={() => setOpen(true)} />
            {showParadata && paradata && (
                <ParadataDrawer paradata={paradata} isOpen={open} onClose={() => setOpen(false)} />
            )}
        </div>
    );
}

it('shows paradata only when provided and enabled, with accessible dialog controls', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<ParadataHarness paradata={null} />);
    expect(screen.queryByRole('button', { name: 'Toggle paradata record' })).toBeNull();
    const record = {
        recordId: 'TEST-1',
        objectMetadata: [{ label: 'Material', value: 'Stone' }],
        textureMaps: [{ name: 'Albedo', statuses: ['MEASURED'], notes: 'Unmodified' }],
        derivedAssets: { assets: [{ asset: 'Mesh', filename: 'mesh.glb', downloadUrl: '/mesh.glb' }] },
    };
    rerender(<ParadataHarness paradata={record} showParadata={false} />);
    expect(screen.queryByRole('button', { name: 'Toggle paradata record' })).toBeNull();
    rerender(<ParadataHarness paradata={record} />);
    const trigger = screen.getByRole('button', { name: 'Toggle paradata record' });
    await user.click(trigger);
    expect(screen.getByRole('dialog', { name: /TEST-1/ })).toBeTruthy();
    expect(screen.getByText('Stone')).toBeTruthy();
    expect(screen.getByText('MEASURED')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'mesh.glb' }).getAttribute('href')).toBe('/mesh.glb');
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close paradata record' }));
    await user.tab({ shift: true });
    expect(document.activeElement).toBe(screen.getByRole('link', { name: 'mesh.glb' }));
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close paradata record' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.activeElement).toBe(trigger);
    await user.click(trigger);
    await user.click(screen.getByRole('button', { name: 'Close paradata record' }));
    expect(screen.queryByRole('dialog')).toBeNull();
});
