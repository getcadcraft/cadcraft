#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the cabinet add-on's Node tests (0.8 SU.1035, session `sx-cabinet`): the cabinet model (t-model.mjs), the run
 * along a wall and the drawings (t-draw.mjs), then the add-on in CadCraft through CadCraft's own loader (t-addon.mjs).
 * lib/cutlist itself is tested by `node tools/cutlist/test.mjs`.
 *   node public_html/assets/apps/cadcraft/dev/addons/cabinet/test/test.mjs [--verbose] [--only model|draw|addon]
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const APP = path.resolve(ADDON, '../..');
const ROOT = path.resolve(APP, '../../../../..');
const VERBOSE = process.argv.includes('--verbose');
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const EN = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
globalThis.__cabTest = { ok, section, near, load, mine, ADDON, APP, ROOT, VERBOSE, EN };

for (const part of ['model', 'draw', 'hardware', 'addon']) {
  if (only && only !== part) continue;
  const f = path.join(HERE, 't-' + part + '.mjs');
  if (fs.existsSync(f)) await import(pathToFileURL(f).href);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
