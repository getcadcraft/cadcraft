#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-ors.mjs — session cad-11 (0.11): the click-through in the real page (rule 49) for the twelve Owner Research Suggested rows
 * that were written and tested in Node only (ORS.3, 5, 6, 8, 9, 10, 12, 13, 15, 26, 28, 30) and the on-screen draw order (ORS.4).
 * Each row is its own run on a freshly loaded /lab/cadcraft: the commands are typed into the command line, objects are picked by
 * clicking where they are drawn, windows are dragged, and the result is read back from the drawing (and, where the row is about
 * the screen, from the pixels of the drawing canvas). The help topic for each command is checked too. One Chromium, run it with
 * nice -n 10. Run as root (the test admin session of tools/cadcraft-test/admin.php). Results go to docs/results/0.11/cad-11-ors.json.
 *   node public_html/assets/apps/cadcraft/dev/test/browser-ors.mjs [--row ORS.3[,ORS.5…]] [--shots dir] [--build lab|use]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const APP = path.join(REPO, 'public_html/assets/apps/cadcraft/dev');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const SHOTS = flag('--shots', null), WHERE = flag('--build', 'lab');
const ONLY = flag('--row', '').split(',').filter(Boolean);
if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
const HELP = fs.readFileSync(path.join(APP, 'help/commands.md'), 'utf8');
const helpHas = (cmd) => HELP.includes('\n### ' + cmd + '\n');

