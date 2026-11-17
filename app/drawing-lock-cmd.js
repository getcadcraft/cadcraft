/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing-lock-cmd.js — WHOHAS (1.0 ORS.27): who has a drawing open. The rules are drawing-lock.js, the page side
 * drawing-lock-ui.js (host.drawingLock).
 *   WHOHAS   says who has the open drawing's file, then: Current / File (pick one) / FOlder (every drawing in a folder that
 *            is open somewhere; also lets Studio keep lock files there) / Path (type one) / Name (the name others see)
 * In a browser there are no folders to look in: the command says so and ends.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { baseName, lockable } from './drawing-lock.js';

const def = commandRegistry.add, opt = commandRegistry.option;

def('WHOHAS', [], async (c) => {
  const api = c.host.drawingLock;
  if (!api || !api.available) { c.print(t('dlock.absent')); return; }
  const say = async (path) => {
    if (!lockable(path)) { c.print(t('dlock.notdrawing', { file: baseName(path) || String(path) })); return; }
    c.print(api.describe(baseName(path), await api.whoHas(path)));
  };
  const cur = api.currentPath();
  const k = await c.keyword(t('dlock.prompt'), { options: [opt('C', 'Current'), opt('F', 'File'), opt('FO', 'FOlder'), opt('P', 'Path'), opt('N', 'Name')], default: cur ? 'C' : 'FO' });
  if (!k) return;
  const key = String(k.option || k).toUpperCase();
  if (key === 'C' || key === 'CURRENT') {
    if (!cur) { c.print(t('dlock.current.nofile')); return; }
    await say(cur);
  } else if (key === 'F' || key === 'FILE') {
    const path = await api.pickFile();
    if (!path) { c.print(t('dlock.nothing')); return; }
    await say(path);
  } else if (key === 'FO' || key === 'FOLDER') {
    const r = await api.folder();
    if (!r) { c.print(t('dlock.nothing')); return; }
    if (!r.rows.length) { c.print(t('dlock.folder.none', { folder: r.folder })); return; }
    c.print(t('dlock.folder.head', { folder: r.folder, n: r.rows.length }));
    for (const row of r.rows) c.print('  ' + api.describe(row.name, row));
  } else if (key === 'P' || key === 'PATH') {
    const path = await c.string(t('dlock.path.prompt'), {});
    if (!path || !String(path).trim()) return;
    await say(String(path).trim());
  } else if (key === 'N' || key === 'NAME') {
    c.print(t('dlock.name.now', { name: api.name() }));
    const name = await c.string(t('dlock.name.prompt'), { none: true });
    if (name == null) return;
    c.print(t('dlock.name.set', { name: api.name(String(name)) }));
  }
}, { noRepeat: true, keepSelection: true, help: () => t('dlock.help') });
