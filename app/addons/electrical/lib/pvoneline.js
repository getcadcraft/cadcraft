/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pvoneline.js — a PV one-line from BimCraft's data (0.8 EG.15, CadCraft half; session cad_PART_3). DOM-free.
 * Format: docs/0.8-sessions/energy_PART_2-pv-electrical-handoff.md (`cadcraft-pv-oneline` v1). The words in the file (labels, wire sizes) are
 * content, shown as written; nothing in them is followed. The factors and wire tables behind the numbers are the person's typed parameters
 * in BimCraft; this file only draws what it is given, and carries the "not a compliance statement" note onto the sheet.
 *
 *   readPvOneline(textOrObject) → { ok, plan, errors[] }       a cleaned plan, limits applied
 *   layoutPvOneline(plan, { x0, y0, pitchX, pitchY }) → { symbols: [{ key, x, y, rot, attrs, id, caption }], wires: [{ pts, text, tx, ty }], notes: [text] }
 *   SYMBOL_OF → the CadCraft symbol key for each BimCraft symbol
 */
import { symbolBlock, symbolAttrs, ensureBlock, uprightAttloc } from './symbols.js';
import { addSheet } from './project.js';

export const FORMAT = 'cadcraft-pv-oneline';
export const SYMBOL_OF = { 'pv-array': 'pv.array', combiner: 'pv.combiner', disconnect: 'disconnector', inverter: 'pv.inverter', panel: 'panel.board', utility: 'utility' };
export const LIMITS = { nodes: 200, edges: 400, col: 40, row: 40 };
const ID_OK = /^[A-Za-z0-9._-]{1,64}$/;
const str = (v, n) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n) : '');
const fin = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : null);
const idx = (v, max) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : 0; };

export function readPvOneline(src) {
  const errors = [];
  let o = src;
  if (typeof src === 'string') { try { o = JSON.parse(src.replace(/^﻿/, '')); } catch { return { ok: false, errors: ['not_json'] }; } }
  if (!o || typeof o !== 'object' || o.format !== FORMAT) return { ok: false, errors: ['not_pv'] };
  if (o.version !== 1) return { ok: false, errors: ['version'] };
  const nodes = [], ids = new Set();
  for (const n of (Array.isArray(o.nodes) ? o.nodes : []).slice(0, LIMITS.nodes)) {
    const id = typeof n?.id === 'string' ? n.id : '';
    if (!ID_OK.test(id) || ids.has(id)) { errors.push('bad_node'); continue; }
    if (!SYMBOL_OF[n.symbol]) { errors.push('bad_symbol:' + id); continue; }
    ids.add(id);
    const rating = {};
    if (n.rating && typeof n.rating === 'object') for (const [k, v] of Object.entries(n.rating).slice(0, 20)) if (/^[A-Za-z0-9_]{1,24}$/.test(k) && fin(v) !== null) rating[k] = v;
    nodes.push({ id, kind: str(n.kind, 24), symbol: n.symbol, label: str(n.label, 120), col: idx(n.col, LIMITS.col), row: idx(n.row, LIMITS.row), rating });
  }
  const edges = [];
  for (const e of (Array.isArray(o.edges) ? o.edges : []).slice(0, LIMITS.edges)) {
    if (!ids.has(e?.from) || !ids.has(e?.to) || e.from === e.to) { errors.push('bad_edge'); continue; }
    edges.push({ id: str(e.id, 40), from: e.from, to: e.to, circuit: e.circuit === 'ac' ? 'ac' : 'dc', current: fin(e.current), wire: e.wire == null ? null : str(e.wire, 40), ocpd: fin(e.ocpd), label: str(e.label, 120) });
  }
  if (!nodes.length) return { ok: false, errors: ['empty'] };
  return { ok: true, errors, plan: { name: str(o.name, 120), nodes, edges, notes: (Array.isArray(o.notes) ? o.notes : []).slice(0, 10).map((x) => str(x, 80)), codeLabel: str(o.code?.label, 300),
    totals: { kwp: fin(o.totals?.kwp), acKw: fin(o.totals?.acKw), acCurrent: fin(o.totals?.acCurrent), dcCurrentMax: fin(o.totals?.dcCurrentMax) } } };
}

