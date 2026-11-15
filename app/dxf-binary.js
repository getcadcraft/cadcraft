/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dxf-binary.js — binary DXF in and out, as a translation to and from ASCII DXF. No DOM, no dependency, no import: it can
 * be copied unchanged to the other apps that read DXF.
 *
 * Written from the public DXF reference (Autodesk): "Binary DXF Files" (the sentinel, group codes as binary integers,
 * values in the binary form of their type) and "Group Code Value Types" (which codes carry strings, doubles, 16-, 32- and
 * 64-bit integers, booleans and binary chunks). Where the reference does not say how wide a value is in binary, the width
 * here was found by experiment on files from another program, run as a black box (see "Spec gap" below).
 *
 *   isBinaryDxf(bytes)                → true when the bytes start with the binary DXF sentinel
 *   binaryToAscii(bytes)              → { bytes: Uint8Array (an ASCII DXF), report: { groups, codeBytes, notes[] } }
 *   asciiToBinary(text | bytes, opts) → { bytes: Uint8Array (a binary DXF), report: { groups, codeBytes, notes[] } }
 *                                        opts.codeBytes: 2 (newer files such as R2000 and later; the default) or 1 (old files such as R12)
 *   dxfBytes(bytes)                   → the bytes as an ASCII DXF: a binary DXF translated, anything else as it is
 *
 * Why a translation: every DXF reader in the apps (dxf.js, dxf-model.js, decodeDxfBytes for code pages) already reads
 * ASCII DXF, so a binary file read through binaryToAscii gets exactly the same treatment, and the writers stay as they are.
 * Strings keep their bytes (the code page or UTF-8 decision stays with dxf-decode.js); a binary chunk becomes the hex text
 * ASCII DXF uses for it; a double becomes the shortest text that reads back as the same double, so nothing is rounded.
 *
 * Layout of a binary DXF: the 22-byte sentinel "AutoCAD Binary DXF" CR LF SUB NUL, then groups until the EOF group. Each
 * group is its code and its value. The code is 2 bytes, little-endian, in newer files (R2000 and later) and 1 byte in old
 * ones such as R12, where 255 is followed by a 2-byte code for codes over 254; the reader tells the two apart from the
 * first group's bytes, never from the version. The value: a string ends with a NUL; a double is 8 bytes IEEE 754; integers
 * are 2, 4 or 8 bytes, signed; a boolean is 1 byte; a binary chunk is a length byte and that many bytes. All little-endian.
 */

// ---- words (the English source; the apps' lang/en.json carries the same keys, so the page's language is used when it has them)
/* i18n-ignore-start: the English source of the keys below */
export const MESSAGES = {
  'dxfbin.truncated': 'This binary DXF ends in the middle of a group (byte {at}). The file is cut off or damaged.',
  'dxfbin.bad_code': 'This binary DXF has a group code the DXF reference does not define ({code}, byte {at}). The file is damaged.',
  'dxfbin.no_eof': 'This binary DXF has no end-of-file group. It was read up to its end.',
  'dxfbin.newlines': 'Line breaks inside {n} texts were read as spaces.',
  'dxfbin.bad_ascii_code': 'Line {line} is not a group code, so this DXF cannot be saved as binary.',
  'dxfbin.bad_number': 'Group {code} on line {line} is not a number ({value}), so this DXF cannot be saved as binary.',
  'dxfbin.chunk_too_long': 'Binary data in group {code} on line {line} is longer than 255 bytes, so this DXF cannot be saved as binary.',
};
/* i18n-ignore-end */

const FILL_RE_ = /\{\{|\}\}|\{([A-Za-z_][A-Za-z0-9_]*)\}/g;
/** The text for key (dxfbin.*) with its fills: the page's language through globalThis.ccI18n (i18n.js) when it has the key,
 *  else the English in MESSAGES — so Node and a page without the key read the English. */
function msg(key, fills = {}) {
  const i18n = globalThis.ccI18n;
  if (i18n && typeof i18n.has === 'function' && i18n.has(key)) return i18n.t(key, fills);
  const s = MESSAGES[key];
  if (s === undefined) return key;
  return s.replace(FILL_RE_, (m, k) => (m === '{{' ? '{' : m === '}}' ? '}' : fills[k] !== undefined && fills[k] !== null ? String(fills[k]) : m));
}

/** "AutoCAD Binary DXF" CR LF SUB NUL: the file's own mark, not a word for people. */
const SENTINEL = Uint8Array.from([..."AutoCAD Binary DXF"].map((c) => c.charCodeAt(0)).concat([0x0d, 0x0a, 0x1a, 0x00]));   // i18n-ignore

// Value kinds
const STR = 1, F64 = 2, I16 = 3, I32 = 4, I64 = 5, BOOL = 6, BIN = 7;

