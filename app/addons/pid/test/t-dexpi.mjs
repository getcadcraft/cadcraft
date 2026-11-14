/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 IND.2 / IND.8): DEXPI P&ID import and export, and the stream-table import. The published DEXPI test cases
// (DEXPI/TestCases, read as DATA from testfiles/dexpi-corpus, outside git) must read, write and read again to the same model; a drawing exports
// to DEXPI and comes back with the same tags, line numbers and connections; hostile XML is refused; a stream table in CSV and in XLSX is read.
const { ok, section, near, load, APP, ROOT } = globalThis.__pidTest;
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const LIB = (f) => import(pathToFileURL(path.join(APP, 'addons/pid/lib', f)).href);
const D = await LIB('interop/dexpi.js'), X = await LIB('interop/xml.js'), B = await LIB('interop/bring.js'), T = await LIB('interop/tabular.js'), S = await LIB('interop/streamtable.js');
const DP = await LIB('dexpi-pid.js'), MD = await LIB('model.js'), XL = await LIB('xlsx.js'), SY = await LIB('symbols.js');
const { setup } = await import(pathToFileURL(path.join(APP, 'addons/pid/test/harness.mjs')).href);

section('DEXPI: the published test cases read, write and read again (IND.2)');
const FIXTURES = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'fixtures/dexpi');   // two small samples shipped with the add-on (owner 2026-10-29, NOTICE.md)
const CORPUS = fs.existsSync(path.resolve(ROOT, '../testfiles/dexpi-corpus')) ? path.resolve(ROOT, '../testfiles/dexpi-corpus') : FIXTURES;
const files = fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((f) => /\.xml$/i.test(f)) : [];
if (!files.length) console.log('  (no corpus at ' + CORPUS + ': the published samples are skipped; fetch DEXPI/TestCases into it)');
for (const f of files) {
  const text = fs.readFileSync(path.join(CORPUS, f), 'utf8');
  const m = D.readDexpi(text);
  const out = D.writeDexpi(m, { date: new Date(0) });
  const m2 = D.readDexpi(out);
  ok(JSON.stringify(m.items) === JSON.stringify(m2.items), f + ': ' + D.summary(m).items + ' plant items survive write → read unchanged');
  ok(JSON.stringify(m.info.units) === JSON.stringify(m2.info.units) && m2.info.schema === m.info.schema, f + ': units and schema kept');
  const r = DP.fromDexpi(m, { symL: 4, perMm: 1 });
  ok(r.symbols.length + r.lines.length > 0 || D.flatItems(m).every((i) => i.kind !== 'PipingNetworkSystem' && i.kind !== 'Equipment'), f + ': something to place (' + r.symbols.length + ' symbols, ' + r.lines.length + ' lines)');
  const b = await B.bringOver(new TextEncoder().encode(text), f);
  ok(b.kind === 'dexpi' && b.ok && b.summary.length >= 2, f + ': the bring-over report names it');
}
if (files.includes('C05V01-SAG.EX01.XML')) {
  const m = D.readDexpi(fs.readFileSync(path.join(CORPUS, 'C05V01-SAG.EX01.XML'), 'utf8'));
  const r = DP.fromDexpi(m, { symL: 4, perMm: 1 });
  const bySym = {}; for (const s of r.symbols) bySym[s.data.sym] = (bySym[s.data.sym] || 0) + 1;
  ok(r.lines.length === 5, 'C05: five piping segments with a centre line become five lines', String(r.lines.length));
  ok(bySym.globe === 2 && bySym.ball === 1, 'C05: two globe valves and a ball valve', JSON.stringify(bySym));
  ok(r.symbols.find((s) => s.data.sym === 'ball' && s.data.act === 'diaphragm'), 'C05: the actuator inside the ball valve is the valve\'s actuator, not a symbol');
  ok(r.symbols.filter((s) => SY.SYMBOLS[s.data.sym].group === 'equip').length === 2 && bySym['vessel-v'] === 1 && bySym['pump-cf'] === 1 && bySym['inst-field'] === 4, 'C05: a vessel, a pump and four instruments', JSON.stringify(bySym));
  ok(r.lines.every((l) => l.data.pts.length >= 2) && r.lines.some((l) => l.data.lnOverride === 'Q003'), 'C05: line tags carried over (Q003)');
}
if (files.includes('C03V01-ING.EX01.xml')) {
  const m = D.readDexpi(fs.readFileSync(path.join(CORPUS, 'C03V01-ING.EX01.xml'), 'utf8'));
  const r = DP.fromDexpi(m, { symL: 4, perMm: 1 });
  ok(!r.problems.some((p) => p.severity === 'error'), 'C03: no error problems');
  ok(!r.problems.some((p) => p.code === 'dexpi.class.unmapped' && /PipeTee/.test(p.text)), 'C03: a tee is a join, not a missing symbol');
}

