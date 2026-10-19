/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ptexport.js — EXPORTPOINTS (0.6 DF.7; Henrique Azevedo on Discord: "export points … for import into BIM tools"). No DOM:
 * bin/test-cadcraft.mjs runs it in Node; commands.js holds the command. The file follows CivilCraft's point files
 * (civilcraft/dev/points.js writePoints / parsePoints): one point per line, CRLF, 3 decimals, an empty Z when there is
 * none, a description in double quotes when it holds the delimiter or a quote. Columns: P point, N northing (y), E easting
 * (x), Z elevation, D description.
 *
 *   POINT_FORMATS                        { PNEZD, PENZD, XYZ } → column letters
 *   collectPoints(doc, ids, opt)         → [{ n, x, y, z, d, from: 'point' | 'block' }]: every POINT and every block
 *                                        reference among `ids` (all POINTs when `ids` is empty); opt { tag (the attribute
 *                                        whose value is a block's description; default the block's name), ucs (coordinates
 *                                        in it, DR.8), factor (× each coordinate: units → metres / feet), start (first
 *                                        number, default 1), blocks: false (POINTs only) }
 *   formatPoints(points, { format, delimiter (',' | '\t'), dec }) → the file's text
 *   blockTags(doc, ids)                  → the attribute tags the selected references carry (for the description question)
 *   UNIT_FACTOR(mmPerUnit, to)           → the factor for 'metres' | 'feet' | 'drawing'
 */
import { attrRows } from './attrs.js';
import { toUcs } from './ucs.js';

export const POINT_FORMATS = Object.freeze({ PNEZD: ['P', 'N', 'E', 'Z', 'D'], PENZD: ['P', 'E', 'N', 'Z', 'D'], XYZ: ['E', 'N', 'Z'] });

export function UNIT_FACTOR(mmPerUnit, to) {
  if (to === 'metres') return mmPerUnit ? mmPerUnit / 1000 : null;
  if (to === 'feet') return mmPerUnit ? mmPerUnit / 304.8 : null;
  return 1;
}

const valueOf = (e, blk, tag) => {
  if (!tag) return null;
  const r = attrRows(e, blk).find((x) => x.tag === tag);
  return r ? r.value : '';
};

export function blockTags(doc, ids) {
  const tags = new Set();
  for (const id of ids) {
    const e = doc.get(id);
    if (e?.type !== 'insert') continue;
    for (const r of attrRows(e, doc.blocks.get(e.block))) tags.add(r.tag);
  }
  return [...tags];
}

export function collectPoints(doc, ids, { tag = null, ucs = null, factor = 1, start = 1, blocks = true } = {}) {
  const list = ids && ids.size !== undefined ? [...ids] : [...(ids || [])];
  const ents = (list.length ? list.map((id) => doc.get(id)) : [...doc.entities.values()].filter((e) => e.type === 'point')).filter(Boolean);
  const out = [];
  let n = Number.isFinite(+start) ? Math.floor(+start) : 1;
  for (const e of ents) {
    let p, d = '', from;
    if (e.type === 'point') { p = { x: e.x, y: e.y }; from = 'point'; }
    else if (e.type === 'insert' && blocks) { p = { x: e.x, y: e.y }; from = 'block'; const v = valueOf(e, doc.blocks.get(e.block), tag); d = v === null ? String(e.block) : v; }
    else continue;
    const q = ucs ? toUcs(ucs, p) : p;
    const z = Number.isFinite(e.z) ? e.z : 0;
    out.push({ n: String(n++), x: q.x * factor, y: q.y * factor, z: z * factor, d: String(d).replace(/[\r\n]+/g, ' '), from });
  }
  return out;
}

export function formatPoints(points, { format = 'PNEZD', delimiter = ',', dec = 3 } = {}) {
  const cols = POINT_FORMATS[format] || POINT_FORMATS.PNEZD;
  const q = (s) => (s.includes(delimiter) || /["\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s);
  const num = (v) => (Number.isFinite(v) ? (Math.abs(v) < 0.5 * 10 ** -dec ? 0 : v).toFixed(dec) : '');
  const cell = (p, c) => ({ P: q(p.n), N: num(p.y), E: num(p.x), Z: num(p.z), D: q(p.d || '') })[c];
  return points.map((p) => cols.map((c) => cell(p, c)).join(delimiter)).join('\r\n') + (points.length ? '\r\n' : '');
}
