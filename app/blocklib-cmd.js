/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blocklib-cmd.js — BLOCKSPALETTE (1.0 ORS.23): bring the Blocks panel into view with the cursor in its filter.
 * The panel is blocks-panel.js (pictures, list / grid, recent first, libraries from other drawings and folders).
 *   BLOCKSPALETTE (BLOCKSPAL)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';

commandRegistry.add('BLOCKSPALETTE', ['BLOCKSPAL'], async (c) => {
  if (!c.host.blocksPanel) { c.print(t('blockspanel.needs_page')); return; }
  c.host.blocksPanel.show();
}, { noRepeat: true, keepSelection: true, help: () => t('blockspanel.help') });
