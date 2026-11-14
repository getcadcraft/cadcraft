/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the lighting add-on in CadCraft — CadCraft's own loader (off by default, switched on); LPOS, LFIX (on a position, spread), LNUM, LSET, the lists, the legend, classes, Properties, the exports, Problems, switched off.
const { ok, section, near, APP, EN } = globalThis.__lxTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const Cmd = await import(pathToFileURL(path.join(APP, 'commands.js')).href);
const Cl = await import(pathToFileURL(path.join(APP, 'classes.js')).href);
const { setup } = await import(pathToFileURL(path.join(APP, 'addons/lighting/test/harness.mjs')).href);

// a stand-in Problems store, to see what the add-on hands the shell
const sources = new Map();
globalThis.window = { ccProblems: { source: (def) => { const s = { def, last: [], set(l) { this.last = l; return {}; }, invalidate() { this.inv = (this.inv || 0) + 1; }, recheck() { this.last = def.run({}); return Promise.resolve({}); }, clear() {}, dispose() { sources.delete(def.id); } }; sources.set(def.id, s); return s; } } };

section('The lighting add-on in CadCraft: loader, LPOS, LFIX, LNUM, LSET, lists, classes, Properties, files, Problems');
const H = await setup({ enable: false });
const { doc, log, type, started, of, dataOf } = H;
const me = () => started.list().find((a) => a.id === 'lighting');
ok(me()?.state === 'off' && !Cmd.lookup('LFIX'), 'bundled off by default', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('lighting', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
const names = ['LPOS', 'LFIX', 'LNUM', 'LSET', 'LSCHED', 'LHOOK', 'LLEGEND'];
ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'lighting'), 'its commands are registered, owned by the add-on');
ok(names.every((n) => { const hh = Cmd.commandList().find((c) => c.name === n)?.help; return hh && !/^cmd\./.test(hh); }), 'every command has help in the add-on\'s words');
ok(sources.has('addon.lighting.plot'), 'it registered a Problems source');

// two positions
const u0 = doc.undoStack.length;
await type('LPOS', '1E', 'T', '0,0', '9000,0', '');
ok(of('lpos').length === 1 && doc.undoStack.length === u0 + 1, 'LPOS: a truss named 1E, one undo step', log.slice(-3).join(' | '));
await type('LPOS', '2E', 'P', '0,2000', '9000,2000', '');
await type('LPOS', '1E', 'P');
ok(of('lpos').length === 2 && log.some((l) => /named 1E already/.test(l)), 'a second 1E is refused');
const p1 = of('lpos').find((e) => dataOf(e).name === '1E');
ok(dataOf(p1).kind === 'truss' && p1.layer === 'LX-POSITIONS' && Cl.classOf(p1) === 'Rigging-Truss', 'the position is on its layer and in class Rigging-Truss');
ok(Cl.getClass(doc, 'Rigging-Truss') && Cl.getClass(doc, 'Rigging'), 'the class (and its parent) exists in the drawing\'s table');

// a position is a world-frame object: moving it moves its points and the reference goes back to the origin, in the same step
{
  const u = doc.undoStack.length, p0 = dataOf(p1).pts[0].x;
  doc.change('move', () => { const e = doc.get(p1.id); doc.update(p1.id, { ...e, x: e.x + 1000 }); });
  const q = doc.get(p1.id);
  ok(dataOf(q).pts[0].x === p0 + 1000 && q.x === 0 && doc.undoStack.length === u + 1, 'moving a position moves its points (the reference stays at the origin), one undo step');
  doc.undo();
  ok(dataOf(doc.get(p1.id)).pts[0].x === p0, 'and undo puts it back');
}

// fixtures on a position: type 1 = profile, three clicked, then spread 4 on 2E
await type('LFIX', '1');
for (const [x, y] of [[8000, 20], [1000, -30], [4000, 0]]) { H.eng.click({ x, y }); await H.settle(); }
await type('');
let fx = of('lfix');
ok(fx.length === 3 && fx.every((e) => dataOf(e).pos === '1E' && dataOf(e).type === 'profile' && dataOf(e).aim === 270 && e.rot === 0 && e.layer === 'LX-FIXTURES'), 'LFIX: three profiles linked to the truss they hang on, aimed down the page (the words stay upright)', JSON.stringify(fx.map((e) => dataOf(e).pos)));
ok(fx.every((e) => Cl.classOf(e) === 'Lighting-Fixtures-Profile'), 'each in class Lighting-Fixtures-Profile');
await type('LFIX', '4', 'S');
H.eng.click({ x: 500, y: 2000 }); await H.settle();
await type('4', '');
fx = of('lfix');
const par = fx.filter((e) => dataOf(e).type === 'par');
ok(par.length === 4 && par.every((e) => dataOf(e).pos === '2E' && near(e.y, 2000)) && near(par[0].x, 1125) && near(par[3].x, 7875), 'S: four PARs spread along 2E with half a space at each end', JSON.stringify(par.map((e) => e.x)));

