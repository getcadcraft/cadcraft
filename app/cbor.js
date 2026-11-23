/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — a data coding; nothing here is read by a person (errors carry a key in `code`). */
/**
 * cbor.js — a small CBOR reader and writer (RFC 8949, "Concise Binary Object Representation"). DOM-free, no imports: any app
 * can host it. Written from the RFC only (FX.391).
 *
 *   new CborWriter(sizeHint?)   a growing buffer with one method per kind of value:
 *        .uint(n) .int(n) .bigint(b) .float(x) .text(s) .bytes(u8) .array(count) .map(count) .tag(n)
 *        .bool(v) .nil() .undef() .value(any) .done() → Uint8Array
 *        array(count) and map(count) write the head only: the caller then writes that many items (or pairs).
 *   encode(value)               → Uint8Array   (null, undefined, boolean, number, bigint, string, Uint8Array, Array, Map,
 *                                               plain object, Tagged)
 *   decode(bytes, opts?)        → value        opts.maxDepth (default 64). The whole input must be one item.
 *   new Tagged(tag, value)      a tagged item; decode gives one for every tag except 55799, which it unwraps
 *   SELF_DESCRIBED              55799, the tag that marks a file as CBOR (its bytes are d9 d9 f7)
 *
 * Choices: a whole number in the safe range is written as a CBOR integer, any other number as the shortest float (16, 32 or
 * 64 bits) that reads back to exactly the same value, so no digit of a double is lost. Lengths are always definite. The
 * reader takes indefinite lengths too. A map whose keys are all text decodes to a plain object, any other map to a Map.
 * An integer beyond the safe range decodes to a BigInt.
 */

export const SELF_DESCRIBED = 55799;

export class Tagged {
  constructor(tag, value) { this.tag = tag; this.value = value; }
}

const fail = (code, at) => Object.assign(new Error(code + (at === undefined ? '' : ' at byte ' + at)), { code, at });

const F32 = new Float32Array(1), U32 = new Uint32Array(F32.buffer);
/** The 16 bits of x as a half float, or -1 when a half cannot hold x exactly (x already reads back exactly as a 32-bit float). */
function halfBits(x) {
  F32[0] = x;
  const b = U32[0], sign = (b >>> 16) & 0x8000, exp = (b >>> 23) & 0xff, mant = b & 0x7fffff;
  if (exp === 0) return mant === 0 ? sign : -1;                       // zero (its sign kept); a 32-bit subnormal is too small
  if (exp === 255) return mant === 0 ? sign | 0x7c00 : -1;            // infinity (NaN is written by the caller)
  const e = exp - 127;
  if (e < -14 || e > 15 || (mant & 0x1fff) !== 0) return -1;          // normal halves only
  return sign | ((e + 15) << 10) | (mant >>> 13);
}

const ENC = new TextEncoder();

