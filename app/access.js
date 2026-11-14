/* SPDX-License-Identifier: Apache-2.0 */
/**
 * access.js — drafting without sight (0.8 round 2, EG.52): the drawing, said in words. No DOM, no speech, no sound:
 * bin/test-access.mjs runs it in Node. access-ui.js (announcer, keyboard cursor),
 * and the shell's app-access.js (live regions, sounds, voice) sit on top of it.
 *
 * Every function takes a context { doc, fmt, t } — fmt(v) is the drawing's own length format (cadcraft.js fmtL), t the
 * i18n lookup. Nothing here changes the drawing. Text found in a drawing (a note, a block name) is read out as content,
 * between quotation marks, never taken as an instruction (rule 36).
 */
import { t as defaultT } from './i18n.js';
import { formatLength } from './units.js';
import { entityBounds, distToEntity, snapPoints, grips, normAngle } from './geom.js';

const ctxOf = (c) => ({ doc: c.doc, fmt: c.fmt || ((v) => formatLength(v, { lunits: c.doc.meta?.lunits ?? 2, prec: c.doc.meta?.luprec ?? null })), t: c.t || defaultT });
const R2D = 180 / Math.PI;
const num = (v) => (Number.isInteger(v) ? String(v) : String(Math.round(v * 100) / 100));
const deg = (rad) => num(Math.round(normAngle(rad) * R2D * 100) / 100);

/** Words for the kind of an object ("line", "circle", "dimension"); a type with no word is said as it is named. */
export function kindName(e, c) {
  const { t } = ctxOf(c);
  const key = 'access.kind.' + (e.type === 'insert' && e.block ? 'insert' : e.type);
  const w = t(key);
  return w === key ? e.type : w;
}

/** A point as "x 100, y 250". */
export function sayPoint(p, c) {
  const { fmt, t } = ctxOf(c);
  return t('access.point', { x: fmt(p.x), y: fmt(p.y) });
}

/** The eight directions, as words: from a to b, in the drawing's own axes (right = +x, up = +y). Index 0..7 counter-clockwise from right. */
export function directionOf(a, b) {
  const ang = normAngle(Math.atan2(b.y - a.y, b.x - a.x));
  return Math.round(ang / (Math.PI / 4)) % 8;
}
export function sayDirection(a, b, c) {
  const { t } = ctxOf(c);
  return t('access.dir.' + directionOf(a, b));
}

/** How far and which way: "2400 to the right and 300 up" for a move; a plain distance and direction when both parts are real. */
export function sayMove(a, b, c) {
  const { fmt, t } = ctxOf(c);
  const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
  if (d < 1e-9) return t('access.move.none');
  return t('access.move', { d: fmt(d), dir: sayDirection(a, b, c), angle: deg(Math.atan2(dy, dx)), dx: fmt(Math.abs(dx)), dy: fmt(Math.abs(dy)), sx: t(dx >= 0 ? 'access.right' : 'access.left'), sy: t(dy >= 0 ? 'access.up' : 'access.down') });
}

/** The length along an object, when it has one. */
export function lengthOf(e) {
  switch (e.type) {
    case 'line': return Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
    case 'circle': return 2 * Math.PI * e.r;
    case 'arc': { let s = normAngle(e.a1 - e.a0); if (s === 0) s = 2 * Math.PI; return s * e.r; }
    case 'poly': {
      let L = 0; const n = e.pts.length, m = e.closed ? n : n - 1;
      for (let i = 0; i < m; i++) { const p = e.pts[i], q = e.pts[(i + 1) % n]; L += Math.hypot(q.x - p.x, q.y - p.y); }   // bulges are counted straight
      return L;
    }
    default: return null;
  }
}

