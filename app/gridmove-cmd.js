/* SPDX-License-Identifier: Apache-2.0 */
/**
 * gridmove-cmd.js — GRIDMOVE (0.8 EG.35): move a grid line and what hangs on it. The engine is gridmove.js.
 *   GRIDMOVE (GM)   pick a grid line, then a base point and a second point (only the part across the line counts) or a Distance
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { planGridMove, applyGridMove, normalOf } from './gridmove.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const GHOSTS = 300;

def('GRIDMOVE', ['GM'], async (c) => {
  const pick = await c.entity(t('gridmove.pick'));
  if (!pick) return;
  const line = c.doc.get(pick.id);
  if (!line || line.type !== 'line') { c.print(t('gridmove.notline')); return; }
  const nrm = normalOf(line);
  const across = (a, b) => (b.x - a.x) * nrm.x + (b.y - a.y) * nrm.y;
  const base = await c.point(t('gridmove.base'), { options: [opt('D', 'Distance')] });
  if (!base) return;
  let d;
  if (base.option === 'D') d = await c.number(t('gridmove.distance'), {});
  else {
    c.preview((cur) => { const p = planGridMove(c.doc, line.id, across(base, cur)); return p ? p.updates.slice(0, GHOSTS).map((u) => ({ ...u.entity, ghost: true })) : []; });
    const to = await c.point(t('gridmove.to'), { base });
    if (!to || to.option) return;
    d = across(base, to);
  }
  if (typeof d !== 'number' || !Number.isFinite(d) || Math.abs(d) < 1e-9) { c.print(t('gridmove.zero')); return; }
  const plan = planGridMove(c.doc, line.id, d);
  if (!plan) return;
  applyGridMove(c.doc, plan, 'GRIDMOVE');
  c.print(t('gridmove.done', { moved: plan.counts.moved, stretched: plan.counts.stretched, dims: plan.counts.dims, notes: plan.counts.notes }));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('gridmove.help') });
