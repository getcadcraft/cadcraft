/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet.js — the circuit sheet (0.9 SU.1084): a lib/schematic `Schematic` whose symbols are parts (core/parts.js), with the drawing data in each
 * symbol's attrs {x, y, rot, …typed values}. Wires join pins; a junction is a one-pin symbol; a net name is a label on a pin. DOM-free.
 * File format `cc-circuit` v1 = { format, version, name, schematic: Schematic.toJSON() }; reading checks every field (a file is untrusted).
 */
import { Schematic } from '../lib/schematic/index.js';
import { PARTS, GRID, rotate, defaults, prefixOf, hasPart } from './parts.js';

export const FORMAT = 'cc-circuit', VERSION = 1;
export const LIMITS = { symbols: 3000, wires: 9000, labels: 3000, text: 40 };
export const snap = (v) => Math.round(v / GRID) * GRID;

export function newSheet(name = '') {
  const s = new Schematic(name, 'other');
  s.addSheet('Sheet 1', 's1');
  return s;
}

/** Next free tag for a prefix: R1, R2, … (instruments XM1, XS1, XP1). Parts with no prefix get none. */
export function nextTag(sch, type) {
  const p = prefixOf(type);
  if (!p) return '';
  const used = new Set(sch.symbols.map((s) => s.tag));
  for (let n = 1; ; n++) if (!used.has(p + n)) return p + n;
}

export function pinsOf(type) { return PARTS[type].pins.map((p) => ({ id: p.id, name: p.name, kind: 'passive' })); }

export function placePart(sch, type, x, y, rot = 0, values = {}) {
  if (!hasPart(type)) throw new Error('unknown part ' + type);
  const sym = sch.addSymbol({ tag: nextTag(sch, type), type, pins: pinsOf(type), attrs: { x: snap(x), y: snap(y), rot: ((rot % 4) + 4) % 4, ...defaults(type), ...values } });
  return sym;
}

/** Absolute position of a pin ref "sym.pin". */
export function pinPos(sch, ref) {
  const i = String(ref).lastIndexOf('.'), sym = sch.symbol(ref.slice(0, i)), def = sym && PARTS[sym.type], pin = def && def.pins.find((p) => p.id === ref.slice(i + 1));
  if (!pin) return null;
  const [dx, dy] = rotate(pin.x, pin.y, sym.attrs.rot);
  return { x: sym.attrs.x + dx, y: sym.attrs.y + dy };
}

/** All pin refs with their positions. */
export function allPins(sch) {
  const out = [];
  for (const s of sch.symbols) for (const p of PARTS[s.type].pins) out.push({ ref: s.id + '.' + p.id, sym: s.id, pin: p.id, ...pinPos(sch, s.id + '.' + p.id) });
  return out;
}

/** The drawn path of a wire: horizontal from its first pin, then vertical. */
export function wirePath(sch, w) {
  const a = pinPos(sch, w.from), b = pinPos(sch, w.to);
  if (!a || !b) return [];
  if (a.x === b.x || a.y === b.y) return [a, b];
  return [a, { x: b.x, y: a.y }, b];
}

function distSeg(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y, l2 = dx * dx + dy * dy;
  let t = l2 ? ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2 : 0; t = Math.max(0, Math.min(1, t));
  const x = a.x + t * dx, y = a.y + t * dy;
  return { d: Math.hypot(p.x - x, p.y - y), x, y };
}

/** The wire nearest to a point (within tol) with the point on it, or null. */
export function wireAt(sch, p, tol = 6) {
  let best = null;
  for (const w of sch.wires) {
    const path = wirePath(sch, w);
    for (let i = 0; i + 1 < path.length; i++) { const r = distSeg(p, path[i], path[i + 1]); if (r.d <= tol && (!best || r.d < best.d)) best = { wire: w, x: r.x, y: r.y, d: r.d }; }
  }
  return best;
}

export function connect(sch, a, b) {
  if (a === b || !sch.pin(a) || !sch.pin(b)) return null;
  if (sch.wires.some((w) => (w.from === a && w.to === b) || (w.from === b && w.to === a))) return null;
  return sch.addWire(a, b);
}

/** Drop a junction on a wire at (x, y): the wire becomes two wires meeting at the junction. Returns the junction symbol. */
export function splitWire(sch, wireId, x, y) {
  const w = sch.wires.find((q) => q.id === wireId);
  if (!w) return null;
  const j = placePart(sch, 'JUNCTION', x, y);
  sch.wires = sch.wires.filter((q) => q !== w);
  connect(sch, w.from, j.id + '.j'); connect(sch, j.id + '.j', w.to);
  return j;
}

export function removeWire(sch, id) { sch.wires = sch.wires.filter((w) => w.id !== id); }

export function removeSymbol(sch, id) {
  sch.symbols = sch.symbols.filter((s) => s.id !== id);
  sch.wires = sch.wires.filter((w) => !w.from.startsWith(id + '.') && !w.to.startsWith(id + '.'));
  sch.labels = sch.labels.filter((l) => !l.at.startsWith(id + '.'));
}

