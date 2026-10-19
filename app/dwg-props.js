/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-props.js — the fields the Properties panel sets (0.4 part 2, track P; propdefs.js and dimstyle.js headers) as DWG and
 * DXF keep them, for every writer and reader of CadCraft: dwg-save.js (the cc-dwg model, which dxf2000.js also writes),
 * dwg-import.js, and dxf.js (R12 out, R12 / R2000+ in). DOM-free.
 *
 *   transparency   trWord(tr) → the DXF 440 / cc-dwg word (0x02000000 | alpha, ByBlock 0x01000000; ByLayer = undefined);
 *                  trFrom(word | { byLayer | byBlock | alpha }) → tr (absent, 'ByBlock' or 0–90 %)
 *   xdata          propsXdata(e) → { CADCRAFT?, PE_URL?, AcadAnnotative?, HATCHBACKGROUNDCOLOR? } for an entity's own fields
 *                  that have no group code: material (CADCRAFT "CCMAT:<name>": DWG MATERIAL objects are not written, so
 *                  other programs see the layer's), hyperlink (PE_URL, as AutoCAD stores it), annotative (AcadAnnotative),
 *                  a hatch's background colour (HATCHBACKGROUNDCOLOR), pattern origin (CADCRAFT "CCHORG:x,y") and
 *                  associative flag (CADCRAFT "CCHASSOC": no boundary objects are written, so the file's own flag stays off);
 *                  propsFromXdata(xdata by app) → { mat?, url?, ann?, bg?, ox?, oy?, assoc?, tr?, xd? } (R12 keeps transparency
 *                  as CADCRAFT "CCTR:<value>": propsXdata(e, { r12: true })); xd = every other application's xdata
 *                  ({ APP: [[code, value]…] }), kept on the entity and written back unchanged (add-on data, ADDONS-SPEC §7.3)
 *   dimensions     DIMVARS: [key, NAME, code, kind] — CadCraft's `st` keys (dims.js DIM_DEFAULTS + dimstyle.js DIM_EXTRA)
 *                  ↔ AutoCAD's dimension variables (DIMSTYLE table by name in DWG, by group code in DXF and in the ACAD
 *                  "DSTYLE" override xdata), one for one, with the conversions (booleans, colours, lineweights in 1/100 mm,
 *                  DIMDSEP as a character code, DIMPOST "pre<>suf", tolerances as DIMTOL / DIMLIM / a negative DIMGAP,
 *                  DIMTIH + DIMTOH for `tih`).
 *                  dstyleItems(st, { r12 }) → the DSTYLE xdata items; stFromCodes(get, st) / stFromVars(vars, st) fill a
 *                  style from group codes / variable names; varsOf(st) → { DIMxxx: value } for a DIMSTYLE record;
 *                  ccDimItems(st, { r12 }) → CADCRAFT strings "CCDIMST:<json>" for what the format cannot hold exactly
 *                  (arrowhead names, the text style, true colours; in R12 every key R12 has no variable for);
 *                  ccDimFrom(strings, st) reads them back (untrusted: keys and values checked).
 */

import { DIM_DEFAULTS } from './dims.js';
import { DIM_EXTRA, ARROWS, TOL_MODES } from './dimstyle.js';
import { nearestAci } from './doc.js';

// ---------------------------------------------------------------------------- transparency

/** CadCraft's tr (absent / null by layer, 'ByBlock', 0–90 %) → DXF 440 word, or undefined (by layer). */
export function trWord(tr) {
  if (tr === 'ByBlock') return 0x01000000;
  if (!Number.isFinite(tr)) return undefined;
  const alpha = Math.round(255 * (1 - Math.max(0, Math.min(90, tr)) / 100));
  return (0x02000000 | alpha) >>> 0;
}
/** A DXF 440 word or a cc-dwg transparency ({ byLayer } | { byBlock } | { alpha 0–255 } | the raw word) → tr or undefined. */
export function trFrom(v) {
  if (v === undefined || v === null || v === '') return undefined;
  if (typeof v === 'object') {
    if (v.byBlock) return 'ByBlock';
    if (Number.isFinite(v.alpha)) return pct(v.alpha);
    return undefined;
  }
  const w = Number(v) >>> 0;
  const kind = w >>> 24;
  if (kind === 1) return 'ByBlock';
  if (kind === 2 || kind === 3) return pct(w & 0xff);
  return undefined;
}
const pct = (alpha) => { const p = Math.round((1 - alpha / 255) * 100); return p > 0 ? Math.min(90, p) : undefined; };

// ---------------------------------------------------------------------------- xdata for fields without a group code

const STR = 250;   // xdata strings stop at 255 characters
const chunks = (prefix, s) => { const out = []; for (let i = 0; i < s.length || !out.length; i += STR - prefix.length) out.push(prefix + s.slice(i, i + STR - prefix.length)); return out; };
const joined = (strs, prefix) => strs.filter((x) => typeof x === 'string' && x.startsWith(prefix)).map((x) => x.slice(prefix.length)).join('');

/** CMC colour word (HATCHBACKGROUNDCOLOR 1071): 0xC2rrggbb true colour, 0xC3 + ACI index. */
function colorWord(c) {
  if (typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c)) return (0xC2000000 | parseInt(c.slice(1), 16)) >>> 0;
  if (Number.isInteger(c) && c >= 1 && c <= 255) return (0xC3000000 | c) >>> 0;
  return undefined;
}
function colorFromWord(v) {
  const w = Number(v) >>> 0, m = w >>> 24;
  if (m === 0xC2) return '#' + (w & 0xffffff).toString(16).padStart(6, '0');
  if (m === 0xC3 && (w & 0xff) >= 1) return w & 0xff;
  return undefined;
}
// a signed 32-bit integer, as DXF writes group 1071
const s32 = (w) => (w | 0);