/** One object, in a sentence. */
export function describeEntity(e, cx) {
  const c = ctxOf(cx), { fmt, t } = c;
  const kind = kindName(e, cx), layer = e.layer ? t('access.on_layer', { layer: e.layer }) : '';
  const lead = t('access.entity', { kind, layer });
  switch (e.type) {
    case 'line': return t('access.line', { lead, len: fmt(lengthOf(e)), from: sayPoint({ x: e.x1, y: e.y1 }, c), to: sayPoint({ x: e.x2, y: e.y2 }, c), angle: deg(Math.atan2(e.y2 - e.y1, e.x2 - e.x1)) });
    case 'circle': return t('access.circle', { lead, r: fmt(e.r), at: sayPoint({ x: e.cx, y: e.cy }, c) });
    case 'arc': return t('access.arc', { lead, r: fmt(e.r), len: fmt(lengthOf(e)), at: sayPoint({ x: e.cx, y: e.cy }, c), a0: deg(e.a0), a1: deg(e.a1) });
    case 'poly': return t(e.closed ? 'access.poly.closed' : 'access.poly.open', { lead, n: e.pts.length, len: fmt(lengthOf(e)) });
    case 'text': return t('access.text', { lead, s: String(e.s ?? '').slice(0, 120), at: sayPoint(e, c) });
    case 'insert': return t('access.insert', { lead, block: e.block || '', at: sayPoint(e, c) });
    case 'dim': return t('access.dim', { lead, text: e.text || '' });
    case 'point': return t('access.pointobj', { lead, at: sayPoint(e, c) });
    default: {
      const b = entityBounds(e, c.doc.blocks);
      return b ? t('access.other', { lead, w: fmt(b.maxX - b.minX), h: fmt(b.maxY - b.minY) }) : lead;
    }
  }
}

/** The whole drawing: how much, of what, how big, what is chosen. */
export function describeDrawing(cx, { selection = null } = {}) {
  const c = ctxOf(cx), { doc, fmt, t } = c;
  const list = doc.all().filter((e) => doc.visible(e));
  if (!list.length) return t('access.drawing.empty');
  const byType = new Map();
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const e of list) {
    byType.set(e.type, (byType.get(e.type) || 0) + 1);
    const b = entityBounds(e, doc.blocks);
    if (b && [b.minX, b.minY, b.maxX, b.maxY].every(Number.isFinite)) { minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY); maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY); }
  }
  const kinds = [...byType].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)).slice(0, 6)
    .map(([type, n]) => t('access.count', { n, kind: kindName({ type }, c) })).join(', ');
  const layers = new Set(list.map((e) => e.layer)).size;
  const parts = [t('access.drawing', { n: list.length, kinds, layers })];
  if (Number.isFinite(minX)) parts.push(t('access.extents', { w: fmt(maxX - minX), h: fmt(maxY - minY), x0: fmt(minX), y0: fmt(minY), x1: fmt(maxX), y1: fmt(maxY) }));
  if (selection && selection.size) parts.push(t('access.selected', { n: selection.size }));
  return parts.join(' ');
}

/** What lies within `radius` of a point, nearest first: [{ id, e, d, dir }]. */
export function nearObjects(cx, p, { radius, max = 6 } = {}) {
  const { doc } = ctxOf(cx), out = [];
  for (const e of doc.all()) {
    if (!doc.visible(e)) continue;
    const d = distToEntity(e, p, doc.blocks);
    if (!(d <= radius)) continue;
    out.push({ id: e.id, e, d });
  }
  out.sort((a, b) => a.d - b.d || a.id - b.id);
  return out.slice(0, max);
}

/** "Near the cursor": the cursor's place, then each object close by with its distance and the side it is on. */
export function describeNear(cx, p, opts = {}) {
  const c = ctxOf(cx), { fmt, t } = c;
  const near = nearObjects(c, p, opts);
  const head = sayPoint(p, c);
  if (!near.length) return t('access.near.none', { at: head, r: fmt(opts.radius) });
  const items = near.map((o) => {
    const k = kindName(o.e, c);
    if (o.d < 1e-6) return t('access.near.on', { kind: k, id: o.id });
    const q = closestOn(o.e, p, c);
    return t('access.near.item', { kind: k, id: o.id, d: fmt(o.d), dir: q ? sayDirection(p, q, c) : '' });
  });
  return t('access.near', { at: head, items: items.join('; ') });
}

