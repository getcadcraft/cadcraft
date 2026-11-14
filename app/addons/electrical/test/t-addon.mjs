/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the add-on itself, started by CadCraft's own loader (addons/cadcraft-api.js startAddons) from the build's
// addons/index.json, its commands typed at CadCraft's command line, the live cross-references inside the same undo step, the
// Properties section (W2.11), the CSV exporters, and switching it off.
const { ok, section, load, APP, EN, VERBOSE } = globalThis.__elTest;
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { Doc } = await load('doc.js');
const G = await load('geom.js');
const Cmd = await load('commands.js');
const P = await load('propdefs.js');
const CA = await load('addons/cadcraft-api.js');
const A = await load('addons.js');
const M = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/model.js')).href);

section('The add-on in CadCraft: loader, commands, live updates, Properties (W2.11)');
{
  const doc = new Doc();
  const log = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(),
    print: (s) => log.push(String(s)), prompt: () => {},
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: (a, b) => { host.zoomed = { a, b }; },
    props: { schedule: () => {} },
  };
  const eng = new Cmd.Engine(doc, host);
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const settle = async () => { for (let i = 0; i < 10; i++) await tick(); };
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await settle(); } };
  const mem = new Map();
  const storage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
  let downloaded = null;
  const started = await CA.startAddons({
    doc, engine: eng, host, print: host.print, redraw: () => {},
    pickFile: async () => null, download: async (name, data, mime) => { downloaded = { name, data, mime }; }, openDrawing: async () => {},
    base: pathToFileURL(path.join(APP, 'addons') + '/').href, storage, packages: A.packageStore(null), noGlobal: true,
    fetchJson: async (u) => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } },
    importer: (u) => import(u),
  });
  const me = started.list().find((a) => a.id === 'electrical');
  ok(me?.state === 'active', 'the bundled Electrical add-on starts (addons/index.json)', JSON.stringify(me && { state: me.state, reason: me.reason, detail: me.detail }));
  const names = ['ELSYMBOL', 'ELWIRE', 'ELNUMBER', 'ELTAG', 'ELUPDATE', 'ELSHEET', 'ELREPORT', 'ELCHECK', 'ELSTANDARD', 'ELCABLE', 'ELINSTALL', 'ELCIRCUIT', 'ELROUTE', 'ELPANEL', 'ELBALANCE', 'ELCARRIER'];
  ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'electrical'), 'its commands are registered, owned by the add-on');
  ok(Cmd.lookup('ELS')?.name === 'ELSYMBOL' && Cmd.lookup('ELW')?.name === 'ELWIRE', 'short aliases');
  ok(names.every((n) => { const h = Cmd.commandList().find((c) => c.name === n)?.help; return h && !/^cmd\./.test(h); }), 'every command has help in the add-on\'s words');

  // a sheet, a coil and a contact on it, wired
  await type('ELSHEET', 'A3', 'Control');
  ok(doc.layouts.length === 1 && !doc.inModel, 'ELSHEET adds a sheet and opens it');
  const xp = (p) => Math.round((20 + 39 * (p - 0.5)) / 2.5) * 2.5;   // the middle of a path, on the 2.5 mm grid symbols snap to
  await type('ELSYMBOL', 'coil', `${xp(2)},150`);
  if (VERBOSE) console.log(log.join('\n'));
  let m = M.scan(doc);
  const coil = m.devices.find((d) => d.role === 'coil');
  ok(coil && coil.tag === '-K102', 'ELSYMBOL places a coil and tags it from the path grid', coil?.tag);
  await type('ELSYMBOL', 'contact.no', `${xp(5)},200`, '-K102');
  m = M.scan(doc);
  const contact = m.devices.find((d) => d.role === 'contact');
  ok(contact && contact.tag === '-K102', 'a contact takes the coil\'s tag');
  ok(contact.attrs.XREF === '/1.2' && M.scan(doc).devices.find((d) => d.role === 'coil').attrs.XREF1 === 'NO 13-14 /1.5', 'the cross-references are there at once (live, no ELUPDATE)', contact.attrs.XREF);
  const steps = doc.undoStack.length;
  doc.undo();
  ok(!M.scan(doc).devices.some((d) => d.role === 'contact') && !M.scan(doc).devices.find((d) => d.role === 'coil').attrs.XREF1, 'one undo takes the contact AND the mirror line back');
  doc.redo();
  ok(doc.undoStack.length === steps && M.scan(doc).devices.find((d) => d.role === 'coil').attrs.XREF1 === 'NO 13-14 /1.5', 'redo brings both back');
  // moving the contact (a plain MOVE) updates the mirror in the same step
  const cid = contact.id;
  host.selection = new Set([cid]);
  await type('MOVE', `${xp(5)},200`, `${xp(8)},200`);
  ok(M.scan(doc).devices.find((d) => d.role === 'coil').attrs.XREF1 === 'NO 13-14 /1.8', 'MOVE a contact to path 8: the coil says /1.8', M.scan(doc).devices.find((d) => d.role === 'coil').attrs.XREF1);
  // wires: from the rail through the contact to the coil
  await type('ELWIRE', `${xp(2)},250`, `${xp(2)},155`);
  await type('ELWIRE', `${xp(2)},145`, `${xp(2)},60`, '');
  m = M.scan(doc);
  ok(m.wires.length === 2 && m.wires.every((w) => w.layer === 'EL-WIRE'), 'ELWIRE draws on the wire layer and ends on a pin by itself');
  // a wire drawn across a placed symbol is cut under it
  await type('ELWIRE', `${xp(3)},250`, `${xp(3)},60`, '');
  await type('ELSYMBOL', 'fuse', `${xp(3)},180`);
  m = M.scan(doc);
  const fuse = m.devices.find((d) => d.sym === 'fuse');
  const W = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/wires.js')).href);
  const nl = W.netlist(m);
  ok(m.wires.filter((w) => w.pts[0].x === xp(3)).length === 2 && nl.netOfPin.get(fuse.uid + '|P1') !== nl.netOfPin.get(fuse.uid + '|P2') && !nl.throughPins.length, 'a symbol placed on a wire cuts it: the fuse sits in the wire');
  await type('ELNUMBER', 'G');
  m = M.scan(doc);
  ok(m.wirenos.length === W.netlist(m).nets.length && m.wirenos.length >= 3, 'ELNUMBER numbers every net', String(m.wirenos.length));
  // Properties (W2.11)
  const ins = [doc.get(coil.id)];
  const defs = P.defsFor('insert', ins, { doc });
  const tagDef = defs.find((d) => d.key === 'electrical:tag');
  ok(tagDef && P.sectionLabel('electrical') === EN['props.section'], 'Properties has an Electrical section for a symbol', defs.map((d) => d.key).join(' '));
  ok(defs.find((d) => d.key === 'electrical:designation')?.get(ins[0]) === '-K102' && defs.find((d) => d.key === 'electrical:contacts')?.get(ins[0]) === '/1.8', 'designation and where its contacts are', defs.find((d) => d.key === 'electrical:contacts')?.get(ins[0]));
  P.applyValue(doc, tagDef, ins, '-K9', { doc });
  ok(M.scan(doc).devices.find((d) => d.role === 'coil').tag === '-K9' && M.scan(doc).devices.find((d) => d.role === 'contact').attrs.XREF === '', 'renaming the coil in Properties: the contact (still -K102) loses its reference at once');
  const wireDefs = P.defsFor(doc.get(m.wires[0].id).type, [doc.get(m.wires[0].id)], { doc }).filter((d) => d.sec === 'electrical');
  ok(wireDefs.some((d) => d.key === 'electrical:wireno' && /^1\./.test(d.get(doc.get(m.wires[0].id)))), 'a wire shows its number', wireDefs.map((d) => d.key + '=' + d.get(doc.get(m.wires[0].id))).join(' ') + ' / ' + JSON.stringify(M.scan(doc).wirenos.map((w) => w.value)));
  const wn = M.scan(doc).wirenos[0];
  const wnDefs = P.defsFor('insert', [doc.get(wn.id)], { doc });
  ok(wnDefs.some((d) => d.key === 'electrical:wireno') && wnDefs.some((d) => d.key === 'electrical:lock' && d.kind === 'bool'), 'a wire number: its number and Keep');
  ok(!P.defsFor('line', [doc.add ? { type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 1 } : null], { doc }).some((d) => d.sec === 'electrical'), 'nothing for an ordinary line');
  // ELCHECK lists and zooms
  log.length = 0;
  await type('ELCHECK', '1', '');
  ok(log.some((l) => /errors, \d+ warnings/.test(l)) && host.zoomed, 'ELCHECK lists findings and goes to one', log.slice(0, 4).join(' | '));
  // reports on sheets
  const before = doc.layouts.length;
  await type('ELREPORT', 'S', 'D');
  ok(doc.layouts.length === before + 1 && doc.layouts.at(-1).name === 'Sheet list', 'ELREPORT puts the sheet list on a new sheet');
  // CSV exporters through EXPORT
  const exps = started.exporters().filter((e) => e.addon === 'electrical');
  ok(exps.length === 4 && exps.every((e) => e.extension === '.csv'), 'four CSV exporters for EXPORT');
  const parts = await exps.find((e) => /parts/.test(e.id)).write(doc);
  ok(parts.startsWith('﻿') && /-K9/.test(parts), 'the parts list as CSV');
  // ELCABLE on the sheet: a line across the fuse's wires + its tag
  doc.setSpace(doc.layouts[0]);
  await type('ELCABLE', `${xp(3) - 5},120`, `${xp(3) + 5},121`, '', '4G1.5');
  m = M.scan(doc);
  const RP = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/reports.js')).href);
  ok(m.cables.length === 1 && m.cables[0].tag === '-W1' && m.cables[0].fence && RP.cableCores(m, m.cables[0]).length === 1, 'ELCABLE: a line and its tag; the core it crosses', JSON.stringify(m.cables.map((c) => c.tag)));
  // installation plan in model space
  doc.setSpace(null);
  doc.meta.units = 'millimeters';
  await type('ELINSTALL', 'board', '0,0', 'DB1');
  await type('ELINSTALL', 'socket', 'C1', '1000,1100', '3000,1100', '');
  await type('ELINSTALL', 'luminaire', 'C2', '2000,2100', '');
  await type('ELROUTE', '0,0', '0,1000', '4000,1000', '');
  await type('ELROUTE', '2000,1000', '2000,2000', '');
  await type('ELCIRCUIT', 'D', 'C1', 'Sockets', '16', 'RCD1 30 mA A', 'L1', 'DB1', '-1000,0');
  await type('ELCIRCUIT', 'D', 'C2', 'Lights', '10', '', 'L1', '', '-1000,-500');
  const IN = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/install.js')).href);
  let inst = IN.installation(doc, M.scan(doc));
  ok(inst.boards.length === 1 && inst.boards[0].tag === 'DB1' && inst.circuits.get('C1')?.watts === 400 && inst.circuits.get('C2')?.watts === 60 && inst.circuits.get('C1').breaker === 16, 'ELINSTALL and ELCIRCUIT: a board, two circuits with their loads', JSON.stringify([...inst.circuits.values()].map((c) => [c.name, c.watts, c.breaker, c.phase])));
  const lens = IN.cableLengths(doc, M.scan(doc), inst);
  ok(lens.get('C1').routed && Math.abs(lens.get('C1').metres - (1 + 3 + 0.1 + 0.1 + 1 + 1)) < 1e-6, 'ELROUTE: C1 runs 4 m along the routes', String(lens.get('C1').metres));
  // move a luminaire onto C1 with ELCIRCUIT A (noun-verb: select it first)
  const lum = inst.loads.find((l) => l.circuit === 'C2');
  host.selection = new Set([lum.id]);
  await type('ELCIRCUIT', 'A', 'C1');
  inst = IN.installation(doc, M.scan(doc));
  ok(inst.circuits.get('C1').watts === 460 && inst.circuits.get('C2').watts === 0, 'ELCIRCUIT A moves a device to another circuit');
  // ELCARRIER (0.8 EG.2): size the first route as a tray, type a cable diameter, run the schedule
  {
    const routes = M.scan(doc).routes;
    host.selection = new Set([routes[0].id]);
    log.length = 0;
    await type('ELCARRIER', 'S', 'T', '300', '100');
    ok(doc.get(routes[0].id).layer === 'EL-ROUTE-TRAY-300X100' && doc.layers.has('EL-ROUTE-TRAY-300X100') && log.some((l) => /moved to layer EL-ROUTE-TRAY-300X100/.test(l)), 'ELCARRIER Size moves the selected route to a tray layer');
    host.selection = new Set();
    log.length = 0;
    await type('ELCARRIER', 'R');
    ok(log.some((l) => /\d cables:/.test(l)) && log.some((l) => /No outside diameter typed/.test(l)), 'ELCARRIER Run lists the cables and says which have no diameter', log.slice(0, 5).join(' | '));
  }
  log.length = 0;
  await type('ELPANEL', 'L');
  ok(log.some((l) => /Panel schedule DB1/.test(l)) && log.some((l) => /C1/.test(l) && /460 W/.test(l)), 'ELPANEL lists the schedule', log.slice(0, 4).join(' | '));
  await type('ELBALANCE');
  inst = IN.installation(doc, M.scan(doc));
  ok(new Set([inst.circuits.get('C1').phase, inst.circuits.get('C2').phase]).size === 2, 'ELBALANCE puts the two circuits on different phases', [inst.circuits.get('C1').phase, inst.circuits.get('C2').phase].join());
  const sockets = M.scan(doc).installs.filter((i) => i.sym === 'socket');
  ok(sockets.length === 2 && sockets.every((i) => Math.abs(i.e.sx - 50) < 1e-9), 'plan symbols at 1:50 in a millimetre drawing');
  // ELSTANDARD converts
  doc.setSpace(doc.layouts[0]);
  await type('ELSTANDARD', 'A');
  await type('ELSYMBOL', 'coil', `${xp(6)},100`);
  ok(M.scan(doc).devices.some((d) => d.meta.std === 'ansi' && d.role === 'coil'), 'after ELSTANDARD A, new symbols are ANSI');
  await type('ELSTANDARD', 'C');
  ok(M.scan(doc).devices.every((d) => d.meta.std === 'ansi'), 'Convert redraws every symbol in the chosen set');
  await type('ELSTANDARD', 'I');
  // settings were stored for the add-on
  ok(JSON.parse(mem.get('cc-addon:cadcraft:electrical:settings') || '{}').std === 'iec', 'settings are kept per add-on');
  // switch it off: commands and the section go, the drawing stays as it is
  const n = doc.all().length;
  await started.loader.setEnabled?.('electrical', false);
  if (!started.loader.setEnabled) await started.loader.disable?.('electrical');
  const off = started.list().find((a) => a.id === 'electrical');
  ok(off && off.state !== 'active', 'switched off', off?.state);
  ok(!Cmd.lookup('ELSYMBOL') && !P.defsFor('insert', [doc.get(coil.id)], { doc }).some((d) => d.sec === 'electrical'), 'its commands and Properties section are gone');
  const xBefore = M.scan(doc).devices.find((d) => d.role === 'contact').attrs.XREF;
  host.selection = new Set([cid]);
  await type('MOVE', `${xp(8)},200`, `${xp(9)},200`);
  ok(doc.all().length === n && M.scan(doc).devices.find((d) => d.role === 'contact').attrs.XREF === xBefore, 'without it the drawing is plain content: nothing follows a move');
  if (VERBOSE) console.log(log.slice(-10).join('\n'));
}
