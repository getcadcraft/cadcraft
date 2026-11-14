/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-hold.js — the Hold block in CadCraft plan walls (0.9 WT.3 align and lock, lock dimension; WT.7 lock to a grid line; session
 * walls-plan-09). The rules are lib/walls/hold.js (dev/walls/hold.js): keep(), followGrid(), drop(). This is the host's half: where a
 * hold is stored, and the four calls the lib asks the host for (lineOf, grid, dim, move).
 *
 * A hold is stored on its SUBJECT wall (plan2d/walls.js `h`), so it travels with the wall through save, copy, DWG and DXF:
 *   { id, kind: 'line', ref, to: { wall: guid, ref } | { grid: tag }, off }     the wall's line stays `off` mm from the target line
 *   { id, kind: 'end', end: 'a'|'b', to: { grid: tag } }                         that end stays on the grid line (WT.7)
 *   { id, kind: 'dim', dim: 'guidA|guidB', value }                               the distance between two walls keeps its value
 * A grid line in CadCraft is a line on a grid layer with a tag (gridmove.js gridLines). A dimension is named by the two walls it
 * measures between (CadCraft's ids are not stable through a file; a wall's g is).
 */
import { keep, followGrid } from './walls/hold.js';
import { gridLines } from './gridmove.js';
import { squareRows, squareMove } from './walls-joins.js';

const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const unit = (v) => { const L = Math.hypot(v[0], v[1]); return L > 0 ? [v[0] / L, v[1] / L] : [1, 0]; };
const left = (u) => [-u[1], u[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

export const holdsIn = (cur) => [...cur.values()].filter((w) => w.g).flatMap((w) => (w.h || []).map((h) => ({ ...h, wall: w.g })));
export const hasHolds = (cur) => [...cur.values()].some((w) => w.h?.length);

/** The holds with the subject's guid stripped (as stored) for one wall. */
export const storable = (h) => { const { wall, ...rest } = h; void wall; return rest; };

export function context(doc, cur, k) {   // rows come from squareRows (storey and joins), so the hold's moves use the one solver
  const byG = new Map([...cur.values()].filter((w) => w.g).map((w) => [w.g, w]));
  const grids = new Map();
  const gridOf = (tag) => {
    if (!grids.size) for (const l of gridLines(doc)) if (l.tag && !grids.has(l.tag)) grids.set(l.tag, { a: [l.a.x * k, l.a.y * k], b: [l.b.x * k, l.b.y * k] });
    return grids.get(tag) || null;
  };
  return {
    lineOf: (row, ref = 'center') => {
      const u = unit(sub(row.b, row.a)), off = ref === 'left' ? row.t / 2 : ref === 'right' ? -row.t / 2 : 0, n = left(u);
      return { p: [row.a[0] + n[0] * off, row.a[1] + n[1] * off], u };
    },
    grid: gridOf,
    dim: (id, rows) => {
      const [g0, g1] = String(id).split('|'), A = rows.find((r) => r.guid === g0), B = rows.find((r) => r.guid === g1);
      if (!A || !B) return null;
      const u = unit(sub(B.b, B.a)), n = left(u), m = [(A.a[0] + A.b[0]) / 2, (A.a[1] + A.b[1]) / 2];
      const off = dot(sub(m, B.a), n), foot = [m[0] - n[0] * off, m[1] - n[1] * off];
      return { value: Math.abs(off), a: m, b: foot, walls: [g0, g1] };
    },
    move: (rows, guid, d) => squareMove(rows, guid, d),
  };
}

/** After a change (the walls in `cur` are as they now stand): keep every hold; extra walls move. → Map guid → { a:{x,y}, b:{x,y} } (drawing units) of the walls that moved; throws { key } when a hold cannot be kept. */
export function enforce(doc, cur, driven, k, floorId) {
  const holds = holdsIn(cur);
  if (!holds.length) return new Map();
  const rows = squareRows(cur, floorId, null, k);
  const plan = keep(rows, holds, new Map(), context(doc, cur, k), { driven: [...driven] });
  return toUnits(plan, k);
}
/** A grid line moved: the walls held to any grid line follow. */
export function followGrids(doc, cur, k, floorId) {
  const holds = holdsIn(cur), tags = [...new Set(holds.filter((h) => h.to?.grid !== undefined).map((h) => h.to.grid))];
  if (!tags.length) return new Map();
  const ctx = context(doc, cur, k);
  let rows = squareRows(cur, floorId, null, k);
  const all = new Map();
  for (const tag of tags) {
    const plan = followGrid(rows, holds, tag, ctx);
    for (const [g, p] of plan) all.set(g, { ...(all.get(g) || {}), ...p });
    rows = rows.map((r) => (plan.has(r.guid) ? { ...r, a: plan.get(r.guid).a, b: plan.get(r.guid).b } : r));
  }
  return toUnits(all, k);
}
function toUnits(plan, k) {
  const out = new Map();
  for (const [g, p] of plan) out.set(g, { a: { x: p.a[0] / k, y: p.a[1] / k }, b: { x: p.b[0] / k, y: p.b[1] / k } });
  return out;
}
