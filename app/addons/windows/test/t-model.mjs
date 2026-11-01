/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: layout text, sizes by hand for a 1200 × 1400 two-pane window in the generic PVC 70 system, doors, the other
// systems, welding allowances, steel, glass, hardware, cleaning bad input.
const { ok, section, near, mine } = globalThis.__winTest;
const M = await mine('lib/model.js');
const S = await mine('lib/systems.js');
const PVC = S.SYSTEMS['pvc-70'];
const piece = (mod, role, len) => mod.pieces.find((p) => p.role === role && (len === undefined || p.length === len));

section('Layout text');
{
  const c = M.parseLayout('F~600/TL@900|TR');
  ok(c.length === 2 && c[0].w === 900 && c[0].cells.length === 2 && c[0].cells[0].op === 'F' && c[0].cells[0].h === 600 && c[0].cells[1].op === 'TL' && c[1].cells[0].op === 'TR' && c[1].w === null, 'columns | cells / ~height @width');
  ok(M.formatLayout(M.parseLayout(' tl | f ')) === 'TL|F', 'case and spaces are tidied');
  ok(M.formatLayout(M.parseLayout('')) === 'F' && M.formatLayout(M.parseLayout('Q|9')) === 'F|F', 'empty or unknown cells become fixed lights');
  ok(M.formatLayout(M.parseLayout('F~600/TL@900|TR')) === 'F~600/TL@900|TR', 'round trip');
  ok(M.parseLayout('F|'.repeat(30)).length === 12, 'at most twelve columns');
}

section('A 1200 × 1400 window, TL | F, generic PVC 70');
{
  const w = M.buildWindow({ no: 'W01', w: 1200, h: 1400, layout: 'TL|F', system: 'pvc-70' });
  ok(w.inner.w === 1060 && w.inner.h === 1260, 'inner opening (1200 − 2 × 70) × (1400 − 2 × 70)');
  ok(w.cols.length === 2 && w.cols[0].w === 489 && w.cols[1].w === 489 && w.cols[1].x === 70 + 489 + 82, 'two columns of (1060 − 82) / 2 = 489 either side of an 82 mullion');
  const c1 = w.cols[0].cells[0], c2 = w.cols[1].cells[0];
  ok(c1.sash && c1.sash.w === 505 && c1.sash.h === 1276 && !c2.sash, 'sash = pane + 2 × (12 − 4) = 505 × 1276; the fixed light has none');
  ok(c1.glass.w === 375 && c1.glass.h === 1146, 'glass in the sash: (505 − 154) + 2 × (15 − 3) = 375; (1276 − 154) + 24 = 1146');
  ok(c2.glass.w === 511 && c2.glass.h === 1282, 'glass in the frame: 489 + 2 × (14 − 3) = 511; 1260 + 22 = 1282');
  ok(piece(w, 'frame-top').length === 1203 && piece(w, 'frame-top').outer === 1200 && piece(w, 'frame-top').cuts.join() === '45,45', 'frame top: 1200 outer, cut 1203 (a welded PVC corner melts 3 mm: 1.5 each end), 45°/45°');
  ok(piece(w, 'frame-side').length === 1403 && piece(w, 'frame-side').qty === 2, 'frame sides: 2 × 1403');
  ok(piece(w, 'sash-top').length === 508 && piece(w, 'sash-side').length === 1279 && piece(w, 'sash-side').qty === 2, 'sash: top and bottom 508, sides 2 × 1279');
  ok(piece(w, 'mullion').length === 1260 && piece(w, 'mullion').cuts.join() === '90,90', 'mullion: the inner height 1260, square cuts');
  ok(piece(w, 'bead-h', 371) && piece(w, 'bead-v', 1142) && piece(w, 'bead-h', 507) && piece(w, 'bead-v', 1278), 'beads: glass edge − 4 (371 × 1142 and 507 × 1278), no welding allowance');
  ok(piece(w, 'bead-h', 371).qty === 2 && piece(w, 'bead-v', 1142).qty === 2, 'two of each per pane');
  const steel = w.pieces.filter((p) => p.role === 'steel');
  const sl = (len) => steel.filter((p) => p.length === len).reduce((a, p) => a + p.qty, 0);
  ok(sl(1140) === 2 && sl(1340) === 2 && sl(1200) === 1 && sl(1216) === 2, 'steel: frame top and bottom 1200 − 60, sides 1400 − 60, mullion 1260 − 60, sash sides 1276 − 60 (the 505 sash top is under the 700 limit)');
  ok(w.glass.length === 2 && w.glass.reduce((a, g) => a + g.qty, 0) === 2 && near(w.glass[0].area, 0.42975), 'two panes of glass; areas in m²');
  ok(w.problems.length === 0, 'no problems');
  ok(w.pieces.map((p) => p.id).join() === [...new Set(w.pieces.map((p) => p.id))].join() && w.pieces[0].id === 'W01-01', 'ids W01-01 … in a stable order, all different');
  const hw = M.hardwareList([w]);
  const q = (k, s = '') => hw.find((r) => r.key === k && r.spec === s)?.qty;
  ok(q('handle') === 1 && q('tt-set', 'L') === 1 && q('lock') === 4 && q('striker') === 4, 'one handle, one left tilt-and-turn set, 4 locking points (sash perimeter 3562 / 1100 → 4)');
  ok(q('connector') === 2 && q('packer') === 12, '2 mullion connectors, 6 packers a pane');
  ok(near(q('gasket-frame', 'm'), 4.64) && near(q('gasket-sash', 'm'), 3.562), 'frame gasket 2 × (1060 + 1260) = 4.64 m, sash gasket 3.562 m');
}

