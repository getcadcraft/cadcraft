/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-cycle-grips.js: cadcraft.js's 14 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadCycleGrips(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { TYPE_NAMES } from './doc.js';
import { expandGroups } from './groups.js';
import { wallGripClick, wallGripCommit } from './walls-cmd.js';
import { dynGripActs } from './dyngrips.js';
import { visibilityOf, setVisibility } from './dyn-blocks.js';
import { el } from './ui-util.js';
import { gripMove } from './geom.js';

export function mountCadCycleGrips(ctx) {
  const { CS, ui, settings, doc, view, dismissGhost, wantsPoint, canSelectNow, pointFor, updateCursorMode, refreshCursor, dynPoint, suggest, submit, status, host, engine, scheduleProps, focusCommandLine } = ctx;

  // ---- Tab cycles through overlapping objects under the pointer (AutoCAD's selection cycling) ----
  function cycleTab() {
    if (!CS.lastRaw || wantsPoint() || view.state.box || !(canSelectNow() || engine.expects === 'entity')) return false;
    let ids = CS.cycle ? CS.cycle.ids : view.pickAll(CS.lastRaw, undefined, engine.busy);   // ORS.28
    if (!CS.cycle) { const first = view.pick(CS.lastRaw, undefined, engine.busy); ids = [first, ...ids.filter((id) => id !== first)].filter(Boolean); }   // start from what is highlighted now
    if (ids.length < 2) return false;
    CS.cycle = CS.cycle ? { ...CS.cycle, i: (CS.cycle.i + 1) % ids.length } : { at: CS.lastRaw, ids, i: 1 };
    const e = doc.get(ids[CS.cycle.i]);
    view.state.hover = ids[CS.cycle.i];
    status(t('sel.cycle', { i: CS.cycle.i + 1, n: ids.length, what: t('sel.cycle.what', { type: TYPE_NAMES[e?.type] || '', layer: e?.layer ?? '' }) }));
    view.invalidate();
    return true;
  }
  function cycledAt(p) {
    if (!CS.cycle) return null;
    const a = view.toScreen(CS.cycle.at.x, CS.cycle.at.y), b = view.toScreen(p.x, p.y);
    const id = Math.hypot(a.x - b.x, a.y - b.y) <= 3 ? CS.cycle.ids[CS.cycle.i] : null;
    return id && doc.get(id) ? id : null;
  }

  function gripAt(screen) {
    const tol = view.coarse ? 13 : 6;   // a finger needs a bigger target (S.8)
    for (const g of view.state.grips) {
      const s = view.toScreen(g.x, g.y);
      if (Math.abs(s.x - screen.x) <= tol && Math.abs(s.y - screen.y) <= tol) return g;
    }
    return null;
  }

  function click(raw) {
    if (CS.pendingBox) { finishBox(CS.pendingBox, raw); return; }
    if (CS.gripEdit) { commitGrip(pointFor(raw)); return; }
    if (wantsPoint()) { engine.click(CS.gripEdit ? pointFor(raw) : dynPoint(pointFor(raw)), raw); return; }
    if (engine.expects === 'select') { if (!engine.click(raw, raw)) startBox(raw); return; }
    if (engine.expects === 'entity') { engine.click(raw, raw); return; }
    if (engine.busy) return;
    // idle: grips, picking, windows
    const g = gripAt(view.toScreen(raw.x, raw.y));
    if (g && g.shape) { onDynGrip(g); return; }   // a dynamic block's grip (DB.5)
    if (g) { CS.gripEdit = { id: g.id, key: g.key, from: { x: g.x, y: g.y } }; view.state.hotGrip = g; updateCursorMode(); status(t(String(g.key).startsWith('wall:') ? 'plan2d.wall.grip.hint' : 'app.click_where_grip_goes')); refreshCursor(); return; }
    const lk = CS.wallLocks?.at(view.toScreen(raw.x, raw.y));   // a wall lock's padlock: a click takes the lock off (walls-plan-10)
    if (lk) { if (CS.wallLocks.unlock(lk)) { status(t('plan2d.lock.unlocked')); refreshGrips(); scheduleProps(); view.invalidate(); } return; }
    if (ctx.params.click(raw)) return;   // a constraint glyph or label (params-panel.js)
    const id = host.pickAt(raw);
    if (id) {
      // Settings › Clicking objects: 'add' (Shift removes) or 'replace' (Shift adds, or removes a selected one)
      const s = selectionBase();
      const gids = expandGroups(doc, [id]);   // ORS.8: the object's selectable groups come with it (PICKSTYLE 1)
      if (host.shift && s.has(id)) for (const k of gids) s.delete(k); else for (const k of gids) s.add(k);
      host.setSelection(s);
      return;
    }
    if (!host.shift && host.selection.size && settings.emptyClick !== 'keep') { host.setSelection(new Set()); }   // 'keep': Esc clears (0.6 DC.67)
    startBox(raw);
  }
  /** What an idle click or window adds to: nothing in Settings › Clicking objects 'replace' (no Shift), else the selection
   * with the windows that made it, which STRETCH takes as its own crossing windows (0.6 DC.68). */
  function selectionBase() {
    if (settings.pick === 'replace' && !host.shift) return new Set();
    const s = new Set(host.selection);
    if (host.selection.windows?.length) s.windows = [...host.selection.windows];
    return s;
  }
  function startBox(raw) { CS.pendingBox = raw; view.state.box = { a: raw, b: raw }; view.invalidate(); }
  function finishBox(a, b) {
    CS.pendingBox = null;
    view.state.box = null;
    const sa = view.toScreen(a.x, a.y), sb = view.toScreen(b.x, b.y);
    if (Math.hypot(sa.x - sb.x, sa.y - sb.y) < 3) { view.invalidate(); return; }
    const rect = { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) };
    const crossing = sb.x < sa.x;
    if (view.tw) {   // a turned view (DR.8): the window dragged on screen is a turned rectangle in the drawing — select by its outline
      const poly = [[sa.x, sa.y], [sb.x, sa.y], [sb.x, sb.y], [sa.x, sb.y]].map(([x, y]) => view.toWorld(x, y));
      const mode = crossing ? 'crossing' : 'window';
      if (engine.expects === 'select') engine.lasso(poly, mode);
      else if (!engine.busy) {
        const replace = settings.pick === 'replace';
        const s = selectionBase();
        for (const id of host.pickLasso(poly, mode)) { if (host.shift && !replace) s.delete(id); else s.add(id); }
        if (!host.shift || replace) (s.windows ||= []).push({ poly: poly.map((p) => ({ x: p.x, y: p.y })) });
        host.setSelection(s);
      }
      view.invalidate();
      return;
    }
    if (engine.expects === 'select') engine.window(rect, crossing);
    else if (!engine.busy) {
      const replace = settings.pick === 'replace';
      const s = selectionBase();
      for (const id of expandGroups(doc, view.pickWindow(rect, crossing))) { if (host.shift && !replace) s.delete(id); else s.add(id); }   // ORS.8: groups whole
      if (!host.shift || replace) (s.windows ||= []).push(rect);   // STRETCH run next stretches what these windows hold (0.6 DC.68)
      host.setSelection(s);
    }
    view.invalidate();
  }

  function closeDynMenu() { if (CS.dynMenu) { CS.dynMenu.remove(); CS.dynMenu = null; } }
  function onDynGrip(g) {
    if (wallGripClick(doc, g)) { refreshGrips(); scheduleProps(); view.invalidate(); return; }   // a wall's flip arrows (0.9 PLAN2D.4)
    if (!dynGripActs(g.key)) { status(t('dyn.grip.not_yet', { name: g.name || g.kind })); return; }
    const e = doc.get(g.id), info = e && visibilityOf(doc, e);
    if (!info) return;
    closeDynMenu();
    const s = view.toScreen(g.x, g.y), cr = ui.over.getBoundingClientRect(), sr = ui.stage.getBoundingClientRect();
    CS.dynMenu = el('div', { className: 'cc-menu-list cc-dynvis', role: 'menu', 'aria-label': info.label },
      ...info.states.map((n) => {
        const b = el('button', { type: 'button', role: 'menuitemradio', 'aria-checked': String(n === info.current) }, n);
        b.addEventListener('click', () => {
          closeDynMenu();
          const r = n === info.current ? { ok: true } : setVisibility(doc, g.id, n);
          if (!r.ok) status(t('props.dyn.err.' + r.error));
          refreshGrips(); scheduleProps(); view.invalidate(); focusCommandLine();
        });
        return b;
      }));
    CS.dynMenu.style.left = Math.round(cr.left - sr.left + view.x0 + s.x + 10) + 'px';
    CS.dynMenu.style.top = Math.round(cr.top - sr.top + view.y0 + s.y + 10) + 'px';
    CS.dynMenu.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') { ev.stopPropagation(); closeDynMenu(); focusCommandLine(); } });
    ui.stage.append(CS.dynMenu);
    CS.dynMenu.querySelector('[aria-checked="true"]')?.focus() || CS.dynMenu.querySelector('button')?.focus();
    setTimeout(() => document.addEventListener('pointerdown', (ev) => { if (CS.dynMenu && !CS.dynMenu.contains(ev.target)) closeDynMenu(); }, { once: true }), 0);
  }

  function commitGrip(p) {
    const g = CS.gripEdit; CS.gripEdit = null; view.state.hotGrip = null; view.state.preview = [];
    const e = doc.get(g.id);
    // a wall's grip: the joined walls keep their direction, a corner of two selected walls moves both, Alt breaks the joins (0.9 FX.63)
    if (e && doc.editable(e) && !wallGripCommit(doc, g, p, { selection: host.selection, free: !!host.alt, label: t('app.grip_edit') })) doc.change(t('app.grip_edit'), () => doc.update(e.id, gripMove(e, g.key, p)));
    updateCursorMode();
  }
  /** Esc: the typed text, then the command, then a grip move or box, then the selection (the key row's Esc too). */
  function escapeKey() {
    ui.input.value = ''; suggest();
    if (dismissGhost()) return;
    if (engine.escape()) return;
    if (cancelLocal()) return;
    if (host.selection.size) host.setSelection(new Set());
  }
  function rightClick() {
    if (CS.gripEdit || CS.pendingBox) { cancelLocal(); return; }
    submit();   // Enter
  }
  function cancelLocal() {
    let did = false;
    if (CS.gripEdit) { CS.gripEdit = null; view.state.hotGrip = null; view.state.preview = []; did = true; }
    if (CS.pendingBox || view.state.box) { CS.pendingBox = null; view.state.box = null; did = true; }
    updateCursorMode();
    return did;
  }

  function refreshGrips() {
    view.state.grips = !engine.busy && host.selection.size && host.selection.size <= 200 ? view.gripsFor(host.selection) : [];
  }

  return { cycleTab, cycledAt, gripAt, click, selectionBase, finishBox, onDynGrip, commitGrip, escapeKey, rightClick, cancelLocal, refreshGrips };
}
