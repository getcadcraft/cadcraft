/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dims-assoc.js — dimensions tied to the objects they measure (1.0 ORS.6, builder "dims": DIMREASSOCIATE, DIMDISASSOCIATE),
 * and DIMBREAK's automatic gaps kept true. No DOM.
 *
 * DIMREASSOCIATE ties a dimension's points to features of objects: an end or the middle of a line, a polyline corner, the
 * centre or an end of an arc, a circle's centre, a point; a radius, diameter, jogged radius or arc length dimension to a whole
 * circle or arc. The object carries a token (extended data CADCRAFT_DSRC, like a hatch's boundary in hatch-assoc.js) and the
 * dimension lists { point key: { t: token, g: feature } } in `assoc` (kept in the file with its other extras, dims-file.js),
 * so the tie survives DWG and DXF, where object ids do not.
 *
 *   The object moves or is reshaped → the dimension's tied points follow in the same undo step and it measures again.
 *   The dimension's tied point is moved on its own → that tie ends (the dimension stays where it was put).
 *   The object is erased → the tie ends. A copy of the dimension with its object has its own tie.
 *
 * The same hook works out again the automatic gaps (`brk.auto`) of dimensions whenever objects in their space change.
 *
 *   hostAt(doc, point, exceptId) → { id, g } | null     the feature of an object at a (snapped) point
 *   featurePoint(e, g) → {x, y} | null
 *   reassociate(doc, dimId, picks) → { ok, links }       picks = { p1|p2|c: { id, g } } or { o: { id } }; one undo step
 *   disassociate(doc, ids) → count · linkCount(dim) · installDimAssoc(Doc)
 */
import { dist, polar, angleOf, normAngle, entityBounds, validBounds } from './geom.js';
import { breakCuts } from './dims-ors.js';

export const DSRC = 'CADCRAFT_DSRC';
const tokenOf = (e) => { const x = e?.xd?.[DSRC]; return Array.isArray(x) && x[0] ? String(x[0][1]) : null; };
const newToken = () => 'd' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-3);
const withToken = (e, tok) => ({ ...e, xd: { ...(e.xd || {}), [DSRC]: [[1000, tok]] } });
const tolOf = (p) => 1e-6 * Math.max(1, Math.abs(p.x), Math.abs(p.y));
const same = (a, b) => !!a && !!b && dist(a, b) <= tolOf(a);
export const linkCount = (d) => (d && d.assoc && typeof d.assoc === 'object' ? Object.keys(d.assoc).length : 0);

/** The named features an object offers: [{ g, x, y }]. */
export function features(e) {
  if (!e) return [];
  switch (e.type) {
    case 'line': return [{ g: 'p1', x: e.x1, y: e.y1 }, { g: 'p2', x: e.x2, y: e.y2 }, { g: 'm', x: (e.x1 + e.x2) / 2, y: (e.y1 + e.y2) / 2 }];
    case 'circle': case 'ellipse': return [{ g: 'c', x: e.cx, y: e.cy }];
    case 'arc': {
      const c = { x: e.cx, y: e.cy }, sw = normAngle(e.a1 - e.a0);
      return [{ g: 'c', ...c }, { g: 'a0', ...polar(c, e.a0, e.r) }, { g: 'a1', ...polar(c, e.a1, e.r) }, { g: 'm', ...polar(c, e.a0 + sw / 2, e.r) }];
    }
    case 'poly': return e.pts.map((p, i) => ({ g: 'v' + i, x: p.x, y: p.y }));
    case 'point': case 'insert': case 'text': return [{ g: 'p', x: e.x, y: e.y }];
    default: return [];
  }
}
export const featurePoint = (e, g) => { const f = features(e).find((x) => x.g === g); return f ? { x: f.x, y: f.y } : null; };

/** The object feature at a point (the nearest one within a hair), dimensions and the excepted object aside. */
export function hostAt(doc, p, exceptId = null) {
  let best = null, bd = tolOf(p) * 10;
  for (const e of doc.entities.values()) {
    if (e.id === exceptId || e.type === 'dim' || e.type === 'mleader' || e.type === 'viewport' || !doc.visible(e)) continue;
    for (const f of features(e)) { const d = dist(f, p); if (d <= bd) { bd = d; best = { id: e.id, g: f.g }; } }
  }
  return best;
}

