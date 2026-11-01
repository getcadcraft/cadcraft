/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — kinds and keys are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * autosheet.js — sheets that lay themselves out (0.8 round 2, EG.56, CadCraft side). Rules and geometry only (rule 35).
 *
 *   partsOf(doc, { source })            → [{ name, win }]       the pieces to put on sheets: named views, clusters of the model, or the whole
 *   planSheets(doc, parts, opts)        → { sheets[], fits, problems[] }   paper, standard scales and a place for every viewport
 *   applySheets(doc, plan, label)       → [layout names]        the layouts, title blocks and viewports, one undo step
 *
 * Packing is shelf packing: the parts, tallest first, in rows across the sheet's free zone with a gap between them. With a common
 * scale every part shares the largest standard scale at which all fit; with "each", every part takes the largest scale it can and the
 * biggest one is made smaller until everything fits. Paper "auto" starts at the smallest standard size and goes up.
 */
import { emptyBounds, growPt, validBounds, entityBounds } from './geom.js';
import { t } from './i18n.js';
import { buildLegend, MAX_LEGEND } from './keynotes.js';
import { PAPERS, UNIT_MM, sOf, nOf, scaleList, scaleLabel, makePaper, defaultPaper, sheetContents, viewZone, isImperial } from './sheets.js';

export const MAX_PARTS = 60;
const GAP_MM = 8, PAD_MM = 4, CAP_MM = 7;     // between viewports; inside a viewport round its part; the caption band under it
const family = (doc) => PAPERS.filter((p) => (isImperial(doc) ? p.unit === 'in' : p.unit === 'mm')).sort((a, b) => a.w * a.h - b.w * b.h);

const boxOf = (doc, e) => { const b = entityBounds(e, doc.blocks); return validBounds(b) ? b : null; };

/** Clusters of the model's visible objects whose boxes are within `gap` of each other (sweep over minX; no spatial index needed at this size). */
export function clusters(doc, gap, cap = 100000) {
  const items = [];
  for (const e of doc.model.values()) { if (!doc.visible(e)) continue; const b = boxOf(doc, e); if (b) items.push(b); if (items.length >= cap) break; }
  items.sort((a, b) => a.minX - b.minX);
  const parent = items.map((_, i) => i);
  const find = (i) => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  let active = [];
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    active = active.filter((j) => items[j].maxX + gap >= a.minX);
    for (const j of active) { const b = items[j]; if (a.minY - gap <= b.maxY && a.maxY + gap >= b.minY) parent[find(i)] = find(j); }
    active.push(i);
  }
  const groups = new Map();
  items.forEach((b, i) => { const r = find(i); const g = groups.get(r) || emptyBounds(); growPt(g, b.minX, b.minY); growPt(g, b.maxX, b.maxY); groups.set(r, g); });
  return [...groups.values()];
}

/** The pieces: source views (named views not on a sheet), clusters (separate pieces of the model) or whole (everything, one piece). */
export function partsOf(doc, { source = 'auto', gapFrac = 0.04 } = {}) {
  const whole = emptyBounds();
  for (const e of doc.model.values()) { if (!doc.visible(e)) continue; const b = boxOf(doc, e); if (b) { growPt(whole, b.minX, b.minY); growPt(whole, b.maxX, b.maxY); } }
  const views = (doc.views || []).filter((v) => !v.layout).map((v) => ({ name: v.name, win: { minX: v.cx - v.w / 2, minY: v.cy - v.h / 2, maxX: v.cx + v.w / 2, maxY: v.cy + v.h / 2 } }));
  let src = source;
  if (src === 'auto') src = views.length ? 'views' : 'clusters';
  if (src === 'views' && views.length) return views.slice(0, MAX_PARTS);
  if (!validBounds(whole)) return [];
  if (src === 'whole') return [{ name: doc.meta.name || t('autosheet.whole'), win: whole }];
  const gap = Math.max(whole.maxX - whole.minX, whole.maxY - whole.minY, 1e-9) * gapFrac;
  const cs = clusters(doc, gap).sort((a, b) => (b.maxY + b.minY) / 2 - (a.maxY + a.minY) / 2 || a.minX - b.minX).slice(0, MAX_PARTS);
  if (cs.length === 1) return [{ name: doc.meta.name || t('autosheet.whole'), win: cs[0] }];
  return cs.map((win, i) => ({ name: t('autosheet.part', { n: i + 1 }), win }));
}

