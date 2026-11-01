#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-live.mjs — CadCraft's Studio Live adapter (assets/apps/cadcraft/dev/live.js; 0.5 LV.8 / LV.9, session
 * live-apps) against the real session server (tools/live-test/server's `live-server`, the Rust code Studio runs).
 * Several CadCraft drawings (Doc + Engine, driven through the command line as a person would) share one session.
 *
 *   node bin/test-cadcraft-live.mjs [--only <substring>] [--verbose] [--fuzz <steps>]
 *
 * Covers: steps → ops (every record kind doc.change() makes), invert + apply round trips, a joiner's snapshot, ids in
 * each client's range, property writes from two people on one line both kept, move vs delete, a block purged while
 * someone places it (refused by the replica's validate), a layer renamed while someone draws on it, text held while
 * typed, sheets, per-person undo of a whole command (and skipped when someone wrote over it), undo inside a command,
 * the drawing moving to another tab and back, a random multi-client run converging to one drawing.
 * Needs the server built: (cd tools/live-test/server && cargo build --release) — done here when it is missing and Rust is installed.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import readline from 'node:readline';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const ONLY = opt('--only', null);
const VERBOSE = args.includes('--verbose');
const FUZZ = +opt('--fuzz', 300);
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft/dev');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const G = await load('geom.js');
const { Doc } = await load('doc.js');
const { Engine } = await load('commands.js');
const { createLive, ID_BLOCK } = await load('live.js');
const { LiveClient, webSocketTransport, pack, unpack } = await load('live-client.js');

const BIN = path.join(ROOT, 'tools/live-test/server/target/release/live-server');
const TOKEN = 'cad-live-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let pass = 0, fail = 0;
const ok = (c, name, extra) => { if (c) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra !== undefined ? ' — ' + (typeof extra === 'string' ? extra : JSON.stringify(extra)) : '')); } };
const tests = [];
const test = (name, fn) => tests.push({ name, fn });

// ---- a CadCraft window: Doc + Engine with a stub host (as bin/test-cadcraft.mjs), plus its live adapter --------------
function cad(name) {
  const doc = new Doc();
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(), shift: false,
    print: () => {}, prompt: () => {}, setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: () => {},
  };
  const eng = new Engine(doc, host);
  const groups = new WeakMap(); let gn = 0;
  const adapter = createLive(doc, { engine: eng, group: () => { if (!eng.busy) return 's' + (++gn); if (!groups.has(eng.done)) groups.set(eng.done, 'c' + (++gn)); return groups.get(eng.done); } });
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await tick(); } await eng.done; };
  return { name, doc, eng, host, adapter, type, tick };
}

// ---- the server and clients --------------------------------------------------------------------------------------
const servers = [], clients = [];
async function server() {
  const p = spawn(BIN, ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN, '--plain', '--auto-approve'], { stdio: ['pipe', 'pipe', 'inherit'] });
  const line = await new Promise((res) => readline.createInterface({ input: p.stdout }).once('line', res));
  const s = { url: `ws://${JSON.parse(line).addr}/live`, stop: () => { p.stdin.end(); p.kill(); } };
  servers.push(s);
  return s;
}
function connect(srv, w, opts = {}) {
  const c = new LiveClient(Object.assign({ transport: webSocketTransport(srv.url), adapter: w.adapter, name: w.name, device: 'test', secure: false }, opts));
  c.events = [];
  for (const t of ['status', 'refused', 'undo-skipped', 'loaded']) c.on(t, (d) => c.events.push([t, d]));
  w.adapter.bind(c);
  w.client = c;
  clients.push(c);
  c.connect();
  return c;
}
async function until(cond, what, ms = 6000) {
  const t0 = Date.now();
  while (!cond()) { if (Date.now() - t0 > ms) throw new Error('timed out waiting for ' + what); await sleep(5); }
}
const live = (...ws) => until(() => ws.every((w) => w.client.status === 'live'), 'live: ' + ws.map((w) => w.name + '=' + w.client.status).join(', '));
async function settled(...ws) {
  const cs = ws.map((w) => w.client);
  const quiet = () => cs.every((c) => c.pending.length === 0 && c.inbox.length === 0 && !c.flushQueued && !c.loading) && new Set(cs.map((c) => c.q)).size === 1;
  await until(quiet, 'settled: ' + cs.map((c) => `${c.o.name} q${c.q} p${c.pending.length}`).join(', '));
  await sleep(25);
  await until(quiet, 'settled again');
  await sleep(1);
}
const sameDrawing = (ws, label) => {
  const h = ws.map((w) => w.adapter.hash());
  const okAll = h.every((x) => x === h[0]);
  ok(okAll, label || 'every window shows the same drawing', okAll ? undefined : ws.map((w, i) => w.name + ' ' + h[i].length).join(', '));
  if (!okAll && VERBOSE) for (let i = 1; i < h.length; i++) if (h[i] !== h[0]) { let j = 0; while (h[i][j] === h[0][j]) j++; console.log('    diff at', j, '\n    ' + h[0].slice(j - 80, j + 120) + '\n    ' + h[i].slice(j - 80, j + 120)); }
};
const diffAt = (x, y) => { let j = 0; while (x[j] === y[j] && j < x.length) j++; return x === y ? undefined : x.slice(Math.max(0, j - 100), j + 80) + '  ≠  ' + y.slice(Math.max(0, j - 100), j + 80); };
const ev = (w, t) => w.client.events.filter(([x]) => x === t).map(([, d]) => d);
const lines = (w) => w.doc.all().filter((e) => e.type === 'line');

