/* SPDX-License-Identifier: Apache-2.0 */
/**
 * objectscale-cmd.js — annotative objects at several scales (1.0 ORS.26, builder "dims"). The rule and the engine are in
 * anno-scale-cad.js (walk.js asks it how each viewport shows an annotative object).
 *   OBJECTSCALE (OBJSCALE)       the selected annotative text and dimensions: Add a scale to their lists, Delete one,
 *                                add the Current annotation scale, or List what each keeps
 *   ANNOALLVISIBLE (ANNOALL)     show annotative objects also where the scale is not in their list (On, as they are) or not (Off)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { Doc } from './doc.js';
import { scalesOf, parseRatio, nOfScale, ratioName } from './scales.js';
import { isAnnoType, annoScaleOf, scaleListOf, addObjectScale, removeObjectScale, annoShowAll, setAnnoShowAll, annoHook } from './anno-scale-cad.js';

const def = commandRegistry.add, opt = commandRegistry.option;
Doc.editHooks.add(annoHook);   // a pasted object with a scale list turns the per-viewport rule on
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);
export const scaleName = (n) => ratioName(n >= 1 ? 1 : 1 / n, n >= 1 ? n : 1);
/** Typed → the n of 1:n: one of the drawing's own scales by name, a ratio (1:50, 2:1), or a bare number (50). */
export function typedScale(doc, typed) {
  const s = String(typed ?? '').trim();
  if (!s) return null;
  const own = scalesOf(doc).find((x) => x.name.toLowerCase() === s.toLowerCase());
  const r = own ? { paper: own.paper, drawing: own.drawing } : parseRatio(s) || (/^\d+(?:\.\d+)?$/.test(s) && Number(s) > 0 ? { paper: 1, drawing: Number(s) } : null);
  return r ? nOfScale(r) : null;
}

def('OBJECTSCALE', ['OBJSCALE'], async (c) => {
  const doc = c.doc;
  const ids = await c.select(t('objscale.select'));
  if (!ids || ids.option) return;
  const all = [...ids].map((id) => doc.get(id)).filter(Boolean);
  const ann = all.filter((e) => e.ann && isAnnoType(e) && doc.model.get(e.id) === e);
  if (!ann.length) { c.print(t(all.some((e) => isAnnoType(e)) ? 'objscale.notann' : 'objscale.none')); return; }
  if (ann.length < all.length) c.print(t('objscale.skipped', { n: all.length - ann.length }));
  const list = () => { for (const e of ann.map((x) => doc.get(x.id)).filter(Boolean).slice(0, 50)) c.print('  ' + t('objscale.line', { what: e.type === 'dim' ? t('objscale.dim') : String(e.s ?? '').split('\n')[0].slice(0, 30), scales: scaleListOf(doc, e).map(scaleName).join(', ') })); };
  const targets = ann.map((e) => e.id);
  for (;;) {
    const k = kw(await c.keyword(t('objscale.mode'), { options: [opt('A', 'Add'), opt('D', 'Delete'), opt('C', 'Current scale'), opt('L', 'List'), opt('X', 'eXit')], default: 'A' }), 'A');
    if (k === 'X') break;
    if (k === 'L') { list(); continue; }
    if (k === 'C') {
      const n = annoScaleOf(doc), r = addObjectScale(doc, targets, n);
      c.print(t('objscale.added', { scale: scaleName(n), n: r.changed }));
      break;
    }
    const typed = await c.string(t(k === 'D' ? 'objscale.ask.delete' : 'objscale.ask.add'));
    if (!String(typed ?? '').trim()) break;
    const n = typedScale(doc, typed);
    if (!n) { c.print(t('cmd.annoscale.err')); continue; }
    const r = k === 'D' ? removeObjectScale(doc, targets, n) : addObjectScale(doc, targets, n);
    if (r.error) { c.print(t('cmd.annoscale.err')); continue; }
    if (k === 'D') { c.print(t('objscale.deleted', { scale: scaleName(n), n: r.changed })); if (r.last) c.print(t('objscale.last', { n: r.last })); }
    else { c.print(t('objscale.added', { scale: scaleName(n), n: r.changed })); if (r.full) c.print(t('objscale.full', { n: r.full })); }
    break;
  }
  c.host.setSelection(new Set());
  c.host.redraw?.();
}, { help: () => t('objscale.help') });

def('ANNOALLVISIBLE', ['ANNOALL'], async (c) => {
  const on = annoShowAll(c.doc);
  c.print(t(on ? 'annoall.now.on' : 'annoall.now.off'));
  const k = kw(await c.keyword(t('annoall.ask'), { options: [opt('ON', 'ON'), opt('OFF', 'OFF')], default: on ? 'ON' : 'OFF' }), on ? 'ON' : 'OFF');
  const want = /^(on|1)$/i.test(String(k));
  setAnnoShowAll(c.doc, want);
  c.print(t(want ? 'annoall.set.on' : 'annoall.set.off'));
  c.host.redraw?.();
}, { help: () => t('annoall.help') });
