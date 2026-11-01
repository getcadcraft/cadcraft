/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the cabinet add-on in CadCraft — CadCraft's own loader, off by default and switched on; CABINET typed at the
// command line (a run of base cabinets, a wall cabinet above, a gap, undo, the other side of a wall), one undo step each;
// CABELEV (a front view that follows a moved cabinet); CABLIST and CABNEST; Properties; the three exports; switched off, the
// drawing stays.
const { ok, section, near, APP, EN } = globalThis.__cabTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const Cmd = await import(pathToFileURL(path.join(APP, 'commands.js')).href);
const { setup } = await import(pathToFileURL(path.join(APP, 'addons/cabinet/test/harness.mjs')).href);

section('The cabinet add-on in CadCraft: loader, CABINET, CABELEV, CABLIST, CABNEST, Properties, files');
const H = await setup({ enable: false });
const { doc, log, type, started, of, dataOf } = H;
const me = () => started.list().find((a) => a.id === 'cabinet');
ok(me()?.state === 'off' && !Cmd.lookup('CABINET'), 'bundled off by default', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('cabinet', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
const names = ['CABINET', 'CABELEV', 'CABLIST', 'CABNEST'];
ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'cabinet'), 'its commands are registered, owned by the add-on');
ok(names.every((n) => { const hh = Cmd.commandList().find((c) => c.name === n)?.help; return hh && !/^cmd\./.test(hh); }), 'every command has help in the add-on\'s words');

const cabs = () => of('cab');
const byNo = (no) => cabs().find((e) => dataOf(e).cab.no === no);
const u0 = doc.undoStack.length;
// a wall from 0,0 to 3000,0 with the room above; 600 base, 800 base, gap 100, wall 600 (W from 0), drawer base 450 (D: after the gap)
await type('CABINET', '0,0', '3000,0', '1000,1000', '600', '800', 'G', '100', 'W', '600', 'D', '450', '');
ok(cabs().length === 4, 'four cabinets placed', log.slice(-4).join(' | '));
ok(doc.undoStack.length === u0 + 1, 'the whole run is one undo step (a command is one step)');
const b1 = byNo('B01'), b2 = byNo('B02'), w1 = byNo('W01'), d1 = byNo('D01');
ok(b1 && near(b1.x, 0) && near(b1.y, 0) && near(b1.rot, 0) && b1.layer === 'CAB-BASE', 'B01 at the wall\'s start, on CAB-BASE');
ok(b2 && near(b2.x, 600) && dataOf(b2).cab.w === 800, 'B02 next to it, 800 wide');
ok(d1 && near(d1.x, 1500) && dataOf(d1).cab.type === 'drawers' && dataOf(d1).cab.w === 450, 'the 100 gap, then the drawer base D01 at 1500', JSON.stringify(d1 && [d1.x, dataOf(d1).cab]));
ok(w1 && near(w1.x, 0) && w1.layer === 'CAB-WALL' && dataOf(w1).cab.elev === 1400 && doc.layers.get('CAB-WALL').linetype === 'HIDDEN', 'the wall cabinet starts its own row from the wall\'s start, dashed layer, hung at 1400');
ok(log.some((l) => /B01: Base cabinet, 600 wide/.test(l)) && log.some((l) => /4 cabinets placed/.test(l)), 'it says what it placed', log.slice(-6).join(' | '));
ok(dataOf(b1).u === 'mm' && dataOf(b1).k === 1 && JSON.stringify(dataOf(b1).rules) === '{}', 'stored in mm, scale 1, default rules (nothing differs)');

// undo inside the command, and the other side of a wall
await type('CABINET', '0,2000', '2000,2000', '500,1000', '600', 'U', '900', '');
const t1 = of('cab').filter((e) => near(e.y, 2000));
ok(t1.length === 1 && near(t1[0].x, 2000) && near(Math.abs(t1[0].rot), Math.PI) && dataOf(t1[0]).cab.w === 900, 'room below a wall: the run starts at its right end facing down; U took the 600 back', JSON.stringify(t1.map((e) => [e.x, e.rot, dataOf(e).cab.w])));
doc.undo();
ok(of('cab').length === 4, 'UNDO takes that cabinet away');

