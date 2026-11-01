/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pictures-cmd.js — the picture commands (0.5 WL.14; pictures.js has the model). Registered through commands.js's
 * command registry when this module is imported (cadcraft.js imports it; Node tests too):
 *
 *   IMAGEATTACH (IAT)  pick a PNG or JPEG (host.pickPictures), then its lower-left corner, its width and its angle
 *   IMAGE (IM)         give CadCraft the files the drawing's pictures use (host.pickPictures, several at once; matched
 *                      by file name, as BimCraft does) — a DWG stores only where a picture was
 *   IMAGECLIP (ICL)    a picture's clip: R rectangle (two corners), P polygon (points, Enter ends), D delete the clip
 *   PASTEAREA (PAREA)  an area copied in MarkupCraft (Copy area; pastepic.js, areaclip.js) at its true size: the
 *                      lower-left corner, then — the sheet had a drawing scale — nothing more: it lands at real size in
 *                      the drawing's units; else at its paper size times a typed scale (100 for a 1:100 sheet), or P: two
 *                      points on the pasted picture and the distance between them (as SCANSCALE), scaled about the corner.
 *                      An overlay keeps its see-through paper and starts at its fade. PASTECLIP (Ctrl+V) runs it when the
 *                      area is the newer copy (`takesPaste`, pastepic.js areaTakesPaste); cadcraft.js runs it when the
 *                      picture on the system clipboard is the area's (areaclip.js sameImage).
 *
 * Each is one undo step. The files stay with the drawing while it is open (doc.pictures); they are not undoable.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { addPicture, freePictureName, pictureBlock, pictureFrame, picCorners, findPicture, picturesOf, pictureKey } from './pictures.js';
import { insertMatrix, mApply } from './geom.js';
import { placePastedPicture, readAreaClip, areaTakesPaste, areaSize, areaPlacement, areaBytes } from './pastepic.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const isPicture = (doc, e) => e && e.type === 'insert' && !!pictureFrame(doc.blocks.get(e.block));
const invert = (m) => {
  const d = m[0] * m[3] - m[1] * m[2];
  return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[3] * m[4]) / d, (m[1] * m[4] - m[0] * m[5]) / d];
};

async function pickFiles(c, multiple) {
  if (!c.host.pickPictures) { c.print(t('pic.nobrowser')); return []; }
  return (await c.host.pickPictures({ multiple })) || [];
}

def('IMAGEATTACH', ['IAT', 'IMAGEATT'], async (c) => {
  const [f] = await pickFiles(c, false);
  if (!f) return;
  const rec = addPicture(c.doc, f.name, f.bytes);
  if (rec.error) { c.print(rec.error); return; }
  const at = await c.point(t('pic.prompt.corner', { file: rec.name }));
  if (!at || at.option) return;
  const width = await c.distance(t('pic.prompt.width', { w: rec.w, h: rec.h }), { base: at, default: rec.w });
  const W = typeof width === 'number' && width > 0 ? width : rec.w;
  const ang = await c.angle(t('pic.prompt.angle'), { base: at, default: 0 });
  const a = typeof ang === 'number' ? ang : 0;
  const px = W / rec.w;
  const pic = { file: rec.name, x: 0, y: 0, ux: px, uy: 0, vx: 0, vy: px, w: rec.w, h: rec.h };
  const name = freePictureName(c.doc);
  c.doc.change('IMAGEATTACH', () => {
    c.doc.defineBlock(pictureBlock(name, pic));
    c.doc.add({ type: 'insert', layer: c.doc.current.layer, color: null, block: name, x: at.x, y: at.y, sx: 1, sy: 1, rot: a });
  });
  c.print(t('pic.attached', { file: rec.name, w: rec.w, h: rec.h }));
}, { help: () => t('pic.help.attach') });