/** The entity's own xdata for CadCraft fields with no group code (merged by the caller with what it already writes). */
export function propsXdata(e, { r12 = false } = {}) {
  const x = {};
  const cc = [];
  if (r12 && (Number.isFinite(e.tr) || e.tr === 'ByBlock')) cc.push('CCTR:' + e.tr);   // R12 has no transparency: CadCraft keeps it
  if (typeof e.mat === 'string' && e.mat) cc.push(...chunks('CCMAT:', e.mat.slice(0, 255)));
  if (e.type === 'hatch' && !e.solid && (Number.isFinite(e.ox) || Number.isFinite(e.oy)) && (e.ox || e.oy)) cc.push('CCHORG:' + (+e.ox || 0) + ',' + (+e.oy || 0));
  if (e.type === 'hatch' && e.assoc) cc.push('CCHASSOC');   // the boundary objects are not written, so the file's own flag stays off
  if (cc.length) x.CADCRAFT = cc.map((s) => [1000, s]);
  if (typeof e.url === 'string' && e.url) x.PE_URL = [[1000, e.url.slice(0, 255)]];
  if (e.ann) x.AcadAnnotative = [[1000, 'AnnotativeData'], [1002, '{'], [1070, 1], [1070, 1], [1002, '}']];
  if (e.type === 'hatch' && e.bg !== undefined && e.bg !== null) { const w = colorWord(e.bg); if (w !== undefined) x.HATCHBACKGROUNDCOLOR = [[1071, s32(w)]]; }
  // every other application's xdata the entity carries goes back out unchanged (add-ons, docs/ADDONS-SPEC.md §7.3)
  if (e.xd && typeof e.xd === 'object') for (const [app, items] of Object.entries(e.xd)) if (!x[app] && Array.isArray(items) && items.length) x[app] = items;
  return x;
}