function closestOn(e, p, cx) {
  const { doc } = ctxOf(cx), r = distToEntity(e, p, doc.blocks);
  if (!(r > 0)) return p;
  const kinds = new Set(['near']), s = snapPoints(e, p, r + 1e-6, kinds, doc.blocks, null).find((x) => x.kind === 'near');
  return s ? { x: s.x, y: s.y } : null;
}

/** A snap, said when the cursor lands on it: "Endpoint of line 4 at x 0, y 0". */
export function describeSnap(snap, cx) {
  const c = ctxOf(cx), { doc, t } = c;
  if (!snap) return '';
  const word = t('access.snap.' + snap.kind);
  let best = null;
  for (const e of doc.all()) {
    if (!doc.visible(e)) continue;
    const d = distToEntity(e, snap, doc.blocks);
    if (d < 1e-6 && (!best || e.id > best.id)) best = e;
    else if (!best && d < 1e-3) best = e;
  }
  return best ? t('access.snap.of', { snap: word, kind: kindName(best, c), id: best.id, at: sayPoint(snap, c) }) : t('access.snap.at', { snap: word, at: sayPoint(snap, c) });
}

/** A grip, said when the cursor is on it. */
export function describeGrip(g, cx) {
  const c = ctxOf(cx), { doc, t } = c;
  const e = g.id != null ? doc.get(g.id) : null;
  const key = String(g.key || '');
  const word = t('access.grip.' + (['p1', 'p2'].includes(key) ? 'end' : key === 'mid' ? 'mid' : key === 'c' || key === 'p' ? 'center' : key === 'r' ? 'radius' : /^v\d+$/.test(key) ? 'vertex' : 'other'));
  return t('access.grip', { grip: word, kind: e ? kindName(e, c) : '', id: g.id ?? '', at: sayPoint(g, c) });
}

/** The snap points and grips near a point, nearest first, for stepping from one to the next with a key. [{ kind, x, y, d, id }] */
export function snapTargets(cx, p, { radius, kinds, max = 40 } = {}) {
  const { doc } = ctxOf(cx), out = [], seen = new Set();
  const ks = kinds || new Set(['end', 'mid', 'cen', 'quad', 'node', 'ins']);
  for (const e of doc.all()) {
    if (!doc.visible(e)) continue;
    const b = entityBounds(e, doc.blocks);
    if (!b || p.x < b.minX - radius || p.x > b.maxX + radius || p.y < b.minY - radius || p.y > b.maxY + radius) continue;
    for (const s of snapPoints(e, p, radius, ks, doc.blocks, null)) {
      const key = s.kind + ':' + Math.round(s.x * 1000) + ':' + Math.round(s.y * 1000);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ ...s, id: e.id, d: Math.hypot(s.x - p.x, s.y - p.y) });
    }
  }
  out.sort((a, b) => a.d - b.d || a.id - b.id || (a.kind < b.kind ? -1 : 1));
  return out.slice(0, max);
}

/** The grips of the selected objects as targets too. */
export function gripTargets(cx, selection) {
  const { doc } = ctxOf(cx), out = [];
  for (const id of selection || []) { const e = doc.get(id); if (e) for (const g of grips(e)) out.push({ ...g, id }); }
  return out;
}

/** The measure of a move or a pair of points: said back after a command takes a point ("length 3000, 30 degrees"). */
export function sayBetween(a, b, cx) {
  const { fmt, t } = ctxOf(cx);
  const d = Math.hypot(b.x - a.x, b.y - a.y);
  return t('access.between', { d: fmt(d), angle: deg(Math.atan2(b.y - a.y, b.x - a.x)), dx: fmt(b.x - a.x), dy: fmt(b.y - a.y) });
}

/**
 * Keep a spoken line short and a repeat from being said twice: returns the text to say, or '' (same words as the last
 * time, within `quietMs`). `state` is {text, at} kept by the caller.
 */
export function dedupe(state, text, now, quietMs = 800) {
  if (!text) return '';
  if (state.text === text && now - state.at < quietMs) return '';
  state.text = text; state.at = now;
  return text;
}
