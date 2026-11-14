/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (step 5, session `fab-08`): the 32 mm drilling and the hardware list (known answers for a 600 base, a pair of
// doors, a drawer base, a tall door), the side view, the 3D boxes, (the new commands in CadCraft are tested at the end of t-addon.mjs, in its session).
const { ok, section, near, mine } = globalThis.__cabTest;
const M = await mine('lib/model.js');
const HW = await mine('lib/hardware.js');
const D = await mine('lib/draw.js');
const SO = await mine('lib/solid.js');
const R = M.RULES.mm;
const cabOf = (o) => M.cleanCabinet(o, R);

section('Drilling: the 32 mm system');
{
  const b = cabOf({ type: 'base' });
  const pl = HW.drillPlan(b, R);
  const side = pl.find((p) => p.role === 'side'), door = pl.find((p) => p.role === 'door');
  ok(side && side.qty === 2 && side.face === 'inside' && door && door.face === 'back', '600 base: sides drilled inside, doors on the back');
  const pins = side.holes.filter((h) => h.kind === 'shelf-pin');
  // the side is 720 long: holes from 64 every 32 while 64 mm remain at the top = 19 per row (64 … 640), two rows (37 mm from each edge of the 560 deep side)
  ok(pins.length === 38 && pins[0].x === 64 && pins[pins.length - 1].x === 640, 'shelf pins: 19 per row from 64 to 640 mm, two rows', String(pins.length));
  ok(new Set(pins.map((h) => h.y)).size === 2 && pins.some((h) => h.y === 37) && pins.some((h) => h.y === 523), 'rows 37 mm from the back and from the front edge (y = 37 and 523 of 560)');
  ok(pins.every((h) => h.d === 5 && h.depth === 12), 'Ø5 × 12');
  const grid = pins.map((h) => h.x);
  ok(pins.every((h) => (h.x - 64) % 32 === 0), 'every pin hole sits on the 32 mm grid');
  const plates = side.holes.filter((h) => h.kind === 'plate');
  ok(plates.length === 4 && plates.every((h) => h.side === 'left' && h.y === 523 && grid.includes(h.x)) && plates[1].x - plates[0].x === 32, 'two hinge plates: pairs of system holes 32 apart, front line, left side only (door hinged left)', JSON.stringify(plates));
  ok(door.holes.length === 2 && door.holes.every((h) => h.kind === 'cup' && h.d === 35 && h.depth === 12.5 && h.y === 22.5), 'two cups Ø35 × 12.5, centre 22.5 from the hinge edge (5 + 17.5)');
  ok(door.holes[0].x === 100 && door.holes[1].x === 617, 'cups 100 mm from each end of the 717 mm door');
  const pair = HW.drillPlan(cabOf({ type: 'base', w: 800 }), R);
  ok(pair.find((p) => p.role === 'door').note === 'mirrored' && pair.find((p) => p.role === 'door').qty === 2, 'a pair of doors: one part of two, the second mirrored');
  const pp = pair.find((p) => p.role === 'side').holes.filter((h) => h.kind === 'plate');
  ok(pp.some((h) => h.side === 'left') && pp.some((h) => h.side === 'right'), 'a pair: plates on both sides');
  const dr = HW.drillPlan(cabOf({ type: 'drawers' }), R).find((p) => p.role === 'side');
  const sl = dr.holes.filter((h) => h.kind === 'slide');
  ok(sl.length === 6 && !dr.holes.some((h) => h.kind === 'shelf-pin'), 'drawer base: a front and a rear hole for each of three slides, no pins', String(sl.length));
  ok(sl.every((h) => (h.x - 64) % 32 === 0) && sl.some((h) => h.y === 523) && sl.some((h) => h.y === 523 - (500 - 74)), 'slide holes on the grid; the rear one is a 500 slide minus 2 × 37 back');
  ok(HW.hingeCount(900, R) === 2 && HW.hingeCount(1200, R) === 3 && HW.hingeCount(1700, R) === 4 && HW.hingeCount(2300, R) === 5, 'hinges: 2 up to 1000, 3 to 1600, 4 to 2200, then 5');
  const tall = HW.drillPlan(cabOf({ type: 'tall' }), R).find((p) => p.role === 'door');
  ok(tall.qty === 2 && tall.holes.length === 2 && near(tall.holes[0].x, 100) && near(tall.holes[1].x, 972 - 100), 'a 2100 tall box: two rows of 972 mm doors, one part of two, 2 cups each', JSON.stringify([tall.qty, tall.holes.map((h) => h.x)]));
  const inch = M.rulesFor('in');
  const bi = M.cleanCabinet({ type: 'base' }, inch);
  const sidei = HW.drillPlan(bi, inch).find((p) => p.role === 'side');
  ok(sidei.holes.some((h) => h.kind === 'shelf-pin' && near(h.y, sidei.holes.find((q) => q.kind === 'shelf-pin').y)) && near(inch.pitch * 25.4, 32, 0.01), 'inch rule set: the same 32 mm in inches');
  const csv = HW.drillCsv([{ cab: b, R }]);
  ok(csv.split('\r\n').length === 1 + 38 + 4 + 2 + 1 && /^part,name,face,kind,x,y,diameter,depth,side,qty,note/.test(csv), 'drilling CSV: a row per hole', String(csv.split('\r\n').length));
}

section('Hardware list');
{
  const mk = (...types) => types.map((t) => ({ cab: cabOf(typeof t === 'string' ? { type: t } : t), R }));
  const rows = HW.hardwareList(mk('base', 'drawers', 'wall'));
  const q = (key, spec = '') => rows.find((r) => r.key === key && r.spec === spec)?.qty;
  ok(q('hinge') === 4 && q('plate') === 4, 'two doors (base, wall): 2 hinges each');
  ok(q('shelf-pin') === 4 * (1 + 2), 'shelf pins: 4 per adjustable shelf (1 + 2 shelves)', String(q('shelf-pin')));
  ok(q('slide', '500') === 3, 'three 500 mm slides on the drawer base');
  ok(q('leg') === 8 && q('bracket') === 2, '4 legs per base cabinet, 2 hanging brackets on the wall one');
  ok(q('pull') === 1 + 3 + 1, 'one pull per front');
  ok(rows[0].key === 'hinge' && rows.at(-1).key === 'fastener', 'in a fixed order');
  const wide = HW.hardwareList(mk({ type: 'base', w: 1000 }));
  ok(wide.find((r) => r.key === 'leg').qty === 6 && wide.find((r) => r.key === 'hinge').qty === 4, 'over 900 wide: 6 legs; a pair of doors: 4 hinges');
  const csv = HW.hardwareCsv(rows);
  ok(csv.startsWith('item,spec,qty\r\n') && csv.includes('hw.hinge,,4'), 'hardware CSV');
}

section('Side view and 3D boxes');
{
  const b = cabOf({ type: 'base' });
  const e = D.sideEnts(b, R, 1);
  const rects = e.filter((x) => x.type === 'poly').map((x) => [x.pts[0].x, x.pts[0].y, x.pts[2].x, x.pts[2].y].join(','));
  ok(rects.includes('0,150,560,870'), 'side view: the side panel, 560 deep from 150 to 870');
  ok(rects.includes('0,150,560,168'), 'the bottom panel on top of the legs (150 to 168)');
  ok(rects.includes('560,151.5,578,868.5'), 'the door in front of the box: 18 thick, 3 mm reveal');
  ok(rects.includes('460,852,560,870') && rects.includes('0,852,100,870'), 'two rails at the top: 100 deep, front and back');
  ok(e.filter((x) => x.type === 'poly').length === 8 && e.some((x) => x.type === 'text' && x.s === 'B01'), 'side, bottom, 2 rails, back, shelf, plinth, door + the number', String(e.filter((x) => x.type === 'poly').length));
  const dr = D.sideEnts(cabOf({ type: 'drawers' }), R, 1).filter((x) => x.type === 'poly');
  ok(dr.length >= 3 * 2 + 5, 'drawer base: fronts and boxes');
  const notch = D.sideEnts(M.cleanCabinet({ type: 'base' }, M.rulesFor('mm', { kick: 'notch' })), M.rulesFor('mm', { kick: 'notch' }), 1);
  ok(notch[0].pts.length === 6, 'a notched kick: the side is a six-sided outline');
  const mm = D.sideEnts(b, R, 0.001);
  ok(near(mm.find((x) => x.type === 'poly').pts[2].x, 0.56), 'scaled to a metre drawing');

  const boxes = SO.boxesOf(b, R);
  const vol = boxes.reduce((a, bx) => a + (bx.x1 - bx.x0) * (bx.y1 - bx.y0) * (bx.z1 - bx.z0), 0);
  const roles = (r) => boxes.filter((x) => x.role === r).length;
  ok(roles('side') === 2 && roles('rail') === 2 && roles('shelf') === 1 && roles('door') === 1 && roles('plinth') === 1, 'boxes: 2 sides, 2 rails, 1 shelf, 1 door, 1 plinth');
  // volume of the parts = the cut list's volume (panels are boxes, the back sits in grooves so it is a little larger than its box)
  const parts = M.cabinetParts(b, R);
  const pv = parts.filter((p) => p.role !== 'back').reduce((a, p) => a + p.length * p.width * p.thickness * p.qty, 0);
  const bv = boxes.filter((x) => x.role !== 'back').reduce((a, bx) => a + (bx.x1 - bx.x0) * (bx.y1 - bx.y0) * (bx.z1 - bx.z0), 0);
  ok(near(pv, bv, 1), 'the boxes hold the same wood as the cut list (without the back)', pv + ' vs ' + bv);
  const polys = SO.solidPolys(b, R, { x: 1000, y: 0, rot: Math.PI / 2, k: 1 });
  ok(polys.length === boxes.length * 6 && polys.every((p) => p.length === 4), 'six quads a box');
  const xs = polys.flat().map((p) => p[0]);
  ok(near(Math.max(...xs), 1000, 1e-6) && near(Math.min(...xs), 1000 - 578, 1e-6), 'turned a quarter turn about its corner: depth runs along −x', Math.min(...xs) + '..' + Math.max(...xs));
  const zs = polys.flat().map((p) => p[2]);
  ok(near(Math.min(...zs), 0) && near(Math.max(...zs), 870), 'floor to 870');
  // outward faces: the first (bottom) quad of one box has a normal pointing down
  const q = SO.quads({ x0: 0, y0: 0, z0: 0, x1: 1, y1: 2, z1: 3 });
  const n = (p) => { const a = p[0], b2 = p[1], c = p[2]; const u = b2.map((v, i) => v - a[i]), w = c.map((v, i) => v - a[i]); return [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]; };
  const dirs = q.map((p) => n(p).map((v) => Math.sign(v)).join());
  ok(dirs.join('|') === '0,0,-1|0,0,1|0,-1,0|0,1,0|-1,0,0|1,0,0', 'every quad faces outward', dirs.join('|'));
}
