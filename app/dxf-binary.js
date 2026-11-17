/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the file signature, group codes and code page names; nothing here is read by a person (the one message is a key). */
/**
 * dxf-binary.js — binary DXF ⇄ the text form of the same groups (1.0 ORS.18). DOM-free, no imports: any app can host it.
 * Written from the published DXF reference ("Binary DXF files") only.
 *
 * A binary DXF is the same stream of (group code, value) pairs as an ASCII DXF, stored compactly:
 *   the 22-byte signature "AutoCAD Binary DXF\r\n\x1a\0", then per group
 *   - the code: 2 bytes little-endian (R13 and later), or 1 byte in the older form, where 255 means "a 2-byte code follows"
 *   - the value by the code's type: a NUL-terminated string, a 64-bit double, a 16 / 32 / 64-bit integer, one byte for a
 *     true/false group (290-299), or a binary chunk (310-319 and 1004: one length byte, then the bytes).
 * Everything after the group stream is shared with the text reader, so this module only turns one form into the other:
 *
 *   isBinaryDxf(bytes)                      → true when the bytes start with the signature
 *   binaryDxfToText(bytes, opts?)           → { text, form: 'wide' | 'narrow', groups, notes[] }
 *        opts.labelOf(codepage) → TextDecoder label for the header's $DWGCODEPAGE (dxf-decode.js gives its table)
 *        opts.tolerant → a file cut short gives what was read (and a note) instead of an error (RECOVER, ORS.14)
 *   textToBinaryDxf(text, opts?)            → Uint8Array   (opts.form 'wide' (default) | 'narrow' = the 1-byte-code form)
 *   groupType(code)                         → 'str' | 'f64' | 'i16' | 'i32' | 'i64' | 'bool' | 'bin'
 *
 * Numbers survive exactly: a double is written to text with the shortest digits that read back to the same double.
 * Strings: R2007 and later (AC1021+) are UTF-8; older files are in the header's code page, read as UTF-8 first when the
 * bytes allow it (the same rule dxf-decode.js uses for text files). Writing keeps ASCII as is and, for an older version,
 * anything else as \U+XXXX (what the text writers already do), so no code page table is needed to save.
 */

export const BINARY_DXF_SIGNATURE = 'AutoCAD Binary DXF\r\n\x1a\0';
const SIG = Uint8Array.from(BINARY_DXF_SIGNATURE, (c) => c.charCodeAt(0));

export function isBinaryDxf(bytes) {
  if (!bytes || bytes.length < 22) return false;
  for (let i = 0; i < 18; i++) if (bytes[i] !== SIG[i]) return false;   // the words; the four bytes after are checked loosely (some writers differ)
  return true;
}

/** The storage type of a group code's value in a binary DXF (DXF reference, "Group code value types"). */
export function groupType(code) {
  if (code < 0) return 'str';
  if (code <= 9) return 'str';
  if (code <= 59) return 'f64';
  if (code <= 89) return 'i16';
  if (code <= 99) return 'i32';
  if (code <= 109) return 'str';
  if (code <= 149) return 'f64';
  if (code <= 159) return 'str';
  if (code <= 169) return 'i64';
  if (code <= 179) return 'i16';
  if (code <= 209) return 'str';
  if (code <= 239) return 'f64';
  if (code <= 269) return 'str';
  if (code <= 289) return 'i16';
  if (code <= 299) return 'bool';
  if (code <= 309) return 'str';
  if (code <= 319) return 'bin';
  if (code <= 369) return 'str';
  if (code <= 389) return 'i16';
  if (code <= 399) return 'str';
  if (code <= 409) return 'i16';
  if (code <= 419) return 'str';
  if (code <= 429) return 'i32';
  if (code <= 439) return 'str';
  if (code <= 459) return 'i32';
  if (code <= 469) return 'f64';
  if (code <= 998) return 'str';
  if (code === 999) return 'str';
  if (code === 1004) return 'bin';
  if (code <= 1009) return 'str';
  if (code <= 1059) return 'f64';
  if (code <= 1070) return 'i16';
  if (code === 1071) return 'i32';
  return 'str';
}

const HEX = '0123456789ABCDEF';
const hexOf = (b, from, to) => { let s = ''; for (let i = from; i < to; i++) s += HEX[b[i] >> 4] + HEX[b[i] & 15]; return s; };
/** A double as text that reads back to the same double; whole numbers keep a ".0" as DXF writers give them. */
export function doubleText(x) {
  if (!Number.isFinite(x)) return Number.isNaN(x) ? 'nan' : x > 0 ? '1e999' : '-1e999';   // kept visible: the text reader and AUDIT decide what to do with it
  if (Object.is(x, -0)) return '-0.0';
  const s = String(x);
  return /[.e]/.test(s) ? s : s + '.0';
}

