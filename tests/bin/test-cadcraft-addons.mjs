#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-addons.mjs — CadCraft's add-on API 1.0, add-on objects and add-on data (0.4 part 2, A.3–A.5, W2.9;
 * docs/ADDONS-SPEC.md; session addons).
 *
 *   node bin/test-cadcraft-addons.mjs [--build dev|x.y] [--verbose]
 *
 * Runs CadCraft's real modules in Node with a stub host and the fixture add-ons in tools/addons-test/cadcraft/:
 *   - the command registry: CadCraft's own feature sets registered through it ('core'), a taken name refused;
 *   - the loader through startAddons(): the pipes add-on active, an add-on that tries to take LINE switched off (with what
 *     it had already added taken away), one asking for a newer API refused;
 *   - commands run from the command line as one undo step; the Properties section (W2.9) and its key rule; afterChange
 *     follow-up edits inside the same undo step; api.data on an ordinary entity;
 *   - objects: xdata layout (markers, chunks ≤ 250, ASCII, the size limit, APPIDs), graphics blocks drawn through walk.js,
 *     shared by identical objects, MOVE / ROTATE / MIRROR of a local-frame object, a world-frame object baked back to the
 *     origin (and undone in one step), grips and grip moves, older data read through read(), newer data left alone;
 *   - IMPORT / EXPORT through the add-on's importer and exporter;
 *   - switching the add-on off: commands, section and hooks gone, objects stay as plain block references; on again;
 *   - pass-through (A.5) once cad-files' e.xd is in dwg-props.js: objects saved and reopened without the add-on, edited,
 *     saved as DWG and DXF, reopened with it → every object and value intact.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const APP = opt('--app', null) || path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);   // --app <dir>: a copy of the build (trying a change)
const FIX = path.join(ROOT, 'tools/addons-test/cadcraft');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { Doc } = await load('doc.js');
const G = await load('geom.js');
const Cmd = await load('commands.js');
const { walk } = await load('walk.js');
const P = await load('propdefs.js');
const O = await load('addons/objects.js');
const CA = await load('addons/cadcraft-api.js');
const A = await load('addons.js');

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const section = (s) => console.log('\n' + s);
const tick = () => new Promise((r) => setTimeout(r, 0));
if (!VERBOSE) { console.warn = () => {}; }
const errors = [];
const realError = console.error;
console.error = (...a) => { errors.push(a.map(String).join(' ')); if (VERBOSE) realError(...a); };

// ---------------------------------------------------------------------------------------------- a drawing and a command line
const doc = new Doc();
const log = [];
const host = {
  cursor: { x: 0, y: 0 }, selection: new Set(),
  print: (s) => log.push(String(s)), prompt: () => {},
  setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
  pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
  pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
  zoomExtents: () => {}, zoomWindow: () => {},
  props: { schedule: () => { host.propsScheduled = (host.propsScheduled || 0) + 1; } },
};
const eng = new Cmd.Engine(doc, host);
const settle = async () => { for (let i = 0; i < 8; i++) await tick(); };
const type = async (...lines) => { for (const l of lines) { eng.text(l); await settle(); } };
const lastLog = () => log[log.length - 1] || '';

// ---------------------------------------------------------------------------------------------- the registry
section('Command registry');
const R = Cmd.commandRegistry;
ok(R.owner('LAYISO') === 'core' && R.owner('GCHORIZONTAL') === 'core' && R.owner('-PARAMETERS') === 'core', 'CadCraft\'s layer tools and parametric commands are registered through it (core)');
ok(R.owner('LINE') === null, 'built-ins defined before it have no owner');
let threw = null;
try { R.scoped('x.test').add('LINE', [], async () => {}); } catch (e) { threw = e; }
ok(threw && /already a command/.test(threw.message), 'a taken name is refused for an add-on', threw?.message);
threw = null;
try { R.scoped('x.test').add('ZZTEST', ['L'], async () => {}); } catch (e) { threw = e; }
ok(threw && /L is already/.test(threw.message) && !Cmd.lookup('ZZTEST'), 'a taken alias is refused, and nothing half-registered');
threw = null;
try { R.scoped('x.test').add('9BAD', [], async () => {}); } catch (e) { threw = e; }
ok(threw && /not a command name/.test(threw.message), 'a bad name is refused');
{
  const s = R.scoped('x.test');
  const rm = s.add('ZZTEST', ['ZZT'], async (c) => { c.print('zz ran'); }, { help: 'zz' });
  ok(Cmd.lookup('ZZT')?.name === 'ZZTEST' && R.owner('ZZTEST') === 'x.test', 'an add-on command and its alias');
  await type('ZZT');
  ok(log.includes('zz ran'), 'it runs from the command line by its alias');
  rm();
  ok(!Cmd.lookup('ZZTEST') && !Cmd.lookup('ZZT') && R.owner('ZZTEST') === null, 'remove() takes the command and its alias away');
  s.add('ZZTEST', [], async () => {});
  s.removeAll();
  ok(!Cmd.lookup('ZZTEST'), 'removeAll() takes everything the add-on added');
}

