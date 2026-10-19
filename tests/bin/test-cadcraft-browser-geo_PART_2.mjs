#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-browser-geo_PART_2.mjs — 0.6 GEO-DWG in CadCraft (/lab), headless (session cad-extra_PART_2). The Node checks
 * are bin/test-cadcraft.mjs § The coordinate system and map layers in the file; other programs: tools/dwg-test/geodata-check.mjs.
 *
 *   node bin/test-cadcraft-browser-geo_PART_2.mjs [--shots <dir>]
 *
 * Run as root (a session minted by `sudo -u www-data php tools/cadcraft-test/admin.php session` for the test admin
 * cctest+cadcraft@projectz.xyz). Uses the cached Playwright Chromium. Fails on any console error. No map server is asked
 * for anything: the internet switch stays off.
 *   MAPLAYERS: EPSG:32614 with drawing 0,0 at E 500 000, N 3 300 000, turned 30°, and an XYZ layer → kept in the drawing
 *   (doc.meta.geo), not in this browser; each change one undo step (Ctrl+Z / Ctrl+Y); Ctrl+S (DWG 2018) → the file's GEODATA
 *   names EPSG:32614 with that place; NEW → no layers; the saved file opened again (its own tab) → the system and the layer
 *   are back in the dialog; switching tabs swaps them; DWG 2000 → the save says other programs will not see the location.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://getcadcraft.com';
const args = process.argv.slice(2);
const si = args.indexOf('--shots');
const SHOTS = si >= 0 ? args[si + 1] : null;
if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });

let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
const { readDwg } = await import(pathToFileURL(path.join(REPO, 'lib/dwg/read.js')).href);
const Gd = await import(pathToFileURL(path.join(REPO, 'public_html/assets/apps/cadcraft/dev/geodwg.js')).href);

const { chromium } = await import('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(REPO, 'tools/cadcraft-test/admin.php'), 'session'], { encoding: 'utf8' }));

const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1'] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block', acceptDownloads: true });
await ctx.addCookies([{ name: admin.name, value: admin.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
const page = await ctx.newPage();
const problems = [], asked = [];
page.on('console', (m) => { if (m.type() === 'error') problems.push('console: ' + m.text()); });
page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
page.on('request', (r) => { if (/tile\.example\.invalid/.test(r.url())) asked.push(r.url()); });
const shot = async (name) => { if (SHOTS) await page.screenshot({ path: path.join(SHOTS, name + '.png') }); };
const typeCmd = async (s) => { await page.click('[data-cmd-input]'); await page.keyboard.type(s); await page.keyboard.press('Enter'); await page.waitForTimeout(150); };
const download = async (action) => {
  const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 30000 }), action()]);
  const f = await dl.path();
  return { name: dl.suggestedFilename(), file: f, bytes: fs.readFileSync(f) };
};
const history = () => page.evaluate(() => document.querySelector('[data-history]')?.textContent || '');
const geo = () => page.evaluate(() => window.cadcraft.doc.meta.geo || null);
const layerCount = () => page.evaluate(() => window.cadcraft.host.maps.api()?.layers().length ?? 0);
const closeDialog = async () => { await page.click('[data-map-dialog] [data-close]'); await page.waitForTimeout(200); };

