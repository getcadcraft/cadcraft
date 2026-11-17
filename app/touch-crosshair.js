/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — action and option names; nothing here is read by a person. */
/**
 * touch-crosshair.js — the offset crosshair for drafting with a finger (1.0 ORS.20). DOM-free, import-free: touch events
 * in, crosshair moves and clicks out. The page side is touch-crosshair-ui.js.
 *
 * A fingertip covers the point it picks. In this mode one finger on the drawing does not click: it moves a crosshair that
 * sits `distance` px above the finger and to one side (`side` 'left' for a right hand, 'right' for a left hand). Object
 * snaps and tracking then work on the crosshair, because the caller hands the crosshair's position to the app as a plain
 * pointer move. Lifting the finger clicks nothing and leaves the crosshair where it is. A click comes from
 *   the on-screen button     press() … release(): pressed = button down at the crosshair, so holding it while the other
 *                            finger moves is a drag (a window, a lasso, a grip)
 *   a second-finger tap      a second finger that lands and lifts within `tapMs` while neither finger moved more than `slop`
 * A finger pressed and held still for `longPressMs` from the moment it landed is a right click (Enter). A finger that
 * has already moved the crosshair never long-presses, so holding still to aim is safe.
 * Two fingers that move pan and pinch-zoom, as without the mode.
 *
 * Near the bottom edge and the edge on the crosshair's side the offset shrinks to nothing, so the crosshair can reach every
 * point of the drawing area (within `distance` of those edges the crosshair moves twice as fast as the finger).
 *
 *   const tc = new TouchCrosshair({ distance: 72, side: 'left', width, height });
 *   tc.down(id, x, y, t) / tc.move(id, x, y, t) / tc.up(id, t) / tc.cancel() / tc.tick(t)   → actions[]
 *   tc.press(t) / tc.release(t) / tc.enter()                                               → actions[]   (the buttons)
 *   tc.timer   null, or the time `tick` must be called at (the long press)
 *   tc.cross   { x, y } | null: where the crosshair is
 * Positions are px over the drawing area (0,0 = its top left), times ms. Actions:
 *   { type: 'move', x, y }                    the crosshair moved (a pointer move with no button)
 *   { type: 'down' | 'up', x, y, button }     0 = left, 2 = right; a click is a down then an up
 *   { type: 'pan', dx, dy }  { type: 'zoom', x, y, factor }      two fingers
 *   { type: 'abort' }                         a second finger landed while the button was held: drop the drag
 */

export const TOUCH_CROSSHAIR_DEFAULTS = Object.freeze({ distance: 72, side: 'left', longPressMs: 550, tapMs: 350, slop: 10 });
export const TOUCH_CROSSHAIR_LIMITS = Object.freeze({ min: 24, max: 240 });

/** Options as the machine uses them: a distance within the limits, a known side. */
export function cleanTouchOptions(o = {}) {
  const d = Number(o.distance);
  return {
    distance: Number.isFinite(d) ? Math.min(TOUCH_CROSSHAIR_LIMITS.max, Math.max(TOUCH_CROSSHAIR_LIMITS.min, Math.round(d))) : TOUCH_CROSSHAIR_DEFAULTS.distance,
    side: o.side === 'right' ? 'right' : 'left',
  };
}

/** Where the crosshair sits for a finger at x, y in an area w × h. */
export function crosshairFor(x, y, { distance, side }, w, h) {
  const d = distance;
  // above the finger; within d of the bottom edge the offset shrinks so the bottom edge can be reached
  let cy = y - d;
  if (h > 0 && y > h - d) cy = y - Math.max(0, h - y);
  // to the side; the same toward the edge on that side's far end (the edge the offset points away from)
  let cx;
  if (side === 'right') { cx = x + d; if (x < d) cx = x + Math.max(0, x); }
  else { cx = x - d; if (w > 0 && x > w - d) cx = x - Math.max(0, w - x); }
  if (w > 0) cx = Math.min(w, Math.max(0, cx));
  if (h > 0) cy = Math.min(h, Math.max(0, cy));
  return { x: cx, y: cy };
}

export class TouchCrosshair {
  constructor(o = {}) {
    Object.assign(this, TOUCH_CROSSHAIR_DEFAULTS, cleanTouchOptions(o));
    for (const k of ['longPressMs', 'tapMs', 'slop']) if (Number.isFinite(o[k])) this[k] = o[k];
    this.width = o.width || 0; this.height = o.height || 0;
    this.fingers = new Map();   // id → { x, y, x0, y0 }
    this.cross = null;
    this.mode = 'idle';         // idle | aim | pending (a second finger just landed) | pinch | spent (wait for every finger to lift)
    this.held = false;          // the on-screen button is down
    this.timer = null;
    this.second = null;         // { id, t } while pending
    this.pinch = null;          // { d, cx, cy }
  }
  configure(o) { Object.assign(this, cleanTouchOptions({ distance: this.distance, side: this.side, ...o })); }
  resize(w, h) { this.width = w; this.height = h; }

  down(id, x, y, t = 0) {
    const out = [];
    this.fingers.set(id, { x, y, x0: x, y0: y });
    const n = this.fingers.size;
    if (n === 1) {
      this.mode = 'aim'; this.aimId = id; this.moved = false;
      this.cross = crosshairFor(x, y, this, this.width, this.height);
      this.timer = this.held ? null : t + this.longPressMs;
      out.push({ type: 'move', ...this.cross });
    } else if (n === 2 && this.mode === 'aim') {
      this.timer = null;
      this.mode = 'pending'; this.second = { id, t };
      for (const f of this.fingers.values()) { f.x0 = f.x; f.y0 = f.y; }
    } else {   // a third finger, or a finger after a pinch: nothing until all are up
      this.timer = null; this.second = null; this.pinch = null;
      this.mode = 'spent';
    }
    return out;
  }

