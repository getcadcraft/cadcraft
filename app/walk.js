/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walk.js — what a set of entities draws as, for any output (the screen in view.js, paper in
 * plot.js). No DOM. Blocks and dimensions are expanded, colours resolved (by layer, by block),
 * hidden layers skipped, and everything put through an optional transform `m`:
 *
 *   walk(doc, entities, out, { m, plot })
 *     out.stroke(color, prims, lw, o) lines and arcs (geom.js primitives), already transformed and cut into the dashes of
 *                                     their linetype (0.4 C8, linetypes.js); lw = the lineweight in mm (-3 = default)
 *     out.fill(color, loops, solid, o) hatches: loops of [x, y, x, y, …] (a pattern hatch.js knows comes as strokes)
 *     out.text(color, e, o)           a text entity, already transformed (its `obl`, the oblique angle, passes through)
 *
 * `o` (0.4 part 2, track P; absent = opaque) = { alpha, wipe }: alpha 0–1 = 1 − transparency/100 (the object's `tr`;
 * ByLayer = its layer's `tr`, ByBlock = the reference's); `wipe: true` on a solid fill = paint it in the background
 * colour (a dimension's text background, DIMTFILL 1; white on a plot). A polyline with widths (`w`, `pts[i].sw/ew`)
 * comes as filled bands, with no centre line for those segments; a hatch's background colour (`bg`) as a solid fill
 * under it.
 *     out.point(color, x, y)
 *     out.viewport(e)                 a layout viewport (its border also comes as a stroke)
 *     out.mask(color, loop, { wipe })   a text's background mask (0.5 WL.8), just before its text: a solid ring to paint
 *                                     over the linework below it (wipe = the background colour); without out.mask it comes
 *                                     as a solid fill
 *     out.infinite(color, e, lw, o)   an xline / ray (0.5 DR.7) after the transform ({ type, x, y, dx, dy }), for the output
 *                                     to clip; without out.infinite it comes as a stroke of its ±FAR stand-in (geom.js)
 *     out.picture(p)                  a picture (0.5 WL.14, pictures.js): { file, place: {x, y, ux, uy, vx, vy, w, h},
 *                                     clip: [x, y, …] (its frame), alpha } after the transform; its frame also comes as a
 *                                     stroke, and the file's name as text only while the file is not loaded
 *
 * `plot: true` also skips layers set not to plot. `frozen` (0.5 VP.1) = a Set of upper-case layer names frozen in the
 * viewport being drawn (a viewport's `frz`; `frozenSet(vp)`): skipped like a frozen layer. Colours are 'ink' or '#rrggbb'.
 * A block reference's attributes (geom.attrTexts) come out as text after its block; invisible
 * attributes are never drawn.
 */

import { prims, txPrim, txEntity, insertMatrix, ellipsePoints, mMul, mApply, dimParts, attrTexts, textLayout, TAU } from './geom.js';
import { resolveColor } from './doc.js';
import { hatchLines } from './hatch.js';
import { leaderGeometry } from './leader.js';
import { resolveLt, resolveLw, patternOf, dashPrims } from './linetypes.js';
import { findPicture } from './pictures.js';
import { clipOut, clipPoly } from './xclip.js';

/** How strongly what is outside REFEDIT's working set is drawn (0.6 DF.5). */
export const REF_FADE = 0.3;

export function walk(doc, entities, out, { m = null, plot = false, frozen = null } = {}) {
  // per-viewport layer overrides (VP.3, frozenSet(vp).ovr): the layers as that viewport shows them
  const ovr = frozen && frozen.ovr;
  if (ovr && ovr.size) {
    const layers = new Map();
    for (const [k, l] of doc.layers) {
      const o = ovr.get(String(k).toUpperCase());
      layers.set(k, o ? { ...l, ...(o.color !== undefined ? { color: o.color } : {}), ...(o.lt ? { linetype: o.lt } : {}), ...(Number.isFinite(o.lw) ? { lineweight: o.lw } : {}), ...(Number.isFinite(o.tr) ? { tr: o.tr } : {}) } : l);
    }
    doc = Object.assign(Object.create(Object.getPrototypeOf(doc)), doc, { layers });
  }
  const shown = (name) => {
    if (frozen && frozen.size && frozen.has(String(name).toUpperCase())) return false;
    const l = doc.layers.get(name);
    return !l || (l.on && !l.frozen && (!plot || l.plot !== false));
  };
  const P = (mm, x, y) => (mm ? mApply(mm, { x, y }) : { x, y });
  const ltscale = doc.meta?.ltscale > 0 ? doc.meta.ltscale : 1;
  const patterns = new Map();
  const pattern = (name) => { if (!patterns.has(name)) patterns.set(name, patternOf(doc, name)); return patterns.get(name); };
  // lines in the object's own coordinates, dashed by its linetype there (so a scaled block scales its dashes), then placed
  const strokeOf = (e, ps, color, lw, mm, ctx, o) => {
    const pat = pattern(resolveLt(doc, e, ctx.lt, ctx.layer));
    const d = pat ? dashPrims(ps, pat, ltscale * (e.lts > 0 ? e.lts : 1)) : ps;
    out.stroke(color, mm ? d.flatMap((q) => txPrim(q, mm)) : d, lw, o);
  };
  const txLoops = (loops, mm) => (mm ? loops.map((l) => { const o = []; for (let i = 0; i + 1 < l.length; i += 2) { const p = mApply(mm, { x: l[i], y: l[i + 1] }); o.push(p.x, p.y); } return o; }) : loops);
  // transparency (P.5): the object's, else its layer's (ByLayer), else the reference's (ByBlock) → an alpha, or undefined
  const trOf = (e, blkTr, parentLayer) => {
    const v = e.tr;
    if (v === 'ByBlock') return blkTr;
    if (Number.isFinite(v)) return v;
    const l = doc.layers.get(e.layer === '0' && parentLayer ? parentLayer : e.layer);
    return Number.isFinite(l?.tr) ? l.tr : undefined;
  };
  const optsOf = (tr) => (Number.isFinite(tr) && tr > 0 ? { alpha: Math.max(0, Math.min(1, 1 - tr / 100)) } : undefined);

  const emit = (e, byBlock, parentLayer, mm, depth, blk = {}) => {
    if (depth > 16) return;
    const color = resolveColor(doc, e, byBlock, parentLayer);
    const lw = resolveLw(doc, e, blk.lw, parentLayer);
    const ctx = { lt: blk.lt, layer: parentLayer };
    const tr = trOf(e, blk.tr, parentLayer), o = optsOf(tr);
    switch (e.type) {
      case 'insert': case 'dim': case 'mleader': {
        let parts, m2 = mm;
        if (e.type === 'insert') {
          const blk = doc.blocks.get(e.block);
          if (!blk) return;
          // the block, then its attributes (visible ones with a value; same layer and colour rules)
          parts = blk.attdefs?.length || e.attrs ? [...blk.entities, ...attrTexts(e, blk)] : blk.entities;
          const im = insertMatrix(e, blk);
          m2 = mm ? mMul(mm, im) : im;
        } else parts = e.type === 'mleader' ? leaderGeometry(e) : dimParts(e, doc.blocks);   // a multileader draws itself, like a dimension
        const layer = e.layer === '0' && parentLayer ? parentLayer : e.layer;
        const inner = { lt: resolveLt(doc, e, blk.lt, parentLayer), lw, tr };   // what ByBlock means inside
        // a clipped reference (XCLIP, 0.5 WL.16): its contents pass through an output that keeps what is inside the clip
        const cp = e.type === 'insert' ? clipPoly(e) : null, outer = out;
        if (cp) out = clipOut(out, cp.map((q) => mApply(m2, q)));
        try {
          for (const c of parts) {
            if (!shown(c.layer === '0' ? layer : c.layer)) continue;
            emit(c, color, layer, m2, depth + 1, e.type === 'insert' ? inner : { lt: 'Continuous', lw, tr });   // dimension and leader lines stay solid
          }
        } finally { out = outer; }
        return;
      }
      case 'text':
        if (e.picName && findPicture(doc, e.s)) return;   // a picture's name stands in for it only until its file is loaded
        {
          const te = mm ? txEntity(e, mm) : e;
          if (e.bgm) {   // a background mask (0.5 WL.8): before the text; out.mask draws it over the linework under it
            const win = e.bgm.color === 'bg', loop = maskLoop(te, e.bgm.scale);
            const mc = win ? 'ink' : resolveColor(doc, { ...e, color: e.bgm.color }, byBlock, parentLayer);
            if (out.mask) out.mask(mc, loop, { wipe: win }); else out.fill(mc, [loop], true, win ? { wipe: true } : undefined);
          }
          out.text(color, te, o);
        }
        return;
      case 'point': { const p = P(mm, e.x, e.y); out.point(color, p.x, p.y); return; }
      case 'hatch': {
        if (e.bg !== undefined && e.bg !== null && !e.solid) out.fill(resolveColor(doc, { ...e, color: e.bg }, byBlock, parentLayer), txLoops(e.loops, mm), true, o);   // background colour under the pattern
        const lines = hatchLines(e, doc);   // a known pattern draws its lines (hatch.js); others show as a tone, as before
        if (lines) { out.stroke(color, mm ? lines.flatMap((q) => txPrim(q, mm)) : lines, lw, o); return; }
        out.fill(color, txLoops(e.loops, mm), !!e.solid, e.wipe && e.solid && e.color === 'bg' ? { ...(o || {}), wipe: true } : o);   // DIMTFILL 1: the background; 2: its own colour
        return;
      }
      case 'ellipse': {
        const pts = ellipsePoints(e, 96);
        const ps = [];
        for (let i = 0; i + 1 < pts.length; i++) ps.push({ k: 'L', x1: pts[i].x, y1: pts[i].y, x2: pts[i + 1].x, y2: pts[i + 1].y });
        strokeOf(e, ps, color, lw, mm, ctx, o);
        return;
      }
      case 'poly': {
        if (e.pic && out.picture) out.picture(pictureOut(e, mm, o));
        const b = polyBands(e);
        if (!b) { strokeOf(e, prims(e, null), color, lw, mm, ctx, o); return; }
        if (b.loops.length) out.fill(color, txLoops(b.loops, mm), true, o);
        if (b.plain.length) strokeOf(e, b.plain, color, lw, mm, ctx, o);
        return;
      }
      case 'xline': case 'ray':   // construction lines (0.5 DR.7): an output that clips them gets them whole
        if (out.infinite) {
          const p = P(mm, e.x, e.y), d = mm ? { x: mm[0] * e.dx + mm[2] * e.dy, y: mm[1] * e.dx + mm[3] * e.dy } : { x: e.dx, y: e.dy };
          out.infinite(color, { type: e.type, x: p.x, y: p.y, dx: d.x, dy: d.y }, lw, o);
          return;
        }
        strokeOf(e, prims(e, null), color, lw, mm, ctx, o); return;
      default: strokeOf(e, prims(e, null), color, lw, mm, ctx, o);
    }
  };

  // REFEDIT (0.6 DF.5): the reference being edited is not drawn, everything outside the working set is drawn faded
  const re = doc.refEdit || null;   // only the edited space's own objects are touched (re.map.get(e.id) === e below)
  const plain = out;
  const fade = (o) => ({ ...(o || {}), alpha: (o?.alpha ?? 1) * REF_FADE });
  const faded = re ? { ...plain, stroke: (c, p, lw, o) => plain.stroke(c, p, lw, fade(o)), fill: (c, l, s, o) => plain.fill(c, l, s, o?.wipe ? o : fade(o)), text: (c, e, o) => plain.text(c, e, fade(o)),
    ...(plain.infinite ? { infinite: (c, e, lw, o) => plain.infinite(c, e, lw, fade(o)) } : {}), ...(plain.picture ? { picture: (p) => plain.picture({ ...p, alpha: (p.alpha ?? 1) * REF_FADE }) } : {}) } : plain;
  for (const e of entities) {
    if (re && re.map.get(e.id) === e) { if (e.id === re.ref) continue; out = re.ids.has(e.id) ? plain : faded; } else out = plain;
    if (e.type === 'viewport') {
      // the view shows whatever its layer; the border follows the layer like anything else
      out.viewport?.(e);
      if (shown(e.layer)) out.stroke(resolveColor(doc, e), mm2(prims(e, null), m), resolveLw(doc, e), optsOf(trOf(e, undefined, null)));
      continue;
    }
    if (shown(e.layer)) emit(e, null, null, m, 0);
  }
}

/**
 * A text's background mask (WL.8) as a ring [x, y, …]: the text's box — its wrap width when it has one — grown by
 * (scale − 1) × the text height on every side, as the other program's "border offset factor" (1.5 = half a height).
 */
export function maskLoop(e, scale = 1.5) {
  const lay = textLayout(e), b = lay.box, m = Math.max(0, (Number.isFinite(scale) ? scale : 1.5) - 1) * e.h;
  let x0 = b.x, x1 = b.x + b.w;
  if (e.ww > 0 && e.ww > b.w) {   // the paragraph's own width, placed as its alignment places it
    if (e.ha === 'center') { const c = (x0 + x1) / 2; x0 = c - e.ww / 2; x1 = c + e.ww / 2; } else if (e.ha === 'right') x0 = x1 - e.ww; else x1 = x0 + e.ww;
  }
  const c = Math.cos(e.rot || 0), s = Math.sin(e.rot || 0), P = (x, y) => [e.x + x * c - y * s, e.y + x * s + y * c];
  const pts = [P(x0 - m, b.y - m), P(x1 + m, b.y - m), P(x1 + m, b.y + b.h + m), P(x0 - m, b.y + b.h + m)];
  return [...pts.flat(), ...pts[0]];
}

/** A picture's frame → what out.picture gets: the picture's placement and its frame, through the transform. */
function pictureOut(e, mm, o) {
  const p = e.pic, at = mm ? mApply(mm, { x: p.x, y: p.y }) : { x: p.x, y: p.y };
  const vec = (x, y) => (mm ? { x: mm[0] * x + mm[2] * y, y: mm[1] * x + mm[3] * y } : { x, y });
  const u = vec(p.ux, p.uy), v = vec(p.vx, p.vy);
  const clip = [];
  for (const q of e.pts) { const r = mm ? mApply(mm, q) : q; clip.push(r.x, r.y); }
  return { file: p.file, place: { x: at.x, y: at.y, ux: u.x, uy: u.y, vx: v.x, vy: v.y, w: p.w, h: p.h }, clip, alpha: (o?.alpha ?? 1) * (1 - (Number.isFinite(p.fade) ? Math.max(0, Math.min(100, p.fade)) / 100 : 0)) };
}

/**
 * How a viewport shows the model's layers (VP.1, VP.3) → a Set of upper-case names of the layers frozen in it (`vp.frz`),
 * carrying `.ovr` = Map(upper-case layer name → { color, lt, lw, tr }) when it overrides layers (`vp.lov`); or null when
 * it shows every layer as the drawing has it.
 */
export function frozenSet(vp) {
  const f = vp && Array.isArray(vp.frz) ? vp.frz.filter((n) => typeof n === 'string' && n) : [];
  const lov = vp && vp.lov && typeof vp.lov === 'object' ? Object.entries(vp.lov).filter(([k, v]) => k && v && typeof v === 'object') : [];
  if (!f.length && !lov.length) return null;
  const set = new Set(f.map((n) => n.toUpperCase()));
  if (lov.length) set.ovr = new Map(lov.map(([k, v]) => [k.toUpperCase(), v]));
  return set;
}

/** The key a cache of the model as one viewport shows it is kept under ('' = every layer as the drawing has it). */
export function frozenKey(set) {
  if (!set) return '';
  const o = set.ovr ? '\u0001' + JSON.stringify([...set.ovr].sort((a, b) => (a[0] < b[0] ? -1 : 1))) : '';
  return [...set].sort().join('\n') + o;
}

const mm2 = (ps, m) => (m ? ps.flatMap((q) => txPrim(q, m)) : ps);

/**
 * A polyline's widths (P.7: global `w`, per segment `pts[i].sw` / `ew`) → { loops (one filled band per wide segment, as
 * [x, y, …] rings), plain (prims of the segments without width) }, or null when it has no width at all. Arcs (bulges) are
 * followed in steps of at most 10°, the width changing evenly along each segment, as AutoCAD draws them.
 */
export function polyBands(e) {
  const pts = e.pts || [];
  const g = Number.isFinite(e.w) && e.w > 0 ? e.w : 0;
  if (!g && !pts.some((p) => p.sw > 0 || p.ew > 0)) return null;
  const n = pts.length, segs = e.closed ? n : n - 1;
  const loops = [], plain = [];
  for (let i = 0; i < segs; i++) {
    const a = pts[i], q = pts[(i + 1) % n];
    const ws = Number.isFinite(a.sw) ? a.sw : g, we = Number.isFinite(a.ew) ? a.ew : g;
    const one = prims({ type: 'poly', closed: false, pts: [{ x: a.x, y: a.y, b: a.b || 0 }, { x: q.x, y: q.y }] }, null);
    if (!(ws > 0 || we > 0)) { plain.push(...one); continue; }
    const p = one[0];
    if (!p) continue;
    // points along the segment with their unit normals (left side)
    const along = [];
    if (p.k === 'L') {
      const L = Math.hypot(p.x2 - p.x1, p.y2 - p.y1) || 1, nx = -(p.y2 - p.y1) / L, ny = (p.x2 - p.x1) / L;
      along.push([p.x1, p.y1, nx, ny, 0], [p.x2, p.y2, nx, ny, 1]);
    } else {
      // an A primitive runs counter-clockwise from a0 to a1; the polyline may run either way
      let sweep = (p.a1 - p.a0 + TAU) % TAU || TAU;
      const ccw = (a.b || 0) > 0;
      const k = Math.max(2, Math.ceil(sweep / (Math.PI / 18)));
      for (let j = 0; j <= k; j++) {
        const t = j / k, ang = ccw ? p.a0 + sweep * t : p.a1 - sweep * t;
        const cx = Math.cos(ang), cy = Math.sin(ang);
        along.push([p.cx + p.r * cx, p.cy + p.r * cy, ccw ? -cx : cx, ccw ? -cy : cy, t]);
      }
    }
    const left = [], right = [];
    for (const [x, y, nx, ny, t] of along) {
      const h = (ws + (we - ws) * t) / 2;
      left.push(x + nx * h, y + ny * h);
      right.unshift(x - nx * h, y - ny * h);
    }
    const ring = [...left, ...right];
    ring.push(ring[0], ring[1]);
    loops.push(ring);
  }
  return { loops, plain };
}