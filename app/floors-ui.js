/* SPDX-License-Identifier: Apache-2.0 */
/**
 * floors-ui.js — the Floors panel (0.9 PLAN2D.3): over the drawing like the Classes panel, whose styles it shares. Choose the floor
 * you draw on, turn floors on and off, name them, order them; move or copy the selection to a floor. The rules are in floors.js.
 */
import { floorsOf, floorOf, enableFloors, addFloor, renameFloor, setFloorOn, setActiveFloor, setFloorElev, moveFloor, deleteFloor, setFloorOf, copyToFloor, floorsToLayers } from './floors.js';

export function installFloorsPanel({ stage, doc, host, el, t, print, ask, focusCommandLine }) {
  let node = null, body = null, timer = 0;
  const L = t('plan2d.floors.undo');
  const count = () => { const m = new Map(); if (floorsOf(doc)) for (const e of doc.model.values()) { const id = floorOf(doc, e); m.set(id, (m.get(id) || 0) + 1); } return m; };
  const selection = () => [...(host.selection || [])].filter((id) => doc.model.get(id));

  function row(f, F, uses, i) {
    const active = F.active === f.id;
    return el('li', { className: 'cc-flr-row' + (f.on || active ? '' : ' is-off') + (active ? ' is-active' : ''), dataset: { floor: f.id } },
      el('button', { type: 'button', className: 'cc-cls-eye', disabled: active, 'aria-pressed': f.on || active ? 'true' : 'false', title: t(f.on ? 'plan2d.floors.hide' : 'plan2d.floors.show'), 'aria-label': t(f.on ? 'plan2d.floors.hide' : 'plan2d.floors.show') + ' ' + f.name, dataset: { floorEye: f.id }, onclick: () => setFloorOn(doc, f.id, !f.on, L) },
        el('i', { className: 'bi ' + (f.on || active ? 'bi-eye' : 'bi-eye-slash'), 'aria-hidden': 'true' })),
      el('input', { type: 'radio', name: 'cc-flr-active', checked: active, title: t('plan2d.floors.active'), 'aria-label': t('plan2d.floors.active') + ' ' + f.name, dataset: { floorActive: f.id }, onchange: () => { setActiveFloor(doc, f.id, L); print(t('plan2d.floor.now', { name: f.name })); } }),
      el('input', { type: 'text', className: 'cc-input cc-flr-name', value: f.name, maxLength: 64, 'aria-label': t('plan2d.floors.name'), dataset: { floorName: f.id }, onchange: (ev) => { if (!renameFloor(doc, f.id, ev.target.value, L)) ev.target.value = f.name; } }),
      el('span', { className: 'cc-cls-n tabular', title: t('plan2d.floors.count', { n: uses.get(f.id) || 0 }) }, String(uses.get(f.id) || 0)),
      el('button', { type: 'button', className: 'cc-cls-eye', disabled: i === 0, title: t('plan2d.floors.up'), 'aria-label': t('plan2d.floors.up') + ' ' + f.name, onclick: () => moveFloor(doc, f.id, -1, L) }, el('i', { className: 'bi bi-arrow-up', 'aria-hidden': 'true' })),
      el('button', { type: 'button', className: 'cc-cls-eye', disabled: i === F.list.length - 1, title: t('plan2d.floors.down'), 'aria-label': t('plan2d.floors.down') + ' ' + f.name, onclick: () => moveFloor(doc, f.id, 1, L) }, el('i', { className: 'bi bi-arrow-down', 'aria-hidden': 'true' })),
      el('button', { type: 'button', className: 'cc-cls-eye', title: t('plan2d.floors.delete'), 'aria-label': t('plan2d.floors.delete') + ' ' + f.name, dataset: { floorDelete: f.id }, onclick: async () => {
        const k = await ask({ title: t('plan2d.floors.delete'), text: t('plan2d.floors.delete.text', { name: f.name, n: uses.get(f.id) || 0 }), buttons: [['cancel', t('plan2d.floors.cancel'), 'btn-line'], ['ok', t('plan2d.floors.delete'), 'btn-plot']] });
        if (k === 'ok') deleteFloor(doc, f.id, L);
      } }, el('i', { className: 'bi bi-trash', 'aria-hidden': 'true' })));
  }

  function render() {
    if (!node || node.hidden) return;
    const F = floorsOf(doc);
    if (!F) {
      body.replaceChildren(
        el('p', { className: 'cc-note' }, t('plan2d.floors.intro')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { floorsOn: '' }, onclick: () => enableFloors(doc, [t('plan2d.floors.ground'), t('plan2d.floors.first')], L) }, t('plan2d.floors.start')));
      return;
    }
    const uses = count(), n = selection().length;
    const nameIn = el('input', { type: 'text', className: 'cc-input', maxLength: 64, placeholder: t('plan2d.floors.new.ph'), 'aria-label': t('plan2d.floors.new.ph'), dataset: { floorNew: '' } });
    const pick = el('select', { className: 'cc-select', 'aria-label': t('plan2d.floors.to'), dataset: { floorTo: '' } }, ...F.list.map((f) => el('option', { value: f.id }, f.name)));
    const active = F.list.find((f) => f.id === F.active);
    body.replaceChildren(
      el('form', { className: 'cc-cls-new', onsubmit: (ev) => { ev.preventDefault(); const f = addFloor(doc, nameIn.value, L); if (f) print(t('plan2d.floor.now', { name: f.name })); } }, nameIn, el('button', { type: 'submit', className: 'btn-line btn-sm-cc' }, t('plan2d.floors.add'))),
      el('ul', { className: 'cc-cls-tree cc-flr-list', dataset: { floorList: '' }, 'aria-label': t('plan2d.floors.title') }, ...F.list.map((f, i) => row(f, F, uses, i))),
      el('p', { className: 'cc-note' }, t('plan2d.floors.note')),
      el('label', { className: 'cc-cls-f' }, el('span', {}, t('plan2d.floors.elev', { name: active.name })),
        el('input', { type: 'number', step: 'any', className: 'cc-input', value: active.elev, dataset: { floorElev: '' }, onchange: (ev) => setFloorElev(doc, active.id, Number(ev.target.value), L) })),
      el('h3', {}, t('plan2d.floors.sel', { n })),
      el('div', { className: 'cc-cls-actions' }, pick,
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: !n, dataset: { floorMove: '' }, onclick: () => print(t('plan2d.floor.moved', { n: setFloorOf(doc, selection(), pick.value, L), name: pick.selectedOptions[0].textContent })) }, t('plan2d.floors.move')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: !n, dataset: { floorCopy: '' }, onclick: () => print(t('plan2d.floor.moved', { n: copyToFloor(doc, selection(), pick.value, L).length, name: pick.selectedOptions[0].textContent })) }, t('plan2d.floors.copy'))),
      el('details', { className: 'cc-cls-design' }, el('summary', {}, t('plan2d.floors.out.h')), el('p', { className: 'cc-note' }, t('plan2d.floors.out.note')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { floorLayers: '' }, onclick: () => print(t('plan2d.floorlayers.done', { n: floorsToLayers(doc, L) })) }, t('plan2d.floors.out.btn'))));
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(render, 40); }
  doc.on(() => { if (node && !node.hidden && !(body.contains(document.activeElement) && document.activeElement.matches('input[type="text"], input[type="number"]'))) schedule(); });
  const setSel = host.setSelection;
  host.setSelection = function (s) { const r = setSel.call(this, s); if (node && !node.hidden) schedule(); return r; };

  function build() {
    const close = el('button', { type: 'button', className: 'cc-align-close', 'aria-label': t('plan2d.floors.close'), title: t('plan2d.floors.close'), onclick: () => api.close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    body = el('div', { className: 'cc-cls-body' });
    node = el('section', { className: 'cc-classpanel cc-floorpanel', role: 'region', 'aria-label': t('plan2d.floors.title'), dataset: { floorsPanel: '' } }, el('div', { className: 'cc-align-head' }, el('h2', { className: 'cc-h' }, t('plan2d.floors.title')), close), body);
    node.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') api.close(); });
    stage.append(node);
  }
  const api = {
    open() { if (!node) build(); node.hidden = false; render(); node.querySelector('input, button')?.focus(); },
    close() { if (node) node.hidden = true; focusCommandLine?.(); },
    render, get node() { return node; },
  };
  return api;
}
