/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plot-ui.js: cadcraft.js's 23 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountPlot(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { PAPERS, paperByKey, scaleList } from './sheets.js';
import { el, fmt } from './ui-util.js';
import { PEN_WIDTHS, layoutSheet, extentsOf, modelSheet, pdfPending, readPdfUnderlays, displayList, drawPreview, toPdf, toPngBlob, toSvg, matchPaper } from './plot.js';
import { fieldsAuto } from './fields-ui.js';
import { t } from './i18n.js';
import { findTable, styleNameFor, BUILTIN as PLOT_BUILTIN, builtinTable } from './plotstyle.js';
import { DRAWING_FONT } from './view.js';

export function mountPlot(ctx) {
  const { ui, doc, host, engine, print, focusCommandLine, downloadBlob } = ctx;

  // ---- plot dialog ----
  const plotUi = {
    form: ui.plot.querySelector('[data-plot-form]'), what: ui.plot.querySelector('[data-plot-what]'), model: ui.plot.querySelector('[data-plot-model]'),
    area: ui.plot.querySelector('[data-plot-area]'), pick: ui.plot.querySelector('[data-plot-pick]'), paper: ui.plot.querySelector('[data-plot-paper]'),
    orient: ui.plot.querySelector('[data-plot-orient]'), scale: ui.plot.querySelector('[data-plot-scale]'), style: ui.plot.querySelector('[data-plot-style]'),
    pen: ui.plot.querySelector('[data-plot-pen]'), dpi: ui.plot.querySelector('[data-plot-dpi]'), info: ui.plot.querySelector('[data-plot-info]'), canvas: ui.plot.querySelector('[data-plot-canvas]'),
    status: ui.plot.querySelector('[data-plot-status]'), save: ui.plot.querySelector('[data-plot-save]'), open: ui.plot.querySelector('[data-plot-open]'),
    close: ui.plot.querySelector('[data-plot-close]'),
    png: ui.plot.querySelector('[data-plot-png]'), svg: ui.plot.querySelector('[data-plot-svg]'), print: ui.plot.querySelector('[data-plot-print]'),
    printBox: ui.plot.querySelector('[data-plot-printbox]'), printer: ui.plot.querySelector('[data-plot-printer]'),
    printPaper: ui.plot.querySelector('[data-plot-printpaper]'), copies: ui.plot.querySelector('[data-plot-copies]'),
  };
  plotUi.paper.append(...PAPERS.map((p) => el('option', { value: p.key }, p.label)));
  plotUi.pen.append(...PEN_WIDTHS.map((w) => el('option', { value: String(w) }, w.toFixed(2) + ' mm')));
  const plotPrefs = (() => { try { return JSON.parse(localStorage.getItem('cadcraft.plot') || '{}'); } catch { return {}; } })();
  let plotState = null;   // { c, win, list, sheet, done }

  function plotDialog(c) {
    fieldsAuto(doc, 'p');   // ORS.22: fields update before a plot when the drawing's setting says so
    return new Promise((done) => {
      plotState = { c, win: plotState?.win || null, done };
      const lay = doc.layout;
      plotUi.model.hidden = !!lay;
      plotUi.what.textContent = lay
        ? t('app.plot.sheet', { name: lay.name, paper: paperByKey(lay.paper.key)?.label || fmt(lay.paper.w) + ' × ' + fmt(lay.paper.h) + ' ' + lay.paper.unit })
        : t('app.plots_model_onto_sheet');
      if (!lay) {
        plotUi.paper.value = plotPrefs.paper && paperByKey(plotPrefs.paper) ? plotPrefs.paper : (['inches', 'feet'].includes(doc.meta.units) ? 'letter' : 'iso-a4');
        plotUi.orient.value = plotPrefs.orient || 'landscape';
        plotUi.area.value = plotState.win ? 'window' : (plotPrefs.area === 'display' ? 'display' : 'extents');
        plotUi.scale.replaceChildren(el('option', { value: '' }, t('app.fit_paper')), ...scaleList(doc).map((x) => el('option', { value: String(x.n) }, x.label)));
        plotUi.scale.value = plotPrefs.scale && [...plotUi.scale.options].some((o) => o.value === plotPrefs.scale) ? plotPrefs.scale : '';
      }
      fillPlotStyles();
      plotUi.pen.value = plotPrefs.pen || '0.25';
      if (plotUi.dpi) plotUi.dpi.value = ['0', '600', '300', '150'].includes(plotPrefs.dpi) ? plotPrefs.dpi : '0';   // pictures: their own resolution, or a cap (WL.13)
      ui.plot.querySelector('[data-plot-publish]').hidden = doc.layouts.length < 2;   // every sheet in one PDF (PUBLISH, 0.4 C36)
      plotUi.status.textContent = '';
      ui.plot.showModal();
      updatePlot();
      fillPrinters();
    });
  }
  let plotPicking = false;
  /** The dialog is done with: end the PLOT command now (the dialog's close event comes later). */
  function endPlot() {
    if (plotPicking) return;   // closed for a moment to pick a window on the model
    const st = plotState;
    if (!st?.done) return;
    plotState = { win: st.win };
    st.done();
  }
  function closePlot() {
    if (ui.plot.open) ui.plot.close();
    endPlot();
  }
  ui.plot.addEventListener('close', () => { endPlot(); if (!plotPicking) focusCommandLine(); });
  plotUi.close.addEventListener('click', closePlot);
  // every sheet in one PDF: the dialog closes (PLOT ends), then PUBLISH runs with its ink and pen
  ui.plot.querySelector('[data-plot-publish]').addEventListener('click', () => {
    savePlotPrefs(); closePlot();
    setTimeout(() => { engine.run('PUBLISH'); setTimeout(() => { if (engine.running === 'PUBLISH' && engine.waiting) engine.text(''); }, 0); }, 0);   // Enter = all sheets
  });
  for (const k of ['area', 'paper', 'orient', 'scale', 'pen']) plotUi[k].addEventListener('change', () => { if (k === 'area' && plotUi.area.value !== 'window') plotState.win = null; savePlotPrefs(); updatePlot(); });
  // the plot style table (0.6 DC.14): chosen here, kept with the sheet (or the model) in the drawing — one undo step
  plotUi.style.addEventListener('change', () => { setPlotStyle(plotUi.style.value); savePlotPrefs(); updatePlot(); });
  ui.plot.querySelector('[data-plot-style-edit]').addEventListener('click', async () => {
    const got = await host.plotStyles(plotUi.style.value);
    if (got && got !== plotUi.style.value) setPlotStyle(got);
    fillPlotStyles(); savePlotPrefs(); updatePlot();
  });
  /** The default when a sheet or the model has no table yet: the last one chosen in this browser (older prefs: ink). */
  const defaultPlotStyle = () => (findTable(doc, plotPrefs.style) ? findTable(doc, plotPrefs.style).name : plotPrefs.ink === 'color' ? 'colour' : 'monochrome');
  function fillPlotStyles() {
    const own = styleNameFor(doc, doc.layout), cur = own || defaultPlotStyle(), found = findTable(doc, cur);
    const names = [...PLOT_BUILTIN, ...(doc.meta.plotStyles?.tables || []).map((x) => x.name)];
    plotUi.style.replaceChildren(...names.map((n) => el('option', { value: n }, PLOT_BUILTIN.includes(n) ? t('plotstyle.builtin.' + n) : n)),
      ...(found ? [] : [el('option', { value: cur }, t('plotstyle.plot.missing_option', { name: cur }))]));
    plotUi.style.value = found ? found.name : cur;
  }
  function setPlotStyle(name) {
    const lay = doc.layout;
    if (styleNameFor(doc, lay) === name) return;
    doc.change(t('plotstyle.undo.assign'), () => {
      if (lay) doc.setLayouts(doc.layouts.map((l) => (l === lay ? { ...l, plotStyle: name } : l)));
      else doc.setMeta({ plotStyles: { tables: doc.meta.plotStyles?.tables || [], model: name } });
    });
  }
  plotUi.pick.addEventListener('click', () => pickPlotWindow());
  function savePlotPrefs() {
    const st = findTable(doc, plotUi.style.value);
    Object.assign(plotPrefs, { paper: plotUi.paper.value, orient: plotUi.orient.value, area: plotUi.area.value === 'window' ? 'extents' : plotUi.area.value, scale: plotUi.scale.value, pen: plotUi.pen.value, dpi: plotUi.dpi?.value || '0',
      ...(st ? { style: st.name, ink: st.name === 'colour' ? 'color' : 'mono' } : {}) });   // ink: what PUBLISH and older builds read
    try { localStorage.setItem('cadcraft.plot', JSON.stringify(plotPrefs)); } catch { /* private window: fine */ }
  }
  /** Close the dialog, pick two corners on the model through the PLOT command, then open it again. */
  async function pickPlotWindow() {
    const c = plotState.c;
    plotPicking = true;   // closing for the pick must not end the command
    ui.plot.close();
    try {
      const a = await c.point(t('app.specify_first_corner_area'));
      c.preview((cur) => [{ type: 'poly', closed: true, pts: [{ x: a.x, y: a.y }, { x: cur.x, y: a.y }, { x: cur.x, y: cur.y }, { x: a.x, y: cur.y }] }]);
      const b = await c.point(t('app.specify_opposite_corner'), { base: a });
      c.preview(null);
      if (Math.abs(b.x - a.x) > 1e-9 && Math.abs(b.y - a.y) > 1e-9) plotState.win = { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) };
    } catch { /* Esc: back to the dialog as it was */ }
    ui.plot.showModal();
    setTimeout(() => { plotPicking = false; }, 0);
    plotUi.area.value = plotState.win ? 'window' : plotUi.area.value === 'window' ? 'extents' : plotUi.area.value;
    updatePlot();
  }

  function currentSheet() {
    const lay = doc.layout;
    if (lay) return { sheet: layoutSheet(doc, lay), info: '' };
    const area = plotUi.area.value === 'window' ? plotState?.win : plotUi.area.value === 'display' ? host.viewExtents() : extentsOf(doc);
    if (!area) return { sheet: null, info: plotUi.area.value === 'window' ? t('app.pick_window_plot') : t('app.there_nothing_plot_yet') };
    const sheet = modelSheet(doc, { area, paper: plotUi.paper.value, portrait: plotUi.orient.value === 'portrait', n: plotUi.scale.value ? +plotUi.scale.value : null });
    const mm = (v) => fmt(Math.round(v * 10) / 10);
    const info = t(sheet.scale.fits ? 'app.plot.area' : 'app.plot.area.toobig', { scale: sheet.scale.label, w: mm((area.maxX - area.minX) * sheet.scale.s), h: mm((area.maxY - area.minY) * sheet.scale.s) });
    return { sheet, info };
  }

  function updatePlot() {
    plotUi.pick.hidden = plotUi.area.value !== 'window';
    const { sheet, info } = currentSheet();
    const style = findTable(doc, plotUi.style.value);
    plotUi.info.textContent = [info, style ? '' : t('plotstyle.plot.missing', { name: plotUi.style.value })].filter(Boolean).join(' ');
    plotUi.save.disabled = plotUi.open.disabled = plotUi.png.disabled = plotUi.svg.disabled = plotUi.print.disabled = !sheet;
    const cv = plotUi.canvas, box = cv.parentElement.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    cv.width = Math.round(box.width * dpr); cv.height = Math.round(box.height * dpr);
    const ctx = cv.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    if (!sheet) { plotState.list = null; return; }
    if (pdfPending(doc)) { plotUi.save.disabled = plotUi.open.disabled = plotUi.png.disabled = plotUi.svg.disabled = plotUi.print.disabled = true; readPdfUnderlays(doc).then(() => updatePlot()); return; }   // 0.7 D7.24: the underlays' pages first
    const list = displayList(doc, sheet, { style: style || builtinTable('colour') });
    plotState.list = list; plotState.sheet = sheet;
    const pad = 12 * dpr, k = Math.min((cv.width - 2 * pad) / list.w, (cv.height - 2 * pad) / list.h);
    const ox = (cv.width - list.w * k) / 2, oy = (cv.height - list.h * k) / 2;
    ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(ox + 3 * dpr, oy + 3 * dpr, list.w * k, list.h * k);
    drawPreview(ctx, list, { pxPerMm: k, pen: +plotUi.pen.value, font: DRAWING_FONT, ox, oy });
    ctx.strokeStyle = '#555'; ctx.lineWidth = 1; ctx.strokeRect(ox + 0.5, oy + 0.5, list.w * k - 1, list.h * k - 1);
  }

  /** The plot's file name without its extension (the drawing, and the sheet when a layout is open). */
  const plotBase = () => (doc.meta.name || 'Drawing1') + (doc.layout ? '-' + doc.layout.name : '');
  const safeName = (n) => n.replace(/[\\/:*?"<>|]+/g, '_');
  async function pdfBytes() {
    const list = plotState?.list;
    if (!list) return null;
    plotUi.status.textContent = t('app.making_pdf');
    const made = await toPdf(list, { pen: +plotUi.pen.value, maxDpi: +(plotUi.dpi?.value || 0), title: (doc.meta.name || 'Drawing1') + (doc.layout ? ' – ' + doc.layout.name : '') });
    plotUi.status.textContent = '';
    return made;
  }
  async function makePdf() {
    const list = plotState?.list;
    const made = await pdfBytes();
    if (!made) return null;
    const { bytes, report } = made;
    const name = plotBase() + '.pdf';
    print(t(plotState.sheet?.scale ? 'app.plot.done.scale' : 'app.plot.done', { name, bytes: bytes.length.toLocaleString('en-US'), w: fmt(list.w), h: fmt(list.h), scale: plotState.sheet?.scale?.label ?? '' }));
    if (report.missing) print('  ' + t(report.font === 'Helvetica' ? 'app.plot.missing_chars' : 'app.plot.missing_glyphs', { n: report.missing }));   // Helvetica: no font could be embedded
    if (report.pictures) print('  ' + t('app.plot.pictures', { n: report.pictures, cap: report.shrunk ? plotUi.dpi.value : '' }));
    if (report.kept) print('  ' + t('app.plot.pictures_jpeg', { n: report.kept }));
    return { blob: new Blob([bytes], { type: 'application/pdf' }), name: safeName(name) };
  }
  /** Hand a Blob to the person as a file: through the host (host.js download), like every other export. The browser
   *  downloads it; Studio asks where to save with its own dialog, off the window's thread. 0.10 FX.311 (suggestion
   *  #1827): these buttons clicked an `<a download>` instead, which went down the web view's own download path, and
   *  there the Studio shell's synchronous Save dialog froze the whole window on Linux (KDE Plasma, Wayland). */
  function giveFile(blob, name) { downloadBlob(safeName(name), blob, blob.type || 'application/octet-stream'); }
  // PNG and SVG come from the same display list as the PDF (plot.js toPngBlob / toSvg); pictures stay in the PDF (0.7 D7.20)
  plotUi.png.addEventListener('click', async () => {
    const list = plotState?.list;
    if (!list) return;
    plotUi.status.textContent = t('plot.making_png');
    try {
      const r = await toPngBlob(list, { dpi: 300, pen: +plotUi.pen.value, font: DRAWING_FONT });
      giveFile(r.blob, plotBase() + '.png');
      print(t('plot.png.done', { name: plotBase() + '.png', w: r.w, h: r.h, dpi: r.dpi }));
      if (r.capped) print('  ' + t('plot.png.capped', { dpi: r.dpi }));
      if (r.pictures) print('  ' + t('plot.pictures.left_out', { n: r.pictures }));
      closePlot();
    } catch (err) { print(t('plot.png.failed', { why: String(err?.message || err) })); }
    plotUi.status.textContent = '';
  });
  plotUi.svg.addEventListener('click', () => {
    const list = plotState?.list;
    if (!list) return;
    const r = toSvg(list, { pen: +plotUi.pen.value, title: (doc.meta.name || 'Drawing1') + (doc.layout ? ' – ' + doc.layout.name : ''), font: DRAWING_FONT });
    giveFile(new Blob([r.text], { type: 'image/svg+xml' }), plotBase() + '.svg');
    print(t('plot.svg.done', { name: plotBase() + '.svg', bytes: r.text.length.toLocaleString('en-US') }));
    if (r.report.pictures) print('  ' + t('plot.pictures.left_out', { n: r.report.pictures }));
    closePlot();
  });
  // Printing (0.7 D7.20). Studio: the system's printers through the shell (paper, copies); the browser: the PDF in a hidden
  // frame and the browser's own Print dialog. Studio on a computer only: tablets have no `printers`.
  const printers = (window.cadcraftDesktop && Number(window.cadcraftDesktop.version) >= 1 && window.cadcraftDesktop.printers) || null;   // Studio on a computer
  let printerList = null;   // { accepts, printers } once asked
  if (printers) { plotUi.printBox.hidden = false; plotUi.open.hidden = true; }
  async function fillPrinters() {
    if (!printers) return;
    try { printerList = await printers.list(); } catch (err) { printerList = { accepts: 'pdf', printers: [], error: String(err?.message || err) }; }
    const ps = printerList.printers;
    plotUi.printer.replaceChildren(...(ps.length ? ps.map((p) => el('option', { value: p.name }, p.name)) : [el('option', { value: '' }, t('plot.printers.none'))]));
    const want = ps.find((p) => p.name === plotPrefs.printer) || ps.find((p) => p.default) || ps[0];
    if (want) plotUi.printer.value = want.name;
    fillPrintPapers();
    plotUi.print.disabled = !ps.length || !plotState?.list;
    if (!ps.length) plotUi.status.textContent = printerList.error ? t('plot.print.failed', { why: printerList.error.replace(/^[a-z_]+: /, '') }) : t('plot.printers.none');
  }
  function fillPrintPapers() {
    const p = printerList?.printers.find((x) => x.name === plotUi.printer.value);
    const list = plotState?.list;
    const same = list && p ? matchPaper(p.papers, list.w, list.h) : '';
    plotUi.printPaper.replaceChildren(
      el('option', { value: '__same__' }, same ? t('plot.print.paper.same', { paper: same }) : t('plot.print.paper.current')),
      ...(p?.papers || []).map((n) => el('option', { value: n }, n)));
  }
  plotUi.printer.addEventListener('change', () => { fillPrintPapers(); plotPrefs.printer = plotUi.printer.value; savePlotPrefs(); });
  plotUi.print.addEventListener('click', async () => {
    const list = plotState?.list;
    if (!list) return;
    const base = plotBase();
    if (!printers) {   // the browser: a hidden frame holding the PDF, then its Print dialog
      const made = await pdfBytes();
      if (!made) return;
      const url = URL.createObjectURL(new Blob([made.bytes], { type: 'application/pdf' }));
      const fr = el('iframe', { src: url, 'aria-hidden': 'true', tabindex: '-1', style: 'position:fixed;width:1px;height:1px;border:0;opacity:0;right:0;bottom:0' });
      let fired = false;
      const go = () => {
        if (fired) return; fired = true;
        try { fr.contentWindow.focus(); fr.contentWindow.print(); print(t('plot.print.browser', { name: base + '.pdf' })); closePlot(); }
        catch { print(t('plot.print.browser_blocked')); window.open(url, '_blank'); }
        setTimeout(() => { fr.remove(); URL.revokeObjectURL(url); }, 120000);
      };
      fr.addEventListener('load', () => setTimeout(go, 400));
      document.body.append(fr);
      return;
    }
    const ps = printerList?.printers.find((x) => x.name === plotUi.printer.value);
    if (!ps) return;
    const sel = plotUi.printPaper.value;
    const paper = sel === '__same__' ? matchPaper(ps.papers, list.w, list.h) : sel;
    const copies = Math.max(1, Math.min(99, Math.round(+plotUi.copies.value || 1)));
    plotUi.print.disabled = true;
    try {
      let bytes;
      if (printerList.accepts === 'png') {
        plotUi.status.textContent = t('plot.making_png');
        bytes = new Uint8Array(await (await toPngBlob(list, { dpi: 300, pen: +plotUi.pen.value, font: DRAWING_FONT })).blob.arrayBuffer());
      } else bytes = (await pdfBytes()).bytes;
      plotUi.status.textContent = t('plot.printing');
      await printers.print(bytes, { printer: ps.name, copies, paper, landscape: list.w > list.h, title: base });
      plotPrefs.printer = ps.name; savePlotPrefs();
      print(t('plot.print.sent', { printer: ps.name, copies, name: base }));
      closePlot();
    } catch (err) {
      print(t('plot.print.failed', { why: String(err?.message || err).replace(/^[a-z_]+: /, '') }));
      plotUi.status.textContent = t('plot.print.failed', { why: String(err?.message || err).replace(/^[a-z_]+: /, '') });
    }
    plotUi.print.disabled = false;
  });
  plotUi.save.addEventListener('click', async () => {
    const pdf = await makePdf();
    if (!pdf) return;
    giveFile(pdf.blob, pdf.name);   // FX.311: the host's save path, never an <a download> click
    closePlot();
  });
  plotUi.open.addEventListener('click', async () => {
    const w = window.open('', '_blank');   // opened now, while the click counts, so it is not blocked
    const pdf = await makePdf();
    if (!pdf) { w?.close(); return; }
    if (w) {
      const url = URL.createObjectURL(pdf.blob);
      w.location.href = url; print(t('app.pdf_opened_new_tab'));
      setTimeout(() => URL.revokeObjectURL(url), 120000);
    } else { giveFile(pdf.blob, pdf.name); print(t('app.browser_blocked_new_tab')); }
    closePlot();
  });

  return { plotPrefs, plotDialog };
}
