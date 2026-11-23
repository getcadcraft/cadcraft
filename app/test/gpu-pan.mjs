#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
/**
 * gpu-pan.mjs — perf-finish-11 (0.11 PERF.17 / PERF.28): CadCraft's frame rate while panning and wheel-zooming a big drawing, on a real card.
 * Each file is opened through /lab/cadcraft's file input; then, with the moved picture (view.js moveShot) and without it (view.noMoveShot,
 * what 0.11 did before), a middle-button pan and a wheel zoom are run while requestAnimationFrame logs every frame. Also: the time of one
 * full redraw at extents and zoomed in 20 times, how many frames showed the moved picture, and the longest tasks while opening.
 *
 *   tools/gpu-remote/run.sh --session perf-finish-cad --lab --with testfiles/generated/scale10 --with testfiles/generated/scale11 -- \
 *     public_html/assets/apps/cadcraft/dev/test/gpu-pan.mjs [--files a,b] [--heavy]
 * Without --files: the 100 k DXF and Plans.dwg; --heavy adds the 1 M-entity DXF and the 1.3 M-entity DWG. On the VPS it runs with
 * SwiftShader (the CPU): the numbers there are not a card's.
 *
 * Other devices (perf-finish-11 pan-devices, on workstation11a):
 *   --adapter <n>      Chrome on chrome://gpu's GPU<n> (its LUID is read at the start: --use-adapter-luid=<high>,<low>); the line
 *                      chrome://gpu marks *ACTIVE* goes into the machine line
 *   --adapter swiftshader   Chrome with ANGLE on SwiftShader (the CPU, the software floor)
 *   --studio <dir>     inside CadCraft Studio's own WebView2: <dir> = an unpacked Studio portable zip (its exe + its fixed
 *                      WebView2 runtime). The exe is started with WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS = wry's own default
 *                      flags + a CDP port; the lab page is loaded at Studio's own origin (http://cadcraft.localhost/lab/cadcraft,
 *                      the shell only lets its own origin load in its window) with every request of that origin answered from
 *                      getcadcraft.com with the lab cookie. Nothing is installed; the exe's data/ stays in <dir>.
 *   --viewport WxH     (Chrome) the page size; default 1400x900
 * With nvidia-smi on the PATH, every GPU's utilisation is sampled during the pan/zoom runs (which card did the work).
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { launch, labCookie, machine, remote, BASE } from '../../../../../../tools/gpu-remote/browser.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const heavy = args.includes('--heavy');
const FILES = (flag('--files', null)?.split(',') || ['testfiles/generated/scale10/entities-100k.dxf', 'testfiles/generated/scale11/Plans.dwg',
  ...(heavy ? ['testfiles/generated/scale11/entities-1m.dxf', 'testfiles/generated/scale11/cc-dwg-gen-1300000.dwg'] : [])]).map((f) => path.resolve(REPO, f)).filter((f) => fs.existsSync(f));
const q = (a) => { const f = a.slice().sort((x, y) => x - y); return f.length ? { n: f.length, p50: Math.round(f[Math.floor(f.length / 2)]), p95: Math.round(f[Math.floor(f.length * 0.95)]), max: Math.round(f[f.length - 1]) } : { n: 0 }; };
const fmt = (s) => (s.n ? `p50 ${s.p50} p95 ${s.p95} max ${s.max} ms (${s.n} frames, ${(1000 / Math.max(s.p50, 1)).toFixed(0)} fps)` : 'no frames');
const adapter = flag('--adapter', null), studioDir = flag('--studio', null);
const [vw, vh] = (flag('--viewport', '1400x900')).split('x').map(Number);
const LOCAL = 'http://cadcraft.localhost';

// chrome://gpu's text (it is in shadow roots): the GPU<n> lines, and which is *ACTIVE*
async function gpuInfo(page) {
  await page.goto('chrome://gpu'); await page.waitForTimeout(2000);
  const t = await page.evaluate(() => { const walk = (n) => { let s = ''; if (n.shadowRoot) s += walk(n.shadowRoot); for (const c of n.children || []) s += walk(c); if (!n.children || !n.children.length) s += (n.textContent || '') + '\n'; return s; }; return walk(document.documentElement); });
  const gpus = []; const ls = t.split('\n').map((l) => l.trim()).filter(Boolean);
  for (let i = 0; i < ls.length; i++) { const m = /^GPU(\d+)$/.exec(ls[i]); const v = ls.slice(i + 1, i + 3).find((l) => /LUID=\{\d+,\d+\}/.test(l)); if (m && v) { const [, hi, lo] = /LUID=\{(\d+),(\d+)\}/.exec(v); gpus[+m[1]] = { line: v, luid: `${hi},${lo}`, active: /\*ACTIVE\*/.test(v), name: (/\[([^\]]+)\]/.exec(v) || [])[1] }; } }
  return gpus;
}

