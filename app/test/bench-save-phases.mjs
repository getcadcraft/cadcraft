#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bench-save-phases.mjs — perf-finish-11 (0.11 PERF.30): where the time of Save as DWG 2018 goes, in a real /lab/cadcraft page and in Node,
 * at 100 k / 200 k / 300 k objects (entities-100k.dxf, its objects repeated 1, 2 or 3 times). Phases: the model built in slices on the page
 * (saveDwgTiming: buildCpuMs, buildWallMs), packing and posting it to the worker (dwgWriteTiming: packMs, postMs), unpacking and writeDwg in
 * the worker (unpackMs, writeMs), the whole write as the page sees it (writeWallMs), the report (tailCpuMs), and a Blob of the bytes. Node runs
 * the same saveDwgAsync without a worker (writeDwg on its thread). Run as root on the VPS (one Chromium, nice).
 *   node public_html/assets/apps/cadcraft/dev/test/bench-save-phases.mjs [--times 1,2,3] [--node-only] [--page-only]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const DEV = path.join(REPO, 'public_html/assets/apps/cadcraft/dev');
const FILE = path.join(REPO, 'testfiles/generated/scale10/entities-100k.dxf');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const TIMES = flag('--times', '1,2,3').split(',').map(Number);
const R = (o) => Object.fromEntries(Object.entries(o || {}).map(([k, v]) => [k, typeof v === 'number' ? Math.round(v) : v]));
// the drawing repeated k times (handles and keys dropped from the copies: each object keeps its own)
const repeat = (d, k) => { const base = d.entities; d.entities = []; for (let r = 0; r < k; r++) for (const e of base) { const c = r ? structuredClone(e) : e; if (r) { delete c.handle; delete c.key; } d.entities.push(c); } return d; };
const rows = [];
if (!args.includes('--page-only')) {
  const { dxfPartsOf } = await import(path.join(DEV, 'dxf-open.js')), { readDxf } = await import(path.join(DEV, 'dxf.js'));
  const { Doc } = await import(path.join(DEV, 'doc.js')), S = await import(path.join(DEV, 'dwg-save.js'));
  for (const k of TIMES) {
    let d = new Doc(); d.load(repeat(readDxf(dxfPartsOf(new Uint8Array(fs.readFileSync(FILE))).text), k));
    if (args.includes('--via-dwg')) { const { readDwg } = await import(path.join(DEV, 'dwg/read.js')), { importDwg } = await import(path.join(DEV, 'dwg-import.js')); const b = S.saveDwg(d, { version: '2018' }).bytes; d = new Doc(); d.load(importDwg(readDwg(b), { versionTag: 'AC1032' })); }
    const a = performance.now(); const r = await S.saveDwgAsync(d, { version: '2018' }); const ms = performance.now() - a;
    const row = { where: 'node', viaDwg: args.includes('--via-dwg'), objects: d.count(), totalMs: Math.round(ms), bytes: r.bytes.length, ...R(S.saveDwgTiming()) };
    rows.push(row); console.log(JSON.stringify(row));
  }
}
if (!args.includes('--node-only')) {
  const { chromium } = await import('playwright-core');
  const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
  const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
  const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
  const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(REPO, 'tools/cadcraft-test/admin.php'), 'session'], { encoding: 'utf8' }));
  const browser = await chromium.launch({ executablePath: exe, args: ['--enable-precise-memory-info', '--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--js-flags=--max-old-space-size=6144'] });
  try {
    for (const k of TIMES) {
      const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 }, serviceWorkers: 'block' });
      await ctx.addCookies([{ name: admin.name, value: admin.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
      const page = await ctx.newPage(); page.setDefaultTimeout(900000);
      await page.goto('https://getcadcraft.com/lab/cadcraft', { waitUntil: 'networkidle' });
      await page.waitForFunction(() => !!window.cadcraft);
      await page.evaluate(() => { const i = document.createElement('input'); i.type = 'file'; i.id = 'ph-file'; i.hidden = true; document.body.append(i); });
      await page.setInputFiles('#ph-file', FILE);
      const TRACE = flag('--trace', null);
      let cdp = null;
      if (TRACE) { await browser.startTracing(page, { path: TRACE + '.trace.json', categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'toplevel'] }); cdp = await ctx.newCDPSession(page); await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 500 }); await cdp.send('Profiler.start'); }
      // the workers' heaps (CDP): the DWG writer appears when the save starts
      const wc = await ctx.newCDPSession(page); await wc.send('Target.setDiscoverTargets', { discover: true });
      const ws = new Map(); let mid = 1; const wait = new Map();
      wc.on('Target.receivedMessageFromTarget', (e) => { try { const m = JSON.parse(e.message); const f = wait.get(m.id); if (f) { wait.delete(m.id); f(m.result); } } catch { /* */ } });
      let sampling = true; const pagePeak = { v: 0 };
      const sampler = (async () => { while (sampling) {
        try { const h = await wc.send('Runtime.getHeapUsage'); pagePeak.v = Math.max(pagePeak.v, h.usedSize); } catch { /* */ }
        try { const { targetInfos } = await wc.send('Target.getTargets'); for (const t of targetInfos) if (t.type === 'worker' && !ws.has(t.targetId)) { const { sessionId } = await wc.send('Target.attachToTarget', { targetId: t.targetId, flatten: false }); ws.set(t.targetId, { sessionId, peak: 0, url: t.url }); }
          for (const w of ws.values()) { const h = await new Promise((res) => { const id = mid++; wait.set(id, res); wc.send('Target.sendMessageToTarget', { sessionId: w.sessionId, message: JSON.stringify({ id, method: 'Runtime.getHeapUsage' }) }).catch(() => res(null)); setTimeout(() => { if (wait.delete(id)) res(null); }, 1500); }); if (h?.usedSize) w.peak = Math.max(w.peak, h.usedSize); } } catch { /* */ }
        await new Promise((res) => setTimeout(res, 250)); } })();
      const row = await page.evaluate(async ({ k, rep, consume, viaDwg }) => {
        const repeat = eval(rep);
        const bytes = new Uint8Array(await document.getElementById('ph-file').files[0].arrayBuffer());
        const O = await import('/assets/apps/cadcraft/dev/dxf-open.js'), D = await import('/assets/apps/cadcraft/dev/dxf.js');
        const { Doc } = await import('/assets/apps/cadcraft/dev/doc.js'), S = await import('/assets/apps/cadcraft/dev/dwg-save.js'), W = await import('/assets/apps/cadcraft/dev/dwg-write-async.js');
        let d = new Doc(); d.load(repeat(D.readDxf(O.dxfPartsOf(bytes).text), k));
        if (viaDwg) {   // the same drawing as a DWG another time opens it: saved once, read back, imported
          const R = await import('/assets/apps/cadcraft/dev/dwg/read.js'), I = await import('/assets/apps/cadcraft/dev/dwg-import.js');
          const b = S.saveDwg(d, { version: '2018' }).bytes; d = new Doc(); d.load(I.importDwg(R.readDwg(b), { versionTag: 'AC1032' }));
          await new Promise((res) => setTimeout(res, 200));
        }
        const lt = []; const ob = new PerformanceObserver((l) => { for (const e of l.getEntries()) lt.push(Math.round(e.duration)); }); ob.observe({ type: 'longtask' });
        const mem = () => performance.memory?.usedJSHeapSize || 0; let peak = mem(); const heap0 = peak; const iv = setInterval(() => { peak = Math.max(peak, mem()); }, 100);
        const a = performance.now(); const r = await S.saveDwgAsync(d, { version: '2018' }, consume ? {} : { consume: false }); const ms = performance.now() - a;
        clearInterval(iv);
        const b = performance.now(); const blob = new Blob([r.bytes], { type: 'application/acad' }); const url = URL.createObjectURL(blob); URL.revokeObjectURL(url); const blobMs = performance.now() - b;
        await new Promise((res) => setTimeout(res, 50)); ob.disconnect();
        const R = (o) => Object.fromEntries(Object.entries(o || {}).map(([x, v]) => [x, typeof v === 'number' ? Math.round(v) : v]));
        return { where: 'page', objects: d.count(), totalMs: Math.round(ms), bytes: r.bytes.length, ...R(S.saveDwgTiming()), ...R(W.dwgWriteTiming()), how: W.dwgWriteState(), heapBeforeMB: Math.round(heap0 / 1048576), heapPeakOverMB: Math.round((peak - heap0) / 1048576), handlesKeys: Object.keys(r.report.handles || {}).length, blobMs: Math.round(blobMs), longest: lt.length ? Math.max(...lt) : 0 };
      }, { k, rep: repeat.toString(), consume: !args.includes('--no-consume'), viaDwg: args.includes('--via-dwg') });
      sampling = false; await sampler;
      row.cdpPagePeakMB = Math.round(pagePeak.v / 1048576); row.workerPeakMB = [...ws.values()].map((w) => Math.round(w.peak / 1048576)); row.consume = !args.includes('--no-consume'); row.viaDwg = args.includes('--via-dwg');
      if (TRACE) { const { profile } = await cdp.send('Profiler.stop'); fs.writeFileSync(TRACE + '.cpuprofile', JSON.stringify(profile)); await browser.stopTracing(); }
      rows.push(row); console.log(JSON.stringify(row));
      await ctx.close();
    }
  } finally { await browser.close(); }
}
const out = path.join(REPO, 'docs/results/0.11/perf-finish-11-cad-save-phases.jsonl');
fs.appendFileSync(out, rows.map((r) => JSON.stringify({ ...r, at: new Date().toISOString(), load: os.loadavg()[0].toFixed(1) })).join('\n') + '\n');
