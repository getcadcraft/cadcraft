/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dynin.js — dynamic input: the value fields by the crosshair (0.4 C29; owner: cad-draw). No DOM: bin/test-cadcraft.mjs
 * runs it in Node; cadcraft.js shows the fields and feeds what they say to the command line.
 *
 * While a command asks for a point, two fields follow the pointer: with a base point, the distance and the angle from
 * it ('polar'); without one, X and Y ('xy'). What you type goes into the active field; Tab (or a comma for X) locks it
 * and moves to the next; Enter sends the point. A locked field holds the pointer to it (the distance stays while the
 * angle follows the pointer). Typed text is kept as typed, so feet and inches (12'6") reach the command line whole.
 *
 *   const d = new DynInput(); d.reset('polar' | 'xy' | null)
 *   d.tab(typed, isLength) → true when the typed text was taken (clear the command line)
 *   d.apply(cur, base, parseLen, typed) → the pointer with the locks (and the value being typed) applied
 *   d.live(cur, base) → [value 0, value 1] for the fields (numbers; locked fields give their text)
 *   d.commit(typed, cur, base, { last, parseLen }) → the text to send for Enter, or null (send the typed text as it is)
 *   d.ucs = { x, y, ang } | null   the UCS in force (0.5 DR.8): the fields show and take UCS values; points stay world
 *   d.parseAngle = (text) → degrees | NaN   how an angle field is read (cadcraft.js: units.js readNumber, so 360/7 works,
 *                  0.6 DF.3); plain numbers only by default
 */

import { toUcs, toWorld } from './ucs.js';

const num = (v) => String(Number(v.toFixed(10)));
const ANGLE = /^[-+]?(?:\d+\.?\d*|\.\d+)$/;

export class DynInput {
  constructor() { this.ucs = null; this.parseAngle = (s) => (ANGLE.test(String(s).trim()) ? +s : NaN); this.reset(null); }

  reset(mode) { this.mode = mode; this.locked = [null, null]; this.active = 0; }

  get on() { return !!this.mode; }
  get any() { return this.locked[0] !== null || this.locked[1] !== null; }

  /** Lock the active field with what was typed (when it reads as a value) and move on. */
  tab(typed, isLength) {
    if (!this.mode) return false;
    const s = String(typed ?? '').trim();
    if (s) {
      const angleField = this.mode === 'polar' && this.active === 1;
      if (angleField ? !Number.isFinite(this.parseAngle(s)) : !isLength(s)) return false;
      this.locked[this.active] = s;
    }
    this.active = (this.active + 1) % 2;
    return true;
  }

  apply(cur, base, parseLen, typed = '') {
    if (!this.mode || !cur) return cur;
    if (this.ucs) {   // work in the UCS, hand back a world point
      const u = this.ucs;
      this.ucs = null;
      try { const r = this.apply(toUcs(u, cur), base && toUcs(u, base), parseLen, typed); return r === null || r === undefined ? r : toWorld(u, r); } finally { this.ucs = u; }
    }
    const s = String(typed ?? '').trim();
    if (s && this.locked[this.active] === null) {   // what is being typed counts as if it were locked
      const ok = this.mode === 'polar' && this.active === 1 ? Number.isFinite(this.parseAngle(s)) : Number.isFinite(parseLen(s));
      if (ok) { const keep = this.locked; this.locked = keep.slice(); this.locked[this.active] = s; try { return this.apply(cur, base, parseLen); } finally { this.locked = keep; } }
    }
    if (!this.any) return cur;
    if (this.mode === 'xy') {
      return { x: this.locked[0] !== null ? parseLen(this.locked[0]) : cur.x, y: this.locked[1] !== null ? parseLen(this.locked[1]) : cur.y };
    }
    if (!base) return cur;
    const d = this.locked[0] !== null ? parseLen(this.locked[0]) : Math.hypot(cur.x - base.x, cur.y - base.y);
    const a = this.locked[1] !== null ? this.parseAngle(this.locked[1]) * Math.PI / 180 : Math.atan2(cur.y - base.y, cur.x - base.x);
    return { x: base.x + Math.cos(a) * d, y: base.y + Math.sin(a) * d };
  }

  live(cur, base) {
    if (!this.mode || !cur) return [null, null];
    if (this.ucs) { cur = toUcs(this.ucs, cur); base = base && toUcs(this.ucs, base); }
    if (this.mode === 'xy') return [this.locked[0] ?? cur.x, this.locked[1] ?? cur.y];
    if (!base) return [null, null];
    let a = Math.atan2(cur.y - base.y, cur.x - base.x) * 180 / Math.PI;
    if (a < 0) a += 360;
    return [this.locked[0] ?? Math.hypot(cur.x - base.x, cur.y - base.y), this.locked[1] ?? a];
  }

  commit(typed, cur, base, { last = base, parseLen = Number } = {}) {
    if (!this.mode) return null;
    const s = String(typed ?? '').trim();
    if (!this.any && this.active === 0) return null;   // nothing locked: the command line reads it as always (direct distance…)
    // UCS values, as the command line reads #x,y and @d<a (DR.8)
    const vals = this.live(cur, base).map((v, i) => (i === this.active && s ? s : typeof v === 'number' ? num(v) : v));
    if (vals.some((v) => v === null || v === undefined)) return null;
    if (this.mode === 'xy') return vals[0] + ',' + vals[1];
    // @ counts from the last point given; when the base is another point, send where it lands instead
    if (last && Math.abs(last.x - base.x) < 1e-12 && Math.abs(last.y - base.y) < 1e-12) return '@' + vals[0] + '<' + vals[1];
    const d = parseLen(vals[0]), a = this.parseAngle(vals[1]) * Math.PI / 180, b = toUcs(this.ucs, base);
    if (!Number.isFinite(d) || !Number.isFinite(a)) return null;
    return '#' + num(b.x + Math.cos(a) * d) + ',' + num(b.y + Math.sin(a) * d);
  }
}
