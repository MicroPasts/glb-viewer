// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
    const sharedCss = {
        postcss: resolve(__dirname, 'postcss.config.js'),
    };

    if (command === 'serve') {
        return {
            root: resolve(__dirname, 'docs'),
            publicDir: resolve(__dirname, 'docs/public'),
            plugins: [react()],
            css: sharedCss,
            server: {
                open: true,
            },
        };
    }

    if (mode === 'pages') {
        return {
            root: resolve(__dirname, 'docs'),
            publicDir: resolve(__dirname, 'docs/public'),
            base: './',
            plugins: [react()],
            css: sharedCss,
            build: {
                outDir: resolve(__dirname, 'docs'),
                emptyOutDir: false, // Prevents deleting docs/index.html & docs/main.jsx
            },
        };
    }

    return {
        plugins: [react()],
        css: sharedCss,
        build: {
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                fileName: () => 'glb-model-viewer.js',
                formats: ['es'],
            },
            rollupOptions: {
                external: [
                    'react',
                    'react-dom',
                    'react/jsx-runtime',
                    'three',
                    /^three\/examples\/jsm\/.*/,
                ],
            },
            cssCodeSplit: false,
        },
    };
});