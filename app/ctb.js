/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — file field names; the words a person reads are plotstyle.* in the language file. */
/**
 * ctb.js — a colour-dependent plot style table (.ctb) read into a plotstyle.js table (0.8 DC.14). DOM-free apart from the
 * DecompressionStream the browser already has (Node's zlib is used there).
 *
 *   readCtb(bytes) → Promise<{ ok: true, table, notes: [code] } | { ok: false, error }>
 *       error: 'not_ctb' (no readable table in it) · 'named' (a named table, .stb: out of scope) · 'big'
 *
 * WHAT THIS IS BUILT FROM, and what it is not. No CTB file was available (docs/spikes/ctb_PART_2.md) and no other program's
 * reader was read. This follows the commonly published description only: a short text header, then a zlib-compressed body of text
 * in a `key=value` / `name{ … }` layout, with an `aci_table` of one block per colour and a `lineweight_table`. Where a field's
 * meaning is a guess it is listed here and echoed to the person who imports ("notes"), because a pen that comes out wrong
 * would plot wrongly:
 *   - the compressed part is found by looking for a zlib stream after the header (not by a fixed offset), or the body is plain text;
 *   - aci_table block n is colour n + 1;
 *   - `color`: −1 (all bits set) = the object's own colour; otherwise the colour is 0x??RRGGBB (red in bits 16–23)  [ASSUMED: order];
 *   - `screen`: 0–100, kept;
 *   - `lineweight`: 0 = the object's own; n = row n of `lineweight_table` in millimetres  [ASSUMED: the 0 case];
 *   - grayscale, pen numbers, linetype, end and join styles, fill style: not read (the notes say so).
 * Nothing is checked against a CTB written by another program. TESTED ON: files made by tools/cadcraft-test/make-ctb.mjs from the same
 * description, so a pass proves the plumbing, not the guesses.
 */
import { cleanTable } from './plotstyle.js';

const MAX_BYTES = 8 * 1024 * 1024, MAX_TEXT = 16 * 1024 * 1024;

async function inflate(bytes) {
  if (typeof DecompressionStream !== 'undefined') {
    const ds = new DecompressionStream('deflate');
    const w = ds.writable.getWriter();
    w.write(bytes).catch(() => {}); w.close().catch(() => {});
    const out = [];
    let n = 0;
    const r = ds.readable.getReader();
    for (;;) { const { done, value } = await r.read(); if (done) break; n += value.length; if (n > MAX_TEXT) throw new Error('big'); out.push(value); }
    const all = new Uint8Array(n); let p = 0; for (const c of out) { all.set(c, p); p += c.length; }
    return all;
  }
  const z = await import('node:zlib');
  return new Uint8Array(z.inflateSync(bytes, { maxOutputLength: MAX_TEXT }));
}

const asText = (u8) => new TextDecoder('latin1').decode(u8);

/** The table's text: a zlib stream somewhere after the header, else the body as it is. */
async function bodyText(b) {
  const head = asText(b.subarray(0, Math.min(b.length, 600)));
  if (/aci_table/.test(asText(b.subarray(0, Math.min(b.length, 200000))))) return asText(b);   // not compressed
  for (let i = 8; i < Math.min(b.length - 2, 600); i++) {
    if (b[i] !== 0x78 || ![0x01, 0x5e, 0x9c, 0xda].includes(b[i + 1])) continue;
    try { const t = asText(await inflate(b.subarray(i))); if (/aci_table|plot_style/.test(t)) return t; } catch { /* not a stream: keep looking */ }
  }
  return head.startsWith('PIAFILEVERSION') ? '' : '';
}

/** `key=value` lines and `name{ … }` blocks → a tree: { values: {key: text}, blocks: {name: tree} }. */
export function parseBlocks(text) {
  const root = { values: {}, blocks: {} }, stack = [root];
  for (const raw of text.split(/\r?\n|\0/)) {
    const line = raw.trim();
    if (!line) continue;
    const cur = stack[stack.length - 1];
    if (line === '}') { if (stack.length > 1) stack.pop(); continue; }
    const open = /^([^={}\s][^={}]*?)\s*\{$/.exec(line);
    if (open) { const node = { values: {}, blocks: {} }; cur.blocks[open[1]] = node; if (stack.length < 8) stack.push(node); continue; }
    const kv = /^([^=]+?)\s*=\s*(.*)$/.exec(line);
    if (kv) cur.values[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1');
  }
  return root;
}

const num = (s, d = NaN) => { const v = Number(s); return Number.isFinite(v) ? v : d; };
const hex2 = (n) => n.toString(16).padStart(2, '0');

export async function readCtb(input) {
  const b = input instanceof Uint8Array ? input : new Uint8Array(input || []);
  if (b.length < 20 || b.length > MAX_BYTES) return { ok: false, error: b.length > MAX_BYTES ? 'big' : 'not_ctb' };
  let text;
  try { text = await bodyText(b); } catch { text = ''; }
  if (!text) return { ok: false, error: 'not_ctb' };
  const tree = parseBlocks(text);
  if (!tree.blocks.aci_table) return { ok: false, error: tree.blocks.plot_style ? 'named' : 'not_ctb' };
  const lw = tree.blocks.lineweight_table?.values || {};
  const pens = {};
  for (const [name, blk] of Object.entries(tree.blocks.aci_table.blocks)) {
    const n = Number(name);
    if (!Number.isInteger(n) || n < 0 || n > 254) continue;
    const v = blk.values, pen = {};
    const c = num(v.color);
    if (Number.isFinite(c) && c >>> 0 !== 0xffffffff) pen.color = '#' + hex2((c >>> 16) & 255) + hex2((c >>> 8) & 255) + hex2(c & 255);
    const sc = num(v.screen);
    if (Number.isFinite(sc) && sc >= 0 && sc < 100) pen.screen = Math.round(sc);
    const li = num(v.lineweight);
    if (Number.isInteger(li) && li > 0 && lw[li] !== undefined) { const mm = num(lw[li]); if (Number.isFinite(mm) && mm >= 0) pen.lw = Math.round(mm * 1000) / 1000; }
    if (Object.keys(pen).length) pens[n + 1] = pen;
  }
  const desc = String(tree.values.description ?? '').slice(0, 200);
  const r = cleanTable({ name: 'ctb', description: desc, pens });
  if (!r.ok) return { ok: false, error: r.error || 'not_ctb' };
  return { ok: true, table: r.table, notes: ['colour_order', 'lineweight_zero', 'not_read'] };
}
