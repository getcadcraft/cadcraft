/* SPDX-License-Identifier: Apache-2.0 */
// PV one-line from BimCraft's data (0.8 EG.15, cad_PART_3): read, lay out, place on a sheet, and the wires meet the symbols' pins.
const { ok, section, near, load, mine, EN, Doc } = globalThis.__elTest;
const PV = await mine('lib/pvoneline.js');
const S = await mine('lib/symbols.js');
const M = await mine('lib/model.js');
const W = await mine('lib/wires.js');

section('EG.15: PV one-line');
const plan = {
  format: 'cadcraft-pv-oneline', version: 1, name: 'House PV',
  nodes: [
    { id: 'pv-array-1', kind: 'pv-array', symbol: 'pv-array', label: 'South roof', col: 0, row: 0, rating: { modules: 20, kwp: 8, voc: 495 } },
    { id: 'disconnect-3', kind: 'disconnect', symbol: 'disconnect', label: 'DC disconnect', col: 2, row: 0, rating: { rated: 35 } },
    { id: 'inverter-4', kind: 'inverter', symbol: 'inverter', label: 'Generic 5 kW', col: 3, row: 0, rating: { pacKw: 5 } },
    { id: 'panel-6', kind: 'panel', symbol: 'panel', label: 'Main panel', col: 4, row: 0, rating: { voltage: 240 } },
    { id: 'utility-7', kind: 'utility', symbol: 'utility', label: 'Utility', col: 5, row: 1, rating: {} },
  ],
  edges: [
    { id: 'e1', from: 'pv-array-1', to: 'disconnect-3', circuit: 'dc', current: 10.3, wire: '14 AWG', ocpd: 20, label: '2 strings of 10' },
    { id: 'e2', from: 'disconnect-3', to: 'inverter-4', circuit: 'dc', current: 10.3, wire: '14 AWG', ocpd: null, label: '' },
    { id: 'e3', from: 'inverter-4', to: 'panel-6', circuit: 'ac', current: 20.8, wire: '10 AWG', ocpd: 30, label: '' },
    { id: 'e4', from: 'panel-6', to: 'utility-7', circuit: 'ac', current: 20.8, wire: null, ocpd: null, label: '' },
  ],
  notes: ['pv.note.code'], code: { label: 'example factors, not a compliance statement' }, totals: { kwp: 8, acKw: 5, acCurrent: 20.8, dcCurrentMax: 10.3 },
};
const r = PV.readPvOneline(JSON.stringify(plan));
ok(r.ok && r.plan.nodes.length === 5 && r.plan.edges.length === 4, 'the plan is read');
ok(!PV.readPvOneline('x').ok && PV.readPvOneline({ format: 'other' }).errors[0] === 'not_pv' && PV.readPvOneline({ ...plan, version: 2 }).errors[0] === 'version', 'wrong files are refused');
const dirty = PV.readPvOneline({ ...plan, nodes: [...plan.nodes, { id: 'bad id', symbol: 'inverter' }, { id: 'x', symbol: 'toaster' }, { id: 'pv-array-1', symbol: 'inverter' }], edges: [...plan.edges, { from: 'nope', to: 'panel-6' }, { from: 'panel-6', to: 'panel-6' }] });
ok(dirty.plan.nodes.length === 5 && dirty.plan.edges.length === 4 && dirty.errors.length >= 5, 'bad ids, unknown symbols, duplicates and edges to nowhere are dropped, and counted');
ok(PV.readPvOneline({ ...plan, nodes: [{ ...plan.nodes[0], label: 'a'.repeat(500), col: 9999, rating: { ok: 1, 'bad key!': 2, s: 'x' } }] }).plan.nodes[0].col === 40, 'columns are clamped, long labels cut, only numeric ratings with plain names kept');
const lay = PV.layoutPvOneline(r.plan);
ok(lay.symbols.length === 7 && lay.symbols.filter((s) => s.key === 'breaker').length === 2 && lay.wires.length === 4 && lay.symbols.every((s) => S.symbol(s.key)), 'every part maps to a CadCraft symbol');
ok(lay.symbols.find((s) => s.id === 'utility-7').y < lay.symbols.find((s) => s.id === 'panel-6').y, 'rows go down the sheet');
ok(lay.wires[0].text.join('|') === '2 strings of 10|10.3 A|14 AWG|20 A fuse/breaker', 'a wire says its label, current, size and fuse');
ok(lay.wires[3].pts.length === 4, 'a wire between rows steps (horizontal, vertical, horizontal)');
ok(lay.notes[0] === 'example factors, not a compliance statement', 'the code label travels with the drawing');
// placed on a sheet: one change, and every wire end lands on a pin of a symbol
const doc = new Doc();
const u0 = doc.undoStack.length;
const sheet = PV.placePvOneline(doc, r.plan, lay, { std: 'iec', title: 'PV one-line', note: 'Not a compliance statement.' });
ok(sheet && doc.layouts.length === 1 && doc.undoStack.length === u0 + 1, 'one new sheet, one undo step');
const model = M.scan(doc);
ok(model.devices.length === 7, 'five parts and two fuse/breaker symbols on the sheet', String(model.devices.length));
const net = W.netlist(model);
const pinsAt = new Map();
let wiresTouch = 0;
for (const d of model.devices) for (const p of d.pins || []) pinsAt.set(Math.round(p.x) + ',' + Math.round(p.y), d.meta.sym);
for (const w of lay.wires) { const a = w.pts[0], b = w.pts[w.pts.length - 1]; if (pinsAt.has(Math.round(a[0]) + ',' + Math.round(a[1])) && pinsAt.has(Math.round(b[0]) + ',' + Math.round(b[1]))) wiresTouch++; }
ok(lay.wires[0].breaker && lay.wires[2].breaker && !lay.wires[1].breaker && !lay.wires[3].breaker, 'a breaker symbol sits on each wire that has a fuse rating; the text label stays');
ok(wiresTouch === 4, 'both ends of every wire sit on a pin (' + wiresTouch + ' of 4)');
ok(net && (net.nets?.length ?? net.length ?? 1) >= 1, 'the netlist reads the sheet');
ok(doc.layouts[0].entities.size > 20 && [...doc.layouts[0].entities.values()].some((e) => e.type === 'text' && /Not a compliance statement/.test(e.s)), 'the not-a-compliance-statement note is on the sheet');
ok(EN['group.power'] && ['pv.array', 'pv.combiner', 'pv.inverter', 'panel.board', 'utility'].every((k) => EN['sym.' + k]), 'the new symbols and group have words');
