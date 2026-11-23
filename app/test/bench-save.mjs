#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
/**
 * bench-save.mjs — perf-finish-11 (0.11 PERF.30): CadCraft's own save writers on a big drawing, in Node (no page): DXF R12 (writeDxf),
 * DXF 2000 (writeDxf2000) and DWG (saveDwg). For each: the time, the heap after, the output size, and whether it finished
 * (before 0.11: writeDxf2000 stopped at 1 M objects with "Invalid string length"). The text writers' output is checked against itself
 * as parts and as one string where one string can hold it.
 *   node --max-old-space-size=16000 public_html/assets/apps/cadcraft/dev/test/bench-save.mjs <file.dxf|dwg> [--only dxf,dxf2000,dwg]
 * Heavy at 1 M objects (several GB): run it on workstation11a (tools/gpu-remote/run.sh --wsl).
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// a big drawing needs a bigger heap than Node's default: run again with one (the runner on workstation11a starts plain `node`)
if (!process.execArgv.some((a) => a.startsWith('--max-old-space-size'))) {
  const r = spawnSync(process.execPath, ['--max-old-space-size=24000', '--expose-gc', fileURLToPath(import.meta.url), ...process.argv.slice(2)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}

const DEV = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const FILE = args.find((a) => /\.(dxf|dwg)$/i.test(a));
const only = (args.includes('--only') ? args[args.indexOf('--only') + 1] : 'dxf,dxf2000,dwg').split(',');
if (!FILE) { console.log('usage: bench-save.mjs <file.dxf|dwg>'); process.exit(2); }
const imp = (f) => import(path.join(DEV, f));
const { Doc } = await imp('doc.js');
const gb = () => +(process.memoryUsage().heapUsed / 1073741824).toFixed(2);
const bytes = new Uint8Array(fs.readFileSync(FILE));
let t = performance.now(), drawing;
if (/\.dxf$/i.test(FILE)) { const { dxfPartsOf } = await imp('dxf-open.js'), { readDxf } = await imp('dxf.js'); drawing = readDxf(dxfPartsOf(bytes).text); }
else { const { readDwg } = await imp('dwg/read.js'), { importDwg } = await imp('dwg-import.js'); drawing = importDwg(readDwg(bytes), { versionTag: new TextDecoder().decode(bytes.subarray(0, 6)) }); }
const doc = new Doc(); doc.load(drawing); drawing = null;
console.log(`bench-save ${path.basename(FILE)} ${doc.count()} objects; read + load ${Math.round(performance.now() - t)} ms, heap ${gb()} GB; ${os.hostname()} load ${os.loadavg().map((x) => x.toFixed(1)).join(' ')}`);
const res = [];
const run = async (name, fn) => {
  if (!only.includes(name)) return;
  if (global.gc) global.gc();
  const h0 = process.memoryUsage().heapUsed; let peak = h0;
  const iv = setInterval(() => { peak = Math.max(peak, process.memoryUsage().heapUsed); }, 50);
  t = performance.now();
  let r;
  try { r = await fn(); } catch (e) { r = { error: String(e.message || e).slice(0, 120) }; }
  clearInterval(iv); peak = Math.max(peak, process.memoryUsage().heapUsed);
  const row = { name, ms: Math.round(performance.now() - t), heapGB: gb(), peakGB: +(peak / 1073741824).toFixed(2), ...r };
  res.push(row); console.log('RESULT ' + JSON.stringify(row));
};
const textCheck = (r) => {
  const parts = r.chunks?.parts, size = parts ? parts.reduce((n, p) => n + p.length, 0) : r.text.length;
  let one = 'not built (too big for one string)';
  if (size < 5e8) { const s = r.text; one = parts ? (s === parts.join('') ? 'same as the parts' : 'DIFFERS') : 'string only'; }
  return { chars: size, parts: parts?.length ?? 0, oneString: one };
};
await run('dxf', async () => textCheck((await imp('dxf.js')).writeDxf(doc)));
await run('dxf2000', async () => textCheck((await imp('dxf2000.js')).writeDxf2000(doc)));
await run('dwg', async () => { const r = (await imp('dwg-save.js')).saveDwg(doc, { version: '2018' }); return { bytes: r.bytes.length }; });
fs.mkdirSync(path.join(DEV, '../../../../../tmp'), { recursive: true });
fs.writeFileSync(path.join(DEV, '../../../../../tmp/perf-finish-cad-save-' + path.basename(FILE) + '.json'), JSON.stringify({ file: path.basename(FILE), objects: doc.count(), host: os.hostname(), results: res }, null, 1));