let launchArgs = [], picked = null;
if (adapter === 'swiftshader') launchArgs = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'];
else if (adapter != null && !studioDir) {
  const b0 = await launch({ webgl: true }); const p0 = await (await b0.newContext()).newPage();
  const gpus = await gpuInfo(p0); await b0.close();
  picked = gpus[+adapter]; if (!picked) throw new Error(`no GPU${adapter} on chrome://gpu (${gpus.map((g, i) => g && `GPU${i} ${g.name}`).filter(Boolean).join('; ')})`);
  launchArgs = [`--use-adapter-luid=${picked.luid}`];
}

// GPU utilisation of every card while a run goes (nvidia-smi on Windows' PATH); summarised per window
let smi = null; const smiRows = [];
try {
  smi = spawn('nvidia-smi', ['--query-gpu=index,utilization.gpu', '--format=csv,noheader,nounits', '-lms', '200'], { stdio: ['ignore', 'pipe', 'ignore'] });
  smi.on('error', () => { smi = null; });
  let buf = ''; smi.stdout.on('data', (d) => { buf += d; let k; while ((k = buf.indexOf('\n')) >= 0) { const [i, u] = buf.slice(0, k).split(',').map((x) => +x.trim()); buf = buf.slice(k + 1); if (Number.isFinite(i)) smiRows.push({ t: Date.now(), i, u }); } });
} catch { smi = null; }
const utilSince = (t0) => { const by = {}; for (const r of smiRows) if (r.t >= t0) (by[r.i] ||= []).push(r.u); return Object.entries(by).map(([i, a]) => `GPU${i} mean ${Math.round(a.reduce((s, x) => s + x, 0) / a.length)} % max ${Math.max(...a)} %`).join(', ') || 'no nvidia-smi'; };

