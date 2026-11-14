/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — record names of the stream format; messages are gds.* in the language file. */
/**
 * gds.js — a GDSII stream file (an IC layout) read for viewing and measuring (0.8 SU.752, a spike). DOM-free.
 *
 * Built from the published description of the stream format: records of a 2-byte length (with the 4-byte header), a record type, a
 * data type and the data; integers are big-endian; reals are 8-byte excess-64 base-16 floats. Only the layout is read; there is no
 * simulation, no design rule check and no editing of the library.
 *
 *   readGds(bytes) → { ok: true, lib: { name, userUnit (one database unit in user units, e.g. 0.001), meters (one database unit in metres) },
 *                      cells: Map(name → [element]), top: [name], stats } | { ok: false, error }
 *       element: { k: 'boundary' | 'path' | 'box' | 'text' | 'sref' | 'aref', layer, datatype, pts: [x, y, …] (database units),
 *                  width, pathtype, string, name (sref / aref), cols, rows, reflect, mag, angle }
 *   flattenGds(gds, topName, { max }) → { items: [{ k, layer, datatype, pts, width, pathtype, string, x, y, h, angle }], count, truncated }
 *       every reference and array placed (reflect about the X axis first, then magnify, then rotate, then move), in user units
 *   GDS_ERRORS: 'not_gds' · 'cut_off' · 'bad_record' · 'no_cells' · 'big'
 */

const MAX_BYTES = 256 * 1024 * 1024, MAX_ELEMENTS = 5_000_000;

function real8(dv, p) {
  const b0 = dv.getUint8(p), sign = b0 & 0x80 ? -1 : 1, exp = (b0 & 0x7f) - 64;
  let m = 0;
  for (let i = 1; i < 8; i++) m = m * 256 + dv.getUint8(p + i);
  return sign * (m / 72057594037927936) * Math.pow(16, exp);   // 2^56
}

export function readGds(input) {
  const b = input instanceof Uint8Array ? input : new Uint8Array(input || []);
  if (b.length < 12 || b.length > MAX_BYTES) return { ok: false, error: b.length > MAX_BYTES ? 'big' : 'not_gds' };
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  if (dv.getUint16(0) !== 6 || b[2] !== 0x00 || b[3] !== 0x02) return { ok: false, error: 'not_gds' };   // HEADER, one int16
  const lib = { name: '', userUnit: 1e-3, meters: 1e-9 }, cells = new Map(), stats = { elements: 0, cells: 0, records: 0 };
  let p = 0, cell = null, el = null, sawEnd = false;
  const text = (s, n) => { let t = ''; for (let i = 0; i < n && b[s + i]; i++) t += String.fromCharCode(b[s + i]); return t; };
  while (p + 4 <= b.length) {
    const len = dv.getUint16(p), rt = b[p + 2], dt = b[p + 3];
    if (len < 4 || p + len > b.length) return { ok: false, error: len < 4 ? 'bad_record' : 'cut_off' };
    const d = p + 4, n = len - 4;
    stats.records++;
    switch (rt) {
      case 0x02: lib.name = text(d, n); break;
      case 0x03: if (n >= 16) { lib.userUnit = real8(dv, d); lib.meters = real8(dv, d + 8); } break;
      case 0x05: cell = { name: '', els: [] }; break;
      case 0x06: if (cell) { cell.name = text(d, n); cells.set(cell.name, cell.els); stats.cells++; } break;
      case 0x07: cell = null; break;
      case 0x08: el = { k: 'boundary', layer: 0, datatype: 0, pts: [] }; break;
      case 0x09: el = { k: 'path', layer: 0, datatype: 0, pts: [], width: 0, pathtype: 0 }; break;
      case 0x0a: el = { k: 'sref', name: '', pts: [], reflect: false, mag: 1, angle: 0 }; break;
      case 0x0b: el = { k: 'aref', name: '', pts: [], cols: 1, rows: 1, reflect: false, mag: 1, angle: 0 }; break;
      case 0x0c: el = { k: 'text', layer: 0, datatype: 0, pts: [], string: '', mag: 1, angle: 0, reflect: false }; break;
      case 0x2d: el = { k: 'box', layer: 0, datatype: 0, pts: [] }; break;
      case 0x0d: if (el) el.layer = dv.getInt16(d); break;
      case 0x0e: case 0x16: case 0x2e: if (el) el.datatype = dv.getInt16(d); break;
      case 0x0f: if (el) el.width = dv.getInt32(d); break;
      case 0x21: if (el) el.pathtype = dv.getInt16(d); break;
      case 0x12: if (el) el.name = text(d, n); break;
      case 0x13: if (el) { el.cols = dv.getUint16(d); el.rows = dv.getUint16(d + 2); } break;
      case 0x19: if (el) el.string = text(d, n); break;
      case 0x1a: if (el) el.reflect = (dv.getUint16(d) & 0x8000) !== 0; break;
      case 0x1b: if (el) el.mag = real8(dv, d); break;
      case 0x1c: if (el) el.angle = real8(dv, d); break;
      case 0x10: if (el && dt === 3) { for (let i = 0; i + 4 <= n; i += 4) el.pts.push(dv.getInt32(d + i)); } break;
      case 0x11:
        if (el && cell) { if (++stats.elements > MAX_ELEMENTS) return { ok: false, error: 'big' }; cell.els.push(el); }
        el = null;
        break;
      case 0x04: sawEnd = true; p = b.length; continue;
      default: break;
    }
    p += len;
  }
  if (!sawEnd) return { ok: false, error: 'cut_off' };   // no ENDLIB: the file stops early
  if (!cells.size) return { ok: false, error: 'no_cells' };
  const used = new Set();
  for (const els of cells.values()) for (const e of els) if (e.k === 'sref' || e.k === 'aref') used.add(e.name);
  const top = [...cells.keys()].filter((n) => !used.has(n));
  return { ok: true, lib, cells, top: top.length ? top : [...cells.keys()].slice(0, 1), stats };
}