/** The same starting drawing in any window: same ids, as two people opening the same file get. */
function starter(w) {
  const d = w.doc;
  d.change('setup', () => {
    d.setLayerState({ list: [...d.layers.values(), { name: 'Walls', color: 1, on: true, frozen: false, locked: false, plot: true, linetype: 'Continuous', lineweight: -3 }, { name: 'Notes', color: 3, on: true, frozen: false, locked: false, plot: true, linetype: 'Continuous', lineweight: -3 }], current: '0' });
    d.add({ type: 'line', layer: 'Walls', x1: 0, y1: 0, x2: 10, y2: 0 });
    d.add({ type: 'circle', layer: '0', cx: 5, cy: 5, r: 2 });
    d.add({ type: 'text', layer: 'Notes', x: 0, y: 10, h: 2.5, rot: 0, s: 'KITCHEN', ha: 'left', va: 'baseline' });
    d.defineBlock({ name: 'CHAIR', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', cx: 0, cy: 0, r: 0.5 }] });
    d.add({ type: 'insert', layer: '0', block: 'CHAIR', x: 20, y: 20, sx: 1, sy: 1, rot: 0 });
    d.setLayouts([{ name: 'Sheet 1', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() }]);
  });
  // every window builds the same start on its own, as if each had opened one file: same keys (DC.27 hands out random ones, so pin them like a file's "f<place>" keys)
  for (const e of [...d.model.values(), ...d.layouts.flatMap((l) => [...l.entities.values()])]) if (e.key !== undefined) e.key = 'f' + e.id;
  d.undoStack.length = 0; d.redoStack.length = 0;
  d.markSaved();
  return w;
}

/** A host window with the drawing, a replica (validate + snapshots, as Studio runs one), and joiners from snapshots. */
async function session(n = 2) {
  const srv = await server();
  const host = starter(cad('Host'));
  connect(srv, host, { role: 'host', token: TOKEN });
  const rep = starter(cad('Replica'));
  connect(srv, rep, { role: 'replica', token: TOKEN });
  await until(() => host.client.status === 'live' && rep.client.welcomed, 'host + replica');
  const joiners = [];
  for (let i = 0; i < n; i++) { const w = cad(['Ana', 'Ben', 'Cy', 'Dee', 'Eve'][i]); connect(srv, w); joiners.push(w); }
  await live(host, ...joiners);
  await settled(host, ...joiners);
  return { srv, host, rep, joiners, all: [host, ...joiners] };
}

// ---------------------------------------------------------------------------------------------------------------------
// Without a server: steps → ops → another drawing

test('steps become ops that rebuild the same drawing elsewhere, and their inverse puts it back', async () => {
  const a = starter(cad('A')), b = starter(cad('B'));
  const ops = [];
  a.adapter.bind({ c: 3, prefix: 'c3', on: () => {}, localChange: (s) => { ops.push(s); return ops.length; }, undoStack: [], redoStack: [] });
  ok(a.doc.liveHook, 'bind sets doc.liveHook');
  await a.type('L', '1,1', '5,1', '5,5', '');
  ok(ops.length >= 1 && ops.every((s) => s.ops.length && s.inverse.length), 'LINE reported as steps with ops and an inverse', ops.length);
  const ids = lines(a).map((e) => e.id).filter((id) => id > 3e9);
  ok(ids.length === 2 && ids.every((id) => id > 3 * ID_BLOCK && id < 4 * ID_BLOCK), 'new objects take ids in the client\'s own range', ids);
  const roundtrip = (s) => unpack(pack(Array.isArray(s) ? s : s.ops));
  for (const s of ops) b.adapter.apply(roundtrip(s), 'remote');
  ok(a.adapter.hash() === b.adapter.hash(), 'the other window draws the same lines (through MessagePack)');
  // every record kind: layer table, block, sheet, meta, views, styles, a moved and recoloured line, a deleted circle
  const n0 = ops.length;
  const d = a.doc, line = lines(a)[0], circle = d.all().find((e) => e.type === 'circle');
  d.setLayer('Walls', { color: 5 });
  d.setLayer('Notes', { name: 'Labels' });
  d.change('mix', () => {
    d.update(line.id, { ...line, x1: 2, y1: 2, color: 4 });
    d.remove(circle.id);
    d.defineBlock({ name: 'TABLE', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 0 }] });
    d.add({ type: 'insert', layer: '0', block: 'TABLE', x: 1, y: 1, sx: 1, sy: 1, rot: 0 });
    d.setMeta({ lunits: 4, luprec: 4 });
    d.setViews([{ name: 'Front', cx: 1, cy: 2, w: 3, h: 4 }]);
    d.setStyle('textStyles', 'Notes', { font: 'Arial', h: 0, wf: 1, obl: 0 });
    const sheet = d.layouts[0];
    d.setLayouts([{ ...sheet, name: 'A-101' }, { name: 'A-102', paper: { w: 594, h: 420, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() }]);
    d.add({ type: 'viewport', layer: '0', x: 10, y: 10, w: 100, h: 80, cx: 5, cy: 5, s: 1 }, d.layouts[1].entities);
  });
  ok(ops.length === n0 + 3, 'two layer changes and one mixed change → three steps', ops.length - n0);
  const kinds = new Set(ops.slice(n0).flatMap((s) => s.ops.map((o) => o.o)));
  for (const k of ['layp', 'lay', 'set', 'del', 'blk', 'add', 'meta', 'views', 'sty', 'lo', 'lop']) ok(kinds.has(k), 'op kind ' + k + ' made');
  ok(!ops.slice(n0).some((s) => s.ops.some((o) => o.o === 'lay' && o.v && 'current' in o.v)), 'the current layer is never sent');
  for (const s of ops.slice(n0)) b.adapter.apply(roundtrip(s), 'remote');
  ok(a.adapter.hash() === b.adapter.hash(), 'every kind rebuilds the same drawing');
  ok(b.doc.layers.has('Labels') && !b.doc.layers.has('Notes') && b.doc.all().some((e) => e.type === 'text' && e.layer === 'Labels'), 'layer rename moves its objects');
  ok(b.doc.layouts.map((l) => l.name).join() === 'A-101,A-102' && b.doc.layouts[1].entities.size === 1, 'sheets renamed, added with their viewport');
  // inverse: last step first
  for (const s of ops.slice(n0).reverse()) { b.adapter.apply(roundtrip(s.inverse), 'remote'); }
  const c0 = starter(cad('C'));
  for (const s of ops.slice(0, n0)) c0.adapter.apply(roundtrip(s), 'remote');
  const H = (w) => w.adapter.hash({ order: false });
  ok(H(b) === H(c0), 'the inverse ops put every kind back', diffAt(H(b), H(c0)));
  // invert() (from the current state) gives the same as the recorded inverse
  const s = ops[n0 + 2];
  const fresh = starter(cad('F'));
  for (const x of ops.slice(0, n0 + 2)) fresh.adapter.apply(roundtrip(x), 'remote');
  const inv = fresh.adapter.invert(roundtrip(s));
  fresh.adapter.apply(roundtrip(s), 'remote');
  fresh.adapter.apply(inv, 'remote');
  const ref = starter(cad('R'));
  for (const x of ops.slice(0, n0 + 2)) ref.adapter.apply(roundtrip(x), 'remote');
  ok(H(fresh) === H(ref), 'invert() read from the drawing undoes the mixed step', diffAt(H(fresh), H(ref)));
  a.adapter.unbind();
  ok(!a.doc.liveHook, 'unbind clears the hook');
});

test('the block editor\'s own space and personal settings never travel', async () => {
  const a = starter(cad('A'));
  const ops = [];
  a.adapter.bind({ c: 2, prefix: 'c2', on: () => {}, localChange: (s) => { ops.push(s); return ops.length; }, undoStack: [], redoStack: [] });
  const d = a.doc;
  d.current.layer = 'Walls'; d.current.color = 3;
  const map = new Map();
  d.change('bedit draw', () => d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 1 }, map));
  ok(ops.length === 0, 'an edit in a space that is not the model or a sheet is not sent');
  d.undo();
  ok(map.size === 0, 'and the Doc undoes it locally');
});

