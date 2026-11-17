/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dims.js — dimensions for the CadCraft drafting app. No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 * A dimension is one entity that keeps its defining points and draws itself from them, so it
 * measures again whenever those points move:
 *   { type: 'dim', kind, p1, p2, c, loc, rot, text, st, block? }
 *   linear    p1, p2 = extension line origins, loc = a point on the dimension line, rot = its angle
 *   aligned   p1, p2, loc (the dimension line runs parallel to p1 → p2)
 *   angular   c = vertex, p1 and p2 on the two legs, loc = a point on the arc (the sector containing it)
 *   radius    c = centre, p1 on the curve, loc = where the text goes
 *   diameter  c = centre, p1 on the curve, loc = where the text goes
 *   ordinate, arc, jogged — and the extras jogf / brk / insp: see dimkinds.js (1.0 ORS.6)
 * `text` is '' for the measured value, or an override where '<>' stands for the value.
 * `st` is the dimension style it was drawn with (see DIM_DEFAULTS; sizes × st.scale).
 * `block` names a block holding the geometry another program drew for an imported dimension;
 * it is shown as is until the dimension is edited, then CadCraft draws it again (see dimGeometry).
 */

import { TAU, dist, angleOf, polar, normAngle, onSweep, FONT_EM } from './geom.js';
import { advance } from './font.js';
import { dimValue, styleDimParts } from './dimstyle.js';
import { measureMore, buildMore, applyExtras } from './dimkinds.js';   // ORS.6: ordinate, arc length, jogged radius; breaks, jog, inspection

import { t } from './i18n.js';
/** ISO-25-like defaults (the measurements in drawing units, before × scale). */
export const DIM_DEFAULTS = Object.freeze({ txt: 2.5, asz: 2.5, exe: 1.25, exo: 0.625, gap: 0.625, dli: 3.75, dec: 2, adec: 0, scale: 1, tad: 1, zin: 8 });
/** Dimension kind names for people (getters: read in the page's language when used). */
// ORS.6: the last three kinds are dimkinds.js's (named here, not imported: this line runs while the modules are still loading)
export const DIM_KINDS = {};
for (const k of ['linear', 'aligned', 'angular', 'radius', 'diameter', 'ordinate', 'arc', 'jogged']) Object.defineProperty(DIM_KINDS, k, { get: () => t('dimkind.' + k), enumerable: true });
export const DIM_POINT_KEYS = ['p1', 'p2', 'c', 'loc'];

const style = (e) => ({ ...DIM_DEFAULTS, ...(e.st || {}) });

/** The measured value (drawing units, or radians for angular). */
export function dimMeasure(e) {
  switch (e.kind) {
    case 'linear': { const u = { x: Math.cos(e.rot || 0), y: Math.sin(e.rot || 0) }; return Math.abs((e.p2.x - e.p1.x) * u.x + (e.p2.y - e.p1.y) * u.y); }
    case 'aligned': return dist(e.p1, e.p2);
    case 'radius': return dist(e.c, e.p1);
    case 'diameter': return 2 * dist(e.c, e.p1);
    case 'angular': return angularSweep(e).sweep;
    default: return measureMore(e, { angularSweep });   // ORS.6
  }
}

/**
 * The value as it is written on the drawing: dimstyle.js `dimValue` (session cad-props, P.6) — units (DIMLUNIT: feet and
 * inches, fractions…), round-off, measurement scale, prefix/suffix, zero suppression, decimal separator, alternate units,
 * angle formats. Tolerances are added to the text part by `styleDimParts`.
 */
export function formatMeasure(e, v = dimMeasure(e)) {
  return dimValue(asStyled(e), v).main;
}
/** ORS.6: a jogged radius is written like a radius (the R before the value, the same style rules). */
const asStyled = (e) => (e.kind === 'jogged' ? { ...e, kind: 'radius' } : e);

/** What the dimension's text says. */
export function dimText(e) {
  const t = e.text ?? '';
  const v = formatMeasure(e);
  if (t === '' || t === '<>') return v;
  return t.replace(/<>/g, v);
}