const routeLog = [], out0 = {};
let browser, studioProc = null, studioCtx = null, studioRuntime = '';
if (studioDir) {
  // Studio's own WebView2: wry's default flags (its additional_browser_args when the app sets none; the environment variable
  // replaces them, so they are repeated) + the CDP port. A saved window place of 1400 x 900 (portable data/places.json).
  const exe = fs.readdirSync(studioDir).find((f) => /\.exe$/i.test(f));
  // WebView2 decides once per start whether the page's own-origin requests go to Studio's protocol handler or through the route
  // (a start where Studio answers keeps answering: six reloads gave its "Not found" each time). So Studio is started again, from a
  // fresh data/, until the route serves the lab page; the starts are logged. Only the process tree this test started is stopped.
  const stopStudio = async () => { await browser?.close().catch(() => {}); try { execFileSync('taskkill', ['/PID', String(studioProc.pid), '/T', '/F'], { stdio: 'ignore' }); } catch { /* gone */ } await new Promise((r) => setTimeout(r, 3000)); };
  for (out0.starts = 1; ; out0.starts++) {
    fs.rmSync(path.join(studioDir, 'data'), { recursive: true, force: true });   // every run = a first start (the work folder's own data/)
    fs.mkdirSync(path.join(studioDir, 'data'), { recursive: true });
    fs.writeFileSync(path.join(studioDir, 'data', 'places.json'), JSON.stringify({ main: { x: 40, y: 40, w: vw, h: vh, maximized: false } }));
    const port = 9333;
    const extra = adapter != null && adapter !== 'swiftshader' ? [] : launchArgs;   // Studio runs on the card Windows gives it
    studioProc = spawn(path.join(studioDir, exe), [], { cwd: studioDir, detached: false, stdio: 'ignore',
      env: { ...process.env, WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS: ['--disable-features=msWebOOUI,msPdfOOUI,msSmartScreenProtection', `--remote-debugging-port=${port}`, ...extra].join(' ') } });
    const { chromium } = createRequire(path.join(process.env.CC_PW_ROOT, 'package.json'))('playwright-core');
    browser = null; for (let i = 0; i < 60 && !browser; i++) { try { browser = await chromium.connectOverCDP(`http://127.0.0.1:${port}`); } catch { await new Promise((r) => setTimeout(r, 1000)); } }
    if (!browser) throw new Error('Studio\'s WebView2 never opened its CDP port');
    studioCtx = browser.contexts()[0];
    const ver = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json().catch(() => ({}));
    studioRuntime = `${exe} (Studio ${(/-(\d+\.\d+\.\d+)-portable/.exec(path.basename(studioDir)) || [, '?'])[1]}), ${ver.Browser || '?'}, runtime folder ${fs.existsSync(path.join(studioDir, 'webview2')) ? 'webview2\\ (fixed)' : 'evergreen'}`;
    const raw = process.env.CC_LAB_COOKIE || '';
    routeLog.length = 0; studioCtx.on('request', (q) => { if (routeLog.length < 8 && q.url().startsWith(LOCAL)) routeLog.push('seen ' + q.url().slice(LOCAL.length, LOCAL.length + 60)); });
    await studioCtx.route(`${LOCAL}/**`, async (route) => {
      const req = route.request(); const u = new URL(req.url()); if (routeLog.length < 16) routeLog.push('routed ' + u.pathname.slice(0, 60));
      try {
        const h = { cookie: raw, accept: req.headers().accept || '*/*' }; if (req.headers()['content-type']) h['content-type'] = req.headers()['content-type'];
        const r = await fetch(BASE + u.pathname + u.search, { method: req.method(), headers: h, body: ['GET', 'HEAD'].includes(req.method()) ? undefined : req.postDataBuffer(), redirect: 'manual' });
        const headers = {}; r.headers.forEach((v, k) => { if (!/^(content-encoding|content-length|transfer-encoding|set-cookie|strict-transport-security|alt-svc)$/.test(k)) headers[k] = k === 'location' ? v.replace(BASE, LOCAL) : v; });
        await route.fulfill({ status: r.status, headers, body: Buffer.from(await r.arrayBuffer()) });
      } catch (e) { await route.abort().catch(() => {}); }
    });
    await studioCtx.addInitScript(() => { try { localStorage.setItem('cadcraft.tour', 'skipped'); localStorage.setItem('cc-newhere', 'skipped'); } catch { /* */ } });
    const pr = studioCtx.pages()[0];
    await pr.goto(`${LOCAL}/lab/cadcraft`, { waitUntil: 'domcontentloaded', timeout: 120000 }).catch(() => {});
    const ok = await pr.evaluate(() => !!document.title || !/^Not found/.test(document.body?.innerText || '')).catch(() => false);
    console.log(`Studio start ${out0.starts}: ${ok ? 'the route serves the lab page' : 'Studio\'s own protocol answered (Not found), starting again'}`);
    if (ok) break;
    await stopStudio();
    if (out0.starts >= 8) throw new Error('8 Studio starts, the route never served the page');
  }
} else browser = await launch({ webgl: true, args: launchArgs });