// numbering with channels
const n0 = doc.undoStack.length;
await type('LNUM', 'C', '101', 'G');
fx = of('lfix');
const prof = fx.filter((e) => dataOf(e).type === 'profile').sort((a, b) => a.x - b.x);
ok(prof.map((e) => dataOf(e).unit).join() === '1,2,3' && fx.filter((e) => dataOf(e).pos === '2E').map((e) => dataOf(e).unit).sort().join() === '1,2,3,4', 'LNUM: units run along each position, starting again on the next');
ok(prof.map((e) => dataOf(e).chan).join() === '101,102,103' && doc.undoStack.length === n0 + 1, 'channels from 101 in position order; the whole thing is one undo step');
ok(log.some((l) => /Numbered 7 fixtures on 2 positions/.test(l)), 'it says what it did', log.slice(-2).join(' | '));
doc.undo();
ok(of('lfix').every((e) => !dataOf(e).unit), 'UNDO takes the numbers back');
doc.redo();

// LSET: a sequence of addresses and a purpose on the selection
H.host.setSelection(par.map((e) => e.id));
await type('LSET', 'A', '1+');
const pr = of('lfix').filter((e) => dataOf(e).type === 'par').sort((a, b) => a.x - b.x);
ok(pr.map((e) => dataOf(e).addr).join() === '1,2,3,4', 'LSET: 1+ numbers the addresses in a row, left to right');
H.host.setSelection(prof.map((e) => e.id));
await type('LSET', 'P', 'Front light');
ok(of('lfix').filter((e) => dataOf(e).type === 'profile').every((e) => dataOf(e).purpose === 'Front light'), 'a purpose on the selected fixtures');
H.host.setSelection(prof.map((e) => e.id));
await type('LSET', 'W', '575');
ok(of('lfix').filter((e) => dataOf(e).type === 'profile').every((e) => dataOf(e).watts === 575), 'wattage');

// lists
log.length = 0;
await type('LSCHED', '');
ok(log.some((l) => /Instrument schedule: 10 lines/.test(l)) && log.some((l) => /Total, 7 fixtures/.test(l)), 'LSCHED prints the schedule with its totals', log.slice(0, 4).join(' | '));
const e0 = doc.all().length;
await type('LHOOK', '20000,-5000');
ok(doc.all().length > e0 + 10, 'LHOOK draws the hookup as a table where you click');
const e1 = doc.all().length;
await type('LLEGEND', '20000,-9000');
ok(doc.all().length > e1 + 10 && doc.all().some((e) => e.type === 'text' && e.s === 'PAR'), 'LLEGEND draws the legend');

// LLUX (0.8 EG.4): needs a photometry file per type; none yet → a clear message and nothing drawn
{
  const n0 = doc.all().length;
  await type('LLUX');
  ok(log.slice(-2).some((l) => /photometry file/.test(l)) && doc.all().length === n0, 'LLUX with no photometry file says so and draws nothing');
  const IES = ['IESNA:LM-63-2002', 'TILT=NONE', '1 1000 1 3 1 1 2 0 0 0', '1 1 100', '0 90 180', '0', '1000 1000 1000'].join('\n');
  const lib = {}; for (const ty of new Set(of('lfix').map((e) => dataOf(e).type))) lib[ty] = { name: 'iso.ies', text: IES };
  H.storage.setItem('cc-addon:cadcraft:lighting:photometry', JSON.stringify(lib));
  const u = doc.undoStack.length;
  await type('LLUX', '-2000,-6000', '12000,2000', '5000', '0', '1000', '1');
  const vals = doc.all().filter((e) => e.type === 'text' && e.layer === 'LX-LUX');
  ok(vals.length > 20 && doc.undoStack.length === u + 1, 'LLUX writes the values on LX-LUX in one undo step (' + vals.length + ')');
  ok(log.some((l) => /lowest \d+ lux, average \d+, highest \d+/.test(l)) && log.some((l) => /Direct illuminance only/.test(l)), 'it prints the figures and the direct-light-only note');
}

