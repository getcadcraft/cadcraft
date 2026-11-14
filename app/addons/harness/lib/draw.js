/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw.js — the harness drawing and a list as a table (0.8 SU.892). DOM-free. The harness object keeps its points in WORLD coordinates;
 * k = drawing units per millimetre.
 *   bundleEnts(h) → segments as lines, nodes as small circles with their names, every segment's length (and, once routed, its wire count and diameter)
 *   tableEnts(list, k, { x, y, title, textH }) → a list as a ruled table, top left at x, y
 */
import { bundleDiameter } from './route.js';

const ln = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
const text = (x, y, h, s, ha = 'center', va = 'middle', rot = 0) => ({ type: 'text', x, y, h, rot, s: String(s), ha, va });
const circ = (cx, cy, r) => ({ type: 'circle', cx, cy, r });
const poly = (pts) => ({ type: 'poly', pts: pts.map(([x, y]) => ({ x, y })), closed: true });

export function bundleEnts(h) {
  const k = h.k || 1, th = 4 * k, out = [];
  const node = new Map(h.nodes.map((n) => [n.id, n]));
  for (const s of h.segs) {
    const a = node.get(s.a), b = node.get(s.b);
    if (!a || !b) continue;
    out.push(ln(a.x, a.y, b.x, b.y));
    const mm = Number.isFinite(s.len) && s.len > 0 ? s.len : Math.hypot(a.x - b.x, a.y - b.y) / k;
    const l = Math.hypot(b.x - a.x, b.y - a.y) || 1, nx = -(b.y - a.y) / l, ny = (b.x - a.x) / l;
    let ang = Math.atan2(b.y - a.y, b.x - a.x);
    if (Math.cos(ang) < -1e-9) ang += Math.PI;
    const c = h.counts?.[s.id];
    out.push(text((a.x + b.x) / 2 + nx * th * 1.1, (a.y + b.y) / 2 + ny * th * 1.1, th, Math.round(mm), 'center', 'middle', ang));
    if (c && c.n) out.push(text((a.x + b.x) / 2 - nx * th * 1.1, (a.y + b.y) / 2 - ny * th * 1.1, th * 0.8, c.n + ' × ' + (c.od ? 'Ø' + Math.round(c.od * 10) / 10 : ''), 'center', 'middle', ang));
  }
  for (const n of h.nodes) {
    out.push(circ(n.x, n.y, 2.2 * k));
    out.push(text(n.x + 3 * k, n.y + 3 * k, th, n.label || n.id, 'left', 'bottom'));
  }
  if (h.name && h.nodes.length) { const n = h.nodes[0]; out.push(text(n.x, n.y - 8 * k, th * 1.3, h.name, 'left', 'top')); }
  return out;
}

/** The diameter of a bundle for the drawing: from the diameters of its wires. */
export const odOf = (ods, packing) => (ods.length ? bundleDiameter(ods, packing) : 0);

export function tableEnts(list, k = 1, { x = 0, y = 0, textH = 3.5, title = '' } = {}) {
  const th = textH * k, rowH = th * 1.9, pad = th * 0.6, out = [];
  const widths = list.columns.map((c, j) => Math.max(String(c).length, ...list.rows.map((r) => String(r[j] ?? '').length)) * th * 0.62 + pad * 2);
  const W = widths.reduce((a, b) => a + b, 0), top = title ? rowH * 1.4 : 0, H = top + rowH * (list.rows.length + 1);
  out.push(poly([[x, y], [x + W, y], [x + W, y - H], [x, y - H]]));
  if (title) { out.push(text(x + pad, y - top / 2, th * 1.25, title, 'left')); out.push(ln(x, y - top, x + W, y - top)); }
  let cx = x;
  const rows = [list.columns, ...list.rows];
  widths.forEach((w, j) => {
    rows.forEach((r, i) => { if (r[j] !== '' && r[j] != null) out.push(text(cx + pad, y - top - rowH * (i + 0.5), th, r[j], 'left')); });
    cx += w;
    if (j + 1 < widths.length) out.push(ln(cx, y - top, cx, y - H));
  });
  out.push(ln(x, y - top - rowH, x + W, y - top - rowH));
  return out;
}
