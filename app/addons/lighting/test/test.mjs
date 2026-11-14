#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the lighting add-on's Node tests (0.8 SU.766, session `cad-addons-08`): the model, numbering and lists (t-model.mjs),
 * then the add-on in CadCraft through CadCraft's own loader (t-addon.mjs).
 *   node public_html/assets/apps/cadcraft/dev/addons/lighting/test/test.mjs [--verbose] [--only model|addon]
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const APP = path.resolve(ADDON, '../..');
const VERBOSE = process.argv.includes('--verbose');
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const EN = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
globalThis.__lxTest = { ok, section, near, load, mine, ADDON, APP, VERBOSE, EN };

for (const part of ['model', 'lux', 'addon']) {
  if (only && only !== part) continue;
  await import(pathToFileURL(path.join(HERE, 't-' + part + '.mjs')).href);
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