/** A radial dimension on its circle or arc: centre, the point on the curve at the angle it had, the text carried along. */
function onCurve(d, host) {
  const c = { x: host.cx, y: host.cy }, o = { ...d };
  const mv = (p) => ({ x: p.x + c.x - d.c.x, y: p.y + c.y - d.c.y });
  if (d.kind === 'arc') {
    if (host.type !== 'arc') return null;
    const k = dist(d.c, d.loc) / Math.max(dist(d.c, d.p1), 1e-12), sw = normAngle(host.a1 - host.a0);
    Object.assign(o, { c, p1: polar(c, host.a0, host.r), p2: polar(c, host.a1, host.r), loc: polar(c, host.a0 + sw / 2, host.r * k) });
  } else {
    const a = angleOf(d.c, d.p1);
    Object.assign(o, { c, p1: polar(c, a, host.r), loc: mv(d.loc) });
    if (d.kind === 'jogged' && d.p2) o.p2 = mv(d.p2);
  }
  delete o.block;
  return o;
}
const curveFits = (d, host) => same(d.c, { x: host.cx, y: host.cy }) && Math.abs(dist(d.c, d.p1) - host.r) <= tolOf(d.p1) && (d.kind !== 'arc' || (same(d.p1, polar({ x: host.cx, y: host.cy }, host.a0, host.r)) && same(d.p2, polar({ x: host.cx, y: host.cy }, host.a1, host.r))));

/** Tie a dimension's points to object features (one undo step). The points go to the features at once. */
export function reassociate(doc, dimId, picks) {
  const d = doc.get(dimId);
  if (!d || d.type !== 'dim' || !d.kind) return { error: 'dim' };
  let links = 0;
  doc.change('DIMREASSOCIATE', () => {
    let next = { ...d, assoc: { ...(d.assoc || {}) } };
    const tokFor = (id) => {
      let h = doc.get(id); if (!h) return null;
      let tok = tokenOf(h);
      if (!tok) { tok = newToken(); doc.update(h.id, withToken(h, tok)); }
      return tok;
    };
    if (picks.o) {
      const h = doc.get(picks.o.id);
      if (h && (h.type === 'circle' || h.type === 'arc') && ['radius', 'diameter', 'jogged', 'arc'].includes(d.kind)) {
        const moved = onCurve(next, h);
        if (moved) { next = { ...moved, assoc: { o: { t: tokFor(h.id) } } }; links++; }
      }
    } else {
      for (const key of ['p1', 'p2', 'c']) {
        const pk = picks[key];
        if (!pk || !d[key]) continue;
        const h = doc.get(pk.id), fp = h && featurePoint(h, pk.g);
        if (!fp) continue;
        next[key] = fp; next.assoc[key] = { t: tokFor(h.id), g: pk.g }; delete next.assoc.o; links++;
      }
    }
    if (!Object.keys(next.assoc).length) delete next.assoc;
    if (links) { delete next.block; doc.update(d.id, next); }
  });
  return { ok: true, links };
}
export function disassociate(doc, ids) {
  let n = 0;
  doc.change('DIMDISASSOCIATE', () => {
    for (const id of ids) { const d = doc.get(id); if (!d || !linkCount(d)) continue; const o = { ...d }; delete o.assoc; doc.update(id, o); n++; }
  });
  return n;
}

const MAX_WORK = 4e6;   // dimensions × objects looked at for automatic breaks in one edit

/** Doc.editHooks: runs inside every change before it is recorded. */
export function dimAssocHook(doc, ops) {
  const byMap = new Map();   // map → Map(id → first before)
  for (const op of ops) {
    if (!op.map || op.id === undefined) continue;
    let m = byMap.get(op.map);
    if (!m) byMap.set(op.map, m = new Map());
    if (!m.has(op.id)) m.set(op.id, op.before);
  }
  for (const [map, recs] of byMap) syncMap(doc, map, recs);
}

