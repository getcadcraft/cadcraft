/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — code page names; nothing here is read by a person. */
/**
 * dxf-open.js — a DXF file's bytes → the text every DXF reader here takes, whether the file is ASCII or binary (1.0 ORS.18).
 * DOM-free. The one door for opening a DXF: cadcraft.js (Open, Insert, the library's block adapter), sheetset-io.js,
 * sheetset-panel.js and report/credits.js call it instead of dxf-decode.js's decodeDxfBytes.
 *
 *   dxfTextOf(bytes, opts?) → { text, encoding, binary: false | 'wide' | 'narrow', cbor?: true, notes[] }
 *        opts.tolerant: a binary file cut short gives what was read plus a note (RECOVER, ORS.14)
 *
 * dxf-decode.js is copied byte for byte into another app (tools/takeoffcraft-test/cad-sync.mjs), so it is left alone; its
 * code page table is asked through decodeDxfBytes itself (labelOf below) instead of being copied here.
 */
import { decodeDxfBytes, dxfHeaderInfo } from './dxf-decode.js';
import { decodeParts, TextParts } from './textin.js';
import { isBinaryDxf, binaryDxfToText } from './dxf-binary.js';
import { isCbor, isCborDxf, cborDxfToText } from './dxf-cbor.js';   // FX.391: the same groups saved as CBOR
import { t } from './i18n.js';

const labels = new Map();
/** $DWGCODEPAGE name → TextDecoder label, by asking dxf-decode.js to read a two-line header in that code page. */
export function labelOf(codepage) {
  const cp = String(codepage || '').toUpperCase();
  if (!cp || !/^[A-Z0-9_-]+$/.test(cp)) return 'windows-1252';
  if (!labels.has(cp)) {
    const probe = new TextEncoder().encode('  9\n$ACADVER\n  1\nAC1009\n  9\n$DWGCODEPAGE\n  3\n' + cp + '\n');
    const b = new Uint8Array(probe.length + 2); b.set(probe); b[probe.length] = 0xff; b[probe.length + 1] = 0xfe;   // never valid UTF-8: the code page is used
    let label = 'windows-1252';
    try { label = decodeDxfBytes(b).encoding || label; } catch { /* a code page this engine has no decoder for */ }
    labels.set(cp, label === 'utf-8' ? 'windows-1252' : label);
  }
  return labels.get(cp);
}

export function dxfTextOf(bytes, opts = {}) {
  if (isCborDxf(bytes) || isCbor(bytes)) {   // FX.391: a drawing saved as CBOR (dxf-cbor.js); any other CBOR file is said to be that
    let r;
    try { r = cborDxfToText(bytes); }
    catch (err) { if (err && err.dxfCbor) throw Object.assign(new Error(t(err.dxfCbor.key, err.dxfCbor.vars)), { expected: true, dxfCbor: err.dxfCbor }); throw err; }
    return { text: r.text, encoding: 'cbor', binary: false, cbor: true, notes: [] };
  }
  if (isBinaryDxf(bytes)) {
    let r;
    try { r = binaryDxfToText(bytes, { labelOf, tolerant: !!opts.tolerant }); }
    catch (err) { if (err && err.dxfBinary) throw Object.assign(new Error(t('dxfbin.cut')), { expected: true, dxfBinary: err.dxfBinary }); throw err; }
    return { text: r.text, encoding: 'binary', binary: r.form, notes: r.notes.map((n) => t(n.key, n.vars)) };
  }
  const r = decodeDxfBytes(bytes);
  return { text: r.text, encoding: r.encoding, binary: false, notes: [] };
}

/** A file this size or smaller is decoded the way it always was (one string); a bigger one comes as parts (textin.js). */
export const WHOLE_STRING_BYTES = 32 * 1048576;
const WESTERN = new Set(['', 'ANSI_1252', 'ASCII', 'ISO8859-1', 'UNDEFINED']);

/**
 * dxfPartsOf(bytes, opts?) → { text: TextParts, encoding, binary, notes[] }: dxfTextOf for a file that may be too big for one string
 * (0.10 PERF.20). The same rules choose the encoding as decodeDxfBytes does; a text over WHOLE_STRING_BYTES is decoded one part of
 * about 4 MB at a time, so no string is the size of the file. readDxf takes the result as it takes a string.
 */
export function dxfPartsOf(bytes, opts = {}) {
  if (bytes.length <= (opts.wholeBytes ?? WHOLE_STRING_BYTES) || isBinaryDxf(bytes) || isCbor(bytes) || isCborDxf(bytes)) {
    const r = dxfTextOf(bytes, opts);
    return { ...r, text: new TextParts([r.text], r.encoding) };
  }
  const { version, codepage } = dxfHeaderInfo(bytes);
  const modern = /^AC10(2[1-9]|[3-9]\d)$/.test(version) || /^AC1[1-9]\d\d$/.test(version) && version > 'AC1020';
  const label = labelOf(codepage);
  const legacy = !(modern || WESTERN.has(codepage) || label === 'windows-1252');
  const utf8 = () => { try { return decodeParts(bytes, { fatal: true }); } catch { return null; } };
  const done = (text, encoding) => ({ text, encoding, binary: false, notes: [] });
  if (!legacy) {
    const u = utf8();
    return u ? done(u, 'utf-8') : done(decodeParts(bytes, { label }), label);
  }
  if (/^(windows-1251|windows-125[0-8]|iso-8859-\d|ibm866|windows-874)$/.test(label)) {
    const u = utf8();
    if (u && u.parts.some((p) => /[^\x00-\x7f]/.test(p)) && !u.parts.some((p) => /[\u0080-\u00ff]{2}/.test(p))) return done(u, 'utf-8');
  }
  return done(decodeParts(bytes, { label }), label);
}
