/* SPDX-License-Identifier: Apache-2.0 */
/**
 * open-ui.js: cadcraft.js's 20 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountOpen(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { CLOUD_READ, isCloudFile, attachFile } from './cloud-cad.js';
import { frame, num, el } from './ui-util.js';
import { missingFonts as shxMissing } from './shx-text.js';
import { sendHandoff } from './handoff.js';
import { readSwExport, loadSwSketch } from './swsketch.js';
import { dxfTextOf } from './dxf-open.js';
import { readDxf } from './dxf.js';
import { readDxfAsync, readDwgDrawingAsync } from './dxf-read-async.js';   // 0.11 PERF.30: the DXF reader in a worker
import { importDwg, importDwgAsync, VERSIONS, preR13 } from './dwg-import.js';

export function mountOpen(ctx) {
  const { doc, view, host, engine, print, status, renderInfo, hideHint, focusCommandLine, tabs, localHist, offerAddons, renderTabs, ask, busy, root } = ctx;

  // ---- files ----
  let readDwg = null;   // cc-dwg's reader in a worker (./dwg/read-async.js: readDwgAsync, 0.4 1.3), imported with the first DWG

  const openTypes = () => [
    { description: t('files.type.drawings'), extensions: ['.dwg', '.dxf', '.cbor'] },   // .cbor: a drawing saved as CBOR (FX.391)
    { description: t('files.type.pdf'), extensions: ['.pdf'] },   // 0.7 D7.24
    { description: t('files.type.sheetset'), extensions: ['.ccsheets'] },
    { description: t('files.type.cloud'), extensions: CLOUD_READ.map((e) => '.' + e) },   // a point cloud under the drawing (SG.1; formats from cloud-types.js, 0.6 PF)
    { description: t('files.type.other'), extensions: ['.json', '.pln', '.pla', '.tpl', '.bpn', '.ccbundle', '.zip'] },
  ];

  async function freeEngine() {
    if (!engine.busy || ctx.FILE_COMMANDS.has(engine.running)) return;
    engine.escape();
    await engine.done;
  }
  let picking = false, openQueue = Promise.resolve();
  const oneAtATime = (fn) => { const run = openQueue.then(fn, fn); openQueue = run.catch(() => {}); return run; };
  async function openPicked() {
    if (picking) { status(t('app.open.picking')); return; }
    picking = true;
    let files;
    try { files = await ctx.fileHost.openFile({ types: openTypes() }); } catch (err) { print(t('app.open.failed', { file: '', why: err?.message || String(err) })); files = []; } finally { picking = false; }
    for (const f of files || []) await openHostFile(f);
    focusCommandLine();   // the native dialog took the focus: typing goes to the command line again
  }
  /** A HostFile (picked, dropped, launched): a set file opens in the Sheet Set panel with its folder when the host can
   *  reach it (desktop), anything else through openLocal; a drawing that can be written in place is kept as its target. */
  async function openHostFile(hf) {
    if (/\.ccsheets$/i.test(hf.name) && host.sheetSet) {
      const folder = ctx.fileHost.folderOf(hf);
      if (folder && (await host.sheetSet.openFromFolder(folder, hf.name))) { host.sheetSet.focus(); return; }
    }
    const lockGo = host.drawingLock ? await host.drawingLock.beforeOpen(hf) : 'open';   // ORS.27: open somewhere else? ask (read-only / anyway / cancel)
    if (lockGo === 'cancel') return;
    let file;
    try { const b = await hf.file(); file = b instanceof File ? b : new File([b], hf.name, { lastModified: hf.lastModified || Date.now() }); }
    catch (err) { print(t('app.open.failed', { file: hf.name, why: err.message })); return; }
    if ((await openLocal(file)) && hf.writable && /\.(dwg|dxf|cbor)$/i.test(hf.name)) {
      host.drawingLock?.opened(hf, lockGo);   // ORS.27: take the lock (not when read-only)
      if (lockGo === 'readonly') return;   // ORS.27: read-only = no file to save back to (Save asks for a name)
      ctx.keepTarget(hf);
      // the file as it was when opened is the first copy in History (0.7 D7.31): saving over it would otherwise lose it
      if (localHist && hf.path) file.arrayBuffer().then((b) => localHist.snapshot({ key: hf.path, name: hf.name.replace(/\.[^.]+$/, ''), bytes: new Uint8Array(b), format: /\.cbor$/i.test(hf.name) ? 'dxfcbor' : /\.dxf$/i.test(hf.name) ? 'dxf' : 'dwg', note: 'opened' })).catch((err) => console.warn('history:', err));
    }
  }

  /** `recovered` (dwg-autosave.js): the copy's name, source file and save format; the drawing opens unsaved, and a failure throws. */
  function openLocal(file, recovered = null) { return oneAtATime(() => openLocalNow(file, recovered)); }
  async function openLocalNow(file, recovered) {
    const ext = (file.name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
    if (isCloudFile(file.name)) {   // a point cloud goes under the drawing, at its own coordinates (SG.1); a scanner's own file gets its card (0.6 PF)
      try { await attachFile({ host, print, doc }, file); } catch (err) { print(t('pc.failed', { file: file.name, why: err.message })); } finally { busy(null); }
      return true;
    }
    if (ext === 'pdf') { await openPdfFile(file); return true; }   // 0.7 D7.24: a PDF is imported as drawing objects or attached as an underlay
    if (ext === 'json') { openSketchExport(file); return; }
    if (ext === 'ccbundle' || (ext === 'zip' && /ccbundle/i.test(file.name))) { await openBundleHere(file); return; }   // 0.8 BIM-BUNDLE-OPEN: a project bundle's drawings + standards (bundle-cad.js)
    if (['pln', 'pla', 'tpl', 'bpn'].includes(ext)) { otherProject(file, ext); return; }
    if (ext === 'ccsheets') { print(t('sheetset.open.viafolder', { file: file.name })); host.sheetSet?.focus(); return; }   // a set needs its folder (its drawings)
    if (host.openAppFile && (await host.openAppFile(file))) return;   // .lsp / .dcl load, .pgp aliases (appload.js)
    if (ext !== 'dwg' && ext !== 'dxf' && ext !== 'cbor') { print(t('app.open.wrong_type', { file: file.name })); return; }
    await freeEngine();
    busy('Opening ' + file.name + '…');
    await frame();
    try {
      const t0 = performance.now();
      const { drawing, format, bytes } = await readDrawing(file, ext);
      if (!tabs.pristine()) await tabs.add({ name: file.name.replace(/\.[^.]+$/, '') });   // its own tab, as AutoCAD (doctabs.js)
      // 0.11 PERF.9 / PERF.30 (perf-finish-11): the drawing goes in, and its picture is built, in slices: the page keeps painting and
      // taking input while a big drawing opens (it was one task of 2.7 to 5.6 s after the read)
      view.holdFit = true;   // view.fit() below, once the picture is built
      try { await doc.loadAsync({ ...drawing, meta: { ...drawing.meta, name: file.name.replace(/\.[^.]+$/, ''), source: file.name, format, size: file.size } }); } finally { view.holdFit = false; }
      await view.prepareCache(doc.space);
      if (recovered) { Object.assign(doc.meta, recovered); doc.savedVersion = -1; doc.emit(); }   // recovered work is not saved to a file yet
      else import('./live.js').then((m) => m.stampFileHash(doc, bytes)).catch(() => {});   // Studio Live: same file → no snapshot (LV.8)
      ctx.lastReport = drawing.report;
      host.setSelection(new Set());
      view.fit();
      view.restorePanes(doc.vports);   // the split screen it was saved with (or one pane)
      if (!view.panes && doc.inModel && doc.viewTwist) { view.tw = doc.viewTwist; view.fit(); }   // one pane saved turned (DR.8)
      renderTabs();
      renderInfo();
      hideHint();
      print(t('app.open.done', { file: file.name, objects: num(doc.count()), layers: num(doc.layers.size), ms: Math.round(performance.now() - t0) }));
      print(doc.meta?.units ? t('app.insertf.units_stated', { file: file.name, units: doc.meta.units }) : t('app.open.units_none', { file: file.name }));   // 0.10 BK.8: what the file says about its units, every time
      offerAddons();   // 0.8 AL.6
      { const miss = shxMissing(doc); if (miss.length) print(t('shx.open.missing', { list: miss.map((m) => m.font).join(', ') })); }   // 0.8 D8.7
      return true;
    } catch (err) {
      if (!err?.expected) console.error(err);   // a refusal we word ourselves (an R12 DWG, 0.6 DF.11) is no fault
      print(t('app.open.failed', { file: file.name, why: err.message }));
      if (recovered) throw err;
      return false;
    } finally { busy(null); }
  }

  /** A PDF chosen in Open (or dropped): import its page as drawing objects (a new tab) or attach it under this drawing. */
  async function openPdfFile(file) {
    const k = await ask({ title: t('app.open.pdf.title'), text: t('app.open.pdf.text', { file: file.name }), buttons: [['attach', t('app.open.pdf.attach'), 'btn-line'], ['import', t('app.open.pdf.import'), 'btn-plot'], ['cancel', t('app.open.pdf.cancel'), 'btn-line']] });
    if (k !== 'import' && k !== 'attach') return;
    ctx.nextPdf = { name: file.name, bytes: new Uint8Array(await file.arrayBuffer()) };
    if (k === 'import' && !tabs.pristine()) await tabs.add({ name: file.name.replace(/\.[^.]+$/, '') });
    engine.text(k === 'import' ? 'PDFIMPORT' : 'PDFATTACH');   // it asks the page and the insertion point from here
  }

  /**
   * An Archicad project, archive, template or backup (0.4 part 2, N.4): CadCraft opens DWG and DXF, so say what the file
   * is and how to get a drawing out of it; when BimCraft here takes a handed-over file (ui.inc data-bim-url), offer it.
   */
  async function otherProject(file, ext) {
    // 0.6 DF.12 (a): Archicad projects (17+) start with "ROF FDB " (PRONOM fmt/1913); without it the file was likely renamed
    const head = new Uint8Array(await file.slice(0, 8).arrayBuffer());
    const sig = String.fromCharCode(...head) === 'ROF FDB ';   // i18n-ignore: file signature bytes
    const text = t(sig ? 'archicad.open.text' : 'archicad.open.renamed', { file: file.name, kind: t('archicad.kind.' + ext) });
    print(text);
    const bim = root.dataset.bimUrl;
    const k = await ask({ title: t('archicad.open.title'), text, buttons: [...(bim ? [['bim', t('archicad.open.bim'), 'btn-line']] : []), ['ok', t('archicad.open.ok'), 'btn-plot']] });
    if (k !== 'bim') return;
    try { await sendHandoff(bim, file, 'cadcraft'); print(t('archicad.open.sent', { file: file.name })); }
    catch (err) { print(t(err?.code === 'blocked' ? 'cmd.open3d.blocked' : 'archicad.open.failed', { why: err?.message || '' })); }
  }

  /** A sketch export from the CadCraft macro for SolidWorks (cadcraft-sw-export JSON): one sketch → the drawing. */
  async function openSketchExport(file) {
    await freeEngine();
    let r;
    try { r = readSwExport(await file.text()); } catch (err) { r = { ok: false, error: err.message }; }
    if (!r.ok) { print(t('app.open.failed', { file: file.name, why: r.error })); return; }
    let pick = r.sketches[0].name;
    if (r.sketches.length > 1) {
      const k = await ask({ title: t('app.open_which_sketch'), text: t('app.sketch.which', { file: file.name, n: r.sketches.length }), buttons: [['cancel', t('opt.cancel'), 'btn-line'], ...r.sketches.slice(0, 8).map((s, i) => ['s' + i, s.name, i ? 'btn-line' : 'btn-plot'])] });
      const i = /^s(\d+)$/.exec(k)?.[1];
      if (i === undefined) { print(t('app.not_opened')); return; }
      pick = r.sketches[+i].name;
    }
    if (!tabs.pristine()) await tabs.add({ name: file.name.replace(/\.[^.]+$/, '') });   // its own tab (doctabs.js)
    const res = loadSwSketch(doc, r.exp, pick);
    if (!res.ok) { print(t('app.open.failed', { file: file.name, why: res.error })); return; }
    ctx.lastReport = { read: res.report.read, skipped: {}, notes: res.report.notes };
    host.setSelection(new Set());
    view.fit();
    renderInfo();
    hideHint();
    print(t('app.sketch.opened', { sketch: res.sketch, file: file.name, objects: num(doc.count()), constraints: doc.constraints.length, params: doc.params.vars.length }));
    for (const n of res.report.notes) print('  ' + n);
  }

  /** A project bundle (0.8 BIM-BUNDLE-OPEN + DF.12b): its first DWG drawing opens as usual, the other drawings are listed, and the bundle's layers and
   *  dashed line types are added to the drawing. A bundle with no DWG says so and points to BimCraft, which opens the whole project. */
  async function openBundleHere(file) {
    let b;
    try { b = await (await import('./bundle-cad.js')).bundleDrawings(file); }
    catch (err) { print(t('bundle.cad.failed', { file: file.name, why: String(err && err.code || 'broken') })); return; }
    if (!b.files.length) { print(t('bundle.cad.nodwg', { file: file.name })); return; }
    const BC = await import('./bundle-cad.js');
    const first = b.files[0];
    print(t('bundle.cad.opening', { file: file.name, name: first.name, n: b.files.length }));
    await openLocalNow(await BC.readDrawingFile(b.opened, first), null);
    for (const f of b.files.slice(1, 8)) print('  ' + t('bundle.cad.other', { name: f.name }));
    const r = BC.loadStandards(doc, b.opened.manifest);
    print(t('bundle.cad.standards', { layers: r.layers, types: r.lineTypes }));
    for (const n of r.notes) print('  ' + t(n.key, n.vars));
  }

  /** A DWG or DXF on this computer → { drawing (doc.load() input), format, bytes (as read: Studio Live's file hash) }. */
  async function readDrawing(file, ext) {
    if (ext === 'cbor') ext = 'dxf';   // FX.391: DXF groups saved as CBOR go through the DXF door (dxf-open.js tells them apart by content)
    const data = new Uint8Array(await file.arrayBuffer());
    let drawing, format;
    if (ctx.recoverNotes) {   // ORS.14 RECOVER: the same readers, fed tolerantly (recover.js); what was skipped goes into the notes
      const R = await import('./recover.js');
      busy(t('recover.busy', { file: file.name }));
      await frame();
      let r;
      try { r = ext === 'dxf' ? R.recoverDxf(data, { dxfTextOf, readDxf }) : R.recoverDwg(data, { readDwg: (await import('./dwg/read.js')).readDwg, importDwg }); }
      catch (err) { for (const n of err?.recoverNotes || []) ctx.recoverNotes.push(R.noteText(n, t)); if (err?.key) err.message = t(err.key); throw err; }
      for (const n of r.notes) ctx.recoverNotes.push(R.noteText(n, t));
      if (r.binary) r.drawing.meta.dxfBinary = true;
      return { drawing: r.drawing, format: r.format, bytes: data };
    }
    if (ext === 'dxf') {
      // 0.10 PERF.20: a big file is read in parts, never as one string; 0.11 PERF.30: in a worker (dxf-read-async.js), same drawing
      const dx = await readDxfAsync(data);   // $DWGCODEPAGE / UTF-8 (0.7 D7.16); binary DXF (ORS.18)
      drawing = dx.drawing;
      if (dx.binary) drawing.meta.dxfBinary = true;   // ORS.18: Save keeps a binary DXF binary
      if (dx.cbor) drawing.meta.dxfCbor = true;   // FX.391: Save keeps a CBOR drawing CBOR
      format = 'DXF' + (VERSIONS[drawing.meta.version] ? ' ' + VERSIONS[drawing.meta.version] : '') + (drawing.meta.version ? ' (' + drawing.meta.version + ')' : '');
    } else {
      const tag = new TextDecoder().decode(data.subarray(0, 6));
      drawing = await dwgInWorker(data, tag, file.name);   // 0.11 PERF.30: read and imported in the worker (dxf-read-async.js), same drawing
      if (!drawing) {   // a small file, or no worker: the reader's worker, then the import here in slices (0.11 PERF.9)
        const model = await dwgModel(data, false, file.name);
        drawing = await importDwgAsync(model, { versionTag: tag });
      }
      format = 'DWG' + (VERSIONS[tag] ? ' ' + VERSIONS[tag] : '') + ' (' + tag + ')';
    }
    return { drawing, format, bytes: data };
  }

  /** 0.11 PERF.30: a DWG read and imported in the drawing worker (the page never holds the reader's model) → the drawing, or null to read it
   *  the other way (a small file, no worker, a worker that stopped). R12 and older are refused here as in dwgModel. */
  async function dwgInWorker(data, tag, label) {
    const old = preR13(tag);
    if (old) throw Object.assign(new Error(t('app.open.pre_r13', { release: old, version: tag.replace(/\0+$/, '') })), { expected: true });
    busy('Reading ' + label + '…');
    await frame();
    try { return (await readDwgDrawingAsync(data, { versionTag: tag }))?.drawing || null; }
    catch (err) {
      if (err?.workerDied) { console.warn(err); return null; }
      if (err?.unreadable) { console.warn(err); throw new Error(t('app.open.unreadable', { version: tag || t('app.open.unknown_version') })); }
      throw err;
    }
  }

  /** The drawing model of a DWG (cc-dwg's readDwg), or of a DXF for the library's block adapter (dxf-model.js). */
  async function dwgModel(data, dxf = false, label = t('app.the_drawing')) {
    busy('Reading ' + label + '…');
    await frame();
    if (dxf) {
      const { readDxfModel } = await import('./dxf-model.js');
      return readDxfModel(dxfTextOf(data).text);   // ORS.18: binary DXF too
    }
    const tag = new TextDecoder().decode(data.subarray(0, 6));
    const old = preR13(tag);   // 0.6 DF.11: R12 and earlier are not read: say so plainly
    if (old) throw Object.assign(new Error(t('app.open.pre_r13', { release: old, version: tag.replace(/\0+$/, '') })), { expected: true });
    if (!readDwg) readDwg = (await import('./dwg/read-async.js')).readDwgAsync;
    let model;
    try { model = await readDwg(data); } catch (err) { console.warn(err); model = null; }   // off the page's thread: big files no longer freeze it
    if (!model || !model.blocks?.length) throw new Error(t('app.open.unreadable', { version: tag || t('app.open.unknown_version') }));
    return model;
  }

  /** INSERT, File: pick a DWG/DXF and read it (without opening it). → { drawing, fileName } | null */
  function pickPictures(multiple) {
    return new Promise((done) => {
      const inp = el('input', { type: 'file', accept: '.png,.jpg,.jpeg,image/png,image/jpeg', multiple, className: 'visually-hidden', tabIndex: -1, 'aria-hidden': 'true', 'aria-label': t('app.pictures.pick') });
      let settled = false;
      const finish = (v) => { if (settled) return; settled = true; inp.remove(); done(v); };
      inp.addEventListener('cancel', () => finish([]));
      inp.addEventListener('change', async () => {
        const out = [];
        for (const f of inp.files) out.push({ name: f.name, bytes: new Uint8Array(await f.arrayBuffer()) });
        finish(out);
      });
      root.append(inp);
      inp.click();
    });
  }
  const IMPORT_UNIT_NAMES = { mm: 'millimeters', cm: 'centimeters', m: 'meters', in: 'inches', ft: 'feet' };
  async function importUnitsOf(got, f, ext) {
    const IU = window.ccImportUnits, said = got.drawing.meta?.units || '';
    if (said) { const id = Object.keys(IMPORT_UNIT_NAMES).find((k) => IMPORT_UNIT_NAMES[k] === said); print(id && IU ? (await IU.resolve({ file: f, stated: id })).text : t('app.insertf.units_stated', { file: f.name, units: said })); return got; }
    if (!doc.meta?.units) { print(t('app.insertf.units_neither', { file: f.name })); return got; }
    if (!IU) return got;
    const a = await IU.resolve({ file: f, format: ext.toUpperCase(), stated: null, choices: Object.keys(IMPORT_UNIT_NAMES), say: print });
    if (!a) return null;
    got.drawing.meta = { ...(got.drawing.meta || {}), units: IMPORT_UNIT_NAMES[a.unit] };
    return got;
  }
  function pickDrawing() {
    return new Promise((done) => {
      const inp = el('input', { type: 'file', accept: '.dwg,.dxf,.cbor', className: 'visually-hidden', tabIndex: -1, 'aria-hidden': 'true' });
      let settled = false;
      const finish = (v) => { if (settled) return; settled = true; inp.remove(); done(v); };
      inp.addEventListener('cancel', () => finish(null));
      inp.addEventListener('change', async () => {
        const f = inp.files[0];
        if (!f) { finish(null); return; }
        const ext = (f.name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
        if (ext !== 'dwg' && ext !== 'dxf' && ext !== 'cbor') { print(t('app.insertf.not_dwg', { file: f.name })); finish(null); return; }
        busy('Reading ' + f.name + '…');
        await frame();
        let got = null;
        try { const { drawing } = await readDrawing(f, ext); got = { drawing, fileName: f.name }; }
        catch (err) { print(t('app.insertf.read_failed', { file: f.name, why: err.message })); }
        finally { busy(null); }
        // 0.10 BK.8 (units on import; INSERT › File and XATTACH both come through here): a file that states its units says so; one that
        // states none is asked about before anything is placed (the shell's one dialog, remembered per file). It was placed number for
        // number, unasked. A drawing that itself has no units cannot convert: that is said, not asked.
        if (got) got = await importUnitsOf(got, f, ext);
        finish(got);
      });
      root.append(inp);
      inp.click();
    });
  }

  return { oneAtATime, openPicked, openHostFile, openLocal, openLocalNow, readDrawing, dwgModel, pickPictures, pickDrawing };
}
