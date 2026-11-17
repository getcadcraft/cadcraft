/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hatch-gradient.js — gradient fills (1.0 ORS.7). DOM-free: bin/test-hatch-extras.mjs runs it in Node.
 *
 * A gradient fill is a solid hatch that also carries the gradient as extended data CADCRAFT_GRAD (JSON in 1000 strings):
 *   { n: name, a: angle (radians), c: 1 centered | 0 not, o: 1 one colour | 0 two, t: tint 0–1 (one colour: 0 = shaded to
 *     black, 0.5 = the colour itself, 1 = tinted to white), c1: '#rrggbb', c2: '#rrggbb' }
 * and its own colour is the first colour. So anything that does not know gradients (an older build, the R12 outline,
 * another program reading a DXF 2000 file) still shows a filled area in that colour, and Save / Open keeps the
 * gradient wherever extended data is kept. DWG 2004 and later also get the file format's real gradient record
 * (toRecord / fromRecord, used by dwg-save.js and dwg-import.js); a DXF from another program is read from its 450–470
 * groups (fromDxfGroups, dxf.js). DXF 2000 itself has no gradient groups (they came with the 2004 format), so there the
 * hatch is written solid with our extended data.
 *
 * Names (the ones files use): LINEAR, CYLINDER, INVCYLINDER, SPHERICAL, INVSPHERICAL, HEMISPHERICAL, INVHEMISPHERICAL,
 * CURVED, INVCURVED. How each is painted is CadCraft's own definition (gradientFill below): the same kind of look as
 * other programs draw for that name, not a pixel copy.
 *
 *   gradOf(e) → g | null · withGradient(e, g | null) → e' · cleanGradient(o) → g | null · isGradient(e)
 *   gradientColors(g) → ['#rrggbb' first, '#rrggbb' second]   (one colour: the second is its tint)
 *   gradientFill(loops, g, m?) → { loops, kind: 'linear' | 'radial', x0, y0, x1, y1 | cx, cy, r0, r1, stops: [[t, '#rrggbb']] } | null
 *   gradientBands(fill, n?) → [{ color, loops }]   the same picture as flat bands, painted in order (plots, PDF, SVG)
 *   paintGradient(ctx, path, fill, alpha)          a canvas: the browser's own gradient, clipped to the path
 *   shiftFill(fill, ox, oy)                        the fill moved by (-ox, -oy) (the view's cache origin)
 *   turnGradient(e, rot, flip)                     the gradient's angle after the hatch is turned or mirrored
 *   toRecord(g) / fromRecord(rec) · fromDxfGroups(pairs) → g | null
 *   askGradient(c, g) → g | null                   the command-line questions (GRADIENT, HATCH, HATCHEDIT)
 */
import { t } from './i18n.js';

export const GRAD_APP = 'CADCRAFT_GRAD';
export const GRAD_NAMES = ['LINEAR', 'CYLINDER', 'INVCYLINDER', 'SPHERICAL', 'INVSPHERICAL', 'HEMISPHERICAL', 'INVHEMISPHERICAL', 'CURVED', 'INVCURVED'];
export const DEFAULT_GRADIENT = Object.freeze({ n: 'LINEAR', a: 0, c: 1, o: 0, t: 1, c1: '#0000ff', c2: '#ffff00' });
const HEX = /^#[0-9a-f]{6}$/i;
const fin = Number.isFinite;

// ---------------------------------------------------------------------------
// colours

/** A colour index (1–255) as '#rrggbb' (the same table doc.js draws with; kept here so geom.js can load this file without a loop). */
function aciHex(i) {
  const BASE = { 1: '#ff0000', 2: '#ffff00', 3: '#00ff00', 4: '#00ffff', 5: '#0000ff', 6: '#ff00ff', 7: '#ffffff', 8: '#808080', 9: '#c0c0c0' };
  if (BASE[i]) return BASE[i];
  if (i >= 250 && i <= 255) return ['#333333', '#505050', '#696969', '#828282', '#bebebe', '#ffffff'][i - 250];
  if (i < 10 || i > 249) return '#ffffff';
  const h = Math.floor((i - 10) / 10) * 15, j = (i - 10) % 10, v = [1, 1, 0.8, 0.8, 0.6, 0.6, 0.5, 0.5, 0.3, 0.3][j], sat = j % 2 === 0 ? 1 : 0.5;
  const f = (n) => { const k = (n + h / 60) % 6; return v - v * sat * Math.max(0, Math.min(k, 4 - k, 1)); };
  return '#' + [f(5), f(3), f(1)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}
const rgbOf = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
const hexOf = (r, g, b) => '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
const mixHex = (a, b, k) => { const p = rgbOf(a), q = rgbOf(b); return hexOf(p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k); };

/** What a person may type for a colour: 1–255 (the colour index), r,g,b (0–255 each), #rrggbb, or a name. → '#rrggbb' | null */
export function parseGradColor(text) {
  const s = String(text ?? '').trim().toLowerCase();
  if (HEX.test(s)) return s;
  const names = { red: 1, yellow: 2, green: 3, cyan: 4, blue: 5, magenta: 6, white: 7, black: '#000000', gray: 8, grey: 8 };
  if (s in names) return typeof names[s] === 'string' ? names[s] : parseGradColor(String(names[s]));
  const m = /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})$/.exec(s);
  if (m && m.slice(1).every((v) => +v <= 255)) return hexOf(+m[1], +m[2], +m[3]);
  if (/^\d{1,3}$/.test(s) && +s >= 1 && +s <= 255) return aciHex(+s);
  return null;
}

