/* SPDX-License-Identifier: Apache-2.0 */
/**
 * geom.js — 2D geometry for the CadCraft drafting app. No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 * Every entity breaks down into primitives (`prims(e, blocks)`):
 *   { k: 'L', x1, y1, x2, y2 }          a straight segment
 *   { k: 'A', cx, cy, r, a0, a1 }       an arc, counter-clockwise from a0 to a1 (a1 > a0, sweep ≤ 2π)
 * Snaps, picking, intersections, trim and extend all work on primitives, so a new entity type
 * only has to say what it is made of. Angles are radians; world Y points up.
 */

import { dimGeometry } from './dims.js';
import { leaderGeometry, leaderStyle } from './leader.js';
import { advance, advanceIn } from './font.js';
import { richOf, heightFactor } from './mtext.js';
import { points as splinePoints, valid as splineValid, editFit as splineEditFit, moveCtrl as splineMoveCtrl, polyline as splinePolyline } from './spline.js';

export const TAU = Math.PI * 2;
export const EPS = 1e-9;

export const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
export const angleOf = (a, b) => Math.atan2(b.y - a.y, b.x - a.x);
export const polar = (p, ang, d) => ({ x: p.x + Math.cos(ang) * d, y: p.y + Math.sin(ang) * d });
export const normAngle = (a) => { a %= TAU; return a < 0 ? a + TAU : a; };
export const deg = (r) => r * 180 / Math.PI;
export const rad = (d) => d * Math.PI / 180;

/** Is angle `a` on the CCW sweep a0 → a1 (with a small tolerance)? */
export function onSweep(a, a0, a1, tol = 1e-9) {
  const sweep = a1 - a0;
  if (sweep >= TAU - tol) return true;
  const d = normAngle(a - a0);
  return d <= sweep + tol || d >= TAU - tol;
}

// ---------------------------------------------------------------------------
// Bulge segments (polylines)

/** The arc between p and q for bulge b (tan of a quarter of the included angle; + = CCW). */
export function bulgeArc(p, q, b) {
  const theta = 4 * Math.atan(b);
  const c = dist(p, q);
  const r = Math.abs(c / (2 * Math.sin(theta / 2)));
  const mid = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
  const h = r * Math.cos(theta / 2);                       // centre distance from the chord (signed by bulge)
  const ux = (q.x - p.x) / c, uy = (q.y - p.y) / c;
  const s = b > 0 ? 1 : -1;
  const cx = mid.x - uy * h * s, cy = mid.y + ux * h * s;
  let a0 = Math.atan2(p.y - cy, p.x - cx), a1 = Math.atan2(q.y - cy, q.x - cx);
  if (b < 0) [a0, a1] = [a1, a0];                          // stored CCW either way
  a0 = normAngle(a0); a1 = normAngle(a1);
  if (a1 <= a0) a1 += TAU;
  return { k: 'A', cx, cy, r, a0, a1, rev: b < 0 };
}

/** Bulge for an arc from its start/end angle sweep (CCW positive). */
export const sweepToBulge = (sweep) => Math.tan(sweep / 4);

// ---------------------------------------------------------------------------
// Affine transforms [a, b, c, d, e, f]: x' = a·x + c·y + e, y' = b·x + d·y + f

export const IDENTITY = [1, 0, 0, 1, 0, 0];
export const mTranslate = (x, y) => [1, 0, 0, 1, x, y];
export const mScale = (sx, sy = sx) => [sx, 0, 0, sy, 0, 0];
export const mRotate = (r) => { const c = Math.cos(r), s = Math.sin(r); return [c, s, -s, c, 0, 0]; };
export function mMul(m, n) {
  return [
    m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
    m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
    m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5],
  ];
}
export const mApply = (m, p) => ({ x: m[0] * p.x + m[2] * p.y + m[4], y: m[1] * p.x + m[3] * p.y + m[5] });
export const mAbout = (p, m) => mMul(mTranslate(p.x, p.y), mMul(m, mTranslate(-p.x, -p.y)));
/** Mirror across the line through p and q. */
export function mMirror(p, q) {
  const a = angleOf(p, q), c = Math.cos(2 * a), s = Math.sin(2 * a);
  return mAbout(p, [c, s, s, -c, 0, 0]);
}
export const mDet = (m) => m[0] * m[3] - m[1] * m[2];
/** Uniform scale factor and rotation of m, or null when it shears/stretches (arcs then become ellipses). */
export function mSimilar(m) {
  const sx = Math.hypot(m[0], m[1]), sy = Math.hypot(m[2], m[3]);
  const dot = m[0] * m[2] + m[1] * m[3];
  if (Math.abs(sx - sy) > 1e-9 * Math.max(sx, sy) || Math.abs(dot) > 1e-9 * sx * sy) return null;
  return { s: sx, rot: Math.atan2(m[1], m[0]), flip: mDet(m) < 0 };
}

// ---------------------------------------------------------------------------
// Entity → primitives

const ELLIPSE_STEPS = 72;

/**
 * Construction lines (0.5 DR.6): `xline` {x, y, dx, dy} runs both ways through (x, y), `ray` {x, y, dx, dy} one way from
 * it; (dx, dy) is a unit direction. They have no bounds (ZOOM Extents and every extents leave them out), are drawn by
 * clipping to what is on screen (clipInfinite), and stand in as one segment FAR long each way wherever geometry needs
 * primitives (intersections, picking, trimming). Trimmed or broken, an xline gives rays and a ray gives lines (subEntity).
 */
export const UNBOUNDED = new Set(['xline', 'ray']);
export const FAR = 1e9;
/** A unit direction (dx, dy), or null for a zero one. */
export function unitDir(dx, dy) { const L = Math.hypot(dx, dy); return L > EPS ? { dx: dx / L, dy: dy / L } : null; }
/**
 * The part of the line p + t·d (t ≥ 0 when `ray`) inside rect {minX, minY, maxX, maxY} → [t0, t1], or null (Liang–Barsky).
 * Screen or world: the caller picks the space.
 */
export function clipInfinite(p, d, rect, ray = false) {
  let t0 = ray ? 0 : -Infinity, t1 = Infinity;
  for (const [q, lo, hi, v] of [[d.x, rect.minX, rect.maxX, p.x], [d.y, rect.minY, rect.maxY, p.y]]) {
    if (Math.abs(q) < 1e-15) { if (v < lo || v > hi) return null; continue; }
    let a = (lo - v) / q, b = (hi - v) / q;
    if (a > b) [a, b] = [b, a];
    t0 = Math.max(t0, a); t1 = Math.min(t1, b);
    if (t0 > t1) return null;
  }
  return Number.isFinite(t0) && Number.isFinite(t1) ? [t0, t1] : null;
}

/** Primitives of an entity in world coordinates. `blocks` (Map name → {base, entities}) for inserts. */
export function prims(e, blocks = null, depth = 0) {
  switch (e.type) {
    case 'line': return [{ k: 'L', x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2 }];
    case 'circle': return [{ k: 'A', cx: e.cx, cy: e.cy, r: e.r, a0: 0, a1: TAU, full: true }];
    case 'arc': { const [a0, a1] = arcRange(e.a0, e.a1); return [{ k: 'A', cx: e.cx, cy: e.cy, r: e.r, a0, a1 }]; }
    case 'poly': return polyPrims(e);
    case 'ellipse': return ellipsePrims(e);
    case 'spline': return splinePrims(e);
    case 'point': return [];
    case 'text': { const c = textCorners(e); return c.map((p, i) => ({ k: 'L', x1: p.x, y1: p.y, x2: c[(i + 1) % 4].x, y2: c[(i + 1) % 4].y, box: true })); }
    case 'hatch': return e.loops.flatMap((l) => ringPrims(l));
    case 'insert': {
      const blk = blocks?.get(e.block);
      if (!blk || depth > 16) return [];
      const m = insertMatrix(e, blk);
      const out = [];
      for (const c of blk.entities) for (const p of prims(c, blocks, depth + 1)) out.push(...txPrim(p, m));
      // attribute text counts for picking and bounds, not for snaps
      for (const t of attrTexts(e, blk)) for (const p of prims(t)) for (const q of txPrim(p, m)) out.push({ ...q, box: true });
      return out;
    }
    case 'dim': {
      // Arrowheads and the text box count for picking, not for snaps (they are marked `box`).
      const parts = dimParts(e, blocks);
      if (depth > 16) return [];
      const out = [];
      for (const c of parts) for (const p of prims(c, blocks, depth + 1)) out.push(c.type === 'hatch' || c.type === 'text' ? { ...p, box: true } : p);
      return out;
    }
    case 'viewport': {
      const c = viewportCorners(e);
      return c.map((p, i) => ({ k: 'L', x1: p.x, y1: p.y, x2: c[(i + 1) % 4].x, y2: c[(i + 1) % 4].y }));
    }
    case 'xline': case 'ray': {   // 0.5 DR.6: one long stand-in segment (FAR each way), for intersections, picking and trimming only
      const s = e.type === 'ray' ? 0 : -FAR;
      return [{ k: 'L', x1: e.x + e.dx * s, y1: e.y + e.dy * s, x2: e.x + e.dx * FAR, y2: e.y + e.dy * FAR, inf: true }];
    }
    case 'mleader': {
      // like a dimension: the arrowhead and the text box count for picking, not for snaps
      const out = [];
      for (const c of leaderGeometry(e)) for (const p of prims(c, blocks, depth + 1)) out.push(c.type === 'hatch' || c.type === 'text' ? { ...p, box: true } : p);
      return out;
    }
    default: return [];
  }
}

/** What a dimension draws: its imported block while it has one, else its own geometry. */
export function dimParts(e, blocks) {
  const blk = e.block && blocks?.get(e.block);
  return blk ? blk.entities : dimGeometry(e);
}

/** Model → paper for a viewport: the model point (cx, cy) lands on the viewport's centre, × s. */
/** Model → paper for a viewport: its view centre (cx, cy) lands on its centre (x, y), at scale s, turned by its twist `tw` (radians, DR.8). */
export function viewportMatrix(vp) {
  if (!vp.tw) return [vp.s, 0, 0, vp.s, vp.x - vp.cx * vp.s, vp.y - vp.cy * vp.s];
  const c = Math.cos(vp.tw) * vp.s, n = Math.sin(vp.tw) * vp.s;
  return [c, n, -n, c, vp.x - (c * vp.cx - n * vp.cy), vp.y - (n * vp.cx + c * vp.cy)];
}

/**
 * A VIEWPORT's view centre is in display coordinates (DCS: the model turned by the twist, about the view target), not in the
 * model's (DXF reference, group 12; ezdxf turns it back the same way). CAD-TWIST-SAVE 2026-10-24: CadCraft wrote and read
 * the model point as is, so a twisted viewport came back right only in CadCraft — BimCraft, AutoCAD and ezdxf showed another
 * area. `vpModelCentre`: the stored centre (+ target) → the model point at the viewport's centre; `vpDcsCentre`: the reverse.
 */
export function vpModelCentre(dc, t, tw) {
  const dx = Number(dc?.x) || 0, dy = Number(dc?.y) || 0, tx = Number(t?.x) || 0, ty = Number(t?.y) || 0;
  if (!tw) return { x: tx + dx, y: ty + dy };
  const c = Math.cos(tw), s = Math.sin(tw);
  return { x: tx + c * dx + s * dy, y: ty - s * dx + c * dy };
}
export function vpDcsCentre(cx, cy, tw) {
  if (!tw) return { x: cx, y: cy };
  const c = Math.cos(tw), s = Math.sin(tw);
  return { x: c * cx - s * cy, y: s * cx + c * cy };
}

/** Corners of a viewport (paper units), counter-clockwise from the lower left. */
export function viewportCorners(e) {
  const hw = e.w / 2, hh = e.h / 2;
  return [{ x: e.x - hw, y: e.y - hh }, { x: e.x + hw, y: e.y - hh }, { x: e.x + hw, y: e.y + hh }, { x: e.x - hw, y: e.y + hh }];
}

export function arcRange(a0, a1) {
  a0 = normAngle(a0); a1 = normAngle(a1);
  if (a1 <= a0 + EPS) a1 += TAU;
  return [a0, a1];
}

export function polyPrims(e) {
  const v = e.pts, n = v.length, out = [];
  const segs = e.closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p = v[i], q = v[(i + 1) % n];
    if (Math.abs(p.b || 0) > 1e-12 && dist(p, q) > EPS) out.push({ ...bulgeArc(p, q, p.b), seg: i });
    else out.push({ k: 'L', x1: p.x, y1: p.y, x2: q.x, y2: q.y, seg: i });
  }
  return out;
}

function ringPrims(flat) {
  const out = [];
  for (let i = 0; i + 3 < flat.length; i += 2) out.push({ k: 'L', x1: flat[i], y1: flat[i + 1], x2: flat[i + 2], y2: flat[i + 3] });
  return out;
}

export function ellipsePoints(e, steps = ELLIPSE_STEPS) {
  const ma = Math.hypot(e.mx, e.my), mi = ma * e.ratio, rot = Math.atan2(e.my, e.mx);
  const [t0, t1] = e.t1 - e.t0 >= TAU - EPS ? [0, TAU] : arcRange(e.t0, e.t1);
  const n = Math.max(8, Math.ceil(steps * (t1 - t0) / TAU));
  const c = Math.cos(rot), s = Math.sin(rot), pts = [];
  for (let i = 0; i <= n; i++) {
    const t = t0 + (t1 - t0) * i / n, x = ma * Math.cos(t), y = mi * Math.sin(t);
    pts.push({ x: e.cx + x * c - y * s, y: e.cy + x * s + y * c });
  }
  return pts;
}
/** A spline as short segments along the curve (spline.js: within 0.02 % of its size of the true curve). */
function splinePrims(e) {
  if (!splineValid(e)) return [];
  const p = splinePoints(e), out = [];
  for (let i = 0; i + 1 < p.length; i++) out.push({ k: 'L', x1: p[i].x, y1: p[i].y, x2: p[i + 1].x, y2: p[i + 1].y });
  return out;
}
function ellipsePrims(e) {
  const p = ellipsePoints(e), out = [];
  for (let i = 0; i + 1 < p.length; i++) out.push({ k: 'L', x1: p[i].x, y1: p[i].y, x2: p[i + 1].x, y2: p[i + 1].y });
  return out;
}

export const LINE_SPACING = 5 / 3;  // × text height, baseline to baseline (AutoCAD's MTEXT default)
/** Font size for a text height: CAD text height is the capital height (Helvetica's is 0.718 em). */
export const FONT_EM = 1 / 0.718;

/** Width of a line of a text entity's text, in drawing units (Helvetica metrics, see font.js). */
let measureHook = null;
/** SHX text (0.8 D8.7): a measurer (s, e) → width in drawing units, or null to leave the string to the built-in face (shx-text.js). */
export function setTextMeasure(fn) { measureHook = fn; }
export const textWidth = (s, e) => { const w = measureHook ? measureHook(s, e) : null; return w !== null && w !== undefined ? w : (e.font ? advanceIn(e.font, s) : advance(s)) / 1000 * e.h * FONT_EM * (e.wf || 1); };

let layouts = new WeakMap();
/** Forget every measured text (a font was loaded or removed). */
export function resetTextLayouts() { layouts = new WeakMap(); }
/**
 * Text layout in the text's own frame (insertion point at 0,0, x along the text):
 * lines (wrapped to `ww` when the text has a wrap width, as multi-line text does), each line's
 * width and baseline y, and the box {x, y, w, h}. va: 'baseline' (first line's baseline at 0),
 * 'bottom', 'middle' or 'top' of the box; ha: 'left', 'center' or 'right'. `ls` scales the
 * line spacing. Cached per entity object (entities are replaced, never mutated).
 */
