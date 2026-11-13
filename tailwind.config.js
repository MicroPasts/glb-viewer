// tailwind.config.js
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        resolve(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
        resolve(__dirname, 'demo/**/*.{html,js,jsx}'),
    ],
    important: '.gmv-root',
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '"Plus Jakarta Sans"',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'sans-serif',
                ],
                mono: [
                    '"JetBrains Mono"',
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'monospace',
                ],
            },
        },
    },
    plugins: [],
};