/** The two colours a gradient runs between. */
export function gradientColors(g) {
  if (!g.o) return [g.c1, g.c2];
  const k = Math.max(0, Math.min(1, fin(g.t) ? g.t : 1));
  return [g.c1, k <= 0.5 ? mixHex('#000000', g.c1, k * 2) : mixHex(g.c1, '#ffffff', (k - 0.5) * 2)];
}

// ---------------------------------------------------------------------------
// the data on the hatch

export function cleanGradient(o) {
  if (!o || typeof o !== 'object') return null;
  const n = String(o.n || '').toUpperCase();
  if (!GRAD_NAMES.includes(n) || !HEX.test(String(o.c1 || ''))) return null;
  const c2 = HEX.test(String(o.c2 || '')) ? String(o.c2).toLowerCase() : '#ffffff';
  return { n, a: fin(o.a) ? o.a : 0, c: o.c === 0 || o.c === false ? 0 : 1, o: o.o ? 1 : 0, t: fin(o.t) ? Math.max(0, Math.min(1, o.t)) : 1, c1: String(o.c1).toLowerCase(), c2 };
}
const parsed = new WeakMap();
/** The gradient a hatch carries, or null. */
export function gradOf(e) {
  const x = e?.type === 'hatch' ? e.xd?.[GRAD_APP] : null;
  if (!Array.isArray(x) || !x.length) return null;
  if (parsed.has(x)) return parsed.get(x);
  let g = null;
  try { g = cleanGradient(JSON.parse(x.map((r) => String(r?.[1] ?? '')).join(''))); } catch { g = null; }
  parsed.set(x, g);
  return g;
}
export const isGradient = (e) => !!gradOf(e);

/** The hatch as a gradient fill (solid, in the first colour), or with `null` as a plain solid fill again. */
export function withGradient(e, g) {
  const xd = { ...(e.xd || {}) };
  const out = { ...e };
  const clean = g ? cleanGradient(g) : null;
  if (clean) {
    const text = JSON.stringify(clean), rows = [];
    for (let i = 0; i < text.length; i += 200) rows.push([1000, text.slice(i, i + 200)]);
    xd[GRAD_APP] = rows;
    out.solid = true; out.color = clean.c1;
    for (const k of ['pattern', 'pscale', 'pangle', 'piso', 'patdef', 'patlines', 'ox', 'oy', 'bg']) delete out[k];
  } else delete xd[GRAD_APP];
  if (Object.keys(xd).length) out.xd = xd; else delete out.xd;
  return out;
}

/** What a file reader adds to the hatch it made for a gradient it found: solid, the first colour, and the data. */
export function gradFields(g) {
  const clean = cleanGradient(g);
  return clean ? { solid: true, color: clean.c1, xd: withGradient({ type: 'hatch' }, clean).xd } : {};
}

/** After the hatch is turned by `rot` (and mirrored when `flip`): its gradient turns with it. */
export function turnGradient(e, rot, flip = false) {
  const g = gradOf(e);
  if (!g || (!rot && !flip)) return e;
  return withGradient(e, { ...g, a: (flip ? -g.a : g.a) + (rot || 0) });
}

// ---------------------------------------------------------------------------
// the picture

/**
 * Where the colours go for these loops. The box is the loops' extent along the gradient's angle (u) and across it (v).
 *   LINEAR         first colour at the start of u, second at its end (not centered: the change is over in the first half)
 *   CYLINDER       second colour along the middle line, first at both sides (not centered: the line sits a quarter in)
 *   SPHERICAL      second colour at the middle, first at the far corners (not centered: the middle moves up and left)
 *   HEMISPHERICAL  second colour at the middle of the bottom edge, first at the far corners
 *   CURVED         bands curved round a point below the box, second colour nearest it
 *   INV…           the two colours the other way round
 */
