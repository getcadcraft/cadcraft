/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw.js — what a fixture, a position and a legend look like on the drawing (0.8 SU.766). DOM-free; imports only model.js.
 * The symbols are our own drawings (generic shapes for each kind of instrument), in millimetres on the object's own frame: the
 * fixture's origin is its centre; the symbol aims `fix.aim` degrees from +x and its words stay upright. `k` = drawing units per millimetre.
 *
 *   fixtureEnts(fix, k, { textH }) → the symbol, its unit number above, its channel in a circle below, its colour beside it
 *   positionEnts(pos, k) → the pipe / truss / boom / floor line in WORLD coordinates (the position object keeps its points)
 *   legendEnts(rows, k, { x, y, title }) → a USITT-style legend: a frame with one row per type, the symbol, its name, count and watts
 */
import { typeOf, project, lengthOf } from './model.js';

const ln = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
const circ = (cx, cy, r) => ({ type: 'circle', cx, cy, r });
const poly = (pts, closed = true) => ({ type: 'poly', pts: pts.map(([x, y]) => ({ x, y })), closed });
const rect = (x0, y0, x1, y1) => poly([[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
const text = (x, y, h, s, ha = 'center', va = 'middle') => ({ type: 'text', x, y, h, rot: 0, s: String(s), ha, va });

/** The symbol of a kind of instrument in millimetres, centred on 0,0, aiming along +x. */
export const SYMBOLS = {
  profile: () => [poly([[-160, -90], [100, -90], [160, -50], [160, 50], [100, 90], [-160, 90]]), ln(100, -90, 100, 90)],
  fresnel: () => [circ(0, 0, 110), ln(110, -110, 110, 110), ln(-110, 0, -170, 0)],
  pc: () => [circ(0, 0, 110), ln(110, -110, 110, 110), ln(-110, -110, -110, 110)],
  par: () => [circ(0, 0, 100), circ(0, 0, 55), ln(-100, 0, -170, 0)],
  cyc: () => [rect(-150, -80, 150, 80), ln(-150, 0, 150, 0), ln(150, -80, 210, -110), ln(150, 80, 210, 110)],
  blinder: () => [rect(-120, -60, 120, 60), circ(-55, 0, 42), circ(55, 0, 42)],
  scoop: () => [{ type: 'arc', cx: 0, cy: 0, r: 120, a0: Math.PI / 2, a1: Math.PI * 1.5 }, ln(0, -120, 0, 120), ln(0, 0, 150, 0)],
  follow: () => [poly([[-220, -70], [120, -110], [240, -110], [240, 110], [120, 110], [-220, 70]]), ln(120, -110, 120, 110)],
  led: () => [rect(-100, -100, 100, 100), circ(0, 0, 65), ln(100, 0, 160, 0)],
  mover: () => [circ(0, 0, 120), ln(-85, -85, 85, 85), ln(-85, 85, 85, -85), circ(0, 0, 28), ln(120, 0, 190, 0)],
};

function moveEnts(list, dx, dy, s) {
  return list.map((e) => {
    if (e.type === 'line') return { ...e, x1: e.x1 * s + dx, y1: e.y1 * s + dy, x2: e.x2 * s + dx, y2: e.y2 * s + dy };
    if (e.type === 'circle') return { ...e, cx: e.cx * s + dx, cy: e.cy * s + dy, r: e.r * s };
    if (e.type === 'arc') return { ...e, cx: e.cx * s + dx, cy: e.cy * s + dy, r: e.r * s };
    if (e.type === 'poly') return { ...e, pts: e.pts.map((p) => ({ ...p, x: p.x * s + dx, y: p.y * s + dy })) };
    return e;
  });
}

/** The entities turned by `a` radians about 0,0. */
function turn(list, a) {
  const c = Math.cos(a), s = Math.sin(a), P = (x, y) => [x * c - y * s, x * s + y * c];
  return list.map((e) => {
    if (e.type === 'line') { const [x1, y1] = P(e.x1, e.y1), [x2, y2] = P(e.x2, e.y2); return { ...e, x1, y1, x2, y2 }; }
    if (e.type === 'circle') { const [cx, cy] = P(e.cx, e.cy); return { ...e, cx, cy }; }
    if (e.type === 'arc') { const [cx, cy] = P(e.cx, e.cy); return { ...e, cx, cy, a0: e.a0 + a, a1: e.a1 + a }; }
    if (e.type === 'poly') return { ...e, pts: e.pts.map((p) => { const [x, y] = P(p.x, p.y); return { ...p, x, y }; }) };
    return e;
  });
}

export function fixtureEnts(fix, k = 1, { textH = null } = {}) {
  const make = SYMBOLS[fix.type];
  if (!make) return [];
  // the symbol aims `aim` degrees from +x; the words stay upright however it aims
  const out = turn(moveEnts(make(), 0, 0, k), ((fix.aim || 0) * Math.PI) / 180);
  const th = (textH || 70) * k;
  if (fix.unit) out.push(text(0, 190 * k, th, fix.unit));
  if (fix.chan) { out.push(circ(0, -230 * k, 80 * k)); out.push(text(0, -230 * k, th * 0.9, fix.chan)); }
  if (fix.color) out.push(text(0, -360 * k, th * 0.7, fix.color));
  return out;
}

/** The line a position is drawn as, in world coordinates; a truss gets cross ticks, a boom a ring and a cross, a floor line is dashed by its layer. */
export function positionEnts(pos, k = 1) {
  const pts = pos.pts, out = [];
  const th = 90 * k;
  if (pos.kind === 'boom') {
    const p = pts[0];
    out.push(circ(p.x, p.y, 70 * k), ln(p.x - 70 * k, p.y, p.x + 70 * k, p.y), ln(p.x, p.y - 70 * k, p.x, p.y + 70 * k));
    if (pos.name) out.push(text(p.x + 110 * k, p.y, th, pos.name, 'left'));
    return out;
  }
  out.push({ type: 'poly', pts: pts.map((p) => ({ x: p.x, y: p.y })), closed: false });
  if (pos.kind === 'truss') {
    // ticks across a truss, every 500 mm, 150 mm each side
    const step = 500 * k;
    let run = 0, next = 0;
    for (let i = 0; i + 1 < pts.length; i++) {
      const a = pts[i], b = pts[i + 1], dx = b.x - a.x, dy = b.y - a.y, l = Math.hypot(dx, dy);
      if (!(l > 0)) continue;
      const nx = -dy / l, ny = dx / l;
      for (; next <= run + l + 1e-9; next += step) {
        const u = (next - run) / l;
        if (u < 0) continue;
        const cx = a.x + dx * u, cy = a.y + dy * u;
        out.push(ln(cx - nx * 150 * k, cy - ny * 150 * k, cx + nx * 150 * k, cy + ny * 150 * k));
      }
      run += l;
    }
  }
  if (pos.name) {
    const a = pts[0], b = pts[1] || pts[0], l = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    out.push(text(a.x - ((b.x - a.x) / l) * 120 * k, a.y - ((b.y - a.y) / l) * 120 * k, th, pos.name, 'right'));
  }
  return out;
}

/** The legend: a frame with one row per fixture type in use. rows = [{ type, name, count, watts }]. Origin at the top left, growing down. */
export function legendEnts(rows, k = 1, { x = 0, y = 0, title = 'Legend', cols = ['Symbol', 'Type', 'Qty', 'Watts'], total = 'Total' } = {}) {
  const th = 90 * k, rowH = 420 * k, W = 3200 * k, head = 360 * k;
  const out = [];
  const H = head + rowH * (rows.length + 1) + 60 * k;
  out.push(poly([[x, y], [x + W, y], [x + W, y - H], [x, y - H]]));
  out.push(text(x + 80 * k, y - head / 2, th * 1.3, title, 'left'));
  out.push(ln(x, y - head, x + W, y - head));
  const colX = [x + 300 * k, x + 700 * k, x + 2300 * k, x + 2800 * k];
  const headX = [colX[0], colX[1] - 160 * k, colX[2] - 150 * k, colX[3] - 150 * k];
  cols.forEach((c, i) => out.push(text(headX[i], y - head - rowH / 2, th, c, i === 1 ? 'left' : 'center')));
  let yy = y - head - rowH;
  out.push(ln(x, yy, x + W, yy));
  let totalN = 0, totalW = 0;
  for (const r of rows) {
    const cy = yy - rowH / 2;
    const sym = SYMBOLS[r.type];
    if (sym) out.push(...moveEnts(sym(), colX[0], cy, 0.8 * k));
    out.push(text(colX[1] - 160 * k, cy, th, r.name, 'left'), text(colX[2] - 150 * k, cy, th, r.count), text(colX[3] - 150 * k, cy, th, r.watts));
    totalN += r.count; totalW += r.watts;
    yy -= rowH;
  }
  out.push(ln(x, yy, x + W, yy));
  out.push(text(colX[1] - 160 * k, yy - rowH / 2, th, total, 'left'), text(colX[2] - 150 * k, yy - rowH / 2, th, totalN), text(colX[3] - 150 * k, yy - rowH / 2, th, totalW));
  return out;
}

/** A list ({ columns, rows }) as a ruled table in the drawing: origin at the top left, growing down. `k` = drawing units per millimetre. */
export function tableEnts(list, k = 1, { x = 0, y = 0, textH = 90, title = '' } = {}) {
  const th = textH * k, rowH = th * 1.9, pad = th * 0.6, out = [];
  const widths = list.columns.map((c, j) => Math.max(String(c).length, ...list.rows.map((r) => String(r[j] ?? '').length)) * th * 0.62 + pad * 2);
  const W = widths.reduce((a, b) => a + b, 0), top = title ? rowH * 1.4 : 0;
  const H = top + rowH * (list.rows.length + 1);
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

/** Position length in millimetres (for the schedule's "length" and the pipe's capacity warning). */
export const positionLength = (pos) => lengthOf(pos.pts) / (pos.k || 1);
export { project, typeOf };
