/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — kinds and keys are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * gridmove.js — moving a grid line carries the set (0.8 round 2, EG.35, CadCraft side). Rules and geometry only (rule 35).
 * A grid line in CadCraft is a line on a grid layer (A-GRID, S-GRID, "Grid"…) with a bubble at an end (a circle and its tag). Moving it
 * across the drawing carries what hangs on it, as STRETCH would with a window round the line:
 *   - lines, polylines and arcs with an end or a vertex on the grid line keep that end on it (walls running between grids stretch,
 *     walls lying along it move whole);
 *   - block references and points on it (columns), circles on it (bubbles, round columns) and text on it (tags) move;
 *   - dimensions move the defining points that sit on it, so they measure the new spacing;
 *   - everything else stays.
 *
 *   gridLines(doc, { layer }) → [{ id, tag, length, angle, a, b }]   the grid lines found (a layer name test, or the given layer)
 *   planGridMove(doc, id, distance, opts) → { updates[{id, entity}], counts, line, normal, box }   nothing is changed
 *   applyGridMove(doc, plan, label) → ids changed                      one undo step
 *   normalOf(line) → { x, y }   the unit normal (left of a → b): + distance moves that way
 */
import { stretchEntity, txEntity, mTranslate, entityBounds, validBounds, dist } from './geom.js';
import { isWall, model as wallModel, canonical as wallCanonical } from './plan2d/walls.js';

export const GRID_LAYER = /(^|[-_ .])(grid|grids|axis|axes|gridline|gridlines)([-_ .]|$)/i;
const LOOK_MAX = 200000;

export const normalOf = (l) => { const d = Math.hypot(l.x2 - l.x1, l.y2 - l.y1) || 1; return { x: -(l.y2 - l.y1) / d, y: (l.x2 - l.x1) / d }; };

const usable = (doc, e) => doc.visible(e) && doc.editable(e);

/** Text within the bubble's reach of a line's end becomes its tag. */
function tagFor(doc, l, texts) {
  let best = null, bd = Infinity;
  for (const e of texts) {
    for (const p of [{ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }]) { const d = dist(p, { x: e.x, y: e.y }); if (d < bd) { bd = d; best = e; } }
  }
  const reach = Math.max(dist({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }) * 0.08, 1);
  return best && bd <= reach ? String(best.s ?? best.text ?? '').slice(0, 20) : '';
}

export function gridLines(doc, { layer = null } = {}) {
  const out = [], texts = [];
  let n = 0;
  for (const e of doc.entities.values()) {
    if (++n > LOOK_MAX) break;
    if (!usable(doc, e)) continue;
    if (e.type === 'text' && (layer ? e.layer === layer : GRID_LAYER.test(e.layer))) texts.push(e);
  }
  n = 0;
  for (const e of doc.entities.values()) {
    if (++n > LOOK_MAX) break;
    if (e.type !== 'line' || !usable(doc, e) || !(layer ? e.layer === layer : GRID_LAYER.test(e.layer))) continue;
    const length = Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
    if (length < 1e-9) continue;
    out.push({ id: e.id, tag: tagFor(doc, e, texts), layer: e.layer, length, angle: Math.atan2(e.y2 - e.y1, e.x2 - e.x1), a: { x: e.x1, y: e.y1 }, b: { x: e.x2, y: e.y2 } });
  }
  return out;
}

/**
 * What moving grid line `id` by `distance` (+ = to the left of a → b) would change. opts: tol (how close counts as on the line, default
 * 0.05% of its length), reach (how far past its ends a bubble may sit, default 15% of its length), skip (a Set of ids that stay).
 */
export function planGridMove(doc, id, distance, opts = {}) {
  const line = doc.get(id);
  if (!line || line.type !== 'line') return null;
  const L = Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
  if (L < 1e-9 || !Number.isFinite(distance)) return null;
  const tol = opts.tol ?? Math.max(L * 5e-4, 1e-6), reach = opts.reach ?? L * 0.15;
  const ux = (line.x2 - line.x1) / L, uy = (line.y2 - line.y1) / L, nx = -uy, ny = ux;
  const dx = nx * distance, dy = ny * distance;
  const along = (p) => (p.x - line.x1) * ux + (p.y - line.y1) * uy;
  const off = (p) => Math.abs((p.x - line.x1) * nx + (p.y - line.y1) * ny);
  const inside = (p) => off(p) <= tol && along(p) >= -reach && along(p) <= L + reach;
  const updates = [], counts = { moved: 0, stretched: 0, dims: 0, notes: 0 };
  let n = 0;
  for (const e of doc.entities.values()) {
    if (++n > LOOK_MAX) break;
    if (opts.skip?.has(e.id) || !usable(doc, e)) continue;
    let out = null;
    if (e.type === 'text' || e.type === 'mtext') {
      const b = entityBounds(e, doc.blocks);
      if (!validBounds(b)) continue;
      const c = { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 }, h = Math.max(b.maxY - b.minY, 0);
      if (off(c) <= Math.max(tol, h * 0.5) && along(c) >= -reach && along(c) <= L + reach) { out = txEntity(e, mTranslate(dx, dy)); counts.notes++; }
    } else if (e.type === 'circle') {
      if (off({ x: e.cx, y: e.cy }) <= Math.max(tol, e.r * 0.05) && along({ x: e.cx, y: e.cy }) >= -reach - e.r && along({ x: e.cx, y: e.cy }) <= L + reach + e.r) { out = txEntity(e, mTranslate(dx, dy)); counts.moved++; }
    } else if (isWall(e)) {
      // a plan wall (0.9 FX.59, walls-plan-09): its ends are what sit on the line, not its insert point. An end on the line goes with it
      // (the wall stretches or shortens, the corner keeps its joins); a wall with both ends on the line moves whole. The insert point
      // used to decide, which carried a whole wall away when it merely started on the line.
      const w = wallModel(e);
      if (w) {
        const ia = inside(w.a), ib = inside(w.b);
        if (ia || ib) { out = wallCanonical(e, { ...w, a: ia ? { x: w.a.x + dx, y: w.a.y + dy } : w.a, b: ib ? { x: w.b.x + dx, y: w.b.y + dy } : w.b }); (ia && ib ? counts.moved++ : counts.stretched++); }
      }
    } else {
      out = stretchEntity(e, inside, dx, dy);
      if (out) {
        if (e.type === 'dim') counts.dims++;
        else if (e.type === 'line' && (Math.abs(out.x1 - e.x1) + Math.abs(out.y1 - e.y1) > 0) !== (Math.abs(out.x2 - e.x2) + Math.abs(out.y2 - e.y2) > 0)) counts.stretched++;
        else if (e.type === 'poly' && out.pts.some((p, i) => p.x === e.pts[i].x && p.y === e.pts[i].y)) counts.stretched++;
        else counts.moved++;
      }
    }
    if (out) { delete out.id; updates.push({ id: e.id, entity: out }); }
  }
  return { updates, counts, line: { id, a: { x: line.x1, y: line.y1 }, b: { x: line.x2, y: line.y2 } }, normal: { x: nx, y: ny }, distance, tol };
}

/** One undo step. Returns the ids changed. */
export function applyGridMove(doc, plan, label = 'GRIDMOVE') {
  const ids = [];
  doc.change(label, () => { for (const u of plan.updates) { doc.update(u.id, u.entity); ids.push(u.id); } });
  return ids;
}
