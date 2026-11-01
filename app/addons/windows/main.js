/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the window and door builder for CadCraft (0.8 SU.874, session `fab-08`) on add-on API 1.0, with the Problems source of API 1.3 when the host has it (docs/ADDONS-SPEC.md §5.4).
 * A window is an object (`win`) drawn in elevation: a profile system (lib/systems.js: generic example systems, or the shop's own),
 * the opening, a layout of columns and rows with an operation for each pane (lib/model.js), and from that the workshop's papers
 * (lib/job.js): the profile cut list with its angles and welding allowances, the bars to saw (lib/cutlist/bars.js: one optimisation
 * per profile and colour), steel reinforcement, glass sizes, a hardware and gasket list, and a label for every piece in sawing order
 * (lib/cutlist labels.js). Checks that fail go to the shell's Problems (api.problems).
 *
 * Commands: WINDOW (WIN) · WINLIST · WINBARS.  Exports (EXPORT): profile cut list (CSV), bars (CSV), glass (CSV), hardware (CSV), labels (HTML).
 * Without the add-on a window is a plain block reference that shows, plots and saves.
 */
import { setT, t, ruleUnitOf, perUnit, fmtLen } from './lib/core.js';
import { SYSTEMS, cleanSystem, systemList } from './lib/systems.js';
import { buildWindow, cleanSpec, hardwareList, parseLayout, formatLayout, OPS } from './lib/model.js';
import { elevEnts } from './lib/draw.js';
import { jobModels, barsJob, glassList, glassCsv, cutCsv, jobLabels } from './lib/job.js';
import { barsCsv } from './lib/cutlist/bars.js';
import { labelSheets, labelsHtml, TEMPLATES } from './lib/cutlist/labels.js';

export const DEFAULTS = { toolbar: false, share: false, template: 'a4-24', labelOrder: 'saw', last: { system: 'pvc-70', colour: '', w: 1200, h: 1200, layout: 'TL', kind: 'window', glass: '4/16/4' }, systems: [] };
export const LAYERS = { 'WIN-ELEV': { color: 4, lineweight: 0.25 } };
const MM_IN = 25.4;

export function cleanData(data, systems = SYSTEMS) {
  if (!data || typeof data !== 'object') return null;
  const own = data.sys && typeof data.sys === 'object' ? cleanSystem(data.sys) : null;
  const sys = { ...systems, ...(own ? { [own.id]: own } : {}) };
  const spec = cleanSpec(data.spec, sys);
  if (!spec) return null;
  const kmm = Number(data.kmm) > 0 ? Number(data.kmm) : 1;
  return { u: data.u === 'in' ? 'in' : 'mm', kmm, spec, system: sys[spec.system], own };
}
const stored = (d) => ({ u: d.u, kmm: d.kmm, spec: d.spec, ...(d.own ? { sys: d.own } : {}) });

export function activate(api) {
  setT(api.t);
  const saved = api.storage.get('settings') || {};
  const settings = { ...structuredClone(DEFAULTS), ...saved, last: { ...DEFAULTS.last, ...saved.last } };
  const save = () => api.storage.set('settings', settings);
  const opt = (key, l) => api.commands.option(key, l);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const allSystems = () => Object.fromEntries(systemList(settings.systems).map((s) => [s.id, s]));
  const kindOf = (e) => api.objects.kindOf(e);

  // ---------------------------------------------------------------------------------------------- the object
  api.objects.define('win', {
    version: 1, name: t('obj.win'),
    draw: (data) => { const d = cleanData(data, allSystems()); return d ? elevEnts(buildWindow(d.spec, d.system), d.kmm, { words: { size: t('size.label') } }) : []; },
    read: (data) => { const d = cleanData(data, allSystems()); return d ? stored(d) : null; },
  });
  function readWins(doc) {
    const out = [];
    for (const [id, e] of doc.model) if (kindOf(e) === 'win') { const d = cleanData(api.objects.dataOf(e), allSystems()); if (d) out.push({ id, e, d }); }
    return out;
  }
  function ensureLayers(doc) { for (const [name, l] of Object.entries(LAYERS)) if (!doc.layers.has(name)) doc.addLayer({ name, ...l }); }
  function nextNo(doc, kind, taken = []) {
    const pre = kind === 'door' ? 'D' : 'W';
    let n = 0;
    for (const no of [...readWins(doc).map((w) => w.d.spec.no), ...taken]) { const m = new RegExp('^' + pre + '(\\d+)$').exec(no); if (m) n = Math.max(n, Number(m[1])); }
    return pre + String(n + 1).padStart(2, '0');
  }
  const unitFacts = (doc) => { const u = ruleUnitOf(doc), per = perUnit(doc, u), mmPerRule = u === 'in' ? MM_IN : 1; return { u, mmPerDrawing: per * mmPerRule, kmm: 1 / (per * mmPerRule) }; };
  const parseSize = (s, mmPerDrawing) => {
    const m = /^\s*(\d+(?:\.\d+)?)\s*[x×*]\s*(\d+(?:\.\d+)?)\s*$/i.exec(String(s ?? ''));
    return m ? { w: Number(m[1]) * mmPerDrawing, h: Number(m[2]) * mmPerDrawing } : null;
  };
  const dsize = (mm, f) => fmtLen(mm / f.mmPerDrawing, f.u);

  // ---------------------------------------------------------------------------------------------- WINDOW
  cmd('WINDOW', ['WIN'], async (c) => {
    const doc = c.doc, f = unitFacts(doc), made = [];
    const L = settings.last;
    ensureLayers(doc);
    const systems = allSystems();
    for (;;) {
      const sys = systems[L.system] || Object.values(systems)[0];
      const r = await c.point(t('ask.win.at', { kind: t('kind.' + L.kind), size: dsize(L.w, f) + ' × ' + dsize(L.h, f), layout: L.layout, system: sys.name, colour: L.colour || sys.colours[0] || '—' }), {
        none: true, options: [opt('Z', t('opt.size')), opt('L', t('opt.layout')), opt('Y', t('opt.system')), opt('C', t('opt.colour')), opt('K', t('opt.kind')), opt('G', t('opt.glass'))],
      });
      if (!r) break;
      if (r.option === 'Z') {
        const s = parseSize(await c.string(t('ask.win.size', { unit: t('unit.' + f.u) }), { default: dsize(L.w, f) + 'x' + dsize(L.h, f) }), f.mmPerDrawing);
        if (!s || s.w < 200 || s.h < 200) { c.print(t('err.size')); continue; }
        L.w = s.w; L.h = s.h; save(); continue;
      }
      if (r.option === 'L') {
        const text = String(await c.string(t('ask.win.layout'), { default: L.layout }) ?? '').trim();
        const norm = formatLayout(parseLayout(text));
        if (text && norm.replace(/[~@\d.]/g, '').length === 0) { c.print(t('err.layout')); continue; }
        L.layout = norm; save(); continue;
      }
      if (r.option === 'Y') {
        const list = Object.values(systems);
        const v = String(await c.string(t('ask.win.system', { list: list.map((s, i) => (i + 1) + ' ' + s.name).join('; ') }), { default: String(list.findIndex((s) => s.id === L.system) + 1) }) ?? '').trim();
        const pick = list[Number(v) - 1] || list.find((s) => s.id === v || s.name.toLowerCase().startsWith(v.toLowerCase()));
        if (!pick) { c.print(t('err.system')); continue; }
        L.system = pick.id; L.colour = pick.colours.includes(L.colour) ? L.colour : (pick.colours[0] || ''); save(); continue;
      }
      if (r.option === 'C') { L.colour = String(await c.string(t('ask.win.colour', { list: sys.colours.join(', ') }), { default: L.colour || sys.colours[0] || '' }) ?? '').trim().slice(0, 40); save(); continue; }
      if (r.option === 'K') { L.kind = L.kind === 'door' ? 'window' : 'door'; save(); continue; }
      if (r.option === 'G') { L.glass = String(await c.string(t('ask.win.glass'), { default: L.glass }) ?? '').trim().slice(0, 60) || L.glass; save(); continue; }
      if (r.option) continue;
      const spec = cleanSpec({ no: nextNo(doc, L.kind, made.map((m) => m.no)), kind: L.kind, system: sys.id, colour: L.colour, w: L.w, h: L.h, layout: L.layout, glass: L.glass }, systems);
      if (!spec) { c.print(t('err.size')); continue; }
      const own = !SYSTEMS[sys.id] ? sys : null;
      let e;
      doc.change('WINDOW', () => { e = doc.add({ ...api.objects.create('win', { u: f.u, kmm: f.kmm, spec, ...(own ? { sys: own } : {}) }, { layer: 'WIN-ELEV' }), x: r.x, y: r.y, rot: 0 }); });
      made.push({ id: e.id, no: spec.no });
      c.print(t('done.win', { no: spec.no, kind: t('kind.' + spec.kind), size: dsize(spec.w, f) + ' × ' + dsize(spec.h, f) }));
      for (const p of buildWindow(spec, sys).problems) c.print(t('prob.' + p.code, p.vars));
    }
    if (made.length) api.select(made.map((m) => m.id));
  });

  // ---------------------------------------------------------------------------------------------- the job
  function job(doc) {
    const wins = readWins(doc);
    if (!wins.length) throw new Error(t('err.empty'));
    const models = jobModels(wins.map((w) => ({ spec: w.d.spec, system: w.d.system })));
    return { wins, models };
  }
  const word = (k, v) => t(k, v);
  let cache = null;
  function bars(doc) {
    const { models } = job(doc);
    const key = JSON.stringify([models.map((m) => [m.spec, m.system.id]), settings.share]);
    if (cache && cache.key === key) return cache;
    cache = { key, models, bars: barsJob(models, { share: settings.share }) };
    return cache;
  }
  const fmtM = (mm) => fmtLen(mm / 1000, 'in');

  cmd('WINLIST', ['WINL'], async (c) => {
    let J;
    try { J = bars(c.doc); } catch (err) { c.print(err.message); return; }
    const pieces = J.models.reduce((a, m) => a + m.pieces.reduce((s, p) => s + p.qty, 0), 0);
    c.print(t('done.list', { wins: J.models.length, pieces, bars: J.bars.result.bars_n, waste: J.bars.result.wastePct }));
    for (const g of J.bars.result.groups) c.print('  ' + t('list.group', { group: g.group, bars: g.bars_n, len: fmtM(g.stockLength), waste: g.wastePct }) + (g.optimal ? '' : ' ' + t('list.approx')));
    const glass = glassList(J.models);
    c.print(t('list.glass', { n: glass.reduce((a, g) => a + g.qty, 0), area: Math.round(glass.reduce((a, g) => a + g.area, 0) * 100) / 100 }));
    for (const r of hardwareList(J.models)) c.print('  ' + r.qty + (r.spec === 'm' ? ' m' : '') + ' × ' + t(r.item) + (r.spec && r.spec !== 'm' ? ' ' + r.spec : ''));
    for (const m of J.models) for (const p of m.problems) c.print(t('prob.on', { no: m.spec.no }) + ' ' + t('prob.' + p.code, p.vars));
    c.print(t('done.list.export'));
  }, { noRepeat: true, keepSelection: true });

  cmd('WINBARS', ['WINB'], async (c) => {
    let J;
    try { J = bars(c.doc); } catch (err) { c.print(err.message); return; }
    c.print(t('done.bars', { n: J.bars.result.bars_n, pct: J.bars.result.wastePct }));
    for (const g of J.bars.result.groups) {
      c.print(t('list.group', { group: g.group, bars: g.bars_n, len: fmtM(g.stockLength), waste: g.wastePct }));
      for (const b of g.bars) c.print('  ' + t('bars.bar', { no: b.no, len: fmtLen(b.stock, 'mm'), cuts: b.pieces.map((p) => fmtLen(p.length, 'mm') + (p.cuts[0] !== 90 || p.cuts[1] !== 90 ? ' ' + p.cuts.join('/') : '')).join(' + '), left: fmtLen(b.offcut, 'mm') }));
    }
    for (const u of [...new Set(J.bars.result.groups.flatMap((g) => g.unplaced || []))]) c.print(t('bars.unplaced', { id: u.id, len: fmtLen(u.length, 'mm') }));
    c.print(t('done.bars.export'));
  }, { noRepeat: true, keepSelection: true });

  // ---------------------------------------------------------------------------------------------- Problems
  // Problems need the shell's add-on API 1.3 and a build with the panel; without them the call is skipped and the checks still print
  const probs = (() => { try { return api.problems?.source ? api.problems.source({ id: 'checks', label: t('ui.group'), kind: 'check', debounceMs: 500 }) : null; } catch { return null; } })() || { set() {}, dispose() {} };
  function pushProblems(doc) {
    const list = [];
    for (const { id, d } of readWins(doc)) for (const p of buildWindow(d.spec, d.system).problems) {
      list.push({ id: 'windows:' + p.code + ':' + id + (p.vars.n ? '#' + p.vars.n : ''), code: 'windows.' + p.code, severity: p.code === 'sash-heavy' || p.code === 'tilt-wide' || p.code === 'layout-wide' || p.code === 'layout-tall' ? 'warning' : 'note', text: d.spec.no + ': ' + t('prob.' + p.code, p.vars), about: [{ kind: 'window', id: String(id), label: d.spec.no }] });
    }
    probs.set(list);
  }
  api.drawing.afterChange((doc) => { try { pushProblems(doc); } catch { /* the checks never block an edit */ } });

  // ---------------------------------------------------------------------------------------------- files
  const csvHead = (prefix, keys) => Object.fromEntries(keys.map((k) => [k, t(prefix + k)]));
  const bom = '﻿';
  api.files.exporter({ id: 'windows-cut', label: t('export.cut'), extension: 'csv', mime: 'text/csv', write: (doc) => bom + cutCsv(job(doc).models, { head: csvHead('csvc.', ['id', 'window', 'name', 'profile', 'group', 'length', 'outer', 'cut1', 'cut2', 'qty']), word: (k) => t(k) }) });
  api.files.exporter({ id: 'windows-bars', label: t('export.bars'), extension: 'csv', mime: 'text/csv', write: (doc) => bom + barsCsv(bars(doc).bars.result, { head: csvHead('csvb.', ['group', 'bar', 'stock', 'piece', 'length', 'cut1', 'cut2', 'position']) }) });
  api.files.exporter({ id: 'windows-glass', label: t('export.glass'), extension: 'csv', mime: 'text/csv', write: (doc) => bom + glassCsv(glassList(job(doc).models), { head: csvHead('csvg.', ['id', 'window', 'w', 'h', 'qty', 'build', 'area']) }) });
  api.files.exporter({
    id: 'windows-hardware', label: t('export.hardware'), extension: 'csv', mime: 'text/csv',
    write: (doc) => {
      const rows = hardwareList(job(doc).models);
      const q = (v) => { const s = String(v ?? ''); return /[",\r\n]/.test(s) || /^[=+\-@]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
      return bom + [[t('csvh.item'), t('csvh.size'), t('csvh.qty')].map(q).join(','), ...rows.map((r) => [t(r.item), r.spec === 'm' ? t('unit.m') : r.spec, r.qty].map(q).join(','))].join('\r\n') + '\r\n';
    },
  });
  api.files.exporter({
    id: 'windows-labels', label: t('export.labels'), extension: 'html', mime: 'text/html',
    write: (doc) => {
      const J = bars(doc);
      const items = jobLabels(J.models, settings.labelOrder === 'saw' ? J.bars : null, { fmt: (v) => fmtLen(v, 'mm'), words: { nest: t('label.bar'), cut: '{cut}', grain: '', none: '' }, word: (k) => t(k) });
      const tpl = TEMPLATES[settings.template] ? settings.template : 'a4-24';
      const r = labelSheets(items, tpl);
      if (r.warnings.length) api.print(t('warn.barcode', { n: r.warnings.length }));
      return labelsHtml(r.pages, { title: t('export.labels.title', { name: doc.meta?.name || '' }), template: tpl });
    },
  });

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['WINDOW', 'ui.window', 'bi-window'], ['WINLIST', 'ui.list', 'bi-list-columns'], ['WINBARS', 'ui.bars', 'bi-distribute-horizontal']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const x of bar) x?.remove?.(); bar = null; }
    if (!on) return;
    bar = [api.toolbar.group({ id: 'windows', label: t('ui.group'), tools: ACTIONS.map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) })];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => { showToolbar(false); probs.dispose(); });
  const panelBody = api.ui.panelSection({ id: 'windows', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; renderPanel(panelBody); }, 400); });
    api.onDeactivate(off);
  }
  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    let facts = '';
    try { if (api.doc) { const n = readWins(api.doc).length; if (n) facts = t('panel.facts', { n }); } } catch { facts = ''; }
    const acts = mk('div', 'win-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';
    for (const [command, lab] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc', t(lab));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-win-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(mk('p', 'win-facts', facts), acts);
  }
  api.ui.settingsSection({ id: 'windows', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, structuredClone(DEFAULTS)); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument;
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const select = (key, pairs, get, set) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-win-setting', key);
      for (const [v, l] of pairs) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(get());
      s.addEventListener('change', () => { set(s.value); save(); });
      return s;
    };
    row(t('set.toolbar'), select('toolbar', [['false', t('off')], ['true', t('on')]], () => settings.toolbar, (v) => { settings.toolbar = v === 'true'; showToolbar(settings.toolbar); }));
    row(t('set.share'), select('share', [['false', t('off')], ['true', t('on')]], () => settings.share, (v) => { settings.share = v === 'true'; cache = null; }));
    row(t('set.template'), select('template', Object.keys(TEMPLATES).map((k) => [k, t('tpl.' + k)]), () => settings.template, (v) => { settings.template = v; }));
    row(t('set.order'), select('labelOrder', [['saw', t('order.saw')], ['list', t('order.list')]], () => settings.labelOrder, (v) => { settings.labelOrder = v; }));
    // the shop's own profile systems: a JSON list (the help shows the fields); each is cleaned (lib/systems.js cleanSystem) and the ones that fail are named
    const ta = d.createElement('textarea');
    ta.rows = 6; ta.className = 'form-control'; ta.setAttribute('data-win-setting', 'systems'); ta.spellcheck = false;
    ta.value = settings.systems.length ? JSON.stringify(settings.systems, null, 1) : '';
    const msg = d.createElement('p'); msg.className = 'shell-note'; msg.setAttribute('data-win-systems-status', '1');
    ta.addEventListener('change', () => {
      let list = [];
      try { const j = ta.value.trim() ? JSON.parse(ta.value) : []; list = Array.isArray(j) ? j : [j]; } catch { msg.textContent = t('set.systems.bad'); return; }
      const good = list.map(cleanSystem).filter(Boolean);
      settings.systems = good; save(); cache = null;
      msg.textContent = t('set.systems.saved', { n: good.length, bad: list.length - good.length });
    });
    row(t('set.systems'), ta);
    fs.append(msg);
    const note = d.createElement('p'); note.className = 'shell-note'; note.textContent = t('set.systems.note'); fs.append(note);
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'windows', label: t('props.section'), types: ['insert'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length || !ents.every((e) => kindOf(e) === 'win')) return [];
    const dataOf = (e) => cleanData(api.objects.dataOf(e), allSystems());
    const f0 = dataOf(ents[0]);
    const mm = (f0?.u === 'in' ? MM_IN : 1);
    const field = (key, kind, lab, get, put, extra = {}) => ({
      key, kind, label: t(lab, { unit: t('unit.mm') }),
      get: (e) => { const d = dataOf(e); return d ? get(d.spec, d) : ''; },
      set: (e, v) => { const d = dataOf(e); if (!d) return e; const spec = cleanSpec(put({ ...d.spec }, v) || d.spec, { ...allSystems(), ...(d.own ? { [d.own.id]: d.own } : {}) }); return spec ? api.objects.update(e, { ...stored(d), spec }) : e; },
      ...extra,
    });
    void mm;
    const out = [
      field('no', 'text', 'prop.no', (s) => s.no, (s, v) => { s.no = String(v ?? ''); return s; }),
      field('kind', 'choice', 'prop.kind', (s) => s.kind, (s, v) => { s.kind = v; return s; }, { choices: () => [['window', t('kind.window')], ['door', t('kind.door')]] }),
      field('system', 'choice', 'prop.system', (s) => s.system, (s, v) => { s.system = v; const sys = allSystems()[v]; if (sys && !sys.colours.includes(s.colour)) s.colour = sys.colours[0] || ''; return s; }, { choices: () => systemList(settings.systems).map((s) => [s.id, s.name]) }),
      field('colour', 'text', 'prop.colour', (s) => s.colour, (s, v) => { s.colour = String(v ?? ''); return s; }),
      field('w', 'num', 'prop.w', (s) => s.w, (s, v) => { const n = Number(v); if (n >= 200) s.w = n; return s; }),
      field('h', 'num', 'prop.h', (s) => s.h, (s, v) => { const n = Number(v); if (n >= 200) s.h = n; return s; }),
      field('layout', 'text', 'prop.layout', (s) => s.layout, (s, v) => { s.layout = String(v ?? ''); return s; }),
      field('glass', 'text', 'prop.glass', (s) => s.glass, (s, v) => { s.glass = String(v ?? ''); return s; }),
    ];
    if (ents.length === 1) out.push({ key: 'parts', kind: 'ro', label: t('prop.parts'), get: (e) => { const d = dataOf(e); if (!d) return ''; const m = buildWindow(d.spec, d.system); return String(m.pieces.reduce((a, p) => a + p.qty, 0)) + ' + ' + m.glass.reduce((a, g) => a + g.qty, 0) + ' ' + t('prop.glass.n'); } });
    return out;
  }
  void OPS;
  api.log('Windows ready');   // i18n-ignore (developer log)
}
