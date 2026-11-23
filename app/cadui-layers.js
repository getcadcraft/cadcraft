/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-layers.js: cadcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadLayers(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { aciHex } from './doc.js';
import { t } from './i18n.js';
import { grouped, groupsOf, groupSwitch, setGroupOpen, renameGroup, deleteGroup, setLayerGroup } from './layergroups.js';
import { el } from './ui-util.js';

export function mountCadLayers(mc) {
  const { CS, ui, doc, view, print, status, host, ACI_NAMES, scheduleProps, root, toHex6, nearestBasic } = mc;

  const swatch = (c) => (typeof c === 'string' ? c : aciHex(c) === 'ink' ? view.colors.ink : aciHex(c));
  /** The viewport the Layers panel's "freeze in this viewport" column works on (0.5 VP.2): the one entered, else the one selected on the open sheet. */
  function viewportContext() {
    const ev = view.enteredViewport?.();
    if (ev) return { vp: ev.vp, map: ev.lay.entities };
    if (!doc.layout || host.selection.size !== 1) return null;
    const e = doc.get([...host.selection][0]);
    return e?.type === 'viewport' ? { vp: e, map: doc.entities } : null;
  }
  const frozenHere = (vp, name) => (vp.frz || []).some((n) => n.toUpperCase() === String(name).toUpperCase());
  function toggleVpFreeze(ctx, name) {
    const vp = ctx.map.get(ctx.vp.id);
    if (!vp) return;
    const on = frozenHere(vp, name);
    const frz = on ? (vp.frz || []).filter((n) => n.toUpperCase() !== name.toUpperCase()) : [...(vp.frz || []), name];
    doc.change(t(on ? 'vp.frz.thaw.undo' : 'vp.frz.freeze.undo'), () => doc.update(vp.id, { ...vp, frz }, ctx.map));
    status(t(on ? 'vp.frz.thawed' : 'vp.frz.frozen', { name }));
  }
  /** Re-draw the Layers panel when what the freeze-in-viewport column works on changes (selection, entering, an edit). */
  function layersForViewport() { const c = viewportContext(); const k = c ? c.vp.id + ':' + (c.vp.frz || []).join('\n') : ''; if (k !== CS.vpCtxKey) renderLayers(); }
  function renderLayers() {
    const vctx = viewportContext();
    CS.vpCtxKey = vctx ? vctx.vp.id + ':' + (vctx.vp.frz || []).join('\n') : '';
    root.querySelector('[data-vpfrz-note]')?.toggleAttribute('hidden', !vctx);
    const list = [...doc.layers.values()].sort((a, b) => (a.name === '0' ? -1 : b.name === '0' ? 1 : a.name.localeCompare(b.name, undefined, { numeric: true })));
    const byName = new Map(list.map((l) => [l.name, l]));
    const needle = (ui.layerFilter?.value || '').trim().toLowerCase();
    const shownNames = list.map((l) => l.name).filter((n) => !needle || n.toLowerCase().includes(needle));
    const rows = [];
    for (const { group, names } of grouped(doc, shownNames)) {
      if (group) {
        if (needle && !names.length) continue;
        rows.push(groupRow(group, names));
        if (!group.open && !needle) continue;
      }
      for (const n of names) { const li = layerRow(byName.get(n)); if (group) li.classList.add('is-grouped'); rows.push(li); }
    }
    ui.layers.replaceChildren(...rows);
    if (ui.layerGroupPick) {   // which group the current layer is in; rows can also be dragged onto a group
      const on = groupsOf(doc).length > 0;
      ui.layerGroupPick.parentElement.hidden = !on;
      if (on) {
        ui.layerGroupPick.replaceChildren(el('option', { value: '' }, t('plan2d.group.none')), ...groupsOf(doc).map((g) => el('option', { value: g.name }, g.name)));
        ui.layerGroupPick.value = groupsOf(doc).find((g) => g.layers.includes(doc.current.layer))?.name || '';
      }
    }
    let groupClick = 0;
    function groupRow(g, names) {
      const members = names.map((n) => byName.get(n));
      const allOff = members.length > 0 && members.every((m) => !m.on), allFrozen = members.length > 0 && members.every((m) => m.frozen), allLocked = members.length > 0 && members.every((m) => m.locked);
      const sw = (key, on, icon, offIcon, label, value) => {
        const b = el('button', { type: 'button', className: 'cc-flag', 'aria-pressed': String(on), title: label, 'aria-label': t('plan2d.group.flag', { label, name: g.name }), dataset: { groupFlag: key } }, el('i', { className: 'bi bi-' + (on ? icon : offIcon), 'aria-hidden': 'true' }));   // i18n-ignore: an icon class (moved from cadcraft.js, where the baseline listed it)
        b.addEventListener('click', () => { groupSwitch(doc, g.name, key, value); renderLayers(); });
        return b;
      };
      const name = el('button', { type: 'button', className: 'cc-layer-gname', 'aria-expanded': String(g.open), title: g.name, dataset: { layerGroup: g.name }, onClick: (ev) => { clearTimeout(groupClick); if (ev.detail >= 2) return; groupClick = setTimeout(() => { setGroupOpen(doc, g.name, !g.open); renderLayers(); }, ev.detail === 1 ? 260 : 0); } },   // FX.401: a second click (rename) cancels the fold
        // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
        el('i', { className: 'bi bi-chevron-' + (g.open ? 'down' : 'right'), 'aria-hidden': 'true' }), el('i', { className: 'bi bi-folder2' + (g.open ? '-open' : ''), 'aria-hidden': 'true' }), ' ', g.name, ' ', el('span', { className: 'cc-muted' }, String(g.layers.filter((n) => doc.layers.has(n)).length)));
      // FX.401 (lab pass 29): double-click or F2 on a group's name renames it (one undo step, layergroups.js renameGroup)
      const rename = () => {
        const inp = el('input', { type: 'text', className: 'cc-input cc-layer-grename', value: g.name, maxLength: 64, 'aria-label': t('plan2d.group.rename', { name: g.name }), dataset: { groupRename: g.name } });
        let done = false;
        const finish = (keep) => { if (done) return; done = true; const to = inp.value.trim(); if (keep && to && to !== g.name && !renameGroup(doc, g.name, to)) print(t('plan2d.group.rename_bad', { name: to })); renderLayers(); };
        inp.addEventListener('keydown', (ev) => { ev.stopPropagation(); if (ev.key === 'Enter') { ev.preventDefault(); finish(true); } else if (ev.key === 'Escape') { ev.preventDefault(); finish(false); } });
        inp.addEventListener('blur', () => finish(true));
        name.replaceWith(inp); inp.focus(); inp.select();
      };
      name.title = t('plan2d.group.rename', { name: g.name });
      name.addEventListener('dblclick', (ev) => { ev.preventDefault(); clearTimeout(groupClick); rename(); });
      name.addEventListener('keydown', (ev) => { if (ev.key === 'F2') { ev.preventDefault(); ev.stopPropagation(); rename(); } });
      const del = el('button', { type: 'button', className: 'cc-flag', title: t('plan2d.group.delete'), 'aria-label': t('plan2d.group.delete') + ' ' + g.name, dataset: { groupDelete: g.name } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
      del.addEventListener('click', () => { deleteGroup(doc, g.name); renderLayers(); });
      const dropIn = (ev) => { ev.preventDefault(); const n = ev.dataTransfer.getData('application/x-cc-layer'); if (n) { setLayerGroup(doc, n, g.name); renderLayers(); } };
      return el('li', { className: 'cc-layer-grp' + (allOff || allFrozen ? ' is-off' : ''), dataset: { groupRow: g.name }, onDragover: (ev) => ev.preventDefault(), onDrop: dropIn }, name,
        el('span', { className: 'cc-layer-flags' },
          sw('on', allOff, 'eye-slash', 'eye', allOff ? t('plan2d.group.on') : t('plan2d.group.off'), allOff),
          sw('frozen', allFrozen, 'snow', 'snow', allFrozen ? t('plan2d.group.thaw') : t('plan2d.group.freeze'), !allFrozen),
          sw('locked', allLocked, 'lock', 'unlock', allLocked ? t('plan2d.group.unlock') : t('plan2d.group.lock'), !allLocked), del));
    }
    function layerRow(l) {
      const cur = doc.current.layer === l.name;
      const colorIn = el('input', { type: 'color', value: toHex6(swatch(l.color)), 'aria-label': t('app.layer.colour', { name: l.name }) });
      colorIn.addEventListener('change', () => doc.setLayer(l.name, { color: nearestBasic(colorIn.value) }));
      const flag = (key, on, icon, offIcon, label) => {
        const b = el('button', { type: 'button', className: 'cc-flag', 'aria-pressed': String(on), title: label, 'aria-label': t('app.layer.flag', { label, name: l.name }) }, el('i', { className: 'bi bi-' + (on ? icon : offIcon), 'aria-hidden': 'true' }));   // i18n-ignore: icon class
        b.addEventListener('click', () => {
          if (key === 'on' && l.name === doc.current.layer && l.on) { status(t('app.current_layer_make_another')); return; }
          doc.setLayer(l.name, { [key]: !l[key] });
        });
        return b;
      };
      const li = el('li', { className: (cur ? 'is-current ' : '') + (!l.on || l.frozen ? 'is-off' : ''), dataset: { layerRow: l.name }, draggable: groupsOf(doc).length ? 'true' : null, onDragstart: (ev) => ev.dataTransfer.setData('application/x-cc-layer', l.name) },
        el('button', { type: 'button', className: 'cc-layer-cur', title: cur ? t('app.current_layer') : t('app.make_current'), 'aria-label': t(cur ? 'app.layer.current_aria' : 'app.layer.make_current_aria', { name: l.name }), onClick: () => setCurrent(l.name) }),
        el('span', { className: 'cc-swatch', style: 'background:' + swatch(l.color), title: colorLabel(l.color) }, colorIn),
        el('button', { type: 'button', className: 'cc-layer-name', title: l.name, onClick: () => setCurrent(l.name) }, l.name),
        el('span', { className: 'cc-layer-flags' },
          flag('on', !l.on, 'eye-slash', 'eye', l.on ? t('app.turn_off') : t('app.turn_on')),
          flag('frozen', l.frozen, 'snow', 'snow', l.frozen ? t('app.layer.thaw') : t('app.layer.freeze')),
          flag('locked', l.locked, 'lock', 'unlock', l.locked ? t('app.layer.unlock') : t('app.layer.lock')),
          flag('plot', l.plot === false, 'printer', 'printer', l.plot === false ? t('app.plot_layer') : t('app.do_not_plot_layer')),
          ...(vctx ? [(() => {   // VP.2: frozen in this viewport only
            const on = frozenHere(vctx.vp, l.name), label = t(on ? 'vp.frz.thaw' : 'vp.frz.freeze');
            const b = el('button', { type: 'button', className: 'cc-flag cc-flag-vp', 'aria-pressed': String(on), title: label, 'aria-label': t('app.layer.flag', { label, name: l.name }), dataset: { vpfrz: l.name } }, el('i', { className: 'bi bi-' + (on ? 'snow2' : 'window'), 'aria-hidden': 'true' }));   // i18n-ignore: icon class
            b.addEventListener('click', () => toggleVpFreeze(vctx, l.name));
            return b;
          })()] : [])),
      );
      return li;
    }
  }
  function setCurrent(name) {
    doc.setLayer(name, {}, { current: true });   // turns it on and thaws it too; one undo step
    status(t('app.layer.current_status', { name }));
    renderLayers();
    scheduleProps();
  }

  function colorLabel(c) {
    if (c === null || c === undefined) return t('app.by_layer');
    if (c === 0) return t('app.by_block');
    if (typeof c === 'string') return c;
    return ACI_NAMES[c] ? ACI_NAMES[c] + ' (' + c + ')' : 'Colour ' + c;
  }

  return { swatch, layersForViewport, renderLayers, setCurrent, colorLabel };
}
