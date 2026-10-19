/* SPDX-License-Identifier: Apache-2.0 */
/**
 * libpanel.js — the library panel (docs/LIBRARY-SPEC.md §3.2–3.4), a dialog in the page.
 * Sources: LibraryCraft (same-origin /api/v1/library), Files… (an item.json, or a DWG/DXF/IFC/glTF/
 * OBJ/RFA/CSV through libitem.js's adapters when this build has them), Standard (steel sections and mechanical
 * standard parts made in the page from the shared tables: stdlib.js; a section places as a section view, an elevation
 * or a 3D member — STEELMEMBER — and the Parts list view lists every placed part) and Other feeds (base URLs kept
 * in localStorage). A card shows the preview, name, maker/model, license badge, version and a
 * "Withdrawn" warning; Place hands the item to INSERT (option L), which makes the LIB_ block and asks
 * where it goes. Also: Check for updates (§6.3; Update redefines the block), Library credits (copy,
 * CSV) and "Sign in to the library" (/library/connect?app=cadcraft → postMessage → sessionStorage).
 * Library data is untrusted: the DOM is built with el() only (text nodes).
 *
 *   const lib = createLibraryPanel({ root, doc, engine, print, status, ask })
 *   lib.open({ uuid? })      standalone (Blocks panel "Library…", LIBRARY, ?library=<uuid>)
 *   lib.pick()               for INSERT L: resolves { item, slug } or null
 *   lib.placed(item, ins)    registers a use when signed in
 */

import { el } from './ui-util.js';
import { LibraryClient, LIBRARYCRAFT, feedUrl, isUuid } from './library.js';
import { itemProblem, itemEntities, libraryUses, updateLibraryBlock, creditsText, creditsCsv } from './libplace.js';
import { prims, entityBounds, validBounds, emptyBounds, growPt } from './geom.js';
import * as Li from './libitem.js';
import { FAMILIES as STD_FAMILIES, familyOf, standardCards, cardDefaults, cardItem, partsList, partsCsv, installStandard } from './stdlib.js';
import { commandRegistry } from './commands.js';

import { t, locale } from './i18n.js';
/** 'foodservice/sinks' → 'Foodservice: Sinks', as the website shows it; unknown keys as they are. */
const catLabel = (k) => Li.CATEGORIES[k] ? k.split('/')[0].replace(/^./, (c) => c.toUpperCase()) + ': ' + Li.CATEGORIES[k] : k;

const TOKEN_KEY = 'cadcraft.library.token';
const FEEDS_KEY = 'cadcraft.library.feeds';
const store = {
  get(k, s = sessionStorage) { try { return s.getItem(k); } catch { return null; } },
  set(k, v, s = sessionStorage) { try { if (v === null) s.removeItem(k); else s.setItem(k, v); } catch { /* private window: fine */ } },
};
const LICENSES = { 'CC0-1.0': 'CC0', 'CC-BY-4.0': 'CC BY', 'CC-BY-SA-4.0': 'CC BY-SA' };   // i18n-ignore: license names stay as written
const LICENSE_KEYS = { 'MAKER-TERMS': 'lib.license.maker', 'TEAM-ONLY': 'lib.license.team' };   // language keys, read when shown
const licenseLabel = (id) => LICENSES[id] || (LICENSE_KEYS[id] ? t(LICENSE_KEYS[id]) : String(id || t('lib.license.none')));

let standardInstalled = false;

