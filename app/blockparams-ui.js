/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blockparams-ui.js — the Parameters manager dialog (0.11 SU.1804, session cad-11; command BPARAMS, the command-line version is -BPARAMS).
 * The sums and the rules are blockparams.js's (DOM-free); this file only shows them. One block at a time:
 *   - Parameters: name, type, value or formula, what it comes to, a note; a row that is refused says why and keeps what was there.
 *   - Visibility parameters: each with its formula (empty = each reference chooses), its default state and its states (rename, remove,
 *     "shows when the formula gives", new state as a copy of the default); in the block editor "Put the selected objects in this state".
 *   - This reference (when BPARAMS was started on a selected reference): its own value for each parameter and its own state for each
 *     visibility parameter that has no formula.
 * In the block editor the edits are the editor's (Save keeps them); outside it each change is one undo step on the block, as -BPARAMS does.
 *
 *   installBlockParams({ root, doc, host, el, t, print, focusCommandLine })  sets host.blockParamsManager({ name, ref, be }) → Promise<void>
 * Test hooks: dialog[data-bpm]; [data-bpm-row=<param>] with [data-bpm-expr] [data-bpm-kind] [data-bpm-value] [data-bpm-remove];
 * [data-bpm-new-name] [data-bpm-new-expr] [data-bpm-new-kind] [data-bpm-add]; [data-bpm-vis=<name>] with [data-bpm-vexpr] [data-bpm-vdef]
 * [data-bpm-state=<name>] [data-bpm-assign] [data-bpm-addstate]; [data-bpm-new-vis] [data-bpm-addvis]; [data-bpm-ref-val=<param>]
 * [data-bpm-ref-state=<vis>]; [data-bpm-note]; [data-bpm-close].
 */
import * as B from './blockparams.js';

const fmt = (v) => (Number.isFinite(v) ? String(Math.round(v * 1e6) / 1e6) : '');

