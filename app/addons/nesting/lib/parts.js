/* SPDX-License-Identifier: Apache-2.0 */
/**
 * parts.js — the Nesting add-on's adapter between CadCraft's drawing and the shared nesting engine (lib/nest, the add-on's synced copy in
 * ./nest/; 0.8 NEST-CAD-PATH, session part_PART_3). DOM-free, so Node tests it. The engine is the same one PartCraft and the Cabinet and
 * Apparel add-ons use (rule 39); this file only reads outlines from the drawing and writes the placed copies back.
 *
 *   partsFrom(entities) → { parts: [{ name, loops, ents, origin }], skipped: [{ id, why: 'open'|'type' }] }
 *       closed polylines (bulges kept: arcs stay arcs) and circles; a closed shape inside another is a hole of the nearest one round it, at any
 *       depth (an island inside a hole is a part of its own). Each part is moved to its own lower-left corner (origin) for the engine.
 *   placedCopies(part, pl, at) → entities: the part's own objects (outline and holes) placed as the engine says (q = at + (x, y) + R(rot)·p), keeping
 *       their layer, colour and linetype unless a layer is given
 *   sheetEntities(result, sheet, at, { gap, labels }) → { sheets: [entity], labels: [entity], offsets: [[x, y]] } — a rectangle per sheet (or the
 *       used length of a roll), side by side from `at`, and the part names over the copies
 */
const TAU = Math.PI * 2;

/** A closed drawing object as a nest loop ({ x, y, b } with DXF bulges), or null. */
export function loopOf(e) {
  if (e.type === 'circle' && e.r > 0) return [{ x: e.cx + e.r, y: e.cy, b: 1 }, { x: e.cx - e.r, y: e.cy, b: 1 }];
  if (e.type === 'poly' && e.closed && e.pts && e.pts.length >= 2) return e.pts.map((p) => ({ x: p.x, y: p.y, b: p.b || 0 }));
  return null;
}
/** Points along a loop for containment tests (bulges as a few chords). */
function flat(loop) {
  const out = [];
  for (let i = 0; i < loop.length; i++) {
    const p = loop[i], q = loop[(i + 1) % loop.length];
    out.push([p.x, p.y]);
    if (Math.abs(p.b || 0) > 1e-12) {
      const th = 4 * Math.atan(p.b), dx = q.x - p.x, dy = q.y - p.y, c = Math.hypot(dx, dy), r = c / (2 * Math.sin(th / 2));
      // the centre is on the chord's left (signed r: a negative bulge turns clockwise, its centre on the right)
      const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2, h = r * Math.cos(th / 2), nx = -dy / c, ny = dx / c, cx = mx + nx * h, cy = my + ny * h;
      const a0 = Math.atan2(p.y - cy, p.x - cx), R = Math.abs(r);
      for (let k = 1; k < 8; k++) { const a = a0 + th * k / 8; out.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]); }
    }
  }
  return out;
}
const area = (pts) => { let s = 0; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s) / 2; };
const inside = (pt, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > pt[1]) !== (b[1] > pt[1]) && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };

export function partsFrom(entities) {
  const shapes = [], skipped = [];
  for (const e of entities) {
    const loop = loopOf(e);
    if (!loop) { skipped.push({ id: e.id, why: e.type === 'poly' || e.type === 'circle' ? 'open' : 'type' }); continue; }
    const f = flat(loop);
    shapes.push({ e, loop, f, a: area(f) });
  }
  // the nearest shape round each one (the smallest that contains its first point); depth by walking up
  for (const s of shapes) {
    let best = null;
    for (const o of shapes) if (o !== s && o.a > s.a && inside(s.f[0], o.f) && (!best || o.a < best.a)) best = o;
    s.parent = best;
  }
  const depth = (s) => { let d = 0; for (let p = s.parent; p; p = p.parent) d++; return d; };
  const parts = [];
  for (const s of shapes) if (depth(s) % 2 === 0) {
    const holes = shapes.filter((h) => h.parent === s && depth(h) % 2 === 1);
    let x0 = Infinity, y0 = Infinity;
    for (const [x, y] of s.f) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); }
    const shift = (l) => l.map((p) => ({ x: p.x - x0, y: p.y - y0, b: p.b }));
    parts.push({ name: s.e.name || s.e.layer || '', loops: [shift(s.loop), ...holes.map((h) => shift(h.loop))], ents: [s.e, ...holes.map((h) => h.e)], origin: [x0, y0] });
  }
  return { parts, skipped };
}

/** One object of a part placed: translate to the part's origin, turn by rot, then move to (x, y) + at. */
export function placeEntity(e, origin, pl, at, layer = null) {
  const c = Math.cos(pl.rot), s = Math.sin(pl.rot);
  const T = (x, y) => { const u = x - origin[0], v = y - origin[1]; return { x: at[0] + pl.x + c * u - s * v, y: at[1] + pl.y + s * u + c * v }; };
  const keep = { layer: layer || e.layer, color: e.color ?? null, ...(e.linetype ? { linetype: e.linetype } : {}) };
  if (e.type === 'circle') { const q = T(e.cx, e.cy); return { type: 'circle', ...keep, cx: q.x, cy: q.y, r: e.r }; }
  return { type: 'poly', ...keep, closed: true, pts: e.pts.map((p) => ({ ...T(p.x, p.y), b: p.b || 0 })) };
}
export const placedCopies = (part, pl, at, layer = null) => part.ents.map((e) => placeEntity(e, part.origin, pl, at, layer));

export function sheetEntities(result, sheet, at, { gap = null, layer = 'NEST-SHEET', labelLayer = 'NEST-LABELS', textH = null } = {}) {
  const n = Math.max(1, result.sheets.length);
  const W = sheet.w && Number.isFinite(sheet.w) ? sheet.w : null, H = sheet.h;
  const g = gap ?? Math.max(20, 0.1 * H);
  const sheets = [], offsets = [];
  let x = at[0];
  for (let k = 0; k < n; k++) {
    const w = W ?? Math.max(1, result.sheets[k]?.used || result.length || 1);
    offsets.push([x, at[1]]);
    sheets.push({ type: 'poly', layer, color: null, closed: true, pts: [{ x, y: at[1], b: 0 }, { x: x + w, y: at[1], b: 0 }, { x: x + w, y: at[1] + H, b: 0 }, { x, y: at[1] + H, b: 0 }] });
    x += w + g;
  }
  const h = textH ?? Math.max(1, H / 60);
  const labels = result.placed.map((pl) => {
    const o = offsets[pl.sheet] || offsets[0];
    let cx = 0, cy = 0; const L = pl.loops[0]; for (const p of L) { cx += p.x; cy += p.y; } cx /= L.length; cy /= L.length;
    return { type: 'text', layer: labelLayer, color: null, x: o[0] + cx, y: o[1] + cy, h, rot: 0, s: pl.name || String(pl.part + 1), ha: 'center', va: 'middle' };
  });
  return { sheets, labels, offsets };
}
export { TAU };
