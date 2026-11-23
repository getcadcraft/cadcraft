/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-pointer-cost.js: cadcraft.js's 15 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadPointerCost(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { nextPoint } from './autocomplete.js';
import { offerFor } from './details-cmd.js';

export function mountCadPointerCost(ctx) {
  const { CS, ui, settings, doc, view, fmtL, root } = ctx;

  const ptrKeep = () => { try { localStorage.setItem('cadcraft.pointer', JSON.stringify(ctx.ptrSaved)); } catch { /* private window: this session only */ } };

  const applyMove = () => { if (!CS.lastRaw) return; ctx.moveCursor(CS.lastRaw); CS.accessUi?.onMove(CS.lastRaw); };

  function pointerRested() { if (!CS.lastRaw || !view.state.cursor) return; CS.ptrResting = true; try { ctx.moveCursor(CS.lastRaw); } finally { CS.ptrResting = false; } }
  function applyPointerLight() {
    const on = ctx.governor.light;
    view.systemCursor = on;
    ui.over.classList.toggle('cc-ptr-light', on);
    root.dataset.pointerLight = on ? 'on' : 'off';
    if (!on) clearTimeout(CS.ptrRestTimer);
    ctx.refreshCursor(); view.invalidate();
  }
  function setPointerMode(mode) {
    ctx.governor.setMode(mode);
    delete ctx.ptrSaved.stepped; ptrKeep();
    ctx.ptrNote.hidden = true;
    applyPointerLight();
  }

  function watchPointer(busy) {
    if (!ctx.ptrAuto || ctx.governor.mode !== 'auto' || ctx.governor.stepped) return;
    CS.ptrMoved = true; CS.ptrMoveAt = performance.now();
    if (busy) CS.ptrSkip = true;
    if (!CS.ptrLoop) CS.ptrLoop = requestAnimationFrame(pointerFrame);
  }
  function pointerFrame(ts) {
    CS.ptrLoop = 0;
    if (CS.ptrLast && CS.ptrMoved && !CS.ptrSkip && !document.hidden && ctx.governor.frame(ts - CS.ptrLast) === 'down') pointerSteppedDown();
    CS.ptrLast = CS.ptrMoved && !CS.ptrSkip ? ts : 0;
    CS.ptrMoved = false; CS.ptrSkip = false;
    if (performance.now() - CS.ptrMoveAt < 150 && !ctx.governor.stepped) CS.ptrLoop = requestAnimationFrame(pointerFrame); else CS.ptrLast = 0;
  }

  function pointerSteppedDown() {
    ctx.ptrSaved.stepped = true;
    applyPointerLight();
    if (!ctx.ptrSaved.noted) { ctx.ptrSaved.noted = true; ctx.ptrNote.hidden = false; }
    ptrKeep();
  }

  const autoIdle = () => ctx.auto.on && !ctx.engine.busy && !CS.gripEdit && !view.state.box && !ctx.host.ws3d?.active;

  function autoGhosts(raw) {
    if (!autoIdle()) return view.state.preview.length && view.state.preview.every((g) => g.ghost && g.auto) ? [] : view.state.preview;
    const g = ctx.auto.preview(raw, ctx.AUTO_REACH_PX / view.zoom);
    { const cur = ctx.auto.current?.key || ''; if (cur !== CS.lastIdleGhost) { CS.lastIdleGhost = cur; if (cur) CS.accessUi?.say(t('access.ghost.idle', { what: t('auto.kind.' + ctx.auto.current.kind) })); } }   // EG.52
    return g.length ? g.map((x) => (x.auto ? x : Object.assign(x, { auto: true }))) : (view.state.preview.length && view.state.preview.every((q) => q.auto) ? [] : view.state.preview);
  }

  function withNextGhost(prev, raw) {
    const was = CS.nextGhost;
    CS.nextGhost = null;
    if (!ctx.auto.on || ctx.engine.expects !== 'point' || !ctx.engine.chain || CS.gripEdit || ctx.host.ws3d?.active) return prev;
    const n = nextPoint(ctx.engine.chain);
    if (!n) return prev;
    const last = ctx.engine.chain[ctx.engine.chain.length - 1];
    if (Math.hypot(raw.x - n.x, raw.y - n.y) * view.zoom > ctx.AUTO_REACH_PX) return prev;
    if (!was || was.x !== n.x || was.y !== n.y) CS.accessUi?.say(t('access.ghost.next', { what: t('auto.kind.' + n.kind), at: fmtL(n.x) + ', ' + fmtL(n.y) }));   // EG.52: a ghost is said once when it appears
    CS.nextGhost = n;
    return [...prev, { type: 'line', x1: last.x, y1: last.y, x2: n.x, y2: n.y, ghost: true, auto: true }, { type: 'point', x: n.x, y: n.y, ghost: true, auto: true }];
  }
  function acceptNextGhost() {
    if (!CS.nextGhost || ctx.engine.expects !== 'point') return false;
    const n = CS.nextGhost; CS.nextGhost = null;
    ctx.status(t('auto.accepted', { what: t('auto.kind.' + n.kind) }));
    ctx.engine.click({ x: n.x, y: n.y }, { x: n.x, y: n.y });
    ctx.refreshCursor();
    return true;
  }
  function acceptGhost() {
    if (CS.nextGhost && acceptNextGhost()) return true;
    if (!autoIdle() || !ctx.auto.current || !view.state.preview.some((g) => g.auto)) return false;
    const r = ctx.auto.accept(t('auto.undo'));
    if (!r) return false;
    ctx.host.setSelection?.(new Set());
    ctx.status(t('auto.accepted', { what: t('auto.kind.' + r.suggestion.kind) }));
    view.state.preview = [];
    ctx.refreshCursor();
    return true;
  }
  function dismissGhost() {
    if (!view.state.preview.some((g) => g.auto) || !ctx.auto.dismiss()) return false;
    view.state.preview = []; view.invalidate(); ctx.status(t('auto.dismissed'));
    return true;
  }

  function offerDetails() {
    clearTimeout(CS.offerTimer);
    if (settings.details === 'off' || !ctx.host.selection?.size || ctx.engine.busy) { if (!ctx.host.selection?.size) CS.lastOffer = ''; return; }
    CS.offerTimer = setTimeout(() => {
      const o = offerFor(doc, ctx.host.selection);
      if (o && o.id !== CS.lastOffer) { CS.lastOffer = o.id; ctx.status(t('details.offer', { name: o.name })); }
    }, 500);
  }

  return { applyMove, pointerRested, applyPointerLight, setPointerMode, watchPointer, pointerSteppedDown, autoGhosts, withNextGhost, acceptGhost, dismissGhost, offerDetails };
}
