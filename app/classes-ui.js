/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classes-ui.js — the Classes panel (0.8 SU.912 step 5, session sx-classes): over the drawing's top right like the Laser panel,
 * the drawing stays live. Opened by CLASSES (classes-cmd.js) through host.classesPanel; loaded on first use.
 *
 *   the tree      every class, indented by level: eye (shown / hidden: hiding a class hides the classes under it), the active
 *                 class (new objects go in it), its colour, its name and how many objects it has; click a name to pick it
 *   picked class  Set class (the selection; "By class" makes them take colour, linetype and lineweight from it), Select its
 *                 objects (on the open sheet or the model), Rename (the classes under it follow), Delete (objects → None);
 *                 its attributes: colour, linetype, lineweight, fill, text style, use at creation
 *   this viewport (a sheet with one viewport selected): hide the picked class here, or give it another colour, lineweight or
 *                 fill only here (vpclass.js), and the list of classes this viewport changes
 *   design layers each layer's scale (1:n) and elevation (sx-classes O1: an ordinary layer; nothing else moves)
 * Every change is one undo step. Text from the drawing reaches the page only through el() (text nodes).
 */
import { NONE, depth, classList, classUses, classOf, getClass, addClass, updateClass, renameClass, deleteClass, setClassOf, setActive, activeClass, cleanName, isVisible, BY } from './classes.js';
import { overridesOf, setOverride, clearOverrides, describe } from './vpclass.js';
import { setDesignLayer, cleanDesign } from './classes-file.js';
import { aciHex } from './doc.js';
import { linetypeNames, LINEWEIGHTS, lwLabel } from './linetypes.js';

const hexOf = (c) => { if (c === null || c === undefined) return '#000000'; if (typeof c === 'string') return c; const h = aciHex(c); return h === 'ink' ? '#000000' : h; };