export class CborWriter {
  constructor(sizeHint = 1024) {
    this.buf = new Uint8Array(Math.max(64, sizeHint));
    this.dv = new DataView(this.buf.buffer);
    this.p = 0;
  }
  room(k) {
    if (this.p + k <= this.buf.length) return;
    const nb = new Uint8Array(Math.max(this.buf.length * 2, this.p + k + 1024));
    nb.set(this.buf.subarray(0, this.p));
    this.buf = nb; this.dv = new DataView(nb.buffer);
  }
  /** The head of an item: its major type (0-7) and an argument 0 … 2^53-1. */
  head(major, n) {
    this.room(9);
    const m = major << 5;
    if (n < 24) this.buf[this.p++] = m | n;
    else if (n < 0x100) { this.buf[this.p++] = m | 24; this.buf[this.p++] = n; }
    else if (n < 0x10000) { this.buf[this.p++] = m | 25; this.dv.setUint16(this.p, n); this.p += 2; }
    else if (n < 0x100000000) { this.buf[this.p++] = m | 26; this.dv.setUint32(this.p, n); this.p += 4; }
    else { this.buf[this.p++] = m | 27; this.dv.setUint32(this.p, Math.floor(n / 0x100000000)); this.dv.setUint32(this.p + 4, n % 0x100000000); this.p += 8; }
    return this;
  }
  uint(n) { return this.head(0, n); }
  /** A whole number in the safe range (the caller knows it is one). */
  int(n) { return n >= 0 ? this.head(0, n) : this.head(1, -1 - n); }
  /** A BigInt within 64 bits (-2^64 … 2^64-1). */
  bigint(b) {
    const neg = b < 0n, v = neg ? -1n - b : b;
    if (v <= 9007199254740991n) return this.head(neg ? 1 : 0, Number(v));
    if (v > 0xffffffffffffffffn) throw fail('cbor.too_big');
    this.room(9);
    this.buf[this.p++] = ((neg ? 1 : 0) << 5) | 27;
    this.dv.setBigUint64(this.p, v); this.p += 8;
    return this;
  }
  /** A float, in the shortest width that reads back to exactly x. */
  float(x) {
    this.room(9);
    if (Number.isNaN(x)) { this.buf[this.p++] = 0xf9; this.buf[this.p++] = 0x7e; this.buf[this.p++] = 0x00; return this; }
    if (Math.fround(x) === x) {
      const h = halfBits(x);
      if (h >= 0) { this.buf[this.p++] = 0xf9; this.dv.setUint16(this.p, h); this.p += 2; return this; }
      this.buf[this.p++] = 0xfa; this.dv.setFloat32(this.p, x); this.p += 4; return this;
    }
    this.buf[this.p++] = 0xfb; this.dv.setFloat64(this.p, x); this.p += 8;
    return this;
  }
  text(s) {
    let ascii = s.length < 64;
    if (ascii) for (let i = 0; i < s.length; i++) if (s.charCodeAt(i) > 127) { ascii = false; break; }
    if (ascii) {
      this.head(3, s.length); this.room(s.length);
      for (let i = 0; i < s.length; i++) this.buf[this.p++] = s.charCodeAt(i);
      return this;
    }
    const b = ENC.encode(s);
    this.head(3, b.length); this.room(b.length);
    this.buf.set(b, this.p); this.p += b.length;
    return this;
  }
  bytes(u8) { this.head(2, u8.length); this.room(u8.length); this.buf.set(u8, this.p); this.p += u8.length; return this; }
  array(count) { return this.head(4, count); }
  map(count) { return this.head(5, count); }
  tag(n) { return this.head(6, n); }
  bool(v) { this.room(1); this.buf[this.p++] = v ? 0xf5 : 0xf4; return this; }
  nil() { this.room(1); this.buf[this.p++] = 0xf6; return this; }
  undef() { this.room(1); this.buf[this.p++] = 0xf7; return this; }
  number(x) { return Number.isSafeInteger(x) && !Object.is(x, -0) ? this.int(x) : this.float(x); }
  value(v, depth = 0) {
    if (depth > 256) throw fail('cbor.too_deep');
    if (v === null) return this.nil();
    switch (typeof v) {
      case 'undefined': return this.undef();
      case 'boolean': return this.bool(v);
      case 'number': return this.number(v);
      case 'bigint': return this.bigint(v);
      case 'string': return this.text(v);
      case 'object': break;
      default: throw fail('cbor.cannot_encode');
    }
    if (v instanceof Uint8Array) return this.bytes(v);
    if (v instanceof Tagged) { this.tag(v.tag); return this.value(v.value, depth + 1); }
    if (Array.isArray(v)) { this.array(v.length); for (const x of v) this.value(x, depth + 1); return this; }
    if (v instanceof Map) { this.map(v.size); for (const [k, x] of v) { this.value(k, depth + 1); this.value(x, depth + 1); } return this; }
    if (ArrayBuffer.isView(v) || v instanceof ArrayBuffer) throw fail('cbor.cannot_encode');
    const keys = Object.keys(v);
    this.map(keys.length);
    for (const k of keys) { this.text(k); this.value(v[k], depth + 1); }
    return this;
  }
  done() { return this.buf.slice(0, this.p); }
}

export function encode(value) { return new CborWriter().value(value).done(); }

