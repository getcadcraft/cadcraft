/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xclip.js — clipped block references and linked drawings (0.5 WL.16, XCLIP; WL.17 binds only the clipped part).
 * DOM-free. A reference's clip is `insert.clip = { pts: [{x, y}…] }`: a closed polygon (≥ 3 points; a rectangle is 4)
 * in the BLOCK's own coordinates, so it moves, turns and scales with the reference.
 *
 *   clipOut(out, poly)          a walk.js output that passes on only what lies inside `poly` (world coordinates): lines
 *                               and arcs cut at the boundary, fills cut to it, texts and points kept when their insertion
 *                               point is inside — so screen, plots and extents all clip without knowing about clips
 *   clipFromFilter(o)           a SPATIAL_FILTER (cc-dwg model / DXF) → { pts } or null
 *   filterOf(clip)              → SPATIAL_FILTER fields (block coordinates, identity matrices, as ezdxf writes them)
 *   clipEntities(doc, ents, poly) a block's objects cut to a clip in its own coordinates (WL.17)
 *   installXclip(def, opt)      XCLIP (XC): New boundary (Rectangular / Polygonal), Delete — one undo step
 */
import { t } from './i18n.js';
import { pointInPolygon as pip2d } from './geom2d.js';   // 0.11 PERF.74: one copy of the ray cast (lib/geom2d)
import { insertMatrix, mApply, TAU, prims, entityBounds, validBounds } from './geom.js';

const EPS = 1e-12;

/** Even–odd point in polygon. */
export function insidePoly(p, poly) { return pip2d(p.x, p.y, poly); }

/** Where segment a→b crosses the polygon's edges: parameters t in (0, 1). */
function segCrossings(a, b, poly) {
  const out = [];
  const dx = b.x - a.x, dy = b.y - a.y;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const p = poly[j], q = poly[i], ex = q.x - p.x, ey = q.y - p.y;
    const den = dx * ey - dy * ex;
    if (Math.abs(den) < EPS) continue;
    const tt = ((p.x - a.x) * ey - (p.y - a.y) * ex) / den, u = ((p.x - a.x) * dy - (p.y - a.y) * dx) / den;
    if (tt > EPS && tt < 1 - EPS && u >= -EPS && u <= 1 + EPS) out.push(tt);
  }
  return out;
}

/** A line primitive cut to the polygon → the pieces inside. */
export function clipLine(q, poly) {
  const a = { x: q.x1, y: q.y1 }, b = { x: q.x2, y: q.y2 };
  const ts = [0, ...segCrossings(a, b, poly).sort((x, y) => x - y), 1], out = [];
  for (let i = 0; i + 1 < ts.length; i++) {
    const t0 = ts[i], t1 = ts[i + 1];
    if (t1 - t0 < EPS) continue;
    const m = (t0 + t1) / 2;
    if (!insidePoly({ x: a.x + (b.x - a.x) * m, y: a.y + (b.y - a.y) * m }, poly)) continue;
    const prev = out[out.length - 1];
    if (prev && Math.abs(prev.t1 - t0) < EPS) prev.t1 = t1; else out.push({ t0, t1 });
  }
  return out.map(({ t0, t1 }) => ({ ...q, x1: a.x + (b.x - a.x) * t0, y1: a.y + (b.y - a.y) * t0, x2: a.x + (b.x - a.x) * t1, y2: a.y + (b.y - a.y) * t1 }));
}

