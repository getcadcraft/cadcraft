/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propdefs.js — what the Properties panel shows for each kind of object, and how a typed value changes it. No DOM:
 * bin/test-cadcraft-props.mjs runs it in Node. (0.4 track P; owner: session cad-props. The panel itself is props.js.)
 *
 *   SECTIONS                      section keys in panel order (labels t('props.sec.<key>'))
 *   groupsOf(ents)                → [{ key: 'all' | <type>, n, ids }] — "All (12)", "Line (8)", "Dimension (4)" (P.2)
 *   defsFor(key, ents, ctx)       → the property descriptors that group shows, in section order
 *   valueOf(def, ents, ctx)       → the value every object shares, or VARIES
 *   applyValue(doc, def, ents, v, ctx) → { ok, changed, locked, error? } — every object of the group in ONE undo step;
 *                                  objects on locked layers are left alone (counted); a refused value changes nothing
 *   measure(e)                    → { length, area, perimeter } for read-outs
 *   addSection({ key, label, types, defs })  → remove() — a section from outside (P.13: add-ons, e.g. Electrical's wire
 *                                  number and device tag). `types` = entity types it applies to (null = every type);
 *                                  `defs(ents, ctx)` → descriptors (sec is set to `key`); `label` = the shown name (already
 *                                  in the reader's language). Its fields are applied like any other: one undo step.
 *   sectionLabel(key)             → the name of a section (built in, or added)
 *
 * A descriptor: { key, sec, kind, label?, get(e, ctx), set?(e, v, ctx) → the changed entity (a new object), when?(e, ctx)
 * (shown only when true for every object), one (only for a single object), pt ({ name, axis }: one axis of a point,
 * with a pick button in the panel), gt0 / min / max (checked by propexpr.js), choices (ctx → [[value, label]]),
 * title (a tooltip key) }. kind: 'len' 'ang' (degrees) 'num' 'int' 'text' 'textarea' 'bool' 'choice' 'layer' 'color'
 * 'lt' 'lw' 'tr' (transparency) 'mat' (material) 'ro' (read-only text) 'vertex' (the vertex browser).
 * set() may throw PropError (a translated reason); the whole change is then rolled back.
 *
 * Fields this track adds to entities (all optional; absent = the default; saved by the file side, cad-files):
 *   every type   tr (transparency: null/absent by layer, 'ByBlock', 0–90 %), mat (material: absent by layer, 'ByBlock',
 *                'Global' or a name), url (hyperlink text). Plot style is read-only "ByColor" (colour-dependent table).
 *   Z            line z1 z2; circle arc ellipse point text insert hatch mleader z; poly z (its elevation)
 *   thickness    th on line circle arc poly point text
 *   text         style (text style name, 'Standard'), obl (oblique angle, radians), ann (annotative); wf ww ls as before
 *   poly         w (global width), pts[i].sw / pts[i].ew (segment start / end width)
 *   insert       sz (Z scale)
 *   hatch        ox oy (pattern origin), assoc (associative), island ('normal' | 'outer' | 'ignore'), bg (background colour)
 *   viewport     on (false = off), locked (display locked)
 *   dimension    trot (text rotation, radians) and the style keys of dimstyle.js inside st
 */

import { TYPE_NAMES } from './doc.js';
import { deg, rad, normAngle, TAU, curveLength, entityArea } from './geom.js';
import { DIM_DEFAULTS, DIM_KINDS, dimMeasure } from './dims.js';
import { DIM_EXTRA, ARROWS, TOL_MODES, dimStyleText, textUnitOf, withTextUnit, textUnitMm } from './dimstyle.js';
import { PATTERNS } from './hatch.js';
import { LUNITS } from './units.js';
import { t } from './i18n.js';
import { visibilityOf, setVisibility } from './dyn-blocks.js';

export const VARIES = Symbol('varies');
export const SECTIONS = ['general', 'geometry', 'custom', 'text', 'lines', 'fit', 'units', 'alt', 'tol', 'pattern', 'misc'];

export class PropError extends Error { constructor(key, vars) { super(t(key, vars)); this.key = key; } }

const PT_LABEL = { start: 'props.pt.start', end: 'props.pt.end', center: 'props.pt.center', pos: 'props.pt.pos', ins: 'props.pt.ins', vertex: 'props.pt.vertex', origin: 'props.pt.origin', arrow: 'props.pt.arrow', vcenter: 'props.pt.vcenter', vview: 'props.pt.vview', dimp1: 'props.pt.dimp1', dimp2: 'props.pt.dimp2', dimc: 'props.pt.dimc', dimloc: 'props.pt.dimloc' };
export const pointLabel = (name) => t(PT_LABEL[name] || 'props.pt.pos');

/** A number field written back: absent when it equals its default (keeps entities and files small). */
const put = (e, k, v, dflt = 0) => { const n = { ...e }; if (v === dflt || v === undefined || v === null) delete n[k]; else n[k] = v; return n; };
const num0 = (v) => (Number.isFinite(v) ? v : 0);

// ---------------------------------------------------------------------------- dynamic block references (0.5 DB.3)
// Properties › Custom: the visibility state as a list (switching = dyn-blocks.js setVisibility, cad-files' DB.4: the
// reference moves to the copy that shows that state, in the same undo step), and every other parameter value the file
// holds, read-only: linear distance, alignment angle, flip, point / base point (docs/DWG-DYNAMIC-BLOCKS.md). Lookups,
// XY, rotation and polar are not decoded yet (no sample), so they are not listed.
const dynDef = (doc, e) => { const B = doc?.blocks.get(e.block); return B?.dyn ? (B.dyn.def ? B : doc.blocks.get(B.dyn.of)) : null; };
const isDynamic = (doc, e) => !!dynDef(doc, e);
const sameDef = (c) => (e) => { const a = dynDef(c.doc, e), b = dynDef(c.doc, c.ents[0]); return !!a && a === b; };
function dynamicDefs(ctx) {
  const c = ctx, out = [];
  const e0 = c.ents?.[0];
  const def = e0 && dynDef(c.doc, e0);
  if (!def) return out;
  const vis = visibilityOf(c.doc, e0);
  if (vis) {
    out.push({ key: 'dyn.vis', sec: 'custom', kind: 'choice', label: vis.label || t('props.f.dyn.vis'), title: 'props.f.dyn.vis.title', when: (e) => sameDef(c)(e) && !!visibilityOf(c.doc, e),
      choices: () => vis.states.map((n) => [n, n]),
      get: (e) => visibilityOf(c.doc, e)?.current ?? '',
      set: (e, v, cc) => {
        if (visibilityOf(cc.doc, e)?.current === v) return e;
        const r = setVisibility(cc.doc, e.id, v);
        if (!r.ok) throw new PropError('props.dyn.err.' + r.error);
        return cc.doc.get(e.id);
      } });
  }
  const names = new Map((def.dyn.params || []).map((p) => [p.node, p]));
  for (const v of (e0.dyn?.values || [])) {
    if (v.kind === 'visibility') continue;
    const p = names.get(v.node), name = p?.name || t('props.dyn.kind.' + v.kind);
    const pick = (e) => (e.dyn?.values || []).find((x) => x.node === v.node);
    const base = { sec: 'custom', when: sameDef(c), title: 'props.dyn.ro.title' };
    if (v.kind === 'linear' && Number.isFinite(v.distance)) out.push({ ...base, key: 'dyn.' + v.node, kind: 'ro-len', label: name, get: (e) => pick(e)?.distance ?? VARIES });
    else if (v.kind === 'alignment' && Number.isFinite(v.angle)) out.push({ ...base, key: 'dyn.' + v.node, kind: 'ro', label: name, get: (e) => (pick(e) ? (+deg(normAngle(pick(e).angle)).toFixed(4)) + '°' : VARIES) });
    else if (v.kind === 'flip' && v.flipped !== undefined) out.push({ ...base, key: 'dyn.' + v.node, kind: 'ro', label: name, get: (e) => (pick(e) ? t(pick(e).flipped ? 'props.dyn.flipped' : 'props.dyn.not_flipped') : VARIES) });
    else if ((v.kind === 'point' || v.kind === 'basepoint') && v.point) {
      for (const a of ['x', 'y']) out.push({ ...base, key: 'dyn.' + v.node + '.' + a, kind: 'ro-len', label: name + ' ' + t('props.f.' + a), get: (e) => pick(e)?.point?.[a] ?? VARIES });
    }
  }
  return out;
}

// ---------------------------------------------------------------------------- general (every type)

const TH_TYPES = ['line', 'circle', 'arc', 'poly', 'point', 'text'];
const GENERAL = [
  { key: 'layer', sec: 'general', kind: 'layer', get: (e) => e.layer ?? '0', set: (e, v) => ({ ...e, layer: v }) },
  { key: 'color', sec: 'general', kind: 'color', get: (e) => (e.color === undefined ? null : e.color), set: (e, v) => ({ ...e, color: v }) },
  { key: 'lt', sec: 'general', kind: 'lt', get: (e) => e.lt ?? null, set: (e, v) => put(e, 'lt', v, null) },
  { key: 'lts', sec: 'general', kind: 'num', gt0: true, get: (e) => (e.lts > 0 ? e.lts : 1), set: (e, v) => put(e, 'lts', v, 1) },
  { key: 'lw', sec: 'general', kind: 'lw', get: (e) => e.lw ?? null, set: (e, v) => put(e, 'lw', v, null) },
  { key: 'tr', sec: 'general', kind: 'tr', get: (e) => (e.tr === undefined ? null : e.tr), set: (e, v) => put(e, 'tr', v, null) },
  { key: 'th', sec: 'general', kind: 'len', types: TH_TYPES, get: (e) => num0(e.th), set: (e, v) => put(e, 'th', v) },
  { key: 'mat', sec: 'general', kind: 'mat', get: (e) => e.mat ?? null, set: (e, v) => put(e, 'mat', v, null) },
  { key: 'ps', sec: 'general', kind: 'ro', get: () => t('props.ps.bycolor'), title: 'props.ps.title' },
  { key: 'url', sec: 'general', kind: 'text', max: 2048, get: (e) => e.url || '', set: (e, v) => put(e, 'url', String(v).trim().slice(0, 2048), '') },
];

// ---------------------------------------------------------------------------- points (P.3)

/** X, Y and Z of one point: `keys` = [xKey, yKey, zKey] on the entity, or a getter/setter pair for nested points. */
function point(name, keys, { z = true, when } = {}) {
  const [kx, ky, kz] = keys;
  const axis = (a, k) => ({
    key: name + '.' + a, sec: 'geometry', kind: 'len', pt: { name, axis: a }, label: t('props.f.' + a), when,
    get: (e) => (typeof k === 'function' ? k(e) : a === 'z' ? num0(e[k]) : e[k]),
    set: (e, v) => (a === 'z' ? put(e, k, v) : { ...e, [k]: v }),
  });
  return [axis('x', kx), axis('y', ky), ...(z && kz ? [axis('z', kz)] : [])];
}

// ---------------------------------------------------------------------------- measures (P.8)

/** Length, area and perimeter of an object, where they mean something. */
export function measure(e) {
  const out = {};
  const L = curveLength(e);
  if (L !== null && L !== undefined) out.length = L;
  if (['circle', 'poly', 'ellipse', 'hatch'].includes(e.type) && (e.type !== 'poly' || e.closed)) {
    const a = entityArea(e);
    if (a) { out.area = Math.abs(a.area); out.perimeter = a.perimeter; }
  }
  return out;
}

/** The centroid of a closed polyline's corners (bulges ignored: close enough to scale about). */
function polyCentre(e) {
  let a = 0, cx = 0, cy = 0;
  const p = e.pts, n = p.length;
  for (let i = 0; i < n; i++) { const u = p[i], v = p[(i + 1) % n], c = u.x * v.y - v.x * u.y; a += c; cx += (u.x + v.x) * c; cy += (u.y + v.y) * c; }
  if (Math.abs(a) < 1e-12) return { x: p.reduce((s, q) => s + q.x, 0) / n, y: p.reduce((s, q) => s + q.y, 0) / n };
  return { x: cx / (3 * a), y: cy / (3 * a) };
}
/** A closed polyline scaled about its centre so its area becomes A (P.8). */
function polyToArea(e, A) {
  const A0 = Math.abs(entityArea(e)?.area || 0);
  if (!(A0 > 0)) throw new PropError('props.err.noarea');
  const k = Math.sqrt(A / A0), c = polyCentre(e);
  return { ...e, pts: e.pts.map((q) => ({ ...q, x: c.x + (q.x - c.x) * k, y: c.y + (q.y - c.y) * k, ...(q.sw ? { sw: q.sw * k } : {}), ...(q.ew ? { ew: q.ew * k } : {}) })) };
}

// ---------------------------------------------------------------------------- ellipse angles

/** The true angle (radians, from the major axis) of an ellipse parameter, and back. */
const paramToAngle = (tp, ratio) => normAngle(Math.atan2(ratio * Math.sin(tp), Math.cos(tp)));
const angleToParam = (a, ratio) => normAngle(Math.atan2(Math.sin(a) / (ratio || 1), Math.cos(a)));

// ---------------------------------------------------------------------------- per type

const JUST = [['left', 'baseline'], ['center', 'baseline'], ['right', 'baseline'], ['left', 'top'], ['center', 'top'], ['right', 'top'], ['left', 'middle'], ['center', 'middle'], ['right', 'middle'], ['left', 'bottom'], ['center', 'bottom'], ['right', 'bottom']];
const justKey = (e) => (e.ha || 'left') + '|' + (e.va || 'baseline');

const TYPES = {
  line: () => [
    ...point('start', ['x1', 'y1', 'z1']), ...point('end', ['x2', 'y2', 'z2']),
    { key: 'dx', sec: 'geometry', kind: 'ro-len', get: (e) => e.x2 - e.x1 },
    { key: 'dy', sec: 'geometry', kind: 'ro-len', get: (e) => e.y2 - e.y1 },
    { key: 'dz', sec: 'geometry', kind: 'ro-len', get: (e) => num0(e.z2) - num0(e.z1) },
    { key: 'len', sec: 'geometry', kind: 'len', gt0: true, get: (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1),
      set: (e, v) => { const a = Math.atan2(e.y2 - e.y1, e.x2 - e.x1); return { ...e, x2: e.x1 + Math.cos(a) * v, y2: e.y1 + Math.sin(a) * v }; } },
    { key: 'ang', sec: 'geometry', kind: 'ang', get: (e) => deg(normAngle(Math.atan2(e.y2 - e.y1, e.x2 - e.x1))),
      set: (e, v) => { const L = Math.hypot(e.x2 - e.x1, e.y2 - e.y1); return { ...e, x2: e.x1 + Math.cos(rad(v)) * L, y2: e.y1 + Math.sin(rad(v)) * L }; } },
  ],
  circle: () => [
    ...point('center', ['cx', 'cy', 'z']),
    { key: 'r', sec: 'geometry', kind: 'len', gt0: true, get: (e) => e.r, set: (e, v) => ({ ...e, r: v }) },
    { key: 'd', sec: 'geometry', kind: 'len', gt0: true, get: (e) => e.r * 2, set: (e, v) => ({ ...e, r: v / 2 }) },
    { key: 'circ', sec: 'geometry', kind: 'len', gt0: true, get: (e) => TAU * e.r, set: (e, v) => ({ ...e, r: v / TAU }) },
    { key: 'area', sec: 'geometry', kind: 'area', gt0: true, get: (e) => Math.PI * e.r * e.r, set: (e, v) => ({ ...e, r: Math.sqrt(v / Math.PI) }) },
  ],
  arc: () => [
    ...point('center', ['cx', 'cy', 'z']),
    { key: 'r', sec: 'geometry', kind: 'len', gt0: true, get: (e) => e.r, set: (e, v) => ({ ...e, r: v }) },
    { key: 'a0', sec: 'geometry', kind: 'ang', get: (e) => deg(normAngle(e.a0)), set: (e, v) => ({ ...e, a0: normAngle(rad(v)) }) },
    { key: 'a1', sec: 'geometry', kind: 'ang', get: (e) => deg(normAngle(e.a1)), set: (e, v) => ({ ...e, a1: normAngle(rad(v)) }) },
    { key: 'sweep', sec: 'geometry', kind: 'ang', gt0: true, max: 360, get: (e) => deg(normAngle(e.a1 - e.a0) || TAU),
      set: (e, v) => { if (v >= 360 - 1e-9) throw new PropError('props.err.fullarc'); return { ...e, a1: normAngle(e.a0 + rad(v)) }; } },
    { key: 'arclen', sec: 'geometry', kind: 'ro-len', get: (e) => e.r * (normAngle(e.a1 - e.a0) || TAU) },
    { key: 'chord', sec: 'geometry', kind: 'len', gt0: true, get: (e) => 2 * e.r * Math.sin((normAngle(e.a1 - e.a0) || TAU) / 2),
      set: (e, v) => { const s = Math.sin((normAngle(e.a1 - e.a0) || TAU) / 2); if (!(Math.abs(s) > 1e-9)) throw new PropError('props.err.nochord'); return { ...e, r: Math.abs(v / (2 * s)) }; } },
    { key: 'area', sec: 'geometry', kind: 'ro-area', get: (e) => { const th = normAngle(e.a1 - e.a0) || TAU; return e.r * e.r * (th - Math.sin(th)) / 2; } },
  ],
  ellipse: () => [
    ...point('center', ['cx', 'cy', 'z']),
    { key: 'major', sec: 'geometry', kind: 'len', gt0: true, get: (e) => Math.hypot(e.mx, e.my),
      set: (e, v) => { const a = Math.hypot(e.mx, e.my) || 1; return { ...e, mx: e.mx / a * v, my: e.my / a * v }; } },
    { key: 'minor', sec: 'geometry', kind: 'len', gt0: true, get: (e) => Math.hypot(e.mx, e.my) * e.ratio,
      set: (e, v) => { const a = Math.hypot(e.mx, e.my); if (v > a + 1e-12) throw new PropError('props.err.minor'); return { ...e, ratio: v / a }; } },
    { key: 'ratio', sec: 'geometry', kind: 'num', gt0: true, max: 1, get: (e) => e.ratio, set: (e, v) => ({ ...e, ratio: v }) },
    { key: 'axisang', sec: 'geometry', kind: 'ang', get: (e) => deg(normAngle(Math.atan2(e.my, e.mx))),
      set: (e, v) => { const a = Math.hypot(e.mx, e.my); return { ...e, mx: Math.cos(rad(v)) * a, my: Math.sin(rad(v)) * a }; } },
    { key: 'ea0', sec: 'geometry', kind: 'ang', get: (e) => deg(paramToAngle(e.t0 ?? 0, e.ratio)), set: (e, v) => ({ ...e, t0: angleToParam(rad(v), e.ratio) }) },
    { key: 'ea1', sec: 'geometry', kind: 'ang', get: (e) => deg(paramToAngle(e.t1 ?? TAU, e.ratio)) || ((e.t1 ?? TAU) - (e.t0 ?? 0) >= TAU - 1e-9 ? 360 : 0),
      set: (e, v) => { const tp = angleToParam(rad(v), e.ratio); return { ...e, t1: tp <= (e.t0 ?? 0) + 1e-12 ? tp + TAU : tp }; } },
    { key: 'area', sec: 'geometry', kind: 'ro-area', get: (e) => Math.abs(entityArea(e)?.area || 0) },
  ],
  point: () => point('pos', ['x', 'y', 'z']),
  poly: () => [
    { key: 'vertex', sec: 'geometry', kind: 'vertex', one: true, get: (e, ctx) => vtx(e, ctx) + 1 },
    ...['x', 'y'].map((a) => ({ key: 'vertex.' + a, sec: 'geometry', kind: 'len', one: true, pt: { name: 'vertex', axis: a }, label: t('props.f.' + a),
      get: (e, ctx) => e.pts[vtx(e, ctx)][a], set: (e, v, ctx) => { const i = vtx(e, ctx); return { ...e, pts: e.pts.map((q, j) => (j === i ? { ...q, [a]: v } : q)) }; } })),
    { key: 'vsw', sec: 'geometry', kind: 'len', one: true, min: 0, get: (e, ctx) => num0(e.pts[vtx(e, ctx)].sw ?? e.w), set: (e, v, ctx) => vset(e, ctx, 'sw', v) },
    { key: 'vew', sec: 'geometry', kind: 'len', one: true, min: 0, get: (e, ctx) => num0(e.pts[vtx(e, ctx)].ew ?? e.w), set: (e, v, ctx) => vset(e, ctx, 'ew', v) },
    { key: 'vb', sec: 'geometry', kind: 'num', one: true, title: 'props.f.vb.title', get: (e, ctx) => num0(e.pts[vtx(e, ctx)].b), set: (e, v, ctx) => vset(e, ctx, 'b', v) },
    { key: 'gw', sec: 'geometry', kind: 'len', min: 0, get: (e) => num0(e.w),
      set: (e, v) => { const n = put(e, 'w', v); n.pts = e.pts.map(({ sw, ew, ...q }) => q); return n; } },
    { key: 'z', sec: 'geometry', kind: 'len', label: t('props.f.elev'), get: (e) => num0(e.z), set: (e, v) => put(e, 'z', v) },
    { key: 'closed', sec: 'geometry', kind: 'bool', get: (e) => !!e.closed, set: (e, v) => ({ ...e, closed: !!v }) },
    { key: 'count', sec: 'geometry', kind: 'ro', get: (e) => String(e.pts.length) },
    { key: 'plen', sec: 'geometry', kind: 'ro-len', get: (e) => curveLength(e) },
    { key: 'area', sec: 'geometry', kind: 'area', gt0: true, when: (e) => !!e.closed, get: (e) => Math.abs(entityArea(e)?.area || 0), set: (e, v) => polyToArea(e, v) },
  ],
  text: (ctx) => [
    { key: 's', sec: 'text', kind: 'textarea', get: (e) => String(e.s ?? ''), set: (e, v) => { if (!String(v).trim()) throw new PropError('props.err.notext'); return { ...e, s: String(v) }; } },
    { key: 'style', sec: 'text', kind: 'choice', choices: () => textStyles(ctx), get: (e) => e.style || 'Standard', set: (e, v) => put(e, 'style', v, 'Standard') },
    { key: 'just', sec: 'text', kind: 'choice', choices: () => JUST.map(([h, v]) => [h + '|' + v, t('props.just.' + h + '.' + v)]), get: justKey,
      set: (e, v) => { const [ha, va] = String(v).split('|'); return { ...e, ha, va }; } },
    { key: 'h', sec: 'text', kind: 'len', gt0: true, get: (e) => e.h, set: (e, v) => ({ ...e, h: v }) },
    { key: 'rot', sec: 'text', kind: 'ang', get: (e) => deg(normAngle(e.rot || 0)), set: (e, v) => put(e, 'rot', normAngle(rad(v))) },
    { key: 'wf', sec: 'text', kind: 'num', gt0: true, max: 100, get: (e) => (e.wf > 0 ? e.wf : 1), set: (e, v) => put(e, 'wf', v, 1) },
    { key: 'obl', sec: 'text', kind: 'ang', min: -85, max: 85, get: (e) => deg(e.obl || 0), set: (e, v) => put(e, 'obl', rad(v)) },
    { key: 'ww', sec: 'text', kind: 'len', min: 0, title: 'props.ww.title', get: (e) => num0(e.ww), set: (e, v) => put(e, 'ww', v) },
    { key: 'ls', sec: 'text', kind: 'num', min: 0.25, max: 4, get: (e) => e.ls || 1, set: (e, v) => put(e, 'ls', v, 1) },
    { key: 'ann', sec: 'text', kind: 'bool', title: 'props.f.ann.title', get: (e) => !!e.ann, set: (e, v) => put(e, 'ann', v ? true : undefined) },
    ...point('pos', ['x', 'y', 'z']),
  ],
  insert: (ctx) => [
    { key: 'block', sec: 'geometry', kind: 'ro', get: (e) => e.block + (e.dim ? ' ' + t('props.block.dim') : '') },
    ...point('ins', ['x', 'y', 'z']),
    { key: 'rot', sec: 'geometry', kind: 'ang', get: (e) => deg(normAngle(e.rot || 0)), set: (e, v) => put(e, 'rot', normAngle(rad(v))) },
    { key: 'sx', sec: 'geometry', kind: 'num', get: (e) => e.sx ?? 1, set: (e, v) => { if (!v) throw new PropError('props.err.zero'); return { ...e, sx: v }; } },
    { key: 'sy', sec: 'geometry', kind: 'num', get: (e) => e.sy ?? 1, set: (e, v) => { if (!v) throw new PropError('props.err.zero'); return { ...e, sy: v }; } },
    { key: 'sz', sec: 'geometry', kind: 'num', get: (e) => e.sz ?? 1, set: (e, v) => { if (!v) throw new PropError('props.err.zero'); return put(e, 'sz', v, 1); } },
    { key: 'us', sec: 'geometry', kind: 'num', title: 'props.f.us.title', get: (e) => (uniform(e) ? e.sx ?? 1 : VARIES),
      set: (e, v) => { if (!v) throw new PropError('props.err.zero'); return put({ ...e, sx: v, sy: v }, 'sz', v, 1); } },
    { key: 'nents', sec: 'geometry', kind: 'ro', get: (e) => String(ctx.doc?.blocks.get(e.block)?.entities.length || 0) },
    { key: 'dyn', sec: 'misc', kind: 'ro', when: (e) => !isDynamic(ctx.doc, e), get: () => t('props.dyn.none'), title: 'props.dyn.title' },
    ...dynamicDefs(ctx),
  ],
  hatch: () => [
    { key: 'pattern', sec: 'pattern', kind: 'choice', when: (e) => !e.patlines?.length && (e.solid || !e.pattern || !!PATTERNS[String(e.pattern).toUpperCase()]),
      choices: () => ['SOLID', ...Object.keys(PATTERNS)].map((k) => [k, k]), get: (e) => (e.solid ? 'SOLID' : String(e.pattern || 'ANSI31').toUpperCase()),
      set: (e, v) => { const n = { ...e, solid: v === 'SOLID' }; if (v === 'SOLID') delete n.pattern; else { n.pattern = v; n.pscale ??= 1; n.pangle ??= 0; } return n; } },
    { key: 'patname', sec: 'pattern', kind: 'ro', when: (e) => !!e.patlines?.length || (!e.solid && !!e.pattern && !PATTERNS[String(e.pattern).toUpperCase()]), get: (e) => e.pattern || t('props.hatch.custom') },
    { key: 'pscale', sec: 'pattern', kind: 'num', gt0: true, when: (e) => !e.solid, get: (e) => (e.pscale > 0 ? e.pscale : 1), set: (e, v) => ({ ...e, pscale: v }) },
    { key: 'pangle', sec: 'pattern', kind: 'ang', when: (e) => !e.solid, get: (e) => deg(e.pangle || 0), set: (e, v) => ({ ...e, pangle: normAngle(rad(v)) }) },
    ...['x', 'y'].map((a) => ({ key: 'origin.' + a, sec: 'pattern', kind: 'len', when: (e) => !e.solid, pt: { name: 'origin', axis: a }, label: t('props.f.' + a),
      get: (e) => num0(e['o' + a]), set: (e, v) => put(e, 'o' + a, v) })),
    { key: 'assoc', sec: 'pattern', kind: 'bool', title: 'props.f.assoc.title', get: (e) => !!e.assoc, set: (e, v) => put(e, 'assoc', v ? true : undefined) },
    { key: 'island', sec: 'pattern', kind: 'choice', choices: () => ['normal', 'outer', 'ignore'].map((k) => [k, t('props.island.' + k)]), get: (e) => e.island || 'normal', set: (e, v) => put(e, 'island', v, 'normal') },
    { key: 'bg', sec: 'pattern', kind: 'color', none: true, get: (e) => (e.bg === undefined ? 'none' : e.bg), set: (e, v) => put(e, 'bg', v === 'none' ? undefined : v) },
    { key: 'z', sec: 'geometry', kind: 'len', label: t('props.f.elev'), get: (e) => num0(e.z), set: (e, v) => put(e, 'z', v) },
    { key: 'loops', sec: 'geometry', kind: 'ro', get: (e) => String(e.loops.length) },
    { key: 'area', sec: 'geometry', kind: 'ro-area', get: (e) => Math.abs(entityArea(e)?.area || 0) },
  ],
  mleader: () => [
    { key: 's', sec: 'text', kind: 'textarea', get: (e) => String(e.s ?? ''), set: (e, v) => ({ ...e, s: String(v) }) },
    { key: 'h', sec: 'text', kind: 'len', gt0: true, get: (e) => e.h || mst(e).asz, set: (e, v) => ({ ...e, h: v }) },
    { key: 'ww', sec: 'text', kind: 'len', min: 0, title: 'props.ww.title', get: (e) => num0(e.ww), set: (e, v) => put(e, 'ww', v) },
    { key: 'dir', sec: 'text', kind: 'choice', choices: () => [['1', t('props.dir.right')], ['-1', t('props.dir.left')]], get: (e) => String(e.dir === -1 ? -1 : 1), set: (e, v) => ({ ...e, dir: +v === -1 ? -1 : 1 }) },
    { key: 'masz', sec: 'lines', kind: 'len', min: 0, get: (e) => mst(e).asz, set: (e, v) => ({ ...e, st: { ...mst(e), asz: v } }) },
    { key: 'dogleg', sec: 'lines', kind: 'len', min: 0, get: (e) => mst(e).dogleg, set: (e, v) => ({ ...e, st: { ...mst(e), dogleg: v } }) },
    ...['x', 'y'].map((a) => ({ key: 'arrow.' + a, sec: 'geometry', kind: 'len', pt: { name: 'arrow', axis: a }, label: t('props.f.' + a), when: (e) => e.pts?.length > 0,
      get: (e) => e.pts[0][a], set: (e, v) => ({ ...e, pts: e.pts.map((q, i) => (i === 0 ? { ...q, [a]: v } : q)) }) })),
    { key: 'z', sec: 'geometry', kind: 'len', label: t('props.f.elev'), get: (e) => num0(e.z), set: (e, v) => put(e, 'z', v) },
  ],
  viewport: () => [
    ...['x', 'y'].map((a) => ({ key: 'vcenter.' + a, sec: 'geometry', kind: 'len', paper: true, pt: { name: 'vcenter', axis: a }, label: t('props.f.' + a), get: (e) => e[a], set: (e, v) => ({ ...e, [a]: v }) })),
    { key: 'vw', sec: 'geometry', kind: 'len', paper: true, gt0: true, get: (e) => e.w, set: (e, v) => ({ ...e, w: v }) },
    { key: 'vh', sec: 'geometry', kind: 'len', paper: true, gt0: true, get: (e) => e.h, set: (e, v) => ({ ...e, h: v }) },
    ...[['x', 'cx'], ['y', 'cy']].map(([a, k]) => ({ key: 'vview.' + a, sec: 'misc', kind: 'len', model: true, label: t('props.f.' + a), get: (e) => e[k],
      set: (e, v) => { if (e.locked) throw new PropError('props.err.vplocked'); return { ...e, [k]: v }; } })),
    { key: 'on', sec: 'misc', kind: 'bool', get: (e) => e.on !== false, set: (e, v) => put(e, 'on', v ? undefined : false) },
    { key: 'locked', sec: 'misc', kind: 'bool', title: 'props.f.locked.title', get: (e) => !!e.locked, set: (e, v) => put(e, 'locked', v ? true : undefined) },
    { key: 'vname', sec: 'misc', kind: 'text', title: 'props.f.vname.title', get: (e) => e.vname || '', set: (e, v) => put(e, 'vname', String(v || '').trim().slice(0, 255) || undefined, undefined) },   // WL.11: view labels show it
  ],
  dim: (ctx) => dimDefs(ctx),
};

const mst = (e) => ({ asz: 2.5, dogleg: 2.5, gap: 1, ...(e.st || {}) });
const uniform = (e) => { const x = e.sx ?? 1; return Math.abs((e.sy ?? 1) - x) < 1e-12 && Math.abs((e.sz ?? 1) - x) < 1e-12; };
const vtx = (e, ctx) => Math.max(0, Math.min(e.pts.length - 1, (ctx?.vertex ?? 0) | 0));
function vset(e, ctx, k, v) {
  const i = vtx(e, ctx);
  const pts = e.pts.map((q, j) => { if (j !== i) return q; const n = { ...q }; if (v === 0 && k !== 'b') delete n[k]; else n[k] = v; return n; });
  return { ...e, pts };
}
function textStyles(ctx) {
  const names = new Set(['Standard', ...(ctx.doc?.textStyles ? [...ctx.doc.textStyles.keys()] : [])]);
  for (const e of ctx.ents || []) if (e.style) names.add(e.style);
  return [...names].map((n) => [n, n]);
}

// ---------------------------------------------------------------------------- dimensions (P.6)

const dst = (e) => ({ ...DIM_DEFAULTS, ...DIM_EXTRA, ...(e.st || {}) });
/** A style key written back: the dimension drops the other program's drawing (`block`) and CadCraft draws it again. */
const setSt = (k, conv = (v) => v) => (e, v) => { const n = { ...e, st: { ...(e.st || {}), [k]: conv(v) } }; delete n.block; return n; };
const S = (key, sec, kind, k, extra = {}) => ({ key: 'dim.' + key, sec, kind, label: t('props.dim.' + key), get: (e) => dst(e)[k], set: setSt(k, extra.conv), ...extra });
const notAng = (e) => e.kind !== 'angular';
const isAng = (e) => e.kind === 'angular';

function dimDefs(ctx) {
  const styles = () => dimStyleNames(ctx).map((n) => [n, n]);
  const arrowChoices = () => ARROWS.map((k) => [k, t('props.arrow.' + (k || 'closedfilled').toLowerCase())]);
  return [
    { key: 'dimstyle', sec: 'general', kind: 'choice', when: (e) => !!e.kind, choices: styles, get: (e) => e.dimstyle || 'Standard',
      set: (e, v) => { const st = ctx.doc?.dimStyles?.get?.(v); const n = { ...e, st: st ? { ...st } : { ...(e.st || {}) } }; if (v === 'Standard') delete n.dimstyle; else n.dimstyle = v; delete n.block; return n; } },
    { key: 'dimkind', sec: 'geometry', kind: 'ro', get: (e) => (e.kind ? DIM_KINDS[e.kind] : t('props.dim.fromblock', { block: e.block })) },
    { key: 'measured', sec: 'geometry', kind: 'ro', when: (e) => !!e.kind, get: (e) => dimStyleText({ ...e, text: '' }, dimMeasure(e)) },
    ...dimPoints(),
    // Lines & arrows
    S('blk1', 'lines', 'choice', 'blk1', { when: (e) => !!e.kind, choices: arrowChoices }),
    S('blk2', 'lines', 'choice', 'blk2', { when: (e) => !!e.kind, choices: arrowChoices }),
    S('asz', 'lines', 'len', 'asz', { min: 0, when: (e) => !!e.kind }),
    S('tsz', 'lines', 'len', 'tsz', { min: 0, when: (e) => !!e.kind, title: 'props.dim.tsz.title' }),
    S('clrd', 'lines', 'color', 'clrd', { when: (e) => !!e.kind }),
    S('lwd', 'lines', 'lw', 'lwd', { when: (e) => !!e.kind }),
    S('sd1', 'lines', 'bool', 'sd1', { when: (e) => !!e.kind }),
    S('sd2', 'lines', 'bool', 'sd2', { when: (e) => !!e.kind }),
    S('clre', 'lines', 'color', 'clre', { when: (e) => !!e.kind && notAng(e) }),
    S('lwe', 'lines', 'lw', 'lwe', { when: (e) => !!e.kind && notAng(e) }),
    S('se1', 'lines', 'bool', 'se1', { when: (e) => !!e.kind }),
    S('se2', 'lines', 'bool', 'se2', { when: (e) => !!e.kind }),
    S('exo', 'lines', 'len', 'exo', { min: 0, when: (e) => !!e.kind }),
    S('exe', 'lines', 'len', 'exe', { min: 0, when: (e) => !!e.kind }),
    // Text
    { key: 'dim.text', sec: 'text', kind: 'text', label: t('props.dim.text'), title: 'props.dim.text.title', when: (e) => !!e.kind,
      get: (e) => e.text || '', set: (e, v) => { const n = { ...e, text: String(v).trim() === '<>' ? '' : String(v) }; delete n.block; return n; } },
    S('txsty', 'text', 'choice', 'txsty', { when: (e) => !!e.kind, choices: () => textStyles(ctx) }),
    S('clrt', 'text', 'color', 'clrt', { when: (e) => !!e.kind }),
    S('txt', 'text', 'len', 'txt', { gt0: true, when: (e) => !!e.kind }),
    S('gap', 'text', 'len', 'gap', { min: 0, when: (e) => !!e.kind }),
    S('tad', 'text', 'choice', 'tad', { when: (e) => !!e.kind, conv: Number, choices: () => [0, 1, 2, 4].map((k) => [k, t('props.tad.' + k)]) }),
    S('just', 'text', 'choice', 'just', { when: (e) => !!e.kind && notAng(e), conv: Number, choices: () => [0, 1, 2].map((k) => [k, t('props.djust.' + k)]) }),
    S('tih', 'text', 'bool', 'tih', { when: (e) => !!e.kind }),
    { key: 'dim.trot', sec: 'text', kind: 'ang', label: t('props.dim.trot'), when: (e) => !!e.kind, get: (e) => deg(e.trot || 0),
      set: (e, v) => { const n = put(e, 'trot', v ? normAngle(rad(v)) : undefined); delete n.block; return n; } },
    S('tfill', 'text', 'choice', 'tfill', { when: (e) => !!e.kind, conv: Number, choices: () => [0, 1, 2].map((k) => [k, t('props.tfill.' + k)]) }),
    S('tfillclr', 'text', 'color', 'tfillclr', { when: (e) => !!e.kind && (dst(e).tfill | 0) === 2 }),
    // Fit
    S('scale', 'fit', 'num', 'scale', { gt0: true, when: (e) => !!e.kind, title: 'props.dim.scale.title' }),
    S('dli', 'fit', 'len', 'dli', { min: 0, when: (e) => !!e.kind }),
    S('atfit', 'fit', 'choice', 'atfit', { when: (e) => !!e.kind, conv: Number, choices: () => [0, 1, 2, 3].map((k) => [k, t('props.atfit.' + k)]) }),
    S('tmove', 'fit', 'choice', 'tmove', { when: (e) => !!e.kind, conv: Number, choices: () => [0, 1, 2].map((k) => [k, t('props.tmove.' + k)]) }),
    S('tix', 'fit', 'bool', 'tix', { when: (e) => !!e.kind }),
    S('tofl', 'fit', 'bool', 'tofl', { when: (e) => !!e.kind }),
    // Primary units
    // 0.6 DC.72: mm, cm, m or km in the text (DIMLFAC + a DIMPOST suffix), or the drawing's own units
    { key: 'dim.tunit', sec: 'units', kind: 'choice', label: t('props.dim.tunit'), title: 'props.dim.tunit.title', when: (e) => !!e.kind && notAng(e),
      choices: () => textUnitChoices(), get: (e) => textUnitOf(dst(e), textUnitMm(ctx.doc?.meta, ctx.doc?.layout).mm),
      set: (e, v) => { if (v === 'custom') return e; const n = { ...e, st: withTextUnit(e.st || {}, v, textUnitMm(ctx.doc?.meta, ctx.doc?.layout).mm) }; delete n.block; return n; } },
    S('lunit', 'units', 'choice', 'lunit', { when: (e) => !!e.kind && notAng(e), conv: Number, choices: () => Object.keys(LUNITS).map((k) => [+k, t('props.lunit.' + k)]), get: (e) => dst(e).lunit || 2 }),
    S('dec', 'units', 'int', 'dec', { min: 0, max: 8, when: (e) => !!e.kind && notAng(e) }),
    S('rnd', 'units', 'len', 'rnd', { min: 0, when: (e) => !!e.kind && notAng(e) }),
    S('pre', 'units', 'text', 'pre', { max: 40, when: (e) => !!e.kind }),
    S('suf', 'units', 'text', 'suf', { max: 40, when: (e) => !!e.kind }),
    S('lfac', 'units', 'num', 'lfac', { gt0: true, when: (e) => !!e.kind && notAng(e), title: 'props.dim.lfac.title' }),
    S('dsep', 'units', 'choice', 'dsep', { when: (e) => !!e.kind, choices: () => [['.', t('props.dsep.point')], [',', t('props.dsep.comma')]] }),
    { key: 'dim.zlead', sec: 'units', kind: 'bool', label: t('props.dim.zlead'), when: (e) => !!e.kind, get: (e) => !!(dst(e)[isAng(e) ? 'azin' : 'zin'] & (isAng(e) ? 1 : 4)), set: zinSet('lead') },
    { key: 'dim.ztrail', sec: 'units', kind: 'bool', label: t('props.dim.ztrail'), when: (e) => !!e.kind, get: (e) => !!(dst(e)[isAng(e) ? 'azin' : 'zin'] & (isAng(e) ? 2 : 8)), set: zinSet('trail') },
    S('aunit', 'units', 'choice', 'aunit', { when: (e) => isAng(e), conv: Number, choices: () => [0, 1, 2, 3].map((k) => [k, t('props.aunit.' + k)]) }),
    S('adec', 'units', 'int', 'adec', { min: 0, max: 8, when: (e) => isAng(e) }),
    // Alternate units
    S('alt', 'alt', 'bool', 'alt', { when: (e) => !!e.kind && notAng(e) }),
    S('altu', 'alt', 'choice', 'altu', { when: (e) => !!e.kind && notAng(e) && !!dst(e).alt, conv: Number, choices: () => Object.keys(LUNITS).map((k) => [+k, t('props.lunit.' + k)]) }),
    S('altd', 'alt', 'int', 'altd', { min: 0, max: 8, when: (e) => !!e.kind && notAng(e) && !!dst(e).alt }),
    S('altf', 'alt', 'num', 'altf', { gt0: true, when: (e) => !!e.kind && notAng(e) && !!dst(e).alt, title: 'props.dim.altf.title' }),
    S('altrnd', 'alt', 'num', 'altrnd', { min: 0, when: (e) => !!e.kind && notAng(e) && !!dst(e).alt }),
    S('apre', 'alt', 'text', 'apre', { max: 40, when: (e) => !!e.kind && notAng(e) && !!dst(e).alt }),
    S('asuf', 'alt', 'text', 'asuf', { max: 40, when: (e) => !!e.kind && notAng(e) && !!dst(e).alt }),
    // Tolerances
    S('tol', 'tol', 'choice', 'tol', { when: (e) => !!e.kind, choices: () => TOL_MODES.map((k) => [k, t('props.tol.' + k)]) }),
    S('tp', 'tol', 'len', 'tp', { when: (e) => !!e.kind && notAng(e) && ['sym', 'dev', 'lim'].includes(dst(e).tol) }),
    S('tp', 'tol', 'ang', 'tp', { when: (e) => isAng(e) && ['sym', 'dev', 'lim'].includes(dst(e).tol) }),
    S('tm', 'tol', 'len', 'tm', { when: (e) => !!e.kind && notAng(e) && ['dev', 'lim'].includes(dst(e).tol) }),
    S('tm', 'tol', 'ang', 'tm', { when: (e) => isAng(e) && ['dev', 'lim'].includes(dst(e).tol) }),
    S('tdec', 'tol', 'int', 'tdec', { min: 0, max: 8, when: (e) => !!e.kind && dst(e).tol !== 'none' && dst(e).tol !== 'basic' }),
    S('tfac', 'tol', 'num', 'tfac', { gt0: true, max: 2, when: (e) => !!e.kind && ['dev', 'lim'].includes(dst(e).tol) }),
    S('tolj', 'tol', 'choice', 'tolj', { when: (e) => !!e.kind && ['dev', 'lim'].includes(dst(e).tol), conv: Number, choices: () => [0, 1, 2].map((k) => [k, t('props.tolj.' + k)]) }),
  ];
}
/** The choices for a dimension's text units (0.6 DC.72); 'custom' = DIMLFAC or the suffix set by hand. */
export function textUnitChoices() {
  return [['', t('props.dim.tunit.drawing')], ['mm', 'mm'], ['cm', 'cm'], ['m', 'm'], ['km', 'km'], ['custom', t('props.dim.tunit.custom')]];
}
function zinSet(which) {
  return (e, v) => {
    const ang = e.kind === 'angular', k = ang ? 'azin' : 'zin', bit = which === 'lead' ? (ang ? 1 : 4) : (ang ? 2 : 8);
    const cur = dst(e)[k] | 0;
    const n = { ...e, st: { ...(e.st || {}), [k]: v ? cur | bit : cur & ~bit } };
    delete n.block;
    return n;
  };
}
function dimPoints() {
  const P = (name, k, when) => ['x', 'y'].map((a) => ({ key: name + '.' + a, sec: 'geometry', kind: 'len', pt: { name, axis: a }, label: t('props.f.' + a), when,
    get: (e) => e[k]?.[a], set: (e, v) => { const n = { ...e, [k]: { ...e[k], [a]: v } }; delete n.block; return n; } }));
  return [
    ...P('dimp1', 'p1', (e) => !!e.kind && !!e.p1),
    ...P('dimp2', 'p2', (e) => !!e.kind && !!e.p2 && ['linear', 'aligned', 'angular'].includes(e.kind)),
    ...P('dimc', 'c', (e) => !!e.kind && !!e.c && ['angular', 'radius', 'diameter'].includes(e.kind)),
    ...P('dimloc', 'loc', (e) => !!e.kind && !!e.loc),
  ];
}
/** The named dimension styles a drawing has (doc.dimStyles: name → st), plus Standard and the names objects carry. */
export function dimStyleNames(ctx) {
  const names = new Set(['Standard']);
  if (ctx.doc?.dimStyles) for (const k of ctx.doc.dimStyles.keys()) names.add(k);
  for (const e of ctx.ents || []) if (e.dimstyle) names.add(e.dimstyle);
  return [...names];
}

// ---------------------------------------------------------------------------- groups, values, changes

/** The groups the selection splits into: every object first (when there is more than one type), then each type. */
export function groupsOf(ents) {
  const by = new Map();
  for (const e of ents) { if (!by.has(e.type)) by.set(e.type, []); by.get(e.type).push(e.id); }
  const groups = [...by].map(([key, ids]) => ({ key, n: ids.length, ids, label: TYPE_NAMES[key] || key }));
  if (groups.length > 1) groups.unshift({ key: 'all', n: ents.length, ids: ents.map((e) => e.id), label: t('props.group.all') });
  return groups;
}

// ---------------------------------------------------------------------------- sections from outside (P.13)

const ADDED = new Map();   // key → { key, label, types, defs }
export function addSection({ key, label, types = null, defs }) {
  if (typeof key !== 'string' || !/^[a-z][a-z0-9.-]{1,63}$/.test(key) || SECTIONS.includes(key)) throw new Error('addSection: a new section key (a-z, 0-9, ".", "-")');   // i18n-ignore (developer error)
  if (typeof defs !== 'function') throw new Error('addSection: defs(ents, ctx) → descriptors');   // i18n-ignore (developer error)
  ADDED.set(key, { key, label: String(label || key), types: Array.isArray(types) ? [...types] : null, defs });
  return () => ADDED.delete(key);
}
export const addedSections = () => [...ADDED.keys()];
export const sectionLabel = (key) => (ADDED.has(key) ? ADDED.get(key).label : t('props.sec.' + key));
const KINDS = new Set(['len', 'ang', 'num', 'int', 'area', 'text', 'textarea', 'bool', 'choice', 'layer', 'color', 'lt', 'lw', 'tr', 'mat', 'ro', 'ro-len', 'ro-area']);
function addedDefs(types, c) {
  const out = [];
  for (const a of ADDED.values()) {
    if (a.types && ![...types].every((ty) => a.types.includes(ty))) continue;
    let list = [];
    try { list = a.defs(c.ents, c) || []; } catch (err) { console.error('Properties section ' + a.key + ':', err); continue; }   // i18n-ignore (developer message)
    for (const d of list) {
      if (!d || typeof d.key !== 'string' || !KINDS.has(d.kind) || typeof d.get !== 'function') continue;   // an add-on's mistake never breaks the panel
      out.push({ ...d, key: a.key + ':' + d.key, sec: a.key, label: String(d.label ?? d.key) });
    }
  }
  return out;
}

/** The descriptors a group shows (P.2: "All" shows what every object has). */
export function defsFor(key, ents, ctx = {}) {
  const c = { ...ctx, ents };
  const types = new Set(ents.map((e) => e.type));
  const general = GENERAL.filter((d) => !d.types || [...types].every((ty) => d.types.includes(ty)));
  let list = general;
  if (key !== 'all' && types.size === 1 && TYPES[key]) list = [...general, ...TYPES[key](c)];
  list = [...list, ...addedDefs(types, c)];
  list = list.filter((d) => (!d.one || ents.length === 1) && (!d.when || ents.every((e) => d.when(e, c))));
  list = list.map((d) => ({ ...d, label: d.label || t('props.f.' + d.key) }));
  const added = [...ADDED.keys()];
  const order = (s) => { const i = SECTIONS.indexOf(s); return i >= 0 ? i : SECTIONS.length + 1 + added.indexOf(s); };
  return list.map((d, i) => [d, i]).sort((a, b) => order(a[0].sec) - order(b[0].sec) || a[1] - b[1]).map(([d]) => d);
}

const near = (a, b) => (typeof a === 'number' && typeof b === 'number' ? Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)) : a === b || (typeof a === 'string' && typeof b === 'string' && /^#/.test(a) && a.toLowerCase() === b.toLowerCase()));

/** The value every object shares, or VARIES. */
export function valueOf(def, ents, ctx = {}) {
  const c = { ...ctx, ents };
  let first;
  for (let i = 0; i < ents.length; i++) {
    const v = def.get(ents[i], c);
    if (v === VARIES) return VARIES;
    if (i === 0) first = v; else if (!near(first, v)) return VARIES;
  }
  return first;
}

/**
 * Set one property on every object of the group: one undo step ("PROPERTIES"). Objects on locked layers stay as they are
 * (counted in `locked`); a PropError from any object refuses the whole change.
 */
export function applyValue(doc, def, ents, v, ctx = {}) {
  if (!def.set) return { ok: false, changed: 0, locked: 0, error: t('props.err.readonly') };
  const c = { ...ctx, ents };
  let changed = 0, locked = 0;
  try {
    doc.change('PROPERTIES', () => {
      for (const e of ents) {
        const cur = doc.get(e.id);
        if (!cur) continue;
        if (!doc.editable(cur)) { locked++; continue; }
        const next = def.set(cur, v, c);
        if (!next || next === cur) continue;
        doc.update(cur.id, next);
        changed++;
      }
    });
  } catch (err) {
    if (err instanceof PropError) return { ok: false, changed: 0, locked, error: err.message };
    throw err;
  }
  return { ok: true, changed, locked };
}

/** What a group's header says: "Line", "12 objects", "Line (8)". */
export function groupLabel(g) { return g.key === 'all' ? t('props.group.all.n', { n: g.n }) : t('props.group.type.n', { type: g.label, n: g.n }); }