test('validate refuses what would break the drawing', async () => {
  const a = starter(cad('A'));
  const V = (ops) => a.adapter.validate(ops);
  ok(V([{ o: 'add', id: 9, sp: '', m: 'c', e: { type: 'insert', layer: '0', block: 'NOPE', x: 0, y: 0, sx: 1, sy: 1, rot: 0 } }]) === 'no-block', 'an insert of a missing block');
  ok(V([{ o: 'blk', name: 'CHAIR', m: 'd', v: null }]) === 'block-in-use', 'removing a block still placed');
  const ins = a.doc.all().find((e) => e.type === 'insert');
  ok(V([{ o: 'del', id: ins.id, sp: '', ly: '0' }, { o: 'blk', name: 'CHAIR', m: 'd', v: null }]) === null, 'removing it with its last reference is fine');
  ok(V([{ o: 'lay', name: 'Walls', m: 'd', v: null }]) === 'layer-in-use', 'deleting a layer with objects on it');
  ok(V([{ o: 'lay', name: '0', m: 'd', v: null }]) === 'layer-zero', 'deleting layer 0');
  ok(V([{ o: 'add', id: 9, sp: '', m: 'c', e: { type: 'hatch', layer: '0', loops: [[0, 0, 1, 0]] } }]) === 'hatch', 'a hatch boundary that is not closed');
  ok(V([{ o: 'par', v: { constraints: [{ id: 'k1', type: 'horizontal', refs: [{ e: 424242, k: 'L' }] }], params: { vars: [], links: [] } } }]) === 'constraint', 'a constraint on an object that is not there');
});

