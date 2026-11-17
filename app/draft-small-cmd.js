/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draft-small-cmd.js — the small drafting commands (1.0 ORS.9). The engines are in draft-small.js.
 *   DIVIDE (DIV)        marks that cut a line, arc, circle, polyline, spline or ellipse into equal parts: points, or a Block
 *   MEASURE (ME)        a mark every given distance along it, from the end nearest the pick: points, or a Block
 *   BOUNDARY (BO)       a closed polyline round the area that holds a picked point (Islands on / off)
 *   BLEND               a spline between the picked ends of two open curves (CONtinuity: Tangent or Smooth)
 *   CHSPACE             move objects between the sheet and the model through a viewport, scaled so they look the same
 *   PASTEBLOCK          paste what was copied as one block
 *   BLOCKREPLACE        every reference to one block becomes a reference to another
 *   MINSERT             references to a block in rows and columns
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { deg } from './geom.js';
import { basePoint, pastePreview } from './clipboard.js';
import { txEntity, mTranslate } from './geom.js';
import {
  walker, dividePoints, measurePoints, markEntities, boundaryPolys, endInfo, blendCurve, chspaceEntities, chspaceScale,
  planBlockReplace, applyBlockReplace, pasteAsBlock, minsertRefs, findBlock, MAX_MARKS, MINSERT_MAX,
} from './draft-small.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);
const num = (n) => String(Number(Number(n).toFixed(6)));

/** DIVIDE and MEASURE ask the same things: the object, then a number (or Block: its name, and whether it turns with the curve). */
async function marksAlong(c, measure) {
  const pick = await c.entity(t(measure ? 'dsmall.measure.pick' : 'dsmall.divide.pick'));
  if (!pick) return;
  const e = c.doc.get(pick.id);
  if (!walker(e)) { c.print(t('dsmall.marks.type')); return; }
  let block = null, align = true;
  for (;;) {
    const ask = measure ? c.distance : c.number;
    const v = await ask(t(measure ? 'dsmall.measure.length' : 'dsmall.divide.count'), { options: block ? [] : [opt('B', 'Block')] });
    if (v && v.option === 'B') {
      const name = findBlock(c.doc, await c.string(t('dsmall.marks.block')));
      if (!name) { c.print(t('dsmall.marks.noblock')); continue; }
      block = name;
      align = kw(await c.keyword(t('dsmall.marks.align'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'Y' }), 'Y') !== 'N';
      continue;
    }
    if (typeof v !== 'number') return;
    const pts = measure ? measurePoints(e, v, pick.point) : dividePoints(e, v);
    if (pts.error) { c.print(t('dsmall.marks.err.' + pts.error, { max: MAX_MARKS })); if (pts.error === 'type') return; continue; }
    const made = markEntities(pts, { block, blk: block ? c.doc.blocks.get(block) : null, align });
    c.doc.change(measure ? 'MEASURE' : 'DIVIDE', () => { for (const m of made) c.doc.add(m); });
    c.print(t(block ? 'dsmall.marks.done.block' : 'dsmall.marks.done', { n: made.length, block: block || '' }));
    return;
  }
}
def('DIVIDE', ['DIV'], (c) => marksAlong(c, false), { help: () => t('dsmall.divide.help') });
def('MEASURE', ['ME'], (c) => marksAlong(c, true), { help: () => t('dsmall.measure.help') });

def('BOUNDARY', ['BO', 'BPOLY'], async (c) => {
  const E = c.engine;
  let made = 0;
  for (;;) {
    const p = await c.point(t('dsmall.boundary.pick'), { none: true, options: [opt('I', 'Islands')] });
    if (!p) break;
    if (p.option === 'I') {
      E.boundaryIslands = kw(await c.keyword(t('dsmall.boundary.islands'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: E.boundaryIslands === false ? 'N' : 'Y' }), 'Y') !== 'N';
      continue;
    }
    const within = c.host.viewExtents?.() || null;
    const r = boundaryPolys(c.doc.all().filter((e) => c.doc.visible(e)), p, c.doc.blocks, { within, islands: E.boundaryIslands !== false });
    if (r.error) { c.print(t('dsmall.boundary.err.' + r.error)); continue; }
    c.doc.change('BOUNDARY', () => { for (const poly of r.polys) c.doc.add(poly); });
    made += r.polys.length;
    c.print(t('dsmall.boundary.made', { n: r.polys.length }));
  }
  if (made) c.print(t('dsmall.boundary.done', { n: made }));
}, { help: () => t('dsmall.boundary.help') });

