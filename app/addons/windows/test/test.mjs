#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the windows add-on's Node tests (0.8 SU.874, session `fab-08`): the model (sizes by hand), the job (bars, glass, labels,
 * CSV), then the add-on in CadCraft through CadCraft's own loader. lib/cutlist/bars.js is tested by `node tools/cutlist/test.mjs`.
 *   node public_html/assets/apps/cadcraft/dev/addons/windows/test/test.mjs [--verbose] [--only model|job|addon]
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const APP = path.resolve(ADDON, '../..');
const VERBOSE = process.argv.includes('--verbose');
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const EN = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
globalThis.__winTest = { ok, section, near, mine, ADDON, APP, EN };

for (const part of ['model', 'job', 'addon']) {
  if (only && only !== part) continue;
  const f = path.join(HERE, 't-' + part + '.mjs');
  if (fs.existsSync(f)) await import(pathToFileURL(f).href);
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