// ---------------------------------------------------------------------------------------------------------------------
// With the session server

test('a joiner gets the drawing, both draw, ids never clash, everyone converges', async () => {
  const { host, rep, joiners: [ana, ben], all } = await session(2);
  ok(ev(ana, 'loaded').length === 1, 'Ana caught up from a snapshot');
  sameDrawing([host, ana, ben, rep], 'joiners and the replica start with the host\'s drawing');
  ok(ana.doc.layouts.length === 1 && ana.doc.blocks.has('CHAIR'), 'sheets and blocks came along');
  await Promise.all([ana.type('L', '0,20', '10,20', ''), ben.type('L', '0,30', '10,30', ''), host.type('C', '50,50', '3')]);
  await settled(...all);
  sameDrawing([...all, rep]);
  const ids = host.doc.all().map((e) => e.id);
  ok(new Set(ids).size === ids.length, 'no two objects share an id');
  const range = (y) => Math.floor(host.doc.all().find((e) => e.type === 'line' && e.y1 === y).id / ID_BLOCK);
  ok(range(20) === ana.client.c && range(30) === ben.client.c, 'each person draws in their own id range', [range(20), range(30), ana.client.c, ben.client.c]);
});

test('two people change different properties of one line: both kept; the same property: the later one', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  const id = lines(host)[0].id;
  const upd = (w, patch) => { const e = w.doc.model.get(id); w.doc.change('PROP', () => w.doc.update(id, { ...e, ...patch })); };
  upd(ana, { color: 1 });
  upd(ben, { x2: 30, y2: 5 });
  await settled(...all);
  sameDrawing(all);
  const e = host.doc.model.get(id);
  ok(e.color === 1 && e.x2 === 30 && e.y2 === 5, 'colour from Ana and the end point from Ben', e);
  upd(ana, { color: 2 });
  await settled(...all);
  upd(ben, { color: 6 });
  await settled(...all);
  ok(host.doc.model.get(id).color === 6, 'the later colour wins');
  // Ana's undo of her colour is skipped: Ben wrote over it
  ana.doc.undo();
  await settled(...all);
  ok(ev(ana, 'undo-skipped').length >= 1 && host.doc.model.get(id).color === 6, 'Ana\'s undo skips a property someone wrote over since');
});

test('move vs delete: delete wins; undo of the delete brings it back', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  const c = host.doc.all().find((e) => e.type === 'circle');
  ana.doc.change('MOVE', () => ana.doc.update(c.id, { ...ana.doc.model.get(c.id), cx: 40 }));
  ben.doc.change('ERASE', () => ben.doc.remove(c.id));
  await settled(...all);
  sameDrawing(all);
  ok(!host.doc.model.has(c.id), 'the circle is gone everywhere');
  ben.doc.undo();
  await settled(...all);
  sameDrawing(all);
  ok(host.doc.model.has(c.id), 'Ben\'s undo brings it back');
});

test('a block purged while someone places it: the replica refuses the second, the placer\'s copy rolls back', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  const ins = host.doc.all().find((e) => e.type === 'insert');
  ana.doc.change('PURGE', () => { ana.doc.remove(ins.id); ana.doc.removeBlock('CHAIR'); });
  await settled(...all);
  ben.doc.blocks.set('CHAIR', host.doc.blocks.get('CHAIR') || { name: 'CHAIR', base: { x: 0, y: 0 }, entities: [] });   // Ben still had it on screen
  ben.doc.change('INSERT', () => ben.doc.add({ type: 'insert', layer: '0', block: 'CHAIR', x: 1, y: 1, sx: 1, sy: 1, rot: 0 }));
  await settled(...all);
  ben.doc.blocks.delete('CHAIR');
  const r = ev(ben, 'refused');
  ok(r.length === 1 && ['deleted', 'no-block'].includes(r[0].reason), 'Ben\'s insert is refused', r);
  ok(!ben.doc.all().some((e) => e.type === 'insert'), 'and taken back on his screen');
  sameDrawing(all);
});

test('a layer renamed while someone draws on it: the drawer is refused, nothing is lost silently', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  ana.doc.setLayer('Walls', { name: 'A-WALL' });
  ben.doc.change('LINE', () => ben.doc.add({ type: 'line', layer: 'Walls', x1: 0, y1: 50, x2: 5, y2: 50 }));
  await settled(...all);
  const r = ev(ben, 'refused');
  ok(r.length === 1 && r[0].reason === 'deleted', 'Ben\'s line on the old layer is refused', r);
  ok(host.doc.layers.has('A-WALL') && !host.doc.layers.has('Walls'), 'the rename went through');
  sameDrawing(all);
});

