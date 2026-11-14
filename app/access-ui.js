/* SPDX-License-Identifier: Apache-2.0 */
/**
 * access-ui.js — drafting without sight in the page (0.8 EG.52). CadCraft's adapter for the shell's shared module
 * (assets/js/app-access.js, window.ccAccess: the two live regions, sounds, voice and the one Settings switch for every app)
 * and the keyboard cursor on the drawing, over access.js's descriptions. Off until the person turns it on (Settings ›
 * Global › Drafting without sight, or the ACCESS command); with it off nothing here runs.
 *
 * The drawing area becomes a focusable `application` region. Keys there (it is a screen reader's cue to pass keys on):
 *   arrows  move the cursor (Shift ×10, Ctrl ÷10)   Enter  pick the point or object under the cursor
 *   Space  press Enter at the command line (finish a command, take the default)
 *   Tab / Shift+Tab  jump to the next / previous snap point near the cursor   G  next grip of the selection
 *   D  describe the drawing   W  where am I   N  what is near   S  describe the selection   R  say that again
 *   /  go to the command line   ?  list these keys   V  voice on / off
 */
import { t } from './i18n.js';
import { kindName, describeEntity, describeDrawing, describeNear, describeSnap, describeGrip, snapTargets, gripTargets, sayPoint, sayMove, dedupe } from './access.js';

const el = (tag, attrs = {}) => Object.assign(document.createElement(tag), attrs);
const NICE = [1, 2, 5];
/** A step for the arrow keys: about 1/100 of what the screen shows, rounded to 1, 2 or 5 × 10ⁿ. */
export function niceStep(span) {
  const raw = Math.max(span / 100, 1e-9), mag = Math.pow(10, Math.floor(Math.log10(raw)));
  return (NICE.slice().reverse().find((n) => n * mag <= raw * 1.0001) || 1) * mag;
}

