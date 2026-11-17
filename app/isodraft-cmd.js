/* SPDX-License-Identifier: Apache-2.0 */
/**
 * isodraft-cmd.js — isometric drafting (1.0 ORS.10). The engine is isodraft.js.
 *   ISODRAFT     ON / OFF, or Left / Top / Right (turns it on, on that plane)
 *   ISOPLANE     Left / Top / Right; Enter goes to the next plane (F5 does the same while isometric drafting is on)
 *   _ISOCIRCLE   hidden: ELLIPSE's Isocircle option (center, then radius or Diameter)
 * While it is on: Ortho and polar tracking follow the plane's two axes, snap to grid uses the isometric grid, and the grid is drawn
 * isometric (cadcraft.js pointFor and view.js drawGrid call isodraft.js; marked ORS.10).
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { dist } from './geom.js';
import { isoState, setIso, nextPlane, isocircle, PLANES } from './isodraft.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const KEY = { L: 'left', T: 'top', R: 'right' };
const say = (c) => { c.print(isoState.on ? t('isodraft.on', { plane: t('isodraft.plane.' + isoState.plane) }) : t('isodraft.off')); c.host.redraw?.(); };

def('ISODRAFT', [], async (c) => {
  const k = await c.keyword(t('isodraft.ask'), { options: [opt('ON', 'ON'), opt('OFF', 'OFF'), opt('L', 'Left'), opt('T', 'Top'), opt('R', 'Right')], default: isoState.on ? 'OFF' : 'ON' });
  const o = String((k && k.option) || k || '').toUpperCase();
  if (o === 'ON') setIso({ on: true });
  else if (o === 'OFF') setIso({ on: false });
  else if (KEY[o]) setIso({ on: true, plane: KEY[o] });
  else return;
  say(c);
}, { noRepeat: true, keepSelection: true, help: () => t('isodraft.help') });

def('ISOPLANE', [], async (c) => {
  const k = await c.keyword(t('isodraft.plane.ask', { plane: t('isodraft.plane.' + isoState.plane) }), { options: [opt('L', 'Left'), opt('T', 'Top'), opt('R', 'Right')], none: true });
  const o = String((k && k.option) || k || '').toUpperCase();
  if (KEY[o]) setIso({ plane: KEY[o] }); else if (!o) nextPlane(); else return;
  c.print(t('isodraft.plane.now', { plane: t('isodraft.plane.' + isoState.plane) }));
  if (!isoState.on) c.print(t('isodraft.plane.off_note'));
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('isodraft.plane.help') });

def('_ISOCIRCLE', [], async (c) => {
  const center = await c.point(t('isodraft.circle.center'));
  if (!center || center.option) return;
  let dia = false, r;
  for (;;) {
    c.preview((cur) => { const e = isocircle(center, dist(center, cur) / (dia ? 2 : 1)); return e ? [e] : []; });
    r = await c.distance(t(dia ? 'isodraft.circle.diameter' : 'isodraft.circle.radius'), { base: center, options: dia ? [] : [opt('D', 'Diameter')] });
    if (r && r.option === 'D') { dia = true; continue; }
    break;
  }
  c.preview(null);
  const e = isocircle(center, (dia ? r / 2 : r));
  if (!e) return;
  const cur = c.doc.current;
  c.add({ layer: cur.layer, color: cur.color, ...(c.doc.currentStyle?.() || {}), ...e });
}, { hidden: true, noRepeat: true });

/** The host's part (cadcraft.js): F5 goes to the next plane while isometric drafting is on, and the view redraws when the state changes. */
export function isoKey(e, { print, redraw } = {}) {
  if (e.key !== 'F5' || e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || !isoState.on) return false;
  e.preventDefault?.();
  nextPlane();
  print?.(t('isodraft.plane.now', { plane: t('isodraft.plane.' + isoState.plane) }));
  redraw?.();
  return true;
}
export { PLANES };
