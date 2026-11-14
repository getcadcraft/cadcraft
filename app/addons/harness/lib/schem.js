/* SPDX-License-Identifier: Apache-2.0 */
/**
 * schem.js — read the Electrical add-on's schematic as wires between terminals (0.8 SU.892, session `cad-addons-08`). DOM-free; never edits.
 * An add-on may not import another add-on, so this is a small reader of the drawing format Electrical writes, and test.mjs checks it
 * against Electrical's own `scan` + `netlist` on the same drawing:
 *   - a symbol is a block reference whose block has a constant attribute `EL` ("v=1;sym=…;role=…;kind=…;pins=P1@x,y|P2@x,y", pins in the
 *     block's millimetres); its TAG attribute is the device tag, FUNC / LOC the plant and place, MFR / PART / ORDER the maker's numbers;
 *   - a wire is a line or polyline on a layer whose name starts with EL-WIRE; a wire end on a pin, on another wire's end or on the middle
 *     of another wire is connected; two wires crossing with no end there are not.
 *
 *   readSchematic(doc) → { devices, wires, nets, connections }
 *     device     { uid, id, space, e, tag, fullTag, sym, role, kind, pins: [{ tag, label, x, y }], attrs, at }
 *     connection { key, a: End, b: End, net, wires }  End = { device, pin (the pin's tag), name ("-K1:A1"), key ("-K1.P1") }
 *   A connection is one run of wire between two pins, in the order a net's pins lie on the sheet (top to bottom, left to right): a net with
 *   three pins is two connections, a chain (`shape: 'chain'`, the default), or two wires from the first pin (`shape: 'star'`). Both sides of a terminal stay apart (a field wire lands on one, a panel wire leaves the other).
 *   `key` is "<end key>|<end key>" sorted, so it survives renumbering and moving; it is what a wire's specification is kept under.
 */

const WIRE_RE = /^EL-WIRE/i;
const META = 'EL';
const TOL = 0.05;

function parseMeta(s) {
  if (typeof s !== 'string' || s.length > 2000 || !s.startsWith('v=1')) return null;
  const m = { pins: [] };
  for (const part of s.split(';')) {
    const i = part.indexOf('=');
    if (i < 1) continue;
    const k = part.slice(0, i), v = part.slice(i + 1);
    if (!/^[a-z][a-z0-9]{0,15}$/.test(k)) continue;
    if (k === 'pins') {
      for (const p of v.split('|').slice(0, 64)) {
        const mm = /^([A-Z][A-Z0-9_]{0,15})@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$/.exec(p);
        if (mm) m.pins.push({ tag: mm[1], x: +mm[2], y: +mm[3] });
      }
    } else if (k !== 'v') m[k] = v.slice(0, 200);
  }
  return m.role ? m : null;
}
function metaOf(blk) {
  if (!blk) return null;
  const d = (blk.attdefs || []).find((a) => a.tag === META && a.constant);
  return d ? parseMeta(d.def) : null;
}
function matrix(e, blk) {
  const base = blk?.base || { x: 0, y: 0 };
  const sx = e.sx ?? 1, sy = e.sy ?? 1, r = e.rot || 0, co = Math.cos(r), si = Math.sin(r);
  const a = co * sx, b = si * sx, c = -si * sy, d = co * sy;
  return [a, b, c, d, e.x - (a * base.x + c * base.y), e.y - (b * base.x + d * base.y)];
}
function wirePoints(e) {
  if (e.type === 'line') return [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }];
  if (e.type === 'poly' && Array.isArray(e.pts) && e.pts.length >= 2) { const pts = e.pts.map((p) => ({ x: p.x, y: p.y })); if (e.closed) pts.push({ ...pts[0] }); return pts; }
  return null;
}

