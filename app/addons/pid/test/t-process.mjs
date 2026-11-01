/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 Track CH, CH.4 + CH.28): the P&ID add-on's side of the one living model. The drawing is described to the process engine
// (equipment, lines with their ends, instruments), a process model is kept in the drawing as hidden objects, linked to the drawing's tags and
// line numbers, run, put on the sheet as a stream table, a line size is changed from the drawing and carried to the lines, and the control
// system lists are written. The engine is the host's synced copy (cadcraft/dev/process/).
const { ok, section, near, load, APP, ROOT } = globalThis.__pidTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const { setup } = await import(pathToFileURL(path.join(APP, 'addons/pid/test/harness.mjs')).href);
const PM = await load('process/model.js');
const PL = await import(pathToFileURL(path.join(APP, 'addons/pid/lib/process-link.js')).href);
const MD = await import(pathToFileURL(path.join(APP, 'addons/pid/lib/model.js')).href);
const Cmd = await load('commands.js');

section('The P&ID add-on and the process model (CH.4, CH.28)');
const prev = await import('./t-addon.mjs');   // its add-on instance is still on: switch it off so this one can register the same commands
await prev.started.loader.setEnabled('pid', false);
const H = await setup({ enable: true });
const { doc, log, type, started, info, of, dataOf } = H;
const mk = (kind, data, x = 0, y = 0, layer = 'PID-EQUIP') => { let id; doc.change('test', () => { id = doc.add({ ...started.kinds.create('pid', kind, data, { layer }), x, y, rot: 0 }).id; }); return id; };
// a pump P-101 at (0,0) (discharge at 2, 1), an exchanger E-101 at (20, 1) (tube in at 18.8, 1)
const l = 4, pumpAt = [0, 0], exAt = [20, 1];
mk('pidsym', { sym: 'pump-cf', l, tag: 'P-101', attrs: { svc: 'water' } }, ...pumpAt);
mk('pidsym', { sym: 'exch-shell', l, tag: 'E-101' }, ...exAt);
mk('pidsym', { sym: 'inst-field', l: 2, tag: 'FT-101' }, 8, 10); mk('pidsym', { sym: 'inst-shared', l: 2, tag: 'FIC-101' }, 14, 10);
mk('pidsym', { sym: 'globe', l: 2, tag: 'FV-101', act: 'diaphragm' }, 14, 1);
const lineAt = (pts, extra = {}) => mk('pidline', { pts, svc: 'PW', size: '2"', seq: '101', spec: 'A1A', k: 4, th: 0.8, arrow: 'end', style: 'process', ...extra }, 0, 0, 'PID-LINE-PROC');
lineAt([[2, 1], [13, 1]]);   // the pump's discharge to the valve's "in"
lineAt([[15, 1], [18.8, 1]]);   // the valve's out to E-101's tube in
lineAt([[21.2, 1], [30, 1]], { seq: '102', size: '3"' });
const d = PL.describe(MD.scan(started.kinds && [...doc.model].map(([id, e]) => ({ uid: String(id), e, kind: info(e)?.kind, data: info(e)?.data })).filter((x) => x.kind === 'pidsym' || x.kind === 'pidline')));
ok(d.equipment.map((e) => e.tag).sort().join() === 'E-101,P-101', 'describe: equipment by tag', JSON.stringify(d.equipment));
const l1 = d.lines.find((x) => x.ln === '2"-PW-101-A1A');
ok(l1 && l1.from.some((x) => /P-101/.test(x)) && l1.to.some((x) => /E-101/.test(x)), 'describe: line 101 runs from the pump to the exchanger (through the valve, which it passes)', JSON.stringify(d.lines));
ok(d.instruments.length === 2 && d.valves.some((v) => v.tag === 'FV-101' && v.act === 'diaphragm'), 'describe: instruments and the control valve');

