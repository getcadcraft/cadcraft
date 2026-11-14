/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the run along a wall (which end, which way), the plan and front drawings (where the box, plinth, fronts and
// door swings land), and the job: parts of several cabinets → a nest per material → the cut order → labels in that order → one DXF.
const { ok, section, near, mine } = globalThis.__cabTest;
const M = await mine('lib/model.js');
const D = await mine('lib/draw.js');
const J = await mine('lib/job.js');
const CL = await mine('lib/cutlist/cutlist.js');
const N = await mine('lib/nest/nest.js');

const R = M.RULES.mm;
section('A run along a wall');
{
  const r1 = D.runPlace({ x: 0, y: 0 }, { x: 3000, y: 0 }, { x: 100, y: 500 });
  ok(r1.x === 0 && r1.y === 0 && near(r1.ang, 0) && r1.len === 3000, 'room above a wall drawn left to right: start at its left end, along +x');
  const r2 = D.runPlace({ x: 0, y: 0 }, { x: 3000, y: 0 }, { x: 100, y: -500 });
  ok(r2.x === 3000 && r2.y === 0 && near(Math.abs(r2.ang), Math.PI), 'room below: start at the other end (on your left as you face the wall), along −x; never mirrored');
  const r3 = D.runPlace({ x: 0, y: 0 }, { x: 0, y: 2000 }, { x: -300, y: 50 });
  ok(near(r3.ang, Math.PI / 2) && r3.x === 0 && r3.y === 0, 'a wall up the page with the room to its left: along +y');
  const a = D.along(r1, { x: 600, y: 10 });
  ok(a.s === 600 && a.off === 10, 'along: 600 along, 10 out into the room');
  ok(D.runPlace({ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 0 }) === null, 'a wall line of no length: none');
}

section('Plan and front view');
{
  const cab = M.cleanCabinet({ no: 'B01', type: 'base' }, R);
  const pl = D.planEnts(cab, R, 1);
  const box = pl[0];
  ok(box.type === 'poly' && box.closed && box.pts[2].x === 600 && box.pts[2].y === 560, 'plan: the carcass 600 × 560 from the wall');
  ok(pl[1].type === 'poly' && pl[1].pts[0].x === 1.5 && pl[1].pts[0].y === 560 && pl[1].pts[2].x === 598.5 && pl[1].pts[2].y === 578, 'plan: the door in front, 597 wide, 18 thick');
  ok(pl.some((e) => e.type === 'text' && e.s === 'B01') && pl.some((e) => e.type === 'text' && e.s === '600'), 'plan: its number and width');
  const wall = D.planEnts(M.cleanCabinet({ type: 'wall' }, R), R, 1);
  ok(wall.filter((e) => e.type === 'line').length === 2, 'plan: a wall cabinet is crossed');
  const pm = D.planEnts(cab, R, 0.001);
  ok(near(pm[0].pts[2].x, 0.6) && near(pm[0].pts[2].y, 0.56), 'in a metre drawing (k = 0.001) the same cabinet is 0.6 × 0.56');
  const pair = D.planEnts(M.cleanCabinet({ type: 'base', w: 800 }, R), R, 1);
  ok(pair.filter((e) => e.type === 'poly').length === 3, 'plan: a pair of doors = two fronts');

  const el = D.elevEnts([{ cab, R, x: 0 }, { cab: M.cleanCabinet({ no: 'W01', type: 'wall' }, R), R, x: 0 }, { cab: M.cleanCabinet({ no: 'D01', type: 'drawers' }, R), R, x: 600 }], 1);
  const rects = el.filter((e) => e.type === 'poly').map((e) => [e.pts[0].x, e.pts[0].y, e.pts[2].x - e.pts[0].x, e.pts[2].y - e.pts[0].y].map((v) => Math.round(v * 1000) / 1000).join(','));
  ok(rects.includes('0,150,600,720') && rects.includes('0,0,600,150') && rects.includes('1.5,151.5,597,717'), 'front view: box above the plinth, the door 1.5 in', rects.join(' | '));
  ok(rects.includes('0,1400,600,720') && rects.includes('1.5,1401.5,597,717'), 'front view: the wall cabinet hangs at 1400');
  ok(rects.filter((s) => /^601\.5,/.test(s) && s.endsWith(',597,237')).length === 3, 'front view: three drawer fronts on the drawer base at 600');
  const swing = el.filter((e) => e.type === 'line' && e.x2 === 1.5 && near(e.y2, 151.5 + 717 / 2));
  ok(swing.length === 2 || el.some((e) => e.type === 'line' && e.x1 === 1.5 && near(e.y1, 510)), 'a left-hinged door: the swing lines meet on its left edge at mid-height');
  ok(el.some((e) => e.type === 'text' && e.s === 'D01'), 'each cabinet\'s number under it');
}

section('The job: parts → nest → cut order → labels → DXF');
{
  const cabs = [M.cleanCabinet({ no: 'B01', type: 'base' }, R), M.cleanCabinet({ no: 'B02', type: 'base', w: 800 }, R), M.cleanCabinet({ no: 'W01', type: 'wall' }, R)].map((cab) => ({ cab, R }));
  const word = (k, v) => ({ 'part.side': 'Side', 'mat.carcass': 'Carcass {t} {unit}', 'band.edge': 'Edge {t} {unit}' })[k]?.replace(/\{(\w+)\}/g, (m, x) => v[x]) || k;
  const parts = J.jobParts(cabs, { word });
  const list = CL.cutList(parts);
  ok(parts.length === 8 + 8 + 6 && parts[0].name === 'Side' && parts[0].nameKey === 'part.side', 'the parts of three cabinets, names translated, keys kept', String(parts.length));
  ok(parts[0].material === 'Carcass 18 mm' && parts[0].band.l1.code === 'Edge 1 mm' && parts.find((p) => p.role === 'door').band.l1.code === 'Edge 2 mm', 'default materials and banding written with their thickness');
  const own = J.jobParts([{ cab: cabs[0].cab, R: M.rulesFor('mm', { carcass: 'Birch ply 18' }) }], { word });
  ok(own[0].material === 'Birch ply 18', 'a shop\'s own material name is kept as typed');
  const sheet = { w: 2440, h: 1220, margin: 10 };
  const job = J.nestJob(parts, { sheet, spacing: 8, tries: 3, timeLimit: 20000 });
  ok(!job.unplaced.length && job.seq.length === list.pieces, 'everything nests; the cut order has every piece', job.seq.length + ' of ' + list.pieces);
  ok(job.mats.length === 3 && job.mats.every((m) => N.checkNest(m.result, sheet, { spacing: 8 }).length === 0), 'one nest per material (carcass, back, fronts), none overlapping', job.mats.map((m) => m.key).join(';'));
  ok(job.seq.every((s, i) => i === 0 || s.sheet >= job.seq[i - 1].sheet) && job.seq.at(-1).sheet === job.sheets, 'sheets numbered on from one material to the next', JSON.stringify(job.efficiency));
  const labels = J.jobLabels(parts, job, { fmt: (v) => String(v) });
  ok(labels.length === list.pieces && labels.map((l) => l.id).join() === job.seq.map((s) => s.pieceId).join(), 'labels in cutting order, one a piece');
  ok(labels[0].nest === 'Sheet 1, no. 1' && labels.at(-1).nest === `Sheet ${job.seq.at(-1).sheet}, no. ${job.seq.at(-1).n}`, 'each label says its sheet and number', labels[0].nest + ' … ' + labels.at(-1).nest);
  const plain = J.jobLabels(parts, null);
  ok(plain.length === list.pieces && plain[0].id === 'B01-01.1' && plain[0].nest === '', 'without a nest: cut-list order, no sheet line');
  const dxf = J.jobDxf(job, sheet, { units: 'mm' });
  ok(/^0\r?\nSECTION/.test(dxf) && /EOF\s*$/.test(dxf), 'the DXF is one file, start to end');
  ok(dxf.includes('B01-01.1 (') && dxf.includes('W01-06'), 'parts on the sheets are named by piece id and cut number');
  const back = N.readOutlines(dxf, { skipLayers: ['SHEET', 'LABELS'] });
  ok(back.parts.length === list.pieces, 'read back by lib/nest\'s own DXF reader: one outline a piece', back.parts.length + ' of ' + list.pieces);
}