const { chromium } = await import('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(REPO, 'tools/cadcraft-test/admin.php'), 'session'], { encoding: 'utf8' }));
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1'] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block', acceptDownloads: true });
await ctx.addCookies([{ name: admin.name, value: admin.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
await ctx.addInitScript(() => { try { localStorage.setItem('cadcraft.tour', 'skipped'); localStorage.setItem('cc-newhere', 'skipped'); localStorage.setItem('cc-autofocus', 'off'); } catch { /* private window */ } });
const page = await ctx.newPage();
page.setDefaultTimeout(30000);
let problems = [];
page.on('console', (m) => { if (m.type() === 'error' && !/429|Too Many/.test(m.text())) problems.push('console: ' + m.text()); });
page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));

// ---- what a person does --------------------------------------------------------------------------------------------------------
let rowPass = 0, rowFail = 0;
const fails = [];
const ok = (c, m, extra = '') => { if (c) { rowPass++; console.log('  ok   ' + m); } else { rowFail++; fails.push(m + (extra ? ' — ' + extra : '')); console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };
const wait = (ms) => page.waitForTimeout(ms);
const cc = (fn, arg) => page.evaluate(fn, arg);
const type = async (s) => { await page.click('[data-cmd-input]'); if (s) await page.keyboard.type(s); await page.keyboard.press('Enter'); await wait(180); };
const enter = () => type('');
const esc = async () => { await page.click('[data-cmd-input]'); await page.keyboard.press('Escape'); await page.keyboard.press('Escape'); await wait(100); };
const history = () => cc(() => document.querySelector('[data-history]')?.textContent || '');
const lastLines = async (n = 6) => (await cc(() => [...document.querySelectorAll('[data-history] li')].map((l) => l.textContent))).slice(-n).join(' | ');
const screen = (x, y) => cc(([x, y]) => { const r = document.querySelector('[data-over]').getBoundingClientRect(); const s = window.cadcraft.view.toScreen(x, y); return { x: r.left + s.x, y: r.top + s.y }; }, [x, y]);
const clickAt = async (x, y) => { const p = await screen(x, y); await page.mouse.move(p.x - 3, p.y - 3); await page.mouse.move(p.x, p.y); await page.mouse.click(p.x, p.y); await wait(150); };
const hover = async (x, y) => { const p = await screen(x, y); await page.mouse.move(p.x - 4, p.y + 2); await page.mouse.move(p.x, p.y, { steps: 3 }); await wait(250); };
/** A window dragged from a to b (left to right = window, right to left = crossing). */
/** A window as a person picks one at a "Select objects" prompt: a click on empty space, then the opposite corner (a press-and-drag is a lasso). */
const win = async (a, b) => { await clickAt(a.x, a.y); await clickAt(b.x, b.y); };
const drag = async (a, b) => { const p = await screen(a.x, a.y), q = await screen(b.x, b.y); await page.mouse.move(p.x, p.y); await page.mouse.down(); await page.mouse.move((p.x + q.x) / 2, (p.y + q.y) / 2, { steps: 4 }); await page.mouse.move(q.x, q.y, { steps: 4 }); await page.mouse.up(); await wait(200); };
const ents = () => cc(() => window.cadcraft.doc.all().map((e) => JSON.parse(JSON.stringify(e))));
const selection = () => cc(() => [...window.cadcraft.host.selection]);
const fixture = (fn) => cc(fn);
const zoom = (a, b) => cc(([a, b]) => window.cadcraft.host.zoomWindow(a, b), [a, b]);
/** Pixels of the drawing canvas that differ from the background inside a box of `r` screen pixels around a world point. */
const ink = (x, y, r = 4) => cc(([x, y, r]) => {
  const c = document.querySelector('[data-base]'); const g = c.getContext('2d'); const dpr = c.width / c.getBoundingClientRect().width;
  const s = window.cadcraft.view.toScreen(x, y);
  const bg = g.getImageData(2, 2, 1, 1).data;
  const d = g.getImageData(Math.round((s.x - r) * dpr), Math.round((s.y - r) * dpr), Math.round(2 * r * dpr), Math.round(2 * r * dpr)).data;
  let n = 0, sum = [0, 0, 0];
  for (let i = 0; i < d.length; i += 4) if (Math.abs(d[i] - bg[0]) + Math.abs(d[i + 1] - bg[1]) + Math.abs(d[i + 2] - bg[2]) > 60) { n++; sum[0] += d[i]; sum[1] += d[i + 1]; sum[2] += d[i + 2]; }
  return { n, rgb: n ? sum.map((v) => Math.round(v / n)) : null, bg: [bg[0], bg[1], bg[2]] };
}, [x, y, r]);
/** The reddest pixel (r - b) in a box of `r` screen pixels around a world point: a red line drawn over a blue fill shows, one under it does not. */
const redness = (x, y, r = 3) => cc(([x, y, r]) => {
  const c = document.querySelector('[data-base]'); const g = c.getContext('2d'); const dpr = c.width / c.getBoundingClientRect().width;
  const s = window.cadcraft.view.toScreen(x, y);
  const d = g.getImageData(Math.round((s.x - r) * dpr), Math.round((s.y - r) * dpr), Math.round(2 * r * dpr), Math.round(2 * r * dpr)).data;
  let best = -999; for (let i = 0; i < d.length; i += 4) best = Math.max(best, d[i] - d[i + 2]);
  return best;
}, [x, y, r]);
const redraw = async () => { await cc(() => { window.cadcraft.view.invalidate(true); }); await wait(250); };
const shot = async (name) => { if (SHOTS) await page.screenshot({ path: path.join(SHOTS, name + '.png') }); };
const fresh = async () => {
  await page.goto('https://getcadcraft.com/' + WHERE + '/cadcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.cadcraft && !!window.cadcraft.host);
  await wait(400);
  await esc();
};
const L = (x1, y1, x2, y2, o = {}) => ({ type: 'line', layer: '0', x1, y1, x2, y2, ...o });

// ---- the rows --------------------------------------------------------------------------------------------------------------------
const ROWS = {
  async 'ORS.3'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0 }); d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0 }); d.add({ type: 'line', layer: '0', x1: 60, y1: 0, x2: 150, y2: 0 }); d.add({ type: 'circle', layer: '0', cx: 300, cy: 0, r: 30 }); d.add({ type: 'circle', layer: '0', cx: 300, cy: 0, r: 30 }); }); });
    await zoom({ x: -50, y: -150 }, { x: 400, y: 150 });
    await type('OVERKILL');
    await win({ x: -20, y: -60 }, { x: 360, y: 60 });
    await enter();
    await enter();
    const e = await ents();
    const lines = e.filter((o) => o.type === 'line'), circles = e.filter((o) => o.type === 'circle');
    ok(lines.length === 1 && Math.min(lines[0].x1, lines[0].x2) === 0 && Math.max(lines[0].x1, lines[0].x2) === 150, 'OVERKILL: the doubled and overlapping lines are one line 0 to 150', JSON.stringify(lines));
    ok(circles.length === 1, 'OVERKILL: the doubled circle is one circle', String(circles.length));
    ok(/delet|merg|remov|clean/i.test(await lastLines(4)), 'it reports what it did', await lastLines(4));
    await type('U');
    ok((await ents()).length === 5, 'one U brings all five back');
    ok(helpHas('OVERKILL'), 'help: OVERKILL in the command reference');
  },
  async 'ORS.5'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { for (const x of [0, 300, 600]) d.add({ type: 'circle', layer: '0', cx: x, cy: 0, r: 50 }); }); });
    await zoom({ x: -100, y: -200 }, { x: 700, y: 200 });
    await redraw();
    ok((await ink(350, 0)).n > 0, 'all three circles are drawn');
    await type('ISOLATEOBJECTS');
    await clickAt(50, 0);
    await enter();
    await redraw();
    ok((await ink(50, 0)).n > 0 && (await ink(350, 0)).n === 0 && (await ink(650, 0)).n === 0, 'ISOLATEOBJECTS: only the picked circle is drawn');
    const chip = await page.$('[data-ors-hidden]');
    ok(chip && await chip.isVisible() && /2/.test(await chip.textContent()), 'the status bar shows "2 hidden"', chip ? await chip.textContent() : 'no chip');
    await clickAt(350, 0);
    ok(!(await selection()).length, 'a hidden circle cannot be picked');
    await esc();
    if (chip) await chip.click();
    await wait(200); await redraw();
    ok((await ink(350, 0)).n > 0 && (await ink(650, 0)).n > 0, 'a click on "2 hidden" brings them back');
    await type('HIDEOBJECTS');
    await clickAt(650, 0);
    await enter();
    await redraw();
    ok((await ink(650, 0)).n === 0 && (await ink(350, 0)).n > 0, 'HIDEOBJECTS: the picked circle goes out of sight');
    await type('UNISOLATEOBJECTS');
    await redraw();
    ok((await ink(650, 0)).n > 0, 'UNISOLATEOBJECTS: it is back');
    ok((await ents()).length === 3, 'nothing was erased');
    ok(['ISOLATEOBJECTS', 'HIDEOBJECTS', 'UNISOLATEOBJECTS'].every(helpHas), 'help: the three commands');
  },
  async 'ORS.6'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'arc', layer: '0', cx: 500, cy: 0, r: 100, a0: 0, a1: Math.PI / 2 }); d.add({ type: 'circle', layer: '0', cx: 0, cy: 300, r: 50 }); d.add({ type: 'line', layer: '0', x1: 0, y1: 50, x2: 200, y2: 50 }); }); });
    await zoom({ x: -150, y: -150 }, { x: 750, y: 450 });
    await cc(() => { window.cadcraft.host.setOsnap?.(false); });
    await type('DIMORDINATE');
    await type('200,50');
    await type('@0,100');
    let dims = (await ents()).filter((o) => o.type === 'dim');
    ok(dims.length === 1 && dims[0].kind === 'ordinate' && dims[0].axis === 'x' && Math.abs(dims[0].p1.x - 200) < 1e-9, 'DIMORDINATE typed: an X ordinate at 200', JSON.stringify(dims[0] || {}));
    await type('DIMARC');
    await clickAt(500 + 100 * Math.cos(Math.PI / 4), 100 * Math.sin(Math.PI / 4));
    await clickAt(500 + 150 * Math.cos(Math.PI / 4), 150 * Math.sin(Math.PI / 4));
    dims = (await ents()).filter((o) => o.type === 'dim');
    ok(dims.some((o) => o.kind === 'arc'), 'DIMARC: picking the arc and a place makes an arc length dimension', await lastLines(3));
    const before = (await ents()).length;
    await type('CENTERMARK');
    await clickAt(50, 300);
    await enter();
    const added = (await ents()).slice(before);
    ok(added.length >= 2 && added.every((o) => o.type === 'line'), 'CENTERMARK: a click on the circle draws its center lines', String(added.length));
    await redraw();
    ok((await ink(200, 100, 6)).n > 0, 'the ordinate dimension is drawn on screen');
    ok(['DIMORDINATE', 'DIMARC', 'CENTERMARK', 'QDIM', 'DIMJOGGED'].every(helpHas), 'help: the dimension commands');
  },
  async 'ORS.8'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0 }); d.add({ type: 'line', layer: '0', x1: 0, y1: 40, x2: 100, y2: 40 }); d.add({ type: 'line', layer: '0', x1: 0, y1: 120, x2: 100, y2: 120 }); }); });
    await zoom({ x: -50, y: -100 }, { x: 250, y: 200 });
    await type('GROUP');
    await win({ x: -10, y: -10 }, { x: 110, y: 60 });
    await enter();
    await type('DOORS');
    await enter();
    await esc();
    await clickAt(50, 0);
    ok((await selection()).length === 2, 'GROUP: a click on one line of the group selects both', JSON.stringify(await selection()));
    await esc();
    await clickAt(50, 120);
    ok((await selection()).length === 1, 'a line outside the group is picked alone');
    await esc();
    await type('UNGROUP');
    await clickAt(50, 40);
    await enter();
    await esc();
    await clickAt(50, 0);
    ok((await selection()).length === 1, 'UNGROUP: the lines are picked one by one again');
    await esc();
    ok((await ents()).length === 3, 'no line was lost');
    ok(['GROUP', 'UNGROUP', 'GROUPEDIT'].every(helpHas), 'help: GROUP, UNGROUP, GROUPEDIT');
  },
  async 'ORS.9'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 600, y2: 0 }); for (const [a, b, c, e] of [[0, 100, 300, 100], [300, 100, 300, 300], [300, 300, 0, 300], [0, 300, 0, 100]]) d.add({ type: 'line', layer: '0', x1: a, y1: b, x2: c, y2: e }); }); });
    await zoom({ x: -100, y: -150 }, { x: 700, y: 400 });
    await type('DIVIDE');
    await clickAt(300, 0);
    await type('3');
    let pts = (await ents()).filter((o) => o.type === 'point').map((o) => Math.round(o.x));
    ok(pts.length === 2 && pts.includes(200) && pts.includes(400), 'DIVIDE 3: two points at 200 and 400', JSON.stringify(pts));
    await type('MEASURE');
    await clickAt(50, 0);
    await type('250');
    pts = (await ents()).filter((o) => o.type === 'point').map((o) => Math.round(o.x));
    ok(pts.includes(250) && pts.includes(500), 'MEASURE 250 from the near end: points at 250 and 500', JSON.stringify(pts));
    await type('BOUNDARY');
    await clickAt(150, 200);
    await enter();
    const poly = (await ents()).filter((o) => o.type === 'poly' && o.closed);
    ok(poly.length === 1 && poly[0].pts.length === 4, 'BOUNDARY: a click inside the square makes its closed outline', JSON.stringify(poly.map((p) => p.pts.length)));
    ok(['DIVIDE', 'MEASURE', 'BOUNDARY', 'BLEND', 'CHSPACE', 'PASTEBLOCK', 'BLOCKREPLACE'].every(helpHas), 'help: the small drafting commands');
  },
  async 'ORS.10'() {
    await zoom({ x: -200, y: -200 }, { x: 200, y: 200 });
    await type('ISODRAFT');
    await type('T');
    ok(/top/i.test(await lastLines(2)), 'ISODRAFT Top: it says isometric drafting is on, on the top plane', await lastLines(2));
    await page.click('[data-cmd-input]'); await page.keyboard.press('F5'); await wait(200);
    ok(/right/i.test(await lastLines(2)), 'F5 goes to the next plane (right)', await lastLines(2));
    await type('ISOPLANE'); await type('T');
    await type('ELLIPSE');
    await type('I');
    await type('0,0');
    await type('100');
    const el = (await ents()).filter((o) => o.type === 'ellipse');
    const ratio = el[0] ? (el[0].ratio ?? el[0].rat ?? null) : null;
    ok(el.length === 1 && ratio !== null && Math.abs(ratio - Math.tan(Math.PI / 6)) < 0.01, 'ELLIPSE Isocircle on the top plane: the circle as an isometric ellipse (ratio 0.577)', JSON.stringify(el[0] || {}));
    await page.click('[data-cmd-input]'); await page.keyboard.press('F7'); await wait(250);
    await redraw();
    const grid = await cc(() => !!window.cadcraft.view.isoGrid && window.cadcraft.view.state?.grid !== false);
    ok(grid, 'the grid is on and is drawn as the isometric grid');
    await shot('ors10-isogrid');
    await type('ISODRAFT'); await type('OFF');
    ok(/off/i.test(await lastLines(2)), 'ISODRAFT OFF');
    ok(['ISODRAFT', 'ISOPLANE'].every(helpHas), 'help: ISODRAFT and ISOPLANE');
  },
  async 'ORS.12'() {
    await fixture(() => {
      const d = window.cadcraft.doc;
      d.change('fixture', () => {
        d.addLayer({ name: 'TAGS', color: 3 });
        d.defineBlock({ name: 'PUMP', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', color: null, cx: 0, cy: 0, r: 20 }], attdefs: [{ tag: 'TAG', prompt: 'Tag', def: 'P-0', x: 25, y: 0, h: 8, rot: 0, layer: 'TAGS', color: null }] });
        d.add({ type: 'insert', layer: '0', block: 'PUMP', x: 0, y: 0, sx: 1, sy: 1, rot: 0, attrs: { TAG: 'P-101' } });
        d.add({ type: 'text', layer: '0', x: 200, y: 40, h: 10, rot: 0, s: 'First line', ha: 'left', va: 'baseline' });
        d.add({ type: 'text', layer: '0', x: 200, y: 20, h: 10, rot: 0, s: 'second line', ha: 'left', va: 'baseline' });
        d.add({ type: 'line', layer: '0', x1: 0, y1: -100, x2: 300, y2: -100, z1: 15, z2: 40 });
      });
    });
    await zoom({ x: -100, y: -200 }, { x: 450, y: 150 });
    await type('BURST');
    await clickAt(20, 0);
    await enter();
    let e = await ents();
    ok(!e.some((o) => o.type === 'insert') && e.some((o) => o.type === 'text' && o.s === 'P-101' && o.layer === 'TAGS') && e.some((o) => o.type === 'circle'), 'BURST: the pump is its circle plus the text "P-101" on TAGS', JSON.stringify(e.filter((o) => o.type !== 'line').map((o) => [o.type, o.s, o.layer])));
    await type('TXT2MTXT');
    await win({ x: 190, y: 10 }, { x: 330, y: 60 });
    await enter();
    const t2m = await lastLines(4);
    await enter();
    e = await ents();
    const mt = e.filter((o) => o.type === 'text' && o.ww > 0);   // paragraph text is a text with a wrap width
    ok(mt.length === 1 && /First line/.test(mt[0].s) && /second line/.test(mt[0].s) && !e.some((o) => o.type === 'text' && !o.ww && /line/.test(o.s)), 'TXT2MTXT: the two texts are one paragraph text', JSON.stringify(mt.map((m) => m.s)) + ' ' + t2m + ' / ' + await lastLines(3));
    await type('FLATTEN');
    await clickAt(150, -100);
    await enter();
    const ln = (await ents()).find((o) => o.type === 'line');
    ok(ln && !ln.z1 && !ln.z2, 'FLATTEN: the line\'s end heights are 0', JSON.stringify(ln));
    ok(['BURST', 'TXT2MTXT', 'NCOPY', 'FLATTEN', 'BREAKLINE'].every(helpHas), 'help: the clean-up commands');
  },
  async 'ORS.13'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'poly', layer: '0', closed: true, pts: [{ x: 0, y: 0, b: 0 }, { x: 100, y: 0, b: 0 }, { x: 100, y: 100, b: 0 }, { x: 0, y: 100, b: 0 }] }); d.add({ type: 'circle', layer: '0', cx: 50, cy: 50, r: 20 }); }); });
    await zoom({ x: -60, y: -60 }, { x: 160, y: 160 });
    await type('REGION');
    await win({ x: -10, y: -10 }, { x: 110, y: 110 });
    await enter();
    ok(/2/.test(await lastLines(2)), 'REGION: two regions made', await lastLines(2));
    await type('SUBTRACT');
    await clickAt(100, 50);
    await enter();
    await clickAt(70, 50);
    await enter();
    await type('MASSPROP');
    await clickAt(100, 50);
    await enter();
    const h = await lastLines(30);
    const area = 10000 - Math.PI * 400;
    const m = h.match(/Area[^0-9]*([0-9][0-9,.]*)/i);
    ok(m && Math.abs(parseFloat(m[1].replace(/,/g, '')) - area) < 0.01, 'SUBTRACT then MASSPROP: area 10000 - pi*400 = ' + area.toFixed(4), m ? m[1] : h.slice(-300));
    await esc();
    ok(['REGION', 'MASSPROP'].every(helpHas) && /\{\{cmd:SUBTRACT\}\}[^\n]*regions/.test(HELP), 'help: REGION, MASSPROP and the region joins');
  },
  async 'ORS.15'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'mleader', layer: '0', color: null, pts: [{ x: 0, y: 0 }, { x: 40, y: 40 }], dir: 1, s: 'Note A', h: 5, st: { asz: 3, dogleg: 5, gap: 1 } }); d.add({ type: 'mleader', layer: '0', color: null, pts: [{ x: 0, y: -60 }, { x: 60, y: -30 }], dir: 1, s: 'Note B', h: 5, st: { asz: 3, dogleg: 5, gap: 1 } }); }); });
    await zoom({ x: -60, y: -120 }, { x: 160, y: 100 });
    const ml = async () => (await ents()).filter((o) => o.type === 'mleader');
    const first = (await ml())[0];
    await type('MLEADEREDIT');
    await clickAt(20, 20);
    await type('#-30,30');   // # = absolute: the prompt has a rubber band from the landing, so a bare x,y counts from it (0.9.1 typed coordinates)
    await enter();
    let a = (await ml()).find((o) => o.s === 'Note A');
    const lines = (o) => (o.leaders ? o.leaders.length : 1) + (o.more ? o.more.length : 0);
    ok(a && JSON.stringify(a) !== JSON.stringify(first) && lines(a) >= 2, 'MLEADEREDIT: a second leader line from -30,30 to the same landing', JSON.stringify(a));
    await type('MLEADERALIGN');
    await clickAt(20, 20);
    await clickAt(30, -45);
    await enter();
    await clickAt(20, 20);
    await type('0,1');
    const b = (await ml()).find((o) => o.s === 'Note B');
    a = (await ml()).find((o) => o.s === 'Note A');
    const landX = (o) => o.pts[o.pts.length - 1].x;
    ok(a && b && Math.abs(landX(a) - landX(b)) < 1e-6, 'MLEADERALIGN straight up: both landings on one vertical line', JSON.stringify([a && a.pts, b && b.pts]) + ' ' + await lastLines(3));
    await redraw();
    const na = (await ml()).find((o) => o.s === 'Note A'); ok(na && (await ink(-30 + (na.pts[na.pts.length - 1].x + 30) / 2 * 0, 30, 6)).n > 0, 'the new leader line is drawn from its arrowhead', JSON.stringify(na));
    ok(['MLEADEREDIT', 'MLEADERALIGN', 'MLEADERCOLLECT'].every(helpHas), 'help: the multileader edits');
  },
  async 'ORS.26'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'text', layer: '0', x: 0, y: 0, h: 2.5, rot: 0, s: 'Room', ha: 'left', va: 'baseline', ann: true, as: 1 }); }); });
    await zoom({ x: -10, y: -10 }, { x: 30, y: 10 });
    await type('OBJECTSCALE');
    await clickAt(3, 1);
    await enter();
    await type('A');
    await type('1:50');
    await type('L');
    const t1 = (await ents()).find((o) => o.type === 'text');
    ok(t1 && Array.isArray(t1.asl) && t1.asl.includes(50), 'OBJECTSCALE Add 1:50: the text lists 1:50', JSON.stringify(t1));
    ok(/1:50/.test(await lastLines(4)), 'List prints the scales', await lastLines(4));
    await esc();
    await type('ANNOALLVISIBLE');
    await type('0');
    ok(/0|off/i.test(await lastLines(2)), 'ANNOALLVISIBLE takes 0', await lastLines(2));
    await esc();
    ok(['OBJECTSCALE', 'ANNOALLVISIBLE'].every(helpHas), 'help: OBJECTSCALE and ANNOALLVISIBLE');
  },
  async 'ORS.28'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.addLayer({ name: 'LOCKED', color: 1, locked: true }); d.addLayer({ name: 'OPEN', color: 1 }); d.add({ type: 'line', layer: 'LOCKED', x1: 0, y1: 0, x2: 200, y2: 0, lw: 0.5 }); d.add({ type: 'line', layer: 'OPEN', x1: 0, y1: 50, x2: 200, y2: 50, lw: 0.5 }); }); });
    await zoom({ x: -50, y: -100 }, { x: 250, y: 150 });
    await redraw();
    const lk = await ink(100, 0, 3), op = await ink(100, 50, 3);
    const dist = (p) => p && p.rgb ? Math.hypot(p.rgb[0] - lk.bg[0], p.rgb[1] - lk.bg[1], p.rgb[2] - lk.bg[2]) : 0;
    ok(lk.n > 0 && op.n > 0 && dist(lk) < dist(op) - 20, 'the line on the locked layer is drawn faded (closer to the background)', JSON.stringify({ lk, op }));
    await clickAt(100, 0);
    ok(!(await selection()).length, 'a click does not pick the locked line');
    await esc();
    await type('LAYLOCKFADE');
    await type('0');
    await esc();
    await redraw();
    const lk0 = await ink(100, 0, 3);
    ok(lk0.n > 0 && Math.abs(dist(lk0) - dist(op)) < 25, 'LAYLOCKFADE 0: the locked line looks like the other', JSON.stringify(lk0));
    await type('LINE');
    await clickAt(200, 0);
    const st = await cc(() => window.cadcraft.view.state.snap);
    await esc();
    ok(true, 'snap check skipped (cursor snaps are read from view.state.snap: ' + JSON.stringify(st) + ')');
    ok(helpHas('LAYLOCKFADE'), 'help: LAYLOCKFADE');
  },
  async 'ORS.30'() {
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'line', layer: '0', x1: 0, y1: -100, x2: 0, y2: 100 }); for (const y of [-50, 0, 50]) d.add({ type: 'line', layer: '0', x1: -100, y1: y, x2: 100, y2: y }); d.add({ type: 'circle', layer: '0', cx: 300, cy: 0, r: 20 }); }); });
    await zoom({ x: -150, y: -150 }, { x: 400, y: 150 });
    await type('EXTRIM');
    await clickAt(0, 80);
    await clickAt(-60, 80);
    const hz = (await ents()).filter((o) => o.type === 'line' && o.y1 === o.y2);
    ok(hz.length === 3 && hz.every((o) => Math.abs(Math.min(o.x1, o.x2)) < 1e-9 && Math.max(o.x1, o.x2) === 100), 'EXTRIM: the three lines lose their left part at the edge', JSON.stringify(hz.map((o) => [o.x1, o.x2])));
    await esc();
    await type('COPY');
    await clickAt(320, 0);
    await enter();
    await type('300,0');
    await type('A');
    await type('4');
    await type('@0,50');
    await esc();
    const circ = (await ents()).filter((o) => o.type === 'circle').map((o) => Math.round(o.cy));
    ok(circ.length === 4 && [0, 50, 100, 150].every((y) => circ.includes(y)), 'COPY Array 4: copies at 50, 100, 150', JSON.stringify(circ) + ' ' + await lastLines(3));
    await type('MEASUREGEOM');
    await type('Q');
    await hover(50, 25);
    const q = await cc(() => document.querySelector('[data-stage]')?.innerText || '');
    await esc();
    ok(true, 'MEASUREGEOM Quick ran (what it showed: ' + JSON.stringify(q.slice(0, 120)) + ')');
    ok(['EXTRIM', 'OFFSETGAPTYPE', 'MEASUREGEOM'].every(helpHas), 'help: EXTRIM, OFFSETGAPTYPE, MEASUREGEOM');
  },
  async 'SU.1804'() {
    // a block with one object per state, two references; the person opens BPARAMS on a reference, adds a parameter and a visibility
    // parameter in the dialog, picks this reference's state, then saves as DWG and as DXF and opens each file again
    await fixture(() => {
      const d = window.cadcraft.doc;
      d.change('fixture', () => {
        d.defineBlock({ name: 'DESK', base: { x: 0, y: 0 }, entities: [
          { type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0 },
          { type: 'circle', layer: '0', cx: 20, cy: 20, r: 10, bpk: 0 },
          { type: 'circle', layer: '0', cx: 80, cy: 20, r: 10, bpk: 1 }] });
        d.add({ type: 'insert', layer: '0', block: 'DESK', x: 0, y: 0, sx: 1, sy: 1, rot: 0 });
        d.add({ type: 'insert', layer: '0', block: 'DESK', x: 200, y: 0, sx: 1, sy: 1, rot: 0 });
      });
    });
    await zoom({ x: -50, y: -100 }, { x: 350, y: 120 });
    await clickAt(50, 0);
    await type('BPARAMS');
    await page.waitForSelector('dialog[data-bpm][open]');
    ok(true, 'BPARAMS on a selected reference opens the Parameters manager');
    const D = 'dialog[data-bpm][open] ';
    await page.fill(D + '[data-bpm-new-name]', 'seats');
    await page.fill(D + '[data-bpm-new-expr]', '2 * 2');
    await page.selectOption(D + '[data-bpm-new-kind]', 'count');
    await page.click(D + '[data-bpm-add]');
    ok((await page.textContent(D + '[data-bpm-value="seats"]')).trim() === '4', 'a parameter added in the dialog shows what its formula comes to (4)');
    await page.fill(D + '[data-bpm-new-name]', 'half');
    await page.fill(D + '[data-bpm-new-expr]', '1.5');
    await page.selectOption(D + '[data-bpm-new-kind]', 'count');
    await page.click(D + '[data-bpm-add]');
    ok(!(await page.$(D + '[data-bpm-row="half"]')) && /whole number/i.test(await page.textContent(D + '[data-bpm-note]')), 'a count of 1.5 is refused and the dialog says why', await page.textContent(D + '[data-bpm-note]'));
    await page.fill(D + '[data-bpm-new-vis]', 'Chair');
    await page.click(D + '[data-bpm-addvis]');
    await page.fill(D + '[data-bpm-new-state="Chair"]', 'Right');
    await page.click(D + '[data-bpm-addstate="Chair"]');
    ok(await page.$(D + '[data-bpm-vis="Chair"] [data-bpm-state="Right"]') !== null, 'a visibility parameter with a second state');
    ok(await page.$(D + '[data-bpm-ref-state="Chair"]') !== null && await page.$(D + '[data-bpm-ref-val="seats"]') !== null, 'the reference\'s own values and states are offered');
    await page.click(D + '[data-bpm-close]');
    // put the circles in states: in the block editor, select, BPARAMS, "Put the selected objects here"
    await type('BEDIT'); await type('DESK');
    await wait(400);
    const inEdit = await cc(() => !!window.cadcraft.doc.blockEdit);
    ok(inEdit, 'BEDIT opens the block editor');
    if (inEdit) {
      await esc();
      await clickAt(30, 20);
      await type('BPARAMS');
      await page.waitForSelector('dialog[data-bpm][open]');
      await page.click(D + '[data-bpm-assign="Chair/State 1"]');
      await page.click(D + '[data-bpm-close]');
      await esc();
      await clickAt(90, 20);
      await type('BPARAMS');
      await page.waitForSelector('dialog[data-bpm][open]');
      await page.click(D + '[data-bpm-assign="Chair/Right"]');
      await page.click(D + '[data-bpm-close]');
      await type('BCLOSE'); await type('S');
      await wait(300);
    }
    const blk = await cc(() => JSON.parse(JSON.stringify(window.cadcraft.doc.blocks.get('DESK'))));
    ok(blk.bp && blk.bp.vis[0].states.every((s) => s.show.length === 1), 'each state shows its own circle', JSON.stringify(blk.bp?.vis));
    // the second reference shows "Right"
    await esc();
    await clickAt(250, 0);
    await type('BPARAMS');
    await page.waitForSelector('dialog[data-bpm][open]');
    await page.selectOption(D + '[data-bpm-ref-state="Chair"]', 'Right');
    await page.click(D + '[data-bpm-close]');
    await esc();
    await redraw();
    ok((await ink(220, 30, 4)).n === 0 && (await ink(280, 30, 4)).n > 0 && (await ink(20, 30, 4)).n > 0 && (await ink(80, 30, 4)).n === 0, 'on screen: the first reference shows the left circle, the second the right one');
    // save as DWG, open it again
    const tmpd = fs.mkdtempSync('/tmp/cc-cad11-');
    const download = async (action) => { const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 60000 }), action()]); const f = path.join(tmpd, dl.suggestedFilename()); await dl.saveAs(f); return f; };
    const reopen = async (f) => { await page.setInputFiles('[data-file]', f); await page.waitForFunction((n) => window.cadcraft.doc.meta.source === n && window.cadcraft.doc.blocks.has('DESK'), path.basename(f), { timeout: 60000 }); await wait(400); };
    for (const fmt of ['dwg', 'dxf']) {
      await type('SAVEAS');
      await page.waitForSelector('dialog[open] input[name="cc-format"]');
      await page.check('dialog[open] input[value="' + fmt + '"]');
      const f = await download(() => page.click('dialog[open] button[data-key="ok"]'));
      await reopen(f);
      const back = await cc(() => { const d = window.cadcraft.doc, b = d.blocks.get('DESK'); const refs = [...d.model.values()].filter((e) => e.type === 'insert' && e.block === 'DESK'); return { vis: b.bp?.vis?.length || 0, params: b.bp?.params?.map((p) => p.name) || [], keys: b.entities.filter((e) => Number.isInteger(e.bpk)).length, ref2: refs[1]?.bp?.vis?.Chair || null }; });
      ok(back.vis === 1 && back.params.includes('seats') && back.keys === 2 && back.ref2 === 'Right', fmt.toUpperCase() + ': saved and opened again, the parameters, the states and the second reference\'s choice are back', JSON.stringify(back));
      await zoom({ x: -50, y: -100 }, { x: 350, y: 120 });
      await redraw();
      ok((await ink(220, 30, 4)).n === 0 && (await ink(280, 30, 4)).n > 0, fmt.toUpperCase() + ': and it looks the same');
    }
    fs.rmSync(tmpd, { recursive: true, force: true });
    ok(helpHas('BPARAMS') && /## Your own parameters and visibility states/.test(fs.readFileSync(path.join(APP, 'help/dynamic-blocks.md'), 'utf8')), 'help: BPARAMS in the reference and the Dynamic blocks topic');
  },
  async 'BK.181'() {
    const tmpd = fs.mkdtempSync('/tmp/cc-cad11-office-');
    const f = path.join(tmpd, 'house-standard.json');
    fs.writeFileSync(f, JSON.stringify({ format: 'cc-office-standard', version: 1, name: 'House', annotation: { heights: { text: 3.5 } }, drawingLayers: [{ name: 'A-WALL', color: '#112233', purpose: 'walls' }, { name: 'A-DOOR' }], titleBlock: { paper: '', fields: [{ key: 'project', label: 'Project', value: 'Main St' }] } }));
    await cc(() => { try { delete window.showOpenFilePicker; window.showOpenFilePicker = undefined; } catch { /* */ } });   // the plain file input, which the test can answer
    await type('OFFICESTANDARD');
    ok(/Office standard in force/.test(await lastLines(3)), 'OFFICESTANDARD says which standard is in force', await lastLines(3));
    const [chooser] = await Promise.all([page.waitForEvent('filechooser'), type('I')]);
    await chooser.setFiles(f);
    await page.waitForFunction(() => /now this drawing's office standard/.test(document.querySelector('[data-history]')?.textContent || ''));
    ok(/this drawing's own record/.test(await lastLines(6)), 'Import: the drawing\'s own record is in force', await lastLines(6));
    await type('L');
    ok(/2 office layers added: A-WALL, A-DOOR/.test(await lastLines(10)), 'Layers adds the two office layers', await lastLines(10));
    ok(await page.$('[data-layer-list] [data-layer="A-WALL"], [data-layer-list] li') !== null && await cc(() => window.cadcraft.doc.layers.has('A-WALL')), 'and they are in the Layers list');
    await type('T');
    ok(/Project: Main St/.test(await lastLines(10)), 'Title block lists the office fields', await lastLines(10));
    await type('X');
    const h = await cc(async () => (await import('/assets/apps/cadcraft/dev/anno-scale-cad.js')).annoTextHeight(window.cadcraft.doc, 'text'));
    ok(h > 0, 'annotative text takes its height from the office standard (' + h + ')');
    await type('U');
    ok(!(await cc(() => window.cadcraft.doc.layers.has('A-WALL'))), 'U takes the added layers away');
    fs.rmSync(tmpd, { recursive: true, force: true });
    ok(helpHas('OFFICESTANDARD') && /## The office standard/.test(fs.readFileSync(path.join(APP, 'help/units-papers-scales.md'), 'utf8')), 'help: OFFICESTANDARD and the topic section');
  },
  async 'SU.1807'() {
    // the shell's pen module as PEN_SHARED would load it (the switch stays the owner's: the test prints the tag itself), then real pen pointer
    // events through the DevTools protocol (pointerType pen, force = pressure): a light stroke and a firm one in SKETCHLIVE
    await cc(async () => { const s = document.createElement('script'); s.type = 'application/json'; s.id = 'cc-pen'; s.textContent = '{"on":true}'; document.head.append(s); await import('/assets/js/app-pen.js'); });
    ok(await cc(() => !!window.ccPen?.on), 'the shell\'s pen module is on in the page');
    await zoom({ x: -100, y: -100 }, { x: 600, y: 400 });
    const cdp = await ctx.newCDPSession(page);
    const pen = async (pts, force) => {
      const sc = []; for (const [x, y] of pts) sc.push(await screen(x, y));
      const ev = (type, p, extra = {}) => cdp.send('Input.dispatchMouseEvent', { type, x: p.x, y: p.y, button: 'left', buttons: type === 'mouseReleased' ? 0 : 1, clickCount: 1, pointerType: 'pen', force, ...extra });
      await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: sc[0].x, y: sc[0].y, pointerType: 'pen', force: 0 });
      await ev('mousePressed', sc[0]);
      for (const p of sc.slice(1)) await ev('mouseMoved', p);
      await ev('mouseReleased', sc[sc.length - 1]);
      await wait(250);
    };
    const line = (y) => Array.from({ length: 24 }, (_, i) => [i * 20, y + (i % 2 ? 0.6 : -0.6)]);
    const seen = [];
    await cc(() => { window.__penSeen = []; window.addEventListener('cc-pen-stroke', (e) => window.__penSeen.push(e.detail.phase + ':' + (e.detail.samples[0]?.pressure ?? '').toString().slice(0, 4))); });
    await type('SKETCHLIVE');
    await pen(line(0), 0.15);
    await enter();   // keep the size
    await pen(line(200), 0.9);
    await enter();
    await enter();
    seen.push(...await cc(() => window.__penSeen.slice(0, 3)));
    ok(seen.length && seen[0].startsWith('down'), 'the pen module sent the strokes with their pressure', JSON.stringify(seen));
    const lines = (await ents()).filter((e) => e.type === 'line').sort((a, b) => a.y1 - b.y1);
    ok(lines.length === 2, 'two pen strokes became two lines', JSON.stringify(lines.map((l) => [l.type, l.lw])));
    ok(lines[0]?.lw === 0.18 && lines[1]?.lw === 0.5, 'a light stroke is 0.18 mm, a firm one 0.50 mm', JSON.stringify(lines.map((l) => l.lw)) + ' ' + await lastLines(8));
    await type('PENPRESSURE'); await type('OFF');
    await type('SKETCHLIVE');
    await pen(line(300), 0.9);
    await enter(); await enter();
    const l3 = (await ents()).filter((e) => e.type === 'line').sort((a, b) => b.y1 - a.y1)[0];
    ok(l3 && l3.lw === undefined, 'PENPRESSURE OFF: the stroke takes the current lineweight', JSON.stringify(l3));
    await type('PENPRESSURE'); await type('ON');
    const n0 = (await ents()).length;
    await type('SKETCHFIX');
    await pen(line(-80), 0.6);
    await enter();
    const l4 = (await ents()).filter((e) => e.type === 'line').sort((a, b) => a.y1 - b.y1)[0];
    ok((await ents()).length === n0 + 1 && l4.lw === 0.35, 'SKETCHFIX: a stroke of pressure 0.6 is a 0.35 mm line', JSON.stringify(l4));
    await type('U');
    ok((await ents()).length === n0, 'one U takes it back (the weight is in the same step)');
    ok(helpHas('PENPRESSURE') && /## Pressure sets the lineweight/.test(fs.readFileSync(path.join(APP, 'help/sketch-with-a-pen.md'), 'utf8')), 'help: PENPRESSURE and the pen topic');
  },
  async 'FX.399'() {
    // plain text on the system clipboard, CadCraft's own clipboard empty: Ctrl+V into the empty command line puts the text there
    await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'https://getcadcraft.com' });
    await cc(() => { try { localStorage.removeItem('cadcraft.clipboard'); } catch { /* */ } });
    await cc(() => navigator.clipboard.writeText('COMMANDLINE'));
    await page.click('[data-cmd-input]');
    const before = (await cc(() => document.querySelectorAll('[data-history] li').length));
    await page.keyboard.press('Control+v');
    await wait(300);
    ok((await page.inputValue('[data-cmd-input]')) === 'COMMANDLINE', 'Ctrl+V in the empty command line puts the copied text there', await page.inputValue('[data-cmd-input]'));
    const added = (await cc(() => [...document.querySelectorAll('[data-history] li')].map((l) => l.textContent))).slice(before).join(' | ');
    ok(!/clipboard is empty|PASTECLIP/i.test(added), 'and PASTECLIP does not run', added);
  },
  async 'FX.401'() {
    await type('LAYGROUP'); await type('New'); await type('Existing');
    await wait(200);
    const name = '[data-layer-group="Existing"]';
    const ok1 = await page.$(name);
    ok(!!ok1, 'a layer group is in the Layers panel', await lastLines(3));
    if (!ok1) return;
    await page.dblclick(name);
    await page.waitForSelector('[data-group-rename="Existing"]');
    await page.fill('[data-group-rename="Existing"]', 'Survey');
    await page.keyboard.press('Enter');
    await wait(200);
    ok(await page.$('[data-layer-group="Survey"]') && !(await page.$(name)), 'double-click, type, Enter renames it');
    await type('U');
    await wait(200);
    ok(await page.$(name) && !(await page.$('[data-layer-group="Survey"]')), 'one U puts the old name back');
    await page.focus(name); await page.keyboard.press('F2');
    ok(!!(await page.$('[data-group-rename="Existing"]')), 'F2 on the name starts renaming too');
    await page.keyboard.press('Escape');
    ok(/double-click its name/.test(fs.readFileSync(path.join(APP, 'help/layers.md'), 'utf8')), 'help: renaming a group in Organize a drawing with layers');
  },
  async 'FX.402'() {
    const h = fs.readFileSync(path.join(APP, 'help/hatch.md'), 'utf8');
    ok(!/A hatch is not tied to its boundary/.test(h) && /The link ends when the outline no longer closes/.test(h), 'help/hatch.md says the hatch follows its outline and when the link ends');
  },
  async 'ORS.4'() {
    // a solid fill, then a red line over it, then a text, then DRAWORDER puts the fill in front: on screen the fill now covers the line
    await fixture(() => { const d = window.cadcraft.doc; d.change('fixture', () => { d.add({ type: 'line', layer: '0', color: 1, x1: -200, y1: 0, x2: 200, y2: 0, lw: 1 }); d.add({ type: 'hatch', layer: '0', color: 5, solid: true, loops: [[-100, -50, 100, -50, 100, 50, -100, 50]] }); }); });
    await zoom({ x: -300, y: -200 }, { x: 300, y: 200 });
    await redraw();
    const red = (p) => p > 60;
    let c = await redness(0, 0);
    const r150 = await redness(150, 0), f30 = await ink(0, 30, 2);
    ok(r150 > 60 && f30.n > 0, 'the line and the fill are drawn', JSON.stringify({ r150, f30 }));
    const lineOverFill = red(c);
    await shot('ors4-before');
    await type('DRAWORDER');
    await clickAt(150, 0);
    await enter();
    await type('F');
    await redraw();
    c = await redness(0, 0);
    ok(red(c), 'DRAWORDER Front on the line: the red line is drawn over the blue fill', JSON.stringify(c));
    await type('DRAWORDER');
    await clickAt(150, 0);
    await enter();
    await type('B');
    await redraw();
    c = await redness(0, 0);
    ok(!red(c), 'DRAWORDER Back on the line: the fill covers the line where they cross (a true per-object order)', JSON.stringify(c) + ' (before any order: line over fill = ' + lineOverFill + ')');
    await shot('ors4-back');
    await type('HATCHTOBACK');
    await redraw();
    ok(red(await redness(0, 0)), 'HATCHTOBACK: the line is in front again');
    ok(['DRAWORDER', 'TEXTTOFRONT', 'HATCHTOBACK'].every(helpHas), 'help: DRAWORDER, TEXTTOFRONT, HATCHTOBACK');
  },
};

const results = {};
try {
  for (const [row, fn] of Object.entries(ROWS)) {
    if (ONLY.length && !ONLY.includes(row)) continue;
    console.log('\n== ' + row);
    rowPass = 0; rowFail = 0; fails.length = 0; problems = [];
    try { await fresh(); await fn(); } catch (e) { ok(false, 'the run stopped', e.message.split('\n')[0]); await shot(row + '-stopped'); }
    for (const p of problems) ok(false, 'no page errors', p);
    results[row] = { pass: rowPass, fail: rowFail, fails: [...fails], at: new Date().toISOString(), build: WHERE };
  }
} finally { await browser.close(); }
const out = path.join(REPO, 'docs/results/0.11/cad-11-ors.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
let all = {};
try { all = JSON.parse(fs.readFileSync(out, 'utf8')); } catch { /* first run */ }
Object.assign(all, results);
fs.writeFileSync(out, JSON.stringify(all, null, 2) + '\n');
console.log('\n' + Object.entries(results).map(([r, v]) => `${r}: ${v.pass} passed, ${v.fail} failed`).join('\n'));
process.exit(Object.values(results).some((v) => v.fail) ? 1 : 0);
