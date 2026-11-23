/* SPDX-License-Identifier: Apache-2.0 */
/**
 * touch-crosshair-ui.js — the page side of the offset crosshair for fingers (1.0 ORS.20). The rules are in
 * touch-crosshair.js (DOM-free); this file feeds it the touch events over the drawing and turns its answers into the
 * pointer events the app already understands, so object snaps, tracking, grips, windows and commands need no second path:
 *
 *   a finger on the drawing     kept from the app (stopped while the window captures it); the machine answers with the
 *                               crosshair's position, sent on as a plain mouse move over the drawing
 *   the click button / a tap    a mouse button down and up at the crosshair (held = a drag)
 *   a long press / Enter        a right button click at the crosshair (the app's right click: Enter, or its menu)
 *   two fingers                 view.panBy / view.zoomAt, as the app's own pinch does
 * A pen and a mouse are never touched: only pointerType 'touch'.
 *
 * What a person sets is kept in this browser (localStorage 'cadcraft.touchCrosshair': mode auto | on | off, distance,
 * side). The status bar switch shows only on a device with a touch screen (or after the first touch).
 *
 *   const api = installTouchCrosshair({ root, over, view, el, t, status, toggles, settingsDlg, onTouch, onNavigate });
 *   api.prefs() → { mode, distance, side, on }      api.set({ mode?, distance?, side? })      api.available → has touch
 */
import { TouchCrosshair, cleanTouchPrefs, touchCrosshairOn, TOUCH_CROSSHAIR_LIMITS } from './touch-crosshair.js';

const KEY = 'cadcraft.touchCrosshair';