section('DEXPI: a drawing goes out and comes back');
const prevA = await import('./t-addon.mjs');   // its add-on instance is still on: switch it off so this one can register the same commands
await prevA.started.loader.setEnabled('pid', false);
const H = await setup({ enable: true });
const { doc, started, info } = H;
globalThis.__dexpiCleanup = async () => { await H.started.loader.setEnabled('pid', false); await prevA.started.loader.setEnabled('pid', true); };
const mk = (kind, data, x = 0, y = 0, layer = 'PID-EQUIP') => { let id; doc.change('test', () => { id = doc.add({ ...started.kinds.create('pid', kind, data, { layer }), x, y, rot: 0 }).id; }); return id; };
mk('pidsym', { sym: 'pump-cf', l: 4, tag: 'P-101', desc: 'Feed pump' }, 0, 0);
mk('pidsym', { sym: 'exch-shell', l: 4, tag: 'E-101' }, 20, 1);
mk('pidsym', { sym: 'inst-field', l: 2, tag: 'FT-101' }, 8, 10);
mk('pidsym', { sym: 'globe', l: 2, tag: 'FV-101', act: 'diaphragm' }, 14, 1, 'PID-VALVE');
const ln = (pts, extra = {}) => mk('pidline', { pts, svc: 'PW', size: '2"', seq: '101', spec: 'A1A', k: 4, th: 0.8, arrow: 'end', style: 'process', ...extra }, 0, 0, 'PID-LINE-PROC');
ln([[2, 1], [13, 1]]); ln([[15, 1], [18.8, 1]]); ln([[21.2, 1], [30, 1]], { seq: '102', size: '3"' });
const items = [...doc.model].map(([id, e]) => ({ uid: String(id), e, kind: info(e)?.kind, data: info(e)?.data })).filter((x) => x.kind === 'pidsym' || x.kind === 'pidline');
const model = MD.scan(items, {});
const dx = DP.toDexpi(model, { mmPerUnit: 25.4, name: 'Test plant' });
const xml = D.writeDexpi(dx, { date: new Date(0) });
const back = D.readDexpi(xml);
const sum = D.summary(back);
ok(sum.kinds.Equipment >= 2 && sum.kinds.PipingNetworkSystem === 2 && sum.kinds.PipingNetworkSegment === 3 && sum.kinds.ProcessInstrumentationFunction === 1, 'export: equipment, two line numbers, three segments, one instrument', JSON.stringify(sum.kinds));
ok(D.byKind(back, 'Nozzle').length >= 2, 'export: the equipment connections are nozzles');
ok(D.flatItems(back).filter((i) => i.cls === 'GlobeValve').length === 1 && D.flatItems(back).some((i) => i.kind === 'Equipment' && i.cls === 'Diaphragm'), 'export: the globe valve carries its diaphragm actuator');
ok(back.items.filter((i) => i.kind === 'PipingNetworkSystem').map((i) => i.tag).sort().join() === '2"-PW-101-A1A,2"-PW-102-A1A' || back.items.filter((i) => i.kind === 'PipingNetworkSystem').map((i) => i.tag).sort().join() === '2"-PW-101-A1A,3"-PW-102-A1A', 'export: line numbers are the system tags', back.items.filter((i) => i.kind === 'PipingNetworkSystem').map((i) => i.tag).join());
const conns = D.flatItems(back).reduce((a, i) => a + i.conns.length, 0);
ok(conns >= 4, 'export: the lines are connected to nozzles and the valve (' + conns + ' connections)');
ok(back.problems.length === 0, 'export: the file has no dangling connection', JSON.stringify(back.problems));
const re = DP.fromDexpi(back, { symL: 4, perMm: 1 / 25.4 });
const tags = re.symbols.map((s) => s.data.tag).sort().join();
ok(tags === 'E-101,FT-101,FV-101,P-101', 'import: the same tags come back', tags);
ok(re.lines.length === 3 && re.lines.map((l) => l.data.lnOverride).sort().join() === dx.items.filter((i) => i.kind === 'PipingNetworkSystem').flatMap((s) => s.items.map(() => s.tag)).sort().join(), 'import: three lines with their line numbers');
const pump = re.symbols.find((s) => s.data.tag === 'P-101'), ex = re.symbols.find((s) => s.data.tag === 'E-101');
near(pump.x, 0, 0.01, 'import: pump position back in drawing units'); near(ex.x, 20, 0.01, 'import: exchanger position back in drawing units');
ok(re.symbols.find((s) => s.data.tag === 'FV-101')?.data.act === 'diaphragm', 'import: the actuator comes back');

