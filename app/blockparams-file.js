/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blockparams-file.js — block parameters (blockparams.js, 0.10 SU.1804) kept in DWG and DXF (0.11 session cad-11). DOM-free.
 * DWG cannot hold several visibility parameters in one block, nor a parameter table of our kind (docs/DWG-DYNAMIC-BLOCKS.md § SU.1804),
 * so the data travels the way the class table does (classes-file.js): an unused block CADCRAFT_BPARAMS whose POINTs carry one JSON text
 * as CADCRAFT xdata strings ("CCBPR:<n>:<230 characters>", ASCII only, so the bytes are the same in a DXF and a DWG). Another program
 * shows each reference as the block's objects (every state at once) and keeps the unused block; CadCraft reads the parameters back.
 *
 *   { format: 'cadcraft-bparams', version: 1,
 *     blocks: [{ name, bp, keys: [[index, bpk, type]…] }]   the definition's parameters, and which of its objects (by place in the block,
 *                                                          with the object type as a guard) carry which visibility key
 *     refs:   [{ sp, block, i, x, y, bp }] }               a reference's own values and states: its space ('' = the model, else the
 *                                                          sheet's name), its place among that block's references in that space, and
 *                                                          its insertion point as a guard (a file another program changed drops it)
 *
 *   BPARAMS_BLOCK, isBparamsBlock(name)
 *   bparamsPayload(doc) → [[string]…] one per POINT, or null when no block has parameters
 *   bparamsFromPayload(ents) → the data or null; ents = [{ cc: [string…] }]
 *   applyBparams(doc, data) — doc.load: puts `bp` on the definitions, `bpk` on their objects and `bp` on the references (untrusted data)
 */
import { cleanBp, cleanRef, hasBp, takesBp } from './blockparams.js';

export const BPARAMS_BLOCK = 'CADCRAFT_BPARAMS';
const PAYLOAD = 'cadcraft-bparams', TAG = 'CCBPR:', CHUNK = 230, MAX_TEXT = 8_000_000, MAX_REFS = 200000;
export const isBparamsBlock = (name) => String(name || '').toUpperCase() === BPARAMS_BLOCK;

const spaces = (doc) => [['', doc.model], ...(doc.layouts || []).map((l) => [String(l.name), l.entities])];
const near = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));

export function bparamsPayload(doc) {
  const blocks = [], withBp = new Set();
  for (const b of doc?.blocks?.values?.() || []) {
    if (!takesBp(b) || !hasBp(b.bp)) continue;
    const keys = [];
    (b.entities || []).forEach((e, i) => { if (Number.isInteger(e.bpk)) keys.push([i, e.bpk, String(e.type)]); });
    blocks.push({ name: b.name, bp: b.bp, keys });
    withBp.add(b.name);
  }
  if (!blocks.length) return null;
  const refs = [];
  for (const [sp, map] of spaces(doc)) {
    const seen = new Map();
    for (const e of map?.values?.() || []) {
      if (e.type !== 'insert' || !withBp.has(e.block)) continue;
      const i = seen.get(e.block) || 0; seen.set(e.block, i + 1);
      if (e.bp && refs.length < MAX_REFS) refs.push({ sp, block: e.block, i, x: e.x, y: e.y, bp: e.bp });
    }
  }
  const text = JSON.stringify({ format: PAYLOAD, version: 1, blocks, refs }).replace(/[^\x20-\x7e]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  const points = [];
  for (let i = 0; i < text.length; i += CHUNK) points.push([TAG + (points.length + 1) + ':' + text.slice(i, i + CHUNK)]);
  return points;
}

export function bparamsFromPayload(ents) {
  const parts = [];
  for (const e of ents || []) for (const s of e?.cc || []) { const m = /^CCBPR:(\d{1,7}):(.*)$/s.exec(String(s ?? '')); if (m) parts.push([+m[1], m[2]]); }
  if (!parts.length) return null;
  parts.sort((a, b) => a[0] - b[0]);
  const text = parts.map((p) => p[1]).join('');
  if (text.length > MAX_TEXT) return null;
  try {
    const o = JSON.parse(text);
    if (!o || o.format !== PAYLOAD || o.version !== 1 || !Array.isArray(o.blocks)) return null;
    return { blocks: o.blocks, refs: Array.isArray(o.refs) ? o.refs.slice(0, MAX_REFS) : [] };
  } catch { return null; }
}

/** → { blocks, keys, refs, dropped } how much was put back (dropped = keys or references that no longer line up with the file). */
export function applyBparams(doc, data) {
  const out = { blocks: 0, keys: 0, refs: 0, dropped: 0 };
  if (!data || !Array.isArray(data.blocks)) return out;
  const done = new Map();
  for (const rb of data.blocks) {
    const b = rb && typeof rb.name === 'string' ? doc.blocks.get(rb.name) : null;
    const bp = b && takesBp(b) ? cleanBp(rb.bp) : null;
    if (!bp) { if (rb) out.dropped++; continue; }
    b.bp = bp; out.blocks++;
    for (const k of Array.isArray(rb.keys) ? rb.keys : []) {
      const [i, key, type] = Array.isArray(k) ? k : [];
      const e = Number.isInteger(i) ? b.entities?.[i] : null;
      if (e && Number.isInteger(key) && key >= 0 && key <= 1e9 && String(e.type) === String(type)) { e.bpk = key; out.keys++; } else out.dropped++;
    }
    done.set(b.name, bp);
  }
  const bySpace = new Map(spaces(doc));
  const lists = new Map();
  for (const r of Array.isArray(data.refs) ? data.refs : []) {
    const bp = r && done.get(r.block), map = r && bySpace.get(String(r.sp ?? ''));
    if (!bp || !map || !Number.isInteger(r.i)) { out.dropped++; continue; }
    const lk = r.sp + '\u0000' + r.block;
    if (!lists.has(lk)) lists.set(lk, [...map.values()].filter((e) => e.type === 'insert' && e.block === r.block));
    const e = lists.get(lk)[r.i], ref = e && cleanRef(r.bp, bp);
    if (e && ref && near(e.x, +r.x) && near(e.y, +r.y)) { e.bp = ref; out.refs++; } else out.dropped++;
  }
  return out;
}
