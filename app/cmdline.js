/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cmdline.js — where the command line sits and how tall it is (0.9 SU.1083, session cad-cmdline-09; suggestion #1083: "make the
 * command line resizable, much thinner and floating, and shrink the top commands area").
 *
 *   dock   'bottom' — the grid row under the drawing, as it always was | 'float' — over the drawing, moved by its grip (drag, or the
 *          arrow keys on the grip), its place kept as fractions of the free room so it stays put when the window changes size.
 *          Dragged onto the status bar (or Down on the grip at the bottom edge) it docks again.
 *   lines  null — the standard height (as before; the short-window fit in cadcraft.js still shrinks it) | 0 — one line: the history
 *          is hidden (still read out: the same aria-live list, only clipped), a new message peeks above the line for a moment, and
 *          F2 / the history button opens the history | 1–LINES_MAX — that many history lines. The handle on the top edge drags it
 *          (a separator: Up / Down, Home = one line, End = the most; a double-click goes between one line and the last height).
 *   w      the floating width in rem (the handle on the right edge; null = min(52 rem, 80 %)).
 *   The history pop-up (F2, the history button, the options menu): the same <ol> laid over the drawing (below the line when the
 *   line floats near the top); Esc, F2 or a click elsewhere closes it; PageUp / PageDown in the command line scroll it. Typing
 *   stays in the command line all the time.
 *
 * Stored in the shell's layout storage: localStorage "cc-app-settings:<slug>" → cmdline {dock, lines, fx, fy, w} (app-settings.js
 * keeps the field on its saves), so Work environments (WS.24) carry it. Settings › Reset and Settings › General › Reset the layout
 * put it back (cadcraft.js calls reset()). Phones (html.cc-phone) always dock it and keep their own one-line history; the pop-up
 * still works there.
 *
 * cleanState() is DOM-free (bin/test-cadcraft.mjs); installCmdLine() is the page side.
 */

export const LINES_MAX = 12;
export const DEFAULTS = Object.freeze({ dock: 'bottom', lines: null, fx: 0.5, fy: 0.92, w: null });
const W_MIN = 24, W_MAX = 160;   // rem

const num = (v, lo, hi) => (typeof v === 'number' && Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : null);

/** A stored (untrusted) value → a whole state; anything odd falls back to the default. */
export function cleanState(v) {
  const s = { ...DEFAULTS };
  if (!v || typeof v !== 'object') return s;
  if (v.dock === 'float' || v.dock === 'bottom') s.dock = v.dock;
  if (v.lines === null || (Number.isInteger(v.lines) && v.lines >= 0 && v.lines <= LINES_MAX)) s.lines = v.lines;
  const fx = num(v.fx, 0, 1), fy = num(v.fy, 0, 1), w = num(v.w, W_MIN, W_MAX);
  if (fx !== null) s.fx = fx;
  if (fy !== null) s.fy = fy;
  if (w !== null) s.w = Math.round(w * 2) / 2;
  return s;
}
/** The state as stored, or null when it is the default (nothing to keep). */
export function storedForm(s) {
  const d = DEFAULTS;
  if (s.dock === d.dock && s.lines === d.lines && s.w === d.w && s.fx === d.fx && s.fy === d.fy) return null;
  return { dock: s.dock, lines: s.lines, fx: Math.round(s.fx * 1000) / 1000, fy: Math.round(s.fy * 1000) / 1000, w: s.w };
}
/** Next line count for a key on the height handle. */
export function stepLines(lines, key) {
  const n = lines === null ? 4 : lines;
  if (key === 'ArrowUp' || key === 'ArrowRight') return Math.min(LINES_MAX, n + 1);
  if (key === 'ArrowDown' || key === 'ArrowLeft') return Math.max(0, n - 1);
  if (key === 'Home') return 0;
  if (key === 'End') return LINES_MAX;
  return lines;
}

/**
 * @param o {root, bar, history, form, input, settingsDlg, slug, t, status, focus, shortcutTaken(key) → bool}
 * @returns {state(), set(partial), dock(mode), lines(n), history(open?), isOpen(), reset(), place()}
 */
