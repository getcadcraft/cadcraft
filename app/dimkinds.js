/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dimkinds.js — the dimension kinds and per-dimension extras added for 1.0 ORS.6 (builder "dims"). No DOM; dims.js calls in
 * here (it hands over its own helpers, so this file imports nothing from dims.js).
 *
 * Kinds (all use the four point keys dims.js already has, so move, rotate, scale, mirror, stretch and grips work unchanged):
 *   ordinate  c = the datum (the UCS origin when it was made), p1 = the feature, loc = the leader's end,
 *             axis 'x' | 'y' (which coordinate it reads), rot = the angle of the datum's X axis (the UCS turn)
 *   arc       c = the arc's centre, p1 and p2 = its ends, loc = a point on the dimension arc; measures the arc's length
 *             (radius × the sector that holds loc) and writes the arc symbol before the value
 *   jogged    c = the true centre, p1 = the point on the curve, p2 = the centre shown instead ("centre location override"),
 *             loc = where the jog sits; measures the true radius
 * Extras on a dimension (kept in the file as CADCRAFT xdata "CCDIMX:…", dims-file.js):
 *   jogf, jogh   linear / aligned: a jog symbol on the dimension line at fraction jogf (0–1) of it, jogh high (DIMJOGLINE)
 *   brk          { auto?: true, gap?, au: [[part index, f0, f1], …], man: [[part index, f0, f1], …] } gaps in the extension and
 *                dimension lines (DIMBREAK): au = where other objects cross (worked out again when things move while `auto`),
 *                man = put by hand; part index counts the extension / dimension lines and arcs in the order dims.js builds them
 *   insp         { shape: 'round' | 'angular' | 'none', label, rate } an inspection frame round the value (DIMINSPECT)
 */
import { TAU, dist, angleOf, polar, normAngle, FONT_EM } from './geom.js';
import { advance } from './font.js';

export const MORE_KINDS = ['ordinate', 'arc', 'jogged'];
export const JOG_ANGLE = Math.PI / 4;       // the transverse part of a jogged radius
export const JOG_HEIGHT_FACTOR = 1.5;       // a linear jog's height, × the text height
export const BREAK_FACTOR = 1.5;            // a break's width, × the text height (3.75 at the defaults)
const dot = (a, b) => a.x * b.x + a.y * b.y;
const CUT_ROLES = new Set(['ext1', 'ext2', 'dim', 'dim1', 'dim2']);

/** The datum's axes of an ordinate dimension. */
export function ordinateAxes(e) {
  const r = e.rot || 0;
  return { o: e.c || { x: 0, y: 0 }, ux: { x: Math.cos(r), y: Math.sin(r) }, uy: { x: -Math.sin(r), y: Math.cos(r) } };
}

/** The measured value of the kinds in this file (drawing units). `h.angularSweep` is dims.js's. */
export function measureMore(e, h) {
  switch (e.kind) {
    case 'ordinate': {
      const { o, ux, uy } = ordinateAxes(e), d = { x: e.p1.x - o.x, y: e.p1.y - o.y };
      return Math.abs(dot(d, e.axis === 'y' ? uy : ux));
    }
    case 'arc': return dist(e.c, e.p1) * h.angularSweep(e).sweep;
    case 'jogged': return dist(e.c, e.p1);
    default: return 0;
  }
}

/** Is this kind's data complete enough to draw (file readers ask before making the object)? */
export function moreUsable(d) {
  const ok = (p) => p && Number.isFinite(p.x) && Number.isFinite(p.y);
  const far = (a, b) => Math.hypot(b.x - a.x, b.y - a.y) > 1e-12;
  if (d.kind === 'ordinate') return ok(d.p1) && ok(d.loc) && (!d.c || ok(d.c)) && Number.isFinite(d.rot ?? 0);
  if (d.kind === 'arc') return ok(d.c) && ok(d.p1) && ok(d.p2) && ok(d.loc) && far(d.c, d.p1) && far(d.c, d.p2) && far(d.c, d.loc);
  if (d.kind === 'jogged') return ok(d.c) && ok(d.p1) && ok(d.p2) && ok(d.loc) && far(d.c, d.p1);
  return false;
}

/**
 * Build one of this file's kinds into dims.js's part list. h = { out, line, arrow, text, s (the words), tw (their width),
 * txt, asz, exe, exo, gap, angularSweep, readable }.
 */