export function installBlockParams({ root, doc, host, el, t, print, focusCommandLine }) {
  const why = (r) => { const k = String(r.error || ''); const [key, arg] = k.split(':'); return key.startsWith('blockparams.') ? t(key, { list: (r.by || []).join(', '), v: arg || '' }) : k; };
  host.blockParamsManager = ({ name, ref = null, be = null }) => new Promise((done) => {
    const blk = doc.blocks.get(name);
    const bp = be ? (be.bp ||= B.cloneBp(blk.bp)) : B.cloneBp(blk.bp);
    let refId = ref?.id ?? null;
    const theRef = () => (refId != null ? doc.get(refId) : null);
    const save = () => { if (!be) doc.change('BPARAMS', () => doc.defineBlock({ ...doc.blocks.get(name), bp: B.hasBp(bp) ? bp : null })); };
    const note = el('p', { className: 'cc-note', role: 'status', 'aria-live': 'polite', dataset: { bpmNote: '' } });
    const say = (s, bad = false) => { note.textContent = s; note.classList.toggle('is-bad', bad); if (s) print(s); };
    /** Run one edit of bp: refused → say why, nothing kept; done → save, redraw the dialog. */
    const edit = (r, okText = '') => { if (!r.ok) { say(t('blockparams.say.error', { why: why(r) }), true); render(); return false; } save(); say(okText); render(); return true; };
    const input = (value, data, label, extra = {}) => {
      const i = el('input', { type: 'text', className: 'cc-input', value: value ?? '', 'aria-label': label, dataset: data, ...extra });
      i.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); i.dispatchEvent(new Event('change')); } });
      return i;
    };
    const kindSel = (kind, data) => el('select', { className: 'cc-input', 'aria-label': t('bpm.kind'), dataset: data },
      ...B.KINDS.map((k) => el('option', { value: k, selected: k === (kind || 'number') }, t('blockparams.kind.' + k))));
    const small = (label, data, fn, title = '') => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: data, title, onclick: fn }, label);
    const x = (data, fn, label) => el('button', { type: 'button', className: 'cc-x', 'aria-label': label, title: label, dataset: data, onclick: fn }, '×');

    const paramsBox = el('div', { className: 'cc-bpm-section' });
    const visBox = el('div', { className: 'cc-bpm-section' });
    const refBox = el('div', { className: 'cc-bpm-section' });

    function render() {
      const ref = theRef();
      const r = B.resolveBp(bp, ref?.bp);
      // ---- parameters
      const rows = bp.params.map((p) => {
        const ex = input(p.expr, { bpmExpr: p.name }, t('bpm.expr.of', { name: p.name }));
        ex.addEventListener('change', () => { if (ex.value.trim() !== p.expr) edit(B.setParam(bp, { name: p.name, expr: ex.value.trim() }), t('bpm.said.changed', { name: p.name })); });
        const ks = kindSel(p.kind, { bpmKind: p.name });
        ks.addEventListener('change', () => edit(B.setParam(bp, { name: p.name, expr: p.expr, kind: ks.value }), t('bpm.said.changed', { name: p.name })));
        const nt = input(p.note || '', { bpmPnote: p.name }, t('bpm.note.of', { name: p.name }));
        nt.addEventListener('change', () => edit(B.setParam(bp, { name: p.name, expr: p.expr, note: nt.value.trim() })));
        const err = r.errors.get(p.name);
        return el('tr', { dataset: { bpmRow: p.name } },
          el('th', { scope: 'row' }, p.name), el('td', {}, ks), el('td', {}, ex),
          el('td', { dataset: { bpmValue: p.name } }, err ? el('span', { className: 'cc-note is-bad' }, why({ error: err })) : fmt(r.values.get(p.name))),
          el('td', {}, nt), el('td', {}, x({ bpmRemove: p.name }, () => edit(B.removeParam(bp, p.name), t('bpm.said.removed', { name: p.name })), t('bpm.remove', { name: p.name }))));
      });
      const nn = input('', { bpmNewName: '' }, t('bpm.new.name'), { placeholder: t('bpm.new.name') });
      const ne = input('', { bpmNewExpr: '' }, t('bpm.new.expr'), { placeholder: t('bpm.new.expr') });
      const nk = kindSel('number', { bpmNewKind: '' });
      const add = () => { const n = nn.value.trim(), e = ne.value.trim(); if (!n || !e) { say(t('bpm.need.both'), true); return; } edit(B.setParam(bp, { name: n, expr: e, kind: nk.value }), t('bpm.said.added', { name: n })); };
      ne.addEventListener('change', () => { if (nn.value.trim() && ne.value.trim()) add(); });
      paramsBox.replaceChildren(el('h3', { className: 'cc-h' }, t('bpm.params')),
        el('table', { className: 'cc-bpm-table' },
          el('thead', {}, el('tr', {}, ...['bpm.col.name', 'bpm.col.kind', 'bpm.col.expr', 'bpm.col.value', 'bpm.col.note', ''].map((k) => el('th', { scope: 'col' }, k ? t(k) : '')))),
          el('tbody', {}, ...rows,
            el('tr', { className: 'cc-bpm-new' }, el('td', {}, nn), el('td', {}, nk), el('td', {}, ne), el('td', {}), el('td', {}), el('td', {}, small(t('bpm.add'), { bpmAdd: '' }, add))))),
        bp.params.length ? null : el('p', { className: 'cc-note' }, t('bpm.params.none')));
      // ---- visibility parameters
      const visRows = bp.vis.map((v) => {
        const ve = input(v.expr || '', { bpmVexpr: v.name }, t('bpm.vexpr.of', { name: v.name }), { placeholder: t('bpm.vexpr.empty') });
        ve.addEventListener('change', () => edit(B.setVisExpr(bp, v.name, ve.value.trim()), t('bpm.said.changed', { name: v.name })));
        const vd = el('select', { className: 'cc-input', 'aria-label': t('bpm.vdef.of', { name: v.name }), dataset: { bpmVdef: v.name } }, ...v.states.map((s) => el('option', { value: s.name, selected: s.name === (v.def || v.states[0].name) }, s.name)));
        vd.addEventListener('change', () => edit(B.setVisDefault(bp, v.name, vd.value)));
        const states = v.states.map((s) => {
          const sn = input(s.name, { bpmSname: v.name + '/' + s.name }, t('bpm.sname.of', { name: s.name }));
          sn.addEventListener('change', () => { const to = sn.value.trim(); if (to && to !== s.name) edit(B.renameState(bp, v.name, s.name, to)); });
          const sw = input(s.when ?? '', { bpmSwhen: v.name + '/' + s.name }, t('bpm.swhen.of', { name: s.name }), { inputMode: 'decimal', placeholder: t('bpm.swhen.empty') });
          sw.addEventListener('change', () => edit(B.setStateWhen(bp, v.name, s.name, sw.value.trim())));
          return el('li', { className: 'cc-bpm-state' + (r.states[v.name] === s.name ? ' is-now' : ''), dataset: { bpmState: s.name } }, sn,
            el('span', { className: 'cc-note' }, t('bpm.state.objects', { n: s.show.length })), sw,
            be ? small(t('bpm.assign'), { bpmAssign: v.name + '/' + s.name }, () => assign(v.name, s.name), t('bpm.assign.title')) : null,
            x({ bpmSremove: v.name + '/' + s.name }, () => edit(B.removeState(bp, v.name, s.name)), t('bpm.remove', { name: s.name })));
        });
        const ns = input('', { bpmNewState: v.name }, t('bpm.new.state'), { placeholder: t('bpm.new.state') });
        return el('div', { className: 'cc-bpm-vis', dataset: { bpmVis: v.name } },
          el('div', { className: 'cc-bpm-vhead' }, el('strong', {}, v.name), el('span', { className: 'cc-note' }, t('bpm.vis.now', { state: r.states[v.name] || '' })),
            x({ bpmVremove: v.name }, () => edit(B.removeVis(bp, v.name), t('bpm.said.removed', { name: v.name })), t('bpm.remove', { name: v.name }))),
          el('label', { className: 'cc-ts-field' }, el('span', {}, t('bpm.vexpr')), ve),
          el('label', { className: 'cc-ts-field' }, el('span', {}, t('bpm.vdef')), vd),
          el('ul', { className: 'cc-bpm-states' }, ...states),
          el('div', { className: 'cc-bpm-row' }, ns, small(t('bpm.addstate'), { bpmAddstate: v.name }, () => { const n = ns.value.trim(); if (n) edit(B.addState(bp, v.name, n, { how: 'copy', from: v.def || v.states[0].name }), t('bpm.said.added', { name: n })); })));
      });
      const nv = input('', { bpmNewVis: '' }, t('bpm.new.vis'), { placeholder: t('bpm.new.vis') });
      visBox.replaceChildren(el('h3', { className: 'cc-h' }, t('bpm.vis')), ...visRows,
        bp.vis.length ? null : el('p', { className: 'cc-note' }, t('bpm.vis.none')),
        el('div', { className: 'cc-bpm-row' }, nv, small(t('bpm.addvis'), { bpmAddvis: '' }, () => { const n = nv.value.trim(); if (n) edit(B.addVis(bp, n, t('bpm.state.first')), t('bpm.said.added', { name: n })); })),
        be ? null : el('p', { className: 'cc-note' }, t('bpm.assign.where')));
      // ---- this reference
      if (!ref) { refBox.replaceChildren(); refBox.hidden = true; return; }
      refBox.hidden = false;
      const setRef = (r2) => { if (!r2.ok) { say(t('blockparams.say.error', { why: why(r2) }), true); render(); return; } doc.change('BPARAMS', () => doc.update(ref.id, { ...ref, bp: r2.bp || undefined }, doc.model)); say(t('bpm.said.ref')); render(); };
      refBox.replaceChildren(el('h3', { className: 'cc-h' }, t('bpm.ref')), el('p', { className: 'cc-note' }, t('bpm.ref.lede')),
        ...bp.params.map((p) => { const i = input(ref.bp?.vals?.[p.name] ?? '', { bpmRefVal: p.name }, t('bpm.ref.val', { name: p.name }), { placeholder: p.expr }); i.addEventListener('change', () => setRef(B.refSetValue(ref.bp, bp, p.name, i.value.trim()))); return el('label', { className: 'cc-ts-field' }, el('span', {}, p.name), i); }),
        ...bp.vis.filter((v) => !v.expr).map((v) => { const s = el('select', { className: 'cc-input', dataset: { bpmRefState: v.name } }, ...B.statesFor(bp, v.name, ref.bp).map((q) => el('option', { value: q.name, selected: q.current }, q.name))); s.addEventListener('change', () => setRef(B.refSetState(ref.bp, bp, v.name, s.value))); return el('label', { className: 'cc-ts-field' }, el('span', {}, v.name), s); }));
    }
    function assign(vis, state) {
      const ids = [...host.selection].filter((id) => be.map.has(id));
      if (!ids.length) { say(t('bpm.assign.none'), true); return; }
      let next = B.nextKey([...be.map.values()], bp);
      const keys = [];
      for (const id of ids) {
        const e = be.map.get(id);
        let key = e.bpk;
        if (!Number.isInteger(key)) { key = next++; doc.change('BPARAMS', () => doc.update(id, { ...e, bpk: key }, be.map)); }
        keys.push(key);
      }
      edit(B.assignObjects(bp, vis, state, keys, true), t('blockparams.say.assigned', { n: keys.length, vis, state }));
    }
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-dsdlg cc-bpm', 'aria-labelledby': 'cc-bpm-title', dataset: { bpm: name } },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-bpm-title' }, t('bpm.title', { name }))),
      el('div', { className: 'cc-bpm-body' }, paramsBox, visBox, refBox, note),
      el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { bpmClose: '' }, onclick: () => dlg.close() }, t('bpm.close'))));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { dlg.remove(); host.redraw?.(); focusCommandLine(); done(); });
    render();
    root.append(dlg);
    dlg.showModal();
  });
}