test('text held while typed: others\' text writes wait, colour still merges', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  const t = host.doc.all().find((e) => e.type === 'text');
  ana.client.hold(['e:' + t.id]);
  await until(() => ben.client.holds.has('e:' + t.id), 'Ben sees the hold');
  ben.doc.change('TEXTEDIT', () => ben.doc.update(t.id, { ...ben.doc.model.get(t.id), s: 'PANTRY' }));
  ben.doc.change('COLOR', () => ben.doc.update(t.id, { ...ben.doc.model.get(t.id), color: 4 }));
  ana.doc.change('TEXTEDIT', () => ana.doc.update(t.id, { ...ana.doc.model.get(t.id), s: 'MAIN KITCHEN' }));
  await settled(...all);
  ana.client.release();
  const e = host.doc.model.get(t.id);
  ok(e.s === 'MAIN KITCHEN' && e.color === 4, 'the typist\'s text and the other\'s colour', e);
  ok(ev(ben, 'refused').some((r) => r.reason === 'held'), 'Ben\'s text is refused as held');
  sameDrawing(all);
});

test('sheets: one adds a sheet and draws on it while another renames the first; deleting a sheet refuses drawing on it', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  const d = ana.doc;
  d.change('LAYOUT', () => d.setLayouts([...d.layouts, { name: 'Details', paper: { w: 297, h: 210, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() }]));
  d.change('MVIEW', () => d.add({ type: 'viewport', layer: '0', x: 5, y: 5, w: 50, h: 40, cx: 0, cy: 0, s: 1 }, d.layouts[1].entities));
  ben.doc.change('RENAME', () => ben.doc.setLayouts([{ ...ben.doc.layouts[0], name: 'Plan' }]));
  await settled(...all);
  sameDrawing(all);
  ok(host.doc.layouts.map((l) => l.name).join() === 'Plan,Details' && host.doc.layouts[1].entities.size === 1, 'both sheets, the viewport on the new one', host.doc.layouts.map((l) => l.name));
  ben.doc.change('DELETE SHEET', () => ben.doc.setLayouts(ben.doc.layouts.filter((l) => l.name !== 'Details')));
  ana.doc.change('LINE', () => ana.doc.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 9, y2: 9 }, ana.doc.layouts[1].entities));
  await settled(...all);
  sameDrawing(all);
  ok(host.doc.layouts.length === 1, 'the sheet is gone');
  // undo of the delete brings the sheet back with its viewport
  ben.doc.undo();
  await settled(...all);
  sameDrawing(all);
  ok(host.doc.layouts.length === 2 && host.doc.layouts[1].entities.size >= 1, 'Ben\'s undo brings it back', host.doc.layouts.map((l) => l.entities.size));
});

test('undo is per person and per command; an undo inside a command travels too', async () => {
  const { host, joiners: [ana, ben], all } = await session(2);
  await ana.type('L', '0,60', '10,60', '10,70', '0,70', '');
  await ben.type('C', '30,60', '2');
  await settled(...all);
  const before = lines(host).length;
  ana.doc.undo();
  await settled(...all);
  sameDrawing(all);
  ok(lines(host).length === before - 3, 'one undo takes Ana\'s whole LINE command (3 segments) away', before - lines(host).length);
  ok(host.doc.all().some((e) => e.type === 'circle' && e.cx === 30), 'Ben\'s circle stays');
  ana.doc.redo();
  await settled(...all);
  ok(lines(host).length === before, 'redo brings all three back');
  await ben.type('L', '0,80', '5,80', '5,85', 'U', '');
  await settled(...all);
  sameDrawing(all);
  ok(lines(host).filter((e) => e.y1 >= 80).length === 1, 'LINE\'s own Undo option removes the segment everywhere', lines(host).filter((e) => e.y1 >= 80).length);
});

test('a constrained move travels as one checked step', async () => {
  const { host, joiners: [ana], all } = await session(1);
  const id = lines(ana)[0].id;
  const d = ana.doc;
  d.change('GCHORIZONTAL', () => d.setParametric({ constraints: [{ id: 'k1', type: 'horizontal', refs: [{ e: id, k: 'L' }] }], params: { vars: [], links: [] } }));
  d.change('GRIP', () => d.update(id, { ...d.model.get(id), y2: 5 }));
  await settled(...all);
  sameDrawing(all);
  const e = host.doc.model.get(id);
  ok(host.doc.constraints.length === 1 && Math.abs(e.y1 - e.y2) < 1e-9, 'the host has the constraint and the solved line', e);
});

test('the drawing moves to another tab and back: edits keep landing in it', async () => {
  const { host, joiners: [ana], all } = await session(1);
  const other = new Doc();
  ana.doc.swapContent(other);   // Ana opens another tab: the live drawing waits in `other`
  ok(other.liveHook && !ana.doc.liveHook, 'the hook moved with the drawing');
  host.doc.change('C', () => host.doc.add({ type: 'circle', layer: '0', cx: 70, cy: 70, r: 1 }));
  await settled(...all);
  ok([...other.model.values()].some((e) => e.cx === 70), 'a remote edit landed in the waiting drawing');
  ana.doc.swapContent(other);
  ok(ana.doc.liveHook && ana.doc.all().some((e) => e.cx === 70), 'back in front, with the edit');
  sameDrawing(all);
});