/** An arc primitive (counter-clockwise a0 → a1) cut to the polygon → the sub-arcs inside. */
export function clipArc(q, poly) {
  let sweep = q.a1 - q.a0;
  while (sweep <= 0) sweep += TAU;
  const ang = [];
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const p = poly[j], r = poly[i], dx = r.x - p.x, dy = r.y - p.y, fx = p.x - q.cx, fy = p.y - q.cy;
    const A = dx * dx + dy * dy, B = 2 * (fx * dx + fy * dy), C = fx * fx + fy * fy - q.r * q.r, D = B * B - 4 * A * C;
    if (A < EPS || D < 0) continue;
    for (const s of [(-B - Math.sqrt(D)) / (2 * A), (-B + Math.sqrt(D)) / (2 * A)]) {
      if (s < -EPS || s > 1 + EPS) continue;
      let a = Math.atan2(p.y + dy * s - q.cy, p.x + dx * s - q.cx) - q.a0;
      while (a < 0) a += TAU;
      while (a >= TAU) a -= TAU;
      if (a > EPS && a < sweep - EPS) ang.push(a);
    }
  }
  const ts = [0, ...ang.sort((x, y) => x - y), sweep], out = [];
  for (let i = 0; i + 1 < ts.length; i++) {
    const s0 = ts[i], s1 = ts[i + 1];
    if (s1 - s0 < 1e-9) continue;
    const m = q.a0 + (s0 + s1) / 2;
    if (!insidePoly({ x: q.cx + q.r * Math.cos(m), y: q.cy + q.r * Math.sin(m) }, poly)) continue;
    const prev = out[out.length - 1];
    if (prev && Math.abs(prev.s1 - s0) < 1e-9) prev.s1 = s1; else out.push({ s0, s1 });
  }
  return out.map(({ s0, s1 }) => ({ ...q, a0: q.a0 + s0, a1: q.a0 + s1 }));
}

const convex = (poly) => {
  let sign = 0;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], c = poly[(i + 2) % poly.length];
    const z = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
    if (Math.abs(z) < EPS) continue;
    if (sign && Math.sign(z) !== sign) return false;
    sign = Math.sign(z);
  }
  return true;
};

/** A fill ring [x, y, …] cut to the polygon (Sutherland–Hodgman; for a concave clip, rings across it are kept whole). */
export function clipRing(l, poly) {
  let pts = [];
  for (let i = 0; i + 1 < l.length; i += 2) pts.push({ x: l[i], y: l[i + 1] });
  if (pts.length > 1 && Math.abs(pts[0].x - pts[pts.length - 1].x) < EPS && Math.abs(pts[0].y - pts[pts.length - 1].y) < EPS) pts.pop();
  const ins = pts.filter((p) => insidePoly(p, poly)).length;
  if (ins === pts.length && !poly.some((p) => insidePoly(p, pts))) return l;
  if (!convex(poly)) return ins ? l : null;
  let ccw = 0;
  for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length]; ccw += a.x * b.y - b.x * a.y; }
  const side = (p, a, b) => ((b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x)) * (ccw >= 0 ? 1 : -1) >= -EPS;
  for (let i = 0; i < poly.length && pts.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], inp = pts;
    pts = [];
    for (let k = 0; k < inp.length; k++) {
      const p = inp[k], q = inp[(k + 1) % inp.length], pi = side(p, a, b), qi = side(q, a, b);
      if (pi) pts.push(p);
      if (pi !== qi) {
        const dx = q.x - p.x, dy = q.y - p.y, ex = b.x - a.x, ey = b.y - a.y, den = dx * ey - dy * ex;
        if (Math.abs(den) > EPS) { const tt = ((a.x - p.x) * ey - (a.y - p.y) * ex) / den; pts.push({ x: p.x + dx * tt, y: p.y + dy * tt }); }
      }
    }
  }
  if (pts.length < 3) return null;
  const out = [];
  for (const p of pts) out.push(p.x, p.y);
  out.push(pts[0].x, pts[0].y);
  return out;
}

/** A walk.js output that passes on only what lies inside `poly` (world coordinates). */
export function clipOut(out, poly) {
  const prims = (ps) => ps.flatMap((q) => (q.k === 'L' ? clipLine(q, poly) : q.k === 'A' ? clipArc(q, poly) : [q]));
  return {
    ...out,
    stroke(color, ps, lw, o) { const c = prims(ps); if (c.length) out.stroke(color, c, lw, o); },
    fill(color, loops, solid, o) { const c = loops.map((l) => clipRing(l, poly)).filter(Boolean); if (c.length) out.fill(color, c, solid, o); },
    text(color, e, o) { if (insidePoly({ x: e.x, y: e.y }, poly)) out.text(color, e, o); },
    point(color, x, y) { if (insidePoly({ x, y }, poly)) out.point?.(color, x, y); },
    ...(out.mask ? { mask(color, loop, o) { const c = clipRing(loop, poly); if (c) out.mask(color, c, o); } } : {}),
  };
}

