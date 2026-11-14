/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cabinet.js — control-cabinet layout: the back panel, DIN rails, ducts and the modules on them (0.8 SU.892). DOM-free, millimetres.
 *
 *   MODULES · moduleFor(device group) · cabinetParts(schem) → [{ id, tag, role, type, mfr, part, order, desc, devices }]
 *   cleanPanel · cleanRail · cleanDuct · cleanModule(data) → clean | null
 *   panelEnts / railEnts / ductEnts / moduleEnts (data, k) → entities in the object's own frame
 *   railPlace(entity, data, k) → { x, y, rot, len, k } of a rail; toRail(rail, p) → { s, off } of a world point; fromRail(rail, s, off) → world point
 *   onRail(rail, mods, tol) → modules lying on the rail, with [s0, s1] along it, in order
 *   railChecks(rail, mods) → [{ code, ids, vars }]  ('overlap' · 'past')  ·  freeLength(rail, mods) → mm
 *   snapOnRail(rail, mods, w, s, snap) → s (centre) where a module of width w may sit
 */
const ln = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
const poly = (pts, closed = true) => ({ type: 'poly', pts: pts.map(([x, y]) => ({ x, y })), closed });
const rect = (x0, y0, x1, y1) => poly([[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
const text = (x, y, h, s, rot = 0) => ({ type: 'text', x, y, h, rot, s: String(s), ha: 'center', va: 'middle' });

// width (mm), height (mm), depth (mm): typical outside sizes of DIN-rail devices, one module = 17.5 mm
export const MODULES = [
  { key: 'mcb1', w: 17.5, h: 90, d: 70 }, { key: 'mcb2', w: 35, h: 90, d: 70 }, { key: 'mcb3', w: 52.5, h: 90, d: 70 }, { key: 'mcb4', w: 70, h: 90, d: 70 },
  { key: 'mpcb', w: 45, h: 90, d: 80 }, { key: 'contactor', w: 45, h: 85, d: 90 }, { key: 'relay', w: 15.5, h: 78, d: 70 }, { key: 'overload', w: 45, h: 85, d: 90 },
  { key: 'terminal', w: 6.2, h: 56, d: 42 }, { key: 'psu', w: 70, h: 90, d: 60 }, { key: 'plc', w: 105, h: 100, d: 75 }, { key: 'generic', w: 45, h: 90, d: 60 },
];
const BY = new Map(MODULES.map((m) => [m.key, m]));
export const moduleType = (key) => BY.get(key) || null;

const PLACEABLE = new Set(['coil', 'device', 'plc', 'terminal']);
// symbol → module (field devices — motors, lamps, switches — are not in the cabinet)
const SYM_MODULE = [
  [/^breaker\.motor$/, 'mpcb'], [/^overload$/, 'overload'], [/^(breaker|rcd|rcbo|fuse|disconnector)\.4p$/, 'mcb4'], [/^(breaker|rcd|rcbo|fuse|disconnector)\.3p$/, 'mcb3'], [/^(breaker|rcd|rcbo|fuse|disconnector)\.2p$/, 'mcb2'],
  [/^(breaker|rcbo|fuse|disconnector)$/, 'mcb1'], [/^transformer$/, 'psu'], [/^plc\./, 'plc'], [/^terminal$/, 'terminal'], [/^coil$/, 'contactor'],
];
const FIELD = /^(motor|lamp|horn|pushbutton|switch)\b/;

/** The module type for a schematic symbol key, or null when the device belongs in the field. */
export function moduleFor(sym) {
  if (FIELD.test(sym)) return null;
  for (const [re, key] of SYM_MODULE) if (re.test(sym)) return key;
  return null;
}

/** One part per device tag (a terminal: per tag and number) that stands in the cabinet. schem = readSchematic(doc). */
export function cabinetParts(schem, partId) {
  const rank = { coil: 3, device: 2, plc: 2, terminal: 1 };
  const by = new Map();
  for (const d of schem.devices) {
    if (!PLACEABLE.has(d.role) || !d.tag) continue;
    const id = partId(d), cur = by.get(id);
    if (!cur) by.set(id, { id, tag: d.tag, role: d.role, sym: d.sym, devices: [d], main: d });
    else { cur.devices.push(d); if ((rank[d.role] || 0) > (rank[cur.main.role] || 0)) { cur.main = d; cur.role = d.role; cur.sym = d.sym; } }
  }
  const out = [];
  for (const p of by.values()) {
    const type = moduleFor(p.sym);
    if (!type) continue;
    const a = p.main.attrs || {};
    out.push({ id: p.id, tag: p.tag, role: p.role, type, mfr: String(a.MFR || ''), part: String(a.PART || ''), order: String(a.ORDER || ''), desc: String(a.DESC || ''), devices: p.devices });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
}

const num = (v, lo, hi) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : null; };
const str = (v, max = 80) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '');
const base = (d) => ({ k: num(d.k, 1e-9, 1e9) || 1, name: str(d.name, 60) });

export function cleanPanel(d) { if (!d || typeof d !== 'object') return null; const w = num(d.w, 50, 10000), h = num(d.h, 50, 10000); return w && h ? { ...base(d), w, h, depth: num(d.depth, 10, 2000) || 250 } : null; }
export function cleanRail(d) { if (!d || typeof d !== 'object') return null; const len = num(d.len, 10, 10000); return len ? { ...base(d), len, w: num(d.w, 5, 100) || 35 } : null; }
export function cleanDuct(d) { if (!d || typeof d !== 'object') return null; const len = num(d.len, 10, 10000), w = num(d.w, 5, 400); return len && w ? { ...base(d), len, w, depth: num(d.depth, 5, 400) || 60 } : null; }
export function cleanModule(d) {
  if (!d || typeof d !== 'object') return null;
  const type = BY.has(d.type) ? d.type : 'generic', m = BY.get(type);
  return { ...base(d), tag: str(d.tag, 40), type, w: num(d.w, 2, 2000) || m.w, h: num(d.h, 2, 2000) || m.h, depth: num(d.depth, 2, 2000) || m.d, mfr: str(d.mfr, 60), part: str(d.part, 60) };
}

export function panelEnts(p) {
  const out = [rect(0, 0, p.w * p.k, p.h * p.k), rect(10 * p.k, 10 * p.k, (p.w - 10) * p.k, (p.h - 10) * p.k)];
  if (p.name) out.push(text(p.w * p.k / 2, (p.h - 5) * p.k, 6 * p.k, p.name));
  return out;
}
export function railEnts(r) {
  const k = r.k, h = r.w / 2;
  return [rect(0, -h * k, r.len * k, h * k), ln(0, 0, r.len * k, 0)];
}
export function ductEnts(d) {
  const k = d.k, h = d.w / 2, out = [rect(0, -h * k, d.len * k, h * k)];
  for (let s = 12.5; s < d.len; s += 25) out.push(ln(s * k, -h * k * 0.55, s * k, h * k * 0.55));
  return out;
}
export function moduleEnts(m) {
  const k = m.k, w = m.w * k, h = m.h * k;
  const out = [rect(-w / 2, -h / 2, w / 2, h / 2)];
  const th = Math.max(Math.min(w * 0.55, 5 * k), 1.8 * k);
  if (m.tag) out.push(text(0, 0, th, m.tag, m.w < 20 ? Math.PI / 2 : 0));
  return out;
}

// ------------------------------------------------------------------------------------------------ rails

/** A rail entity placed in the drawing: { x, y, rot, len (mm), k, w }. */
export const railPlace = (e, d) => ({ x: e.x, y: e.y, rot: e.rot || 0, len: d.len, k: d.k, w: d.w });
export function toRail(r, p) {
  const c = Math.cos(r.rot), s = Math.sin(r.rot), dx = p.x - r.x, dy = p.y - r.y;
  return { s: (dx * c + dy * s) / r.k, off: (-dx * s + dy * c) / r.k };
}
export function fromRail(r, s, off = 0) {
  const c = Math.cos(r.rot), si = Math.sin(r.rot);
  return { x: r.x + (s * c - off * si) * r.k, y: r.y + (s * si + off * c) * r.k };
}

/** mods = [{ id, e, d (clean module) }] → those on the rail (centre within the rail's width + tol), with s0 / s1 in mm along it, in order. */
export function onRail(r, mods, tol = 5) {
  const out = [];
  for (const m of mods) {
    const p = toRail(r, { x: m.e.x, y: m.e.y });
    if (Math.abs(p.off) <= r.w / 2 + tol && p.s > -tol && p.s < r.len + tol) out.push({ ...m, s: p.s, s0: p.s - m.d.w / 2, s1: p.s + m.d.w / 2 });
  }
  return out.sort((a, b) => a.s - b.s);
}

export function railChecks(r, mods) {
  const out = [];
  for (let i = 0; i < mods.length; i++) {
    const m = mods[i];
    if (m.s0 < -0.01 || m.s1 > r.len + 0.01) out.push({ code: 'past', ids: [m.id], vars: { tag: m.d.tag, len: r.len } });
    for (let j = i + 1; j < mods.length && mods[j].s0 < m.s1 - 0.01; j++) out.push({ code: 'overlap', ids: [m.id, mods[j].id], vars: { a: m.d.tag, b: mods[j].d.tag } });
  }
  return out;
}
export const freeLength = (r, mods) => Math.max(0, r.len - mods.reduce((s, m) => s + m.d.w, 0));

/** Where a module of width w whose centre is wanted at s may sit: inside the rail, and flush to a neighbour's edge when within `snap` mm. */
export function snapOnRail(r, mods, w, s, snap = 3) {
  let c = Math.max(w / 2, Math.min(r.len - w / 2, s));
  for (const m of mods) {
    for (const edge of [m.s1 + w / 2, m.s0 - w / 2]) if (Math.abs(c - edge) <= snap) c = edge;
  }
  return Math.max(w / 2, Math.min(r.len - w / 2, c));
}