// a transform: x' = a x + c y + e, y' = b x + d y + f
const mul = (m, n) => [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
const place = (x, y, reflect, mag, angle) => {
  const r = (angle || 0) * Math.PI / 180, c = Math.cos(r) * mag, s = Math.sin(r) * mag, f = reflect ? -1 : 1;
  return [c, s, -s * f, c * f, x, y];   // reflect about the X axis first (y → −y), then magnify, rotate and move
};
const apply = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];

export function flattenGds(gds, topName, { max = 400000, depth = 16 } = {}) {
  const items = [];
  let count = 0, truncated = false;
  const u = gds.lib.userUnit > 0 ? gds.lib.userUnit : 1e-3;   // user units per database unit
  const walk = (name, m, d) => {
    const els = gds.cells.get(name);
    if (!els || d > depth || truncated) return;
    for (const e of els) {
      if (truncated) return;
      if (e.k === 'sref' || e.k === 'aref') {
        const base = e.pts.length >= 2 ? e.pts : [0, 0];
        if (e.k === 'sref') { walk(e.name, mul(m, place(base[0], base[1], e.reflect, e.mag || 1, e.angle)), d + 1); continue; }
        const cols = e.cols || 1, rows = e.rows || 1;
        if (e.pts.length < 6) continue;
        const [x0, y0, xc, yc, xr, yr] = e.pts;
        const dxc = (xc - x0) / cols, dyc = (yc - y0) / cols, dxr = (xr - x0) / rows, dyr = (yr - y0) / rows;
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
          if (truncated) return;
          walk(e.name, mul(m, place(x0 + c * dxc + r * dxr, y0 + c * dyc + r * dyr, e.reflect, e.mag || 1, e.angle)), d + 1);
        }
        continue;
      }
      if (++count > max) { truncated = true; return; }
      const pts = [];
      for (let i = 0; i + 1 < e.pts.length; i += 2) { const [x, y] = apply(m, e.pts[i], e.pts[i + 1]); pts.push(x * u, y * u); }
      const k = Math.hypot(m[0], m[1]);
      items.push({ k: e.k === 'box' ? 'boundary' : e.k, layer: e.layer, datatype: e.datatype, pts, width: (e.width || 0) * Math.abs(k) * u, pathtype: e.pathtype || 0, string: e.string, h: 1 * Math.abs(k), angle: Math.atan2(m[1], m[0]) });
    }
  };
  walk(topName, [1, 0, 0, 1, 0, 0], 0);
  return { items, count: Math.min(count, max), truncated };
}

const LAYER_COLORS = [1, 2, 3, 4, 5, 6, 30, 40, 50, 90, 110, 150, 170, 210, 230, 250];

/** The drawing's objects for flattened items: one layer per GDS layer/datatype, polygons as closed polylines, paths as polylines with width, text as text. */
export function gdsEntities(flat, { textHeight = 1 } = {}) {
  const layers = new Map(), ents = [];
  for (const it of flat.items) {
    const lname = 'GDS ' + it.layer + (it.datatype ? '/' + it.datatype : '');
    if (!layers.has(lname)) layers.set(lname, { name: lname, color: LAYER_COLORS[it.layer % LAYER_COLORS.length] });
    const pts = [];
    for (let i = 0; i + 1 < it.pts.length; i += 2) pts.push({ x: it.pts[i], y: it.pts[i + 1], b: 0 });
    if (it.k === 'text') { if (pts.length) ents.push({ type: 'text', layer: lname, color: null, x: pts[0].x, y: pts[0].y, h: textHeight, rot: it.angle || 0, s: it.string || '', ha: 'left', va: 'baseline', wf: 1 }); continue; }
    if (it.k === 'boundary') { if (pts.length > 1 && pts[0].x === pts[pts.length - 1].x && pts[0].y === pts[pts.length - 1].y) pts.pop(); if (pts.length >= 3) ents.push({ type: 'poly', layer: lname, color: null, closed: true, pts }); continue; }
    if (it.k === 'path' && pts.length >= 2) ents.push({ type: 'poly', layer: lname, color: null, closed: false, pts, ...(it.width > 0 ? { w: it.width } : {}) });
  }
  return { layers: [...layers.values()], entities: ents };
}
