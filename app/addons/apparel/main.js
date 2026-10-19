/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Apparel add-on for CadCraft (0.5 track AP): pattern making for clothing on CadCraft's add-on API 1.0
 * (docs/ADDONS-SPEC.md §5.4, §6). A pattern piece is an add-on object (kind `piece`, lib/piece.js): without the add-on it
 * is a plain block reference that shows, plots and saves; with it, it redraws itself from its data after every edit.
 *
 * Commands: PIECE NOTCH GRAIN DRILL BUTTON BUTTONHOLE FOLDLINE INTLINE (AP.2) · SEAM (AP.3) · GRADE (AP.4) ·
 * SEAMLENGTH WALK PIECETABLE (AP.6) · PATTERNPRINT (AP.8) · AAMAOUT AAMAIN (AP.7) · GRADERULE (AP.5) ·
 * MARKER MARKERADD MARKEROUT (AP.9) · MARKERNEST (0.6 LC.17: the shared nesting engine, lib/nest/ — a copy of the repo's
 * lib/nest, written only by tools/nest/sync.mjs).
 * The modules in lib/ are DOM-free and tested in Node (test/test.mjs).
 */

import { setT, t } from './lib/text.js';
import { VERSION, KINDS, ARROWS, emptyPiece, cleanPiece, drawPiece, gripsOf, gripMove, placeNotch, notchPlace, fromPoly, fromChain, sizesFor } from './lib/piece.js';
import { ptsOf, edges, edgePath, nearest, sampled, centroid, bounds } from './lib/curve.js';
import { RULES, widthOf } from './lib/seam.js';
import { parseSizes, uniform, flip, proportional, setRule, ruleOf, moveOf, withSizes, parseMove, sizeIndex, gradeData } from './lib/grade.js';
import { edgeAt, along, walk, pieceRows, toCsv } from './lib/measure.js';
import { fullSize, tiled, PAPERS } from './lib/print.js';
import { writeAama, readAama } from './lib/aama.js';
import { cleanLibrary, addEntry, entryFrom, ruleFor, toJson, fromJson, fromRul, toRul } from './lib/rules.js';
import { placedFrom, drawPlaced, drawMarker, worldPoly, grainProblem, inMarker, overlaps, stats, parseQuantities } from './lib/marker.js';
import { cutLine } from './lib/seam.js';
import { nest } from './lib/nest/nest.js';
import { Doc } from '../../doc.js';
import { displayList, toPdfPages } from '../../plot.js';
import { insertMatrix, mApply, mInverse } from '../../geom.js';
import { formatLength } from '../../units.js';

export const DEFAULTS = { toolbar: false, sa: '', notch: 'slit', grain: 'both' };

/** 'in' for drawings in inches or feet (or written in feet and inches), else 'mm'. */
export function unitsOfDoc(doc) {
  const u = String(doc?.meta?.units || '').toLowerCase();
  if (u === 'inches' || u === 'feet') return 'in';
  if (!u && (doc?.meta?.lunits === 3 || doc?.meta?.lunits === 4 || doc?.meta?.lunits === 5)) return 'in';
  return 'mm';
}

/** The piece's drawing as the object needs it (no helper fields). */
export function graphics(data, words) {
  return drawPiece(data, { t: words }).map((e) => { const c = { ...e }; delete c.role; delete c.size; return c; });
}