/** The CCW sector of an angular dimension: { s, e (start/end angles), sweep }. */
export function angularSweep(e) {
  const a1 = angleOf(e.c, e.p1), a2 = angleOf(e.c, e.p2), al = angleOf(e.c, e.loc);
  const [s, end] = onSweep(normAngle(al), normAngle(a1), normAngle(a1) + normAngle(a2 - a1)) ? [a1, a2] : [a2, a1];
  let sweep = normAngle(end - s);
  if (sweep < 1e-12) sweep = TAU;
  return { s: normAngle(s), e: normAngle(s) + sweep, sweep };
}

/** A readable text angle: never upside down (AutoCAD turns text past 90° round by 180°). */
export function readable(a) {
  a = normAngle(a);
  if (a > Math.PI / 2 + 1e-9 && a <= 1.5 * Math.PI + 1e-9) a -= Math.PI;
  return normAngle(a);
}

const cache = new WeakMap();

/**
 * The entities a dimension draws as: lines, arcs, arrowheads (solid hatches) and one text,
 * in world coordinates, on layer 0 with colour by block (so they take the dimension's layer and
 * colour). Cached per entity object (entities are replaced, never mutated, when edited).
 */
export function dimGeometry(e) {
  let g = cache.get(e);
  if (!g) { g = build(e); cache.set(e, g); }
  return g;
}

function build(e) {
  const out = dimRawParts(e);
  if (e.brk || e.insp || Number.isFinite(e.jogf)) applyExtras(e, out, { txt: style(e).txt * (style(e).scale || 1) });   // ORS.6: DIMBREAK, DIMJOGLINE, DIMINSPECT
  return styleDimParts(asStyled(e), out);
}

