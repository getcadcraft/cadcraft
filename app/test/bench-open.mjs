#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bench-open.mjs — session cad-11 (0.11): what opening a big drawing costs on the page's thread in the real /lab/cadcraft (PERF.9 DWG, PERF.30 DXF).
 * One Chromium. For each run: the file is opened as a person does (the [data-file] input), with a long-task observer and a 10 ms timer that
 * records the longest gap the page's thread left it; then the steps are timed one by one in the same page: the read (worker or not), the
 * build into CadCraft's drawing (importDwg / readDxf), doc.load, and the first redraw cache. Run as root (tools/cadcraft-test/admin.php).
 *   node public_html/assets/apps/cadcraft/dev/test/bench-open.mjs <file.dwg|file.dxf> [--runs 2] [--out docs/results/0.11/x.json] [--label before]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const FILE = args.find((a) => /\.(dwg|dxf)$/i.test(a));
const RUNS = +flag('--runs', 2), OUT = flag('--out', null), LABEL = flag('--label', ''), PROFILE = flag('--profile', null), TRACE = flag('--trace', null);   // --trace <file.json>: a Chrome trace of the first open (long tasks with what ran in them)   // --profile <file.cpuprofile>: the page's CPU profile of the first open
if (!FILE) { console.log('usage: bench-open.mjs <file.dwg|dxf>'); process.exit(2); }
const { chromium } = await import('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(REPO, 'tools/cadcraft-test/admin.php'), 'session'], { encoding: 'utf8' }));
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--js-flags=--max-old-space-size=6144'] });
const out = [];
try {
  for (let run = 0; run < RUNS; run++) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block' });
    await ctx.addCookies([{ name: admin.name, value: admin.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
    await ctx.addInitScript(() => { try { localStorage.setItem('cadcraft.tour', 'skipped'); localStorage.setItem('cc-newhere', 'skipped'); } catch { /* */ } });
    const page = await ctx.newPage();
    page.setDefaultTimeout(240000);
    await page.goto('https://getcadcraft.com/lab/cadcraft', { waitUntil: 'networkidle' });
    await page.waitForFunction(() => !!window.cadcraft);
    await page.evaluate(() => {
      window.__lt = []; window.__gap = 0; let last = performance.now();
      new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lt.push(Math.round(e.duration)); }).observe({ type: 'longtask', buffered: false });
      window.__tick = setInterval(() => { const n = performance.now(); window.__gap = Math.max(window.__gap, n - last); last = n; }, 10);
    });
    const cdp = PROFILE && run === 0 ? await ctx.newCDPSession(page) : null;
    if (cdp) { await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 500 }); await cdp.send('Profiler.start'); }
    if (TRACE && run === 0) await browser.startTracing(page, { path: TRACE, categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'v8.execute'] });
    const t0 = Date.now();
    await page.setInputFiles('[data-file]', FILE);
    await page.waitForFunction((n) => window.cadcraft.doc.meta.source === n && /Opened|objects/.test(document.querySelector('[data-history]')?.textContent || ''), path.basename(FILE));
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    const wall = Date.now() - t0;
    if (TRACE && run === 0) await browser.stopTracing();
    if (cdp) { const { profile } = await cdp.send('Profiler.stop'); fs.writeFileSync(PROFILE, JSON.stringify(profile)); }
    const open = await page.evaluate(() => { clearInterval(window.__tick); const lt = window.__lt; return { top: [...lt].sort((a, b) => b - a).slice(0, 6), longest: lt.length ? Math.max(...lt) : 0, over50: lt.length, sum: lt.reduce((a, b) => a + b, 0), gap: Math.round(window.__gap), objects: window.cadcraft.doc.count(), said: [...document.querySelectorAll('[data-history] li')].map((l) => l.textContent).filter((s) => /Opened|objects/.test(s)).pop() }; });
    // the steps, one by one, in the same page (the same modules through the page's import map)
    await page.evaluate(() => { const i = document.createElement('input'); i.type = 'file'; i.id = 'bench-file'; i.hidden = true; document.body.append(i); });
    await page.setInputFiles('#bench-file', FILE);
    const steps = await page.evaluate(async (dxf) => {
      const f = document.getElementById('bench-file').files[0];
      const bytes = new Uint8Array(await f.arrayBuffer());
      const ms = {};
      let drawing;
      if (dxf) {
        const D = await import('/assets/apps/cadcraft/dev/dxf.js');
        const O = await import('/assets/apps/cadcraft/dev/dxf-open.js').catch(() => null);
        let a = performance.now();
        const text = O?.dxfPartsOf ? O.dxfPartsOf(bytes).text : new TextDecoder().decode(bytes);
        ms.text = performance.now() - a; a = performance.now();
        drawing = D.readDxf(text); ms.read = performance.now() - a;
      } else {
        const R = await import('/assets/apps/cadcraft/dev/dwg/read-async.js'), I = await import('/assets/apps/cadcraft/dev/dwg-import.js');
        let a = performance.now();
        const model = await R.readDwgAsync(bytes); ms.read = performance.now() - a; ms.reader = R.dwgWorkerState?.();
        a = performance.now(); drawing = I.importDwg(model, { versionTag: 'x' }); ms.build = performance.now() - a;
      }
      const { Doc } = await import('/assets/apps/cadcraft/dev/doc.js');
      const d = new Doc(); let a = performance.now(); d.load(drawing); ms.load = performance.now() - a;
      const v = window.cadcraft.view; v.caches = new WeakMap(); a = performance.now(); const c = v.cacheOf(window.cadcraft.doc.space); ms.cache = performance.now() - a; ms.runs = c.runs?.length;
      for (const k of Object.keys(ms)) if (typeof ms[k] === 'number') ms[k] = Math.round(ms[k]);
      return ms;
    }, /\.dxf$/i.test(FILE));
    const r = { file: path.basename(FILE), run, label: LABEL, wall, ...open, steps, at: new Date().toISOString(), load: os.loadavg().map((x) => +x.toFixed(1)) };
    console.log(JSON.stringify(r));
    out.push(r);
    await ctx.close();
  }
} finally { await browser.close(); }
if (OUT) { fs.mkdirSync(path.dirname(path.resolve(REPO, OUT)), { recursive: true }); fs.appendFileSync(path.resolve(REPO, OUT), out.map((r) => JSON.stringify(r)).join('\n') + '\n'); }
