/* SPDX-License-Identifier: Apache-2.0 */
/**
 * Circuit simulation add-on for CadCraft (0.9 SU.1084). A schematic editor on the shared schematic engine (lib/schematic, XE.1) with a parts palette, wiring with
 * junctions, net names and a rule check shown in Problems; it runs on the shared circuit solver (lib/em, XE.10): DC operating point, transient and AC sweep,
 * read with a meter, a scope and a plotter placed on nets. Part values are typed by the person; no maker's model is read, and Multisim files are not read.
 * lib/em and lib/schematic here are byte-identical copies (core/../test/sync.mjs). The panel is the right panel's "Circuit simulation" section, also in a larger window (CIRCUIT).
 * The sheet is kept in this browser (add-on storage); Save / Open carry it as a .circuit.json file; Export netlist writes a SPICE-style text deck.
 */
import * as S from './core/sheet.js';
import { createEditor } from './core/editor.js';
import { checkSheet } from './core/check.js';
import { runOp, runTran, runAc } from './core/sim.js';
import { toDeck } from './core/netlist.js';
import { lineChart, eng } from './core/charts.js';
import { exampleSheet } from './core/example.js';

const CSS = `
.cr-root{display:flex;flex-direction:column;gap:.45rem;font-size:.85em}
.cr-row{display:flex;flex-wrap:wrap;gap:.25rem;align-items:center}
.cr-group .cr-grouplabel{opacity:.7;min-width:4.5rem}
.cr-btn{border:1px solid var(--ws-line,rgba(127,127,127,.45));background:none;color:inherit;border-radius:.25rem;padding:.12rem .45rem;cursor:pointer}
.cr-btn[aria-pressed=true]{background:rgba(37,99,235,.18);font-weight:600}.cr-btn:disabled{opacity:.5;cursor:default}
.cr-btn.is-primary{font-weight:600}
.cr-input{border:1px solid var(--ws-line,rgba(127,127,127,.45));background:transparent;color:inherit;border-radius:.25rem;padding:.1rem .3rem;max-width:8rem}
.cr-input.is-bad{outline:2px solid #c2410c}
.cr-canvas{width:100%;height:22rem;border:1px solid var(--ws-line,rgba(127,127,127,.35));border-radius:.3rem;touch-action:none;background:transparent;color:inherit;cursor:crosshair}
.cr-dialog .cr-canvas{height:min(56vh,640px)}
.cr-gridpt{fill:currentColor;opacity:.35}
.cr-wire{stroke:#16a34a;stroke-width:1.8}.cr-wire.is-sel{stroke:#2563eb;stroke-width:3}.cr-wire.is-preview{stroke:#2563eb;stroke-dasharray:4 3}
.cr-glyph{stroke:currentColor;stroke-width:1.8;stroke-linejoin:round;stroke-linecap:round}.cr-dot{fill:#16a34a}
.cr-hit{fill:transparent}.cr-sym.is-sel .cr-hit{stroke:#2563eb;stroke-dasharray:3 3;fill:rgba(37,99,235,.06)}
.cr-sym{cursor:move}
.cr-pin{fill:var(--ws-panel-bg,Canvas);stroke:#c2410c;stroke-width:1.2}.cr-pin.is-wired{fill:#16a34a;stroke:#16a34a}.cr-pin.is-from{stroke:#2563eb;fill:#2563eb}
.cr-tag{font-size:12px;font-weight:600;fill:currentColor}.cr-val{font-size:11px;fill:currentColor;opacity:.8}.cr-net{font-size:11px;fill:#7c3aed;font-weight:600}.cr-reading{font-size:11px;fill:#2563eb;font-weight:600}
.cr-note{margin:0;opacity:.85}.cr-status{margin:0;opacity:.85;min-height:1.2em}.cr-warn{color:#c2410c}
.cr-inspector{border:1px solid var(--ws-line,rgba(127,127,127,.3));border-radius:.3rem;padding:.35rem;display:flex;flex-direction:column;gap:.25rem}
.cr-inspector label{min-width:4rem}.cr-h{margin:0;font-size:1em}.cr-unit{opacity:.7}
.cr-results{display:flex;flex-direction:column;gap:.35rem}
.cr-table{border-collapse:collapse;width:100%}.cr-table th,.cr-table td{border-bottom:1px solid rgba(127,127,127,.25);padding:.1rem .3rem;text-align:left}.cr-table td.n{text-align:right;font-variant-numeric:tabular-nums}
.cr-chart{width:100%;height:auto;color:inherit}
.cr-dialog{width:min(96vw,1100px);height:min(94vh,900px);padding:.6rem;color:inherit;background:var(--ws-panel-bg,Canvas);overflow:auto}
`;

