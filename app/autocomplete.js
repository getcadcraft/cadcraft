/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — keys and kinds are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * autocomplete.js — drawing autocomplete (0.8 round 2, EG.54): ghost geometry ahead of the cursor, worked out from the
 * drawing's OWN patterns. Rules and geometry only: no model, no network, nothing leaves the computer (rule 35).
 *
 *   suggestionsFor(doc, opts) → [{ key, kind, score, ghosts[], adds[], updates[{id, entity}], box }]
 *   pickSuggestion(list, cursor, reach, dismissed) → the nearest one within `reach` (drawing units) of the cursor, or null
 *   applySuggestion(doc, s, label) → one undo step
 *   class Autocomplete { constructor(doc) · preview(cursor, reach) · accept() · dismiss() · forget() }
 *
 * Kinds (all from the last few objects drawn):
 *   repeat  the last 1–4 objects were copied at one step twice or more (studs, columns, the two lines of a stair): the next copy
 *   stair   an open polyline whose steps repeat (riser, tread, riser, tread…): the next period of vertices
 *   close   an open chain of lines or one open polyline that nearly closes a figure: the missing side(s) of a rectangle, or the
 *           closing side of a chain of three or more
 *
 * Cost. Finding patterns looks only at the newest objects (ids are handed out in order, so they are found by id from `nextId`
 * down, never by walking the whole drawing) and is done once per change of the drawing, not once per mouse move. A mouse move only
 * compares the cursor with the handful of cached boxes. `stats` counts both, so a test can show it stays flat on a big drawing.
 */
import { txEntity, mTranslate } from './geom.js';

export const LOOK_IDS = 480;      // newest ids probed
export const LOOK_ENTS = 64;      // newest objects of the kinds below kept
export const MAX_PERIOD = 4;      // objects in one repeating group; vertices in one repeating stair period
const KINDS = new Set(['line', 'poly', 'circle', 'arc', 'insert', 'text', 'point']);
const SKIP_LAYER_STATE = (doc, e) => !doc.visible(e) || !doc.editable(e);

const num = (v) => typeof v === 'number';
const r6 = (v) => Math.round(v * 1e6) / 1e6;

/** The newest objects of the open space, oldest first, found by id from the top (O(LOOK_IDS), not O(size)). */
export function recentEntities(doc, ids = LOOK_IDS, want = LOOK_ENTS) {
  const out = [];
  const space = doc.entities;
  for (let id = doc.nextId - 1, n = 0; id > 0 && n < ids && out.length < want; id--, n++) {
    const e = space.get(id);
    if (e && KINDS.has(e.type) && !SKIP_LAYER_STATE(doc, e)) out.push(e);
  }
  return out.reverse();
}

/** A line with its ends in a fixed order, so a stud drawn upwards matches one drawn downwards. */
function normal(e) {
  if (e.type === 'line' && (e.x1 > e.x2 || (e.x1 === e.x2 && e.y1 > e.y2))) return { ...e, x1: e.x2, y1: e.y2, x2: e.x1, y2: e.y1 };
  return e;
}
/** Where an object "is" (for the step between two copies). */
function anchorOf(e) {
  switch (e.type) {
    case 'line': { const n = normal(e); return { x: n.x1, y: n.y1 }; }
    case 'poly': return { x: e.pts[0].x, y: e.pts[0].y };
    case 'circle': case 'arc': return { x: e.cx, y: e.cy };
    default: return { x: e.x, y: e.y };
  }
}
/** Same object, within `tol`, apart from its id? */
function sameShape(a, b, tol) {
  if (a.type !== b.type || a.layer !== b.layer) return false;
  const x = normal(a), y = normal(b);
  for (const k of Object.keys(x)) {
    if (k === 'id' || k === 'key') continue;
    const u = x[k], v = y[k];
    if (num(u)) { if (!num(v) || Math.abs(u - v) > tol) return false; }
    else if (k === 'pts') { if (!Array.isArray(v) || v.length !== u.length || u.some((p, i) => Math.abs(p.x - v[i].x) > tol || Math.abs(p.y - v[i].y) > tol || Math.abs((p.b || 0) - (v[i].b || 0)) > 1e-3)) return false; }
    else if (u !== v && JSON.stringify(u) !== JSON.stringify(v)) return false;
  }
  return Object.keys(y).every((k) => k === 'id' || k === 'key' || k in x);
}
const move = (e, dx, dy) => { const o = txEntity(e, mTranslate(dx, dy)); delete o.id; return o; };