// Properties: type and channel of a fixture, a position's name
const P = await import(pathToFileURL(path.join(APP, 'propdefs.js')).href);
{
  const f1 = of('lfix').find((e) => dataOf(e).type === 'profile' && dataOf(e).unit === '1' && dataOf(e).pos === '1E');
  const pd = P.defsFor('insert', [doc.get(f1.id)], {});
  const fc = pd.find((x) => x.key === 'lighting:chan'), ft = pd.find((x) => x.key === 'lighting:type');
  ok(fc && fc.get(doc.get(f1.id)) === '101' && ft && ft.get(doc.get(f1.id)) === 'profile', 'Properties: channel 101, a profile', JSON.stringify(pd.map((x) => x.key).filter((k) => /^lighting/.test(k))));
  const n1 = doc.undoStack.length;
  ok(P.applyValue(doc, fc, [doc.get(f1.id)], '205').ok && dataOf(doc.get(f1.id)).chan === '205' && doc.undoStack.length === n1 + 1, 'channel set in Properties, one undo step');
  P.applyValue(doc, ft, [doc.get(f1.id)], 'fresnel');
  ok(dataOf(doc.get(f1.id)).type === 'fresnel' && Cl.classOf(doc.get(f1.id)) === 'Lighting-Fixtures-Fresnel', 'a new type moves the fixture to its class');
  doc.undo(); doc.undo();
  const pp = P.defsFor('insert', [doc.get(p1.id)], {});
  ok(pp.find((x) => x.key === 'lighting:length').get(doc.get(p1.id)) === '9000' && pp.find((x) => x.key === 'lighting:kind'), 'Properties of a position: its length');
}

// files
{
  const ex = (id) => started.exporters().find((x) => x.id.endsWith(id));
  const sch = String(await ex('lighting-schedule').write(doc)).replace(/^\ufeff/, '').split('\r\n');
  ok(sch[0].startsWith('Position,Unit,Type,Watts,Purpose') && sch.some((r) => /^1E,1,Profile,575,Front light,/.test(r)), 'EXPORT: the schedule as CSV', sch.slice(0, 3).join(' | '));
  const hk = String(await ex('lighting-hookup').write(doc)).replace(/^\ufeff/, '').split('\r\n');
  ok(hk[0].startsWith('Channel,') && hk[1].startsWith('101,'), 'EXPORT: the hookup by channel');
  const xl = await ex('lighting-xlsx').write(doc);
  ok(xl[0] === 0x50 && xl.length > 1000, 'EXPORT: one workbook with the lists');
}

// Problems
const src = sources.get('addon.lighting.plot');
await src.recheck();
ok(src.last.length === 0, 'Problems: a plot with every fixture numbered and on a position has none', JSON.stringify(src.last.map((p) => p.code)));
H.host.setSelection(prof.slice(0, 2).map((e) => e.id));
await type('LSET', 'U', '9');
ok((src.inv || 0) > 0, 'an edit of a fixture or position asks the store to check again');
await src.recheck();
const dup = src.last.find((p) => p.code === 'lighting.unit.dup');
ok(dup && /Unit 9 is used 2 times on 1E/.test(dup.text) && dup.about.length === 2 && dup.severity === 'warning' && dup.fixes[0].action === 'number', 'Problems: a duplicate unit, in words, about the two fixtures, with a fix', JSON.stringify(src.last));
ok(await src.def.fix(dup, dup.fixes[0]) === true && of('lfix').filter((e) => dataOf(e).pos === '1E').map((e) => dataOf(e).unit).sort().join() === '1,2,3', 'the fix numbers the units again (one undo step)');
// switch off: the drawing stays
await started.loader.setEnabled('lighting', false);
ok(me()?.state === 'off' && !Cmd.lookup('LFIX') && of('lfix').length === 0 && doc.all().filter((e) => e.type === 'insert').length >= 9, 'switched off: the commands go, the fixtures stay as plain block references');
ok(!sources.has('addon.lighting.plot'), 'and its Problems source goes with it');
