/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pointer-perf.js — keeping a pointer move over the drawing cheap (0.9.1, suggestion #1504: "the cursor jumps around the
 * screen" on a 2013 dual-core laptop with integrated graphics).
 *
 * What was measured (tools/cadcraft-test/browser-pointer-lag.mjs): on an empty drawing a move cost little in CadCraft's own
 * handler, but it wrote the coordinate readout with `textContent =` and rebuilt the dynamic-input box, and each of those
 * swaps nodes in the page. Every observer of the page's tree then ran on every move (toolbar rows, tooltips, tab strips,
 * menu states) and measured the page again. So the parts here are:
 *
 *   setText / patchSpans   change words in place: no node is added or removed, nothing is written when nothing changed
 *   frameGate              pointer moves that arrive faster than the screen draws are folded into one update per frame
 *   BoxGrid                which objects are near a point, without walking every object of a big drawing
 *   PointerGovernor        watches the frames while the pointer moves; on a computer that stays slow it asks the app to
 *                          turn the costly extras down (Settings › CadCraft › Smoother pointer on slower computers)
 *
 * Nothing here knows CadCraft: no imports, and only setText / patchSpans touch the page. A candidate for a shared library
 * once another app needs it.
 */

/** Put `text` in `el` through one text node (`node`, kept by the caller) → that node. Writes only when the words differ. */
export function setText(el, node, text) {
  text = String(text);
  if (!node || node.parentNode !== el || el.childNodes.length !== 1) {   // first use, or someone else wrote the element
    if (el.childNodes.length === 1 && el.firstChild.nodeType === 3) node = el.firstChild;
    else { node = el.ownerDocument.createTextNode(text); el.replaceChildren(node); return node; }
  }
  if (node.data !== text) node.data = text;
  return node;
}

/**
 * Make `box` hold one <span> per part ({ className, text }), reusing the spans it has. → true when anything changed.
 * The spans are rebuilt only when their number changes; otherwise class names and words are changed in place.
 */
export function patchSpans(box, parts) {
  const kids = box.children;
  let changed = false;
  if (kids.length !== parts.length || box.childNodes.length !== parts.length) {
    const doc = box.ownerDocument;
    box.replaceChildren(...parts.map((p) => { const s = doc.createElement('span'); s.className = p.className; s.append(doc.createTextNode(String(p.text ?? ''))); return s; }));
    return true;
  }
  for (let i = 0; i < parts.length; i++) {
    const s = kids[i], p = parts[i], text = String(p.text ?? '');
    if (s.className !== p.className) { s.className = p.className; changed = true; }
    const n = s.firstChild;
    if (n && n.nodeType === 3 && s.childNodes.length === 1) { if (n.data !== text) { n.data = text; changed = true; } }
    else { s.textContent = text; changed = true; }
  }
  return changed;
}

/**
 * One update per frame. gate.push(run) runs `run` at once when no update ran in this frame yet (so one move per frame, the
 * usual case, behaves exactly as before), else keeps only the newest for the frame's start. gate.flush() runs a kept one
 * now (before a click, a key, or the frame is drawn).
 *   frame(cb)   asks for a frame (requestAnimationFrame); now()   a clock in ms
 */
export function frameGate({ frame, now = () => performance.now(), gap = 12 }) {
  let last = -Infinity, kept = null, asked = false;
  const flush = () => { if (!kept) return false; const run = kept; kept = null; last = now(); run(); return true; };
  return {
    push(run) {
      if (!kept && now() - last >= gap) { last = now(); run(); return true; }
      kept = run;
      if (!asked) { asked = true; frame(() => { asked = false; flush(); }); }
      return false;
    },
    flush,
    get waiting() { return !!kept; },
  };
}

/**
 * A grid over the objects' boxes: near(x, y, r) → the ids whose box may come within r of the point, in the order they were
 * given. Built once per drawing version (the caller keeps it beside its bounds), so a move over a 25,000-object drawing
 * tests the few objects in one cell instead of all of them.
 *   entries: iterable of [id, { minX, minY, maxX, maxY }]; a box that is not finite, or `always(id)` true, goes in a list
 *   that every query returns (rays, construction lines).
 */
