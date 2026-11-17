/* SPDX-License-Identifier: Apache-2.0 */
/**
 * legacy-text-cmd.js — LEGACYTEXT (1.0 ORS.21): text typed with old 8-bit Vietnamese fonts (TCVN3 / ABC, VNI) read as Unicode.
 * The engine is legacy-text.js. Importing this module also makes the drawing SHOW such text decoded (geom.js setTextDecode):
 * the stored characters stay as the file had them until LEGACYTEXT converts them.
 *
 *   LEGACYTEXT (TEXTTOUNICODE, VNTEXT)
 *     texts in a known old font found → says how many, per encoding; Yes converts them all (model, sheets, blocks, attributes),
 *       gives the text styles a Unicode font, in one undo step
 *     none found → Tcvn3 / Vni: choose the encoding yourself and select the texts (for drawings whose style lost the font name)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { setTextDecode, resetTextLayouts } from './geom.js';
import { scanLegacy, convertLegacy, displayOf, legacyProfiles } from './legacy-text.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);

let activeDoc = null, showDecoded = true;
/** The drawing whose text styles say which font a text uses (cadcraft.js: the current one). */
export const useLegacyDoc = (doc) => { activeDoc = doc; };
/** Draw old-font text decoded (default) or exactly as stored. */
export function setLegacyDisplay(on) { showDecoded = !!on; resetTextLayouts(); }
setTextDecode((e, rich) => (showDecoded && activeDoc ? displayOf(activeDoc, e, rich) : null));

const byProfile = (r) => Object.entries(r.byProfile).map(([id, n]) => t('legacytext.count', { n, name: legacyProfiles().find((p) => p.id === id)?.label || id })).join(', ');

def('LEGACYTEXT', ['TEXTTOUNICODE', 'VNTEXT'], async (c) => {
  const doc = c.doc;
  useLegacyDoc(doc);
  const found = scanLegacy(doc);
  if (found.total || found.styles.length) {
    c.print(t('legacytext.found', { n: found.total, list: byProfile(found) || '0', fonts: found.fonts.join(', ') || '-' }));
    const yes = String(kw(await c.keyword(t('legacytext.ask', { n: found.total }), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'Y' }), 'Y')).toUpperCase();
    if (yes !== 'Y') { c.print(t('legacytext.kept')); return; }
    const r = convertLegacy(doc, { label: 'LEGACYTEXT' });
    resetTextLayouts();
    c.print(t('legacytext.done', { n: r.total, texts: r.texts + r.blockTexts, attrs: r.attrs, styles: r.styles.length }));
    c.host.redraw?.();
    return;
  }
  c.print(t('legacytext.none'));
  const which = String(kw(await c.keyword(t('legacytext.pick'), { options: [opt('T', 'Tcvn3'), opt('V', 'Vni'), opt('N', 'None')], default: 'N' }), 'N')).toUpperCase();
  if (which !== 'T' && which !== 'V') return;
  const ids = await c.select(t('legacytext.select'));
  if (!ids || !(ids.size ?? ids.length)) return;
  const r = convertLegacy(doc, { label: 'LEGACYTEXT', ids: [...ids], force: { id: which === 'T' ? 'tcvn3' : 'vni' } });
  resetTextLayouts();
  c.print(r.total ? t('legacytext.done.forced', { n: r.total }) : t('legacytext.nochange'));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('legacytext.help') });