export async function activate(api) {
  const t = api.t, doc = document;
  const words = (r) => t(r.key, r.vars || {});

  // ---------------------------------------------------------------- the sheet (kept in this browser)
  const load = () => { try { const j = api.storage.get('sheet'); if (j) { const r = S.fromFile(j); if (r.sheet) return r.sheet; } } catch (e) { api.log('stored sheet unreadable', e); } return S.newSheet(''); };
  const saveLocal = (sch) => { try { api.storage.set('sheet', S.toFile(sch)); } catch (e) { api.log('could not keep the sheet', e); } };

  // ---------------------------------------------------------------- Problems: one source, the rule check
  let src = null;
  if (typeof window !== 'undefined' && api.problems) {
    src = api.problems.source({ id: 'rules', kind: 'check', label: t('circuit.name') + ' · ' + t('circuit.rules') });
    api.onDeactivate(() => { try { src.dispose && src.dispose(); } catch { /* gone with the page */ } });
  }
  let rows = [];
  const recheck = (sch) => {
    rows = checkSheet(sch);
    if (src) src.set(rows.map((r) => ({ id: r.id, code: r.key, severity: r.severity, text: words(r), about: r.about, rule: r.rule })));
    summary.textContent = rows.length ? t('circuit.problems', { n: rows.length }) : (sch.symbols.length ? t('circuit.noproblems') : '');
    summary.classList.toggle('cr-warn', rows.length > 0);
  };

  // ---------------------------------------------------------------- the panel
  if (!doc.getElementById('cr-addon-css')) { const s = Object.assign(doc.createElement('style'), { id: 'cr-addon-css', textContent: CSS }); doc.head.append(s); api.onDeactivate(() => s.remove()); }
  const root = doc.createElement('div'); root.className = 'cr-root'; root.setAttribute('data-circuit-root', '1');
  const h = (tag, attrs = {}, kids = []) => { const e = doc.createElement(tag); for (const k in attrs) { if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); } e.append(...kids); return e; };
  const btn = (key, run, attrs = {}) => { const b = h('button', { type: 'button', class: 'cr-btn', text: t(key), ...attrs }); b.addEventListener('click', run); return b; };
  const summary = h('p', { class: 'cr-note', 'data-cr-summary': '1', role: 'status' });
  const results = h('div', { class: 'cr-results', 'data-cr-results': '1', 'aria-live': 'polite' });

  const ed = createEditor(doc, { t, sheet: load(), onChange: (sch) => { saveLocal(sch); recheck(sch); } });

  // analysis controls
  const num = (key, def, w) => { const id = 'cr-a-' + key; const i = h('input', { id, class: 'cr-input', value: def, 'data-cr-arg': key, size: w || 6, autocomplete: 'off' }); return [h('label', { for: id, text: t('run.' + key) }), i]; };
  const args = { tstop: num('tstop', '20m'), tstep: num('tstep', '100u'), fstart: num('fstart', '1'), fstop: num('fstop', '100k'), perDecade: num('perDecade', '20') };
  const val = (k) => args[k][1].value.trim();
  const show = (res, sch) => {
    results.textContent = '';
    if (!res.ok) { for (const p of res.problems) results.append(h('p', { class: 'cr-warn', text: words(p) })); ed.setReadings(new Map()); return; }
    if (res.kind === 'op') {
      const tab = h('table', { class: 'cr-table', 'data-cr-table': 'nets' }, [h('caption', { text: t('res.op') })]);
      tab.append(h('tr', {}, [h('th', { text: t('res.net') }), h('th', { text: t('res.volts') })]));
      for (const n of res.nets) tab.append(h('tr', { 'data-cr-net-row': n.node }, [h('td', { text: n.node === '0' ? t('res.ground') : n.name }), h('td', { class: 'n', text: eng(n.v, 'V') })]));
      results.append(tab);
      const cur = Object.entries(res.currents);
      if (cur.length) {
        const tc = h('table', { class: 'cr-table', 'data-cr-table': 'currents' });
        tc.append(h('tr', {}, [h('th', { text: t('res.part') }), h('th', { text: t('res.amps') })]));
        for (const [id, i] of cur) tc.append(h('tr', { 'data-cr-cur': sch.symbol(id).tag }, [h('td', { text: sch.symbol(id).tag }), h('td', { class: 'n', text: eng(i, 'A') })]));
        results.append(tc, h('p', { class: 'cr-note', text: t('res.currentnote') }));
      }
      ed.setReadings(new Map(res.meters.map((m) => [m.sym, eng(m.v, 'V')])));
    } else if (res.kind === 'tran') {
      if (!res.traces.length) results.append(h('p', { class: 'cr-warn', text: t('run.noscope') }));
      else {
        results.append(lineChart(doc, { x: res.t, series: res.traces.map((s) => ({ name: s.tag + ' (' + (s.node === '0' ? t('res.ground') : s.node) + ')', y: s.y })), xlabel: t('res.time'), ylabel: t('res.volts'), label: t('res.scope') }));
        ed.setReadings(new Map(res.traces.map((s) => [s.sym, eng(s.y[s.y.length - 1], 'V')])));
      }
    } else if (res.kind === 'ac') {
      if (!res.plots.length) results.append(h('p', { class: 'cr-warn', text: t('run.noplot') }));
      else {
        results.append(lineChart(doc, { x: res.f, xlog: true, series: res.plots.map((p) => ({ name: p.tag, y: p.db })), xlabel: t('res.freq'), ylabel: t('res.db'), label: t('res.plotter') }));
        results.append(lineChart(doc, { x: res.f, xlog: true, series: res.plots.map((p) => ({ name: p.tag, y: p.phase })), xlabel: t('res.freq'), ylabel: t('res.deg'), label: t('res.phase'), height: 170 }));
      }
    }
  };
  let lastResult = null;
  const run = (kind) => {
    const sch = ed.sheet;
    const res = kind === 'op' ? runOp(sch) : kind === 'tran' ? runTran(sch, { tstop: val('tstop'), tstep: val('tstep') }) : runAc(sch, { fstart: val('fstart'), fstop: val('fstop'), perDecade: val('perDecade') });
    lastResult = res; show(res, sch); return res;
  };
  const arow = (label, kind, fields) => h('div', { class: 'cr-row', 'data-cr-analysis': kind }, [btn(label, () => run(kind), { 'data-cr-run': kind, class: 'cr-btn is-primary' }), ...fields.flat()]);
  const analyses = h('div', { class: 'cr-analyses' }, [
    arow('run.op', 'op', []),
    arow('run.tran', 'tran', [args.tstop, args.tstep]),
    arow('run.ac', 'ac', [args.fstart, args.fstop, args.perDecade]),
  ]);

  // files
  const download = (name, data, type) => {
    const url = URL.createObjectURL(new Blob([data], { type })), a = Object.assign(doc.createElement('a'), { href: url, download: name, hidden: true });
    doc.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  const fname = () => ((ed.sheet.name || 'circuit').replace(/[^\w.-]+/g, '-') || 'circuit');
  const open = () => {
    const input = Object.assign(doc.createElement('input'), { type: 'file', accept: '.json,.circuit.json', hidden: true });
    input.addEventListener('change', async () => {
      const f = input.files && input.files[0]; input.remove(); if (!f) return;
      const r = S.fromFile(await f.text());
      if (!r.sheet) { results.textContent = ''; results.append(h('p', { class: 'cr-warn', text: r.problems.map(words).join(' ') })); return; }
      ed.setSheet(r.sheet); saveLocal(r.sheet); recheck(r.sheet); results.textContent = '';
      if (r.problems.length) results.append(h('p', { class: 'cr-warn', text: t('file.dropped', { n: r.problems.length }) }));
    });
    doc.body.append(input); input.click();
  };
  const fresh = (sch) => { ed.setSheet(sch); saveLocal(sch); recheck(sch); results.textContent = ''; };
  const files = h('div', { class: 'cr-row' }, [
    btn('file.new', () => { if (!ed.sheet.symbols.length || !globalThis.confirm || globalThis.confirm(t('file.newask'))) fresh(S.newSheet('')); }, { 'data-cr-file': 'new' }),
    btn('file.example', () => fresh(exampleSheet()), { 'data-cr-file': 'example' }),
    btn('file.open', open, { 'data-cr-file': 'open' }),
    btn('file.save', () => download(fname() + '.circuit.json', JSON.stringify(S.toFile(ed.sheet), null, 1), 'application/json'), { 'data-cr-file': 'save' }),
    btn('file.deck', () => download(fname() + '.cir', toDeck(ed.sheet), 'text/plain'), { 'data-cr-file': 'deck' }),
  ]);
  const wide = btn('ui.wide', () => toggleDialog(), { 'data-cr-wide': '1' });
  const honesty = h('p', { class: 'cr-note', text: t('circuit.honesty') });
  root.append(h('div', { class: 'cr-row' }, [files, wide]), ed.el, summary, analyses, results, honesty);
  recheck(ed.sheet);

  let section = api.ui.panelSection({ id: 'circuit', title: t('circuit.name'), render: (body) => body.append(root) });
  let dlg = null;
  function toggleDialog() {
    if (dlg) { dlg.close(); return; }
    dlg = doc.createElement('dialog'); dlg.className = 'cr-dialog'; dlg.setAttribute('aria-label', t('circuit.name'));
    doc.body.append(dlg); dlg.append(root); wide.textContent = t('ui.narrow');
    dlg.addEventListener('cancel', (e) => e.preventDefault());   // Esc belongs to the editor (it ends a wire); "Back to the panel" closes
    dlg.addEventListener('close', () => { if (section) section.append(root); else root.remove(); dlg.remove(); dlg = null; wide.textContent = t('ui.wide'); });
    dlg.showModal(); ed.fit();
  }
  api.onDeactivate(() => { if (dlg) dlg.close(); });

  api.commands.add('CIRCUIT', [], (c) => {
    if (!dlg) toggleDialog();
    c.print(t('circuit.cmd.opened'));
  }, { help: () => t('circuit.cmd.help') });

  // for tests and other modules
  globalThis.ccCircuit = { editor: ed, run, recheck: () => { recheck(ed.sheet); return rows; }, problems: () => rows, last: () => lastResult, sheet: () => ed.sheet, fresh, example: exampleSheet, version: api.addon?.version };
  api.onDeactivate(() => { delete globalThis.ccCircuit; });
}