// ---------------------------------------------------------------------------------------------- xdata encoding
section('Add-on data in xdata');
ok(O.appIdFor('electrical') === 'CC_ELECTRICAL' && O.appIdFor('com.example.pipes') === 'CC_COM_EXAMPLE_PIPES', 'APPID = CC_ + the id in upper case, . → _');
const longId = 'com.example.a-really-long-add-on-name';
ok(O.appIdFor(longId).length === 31 && /^CC_COM_EXAMPLE_A-REALL_[0-9a-f]{8}$/.test(O.appIdFor(longId)) && O.appIdFor(longId) !== O.appIdFor(longId + 'x'), 'a long id → 31 characters with a hash tail', O.appIdFor(longId));
{
  const v = { text: 'Ölbrenner — 230 V ✓', list: Array.from({ length: 80 }, (_, i) => i * 1.5), nested: { a: [1, { b: null }] } };
  const items = O.encodeItems(O.OBJ, 'wire', 3, v);
  ok(items[0][0] === 1000 && items[0][1] === 'CCOBJ' && items[1][1] === 'wire' && items[2][0] === 1070 && items[2][1] === 3 && items[3][0] === 1070, 'layout: CCOBJ, kind, 1070 version, 1070 length (R12 has no 1071)');
  ok(items.slice(4).every(([c, s]) => c === 1000 && s.length <= 250 && /^[\x20-\x7e]*$/.test(s)), 'chunks of at most 250 printable ASCII characters');
  const back = O.decodeItems(items.map(([c, s]) => [c, s]));
  ok(back && back.kind === 'wire' && back.version === 3 && JSON.stringify(back.data) === JSON.stringify(v), 'reads back exactly (Unicode through \\u escapes)');
  const asStrings = O.decodeItems(items.map(([c, s]) => [String(c), String(s)]));
  ok(asStrings && asStrings.data.text === v.text, 'and from DXF-style strings');
  const cut = items.slice(0, -1);
  ok(O.decodeItems(cut) === null, 'a cut-off value is not read');
  threw = null;
  try { O.encodeItems(O.DATA, null, 1, { s: 'x'.repeat(O.MAX_JSON) }); } catch (e) { threw = e; }
  ok(threw && /limit/.test(threw.message), 'over 12 000 characters is refused');
  const d = O.encodeItems(O.DATA, null, 1, 'tag');
  ok(d[0][1] === 'CCDATA' && O.decodeItems(d).data === 'tag', 'CCDATA has no kind');
}

// ---------------------------------------------------------------------------------------------- the loader
section('Loader (startAddons)');
const mem = new Map();
const storage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
let picked = null, downloaded = null, opened = null, redraws = 0;
const started = await CA.startAddons({
  doc, engine: eng, host, print: host.print, redraw: () => { redraws++; },
  pickFile: async () => picked, download: async (name, data, mime) => { downloaded = { name, data, mime }; },
  openDrawing: async (drawing, name) => { opened = { drawing, name }; },
  base: pathToFileURL(FIX + '/').href, storage, packages: A.packageStore(null), noGlobal: true,
  fetchJson: async (u) => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } },
  importer: (u) => import(u),
});
const byId = Object.fromEntries(started.list().map((a) => [a.id, a]));
ok(byId['test.pipes']?.state === 'active', 'the pipes add-on is active', JSON.stringify(byId['test.pipes']?.detail || ''));
ok(byId['test.thief']?.state === 'failed' && /LINE is already/.test(byId['test.thief'].detail), 'an add-on taking LINE is switched off with the reason', byId['test.thief']?.detail);
ok(!Cmd.lookup('THIEFOK') && Cmd.lookup('LINE') && R.owner('LINE') === null, 'what it added first is gone, LINE is still CadCraft\'s');
ok(byId['test.newer']?.state === 'refused' && byId['test.newer'].reason === 'api-newer', 'an add-on asking for API 1.9 is refused (CadCraft has 1.0)');
ok(Cmd.lookup('IMPORT') && Cmd.lookup('EXPORT') && R.owner('IMPORT') === 'core', 'IMPORT and EXPORT are CadCraft\'s own');
const api = globalThis.__testPipes;
ok(api && api.version === '1.4' && api.app.slug === 'cadcraft' && typeof api.commands.add === 'function' && typeof api.ui.toolbarGroup === 'function' && typeof api.ui.panelTab === 'function' && typeof api.rules.provide === 'function' && typeof api.model.read === 'function', 'the API: CadCraft\'s parts and the shared ones');
ok(api.t('pipe.name') === 'Pipe', 'the add-on\'s own strings');
ok(api.toolbar.group({ id: 'x', label: 'X', tools: [] }) === null, 'toolbar calls do nothing without a page');

