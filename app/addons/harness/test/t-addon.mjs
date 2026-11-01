/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the harness add-on in CadCraft — CadCraft's own loader (off by default, switched on) on a schematic made with Electrical's symbols;
// HNUM, HWIRE (and Properties on a wire), HHARN / HEND / HROUTE, the cabinet (HRAIL, HPANEL, HMOD *), the lists, the exports, Problems, switched off.
const { ok, section, near, APP } = globalThis.__hnTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const Cmd = await import(pathToFileURL(path.join(APP, 'commands.js')).href);
const P = await import(pathToFileURL(path.join(APP, 'propdefs.js')).href);
const { setup } = await import(pathToFileURL(path.join(APP, 'addons/harness/test/harness.mjs')).href);
const { build } = await import(pathToFileURL(path.join(APP, 'addons/harness/test/fixture.mjs')).href);

const sources = new Map();
globalThis.window = { ccProblems: { source: (def) => { const s = { def, last: [], set(l) { this.last = l; return {}; }, invalidate() { this.inv = (this.inv || 0) + 1; }, recheck() { this.last = def.run({}); return Promise.resolve({}); }, clear() {}, dispose() { sources.delete(def.id); } }; sources.set(def.id, s); return s; } } };

section('The harness add-on in CadCraft: loader, HNUM, HWIRE, harness, cabinet, lists, files, Problems');
const H = await setup({ enable: false });
const { doc, log, type, started, of, dataOf } = H;
const me = () => started.list().find((a) => a.id === 'harness');
ok(me()?.state === 'off' && !Cmd.lookup('HWIRE'), 'bundled off by default', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('harness', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
const names = ['HWIRE', 'HNUM', 'HHARN', 'HEND', 'HROUTE', 'HPANEL', 'HRAIL', 'HDUCT', 'HMOD', 'HFROMTO', 'HCUT', 'HCONN', 'HBUNDLE', 'HBOM'];
ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'harness'), 'its commands are registered, owned by the add-on');
ok(names.every((n) => { const hh = Cmd.commandList().find((c) => c.name === n)?.help; return hh && !/^cmd\./.test(hh); }), 'every command has help in the add-on\'s words');
const src = sources.get('addon.harness.wiring');
ok(!!src, 'it registered a Problems source');