/** The clip polygon of a reference in world coordinates (through its insert matrix and any outer transform m). */
export function worldClip(ref, block, m = null) {
  const im = insertMatrix(ref, block), M = m ? [m[0] * im[0] + m[2] * im[1], m[1] * im[0] + m[3] * im[1], m[0] * im[2] + m[2] * im[3], m[1] * im[2] + m[3] * im[3], m[0] * im[4] + m[2] * im[5] + m[4], m[1] * im[4] + m[3] * im[5] + m[5]] : im;
  return ref.clip.pts.map((p) => mApply(M, p));
}

/** A usable clip polygon of a reference, or null. */
export function clipPoly(ref) {
  const pts = ref && ref.clip && Array.isArray(ref.clip.pts) ? ref.clip.pts.filter((p) => p && Number.isFinite(p.x) && Number.isFinite(p.y)) : [];
  return pts.length >= 3 ? pts : null;
}

/**
 * SPATIAL_FILTER → { pts } in block coordinates: its boundary (2 points = a rectangle) through the clip bound transform
 * and the inverse block transform (both 3 × 4, rows). Spec gap: which way those apply is not written down; in every file
 * we can make (ezdxf, then the ODA converter) both are the identity and the boundary is in block coordinates.
 */
export function clipFromFilter(o) {
  const ps = Array.isArray(o?.points) ? o.points.filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y)) : [];
  if (ps.length < 2) return null;
  const mat = (a) => (Array.isArray(a) && a.length === 12 && a.every(Number.isFinite) ? a : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]);
  const T = mat(o.clipTransform), I = mat(o.inverseBlockTransform);
  const ap = (m, p) => ({ x: m[0] * p.x + m[1] * p.y + m[3], y: m[4] * p.x + m[5] * p.y + m[7] });
  let pts = ps.length === 2 ? [ps[0], { x: ps[1].x, y: ps[0].y }, ps[1], { x: ps[0].x, y: ps[1].y }] : ps;
  pts = pts.map((p) => ap(I, ap(T, p)));
  return { pts: pts.map((p) => ({ x: p.x, y: p.y })) };
}

/** A clip → SPATIAL_FILTER fields (cc-dwg model; dxf2000.js writes the same). */
export function filterOf(clip) {
  const id = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0];
  return { type: 'SPATIAL_FILTER', points: clip.pts.map((p) => ({ x: p.x, y: p.y })), extrusion: { x: 0, y: 0, z: 1 }, origin: { x: 0, y: 0, z: 0 },
    displayBoundary: 1, frontClip: null, backClip: null, inverseBlockTransform: id, clipTransform: [...id] };
}

/**
 * A block's objects cut to a clip polygon in the block's coordinates (WL.17, XREF Bind "clipped part only"). Objects wholly
 * inside stay as they are; lines, arcs, circles, polylines and ellipses crossing the boundary become their inside pieces
 * as lines and arcs (with the object's layer, colour, linetype, lineweight); fills are cut; texts, points, attribute
 * definitions, dimensions, leaders and nested blocks crossing the boundary are kept when their insertion point (or centre)
 * is inside. → { entities, cut, kept }
 */