export function installClassesPanel({ stage, doc, host, el, t, print, ask, focusCommandLine }) {
  let node = null, body = null, timer = 0, picked = NONE, renaming = false;
  const err = (e) => print(t('sx.classes.err.' + (e?.code || 'name'), { name: e?.name2 ?? '' }));
  const tryDo = (fn) => { try { return fn(); } catch (e) { if (e && e.code) err(e); else throw e; } return undefined; };
  const theViewport = () => {
    if (doc.space === doc.model || !host.selection || host.selection.size !== 1) return null;
    const e = doc.get([...host.selection][0]);
    return e && e.type === 'viewport' ? e : null;
  };

  function row(c, uses) {
    const shown = isVisible(doc, c.name), active = activeClass(doc) === c.name;
    const eye = el('button', { type: 'button', className: 'cc-cls-eye', 'aria-pressed': c.visible ? 'true' : 'false', title: c.visible ? t('sx.classes.hide') : t('sx.classes.show'), 'aria-label': (c.visible ? t('sx.classes.hide') : t('sx.classes.show')) + ' ' + c.name, dataset: { clsEye: c.name },
      onclick: () => tryDo(() => updateClass(doc, c.name, { visible: !c.visible }, t('sx.classes.undo.visible'))) },
    el('i', { className: 'bi ' + (c.visible ? 'bi-eye' : 'bi-eye-slash'), 'aria-hidden': 'true' }));
    const radio = el('input', { type: 'radio', name: 'cc-cls-active', checked: active, title: t('sx.classes.active'), 'aria-label': t('sx.classes.active') + ' ' + c.name, dataset: { clsActive: c.name },
      onchange: () => { setActive(doc, c.name); print(t('sx.classes.cmd.active.done', { cls: c.name })); schedule(); } });
    const sw = el('span', { className: 'cc-cls-sw' + (c.color == null ? ' is-none' : ''), style: c.color == null ? '' : 'background:' + hexOf(c.color), 'aria-hidden': 'true' });
    const label = c.name.split('-').pop();
    const name = renaming && picked === c.name
      ? el('input', { type: 'text', className: 'cc-input cc-cls-rename', value: c.name, maxLength: 255, 'aria-label': t('sx.classes.rename'), dataset: { clsRenameInput: '' },
        onkeydown: (ev) => {
          if (ev.key === 'Escape') { ev.preventDefault(); ev.stopPropagation(); renaming = false; render(); }
          if (ev.key === 'Enter') { ev.preventDefault(); const to = ev.target.value; renaming = false; const n = tryDo(() => renameClass(doc, c.name, to, t('sx.classes.undo.rename'))); if (n !== undefined) { picked = cleanName(to) || picked; print(t('sx.classes.renamed', { from: c.name, to: picked, n })); } render(); }
        } })
      : el('button', { type: 'button', className: 'cc-cls-name' + (picked === c.name ? ' is-picked' : ''), title: c.name, 'aria-current': picked === c.name ? 'true' : null, dataset: { clsPick: c.name }, onclick: () => { picked = c.name; render(); } }, label);
    return el('li', { className: (shown ? '' : 'is-off ') + (active ? 'is-active' : ''), style: '--d:' + depth(c.name), dataset: { cls: c.name } },
      eye, radio, sw, name, el('span', { className: 'cc-cls-n tabular', title: t('sx.classes.count', { n: uses.get(c.name) || 0 }) }, String(uses.get(c.name) || 0)));
  }

  function attrs(c) {
    const set = (patch) => tryDo(() => updateClass(doc, c.name, patch, t('sx.classes.undo.attr')));
    const colourField = (key, labelKey) => {
      const on = c[key] != null;
      return el('div', { className: 'cc-cls-f' },
        el('label', { className: 'cc-cls-check' }, el('input', { type: 'checkbox', checked: on, dataset: { clsAttrOn: key }, onchange: (ev) => set({ [key]: ev.target.checked ? hexOf(c[key] ?? 7) : null }) }), el('span', {}, t(labelKey))),
        el('input', { type: 'color', value: hexOf(c[key]), disabled: !on, 'aria-label': t(labelKey), dataset: { clsAttr: key }, onchange: (ev) => set({ [key]: ev.target.value }) }));
    };
    const lts = linetypeNames(doc).filter((n) => !/^by(layer|block)$/i.test(n));
    return el('div', { className: 'cc-cls-attrs', dataset: { clsAttrs: c.name } },
      el('h3', {}, t('sx.classes.attrs', { cls: c.name })),
      colourField('color', 'sx.classes.f.color'),
      el('label', { className: 'cc-cls-f' }, el('span', {}, t('sx.classes.f.lt')),
        el('select', { className: 'cc-select', dataset: { clsAttr: 'lt' }, onchange: (ev) => set({ lt: ev.target.value || null }) },
          el('option', { value: '', selected: !c.lt }, t('sx.classes.f.none')), ...lts.map((n) => el('option', { value: n, selected: c.lt === n }, n)))),
      el('label', { className: 'cc-cls-f' }, el('span', {}, t('sx.classes.f.lw')),
        el('select', { className: 'cc-select', dataset: { clsAttr: 'lw' }, onchange: (ev) => set({ lw: ev.target.value === '' ? null : Number(ev.target.value) }) },
          el('option', { value: '', selected: c.lw == null }, t('sx.classes.f.none')), ...LINEWEIGHTS.map((w) => el('option', { value: String(w), selected: c.lw === w }, lwLabel(w))))),
      colourField('fill', 'sx.classes.f.fill'),
      el('label', { className: 'cc-cls-f' }, el('span', {}, t('sx.classes.f.text')),
        el('select', { className: 'cc-select', dataset: { clsAttr: 'textStyle' }, onchange: (ev) => set({ textStyle: ev.target.value || null }) },
          el('option', { value: '', selected: !c.textStyle }, t('sx.classes.f.none')),
          ...['Standard', ...[...(doc.textStyles?.keys() || [])].filter((n) => n !== 'Standard')].map((n) => el('option', { value: n, selected: c.textStyle === n }, n)))),
      el('label', { className: 'cc-cls-check' }, el('input', { type: 'checkbox', checked: c.auto, dataset: { clsAttr: 'auto' }, onchange: (ev) => set({ auto: ev.target.checked }) }), el('span', {}, t('sx.classes.f.auto'))));
  }

  function viewportBlock(vp, c) {
    const all = overridesOf(vp), o = all[Object.keys(all).find((k) => k.toLowerCase() === c.name.toLowerCase())] || {};
    const put = (patch) => setOverride(doc, vp.id, c.name, patch, { label: t('sx.classes.undo.vp') });
    const colour = (key, labelKey) => el('div', { className: 'cc-cls-f' },
      el('label', { className: 'cc-cls-check' }, el('input', { type: 'checkbox', checked: o[key] != null, dataset: { vpOn: key }, onchange: (ev) => put({ [key]: ev.target.checked ? hexOf(c[key] ?? c.color ?? 7) : null }) }), el('span', {}, t(labelKey))),
      el('input', { type: 'color', value: hexOf(o[key]), disabled: o[key] == null, 'aria-label': t(labelKey), dataset: { vp: key }, onchange: (ev) => put({ [key]: ev.target.value }) }));
    const list = Object.entries(all).map(([k, v]) => el('li', {}, el('span', {}, k), ' ', el('span', { className: 'cc-note' }, describe(v).map((d) => t('sx.classes.vp.what.' + d)).join(', '))));
    return el('div', { className: 'cc-cls-vp', dataset: { clsVp: '' } },
      el('h3', {}, t('sx.classes.vp.h', { cls: c.name })),
      el('label', { className: 'cc-cls-check' }, el('input', { type: 'checkbox', checked: !!o.hidden, dataset: { vp: 'hidden' }, onchange: (ev) => put({ hidden: ev.target.checked || null }) }), el('span', {}, t('sx.classes.vp.hide'))),
      colour('color', 'sx.classes.vp.color'),
      el('label', { className: 'cc-cls-f' }, el('span', {}, t('sx.classes.vp.lw')),
        el('select', { className: 'cc-select', dataset: { vp: 'lw' }, onchange: (ev) => put({ lw: ev.target.value === '' ? null : Number(ev.target.value) }) },
          el('option', { value: '', selected: o.lw == null }, t('sx.classes.vp.same')), ...LINEWEIGHTS.map((w) => el('option', { value: String(w), selected: o.lw === w }, lwLabel(w))))),
      colour('fill', 'sx.classes.vp.fill'),
      list.length ? el('ul', { className: 'cc-cls-vplist', dataset: { vpList: '' } }, ...list) : el('p', { className: 'cc-note' }, t('sx.classes.vp.none')),
      list.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { vpClear: '' }, onclick: () => clearOverrides(doc, vp.id, { label: t('sx.classes.undo.vp') }) }, t('sx.classes.vp.clear')) : null);
  }

  function designBlock() {
    const des = cleanDesign(doc.meta.designLayers);
    const rows = [...doc.layers.keys()].map((name) => {
      const d = des[name] || {};
      const num = (key, labelKey) => el('input', { type: 'number', className: 'cc-input', value: d[key] ?? '', min: key === 'scale' ? '0' : null, step: 'any', 'aria-label': t(labelKey) + ' ' + name, dataset: { design: key, layer: name },
        onchange: (ev) => setDesignLayer(doc, name, { [key]: ev.target.value === '' ? null : Number(ev.target.value) }, t('sx.classes.undo.design')) });
      return el('tr', {}, el('td', {}, name), el('td', {}, '1:', num('scale', 'sx.classes.design.scale')), el('td', {}, num('elev', 'sx.classes.design.elev')));
    });
    return el('details', { className: 'cc-cls-design', dataset: { clsDesign: '' } },
      el('summary', {}, t('sx.classes.design.h')),
      el('p', { className: 'cc-note' }, t('sx.classes.design.note')),
      el('table', { className: 'cc-laser-table' }, el('thead', {}, el('tr', {}, el('th', {}, t('sx.classes.design.layer')), el('th', {}, t('sx.classes.design.scale')), el('th', {}, t('sx.classes.design.elev')))), el('tbody', {}, ...rows)));
  }

  function render() {
    if (!node || node.hidden) return;
    const list = classList(doc), uses = classUses(doc);
    if (!getClass(doc, picked)) picked = NONE;
    const c = getClass(doc, picked);
    const nameIn = el('input', { type: 'text', className: 'cc-input', maxLength: 255, placeholder: t('sx.classes.new.ph'), 'aria-label': t('sx.classes.new.ph'), dataset: { clsNewName: '' } });
    const addForm = el('form', { className: 'cc-cls-new', dataset: { clsNew: '' }, onsubmit: (ev) => {
      ev.preventDefault();
      const r = tryDo(() => addClass(doc, { name: nameIn.value }, t('sx.classes.undo.add')));
      if (r) { picked = r.name; print(t('sx.classes.added', { cls: r.name })); render(); body.querySelector('[data-cls-new-name]')?.focus(); }
    } }, nameIn, el('button', { type: 'submit', className: 'btn-line btn-sm-cc' }, t('sx.classes.new')));
    const nSel = [...(host.selection || [])].filter((id) => doc.get(id) && doc.get(id).type !== 'viewport').length;
    const byBox = el('input', { type: 'checkbox', dataset: { clsSetBy: '' } });
    const actions = el('div', { className: 'cc-cls-actions' },
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', disabled: !nSel, title: nSel ? '' : t('sx.classes.set.none'), dataset: { clsSet: '' },
        onclick: () => { const n = tryDo(() => setClassOf(doc, [...host.selection], picked, { label: t('sx.classes.undo.set'), ...(byBox.checked ? { flags: BY.color | BY.lt | BY.lw | BY.fill | BY.textStyle } : {}) })); if (n !== undefined) print(t('sx.classes.cmd.set.done', { n, cls: picked })); } },
      t('sx.classes.set', { n: nSel })),
      el('label', { className: 'cc-cls-check' }, byBox, el('span', {}, t('sx.classes.set.by'))),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { clsSelect: '' },
        onclick: () => { const ids = [...doc.space.values()].filter((e) => classOf(e) === picked && e.type !== 'viewport').map((e) => e.id); host.setSelection(new Set(ids)); print(t('sx.classes.selected', { n: ids.length, cls: picked })); } },
      t('sx.classes.select')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: picked === NONE, dataset: { clsRename: '' }, onclick: () => { renaming = true; render(); body.querySelector('[data-cls-rename-input]')?.select(); } }, t('sx.classes.rename')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: picked === NONE, dataset: { clsDelete: '' },
        onclick: async () => {
          const n = (uses.get(picked) || 0);
          const k = await ask({ title: t('sx.classes.delete.title'), text: t('sx.classes.delete.text', { cls: picked, n }), buttons: [['cancel', t('sx.classes.cancel'), 'btn-line'], ['ok', t('sx.classes.delete'), 'btn-plot']] });
          if (k !== 'ok') return;
          const moved = tryDo(() => deleteClass(doc, picked, { label: t('sx.classes.undo.delete') }));
          if (moved !== undefined) { print(t('sx.classes.deleted', { cls: picked, n: moved })); picked = NONE; render(); }
        } }, t('sx.classes.delete')));
    const vp = theViewport();
    const focusKey = document.activeElement && body.contains(document.activeElement) ? [...Object.entries(document.activeElement.dataset)].map(([k, v]) => k + '=' + v).join('&') : null;
    body.replaceChildren(
      addForm,
      el('ul', { className: 'cc-cls-tree', dataset: { clsList: '' }, 'aria-label': t('sx.classes.title') }, ...list.map((k) => row(k, uses))),
      el('p', { className: 'cc-note' }, t('sx.classes.note')),
      actions,
      c ? attrs(c) : null,
      vp && c ? viewportBlock(vp, c) : el('p', { className: 'cc-note', dataset: { clsVpHint: '' } }, t('sx.classes.vp.hint')),
      designBlock());
    if (focusKey) {
      const sel = focusKey.split('&').map((p) => { const [k, v] = p.split('='); return '[data-' + k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()) + '="' + CSS.escape(v) + '"]'; }).join('');
      try { body.querySelector(sel)?.focus(); } catch { /* a stale key */ }
    }
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(render, 40); }
  doc.on(() => { if (node && !node.hidden) schedule(); });
  // the selection decides "Set class" and the viewport block: follow it while the panel is open
  const setSel = host.setSelection;
  host.setSelection = function (s) { const r = setSel.call(this, s); if (node && !node.hidden) schedule(); return r; };

  function build() {
    const close = el('button', { type: 'button', className: 'cc-align-close', 'aria-label': t('sx.classes.close'), title: t('sx.classes.close'), onclick: () => api.close() },
      el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    body = el('div', { className: 'cc-cls-body' });
    node = el('section', { className: 'cc-classpanel', role: 'region', 'aria-label': t('sx.classes.title'), dataset: { classesPanel: '' } },
      el('div', { className: 'cc-align-head' }, el('h2', { className: 'cc-h' }, t('sx.classes.title')), close), body);
    node.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape' && !renaming) api.close(); });
    stage.append(node);
  }
  const api = {
    open() { if (!node) build(); node.hidden = false; render(); node.querySelector('input, button')?.focus(); },
    close() { if (node) node.hidden = true; focusCommandLine?.(); },
    toggle() { if (node && !node.hidden) api.close(); else api.open(); },
    get node() { return node; },
    render,
  };
  return api;
}