export function buildMore(e, h) {
  const { out, line, arrow, text, s, tw, txt, asz, exe, exo, gap } = h;
  switch (e.kind) {
    case 'ordinate': {
      const { ux, uy } = ordinateAxes(e);
      const along = e.axis === 'y' ? ux : uy, across = e.axis === 'y' ? uy : ux;   // the leader runs square to the axis it reads
      const f = e.p1, d = { x: e.loc.x - f.x, y: e.loc.y - f.y };
      const L = dot(d, along), W = dot(d, across), sg = L >= 0 ? 1 : -1, aL = Math.abs(L);
      const pt = (l, w) => ({ x: f.x + along.x * l + across.x * w, y: f.y + along.y * l + across.y * w });
      const start = sg * Math.min(exo, aL);
      if (Math.abs(W) < 1e-9 * Math.max(1, aL)) line(pt(start, 0), pt(L, 0), 'ext1');
      else {
        // a straight run from the feature, a slanted step across, a straight run to the end
        const a = Math.min(2 * asz, aL / 3), b = Math.min(Math.abs(W), aL / 3);
        const k1 = L - sg * (a + b), k2 = L - sg * a;
        if (Math.abs(k1) > Math.abs(start)) line(pt(start, 0), pt(k1, 0), 'ext1');
        line(pt(Math.abs(k1) > Math.abs(start) ? k1 : start, 0), pt(k2, W), 'dim');
        line(pt(k2, W), pt(L, W), 'ext2');
      }
      const dirAng = Math.atan2(along.y, along.x) + (sg < 0 ? Math.PI : 0);
      const ta = h.readable(dirAng), same = Math.cos(ta - dirAng) > 0;
      text(polar(e.loc, dirAng, gap), ta, same ? 'left' : 'right', 'middle', s);
      break;
    }
    case 'arc': {
      const { s: a0, e: a1, sweep } = h.angularSweep(e);
      const R = dist(e.c, e.loc), r = dist(e.c, e.p1);
      if (R < 1e-12 || r < 1e-12) break;
      for (const [ang, role] of [[a0, 'ext1'], [a1, 'ext2']]) {
        if (R > r + 1e-9) line(polar(e.c, ang, r + exo), polar(e.c, ang, R + exe), role);
        else if (R < r - 1e-9 && r - exo > R - exe) line(polar(e.c, ang, r - exo), polar(e.c, ang, Math.max(0, R - exe)), role);
      }
      out.push({ type: 'arc', layer: '0', color: 0, cx: e.c.x, cy: e.c.y, r: R, a0: normAngle(a0), a1: normAngle(a1), role: 'dim' });
      const start = polar(e.c, a0, R), end = polar(e.c, a1, R);
      if (R * sweep >= 2 * asz) { arrow(start, a0 - Math.PI / 2, 'arrow1'); arrow(end, a1 + Math.PI / 2, 'arrow2'); }
      else { arrow(start, a0 + Math.PI / 2, 'arrow1'); arrow(end, a1 - Math.PI / 2, 'arrow2'); }
      const m = a0 + sweep / 2, ta = h.readable(m - Math.PI / 2);
      const outward = Math.cos(ta + Math.PI / 2 - m) > 0;
      const T = polar(e.c, m, R + gap);
      text(T, ta, 'center', outward ? 'bottom' : 'top', s);
      // the arc symbol: a small cap before the value, standing on the text's base line
      const rs = txt * 0.45, base = outward ? T : polar(T, ta + Math.PI / 2, -txt);
      const sc = polar(polar(base, ta + Math.PI, tw / 2 + gap / 2 + rs), ta + Math.PI / 2, txt * 0.15);
      out.push({ type: 'arc', layer: '0', color: 0, cx: sc.x, cy: sc.y, r: rs, a0: normAngle(ta), a1: normAngle(ta + Math.PI), sym: 'arc' });
      break;
    }
    case 'jogged': {
      const r = dist(e.c, e.p1);
      if (r < 1e-12) break;
      const ua = angleOf(e.p1, e.c), u = { x: Math.cos(ua), y: Math.sin(ua) }, n = { x: -u.y, y: u.x };
      const rel = (p) => ({ x: p.x - e.p1.x, y: p.y - e.p1.y });
      const at = (l, w) => ({ x: e.p1.x + u.x * l + n.x * w, y: e.p1.y + u.y * l + n.y * w });
      const d = dot(rel(e.p2), n), tO = dot(rel(e.p2), u);
      arrow(e.p1, ua + Math.PI, 'arrow1');
      let textEnd;
      if (Math.abs(d) < 1e-9 * Math.max(1, r)) { line(e.p1, at(tO, 0), 'dim'); textEnd = Math.max(tO, 2 * asz); }
      else {
        const sh = Math.abs(d) / Math.tan(JOG_ANGLE);
        const lo = 2 * asz + sh / 2, hi = Math.max(lo, tO - sh / 2);
        const tJ = Math.min(Math.max(dot(rel(e.loc), u), lo), hi);
        const A = at(tJ - sh / 2, 0), B = at(tJ + sh / 2, d);
        line(e.p1, A, 'dim'); line(A, B, 'dim'); line(B, at(Math.max(tO, tJ + sh / 2), d), 'dim');
        textEnd = tJ - sh / 2;
      }
      const ta = h.readable(ua);
      text(polar(at(textEnd / 2, 0), ta + Math.PI / 2, gap), ta, 'center', 'bottom', s);
      break;
    }
    default: break;
  }
}