export function gradientFill(loops, g, m = null) {
  const L = m ? loops.map((l) => { const o = new Array(l.length); for (let i = 0; i + 1 < l.length; i += 2) { o[i] = m[0] * l[i] + m[2] * l[i + 1] + m[4]; o[i + 1] = m[1] * l[i] + m[3] * l[i + 1] + m[5]; } return o; }) : loops;
  let ang = g.a || 0;
  if (m) { const flip = m[0] * m[3] - m[1] * m[2] < 0; ang = (flip ? -ang : ang) + Math.atan2(m[1], m[0]); }
  const ux = Math.cos(ang), uy = Math.sin(ang), vx = -uy, vy = ux;
  let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
  for (const l of L) for (let i = 0; i + 1 < l.length; i += 2) {
    const u = l[i] * ux + l[i + 1] * uy, v = l[i] * vx + l[i + 1] * vy;
    if (u < u0) u0 = u; if (u > u1) u1 = u; if (v < v0) v0 = v; if (v > v1) v1 = v;
  }
  if (!(u1 > u0) || !(v1 > v0)) return null;
  const W = (u, v) => ({ x: u * ux + v * vx, y: u * uy + v * vy });
  const uc = (u0 + u1) / 2, vc = (v0 + v1) / 2, hu = (u1 - u0) / 2, hv = (v1 - v0) / 2;
  const inv = g.n.startsWith('INV'), base = inv ? g.n.slice(3) : g.n;
  let [a, b] = gradientColors(g);
  if (inv) [a, b] = [b, a];
  const far = (cu, cv) => Math.max(Math.hypot(u0 - cu, v0 - cv), Math.hypot(u1 - cu, v0 - cv), Math.hypot(u0 - cu, v1 - cv), Math.hypot(u1 - cu, v1 - cv));
  if (base === 'LINEAR' || base === 'CYLINDER') {
    const p0 = W(u0, vc), p1 = W(u1, vc);
    const stops = base === 'LINEAR' ? (g.c ? [[0, a], [1, b]] : [[0, a], [0.5, b], [1, b]]) : [[0, a], [g.c ? 0.5 : 0.25, b], [1, a]];
    return { loops: L, kind: 'linear', x0: p0.x, y0: p0.y, x1: p1.x, y1: p1.y, stops };
  }
  let cu = uc, cv = vc, r0 = 0;
  if (base === 'SPHERICAL') { if (!g.c) { cu = uc - hu / 2; cv = vc + hv / 2; } }
  else if (base === 'HEMISPHERICAL') { cv = v0; if (!g.c) cu = uc - hu / 2; }
  else { cv = v0 - 2 * hv; r0 = 2 * hv; if (!g.c) cu = uc - hu / 2; }   // CURVED
  const c = W(cu, cv);
  return { loops: L, kind: 'radial', cx: c.x, cy: c.y, r0, r1: Math.max(far(cu, cv), r0 + 1e-9), stops: [[0, b], [1, a]] };
}

/** The colour at t (0–1) along the stops. */
export function colorAt(stops, t) {
  if (t <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) { const [t0, c0] = stops[i - 1], [t1, c1] = stops[i]; return t1 > t0 ? mixHex(c0, c1, (t - t0) / (t1 - t0)) : c1; }
  }
  return stops[stops.length - 1][1];
}

/** Keep the part of a flat loop on the inner side of the line through (px, py) with inward normal (nx, ny). */
function clipHalf(l, px, py, nx, ny) {
  const out = [], n = l.length >> 1;
  for (let i = 0; i < n; i++) {
    const ax = l[2 * i], ay = l[2 * i + 1], j = (i + 1) % n, bx = l[2 * j], by = l[2 * j + 1];
    const da = (ax - px) * nx + (ay - py) * ny, db = (bx - px) * nx + (by - py) * ny;
    if (da >= 0) out.push(ax, ay);
    if ((da >= 0) !== (db >= 0)) { const k = da / (da - db); out.push(ax + (bx - ax) * k, ay + (by - ay) * k); }
  }
  return out;
}

/**
 * The gradient as flat bands to paint one over the other, first to last (each covers everything from its own start to the
 * far end, so no hairline shows between two bands). `n` bands; fewer for very large boundaries.
 */