const F = await build(APP, doc);
const ex = (id) => started.exporters().find((x) => x.id.endsWith(id));
const rowsOf = async (id) => String(await ex(id).write(doc)).replace(/^﻿/, '').split('\r\n').filter(Boolean).map((l) => l.split(',').map((c) => c.replace(/^'/, '')));  // the CSV guard puts ' before a cell that starts with - (IEC tags do)
let fr = await rowsOf('harness-fromto');
ok(fr[0][0] === 'Wire' && fr.length === 5, 'from-to before anything is set: 4 wires, no ids', fr.map((r) => r.slice(0, 3).join('/')).join(' | '));
ok(fr.slice(1).every((r) => r[0] === '' && r[3] === '' && r[4] === '1.5' && r[6] === 'Ferrule'), 'defaults fill the gauge (1.5) and the wire ends (ferrule)');

// HNUM
const n0 = doc.undoStack.length;
await type('HNUM');
ok(log.some((l) => /Numbered 4 of 4 wires/.test(l)) && doc.undoStack.length === n0 + 1, 'HNUM: numbered all four wires, one undo step', log.slice(-2).join(' | '));
fr = await rowsOf('harness-fromto');
ok(fr.slice(1).map((r) => r[0]).join() === 'W001,W002,W003,W004', 'ids W001–W004 in the list', fr.map((r) => r[0]).join());
await type('HNUM');
ok(log.some((l) => /Numbered 0 of 4/.test(l)), 'running it again changes nothing');

// HWIRE: colour and gauge for the F1–K1 wire
H.host.setSelection([F.w.f1k1.id]);
const n1 = doc.undoStack.length;
await type('HWIRE', 'C', 'rd', 'G', '2.5', '');
fr = await rowsOf('harness-fromto');
const rowF1 = fr.find((r) => r[1] === '-F1:2');
ok(rowF1 && rowF1[3] === 'RD' && rowF1[4] === '2.5', 'HWIRE: colour RD and gauge 2.5 on the selected wire', JSON.stringify(rowF1));
ok(doc.undoStack.length === n1 + 1, 'the whole command is one undo step');
doc.undo();
fr = await rowsOf('harness-fromto');
ok(fr.find((r) => r[1] === '-F1:2')[4] === '1.5' && fr.find((r) => r[1] === '-F1:2')[3] === '', 'undo takes both fields back');
doc.redo();
H.host.setSelection([F.w.f1k1.id]);
await type('HWIRE', 'I', 'A1', '');
fr = await rowsOf('harness-fromto');
ok(fr.some((r) => r[0] === 'A1' && r[1] === '-F1:2'), 'a wire\'s id can be typed over');
// the tee wire and the K1–X1:1 wire share the net of three pins: setting one sets every connection on its net
H.host.setSelection([F.w.k1x1.id]);
await type('HWIRE', 'T', 'H05V-K', 'A', 'ring', '');
fr = await rowsOf('harness-fromto');
ok(fr.filter((r) => r[5] === 'H05V-K').length === 2 && fr.filter((r) => r[6] === 'Ring lug').length === 2, 'a wire of a net of three pins sets both of its connections (type, end 1)', fr.map((r) => r[5] + '/' + r[6]).join(' | '));

// Properties on a wire
{
  const wire = doc.get(F.w.x1s1.id);
  const pd = P.defsFor('line', [wire], {});
  const fc = pd.find((x) => x.key === 'harness:c'), fg = pd.find((x) => x.key === 'harness:g'), fi = pd.find((x) => x.key === 'harness:i');
  ok(fc && fg && fi && fi.get(wire) === 'W003' && fg.get(wire) === '1.5', 'Properties on a wire: id, colour, gauge, type, ends, length, note', JSON.stringify(pd.map((x) => x.key).filter((k) => /^harness/.test(k))));
  const u = doc.undoStack.length;
  ok(P.applyValue(doc, fc, [wire], 'bu').ok && doc.undoStack.length === u + 1, 'colour set in Properties, one undo step');
  fr = await rowsOf('harness-fromto');
  ok(fr.find((r) => r[0] === 'W003')[3] === 'BU', 'and it is in the list');
}

// the harness drawing
const h0 = doc.undoStack.length;
await type('HHARN', '', 'H1', '0,0', '300,0', '300,400', 'B', '300,0', '600,0', '');
const hb = of('hbundle')[0];
ok(hb && dataOf(hb).nodes.length === 4 && dataOf(hb).segs.length === 3 && dataOf(hb).name === 'H1' && doc.undoStack.length === h0 + 1, 'HHARN: 4 nodes and 3 segments, the branch starting at N2; one undo step', JSON.stringify(hb && [dataOf(hb).nodes.map((n) => n.id), dataOf(hb).segs.map((s) => s.a + s.b)]));
ok(hb.layer === 'HN-HARNESS', 'on its layer');
{
  const u = doc.undoStack.length, x0 = dataOf(hb).nodes[0].x;
  doc.change('move', () => { const e = doc.get(hb.id); doc.update(hb.id, { ...e, x: e.x + 500, y: e.y + 100 }); });
  const q = doc.get(hb.id);
  ok(dataOf(q).nodes[0].x === x0 + 500 && dataOf(q).nodes[0].y === 100 && q.x === 0 && doc.undoStack.length === u + 1, 'moving a harness drawing moves its nodes (world frame), one undo step');
  doc.undo();
}
await type('HEND', '0,0', '-F1');
H.eng.click({ x: 300, y: 400 }); await H.settle(); await type('-K1');
H.eng.click({ x: 600, y: 0 }); await H.settle(); await type('-X1', '');
ok(JSON.stringify(dataOf(of('hbundle')[0]).ends) === '{"-F1":"N1","-K1":"N3","-X1":"N4"}', 'HEND: devices tied to nodes (a terminal strip by its tag)', JSON.stringify(dataOf(of('hbundle')[0]).ends));
log.length = 0;
await type('HROUTE');
const counts = dataOf(of('hbundle')[0]).counts;
ok(log.some((l) => /Routed 3 of 4 wires through 1 harness/.test(l)) && log.some((l) => /-S1/.test(l)), 'HROUTE: 3 of 4 routed; the pushbutton wire is named as having no length', log.join(' | '));
ok(counts.S1.n === 1 && counts.S2.n === 2 && counts.S3.n === 1 && counts.S2.od > 0, 'wires per segment stored on the drawing (S2 carries two)', JSON.stringify(counts));
fr = await rowsOf('harness-fromto');
ok(fr.find((r) => r[1] === '-F1:2')[8] === '730' && fr.find((r) => r[1] === '-F1:2')[9] === 'Harness', 'F1–K1: N1 → N3 is 700 mm, plus 15 mm at each end', fr.find((r) => r[1] === '-F1:2').join());
await type('HBUNDLE', '');
ok(log.some((l) => /Harness segments: 3 lines/.test(l)), 'HBUNDLE lists the three segments', log.slice(-4).join(' | '));

// the cabinet
await type('HRAIL', '0,-300', '400,-300');
await type('HPANEL', '600', '800', '250', '-100,-500', 'CP1');
await type('HDUCT', '0,-250', '400,-250', '40', '60');
const rail = of('hrail')[0];
ok(rail && near(dataOf(rail).len, 400) && of('hpanel').length === 1 && of('hduct').length === 1, 'HRAIL, HPANEL and HDUCT draw their objects');
log.length = 0;
await type('HMOD', '*');
H.eng.click({ x: 0, y: -300 }); await H.settle();
await type('');
const ms = of('hmod').map((e) => ({ e, d: dataOf(e) })).sort((a, b) => a.e.x - b.e.x);
ok(ms.map((m) => m.d.tag).join() === '-F1,-K1,-X1:1,-X1:2', 'HMOD *: every part of the schematic that stands in the cabinet, in order along the rail (the pushbutton is a field device)', ms.map((m) => m.d.tag).join());
ok(near(ms[0].e.x, 8.75) && near(ms[1].e.x, 17.5 + 22.5) && near(ms[2].e.x, 62.5 + 3.1), 'laid side by side from the rail\'s start (17.5, 45 and 6.2 mm wide)', ms.map((m) => m.e.x).join());

// lists
const bom = await rowsOf('harness-bom');
const pick = (sec) => bom.filter((r) => r[0] === sec);
ok(pick('Rail')[0][2] === '400 mm' && pick('Enclosure')[0][1] === 'CP1' && pick('Enclosure')[0][2] === '600 × 800 × 250' && pick('Duct').length === 1, 'BOM: the rail, the panel, the duct');
ok(pick('Device').some((r) => /Volta B16-1P/.test(r[1])) && pick('Device').some((r) => /Clampo TB-4/.test(r[1]) && r[3] === '2'), 'BOM: devices from the schematic\'s maker and part numbers (two terminals of one part)');
ok(pick('Harness').length === 1 && pick('Harness')[0][2] === 'H1', 'BOM: the harness');
const e0 = doc.all().length;
await type('HFROMTO', '1000,1000');
ok(doc.all().length > e0 + 20 && log.some((l) => /From-to list: 4 lines/.test(l)), 'HFROMTO draws the list as a table where you click');
const xl = await ex('harness-xlsx').write(doc);
ok(xl[0] === 0x50 && xl.length > 1500, 'one workbook with all the lists');

// Problems
await src.recheck();
const codes = src.last.map((p) => p.code);
ok(codes.includes('harness.route.none') && !codes.includes('harness.wire.noid') && src.last.every((p) => p.text && !/^prob\./.test(p.text)), 'Problems: the pushbutton wire has no length; every wire has an id', JSON.stringify(src.last));
// overlap two modules: move -K1 onto -F1
doc.change('move', () => { const m = ms[1].e; doc.update(m.id, { ...doc.get(m.id), x: ms[0].e.x + 4 }); });
await src.recheck();
const ov = src.last.find((p) => p.code === 'harness.cab.overlap');
ok(ov && /-F1 and -K1 overlap/.test(ov.text) && ov.about.length === 2, 'Problems: two devices overlapping on the rail, in words, about both', JSON.stringify(src.last.map((p) => p.text)));
ok((src.inv || 0) > 0, 'a change asks the store to check again');
// a wire with no id again → fix numbers it
doc.change('x', () => { const e = doc.get(F.parts.K1.e.id); void e; });
H.host.setSelection([F.w.f1k1.id]);
await type('HWIRE', 'I', '', '');
await src.recheck();
const noid = src.last.find((p) => p.code === 'harness.wire.noid');
ok(noid && noid.fixes[0].action === 'number', 'Problems: a wire with no id, with the numbering fix');
ok(await src.def.fix(noid, noid.fixes[0]) === true, 'the fix numbers it');

// off: the drawing stays
await started.loader.setEnabled('harness', false);
ok(me()?.state === 'off' && !Cmd.lookup('HWIRE') && of('hmod').length === 0 && doc.all().filter((e) => e.type === 'insert').length >= 13, 'switched off: the commands go, the cabinet and harness stay as plain block references');
ok(!sources.has('addon.harness.wiring'), 'and its Problems source goes with it');
