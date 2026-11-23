/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-cmdline.js: cadcraft.js's 10 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadCmdline(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { parseLength, fmtAngle } from './units.js';
import { setText, patchSpans } from './pointer-perf.js';
import { activeUcs } from './ucs.js';
import { deg, normAngle } from './geom.js';
import { keypadPoint, insertAt as keyInsertAt, retype as keyRetype } from './keylayout.js';
import { commandList, lookup } from './commands.js';

export function mountCadCmdline(ctx) {
  const { CS, ui, settings, doc, view, updateCursorMode, fmtL } = ctx;

  function print(s) {
    for (const line of String(s).split('\n')) {
      ui.history.append(el('li', { className: line.startsWith(t('cmd.echo', { name: '' })) ? 'is-cmd' : '' }, line));
      CS.accessUi?.onPrint(line);
    }
    while (ui.history.children.length > 400) ui.history.firstChild.remove();
    ui.history.scrollTop = ui.history.scrollHeight;
  }
  function setPrompt(s) {
    ui.prompt.textContent = s || t('app.prompt');
    if (s) CS.accessUi?.onPrompt(s);
    ui.input.placeholder = ctx.engine.expects === 'string' && !ctx.engine.waiting?.opts?.raw ? t('app.type_text_enter_next') : '';
    ctx.dyn.reset(settings.dyn && ctx.engine.expects === 'point' && !ctx.engine.waiting?.opts?.accept ? (ctx.engine.base ? 'polar' : 'xy') : null);
    updateCursorMode();
    renderDyn();
  }

  const parseL = (x) => parseLength(x, doc.layout ? 2 : doc.meta.lunits, doc.layout ? '' : doc.meta.units) ?? NaN;   // arithmetic too (0.6 DF.3)
  const isLen = (x) => Number.isFinite(parseL(x));

  function setCoords(text) { CS.coordsNode = setText(ui.coords, CS.coordsNode, text); }

  /** The pointer with the locked fields applied. */
  const dynPoint = (p) => { ctx.dyn.ucs = activeUcs(doc); return ctx.dyn.on ? ctx.dyn.apply(p, ctx.engine.base, parseL, ui.input.value) : p; };

  function renderDyn() {
    const w = ctx.engine.waiting, cur = ctx.host.cursor;
    const show = settings.dyn && w && cur && view.state.cursor && ['point', 'distance', 'angle'].includes(w.kind);
    if (ctx.dynBox.hidden !== !show) ctx.dynBox.hidden = !show;   // written only when it changes: every write wakes the page's mutation observers (0.9.1, pointer-perf.js)
    if (!show) return;
    const typedNow = ui.input.value.trim();
    const field = (i, v, isAngle) => {
      const locked = ctx.dyn.locked[i] !== null, active = ctx.dyn.on && ctx.dyn.active === i;
      const text = active && typedNow ? typedNow : locked ? ctx.dyn.locked[i] : v === null ? '' : typeof v === 'number' ? (isAngle ? fmtAngle(doc.meta, v) : fmtL(v)) : v;
      return { className: 'cc-dyn-f' + (active ? ' is-active' : '') + (locked ? ' is-locked' : ''), text };
    };
    const parts = [{ className: 'cc-dyn-p', text: w.prompt }];
    if (ctx.dyn.on) {
      ctx.dyn.ucs = activeUcs(doc);
      const [a, b] = ctx.dyn.live(cur, ctx.engine.base);
      parts.push(field(0, a, false), field(1, b, ctx.dyn.mode === 'polar'));
    } else if (w.kind === 'distance' && w.opts.base) parts.push({ className: 'cc-dyn-f is-active', text: typedNow || fmtL(Math.hypot(cur.x - w.opts.base.x, cur.y - w.opts.base.y)) });
    else if (w.kind === 'angle' && w.opts.base) parts.push({ className: 'cc-dyn-f is-active', text: typedNow || fmtAngle(doc.meta, deg(normAngle(Math.atan2(cur.y - w.opts.base.y, cur.x - w.opts.base.x)))) });
    const dynChanged = patchSpans(ctx.dynBox, parts);   // the same spans, their words changed in place (no nodes added or removed on a pointer move)
    const s0 = view.toScreen(view.state.cursor.x, view.state.cursor.y), cv = ui.base.parentElement, s = { x: s0.x + view.x0 + cv.offsetLeft, y: s0.y + view.y0 + cv.offsetTop };   // split screen: from the pane to the stage (the drawing may sit inset: document tabs, a workspace layout's blocks)
    if (dynChanged || !CS.dynSize) CS.dynSize = { bw: ctx.dynBox.offsetWidth || 160, bh: ctx.dynBox.offsetHeight || 24, sw: ui.stage.clientWidth, sh: ui.stage.clientHeight };   // measured when the words change, not on every move
    const { bw, bh, sw, sh } = CS.dynSize;
    const left = Math.max(4, Math.min(sw - bw - 4, s.x + 18)) + 'px', top = Math.max(4, Math.min(sh - bh - 4, s.y + 18)) + 'px';
    if (ctx.dynBox.style.left !== left) ctx.dynBox.style.left = left;
    if (ctx.dynBox.style.top !== top) ctx.dynBox.style.top = top;
  }

  const keypadDot = (e, box) => {
    const dot = keypadPoint(e);
    if (!dot) return false;
    e.preventDefault();
    const r = keyInsertAt(box.value, box.selectionStart, box.selectionEnd, dot);
    box.value = r.value;
    try { box.setSelectionRange(r.caret, r.caret); } catch { /* a box with no caret */ }
    box.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  };

  function submit() {
    { const keys = ctx.physLine.hint(ui.input.value); CS.keyHintNow = keys ? { of: ui.input.value, keys } : null; }   // ORS.25
    if (ctx.dyn.on) { ctx.dyn.ucs = activeUcs(doc); const s = ctx.dyn.commit(ui.input.value, ctx.host.cursor, ctx.engine.base, { last: ctx.engine.lastPoint, parseLen: parseL }); if (s) ui.input.value = s; }
    if (settings.typedCoords !== 'absolute') { const rel = ctx.engine.typedRelative(ui.input.value); if (rel) ui.input.value = rel; }   // 0.9.1: x,y after the first point counts from the last point (the history shows the @)
    const v = ui.input.value;
    ui.input.value = '';
    suggest();
    if (v.trim()) { ctx.typed.push(v); if (ctx.typed.length > 100) ctx.typed.shift(); }
    CS.typedAt = -1;
    if (ctx.engine.waiting) print(ctx.engine.promptText() + ' ' + v);
    if (ctx.host.lispLine?.(v)) return;   // "(…" and "!symbol": LISP (appload.js)
    ctx.engine.text(v);
  }

  function suggest() {
    let typed = ui.input.value.trim().toUpperCase();
    ui.suggest.textContent = '';
    delete ui.suggest.dataset.cmd;
    ctx.drop.hide();
    if (!typed || ctx.engine.waiting) return;
    { const starts = (w) => { const u = w.toUpperCase(); return commandList().some((c) => c.name.startsWith(u) || c.aliases.some((a) => a.startsWith(u))); };   // ORS.25: suggestions for letters typed with a non-Latin layout
      const alt = keyRetype(typed, starts, ctx.physLine.hint(ui.input.value)); if (alt) typed = alt.toUpperCase(); }
    if (!/\s/.test(typed)) ctx.drop.show(commandList().filter((c) => c.name.startsWith(typed) || c.aliases.some((a) => a.startsWith(typed))).slice(0, 40));
    const exact = lookup(typed);
    const list = commandList();
    const hits = exact ? [list.find((c) => c.name === exact.name)] : list.filter((c) => c.name.startsWith(typed) || c.aliases.some((a) => a.startsWith(typed))).slice(0, 4);
    if (!hits.length || !hits[0]) { ui.suggest.textContent = t('app.no_such_command'); return; }
    ui.suggest.dataset.cmd = hits[0].name;
    ui.suggest.textContent = hits.map((c) => c.name + (c.aliases.length ? ' (' + c.aliases[0] + ')' : '')).join('   ') + (exact ? ' — ' + hits[0].help : '');
  }

  return { print, setPrompt, parseL, isLen, setCoords, dynPoint, renderDyn, keypadDot, submit, suggest };
}
