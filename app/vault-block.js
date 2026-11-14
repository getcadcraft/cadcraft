/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vault-block.js — the revision block (0.8 SU.1058, session `vault-08`): a table of a drawing's released revisions
 * (revision, date, by, approved by, note) drawn on a layout as a block, like sheetset.js's sheet list. DOM-free; the words come
 * in as `labels` (vault-ui.js passes t()), so Node can drive it. The rows are lib/vault's revisionTable(file).
 *
 *   REV_BLOCK                                   the block's name (CC_REVBLOCK)
 *   revBlockEntities(rows, { labels, inch })    → the table's objects, top-left corner at 0,0, rows going down (oldest first)
 *   placeRevBlock(doc, layout, rows, { labels, at })   → 'placed' | 'updated' | 'same' | false (no such layout)
 *   refreshRevBlock(doc, rows, { labels })      → true when a drawing that holds the block had it redefined (after a release)
 */
export const REV_BLOCK = 'CC_REVBLOCK';
const MAX_ROWS = 24, NOTE_MAX = 44;
const clip = (s, n) => { const x = String(s ?? ''); return x.length > n ? x.slice(0, n - 1) + '…' : x; };

export function revBlockEntities(rows, { labels, inch = false } = {}) {
  const k = inch ? 1 / 25.4 : 1;
  const h = 2.8 * k, rowH = h * 2, pad = h * 0.6;
  const cols = [14, 22, 30, 30, 64].map((w) => w * k), W = cols.reduce((a, b) => a + b, 0);
  const head = [labels.rev, labels.date, labels.by, labels.approver, labels.note];
  const body = (rows || []).slice(-MAX_ROWS).map((r) => [r.rev, r.date, clip(r.by, 18), clip(r.approver, 18), clip(r.note, NOTE_MAX)]);
  const all = [head, ...body];
  const out = [];
  const L = (x1, y1, x2, y2) => out.push({ type: 'line', layer: '0', color: 0, x1, y1, x2, y2 });
  const T = (x, y, s, hh = h) => out.push({ type: 'text', layer: '0', color: 0, x, y, h: hh, rot: 0, s, ha: 'left', va: 'baseline' });
  all.forEach((row, i) => {
    const y = -i * rowH;
    L(0, y, W, y);
    let x = 0;
    row.forEach((cell, c) => { if (cell) T(x + pad, y - rowH + pad, String(cell), i === 0 ? h * 1.05 : h); x += cols[c]; });
  });
  const bottom = -all.length * rowH;
  L(0, bottom, W, bottom); L(0, 0, 0, bottom); L(W, 0, W, bottom);
  let x = 0;
  for (let c = 0; c < cols.length - 1; c++) { x += cols[c]; L(x, 0, x, bottom); }
  return out;
}

const sig = (list) => list.filter((e) => e.type === 'text').map((e) => e.s).join('\n') + '|' + list.filter((e) => e.type === 'line').length;
const holds = (lay) => [...lay.entities.values()].some((e) => e.type === 'insert' && e.block === REV_BLOCK);

/** Put the block on a layout (top-right of its paper, inside a margin), or redefine it when it is there. One undo step. */
export function placeRevBlock(doc, layoutName, rows, { labels, at = null, undo = 'Revision block' } = {}) {
  const lay = doc.layouts.find((l) => l.name === layoutName);
  if (!lay) return false;
  const inch = lay.paper.unit === 'in', m = inch ? 0.75 : 20;
  const ents = revBlockEntities(rows, { labels, inch });
  const old = doc.blocks.get(REV_BLOCK);
  const has = holds(lay);
  if (has && old && sig(old.entities) === sig(ents)) return 'same';
  doc.change(undo, () => {
    doc.defineBlock({ name: REV_BLOCK, base: { x: 0, y: 0 }, entities: ents });
    if (!has) {
      const W = Math.max(...ents.filter((e) => e.type === 'line').map((e) => Math.max(e.x1, e.x2)));
      const p = at || { x: lay.paper.x0 + lay.paper.w - m - W, y: lay.paper.y0 + lay.paper.h - m * 2 };
      doc.add({ type: 'insert', layer: '0', color: null, block: REV_BLOCK, x: p.x, y: p.y, sx: 1, sy: 1, rot: 0 }, lay.entities);
    }
  });
  return has ? 'updated' : 'placed';
}

/** A drawing that holds the block: redefine it from the rows. → true when it changed. */
export function refreshRevBlock(doc, rows, { labels, undo = 'Revision block' } = {}) {
  const b = doc.blocks.get(REV_BLOCK);
  if (!b) return false;
  const lay = doc.layouts.find(holds);
  const ents = revBlockEntities(rows, { labels, inch: lay?.paper.unit === 'in' });
  if (sig(ents) === sig(b.entities)) return false;
  doc.change(undo, () => doc.defineBlock({ name: REV_BLOCK, base: { x: 0, y: 0 }, entities: ents }));
  return true;
}