export function installCmdLine(o) {
  const { root, bar, history, input, t } = o;
  const KEY = 'cc-app-settings:' + (o.slug || 'cadcraft');
  const $ = (s) => bar.querySelector(s);
  const grip = $('[data-cmd-grip]'), size = $('[data-cmd-size]'), wsize = $('[data-cmd-wsize]'), histBtn = $('[data-cmd-hist]'), more = $('[data-cmd-more]'), peek = $('[data-cmd-peek]');
  const phone = () => document.documentElement.classList.contains('cc-phone');
  const rem = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const say = (k, v) => o.status?.(t(k, v));

  let st = load();
  let lastLines = st.lines || 4;   // where a double-click on the height handle goes back to
  let open = false;

  function load() { try { const all = JSON.parse(localStorage.getItem(KEY) || '{}'); return cleanState(all && all.cmdline); } catch { return { ...DEFAULTS }; } }
  function save() {
    try {
      const all = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
      const v = storedForm(st);
      if (v) all.cmdline = v; else delete all.cmdline;
      if (Object.keys(all).length) localStorage.setItem(KEY, JSON.stringify(all)); else localStorage.removeItem(KEY);
    } catch { /* private window: this tab only */ }
  }

  const floating = () => st.dock === 'float' && !phone();
  const linesLabel = (n) => (n === null ? t('cmdline.lines.std') : n === 0 ? t('cmdline.lines.one') : t('cmdline.lines.n', { n }));

  /** Attributes, the height, the place. */
  function apply() {
    bar.dataset.cmdDock = floating() ? 'float' : 'bottom';
    bar.dataset.cmdLines = st.lines === null ? 'std' : st.lines === 0 ? 'one' : 'n';
    if (st.lines) bar.style.setProperty('--cc-cmd-lines', String(st.lines)); else bar.style.removeProperty('--cc-cmd-lines');
    size.setAttribute('aria-valuenow', String(st.lines === null ? 4 : st.lines));
    size.setAttribute('aria-valuetext', linesLabel(st.lines));
    wsize.hidden = !floating();
    for (const b of bar.querySelectorAll('[data-cmd-opt]')) {
      const k = b.dataset.cmdOpt;
      b.hidden = (k === 'float' && floating()) || (k === 'dock' && !floating()) || (k === 'one' && st.lines === 0) || (k === 'lines' && st.lines !== 0)
        || (phone() && (k === 'float' || k === 'dock' || k === 'one' || k === 'lines'));
    }
    syncSettings();
    place();
  }

  /** The floating line's box inside <main>, from the stored fractions (clamped: always fully inside). */
  function place() {
    if (!floating()) { bar.style.left = bar.style.top = bar.style.width = ''; return; }
    const W = root.clientWidth, H = root.clientHeight, r = rem();
    const w = Math.max(Math.min(W_MIN * r, W - 8), Math.min(W - 8, (st.w ?? Math.min(52, (W * 0.8) / r)) * r));
    bar.style.width = Math.round(w) + 'px';
    const h = bar.offsetHeight;
    bar.style.left = Math.round(Math.max(0, W - w) * st.fx) + 'px';
    bar.style.top = Math.round(Math.max(0, H - h) * st.fy) + 'px';
    if (open) popSide();
  }
  /** From a box (px inside <main>) back to the fractions. */
  function keepPlace(x, y) {
    const W = root.clientWidth, H = root.clientHeight, w = bar.offsetWidth, h = bar.offsetHeight;
    st.fx = W - w > 0 ? Math.min(1, Math.max(0, x / (W - w))) : 0.5;
    st.fy = H - h > 0 ? Math.min(1, Math.max(0, y / (H - h))) : 1;
  }

  function set(p, quiet) {
    const was = { ...st };
    st = cleanState({ ...st, ...p });
    if (st.lines) lastLines = st.lines;
    apply();
    save();   // the drawing measures itself again (view.js observes its box)
    if (quiet) return;
    if (was.dock !== st.dock) say(st.dock === 'float' ? 'status.cmdline.float' : 'status.cmdline.dock');
    else if (was.lines !== st.lines) say(st.lines === 0 ? 'status.cmdline.one' : 'status.cmdline.lines', { lines: linesLabel(st.lines) });
  }

  // ---- the history pop-up ----
  function popSide() {
    const r = bar.getBoundingClientRect(), m = root.getBoundingClientRect();
    bar.classList.toggle('is-pop-down', floating() && r.top - m.top < Math.min(22 * rem(), m.height * 0.55));
  }
  function setOpen(v) {
    v = !!v;
    if (v === open) return;
    open = v;
    if (v) { if (!floating()) bar.style.minHeight = bar.offsetHeight + 'px'; popSide(); } else { bar.style.minHeight = ''; bar.classList.remove('is-pop-down'); }
    bar.classList.toggle('is-pop', v);
    histBtn.setAttribute('aria-expanded', String(v));
    histBtn.setAttribute('aria-pressed', String(v));
    if (v) { hidePeek(); history.scrollTop = history.scrollHeight; }
  }
  histBtn.addEventListener('click', () => { setOpen(!open); o.focus?.(); });
  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); setOpen(false); o.focus?.(); }
  }, true);
  input.addEventListener('keydown', (e) => {
    if (!open || (e.key !== 'PageUp' && e.key !== 'PageDown')) return;
    e.preventDefault();
    history.scrollTop += (e.key === 'PageUp' ? -1 : 1) * Math.max(40, history.clientHeight - 30);
  });
  document.addEventListener('pointerdown', (e) => { if (open && !bar.contains(e.target)) setOpen(false); });
  // F2, as in the familiar desktop CAD programs (registry view.cmdhistory; a key of your own on F2 wins)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'F2' || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.defaultPrevented) return;
    if (document.querySelector('dialog[open]')) return;
    const tg = e.target;
    if (tg && tg !== input && (tg.tagName === 'INPUT' || tg.tagName === 'TEXTAREA' || tg.tagName === 'SELECT' || tg.isContentEditable)) return;
    if (o.shortcutTaken?.('F2')) return;
    e.preventDefault();
    setOpen(!open);
    o.focus?.();
  });

  // ---- one line: a new message peeks above the line for a moment ----
  let peekTimer = 0;
  function hidePeek() { clearTimeout(peekTimer); peek.hidden = true; peek.textContent = ''; }
  new MutationObserver(() => {
    if (st.lines !== 0 || open || phone()) return;
    const items = [...history.children].slice(-2).map((li) => li.textContent).filter(Boolean);
    if (!items.length) return;
    peek.textContent = items.join('\n');
    peek.hidden = false;
    popSide();
    clearTimeout(peekTimer);
    peekTimer = setTimeout(hidePeek, 4500);
  }).observe(history, { childList: true });

  // ---- moving it: the grip ----
  let drag = null;
  grip.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || phone()) return;
    e.preventDefault();
    try { grip.setPointerCapture(e.pointerId); } catch { /* synthetic */ }
    const b = bar.getBoundingClientRect(), m = root.getBoundingClientRect();
    drag = { sx: e.clientX, sy: e.clientY, dx: e.clientX - b.left, dy: e.clientY - b.top, m, moved: false };
  });
  grip.addEventListener('pointermove', (e) => {
    if (!drag) return;
    if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 6) return;
    const m = root.getBoundingClientRect();
    if (!drag.moved) {
      drag.moved = true;
      bar.classList.add('is-moving');
      if (st.dock !== 'float') {   // undock: the line keeps its place under the pointer, at the floating width
        const b = bar.getBoundingClientRect();
        st.dock = 'float';
        drag.undocked = true;
        apply();
        drag.dx = Math.min(drag.dx, bar.offsetWidth - 8);
        keepPlace(b.left - m.left, b.top - m.top - Math.max(0, bar.offsetHeight - b.height));
        place();
      }
    }
    keepPlace(e.clientX - m.left - drag.dx, e.clientY - m.top - drag.dy);
    place();
    bar.classList.toggle('is-dock-target', overDockZone(e.clientY));
  });
  function overDockZone(y) {
    const m = root.getBoundingClientRect(), s = root.querySelector('.cc-status');
    const sh = s && s.getClientRects().length ? s.getBoundingClientRect().height : 0;
    return y >= m.bottom - sh - 4;
  }
  const endDrag = (e) => {
    if (!drag) return;
    const d = drag;
    drag = null;
    bar.classList.remove('is-moving', 'is-dock-target');
    if (!d.moved) return;
    if (e && e.type === 'pointerup' && overDockZone(e.clientY)) { set({ dock: 'bottom' }); return; }
    if (d.undocked) say('status.cmdline.float');
    set({}, true);
  };
  grip.addEventListener('pointerup', endDrag);
  grip.addEventListener('pointercancel', endDrag);
  grip.addEventListener('keydown', (e) => {
    if (phone() || !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    if (!floating()) { if (e.key === 'ArrowUp') set({ dock: 'float' }); return; }
    if (e.key === 'ArrowDown' && st.fy >= 1) { set({ dock: 'bottom' }); return; }
    const step = e.shiftKey ? 0.1 : 0.02;
    const p = { fx: st.fx, fy: st.fy };
    if (e.key === 'ArrowLeft') p.fx -= step; if (e.key === 'ArrowRight') p.fx += step;
    if (e.key === 'ArrowUp') p.fy -= step; if (e.key === 'ArrowDown') p.fy += step;
    set({ fx: Math.min(1, Math.max(0, p.fx)), fy: Math.min(1, Math.max(0, p.fy)) }, true);
  });

  // ---- the height: the top edge ----
  let sz = null;
  const lineH = () => (parseFloat(getComputedStyle(history).fontSize) || 13) * 1.4;
  size.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || phone()) return;
    e.preventDefault();
    try { size.setPointerCapture(e.pointerId); } catch { /* synthetic */ }
    const hh = st.lines === 0 ? 0 : history.getBoundingClientRect().height;
    sz = { y: e.clientY, h: hh, bottom: bar.getBoundingClientRect().bottom, moved: false };
  });
  size.addEventListener('pointermove', (e) => {
    if (!sz) return;
    const raw = sz.h + (sz.y - e.clientY);
    if (!sz.moved && Math.abs(sz.y - e.clientY) < 3) return;
    sz.moved = true;
    const n = Math.max(0, Math.min(LINES_MAX, Math.round((raw - 0.3 * rem()) / lineH())));
    if (n === st.lines) return;
    resizeKeepBottom(n, true);
  });
  const endSize = () => { if (sz?.moved) { save(); say(st.lines === 0 ? 'status.cmdline.one' : 'status.cmdline.lines', { lines: linesLabel(st.lines) }); } sz = null; };
  size.addEventListener('pointerup', endSize);
  size.addEventListener('pointercancel', endSize);
  size.addEventListener('dblclick', () => resizeKeepBottom(st.lines === 0 ? lastLines : 0, false));
  size.addEventListener('keydown', (e) => {
    const n = stepLines(st.lines, e.key);
    if (n === st.lines && !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    if (n !== st.lines) resizeKeepBottom(n, false);
  });
  /** A new height; a floating line keeps its bottom edge where it was (it grows upwards). */
  function resizeKeepBottom(n, quiet) {
    const m = root.getBoundingClientRect(), b = bar.getBoundingClientRect();
    if (floating()) {
      st = cleanState({ ...st, lines: n });
      if (st.lines) lastLines = st.lines;
      apply();
      keepPlace(b.left - m.left, b.bottom - m.top - bar.offsetHeight);
      place();
      if (quiet) return;
      set({}, true);
      say(st.lines === 0 ? 'status.cmdline.one' : 'status.cmdline.lines', { lines: linesLabel(st.lines) });
      return;
    }
    if (quiet) { st = cleanState({ ...st, lines: n }); if (st.lines) lastLines = st.lines; apply(); return; }
    set({ lines: n });
  }

  // ---- the width (floating only): the right edge ----
  let ws = null;
  wsize.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || !floating()) return;
    e.preventDefault();
    try { wsize.setPointerCapture(e.pointerId); } catch { /* synthetic */ }
    const b = bar.getBoundingClientRect(), m = root.getBoundingClientRect();
    ws = { x: e.clientX, w: b.width, left: b.left - m.left, top: b.top - m.top };
  });
  wsize.addEventListener('pointermove', (e) => {
    if (!ws) return;
    const r = rem(), W = root.clientWidth;
    const w = Math.max(W_MIN * r, Math.min(W - ws.left, ws.w + e.clientX - ws.x));
    st.w = Math.round((w / r) * 2) / 2;
    bar.style.width = Math.round(w) + 'px';
    keepPlace(ws.left, ws.top);
  });
  const endW = () => { if (ws) { ws = null; set({}, true); } };
  wsize.addEventListener('pointerup', endW);
  wsize.addEventListener('pointercancel', endW);
  wsize.addEventListener('keydown', (e) => {
    if (!floating() || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    const cur = bar.getBoundingClientRect().width / rem();
    set({ w: Math.max(W_MIN, Math.min(W_MAX, Math.round(cur + (e.key === 'ArrowRight' ? 2 : -2)))) }, true);
  });

  // ---- the options menu (a details.cc-menu: cadcraft.js gives it Esc and the arrow keys) ----
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cmd-opt]');
    if (!b) return;
    more.open = false;
    const k = b.dataset.cmdOpt;
    if (k === 'float') set({ dock: 'float' });
    else if (k === 'dock') set({ dock: 'bottom' });
    else if (k === 'one') set({ lines: 0 });
    else if (k === 'lines') set({ lines: lastLines || null });
    else if (k === 'history') setOpen(true);
    else if (k === 'settings') { openSettings(); return; }
    o.focus?.();
  });
  function openSettings() {
    const dlg = o.settingsDlg;
    document.querySelector('[data-settings-open]')?.click();
    setTimeout(() => {
      const fs = dlg?.querySelector('[data-cmdline-settings]');
      const tab = dlg?.querySelector('[data-settings-tab="app"]');
      if (fs && !fs.getClientRects().length) tab?.click();
      fs?.scrollIntoView({ block: 'center' });
      fs?.querySelector('input:checked, input')?.focus();
    }, 60);
  }

  // ---- Settings › CadCraft › Command line ----
  const dlg = o.settingsDlg;
  function syncSettings() {
    if (!dlg) return;
    dlg.querySelectorAll('input[name="ccCmdDock"]').forEach((r) => { r.checked = r.value === st.dock; });
    const range = dlg.querySelector('input[name="ccCmdLines"]'), out = dlg.querySelector('[data-cmd-lines-out]');
    if (range) { range.value = String(st.lines === null ? 4 : st.lines); range.setAttribute('aria-valuetext', linesLabel(st.lines)); }
    if (out) out.textContent = linesLabel(st.lines);
  }
  if (dlg) {
    dlg.addEventListener('change', (e) => { if (e.target.name === 'ccCmdDock') set({ dock: e.target.value }); });
    dlg.addEventListener('input', (e) => { if (e.target.name === 'ccCmdLines') set({ lines: Math.max(0, Math.min(LINES_MAX, parseInt(e.target.value, 10) || 0)) }); });
    dlg.addEventListener('click', (e) => { if (e.target.closest('[data-cmd-std]')) set({ lines: null }); });
    dlg.addEventListener('cc-settings-reset', () => reset());
  }

  function reset() { setOpen(false); set({ ...DEFAULTS }, true); }

  new ResizeObserver(() => { if (floating() && !drag && !ws) place(); }).observe(root);
  let wasPhone = phone();
  new MutationObserver(() => { if (phone() !== wasPhone) { wasPhone = phone(); setOpen(false); apply(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });   // phone ↔ desktop
  window.addEventListener('storage', (e) => { if (e.key === KEY) { st = load(); apply(); } });
  apply();

  return {
    state: () => ({ ...st }),
    set: (p) => set(p),
    dock: (mode) => set({ dock: mode === 'float' ? 'float' : 'bottom' }),
    lines: (n) => set({ lines: n === null ? null : Math.max(0, Math.min(LINES_MAX, n | 0)) }),
    history: (v) => setOpen(v === undefined ? !open : v),
    isOpen: () => open,
    reset,
    place,
  };
}