/** The kind of value a group code carries ("Group Code Value Types"), or 0 for a code the reference does not define.
 *  Spec gap: the reference lists 290–299 as "Boolean flag value" without a width; files carry 1 byte. 280–289 are
 *  listed as 16-bit integers and files carry 2 bytes. 1004 and 310–319 are binary chunks with a 1-byte length. */
export function valueKind(c) {
  if (c < 0) return 0;
  if (c <= 9) return STR;
  if (c <= 59) return c >= 10 ? F64 : 0;
  if (c <= 79) return c >= 60 ? I16 : 0;
  if (c <= 99) return c >= 90 ? I32 : 0;
  if (c === 100 || c === 101 || c === 102 || c === 105) return STR;
  if (c >= 110 && c <= 149) return F64;
  if (c >= 160 && c <= 169) return I64;
  if (c >= 170 && c <= 179) return I16;
  if (c >= 210 && c <= 239) return F64;
  if (c >= 270 && c <= 289) return I16;
  if (c >= 290 && c <= 299) return BOOL;
  if (c >= 300 && c <= 309) return STR;
  if (c >= 310 && c <= 319) return BIN;
  if (c >= 320 && c <= 369) return STR;   // handles
  if (c >= 370 && c <= 389) return I16;
  if (c >= 390 && c <= 399) return STR;
  if (c >= 400 && c <= 409) return I16;
  if (c >= 410 && c <= 419) return STR;
  if (c >= 420 && c <= 429) return I32;
  if (c >= 430 && c <= 439) return STR;
  if (c >= 440 && c <= 459) return I32;
  if (c >= 460 && c <= 469) return F64;
  if (c >= 470 && c <= 481) return STR;
  if (c === 999) return STR;
  if (c >= 1000 && c <= 1009) return c === 1004 ? BIN : STR;
  if (c >= 1010 && c <= 1059) return F64;
  if (c >= 1060 && c <= 1070) return I16;
  if (c === 1071) return I32;
  return 0;
}

export function isBinaryDxf(bytes) {
  if (!bytes || bytes.length < SENTINEL.length) return false;
  for (let i = 0; i < SENTINEL.length; i++) if (bytes[i] !== SENTINEL[i]) return false;
  return true;
}

/** The bytes as an ASCII DXF: a binary DXF translated (its notes are dropped: read them with binaryToAscii), else as is. */
export function dxfBytes(bytes) { return isBinaryDxf(bytes) ? binaryToAscii(bytes).bytes : bytes; }

const HEX = '0123456789ABCDEF';
const ascii = (s) => { const b = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i) & 0x7f; return b; };

/** A growing byte buffer. */
class Out {
  constructor(n) { this.b = new Uint8Array(Math.max(1024, n)); this.n = 0; }
  need(k) { if (this.n + k > this.b.length) { const nb = new Uint8Array(Math.max(this.b.length * 2, this.n + k)); nb.set(this.b.subarray(0, this.n)); this.b = nb; } }
  bytes(a) { this.need(a.length); this.b.set(a, this.n); this.n += a.length; }
  byte(v) { this.need(1); this.b[this.n++] = v; }
  text(s) { this.bytes(ascii(s)); }
  done() { return this.b.slice(0, this.n); }
}

/** Code width of a binary DXF: the first group is 0 SECTION, so a 2-byte code shows as two zero bytes before "S". */
function codeWidth(bytes) { return bytes[SENTINEL.length] === 0 && bytes[SENTINEL.length + 1] === 0 ? 2 : 1; }

export function binaryToAscii(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const width = codeWidth(bytes), end = bytes.length;
  const out = new Out(bytes.length * 1.6);
  const report = { groups: 0, codeBytes: width, notes: [] };
  let p = SENTINEL.length, newlines = 0, eof = false, lastCode = -1;
  const cut = (at) => { throw new Error(msg('dxfbin.truncated', { at })); };
  while (p < end) {
    const at = p;
    let code;
    if (width === 2) { if (p + 2 > end) cut(at); code = dv.getInt16(p, true); p += 2; }
    else { code = bytes[p++]; if (code === 255) { if (p + 2 > end) cut(at); code = dv.getInt16(p, true); p += 2; } }
    const kind = valueKind(code);
    if (!kind) throw new Error(msg('dxfbin.bad_code', { code, at }));
    let text;
    switch (kind) {
      case STR: {
        let q = p;
        while (q < end && bytes[q] !== 0) q++;
        if (q >= end) cut(at);
        let s = bytes.subarray(p, q);
        if (s.includes(0x0a) || s.includes(0x0d)) { s = s.map((v) => (v === 0x0a || v === 0x0d ? 0x20 : v)); newlines++; }
        out.text(String(code)); out.byte(0x0a); out.bytes(s); out.byte(0x0a);
        p = q + 1; report.groups++; lastCode = code;
        if (code === 0 && s.length === 3 && s[0] === 0x45 && s[1] === 0x4f && s[2] === 0x46) { eof = true; p = end; }   // "EOF"
        continue;
      }
      case F64: if (p + 8 > end) cut(at); text = numText(dv.getFloat64(p, true)); p += 8; break;
      case I16: if (p + 2 > end) cut(at); text = String(dv.getInt16(p, true)); p += 2; break;
      case I32: if (p + 4 > end) cut(at); text = String(dv.getInt32(p, true)); p += 4; break;
      case I64: if (p + 8 > end) cut(at); text = String(dv.getBigInt64(p, true)); p += 8; break;
      case BOOL: if (p + 1 > end) cut(at); text = String(bytes[p]); p += 1; break;
      case BIN: {
        if (p + 1 > end) cut(at);
        const n = bytes[p++];
        if (p + n > end) cut(at);
        let h = '';
        for (let k = 0; k < n; k++) { const v = bytes[p + k]; h += HEX[v >> 4] + HEX[v & 15]; }
        text = h; p += n; break;
      }
    }
    out.text(String(code) + '\n' + text + '\n');
    report.groups++; lastCode = code;
  }
  if (!eof) { report.notes.push(msg('dxfbin.no_eof')); if (lastCode !== -1) out.text('0\nEOF\n'); }
  if (newlines) report.notes.push(msg('dxfbin.newlines', { n: newlines }));
  return { bytes: out.done(), report };
}

