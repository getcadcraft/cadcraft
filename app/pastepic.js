/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pastepic.js — a picture pasted from the system clipboard (0.6 DF.6; GJoe_tx on Discord: paste a screenshot). No DOM:
 * bin/test-cadcraft.mjs runs it in Node; cadcraft.js reads the clipboard (the paste event, or the clipboard API from
 * Edit › More › Paste a picture) and hands the bytes here.
 *
 * The picture becomes what IMAGEATTACH makes (pictures.js: an unnamed block "*I<n>" with its frame, placed by a reference),
 * its bytes kept with the drawing (doc.pictures, marked `pasted`), named after the drawing: "<drawing>-picture-<n>.png". A
 * DWG keeps only a picture's file name, so saving also writes that PNG beside the drawing (in the browser: a second
 * download, and a note says so: picturesToSave).
 *
 *   pastedName(doc, ext, stem)            → a free name "<stem>-picture-<n>.<ext>"
 *   placePastedPicture(doc, bytes, opt)   one undo step → { ok, name, w, h, width } | { error }; opt { at {x, y} (the
 *                                         lower-left corner), width (drawing units; default: the picture's pixels), stem,
 *                                         layer }
 *   picturesToSave(doc, file)             → the pasted pictures the drawing still uses that have not been written beside
 *                                         `file` yet [{ name, bytes, mime }]; marks them written
 */
import { addPicture, freePictureName, pictureBlock, pictureFrame, picturesOf, pictureKey, sniffPicture } from './pictures.js';

const EXT = { 'image/png': 'png', 'image/jpeg': 'jpg' };

/** A drawing's name without its folder and extension, made safe for a file name ("Drawing1" when it has none). */
export function drawingStem(doc) {
  const src = String(doc?.meta?.name || String(doc?.meta?.source || '').split(/[\\/]/).pop().replace(/\.(dwg|dxf|json)$/i, ''));
  return (src || 'Drawing1').replace(/[<>:"/\\|?*\u0000-\u001f]+/g, '-').slice(0, 80) || 'Drawing1';
}

export function pastedName(doc, ext = 'png', stem = drawingStem(doc)) {
  const pics = picturesOf(doc);
  let n = 1;
  while (pics.has(pictureKey(`${stem}-picture-${n}.${ext}`))) n++;   // i18n-ignore (a file name)
  return `${stem}-picture-${n}.${ext}`;   // i18n-ignore (a file name)
}

export function placePastedPicture(doc, bytes, { at = { x: 0, y: 0 }, width = null, stem = drawingStem(doc), layer = null } = {}) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  const s = sniffPicture(b);
  if (!s) return { error: 'pic.paste.notpicture' };
  const name = pastedName(doc, EXT[s.mime] || 'png', stem);
  const rec = addPicture(doc, name, b);
  if (rec.error) return { error: 'pic.paste.toobig', why: rec.error };
  rec.pasted = true;
  const W = width > 0 ? width : rec.w;
  const px = W / rec.w;
  const pic = { file: name, x: 0, y: 0, ux: px, uy: 0, vx: 0, vy: px, w: rec.w, h: rec.h };
  const blockName = freePictureName(doc);
  doc.change('PASTE PICTURE', () => {
    doc.defineBlock(pictureBlock(blockName, pic));
    doc.add({ type: 'insert', layer: layer ?? doc.current.layer, color: null, block: blockName, x: at.x, y: at.y, sx: 1, sy: 1, rot: 0 });
  });
  return { ok: true, name, w: rec.w, h: rec.h, width: W };
}

export function picturesToSave(doc, file) {
  const used = new Set();
  for (const b of doc.blocks.values()) { const fr = pictureFrame(b); if (fr && doc.blockUses(b.name)) used.add(pictureKey(fr.pic.file)); }
  const out = [];
  for (const [k, rec] of picturesOf(doc)) {
    if (!rec.pasted || !used.has(k)) continue;
    rec.writtenBeside ||= new Set();
    if (rec.writtenBeside.has(file)) continue;
    rec.writtenBeside.add(file);
    out.push({ name: rec.name, bytes: rec.bytes, mime: rec.mime });
  }
  return out;
}