export function installTouchCrosshair({ root, over, view, el, t, status = () => {}, toggles = null, settingsDlg = null, onTouch = () => {}, onNavigate = () => {}, win = window }) {
  const doc = over.ownerDocument;
  let prefs = cleanTouchPrefs((() => { try { return JSON.parse(win.localStorage.getItem(KEY) || '{}'); } catch { return {}; } })());
  const mq = (q) => { try { return !!win.matchMedia?.(q).matches; } catch { return false; } };
  const device = () => ({ coarse: mq('(pointer: coarse)'), fine: mq('(any-pointer: fine)') });   // i18n-ignore (media queries)
  let hasTouch = mq('(any-pointer: coarse)') || (win.navigator?.maxTouchPoints || 0) > 0;         // i18n-ignore (a media query)
  const machine = new TouchCrosshair(prefs);
  const isOn = () => touchCrosshairOn(prefs.mode, device());
  let timer = 0;

  // ---- out: the machine's actions as pointer events over the drawing ----
  const rect = () => over.getBoundingClientRect();
  const send = (type, a, buttons) => {
    const r = rect();
    over.dispatchEvent(new win.PointerEvent(type, {
      bubbles: true, cancelable: true, composed: true, view: win, pointerId: 1, pointerType: 'mouse', isPrimary: true,
      clientX: r.left + a.x, clientY: r.top + a.y, button: type === 'pointermove' ? -1 : (a.button || 0), buttons,
    }));
  };
  let heldButtons = 0;
  function act(actions) {
    for (const a of actions) {
      if (a.type === 'move') send('pointermove', a, heldButtons);
      else if (a.type === 'down') { heldButtons = a.button === 2 ? 2 : 1; send('pointerdown', a, heldButtons); }
      else if (a.type === 'up') { heldButtons = 0; send('pointerup', a, 0); }
      else if (a.type === 'abort') { heldButtons = 0; over.dispatchEvent(new win.PointerEvent('pointercancel', { bubbles: true, pointerId: 1, pointerType: 'mouse' })); }
      else if (a.type === 'pan') { view.panBy(a.dx, a.dy); }
      else if (a.type === 'zoom') { view.zoomAt(a.x - (view.x0 || 0), a.y - (view.y0 || 0), a.factor); }
    }
    win.clearTimeout(timer);
    if (machine.timer != null) timer = win.setTimeout(() => { act(machine.tick(now())); }, Math.max(0, machine.timer - now()));
    pad.classList.toggle('is-held', machine.held);
  }
  const now = () => win.performance.now();
  /** Put the crosshair back where the machine has it (the app drops its crosshair when a pointer leaves the drawing). */
  const restore = () => { if (isOn() && machine.cross && !machine.fingers.size) send('pointermove', machine.cross, heldButtons); };

  // ---- in: touches over the drawing, taken before the app's own handlers see them ----
  const mine = new Set();   // pointer ids of the touches this mode took
  const local = (e) => { const r = rect(); machine.resize(r.width, r.height); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const take = (e) => { e.stopImmediatePropagation(); if (e.cancelable && e.type !== 'pointerdown') e.preventDefault(); };
  const onDown = (e) => {
    if (e.pointerType !== 'touch') return;
    if (win.ccShellPen?.palm?.(e)) return;   // 0.11 SU.1807: a palm while the pen is down or near is the shell's to drop (app-phone.js), never a crosshair finger
    if (!hasTouch) { hasTouch = true; render(); }
    if (e.target !== over || !isOn()) return;
    take(e);
    onTouch();
    mine.add(e.pointerId);
    const p = local(e);
    if (machine.fingers.size === 1) onNavigate();   // a second finger: the view may move (ZOOM Previous keeps the view before)
    act(machine.down(e.pointerId, p.x, p.y, now()));
  };
  const onMove = (e) => {
    if (pad.contains(e.target)) { e.stopPropagation(); return; }   // a thumb resting on the buttons is not "the pointer left the drawing"
    if (e.pointerType !== 'touch' || !mine.has(e.pointerId)) return;
    take(e);
    const p = local(e);
    act(machine.move(e.pointerId, p.x, p.y, now()));
  };
  const onUp = (e) => {
    if (e.pointerType !== 'touch' || !mine.has(e.pointerId)) return;
    take(e);
    mine.delete(e.pointerId);
    act(e.type === 'pointercancel' ? machine.cancel() : machine.up(e.pointerId, now()));
    if (e.type === 'pointercancel') mine.clear();
    win.setTimeout(restore, 0);
  };
  const onLeave = (e) => { if (e.pointerType === 'touch' && e.target === over && isOn() && machine.cross) e.stopImmediatePropagation(); };
  win.addEventListener('pointerdown', onDown, true);
  win.addEventListener('pointermove', onMove, true);
  win.addEventListener('pointerup', onUp, true);
  win.addEventListener('pointercancel', onUp, true);
  for (const type of ['pointerleave', 'pointerout']) win.addEventListener(type, onLeave, true);

  // ---- the buttons: Click (press and hold = drag) and Enter ----
  const btn = (cls, icon, label) => {
    const b = el('button', { type: 'button', className: 'cc-key cc-touchx-btn ' + cls, title: label, 'aria-label': label }, el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }), el('span', {}, ' ' + label));
    Object.assign(b.style, { minWidth: '4.5rem', minHeight: '3.25rem', touchAction: 'none', userSelect: 'none' });
    return b;
  };
  const clickBtn = btn('is-click', 'bi-cursor-fill', t('touchx.click'));
  const enterBtn = btn('is-enter', 'bi-arrow-return-left', t('touchx.enter'));
  const pad = el('div', { className: 'cc-touchx-pad', role: 'toolbar', 'aria-label': t('touchx.pad'), hidden: true }, clickBtn, enterBtn);
  pad.dataset.touchCrosshairPad = '';
  Object.assign(pad.style, { position: 'absolute', bottom: '0.75rem', zIndex: '4', display: 'flex', gap: '0.5rem', touchAction: 'none' });
  clickBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    try { clickBtn.setPointerCapture(e.pointerId); } catch { /* a synthetic pointer */ }
    act(machine.press(now()));
  });
  const letGo = (e) => { e.preventDefault(); act(machine.release(now())); win.setTimeout(restore, 0); };
  clickBtn.addEventListener('pointerup', letGo);
  clickBtn.addEventListener('pointercancel', letGo);
  clickBtn.addEventListener('click', (e) => { if (e.detail === 0) { act(machine.press(now())); act(machine.release(now())); } });   // a keyboard or assistive click
  enterBtn.addEventListener('pointerdown', (e) => e.preventDefault());
  enterBtn.addEventListener('click', () => { act(machine.enter()); win.setTimeout(restore, 0); });
  (over.parentElement || root).append(pad);

  // ---- the status bar switch (touch devices only) and Settings ----
  const toggle = el('button', { type: 'button', className: 'cc-toggle', title: t('touchx.toggle.title'), 'aria-pressed': 'false', hidden: true }, t('touchx.toggle'));
  toggle.dataset.touchCrosshairToggle = '';
  toggle.addEventListener('click', () => { api.set({ mode: isOn() ? 'off' : 'on' }); status(t(isOn() ? 'touchx.on' : 'touchx.off')); });
  if (toggles) toggles.prepend(toggle);

  function render() {
    const on = isOn();
    toggle.hidden = !hasTouch;
    toggle.setAttribute('aria-pressed', String(on));
    pad.hidden = !on;
    pad.style.left = prefs.side === 'left' ? '0.75rem' : '';     // the buttons sit under the other hand's thumb
    pad.style.right = prefs.side === 'left' ? '' : '0.75rem';
    root.classList.toggle('cc-touchx-on', on);
    if (settingsDlg) {
      settingsDlg.querySelectorAll('input[name="ccTouchx"]').forEach((r) => { r.checked = r.value === prefs.mode; });
      settingsDlg.querySelectorAll('input[name="ccTouchxSide"]').forEach((r) => { r.checked = r.value === prefs.side; });
      settingsDlg.querySelectorAll('input[name="ccTouchxDistance"]').forEach((r) => { r.min = TOUCH_CROSSHAIR_LIMITS.min; r.max = TOUCH_CROSSHAIR_LIMITS.max; r.value = prefs.distance; });
      settingsDlg.querySelectorAll('[data-touch-crosshair-distance]').forEach((o) => { o.textContent = t('touchx.set.distance.px', { n: prefs.distance }); });
    }
  }
  settingsDlg?.addEventListener('change', (e) => {
    if (e.target.name === 'ccTouchx') api.set({ mode: e.target.value });
    else if (e.target.name === 'ccTouchxSide') api.set({ side: e.target.value });
    else if (e.target.name === 'ccTouchxDistance') api.set({ distance: Number(e.target.value) });
  });
  settingsDlg?.addEventListener('input', (e) => { if (e.target.name === 'ccTouchxDistance') api.set({ distance: Number(e.target.value) }); });

  const api = {
    get available() { return hasTouch; },
    prefs: () => ({ ...prefs, on: isOn() }),
    set(change = {}) {
      const was = isOn();
      prefs = cleanTouchPrefs({ ...prefs, ...change });
      machine.configure(prefs);
      try { win.localStorage.setItem(KEY, JSON.stringify(prefs)); } catch { /* a private window: for this visit only */ }
      if (was && !isOn()) { act(machine.reset()); mine.clear(); }
      render();
      return api.prefs();
    },
    machine,
  };
  render();
  return api;
}