const r1 = (v) => Math.round(v * 10) / 10;
export function layoutPvOneline(plan, { x0 = 45, y0 = 200, pitchX = 50, pitchY = 60 } = {}) {
  const at = new Map(), symbols = [], wires = [], counters = {};
  const LETTER = { 'pv.array': 'G', 'pv.inverter': 'T', 'pv.combiner': 'X', disconnector: 'Q' };
  for (const n of plan.nodes) {
    const key = SYMBOL_OF[n.symbol];
    const x = x0 + n.col * pitchX, y = y0 - n.row * pitchY;
    at.set(n.id, { x, y, key });
    const L = LETTER[key];
    const tag = L ? `-${L}${(counters[L] = (counters[L] || 0) + 1)}` : '';
    const rate = Object.entries(n.rating).slice(0, 4).map(([k, v]) => `${k} ${v}`).join(', ');
    symbols.push({ id: n.id, key, x, y, rot: Math.PI / 2, attrs: { TAG: tag, DESC: n.label }, caption: rate });
  }
  for (const e of plan.edges) {
    const a = at.get(e.from), b = at.get(e.to);
    const sx = a.x + 5, sy = a.y, ex = b.x - 5, ey = b.y;
    const midx = ex > sx ? (sx + ex) / 2 : sx + 8;
    const pts = sy === ey && ex > sx ? [[sx, sy], [ex, ey]] : [[sx, sy], [midx, sy], [midx, ey], [ex, ey]];
    const parts = [e.label, e.current != null ? `${r1(e.current)} A` : '', e.wire || '', e.ocpd != null ? `${e.ocpd} A fuse/breaker` : ''].filter(Boolean);
    const w = { pts, text: parts, tx: (sx + Math.max(ex, midx)) / 2, ty: Math.max(sy, ey) + 3, circuit: e.circuit };
    // a fuse / breaker on the wire (EG.15, owner-approved): the breaker symbol sits in the middle of the first horizontal run, which is cut
    // there (placePvOneline); the "20 A fuse/breaker" text stays beside it. A run shorter than the symbol (10 mm + room) keeps the text only.
    const run = pts[1][0] - pts[0][0];
    if (e.ocpd != null && run >= 14) {
      const bx = (pts[0][0] + pts[1][0]) / 2, by = pts[0][1];
      w.breaker = { x: bx, y: by };
      symbols.push({ id: (e.id || e.from + '>' + e.to) + '-ocpd', key: 'breaker', x: bx, y: by, rot: Math.PI / 2, attrs: { TAG: `-F${(counters.F = (counters.F || 0) + 1)}`, DESC: `${e.ocpd} A` }, caption: '' });
    }
    wires.push(w);
  }
  const notes = [...(plan.codeLabel ? [plan.codeLabel] : []), ...plan.notes];
  return { symbols, wires, notes };
}

/** Put the laid-out one-line on a new A3 sheet in one change (the caller wraps nothing: this opens the change). Returns the sheet (layout). */
export function placePvOneline(doc, plan, lay, { std = 'iec', title = 'PV one-line', note = '' } = {}) {
  let sheet = null;
  doc.change('ELPVONELINE', () => {
    for (const [name, color] of [['EL-WIRE', 3], ['EL-SYMBOL', 7], ['EL-REPORT', 7]]) if (!doc.layers.has(name)) doc.addLayer({ name, color });
    sheet = addSheet(doc, { size: 'A3', values: { TITLE: title, PROJECT: plan.name } });
    for (const sy of lay.symbols) {
      const blk = symbolBlock(sy.key, std);
      ensureBlock(doc, blk);
      const up = uprightAttloc(blk, sy.rot);
      doc.add({ type: 'insert', block: blk.name, x: sy.x, y: sy.y, sx: 1, sy: 1, rot: sy.rot, layer: 'EL-SYMBOL', attrs: symbolAttrs(sy.key, sy.attrs), ...(up ? { attloc: up } : {}) }, sheet.entities);
      if (sy.caption) doc.add({ type: 'text', layer: 'EL-REPORT', color: null, x: sy.x, y: sy.y - 9, h: 2, rot: 0, s: sy.caption, ha: 'center', va: 'top' }, sheet.entities);
    }
    for (const w of lay.wires) {
      // a wire with a fuse / breaker is drawn in two pieces, ending on the breaker's two pins (5 mm each side of its centre)
      const pieces = w.breaker ? [[w.pts[0], [w.breaker.x - 5, w.breaker.y]], [[w.breaker.x + 5, w.breaker.y], ...w.pts.slice(1)]] : [w.pts];
      for (const pts of pieces) doc.add(pts.length === 2 ? { type: 'line', layer: 'EL-WIRE', color: null, x1: pts[0][0], y1: pts[0][1], x2: pts[1][0], y2: pts[1][1] } : { type: 'poly', layer: 'EL-WIRE', color: null, closed: false, pts: pts.map(([x, y]) => ({ x, y, b: 0 })) }, sheet.entities);
      w.text.forEach((line, i) => doc.add({ type: 'text', layer: 'EL-REPORT', color: null, x: w.tx, y: w.ty + (w.text.length - 1 - i) * 2.6, h: 2, rot: 0, s: line, ha: 'center', va: 'bottom' }, sheet.entities));
    }
    lay.notes.forEach((line, i) => doc.add({ type: 'text', layer: 'EL-REPORT', color: null, x: 25, y: 28 - i * 3, h: 2, rot: 0, s: line, ha: 'left', va: 'baseline' }, sheet.entities));
    if (note) doc.add({ type: 'text', layer: 'EL-REPORT', color: null, x: 25, y: 28 - lay.notes.length * 3, h: 2, rot: 0, s: note, ha: 'left', va: 'baseline' }, sheet.entities);
  });
  return sheet;
}