export function textLayout(e) {
  let lay = layouts.get(e);
  if (lay) return lay;
  let lines = String(e.s).split('\n');
  if (e.ww > 0) lines = lines.flatMap((l) => wrapLine(l, e));
  const rich = richOf(e);   // inline format codes kept (mtext.js): each line also comes as styled runs
  const runs = rich ? richRuns(lines, e, rich) : null;
  const widths = runs ? runs.map((rs) => rs.reduce((a, r) => a + r.w, 0)) : lines.map((l) => textWidth(l, e));
  const w = Math.max(...widths, e.h * 0.4);
  const ls = LINE_SPACING * (e.ls || 1);
  const h = e.h * (1 + (lines.length - 1) * ls);
  const x = e.ha === 'center' ? -w / 2 : e.ha === 'right' ? -w : 0;
  const top = e.va === 'top' ? 0 : e.va === 'middle' ? h / 2 : e.va === 'bottom' ? h : e.h;
  lay = { lines, widths, box: { x, y: top - h, w, h }, baselines: lines.map((_, k) => top - e.h - k * e.h * ls), ...(runs ? { runs } : {}) };
  if (e && typeof e === 'object') layouts.set(e, lay);
  return lay;
}

/** A stacked fraction is set at this fraction of the text height, as the other programs set it by default. */
export const STACK_SCALE = 0.7;
/**
 * The lines of a text with inline format codes as runs: [[{ text, st, x, w, hf, stack? }]] — x the run's start from the line's
 * left edge, w its advance (both in drawing units), hf the height factor (\H), stack { num, den } for a fraction. Each line is
 * a piece of the plain text in order (wrapping only drops the blanks it breaks at), so a character's style is its place.
 */
function richRuns(lines, e, rich) {
  const own = [];   // plain character → the segment it belongs to
  rich.segs.forEach((g, gi) => { for (let k = 0; k < g.text.length; k++) own.push(gi); });
  const s = String(e.s), em = e.h * FONT_EM * (e.wf || 1);
  let pos = 0;
  return lines.map((line) => {
    const i0 = line ? Math.max(pos, s.indexOf(line, pos)) : pos;
    if (line) pos = i0 + line.length;
    const rs = [];
    let x = 0;
    for (let k = 0; k < line.length;) {
      const gi = own[i0 + k], g = rich.segs[gi];
      let n = 1;
      while (k + n < line.length && own[i0 + k + n] === gi) n++;
      const text = line.slice(k, k + n);
      const hf = heightFactor(g?.st, e.h), wfac = g?.st?.w || 1;
      let r;
      if (g?.stack && n === g.text.length) {
        const sw = STACK_SCALE * hf * Math.max(advance(g.stack.num), advance(g.stack.den)) / 1000 * em;
        r = { text, st: g.st, x, w: sw, hf, stack: { num: g.stack.num, den: g.stack.den, sep: g.stack.sep } };
      } else r = { text, st: g?.st, x, w: advanceIn(g?.st?.font || e.font, text) / 1000 * em * hf * wfac, hf };
      rs.push(r); x += r.w; k += n;
    }
    return rs;
  });
}

/** Break one line into lines no wider than the text's wrap width (a word longer than that keeps its own line). */
function wrapLine(line, e) {
  if (textWidth(line, e) <= e.ww) return [line];
  const out = [];
  let cur = '';
  for (const word of line.split(/(?<= )/)) {
    if (cur && textWidth((cur + word).trimEnd(), e) > e.ww) { out.push(cur.trimEnd()); cur = word.trimStart(); } else cur += word;
  }
  if (cur || !out.length) out.push(cur.trimEnd());
  return out;
}

/** Corners of a text's box in world coordinates. */
export function textCorners(e) {
  const { box } = textLayout(e);
  const m = mMul(mTranslate(e.x, e.y), mRotate(e.rot || 0));
  return [[box.x, box.y], [box.x + box.w, box.y], [box.x + box.w, box.y + box.h], [box.x, box.y + box.h]].map(([x, y]) => mApply(m, { x, y }));
}

export function insertMatrix(e, blk) {
  const b = blk.base || { x: 0, y: 0 };
  return mMul(mTranslate(e.x, e.y), mMul(mRotate(e.rot || 0), mMul(mScale(e.sx ?? 1, e.sy ?? 1), mTranslate(-b.x, -b.y))));
}
export function mInverse(m) {
  const d = mDet(m);
  if (!d) return null;
  const [a, b, c, e, f, g] = m;
  return [e / d, -b / d, -c / d, a / d, (c * g - e * f) / d, (b * f - a * g) / d];
}

/**
 * Is a block's j-th attribute definition hidden by the visibility state the block shows? A dynamic block (dyn-blocks.js)
 * keeps each file object's shown flag in `dyn.shown`, and `dyn.ad` names the file object each attribute definition is.
 */
export function attdefHidden(blk, j) {
  const d = blk && blk.dyn;
  if (!d || !Array.isArray(d.ad) || !Array.isArray(d.shown)) return false;
  const i = d.ad[j];
  return Number.isInteger(i) && d.shown[i] === false;
}

/** An attribute tag as CAD programs keep it: upper case, no spaces. */
export const normTag = (t) => String(t ?? '').trim().toUpperCase().replace(/\s+/g, '_').slice(0, 255);

/**
 * Attributes of a block reference, as text entities in the BLOCK's coordinates (put them through
 * insertMatrix like the block's own entities). Each carries `tag`.
 *   block.attdefs [{ tag, prompt, def, x, y, h, rot, ha, va, wf, invisible, constant, preset, layer, color }]
 *   insert.attrs  { TAG: value }
 *   insert.attloc { TAG: { x, y, h, rot, ha, va, wf, invisible, layer, color } }  (an attribute placed
 *                 off its definition, e.g. moved in another program; also tags the block does not define)
 * A constant definition draws its default; a variable one draws the reference's value, if it has one.
 * Invisible attributes and empty values are left out unless `all`. So are the attributes a dynamic block's visibility state
 * hides (attdefHidden; 0.6.1 FIX-061-DYN-ATTRS): their values stay on the reference, and with `all` they come out marked
 * `hidden` (writers flag them invisible) — switching back to a state that shows them shows their values again.
 */
export function attrTexts(e, blk, all = false) {
  const out = [];
  if (!e.attrs && !blk?.attdefs?.length) return out;
  const vals = e.attrs || {};
  const has = (t) => Object.prototype.hasOwnProperty.call(vals, t);
  const make = (tag, value, d, hidden = false) => {
    const s = String(value ?? '');
    if (!d || (!all && (d.invisible || hidden || !s.trim()))) return;
    out.push({ type: 'text', layer: d.layer ?? '0', color: d.color ?? null, x: +d.x || 0, y: +d.y || 0, h: d.h > 0 ? d.h : 2.5, rot: d.rot || 0, ha: d.ha || 'left', va: d.va || 'baseline', wf: d.wf || 1, s, tag, ...(d.invisible ? { invisible: true } : {}), ...(hidden ? { hidden: true } : {}) });
  };
  const seen = new Set();
  (blk?.attdefs || []).forEach((d, j) => {
    seen.add(d.tag);
    const hidden = attdefHidden(blk, j);
    if (d.constant) make(d.tag, d.def, d, hidden);
    else if (has(d.tag)) make(d.tag, vals[d.tag], e.attloc?.[d.tag] || d, hidden);
  });
  for (const tag of Object.keys(vals)) if (!seen.has(tag) && e.attloc?.[tag]) make(tag, vals[tag], e.attloc[tag]);
  return out;
}

/** A primitive through a transform (arcs become polylines when the transform is not similar). */
export function txPrim(p, m) {
  if (p.k === 'L') { const a = mApply(m, { x: p.x1, y: p.y1 }), b = mApply(m, { x: p.x2, y: p.y2 }); return [{ k: 'L', x1: a.x, y1: a.y, x2: b.x, y2: b.y }]; }
  const sim = mSimilar(m);
  if (sim) {
    const c = mApply(m, { x: p.cx, y: p.cy });
    if (p.full) return [{ k: 'A', cx: c.x, cy: c.y, r: p.r * sim.s, a0: 0, a1: TAU, full: true }];
    // A mirror reverses the direction of travel: the image of the old end is the new CCW start.
    const s = mApply(m, primPoint(p, sim.flip ? 1 : 0));
    const a0 = normAngle(Math.atan2(s.y - c.y, s.x - c.x));
    return [{ k: 'A', cx: c.x, cy: c.y, r: p.r * sim.s, a0, a1: a0 + (p.a1 - p.a0) }];
  }
  const out = [], n = Math.max(8, Math.ceil(48 * (p.a1 - p.a0) / TAU));
  let prev = mApply(m, primPoint(p, 0));
  for (let i = 1; i <= n; i++) { const q = mApply(m, primPoint(p, i / n)); out.push({ k: 'L', x1: prev.x, y1: prev.y, x2: q.x, y2: q.y }); prev = q; }
  return out;
}

// ---------------------------------------------------------------------------
// Primitive helpers

export function primPoint(p, t) {
  if (p.k === 'L') return { x: p.x1 + (p.x2 - p.x1) * t, y: p.y1 + (p.y2 - p.y1) * t };
  const a = p.a0 + (p.a1 - p.a0) * t;
  return { x: p.cx + p.r * Math.cos(a), y: p.cy + p.r * Math.sin(a) };
}

/** Parameter of the point on p closest to q (clamped to [0, 1]). */
export function primParam(p, q, clamp = true) {
  if (p.k === 'L') {
    const dx = p.x2 - p.x1, dy = p.y2 - p.y1, L = dx * dx + dy * dy;
    let t = L < EPS * EPS ? 0 : ((q.x - p.x1) * dx + (q.y - p.y1) * dy) / L;
    return clamp ? Math.max(0, Math.min(1, t)) : t;
  }
  const a = Math.atan2(q.y - p.cy, q.x - p.cx), sweep = p.a1 - p.a0;
  let d = normAngle(a - p.a0);
  if (d > sweep + EPS) {   // outside the sweep: nearest end (or extrapolate)
    if (!clamp) return d / sweep;
    const after = d - sweep, before = TAU - d;
    return after < before ? 1 : 0;
  }
  return d / sweep;
}

export function distToPrim(p, q) { return dist(q, primPoint(p, primParam(p, q))); }

export function primLength(p) { return p.k === 'L' ? Math.hypot(p.x2 - p.x1, p.y2 - p.y1) : p.r * (p.a1 - p.a0); }

/** Intersections of two primitives (on both). `ext1`/`ext2`: treat as unbounded (line / full circle). */
export function intersect(p, q, ext1 = false, ext2 = false) {
  let pts;
  if (p.k === 'L' && q.k === 'L') pts = llInter(p, q);
  else if (p.k === 'L') pts = lcInter(p, q);
  else if (q.k === 'L') pts = lcInter(q, p);
  else pts = ccInter(p, q);
  const tol = 1e-7;
  return pts.filter((x) => (ext1 || onPrim(p, x, tol)) && (ext2 || onPrim(q, x, tol)));
}

function onPrim(p, x, tol) {
  if (p.k === 'L') {
    const t = primParam(p, x, false), L = primLength(p);
    return t >= -tol / Math.max(L, EPS) - 1e-9 && t <= 1 + tol / Math.max(L, EPS) + 1e-9;
  }
  return onSweep(Math.atan2(x.y - p.cy, x.x - p.cx), p.a0, p.a1, 1e-7);
}

function llInter(a, b) {
  const d1x = a.x2 - a.x1, d1y = a.y2 - a.y1, d2x = b.x2 - b.x1, d2y = b.y2 - b.y1;
  const den = d1x * d2y - d1y * d2x;
  if (Math.abs(den) < 1e-12 * Math.hypot(d1x, d1y) * Math.hypot(d2x, d2y)) return [];
  const t = ((b.x1 - a.x1) * d2y - (b.y1 - a.y1) * d2x) / den;
  return [{ x: a.x1 + d1x * t, y: a.y1 + d1y * t }];
}

function lcInter(l, c) {
  const dx = l.x2 - l.x1, dy = l.y2 - l.y1, fx = l.x1 - c.cx, fy = l.y1 - c.cy;
  const A = dx * dx + dy * dy, B = 2 * (fx * dx + fy * dy), C = fx * fx + fy * fy - c.r * c.r;
  if (A < EPS * EPS) return [];
  let disc = B * B - 4 * A * C;
  if (disc < 0) { if (disc > -1e-9 * B * B) disc = 0; else return []; }
  const s = Math.sqrt(disc), out = [];
  for (const t of disc === 0 ? [-B / (2 * A)] : [(-B - s) / (2 * A), (-B + s) / (2 * A)]) out.push({ x: l.x1 + dx * t, y: l.y1 + dy * t });
  return out;
}

function ccInter(a, b) {
  const d = Math.hypot(b.cx - a.cx, b.cy - a.cy);
  if (d < EPS || d > a.r + b.r + 1e-9 || d < Math.abs(a.r - b.r) - 1e-9) return [];
  const x = (d * d + a.r * a.r - b.r * b.r) / (2 * d);
  const h = Math.sqrt(Math.max(0, a.r * a.r - x * x));
  const ux = (b.cx - a.cx) / d, uy = (b.cy - a.cy) / d;
  const px = a.cx + ux * x, py = a.cy + uy * x;
  if (h < 1e-12) return [{ x: px, y: py }];
  return [{ x: px - uy * h, y: py + ux * h }, { x: px + uy * h, y: py - ux * h }];
}

// ---------------------------------------------------------------------------
// Bounds and picking

export function emptyBounds() { return { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }; }
export function growPt(b, x, y) { if (x < b.minX) b.minX = x; if (y < b.minY) b.minY = y; if (x > b.maxX) b.maxX = x; if (y > b.maxY) b.maxY = y; }
export function validBounds(b) { return b.minX <= b.maxX && b.minY <= b.maxY; }

export function primBounds(p, b = emptyBounds()) {
  if (p.k === 'L') { growPt(b, p.x1, p.y1); growPt(b, p.x2, p.y2); return b; }
  const s = primPoint(p, 0), e = primPoint(p, 1);
  growPt(b, s.x, s.y); growPt(b, e.x, e.y);
  for (let k = 0; k < 4; k++) {
    const a = k * Math.PI / 2;
    if (onSweep(a, p.a0, p.a1)) growPt(b, p.cx + p.r * Math.cos(a), p.cy + p.r * Math.sin(a));
  }
  return b;
}

export function entityBounds(e, blocks) {
  const b = emptyBounds();
  if (UNBOUNDED.has(e.type)) return b;   // construction lines have no extents (DR.6)
  if (e.type === 'point') { growPt(b, e.x, e.y); return b; }
  for (const p of prims(e, blocks)) primBounds(p, b);
  if (e.type === 'insert' && !validBounds(b)) growPt(b, e.x, e.y);
  return b;
}

/** Distance from q to an entity (text and hatch count as hit anywhere inside). */
export function distToEntity(e, q, blocks) {
  if (e.type === 'point') return dist(e, q);
  if (e.type === 'text' && pointInPoly(q, textCorners(e))) return 0;
  if (e.type === 'hatch' && e.loops.some((l) => pointInFlat(q, l))) return 0;
  if (e.type === 'insert' && e.attrs) {   // a click on an attribute's text picks its reference
    const blk = blocks?.get(e.block);
    if (blk) { const m = insertMatrix(e, blk); if (attrTexts(e, blk).some((t) => pointInPoly(q, textCorners(txEntity(t, m))))) return 0; }
  }
  let best = Infinity;
  for (const p of prims(e, blocks)) best = Math.min(best, distToPrim(p, q));
  return best;
}

export function pointInPoly(q, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    if ((pts[i].y > q.y) !== (pts[j].y > q.y) && q.x < (pts[j].x - pts[i].x) * (q.y - pts[i].y) / (pts[j].y - pts[i].y) + pts[i].x) inside = !inside;
  }
  return inside;
}
function pointInFlat(q, f) {
  const pts = [];
  for (let i = 0; i + 1 < f.length; i += 2) pts.push({ x: f[i], y: f[i + 1] });
  return pointInPoly(q, pts);
}