/** Shelf-pack boxes {w,h} into a zone; returns their lower-left corners or null. */
function pack(boxes, zw, zh, gap) {
  const order = boxes.map((b, i) => i).sort((a, b) => boxes[b].h - boxes[a].h || boxes[b].w - boxes[a].w);
  const at = new Array(boxes.length);
  let x = 0, y = zh, rowH = 0;                       // fill from the top of the zone down
  for (const i of order) {
    const b = boxes[i];
    if (b.w > zw + 1e-9 || b.h > zh + 1e-9) return null;
    if (x > 0 && x + b.w > zw + 1e-9) { x = 0; y -= rowH + gap; rowH = 0; }
    if (y - b.h < -1e-9) return null;
    at[i] = { x, y: y - b.h }; x += b.w + gap; rowH = Math.max(rowH, b.h);
  }
  return at;
}

const sizeAt = (doc, unit, part, n) => {
  const s = sOf(doc, unit, n), k = 1 / UNIT_MM[unit];
  return { s, w: (part.win.maxX - part.win.minX) * s + 2 * PAD_MM * k, h: (part.win.maxY - part.win.minY) * s + 2 * PAD_MM * k + CAP_MM * k };
};

/** One sheet's arrangement on a given paper: { items[{part, n, s, x, y, w, h}], zone } or null. */
function arrange(doc, paper, parts, { scale = null, each = false } = {}) {
  const unit = paper.unit, k = 1 / UNIT_MM[unit], zone = viewZone(paper), zw = zone.x1 - zone.x0, zh = zone.y1 - zone.y0, gap = GAP_MM * k;
  const stops = scaleList(doc).map((x) => x.n).sort((a, b) => a - b);          // 1:1 … 1:10000, smallest n = largest scale first
  const fitIdx = (part) => { for (let i = 0; i < stops.length; i++) { const z = sizeAt(doc, unit, part, stops[i]); if (z.w <= zw && z.h <= zh) return i; } return -1; };
  let idx;
  if (scale) { const n = scale; idx = parts.map(() => ({ n })); }
  else if (!each) {
    let common = -1;
    for (let i = 0; i < stops.length && common < 0; i++) if (pack(parts.map((p) => sizeAt(doc, unit, p, stops[i])), zw, zh, gap)) common = i;
    if (common < 0) return null;
    idx = parts.map(() => ({ n: stops[common] }));
  } else {
    const at = parts.map(fitIdx);
    if (at.some((i) => i < 0)) return null;
    for (let guard = 0; guard < 2000; guard++) {
      const boxes = parts.map((p, i) => sizeAt(doc, unit, p, stops[at[i]]));
      if (pack(boxes, zw, zh, gap)) break;
      let worst = -1, wa = -1;                       // make the part that takes the most paper one step smaller
      boxes.forEach((b, i) => { if (at[i] < stops.length - 1 && b.w * b.h > wa) { wa = b.w * b.h; worst = i; } });
      if (worst < 0) return null;
      at[worst]++;
    }
    idx = at.map((i) => ({ n: stops[i] }));
  }
  const boxes = parts.map((p, i) => sizeAt(doc, unit, p, idx[i].n));
  const place = pack(boxes, zw, zh, gap);
  if (!place) return null;
  return { zone, items: parts.map((part, i) => ({ part, n: idx[i].n, s: boxes[i].s, w: boxes[i].w, h: boxes[i].h, x: zone.x0 + place[i].x, y: zone.y0 + place[i].y })) };
}

/**
 * Plan the sheets. opts: paper ('auto' or a PAPERS key), portrait, scale (n of 1:n, or null), each (own scale per part),
 * perSheet ('fit' packs as many as fit, 'one' makes a sheet for each part).
 */
export function planSheets(doc, parts, opts = {}) {
  const problems = [];
  if (!parts.length) return { sheets: [], fits: false, problems: ['nothing'] };
  const { paper: pk = 'auto', portrait = false, scale = null, each = false, perSheet = 'fit' } = opts;
  const papers = pk === 'auto' ? family(doc) : [PAPERS.find((p) => p.key === pk) || defaultPaper(doc)];
  // with no scale given on automatic paper, the scale is the one the largest part gets on the default paper
  let fixed = scale;
  if (!fixed && pk === 'auto' && !each) {
    const dp = makePaper(defaultPaper(doc).key, portrait), zone = viewZone(dp), unit = dp.unit;
    const big = parts.reduce((a, b) => ((b.win.maxX - b.win.minX) * (b.win.maxY - b.win.minY) > (a.win.maxX - a.win.minX) * (a.win.maxY - a.win.minY) ? b : a));
    for (const x of scaleList(doc).slice().sort((a, b) => a.n - b.n)) { const z = sizeAt(doc, unit, big, x.n); if (z.w <= zone.x1 - zone.x0 && z.h <= zone.y1 - zone.y0) { fixed = x.n; break; } }
  }
  const tryParts = (list) => {
    for (const p of papers) {
      const paper = makePaper(p.key, portrait);
      const a = arrange(doc, paper, list, { scale: fixed, each });
      if (a) return { paper, ...a };
    }
    return null;
  };
  const sheets = [];
  const all = perSheet === 'one' ? null : tryParts(parts);
  if (all) sheets.push(all);
  else {
    if (perSheet !== 'one') problems.push('split');
    const order = parts.slice();
    for (const part of order) {
      const one = tryParts([part]);
      if (one) sheets.push(one); else { problems.push('too_big:' + part.name); }
    }
  }
  return { sheets, fits: sheets.length > 0 && !problems.some((p) => p.startsWith('too_big')), problems };
}