class DSU {
  constructor() { this.p = new Map(); }
  find(a) { if (!this.p.has(a)) this.p.set(a, a); let r = a; while (this.p.get(r) !== r) r = this.p.get(r); let x = a; while (this.p.get(x) !== r) { const n = this.p.get(x); this.p.set(x, r); x = n; } return r; }
  union(a, b) { const ra = this.find(a), rb = this.find(b); if (ra !== rb) this.p.set(ra, rb); }
}
const d2 = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
function onSeg(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y, l2 = dx * dx + dy * dy;
  const u = l2 ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2)) : 0;
  return d2(p, { x: a.x + u * dx, y: a.y + u * dy });
}
/** Points by grid cell, for "what is near here". */
class Cells {
  constructor(size) { this.s = size; this.m = new Map(); }
  add(x0, y0, x1, y1, v) {
    const s = this.s, i0 = Math.floor(x0 / s), i1 = Math.floor(x1 / s), j0 = Math.floor(y0 / s), j1 = Math.floor(y1 / s);
    if ((i1 - i0 + 1) * (j1 - j0 + 1) > 1e6) return;
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const k = i + ',' + j; (this.m.get(k) || this.m.set(k, []).get(k)).push(v); }
  }
  at(p, r = 0) {
    const s = this.s, out = new Set();
    for (let i = Math.floor((p.x - r) / s); i <= Math.floor((p.x + r) / s); i++) for (let j = Math.floor((p.y - r) / s); j <= Math.floor((p.y + r) / s); j++) for (const v of this.m.get(i + ',' + j) || []) out.add(v);
    return [...out];
  }
}

const isWireLayer = (name) => WIRE_RE.test(String(name || ''));

