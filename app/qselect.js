/* SPDX-License-Identifier: Apache-2.0 */
/**
 * qselect.js — quick select (QSELECT) and select similar (SELECTSIMILAR): which objects match a rule. No DOM:
 * bin/test-cadcraft.mjs runs it in Node. (0.4 C23; owner: cad-draw.)
 *
 *   QS_PROPS                         key → { types (null = every type), kind: 'text' | 'number' | 'color' | 'choice', get(e, doc) }
 *   propsFor(type)                   the property keys an object type has ('any' = every type's common ones)
 *   valuesOf(entities, type, prop, doc) → the values present, for a pick list (choice and color properties)
 *   quickSelect(entities, spec, doc) → Set of ids. spec { type ('any' | an entity type), prop, op ('=' '<>' '>' '<' '*' 'all'),
 *                                      value, exclude (bool: the objects that do NOT match), within (Set | null) }
 *   SIMILAR                          the properties select similar can compare, and which are on by default
 *   similarTo(entities, refs, on, doc) → Set of ids: objects like any of refs (same type, and the properties in `on`)
 */

import { curveLength, entityArea } from './geom.js';
import { classOf } from './classes.js';   // 0.8 SU.912

const num = (v) => (Number.isFinite(v) ? v : null);
export const QS_PROPS = Object.freeze({
  layer: { types: null, kind: 'choice', get: (e) => e.layer ?? '0' },
  class: { types: null, kind: 'choice', get: (e) => classOf(e) },   // 0.8 SU.912 (classes.js): None when it has none
  color: { types: null, kind: 'color', get: (e) => (e.color === undefined ? null : e.color) },
  height: { types: ['text'], kind: 'number', get: (e) => num(e.h) },
  contents: { types: ['text'], kind: 'text', get: (e) => String(e.s ?? '') },
  block: { types: ['insert'], kind: 'choice', get: (e) => e.block },
  radius: { types: ['circle', 'arc'], kind: 'number', get: (e) => num(e.r) },
  length: { types: ['line', 'arc', 'poly'], kind: 'number', get: (e) => num(curveLength(e)) },
  area: { types: ['circle', 'poly', 'ellipse', 'hatch'], kind: 'number', get: (e) => num(entityArea(e)?.area) },
  pattern: { types: ['hatch'], kind: 'choice', get: (e) => (e.solid ? 'SOLID' : String(e.pattern || '').toUpperCase()) },
});

export function propsFor(type) {
  return Object.keys(QS_PROPS).filter((k) => { const t = QS_PROPS[k].types; return !t || (type !== 'any' && t.includes(type)); });
}

const ofType = (e, type) => type === 'any' || e.type === type;
const sameColor = (a, b) => (a ?? null) === (b ?? null) || (typeof a === 'string' && typeof b === 'string' && a.toLowerCase() === b.toLowerCase());

export function valuesOf(entities, type, prop, doc = null) {
  const P = QS_PROPS[prop];
  if (!P) return [];
  const seen = new Map();
  for (const e of entities) {
    if (!ofType(e, type) || (P.types && !P.types.includes(e.type))) continue;
    const v = P.get(e, doc);
    const k = typeof v + ':' + String(v);
    if (!seen.has(k)) seen.set(k, v);
  }
  return [...seen.values()].sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
}

/** A wildcard pattern (* any run, ? one character, as AutoCAD) → RegExp, case-insensitive. */
const wild = (p) => new RegExp('^' + String(p).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'is');

function matches(e, spec, doc) {
  if (!ofType(e, spec.type)) return false;
  if (spec.op === 'all') return true;
  const P = QS_PROPS[spec.prop];
  if (!P || (P.types && !P.types.includes(e.type))) return false;
  const v = P.get(e, doc);
  if (v === null || v === undefined) return P.kind === 'color' && spec.value === null && (spec.op === '=' || spec.op === '*');
  if (P.kind === 'color') { const eq = sameColor(v, spec.value); return spec.op === '<>' ? !eq : eq; }
  if (P.kind === 'number') {
    const x = Number(spec.value);
    if (!Number.isFinite(x)) return false;
    const tol = 1e-9 * Math.max(1, Math.abs(x));
    switch (spec.op) { case '=': return Math.abs(v - x) <= tol; case '<>': return Math.abs(v - x) > tol; case '>': return v > x + tol; case '<': return v < x - tol; default: return false; }
  }
  const s = String(v), w = String(spec.value ?? '');
  switch (spec.op) {
    case '=': return s.toLowerCase() === w.toLowerCase();
    case '<>': return s.toLowerCase() !== w.toLowerCase();
    case '*': return wild(w).test(s);
    case '>': return s.localeCompare(w, undefined, { numeric: true }) > 0;
    case '<': return s.localeCompare(w, undefined, { numeric: true }) < 0;
    default: return false;
  }
}

export function quickSelect(entities, spec, doc = null) {
  const out = new Set();
  for (const e of entities) {
    if (spec.within && !spec.within.has(e.id)) continue;
    const m = matches(e, spec, doc);
    if (spec.exclude ? !m : m) out.add(e.id);
  }
  return out;
}

export const SIMILAR = Object.freeze({ layer: true, color: true, name: true, pattern: true, height: false });

export function similarTo(entities, refs, on = SIMILAR, doc = null) {
  const out = new Set();
  for (const e of entities) {
    for (const r of refs) {
      if (e.type !== r.type) continue;
      if (on.layer && (e.layer ?? '0') !== (r.layer ?? '0')) continue;
      if (on.color && !sameColor(e.color, r.color)) continue;
      if (on.name && e.type === 'insert' && e.block !== r.block) continue;
      if (on.pattern && e.type === 'hatch' && QS_PROPS.pattern.get(e) !== QS_PROPS.pattern.get(r)) continue;
      if (on.height && e.type === 'text' && Math.abs(e.h - r.h) > 1e-9 * Math.max(1, r.h)) continue;
      out.add(e.id);
      break;
    }
  }
  return out;
}
