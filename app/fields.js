/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fields.js — fields: text that works itself out (1.0 ORS.22). The engine: DOM-free, drawing-free (only expr.js, for
 * formulas), so the other apps and SuperCad Studio can host it. fields-cad.js reads the drawing for it; fields-cmd.js is the
 * commands.
 *
 * A field is a code inside a text: "Sheet %<sheetnumber>% of %<sheetcount>%", "Printed %<date \f "d MMMM yyyy">%".
 *   %<kind [argument] [\f "format"]>%
 *     date · savedate · createdate · plotdate     \f: yyyy yy MMMM MMM MM M dddd ddd dd d HH H hh h mm ss tt (default yyyy-MM-dd)
 *     filename                                     \f: "name" (no extension, the default) | "full" (with extension)
 *     sheetnumber · sheetname · sheetcount         the sheet the text is on (in the model: empty)
 *     prop:<name>                                  a drawing property: title subject author company keywords comments, or a custom one
 *     obj:<key>.<property>                         an object's area length perimeter radius diameter layer name (its block) x y
 *                                                  text rotation color; <key> is the object's stable key (file-keys.js)
 *     =<formula>                                   numbers, + - * / ^ ( ), the functions of expr.js; a field inside the
 *                                                  formula is worked out first ("=%<obj:k.area>%/2")
 *   Number format \f: "0", "0.0", "0.00" … = that many decimals; none = the drawing's own format (given by the context).
 *   A code that cannot be worked out shows "####".
 * Codes other programs write are read as the same things where they mean the same (readForeign): the date, save, create and
 * plot dates, the file name, the author / title / subject / keywords / comments, the sheet number and name, and expressions.
 *
 *   hasFields(text) · parts(text) → [{ text } | { field: { kind, arg, fmt, code } }]
 *   evaluate(text, ctx) → { text, fields (how many), errors: [{ code, why }] }
 *     ctx = { now, saved, created, plotted (Date | null), fileName, sheet: { number, name, count } | null,
 *             props: { name → value } (lower-case names), object(key) → { area, length, … } | null,
 *             fmtNumber(value, what: 'length' | 'area' | 'number' | 'angle') → text, locale }
 *   code(kind, arg, fmt) → "%<…>%" · readForeign(code) → our code | null · formatDate(date, pattern, locale) · KINDS
 */
import { compute } from './expr.js';

export const ERR = '####';
export const KINDS = Object.freeze(['date', 'savedate', 'createdate', 'plotdate', 'filename', 'sheetnumber', 'sheetname', 'sheetcount', 'prop', 'obj', 'formula']);
export const OBJECT_PROPS = Object.freeze(['area', 'length', 'perimeter', 'radius', 'diameter', 'layer', 'name', 'x', 'y', 'text', 'rotation', 'color']);
export const DATE_DEFAULT = 'yyyy-MM-dd';
const OPEN = '%<', CLOSE = '>%';

export const hasFields = (text) => typeof text === 'string' && text.includes(OPEN) && text.includes(CLOSE);

/** Split a text into plain parts and fields. A field may hold other fields (a formula): the outermost one is the part. */
export function parts(text) {
  const s = String(text ?? ''), out = [];
  let i = 0, plain = '';
  while (i < s.length) {
    const a = s.indexOf(OPEN, i);
    if (a < 0) break;
    let depth = 1, j = a + 2;
    while (j < s.length && depth > 0) {
      if (s.startsWith(OPEN, j)) { depth++; j += 2; } else if (s.startsWith(CLOSE, j)) { depth--; j += 2; } else j++;
    }
    if (depth) break;   // never closed: plain text
    plain += s.slice(i, a);
    if (plain) { out.push({ text: plain }); plain = ''; }
    out.push({ field: parseCode(s.slice(a + 2, j - 2), s.slice(a, j)) });
    i = j;
  }
  plain += s.slice(i);
  if (plain) out.push({ text: plain });
  return out;
}

function parseCode(inner, whole) {
  let body = String(inner).trim(), fmt = '';
  const f = /\s*\\f\s*"([^"]*)"\s*$/.exec(body);
  if (f) { fmt = f[1]; body = body.slice(0, f.index).trim(); }
  const foreign = body.startsWith('\\') ? readForeignBody(body) : null;
  if (foreign) body = foreign;
  if (body.startsWith('=')) return { kind: 'formula', arg: body.slice(1).trim(), fmt, code: whole };
  const m = /^([A-Za-z]+)(?::([\s\S]*))?$/.exec(body);
  if (!m) return { kind: '', arg: body, fmt, code: whole };
  const kind = m[1].toLowerCase();
  return { kind: KINDS.includes(kind) && kind !== 'formula' ? kind : '', arg: (m[2] ?? '').trim(), fmt, code: whole };
}

