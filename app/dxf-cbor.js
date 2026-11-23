/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the file's own field names and group codes; nothing here is read by a person (messages are keys). */
/**
 * dxf-cbor.js — a drawing's DXF groups ⇄ one CBOR file (FX.391; asked on Discord #dev-chat, 2026-11-14). DOM-free.
 *
 * Why it exists: CBOR (RFC 8949) is an open binary data format that most programming languages read with a standard
 * library, so a script can load a drawing's groups as typed values (numbers as numbers, text as text, binary chunks as
 * bytes) without writing a DXF parser. It is a Save as choice, not the standard way to save, and no other CAD program
 * opens it; CadCraft reads it back.
 *
 * The file is the same stream of (group code, value) pairs as a DXF 2000 text file. Nothing else is in it:
 *
 *   55799(                                  the "this is CBOR" tag: the file starts with the bytes d9 d9 f7
 *     { "format": "cadcraft-dxf-cbor",
 *       "version": 1,
 *       "dxf": "AC1015",                    the drawing's $ACADVER ("" when the header names none)
 *       "groups": [ code, value, code, value, … ] } )
 *
 *   value by the code's type (the DXF reference's table, groupType in dxf-binary.js):
 *     text → a text string · a real → a float (the shortest of 16 / 32 / 64 bits that holds it exactly) ·
 *     a 16 / 32 / 64-bit integer → an integer · a true/false group (290-299) → true / false ·
 *     a binary chunk (310-319, 1004) → a byte string
 *
 *   isCbor(bytes)                 → the bytes start with the CBOR tag (some CBOR file, ours or not)
 *   isCborDxf(bytes)              → it is one of these files (the tag or a map, and the format name near the start)
 *   textToCborDxf(text)           → Uint8Array
 *   cborDxfToText(bytes)          → { text, groups, version, notes[] }   throws Error(key) with .dxfCbor = { key, vars }
 *
 * Reading is forgiving about how another program wrote the values (an integer where a real belongs, a hex text for a
 * binary chunk, the fields in any order, no tag), and strict about what it cannot place: a group code outside the DXF
 * range or a value of the wrong kind stops the read and says which group.
 */
import { CborWriter, decode } from './cbor.js';
import { groupType, doubleText } from './dxf-binary.js';

export const CBOR_DXF_FORMAT = 'cadcraft-dxf-cbor';
export const CBOR_DXF_VERSION = 1;

export function isCbor(bytes) {
  return !!bytes && bytes.length > 3 && bytes[0] === 0xd9 && bytes[1] === 0xd9 && bytes[2] === 0xf7;
}

export function isCborDxf(bytes) {
  if (!bytes || bytes.length < 24) return false;
  const first = isCbor(bytes) ? bytes[3] : bytes[0];
  if (first >> 5 !== 5) return false;                       // a map comes first
  const n = Math.min(bytes.length, 160), name = CBOR_DXF_FORMAT;
  outer: for (let i = 0; i + name.length <= n; i++) {
    for (let k = 0; k < name.length; k++) if (bytes[i + k] !== name.charCodeAt(k)) continue outer;
    return true;
  }
  return false;
}

const bad = (key, vars = {}) => Object.assign(new Error(key), { dxfCbor: { key, vars } });

/** ASCII DXF text → the CBOR file. Lines that are not a (code, value) pair end the stream (as the text readers stop there). */
export function textToCborDxf(text) {
  text = String(text);
  const lines = text.split(/\r?\n/);
  let pairs = 0;
  for (let i = 0; i + 1 < lines.length; i += 2) {
    if (Number.isNaN(parseInt(lines[i], 10))) { if (!lines[i].trim()) break; throw bad('dxfcbor.bad_code', { line: i + 1 }); }
    pairs++;
  }
  const m = /\$ACADVER\r?\n\s*1\r?\n([^\r\n]*)/.exec(text.slice(0, 65536));
  const w = new CborWriter(Math.max(1024, Math.ceil(text.length * 0.6)));
  w.tag(55799).map(4);
  w.text('format').text(CBOR_DXF_FORMAT);
  w.text('version').uint(CBOR_DXF_VERSION);
  w.text('dxf').text(m ? m[1].trim().toUpperCase() : '');
  w.text('groups').array(pairs * 2);
  for (let i = 0, n = pairs * 2; i < n; i += 2) {
    const code = parseInt(lines[i], 10), raw = lines[i + 1];
    w.int(code);
    switch (groupType(code)) {
      case 'f64': { const x = parseFloat(raw); w.float(Number.isNaN(x) && !/nan/i.test(raw) ? 0 : x); break; }
      case 'i16': case 'i32': w.int(parseInt(raw, 10) || 0); break;
      case 'i64': { let b = 0n; try { b = BigInt(raw.trim()); } catch { b = 0n; } w.bigint(BigInt.asIntN(64, b)); break; }
      case 'bool': w.bool(!!parseInt(raw, 10)); break;
      case 'bin': {
        const hex = raw.trim(), len = hex.length >> 1, b = new Uint8Array(len);
        for (let k = 0; k < len; k++) b[k] = parseInt(hex.substr(k * 2, 2), 16) || 0;
        w.bytes(b);
        break;
      }
      default: w.text(code === 1 || code === 3 || (code >= 1000 && code <= 1009) ? raw : raw.trim());
    }
  }
  return w.done();
}

