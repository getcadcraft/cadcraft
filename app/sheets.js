/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheets.js — paper sizes, drawing scales and new layouts (sheets) for the CadCraft drafting app.
 * No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 * A layout's paper is { w, h, unit: 'mm' | 'in', x0, y0, key } in paper units, with the sheet's
 * lower-left corner at (x0, y0). A viewport's `s` is paper units per model unit; a scale "1:N"
 * means one real unit on paper stands for N in the model, so s depends on both sets of units
 * (sOf / nOf). A model drawn without units is taken to be in the paper's units.
 */

import { emptyBounds, growPt, validBounds, entityBounds } from './geom.js';

import { t } from './i18n.js';
/** Landscape sizes (w ≥ h). ISO in millimetres, ANSI and ARCH in inches. */
export const PAPERS = [
  { key: 'iso-a4', label: 'ISO A4 (297 × 210 mm)', w: 297, h: 210, unit: 'mm' },
  { key: 'iso-a3', label: 'ISO A3 (420 × 297 mm)', w: 420, h: 297, unit: 'mm' },
  { key: 'iso-a2', label: 'ISO A2 (594 × 420 mm)', w: 594, h: 420, unit: 'mm' },
  { key: 'iso-a1', label: 'ISO A1 (841 × 594 mm)', w: 841, h: 594, unit: 'mm' },
  { key: 'iso-a0', label: 'ISO A0 (1189 × 841 mm)', w: 1189, h: 841, unit: 'mm' },
  { key: 'letter', get label() { return t('sheets.paper.letter'); }, w: 11, h: 8.5, unit: 'in' },
  { key: 'legal', get label() { return t('sheets.paper.legal'); }, w: 14, h: 8.5, unit: 'in' },
  { key: 'ansi-b', get label() { return t('sheets.paper.ansi_b'); }, w: 17, h: 11, unit: 'in' },
  { key: 'ansi-c', label: 'ANSI C (22 × 17 in)', w: 22, h: 17, unit: 'in' },
  { key: 'ansi-d', label: 'ANSI D (34 × 22 in)', w: 34, h: 22, unit: 'in' },
  { key: 'arch-c', label: 'ARCH C (24 × 18 in)', w: 24, h: 18, unit: 'in' },
  { key: 'arch-d', label: 'ARCH D (36 × 24 in)', w: 36, h: 24, unit: 'in' },
  { key: 'arch-e', label: 'ARCH E (48 × 36 in)', w: 48, h: 36, unit: 'in' },
];
export const paperByKey = (k) => PAPERS.find((p) => p.key === k) || null;
/** The standard paper a sheet of w × h (in its unit) is, either way round, within 0.5 %; else null. */
export function matchPaper(w, h, unit) {
  const k = UNIT_MM[unit] || 1;
  const [a, b] = [Math.max(w, h) * k, Math.min(w, h) * k];
  return PAPERS.find((p) => { const pk = UNIT_MM[p.unit]; return Math.abs(p.w * pk - a) <= a * 0.005 && Math.abs(p.h * pk - b) <= b * 0.005; }) || null;
}

/** Millimetres per unit. */
export const UNIT_MM = {
  millimeters: 1, centimeters: 10, meters: 1000, kilometers: 1e6, inches: 25.4, feet: 304.8, yards: 914.4,
  miles: 1609344, microinches: 25.4e-6, mils: 0.0254, mm: 1, in: 25.4,
};
export const IMPERIAL = new Set(['inches', 'feet', 'yards', 'miles', 'microinches', 'mils']);
export const isImperial = (doc) => IMPERIAL.has(doc.meta.units);

/** Model units in millimetres (unitless = the paper's unit). */
export const modelMm = (doc, paperUnit) => UNIT_MM[doc.meta.units] || UNIT_MM[paperUnit] || 1;
/** Paper units per model unit for a scale 1:n. */
export const sOf = (doc, paperUnit, n) => modelMm(doc, paperUnit) / UNIT_MM[paperUnit] / n;
/** The n of 1:n for a viewport scale s. */
export const nOf = (doc, paperUnit, s) => modelMm(doc, paperUnit) / UNIT_MM[paperUnit] / s;

