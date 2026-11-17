/* SPDX-License-Identifier: Apache-2.0 */
/**
 * touch-crosshair-cmd.js — TOUCHCROSSHAIR (1.0 ORS.20): the offset crosshair for fingers from the command line. The rules
 * are touch-crosshair.js, the page side touch-crosshair-ui.js (host.touchCrosshair).
 *   TOUCHCROSSHAIR (TCX)   ON / OFF / Auto (on only where a finger is the main pointer) / Distance (px) / Side (Left / Right)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { TOUCH_CROSSHAIR_LIMITS } from './touch-crosshair.js';

const def = commandRegistry.add, opt = commandRegistry.option;

def('TOUCHCROSSHAIR', ['TCX'], async (c) => {
  const api = c.host.touchCrosshair;
  if (!api) { c.print(t('touchx.unavailable')); return; }
  const state = () => { const p = api.prefs(); return t('touchx.state', { on: t(p.on ? 'touchx.word.on' : 'touchx.word.off'), mode: t('touchx.mode.' + p.mode), distance: p.distance, side: t('touchx.side.' + p.side) }); };
  c.print(state());
  if (!api.available) c.print(t('touchx.notouch'));
  const k = await c.keyword(t('touchx.prompt'), { options: [opt('ON', 'ON'), opt('OFF', 'OFF'), opt('A', 'Auto'), opt('D', 'Distance'), opt('S', 'Side')], default: api.prefs().on ? 'OFF' : 'ON' });
  if (!k) return;
  const key = String(k.option || k).toUpperCase();
  if (key === 'ON' || key === 'OFF') api.set({ mode: key.toLowerCase() });
  else if (key === 'A' || key === 'AUTO') api.set({ mode: 'auto' });
  else if (key === 'D' || key === 'DISTANCE') {
    const n = await c.number(t('touchx.distance.prompt', { min: TOUCH_CROSSHAIR_LIMITS.min, max: TOUCH_CROSSHAIR_LIMITS.max, now: api.prefs().distance }), {});
    if (typeof n !== 'number' || !Number.isFinite(n)) return;
    if (n < TOUCH_CROSSHAIR_LIMITS.min || n > TOUCH_CROSSHAIR_LIMITS.max) c.print(t('touchx.distance.range', { min: TOUCH_CROSSHAIR_LIMITS.min, max: TOUCH_CROSSHAIR_LIMITS.max }));
    api.set({ distance: n });
  } else if (key === 'S' || key === 'SIDE') {
    const s = await c.keyword(t('touchx.side.prompt'), { options: [opt('L', 'Left'), opt('R', 'Right')], default: api.prefs().side === 'left' ? 'R' : 'L' });
    if (!s) return;
    api.set({ side: /^R/i.test(String(s.option || s)) ? 'right' : 'left' });
  }
  c.print(state());
}, { noRepeat: true, keepSelection: true, help: () => t('touchx.help') });
