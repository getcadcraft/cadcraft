#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
/**
 * gpu-save.mjs — perf-finish-11 (0.11 PERF.30): Save as DWG 2018 of a 1 M-object drawing in the real /lab/cadcraft, as a person does it.
 * The file is opened through the file input; then SAVEAS is typed, DWG and version 2018 are picked in the dialog and Save is pressed (the
 * browser path: a download; the page's showSaveFilePicker is hidden so no native dialog opens). Recorded: whether it saved, the time from
 * Save to the download, the longest task on the page meanwhile, the page's heap and the DWG writer worker's heap (CDP, sampled), then the
 * saved file is opened again and its object count compared with the drawing's.
 *
 *   tools/gpu-remote/run.sh --session perf-finish-cad-save2 --lab --with testfiles/generated/scale11/cc-dwg-gen-1300000.dwg -- \
 *     public_html/assets/apps/cadcraft/dev/test/gpu-save.mjs [--files a.dwg,b.dxf]
 * Heavy (several GB in the browser): workstation11a.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch, labCookie, machine, remote, BASE } from '../../../../../../tools/gpu-remote/browser.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const FILES = (flag('--files', 'testfiles/generated/scale11/cc-dwg-gen-1300000.dwg')).split(',').map((f) => path.resolve(REPO, f)).filter((f) => fs.existsSync(f));
const OUTDIR = path.join(REPO, 'tmp');
fs.mkdirSync(OUTDIR, { recursive: true });
// every line also goes to tmp/perf-finish-cad-gpu-save.log at once: a run that hits its timeout loses what stdout had not flushed
const LOG = path.join(OUTDIR, 'perf-finish-cad-gpu-save.log');
const say = (line) => { console.log(line); try { fs.appendFileSync(LOG, new Date().toISOString().slice(11, 19) + ' ' + line + '\n'); } catch { /* */ } };
const browser = await launch({ args: ['--js-flags=--max-old-space-size=8192'] });
const out = { at: new Date().toISOString(), host: remote ? 'workstation11a' : os.hostname(), files: [] };
say(`perf-finish-11 gpu-save ${out.at} ${remote ? '(workstation11a)' : '(here)'}`);
// while a big file opens: every 20 s what the page says and its heap (CDP), so a slow or stuck open shows where it stands in the run log
async function openWatched(page, file, label) {
  const cdp = await page.context().newCDPSession(page);
  const t0 = Date.now();
  const iv = setInterval(async () => {
    let heap = '?'; try { heap = Math.round((await cdp.send('Runtime.getHeapUsage')).usedSize / 1048576) + ' MB'; } catch { /* busy */ }
    let said = '?'; try { said = (await page.evaluate(() => [...document.querySelectorAll('[data-history] li')].slice(-1).map((l) => l.textContent.slice(0, 140)).join('') + ' | ' + (document.querySelector('[data-busy], .cc-busy')?.textContent || ''))); } catch (e) { said = 'page did not answer: ' + e.message.split('\n')[0]; }
    say(`  … ${label} ${Math.round((Date.now() - t0) / 1000)} s: page heap ${heap}; ${said}`);
  }, 20000);
  try { await page.setInputFiles('[data-file]', file); await opened(page, path.basename(file)); } finally { clearInterval(iv); }
  return +((Date.now() - t0) / 1000).toFixed(1);
}
const opened = (page, name, ms = 900000) => page.waitForFunction((n) => window.cadcraft.doc.meta.source === n && [...document.querySelectorAll('[data-history] li')].some((l) => l.textContent.includes('Opened ' + n)), name, { timeout: ms, polling: 1000 });
for (const file of FILES) {
  const r = { file: path.basename(file) };
  const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, acceptDownloads: true });
  await ctx.addCookies(labCookie());
  await ctx.addInitScript(() => { try { localStorage.setItem('cadcraft.tour', 'skipped'); localStorage.setItem('cc-newhere', 'skipped'); } catch { /* */ } try { Object.defineProperty(window, 'showSaveFilePicker', { value: undefined, configurable: true }); } catch { /* */ } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(900000);
  const errors = []; page.on('pageerror', (e) => errors.push(e.message)); page.on('crash', () => errors.push('page crashed'));
  try {
    say('  ' + path.basename(file) + ': loading /lab/cadcraft');
    await page.goto(`${BASE}/lab/cadcraft`, { waitUntil: 'domcontentloaded', timeout: 120000 });
    await page.waitForFunction(() => !!window.cadcraft?.view, null, { timeout: 90000 });
    say('  app ready; opening ' + path.basename(file));
    if (!out.machine) out.machine = await machine(page);
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') say('  console ' + m.type() + ': ' + m.text().slice(0, 300)); });
    let t0 = Date.now();
    r.openS = await openWatched(page, file, 'open');
    r.objects = await page.evaluate(() => window.cadcraft.doc.count());
    await page.waitForTimeout(5000);
    // CDP: the page's heap, and the heap of every worker (the DWG writer appears when the save starts)
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Target.setDiscoverTargets', { discover: true });
    const workers = new Map(); let msgId = 1; const waiting = new Map();
    cdp.on('Target.receivedMessageFromTarget', (e) => { try { const m = JSON.parse(e.message); const w = waiting.get(m.id); if (w) { waiting.delete(m.id); w(m.result); } } catch { /* */ } });
    const attachWorkers = async () => {
      const { targetInfos } = await cdp.send('Target.getTargets');
      for (const t of targetInfos) if (t.type === 'worker' && !workers.has(t.targetId)) {
        try { const { sessionId } = await cdp.send('Target.attachToTarget', { targetId: t.targetId, flatten: false }); workers.set(t.targetId, { sessionId, url: t.url, peak: 0 }); } catch { /* */ }
      }
    };
    const heapOf = (sessionId) => new Promise((res) => { const id = msgId++; waiting.set(id, res); cdp.send('Target.sendMessageToTarget', { sessionId, message: JSON.stringify({ id, method: 'Runtime.getHeapUsage' }) }).catch(() => res(null)); setTimeout(() => { if (waiting.delete(id)) res(null); }, 2000); });
    let pagePeak = 0, sampling = true;
    const sampler = (async () => {
      while (sampling) {
        try { const h = await cdp.send('Runtime.getHeapUsage'); pagePeak = Math.max(pagePeak, h.usedSize); } catch { /* */ }
        try { await attachWorkers(); for (const w of workers.values()) { const h = await heapOf(w.sessionId); if (h?.usedSize) w.peak = Math.max(w.peak, h.usedSize); } } catch { /* */ }
        await new Promise((res) => setTimeout(res, 500));
      }
    })();
    await cdp.send('Runtime.enable').catch(() => {});
    await page.evaluate(() => { window.__lt = []; new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lt.push(Math.round(e.duration)); }).observe({ type: 'longtask' }); });
    // SAVEAS → DWG, 2018 → Save, as a person does
    await page.click('[data-cmd-input]'); await page.keyboard.type('SAVEAS'); await page.keyboard.press('Enter');
    await page.waitForSelector('dialog.cc-saveas[open]');
    await page.check('dialog.cc-saveas input[name="cc-format"][value="dwg"]');
    await page.selectOption('dialog.cc-saveas select.cc-format-ver', '2018');
    const dl = page.waitForEvent('download', { timeout: 900000 });
    t0 = Date.now();
    await page.click('dialog.cc-saveas button[data-key="ok"]');
    // while it saves: every 20 s, what the page says, its heap and the workers' (the run log shows where a slow or failed save stands)
    const prog = setInterval(async () => {
      try {
        const st = await page.evaluate(() => ({ last: [...document.querySelectorAll('[data-history] li')].slice(-2).map((l) => l.textContent.slice(0, 160)), lt: window.__lt.length ? Math.max(...window.__lt) : 0, busy: document.querySelector('[data-busy], .cc-busy')?.textContent || '' }));
        say(`  … ${Math.round((Date.now() - t0) / 1000)} s: page heap peak ${Math.round(pagePeak / 1048576)} MB, workers ${[...workers.values()].map((w) => Math.round(w.peak / 1048576) + ' MB').join(', ') || 'none'}, longest task ${st.lt} ms, said: ${st.last.join(' | ')} ${st.busy}`);
      } catch (e) { say('  … page did not answer: ' + e.message.split('\n')[0]); }
    }, 20000);
    let d;
    try { d = await dl; } finally { clearInterval(prog); }
    r.saveS = +((Date.now() - t0) / 1000).toFixed(1);
    const saved = path.join(OUTDIR, 'perf-finish-cad-saved-' + path.basename(file).replace(/\.[^.]+$/, '') + '.dwg');
    await d.saveAs(saved);
    r.savedMB = +(fs.statSync(saved).size / 1048576).toFixed(1);
    sampling = false; await sampler;
    Object.assign(r, await page.evaluate(() => { const lt = window.__lt.slice().sort((a, b) => b - a); return { longTasks: lt.slice(0, 6), said: [...document.querySelectorAll('[data-history] li')].map((l) => l.textContent).filter((s) => /Saved|saved|DWG/.test(s)).slice(-2) }; }));
    r.pageHeapPeakMB = Math.round(pagePeak / 1048576);
    r.workerHeapPeakMB = [...workers.values()].map((w) => ({ url: (w.url || '').split('/').pop().replace(/\?.*/, ''), mb: Math.round(w.peak / 1048576) }));
    r.writer = await page.evaluate(async () => { try { const m = await import('/assets/apps/cadcraft/dev/dwg-write-async.js'); return m.dwgWriteState(); } catch (e) { return 'unknown: ' + e.message; } });   // a second module instance: 'idle' here says nothing; the worker list above is the proof
    say('  saved: ' + JSON.stringify(r));
    // the saved file opened again, in a fresh page (the 1 M drawing would otherwise stay open beside it): the same object count
    await page.close();
    const p2 = await ctx.newPage(); p2.setDefaultTimeout(900000);
    await p2.goto(`${BASE}/lab/cadcraft`, { waitUntil: 'domcontentloaded', timeout: 120000 });
    await p2.waitForFunction(() => !!window.cadcraft?.view, null, { timeout: 90000 });
    p2.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') say('  console ' + m.type() + ': ' + m.text().slice(0, 300)); });
    p2.on('crash', () => say('  the reopen page crashed'));
    r.reopenS = await openWatched(p2, saved, 'reopen');
    r.reopenObjects = await p2.evaluate(() => window.cadcraft.doc.count());
    r.sameCount = r.reopenObjects === r.objects;
    fs.unlinkSync(saved);
  } catch (e) {
    r.failed = String(e.message).split('\n')[0];
    try { r.said = await page.evaluate(() => [...document.querySelectorAll('[data-history] li')].slice(-6).map((l) => l.textContent.slice(0, 200))); } catch { /* */ }
  }
  r.errors = errors.slice(0, 5);
  say('RESULT ' + JSON.stringify(r));
  out.files.push(r);
  await ctx.close();
}
await browser.close();
fs.writeFileSync(path.join(OUTDIR, 'perf-finish-cad-gpu-save.json'), JSON.stringify(out, null, 1));