export function moveSymbol(sch, id, x, y) { const s = sch.symbol(id); if (s) { s.attrs.x = snap(x); s.attrs.y = snap(y); } return s; }
export function rotateSymbol(sch, id) { const s = sch.symbol(id); if (s) s.attrs.rot = (s.attrs.rot + 1) % 4; return s; }

/** Set (or with an empty name remove) the net name on a pin. */
export function setNetName(sch, ref, name) {
  sch.labels = sch.labels.filter((l) => l.at !== ref);
  const n = String(name ?? '').replace(/[^\w$.+-]/g, '').slice(0, 24);
  if (n && sch.pin(ref)) sch.addLabel(n, ref);
  return n;
}
export const netNameOf = (sch, ref) => sch.labels.find((l) => l.at === ref)?.name || '';

/** Set a typed value or the tag of a symbol. */
export function setValue(sch, id, key, v) {
  const s = sch.symbol(id); if (!s) return false;
  const text = String(v ?? '').slice(0, LIMITS.text);
  if (key === 'tag') s.tag = text.replace(/\s+/g, '');
  else if (key in s.attrs && !['x', 'y', 'rot'].includes(key)) s.attrs[key] = text;
  else return false;
  return true;
}

/** Bounds of everything drawn, in drawing units. */
export function bounds(sch) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const s of sch.symbols) { const { x, y } = s.attrs; x0 = Math.min(x0, x - 70); y0 = Math.min(y0, y - 60); x1 = Math.max(x1, x + 90); y1 = Math.max(y1, y + 60); }
  return Number.isFinite(x0) ? { x0, y0, x1, y1 } : { x0: -40, y0: -40, x1: 760, y1: 460 };
}

// ---------------------------------------------------------------------------------------------- files
export function toFile(sch) { return { format: FORMAT, version: VERSION, name: sch.name, schematic: sch.toJSON() }; }

/** Read an untrusted object or JSON text → { sheet, problems:[{key, vars}] }. Everything is rebuilt from the part library: pins are never taken from the file. */
export function fromFile(input) {
  const problems = [];
  let o = input;
  if (typeof input === 'string') { try { o = JSON.parse(input); } catch { return { sheet: null, problems: [{ key: 'file.notjson' }] }; } }
  if (!o || typeof o !== 'object' || o.format !== FORMAT || !o.schematic || typeof o.schematic !== 'object') return { sheet: null, problems: [{ key: 'file.notcircuit' }] };
  if (!Number.isInteger(o.version) || o.version > VERSION) return { sheet: null, problems: [{ key: 'file.version', vars: { v: String(o.version).slice(0, 10) } }] };
  const sch = newSheet(String(o.name ?? '').replace(/[\u0000-\u001f]/g, ' ').slice(0, 80));
  const S = o.schematic, ok = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e6;
  const ids = new Set();
  for (const s of Array.isArray(S.symbols) ? S.symbols.slice(0, LIMITS.symbols) : []) {
    const a = s && s.attrs;
    if (!s || typeof s.id !== 'string' || !/^[\w$-]{1,40}$/.test(s.id) || ['__proto__', 'constructor', 'prototype'].includes(s.id) || !hasPart(s.type) || !a || !ok(a.x) || !ok(a.y) || ids.has(s.id)) { problems.push({ key: 'file.symbol' }); continue; }
    const vals = defaults(s.type);
    for (const k of Object.keys(vals)) if (typeof a[k] === 'string' || typeof a[k] === 'number') vals[k] = String(a[k]).slice(0, LIMITS.text);
    const sym = sch.addSymbol({ id: s.id, tag: String(s.tag ?? '').replace(/\s+/g, '').slice(0, 20), type: s.type, pins: pinsOf(s.type), attrs: { x: snap(a.x), y: snap(a.y), rot: Number.isInteger(a.rot) ? ((a.rot % 4) + 4) % 4 : 0, ...vals } });
    if (sym) ids.add(sym.id);
  }
  const seq = sch.symbols.map((s) => /^S(\d+)$/.exec(s.id)).filter(Boolean).map((m) => +m[1]); sch._seq = Math.max(sch._seq, ...seq, 0);
  for (const w of Array.isArray(S.wires) ? S.wires.slice(0, LIMITS.wires) : []) {
    if (!w || typeof w.from !== 'string' || typeof w.to !== 'string' || !sch.pin(w.from) || !sch.pin(w.to)) { problems.push({ key: 'file.wire' }); continue; }
    connect(sch, w.from, w.to);
  }
  for (const l of Array.isArray(S.labels) ? S.labels.slice(0, LIMITS.labels) : []) {
    if (l && typeof l.at === 'string' && typeof l.name === 'string' && sch.pin(l.at)) setNetName(sch, l.at, l.name); else problems.push({ key: 'file.label' });
  }
  return { sheet: sch, problems };
}