/** The parts before the per-dimension extras and the style are applied (a fresh list; ORS.6: DIMBREAK measures on these). */
export function dimRawParts(e) {
  const st = style(e), S = st.scale || 1;
  const txt = st.txt * S, asz = st.asz * S, exe = st.exe * S, exo = st.exo * S, gap = st.gap * S;
  const out = [];
  // each part carries its `role` (dimstyle.js styleDimParts): ext1 ext2, dim / dim1 dim2, arrow1 arrow2 (+ tip, ang), text
  const line = (a, b, role) => { if (dist(a, b) > 1e-12) out.push({ type: 'line', layer: '0', color: 0, x1: a.x, y1: a.y, x2: b.x, y2: b.y, ...(role ? { role } : {}) }); };
  const arrow = (tip, ang, role) => {
    const base = polar(tip, ang + Math.PI, asz), w = asz / 6;
    const l = polar(base, ang + Math.PI / 2, w), r = polar(base, ang - Math.PI / 2, w);
    out.push({ type: 'hatch', layer: '0', color: 0, solid: true, loops: [[tip.x, tip.y, l.x, l.y, r.x, r.y, tip.x, tip.y]], role, tip: { x: tip.x, y: tip.y }, ang: normAngle(ang) });
  };
  const text = (p, rot, ha, va, s) => out.push({ type: 'text', layer: '0', color: 0, x: p.x, y: p.y, h: txt, rot: normAngle(rot), s, ha, va, wf: 1, role: 'text', measure: dimMeasure(e) });
  const s = dimText(e);
  const tw = advance(s) / 1000 * txt * FONT_EM;

  switch (e.kind) {
    case 'linear': case 'aligned': {
      const r = e.kind === 'aligned' ? angleOf(e.p1, e.p2) : (e.rot || 0);
      const { q1, q2 } = dimLinePoints(e);
      for (const [p, q, role] of [[e.p1, q1, 'ext1'], [e.p2, q2, 'ext2']]) {
        const L = dist(p, q);
        if (L < 1e-12) continue;
        const a = angleOf(p, q);
        if (exo < L + exe) line(polar(p, a, Math.min(exo, L)), polar(q, a, exe), role);
      }
      const len = dist(q1, q2);
      const inside = len >= 2 * asz + 1e-12;
      const a12 = len > 1e-12 ? angleOf(q1, q2) : r;
      const mid = { x: (q1.x + q2.x) / 2, y: (q1.y + q2.y) / 2 };
      const ta = readable(a12), up = ta + Math.PI / 2;
      // DIMJUST 1 / 2 (st.just): the text beside the first / second extension line instead of centred
      const off = Math.min(len / 2, 2 * asz + tw / 2 + gap);
      const tm = st.just === 1 && len > 1e-12 ? polar(q1, a12, off) : st.just === 2 && len > 1e-12 ? polar(q2, a12 + Math.PI, off) : mid;
      const fitsInLine = st.tad === 0 && len > tw + 2 * gap + (inside ? 2 * asz : 0);
      if (inside) {
        if (fitsInLine) { line(q1, polar(tm, a12 + Math.PI, tw / 2 + gap), 'dim1'); line(polar(tm, a12, tw / 2 + gap), q2, 'dim2'); }
        else line(q1, q2, 'dim');
        arrow(q1, a12 + Math.PI, 'arrow1'); arrow(q2, a12, 'arrow2');
      } else {
        line(polar(q1, a12 + Math.PI, 2 * asz), polar(q2, a12, 2 * asz), 'dim');
        arrow(q1, a12, 'arrow1'); arrow(q2, a12 + Math.PI, 'arrow2');
      }
      if (fitsInLine) text(tm, ta, 'center', 'middle', s);
      else if (st.tad === 4) text(polar(tm, up, -gap), ta, 'center', 'top', s);   // DIMTAD 4: below the line
      else text(polar(tm, up, gap), ta, 'center', 'bottom', s);
      break;
    }
    case 'angular': {
      const { s: a0, e: a1, sweep } = angularSweep(e);
      const R = dist(e.c, e.loc);
      if (R < 1e-12) break;
      out.push({ type: 'arc', layer: '0', color: 0, cx: e.c.x, cy: e.c.y, r: R, a0: normAngle(a0), a1: normAngle(a1), role: 'dim' });
      for (const [ang, P, role] of [[a0, nearestOnRay(e, a0), 'ext1'], [a1, nearestOnRay(e, a1), 'ext2']]) {
        const dP = dist(e.c, P);
        if (R > dP + 1e-9) line(polar(e.c, ang, dP + exo), polar(e.c, ang, R + exe), role);
        else if (R < dP - 1e-9 && dP - exo > R - exe) line(polar(e.c, ang, dP - exo), polar(e.c, ang, Math.max(0, R - exe)), role);
      }
      const start = polar(e.c, a0, R), end = polar(e.c, a1, R);
      if (R * sweep >= 2 * asz) { arrow(start, a0 - Math.PI / 2, 'arrow1'); arrow(end, a1 + Math.PI / 2, 'arrow2'); }
      else { arrow(start, a0 + Math.PI / 2, 'arrow1'); arrow(end, a1 - Math.PI / 2, 'arrow2'); }
      const m = a0 + sweep / 2, ta = readable(m - Math.PI / 2);
      const outward = Math.cos(ta + Math.PI / 2 - m) > 0;
      text(polar(e.c, m, R + gap), ta, 'center', outward ? 'bottom' : 'top', s);
      break;
    }
    case 'radius': case 'diameter': {
      const r = dist(e.c, e.p1);
      if (r < 1e-12) break;
      const dl = dist(e.c, e.loc);
      const u = dl > 1e-12 ? angleOf(e.c, e.loc) : angleOf(e.c, e.p1);
      const P = polar(e.c, u, r);
      const cm = asz / 2;   // centre mark
      line(polar(e.c, 0, -cm), polar(e.c, 0, cm)); line(polar(e.c, Math.PI / 2, -cm), polar(e.c, Math.PI / 2, cm));
      if (dl > r + 1e-9) {
        // text outside: a leader from the curve out to the text, with a short landing
        line(P, e.loc, 'dim');
        arrow(P, u + Math.PI, 'arrow1');
        const sx = Math.cos(u) >= 0 ? 1 : -1;
        const land = { x: e.loc.x + sx * asz, y: e.loc.y };
        line(e.loc, land, 'dim');
        text({ x: land.x + sx * gap, y: land.y }, 0, sx > 0 ? 'left' : 'right', 'middle', s);
      } else if (e.kind === 'radius') {
        line(e.c, P, 'dim');
        arrow(P, u, 'arrow1');
        const ta = readable(u);
        text(polar(polar(e.c, u, r / 2), ta + Math.PI / 2, gap), ta, 'center', 'bottom', s);
      } else {
        const Q = polar(e.c, u + Math.PI, r);
        line(Q, P, 'dim');
        arrow(P, u, 'arrow1'); arrow(Q, u + Math.PI, 'arrow2');
        const ta = readable(u);
        text(polar(e.c, ta + Math.PI / 2, gap), ta, 'center', 'bottom', s);
      }
      break;
    }
    default: buildMore(e, { out, line, arrow, text, s, tw, txt, asz, exe, exo, gap, angularSweep, readable }); break;   // ORS.6
  }
  return out;
}

