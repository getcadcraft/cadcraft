/* SPDX-License-Identifier: Apache-2.0 */
/**
 * overkill-cmd.js — OVERKILL (1.0 ORS.3): delete duplicate and overlapping objects. The engine is overkill.js.
 *   OVERKILL   select objects, then Enter to clean up, or Tolerance / Ignore (properties) / Overlap (on, off) / Ends (on, off)
 * The settings last for the session. One undo step.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { planOverkill, applyOverkill, IGNORABLE, DEFAULT_TOL } from './overkill.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const IGNORE_KEYS = [['C', 'Color', 'color'], ['LA', 'LAyer', 'layer'], ['LT', 'LType', 'linetype'], ['S', 'ltScale', 'ltscale'], ['LW', 'LWeight', 'lineweight'], ['TH', 'THickness', 'thickness'], ['TR', 'TRansparency', 'transparency']];
const num = (n) => String(Number(Number(n).toPrecision(8)));
const onOff = (v) => t(v ? 'overkill.on' : 'overkill.off');
const ignoreList = (S) => (S.ignore.size ? IGNORABLE.filter((n) => S.ignore.has(n)).map((n) => t('overkill.prop.' + n)).join(', ') : t('overkill.prop.none'));

def('OVERKILL', [], async (c) => {
  const S = (c.engine.orsOverkill ??= { tol: DEFAULT_TOL, ignore: new Set(), overlap: true, ends: true });
  const ids = await c.select(t('overkill.select'));
  if (!ids || !ids.size) return;
  for (;;) {
    c.print(t('overkill.now', { tol: num(S.tol), ignore: ignoreList(S), overlap: onOff(S.overlap), ends: onOff(S.ends) }));
    const k = await c.keyword(t('overkill.prompt'), { options: [opt('T', 'Tolerance'), opt('I', 'Ignore'), opt('O', 'Overlap'), opt('E', 'Ends')], none: true });
    const key = k?.option || k;
    if (!key) break;
    if (key === 'T') {
      const v = await c.number(t('overkill.tol'), { default: S.tol });
      if (typeof v === 'number' && Number.isFinite(v) && v >= 0) S.tol = v; else c.print(t('overkill.tol.bad'));
    } else if (key === 'O') S.overlap = !S.overlap;
    else if (key === 'E') S.ends = !S.ends;
    else if (key === 'I') {
      for (;;) {
        c.print(t('overkill.ignore.now', { list: ignoreList(S) }));
        const r = await c.keyword(t('overkill.ignore.prompt'), { options: [...IGNORE_KEYS.map(([a, b]) => opt(a, b)), opt('N', 'None'), opt('A', 'All')], none: true });
        const p = r?.option || r;
        if (!p) break;
        if (p === 'N') S.ignore.clear();
        else if (p === 'A') for (const n of IGNORABLE) S.ignore.add(n);
        else { const name = IGNORE_KEYS.find((x) => x[0] === p)?.[2]; if (name) { if (S.ignore.has(name)) S.ignore.delete(name); else S.ignore.add(name); } }
      }
    }
  }
  const plan = planOverkill(c.doc, ids, S);
  applyOverkill(c.doc, plan, 'OVERKILL');
  c.host.setSelection(new Set());
  const n = plan.remove.length;
  if (!n) c.print(t('overkill.none', { looked: plan.counts.looked }));
  else c.print(t('overkill.done', { n, looked: plan.counts.looked, duplicates: plan.counts.duplicates, overlaps: plan.counts.overlaps, joined: plan.counts.joined }));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('overkill.help') });