export function boxOf(ents) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const take = (x, y) => { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; };
  for (const e of ents) {
    if (e.type === 'line') { take(e.x1, e.y1); take(e.x2, e.y2); }
    else if (e.type === 'poly') for (const p of e.pts) take(p.x, p.y);
    else if (e.type === 'circle' || e.type === 'arc') { take(e.cx - e.r, e.cy - e.r); take(e.cx + e.r, e.cy + e.r); }
    else if (num(e.x) && num(e.y)) take(e.x, e.y);
  }
  return x0 === Infinity ? null : { x0, y0, x1, y1 };
}

// ---------------------------------------------------------------- repeat

function repeats(recent) {
  const n = recent.length, out = [];
  for (let m = 1; m <= MAX_PERIOD && 2 * m <= n; m++) {
    const A = recent.slice(n - 2 * m, n - m), B = recent.slice(n - m);
    const a0 = anchorOf(A[0]), b0 = anchorOf(B[0]);
    const dx = b0.x - a0.x, dy = b0.y - a0.y, step = Math.hypot(dx, dy);
    if (step < 1e-9) continue;
    const tol = Math.max(1e-6, step * 0.004);
    if (!A.every((e, i) => sameShape(move(e, dx, dy), B[i], tol))) continue;
    let k = 2;   // how many groups in a row (more = surer)
    while (n - (k + 1) * m >= 0) {
      const P = recent.slice(n - (k + 1) * m, n - k * m), Q = recent.slice(n - k * m, n - (k - 1) * m);
      if (!P.every((e, i) => sameShape(move(e, dx, dy), Q[i], tol))) break;
      k++;
    }
    const ghosts = B.map((e) => move(e, dx, dy));
    out.push({ kind: 'repeat', score: k * 10 - m, ghosts, adds: ghosts, updates: [], step: r6(step), groups: k, size: m });
    break;   // the smallest period that repeats explains the rest
  }
  return out;
}

// ---------------------------------------------------------------- stair (a polyline whose steps repeat)

function stairs(recent) {
  const out = [];
  for (let i = recent.length - 1; i >= 0 && i >= recent.length - 3; i--) {
    const e = recent[i];
    if (e.type !== 'poly' || e.closed || e.pts.length < 5) continue;
    if (e.pts.some((p) => p.b)) continue;
    const d = []; for (let j = 1; j < e.pts.length; j++) d.push({ x: e.pts[j].x - e.pts[j - 1].x, y: e.pts[j].y - e.pts[j - 1].y });
    for (let p = 2; p <= MAX_PERIOD * 2; p += 2) {   // a stair's period is a riser and a tread (or a multiple)
      if (d.length < 2 * p) continue;
      const scale = Math.max(...d.slice(-p).map((v) => Math.hypot(v.x, v.y)), 1e-9), tol = Math.max(1e-6, scale * 0.004);
      let ok = true;
      for (let j = d.length - p; j < d.length && ok; j++) ok = Math.hypot(d[j].x - d[j - p].x, d[j].y - d[j - p].y) <= tol;
      if (!ok) continue;
      let cur = e.pts[e.pts.length - 1];
      const added = [];
      for (let j = d.length - p; j < d.length; j++) { cur = { x: cur.x + d[j].x, y: cur.y + d[j].y, b: 0 }; added.push(cur); }
      const last = e.pts[e.pts.length - 1];
      const ghost = { type: 'poly', closed: false, layer: e.layer, color: e.color ?? null, pts: [{ x: last.x, y: last.y, b: 0 }, ...added] };
      const pts = [...e.pts.map((q) => ({ ...q })), ...added];
      out.push({ kind: 'stair', score: 12 + d.length / p, ghosts: [ghost], adds: [], updates: [{ id: e.id, entity: { ...e, pts } }], period: p });
      break;
    }
    if (out.length) break;
  }
  return out;
}

// ---------------------------------------------------------------- close

