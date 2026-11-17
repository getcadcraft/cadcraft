/* SPDX-License-Identifier: Apache-2.0 */
/**
 * doctabs.js — several drawings open in one window (0.4 part 2, Q.3): document tabs over the drawing, and Tile side by
 * side / stacked (each pane of panes.js then shows its own drawing).
 *
 * Every module holds the one `doc` (commands, Properties, the panels, the 3D tab), so a switch never replaces it:
 * the drawings trade places through `doc.swapContent(other)`. The open drawing lives in `doc`; every other one waits in
 * a Doc of its own (`rec.store`), which view.js can still draw in a pane. Undo, the open space, layers, the file name
 * and the save format travel with each drawing; the clipboard is shared, so copy and paste work between them.
 *
 *   const tabs = createDocTabs({ doc, view, engine, host, strip, el, t, ask, saveCopy, refresh })
 *   tabs.list → [{ id, store }]    tabs.active → id    tabs.docOf(id) → the Doc holding that drawing now
 *   tabs.pristine() → the open drawing is a new one nobody has touched (Open and New reuse it)
 *   await tabs.add({ name })       a new drawing in its own tab (and switch to it) → id
 *   await tabs.switchTo(id, { keepView })    tabs.close(id) → bool (asks about unsaved changes)
 *   tabs.tile('v' | 'h')           panes for the open drawings (up to four), each fitted
 *   tabs.anyDirty()                tabs.render()
 * The strip (`strip`, a role=tablist element) shows only while two or more drawings are open.
 */

import { Doc } from './doc.js';
import { newDrawingUnits } from './units.js';
import { applyNewDrawingPolicy } from './new-drawing-policy.js';   // 0.10 DP.1 (bk-defaults-10): length format, precision and text height of a new drawing, when a policy is set   // 0.7 UNITS: a new drawing's $INSUNITS from the starred length unit

