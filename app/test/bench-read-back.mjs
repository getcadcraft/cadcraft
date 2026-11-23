#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
/**
 * bench-read-back.mjs — perf-finish-11 (0.11 PERF.30): reading a DWG CadCraft wrote, in Node. Either files given on the command line, or
 * entities-100k.dxf repeated 1, 2, 3 times, saved as DWG 2018 by saveDwg and read again. Per file: readDwg time, importDwg + doc.load time,
 * the object count, the heap; --profile <s> writes a CPU profile of the read after s seconds (or at its end) to tmp/.
 *   node public_html/assets/apps/cadcraft/dev/test/bench-read-back.mjs [--times 1,2,3] [file.dwg …] [--profile 90]
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import inspector from 'node:inspector';

if (!process.execArgv.some((a) => a.startsWith('--max-old-space-size'))) {
  const r = spawnSync(process.execPath, ['--max-old-space-size=24000', fileURLToPath(import.meta.url), ...process.argv.slice(2)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}
const DEV = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = path.resolve(DEV, '../../../../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const PROFILE = flag('--profile', null);
const files = args.filter((a) => /\.dwg$/i.test(a)).map((f) => path.resolve(REPO, f));
const imp = (f) => import(path.join(DEV, f));
const { readDwg } = await imp('dwg/read.js'), { importDwg } = await imp('dwg-import.js'), { Doc } = await imp('doc.js');
const gb = () => +(process.memoryUsage().heapUsed / 1073741824).toFixed(2);
console.log(`bench-read-back ${os.hostname()} load ${os.loadavg().map((x) => x.toFixed(1)).join(' ')}`);
const sess = PROFILE ? new inspector.Session() : null;
const post = (m, p = {}) => new Promise((res, rej) => sess.post(m, p, (e, r) => (e ? rej(e) : res(r))));
async function readOne(label, bytes) {
  if (sess) { sess.connect(); await post('Profiler.enable'); await post('Profiler.start'); }
  let dumped = false;
  const dump = async (why) => { if (!sess || dumped) return; dumped = true; const { profile } = await post('Profiler.stop'); const f = path.join(REPO, 'tmp', 'perf-finish-cad-read-' + label.replace(/[^\w.-]/g, '_') + '.cpuprofile'); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(profile)); console.log('profile (' + why + ') ' + f); };
  // the read is synchronous: a profile taken "after s seconds" needs a worker-free timer, so the read runs in slices of nothing — instead the
  // profile simply covers the whole read; with --profile the process also stops after s seconds via an external timeout in the caller
  const a = performance.now(); const model = readDwg(bytes); const readMs = performance.now() - a; const readHeap = gb();
  await dump('end of read');
  const b = performance.now(); const d = new Doc(); d.load(importDwg(model, { versionTag: new TextDecoder().decode(bytes.subarray(0, 6)) })); const loadMs = performance.now() - b;
  const row = { file: label, mb: +(bytes.length / 1048576).toFixed(1), readMs: Math.round(readMs), readHeapGB: readHeap, importLoadMs: Math.round(loadMs), objects: d.count(), heapGB: gb(), maxRssGB: +(process.resourceUsage().maxRSS / 1048576).toFixed(2) };
  console.log('RESULT ' + JSON.stringify(row));
  return row;
}
const rows = [];
for (const f of files) rows.push(await readOne(path.basename(f), new Uint8Array(fs.readFileSync(f))));
if (!files.length || args.includes('--times')) {
  const { dxfPartsOf } = await imp('dxf-open.js'), { readDxf } = await imp('dxf.js'), { saveDwg } = await imp('dwg-save.js');
  for (const k of flag('--times', '1,2,3').split(',').map(Number)) {
    const dr = readDxf(dxfPartsOf(new Uint8Array(fs.readFileSync(path.join(REPO, 'testfiles/generated/scale10/entities-100k.dxf')))).text);
    const base = dr.entities; dr.entities = []; for (let r = 0; r < k; r++) for (const e of base) { const c = r ? structuredClone(e) : e; if (r) { delete c.handle; delete c.key; } dr.entities.push(c); }
    const d = new Doc(); d.load(dr);
    const a = performance.now(); const bytes = saveDwg(d, { version: '2018' }).bytes; const saveMs = performance.now() - a;
    if (args.includes('--own')) {   // the read alone, in a process of its own: its heap and peak RSS are the reader's
      const f = path.join(REPO, 'tmp', 'perf-finish-cad-read-own-' + d.count() + '.dwg'); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, bytes);
      const c = spawnSync(process.execPath, ['--max-old-space-size=24000', fileURLToPath(import.meta.url), f], { encoding: 'utf8' });
      const line = (c.stdout || '').split('\n').find((l) => l.startsWith('RESULT ')); fs.unlinkSync(f);
      const row = line ? JSON.parse(line.slice(7)) : { file: 'ours-' + d.count(), failed: (c.stderr || '').slice(-300) };
      row.saveMs = Math.round(saveMs); row.wrote = d.count(); console.log('RESULT ' + JSON.stringify(row)); rows.push(row); continue;
    }
    const row = await readOne('ours-' + d.count(), bytes); row.saveMs = Math.round(saveMs); row.wrote = d.count(); rows.push(row);
  }
}
fs.mkdirSync(path.join(REPO, 'tmp'), { recursive: true });
fs.writeFileSync(path.join(REPO, 'tmp', 'perf-finish-cad-read-back.json'), JSON.stringify({ host: os.hostname(), rows }, null, 1));