/** A field code from its parts. */
export function code(kind, arg = '', fmt = '') {
  const k = String(kind).toLowerCase();
  const body = k === 'formula' ? '=' + String(arg).trim() : k === 'prop' || k === 'obj' ? k + ':' + String(arg).trim() : k;
  return OPEN + body + (fmt ? ' \\f "' + String(fmt).replace(/"/g, '') + '"' : '') + CLOSE;
}

// ---------------------------------------------------------------------------- other programs' codes

const FOREIGN_VAR = { date: 'date', savedate: 'savedate', createdate: 'createdate', plotdate: 'plotdate', filename: 'filename', ctab: 'sheetname',
  author: 'prop:author', title: 'prop:title', subject: 'prop:subject', keywords: 'prop:keywords', comments: 'prop:comments', lastsavedby: 'prop:lastsavedby', hyperlinkbase: 'prop:hyperlinkbase' };
const FOREIGN_SHEET = { 'sheet.number': 'sheetnumber', sheetnumber: 'sheetnumber', 'sheet.title': 'sheetname', sheettitle: 'sheetname', 'sheet.name': 'sheetname', currentsheetnumber: 'sheetnumber', currentsheettitle: 'sheetname' };
/** The body of a code another program wrote (it starts with a backslash and the evaluator's name) → our body, or null. */
function readForeignBody(body) {
  const m = /^\\([A-Za-z_]+)(?:\.[\d.]+)?\s+([\s\S]*)$/.exec(body);
  if (!m) return null;
  const ev = m[1].toLowerCase(), rest = m[2].trim();
  if (ev === 'acvar') { const k = rest.toLowerCase(); if (FOREIGN_VAR[k]) return FOREIGN_VAR[k]; const c = /^customdp\.(.+)$/i.exec(rest); return c ? 'prop:' + c[1] : null; }
  if (ev === 'acsm') { const k = rest.toLowerCase().replace(/\s+/g, ''); return FOREIGN_SHEET[k] || null; }
  if (ev === 'acexpr') return '=' + rest.replace(/^\((.*)\)$/s, '$1');
  return null;
}
/** A whole code of another program ("%<\\AcVar Date \\f \"M/d/yyyy\">%") → the same thing as our code, or null when we have no such field. */
export function readForeign(whole) {
  const s = String(whole ?? '').trim();
  if (!s.startsWith(OPEN) || !s.endsWith(CLOSE)) return null;
  let body = s.slice(2, -2).trim(), fmt = '';
  const f = /\s*\\f\s*"([^"]*)"\s*$/.exec(body);
  if (f) { fmt = f[1]; body = body.slice(0, f.index).trim(); }
  if (!body.startsWith('\\')) return null;
  const ours = readForeignBody(body);
  if (!ours) return null;
  const isDate = /date$/.test(ours);
  const keep = isDate ? fmt.replace(/%[a-z]+\d*/gi, '').trim() : /^0(\.0+)?$/.test(fmt) ? fmt : foreignDecimals(fmt);
  return OPEN + ours + (keep ? ' \\f "' + keep + '"' : '') + CLOSE;
}
/** "%lu2%pr3" (their number format: precision 3) → "0.000"; anything else → none. */
function foreignDecimals(fmt) {
  const m = /%pr(\d)/i.exec(String(fmt));
  return m ? (+m[1] ? '0.' + '0'.repeat(+m[1]) : '0') : '';
}

// ---------------------------------------------------------------------------- formats

const pad = (n, w = 2) => String(n).padStart(w, '0');
/** A date through a pattern (yyyy yy MMMM MMM MM M dddd ddd dd d HH H hh h mm ss tt; other characters as they are; 'quoted' text kept). */
export function formatDate(date, pattern = DATE_DEFAULT, locale = 'en') {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return ERR;
  const name = (opts) => { try { return new Intl.DateTimeFormat(locale || 'en', opts).format(date); } catch { return new Intl.DateTimeFormat('en', opts).format(date); } };
  const h12 = date.getHours() % 12 || 12;
  const map = {
    yyyy: () => String(date.getFullYear()), yy: () => pad(date.getFullYear() % 100), MMMM: () => name({ month: 'long' }), MMM: () => name({ month: 'short' }), MM: () => pad(date.getMonth() + 1), M: () => String(date.getMonth() + 1),
    dddd: () => name({ weekday: 'long' }), ddd: () => name({ weekday: 'short' }), dd: () => pad(date.getDate()), d: () => String(date.getDate()),
    HH: () => pad(date.getHours()), H: () => String(date.getHours()), hh: () => pad(h12), h: () => String(h12), mm: () => pad(date.getMinutes()), ss: () => pad(date.getSeconds()), tt: () => (date.getHours() < 12 ? 'AM' : 'PM'),
  };
  return String(pattern || DATE_DEFAULT).replace(/'([^']*)'|yyyy|yy|MMMM|MMM|MM|M|dddd|ddd|dd|d|HH|H|hh|h|mm|ss|tt/g, (tok, quoted) => (quoted !== undefined ? quoted : map[tok]()));
}
const decimalsOf = (fmt) => { const m = /^0(?:\.(0+))?$/.exec(String(fmt || '').trim()); return m ? (m[1] || '').length : null; };
function numberText(v, fmt, what, ctx) {
  if (!Number.isFinite(v)) return ERR;
  const d = decimalsOf(fmt);
  if (d !== null) return v.toFixed(d);
  if (ctx.fmtNumber) { try { return String(ctx.fmtNumber(v, what)); } catch { /* the plain form below */ } }
  const r = Number(v.toFixed(4));
  return String(Object.is(r, -0) ? 0 : r);
}
const NUM_RE = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;