function syncMap(doc, map, recs) {
  const dims = [], autos = [];
  for (const e of map.values()) if (e.type === 'dim') { if (linkCount(e)) dims.push(e); if (e.brk && e.brk.auto) autos.push(e); }
  if (!dims.length && !autos.length) return;
  if (dims.length) {
    const hosts = new Map();   // token → [entity]
    for (const e of map.values()) { const tk = tokenOf(e); if (tk) { if (!hosts.has(tk)) hosts.set(tk, []); hosts.get(tk).push(e); } }
    // copies made in this change: a copied object gets a token of its own; a copied dimension is tied to the copy at its point
    const added = (id) => recs.has(id) && recs.get(id) === null;
    const fresh = new Map();   // original token → [copied hosts, with their new tokens]
    for (const [tk, list] of hosts) {
      if (list.length < 2) continue;
      const olds = list.filter((e) => !added(e.id)), news = list.filter((e) => added(e.id));
      const keep = olds.length ? olds[0] : news.shift();
      const renamed = [];
      for (const e of [...olds.slice(1), ...news]) { const n = withToken(e, newToken()); doc.update(e.id, n, map); renamed.push(n); }
      hosts.set(tk, [keep]); fresh.set(tk, renamed);
      for (const n of renamed) hosts.set(tokenOf(n), [n]);
    }
    for (const d0 of dims) {
      let d = d0, changed = false;
      const assoc = { ...d.assoc };
      const drop = (k) => { delete assoc[k]; changed = true; };
      const mine = recs.has(d.id), isNew = added(d.id);
      if (assoc.o) {
        let host = (hosts.get(assoc.o.t) || [])[0];
        if (isNew && fresh.has(assoc.o.t)) { const alt = [host, ...fresh.get(assoc.o.t)].find((h) => h && (h.type === 'circle' || h.type === 'arc') && curveFits(d, h)); if (alt) { host = alt; if (tokenOf(alt) !== assoc.o.t) { assoc.o = { t: tokenOf(alt) }; changed = true; } } }
        if (!host || (host.type !== 'circle' && host.type !== 'arc')) drop('o');
        else if (!curveFits(d, host)) {
          if (recs.has(host.id) && !isNew) { const m = onCurve(d, host); if (m) { d = m; changed = true; } else drop('o'); } else drop('o');
        }
      }
      const deltas = [];
      for (const k of ['p1', 'p2', 'c']) {
        const L = assoc[k];
        if (!L) continue;
        let host = (hosts.get(L.t) || [])[0];
        if (isNew && fresh.has(L.t)) { const alt = [host, ...fresh.get(L.t)].find((h) => h && same(featurePoint(h, L.g), d[k])); if (alt) { host = alt; if (tokenOf(alt) !== L.t) { assoc[k] = { t: tokenOf(alt), g: L.g }; changed = true; } } }
        const fp = host && d[k] ? featurePoint(host, L.g) : null;
        if (!fp) { drop(k); continue; }
        if (same(fp, d[k])) { deltas.push({ x: 0, y: 0 }); continue; }
        if (recs.has(host.id) && !isNew && !(mine && !same(recs.get(d.id)?.[k], d[k]))) {   // the object moved (and this point was not moved by hand in the same step): follow
          deltas.push({ x: fp.x - d[k].x, y: fp.y - d[k].y });
          d = { ...d, [k]: fp }; changed = true;
        } else drop(k);
      }
      // everything it is tied by moved the same way: the dimension line (or an ordinate's leader end) comes along
      const need = d.kind === 'ordinate' ? 1 : ['linear', 'aligned'].includes(d.kind) ? 2 : 3;
      if (deltas.length >= need && deltas.every((v) => Math.hypot(v.x - deltas[0].x, v.y - deltas[0].y) <= 1e-9) && Math.hypot(deltas[0].x, deltas[0].y) > 0 && d.loc) d = { ...d, loc: { x: d.loc.x + deltas[0].x, y: d.loc.y + deltas[0].y } };
      if (!changed) continue;
      const out = { ...d };
      if (Object.keys(assoc).length) out.assoc = assoc; else delete out.assoc;
      delete out.block;
      doc.update(d0.id, out, map);
    }
  }
  if (autos.length) {
    if (autos.length * map.size > MAX_WORK) return;
    let boxes = null;
    const boxOf = (e) => { if (!boxes) boxes = new Map(); let b = boxes.get(e.id); if (b === undefined) { b = entityBounds(e, doc.blocks); boxes.set(e.id, validBounds(b) ? b : null); b = boxes.get(e.id); } return b; };
    for (const d0 of autos) {
      const d = map.get(d0.id);
      if (!d) continue;
      const db = entityBounds({ ...d, brk: undefined, block: undefined }, doc.blocks);
      if (!validBounds(db)) continue;
      const near = [];
      for (const e of map.values()) {
        if (e.id === d.id || e.type === 'viewport') continue;
        const l = doc.layers.get(e.layer);
        if (l && (!l.on || l.frozen)) continue;
        const b = boxOf(e);
        if (b && b.maxX >= db.minX && b.minX <= db.maxX && b.maxY >= db.minY && b.minY <= db.maxY) near.push(e);
      }
      const cuts = breakCuts(d, near, doc.blocks);
      if (JSON.stringify(cuts) === JSON.stringify(d.brk.au || [])) continue;
      const brk = { ...d.brk }; if (cuts.length) brk.au = cuts; else delete brk.au;
      const out = { ...d, brk }; delete out.block;
      doc.update(d.id, out, map);
    }
  }
}
export function installDimAssoc(DocClass) { DocClass.editHooks.add(dimAssocHook); return () => DocClass.editHooks.delete(dimAssocHook); }
