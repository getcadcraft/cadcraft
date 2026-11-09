/* SPDX-License-Identifier: Apache-2.0 */
/**
 * charts.js — small SVG line charts for the scope (time) and the plotter (frequency) of the Circuit add-on (0.9 SU.1084), and the number format of the
 * readings. The chart is drawn from the data: nothing is smoothed, a line joins the solved points.
 */
const NS = 'http://www.w3.org/2000/svg';

/** 1234.5 → "1.2345k", 0.00047 → "470u". Four significant digits. */
export function eng(v, unit = '') {
  if (!Number.isFinite(v)) return String(v) + unit;
  if (v === 0) return '0' + unit;
  const a = Math.abs(v), sfx = ['f', 'p', 'n', 'u', 'm', '', 'k', 'M', 'G', 'T'];
  let i = Math.floor(Math.log10(a) / 3); i = Math.max(-5, Math.min(4, i));
  const x = v / Math.pow(10, 3 * i), s = Math.abs(x) >= 100 ? x.toFixed(1) : Math.abs(x) >= 10 ? x.toFixed(2) : x.toFixed(3);
  return s.replace(/\.?0+$/, '') + sfx[i + 5] + unit;
}

/** "Nice" ticks between lo and hi (about n). */
export function niceTicks(lo, hi, n = 5) {
  if (!(hi > lo)) { hi = lo + 1; }
  const span = hi - lo, raw = span / n, mag = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / mag;
  const step = (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * mag, out = [];
  for (let x = Math.ceil(lo / step - 1e-9) * step; x <= hi + step * 1e-9; x += step) out.push(Math.abs(x) < step * 1e-9 ? 0 : x);
  return out;
}

const COLORS = ['#2563eb', '#dc2626', '#16a34a', '#d97706', '#7c3aed', '#0891b2'];

/**
 * lineChart(doc, { x: number[], series: [{ name, y: number[] }], xlog, xlabel, ylabel, xunit, yunit, width, height }) → <svg>
 */
export function lineChart(doc, o) {
  const W = o.width || 460, H = o.height || 220, L = 52, R = 10, T = 10, B = 34;
  const svg = doc.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.setAttribute('class', 'cr-chart'); svg.setAttribute('role', 'img');
  if (o.label) svg.setAttribute('aria-label', o.label);
  const add = (name, attrs, text) => { const e = doc.createElementNS(NS, name); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text !== undefined) e.textContent = text; svg.append(e); return e; };
  const xs = o.xlog ? o.x.map((v) => Math.log10(v)) : o.x;
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  let y0 = Infinity, y1 = -Infinity;
  for (const s of o.series) for (const v of s.y) if (Number.isFinite(v)) { y0 = Math.min(y0, v); y1 = Math.max(y1, v); }
  if (!Number.isFinite(y0)) { y0 = 0; y1 = 1; }
  if (y1 - y0 < 1e-12 * Math.max(1, Math.abs(y1))) { y0 -= 0.5; y1 += 0.5; } else { const p = (y1 - y0) * 0.05; y0 -= p; y1 += p; }
  const px = (v) => L + (W - L - R) * ((v - x0) / (x1 - x0 || 1)), py = (v) => T + (H - T - B) * (1 - (v - y0) / (y1 - y0));
  add('rect', { x: L, y: T, width: W - L - R, height: H - T - B, fill: 'none', stroke: 'currentColor', 'stroke-opacity': '.35' });
  for (const v of niceTicks(y0, y1, 5)) { add('line', { x1: L, x2: W - R, y1: py(v), y2: py(v), stroke: 'currentColor', 'stroke-opacity': '.12' }); add('text', { x: L - 4, y: py(v) + 3, 'text-anchor': 'end', 'font-size': 9, fill: 'currentColor' }, eng(v)); }
  if (o.xlog) { for (let d = Math.ceil(x0 - 1e-9); d <= x1 + 1e-9; d++) { add('line', { x1: px(d), x2: px(d), y1: T, y2: H - B, stroke: 'currentColor', 'stroke-opacity': '.12' }); add('text', { x: px(d), y: H - B + 12, 'text-anchor': 'middle', 'font-size': 9, fill: 'currentColor' }, eng(Math.pow(10, d))); } }
  else for (const v of niceTicks(x0, x1, 6)) { add('line', { x1: px(v), x2: px(v), y1: T, y2: H - B, stroke: 'currentColor', 'stroke-opacity': '.12' }); add('text', { x: px(v), y: H - B + 12, 'text-anchor': 'middle', 'font-size': 9, fill: 'currentColor' }, eng(v)); }
  if (o.xlabel) add('text', { x: (L + W - R) / 2, y: H - 4, 'text-anchor': 'middle', 'font-size': 10, fill: 'currentColor' }, o.xlabel);
  if (o.ylabel) add('text', { x: 10, y: 10 + (H - B) / 2, 'text-anchor': 'middle', 'font-size': 10, fill: 'currentColor', transform: `rotate(-90 10 ${10 + (H - B) / 2})` }, o.ylabel);
  o.series.forEach((s, k) => {
    let d = '';
    s.y.forEach((v, i) => { if (Number.isFinite(v)) d += (d ? 'L' : 'M') + px(xs[i]).toFixed(1) + ' ' + py(v).toFixed(1); });
    add('path', { d, fill: 'none', stroke: COLORS[k % COLORS.length], 'stroke-width': 1.6, 'data-series': s.name });
    add('text', { x: L + 6 + k * 70, y: T + 11, 'font-size': 10, fill: COLORS[k % COLORS.length] }, s.name);
  });
  return svg;
}