/**
 * Where a linear or aligned dimension's extension lines meet its dimension line: q1 on the first, q2 on the second. Square to
 * the dimension line, or slanted when the dimension has an obliquing angle `obl` (DIMEDIT Oblique: the angle of the extension
 * lines from the X axis, radians).
 */
export function dimLinePoints(e) {
  const r = e.kind === 'aligned' ? angleOf(e.p1, e.p2) : (e.rot || 0);
  const u = { x: Math.cos(r), y: Math.sin(r) };
  if (Number.isFinite(e.obl) && Math.abs(Math.sin(e.obl - r)) > 1e-6) {
    const dv = { x: Math.cos(e.obl), y: Math.sin(e.obl) }, n = { x: -u.y, y: u.x }, den = dv.x * n.x + dv.y * n.y;
    const hit = (p) => { const k = ((e.loc.x - p.x) * n.x + (e.loc.y - p.y) * n.y) / den; return { x: p.x + dv.x * k, y: p.y + dv.y * k }; };
    return { q1: hit(e.p1), q2: hit(e.p2), u, r };
  }
  const d1 = (e.p1.x - e.loc.x) * u.x + (e.p1.y - e.loc.y) * u.y, d2 = (e.p2.x - e.loc.x) * u.x + (e.p2.y - e.loc.y) * u.y;
  return { q1: { x: e.loc.x + u.x * d1, y: e.loc.y + u.y * d1 }, q2: { x: e.loc.x + u.x * d2, y: e.loc.y + u.y * d2 }, u, r };
}

/** The defining point that lies on the ray from the vertex at angle a (p1 or p2). */
function nearestOnRay(e, a) {
  const d = (p) => Math.abs(normAngle(angleOf(e.c, p) - a + Math.PI) - Math.PI);
  return d(e.p1) <= d(e.p2) ? e.p1 : e.p2;
}

/** The text point of a dimension (DXF group 11): the middle of its text. */
export function dimTextPoint(e) {
  const t = dimGeometry(e).find((p) => p.type === 'text');
  return t ? { x: t.x, y: t.y } : { ...e.loc };
}

/**
 * Angular dimension between two lines: the vertex, and a point on each leg chosen so that the
 * sector holding `loc` lies between them (the far end of each line on that side of the vertex).
 */
export function angularFromLines(l1, l2, loc) {
  const d1x = l1.x2 - l1.x1, d1y = l1.y2 - l1.y1, d2x = l2.x2 - l2.x1, d2y = l2.y2 - l2.y1;
  const den = d1x * d2y - d1y * d2x;
  if (Math.abs(den) < 1e-12 * Math.hypot(d1x, d1y) * Math.hypot(d2x, d2y)) return null;
  const t = ((l2.x1 - l1.x1) * d2y - (l2.y1 - l1.y1) * d2x) / den;
  const c = { x: l1.x1 + d1x * t, y: l1.y1 + d1y * t };
  const al = angleOf(c, loc);
  const legs = [l1, l2].map((l) => {
    const a = Math.atan2(l.y2 - l.y1, l.x2 - l.x1);
    return [a, a + Math.PI].map((ang) => {
      // the far end of the line in this direction, else a unit step along it
      let best = null;
      for (const p of [{ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }]) {
        const along = (p.x - c.x) * Math.cos(ang) + (p.y - c.y) * Math.sin(ang);
        if (along > 1e-9 && (!best || along > best.along)) best = { along, p };
      }
      return { ang: normAngle(ang), p: best ? best.p : polar(c, ang, Math.hypot(d1x, d1y) * 1e-3 || 1) };
    });
  });
  // the two rays (one per line) whose CCW sector, under 180°, holds loc
  for (const r1 of legs[0]) for (const r2 of legs[1]) {
    for (const [a, b] of [[r1, r2], [r2, r1]]) {
      const sw = normAngle(b.ang - a.ang);
      if (sw > 1e-9 && sw < Math.PI - 1e-9 && onSweep(normAngle(al), a.ang, a.ang + sw)) return { c, p1: a.p, p2: b.p };
    }
  }
  return null;
}
