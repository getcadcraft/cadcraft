/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autodim-cmd.js — AUTODIM (0.8 EG.20): dimension the selected objects (or the whole drawing) by rules. The engine is autodim.js.
 *   AUTODIM (ADIM)   Overall / Chain / Openings / Holes / Grid on or off, Sides (which sides of the drawing), Run
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { planDimensions, applyDimensions, SIDES } from './autodim.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;

def('AUTODIM', ['ADIM'], async (c) => {
  const S = { overall: true, chain: true, openings: true, holes: true, grid: false, sides: ['bottom', 'left'] };
  const on = (v) => t(v ? 'auto.on' : 'auto.off');
  const ids = c.host.selection?.size ? new Set(c.host.selection) : null;
  for (;;) {
    const k = keyOf(await c.keyword(t('autodim.prompt', { what: t(ids ? 'autodim.selection' : 'autodim.all'), overall: on(S.overall), chain: on(S.chain), openings: on(S.openings), holes: on(S.holes), grid: on(S.grid), sides: S.sides.map((x) => t('autodim.side.' + x)).join('+') }),
      { options: [opt('O', 'Overall'), opt('C', 'Chain'), opt('P', 'Openings'), opt('H', 'Holes'), opt('G', 'Grid'), opt('S', 'Sides'), opt('R', 'Run')], default: 'R' }));
    if (!k) return;
    if (k === 'R') break;
    if (k === 'O') S.overall = !S.overall; else if (k === 'C') S.chain = !S.chain; else if (k === 'P') S.openings = !S.openings; else if (k === 'H') S.holes = !S.holes; else if (k === 'G') S.grid = !S.grid;
    else if (k === 'S') {
      const v = String(await c.string(t('autodim.prompt.sides'), { default: S.sides.join(',') }) || '').toLowerCase();
      const list = v.split(/[ ,+]+/).filter((x) => SIDES.includes(x));
      if (list.length) S.sides = [...new Set(list)]; else c.print(t('autodim.sides.bad', { sides: SIDES.join(', ') }));
    }
  }
  const plan = planDimensions(c.doc, { ...S, ids });
  if (!plan.dims.length) { c.print(t('autodim.none', { skipped: plan.counts.skipped })); return; }
  applyDimensions(c.doc, plan, 'AUTODIM');
  const n = plan.counts;
  c.print(t('autodim.done', { total: plan.dims.length, chain: n.chain, overall: n.overall, openings: n.openings, holes: n.holes, grid: n.grid, skipped: n.skipped }));
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('autodim.help') });
