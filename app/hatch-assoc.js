/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hatch-assoc.js — a hatch that stays with its boundary (0.9 PLAN2D.1, asked in Discord: "when moving the boundary box the hatch
 * will move with it"). DOM-free.
 *
 * A hatch made by HATCH remembers what bounds it. Each boundary object carries a token (extended data CADCRAFT_HSRC, [[1000,
 * token]]) and the hatch lists them (CADCRAFT_HATCH, JSON { o: tokens of closed objects, p: [{ s: [x, y] seed, t: tokens }] }),
 * so the link survives DWG and DXF, where object ids don't. The link only acts while the hatch's `assoc` is on.
 *
 *   Boundary moved, turned or scaled as a whole → the hatch and its pattern go with it.
 *   Boundary reshaped (a grip) → the hatch is worked out again from the same objects.
 *   Hatch moved, turned or scaled on its own → its boundary comes too, like a filled shape in a drawing program.
 *   Boundary that no longer closes, or a hatch reshaped by hand → the link ends and doc.note says so; nothing is lost.
 *   A copy of the hatch with its boundary has its own link; a copy of only one of them has none.
 *
 *   linkHatch(doc, hatch, picks) · unlinkHatch(e) · isLinked(e) · sourcesOf(ents, loops, blocks) · installHatchHook(Doc)
 */
import { t } from './i18n.js';
import { prims, txEntity } from './geom.js';
import { boundaryAt, loopsOf } from './hatch.js';

export const SRC = 'CADCRAFT_HSRC', LINK = 'CADCRAFT_HATCH';
const CHUNK = 200;
const tokenOf = (e) => { const x = e?.xd?.[SRC]; return Array.isArray(x) && x[0] ? String(x[0][1]) : null; };
const newToken = () => 'h' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-3);
const withXd = (e, app, rows) => { const xd = { ...(e.xd || {}) }; if (rows) xd[app] = rows; else delete xd[app]; const o = { ...e }; if (Object.keys(xd).length) o.xd = xd; else delete o.xd; return o; };

export function linkOf(e) {
  const x = e?.type === 'hatch' ? e.xd?.[LINK] : null;
  if (!Array.isArray(x)) return null;
  try {
    const o = JSON.parse(x.map((r) => String(r[1])).join(''));
    const toks = (a) => (Array.isArray(a) ? a.filter((s) => typeof s === 'string').slice(0, 5000) : []);
    return { o: toks(o.o), p: (Array.isArray(o.p) ? o.p : []).filter((q) => Array.isArray(q?.s) && q.s.every(Number.isFinite)).map((q) => ({ s: q.s, t: toks(q.t) })) };
  } catch { return null; }
}
const setLink = (e, l) => {
  if (!l) return withXd(e, LINK, null);
  const text = JSON.stringify(l), rows = [];
  for (let i = 0; i < text.length; i += CHUNK) rows.push([1000, text.slice(i, i + CHUNK)]);
  return withXd(e, LINK, rows);
};
const allTokens = (l) => [...l.o, ...l.p.flatMap((q) => q.t)];
export const isLinked = (e) => !!e?.assoc && !!linkOf(e);
export const unlinkHatch = (e) => { const o = setLink(e, null); delete o.assoc; return o; };

/** Which objects a picked loop runs along: each loop corner lies on one of them. */
export function sourcesOf(ents, loops, blocks = null) {
  const out = new Set(), tol = 1e-6;
  const onPrim = (p, x, y) => {
    if (p.k === 'L') { const dx = p.x2 - p.x1, dy = p.y2 - p.y1, L = dx * dx + dy * dy; if (L < 1e-18) return false; const s = ((x - p.x1) * dx + (y - p.y1) * dy) / L; return s >= -1e-6 && s <= 1 + 1e-6 && Math.hypot(p.x1 + dx * s - x, p.y1 + dy * s - y) <= tol * Math.max(1, Math.sqrt(L)); }
    return Math.abs(Math.hypot(x - p.cx, y - p.cy) - p.r) <= tol * Math.max(1, p.r) * 100;
  };
  const scan = ents.filter((e) => e.type !== 'hatch' && e.type !== 'insert' && e.type !== 'text').map((e) => ({ e, ps: prims(e, blocks) }));
  for (const l of loops) for (let i = 0; i + 1 < l.length; i += 2) for (const { e, ps } of scan) if (!out.has(e.id) && ps.some((p) => onPrim(p, l[i], l[i + 1]))) out.add(e.id);
  return [...out];
}

/**
 * Inside a change: tie a hatch just added to what bounds it. picks = [{ ids: closed objects } | { seed: {x, y}, ids: objects round it }].
 * → the hatch as linked, or as it was when nothing bounds it.
 */