/** Window (fully inside) or crossing (inside or touching) selection test. */
export function inWindow(e, w, crossing, blocks) {
  if (UNBOUNDED.has(e.type)) return crossing && !!clipInfinite({ x: e.x, y: e.y }, { x: e.dx, y: e.dy }, w, e.type === 'ray');   // never inside a window (DR.6)
  const b = entityBounds(e, blocks);
  if (!validBounds(b)) return false;
  const inside = b.minX >= w.minX && b.maxX <= w.maxX && b.minY >= w.minY && b.maxY <= w.maxY;
  if (inside || !crossing) return inside;
  if (b.maxX < w.minX || b.minX > w.maxX || b.maxY < w.minY || b.minY > w.maxY) return false;
  const edges = [
    { k: 'L', x1: w.minX, y1: w.minY, x2: w.maxX, y2: w.minY }, { k: 'L', x1: w.maxX, y1: w.minY, x2: w.maxX, y2: w.maxY },
    { k: 'L', x1: w.maxX, y1: w.maxY, x2: w.minX, y2: w.maxY }, { k: 'L', x1: w.minX, y1: w.maxY, x2: w.minX, y2: w.minY },
  ];
  const ps = prims(e, blocks);
  for (const p of ps) {
    const s = primPoint(p, 0);
    if (s.x >= w.minX && s.x <= w.maxX && s.y >= w.minY && s.y <= w.maxY) return true;
    for (const ed of edges) if (intersect(p, ed).length) return true;
  }
  if (e.type === 'text' || e.type === 'hatch') return true;   // the window sits inside its box
  return false;
}