try {
  console.log('\n== GEO-DWG the coordinate system and map layers saved with the drawing');
  await page.goto(BASE + '/lab/cadcraft?space=paper', { waitUntil: 'networkidle' });
  await page.evaluate(() => { localStorage.removeItem('cadcraft.maps'); localStorage.setItem('cadcraft.dwgVersion', '2018'); });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.cadcraft);
  await page.evaluate(() => { window.cadcraft.doc.meta.units = 'meters'; window.cadcraft.doc.meta.name = 'site-geo'; });
  await typeCmd('LINE'); await typeCmd('0,0'); await typeCmd('100,50'); await page.keyboard.press('Escape');
  await typeCmd('MAPLAYERS');
  await page.waitForSelector('[data-map-dialog]', { timeout: 30000 });
  await page.fill('[data-map-crs-q]', '32614');
  await page.selectOption('[data-map-crs-pick]', '32614');
  for (const [k, v] of [['x', '0'], ['y', '0'], ['e', '500000'], ['n', '3300000'], ['rot', '30']]) await page.fill(`[data-map-place="${k}"]`, v);
  await page.click('[data-map-crs-apply]');
  ok(/EPSG:32614/.test(await page.textContent('[data-map-crs]')), 'EPSG:32614 chosen, drawing 0,0 at E 500 000, N 3 300 000, turned 30°');
  await page.selectOption('[data-map-kind]', 'xyz');
  await page.fill('[data-map-url]', 'https://tile.example.invalid/{z}/{x}/{y}.png');
  await page.fill('[data-map-name]', 'Site tiles');
  await page.click('[data-map-add-xyz]');
  await page.waitForTimeout(200);
  ok(/Kept with the drawing|saved with the drawing/i.test(await page.textContent('[data-map-dialog]')), 'the dialog says the system and the layers are saved with the drawing');
  await shot('geo-01-dialog');
  await closeDialog();
  const g1 = await geo();
  ok(g1?.crs?.code === 32614 && g1.crs.unit === 'm' && near(g1.crs.place.e, 500000) && near(g1.crs.place.rot, 30) && g1.layers.length === 1 && g1.layers[0].name === 'Site tiles', 'kept in the drawing (doc.meta.geo)', JSON.stringify(g1));
  const local = await page.evaluate(() => JSON.parse(localStorage.getItem('cadcraft.maps') || '{}'));
  ok(!('layers' in local) && !('crs' in local), 'not in this browser (only the internet switch is)', JSON.stringify(local));
  ok(asked.length === 0, 'no map server asked: the internet switch is off');
  // undo / redo
  await page.click('[data-cmd-input]'); await page.keyboard.press('Escape');
  await page.keyboard.press('Control+z'); await page.waitForTimeout(250);
  ok((await geo())?.layers?.length === 0 && (await geo())?.crs?.code === 32614 && await layerCount() === 0, 'Ctrl+Z takes the layer away (the system stays)');
  await page.keyboard.press('Control+y'); await page.waitForTimeout(400);
  ok((await geo())?.layers?.length === 1 && await layerCount() === 1, 'Ctrl+Y puts it back');
  // save: DWG 2018 holds GEODATA
  const dwg = await download(() => page.keyboard.press('Control+s'));
  ok(/\.dwg$/.test(dwg.name), 'Ctrl+S saves a DWG', dwg.name);
  const m = readDwg(new Uint8Array(dwg.bytes));
  const gd = m.objects.find((o) => o.type === 'GEODATA'), ms = m.tables.blockRecords.find((r) => /^\*model_space$/i.test(r.name));
  ok(m.version === 'AC1032' && gd && gd.host === ms.handle && Gd.epsgOf(gd.csDef) === 32614 && near(gd.referencePoint.x, 500000) && near(gd.north.x, 0.5) && gd.unitsH === 6, 'the DWG 2018 has GEODATA on the model space: EPSG:32614, E 500 000, north 30°, metres', JSON.stringify(gd && { rp: gd.referencePoint, n: gd.north }));
  // a new drawing has none of it
  await typeCmd('NEW');
  await page.waitForTimeout(500);
  ok(!(await geo()) && await layerCount() === 0, 'NEW: a new drawing has no system and no layers');
  // the saved file again: drawn on first, so it opens in a tab of its own
  await typeCmd('LINE'); await typeCmd('0,0'); await typeCmd('10,0'); await page.keyboard.press('Escape');
  await page.setInputFiles('[data-file]', { name: 'site-geo.dwg', mimeType: 'application/acad', buffer: dwg.bytes });
  await page.waitForFunction(() => /^site-geo/.test(window.cadcraft.doc.meta.name || '') && window.cadcraft.doc.meta.geo, null, { timeout: 30000 });
  await page.waitForTimeout(600);
  const g2 = await geo();
  ok(g2?.crs?.code === 32614 && near(g2.crs.place.n, 3300000) && g2.layers.length === 1 && await layerCount() === 1, 'opened again (its own tab): the system, the place and the layer are back', JSON.stringify(g2));
  await typeCmd('MAPLAYERS');
  await page.waitForSelector('[data-map-dialog]', { timeout: 30000 });
  ok(/EPSG:32614/.test(await page.textContent('[data-map-crs]')) && /Site tiles/.test(await page.textContent('[data-map-dialog] [data-map-row]')), 'the dialog shows them');
  await shot('geo-02-reopened');
  await closeDialog();
  // tabs swap them
  const tabNamed = (re) => page.locator('[data-doctabs] .cc-doctab').filter({ hasText: re });
  const nTabs = await page.locator('[data-doctabs] .cc-doctab').count();
  if (nTabs >= 2) {   // the first drawing, NEW's Drawing1 (a tab of its own: the first had changes), the file opened again
    await tabNamed(/^Drawing1/).click(); await page.waitForTimeout(600);
    const st = () => page.evaluate(() => JSON.stringify({ name: window.cadcraft.doc.meta.name, geo: !!window.cadcraft.doc.meta.geo, n: window.cadcraft.host.maps.api()?.layers().length ?? null, tabs: [...document.querySelectorAll('[data-doctabs] .cc-doctab')].map((b) => b.textContent + ':' + b.getAttribute('aria-selected')) }));
    ok(!(await geo()) && await layerCount() === 0, 'the Drawing1 tab: its own drawing, no layers', await st());
    await tabNamed(/^site-geo/).last().click(); await page.waitForTimeout(600);
    ok((await geo())?.layers?.length === 1 && await layerCount() === 1, 'back: the layer is there again', await st());
  } else ok(false, 'two document tabs after opening', String(nTabs));
  // DWG 2000: the location is CadCraft's only, said
  await page.evaluate(() => { window.cadcraft.doc.meta.dwgVersion = '2000'; });
  const before = (await history()).length;
  const old = await download(() => page.keyboard.press('Control+s'));
  const said = (await history()).slice(before), ver = readDwg(new Uint8Array(old.bytes)).version;
  ok(ver === 'AC1015' && /other programs read a drawing’s location from DWG 2010 or newer/.test(said), 'DWG 2000: saved, and the save says other programs will not see the location', ver + ' | ' + said.slice(0, 400));
  ok(asked.length === 0, 'still no map server asked');
} finally {
  await page.evaluate(() => { try { localStorage.removeItem('cadcraft.dwgVersion'); } catch {} }).catch(() => {});
  await browser.close();
}
for (const p of problems) { fail++; console.log('  FAIL ' + p); }
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