export function linkHatch(doc, hatch, picks, map = doc.space) {
  const tok = (id) => {
    const e = map.get(id);
    if (!e) return null;
    const had = tokenOf(e);
    if (had) return had;
    const k = newToken();
    doc.update(id, withXd(e, SRC, [[1000, k]]), map);
    return k;
  };
  const l = { o: [], p: [] };
  for (const p of picks) {
    const toks = (p.ids || []).map(tok).filter(Boolean);
    if (!toks.length) continue;
    if (p.seed) l.p.push({ s: [p.seed.x, p.seed.y], t: toks }); else l.o.push(...toks);
  }
  if (!l.o.length && !l.p.length) return hatch;
  (doc.pending.freshLinks ??= new Set()).add(hatch.id);   // not a copy: hatchHook leaves it alone
  return doc.update(hatch.id, { ...setLink(hatch, l), assoc: true }, map);
}

const ptsOf = (e, blocks) => {
  const out = [];
  for (const p of prims(e, blocks)) {
    if (p.k === 'L') out.push([p.x1, p.y1], [p.x2, p.y2]);
    else out.push([p.cx, p.cy], [p.cx + p.r * Math.cos(p.a0), p.cy + p.r * Math.sin(p.a0)], [p.cx + p.r * Math.cos(p.a1), p.cy + p.r * Math.sin(p.a1)]);
  }
  return out;
};
const loopPts = (e) => e.loops.flatMap((l) => { const o = []; for (let i = 0; i + 1 < l.length; i += 2) o.push([l[i], l[i + 1]]); return o; });
/** The move / turn / uniform scale that takes one list of points to the other, as a matrix, or null. */
function similarityOf(p0, p1) {
  if (!p0.length || p0.length !== p1.length) return null;
  let far = 0, far2 = 0;
  for (let i = 1; i < p0.length; i++) { const d = Math.hypot(p0[i][0] - p0[0][0], p0[i][1] - p0[0][1]); if (d > far2) { far2 = d; far = i; } }
  let m;
  if (far2 < 1e-12) m = [1, 0, 0, 1, p1[0][0] - p0[0][0], p1[0][1] - p0[0][1]];
  else {
    const ax = p0[far][0] - p0[0][0], ay = p0[far][1] - p0[0][1], bx = p1[far][0] - p1[0][0], by = p1[far][1] - p1[0][1], k = ax * ax + ay * ay;
    const c = (bx * ax + by * ay) / k, s = (by * ax - bx * ay) / k;
    m = [c, s, -s, c, p1[0][0] - (c * p0[0][0] - s * p0[0][1]), p1[0][1] - (s * p0[0][0] + c * p0[0][1])];
  }
  const tol = 1e-6 * Math.max(1, far2);
  for (let i = 0; i < p0.length; i++) {
    if (Math.abs(m[0] * p0[i][0] + m[2] * p0[i][1] + m[4] - p1[i][0]) > tol || Math.abs(m[1] * p0[i][0] + m[3] * p0[i][1] + m[5] - p1[i][1]) > tol) return null;
  }
  return m;
}
const isIdentity = (m) => m && Math.abs(m[0] - 1) < 1e-12 && Math.abs(m[1]) < 1e-12 && Math.abs(m[4]) < 1e-9 && Math.abs(m[5]) < 1e-9;
const sameM = (a, b) => a.every((v, i) => Math.abs(v - b[i]) <= 1e-6 * Math.max(1, Math.abs(v)));

/** The hatch's loops worked out again from its objects, or null when they no longer bound anything. */
function loopsAgain(link, byToken, blocks) {
  const loops = [];
  for (const k of link.o) { const e = byToken.get(k); const l = e && loopsOf(e); if (!l) return null; loops.push(...l); }
  for (const q of link.p) {
    const ents = q.t.map((k) => byToken.get(k)).filter(Boolean);
    if (!ents.length) return null;
    const r = boundaryAt(ents, { x: q.s[0], y: q.s[1] }, blocks);
    if (r.error) return null;
    loops.push(...r.loops);
  }
  return loops.length ? loops : null;
}

export function hatchHook(doc, ops) {
  const seen = new Map();   // map → Map(id → first before)
  for (const op of ops) {
    if (!op.map || op.id === undefined) continue;
    const linked = (e) => e && (e.xd?.[SRC] || e.xd?.[LINK]);
    if (!linked(op.before) && !linked(op.after)) continue;
    let m = seen.get(op.map);
    if (!m) seen.set(op.map, m = new Map());
    if (!m.has(op.id)) m.set(op.id, op.before);
  }
  for (const [map, recs] of seen) syncMap(doc, map, recs);
}