/** Objects a fence (an open run of points) crosses or touches. */
export function fenceHits(entities, pts, blocks) {
  const segs = [];
  for (let i = 0; i + 1 < pts.length; i++) if (dist(pts[i], pts[i + 1]) > EPS) segs.push({ k: 'L', x1: pts[i].x, y1: pts[i].y, x2: pts[i + 1].x, y2: pts[i + 1].y });
  if (!segs.length) return [];
  const fb = emptyBounds();
  for (const s of segs) primBounds(s, fb);
  const out = [];
  for (const e of entities) {
    if (e.type === 'point') { if (segs.some((s) => distToPrim(s, e) <= 1e-9)) out.push(e.id); continue; }
    if (UNBOUNDED.has(e.type)) { if (prims(e).some((p) => segs.some((s) => intersect(p, s).length))) out.push(e.id); continue; }
    const b = entityBounds(e, blocks);
    if (!validBounds(b) || b.maxX < fb.minX || b.minX > fb.maxX || b.maxY < fb.minY || b.minY > fb.maxY) continue;
    if (prims(e, blocks).some((p) => segs.some((s) => intersect(p, s).length))) out.push(e.id);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Object snaps

export const SNAP_KINDS = ['end', 'mid', 'cen', 'quad', 'int', 'perp', 'tan', 'near', 'node', 'ins'];

/**
 * Tangents (0.5 DR.3). tangentFrom(p, c) → the points on circle c ({ cx, cy, r }) where a line from p touches it (none when p
 * is inside). commonTangents(c1, c2) → [[a, b]…] the lines touching both (outer pair first, then the inner pair).
 * resolveTangent(t, other) → the touch point of a deferred tangent t ({ c, near }) once the other end is known: a point,
 * or another deferred tangent (then [a, b]); the candidate nearest each pick wins.
 */
export function tangentFrom(p, c) {
  const dx = p.x - c.cx, dy = p.y - c.cy, d = Math.hypot(dx, dy);
  if (d < c.r - EPS) return [];
  if (d <= c.r + EPS) return [{ x: p.x, y: p.y }];
  const a = Math.atan2(dy, dx), b = Math.acos(c.r / d);
  return [a + b, a - b].map((t) => ({ x: c.cx + c.r * Math.cos(t), y: c.cy + c.r * Math.sin(t) }));
}
export function commonTangents(c1, c2) {
  const dx = c2.cx - c1.cx, dy = c2.cy - c1.cy, d = Math.hypot(dx, dy);
  if (d < EPS) return [];
  const out = [], base = Math.atan2(dy, dx);
  for (const sgn of [1, -1]) {   // 1: outer (same side), −1: inner (crossing between)
    const k = (c1.r - sgn * c2.r) / d;
    if (Math.abs(k) > 1 + 1e-12) continue;
    const g = Math.acos(Math.max(-1, Math.min(1, k)));
    for (const t of [base + g, base - g]) {
      const n = { x: Math.cos(t), y: Math.sin(t) };
      out.push([{ x: c1.cx + c1.r * n.x, y: c1.cy + c1.r * n.y }, { x: c2.cx + sgn * c2.r * n.x, y: c2.cy + sgn * c2.r * n.y }]);
    }
  }
  return out;
}
export function resolveTangent(t, other) {
  if (other && other.tan) {
    const pairs = commonTangents(t.c, other.tan.c);
    if (!pairs.length) return null;
    let best = null, bd = Infinity;
    for (const [a, b] of pairs) { const sc = dist(a, t.near) + dist(b, other.tan.near); if (sc < bd) { bd = sc; best = [a, b]; } }
    return best;
  }
  const cands = tangentFrom(other, t.c);
  if (!cands.length) return null;
  return cands.reduce((m, q) => (dist(q, t.near) < dist(m, t.near) ? q : m));
}

/** Snap candidates of one entity near q (within r world units). */
export function snapPoints(e, q, r, kinds, blocks, base) {
  const out = [];
  const add = (kind, p) => { if (kinds.has(kind) && Math.abs(p.x - q.x) <= r && Math.abs(p.y - q.y) <= r) out.push({ kind, x: p.x, y: p.y }); };
  if (e.type === 'point') { add('node', e); return out; }
  if (e.type === 'text') { add('ins', e); return out; }
  if (e.type === 'insert') add('ins', e);
  if (UNBOUNDED.has(e.type)) {   // no end or mid: only nearest and perpendicular here (intersections come from view.snap)
    const p = prims(e)[0];
    if (base && kinds.has('perp')) { const t = primParam(p, base, false); if (t >= 0 && t <= 1) add('perp', primPoint(p, t)); }
    if (kinds.has('near')) { const n = primPoint(p, primParam(p, q)); if (dist(n, q) <= r) out.push({ kind: 'near', x: n.x, y: n.y }); }
    return out;
  }
  const ps = prims(e, blocks);
  for (const p of ps) {
    if (p.box) continue;
    if (p.k === 'L') {
      add('end', { x: p.x1, y: p.y1 }); add('end', { x: p.x2, y: p.y2 });
      add('mid', { x: (p.x1 + p.x2) / 2, y: (p.y1 + p.y2) / 2 });
    } else {
      add('cen', { x: p.cx, y: p.cy });
      if (!p.full) { add('end', primPoint(p, 0)); add('end', primPoint(p, 1)); add('mid', primPoint(p, 0.5)); }
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; if (onSweep(a, p.a0, p.a1)) add('quad', { x: p.cx + p.r * Math.cos(a), y: p.cy + p.r * Math.sin(a) }); }
    }
    if (base && kinds.has('perp')) {
      if (p.k === 'L') { const t = primParam(p, base, false); if (t >= 0 && t <= 1) add('perp', primPoint(p, t)); }
      else { const a = Math.atan2(base.y - p.cy, base.x - p.cx); if (onSweep(a, p.a0, p.a1)) add('perp', { x: p.cx + p.r * Math.cos(a), y: p.cy + p.r * Math.sin(a) }); }
    }
    if (kinds.has('tan') && p.k === 'A') {   // DR.3: from the base point, the touch points on the arc; no base yet: deferred
      const c = { cx: p.cx, cy: p.cy, r: p.r };
      if (base) { for (const q of tangentFrom(base, c)) if (onSweep(Math.atan2(q.y - p.cy, q.x - p.cx), p.a0, p.a1)) add('tan', q); }
      else {
        const a = Math.atan2(q.y - p.cy, q.x - p.cx), n = { x: p.cx + p.r * Math.cos(a), y: p.cy + p.r * Math.sin(a) };
        if (onSweep(a, p.a0, p.a1) && Math.abs(Math.hypot(q.x - p.cx, q.y - p.cy) - p.r) <= r) out.push({ kind: 'tan', x: n.x, y: n.y, defer: c });
      }
    }
    if (kinds.has('near')) { const n = primPoint(p, primParam(p, q)); if (dist(n, q) <= r) out.push({ kind: 'near', x: n.x, y: n.y }); }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Transforms of entities (move, rotate, scale, mirror, grips)

/** A new entity: e put through the affine m (similar transforms only, except inserts and text). */
export function txEntity(e, m) {
  const P = (x, y) => mApply(m, { x, y });
  const sim = mSimilar(m) || { s: Math.sqrt(Math.abs(mDet(m))), rot: Math.atan2(m[1], m[0]), flip: mDet(m) < 0 };
  switch (e.type) {
    case 'line': { const a = P(e.x1, e.y1), b = P(e.x2, e.y2); return { ...e, x1: a.x, y1: a.y, x2: b.x, y2: b.y }; }
    case 'point': { const a = P(e.x, e.y); return { ...e, x: a.x, y: a.y }; }
    case 'circle': { const c = P(e.cx, e.cy); return { ...e, cx: c.x, cy: c.y, r: e.r * sim.s }; }
    case 'arc': {
      const c = P(e.cx, e.cy);
      const s = P(e.cx + e.r * Math.cos(e.a0), e.cy + e.r * Math.sin(e.a0)), t = P(e.cx + e.r * Math.cos(e.a1), e.cy + e.r * Math.sin(e.a1));
      let a0 = Math.atan2(s.y - c.y, s.x - c.x), a1 = Math.atan2(t.y - c.y, t.x - c.x);
      if (sim.flip) [a0, a1] = [a1, a0];
      return { ...e, cx: c.x, cy: c.y, r: e.r * sim.s, a0: normAngle(a0), a1: normAngle(a1) };
    }
    case 'poly': return { ...e, pts: e.pts.map((p) => ({ ...P(p.x, p.y), b: sim.flip ? -(p.b || 0) : (p.b || 0) })) };
    case 'ellipse': {
      const c = P(e.cx, e.cy), a = P(e.cx + e.mx, e.cy + e.my);
      let t0 = e.t0, t1 = e.t1;
      if (sim.flip && t1 - t0 < TAU - EPS) [t0, t1] = [TAU - t1, TAU - t0];
      return { ...e, cx: c.x, cy: c.y, mx: a.x - c.x, my: a.y - c.y, t0, t1 };
    }
    case 'spline': {
      const Q = (p) => P(p.x, p.y);
      const dir = (d) => (d ? { x: m[0] * d.x + m[2] * d.y, y: m[1] * d.x + m[3] * d.y } : d);   // a direction: the matrix without its move
      const out = { ...e, ctrl: e.ctrl.map(Q), ...(e.fit ? { fit: e.fit.map(Q) } : {}) };
      if (e.st) out.st = dir(e.st);
      if (e.et) out.et = dir(e.et);
      return out;
    }
    case 'text': {
      const a = P(e.x, e.y);
      let rot = (e.rot || 0) + sim.rot;
      if (sim.flip) {
        // Mirrored text is placed mirrored but stays readable (MIRRTEXT 0): reflect the
        // direction across the mirror line, then turn it round if it would read right to left.
        rot = Math.atan2(m[1], m[0]) - (e.rot || 0);
        if (Math.cos(rot) < -1e-9) rot += Math.PI;
      }
      return { ...e, x: a.x, y: a.y, h: e.h * sim.s, rot: normAngle(rot), ...(e.ww ? { ww: e.ww * sim.s } : {}) };
    }
    case 'insert': {
      const a = P(e.x, e.y);
      // a mirror m = R(α)·diag(1, −1) turns R(r)·S(sx, sy) into R(α − r)·S(sx, −sy) = R(α + π − r)·S(−sx, sy) (X scale negative,
      // as AutoCAD keeps it); a plain rotation adds. (Fixed 2026-10-13, session addons: a mirror used to add α, landing 180° off.)
      const rot = sim.flip ? sim.rot + Math.PI - (e.rot || 0) : (e.rot || 0) + sim.rot;
      return { ...e, x: a.x, y: a.y, rot: normAngle(rot), sx: (e.sx ?? 1) * sim.s * (sim.flip ? -1 : 1), sy: (e.sy ?? 1) * sim.s };
    }
    case 'hatch': {
      const out = { ...e, loops: e.loops.map((l) => { const o = []; for (let i = 0; i + 1 < l.length; i += 2) { const p = P(l[i], l[i + 1]); o.push(p.x, p.y); } return o; }) };
      if (!e.solid) {   // the pattern goes with the hatch (0.9 PLAN2D.1): its origin always; a built-in pattern's angle and scale on a turn or scale, not a mirror
        const o = P(e.ox || 0, e.oy || 0);
        if (o.x) out.ox = o.x; else delete out.ox;
        if (o.y) out.oy = o.y; else delete out.oy;
        if (!e.patlines?.length && !sim.flip) {
          if (Math.abs(sim.rot) > 1e-12) out.pangle = normAngle((e.pangle || 0) + sim.rot);
          if (Math.abs(sim.s - 1) > 1e-12) out.pscale = (e.pscale > 0 ? e.pscale : 1) * sim.s;
        }
      }
      return out;
    }
    case 'dim': {
      const out = { ...e };
      delete out.block;                     // its imported geometry no longer fits: draw it again
      for (const k of ['p1', 'p2', 'c', 'loc']) if (e[k]) out[k] = P(e[k].x, e[k].y);
      if (e.kind === 'linear') { const u = { x: m[0] * Math.cos(e.rot || 0) + m[2] * Math.sin(e.rot || 0), y: m[1] * Math.cos(e.rot || 0) + m[3] * Math.sin(e.rot || 0) }; out.rot = normAngle(Math.atan2(u.y, u.x)); }
      return out;
    }
    case 'viewport': {
      const c = P(e.x, e.y);
      return { ...e, x: c.x, y: c.y, w: e.w * sim.s, h: e.h * sim.s, s: e.s * sim.s };
    }
    case 'xline': case 'ray': {
      const a = P(e.x, e.y), u = unitDir(m[0] * e.dx + m[2] * e.dy, m[1] * e.dx + m[3] * e.dy) || { dx: e.dx, dy: e.dy };
      return { ...e, x: a.x, y: a.y, dx: u.dx, dy: u.dy };
    }
    case 'mleader': {
      const pts = e.pts.map((p) => P(p.x, p.y)), last = e.pts[e.pts.length - 1];
      // the landing keeps pointing the way it pointed (a mirror can turn it round); the text stays level
      const far = P(last.x + (e.dir === -1 ? -1 : 1), last.y), q = pts[pts.length - 1];
      const st = leaderStyle(e), k = sim.s;
      return { ...e, pts, dir: far.x >= q.x ? 1 : -1, h: (e.h || st.asz) * k, ...(e.ww ? { ww: e.ww * k } : {}), st: { ...st, asz: st.asz * k, dogleg: st.dogleg * k, gap: st.gap * k } };
    }
    default: return { ...e };
  }
}

/** Add-on objects' grips (0.4 part 2 A.4, addons/objects.js): { grips(e) → list | null, gripMove(e, key, to) → e | null }. */
export const gripHooks = new Set();

/** Grip points of an entity: [{ x, y, key }]. Moving a grip = gripMove(e, key, dx, dy). */
export function grips(e) {
  for (const h of gripHooks) { const r = h.grips(e); if (r) return r; }
  switch (e.type) {
    case 'line': return [{ x: e.x1, y: e.y1, key: 'p1' }, { x: (e.x1 + e.x2) / 2, y: (e.y1 + e.y2) / 2, key: 'mid' }, { x: e.x2, y: e.y2, key: 'p2' }];
    case 'circle': return [{ x: e.cx, y: e.cy, key: 'c' }, ...[0, 1, 2, 3].map((k) => ({ x: e.cx + e.r * Math.cos(k * Math.PI / 2), y: e.cy + e.r * Math.sin(k * Math.PI / 2), key: 'r' }))];
    case 'arc': return [{ x: e.cx, y: e.cy, key: 'c' }, { ...polar({ x: e.cx, y: e.cy }, e.a0, e.r), key: 'a0' }, { ...polar({ x: e.cx, y: e.cy }, e.a1, e.r), key: 'a1' }];
    case 'poly': return e.pts.map((p, i) => ({ x: p.x, y: p.y, key: 'v' + i }));
    case 'ellipse': return [{ x: e.cx, y: e.cy, key: 'c' }];
    case 'spline': return e.fit ? e.fit.map((p, i) => ({ x: p.x, y: p.y, key: 'f' + i })) : e.ctrl.slice(0, e.periodic ? e.ctrl.length - e.degree : e.ctrl.length).map((p, i) => ({ x: p.x, y: p.y, key: 'c' + i }));
    case 'text': case 'point': case 'insert': case 'xline': case 'ray': return [{ x: e.x, y: e.y, key: 'p' }];
    case 'dim': return ['p1', 'p2', 'c', 'loc'].filter((k) => e[k] && !(k === 'p2' && (e.kind === 'radius' || e.kind === 'diameter'))).map((k) => ({ x: e[k].x, y: e[k].y, key: k }));
    case 'viewport': return [{ x: e.x, y: e.y, key: 'c' }, ...viewportCorners(e).map((p, i) => ({ ...p, key: 'k' + i }))];
    case 'mleader': return e.pts.map((p, i) => ({ x: p.x, y: p.y, key: 'v' + i }));
    default: return [];
  }
}

export function gripMove(e, key, to) {
  for (const h of gripHooks) { const r = h.gripMove(e, key, to); if (r) return r; }
  switch (e.type) {
    case 'line':
      if (key === 'p1') return { ...e, x1: to.x, y1: to.y };
      if (key === 'p2') return { ...e, x2: to.x, y2: to.y };
      { const dx = to.x - (e.x1 + e.x2) / 2, dy = to.y - (e.y1 + e.y2) / 2; return { ...e, x1: e.x1 + dx, y1: e.y1 + dy, x2: e.x2 + dx, y2: e.y2 + dy }; }
    case 'circle': return key === 'c' ? { ...e, cx: to.x, cy: to.y } : { ...e, r: Math.max(dist({ x: e.cx, y: e.cy }, to), EPS) };
    case 'arc':
      if (key === 'c') return { ...e, cx: to.x, cy: to.y };
      return { ...e, [key]: normAngle(Math.atan2(to.y - e.cy, to.x - e.cx)) };
    case 'poly': { const i = +key.slice(1); return { ...e, pts: e.pts.map((p, j) => (j === i ? { ...p, x: to.x, y: to.y } : p)) }; }
    case 'ellipse': return { ...e, cx: to.x, cy: to.y };
    case 'spline': return key[0] === 'f' ? splineEditFit(e, +key.slice(1), to) : splineMoveCtrl(e, +key.slice(1), to);
    case 'text': case 'point': case 'insert': case 'xline': case 'ray': return { ...e, x: to.x, y: to.y };
    case 'dim': {
      const out = { ...e };
      delete out.block;
      if (key === 'c' && (e.kind === 'radius' || e.kind === 'diameter')) {
        const dx = to.x - e.c.x, dy = to.y - e.c.y, mv = (p) => ({ x: p.x + dx, y: p.y + dy });
        return { ...out, c: mv(e.c), p1: mv(e.p1), loc: mv(e.loc) };
      }
      out[key] = { x: to.x, y: to.y };
      return out;
    }
    case 'mleader': {
      // the tip and the bends move alone; the landing's start takes the landing and the text along
      const i = +key.slice(1);
      return { ...e, pts: e.pts.map((p, j) => (j === i ? { x: to.x, y: to.y } : p)) };
    }
    case 'viewport': {
      if (key === 'c') return { ...e, x: to.x, y: to.y };
      // a corner: the opposite corner stays, and so does the view on the sheet
      const k = +key.slice(1), c = viewportCorners(e), o = c[(k + 2) % 4];
      const w = Math.max(Math.abs(to.x - o.x), EPS), h = Math.max(Math.abs(to.y - o.y), EPS);
      const x = (to.x + o.x) / 2, y = (to.y + o.y) / 2;
      const tc = Math.cos(-(e.tw || 0)), tn = Math.sin(-(e.tw || 0)), dx = (x - e.x) / e.s, dy = (y - e.y) / e.s;   // the move on paper, back into a twisted view
      return { ...e, x, y, w, h, cx: e.cx + tc * dx - tn * dy, cy: e.cy + tn * dx + tc * dy };
    }
    default: return e;
  }
}

// ---------------------------------------------------------------------------
// Offset

/** An entity offset by d toward the side of `side` (a point), or null. */
export function offsetEntity(e, d, side) {
  switch (e.type) {
    case 'line': {
      const L = Math.hypot(e.x2 - e.x1, e.y2 - e.y1); if (L < EPS) return null;
      let nx = -(e.y2 - e.y1) / L, ny = (e.x2 - e.x1) / L;
      if ((side.x - e.x1) * nx + (side.y - e.y1) * ny < 0) { nx = -nx; ny = -ny; }
      return { ...e, x1: e.x1 + nx * d, y1: e.y1 + ny * d, x2: e.x2 + nx * d, y2: e.y2 + ny * d };
    }
    case 'circle': case 'arc': {
      const out = dist({ x: e.cx, y: e.cy }, side) > e.r;
      const r = e.r + (out ? d : -d);
      return r > EPS ? { ...e, r } : null;
    }
    case 'poly': return offsetPoly(e, d, side);
    case 'xline': case 'ray': {
      let nx = -e.dy, ny = e.dx;
      if ((side.x - e.x) * nx + (side.y - e.y) * ny < 0) { nx = -nx; ny = -ny; }
      return { ...e, x: e.x + nx * d, y: e.y + ny * d };
    }
    default: return null;
  }
}

function offsetPoly(e, d, side) {
  // Signed offset: decide the side from the nearest segment, then offset every segment the same way.
  const ps = polyPrims(e);
  if (!ps.length) return null;
  let near = ps[0], nd = Infinity;
  for (const p of ps) { const x = distToPrim(p, side); if (x < nd) { nd = x; near = p; } }
  const leftOf = (p, q) => {
    if (p.k === 'L') return (p.x2 - p.x1) * (q.y - p.y1) - (p.y2 - p.y1) * (q.x - p.x1) > 0;
    const outside = dist({ x: p.cx, y: p.cy }, q) > p.r;
    return p.rev ? outside : !outside;      // CCW arc: left = inside
  };
  const sgn = leftOf(near, side) ? 1 : -1;  // +1 = offset to the left of travel
  const off = ps.map((p) => {
    if (p.k === 'L') {
      const L = Math.hypot(p.x2 - p.x1, p.y2 - p.y1) || 1, nx = -(p.y2 - p.y1) / L * d * sgn, ny = (p.x2 - p.x1) / L * d * sgn;
      return { ...p, x1: p.x1 + nx, y1: p.y1 + ny, x2: p.x2 + nx, y2: p.y2 + ny };
    }
    const toLeftInside = !p.rev;            // travelling CCW, the left side is the centre
    const r = p.r + (sgn > 0 === toLeftInside ? -d : d);
    return r > EPS ? { ...p, r } : null;
  });
  if (off.some((p) => !p)) return null;
  const start = (p) => (p.k === 'L' ? { x: p.x1, y: p.y1 } : primPoint(p, p.rev ? 1 : 0));
  const end = (p) => (p.k === 'L' ? { x: p.x2, y: p.y2 } : primPoint(p, p.rev ? 0 : 1));
  const n = off.length, pts = [];
  for (let i = 0; i < n; i++) {
    const p = off[i];
    let s = start(p);
    if (i > 0 || e.closed) {
      const prev = off[(i - 1 + n) % n];
      if (prev.k === 'L' && p.k === 'L') { const x = intersect(prev, p, true, true)[0]; if (x) s = x; }
    }
    pts.push({ x: s.x, y: s.y, b: e.pts[i].b || 0 });
  }
  if (!e.closed) { const last = end(off[n - 1]); pts.push({ x: last.x, y: last.y, b: 0 }); }
  return { ...e, pts };
}

// ---------------------------------------------------------------------------
// Trim and extend

/** Parameter along the whole entity: poly → segment index + local t; circle/arc → fraction of sweep. */
function entityParams(e, cutters, blocks, edgeExtend = false) {
  const own = e.type === 'poly' ? polyPrims(e) : prims(e);
  const ts = [];
  own.forEach((p, i) => {
    // EDGEMODE 1: a cutting line or arc counts as the whole line or circle it lies on
    for (const c of cutters) for (const q of prims(c, blocks)) for (const x of intersect(p, q, false, edgeExtend && (c.type === 'line' || c.type === 'arc'))) {
      let t = primParam(p, x);
      if (p.rev) t = 1 - t;
      ts.push((e.type === 'poly' ? i : 0) + t);
    }
  });
  if (UNBOUNDED.has(e.type)) {   // a stand-in segment 2·FAR long: rounding t would move a cut by metres; keep it exact
    const u = ts.sort((a, b) => a - b).filter((t, i, l) => !i || t - l[i - 1] > 1e-15);
    return { own, ts: u };
  }
  return { own, ts: [...new Set(ts.map((t) => Math.round(t * 1e9) / 1e9))].sort((a, b) => a - b) };
}

function pickParam(e, own, q) {
  let best = 0, bd = Infinity;
  own.forEach((p, i) => { const d = distToPrim(p, q); if (d < bd) { bd = d; let t = primParam(p, q); if (p.rev) t = 1 - t; best = (e.type === 'poly' ? i : 0) + t; } });
  return best;
}

/** Trim e at the cutting edges around the picked point: returns the pieces that stay ([] = all gone, null = nothing to cut). */
export function trimEntity(e, cutters, pick, blocks) {
  if (!['line', 'arc', 'circle', 'poly', 'xline', 'ray'].includes(e.type)) return null;
  const { own, ts } = entityParams(e, cutters.filter((c) => c !== e), blocks);
  const tp = pickParam(e, own, pick);
  if (e.type === 'circle') {
    if (ts.length < 2) return null;
    const angs = ts.map((t) => t * TAU), ap = tp * TAU;
    let lo = angs[angs.length - 1] - TAU, hi = angs[0];
    for (let i = 0; i + 1 < angs.length; i++) if (ap >= angs[i] && ap <= angs[i + 1]) { lo = angs[i]; hi = angs[i + 1]; }
    if (ap > angs[angs.length - 1]) { lo = angs[angs.length - 1]; hi = angs[0] + TAU; }
    return [{ ...e, type: 'arc', a0: normAngle(hi), a1: normAngle(lo) }];
  }
  const maxT = e.type === 'poly' ? (e.closed ? e.pts.length : e.pts.length - 1) : 1;
  const tiny = UNBOUNDED.has(e.type) ? 1e-15 : 1e-9;   // t along a construction line's 2·FAR stand-in
  const inner = ts.filter((t) => t > tiny && t < maxT - tiny);
  if (e.type === 'poly' && e.closed) return trimClosedPoly(e, ts, tp);
  if (!inner.length) return null;
  let lo = 0, hi = maxT;
  for (const t of inner) { if (t < tp) lo = t; else if (t > tp) { hi = t; break; } }
  const keep = [];
  if (lo > tiny) keep.push(subEntity(e, 0, lo));
  if (hi < maxT - tiny) keep.push(subEntity(e, hi, maxT));
  return keep.filter(Boolean);
}

function trimClosedPoly(e, ts, tp) {
  const n = e.pts.length;
  if (ts.length < 2) return null;
  let lo = ts[ts.length - 1] - n, hi = ts[0];
  for (let i = 0; i + 1 < ts.length; i++) if (tp >= ts[i] && tp <= ts[i + 1]) { lo = ts[i]; hi = ts[i + 1]; }
  if (tp > ts[ts.length - 1]) { lo = ts[ts.length - 1]; hi = ts[0] + n; }
  // keep hi → lo + n, walking forward round the ring
  const open = { ...e, closed: false, pts: [...e.pts, ...e.pts, { ...e.pts[0] }] };
  return [subEntity(open, hi, lo + n)].filter(Boolean);
}

/** The piece of a line / arc / open poly between parameters t0 < t1. */
export function subEntity(e, t0, t1) {
  if (t1 - t0 < (UNBOUNDED.has(e.type) ? 1e-15 : 1e-9)) return null;
  if (UNBOUNDED.has(e.type)) {
    // along prims' stand-in segment: an end at 0 (xline) or 1 is still infinite; a cut end is a real point
    const p = prims(e)[0], at = (t) => primPoint(p, t);
    const open0 = e.type === 'xline' && t0 <= 1e-12, open1 = t1 >= 1 - 1e-12;
    if (open0 && open1) return { ...e };
    if (open1) { const a = at(t0); return { ...e, type: 'ray', x: a.x, y: a.y }; }
    if (open0) { const b = at(t1); return { ...e, type: 'ray', x: b.x, y: b.y, dx: -e.dx, dy: -e.dy }; }
    const a = at(t0), b = at(t1), out = { ...e, type: 'line', x1: a.x, y1: a.y, x2: b.x, y2: b.y };
    delete out.x; delete out.y; delete out.dx; delete out.dy;
    return out;
  }
  if (e.type === 'line') {
    const p = { x: e.x1 + (e.x2 - e.x1) * t0, y: e.y1 + (e.y2 - e.y1) * t0 }, q = { x: e.x1 + (e.x2 - e.x1) * t1, y: e.y1 + (e.y2 - e.y1) * t1 };
    return { ...e, x1: p.x, y1: p.y, x2: q.x, y2: q.y };
  }
  if (e.type === 'arc') {
    const [a0, a1] = arcRange(e.a0, e.a1), s = a1 - a0;
    return { ...e, a0: normAngle(a0 + s * t0), a1: normAngle(a0 + s * t1) };
  }
  // open poly
  const i0 = Math.floor(t0), i1 = Math.min(Math.ceil(t1) - 1, e.pts.length - 2);
  const pts = [];
  const at = (i, t) => {
    const p = e.pts[i], q = e.pts[i + 1], b = p.b || 0;
    if (Math.abs(b) < 1e-12) return { x: p.x + (q.x - p.x) * t, y: p.y + (q.y - p.y) * t };
    const a = bulgeArc(p, q, b), u = a.rev ? 1 - t : t;
    return primPoint(a, u);
  };
  const partBulge = (i, ta, tb) => { const b = e.pts[i].b || 0; return Math.abs(b) < 1e-12 ? 0 : Math.tan(Math.atan(b) * (tb - ta)); };
  for (let i = i0; i <= i1; i++) {
    const ta = i === i0 ? t0 - i : 0, tb = i === i1 ? t1 - i : 1;
    pts.push({ ...at(i, ta), b: partBulge(i, ta, tb) });
    if (i === i1) pts.push({ ...at(i, tb), b: 0 });
  }
  return { ...e, closed: false, pts };
}

/**
 * TRIM in pieces (0.4 T.1–T.3): e split at its cutting edges, so a pick, a freehand path, a fence or a crossing window can
 * name which pieces go. → { e, own, pieces: [{ t0, t1 }], maxT, closed } in entityParams' parameter (poly: segment index +
 * local t; circle: fraction of a turn, counter-clockwise from 0°), or null for objects TRIM does not cut. Pieces cover e
 * in order; a closed object's last piece runs past maxT round to the first cut. No cut = one piece, the whole object
 * (AutoCAD's Quick mode then erases it). `edgeExtend`: cutting lines and arcs extended (EDGEMODE 1).
 */
export function trimSplit(e, cutters, blocks, { edgeExtend = false } = {}) {
  if (!e || !['line', 'arc', 'circle', 'poly', 'xline', 'ray'].includes(e.type)) return null;
  if (e.type === 'poly' && e.pts.length < 2) return null;
  const { own, ts } = entityParams(e, cutters.filter((c) => c !== e && (c.id === undefined || c.id !== e.id)), blocks, edgeExtend);
  const closed = e.type === 'circle' || (e.type === 'poly' && !!e.closed);
  const maxT = e.type === 'poly' ? (e.closed ? e.pts.length : e.pts.length - 1) : 1;
  const pieces = [];
  if (closed) {
    const cuts = [...new Set(ts.map((t) => { const u = ((t % maxT) + maxT) % maxT; return Math.abs(u - maxT) < 1e-9 ? 0 : u; }))].sort((a, b) => a - b);
    if (cuts.length < 2) pieces.push({ t0: 0, t1: maxT, whole: true });
    else {
      for (let i = 0; i + 1 < cuts.length; i++) if (cuts[i + 1] - cuts[i] > 1e-9) pieces.push({ t0: cuts[i], t1: cuts[i + 1] });
      pieces.push({ t0: cuts[cuts.length - 1], t1: cuts[0] + maxT });
    }
  } else {
    const tiny = UNBOUNDED.has(e.type) ? 1e-15 : 1e-9;   // t along a construction line's 2·FAR stand-in
    const inner = ts.filter((t) => t > tiny && t < maxT - tiny);
    const at = [0, ...inner, maxT];
    for (let i = 0; i + 1 < at.length; i++) if (at[i + 1] - at[i] > tiny) pieces.push({ t0: at[i], t1: at[i + 1] });
  }
  return { e, own, pieces, maxT, closed };
}

/** The index of the piece of a trimSplit that holds the point nearest q. */
export function pieceAt(split, q) {
  const { e, own, pieces, maxT, closed } = split;
  let t = pickParam(e, own, q);
  if (closed && pieces.length > 1 && t < pieces[0].t0) t += maxT;
  let best = 0, bd = Infinity;
  pieces.forEach((pc, i) => { const d = t < pc.t0 ? pc.t0 - t : t > pc.t1 ? t - pc.t1 : 0; if (d < bd) { bd = d; best = i; } });
  return best;
}

/** One piece of a trimSplit as an object of its own (a line, an arc or an open polyline; the whole object when uncut). */
export function pieceEntity(split, i) {
  const { e, pieces } = split, pc = pieces[i];
  if (!pc) return null;
  if (pc.whole) return { ...e };
  return spanEntity(split, pc.t0, pc.t1);
}

function spanEntity(split, t0, t1) {
  const { e, maxT } = split;
  if (e.type === 'circle') return { ...e, type: 'arc', a0: normAngle(t0 * TAU), a1: normAngle(t1 * TAU) };
  if (e.type === 'poly' && e.closed) {
    const open = { ...e, closed: false, pts: [...e.pts, ...e.pts, { ...e.pts[0] }] };
    return subEntity(open, t0, t1 > t0 ? t1 : t1 + maxT);
  }
  return subEntity(e, t0, t1);
}

/**
 * What stays of a trimSplit when the pieces in `gone` (a Set of indexes) are removed: the kept runs joined back into one
 * object each ([] = nothing left), or null when nothing is removed.
 */
export function trimResult(split, gone) {
  const { pieces, closed } = split;
  if (!pieces.some((_, i) => gone.has(i))) return null;
  const runs = [];
  if (closed) {
    if (pieces.length === 1) return [];
    const n = pieces.length, start = pieces.findIndex((_, i) => gone.has(i));
    let run = null;
    for (let k = 1; k <= n; k++) {
      const i = (start + k) % n, pc = pieces[i];
      if (gone.has(i)) { if (run) runs.push(run); run = null; continue; }
      const t0 = run ? run.t0 : pc.t0;
      let t1 = pc.t1;
      while (t1 < t0 - 1e-12) t1 += split.maxT;   // the run carries on past the start round the loop
      run = { t0, t1 };
    }
    if (run) runs.push(run);
  } else {
    let run = null;
    pieces.forEach((pc, i) => {
      if (gone.has(i)) { if (run) runs.push(run); run = null; return; }
      run = run ? { t0: run.t0, t1: pc.t1 } : { t0: pc.t0, t1: pc.t1 };
    });
    if (run) runs.push(run);
  }
  return runs.map((r) => spanEntity(split, r.t0, r.t1)).filter(Boolean);
}

/** Points where an open run of points (a freehand path or a fence) crosses e. */
export function pathCrossings(e, pts, blocks) {
  const out = [];
  const own = e.type === 'poly' ? polyPrims(e) : prims(e, blocks);
  for (let i = 0; i + 1 < pts.length; i++) {
    if (dist(pts[i], pts[i + 1]) <= EPS) continue;
    const s = { k: 'L', x1: pts[i].x, y1: pts[i].y, x2: pts[i + 1].x, y2: pts[i + 1].y };
    for (const p of own) for (const x of intersect(p, s)) out.push(x);
  }
  return out;
}

/** The part an EXTEND adds (old → new), for the preview: a line, an arc or the moved end segment of a polyline. */
export function extensionPart(old, nu) {
  if (!old || !nu) return null;
  if (old.type === 'line') {
    const s = dist({ x: old.x1, y: old.y1 }, { x: nu.x1, y: nu.y1 }) > EPS;
    return s ? { type: 'line', x1: old.x1, y1: old.y1, x2: nu.x1, y2: nu.y1 } : { type: 'line', x1: old.x2, y1: old.y2, x2: nu.x2, y2: nu.y2 };
  }
  if (old.type === 'arc') {
    if (Math.abs(normAngle(old.a0 - nu.a0)) > 1e-12 && Math.abs(normAngle(old.a0 - nu.a0) - TAU) > 1e-12) return { ...old, a0: nu.a0, a1: old.a0 };
    return { ...old, a0: old.a1, a1: nu.a1 };
  }
  if (old.type === 'poly') {
    const n = old.pts.length;
    const i = dist(old.pts[0], nu.pts[0]) > EPS ? 0 : n - 1;
    return { type: 'line', x1: old.pts[i].x, y1: old.pts[i].y, x2: nu.pts[i].x, y2: nu.pts[i].y };
  }
  return null;
}

/** Extend the end of e nearest `pick` to the closest boundary. Returns the new entity or null. */
export function extendEntity(e, boundaries, pick, blocks, { edgeExtend = false } = {}) {
  // EDGEMODE 1: a boundary line or arc counts as the whole line or circle it lies on
  const bps = boundaries.filter((b) => b !== e && (b.id === undefined || b.id !== e.id)).flatMap((b) => prims(b, blocks).map((q) => ({ q, ext: edgeExtend && (b.type === 'line' || b.type === 'arc') })));
  if (e.type === 'line') {
    const atStart = dist(pick, { x: e.x1, y: e.y1 }) < dist(pick, { x: e.x2, y: e.y2 });
    const from = atStart ? { x: e.x2, y: e.y2 } : { x: e.x1, y: e.y1 }, to = atStart ? { x: e.x1, y: e.y1 } : { x: e.x2, y: e.y2 };
    const L = dist(from, to); if (L < EPS) return null;
    const ray = { k: 'L', x1: from.x, y1: from.y, x2: to.x, y2: to.y };
    let best = null;
    for (const { q, ext } of bps) for (const x of intersect(ray, q, true, ext)) {
      const t = primParam(ray, x, false);
      if (t > 1 + 1e-9 && (!best || t < best.t)) best = { t, x };
    }
    if (!best) return null;
    return atStart ? { ...e, x1: best.x.x, y1: best.x.y } : { ...e, x2: best.x.x, y2: best.x.y };
  }
  if (e.type === 'arc') {
    const [a0, a1] = arcRange(e.a0, e.a1);
    const c = { x: e.cx, y: e.cy };
    const atStart = dist(pick, polar(c, a0, e.r)) < dist(pick, polar(c, a1, e.r));
    const full = { k: 'A', cx: e.cx, cy: e.cy, r: e.r, a0: 0, a1: TAU, full: true };
    let best = null;
    for (const { q, ext } of bps) for (const x of intersect(full, q, true, ext)) {
      const a = normAngle(Math.atan2(x.y - e.cy, x.x - e.cx));
      const gap = atStart ? normAngle(a0 - a) : normAngle(a - a1);
      if (gap > 1e-9 && gap < TAU - (a1 - a0) && (!best || gap < best.gap)) best = { gap, a };
    }
    if (!best) return null;
    return atStart ? { ...e, a0: best.a } : { ...e, a1: best.a };
  }
  if (e.type === 'poly' && !e.closed && e.pts.length >= 2) {
    const n = e.pts.length;
    const atStart = dist(pick, e.pts[0]) < dist(pick, e.pts[n - 1]);
    const [p, q] = atStart ? [e.pts[1], e.pts[0]] : [e.pts[n - 2], e.pts[n - 1]];
    if (Math.abs((atStart ? e.pts[0].b : e.pts[n - 2].b) || 0) > 1e-12) return null;   // arc ends: not yet
    const tmp = extendEntity({ type: 'line', x1: p.x, y1: p.y, x2: q.x, y2: q.y }, boundaries, q, blocks, { edgeExtend });
    if (!tmp) return null;
    const pts = e.pts.map((v) => ({ ...v }));
    if (atStart) { pts[0].x = tmp.x2; pts[0].y = tmp.y2; } else { pts[n - 1].x = tmp.x2; pts[n - 1].y = tmp.y2; }
    return { ...e, pts };
  }
  return null;
}

/** Fillet two lines with radius r (0 = sharp corner). picks say which side of each line to keep. */
export function filletLines(a, b, r, pickA, pickB) {
  const la = { k: 'L', x1: a.x1, y1: a.y1, x2: a.x2, y2: a.y2 }, lb = { k: 'L', x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2 };
  const x = intersect(la, lb, true, true)[0];
  if (!x) return null;
  // direction from the corner toward the kept part of each line
  const keepDir = (l, pick) => {
    const ends = [{ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }];
    const far = ends.sort((u, v) => dist(v, x) - dist(u, x))[0];
    const tp = primParam({ k: 'L', x1: x.x, y1: x.y, x2: far.x, y2: far.y }, pick, false);
    const target = tp >= 0 ? far : ends[1];
    const d = dist(x, target) || 1;
    return { ux: (target.x - x.x) / d, uy: (target.y - x.y) / d, far: target };
  };
  const da = keepDir(la, pickA), db = keepDir(lb, pickB);
  if (r <= EPS) {
    return { a: { ...a, x1: x.x, y1: x.y, x2: da.far.x, y2: da.far.y }, b: { ...b, x1: x.x, y1: x.y, x2: db.far.x, y2: db.far.y }, arc: null };
  }
  const half = Math.acos(Math.max(-1, Math.min(1, da.ux * db.ux + da.uy * db.uy))) / 2;
  if (half < 1e-6 || half > Math.PI / 2 - 1e-6) return null;
  const t = r / Math.tan(half);
  const pa = { x: x.x + da.ux * t, y: x.y + da.uy * t }, pb = { x: x.x + db.ux * t, y: x.y + db.uy * t };
  const bx = da.ux + db.ux, by = da.uy + db.uy, bl = Math.hypot(bx, by);
  const c = { x: x.x + bx / bl * (r / Math.sin(half)), y: x.y + by / bl * (r / Math.sin(half)) };
  let a0 = Math.atan2(pa.y - c.y, pa.x - c.x), a1 = Math.atan2(pb.y - c.y, pb.x - c.x);
  if (normAngle(a1 - a0) > Math.PI) [a0, a1] = [a1, a0];
  return {
    a: { ...a, x1: pa.x, y1: pa.y, x2: da.far.x, y2: da.far.y },
    b: { ...b, x1: pb.x, y1: pb.y, x2: db.far.x, y2: db.far.y },
    arc: { type: 'arc', layer: a.layer, color: a.color ?? null, cx: c.x, cy: c.y, r, a0: normAngle(a0), a1: normAngle(a1) },
  };
}

// ---------------------------------------------------------------------------
// Revision clouds (REVCLOUD)

/** An object's outline as points (arcs and curves in short pieces): { pts, closed } | null. */
export function pathOf(e) {
  if (e.type === 'circle') { const n = 96, pts = []; for (let i = 0; i < n; i++) pts.push(polar({ x: e.cx, y: e.cy }, (i / n) * TAU, e.r)); return { pts, closed: true }; }
  if (e.type === 'ellipse') { const pts = ellipsePoints(e, 144); const closed = e.t1 - e.t0 >= TAU - 1e-9; if (closed) pts.pop(); return { pts, closed }; }
  if (e.type === 'spline' && splineValid(e)) { const pts = splinePolyline(e, 24); return { pts, closed: !!e.closed }; }
  if (e.type === 'line') return { pts: [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }], closed: false };
  if (e.type === 'arc') { const p = prims(e)[0], n = Math.max(8, Math.ceil((p.a1 - p.a0) / (TAU / 96))), pts = []; for (let i = 0; i <= n; i++) pts.push(primPoint(p, i / n)); return { pts, closed: false }; }
  if (e.type === 'poly' && e.pts.length >= 2) {
    const pts = [];
    for (const p of polyPrims(e)) {
      if (p.k === 'L') { pts.push({ x: p.x1, y: p.y1 }); continue; }
      const n = Math.max(4, Math.ceil((p.a1 - p.a0) / (TAU / 96)));
      for (let i = 0; i < n; i++) pts.push(primPoint(p, p.rev ? 1 - i / n : i / n));
    }
    if (!e.closed) pts.push({ x: e.pts[e.pts.length - 1].x, y: e.pts[e.pts.length - 1].y });
    return { pts, closed: !!e.closed };
  }
  return null;
}

/** Points spaced evenly along a path (about `step` apart; corners need not be kept). */
export function resamplePath(pts, closed, step) {
  const ring = closed ? [...pts, pts[0]] : pts;
  const lens = [];
  let L = 0;
  for (let i = 0; i + 1 < ring.length; i++) { const d = dist(ring[i], ring[i + 1]); lens.push(d); L += d; }
  if (!(L > EPS) || !(step > EPS)) return pts.slice();
  const n = Math.max(closed ? 3 : 1, Math.round(L / step));
  const out = [];
  let seg = 0, acc = 0;
  for (let k = 0; k <= n; k++) {
    if (closed && k === n) break;
    const target = (L * k) / n;
    while (seg < lens.length - 1 && acc + lens[seg] < target - 1e-12) { acc += lens[seg]; seg++; }
    const t = lens[seg] > 0 ? (target - acc) / lens[seg] : 0;
    out.push({ x: ring[seg].x + (ring[seg + 1].x - ring[seg].x) * t, y: ring[seg].y + (ring[seg + 1].y - ring[seg].y) * t });
  }
  return out;
}

/** The arc shape of a revision cloud: bulge of each scallop (an included angle of 120°, as AutoCAD's look). */
export const CLOUD_BULGE = Math.tan(TAU / 3 / 4);

/**
 * A revision cloud along a path: a polyline of arcs about `arcLen` long that bulge outward (inward with `reverse`).
 * → poly entity fields { type: 'poly', closed, pts }.
 */
export function revcloud(pts, closed, arcLen, reverse = false) {
  const q = resamplePath(pts, closed, arcLen);
  let a = 0;
  for (let i = 0; i < q.length; i++) { const u = q[i], v = q[(i + 1) % q.length]; a += u.x * v.y - v.x * u.y; }
  // travelling counter-clockwise the outside is on the right, where a positive bulge goes
  const sign = (closed ? (a >= 0 ? 1 : -1) : 1) * (reverse ? -1 : 1);
  return { type: 'poly', closed, pts: q.map((p, i) => ({ x: p.x, y: p.y, b: closed || i < q.length - 1 ? sign * CLOUD_BULGE : 0 })) };
}

// ---------------------------------------------------------------------------
// BREAK and LENGTHEN

/** Where q is along e: line/arc → 0…1, polyline → segment index + 0…1 (in the vertex order). */
export function paramOn(e, q) {
  const own = e.type === 'poly' ? polyPrims(e) : prims(e);
  let best = 0, bd = Infinity;
  own.forEach((p, i) => {
    const d = distToPrim(p, q);
    if (d < bd) { bd = d; let t = primParam(p, q); if (p.rev) t = 1 - t; best = (e.type === 'poly' ? i : 0) + t; }
  });
  return best;
}

/**
 * BREAK: e without the part between p1 and p2 (both put onto it). p2 the same as p1 splits it there.
 * → [pieces] | { error: 'type' | 'circle' }. A circle loses the part counter-clockwise from p1 to p2; a closed
 * polyline the part from p1 to p2 in its own direction.
 */
export function breakEntity(e, p1, p2) {
  const same = dist(p1, p2) <= EPS * Math.max(1, Math.hypot(p1.x, p1.y));
  if (e.type === 'circle') {
    if (same) return { error: 'circle' };
    const a1 = Math.atan2(p1.y - e.cy, p1.x - e.cx), a2 = Math.atan2(p2.y - e.cy, p2.x - e.cx);
    return [{ ...e, type: 'arc', a0: normAngle(a2), a1: normAngle(a1) }];
  }
  if (!['line', 'arc', 'poly', 'xline', 'ray'].includes(e.type)) return { error: 'type' };
  let t1 = paramOn(e, p1), t2 = same ? t1 : paramOn(e, p2);
  if (e.type === 'poly' && e.closed) {
    const n = e.pts.length;
    const open = { ...e, closed: false, pts: [...e.pts, ...e.pts, { ...e.pts[0] }] };
    if (same) return [subEntity(open, t1, t1 + n)].filter(Boolean);
    if (t2 < t1) t2 += n;
    return [subEntity(open, t2, t1 + n)].filter(Boolean);
  }
  if (t2 < t1) [t1, t2] = [t2, t1];
  const maxT = e.type === 'poly' ? e.pts.length - 1 : 1;
  const tiny = UNBOUNDED.has(e.type) ? 1e-15 : 1e-9;
  const out = [];
  if (t1 > tiny || e.type === 'xline') out.push(subEntity(e, 0, t1));
  if (t2 < maxT - tiny) out.push(subEntity(e, t2, maxT));
  return out.filter(Boolean);
}

/** Length of a line, arc or open polyline (null for others). */
export function curveLength(e) {
  if (e.type === 'line') return Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
  if (e.type === 'arc') return e.r * (normAngle(e.a1 - e.a0) || TAU);
  if (e.type === 'poly') return polyPrims(e).reduce((s, p) => s + primLength(p), 0);
  if (e.type === 'spline') return prims(e).reduce((s, p) => s + primLength(p), 0);
  return null;
}

/**
 * LENGTHEN: e with the end nearest `pick` moved so the object gets longer or shorter by `delta` (drawing units), or,
 * for an arc, its included angle by `dAngle` (radians). → entity | { error: 'type' | 'short' | 'full' }.
 * A polyline changes its end segment (a straight one along its direction, an arc one round its center).
 */
export function lengthenEntity(e, pick, { delta = 0, dAngle = null } = {}) {
  if (e.type === 'line') {
    const L = Math.hypot(e.x2 - e.x1, e.y2 - e.y1), nl = L + delta;
    if (!(nl > EPS)) return { error: 'short' };
    const atStart = dist(pick, { x: e.x1, y: e.y1 }) < dist(pick, { x: e.x2, y: e.y2 });
    const ux = (e.x2 - e.x1) / L, uy = (e.y2 - e.y1) / L;
    return atStart ? { ...e, x1: e.x2 - ux * nl, y1: e.y2 - uy * nl } : { ...e, x2: e.x1 + ux * nl, y2: e.y1 + uy * nl };
  }
  if (e.type === 'arc') {
    const sw = normAngle(e.a1 - e.a0) || TAU, ns = sw + (dAngle ?? delta / e.r);
    if (!(ns > 1e-9)) return { error: 'short' };
    if (ns >= TAU - 1e-9) return { error: 'full' };
    const c = { x: e.cx, y: e.cy };
    const atStart = dist(pick, polar(c, e.a0, e.r)) < dist(pick, polar(c, e.a1, e.r));
    return atStart ? { ...e, a0: normAngle(e.a1 - ns) } : { ...e, a1: normAngle(e.a0 + ns) };
  }
  if (e.type === 'poly' && !e.closed && e.pts.length >= 2) {
    const n = e.pts.length, pts = e.pts.map((p) => ({ ...p }));
    const atStart = dist(pick, pts[0]) < dist(pick, pts[n - 1]);
    const i = atStart ? 0 : n - 2;   // the end segment
    const P = pts[i], Q = pts[i + 1], b = P.b || 0;
    if (Math.abs(b) < 1e-12) {
      const L = dist(P, Q), nl = L + delta;
      if (!(nl > EPS)) return { error: 'short' };
      const ux = (Q.x - P.x) / L, uy = (Q.y - P.y) / L;
      if (atStart) { pts[0].x = Q.x - ux * nl; pts[0].y = Q.y - uy * nl; } else { pts[n - 1].x = P.x + ux * nl; pts[n - 1].y = P.y + uy * nl; }
      return { ...e, pts };
    }
    const a = bulgeArc(P, Q, b), sw = a.a1 - a.a0, ns = sw + (dAngle ?? delta / a.r);
    if (!(ns > 1e-9)) return { error: 'short' };
    if (ns >= TAU - 1e-9) return { error: 'full' };
    // travel P → Q: counter-clockwise when b > 0; the far end of the segment moves, the near one stays
    const c = { x: a.cx, y: a.cy }, dir = b > 0 ? 1 : -1;
    if (atStart) {   // P moves: back from Q against the travel
      const aq = Math.atan2(Q.y - c.y, Q.x - c.x), np = polar(c, aq - dir * ns, a.r);
      pts[0].x = np.x; pts[0].y = np.y;
    } else {
      const ap = Math.atan2(P.y - c.y, P.x - c.x), nq = polar(c, ap + dir * ns, a.r);
      pts[n - 1].x = nq.x; pts[n - 1].y = nq.y;
    }
    pts[i].b = dir * Math.tan(ns / 4);
    return { ...e, pts };
  }
  return { error: 'type' };
}

// ---------------------------------------------------------------------------
// JOIN: collinear lines into one line, arcs of one circle into one arc, pieces touching end to end into polylines

/** A piece as polyline vertices from its start to its end: [{x, y, b}] (the last vertex's bulge is unused). */
function pieceVerts(e) {
  if (e.type === 'line') return [{ x: e.x1, y: e.y1, b: 0 }, { x: e.x2, y: e.y2, b: 0 }];
  if (e.type === 'arc') { const c = { x: e.cx, y: e.cy }, sw = normAngle(e.a1 - e.a0) || TAU; return [{ ...polar(c, e.a0, e.r), b: Math.tan(sw / 4) }, { ...polar(c, e.a1, e.r), b: 0 }]; }
  if (e.type === 'poly' && !e.closed && e.pts.length >= 2) return e.pts.map((p) => ({ x: p.x, y: p.y, b: p.b || 0 }));
  return null;
}
/** The same run of vertices travelled the other way. */
function reverseVerts(v) {
  const n = v.length, out = [];
  for (let i = n - 1; i >= 0; i--) out.push({ x: v[i].x, y: v[i].y, b: i > 0 ? -(v[i - 1].b || 0) : 0 });
  return out;
}

/**
 * Join objects. → { results: [{ from: [ids], to: entity }], left: [ids] } — `to` replaces the objects in `from`.
 * Lines on one line join into one line (gaps closed); arcs on one circle into one arc, or a circle when they close it;
 * otherwise lines, arcs and open polylines that meet end to end (within tol) become polylines, closed when the chain
 * closes. What joins with nothing is left.
 */
export function joinEntities(ents, tol = null) {
  const list = ents.filter((e) => ['line', 'arc', 'poly'].includes(e.type) && !(e.type === 'poly' && e.closed));
  const left = ents.filter((e) => !list.includes(e)).map((e) => e.id);
  if (list.length < 2) return { results: [], left: ents.map((e) => e.id) };
  const b = emptyBounds();
  for (const e of list) for (const p of prims(e)) primBounds(p, b);
  const T = tol ?? Math.max(b.maxX - b.minX, b.maxY - b.minY, 1) * 1e-9;
  // all lines on one line → one line from the extremes
  if (list.every((e) => e.type === 'line')) {
    const a = list[0], u = { x: a.x2 - a.x1, y: a.y2 - a.y1 }, L = Math.hypot(u.x, u.y);
    if (L > EPS) {
      const on = (x, y) => Math.abs((x - a.x1) * u.y - (y - a.y1) * u.x) / L <= T * 1e3;
      if (list.every((e) => on(e.x1, e.y1) && on(e.x2, e.y2))) {
        const all = list.flatMap((e) => [((e.x1 - a.x1) * u.x + (e.y1 - a.y1) * u.y) / (L * L), ((e.x2 - a.x1) * u.x + (e.y2 - a.y1) * u.y) / (L * L)]);
        const t0 = Math.min(...all), t1 = Math.max(...all);
        return { results: [{ from: list.map((e) => e.id), to: { ...a, x1: a.x1 + u.x * t0, y1: a.y1 + u.y * t0, x2: a.x1 + u.x * t1, y2: a.y1 + u.y * t1 } }], left };
      }
    }
  }
  // all arcs on one circle → one arc counter-clockwise from the first, or the circle
  if (list.every((e) => e.type === 'arc')) {
    const a = list[0];
    if (list.every((e) => Math.hypot(e.cx - a.cx, e.cy - a.cy) <= T * 1e3 && Math.abs(e.r - a.r) <= T * 1e3)) {
      // merge the arcs' spans round the circle; the largest empty gap stays open, smaller gaps are filled (as AutoCAD)
      const spans = list.map((e) => arcRange(e.a0, e.a1)).sort((p, q) => p[0] - q[0]);
      const merged = [];
      for (const [s0, s1] of spans) { const m = merged[merged.length - 1]; if (m && s0 <= m[1] + 1e-9) m[1] = Math.max(m[1], s1); else merged.push([s0, s1]); }
      const last = merged[merged.length - 1];
      if (merged.length > 1 && last[1] - TAU >= merged[0][0] - 1e-9) { merged[0] = [last[0] - TAU, Math.max(merged[0][1], last[1] - TAU)]; merged.pop(); }
      const whole = merged.length === 1 && merged[0][1] - merged[0][0] >= TAU - 1e-9;
      if (whole) return { results: [{ from: list.map((e) => e.id), to: { type: 'circle', layer: a.layer, color: a.color ?? null, cx: a.cx, cy: a.cy, r: a.r } }], left };
      let best = null;
      merged.forEach((m, k) => {
        const nx = merged[(k + 1) % merged.length], gap = (k + 1 < merged.length ? nx[0] : nx[0] + TAU) - m[1];
        if (!best || gap > best.gap) best = { gap, a0: nx[0], a1: m[1] };
      });
      return { results: [{ from: list.map((e) => e.id), to: { ...a, a0: normAngle(best.a0), a1: normAngle(best.a1) } }], left };
    }
  }
  // chains of pieces meeting end to end
  const pieces = list.map((e) => ({ e, v: pieceVerts(e) })).filter((p) => p.v);
  const near = (p, q) => Math.abs(p.x - q.x) <= T * 1e3 && Math.abs(p.y - q.y) <= T * 1e3;
  const used = new Set(), results = [];
  for (const start of pieces) {
    if (used.has(start)) continue;
    used.add(start);
    let chain = start.v.map((p) => ({ ...p })), from = [start.e.id];
    for (let grew = true; grew;) {
      grew = false;
      for (const p of pieces) {
        if (used.has(p)) continue;
        const head = chain[0], tail = chain[chain.length - 1], ps = p.v[0], pe = p.v[p.v.length - 1];
        let add = null, atEnd = true;
        if (near(tail, ps)) add = p.v; else if (near(tail, pe)) add = reverseVerts(p.v);
        else if (near(head, pe)) { add = p.v; atEnd = false; } else if (near(head, ps)) { add = reverseVerts(p.v); atEnd = false; }
        if (!add) continue;
        used.add(p); from.push(p.e.id); grew = true;
        if (atEnd) { chain[chain.length - 1].b = 0; chain = [...chain.slice(0, -1), ...add.map((q) => ({ ...q }))]; }
        else chain = [...add.slice(0, -1).map((q) => ({ ...q })), ...chain];
      }
    }
    if (from.length < 2) { left.push(start.e.id); continue; }
    const closed = chain.length > 2 && near(chain[0], chain[chain.length - 1]);
    if (closed) chain.pop();
    const src = start.e;
    results.push({ from, to: { type: 'poly', layer: src.layer, color: src.color ?? null, closed, pts: chain.map((q) => ({ x: q.x, y: q.y, b: q.b || 0 })) } });
  }
  return { results, left };
}

// ---------------------------------------------------------------------------
// Stretch (STRETCH): the points inside the windows move, the rest stay

/** The bulge that keeps an arc's height (sagitta) when its chord changes from c0 to c1, as AutoCAD stretches arcs. */
function keepSagitta(b, c0, c1) {
  if (!(Math.abs(b) > 1e-12) || !(c1 > EPS)) return b;
  return (b * c0 / 2) * 2 / c1;   // sagitta h = b·c/2 → new bulge = 2h / c1
}

/**
 * e stretched by (dx, dy): what `inside(point)` says is in the window moves. → a new entity, or null when nothing in it
 * moves. Lines and polylines move their ends / vertices (arc segments keep their height); dimensions their points;
 * circles, ellipses, text, points and block references move whole when their center or insertion point is inside.
 */
export function stretchEntity(e, inside, dx, dy) {
  const mv = (p) => ({ x: p.x + dx, y: p.y + dy });
  switch (e.type) {
    case 'xline': case 'ray': return inside(e) ? { ...e, ...mv(e) } : null;   // its point in the window: the whole line moves (DR.6)
    case 'line': {
      const a = inside({ x: e.x1, y: e.y1 }), b = inside({ x: e.x2, y: e.y2 });
      if (!a && !b) return null;
      return { ...e, ...(a ? { x1: e.x1 + dx, y1: e.y1 + dy } : {}), ...(b ? { x2: e.x2 + dx, y2: e.y2 + dy } : {}) };
    }
    case 'poly': {
      const n = e.pts.length, hit = e.pts.map((p) => inside(p));
      if (!hit.some(Boolean)) return null;
      const pts = e.pts.map((p, i) => (hit[i] ? { ...p, ...mv(p) } : { ...p }));
      const segs = e.closed ? n : n - 1;
      for (let i = 0; i < segs; i++) {
        const j = (i + 1) % n;
        if (hit[i] !== hit[j] && Math.abs(e.pts[i].b || 0) > 1e-12) pts[i].b = keepSagitta(e.pts[i].b, dist(e.pts[i], e.pts[j]), dist(pts[i], pts[j]));
      }
      return { ...e, pts };
    }
    case 'arc': {
      const c = { x: e.cx, y: e.cy }, s = polar(c, e.a0, e.r), t = polar(c, e.a1, e.r);
      const a = inside(s), b = inside(t);
      if (!a && !b) return inside(c) ? txEntity(e, mTranslate(dx, dy)) : null;
      if (a && b) return txEntity(e, mTranslate(dx, dy));
      const sweep = normAngle(e.a1 - e.a0) || TAU;
      const b0 = Math.tan(sweep / 4), s1 = a ? mv(s) : s, t1 = b ? mv(t) : t;
      const nb = keepSagitta(b0, dist(s, t), dist(s1, t1));
      if (dist(s1, t1) <= EPS) return null;
      const g = bulgeArc(s1, t1, nb);
      return { ...e, cx: g.cx, cy: g.cy, r: g.r, a0: normAngle(g.a0), a1: normAngle(g.a1) };
    }
    case 'circle': case 'ellipse': return inside({ x: e.cx, y: e.cy }) ? txEntity(e, mTranslate(dx, dy)) : null;
    case 'text': case 'point': case 'insert': return inside({ x: e.x, y: e.y }) ? txEntity(e, mTranslate(dx, dy)) : null;
    case 'mleader': {
      const hit = e.pts.map((p) => inside(p));
      return hit.some(Boolean) ? { ...e, pts: e.pts.map((p, i) => (hit[i] ? mv(p) : p)) } : null;
    }
    case 'dim': {
      const keys = ['p1', 'p2', 'c', 'loc'].filter((k) => e[k] && inside(e[k]));
      if (!keys.length) return null;
      const out = { ...e };
      delete out.block;   // drawn again from its new points
      for (const k of keys) out[k] = mv(e[k]);
      return out;
    }
    case 'hatch': {
      let any = false;
      const loops = e.loops.map((l) => { const o = l.slice(); for (let i = 0; i + 1 < l.length; i += 2) if (inside({ x: l[i], y: l[i + 1] })) { o[i] += dx; o[i + 1] += dy; any = true; } return o; });
      return any ? { ...e, loops } : null;
    }
    default: return null;
  }
}

// ---------------------------------------------------------------------------
// Area and perimeter (AREA, MEASUREGEOM)

/** Signed area of a closed run of points (counter-clockwise positive) and its perimeter, closing segment included. */
export function polygonMeasure(pts) {
  let a = 0, p = 0;
  for (let i = 0, n = pts.length; i < n; i++) {
    const u = pts[i], v = pts[(i + 1) % n];
    a += u.x * v.y - v.x * u.y;
    p += dist(u, v);
  }
  return { area: a / 2, perimeter: pts.length >= 2 ? p : 0 };
}

/** Signed area enclosed by a polyline (closed or not: an open one is closed by a straight line, as AutoCAD's AREA does). */
function polyMeasure(e) {
  const v = e.pts, n = v.length;
  let a = 0, len = 0;
  for (let i = 0; i < n; i++) {
    const u = v[i], w = v[(i + 1) % n];
    a += u.x * w.y - w.x * u.y;
    const last = i === n - 1;
    const b = last && !e.closed ? 0 : (u.b || 0);
    const c = dist(u, w);
    if (Math.abs(b) > 1e-12 && c > EPS) {
      const th = 4 * Math.atan(Math.abs(b)), r = c / (2 * Math.sin(th / 2));
      a += Math.sign(b) * r * r * (th - Math.sin(th));            // ×2, like the shoelace terms
      if (!last || e.closed) len += r * th;
    } else if (!last || e.closed) len += c;
  }
  return { area: Math.abs(a / 2), length: len };
}

/**
 * Area and perimeter of an object: { area, perimeter, kind } where kind is 'circle' (perimeter = circumference),
 * 'closed' or 'open' (an open polyline: area as if closed, perimeter = its length). null = it has no area.
 */
export function entityArea(e) {
  switch (e.type) {
    case 'circle': return { area: Math.PI * e.r * e.r, perimeter: TAU * e.r, kind: 'circle' };
    case 'ellipse': {
      const a = Math.hypot(e.mx, e.my), b = a * e.ratio;
      if (e.t1 - e.t0 >= TAU - EPS || Math.abs(normAngle(e.t1 - e.t0)) < EPS) {
        const h = ((a - b) / (a + b)) ** 2;
        return { area: Math.PI * a * b, perimeter: Math.PI * (a + b) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h))), kind: 'closed' };
      }
      const pts = ellipsePoints(e, 720), m = polygonMeasure(pts);
      let len = 0;
      for (let i = 0; i + 1 < pts.length; i++) len += dist(pts[i], pts[i + 1]);
      return { area: Math.abs(m.area), perimeter: len, kind: 'open' };
    }
    case 'poly': {
      if (e.pts.length < 2) return null;
      const m = polyMeasure(e);
      return { area: m.area, perimeter: m.length, kind: e.closed ? 'closed' : 'open' };
    }
    case 'hatch': {
      // even-odd: a loop inside an odd number of others is a hole
      const rings = e.loops.map((l) => { const pts = []; for (let i = 0; i + 1 < l.length; i += 2) pts.push({ x: l[i], y: l[i + 1] }); return pts; }).filter((r) => r.length >= 3);
      if (!rings.length) return null;
      let area = 0, perimeter = 0;
      rings.forEach((r, i) => {
        const m = polygonMeasure(r);
        const depth = rings.filter((o, j) => j !== i && pointInPoly(r[0], o)).length;
        area += (depth % 2 ? -1 : 1) * Math.abs(m.area);
        perimeter += m.perimeter;
      });
      return { area: Math.abs(area), perimeter, kind: 'closed' };
    }
    default: return null;
  }
}