section('DEXPI: through the add-on\'s own IMPORT and EXPORT');
const exporter = started.exporters().find((e) => e.id.endsWith('pid-dexpi'));
ok(exporter && exporter.extension === '.xml', 'the DEXPI exporter is registered');
const text = await exporter.write(doc);
ok(/<PlantModel/.test(text) && D.summary(D.readDexpi(text)).kinds.PipingNetworkSegment === 3, 'EXPORT writes the same diagram');
const importer = started.importers().find((e) => e.id.endsWith('pid-dexpi'));
ok(!!importer, 'the DEXPI importer is registered');
const AP = await load('addons/cadcraft-api.js');
const mineIds = () => [...doc.model].filter(([, e]) => ['pidsym', 'pidline'].includes(started.kinds.info(e)?.kind)).map(([id]) => id);
const before = mineIds().length;
doc.change('clear', () => { for (const id of mineIds()) doc.remove(id); });
ok(mineIds().length === 0, 'the drawing is emptied');
const got = await importer.read({ name: 'plan.xml', arrayBuffer: async () => new TextEncoder().encode(text).buffer });
const n = AP.addImported(doc, got, 'IMPORT');
ok(n === before && mineIds().length === before, 'IMPORT puts back every line and symbol (' + before + ') as one undo step', n + ' of ' + before);
const re2 = MD.scan([...doc.model].map(([id, e]) => ({ uid: String(id), e, kind: started.kinds.info(e)?.kind, data: started.kinds.info(e)?.data })).filter((x) => x.kind === 'pidsym' || x.kind === 'pidline'), {});
ok(re2.symbols.map((s) => s.tag).sort().join() === 'E-101,FT-101,FV-101,P-101' && re2.lines.length === 3, 'the imported diagram scans as the same plant');
const links = [...re2.links.values()].reduce((a, v) => a + v.length, 0);
ok(links >= 6, 'the imported lines meet the symbols again (' + links + ' joins)');
doc.undo();
ok(mineIds().length === 0, 'one undo removes the whole import');

section('Hostile XML and damaged files');
const bad = (src, code) => { try { X.parseXml(src); return 'accepted'; } catch (e) { return e.code; } };
ok(bad('<?xml version="1.0"?><!DOCTYPE x [<!ENTITY a "b">]><x>&a;</x>') === 'doctype', 'a DOCTYPE with an entity is refused');
ok(bad('<x>&unknown;</x>') === 'entity', 'an undeclared entity is refused');
ok(bad('<x>' .concat('<a>'.repeat(300)) ) === 'too_deep', 'very deep nesting is refused');
ok(bad('<x a="1" a="2"/>') === 'dup_attr', 'a repeated attribute is refused');
ok(bad('<x><y></x>') === 'mismatch', 'a mismatched tag is refused');
ok(bad('<x>&#0;</x>') === 'bad_ref', 'a control character reference is refused');
let nd = null; try { D.readDexpi('<Other/>'); } catch (e) { nd = e.code; }
ok(nd === 'not_dexpi', 'an XML file that is not a plant model says so');
const rb = await B.bringOver(new TextEncoder().encode('<PlantModel><Equipment ID="a" ComponentClass="Tank"'), 'cut.xml');
ok(!rb.ok && rb.problems[0].severity === 'error', 'a cut-off file is an error problem, not a crash', rb.summary.join(' '));
const dupm = D.readDexpi('<PlantModel><Equipment ID="a" ComponentClass="Tank"/><Equipment ID="a" ComponentClass="Tank"/><PipingNetworkSystem ID="s"><PipingNetworkSegment ID="g"><Connection FromID="zz" ToID="a"/></PipingNetworkSegment></PipingNetworkSystem></PlantModel>');
ok(dupm.problems.map((p) => p.code).sort().join() === 'dexpi.conn.dangling,dexpi.id.dup', 'a repeated ID and a connection to nothing are one problem each', dupm.problems.map((p) => p.code).join());

