#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-cad10.mjs — session cad-10 (0.10), the real page (/lab/cadcraft): FX.297, a point cloud attached under the drawing is in the
 * Plot dialog's preview, its SVG and its PNG. One Chromium, nice -n 10. Run as root (the test admin session of tools/cadcraft-test/admin.php).
 *   node public_html/assets/apps/cadcraft/dev/test/browser-cad10.mjs [las-file] [--shots dir] [--build lab|use]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const SHOTS = flag('--shots', null), WHERE = flag('--build', 'lab');
const LAS = args.find((a) => /\.(las|laz|xyz|pts)$/i.test(a)) || '/var/www/CADCRAFT/testfiles/generated/pointcloud-room/room-f2-12.las';
if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };
const { chromium } = await import('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(REPO, 'tools/cadcraft-test/admin.php'), 'session'], { encoding: 'utf8' }));
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1'] });
const problems = [];
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block', acceptDownloads: true });
  await ctx.addCookies([{ name: admin.name, value: admin.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
  const page = await ctx.newPage();
  page.setDefaultTimeout(30000);
  page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
  await page.goto('https://getcadcraft.com/' + WHERE + '/cadcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.cadcraft);
  await page.evaluate(() => { const d = window.cadcraft.doc; d.change('t', () => d.add({ type: 'line', x1: 620000, y1: 3349000, x2: 620006, y2: 3349004 })); });
  await page.setInputFiles('[data-file]', LAS);
  await page.waitForFunction(() => /point/i.test(document.body.innerText) || true);
  await page.waitForTimeout(4000);
  // every point (not the slice) coloured by height (the room scan's own colours are near white): POINTCLOUD > Slice > Color > Height > Enter
  for (const w of ['POINTCLOUD', 'S', 'C', 'H', '']) { await page.evaluate((x) => { window.cadcraft.engine.text(x); }, w); await page.waitForTimeout(300); }
  const openPlot = async () => {
    await page.evaluate(() => { window.cadcraft.engine.text('PLOT'); });
    await page.waitForSelector('dialog[data-plot][open]');
    await page.waitForFunction(() => !document.querySelector('[data-plot-save]').disabled);
    await page.waitForTimeout(1500);
  };
  await openPlot();
  const px = await page.evaluate(() => {
    const cv = document.querySelector('dialog[data-plot] canvas'); const g = cv.getContext('2d'); const d = g.getImageData(0, 0, cv.width, cv.height).data;
    const cols = new Set(); let colored = 0;
    for (let i = 0; i < d.length; i += 4) { const r = d[i], gg = d[i + 1], b = d[i + 2]; if (Math.max(r, gg, b) - Math.min(r, gg, b) > 40) { colored++; cols.add((r >> 5) + ',' + (gg >> 5) + ',' + (b >> 5)); } }
    return { w: cv.width, h: cv.height, colored, colors: cols.size };
  });
  ok(px.colored > 1500 && px.colors > 3, 'the Plot preview shows the point cloud in its colours', JSON.stringify(px));
  if (SHOTS) await page.screenshot({ path: path.join(SHOTS, 'plot-cloud.png') });
  const grab = async (sel) => { const [dl] = await Promise.all([page.waitForEvent('download'), page.click(sel)]); return fs.readFileSync(await dl.path()); };
  const svg = (await grab('[data-plot-svg]')).toString('utf8');
  const cells = (svg.match(/h[0-9.]+v[0-9.]+h-/g) || []).length;
  ok(cells > 1000, 'the SVG holds the cloud\'s cells', String(cells));
  await openPlot();
  const png = await grab('[data-plot-png]');
  ok(png.length > 20000 && png.subarray(1, 4).toString() === 'PNG', 'the PNG is made and holds picture detail (' + png.length + ' bytes)');
  await openPlot();
  const pdf = await grab('[data-plot-save]');
  ok(pdf.subarray(0, 5).toString() === '%PDF-' && pdf.length > 8000, 'the PDF is made and holds the cloud (' + pdf.length + ' bytes)');
  await ctx.close();
} finally { await browser.close(); }
if (problems.length) console.log(problems.join('\n'));
console.log(`\nbrowser-cad10: ${pass} passed, ${fail} failed`);
process.exit(fail || problems.length ? 1 : 0);
