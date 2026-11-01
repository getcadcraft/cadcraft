/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the cabinet model (lib/model.js) with known answers — every part size of a 600 mm frameless base cabinet
// worked by hand from the rules, then an 800 pair, a wall cabinet, a tall cabinet with two rows of doors, a drawer bank, the
// other back and plinth rules, inch rules, the fronts drawn where the door parts say, and the problems it reports.
const { ok, section, near, mine } = globalThis.__cabTest;
const M = await mine('lib/model.js');
const CL = await mine('lib/cutlist/cutlist.js');

const R = M.RULES.mm;
const sz = (p) => p.length + '×' + p.width + '×' + p.thickness + (p.qty > 1 ? ' ×' + p.qty : '');
const table = (parts) => parts.map((p) => p.role + ' ' + sz(p)).join(' | ');
const byRole = (parts, role) => parts.filter((p) => p.role === role);

section('Cabinet model: a 600 mm frameless base cabinet (W 600, H 870, D 560; 18 mm carcass, 8 mm back in 8 mm grooves 16 mm in, legs 150 mm, reveal 3 mm)');
{
  const parts = M.cabinetParts({ no: 'B01', type: 'base', w: 600, h: 870, d: 560 }, R);
  // by hand: box 870 − 150 = 720; inside width 600 − 2·18 = 564
  const want = [
    ['side', 'part.side', 720, 560, 18, 2, 'L1'],            // full box height × depth, front edge banded
    ['bottom', 'part.bottom', 564, 560, 18, 1, 'L1'],
    ['rail', 'part.rail-front', 564, 100, 18, 1, 'L1'],
    ['rail', 'part.rail-back', 564, 100, 18, 1, ''],
    ['back', 'part.back', 580, 710, 8, 1, ''],               // 564 + 2·8 × (720 − 18 + 8): into the side and bottom grooves, rails above
    ['shelf', 'part.shelf', 562, 516, 18, 1, 'L1'],          // 564 − 2·1 × (560 − 16 − 8 − 20)
    ['door', 'part.door', 717, 597, 18, 1, 'L1 L2 W1 W2'],   // (720 − 3) × (600 − 3), grain up the door
    ['plinth', 'part.plinth', 600, 150, 18, 1, ''],
  ];
  ok(parts.length === want.length, 'eight parts', table(parts));
  want.forEach(([role, name, l, w, t, q, bands], i) => {
    const p = parts[i];
    ok(p && p.role === role && p.name === name && p.length === l && p.width === w && p.thickness === t && p.qty === q && CL.bandMarks(p) === bands,
      `${name.slice(5)}: ${l} × ${w} × ${t}${q > 1 ? ' ×' + q : ''}${bands ? ', banded ' + bands : ''}`, p ? sz(p) + ' ' + CL.bandMarks(p) : 'missing');
  });
  ok(parts.map((p) => p.id).join(' ') === 'B01-01 B01-02 B01-03 B01-04 B01-05 B01-06 B01-07 B01-08', 'ids B01-01 … B01-08, all in group B01');
  ok(parts.find((p) => p.role === 'side').material === 'mat.carcass' && parts.find((p) => p.role === 'back').material === 'mat.back' && parts.find((p) => p.role === 'back').grain === 'none' && parts.find((p) => p.role === 'door').material === 'mat.fronts', 'materials (word keys): carcass, back (no grain), fronts');
  const list = CL.cutList(parts);
  const door = list.groups.find((g) => g.material === 'mat.fronts').rows[0];
  ok(door.cut.length === 713 && door.cut.width === 593, 'through lib/cutlist: the door is cut 713 × 593 (2 mm edges all round)');
  // banding by hand: Edge 1 mm = 2 sides × 720 + bottom 564 + front rail 564 + shelf 562 = 3130; Edge 2 mm = 2·717 + 2·597 = 2628
  ok(list.banding.find((b) => b.thickness === 1).length === 3130 && list.banding.find((b) => b.thickness === 2).length === 2628, 'banding: 3130 mm of 1 mm edge, 2628 mm of 2 mm edge', JSON.stringify(list.banding));
  const fr = M.frontsOf(M.cleanCabinet({ type: 'base' }, R), R);
  ok(fr.length === 1 && fr[0].x === 1.5 && fr[0].y === 151.5 && fr[0].w === 597 && fr[0].h === 717 && fr[0].hinge === 'left', 'its front view: one door from 1.5, 151.5, 597 × 717, hinged left', JSON.stringify(fr));
  ok(!M.problems({ type: 'base' }, R).length, 'no problems');
}

