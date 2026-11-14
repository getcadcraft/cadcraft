/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pictures.js — pictures in drawings (0.5 WL.14, WL.13; session cad-files). DOM-free except `pictureBitmap` (screen).
 *
 * A picture is an unnamed block "*I<n>" placed by an insert, as dwg-import.js has made them since 0.4 C6: its entities
 * are the frame (a closed poly: the clip boundary, or the whole picture) and the file's name as text. The frame carries
 * where the picture lies, in block coordinates:
 *
 *   frame.pic = { file, x, y (the picture's lower-left corner), ux, uy (one pixel along its width), vx, vy (one pixel up),
 *                 w, h (pixels), clipped?: true (the frame is a clip boundary), fade? (0–100), transparent?: true (its
 *                 see-through pixels show what is under it in other programs too: IMAGE display flag 8; 0.8 D8.15) }
 *   name text: picName: true (left out when the picture's file is loaded)
 *
 * So moving, rotating, scaling, picking, copying and erasing a picture is what CadCraft does with any block reference.
 * The files themselves live with the drawing while it is open: doc.pictures = Map(key → { name, bytes, mime, w, h })
 * (key = the file's base name, lower case; a DWG stores only the path). walk.js reports each picture to its output
 * (`out.picture`), plot.js puts it in the PDF at its own resolution (`pdfImage`, a cap optional), dwg-save.js writes
 * IMAGE + IMAGEDEF, and view.js draws it (`drawPictures`).
 *
 * Commands (registered by `installPictures`): IMAGEATTACH (IAT) place a picture from a file; IMAGE (IM) give CadCraft the
 * files a drawing's pictures use; IMAGECLIP (ICL) clip a picture to a rectangle or polygon, or remove its clip.
 */
import { t } from './i18n.js';
import { insertMatrix, mApply } from './geom.js';

export const PIC_TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg' };
const MAX_BYTES = 64 * 1024 * 1024, MAX_PIXELS = 100e6;

/** The key a picture file is known by: its base name, lower case ("C:\\Logos\\Logo.PNG" → "logo.png"). */
export function pictureKey(file) { return String(file || '').split(/[\\/]/).pop().toLowerCase(); }

/** The picture store of a drawing (made on first use). */
export function picturesOf(doc) { if (!(doc.pictures instanceof Map)) doc.pictures = new Map(); return doc.pictures; }

/** The frame entity of a picture block (the poly carrying `pic`), or null. */
export function pictureFrame(block) { return block?.entities?.find((e) => e.type === 'poly' && e.pic) || null; }

/** A picture's four corners in its block's coordinates (lower-left, lower-right, upper-right, upper-left). */
export function picCorners(pic) {
  const W = { x: pic.ux * pic.w, y: pic.uy * pic.w }, H = { x: pic.vx * pic.h, y: pic.vy * pic.h };
  return [{ x: pic.x, y: pic.y }, { x: pic.x + W.x, y: pic.y + W.y }, { x: pic.x + W.x + H.x, y: pic.y + W.y + H.y }, { x: pic.x + H.x, y: pic.y + H.y }];
}

/**
 * The block for a picture: frame (the clip polygon in block coordinates, or the picture's own rectangle) + the name.
 * → { name, base, entities }
 */
export function pictureBlock(name, pic, clip = null) {
  const pts = (clip && clip.length >= 3 ? clip : picCorners(pic)).map((p) => ({ x: p.x, y: p.y, b: 0 }));
  const c = picCorners(pic);
  const wLen = Math.hypot(c[1].x - c[0].x, c[1].y - c[0].y), hLen = Math.hypot(c[3].x - c[0].x, c[3].y - c[0].y);
  const rot = Math.atan2(c[1].y - c[0].y, c[1].x - c[0].x), file = String(pic.file || '').split(/[\\/]/).pop() || 'image';
  const th = Math.max(1e-9, Math.min(hLen / 8, wLen / Math.max(4, file.length)));
  const k = th * 0.5;
  return { name, base: { x: 0, y: 0 }, entities: [
    { type: 'poly', layer: '0', color: 0, closed: true, pts, pic: { ...pic, ...(clip && clip.length >= 3 ? { clipped: true } : {}) } },
    { type: 'text', layer: '0', color: 0, x: c[0].x + (Math.cos(rot) - Math.sin(rot)) * k, y: c[0].y + (Math.sin(rot) + Math.cos(rot)) * k, h: th, rot: ((rot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI), s: file, ha: 'left', va: 'baseline', picName: true },
  ] };
}

/** How many references to picture blocks a drawing has (model, sheets, blocks). */
export function pictureRefs(doc) {
  const pic = new Set([...doc.blocks.values()].filter((b) => pictureFrame(b)).map((b) => b.name));
  if (!pic.size) return 0;
  let n = 0;
  for (const m of [doc.model, ...doc.layouts.map((l) => l.entities)]) for (const e of m.values()) if (e.type === 'insert' && pic.has(e.block)) n++;
  return n;
}

/** A free "*I<n>" block name in a drawing. */
export function freePictureName(doc) {
  let n = 1;
  while (doc.blocks.has('*I' + n)) n++;
  return '*I' + n;
}

/**
 * A reference to a picture block → what a DWG's IMAGE holds: { file, insert, u, v, size, clip? (pixel coordinates, y down
 * from the top-left pixel's centre, as the file keeps them), fade, transparent? } in the reference's space, or null when the block is
 * not a picture (anything besides its frame and name in it).
 */
export function picturePlacement(ref, block) {
  const fr = pictureFrame(block);
  if (!fr || fr.ole || block.entities.some((e) => e !== fr && !e.picName)) return null;   // an OLE object's preview is drawn like a picture but is no IMAGE (ole.js, 0.7 D7.23)
  const p = fr.pic, m = insertMatrix(ref, block);
  const at = mApply(m, { x: p.x, y: p.y });
  const vec = (x, y) => ({ x: m[0] * x + m[2] * y, y: m[1] * x + m[3] * y });
  const u = vec(p.ux, p.uy), v = vec(p.vx, p.vy);
  const out = { file: p.file, insert: at, u, v, size: { x: p.w, y: p.h }, fade: Number.isFinite(p.fade) ? p.fade : 0, ...(p.transparent ? { transparent: true } : {}) };
  if (p.clipped) {
    const det = u.x * v.y - u.y * v.x;
    if (Math.abs(det) > 1e-300) {
      out.clip = fr.pts.map((q) => {
        const w = mApply(m, q), dx = w.x - at.x, dy = w.y - at.y;
        const a = (dx * v.y - dy * v.x) / det, b = (u.x * dy - u.y * dx) / det;   // along the width, up, in pixels
        return { x: a - 0.5, y: p.h - 0.5 - b };
      });
    }
  }
  return out;
}

// ---------------------------------------------------------------------------------------------- reading picture files

/** A file's bytes → { mime, w, h } when it is a PNG or a JPEG we can read, else null (checked by content, not by name). */
export function sniffPicture(bytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  if (b.length > 24 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) {
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
    const w = dv.getUint32(16), h = dv.getUint32(20);
    return w > 0 && h > 0 && w * h <= MAX_PIXELS ? { mime: 'image/png', w, h } : null;
  }
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    const s = jpegInfo(b);
    return s && s.w * s.h <= MAX_PIXELS ? { mime: 'image/jpeg', w: s.w, h: s.h } : null;
  }
  return null;
}

/** JPEG: the frame header (SOF0–SOF2) → { w, h, components } or null. */
export function jpegInfo(b) {
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) return null;
    const m = b[i + 1];
    if (m === 0xd8 || (m >= 0xd0 && m <= 0xd7) || m === 0x01) { i += 2; continue; }
    const len = (b[i + 2] << 8) | b[i + 3];
    if (m >= 0xc0 && m <= 0xc2) return { h: (b[i + 5] << 8) | b[i + 6], w: (b[i + 7] << 8) | b[i + 8], components: b[i + 9] };
    if (m === 0xda || len < 2) return null;
    i += 2 + len;
  }
  return null;
}

/** Keep a picture file with the drawing. → the stored record, or { error } (not a PNG/JPEG, too big). */
export function addPicture(doc, name, bytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  if (b.length > MAX_BYTES) return { error: t('pic.too_big', { file: name }) };
  const s = sniffPicture(b);
  if (!s) return { error: t('pic.not_picture', { file: name }) };
  const rec = { name: String(name).split(/[\\/]/).pop(), bytes: b, mime: s.mime, w: s.w, h: s.h };
  picturesOf(doc).set(pictureKey(name), rec);
  doc.pictureVersion = (doc.pictureVersion || 0) + 1;
  return rec;
}

/** The stored file for a picture: exact name, else a stored file whose name contains it (exports prefix the project). */
export function findPicture(doc, file) {
  const m = picturesOf(doc), k = pictureKey(file);
  if (!k) return null;
  if (m.has(k)) return m.get(k);
  const stem = k.replace(/\.[a-z0-9]+$/, '');
  for (const [key, rec] of m) if (stem.length >= 3 && key.includes(stem)) return rec;
  return null;
}

// ---------------------------------------------------------------------------------------------- PNG decoding (PDF)

async function inflate(bytes) {
  const ds = new DecompressionStream('deflate');
  return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer());
}
async function deflate(bytes) {
  const cs = new CompressionStream('deflate');
  return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(cs)).arrayBuffer());
}

