/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vault-cmd.js — the Documents command (0.8 SU.1058, session `sx-vault`). DOM-free: registers through commands.js's
 * commandRegistry (as classes-cmd.js does), so the shared command file does not change. Imported once by cadcraft.js.
 *
 *   DOCUMENTS (DOCS)   open the Documents panel (vault-ui.js through host.vaultPanel, loaded on first use)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';

export function installVaultCommands(def) {
  def('DOCUMENTS', ['DOCS'], async (c) => { if (c.engine.host.vaultPanel) await c.engine.host.vaultPanel(); else c.print(t('sx.vault.cmd.nopanel')); },
    { keepSelection: true, noRepeat: true, help: () => t('sx.vault.cmd.help') });
}

// the command registers when this module is imported, as the page's other feature modules do (make-command-map.mjs finds them so)
installVaultCommands(commandRegistry.add);