/** xdata by application ({ APP: [[code, value]…] }, names in any case) → the CadCraft fields it holds. */
export function propsFromXdata(xd) {
  const out = {};
  if (!xd || typeof xd !== 'object') return out;
  const app = (n) => { const k = Object.keys(xd).find((a) => a.toUpperCase() === n.toUpperCase()); return k ? xd[k] || [] : null; };
  const cc = (app('CADCRAFT') || []).filter(([c]) => c === 1000).map(([, v]) => String(v));
  const mat = joined(cc, 'CCMAT:');
  if (mat) out.mat = mat;
  const org = cc.find((s) => s.startsWith('CCHORG:'));
  if (org) { const [x, y] = org.slice(7).split(',').map(Number); if (Number.isFinite(x) && Number.isFinite(y)) { if (x) out.ox = x; if (y) out.oy = y; } }
  if (cc.includes('CCHASSOC')) out.assoc = true;
  const tr = cc.find((s) => s.startsWith('CCTR:'));
  if (tr) { const v = tr.slice(5); if (v === 'ByBlock') out.tr = v; else if (Number.isFinite(+v) && +v >= 0 && +v <= 90) out.tr = +v; }
  const url = (app('PE_URL') || []).find(([c]) => c === 1000);
  if (url && String(url[1]).trim()) out.url = String(url[1]).slice(0, 2048);
  const ann = app('AcadAnnotative');
  if (ann && ann.some(([c, v]) => c === 1000 && /^AnnotativeData$/i.test(String(v)))) {
    const ints = ann.filter(([c]) => c === 1070).map(([, v]) => +v);
    if (ints[1] === 1 || (ints.length === 1 && ints[0] === 1)) out.ann = true;
  }
  const bg = (app('HATCHBACKGROUNDCOLOR') || []).find(([c]) => c === 1071);
  if (bg) { const c = colorFromWord(bg[1]); if (c !== undefined) out.bg = c; }
  // every other application's xdata is kept as e.xd = { APP: [[code, value]…] } and written back (add-ons, ADDONS-SPEC §7.3);
  // an application's group holding a 1005 handle is dropped (it would point at the wrong object once handles are renumbered)
  const keep = {};
  for (const [name, items] of Object.entries(xd)) {
    const up = name.toUpperCase();
    if (KNOWN_APPS.has(up) || !Array.isArray(items) || !items.length || items.some(([c]) => Number(c) === 1005)) continue;
    keep[up] = items.map(([c, v]) => { const n = Number(c); return [n, n >= 1010 && n <= 1071 ? Number(v) : String(v)]; });
  }
  if (Object.keys(keep).length) out.xd = keep;
  return out;
}
/** The applications whose xdata CadCraft reads itself; every other one passes through as e.xd. */
const KNOWN_APPS = new Set(['ACAD', 'CADCRAFT', 'PE_URL', 'ACADANNOTATIVE', 'HATCHBACKGROUNDCOLOR']);

// ---------------------------------------------------------------------------- dimension variables

/** [st key, variable, DXF group code, kind]. R12 = the variable exists in R12 (its DSTYLE / DIMSTYLE codes). */
export const DIMVARS = [
  ['scale', 'DIMSCALE', 40, 'real', 1], ['asz', 'DIMASZ', 41, 'real', 1], ['exo', 'DIMEXO', 42, 'real', 1], ['dli', 'DIMDLI', 43, 'real', 1],
  ['exe', 'DIMEXE', 44, 'real', 1], ['rnd', 'DIMRND', 45, 'real', 1], ['tp', 'DIMTP', 47, 'real', 1], ['tm', 'DIMTM', 48, 'real', 1],
  ['txt', 'DIMTXT', 140, 'real', 1], ['tsz', 'DIMTSZ', 142, 'real', 1], ['altf', 'DIMALTF', 143, 'real', 1], ['lfac', 'DIMLFAC', 144, 'real', 1],
  ['tfac', 'DIMTFAC', 146, 'real', 1], ['gap', 'DIMGAP', 147, 'real', 1], ['altrnd', 'DIMALTRND', 148, 'real', 0],
  ['se1', 'DIMSE1', 75, 'bool', 1], ['se2', 'DIMSE2', 76, 'bool', 1], ['tad', 'DIMTAD', 77, 'int', 1], ['zin', 'DIMZIN', 78, 'int', 1],
  ['azin', 'DIMAZIN', 79, 'int', 0], ['alt', 'DIMALT', 170, 'bool', 1], ['altd', 'DIMALTD', 171, 'int', 1], ['tofl', 'DIMTOFL', 172, 'bool', 1],
  ['tix', 'DIMTIX', 174, 'bool', 1], ['clrd', 'DIMCLRD', 176, 'color', 1], ['clre', 'DIMCLRE', 177, 'color', 1], ['clrt', 'DIMCLRT', 178, 'color', 1],
  ['adec', 'DIMADEC', 179, 'int', 0], ['dec', 'DIMDEC', 271, 'int', 0], ['tdec', 'DIMTDEC', 272, 'int', 0], ['altu', 'DIMALTU', 273, 'int', 0],
  ['aunit', 'DIMAUNIT', 275, 'int', 0], ['lunit', 'DIMLUNIT', 277, 'int', 0], ['dsep', 'DIMDSEP', 278, 'sep', 0], ['tmove', 'DIMTMOVE', 279, 'int', 0],
  ['just', 'DIMJUST', 280, 'int', 0], ['sd1', 'DIMSD1', 281, 'bool', 0], ['sd2', 'DIMSD2', 282, 'bool', 0], ['tolj', 'DIMTOLJ', 283, 'int', 0],
  ['tzin', 'DIMTZIN', 284, 'int', 0], ['altz', 'DIMALTZ', 285, 'int', 0], ['atfit', 'DIMATFIT', 289, 'int', 0],
  ['lwd', 'DIMLWD', 371, 'lw', 0], ['lwe', 'DIMLWE', 372, 'lw', 0], ['tfill', 'DIMTFILL', 69, 'int', 0], ['tfillclr', 'DIMTFILLCLR', 70, 'color', 0],
];
const BY_CODE = new Map(DIMVARS.map((d) => [d[2], d]));
const BY_NAME = new Map(DIMVARS.map((d) => [d[1], d]));
// codes handled by hand: DIMPOST 3, DIMAPOST 4, DIMTOL 71, DIMLIM 72, DIMTIH 73, DIMTOH 74, DIMSAH 173, DIMUNIT 270 (R12)
const SPECIAL = { 3: 'DIMPOST', 4: 'DIMAPOST', 71: 'DIMTOL', 72: 'DIMLIM', 73: 'DIMTIH', 74: 'DIMTOH', 173: 'DIMSAH', 270: 'DIMUNIT' };
const SPECIAL_BY_NAME = Object.fromEntries(Object.entries(SPECIAL).map(([c, n]) => [n, +c]));

