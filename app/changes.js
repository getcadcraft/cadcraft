/* SPDX-License-Identifier: Apache-2.0 */
/**
 * changes.js — what changed between two versions of a drawing, in plain words (0.8 EG.65, CadCraft half; session cad_PART_3). DOM-free.
 * Input is drawing-compare.js's result (added / removed / changed objects, space by space); output groups them by where on the sheet they are and
 * says each group in a sentence. No model, no network: a person reads the list, or their own assistant narrates it (tool drawing_changes_describe is
 * for the History panel's compare; it holds nothing the file does not). Text found in the drawing is quoted as content.
 *
 *   describeChanges(result, { blocksA, blocksB, mPerUnit, imperial, gapM, maxAreas }) → { lines: [text], areas: [area], counts }
 *   area = { space, box: { x0, y0, x1, y1 }, wM, hM, added: {type: n}, removed: {type: n}, changed: { n, what: [..] }, texts: [{ kind, from?, to?, s? }], layers: [name] }
 *   changesCsv(out) → text   (one row per area)
 */
import { entityBounds, validBounds, textCorners, emptyBounds } from './geom.js';
import { t } from './i18n.js';

const boxOf = (e, blocks) => {
  let b;
  try {
    if (e.type === 'text') { b = emptyBounds(); for (const p of textCorners(e)) { b.minX = Math.min(b.minX, p.x); b.minY = Math.min(b.minY, p.y); b.maxX = Math.max(b.maxX, p.x); b.maxY = Math.max(b.maxY, p.y); } }
    else b = entityBounds(e, blocks);
  } catch { b = emptyBounds(); }
  if (!validBounds(b)) {
    const x = Number.isFinite(e.x) ? e.x : Number.isFinite(e.cx) ? e.cx : Number.isFinite(e.x1) ? e.x1 : 0, y = Number.isFinite(e.y) ? e.y : Number.isFinite(e.cy) ? e.cy : Number.isFinite(e.y1) ? e.y1 : 0;
    return { minX: x, minY: y, maxX: x, maxY: y };
  }
  return b;
};
const word = (type) => { const k = 'chg.type.' + type; const w = t(k); return w && w !== k ? w : String(type); };
const lenText = (m, imperial) => (imperial ? (m / 0.3048 >= 10 ? Math.round(m / 0.3048) : Math.round(m / 0.3048 * 10) / 10) + ' ft' : (m >= 10 ? Math.round(m) : Math.round(m * 100) / 100) + ' m');
const clip = (s) => String(s ?? '').replace(/\s+/g, ' ').slice(0, 80);

