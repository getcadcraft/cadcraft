/* SPDX-License-Identifier: Apache-2.0 */
/**
 * job.js — from the windows in a drawing to what the workshop needs (0.8 SU.874, session `fab-08`). DOM-free: the profile pieces of
 * every window, bars to saw (lib/cutlist bars.js, one optimisation per profile + colour), glass and hardware lists, labels in
 * sawing order.
 *
 *   jobModels(items, systems) → [model]      items = [{ spec, system? }]
 *   profilePieces(models) → pieces for bars.js: { id, length, qty, cuts, depth, group, name, window }  (profile pieces and steel)
 *   barsJob(models, opts) → { result: optimizeGroups(...), pieces, seq (sawing order: { pieceId, id, window, bar, n, group, length, cuts }) }
 *       opts { share, minOffcut, stock: { group → length | [{length, qty}] } } — the bar and kerf of each group's system
 *   glassList(models) → [{ id, window, w, h, qty, build, area }] · glassCsv(rows, { head })
 *   cutCsv(models, { head, word }) → every piece row of every window as CSV
 *   jobLabels(models, bars, { fmt, words, word }) → label items (labels.js) for every profile piece (and glass), in sawing order
 */
import { buildWindow, windowParts } from './model.js';
import { optimizeGroups, expandPieces } from './cutlist/bars.js';
import { labelItem, WORDS } from './cutlist/labels.js';

export function jobModels(items, systems) {
  const out = [];
  for (const it of items) {
    const sys = it.system || systems?.[it.spec?.system];
    if (!sys) continue;
    out.push(buildWindow(it.spec, sys));
  }
  return out;
}

export function profilePieces(models) {
  const out = [];
  for (const mod of models) for (const p of mod.pieces) out.push({ id: p.id, length: p.length, qty: p.qty, cuts: p.cuts, depth: p.depth, group: p.group, name: p.name, window: mod.spec.no, role: p.role, system: mod.system.id });
  return out;
}

export function barsJob(models, { share = false, stock = null } = {}) {
  const pieces = profilePieces(models);
  // each group's bar and kerf come from the system its pieces were made for; a group (profile + colour) belongs to one system
  const sysOf = new Map();
  for (const p of pieces) if (!sysOf.has(p.group)) sysOf.set(p.group, models.find((m) => m.system.id === p.system).system);
  const result = { groups: [] };
  const sums = { bars_n: 0, pieceLength: 0, stockLength: 0 };
  for (const [group, sys] of sysOf) {
    const own = pieces.filter((p) => p.group === group);
    const isSteel = sys.steel && group === sys.steel.code;
    const bar = isSteel ? { length: sys.steel.bar.length, kerf: sys.steel.bar.kerf, trimStart: 0, trimEnd: 0 } : sys.bar;
    const s = stock?.[group] ?? stock?.['*'] ?? bar.length;
    const g = optimizeGroups(own, { stock: s, kerf: bar.kerf, trimStart: bar.trimStart, trimEnd: bar.trimEnd, share: share && !isSteel }).groups[0];
    result.groups.push({ ...g, group, system: sys.id, steel: !!isSteel, kerf: bar.kerf });
    sums.bars_n += g.bars_n; sums.pieceLength += g.pieceLength; sums.stockLength += g.stockLength;
  }
  result.bars_n = sums.bars_n; result.pieceLength = sums.pieceLength; result.stockLength = sums.stockLength;
  result.waste = Math.round((sums.stockLength - sums.pieceLength) * 1000) / 1000;
  result.wastePct = sums.stockLength ? Math.round((1 - sums.pieceLength / sums.stockLength) * 10000) / 100 : 0;
  // the sawing order: group by group, bar by bar, cut by cut
  const byId = new Map(pieces.map((p) => [p.id, p]));
  const seq = [];
  let n = 0;
  for (const g of result.groups) for (const b of g.bars) {
    let c = 0;
    for (const p of b.pieces) { c++; n++; const src = byId.get(p.id); seq.push({ pieceId: p.pieceId, id: p.id, window: src?.window, bar: b.no, group: g.group, n: c, length: p.length, cuts: p.cuts, pos: p.pos, order: n }); }
  }
  return { result, pieces, seq };
}

export function glassList(models) {
  const out = [];
  for (const mod of models) for (const g of mod.glass) out.push({ id: g.id, window: mod.spec.no, w: g.w, h: g.h, qty: g.qty, build: g.build, area: Math.round(g.w * g.h * g.qty) / 1e6 });
  return out;
}
const cell = (v) => { const s = String(v ?? ''); return /[",\r\n]/.test(s) || /^[=+\-@]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
export function glassCsv(rows, { head = {} } = {}) {
  const cols = ['id', 'window', 'w', 'h', 'qty', 'build', 'area'];
  return [cols.map((c) => cell(head[c] ?? c)).join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\r\n') + '\r\n';
}
export function cutCsv(models, { head = {}, word = (k) => k } = {}) {
  const cols = ['id', 'window', 'name', 'profile', 'group', 'length', 'outer', 'cut1', 'cut2', 'qty'];
  const lines = [cols.map((c) => cell(head[c] ?? c)).join(',')];
  for (const mod of models) for (const p of mod.pieces) lines.push([p.id, mod.spec.no, word(p.name), p.profile, p.group, p.length, p.outer, p.cuts[0], p.cuts[1], p.qty].map(cell).join(','));
  return lines.join('\r\n') + '\r\n';
}

export function jobLabels(models, bars, { fmt = String, words = WORDS, word = (k) => k } = {}) {
  const items = [];
  const order = new Map();
  if (bars) for (const s of bars.seq) order.set(s.pieceId, s);
  const parts = models.flatMap((m) => windowParts(m, { word }));
  const profile = new Map(models.flatMap((m) => m.pieces.map((p) => [p.id, p])));
  const pieces = expandPieces(models.flatMap((m) => m.pieces.map((p) => ({ id: p.id, length: p.length, qty: p.qty }))));
  void profile; void pieces;
  const rows = [];
  for (const part of parts) {
    const n = Math.max(1, part.qty);
    for (let c = 1; c <= n; c++) rows.push({ ...part, pieceId: n > 1 ? part.id + '.' + c : part.id });
  }
  rows.sort((a, b) => (order.get(a.pieceId)?.order ?? 1e9) - (order.get(b.pieceId)?.order ?? 1e9));
  for (const r of rows) {
    const o = order.get(r.pieceId);
    const it = labelItem(r, { fmt, nest: o ? { sheet: o.bar, n: o.n } : null, words });
    if (r.note) it.cut = r.note;
    items.push({ ...it, size: r.meta?.kind === 'glass' ? fmt(r.length) + ' × ' + fmt(r.width) : fmt(r.length) + ' · ' + fmt(r.width) + ' × ' + fmt(r.thickness) });
  }
  return items;
}