const DEF = { ...DIM_DEFAULTS, ...DIM_EXTRA };
const aci = (c) => (c === null || c === undefined ? 256 : c === 0 ? 0 : Number.isInteger(c) ? c : 256);
const lw100 = (v) => (v === -1 || v === -2 || v === -3 ? v : Number.isFinite(v) && v >= 0 ? Math.round(v * 100) : -2);

/** One st value → its variable's value (number or string). */
function out1(kind, v, key) {
  switch (kind) {
    case 'real': return Number.isFinite(+v) ? +v : 0;
    case 'int': return Math.round(+v || 0);
    case 'bool': return v ? 1 : 0;
    case 'color': return typeof v === 'string' ? nearestAci(v) : aci(v);
    case 'lw': return lw100(v);
    case 'sep': return String(v) === ',' ? 44 : 46;
    default: return v;
  }
}
/** A variable's value → the st value (checked), or undefined. */
function in1(kind, raw) {
  const n = typeof raw === 'object' && raw !== null ? (raw.rgb !== undefined ? '#' + (raw.rgb & 0xffffff).toString(16).padStart(6, '0') : raw.index) : raw;
  switch (kind) {
    case 'real': { const x = parseFloat(n); return Number.isFinite(x) ? x : undefined; }
    case 'int': { const x = Math.round(parseFloat(n)); return Number.isFinite(x) ? x : undefined; }
    case 'bool': return parseFloat(n) ? true : n === true ? true : false;
    case 'color': {
      if (typeof n === 'string' && /^#[0-9a-f]{6}$/i.test(n)) return n.toLowerCase();
      const x = Math.round(parseFloat(n));
      return x === 256 ? null : x === 0 ? 0 : x >= 1 && x <= 255 ? x : undefined;
    }
    case 'lw': { const x = Math.round(parseFloat(n)); return x === -1 || x === -2 || x === -3 ? x : x >= 0 && x <= 211 ? x / 100 : undefined; }
    case 'sep': return Math.round(parseFloat(n)) === 44 ? ',' : '.';
    default: return undefined;
  }
}

/** DIMPOST "pre<>suf" → [pre, suf]; a text with no "<>" is a suffix. */
function post(s) { s = String(s ?? ''); const k = s.indexOf('<>'); return k < 0 ? ['', s] : [s.slice(0, k), s.slice(k + 2)]; }
const postOf = (pre, suf) => (pre || suf ? (pre || '') + '<>' + (suf || '') : '');

/** The style's variables, by name (a DIMSTYLE record's vars; DXF codes through dstyleItems). Every key, so nothing falls back to another program's defaults. */
export function varsOf(st) {
  const s = { ...DEF, ...(st || {}) };
  const v = {};
  for (const [key, name, , kind] of DIMVARS) v[name] = out1(kind, s[key], key);
  v.DIMTIH = s.tih ? 1 : 0; v.DIMTOH = s.tih ? 1 : 0;
  v.DIMPOST = postOf(s.pre, s.suf); v.DIMAPOST = postOf(s.apre, s.asuf);
  v.DIMTOL = s.tol === 'sym' || s.tol === 'dev' ? 1 : 0; v.DIMLIM = s.tol === 'lim' ? 1 : 0;
  if (s.tol === 'basic') v.DIMGAP = -Math.abs(v.DIMGAP || 0.625);
  v.DIMSAH = (s.blk1 || '') !== (s.blk2 || '') ? 1 : 0;
  if (!(st && st.lunit)) delete v.DIMLUNIT;   // absent = decimal; the style's own stays
  return v;
}

/** The ACAD "DSTYLE" override items for a dimension's st. r12: only the variables R12 has (+ DIMUNIT for the length format). */
export function dstyleItems(st, { r12 = false } = {}) {
  const v = varsOf(st);
  const items = [[1000, 'DSTYLE'], [1002, '{']];
  const put = (code, kind, value) => {
    items.push([1070, code]);
    if (kind === 'str') items.push([1000, String(value)]);
    else if (kind === 'real') items.push([1040, value]);
    else items.push([1070, value | 0]);
  };
  for (const [, name, code, kind, inR12] of DIMVARS) {
    if (r12 && !inR12) continue;
    if (v[name] === undefined) continue;
    put(code, kind === 'real' ? 'real' : 'int', v[name]);
  }
  put(73, 'int', v.DIMTIH); put(74, 'int', v.DIMTOH); put(71, 'int', v.DIMTOL); put(72, 'int', v.DIMLIM); put(173, 'int', v.DIMSAH);
  put(3, 'str', v.DIMPOST || '<>');   // "<>" = no prefix or suffix: never the drawing style's DIMPOST (" m", 0.6 DC.72)
  if (v.DIMAPOST) put(4, 'str', v.DIMAPOST);
  if (r12 && st?.lunit && st.lunit !== 2) put(270, 'int', st.lunit === 4 ? 6 : st.lunit === 5 ? 7 : st.lunit | 0);   // R12's DIMUNIT: unstacked architectural / fractional
  items.push([1002, '}']);
  return items;
}

/** A dimension style as DXF group code / value pairs (a DIMSTYLE table record; the same variables as dstyleItems). */
export function dimstylePairs(st, { r12 = false } = {}) {
  const items = dstyleItems(st, { r12 });
  const out = [];
  for (let j = 2; j + 1 < items.length; j += 2) if (items[j][0] === 1070) out.push([items[j][1], items[j + 1][1]]);
  return out;
}

/** The ACAD xdata list of an entity ([[code, value]…]) → Map(group code → value) of its "DSTYLE" { … } overrides. */
export function dstyleMap(items) {
  const m = new Map();
  const list = items || [];
  const k = list.findIndex(([c, v]) => c === 1000 && String(v).trim() === 'DSTYLE');
  if (k < 0) return m;
  for (let j = k + 1; j + 1 < list.length; j++) {
    const [c, v] = list[j];
    if (c === 1002 && String(v).trim() === '}') break;
    if (c === 1002) continue;
    if (c === 1070) { m.set(Math.round(+v), list[j + 1][1]); j++; }
  }
  return m;
}

/** Fill st from DXF group codes: `get(code)` → raw value or undefined (DIMSTYLE table, $DIM header by code, or DSTYLE pairs). */
export function stFromCodes(get, st) {
  for (const [code, d] of BY_CODE) { const raw = get(code); if (raw !== undefined) { const x = in1(d[3], raw); if (x !== undefined) st[d[0]] = x; } }
  specials((name) => get(SPECIAL_BY_NAME[name]), st);
  return st;
}
/** Fill st from variables by name (cc-dwg DIMSTYLE vars, the DWG header). */
export function stFromVars(vars, st) {
  for (const [name, d] of BY_NAME) if (vars[name] !== undefined) { const x = in1(d[3], vars[name]); if (x !== undefined) st[d[0]] = x; }
  specials((name) => vars[name], st);
  return st;
}
function specials(get, st) {
  const tih = get('DIMTIH'), toh = get('DIMTOH');
  if (tih !== undefined || toh !== undefined) st.tih = !!+(tih ?? 0) && !!+(toh ?? tih ?? 0);
  const p = get('DIMPOST');
  if (p !== undefined) { const [pre, suf] = post(p); if (pre) st.pre = pre; else delete st.pre; if (suf) st.suf = suf; else delete st.suf; }
  const ap = get('DIMAPOST');
  if (ap !== undefined) { const [pre, suf] = post(ap); if (pre) st.apre = pre; else delete st.apre; if (suf) st.asuf = suf; else delete st.asuf; }
  const tol = get('DIMTOL'), lim = get('DIMLIM');
  if (tol !== undefined || lim !== undefined || st.gap < 0) {
    if (+lim) st.tol = 'lim';
    else if (+tol) st.tol = Math.abs((st.tp || 0) - (st.tm || 0)) < 1e-12 ? 'sym' : 'dev';
    else if (st.gap < 0) st.tol = 'basic';
    else if (tol !== undefined || lim !== undefined) delete st.tol;
  }
  if (st.gap < 0) st.gap = -st.gap;
  const unit = get('DIMUNIT');
  if (unit !== undefined && st.lunit === undefined) { const u = Math.round(+unit); st.lunit = u === 6 ? 4 : u === 7 ? 5 : u; }
}

/** Keys a format cannot hold exactly → CADCRAFT strings "CCDIMST:<json>" (only keys that differ from the defaults). */
export function ccDimItems(st, { r12 = false } = {}) {
  const s = st || {};
  const inR12 = new Set([...DIMVARS.filter((d) => d[4]).map((d) => d[0]), 'tih', 'pre', 'suf', 'apre', 'asuf', 'tol']);
  const keep = {};
  for (const k of Object.keys(DIM_EXTRA)) {
    const v = s[k];
    if (v === undefined || v === DIM_EXTRA[k]) continue;
    const never = k === 'blk1' || k === 'blk2' || k === 'txsty' || typeof v === 'string' && /^(clr|tfillclr)/.test(k);   // no variable holds these as they are
    if (never || (r12 && !inR12.has(k))) keep[k] = v;
  }
  if (r12) for (const k of ['dec', 'adec', 'lunit']) if (s[k] !== undefined && s[k] !== DIM_DEFAULTS[k]) keep[k] = s[k];   // R13 variables
  return Object.keys(keep).length ? chunks('CCDIMST:', JSON.stringify(keep)).map((x) => [1000, x]) : [];
}
/** CADCRAFT strings → st keys (untrusted: only known keys, values of the right kind). */
export function ccDimFrom(strs, st) {
  const j = joined(strs || [], 'CCDIMST:');
  if (!j) return st;
  let o;
  try { o = JSON.parse(j); } catch { return st; }
  if (!o || typeof o !== 'object') return st;
  for (const [k, v] of Object.entries(o)) {
    if (!(k in DIM_EXTRA) && !(k in DIM_DEFAULTS)) continue;
    const d = DEF[k];
    if (k === 'blk1' || k === 'blk2') { if (ARROWS.includes(v)) st[k] = v; continue; }
    if (k === 'tol') { if (TOL_MODES.includes(v)) st[k] = v; continue; }
    if (/^clr|^tfillclr$/.test(k)) { if (v === null || v === 0 || (Number.isInteger(v) && v >= 1 && v <= 255) || (typeof v === 'string' && /^#[0-9a-f]{6}$/i.test(v))) st[k] = v; continue; }
    if (typeof d === 'number' && Number.isFinite(v)) st[k] = v;
    else if (typeof d === 'boolean' && typeof v === 'boolean') st[k] = v;
    else if (typeof d === 'string' && typeof v === 'string') st[k] = v.slice(0, 255);
  }
  return st;
}