test('the same file (LV.8): a joiner who opened the bytes the host opened skips the snapshot; another file gets one', async () => {
  const { readDxf, writeDxf } = await load('dxf.js');
  const { stampFileHash, docFileHash, fileHashOf } = await load('live.js');
  const text = writeDxf(starter(cad('Writer')).doc).text;
  const bytes = new TextEncoder().encode(text);
  // a window that opened the file, as cadcraft.js openLocal does (doc.load, then the hash of the bytes read)
  const opened = async (name, b = bytes) => {
    const w = cad(name);
    w.doc.load({ ...readDxf(new TextDecoder().decode(b)), meta: { name: 'plan', source: 'plan.dxf' } });
    await stampFileHash(w.doc, b);
    return w;
  };
  const host = await opened('Host');
  const want = await fileHashOf(bytes);
  ok(docFileHash(host.doc) === want && /^[0-9a-f]{64}$/.test(want), 'the hash of the bytes opened is kept with the drawing');
  const srv = await server();
  const announce = docFileHash(host.doc);
  connect(srv, host, { role: 'host', token: TOKEN });
  host.client.on('welcome', () => host.client.savedFile(announce));   // what Studio does as the host's window joins (q 0)
  const rep = await opened('Replica');
  connect(srv, rep, { role: 'replica', token: TOKEN });
  await until(() => host.client.status === 'live' && rep.client.welcomed, 'host + replica');
  await host.type('LINE', '0,0', '50,50', '');             // an edit before anyone joins
  await settled(host);
  ok(docFileHash(host.doc) === '', 'changed since it was opened: no hash offered any more');
  const ana = await opened('Ana');
  ok(docFileHash(ana.doc) === want, 'the joiner opened the same file: same hash');
  connect(srv, ana, { hash: docFileHash(ana.doc) });
  await live(host, ana);
  await settled(host, ana);
  ok(ev(ana, 'loaded').length === 0, 'no snapshot: the joiner started from its own copy of the file');
  sameDrawing([host, ana, rep], 'the log on top of the same file gives the same drawing');
  await ana.type('CIRCLE', '5,5', '3');
  await host.type('LINE', '1,1', '9,9', '');
  await settled(host, ana);
  sameDrawing([host, ana, rep], 'edits both ways after joining with the file');
  // another file (one more line): a snapshot
  const other = await opened('Ben', new TextEncoder().encode(writeDxf((() => { const w = starter(cad('W2')); w.doc.change('x', () => w.doc.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 1 })); return w; })().doc).text));
  ok(docFileHash(other.doc) && docFileHash(other.doc) !== want, 'a different file: a different hash');
  connect(srv, other, { hash: docFileHash(other.doc) });
  await live(other);
  await settled(host, ana, other);
  ok(ev(other, 'loaded').length === 1, 'a joiner with another file gets the snapshot');
  sameDrawing([host, ana, other, rep], 'and ends on the session\'s drawing');
  // the hash moves with the drawing between tabs, and goes when another drawing is opened in its place
  const tabDoc = new Doc();
  const solo = await opened('Solo');
  solo.doc.swapContent(tabDoc);
  ok(docFileHash(solo.doc) === '' && docFileHash(tabDoc) === want, 'the hash moves with its drawing to another tab');
  solo.doc.swapContent(tabDoc);
  ok(docFileHash(solo.doc) === want, 'and back');
  solo.doc.load({});
  ok(docFileHash(solo.doc) === '', 'another drawing in its place: no hash');
});

