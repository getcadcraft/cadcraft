/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadcraft.js — the CadCraft drafting app in the browser. Wires the page (ui.inc) to the drawing
 * (doc.js), the canvases (view.js) and the command line (commands.js).
 *
 * Mouse: left click picks points and objects; drag (or click, click) on empty space makes a
 * selection window — left to right = window (fully inside), right to left = crossing. Wheel
 * zooms at the cursor; drag with the wheel or the right button pans; a right click is Enter.
 * Keyboard: typing goes to the command line from anywhere; Enter or Space sends it (Space types
 * a space while text is asked for); Esc cancels; F3 snap, F7 grid, F8 ortho; Ctrl+Z/Y/S/O/A/P.
 * Edit (toolbar group Undo, Redo, Copy, Paste + "More" menu): Ctrl+C COPYCLIP, Ctrl+X CUTCLIP, Ctrl+V PASTECLIP,
 * Ctrl+Shift+V PASTEORIG, Ctrl+D DUPLICATE, Delete ERASE, Ctrl+A SELECTALL, Esc clears the selection. While the
 * command line holds typed text, Ctrl+C/X/V/A work on that text instead. The clipboard (clipboard.js) lives in this
 * tab and in localStorage "cadcraft.clipboard", so another tab can paste; what comes back is validated like a file.
 * An area copied in MarkupCraft (localStorage "cadcraft.areaclip", 0.8 D8.15) is pasted at its true size by PASTEAREA:
 * Ctrl+V runs it when the clipboard's picture is that area's, or (PASTECLIP) when the area is newer than CadCraft's copy.
 *
 * Settings › CadCraft (settings.inc; localStorage "cadcraft.settings"): cursor small | medium | large;
 * pasteBase 'lower-left' | 'center' (where a pasted copy hangs from the cursor; COPYBASE picks its own);
 * pick 'add' (a click adds to the selection, Shift+click removes) | 'replace' (a click or window replaces the
 * selection, Shift adds or toggles) — with no command running.
 *
 * Files open on this computer: DXF with dxf.js, DWG with cc-dwg's readDwg (./dwg/, imported on first use).
 * Saving downloads a copy as DWG (AutoCAD 2000, dwg-save.js) or DXF R12 (dxf.js): SAVE / Ctrl+S in the drawing's format
 * (what it was opened as, or the last one chosen), SAVEAS / Ctrl+Shift+S to choose. Plotting makes a PDF here too
 * (plot.js); nothing is uploaded.
 * ?handoff=<id>: another app (BimCraft's "Edit in CadCraft") left a drawing for this tab in the
 * browser's own storage (handoff.js); it opens as if dropped here.
 * Tabs under the drawing switch between the model and its layouts (sheets). `window.cadcraft`
 * exposes {doc, view, engine, host} for tests and the console.
 */

import { Doc, TYPE_NAMES, aciHex } from './doc.js';
import { View, SNAP_LABELS, DRAWING_FONT } from './view.js';
import { switchState } from './visedit.js';
import { describe as describeEntity, Engine, lookup, commandList, namedBlocks, setLengthFormat, lengthFormatLabel, lengthFormatName, qsTypeLabel, qsPropLabel, closeBlockEdit, closeRefEdit, isAttdefText, commandRegistry } from './commands.js';
import { QS_PROPS, propsFor, valuesOf, quickSelect as qsCount } from './qselect.js';
import { formatLength, formatArea, parseLength, readNumber, readAngle, fmtAngle, tAngle, unitsOf, LUNITS, newDrawingUnits } from './units.js';
import { selectionTotals } from './seltotals.js';   // 0.6 DF.4
import { PATTERNS, hatchLines } from './hatch.js';
import { polarTrack, trackPoint } from './tracking.js';
import { activeUcs, toUcs } from './ucs.js';
import { installMyTools } from './mytools-ui.js';
import { visibilityOf, setVisibility } from './dyn-blocks.js';
import { dynGripActs } from './dyngrips.js';
import { sheetNumberOf } from './sheetnum.js';
import { openCompare } from './compare-ui.js';
import { openHistory } from './history-ui.js';           // 0.7 D7.31: the History panel
import { LocalHistory, CloudHistory } from './drawing-history.js';
import { installShortcuts } from './keys-ui.js';
import { installAlignPanel } from './align-ui.js';   // 0.6 DF.2: the Align and distribute panel
import { installAttEdit } from './attedit-ui.js';   // 0.6 DF.5: EATTEDIT, BATTMAN, the REFEDIT banner
import { installPlotStyles } from './plotstyle-ui.js';   // 0.6 DC.14: the plot style table editor
import { installDimStyles } from './dimstyle-ui.js';
import { installTour, appTourAutoOn, setAppTourAuto } from './tour.js';   // 0.7 D7.06: the first-drawing tour   // 0.7 D7.14: the dimension style manager
import { BUILTIN as PLOT_BUILTIN, builtinTable, findTable, styleNameFor } from './plotstyle.js';
import { hasAttributes } from './attedit.js';
import { placePastedPicture, picturesToSave, readAreaClip } from './pastepic.js';   // 0.6 DF.6: a picture pasted from the system clipboard
import { sameImage } from './areaclip.js';   // 0.8 D8.15: … or an area copied in MarkupCraft (PASTEAREA, pictures-cmd.js)
import { sniffPicture } from './pictures.js';
import { keyMap } from './mytools.js';
import { has as hasKey } from './i18n.js';
import { DynInput } from './dynin.js';
import { readDxf, writeDxf } from './dxf.js';
import { decodeDxfBytes } from './dxf-decode.js';
import { saveDwg, DWG_VERSIONS, dwgVersionKey } from './dwg-save.js';
import { writeDxf2000 } from './dxf2000.js';
import { importDwg, VERSIONS, preR13 } from './dwg-import.js';
import { gripMove, deg, rad, normAngle, SNAP_KINDS, textLayout, FONT_EM, LINE_SPACING } from './geom.js';
import { DIM_KINDS, dimMeasure, formatMeasure } from './dims.js';
import { PAPERS, paperByKey, makePaper, scaleList, scaleLabel, sOf, nOf, aimViewport, modelExtents } from './sheets.js';
import { layoutSheet, modelSheet, displayList, toPdf, toSvg, toPngBlob, matchPaper, drawPreview, extentsOf, PEN_WIDTHS, pdfPending, readPdfUnderlays } from './plot.js';
import { el, fillDl, bytes, num, fmt, frame } from './ui-util.js';
import { attrRows, oneLine } from './attrs.js';
import { LIB_TAGS } from './libplace.js';
import { createLibraryPanel } from './libpanel.js';
import { createSheetSetPanel } from './sheetset-panel.js';
import { handoffParam, takeHandoff, sendHandoff } from './handoff.js';
import { Clipboard } from './clipboard.js';
import { t, has } from './i18n.js';
import { lassoHits, lassoMode, nextMode, thin } from './lasso.js';
import { createDividers } from './panes.js';
import { createDocTabs } from './doctabs.js';
import { Autosave } from "./app-autosave.js";
import { wireAutosave } from './dwg-autosave.js';
import { linetypeNames, ltLabel, lwLabel, LINEWEIGHTS } from './linetypes.js';
import { createParamsPanel } from './params-panel.js';
import { readSwExport, loadSwSketch } from './swsketch.js';
import { mountViewCube } from './m3d/viewcube.js';
import { createPropsPanel } from './props.js';
import { installRibbonControls } from './ribbon-controls.js';   // 0.8 RIBBON-COMPACT item 8: layers / colour / linetype / lineweight in the ribbon
import { setUnits } from './model3d.js';
import { installLispUi } from './appload.js';
import { startAddons } from './addons/cadcraft-api.js';
import { installAgents } from './agents.js';
import { mountCadShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import { Autocomplete, nextPoint } from './autocomplete.js';
import { addonIdsIn } from './addons-file.js';
import { mountUndoHook } from './undo-hook.js';   // 0.8 EG.77   // 0.8 AL.6
import { getHost } from "./host.js";
import './pdfunder.js';   // PDFATTACH, PDFIMPORT, PDFCLIP, PDFADJUST, PDFLAYERS, PDF (0.7 D7.24)
import { installPdfUnder } from './pdfunder-ui.js';
import './spline-cmd.js';   // SPLINE, SPLINEDIT, PEDIT (0.7 D7.10)
import './pictures-cmd.js';   // IMAGEATTACH, IMAGE, IMAGECLIP (0.5 WL.14, cad-files)
import './autocomplete-cmd.js';   // AUTOCOMPLETE (0.8 EG.54)
import './sketch-cmd.js';   // SKETCHFIX (0.8 EG.55)
import './autosheet-cmd.js';   // AUTOSHEET (0.8 EG.56)
import './gridmove-cmd.js';   // GRIDMOVE (0.8 EG.35)
import './access-cmd.js';   // ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE (0.8 EG.52)
import { mountAccess } from './access-ui.js';
import './autodim-cmd.js';   // AUTODIM (0.8 EG.20)
import './redline-cmd.js';   // REDLINE (RDL): redline to revision (0.8 EG.19)
import './tags-cmd.js';   // TAGS: block attributes as tags that feed schedules (0.8 SU.915)
import './photosketch-cmd.js';   // PHOTOSKETCH (0.8 EG.36)
import { offerFor } from './details-cmd.js';   // DETAILS (0.8 EG.57)
import './scan-cmd.js';   // SCANATTACH … SCANTRACE, RASTERSNAP: scanned drawings (0.7 LC.6, session trace)
import { installScanUi } from './scan-ui.js';
import './asbuilt.js';        // ASBUILT: as-built points compared with the drawing's (0.6 LC.22, lc-structure)
import { installClasses } from './classes-cmd.js';   // CLASSES, CLASS, Properties › Class (0.8 SU.912, sx-classes)
import './vault-cmd.js';   // DOCUMENTS (DOCS): the project document manager (0.8 SU.1058, sx-vault)
import { CloudAttach, attachFile, CLOUD_ACCEPT, CLOUD_READ, isCloudFile } from './cloud-cad.js';
import { installMaps } from './maps-cad.js';   // MAPLAYERS (0.5 SG.3; maplayers.js loads on first use)   // POINTCLOUDATTACH, POINTCLOUD (0.5 SG.1; the reader loads with the first cloud)
import './diagram-cmd.js';   // DIAGRAM: a diagram from Mermaid / PlantUML / D2 / a from-to list (0.8 SU.883)
import './gds-cmd.js';   // GDSIN: view an IC layout, a GDSII stream (0.8 SU.752 spike)
import './ole-cmd.js';   // OLELIST: the OLE objects a DWG carries (0.8 D7.23)
import { LIB as SHX_LIB, useDoc as shxUseDoc, keepFonts as shxKeepFonts, missingFonts as shxMissing } from './shx-text.js';   // SHX fonts you load (0.8 D8.7)
import { rescanFolder as shxRescan } from './shx-cmd.js';   // SHXFONTS
import { cadProblems, auditIds } from './problems-cadcraft.js';   // 0.8 P.6: the file's findings as shared Problems
import './textmask-cmd.js';   // TEXTMASK (0.5 WL.8, cad-files)
import './xclip-cmd.js';   // XCLIP (0.5 WL.16, cad-files)
import { PadDetector } from './wheel-pad.js';   // 0.7 D7.56
import { panButton, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and pan buttons (input-cadcraft.js)

const root = document.querySelector('[data-cadcraft]');
/** The library needs getcadcraft.com's API: off in the self-hosted browser edition (devshell `#cc-edition` {library: false}). */
const libraryOn = (() => { try { const ed = JSON.parse(document.getElementById('cc-edition')?.textContent || 'null'); return !ed || ed.library !== false; } catch { return true; } })();
if (root) init(root);

function init(root) {
  const $ = (s) => root.querySelector(s);
  const ui = {
    base: $('[data-base]'), over: $('[data-over]'), stage: $('[data-stage]'),
    history: $('[data-history]'), prompt: $('[data-prompt]'), input: $('[data-cmd-input]'), form: $('[data-cmd-form]'), suggest: $('[data-suggest]'),
    coords: $('[data-coords]'), status: $('[data-status]'), hint: $('[data-hint]'), drop: $('[data-drop]'), busy: $('[data-busy]'), busyText: $('[data-busy-text]'),
    layers: $('[data-layer-list]'), layerNew: $('[data-layer-new]'), layerForm: $('[data-layer-form]'), layerName: $('[data-layer-name]'),
    info: $('[data-info]'), report: $('[data-report]'), props: $('[data-props]'), propsH: $('[data-props-h]'),
    file: $('[data-file]'), snapKinds: $('[data-snap-kinds]'),
    blocks: $('[data-block-list]'), blocksEmpty: $('[data-blocks-empty]'), tabs: $('[data-tabs]'),
    plot: $('[data-plot]'),
  };

  // ---- settings (per viewer conveniences only) ----
  const saved = (() => { try { return JSON.parse(localStorage.getItem('cadcraft.settings') || '{}'); } catch { return {}; } })();
  const settings = {
    grid: saved.grid ?? true, ortho: saved.ortho ?? false, osnap: saved.osnap ?? true,
    polar: saved.polar ?? false, otrack: saved.otrack ?? false, dyn: saved.dyn ?? false, lwt: saved.lwt ?? false, polarInc: saved.polarInc > 0 && saved.polarInc <= 180 ? saved.polarInc : 90,   // polar and object snap tracking (tracking.js)
    kinds: new Set(saved.kinds || ['end', 'mid', 'cen', 'quad', 'int', 'perp', 'node', 'ins']),
    cursor: ['small', 'medium', 'large', 'full'].includes(saved.cursor) ? saved.cursor : 'medium',
    pasteBase: saved.pasteBase === 'center' ? 'center' : 'lower-left',
    pick: saved.pick === 'replace' ? 'replace' : 'add',
    lasso: saved.lasso === 'box' ? 'box' : 'lasso',   // press and drag: a lasso (lasso.js; LASSOMODE 1) or a rectangle (0)
    corner: ['auto', 'cube', 'axes', 'none'].includes(saved.corner) ? saved.corner : 'auto',   // corner indicator (applyCorner)
    tabs: saved.tabs === 'number' ? 'number' : 'full',   // sheet tabs: full names, or sheet numbers only (WL.9)
    selTotals: saved.selTotals === 'off' ? 'off' : 'on',   // the selection's length and area in the status bar (0.6 DF.4)
    trimDrag: saved.trimDrag === 'window' ? 'window' : 'path',   // TRIM / EXTEND, a drag on an empty spot: a freehand path or a window (0.6 DF.13)
    toolbarRows: ['auto', '2', '1'].includes(saved.toolbarRows) ? saved.toolbarRows : 'auto',   // toolbar rows: wrap to fit, two rows, or one that scrolls (CP.1, GJoe2 getcadcraft/cadcraft#2)
    toolbarDock: ['top', 'bottom', 'left', 'right'].includes(saved.toolbarDock) ? saved.toolbarDock : 'top',   // which side the toolbar sits on (0.7 D7.02; top = how it always was)
    fileKeys: saved.fileKeys === 'off' ? 'off' : 'on',   // a key on every object so a git/Fossil merge can tell objects apart (file-keys.js, 0.8 DC.27)
    details: saved.details === 'off' ? 'off' : 'on',   // offer the firm's details for a selection that matches (details.js, 0.8 EG.57)
    autocomplete: saved.autocomplete === 'off' ? 'off' : 'on',   // drawing autocomplete: ghost geometry from the drawing's own patterns (autocomplete.js, 0.8 EG.54)
    emptyClick: saved.emptyClick === 'keep' ? 'keep' : 'clear',   // a click on an empty spot: clears the selection, or keeps it (Esc clears; 0.6 DC.67)
  };
  const persist = () => { try { localStorage.setItem('cadcraft.settings', JSON.stringify({ ...settings, kinds: [...settings.kinds] })); } catch { /* private window: fine */ } };

  Doc.fileKeys = settings.fileKeys !== 'off';
  const doc = new Doc();
  doc.meta.units = newDrawingUnits();   // 0.7 UNITS: the starred length unit ($INSUNITS), else none as before
  const view = new View(ui.base, ui.over, doc);
  view.grid = settings.grid;
  view.lwDisplay = settings.lwt;
  view.cursorSize = settings.cursor;
  // the shell's full-screen crosshair (app-crosshair.js) leaves this view alone: it draws its own, inside the active pane
  for (const c of [ui.base, ui.over]) c?.setAttribute?.('data-own-crosshair', '');
  window.addEventListener('cc-crosshair', () => view.invalidate());

  // Cursor size lives in the shared Settings dialog (app-settings.inc includes this build's settings.inc).
  const settingsDlg = document.querySelector('[data-app-settings]');
  const setCursor = (size) => {
    settings.cursor = size; view.cursorSize = size; persist(); view.invalidate();
    settingsDlg?.querySelectorAll('input[name="ccCursor"]').forEach((r) => { r.checked = r.value === size; });
  };
  // Paste point and what a click does to the selection: two radio groups in the same panel.
  const RADIO_SETTINGS = { ccPaste: 'pasteBase', ccPick: 'pick', ccCorner: 'corner', ccLasso: 'lasso', ccTabs: 'tabs', ccSelTotals: 'selTotals', ccTrimDrag: 'trimDrag', ccEmptyClick: 'emptyClick', ccAutocomplete: 'autocomplete', ccDetails: 'details', ccFileKeys: 'fileKeys', ccToolbarRows: 'toolbarRows', ccToolbarDock: 'toolbarDock' };
  const setRadio = (name, value) => {
    settings[RADIO_SETTINGS[name]] = value; persist();
    settingsDlg?.querySelectorAll('input[name="' + name + '"]').forEach((r) => { r.checked = r.value === value; });
  };
  if (settingsDlg) {
    settingsDlg.querySelectorAll('input[name="ccCursor"]').forEach((r) => { r.checked = r.value === settings.cursor; });
    for (const [name, key] of Object.entries(RADIO_SETTINGS)) settingsDlg.querySelectorAll('input[name="' + name + '"]').forEach((r) => { r.checked = r.value === settings[key]; });
    settingsDlg.addEventListener('change', (e) => {
      if (e.target.name === 'ccCursor') setCursor(e.target.value);
      else if (RADIO_SETTINGS[e.target.name]) setRadio(e.target.name, e.target.value);
      if (e.target.name === 'ccCorner') applyCorner();
      if (e.target.name === 'ccTabs') renderTabs();
      if (e.target.name === 'ccSelTotals') renderSelTotals();
      if (e.target.name === 'ccFileKeys') Doc.fileKeys = settings.fileKeys !== 'off';
      if (e.target.name === 'ccAutocomplete') { auto.on = settings.autocomplete !== 'off'; auto.forget(); refreshCursor(); }
      if (e.target.name === 'ccToolbarRows') applyToolbarRows();
      if (e.target.name === 'ccToolbarDock') applyToolbarDock();
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { setCursor('medium'); setRadio('ccPaste', 'lower-left'); setRadio('ccPick', 'add'); setRadio('ccCorner', 'auto'); setRadio('ccLasso', 'lasso'); setRadio('ccTabs', 'full'); setRadio('ccSelTotals', 'on'); setRadio('ccTrimDrag', 'path'); setRadio('ccEmptyClick', 'clear'); setRadio('ccAutocomplete', 'on'); setRadio('ccDetails', 'on'); setRadio('ccFileKeys', 'on'); Doc.fileKeys = true; setRadio('ccToolbarRows', 'auto'); applyToolbarRows(); setRadio('ccToolbarDock', 'top'); applyToolbarDock(); applyCorner(); renderTabs(); renderSelTotals(); });
  }

  // The clipboard: this tab's copy + localStorage, so another tab can paste (storage may be off: memory only).
  let clipStore = null;
  try { clipStore = window.localStorage; } catch { clipStore = null; }
  const clipboard = new Clipboard(clipStore);

  // ---- host for the command engine ----
  const commandHooks = new Set();
  const selListeners = new Set();   // listeners of the selection (host.onSelectionChange; the shell's design reasons, shell-mount.js)
  const host = {
    cursor: null, selection: new Set(), shift: false,
    clipboard, settings,
    print, prompt: setPrompt,
    onSelectionChange(fn) { selListeners.add(fn); return () => selListeners.delete(fn); },   // the shell's design reasons (shell-mount.js)
    setSelection(set) { accessUi?.onSelection(set); host.selection = new Set(set); if (set.windows?.length) host.selection.windows = set.windows; view.state.selection = host.selection; refreshGrips(); scheduleProps(); offerDetails(); view.invalidate(); layersForViewport(); for (const f of selListeners) f(); },
    pickAt: (p) => cycledAt(p) ?? view.pick(p),   // Tab cycling (cycleTab) wins while the pointer stays put
    pickWindow: (w, crossing) => view.pickWindow(w, crossing),
    pickLasso: (pts, mode) => lassoHits(doc.all().filter((e) => doc.editable(e)), pts, mode, doc.blocks, (e) => view.boundsOf(e)),
    setLasso(on) { setRadio('ccLasso', on ? 'lasso' : 'box'); status(t(on ? 'status.lasso.on' : 'status.lasso.off')); },   // LASSOMODE
    editText: (e) => editText(e),   // MTEXT / TEXTEDIT: the in-place editor
    quickSelect: (o) => quickSelectDialog(o),   // QSELECT
    findDialog: (o) => findDialog(o),   // FIND
    onBlockEdit: (be) => showBlockEdit(be),   // BEDIT / BCLOSE: the banner
    pickRadius: () => view.cursorSpec().pick / (view.zoom || 1),   // the pick tolerance in drawing units (BVSHOW, DB.9)
    cancelEdit: () => { if (!cancelEdit) return false; cancelEdit(); return true; },
    boundsOf: (e) => view.boundsOf(e),
    preview(ents) { view.state.preview = ents || []; view.invalidate(); },
    saveSettings: () => persist(),
    setToggle(name, on) { if (name in toggles && !!settings[name] !== !!on) toggle(name); },   // LWDISPLAY
    setCursorSize: (size) => setCursor(size),   // CURSORSIZE (0.8 D8.14)
    addCommandHook: (fn) => commandHooks.add(fn),   // the first-drawing tour hears commands end (tour.js, 0.7 D7.06)
    onCommand(name) {
      for (const f of commandHooks) { try { f(name); } catch { /* a hook's mistake never stops a command */ } }
      if (name && !['UNDO', 'U', 'REDO', 'MREDO'].includes(name)) commitViewport();   // VP.4: the viewport's new view is its own undo step
      if (!name) { acquired.length = 0; view.state.track = null; }   // tracking points last one command
      for (const b of root.querySelectorAll('[data-cmd]:not([role="menuitem"])')) b.setAttribute('aria-pressed', String(!!name && lookup(b.dataset.cmd.split(' ')[0])?.name === name));
      if (name) hideHint();
      updateCursorMode();
      scheduleProps();
    },
    zoomExtents: () => { rememberView(); view.fit(); },
    zoomAll: () => { rememberView(); view.fit(view.extentsAndLimits()); },   // 0.8 D8.2: the limits and the drawing
    regen: (all) => view.regen(all),   // REGEN, REGENALL (0.7)
    // point clouds (cloud-cad.js, 0.5 SG.1): one per window, under whichever drawing shows
    pickCloud: () => new Promise((resolve) => { const i = el('input', { type: 'file', accept: CLOUD_ACCEPT }); i.addEventListener('change', () => resolve(i.files[0] || null)); i.addEventListener('cancel', () => resolve(null)); i.click(); }),
    zoomCloud: () => { const b = host.cloud.bbox(); if (b) { rememberView(); view.fitPoints([{ x: b.minX, y: b.minY }, { x: b.maxX, y: b.maxY }]); } },
    // REGISTERSCANS (0.7 LC.3, cloud-cad.js): the dialog of register-ui.js, loaded on first use; "Show registered cloud" attaches the registered LAS
    registerScans: async () => { if (!host.registerUi) { const { installRegister } = await import('./register-ui.js'); host.registerUi = installRegister({ root, openRegistered: (file) => openLocal(file) }); } host.registerUi.open(); },
    status: (msg) => busy(msg),
    zoomWindow: (a, b, o = {}) => { rememberView(); view.fitPoints([a, b], o.exact ? 1 : 0.9); },   // in a turned view: the window as it lies on screen
    zoomPrevious: () => zoomPrevious(),
    zoomBy: (f) => { rememberView(); view.zoomAt(view.w / 2, view.h / 2, f); },
    viewRect: () => view.viewRect(),
    showLayers: () => { ui.layers.closest('section').scrollIntoView({ block: 'nearest' }); ui.layers.querySelector('button')?.focus(); },
    newDrawing, openFile: () => openPicked(), saveFile, saveAs,
    writeDrawing: (d, o) => writeDrawing(d, o),   // WBLOCK (0.7 D7.13): another drawing, written as a file
    plot: (c) => plotDialog(c),
    // INSERT, option File: another drawing, read here; then the whole drawing or one of its blocks
    pickDrawing: () => pickDrawing(),
    // pictures (pictures-cmd.js): PNG / JPEG files → [{ name, bytes }]; redraw once their files are given
    pickPictures: ({ multiple = false } = {}) => pickPictures(multiple),
    // a text file (ASBUILT's point file, 0.6 LC.22) → { name, text } | null
    pickText: ({ accept = '.csv,.txt' } = {}) => new Promise((resolve) => { const i = el('input', { type: 'file', accept }); i.addEventListener('change', async () => { const f = i.files[0]; resolve(f ? { name: f.name, text: await f.text() } : null); }); i.addEventListener('cancel', () => resolve(null)); i.click(); }),
    redraw: () => view.invalidate(true),
    chooseBlock: (fileName, names) => chooseBlock(fileName, names),
    choose: (o) => ask(o),
    // INSERT, option Library; LIBRARY; the Blocks panel's "Library…"
    // (the self-hosted browser edition has no getcadcraft.com API: the commands say so, no network call)
    library: () => { if (libraryOn) return lib.pick(); print(t('lib.edition.off')); return Promise.resolve(null); },
    libraryPlaced: (item) => lib.placed(item),
    openLibrary: (o) => { if (libraryOn) lib.open(o); else print(t('lib.edition.off')); },
    /** The model area on screen (for plotting "what is on screen"), when the model is open. */
    viewExtents: () => (doc.inModel ? { minX: view.toWorld(0, view.h).x, minY: view.toWorld(0, view.h).y, maxX: view.toWorld(view.w, 0).x, maxY: view.toWorld(view.w, 0).y } : null),
    // the 3D tab (ws3d.js, loaded the first time it opens; commands3d.js): the workspace while it shows, opening it, downloads
    ws3d: null,
    open3d: () => open3d(),
    saveBlob: (name, data, mime) => downloadBlob(name, data, mime),
    plotPrefs: () => ({ ink: plotPrefs.ink || 'mono', style: plotPrefs.style || '', pen: +(plotPrefs.pen || 0.25) }),   // PUBLISH plots as the Plot dialog last did (a sheet's own table first)
    render3dTabs: () => renderTabs(),
  };
  host.cloud = new CloudAttach({ doc: () => doc, redraw: () => view.invalidate(true), on3d: () => host.ws3d?.cloudChanged?.() });
  // under the drawing: map layers (maps-cad.js), then a point cloud
  const maps = installMaps({ root, attrib: root.querySelector('.cc-canvases'), view, doc, say: print, busy, ask, refocus: () => focusCommandLine() });
  host.maps = maps;
  view.underlay = (ctx, T, v) => { maps.paint(ctx, T, v); host.cloud.draw(ctx, T, v); };
  const pdfUi = installPdfUnder({ root, view, doc });   // PDF pages under the drawing (0.7 D7.24: pdfunder-ui.js)
  installScanUi({ root, view, doc, host });   // scanned drawings: file chooser, PDF pages as pictures, snap to raster lines (0.7 LC.6: scan-ui.js)
  let nextPdf = null;   // a PDF chosen in Open: the next PDFATTACH / PDFIMPORT takes it instead of asking for a file
  host.pickPdfs = ({ multiple = false } = {}) => { if (nextPdf) { const f = nextPdf; nextPdf = null; return Promise.resolve([f]); } return pdfUi.pick(multiple); };
  view.underlayKey = () => host.cloud.version + '|' + maps.key();
  view.snapExtra = (p, r) => host.cloud.snap(p, r);
  const engine = new Engine(doc, host);
  mountUndoHook({ doc, engine, host });   // 0.8 EG.77: tells the window (Studio's project-level undo) each finished step
  shxUseDoc(doc);
  SHX_LIB.onChange(() => { view.regen(true); view.invalidate(true); });   // a font was loaded or removed: text is measured and drawn again
  shxKeepFonts().then(() => shxRescan()).catch(() => {});
  // the shell's ⚠ Problems (manifest "problems"; mount from docs/0.8-sessions/problems-08-mounts.md § cad-08): the file's findings as one source
  if (document.getElementById('cc-problems')) {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      const src = P.source({ id: 'cadcraft.file', kind: 'check', label: t('problems.src.file'), debounceMs: 600,
        run: () => cadProblems({ doc, report: lastReport }, { t, shx: SHX_LIB }),
        fix: (p, f) => { if (f.action !== 'erase') return false; const ids = auditIds(doc, f.args?.what); if (!ids.length) return false; doc.change(t('problems.cad.fix.erase'), () => { for (const id of ids) doc.remove(id); }); return true; } });
      doc.on((kind) => { if (kind !== 'view') src.invalidate(); });
      SHX_LIB.onChange(() => src.invalidate());   // a font was loaded or removed: the substituted-font notes change
      P.adapter({ t, file: () => doc.meta.name || '', select: (p) => { const ids = (p.about || []).filter((a) => a.kind === 'entity').map((a) => a.id); if (ids.length) host.setSelection(new Set(ids)); } });
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }
  window.cadcraft = { doc, view, engine, host, commands: commandRegistry, control: getHost({ app: 'cadcraft' }).control };   // commands: Studio Live's LIVELOCK (live.js)

  // ---- history and prompt ----
  let accessUi = null;   // drafting without sight (access-ui.js), once mounted below
  function print(s) {
    for (const line of String(s).split('\n')) {
      ui.history.append(el('li', { className: line.startsWith(t('cmd.echo', { name: '' })) ? 'is-cmd' : '' }, line));
      accessUi?.onPrint(line);
    }
    while (ui.history.children.length > 400) ui.history.firstChild.remove();
    ui.history.scrollTop = ui.history.scrollHeight;
  }
  function setPrompt(s) {
    ui.prompt.textContent = s || t('app.prompt');
    if (s) accessUi?.onPrompt(s);
    ui.input.placeholder = engine.expects === 'string' && !engine.waiting?.opts?.raw ? t('app.type_text_enter_next') : '';
    dyn.reset(settings.dyn && engine.expects === 'point' && !engine.waiting?.opts?.accept ? (engine.base ? 'polar' : 'xy') : null);
    updateCursorMode();
    renderDyn();
  }

  // ---- dynamic input (F12; dynin.js): the values by the crosshair; typing still goes to the command line ----
  const dyn = new DynInput();
  const parseL = (x) => parseLength(x, doc.layout ? 2 : doc.meta.lunits, doc.layout ? '' : doc.meta.units) ?? NaN;   // arithmetic too (0.6 DF.3)
  const isLen = (x) => Number.isFinite(parseL(x));
  dyn.parseAngle = (x) => { const r = readAngle(x); return r.ok ? r.value : NaN; };
  const dynBox = el('div', { className: 'cc-dyn', hidden: true, 'aria-hidden': 'true' });
  ui.stage.append(dynBox);
  /** The pointer with the locked fields applied. */
  const dynPoint = (p) => { dyn.ucs = activeUcs(doc); return dyn.on ? dyn.apply(p, engine.base, parseL, ui.input.value) : p; };
  function renderDyn() {
    const w = engine.waiting, cur = host.cursor;
    const show = settings.dyn && w && cur && view.state.cursor && ['point', 'distance', 'angle'].includes(w.kind);
    dynBox.hidden = !show;
    if (!show) return;
    const typedNow = ui.input.value.trim();
    const field = (i, v, isAngle) => {
      const locked = dyn.locked[i] !== null, active = dyn.on && dyn.active === i;
      const text = active && typedNow ? typedNow : locked ? dyn.locked[i] : v === null ? '' : typeof v === 'number' ? (isAngle ? fmtAngle(doc.meta, v) : fmtL(v)) : v;
      return el('span', { className: 'cc-dyn-f' + (active ? ' is-active' : '') + (locked ? ' is-locked' : '') }, text);
    };
    const parts = [el('span', { className: 'cc-dyn-p' }, w.prompt)];
    if (dyn.on) {
      dyn.ucs = activeUcs(doc);
      const [a, b] = dyn.live(cur, engine.base);
      parts.push(field(0, a, false), field(1, b, dyn.mode === 'polar'));
    } else if (w.kind === 'distance' && w.opts.base) parts.push(el('span', { className: 'cc-dyn-f is-active' }, typedNow || fmtL(Math.hypot(cur.x - w.opts.base.x, cur.y - w.opts.base.y))));
    else if (w.kind === 'angle' && w.opts.base) parts.push(el('span', { className: 'cc-dyn-f is-active' }, typedNow || fmtAngle(doc.meta, deg(normAngle(Math.atan2(cur.y - w.opts.base.y, cur.x - w.opts.base.x)))) ));
    dynBox.replaceChildren(...parts);
    const s0 = view.toScreen(view.state.cursor.x, view.state.cursor.y), cv = ui.base.parentElement, s = { x: s0.x + view.x0 + cv.offsetLeft, y: s0.y + view.y0 + cv.offsetTop };   // split screen: from the pane to the stage (the drawing may sit inset: document tabs, a workspace layout's blocks)
    const bw = dynBox.offsetWidth || 160, bh = dynBox.offsetHeight || 24, sw = ui.stage.clientWidth, sh = ui.stage.clientHeight;
    dynBox.style.left = Math.max(4, Math.min(sw - bw - 4, s.x + 18)) + 'px';
    dynBox.style.top = Math.max(4, Math.min(sh - bh - 4, s.y + 18)) + 'px';
  }

  // ---- command line ----
  const typed = [];
  let typedAt = -1;
  ui.form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
  ui.input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey && !ui.input.value && acceptGhost()) { e.preventDefault(); return; }   // EG.54: Tab takes the ghost
    // dynamic input: Tab (or a comma after X) locks the field and moves to the next
    if (dyn.on && (e.key === 'Tab' || (e.key === ',' && dyn.mode === 'xy' && dyn.active === 0 && isLen(ui.input.value.trim())))) {
      e.preventDefault();
      if (dyn.tab(ui.input.value, isLen)) { ui.input.value = ''; suggest(); refreshCursor(); }
      return;
    }
    if (e.key === ' ' && engine.expects !== 'string' && !host.lispTyping?.(ui.input.value)) { e.preventDefault(); submit(); return; }   // inside "(…" a space is a space (appload.js)
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (!typed.length) return;
      e.preventDefault();
      typedAt = e.key === 'ArrowUp' ? Math.max(0, (typedAt < 0 ? typed.length : typedAt) - 1) : Math.min(typed.length, typedAt + 1);
      ui.input.value = typed[typedAt] ?? '';
      suggest();
      return;
    }
    if (e.key === 'Tab' && !e.shiftKey && !ui.input.value && acceptGhost()) { e.preventDefault(); return; }
    if (e.key === 'Tab' && ui.suggest.dataset.cmd) { e.preventDefault(); ui.input.value = ui.suggest.dataset.cmd; suggest(); return; }
    if (e.key === 'Tab' && !e.shiftKey && !ui.input.value && cycleTab()) e.preventDefault();
  });
  ui.input.addEventListener('input', () => { suggest(); if (dyn.on) refreshCursor(); else renderDyn(); });

  function submit() {
    if (dyn.on) { dyn.ucs = activeUcs(doc); const s = dyn.commit(ui.input.value, host.cursor, engine.base, { last: engine.lastPoint, parseLen: parseL }); if (s) ui.input.value = s; }
    const v = ui.input.value;
    ui.input.value = '';
    suggest();
    if (v.trim()) { typed.push(v); if (typed.length > 100) typed.shift(); }
    typedAt = -1;
    if (engine.waiting) print(engine.promptText() + ' ' + v);
    if (host.lispLine?.(v)) return;   // "(…" and "!symbol": LISP (appload.js)
    engine.text(v);
  }

  function suggest() {
    const typed = ui.input.value.trim().toUpperCase();
    ui.suggest.textContent = '';
    delete ui.suggest.dataset.cmd;
    if (!typed || engine.waiting) return;
    const exact = lookup(typed);
    const list = commandList();
    const hits = exact ? [list.find((c) => c.name === exact.name)] : list.filter((c) => c.name.startsWith(typed) || c.aliases.some((a) => a.startsWith(typed))).slice(0, 4);
    if (!hits.length || !hits[0]) { ui.suggest.textContent = t('app.no_such_command'); return; }
    ui.suggest.dataset.cmd = hits[0].name;
    ui.suggest.textContent = hits.map((c) => c.name + (c.aliases.length ? ' (' + c.aliases[0] + ')' : '')).join('   ') + (exact ? ' — ' + hits[0].help : '');
  }

  // ---- toolbar ----
  for (const b of root.querySelectorAll('[data-cmd]')) {
    b.addEventListener('click', async () => {
      const [cmd] = b.dataset.cmd.split(' ');
      closeMenus();
      ui.input.focus({ preventScroll: true });
      await engine.run(cmd);
    });
    // a command with options (ZOOM E, UCS Z -90): feed them one by one, each once its prompt is up
    if (b.dataset.cmd.includes(' ')) b.addEventListener('click', () => {
      const rest = b.dataset.cmd.split(' ').slice(1);
      const feed = () => { if (!rest.length || !engine.waiting) return; engine.text(rest.shift()); setTimeout(feed, 0); };
      setTimeout(feed, 0);
    });
  }

  // toolbar menus (Edit › More): one open at a time, closed by a click elsewhere or Esc
  function closeMenus(except = null) { for (const d of root.querySelectorAll('details.cc-menu[open]')) if (d !== except) d.open = false; }
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.cc-menu[open]')) if (!d.contains(e.target)) d.open = false; });
  for (const d of root.querySelectorAll('details.cc-menu')) {
    d.addEventListener('toggle', () => { if (d.open) closeMenus(d); });
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && d.open) { e.preventDefault(); e.stopPropagation(); d.open = false; d.querySelector('summary').focus(); return; }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && d.open) {
        const items = [...d.querySelectorAll('[role="menuitem"]')];
        const i = items.indexOf(document.activeElement);
        e.preventDefault();
        const down = e.key === 'ArrowDown', n = items.length;
        items[i < 0 ? (down ? 0 : n - 1) : (i + (down ? 1 : n - 1)) % n]?.focus();
      }
    });
  }

  // ---- toggles ----
  const toggles = {};
  for (const b of root.querySelectorAll('[data-toggle]')) {
    toggles[b.dataset.toggle] = b;
    b.setAttribute('aria-pressed', String(settings[b.dataset.toggle]));
    b.addEventListener('click', () => toggle(b.dataset.toggle));
  }
  function toggle(name) {
    settings[name] = !settings[name];
    // as in AutoCAD, Ortho and polar tracking exclude each other
    const other = settings[name] && { ortho: 'polar', polar: 'ortho' }[name];
    if (other && settings[other]) { settings[other] = false; toggles[other]?.setAttribute('aria-pressed', 'false'); }
    if (name === 'otrack' && !settings.otrack) { acquired.length = 0; view.state.track = null; }
    toggles[name].setAttribute('aria-pressed', String(settings[name]));
    if (name === 'grid') { view.grid = settings.grid; view.invalidate(true); }
    if (name === 'lwt') { view.lwDisplay = settings.lwt; view.invalidate(true); status(t(settings.lwt ? 'status.lwt.on' : 'status.lwt.off')); }
    else if (name === 'dyn') { dyn.reset(settings.dyn && engine.expects === 'point' ? (engine.base ? 'polar' : 'xy') : null); renderDyn(); status(t(settings.dyn ? 'status.dyn.on' : 'status.dyn.off')); }
    else if (name === 'polar' || name === 'otrack') status(t(name === 'polar' ? (settings.polar ? 'status.polar.on' : 'status.polar.off') : (settings.otrack ? 'status.otrack.on' : 'status.otrack.off'), { inc: fmt(settings.polarInc) }));
    else status(({ grid: 'Grid', ortho: 'Ortho', osnap: t('app.object_snap') })[name] + (settings[name] ? ' on' : ' off'));
    persist();
    refreshCursor();
  }
  for (const k of SNAP_KINDS) {
    const box = el('input', { type: 'checkbox', checked: settings.kinds.has(k) });
    box.addEventListener('change', () => { if (box.checked) settings.kinds.add(k); else settings.kinds.delete(k); persist(); });
    ui.snapKinds.append(el('label', {}, box, SNAP_LABELS[k]));
  }

  let statusTimer = 0;
  function status(s) { ui.status.textContent = s; clearTimeout(statusTimer); statusTimer = setTimeout(() => { ui.status.textContent = ''; }, 4000); }

  // ---- zoom previous: up to 10 views per tab; a run of wheel steps or one pan counts once ----
  const viewHist = new Map();
  let lastRemember = 0, lastKind = '';
  const spaceKey = () => (doc.layout ? 'L:' + doc.layout.name : 'model');
  function rememberView(kind = 'step') {
    const now = performance.now();
    if (kind !== 'step' && kind === lastKind && now - lastRemember < 800) { lastRemember = now; return; }
    lastRemember = now; lastKind = kind;
    let a = viewHist.get(spaceKey());
    if (!a) viewHist.set(spaceKey(), (a = []));
    const v = view.snapshot(), top = a[a.length - 1];
    if (top && top.cx === v.cx && top.cy === v.cy && top.zoom === v.zoom) return;
    a.push(v);
    if (a.length > 10) a.shift();
  }
  function zoomPrevious() {
    const v = viewHist.get(spaceKey())?.pop();
    if (!v) return false;
    lastKind = '';
    view.restore(v);
    return true;
  }

  // ---- pointer ----
  let down = null;         // { x, y, button, world }
  let panning = null;      // { x, y }
  let pendingBox = null;   // first corner of a click-click window (world)
  let gripEdit = null;     // { id, key, from }
  let vpCtxKey = '';       // what the Layers panel's freeze-in-viewport column last showed (VP.2)
  let lastRaw = null;
  let cycle = null;        // Tab cycling: { at (world), ids, i } (cycleTab)
  let drag = null;         // press and drag: { kind 'lasso' | 'path' (TRIM / EXTEND), start (screen), pts (world), mode } (lasso.js)

  function startDrag(kind, p) {
    if (kind === 'path' && settings.trimDrag === 'window') kind = 'trimbox';   // TRIM / EXTEND by a dragged window (0.6 DF.13)
    drag = { kind, start: { x: down.x, y: down.y }, pts: [down.world, view.toWorld(p.x, p.y)], mode: kind === 'path' ? 'fence' : kind === 'trimbox' ? 'crossing' : lassoMode(down, p) };
    if (kind === 'path') engine.dragPath = drag.pts;   // TRIM / EXTEND preview what the path crosses so far
    if (kind === 'trimbox') { dragMove(p); return; }
    view.state.lasso = { pts: drag.pts, mode: drag.mode || 'window' };
    view.invalidate();
  }
  function dragMove(p) {
    if (drag.kind === 'trimbox') {   // a rectangle from the press to the pointer, drawn as a crossing lasso
      const a = drag.pts[0], b = view.toWorld(p.x, p.y);
      drag.pts = [a, { x: b.x, y: a.y }, b, { x: a.x, y: b.y }, b];
      view.state.lasso = { pts: [a, { x: b.x, y: a.y }, b, { x: a.x, y: b.y }], mode: 'crossing' };
      view.invalidate();
      return;
    }
    const last = drag.pts[drag.pts.length - 1], ls = view.toScreen(last.x, last.y);
    if (Math.hypot(ls.x - p.x, ls.y - p.y) >= 3) drag.pts.push(view.toWorld(p.x, p.y));
    if (!drag.mode) drag.mode = lassoMode(drag.start, p);   // the first sideways move decides: right = window, left = crossing
    view.state.lasso = { pts: drag.pts, mode: drag.mode || 'window' };
    view.invalidate();
  }
  function cancelDrag() { drag = null; engine.dragPath = null; view.state.lasso = null; view.invalidate(); }
  function finishDrag() {
    const d = drag;
    cancelDrag();
    const pts = thin(d.pts, 2 / view.zoom);
    if (d.kind === 'path') { engine.path(pts); return; }
    if (d.kind === 'trimbox') { const a = d.pts[0], b = d.pts[d.pts.length - 1]; engine.trimWindow({ minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) }); return; }
    const mode = d.mode || 'window';
    if (pts.length < (mode === 'fence' ? 2 : 3)) return;
    if (engine.expects === 'select') engine.lasso(pts, mode);
    else if (!engine.busy) {
      const replace = settings.pick === 'replace';
      const s = selectionBase();
      for (const id of host.pickLasso(pts, mode)) { if (host.shift && !replace) s.delete(id); else s.add(id); }
      if (mode !== 'fence' && (!host.shift || replace)) (s.windows ||= []).push({ poly: pts.map((p) => ({ x: p.x, y: p.y })) });
      host.setSelection(s);
    }
  }
  // while dragging a lasso, Space cycles window → crossing → fence and Esc drops it (before the command line sees the key);
  // Shift switches TRIM ↔ EXTEND, so the preview follows it at once
  document.addEventListener('keydown', (e) => {
    if (drag && drag.kind === 'lasso' && e.key === ' ') { e.preventDefault(); e.stopPropagation(); drag.mode = nextMode(drag.mode || 'window'); view.state.lasso = { pts: drag.pts, mode: drag.mode }; view.invalidate(); return; }
    if (drag && e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); down = null; cancelDrag(); return; }
    if (e.key === 'Shift' && !host.shift && engine.waiting?.opts.path) { host.shift = true; if (lastRaw) moveCursor(lastRaw); }
  }, true);
  document.addEventListener('keyup', (e) => { if (e.key === 'Shift' && host.shift && engine.waiting?.opts.path) { host.shift = false; if (lastRaw) moveCursor(lastRaw); } }, true);

  // ---- touch (S.8): a second finger cancels what the first began and the two pinch-zoom and pan; a long press is a
  // right click (Enter); fingers get bigger grips and pick boxes and the key row under the command line ----
  const touchPts = new Map();   // pointerId → point over the canvases
  let pinch = null, longPress = 0;
  function useTouch() {
    if (view.coarse) return;
    view.coarse = true;
    root.classList.add('is-touch');
    keyRow.hidden = false;
    view.invalidate();
  }
  function touchDown(e) {
    useTouch();
    touchPts.set(e.pointerId, stagePos(e));
    clearTimeout(longPress);
    if (touchPts.size === 2) {
      if (drag) cancelDrag();
      down = null; panning = null;
      if (gripEdit) cancelLocal();
      const [a, b] = [...touchPts.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), c: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } };
      rememberView('pan');
      return true;
    }
    if (touchPts.size > 2) return true;
    longPress = setTimeout(() => { if (down && !down.moved && !drag) { down = null; navigator.vibrate?.(15); rightClick(); } }, 550);
    return false;
  }
  function touchMove(e) {
    if (!touchPts.has(e.pointerId)) return false;
    touchPts.set(e.pointerId, stagePos(e));
    if (!pinch) return touchPts.size > 2;
    const [a, b] = [...touchPts.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y), c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    view.panBy(c.x - pinch.c.x, c.y - pinch.c.y);
    if (d > 10 && pinch.d > 10) view.zoomAt(c.x - view.x0, c.y - view.y0, d / pinch.d);
    pinch = { d, c };
    return true;
  }
  function touchUp(e) {
    touchPts.delete(e.pointerId);
    clearTimeout(longPress);
    if (!pinch) return false;
    if (!touchPts.size) pinch = null;
    down = null;
    return true;
  }
  ui.over.addEventListener('pointercancel', (e) => {
    touchPts.delete(e.pointerId); clearTimeout(longPress);
    pinch = null; down = null; panning = null;
    if (drag) cancelDrag();
  });
  if (window.matchMedia?.('(pointer: coarse)').matches) queueMicrotask(useTouch);   // i18n-ignore (a media query)

  // the key row (touch): keys a phone or tablet keyboard hides, and Enter / Esc / Undo without it
  const keyRow = (() => {
    const key = (label, title, fn, cls = '') => {
      const b = el('button', { type: 'button', className: 'cc-key' + cls, title, 'aria-label': title }, label);
      b.addEventListener('pointerdown', (e) => e.preventDefault());   // keep the focus (and the on-screen keyboard) where it is
      b.addEventListener('click', fn);
      return b;
    };
    const put = (ch) => () => { ui.input.value += ch; suggest(); if (dyn.on) refreshCursor(); };
    const row = el('div', { className: 'cc-keyrow', role: 'toolbar', 'aria-label': t('keyrow.label'), hidden: true },
      key(t('keyrow.esc'), t('keyrow.esc.title'), () => escapeKey()),
      key(el('i', { className: 'bi bi-arrow-counterclockwise', 'aria-hidden': 'true' }), t('keyrow.undo'), () => { if (engine.busy) engine.text('U'); else engine.run('UNDO'); }),
      key(el('i', { className: 'bi bi-arrow-clockwise', 'aria-hidden': 'true' }), t('keyrow.redo'), () => { if (!engine.busy) engine.run('REDO'); }),
      ...['@', ',', '<', "'", '"', '-'].map((ch) => key(ch, t('keyrow.char', { ch }), put(ch), ' is-char')),
      key(t('keyrow.snap'), t('keyrow.snap.title'), () => toggle('osnap')),
      key(t('keyrow.ortho'), t('keyrow.ortho.title'), () => toggle('ortho')),
      key(el('i', { className: 'bi bi-keyboard', 'aria-hidden': 'true' }), t('keyrow.keyboard'), () => ui.input.focus()),
      key(t('keyrow.enter'), t('keyrow.enter.title'), () => submit(), ' is-enter'),
    );
    ui.form.after(row);
    return row;
  })();

  // ---- short windows (0.5 VP.5): the toolbar never takes the drawing's place. A laptop at 125–175 % (1366 × 768 at
  // 150 % is 911 × 512 CSS px) wrapped the toolbar into four or five rows, the drawing got no height, and the Model /
  // sheet tabs ended up under the toolbar where no click reached them. When the drawing is shorter than 10rem or 30 %
  // of the app, the toolbar first drops its words and group names (tooltips and screen readers keep them) and the
  // history shows two lines, then it becomes one row that scrolls sideways, as on a phone. The staff tab is lifted
  // clear of the sheet tabs (--cc-sp-bottom). Runs on the next frame after any size change (never inside the
  // ResizeObserver callback). ----
  const FIT = ['cc-fit-compact', 'cc-fit-row', 'cc-fit-tight'];   // tight (0.5 VP.5): short windows with a bottom-docked panel and the touch key row
  let fitFrame = 0;
  function fitBars() {
    fitFrame = 0;
    const narrow = window.matchMedia('(max-width: 760px)').matches;   // i18n-ignore (a media query; the phone layout scrolls)
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const enough = () => ui.stage.clientHeight >= Math.max(10 * rem, root.clientHeight * 0.3);
    root.classList.remove(...FIT);
    if (!narrow) for (const c of FIT) { if (enough()) break; root.classList.add(c); }
    // a short phone held upright (an iPhone SE, 375 × 667): the key row joins the status row, one line that scrolls
    // sideways, so the drawing keeps two thirds of the screen (0.6, platforms' IPH.2 note); moved back when it grows
    const shortPhone = document.documentElement.classList.contains('cc-phone') && window.innerHeight <= 700 && window.innerHeight > window.innerWidth;
    const footer = root.querySelector('.cc-status');
    if (shortPhone && footer && keyRow.parentElement !== footer) { footer.prepend(keyRow); root.classList.add('cc-keys-in-status'); }
    else if (!shortPhone && keyRow.parentElement !== ui.form.parentElement) { ui.form.after(keyRow); root.classList.remove('cc-keys-in-status'); }
    const r = ui.stage.getBoundingClientRect(), tabsH = root.querySelector('.cc-tabs')?.offsetHeight || 0;
    document.body.style.setProperty('--cc-sp-bottom', Math.max(8, Math.round(window.innerHeight - r.bottom + tabsH + 8)) + 'px');
  }
  const fitSoon = () => { if (!fitFrame) fitFrame = requestAnimationFrame(fitBars); };
  if (typeof ResizeObserver === 'function') { const ro = new ResizeObserver(fitSoon); ro.observe(root); ro.observe(ui.stage); }
  window.addEventListener('resize', fitSoon);
  fitSoon();

  // pointer positions are local to the active pane (view.js coordinates); stagePos is over all the canvases (split screen)
  const stagePos = (e) => { const r = ui.over.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const pos = (e) => { const s = stagePos(e); return { x: s.x - view.x0, y: s.y - view.y0 }; };
  /** The pane under a pointer event becomes the active one (split screen); → true when it changed. */
  function paneFromEvent(e) {
    if (!view.panes) return false;
    const sp = stagePos(e), i = view.paneAt(sp.x, sp.y);
    return i >= 0 && switchPane(i);
  }

  ui.over.addEventListener('contextmenu', (e) => e.preventDefault());
  ui.over.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' && touchDown(e)) return;   // a second finger: pinch and pan (S.8)
    try { ui.over.setPointerCapture(e.pointerId); } catch { /* a synthetic or already-lifted pointer: nothing to capture */ }
    if (paneFromEvent(e) && e.button === 0) { down = null; return; }   // the first click into another pane only makes it active (as AutoCAD)
    const p = pos(e);
    host.shift = e.shiftKey;
    if (e.button === 1) { e.preventDefault(); if (!panButton(1)) { down = null; return; } rememberView('pan'); panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: unless the style took middle-pan away
    if (view.entered && e.button === 0 && !view.insideEntered(p.x, p.y)) { down = null; return; }   // outside the entered viewport: only a double-click (leave) acts
    down = { ...p, button: e.button, world: view.toWorld(p.x, p.y), moved: false };
  });
  ui.over.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' && touchMove(e)) return;
    const p = pos(e);
    host.shift = e.shiftKey;
    if (view.panes) { const sp = stagePos(e), hp = view.paneAt(sp.x, sp.y); if (hp !== view.hoverPane) { view.hoverPane = hp; view.invalidate(); } }
    if (panning) { view.panBy(p.x - panning.x, p.y - panning.y); panning = p; }
    else if (drag) dragMove(p);
    else if (down && !down.moved && Math.hypot(p.x - down.x, p.y - down.y) > (e.pointerType === 'touch' ? 10 : 4)) {   // a finger wobbles more
      down.moved = true;
      clearTimeout(longPress);
      if (down.button === 2) { if (panButton(2)) { rememberView('pan'); panning = p; ui.over.classList.add('is-panning'); } }   // IP.3: right-drag pans only where the style says so
      else if (down.button === 0 && engine.expects === 'entity' && engine.waiting?.opts.path && !gripEdit) startDrag('path', p);   // TRIM / EXTEND: a freehand path
      else if (down.button === 0 && canSelectNow() && !gripEdit && !pendingBox) {
        const g = gripAt(down);
        if (g && g.shape) { down = null; onDynGrip(g); }   // a dynamic block's grip: no drag of its own yet (DB.5)
        else if (g) gripEdit = { id: g.id, key: g.key, from: { x: g.x, y: g.y } };
        else if (settings.lasso !== 'box') startDrag('lasso', p);
        else view.state.box = { a: down.world, b: down.world };
      }
    }
    lastRaw = view.toWorld(p.x, p.y);
    moveCursor(lastRaw);
    accessUi?.onMove(lastRaw);
  });
  ui.over.addEventListener('pointerup', (e) => {
    if (e.pointerType === 'touch' && touchUp(e)) return;
    const p = pos(e);
    if (panning) { panning = null; ui.over.classList.remove('is-panning'); down = null; return; }
    if (drag) { down = null; finishDrag(); return; }
    if (!down) return;
    const d = down; down = null;
    const raw = view.toWorld(p.x, p.y);
    if (d.button === 2) { if (!d.moved) rightClick(); return; }
    if (d.button !== 0) return;
    if (view.state.box) { finishBox(view.state.box.a, raw); return; }
    if (gripEdit && d.moved) { commitGrip(pointFor(raw)); return; }
    click(raw);
    cycle = null;
  });
  ui.over.addEventListener('pointerleave', () => { view.hoverPane = -1; view.state.cursor = null; view.state.snap = null; renderDyn(); view.invalidate(); });
  const padDetector = new PadDetector();
  ui.over.addEventListener('wheel', (e) => {
    e.preventDefault();
    paneFromEvent(e);   // split screen: the wheel zooms the pane under the pointer
    const p = pos(e);
    if (padDetector.isSwipe(e)) {   // D7.56: a trackpad's two-finger swipe pans (the content follows the fingers); a pinch and a mouse wheel zoom
      rememberView('pan');
      view.panBy(-e.deltaX, -e.deltaY);
      if (lastRaw) moveCursor(view.toWorld(p.x, p.y));
      return;
    }
    const step = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    rememberView('wheel');
    view.zoomAt(p.x, p.y, Math.pow(1.0018, -step * (e.ctrlKey ? 1 : wheelFactor())));   // IP.3: the style's wheel (a pinch stays as it is)
    if (lastRaw) moveCursor(view.toWorld(p.x, p.y));
  }, { passive: false });
  ui.over.addEventListener('auxclick', (e) => { if (e.button === 1 && e.detail === 2) { rememberView(); view.fit(); } });
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the same moves as the wheel and the
  // middle drag (rememberView, so Zoom Previous steps back over them), zoom in the pane under (x, y) on a split screen. While
  // the 3D tab shows, the 2D canvases are only visibility-hidden (their box still counts as "under the pointer"), so each
  // move goes on to the 3D tab's own view (ws3d.js ws.devView) with (x, y) moved into its box.
  const dev3d = () => (host.ws3d?.active ? host.ws3d.devView : null);
  const devAt3d = (x, y) => { const a = ui.over.getBoundingClientRect(), b = dev3d().el.getBoundingClientRect(); return [x + a.left - b.left, y + a.top - b.top]; };
  (window.ccViews ||= []).push({
    el: ui.over, kind: '2d',
    pan(dx, dy) { if (dev3d()) return dev3d().pan(dx, dy); rememberView('pan'); view.panBy(dx, dy); },
    zoom(f, x = view.W / 2, y = view.H / 2) {
      if (!(f > 0)) return;
      if (dev3d()) return dev3d().zoom(f, ...devAt3d(x, y));
      if (view.panes) { const i = view.paneAt(x, y); if (i >= 0) switchPane(i); }
      rememberView('wheel');
      view.zoomAt(x - view.x0, y - view.y0, f);
    },
    orbit(dx, dy) { dev3d()?.orbit(dx, dy); },   // the drawing itself is flat: only the 3D tab turns
    fit() { if (dev3d()) return dev3d().fit(); rememberView(); view.fit(); },
  });
  ui.over.addEventListener('dblclick', (e) => {
    if (engine.busy) return;
    const lp = pos(e);
    if (view.entered && !view.insideEntered(lp.x, lp.y)) { leaveViewport(); return; }   // VP.4: double-click outside = back to the sheet
    if (params.dblclick(view.toWorld(pos(e).x, pos(e).y))) return;   // a dimensional constraint's label: its value
    const id = view.pick(view.toWorld(pos(e).x, pos(e).y));
    if (id && ['text', 'mleader'].includes(doc.get(id)?.type)) { host.setSelection(new Set([id])); engine.run('TEXTEDIT'); }   // edit it in place
    else if (id && hasAttributes(doc.get(id), doc.blocks.get(doc.get(id)?.block))) { host.setSelection(new Set([id])); engine.run('EATTEDIT'); }   // its attributes (0.6 DF.5)
    else if (!view.entered && doc.layout && viewportAt(view.toWorld(lp.x, lp.y))) enterViewport(viewportAt(view.toWorld(lp.x, lp.y)));   // VP.4: inside a viewport = edit the model through it
    else if (id) { host.setSelection(new Set([id])); props.open(); }   // any other object: its properties (props.js)
  });

  // ---- the in-place text editor (MTEXT, TEXTEDIT): a textarea over the text, sized like it, and a small bar ----
  let cancelEdit = null;   // closes an open editor without saving (Esc, or another command starting)
  const JUSTS = { TL: ['left', 'top'], TC: ['center', 'top'], TR: ['right', 'top'], ML: ['left', 'middle'], MC: ['center', 'middle'], MR: ['right', 'middle'], BL: ['left', 'bottom'], BC: ['center', 'bottom'], BR: ['right', 'bottom'] };
  function editText(e) {
    return new Promise((resolve) => {
      const st = { h: e.h, ls: e.ls || 1, ww: e.ww > 0 ? e.ww : 0, ha: e.ha || 'left', va: e.va || 'baseline' };
      const lenBox = (id, label, v, title) => { const i = el('input', { type: 'text', className: 'cc-input', id, value: fmtL(v), title: title || '' }); return [el('label', { htmlFor: id }, label), i]; };
      const [hl, hIn] = lenBox('cc-te-h', t('tedit.height'), st.h);
      const sIn = el('input', { type: 'text', inputMode: 'decimal', className: 'cc-input', id: 'cc-te-ls', value: fmt(st.ls) });
      const [wl, wIn] = lenBox('cc-te-w', t('tedit.width'), st.ww, t('tedit.width.title'));
      const jKey = Object.keys(JUSTS).find((k) => JUSTS[k][0] === st.ha && JUSTS[k][1] === st.va);
      const jSel = el('select', { className: 'cc-select', id: 'cc-te-j' }, ...(jKey ? [] : [el('option', { value: '', selected: true }, '—')]),
        ...Object.keys(JUSTS).map((k) => el('option', { value: k, selected: k === jKey }, t('tedit.just.' + k.toLowerCase()))));
      const ok = el('button', { type: 'button', className: 'cc-te-btn is-primary', title: t('tedit.ok.title') }, t('tedit.ok'));
      const no = el('button', { type: 'button', className: 'cc-te-btn', title: t('tedit.cancel.title') }, t('tedit.cancel'));
      const ta = el('textarea', { className: 'cc-te-ta', spellcheck: true, 'aria-label': t('tedit.label'), dataset: { textEdit: '' } });
      ta.value = e.s || '';
      const bar = el('div', { className: 'cc-te-bar' }, hl, hIn, el('label', { htmlFor: 'cc-te-ls' }, t('tedit.spacing')), sIn, wl, wIn, el('label', { htmlFor: 'cc-te-j' }, t('tedit.just')), jSel, ok, no);
      const box = el('div', { className: 'cc-te', role: 'group', 'aria-label': t('tedit.label') }, bar, ta);
      ui.stage.append(box);
      // place it: the text's top-left corner (its own frame, horizontal on screen), at the drawing's size where readable
      const place = () => {
        const z = view.zoom, real = st.h * z * FONT_EM;
        const font = Math.min(160, Math.max(12, real)), k = font / real;
        const lay = textLayout({ ...e, h: st.h, ls: st.ls, ww: st.ww, ha: st.ha, va: st.va, s: ta.value || ' ' });
        const W = st.ww > 0 ? st.ww : Math.max(lay.box.w, st.h * 12);
        const left = st.ha === 'center' ? -W / 2 : st.ha === 'right' ? -W : 0;
        const top = lay.box.y + lay.box.h;
        const p0 = view.toScreen(e.x + Math.cos(e.rot || 0) * left - Math.sin(e.rot || 0) * top, e.y + Math.sin(e.rot || 0) * left + Math.cos(e.rot || 0) * top);
        const p = { x: p0.x + view.x0, y: p0.y + view.y0 };   // split screen: from the pane to the stage
        Object.assign(ta.style, { fontFamily: DRAWING_FONT, fontSize: font.toFixed(2) + 'px', lineHeight: (st.h * LINE_SPACING * st.ls * z * k).toFixed(2) + 'px', width: Math.max(80, W * z * k).toFixed(0) + 'px' });
        const sw = ui.stage.clientWidth, sh = ui.stage.clientHeight;
        box.style.left = Math.max(4, Math.min(sw - 200, p.x)).toFixed(0) + 'px';
        box.style.top = Math.max(4, Math.min(sh - 80, p.y - bar.offsetHeight - 4)).toFixed(0) + 'px';
        ta.style.height = 'auto'; ta.style.height = Math.max(ta.scrollHeight, font * 1.6) + 'px';
      };
      place();
      let done = false;
      const finish = (save) => {
        if (done) return;
        done = true;
        cancelEdit = null;
        box.remove();
        focusCommandLine();
        resolve(save ? { s: ta.value.replace(/\r/g, ''), h: st.h, ls: st.ls, ww: st.ww, ha: st.ha, va: st.va } : null);
      };
      const len = (inp, set) => inp.addEventListener('change', () => { const v = parseLength(inp.value, doc.meta.lunits, doc.meta.units); if (v !== null && v >= 0) { set(v); place(); } inp.value = fmtL(inp === hIn ? st.h : st.ww); });
      len(hIn, (v) => { if (v > 0) st.h = v; });
      len(wIn, (v) => { st.ww = v; });
      sIn.addEventListener('change', () => { const r = readNumber(sIn.value), v = r.ok ? r.value : NaN; if (v >= 0.25 && v <= 4) st.ls = v; sIn.value = fmt(st.ls); place(); });
      jSel.addEventListener('change', () => { if (JUSTS[jSel.value]) [st.ha, st.va] = JUSTS[jSel.value]; place(); });
      ta.addEventListener('input', place);
      ok.addEventListener('click', () => finish(true));
      no.addEventListener('click', () => finish(false));
      box.addEventListener('keydown', (ev) => {
        ev.stopPropagation();
        if (ev.key === 'Escape') { ev.preventDefault(); finish(false); }
        else if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); finish(true); }
        else if (ev.key === 'Enter' && ev.target !== ta) { ev.preventDefault(); ev.target.dispatchEvent(new Event('change')); }
      });
      // a click outside the editor keeps the text, as in AutoCAD
      box.addEventListener('focusout', () => setTimeout(() => { if (!box.contains(document.activeElement)) finish(true); }, 0));
      cancelEdit = () => finish(false);
      setTimeout(() => { ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }, 0);
    });
  }

  function canSelectNow() { return !engine.busy || engine.expects === 'select'; }
  function wantsPoint() { return gripEdit || ['point', 'distance', 'angle'].includes(engine.expects); }

  function updateCursorMode() {
    view.state.cursorMode = wantsPoint() ? 'point' : (engine.expects === 'select' || engine.expects === 'entity') ? 'select' : 'both';
    view.invalidate();
  }

  /** The point a click or a move stands for: object snap, then object snap tracking, polar tracking, else ortho from the base point. */
  function pointFor(raw) {
    const base = gripEdit ? gripEdit.from : engine.base;
    view.state.track = acquired.length ? { rays: [], acquired } : null;
    if (settings.osnap && !host.shift) {
      const s = view.snap(raw, { kinds: settings.kinds, base });
      view.state.snap = s;
      if (s) { watchAcquire(s); return s.defer ? { x: s.x, y: s.y, tan: { c: s.defer, near: { x: raw.x, y: raw.y } } } : { x: s.x, y: s.y }; }   // a deferred tangent travels with the point (DR.3)
    } else view.state.snap = null;
    watchAcquire(null);
    const tol = 8 / view.zoom;
    if (settings.otrack && settings.osnap && !host.shift && acquired.length) {
      const r = trackPoint(acquired, raw, { inc: settings.polarInc, tol, base, polarAll: settings.polar, start: activeUcs(doc)?.ang || 0 });
      if (r) {
        const from = r.rays[0].from;
        view.state.track = { rays: r.rays, acquired, label: r.kind === 'two' ? t('track.two') : tAngle('track.one', { d: fmtL(Math.hypot(r.x - from.x, r.y - from.y)) }, doc.meta, deg(normAngle(r.rays[0].ang - (activeUcs(doc)?.ang || 0)))) };
        return { x: r.x, y: r.y };
      }
    }
    const ua = activeUcs(doc)?.ang || 0;   // polar rays and ortho follow the UCS (DR.8)
    if (settings.polar && base && !host.shift) {
      const r = polarTrack(base, raw, { inc: settings.polarInc, tol, start: ua });
      if (r) { view.state.track = { rays: [r.ray], acquired, label: tAngle('track.polar', { d: fmtL(r.d) }, doc.meta, deg(normAngle(r.ang - ua))) }; return { x: r.x, y: r.y }; }
    }
    if (settings.ortho && base) {
      const c = Math.cos(ua), s = Math.sin(ua), dx = raw.x - base.x, dy = raw.y - base.y, u = c * dx + s * dy, v = -s * dx + c * dy;
      return Math.abs(u) >= Math.abs(v) ? { x: base.x + c * u, y: base.y + s * u } : { x: base.x - s * v, y: base.y + c * v };
    }
    return raw;
  }

  // Object snap tracking: rest the pointer on a snap point to acquire it (again to drop it); up to 7, for one command.
  const acquired = [];
  let acq = null;   // { x, y, timer }
  function watchAcquire(sn) {
    if (!settings.otrack || !settings.osnap || !wantsPoint()) sn = null;
    if (acq && sn && Math.abs(acq.x - sn.x) < 1e-9 && Math.abs(acq.y - sn.y) < 1e-9) return;
    if (acq) { clearTimeout(acq.timer); acq = null; }
    if (!sn) return;
    acq = { x: sn.x, y: sn.y };
    acq.timer = setTimeout(() => {
      const i = acquired.findIndex((p) => Math.abs(p.x - acq.x) < 1e-9 && Math.abs(p.y - acq.y) < 1e-9);
      if (i >= 0) acquired.splice(i, 1); else { acquired.push({ x: acq.x, y: acq.y }); if (acquired.length > 7) acquired.shift(); }
      view.state.track = acquired.length ? { rays: [], acquired } : null;
      view.invalidate();
    }, 400);
  }

  function moveCursor(raw) {
    view.state.cursor = raw;
    let p = raw;
    if (wantsPoint()) p = dynPoint(pointFor(raw)); else view.state.snap = null;
    host.cursor = p;
    if (view.state.box) view.state.box.b = raw;
    if (cycle) { const a = view.toScreen(cycle.at.x, cycle.at.y), b = view.toScreen(raw.x, raw.y); if (Math.hypot(a.x - b.x, a.y - b.y) > 3) cycle = null; }
    view.state.hover = !wantsPoint() && !view.state.box ? (cycle ? cycle.ids[cycle.i] : view.pick(raw)) : null;
    if (gripEdit) {
      const e = doc.get(gripEdit.id);
      view.state.preview = e ? [gripMove(e, gripEdit.key, p)] : [];
    } else if (engine.busy) view.state.preview = withNextGhost(engine.preview(p), raw);
    else view.state.preview = autoGhosts(raw);
    const base = gripEdit ? gripEdit.from : engine.base;
    const uc = activeUcs(doc), q = toUcs(uc, p);   // the readout is in the UCS (DR.8)
    ui.coords.textContent = fmtL(q.x) + ', ' + fmtL(q.y) + (base ? '   Δ ' + fmtL(Math.hypot(p.x - base.x, p.y - base.y)) + ' < ' + fmtAngle(doc.meta, deg(normAngle(Math.atan2(p.y - base.y, p.x - base.x) - (uc?.ang || 0)))) : '');
    renderDyn();
    view.invalidate();
  }
  function refreshCursor() { if (lastRaw) moveCursor(lastRaw); }

  // ---- drawing autocomplete (0.8 EG.54): ghosts of what the drawing's own patterns say comes next; Tab accepts, Esc dismisses ----
  const auto = new Autocomplete(doc);
  auto.on = settings.autocomplete !== 'off';
  const autoIdle = () => auto.on && !engine.busy && !gripEdit && !view.state.box && !host.ws3d?.active;
  const AUTO_REACH_PX = 140;   // a ghost shows while the cursor is within this many screen pixels of it
  function autoGhosts(raw) {
    if (!autoIdle()) return view.state.preview.length && view.state.preview.every((g) => g.ghost && g.auto) ? [] : view.state.preview;
    const g = auto.preview(raw, AUTO_REACH_PX / view.zoom);
    { const cur = auto.current?.key || ''; if (cur !== lastIdleGhost) { lastIdleGhost = cur; if (cur) accessUi?.say(t('access.ghost.idle', { what: t('auto.kind.' + auto.current.kind) })); } }   // EG.52
    return g.length ? g.map((x) => (x.auto ? x : Object.assign(x, { auto: true }))) : (view.state.preview.length && view.state.preview.every((q) => q.auto) ? [] : view.state.preview);
  }
  // EG.54: a running LINE / PLINE: the ghost of its next point (nextPoint, autocomplete.js) while the cursor is near it; Tab clicks it
  let nextGhost = null, lastIdleGhost = '';
  function withNextGhost(prev, raw) {
    const was = nextGhost;
    nextGhost = null;
    if (!auto.on || engine.expects !== 'point' || !engine.chain || gripEdit || host.ws3d?.active) return prev;
    const n = nextPoint(engine.chain);
    if (!n) return prev;
    const last = engine.chain[engine.chain.length - 1];
    if (Math.hypot(raw.x - n.x, raw.y - n.y) * view.zoom > AUTO_REACH_PX) return prev;
    if (!was || was.x !== n.x || was.y !== n.y) accessUi?.say(t('access.ghost.next', { what: t('auto.kind.' + n.kind), at: fmtL(n.x) + ', ' + fmtL(n.y) }));   // EG.52: a ghost is said once when it appears
    nextGhost = n;
    return [...prev, { type: 'line', x1: last.x, y1: last.y, x2: n.x, y2: n.y, ghost: true, auto: true }, { type: 'point', x: n.x, y: n.y, ghost: true, auto: true }];
  }
  function acceptNextGhost() {
    if (!nextGhost || engine.expects !== 'point') return false;
    const n = nextGhost; nextGhost = null;
    status(t('auto.accepted', { what: t('auto.kind.' + n.kind) }));
    engine.click({ x: n.x, y: n.y }, { x: n.x, y: n.y });
    refreshCursor();
    return true;
  }
  function acceptGhost() {
    if (nextGhost && acceptNextGhost()) return true;
    if (!autoIdle() || !auto.current || !view.state.preview.some((g) => g.auto)) return false;
    const r = auto.accept(t('auto.undo'));
    if (!r) return false;
    host.setSelection?.(new Set());
    status(t('auto.accepted', { what: t('auto.kind.' + r.suggestion.kind) }));
    view.state.preview = [];
    refreshCursor();
    return true;
  }
  function dismissGhost() {
    if (!view.state.preview.some((g) => g.auto) || !auto.dismiss()) return false;
    view.state.preview = []; view.invalidate(); status(t('auto.dismissed'));
    return true;
  }
  host.getAutocomplete = () => auto.on;
  // ---- drafting without sight (0.8 EG.52): spoken results, a keyboard cursor, snap sounds, voice (access-ui.js) ----
  accessUi = mountAccess({
    doc, view, engine, host, ui, settings, fmt: fmtL, moveCursor,
    click: (p) => click(p), runLine: (s) => { ui.input.value = s; submit(); }, cancel: () => escapeKey(),
    known: (name) => !!lookup(String(name).toUpperCase()),
  });
  host.fmtLength = fmtL;
  host.viewSpan = () => (ui.stage.clientWidth || 800) / view.zoom;
  // The switch is the shell's (Settings › Global › Drafting without sight; one record for every app). host.access keeps the shape the ACCESS command and the tests use.
  host.access = {
    state: () => { const a = window.ccAccess; return { on: !!a?.on, sound: !!a?.sound, voice: a?.voice === 'on' ? (a.online ? 'online' : 'local') : 'off' }; },
    set: (o) => { const a = window.ccAccess; if (!a) return; const n = {}; if (o.access) { n.on = o.access === 'on'; } if (o.sound) n.sound = o.sound === 'on'; if (o.voice) { n.voice = o.voice === 'off' ? 'off' : 'on'; if (o.voice === 'online') n.online = true; } a.set(n); },
  };
  host.setAutocomplete = (on) => { setRadio('ccAutocomplete', on ? 'on' : 'off'); auto.on = !!on; auto.forget(); refreshCursor(); };
  host.autocomplete = auto;
  // ---- details that find you (0.8 EG.57): one quiet line when a selection matches a detail in the firm's library
  let lastOffer = '', offerTimer = 0;
  host.getDetailsHint = () => settings.details !== 'off';
  host.setDetailsHint = (on) => setRadio('ccDetails', on ? 'on' : 'off');
  function offerDetails() {
    clearTimeout(offerTimer);
    if (settings.details === 'off' || !host.selection?.size || engine.busy) { if (!host.selection?.size) lastOffer = ''; return; }
    offerTimer = setTimeout(() => {
      const o = offerFor(doc, host.selection);
      if (o && o.id !== lastOffer) { lastOffer = o.id; status(t('details.offer', { name: o.name })); }
    }, 500);
  }
  doc.on(() => { if (view.state.preview.some((g) => g.auto)) view.state.preview = []; });
  // ... and while drawing: once a command has finished and nothing is selected, the newest dozen objects are matched the same way
  let drawTimer = 0;
  doc.on((kind) => {
    if (kind !== 'change') return;
    clearTimeout(drawTimer);
    if (settings.details === 'off' || host.selection?.size) return;
    drawTimer = setTimeout(() => {
      if (settings.details === 'off' || host.selection?.size || engine.busy) return;
      const o = offerFor(doc, null, { recent: 12 });
      if (o && o.id !== lastOffer) { lastOffer = o.id; status(t('details.offer', { name: o.name })); }
    }, 900);
  });

  // ---- Tab cycles through overlapping objects under the pointer (AutoCAD's selection cycling) ----
  function cycleTab() {
    if (!lastRaw || wantsPoint() || view.state.box || !(canSelectNow() || engine.expects === 'entity')) return false;
    let ids = cycle ? cycle.ids : view.pickAll(lastRaw);
    if (!cycle) { const first = view.pick(lastRaw); ids = [first, ...ids.filter((id) => id !== first)].filter(Boolean); }   // start from what is highlighted now
    if (ids.length < 2) return false;
    cycle = cycle ? { ...cycle, i: (cycle.i + 1) % ids.length } : { at: lastRaw, ids, i: 1 };
    const e = doc.get(ids[cycle.i]);
    view.state.hover = ids[cycle.i];
    status(t('sel.cycle', { i: cycle.i + 1, n: ids.length, what: t('sel.cycle.what', { type: TYPE_NAMES[e?.type] || '', layer: e?.layer ?? '' }) }));
    view.invalidate();
    return true;
  }
  function cycledAt(p) {
    if (!cycle) return null;
    const a = view.toScreen(cycle.at.x, cycle.at.y), b = view.toScreen(p.x, p.y);
    const id = Math.hypot(a.x - b.x, a.y - b.y) <= 3 ? cycle.ids[cycle.i] : null;
    return id && doc.get(id) ? id : null;
  }

  function gripAt(screen) {
    const tol = view.coarse ? 13 : 6;   // a finger needs a bigger target (S.8)
    for (const g of view.state.grips) {
      const s = view.toScreen(g.x, g.y);
      if (Math.abs(s.x - screen.x) <= tol && Math.abs(s.y - screen.y) <= tol) return g;
    }
    return null;
  }

  function click(raw) {
    if (pendingBox) { finishBox(pendingBox, raw); return; }
    if (gripEdit) { commitGrip(pointFor(raw)); return; }
    if (wantsPoint()) { engine.click(gripEdit ? pointFor(raw) : dynPoint(pointFor(raw)), raw); return; }
    if (engine.expects === 'select') { if (!engine.click(raw, raw)) startBox(raw); return; }
    if (engine.expects === 'entity') { engine.click(raw, raw); return; }
    if (engine.busy) return;
    // idle: grips, picking, windows
    const g = gripAt(view.toScreen(raw.x, raw.y));
    if (g && g.shape) { onDynGrip(g); return; }   // a dynamic block's grip (DB.5)
    if (g) { gripEdit = { id: g.id, key: g.key, from: { x: g.x, y: g.y } }; view.state.hotGrip = g; updateCursorMode(); status(t('app.click_where_grip_goes')); refreshCursor(); return; }
    if (params.click(raw)) return;   // a constraint glyph or label (params-panel.js)
    const id = host.pickAt(raw);
    if (id) {
      // Settings › Clicking objects: 'add' (Shift removes) or 'replace' (Shift adds, or removes a selected one)
      const s = selectionBase();
      if (host.shift && s.has(id)) s.delete(id); else s.add(id);
      host.setSelection(s);
      return;
    }
    if (!host.shift && host.selection.size && settings.emptyClick !== 'keep') { host.setSelection(new Set()); }   // 'keep': Esc clears (0.6 DC.67)
    startBox(raw);
  }
  /** What an idle click or window adds to: nothing in Settings › Clicking objects 'replace' (no Shift), else the selection
   * with the windows that made it, which STRETCH takes as its own crossing windows (0.6 DC.68). */
  function selectionBase() {
    if (settings.pick === 'replace' && !host.shift) return new Set();
    const s = new Set(host.selection);
    if (host.selection.windows?.length) s.windows = [...host.selection.windows];
    return s;
  }
  function startBox(raw) { pendingBox = raw; view.state.box = { a: raw, b: raw }; view.invalidate(); }
  function finishBox(a, b) {
    pendingBox = null;
    view.state.box = null;
    const sa = view.toScreen(a.x, a.y), sb = view.toScreen(b.x, b.y);
    if (Math.hypot(sa.x - sb.x, sa.y - sb.y) < 3) { view.invalidate(); return; }
    const rect = { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) };
    const crossing = sb.x < sa.x;
    if (view.tw) {   // a turned view (DR.8): the window dragged on screen is a turned rectangle in the drawing — select by its outline
      const poly = [[sa.x, sa.y], [sb.x, sa.y], [sb.x, sb.y], [sa.x, sb.y]].map(([x, y]) => view.toWorld(x, y));
      const mode = crossing ? 'crossing' : 'window';
      if (engine.expects === 'select') engine.lasso(poly, mode);
      else if (!engine.busy) {
        const replace = settings.pick === 'replace';
        const s = selectionBase();
        for (const id of host.pickLasso(poly, mode)) { if (host.shift && !replace) s.delete(id); else s.add(id); }
        if (!host.shift || replace) (s.windows ||= []).push({ poly: poly.map((p) => ({ x: p.x, y: p.y })) });
        host.setSelection(s);
      }
      view.invalidate();
      return;
    }
    if (engine.expects === 'select') engine.window(rect, crossing);
    else if (!engine.busy) {
      const replace = settings.pick === 'replace';
      const s = selectionBase();
      for (const id of view.pickWindow(rect, crossing)) { if (host.shift && !replace) s.delete(id); else s.add(id); }
      if (!host.shift || replace) (s.windows ||= []).push(rect);   // STRETCH run next stretches what these windows hold (0.6 DC.68)
      host.setSelection(s);
    }
    view.invalidate();
  }
  // ---- a dynamic block's grips (0.5 DB.5; dyngrips.js): the visibility grip opens the list of states; the others show where
  // their parameters are, and say they don't act yet ----
  let dynMenu = null;
  function closeDynMenu() { if (dynMenu) { dynMenu.remove(); dynMenu = null; } }
  function onDynGrip(g) {
    if (!dynGripActs(g.key)) { status(t('dyn.grip.not_yet', { name: g.name || g.kind })); return; }
    const e = doc.get(g.id), info = e && visibilityOf(doc, e);
    if (!info) return;
    closeDynMenu();
    const s = view.toScreen(g.x, g.y), cr = ui.over.getBoundingClientRect(), sr = ui.stage.getBoundingClientRect();
    dynMenu = el('div', { className: 'cc-menu-list cc-dynvis', role: 'menu', 'aria-label': info.label },
      ...info.states.map((n) => {
        const b = el('button', { type: 'button', role: 'menuitemradio', 'aria-checked': String(n === info.current) }, n);
        b.addEventListener('click', () => {
          closeDynMenu();
          const r = n === info.current ? { ok: true } : setVisibility(doc, g.id, n);
          if (!r.ok) status(t('props.dyn.err.' + r.error));
          refreshGrips(); scheduleProps(); view.invalidate(); focusCommandLine();
        });
        return b;
      }));
    dynMenu.style.left = Math.round(cr.left - sr.left + view.x0 + s.x + 10) + 'px';
    dynMenu.style.top = Math.round(cr.top - sr.top + view.y0 + s.y + 10) + 'px';
    dynMenu.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') { ev.stopPropagation(); closeDynMenu(); focusCommandLine(); } });
    ui.stage.append(dynMenu);
    dynMenu.querySelector('[aria-checked="true"]')?.focus() || dynMenu.querySelector('button')?.focus();
    setTimeout(() => document.addEventListener('pointerdown', (ev) => { if (dynMenu && !dynMenu.contains(ev.target)) closeDynMenu(); }, { once: true }), 0);
  }
  host.dynGrip = (g) => onDynGrip(g);

  function commitGrip(p) {
    const g = gripEdit; gripEdit = null; view.state.hotGrip = null; view.state.preview = [];
    const e = doc.get(g.id);
    if (e && doc.editable(e)) doc.change(t('app.grip_edit'), () => doc.update(e.id, gripMove(e, g.key, p)));
    updateCursorMode();
  }
  /** Esc: the typed text, then the command, then a grip move or box, then the selection (the key row's Esc too). */
  function escapeKey() {
    ui.input.value = ''; suggest();
    if (dismissGhost()) return;
    if (engine.escape()) return;
    if (cancelLocal()) return;
    if (host.selection.size) host.setSelection(new Set());
  }
  function rightClick() {
    if (gripEdit || pendingBox) { cancelLocal(); return; }
    submit();   // Enter
  }
  function cancelLocal() {
    let did = false;
    if (gripEdit) { gripEdit = null; view.state.hotGrip = null; view.state.preview = []; did = true; }
    if (pendingBox || view.state.box) { pendingBox = null; view.state.box = null; did = true; }
    updateCursorMode();
    return did;
  }

  function refreshGrips() {
    view.state.grips = !engine.busy && host.selection.size && host.selection.size <= 200 ? view.gripsFor(host.selection) : [];
  }

  // ---- keyboard ----
  document.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;   // a dialog (ours or the shared Settings) has its own keys (Esc closes it)
    if (host.ws3d?.active && host.ws3d.onKey(e)) return;   // the 3D tab: its selection, tool keys (ws3d.js)
    const t = e.target;
    const inField = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT') && t !== ui.input;
    const mod = e.ctrlKey || e.metaKey;
    if (['F3', 'F7', 'F8', 'F10', 'F11', 'F12'].includes(e.key)) { e.preventDefault(); toggle({ F3: 'osnap', F7: 'grid', F8: 'ortho', F10: 'polar', F11: 'otrack', F12: 'dyn' }[e.key]); return; }
    if (e.key === 'Tab' && !e.shiftKey && !mod && !inField && !e.defaultPrevented && acceptGhost()) { e.preventDefault(); return; }
    if (e.key === 'Escape') {
      if (inField) return;
      e.preventDefault();
      escapeKey();
      return;
    }
    if (inField) return;
    // text typed at the command line (or asked for by a command) keeps the browser's own copy, cut, paste and select all
    const textKeys = t === ui.input && (ui.input.value !== '' || engine.expects === 'string');
    if (mod && !e.altKey) {
      const k = e.key.toLowerCase();
      if (k === 'z' && !e.shiftKey) { e.preventDefault(); if (!engine.busy) engine.run('UNDO'); return; }
      if (k === 'y' || (k === 'z' && e.shiftKey)) { e.preventDefault(); if (!engine.busy) engine.run('REDO'); return; }
      if (k === 's') { e.preventDefault(); if (e.shiftKey) { if (!engine.busy) engine.run('SAVEAS'); } else saveFile(); return; }
      if (k === 'o') { e.preventDefault(); openPicked(); return; }
      if (k === 'p') { e.preventDefault(); if (!engine.busy) engine.run('PLOT'); return; }
      if (k === '1') { e.preventDefault(); props.toggle(); return; }   // the Properties panel (props.js)
      const EDIT = { c: 'COPYCLIP', x: 'CUTCLIP', v: e.shiftKey ? 'PASTEORIG' : 'PASTECLIP', d: 'DUPLICATE', a: 'SELECTALL' };
      // Ctrl+V (0.6 DF.6): the browser's paste event says whether the system clipboard holds a picture (pasted as one) or
      // not (CadCraft's own clipboard, as before); a browser that sends no paste event gets CadCraft's paste shortly after
      if (k === 'v' && !e.shiftKey && !textKeys) { clearTimeout(pasteWait); pasteWait = setTimeout(() => { pasteWait = 0; editKey('PASTECLIP'); }, 80); return; }
      if (EDIT[k] && !textKeys && (k !== 'd' || !e.shiftKey) && (k === 'v' || !e.shiftKey)) { e.preventDefault(); editKey(EDIT[k]); return; }
      return;
    }
    if ((e.key === 'Delete' || (e.key === 'Backspace' && t !== ui.input)) && !textKeys && !engine.busy && params.deleteKey()) { e.preventDefault(); return; }   // a selected constraint
    if (e.key === 'Delete' && t === ui.input && !textKeys && !engine.busy && host.selection.size) { e.preventDefault(); engine.run('ERASE'); return; }
    if (t === ui.input) return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && !engine.busy && host.selection.size) { e.preventDefault(); engine.run('ERASE'); return; }
    if (e.key === 'Enter' || (e.key === ' ' && t === document.body)) { e.preventDefault(); submit(); return; }
    if (e.key.length === 1 && !e.altKey && (t === document.body || root.contains(t)) && !(t && (t.tagName === 'BUTTON' && e.key === ' '))) {
      e.preventDefault();
      ui.input.focus({ preventScroll: true });
      ui.input.value += e.key;
      suggest();
    }
  });

  /**
   * An Edit shortcut. With no command running it runs at once. A paste or duplicate that is still following the
   * pointer starts over (pressing Ctrl+V again picks up the newest clipboard); any other command must be finished
   * or cancelled first, so a half-made selection is never lost.
   */
  // ---- the sample drawings (0.6 DF.9): File › More › Open a sample (SAMPLES); samples/index.json in this build ----
  host.openSamples = () => new Promise((done) => {
    const base = new URL('./samples/', import.meta.url);
    let list = null;
    const body = el('div', { className: 'cc-ask-text cc-samples' }, el('p', { className: 'cc-note' }, t('samples.dialog.note')));
    const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-samples-h', dataset: { samples: '' } },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-samples-h' }, t('samples.dialog.title'))), body,
      el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('samples.dialog.cancel'))));
    const open = async (file) => {
      dlg.close();
      print(t('samples.loading', { name: file }));
      try {
        const res = await fetch(new URL(file, base));
        if (!res.ok) throw new Error('HTTP ' + res.status);   // i18n-ignore (a technical detail after the sentence)
        await openLocal(new File([await res.arrayBuffer()], file));
      } catch (err) { print(t('samples.failed', { name: file, why: err.message })); }
    };
    dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b?.dataset.key === 'cancel') dlg.close(); });
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    root.append(dlg);
    dlg.showModal();
    fetch(new URL('index.json', base)).then((r) => r.json()).then((j) => {
      list = Array.isArray(j?.samples) ? j.samples.filter((x) => /^[\w.-]+\.dwg$/.test(x.file || '')) : [];
      body.prepend(...list.map((x) => el('div', { className: 'cc-sample', dataset: { sample: x.file } },
        el('h3', { className: 'cc-h' }, t(x.title)), el('p', {}, t(x.about)),
        el('div', { className: 'cc-sample-btns' },
          el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => open(x.file) }, t('samples.dialog.open')),
          /^[\w.-]+\.dxf$/.test(x.dxf || '') ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => open(x.dxf) }, t('samples.dialog.dxf')) : null))));
      dlg.querySelector('.cc-sample button')?.focus();
    }).catch((err) => body.prepend(el('p', { className: 'cc-note' }, t('samples.failed', { name: 'index.json', why: err.message }))));
  });

  // ---- a picture from the system clipboard (0.6 DF.6, pastepic.js): Ctrl+V, or Edit › More › Paste a picture ----
  let pasteWait = 0;
  document.addEventListener('paste', (e) => {
    const tgt = e.target;
    if (tgt !== ui.input && tgt?.closest?.('input, textarea, select, [contenteditable="true"], dialog')) return;   // someone else's field
    if (tgt === ui.input && (ui.input.value !== '' || engine.expects === 'string')) return;   // text typed at the command line
    const ours = !!pasteWait;
    clearTimeout(pasteWait); pasteWait = 0;
    const item = [...(e.clipboardData?.items || [])].find((i) => i.kind === 'file' && /^image\/(png|jpeg)$/i.test(i.type));
    if (!item && !ours) return;
    e.preventDefault();
    if (item) pastePicture(item.getAsFile()); else editKey('PASTECLIP');
  }, true);
  /** Bytes of a picture from the clipboard → a picture at the pointer (or the middle of the view), 40 % of the view wide. */
  async function pastePicture(blob) {
    if (!blob) return;
    if (engine.busy) { status(t('app.finish_cancel_current_command')); return; }
    let bytes;
    try { bytes = new Uint8Array(await blob.arrayBuffer()); } catch { print(t('pic.paste.notpicture')); return; }
    // the area MarkupCraft copied (0.8 D8.15): same pixel size as its clip, copied recently → PASTEAREA places it at its true
    // size from the clip's own PNG (the browser may have re-encoded the clipboard's)
    const s = sniffPicture(bytes);
    if (s && sameImage(readAreaClip(clipStore), s.w, s.h)) { engine.run('PASTEAREA'); return; }
    const vw = view.w / view.zoom;
    const sp = host.cursor ? view.toScreen(host.cursor.x, host.cursor.y) : null;   // the pointer, when it is over the drawing
    const cur = sp && sp.x >= 0 && sp.y >= 0 && sp.x <= view.w && sp.y <= view.h ? host.cursor : view.toWorld(view.w / 2, view.h / 2);
    const r = placePastedPicture(doc, bytes, { at: cur, width: vw * 0.4 });
    if (r.error) { print(r.why || t(r.error)); return; }
    view.invalidate(true);
    print(t('pic.paste.done', { file: r.name, w: r.w, h: r.h }));
  }
  /** Edit › More › Paste a picture: the clipboard API (the browser may ask first). */
  async function pastePictureFromApi() {
    closeMenus();
    if (!navigator.clipboard?.read) { print(t('pic.paste.api')); return; }
    try {
      for (const item of await navigator.clipboard.read()) {
        const type = item.types.find((ty) => /^image\/(png|jpeg)$/i.test(ty));
        if (type) { await pastePicture(await item.getType(type)); return; }
      }
      print(t('pic.paste.none'));
    } catch { print(t('pic.paste.denied')); }
  }
  for (const b of root.querySelectorAll('[data-paste-picture]')) b.addEventListener('click', pastePictureFromApi);

  function editKey(cmd) {
    closeMenus();
    if (engine.busy && !['PASTECLIP', 'DUPLICATE'].includes(engine.running)) { status(t('app.finish_cancel_current_command')); return; }
    engine.run(cmd);
  }

  // ---- layers panel ----
  const ACI_NAMES = { 1: t('app.aci.red'), 2: t('app.aci.yellow'), 3: t('app.aci.green'), 4: t('app.aci.cyan'), 5: t('app.aci.blue'), 6: t('app.aci.magenta'), 7: t('app.ink_black_white'), 8: t('app.aci.gray'), 9: t('app.light_gray') };
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
  function layersForViewport() { const c = viewportContext(); const k = c ? c.vp.id + ':' + (c.vp.frz || []).join('\n') : ''; if (k !== vpCtxKey) renderLayers(); }
  function renderLayers() {
    const vctx = viewportContext();
    vpCtxKey = vctx ? vctx.vp.id + ':' + (vctx.vp.frz || []).join('\n') : '';
    root.querySelector('[data-vpfrz-note]')?.toggleAttribute('hidden', !vctx);
    const list = [...doc.layers.values()].sort((a, b) => (a.name === '0' ? -1 : b.name === '0' ? 1 : a.name.localeCompare(b.name, undefined, { numeric: true })));
    ui.layers.replaceChildren(...list.map((l) => {
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
      const li = el('li', { className: (cur ? 'is-current ' : '') + (!l.on || l.frozen ? 'is-off' : '') },
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
    }));
  }
  function setCurrent(name) {
    doc.setLayer(name, {}, { current: true });   // turns it on and thaws it too; one undo step
    status(t('app.layer.current_status', { name }));
    renderLayers();
    scheduleProps();
  }
  ui.layerNew.addEventListener('click', () => { ui.layerForm.hidden = !ui.layerForm.hidden; if (!ui.layerForm.hidden) ui.layerName.focus(); });
  ui.layerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = ui.layerName.value.trim();
    if (!name) return;
    if (doc.layers.has(name)) { status(t('app.layer.exists', { name })); return; }
    doc.setLayer(name, { color: 7 }, { current: true });   // one undo step
    ui.layerName.value = '';
    ui.layerForm.hidden = true;
    status(t('app.layer.added', { name }));
  });

  function colorLabel(c) {
    if (c === null || c === undefined) return t('app.by_layer');
    if (c === 0) return t('app.by_block');
    if (typeof c === 'string') return c;
    return ACI_NAMES[c] ? ACI_NAMES[c] + ' (' + c + ')' : 'Colour ' + c;
  }

  // ---- properties panel (props.js; session cad-props) ----
  const props = createPropsPanel({
    root, ui, doc, view, host, engine, status, print, colorLabel, ACI_NAMES, setCurrent, fmtL, fmtA,
    lib: { open: (x) => lib.open(x) },
    pickAdd: { get: () => settings.pick === 'add', set: (on) => setRadio('ccPick', on ? 'add' : 'replace') },
    ucsIcon: { get: () => settings.corner !== 'none', set: (on) => { setRadio('ccCorner', on ? 'auto' : 'none'); applyCorner(); } },
  });
  host.props = props;
  installRibbonControls({ doc, controls: props.controls, setCurrent, t });
  function scheduleProps() { props.schedule(); renderSelTotals(); }

  /** The selection's total length and area in the status bar (0.6 DF.4; Settings › CadCraft can switch it off). */
  function renderSelTotals() {
    const box = root.querySelector('[data-seltotals]');
    if (!box) return;
    const ents = [...host.selection].map((id) => doc.get(id)).filter(Boolean);
    const T = settings.selTotals === 'off' || !ents.length ? null : selectionTotals(ents);
    if (!T || (!T.lengthN && !T.areaN)) { box.hidden = true; box.replaceChildren(); return; }
    const u = doc.layout ? { lunits: 2 } : unitsOf(doc.meta);
    box.replaceChildren(...[T.lengthN ? el('span', { dataset: { selLength: '' } }, t('status.sel.length', { value: formatLength(T.length, u) })) : null,
      T.areaN ? el('span', { dataset: { selArea: '' } }, t('status.sel.area', { value: formatArea(T.area, u) })) : null].filter(Boolean));
    box.title = t('status.sel.title', { n: ents.length });
    box.hidden = false;
  }
  function renderProps() { props.render(); }
  /** A length / an area in the drawing's format (paper units on a sheet stay decimal). */
  function fmtL(v) { return doc.layout ? fmt(v) : formatLength(v, unitsOf(doc.meta)); }
  function fmtA(v) { return doc.layout ? fmt(v) : formatArea(v, unitsOf(doc.meta)); }

  // ---- drawing facts ----
  let lastReport = null;
  function renderInfo() {
    fillDl(ui.info, [
      [t('app.info.file'), doc.meta.name + (doc.dirty ? ' ' + t('app.info.changed') : '')],
      [t('app.info.format'), doc.meta.format || t('app.new_drawing')],
      [t('app.info.size'), doc.meta.size ? bytes(doc.meta.size) : null],
      [t('app.info.units'), doc.meta.units || t('app.info.unitless')],
      [doc.layout ? t('app.on_this_sheet') : t('app.info.objects'), num(doc.count())],
      [t('app.info.layers'), num(doc.layers.size)],
      [t('app.info.blocks'), namedBlocks(doc).length ? num(namedBlocks(doc).length) : null],
      [t('app.info.sheets'), doc.layouts.length ? num(doc.layouts.length) : null],
      [t('app.info.constraints'), doc.constraints.length ? num(doc.constraints.length) : null],
    ]);
    ui.report.replaceChildren();
    const r = lastReport;
    if (!r) return;
    const items = [];
    const skipped = Object.entries(r.skipped || {});
    if (skipped.length) items.push(t('app.report.not_shown', { list: skipped.map(([k, v]) => num(v) + ' ' + k.toLowerCase()).join(', ') }));
    if (r.layouts) items.push(t('app.report.layouts', { n: r.layouts, count: num(r.layouts) }));
    for (const n of r.notes || []) items.push(n);
    if (items.length) ui.report.append(el('div', { className: 'cc-report' }, el('p', {}, t('app.about_file')), el('ul', {}, ...items.map((t) => el('li', {}, t)))));
  }

  let layerCount = 0;
  // Toolbar availability: a button that cannot do anything on this drawing right now is greyed out
  const NEEDS_OBJECTS = new Set(['MOVE', 'COPY', 'ROTATE', 'SCALE', 'MIRROR', 'STRETCH', 'OFFSET', 'TRIM', 'EXTEND', 'FILLET', 'CHAMFER', 'EXPLODE', 'ERASE',
    'BLOCK', 'COPYCLIP', 'PLOT', 'ZOOM E', 'ZOOM W']);
  function renderToolbar() {
    const empty = !doc.count();
    for (const b of root.querySelectorAll('.cc-tools [data-cmd]')) {
      const c = b.dataset.cmd;
      if (c === 'UNDO') b.disabled = !doc.canUndo;
      else if (c === 'REDO') b.disabled = !doc.canRedo;
      else if (c === 'NEW' || c === 'SAVE' || c === 'SAVEAS') b.disabled = empty && !doc.dirty;
      else if (NEEDS_OBJECTS.has(c)) b.disabled = empty;
    }
  }

  doc.on((kind) => {
    if (kind === 'load') viewHist.clear();   // zoom previous starts again with each drawing
    if (kind === 'layers' || kind === 'load' || doc.layers.size !== layerCount) { layerCount = doc.layers.size; renderLayers(); }
    if (kind === 'space') applyCorner();
    if (kind === 'space' || kind === 'load') {
      if (host.selection.size) host.selection = new Set();
      cancelLocal();
      view.state.hover = null;
    }
    renderTabs();
    scheduleBlocks();
    refreshGrips();
    // drop selected ids that no longer exist
    if ([...host.selection].some((id) => !doc.get(id))) host.selection = new Set([...host.selection].filter((id) => doc.get(id)));
    view.state.selection = host.selection;
    renderSelTotals();   // the selected objects may have changed size (0.6 DF.4)
    scheduleProps();
    renderInfo();
    renderToolbar();
    if (doc.count()) hideHint();
    layersForViewport();
  });
  renderToolbar();

  function hideHint() { ui.hint.hidden = true; }
  ui.hint.querySelector('[data-hint-close]')?.addEventListener('click', () => { hideHint(); focusCommandLine(); });   // CP.1 (GJoe2)
  ui.hint.querySelector('[data-hint-tour]')?.addEventListener('click', () => { hideHint(); host.startTour?.(); });   // 0.7 D7.06
  settingsDlg?.querySelector('[data-set-tour]')?.addEventListener('click', () => { settingsDlg.close?.(); host.startTour?.(); });
  const tourAuto = settingsDlg?.querySelector('[data-tour-auto]');   // this app's own switch; Settings › Global has the one for every app
  if (tourAuto) {
    tourAuto.checked = appTourAutoOn();
    tourAuto.addEventListener('change', () => setAppTourAuto(tourAuto.checked));
    settingsDlg.addEventListener('cc-settings-reset', () => { setAppTourAuto(true); tourAuto.checked = true; });
  }

  // ---- toolbar rows (CP.1, GJoe2 getcadcraft/cadcraft#2): wrap = to the width, 2 = two rows, 1 = one row; both sideways when they do not fit ----
  // The rows are cadcraft.css (.cc[data-toolbar-rows]): CadCraft's toolbar, and the Drafting classic and Ribbon styles' bars.
  // The tools' icons / labels choice is the shell's (Settings › General › Toolbar, body[data-shell-tb]); Ctrl+F1 steps through it.
  // 2 rows is "at most two": a bar whose groups wrap to two lines or fewer at this width just wraps (data-rows-wrap);
  // one that needs more is laid out in two grid rows that scroll sideways.
  const ROW_BARS = '.cc-tools, .cc-in-rbody, .cc-in-quickbar';
  let rowsFrame = 0;
  function applyToolbarRows() {
    root.dataset.toolbarRows = settings.toolbarRows;
    if (rowsFrame) return;
    rowsFrame = requestAnimationFrame(() => {
      rowsFrame = 0;
      for (const bar of root.querySelectorAll(ROW_BARS)) {
        if (settings.toolbarRows !== '2') { bar.removeAttribute('data-rows-wrap'); continue; }
        let lines = 1, x = 0;
        for (const k of bar.children) {
          if (!k.getClientRects().length) continue;
          const w = k.offsetWidth;
          if (x && x + w > bar.clientWidth) { lines++; x = 0; }
          x += w;
        }
        bar.toggleAttribute('data-rows-wrap', lines <= 2);
      }
    });
  }
  // ---- the toolbar's side (0.7 D7.02): cadcraft.css `.cc[data-toolbar-dock]` moves `.cc-tools` (and the menu styles' bars inside it) ----
  function applyToolbarDock() { root.dataset.toolbarDock = settings.toolbarDock; applyToolbarRows(); view.resize?.(); }
  host.setToolbarDock = (side) => { if (!['top', 'bottom', 'left', 'right'].includes(side)) return false; setRadio('ccToolbarDock', side); applyToolbarDock(); return true; };
  host.getToolbarDock = () => settings.toolbarDock;
  // Settings › General › Reset the layout is the shell's: it calls ccInput.resetLayout, so the toolbar goes back to the top with it
  // (until the shell announces a reset itself — see the log: For the owner)
  const hookShellReset = () => {   // the shell's script may load after this one: try again a few times
    const ci = window.ccInput;
    if (!ci || typeof ci.resetLayout !== 'function') return false;
    if (ci.resetLayout.cadcraftDock) return true;
    const shellReset = ci.resetLayout;
    ci.resetLayout = function () { host.setToolbarDock('top'); return shellReset.apply(this, arguments); };
    ci.resetLayout.cadcraftDock = true;
    return true;
  };
  if (!hookShellReset()) for (const ms of [300, 1000, 3000, 8000]) setTimeout(hookShellReset, ms);
  new ResizeObserver(applyToolbarRows).observe(root);
  new MutationObserver(applyToolbarRows).observe(root, { childList: true, subtree: true, attributeFilter: ['data-shell-tb', 'hidden'] });
  new MutationObserver(applyToolbarRows).observe(document.body, { attributes: true, attributeFilter: ['data-shell-tb'] });
  document.fonts?.ready.then(applyToolbarRows);
  applyToolbarRows();
  applyToolbarDock();
  /** Icons + text → icons → text (the shell's Toolbar buttons setting; same radios as Settings › General). */
  const TB_CYCLE = ['both', 'icons', 'labels'];
  function setToolbarDisplay(mode) {
    const radio = document.querySelector('input[name="tb"][value="' + mode + '"]');
    if (!radio) return false;
    radio.checked = true;
    radio.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }
  const toolbarDisplay = () => document.body.getAttribute('data-shell-tb') || 'both';
  const ROW_CYCLE = ['auto', '2', '1'];
  host.setToolbarRows = (mode) => { setRadio('ccToolbarRows', mode); applyToolbarRows(); };
  host.getToolbarRows = () => settings.toolbarRows;
  host.setToolbarDisplay = setToolbarDisplay;
  host.getToolbarDisplay = toolbarDisplay;
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'F1' || !e.ctrlKey || e.altKey || e.metaKey) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.shiftKey) { const next = ROW_CYCLE[(ROW_CYCLE.indexOf(settings.toolbarRows) + 1) % ROW_CYCLE.length]; host.setToolbarRows(next); status(t('status.toolbar.rows', { rows: t('set.toolbar_rows.' + next) })); }
    else { const next = TB_CYCLE[(TB_CYCLE.indexOf(toolbarDisplay()) + 1) % TB_CYCLE.length]; if (setToolbarDisplay(next)) status(t('status.toolbar.display', { mode: t('set.toolbar_display.' + next) })); }
  }, true);

  /**
   * Back to the command line after a dialog. Closing a modal with the mouse leaves Chromium's
   * restored focus on the input unable to take typing; blurring first and focusing again fixes it.
   */
  function focusCommandLine() {
    if (document.activeElement === ui.input) ui.input.blur();
    ui.input.focus({ preventScroll: true });
  }

  // ---- split screen (panes.js, view.js; VPORTS, View › More) ----
  const dividers = createDividers(ui.base.parentElement, {
    get: () => (view.panes ? { layout: view.panes.layout, fx: view.panes.fx, fy: view.panes.fy, W: view.W, H: view.H } : null),
    set: (key, f) => view.setSplit(key, f),
    label: (key) => t(key === 'fx' ? 'panes.divider.v' : 'panes.divider.h'),
  });
  view.onPanes = () => dividers.render();
  /** Make pane i the active one: the command line, Properties and the tabs follow it. → true when it changed. */
  function switchPane(i) {
    if (view.entered && i !== view.panes?.active) leaveViewport();   // VP.4: another pane = back to the sheet first
    const p = view.panes?.list[i];
    if (p && p.docId != null && p.docId !== tabs.active) {
      // a pane showing another open drawing (Tile): that drawing opens, the pane keeps its view
      tabs.switchTo(p.docId, { keepView: true }).then(() => { if (view.activatePane(i, { sync: false })) { renderTabs(); refreshGrips(); scheduleProps(); } });
      return true;
    }
    if (!view.activatePane(i)) return false;
    if (host.ws3d?.active) host.ws3d.hide();
    applyCorner();
    renderTabs();
    refreshGrips();
    scheduleProps();
    return true;
  }
  host.setPanes = (layout) => {
    if (host.ws3d?.active) host.ws3d.hide();
    view.setPanes(layout);
    if (view.panes) for (const p of view.panes.list) if (p.docId == null) p.docId = tabs.active;
    renderTabs();
    return !!view.panes || layout === 'single';
  };
  host.panes = () => view.paneState();
  /** LINKVIEWS: no argument → whether the panes' views are linked; true / false → link or unlink them. */
  host.linkViews = (on) => { if (on !== undefined) { view.setLinked(on); tabs.render(); } return !!view.linked; };
  host.report = { get: () => lastReport, set: (r) => { lastReport = r; } };
  // "Open in 3D": the drawing as a DWG to the 3D modeling app in a new tab (handoff.js; ui.inc sets data-open3d-url only
  // when that app is open here and its build takes a handoff). The tab opens inside the click; nothing is uploaded.
  if (root.dataset.open3dUrl) host.openIn3d = async () => {
    stampAddons();
    const { bytes } = saveDwg(doc, { version: dwgVersion() });
    const file = new File([bytes], (doc.meta.name || 'Drawing1') + '.dwg', { type: 'application/acad' });
    await sendHandoff(root.dataset.open3dUrl, file, 'cadcraft');
    return root.dataset.open3dApp;
  };

  // ---- several drawings open (doctabs.js, Q.3): document tabs over the drawing, Tile ----
  const tabs = createDocTabs({
    doc, view, engine, host, strip: root.querySelector('[data-doctabs]'), el, t, ask, saveCopy: () => saveFile(),
    refresh: () => { applyCorner(); renderTabs(); renderLayers(); renderBlocks(); renderInfo(); scheduleProps(); refreshGrips(); },
  });
  host.tabs = tabs;

  // ---- a viewport entered (0.5 VP.4; view.js keeps the state): MSPACE / double-click inside → edit the model through
  // it; PSPACE / double-click outside / any tab → back to the sheet. Pan and zoom inside a viewport that isn't locked
  // change its view, written as one undo step before the next command and on leaving (commitViewport). ----
  /** The viewport of the open sheet whose frame holds paper point p (topmost first; turned-off ones too). */
  function viewportAt(p) {
    const vps = [...doc.entities.values()].filter((e) => e.type === 'viewport' && Math.abs(p.x - e.x) <= e.w / 2 && Math.abs(p.y - e.y) <= e.h / 2);
    return vps.length ? vps[vps.length - 1] : null;
  }
  function enterViewport(vp) {
    if (!vp || view.entered || !doc.layout) return false;
    if (vp.on === false) { print(t('vp.enter.off')); return false; }
    host.setSelection(new Set());
    if (!view.enterViewport(vp)) return false;
    renderTabs(); applyCorner(); refreshGrips(); scheduleProps();
    print(t(vp.locked ? 'vp.enter.locked' : 'vp.enter.done'));
    root.classList.add('is-in-viewport');
    renderLayers();
    return true;
  }
  function commitViewport() {
    const v = view.pendingViewport();
    if (!v) return;
    doc.change(t('vp.view.undo'), () => doc.update(v.vp.id, { ...v.vp, cx: v.cx, cy: v.cy, s: v.s }, v.lay.entities));
    view.entered.base = { cx: v.cx, cy: v.cy, s: v.s };
  }
  function leaveViewport({ command = false } = {}) {
    if (!view.entered) return false;
    if (engine.busy && !command) engine.escape();
    commitViewport();
    host.setSelection(new Set());
    view.leaveViewport();
    root.classList.remove('is-in-viewport');
    renderLayers();
    renderTabs(); applyCorner(); refreshGrips(); scheduleProps();
    return true;
  }
  view.onLeaveRequest = () => leaveViewport();
  view.onEnteredLost = () => { view.entered = null; root.classList.remove('is-in-viewport'); renderTabs(); applyCorner(); };
  // ---- UCS and a turned view (DR.8; commands.js UCS / PLAN): the active pane turns; nothing in the drawing moves ----
  // ---- My tools (0.5 DR.9; mytools-ui.js): buttons of your own on the toolbar, their keys, CUIx import ----
  const getvarForMacro = (n) => ({ ORTHOMODE: settings.ortho ? 1 : 0, GRIDMODE: settings.grid ? 1 : 0, POLARMODE: settings.polar ? 1 : 0,
    CLAYER: doc.current.layer, TILEMODE: doc.layout ? 0 : 1, CTAB: doc.layout ? doc.layout.name : 'Model', WORLDUCS: activeUcs(doc) ? 0 : 1 })[n] ?? '';   // i18n-ignore (sysvar values)
  host.myTools = installMyTools({ root, engine, el, t, ask, print, status, lookup: (c) => !!lookup(c), toggle, getvar: getvarForMacro,
    download: (name, text, mime) => fileHost.download(text, name, mime), focusCommandLine, takenElsewhere: () => new Map(host.shortcuts ? host.shortcuts.keys() : []) });
  // keyboard shortcuts for any command (0.5 WL.18; keys-ui.js): SHORTCUTS / View › More; never a My tools key
  host.shortcuts = installShortcuts({ root, engine, el, t, print, status, lookup: (c) => !!lookup(c), focusCommandLine,
    takenByTools: () => new Map([...keyMap(host.myTools.data())].map(([k, v]) => [k, v.tool.label])) });
  // the Align and distribute panel (0.6 DF.2; ALIGNPANEL, Modify › More)
  installAlignPanel({ root, stage: ui.stage, engine, host, el, t, print, focusCommandLine });
  // the Laser panel (0.7 SU.772; LASER, View › More): laser-cad.js + lib/laser's copy in laser/, loaded on first use
  host.laserPanel = async () => { if (!host.laserUi) { const { installLaser } = await import('./laser-cad.js'); host.laserUi = installLaser({ stage: ui.stage, doc, host, el, t, print, ask, focusCommandLine }); } host.laserUi.open(); };
  // classes (0.8 SU.912, sx-classes; CLASSES, View › More): commands + Properties › Class now, the panel (classes-ui.js) on first use
  installClasses();
  host.classesPanel = async () => { if (!host.classesUi) { const { installClassesPanel } = await import('./classes-ui.js'); host.classesUi = installClassesPanel({ stage: ui.stage, doc, host, el, t, print, ask, focusCommandLine }); } host.classesUi.open(); };
  // the Documents panel (0.8 SU.1058, sx-vault; DOCUMENTS): vault-ui.js + lib/vault's copy in vault/, loaded on first use
  host.vaultPanel = async () => { if (!host.vaultUi) { const { installVaultPanel } = await import('./vault-ui.js'); host.vaultUi = installVaultPanel({ stage: ui.stage, doc, host, el, t, print, ask, focusCommandLine, fileHost, openFile: (f) => openLocal(f), currentBytes }); } await host.vaultUi.open(); };
  // attribute editing (0.6 DF.5): EATTEDIT and BATTMAN dialogs, REFEDIT's Save / Discard banner
  installAttEdit({ root, stage: ui.stage, doc, engine, host, el, t, print, focusCommandLine, colorLabel, fmtL, parseLen: parseL, closeRefEdit });
  // plot style tables (0.6 DC.14): PLOTSTYLES and the Plot dialog's Edit tables…
  installPlotStyles({ root, doc, host, el, t, print, colorLabel, aciHex,
    pickFile: (accept) => new Promise((resolve) => { const i = el('input', { type: 'file', accept }); i.addEventListener('change', () => resolve(i.files[0] || null)); i.addEventListener('cancel', () => resolve(null)); i.click(); }) });
  // the first-drawing tour (0.7 D7.06): starts by itself the first time, TOUR starts it again
  installTour({ root, stage: ui.stage, doc, host, el, t, print, focusCommandLine });
  // dimension styles (0.7 D7.14): DIMSTYLE's manager, its Modify form is the Properties panel's dimension fields
  installDimStyles({ root, doc, host, el, t, print, props, focusCommandLine });
  // the menu styles (0.5 IP.3, input-cadcraft.js + the shell's app-input-ui.js): their messages go to the status bar, and
  // letters stay CadCraft's while a command runs or something is typed at the command line
  window.ccInputHooks = { status: (text) => status(text || ''), busy: () => engine.busy || ui.input.value !== '' };
  host.turnView =(tw) => { if (view.turnTo(tw)) { refreshGrips(); status(t(Math.abs(tw) > 1e-12 ? 'cmd.plan.turned' : 'cmd.plan.world', { ang: fmt(deg(normAngle(tw))) })); } };
  host.viewTwist = () => view.tw || 0;
  host.ucsChanged = () => { view.invalidate(true); if (lastRaw) moveCursor(lastRaw); };
  // COMPARESETTINGS (0.5 WL.12; compare-ui.js): this drawing against itself or another open one
  host.compareSettings = () => openCompare({ root, el, t, has: hasKey, doc, print,
    docs: () => tabs.list.map((r) => { const d = tabs.docOf(r.id); return { id: r.id, name: d.meta.name || 'Drawing', doc: d }; }),
    onChange: (d) => { if (d === doc) { renderLayers(); scheduleProps(); view.invalidate(true); } } }).then(() => focusCommandLine());
  // HISTORY (0.7 D7.31; history-ui.js): the copies Studio keeps on this computer each time it saves, and the cloud's versions of a
  // drawing opened from there. The page only reads: nothing is uploaded, and the cloud's token stays in the shell.
  const deskBridge = window.cadcraftDesktop && Number(window.cadcraftDesktop.version) >= 1 ? window.cadcraftDesktop : null;
  const localHist = deskBridge && globalThis.indexedDB ? new LocalHistory() : null;
  const cloudHist = deskBridge?.cloud ? new CloudHistory(deskBridge.cloud) : null;
  const historyKey = () => { const hf = saveTargets.get(doc.meta.hostFile); return hf?.path || null; };
  /** The drawing as SAVE would write it now (no file is touched), and its format. */
  // 0.8 AL.6 "This file uses …": before a save, record which add-ons the drawing's data came from (kept in the file, addons-file.js); after an open, offer the ones this computer lacks
  function stampAddons() {
    const f = window.ccAddonsFile;
    if (!f) return;
    try {
      const known = new Set([...(window.ccAddons?.list?.() || []).map((a) => (a.manifest && a.manifest.id) || a.id), ...((window.ccAddonsAccount?.items) || []).map((i) => i.id)]);
      const tmp = { addons: { ...(doc.meta.addons || {}) } };
      f.stamp(tmp, addonIdsIn(doc).filter((id) => known.has(id)));
      if (Object.keys(tmp.addons).length) doc.meta.addons = tmp.addons;
    } catch (e) { console.warn('add-on record not stamped', e); }
  }
  function offerAddons() {
    const el = document.querySelector('[data-addons-banner]');
    if (!el) return;
    el.hidden = true; el.textContent = '';
    try { window.ccAddonsFile?.offer({ addons: doc.meta.addons }, el); el.hidden = !el.childNodes.length; } catch (e) { console.warn('add-on offer failed', e); }
  }
  host.stampAddons = stampAddons; host.offerAddons = offerAddons;
  function currentBytes() {
    stampAddons();
    const format = saveFormat();
    const bytes = format === 'dwg' ? saveDwg(doc, { version: dwgVersion() }).bytes : new TextEncoder().encode((format === 'dxf2000' ? writeDxf2000(doc) : writeDxf(doc)).text);
    return { bytes, format };
  }
  async function drawingOf(bytes, name) {
    const ext = /\.dxf$/i.test(name) ? 'dxf' : 'dwg';
    try { const { drawing } = await readDrawing(new File([bytes], name), ext); return { drawing, ext }; } finally { busy(null); }   // readDrawing shows "Reading …" 
  }
  host.setCompareMarks = (marks) => { view.compareMarks = marks; view.invalidate(false); };   // 0.8 SU.1058: vault revision compare (marks from history-ui.js marksOf)
  host.centerOn = (x, y) => { view.cx = x; view.cy = y; view.invalidate(true); };
  host.history = () => {
    let off = null;
    const clearMarks = () => { view.compareMarks = null; view.invalidate(false); off?.(); off = null; };
    const p = openHistory({ root, el, t, doc, print, ask, local: localHist, cloud: cloudHist, cloudRef: () => doc.meta.cloud || null, localKey: historyKey,
      readBytes: async (bytes, name) => { const d = new Doc(); d.load((await drawingOf(bytes, name)).drawing); return d; },
      currentDrawing: async () => { const c = currentBytes(); const d = new Doc(); d.load((await drawingOf(c.bytes, 'current.' + (c.format === 'dwg' ? 'dwg' : 'dxf'))).drawing); return d; },
      openCopy: async (bytes, name) => { await openLocal(new File([bytes], name)); },
      restore: async (bytes, name) => {
        const key = historyKey();
        if (localHist && key) { try { const cur = currentBytes(); await localHist.snapshot({ key, name: doc.meta.name, bytes: cur.bytes, format: cur.format, note: t('hist.note.before_restore') }); } catch (err) { console.warn(err); } }
        const { drawing, ext } = await drawingOf(bytes, name);
        const keep = Object.fromEntries(['name', 'source', 'hostFile', 'saveFormat', 'dwgVersion', 'cloud'].filter((k) => doc.meta[k] !== undefined).map((k) => [k, doc.meta[k]]));
        doc.load({ ...drawing, meta: { ...drawing.meta, ...keep } });
        doc.savedVersion = -1; doc.emit();   // not saved to the file until the person saves it
        host.setSelection(new Set()); view.fit(); view.restorePanes(doc.vports); renderTabs(); renderInfo();
        return ext === 'dwg' || ext === 'dxf';
      },
      setMarks: (marks) => { view.compareMarks = marks; view.invalidate(false); if (marks && !off) off = doc.on((kind) => { if (kind === 'load') clearMarks(); }); },
      centerOn: (x, y) => { view.cx = x; view.cy = y; view.invalidate(true); } });
    return p.then(() => { clearMarks(); focusCommandLine(); });
  };
  host.viewportAt = (p) => viewportAt(p);
  host.enterViewport = (vp) => enterViewport(vp);
  host.leaveViewport = () => leaveViewport({ command: true });   // PSPACE
  host.viewportEntered = () => view.enteredViewport()?.vp || null;

  /** The open sheet set's sheets of this drawing (so a tab can show the set's number), or null. */
  function sheetSetHere() {
    const set = host.sheetSet?.state?.set;
    if (!set) return null;
    const src = String(doc.meta.source || doc.meta.name || '').toLowerCase();
    return { sheets: set.sheets.filter((s) => !src || String(s.file).toLowerCase().split('/').pop().startsWith(src.replace(/\.(dwg|dxf)$/, ''))) };
  }
  // ---- model / layout tabs ----
  function renderTabs() {
    const tab = (label, target, selected, title) => {
      const b = el('button', { type: 'button', role: 'tab', className: 'cc-tab', 'aria-selected': String(selected), tabIndex: selected ? 0 : -1, title }, label);
      b.addEventListener('click', async () => {
        if (selected && !view.entered) return;
        if (engine.busy && engine.running !== 'VPVIEW') { engine.escape(); await engine.done; }
        if (view.entered) { leaveViewport(); if (selected) return; }   // VP.4: a click on any tab leaves the viewport
        if (target === '3d') { await open3d(); return; }
        if (host.ws3d?.active) host.ws3d.hide();
        doc.setSpace(target);
        applyCorner();
        renderTabs();
      });
      b.addEventListener('dblclick', () => { if (target && target !== '3d') setTimeout(() => ui.props.querySelector('#cc-sheet-name')?.focus(), 0); });
      return b;
    };
    const lay = doc.layout || view.enteredViewport()?.lay || null, in3d = !!host.ws3d?.active && !lay;   // a viewport entered: its sheet's tab (VP.4)
    ui.tabs.replaceChildren(
      tab(t('app.tab.model'), null, !lay && !in3d, t('app.drawing_itself_full_size')),
      tab('3D', '3d', in3d, t('app.model_3d_drawing_ground')),
      ...doc.layouts.map((l) => tab(settings.tabs === 'number' ? sheetNumberOf(l.name, sheetSetHere()) || l.name : l.name, l, l === lay, t('app.tab.sheet', { name: l.name }))),   // WL.9: numbers only, the name in the tooltip
    );
  }

  // ---- the 3D tab: ws3d.js (and three.js) load the first time it opens ----
  let ws3dLoad = null;
  async function open3d() {
    if (host.ws3d?.active) return host.ws3d;
    if (!doc.inModel) doc.setSpace(null);
    if (!ws3dLoad) {
      busy(t('app.loading_3d_view_first'));
      ws3dLoad = import('./ws3d.js')
        .then((m) => m.createWorkspace3D({ root, doc, engine, host, print, submit, closeMenus, coords: (t) => { ui.coords.textContent = t; } }))
        .finally(() => busy(null));
    }
    let ws;
    try { ws = await ws3dLoad; } catch (err) { console.error(err); ws3dLoad = null; print(t('app.3d.load_failed', { why: err.message })); return null; }
    host.ws3d = ws;
    ws.show();
    applyCorner();
    hideHint();
    renderTabs();
    return ws;
  }
  // ---- corner indicator (Settings › CadCraft): automatic (default: axis icon on the drawing, view cube in 3D) | view cube |
  //      axis icon (view.js's X/Y icon; the X/Y/Z triad in 3D) | none — the last three in both places ----
  // On the Model tab the cube shows the drawing from the top; any other face, edge or corner opens the 3D tab looking
  // from there (and dragging it orbits into 3D). Sheets show neither. The 3D tab has its own (ws3d.js).
  const TOP_VIEW = { dir: [0, 0, -1], up: [0, 1, 0], persp: false };
  const cube2d = mountViewCube(ui.stage.querySelector('.cc-canvases'), {
    i18n: { t, has },   // the cube's words (viewcube.* keys)
    getView: () => TOP_VIEW,
    setView: async (v, o) => {
      if (v.dir[2] < -0.9999) return;   // Top: already looking from there
      const ws = await open3d();
      ws?.lookFrom(v, o);
    },
    menu: { label: t('app.coordinate_system'), items: [{ label: 'WCS', value: 'wcs' }], value: 'wcs', onChange: () => {} },
  });
  function applyCorner() {
    view.ucs = settings.corner === 'axes' || settings.corner === 'auto';
    cube2d.setVisible(settings.corner === 'cube' && doc.inModel && !view.entered && !host.ws3d?.active);   // not on a sheet, nor in a viewport entered
    host.ws3d?.setCorner(settings.corner === 'auto' ? 'cube' : settings.corner);
    view.invalidate(true);
  }
  host.applyCorner = applyCorner;
  host.cube2d = cube2d;

  /** A download of bytes or text made here (3D exports). */
  function downloadBlob(name, data, mime) { fileHost.download(data, name, mime); }   // the browser: a download; the desktop: its save dialog
  ui.tabs.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const tabs = [...ui.tabs.querySelectorAll('[role=tab]')];
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    next.focus(); next.click();
  });

  // ---- blocks panel ----
  let blocksRaf = 0;
  function scheduleBlocks() { if (!blocksRaf) blocksRaf = requestAnimationFrame(() => { blocksRaf = 0; renderBlocks(); }); }
  /** INSERT with this block's name already given (the Blocks panel, the layouts' project browser). */
  async function insertBlock(name) {
    if (engine.busy) { engine.escape(); await engine.done; }
    engine.run('INSERT');   // runs until the block is placed: do not wait for it here
    await new Promise((r) => setTimeout(r, 0));
    if (engine.running === 'INSERT' && engine.expects === 'string') { print(engine.promptText() + ' ' + name); engine.text(name); }
    ui.input.focus({ preventScroll: true });
  }
  function renderBlocks() {
    const names = namedBlocks(doc);
    ui.blocksEmpty.hidden = names.length > 0;
    ui.blocks.replaceChildren(...names.slice(0, 300).map((name) => {
      const uses = doc.blockUses(name);
      const ins = el('button', { type: 'button', className: 'cc-linkbtn', 'aria-label': 'Insert ' + name }, 'Insert');
      ins.addEventListener('click', () => insertBlock(name));
      return el('li', {}, el('span', { className: 'cc-block-name', title: name }, name), el('span', { className: 'cc-muted' }, num(uses) + '×'), ins);
    }));
    if (names.length > 300) ui.blocks.append(el('li', { className: 'cc-muted' }, t('app.blocks.more', { count: num(names.length - 300) })));
  }

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
    return { url: URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })), name: safeName(name) };
  }
  /** Hand a Blob to the person as a file (the browser downloads it; Studio asks where to save). */
  function giveFile(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = el('a', { href: url, download: safeName(name) });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
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
    const a = el('a', { href: pdf.url, download: pdf.name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(pdf.url), 60000);
    closePlot();
  });
  plotUi.open.addEventListener('click', async () => {
    const w = window.open('', '_blank');   // opened now, while the click counts, so it is not blocked
    const pdf = await makePdf();
    if (!pdf) { w?.close(); return; }
    if (w) { w.location.href = pdf.url; print(t('app.pdf_opened_new_tab')); }
    else { const a = el('a', { href: pdf.url, download: pdf.name }); document.body.append(a); a.click(); a.remove(); print(t('app.browser_blocked_new_tab')); }
    setTimeout(() => URL.revokeObjectURL(pdf.url), 120000);
    closePlot();
  });

  // ---- files ----
  let readDwg = null;   // cc-dwg's reader in a worker (./dwg/read-async.js: readDwgAsync, 0.4 1.3), imported with the first DWG
  /** Unsaved changes: ask in the page (Save a copy / Discard / Cancel). Resolves true to go on. */
  async function confirmDiscard() {
    if (!doc.dirty) return true;
    const choice = await ask({
      title: t('app.unsaved_changes'),
      text: t('app.unsaved.text', { name: doc.meta.name }),
      buttons: [['cancel', t('opt.cancel'), 'btn-line'], ['discard', t('app.discard_changes'), 'btn-line'], ['save', t('app.save_copy_first'), 'btn-plot']],
    });
    if (choice === 'save') { await saveFile(); return !doc.dirty; }
    return choice === 'discard';
  }

  /** A small in-page dialog; resolves with the chosen button's key ('cancel' on Esc). */
  function ask({ title, text, buttons }) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-ask-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-ask-h' }, title)),
        el('p', { className: 'cc-ask-text' }, text),
        el('div', { className: 'cc-plot-foot' }, ...buttons.map(([key, label, cls]) =>
          el('button', { type: 'button', className: cls + ' btn-sm-cc', dataset: { key } }, label))));
      let result = 'cancel';
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b) { result = b.dataset.key; dlg.close(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      dlg.querySelector('button[data-key="cancel"]')?.focus();
    });
  }

  async function newDrawing() {
    // as AutoCAD: a new drawing opens in its own tab (doctabs.js); an untouched new drawing is simply used
    if (!tabs.pristine()) { await tabs.add(); print(t('doctabs.new.done', { name: doc.meta.name })); return; }
    doc.load({ meta: { name: doc.meta.name || 'Drawing1', units: newDrawingUnits() } });
    lastReport = null;
    host.setSelection(new Set());
    view.fit();
    renderInfo();
    print(t('app.new_drawing_2'));
  }

  ui.file.addEventListener('change', () => { const f = ui.file.files[0]; ui.file.value = ''; if (f) openLocal(f); });

  // Files through the shell's host adapter (0.4 W2.18; host.js): Open is the browser's picker or the desktop's dialog, files
  // the app was started with or handed later (desktop double-click, an installed web app) open in tabs, and SAVE writes the
  // drawing back where it came from on the desktop (in the browser it stays a download).
  const fileHost = getHost({ app: 'cadcraft' });
  const saveTargets = new Map();   // doc.meta.hostFile → the HostFile that drawing came from / was last saved to
  let targetSeq = 0;
  const keepTarget = (hf) => { const id = 'h' + (++targetSeq); saveTargets.set(id, hf); doc.meta.hostFile = id; };
  const openTypes = () => [
    { description: t('files.type.drawings'), extensions: ['.dwg', '.dxf'] },
    { description: t('files.type.pdf'), extensions: ['.pdf'] },   // 0.7 D7.24
    { description: t('files.type.sheetset'), extensions: ['.ccsheets'] },
    { description: t('files.type.cloud'), extensions: CLOUD_READ.map((e) => '.' + e) },   // a point cloud under the drawing (SG.1; formats from cloud-types.js, 0.6 PF)
    { description: t('files.type.other'), extensions: ['.json', '.pln', '.pla', '.tpl', '.bpn', '.ccbundle', '.zip'] },
  ];
  // 0.6.1 FIX-061-OPEN-HANG: Open from the toolbar or the command line runs as the OPEN command, and that command waits for
  // the file to open — so opening must never wait for the command that is running to finish when it is that one (it waited
  // forever: the drawing never opened and every later command hung behind it). A second Open while the dialog is still up
  // asks for no second dialog; files open one after another, never two loads at once.
  const FILE_COMMANDS = new Set(['OPEN', 'SAMPLES']);
  async function freeEngine() {
    if (!engine.busy || FILE_COMMANDS.has(engine.running)) return;
    engine.escape();
    await engine.done;
  }
  let picking = false, openQueue = Promise.resolve();
  const oneAtATime = (fn) => { const run = openQueue.then(fn, fn); openQueue = run.catch(() => {}); return run; };
  async function openPicked() {
    if (picking) { status(t('app.open.picking')); return; }
    picking = true;
    let files;
    try { files = await fileHost.openFile({ types: openTypes() }); } catch (err) { print(t('app.open.failed', { file: '', why: err?.message || String(err) })); files = []; } finally { picking = false; }
    for (const f of files || []) await openHostFile(f);
    focusCommandLine();   // the native dialog took the focus: typing goes to the command line again
  }
  /** A HostFile (picked, dropped, launched): a set file opens in the Sheet Set panel with its folder when the host can
   *  reach it (desktop), anything else through openLocal; a drawing that can be written in place is kept as its target. */
  async function openHostFile(hf) {
    if (/\.ccsheets$/i.test(hf.name) && host.sheetSet) {
      const folder = fileHost.folderOf(hf);
      if (folder && (await host.sheetSet.openFromFolder(folder, hf.name))) { host.sheetSet.focus(); return; }
    }
    let file;
    try { const b = await hf.file(); file = b instanceof File ? b : new File([b], hf.name, { lastModified: hf.lastModified || Date.now() }); }
    catch (err) { print(t('app.open.failed', { file: hf.name, why: err.message })); return; }
    if ((await openLocal(file)) && hf.writable && /\.(dwg|dxf)$/i.test(hf.name)) {
      keepTarget(hf);
      // the file as it was when opened is the first copy in History (0.7 D7.31): saving over it would otherwise lose it
      if (localHist && hf.path) file.arrayBuffer().then((b) => localHist.snapshot({ key: hf.path, name: hf.name.replace(/\.[^.]+$/, ''), bytes: new Uint8Array(b), format: /\.dxf$/i.test(hf.name) ? 'dxf' : 'dwg', note: 'opened' })).catch((err) => console.warn('history:', err));
    }
  }
  fileHost.onOpenFiles(async (files) => { for (const f of files) await openHostFile(f); });

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
    if (ext !== 'dwg' && ext !== 'dxf') { print(t('app.open.wrong_type', { file: file.name })); return; }
    await freeEngine();
    busy('Opening ' + file.name + '…');
    await frame();
    try {
      const t0 = performance.now();
      const { drawing, format, bytes } = await readDrawing(file, ext);
      if (!tabs.pristine()) await tabs.add({ name: file.name.replace(/\.[^.]+$/, '') });   // its own tab, as AutoCAD (doctabs.js)
      doc.load({ ...drawing, meta: { ...drawing.meta, name: file.name.replace(/\.[^.]+$/, ''), source: file.name, format, size: file.size } });
      if (recovered) { Object.assign(doc.meta, recovered); doc.savedVersion = -1; doc.emit(); }   // recovered work is not saved to a file yet
      else import('./live.js').then((m) => m.stampFileHash(doc, bytes)).catch(() => {});   // Studio Live: same file → no snapshot (LV.8)
      lastReport = drawing.report;
      host.setSelection(new Set());
      view.fit();
      view.restorePanes(doc.vports);   // the split screen it was saved with (or one pane)
      if (!view.panes && doc.inModel && doc.viewTwist) { view.tw = doc.viewTwist; view.fit(); }   // one pane saved turned (DR.8)
      renderTabs();
      renderInfo();
      hideHint();
      print(t('app.open.done', { file: file.name, objects: num(doc.count()), layers: num(doc.layers.size), ms: Math.round(performance.now() - t0) }));
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
    nextPdf = { name: file.name, bytes: new Uint8Array(await file.arrayBuffer()) };
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
    lastReport = { read: res.report.read, skipped: {}, notes: res.report.notes };
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
    const data = new Uint8Array(await file.arrayBuffer());
    let drawing, format;
    if (ext === 'dxf') {
      drawing = readDxf(decodeDxfBytes(data).text);   // $DWGCODEPAGE / UTF-8 (0.7 D7.16)
      format = 'DXF' + (VERSIONS[drawing.meta.version] ? ' ' + VERSIONS[drawing.meta.version] : '') + (drawing.meta.version ? ' (' + drawing.meta.version + ')' : '');
    } else {
      const tag = new TextDecoder().decode(data.subarray(0, 6));
      const model = await dwgModel(data, false, file.name);
      drawing = importDwg(model, { versionTag: tag });
      format = 'DWG' + (VERSIONS[tag] ? ' ' + VERSIONS[tag] : '') + ' (' + tag + ')';
    }
    return { drawing, format, bytes: data };
  }

  /** The drawing model of a DWG (cc-dwg's readDwg), or of a DXF for the library's block adapter (dxf-model.js). */
  async function dwgModel(data, dxf = false, label = t('app.the_drawing')) {
    busy('Reading ' + label + '…');
    await frame();
    if (dxf) {
      const { readDxfModel } = await import('./dxf-model.js');
      return readDxfModel(decodeDxfBytes(data).text);
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
  function pickDrawing() {
    return new Promise((done) => {
      const inp = el('input', { type: 'file', accept: '.dwg,.dxf', className: 'visually-hidden', tabIndex: -1, 'aria-hidden': 'true' });
      let settled = false;
      const finish = (v) => { if (settled) return; settled = true; inp.remove(); done(v); };
      inp.addEventListener('cancel', () => finish(null));
      inp.addEventListener('change', async () => {
        const f = inp.files[0];
        if (!f) { finish(null); return; }
        const ext = (f.name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
        if (ext !== 'dwg' && ext !== 'dxf') { print(t('app.insertf.not_dwg', { file: f.name })); finish(null); return; }
        busy('Reading ' + f.name + '…');
        await frame();
        try { const { drawing } = await readDrawing(f, ext); finish({ drawing, fileName: f.name }); }
        catch (err) { print(t('app.insertf.read_failed', { file: f.name, why: err.message })); finish(null); }
        finally { busy(null); }
      });
      root.append(inp);
      inp.click();
    });
  }

  /** The whole drawing, or one of its blocks: an in-page dialog with a filter. → {whole} | {block} | null */
  function chooseBlock(fileName, names) {
    return new Promise((done) => {
      const filter = el('input', { type: 'search', className: 'cc-input', placeholder: t('app.filter_blocks'), 'aria-label': t('app.filter_blocks'), id: 'cc-choose-filter' });
      const list = el('select', { className: 'cc-select cc-choose-list', size: 10, 'aria-label': t('app.what_insert'), id: 'cc-choose-list' });
      const fill = () => {
        const q = filter.value.trim().toLowerCase();
        const hits = names.filter((n) => !q || n.toLowerCase().includes(q)).slice(0, 2000);
        list.replaceChildren(el('option', { value: '\u0000whole', selected: true }, t('app.insertf.whole', { name: fileName.replace(/\.[^.]+$/, '') })), ...hits.map((n) => el('option', { value: n }, n)));
      };
      fill();
      filter.addEventListener('input', fill);
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-choose-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-choose-h' }, t('app.insertf.title', { file: fileName }))),
        el('div', { className: 'cc-ask-text cc-choose' }, el('p', { className: 'cc-note' }, names.length ? t('app.insertf.count', { n: names.length }) : t('app.file_has_no_named')), names.length ? filter : null, list),
        el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('opt.cancel')), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('app.insertf.insert'))));
      let result = null;
      const ok = () => { const v = list.value; result = v === '\u0000whole' || !v ? { whole: true } : { block: v }; dlg.close(); };
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (!b) return; if (b.dataset.key === 'ok') ok(); else dlg.close(); });
      list.addEventListener('dblclick', ok);
      list.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ok(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      (names.length ? filter : list).focus();
    });
  }

  // ---- the block editor's banner (BEDIT): which block, Save / Discard ----
  const beBar = el('div', { className: 'cc-bedit', hidden: true, role: 'status' });
  ui.stage.append(beBar);
  function showBlockEdit(be) {
    beBar.hidden = !be;
    if (!be) return;
    const btn = (label, save) => { const b = el('button', { type: 'button', className: 'cc-te-btn' + (save ? ' is-primary' : '') }, label); b.addEventListener('click', async () => { if (engine.busy) { engine.escape(); await engine.done; } const r = closeBlockEdit(doc, save); showBlockEdit(null); if (r) print(t(save ? 'cmd.bclose.saved' : 'cmd.bclose.discarded', { name: r.name, n: doc.blockUses(r.name) })); if (r?.synced) print(t('cmd.attsync.done', { name: r.name, n: r.synced })); view.fit(); focusCommandLine(); }); return b; };
    let pick = null;
    if (be.vis) {   // DB.9: the state shown in the editor
      pick = el('select', { className: 'cc-select', 'aria-label': t('bedit.state'), title: t('bedit.state'), dataset: { beState: '' } }, ...be.vis.states.map((st) => el('option', { value: st.name, selected: st.name === be.vis.cur }, st.name)));
      pick.addEventListener('change', async () => { if (engine.busy) { engine.escape(); await engine.done; } switchState(doc, be, pick.value); showBlockEdit(doc.blockEdit); focusCommandLine(); });
    }
    beBar.replaceChildren(el('span', {}, t('bedit.banner', { name: be.name })), pick, btn(t('bedit.save'), true), btn(t('bedit.discard'), false));
  }

  // ---- Quick select (QSELECT): type, property, operator, value; a live count of what matches ----
  function quickSelectDialog({ entities, current }) {
    return new Promise((done) => {
      const id = (k) => 'cc-qs-' + k;
      const sel = (k, opts) => el('select', { className: 'cc-select', id: id(k) }, ...opts.map(([v, label]) => el('option', { value: v }, label)));
      const types = ['any', 'line', 'poly', 'circle', 'arc', 'ellipse', 'text', 'point', 'insert', 'hatch', 'dim'].filter((ty) => ty === 'any' || entities.some((e) => e.type === ty));
      const apply = sel('apply', [['all', t('dlg.qs.apply.all')], ...(current.size ? [['sel', t('dlg.qs.apply.sel')]] : [])]);
      const type = sel('type', types.map((ty) => [ty, qsTypeLabel(ty) + (ty === 'any' ? '' : ' (' + entities.filter((e) => e.type === ty).length + ')')]));
      const prop = el('select', { className: 'cc-select', id: id('prop') });
      const op = sel('op', [['=', t('qs.op.eq')], ['<>', t('qs.op.ne')], ['>', t('qs.op.gt')], ['<', t('qs.op.lt')], ['*', t('qs.op.wild')], ['all', t('qs.op.all')]]);
      const valueBox = el('div', { className: 'cc-qs-value' });
      let value = () => null;
      const how = sel('how', [['include', t('dlg.qs.include')], ['exclude', t('dlg.qs.exclude')]]);
      const append = el('input', { type: 'checkbox', id: id('append') });
      const count = el('p', { className: 'cc-note', 'aria-live': 'polite' });
      const spec = () => ({ type: type.value, prop: prop.value, op: op.value, value: value(), exclude: how.value === 'exclude', within: apply.value === 'sel' ? current : null, append: append.checked });
      const recount = () => { const n = qsCount(entities, spec(), doc).size; count.textContent = t('dlg.qs.count', { n, total: apply.value === 'sel' ? current.size : entities.length }); };
      const fillValue = () => {
        const P = QS_PROPS[prop.value];
        if (op.value === 'all' || !P) { valueBox.replaceChildren(); value = () => null; return; }
        if (P.kind === 'choice' || P.kind === 'color') {
          const vals = valuesOf(entities, type.value, prop.value, doc);
          const s2 = el('select', { className: 'cc-select', id: id('value') }, ...vals.map((v, i) => el('option', { value: String(i) }, P.kind === 'color' ? colorLabel(v) : String(v))));
          s2.addEventListener('change', recount);
          valueBox.replaceChildren(s2);
          value = () => vals[+s2.value] ?? null;
        } else {
          const inp = el('input', { type: 'text', className: 'cc-input', id: id('value') });
          inp.addEventListener('input', recount);
          valueBox.replaceChildren(inp);
          value = () => (P.kind === 'number' ? (parseLength(inp.value, doc.meta.lunits, doc.meta.units) ?? parseFloat(inp.value)) : inp.value);
        }
      };
      const fillProps = () => { const keep = prop.value; prop.replaceChildren(...propsFor(type.value).map((k) => el('option', { value: k, selected: k === keep }, qsPropLabel(k)))); fillValue(); recount(); };
      fillProps();
      type.addEventListener('change', fillProps);
      prop.addEventListener('change', () => { fillValue(); recount(); });
      op.addEventListener('change', () => { fillValue(); recount(); });
      for (const x of [apply, how]) x.addEventListener('change', recount);
      const row = (k, label, ctl) => [el('label', { htmlFor: id(k) }, label), ctl];
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-qs-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-qs-h' }, t('dlg.qs.title'))),
        el('div', { className: 'cc-ask-text cc-props cc-qs' },
          ...row('apply', t('dlg.qs.apply'), apply), ...row('type', t('dlg.qs.type'), type), ...row('prop', t('dlg.qs.prop'), prop),
          ...row('op', t('dlg.qs.op'), op), el('label', { htmlFor: id('value') }, t('dlg.qs.value')), valueBox, ...row('how', t('dlg.qs.how'), how),
          el('label', { className: 'span cc-check' }, append, ' ', t('dlg.qs.append'))),
        el('div', { className: 'cc-plot-foot' }, count, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('dlg.qs.cancel')), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('dlg.qs.ok'))));
      let result = null;
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (!b) return; if (b.dataset.key === 'ok') result = spec(); dlg.close(); });
      dlg.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') { e.preventDefault(); result = spec(); dlg.close(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      type.focus();
    });
  }

  // ---- Find and replace (FIND): the words, options, a live list of what is found ----
  function findDialog({ preview, inSelection }) {
    return new Promise((done) => {
      const what = el('input', { type: 'text', className: 'cc-input', id: 'cc-find-what' });
      const withIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-find-with' });
      const box = (id, label, on = false) => { const b = el('input', { type: 'checkbox', id, checked: on }); return [b, el('label', { className: 'cc-check', htmlFor: id }, b, ' ', label)]; };
      const [mc, mcL] = box('cc-find-case', t('dlg.find.case')), [wh, whL] = box('cc-find-whole', t('dlg.find.whole')), [wi, wiL] = box('cc-find-wild', t('dlg.find.wild'));
      const [kt, ktL] = box('cc-find-kt', t('dlg.find.in.text'), true), [ka, kaL] = box('cc-find-ka', t('dlg.find.in.attr'), true), [kd, kdL] = box('cc-find-kd', t('dlg.find.in.dim'), true);
      const list = el('ul', { className: 'cc-find-list', 'aria-live': 'polite' });
      const count = el('p', { className: 'cc-note' });
      const spec = (withReplace) => ({ find: what.value, replace: withReplace ? withIn.value : null, matchCase: mc.checked, whole: wh.checked, wildcard: wi.checked, kinds: { text: kt.checked, attr: ka.checked, dim: kd.checked } });
      const refresh = () => {
        const ms = what.value ? preview(spec(withIn.value !== '')) : [];
        count.textContent = what.value ? t('dlg.find.results', { n: ms.reduce((a, m) => a + m.count, 0) }) : '';
        list.replaceChildren(...ms.slice(0, 200).map((m) => el('li', {},
          el('span', { className: 'k' }, m.kind === 'attr' ? t('dlg.find.kind.attr', { tag: m.tag }) : t('dlg.find.kind.' + m.kind)), ' ',
          el('span', {}, oneLine(m.before).slice(0, 80)), m.after !== null ? el('span', { className: 'cc-find-to' }, ' → ' + oneLine(m.after).slice(0, 80)) : null)));
      };
      for (const x of [what, withIn]) x.addEventListener('input', refresh);
      for (const x of [mc, wh, wi, kt, ka, kd]) x.addEventListener('change', refresh);
      const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-find', 'aria-labelledby': 'cc-find-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-find-h' }, t('dlg.find.title'))),
        el('div', { className: 'cc-ask-text cc-props' },
          el('label', { htmlFor: 'cc-find-what' }, t('dlg.find.what')), what,
          el('label', { htmlFor: 'cc-find-with' }, t('dlg.find.with')), withIn,
          el('div', { className: 'span cc-find-opts' }, mcL, whL, wiL),
          el('p', { className: 'cc-props-sub' }, t('dlg.find.in')), el('div', { className: 'span cc-find-opts' }, ktL, kaL, kdL),
          inSelection ? el('p', { className: 'cc-note span' }, t('dlg.find.scope.sel')) : null,
          el('div', { className: 'span' }, list)),
        el('div', { className: 'cc-plot-foot' }, count,
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('dlg.find.close')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'select' } }, t('dlg.find.select')),
          el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'replace' } }, t('dlg.find.replace'))));
      let result = null;
      dlg.addEventListener('click', (e) => {
        const b = e.target.closest('button[data-key]');
        if (!b) return;
        if (b.dataset.key !== 'cancel' && what.value) result = { action: b.dataset.key, spec: spec(b.dataset.key === 'replace') };
        dlg.close();
      });
      dlg.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type === 'text') { e.preventDefault(); if (what.value) { result = { action: 'select', spec: spec(false) }; dlg.close(); } } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      what.focus();
    });
  }

  // ---- saving: DWG (AutoCAD 2000 … 2018, dwg-save.js) or DXF R12 ----
  const FORMATS = {
    dwg: { label: () => t('save.format.dwg', { version: t('dwg.version', { v: dwgVersion() }) }), mime: 'application/acad', about: () => t('save.format.dwg.about') },
    dxf: { label: () => 'DXF R12', mime: 'application/dxf', about: () => t('app.save.dxf.about') },
    dxf2000: { label: () => t('save.format.dxf2000'), ext: 'dxf', mime: 'application/dxf', about: () => t('save.format.dxf2000.about') },   // 0.4 C17
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
    const m = /\.(dwg|dxf)$/i.exec(doc.meta.source || '');
    if (m && m[1].toLowerCase() === 'dxf' && /^AC10(1[5-9]|[2-9]\d)$/.test(doc.meta.version || '')) return 'dxf2000';   // a newer DXF saves as DXF 2000
    return m ? m[1].toLowerCase() : remembered() || 'dwg';
  }

  /** Save; `keep` = later saves use this format too (DXFOUT is a one-off export: false, always a copy); `as` = SAVEAS
   *  (the desktop's save dialog). Through host.js: the drawing's own file is written in place when the host can (desktop),
   *  else a copy downloads. */
  async function saveFile(format = saveFormat(), keep = true, as = false) {
    // SAVE itself, and NEW/OPEN saving a copy before they discard, run as commands: let those through
    if (engine.busy && !['SAVE', 'SAVEAS', 'DXFOUT', 'NEW', 'OPEN'].includes(engine.running)) { print(t('app.finish_cancel_current_command')); return; }
    if (doc.refEdit) { print(t('app.refedit.save_first', { name: doc.refEdit.name })); return; }   // its working set is in the drawing (0.6 DF.5)
    if (keep && !as && host.vaultUi) { const ro = await host.vaultUi.saveBlocked(); if (ro) { print(ro); return; } }   // 0.8 SU.1058: a vault file is saved over only while checked out to you
    if (!FORMATS[format]) format = 'dwg';
    doc.vports = view.paneState();   // the split screen on screen goes into the file (its VPORT table, cad-files)
    doc.viewTwist = view.panes ? 0 : doc.inModel && !view.entered ? view.tw || 0 : view.views.get(doc.model)?.tw || 0;   // one pane: the model view's turn (DR.8; the active VPORT's twist)
    let data, report;
    stampAddons();
    try {
      if (format === 'dwg') ({ bytes: data, report } = saveDwg(doc, { version: dwgVersion() }));
      else if (format === 'dxf2000') ({ text: data, report } = writeDxf2000(doc));
      else ({ text: data, report } = writeDxf(doc));
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
    if (!keep) { fileHost.download(data, name, mime); r = { ok: true, how: 'downloaded', name }; }
    else if (as) r = await fileHost.saveAs({ data, name, types, type: mime, title: t('app.save_copy') });
    else {
      const target = saveTargets.get(doc.meta.hostFile);
      r = await fileHost.save({ target: target && target.name.toLowerCase().endsWith('.' + extOf(format)) ? target : null, data, name, types, type: mime });
    }
    if (!r.ok) {
      if (keep && doc.meta.saveFormat === format) { if (before === undefined) delete doc.meta.saveFormat; else doc.meta.saveFormat = before; }
      print(r.cancelled ? t('app.not_saved') : t('app.save.failed', { format: FORMATS[format].label(), why: String(r.error?.message || r.error || '') })); return;
    }
    if (keep && r.target?.writable) keepTarget(r.target);
    if (keep && localHist && r.how === 'written' && r.path) {   // a copy for the History panel (0.7 D7.31), Studio only
      localHist.snapshot({ key: r.path, name: doc.meta.name, bytes: typeof data === 'string' ? new TextEncoder().encode(data) : data, format }).catch((err) => console.warn('history:', err));
    }
    if (doc.version === version) doc.markSaved();   // an edit made while the dialog was open stays unsaved
    const src = doc.meta.source || '', file = r.name || name;
    if (r.how === 'written') print(t('app.save.written', { file: r.path || file, format: FORMATS[format].label() }));
    else print(t(format === 'dxf' ? 'app.save.done.dxf' : 'app.save.done', { file, format: FORMATS[format].label() }) + (src && src !== file ? ' ' + t('app.save.original_unchanged', { file: src }) : ''));
    for (const n of report.notes) print('  ' + n);
    // pasted pictures (0.6 DF.6): a DWG names its pictures' files, so each one goes beside the drawing as its own file
    for (const p of picturesToSave(doc, file)) { fileHost.download(p.bytes, p.name, p.mime); print('  ' + t('pic.paste.saved', { file: p.name, drawing: file })); }
    renderInfo();
  }

  /** A drawing that is not the open one (WBLOCK's) written in `format` and handed to the host as a download / save dialog. */
  async function writeDrawing(d, { name, format = 'dwg' } = {}) {
    if (!FORMATS[format]) format = 'dwg';
    let data;
    try {
      if (format === 'dwg') ({ bytes: data } = saveDwg(d, { version: dwgVersion() }));
      else if (format === 'dxf2000') ({ text: data } = writeDxf2000(d));
      else ({ text: data } = writeDxf(d));
    } catch (err) { console.error(err); return { ok: false, why: err.message }; }
    const file = (name || 'Drawing') + '.' + extOf(format);
    const r = await fileHost.saveAs({ data, name: file, types: [{ description: FORMATS[format].label(), extensions: ['.' + extOf(format)], mime: FORMATS[format].mime }], type: FORMATS[format].mime, title: t('cmd.wblock.title') });
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
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-saveas-h' },
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

  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; }

  // drop a file anywhere on the stage
  let dragDepth = 0;
  ui.stage.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types?.includes('Files')) { e.preventDefault(); dragDepth++; ui.drop.hidden = false; } });
  ui.stage.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
  ui.stage.addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; ui.drop.hidden = true; } });
  ui.stage.addEventListener('drop', (e) => {
    e.preventDefault(); dragDepth = 0; ui.drop.hidden = true;
    fileHost.fromDrop(e.dataTransfer).then(async (files) => { for (const f of files) await openHostFile(f); });   // each in its own tab
  });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  let leaving = false;
  window.addEventListener('beforeunload', (e) => { if (tabs.anyDirty() && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !tabs.anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmLeave())) return;
    leaving = true;
    setTimeout(() => location.assign(url.href), doc.dirty ? 0 : 800);
  });
  /** Leaving the page: the open drawing as before, then any other open drawing with unsaved changes (doctabs.js). */
  async function confirmLeave() {
    if (doc.dirty && !(await confirmDiscard())) return false;
    const others = tabs.list.filter((r) => r.store?.dirty).map((r) => r.store.meta.name);
    if (!others.length) return true;
    const k = await ask({ title: t('doctabs.leave.title'), text: t('doctabs.leave.text', { names: others.join(', ') }), buttons: [['cancel', t('doctabs.close.cancel'), 'btn-line'], ['discard', t('doctabs.leave.discard'), 'btn-plot']] });
    return k === 'discard';
  }

  // ---- library ----
  const lib = createLibraryPanel({ root, doc, engine, print, status, ask, dwgModel: async (bytes, dxf) => { try { return await dwgModel(bytes, dxf, t('app.the_file')); } finally { busy(null); } } });
  root.querySelector('[data-library]')?.addEventListener('click', () => lib.open());
  if (!libraryOn) for (const b of root.querySelectorAll('[data-library], [data-cmd="LIBRARY"]')) b.hidden = true;

  // ---- sheet sets (track Z; sheetset-panel.js): the Sheet Set panel in the left panel; SHEETSET (SSM) shows it ----
  host.sheetSet = createSheetSetPanel({
    root, el, t, ask, print,
    host: { download: (data, name) => downloadBlob(name, data, /\.pdf$/i.test(name) ? 'application/pdf' : /\.zip$/i.test(name) ? 'application/zip' : 'application/json'),
      kind: fileHost.kind, pickFolder: (o) => fileHost.pickFolder(o) },   // the desktop's folder dialog (W2.12)
    openSheet: async (file, layoutName) => {
      await openLocal(file);
      const l = doc.layouts.find((x) => x.name === layoutName);
      if (l) { if (host.ws3d?.active) host.ws3d.hide(); doc.setSpace(l); applyCorner(); renderTabs(); view.fit(); }
    },
  });

  // ---- constraints and parameters (params-panel.js: the panel, glyphs, dimensional constraint labels) ----
  const params = createParamsPanel({ root, doc, view, engine, host, print, status, ask, focusCommandLine });

  // ---- APPLOAD, LISP routines and their dialogs, the aliases file, DELBLOCKS' list (appload.js, session cad-lisp) ----
  installLispUi({ root, engine, host, print, ask, focusCommandLine, el });

  // ---- autosave and crash recovery (0.4 item 1.2; dwg-autosave.js on the shell's app-autosave.js): one copy per drawing tab ----
  const autosaved = wireAutosave({ autosave: new Autosave({ app: 'cadcraft' }), doc, tabs, view, open: (file, meta) => openLocal(file, meta) });
  host.autosave = autosaved;   // tests: window.cadcraft.host.autosave

  // ---- add-ons (0.4 part 2 A.3, session addons; docs/ADDONS-SPEC.md): CadCraft's own loader and API 1.0 (manifest "addons": "own") ----
  startAddons({ doc, engine, host, print, redraw: () => view.invalidate(true), focusCommandLine,
    pickFile: (accept) => new Promise((resolve) => { const i = el('input', { type: 'file', accept }); i.addEventListener('change', () => resolve(i.files[0] || null)); i.addEventListener('cancel', () => resolve(null)); i.click(); }),
    download: (name, data, mime) => downloadBlob(name, data, mime),
    openDrawing: async (drawing, name) => { if (!tabs.pristine()) await tabs.add({ name }); doc.load({ ...drawing, meta: { ...(drawing.meta || {}), name } }); },
  }).catch((err) => console.warn('add-ons did not start:', err));   // i18n-ignore (developer message)

  // ---- AI assistants and scripts (0.4 part 2 X.5, session agents; agents.js on host.js's control channel): tools only, off until Settings › Assistants ----
  installAgents({ doc, engine, host, view, print, canvases: [ui.base, ui.over], saveFile: (format) => saveFile(format || undefined),
    download: (name, data, mime) => downloadBlob(name, data, mime), report: () => lastReport });
  // ---- the shell's seven modules (docs/apps/shell-modules.md § Mounting; shell-mount.js) ----
  mountCadShell({ doc, control: fileHost.control, selected: () => [...host.selection], onSelection: (fn) => host.onSelectionChange(fn), setSelection: (s) => host.setSelection(s),
    describe: (e) => describeEntity(e), path: () => doc.meta.source || '', undoTo: (i) => { while (doc.undoStack.length > i && doc.canUndo) doc.undo(); } });

  // 0.8 DC.1 (apps-mount_PART_5): a pick is announced to the page (SuperCadCraft hears `cc-pick` and keeps one selection across its panels);
  // a related pick from another panel comes back through window.ccPickApply(refs). Both are inert outside Super.
  host.onSelectionChange(() => {
    try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: { app: 'cadcraft', ids: [...host.selection].map(String), cls: (() => { const e = host.selection.size ? doc.get([...host.selection][0]) : null; return e && e.layer ? String(e.layer) : undefined; })() } })); } catch { /* no window */ }
  });
  window.ccPickApply = (refs) => {
    const real = (refs || []).map((r) => (r && doc.get(r.id) ? r.id : r && doc.get(Number(r.id)) ? Number(r.id) : null)).filter((x) => x != null);
    if (!real.length) return false;
    host.setSelection(new Set(real)); return true;
  };

  // ---- start ----
  applyCorner();
  renderTabs();
  renderBlocks();
  renderLayers();
  renderInfo();
  renderProps();
  setPrompt('');
  view.fit();
  print(t('app.cadcraft_ready_type_command'));
  ui.input.focus({ preventScroll: true });
  // /lab/cadcraft?library=<uuid> (the library's "Open in CadCraft"): the panel on that item
  const libUuid = new URLSearchParams(location.search).get('library');
  if (libraryOn && libUuid && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(libUuid)) lib.open({ uuid: libUuid });
  // "Recover your work?" when a page that stopped left drawings behind. Automated browsers (the test suites, which reload
  // mid-run with edits open) see it only when they ask for it: ?autosave=offer
  if (!navigator.webdriver || new URLSearchParams(location.search).get('autosave') === 'offer') autosaved.offer();
  // files the app was started with (desktop: a double-clicked .dwg / .dxf / .ccsheets; an installed web app's launch queue)
  fileHost.launchFiles().then(async (files) => { for (const f of files) await openHostFile(f); }, (err) => console.warn('launch files:', err));   // i18n-ignore (developer message)
  // /lab/cadcraft?handoff=<id> (BimCraft's "Edit in CadCraft"): open the drawing it left for us
  const handoff = handoffParam(location.search);
  const cloudRef = (() => {   // ?cloud=<drawing uuid>&cv=<version> from Studio's hub (studio/hub/hub.js openCloud)
    const q = new URLSearchParams(location.search), id = q.get('cloud') || '';
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ? { drawing: id.toLowerCase(), version: Number.parseInt(q.get('cv') || '', 10) || null } : null;
  })();
  if (handoff) {
    const u = new URL(location.href);
    u.searchParams.delete('handoff'); u.searchParams.delete('cloud'); u.searchParams.delete('cv');
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);   // a reload must not look for it again
    busy(t('app.receiving_drawing'));
    takeHandoff(handoff).then(
      (got) => {
        busy(null);
        if (!got) { print(t('app.drawing_handed_over_another')); return; }
        print(t('app.handoff.received', { file: got.file.name }));
        openLocal(got.file).then((opened) => { if (opened && cloudRef) doc.meta.cloud = cloudRef; });   // Studio opened it from the cloud: History reads its versions (0.7 D7.31)
      },
      (err) => { busy(null); console.error(err); print(t('app.handoff.failed', { why: err.message })); });
  }
  // Studio Live from a link: a page a host serves on the LAN (#live=<code>) or an invite's "Join in the browser"
  // (?live=<ROOM>#<secret>): live.js asks for a name and joins; the drawing comes from the host
  // ---- workspace layouts (0.7 WS.8; Settings › Global › Layout): the shell's engine builds a layout file's blocks, workspace-cadcraft.js
  // fills them with CadCraft's own tools, palettes and views. Only on pages whose build lists layouts (#cc-workspace, app-shell.inc). ----
  if (document.getElementById('cc-workspace')) {
    Promise.all([import('cc-workspace'), import('./workspace-cadcraft.js')]).then(async ([E, W]) => {
      const ws = await W.createCadcraftWorkspace({ root, doc, view, engine, cad: host, t, setCurrent, open3d, insertBlock, status, statusEl: root.querySelector('.cc-status') });
      if (!ws) { document.documentElement.removeAttribute('data-cc-ws-boot'); return; }
      const wsEngine = E.mountWorkspaces(ws.adapter);
      ws.attach(wsEngine); wsEngine.refresh();
      window.cadcraftWorkspace = Object.freeze({ engine: wsEngine, inspect: () => wsEngine.inspect() });   // tests and the console
    }).catch((err) => { console.error(err); document.documentElement.removeAttribute('data-cc-ws-boot'); });
  }
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.cadcraft, fileHost), (err) => print(t('live.join_failed', { why: err.message })));
}

// ---------------------------------------------------------------------------

function toHex6(c) {
  if (/^#[0-9a-f]{6}$/i.test(c)) return c;
  if (/^#[0-9a-f]{3}$/i.test(c)) return '#' + c.slice(1).split('').map((x) => x + x).join('');
  const m = String(c).match(/\d+/g);
  return m && m.length >= 3 ? '#' + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, '0')).join('') : '#000000';
}
/** A picked colour: the ACI it matches exactly, else a true colour. */
function nearestBasic(hex) {
  for (let i = 1; i <= 255; i++) { const h = aciHex(i); if (h !== 'ink' && h.toLowerCase() === hex.toLowerCase()) return i; }
  return hex.toLowerCase() === '#000000' || hex.toLowerCase() === '#ffffff' ? 7 : hex;
}