/** The lines and arcs DIMBREAK can cut, in build order (the index a cut names). */
export const cuttable = (parts) => parts.filter((p) => (p.type === 'line' || p.type === 'arc') && CUT_ROLES.has(p.role));

const lerp = (p, f) => ({ x: p.x1 + (p.x2 - p.x1) * f, y: p.y1 + (p.y2 - p.y1) * f });
const piece = (p, f0, f1) => { const a = lerp(p, f0), b = lerp(p, f1); return { ...p, x1: a.x, y1: a.y, x2: b.x, y2: b.y }; };
const arcSweep = (p) => { const sw = normAngle(p.a1 - p.a0); return sw < 1e-12 ? TAU : sw; };

/** Clean cuts → merged [f0, f1] ranges per part index. */
function cutsByPart(brk) {
  const by = new Map();
  for (const c of [...(Array.isArray(brk?.au) ? brk.au : []), ...(Array.isArray(brk?.man) ? brk.man : [])]) {
    if (!Array.isArray(c) || !Number.isInteger(c[0]) || c[0] < 0 || !Number.isFinite(c[1]) || !Number.isFinite(c[2])) continue;
    const f0 = Math.max(0, Math.min(c[1], c[2])), f1 = Math.min(1, Math.max(c[1], c[2]));
    if (f1 - f0 < 1e-9) continue;
    if (!by.has(c[0])) by.set(c[0], []);
    by.get(c[0]).push([f0, f1]);
  }
  for (const [k, list] of by) {
    list.sort((a, b) => a[0] - b[0]);
    const m = [];
    for (const r of list) { const last = m[m.length - 1]; if (last && r[0] <= last[1] + 1e-9) last[1] = Math.max(last[1], r[1]); else m.push([...r]); }
    by.set(k, m);
  }
  return by;
}

/**
 * Per-dimension extras, on the raw part list before the style is applied (so the roles are still there): breaks, a
 * linear jog, an inspection frame. Changes `out` in place.
 */