const HEX = '0123456789ABCDEF';
const hexOf = (b) => { let s = ''; for (let i = 0; i < b.length; i++) s += HEX[b[i] >> 4] + HEX[b[i] & 15]; return s; };
const whole = (v) => (typeof v === 'bigint' ? true : typeof v === 'number' && Number.isFinite(v) && Math.trunc(v) === v);

/** The CBOR file → ASCII DXF text, for the readers every DXF goes through. */
export function cborDxfToText(bytes) {
  let doc;
  try { doc = decode(bytes); }
  catch (err) { throw bad(err && err.code === 'cbor.cut' ? 'dxfcbor.cut' : 'dxfcbor.damaged', { at: err && err.at !== undefined ? err.at : 0 }); }
  if (!doc || typeof doc !== 'object' || doc.format !== CBOR_DXF_FORMAT) throw bad('dxfcbor.not_ours');
  if (typeof doc.version !== 'number' || doc.version < 1) throw bad('dxfcbor.damaged', { at: 0 });
  if (doc.version > CBOR_DXF_VERSION) throw bad('dxfcbor.newer', { version: doc.version });
  const g = doc.groups;
  if (!Array.isArray(g) || g.length % 2) throw bad('dxfcbor.damaged', { at: 0 });
  const out = new Array(g.length);
  for (let i = 0; i < g.length; i += 2) {
    const code = g[i], v = g[i + 1], n = i / 2 + 1;
    if (typeof code !== 'number' || Math.trunc(code) !== code || code < -5 || code > 1071) throw bad('dxfcbor.bad_group', { n });
    let s;
    switch (groupType(code)) {
      case 'f64':
        if (typeof v === 'number') s = doubleText(v);
        else if (typeof v === 'bigint') s = doubleText(Number(v));
        else throw bad('dxfcbor.bad_value', { n, code });
        break;
      case 'i16': case 'i32': case 'i64':
        if (whole(v)) s = String(v);
        else if (typeof v === 'boolean') s = v ? '1' : '0';
        else throw bad('dxfcbor.bad_value', { n, code });
        break;
      case 'bool':
        if (typeof v === 'boolean') s = v ? '1' : '0';
        else if (whole(v)) s = v ? '1' : '0';
        else throw bad('dxfcbor.bad_value', { n, code });
        break;
      case 'bin':
        if (v instanceof Uint8Array) s = hexOf(v);
        else if (typeof v === 'string' && /^[0-9a-fA-F]*$/.test(v.trim())) s = v.trim().toUpperCase();
        else throw bad('dxfcbor.bad_value', { n, code });
        break;
      default:
        if (typeof v === 'string') s = v;
        else if (typeof v === 'number' || typeof v === 'bigint') s = String(v);
        else throw bad('dxfcbor.bad_value', { n, code });
        // a text line cannot hold a line break or a NUL: caret notation, as DXF writes control characters
        if (/[\x00-\x1f]/.test(s)) s = s.replace(/[\x00-\x1f]/g, (c) => (c === '\t' ? '\t' : '^' + String.fromCharCode(c.charCodeAt(0) + 64)));
    }
    out[i] = String(code); out[i + 1] = s;
  }
  const ended = out.length >= 2 && out[out.length - 2] === '0' && out[out.length - 1] === 'EOF';
  if (!ended) out.push('0', 'EOF');
  return { text: out.join('\n') + '\n', groups: g.length / 2, version: typeof doc.dxf === 'string' ? doc.dxf : '', notes: [] };
}