class Cut extends Error {}

function parse(bytes, wide, tolerant) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const n = bytes.length;
  const codes = [], kinds = [], vals = [];   // vals: number | string | [from, to] (a string's byte range)
  let p = 22, cut = null;
  const need = (k) => { if (p + k > n) throw new Cut('cut'); };
  try {
    while (p < n) {
      const at = p;
      let code;
      if (wide) { need(2); code = dv.getInt16(p, true); p += 2; }
      else { need(1); code = bytes[p++]; if (code === 255) { need(2); code = dv.getInt16(p, true); p += 2; } }
      if (code < -5 || code > 1071) throw new Cut('code ' + code + ' at byte ' + at);
      const kind = groupType(code);
      let v;
      switch (kind) {
        case 'f64': need(8); v = dv.getFloat64(p, true); p += 8; break;
        case 'i16': need(2); v = dv.getInt16(p, true); p += 2; break;
        case 'i32': need(4); v = dv.getInt32(p, true); p += 4; break;
        case 'i64': need(8); v = dv.getBigInt64(p, true); p += 8; break;
        case 'bool': need(1); v = bytes[p++] ? 1 : 0; break;
        case 'bin': { need(1); const len = bytes[p++]; need(len); v = hexOf(bytes, p, p + len); p += len; break; }
        default: { let e = p; while (e < n && bytes[e] !== 0) e++; if (e >= n) { p = at; throw new Cut('cut'); } v = [p, e]; p = e + 1; }
      }
      codes.push(code); kinds.push(kind); vals.push(v);
      if (code === 0 && kind === 'str' && v[1] - v[0] === 3 && bytes[v[0]] === 69 && bytes[v[0] + 1] === 79 && bytes[v[0] + 2] === 70) break;   // 0 EOF
    }
  } catch (err) {
    if (!(err instanceof Cut)) throw err;
    cut = { at: p, why: err.message };
    if (!tolerant) throw Object.assign(new Error('dxfbin.cut'), { dxfBinary: cut });
  }
  return { codes, kinds, vals, cut };
}

/** Does this reading of the first groups look like a DXF (0 SECTION, 999 comment or 0 EOF first; codes in range)? */
function plausible(bytes, wide) {
  try {
    const r = parse(bytes.subarray(0, Math.min(bytes.length, 22 + 4096)), wide, true);
    if (!r.codes.length) return false;
    const c0 = r.codes[0];
    if (c0 !== 0 && c0 !== 999) return false;
    if (c0 === 0) { const [a, b] = r.vals[0]; const w = String.fromCharCode(...bytes.subarray(a, b)); if (w !== 'SECTION' && w !== 'EOF') return false; }
    return r.codes.length > 1 || bytes.length < 40;
  } catch { return false; }
}

const asciiOf = (b, from, to) => { let s = ''; for (let i = from; i < to; i++) s += String.fromCharCode(b[i]); return s; };

export function binaryDxfToText(bytes, opts = {}) {
  if (!isBinaryDxf(bytes)) throw new Error('dxfbin.not_binary');
  const wide = plausible(bytes, true) ? true : plausible(bytes, false) ? false : !(bytes[22] === 0 && bytes[23] !== 0);
  const { codes, kinds, vals, cut } = parse(bytes, wide, !!opts.tolerant);
  // the header names the version and the code page of every string
  let version = '', codepage = '';
  for (let i = 0; i + 1 < codes.length && i < 4000; i++) {
    if (codes[i] !== 9) continue;
    const name = asciiOf(bytes, vals[i][0], vals[i][1]);
    if (name === '$ACADVER' && kinds[i + 1] === 'str') version = asciiOf(bytes, vals[i + 1][0], vals[i + 1][1]).trim().toUpperCase();
    else if (name === '$DWGCODEPAGE' && kinds[i + 1] === 'str') codepage = asciiOf(bytes, vals[i + 1][0], vals[i + 1][1]).trim().toUpperCase();
    if (codes[i] === 0 && i > 2 && version && codepage) break;
  }
  const modern = /^AC1\d{3}$/.test(version) && version >= 'AC1021';
  const label = (opts.labelOf && opts.labelOf(codepage)) || 'windows-1252';
  let utf8 = null, legacy = null;
  const strOf = (from, to) => {
    let plain = true;
    for (let i = from; i < to; i++) if (bytes[i] > 126 || bytes[i] < 32) { plain = false; break; }
    if (plain) return asciiOf(bytes, from, to);
    const part = bytes.subarray(from, to);
    let s = null;
    try { s = (utf8 || (utf8 = new TextDecoder('utf-8', { fatal: true }))).decode(part); } catch { s = null; }
    if (s === null || (!modern && label !== 'windows-1252' && /[\u0080-ÿ]{2}/.test(s))) {
      if (!legacy) { try { legacy = new TextDecoder(label); } catch { legacy = new TextDecoder('windows-1252'); } }
      s = legacy.decode(part);
    }
    // a text line cannot hold a line break or a NUL: caret notation, as DXF writes control characters
    return s.replace(/[\x00-\x1f]/g, (c) => (c === '\t' ? '\t' : '^' + String.fromCharCode(c.charCodeAt(0) + 64)));
  };
  const out = [];
  for (let i = 0; i < codes.length; i++) {
    const v = vals[i];
    let s;
    switch (kinds[i]) {
      case 'f64': s = doubleText(v); break;
      case 'str': s = strOf(v[0], v[1]); break;
      default: s = String(v);
    }
    out.push(String(codes[i]), s);
  }
  const notes = [];
  if (cut) {
    notes.push({ key: 'dxfbin.note.cut', vars: { groups: codes.length, at: cut.at } });
    if (!(codes.length && codes[codes.length - 1] === 0 && out[out.length - 1] === 'EOF')) out.push('0', 'EOF');
  }
  return { text: out.join('\n') + '\n', form: wide ? 'wide' : 'narrow', groups: codes.length, version, codepage, notes, cut };
}