export function clipEntities(doc, entities, poly) {
  const out = [];
  let cut = 0, kept = 0;
  const GEOM = ['id', 'type', 'x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'a0', 'a1', 'pts', 'closed', 'mx', 'my', 'ratio', 't0', 't1', 'w', 'z1', 'z2'];
  const props = (e) => { const o = { ...e }; for (const k of GEOM) delete o[k]; return o; };   // layer, colour, linetype, lineweight…
  for (const e of entities) {
    const b = entityBounds(e, doc.blocks);
    const corners = validBounds(b) ? [{ x: b.minX, y: b.minY }, { x: b.maxX, y: b.minY }, { x: b.maxX, y: b.maxY }, { x: b.minX, y: b.maxY }] : [];
    const allIn = corners.length && corners.every((p) => insidePoly(p, poly)) && !poly.some((p) => p.x > b.minX && p.x < b.maxX && p.y > b.minY && p.y < b.maxY);
    if (allIn) { out.push(e); continue; }
    if (['line', 'arc', 'circle', 'poly', 'ellipse'].includes(e.type)) {
      const ps = prims(e, null).flatMap((q) => (q.k === 'L' ? clipLine(q, poly) : clipArc(q, poly)));
      for (const q of ps) out.push(q.k === 'L' ? { type: 'line', ...props(e), x1: q.x1, y1: q.y1, x2: q.x2, y2: q.y2 } : { type: 'arc', ...props(e), cx: q.cx, cy: q.cy, r: q.r, a0: q.a0, a1: q.a1 });
      if (ps.length) cut++;
    } else if (e.type === 'hatch') {
      const loops = (e.loops || []).map((l) => clipRing(l, poly)).filter(Boolean);
      if (loops.length) { out.push({ ...e, loops }); cut++; }
    } else {
      const at = Number.isFinite(e.x) && Number.isFinite(e.y) ? { x: e.x, y: e.y } : validBounds(b) ? { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } : null;
      if (at && insidePoly(at, poly)) { out.push(e); kept++; }
    }
  }
  return { entities: out, cut, kept };
}

/** XCLIP. */
export function installXclip(def, opt) {
  def('XCLIP', ['XC'], async (c) => {
    const set = await c.select(t('xclip.select'));
    const ids = [...(set || [])].filter((id) => c.doc.get(id)?.type === 'insert' && c.doc.blocks.get(c.doc.get(id).block));
    if (!ids.length) { c.print(t('xclip.none')); return; }
    const k = await c.keyword(t('xclip.prompt'), { options: [opt('N', t('opt.new')), opt('D', t('opt.delete'))], default: 'N' });
    const o = k?.option ?? k;
    if (!o) return;
    let world = null;
    if (o === 'N') {
      const s = await c.keyword(t('xclip.shape'), { options: [opt('R', t('opt.rectangular')), opt('P', t('opt.polygonal'))], default: 'R' });
      const sh = s?.option ?? s;
      if (!sh) return;
      if (sh === 'R') {
        const a = await c.point(t('xclip.corner1')); if (!a || a.option) return;
        const b = await c.point(t('xclip.corner2'), { base: a }); if (!b || b.option) return;
        world = [{ x: a.x, y: a.y }, { x: b.x, y: a.y }, { x: b.x, y: b.y }, { x: a.x, y: b.y }];
      } else {
        world = [];
        for (;;) {
          const q = await c.point(t(world.length < 3 ? 'xclip.vertex' : 'xclip.vertex_or_enter'), { base: world[world.length - 1], none: world.length >= 3 });
          if (!q) break;
          if (q.option) return;
          world.push({ x: q.x, y: q.y });
        }
        if (world.length < 3) return;
      }
    }
    c.doc.change('XCLIP', () => {
      for (const id of ids) {
        const e = c.doc.get(id), m = insertMatrix(e, c.doc.blocks.get(e.block)), d = m[0] * m[3] - m[1] * m[2];
        const { clip: _old, ...rest } = e;   // eslint-disable-line no-unused-vars
        if (!world || Math.abs(d) < 1e-300) { c.doc.update(id, rest); continue; }
        const inv = [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[3] * m[4]) / d, (m[1] * m[4] - m[0] * m[5]) / d];
        c.doc.update(id, { ...rest, clip: { pts: world.map((p) => mApply(inv, p)) } });
      }
    });
    c.print(t(world ? 'xclip.done' : 'xclip.deleted', { n: ids.length }));
  }, { help: () => t('xclip.help') });
}