// ---------------------------------------------------------------------------------------------- commands and objects
section('Add-on commands and objects');
const undo0 = doc.undoStack.length;
await type('PP', '0,0', '10,0');
const pipe = doc.all().find((e) => e.type === 'insert');
ok(pipe && api.objects.is(pipe, 'pipe') && api.objects.kindOf(pipe) === 'pipe', 'PIPE (by its alias) made a pipe object');
ok(doc.undoStack.length === undo0 + 1 && doc.undoStack[doc.undoStack.length - 1].label === 'PIPE', 'one undo step, named after the command');
ok(pipe.block.startsWith('*U') && doc.blocks.get(pipe.block)?.entities.length === 3, 'its graphics are an anonymous block', pipe.block);
ok(pipe.xd && Object.keys(pipe.xd).join() === 'CC_TEST_PIPES' && pipe.xd.CC_TEST_PIPES[1][1] === 'pipe' && pipe.xd.CC_TEST_PIPES[2][1] === 2, 'its data is xdata under CC_TEST_PIPES, version 2');
const strokes = [];
walk(doc, [pipe], { stroke: (c, ps) => strokes.push(...ps), fill() {}, text: (c, e) => strokes.push({ text: e.s }), point() {} });
ok(strokes.filter((s) => s.k === 'L').length === 2 && strokes.some((s) => s.text === 'P1'), 'walk.js draws it: two lines and its label');
ok(G.entityBounds(pipe, doc.blocks)?.maxX >= 10 - 1e-9, 'bounds come from what it drew');
ok(host.pickAt({ x: 5, y: 0.5 }) === pipe.id, 'it is picked by its lines');
{
  const { typeName } = await load('doc.js');
  ok(typeName(pipe) === 'Pipe' && typeName({ type: 'line' }) === 'Line', 'it is called by its own name (Properties title, LIST)');
  host.setSelection(new Set([pipe.id]));
  await type('LIST');
  ok(log.some((l) => /^Pipe\b/.test(l) || /\bPipe\b.*layer/i.test(l)), 'LIST names it', log.slice(-3).join(' | '));
}
// a second, identical pipe shares the block
doc.change('PIPE', () => doc.add(api.objects.create('pipe', { a: { x: 0, y: 0 }, b: { x: 10, y: 0 }, label: 'P1' })));
const twin = doc.all().filter((e) => e.type === 'insert')[1];
ok(twin.block === pipe.block, 'identical objects share one graphics block');
doc.change('ERASE', () => doc.remove(twin.id));

// MOVE / ROTATE / MIRROR a local-frame object: only the placement changes
host.setSelection(new Set([pipe.id]));
await type('MOVE', '0,0', '5,5');
let p1 = doc.get(pipe.id);
ok(p1.x === 5 && p1.y === 5 && JSON.stringify(api.objects.dataOf(p1)) === JSON.stringify({ a: { x: 0, y: 0 }, b: { x: 10, y: 0 }, label: 'P1' }), 'MOVE moves the reference; the data stays in its own frame');
host.setSelection(new Set([pipe.id]));
await type('ROTATE', '5,5', '90');
p1 = doc.get(pipe.id);
ok(near(p1.rot, Math.PI / 2), 'ROTATE turns it', p1.rot);
const gr = G.grips(p1);
ok(gr.length === 2 && gr[0].key === 'cc:a' && near(gr[1].x, 5) && near(gr[1].y, 15), 'its grips come from the add-on, placed in the drawing', JSON.stringify(gr));
// a grip move (cadcraft.js: doc.update(id, gripMove(e, key, to)))
const moved = G.gripMove(p1, 'cc:b', { x: 5, y: 25 });
ok(moved && near(api.objects.dataOf(moved).b.x, 20) && near(api.objects.dataOf(moved).b.y, 0) && doc.blocks.has(moved.block), 'gripMove → new data in its frame, a preview block ready', JSON.stringify(api.objects.dataOf(moved)?.b));
const u1 = doc.undoStack.length;
doc.change('GRIP EDIT', () => doc.update(p1.id, moved));
p1 = doc.get(pipe.id);
const step = doc.undoStack[doc.undoStack.length - 1];
ok(doc.undoStack.length === u1 + 1 && step.ops.some((o) => o.block === p1.block), 'the grip edit is one step and records the new block');
doc.undo();
ok(doc.get(pipe.id).block === pipe.block || api.objects.dataOf(doc.get(pipe.id)).b.x === 10, 'undo brings the old pipe back');
doc.redo();
ok(api.objects.dataOf(doc.get(pipe.id)).b.x === 20, 'redo the new one');

// Properties section (W2.9)
const pdefs = P.defsFor('insert', [doc.get(pipe.id)], {});
const lab = pdefs.find((d) => d.key === 'test.pipes:label');
ok(lab && lab.get(doc.get(pipe.id)) === 'P1' && P.addedSections().includes('test.pipes'), 'api.props.section adds a Properties section for its objects');
{
  const changed = lab.set(doc.get(pipe.id), 'Main');
  doc.change('PROPERTIES', () => doc.update(pipe.id, changed));
  const g2 = doc.blocks.get(doc.get(pipe.id).block);
  ok(api.objects.dataOf(doc.get(pipe.id)).label === 'Main' && g2.entities.some((e) => e.s === 'Main'), 'a change from the panel redraws the object');
  const line = doc.all().find((e) => e.type !== 'insert');
  ok(!P.defsFor('line', [{ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 }], {}).some((d) => d.sec === 'test.pipes'), 'not shown for other types');
  threw = null;
  try { api.props.section({ key: 'electrical', label: 'x', defs: () => [] }); } catch (e) { threw = e; }
  ok(threw && /must be "test.pipes"/.test(threw.message), 'a section key that is not the add-on\'s own is refused');
  void line;
}

