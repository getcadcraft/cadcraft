/* SPDX-License-Identifier: Apache-2.0 */
/**
 * leader.js — multileaders (MLEADER; 0.4 C32; owner: cad-draw). No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 * A multileader is ONE entity that draws itself, like a dimension:
 *   { type: 'mleader', pts: [{x, y}, …],   the leader line: pts[0] is the arrowhead's tip, the last point the landing's start
 *     dir: 1 | -1,                         the landing (and the text) go right (1) or left (-1) from the last point
 *     s, h, ww?, ls?,                      the text: words, height, wrap width, line spacing (as paragraph text)
 *     st: { asz, dogleg, gap },            arrow size, landing length, gap between the landing and the text
 *     more?: [[{x, y}, …], …],             1.0 ORS.15: more leader lines; each runs from its own arrowhead tip (first point) through
 *                                          its bends to the same landing start (the last point of pts, which they do not repeat)
 *     blk?: { name, sx, dx, dy, attrs? } } 1.0 ORS.15: a block instead of text: the block `name` at scale sx, its insertion point
 *                                          dx (along the landing's direction) and dy from the landing's end; attrs = its
 *                                          attribute values
 * leaderGeometry(e) → the plain entities it draws: the leader (an open polyline with its landing), the arrowhead (a solid
 * hatch) and the text (left- or right-aligned on the landing, its first line centred on it) — on layer 0, colour by
 * block, so they take the multileader's own (walk.js expands it the way it expands a dimension).
 */

export const MLEADER_DEFAULTS = Object.freeze({ asz: 2.5, dogleg: 2.5, gap: 1 });

/** The style with every size, and the text height (falls back to the arrow size). */
export const leaderStyle = (e) => ({ ...MLEADER_DEFAULTS, ...(e.st || {}) });

/** Where the landing ends and the text starts. */
export function landing(e) {
  const st = leaderStyle(e), last = e.pts[e.pts.length - 1], dir = e.dir === -1 ? -1 : 1;
  const end = { x: last.x + dir * st.dogleg, y: last.y };
  return { start: last, end, text: { x: end.x + dir * st.gap, y: end.y } };
}

/** ORS.15: MLEADER's Block option asks through these (mleader-edit-cmd.js sets them when it loads; commands.js cannot import it). */
export const mleaderHooks = { ask: null, blockFor: null };

/** Every leader line of a multileader as its own point list, each ending at the landing's start (index 0 = pts itself). */
export function leaderLines(e) {
  const last = e.pts[e.pts.length - 1];
  const more = Array.isArray(e.more) ? e.more.filter((l) => Array.isArray(l) && l.length) : [];
  return [e.pts, ...more.map((l) => [...l, last])];
}

/** Where a multileader's block content is inserted (its `blk`), or null. */
export function blockPlace(e) {
  const b = e.blk;
  if (!b || typeof b.name !== 'string' || !b.name) return null;
  const L = landing(e), dir = e.dir === -1 ? -1 : 1, sx = b.sx > 0 ? b.sx : 1;
  return { x: L.end.x + dir * (Number.isFinite(b.dx) ? b.dx : 0), y: L.end.y + (Number.isFinite(b.dy) ? b.dy : 0), sx };
}

export function leaderGeometry(e) {
  if (!e.pts || e.pts.length < 2) return [];
  const st = leaderStyle(e), dir = e.dir === -1 ? -1 : 1;
  const L = landing(e);
  const base = { layer: '0', color: 0 };
  const out = [];
  leaderLines(e).forEach((line, i) => {
    if (line.length < 2) return;
    // the first line carries the landing; the others join it where the landing starts
    out.push({ ...base, type: 'poly', closed: false, pts: [...line, ...(i === 0 && st.dogleg > 0 ? [L.end] : [])].map((p) => ({ x: p.x, y: p.y, b: 0 })) });
    // arrowhead: a solid triangle at the tip, pointing back along the first segment
    const tip = line[0], nxt = line[1], dx = tip.x - nxt.x, dy = tip.y - nxt.y, len = Math.hypot(dx, dy);
    if (len > 1e-12 && st.asz > 0) {
      const ux = dx / len, uy = dy / len, a = st.asz, w = a / 6;   // AutoCAD's closed filled arrow: length a, half width a/6
      const bx = tip.x - ux * a, by = tip.y - uy * a;
      out.push({ ...base, type: 'hatch', solid: true, loops: [[tip.x, tip.y, bx - uy * w, by + ux * w, bx + uy * w, by - ux * w]] });
    }
  });
  const bp = blockPlace(e);
  if (bp) {   // ORS.15: block content (walk.js and geom.js expand the reference like any other)
    out.push({ ...base, type: 'insert', block: e.blk.name, x: bp.x, y: bp.y, sx: bp.sx, sy: bp.sx, rot: 0, ...(e.blk.attrs && Object.keys(e.blk.attrs).length ? { attrs: e.blk.attrs } : {}) });
  } else if (String(e.s ?? '').trim()) {
    const h = e.h > 0 ? e.h : st.asz;
    // the first line's middle on the landing: hang the text from its top, half a capital height above
    out.push({ ...base, type: 'text', x: L.text.x, y: L.text.y + h / 2, h, rot: 0, s: String(e.s), ha: dir === 1 ? 'left' : 'right', va: 'top', wf: 1, ...(e.ww > 0 ? { ww: e.ww } : {}), ...(e.ls && e.ls !== 1 ? { ls: e.ls } : {}) });
  }
  return out;
}

/** ORS.15, for geom.js txEntity: the extra leader lines and the block content through a transform (P maps a point, k = its scale). */
export function leaderExtrasTx(e, P, k) {
  const o = {};
  if (Array.isArray(e.more)) o.more = e.more.map((l) => l.map((p) => P(p.x, p.y)));
  if (e.blk) o.blk = { ...e.blk, sx: (e.blk.sx > 0 ? e.blk.sx : 1) * k, dx: (e.blk.dx || 0) * k, dy: (e.blk.dy || 0) * k };
  return o;
}
/** ORS.15, for geom.js stretchEntity: a multileader with extra leader lines, its points inside the window moved. */
export function leaderStretchMore(e, inside, mv) {
  const hit = e.pts.map((p) => inside(p)), hm = e.more.map((l) => l.map((p) => inside(p)));
  if (!hit.some(Boolean) && !hm.some((l) => l.some(Boolean))) return null;
  return { ...e, pts: e.pts.map((p, i) => (hit[i] ? mv(p) : p)), more: e.more.map((l, i) => l.map((p, j) => (hm[i][j] ? mv(p) : p))) };
}
/** ORS.15: grips of the extra leader lines (key 'm<line>_<point>'); geom.js gripHooks calls these for multileaders that have any. */
export const leaderGripHook = {
  grips(e) {
    if (e?.type !== 'mleader' || !Array.isArray(e.more) || !e.more.length) return null;
    return [...e.pts.map((p, i) => ({ x: p.x, y: p.y, key: 'v' + i })), ...e.more.flatMap((l, i) => l.map((p, j) => ({ x: p.x, y: p.y, key: 'm' + i + '_' + j })))];
  },
  gripMove(e, key, to) {
    if (e?.type !== 'mleader' || !/^m\d+_\d+$/.test(key) || !Array.isArray(e.more)) return null;
    const [i, j] = key.slice(1).split('_').map(Number);
    return { ...e, more: e.more.map((l, a) => (a === i ? l.map((p, b) => (b === j ? { x: to.x, y: to.y } : p)) : l)) };
  },
};