export function applyExtras(e, out, h) {
  // --- breaks (DIMBREAK)
  if (e.brk && ((e.brk.au && e.brk.au.length) || (e.brk.man && e.brk.man.length))) {
    const by = cutsByPart(e.brk), targets = cuttable(out);
    targets.forEach((p, i) => {
      const cuts = by.get(i);
      if (!cuts) return;
      const keep = []; let from = 0;
      for (const [f0, f1] of cuts) { if (f0 - from > 1e-9) keep.push([from, f0]); from = f1; }
      if (1 - from > 1e-9) keep.push([from, 1]);
      const repl = keep.map(([f0, f1]) => (p.type === 'line' ? piece(p, f0, f1) : { ...p, a0: normAngle(p.a0 + arcSweep(p) * f0), a1: normAngle(p.a0 + arcSweep(p) * f1) }));
      out.splice(out.indexOf(p), 1, ...repl);
    });
  }
  // --- a jog on a linear dimension's line (DIMJOGLINE)
  if ((e.kind === 'linear' || e.kind === 'aligned') && Number.isFinite(e.jogf)) {
    const lines = out.filter((p) => p.type === 'line' && (p.role === 'dim' || p.role === 'dim1' || p.role === 'dim2'));
    if (lines.length) {
      // the whole dimension line, end to end
      const first = lines[0], ang = Math.atan2(first.y2 - first.y1, first.x2 - first.x1), u = { x: Math.cos(ang), y: Math.sin(ang) }, n = { x: -u.y, y: u.x };
      const tOf = (x, y) => (x - first.x1) * u.x + (y - first.y1) * u.y;
      let lo = Infinity, hi = -Infinity;
      for (const p of lines) for (const v of [tOf(p.x1, p.y1), tOf(p.x2, p.y2)]) { lo = Math.min(lo, v); hi = Math.max(hi, v); }
      const hh = (e.jogh > 0 ? e.jogh : JOG_HEIGHT_FACTOR * h.txt) / 2, a = hh * 0.6;
      const tj = lo + (hi - lo) * Math.max(0, Math.min(1, e.jogf));
      const at = (l, w) => ({ x: first.x1 + u.x * l + n.x * w, y: first.y1 + u.y * l + n.y * w });
      const host = lines.find((p) => { const t0 = Math.min(tOf(p.x1, p.y1), tOf(p.x2, p.y2)), t1 = Math.max(tOf(p.x1, p.y1), tOf(p.x2, p.y2)); return tj - a >= t0 - 1e-9 && tj + a <= t1 + 1e-9; });
      if (host) {
        const fwd = tOf(host.x2, host.y2) >= tOf(host.x1, host.y1);
        const A = at(tj - a, 0), B = at(tj - a / 2, hh), C = at(tj + a / 2, -hh), D = at(tj + a, 0);
        const seg = (p, q) => ({ ...host, x1: p.x, y1: p.y, x2: q.x, y2: q.y });
        const s0 = { x: host.x1, y: host.y1 }, s1 = { x: host.x2, y: host.y2 };
        const repl = fwd ? [seg(s0, A), seg(A, B), seg(B, C), seg(C, D), seg(D, s1)] : [seg(s0, D), seg(D, C), seg(C, B), seg(B, A), seg(A, s1)];
        out.splice(out.indexOf(host), 1, ...repl.filter((p) => Math.hypot(p.x2 - p.x1, p.y2 - p.y1) > 1e-12));
      }
    }
  }
  // --- an inspection frame (DIMINSPECT): [ label | value | rate ] in a round or pointed frame
  if (e.insp && typeof e.insp === 'object') {
    const tx = out.find((p) => p.role === 'text');
    if (tx) {
      const hgt = tx.h, pad = hgt * 0.4, H = hgt + 2 * pad;
      const wOf = (str) => advance(String(str)) / 1000 * hgt * FONT_EM;
      const fields = [];
      const label = String(e.insp.label ?? '').trim(), rate = String(e.insp.rate ?? '').trim();
      if (label) fields.push({ s: label });
      fields.push({ s: tx.s, main: true });
      if (rate) fields.push({ s: rate });
      for (const f of fields) f.w = wOf(f.s) + 2 * pad;
      const total = fields.reduce((a, f) => a + f.w, 0);
      const rot = tx.rot || 0, ux = { x: Math.cos(rot), y: Math.sin(rot) }, uy = { x: -ux.y, y: ux.x };
      // the middle of the value as dims.js placed it
      const tw0 = wOf(tx.s), dx = tx.ha === 'left' ? tw0 / 2 : tx.ha === 'right' ? -tw0 / 2 : 0, dy = tx.va === 'bottom' ? hgt / 2 + pad : tx.va === 'top' ? -hgt / 2 - pad : 0;
      const C = { x: tx.x + ux.x * dx + uy.x * dy, y: tx.y + ux.y * dx + uy.y * dy };
      const at = (l, w) => ({ x: C.x + ux.x * l + uy.x * w, y: C.y + ux.y * l + uy.y * w });
      const ln = (p, q) => out.push({ type: 'line', layer: '0', color: 0, x1: p.x, y1: p.y, x2: q.x, y2: q.y, insp: true });
      let x = -total / 2;
      fields.forEach((f, i) => {
        const mid = at(x + f.w / 2, 0);
        if (f.main) Object.assign(tx, { x: mid.x, y: mid.y, ha: 'center', va: 'middle' });
        else out.push({ type: 'text', layer: '0', color: 0, x: mid.x, y: mid.y, h: hgt, rot: normAngle(rot), s: f.s, ha: 'center', va: 'middle', wf: 1, insp: true });
        if (i > 0 && e.insp.shape !== 'none') ln(at(x, -H / 2), at(x, H / 2));
        x += f.w;
      });
      if (e.insp.shape !== 'none') {
        ln(at(-total / 2, H / 2), at(total / 2, H / 2)); ln(at(-total / 2, -H / 2), at(total / 2, -H / 2));
        if (e.insp.shape === 'angular') {
          const tipL = at(-total / 2 - H / 2, 0), tipR = at(total / 2 + H / 2, 0);
          ln(at(-total / 2, H / 2), tipL); ln(tipL, at(-total / 2, -H / 2)); ln(at(total / 2, H / 2), tipR); ln(tipR, at(total / 2, -H / 2));
        } else {
          const cl = at(-total / 2, 0), cr = at(total / 2, 0);
          out.push({ type: 'arc', layer: '0', color: 0, cx: cl.x, cy: cl.y, r: H / 2, a0: normAngle(rot + Math.PI / 2), a1: normAngle(rot - Math.PI / 2), insp: true });
          out.push({ type: 'arc', layer: '0', color: 0, cx: cr.x, cy: cr.y, r: H / 2, a0: normAngle(rot - Math.PI / 2), a1: normAngle(rot + Math.PI / 2), insp: true });
        }
      }
    }
  }
}