export function gradientBands(fill, n = 48) {
  const pts = fill.loops.reduce((s, l) => s + (l.length >> 1), 0);
  if (pts > 4000) n = Math.max(8, Math.round(n * 4000 / pts));
  const out = [];
  if (fill.kind === 'linear') {
    const dx = fill.x1 - fill.x0, dy = fill.y1 - fill.y0, len = Math.hypot(dx, dy) || 1, nx = dx / len, ny = dy / len;
    for (let k = 0; k < n; k++) {
      const color = colorAt(fill.stops, (k + 0.5) / n);
      const loops = k === 0 ? fill.loops : fill.loops.map((l) => clipHalf(l, fill.x0 + dx * k / n, fill.y0 + dy * k / n, nx, ny)).filter((l) => l.length >= 6);
      if (loops.length) out.push({ color, loops });
    }
    return out;
  }
  const SIDES = 64;   // a 64-sided shape round each circle (its sides touch the circle, so it is never inside it)
  for (let k = n - 1; k >= 0; k--) {
    const color = colorAt(fill.stops, (k + 0.5) / n);
    let loops = fill.loops;
    if (k < n - 1) {
      const r = fill.r0 + (fill.r1 - fill.r0) * (k + 1) / n;
      for (let s = 0; s < SIDES && loops.length; s++) {
        const a = (s + 0.5) * 2 * Math.PI / SIDES, cx = Math.cos(a), cy = Math.sin(a);
        loops = loops.map((l) => clipHalf(l, fill.cx + cx * r, fill.cy + cy * r, -cx, -cy)).filter((l) => l.length >= 6);
      }
    }
    if (loops.length) out.push({ color, loops });
  }
  return out;
}

/** The fill with every coordinate moved by (-ox, -oy), without its loops (a view keeps those as a path). */
export function shiftFill(f, ox, oy) {
  return f.kind === 'linear' ? { kind: 'linear', x0: f.x0 - ox, y0: f.y0 - oy, x1: f.x1 - ox, y1: f.y1 - oy, stops: f.stops }
    : { kind: 'radial', cx: f.cx - ox, cy: f.cy - oy, r0: f.r0, r1: f.r1, stops: f.stops };
}

/** Paint on a canvas (the transform is the caller's): the browser's own smooth gradient inside `path`, even-odd. */
export function paintGradient(ctx, path, f, alpha = 1) {
  const g = f.kind === 'linear' ? ctx.createLinearGradient(f.x0, f.y0, f.x1, f.y1) : ctx.createRadialGradient(f.cx, f.cy, f.r0, f.cx, f.cy, f.r1);
  for (const [at, color] of f.stops) g.addColorStop(Math.max(0, Math.min(1, at)), color);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = g;
  ctx.fill(path, 'evenodd');
}

// ---------------------------------------------------------------------------
// files: the DWG record (2004 and later) and a DXF's groups

const wordOf = (hex) => parseInt(hex.slice(1), 16);
/** → what cc-dwg's HATCH writer takes as `gradient`. */
export function toRecord(g) {
  const [a, b] = [g.c1, g.o ? gradientColors(g)[1] : g.c2];
  return { name: g.n, angle: g.a || 0, shift: g.c ? 0 : 1, single: !!g.o, tint: g.o ? g.t : 0, colors: [{ value: 0, rgb: wordOf(a) }, { value: 1, rgb: wordOf(b) }] };
}
/** A file's gradient record ({ name, angle, shift, singleColor | single, tint, colors: [{ value, rgb }] }) → g | null. */
export function fromRecord(r) {
  if (!r || typeof r !== 'object') return null;
  const cols = (Array.isArray(r.colors) ? r.colors : []).filter((c) => c && fin(c.rgb)).map((c) => '#' + ((c.rgb >>> 0) & 0xffffff).toString(16).padStart(6, '0'));
  if (!cols.length) return null;
  const one = !!(r.singleColor ?? r.single);
  return cleanGradient({ n: String(r.name || 'LINEAR').toUpperCase(), a: fin(r.angle) ? r.angle : 0, c: fin(r.shift) && Math.abs(r.shift) > 0.5 ? 0 : 1, o: one ? 1 : 0, t: fin(r.tint) ? r.tint : 1, c1: cols[0], c2: cols[1] || '#ffffff' });
}
/**
 * A DXF HATCH's groups ([[code, value]…], in file order) → g | null. Group 450 = 1 marks a gradient; 460 angle (radians), 461
 * shift, 452 one colour, 462 tint, then per colour 463 (its place), 63 (colour index) and 421 (true colour); 470 the name.
 */