export function mountAccess(h) {
  const { doc, view, engine, host, ui, fmt, settings, moveCursor, click, runLine, cancel, known } = h;
  const ctx = () => ({ doc, fmt, t });
  const A = { on: false, cursor: null, lastKey: '', hoverId: null, targets: null, targetAt: -1, gripAt: -1, sel: 0 };
  const shared = () => window.ccAccess || null;
  /** Say something through the shell's live regions (dedupe, batching and "say that again" are its). */
  function say(text, o = {}) { if (A.on && text) shared()?.say(text, o); }
  const beep = (kind) => { if (A.on) shared()?.beep(kind, stageX()); };
  function stageX() {
    const c = A.cursor || host.cursor;
    if (!c) return 0.5;
    const s = view.toScreen(c.x, c.y), w = ui.stage.clientWidth || 1;
    return Math.max(0, Math.min(1, (s.x + (view.x0 || 0)) / w));
  }

  // ---- what the program prints and asks ----
  function onPrint(line) {
    if (!A.on) return;
    const bad = /^(Error:|\*Cancel\*)/.test(line);
    say(line, { urgent: bad });
    if (bad) beep('error');
  }
  function onPrompt(text) { if (A.on && text) say(text); }

  // ---- the cursor: snaps, grips, objects ----
  function snapAt(p) {
    if (!settings.osnap) return null;
    return view.snap(p, { kinds: settings.kinds, base: engine.base || null }) || null;
  }
  function gripNear(p) {
    const tol = 8 / view.zoom;
    return (view.state.grips || []).find((g) => Math.abs(g.x - p.x) <= tol && Math.abs(g.y - p.y) <= tol) || null;
  }
  /** The cursor is at p (by mouse or keys). Sounds and words for what it came onto; `full` (keys) always says where it is. */
  function onMove(p, { full = false } = {}) {
    if (!A.on) return;
    A.cursor = p;
    const g = gripNear(p), sn = g ? null : snapAt(p);
    const key = g ? 'g:' + g.id + g.key : sn ? 's:' + sn.kind + Math.round(sn.x * 1e4) + ':' + Math.round(sn.y * 1e4) : '';
    let words = '';
    if (g) { if (key !== A.lastKey) beep('grip'); if (key !== A.lastKey || full) words = describeGrip(g, ctx()); }
    else if (sn) { if (key !== A.lastKey) beep(sn.kind); if (key !== A.lastKey || full) words = describeSnap(sn, ctx()); }
    else {
      const id = view.pick(p) ?? null;
      if (id !== A.hoverId) { A.hoverId = id; if (id != null) { const e = doc.get(id); if (e) { beep('object'); words = t('access.entity', { kind: kindName(e, ctx()), layer: e.layer ? t('access.on_layer', { layer: e.layer }) : '' }) + ' ' + id; } } }
    }
    A.lastKey = key;
    if (full) {
      const parts = [];
      if (words) parts.push(words); else parts.push(sayPoint(p, ctx()));
      const base = engine.base;
      if (base && engine.expects !== 'select') parts.push(sayMove(base, p, ctx()));
      say(parts.join('. '));
    } else if (words) say(words);
  }

  function onSelection(set) {
    if (!A.on) return;
    const n = set ? set.size : 0;
    A.targets = null; A.gripAt = -1;
    const had = A.sel > 0; A.sel = n;
    if (!n) { if (had) say(t('access.sel.none')); return; }
    if (n <= 3) say(t('access.sel.some', { n, what: [...set].map((id) => doc.get(id)).filter(Boolean).map((e) => describeEntity(e, ctx())).join('; ') }));
    else say(t('access.sel.many', { n }));
  }

  // ---- the keyboard cursor ----
  const span = () => (ui.stage.clientWidth || 800) / view.zoom;
  function start() { return A.cursor || host.cursor || view.state.cursor || centre(); }
  function centre() { return view.toWorld ? view.toWorld((ui.stage.clientWidth || 0) / 2 - (view.x0 || 0), (ui.stage.clientHeight || 0) / 2) : { x: 0, y: 0 }; }
  function put(p, opts) { A.cursor = p; moveCursor(p); onMove(p, opts); }
  const KEYS = {
    ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1],
  };
  function onKey(e) {
    if (!A.on || e.altKey || e.metaKey) return;
    const k = e.key, lower = k.length === 1 ? k.toLowerCase() : k;
    let handled = true;
    if (KEYS[k]) {
      const step = niceStep(span()) * (e.shiftKey ? 10 : e.ctrlKey ? 0.1 : 1), c = start(), d = KEYS[k];
      put({ x: c.x + d[0] * step, y: c.y + d[1] * step }, { full: true });
    } else if (k === 'Enter') {
      const c = start();
      moveCursor(c); click(c);
      beep('click');
    } else if (k === ' ') {
      runLine('');   // Enter at the command line: ends LINE, accepts a default, as Space does in a command
    } else if (k === 'Tab') {
      const list = targets();
      if (!list.length) say(t('access.nothing_near'));
      else {
        A.targetAt = (A.targetAt + (e.shiftKey ? -1 : 1) + list.length) % list.length;
        const s = list[A.targetAt];
        put({ x: s.x, y: s.y }, { full: true });
      }
    } else if (lower === 'g') {
      const gs = gripTargets(ctx(), host.selection);
      if (!gs.length) say(t('access.nogrips'));
      else { A.gripAt = (A.gripAt + (e.shiftKey ? -1 : 1) + gs.length) % gs.length; put({ x: gs[A.gripAt].x, y: gs[A.gripAt].y }, { full: true }); }
    } else if (lower === 'd') say(describeDrawing(ctx(), { selection: host.selection }));
    else if (lower === 'w') say(sayPoint(start(), ctx()) + '. ' + (engine.base ? sayMove(engine.base, start(), ctx()) : ''));
    else if (lower === 'n') say(describeNear(ctx(), start(), { radius: span() / 20 }));
    else if (lower === 's') say(selectionText());
    else if (lower === 'r') shared()?.repeat();
    else if (lower === 'v') { const a = shared(); a?.set({ voice: a.voice === 'on' ? 'off' : 'on' }); }
    else if (k === '/') { ui.input.focus(); say(t('access.at_command_line')); }
    else if (k === '?') say(t('access.keys.help'));
    else handled = false;
    if (handled) { e.preventDefault(); e.stopPropagation(); if (k !== 'Tab') A.targets = k === 'Tab' ? A.targets : null; }
  }
  function targets() {
    if (!A.targets) { A.targets = snapTargets(ctx(), start(), { radius: span() / 10, kinds: settings.kinds }); A.targetAt = -1; }
    return A.targets;
  }
  function selectionText() {
    const sel = [...host.selection].map((id) => doc.get(id)).filter(Boolean);
    if (!sel.length) return t('access.sel.none');
    return t('access.sel.some', { n: sel.length, what: sel.slice(0, 5).map((e) => describeEntity(e, ctx())).join('; ') + (sel.length > 5 ? '; ' + t('access.more', { n: sel.length - 5 }) : '') });
  }
  ui.over.addEventListener('keydown', onKey);
  ui.over.addEventListener('focus', () => { if (A.on) { A.targets = null; say(t('access.canvas.focus')); } });

  // ---- voice: the shell listens (on this computer unless the person allowed the online service); CadCraft turns what was heard into a line ----
  function heard(r) {
    if (r.kind === 'command' || r.kind === 'input') runLine(r.text);
    else if (r.kind === 'enter') runLine('');
    else if (r.kind === 'cancel') cancel();
    else if (r.kind === 'undo') runLine('UNDO');
    else if (r.kind === 'redo') runLine('REDO');
    if (r.kind === 'command' && r.rest) setTimeout(() => runLine(r.rest), 50);
  }

  // ---- the switches: the person's choice is the shell's (one record for every app); this follows it ----
  function follow() {
    const a = shared();
    if (!a) return;
    const on = a.on;
    A.on = on;
    ui.history.setAttribute('aria-live', on ? 'off' : 'polite');   // the shell's regions say the history, once
    ui.over.tabIndex = on ? 0 : -1;
    if (on) { ui.over.setAttribute('role', 'application'); ui.over.setAttribute('aria-label', t('access.canvas.aria')); }
    else { ui.over.removeAttribute('role'); ui.over.setAttribute('aria-label', t('ui.canvas.aria')); }
  }
  function connect() {
    shared().attach({ known, act: heard, stage: ui.over, lang: () => (document.documentElement.lang || 'en').startsWith('es') ? 'es-MX' : 'en-US' });
    document.addEventListener('cc-access-change', follow);
    follow();
  }
  if (shared()) connect(); else document.addEventListener('cc-access-ready', connect, { once: true });
  /** The old name of the switch: the page asks for a change and the shell keeps it. */
  function apply(o) { const a = shared(); if (a) a.set(o); }
  return { say, onPrint, onPrompt, onMove, onSelection, apply, follow, get on() { return A.on; }, describe: () => describeDrawing(ctx(), { selection: host.selection }), near: () => describeNear(ctx(), start(), { radius: span() / 20 }), where: () => sayPoint(start(), ctx()), selectionText, beep };
}