/** The chain through the newest line or open polyline: vertices in order, and the objects it is made of. */
function chainThrough(recent, tol) {
  const segs = [];   // { a, b, e }
  for (const e of recent) {
    if (e.type === 'line') segs.push({ a: { x: e.x1, y: e.y1 }, b: { x: e.x2, y: e.y2 }, e });
    else if (e.type === 'poly' && !e.pts.some((p) => p.b)) {
      const n = e.pts.length;
      for (let i = 0; i + 1 < n; i++) segs.push({ a: e.pts[i], b: e.pts[i + 1], e });
      if (e.closed) segs.push({ a: e.pts[n - 1], b: e.pts[0], e });
    }
  }
  if (!segs.length) return null;
  const same = (p, q) => Math.hypot(p.x - q.x, p.y - q.y) <= tol;
  const used = new Set();
  const lastE = recent.filter((e) => e.type === 'line' || e.type === 'poly').pop();
  const first = segs.findIndex((s) => s.e === lastE);
  if (first < 0) return null;
  let pts = [segs[first].a, segs[first].b]; used.add(first);
  for (let grow = true; grow;) {
    grow = false;
    for (let i = 0; i < segs.length; i++) {
      if (used.has(i)) continue;
      const s = segs[i], h = pts[0], t = pts[pts.length - 1];
      if (same(s.a, t)) { pts.push(s.b); used.add(i); grow = true; }
      else if (same(s.b, t)) { pts.push(s.a); used.add(i); grow = true; }
      else if (same(s.b, h)) { pts.unshift(s.a); used.add(i); grow = true; }
      else if (same(s.a, h)) { pts.unshift(s.b); used.add(i); grow = true; }
    }
  }
  return { pts: pts.map((p) => ({ x: p.x, y: p.y })), parts: [...new Set([...used].map((i) => segs[i].e))], segs: pts.length - 1 };
}
const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
function segsCross(p1, p2, p3, p4) {
  const d1 = cross(p3, p4, p1), d2 = cross(p3, p4, p2), d3 = cross(p1, p2, p3), d4 = cross(p1, p2, p4);
  return d1 * d2 < 0 && d3 * d4 < 0;
}

function closers(recent) {
  const out = [];
  const ext = boxOf(recent), size = ext ? Math.max(ext.x1 - ext.x0, ext.y1 - ext.y0, 1e-9) : 1, tol = Math.max(1e-6, size * 1e-7);
  const ch = chainThrough(recent, tol);
  if (!ch || ch.segs < 2) return out;
  const v = ch.pts, n = v.length, h = v[0], t = v[n - 1];
  if (Math.hypot(h.x - t.x, h.y - t.y) <= tol) return out;   // already closed
  const last = ch.parts[ch.parts.length - 1], layer = last.layer, color = last.color ?? null;
  const side = (a, b) => ({ type: 'line', layer, color, x1: a.x, y1: a.y, x2: b.x, y2: b.y });
  const one = ch.parts.length === 1 && ch.parts[0].type === 'poly' ? ch.parts[0] : null;   // the whole chain is one polyline
  let sides = null;
  if (n === 3) {   // two sides at a right angle: the rectangle's other two
    const u = { x: v[1].x - v[0].x, y: v[1].y - v[0].y }, w = { x: v[2].x - v[1].x, y: v[2].y - v[1].y };
    const dot = u.x * w.x + u.y * w.y, lu = Math.hypot(u.x, u.y), lw = Math.hypot(w.x, w.y);
    if (lu < 1e-9 || lw < 1e-9 || Math.abs(dot) / (lu * lw) > 0.01) return out;
    const p4 = { x: v[0].x + w.x, y: v[0].y + w.y };
    sides = { pts: [t, p4], kind: 'rect' };
    if (one) { const pts = [...one.pts.map((q) => ({ ...q })), { x: p4.x, y: p4.y, b: 0 }]; out.push({ kind: 'close', score: 14, ghosts: [side(t, p4), side(p4, h)], adds: [], updates: [{ id: one.id, entity: { ...one, pts, closed: true } }], sides: 2 }); }
    else out.push({ kind: 'close', score: 14, ghosts: [side(t, p4), side(p4, h)], adds: [side(t, p4), side(p4, h)], updates: [], sides: 2 });
    return out;
  }
  if (n >= 4) {   // three or more sides: the closing one, if it winds one way all round (a stair's zig-zag does not) and does not cross
    let sign = 0;
    for (let i = 1; i + 1 < n; i++) { const c = Math.sign(r6(cross(v[i - 1], v[i], v[i + 1]))); if (c && sign && c !== sign) return out; if (c) sign = c; }
    const closing = [v[n - 2], t, h]; const cc = Math.sign(r6(cross(closing[0], closing[1], closing[2]))), c0 = Math.sign(r6(cross(t, h, v[1])));
    if ((cc && sign && cc !== sign) || (c0 && sign && c0 !== sign)) return out;
    for (let i = 0; i + 1 < n; i++) {
      if (i === 0 || i + 1 === n - 1) continue;   // the sides that touch the new one
      if (segsCross(t, h, v[i], v[i + 1])) return out;
    }
    if (one) out.push({ kind: 'close', score: 13, ghosts: [side(t, h)], adds: [], updates: [{ id: one.id, entity: { ...one, closed: true } }], sides: 1 });
    else out.push({ kind: 'close', score: 13, ghosts: [side(t, h)], adds: [side(t, h)], updates: [], sides: 1 });
  }
  return out;
}