test('layer and area holds (LV.9): others\' edits there are taken back, the holder\'s pass, release opens them again', async () => {
  const { areaKey, parseArea } = await load('live.js');
  const { host, joiners: [ana, ben], all } = await session(2);
  const wallLine = () => ana.doc.all().find((e) => e.type === 'line' && e.layer === 'Walls');
  const circle = () => ana.doc.all().find((e) => e.type === 'circle');
  ana.client.hold(['layer:Walls']);
  await until(() => ben.client.holds.get('layer:Walls') === ana.client.c, 'layer hold seen');
  const before = lines(ben).length;
  ben.doc.change('LINE', () => ben.doc.add({ type: 'line', layer: 'Walls', x1: 0, y1: 50, x2: 9, y2: 50 }));
  ben.doc.change('COLOR', () => { const e = wallLine(); ben.doc.update(e.id, { ...e, color: 5 }); });
  await settled(...all);
  ok(lines(ben).length === before && ben.doc.get(wallLine().id).color !== 5, 'drawing on, and recolouring on, a layer Ana holds: both taken back');
  ok(ev(ben, 'refused').filter((r) => r.reason === 'held' && r.by === ana.client.c).length === 2, 'refused "held", by Ana', ev(ben, 'refused'));
  ben.doc.change('LINE', () => ben.doc.add({ type: 'line', layer: '0', x1: 0, y1: 60, x2: 9, y2: 60 }));
  ana.doc.change('LINE', () => ana.doc.add({ type: 'line', layer: 'Walls', x1: 0, y1: 70, x2: 9, y2: 70 }));
  await settled(...all);
  ok(lines(host).length === before + 2, 'other layers stay open, and the holder draws on hers');
  ana.client.release(['layer:Walls']);
  await until(() => !ben.client.holds.has('layer:Walls'), 'release seen');
  ben.doc.change('LINE', () => ben.doc.add({ type: 'line', layer: 'Walls', x1: 0, y1: 80, x2: 9, y2: 80 }));
  await settled(...all);
  ok(lines(host).length === before + 3, 'released: Ben draws on Walls');
  // an area (model space): objects in it, before or after the edit, are Ben's while he holds it
  const area = areaKey(0, 0, 12, 12, '');
  ok(parseArea(area) && parseArea(area).x1 === 12 && parseArea('area:1,2,x,4@') === null, 'area keys: made and read back; junk is no area');
  ben.client.hold([area]);
  await until(() => ana.client.holds.get(area) === ben.client.c, 'area hold seen');
  const c0 = circle();
  ana.doc.change('MOVE', () => ana.doc.update(c0.id, { ...c0, cx: c0.cx + 1 }));
  const far = ana.doc.all().find((e) => e.type === 'line' && e.y1 === 80);
  ana.doc.change('MOVE', () => ana.doc.update(far.id, { ...far, x1: far.x1 + 1 }));
  ana.doc.change('MOVE IN', () => { const e = ana.doc.get(far.id); ana.doc.update(far.id, { ...e, y1: 5, y2: 5 }); });
  await settled(...all);
  ok(host.doc.get(c0.id).cx === c0.cx, 'moving an object inside Ben\'s area: taken back');
  ok(host.doc.get(far.id).x1 === far.x1 + 1 && host.doc.get(far.id).y1 === 80, 'outside it: kept; moving one into it: taken back');
  ok(ev(ana, 'refused').filter((r) => r.reason === 'held' && r.by === ben.client.c).length === 2, 'both refused "held", by Ben', ev(ana, 'refused'));
  // a sheet's objects are not in a model-space area
  ana.doc.setSpace(ana.doc.layouts[0]);
  ana.doc.change('TEXT', () => ana.doc.add({ type: 'line', layer: '0', x1: 1, y1: 1, x2: 2, y2: 2 }));
  ana.doc.setSpace(null);
  await settled(...all);
  ok(host.doc.layouts[0].entities.size === 1, 'the same place on a sheet is not in the model\'s area');
  ben.client.release([area]);
  await until(() => !ana.client.holds.has(area), 'area released');
  ana.doc.change('MOVE', () => { const e = ana.doc.get(c0.id); ana.doc.update(c0.id, { ...e, cx: c0.cx + 2 }); });
  await settled(...all);
  ok(host.doc.get(c0.id).cx === c0.cx + 2, 'released: the move lands');
  sameDrawing(all);
});

test('where a step landed (EG.41): the sheet and the extent of what it touches, for holding an assistant to a sheet or area', async () => {
  const a = cad('A');
  await a.type('LINE', '0,0', '10,5', '');
  const id = [...a.doc.model.keys()][0];
  let w = a.adapter.where([{ o: 'add', id, sp: '', e: a.doc.model.get(id) }]);
  ok(w && w.sheet === '' && w.box.join() === '0,0,10,5', 'a new line in Model: sheet "" and its box', w);
  w = a.adapter.where([{ o: 'set', id, f: 'layer', v: '0', sp: '' }]);
  ok(w && w.sheet === '' && w.box.join() === '0,0,10,5', 'a change to an existing entity: its box from the drawing', w);
  w = a.adapter.where([{ o: 'del', id, sp: '' }]);
  ok(w && w.sheet === '' && w.box === null, 'a deletion: the sheet, no box (an area scope refuses it)', w);
  w = a.adapter.where([{ o: 'del', id: 1, sp: 'L0' }, { o: 'del', id: 2, sp: '' }]);
  ok(w && w.sheet !== '' && w.sheet !== 'L0', 'a step on two places is neither', w);
  ok(a.adapter.where([{ o: 'meta', k: 'luprec', v: 3 }]) === null, 'a drawing setting has no place: null');
  ok(typeof a.adapter.sheetLabel === 'function' && a.adapter.sheetLabel('') !== '', 'sheetLabel names Model');
});

