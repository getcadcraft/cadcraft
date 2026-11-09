/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pdfmodel.js — the PDF underlay model (0.7 D7.24): an underlay is an unnamed block "*P<n>" placed by an insert, as pictures are
 * (pictures.js). DOM-free, no commands (walk.js and the readers import it; pdfunder.js has the commands).
 *
 *   block "*P<n>": a closed poly (the page's rectangle, or the clip boundary) carrying
 *       frame.pdf = { file, page (1-based), w, h (the displayed page in points), fade (0–80), contrast (0–100), mono,
 *                     clipped?: true (the frame is a clip boundary), off?: true (underlay switched off), layers?: { id: true|false } (the PDF's own layers switched on or off, over the file's defaults) }
 *     and the file's name as text (`pdfName: true`, shown only while the file is not loaded).
 *   Block coordinates are the page's points (origin lower-left of the displayed page); the insert's scale is drawing units per
 *   point, its rotation and place are where and how the page lies — what a file's PDFUNDERLAY holds.
 *   The files stay with the drawing while it is open: doc.pdfs = Map(key → { name, bytes }) (a DWG stores only the name).
 */
import { t } from './i18n.js';
import { insertMatrix, mApply } from './geom.js';
import { pictureKey } from './pictures.js';
import { sniffPdf } from './pdfhost.js';

export const PDF_MAX_BYTES = 128 * 1024 * 1024;
export const pdfKey = pictureKey;

export function pdfsOf(doc) { if (!(doc.pdfs instanceof Map)) doc.pdfs = new Map(); return doc.pdfs; }
export function pdfFrame(block) { return block?.entities?.find((e) => e.type === 'poly' && e.pdf) || null; }
export function pdfCorners(pdf) { return [{ x: 0, y: 0 }, { x: pdf.w, y: 0 }, { x: pdf.w, y: pdf.h }, { x: 0, y: pdf.h }]; }
export function freePdfName(doc) { let n = 1; while (doc.blocks.has('*P' + n)) n++; return '*P' + n; }

/** The block for an underlay: frame (the clip polygon in page points, or the page's rectangle) + the file's name. */
export function pdfBlock(name, pdf, clip = null) {
  const pts = (clip && clip.length >= 3 ? clip : pdfCorners(pdf)).map((p) => ({ x: p.x, y: p.y, b: 0 }));
  const file = String(pdf.file || '').split(/[\\/]/).pop() || 'pdf';
  const th = Math.max(1e-9, Math.min(pdf.h / 40, pdf.w / Math.max(4, file.length + 8)));
  return { name, base: { x: 0, y: 0 }, entities: [
    { type: 'poly', layer: '0', color: 0, closed: true, pts, pdf: { ...pdf, ...(clip && clip.length >= 3 ? { clipped: true } : {}) } },
    { type: 'text', layer: '0', color: 0, x: th * 0.5, y: th * 0.5, h: th, rot: 0, s: file + ' (' + pdf.page + ')', ha: 'left', va: 'baseline', pdfName: true },
  ] };
}

/** The stored file for an underlay: exact name, else a stored file whose name contains it. */
export function findPdf(doc, file) {
  const m = pdfsOf(doc), k = pdfKey(file);
  if (!k) return null;
  if (m.has(k)) return m.get(k);
  const stem = k.replace(/\.[a-z0-9]+$/, '');
  for (const [key, rec] of m) if (stem.length >= 3 && key.includes(stem)) return rec;
  return null;
}
/** Keep a PDF with the drawing. → the record, or { error }. */
export function addPdf(doc, name, bytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  if (b.length > PDF_MAX_BYTES) return { error: t('pdf.too_big', { file: name }) };
  if (!sniffPdf(b)) return { error: t('pdf.not_pdf', { file: name }) };
  const rec = { name: String(name).split(/[\\/]/).pop(), bytes: b };
  pdfsOf(doc).set(pdfKey(name), rec);
  doc.pictureVersion = (doc.pictureVersion || 0) + 1;
  return rec;
}

/**
 * A reference to an underlay block → what a DWG's PDFUNDERLAY holds, in the reference's space:
 * { file, page, insert, scale {x, y}, rotation, clip? (page points; two corners or a polygon), fade, contrast, mono, on }, or
 * null when the block is not an underlay.
 */
export function pdfPlacement(ref, block) {
  const fr = pdfFrame(block);
  if (!fr || block.entities.some((e) => e !== fr && !e.pdfName)) return null;
  const p = fr.pdf, m = insertMatrix(ref, block);
  const at = mApply(m, { x: 0, y: 0 });
  const sx = Math.hypot(m[0], m[1]), sy = Math.hypot(m[2], m[3]) * Math.sign(m[0] * m[3] - m[1] * m[2] || 1);
  return {
    file: p.file, page: p.page, insert: at, scale: { x: sx, y: sy }, rotation: Math.atan2(m[1], m[0]),
    ...(p.clipped ? { clip: fr.pts.map((q) => ({ x: q.x, y: q.y })) } : {}),
    fade: Number.isFinite(p.fade) ? p.fade : 0, contrast: Number.isFinite(p.contrast) ? p.contrast : 50, mono: !!p.mono, on: !p.off, size: { w: p.w, h: p.h },
    ...(p.layers && Object.keys(p.layers).length ? { layers: p.layers } : {}),
  };
}

/** Every underlay reference of a drawing (model, sheets, blocks): [{ ref, block, space }]. */
export function pdfRefs(doc) {
  const names = new Set([...doc.blocks.values()].filter((b) => pdfFrame(b)).map((b) => b.name));
  const out = [];
  if (!names.size) return out;
  for (const e of doc.model.values()) if (e.type === 'insert' && names.has(e.block)) out.push({ ref: e, block: doc.blocks.get(e.block), space: 'model' });
  for (const l of doc.layouts) for (const e of l.entities.values()) if (e.type === 'insert' && names.has(e.block)) out.push({ ref: e, block: doc.blocks.get(e.block), space: l.name });
  return out;
}

/** Drawing units per PDF point for a drawing's units (a point is 1/72 inch): the true size of the page. */
export function unitScale(doc) {
  const u = String(doc.meta?.units || '').toLowerCase();
  const inch = 1 / 72;
  if (/inch/.test(u)) return inch;
  if (/feet|foot/.test(u)) return inch / 12;
  if (/yard/.test(u)) return inch / 36;
  if (/mile/.test(u)) return inch / 63360;
  if (/micro/.test(u)) return inch * 1e6;
  if (/mil/.test(u) && !/millim/.test(u)) return inch * 1000;
  if (/centim/.test(u)) return 2.54 / 72;
  if (/kilom/.test(u)) return 0.0254 / 72 / 1000;
  if (/meter/.test(u) && !/millim|centim|kilom/.test(u)) return 0.0254 / 72;
  return 25.4 / 72;   // millimetres, or unitless: read as mm
}


// ------------------------------------------------------------------------------------------------------ file side

/** A page of a PDF whose file CadCraft does not have yet is drawn as an A4 portrait frame until the file is given. */
export const PAGE_GUESS = [595.2756, 841.8898];
const clampN = (v, a, b, d) => (Number.isFinite(v) ? Math.max(a, Math.min(b, Math.round(v))) : d);

/**
 * A file's PDFUNDERLAY ({ file, page, insertion {x,y}, scale {x,y}, rotation (radians), flags, contrast, fade, clip [{x,y}] }) →
 * { block (pdfBlock), insert (the placing reference, without layer/colour) }: flags 1 clip on (two points = opposite corners),
 * 2 underlay on, 4 monochrome. The clip points are the page's points from its lower-left corner.
 */
export function underlayParts(u, name) {
  const [w, h] = u.size || PAGE_GUESS;
  let clip = null;
  if (((u.flags | 0) & 1) && Array.isArray(u.clip) && u.clip.length >= 2) {
    const c = u.clip.map((p) => ({ x: +p.x, y: +p.y }));
    clip = c.length === 2 ? [{ x: c[0].x, y: c[0].y }, { x: c[1].x, y: c[0].y }, { x: c[1].x, y: c[1].y }, { x: c[0].x, y: c[1].y }] : c;
    if (clip.some((p) => !Number.isFinite(p.x) || !Number.isFinite(p.y))) clip = null;
  }
  const page = Math.max(1, parseInt(u.page, 10) || 1);
  const pdf = { file: String(u.file || 'pdf'), page, w, h, fade: clampN(u.fade, 0, 80, 0), contrast: clampN(u.contrast, 0, 100, 50), mono: !!((u.flags | 0) & 4), ...(((u.flags | 0) & 2) ? {} : { off: true }), ...(u.size ? {} : { sizeGuess: true }) };
  return { block: pdfBlock(name, pdf, clip), insert: { type: 'insert', block: name, x: u.insertion.x, y: u.insertion.y, sx: u.scale.x, sy: u.scale.y, rot: u.rotation || 0 } };
}

/** An underlay reference → the cc-dwg model entity fields of a PDFUNDERLAY (the definition handle is filled in by the caller). */
export function underlayFields(p, z = 0) {
  const clip = p.clip && p.clip.length >= 3 ? (isAxisRect(p.clip) ? rectCorners(p.clip) : p.clip) : null;
  return {
    insertion: { x: p.insert.x, y: p.insert.y, z }, scale: { x: p.scale.x, y: p.scale.y, z: p.scale.x }, rotation: p.rotation, normal: { x: 0, y: 0, z: 1 },
    flags: (clip ? 1 | 16 : 0) | (p.on ? 2 : 0) | (p.mono ? 4 : 0) | 8, contrast: p.contrast, fade: p.fade, clip: clip || [],
  };
}
const isAxisRect = (c) => { const eq = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)); return c.length === 4 && ((eq(c[0].x, c[1].x) && eq(c[1].y, c[2].y) && eq(c[2].x, c[3].x) && eq(c[3].y, c[0].y)) || (eq(c[0].y, c[1].y) && eq(c[1].x, c[2].x) && eq(c[2].y, c[3].y) && eq(c[3].x, c[0].x))); };
const rectCorners = (c) => [{ x: Math.min(...c.map((p) => p.x)), y: Math.min(...c.map((p) => p.y)) }, { x: Math.max(...c.map((p) => p.x)), y: Math.max(...c.map((p) => p.y)) }];