section('Stream tables: CSV and XLSX (IND.8)');
const csvCols = 'Stream,,1,2,3\n"Temperature (°C)",,25,80.5,120\nPressure (bar),,1.0,"5,5",10\nMass Flow (kg/h),,1000,2000,3000\nVapor Fraction,,0,0.1,1\nComposition (mole fraction)\nWater,,0.5,0.4,0.3\nEthanol,,0.5,0.6,0.7\n';
const r1 = await B.bringOver(new TextEncoder().encode('﻿' + csvCols), 'balance.csv');
ok(r1.kind === 'stream-table' && r1.data.orientation === 'columns' && r1.data.streams.length === 3, 'streams in columns found', JSON.stringify(r1.summary));
const s2 = r1.data.streams[1];
near(s2.T, 353.65, 1e-6, 'temperature 80.5 °C → K'); near(s2.P, 550000, 1e-6, 'pressure "5,5" bar (decimal comma) → Pa'); near(s2.mass, 2000 / 3600, 1e-9, 'mass flow kg/h → kg/s');
ok(s2.comp.Water === 0.4 && s2.comp.Ethanol === 0.6 && r1.data.basis === 'mole', 'composition by mole fraction');
const csvRows = 'Stream;Temperature [K];Pressure [barg];Mass flow, kg/s;Water;Ethanol\nS1;300;2;1.5;0.5;0.5\nS2;350;3;2;0.9;0.2\n';
const r2 = await B.bringOver(new TextEncoder().encode(csvRows), 'streams.csv');
ok(r2.data.orientation === 'rows' && r2.data.streams.length === 2, 'streams in rows found (semicolon CSV)');
near(r2.data.streams[0].P, 301325, 1e-6, 'gauge pressure + one atmosphere');
ok(r2.problems.some((p) => p.code === 'streams.pressure.gauge') && r2.problems.some((p) => p.code === 'streams.fractions.sum'), 'gauge pressure noted; S2 fractions (sum 1.1) warned once', r2.problems.map((p) => p.code).join());
ok(r2.problems.every((p) => p.about[0].id === 'streams.csv' && p.source.kind === 'import'), 'problems carry the file and the import kind');
const feed = S.feedOf(r2.data.streams[0], { basis: 'mass' });
near(feed.massFlows.Water, 0.75, 1e-9, 'a feed for the process engine: component mass flows');
let xr = null;
try { const { writeXlsx } = XL; const lists = [{ name: 'Balance', columns: ['Stream', '', '1', '2', '3'], rows: csvCols.trim().split('\n').slice(1).map((l) => T.readCsv(l + '\n').rows[0]) }]; const LS = await LIB('lists.js'); const bytes = await writeXlsx(LS.toSheets(lists), {}); xr = await B.bringOver(bytes, 'balance.xlsx'); } catch (e) { console.log('  xlsx round trip error', e.message); }
ok(xr && xr.kind === 'stream-table' && xr.data.streams.length === 3 && Math.abs(xr.data.streams[2].T - 393.15) < 1e-6, 'the same table read from an XLSX workbook', xr && xr.summary.join(' '));
ok(r1.guides.includes('process-simulator'), 'the report points to the guide for this kind of tool');
const none = await B.bringOver(new TextEncoder().encode('a,b\n1,2\n'), 'plain.csv');
ok(none.kind === 'csv' || (none.problems[0] && none.problems[0].code === 'streams.notfound'), 'a CSV that is not a stream table says so', none.problems.map((p) => p.code).join());
const bomb = new Uint8Array(30); bomb[0] = 0x50; bomb[1] = 0x4b;
const bz = await B.bringOver(bomb, 'x.xlsx');
ok(!bz.ok && bz.problems[0].severity === 'error', 'a damaged workbook is an error problem');

await globalThis.__dexpiCleanup();   // the next files go on with t-addon's add-on instance