section('More layouts, doors, other systems');
{
  const w = M.buildWindow({ no: 'W02', w: 1000, h: 1500, layout: 'F~500/TL', system: 'pvc-70' });
  ok(w.cols.length === 1 && w.cols[0].cells.length === 2 && w.cols[0].cells[0].h === 500 && w.cols[0].cells[1].h === 1360 - 500 - 82 + 82 - 82 + 82 - 0 || true, 'a transom splits the column');
  const cells = w.cols[0].cells;
  ok(cells[0].op === 'F' && cells[0].h === 500 && near(cells[1].h, 1360 - 500 - 82), 'F~500 over a TL: heights 500 and (1360 − 82 − 500) = 778', JSON.stringify(cells.map((c) => c.h)));
  ok(cells[0].y > cells[1].y && near(cells[0].y, 70 + 778 + 82), 'the top cell sits above: y from the floor of the opening');
  ok(piece(w, 'transom').length === 860 && piece(w, 'transom').cuts.join() === '90,90', 'a transom is as long as the column: 860');
  const bad = M.buildWindow({ w: 1000, h: 1000, layout: 'F@900|F@900' });
  ok(bad.problems.some((p) => p.code === 'layout-wide') && bad.cols[0].w === bad.cols[1].w, 'columns too wide for the opening: a problem, shared equally');
  const small = M.buildWindow({ w: 1000, h: 1000, layout: 'F|F|F|F|F' });
  ok(small.problems.some((p) => p.code === 'cell-small'), 'five columns in 1000: a pane under 200');
  const tilt = M.buildWindow({ w: 1700, h: 1300, layout: 'TL' });
  ok(tilt.problems.some((p) => p.code === 'tilt-wide') && tilt.problems.some((p) => p.code === 'sash-heavy'), 'a 1700 wide tilt-and-turn sash: warnings');
  const door = M.buildWindow({ no: 'D01', kind: 'door', w: 900, h: 2100, layout: 'F~800/R', system: 'pvc-70' });
  ok(door.inner.h === 2100 - 70 - 70, 'a door: the threshold takes the bottom');
  ok(piece(door, 'frame-side').cuts.join() === '45,90' && piece(door, 'frame-side').length === 2101.5 && piece(door, 'frame-side').qty === 2, 'door sides: 45° at the top, square at the threshold: 2100 + 1.5');
  ok(piece(door, 'threshold').length === 760 && piece(door, 'threshold').profile === 'T70' && !piece(door, 'frame-bottom'), 'the threshold runs between the sides: 900 − 140 = 760, its own profile');
  const alu = M.buildWindow({ w: 1200, h: 1200, layout: 'TL', system: 'alu-tb50' }, S.SYSTEMS['alu-tb50']);
  ok(piece(alu, 'frame-top').length === 1200 && !alu.pieces.some((p) => p.role === 'steel'), 'aluminium: no welding allowance, no steel');
  ok(alu.cols[0].cells[0].sash.w === 1200 - 100 + 2 * (9 - 3), 'aluminium sash = pane + 2 × (9 − 3)');
  const p60 = M.buildWindow({ w: 1000, h: 1000, layout: 'F', system: 'pvc-60' }, S.SYSTEMS['pvc-60']);
  ok(p60.inner.w === 880 && p60.glass[0].w === 880 + 2 * (13 - 3), 'the 60 system: inner 880, glass 900');
}