section('Cabinet model: other cabinets');
{
  const p800 = M.cabinetParts({ no: 'B02', type: 'base', w: 800 }, R);
  const d8 = byRole(p800, 'door');
  ok(d8.length === 1 && d8[0].qty === 2 && d8[0].length === 717 && d8[0].width === 397, 'an 800 base: a pair of doors, each (800 − 6) / 2 = 397 wide', table(d8));
  const f8 = M.frontsOf(M.cleanCabinet({ type: 'base', w: 800 }, R), R);
  ok(f8.length === 2 && f8[0].x === 1.5 && f8[1].x === 401.5 && f8[1].hinge === 'right' && near(f8[1].x + f8[1].w, 798.5), 'the pair meets with a 3 mm gap, 1.5 mm in from each side', JSON.stringify(f8));
  ok(byRole(p800, 'shelf')[0].length === 762, 'its shelf: 764 − 2 = 762');

  const wall = M.cabinetParts({ no: 'W01', type: 'wall', w: 600, h: 720, d: 320 }, R);
  ok(table(wall) === 'side 720×320×18 ×2 | bottom 564×320×18 | top 564×320×18 | back 580×700×8 | shelf 562×276×18 ×2 | door 717×597×18',
    'a 600 × 720 × 320 wall cabinet: top and bottom, back 720 − 36 + 16 = 700, two shelves 276 deep, no plinth', table(wall));
  ok(M.cleanCabinet({ type: 'wall' }, R).elev === 1400, 'a wall cabinet hangs with its bottom at 1400 by default');

  const tall = M.cabinetParts({ no: 'T01', type: 'tall', w: 600, h: 2100, d: 560 }, R);
  ok(table(tall) === 'side 1950×560×18 ×2 | bottom 564×560×18 | top 564×560×18 | back 580×1930×8 | shelf-fixed 564×536×18 | shelf 562×516×18 ×4 | door 972×597×18 ×2 | plinth 600×150×18',
    'a 2100 tall: box 1950, doors in two rows (1950 − 6) / 2 = 972 with a fixed shelf 536 deep between', table(tall));

  const dr = M.cabinetParts({ no: 'D01', type: 'drawers', w: 600, h: 870, d: 560, drawers: 3 }, R);
  // fronts (720 − 9) / 3 = 237; box width 564 − 26 = 538; slide: 560 − 24 − 10 = 526 → 500; box height 237 − 40 = 197
  ok(table(dr) === 'side 720×560×18 ×2 | bottom 564×560×18 | rail 564×100×18 | rail 564×100×18 | back 580×710×8 | drawer-front 597×237×18 ×3 | drawer-side 500×197×15 ×6 | drawer-end 508×197×15 ×6 | drawer-bottom 520×482×6 ×3 | plinth 600×150×18',
    'a three-drawer base: fronts 597 × 237, 500 mm slides, boxes 538 wide (ends 508), bottoms 520 × 482 in 6 mm grooves', table(dr));
  ok(byRole(dr, 'drawer-side')[0].meta.slide === 500 && M.slideFor(M.cleanCabinet({ type: 'drawers' }, R), R) === 500, 'it names the slide length: 500');
  const frd = M.frontsOf(M.cleanCabinet({ type: 'drawers' }, R), R);
  ok(frd.length === 3 && near(frd[0].y + frd[0].h, 868.5) && near(frd[2].y, 151.5) && near(frd[0].y - (frd[1].y + frd[1].h), 3), 'the fronts stack top down with 3 mm between, 1.5 mm in at top and bottom', JSON.stringify(frd));
  const mixed = M.cabinetParts({ type: 'drawers', fronts: [140, 280, 291] }, R);
  ok(byRole(mixed, 'drawer-front').map((p) => p.width).join(',') === '140,280,291' && byRole(mixed, 'drawer-side').map((p) => p.width + '×' + p.qty).join(',') === '100×2,240×2,251×2', 'fronts of given heights: a box under each, 40 lower', table(mixed));
  ok(M.problems({ type: 'drawers', fronts: [300, 300, 300] }, R).some((x) => x.code === 'fronts-tall'), 'fronts taller than the box are a problem');
  ok(M.problems({ type: 'drawers', d: 250 }, R).some((x) => x.code === 'no-slide') && !M.cabinetParts({ type: 'drawers', d: 250 }, R).some((p) => p.role === 'drawer-side'), 'too shallow for any slide: said, and no boxes');
  ok(M.problems({ type: 'base', w: 30 }, R).some((x) => x.code === 'too-narrow'), 'narrower than two sides: said');
}

