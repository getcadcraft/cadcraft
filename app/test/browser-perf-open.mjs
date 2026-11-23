#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-perf-open.mjs — perf-finish-11 (0.11 PERF.9 / PERF.30): the sliced open and the DXF worker in the real /lab/cadcraft.
 *   1. The DXF worker reads the same drawing as the page's own reader: every DXF fixture (forced into the worker) and the big files.
 *   2. Opening a file as a person does (the [data-file] input): the drawing that is open equals the one read and loaded at once on the
 *      page, the screen shows the same pixels as a picture built at once (REGEN), and no task on the page's thread passes the limit
 *      (a Chrome trace of the open; the 3D faces welded when the page is idle are reported apart: that is not the open).
 * One Chromium, nice -n 10. Run as root (tools/cadcraft-test/admin.php). Results: docs/results/0.11/perf-finish-11-cad-open.json.
 *   node public_html/assets/apps/cadcraft/dev/test/browser-perf-open.mjs [--limit 200] [--files a.dxf,b.dwg] [--no-fixtures]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const LIMIT = +flag('--limit', 200);
const BIG = flag('--files', 'testfiles/generated/scale10/entities-100k.dxf,testfiles/generated/scale11/Plans.dwg').split(',').filter(Boolean).map((f) => path.resolve(REPO, f));
const FIXTURES = args.includes('--no-fixtures') ? [] : execFileSync('find', [path.join(REPO, 'fixtures'), '-name', '*.dxf', '-size', '-8M'], { encoding: 'utf8' }).split('\n').filter((f) => f && !/\s/.test(f));
const { chromium } = await import('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(REPO, 'tools/cadcraft-test/admin.php'), 'session'], { encoding: 'utf8' }));
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--js-flags=--max-old-space-size=6144'] });
let pass = 0, fail = 0;
const fails = [], results = { at: new Date().toISOString(), load: os.loadavg().map((x) => +x.toFixed(1)), limit: LIMIT, worker: [], open: [] };
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; fails.push(m + (extra ? ' — ' + extra : '')); console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };

async function freshPage() {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block' });
  await ctx.addCookies([{ name: admin.name, value: admin.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
  await ctx.addInitScript(() => { try { localStorage.setItem('cadcraft.tour', 'skipped'); localStorage.setItem('cc-newhere', 'skipped'); } catch { /* */ } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(300000);
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('https://getcadcraft.com/lab/cadcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.cadcraft);
  await page.evaluate(() => { const i = document.createElement('input'); i.type = 'file'; i.id = 'pf-file'; i.hidden = true; document.body.append(i); });
  return { ctx, page, errors };
}
// a digest of plain data (Maps and Sets as lists), the same in both reads when the drawings are the same
const DIGEST = `(o) => { const s = JSON.stringify(o, (k, v) => v instanceof Map ? ['$Map', ...v] : v instanceof Set ? ['$Set', ...v] : (typeof v === 'number' && Object.is(v, -0)) ? '$-0' : v === undefined ? '$u' : v);
  let h1 = 0x811c9dc5, h2 = 0; for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619); h2 = (h2 * 31 + c) | 0; } return (h1 >>> 0).toString(16) + (h2 >>> 0).toString(16) + ':' + s.length; }`;

// ---- 1. the worker reads what the page reads ----
{
  console.log('DXF worker = the page\'s reader');
  const { ctx, page, errors } = await freshPage();
  for (const f of [...FIXTURES, ...BIG.filter((f) => /\.dxf$/i.test(f))]) {
    await page.setInputFiles('#pf-file', f);
    const r = await page.evaluate(async (dg) => {
      const digest = eval(dg);
      const bytes = new Uint8Array(await document.getElementById('pf-file').files[0].arrayBuffer());
      const A = await import('/assets/apps/cadcraft/dev/dxf-read-async.js');
      let main, work, err1 = null, err2 = null;
      try { main = await A.readDxfAsync(bytes, { worker: false }); } catch (e) { err1 = e.message; }
      const t0 = performance.now();
      try { work = await A.readDxfAsync(bytes, { from: 0 }); } catch (e) { err2 = e.message; }
      return { ms: Math.round(performance.now() - t0), how: A.dxfWorkerState(), a: main ? digest(main) : 'error: ' + err1, b: work ? digest(work) : 'error: ' + err2, n: main?.drawing?.entities?.length ?? null };
    }, DIGEST);
    results.worker.push({ file: path.relative(REPO, f), ...r });
    ok(r.a === r.b && r.how === 'worker', path.basename(f) + ' (' + r.n + ' objects, worker ' + r.ms + ' ms)', r.a + ' vs ' + r.b + ' ' + r.how);
  }
  // DWG: read AND imported in the worker (readDwgDrawingAsync) = readDwg + importDwg on the page
  const DWGS = [...execFileSync('find', [path.join(REPO, 'fixtures'), '-name', '*.dwg', '-size', '-8M'], { encoding: 'utf8' }).split('\n').filter((f) => f && !/\s/.test(f)), ...BIG.filter((f) => /\.dwg$/i.test(f))];
  for (const f of DWGS) {
    await page.setInputFiles('#pf-file', f);
    const r = await page.evaluate(async (dg) => {
      const digest = eval(dg);
      const bytes = new Uint8Array(await document.getElementById('pf-file').files[0].arrayBuffer());
      const A = await import('/assets/apps/cadcraft/dev/dxf-read-async.js'), R = await import('/assets/apps/cadcraft/dev/dwg/read.js'), I = await import('/assets/apps/cadcraft/dev/dwg-import.js');
      const tag = new TextDecoder().decode(bytes.subarray(0, 6));
      let a, b, e1 = null, e2 = null;
      try { a = I.importDwg(R.readDwg(bytes), { versionTag: tag }); } catch (e) { e1 = e.message; }
      try { b = (await A.readDwgDrawingAsync(bytes, { versionTag: tag, from: 0 }))?.drawing; } catch (e) { e2 = (e.unreadable ? 'unreadable: ' : '') + e.message; }
      return { a: a ? digest(a) : 'error: ' + e1, b: b ? digest(b) : 'error: ' + e2, n: a?.entities?.length ?? null };
    }, DIGEST);
    results.worker.push({ file: path.relative(REPO, f), ...r });
    ok(r.a === r.b || (r.a.startsWith('error') && r.b.startsWith('error')), path.basename(f) + ' (DWG in the worker, ' + r.n + ' objects)', r.a + ' vs ' + r.b);
  }
  ok(!errors.length, 'no page errors', errors.join(' | '));
  await ctx.close();
}

// ---- 2. opening as a person does ----
for (const f of BIG) {
  console.log('Open ' + path.basename(f));
  const { ctx, page, errors } = await freshPage();
  const tracePath = path.join(os.tmpdir(), 'pf-open-' + process.pid + '.json');
  await browser.startTracing(page, { path: tracePath, categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'toplevel', 'blink.user_timing'] });
  const t0 = Date.now();
  await page.setInputFiles('[data-file]', f);
  await page.waitForFunction((n) => window.cadcraft.doc.meta.source === n && /Opened|objects/.test(document.querySelector('[data-history]')?.textContent || ''), path.basename(f));
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const wall = Date.now() - t0;
  // the idle 3D weld (model3d.js settleWhenIdle) is its own task after the drawing is on screen: let it run now, inside the trace, and name it
  await browser.stopTracing();
  const weld = await page.evaluate(() => { const m = window.cadcraft.doc._m3d; if (!m?.facesWaiting) return null; const n = m.facesWaiting.length, a = performance.now(); window.cadcraft.doc.model3d; return { faces: n, ms: Math.round(performance.now() - a) }; });
  const ev = JSON.parse(fs.readFileSync(tracePath, 'utf8')).traceEvents; fs.unlinkSync(tracePath);
  const cnt = {}; for (const e of ev) if (e.name === 'TimerFire' || e.name === 'FireAnimationFrame') cnt[e.tid] = (cnt[e.tid] || 0) + 1;
  const tid = +Object.entries(cnt).sort((a, b) => b[1] - a[1])[0][0];
  const ws = Infinity;   // the trace stops before the test welds the 3D faces itself
  const all = ev.filter((e) => e.name === 'RunTask' && e.ph === 'X' && e.tid === tid && e.ts < ws);
  // a task that ran an idle callback holding the 3D weld (model3d.js settleWhenIdle) is not the open: counted apart
  const idle = ev.filter((e) => e.name === 'FireIdleCallback' && e.tid === tid);
  const isIdle = (t) => idle.some((i) => i.ts >= t.ts && i.ts <= t.ts + t.dur);
  const tasks = all.filter((t) => !isIdle(t)).map((e) => Math.round(e.dur / 1000)).sort((a, b) => b - a);
  const idleTasks = all.filter(isIdle).map((e) => Math.round(e.dur / 1000)).sort((a, b) => b - a);
  // the drawing equals the one read and loaded at once; the screen equals a picture built at once
  const same = await page.evaluate(async ({ dg, name }) => {
    const digest = eval(dg), cad = window.cadcraft, doc = cad.doc;
    const st = (d) => digest({ m: [...d.model.values()], l: d.layouts.map((x) => [x.name, [...x.entities.values()]]), b: [...d.blocks], ly: [...d.layers] });
    const bytes = new Uint8Array(await document.getElementById('pf-file').files?.[0]?.arrayBuffer?.() ?? new ArrayBuffer(0));
    return { st: st(doc), bytes: bytes.length, name };
  }, { dg: DIGEST, name: path.basename(f) });
  await page.setInputFiles('#pf-file', f);
  const ref = await page.evaluate(async (dg) => {
    const digest = eval(dg);
    const bytes = new Uint8Array(await document.getElementById('pf-file').files[0].arrayBuffer());
    const { Doc } = await import('/assets/apps/cadcraft/dev/doc.js');
    let drawing;
    if (bytes[0] === 0x41 && bytes[1] === 0x43) {   // "AC": a DWG
      const R = await import('/assets/apps/cadcraft/dev/dwg/read.js'), I = await import('/assets/apps/cadcraft/dev/dwg-import.js');
      drawing = I.importDwg(R.readDwg(bytes), { versionTag: new TextDecoder().decode(bytes.subarray(0, 6)) });
    } else {
      const O = await import('/assets/apps/cadcraft/dev/dxf-open.js'), D = await import('/assets/apps/cadcraft/dev/dxf.js');
      drawing = D.readDxf(O.dxfPartsOf(bytes).text);
    }
    const d = new Doc(); d.load({ ...drawing, meta: { ...drawing.meta } });
    const st = digest({ m: [...d.model.values()], l: d.layouts.map((x) => [x.name, [...x.entities.values()]]), b: [...d.blocks], ly: [...d.layers] });
    // pixels: what the open left on screen, then the same view with its picture built at once (REGEN)
    const v = window.cadcraft.view, px = () => { const c = v.base, g = c.getContext('2d'), a = g.getImageData(0, 0, c.width, c.height).data; let h = 0x811c9dc5; for (let i = 0; i < a.length; i += 7) h = Math.imul(h ^ a[i], 16777619); return (h >>> 0).toString(16); };
    v.renderBase(); const p1 = px();
    v.regen(true); v.renderBase(); const p2 = px();
    return { st, p1, p2 };
  }, DIGEST);
  const r = { file: path.relative(REPO, f), wall, objects: await page.evaluate(() => window.cadcraft.doc.count()), longest: tasks[0] || 0, top: tasks.slice(0, 6), over: tasks.filter((t) => t > LIMIT).length, tasksSeen: all.length, idleWeldTasks: idleTasks.slice(0, 3), weld };
  results.open.push({ ...r, sameDrawing: same.st === ref.st, samePixels: ref.p1 === ref.p2 });
  console.log('  ' + JSON.stringify(r));
  ok(same.st === ref.st, path.basename(f) + ': the open drawing equals a read + load at once', same.st + ' vs ' + ref.st);
  ok(ref.p1 === ref.p2, path.basename(f) + ': the screen equals a picture built at once', ref.p1 + ' vs ' + ref.p2);
  ok(all.length > 20, path.basename(f) + ': the trace saw the page\'s tasks (' + all.length + ')');
  ok(r.longest <= LIMIT, path.basename(f) + ': no task on the page over ' + LIMIT + ' ms while opening (longest ' + r.longest + ' ms)', 'tasks ' + r.top.join(', '));
  ok(!errors.length, path.basename(f) + ': no page errors', errors.join(' | '));
  await ctx.close();
}
// ---- 3. Save as DWG off the page's thread (saveDwgAsync): the same drawing read back, no long task while it runs ----
for (const f of BIG.filter((x) => /\.dxf$/i.test(x))) {
  console.log('Save as DWG ' + path.basename(f));
  const { ctx, page, errors } = await freshPage();
  await page.setInputFiles('[data-file]', f);
  await page.waitForFunction((n) => window.cadcraft.doc.meta.source === n && /Opened|objects/.test(document.querySelector('[data-history]')?.textContent || ''), path.basename(f));
  await page.waitForTimeout(1500);
  const r = await page.evaluate(async (dg) => {
    const digest = eval(dg), doc = window.cadcraft.doc;
    const S = await import('/assets/apps/cadcraft/dev/dwg-save.js'), W = await import('/assets/apps/cadcraft/dev/dwg-write-async.js');
    const R = await import('/assets/apps/cadcraft/dev/dwg/read.js'), I = await import('/assets/apps/cadcraft/dev/dwg-import.js'), { Doc } = await import('/assets/apps/cadcraft/dev/doc.js');
    const created = new Date('2026-01-02T03:04:05Z');
    let a = performance.now(); const sync = S.saveDwg(doc, { version: '2018', created }); const syncMs = performance.now() - a;
    await new Promise((res) => setTimeout(res, 100));   // the long task of the save on the page ends (and is reported) before the observer starts
    const lt = []; const ob = new PerformanceObserver((l) => { for (const e of l.getEntries()) lt.push(Math.round(e.duration)); }); ob.observe({ type: 'longtask' });
    a = performance.now(); const asy = await S.saveDwgAsync(doc, { version: '2018', created }); const asyncMs = performance.now() - a;
    await new Promise((res) => setTimeout(res, 50)); ob.disconnect();
    const back = (bytes) => { const d = new Doc(); d.load(I.importDwg(R.readDwg(bytes), { versionTag: 'AC1032' })); return digest({ m: [...d.model.values()], b: [...d.blocks], ly: [...d.layers] }); };
    return { syncMs: Math.round(syncMs), asyncMs: Math.round(asyncMs), how: W.dwgWriteState(), sizes: [sync.bytes.length, asy.bytes.length], same: back(sync.bytes) === back(asy.bytes), notes: JSON.stringify(sync.report.notes) === JSON.stringify(asy.report.notes), longest: lt.length ? Math.max(...lt) : 0, tasks: lt.sort((x, y) => y - x).slice(0, 5) };
  }, DIGEST);
  console.log('  ' + JSON.stringify(r));
  results.save = [...(results.save || []), { file: path.relative(REPO, f), ...r }];
  ok(r.how === 'worker', path.basename(f) + ': written in the worker');
  ok(r.same && r.notes && Math.abs(r.sizes[0] - r.sizes[1]) < 1024, path.basename(f) + ': the DWG reads back as the same drawing, same notes (sizes ' + r.sizes.join(' / ') + ': the file\'s random GUIDs compress differently)', JSON.stringify(r));
  ok(r.longest <= LIMIT, path.basename(f) + ': no task over ' + LIMIT + ' ms while saving (longest ' + r.longest + ' ms; on the page it was one task of ' + r.syncMs + ' ms)', r.tasks.join(', '));
  ok(!errors.length, path.basename(f) + ': no page errors (save)', errors.join(' | '));
  await ctx.close();
}
// ---- 4. A DWG writer worker that stops: the save says why instead of waiting forever, and the next save works ----
if (!args.includes('--no-kill')) {
  console.log('The DWG writer worker stops');
  const { ctx, page, errors } = await freshPage();
  await page.setInputFiles('#pf-file', path.join(REPO, 'testfiles/generated/scale10/entities-100k.dxf'));
  const r = await page.evaluate(async () => {
    const bytes = new Uint8Array(await document.getElementById('pf-file').files[0].arrayBuffer());
    const O = await import('/assets/apps/cadcraft/dev/dxf-open.js'), D = await import('/assets/apps/cadcraft/dev/dxf.js');
    const { Doc } = await import('/assets/apps/cadcraft/dev/doc.js'), S = await import('/assets/apps/cadcraft/dev/dwg-save.js');
    const d = new Doc(); d.load(D.readDxf(O.dxfPartsOf(bytes).text));
    const tryIt = async (o) => { const a = performance.now(); try { await S.saveDwgAsync(d, { version: '2018' }, o); return { ok: true, s: Math.round((performance.now() - a) / 100) / 10 }; } catch (e) { return { ok: false, name: e.name, why: e.message, s: Math.round((performance.now() - a) / 100) / 10 }; } };
    const silent = await tryIt({ test: 'close', writeMs: 5000 });   // closes itself without a word, as one stopped for memory
    const thrown = await tryIt({ test: 'throw' });                   // an uncaught error in the worker
    const after = await tryIt({});                                   // a new worker, a normal save
    return { silent, thrown, after };
  });
  console.log('  ' + JSON.stringify(r));
  results.workerStops = r;
  ok(!r.silent.ok && r.silent.name === 'DwgWriterStopped' && /no answer for 5 seconds/.test(r.silent.why) && r.silent.s < 15, 'a silent worker: the save fails within 15 s and says why (' + r.silent.s + ' s: ' + r.silent.why + ')');
  ok(!r.thrown.ok && r.thrown.name === 'DwgWriterStopped' && /stopped while writing/.test(r.thrown.why), 'a worker error: the save fails and says why (' + r.thrown.why + ')');
  ok(r.after.ok, 'the next save starts a new worker and works (' + r.after.s + ' s)');
  ok(!errors.length, 'no page errors (worker stops)', errors.join(' | '));
  await ctx.close();
}
await browser.close();
results.pass = pass; results.fail = fail; results.fails = fails;
const out = path.join(REPO, 'docs/results/0.11/perf-finish-11-cad-open.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(results, null, 1));
console.log(`\n${pass} passed, ${fail} failed` + (fails.length ? '\n  ' + fails.join('\n  ') : ''));
process.exit(fail ? 1 : 0);
