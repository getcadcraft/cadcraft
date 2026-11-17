/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rules and geometry only; the words a person sees are in overkill-cmd.js. */
/**
 * overkill.js — delete duplicate and overlapping objects (1.0 ORS.3). DOM-free: geometry and rules only.
 *
 * Of the objects given (the editable ones), in the drawing's own draw order:
 *   1. duplicates       two objects with the same geometry (within the tolerance) and the same properties: the later one goes.
 *                       Lines and polylines also match drawn the other way round. Every object type is compared.
 *   2. overlaps         lines on one straight line that overlap become one line (a line lying inside another just goes);
 *                       arcs on one circle that overlap become one arc (a full turn becomes a circle; an arc on a circle goes).
 *   3. end to end       lines on one straight line, and arcs on one circle, that only touch at their ends become one piece.
 * "Same properties" = layer, color, linetype, linetype scale, lineweight, thickness, transparency and height (Z); any of the
 * first seven can be ignored (`ignore`), and then the piece that stays keeps its own. The object that stays is the first in
 * draw order, so nothing moves in front of anything. Objects with different extended data (a wall, a floor, a class) are
 * never called duplicates.
 *
 *   planOverkill(doc, ids, { tol, ignore, overlap, ends }) → { remove: [id], updates: [{ id, entity }], counts: { looked,
 *       duplicates, overlaps, joined }, tol }                 nothing is changed
 *   applyOverkill(doc, plan, label) → number of objects removed          one undo step
 *   IGNORABLE   the property names `ignore` (a Set or an array) may hold
 *
 * Not done (said in the help): segments inside a polyline are not thinned, a line lying on a polyline's segment stays, and
 * overlapping pieces of different types (a line on a polyline) are left alone.
 */
import { TAU, normAngle, entityBounds, validBounds } from './geom.js';

export const IGNORABLE = ['color', 'layer', 'linetype', 'ltscale', 'lineweight', 'thickness', 'transparency'];
export const DEFAULT_TOL = 1e-6;
const PROP_FIELDS = { color: 'color', layer: 'layer', linetype: 'lt', ltscale: 'lts', lineweight: 'lw', thickness: 'th', transparency: 'tr' };
const SKIP = new Set(['id', 'key', 'handle', 'ccref', ...Object.values(PROP_FIELDS)]);

/** The properties two objects must share, as one string (the ignored ones left out). */
export function propKey(e, ignore) {
  let k = '';
  for (const name of IGNORABLE) {
    if (ignore.has(name)) continue;
    const v = e[PROP_FIELDS[name]];
    k += '|' + (v === undefined || v === null ? '' : typeof v === 'object' ? JSON.stringify(v) : String(v));
  }
  return k;
}

const nearN = (a, b, tol) => Math.abs(a - b) <= tol;
/** Any two values the same, numbers within tol (the generic duplicate test: text, block references, hatches, dimensions…). */
function deepNear(a, b, tol, top = false) {
  if (a === b) return true;
  if (typeof a === 'number' && typeof b === 'number') return nearN(a, b, tol);
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return (a ?? null) === (b ?? null);
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) { if (a.length !== b.length) return false; for (let i = 0; i < a.length; i++) if (!deepNear(a[i], b[i], tol)) return false; return true; }
  const ka = Object.keys(a).filter((k) => !(top && SKIP.has(k)) && a[k] !== undefined), kb = Object.keys(b).filter((k) => !(top && SKIP.has(k)) && b[k] !== undefined);
  if (ka.length !== kb.length) return false;
  for (const k of ka) { if (!Object.prototype.hasOwnProperty.call(b, k) || b[k] === undefined) return false; if (!deepNear(a[k], b[k], tol)) return false; }
  return true;
}
const rest = (e, drop) => { const o = {}; for (const k of Object.keys(e)) if (!SKIP.has(k) && !drop.includes(k)) o[k] = e[k]; return o; };
const angNear = (a, b, r, tol) => { const d = Math.abs(normAngle(a) - normAngle(b)); return Math.min(d, TAU - d) * Math.max(r, 1e-12) <= tol; };

