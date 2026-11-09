#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * make-sample.mjs — write the Electrical sample project (sample.mjs) as DWG 2018 and DXF 2000.
 *   node public_html/assets/apps/cadcraft/dev/addons/electrical/test/make-sample.mjs --out <dir> [--std iec|ansi]
 * Writes <dir>/electrical-sample.dwg and .dxf (for fixtures/electrical/; the folder's owner places them).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// 2026-11-09: the drawing model gives each entity a random key (file-keys.js newKey: CCKEY), so two runs wrote different bytes and
// bin/test-fixtures.mjs could not check that the generator rebuilds the committed fixture. A seeded source makes the keys the same every run.
{
  let a = 0x2f6e2b1;
  const rnd = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  Math.random = rnd;
  Object.defineProperty(globalThis, 'crypto', { configurable: true, value: { getRandomValues: (b) => { for (let i = 0; i < b.length; i++) b[i] = Math.floor(rnd() * 256); return b; } } });
}
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..'), APP = path.resolve(ADDON, '../..');
const args = process.argv.slice(2);
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const out = arg('--out', null);
if (!out) { console.error('Usage: make-sample.mjs --out <dir> [--std iec|ansi]'); process.exit(1); }
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const Text = await mine('lib/text.js');
Text.setT(Text.lookupFrom(JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'))));
const { Doc } = await load('doc.js');
const L = { Doc, S: await mine('lib/symbols.js'), PJ: await mine('lib/project.js'), M: await mine('lib/model.js'), W: await mine('lib/wires.js'), D: await mine('lib/devices.js'), RP: await mine('lib/reports.js'), IN: await mine('lib/install.js'), std: arg('--std', 'iec') };
const { buildSample } = await mine('test/sample.mjs');
const doc = await buildSample(L);
const { saveDwg } = await load('dwg-save.js');
const { writeDxf2000 } = await load('dxf2000.js');
fs.mkdirSync(out, { recursive: true });
const dwg = saveDwg(doc, { version: '2018', created: new Date('2026-10-13T00:00:00Z') });
fs.writeFileSync(path.join(out, 'electrical-sample.dwg'), dwg.bytes);
const dxf = writeDxf2000(doc);
fs.writeFileSync(path.join(out, 'electrical-sample.dxf'), dxf.text ?? dxf, 'latin1');
console.log('wrote ' + path.join(out, 'electrical-sample.dwg') + ' (' + dwg.bytes.length + ' bytes) and .dxf');