// the front view of the first wall
log.length = 0;
await type('CABELEV');
H.eng.click({ x: 300, y: 0 });
await H.settle();
await type('0,-2000');
const ev = of('cabelev')[0];
ok(ev && dataOf(ev).items.length === 4 && log.some((l) => /Front view of 4 cabinets/.test(l)), 'CABELEV: the front view of the four cabinets on that wall', log.join(' | '));
ok(dataOf(ev).items.map((i) => i.cab.no + '@' + i.x).join(' ') === 'B01@0 W01@0 B02@600 D01@1500', 'their places along the wall', dataOf(ev).items.map((i) => i.cab.no + '@' + i.x).join(' '));
// move B02 by 50 along the wall: the front view follows in the same undo step
const n0 = doc.undoStack.length;
doc.change('test move', () => { const e = doc.get(b2.id); doc.update(b2.id, { ...e, x: e.x + 50 }); });
ok(dataOf(of('cabelev')[0]).items.find((i) => i.cab.no === 'B02').x === 650 && doc.undoStack.length === n0 + 1, 'moving a cabinet moves it in the front view, in the same undo step');
doc.undo();
ok(dataOf(of('cabelev')[0]).items.find((i) => i.cab.no === 'B02').x === 600, 'and undo puts both back');

// cut list and nest
log.length = 0;
await type('CABLIST');
ok(log.some((l) => /4 cabinets, \d+ pieces/.test(l)) && log.some((l) => /Carcass 18 mm: \d+ pieces/.test(l)) && log.some((l) => /Edge 2 mm: [\d.]+ m on \d+ edges/.test(l)), 'CABLIST: pieces by material and the banding', log.join(' | '));
log.length = 0;
await type('CABNEST');
ok(log.some((l) => /Nested on \d+ sheets of 2440 × 1220/.test(l)) && log.some((l) => /Carcass 18 mm: \d+ sheets, \d+ % used/.test(l)), 'CABNEST: sheets per material', log.join(' | '));

// Properties: widen B01 → its parts and its plan follow, one undo step
const P = await import(pathToFileURL(path.join(APP, 'propdefs.js')).href);
{
  const pdefs = P.defsFor('insert', [doc.get(b1.id)], {});
  const fw = pdefs.find((x) => x.key === 'cabinet:w'), fparts = pdefs.find((x) => x.key === 'cabinet:parts'), fprob = pdefs.find((x) => x.key === 'cabinet:problems');
  ok(fw && fw.get(doc.get(b1.id)) === 600 && fparts && fparts.get(doc.get(b1.id)) === '9' && fprob.get(doc.get(b1.id)) === 'None', 'Properties: width 600, 9 pieces (two sides), no problems', JSON.stringify(pdefs.map((x) => x.key)));
  const n1 = doc.undoStack.length;
  const r = P.applyValue(doc, fw, [doc.get(b1.id)], '500');
  ok(r.ok && dataOf(doc.get(b1.id)).cab.w === 500 && doc.undoStack.length === n1 + 1, 'width set to 500 in Properties, one undo step');
  ok(dataOf(of('cabelev')[0]).items.find((i) => i.cab.no === 'B01').cab.w === 500, 'the front view follows');
  const fd = pdefs.find((x) => x.key === 'cabinet:drawers'), ft = pdefs.find((x) => x.key === 'cabinet:type');
  P.applyValue(doc, ft, [doc.get(b1.id)], 'drawers'); P.applyValue(doc, fd, [doc.get(b1.id)], '4');
  ok(dataOf(doc.get(b1.id)).cab.type === 'drawers' && dataOf(doc.get(b1.id)).cab.drawers === 4, 'made a four-drawer base in Properties');
  doc.undo(); doc.undo(); doc.undo();
  ok(dataOf(doc.get(b1.id)).cab.w === 600 && dataOf(doc.get(b1.id)).cab.type === 'base', 'undo three times: as it was');
}