// world-frame object
section('World-frame objects');
await type('RUN', '0,0', '10,0', '10,10', '');
let run = doc.all().find((e) => api.objects.is(e, 'run'));
ok(run && run.x === 0 && api.objects.dataOf(run).pts.length === 3, 'RUN made a world-frame object at the origin');
host.setSelection(new Set([run.id]));
const u2 = doc.undoStack.length;
await type('MOVE', '0,0', '100,50');
run = doc.get(run.id);
ok(run.x === 0 && run.y === 0 && (run.rot || 0) === 0 && api.objects.dataOf(run).pts[1].x === 110 && api.objects.dataOf(run).pts[1].y === 50, 'MOVE is baked into its points; the reference stays at the origin', JSON.stringify(api.objects.dataOf(run).pts));
ok(doc.undoStack.length === u2 + 1, 'in one undo step');
host.setSelection(new Set([run.id]));
await type('MIRROR', '100,0', '100,10', 'N');
const mir = doc.all().find((e) => api.objects.is(e, 'run') && e.id !== run.id);
ok(mir && near(api.objects.dataOf(mir).pts[1].x, 90) && (mir.sx ?? 1) === 1 && (mir.sy ?? 1) === 1 && !mir.rot, 'MIRROR\'s copy has mirrored points and a plain reference', JSON.stringify(mir && api.objects.dataOf(mir).pts));
doc.undo();
ok(!doc.all().some((e) => api.objects.is(e, 'run') && e.id !== run.id), 'undo takes the copy away');
doc.undo();
run = doc.get(run.id);
ok(api.objects.dataOf(run).pts[1].x === 10 && run.x === 0, 'another undo puts the points back where they were drawn');
doc.redo();
run = doc.get(run.id);
ok(G.grips(run).map((g) => g.key).join() === 'cc:v0,cc:v1,cc:v2' && G.grips(run)[1].x === 110, 'grips at its points');

// afterChange
section('Follow-up edits (api.drawing.afterChange) and api.data');
const u3 = doc.undoStack.length;
await type('CIRCLE', '50,50', '5');
const centre = doc.all().find((e) => e.type === 'point' && e.x === 50 && e.y === 50);
ok(centre && doc.undoStack.length === u3 + 1, 'the add-on\'s hook added a point at the circle\'s centre, in the same undo step');
doc.undo();
ok(!doc.all().some((e) => e.type === 'point' && e.x === 50) && !doc.all().some((e) => e.type === 'circle'), 'one undo takes both');
doc.change('LINE', () => doc.add({ type: 'line', x1: 0, y1: -5, x2: 4, y2: -5 }));
const ln = doc.all().find((e) => e.type === 'line');
const tagged = api.data.set(ln, { circuit: 'L1-3', n: 7 });
doc.change('TAG', () => doc.update(ln.id, tagged));
ok(JSON.stringify(api.data.get(doc.get(ln.id))) === JSON.stringify({ circuit: 'L1-3', n: 7 }) && doc.get(ln.id).xd.CC_TEST_PIPES[0][1] === 'CCDATA', 'api.data on an ordinary line (CCDATA)');
threw = null;
try { api.data.set(doc.get(pipe.id), 1); } catch (e) { threw = e; }
ok(threw, 'api.data.set on one of its own objects is refused (objects.update)');
const untagged = api.data.set(doc.get(ln.id), null);
ok(!untagged.xd, 'null takes it off');

// IMPORT / EXPORT
section('IMPORT and EXPORT');
picked = { name: 'survey.pts', text: async () => '1,2\n3,4\n5,6\n' };
const u4 = doc.undoStack.length;
await type('IMPORT');
ok(doc.all().filter((e) => e.type === 'point').length === 3 && doc.undoStack.length === u4 + 1 && /Imported 3 objects from survey.pts/.test(lastLog()), 'IMPORT reads a .pts through the add-on: 3 points, one step', lastLog());
await type('EXPORT');
ok(downloaded && downloaded.name === 'Drawing1.pts' && downloaded.data === '1,2\n3,4\n5,6' && downloaded.mime === 'text/plain', 'EXPORT writes a .pts', JSON.stringify(downloaded));
picked = { name: 'bad.pts', text: async () => { throw new Error('unreadable'); } };
await type('IMPORT');
ok(/Could not import bad.pts: unreadable/.test(lastLog()), 'an importer that fails says why', lastLog());
ok(started.importerFor('A.PTS')?.id === 'test.pipes:pts' && started.exporters().length === 1, 'importerFor / exporters');
{
  const cl = started.commands();
  const pipeCmd = cl.find((x) => x.name === 'PIPE');
  ok(pipeCmd && pipeCmd.aliases.includes('PP') && pipeCmd.help === 'Draw a pipe between two points' && pipeCmd.addon.id === 'test.pipes' && pipeCmd.addon.permissions.includes('objects') && cl.some((x) => x.name === 'RUN') && !cl.some((x) => x.name === 'LINE' || x.name === 'IMPORT'), 'ccAddons.commands(): the add-ons\' commands with help and permissions (X.8), not CadCraft\'s own', JSON.stringify(cl));
}

// older and newer data
section('Data versions');
{
  const old = { type: 'insert', block: pipe.block, x: 0, y: 0, rot: 0, sx: 1, sy: 1, layer: '0', xd: { CC_TEST_PIPES: O.encodeItems(O.OBJ, 'pipe', 1, { a: { x: 0, y: 0 }, b: { x: 1, y: 0 }, name: 'OLD' }) } };
  ok(api.objects.dataOf(old)?.label === 'OLD', 'version 1 data is read through read()');
  const newer = { ...old, xd: { CC_TEST_PIPES: O.encodeItems(O.OBJ, 'pipe', 3, { future: true }) } };
  ok(api.objects.is(newer, 'pipe') && api.objects.dataOf(newer) === null && G.grips(newer).length === 1 && G.grips(newer)[0].key === 'p', 'version 3 data (newer than the add-on) is left alone: no grips of its own');
  doc.change('ADD', () => doc.add(newer));
  const kept = doc.all().find((e) => e.xd?.CC_TEST_PIPES && O.decodeItems(e.xd.CC_TEST_PIPES)?.version === 3);
  ok(kept && kept.block === pipe.block, 'and not redrawn when added');
  doc.undo();
}

