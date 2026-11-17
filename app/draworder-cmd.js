/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draworder-cmd.js — DRAWORDER, TEXTTOFRONT, HATCHTOBACK (1.0 ORS.4). The engine is draworder.js; the order itself is doc.reorder (doc.js).
 *   DRAWORDER        select objects, then Above objects / Under objects / Front / Back (Enter = Back)
 *   TEXTTOFRONT      Text / Dimensions / Leaders / All (Enter = All): bring them in front of everything else
 *   HATCHTOBACK      every hatch of the open space behind everything else
 * Each is one undo step; the order is saved with the drawing.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { orderPlan, applyOrder, textIds, hatchIds } from './draworder.js';

const def = commandRegistry.add, opt = commandRegistry.option;

def('DRAWORDER', [], async (c) => {
  const ids = await c.select(t('draworder.select'));
  if (!ids || !ids.size) return;
  const k = await c.keyword(t('draworder.how'), { options: [opt('A', 'Above objects'), opt('U', 'Under objects'), opt('F', 'Front'), opt('B', 'Back')], default: 'B' });
  const key = k?.option || k;
  const mode = { A: 'above', U: 'under', F: 'front', B: 'back' }[key];
  if (!mode) return;
  let refs = null;
  if (mode === 'above' || mode === 'under') {
    c.host.setSelection(new Set());
    refs = await c.select(t('draworder.ref'), { fresh: true });
    refs = new Set([...(refs || [])].filter((id) => !ids.has(id)));
    if (!refs.size) { c.print(t('draworder.noref')); return; }
  }
  const moved = applyOrder(c.doc, orderPlan(c.doc, ids, mode, refs), 'DRAWORDER');
  c.host.setSelection(new Set());
  c.print(moved ? t('draworder.done.' + mode, { n: ids.size }) : t('draworder.same'));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('draworder.help') });

def('TEXTTOFRONT', [], async (c) => {
  const k = await c.keyword(t('draworder.ttf.which'), { options: [opt('T', 'Text'), opt('D', 'Dimensions'), opt('L', 'Leaders'), opt('A', 'All')], default: 'A' });
  const key = k?.option || k;
  if (!['T', 'D', 'L', 'A'].includes(key)) return;
  const ids = textIds(c.doc, { text: key === 'T' || key === 'A', dims: key === 'D' || key === 'A', leaders: key === 'L' || key === 'A' });
  if (!ids.length) { c.print(t('draworder.ttf.none')); return; }
  const moved = applyOrder(c.doc, orderPlan(c.doc, ids, 'front'), 'TEXTTOFRONT');
  c.print(moved ? t('draworder.ttf.done', { n: ids.length }) : t('draworder.ttf.same', { n: ids.length }));
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('draworder.ttf.help') });

def('HATCHTOBACK', [], async (c) => {
  const ids = hatchIds(c.doc);
  if (!ids.length) { c.print(t('draworder.htb.none')); return; }
  const moved = applyOrder(c.doc, orderPlan(c.doc, ids, 'back'), 'HATCHTOBACK');
  c.print(moved ? t('draworder.htb.done', { n: ids.length }) : t('draworder.htb.same', { n: ids.length }));
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('draworder.htb.help') });