/** The same geometry? Lines and polylines also match reversed. */
export function sameGeometry(a, b, tol) {
  if (a.type !== b.type) return false;
  switch (a.type) {
    case 'line': {
      const fw = nearN(a.x1, b.x1, tol) && nearN(a.y1, b.y1, tol) && nearN(a.x2, b.x2, tol) && nearN(a.y2, b.y2, tol);
      const bw = nearN(a.x1, b.x2, tol) && nearN(a.y1, b.y2, tol) && nearN(a.x2, b.x1, tol) && nearN(a.y2, b.y1, tol);
      if (!fw && !bw) return false;
      const z = fw ? nearN(a.z1 || 0, b.z1 || 0, tol) && nearN(a.z2 || 0, b.z2 || 0, tol) : nearN(a.z1 || 0, b.z2 || 0, tol) && nearN(a.z2 || 0, b.z1 || 0, tol);
      return z && deepNear(rest(a, ['x1', 'y1', 'x2', 'y2', 'z1', 'z2']), rest(b, ['x1', 'y1', 'x2', 'y2', 'z1', 'z2']), tol);
    }
    case 'arc':
      return nearN(a.cx, b.cx, tol) && nearN(a.cy, b.cy, tol) && nearN(a.r, b.r, tol) && angNear(a.a0, b.a0, a.r, tol) && angNear(a.a1, b.a1, a.r, tol)
        && deepNear(rest(a, ['cx', 'cy', 'r', 'a0', 'a1']), rest(b, ['cx', 'cy', 'r', 'a0', 'a1']), tol);
    case 'poly': {
      if (!Array.isArray(a.pts) || !Array.isArray(b.pts) || a.pts.length !== b.pts.length || !!a.closed !== !!b.closed) return false;
      if (!deepNear(rest(a, ['pts']), rest(b, ['pts']), tol)) return false;
      const n = a.pts.length, others = (p) => { const o = { ...p }; delete o.x; delete o.y; delete o.b; return o; };
      const fw = a.pts.every((p, i) => nearN(p.x, b.pts[i].x, tol) && nearN(p.y, b.pts[i].y, tol) && nearN(p.b || 0, b.pts[i].b || 0, 1e-9) && deepNear(others(p), others(b.pts[i]), tol));
      if (fw) return true;
      if (a.closed) return false;   // a closed polyline drawn the other way round starts its segments elsewhere: left alone
      // reversed: vertex i ↔ n-1-i; the bulge of segment i (after vertex i) is minus the bulge after vertex n-2-i
      return a.pts.every((p, i) => { const q = b.pts[n - 1 - i]; const bb = i < n - 1 ? -(b.pts[n - 2 - i].b || 0) : 0; return nearN(p.x, q.x, tol) && nearN(p.y, q.y, tol) && nearN(i < n - 1 ? (p.b || 0) : 0, bb, 1e-9) && Object.keys(others(p)).length === 0 && Object.keys(others(q)).length === 0; });
    }
    default:
      return deepNear(a, b, tol, true);
  }
}

/** A point hash: put(x, y, item) and near(x, y) → the items within one cell of the point (a superset of those within tol). */
class PointHash {
  constructor(cell) { this.c = cell; this.m = new Map(); }
  k(i, j) { return i + ',' + j; }
  put(x, y, item) { const k = this.k(Math.round(x / this.c), Math.round(y / this.c)); const l = this.m.get(k); if (l) l.push(item); else this.m.set(k, [item]); }
  near(x, y) {
    const i = Math.round(x / this.c), j = Math.round(y / this.c), out = [];
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const l = this.m.get(this.k(i + a, j + b)); if (l) for (const it of l) out.push(it); }
    return out;
  }
}