// ---------------------------------------------------------------- the list

export function suggestionsFor(doc, { recent = null } = {}) {
  const r = recent || recentEntities(doc);
  if (!r.length) return [];
  // each layer's newest objects on their own: a drawing with studs, a stair and a room on three layers offers all three
  const byLayer = new Map();
  for (const e of r) { if (!byLayer.has(e.layer)) byLayer.set(e.layer, []); byLayer.get(e.layer).push(e); }
  const seen = new Set(), list = [];
  for (const part of byLayer.size > 1 ? [...byLayer.values(), r] : [r]) {
    for (const s of [...stairs(part), ...closers(part), ...repeats(part)]) {
      const k = s.kind + JSON.stringify(s.ghosts, (q, v) => (typeof v === 'number' ? r6(v) : v));
      if (!seen.has(k)) { seen.add(k); list.push(s); }
    }
  }
  for (const s of list) {
    s.box = boxOf(s.ghosts);
    s.key = s.kind + ':' + s.ghosts.map((g) => JSON.stringify(g, (k, v) => (typeof v === 'number' ? r6(v) : v))).join('|');
  }
  return list.filter((s) => s.box).sort((a, b) => b.score - a.score);
}

export function pickSuggestion(list, cursor, reach, dismissed = null) {
  let best = null, bestD = Infinity;
  for (const s of list) {
    if (dismissed?.has(s.key)) continue;
    const b = s.box, dx = Math.max(b.x0 - cursor.x, 0, cursor.x - b.x1), dy = Math.max(b.y0 - cursor.y, 0, cursor.y - b.y1), d = Math.hypot(dx, dy);
    if (d <= reach && d - s.score * 1e-6 < bestD) { best = s; bestD = d; }
  }
  return best;
}

/** One undo step. Returns the ids added. */
export function applySuggestion(doc, s, label = 'AUTOCOMPLETE') {
  const ids = [];
  doc.change(label, () => {
    for (const u of s.updates) doc.update(u.id, u.entity);
    for (const e of s.adds) ids.push(doc.add({ ...e }).id);
  });
  return ids;
}

