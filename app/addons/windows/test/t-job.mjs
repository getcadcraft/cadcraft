/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: several windows → bars per profile and colour, the sawing order, glass and cut CSV, labels in sawing order.
const { ok, section, near, mine } = globalThis.__winTest;
const M = await mine('lib/model.js');
const S = await mine('lib/systems.js');
const J = await mine('lib/job.js');
const L = await mine('lib/cutlist/labels.js');
const PVC = S.SYSTEMS['pvc-70'];
const item = (o) => ({ spec: M.cleanSpec({ system: 'pvc-70', ...o }), system: PVC });

section('Bars for a job');
{
  const models = J.jobModels([item({ no: 'W01', w: 1200, h: 1400, layout: 'TL|TL' }), item({ no: 'W02', w: 900, h: 1000, layout: 'F' }), item({ no: 'W03', w: 1800, h: 1400, layout: 'TL|F|TR' })]);
  const b = J.barsJob(models);
  const g = (name) => b.result.groups.find((x) => x.group === name);
  ok(b.result.groups.map((x) => x.group).sort().join('|') === ['B24 White', 'F70 White', 'M82 White', 'S77 White', PVC.steel.code].sort().join('|'), 'one optimisation per profile and colour (frame, sash, bead, mullion, steel)');
  // the frame pieces in hand: W01 1203 ×2, 1403 ×2 ... every piece of the group is on exactly one bar
  const frame = g('F70 White');
  const need = models.flatMap((m) => m.pieces.filter((p) => p.group === 'F70 White')).reduce((a, p) => a + p.qty, 0);
  ok(frame.bars.reduce((a, bb) => a + bb.pieces.length, 0) === need, 'every frame piece is on a bar (' + need + ')');
  ok(frame.bars.every((bb) => bb.pieces.reduce((a, p) => a + p.length + 4, 0) <= 6500 - 20 + 1e-9), 'no bar over 6500 less the 10 + 10 trims, 4 mm kerf counted for every cut');
  ok(frame.bars_n === Math.ceil((models.flatMap((m) => m.pieces.filter((p) => p.group === 'F70 White')).reduce((a, p) => a + p.qty * (p.length + 4), 0)) / 6480) && frame.optimal, 'the frame bars equal the lower bound (total length with kerf / usable bar)');
  const steel = g(PVC.steel.code);
  ok(steel.kerf === 3 && steel.bars[0].stock === 6000, 'steel is cut from 6 m bars with its own kerf');
  ok(b.result.bars_n === b.result.groups.reduce((a, x) => a + x.bars_n, 0) && b.result.wastePct > 0 && b.result.wastePct < 60, 'totals add up');
  ok(b.seq.length === b.pieces.reduce((a, p) => a + p.qty, 0) && b.seq.map((s) => s.order).join() === b.seq.map((_, i) => i + 1).join(), 'the sawing order numbers every piece once');
  ok(new Set(b.seq.map((s) => s.pieceId)).size === b.seq.length, 'piece ids are different (.1 .2 for a quantity)');
  const shared = J.barsJob(models, { share: true });
  ok(shared.result.groups.find((x) => x.group === 'F70 White').bars_n <= frame.bars_n && shared.result.bars_n <= b.result.bars_n, 'sharing mitre cuts never needs more bars');
  const glass = J.glassList(models);
  ok(glass.reduce((a, x) => a + x.qty, 0) === 2 + 1 + 3, 'glass: 2 + 1 + 3 panes', String(glass.reduce((a, x) => a + x.qty, 0)));
  const csv = J.cutCsv(models, { word: (k) => k });
  ok(csv.split('\r\n')[0] === 'id,window,name,profile,group,length,outer,cut1,cut2,qty' && csv.includes('W01-01,W01,part.frame-top,F70,F70 White,1203,1200,45,45,1'), 'cut list CSV');
  ok(J.glassCsv(glass).split('\r\n')[0] === 'id,window,w,h,qty,build,area', 'glass CSV');
  const labels = J.jobLabels(models, b, { fmt: String, words: { nest: 'Bar {sheet}, cut {n}', cut: '{cut}' } });
  ok(labels.length === b.seq.length + glass.reduce((a, x) => a + x.qty, 0), 'a label for every profile piece and every pane of glass');
  ok(labels[0].nest === 'Bar 1, cut 1' && labels.slice(0, b.seq.length).every((l, i) => l.id === b.seq[i].pieceId), 'profile labels come in sawing order, "Bar n, cut n"');
  const one = labels.find((l) => l.id === 'W01-01.1' || l.id === 'W01-01');
  ok(one && /45° \/ 45°/.test(one.cut) && /1203/.test(one.size), 'the label says the cut length and the angles', JSON.stringify(one));
  const sheets = L.labelSheets(labels, 'a4-24');
  ok(sheets.pages.length >= 1 && sheets.warnings.length === 0, 'the labels lay out on A4 sheets with readable bar codes');
}