/**
 * PNG → { w, h, rgb (Uint8Array w×h×3), alpha (Uint8Array w×h) | null }. 8-bit grey, grey+alpha, RGB, RGBA and palette
 * (+ tRNS), 16-bit taken to 8; interlaced files are refused (null), as is anything damaged. File data is untrusted.
 */
export async function decodePng(bytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let i = 8, w = 0, h = 0, depth = 0, ct = 0, inter = 0, pal = null, trns = null;
  const idat = [];
  while (i + 12 <= b.length) {
    const len = dv.getUint32(i), type = String.fromCharCode(b[i + 4], b[i + 5], b[i + 6], b[i + 7]);
    if (i + 12 + len > b.length) return null;
    const d = b.subarray(i + 8, i + 8 + len);
    if (type === 'IHDR') { w = dv.getUint32(i + 8); h = dv.getUint32(i + 12); depth = d[8]; ct = d[9]; inter = d[12]; }
    else if (type === 'PLTE') pal = d;
    else if (type === 'tRNS') trns = d;
    else if (type === 'IDAT') idat.push(d);
    else if (type === 'IEND') break;
    i += 12 + len;
  }
  const okDepth = depth === 8 || (depth === 16 && ct !== 3);
  if (!w || !h || w * h > MAX_PIXELS || inter || !okDepth || ![0, 2, 3, 4, 6].includes(ct)) return null;
  const chans = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ct], bpp = chans * (depth / 8), stride = w * bpp;
  let raw;
  try { raw = await inflate(concat(idat)); } catch { return null; }
  if (raw.length < h * (stride + 1)) return null;
  const px = new Uint8Array(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)), out = px.subarray(y * stride, (y + 1) * stride), up = y ? px.subarray((y - 1) * stride, y * stride) : null;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? out[x - bpp] : 0, u = up ? up[x] : 0, c = up && x >= bpp ? up[x - bpp] : 0;
      let v = src[x];
      if (f === 1) v += a; else if (f === 2) v += u; else if (f === 3) v += (a + u) >> 1;
      else if (f === 4) { const p = a + u - c, pa = Math.abs(p - a), pb = Math.abs(p - u), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? u : c; }
      else if (f !== 0) return null;
      out[x] = v & 0xff;
    }
  }
  const rgb = new Uint8Array(w * h * 3);
  let alpha = ct === 4 || ct === 6 || trns ? new Uint8Array(w * h).fill(255) : null;
  const step = depth / 8;
  for (let k = 0; k < w * h; k++) {
    const o = k * bpp, s = (j) => px[o + j * step];
    if (ct === 3) {
      const ix = px[o];
      rgb[k * 3] = pal?.[ix * 3] ?? 0; rgb[k * 3 + 1] = pal?.[ix * 3 + 1] ?? 0; rgb[k * 3 + 2] = pal?.[ix * 3 + 2] ?? 0;
      if (alpha) alpha[k] = trns && ix < trns.length ? trns[ix] : 255;
    } else if (ct === 0 || ct === 4) {
      rgb[k * 3] = rgb[k * 3 + 1] = rgb[k * 3 + 2] = s(0);
      if (ct === 4) alpha[k] = s(1);
    } else {
      rgb[k * 3] = s(0); rgb[k * 3 + 1] = s(1); rgb[k * 3 + 2] = s(2);
      if (ct === 6) alpha[k] = s(3);
    }
  }
  if (alpha && alpha.every((v) => v === 255)) alpha = null;
  return { w, h, rgb, alpha };
}
function concat(list) { const n = list.reduce((s, x) => s + x.length, 0), o = new Uint8Array(n); let at = 0; for (const x of list) { o.set(x, at); at += x.length; } return o; }