export function fromDxfGroups(pairs) {
  const at = pairs.findIndex(([c, v]) => c === 450 && parseInt(v, 10) === 1);
  if (at < 0) return null;
  const rest = pairs.slice(at + 1), first = (code) => rest.find(([c]) => c === code)?.[1];
  const cols = [];
  let cur = null;
  for (const [c, v] of rest) {
    if (c === 463) { cur = { rgb: null, aci: null }; cols.push(cur); }
    else if (cur && c === 421) cur.rgb = parseInt(v, 10);
    else if (cur && c === 63) cur.aci = parseInt(v, 10);
    else if (c === 470) break;
  }
  const hex = cols.map((k) => (fin(k.rgb) ? '#' + ((k.rgb >>> 0) & 0xffffff).toString(16).padStart(6, '0') : fin(k.aci) && k.aci >= 1 && k.aci <= 255 ? aciHex(k.aci) : null)).filter(Boolean);
  if (!hex.length) return null;
  const num = (code, d) => { const v = parseFloat(first(code)); return fin(v) ? v : d; };
  return cleanGradient({ n: String(first(470) || 'LINEAR').trim().toUpperCase(), a: num(460, 0), c: Math.abs(num(461, 0)) > 0.5 ? 0 : 1, o: parseInt(first(452) ?? '0', 10) ? 1 : 0, t: num(462, 1), c1: hex[0], c2: hex[1] || '#ffffff' });
}

// ---------------------------------------------------------------------------
// the questions (no DOM: the prompt API of commands.js)

const O = (key, label) => ({ key, label, en: label });
const kw = (k) => String(typeof k === 'string' ? k : k?.option || '').toUpperCase();
const fmt = (n) => (Math.abs(n) < 1e-10 ? '0' : Number(n.toFixed(4)).toString());
export const gradientLine = (g) => t(g.o ? 'gradient.now.one' : 'gradient.now.two', { name: g.n, angle: fmt((g.a || 0) * 180 / Math.PI), centered: t(g.c ? 'opt.yes' : 'opt.no'), c1: g.c1, c2: g.c2, tint: fmt(g.t) });

/** Ask for a gradient, starting from `g` (or the standard one). Enter or eXit ends. → the gradient. */
export async function askGradient(c, g = null) {
  let cur = cleanGradient(g) || { ...DEFAULT_GRADIENT };
  const color = async (key, now) => {
    for (;;) {
      const v = String(await c.string(t(key), { default: now }) ?? '').trim();
      if (!v) return now;
      const h = parseGradColor(v);
      if (h) return h;
      c.print(t('gradient.color.bad'));
    }
  };
  for (;;) {
    c.print(gradientLine(cur));
    const o = kw(await c.keyword(t('gradient.option'), { options: [O('T', t('gradient.opt.type')), O('O', t('gradient.opt.one')), O('TW', t('gradient.opt.two')), O('A', t('gradient.opt.angle')), O('C', t('gradient.opt.centered')), O('X', t('gradient.opt.exit'))], default: 'X' }));
    if (!o || o === 'X') return cur;
    if (o === 'T') {
      for (;;) {
        const v = String(await c.string(t('gradient.type.ask', { list: GRAD_NAMES.join(', ') }), { default: cur.n }) ?? '').trim().toUpperCase();
        if (!v) break;
        const hit = GRAD_NAMES.find((n) => n === v) || GRAD_NAMES.find((n) => n.startsWith(v));
        if (hit) { cur = { ...cur, n: hit }; break; }
        c.print(t('gradient.type.bad'));
      }
    } else if (o === 'O') {
      const c1 = await color('gradient.color.one', cur.c1);
      const tv = await c.number(t('gradient.tint.ask'), { default: cur.o ? cur.t : 1 });
      cur = { ...cur, o: 1, c1, t: fin(tv) && tv >= 0 && tv <= 1 ? tv : cur.t };
      if (!(fin(tv) && tv >= 0 && tv <= 1)) c.print(t('gradient.tint.bad'));
    } else if (o === 'TW') {
      const c1 = await color('gradient.color.first', cur.c1), c2 = await color('gradient.color.second', cur.c2);
      cur = { ...cur, o: 0, c1, c2 };
    } else if (o === 'A') {
      const v = await c.angle(t('gradient.angle.ask'), { default: cur.a });
      if (fin(v)) cur = { ...cur, a: v };
    } else if (o === 'C') {
      const k = kw(await c.keyword(t('gradient.centered.ask'), { options: [O('Y', t('opt.yes')), O('N', t('opt.no'))], default: cur.c ? 'Y' : 'N' }));
      cur = { ...cur, c: k === 'N' ? 0 : 1 };
    }
  }
}
