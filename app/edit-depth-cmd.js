/* SPDX-License-Identifier: Apache-2.0 */
/**
 * edit-depth-cmd.js — editing depth (1.0 ORS.30). The engines are in edit-depth.js.
 *   EXTRIM          pick one cutting edge, then a side: everything crossing the edge is trimmed on that side (the pieces that would go
 *                   follow the pointer as a preview)
 *   OFFSETGAPTYPE   0 extend, 1 fillet, 2 chamfer: how OFFSET closes the corner gaps of a polyline it moves outward
 *   _MEAQUICK       hidden: MEASUREGEOM's Quick option (distances and angles round the pointer, live)
 * COPY's Array option and OFFSET's use of the setting are in commands.js (marked ORS.30).
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { entityBounds, validBounds } from './geom.js';
import { formatLength, unitsOf } from './units.js';
import { activeUcs } from './ucs.js';
import { extrimPlan, sideOf, quickMeasure, quickGhosts, EXTRIM_EDGES } from './edit-depth.js';

const def = commandRegistry.add;
const QUICK_MAX = 8000;

def('EXTRIM', [], async (c) => {
  const doc = c.doc;
  let edge;
  for (;;) {
    const pick = await c.entity(t('editdepth.extrim.edge'));
    if (!pick) return;
    edge = doc.get(pick.id);
    if (edge && EXTRIM_EDGES.has(edge.type)) break;
    c.print(t('editdepth.extrim.edge_type'));
  }
  c.host.setSelection(new Set([edge.id]));
  const pool = () => doc.all().filter((e) => e.id !== edge.id && doc.visible(e) && doc.editable(e));
  let last = null;   // the preview's plan, for the side the pointer is on
  c.preview((cur) => { const side = sideOf(edge, cur); if (!last || last.side !== side) last = { side, plan: extrimPlan(pool(), edge, cur, doc.blocks) }; return last.plan.flatMap((p) => p.cut).slice(0, 2000); });
  const p = await c.point(t('editdepth.extrim.side'));
  c.preview(null);
  c.host.setSelection(new Set());
  if (!p || p.option) return;
  const plan = extrimPlan(pool(), edge, p, doc.blocks);
  if (!plan.length) { c.print(t('editdepth.extrim.nothing')); return; }
  doc.change('EXTRIM', () => {
    for (const { id, keep } of plan) {
      if (!doc.get(id)) continue;
      if (!keep.length) { doc.remove(id); continue; }
      keep.forEach((piece, i) => { const q = { ...piece }; delete q.id; if (i === 0) doc.update(id, { ...q, id }); else doc.add(q); });
    }
  });
  c.print(t('editdepth.extrim.done', { n: plan.length }));
}, { help: () => t('editdepth.extrim.help') });

def('OFFSETGAPTYPE', [], async (c) => {
  const n = await c.number(t('editdepth.gap.ask'), { default: c.engine.offsetGapType | 0 });
  if (n !== 0 && n !== 1 && n !== 2) { c.print(t('editdepth.gap.range')); return; }
  c.engine.offsetGapType = n;
  c.print(t('editdepth.gap.set.' + n));
}, { noRepeat: true, keepSelection: true, help: () => t('editdepth.gap.help') });

/** MEASUREGEOM › Quick: distances to what lies right, above, left and below the pointer, and the angles where those meet. */
def('_MEAQUICK', [], async (c) => {
  const doc = c.doc;
  const ua = () => activeUcs(doc)?.ang || 0;
  const fmt = (v) => formatLength(v, unitsOf(doc.meta));
  const near = () => {
    const w = c.host.viewExtents?.() || null;
    let list = doc.all().filter((e) => doc.visible(e));
    if (w) list = list.filter((e) => { const b = entityBounds(e, doc.blocks); return !validBounds(b) || !(b.maxX < w.minX || b.minX > w.maxX || b.maxY < w.minY || b.minY > w.maxY); });
    return { list, w };
  };
  let cache = null;
  const scene = () => { if (!cache || cache.v !== doc.version) cache = { v: doc.version, ...near() }; return cache; };
  if (scene().list.length > QUICK_MAX) c.print(t('editdepth.quick.many', { max: QUICK_MAX }));
  const measure = (cur) => { const s = scene(); return quickMeasure(s.list.slice(0, QUICK_MAX), cur, { blocks: doc.blocks, ang: ua() }); };
  c.print(t('editdepth.quick.hint'));
  c.preview((cur) => { const s = scene(); const h = s.w ? Math.max(s.w.maxY - s.w.minY, 1e-9) / 45 : 1; return quickGhosts(measure(cur), cur, { fmt, h, ang: ua() }); });
  for (;;) {
    cache = null;
    const p = await c.point(t('editdepth.quick.point'), { none: true });
    if (!p || p.option) break;
    const m = measure(p), H = m.hits, v = (k) => (H[k] ? fmt(H[k].d) : t('editdepth.quick.open'));
    c.print(t('editdepth.quick.result', { left: v('left'), right: v('right'), up: v('up'), down: v('down') }));
    if (m.spanX !== null || m.spanY !== null) c.print(t('editdepth.quick.span', { w: m.spanX !== null ? fmt(m.spanX) : t('editdepth.quick.open'), h: m.spanY !== null ? fmt(m.spanY) : t('editdepth.quick.open') }));
    for (const a of m.angles) c.print(t('editdepth.quick.angle', { a: String(Number((a.a * 180 / Math.PI).toFixed(4))), where: t('editdepth.quick.dir.' + a.between[0]) + ' / ' + t('editdepth.quick.dir.' + a.between[1]) }));
  }
  c.preview(null);
}, { hidden: true, noRepeat: true });