/** The shortest text that reads back as the same double (JavaScript's own number to text), for a DXF reader. */
function numText(v) {
  if (Number.isNaN(v) || !Number.isFinite(v)) return '0';
  return Object.is(v, -0) ? '0' : String(v);
}

export function asciiToBinary(input, { codeBytes = 2 } = {}) {
  const src = typeof input === 'string' ? new TextEncoder().encode(input) : input;
  const out = new Out(src.length);
  const report = { groups: 0, codeBytes, notes: [] };
  out.bytes(SENTINEL);
  const scratch = new DataView(new ArrayBuffer(8));
  const put = (n) => out.bytes(new Uint8Array(scratch.buffer, 0, n));
  // walk the lines: a line ends at LF, a CR before it is dropped
  let p = 0, line = 0;
  const nextLine = () => {
    if (p >= src.length) return null;
    let q = p;
    while (q < src.length && src[q] !== 0x0a) q++;
    let e = q;
    if (e > p && src[e - 1] === 0x0d) e--;
    const s = src.subarray(p, e);
    p = q + 1; line++;
    return s;
  };
  const latin = (s) => { let r = ''; for (let k = 0; k < s.length; k++) r += String.fromCharCode(s[k]); return r; };
  for (;;) {
    const codeLine = nextLine();
    if (codeLine === null) break;
    const codeText = latin(codeLine).trim();
    if (codeText === '' && p >= src.length) break;   // a blank last line
    if (!/^-?\d+$/.test(codeText)) throw new Error(msg('dxfbin.bad_ascii_code', { line }));
    const code = parseInt(codeText, 10), kind = valueKind(code);
    if (!kind) throw new Error(msg('dxfbin.bad_ascii_code', { line }));
    const valueLine = nextLine() ?? new Uint8Array(0);
    if (codeBytes === 2) { scratch.setInt16(0, code, true); put(2); }
    else if (code < 255) out.byte(code);
    else { out.byte(255); scratch.setInt16(0, code, true); put(2); }
    report.groups++;
    if (kind === STR) {
      out.bytes(valueLine); out.byte(0);
      if (code === 0 && latin(valueLine).trim() === 'EOF') break;
      continue;
    }
    const v = latin(valueLine).trim();
    const bad = () => { throw new Error(msg('dxfbin.bad_number', { code, line, value: v.slice(0, 40) })); };
    switch (kind) {
      case F64: { const x = Number(v); if (v === '' || Number.isNaN(x)) bad(); scratch.setFloat64(0, x, true); put(8); break; }
      case I16: { const x = intOf(v, bad); scratch.setInt16(0, x, true); put(2); break; }
      case I32: { const x = intOf(v, bad); scratch.setInt32(0, x, true); put(4); break; }
      case I64: { if (!/^[+-]?\d+$/.test(v)) bad(); scratch.setBigInt64(0, BigInt.asIntN(64, BigInt(v)), true); put(8); break; }
      case BOOL: { const x = intOf(v, bad); out.byte(x ? 1 : 0); break; }
      case BIN: {
        if (!/^[0-9A-Fa-f]*$/.test(v) || v.length % 2) bad();
        const n = v.length / 2;
        if (n > 255) throw new Error(msg('dxfbin.chunk_too_long', { code, line }));
        out.byte(n);
        for (let k = 0; k < n; k++) out.byte(parseInt(v.substr(k * 2, 2), 16));
        break;
      }
    }
  }
  return { bytes: out.done(), report };
}

/** An integer group's text → its number; a value written with a decimal point (some writers do) is rounded. */
function intOf(v, bad) {
  if (/^[+-]?\d+$/.test(v)) return parseInt(v, 10);
  const x = Number(v);
  if (v === '' || !Number.isFinite(x)) bad();
  return Math.round(x);
}