export function activate(api) {
  setT(api.t);
  const settings = { ...DEFAULTS, ...(api.storage.get('settings') || {}) };
  const save = () => api.storage.set('settings', settings);
  const opt = (k, l) => api.commands.option(k, l);
  const yes = (r) => (r?.option ?? r);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });

  api.objects.define('piece', {
    version: VERSION,
    name: t('piece.name'),
    draw: (data) => graphics(data, t),
    grips: (data) => gripsOf(data),
    gripMove: (data, key, to) => gripMove(data, key, to),
  });

  const saWidth = (u) => { const v = parseFloat(settings.sa); return Number.isFinite(v) && v >= 0 ? v : sizesFor(u).sa; };
  const isPiece = (e) => !!e && api.objects.is(e, 'piece');
  /** A typed string, or the default when Enter is pressed on an empty line. */
  const ask = async (c, prompt, def = '') => { const v = String((await c.string(prompt, { default: def })) ?? '').trim(); return v || String(def); };
  const toLocal = (doc, e, p) => { const inv = mInverse(insertMatrix(e, doc.blocks.get(e.block) || { base: { x: 0, y: 0 } })); return inv ? mApply(inv, p) : { x: p.x, y: p.y }; };
  const toWorld = (doc, e, p) => mApply(insertMatrix(e, doc.blocks.get(e.block) || { base: { x: 0, y: 0 } }), p);

  /** Pick a piece (the selection's only piece, else ask). → the entity | null. */
  async function pickPiece(c, prompt = t('ask.piece')) {
    const sel = api.selection().map((id) => c.doc.get(id)).filter(isPiece);
    if (sel.length === 1) return sel[0];
    for (;;) {
      const r = await c.entity(prompt, { none: true });
      if (!r || r.option) return null;
      const e = c.doc.get(r.id);
      if (isPiece(e)) return e;
      c.print(t('err.notpiece'));
    }
  }

  /** Change one piece's data in one step: fn(data) → new data | null (no change). */
  function editPiece(c, label, e, fn) {
    const data = api.objects.dataOf(e);
    if (!data) { c.print(t('err.newer')); return null; }
    const next = fn(structuredClone(data));
    if (!next) return null;
    let out = null;
    c.doc.change(label, () => { out = c.doc.update(e.id, api.objects.update(c.doc.get(e.id), next)); });
    return c.doc.get(e.id) || out;
  }

  // ---------------------------------------------------------------------------------------------- PIECE
  cmd('PIECE', [], async (c) => {
    const doc = c.doc;
    const ids = await c.select(t('ask.outline'));
    if (!ids?.size) return;
    const ents = [...ids].map((id) => doc.get(id)).filter(Boolean);
    const got = ents.length === 1 && ['poly', 'circle', 'ellipse'].includes(ents[0].type) ? fromPoly(ents[0]) : fromChain(ents);
    if (got.error) { c.print(t('err.outline.' + got.error)); return; }
    const u = unitsOfDoc(doc);
    const w = await c.distance(t('ask.sa', { w: fmt(saWidth(u), u) }), { default: saWidth(u), options: [opt('N', t('opt.net'))] });
    if (w === null || w === undefined) return;
    const width = yes(w) === 'N' ? 0 : Number(w);
    if (!Number.isFinite(width) || width < 0) { c.print(t('err.width')); return; }
    const n = countPieces(doc) + 1;
    const name = String(await c.string(t('ask.name'), { default: t('piece.default', { n }) }) ?? '').trim() || t('piece.default', { n });
    const data = { ...emptyPiece(u), name, pts: got.pts, sa: width > 0 ? { w: width, e: {}, k: {} } : null };
    data.grain = autoGrain(data, settings.grain);
    const layer = ents[0].layer;
    let made;
    doc.change('PIECE', () => {
      for (const e of ents) doc.remove(e.id);
      made = doc.add(api.objects.create('piece', data, { layer }));
    });
    api.select([made.id]);
    c.print(t('done.piece', { name }));
  });

  function countPieces(doc) { let n = 0; for (const e of doc.all()) if (isPiece(e)) n++; return n; }

  /** A grain line through the middle of the piece, up the page, 60 % of its height. */
  function autoGrain(data, style = 'both') {
    const { path } = sampled(ptsOf(data.pts), true);
    const b = bounds(path), m = centroid(path), h = (b.maxY - b.minY) * 0.3;
    return { a: [+m.x.toFixed(6), +(m.y - h).toFixed(6)], b: [+m.x.toFixed(6), +(m.y + h).toFixed(6)], s: ARROWS.includes(style) ? style : 'both' };
  }

  // ---------------------------------------------------------------------------------------------- NOTCH
  cmd('NOTCH', ['NO'], async (c) => {
    let e = await pickPiece(c);
    if (!e) return;
    let kind = KINDS.includes(settings.notch) ? settings.notch : 'slit';
    let depth = null, n = 0;
    for (;;) {
      const r = await c.point(t('ask.notch', { kind: t('notch.' + kind) }), { none: true, options: [opt('K', t('opt.kind')), opt('D', t('opt.depth')), opt('R', t('opt.remove'))] });
      if (!r) break;
      if (r.option === 'K') {
        const k = yes(await c.keyword(t('ask.notch.kind'), { options: [opt('S', t('notch.slit')), opt('V', t('notch.v')), opt('T', t('notch.t'))], default: kind === 'v' ? 'V' : kind === 't' ? 'T' : 'S' }));
        kind = k === 'V' ? 'v' : k === 'T' ? 't' : 'slit';
        settings.notch = kind; save();
        continue;
      }
      if (r.option === 'D') {
        const d = await c.distance(t('ask.notch.depth'), { default: depth ?? sizesFor(api.objects.dataOf(e).u).notch });
        if (Number.isFinite(Number(d)) && Number(d) > 0) depth = Number(d);
        continue;
      }
      if (r.option === 'R') {
        const p = await c.point(t('ask.notch.remove'));
        if (!p || p.option) continue;
        const q = toLocal(c.doc, e, p);
        e = editPiece(c, 'NOTCH', e, (d) => {
          let best = -1, bd = Infinity;
          d.notches.forEach((x, i) => { const pl = notchPlace(d, x); if (pl) { const dd = Math.hypot(pl.x - q.x, pl.y - q.y); if (dd < bd) { bd = dd; best = i; } } });
          if (best < 0) return null;
          d.notches.splice(best, 1);
          return d;
        }) || e;
        continue;
      }
      const q = toLocal(c.doc, e, r);
      e = editPiece(c, 'NOTCH', e, (d) => { const nn = placeNotch(d, q, kind); if (!nn) return null; if (depth) nn.depth = depth; d.notches.push(nn); n++; return d; }) || e;
    }
    if (n) c.print(t('done.notch', { n }));
  });

  // ---------------------------------------------------------------------------------------------- GRAIN
  cmd('GRAIN', ['GR'], async (c) => {
    const e = await pickPiece(c);
    if (!e) return;
    const data = api.objects.dataOf(e);
    let style = data?.grain?.s || settings.grain || 'both';
    let a;
    for (;;) {
      a = await c.point(t('ask.grain.a', { style: t('arrow.' + style) }), { options: [opt('A', t('opt.arrows'))] });
      if (!a) return;
      if (a.option !== 'A') break;
      const k = yes(await c.keyword(t('ask.arrows'), { options: [opt('B', t('arrow.both')), opt('O', t('arrow.one')), opt('N', t('arrow.none'))], default: style === 'one' ? 'O' : style === 'none' ? 'N' : 'B' }));
      style = k === 'O' ? 'one' : k === 'N' ? 'none' : 'both';
      settings.grain = style; save();
    }
    c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }]);
    const b = await c.point(t('ask.grain.b'), { base: a });
    c.preview(null);
    if (!b || b.option) return;
    const la = toLocal(c.doc, e, a), lb = toLocal(c.doc, e, b);
    if (Math.hypot(la.x - lb.x, la.y - lb.y) < 1e-9) return;
    editPiece(c, 'GRAIN', e, (d) => { d.grain = { a: [la.x, la.y], b: [lb.x, lb.y], s: style }; return d; });
    c.print(t('done.grain'));
  });

  // ---------------------------------------------------------------------------------------------- DRILL, BUTTON, BUTTONHOLE
  /** Points placed one after another until Enter; R removes the nearest one. key = the data list. */
  async function placeMarks(c, label, key, ask, make, extra = []) {
    let e = await pickPiece(c);
    if (!e) return;
    let n = 0;
    for (;;) {
      const r = await c.point(ask(), { none: true, options: [...extra.map((x) => opt(x.key, x.label)), opt('R', t('opt.remove'))] });
      if (!r) break;
      const x = extra.find((o) => o.key === r.option);
      if (x) { await x.run(); continue; }
      if (r.option === 'R') {
        const p = await c.point(t('ask.remove'));
        if (!p || p.option) continue;
        const q = toLocal(c.doc, e, p);
        e = editPiece(c, label, e, (d) => {
          const list = d[key];
          let best = -1, bd = Infinity;
          list.forEach((m, i) => { const dd = Math.hypot(m[0] - q.x, m[1] - q.y); if (dd < bd) { bd = dd; best = i; } });
          if (best < 0) return null;
          list.splice(best, 1);
          return d;
        }) || e;
        continue;
      }
      const made = await make(c, e, toLocal(c.doc, e, r), r);
      if (!made) continue;
      e = editPiece(c, label, e, (d) => { d[key].push(made); n++; return d; }) || e;
    }
    if (n) c.print(t('done.' + key, { n }));
  }

  cmd('DRILL', [], (c) => placeMarks(c, 'DRILL', 'drills', () => t('ask.drill'), (_c, _e, q) => [+q.x.toFixed(6), +q.y.toFixed(6)]));

  cmd('BUTTON', [], async (c) => {
    let dia = null;
    await placeMarks(c, 'BUTTON', 'buttons', () => t('ask.button'), (_c, e, q) => [+q.x.toFixed(6), +q.y.toFixed(6), dia ?? sizesFor(api.objects.dataOf(e).u).button],
      [{ key: 'D', label: t('opt.diameter'), run: async () => { const d = await c.distance(t('ask.button.dia'), { default: dia ?? undefined }); if (Number(d) > 0) dia = Number(d); } }]);
  });

  cmd('BUTTONHOLE', ['BH'], (c) => placeMarks(c, 'BUTTONHOLE', 'holes', () => t('ask.hole'), async (cc, e, q, world) => {
    cc.preview((cur) => [{ type: 'line', x1: world.x, y1: world.y, x2: cur.x, y2: cur.y }]);
    const b = await cc.point(t('ask.hole.end'), { base: world });
    cc.preview(null);
    if (!b || b.option) return null;
    const lb = toLocal(cc.doc, e, b);
    const L = Math.hypot(lb.x - q.x, lb.y - q.y);
    if (L < 1e-9) return null;
    return [+((q.x + lb.x) / 2).toFixed(6), +((q.y + lb.y) / 2).toFixed(6), +L.toFixed(6), +((Math.atan2(lb.y - q.y, lb.x - q.x) * 180) / Math.PI).toFixed(4)];
  }));

  // ---------------------------------------------------------------------------------------------- FOLDLINE, INTLINE
  cmd('FOLDLINE', ['FOLD'], async (c) => {
    const e = await pickPiece(c);
    if (!e) return;
    const r = await c.point(t('ask.fold'), { options: [opt('P', t('opt.twopoints')), opt('R', t('opt.remove'))] });
    if (!r) return;
    if (r.option === 'R') { editPiece(c, 'FOLDLINE', e, (d) => (d.fold ? ((d.fold = null), d) : null)); c.print(t('done.fold.off')); return; }
    let a, b;
    if (r.option === 'P') {
      const p1 = await c.point(t('ask.fold.a'));
      if (!p1 || p1.option) return;
      c.preview((cur) => [{ type: 'line', x1: p1.x, y1: p1.y, x2: cur.x, y2: cur.y }]);
      const p2 = await c.point(t('ask.fold.b'), { base: p1 });
      c.preview(null);
      if (!p2 || p2.option) return;
      a = toLocal(c.doc, e, p1); b = toLocal(c.doc, e, p2);
    } else {
      // the straight edge nearest the click: corner to corner
      const d = api.objects.dataOf(e);
      const pts = ptsOf(d.pts), q = toLocal(c.doc, e, r);
      let best = null;
      for (const ed of edges(pts, true)) { const h = nearest(edgePath(pts, ed, true), q); if (!best || h.dist < best.dist) best = { ed, dist: h.dist }; }
      if (!best) return;
      a = pts[best.ed.start]; b = pts[best.ed.end];
    }
    editPiece(c, 'FOLDLINE', e, (d) => { d.fold = { a: [a.x, a.y], b: [b.x, b.y] }; return d; });
    c.print(t('done.fold'));
  });

  cmd('INTLINE', ['IL'], async (c) => {
    const e = await pickPiece(c);
    if (!e) return;
    const pts = [];
    let smooth = false;
    for (;;) {
      if (pts.length) c.preview((cur) => [{ type: 'poly', closed: false, pts: [...pts, cur].map((q) => ({ x: q.x, y: q.y, b: 0 })) }]);
      const r = await c.point(pts.length ? t('ask.line.next', { kind: t(smooth ? 'line.curve' : 'line.straight') }) : t('ask.line.start'), { base: pts[pts.length - 1], none: true, options: [opt('C', t('opt.curve')), ...(pts.length ? [opt('U', t('opt.undo'))] : [])] });
      c.preview(null);
      if (!r) break;
      if (r.option === 'C') { smooth = !smooth; continue; }
      if (r.option === 'U') { pts.pop(); continue; }
      pts.push({ x: r.x, y: r.y });
    }
    if (pts.length < 2) return;
    const local = pts.map((p) => toLocal(c.doc, e, p));
    editPiece(c, 'INTLINE', e, (d) => { d.lines.push({ p: local.map((p, i) => [+p.x.toFixed(6), +p.y.toFixed(6), smooth && i > 0 && i < local.length - 1 ? 1 : 0]) }); return d; });
    c.print(t('done.line'));
  });

  // ---------------------------------------------------------------------------------------------- SEAM (AP.3)
  cmd('SEAM', ['SA'], async (c) => {
    let e = await pickPiece(c);
    if (!e) return;
    const ruleOpts = () => RULES.map((r) => opt(r[0].toUpperCase(), t('rule.' + r)));
    for (;;) {
      const r = await c.point(t('ask.seam'), { none: true, options: [opt('C', t('opt.corner')), opt('A', t('opt.all')), opt('N', t('opt.net'))] });
      if (!r) break;
      const d0 = api.objects.dataOf(e);
      if (!d0) { c.print(t('err.newer')); return; }
      const u = d0.u;
      if (r.option === 'N') { e = editPiece(c, 'SEAM', e, (d) => ((d.sa = null), d)) || e; c.print(t('done.seam.net')); continue; }
      if (r.option === 'A') {
        const w = await c.distance(t('ask.seam.all'), { default: d0.sa?.w || saWidth(u) });
        if (!(Number(w) >= 0)) continue;
        e = editPiece(c, 'SEAM', e, (d) => ((d.sa = Number(w) > 0 ? { w: Number(w), e: {}, k: d.sa?.k || {} } : null), d)) || e;
        continue;
      }
      if (r.option === 'C') {
        const p = await c.point(t('ask.seam.corner'));
        if (!p || p.option) continue;
        const q = toLocal(c.doc, e, p);
        const pts = ptsOf(d0.pts);
        let best = -1, bd = Infinity;
        pts.forEach((pt, i) => { if (pt.c) return; const dd = Math.hypot(pt.x - q.x, pt.y - q.y); if (dd < bd) { bd = dd; best = i; } });
        if (best < 0) continue;
        const cur = d0.sa?.k?.[best] || 'follow';
        const k = yes(await c.keyword(t('ask.seam.rule'), { options: ruleOpts(), default: cur[0].toUpperCase() }));
        const rule = RULES.find((x) => x[0].toUpperCase() === k);
        if (!rule) continue;
        e = editPiece(c, 'SEAM', e, (d) => { d.sa = d.sa || { w: 0, e: {}, k: {} }; if (rule === 'follow') delete d.sa.k[best]; else d.sa.k[best] = rule; return d; }) || e;
        c.print(t('done.seam.rule', { rule: t('rule.' + rule) }));
        continue;
      }
      const q = toLocal(c.doc, e, r);
      const pts = ptsOf(d0.pts);
      let best = null;
      for (const ed of edges(pts, true)) { const hh = nearest(edgePath(pts, ed, true), q); if (!best || hh.dist < best.dist) best = { ed, dist: hh.dist }; }
      if (!best) continue;
      const i = best.ed.start;
      const w = await c.distance(t('ask.seam.edge'), { default: widthOf(d0.sa, i) });
      if (!(Number(w) >= 0)) continue;
      e = editPiece(c, 'SEAM', e, (d) => { d.sa = d.sa || { w: 0, e: {}, k: {} }; d.sa.e[i] = Number(w); return d; }) || e;
      c.print(t('done.seam.edge', { w: fmt(Number(w), u) }));
    }
  });

  // ---------------------------------------------------------------------------------------------- GRADE (AP.4)
  let gradeClip = api.storage.get('gradeClip') || null;   // { sizes: [...], rule: [...] } — copied rule
  const keyNear = (data, q) => { let best = null; for (const g of gripsOf(data)) { const dd = Math.hypot(g.x - q.x, g.y - q.y); if (!best || dd < best.dd) best = { key: g.key, dd }; } return best?.key || null; };
  /** A rule copied from a piece with other sizes: by size name, measured from this piece's base. */
  const fitClip = (data) => {
    if (!gradeClip || !data.sizes) return null;
    const b = gradeClip.sizes.indexOf(data.sizes.base);
    const shift = b >= 0 ? moveOf(gradeClip.rule, b) : [0, 0];
    return data.sizes.list.flatMap((s) => { const i = gradeClip.sizes.indexOf(s); const m = i >= 0 ? moveOf(gradeClip.rule, i) : shift; return [m[0] - shift[0], m[1] - shift[1]]; });
  };

  /** Size range for this piece and every other piece of its style (one undo step). */
  function applySizes(c, e, sizes) {
    const d0 = api.objects.dataOf(e);
    const doc = c.doc;
    let n = 0, added = [];
    doc.change('GRADE', () => {
      for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
        for (const [id, x] of [...map]) {
          if (!isPiece(x)) continue;
          const d = api.objects.dataOf(x);
          if (!d || (x.id !== e.id && (!d0.style || d.style !== d0.style))) continue;
          const r = withSizes(d, sizes);
          added = r.added;
          doc.update(id, api.objects.update(x, r.data), map);
          n++;
        }
      }
    });
    return { n, added };
  }

  cmd('GRADE', [], async (c) => {
    let e = await pickPiece(c);
    if (!e) return;
    const data0 = () => api.objects.dataOf(e);
    if (!data0()) { c.print(t('err.newer')); return; }
    const pickKey = async (prompt, none = false) => { const p = await c.point(prompt, { none }); if (!p || p.option) return null; return keyNear(data0(), toLocal(c.doc, e, p)); };
    if (!data0().sizes) c.print(t('grade.nosizes'));
    for (;;) {
      const d = data0();
      const r = await c.point(t('ask.grade', { sizes: d.sizes ? d.sizes.list.join(' ') : t('none'), base: d.sizes?.base || t('none') }), { none: true, options: [opt('S', t('opt.sizes')), opt('N', t('opt.nest')), opt('C', t('opt.copy')), opt('P', t('opt.paste')), opt('H', t('opt.flipx')), opt('V', t('opt.flipy')), opt('B', t('opt.proportional')), opt('R', t('opt.remove'))] });
      if (!r) break;
      if (r.option === 'S') {
        const list = parseSizes(await ask(c, t('ask.sizes'), d.sizes ? d.sizes.list.join(' ') : ''));
        if (list.length < 1) { c.print(t('err.sizes')); continue; }
        const mid = list[Math.floor((list.length - 1) / 2)];
        const base = await ask(c, t('ask.base', { list: list.join(' ') }), d.sizes && list.includes(d.sizes.base) ? d.sizes.base : mid);
        if (!list.includes(base)) { c.print(t('err.base', { list: list.join(' ') })); continue; }
        const res = applySizes(c, e, { list, base });
        e = c.doc.get(e.id);
        c.print(t('done.sizes', { n: res.n, list: list.join(' '), base }));
        continue;
      }
      if (!d.sizes) { c.print(t('grade.nosizes')); continue; }
      if (r.option === 'N') { e = editPiece(c, 'GRADE', e, (x) => { if (x.nest) delete x.nest; else x.nest = true; return x; }) || e; c.print(t(data0().nest ? 'done.nest.on' : 'done.nest.off')); continue; }
      if (r.option === 'C') { const k = await pickKey(t('ask.grade.copy')); if (!k) continue; const rule = ruleOf(d, k); gradeClip = { sizes: [...d.sizes.list], rule: rule || uniform(d.sizes, [0, 0]) }; api.storage.set('gradeClip', gradeClip); c.print(t('done.grade.copy', { key: k })); continue; }
      if (r.option === 'P') {
        if (!gradeClip) { c.print(t('err.noclip')); continue; }
        for (;;) { const k = await pickKey(t('ask.grade.paste'), true); if (!k) break; e = editPiece(c, 'GRADE', e, (x) => setRule(x, k, fitClip(x))) || e; }
        continue;
      }
      if (r.option === 'H' || r.option === 'V') { const k = await pickKey(t('ask.grade.flip')); if (!k) continue; const rule = ruleOf(d, k); if (!rule) { c.print(t('err.norule')); continue; } e = editPiece(c, 'GRADE', e, (x) => setRule(x, k, flip(rule, r.option === 'H' ? 'x' : 'y'))) || e; continue; }
      if (r.option === 'R') { const k = await pickKey(t('ask.grade.remove')); if (!k) continue; e = editPiece(c, 'GRADE', e, (x) => setRule(x, k, null)) || e; continue; }
      if (r.option === 'B') {
        const a = await pickKey(t('ask.grade.from')); if (!a) continue;
        const b = await pickKey(t('ask.grade.to')); if (!b) continue;
        const fill = proportional(d, a, b);
        if (!Object.keys(fill).length) { c.print(t('err.proportional')); continue; }
        e = editPiece(c, 'GRADE', e, (x) => { let y = x; for (const [k, rule] of Object.entries(fill)) y = setRule(y, k, rule); return y; }) || e;
        c.print(t('done.grade.proportional', { n: Object.keys(fill).length }));
        continue;
      }
      // a point: its rule, as a move per size or size by size
      const k = keyNear(d, toLocal(c.doc, e, r));
      if (!k) continue;
      const cur = ruleOf(d, k);
      const bi = sizeIndex(d);
      const step = cur && d.sizes.list.length > 1 ? moveOf(cur, bi + 1 < d.sizes.list.length ? bi + 1 : bi - 1).map((v) => (bi + 1 < d.sizes.list.length ? v : -v)) : [0, 0];
      const typed = await ask(c, t('ask.grade.step', { key: k }), step.map((v) => +v.toFixed(3)).join(','));
      if (String(typed).trim().toUpperCase() === 'T') {
        const rule = [];
        for (let i = 0; i < d.sizes.list.length; i++) {
          if (i === bi) { rule.push(0, 0); continue; }
          const m = moveOf(cur, i);
          const v = parseMove(await ask(c, t('ask.grade.size', { size: d.sizes.list[i], base: d.sizes.base }), m.map((x) => +x.toFixed(3)).join(',')));
          if (!v) { c.print(t('err.move')); rule.length = 0; break; }
          rule.push(v[0], v[1]);
        }
        if (rule.length) e = editPiece(c, 'GRADE', e, (x) => setRule(x, k, rule)) || e;
        continue;
      }
      const v = parseMove(typed);
      if (!v) { c.print(t('err.move')); continue; }
      e = editPiece(c, 'GRADE', e, (x) => setRule(x, k, uniform(x.sizes, v))) || e;
      c.print(t('done.grade', { key: k }));
    }
  });

  // ---------------------------------------------------------------------------------------------- measuring (AP.6)
  cmd('SEAMLENGTH', ['SLEN'], async (c) => {
    const e = await pickPiece(c);
    if (!e) return;
    const d = api.objects.dataOf(e);
    if (!d) { c.print(t('err.newer')); return; }
    const a = await c.point(t('ask.len.a'));
    if (!a || a.option) return;
    const b = await c.point(t('ask.len.b'), { base: a });
    if (!b || b.option) return;
    const r = along(d, toLocal(c.doc, e, a), toLocal(c.doc, e, b));
    c.print(t('done.len', { fwd: fmtLen(r.fwd, d.u), back: fmtLen(r.back, d.u), total: fmtLen(r.total, d.u) }));
    if (d.sizes) for (const size of d.sizes.list) { const rs = along(d, toLocal(c.doc, e, a), toLocal(c.doc, e, b), size); c.print('  ' + t('done.len.size', { size, fwd: fmtLen(rs.fwd, d.u), back: fmtLen(rs.back, d.u) })); }
  }, { keepSelection: true });

  cmd('WALK', [], async (c) => {
    const pickEdge = async (prompt) => {
      const r = await c.entity(prompt);
      const e = r && c.doc.get(r.id);
      if (!isPiece(e)) { if (r) c.print(t('err.notpiece')); return null; }
      const d = api.objects.dataOf(e);
      const at = edgeAt(d, toLocal(c.doc, e, r.point));
      return d && at ? { e, d, i: at.i } : null;
    };
    const A = await pickEdge(t('ask.walk.a'));
    if (!A) return;
    const B = await pickEdge(t('ask.walk.b'));
    if (!B) return;
    let reverse = true, size = null;
    for (;;) {
      const w = walk(A.d, A.i, B.d, B.i, { size, reverse });
      const u = A.d.u;
      c.print(t('done.walk', { a: fmtLen(w.lenA, u), b: fmtLen(w.lenB, u), diff: (w.diff >= 0 ? '+' : '') + fmtLen(w.diff, u), size: size || A.d.size || t('none') }));
      w.pairs.forEach((p, k) => c.print('  ' + t(Math.abs(p.off) < 0.5 * (u === 'in' ? 0.0625 : 1) ? 'done.walk.notch.ok' : 'done.walk.notch', { n: k + 1, a: fmtLen(p.a, u), off: (p.off >= 0 ? '+' : '') + fmtLen(p.off, u) })));
      if (w.onlyA.length || w.onlyB.length) c.print('  ' + t('done.walk.unpaired', { a: w.onlyA.length, b: w.onlyB.length }));
      c.preview(() => walkPreview(c.doc, A, B, reverse, size));
      const k = yes(await c.keyword(t('ask.walk.next'), { options: [opt('R', t('opt.reverse')), ...(A.d.sizes ? [opt('S', t('opt.size'))] : []), opt('E', t('opt.exit'))], default: 'E' }));
      c.preview(null);
      if (k === 'R') { reverse = !reverse; continue; }
      if (k === 'S' && A.d.sizes) { const s2 = await ask(c, t('ask.walk.size', { list: A.d.sizes.list.join(' ') }), size || A.d.sizes.base); if (A.d.sizes.list.includes(s2)) size = s2; continue; }
      break;
    }
  }, { noRepeat: true, keepSelection: true });

  /** B's edge laid along A's edge from A's start (as the two pieces are sewn), with B's notches, in drawing coordinates. */
  function walkPreview(doc, A, B, reverse, size) {
    const pathOf = (X) => { const pts = ptsOf(size && X.d.sizes ? gradeData(X.d, size).pts : X.d.pts); const ed = edges(pts, true).find((q) => q.start === X.i); return ed ? edgePath(pts, ed, true).map((p) => toWorld(doc, X.e, p)) : []; };
    const pa = pathOf(A);
    let pb = pathOf(B);
    if (pa.length < 2 || pb.length < 2) return [];
    if (reverse) pb = pb.slice().reverse();
    const ang = (p) => Math.atan2(p[1].y - p[0].y, p[1].x - p[0].x);
    const rot = ang(pa) - ang(pb), co = Math.cos(rot), si = Math.sin(rot);
    const o = pb[0], to = pa[0];
    const put = (q) => ({ x: to.x + (q.x - o.x) * co - (q.y - o.y) * si, y: to.y + (q.x - o.x) * si + (q.y - o.y) * co });
    return [{ type: 'poly', closed: false, pts: pb.map((q) => ({ ...put(q), b: 0 })), color: 1 }];
  }

  const TABLE_COLS = (u) => [
    { key: 'style', label: t('table.style') }, { key: 'piece', label: t('table.piece') }, { key: 'size', label: t('table.size') }, { key: 'qty', label: t('table.qty') },
    { key: 'sewPerimeter', label: t('table.sewper', { u: u === 'in' ? 'in' : 'mm' }) }, { key: 'cutPerimeter', label: t('table.cutper', { u: u === 'in' ? 'in' : 'mm' }) },
    { key: 'sewArea', label: t('table.sewarea', { u: t(u === 'in' ? 'unit.sqin' : 'unit.cm2') }) }, { key: 'cutArea', label: t('table.cutarea', { u: t(u === 'in' ? 'unit.sqin' : 'unit.cm2') }) },
  ];
  /** Every piece (or the selected ones) × its sizes. */
  function tableRows(doc, only = null) {
    const rows = [];
    let u = 'mm';
    for (const e of doc.all()) {
      if (!isPiece(e) || (only && !only.has(e.id))) continue;
      const d = api.objects.dataOf(e);
      if (!d) continue;
      u = d.u;
      const k = d.u === 'in' ? 1 : 100;   // mm² → cm²
      for (const r of pieceRows(d)) rows.push({ style: d.style, piece: d.name, size: r.size, qty: d.qty ?? 1, sewPerimeter: +r.sewPerimeter.toFixed(2), cutPerimeter: +r.cutPerimeter.toFixed(2), sewArea: +(r.sewArea / k).toFixed(2), cutArea: +(r.cutArea / k).toFixed(2) });
    }
    return { rows, u };
  }
  cmd('PIECETABLE', ['PTABLE'], async (c) => {
    const sel = new Set(api.selection().filter((id) => isPiece(c.doc.get(id))));
    const { rows, u } = tableRows(c.doc, sel.size ? sel : null);
    if (!rows.length) { c.print(t('table.none')); return; }
    const cols = TABLE_COLS(u);
    for (const r of rows) c.print([r.style, r.piece, r.size, t('table.line', { sp: r.sewPerimeter, cp: r.cutPerimeter, sa: r.sewArea, ca: r.cutArea, u: u === 'in' ? 'in' : 'mm', au: t(u === 'in' ? 'unit.sqin' : 'unit.cm2') })].filter(Boolean).join('  '));
    const k = yes(await c.keyword(t('ask.table'), { options: [opt('C', t('opt.csv')), opt('E', t('opt.exit'))], default: 'E' }));
    if (k === 'C') { download(((c.doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '')) + ' pieces.csv', '\ufeff' + toCsv(cols, rows), 'text/csv'); c.print(t('done.csv', { n: rows.length })); }
  }, { noRepeat: true, keepSelection: true });
  api.files.exporter({ id: 'piece-table', label: t('export.table'), extension: 'csv', mime: 'text/csv', write: (doc) => { const { rows, u } = tableRows(doc); return '\ufeff' + toCsv(TABLE_COLS(u), rows); } });

  function download(name, text, mime) {
    if (typeof document === 'undefined') return;
    const url = URL.createObjectURL(new Blob([text], { type: mime }));
    const a = document.createElement('a');
    a.href = url; a.download = name; a.rel = 'noopener';
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  // ---------------------------------------------------------------------------------------------- printing (AP.8)
  /** The pieces to print: the selected ones, else every piece. → [{ e, data }] */
  function piecesToPrint(doc) {
    const sel = new Set(api.selection());
    let list = doc.all().filter(isPiece);
    if (list.some((e) => sel.has(e.id))) list = list.filter((e) => sel.has(e.id));
    return list.map((e) => ({ e, data: api.objects.dataOf(e) })).filter((p) => p.data);
  }
  /** Every size the pieces have, in the first piece's order. */
  const allSizes = (ps) => { const out = []; for (const p of ps) for (const s of p.data.sizes?.list || []) if (!out.includes(s)) out.push(s); return out; };
  /** The PDF of a pattern. opts: { mode: 'full' | 'tiled', sizes, paper, overlap (mm) } → { bytes, pages, report } */
  async function patternPdf(doc, ps, opts) {
    const draw = (d) => graphics(d, t);
    const pages = opts.mode === 'full'
      ? fullSize(doc, ps, opts.sizes, { draw, t })
      : tiled(doc, ps, opts.sizes, { draw, t, paper: opts.paper, overlap: opts.overlap });
    if (!pages.length) return null;
    const r = await toPdfPages(pages.map((p) => p.list), { title: (doc.meta.name || 'Drawing1') + ' ' + t('print.title'), names: pages.map((p) => p.name), pen: 0.35 });
    return { bytes: r.bytes, pages, report: r.report };
  }
  cmd('PATTERNPRINT', ['PPRINT'], async (c) => {
    const doc = c.doc;
    const ps = piecesToPrint(doc);
    if (!ps.length) { c.print(t('table.none')); return; }
    const u = ps.some((p) => p.data.u === 'in') ? 'in' : 'mm';
    const mode = yes(await c.keyword(t('ask.print.mode'), { options: [opt('T', t('opt.tiled')), opt('F', t('opt.fullsize'))], default: 'T' })) === 'F' ? 'full' : 'tiled';
    const have = allSizes(ps);
    let sizes = [];
    if (have.length) {
      const typed = await ask(c, t('ask.print.sizes', { list: have.join(' ') }), have.join(' '));
      sizes = parseSizes(typed).filter((s) => have.includes(s));
      if (!sizes.length) { c.print(t('err.print.sizes', { list: have.join(' ') })); return; }
    }
    let paper = u === 'in' ? 'letter' : 'a4', overlap = 10;
    if (mode === 'tiled') {
      paper = yes(await c.keyword(t('ask.print.paper'), { options: [opt('A', 'A4'), opt('L', t('opt.letter'))], default: paper === 'letter' ? 'L' : 'A' })) === 'L' ? 'letter' : 'a4';
      const o = await c.distance(t('ask.print.overlap'), { default: u === 'in' ? 0.5 : 10 });
      if (Number(o) >= 0) overlap = Number(o) * (u === 'in' ? 25.4 : 1);
    }
    const r = await patternPdf(doc, ps, { mode, sizes, paper, overlap });
    if (!r) { c.print(t('table.none')); return; }
    if (r.pages.some((p) => p.tooBig)) c.print(t('print.toobig'));
    const name = (doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '') + ' ' + t(mode === 'full' ? 'print.file.full' : 'print.file.tiled', { paper: PAPERS[paper].label }) + '.pdf';
    downloadBytes(name, r.bytes, 'application/pdf');
    c.print(t(mode === 'full' ? 'done.print.full' : 'done.print.tiled', { n: r.pages.length, tiles: r.pages.filter((p) => p.tile).length, name }));
  }, { noRepeat: true, keepSelection: true });
  api.files.exporter({ id: 'pattern-tiled', label: t('export.tiled'), extension: 'pdf', mime: 'application/pdf', write: async (doc) => { const ps = piecesToPrint(doc); const u = ps.some((p) => p.data.u === 'in') ? 'in' : 'mm'; return (await patternPdf(doc, ps, { mode: 'tiled', sizes: allSizes(ps), paper: u === 'in' ? 'letter' : 'a4', overlap: 10 }))?.bytes ?? null; } });
  api.files.exporter({ id: 'pattern-full', label: t('export.full'), extension: 'pdf', mime: 'application/pdf', write: async (doc) => { const ps = piecesToPrint(doc); return (await patternPdf(doc, ps, { mode: 'full', sizes: allSizes(ps) }))?.bytes ?? null; } });
  function downloadBytes(name, bytes, mime) {
    if (typeof document === 'undefined') return;
    const url = URL.createObjectURL(new Blob([bytes], { type: mime }));
    const a = document.createElement('a');
    a.href = url; a.download = name; a.rel = 'noopener';
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  // ---------------------------------------------------------------------------------------------- DXF-AAMA / ASTM (AP.7)
  const placeOf = (e) => ({ x: e.x || 0, y: e.y || 0, rot: e.rot || 0, sx: e.sx ?? 1, sy: e.sy ?? 1 });
  /** Pieces read from a file → entities to add (one undo step through IMPORT, or AAMAIN's own change). */
  function piecesToEntities(res) {
    return res.pieces.map(({ data, place }) => { const o = api.objects.create('piece', data, {}); return { ...o, x: place?.x || 0, y: place?.y || 0, rot: place?.rot || 0, sx: place?.sx || 1, sy: place?.sy || 1 }; });
  }
  const noteText = (res) => res.notes.map((n) => t(n.key, n.vars));
  function aamaFiles(doc, opts) {
    const ps = piecesToPrint(doc).map((p) => ({ data: p.data, place: placeOf(p.e) }));
    if (!ps.length) return null;
    return writeAama(ps, { ...opts, author: 'CadCraft', style: ps.find((p) => p.data.style)?.data.style || (doc.meta.name || '').replace(/\.[^.]+$/, '') });
  }
  cmd('AAMAOUT', [], async (c) => {
    const k1 = yes(await c.keyword(t('ask.aama.std'), { options: [opt('A', 'DXF-AAMA'), opt('S', 'ASTM D6673')], default: 'A' }));
    const standard = k1 === 'S' ? 'astm' : 'aama';
    const graded = piecesToPrint(c.doc).some((p) => p.data.sizes);
    let grading = 'none';
    if (graded) grading = yes(await c.keyword(t('ask.aama.grading'), { options: [opt('R', t('opt.rul')), opt('N', t('opt.nested'))], default: 'R' })) === 'N' ? 'nested' : 'rul';
    const r = aamaFiles(c.doc, { standard, grading });
    if (!r) { c.print(t('table.none')); return; }
    const base = (c.doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '') + (standard === 'astm' ? ' ASTM' : ' AAMA');
    download(base + '.dxf', r.dxf, 'application/dxf');
    if (r.rul) download(base + '.rul', r.rul, 'text/plain');
    c.print(t(r.rul ? 'done.aama.out.rul' : 'done.aama.out', { name: base, rules: r.rules }));
    for (const s2 of noteText(r)) c.print('  ' + s2);
  }, { noRepeat: true, keepSelection: true });

  cmd('AAMAIN', [], async (c) => {
    const files = await pickFiles('.dxf,.rul,.DXF,.RUL');
    if (!files) { c.print(t('aama.in.none')); return; }
    const dxf = files.find((f2) => /\.dxf$/i.test(f2.name)), rul = files.find((f2) => /\.rul$/i.test(f2.name));
    if (!dxf) { c.print(t('aama.in.nodxf')); return; }
    await importAama(c, await readText(dxf), rul ? await readText(rul) : null, dxf.name);
  }, { noRepeat: true });

  /** Read and add: one undo step. Also used by the tests (text in, no file picker). */
  async function importAama(c, dxfText, rulText, name) {
    let res;
    try { res = readAama(dxfText, rulText); } catch (err) { c.print(t('aama.in.failed', { name, reason: err?.message || String(err) })); return 0; }
    if (!res.pieces.length) { c.print(t('aama.in.empty', { name })); return 0; }
    const ents = piecesToEntities(res);
    c.doc.change('AAMAIN', () => { for (const e of ents) c.doc.add(e); });
    c.print(t('done.aama.in', { n: res.pieces.length, name, sizes: res.pieces.find((p) => p.data.sizes)?.data.sizes.list.join(' ') || t('none') }));
    for (const s2 of noteText(res)) c.print('  ' + s2);
    return res.pieces.length;
  }
  async function readText(file) { const buf = await file.arrayBuffer(); const u8 = new Uint8Array(buf); try { return new TextDecoder('utf-8', { fatal: true }).decode(u8); } catch { return new TextDecoder('latin1').decode(u8); } }
  /** The page's own file picker for several files at once (a DXF and its RUL). → File[] | null */
  function pickFiles(accept) {
    if (typeof document === 'undefined') return Promise.resolve(null);
    return new Promise((resolve) => {
      const inp = document.createElement('input');
      inp.type = 'file'; inp.multiple = true; inp.accept = accept; inp.style.display = 'none';
      inp.addEventListener('change', () => { resolve(inp.files && inp.files.length ? [...inp.files] : null); inp.remove(); });
      inp.addEventListener('cancel', () => { resolve(null); inp.remove(); });
      document.body.append(inp);
      inp.click();
    });
  }
  api.files.importer({ id: 'aama', label: t('import.aama'), extensions: ['.dxf'], read: async (file) => { const res = readAama(await readText(file), null); if (!res.pieces.length) throw new Error(t('aama.in.empty', { name: file.name })); return { entities: piecesToEntities(res) }; } });
  api.files.exporter({ id: 'aama-nested', label: t('export.aama'), extension: 'dxf', mime: 'application/dxf', write: (doc) => aamaFiles(doc, { standard: 'aama', grading: 'nested' })?.dxf ?? null });
  api.files.exporter({ id: 'astm-nested', label: t('export.astm'), extension: 'dxf', mime: 'application/dxf', write: (doc) => aamaFiles(doc, { standard: 'astm', grading: 'nested' })?.dxf ?? null });

  // ---------------------------------------------------------------------------------------------- grade rule library (AP.5)
  let library = cleanLibrary(api.storage.get('ruleLibrary'));
  const saveLibrary = () => api.storage.set('ruleLibrary', library);
  const findRule = (name) => library.find((x) => x.name.toLowerCase() === String(name || '').trim().toLowerCase()) || null;
  cmd('GRADERULE', ['GRL'], async (c) => {
    for (;;) {
      const k = yes(await c.keyword(t('ask.lib', { n: library.length }), { options: [opt('S', t('opt.lib.save')), opt('A', t('opt.lib.apply')), opt('L', t('opt.lib.list')), opt('R', t('opt.remove')), opt('E', t('opt.lib.export')), opt('I', t('opt.lib.import'))], default: 'L' }));
      if (k === 'L') { if (!library.length) c.print(t('lib.empty')); for (const e of library) c.print(t('lib.line', { name: e.name, sizes: e.sizes.join(' '), base: e.base, u: e.u })); return; }
      if (k === 'S') {
        const e = await pickPiece(c, t('ask.lib.piece'));
        if (!e) return;
        const d = api.objects.dataOf(e);
        if (!d?.sizes) { c.print(t('grade.nosizes')); return; }
        const p = await c.point(t('ask.lib.point'));
        if (!p || p.option) return;
        const key = keyNear(d, toLocal(c.doc, e, p));
        const rule = ruleOf(d, key);
        if (!rule) { c.print(t('err.norule')); return; }
        const name = await ask(c, t('ask.lib.name'), '');
        if (!name) return;
        const entry = entryFrom(name, d, rule);
        if (!entry) return;
        addEntry(library, entry); saveLibrary();
        c.print(t('done.lib.save', { name: entry.name }));
        return;
      }
      if (k === 'A') {
        const name = await ask(c, t('ask.lib.which', { list: library.slice(0, 12).map((x) => x.name).join(', ') || t('none') }), '');
        const entry = findRule(name);
        if (!entry) { c.print(t('err.lib.unknown', { name })); return; }
        let e = await pickPiece(c, t('ask.lib.piece'));
        if (!e) return;
        let n = 0;
        for (;;) {
          const p = await c.point(t('ask.lib.points', { name: entry.name }), { none: true });
          if (!p || p.option) break;
          const d = api.objects.dataOf(e);
          if (!d?.sizes) { c.print(t('grade.nosizes')); break; }
          const key = keyNear(d, toLocal(c.doc, e, p));
          e = editPiece(c, 'GRADERULE', e, (x) => setRule(x, key, ruleFor(entry, x.sizes, x.u))) || e;
          n++;
        }
        if (n) c.print(t('done.lib.apply', { name: entry.name, n }));
        return;
      }
      if (k === 'R') { const name = await ask(c, t('ask.lib.which', { list: library.slice(0, 12).map((x) => x.name).join(', ') }), ''); const e = findRule(name); if (!e) { c.print(t('err.lib.unknown', { name })); return; } library = library.filter((x) => x !== e); saveLibrary(); c.print(t('done.lib.remove', { name: e.name })); return; }
      if (k === 'E') {
        if (!library.length) { c.print(t('lib.empty')); return; }
        const f2 = yes(await c.keyword(t('ask.lib.format'), { options: [opt('J', 'JSON'), opt('R', 'RUL')], default: 'J' }));
        if (f2 === 'R') { const r = toRul(library); download(t('lib.file') + '.rul', r.text, 'text/plain'); c.print(t('done.lib.rul', { n: r.written.length, left: r.left })); }
        else { download(t('lib.file') + '.json', toJson(library), 'application/json'); c.print(t('done.lib.json', { n: library.length })); }
        return;
      }
      if (k === 'I') {
        const files = await pickFiles('.json,.rul,.JSON,.RUL');
        if (!files) { c.print(t('aama.in.none')); return; }
        let added = 0;
        for (const f2 of files) {
          const text = await readText(f2);
          const got = /\.rul$/i.test(f2.name) ? { entries: fromRul(text, f2.name.replace(/\.[^.]+$/, '')), error: null } : fromJson(text);
          if (got.error) { c.print(t('err.lib.file', { name: f2.name })); continue; }
          for (const e of got.entries) { addEntry(library, e); added++; }
        }
        saveLibrary();
        c.print(t('done.lib.import', { n: added }));
        return;
      }
      return;
    }
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- markers (AP.9)
  api.objects.define('marker', { version: 1, name: t('marker.name'), draw: (m) => drawMarker(m, t) });
  api.objects.define('placed', { version: 1, name: t('placed.name'), draw: (p) => drawPlaced(p, t) });
  const isMarker = (e) => !!e && api.objects.is(e, 'marker');
  const isPlaced = (e) => !!e && api.objects.is(e, 'placed');
  const strip = (e) => { const c = { ...e }; delete c.role; delete c.size; return c; };
  /** The cut line of a piece at a size (counter-clockwise, its own frame). */
  function cutOf(data, size) {
    const d = size && data.sizes ? gradeData(data, size) : data;
    const pts = ptsOf(d.pts);
    const hasSa = !!d.sa && edges(pts, true).some((x) => widthOf(d.sa, x.start) > 0);
    return hasSa ? cutLine(pts, d.sa) : sampled(pts, true).path.slice(0, -1);
  }
  /** A marker's own frame: drawing point → marker coordinates. */
  const toMarker = (mIns) => { const c = Math.cos(-(mIns.rot || 0)), s2 = Math.sin(-(mIns.rot || 0)); return (p) => ({ x: c * (p.x - mIns.x) - s2 * (p.y - mIns.y), y: s2 * (p.x - mIns.x) + c * (p.y - mIns.y) }); };

  // after every change: a placed piece that breaks the fabric's rules goes back where it was; markers count again
  api.drawing.afterChange((doc, ops) => {
    const touched = ops.filter((o) => o.map && [o.before, o.after].some((x) => x && x.type === 'insert' && x.xd && (isPlaced(x) || isMarker(x))));
    if (!touched.length) return;
    const maps = new Set(touched.map((o) => o.map));
    for (const map of maps) {
      const markers = [...map.values()].filter(isMarker);
      if (!markers.length) continue;
      const placedNow = () => [...map.values()].filter(isPlaced);
      for (const o of touched) {
        if (o.map !== map) continue;
        const cur = map.get(o.id);
        if (!cur || !isPlaced(cur)) continue;
        const p = api.objects.dataOf(cur);
        if (!p) continue;
        const poly = worldPoly(p, cur);
        const mk = markers.find((m) => inMarker(poly, m, api.objects.dataOf(m)) !== 'out');
        if (!mk) continue;
        const m = api.objects.dataOf(mk);
        let problem = inMarker(poly, mk, m) === 'edge' ? 'edge' : grainProblem(p, cur, m, mk);
        if (!problem) {
          for (const other of placedNow()) {
            if (other.id === cur.id) continue;
            const op = api.objects.dataOf(other);
            if (op && overlaps(poly, worldPoly(op, other))) { problem = 'overlap'; break; }
          }
        }
        if (!problem) continue;
        if (o.before) doc.update(o.id, o.before, map); else doc.remove(o.id, map);
        api.print(t('marker.refused.' + problem, { name: p.name + ' ' + p.size }));
      }
      // the markers' numbers
      let changed = false;
      for (const mk of markers) {
        const m = api.objects.dataOf(mk);
        if (!m) continue;
        const loc = toMarker(mk);
        const on = [], all = [];
        for (const x of placedNow()) {
          const p = api.objects.dataOf(x);
          if (!p) continue;
          if (p.mk === m.name) all.push(x);
          const poly = worldPoly(p, x);
          if (inMarker(poly, mk, m) === 'in') on.push({ poly: poly.map(loc), area: p.area });
        }
        const st2 = stats(m, on);
        const next = { ...m, ...st2, total: Math.max(all.length, on.length) };
        if (JSON.stringify(next) !== JSON.stringify(m)) { doc.update(mk.id, api.objects.update(mk, next), map); changed = true; }
      }
      if (changed) api.objects.refresh('marker');
    }
  });

  cmd('MARKER', [], async (c) => {
    const u = unitsOfDoc(c.doc);
    const w = await c.distance(t('ask.marker.width'), { default: u === 'in' ? 60 : 1500 });
    if (!(Number(w) > 0)) return;
    const nap = yes(await c.keyword(t('ask.marker.nap'), { options: [opt('A', t('opt.nap.any')), opt('O', t('opt.nap.oneway'))], default: 'A' })) === 'O' ? 'oneway' : 'any';
    const tol = await c.number(t('ask.marker.tol'), { default: 0 });
    const at = await c.point(t('ask.marker.at'));
    if (!at || at.option) return;
    const n = c.doc.all().filter(isMarker).length + 1;
    const name = await ask(c, t('ask.marker.name'), t('marker.default', { n }));
    const data = { name, w: Number(w), nap, tol: Math.max(0, Math.min(45, Number(tol) || 0)), u, end: 0, len: 0, used: 0, eff: 0, placed: 0, total: 0 };
    let made;
    c.doc.change('MARKER', () => { made = c.doc.add({ ...api.objects.create('marker', data, {}), x: at.x, y: at.y }); });
    c.print(t('done.marker', { name }));
    return made;
  }, { noRepeat: true });

  cmd('MARKERADD', ['MADD'], async (c) => {
    const doc = c.doc;
    const mk = await pickKind(c, isMarker, t('ask.marker.pick'), t('err.notmarker'));
    if (!mk) return;
    const m = api.objects.dataOf(mk);
    const sel = new Set(api.selection());
    let src = doc.all().filter(isPiece);
    if (src.some((e) => sel.has(e.id))) src = src.filter((e) => sel.has(e.id));
    if (!src.length) { c.print(t('table.none')); return; }
    const sizes = allSizes(src.map((e) => ({ data: api.objects.dataOf(e) })));
    let q = { '': 1 };
    if (sizes.length) {
      const typed = await ask(c, t('ask.marker.qty', { list: sizes.join(' ') }), sizes.map((z) => z + ':1').join(' '));
      q = parseQuantities(typed, sizes);
      if (!q) { c.print(t('err.marker.qty', { list: sizes.join(' ') })); return; }
    }
    // the pieces wait in a row above the fabric, grain along its length; drag them on with MOVE
    const gap = m.u === 'in' ? 2 : 50;
    let x = 0, y = m.w + gap * 2, rowH = 0, n = 0;
    const maxRow = Math.max(m.w * 3, 2000 * (m.u === 'in' ? 1 / 25.4 : 1));
    c.doc.change('MARKERADD', () => {
      for (const e of src) {
        const d = api.objects.dataOf(e);
        if (!d) continue;
        for (const [size, k] of Object.entries(q)) {
          if (k <= 0 || (size && d.sizes && !d.sizes.list.includes(size))) continue;
          if (size && !d.sizes && size !== (d.size || '')) continue;
          const cut = cutOf(d, size || null);
          const p0 = placedFrom(d, size || d.size, cut);
          const copies = k * Math.max(1, d.qty ?? 1);
          for (let i = 0; i < copies; i++) {
            const mirror = !!d.pair && i % 2 === 1;
            const p = { ...p0, pair: mirror, mk: m.name };
            const rot = -p.grain;   // grain along the fabric's length
            const ins = { rot, sx: mirror ? -1 : 1, sy: 1, x: 0, y: 0 };
            const poly = worldPoly(p, ins);
            let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
            for (const pt of poly) { bx0 = Math.min(bx0, pt.x); by0 = Math.min(by0, pt.y); bx1 = Math.max(bx1, pt.x); by1 = Math.max(by1, pt.y); }
            if (x > 0 && x + (bx1 - bx0) > maxRow) { x = 0; y += rowH + gap; rowH = 0; }
            const at = { x: mk.x + x - bx0, y: mk.y + y - by0 };
            doc.add({ ...api.objects.create('placed', p, { layer: mk.layer }), ...ins, x: at.x, y: at.y });
            x += (bx1 - bx0) + gap; rowH = Math.max(rowH, by1 - by0); n++;
          }
        }
      }
    });
    c.print(t('done.marker.add', { n, name: m.name }));
  }, { noRepeat: true });

  // automatic nesting (0.6 LC.17): the marker's own pieces laid on the fabric by the shared engine (lib/nest/nest.js), with
  // the fabric's rules — grain along its length within the tolerance, turned round only on fabric that may be turned, the
  // mirrored half of a pair kept mirrored. Rest = pieces already on the fabric stay where they are; All = start over.
  cmd('MARKERNEST', ['MNEST'], async (c) => {
    const doc = c.doc;
    const mk = await pickKind(c, isMarker, t('ask.marker.pick'), t('err.notmarker'));
    if (!mk) return;
    const m = api.objects.dataOf(mk);
    const own = doc.all().filter((x) => isPlaced(x) && api.objects.dataOf(x)?.mk === m.name);
    if (!own.length) { c.print(t('marker.nest.none', { name: m.name })); return; }
    const k = yes(await c.keyword(t('ask.marker.nest'), { options: [opt('R', t('opt.nest.rest')), opt('A', t('opt.nest.all'))], default: 'R' }));
    if (!k) return;
    const gap = await c.distance(t('ask.marker.gap'), { default: 0 });
    if (gap == null || !(Number(gap) >= 0)) return;
    const loc = toMarker(mk);
    const isOn = (x) => inMarker(worldPoly(api.objects.dataOf(x), x), mk, m) === 'in';
    const move = k === 'A' ? own : own.filter((x) => !isOn(x));
    if (!move.length) { c.print(t('marker.nest.all_on', { name: m.name })); return; }
    const moving = new Set(move.map((x) => x.id));
    // everything else on the fabric stays, as an obstacle (the marker's own frame)
    const obstacles = doc.all().filter((x) => isPlaced(x) && !moving.has(x.id) && isOn(x)).map((x) => [worldPoly(api.objects.dataOf(x), x).map(loc)]);
    const parts = move.map((x) => {
      const p = api.objects.dataOf(x);
      return { id: x.id, name: (p.name + ' ' + (p.size || '')).trim(), loops: [p.cut.map(([px, py]) => ({ x: px, y: py }))], qty: 1, grain: p.grain, turn: m.nap !== 'oneway', mirrored: (x.sx ?? 1) * (x.sy ?? 1) < 0 };
    });
    c.print(t('marker.nest.busy', { n: parts.length }));
    const r = nest(parts, { h: m.w, obstacles }, { spacing: Number(gap), grainTol: m.tol || 0, step: 0, res: m.w / 750, timeLimit: 3000 });
    const cr = Math.cos(mk.rot || 0), sr = Math.sin(mk.rot || 0);
    doc.change('MARKERNEST', () => {
      for (const pl of r.placed) {
        const x = doc.get(pl.id);
        if (!x) continue;
        doc.update(x.id, { ...x, rot: (mk.rot || 0) + pl.rot, sx: pl.mirror ? -1 : 1, sy: 1, x: mk.x + cr * pl.x - sr * pl.y, y: mk.y + sr * pl.x + cr * pl.y });
      }
    });
    for (const u of r.unplaced) c.print(t('marker.nest.big', { name: u.name }));
    const m2 = api.objects.dataOf(doc.get(mk.id)) || m;
    const len = m.u === 'in' ? (+(m2.len || 0).toFixed(2)) + ' in' : (+((m2.len || 0) / 1000).toFixed(3)) + ' m';
    c.print(t('done.marker.nest', { n: r.placed.length, name: m.name, len, eff: ((m2.eff || 0) * 100).toFixed(1) }));
  }, { noRepeat: true });

  async function pickKind(c, test, prompt, bad) {
    const sel = api.selection().map((id) => c.doc.get(id)).filter(test);
    if (sel.length === 1) return sel[0];
    for (;;) {
      const r = await c.entity(prompt, { none: true });
      if (!r || r.option) return null;
      const e = c.doc.get(r.id);
      if (test(e)) return e;
      c.print(bad);
    }
  }

  /** The pieces on a marker, as pattern pieces (net: the cut line is the outline), and the fabric's outline. */
  function markerContents(doc, mk) {
    const m = api.objects.dataOf(mk);
    const out = [];
    for (const x of doc.entities.values()) {
      if (!isPlaced(x)) continue;
      const p = api.objects.dataOf(x);
      if (!p || inMarker(worldPoly(p, x), mk, m) !== 'in') continue;
      const L = 100 * (p.u === 'in' ? 1 / 25.4 : 1);
      const b = p.cut.reduce((a2, q2) => ({ x: a2.x + q2[0] / p.cut.length, y: a2.y + q2[1] / p.cut.length }), { x: 0, y: 0 });
      out.push({ e: x, p, data: { ...emptyPiece(p.u), name: p.name, style: p.style, size: p.size, pts: p.cut.map(([px, py]) => [px, py, 0]), grain: { a: [b.x - Math.cos(p.grain) * L / 2, b.y - Math.sin(p.grain) * L / 2], b: [b.x + Math.cos(p.grain) * L / 2, b.y + Math.sin(p.grain) * L / 2], s: 'both' } }, place: placeOf(x) });
    }
    const len = Math.max(m.len || 0, 1);
    const c2 = Math.cos(mk.rot || 0), s2 = Math.sin(mk.rot || 0);
    const P = (px, py) => ({ x: mk.x + c2 * px - s2 * py, y: mk.y + s2 * px + c2 * py });
    return { m, items: out, fabric: [P(0, 0), P(len, 0), P(len, m.w), P(0, m.w)] };
  }

  cmd('MARKEROUT', [], async (c) => {
    const mk = await pickKind(c, isMarker, t('ask.marker.pick'), t('err.notmarker'));
    if (!mk) return;
    const { m, items, fabric } = markerContents(c.doc, mk);
    if (!items.length) { c.print(t('marker.empty', { name: m.name })); return; }
    const k = yes(await c.keyword(t('ask.marker.out'), { options: [opt('D', 'DXF'), opt('P', 'PDF')], default: 'D' }));
    const base = (m.name || 'Marker').replace(/[\\/:*?"<>|]+/g, '-');
    if (k === 'P') {
      const bytes = await markerPdf(c.doc, mk, items, fabric, m);
      downloadBytes(base + '.pdf', bytes, 'application/pdf');
      c.print(t('done.marker.pdf', { name: base }));
      return;
    }
    const w2 = writeAama(items.map((x) => ({ data: x.data, place: x.place })), { standard: 'aama', grading: 'none', style: m.name, extra: [{ layer: '0', closed: true, pts: fabric }] });
    download(base + '.dxf', w2.dxf, 'application/dxf');
    c.print(t('done.marker.dxf', { name: base, n: items.length }));
  }, { noRepeat: true, keepSelection: true });

  /** The marker at 1:1 on one page: the fabric, the pieces on it, the numbers. */
  async function markerPdf(doc, mk, items, fabric, m) {
    const k = m.u === 'in' ? 25.4 : 1;
    const pd = new Doc();
    const ents = [];
    pd.blocks.set('*M', { name: '*M', base: { x: 0, y: 0 }, entities: drawMarker(m, t).map(strip) });
    ents.push({ type: 'insert', block: '*M', x: mk.x, y: mk.y, rot: mk.rot || 0, sx: 1, sy: 1, layer: '0', id: 1 });
    items.forEach((it, i) => { const name = '*P' + i; pd.blocks.set(name, { name, base: { x: 0, y: 0 }, entities: drawPlaced(it.p, t).map(strip) }); ents.push({ type: 'insert', block: name, x: it.e.x, y: it.e.y, rot: it.e.rot || 0, sx: it.e.sx ?? 1, sy: it.e.sy ?? 1, layer: '0', id: i + 2 }); });
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const q of fabric) { x0 = Math.min(x0, q.x); y0 = Math.min(y0, q.y); x1 = Math.max(x1, q.x); y1 = Math.max(y1, q.y); }
    const margin = 10, pad = (m.u === 'in' ? 1.5 : 40) * k;
    const W = (x1 - x0) * k + 2 * margin, H = (y1 - y0) * k + 2 * margin + pad;
    const list = displayList(pd, { w: W, h: H, name: m.name, views: [{ clip: null, m: [k, 0, 0, k, margin - x0 * k, margin + pad - y0 * k], entities: ents }] }, { mono: true });
    const r = await toPdfPages([list], { title: m.name, names: [m.name], pen: 0.35 });
    return r.bytes;
  }

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['PIECE', 'ui.piece', 'bi-bounding-box'], ['NOTCH', 'ui.notch', 'bi-caret-down'], ['GRAIN', 'ui.grain', 'bi-arrow-down-up'], ['DRILL', 'ui.drill', 'bi-plus-circle'],
    ['SEAM', 'ui.seam'], ['GRADE', 'ui.grade'], ['GRADERULE', 'ui.lib'], ['WALK', 'ui.walk'], ['SEAMLENGTH', 'ui.len'], ['PIECETABLE', 'ui.table'], ['PATTERNPRINT', 'ui.print'], ['AAMAOUT', 'ui.aamaout'], ['AAMAIN', 'ui.aamain'], ['MARKER', 'ui.marker'], ['MARKERADD', 'ui.markeradd'], ['MARKERNEST', 'ui.markernest'], ['MARKEROUT', 'ui.markerout'], ['BUTTON', 'ui.button'], ['BUTTONHOLE', 'ui.hole'], ['FOLDLINE', 'ui.fold'], ['INTLINE', 'ui.line']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const n of bar) n?.remove?.(); bar = null; }
    if (!on) return;
    const g = api.toolbar.group({ id: 'apparel', label: t('ui.group'), tools: ACTIONS.filter((a) => a[2]).map(([command, label, icon]) => ({ id: command.toLowerCase(), label: t(label), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) });
    bar = [g, ...ACTIONS.filter((a) => !a[2]).map(([command, label]) => api.toolbar.menuItem({ group: 'apparel', command, label: t(label) }))];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  let panelBody = api.ui.panelSection({ id: 'apparel', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; if (panelBody) renderPanel(panelBody); }, 300); });
    api.onDeactivate(off);
  }
  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    const facts = mk('p', 'ap-facts', api.doc ? t('panel.facts', { n: countPieces(api.doc) }) : '');
    const acts = mk('div', 'ap-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';   // add-ons bring no stylesheet: layout only
    for (const [command, label] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc ap-act', t(label));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-ap-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(facts, acts);
  }

  // ---------------------------------------------------------------------------------------------- Grading panel (AP.4)
  // The grade rule table of the selected piece: one point at a time, a row per size (x, y moved from the base). Copy, Paste,
  // Flip X / Y, Clear, and Fill between (the points between two points follow in proportion). Every change is one undo step.
  const grading = { id: null, key: 'p0', to: '' };
  let gradeBody = api.ui.panelSection({ id: 'apparel-grading', title: t('ui.grading'), render: (el) => renderGrading(el) });
  if (gradeBody && typeof document !== 'undefined') {
    // CadCraft has no selection event: look again after clicks and keys (cheap: one id)
    let timer = 0;
    const look = () => { clearTimeout(timer); timer = setTimeout(() => { const id = selectedPiece()?.id ?? null; if (id !== grading.id) renderGrading(gradeBody); }, 120); };
    document.addEventListener('pointerup', look, true);
    document.addEventListener('keyup', look, true);
    const off = api.doc?.on ? api.doc.on(() => look()) : () => {};
    api.onDeactivate(() => { document.removeEventListener('pointerup', look, true); document.removeEventListener('keyup', look, true); off(); clearTimeout(timer); });
  }
  function selectedPiece() { const s = api.selection().map((id) => api.doc?.get(id)).filter(isPiece); return s.length === 1 ? s[0] : null; }
  function changePiece(label, e, fn) {
    const d = api.objects.dataOf(e);
    if (!d) return;
    const next = fn(structuredClone(d));
    if (!next) return;
    api.doc.change(label, () => api.doc.update(e.id, api.objects.update(api.doc.get(e.id), next)));
    api.redraw();
    renderGrading(gradeBody);
  }
  function keyLabel(d, k) {
    let m;
    if ((m = /^p(\d+)$/.exec(k))) return t(d.pts[+m[1]]?.[2] ? 'gkey.curve' : 'gkey.corner', { n: +m[1] + 1 });
    if ((m = /^l(\d+)\.(\d+)$/.exec(k))) return t('gkey.line', { n: +m[1] + 1, p: +m[2] + 1 });
    if ((m = /^([dbh])(\d+)$/.exec(k))) return t('gkey.' + m[1], { n: +m[2] + 1 });
    return t('gkey.' + k);
  }
  function renderGrading(el) {
    if (!el) return;
    const D = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = D.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    const btn = (label, fn, attr) => { const b = mk('button', 'btn-line btn-sm-cc', label); b.type = 'button'; b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4'; b.setAttribute('data-ap-grade', attr); b.addEventListener('click', fn); return b; };
    const e = selectedPiece();
    grading.id = e?.id ?? null;
    if (!e) { el.replaceChildren(mk('p', 'ap-hint', t('grading.pick'))); return; }
    const d = api.objects.dataOf(e);
    if (!d) { el.replaceChildren(mk('p', 'ap-hint', t('err.newer'))); return; }
    const out = [];
    // size range
    const sizes = mk('input'); sizes.type = 'text'; sizes.value = d.sizes ? d.sizes.list.join(' ') : ''; sizes.placeholder = 'XS S M L XL'; /* i18n-ignore: size codes */ sizes.setAttribute('data-ap-sizes', ''); sizes.style.width = '100%';
    const base = mk('select', 'select-cc'); base.setAttribute('data-ap-base', '');
    for (const s of d.sizes ? d.sizes.list : []) { const o = mk('option', '', s); o.value = s; base.append(o); }
    if (d.sizes) base.value = d.sizes.base;
    const setSizes = () => {
      const list = parseSizes(sizes.value);
      if (!list.length) return;
      const b = list.includes(base.value) ? base.value : list[Math.floor((list.length - 1) / 2)];
      const doc = api.doc;
      doc.change('GRADE', () => { for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) for (const [id, x] of [...map]) { if (!isPiece(x)) continue; const xd = api.objects.dataOf(x); if (!xd || (id !== e.id && (!d.style || xd.style !== d.style))) continue; doc.update(id, api.objects.update(x, withSizes(xd, { list, base: b }).data), map); } });
      api.redraw(); renderGrading(el);
    };
    sizes.addEventListener('change', setSizes); base.addEventListener('change', setSizes);
    const lab = (text, input) => { const l = mk('label', 'shell-row'); l.append(mk('span', '', text), input); return l; };
    out.push(lab(t('grading.sizes'), sizes));
    if (!d.sizes) { out.push(mk('p', 'ap-hint', t('grade.nosizes'))); el.replaceChildren(...out); return; }
    out.push(lab(t('grading.base'), base));
    const nest = mk('input'); nest.type = 'checkbox'; nest.checked = !!d.nest; nest.setAttribute('data-ap-nest', '');
    nest.addEventListener('change', () => changePiece('GRADE', e, (x) => { if (nest.checked) x.nest = true; else delete x.nest; return x; }));
    out.push(lab(t('grading.nest'), nest));
    // the point and its rule
    const keys = gripsOf(d).map((g) => g.key);
    if (!keys.includes(grading.key)) grading.key = keys[0];
    const pick = mk('select', 'select-cc'); pick.setAttribute('data-ap-point', '');
    for (const k of keys) { const o = mk('option', '', (ruleOf(d, k) ? '● ' : '') + keyLabel(d, k)); o.value = k; pick.append(o); }
    pick.value = grading.key;
    pick.addEventListener('change', () => { grading.key = pick.value; renderGrading(el); });
    out.push(lab(t('grading.point'), pick));
    const rule = ruleOf(d, grading.key) || uniform(d.sizes, [0, 0]);
    const table = mk('table', 'ap-rules'); table.style.cssText = 'width:100%;border-collapse:collapse;font-size:0.8125rem';
    const head = mk('tr'); for (const h of [t('grading.size'), 'x', 'y']) head.append(mk('th', '', h)); table.append(head);
    d.sizes.list.forEach((s, i) => {
      const tr = mk('tr'); tr.append(mk('td', '', s + (s === d.sizes.base ? ' ' + t('grading.isbase') : '')));
      for (const axis of [0, 1]) {
        const td = mk('td'); const inp = mk('input'); inp.type = 'text'; inp.inputMode = 'decimal'; inp.style.width = '4.5rem'; inp.value = String(+rule[2 * i + axis].toFixed(3));
        inp.setAttribute('data-ap-cell', s + ':' + 'xy'[axis]);
        if (s === d.sizes.base) inp.disabled = true;
        inp.addEventListener('change', () => { const v = Number(inp.value.replace(',', '.')); if (!Number.isFinite(v)) { inp.value = String(rule[2 * i + axis]); return; } const r2 = rule.slice(); r2[2 * i + axis] = v; changePiece('GRADE', e, (x) => setRule(x, grading.key, r2)); });
        td.append(inp); tr.append(td);
      }
      table.append(tr);
    });
    out.push(table);
    const acts = mk('div', 'ap-actions'); acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0';
    acts.append(
      btn(t('opt.copy'), () => { gradeClip = { sizes: [...d.sizes.list], rule: rule.slice() }; api.storage.set('gradeClip', gradeClip); api.print(t('done.grade.copy', { key: keyLabel(d, grading.key) })); }, 'copy'),
      btn(t('opt.paste'), () => { const r2 = fitClip(d); if (!r2) { api.print(t('err.noclip')); return; } changePiece('GRADE', e, (x) => setRule(x, grading.key, r2)); }, 'paste'),
      btn(t('grading.flipx'), () => changePiece('GRADE', e, (x) => setRule(x, grading.key, flip(rule, 'x'))), 'flipx'),
      btn(t('grading.flipy'), () => changePiece('GRADE', e, (x) => setRule(x, grading.key, flip(rule, 'y'))), 'flipy'),
      btn(t('grading.clear'), () => changePiece('GRADE', e, (x) => setRule(x, grading.key, null)), 'clear'));
    out.push(acts);
    // the grade rule library: apply a saved rule here, or save this one by name
    const libRow = mk('div'); libRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center;margin:0 0 0.5rem';
    const libSel = mk('select', 'select-cc'); libSel.setAttribute('data-ap-lib', '');
    const o0 = mk('option', 'select-placeholder', t('grading.lib.choose')); o0.value = ''; libSel.append(o0);
    for (const x of library) { const o = mk('option', '', x.name); o.value = x.name; libSel.append(o); }
    const libName = mk('input'); libName.type = 'text'; libName.placeholder = t('grading.lib.name'); libName.setAttribute('data-ap-libname', ''); libName.style.width = '9rem';
    libRow.append(libSel,
      btn(t('opt.lib.apply'), () => { const x = findRule(libSel.value); if (!x) return; changePiece('GRADERULE', e, (y) => setRule(y, grading.key, ruleFor(x, y.sizes, y.u))); }, 'lib-apply'),
      libName,
      btn(t('opt.lib.save'), () => { const n = libName.value.trim(); if (!n) return; const x = entryFrom(n, d, rule); if (!x) return; addEntry(library, x); saveLibrary(); api.print(t('done.lib.save', { name: x.name })); renderGrading(el); }, 'lib-save'));
    out.push(libRow);
    // fill between this point and another (sew line points only)
    if (/^p\d+$/.test(grading.key)) {
      const to = mk('select', 'select-cc'); to.setAttribute('data-ap-to', '');
      for (const k of keys.filter((x) => /^p\d+$/.test(x) && x !== grading.key)) { const o = mk('option', '', keyLabel(d, k)); o.value = k; to.append(o); }
      if (grading.to && [...to.options].some((o) => o.value === grading.to)) to.value = grading.to;
      to.addEventListener('change', () => { grading.to = to.value; });
      const row = mk('div'); row.style.cssText = 'display:flex;gap:0.25rem;align-items:center';
      row.append(mk('span', '', t('grading.between')), to, btn(t('grading.fill'), () => { const fill = proportional(d, grading.key, to.value); changePiece('GRADE', e, (x) => { let y = x; for (const [k, r2] of Object.entries(fill)) y = setRule(y, k, r2); return y; }); }, 'fill'));
      out.push(row);
    }
    el.replaceChildren(...out);
  }

  api.ui.settingsSection({ id: 'apparel', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, DEFAULTS); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument;
    const row = (label, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = label; l.append(s, input); fs.append(l); };
    const select = (key, choices) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-ap-setting', key);
      for (const [v, l] of choices) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(settings[key]);
      s.addEventListener('change', () => { settings[key] = s.value === 'true' ? true : s.value === 'false' ? false : s.value; save(); });
      return s;
    };
    const text = (key) => { const i = d.createElement('input'); i.type = 'text'; i.value = String(settings[key] ?? ''); i.placeholder = fmt(sizesFor(unitsOfDoc(api.doc)).sa, unitsOfDoc(api.doc)); i.setAttribute('data-ap-setting', key); i.addEventListener('change', () => { settings[key] = i.value.trim(); save(); }); return i; };
    const tb = select('toolbar', [['false', t('off')], ['true', t('on')]]);
    tb.addEventListener('change', () => showToolbar(settings.toolbar));
    row(t('set.toolbar'), tb);
    row(t('set.sa'), text('sa'));
    row(t('set.notch'), select('notch', KINDS.map((k) => [k, t('notch.' + k)])));
    row(t('set.grain'), select('grain', ARROWS.map((k) => [k, t('arrow.' + k)])));
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'apparel', label: t('props.section'), types: ['insert'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length || !ents.every(isPiece)) return [];
    const field = (key, kind, label, get, put, extra = {}) => ({ key, kind, label: t(label), get: (e) => { const d = api.objects.dataOf(e); return d ? get(d) : ''; }, set: (e, v) => { const d = api.objects.dataOf(e); if (!d) return e; return api.objects.update(e, put(d, v) || d); }, ...extra });
    const txt = (key) => field(key, 'text', 'prop.' + key, (d) => d[key] || '', (d, v) => ((d[key] = String(v ?? '').slice(0, 200)), d));
    const out = [txt('name'), txt('style'), txt('size'), field('qty', 'int', 'prop.qty', (d) => d.qty ?? 1, (d, v) => ((d.qty = Math.max(0, Math.min(999, Math.round(Number(v) || 0)))), d), { min: 0 }),
      txt('fabric'), txt('cat'), field('pair', 'bool', 'prop.pair', (d) => !!d.pair, (d, v) => ((d.pair = !!v), d)),
      field('grain', 'choice', 'prop.grain', (d) => d.grain?.s || 'none', (d, v) => { if (!d.grain) d.grain = autoGrain(d, v); else d.grain.s = ARROWS.includes(v) ? v : 'both'; return d; }, { choices: () => ARROWS.map((k) => [k, t('arrow.' + k)]) }),
      field('sa', 'len', 'prop.sa', (d) => d.sa?.w || 0, (d, v) => { const w = Math.max(0, Number(v) || 0); d.sa = w > 0 || Object.keys(d.sa?.e || {}).length ? { w, e: d.sa?.e || {}, k: d.sa?.k || {} } : null; return d; }, { min: 0 })];
    if (ents.length === 1) out.push({ key: 'counts', kind: 'ro', label: t('prop.counts'), get: (e) => { const d = api.objects.dataOf(e); return d ? t('prop.counts.v', { notches: d.notches.length, drills: d.drills.length, lines: d.lines.length }) : ''; } });
    return out;
  }

  api.log('Apparel ready');   // i18n-ignore (developer log)
}

/** A length for prompts: mm with one decimal, inches with three. */
export function fmt(v, u) { return u === 'in' ? String(+Number(v).toFixed(3)) : String(+Number(v).toFixed(1)); }
/** A measured length: millimetres to one decimal, inches in fractions to 1/16 (CadCraft's units.js). */
export function fmtLen(v, u) { return u === 'in' ? formatLength(v, { lunits: 5, prec: 4 }) + ' in' : (Math.abs(v) < 0.05 ? '0' : Number(v).toFixed(1)) + ' mm'; }

export { cleanPiece, widthOf, RULES };