def('BLEND', [], async (c) => {
  const E = c.engine;
  let a;
  for (;;) {
    c.print(t(E.blendSmooth ? 'dsmall.blend.now.smooth' : 'dsmall.blend.now.tangent'));
    a = await c.entity(t('dsmall.blend.first'), { options: [opt('CON', 'CONtinuity')] });
    if (!a) return;
    if (a.option === 'CON') {
      E.blendSmooth = kw(await c.keyword(t('dsmall.blend.continuity'), { options: [opt('T', 'Tangent'), opt('S', 'Smooth')], default: E.blendSmooth ? 'S' : 'T' }), 'T') === 'S';
      continue;
    }
    if (!endInfo(c.doc.get(a.id), a.point)) { c.print(t('dsmall.blend.err.type')); continue; }
    break;
  }
  const ea = c.doc.get(a.id);
  c.host.setSelection(new Set([a.id]));
  for (;;) {
    const b = await c.entity(t('dsmall.blend.second'));
    if (!b) return;
    const eb = c.doc.get(b.id);
    const sp = blendCurve(ea, a.point, eb, b.point, { smooth: !!E.blendSmooth });
    if (sp.error) { c.print(t('dsmall.blend.err.' + sp.error)); continue; }
    c.doc.change('BLEND', () => c.doc.add({ ...sp, layer: c.doc.current.layer }));
    c.host.setSelection(new Set());
    return;
  }
}, { help: () => t('dsmall.blend.help') });

def('CHSPACE', [], async (c) => {
  const doc = c.doc;
  const entered = c.host.viewportEntered?.() || null;
  let vp = entered, lay, toModel;
  if (entered) {   // working on the model through a viewport: the objects go to that sheet
    lay = doc.layouts.find((l) => l.entities.get(entered.id) === entered) || null;
    if (!lay) { c.print(t('dsmall.chspace.sheet_first')); return; }
    toModel = false;
  } else {
    lay = doc.layout;
    if (!lay) { c.print(t('dsmall.chspace.sheet_first')); return; }
    toModel = true;
  }
  const ids = await c.select(t(toModel ? 'dsmall.chspace.select.sheet' : 'dsmall.chspace.select.model'));
  const ents = [...ids].map((id) => doc.get(id)).filter((e) => e && e.type !== 'viewport' && doc.editable(e));
  if (!ents.length) { c.print(t('dsmall.chspace.none')); return; }
  if (toModel) {
    const vps = doc.all().filter((e) => e.type === 'viewport' && e.on !== false && e.s > 0);
    if (!vps.length) { c.print(t('dsmall.chspace.no_viewport')); return; }
    vp = vps.length === 1 ? vps[0] : null;
    while (!vp) {
      const p = await c.point(t('dsmall.chspace.pick_viewport'));
      vp = c.host.viewportAt?.(p) || vps.find((v) => Math.abs(p.x - v.x) <= v.w / 2 && Math.abs(p.y - v.y) <= v.h / 2) || null;
      if (vp && (vp.on === false || !(vp.s > 0))) vp = null;
      if (!vp) c.print(t('dsmall.chspace.not_inside'));
    }
  }
  const moved = chspaceEntities(ents, vp, toModel);
  const from = toModel ? lay.entities : doc.model, to = toModel ? doc.model : lay.entities;
  const made = doc.change('CHSPACE', () => {
    for (const e of ents) doc.remove(e.id, from);
    return moved.map((e) => { const k = { ...e }; delete k.id; return doc.add(k, to).id; });
  });
  c.host.setSelection(new Set());
  c.print(t(toModel ? 'dsmall.chspace.done.model' : 'dsmall.chspace.done.sheet', { n: made.length, scale: num(chspaceScale(vp, toModel)), sheet: lay.name }));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('dsmall.chspace.help') });

def('PASTEBLOCK', [], async (c) => {
  const got = c.engine.clipboard.get();
  if (got.error) { c.print(t('cmd.paste.nothing', { why: got.error })); return; }
  if (!got.clip) { c.print(t('cmd.copybase.clipboard_empty_copy_objects')); return; }
  const clip = got.clip;
  const base = basePoint(clip, c.host.settings?.pasteBase);
  const look = pastePreview(clip);
  c.engine.lastPoint = base;
  c.preview((cur) => look.map((e) => txEntity(e, mTranslate(cur.x - base.x, cur.y - base.y))));
  const p = await c.point(t('cmd.pasteclip.specify_insertion_point'));
  c.preview(null);
  if (!p || p.option) return;
  const r = c.doc.change('PASTEBLOCK', () => pasteAsBlock(c.doc, clip, p, base));
  c.host.setSelection(new Set([r.id]));
  c.print(t('dsmall.pasteblock.done', { n: r.n, block: r.name }));
}, { keepSelection: true, help: () => t('dsmall.pasteblock.help') });