section('Cabinet model: other rules');
{
  const between = M.cabinetParts({ type: 'base' }, M.rulesFor('mm', { back: 'between' }));
  ok(byRole(between, 'back')[0].length === 564 && byRole(between, 'back')[0].width === 702, 'a back between the panels: 564 × (720 − 18)');
  const applied = M.cabinetParts({ type: 'wall' }, M.rulesFor('mm', { back: 'applied' }));
  ok(table(applied).startsWith('side 720×312×18 ×2 | bottom 564×312×18 | top 564×312×18 | back 600×720×8 | shelf 562×292×18 ×2'), 'an applied back: the whole 600 × 720, the panels 8 shallower, shelves 312 − 20', table(applied));
  const notch = M.cabinetParts({ type: 'base' }, M.rulesFor('mm', { kick: 'notch' }));
  const s = byRole(notch, 'side')[0];
  ok(s.length === 870 && s.width === 560 && s.outline && s.outline[0].length === 6, 'a notched toe kick: sides to the floor, 870 × 560, with a 6-corner outline', JSON.stringify(s.outline));
  ok(s.outline[0].some((q) => q.x === 150 && q.y === 559) && s.outline[0].some((q) => q.x === 150 && q.y === 509), 'the notch: 150 high, 50 deep (cut size: the 1 mm front edge off)');
  ok(byRole(notch, 'plinth')[0].name === 'part.kick-board' && byRole(notch, 'plinth')[0].length === 564, 'and a kick board between the sides, 564 long');
  ok(byRole(notch, 'door')[0].length === 717, 'the doors are the same');
  const none = M.cabinetParts({ type: 'base', h: 720 }, M.rulesFor('mm', { kick: 'none' }));
  ok(!byRole(none, 'plinth').length && byRole(none, 'side')[0].length === 720, 'no toe kick: the box is the whole height, no plinth');
  const R2 = M.rulesFor('mm', { t: 19, reveal: 2, bogus: 5, back: 'nonsense', bandFront: { code: 'ABS 1', thickness: 1 } });
  ok(R2.t === 19 && R2.reveal === 2 && !('bogus' in R2) && R2.back === 'groove' && R2.bandFront.code === 'ABS 1', 'rules: a shop\'s numbers are taken, unknown or bad ones ignored');
  ok(byRole(M.cabinetParts({ type: 'base' }, R2), 'door')[0].width === 598, 'a 2 mm reveal: the door 598 wide');
  const RI = M.rulesFor('in');
  const bi = M.cabinetParts({ type: 'base', w: 24, h: 34.5, d: 23.25 }, RI);
  // inches: box 34.5 − 4 = 30.5; inside 24 − 1.5 = 22.5; door (30.5 − 0.125) × (24 − 0.125); back (22.5 + 0.5) × (30.5 − 0.75 + 0.25)
  ok(table(bi) === 'side 30.5×23.25×0.75 ×2 | bottom 22.5×23.25×0.75 | rail 22.5×4×0.75 | rail 22.5×4×0.75 | back 23×30×0.25 | shelf 22.375×21.75×0.75 | door 30.375×23.875×0.75 | plinth 24×4×0.75',
    'a 24 in base on inch rules', table(bi));
  ok(M.cleanCabinet({ type: 'wall' }, RI).elev === 54 && M.cleanCabinet({}, RI).w === 24, 'inch defaults: 24 wide, wall cabinets at 54 in');
}
