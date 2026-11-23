/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-pointer.js: cadcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadPointer(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { lassoMode, thin } from './lasso.js';

export function mountCadPointer(ctx) {
  const { CS, settings, view, rememberView, host, engine, selectionBase, rightClick, cancelLocal, root } = ctx;

  function startDrag(kind, p) {
    if (kind === 'path' && settings.trimDrag === 'window') kind = 'trimbox';   // TRIM / EXTEND by a dragged window (0.6 DF.13)
    CS.drag = { kind, start: { x: CS.down.x, y: CS.down.y }, pts: [CS.down.world, view.toWorld(p.x, p.y)], mode: kind === 'path' ? 'fence' : kind === 'trimbox' ? 'crossing' : lassoMode(CS.down, p) };
    if (kind === 'path') engine.dragPath = CS.drag.pts;   // TRIM / EXTEND preview what the path crosses so far
    if (kind === 'trimbox') { dragMove(p); return; }
    view.state.lasso = { pts: CS.drag.pts, mode: CS.drag.mode || 'window' };
    view.invalidate();
  }
  function dragMove(p) {
    if (CS.drag.kind === 'trimbox') {   // a rectangle from the press to the pointer, drawn as a crossing lasso
      const a = CS.drag.pts[0], b = view.toWorld(p.x, p.y);
      CS.drag.pts = [a, { x: b.x, y: a.y }, b, { x: a.x, y: b.y }, b];
      view.state.lasso = { pts: [a, { x: b.x, y: a.y }, b, { x: a.x, y: b.y }], mode: 'crossing' };
      view.invalidate();
      return;
    }
    const last = CS.drag.pts[CS.drag.pts.length - 1], ls = view.toScreen(last.x, last.y);
    if (Math.hypot(ls.x - p.x, ls.y - p.y) >= 3) CS.drag.pts.push(view.toWorld(p.x, p.y));
    if (!CS.drag.mode) CS.drag.mode = lassoMode(CS.drag.start, p);   // the first sideways move decides: right = window, left = crossing
    view.state.lasso = { pts: CS.drag.pts, mode: CS.drag.mode || 'window' };
    view.invalidate();
  }
  function cancelDrag() { CS.drag = null; engine.dragPath = null; view.state.lasso = null; view.invalidate(); }
  function finishDrag() {
    const d = CS.drag;
    cancelDrag();
    const pts = thin(d.pts, 2 / view.zoom);
    if (d.kind === 'path') { engine.path(pts); return; }
    if (d.kind === 'trimbox') { const a = d.pts[0], b = d.pts[d.pts.length - 1]; engine.trimWindow({ minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) }); return; }
    const mode = d.mode || 'window';
    if (pts.length < (mode === 'fence' ? 2 : 3)) return;
    if (engine.expects === 'select') engine.lasso(pts, mode);
    else if (!engine.busy) {
      const replace = settings.pick === 'replace';
      const s = selectionBase();
      for (const id of host.pickLasso(pts, mode)) { if (host.shift && !replace) s.delete(id); else s.add(id); }
      if (mode !== 'fence' && (!host.shift || replace)) (s.windows ||= []).push({ poly: pts.map((p) => ({ x: p.x, y: p.y })) });
      host.setSelection(s);
    }
  }

  function useTouch() {
    if (view.coarse) return;
    view.coarse = true;
    root.classList.add('is-touch');
    ctx.keyRow.hidden = false;
    view.invalidate();
  }
  function touchDown(e) {
    useTouch();
    ctx.touchPts.set(e.pointerId, ctx.stagePos(e));
    clearTimeout(CS.longPress);
    if (ctx.touchPts.size === 2) {
      if (CS.drag) cancelDrag();
      CS.down = null; CS.panning = null;
      if (CS.gripEdit) cancelLocal();
      const [a, b] = [...ctx.touchPts.values()];
      CS.pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), c: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } };
      rememberView('pan');
      return true;
    }
    if (ctx.touchPts.size > 2) return true;
    CS.longPress = setTimeout(() => { if (CS.down && !CS.down.moved && !CS.drag) { CS.down = null; navigator.vibrate?.(15); rightClick(); } }, 550);
    return false;
  }
  function touchMove(e) {
    if (!ctx.touchPts.has(e.pointerId)) return false;
    ctx.touchPts.set(e.pointerId, ctx.stagePos(e));
    if (!CS.pinch) return ctx.touchPts.size > 2;
    const [a, b] = [...ctx.touchPts.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y), c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    view.panBy(c.x - CS.pinch.c.x, c.y - CS.pinch.c.y);
    if (d > 10 && CS.pinch.d > 10) view.zoomAt(c.x - view.x0, c.y - view.y0, d / CS.pinch.d);
    CS.pinch = { d, c };
    return true;
  }
  function touchUp(e) {
    ctx.touchPts.delete(e.pointerId);
    clearTimeout(CS.longPress);
    if (!CS.pinch) return false;
    if (!ctx.touchPts.size) CS.pinch = null;
    CS.down = null;
    return true;
  }

  return { startDrag, dragMove, cancelDrag, finishDrag, useTouch, touchDown, touchMove, touchUp };
}
