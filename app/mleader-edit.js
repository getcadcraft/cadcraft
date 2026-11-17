/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mleader-edit.js — multileader editing (1.0 ORS.15, builder "dims"): the engine behind MLEADEREDIT, MLEADERALIGN,
 * MLEADERCOLLECT and block content. No DOM: bin/test-ors-dims.mjs runs it in Node. The object itself draws in leader.js
 * (`more` = extra leader lines, `blk` = block content).
 *
 *   lineCount(e) · lineAt(e, point) → index                         0 = the first leader line, i ≥ 1 = more[i − 1]
 *   addLeader(e, tip) → multileader                                 one more leader line from `tip` to the landing
 *   removeLeader(e, index) → multileader | null                     null: it is the only one left
 *   blockContent(doc, name, e, scale = 1) → blk | null              a block as content, set just past the landing, centred on it
 *   withBlock(e, blk) · withText(e, s)                              switch content
 *   alignPlan(list, ref, { mode, angle, p1, p2, spacing }) → [{ id, entity }]
 *        'current' line the others' landings up on the line through ref's along `angle`; 'spacing' the same at equal
 *        steps from ref; 'distribute' evenly between p1 and p2
 *   collectPlan(doc, list, { at, flow: 'h' | 'v', gap }) → { entity, removeIds, block? } | { error }
 *        block content: one multileader whose content is a new block holding every block in a row or a column (as the routine
 *        people know does); text content: the notes one under the other. Keeps the first one's leader lines.
 */
import { dist, entityBounds, validBounds } from './geom.js';
import { leaderLines, leaderStyle } from './leader.js';

const P = (p) => ({ x: p.x, y: p.y });
export const isMleader = (e) => !!e && e.type === 'mleader' && Array.isArray(e.pts) && e.pts.length >= 2;
export const lineCount = (e) => leaderLines(e).length;
export const MAX_LEADERS = 64;

const segDist = (a, b, p) => {
  const dx = b.x - a.x, dy = b.y - a.y, L = dx * dx + dy * dy;
  const t = L < 1e-24 ? 0 : Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / L));
  return Math.hypot(a.x + dx * t - p.x, a.y + dy * t - p.y);
};
/** The leader line nearest a point (its tip counts most: lines share the landing end). */
export function lineAt(e, p) {
  let best = 0, bd = Infinity;
  leaderLines(e).forEach((l, i) => {
    let d = Infinity;
    for (let k = 0; k + 1 < l.length; k++) d = Math.min(d, segDist(l[k], l[k + 1], p));
    d = Math.min(d, dist(l[0], p)) + 1e-9 * dist(l[0], p);
    if (d < bd - 1e-12 || (Math.abs(d - bd) <= 1e-12 && dist(l[0], p) < dist(leaderLines(e)[best][0], p))) { bd = d; best = i; }
  });
  return best;
}
export function addLeader(e, tip) {
  if (!isMleader(e) || lineCount(e) >= MAX_LEADERS) return null;
  const last = e.pts[e.pts.length - 1];
  if (dist(tip, last) < 1e-12) return null;
  return { ...e, more: [...(Array.isArray(e.more) ? e.more : []), [P(tip)]] };
}
export function removeLeader(e, index) {
  if (!isMleader(e)) return null;
  const more = Array.isArray(e.more) ? e.more : [];
  if (!more.length || index < 0 || index > more.length) return null;
  const o = { ...e };
  if (index === 0) { o.pts = [...more[0].map(P), P(e.pts[e.pts.length - 1])]; o.more = more.slice(1); } else o.more = more.filter((_, i) => i !== index - 1);
  if (!o.more.length) delete o.more;
  return o;
}

/** A block as a multileader's content: `gap` past the landing's end, centred on the landing's height. */
export function blockContent(doc, name, e, scale = 1) {
  const key = [...doc.blocks.keys()].find((k) => k.toLowerCase() === String(name ?? '').trim().toLowerCase());
  const blk = key && doc.blocks.get(key);
  if (!blk || !(scale > 0)) return null;
  const b = entityBounds({ type: 'insert', block: key, x: 0, y: 0, sx: scale, sy: scale, rot: 0 }, doc.blocks);
  const st = leaderStyle(e), dir = e.dir === -1 ? -1 : 1;
  if (!validBounds(b)) return { name: key, sx: scale, dx: st.gap, dy: 0 };
  return { name: key, sx: scale, dx: dir === 1 ? st.gap - b.minX : st.gap + b.maxX, dy: -(b.minY + b.maxY) / 2 };
}
export function withBlock(e, blk) { const o = { ...e, blk, s: '' }; delete o.ww; delete o.ls; return o; }
export function withText(e, s) { const o = { ...e, s: String(s ?? '') }; delete o.blk; return o; }

// ---------------------------------------------------------------- MLEADERALIGN

const lastOf = (e) => e.pts[e.pts.length - 1];
const moveLanding = (e, to) => ({ ...e, pts: e.pts.map((p, i) => (i === e.pts.length - 1 ? P(to) : P(p))) });