const METRIC = [1 / 10, 1 / 5, 1 / 2, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 1250, 2000, 2500, 5000, 10000];
const ARCH = [
  ['1/16" = 1\'-0"', 192], ['3/32" = 1\'-0"', 128], ['1/8" = 1\'-0"', 96], ['3/16" = 1\'-0"', 64], ['1/4" = 1\'-0"', 48],
  ['3/8" = 1\'-0"', 32], ['1/2" = 1\'-0"', 24], ['3/4" = 1\'-0"', 16], ['1" = 1\'-0"', 12], ['1-1/2" = 1\'-0"', 8], ['3" = 1\'-0"', 4],
  ['1" = 10\'', 120], ['1" = 20\'', 240], ['1" = 30\'', 360], ['1" = 40\'', 480], ['1" = 50\'', 600], ['1" = 100\'', 1200],
];
const ratioLabel = (n) => (n >= 1 ? '1:' + fmtN(n) : fmtN(1 / n) + ':1');
const fmtN = (n) => Number(n.toPrecision(6)).toString();

/** Standard scales for this drawing: architectural and engineering ones for imperial drawings. */
export function scaleList(doc) {
  const metric = METRIC.map((n) => ({ n, label: ratioLabel(n) }));
  const std = isImperial(doc) ? [...ARCH.map(([label, n]) => ({ n, label })).sort((a, b) => a.n - b.n), ...metric] : metric;
  // the drawing's own scales (its file's list, SCALELISTEDIT: scales.js) that the standard list lacks, after it
  const own = (Array.isArray(doc.meta.scales) ? doc.meta.scales : []).map((x) => ({ n: x.drawing / x.paper, label: x.name, custom: true }))
    .filter((x) => x.n > 0 && Number.isFinite(x.n)).sort((a, b) => a.n - b.n);
  const extra = [];
  for (const x of own) if (![...std, ...extra].some((y) => Math.abs(y.n - x.n) < 1e-6 * x.n)) extra.push(x);
  return extra.length ? [...std, ...extra] : std;
}

/** How a viewport scale reads: a standard name when it is one, else 1:n. */
export function scaleLabel(doc, paperUnit, s) {
  const n = nOf(doc, paperUnit, s);
  const std = scaleList(doc).find((x) => Math.abs(x.n - n) < 1e-6 * n);
  return std ? std.label : ratioLabel(n);
}

/** The largest standard scale whose s is at most sFit (so the drawing still fits). */
export function bestScale(doc, paperUnit, sFit) {
  let best = null;
  for (const x of scaleList(doc)) {
    const s = sOf(doc, paperUnit, x.n);
    if (s <= sFit * (1 + 1e-9) && (!best || s > best.s)) best = { ...x, s };
  }
  return best || { n: nOf(doc, paperUnit, sFit), label: ratioLabel(nOf(doc, paperUnit, sFit)), s: sFit };
}

/** Bounds of the model's visible entities. */
export function modelExtents(doc) {
  const b = emptyBounds();
  for (const e of doc.model.values()) {
    if (!doc.visible(e)) continue;
    const eb = entityBounds(e, doc.blocks);
    if (validBounds(eb)) { growPt(b, eb.minX, eb.minY); growPt(b, eb.maxX, eb.maxY); }
  }
  return b;
}

/** Aim a viewport of w × h paper units at a model window (bounds): centre and a standard scale. */
export function aimViewport(doc, paperUnit, w, h, win, { exact = false } = {}) {
  if (!validBounds(win)) return { cx: 0, cy: 0, s: sOf(doc, paperUnit, 1) };
  const bw = Math.max(win.maxX - win.minX, 1e-9), bh = Math.max(win.maxY - win.minY, 1e-9);
  const sFit = Math.min(w / bw, h / bh);
  return { cx: (win.minX + win.maxX) / 2, cy: (win.minY + win.maxY) / 2, s: exact ? sFit : bestScale(doc, paperUnit, sFit).s };
}

/** The paper a new layout gets: A3 for metric or unitless drawings, Tabloid for imperial ones. */
export function defaultPaper(doc) {
  return paperByKey(isImperial(doc) ? 'ansi-b' : 'iso-a3');
}

/** Paper for a key and orientation, as a layout stores it. */
export function makePaper(key, portrait = false) {
  const p = paperByKey(key) || PAPERS[1];
  return { key: p.key, unit: p.unit, w: portrait ? p.h : p.w, h: portrait ? p.w : p.h, x0: 0, y0: 0 };
}