// a model of the same plant, kept in the drawing as hidden objects
const flow = { v: 1, thermo: { components: ['water'], model: 'ideal' }, feeds: { S1: { flows: { water: 30 }, T: 300, P: 3e5 } }, units: [{ id: 'P-101', type: 'pump', in: ['S1'], out: ['S2'], p: { Pout: 6e5 } }, { id: 'E-101', type: 'heater', in: ['S2'], out: ['S3'], p: { Tout: 340 } }] };
const model = PM.newModel('Test plant', flow);
const items = PL.pieces(model, 1);
ok(PL.fromPieces(items).name === 'Test plant' && PL.fromPieces([...items, ...PL.pieces(PM.newModel('older', flow), 0)]).name === 'Test plant', 'the model block round trips through pieces; the newest set wins');
const importer = started.importers().find((i) => /Process/.test(i.label));
ok(!!importer, 'IMPORT offers the process model');
const file = { name: 'plant.process.json', text: async () => PM.toJSON(model) };
const got = await importer.read(file);
doc.change('IMPORT', () => { for (const e of got.entities) doc.add({ ...e }); });
ok(of('pidproc').length === got.entities.length && got.entities.length >= 1, 'importing keeps the model in the drawing as hidden objects', of('pidproc').length + '');
log.length = 0; await type('PIDPROC', '1');
ok(log.some((l2) => /2 units and 3 streams/.test(l2)), 'PIDPROC, link and run: units and streams counted', log.join(' | '));
ok(log.some((l2) => /newly linked/.test(l2)), 'PIDPROC reports what it linked');

// IND.8: an imported stream table sets the model's feeds (PIDFEEDS)
{
  const sImp = started.importers().find((i) => /Stream table/.test(i.label));
  ok(!!sImp, 'IMPORT offers the stream table');
  log.length = 0; await type('PIDFEEDS');
  ok(log.some((l2) => /No stream table has been imported/.test(l2)), 'PIDFEEDS before any import says so');
  const csv = 'Stream,S1,S9\nTemperature (C),50,10\nPressure (bar),2,1\nMolar flow (kmol/h),36,10\nWater,1,1\nEthanol,0,0\n';
  await sImp.read({ name: 'streams.csv', arrayBuffer: async () => new TextEncoder().encode(csv).buffer });
  log.length = 0; await type('PIDFEEDS');
  ok(log.some((l2) => /1 feed\(s\) of the process model set from streams\.csv; 1 stream\(s\) not applied/.test(l2)), 'PIDFEEDS applies S1 and skips S9 (no such feed)', log.join(' | '));
  ok(log.some((l2) => /Ethanol/.test(l2) && /property package/.test(l2)), 'the component the package lacks is named', log.join(' | '));
  const m2 = PL.fromPieces([...doc.model].filter(([, e]) => info(e)?.kind === 'pidproc').map(([id, e]) => ({ id, ...info(e).data })));
  const f1 = m2.flowsheet.feeds.S1;
  ok(f1 && Math.abs(f1.flows.water - 10) < 1e-9 && Math.abs(f1.T - 323.15) < 1e-9 && Math.abs(f1.P - 2e5) < 1e-6, '36 kmol/h of water at 50 C and 2 bar = 10 mol/s, 323.15 K, 200000 Pa', JSON.stringify(f1));
  log.length = 0; await type('PIDPROC', '1');
  ok(log.some((l2) => /2 units and 3 streams/.test(l2)), 'the model still runs with the imported feed', log.join(' | '));
}
const exporter = started.exporters().find((e) => /Process model/.test(e.label));
const back = PM.fromJSON(await exporter.write(doc));
ok(back && back.links['P-101'] && back.links['P-101'].tag === 'P-101' && back.links.S2 && back.links.S2.ln === '2"-PW-101-A1A', 'the link (unit tag, stream to line number) was saved in the drawing', JSON.stringify(back && back.links));
// a stream table on the sheet
log.length = 0; const u0 = doc.undoStack.length;
await type('PIDPROC', '2', '0,-30');
const tbl = of('pidtable').find((e) => dataOf(e).list === 'stream');
ok(tbl && dataOf(tbl).rows[0][0] === 'Stream' && dataOf(tbl).rows.length === 4, 'PIDPROC, stream table: a table with one row per stream', JSON.stringify(tbl && dataOf(tbl).rows && dataOf(tbl).rows.length));
ok(dataOf(tbl).rows[2][1] === '2"-PW-101-A1A' && dataOf(tbl).rows[2][2] === 'P-101' && dataOf(tbl).rows[2][3] === 'E-101', 'the table gives the line and the ends of each stream');
// change a size from the drawing: every piece of the line takes it, the table follows
log.length = 0;
await type('PIDPROC', '3', '2"-PW-101-A1A', '4');
const sizesOf = () => of('pidline').filter((e) => dataOf(e).seq === '101').map((e) => dataOf(e).size);
ok(sizesOf().every((s) => s === '4"') && sizesOf().length === 2 && log.some((l2) => /now 4/.test(l2)), 'PIDPROC, change a size: both pieces of line 101 are now 4"', JSON.stringify(sizesOf()) + log.join(' | '));
const t2 = of('pidtable').find((e) => dataOf(e).list === 'stream');
ok(dataOf(t2).rows[2][1] === '4"-PW-101-A1A', 'the stream table follows: the line number now reads 4"', JSON.stringify(dataOf(t2).rows[2]));
ok(Number(dataOf(t2).rows[2][9]) > 0 && Number(dataOf(t2).rows[2][9]) < 1.5, 'the table shows the new velocity (under 1.5 m/s in a 4 in line)', dataOf(t2).rows[2][9]);
ok(doc.undoStack.length > u0, 'each step is on the undo stack');
// control lists
log.length = 0; await type('PIDPROC', '4');
ok(log.some((l2) => /tags, \d+ I\/O channels/.test(l2) || /\d+ tags/.test(l2)) && log.some((l2) => /Channels: 1 analog in, 1 analog out/.test(l2)), 'PIDPROC, control lists: tags, channels (FT is an analog in, FV an analog out)', log.join(' | '));
// drawn loop sheets
{ const n0 = doc.count(); log.length = 0; await type('PIDPROC', '5', '0,-60');
  ok(log.some((l2) => /loop sheets drawn/.test(l2)) && doc.count() > n0 + 8 && of('pidtable').length >= 1 && doc.all().some((e) => e.type === 'text' && /^Loop F101/.test(e.s || '')), 'PIDPROC, loop sheets: a balloon diagram for the loops with two or more devices', log.join(' | ')); }