export function alignPlan(list, ref, { mode = 'current', angle = Math.PI / 2, p1 = null, p2 = null, spacing = 0 } = {}) {
  const ms = list.filter(isMleader);
  if (mode === 'distribute') {
    if (!p1 || !p2 || ms.length < 2 || dist(p1, p2) < 1e-12) return [];
    const u = { x: (p2.x - p1.x) / dist(p1, p2), y: (p2.y - p1.y) / dist(p1, p2) };
    const sorted = [...ms].sort((a, b) => (lastOf(a).x * u.x + lastOf(a).y * u.y) - (lastOf(b).x * u.x + lastOf(b).y * u.y));
    return sorted.map((e, i) => ({ id: e.id, entity: moveLanding(e, { x: p1.x + (p2.x - p1.x) * i / (sorted.length - 1), y: p1.y + (p2.y - p1.y) * i / (sorted.length - 1) }) }));
  }
  if (!isMleader(ref)) return [];
  const o = lastOf(ref), u = { x: Math.cos(angle), y: Math.sin(angle) };
  const tOf = (e) => (lastOf(e).x - o.x) * u.x + (lastOf(e).y - o.y) * u.y;
  const others = ms.filter((e) => e.id !== ref.id);
  if (mode === 'spacing') {
    if (!(spacing > 0)) return [];
    const out = [];
    for (const sg of [1, -1]) {
      others.filter((e) => (sg > 0 ? tOf(e) >= 0 : tOf(e) < 0)).sort((a, b) => Math.abs(tOf(a)) - Math.abs(tOf(b)))
        .forEach((e, i) => out.push({ id: e.id, entity: moveLanding(e, { x: o.x + u.x * sg * spacing * (i + 1), y: o.y + u.y * sg * spacing * (i + 1) }) }));
    }
    return out;
  }
  return others.map((e) => ({ id: e.id, entity: moveLanding(e, { x: o.x + u.x * tOf(e), y: o.y + u.y * tOf(e) }) }));
}

// ---------------------------------------------------------------- MLEADERCOLLECT

const freeBlockName = (doc) => { for (let n = 1; ; n++) { const name = 'MLCollect' + n; if (![...doc.blocks.keys()].some((k) => k.toLowerCase() === name.toLowerCase())) return name; } };

export function collectPlan(doc, list, { at = null, flow = 'h', gap = null } = {}) {
  const ms = list.filter(isMleader);
  if (ms.length < 2) return { error: 'few' };
  const blocks = ms.filter((e) => e.blk), texts = ms.filter((e) => !e.blk && String(e.s ?? '').trim());
  if (blocks.length && texts.length) return { error: 'mixed' };
  if (!blocks.length && !texts.length) return { error: 'empty' };
  const first = ms[0], st = leaderStyle(first);
  let ent = at ? moveLanding(first, at) : { ...first };
  const removeIds = ms.slice(1).map((e) => e.id);
  if (texts.length) return { entity: withText(ent, texts.map((e) => String(e.s)).join('\n')), removeIds };
  // a new block: every content block side by side (or one under the other), each on its own extents
  const g = gap ?? st.gap, parts = [];
  let cur = 0;
  for (const e of blocks) {
    const key = [...doc.blocks.keys()].find((k) => k.toLowerCase() === e.blk.name.toLowerCase());
    if (!key) return { error: 'missing', name: e.blk.name };
    const sx = e.blk.sx > 0 ? e.blk.sx : 1;
    const b = entityBounds({ type: 'insert', block: key, x: 0, y: 0, sx, sy: sx, rot: 0 }, doc.blocks);
    const bb = validBounds(b) ? b : { minX: 0, minY: 0, maxX: 0, maxY: 0 };
    const ins = flow === 'v' ? { x: -(bb.minX + bb.maxX) / 2, y: cur - bb.maxY } : { x: cur - bb.minX, y: -(bb.minY + bb.maxY) / 2 };
    parts.push({ type: 'insert', layer: '0', color: 0, block: key, x: ins.x, y: ins.y, sx, sy: sx, rot: 0, ...(e.blk.attrs && Object.keys(e.blk.attrs).length ? { attrs: { ...e.blk.attrs } } : {}) });
    cur += flow === 'v' ? -((bb.maxY - bb.minY) + g) : (bb.maxX - bb.minX) + g;
  }
  const name = freeBlockName(doc);
  const block = { name, base: { x: 0, y: 0 }, entities: parts };
  // where the new block goes: as blockContent would put it (its extents are known from the parts just laid out)
  const ext = flow === 'v' ? null : { w: cur - g };
  const dir = ent.dir === -1 ? -1 : 1;
  let blk;
  if (flow === 'v') { const widths = parts.map((p) => { const b = entityBounds(p, doc.blocks); return validBounds(b) ? [b.minX, b.maxX, b.minY, b.maxY] : [0, 0, 0, 0]; }); const minX = Math.min(...widths.map((w) => w[0])), maxX = Math.max(...widths.map((w) => w[1])), minY = Math.min(...widths.map((w) => w[2])), maxY = Math.max(...widths.map((w) => w[3])); blk = { name, sx: 1, dx: dir === 1 ? st.gap - minX : st.gap + maxX, dy: -(minY + maxY) / 2 }; }
  else blk = { name, sx: 1, dx: dir === 1 ? st.gap : st.gap + ext.w, dy: 0 };
  ent = withBlock(ent, blk);
  return { entity: ent, removeIds, block };
}