export function readSchematic(doc, { tol = TOL, shape = 'chain' } = {}) {
  const blocks = doc?.blocks instanceof Map ? doc.blocks : new Map();
  const spaces = doc?.model instanceof Map ? [{ key: 'model', map: doc.model }, ...(doc.layouts || []).map((l, i) => ({ key: 'L' + i, map: l.entities }))] : [];
  const devices = [], wires = [];
  for (const sp of spaces) {
    for (const e of sp.map.values()) {
      const uid = sp.key + ':' + e.id;
      if (e.type === 'insert') {
        const blk = blocks.get(e.block), meta = metaOf(blk);
        if (!meta || ['frame', 'wireno', 'dot', 'cable', 'install', 'board', 'circuit'].includes(meta.role)) continue;
        const m = matrix(e, blk), a = e.attrs || {};
        const pins = meta.pins.map((p) => ({ tag: p.tag, label: String(a[p.tag] ?? ''), x: m[0] * p.x + m[2] * p.y + m[4], y: m[1] * p.x + m[3] * p.y + m[5] }));
        const tag = String(a.TAG || '').trim();
        devices.push({ uid, id: e.id, space: sp, e, tag, fullTag: tag, sym: meta.sym || '', role: meta.role, kind: meta.kind || '', pins, attrs: a, at: { x: e.x, y: e.y } });
      } else if ((e.type === 'line' || e.type === 'poly') && isWireLayer(e.layer)) {
        const pts = wirePoints(e);
        if (pts) wires.push({ uid, id: e.id, space: sp, e, pts });
      }
    }
  }
  // nets
  const dsu = new DSU(), pk = (d, p) => 'p:' + d.uid + '|' + p.tag;
  for (const d of devices) for (const p of d.pins) dsu.find(pk(d, p));
  const bySpace = new Map();
  for (const w of wires) (bySpace.get(w.space.key) || bySpace.set(w.space.key, { wires: [], devices: [] }).get(w.space.key)).wires.push(w);
  for (const d of devices) (bySpace.get(d.space.key) || bySpace.set(d.space.key, { wires: [], devices: [] }).get(d.space.key)).devices.push(d);
  const tol2 = tol * tol;
  for (const [, s] of bySpace) {
    const ends = new Cells(Math.max(tol * 20, 1)), pins = new Cells(Math.max(tol * 20, 1)), segs = new Cells(5);
    for (const w of s.wires) {
      dsu.find('w:' + w.uid);
      for (const [i, p] of [[0, w.pts[0]], [1, w.pts[w.pts.length - 1]]]) ends.add(p.x, p.y, p.x, p.y, { w, i, p });
      for (let k = 0; k + 1 < w.pts.length; k++) { const a = w.pts[k], b = w.pts[k + 1]; segs.add(Math.min(a.x, b.x) - tol, Math.min(a.y, b.y) - tol, Math.max(a.x, b.x) + tol, Math.max(a.y, b.y) + tol, { w, k, a, b, last: w.pts.length - 2 }); }
    }
    for (const d of s.devices) for (const p of d.pins) pins.add(p.x, p.y, p.x, p.y, { d, p });
    for (const w of s.wires) {
      for (const [i, p] of [[0, w.pts[0]], [1, w.pts[w.pts.length - 1]]]) {
        for (const o of ends.at(p, tol)) if ((o.w !== w || o.i !== i) && d2(p, o.p) <= tol2) dsu.union('w:' + w.uid, 'w:' + o.w.uid);
        for (const { d, p: pin } of pins.at(p, tol)) if (d2(p, pin) <= tol2) dsu.union('w:' + w.uid, pk(d, pin));
        for (const o of segs.at(p)) {
          if (onSeg(p, o.a, o.b) > tol2) continue;
          if ((o.k === 0 && d2(p, o.a) <= tol2) || (o.k === o.last && d2(p, o.b) <= tol2)) continue;   // that is an end, handled above
          if (o.w === w && ((i === 0 && o.k === 0) || (i === 1 && o.k === o.last))) continue;
          dsu.union('w:' + w.uid, 'w:' + o.w.uid);
        }
      }
    }
    for (const d of s.devices) for (const pin of d.pins) for (const o of segs.at(pin)) {   // a wire passing through a pin
      if (onSeg(pin, o.a, o.b) <= tol2) dsu.union('w:' + o.w.uid, pk(d, pin));
    }
  }
  const nets = new Map();
  const netFor = (root) => nets.get(root) || nets.set(root, { key: root, wires: [], pins: [] }).get(root);
  for (const w of wires) netFor(dsu.find('w:' + w.uid)).wires.push(w);
  for (const d of devices) for (const p of d.pins) netFor(dsu.find(pk(d, p))).pins.push({ device: d, tag: p.tag, x: p.x, y: p.y });
  const list = [...nets.values()].filter((n) => n.wires.length);
  const connections = [];
  for (const n of list) {
    const pinsHere = [...n.pins].sort((a, b) => b.y - a.y || a.x - b.x);
    const ends = pinsHere.map((p) => endOf(p.device, p.tag));
    // chain: each pin to the next; star: the first pin (top left) to every other
    for (let i = 0; i + 1 < ends.length; i++) {
      const p = shape === 'star' ? ends[0] : ends[i], q = ends[i + 1];
      const [a, b] = p.key <= q.key ? [p, q] : [q, p];
      connections.push({ key: a.key + '|' + b.key, a, b, net: n, wires: n.wires });
    }
  }
  connections.sort(cmpKey);
  return { devices, wires, nets: list, connections };
}

const cmpKey = (a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0);

/** What a device is called in a cabinet or a harness: its tag; a terminal also by its number ("-X1:3"). */
export const partId = (d) => (d.role === 'terminal' ? (d.tag || d.uid) + ':' + (String(d.attrs.P1 || '').trim() || '?') : d.tag || d.uid);

/** The name of a pin for people: "-K1:A1" (a terminal: its strip and number, "-X1:3"). */
export function endOf(d, pinTag) {
  const p = d.pins.find((x) => x.tag === pinTag);
  const dev = d.tag || '?';
  const label = d.role === 'terminal' ? String(d.attrs.P1 || '').trim() || pinTag : (p?.label || pinTag);
  return { device: d, pin: pinTag, name: dev + ':' + label, key: (d.tag || d.uid) + (d.role === 'terminal' ? '#' + String(d.attrs.P1 || '').trim() : '') + '.' + pinTag };
}
