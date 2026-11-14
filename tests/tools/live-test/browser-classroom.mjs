#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-classroom.mjs — the class room's screens in real pages (0.9 ED.3): one teacher page and two student pages in Chromium, a
 * toy file model in each (not an app: the apps are not tried, see docs/0.9-sessions/class-room-09.md), against the real session
 * server. Real DOM: the teacher's panel, the student's notice before anything is sent, the picture from a real canvas, the bars.
 *
 *   nice -n 10 timeout 200 node tools/live-test/browser-classroom.mjs
 */
import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const JS = path.join(root, 'public_html/assets/js'), VENDOR = path.join(root, 'public_html/assets/vendor');
const TOKEN = 'bc-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let pass = 0, fail = 0;
const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log('FAIL ' + m + (x !== undefined ? ' — ' + JSON.stringify(x).slice(0, 300) : '')); } };
const until = async (f, what, ms = 15000) => { const t0 = Date.now(); while (!(await f())) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(50); } };

const srv = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN, '--plain'], { stdio: ['pipe', 'pipe', 'inherit'] });
const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: srv.stdout }).once('line', r)));

const toy = fs.readFileSync(path.join(here, 'toy-adapter.mjs'), 'utf8').replace("'../../public_html/assets/js/live-client.js'", "'/js/live-client.js'");
const page = `<!doctype html><meta charset=utf-8><title>class</title>
<script type="importmap">{"imports":{"@noble/curves/":"/vendor/noble-curves/current/","@noble/hashes/":"/vendor/noble-hashes/current/","@noble/ciphers/":"/vendor/noble-ciphers/current/"}}</script>
<canvas id=cv width=300 height=200 style="border:1px solid #888"></canvas>
<script type=module>
import { LiveClient, webSocketTransport } from '/js/live-client.js';
import { attachClassroom } from '/js/live-classroom.js';
import { toyAdapter } from '/toy.mjs';
window.mk = (name, role, own) => {
  const a = toyAdapter(name); for (const [k, v] of Object.entries(own || {})) a.model.set(k, v);
  const c = new LiveClient({ transport: webSocketTransport('ws://${addr}/live'), adapter: a, name, secure: false, role, token: role ? '${TOKEN}' : undefined });
  const cv = document.getElementById('cv'), g = cv.getContext('2d'); g.fillStyle = role ? '#fff' : '#3a7'; g.fillRect(0, 0, 300, 200); g.fillStyle = '#c33'; g.fillRect(40, 40, 120, 80);
  window.c = c; window.a = a; window.ctl = attachClassroom(c, { el: cv }, {}).api;
  if (role) c.on('join', (b) => c.approve(b.c, 'editor'));
  c.connect();
};
</script>`;
const web = http.createServer((q, s) => {
  const u = q.url.split('?')[0];
  const send = (f, t) => { try { s.writeHead(200, { 'content-type': t }); s.end(fs.readFileSync(f)); } catch { s.writeHead(404); s.end(); } };
  if (u === '/favicon.ico') { s.writeHead(204); s.end(); }
  else if (u === '/') { s.writeHead(200, { 'content-type': 'text/html' }); s.end(page); }
  else if (u === '/toy.mjs') { s.writeHead(200, { 'content-type': 'text/javascript' }); s.end(toy); }
  else if (u.startsWith('/js/')) send(path.join(JS, path.basename(u)), 'text/javascript');
  else if (u.startsWith('/vendor/')) { const f = path.join(VENDOR, u.slice(8)); if (f.startsWith(VENDOR)) send(f, 'text/javascript'); else { s.writeHead(403); s.end(); } }
  else { s.writeHead(404); s.end(); }
});
await new Promise((r) => web.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${web.address().port}/`;

const exe = (() => { const b = '/root/.cache/ms-playwright'; for (const d of fs.readdirSync(b).filter((x) => x.startsWith('chromium-')).sort().reverse()) { const f = path.join(b, d, 'chrome-linux64/chrome'); if (fs.existsSync(f)) return f; } return undefined; })();
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
const open = async (name, role, own) => {
  const p = await (await browser.newContext()).newPage();
  p.errors = []; p.on('pageerror', (e) => p.errors.push(String(e))); p.on('console', (m) => { if (m.type() === 'error') p.errors.push(m.text()); });
  await p.goto(base); await p.evaluate(([n, r, o]) => window.mk(n, r, o), [name, role, own]);
  return p;
};
try {
  const T = await open('Ms Teacher', 'host', { mine: { own: 'teacher file' } });
  await until(() => T.evaluate(() => window.c.status === 'live'), 'teacher live');
  const tBtn = T.locator('[data-live-classroom] button').first();
  ok(await tBtn.isVisible(), 'the teacher sees the Class room button');
  await tBtn.click();
  ok(await T.locator('[data-class-start]').isEnabled(), 'Start a class room is offered while nobody has joined');
  await T.locator('[data-class-start]').click();
  await until(() => T.evaluate(() => window.ctl.mode === 'host'), 'class started');

  const A = await open('Ana', undefined, { fa: { v: 'ana file' } });
  const B = await open('Ben', undefined, { fb: { v: 'ben file' } });
  for (const [P, nm] of [[A, 'Ana'], [B, 'Ben']]) {
    await until(() => P.locator('[data-class-notice]').isVisible(), nm + ' is asked');
    const txt = await P.locator('[data-class-notice]').innerText();
    ok(/look in at your work/.test(txt) && /Nothing is sent until you join/.test(txt), nm + ': the notice says the teacher can look in and that nothing is sent first');
    ok(await P.evaluate(() => window.a.model.has('fa') || window.a.model.has('fb')), nm + ': own file still there');
  }
  await sleep(400);
  ok(await T.evaluate(() => [...window.ctl.store.rooms.values()].every((r) => !r.snap && !r.edits)), 'nothing reached the teacher before the students joined');
  ok(/Joined, has not accepted yet/.test(await T.locator('[data-class-panel]').innerText()), 'the teacher panel says they have not accepted');

  await A.locator('[data-class-join]').click(); await B.locator('[data-class-join]').click();
  await until(() => T.evaluate(() => window.ctl.roster().filter((s) => s.thumb && s.hasCopy).length === 2), 'both copies and pictures at the teacher');
  const imgs = await T.locator('[data-class-panel] img').evaluateAll((l) => l.map((i) => [i.naturalWidth, i.alt]));
  ok(imgs.length === 2 && imgs.every(([w]) => w > 0), 'a real picture of each student file shows in the teacher panel', imgs);
  ok(/Class room · 2 of 2 working/.test(await T.locator('[data-live-classroom] button').first().innerText()), 'the count reads 2 of 2 working');
  ok(/can look in at your work/.test(await A.locator('[data-class-bar]').innerText()), 'the student has the reminder bar all the time');

  await A.evaluate(() => window.a.edit('draw', [{ op: 'add', id: 'ln1', obj: { n: 'line' } }]));
  await until(() => T.evaluate(() => window.ctl.roster().find((s) => s.name === 'Ana').edits === 1), 'edit seen');
  await T.waitForTimeout(2200);
  ok(/last edit \d+ s ago/.test(await T.locator('[data-room]', { hasText: 'Ana' }).innerText()), 'the card shows the last edit time');

  await T.locator('[data-class-look]').first().click();
  await until(() => T.evaluate(() => window.ctl.looking !== null), 'looking in');
  ok(await T.evaluate(() => window.a.model.has('ln1') && !window.a.model.has('mine')), 'the teacher window shows Ana\'s file and has set its own aside');
  ok(/read-only copy/.test(await T.locator('[data-class-bar]').innerText()), 'the bar says it is a read-only copy');
  ok(/Do not save while looking in/.test(await T.locator('[data-class-bar]').innerText()), 'the bar warns not to save');
  await T.evaluate(() => window.a.edit('x', [{ op: 'add', id: 'no', obj: {} }]));
  ok(await T.evaluate(() => !window.a.model.has('no')), 'a teacher edit while looking in is taken back');
  await T.locator('button', { hasText: /^Help$/ }).click();
  await until(() => A.evaluate(() => window.ctl.helper), 'student told');
  ok(/Ms Teacher is helping in your file/.test(await A.locator('[data-class-bar]').innerText()), 'the student is told who is in their file');
  ok(!/helping/.test(await B.locator('[data-class-bar]').innerText()), 'the other student is not told anything');
  await T.evaluate(() => window.a.edit('fix', [{ op: 'set', id: 'ln1', f: 'color', v: 'red' }]));
  await until(() => A.evaluate(() => window.a.model.get('ln1').color === 'red'), 'help edit arrives');
  await T.locator('button', { hasText: /^Back to class$/ }).click();
  await until(() => T.evaluate(() => window.ctl.looking === null), 'back');
  ok(await T.evaluate(() => window.a.model.has('mine') && !window.a.model.has('ln1')), 'the teacher\'s own file is back');
  ok(await B.evaluate(() => window.a.model.size === 1 && window.a.model.has('fb')), 'Ben\'s file was never touched');
  for (const [P, n] of [[T, 'teacher'], [A, 'Ana'], [B, 'Ben']]) ok(P.errors.length === 0, n + ': no page errors', P.errors);
} catch (e) { fail++; console.log('FAIL ' + e.message); }
await browser.close(); web.close(); srv.stdin.end(); srv.kill();
console.log(`browser class room: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