  move(id, x, y, t = 0) {
    const f = this.fingers.get(id);
    if (!f) return [];
    f.x = x; f.y = y;
    if (this.mode === 'aim' && id === this.aimId) {
      if (!this.moved && Math.hypot(x - f.x0, y - f.y0) > this.slop) { this.moved = true; this.timer = null; }
      if (!this.moved) return [];   // a finger that only wobbles keeps the crosshair still (and may become a long press)
      this.cross = crosshairFor(x, y, this, this.width, this.height);
      return [{ type: 'move', ...this.cross }];
    }
    if (this.mode === 'pending') {
      let far = false;
      for (const g of this.fingers.values()) if (Math.hypot(g.x - g.x0, g.y - g.y0) > this.slop) far = true;
      if (!far && t - this.second.t <= this.tapMs) return [];
      const out = [];
      if (this.held) { this.held = false; out.push({ type: 'abort' }); }
      this.mode = 'pinch'; this.second = null;
      this.pinch = this.span();
      return out;
    }
    if (this.mode === 'pinch') {
      const now = this.span(), was = this.pinch, out = [];
      if (now.cx !== was.cx || now.cy !== was.cy) out.push({ type: 'pan', dx: now.cx - was.cx, dy: now.cy - was.cy });
      if (now.d > 10 && was.d > 10 && now.d !== was.d) out.push({ type: 'zoom', x: now.cx, y: now.cy, factor: now.d / was.d });
      this.pinch = now;
      return out;
    }
    return [];
  }

  up(id, t = 0) {
    if (!this.fingers.has(id)) return [];
    this.fingers.delete(id);
    const out = [];
    if (this.mode === 'pending') {
      const tap = id === this.second.id && t - this.second.t <= this.tapMs;
      this.second = null;
      if (tap && this.cross) {   // the second finger tapped: a click at the crosshair, and the first finger goes on aiming
        this.mode = 'aim';
        const f = this.fingers.get(this.aimId);
        if (f) { f.x0 = f.x; f.y0 = f.y; }
        if (!this.held) out.push({ type: 'down', ...this.cross, button: 0 }, { type: 'up', ...this.cross, button: 0 });
        return out;
      }
      this.mode = this.fingers.size ? 'spent' : 'idle';
      return out;
    }
    if (this.mode === 'aim') { this.timer = null; this.mode = 'idle'; return out; }   // lifting clicks nothing; the crosshair stays
    if (!this.fingers.size) { this.mode = 'idle'; this.pinch = null; }
    else if (this.mode === 'pinch') { this.mode = 'spent'; this.pinch = null; }
    return out;
  }

  /** The system took the touches away (a call, a gesture of its own). */
  cancel() {
    this.fingers.clear(); this.timer = null; this.second = null; this.pinch = null; this.mode = 'idle';
    if (this.held) { this.held = false; return [{ type: 'abort' }]; }
    return [];
  }

  /** Call at `timer`: a finger held still since it landed is a right click (Enter). */
  tick(t) {
    if (this.timer == null || t < this.timer) return [];
    this.timer = null;
    if (this.mode !== 'aim' || this.moved || this.held || !this.cross) return [];
    this.mode = 'spent';   // the rest of this touch does nothing more
    return [{ type: 'down', ...this.cross, button: 2 }, { type: 'up', ...this.cross, button: 2 }];
  }

  /** The on-screen click button went down / came up. With no crosshair yet there is nothing to click. */
  press() {
    if (!this.cross || this.held || this.mode === 'pinch' || this.mode === 'pending') return [];
    this.held = true; this.timer = null;
    return [{ type: 'down', ...this.cross, button: 0 }];
  }
  release() {
    if (!this.held) return [];
    this.held = false;
    return [{ type: 'up', ...this.cross, button: 0 }];
  }
  /** The on-screen Enter button: a right click at the crosshair. */
  enter() {
    if (!this.cross || this.held) return [];
    return [{ type: 'down', ...this.cross, button: 2 }, { type: 'up', ...this.cross, button: 2 }];
  }
  /** Forget the crosshair (the mode was turned off, the drawing area went away). */
  reset() { const out = this.cancel(); this.cross = null; return out; }

  span() {
    const [a, b] = [...this.fingers.values()];
    return { d: Math.hypot(a.x - b.x, a.y - b.y), cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
  }
}

/** Is the mode on? `pref` 'on' | 'off' | 'auto'; auto = on only where a finger is the main pointer and no mouse, trackpad
 *  or pen-grade pointer is attached (`device` { coarse: the main pointer is coarse, fine: any fine pointer exists }). */
export function touchCrosshairOn(pref, device = {}) {
  if (pref === 'on') return true;
  if (pref === 'off') return false;
  return !!device.coarse && !device.fine;
}

/** Saved preferences made safe: { mode, distance, side }. */
export function cleanTouchPrefs(p = {}) {
  return { mode: ['on', 'off', 'auto'].includes(p && p.mode) ? p.mode : 'auto', ...cleanTouchOptions(p || {}) };
}