/** ASCII DXF text → binary DXF bytes. Lines that are not a (code, value) pair end the stream (as the text readers stop there). */
export function textToBinaryDxf(text, opts = {}) {
  const wide = opts.form !== 'narrow';
  const lines = String(text).split(/\r?\n/);
  const m = /\$ACADVER\r?\n\s*1\r?\n([^\r\n]*)/.exec(text.slice(0, 65536));
  const version = m ? m[1].trim().toUpperCase() : '';
  const modern = /^AC1\d{3}$/.test(version) && version >= 'AC1021';
  const enc = new TextEncoder();
  let buf = new Uint8Array(Math.max(1024, Math.ceil(text.length * 0.6))), p = 0;
  let dv = new DataView(buf.buffer);
  const room = (k) => {
    if (p + k <= buf.length) return;
    const nb = new Uint8Array(Math.max(buf.length * 2, p + k + 1024)); nb.set(buf.subarray(0, p)); buf = nb; dv = new DataView(buf.buffer);
  };
  room(22); buf.set(SIG, 0); p = 22;
  for (let i = 0; i + 1 < lines.length; i += 2) {
    const code = parseInt(lines[i], 10);
    if (Number.isNaN(code)) { if (!lines[i].trim()) break; throw Object.assign(new Error('dxfbin.bad_code'), { line: i + 1 }); }
    const raw = lines[i + 1];
    room(4);
    if (wide) { dv.setInt16(p, code, true); p += 2; }
    else if (code >= 0 && code < 255) buf[p++] = code;
    else { buf[p++] = 255; dv.setInt16(p, code, true); p += 2; }
    switch (groupType(code)) {
      case 'f64': { room(8); const x = parseFloat(raw); dv.setFloat64(p, Number.isNaN(x) && !/nan/i.test(raw) ? 0 : x, true); p += 8; break; }
      case 'i16': { room(2); dv.setInt16(p, parseInt(raw, 10) || 0, true); p += 2; break; }
      case 'i32': { room(4); dv.setInt32(p, parseInt(raw, 10) || 0, true); p += 4; break; }
      case 'i64': { room(8); let b = 0n; try { b = BigInt(raw.trim()); } catch { b = 0n; } dv.setBigInt64(p, BigInt.asIntN(64, b), true); p += 8; break; }
      case 'bool': { room(1); buf[p++] = parseInt(raw, 10) ? 1 : 0; break; }
      case 'bin': {
        const hex = raw.trim(), len = Math.min(255, hex.length >> 1);
        room(1 + len); buf[p++] = len;
        for (let k = 0; k < len; k++) buf[p++] = parseInt(hex.substr(k * 2, 2), 16) || 0;
        break;
      }
      default: {
        let s = code === 1 || code === 3 || (code >= 1000 && code <= 1009) ? raw : raw.trim();
        if (/[^\x00-\x7f]/.test(s)) {
          if (modern) { const b = enc.encode(s); room(b.length + 1); buf.set(b, p); p += b.length; buf[p++] = 0; break; }
          s = s.replace(/[^\x00-\x7f]/g, (ch) => '\\U+' + ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0'));
        }
        room(s.length + 1);
        for (let k = 0; k < s.length; k++) { const c = s.charCodeAt(k); buf[p++] = c === 0 ? 32 : c; }
        buf[p++] = 0;
      }
    }
  }
  return buf.slice(0, p);
}