/** Box-filter a decoded picture down to at most w2 × h2 pixels. */
function shrink(img, w2, h2) {
  const { w, h } = img, rgb = new Uint8Array(w2 * h2 * 3), alpha = img.alpha ? new Uint8Array(w2 * h2) : null;
  for (let y = 0; y < h2; y++) for (let x = 0; x < w2; x++) {
    const x0 = Math.floor(x * w / w2), x1 = Math.max(x0 + 1, Math.floor((x + 1) * w / w2)), y0 = Math.floor(y * h / h2), y1 = Math.max(y0 + 1, Math.floor((y + 1) * h / h2));
    let r = 0, g = 0, bl = 0, a = 0, n = 0;
    for (let yy = y0; yy < y1; yy++) for (let xx = x0; xx < x1; xx++) { const k = yy * w + xx; r += img.rgb[k * 3]; g += img.rgb[k * 3 + 1]; bl += img.rgb[k * 3 + 2]; if (alpha) a += img.alpha[k]; n++; }
    const o = y * w2 + x;
    rgb[o * 3] = r / n; rgb[o * 3 + 1] = g / n; rgb[o * 3 + 2] = bl / n; if (alpha) alpha[o] = a / n;
  }
  return { w: w2, h: h2, rgb, alpha };
}

/**
 * A picture as a PDF image (WL.13): its own pixels — a JPEG goes in as it is (DCTDecode), a PNG decoded and deflated (its
 * transparency as a soft mask) — unless `maxDpi` (pixels per inch on the paper) is set and the picture is printed
 * denser than that: then a PNG is shrunk to it (a JPEG stays as it is, said in `kept`). `mmW`, `mmH` = its printed size.
 * → { w, h, filter, data, colors, smask?: { data }, shrunk?, kept? } | null
 */
