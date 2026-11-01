/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 chem-draw_PART_4): the round-4 drawing commands on the process drawing of t-process.mjs. PFD (CH.2), HEN grid (CH.22), HAZOP node drawn and saved (CH.14) with
// its XLSX / PDF / MarkupCraft files, live labels (CH.27, XE.9), tube sheet (CH.8), plume (CH.19), and the running totals source (CH.21).
const { ok, section, EN } = globalThis.__pidTest;
const { H } = await import('./t-process.mjs');
const { doc, log, type, started } = H;
const count = (layer) => [...doc.model.values()].filter((e) => e.layer === layer).length;
section('Round 4 drawing commands (CH.2, 5, 8, 14, 19, 21, 22, 27, XE.9)');

{ const n0 = doc.undoStack.length; log.length = 0;
  await type('PIDPFD', '0,-120');
  ok(log.some((l) => /Process flow diagram of 3 units/.test(l)), 'PIDPFD: the diagram of the 2 units is announced', log.join(' | '));
  ok(count('PFD-UNIT') === 3 && count('PFD-STREAM') >= 3 && count('PFD-TEXT') >= 6, 'PIDPFD: three unit shapes, stream arrows and labels on the PFD layers', `${count('PFD-UNIT')} ${count('PFD-STREAM')} ${count('PFD-TEXT')}`);
  ok(doc.undoStack.length === n0 + 1, 'PIDPFD: the whole command is one undo step', String(doc.undoStack.length - n0));
  ok(count('PID-LIST') >= 1, 'PIDPFD: the stream table sits under the diagram'); }

{ log.length = 0; const n0 = doc.undoStack.length;
  await type('PIDHEN', '10', '[{"Ts":20,"Tt":135,"CP":2},{"Ts":170,"Tt":60,"CP":3},{"Ts":80,"Tt":140,"CP":4},{"Ts":150,"Tt":30,"CP":1.5}]', '0,-300');
  ok(log.some((l) => /4 matches, 1 heaters, 1 coolers, 6 units against a minimum of 7/.test(l)), 'PIDHEN: the sample streams give 4 matches, a heater and a cooler', log.join(' | '));
  ok(count('HEN-STREAM') > 8 && count('HEN-MATCH') >= 8 && count('HEN-UTIL') >= 2 && count('HEN-PINCH') === 2 && doc.undoStack.length === n0 + 1, 'PIDHEN: streams, matches, utilities and the pinch line drawn in one undo step', [count('HEN-STREAM'), count('HEN-MATCH'), count('HEN-UTIL'), count('HEN-PINCH'), doc.undoStack.length - n0].join()); }

{ log.length = 0;
  await type('PIDNODE', '-5,-5', '35,15', 'Feed section', 'Pump to exchanger');
  ok(log.some((l) => /Node N\d Feed section: 5 tagged items/.test(l)), 'PIDNODE: the node takes the tags inside its boundary', log.join(' | '));
  ok(count('HAZOP-NODE') === 2, 'PIDNODE: the boundary and its label are drawn');
  const b = globalThis.ccProcessHost.safety(); const n = b.hazop.nodes.find((x) => x.name === 'Feed section');
  ok(n && n.equipment.includes('P-101') && n.equipment.includes('E-101') && n.region.length === 4, 'PIDNODE: equipment and region kept in the saved safety block', JSON.stringify(n)); }

{ const x = started.exporters().find((e) => e.id.endsWith('pid-hazop-xlsx')), p = started.exporters().find((e) => e.id.endsWith('pid-hazop-pdf')), m = started.exporters().find((e) => e.id.endsWith('pid-hazop-markers'));
  ok(x && p && m, 'the HAZOP exports are offered');
  const xb = await x.write(doc), pb = await p.write(doc), mj = JSON.parse(await m.write(doc));
  ok(xb[0] === 0x50 && xb[1] === 0x4b, 'HAZOP XLSX is a zip workbook');
  ok(String.fromCharCode(...pb.slice(0, 5)) === '%PDF-' && String.fromCharCode(...pb.slice(-6)).includes('%%EOF'), 'HAZOP PDF has a header and an end marker');
  ok(mj.format === 'cadcraft-hazop-markers' && mj.nodes.length === 1 && mj.nodes[0].box.length === 4, 'HAZOP markers JSON for MarkupCraft carries the node box'); }

