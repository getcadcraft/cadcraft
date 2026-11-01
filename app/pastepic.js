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
 *   placePastedPicture(doc, bytes, opt)   one undo step → { ok, name, w, h, width, id } | { error }; opt { at {x, y} (the
 *                                         lower-left corner), width (drawing units; default: the picture's pixels), stem,
 *                                         layer, rot (radians), fade (0–100), transparent (the PNG has see-through parts:
 *                                         a DWG's IMAGE says so), label (the undo step's name) }; `id` = the reference
 *   picturesToSave(doc, file)             → the pasted pictures the drawing still uses that have not been written beside
 *                                         `file` yet [{ name, bytes, mime }]; marks them written
 *
 * A copied area (0.8 D8.15; areaclip.js — MarkupCraft's Copy area tool): the PNG on the system clipboard plus a clip in
 * localStorage "cadcraft.areaclip" that knows how big the area is (pictures-cmd.js PASTEAREA places it):
 *   readAreaClip(storage)                 → the clean clip, or null (none, unreadable, not a clip)
 *   areaTakesPaste(area, cadClip, opt)    → should a plain paste (Ctrl+V, PASTECLIP) paste the area? Yes when the area clip
 *                                         is recent (6 h, as sameImage) and CadCraft's own clipboard is empty or older
 *   unitsPerMm(doc)                       → drawing units per mm (pdfmodel.js unitScale: a drawing with no units reads as mm)
 *   areaSize(doc, clip, use)              → [w, h] in drawing units: 'real' (null when the sheet had no scale) or 'paper'
 *   areaPlacement(clip)                   → { fade, transparent } the picture starts with (an overlay keeps its strength)
 *   areaBytes(clip)                       → the PNG's bytes
 */
import { addPicture, freePictureName, pictureBlock, pictureFrame, picturesOf, pictureKey, sniffPicture } from './pictures.js';
import { AREA_KEY, cleanAreaClip, sizeMm } from './areaclip.js';
import { unitScale } from './pdfmodel.js';

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

export function placePastedPicture(doc, bytes, { at = { x: 0, y: 0 }, width = null, stem = drawingStem(doc), layer = null, rot = 0, fade = 0, transparent = false, label = 'PASTE PICTURE' } = {}) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  const s = sniffPicture(b);
  if (!s) return { error: 'pic.paste.notpicture' };
  const name = pastedName(doc, EXT[s.mime] || 'png', stem);
  const rec = addPicture(doc, name, b);
  if (rec.error) return { error: 'pic.paste.toobig', why: rec.error };
  rec.pasted = true;
  const W = width > 0 ? width : rec.w;
  const px = W / rec.w;
  const f = Math.max(0, Math.min(100, Math.round(fade) || 0));
  const pic = { file: name, x: 0, y: 0, ux: px, uy: 0, vx: 0, vy: px, w: rec.w, h: rec.h, ...(f ? { fade: f } : {}), ...(transparent ? { transparent: true } : {}) };
  const blockName = freePictureName(doc);
  const ref = doc.change(label, () => {
    doc.defineBlock(pictureBlock(blockName, pic));
    return doc.add({ type: 'insert', layer: layer ?? doc.current.layer, color: null, block: blockName, x: at.x, y: at.y, sx: 1, sy: 1, rot: Number.isFinite(rot) ? rot : 0 });
  });
  return { ok: true, name, w: rec.w, h: rec.h, width: W, id: ref?.id };
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

// ---------------------------------------------------------------------------------------------- a copied area (0.8 D8.15)

const AREA_MAX_AGE = 6 * 3600 * 1000;   // as areaclip.js sameImage

export function readAreaClip(storage) {
  let raw = null;
  try { raw = storage?.getItem?.(AREA_KEY) ?? null; } catch { raw = null; }
  return raw ? cleanAreaClip(raw) : null;   // untrusted (any tab, any app on the site, the console): checked field by field
}

/**
 * A plain paste takes the area when the area was copied in the last 6 hours (a clip left from yesterday never surprises
 * anyone) and after CadCraft's own copy, if there is one (`cadClip.time`, ms). An unreadable CadCraft copy counts as none.
 */
export function areaTakesPaste(area, cadClip, { now = Date.now(), maxAgeMs = AREA_MAX_AGE } = {}) {
  if (!area) return false;
  const at = Date.parse(area.at);
  if (!Number.isFinite(at) || now - at < -60000 || now - at > maxAgeMs) return false;
  return !cadClip || !(Number(cadClip.time) >= at);
}

export const unitsPerMm = (doc) => unitScale(doc) * 72 / 25.4;

export function areaSize(doc, clip, use = 'real') {
  const mm = sizeMm(clip, { use });
  if (!mm) return null;
  const k = unitsPerMm(doc);
  return [mm[0] * k, mm[1] * k];
}

/** An overlay starts at its strength (fade = 100 − opacity %); an overlay or a round or freeform area is see-through. */
export function areaPlacement(clip) {
  const fade = clip?.overlay ? Math.round((1 - clip.overlay.opacity) * 100) : 0;
  return { fade, transparent: !!(clip?.overlay || (clip && clip.shape !== 'rect')) };
}

export function areaBytes(clip) {
  const b64 = String(clip?.src || '').replace(/^data:image\/png;base64,/, '');
  if (typeof atob === 'function') { const s = atob(b64); return Uint8Array.from(s, (ch) => ch.charCodeAt(0)); }
  return new Uint8Array(Buffer.from(b64, 'base64'));   // Node (tests)
}