/** The space a sheet leaves for viewports (inside the border, above the title block), in paper units: { x0, y0, x1, y1 }. Matches sheetContents. */
export function viewZone(paper) {
  const k = 1 / UNIT_MM[paper.unit], W = paper.w / k, H = paper.h / k, m = 10, th = 32;
  return { x0: paper.x0 + (m + 5) * k, y0: paper.y0 + (m + th + 5) * k, x1: paper.x0 + (W - m - 5) * k, y1: paper.y0 + (H - m - 5) * k };
}

/**
 * A new sheet's contents: a border, a title block in the lower right (plain lines and text on
 * layer "Title block", every field editable) and one viewport showing the whole model at a
 * standard scale. Returns { paper, entities, title } — the caller adds them in one change.
 */
export function sheetContents(doc, paper, { title = doc.meta.name || 'Drawing1', sheetNo = 1, date = new Date() } = {}) {
  const k = 1 / UNIT_MM[paper.unit];                 // designed in millimetres
  const W = paper.w / k, H = paper.h / k;            // the sheet in mm
  const m = 10, out = [];
  const L = t('sheets.title_block');
  const at = (x, y) => ({ x: paper.x0 + x * k, y: paper.y0 + y * k });
  const line = (x1, y1, x2, y2) => { const a = at(x1, y1), b = at(x2, y2); out.push({ type: 'line', layer: L, color: null, x1: a.x, y1: a.y, x2: b.x, y2: b.y }); };
  const rect = (x1, y1, x2, y2) => { const pts = [at(x1, y1), at(x2, y1), at(x2, y2), at(x1, y2)].map((p) => ({ ...p, b: 0 })); out.push({ type: 'poly', layer: L, color: null, closed: true, pts }); };
  const text = (x, y, h, s) => { const p = at(x, y); out.push({ type: 'text', layer: L, color: null, x: p.x, y: p.y, h: h * k, rot: 0, s, ha: 'left', va: 'baseline', wf: 1 }); };

  rect(m, m, W - m, H - m);
  const tw = Math.min(180, W - 2 * m), th = 32;
  const x0 = W - m - tw, y0 = m;
  rect(x0, y0, W - m, y0 + th);
  line(x0, y0 + 14, W - m, y0 + 14);
  const cut = tw * 2 / 3;
  line(x0 + cut, y0 + 14, x0 + cut, y0 + th);
  const cells = [0, tw / 3, tw / 2, tw * 3 / 4, tw];
  for (const c of cells.slice(1, -1)) line(x0 + c, y0, x0 + c, y0 + 14);

  // viewport: the space above the title block, inside the border
  const vx0 = m + 5, vx1 = W - m - 5, vy0 = m + th + 5, vy1 = H - m - 5;
  const vw = (vx1 - vx0) * k, vh = (vy1 - vy0) * k;
  const aim = aimViewport(doc, paper.unit, vw, vh, modelExtents(doc));
  const vc = at((vx0 + vx1) / 2, (vy0 + vy1) / 2);
  out.push({ type: 'viewport', layer: 'Viewports', color: null, x: vc.x, y: vc.y, w: vw, h: vh, cx: aim.cx, cy: aim.cy, s: aim.s });

  const iso = (d) => d.toISOString().slice(0, 10);
  text(x0 + 2, y0 + th - 4, 1.8, 'TITLE');
  text(x0 + 2, y0 + 18, 5, title);
  text(x0 + cut + 2, y0 + th - 4, 1.8, 'DRAWN BY');
  const fields = [['PROJECT', doc.meta.name || ''], ['SCALE', scaleLabel(doc, paper.unit, aim.s)], ['DATE', iso(date)], ['SHEET', String(sheetNo)]];
  fields.forEach(([label, value], i) => {
    text(x0 + cells[i] + 2, y0 + 10, 1.8, label);
    text(x0 + cells[i] + 2, y0 + 3.5, 2.5, value);
  });
  // an empty value would be invisible and unpickable: drop it (the cell stays for writing in)
  return { paper, entities: out.filter((e) => e.type !== 'text' || e.s !== ''), scale: aim, layers: [{ name: L, color: 7 }, { name: 'Viewports', color: 8, plot: false }] };
}
