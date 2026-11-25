import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import postcss from 'postcss';
import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

test('Tailwind generates scoped viewer utilities and dark mode styles', async () => {
    const from = fileURLToPath(new URL('../src/style.css', import.meta.url));
    const css = await readFile(from, 'utf8');
    const result = await postcss([tailwind(), autoprefixer()]).process(css, { from });
    const rules = [];
    result.root.walkRules((rule) => rules.push(rule));

    assert.ok(rules.some((rule) => rule.selector === '.gmv-root .absolute'));
    assert.ok(rules.some((rule) => rule.selector.includes('.gmv-root .dark\\:bg-slate-950')
        && rule.selector.includes('.gmv-root.dark')));
    assert.ok(rules.some((rule) => rule.selector === '.gmv-root .font-sans'
        && rule.toString().includes('Plus Jakarta Sans')));
    assert.ok(rules.some((rule) => rule.selector.includes('.gmv-root .focus\\:outline-hidden')));
    assert.ok(!rules.some((rule) => rule.selector === '.absolute' || rule.selector.includes(':root')));
});