/** Boxes in a coarse grid: add(box, item), query(box) → items whose box may meet it (each once). */
class BoxHash {
  constructor(ext, n) {
    const w = Math.max(ext.maxX - ext.minX, 1e-9), h = Math.max(ext.maxY - ext.minY, 1e-9), cells = Math.max(1, Math.ceil(n / 3)), asp = w / h;
    this.x0 = ext.minX; this.y0 = ext.minY;
    this.nx = Math.max(1, Math.min(400, Math.round(Math.sqrt(cells * asp)))); this.ny = Math.max(1, Math.min(400, Math.round(Math.sqrt(cells / asp))));
    this.cw = w / this.nx; this.ch = h / this.ny;
    this.cells = new Map(); this.loose = [];
    this.many = Math.max(64, (this.nx * this.ny) >> 5);
  }
  span(b) {
    const c = (v, o, s, n) => Math.max(0, Math.min(n - 1, Math.floor((v - o) / s)));
    return [c(b.minX, this.x0, this.cw, this.nx), c(b.maxX, this.x0, this.cw, this.nx), c(b.minY, this.y0, this.ch, this.ny), c(b.maxY, this.y0, this.ch, this.ny)];
  }
  add(b, item) {
    const [i0, i1, j0, j1] = this.span(b);
    if ((i1 - i0 + 1) * (j1 - j0 + 1) > this.many) { this.loose.push(item); return; }
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const k = j * this.nx + i; const l = this.cells.get(k); if (l) l.push(item); else this.cells.set(k, [item]); }
  }
  query(b) {
    const [i0, i1, j0, j1] = this.span(b), seen = new Set(this.loose);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const l = this.cells.get(j * this.nx + i); if (l) for (const it of l) seen.add(it); }
    return seen;
  }
}

class Sets {   // union-find over array indexes
  constructor(n) { this.p = Array.from({ length: n }, (_, i) => i); }
  find(i) { while (this.p[i] !== i) { this.p[i] = this.p[this.p[i]]; i = this.p[i]; } return i; }
  join(a, b) { a = this.find(a); b = this.find(b); if (a !== b) this.p[Math.max(a, b)] = Math.min(a, b); }
}

const lineLen = (l) => Math.hypot(l.x2 - l.x1, l.y2 - l.y1);
const flatLine = (l) => !(l.z1 || l.z2);

/**
 * What OVERKILL would do to the objects `ids` (default: every object of the open space). Nothing is changed.
 * opts: tol (≥ 0, default 1e-6), ignore (Set / array of IGNORABLE names), overlap (merge overlapping pieces, default true),
 * ends (join pieces that only touch end to end, default true).
 */