// ---------------------------------------------------------------------------
// Corners: FILLET and CHAMFER on two objects, on two segments of one polyline, or on every corner of a polyline.
// Results are { ok: true, edits: [entity with id], add: [new entities] } or { ok: false, error } where error is
// 'type' (not a line/arc/circle/polyline; chamfer: not a straight piece), 'same', 'parallel', 'collinear',
// 'large' (radius / distance does not fit), 'none' (nothing of that size fits, or they never meet),
// 'middle' (a cut would land in the middle of a polyline), 'angle' (chamfer angle does not close the corner).

const unit = (dx, dy) => { const l = Math.hypot(dx, dy); return l > 0 ? { x: dx / l, y: dy / l } : null; };
const dot = (a, b) => a.x * b.x + a.y * b.y;

/** What a pick on e is, for a corner: { e, seg, prim, pick }. seg = the polyline segment nearest the pick. */
export function cornerTarget(e, pick) {
  if (!e || !pick) return null;
  if (e.type === 'line') return dist({ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }) > EPS ? { e, seg: null, prim: prims(e)[0], pick } : null;
  if (e.type === 'arc' || e.type === 'circle') return e.r > EPS ? { e, seg: null, prim: prims(e)[0], pick } : null;
  if (e.type === 'poly') {
    let best = null, bd = Infinity;
    for (const p of polyPrims(e)) { if (primLength(p) <= EPS) continue; const d = distToPrim(p, pick); if (d < bd) { bd = d; best = p; } }
    return best ? { e, seg: best.seg, prim: best, pick } : null;
  }
  return null;
}

