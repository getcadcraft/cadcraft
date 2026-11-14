/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autocomplete-cmd.js — AUTOCOMPLETE (0.8 EG.54): drawing autocomplete On / Off, and what it would suggest here.
 * The engine is autocomplete.js; cadcraft.js draws the ghosts, Tab takes one and Esc dismisses it.
 *   AUTOCOMPLETE (AUTOC)   On / Off, or Show (lists what the drawing's patterns suggest now)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { suggestionsFor } from './autocomplete.js';

const def = commandRegistry.add, opt = commandRegistry.option;

def('AUTOCOMPLETE', ['AUTOC'], async (c) => {
  const on = c.host.getAutocomplete?.() !== false;
  const k = await c.keyword(t('auto.prompt', { state: t(on ? 'auto.on' : 'auto.off') }), { options: [opt('O', 'On'), opt('F', 'Off'), opt('S', 'Show')], default: 'S' });
  const o = k?.option ?? k;
  if (!o) return;
  if (o === 'S') {
    const list = suggestionsFor(c.doc);
    if (!list.length) { c.print(t('auto.none')); return; }
    for (const s of list) c.print('  ' + t('auto.line', { kind: t('auto.kind.' + s.kind), n: s.ghosts.length }));
    return;
  }
  if (c.host.setAutocomplete) c.host.setAutocomplete(o === 'O');
  c.print(t('auto.set', { state: t(o === 'O' ? 'auto.on' : 'auto.off') }));
}, { noRepeat: true, keepSelection: true, help: () => t('auto.help') });