// switch off and on
section('Switching the add-on off and on');
const objsBefore = doc.all().filter((e) => e.type === 'insert').length;
await started.loader.setEnabled('test.pipes', false);
ok(!Cmd.lookup('PIPE') && !Cmd.lookup('RUN') && !P.addedSections().includes('test.pipes'), 'commands and the Properties section are gone');
ok(doc.all().filter((e) => e.type === 'insert').length === objsBefore && G.grips(doc.get(pipe.id)).length === 1 && api.objects.is(doc.get(pipe.id)) === false, 'its objects stay, as plain block references with one grip');
ok(O.ObjectKinds.stored(doc.get(pipe.id))?.kind === 'pipe', 'what they are is still readable from the xdata');
host.setSelection(new Set([run.id]));
await type('MOVE', '0,0', '1000,0');
run = doc.get(run.id);
ok(run.x === 1000 && O.decodeItems(run.xd.CC_TEST_PIPES).data.pts[1].x === 110, 'without the add-on a world-frame object moves as a reference; its data is untouched');
const u5 = doc.undoStack.length;
await type('CIRCLE', '0,100', '1');
ok(!doc.all().some((e) => e.type === 'point' && e.y === 100) && doc.undoStack.length === u5 + 1, 'its afterChange hook is gone');
await type('IMPORT');
ok(/No add-on adds a file type to import/.test(lastLog()), 'IMPORT says nothing can be imported', lastLog());
await started.loader.setEnabled('test.pipes', true);
ok(Cmd.lookup('PIPE') && P.addedSections().includes('test.pipes'), 'switched on again: back');
run = doc.get(run.id);
ok(run.x === 0 && api.objects.dataOf(run).pts[1].x === 1110, 'the world-frame object moved meanwhile is brought back to the origin with its points moved', JSON.stringify([run.x, api.objects.dataOf(run).pts[1]]));

// the template add-on of the public add-ons repo (A.10), against the real CadCraft modules
section('Template add-on (repos/addons/template)');
const TEMPLATE = path.resolve(ROOT, '..', 'repos/addons/template');
if (!fs.existsSync(path.join(TEMPLATE, 'addon.json'))) console.log('  (no ' + TEMPLATE + ': skipped)');
else {
  const tpl = await CA.startAddons({
    doc, engine: eng, host, print: host.print, redraw: () => {}, base: pathToFileURL(path.dirname(TEMPLATE) + '/').href, storage, packages: A.packageStore(null), noGlobal: true,
    fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['template'] } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
    importer: (u) => import(u),
  });
  const st = tpl.list().find((x) => x.id === 'com.example.notes');
  ok(st && st.state === 'active', 'the template add-on activates in CadCraft', JSON.stringify(st && [st.state, st.detail]));
  const before = doc.all().length;
  await type('NOTE', '40,40', 'Check the clearance');
  const note = doc.all().find((e) => e.xd && e.xd.CC_COM_EXAMPLE_NOTES);
  ok(note && doc.all().length === before + 1 && note.x === 40 && doc.blocks.get(note.block)?.entities.some((e) => e.s === 'Check the clearance'), 'NOTE places a note object, drawn', JSON.stringify(note && note.block));
  await tpl.loader.setEnabled('com.example.notes', false);
  ok(!Cmd.lookup('NOTE'), 'switched off: NOTE is gone');
}

// the 2D example add-on of the public add-ons repo (0.5 AO.5), against the real CadCraft modules: draw, Properties, DWG/DXF, export
section('Example add-on: Outline (repos/addons/examples/outline)');
const EXAMPLE = path.resolve(ROOT, '..', 'repos/addons/examples/outline');
if (!fs.existsSync(path.join(EXAMPLE, 'addon.json'))) console.log('  (no ' + EXAMPLE + ': skipped)');
else {
  const ex = await CA.startAddons({
    doc, engine: eng, host, print: host.print, redraw: () => {}, base: pathToFileURL(path.dirname(EXAMPLE) + '/').href, storage, packages: A.packageStore(null), noGlobal: true,
    fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['outline'] } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
    importer: (u) => import(u),
  });
  const st = ex.list().find((x) => x.id === 'com.example.outline');
  ok(st && st.state === 'active', 'the Outline example activates in CadCraft', JSON.stringify(st && [st.state, st.detail]));
  const steps = doc.undoStack.length;
  await type('OUTLINE', '200,200', '240,200', '240,220', '200,220', '', 'Panel A');
  const isOut = (e) => e.xd && e.xd.CC_COM_EXAMPLE_OUTLINE;
  const o = doc.all().find(isOut);
  ok(o && o.type === 'insert' && o.x === 200 && o.y === 200 && doc.undoStack.length === steps + 1, 'OUTLINE by typing: one object at its first corner, one undo step', JSON.stringify(o && [o.x, o.y]));
  ok(o && doc.blocks.get(o.block)?.entities.some((e) => e.type === 'poly' && e.closed) && doc.blocks.get(o.block)?.entities.some((e) => e.s === 'Panel A'), 'drawn as a closed outline with its tag');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf, readDxf } = await load('dxf.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  for (const F of [
    { key: 'DWG 2018', write: (d) => saveDwg(d, { version: '2018' }).bytes, read: (b) => importDwg(readDwg(b)) },
    { key: 'DXF R12', write: (d) => writeDxf(d).text, read: (t) => readDxf(t) },
  ]) {
    const d2 = new Doc();
    ex.kinds.attach(d2);
    d2.load(F.read(F.write(doc)));
    const o2 = d2.all().find(isOut);
    const rows = o2 ? String(ex.exporters().find((x) => x.addon === 'com.example.outline')?.write(d2) || '').trim().split('\r\n') : [];
    ok(o2 && rows.includes('Panel A,800.0000,120.0000,4,0'), F.key + ': saved and reopened, the outline keeps its tag and shape; EXPORT writes its CSV row', JSON.stringify(rows));
  }
  await ex.loader.setEnabled('com.example.outline', false);
  ok(!Cmd.lookup('OUTLINE') && !ex.exporters().length, 'switched off: OUTLINE and the exporter are gone');
}

