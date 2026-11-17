/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lockedlayers-cmd.js — LAYLOCKFADE (1.0 ORS.28): how much locked layers fade, and whether a click reaches them.
 *   LAYLOCKFADE   a number 0–90 (percent; 0 = no fade), or ON / OFF (keep the amount), or Pick (may objects on locked layers
 *                 be picked while no command runs: Yes / No)
 * The same two settings are in Settings; lockedlayers.js reads them, cadcraft.js stores them (cleanup-ui.js).
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { cleanLockSettings, cleanFade, FADE_MAX, FADE_DEFAULT } from './lockedlayers.js';

const def = commandRegistry.add, opt = commandRegistry.option;

def('LAYLOCKFADE', [], async (c) => {
  const store = c.host.settings || (c.engine.orsLock ??= {});
  const S = cleanLockSettings(store);
  const save = () => { Object.assign(store, S); c.host.saveSettings?.(); c.host.orsLockChanged?.(); c.host.redraw?.(); };
  c.print(t('lockfade.now', { n: S.orsLockFade, state: t(S.orsLockFadeOn ? 'lockfade.on' : 'lockfade.off'), pick: t(S.orsLockPick ? 'lockfade.pick.yes' : 'lockfade.pick.no') }));
  const r = await c.number(t('lockfade.prompt', { max: FADE_MAX }), { default: S.orsLockFade, options: [opt('ON', 'ON'), opt('OFF', 'OFF'), opt('P', 'Pick')] });
  if (r && r.option === 'ON') { S.orsLockFadeOn = true; if (!S.orsLockFade) S.orsLockFade = FADE_DEFAULT; }
  else if (r && r.option === 'OFF') S.orsLockFadeOn = false;
  else if (r && r.option === 'P') {
    const k = await c.keyword(t('lockfade.pick.prompt'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: S.orsLockPick ? 'Y' : 'N' });
    const key = k?.option || k;
    if (key !== 'Y' && key !== 'N') return;
    S.orsLockPick = key === 'Y';
    save();
    c.print(t(S.orsLockPick ? 'lockfade.pick.set.yes' : 'lockfade.pick.set.no'));
    return;
  } else if (typeof r === 'number' && Number.isFinite(r) && r >= 0 && r <= FADE_MAX) { S.orsLockFade = cleanFade(r); S.orsLockFadeOn = S.orsLockFade > 0; }
  else { c.print(t('lockfade.bad', { max: FADE_MAX })); return; }
  save();
  c.print(S.orsLockFadeOn && S.orsLockFade > 0 ? t('lockfade.set', { n: S.orsLockFade }) : t('lockfade.set.off'));
}, { noRepeat: true, keepSelection: true, help: () => t('lockfade.help') });