export class BoxGrid {
  constructor(entries, { always = null, target = 4 } = {}) {
    const items = [];
    this.loose = [];
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, n = 0;
    for (const [id, b] of entries) {
      const order = n++;
      if (!b || (always && always(id)) || !(Number.isFinite(b.minX) && Number.isFinite(b.minY) && Number.isFinite(b.maxX) && Number.isFinite(b.maxY))) { if (b) this.loose.push([order, id]); continue; }
      items.push([order, id, b]);
      if (b.minX < x0) x0 = b.minX; if (b.minY < y0) y0 = b.minY; if (b.maxX > x1) x1 = b.maxX; if (b.maxY > y1) y1 = b.maxY;
    }
    this.count = n;
    this.x0 = x0; this.y0 = y0;
    const w = Math.max(x1 - x0, 1e-9), h = Math.max(y1 - y0, 1e-9);
    // about `target` objects a cell; never more than 512 cells a side
    const cells = Math.max(1, Math.ceil(items.length / target));
    const aspect = w / h;
    this.nx = Math.max(1, Math.min(512, Math.round(Math.sqrt(cells * aspect))));
    this.ny = Math.max(1, Math.min(512, Math.round(Math.sqrt(cells / aspect))));
    this.cw = w / this.nx; this.ch = h / this.ny;
    this.cells = new Map();
    // an object that covers many cells (a border, a long line) would be written into all of them: past this it is "loose"
    const MANY = Math.max(64, (this.nx * this.ny) >> 4);
    for (const [order, id, b] of items) {
      const i0 = this.ix(b.minX), i1 = this.ix(b.maxX), j0 = this.iy(b.minY), j1 = this.iy(b.maxY);
      if ((i1 - i0 + 1) * (j1 - j0 + 1) > MANY) { this.loose.push([order, id]); continue; }
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const k = j * this.nx + i;
        let c = this.cells.get(k);
        if (!c) this.cells.set(k, (c = []));
        c.push([order, id]);
      }
    }
    this.loose.sort((a, b) => a[0] - b[0]);
  }
  ix(x) { return Math.max(0, Math.min(this.nx - 1, Math.floor((x - this.x0) / this.cw))); }
  iy(y) { return Math.max(0, Math.min(this.ny - 1, Math.floor((y - this.y0) / this.ch))); }
  /** Ids whose box may be within r of (x, y): a superset, in the order given to the constructor. */
  near(x, y, r = 0) {
    const i0 = this.ix(x - r), i1 = this.ix(x + r), j0 = this.iy(y - r), j1 = this.iy(y + r);
    if (i0 === i1 && j0 === j1 && !this.loose.length) return (this.cells.get(j0 * this.nx + i0) || NONE).map((e) => e[1]);
    const seen = new Set(), out = [];
    for (const e of this.loose) out.push(e);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const c = this.cells.get(j * this.nx + i);
      if (c) for (const e of c) if (!seen.has(e[1])) { seen.add(e[1]); out.push(e); }
    }
    out.sort((a, b) => a[0] - b[0]);
    return out.map((e) => e[1]);
  }
}
const NONE = [];

export const POINTER_MODES = ['auto', 'on', 'off'];

/**
 * Decides whether the pointer runs "light".
 *   mode 'on'  → always light;  'off' → never;  'auto' → light once the computer has shown it cannot keep up.
 * Feed it every frame drawn while the pointer moves: governor.frame(ms since the frame before). In 'auto', frames are
 * judged in windows of `window` frames; a window is slow when its median is over `slowMs` (under about 22 frames a second).
 * `need` slow windows in a row turn light on (several seconds of moving the pointer, so one hiccup — a file opening, a tab
 * waking — does not). It stays on (the caller stores it) until the person sets the setting again.
 *   frame() → 'down' the one time it turns light on, else null.
 */
export class PointerGovernor {
  constructor({ mode = 'auto', stepped = false, window = 30, slowMs = 45, need = 3, skipMs = 400 } = {}) {
    this.mode = POINTER_MODES.includes(mode) ? mode : 'auto';
    this.stepped = !!stepped;         // 'auto' has turned light on before (remembered by the caller)
    this.window = window; this.slowMs = slowMs; this.need = need; this.skipMs = skipMs;
    this.buf = []; this.slowRun = 0; this.last = null;
  }
  get light() { return this.mode === 'on' || (this.mode === 'auto' && this.stepped); }
  setMode(mode) {
    this.mode = POINTER_MODES.includes(mode) ? mode : 'auto';
    this.stepped = false; this.buf = []; this.slowRun = 0;   // choosing again starts the watching again
  }
  /** A pause (the pointer stopped, the tab was hidden): the next frame does not count against the one before. */
  rest() { this.buf = []; this.slowRun = 0; }
  frame(dt) {
    if (this.mode !== 'auto' || this.stepped || !(dt > 0)) return null;
    if (dt > this.skipMs) { this.buf = []; return null; }   // a stall that long is something else (a file opening), not the pointer
    this.buf.push(dt);
    if (this.buf.length < this.window) return null;
    const s = this.buf.sort((a, b) => a - b), med = s[s.length >> 1];
    this.buf = [];
    this.last = med;
    if (med > this.slowMs) this.slowRun++; else this.slowRun = 0;
    if (this.slowRun < this.need) return null;
    this.stepped = true;
    return 'down';
  }
}
