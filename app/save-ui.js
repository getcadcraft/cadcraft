/* SPDX-License-Identifier: Apache-2.0 */
/**
 * save-ui.js: cadcraft.js's 14 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSave(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { dwgVersionKey, saveDwg, saveDwgAsync, DWG_VERSIONS } from './dwg-save.js';
import { writeDxf2000 } from './dxf2000.js';
import { textToBinaryDxf } from './dxf-binary.js';
import { textToCborDxf } from './dxf-cbor.js';   // FX.391
import { writeDxf } from './dxf.js';
import { fieldTag, fillTitleBlocks } from './sheetset.js';
import { plainTitleBlock, paperByKey } from './sheets.js';
import { extentsOf, readPdfUnderlays } from './plot.js';
import { plotPdf } from './agents.js';
import { fieldsAuto } from './fields-ui.js';
import { picturesToSave } from './pastepic.js';
import { el } from './ui-util.js';
const BIG_TEXT = 64 * 1024 * 1024;   // 0.11 PERF.30: characters past which a DXF is saved as a Blob of parts (dxfData)

export function mountSave(ctx) {
  const { doc, view, print, renderInfo, focusCommandLine, stampAddons, root } = ctx;

  // ---- saving: DWG (AutoCAD 2000 … 2018, dwg-save.js) or DXF R12 ----
  const FORMATS = {
    dwg: { label: () => t('save.format.dwg', { version: t('dwg.version', { v: dwgVersion() }) }), mime: 'application/acad', about: () => t('save.format.dwg.about') },
    dxf: { label: () => 'DXF R12', mime: 'application/dxf', about: () => t('app.save.dxf.about') },
    dxf2000: { label: () => t('save.format.dxf2000'), ext: 'dxf', mime: 'application/dxf', about: () => t('save.format.dxf2000.about') },   // 0.4 C17
    dxf2000b: { label: () => t('dxfbin.format'), ext: 'dxf', mime: 'application/dxf', about: () => t('dxfbin.format.about') },   // ORS.18: the same groups as DXF 2000, stored binary
    dxfcbor: { label: () => t('dxfcbor.format'), ext: 'cbor', mime: 'application/cbor', about: () => t('dxfcbor.format.about') },   // FX.391: the same groups as DXF 2000, as one CBOR file (dxf-cbor.js)
  };
  const extOf = (format) => FORMATS[format]?.ext || format;
  const FORMAT_KEY = 'cadcraft.saveFormat', VERSION_KEY = 'cadcraft.dwgVersion';
  const remembered = () => { try { const f = localStorage.getItem(FORMAT_KEY); return FORMATS[f] ? f : null; } catch { return null; } };
  /** The DWG version SAVE writes: chosen for this drawing, else the one it was opened in, else the last one chosen, else 2000. */
  function dwgVersion() {
    let last = null;
    try { last = dwgVersionKey(localStorage.getItem(VERSION_KEY)); } catch { /* private window */ }
    return dwgVersionKey(doc.meta.dwgVersion) || (/\.dwg$/i.test(doc.meta.source || '') && dwgVersionKey(doc.meta.version)) || last || '2000';
  }
  /** The format SAVE uses: the one chosen for this drawing, else what it was opened as, else the last one chosen, else DWG. */
  function saveFormat() {
    if (FORMATS[doc.meta.saveFormat]) return doc.meta.saveFormat;
    if (doc.meta.dxfCbor && /\.cbor$/i.test(doc.meta.source || '')) return 'dxfcbor';   // FX.391: a drawing opened from CBOR saves as CBOR
    const m = /\.(dwg|dxf)$/i.exec(doc.meta.source || '');
    if (m && m[1].toLowerCase() === 'dxf' && doc.meta.dxfBinary) return 'dxf2000b';   // ORS.18: a binary DXF saves as a binary DXF
    if (m && m[1].toLowerCase() === 'dxf' && /^AC10(1[5-9]|[2-9]\d)$/.test(doc.meta.version || '')) return 'dxf2000';   // a newer DXF saves as DXF 2000
    return m ? m[1].toLowerCase() : remembered() || 'dwg';
  }

  /** The drawing as it is now in `format` (dwg | dxf2000 | dxf), with what is on screen put in the file first: SAVE's own writers, also called by the
   *  export set's entry (exportSet, below). → { data: Uint8Array | string, report }; throws what the writer throws. */
  /** 0.11 PERF.30 (perf-finish-11): a DXF writer's result → the text (as before), or past BIG_TEXT characters a Blob of its parts: the
   *  text of a 1,000,000-object drawing is more than one string can hold ("Invalid string length"), and the host takes a Blob anyway. */
  function dxfData(r, mime) { return r.chunks && r.chunks.length > BIG_TEXT ? r.chunks.blob(mime || 'application/dxf') : r.text; }
  function beforeWrite() {
    doc.vports = view.paneState();   // the split screen on screen goes into the file (its VPORT table, cad-files)
    doc.viewTwist = view.panes ? 0 : doc.inModel && !view.entered ? view.tw || 0 : view.views.get(doc.model)?.tw || 0;   // one pane: the model view's turn (DR.8; the active VPORT's twist)
    stampAddons();
  }
  /** fileData, with a DWG built in slices and written in a worker (0.11 PERF.30: dwg-save.js saveDwgAsync, the same bytes). If the drawing
   *  changed while that ran, it is written again at once, so the file is always one moment of the drawing. */
  async function fileDataAsync(format, version = dwgVersion()) {
    if (format !== 'dwg') return fileData(format, version);
    beforeWrite();
    const v = doc.version;
    const r = await saveDwgAsync(doc, { version });
    if (doc.version !== v) return fileData(format, version);
    return { data: r.bytes, report: r.report };
  }
  function fileData(format, version = dwgVersion()) {
    beforeWrite();
    if (format === 'dwg') { const r = saveDwg(doc, { version }); return { data: r.bytes, report: r.report }; }
    if (format === 'dxf2000b') { const r = writeDxf2000(doc); return { data: textToBinaryDxf(r.text), report: r.report }; }   // ORS.18
    if (format === 'dxfcbor') { const r = writeDxf2000(doc); return { data: textToCborDxf(r.text), report: r.report }; }   // FX.391
    const r = format === 'dxf2000' ? writeDxf2000(doc) : writeDxf(doc);
    return { data: dxfData(r, FORMATS[format]?.mime), report: r.report };
  }
  /**
   * The export set's entry (SuperCad Studio's Finalize and export, SC.7): the same writers as SAVE and PLOT, called with options instead of a dialog, and
   * nothing about the drawing changes (no format kept, not marked saved). sheets() → the layouts; can(kind) → null or why not ('empty' | 'unknown'); run(kind, o) → [{ name, bytes, sheets? }].
   *   o = { paper: 'iso-a3' …, scale: 'fit' | '1:50', mono: bool, sheets: [layout name] | null (all), dwgVersion: '2000' … }
   */
  /**
   * The project's title block (`tb` = { use, project, client, drawnBy, revision, date, labels }) put into a layout's OWN title block through the editors' own code:
   * a block with attributes by the sheet set's fillTitleBlocks (tags PROJECTNAME, CLIENT, DRAWN_BY, REVISION, DATE and their aliases), the plain block of a new
   * sheet by its cells (sheets.js plainTitleBlock). With `use` the project's values replace what is written; without it only empty cells are filled.
   * → { has (the layout has a title block of its own), steps (undo steps made: the caller takes them back after the plot, so the drawing stays as it was) }
   */
  function fillProject(lay, tb) {
    let steps = 0, has = false;
    const vals = { PROJECTNAME: tb.project, CLIENT: tb.client, CUSTOMER: tb.client, DRAWN_BY: tb.drawnBy, DRAWNBY: tb.drawnBy, DRAWN: tb.drawnBy, REVISION: tb.revision, REV: tb.revision, DATE: tb.date };
    for (const e of lay.entities.values()) {
      if (e.type !== 'insert') continue;
      const defs = (doc.blocks.get(e.block)?.attdefs || []).filter((d) => !d.constant && fieldTag(d.tag) in vals);
      if (!defs.length) continue;
      has = true;
      for (const d of defs) if (!tb.use && String(e.attrs?.[d.tag] ?? d.def ?? '') !== '') delete vals[fieldTag(d.tag)];   // typed by hand: it stays
    }
    for (const k of Object.keys(vals)) if (!vals[k]) delete vals[k];
    if (has && fillTitleBlocks(doc, lay.name, vals)) steps++;
    const plain = plainTitleBlock(lay, { PROJECT: [tb.project, tb.client].filter(Boolean).join(', '), DATE: tb.date, 'DRAWN BY': tb.drawnBy }, { overwrite: !!tb.use });   // the plain block has no client cell: the client goes with the project
    if (plain.has) has = true;
    if (plain.set.length || plain.add.length) { doc.change(t('sheetset.undo.fields'), () => { for (const x of plain.set) doc.update(x.id, x.e, lay.entities); for (const e of plain.add) doc.add(e, lay.entities); }); steps++; }
    return { has, steps };
  }
  const exportSet = {
    kinds: ['pdf', 'dwg', 'dxf'], direct: true,   // run() returns the bytes: no download is started
    sheets: () => ((doc.layouts || []).length ? doc.layouts.map((l) => ({ id: l.name, number: '', title: l.name, scale: '', revision: '', paper: l.paper?.key || '' })) : extentsOf(doc) ? [{ id: 'model', number: '', title: doc.meta.name || 'Drawing1', scale: '', revision: '', paper: '' }] : []),   // no layout yet: the model is the one sheet
    can: (kind) => (!exportSet.kinds.includes(kind) ? 'unknown' : doc.model.size || (doc.layouts || []).some((l) => l.entities.size) ? null : 'empty'),   // a code, worded by the host
    async run(kind, o = {}) {
      const stem = doc.meta.name || 'Drawing1', enc = async (x) => (typeof x === 'string' ? new TextEncoder().encode(x) : x instanceof Blob ? new Uint8Array(await x.arrayBuffer()) : x);
      if (kind === 'dwg') return [{ name: stem + '.dwg', bytes: await enc((await fileDataAsync('dwg', dwgVersionKey(o.dwgVersion) || dwgVersion())).data) }];
      if (kind === 'dxf') return [{ name: stem + '.dxf', bytes: await enc(fileData('dxf2000').data) }];
      if (kind !== 'pdf') return [];
      await readPdfUnderlays(doc);
      const want = Array.isArray(o.sheets) ? new Set(o.sheets.map(String)) : null, out = [];
      const lays = (doc.layouts || []).filter((l) => !want || want.has(l.name));
      for (const l of lays) {
        const filled = o.titleBlock ? fillProject(l, o.titleBlock) : { has: false, steps: 0 };   // the project's values in the layout's own title block, for this plot only
        let r; try { r = await plotPdf(doc, { layout: l.name, mono: o.mono !== false }); } finally { for (let i = 0; i < filled.steps; i++) doc.undo(); }
        out.push({ name: stem + ' ' + l.name + '.pdf', bytes: r.bytes, sheets: [{ id: l.name, number: '', title: l.name, scale: '1:1', revision: '', block: filled.has }] });
      }
      if (!(doc.layouts || []).length && extentsOf(doc) && (!want || want.has('model'))) {   // no layout yet: the model on the asked paper at the asked scale (PLOT's model plot)
        const paper = o.paper === 'tabloid' ? 'ansi-b' : paperByKey(o.paper) ? o.paper : 'iso-a3';   // tabloid is this app's ANSI B
        let r; try { r = await plotPdf(doc, { paper, scale: o.scale || 'fit', mono: o.mono !== false }); } catch { r = await plotPdf(doc, { paper, scale: 'fit', mono: o.mono !== false }); }
        out.push({ name: stem + '.pdf', bytes: r.bytes, sheets: [{ id: 'model', number: '', title: stem, scale: r.sheet.scale || '', revision: '' }] });
      }
      return out;
    },
  };

  /** Save; `keep` = later saves use this format too (DXFOUT is a one-off export: false, always a copy); `as` = SAVEAS
   *  (the desktop's save dialog). Through host.js: the drawing's own file is written in place when the host can (desktop),
   *  else a copy downloads. */
  async function saveFile(format = saveFormat(), keep = true, as = false) {
    // SAVE itself, and NEW/OPEN saving a copy before they discard, run as commands: let those through
    if (ctx.engine.busy && !['SAVE', 'SAVEAS', 'DXFOUT', 'NEW', 'OPEN'].includes(ctx.engine.running)) { print(t('app.finish_cancel_current_command')); return; }
    if (doc.refEdit) { print(t('app.refedit.save_first', { name: doc.refEdit.name })); return; }   // its working set is in the drawing (0.6 DF.5)
    fieldsAuto(doc, 's');   // ORS.22: fields update on save when the drawing's setting says so
    if (keep && !as && ctx.host.drawingLock) { const no = await ctx.host.drawingLock.saveBlocked(ctx.saveTargets.get(doc.meta.hostFile)); if (no) { print(no); return; } }   // ORS.27: someone else has this file open: ask first
    if (keep && !as && ctx.host.vaultUi) { const ro = await ctx.host.vaultUi.saveBlocked(); if (ro) { print(ro); return; } }   // 0.8 SU.1058: a vault file is saved over only while checked out to you
    if (!FORMATS[format]) format = 'dwg';
    let data, report;
    try {
      ({ data, report } = await fileDataAsync(format));   // 0.11 PERF.30: a DWG off the page's thread
    } catch (err) {
      console.error(err);
      print(t(format === 'dwg' ? 'app.save.failed.dwg' : 'app.save.failed', { format: FORMATS[format].label(), why: err.message }));
      return;
    }
    const name = (doc.meta.name || 'Drawing1') + '.' + extOf(format), mime = FORMATS[format].mime;
    const types = [{ description: FORMATS[format].label(), extensions: ['.' + extOf(format)], mime }];
    const version = doc.version;
    // the format is the drawing's from now: host.js starts the download, then awaits its recent list, and a Ctrl+S in
    // between must already save this format (the flaky browser-save check, 0.5); put back if the save does not happen
    const before = doc.meta.saveFormat;
    if (keep) doc.meta.saveFormat = format;
    let r;
    if (!keep) { ctx.fileHost.download(data, name, mime); r = { ok: true, how: 'downloaded', name }; }
    else if (as) r = await ctx.fileHost.saveAs({ data, name, types, type: mime, title: t('app.save_copy') });
    else {
      const target = ctx.saveTargets.get(doc.meta.hostFile);
      r = await ctx.fileHost.save({ target: target && target.name.toLowerCase().endsWith('.' + extOf(format)) ? target : null, data, name, types, type: mime });
    }
    if (!r.ok) {
      if (keep && doc.meta.saveFormat === format) { if (before === undefined) delete doc.meta.saveFormat; else doc.meta.saveFormat = before; }
      print(r.cancelled ? t('app.not_saved') : t('app.save.failed', { format: FORMATS[format].label(), why: String(r.error?.message || r.error || '') })); return;
    }
    if (keep && r.target?.writable) ctx.keepTarget(r.target);
    if (keep && r.how === 'written') ctx.host.drawingLock?.saved(r.target);   // ORS.27: the lock follows the file (Save as)
    if (keep && ctx.localHist && r.how === 'written' && r.path) {   // a copy for the History panel (0.7 D7.31), Studio only
      ctx.localHist.snapshot({ key: r.path, name: doc.meta.name, bytes: typeof data === 'string' ? new TextEncoder().encode(data) : data instanceof Blob ? new Uint8Array(await data.arrayBuffer()) : data, format }).catch((err) => console.warn('history:', err));
    }
    if (doc.version === version) doc.markSaved();   // an edit made while the dialog was open stays unsaved
    const src = doc.meta.source || '', file = r.name || name;
    if (r.how === 'written') print(t('app.save.written', { file: r.path || file, format: FORMATS[format].label() }));
    else print(t(format === 'dxf' ? 'app.save.done.dxf' : 'app.save.done', { file, format: FORMATS[format].label() }) + (src && src !== file ? ' ' + t('app.save.original_unchanged', { file: src }) : ''));
    for (const n of report.notes) print('  ' + n);
    // pasted pictures (0.6 DF.6): a DWG names its pictures' files, so each one goes beside the drawing as its own file
    for (const p of picturesToSave(doc, file)) { ctx.fileHost.download(p.bytes, p.name, p.mime); print('  ' + t('pic.paste.saved', { file: p.name, drawing: file })); }
    renderInfo();
  }

  /** A drawing that is not the open one (WBLOCK's) written in `format` and handed to the host as a download / save dialog. */
  async function writeDrawing(d, { name, format = 'dwg' } = {}) {
    if (!FORMATS[format]) format = 'dwg';
    let data;
    try {
      if (format === 'dwg') ({ bytes: data } = saveDwg(d, { version: dwgVersion() }));
      else if (format === 'dxf2000b') data = textToBinaryDxf(writeDxf2000(d).text);   // ORS.18
      else if (format === 'dxfcbor') data = textToCborDxf(writeDxf2000(d).text);   // FX.391
      else if (format === 'dxf2000') data = dxfData(writeDxf2000(d), FORMATS[format]?.mime);
      else data = dxfData(writeDxf(d), FORMATS[format]?.mime);
    } catch (err) { console.error(err); return { ok: false, why: err.message }; }
    const file = (name || 'Drawing') + '.' + extOf(format);
    const r = await ctx.fileHost.saveAs({ data, name: file, types: [{ description: FORMATS[format].label(), extensions: ['.' + extOf(format)], mime: FORMATS[format].mime }], type: FORMATS[format].mime, title: t('cmd.wblock.title') });
    return r.ok ? { ok: true, file: r.name || file } : { ok: false, why: r.cancelled ? t('app.not_saved') : String(r.error?.message || r.error || '') };
  }

  /** SAVEAS: choose DWG (and its version) or DXF (remembered for this drawing and for new ones), then save. */
  async function saveAs() {
    const pick = await chooseFormat(saveFormat());
    if (!pick) { print(t('app.not_saved')); return; }
    const { format, version } = pick;
    try { localStorage.setItem(FORMAT_KEY, format); if (format === 'dwg') localStorage.setItem(VERSION_KEY, version); } catch { /* private window: remembered for this drawing only */ }
    if (format === 'dwg') doc.meta.dwgVersion = version;
    await saveFile(format, true, true);
  }
  function chooseFormat(current) {
    return new Promise((done) => {
      const name = doc.meta.name || 'Drawing1';
      const verSel = el('select', { className: 'select-cc cc-format-ver', dataset: { dwgVersion: '' }, 'aria-label': t('save.version') },
        ...DWG_VERSIONS.map(({ key }) => el('option', { value: key, selected: key === dwgVersion() }, t('dwg.version', { v: key }))));
      const opts = Object.entries(FORMATS).map(([key, f]) => el('label', { className: 'cc-format' },
        el('input', { type: 'radio', name: 'cc-format', value: key, checked: key === current }),
        el('span', { className: 'cc-format-text' }, el('span', { className: 'cc-format-name' }, key === 'dwg' ? 'DWG' : f.label(), el('span', { className: 'cc-format-file' }, name + '.' + extOf(key))),
          key === 'dwg' ? el('span', { className: 'cc-format-ver-row' }, el('span', {}, t('save.version')), verSel) : null,
          el('span', { className: 'cc-note' }, f.about()))));
      const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-saveas', 'aria-labelledby': 'cc-saveas-h' },   // cc-saveas: the list scrolls, the title and Save stay in view (FX.391: five formats are taller than a laptop screen)
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-saveas-h' }, t('app.save_copy'))),
        el('div', { className: 'cc-ask-text cc-formats', role: 'radiogroup', 'aria-labelledby': 'cc-saveas-h' }, ...opts,
          el('p', { className: 'cc-note' }, t('app.save.local_note'))),
        el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, 'Cancel'), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, 'Save')));
      let result = null;
      const ok = () => { const format = dlg.querySelector('input[name="cc-format"]:checked')?.value || null; result = format && { format, version: verSel.value }; dlg.close(); };
      verSel.addEventListener('change', () => { const r = dlg.querySelector('input[value="dwg"]'); if (r) r.checked = true; });
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (!b) return; if (b.dataset.key === 'ok') ok(); else dlg.close(); });
      dlg.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target !== verSel) { e.preventDefault(); ok(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      dlg.querySelector('input[name="cc-format"]:checked')?.focus();
    });
  }

  return { dwgVersion, saveFormat, exportSet, saveFile, writeDrawing, saveAs };
}
