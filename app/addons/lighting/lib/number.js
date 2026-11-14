/* SPDX-License-Identifier: Apache-2.0 */
/**
 * number.js — unit numbers and channels along the positions (0.8 SU.766). DOM-free.
 *
 *   linkPositions(fixtures, positions, tol) → Map id → position name   fixtures near a position line (drawing units) that name none
 *   numberUnits(fixtures, positions, opts) → { units: Map id → '1', chans: Map id → '101', order: [id], loose: [id], positions: [name] }
 *
 * fixtures: [{ id, x, y, d (a clean fixture: pos, unit, chan …) }], positions: [{ name, pts }] in drawing units.
 * Unit numbers run along each position from its first point (the way it was drawn; `reverse` flips every position), starting
 * again at `start` on each position (the usual plot: "1E-3" = unit 3 on 1st electric) or carrying on over all of them (`restart: false`).
 * Positions go in natural order of their names ("1E", "2E", "10E"). A fixture on no position is `loose` and gets nothing.
 * Channels follow the same order from `chanStart`, by `chanStep`, leaving fixtures that have one when `keepChannels`.
 */
import { project, nearestPosition, natural } from './model.js';

export function linkPositions(fixtures, positions, tol) {
  const out = new Map();
  for (const f of fixtures) {
    if (f.d.pos) continue;
    const hit = nearestPosition(positions, { x: f.x, y: f.y }, tol);
    if (hit) out.set(f.id, hit.name);
  }
  return out;
}

export function numberUnits(fixtures, positions, { start = 1, restart = true, reverse = false, chanStart = null, chanStep = 1, keepChannels = false, only = null } = {}) {
  const byName = new Map();
  for (const p of positions) if (p.name && !byName.has(p.name)) byName.set(p.name, p);
  const groups = new Map(), loose = [];
  for (const f of fixtures) {
    if (only && !only.has(f.id)) continue;
    const pos = byName.get(f.d.pos);
    if (!pos) { loose.push(f.id); continue; }
    let g = groups.get(pos.name);
    if (!g) groups.set(pos.name, (g = []));
    g.push({ f, s: project(pos.pts, { x: f.x, y: f.y }).s });
  }
  const names = [...groups.keys()].sort(natural);
  const units = new Map(), chans = new Map(), order = [];
  let n = start, ch = chanStart;
  for (const name of names) {
    const g = groups.get(name).sort((a, b) => (reverse ? b.s - a.s : a.s - b.s) || natural(a.f.id, b.f.id));
    if (restart) n = start;
    for (const { f } of g) {
      units.set(f.id, String(n++));
      order.push(f.id);
      if (ch !== null) {
        if (keepChannels && f.d.chan) continue;
        chans.set(f.id, String(ch));
        ch += chanStep;
      }
    }
  }
  return { units, chans, order, loose, positions: names };
}