def('IMAGE', ['IM'], async (c) => {
  const used = new Map();   // key → [file as the drawing names it]
  for (const b of c.doc.blocks.values()) { const fr = pictureFrame(b); if (fr) used.set(pictureKey(fr.pic.file), fr.pic.file); }
  if (!used.size) { c.print(t('pic.none')); return; }
  const missing = [...used.values()].filter((f) => !findPicture(c.doc, f));
  c.print(t('pic.list', { n: used.size, missing: missing.length }));
  for (const f of used.values()) c.print('  ' + t(findPicture(c.doc, f) ? 'pic.row.loaded' : 'pic.row.missing', { file: f }));
  if (!missing.length) return;
  const files = await pickFiles(c, true);
  let n = 0;
  for (const f of files) {
    const k = pictureKey(f.name), stem = k.replace(/\.[a-z0-9]+$/, '');
    // the exact name, else a file whose name contains the one the drawing names (eTransmit and other exports add a prefix)
    const target = missing.find((m) => pictureKey(m) === k) || missing.find((m) => { const s = pictureKey(m).replace(/\.[a-z0-9]+$/, ''); return s.length >= 3 && stem.includes(s); });
    if (!target) { c.print(t('pic.unused', { file: f.name })); continue; }
    const rec = addPicture(c.doc, f.name, f.bytes);
    if (rec.error) { c.print(rec.error); continue; }
    if (pictureKey(target) !== k) picturesOf(c.doc).set(pictureKey(target), rec);   // known by the drawing's name too
    n++;
  }
  if (n) { c.doc.pictureVersion = (c.doc.pictureVersion || 0) + 1; c.host.redraw?.(); }
  c.print(t('pic.added', { n }));
}, { noRepeat: true, help: () => t('pic.help.image') });

def('IMAGECLIP', ['ICL'], async (c) => {
  const p = await c.entity(t('pic.prompt.pick'));
  if (!p || p.option) return;
  const ref = c.doc.get(p.id ?? p);
  if (!isPicture(c.doc, ref)) { c.print(t('pic.notpicture')); return; }
  const blk = c.doc.blocks.get(ref.block), fr = pictureFrame(blk);
  const k = await c.keyword(t('pic.prompt.clip'), { options: [opt('R', t('opt.rectangular')), opt('P', t('opt.polygonal')), opt('D', t('opt.delete'))], default: 'R' });
  const o = k?.option ?? k;
  if (!o) return;
  let pts = null;
  if (o === 'R') {
    const a = await c.point(t('pic.prompt.corner1'));
    if (!a || a.option) return;
    const b = await c.point(t('pic.prompt.corner2'), { base: a });
    if (!b || b.option) return;
    pts = [{ x: a.x, y: a.y }, { x: b.x, y: a.y }, { x: b.x, y: b.y }, { x: a.x, y: b.y }];
  } else if (o === 'P') {
    pts = [];
    for (;;) {
      const q = await c.point(t(pts.length < 3 ? 'pic.prompt.vertex' : 'pic.prompt.vertex_or_enter'), { base: pts[pts.length - 1], none: pts.length >= 3 });
      if (!q) break;
      if (q.option) return;
      pts.push({ x: q.x, y: q.y });
    }
    if (pts.length < 3) return;
  }
  // the clip in the block's own coordinates (the reference may be moved, turned and scaled)
  const inv = invert(insertMatrix(ref, blk));
  const local = pts ? pts.map((q) => mApply(inv, q)) : null;
  // a picture block other references share gets a copy of its own first (a clip belongs to one picture, as in the file)
  let shared = 0;
  for (const m of [c.doc.model, ...c.doc.layouts.map((l) => l.entities)]) for (const e of m.values()) if (e.type === 'insert' && e.block === blk.name) shared++;
  for (const b of c.doc.blocks.values()) for (const e of b.entities) if (e.type === 'insert' && e.block === blk.name) shared++;
  const name = shared > 1 ? freePictureName(c.doc) : blk.name;
  const { clipped, ...plainPic } = fr.pic;   // eslint-disable-line no-unused-vars
  c.doc.change('IMAGECLIP', () => {
    const nb = pictureBlock(name, plainPic, local);
    // keep the name text as it was (its place and size)
    c.doc.defineBlock({ ...nb, entities: [nb.entities[0], ...blk.entities.filter((e) => e !== fr)] });
    if (name !== blk.name) c.doc.update(ref.id, { ...ref, block: name });
  });
  c.print(t(pts ? 'pic.clipped' : 'pic.unclipped'));
}, { help: () => t('pic.help.clip') });

