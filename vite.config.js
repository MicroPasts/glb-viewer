import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const browserTarget = ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'];

export default defineConfig(({ command, mode }) => {
    const sharedCss = {
        postcss: resolve(import.meta.dirname, 'postcss.config.js'),
    };

    if (command === 'serve') {
        return {
            root: resolve(import.meta.dirname, 'demo'),
            publicDir: resolve(import.meta.dirname, 'demo/public'),
            plugins: [react()],
            css: sharedCss,
            server: {
                open: true,
            },
        };
    }

    if (mode === 'pages') {
        return {
            root: resolve(import.meta.dirname, 'demo'),
            publicDir: resolve(import.meta.dirname, 'demo/public'),
            base: './',
            plugins: [react()],
            css: sharedCss,
            build: {
                target: browserTarget,
                outDir: resolve(import.meta.dirname, 'docs'),
                emptyOutDir: true,
            },
        };
    }

    return {
        plugins: [react()],
        css: sharedCss,
        build: {
            target: browserTarget,
            lib: {
                entry: resolve(import.meta.dirname, 'src/index.js'),
                fileName: () => 'glb-model-viewer.js',
                formats: ['es'],
            },
            rolldownOptions: {
                external: [
                    'react',
                    'react-dom',
                    'react/jsx-runtime',
                    'three',
                    /^three\/examples\/jsm\/.*/,
                    'three-mesh-bvh',
                ],
            },
            cssCodeSplit: false,
        },
    };
});