/**
 * Move one end of a target's piece to T, keeping the part that runs from T in the direction `keep`
 * (a unit vector for straight pieces; 'ccw' | 'cw' for arcs). A circle is never cut. → { e } | { error }.
 */
function cutTarget(t, T, keep, e = t.e) {
  if (e.type === 'circle') return { e };
  const p = t.prim;
  let end;                                  // which end of the primitive T replaces: 'start' (x1 / a0) or 'end'
  if (p.k === 'L') {
    const ds = (p.x1 - T.x) * keep.x + (p.y1 - T.y) * keep.y, de = (p.x2 - T.x) * keep.x + (p.y2 - T.y) * keep.y;
    if (Math.max(ds, de) <= 1e-9 * Math.max(1, primLength(p))) return { error: 'large' };
    end = de >= ds ? 'start' : 'end';
  } else {
    const a = Math.atan2(T.y - p.cy, T.x - p.cx);
    end = keep === 'ccw' ? 'start' : 'end';
    if (onSweep(a, p.a0, p.a1, 1e-9)) {
      if ((end === 'start' ? normAngle(p.a1 - a) : normAngle(a - p.a0)) < 1e-9) return { error: 'large' };
    } else {
      const toStart = normAngle(p.a0 - a), toEnd = normAngle(a - p.a1);   // an extension grows the nearer end
      if (end === 'start' ? toStart > toEnd : toEnd > toStart) return { error: 'large' };
    }
  }
  if (e.type === 'line') return { e: end === 'start' ? { ...e, x1: T.x, y1: T.y } : { ...e, x2: T.x, y2: T.y } };
  if (e.type === 'arc') { const a = normAngle(Math.atan2(T.y - e.cy, T.x - e.cx)); return { e: end === 'start' ? { ...e, a0: a } : { ...e, a1: a } }; }
  if (e.type !== 'poly') return { error: 'type' };
  // a polyline segment i runs from vertex i (P) to vertex i+1 (Q); a reversed arc primitive starts at Q
  const n = e.pts.length, i = t.seg, segs = e.closed ? n : n - 1;
  const atStart = p.k === 'L' || !p.rev ? end === 'start' : end === 'end';   // T replaces P (else Q)
  if (e.closed || (atStart ? i !== 0 : i !== segs - 1)) return { error: 'middle' };
  const pts = e.pts.map((v) => ({ ...v }));
  const k = atStart ? i : i + 1;
  pts[k] = { ...pts[k], x: T.x, y: T.y };
  if (p.k === 'A') {
    const a = Math.atan2(T.y - p.cy, T.x - p.cx);
    const a0 = end === 'start' ? a : p.a0, a1 = end === 'end' ? a : p.a1;
    pts[i].b = Math.tan(normAngle(a1 - a0) / 4) * (p.rev ? -1 : 1);
  }
  return { e: { ...e, pts } };
}