export function describeChanges(result, { blocksA = new Map(), blocksB = new Map(), mPerUnit = 0.001, imperial = false, gapM = 2, maxAreas = 40 } = {}) {
  const gap = Math.max(1e-9, gapM / (mPerUnit || 0.001));
  const items = [];
  for (const sp of result.spaces) {
    for (const e of sp.added) items.push({ sp: sp.name, kind: 'added', e, box: boxOf(e, blocksB) });
    for (const e of sp.removed) items.push({ sp: sp.name, kind: 'removed', e, box: boxOf(e, blocksA) });
    for (const c of sp.changed) items.push({ sp: sp.name, kind: 'changed', e: c.b, a: c.a, what: c.what, box: boxOf(c.b, blocksB) });
  }
  // single-linkage clusters of boxes within `gap` of each other, per space; a grid keeps it quick
  const parent = items.map((_, i) => i), find = (i) => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  const cells = new Map();
  const cell = (v) => Math.floor(v / gap);
  const CAP = 40;   // a huge object is filed under at most CAP × CAP cells (its corners and edges are walked, not every cell)
  const range = (lo, hi) => { const a = cell(lo), z = cell(hi); return z - a >= CAP ? [a, a + CAP - 1] : [a, z]; };
  items.forEach((it, i) => {
    const [x0, x1] = range(it.box.minX - gap, it.box.maxX + gap), [y0, y1] = range(it.box.minY - gap, it.box.maxY + gap);
    for (let cx = x0; cx <= x1; cx++) for (let cy = y0; cy <= y1; cy++) {
      for (const j of cells.get(it.sp + '|' + cx + '|' + cy) || []) {
        const o = items[j].box;
        if (it.box.minX - gap <= o.maxX && o.minX - gap <= it.box.maxX && it.box.minY - gap <= o.maxY && o.minY - gap <= it.box.maxY) parent[find(i)] = find(j);
      }
    }
    // file this object under the cells its own box covers
    const [a0, a1] = range(it.box.minX, it.box.maxX), [b0, b1] = range(it.box.minY, it.box.maxY);
    for (let cx = a0; cx <= a1; cx++) for (let cy = b0; cy <= b1; cy++) { const k = it.sp + '|' + cx + '|' + cy; if (!cells.has(k)) cells.set(k, []); cells.get(k).push(i); }
  });
  const groups = new Map();
  items.forEach((it, i) => { const r = find(i); if (!groups.has(r)) groups.set(r, []); groups.get(r).push(it); });
  const areas = [];
  for (const g of groups.values()) {
    const b = emptyBounds();
    const a = { space: g[0].sp, added: {}, removed: {}, changed: { n: 0, what: [] }, texts: [], layers: [] };
    const layers = new Set();
    for (const it of g) {
      b.minX = Math.min(b.minX, it.box.minX); b.minY = Math.min(b.minY, it.box.minY); b.maxX = Math.max(b.maxX, it.box.maxX); b.maxY = Math.max(b.maxY, it.box.maxY);
      if (it.e.layer) layers.add(it.e.layer);
      if (it.kind === 'changed') {
        a.changed.n++;
        for (const w of it.what || []) if (!a.changed.what.includes(w)) a.changed.what.push(w);
        if (it.e.type === 'text' && it.a && it.a.s !== it.e.s) a.texts.push({ kind: 'changed', from: clip(it.a.s), to: clip(it.e.s) });
      } else {
        const m = a[it.kind]; m[it.e.type] = (m[it.e.type] || 0) + 1;
        if (it.e.type === 'text' && it.e.s) a.texts.push({ kind: it.kind, s: clip(it.e.s) });
      }
    }
    a.box = { x0: b.minX, y0: b.minY, x1: b.maxX, y1: b.maxY };
    a.wM = (b.maxX - b.minX) * mPerUnit; a.hM = (b.maxY - b.minY) * mPerUnit;
    a.layers = [...layers].sort();
    a.size = g.length;
    areas.push(a);
  }
  areas.sort((x, y) => (x.space === y.space ? y.size - x.size : x.space < y.space ? -1 : 1));
  const tot = result.totals || { added: 0, removed: 0, changed: 0 };
  const lines = [];
  if (!tot.added && !tot.removed && !tot.changed && !(result.layersAdded?.length || result.layersRemoved?.length)) { lines.push(t('chg.none')); return { lines, areas, counts: tot }; }
  lines.push(t('chg.head', { added: tot.added, removed: tot.removed, changed: tot.changed, areas: areas.length }));
  for (const a of areas.slice(0, maxAreas)) {
    const parts = [];
    const list = (m) => Object.entries(m).sort((p, q) => q[1] - p[1]).map(([ty, n]) => n + ' ' + word(ty)).join(', ');
    if (Object.keys(a.added).length) parts.push(t('chg.added', { list: list(a.added) }));
    if (Object.keys(a.removed).length) parts.push(t('chg.removed', { list: list(a.removed) }));
    if (a.changed.n) parts.push(t('chg.changed', { n: a.changed.n, what: a.changed.what.map((w) => { const k = 'hist.what.' + w; const x = t(k); return x && x !== k ? x : w; }).join(', ') }));
    const where = t('chg.where', { x: Math.round((a.box.x0 + a.box.x1) / 2), y: Math.round((a.box.y0 + a.box.y1) / 2), w: lenText(a.wM, imperial), h: lenText(a.hM, imperial) });
    lines.push((a.space ? t('chg.sheet', { name: a.space }) + ' ' : '') + where + ': ' + parts.join('; ') + (a.layers.length ? ' ' + t('chg.layers', { list: a.layers.slice(0, 5).join(', ') }) : '') + '.');
    for (const x of a.texts.slice(0, 8)) lines.push('  ' + (x.kind === 'changed' ? t('chg.text.changed', { from: x.from, to: x.to }) : t('chg.text.' + x.kind, { s: x.s })));
  }
  if (areas.length > maxAreas) lines.push(t('chg.more', { n: areas.length - maxAreas }));
  if (result.layersAdded?.length) lines.push(t('chg.layers.added', { list: result.layersAdded.slice(0, 20).join(', ') }));
  if (result.layersRemoved?.length) lines.push(t('chg.layers.removed', { list: result.layersRemoved.slice(0, 20).join(', ') }));
  return { lines, areas, counts: tot };
}

const q = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
export function changesCsv(out) {
  const rows = ['space,x,y,width_m,height_m,added,removed,changed,layers,text'];
  for (const a of out.areas) {
    const sum = (m) => Object.values(m).reduce((p, n) => p + n, 0);
    rows.push([a.space, Math.round((a.box.x0 + a.box.x1) / 2), Math.round((a.box.y0 + a.box.y1) / 2), a.wM.toFixed(2), a.hM.toFixed(2), sum(a.added), sum(a.removed), a.changed.n, a.layers.join(' '), a.texts.map((x) => (x.kind === 'changed' ? x.from + ' > ' + x.to : x.kind + ' ' + x.s)).join(' | ')].map(q).join(','));
  }
  return rows.join('\n') + '\n';
}