export class Autocomplete {
  constructor(doc) { this.doc = doc; this.list = []; this.at = null; this.dismissed = new Set(); this.shown = null; this.stats = { finds: 0, moves: 0, findMs: 0, moveMs: 0 }; this.on = true; }
  /** Patterns for the drawing as it is now (cached until it changes). */
  suggestions() {
    const stamp = this.doc.version + ':' + (this.doc.layout?.name || '') + ':' + this.doc.nextId;
    if (stamp !== this.at) {
      const t0 = performance.now();
      this.list = this.on ? suggestionsFor(this.doc) : [];
      this.at = stamp; this.shown = null;
      if (this.dismissedAt !== stamp) { this.dismissed.clear(); this.dismissedAt = stamp; }
      this.stats.finds++; this.stats.findMs += performance.now() - t0;
    }
    return this.list;
  }
  /** The ghosts to draw for a cursor (preview entities marked `ghost`), or [] — the same array while the pick is the same. */
  preview(cursor, reach) {
    const t0 = performance.now();
    const s = this.on && cursor ? pickSuggestion(this.suggestions(), cursor, reach, this.dismissed) : null;
    this.stats.moves++; this.stats.moveMs += performance.now() - t0;
    if (!s) { this.shown = null; return EMPTY; }
    if (this.shown?.s === s) return this.shown.ghosts;
    const ghosts = s.ghosts.map((g) => ({ ...g, ghost: true }));
    this.shown = { s, ghosts };
    return ghosts;
  }
  get current() { return this.shown?.s || null; }
  accept(label) {
    const s = this.current;
    if (!s) return null;
    const ids = applySuggestion(this.doc, s, label);
    this.shown = null; this.at = null;
    return { suggestion: s, ids };
  }
  dismiss() { const s = this.current; if (!s) return false; this.dismissed.add(s.key); this.dismissedAt = this.at; this.shown = null; return true; }
  forget() { this.at = null; this.shown = null; this.dismissed.clear(); }
}
const EMPTY = [];

// ---------------------------------------------------------------- the point after a running LINE / PLINE (0.8 round 4, EG.54)

const near = (a, b, tol) => Math.hypot(a.x - b.x, a.y - b.y) <= tol;

/**
 * The next point of a LINE or PLINE that is running, from the points picked so far (oldest first) → { x, y, kind } or null.
 *   stair   three or more steps in which each step repeats the one two back (riser, tread, riser…): the step after the last
 *   rect    two sides at a right angle: the fourth corner of the rectangle
 *   close   a rectangle's three sides, or four or more sides that wind one way and do not cross: the first point again
 *   repeat  the last two steps are the same: one more of them
 * Rules only (rule 35); the person still clicks or presses Tab.
 */
export function nextPoint(pts) {
  const n = Array.isArray(pts) ? pts.length : 0;
  if (n < 3) return null;
  const v = []; for (let i = 0; i + 1 < n; i++) v.push({ x: pts[i + 1].x - pts[i].x, y: pts[i + 1].y - pts[i].y });
  if (v.some((q) => Math.hypot(q.x, q.y) < 1e-9)) return null;
  const len = Math.max(...v.map((q) => Math.hypot(q.x, q.y)));
  const tol = Math.max(1e-6, len * 0.002);
  const last = pts[n - 1], at = (d, kind) => ({ x: last.x + d.x, y: last.y + d.y, kind });
  const m = v.length;
  if (m >= 3 && near(v[m - 1], v[m - 3], tol) && !near(v[m - 1], v[m - 2], tol)) return at(v[m - 2], 'stair');
  const dot = (a, b) => a.x * b.x + a.y * b.y, mag = (a) => Math.hypot(a.x, a.y);
  const square = (a, b) => Math.abs(dot(a, b)) <= 0.002 * mag(a) * mag(b);
  if (n === 3 && square(v[0], v[1])) return { x: pts[0].x + v[1].x, y: pts[0].y + v[1].y, kind: 'rect' };
  if (n === 4 && square(v[0], v[1]) && square(v[1], v[2]) && near(v[2], { x: -v[0].x, y: -v[0].y }, tol)) return { x: pts[0].x, y: pts[0].y, kind: 'close' };
  if (m >= 2 && near(v[m - 1], v[m - 2], tol)) return at(v[m - 1], 'repeat');
  if (n >= 4) {   // winds one way all round, the closing side crosses nothing
    let sign = 0;
    for (let i = 1; i < m; i++) { const c = Math.sign(r6(v[i - 1].x * v[i].y - v[i - 1].y * v[i].x)); if (c && sign && c !== sign) return null; if (c) sign = c; }
    const a = last, b = pts[0];
    for (let i = 1; i + 2 < n; i++) if (segsCross(a, b, pts[i], pts[i + 1])) return null;
    const cl = { x: b.x - a.x, y: b.y - a.y }, c1 = Math.sign(r6(v[m - 1].x * cl.y - v[m - 1].y * cl.x)), c2 = Math.sign(r6(cl.x * v[0].y - cl.y * v[0].x));
    if ((sign && c1 && c1 !== sign) || (sign && c2 && c2 !== sign)) return null;
    return { x: b.x, y: b.y, kind: 'close' };
  }
  return null;
}