/** Corner of two straight pieces at x, along the unit rays ua and ub: fillet points for radius r. */
function llFillet(x, ua, ub, r) {
  const half = Math.acos(Math.max(-1, Math.min(1, dot(ua, ub)))) / 2;
  if (half < 1e-9 || half > Math.PI / 2 - 1e-9) return null;
  const t = r / Math.tan(half);
  const bis = unit(ua.x + ub.x, ua.y + ub.y);
  return { t, a: polar(x, Math.atan2(ua.y, ua.x), t), b: polar(x, Math.atan2(ub.y, ub.x), t), c: { x: x.x + bis.x * r / Math.sin(half), y: x.y + bis.y * r / Math.sin(half) } };
}

/** The arc of circle c (radius r) between a and b, the short way round. */
function cornerArc(c, r, a, b, like) {
  let a0 = Math.atan2(a.y - c.y, a.x - c.x), a1 = Math.atan2(b.y - c.y, b.x - c.x);
  if (normAngle(a1 - a0) > Math.PI) [a0, a1] = [a1, a0];
  return { type: 'arc', ...like, cx: c.x, cy: c.y, r, a0: normAngle(a0), a1: normAngle(a1) };
}

/** The ray from corner x along a straight piece toward the part its pick keeps: { u, reach }. */
function keepRay(p, x, pick) {
  const ends = [{ x: p.x1, y: p.y1 }, { x: p.x2, y: p.y2 }].sort((u, v) => dist(v, x) - dist(u, x));
  const far = ends[0], u0 = unit(far.x - x.x, far.y - x.y);
  if (!u0) return null;
  if ((pick.x - x.x) * u0.x + (pick.y - x.y) * u0.y >= 0 || dist(ends[1], x) <= EPS) return { u: u0, reach: dist(far, x) };
  return { u: unit(ends[1].x - x.x, ends[1].y - x.y), reach: dist(ends[1], x) };
}

const straight = (p) => p.k === 'L';
const lineDir = (p) => unit(p.x2 - p.x1, p.y2 - p.y1);

/** Two targets on one polyline: the vertex between adjacent segments, or null. */
function sharedVertex(A, B) {
  const n = A.e.pts.length, segs = A.e.closed ? n : n - 1, i = A.seg, j = B.seg;
  if (segs < 2) return null;
  if ((i + 1) % n === j && (A.e.closed || i + 1 < n - 1)) return { k: j, inSeg: i, outSeg: j };
  if ((j + 1) % n === i && (A.e.closed || j + 1 < n - 1)) return { k: i, inSeg: j, outSeg: i };
  return null;
}

/** Replace vertex k of a polyline by the corner points a (bulge b toward the next) and b. */
function spliceCorner(e, k, a, bulge, b) {
  const pts = e.pts.map((v) => ({ ...v }));
  pts.splice(k, 1, { x: a.x, y: a.y, b: bulge }, { x: b.x, y: b.y, b: pts[k].b || 0 });
  return { ...e, pts: dedupe(pts, e.closed) };
}

/** Drop vertices on top of the one before (zero-length segments a corner can leave). */
function dedupe(pts, closed) {
  const out = [];
  for (const v of pts) {
    const last = out[out.length - 1];
    if (last && dist(last, v) <= 1e-9) { last.b = v.b || 0; continue; }
    out.push(v);
  }
  if (closed && out.length > 1 && dist(out[0], out[out.length - 1]) <= 1e-9) out.pop();
  return out;
}

/** The vertex corner of two adjacent straight segments of one polyline: { x, ua, ub, la, lb, turn }. */
function vertexCorner(e, k, inSeg, outSeg) {
  const n = e.pts.length, v = e.pts[k], pin = e.pts[inSeg], pout = e.pts[(outSeg + 1) % n];
  const ua = unit(pin.x - v.x, pin.y - v.y), ub = unit(pout.x - v.x, pout.y - v.y);
  if (!ua || !ub) return null;
  return { x: { x: v.x, y: v.y }, ua, ub, la: dist(pin, v), lb: dist(pout, v), turn: Math.sign(-ua.x * ub.y + ua.y * ub.x) };
}

const layerOf = (a, b, current) => (a.layer === b.layer && (a.color ?? null) === (b.color ?? null) ? { layer: a.layer, color: a.color ?? null } : { layer: current?.layer ?? a.layer, color: current?.color ?? null });

/**
 * FILLET between two picked targets with radius r. `trim` false leaves the objects as they are.
 * Lines that are parallel get a half circle across the gap, at the end of the first line nearest its pick.
 */