// the exports
{
  const ex = (id) => started.exporters().find((x) => x.id.endsWith(id));
  const csv = String(await ex('cabinet-csv').write(doc));
  const rows = csv.replace(/^﻿/, '').split('\r\n');
  ok(csv.startsWith('﻿') && rows[0].startsWith('Part,Name,Cabinet,Material') && rows.some((r) => r.startsWith('B01-07,Door,B01,Fronts 18 mm,18,717,597,1,length,Edge 2 mm')), 'EXPORT: the cut list as CSV, the B01 door\'s row', rows.slice(0, 3).join(' | '));
  const html = String(await ex('cabinet-labels').write(doc));
  const pieces = Number((/(\d+) pieces/.exec(log.join(' ')) || [])[1]) || 0;
  ok(/<!doctype html>/.test(html) && /@page\{size:210mm 297mm/.test(html) && (html.match(/data-label="/g) || []).length > 20, 'EXPORT: labels on A4 sheets', String((html.match(/data-label="/g) || []).length));
  ok(/Sheet 1, no\. 1/.test(html), 'labels in cutting order say their sheet and number');
  const dxf = String(await ex('cabinet-dxf').write(doc));
  ok(/SECTION/.test(dxf) && /B01-01\.1 \(/.test(dxf) && /EOF\s*$/.test(dxf), 'EXPORT: the nested sheets as one DXF, parts named by piece id');
  void pieces;
}

// a drawing in metres: a typed 0.6 is a 600 mm cabinet, drawn 0.6 wide
{
  doc.meta.units = 'meters';
  await type('CABINET', '0,10', '3,10', '1,11', '0.6', '');
  const e = of('cab').find((x) => near(x.y, 10));
  ok(e && dataOf(e).cab.w === 600 && near(dataOf(e).k, 0.001), 'a drawing in metres: 0.6 typed = 600 mm, scale 0.001', e && JSON.stringify(dataOf(e)));
  doc.undo();
  doc.meta.units = 'millimeters';
}

{
  const ES = JSON.parse((await import('node:fs')).readFileSync(path.join(APP, 'addons/cabinet/lang/es-MX.json'), 'utf8'));
  ok(Object.keys(EN).every((k) => k.startsWith('@') || k in ES) && Object.keys(ES).every((k) => k.startsWith('@') || k in EN), 'the es-MX draft has every key, and no others');
}
ok(Object.keys(EN).every((k) => k.startsWith('@') || /^[a-z0-9]+([._-][a-z0-9]+)*$/.test(k)), 'every language key is lower case words joined by . _ or -');

section('Step 5: drilling, hardware, side view, 3D (CABDRILL, CABHARD, CABSIDE, CAB3D)');
{
  log.length = 0;
  await type('CABDRILL');
  ok(log.some((l) => /B01-\d+ Side × 2, inside face: .*shelf pin/.test(l)) && log.some((l) => /holes in all/.test(l)), 'CABDRILL lists the drilling', log.join(' | '));
  log.length = 0;
  await type('CABHARD');
  ok(log.some((l) => /Cup hinge/.test(l)) && log.some((l) => /3 × Drawer slide \(pair\) 500 long/.test(l)), 'CABHARD lists the hardware', log.join(' | '));
  // side view
  const b1c = of('cab').find((e) => dataOf(e).cab.no === 'B01');
  await type('CABSIDE');
  H.eng.click({ x: b1c.x + 300, y: b1c.y });
  await H.settle();
  await type('0,-3000');
  const sv = of('cabside')[0];
  ok(sv && dataOf(sv).cab.no === 'B01', 'CABSIDE: a side view object', log.join(' | '));
  // 3D
  log.length = 0;
  await type('CAB3D');
  ok(log.some((l) => /Cabinets on the 3D tab: 4/.test(l)), 'CAB3D', log.join(' | '));
  const j3 = JSON.stringify(doc.model3d);
  ok(['B01', 'B02', 'W01', 'D01'].every((no) => j3.includes('Cabinet ' + no + ' [cabinet:cab-')), '3D: one named solid per cabinet in the drawing\'s 3D model');
  const n3 = (j3.match(/\[cabinet:cab-/g) || []).length;
  await type('CAB3D');
  ok((JSON.stringify(doc.model3d).match(/\[cabinet:cab-/g) || []).length === n3, 'running it again replaces the solids, never doubles them');
  // the exporters
  const exp = H.started.exporters();
  const drill = exp.find((x) => x.id === 'cabinet:cabinet-drill'), hard = exp.find((x) => x.id === 'cabinet:cabinet-hardware');
  ok(drill && hard, 'drilling and hardware exporters registered', exp.map((x) => x.id).join());
  const dt = drill.write(doc), ht = hard.write(doc);
  ok(dt.startsWith('\ufeffPart,Name,Face,Hole,X,Y,Diameter,Depth,Side,Qty,Note') && /B01-01,Side,inside face|B01-01,Side,inside/.test(dt), 'drilling CSV in the add-on\'s words', dt.split('\r\n').slice(0, 2).join(' / '));
  ok(ht.startsWith('\ufeffItem,Size,Qty') && ht.includes('Drawer slide (pair),500,3'), 'hardware CSV in the add-on\'s words', ht.split('\r\n').slice(0, 6).join(' / '));
}

// switched off: the cabinets stay as plain block references
await started.loader.setEnabled('cabinet', false);
ok(!Cmd.lookup('CABINET') && doc.all().filter((e) => e.type === 'insert').length >= 5, 'switched off: the commands go, the cabinets and the front view stay in the drawing');