{ log.length = 0; const iso = new Date().toISOString();
  await type('PIDLIVE', `tag,time,value,quality\\nFT-101,${iso},12.5,Good\\nXX-999,${iso},1,Good`);
  ok(log.some((l) => /1 value labels drawn, 0 tags without a symbol/.test(l)), 'PIDLIVE: a reading beside FT-101, a tag the sheet does not have is never asked for', log.join(' | '));
  ok(count('LIVE-OK') === 1, 'PIDLIVE: the label sits on the LIVE-OK layer');
  await type('PIDLIVE', `tag,time,value,quality\\nFT-101,${iso},12.5,Bad`);
  ok(count('LIVE-OK') === 0 && count('LIVE-BAD') === 1, 'PIDLIVE: a new reading replaces the old label'); }

{ log.length = 0; await type('PIDTUBESHEET', 'E-101', '0,-500');
  ok(count('HX-TUBES') + count('HX-TUBES-P1') + count('HX-TUBES-P2') > 20 && count('HX-SHELL') === 1, 'PIDTUBESHEET: the shell and the tubes are drawn', log.join(' | ')); }
{ log.length = 0; await type('PIDPLUME', '270', '0,-700');
  ok(log.some((l) => /Plume drawn/.test(l)) && count('AIR-STACK') === 1, 'PIDPLUME: contours, stack and wind arrow drawn', log.join(' | ')); }

{ let reads = 0; const seen = [];
  globalThis.ccTotals = { source: (s) => { seen.push(s); return { invalidate: () => { reads++; }, remove: () => {} }; } };
  const CALC = await import('../../../process/calc.js'); const r = await CALC.run('emissions');
  ok(!!r.figures && r.figures.measure === 'carbon' && r.figures.value > 1e6, 'emissions: the run gives the status bar a carbon figure per year', JSON.stringify(r.figures)); void reads; void seen; delete globalThis.ccTotals; }

const need = ['ui.pfd', 'ui.hen', 'ui.node', 'ui.live', 'ui.tubes', 'ui.plume', 'ui.loops', 'cmd.pidpfd.help', 'cmd.pidhen.help', 'cmd.pidnode.help', 'cmd.pidlive.help', 'cmd.pidtubesheet.help', 'cmd.pidplume.help', 'loops.lede', 'loops.run', 'node.done', 'live.needs'];
ok(need.every((k) => EN[k]), 'every new command and panel word is in the language file', need.filter((k) => !EN[k]).join());

{ // CH.14: the HAZOP node block is saved in DWG and DXF as the add-on's hidden objects and comes back whole
  const { Doc } = await globalThis.__pidTest.load('doc.js'), { saveDwg } = await globalThis.__pidTest.load('dwg-save.js'), { readDwg } = await globalThis.__pidTest.load('dwg/read.js'), { importDwg } = await globalThis.__pidTest.load('dwg-import.js');
  const { writeDxf, readDxf } = await globalThis.__pidTest.load('dxf.js');
  const safe = (d) => d.all().filter((e) => started.kinds.info(e)?.kind === 'pidsafe').map((e) => JSON.stringify(started.kinds.info(e).data)).sort();
  const want = safe(doc);
  ok(want.length >= 1, 'the drawing holds the safety block as hidden pieces', String(want.length));
  for (const [name, write, read] of [['DWG 2018', (d) => saveDwg(d, { version: '2018' }).bytes, (b) => importDwg(readDwg(b))], ['DXF R12', (d) => writeDxf(d).text, (b) => readDxf(b)]]) {
    const d2 = new Doc(); started.kinds.attach(d2); d2.load(read(write(doc)));
    ok(JSON.stringify(safe(d2)) === JSON.stringify(want), name + ': the HAZOP block (nodes and their regions) comes back whole', safe(d2).length + ' of ' + want.length);
    { const n = d2.all().filter((e) => e.layer === 'HAZOP-NODE'); ok(n.length === 2, name + ': the node boundary and its label come back as drawn', n.map((e) => e.type).join() + ' / layers ' + [...new Set(d2.all().map((e) => e.layer))].join()); }
  }
  started.kinds.attach(doc);
}