// ---- PASTEAREA (0.8 D8.15): a copied area at its true size ----

const fmt = (v) => String(+v.toPrecision(5));
const rectAt = (p, w, h) => ({ type: 'poly', layer: '0', closed: true, pts: [{ x: p.x, y: p.y, b: 0 }, { x: p.x + w, y: p.y, b: 0 }, { x: p.x + w, y: p.y + h, b: 0 }, { x: p.x, y: p.y + h, b: 0 }] });
const areaStore = (c) => c.engine.clipboard?.storage ?? null;   // the localStorage CadCraft's own clipboard shares (null in a memory-only tab)

def('PASTEAREA', ['PAREA'], async (c) => {
  const clip = readAreaClip(areaStore(c));
  if (!clip) { c.print(t('area.none')); return; }
  const real = areaSize(c.doc, clip, 'real'), paper = areaSize(c.doc, clip, 'paper');
  const units = c.doc.meta?.units || t('area.units.none');
  const what = clip.label || clip.sheet || clip.source || t('area.unnamed');
  c.print(real ? t('area.found.real', { what, w: fmt(real[0]), h: fmt(real[1]), units }) : t('area.found.paper', { what, w: fmt(paper[0]), h: fmt(paper[1]), units }));
  const [w0, h0] = real || paper;
  c.preview((cur) => [rectAt(cur, w0, h0)]);
  const at = await c.point(t('area.prompt.corner'));
  c.preview(null);
  if (!at || at.option) return;
  let width = w0, byPoints = false;
  if (!real) {
    const v = await c.number(t('area.prompt.scale'), { default: 1, options: [opt('P', 'Points')] });
    if (v?.option === 'P') byPoints = true;
    else if (typeof v === 'number' && v > 0) width = w0 * v;
  }
  const r = placePastedPicture(c.doc, areaBytes(clip), { at, width, label: 'PASTEAREA', ...areaPlacement(clip) });
  if (r.error) { c.print(r.why || t(r.error)); return; }
  c.host.redraw?.();
  if (byPoints) {
    // as SCANSCALE: two points on the picture, then how far apart they really are; the corner stays where it was put
    const a = await c.point(t('area.prompt.point1'));
    const b = a && !a.option ? await c.point(t('area.prompt.point2'), { base: a }) : null;
    const cur = b && !b.option ? Math.hypot(b.x - a.x, b.y - a.y) : 0;
    if (b && !b.option && !(cur > 1e-9)) c.print(t('scan.scale.same'));
    const want = cur > 1e-9 ? await c.distance(t('scan.prompt.scale3', { d: fmt(cur) }), { base: a }) : null;
    const ref = c.doc.get(r.id);
    if (ref && typeof want === 'number' && want > 0) {
      const f = want / cur;
      c.doc.change('PASTEAREA', () => c.doc.update(ref.id, { ...ref, sx: ref.sx * f, sy: ref.sy * f }));
      width *= f;
    }
  }
  c.host.setSelection?.(new Set([r.id]));
  const wh = { w: fmt(width), h: fmt(width * clip.px[1] / clip.px[0]), units, file: r.name };
  c.print(t(clip.overlay ? 'area.pasted.overlay' : 'area.pasted', { ...wh, fade: areaPlacement(clip).fade }));
}, { keepSelection: true, help: () => t('area.help'), takesPaste: (c, cadClip) => areaTakesPaste(readAreaClip(areaStore(c)), cadClip) });

export { picCorners };
