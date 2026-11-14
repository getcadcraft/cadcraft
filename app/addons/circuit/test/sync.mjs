#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sync.mjs — lib/em/ and lib/schematic/ are canonical (0.8 XE.10, XE.1); this add-on carries byte-identical copies in lib/em/ and lib/schematic/.
 * Nobody edits a copy. Run from anywhere:  node public_html/assets/apps/cadcraft/dev/addons/circuit/test/sync.mjs [--check]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..'), ROOT = path.resolve(ADDON, '../../../../../../..');
const check = process.argv.includes('--check');
let differ = 0;
for (const part of ['em', 'schematic']) {
  const from = path.join(ROOT, 'lib', part), to = path.join(ADDON, 'lib', part);
  fs.mkdirSync(to, { recursive: true });
  for (const n of fs.readdirSync(from).filter((f) => /\.js$/.test(f)).sort()) {
    const a = fs.readFileSync(path.join(from, n)), p = path.join(to, n);
    const same = fs.existsSync(p) && fs.readFileSync(p).equals(a);
    if (!same) { differ++; console.log((check ? 'differs: ' : 'copied: ') + part + '/' + n); if (!check) fs.writeFileSync(p, a); }
  }
}
if (check && differ) process.exit(1);
console.log(differ ? (check ? differ + ' differ' : differ + ' copied') : 'in sync');