test('an assistant as its own client (LV.18): its commands go on its own connection, undone as its own, a whole command at a time', async () => {
  const { srv, host, joiners: [ana], all } = await session(1);
  const key = await host.client.requestAssistant();
  ok(key && /^a:/.test(key.kid), 'the host\'s client gets a one-time key');
  const a = new LiveClient({ transport: webSocketTransport(srv.url), person: host.client, assistantKey: key, name: 'Helper', device: 'test', secure: false });
  clients.push(a);
  host.client.linkAssistant(a);
  a.connect();
  await until(() => a.status === 'live', 'assistant in');
  await until(() => ana.client.peers.get(a.c) && ana.client.peers.get(a.c).of === host.client.c, 'Ana sees the host\'s assistant');
  // the assistant's run (Studio routes the window's steps to it while its call runs)
  host.client.route = () => a;
  await host.type('LINE', '0,100', '10,100', '20,110', '');       // one command, two objects: one undo
  host.client.route = null;
  await host.type('CIRCLE', '50,50', '4');                         // the host's own
  await settled(...all);
  sameDrawing(all, 'everyone has the assistant\'s lines and the host\'s circle');
  ok(a.undoStack.length >= 1 && host.client.undoStack.length >= 1, 'two undo stacks: the assistant\'s and the host\'s', [a.undoStack.length, host.client.undoStack.length]);
  const ln = () => lines(ana).filter((e) => e.y1 >= 100 || e.y2 >= 100).length;
  ok(ln() === 2, 'Ana sees both of the assistant\'s lines');
  // the assistant's undo (its call runs: routed) takes back its whole command, not the host's circle
  host.client.route = () => a;
  host.doc.undo();
  host.client.route = null;
  await settled(...all);
  ok(ln() === 0 && ana.doc.all().some((e) => e.type === 'circle' && e.cx === 50), 'the assistant\'s undo: its LINE command, all of it; the circle stays');
  // the host's Ctrl+Z is the host's
  host.doc.undo();
  await settled(...all);
  ok(!ana.doc.all().some((e) => e.type === 'circle' && e.cx === 50), 'the host\'s undo: the host\'s circle');
  sameDrawing(all);
  // the assistant goes: nothing of it stays waiting in the window
  a.leave();
  await until(() => host.client.assistants.size === 0, 'unlinked');
  ok(host.client.pending.length === 0, 'the window has nothing of it waiting');
});

test(`random edits from four people converge (${FUZZ} steps)`, async () => {
  const { host, rep, joiners, all } = await session(3);
  let seed = 7;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  const pick = (a) => a[Math.floor(rnd() * a.length)];
  const people = [host, ...joiners];
  for (let i = 0; i < FUZZ; i++) {
    const w = pick(people), d = w.doc;
    const ents = d.all();
    const r = rnd();
    try {
      if (r < 0.3 || !ents.length) d.change('ADD', () => d.add({ type: pick(['line', 'circle']), layer: pick(['0', 'Walls']), x1: rnd() * 100, y1: rnd() * 100, x2: rnd() * 100, y2: rnd() * 100, cx: rnd() * 100, cy: rnd() * 100, r: 1 + rnd() }));
      else if (r < 0.65) { const e = pick(ents); d.change('MOVE', () => d.update(e.id, { ...e, x1: (e.x1 || 0) + 1, cx: (e.cx || 0) + 1 })); }
      else if (r < 0.8) { const e = pick(ents); d.change('COLOR', () => d.update(e.id, { ...e, color: 1 + Math.floor(rnd() * 7) })); }
      else if (r < 0.9) { const e = pick(ents); if (e.type !== 'insert') d.change('ERASE', () => d.remove(e.id)); }
      else if (r < 0.95) d.setLayer(pick(['Walls', '0']), { color: 1 + Math.floor(rnd() * 7) });
      else d.undo();
    } catch (err) { ok(false, 'a random step threw', err.message); }
    if (i % 25 === 0) await sleep(2);
  }
  await settled(...all);
  sameDrawing([...all, rep], 'four people and the replica end on the same drawing');
});

// ---------------------------------------------------------------------------------------------------------------------

// A clean clone has no build (target/ is never in a repo): build it when Rust is here, else say so and skip.
if (!fs.existsSync(BIN)) {
  const { spawnSync } = await import('node:child_process');
  const cargo = spawnSync('cargo', ['--version'], { encoding: 'utf8' });
  const shell = path.resolve(ROOT, '..', 'desktop-shell/src-tauri/src/live/mod.rs');   // the server builds the desktop shell's Live module in
  if (!fs.existsSync(shell)) { console.log('Skipped: the Live server builds from the desktop-shell repository, which is not beside this one (getcadcraft/desktop-shell).'); process.exit(0); }
  if (cargo.status !== 0) { console.log('Skipped: live-server is not built and Rust (cargo) is not installed. Build it with: (cd tools/live-test/server && cargo build --release)'); process.exit(0); }
  console.log('Building live-server (cargo build --release) …');
  const b = spawnSync('cargo', ['build', '--release', '--quiet'], { cwd: path.join(ROOT, 'tools/live-test/server'), stdio: 'inherit' });
  if (b.status !== 0 || !fs.existsSync(BIN)) { console.log('live-server did not build'); process.exit(1); }
}
for (const t of tests) {
  if (ONLY && !t.name.includes(ONLY)) continue;
  console.log('· ' + t.name);
  try { await t.fn(); }
  catch (e) { fail++; console.log('  FAIL ' + t.name + ': ' + (e && e.stack || e)); }
  for (const c of clients.splice(0)) { try { c.stop(); } catch { /* gone */ } }
  for (const s of servers.splice(0)) s.stop();
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