def('BLOCKREPLACE', [], async (c) => {
  const doc = c.doc;
  const names = [...doc.blocks.keys()].filter((n) => !n.startsWith('*')).sort();
  if (names.length < 2) { c.print(t('dsmall.blockreplace.need_two')); return; }
  const askName = async (prompt) => {
    for (;;) {
      const s = (await c.string(prompt)).trim();
      if (!s) return null;
      if (s === '?') { c.print(names.join(', ')); continue; }
      const k = findBlock(doc, s);
      if (k) return k;
      c.print(t('dsmall.marks.noblock'));
    }
  };
  const from = await askName(t('dsmall.blockreplace.from'));
  if (!from) return;
  const to = await askName(t('dsmall.blockreplace.to', { block: from }));
  if (!to) return;
  const plan = planBlockReplace(doc, from, to);
  if (plan.error) { c.print(t('dsmall.blockreplace.err.' + plan.error, { from, to })); return; }
  if (!plan.refs) { c.print(t('dsmall.blockreplace.no_refs', { block: plan.from })); return; }
  const n = doc.change('BLOCKREPLACE', () => applyBlockReplace(doc, plan.from, plan.to));
  c.print(t('dsmall.blockreplace.done', { n, from: plan.from, to: plan.to }));
  if (plan.inBlocks.length) c.print(t('dsmall.blockreplace.in_blocks', { list: plan.inBlocks.slice(0, 12).join(', ') }));
  if (plan.lost.length) c.print(t('dsmall.blockreplace.lost', { list: plan.lost.slice(0, 20).join(', ') }));
  if (!doc.blockUses(plan.from)) {
    const purge = kw(await c.keyword(t('dsmall.blockreplace.purge', { block: plan.from }), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'N' }), 'N') === 'Y';
    if (purge) { doc.change('BLOCKREPLACE', () => doc.removeBlock(plan.from)); c.print(t('dsmall.blockreplace.purged', { block: plan.from })); }
  }
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('dsmall.blockreplace.help') });

def('MINSERT', [], async (c) => {
  const doc = c.doc;
  let name = null;
  while (!name) {
    const s = (await c.string(t('dsmall.minsert.block'), { default: c.engine.lastBlock && doc.blocks.has(c.engine.lastBlock) ? c.engine.lastBlock : undefined })).trim();
    if (!s) return;
    name = findBlock(doc, s);
    if (!name) c.print(t('dsmall.marks.noblock'));
  }
  const blk = doc.blocks.get(name);
  const p = await c.point(t('cmd.pasteclip.specify_insertion_point'));
  if (!p || p.option) return;
  const sx = await c.number(t('dsmall.minsert.scale'), { default: 1 });
  if (!(Math.abs(sx) > 1e-12)) { c.print(t('dsmall.minsert.err.scale')); return; }
  const rot = await c.angle(t('dsmall.minsert.rotation'), { default: 0, base: p, ucs: true });
  const whole = async (key, d) => { const v = await c.number(t(key), { default: d }); return Number.isInteger(v) && v >= 1 ? v : null; };
  const rows = await whole('dsmall.minsert.rows', 1), cols = rows && await whole('dsmall.minsert.cols', 1);
  if (!rows || !cols || rows * cols > MINSERT_MAX) { c.print(t('dsmall.minsert.err.count', { max: MINSERT_MAX })); return; }
  const dr = rows > 1 ? await c.distance(t('dsmall.minsert.row_dist')) : 0;
  const dc = cols > 1 ? await c.distance(t('dsmall.minsert.col_dist')) : 0;
  if ((rows > 1 && typeof dr !== 'number') || (cols > 1 && typeof dc !== 'number')) return;
  const refs = minsertRefs(blk, { block: name, x: p.x, y: p.y, sx, sy: sx, rot: rot || 0, rows, cols, dr, dc });
  if (refs.error) { c.print(t('dsmall.minsert.err.count', { max: MINSERT_MAX })); return; }
  const ids = doc.change('MINSERT', () => refs.map((r) => doc.add(r).id));
  c.engine.lastBlock = name;
  c.host.setSelection(new Set(ids));
  c.print(t('dsmall.minsert.done', { n: ids.length, block: name, rows, cols, angle: num(deg(rot || 0)) }));
}, { keepSelection: true, help: () => t('dsmall.minsert.help') });