export function planOverkill(doc, ids = null, opts = {}) {
  const tol = Number.isFinite(opts.tol) && opts.tol >= 0 ? opts.tol : DEFAULT_TOL;
  const ignore = new Set([...(opts.ignore || [])].filter((n) => IGNORABLE.includes(n)));
  const overlap = opts.overlap !== false, ends = opts.ends !== false;
  const want = ids ? new Set(ids) : null;
  const ents = [];
  for (const e of doc.entities.values()) if ((!want || want.has(e.id)) && doc.editable(e)) ents.push(e);   // draw order
  const counts = { looked: ents.length, duplicates: 0, overlaps: 0, joined: 0 };
  const gone = new Set(), updates = new Map();
  const order = new Map(ents.map((e, i) => [e.id, i]));
  const T = Math.max(tol, 1e-12);

  // 1. duplicates: same type, same properties, same geometry — found by the lower-left corner of their boxes
  {
    const hash = new PointHash(Math.max(T * 4, 1e-9));
    for (const e of ents) {
      const b = entityBounds(e, doc.blocks);
      const ax = validBounds(b) ? b.minX : 0, ay = validBounds(b) ? b.minY : 0;
      const pk = e.type + propKey(e, ignore);
      let dup = false;
      for (const o of hash.near(ax, ay)) {
        if (o.pk !== pk || !nearN(o.ax, ax, T * 2) || !nearN(o.ay, ay, T * 2)) continue;
        if (sameGeometry(o.e, e, T)) { dup = true; break; }
      }
      if (dup) { gone.add(e.id); counts.duplicates++; } else hash.put(ax, ay, { e, pk, ax, ay });
    }
  }

  if (overlap || ends) {
    // 2 + 3. lines on one straight line
    const lines = ents.filter((e) => e.type === 'line' && !gone.has(e.id) && flatLine(e) && lineLen(e) > T);
    if (lines.length > 1) {
      const ext = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
      const boxes = lines.map((l) => { const b = { minX: Math.min(l.x1, l.x2) - T, minY: Math.min(l.y1, l.y2) - T, maxX: Math.max(l.x1, l.x2) + T, maxY: Math.max(l.y1, l.y2) + T }; ext.minX = Math.min(ext.minX, b.minX); ext.minY = Math.min(ext.minY, b.minY); ext.maxX = Math.max(ext.maxX, b.maxX); ext.maxY = Math.max(ext.maxY, b.maxY); return b; });
      const grid = new BoxHash(ext, lines.length);
      const pks = lines.map((l) => propKey(l, ignore) + '|' + (l.z || 0));
      lines.forEach((l, i) => grid.add(boxes[i], i));
      const sets = new Sets(lines.length), kind = new Map();   // kind: root → 'overlap' seen
      // b's ends on a's straight line, and the two stretches overlap (or touch): → 'overlap' | 'touch' | null
      const relate = (a, b) => {
        const L = lineLen(a), ux = (a.x2 - a.x1) / L, uy = (a.y2 - a.y1) / L;
        const off = (x, y) => Math.abs((x - a.x1) * uy - (y - a.y1) * ux);
        if (off(b.x1, b.y1) > T || off(b.x2, b.y2) > T) return null;
        const t1 = (b.x1 - a.x1) * ux + (b.y1 - a.y1) * uy, t2 = (b.x2 - a.x1) * ux + (b.y2 - a.y1) * uy, lo = Math.min(t1, t2), hi = Math.max(t1, t2);
        const common = Math.min(L, hi) - Math.max(0, lo);
        if (common > T) return 'overlap';
        return common >= -T ? 'touch' : null;
      };
      const pairs = [];
      for (let i = 0; i < lines.length; i++) {
        for (const j of grid.query(boxes[i])) {
          if (j <= i || pks[i] !== pks[j]) continue;
          const a = lineLen(lines[i]) >= lineLen(lines[j]) ? i : j, b = a === i ? j : i;   // measure from the longer one
          const r = relate(lines[a], lines[b]);
          if (r === 'overlap' ? overlap : r === 'touch' ? ends : false) pairs.push([i, j, r]);
        }
      }
      for (const [i, j] of pairs) sets.join(i, j);
      for (const [i, , r] of pairs) if (r === 'overlap') kind.set(sets.find(i), true);
      const groups = new Map();
      lines.forEach((_, i) => { const r = sets.find(i); if (!groups.has(r)) groups.set(r, []); groups.get(r).push(i); });
      for (const [root, g] of groups) {
        if (g.length < 2) continue;
        // along the longest member; a chain that bends away from it by more than the tolerance is left as it is
        const ref = lines[g.reduce((m, i) => (lineLen(lines[i]) > lineLen(lines[m]) ? i : m), g[0])];
        const L = lineLen(ref), ux = (ref.x2 - ref.x1) / L, uy = (ref.y2 - ref.y1) / L;
        let lo = Infinity, hi = -Infinity, bent = false;
        for (const i of g) for (const [x, y] of [[lines[i].x1, lines[i].y1], [lines[i].x2, lines[i].y2]]) {
          if (Math.abs((x - ref.x1) * uy - (y - ref.y1) * ux) > T * 2) bent = true;
          const tt = (x - ref.x1) * ux + (y - ref.y1) * uy; lo = Math.min(lo, tt); hi = Math.max(hi, tt);
        }
        if (bent) continue;
        const keep = lines[g[0]];   // g is in draw order: the first stays, with its own properties and direction
        const fwd = (keep.x2 - keep.x1) * ux + (keep.y2 - keep.y1) * uy >= 0;
        const p0 = { x: ref.x1 + ux * lo, y: ref.y1 + uy * lo }, p1 = { x: ref.x1 + ux * hi, y: ref.y1 + uy * hi };
        const a = fwd ? p0 : p1, b = fwd ? p1 : p0;
        const same = nearN(keep.x1, a.x, 1e-12) && nearN(keep.y1, a.y, 1e-12) && nearN(keep.x2, b.x, 1e-12) && nearN(keep.y2, b.y, 1e-12);
        if (!same) updates.set(keep.id, { ...keep, x1: a.x, y1: a.y, x2: b.x, y2: b.y });
        for (const i of g.slice(1)) gone.add(lines[i].id);
        if (kind.get(root)) counts.overlaps += g.length - 1; else counts.joined += g.length - 1;
      }
    }

    // 2 + 3. arcs (and circles) on one circle
    const round = ents.filter((e) => (e.type === 'arc' || e.type === 'circle') && !gone.has(e.id) && e.r > T && !e.z);
    if (round.length > 1) {
      const hash = new PointHash(Math.max(T * 4, 1e-9)), groups = [];
      for (const e of round) {
        const pk = propKey(e, ignore);
        let g = null;
        for (const o of hash.near(e.cx, e.cy)) if (o.pk === pk && nearN(o.cx, e.cx, T) && nearN(o.cy, e.cy, T) && nearN(o.r, e.r, T)) { g = o; break; }
        if (!g) { g = { pk, cx: e.cx, cy: e.cy, r: e.r, list: [] }; groups.push(g); hash.put(e.cx, e.cy, g); }
        g.list.push(e);
      }
      const aT = (r) => T / r;   // the tolerance as an angle on this circle
      for (const g of groups) {
        if (g.list.length < 2) continue;
        const arcs = g.list.filter((e) => e.type === 'arc'), circle = g.list.find((e) => e.type === 'circle');
        if (circle) { if (overlap) for (const a of arcs) { gone.add(a.id); counts.overlaps++; } continue; }   // an arc on a circle of its own kind adds nothing
        if (arcs.length < 2) continue;
        // each arc as a span [s, s + sweep] counter-clockwise, sorted by start; spans that overlap (or touch) merge, round the circle too
        const spans = arcs.map((e, i) => { const s = normAngle(e.a0); let w = normAngle(e.a1 - e.a0); if (w < 1e-12) w = TAU; return { s, e: s + w, i: [i], ov: false }; }).sort((p, q) => p.s - q.s);
        const eps = aT(g.r), merged = [];
        const meet = (m, sp) => { const d = m.e - sp.s; return d > eps ? (overlap ? 'overlap' : null) : d >= -eps ? (ends ? 'touch' : null) : null; };
        for (const sp of spans) {
          const m = merged[merged.length - 1], r = m ? meet(m, sp) : null;
          if (r) { m.e = Math.max(m.e, sp.e); m.i.push(...sp.i); if (r === 'overlap') m.ov = true; } else merged.push({ ...sp, i: [...sp.i] });
        }
        if (merged.length > 1) {   // the last span may run on over 0° into the first
          const first = merged[0], last = merged[merged.length - 1], r = meet({ e: last.e - TAU }, first);
          if (r) { first.s = last.s - TAU; first.e = Math.max(first.e, last.e - TAU); first.i.push(...last.i); first.ov = first.ov || last.ov || r === 'overlap'; merged.pop(); }
        } else if (merged[0].i.length > 1 && merged[0].e - merged[0].s < TAU - eps) {   // one span: do its two ends meet round the back?
          const m = merged[0], d = m.e - TAU - m.s;
          if (d >= -eps && (d > eps ? overlap : ends)) m.e = m.s + TAU;
        }
        for (const m of merged) {
          if (m.i.length < 2) continue;
          const members = m.i.map((i) => arcs[i]).sort((p, q) => order.get(p.id) - order.get(q.id)), keep = members[0];
          const whole = m.e - m.s >= TAU - eps;
          if (whole) { const c = { ...keep, type: 'circle' }; delete c.a0; delete c.a1; updates.set(keep.id, c); }
          else updates.set(keep.id, { ...keep, a0: normAngle(m.s), a1: normAngle(m.e) });
          for (const o of members.slice(1)) gone.add(o.id);
          if (m.ov) counts.overlaps += members.length - 1; else counts.joined += members.length - 1;
        }
      }
    }
  }
  for (const id of gone) updates.delete(id);
  return { remove: [...gone], updates: [...updates].map(([id, entity]) => ({ id, entity })), counts, tol };
}

/** One undo step. Returns how many objects went. */
export function applyOverkill(doc, plan, label = 'OVERKILL') {
  if (!plan || (!plan.remove.length && !plan.updates.length)) return 0;
  doc.change(label, () => {
    for (const u of plan.updates) if (doc.get(u.id)) doc.update(u.id, u.entity);
    for (const id of plan.remove) doc.remove(id);
  });
  return plan.remove.length;
}