/** The layers drawn in the parts of one sheet, as a numbered keynote legend (EG.56). `notes` = a keynote file's Map (keynotes.js parseKeynoteFile): a layer whose name is a key in it takes that text. */
export function legendFor(doc, sheet, notes = null) {
  const wins = sheet.items.map((it) => it.part.win), count = new Map();
  for (const e of doc.model.values()) {
    if (!doc.visible(e)) continue;
    const b = boxOf(doc, e);
    if (b && wins.some((w) => b.maxX >= w.minX && b.minX <= w.maxX && b.maxY >= w.minY && b.minY <= w.maxY)) count.set(e.layer, (count.get(e.layer) || 0) + 1);
  }
  const title = t('sheets.title_block');
  return buildLegend([...count].map(([key, n]) => ({ kind: 'layer', key, count: n })), { notes, skip: (_k, key) => key === '0' || key === 'Viewports' || key === title || /^defpoints$/i.test(key) });
}

/** Make the layouts (one undo step). Returns their names. `legend: true` adds each sheet's numbered keynote legend (plain editable text in the strip under the views). */
export function applySheets(doc, plan, label = 'AUTOSHEET', { title = doc.meta.name || 'Drawing1', legend = false, notes = null } = {}) {
  const names = [];
  doc.change(label, () => {
    let n = doc.layouts.length;
    const made = [];
    plan.sheets.forEach((sh) => {
      n++; let name = 'Layout' + n; while (doc.layouts.some((l) => l.name === name) || made.includes(name)) name = 'Layout' + (++n);
      made.push(name);
      const base = sheetContents(doc, sh.paper, { title, sheetNo: n });
      for (const l of base.layers) if (!doc.layers.has(l.name)) doc.addLayer(l);
      const layout = { name, paper: sh.paper, entities: new Map() };
      doc.setLayouts([...doc.layouts, layout]);
      for (const e of base.entities) if (e.type !== 'viewport') doc.add(e, layout.entities);
      const k = 1 / UNIT_MM[sh.paper.unit];
      for (const it of sh.items) {
        const w = it.w, h = it.h - CAP_MM * k, cxp = it.x + w / 2, cyp = it.y + CAP_MM * k + h / 2;
        const frz = [...doc.layers.values()].filter((l) => l.newVpFrozen).map((l) => l.name);
        const win = it.part.win;
        doc.add({ type: 'viewport', layer: 'Viewports', color: null, x: cxp, y: cyp, w, h, cx: (win.minX + win.maxX) / 2, cy: (win.minY + win.maxY) / 2, s: it.s, ...(frz.length ? { frz } : {}) }, layout.entities);
        doc.add({ type: 'text', layer: t('sheets.title_block'), color: null, x: it.x + 1 * k, y: it.y + 1.8 * k, h: 3.5 * k, rot: 0, s: it.part.name + '   ' + scaleLabel(doc, sh.paper.unit, it.s), ha: 'left', va: 'baseline', wf: 1 }, layout.entities);
      }
      if (legend) {   // columns of 7 lines in the free strip under the views, left of the title block; what does not fit stays out and is counted by the caller
        const lg = legendFor(doc, sh, notes), colW = 62 * k, lineH = 4.2 * k, top = sh.paper.y0 + 28 * k, maxCols = Math.max(1, Math.floor((sh.paper.w - 140 * k - 12 * k) / colW));
        lg.slice(0, 7 * maxCols).forEach((e, i) => {
          const cx = sh.paper.x0 + 12 * k + Math.floor(i / 7) * colW, cy = top - (i % 7) * lineH;
          doc.add({ type: 'text', layer: t('sheets.title_block'), color: null, x: cx, y: cy, h: 2.8 * k, rot: 0, s: e.n + '  ' + e.text, ha: 'left', va: 'baseline', wf: 1 }, layout.entities);
        });
        sh.legendCount = lg.length; sh.legendShown = Math.min(lg.length, 7 * maxCols);
      }
      names.push(name);
    });
  });
  return names;
}