const csvx = started.exporters().find((e) => /Control system lists \(CSV\)/.test(e.label)); const csv = await csvx.write(doc);
ok(/I\/O list/.test(csv) && /FT-101/.test(csv) && /FV-101/.test(csv) && csv.includes('AI') && csv.includes('AO'), 'the control CSV has the I/O list with FT-101 and FV-101');
const xlsx = started.exporters().find((e) => /Control system lists \(workbook\)/.test(e.label)); const wb = await xlsx.write(doc);
ok(wb && (wb.byteLength || wb.length) > 1000, 'the control workbook is written');
ok(Cmd.lookup('PIDPROC') && Cmd.commandRegistry.owner('PIDPROC') === 'pid', 'PIDPROC is owned by the add-on and has help', Cmd.commandList().find((c) => c.name === 'PIDPROC')?.help);
void near;

// ---- the assistant tools through the add-on's hand-over (the same objects agents.js registers)
{
  const { processTools } = await load('process/tools.js');
  const study = await import(pathToFileURL(path.join(ROOT, 'lib/study/study.js')).href);
  const O = await load('process/optimise.js');
  ok(!!globalThis.ccProcessHost, 'the add-on offers the process hand-over while it is on');
  const host = globalThis.ccProcessHost;
  // a fresh drawing in the same harness: millimetres
  const H2 = await setup({ enable: false, units: 'millimeters' }).catch(() => null);
  void H2;
  const env = { ...host, studyLib: study, jobs: O.createJobs(study), writeFile: async (n, text) => ({ path: n, bytes: text.length }) };
  const tools = Object.fromEntries(processTools(env).map((t2) => [t2.name, t2]));
  const before = doc.count();
  const SPEC = { name: 'Methanol', components: ['methanol', 'water'], feed: { massFlows: { methanol: 1, water: 1 }, T: 293.15, P: 2e5 }, steps: [{ type: 'pump', p: { Pout: 6e5 } }, { type: 'heater', p: { Tout: 360 } }, { type: 'flash', p: { P: 2e5, T: 350 } }], scale: { stream: 'S5', comp: 'methanol', tPerDay: 50 } };
  const u1 = doc.undoStack.length;
  const r = await tools.plant_add.run({ spec: SPEC });
  ok(r.applied.pidItems >= 9 && doc.count() > before, 'plant_add draws the P&ID through the add-on', JSON.stringify(r.applied));
  ok(doc.undoStack.length === u1 + 2 || doc.undoStack.length === u1 + 1 || doc.undoStack.length > u1, 'its changes are on the undo stack (the dispatcher squashes them into one step)');
  const sy = of('pidsym').map((e) => dataOf(e).tag);
  ok(['P-101', 'E-101', 'V-101', 'FT-101', 'FIC-101', 'FV-101'].every((x) => sy.includes(x)), 'the tags are on the drawing: ' + sy.join(), sy.join());
  const ln = of('pidline').filter((e) => dataOf(e).style === 'process');
  ok(ln.length >= 4 && ln.every((e) => e.layer === 'PID-LINE-PROC'), 'process lines drawn on their layer');
  const m = host.model();
  ok(m && m.layout.equipment.length === 3 && m.links['P-101'].tag === 'P-101', 'the model is saved in the drawing, with the 3D layout for BimCraft');
  // the drawing as drawn agrees with the model: no link problems (everything the build made is connected)
  const chk = tools.process_check.run({});
  ok(chk.counts.errors === 0, 'process_check on the built drawing: no errors', JSON.stringify(chk.problems.filter((p) => p.severity === 'error')));
  const list = tools.streams_list.run({});
  ok(list.total === 5 && list.rows[1][1].includes('PL-102'), 'streams_list reads the model');
  const ce = await tools.controls_export.run({});
  ok(ce.io.counts.AI >= 1 && ce.io.counts.AO >= 1, 'controls_export: FT-101 is an analog in and FV-101 an analog out', JSON.stringify(ce.io));
  const sz = await tools.line_set.run({ stream: 'S2', size: '4' });
  ok(sz.size === '4' && of('pidline').filter((e) => dataOf(e).seq === '102' && dataOf(e).svc === 'PL').every((e) => dataOf(e).size === '4"'), 'line_set carries the new size to the lines on the drawing', JSON.stringify(sz) + JSON.stringify(of('pidline').map((e) => dataOf(e).size)));
  // CH.30: the HAZOP copilot's tools work through the same hand-over; rows are suggestions saved with the drawing (hidden pidsafe pieces)
  const ST = await load('process/safety/tools.js');
  const st = Object.fromEntries(ST.safetyTools({ safety: () => host.safety(), setSafety: (b) => host.setSafety(b), pid: () => host.pid(), today: () => '2026-10-29', thresholdPacks: () => [], writeFile: async (n, text) => ({ path: n, bytes: text.length }) }).map((t2) => [t2.name, t2]));
  const nl = st.hazop_nodes_list.run({});
  ok(nl.total >= 1 && nl.nodes[0].id, 'hazop_nodes_list: nodes are proposed from the P&ID that is drawn', JSON.stringify(nl.nodes.map((n) => n.name)));
  ok(of('pidsafe').length === 0, 'proposed nodes are not saved until something is written');
  const u2 = doc.undoStack.length;
  const ar = await st.hazop_rows_add.run({ rows: [{ node: nl.nodes[0].id, guideword: 'more', parameter: 'flow', causes: ['control valve fails open'], consequences: ['pump runs out on its curve'] }] });
  ok(ar.added === 1 && of('pidsafe').length >= 1 && doc.undoStack.length > u2, 'hazop_rows_add: a row is written and saved in the drawing', JSON.stringify(ar).slice(0, 200));
  const rl = st.hazop_rows_list.run({});
  ok(rl.rows.length === 1 && rl.rows[0].status === 'suggested' && /control valve/.test(JSON.stringify(rl.rows[0])), 'the row reads back from the drawing as a suggestion, not accepted', JSON.stringify(rl.rows).slice(0, 200));
  const chk2 = st.hazop_check.run({});
  ok(Array.isArray(chk2.problems), 'hazop_check reports Problems for the worksheet');
  // the team accepts: PIDHAZOP lists the suggested rows and records a named person's decision (the assistant has no tool for this)
  await H.type('PIDHAZOP', 'a', 'all', 'A. Engineer');
  const after = st.hazop_rows_list.run({});
  ok(after.rows[0].status === 'accepted' && /A\. Engineer/.test(JSON.stringify(after.rows[0])) && of('pidsafe').length >= 1, 'PIDHAZOP: the named person accepts the suggested row, saved with the drawing', JSON.stringify(after.rows[0]).slice(0, 200));
  await H.type('PIDHAZOP', '');
  ok(!ST.safetyTools({ safety: () => null }).some((x) => /accept|reject/.test(x.name)), 'no assistant tool accepts or rejects a HAZOP row');
}

export { H, mk };
