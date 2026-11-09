#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser.mjs — the Circuit simulation add-on in the real page (0.9 SU.1084, KICKOFF rule 49): /lab/cadcraft in Chromium, a signed-in test session minted in-process by
 * tools/addons-test/admin.php. The one-line mount (the add-on's id in addons/index.json) belongs to `mounts-09` and is not made yet, so this run adds the id to the
 * index it fetches (a route), exactly what the mount will do. Draws a divider with pointer clicks, wires it (pin to pin, to a wire with a junction), runs the three analyses
 * from the buttons, checks the rule check in Problems, Save / Open, and switch-off.
 *   node public_html/assets/apps/cadcraft/dev/addons/circuit/test/browser.mjs [--shots dir] [--base https://getcadcraft.com]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../../../..');
const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BASE = opt('--base', 'https://getcadcraft.com');
const SHOTS = opt('--shots', path.join(ROOT, 'tmp/shots/circuit'));
fs.mkdirSync(SHOTS, { recursive: true });
let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };
const admin = (cmd) => JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', 'tools/addons-test/admin.php', cmd], { cwd: ROOT }).toString());

const { chromium } = await import('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1'] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block', acceptDownloads: true });
const SESSION = admin('session'), [cname, cvalue] = SESSION.cookie.split('=');
await ctx.addCookies([{ name: cname, value: cvalue, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true, sameSite: 'Lax' }]);
const errors = [];
const page = await ctx.newPage();
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
let served = null;
await page.route(/\/dev\/addons\/index\.json(\?.*)?$/, async (route) => {
  const r = await route.fetch(); const j = await r.json(); served = j.addons.includes('circuit') ? 'already' : 'added';
  if (!j.addons.includes('circuit')) j.addons.push('circuit');
  await route.fulfill({ response: r, json: j });
});
const shot = (n) => page.screenshot({ path: path.join(SHOTS, n + '.png') });
const state = () => page.evaluate(() => window.ccAddons.list().find((a) => a.id === 'circuit'));
const typeCmd = async (s) => { await page.click('[data-cmd-input]'); await page.keyboard.type(s); await page.keyboard.press('Enter'); await page.waitForTimeout(250); };
// world (drawing) coordinates → page coordinates of the canvas
const at = (x, y) => page.evaluate(([wx, wy]) => { const svg = document.querySelector('[data-cr-canvas]'), p = svg.createSVGPoint(); p.x = wx; p.y = wy; const q = p.matrixTransform(svg.getScreenCTM()); return { x: q.x, y: q.y }; }, [x, y]);
const clickAt = async (x, y, opts = {}) => { const p = await at(x, y); await page.mouse.click(p.x, p.y, opts); await page.waitForTimeout(40); };
const pinXY = (ref) => page.evaluate((r) => { const c = document.querySelector(`[data-cr-pin="${r}"]`); const b = c.getBoundingClientRect(); return { x: b.x + b.width / 2, y: b.y + b.height / 2 }; }, ref);
const clickPin = async (ref) => { const p = await pinXY(ref); await page.mouse.click(p.x, p.y); await page.waitForTimeout(40); };
const sheet = () => page.evaluate(() => { const s = window.ccCircuit.sheet(); return { symbols: s.symbols.map((q) => ({ id: q.id, type: q.type, tag: q.tag, attrs: q.attrs })), wires: s.wires.map((w) => [w.from, w.to]) }; });
const rows = () => page.evaluate(() => window.ccCircuit.recheck().map((r) => r.rule + ':' + r.severity));
const cell = (sel) => page.textContent(sel).catch(() => null);

try {
  await page.goto(BASE + '/lab/cadcraft', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => { for (const k of Object.keys(localStorage)) if (k.startsWith('cc-addon:cadcraft:circuit:')) localStorage.removeItem(k); });
  await page.goto(BASE + '/lab/cadcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.cadcraft?.host && !!window.ccAddons);
  await page.waitForFunction(() => window.ccAddons.list().some((a) => a.id === 'circuit' && a.state !== 'loading'), null, { timeout: 20000 }).catch(() => {});
  let me = await state();
  ok((served === 'added' || served === 'already') && me && me.state === 'off', 'the add-on is listed (mounted in addons/index.json) and starts off', JSON.stringify(me && [me.state, me.reason, me.detail]) + ' ' + served);
  await page.evaluate(() => window.ccAddons.loader.setEnabled('circuit', true));
  await page.waitForTimeout(800);
  me = await state();
  ok(me?.state === 'active', 'switched on: active', JSON.stringify(me && [me.state, me.reason, me.detail]));
  ok(await page.evaluate(() => !!document.querySelector('[data-circuit-root]')), 'its panel section is in the page');

  // the larger window
  await typeCmd('CIRCUIT');
  ok(await page.evaluate(() => !!document.querySelector('dialog.cr-dialog[open] [data-cr-canvas]')), 'CIRCUIT opens the larger window');
  const parts = await page.$$eval('[data-cr-part]', (b) => b.map((x) => x.getAttribute('data-cr-part')));
  ok(['R', 'C', 'L', 'V', 'VAC', 'SW', 'D', 'LED', 'NPN', 'PNP', 'NMOS', 'PMOS', 'OPAMP', 'GND', 'JUNCTION', 'METER', 'SCOPE', 'PLOT'].every((p) => parts.includes(p)), 'the palette has the parts the request names and the instruments', parts.join());

  // ---- draw a divider by pointer: V (0,0) 12 V, R1 3.3k, R2 4.7k, ground, meter
  const place = async (type, x, y) => { await page.click(`[data-cr-part="${type}"]`); await clickAt(x, y); };
  await place('V', 0, 80); await place('R', 140, 0); await place('R', 280, 80); await place('GND', 140, 200); await place('METER', 360, 0);
  let sh = await sheet();
  ok(sh.symbols.length === 5 && sh.symbols.map((s) => s.tag).join() === 'V1,R1,R2,,XM1', 'five parts placed by clicking the palette and the drawing', JSON.stringify(sh.symbols.map((s) => s.tag)));
  await page.click('[data-cr-tool="select"]');
  // rotate R2 (select, R key)
  const r2 = sh.symbols.find((s) => s.tag === 'R2'), r1 = sh.symbols.find((s) => s.tag === 'R1'), v1 = sh.symbols.find((s) => s.tag === 'V1'), g = sh.symbols.find((s) => s.type === 'GND'), m = sh.symbols.find((s) => s.type === 'METER');
  await clickAt(280, 80); await page.keyboard.press('r');
  sh = await sheet(); ok(sh.symbols.find((s) => s.id === r2.id).attrs.rot === 1, 'R turns the selected part');
  // set values in the inspector
  await clickAt(140, 0);
  await page.fill('[data-cr-inspector] [data-cr-field="value"]', '3.3k'); await page.keyboard.press('Tab');
  await clickAt(280, 80);
  await page.fill('[data-cr-inspector] [data-cr-field="value"]', '4.7k'); await page.keyboard.press('Tab');
  await clickAt(0, 80);
  await page.fill('[data-cr-inspector] [data-cr-field="dc"]', '12'); await page.keyboard.press('Tab');
  sh = await sheet();
  ok(sh.symbols.find((s) => s.id === r1.id).attrs.value === '3.3k' && sh.symbols.find((s) => s.id === r2.id).attrs.value === '4.7k' && sh.symbols.find((s) => s.id === v1.id).attrs.dc === '12', 'values typed in the inspector reach the sheet');
  ok((await rows()).includes('no-ground:error') === false && (await rows()).filter((r) => r.startsWith('floating')).length > 0, 'before wiring: floating pins are reported (ground is placed)', (await rows()).join());
  // wire pin to pin by two clicks
  await clickPin(`${v1.id}.p`); await clickPin(`${r1.id}.a`);
  await clickPin(`${r1.id}.b`); await clickPin(`${r2.id}.a`);
  await clickPin(`${r2.id}.b`); await clickPin(`${g.id}.g`);
  await clickPin(`${v1.id}.n`); await clickPin(`${g.id}.g`);
  // the meter joins the middle net through a junction put on the R1-R2 wire
  const w12 = await page.evaluate(([a, b]) => { const s = window.ccCircuit.sheet(); const w = s.wires.find((q) => q.from === a && q.to === b); return w ? w.id : null; }, [`${r1.id}.b`, `${r2.id}.a`]);
  ok(!!w12, 'a wire between R1 and R2 was made by two pin clicks');
  await clickPin(`${m.id}.in`);                      // start a wire at the meter
  const wp = await page.evaluate((id) => { const el = document.querySelector(`[data-cr-wire="${id}"]`); const len = el.getTotalLength(); const pt = el.getPointAtLength(len * 0.5); const svg = document.querySelector('[data-cr-canvas]'); const q = svg.createSVGPoint(); q.x = pt.x; q.y = pt.y; const c = q.matrixTransform(svg.getScreenCTM()); return { x: c.x, y: c.y }; }, w12);
  await page.mouse.click(wp.x, wp.y); await page.waitForTimeout(80);
  await page.keyboard.press('Escape');
  sh = await sheet();
  const jn = sh.symbols.find((s) => s.type === 'JUNCTION');
  ok(jn && !sh.wires.some(([a, b]) => a === `${r1.id}.b` && b === `${r2.id}.a`) && sh.wires.some(([a, b]) => a.startsWith(jn.id + '.') || b.startsWith(jn.id + '.')), 'clicking a wire while wiring puts a junction on it and joins the meter', JSON.stringify(sh.wires));
  ok((await rows()).length === 0, 'the finished circuit passes the rule check', (await rows()).join());
  await page.click('[data-cr-run="op"]'); await page.waitForTimeout(200);
  const vmid = await cell('[data-cr-table="nets"] tr:nth-child(3) td:nth-child(2), [data-cr-net-row] td:nth-child(2)');
  const tableText = await page.textContent('[data-cr-results]');
  ok(/7\.05V/.test(tableText) && /12V/.test(tableText), 'Operating point: the table has 12 V and 7.05 V (= 12 · 4.7 / 8.0)', tableText.slice(0, 160));
  ok(/1\.5mA/.test(tableText), 'Operating point: 1.5 mA in the resistor', tableText.slice(0, 220));
  ok((await page.textContent('[data-cr-canvas]')).includes('7.05V'), 'the meter reads 7.05V on the drawing');
  await shot('01-divider-op');

  // ---- the rule check through Problems
  await page.click(`[data-cr-sym="${g.id}"]`); await page.keyboard.press('Delete'); await page.waitForTimeout(200);
  let rr = await rows();
  ok(rr.includes('no-ground:error'), 'delete the ground: "no ground" error', rr.join());
  const inStore = await page.evaluate(() => window.ccProblems ? window.ccProblems.store.list({}).filter((p) => /no ground/i.test(p.text || JSON.stringify(p))).map((p) => p.text) : null);
  if (!inStore || !inStore.length) console.log('    store:', JSON.stringify(await page.evaluate(() => window.ccProblems ? window.ccProblems.store.list({}).slice(0, 3) : 'no ccProblems')).slice(0, 600));
  ok(Array.isArray(inStore) && inStore.some((t) => /no ground/i.test(t)), 'the rows are in the Problems store, in words', JSON.stringify(inStore));
  await page.click('[data-cr-run="op"]'); await page.waitForTimeout(150);
  ok(/no ground/i.test(await page.textContent('[data-cr-results]')), 'a run with an error is refused and says why');
  await page.click('[data-cr-act="undo"]'); await page.waitForTimeout(200);
  ok(!(await rows()).includes('no-ground:error'), 'Undo brings the ground back');

  // ---- the example: transient and AC
  await page.click('[data-cr-file="example"]'); await page.waitForTimeout(200);
  await page.click('[data-cr-run="tran"]'); await page.waitForTimeout(500);
  const tr = await page.evaluate(() => { const r = window.ccCircuit.last(); const p = document.querySelector('[data-cr-results] svg path[data-series]'); return { ok: r.ok, n: r.t.length, last: Math.max(...r.traces[0].y), d: p ? p.getAttribute('d').length : 0 }; });
  ok(tr.ok && tr.n === 201 && Math.abs(tr.last - 5) < 0.05 && tr.d > 500, 'Transient: the scope draws the RC charge (peak near 5 V, then the discharge)', JSON.stringify(tr));
  await shot('02-example-transient');
  await page.click('[data-cr-run="ac"]'); await page.waitForTimeout(500);
  const ac = await page.evaluate(() => { const r = window.ccCircuit.last(); const k = r.f.findIndex((f) => f >= 159); return { ok: r.ok, db: r.plots[0].db[k] + 10 * Math.log10(1 + (r.f[k] / 159.155) ** 2), f: r.f[k], charts: document.querySelectorAll('[data-cr-results] svg.cr-chart').length }; });
  ok(ac.ok && ac.charts === 2 && Math.abs(ac.db) < 1e-3, 'AC sweep: the plotter draws level and phase; the level matches −10·log10(1+(f/fc)²) at the grid point nearest 159 Hz', JSON.stringify(ac));
  await shot('03-example-ac');

  // ---- save, new, open
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-cr-file="save"]')]);
  const saved = path.join(SHOTS, dl.suggestedFilename()); await dl.saveAs(saved);
  const savedJson = JSON.parse(fs.readFileSync(saved, 'utf8'));
  ok(savedJson.format === 'cc-circuit' && savedJson.schematic.symbols.length === 6, 'Save writes a cc-circuit file with the six parts', saved);
  const [dd] = await Promise.all([page.waitForEvent('download'), page.click('[data-cr-file="deck"]')]);
  const deckPath = path.join(SHOTS, dd.suggestedFilename()); await dd.saveAs(deckPath);
  ok(/PULSE\(/.test(fs.readFileSync(deckPath, 'utf8')) && /\.end/.test(fs.readFileSync(deckPath, 'utf8')), 'Export netlist writes a text deck');
  page.once('dialog', (d) => d.accept());
  await page.click('[data-cr-file="new"]'); await page.waitForTimeout(150);
  ok((await sheet()).symbols.length === 0, 'New empties the sheet');
  const [fc] = await Promise.all([page.waitForEvent('filechooser'), page.click('[data-cr-file="open"]')]);
  await fc.setFiles(saved); await page.waitForTimeout(400);
  ok((await sheet()).symbols.length === 6, 'Open brings it back');
  // a reload keeps the sheet (kept in this browser)
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.ccAddons && window.ccAddons.list().some((a) => a.id === 'circuit' && a.state === 'active'), null, { timeout: 20000 }).catch(() => {});
  ok((await page.evaluate(() => (window.ccCircuit ? window.ccCircuit.sheet().symbols.length : -1))) === 6, 'after a reload the add-on is still on and the sheet is kept');

  // ---- help
  const help = await page.evaluate(async () => { const m = await import('/assets/apps/cadcraft/dev/addons/circuit/help/help.js'); return m.default.topics.map((t) => t.slug); });
  ok(help.includes('circuit-start') && help.includes('circuit-limits'), 'the help topics are served', help.join());
  const lim = await page.evaluate(async () => (await import('/assets/apps/cadcraft/dev/addons/circuit/help/help.js')).default.topics.find((t) => t.slug === 'circuit-limits').html);
  ok(/Multisim files and part models are not read/.test(lim), 'the help says Multisim files and part models are not read');

  // ---- off
  await page.evaluate(() => window.ccAddons.loader.setEnabled('circuit', false)); await page.waitForTimeout(500);
  ok(await page.evaluate(() => !document.querySelector('[data-circuit-root]') && !window.ccCircuit), 'switched off: panel and handle gone');
  ok(errors.length === 0, 'no console errors', errors.slice(0, 4).join(' | '));
} catch (e) {
  fail++; console.log('  FAIL crashed — ' + (e.stack || e).toString().slice(0, 600));
  await shot('crash').catch(() => {});
} finally {
  await browser.close();
  try { admin('down'); } catch { /* the account stays disabled-able */ }
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
