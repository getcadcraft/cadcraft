/* SPDX-License-Identifier: Apache-2.0 */
/**
 * objhide-cmd.js — ISOLATEOBJECTS, HIDEOBJECTS, UNISOLATEOBJECTS (1.0 ORS.5). The engine is objhide.js.
 *   ISOLATEOBJECTS (ISOLATE)              select objects: everything else in this space goes out of sight
 *   HIDEOBJECTS                           select objects: they go out of sight
 *   UNISOLATEOBJECTS (UNISOLATE, UNHIDE)  everything hidden this way shows again
 * For this session only: nothing is saved, nothing is an undo step, layers stay as they are.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { hideObjects, isolateObjects, unhideAll, hiddenCount } from './objhide.js';

const def = commandRegistry.add;
const after = (c) => { c.host.setSelection(new Set()); c.host.redraw?.(); c.host.orsHiddenChanged?.(); };

def('ISOLATEOBJECTS', ['ISOLATE'], async (c) => {
  const ids = await c.select(t('objhide.select'));
  if (!ids || !ids.size) return;
  const n = isolateObjects(c.doc, ids);
  after(c);
  c.print(t('objhide.isolated', { n: ids.size, hidden: n, total: hiddenCount(c.doc) }));
}, { noRepeat: true, help: () => t('objhide.isolate.help') });

def('HIDEOBJECTS', [], async (c) => {
  const ids = await c.select(t('objhide.select'));
  if (!ids || !ids.size) return;
  const n = hideObjects(c.doc, ids);
  after(c);
  c.print(t('objhide.hidden', { n, total: hiddenCount(c.doc) }));
}, { noRepeat: true, help: () => t('objhide.hide.help') });

def('UNISOLATEOBJECTS', ['UNISOLATE', 'UNHIDE'], async (c) => {
  const n = unhideAll(c.doc);
  c.host.redraw?.(); c.host.orsHiddenChanged?.();
  c.print(n ? t('objhide.shown', { n }) : t('objhide.nothing'));
}, { noRepeat: true, keepSelection: true, help: () => t('objhide.unisolate.help') });