// bundled add-ons that start off (0.5 api.default-off, asked by `apparel`): addon.json "default": "off"
section('A bundled add-on that starts off (api.default-off)');
if (!fs.existsSync(path.join(EXAMPLE, 'addon.json'))) console.log('  (no ' + EXAMPLE + ': skipped)');
else {
  const exManifest = JSON.parse(fs.readFileSync(path.join(EXAMPLE, 'addon.json'), 'utf8'));
  ok(A.checkManifest({ ...exManifest, default: 'off' }, { app: 'cadcraft', apiVersion: '1.0' }).manifest?.default === 'off', 'checkManifest keeps "default": "off"');
  ok(!A.checkManifest({ ...exManifest, default: 'maybe' }, { app: 'cadcraft', apiVersion: '1.0' }).ok, '…and refuses any other value than "on" / "off"');
  const mem = new Map();
  const store2 = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
  const boot = () => CA.startAddons({
    doc, engine: eng, host, print: host.print, redraw: () => {}, base: pathToFileURL(path.dirname(EXAMPLE) + '/').href, storage: store2, packages: A.packageStore(null), noGlobal: true,
    fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['outline'] } : /addon\.json$/.test(u) ? { ...exManifest, default: 'off' } : null),
    importer: (u) => import(u),
  });
  let b = await boot();
  const stateOf = (x) => x.list().find((a) => a.id === 'com.example.outline')?.state;
  ok(stateOf(b) === 'off' && !Cmd.lookup('OUTLINE'), 'it starts off: listed, not activated');
  await b.loader.setEnabled('com.example.outline', true);
  ok(stateOf(b) === 'active' && Cmd.lookup('OUTLINE'), 'switched on in Settings: active');
  await b.loader.setEnabled('com.example.outline', false);
  await b.loader.setEnabled('com.example.outline', true);
  await b.loader.setEnabled('com.example.outline', false);
  await b.loader.setEnabled('com.example.outline', true);
  const prefs = JSON.parse(store2.getItem('cc-addons:cadcraft'));
  ok(prefs.on['com.example.outline'] === true && !prefs.off['com.example.outline'], 'the choice is remembered (cc-addons:<app> on)');
  await b.loader.setEnabled('com.example.outline', false);
  b = await boot();
  ok(stateOf(b) === 'off', 'switched off again: still off after a restart');
  await b.loader.setEnabled('com.example.outline', true);
  await b.loader.setEnabled('com.example.outline', false);
  await b.loader.setEnabled('com.example.outline', true);
  const saved = store2.getItem('cc-addons:cadcraft');
  await b.loader.setEnabled('com.example.outline', false);   // free OUTLINE in this process (a real restart is a new page)
  store2.setItem('cc-addons:cadcraft', saved);
  b = await boot();
  ok(stateOf(b) === 'active' && Cmd.lookup('OUTLINE'), 'switched on: active after a restart too');
  await b.loader.setEnabled('com.example.outline', false);
  const inst = b.loader.entryFor({ ...exManifest, id: 'com.example.other', default: 'off' }, { source: 'installed', key: 'x' });
  ok(inst.state === 'ready', 'an installed package ignores "default": installing it was the person\'s choice');
  ok(!mem.has('cc-addons:cadcraft') || !JSON.parse(store2.getItem('cc-addons:cadcraft')).on['com.example.outline'], 'switching off forgets the "on"');
}