/** A reader over bytes: head() gives the next item's major type and argument; the typed readers below build on it. */
export class CborReader {
  constructor(bytes, opts = {}) {
    this.b = bytes;
    this.dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    this.p = 0;
    this.maxDepth = opts.maxDepth ?? 64;
    this.utf8 = null;
  }
  need(k) { if (this.p + k > this.b.length) throw fail('cbor.cut', this.p); }
  /** → { major, info, arg } — arg is a number, a BigInt beyond the safe range, or -1 for an indefinite length / a break. */
  head() {
    this.need(1);
    const at = this.p, ib = this.b[this.p++], major = ib >> 5, info = ib & 31;
    let arg;
    if (info < 24) arg = info;
    else if (info === 24) { this.need(1); arg = this.b[this.p++]; }
    else if (info === 25) { this.need(2); arg = this.dv.getUint16(this.p); this.p += 2; }
    else if (info === 26) { this.need(4); arg = this.dv.getUint32(this.p); this.p += 4; }
    else if (info === 27) {
      this.need(8);
      const hi = this.dv.getUint32(this.p), lo = this.dv.getUint32(this.p + 4);
      arg = hi < 0x200000 ? hi * 0x100000000 + lo : this.dv.getBigUint64(this.p);
      this.p += 8;
    } else if (info === 31 && major !== 0 && major !== 1 && major !== 6) arg = -1;
    else throw fail('cbor.bad_head', at);
    return { major, info, arg, at };
  }
  floatOf(info) {
    // head() already moved past the bytes: read them again from where they are
    if (info === 25) {
      const h = this.dv.getUint16(this.p - 2), s = h & 0x8000 ? -1 : 1, e = (h >> 10) & 31, m = h & 0x3ff;
      if (e === 0) return s * m * 2 ** -24;
      if (e === 31) return m ? NaN : s * Infinity;
      return s * (m + 1024) * 2 ** (e - 25);
    }
    if (info === 26) return this.dv.getFloat32(this.p - 4);
    return this.dv.getFloat64(this.p - 8);
  }
  len(h) {
    if (typeof h.arg !== 'number' || h.arg > 0x7fffffff) throw fail('cbor.too_long', h.at);
    return h.arg;
  }
  textOf(from, to) {
    let s = '', plain = to - from < 64;
    if (plain) for (let i = from; i < to; i++) { const c = this.b[i]; if (c > 127) { plain = false; break; } s += String.fromCharCode(c); }
    if (plain) return s;
    try { return (this.utf8 || (this.utf8 = new TextDecoder('utf-8', { fatal: true }))).decode(this.b.subarray(from, to)); }
    catch { throw fail('cbor.bad_text', from); }
  }
  /** The bytes of a byte or text string whose head was just read (an indefinite one is put together from its chunks). */
  stringBytes(h) {
    if (h.arg !== -1) { const n = this.len(h); this.need(n); const from = this.p; this.p += n; return [from, this.p]; }
    const parts = []; let total = 0;
    for (;;) {
      const c = this.head();
      if (c.major === 7 && c.info === 31) break;
      if (c.major !== h.major || c.arg === -1) throw fail('cbor.bad_chunk', c.at);
      const n = this.len(c); this.need(n); parts.push(this.b.subarray(this.p, this.p + n)); this.p += n; total += n;
    }
    const all = new Uint8Array(total); let o = 0;
    for (const part of parts) { all.set(part, o); o += part.length; }
    return all;
  }
  item(depth = 0) {
    if (depth > this.maxDepth) throw fail('cbor.too_deep', this.p);
    const h = this.head();
    switch (h.major) {
      case 0: return h.arg;
      case 1: return typeof h.arg === 'bigint' ? -1n - h.arg : -1 - h.arg;
      case 2: { const r = this.stringBytes(h); return Array.isArray(r) ? this.b.slice(r[0], r[1]) : r; }
      case 3: {
        const r = this.stringBytes(h);
        if (Array.isArray(r)) return this.textOf(r[0], r[1]);
        try { return new TextDecoder('utf-8', { fatal: true }).decode(r); } catch { throw fail('cbor.bad_text', h.at); }
      }
      case 4: {
        const out = [];
        if (h.arg === -1) { while (!this.atBreak()) out.push(this.item(depth + 1)); return out; }
        const n = this.len(h);
        if (n > this.b.length - this.p) throw fail('cbor.cut', h.at);   // every item is at least one byte
        for (let i = 0; i < n; i++) out.push(this.item(depth + 1));
        return out;
      }
      case 5: {
        const pairs = [];
        if (h.arg === -1) { while (!this.atBreak()) pairs.push([this.item(depth + 1), this.item(depth + 1)]); }
        else {
          const n = this.len(h);
          if (n * 2 > this.b.length - this.p) throw fail('cbor.cut', h.at);
          for (let i = 0; i < n; i++) pairs.push([this.item(depth + 1), this.item(depth + 1)]);
        }
        if (pairs.every(([k]) => typeof k === 'string')) { const o = {}; for (const [k, v] of pairs) if (k !== '__proto__') o[k] = v; return o; }
        return new Map(pairs);
      }
      case 6: { const v = this.item(depth + 1); return h.arg === SELF_DESCRIBED ? v : new Tagged(h.arg, v); }
      default:
        if (h.info === 20) return false;
        if (h.info === 21) return true;
        if (h.info === 22) return null;
        if (h.info === 23) return undefined;
        if (h.info >= 25 && h.info <= 27) return this.floatOf(h.info);
        if (h.info === 31) throw fail('cbor.stray_break', h.at);
        return new Tagged('simple', h.arg);   // an unassigned simple value: kept, never guessed
    }
  }
  /** At the "break" that ends an indefinite array or map? Steps over it when so. */
  atBreak() { this.need(1); if (this.b[this.p] === 0xff) { this.p++; return true; } return false; }
}

export function decode(bytes, opts = {}) {
  const r = new CborReader(bytes, opts);
  const v = r.item(0);
  if (r.p !== bytes.length) throw fail('cbor.trailing', r.p);
  return v;
}