const out = { at: new Date().toISOString(), load: os.loadavg().map((x) => +x.toFixed(1)), card: remote ? 'real card' : 'software GL', adapter, studio: studioDir ? studioRuntime : null, ...out0, files: [] };
console.log(`perf-finish-11 gpu-pan ${out.at} load ${out.load.join(' ')} ${remote ? '(real card)' : '(software GL here)'}${adapter != null ? ` adapter ${adapter}` : ''}${studioDir ? ' in Studio' : ''}`);
if (!studioDir) {   // which adapter chrome://gpu says is drawing, with these flags
  const c0 = await browser.newContext(); const g = await gpuInfo(await c0.newPage()); await c0.close();
  out.active = (g.find((x) => x && x.active) || {}).line || (adapter === 'swiftshader' ? 'SwiftShader' : '?');
} else {
  // chrome://gpu is not opened in Studio: the shell sends any page not its own to the person's browser. The card that drew is
  // read from nvidia-smi (per-GPU use during the runs) and the WebGL renderer string.
  if (!studioCtx.pages()[0]) throw new Error('no Studio window');
  // The Studio hub registers a service worker for its own offline copy (studio/hub/hub.js, scope /). Requests it answers never
  // reach the route above (it serves Studio's own files: "Not found" for /lab/cadcraft), so it is unregistered and bypassed on
  // the window's page. It only changes where the page's files come from, not how the page draws.
  const p0 = studioCtx.pages()[0];
  await p0.evaluate(() => navigator.serviceWorker?.getRegistrations().then((rs) => Promise.all(rs.map((r) => r.unregister())))).catch(() => {});
  out.swBypass = await (async () => { try { const c = await studioCtx.newCDPSession(p0); await c.send('Network.enable'); await c.send('Network.setBypassServiceWorker', { bypass: true }); return true; } catch { return false; } })();
  out.active = '(Studio: see the GPU use lines)';
}
console.log('active GPU', out.active, studioDir ? `| ${studioRuntime}` : '');
for (const file of FILES) {
  let ctx, page;
  if (studioDir) { ctx = studioCtx; page = studioCtx.pages().find((p) => !p.url().startsWith('chrome:')) || studioCtx.pages()[0]; }
  else {
    ctx = await browser.newContext({ viewport: { width: vw, height: vh } });
    await ctx.addCookies(labCookie());
    await ctx.addInitScript(() => { try { localStorage.setItem('cadcraft.tour', 'skipped'); localStorage.setItem('cc-newhere', 'skipped'); } catch { /* */ } });
    page = await ctx.newPage();
  }
  const r = { file: path.basename(file), mb: +(fs.statSync(file).size / 1048576).toFixed(1) };
  try {
    await page.goto(studioDir ? `${LOCAL}/lab/cadcraft` : `${BASE}/lab/cadcraft`, { waitUntil: 'domcontentloaded', timeout: 120000 });
    // Studio: WebView2 sometimes hands the navigation to Studio's own protocol handler before the route sees it (the page is
    // then Studio's plain "Not found"); load it again until the route answers. The tries are logged.
    for (r.tries = 1; studioDir && r.tries < 6 && await page.evaluate(() => !document.title && /^Not found/.test(document.body?.innerText || '')).catch(() => false); r.tries++) {
      await page.waitForTimeout(1000); await page.goto(`${LOCAL}/lab/cadcraft?t=${r.tries}`, { waitUntil: 'domcontentloaded', timeout: 120000 });
    }
    if (studioDir) console.log(`load tries ${r.tries}`);
    await page.waitForFunction(() => !!window.cadcraft?.view, null, { timeout: 90000 });
    if (!out.machine) {
      out.machine = await machine(page);
      out.page = await page.evaluate(() => ({ w: innerWidth, h: innerHeight, dpr: devicePixelRatio, visible: document.visibilityState, edition: window.ccEdition || null, shellFlags: !!window.__ccShellFlags, tauri: !!window.__TAURI_INTERNALS__, ua: navigator.userAgent.replace(/^.*?(Chrome\/\S+).*?(Edg\/\S+)?$/, '$1 $2').trim() }));
      console.log('machine', JSON.stringify(out.machine), JSON.stringify(out.page));
    }
    await page.evaluate(() => { window.__lt = []; new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lt.push(Math.round(e.duration)); }).observe({ type: 'longtask' }); });
    const t0 = Date.now();
    if (studioDir) {
      // over CDP Playwright will not hand over files past 50 MB; the WebView runs on this machine, so give it the path itself
      // (DOM.setFileInputFiles fires the input's change event as a person's pick does)
      const cdp = await ctx.newCDPSession(page);
      const { root } = await cdp.send('DOM.getDocument', { depth: 0 });
      const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector: '[data-file]' });
      await cdp.send('DOM.setFileInputFiles', { nodeId, files: [path.resolve(file)] });
      await cdp.detach().catch(() => {});
    } else await page.setInputFiles('[data-file]', file);
    await page.waitForFunction((n) => window.cadcraft.doc.meta.source === n && /Opened|objects/.test(document.querySelector('[data-history]')?.textContent || ''), path.basename(file), { timeout: 600000, polling: 500 });
    await page.evaluate(() => new Promise((res) => requestAnimationFrame(() => requestAnimationFrame(res))));
    r.openS = +((Date.now() - t0) / 1000).toFixed(1);
    await page.waitForTimeout(4000);   // the idle 3D weld, if any, before the frames
    Object.assign(r, await page.evaluate(() => { const lt = window.__lt.slice().sort((a, b) => b - a); return { objects: window.cadcraft.doc.count(), longTasks: lt.slice(0, 5) }; }));
    // one full redraw, at extents and zoomed in 20 times (the frame interval of forced full redraws)
    const full = (zoomIn) => page.evaluate(async (z) => {
      const v = window.cadcraft.view, keep = v.vs;
      if (z) v.zoomAt(v.w / 2, v.h / 2, z);
      const fr = []; let last = 0;
      await new Promise((res) => { let n = 0; const tick = (t) => { if (last) fr.push(t - last); last = t; if (++n > 8) return res(); v._otherBase = true; v.invalidate(true); requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
      v.restore(keep);
      const ms = []; for (let i = 0; i < 3; i++) { const a = performance.now(); v.renderBase(); ms.push(performance.now() - a); }
      return { frames: fr, js: ms };
    }, zoomIn);
    const fe = await full(0), fz = await full(20);
    r.fullExtents = { frame: q(fe.frames), js: q(fe.js) }; r.fullZoomed = { frame: q(fz.frames), js: q(fz.js) };
    const box = (await page.locator('[data-over]').boundingBox()) || { x: 200, y: 200, width: 800, height: 500 };
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    const motion = async (kind, shot) => {
      await page.evaluate((s) => { const v = window.cadcraft.view; v.noMoveShot = !s; v.moveShot = null; v._otherBase = true; v.invalidate(true); }, shot);
      await page.waitForTimeout(1500);
      await page.evaluate(() => { window.__fr = []; let last = performance.now(); window.__on = true; window.cadcraft.view.movedShots = 0; const tick = (t) => { window.__fr.push(t - last); last = t; if (window.__on) requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
      await page.mouse.move(cx, cy);
      if (kind === 'pan') { await page.mouse.down({ button: 'middle' }); for (let i = 0; i < 40; i++) { await page.mouse.move(cx + (i + 1) * 8, cy + Math.sin(i / 4) * 12); await page.waitForTimeout(30); } await page.mouse.up({ button: 'middle' }); }
      else for (let i = 0; i < 40; i++) { await page.mouse.wheel(0, i < 20 ? -120 : 120); await page.waitForTimeout(30); }
      const fr = await page.evaluate(() => { window.__on = false; return { fr: window.__fr.slice(1), moved: window.cadcraft.view.movedShots || 0 }; });
      await page.waitForTimeout(1500);
      return { ...q(fr.fr), moved: fr.moved };
    };
    const tm = Date.now();
    r.panBefore = await motion('pan', false); r.panAfter = await motion('pan', true);
    r.zoomBefore = await motion('zoom', false); r.zoomAfter = await motion('zoom', true);
    r.util = utilSince(tm);
    await page.evaluate(() => { window.cadcraft.view.noMoveShot = false; });
    console.log(`RESULT ${r.file} ${r.mb} MB ${r.objects} objects | open ${r.openS} s, long tasks ${r.longTasks.join(', ')} ms | full redraw at extents ${fmt(r.fullExtents.frame)} (js ${r.fullExtents.js.p50} ms), zoomed in ${fmt(r.fullZoomed.frame)} (js ${r.fullZoomed.js.p50} ms)`);
    console.log(`RESULT ${r.file} pan: before ${fmt(r.panBefore)} | after ${fmt(r.panAfter)} (${r.panAfter.moved} moved frames)`);
    console.log(`RESULT ${r.file} zoom: before ${fmt(r.zoomBefore)} | after ${fmt(r.zoomAfter)} (${r.zoomAfter.moved} moved frames)`);
    console.log(`RESULT ${r.file} GPU use during pan/zoom: ${r.util}`);
  } catch (e) { console.log('route log', JSON.stringify(routeLog)); r.failed = String(e.message).split('\n')[0]; const at = await page.evaluate(() => `${location.href} | ${document.title} | ${(document.body?.innerText || '').slice(0, 160).replace(/\s+/g, ' ')}`).catch((x) => String(x.message).slice(0, 80)); console.log(`RESULT ${r.file} | FAILED ${r.failed} | page: ${at} | pages: ${ctx.pages().map((p) => p.url()).join(', ')}`); }
  out.files.push(r);
  if (!studioDir) await ctx.close();
}
if (studioDir) {
  await browser.close().catch(() => {});
  try { if (process.platform === 'win32') execFileSync('taskkill', ['/PID', String(studioProc.pid), '/T', '/F'], { stdio: 'ignore' }); else studioProc.kill(); } catch { /* gone */ }
} else await browser.close();
if (smi) smi.kill();
fs.mkdirSync(path.join(REPO, 'tmp'), { recursive: true });
const tag = studioDir ? 'studio' : adapter != null ? `adapter-${adapter}` : 'default';
fs.writeFileSync(path.join(REPO, 'tmp', `perf-finish-cad-gpu-pan-${tag}.json`), JSON.stringify(out, null, 1));
fs.writeFileSync(path.join(REPO, 'tmp', 'perf-finish-cad-gpu-pan.json'), JSON.stringify(out, null, 1));