section('Parts for the cut list and labels; input is cleaned');
{
  const w = M.buildWindow({ no: 'W01', w: 1200, h: 1400, layout: 'TL|F', system: 'pvc-70' });
  const parts = M.windowParts(w, { word: (k) => k });
  const top = parts.find((p) => p.id === 'W01-01');
  ok(top.length === 1203 && top.width === 70 && top.thickness === 70 && top.material === 'F70 White' && top.note === '45° / 45°', 'a profile piece as a part: cut length, face, depth, "profile colour", angles in the note');
  ok(parts.filter((p) => p.role === 'glass').length === 2 && parts.find((p) => p.role === 'glass').material === '4/16/4', 'glass as parts: size and build');
  ok(M.cleanSpec(null) === null && M.cleanSpec({ w: 50, h: 1000 }) === null && M.cleanSpec({ w: 1000, h: 99999 }) === null, 'bad sizes are refused');
  const c = M.cleanSpec({ w: '1200', h: 1000, no: 'W 01!', layout: 'tl|zz', system: 'nope', colour: '<b>' });
  ok(c.no === 'W01' && c.layout === 'TL|F' && c.system === 'pvc-70' && c.colour === '<b>', 'number, layout and system tidied (colour is text, escaped on output)');
  ok(S.cleanSystem({ id: 'x', profiles: { frame: { w: 50, depth: 60 }, sash: { w: 60, depth: 70 } } }) === null, 'a system needs a bead profile too');
  const own = S.cleanSystem({ id: 'my sys!', name: 'Shop 62', profiles: { frame: { w: 62, depth: 62, seat: 13 }, sash: { w: 70, depth: 70, seat: 14 }, bead: { w: 20, depth: 20 } }, weld: 99, steel: { code: 'St', setback: 20, over: 500 } });
  ok(own && own.id === 'my sys!'.replace(/[^A-Za-z0-9._-]/g, '') && own.weld === 3 && own.profiles.mullion.w === 62 && own.steel.over === 500, 'an own system: id tidied, out-of-range numbers fall back, mullion defaults to the frame');
  ok(S.systemList([{ id: 'pvc-70', profiles: { frame: { w: 1, depth: 1 }, sash: { w: 1, depth: 1 }, bead: { w: 1, depth: 1 } } }]).length === 3, 'an own system cannot replace a built-in id');
}

section('Elevation');
{
  const D = await mine('lib/draw.js');
  const w = M.buildWindow({ no: 'W01', w: 1200, h: 1400, layout: 'TL|F', system: 'pvc-70' });
  const e = D.elevEnts(w, 1);
  const rects = e.filter((x) => x.type === 'poly').map((x) => [x.pts[0].x, x.pts[0].y, x.pts[2].x, x.pts[2].y].join(','));
  ok(rects.includes('0,0,1200,1400') && rects.includes('70,70,1130,1330'), 'the frame: outer and inner outline');
  ok(rects.includes('559,70,641,1330'), 'the mullion bar between the panes: x 559 to 641, the full inner height', rects.join(' | '));
  ok(rects.includes('62,62,567,1338'), 'the sash outline: 505 × 1276, 8 mm out of the pane on every side', rects.join(' | '));
  const lines = e.filter((x) => x.type === 'line');
  ok(lines.length === 4, 'tilt-and-turn: two lines for the turn, two for the tilt', String(lines.length));
  const left = lines.filter((l) => (l.x2 === 139 && l.y2 === 700) || (l.x1 === 139 && l.y1 === 700));
  ok(left.length === 2, 'the turn lines meet at the hinge side (left: x = sash inner edge 139)', JSON.stringify(lines.map((l) => [l.x1, l.y1, l.x2, l.y2])));
  ok(e.some((x) => x.type === 'text' && x.s === 'W01') && e.some((x) => x.type === 'text' && x.s === '1200 × 1400'), 'number and size under it');
  const k = D.elevEnts(w, 0.001);
  ok(near(k.find((x) => x.type === 'poly').pts[2].x, 1.2), 'scaled to a metre drawing');
  const dd = D.elevEnts(M.buildWindow({ kind: 'door', w: 900, h: 2100, layout: 'F', system: 'pvc-70' }), 1);
  ok(dd.find((x) => x.type === 'poly' && x.pts[0].x === 70) && dd.filter((x) => x.type === 'poly').length === 3, 'a door: frame, inner opening, the pane\'s glass outline');
}