export function filletPair(A, B, r, { trim = true, current = null } = {}) {
  if (!A || !B) return { ok: false, error: 'type' };
  const like = layerOf(A.e, B.e, current);
  if (A.e === B.e || (A.e.id != null && A.e.id === B.e.id)) {
    if (A.e.type !== 'poly' || A.seg === B.seg) return { ok: false, error: 'same' };
    const sv = sharedVertex(A, B);
    if (!sv) return cutBoth(A, B, null, null, { same: true });
    if (!straight(polyPrims(A.e)[sv.inSeg]) || !straight(polyPrims(A.e)[sv.outSeg])) return { ok: false, error: 'type' };
    const vc = vertexCorner(A.e, sv.k, sv.inSeg, sv.outSeg);
    if (!vc) return { ok: false, error: 'none' };
    if (r <= EPS) return { ok: true, edits: [], add: [] };      // already a sharp corner
    const f = llFillet(vc.x, vc.ua, vc.ub, r);
    if (!f) return { ok: false, error: 'collinear' };
    if (f.t > vc.la + 1e-9 || f.t > vc.lb + 1e-9) return { ok: false, error: 'large' };
    const sweep = Math.PI - 2 * Math.acos(Math.max(-1, Math.min(1, dot(vc.ua, vc.ub)))) / 2;
    return { ok: true, edits: [spliceCorner(A.e, sv.k, f.a, Math.tan(sweep / 4) * vc.turn, f.b)], add: [] };
  }
  const pa = A.prim, pb = B.prim;
  if (straight(pa) && straight(pb)) {
    const x = intersect(pa, pb, true, true)[0];
    if (!x) {
      // parallel lines: a half circle across the gap
      const ua = lineDir(pa), ub = lineDir(pb);
      const E = [{ x: pa.x1, y: pa.y1 }, { x: pa.x2, y: pa.y2 }].sort((u, v) => dist(u, A.pick) - dist(v, A.pick))[0];
      const s = (E.x - pb.x1) * ub.x + (E.y - pb.y1) * ub.y, F = { x: pb.x1 + ub.x * s, y: pb.y1 + ub.y * s };
      const gap = dist(E, F);
      if (gap <= 1e-9 * Math.max(1, primLength(pa))) return { ok: false, error: 'collinear' };
      const other = dist(E, { x: pa.x1, y: pa.y1 }) < dist(E, { x: pa.x2, y: pa.y2 }) ? { x: pa.x2, y: pa.y2 } : { x: pa.x1, y: pa.y1 };
      const k = unit(other.x - E.x, other.y - E.y) || ua;
      const M = { x: (E.x + F.x) / 2, y: (E.y + F.y) / 2 }, rr = gap / 2;
      const aE = Math.atan2(E.y - M.y, E.x - M.x), aF = Math.atan2(F.y - M.y, F.x - M.x);
      const ccwFromE = (E.x - M.x) * -k.y - (E.y - M.y) * -k.x > 0;   // turning CCW from E reaches the outward side first
      const arc = { type: 'arc', ...like, cx: M.x, cy: M.y, r: rr, a0: normAngle(ccwFromE ? aE : aF), a1: normAngle(ccwFromE ? aF : aE) };
      return { ...cutBoth(A, B, [E, k], [F, k], { trim, add: [arc] }), semicircle: true };
    }
    const ra = keepRay(pa, x, A.pick), rb = keepRay(pb, x, B.pick);
    if (!ra || !rb) return { ok: false, error: 'none' };
    if (r <= EPS) return cutBoth(A, B, [x, ra.u], [x, rb.u], { trim, add: [] });
    const f = llFillet(x, ra.u, rb.u, r);
    if (!f) return { ok: false, error: 'collinear' };
    if (f.t >= ra.reach - 1e-9 || f.t >= rb.reach - 1e-9) return { ok: false, error: 'large' };
    return cutBoth(A, B, [f.a, ra.u], [f.b, rb.u], { trim, add: [cornerArc(f.c, r, f.a, f.b, like)] });
  }
  // a line, arc or circle with an arc or circle
  const full = (p) => ({ k: 'A', cx: p.cx, cy: p.cy, r: p.r, a0: 0, a1: TAU, full: true });
  const inf = (p) => (straight(p) ? p : full(p));
  if (r <= EPS) {
    let best = null;
    for (const x of intersect(inf(pa), inf(pb), true, true)) { const s = dist(x, A.pick) + dist(x, B.pick); if (!best || s < best.s) best = { s, x }; }
    if (!best) return { ok: false, error: 'none' };
    return cutBoth(A, B, [best.x, sharpKeep(pa, best.x, A.pick)], [best.x, sharpKeep(pb, best.x, B.pick)], { trim, add: [] });
  }
  const offsets = (p) => {
    if (straight(p)) {
      const u = lineDir(p), n = { x: -u.y * r, y: u.x * r };
      return [1, -1].map((s) => ({ k: 'L', x1: p.x1 + n.x * s, y1: p.y1 + n.y * s, x2: p.x2 + n.x * s, y2: p.y2 + n.y * s }));
    }
    return [p.r + r, p.r - r].filter((R) => R > EPS).map((R) => ({ ...full(p), r: R }));
  };
  const touch = (p, c) => {
    if (straight(p)) { const t = primParam(p, c, false); return primPoint(p, t); }
    const u = unit(c.x - p.cx, c.y - p.cy);
    return u ? { x: p.cx + u.x * p.r, y: p.cy + u.y * p.r } : null;
  };
  let best = null;
  for (const oa of offsets(pa)) for (const ob of offsets(pb)) for (const c of intersect(oa, ob, true, true)) {
    const ta = touch(pa, c), tb = touch(pb, c);
    if (!ta || !tb || dist(ta, tb) <= 1e-9) continue;
    const s = dist(ta, A.pick) + dist(tb, B.pick);
    if (!best || s < best.s) best = { s, c, ta, tb };
  }
  if (!best) return { ok: false, error: 'none' };
  const away = (p, at, to) => {   // the original runs away from the fillet arc at its tangent point
    if (straight(p)) { const u = lineDir(p), s = dot(u, { x: to.x - at.x, y: to.y - at.y }); return s > 0 ? { x: -u.x, y: -u.y } : u; }
    const a = Math.atan2(at.y - p.cy, at.x - p.cx);
    return (to.x - at.x) * -Math.sin(a) + (to.y - at.y) * Math.cos(a) > 0 ? 'cw' : 'ccw';
  };
  return cutBoth(A, B, [best.ta, away(pa, best.ta, best.tb)], [best.tb, away(pb, best.tb, best.ta)], { trim, add: [cornerArc(best.c, r, best.ta, best.tb, like)] });
}

/** For a sharp corner on a curve: which way from x the picked part lies. */
function sharpKeep(p, x, pick) {
  if (straight(p)) { const u = lineDir(p); return dot(u, { x: pick.x - x.x, y: pick.y - x.y }) >= 0 ? u : { x: -u.x, y: -u.y }; }
  const a = Math.atan2(x.y - p.cy, x.x - p.cx), ap = Math.atan2(pick.y - p.cy, pick.x - p.cx);
  if (onSweep(a, p.a0, p.a1, 1e-9) && !p.full) return normAngle(ap - p.a0) <= normAngle(a - p.a0) ? 'cw' : 'ccw';
  if (p.full) return normAngle(ap - a) <= Math.PI ? 'ccw' : 'cw';
  return normAngle(p.a0 - a) <= normAngle(a - p.a1) ? 'ccw' : 'cw';   // off the arc: keep all of it
}

/** Cut both targets ([point, keep] each; null = leave it) and collect the edits. Two cuts on one polyline chain. */
function cutBoth(A, B, ca, cb, { trim = true, add = [], same = false } = {}) {
  if (same && (!ca || !cb)) return { ok: false, error: 'middle' };
  if (!trim) return { ok: true, edits: [], add };
  const ra = ca ? cutTarget(A, ca[0], ca[1]) : { e: A.e };
  if (ra.error) return { ok: false, error: ra.error };
  const rb = cb ? cutTarget(B, cb[0], cb[1], same ? ra.e : B.e) : { e: B.e };
  if (rb.error) return { ok: false, error: rb.error };
  const edits = same ? [rb.e] : [ra.e, rb.e].filter((e, i) => e !== [A.e, B.e][i]);
  return { ok: true, edits, add };
}

/** The chamfer cut on each side of a corner: { da, db } from distances, or from a length and an angle. */
function chamferCuts(spec, ua, ub) {
  if (spec.method === 'A') {
    const theta = Math.acos(Math.max(-1, Math.min(1, dot(ua, ub)))), al = spec.ang || 0;
    if (!(spec.len > EPS)) return { da: 0, db: 0 };
    if (!(al > 1e-9) || theta + al >= Math.PI - 1e-9) return null;
    return { da: spec.len, db: spec.len * Math.sin(al) / Math.sin(theta + al) };
  }
  return { da: Math.max(0, spec.d1 || 0), db: Math.max(0, spec.d2 ?? spec.d1 ?? 0) };
}

/**
 * CHAMFER between two picked straight pieces. spec { method: 'D' | 'A', d1, d2, len, ang (radians) }:
 * d1 is cut from the first piece, d2 from the second; or len from the first at ang to it.
 */
export function chamferPair(A, B, spec, { trim = true, current = null } = {}) {
  if (!A || !B) return { ok: false, error: 'type' };
  if (!straight(A.prim) || !straight(B.prim)) return { ok: false, error: 'type' };
  const like = layerOf(A.e, B.e, current);
  if (A.e === B.e || (A.e.id != null && A.e.id === B.e.id)) {
    if (A.e.type !== 'poly' || A.seg === B.seg) return { ok: false, error: 'same' };
    const sv = sharedVertex(A, B);
    if (!sv) return { ok: false, error: 'middle' };
    // the first pick's segment takes the first distance
    const vc = vertexCorner(A.e, sv.k, sv.inSeg, sv.outSeg);
    if (!vc) return { ok: false, error: 'none' };
    const firstIn = A.seg === sv.inSeg;
    const cuts = chamferCuts(spec, firstIn ? vc.ua : vc.ub, firstIn ? vc.ub : vc.ua);
    if (!cuts) return { ok: false, error: 'angle' };
    const dIn = firstIn ? cuts.da : cuts.db, dOut = firstIn ? cuts.db : cuts.da;
    if (Math.abs(dot(vc.ua, vc.ub)) > 1 - 1e-12) return { ok: false, error: 'collinear' };
    if (dIn > vc.la + 1e-9 || dOut > vc.lb + 1e-9) return { ok: false, error: 'large' };
    if (dIn <= EPS && dOut <= EPS) return { ok: true, edits: [], add: [] };
    return { ok: true, edits: [spliceCorner(A.e, sv.k, polar(vc.x, Math.atan2(vc.ua.y, vc.ua.x), dIn), 0, polar(vc.x, Math.atan2(vc.ub.y, vc.ub.x), dOut))], add: [] };
  }
  const x = intersect(A.prim, B.prim, true, true)[0];
  if (!x) return { ok: false, error: 'parallel' };
  const ra = keepRay(A.prim, x, A.pick), rb = keepRay(B.prim, x, B.pick);
  if (!ra || !rb) return { ok: false, error: 'none' };
  if (Math.abs(dot(ra.u, rb.u)) > 1 - 1e-12) return { ok: false, error: 'collinear' };
  const cuts = chamferCuts(spec, ra.u, rb.u);
  if (!cuts) return { ok: false, error: 'angle' };
  if (cuts.da > ra.reach + 1e-9 || cuts.db > rb.reach + 1e-9) return { ok: false, error: 'large' };
  const pa = polar(x, Math.atan2(ra.u.y, ra.u.x), cuts.da), pb = polar(x, Math.atan2(rb.u.y, rb.u.x), cuts.db);
  const add = dist(pa, pb) > EPS ? [{ type: 'line', ...like, x1: pa.x, y1: pa.y, x2: pb.x, y2: pb.y }] : [];
  return cutBoth(A, B, [pa, ra.u], [pb, rb.u], { trim, add });
}

/** Undo the fillet arcs a polyline already has (an arc segment tangent to the straight segments on both sides). */
function unfilletPoly(e) {
  const v = e.pts, n = v.length, closed = e.closed;
  if (n < 4) return { e, n: 0 };
  const dir = (p, q) => Math.atan2(q.y - p.y, q.x - p.x);
  const same = (a, b) => { const d = normAngle(a - b); return d < 1e-6 || d > TAU - 1e-6; };
  const drop = new Set(), at = new Map();
  for (let k = 0; k < n; k++) {
    const b = v[k].b || 0;
    if (Math.abs(b) < 1e-12) continue;
    const pk = (k - 1 + n) % n, k1 = (k + 1) % n, k2 = (k + 2) % n;
    if (!closed && (k < 1 || k + 2 > n - 1)) continue;
    if (Math.abs(v[pk].b || 0) > 1e-12 || Math.abs(v[k1].b || 0) > 1e-12 || drop.has(k) || drop.has(k1) || at.has(k1)) continue;
    const chord = dir(v[k], v[k1]), th = 4 * Math.atan(b);
    if (!same(dir(v[pk], v[k]), chord - th / 2) || !same(dir(v[k1], v[k2]), chord + th / 2)) continue;
    const x = intersect({ k: 'L', x1: v[pk].x, y1: v[pk].y, x2: v[k].x, y2: v[k].y }, { k: 'L', x1: v[k1].x, y1: v[k1].y, x2: v[k2].x, y2: v[k2].y }, true, true)[0];
    if (!x) continue;
    at.set(k, x); drop.add(k1);
  }
  if (!at.size) return { e, n: 0 };
  const pts = [];
  v.forEach((p, k) => { if (drop.has(k)) return; pts.push(at.has(k) ? { x: at.get(k).x, y: at.get(k).y, b: 0 } : { ...p }); });
  return { e: { ...e, pts }, n: at.size };
}

/**
 * Every corner of a polyline where two straight segments meet: kind 'fillet' (spec = radius; old fillet arcs
 * are taken out first, so a new radius replaces them) or 'chamfer' (spec as chamferPair; the incoming segment
 * takes the first distance). → { e, done, short, arcs } — short = corners whose segments were too short.
 */
export function polyCorners(e, kind, spec) {
  let src = e, removed = 0;
  if (kind === 'fillet') ({ e: src, n: removed } = unfilletPoly(e));
  const v = src.pts, n = v.length, closed = src.closed;
  const segs = closed ? n : n - 1;
  const isLine = (i) => Math.abs(v[i].b || 0) < 1e-12;
  const used = new Array(Math.max(segs, 0)).fill(0);
  const segLen = (i) => dist(v[i], v[(i + 1) % n]);
  const repl = new Map();
  let short = 0, arcs = 0;
  for (let k = closed ? 0 : 1; k < (closed ? n : n - 1); k++) {
    const i = (k - 1 + n) % n;
    if (!isLine(i) || !isLine(k)) { arcs++; continue; }
    const vc = vertexCorner(src, k, i, k);
    if (!vc || Math.abs(dot(vc.ua, vc.ub)) > 1 - 1e-12) continue;   // no corner there
    let a, b, bulge = 0;
    if (kind === 'fillet') {
      if (!(spec > EPS)) continue;
      const f = llFillet(vc.x, vc.ua, vc.ub, spec);
      if (!f) continue;
      a = f.a; b = f.b;
      const sweep = Math.PI - Math.acos(Math.max(-1, Math.min(1, dot(vc.ua, vc.ub))));
      bulge = Math.tan(sweep / 4) * vc.turn;
    } else {
      const cuts = chamferCuts(spec, vc.ua, vc.ub);
      if (!cuts) { short++; continue; }
      if (cuts.da <= EPS && cuts.db <= EPS) continue;
      a = polar(vc.x, Math.atan2(vc.ua.y, vc.ua.x), cuts.da); b = polar(vc.x, Math.atan2(vc.ub.y, vc.ub.x), cuts.db);
    }
    const ta = dist(vc.x, a), tb = dist(vc.x, b);
    if (ta > segLen(i) - used[i] + 1e-9 || tb > segLen(k) - used[k] + 1e-9) { short++; continue; }
    used[i] += ta; used[k] += tb;
    repl.set(k, { a, b, bulge });
  }
  if (!repl.size) return { e: removed ? src : e, done: 0, short, arcs, removed };
  const pts = [];
  v.forEach((p, k) => {
    const r = repl.get(k);
    if (r) pts.push({ x: r.a.x, y: r.a.y, b: r.bulge }, { x: r.b.x, y: r.b.y, b: p.b || 0 });
    else pts.push({ ...p });
  });
  return { e: { ...src, pts: dedupe(pts, closed) }, done: repl.size, short, arcs, removed };
}

/** Explode: a polyline into lines/arcs, an insert into its (transformed) block entities. */
export function explodeEntity(e, blocks) {
  if (e.type === 'poly') {
    return polyPrims(e).map((p) => (p.k === 'L'
      ? { type: 'line', layer: e.layer, color: e.color ?? null, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2 }
      : { type: 'arc', layer: e.layer, color: e.color ?? null, cx: p.cx, cy: p.cy, r: p.r, a0: normAngle(p.a0), a1: normAngle(p.a1) }));
  }
  if (e.type === 'spline') {   // a polyline along the curve (precision 10 per knot span)
    if (!splineValid(e)) return null;
    const pts = splinePolyline(e, 10);
    return pts.length >= 2 ? [{ type: 'poly', layer: e.layer, color: e.color ?? null, closed: !!e.closed, pts: pts.map((q) => ({ x: q.x, y: q.y, b: 0 })) }] : null;
  }
  if (e.type === 'mleader') return leaderGeometry(e).map((c) => ({ ...c, layer: e.layer, color: e.color ?? null }));
  if (e.type === 'insert' || e.type === 'dim') {
    let parts, m = IDENTITY;
    if (e.type === 'insert') {
      const blk = blocks?.get(e.block);
      if (!blk) return null;
      // its visible attributes become plain text with their values
      parts = [...blk.entities, ...attrTexts(e, blk).map((t) => { const c = { ...t }; delete c.tag; delete c.invisible; return c; })];
      m = insertMatrix(e, blk);
    } else parts = dimParts(e, blocks);
    return parts.map((c) => {
      const t = m === IDENTITY ? { ...c } : txEntity(c, m);
      if (t.layer === '0') t.layer = e.layer;
      if (t.color === 0) t.color = e.color ?? null;
      delete t.id;
      return t;
    });
  }
  return null;
}