export async function pdfImage(rec, { maxDpi = 0, mmW = 0, mmH = 0 } = {}) {
  if (!rec) return null;
  if (rec.mime === 'image/jpeg') {
    const s = jpegInfo(rec.bytes);
    if (!s || ![1, 3].includes(s.components)) return null;   // CMYK JPEGs need a colour profile: left out
    const dense = maxDpi > 0 && mmW > 0 && s.w / (mmW / 25.4) > maxDpi * 1.01;
    return { w: s.w, h: s.h, filter: 'DCTDecode', data: rec.bytes, colors: s.components, ...(dense ? { kept: true } : {}) };
  }
  let img = await decodePng(rec.bytes);
  if (!img) return null;
  let shrunk = false;
  if (maxDpi > 0 && mmW > 0 && mmH > 0) {
    const w2 = Math.max(1, Math.round(maxDpi * mmW / 25.4)), h2 = Math.max(1, Math.round(maxDpi * mmH / 25.4));
    if (w2 < img.w && h2 < img.h) { img = shrink(img, w2, h2); shrunk = true; }
  }
  return { w: img.w, h: img.h, filter: 'FlateDecode', data: await deflate(img.rgb), colors: 3, ...(img.alpha ? { smask: { data: await deflate(img.alpha) } } : {}), ...(shrunk ? { shrunk } : {}) };
}

// ---------------------------------------------------------------------------------------------- the screen

const bitmaps = new WeakMap();   // stored record → ImageBitmap | 'loading' | 'failed'
/** The picture's bitmap for drawing on screen, or null while it decodes (`onReady` is called once it can be drawn). */
export function pictureBitmap(rec, onReady) {
  if (!rec || typeof createImageBitmap !== 'function') return null;
  const got = bitmaps.get(rec);
  if (got && got !== 'loading' && got !== 'failed') return got;
  if (!got) {
    bitmaps.set(rec, 'loading');
    createImageBitmap(new Blob([rec.bytes], { type: rec.mime })).then((bm) => { bitmaps.set(rec, bm); onReady?.(); }, () => bitmaps.set(rec, 'failed'));
  }
  return null;
}

/**
 * Draw pictures on a canvas: `list` = what walk.js reported ([{ file, place: {x, y, ux, uy, vx, vy, w, h}, clip: [x, y, …],
 * alpha }] in drawing coordinates), T = drawing → CSS px ([a b c d e f]), (ox, oy) the pane's offset, dpr the device
 * pixel ratio. For view.js (cad-draw): call it in drawCache after the fills, with doc and its redraw.
 */
export function drawPictures(ctx, list, T, { doc, dpr = 1, ox = 0, oy = 0, onReady } = {}) {
  for (const p of list || []) {
    const rec = findPicture(doc, p.file);
    const bm = pictureBitmap(rec, onReady);
    if (!bm) continue;
    const q = p.place, M = (x, y) => [T[0] * x + T[2] * y + T[4] + ox, T[1] * x + T[3] * y + T[5] + oy];
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (p.clip && p.clip.length >= 6) {
      ctx.beginPath();
      for (let i = 0; i + 1 < p.clip.length; i += 2) { const [sx, sy] = M(p.clip[i], p.clip[i + 1]); if (i) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy); }
      ctx.closePath(); ctx.clip();
    }
    // the bitmap's unit square: x along the width, y down from the top row — onto the picture's corners on screen
    const top = M(q.x + q.vx * q.h, q.y + q.vy * q.h);
    const a = T[0] * q.ux * q.w + T[2] * q.uy * q.w, b = T[1] * q.ux * q.w + T[3] * q.uy * q.w;
    const c = -(T[0] * q.vx * q.h + T[2] * q.vy * q.h), d = -(T[1] * q.vx * q.h + T[3] * q.vy * q.h);
    ctx.transform(a / bm.width, b / bm.width, c / bm.height, d / bm.height, top[0], top[1]);
    ctx.globalAlpha = Number.isFinite(p.alpha) ? p.alpha : 1;
    ctx.drawImage(bm, 0, 0);
    ctx.restore();
  }
}
