/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — what a lighting plot is made of (0.8 SU.766, session `cad-addons-08`). DOM-free.
 *
 * A fixture ("instrument") is data on a block reference: its type, the unit number on its position, the channel, the dimmer or
 * DMX address, the purpose, the colour (gel) and the wattage. A position is a pipe, truss, boom or floor line the fixtures hang on,
 * drawn as a polyline with a name. Every measure here is in millimetres; `k` converts to drawing units.
 *
 * The fixture types are our own list (generic kinds of instrument, not any maker's product line) with the wattage and the number of
 * DMX channels a typical one takes; every value can be overridden per fixture.
 *
 *   FIXTURE_TYPES · typeOf(key) · cleanFixture(data) → clean fixture | null · cleanPosition(data) → clean position | null
 *   fixtureClass(type) 'Lighting-Fixtures-Profile' · positionClass(kind) 'Rigging-Pipe' · watts(fix) · footprint(fix)
 *   natural(a, b) numeric-aware sort · parseAddress("2/045" | "45") → { universe, addr } | null
 */

export const FIXTURE_TYPES = [
  { key: 'profile', name: 'Profile', watts: 750, footprint: 1, group: 'conventional' },
  { key: 'fresnel', name: 'Fresnel', watts: 1000, footprint: 1, group: 'conventional' },
  { key: 'pc', name: 'PC', watts: 1000, footprint: 1, group: 'conventional' },
  { key: 'par', name: 'PAR', watts: 1000, footprint: 1, group: 'conventional' },
  { key: 'cyc', name: 'Cyc light', watts: 1000, footprint: 1, group: 'conventional' },   // i18n-ignore (the name only builds the class name)
  { key: 'blinder', name: 'Blinder', watts: 650, footprint: 1, group: 'conventional' },
  { key: 'scoop', name: 'Scoop', watts: 1000, footprint: 1, group: 'conventional' },
  { key: 'follow', name: 'Followspot', watts: 1200, footprint: 1, group: 'conventional' },
  { key: 'led', name: 'LED wash', watts: 200, footprint: 8, group: 'led' },   // i18n-ignore (the name only builds the class name)
  { key: 'mover', name: 'Moving head', watts: 350, footprint: 24, group: 'moving' },   // i18n-ignore (the name only builds the class name)
];
const BY_KEY = new Map(FIXTURE_TYPES.map((x) => [x.key, x]));
export const typeOf = (key) => BY_KEY.get(key) || null;

export const POSITION_KINDS = ['pipe', 'truss', 'boom', 'floor'];

const str = (v, max = 80) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : v == null ? '' : String(v).slice(0, max));
const posNum = (v) => { const n = Number(v); return Number.isFinite(n) && n > 0 ? n : null; };

export function cleanFixture(data) {
  if (!data || typeof data !== 'object') return null;
  const type = BY_KEY.has(data.type) ? data.type : null;
  if (!type) return null;
  const u = data.u === 'in' ? 'in' : 'mm';
  const k = posNum(data.k) || 1;
  const fp = Number(data.footprint);
  return {
    u, k, type,
    pos: str(data.pos, 40), unit: str(data.unit, 16), chan: str(data.chan, 16), addr: str(data.addr, 16),
    purpose: str(data.purpose, 60), color: str(data.color, 40), note: str(data.note, 120),
    watts: posNum(data.watts), footprint: Number.isInteger(fp) && fp >= 1 && fp <= 512 ? fp : null,
    aim: Number.isFinite(Number(data.aim)) ? ((Number(data.aim) % 360) + 360) % 360 : 0,
  };
}
export const stored = (f) => ({ ...f });

export function cleanPosition(data) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.pts)) return null;
  const pts = [];
  for (const p of data.pts.slice(0, 200)) { const x = Number(p?.x), y = Number(p?.y); if (Number.isFinite(x) && Number.isFinite(y)) pts.push({ x, y }); }
  const kind = POSITION_KINDS.includes(data.kind) ? data.kind : 'pipe';
  if (pts.length < (kind === 'boom' ? 1 : 2)) return null;
  const trim = Number(data.trim);
  return { u: data.u === 'in' ? 'in' : 'mm', k: posNum(data.k) || 1, name: str(data.name, 40), kind, pts, trim: Number.isFinite(trim) && trim >= 0 ? trim : null };
}

export const fixtureClass = (type) => 'Lighting-Fixtures-' + (typeOf(type)?.name.replace(/[^A-Za-z0-9]+/g, '') || 'Other');
export const positionClass = (kind) => 'Rigging-' + (kind[0].toUpperCase() + kind.slice(1));
export const watts = (f) => f.watts ?? typeOf(f.type)?.watts ?? 0;
export const footprint = (f) => f.footprint ?? typeOf(f.type)?.footprint ?? 1;

export const natural = (a, b) => String(a).localeCompare(String(b), 'en', { numeric: true, sensitivity: 'base' });

/** "2/045" → universe 2, address 45; "45" → universe 1; anything else null. */
export function parseAddress(s) {
  const m = /^\s*(?:(\d{1,3})\s*[/.:]\s*)?(\d{1,3})\s*$/.exec(String(s ?? ''));
  if (!m) return null;
  const addr = Number(m[2]);
  return addr >= 1 && addr <= 512 ? { universe: m[1] ? Number(m[1]) : 1, addr } : null;
}

// ------------------------------------------------------------------------------------------------ geometry on a position

export function lengthOf(pts) { let L = 0; for (let i = 0; i + 1 < pts.length; i++) L += Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y); return L; }

/** Where a point is on a polyline: { s (distance along from its first point), off (distance from the line), at (nearest point) }. */
export function project(pts, p) {
  if (pts.length === 1) return { s: 0, off: Math.hypot(p.x - pts[0].x, p.y - pts[0].y), at: pts[0] };
  let best = null, run = 0;
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i], b = pts[i + 1], dx = b.x - a.x, dy = b.y - a.y, l2 = dx * dx + dy * dy, l = Math.sqrt(l2);
    const u = l2 ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2)) : 0;
    const q = { x: a.x + u * dx, y: a.y + u * dy }, off = Math.hypot(p.x - q.x, p.y - q.y);
    if (!best || off < best.off) best = { s: run + u * l, off, at: q };
    run += l;
  }
  return best;
}

/** The position (by name) a point belongs to: the nearest within `tol` drawing units, or null. positions: [{ name, pts }] in drawing units. */
export function nearestPosition(positions, p, tol) {
  let best = null;
  for (const pos of positions) {
    if (!pos.name) continue;
    const r = project(pos.pts, p);
    if (r.off <= tol && (!best || r.off < best.off)) best = { name: pos.name, off: r.off, s: r.s };
  }
  return best;
}
