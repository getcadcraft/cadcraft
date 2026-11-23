/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-textedit.js: cadcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadTextEdit(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { isoState, isoSnap, isoPoint } from './isodraft.js';
import { trackPoint, polarTrack } from './tracking.js';
import { activeUcs, toUcs } from './ucs.js';
import { t } from './i18n.js';
import { tAngle, fmtAngle } from './units.js';
import { deg, normAngle, gripMove } from './geom.js';
import { wallGripGhost, wallGripPreview } from './walls-cmd.js';

export function mountCadTextEdit(ctx) {
  const { CS, settings, doc, view, pointerRested, autoGhosts, withNextGhost, fmtL } = ctx;

  function canSelectNow() { return !ctx.engine.busy || ctx.engine.expects === 'select'; }
  function wantsPoint() { return CS.gripEdit || ['point', 'distance', 'angle'].includes(ctx.engine.expects); }

  function updateCursorMode() {
    view.state.cursorMode = wantsPoint() ? 'point' : (ctx.engine.expects === 'select' || ctx.engine.expects === 'entity') ? 'select' : 'both';
    view.invalidate();
  }

  /** The point a click or a move stands for: object snap, then object snap tracking, polar tracking, else ortho from the base point. */
  function pointFor(raw) {
    const base = CS.gripEdit ? CS.gripEdit.from : ctx.engine.base;
    view.state.track = ctx.acquired.length ? { rays: [], acquired: ctx.acquired } : null;
    if (CS.snapOnceKind === 'none') view.state.snap = null;   // FX.34: typed "none" for this pick
    else if ((settings.osnap || CS.snapOnceKind) && !ctx.host.shift) {
      const s = view.snap(raw, { kinds: CS.snapOnceKind ? new Set([CS.snapOnceKind]) : settings.kinds, base });
      view.state.snap = s;
      if (s) { watchAcquire(s); return s.defer ? { x: s.x, y: s.y, tan: { c: s.defer, near: { x: raw.x, y: raw.y } } } : { x: s.x, y: s.y }; }   // a deferred tangent travels with the point (DR.3)
    } else view.state.snap = null;
    watchAcquire(null);
    if (isoState.on && settings.gsnap && !ctx.host.shift && view.gridStep) raw = isoSnap(raw, view.gridStep, view.ucsOrigin()); else   // ORS.10: the isometric grid's points
    if (settings.gsnap && !ctx.host.shift && view.gridStep) {   // FX: snap to grid (F9): the nearest grid point of the UCS, when no object snap took the point
      const a = view.ucsAngle(), o = view.ucsOrigin(), c = Math.cos(a), s = Math.sin(a), g = view.gridStep;
      const dx = raw.x - o.x, dy = raw.y - o.y, u = Math.round((c * dx + s * dy) / g) * g, v = Math.round((-s * dx + c * dy) / g) * g;
      raw = { x: o.x + c * u - s * v, y: o.y + s * u + c * v };
    }
    const tol = 8 / view.zoom;
    if (settings.otrack && settings.osnap && !ctx.host.shift && ctx.acquired.length) {
      const r = trackPoint(ctx.acquired, raw, { inc: settings.polarInc, tol, base, polarAll: settings.polar, start: activeUcs(doc)?.ang || 0 });
      if (r) {
        const from = r.rays[0].from;
        view.state.track = { rays: r.rays, acquired: ctx.acquired, label: r.kind === 'two' ? t('track.two') : tAngle('track.one', { d: fmtL(Math.hypot(r.x - from.x, r.y - from.y)) }, doc.meta, deg(normAngle(r.rays[0].ang - (activeUcs(doc)?.ang || 0)))) };
        return { x: r.x, y: r.y };
      }
    }
    if (isoState.on && base && (settings.ortho || (settings.polar && !ctx.host.shift))) { const q = isoPoint(raw, base, { ortho: settings.ortho, polar: settings.polar && !ctx.host.shift, tol }); return q ? { x: q.x, y: q.y } : raw; }   // ORS.10: Ortho and polar follow the isometric plane's axes
    const ua = activeUcs(doc)?.ang || 0;   // polar rays and ortho follow the UCS (DR.8)
    if (settings.polar && base && !ctx.host.shift) {
      const r = polarTrack(base, raw, { inc: settings.polarInc, tol, start: ua });
      if (r) { view.state.track = { rays: [r.ray], acquired: ctx.acquired, label: tAngle('track.polar', { d: fmtL(r.d) }, doc.meta, deg(normAngle(r.ang - ua))) }; return { x: r.x, y: r.y }; }
    }
    if (settings.ortho && base) {
      const c = Math.cos(ua), s = Math.sin(ua), dx = raw.x - base.x, dy = raw.y - base.y, u = c * dx + s * dy, v = -s * dx + c * dy;
      return Math.abs(u) >= Math.abs(v) ? { x: base.x + c * u, y: base.y + s * u } : { x: base.x - s * v, y: base.y + c * v };
    }
    return raw;
  }

  function watchAcquire(sn) {
    if (!settings.otrack || !settings.osnap || !wantsPoint()) sn = null;
    if (CS.acq && sn && Math.abs(CS.acq.x - sn.x) < 1e-9 && Math.abs(CS.acq.y - sn.y) < 1e-9) return;
    if (CS.acq) { clearTimeout(CS.acq.timer); CS.acq = null; }
    if (!sn) return;
    CS.acq = { x: sn.x, y: sn.y };
    CS.acq.timer = setTimeout(() => {
      const i = ctx.acquired.findIndex((p) => Math.abs(p.x - CS.acq.x) < 1e-9 && Math.abs(p.y - CS.acq.y) < 1e-9);
      if (i >= 0) ctx.acquired.splice(i, 1); else { ctx.acquired.push({ x: CS.acq.x, y: CS.acq.y }); if (ctx.acquired.length > 7) ctx.acquired.shift(); }
      view.state.track = ctx.acquired.length ? { rays: [], acquired: ctx.acquired } : null;
      view.invalidate();
    }, 400);
  }

  function moveCursor(raw) {
    view.state.cursor = raw;
    let p = raw;
    if (wantsPoint()) p = ctx.dynPoint(pointFor(raw)); else view.state.snap = null;
    ctx.host.cursor = p;
    if (view.state.box) view.state.box.b = raw;
    if (CS.cycle) { const a = view.toScreen(CS.cycle.at.x, CS.cycle.at.y), b = view.toScreen(raw.x, raw.y); if (Math.hypot(a.x - b.x, a.y - b.y) > 3) CS.cycle = null; }
    // the light pointer (pointer-perf.js): what is under a moving pointer is looked up when it rests, not on every move
    const light = ctx.governor.light, was = light ? [view.state.hover, view.state.preview, view.state.snap, view.state.track] : null;
    const idle = !wantsPoint() && !view.state.box;
    if (light && idle && !CS.cycle && !CS.ptrResting) { view.state.hover = null; clearTimeout(CS.ptrRestTimer); CS.ptrRestTimer = setTimeout(pointerRested, 90); }
    else view.state.hover = idle ? (CS.cycle ? CS.cycle.ids[CS.cycle.i] : view.pick(raw)) : null;
    if (CS.gripEdit) {
      const e = doc.get(CS.gripEdit.id);
      const moved = e ? gripMove(e, CS.gripEdit.key, p) : null;
      view.state.preview = moved ? (wallGripGhost(doc, CS.gripEdit, p, { selection: ctx.host.selection, free: !!ctx.host.alt }) || wallGripPreview(moved) || [moved]) : [];   // a wall: what the joined walls will do too (FX.63)
    } else if (ctx.engine.busy) view.state.preview = withNextGhost(ctx.engine.preview(p), raw);
    else view.state.preview = autoGhosts(raw);
    const base = CS.gripEdit ? CS.gripEdit.from : ctx.engine.base;
    const uc = activeUcs(doc), q = toUcs(uc, p);   // the readout is in the UCS (DR.8)
    ctx.setCoords(fmtL(q.x) + ', ' + fmtL(q.y) + (base ? '   Δ ' + fmtL(Math.hypot(p.x - base.x, p.y - base.y)) + ' < ' + fmtAngle(doc.meta, deg(normAngle(Math.atan2(p.y - base.y, p.x - base.x) - (uc?.ang || 0)))) : ''));
    ctx.renderDyn();
    // the light pointer draws no crosshair, so a move that changed nothing on the overlay asks for no frame at all
    if (!light || !idle || CS.gripEdit || ctx.engine.busy || CS.drag || was[0] !== view.state.hover || was[1] !== view.state.preview || was[2] || was[3] || view.state.snap || view.state.track) view.invalidate();
  }
  function refreshCursor() { if (CS.lastRaw) moveCursor(CS.lastRaw); }

  return { canSelectNow, wantsPoint, updateCursorMode, pointFor, moveCursor, refreshCursor };
}