function syncMap(doc, map, recs) {
  // copies: a hatch and its boundary copied together get a link of their own; a copy of just one of them has none
  const fresh = doc.pending?.freshLinks;
  const added = [...recs].filter(([id, b]) => b === null && map.get(id) && !fresh?.has(id)).map(([id]) => map.get(id));
  if (added.length) {
    const hatches = added.filter((e) => linkOf(e)), renames = new Map();
    const addedTok = new Set(added.map(tokenOf).filter(Boolean));
    for (const h of hatches) {
      const l = linkOf(h);
      if (!allTokens(l).every((k) => addedTok.has(k))) { doc.update(h.id, unlinkHatch(h), map); continue; }
      const swap = (k) => { if (!renames.has(k)) renames.set(k, newToken()); return renames.get(k); };
      doc.update(h.id, setLink(h, { o: l.o.map(swap), p: l.p.map((q) => ({ s: q.s, t: q.t.map(swap) })) }), map);
    }
    for (const e of added) {
      const k = tokenOf(e);
      if (!k) continue;
      doc.update(e.id, withXd(e, SRC, renames.has(k) ? [[1000, renames.get(k)]] : null), map);
    }
  }
  const moved = [...recs].filter(([id, b]) => b !== null && map.get(id));
  const gone = [...recs].filter(([id, b]) => b !== null && !map.get(id));
  if (!moved.length && !gone.length) return;

  const byToken = new Map(), hatches = [];
  for (const e of map.values()) {
    const k = tokenOf(e);
    if (k) byToken.set(k, e);
    if (isLinked(e)) hatches.push(e);
  }
  const before = new Map(moved);
  const blocks = doc.blocks;
  const changedHatch = new Map();   // id → similarity | 'reshaped'
  for (const [id, b] of moved) {
    const e = map.get(id);
    if (e.type !== 'hatch' || !isLinked(e) || JSON.stringify(b.loops) === JSON.stringify(e.loops)) continue;
    const m = similarityOf(loopPts(b), loopPts(e));
    changedHatch.set(id, m || 'reshaped');
  }
  for (const h0 of hatches) {
    const h = map.get(h0.id);
    if (!h) continue;
    const l = linkOf(h), toks = allTokens(l), srcs = toks.map((k) => byToken.get(k));
    // a boundary object erased: the hatch stays where it is, with no link
    if (srcs.some((e) => !e) || gone.some(([, b]) => toks.includes(tokenOf(b)))) { doc.update(h.id, unlinkHatch(h), map); doc.note?.(t('plan2d.hatch.broke')); continue; }
    const hm = changedHatch.get(h.id);
    const srcMoved = srcs.filter((e) => before.has(e.id));
    const realMoved = srcMoved.filter((e) => JSON.stringify(ptsOf(before.get(e.id), blocks)) !== JSON.stringify(ptsOf(e, blocks)));
    if (hm === 'reshaped') { doc.update(h.id, unlinkHatch(h), map); doc.note?.(t('plan2d.hatch.broke')); continue; }
    if (hm && !realMoved.length) {
      // the hatch moved alone: its boundary comes along (when it can)
      if (!srcs.every((e) => doc.editable(e))) { doc.update(h.id, unlinkHatch(h), map); doc.note?.(t('plan2d.hatch.broke')); continue; }
      for (const e of srcs) doc.update(e.id, txEntity(e, hm), map);
      for (const q of l.p) { const x = q.s[0], y = q.s[1]; q.s = [hm[0] * x + hm[2] * y + hm[4], hm[1] * x + hm[3] * y + hm[5]]; }
      if (l.p.length) doc.update(h.id, setLink(map.get(h.id), l), map);
      continue;
    }
    if (!realMoved.length) continue;
    // the boundary changed. All of it by one move, turn or scale: the hatch goes the same way.
    let m = null;
    if (realMoved.length === srcs.length) {
      for (const e of srcs) {
        const k = similarityOf(ptsOf(before.get(e.id), blocks), ptsOf(e, blocks));
        if (!k || (m && !sameM(m, k))) { m = null; break; }
        m = k;
      }
    }
    if (m && !isIdentity(m)) {
      if (hm) { if (l.p.length) { for (const q of l.p) { const x = q.s[0], y = q.s[1]; q.s = [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]; } doc.update(h.id, setLink(h, l), map); } continue; }   // moved together
      const next = txEntity(h, m);
      for (const q of l.p) { const x = q.s[0], y = q.s[1]; q.s = [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]; }
      doc.update(h.id, setLink(next, l), map);
      continue;
    }
    // reshaped: work it out again from the same objects
    const loops = loopsAgain(l, byToken, blocks);
    if (!loops) { doc.update(h.id, unlinkHatch(h), map); doc.note?.(t('plan2d.hatch.broke')); continue; }
    doc.update(h.id, { ...h, loops }, map);
  }
}
export function installHatchHook(DocClass) { DocClass.editHooks.add(hatchHook); return () => DocClass.editHooks.delete(hatchHook); }