// 0.5 api.solids (cad-mep): solids on the 3D tab kept by an add-on, in the drawing's undo step
section('api.solids: an add-on\'s solids on the 3D tab (0.5, cad-mep)');
{
  const { solidsOf } = await load('model3d.js');
  const sapi = globalThis.__testPipes;
  const d = new Doc();
  d.meta.units = 'millimeters';
  const box = (x0, y0, z0, s) => {
    const p = [[x0, y0, z0], [x0 + s, y0, z0], [x0 + s, y0 + s, z0], [x0, y0 + s, z0]].map((q) => q.slice());
    const top = p.map((q) => [q[0], q[1], q[2] + s]);
    return [p.slice().reverse(), top, ...[0, 1, 2, 3].map((i) => [p[i], p[(i + 1) % 4], top[(i + 1) % 4], top[i]])];
  };
  const mine = () => [...d.model3d.root.insts.values()].filter((i) => / \[test\.pipes:/.test(i.name || ''));
  const n0 = d.undoStack.length;
  d.change('x', () => { d.add({ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0, layer: '0' }); sapi.solids.set('r1', { name: 'Run 1', polys: box(0, 0, 0, 1000), color: '#336699', tag: 'Pipes' }, d); });
  const s1 = solidsOf(d.model3d);
  ok(d.undoStack.length === n0 + 1 && s1.length === 1 && s1[0].closed && near(s1[0].volume, 1, 1e-9), 'set(): a 1000 mm cube in a drawing in mm = 1 m³, closed, in the same undo step as the 2D edit', JSON.stringify(s1));
  ok(mine().length === 1 && mine()[0].color === '#336699' && mine()[0].tag === 'Pipes' && d.model3d.tags.some((g) => g.name === 'Pipes') && JSON.stringify(sapi.solids.keys(d)) === '["r1"]', 'named for the add-on and key, coloured, tagged; keys() lists it');
  d.change('y', () => { sapi.solids.apply({ r1: { name: 'Run 1', polys: box(0, 0, 0, 2000) }, r2: { name: 'Run 2', polys: box(5000, 0, 0, 1000) } }, d); });
  const s2 = solidsOf(d.model3d);
  ok(s2.length === 2 && s2.some((s) => near(s.volume, 8, 1e-9)) && mine().length === 2, 'apply(): r1 replaced (8 m³), r2 added — no duplicate', JSON.stringify(s2.map((s) => s.volume)));
  d.undo();
  ok(solidsOf(d.model3d).length === 1 && near(solidsOf(d.model3d)[0].volume, 1, 1e-9), 'undo: back to the one cube');
  d.change('z', () => { sapi.solids.remove('r1', d); });
  ok(!solidsOf(d.model3d).length && [...d.model3d.defs.values()].every((x) => x.id === 'root'), 'remove(): the placement and its definition go');
  // smooth: a 24-sided prism's side edges (15° apart) go soft at 20°, its rims (90°) stay hard
  const ring = Array.from({ length: 24 }, (_, i) => [100 * Math.cos(i * Math.PI / 12), 100 * Math.sin(i * Math.PI / 12)]);
  const prism = [ring.map(([x, y]) => [x, y, 0]).reverse(), ring.map(([x, y]) => [x, y, 500]), ...ring.map(([x, y], i) => { const [u, v] = ring[(i + 1) % 24]; return [[x, y, 0], [u, v, 0], [u, v, 500], [x, y, 500]]; })];
  d.change('s', () => { sapi.solids.set('cyl', { name: 'Pipe', polys: prism, smooth: 20 }, d); });
  const cdef = d.model3d.def(mine()[0].def);
  const soft = [...cdef.edges.values()].filter((e) => e.soft).length, hard = [...cdef.edges.values()].filter((e) => !e.soft).length;
  ok(soft === 24 && hard === 48, 'smooth 20°: the 24 side edges are soft, the 48 rim edges hard', soft + ' / ' + hard);
  let threw = null;
  try { sapi.solids.set('bad key', null, d); } catch (e) { threw = e; }
  ok(threw, 'a bad key is refused');
}

// pass-through (A.5): needs cad-files' e.xd in dwg-props.js
section('Pass-through in DWG and DXF (A.5)');
const DP = await load('dwg-props.js');
const probe = DP.propsFromXdata({ CC_TEST: [[1000, 'x']] });
if (!probe.xd) {
  console.log('  (waiting on cad-files: dwg-props.js does not keep other applications\' xdata yet — e.xd)');
} else {
  ok(true, 'dwg-props.js keeps xdata (e.xd)');
  await passThrough();
}

/**
 * A.5: a drawing with add-on objects (a local-frame pipe, a world-frame run, a pipe inside a block definition, add-on data on a
 * line, another application's xdata on a circle) saved in each format → opened WITHOUT the add-on, edited (pipe moved, run
 * moved, a circle added, the line's colour changed) → saved again in the same format → opened WITH the add-on: every object,
 * value and the foreign xdata intact; the edits kept; the world-frame run brought back to the origin with its points moved.
 */
async function passThrough() {
  const setOn = async (on) => { const a = started.list().find((x) => x.id === 'test.pipes'); if ((a.state === 'active') !== on) await started.loader.setEnabled('test.pipes', on); };
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf, readDxf } = await load('dxf.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const FORMATS = [
    { key: 'DWG 2000', write: (d) => saveDwg(d, { version: '2000' }).bytes, read: (b) => importDwg(readDwg(b)) },
    { key: 'DWG 2004', write: (d) => saveDwg(d, { version: '2004' }).bytes, read: (b) => importDwg(readDwg(b)) },
    { key: 'DWG 2018', write: (d) => saveDwg(d, { version: '2018' }).bytes, read: (b) => importDwg(readDwg(b)) },
    { key: 'DXF R12', write: (d) => writeDxf(d).text, read: (t) => readDxf(t) },
    { key: 'DXF 2000', write: (d) => writeDxf2000(d).text, read: (t) => readDxf(t) },
  ];
  const ACME = [[1000, 'hello'], [1040, 1.5], [1070, 3], [1071, 70000]];
  const pipeData = { a: { x: 0, y: 0 }, b: { x: 30, y: 0 }, label: 'Ölleitung ✓ "P-7"' };
  const runPts = [{ x: 0, y: 10 }, { x: 20, y: 10 }, { x: 20, y: 30 }];
  const cleanDoc = (d) => { const n = new Doc(); n.load(d); return n; };
  for (const F of FORMATS) {
    let api = globalThis.__testPipes;
    await setOn(true);
    api = globalThis.__testPipes;
    const d0 = new Doc();
    started.kinds.attach(d0);
    d0.change('setup', () => {
      d0.add(api.objects.create('pipe', pipeData));
      d0.add(api.objects.create('run', { pts: runPts }));
      d0.add(api.data.set({ type: 'line', x1: 0, y1: -10, x2: 40, y2: -10, layer: '0' }, { circuit: 'L1-3', n: 7 }));
      d0.add({ type: 'circle', cx: 50, cy: 50, r: 5, layer: '0', xd: { ACME_TOOL: ACME } });
    });
    // a pipe inside a block definition, referenced once
    d0.change('block', () => {
      const p = api.objects.create('pipe', { a: { x: 0, y: 0 }, b: { x: 5, y: 0 }, label: 'in block' });
      const g = d0.blocks.get(d0.all().find((e) => api.objects.is(e, 'pipe')).block);
      void g;
      d0.defineBlock({ name: 'HOLDER', base: { x: 0, y: 0 }, entities: [{ ...p, layer: '0' }] });
      d0.add({ type: 'insert', block: 'HOLDER', x: 100, y: 0, rot: 0, sx: 1, sy: 1, layer: '0' });
    });
    const out1 = F.write(d0);
    // without the add-on
    await setOn(false);
    const d1 = cleanDoc(F.read(out1));
    started.kinds.attach(d1);
    const objs1 = d1.all().filter((e) => O.ObjectKinds.stored(e));
    ok(objs1.length === 2 && !api.objects.is(objs1[0]), F.key + ': opened without the add-on, both objects are plain block references with their xdata', String(objs1.length));
    const pipe1 = objs1.find((e) => O.ObjectKinds.stored(e).kind === 'pipe'), run1 = objs1.find((e) => O.ObjectKinds.stored(e).kind === 'run');
    ok(pipe1 && run1 && d1.blocks.get(pipe1.block)?.entities.length === 3, F.key + ': and they show their graphics');
    d1.change('edit', () => {
      d1.update(pipe1.id, G.txEntity(pipe1, G.mTranslate(7, 8)));
      d1.update(run1.id, G.txEntity(run1, G.mTranslate(-5, 0)));
      d1.add({ type: 'circle', cx: 0, cy: 0, r: 2, layer: '0' });
      const ln = d1.all().find((e) => e.type === 'line');
      d1.update(ln.id, { ...ln, color: 3 });
    });
    const out2 = F.write(d1);
    // with the add-on again
    await setOn(true);
    api = globalThis.__testPipes;
    const d2 = new Doc();
    started.kinds.attach(d2);
    d2.load(F.read(out2));
    const pipe2 = d2.all().find((e) => api.objects.is(e, 'pipe'));
    const run2 = d2.all().find((e) => api.objects.is(e, 'run'));
    ok(pipe2 && JSON.stringify(api.objects.dataOf(pipe2)) === JSON.stringify(pipeData) && near(pipe2.x, 7) && near(pipe2.y, 8), F.key + ': the pipe — every value, and the move made without the add-on', JSON.stringify(pipe2 && [api.objects.dataOf(pipe2), pipe2.x, pipe2.y]));
    ok(run2 && run2.x === 0 && api.objects.dataOf(run2).pts.every((p, i) => near(p.x, runPts[i].x - 5) && near(p.y, runPts[i].y)), F.key + ': the run is back at the origin with its points moved', JSON.stringify(run2 && [run2.x, api.objects.dataOf(run2).pts]));
    const ln2 = d2.all().find((e) => e.type === 'line');
    ok(ln2 && JSON.stringify(api.data.get(ln2)) === JSON.stringify({ circuit: 'L1-3', n: 7 }) && ln2.color === 3, F.key + ': the line\'s add-on data, and its new colour');
    const c2 = d2.all().find((e) => e.type === 'circle' && e.r === 5);
    ok(c2 && JSON.stringify(c2.xd?.ACME_TOOL) === JSON.stringify(ACME), F.key + ': another application\'s xdata on the circle, unchanged', JSON.stringify(c2?.xd));
    ok(d2.all().filter((e) => e.type === 'circle').length === 2, F.key + ': the circle added without the add-on is there');
    const holder = d2.blocks.get('HOLDER');
    const inner = holder && holder.entities.find((e) => O.ObjectKinds.stored(e));
    ok(inner && O.decodeItems(Object.values(inner.xd)[0])?.data.label === 'in block', F.key + ': the pipe inside a block definition keeps its data');
  }
  started.kinds.attach(doc);
}

ok(!errors.length, 'no errors logged', errors.slice(0, 3).join(' | '));
const missing = I18n.missing ? I18n.missing() : [];
ok(missing.length === 0, 'every string is in lang/en.json', missing.join(', '));
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