// ---------------------------------------------------------------------------- working a text out

const WHAT = { area: 'area', length: 'length', perimeter: 'length', radius: 'length', diameter: 'length', x: 'length', y: 'length', rotation: 'angle' };

function valueOf(f, ctx, depth) {
  switch (f.kind) {
    case 'date': return formatDate(ctx.now || new Date(), f.fmt || DATE_DEFAULT, ctx.locale);
    case 'savedate': return ctx.saved ? formatDate(ctx.saved, f.fmt || DATE_DEFAULT, ctx.locale) : fail('nodate');
    case 'createdate': return ctx.created ? formatDate(ctx.created, f.fmt || DATE_DEFAULT, ctx.locale) : fail('nodate');
    case 'plotdate': return ctx.plotted ? formatDate(ctx.plotted, f.fmt || DATE_DEFAULT, ctx.locale) : fail('nodate');
    case 'filename': {
      const n = String(ctx.fileName ?? '');
      if (!n) return fail('noname');
      return f.fmt === 'full' ? n : n.replace(/\.(dwg|dxf|ccdwg|json)$/i, '');
    }
    case 'sheetnumber': return ctx.sheet ? String(ctx.sheet.number ?? '') : '';
    case 'sheetname': return ctx.sheet ? String(ctx.sheet.name ?? '') : '';
    case 'sheetcount': return String(ctx.sheet?.count ?? ctx.sheetCount ?? 0);
    case 'prop': {
      const k = f.arg.toLowerCase();
      if (!k) return fail('noprop');
      const v = ctx.props ? ctx.props[k] : undefined;
      return v === undefined || v === null ? fail('noprop') : String(v);
    }
    case 'obj': {
      const m = /^([A-Za-z0-9._-]{1,40})\.([A-Za-z]+)$/.exec(f.arg);
      if (!m) return fail('syntax');
      const prop = m[2].toLowerCase(), o = ctx.object ? ctx.object(m[1]) : null;
      if (!o) return fail('noobject');
      if (!OBJECT_PROPS.includes(prop) || o[prop] === undefined || o[prop] === null) return fail('nothat');
      return typeof o[prop] === 'number' ? numberText(o[prop], f.fmt, WHAT[prop] || 'number', ctx) : String(o[prop]);
    }
    case 'formula': {
      const inner = depth < 4 ? run(f.arg, ctx, depth + 1, true) : { text: f.arg, errors: [{ why: 'deep' }] };
      if (inner.errors.length) return fail(inner.errors[0].why);
      const res = compute(inner.text, ctx.values || {});
      return res.ok ? numberText(res.value, f.fmt, 'number', ctx) : fail('formula');
    }
    default: return fail('unknown');
  }
}
class FieldError extends Error { constructor(why) { super(why); this.why = why; } }
function fail(why) { throw new FieldError(why); }

function run(text, ctx, depth, raw = false) {
  const errors = [];
  let n = 0, out = '';
  for (const p of parts(text)) {
    if (p.text !== undefined) { out += p.text; continue; }
    n++;
    try {
      let v = valueOf(p.field, ctx, depth);
      if (raw) {   // inside a formula: a number as the formula reads it (no thousands separators, no unit marks)
        const o = p.field.kind === 'obj' ? rawObject(p.field, ctx) : null;
        if (o !== null) v = String(o); else if (!NUM_RE.test(String(v).trim())) fail('notnumber');
      }
      out += v;
    } catch (err) {
      if (!(err instanceof FieldError)) throw err;
      errors.push({ code: p.field.code, why: err.why });
      out += ERR;
    }
  }
  return { text: out, fields: n, errors };
}
function rawObject(f, ctx) {
  const m = /^([A-Za-z0-9._-]{1,40})\.([A-Za-z]+)$/.exec(f.arg);
  const o = m && ctx.object ? ctx.object(m[1]) : null, v = o ? o[m[2].toLowerCase()] : null;
  return typeof v === 'number' && Number.isFinite(v) ? v : null;
}

/** A text with its fields worked out. */
export function evaluate(text, ctx = {}) { return run(String(text ?? ''), ctx || {}, 0); }

/** Every field of a text, as parsed ({ kind, arg, fmt, code }); kind '' = not a field we know (it shows ####). */
export const fieldsIn = (text) => parts(text).filter((p) => p.field).map((p) => p.field);
/** A text another program wrote, with its codes turned into ours where we have the same field; `kept` counts the ones we do not. */
export function adoptForeign(text) {
  let unknown = 0;
  const out = parts(text).map((p) => {
    if (p.text !== undefined) return p.text;
    if (!/^%<\s*\\/.test(p.field.code)) return p.field.code;
    const ours = readForeign(p.field.code);
    if (!ours) unknown++;
    return ours || p.field.code;
  }).join('');
  return { text: out, unknown };
}
