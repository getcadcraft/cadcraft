/* SPDX-License-Identifier: Apache-2.0 */
/**
 * credits-cmd.js — CREDITS: the Library credits as a table in the drawing, on a sheet or in the model. The table is one block, `CC-CREDITS`, of plain lines and text, so it saves
 * to DWG and DXF, plots and moves like any block. Running CREDITS again rebuilds that block from the items in the drawing now: every copy keeps its place and text height.
 * The rows and the drawing come from lib/report/credits.js.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { libraryUses } from './libplace.js';
import { merge, creditRows, creditsTable } from './report/credits.js';
import { textUnitMm } from './dimstyle.js';

export const CREDITS_BLOCK = 'CC-CREDITS';
const WRAP = 70;

/** The block for what the drawing uses now; h = the text height. */
export function creditsBlock(doc, h) {
  const items = merge([libraryUses(doc).map((u) => ({ uuid: u.uuid, version: u.version, name: u.name, license: u.license, attribution: u.attribution, url: u.licenseUrl }))]);
  if (!items.length) return null;
  const g = creditsTable([t('credits.col.license'), t('credits.col.credit')], creditRows(items, { wrap: WRAP }), { h });
  const layer = '0';
  return { items, block: { name: CREDITS_BLOCK, base: { x: 0, y: 0 }, entities: [
    ...g.lines.map((l) => ({ type: 'line', layer, ...l })),
    ...g.texts.map((x) => ({ type: 'text', layer, x: x.x, y: x.y, h: x.h, s: x.s, ha: 'left', va: 'baseline', rot: 0 })),
  ] } };
}

commandRegistry.add('CREDITS', [], async (c) => {
  const doc = c.doc, old = doc.blocks.get(CREDITS_BLOCK);
  const placed = old && doc.blockUses(CREDITS_BLOCK);
  if (placed) {
    const h = old.entities.find((e) => e.type === 'text')?.h || 2.5, made = creditsBlock(doc, h);
    if (!made) { c.print(t('credits.none.placed')); return; }
    doc.change('CREDITS', () => doc.defineBlock(made.block));
    c.print(t('credits.updated', { n: made.items.length }));
    return;
  }
  if (!creditsBlock(doc, 1)) { c.print(t('lib.panel.drawing_has_no_library')); return; }
  const { mm } = textUnitMm(doc.meta, doc.layout);
  const p = await c.point(t('credits.point'));
  if (!p || p.option) return;
  const h = (await c.number(t('credits.height'), { default: Math.round(2.5 / (mm || 1) * 10000) / 10000 })) || 2.5;
  if (!(h > 0)) return;
  const made = creditsBlock(doc, h);
  doc.change('CREDITS', () => { doc.defineBlock(made.block); doc.add({ type: 'insert', layer: doc.current.layer, block: CREDITS_BLOCK, x: p.x, y: p.y, sx: 1, sy: 1, rot: 0 }); });
  c.print(t('credits.placed', { n: made.items.length }));
}, { noRepeat: true, help: () => t('credits.help') });