export function createLibraryPanel({ root, doc, engine, print, status, ask, dwgModel }) {
  // STEELMEMBER and PARTSLIST come with the Standard tab (stdlib.js), registered once like CadCraft's other feature sets
  if (!standardInstalled) { standardInstalled = true; installStandard(commandRegistry.add, commandRegistry.option); }
  let token = store.get(TOKEN_KEY);
  /** A client for a source: 'librarycraft' (or the API path) gets the token; a feed never does. */
  const client = (src = LIBRARYCRAFT) => { const base = !src || src === 'librarycraft' ? LIBRARYCRAFT : src; return new LibraryClient(base, { token: base === LIBRARYCRAFT ? token : null, onTokenRejected: tokenEnded }); };
  /** The library refused the token (expired or revoked): sign out here; public items keep loading. */
  function tokenEnded() {
    if (!token) return;
    token = null; store.set(TOKEN_KEY, null); renderSign();
    ended = t('lib.panel.signin_ended');
    say(ended);
  }
  /** Shown once, ahead of whatever the reload that dropped the token says next. */
  let ended = '';
  const sayAfterEnd = (s) => { say(ended ? ended + (s ? ' ' + s : '') : s); ended = ''; };
  let source = 'librarycraft';      // 'librarycraft' | 'files' | 'standard' | feed base URL
  let view = 'browse';              // browse | updates | credits | parts | feeds
  let cards = [];                   // [{ key, name, maker, model, license, version, category, preview_url, uuid, slug, item?, withdrawn?, from }]
  let pickResolve = null, pending = null, focusUuid = null, loading = 0;

  // ---- the dialog ----
  const $ = {};
  const tab = (key, label) => { const b = el('button', { type: 'button', role: 'tab', className: 'cc-tab', 'aria-selected': 'false', dataset: { src: key } }, label); b.addEventListener('click', () => setSource(key)); return b; };
  $.tabs = el('div', { className: 'cc-tablist', role: 'tablist', 'aria-label': t('lib.panel.library_sources') }, tab('librarycraft', 'LibraryCraft'), tab('files', t('lib.panel.files')), tab('standard', t('lib.panel.standard')), tab('feeds', t('lib.panel.other_feeds')));
  $.feedSel = el('select', { className: 'cc-select', 'aria-label': t('lib.panel.feed'), hidden: true });
  $.feedSel.addEventListener('change', () => { if ($.feedSel.value) { source = $.feedSel.value; search(); } });
  $.q = el('input', { type: 'search', className: 'cc-input', placeholder: t('lib.panel.search_name_maker_model'), 'aria-label': t('lib.panel.search_library'), maxLength: 200 });
  $.cat = el('select', { className: 'cc-select', 'aria-label': t('lib.panel.category') }, el('option', { value: '' }, t('lib.panel.every_category')));
  $.go = el('button', { type: 'submit', className: 'btn-line btn-sm-cc' }, t('lib.panel.search'));
  $.searchForm = el('form', { className: 'cc-lib-search' }, $.q, $.cat, $.go);
  $.searchForm.addEventListener('submit', (e) => { e.preventDefault(); search(); });
  $.cat.addEventListener('change', () => (source === 'files' ? render() : search()));
  // ---- Standard: the family, and the options the next Place uses (stdlib.js) ----
  const stdGroup = (g, label) => el('optgroup', { label }, ...STD_FAMILIES.filter((f) => f.group === g).map((f) => el('option', { value: f.key }, f.label + ' (' + f.source + ')')));
  $.stdFam = el('select', { className: 'cc-select', 'aria-label': t('lib.panel.std.family') }, stdGroup('sections', t('lib.panel.std.sections')), stdGroup('parts', t('lib.panel.std.parts')));
  $.stdFam.addEventListener('change', () => { stdOpts = {}; search(); });
  // typing changes the next Place and redraws the cards' previews in place (never the cards: a click on Place that blurs the
  // box must still land on its button)
  const field = (key, label, attrs = {}) => { const i = el('input', { className: 'cc-input', type: 'number', step: 'any', dataset: { std: key }, ...attrs }); i.addEventListener('input', () => { stdOpts[key] = i.value; refreshPreviews(); }); return { input: i, wrap: el('label', { className: 'cc-lib-opt', dataset: { stdOpt: key } }, el('span', {}, label), i) }; };
  $.stdView = el('select', { className: 'cc-select', dataset: { std: 'view' } }, ...['section', 'elevation', 'member'].map((v) => el('option', { value: v }, t('lib.panel.std.view.' + v))));
  $.stdView.addEventListener('change', () => { stdOpts.view = $.stdView.value; renderStdFields(); refreshPreviews(); });
  $.stdFields = { view: { input: $.stdView, wrap: el('label', { className: 'cc-lib-opt', dataset: { stdOpt: 'view' } }, el('span', {}, t('lib.panel.std.view')), $.stdView) },
    length: field('length', ''), teeth: field('teeth', t('lib.panel.std.teeth'), { min: 6, max: 400, step: 1 }), width: field('width', t('lib.panel.std.width')), bore: field('bore', t('lib.panel.std.bore')) };
  $.std = el('div', { className: 'cc-lib-std', hidden: true }, $.stdFam, ...Object.values($.stdFields).map((f) => f.wrap));
  $.file = el('input', { type: 'file', className: 'visually-hidden', tabIndex: -1, 'aria-hidden': 'true', accept: '.json,.dwg,.dxf,.ifc,.glb,.gltf,.obj,.rfa,.csv' });
  $.file.addEventListener('change', () => { const f = $.file.files[0]; $.file.value = ''; if (f) readFile(f); });
  $.pickFile = el('button', { type: 'button', className: 'btn-line btn-sm-cc', hidden: true }, el('i', { className: 'bi bi-folder2-open', 'aria-hidden': 'true' }), t('lib.panel.choose_file'));
  $.pickFile.addEventListener('click', () => $.file.click());
  $.updates = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.check_updates'));
  $.updates.addEventListener('click', () => checkUpdates());
  $.credits = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.library_credits'));
  $.credits.addEventListener('click', () => { view = 'credits'; render(); });
  $.partsBtn = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.parts_list'));
  $.partsBtn.addEventListener('click', () => { view = 'parts'; say(''); render(); });
  $.sign = el('span', { className: 'cc-lib-sign' });
  $.body = el('div', { className: 'cc-lib-body', 'aria-live': 'polite' });
  $.msg = el('span', { className: 'cc-note', role: 'status' });
  $.close = el('button', { type: 'button', className: 'cc-x', 'aria-label': t('lib.panel.close') }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
  $.dlg = el('dialog', { className: 'cc-dialog cc-lib', 'aria-labelledby': 'cc-lib-h', dataset: { lib: '' } },
    el('div', { className: 'cc-lib-frame' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-lib-h' }, t('lib.panel.library')), $.close),
      el('div', { className: 'cc-lib-bar' }, $.tabs, $.feedSel, $.pickFile, $.file, el('span', { className: 'cc-lib-links' }, $.updates, $.credits, $.partsBtn, $.sign)),
      $.searchForm,
      $.std,
      $.body,
      el('div', { className: 'cc-plot-foot' }, $.msg)));
  root.append($.dlg);
  $.close.addEventListener('click', () => $.dlg.close());
  $.dlg.addEventListener('close', () => { if (pickResolve) { const r = pickResolve; pickResolve = null; r(pending); pending = null; } });

  const say = (s) => { $.msg.textContent = s || ''; };

  // ---- sign in (§3.4) ----
  let popup = null;
  function renderSign() {
    $.sign.replaceChildren();
    if (token) {
      const out = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.sign_out_library'));
      out.addEventListener('click', () => { token = null; store.set(TOKEN_KEY, null); renderSign(); say(t('lib.panel.signed_out_here_token')); });
      $.sign.append(el('span', { className: 'cc-muted' }, t('lib.panel.signed_library')), ' ', out);
    } else {
      const a = el('a', { href: '/library/connect?app=cadcraft', className: 'cc-linkbtn', target: 'cc-library-connect', rel: 'opener' }, t('lib.panel.sign_library'));
      a.addEventListener('click', (e) => { e.preventDefault(); popup = window.open('/library/connect?app=cadcraft', 'cc-library-connect', 'width=560,height=700'); if (!popup) say(t('lib.panel.browser_blocked_sign_window')); });
      $.sign.append(a);
    }
  }
  window.addEventListener('message', (e) => {
    if (e.origin !== location.origin || !e.data || typeof e.data !== 'object') return;
    if (popup && e.source !== popup) return;
    const tok = e.data.token;
    if (typeof tok !== 'string' || !/^ccu_[A-Za-z0-9]{20,80}$/.test(tok)) return;
    if (e.data.app && e.data.app !== 'cadcraft') return;
    token = tok; store.set(TOKEN_KEY, tok); popup = null;
    renderSign(); say(t('lib.panel.signed_team_items_show'));
    if (source === 'librarycraft' && view === 'browse') search();
  });

  // ---- sources ----
  const feeds = () => { try { const v = JSON.parse(store.get(FEEDS_KEY, localStorage) || '[]'); return Array.isArray(v) ? v.filter((x) => typeof x === 'string' && feedUrl(x)).slice(0, 20) : []; } catch { return []; } };
  function setSource(key) {
    ++loading;   // whatever the last source was still loading is no longer wanted
    view = key === 'feeds' && !feeds().length ? 'feeds' : 'browse';
    if (key === 'feeds') { const f = feeds(); source = f[0] || 'feeds'; if (!f.length) view = 'feeds'; }
    else source = key;
    cards = [];
    if (source === 'files') render(); else if (view === 'browse') search(); else render();
  }
  function srcKey() { return source === 'librarycraft' || source === 'files' || source === 'standard' ? source : 'feeds'; }

  // ---- Standard (stdlib.js) ----
  let stdOpts = {};
  /** The option values for a card: the defaults for its size, then whatever was typed in the fields. */
  function stdValues(card) {
    const o = { ...cardDefaults(card.key, card.size) };
    for (const [k, v] of Object.entries(stdOpts)) if (v !== '' && v !== undefined) o[k] = k === 'view' ? v : Number(v);
    return o;
  }
  let previewTimer = 0;
  function refreshPreviews() {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(() => { for (const c of cards) if (c.std && c.box?.isConnected) c.box.replaceChildren(...stdPreview(c)); }, 200);
  }
  function stdSearch() {
    ++loading;   // a LibraryCraft search still on its way must not land on this tab
    const r = standardCards($.stdFam.value, $.q.value, 60);
    cards = r.cards.map((c) => ({ ...c, std: true, license: 'CC0-1.0', version: 1, category: '', maker: '', uuid: '', slug: '' }));
    say(r.total > cards.length ? t('lib.panel.std.showing', { shown: cards.length, n: r.total }) : t('lib.panel.std.count', { n: r.total }));
    render();
  }
  /** Block name part for a standard card: short and stable ("w12x26-e3000", "iso4017-m10x30"). */
  function stdSlug(card, o) {
    const fam = familyOf(card.key);
    if (fam.group === 'sections') return card.size + '-' + (o.view === 'elevation' ? 'e' + Math.round(o.length) : 's');
    return fam.id.replace(/^asme-/, '') + '-' + card.size + (o.length ? 'x' + o.length : '') + (o.teeth ? 'z' + o.teeth : '');
  }

  async function search() {
    if (source === 'standard') { stdSearch(); return; }
    if (source === 'files' || source === 'feeds') { render(); return; }
    view = 'browse';
    const my = ++loading;
    say(t('lib.panel.loading')); render();
    try {
      const r = await client(source).items({ q: $.q.value.trim(), category: $.cat.value });
      if (my !== loading) return;
      cards = r.items.map((x) => ({ key: x.uuid + '@' + x.version, uuid: x.uuid, slug: typeof x.slug === 'string' ? x.slug : '', name: String(x.name || ''), maker: String(x.maker || ''), model: String(x.model || ''), license: String(x.license || ''), version: +x.version || 1, category: String(x.category || ''), preview_url: x.preview_url, from: source }));
      fillCategories(r.items.map((x) => x.category));
      sayAfterEnd(r.total ? r.total + ' item' + (r.total === 1 ? '' : 's') + (r.total > cards.length ? ', showing ' + cards.length : '') + '.' : t('lib.panel.nothing_found'));
    } catch (err) { if (my === loading) { cards = []; say(err.message); } }
    if (my === loading) render();
  }
  function fillCategories(list) {
    const cur = $.cat.value;
    const cats = [...new Set(list.filter((c) => typeof c === 'string' && c))].sort();
    if (cur && !cats.includes(cur)) cats.unshift(cur);
    $.cat.replaceChildren(el('option', { value: '' }, t('lib.panel.every_category')), ...cats.map((c) => el('option', { value: c, selected: c === cur }, catLabel(c))));
  }

  /** One item focused (deep link ?library=<uuid>): the item's page data from §6.2. */
  async function showUuid(uuid) {
    source = 'librarycraft'; view = 'browse';
    say(t('lib.panel.loading_item')); render();
    try {
      const it = await client().item(uuid);
      const cur = (Array.isArray(it.versions) ? it.versions : []).filter((v) => v && Number.isInteger(+v.version)).sort((a, b) => b.version - a.version);
      const live = cur.find((v) => v.status === 'published') || cur[0];
      cards = [{ key: uuid, uuid, slug: typeof it.slug === 'string' ? it.slug : '', name: String(it.name || ''), maker: String(it.maker || ''), model: String(it.model || ''), license: String(live?.license || it.license || ''), version: +(live?.version || it.version || 1), category: String(it.category || ''), preview_url: live?.preview_url || it.preview_url, withdrawn: live && /withdrawn/.test(String(live.status)) ? String(live.withdrawn_reason || 'Withdrawn') : '', from: 'librarycraft' }];
      say('');
    } catch (err) { cards = []; say(err.message); }
    render();
  }

  // ---- Files… ----
  async function readFile(f) {
    const ext = (f.name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
    say('Reading ' + f.name + '…');
    try {
      let items = [], notes = [];
      if (ext === 'json') {
        if (f.size > 8 * 1024 * 1024) throw new Error(t('lib.panel.item_file_most_8'));
        let obj;
        try { obj = JSON.parse(await f.text()); } catch { throw new Error(t('lib.panel.not_json', { file: f.name })); }
        items = [obj];
      } else {
        const r = await runAdapter(f, ext);
        items = (r.items || []).map((it) => { const c = { ...it }; delete c._key; return c; });
        notes = r.notes || [];
      }
      const good = [];
      for (const it of items) {
        const why = await problemOf(it);
        if (why) notes.push((it?.name ? '"' + String(it.name).slice(0, 80) + '": ' : '') + why); else good.push(it);
      }
      cards = good.map((it, k) => ({ key: 'file-' + k, uuid: isUuid(it.uuid) ? it.uuid : '', name: String(Li.localized(it, locale()).name || 'Item ' + (k + 1)), maker: String(it.maker || ''), model: String(it.model || ''), license: String(it.license?.id || ''), version: Number.isInteger(it.version) ? it.version : 1, category: String(it.category || ''), item: it, from: 'files', fileName: f.name }));
      fillCategories(cards.map((c) => c.category));
      say([cards.length ? t('lib.panel.items_in', { n: cards.length, file: f.name }) : t('lib.panel.no_items_in', { file: f.name }), ...notes.slice(0, 3), notes.length > 3 ? t('lib.panel.more_notes', { n: notes.length - 3 }) : ''].filter(Boolean).join(' '));
    } catch (err) { cards = []; say(err.message); }
    render();
  }
  /** The adapters of libitem.js (the copy of BimCraft's canonical module). */
  async function runAdapter(f, ext) {
    if (f.size > 200 * 1024 * 1024) throw new Error(t('lib.panel.file_larger_than_200'));
    const bytes = new Uint8Array(await f.arrayBuffer());
    const units = Li.UNIT_MM[unitKey()] ? unitKey() : null;
    if (ext === 'csv') return Li.itemsFromCsv(new TextDecoder().decode(bytes));
    if (ext === 'glb' || ext === 'gltf' || ext === 'obj') {
      // glTF is in metres by its own definition; OBJ has none: read it in this drawing's units
      return Li.itemFromMesh(bytes, ext, { units: ext === 'obj' ? units : null, name: f.name.replace(/\.[^.]+$/, '') });
    }
    if (ext === 'dwg' || ext === 'dxf') {
      if (!dwgModel) throw new Error(t('lib.panel.reading_drawings_needs_dwg'));
      const model = await dwgModel(bytes, ext === 'dxf');   // cc-dwg's readDwg, or dxf-model.js for a DXF
      return Li.itemsFromDwg(model, { fileName: f.name });
    }
    if (ext === 'ifc') throw new Error(t('lib.panel.making_items_ifc_types'));
    if (ext === 'rfa') throw new Error(t('lib.panel.family_files_read_bimcraft'));
    throw new Error(t('lib.panel.cannot_make', { ext: ext.toUpperCase() }));
  }
  const unitKey = () => ({ millimeters: 'mm', centimeters: 'cm', meters: 'm', inches: 'in', feet: 'ft' })[doc.meta.units] || '';
  /** Validation: a full item (from a library) or converter output (no id, version, license yet). */
  async function problemOf(it) {
    const r = Li.validateItem(it, { partial: !(it && it.uuid && it.license) });
    if (!r.ok) return r.errors.slice(0, 2).join('; ');
    return itemProblem(it);
  }

  // ---- placing ----
  async function place(card) {
    let item = card.item, slug = card.slug || '';
    if (card.std) {
      const o = stdValues(card);
      if (o.view === 'member') {                                   // a 3D member: STEELMEMBER asks for its two ends
        $.dlg.close();
        await ensureIdle();
        engine.run('STEELMEMBER');
        await new Promise((r) => setTimeout(r, 0));
        if (engine.running === 'STEELMEMBER' && engine.expects === 'string') engine.text(card.size);
        return;
      }
      const r = cardItem(card.key, card.size, o);
      if (!r.ok) { say(r.error); $.stdFields[r.field]?.input.focus(); return; }
      item = r.item; slug = stdSlug(card, o);
    } else if (!item) {
      say('Downloading ' + card.name + '…');
      try { item = await client(card.from).itemJson(card.uuid, card.version); }
      catch (err) { say(err.message); return; }
      const why = await problemOf(item);
      if (why) { say(why); return; }
      if (card.uuid && item.uuid && item.uuid !== card.uuid) { say(t('lib.panel.library_sent_different_item')); return; }
      item = { ...item, uuid: item.uuid || card.uuid, version: item.version || card.version, provenance: { ...(item.provenance || {}), library: card.from === 'librarycraft' ? 'librarycraft' : card.from } };
    } else if (!item.provenance?.library) item = { ...item, provenance: { ...(item.provenance || {}), library: 'file', source_file: item.provenance?.source_file || card.fileName } };
    if (card.withdrawn) {
      const k = await ask({ title: t('lib.panel.withdrawn_item'), text: t('lib.panel.withdrawn_ask', { name: card.name, why: card.withdrawn }), buttons: [['cancel', t('opt.cancel'), 'btn-line'], ['go', t('lib.panel.place_anyway'), 'btn-plot']] });
      if (k !== 'go') return;
    }
    // 0.6 WL.7: name and description in the page's language; the block keeps a name from the item's own (one block per item)
    pending = { item: Li.localizedItem(item, locale()), slug: slug || String(item.name || '') };
    if (pickResolve) { $.dlg.close(); return; }       // INSERT is waiting: hand it over
    $.dlg.close();
    const p = pending; pending = null;
    queued = p;
    if (engine.busy) { engine.escape(); await engine.done; }
    engine.run('INSERT');                                  // runs until placed: do not wait for it
    await new Promise((r) => setTimeout(r, 0));
    if (engine.running === 'INSERT' && engine.expects === 'string') engine.text('L');
  }
  let queued = null;

  // ---- updates (§6.3) ----
  async function ensureIdle() {
    if (pickResolve) { const r = pickResolve; pickResolve = null; r(null); }
    if (engine.busy) { engine.escape(); await engine.done; }
  }
  async function checkUpdates() {
    view = 'updates';
    const uses = libraryUses(doc);
    if (!uses.length) { cards = []; render(); say(t('lib.panel.drawing_has_no_library')); return; }
    say('Checking ' + uses.length + ' item' + (uses.length === 1 ? '' : 's') + '…');
    render({ uses, results: null });
    const results = new Map();
    const byLib = new Map();
    for (const u of uses) { const lib = u.library === 'librarycraft' || !u.library ? LIBRARYCRAFT : feedUrl(u.library); if (!lib) continue; if (!byLib.has(lib)) byLib.set(lib, []); byLib.get(lib).push(u); }
    const errors = [];
    for (const [lib, list] of byLib) {
      try { for (const r of await client(lib).updates(list)) if (r && isUuid(r.uuid)) results.set(r.uuid + '@' + r.version, { ...r, lib }); }
      catch (err) { errors.push(err.message); }
    }
    say(errors.length ? errors[0] : [...results.values()].some((r) => r.status === 'newer' || r.status === 'withdrawn') ? '' : t('lib.panel.every_library_item_up'));
    render({ uses, results });
  }
  async function applyUpdate(u, r) {
    await ensureIdle();
    say(t('lib.panel.downloading', { version: r.latest, name: u.name }));
    try {
      const item = await client(r.lib).itemJson(u.uuid, r.latest);
      const why = itemProblem(item);
      if (why) throw new Error(why);
      const it = { ...item, uuid: item.uuid || u.uuid, version: item.version || r.latest, provenance: { ...(item.provenance || {}), library: u.library || 'librarycraft' } };
      const res = doc.change('LIBRARY UPDATE', () => updateLibraryBlock(doc, u.uuid, u.version, it));
      print(t('lib.panel.updated', { n: res.count, name: u.name, version: it.version, block: res.name }));
      registerUse(it);
      return true;
    } catch (err) { say(err.message); return false; }
  }

  // ---- uses (§6.5) ----
  function registerUse(item) {
    if (!token || !isUuid(item?.uuid) || (item.provenance?.library && item.provenance.library !== 'librarycraft')) return;
    client().registerUse({ uuid: item.uuid, version: item.version, app: 'cadcraft', file_label: doc.meta.name || '' })
      .then(() => status?.(t('lib.panel.registered', { name: item.name })))
      .catch((err) => { if (err.status === 401) { token = null; store.set(TOKEN_KEY, null); renderSign(); } });
  }

  // ---- rendering ----
  function badge(id) { return el('span', { className: 'cc-lib-badge', title: id || t('lib.panel.no_license_given') }, licenseLabel(id)); }
  function preview(card) {
    const box = el('div', { className: 'cc-lib-prev', 'aria-hidden': 'true' });
    let u = null;
    try { u = card.preview_url ? new URL(String(card.preview_url), location.href) : null; } catch { u = null; }
    if (u && u.origin === location.origin && /^https?:$/.test(u.protocol)) box.append(el('img', { src: u.href, alt: '', loading: 'lazy' }));
    else if (card.std) { card.box = box; box.append(...stdPreview(card)); }
    else if (card.item) box.append(planCanvas(card.item));
    else box.append(el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }));
    return box;
  }
  /** A standard card's drawing with the options as they are now (a 3D member shows its section). */
  function stdPreview(card) {
    const o = stdValues(card);
    const r = cardItem(card.key, card.size, o.view === 'member' ? { ...o, view: 'section' } : o);
    return r.ok ? [planCanvas(r.item)] : [];
  }
  function cardEl(card) {
    const placeBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc' }, t('lib.panel.place'));
    placeBtn.addEventListener('click', () => place(card));
    const mm = [card.maker, card.model].filter(Boolean).join(' ');
    return el('li', { className: 'cc-lib-card' + (card.withdrawn ? ' is-withdrawn' : '') },
      preview(card),
      el('div', { className: 'cc-lib-meta' },
        el('p', { className: 'cc-lib-name' }, card.name || t('lib.panel.untitled')),
        mm ? el('p', { className: 'cc-muted' }, mm) : null,
        el('p', { className: 'cc-lib-tags' }, badge(card.license), card.std ? el('span', { className: 'cc-muted' }, card.source) : el('span', { className: 'cc-muted' }, t('lib.panel.version', { version: card.version })), card.category ? el('span', { className: 'cc-muted' }, catLabel(card.category)) : null),
        card.withdrawn ? el('p', { className: 'cc-lib-warn' }, el('i', { className: 'bi bi-exclamation-triangle', 'aria-hidden': 'true' }), ' Withdrawn: ' + card.withdrawn) : null),
      placeBtn);
  }
  function render(extra = null) {
    for (const b of $.tabs.children) b.setAttribute('aria-selected', String(b.dataset.src === srcKey() && (view === 'browse' || view === 'feeds')));
    $.searchForm.hidden = !(view === 'browse');
    $.q.disabled = $.go.disabled = source === 'files';
    $.q.placeholder = source === 'standard' ? t('lib.panel.std.search') : t('lib.panel.search_name_maker_model');
    $.cat.hidden = source === 'standard';
    $.std.hidden = !(source === 'standard' && view === 'browse');
    if (!$.std.hidden) renderStdFields();
    $.pickFile.hidden = !(source === 'files' && view === 'browse');
    const fl = feeds();
    $.feedSel.hidden = !(srcKey() === 'feeds' && fl.length);
    $.feedSel.replaceChildren(...fl.map((f) => el('option', { value: f, selected: f === source }, f)));
    if (view === 'updates') { renderUpdates(extra); return; }
    if (view === 'credits') { renderCredits(); return; }
    if (view === 'parts') { renderParts(); return; }
    if (view === 'feeds' || (srcKey() === 'feeds' && !fl.length)) { renderFeeds(); return; }
    const cat = $.cat.value;
    const shown = source === 'files' && cat ? cards.filter((c) => c.category === cat) : cards;
    if (!shown.length) {
      $.body.replaceChildren(el('div', { className: 'cc-lib-empty' }, source === 'files'
        ? [el('p', {}, t('lib.panel.choose_item_file_item')), el('p', { className: 'cc-note' }, t('lib.panel.files_read_here_computer'))]
        : el('p', {}, $.msg.textContent === t('lib.panel.loading') ? t('lib.panel.loading') : t('lib.panel.no_items_show'))));
      return;
    }
    $.body.replaceChildren(el('ul', { className: 'cc-lib-cards' }, ...shown.map(cardEl)));
    if (srcKey() === 'feeds') $.body.append(manageFeedsLink());
  }
  function manageFeedsLink() { const b = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.add_remove_feeds')); b.addEventListener('click', () => { view = 'feeds'; render(); }); return el('p', {}, b); }

  function renderUpdates(state) {
    const uses = state?.uses || libraryUses(doc), results = state?.results;
    const rows = uses.map((u) => {
      const r = results?.get(u.uuid + '@' + u.version);
      const what = !results ? 'Checking…' : !r ? (u.library && u.library !== 'librarycraft' && !feedUrl(u.library) ? t('lib.panel.not_library_no_updates') : t('lib.panel.unknown_library'))
        : r.status === 'current' ? t('lib.panel.up_date') : r.status === 'newer' ? t(r.license_changed ? 'lib.panel.newer.license' : 'lib.panel.newer', { version: r.latest, kinds: Array.isArray(r.change_kinds) && r.change_kinds.length ? ' (' + r.change_kinds.map(String).join(', ') + ')' : '' })
          : r.status === 'withdrawn' ? 'Withdrawn' + (r.withdrawn_reason ? ': ' + String(r.withdrawn_reason) : '') : t('lib.panel.unknown_library');
      let act = null;
      if (r?.status === 'newer' && Number.isInteger(+r.latest)) {
        act = el('button', { type: 'button', className: 'btn-line btn-sm-cc' }, t('lib.panel.update'));
        act.addEventListener('click', async () => { act.disabled = true; if (await applyUpdate(u, { ...r, latest: +r.latest })) checkUpdates(); else act.disabled = false; });
      }
      return { u, r, li: el('li', { className: r?.status === 'withdrawn' ? 'is-withdrawn' : '' }, el('span', { className: 'cc-lib-num' }, u.numbers.join(', ') || '–'), el('span', {}, u.name, el('span', { className: 'cc-muted' }, ' version ' + u.version + ', placed ' + u.count + '×')), el('span', { className: r?.status === 'withdrawn' ? 'cc-lib-warn' : 'cc-muted' }, what), act || el('span')) };
    });
    const newer = rows.filter((x) => x.r?.status === 'newer');
    const all = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', hidden: newer.length < 2 }, t('lib.panel.update_all', { n: newer.length }));
    all.addEventListener('click', async () => { all.disabled = true; for (const x of newer) await applyUpdate(x.u, { ...x.r, latest: +x.r.latest }); checkUpdates(); });
    const back = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.back_library'));
    back.addEventListener('click', () => { view = 'browse'; render(); });
    $.body.replaceChildren(el('h3', { className: 'cc-props-sub' }, t('lib.panel.library_items_drawing')), el('ul', { className: 'cc-lib-rows' }, ...rows.map((x) => x.li)), el('p', { className: 'cc-lib-actions' }, all, back),
      el('p', { className: 'cc-note' }, t('lib.panel.updating_keeps_each_item')));
  }

  function renderCredits() {
    const uses = libraryUses(doc);
    const back = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.back_library'));
    back.addEventListener('click', () => { view = 'browse'; render(); });
    if (!uses.length) { $.body.replaceChildren(el('p', {}, t('lib.panel.drawing_has_no_library')), back); return; }
    const copy = async (text, what) => { try { await navigator.clipboard.writeText(text); say('Copied ' + what + '.'); } catch { say(t('lib.panel.browser_did_not_allow')); } };
    const rows = uses.map((u) => {
      const b = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.copy_attribution'));
      b.addEventListener('click', () => copy(u.attribution, t('lib.panel.the_attribution')));
      return el('li', {}, el('span', { className: 'cc-lib-num' }, u.numbers.join(', ') || '–'), el('span', {}, el('span', { className: 'cc-lib-name' }, u.name), ' ', badge(u.license), el('br'), el('span', { className: 'cc-lib-attrib' }, u.attribution)), b);
    });
    const all = el('button', { type: 'button', className: 'btn-line btn-sm-cc' }, t('lib.panel.copy_all'));
    all.addEventListener('click', () => copy(creditsText(uses), t('lib.panel.every_attribution')));
    const csv = el('button', { type: 'button', className: 'btn-plot btn-sm-cc' }, t('lib.panel.download_csv'));
    csv.addEventListener('click', () => {
      const a = el('a', { href: URL.createObjectURL(new Blob([creditsCsv(uses)], { type: 'text/csv' })), download: t('lib.panel.credits_file', { name: doc.meta.name || 'Drawing1' }) });
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    });
    $.body.replaceChildren(el('h3', { className: 'cc-props-sub' }, t('lib.panel.library_credits')), el('ul', { className: 'cc-lib-rows cc-lib-credits' }, ...rows), el('p', { className: 'cc-lib-actions' }, all, csv, back));
  }

  /** Show the option fields the chosen family takes, with this family's defaults as placeholders. */
  function renderStdFields() {
    const fam = familyOf($.stdFam.value);
    if (!fam) return;
    const first = cards[0]?.std ? stdValues(cards[0]) : cardDefaults(fam.key, '');
    const isSec = fam.group === 'sections', member = isSec && (stdOpts.view || 'section') === 'member';
    for (const [k, f] of Object.entries($.stdFields)) {
      const on = k === 'view' ? isSec : k === 'length' ? (isSec ? (stdOpts.view || 'section') === 'elevation' : fam.options.includes('length')) : fam.options.includes(k);
      f.wrap.hidden = !on;
      if (k !== 'view' && on) { f.input.value = stdOpts[k] ?? ''; f.input.placeholder = String(first[k] ?? ''); }
    }
    $.stdView.value = stdOpts.view || 'section';
    $.stdFields.length.wrap.firstChild.textContent = t('lib.panel.std.length', { unit: fam.units === 'in' ? 'in' : 'mm' });
    $.std.dataset.member = member ? '1' : '';
  }

  function renderParts() {
    const rows = partsList(doc);
    const back = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.back_library'));
    back.addEventListener('click', () => { view = 'browse'; render(); });
    if (!rows.length) { $.body.replaceChildren(el('h3', { className: 'cc-props-sub' }, t('lib.panel.parts_list')), el('p', {}, t('std.parts.none')), back); return; }
    const head = ['item', 'qty', 'part', 'standard', 'size', 'length', 'material'].map((k) => el('th', { scope: 'col' }, t('std.parts.col.' + k)));
    const body = rows.map((r) => el('tr', {}, ...[r.numbers.join(', ') || '–', String(r.qty), r.type, r.std, r.size, r.length, r.material].map((v) => el('td', {}, v))));
    const csv = el('button', { type: 'button', className: 'btn-plot btn-sm-cc' }, t('lib.panel.download_csv'));
    csv.addEventListener('click', () => {
      const a = el('a', { href: URL.createObjectURL(new Blob([partsCsv(rows)], { type: 'text/csv' })), download: t('lib.panel.parts_file', { name: doc.meta.name || 'Drawing1' }) });
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    });
    $.body.replaceChildren(el('h3', { className: 'cc-props-sub' }, t('lib.panel.parts_list')),
      el('div', { className: 'cc-lib-parts' }, el('table', { className: 'cc-table' }, el('thead', {}, el('tr', {}, ...head)), el('tbody', {}, ...body))),
      el('p', { className: 'cc-lib-actions' }, csv, back), el('p', { className: 'cc-note' }, t('lib.panel.parts_note')));
  }

  function renderFeeds() {
    const list = feeds();
    const inp = el('input', { type: 'url', className: 'cc-input', placeholder: 'https://example.org/api/library', 'aria-label': t('lib.panel.feed_address'), maxLength: 500 });
    const add = el('button', { type: 'submit', className: 'btn-line btn-sm-cc' }, t('lib.panel.add_feed'));
    const form = el('form', { className: 'cc-lib-search' }, inp, add);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = feedUrl(inp.value, location.origin);
      if (!u) { say(t('lib.panel.feed_address_starts_https')); return; }
      store.set(FEEDS_KEY, JSON.stringify([...new Set([...list, u])].slice(0, 20)), localStorage);
      source = u; view = 'browse'; say(t('lib.panel.feed_added_searching')); search();
    });
    const rows = list.map((f) => {
      const use = el('button', { type: 'button', className: 'cc-linkbtn' }, t('lib.panel.browse'));
      use.addEventListener('click', () => { source = f; view = 'browse'; search(); });
      const rm = el('button', { type: 'button', className: 'cc-linkbtn cc-danger' }, t('lib.panel.remove'));
      rm.addEventListener('click', () => { store.set(FEEDS_KEY, JSON.stringify(list.filter((x) => x !== f)), localStorage); render(); });
      return el('li', {}, el('span', { className: 'cc-lib-feed' }, f), use, rm);
    });
    $.body.replaceChildren(el('h3', { className: 'cc-props-sub' }, t('lib.panel.other_feeds')),
      el('p', { className: 'cc-note' }, t('lib.panel.feeds_note')),
      form, rows.length ? el('ul', { className: 'cc-lib-rows' }, ...rows) : el('p', { className: 'cc-muted' }, t('lib.panel.no_feeds_yet')));
  }

  /** A small drawing of an item's plan (Files… items have no preview image). */
  function planCanvas(item) {
    const cv = el('canvas', { width: 160, height: 120 });
    const ents = itemEntities(item).slice(0, 4000);
    const b = emptyBounds();
    for (const e of ents) { const eb = entityBounds(e, null); if (validBounds(eb)) { growPt(b, eb.minX, eb.minY); growPt(b, eb.maxX, eb.maxY); } }
    const ctx = cv.getContext('2d');
    if (!ctx || !validBounds(b)) return cv;
    const k = Math.min(148 / Math.max(b.maxX - b.minX, 1e-9), 108 / Math.max(b.maxY - b.minY, 1e-9));
    const ox = 80 - (b.minX + b.maxX) / 2 * k, oy = 60 + (b.minY + b.maxY) / 2 * k;
    ctx.strokeStyle = getComputedStyle(root).getPropertyValue('--ink') || '#000'; ctx.lineWidth = 1;
    ctx.beginPath();
    for (const e of ents) for (const p of prims(e, null)) {
      if (p.k === 'L') { ctx.moveTo(ox + p.x1 * k, oy - p.y1 * k); ctx.lineTo(ox + p.x2 * k, oy - p.y2 * k); }
      else { ctx.moveTo(ox + (p.cx + p.r * Math.cos(p.a0)) * k, oy - (p.cy + p.r * Math.sin(p.a0)) * k); ctx.arc(ox + p.cx * k, oy - p.cy * k, p.r * k, -p.a0, -p.a1, true); }
    }
    ctx.stroke();
    return cv;
  }

  // ---- public ----
  function show() { renderSign(); if (!$.dlg.open) $.dlg.showModal(); }
  return {
    open({ uuid = null } = {}) {
      view = 'browse';
      show();
      if (uuid && isUuid(uuid)) { focusUuid = uuid; showUuid(uuid); }
      else if (!cards.length && source !== 'files') search(); else render();
    },
    /** INSERT, option L: a card picked here (or just picked in the open panel) → { item, slug } | null */
    pick() {
      if (queued) { const q = queued; queued = null; return Promise.resolve(q); }
      return new Promise((resolve) => {
        pickResolve = resolve;
        view = 'browse';
        show();
        if (!cards.length && source !== 'files') search(); else render();
      });
    },
    placed(item) { registerUse(item); },
    get token() { return token; },
    get focus() { return focusUuid; },
  };
}