export function createDocTabs({ doc, view, engine, host, strip, el, t, ask, saveCopy, refresh }) {
  let nextId = 2;
  const tabs = { list: [{ id: 1, store: null, report: null }], active: 1 };
  const rec = (id) => tabs.list.find((r) => r.id === id);
  tabs.docOf = (id) => (id == null || id === tabs.active ? doc : rec(id)?.store || doc);
  tabs.anyDirty = () => doc.dirty || tabs.list.some((r) => r.store?.dirty);
  tabs.pristine = () => !doc.dirty && doc.count() === 0 && doc.layouts.length === 0 && !doc.meta.source && doc.undoStack.length === 0;
  view.paneDoc = (p) => tabs.docOf(p.docId);

  /** A name no open drawing has: Drawing1, Drawing2 … */
  function freshName() {
    const used = new Set([doc.meta.name, ...tabs.list.map((r) => r.store?.meta.name)]);
    let n = 1;
    while (used.has('Drawing' + n)) n++;
    return 'Drawing' + n;
  }

  tabs.switchTo = async (id, { keepView = false } = {}) => {
    const to = rec(id), from = rec(tabs.active);
    if (!to || to === from) return false;
    if (engine.busy && !['NEW', 'OPEN'].includes(engine.running)) { engine.escape(); await engine.done; }   // NEW itself runs as a command
    host.cancelEdit?.();
    host.setSelection(new Set());
    if (host.ws3d?.active) host.ws3d.hide();
    from.report = host.report?.get?.() ?? from.report;
    if (view.panes) for (const p of view.panes.list) if (p.docId == null) p.docId = from.id;   // panes made before a second drawing opened
    view.beforeSwap();
    const holder = to.store;
    doc.swapContent(holder);   // emits 'load': the panels redraw; view.js keeps each drawing's own view (afterSwap)
    from.store = holder; to.store = null;
    tabs.active = id;
    if (view.panes) {
      const act = view.panes.list[view.panes.active];
      if (!keepView) act.docId = id;
    }
    view.afterSwap({ keepView });
    host.report?.set?.(to.report);
    refresh();
    tabs.render();
    return true;
  };

  tabs.add = async ({ name } = {}) => {
    const d = new Doc();
    d.load({ meta: { name: name || freshName(), units: newDrawingUnits() } });
    applyNewDrawingPolicy(d);
    d.markSaved();
    const r = { id: nextId++, store: d, report: null };
    tabs.list.push(r);
    await tabs.switchTo(r.id);
    try { await host.onNewDrawing?.(); } catch { /* a startup file must not stop a tab from opening */ }   // acaddoc.lsp (0.7 D7.28)
    return r.id;
  };

  tabs.close = async (id) => {
    const r = rec(id);
    if (!r) return false;
    const d = tabs.docOf(id);
    if (d.dirty) {
      const k = await ask({
        title: t('doctabs.close.title'), text: t('doctabs.close.text', { name: d.meta.name }),
        buttons: [['cancel', t('doctabs.close.cancel'), 'btn-line'], ['discard', t('doctabs.close.discard'), 'btn-line'], ['save', t('doctabs.close.save'), 'btn-plot']],
      });
      if (k === 'cancel' || !k) return false;
      if (k === 'save') {
        if (id !== tabs.active) await tabs.switchTo(id);
        await saveCopy();
        if (doc.dirty) return false;
      }
    }
    if (tabs.list.length === 1) {   // the last drawing: a new empty one takes its place
      doc.load({ meta: { name: 'Drawing1', units: newDrawingUnits() } });
      applyNewDrawingPolicy(doc);
      doc.markSaved();
      r.report = null; host.report?.set?.(null);
      view.restorePanes(null);
      refresh(); tabs.render();
      return true;
    }
    if (id === tabs.active) {
      const i = tabs.list.indexOf(r), next = tabs.list[i + 1] || tabs.list[i - 1];
      await tabs.switchTo(next.id);
    }
    tabs.list.splice(tabs.list.indexOf(r), 1);
    if (view.panes) for (const p of view.panes.list) if (p.docId === id) { p.docId = tabs.active; p.space = doc.space; view.fitPaneTo(p); }   // it shows the open drawing now
    view.invalidate(true);
    tabs.render();
    return true;
  };

  /** Tile the open drawings (up to four) side by side ('v') or stacked ('h'); the open one stays active. */
  tabs.tile = (dir) => {
    const ids = tabs.list.map((r) => r.id).slice(0, 4);
    if (!ids.includes(tabs.active)) ids[ids.length - 1] = tabs.active;
    if (ids.length < 2) return false;
    const layout = ids.length === 2 ? (dir === 'h' ? '2h' : '2v') : ids.length === 3 ? (dir === 'h' ? '3l' : '3r') : '4';
    view.setPanes(layout, { active: ids.indexOf(tabs.active) });
    view.panes.list.forEach((p, i) => { p.docId = ids[i]; p.space = tabs.docOf(ids[i]).space; view.fitPaneTo(p); });
    view.invalidate(true);
    refresh();
    tabs.render();
    return true;
  };

  tabs.render = () => {
    const show = tabs.list.length > 1;
    strip.hidden = !show;
    strip.closest('[data-stage]')?.classList.toggle('has-doctabs', show);
    if (!show) { strip.replaceChildren(); return; }
    const items = tabs.list.map((r) => {
      const d = tabs.docOf(r.id), on = r.id === tabs.active;
      const b = el('button', { type: 'button', role: 'tab', className: 'cc-doctab', 'aria-selected': String(on), tabIndex: on ? 0 : -1, title: d.meta.source || d.meta.name, dataset: { doc: String(r.id) } },
        el('span', { className: 'cc-doctab-name' }, d.meta.name), d.dirty ? el('span', { className: 'cc-doctab-dirty', title: t('doctabs.unsaved') }, '●') : null);
      b.addEventListener('click', () => { if (!on) tabs.switchTo(r.id); });
      b.addEventListener('keydown', (e) => {
        const i = tabs.list.indexOf(r);
        const go = e.key === 'ArrowRight' ? tabs.list[i + 1] : e.key === 'ArrowLeft' ? tabs.list[i - 1] : null;
        if (go) { e.preventDefault(); tabs.switchTo(go.id).then(() => strip.querySelector('[data-doc="' + go.id + '"]')?.focus()); }
      });
      const x = el('button', { type: 'button', className: 'cc-doctab-x', title: t('doctabs.close', { name: d.meta.name }), 'aria-label': t('doctabs.close', { name: d.meta.name }) }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
      x.addEventListener('click', (e) => { e.stopPropagation(); tabs.close(r.id); });
      return el('span', { className: 'cc-doctab-wrap' + (on ? ' is-on' : '') }, b, x);
    });
    // link the panes' views (Q.5): pressed while linked; only useful with panes
    const linkTool = () => {
      const on = !!view.linked;
      const b = el('button', { type: 'button', className: 'cc-doctab-tool', title: t('doctabs.link'), 'aria-label': t('doctabs.link'), 'aria-pressed': String(on), hidden: !view.panes }, el('i', { className: 'bi ' + (on ? 'bi-link-45deg' : 'bi-link'), 'aria-hidden': 'true' }));
      b.addEventListener('click', () => { host.linkViews?.(!view.linked); });
      return b;
    };
    const tool = (icon, label, fn) => { const b = el('button', { type: 'button', className: 'cc-doctab-tool', title: label, 'aria-label': label }, el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' })); b.addEventListener('click', fn); return b; };
    strip.replaceChildren(
      el('div', { className: 'cc-doctab-list', role: 'tablist', 'aria-label': t('doctabs.label') }, ...items),
      tool('bi-plus-lg', t('doctabs.new'), () => tabs.add()),
      tool('bi-layout-split', t('doctabs.tile.v'), () => tabs.tile('v')),
      tool('bi-view-stacked', t('doctabs.tile.h'), () => tabs.tile('h')),
      linkTool(),
    );
  };

  // a drawing that changes, saves or is renamed shows it on its tab
  doc.on((kind) => { if (tabs.list.length > 1 && (kind === 'change' || kind === 'load')) tabs.render(); });
  return tabs;
}
