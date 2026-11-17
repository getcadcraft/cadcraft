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
import { View, SNAP_LABELS } from './view.js';
import { describe as describeEntity, Engine, lookup, commandList, namedBlocks, closeRefEdit, commandRegistry } from './commands.js';
import { formatLength, formatArea, parseLength, readAngle, fmtAngle, tAngle, unitsOf, newDrawingUnits } from './units.js';
import { selectionTotals } from './seltotals.js';   // 0.6 DF.4
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
import { installCmdLine } from './cmdline.js';   // 0.9 SU.1083: the command line docks or floats, one line + the F2 history
import { installAttEdit } from './attedit-ui.js';   // 0.6 DF.5: EATTEDIT, BATTMAN, the REFEDIT banner
import { installPlotStyles } from './plotstyle-ui.js';   // 0.6 DC.14: the plot style table editor
import { installDimStyles } from './dimstyle-ui.js';
import { installTextStyles } from './textstyle-ui.js';
import { installLayerManager } from './layer-ui.js';
import { installTour, appTourAutoOn, setAppTourAuto } from './tour.js';   // 0.7 D7.06: the first-drawing tour   // 0.7 D7.14: the dimension style manager
import { hasAttributes } from './attedit.js';
import { placePastedPicture, readAreaClip } from './pastepic.js';   // 0.6 DF.6: a picture pasted from the system clipboard
import { sameImage } from './areaclip.js';   // 0.8 D8.15: … or an area copied in MarkupCraft (PASTEAREA, pictures-cmd.js)
import { sniffPicture } from './pictures.js';
import { keyMap } from './mytools.js';
import { has as hasKey } from './i18n.js';
import { DynInput } from './dynin.js';
import { writeDxf } from './dxf.js';
import { textToBinaryDxf } from './dxf-binary.js';   // ORS.18: Save as binary DXF
import { saveDwg } from './dwg-save.js';
import { writeDxf2000 } from './dxf2000.js';
import { gripMove, deg, normAngle, SNAP_KINDS } from './geom.js';
import { setPlotCloud } from './plot.js';
import { el, fillDl, bytes, num, fmt } from './ui-util.js';
import { setText, patchSpans, frameGate, PointerGovernor } from './pointer-perf.js';
import { libraryUses } from './libplace.js';
import { createLibraryPanel } from './libpanel.js';
import { createSheetSetPanel } from './sheetset-panel.js';
import { handoffParam, takeHandoff, sendHandoff } from './handoff.js';
import { Clipboard } from './clipboard.js';
import { t, has } from './i18n.js';
import { lassoHits, lassoMode, nextMode, thin } from './lasso.js';
import { createDividers } from './panes.js';
import { createDocTabs } from './doctabs.js';
import { applyNewDrawingPolicy } from './new-drawing-policy.js';   // 0.10 DP.1 (bk-defaults-10): the person's Default Policies for a new drawing
import { onDefaults } from './defaults-hook.js';
import { Autosave } from "./app-autosave.js";
import { wireAutosave } from './dwg-autosave.js';
import { createParamsPanel } from './params-panel.js';
import { mountViewCube } from './m3d/viewcube.js';
import { createPropsPanel } from './props.js';
import { installRibbonControls } from './ribbon-controls.js';   // 0.8 RIBBON-COMPACT item 8: layers / colour / linetype / lineweight in the ribbon
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
import './blockparams-cmd.js';   // BPARAMS (0.10 SU.1804)
import './sketch-cmd.js';   // SKETCHFIX (0.8 EG.55)
import './autosheet-cmd.js';   // AUTOSHEET (0.8 EG.56)
import './gridmove-cmd.js';   // GRIDMOVE (0.8 EG.35)
import './objectscale-cmd.js';   // ORS.26: OBJECTSCALE, ANNOALLVISIBLE (annotative objects at several scales)
import './mleader-edit-cmd.js';   // ORS.15: MLEADEREDIT, MLEADERALIGN, MLEADERCOLLECT, MLEADER block content
import './dims-ors-cmd.js';   // ORS.6: DIMORDINATE, DIMARC, DIMJOGGED, DIMJOGLINE, QDIM, DIMBREAK, DIMSPACE, DIMINSPECT, DIMOVERRIDE, DIMREASSOCIATE, CENTERMARK, CENTERLINE
import { installArrays } from './arrays-cmd.js';   // ORS.2: ARRAYPATH, ARRAYEDIT, ARRAYCLOSE, arrays that stay editable
import { installHatchExtras } from './hatch-extras-cmd.js';   // ORS.7, ORS.29: GRADIENT, HATCHGENERATEBOUNDARY, Properties › Gradient
import { installVpClip } from './vpclip-cmd.js';   // ORS.16: VPCLIP, MVIEW Polygonal / Object
import './touch-crosshair-cmd.js';   // ORS.20: TOUCHCROSSHAIR
import { installTouchCrosshair } from './touch-crosshair-ui.js';   // ORS.20
import './drawing-lock-cmd.js';   // ORS.27: WHOHAS
import { installDrawingLock } from './drawing-lock-ui.js';   // ORS.27
import './overkill-cmd.js';   // ORS.3: OVERKILL
import './draworder-cmd.js';   // ORS.4: DRAWORDER, TEXTTOFRONT, HATCHTOBACK
import './objhide-cmd.js';   // ORS.5: ISOLATEOBJECTS, HIDEOBJECTS, UNISOLATEOBJECTS
import './lockedlayers-cmd.js';   // ORS.28: LAYLOCKFADE
import './cleanup-tools-cmd.js';   // ORS.12: BURST, TXT2MTXT, NCOPY, FLATTEN, BREAKLINE
import { installCleanupUi } from './cleanup-ui.js';   // ORS.5 / ORS.28: the Settings fields and the status bar's "hidden" button
import './draft-small-cmd.js';   // ORS.9: DIVIDE, MEASURE, BOUNDARY, BLEND, CHSPACE, PASTEBLOCK, BLOCKREPLACE, MINSERT
import './edit-depth-cmd.js';   // ORS.30: EXTRIM, OFFSETGAPTYPE, MEASUREGEOM Quick
import { isoState, isoPoint, isoSnap, drawIsoGrid } from './isodraft.js';   // ORS.10: isometric drafting
import { isoKey } from './isodraft-cmd.js';   // ORS.10: ISODRAFT, ISOPLANE, F5 while it is on
import './region2d-cmd.js';   // ORS.13: REGION, MASSPROP, the 2D path of UNION / SUBTRACT / INTERSECT
import './groups-cmd.js';   // ORS.8: GROUP, UNGROUP, GROUPEDIT, PICKSTYLE
import { expandGroups } from './groups.js';   // ORS.8: a click or a window selects a group whole
import { installBlocksPanel } from './blocks-panel.js';   // ORS.23: the Blocks panel's pictures, filter and libraries
import './blocklib-cmd.js';   // ORS.23: BLOCKSPALETTE
import './smartblocks-cmd.js';   // ORS.24: BCONVERT, BSEARCH, BREPLACE, INSERT's suggested places
import './lispedit-cmd.js';   // ORS.31: LISPEDIT (VLIDE)
import { installLispEditor } from './lispedit-ui.js';   // ORS.31: the LISP editor window
import './access-cmd.js';   // ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE (0.8 EG.52)
import { mountAccess } from './access-ui.js';
import './autodim-cmd.js';   // AUTODIM (0.8 EG.20)
import './redline-cmd.js';   // REDLINE (RDL): redline to revision (0.8 EG.19)
import './credits-cmd.js';   // CREDITS: the Library credits as a table in the drawing
import './tags-cmd.js';   // TAGS: block attributes as tags that feed schedules (0.8 SU.915)
import './bomzones-cmd.js';   // BOMZONE BOMTABLE BOMEDIT BOMUPDATE BOMEXPORT: live bills of materials by zone (0.9.1)
import { tablesDoubleClick, tablesLooksLikeCells, tablesSetPaste } from './tables-cmd.js';   // ORS.1: TABLE TABLEDIT TABLESTYLE TABLEEXPORT DATALINK DATALINKUPDATE TABLEPASTE
import { installTablesUi } from './tables-ui.js';   // ORS.1: the cell editor over the drawing
import './dataextract-cmd.js';   // ORS.11: DATAEXTRACTION COUNTTABLE
import './fields-cmd.js';   // ORS.22: FIELD UPDATEFIELD DWGPROPS
import { installFieldsUi } from './fields-ui.js';   // ORS.22: the light background of fields on screen; update on save / plot / regen
import { installBomDialog } from './bomzones-ui.js';
import './photosketch-cmd.js';   // PHOTOSKETCH (0.8 EG.36)
import { offerFor } from './details-cmd.js';   // DETAILS (0.8 EG.57)
import './scan-cmd.js';   // SCANATTACH … SCANTRACE, RASTERSNAP: scanned drawings (0.7 LC.6, session trace)
import { installScanUi } from './scan-ui.js';
import './asbuilt.js';        // ASBUILT: as-built points compared with the drawing's (0.6 LC.22, lc-structure)
import './walls-tools.js';   // the wall tool's recipes in plan walls (0.9 WT.2/3/4/7, walls-plan-09)
import './mline-cmd.js';   // MLINE (0.9 FX.94)
import { installWalls, wallGripClick, wallGripPreview, wallGripCommit, wallGripGhost } from './walls-cmd.js';   // WALL, DOOR, WINDOW (0.9 PLAN2D.4)
import { installWallLocks } from './walls-locks.js';   // the Hold block's padlocks on the plan (0.9 WT.3, walls-plan-10)
import { installWallIcons } from './walls-ui.js';   // the wall tools' icons from the CadCraft icon set (0.9 WT.1)
import { installPlan } from './plan2d-cmd.js';   // FLOORS, LAYGROUP, HATCHEDIT, the hatch link (0.9 PLAN2D.1–3)
import { grouped, setGroupOpen, groupSwitch, setLayerGroup, groupsOf, deleteGroup } from './layergroups.js';   // 0.9 PLAN2D.2
import { installClasses } from './classes-cmd.js';   // CLASSES, CLASS, Properties › Class (0.8 SU.912, sx-classes)
import './vault-cmd.js';   // DOCUMENTS (DOCS): the project document manager (0.8 SU.1058, sx-vault)
import { CloudAttach, CLOUD_ACCEPT } from './cloud-cad.js';
import { installMaps } from './maps-cad.js';   // MAPLAYERS (0.5 SG.3; maplayers.js loads on first use)   // POINTCLOUDATTACH, POINTCLOUD (0.5 SG.1; the reader loads with the first cloud)
import './diagram-cmd.js';   // DIAGRAM: a diagram from Mermaid / PlantUML / D2 / a from-to list (0.8 SU.883)
import './gds-cmd.js';   // GDSIN: view an IC layout, a GDSII stream (0.8 SU.752 spike)
import './ole-cmd.js';   // OLELIST: the OLE objects a DWG carries (0.8 D7.23)
import { LIB as SHX_LIB, useDoc as shxUseDoc, keepFonts as shxKeepFonts } from './shx-text.js';   // SHX fonts you load (0.8 D8.7)
import { rescanFolder as shxRescan } from './shx-cmd.js';   // SHXFONTS
import { cadProblems, auditIds } from './problems-cadcraft.js';   // 0.8 P.6: the file's findings as shared Problems
import './textmask-cmd.js';   // TEXTMASK (0.5 WL.8, cad-files)
import './xclip-cmd.js';   // XCLIP (0.5 WL.16, cad-files)
import { useLegacyDoc } from './legacy-text-cmd.js';   // ORS.21: LEGACYTEXT; old Vietnamese font text is shown decoded
import './audit-cmd.js';   // ORS.14: AUDIT, RECOVER
import { retype as keyRetype, PhysicalLine, keypadPoint, insertAt as keyInsertAt, setKeyLayoutPrefs } from './keylayout.js';   // ORS.25: commands on any keyboard layout; the keypad decimal key
import { auditProblems, fixAudit } from './audit.js';   // ORS.14: the findings in the Problems panel
import { isEmpty as auditListedEmpty } from './problems-cadcraft.js';   // ORS.14
import { PadDetector } from './wheel-pad.js';   // 0.7 D7.56
import { panButton, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and pan buttons (input-cadcraft.js)
import { mountSave } from './save-ui.js';
import { mountSelectDialogs } from './select-dialogs.js';
import { mountPlot } from './plot-ui.js';
import { mountTextEdit } from './text-edit.js';
import { mountBlocks } from './blocks-ui.js';
import { mountOpen } from './open-ui.js';

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
    layers: $('[data-layer-list]'), layerFilter: $('[data-layer-filter]'), layerGroupPick: $('[data-layer-group-pick]'), layerNew: $('[data-layer-new]'), layerForm: $('[data-layer-form]'), layerName: $('[data-layer-name]'),
    info: $('[data-info]'), report: $('[data-report]'), props: $('[data-props]'), propsH: $('[data-props-h]'),
    file: $('[data-file]'), snapKinds: $('[data-snap-kinds]'),
    blocks: $('[data-block-list]'), blocksEmpty: $('[data-blocks-empty]'), tabs: $('[data-tabs]'),
    plot: $('[data-plot]'),
  };

  // ---- settings (per viewer conveniences only) ----
  const saved = (() => { try { return JSON.parse(localStorage.getItem('cadcraft.settings') || '{}'); } catch { return {}; } })();
  const settings = {
    grid: saved.grid ?? true, gsnap: saved.gsnap ?? false, ortho: saved.ortho ?? false, osnap: saved.osnap ?? true,
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
    topArea: saved.topArea === 'compact' ? 'compact' : 'standard',   // the bars above the drawing: as they were, or compact (0.9 SU.1083; .cc-top-compact)
    fileKeys: saved.fileKeys === 'off' ? 'off' : 'on',   // a key on every object so a git/Fossil merge can tell objects apart (file-keys.js, 0.8 DC.27)
    details: saved.details === 'off' ? 'off' : 'on',   // offer the firm's details for a selection that matches (details.js, 0.8 EG.57)
    autocomplete: saved.autocomplete === 'off' ? 'off' : 'on',   // drawing autocomplete: ghost geometry from the drawing's own patterns (autocomplete.js, 0.8 EG.54)
    pointer: ['auto', 'on', 'off'].includes(saved.pointer) ? saved.pointer : 'auto',   // smoother pointer on slower computers: automatic, always light, never (0.9.1, pointer-perf.js)
    keyLayout: saved.keyLayout === 'off' ? 'off' : 'on', keypadPoint: saved.keypadPoint === 'off' ? 'off' : 'on',   // ORS.25: commands read by physical key on a non-Latin layout; the keypad decimal key types a point
    typedCoords: saved.typedCoords === 'absolute' ? 'absolute' : 'relative',   // a typed x,y after the first point: from the last point (as AutoCAD's dynamic input) or from the origin (0.9.1)
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
  const RADIO_SETTINGS = { ccPaste: 'pasteBase', ccPick: 'pick', ccCorner: 'corner', ccLasso: 'lasso', ccTabs: 'tabs', ccSelTotals: 'selTotals', ccTrimDrag: 'trimDrag', ccEmptyClick: 'emptyClick', ccTypedCoords: 'typedCoords', ccKeylayout: 'keyLayout', ccKeylayoutKeypad: 'keypadPoint', ccPointer: 'pointer', ccAutocomplete: 'autocomplete', ccDetails: 'details', ccFileKeys: 'fileKeys', ccToolbarRows: 'toolbarRows', ccToolbarDock: 'toolbarDock', ccTopArea: 'topArea' };
  const applyKeyLayout = () => setKeyLayoutPrefs({ layout: settings.keyLayout !== 'off', keypad: settings.keypadPoint !== 'off' });   // ORS.25
  applyKeyLayout();
  const setRadio = (name, value) => {
    settings[RADIO_SETTINGS[name]] = value; persist();
    if (name === 'ccKeylayout' || name === 'ccKeylayoutKeypad') applyKeyLayout();   // ORS.25
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
      if (e.target.name === 'ccPointer') setPointerMode(settings.pointer);
      if (e.target.name === 'ccToolbarDock') applyToolbarDock();
      if (e.target.name === 'ccTopArea') applyTopArea();
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { setCursor('medium'); setRadio('ccPaste', 'lower-left'); setRadio('ccPick', 'add'); setRadio('ccCorner', 'auto'); setRadio('ccLasso', 'lasso'); setRadio('ccTabs', 'full'); setRadio('ccSelTotals', 'on'); setRadio('ccTrimDrag', 'path'); setRadio('ccEmptyClick', 'clear'); setRadio('ccTypedCoords', 'relative'); setRadio('ccPointer', 'auto'); setPointerMode('auto'); setRadio('ccAutocomplete', 'on'); setRadio('ccDetails', 'on'); setRadio('ccFileKeys', 'on'); Doc.fileKeys = true; setRadio('ccToolbarRows', 'auto'); applyToolbarRows(); setRadio('ccToolbarDock', 'top'); applyToolbarDock(); setRadio('ccTopArea', 'standard'); applyTopArea(); applyCorner(); renderTabs(); renderSelTotals(); });
    settingsDlg.addEventListener('cc-settings-reset', () => { setRadio('ccKeylayout', 'on'); setRadio('ccKeylayoutKeypad', 'on'); });   // ORS.25
  }

  // The clipboard: this tab's copy + localStorage, so another tab can paste (storage may be off: memory only).
  let clipStore = null;
  try { clipStore = window.localStorage; } catch { clipStore = null; }
  const clipboard = new Clipboard(clipStore);

  // ---- host for the command engine ----
  const commandHooks = new Set();
  const selListeners = new Set();   // listeners of the selection (host.onSelectionChange; the shell's design reasons, shell-mount.js)
  const { dwgVersion, saveFormat, exportSet, saveFile, writeDrawing, saveAs } = mountSave({
    doc, view, print, renderInfo, focusCommandLine, stampAddons, root,
    get engine() { return engine; },
    get host() { return host; },
    get saveTargets() { return saveTargets; },
    get fileHost() { return fileHost; },
    get keepTarget() { return keepTarget; },
    get localHist() { return localHist; },
  });
  const host = {
    cursor: null, selection: new Set(), shift: false,
    clipboard, settings,
    print, prompt: setPrompt,
    onSelectionChange(fn) { selListeners.add(fn); return () => selListeners.delete(fn); },   // the shell's design reasons (shell-mount.js)
    setSelection(set) { accessUi?.onSelection(set); host.selection = new Set(set); if (set.windows?.length) host.selection.windows = set.windows; view.state.selection = host.selection; refreshGrips(); scheduleProps(); offerDetails(); view.invalidate(); layersForViewport(); for (const f of selListeners) f(); },
    pickAt: (p) => cycledAt(p) ?? view.pick(p, undefined, engine.busy),   // Tab cycling (cycleTab) wins while the pointer stays put; ORS.28: a command never picks on a locked layer
    pickWindow: (w, crossing) => view.pickWindow(w, crossing, true),   // ORS.28: commands only (the idle window calls view.pickWindow itself)
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
  setPlotCloud(() => host.cloud);   // 0.10 FX.297: a plot prints the point cloud too (PDF, SVG, PNG, printer)
  view.snapExtra = (p, r) => host.cloud.snap(p, r);
  const engine = new Engine(doc, host);
  installCleanupUi({ root, doc, view, host, engine, settings, saved, persist, settingsDlg });   // ORS.5 / ORS.28 / ORS.12
  mountUndoHook({ doc, engine, host });   // 0.8 EG.77: tells the window (Studio's project-level undo) each finished step
  shxUseDoc(doc);
  useLegacyDoc(doc);   // ORS.21
  SHX_LIB.onChange(() => { view.regen(true); view.invalidate(true); });   // a font was loaded or removed: text is measured and drawn again
  shxKeepFonts().then(() => shxRescan()).catch(() => {});
  // the shell's ⚠ Problems (manifest "problems"; mount from docs/0.8-sessions/problems-08-mounts.md § cad-08): the file's findings as one source
  if (document.getElementById('cc-problems')) {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      const src = P.source({ id: 'cadcraft.file', kind: 'check', label: t('problems.src.file'), debounceMs: 600,
        run: () => [...cadProblems({ doc, report: lastReport }, { t, shx: SHX_LIB }), ...auditProblems(doc, { t, skip: auditListedEmpty })],   // ORS.14: AUDIT's findings too
        fix: (p, f) => { if (f.action === 'audit') return fixAudit(doc, { label: 'AUDIT', kinds: [f.args?.kind] }).total > 0;   // ORS.14
          if (f.action !== 'erase') return false; const ids = auditIds(doc, f.args?.what); if (!ids.length) return false; doc.change(t('problems.cad.fix.erase'), () => { for (const id of ids) doc.remove(id); }); return true; } });
      doc.on((kind) => { if (kind !== 'view') src.invalidate(); });
      SHX_LIB.onChange(() => src.invalidate());   // a font was loaded or removed: the substituted-font notes change
      P.adapter({ t, file: () => doc.meta.name || '', select: (p) => { const ids = (p.about || []).filter((a) => a.kind === 'entity').map((a) => a.id); if (ids.length) host.setSelection(new Set(ids)); } });
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }
  (window.ccLibraryCreditSources ||= []).push(() => ({ app: 'cadcraft', source: doc.meta.name || '', items: libraryUses(doc).map((u) => ({ uuid: u.uuid, version: u.version, name: u.name, license: u.license, attribution: u.attribution, url: u.licenseUrl })) }));   // a host's report binder asks for these (lib/report/credits.js)
  window.cadcraft = { doc, view, engine, host, commands: commandRegistry, control: getHost({ app: 'cadcraft' }).control, get exportSet() { return exportSet; } };   // commands: Studio Live's LIVELOCK (live.js)

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
  /**
   * The coordinate readout, written on every pointer move: the same text node, its words changed in place, and only when they
   * differ. (0.9.1, suggestion #1504: `textContent =` swaps the node, which woke every observer of the page's tree on each move
   * — the toolbar rows, the tooltips, the tab strips, the menu states — and each of them measured the page again.)
   */
  let coordsNode = null;
  function setCoords(text) { coordsNode = setText(ui.coords, coordsNode, text); }
  const dynBox = el('div', { className: 'cc-dyn', hidden: true, 'aria-hidden': 'true' });
  ui.stage.append(dynBox);
  /** The pointer with the locked fields applied. */
  const dynPoint = (p) => { dyn.ucs = activeUcs(doc); return dyn.on ? dyn.apply(p, engine.base, parseL, ui.input.value) : p; };
  let dynSize = null;
  window.addEventListener('resize', () => { dynSize = null; });
  function renderDyn() {
    const w = engine.waiting, cur = host.cursor;
    const show = settings.dyn && w && cur && view.state.cursor && ['point', 'distance', 'angle'].includes(w.kind);
    if (dynBox.hidden !== !show) dynBox.hidden = !show;   // written only when it changes: every write wakes the page's mutation observers (0.9.1, pointer-perf.js)
    if (!show) return;
    const typedNow = ui.input.value.trim();
    const field = (i, v, isAngle) => {
      const locked = dyn.locked[i] !== null, active = dyn.on && dyn.active === i;
      const text = active && typedNow ? typedNow : locked ? dyn.locked[i] : v === null ? '' : typeof v === 'number' ? (isAngle ? fmtAngle(doc.meta, v) : fmtL(v)) : v;
      return { className: 'cc-dyn-f' + (active ? ' is-active' : '') + (locked ? ' is-locked' : ''), text };
    };
    const parts = [{ className: 'cc-dyn-p', text: w.prompt }];
    if (dyn.on) {
      dyn.ucs = activeUcs(doc);
      const [a, b] = dyn.live(cur, engine.base);
      parts.push(field(0, a, false), field(1, b, dyn.mode === 'polar'));
    } else if (w.kind === 'distance' && w.opts.base) parts.push({ className: 'cc-dyn-f is-active', text: typedNow || fmtL(Math.hypot(cur.x - w.opts.base.x, cur.y - w.opts.base.y)) });
    else if (w.kind === 'angle' && w.opts.base) parts.push({ className: 'cc-dyn-f is-active', text: typedNow || fmtAngle(doc.meta, deg(normAngle(Math.atan2(cur.y - w.opts.base.y, cur.x - w.opts.base.x)))) });
    const dynChanged = patchSpans(dynBox, parts);   // the same spans, their words changed in place (no nodes added or removed on a pointer move)
    const s0 = view.toScreen(view.state.cursor.x, view.state.cursor.y), cv = ui.base.parentElement, s = { x: s0.x + view.x0 + cv.offsetLeft, y: s0.y + view.y0 + cv.offsetTop };   // split screen: from the pane to the stage (the drawing may sit inset: document tabs, a workspace layout's blocks)
    if (dynChanged || !dynSize) dynSize = { bw: dynBox.offsetWidth || 160, bh: dynBox.offsetHeight || 24, sw: ui.stage.clientWidth, sh: ui.stage.clientHeight };   // measured when the words change, not on every move
    const { bw, bh, sw, sh } = dynSize;
    const left = Math.max(4, Math.min(sw - bw - 4, s.x + 18)) + 'px', top = Math.max(4, Math.min(sh - bh - 4, s.y + 18)) + 'px';
    if (dynBox.style.left !== left) dynBox.style.left = left;
    if (dynBox.style.top !== top) dynBox.style.top = top;
  }

  // ---- command line ----
  const typed = [];
  let typedAt = -1;
  ui.form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
  // ORS.25: the line as physical keys (for a command typed with a non-Latin layout), and the keypad decimal key as a point
  const physLine = new PhysicalLine();
  let keyHintNow = null;
  host.keyHint = (line) => (keyHintNow && keyHintNow.of === line ? keyHintNow.keys : null);
  const keypadDot = (e, box) => {
    const dot = keypadPoint(e);
    if (!dot) return false;
    e.preventDefault();
    const r = keyInsertAt(box.value, box.selectionStart, box.selectionEnd, dot);
    box.value = r.value;
    try { box.setSelectionRange(r.caret, r.caret); } catch { /* a box with no caret */ }
    box.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  };
  root.addEventListener('keydown', (e) => {   // number boxes elsewhere in the app (those that ask for a decimal keypad)
    const b = e.target;
    if (b === ui.input || !b || b.tagName !== 'INPUT' || !/^(decimal|numeric)$/.test(b.inputMode || '')) return;
    keypadDot(e, b);
  }, true);
  ui.input.addEventListener('keydown', (e) => {
    physLine.key(e, ui.input.value);   // ORS.25
    if (keypadDot(e, ui.input)) return;   // ORS.25: before the comma could jump to the next coordinate box
    if (e.key === 'Tab' && !e.shiftKey && !ui.input.value && acceptGhost()) { e.preventDefault(); return; }   // EG.54: Tab takes the ghost
    // dynamic input: Tab (or a comma after X) locks the field and moves to the next
    if (dyn.on && (e.key === 'Tab' || (e.key === ',' && dyn.mode === 'xy' && dyn.active === 0 && isLen(ui.input.value.trim())))) {
      e.preventDefault();
      if (dyn.tab(ui.input.value, isLen)) { ui.input.value = ''; suggest(); refreshCursor(); }
      return;
    }
    if (e.key === ' ' && engine.expects !== 'string' && !host.lispTyping?.(ui.input.value)) { e.preventDefault(); submit(); return; }   // inside "(…" a space is a space (appload.js)
    if (drop.open && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { e.preventDefault(); drop.move(e.key === 'ArrowDown' ? 1 : -1); return; }   // FX.94: the command drop-down list
    if (drop.open && e.key === 'Enter' && drop.at >= 0) { ui.input.value = drop.items[drop.at].name; drop.hide(); return; }   // the form's own submit runs it
    if (drop.open && e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); drop.hide(); return; }
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
  ui.input.addEventListener('input', () => { physLine.after(ui.input.value); /* ORS.25 */ suggest(); if (dyn.on) refreshCursor(); else renderDyn(); });

  function submit() {
    { const keys = physLine.hint(ui.input.value); keyHintNow = keys ? { of: ui.input.value, keys } : null; }   // ORS.25
    if (dyn.on) { dyn.ucs = activeUcs(doc); const s = dyn.commit(ui.input.value, host.cursor, engine.base, { last: engine.lastPoint, parseLen: parseL }); if (s) ui.input.value = s; }
    if (settings.typedCoords !== 'absolute') { const rel = engine.typedRelative(ui.input.value); if (rel) ui.input.value = rel; }   // 0.9.1: x,y after the first point counts from the last point (the history shows the @)
    const v = ui.input.value;
    ui.input.value = '';
    suggest();
    if (v.trim()) { typed.push(v); if (typed.length > 100) typed.shift(); }
    typedAt = -1;
    if (engine.waiting) print(engine.promptText() + ' ' + v);
    if (host.lispLine?.(v)) return;   // "(…" and "!symbol": LISP (appload.js)
    engine.text(v);
  }

  // FX.94 (lab pass 37): every command that starts with the letters typed, in a drop-down list above the command line (a click or Enter on the marked one runs it)
  const drop = (() => {
    const ul = el('ul', { className: 'cc-cmd-drop', role: 'listbox', hidden: true, 'aria-label': t('app.cmd_list'), dataset: { cmdDrop: '' } });
    ui.form.append(ul);
    const d = { items: [], at: -1, open: false, ul };
    const mark = () => { [...ul.children].forEach((li, i) => { li.setAttribute('aria-selected', String(i === d.at)); if (i === d.at) li.scrollIntoView({ block: 'nearest' }); }); };
    d.hide = () => { d.open = false; d.at = -1; d.items = []; ul.hidden = true; ul.textContent = ''; ui.input.removeAttribute('aria-activedescendant'); };
    d.move = (n) => { const k = d.items.length + 1; d.at = ((d.at + 1 + n + k) % k) - 1; mark(); };   // -1 = none marked
    d.show = (items) => {
      d.items = items; d.at = -1; d.open = items.length > 0; ul.hidden = !d.open; ul.textContent = '';
      if (d.open) { const r = ui.input.getBoundingClientRect(); ul.style.left = Math.max(4, r.left) + 'px'; ul.style.bottom = Math.max(4, innerHeight - r.top + 4) + 'px'; }
      items.forEach((c, i) => {
        const li = el('li', { role: 'option', id: 'cc-cmd-opt-' + i, 'aria-selected': 'false' }, el('b', {}, c.name), c.aliases.length ? el('span', { className: 'cc-cmd-alias' }, ' (' + c.aliases[0] + ')') : '', c.help ? el('span', { className: 'cc-cmd-help' }, ' — ' + c.help) : '');
        li.addEventListener('mousedown', (ev) => { ev.preventDefault(); ui.input.value = c.name; d.hide(); submit(); });
        ul.append(li);
      });
    };
    ui.input.addEventListener('blur', () => setTimeout(() => d.hide(), 120));
    return d;
  })();

  function suggest() {
    let typed = ui.input.value.trim().toUpperCase();
    ui.suggest.textContent = '';
    delete ui.suggest.dataset.cmd;
    drop.hide();
    if (!typed || engine.waiting) return;
    { const starts = (w) => { const u = w.toUpperCase(); return commandList().some((c) => c.name.startsWith(u) || c.aliases.some((a) => a.startsWith(u))); };   // ORS.25: suggestions for letters typed with a non-Latin layout
      const alt = keyRetype(typed, starts, physLine.hint(ui.input.value)); if (alt) typed = alt.toUpperCase(); }
    if (!/\s/.test(typed)) drop.show(commandList().filter((c) => c.name.startsWith(typed) || c.aliases.some((a) => a.startsWith(typed))).slice(0, 40));
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
    else if (name === 'gsnap') status(t(settings.gsnap ? 'status.gsnap.on' : 'status.gsnap.off'));
    else status(({ grid: 'Grid', ortho: 'Ortho', osnap: t('app.object_snap') })[name] + (settings[name] ? ' on' : ' off'));
    persist();
    refreshCursor();
  }
  for (const k of SNAP_KINDS) {
    const box = el('input', { type: 'checkbox', checked: settings.kinds.has(k) });
    box.addEventListener('change', () => { if (box.checked) settings.kinds.add(k); else settings.kinds.delete(k); persist(); });
    ui.snapKinds.append(el('label', {}, box, SNAP_LABELS[k]));
  }
  // the snap menu opens from the chevron, a right-click on Snap (as in AutoCAD) and the OSNAP / DDOSNAP commands
  const snapMenu = ui.snapKinds.closest('details');
  host.openSnapKinds = () => {
    ui.snapKinds.querySelectorAll('input').forEach((box, i) => { box.checked = settings.kinds.has(SNAP_KINDS[i]); });
    snapMenu.open = true;
    ui.snapKinds.querySelector('input')?.focus();
  };
  toggles.osnap.addEventListener('contextmenu', (e) => { e.preventDefault(); host.openSnapKinds(); });
  // FX: the ribbon / status-bar layouts clip anything inside them (overflow hidden), so the list is placed on the screen itself, up or down as there is room
  const snapBox = ui.snapKinds;
  const placeSnapMenu = () => {
    if (!snapMenu.open) { snapBox.style.cssText = ''; return; }
    const r = snapMenu.querySelector('summary').getBoundingClientRect();
    snapBox.style.position = 'fixed'; snapBox.style.right = 'auto'; snapBox.style.zIndex = '100000';
    const w = snapBox.offsetWidth || 200, h = snapBox.offsetHeight || 300;
    snapBox.style.left = Math.max(4, Math.min(innerWidth - w - 4, r.right - w)) + 'px';
    const up = r.top - h - 6 >= 4, top = up ? r.top - h - 6 : Math.min(r.bottom + 6, Math.max(4, innerHeight - h - 4));
    snapBox.style.top = top + 'px'; snapBox.style.bottom = 'auto';
  };
  snapMenu.addEventListener('toggle', placeSnapMenu);
  addEventListener('resize', placeSnapMenu);
  document.addEventListener('pointerdown', (e) => { if (snapMenu.open && !snapMenu.contains(e.target)) snapMenu.open = false; });

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
    moveGate.flush();
    if (e.pointerType === 'touch' && touchDown(e)) return;   // a second finger: pinch and pan (S.8)
    try { ui.over.setPointerCapture(e.pointerId); } catch { /* a synthetic or already-lifted pointer: nothing to capture */ }
    if (paneFromEvent(e) && e.button === 0) { down = null; return; }   // the first click into another pane only makes it active (as AutoCAD)
    const p = pos(e);
    host.shift = e.shiftKey; host.alt = e.altKey;
    if (e.button === 1) { e.preventDefault(); if (!panButton(1)) { down = null; return; } rememberView('pan'); panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: unless the style took middle-pan away
    if (view.entered && e.button === 0 && !view.insideEntered(p.x, p.y)) { down = null; return; }   // outside the entered viewport: only a double-click (leave) acts
    down = { ...p, button: e.button, world: view.toWorld(p.x, p.y), moved: false };
  });
  ui.over.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' && touchMove(e)) return;
    const p = pos(e);
    host.shift = e.shiftKey; host.alt = e.altKey;
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
    watchPointer(!!(panning || drag || down));
    moveGate.push(applyMove);   // at once, or folded into this frame's one update when moves come faster than frames (pointer-perf.js)
  });
  ui.over.addEventListener('pointerup', (e) => {
    moveGate.flush();
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
  const dropCrosshair = () => { view.hoverPane = -1; view.state.cursor = null; view.state.snap = null; renderDyn(); view.invalidate(); };
  ui.over.addEventListener('pointerleave', dropCrosshair);
  // The crosshair is painted on the canvas, so a popup that opens under a still pointer (a dialog, a menu, a floating panel) left it showing
  // with no pointerleave to clear it: drop it when any pointer move lands outside the drawing, and when a modal dialog opens.
  document.addEventListener('pointermove', (e) => { if (view.state.cursor && !down && !ui.over.contains(e.target) && e.target !== ui.over) dropCrosshair(); }, true);
  if (!HTMLDialogElement.prototype.showModal.__ccCrosshair) {
    const showModal = HTMLDialogElement.prototype.showModal;
    HTMLDialogElement.prototype.showModal = function () { dropCrosshair(); return showModal.apply(this, arguments); };
    HTMLDialogElement.prototype.showModal.__ccCrosshair = true;
  }
  host.touchCrosshair = installTouchCrosshair({ root, over: ui.over, view, el, t, status, toggles: root.querySelector('.cc-toggles'), settingsDlg, onTouch: useTouch, onNavigate: () => rememberView('pan') });   // ORS.20: the offset crosshair for fingers (touch-crosshair-ui.js)
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
  installTablesUi({ host, doc, view, engine, stage: ui.stage, focus: () => focusCommandLine() });   // ORS.1 (tables-ui.js)
  ui.over.addEventListener('dblclick', (e) => {
    if (engine.busy) return;
    const lp = pos(e);
    if (view.entered && !view.insideEntered(lp.x, lp.y)) { leaveViewport(); return; }   // VP.4: double-click outside = back to the sheet
    if (params.dblclick(view.toWorld(pos(e).x, pos(e).y))) return;   // a dimensional constraint's label: its value
    const id = view.pick(view.toWorld(pos(e).x, pos(e).y));
    { const tid = tablesDoubleClick(doc, id ? doc.get(id) : null, view.toWorld(lp.x, lp.y)); if (tid) { host.setSelection(new Set([tid])); engine.run('TABLEDIT'); return; } }   // ORS.1: a table's cell → type in it
    if (id && ['text', 'mleader'].includes(doc.get(id)?.type)) { host.setSelection(new Set([id])); engine.run('TEXTEDIT'); }   // edit it in place
    else if (id && hasAttributes(doc.get(id), doc.blocks.get(doc.get(id)?.block))) { host.setSelection(new Set([id])); engine.run('EATTEDIT'); }   // its attributes (0.6 DF.5)
    else if (!view.entered && doc.layout && viewportAt(view.toWorld(lp.x, lp.y))) enterViewport(viewportAt(view.toWorld(lp.x, lp.y)));   // VP.4: inside a viewport = edit the model through it
    else if (id) { host.setSelection(new Set([id])); props.open(); }   // any other object: its properties (props.js)
  });

  // ---- the in-place text editor (MTEXT, TEXTEDIT): a textarea over the text, sized like it, and a small bar ----
  let cancelEdit = null;   // closes an open editor without saving (Esc, or another command starting)
  const { editText } = mountTextEdit({
    ui, doc, view, fmtL, focusCommandLine,
    get cancelEdit() { return cancelEdit; }, set cancelEdit(v) { cancelEdit = v; },
  });

  function canSelectNow() { return !engine.busy || engine.expects === 'select'; }
  function wantsPoint() { return gripEdit || ['point', 'distance', 'angle'].includes(engine.expects); }

  function updateCursorMode() {
    view.state.cursorMode = wantsPoint() ? 'point' : (engine.expects === 'select' || engine.expects === 'entity') ? 'select' : 'both';
    view.invalidate();
  }

  let snapOnceKind = null;   // FX.34: an object snap typed at a point prompt ('mid', 'end' …), for the next pick only
  host.snapOnce = (k) => { if (snapOnceKind === (k || null)) return; snapOnceKind = k || null; view.invalidate(); };
  /** The point a click or a move stands for: object snap, then object snap tracking, polar tracking, else ortho from the base point. */
  function pointFor(raw) {
    const base = gripEdit ? gripEdit.from : engine.base;
    view.state.track = acquired.length ? { rays: [], acquired } : null;
    if (snapOnceKind === 'none') view.state.snap = null;   // FX.34: typed "none" for this pick
    else if ((settings.osnap || snapOnceKind) && !host.shift) {
      const s = view.snap(raw, { kinds: snapOnceKind ? new Set([snapOnceKind]) : settings.kinds, base });
      view.state.snap = s;
      if (s) { watchAcquire(s); return s.defer ? { x: s.x, y: s.y, tan: { c: s.defer, near: { x: raw.x, y: raw.y } } } : { x: s.x, y: s.y }; }   // a deferred tangent travels with the point (DR.3)
    } else view.state.snap = null;
    watchAcquire(null);
    if (isoState.on && settings.gsnap && !host.shift && view.gridStep) raw = isoSnap(raw, view.gridStep, view.ucsOrigin()); else   // ORS.10: the isometric grid's points
    if (settings.gsnap && !host.shift && view.gridStep) {   // FX: snap to grid (F9): the nearest grid point of the UCS, when no object snap took the point
      const a = view.ucsAngle(), o = view.ucsOrigin(), c = Math.cos(a), s = Math.sin(a), g = view.gridStep;
      const dx = raw.x - o.x, dy = raw.y - o.y, u = Math.round((c * dx + s * dy) / g) * g, v = Math.round((-s * dx + c * dy) / g) * g;
      raw = { x: o.x + c * u - s * v, y: o.y + s * u + c * v };
    }
    const tol = 8 / view.zoom;
    if (settings.otrack && settings.osnap && !host.shift && acquired.length) {
      const r = trackPoint(acquired, raw, { inc: settings.polarInc, tol, base, polarAll: settings.polar, start: activeUcs(doc)?.ang || 0 });
      if (r) {
        const from = r.rays[0].from;
        view.state.track = { rays: r.rays, acquired, label: r.kind === 'two' ? t('track.two') : tAngle('track.one', { d: fmtL(Math.hypot(r.x - from.x, r.y - from.y)) }, doc.meta, deg(normAngle(r.rays[0].ang - (activeUcs(doc)?.ang || 0)))) };
        return { x: r.x, y: r.y };
      }
    }
    if (isoState.on && base && (settings.ortho || (settings.polar && !host.shift))) { const q = isoPoint(raw, base, { ortho: settings.ortho, polar: settings.polar && !host.shift, tol }); return q ? { x: q.x, y: q.y } : raw; }   // ORS.10: Ortho and polar follow the isometric plane's axes
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
    // the light pointer (pointer-perf.js): what is under a moving pointer is looked up when it rests, not on every move
    const light = governor.light, was = light ? [view.state.hover, view.state.preview, view.state.snap, view.state.track] : null;
    const idle = !wantsPoint() && !view.state.box;
    if (light && idle && !cycle && !ptrResting) { view.state.hover = null; clearTimeout(ptrRestTimer); ptrRestTimer = setTimeout(pointerRested, 90); }
    else view.state.hover = idle ? (cycle ? cycle.ids[cycle.i] : view.pick(raw)) : null;
    if (gripEdit) {
      const e = doc.get(gripEdit.id);
      const moved = e ? gripMove(e, gripEdit.key, p) : null;
      view.state.preview = moved ? (wallGripGhost(doc, gripEdit, p, { selection: host.selection, free: !!host.alt }) || wallGripPreview(moved) || [moved]) : [];   // a wall: what the joined walls will do too (FX.63)
    } else if (engine.busy) view.state.preview = withNextGhost(engine.preview(p), raw);
    else view.state.preview = autoGhosts(raw);
    const base = gripEdit ? gripEdit.from : engine.base;
    const uc = activeUcs(doc), q = toUcs(uc, p);   // the readout is in the UCS (DR.8)
    setCoords(fmtL(q.x) + ', ' + fmtL(q.y) + (base ? '   Δ ' + fmtL(Math.hypot(p.x - base.x, p.y - base.y)) + ' < ' + fmtAngle(doc.meta, deg(normAngle(Math.atan2(p.y - base.y, p.x - base.x) - (uc?.ang || 0)))) : ''));
    renderDyn();
    // the light pointer draws no crosshair, so a move that changed nothing on the overlay asks for no frame at all
    if (!light || !idle || gripEdit || engine.busy || drag || was[0] !== view.state.hover || was[1] !== view.state.preview || was[2] || was[3] || view.state.snap || view.state.track) view.invalidate();
  }
  function refreshCursor() { if (lastRaw) moveCursor(lastRaw); }

  // ---- the pointer's cost (0.9.1, suggestion #1504; pointer-perf.js) ----
  // One update per frame; and Settings › CadCraft › Smoother pointer on slower computers (Automatic / On / Off): "light" =
  // the system's crosshair pointer instead of a drawn one, and the object under the pointer is looked up when it rests.
  // Automatic watches the frames while the pointer moves and turns light on, once, with a note, when they stay slow.
  // Under browser automation (navigator.webdriver: tests, screenshots, films) Automatic never steps down and every move is
  // applied at once, unless localStorage cadcraft.pointer says { "auto": true } (browser-pointer-lag.mjs).
  const ptrSaved = (() => { try { return JSON.parse(localStorage.getItem('cadcraft.pointer') || '{}') || {}; } catch { return {}; } })();
  const ptrKeep = () => { try { localStorage.setItem('cadcraft.pointer', JSON.stringify(ptrSaved)); } catch { /* private window: this session only */ } };
  const ptrAuto = !navigator.webdriver || ptrSaved.auto === true;
  const governor = new PointerGovernor({ mode: settings.pointer, stepped: !!ptrSaved.stepped });
  const moveGate = frameGate({ frame: (cb) => requestAnimationFrame(cb), gap: ptrAuto ? 12 : 0 });
  const applyMove = () => { if (!lastRaw) return; moveCursor(lastRaw); accessUi?.onMove(lastRaw); };
  view.beforeFrame = () => moveGate.flush();
  document.addEventListener('keydown', () => moveGate.flush(), true);
  let ptrResting = false, ptrRestTimer = 0;
  function pointerRested() { if (!lastRaw || !view.state.cursor) return; ptrResting = true; try { moveCursor(lastRaw); } finally { ptrResting = false; } }
  function applyPointerLight() {
    const on = governor.light;
    view.systemCursor = on;
    ui.over.classList.toggle('cc-ptr-light', on);
    root.dataset.pointerLight = on ? 'on' : 'off';
    if (!on) clearTimeout(ptrRestTimer);
    refreshCursor(); view.invalidate();
  }
  function setPointerMode(mode) {
    governor.setMode(mode);
    delete ptrSaved.stepped; ptrKeep();
    ptrNote.hidden = true;
    applyPointerLight();
  }
  // the frames while the pointer moves: a loop that runs only then, and never counts a frame spent panning, dragging or zooming
  let ptrLoop = 0, ptrLast = 0, ptrMoved = false, ptrSkip = false, ptrMoveAt = 0;
  function watchPointer(busy) {
    if (!ptrAuto || governor.mode !== 'auto' || governor.stepped) return;
    ptrMoved = true; ptrMoveAt = performance.now();
    if (busy) ptrSkip = true;
    if (!ptrLoop) ptrLoop = requestAnimationFrame(pointerFrame);
  }
  function pointerFrame(ts) {
    ptrLoop = 0;
    if (ptrLast && ptrMoved && !ptrSkip && !document.hidden && governor.frame(ts - ptrLast) === 'down') pointerSteppedDown();
    ptrLast = ptrMoved && !ptrSkip ? ts : 0;
    ptrMoved = false; ptrSkip = false;
    if (performance.now() - ptrMoveAt < 150 && !governor.stepped) ptrLoop = requestAnimationFrame(pointerFrame); else ptrLast = 0;
  }
  ui.over.addEventListener('wheel', () => { ptrSkip = true; }, { passive: true });
  document.addEventListener('visibilitychange', () => governor.rest());
  doc.on((kind) => { if (kind === 'load') governor.rest(); });
  // the note, once: what was turned down and where to change it
  const ptrNote = el('div', { className: 'cc-ptr-note', role: 'status', hidden: true },
    el('p', {}, el('strong', {}, t('ptr.note.title')), ' ', t('ptr.note.body')),
    el('button', { type: 'button', className: 'cc-hint-close', 'aria-label': t('ptr.note.close'), dataset: { ptrNoteClose: '' }, onclick: () => { ptrNote.hidden = true; focusCommandLine(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' })));
  ui.stage.append(ptrNote);
  function pointerSteppedDown() {
    ptrSaved.stepped = true;
    applyPointerLight();
    if (!ptrSaved.noted) { ptrSaved.noted = true; ptrNote.hidden = false; }
    ptrKeep();
  }
  applyPointerLight();
  host.pointerPerf = { get light() { return governor.light; }, get mode() { return governor.mode; }, get stepped() { return governor.stepped; }, setMode: (m) => { setRadio('ccPointer', m); setPointerMode(settings.pointer); }, feed: (dt) => { const r = ptrAuto ? governor.frame(dt) : null; if (r === 'down') pointerSteppedDown(); return r; }, gate: moveGate };

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
    let ids = cycle ? cycle.ids : view.pickAll(lastRaw, undefined, engine.busy);   // ORS.28
    if (!cycle) { const first = view.pick(lastRaw, undefined, engine.busy); ids = [first, ...ids.filter((id) => id !== first)].filter(Boolean); }   // start from what is highlighted now
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

  let wallLocks = null;
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
    if (g) { gripEdit = { id: g.id, key: g.key, from: { x: g.x, y: g.y } }; view.state.hotGrip = g; updateCursorMode(); status(t(String(g.key).startsWith('wall:') ? 'plan2d.wall.grip.hint' : 'app.click_where_grip_goes')); refreshCursor(); return; }
    const lk = wallLocks?.at(view.toScreen(raw.x, raw.y));   // a wall lock's padlock: a click takes the lock off (walls-plan-10)
    if (lk) { if (wallLocks.unlock(lk)) { status(t('plan2d.lock.unlocked')); refreshGrips(); scheduleProps(); view.invalidate(); } return; }
    if (params.click(raw)) return;   // a constraint glyph or label (params-panel.js)
    const id = host.pickAt(raw);
    if (id) {
      // Settings › Clicking objects: 'add' (Shift removes) or 'replace' (Shift adds, or removes a selected one)
      const s = selectionBase();
      const gids = expandGroups(doc, [id]);   // ORS.8: the object's selectable groups come with it (PICKSTYLE 1)
      if (host.shift && s.has(id)) for (const k of gids) s.delete(k); else for (const k of gids) s.add(k);
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
      for (const id of expandGroups(doc, view.pickWindow(rect, crossing))) { if (host.shift && !replace) s.delete(id); else s.add(id); }   // ORS.8: groups whole
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
    if (wallGripClick(doc, g)) { refreshGrips(); scheduleProps(); view.invalidate(); return; }   // a wall's flip arrows (0.9 PLAN2D.4)
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
    // a wall's grip: the joined walls keep their direction, a corner of two selected walls moves both, Alt breaks the joins (0.9 FX.63)
    if (e && doc.editable(e) && !wallGripCommit(doc, g, p, { selection: host.selection, free: !!host.alt, label: t('app.grip_edit') })) doc.change(t('app.grip_edit'), () => doc.update(e.id, gripMove(e, g.key, p)));
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
    if (isoKey(e, { print, redraw: () => view.invalidate(true) })) return;   // ORS.10: F5 = the next isometric plane, only while isometric drafting is on
    if (['F3', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].includes(e.key)) { e.preventDefault(); toggle({ F3: 'osnap', F7: 'grid', F9: 'gsnap', F8: 'ortho', F10: 'polar', F11: 'otrack', F12: 'dyn' }[e.key]); return; }
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
      physLine.key(e, ui.input.value);   // ORS.25
      ui.input.value += keypadPoint(e) || e.key;   // ORS.25: the keypad decimal key types a point
      physLine.after(ui.input.value);
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
    // ORS.1: spreadsheet cells on the clipboard (text with tabs) become a table, unless CadCraft's own copy is waiting to be pasted
    const cells = ours && !item && !engine.busy ? e.clipboardData?.getData('text/plain') : '';
    if (cells && tablesLooksLikeCells(cells)) { if (host.tablesCellsWin?.()) { e.preventDefault(); tablesSetPaste(cells); engine.run('TABLEPASTE'); return; } print(t('tables.paste.hint')); }
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
    function groupRow(g, names) {
      const members = names.map((n) => byName.get(n));
      const allOff = members.length > 0 && members.every((m) => !m.on), allFrozen = members.length > 0 && members.every((m) => m.frozen), allLocked = members.length > 0 && members.every((m) => m.locked);
      const sw = (key, on, icon, offIcon, label, value) => {
        const b = el('button', { type: 'button', className: 'cc-flag', 'aria-pressed': String(on), title: label, 'aria-label': t('plan2d.group.flag', { label, name: g.name }), dataset: { groupFlag: key } }, el('i', { className: 'bi bi-' + (on ? icon : offIcon), 'aria-hidden': 'true' }));
        b.addEventListener('click', () => { groupSwitch(doc, g.name, key, value); renderLayers(); });
        return b;
      };
      const name = el('button', { type: 'button', className: 'cc-layer-gname', 'aria-expanded': String(g.open), title: g.name, dataset: { layerGroup: g.name }, onClick: () => { setGroupOpen(doc, g.name, !g.open); renderLayers(); } },
        el('i', { className: 'bi bi-chevron-' + (g.open ? 'down' : 'right'), 'aria-hidden': 'true' }), el('i', { className: 'bi bi-folder2' + (g.open ? '-open' : ''), 'aria-hidden': 'true' }), ' ', g.name, ' ', el('span', { className: 'cc-muted' }, String(g.layers.filter((n) => doc.layers.has(n)).length)));
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
  ui.layerFilter?.addEventListener('input', () => renderLayers());   // 0.9 PLAN2D.2
  ui.layerGroupPick?.addEventListener('change', () => { setLayerGroup(doc, doc.current.layer, ui.layerGroupPick.value || null); renderLayers(); });
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
  // one-click sample: the same fetch + openLocal path as File > More > Open a sample, straight to sample-house.dwg
  const openTrySample = async () => {
    const file = 'sample-house.dwg';
    hideHint();
    print(t('samples.loading', { name: file }));
    try {
      const res = await fetch(new URL('./samples/' + file, import.meta.url));
      if (!res.ok) throw new Error('HTTP ' + res.status);   // i18n-ignore (a technical detail after the sentence)
      await openLocal(new File([await res.arrayBuffer()], file));
    } catch (err) { print(t('samples.failed', { name: file, why: err.message })); }
  };
  ui.hint.querySelector('[data-hint-sample]')?.addEventListener('click', openTrySample);
  const regSample = () => window.ccPalette?.register?.([{ id: 'cadcraft-sample', label: t('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openTrySample }]);
  if (window.ccPalette) regSample(); else window.addEventListener('load', regSample);
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
  // ---- the top area (0.9 SU.1083): compact = the toolbar's and the ribbon's words under the icons and group names go (tooltips and
  // screen readers keep them) and the bars are tighter; cadcraft.css `.cc.cc-top-compact` (the short-window fit's compact step, kept on) ----
  function applyTopArea() { root.classList.toggle('cc-top-compact', settings.topArea === 'compact'); applyToolbarRows(); }
  host.setTopArea = (mode) => { if (mode !== 'compact' && mode !== 'standard') return false; setRadio('ccTopArea', mode); applyTopArea(); return true; };
  host.getTopArea = () => settings.topArea;
  applyTopArea();
  // ---- the command line (0.9 SU.1083, cmdline.js): docked or floating, its height in history lines, F2 = the history pop-up ----
  const cmdLine = installCmdLine({ root, bar: root.querySelector('[data-cmd-bar]'), history: ui.history, form: ui.form, input: ui.input, settingsDlg,
    slug: settingsDlg?.getAttribute('data-app') || 'cadcraft', t, status, focus: () => focusCommandLine(),
    shortcutTaken: (k) => !!host.shortcuts && new Map(host.shortcuts.keys()).has(k) });
  host.cmdline = cmdLine;
  host.setCmdLines = (n) => cmdLine.lines(n);   // the layout-fit prompt (app-fit.js) asks for one line when the drawing is still short
  host.getCmdLines = () => cmdLine.state().lines;
  // Settings › General › Reset the layout is the shell's: it calls ccInput.resetLayout, so the toolbar goes back to the top with it
  // (until the shell announces a reset itself — see the log: For the owner)
  const hookShellReset = () => {   // the shell's script may load after this one: try again a few times
    const ci = window.ccInput;
    if (!ci || typeof ci.resetLayout !== 'function') return false;
    if (ci.resetLayout.cadcraftDock) return true;
    const shellReset = ci.resetLayout;
    ci.resetLayout = function () { host.setToolbarDock('top'); cmdLine.reset(); return shellReset.apply(this, arguments); };   // 0.9 SU.1083: the command line docks again
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
  // 0.10 DP.1: add-ons start after the first empty drawing is made; when the Default Policies arrive (or change) and that drawing is still untouched, it gets them
  onDefaults(() => { if (!tabs.pristine()) return; doc.meta.units = newDrawingUnits(); applyNewDrawingPolicy(doc); try { renderInfo(); } catch (e) { /* the status bar is not up yet */ } });

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
  installPlan();   // after the class hook: floors stamp what it stamped
  installArrays();   // ORS.2: Properties › Array
  installHatchExtras();   // ORS.7: Properties › Gradient
  installVpClip();   // ORS.16: Properties › Outline
  installWalls();
  host.floorsPanel = async () => { if (!host.floorsUi) { const { installFloorsPanel } = await import('./floors-ui.js'); host.floorsUi = installFloorsPanel({ stage: ui.stage, doc, host, el, t, print, ask, focusCommandLine }); } host.floorsUi.open(); };
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
  installTextStyles({ root, doc, host, el, t, print, focusCommandLine });   // 0.9 FX.92: STYLE's dialog
  installLayerManager({ root, doc, host, el, t, print, focusCommandLine, swatch, toHex6, nearestBasic, colorLabel });   // 0.9.1: LAYER's dialog (one place for all layer work)
  installBomDialog({ root, doc, host, el, t, print, focusCommandLine });   // 0.9.1: BOMEDIT's dialog (bomzones-ui.js)
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
    const bytes = format === 'dwg' ? saveDwg(doc, { version: dwgVersion() }).bytes : format === 'dxf2000b' ? textToBinaryDxf(writeDxf2000(doc).text) /* ORS.18 */ : new TextEncoder().encode((format === 'dxf2000' ? writeDxf2000(doc) : writeDxf(doc)).text);
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
  view.isoGrid = (ctx, step, major) => drawIsoGrid(ctx, view, step, major);   // ORS.10: the grid drawn isometric while ISODRAFT is on

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
        .then((m) => m.createWorkspace3D({ root, doc, engine, host, print, submit, closeMenus, coords: setCoords }))
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

  const { scheduleBlocks, insertBlock, renderBlocks, chooseBlock, beBar, showBlockEdit } = mountBlocks({
    ui, doc, view, host, engine, print, focusCommandLine, root,
  });

  const { plotPrefs, plotDialog } = mountPlot({
    ui, doc, host, engine, print, focusCommandLine, downloadBlob,
  });





  const { oneAtATime, openPicked, openHostFile, openLocal, openLocalNow, readDrawing, dwgModel, pickPictures, pickDrawing } = mountOpen({
    doc, view, host, engine, print, status, renderInfo, hideHint, focusCommandLine, tabs, localHist, offerAddons, renderTabs, ask, busy, root,
    get FILE_COMMANDS() { return FILE_COMMANDS; },
    get fileHost() { return fileHost; },
    get keepTarget() { return keepTarget; },
    get lastReport() { return lastReport; }, set lastReport(v) { lastReport = v; },
    get nextPdf() { return nextPdf; }, set nextPdf(v) { nextPdf = v; },
    get recoverNotes() { return recoverNotes; },
  });
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
    applyNewDrawingPolicy(doc);
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
  host.drawingLock = installDrawingLock({ host, fileHost, doc, t, print, ask, version: new URL(import.meta.url).pathname.split('/').slice(-2, -1)[0] || null });   // ORS.27: who has a drawing open (drawing-lock-ui.js; Studio only)
  const saveTargets = new Map();   // doc.meta.hostFile → the HostFile that drawing came from / was last saved to
  let targetSeq = 0;
  const keepTarget = (hf) => { const id = 'h' + (++targetSeq); saveTargets.set(id, hf); doc.meta.hostFile = id; };
  // 0.6.1 FIX-061-OPEN-HANG: Open from the toolbar or the command line runs as the OPEN command, and that command waits for
  // the file to open — so opening must never wait for the command that is running to finish when it is that one (it waited
  // forever: the drawing never opened and every later command hung behind it). A second Open while the dialog is still up
  // asks for no second dialog; files open one after another, never two loads at once.
  const FILE_COMMANDS = new Set(['OPEN', 'SAMPLES', 'RECOVER']);   // RECOVER: ORS.14
  fileHost.onOpenFiles(async (files) => { for (const f of files) await openHostFile(f); });

  // ORS.14 RECOVER (audit-cmd.js): pick one DXF or DWG and open it through readDrawing's tolerant branch. → null (nothing picked) | { file, notes, doc, failed? }
  let recoverNotes = null;
  host.recoverOpen = async () => {
    let files;
    try { files = await fileHost.openFile({ types: [{ description: t('files.type.drawings'), extensions: ['.dwg', '.dxf'] }] }); } catch { files = []; }
    const hf = (files || [])[0];
    if (!hf) return null;
    let file;
    try { const b = await hf.file(); file = b instanceof File ? b : new File([b], hf.name, { lastModified: hf.lastModified || Date.now() }); } catch { return { file: hf.name, failed: true, notes: [] }; }
    if (!/\.(dwg|dxf)$/i.test(file.name)) { print(t('app.open.wrong_type', { file: file.name })); return null; }
    const notes = [];
    const ok = await oneAtATime(async () => { recoverNotes = notes; try { return await openLocalNow(file, null); } finally { recoverNotes = null; } });
    focusCommandLine();
    return { file: file.name, notes, doc, failed: !ok };
  };









  ui.stage.append(beBar);

  const { quickSelectDialog, findDialog } = mountSelectDialogs({
    doc, colorLabel, focusCommandLine, root,
  });







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
  // 0.9 ED.1 (live-follow.js): a follower opens the leader's sheet — a layout object, or null for model space
  host.showSpace = (l) => { if (host.ws3d?.active) host.ws3d.hide(); doc.setSpace(l || null); applyCorner(); renderTabs(); view.invalidate(); };

  // ---- constraints and parameters (params-panel.js: the panel, glyphs, dimensional constraint labels) ----
  const params = createParamsPanel({ root, doc, view, engine, host, print, status, ask, focusCommandLine });
  wallLocks = installWallLocks(view, doc); host.wallLocks = wallLocks;   // after the constraints' overlay, which it draws over
  installWallIcons(root);

  // ---- APPLOAD, LISP routines and their dialogs, the aliases file, DELBLOCKS' list (appload.js, session cad-lisp) ----
  installLispUi({ root, engine, host, print, ask, focusCommandLine, el });
  host.blocksPanel = installBlocksPanel({ root, doc, engine, host, view, print, el, insertBlock, readDrawing, focusCommandLine });   // ORS.23
  renderBlocks();   // ORS.23
  installLispEditor({ root, engine, host, print, ask, focusCommandLine, el });   // ORS.31 (after installLispUi: the session and its worker are appload.js's)

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
  installFieldsUi({ host, doc, view });   // ORS.22 (fields-ui.js): after the panels that set view.extraOverlay
  installAgents({ doc, engine, host, view, print, canvases: [ui.base, ui.over], saveFile: (format) => saveFile(format || undefined),
    download: (name, data, mime) => downloadBlob(name, data, mime), report: () => lastReport });
  // ---- the shell's seven modules (docs/apps/shell-modules.md § Mounting; shell-mount.js) ----
  mountCadShell({ doc, control: fileHost.control, selected: () => [...host.selection], onSelection: (fn) => host.onSelectionChange(fn), setSelection: (s) => host.setSelection(s),
    describe: (e) => describeEntity(e), path: () => doc.meta.source || '', undoTo: (i) => { while (doc.undoStack.length > i && doc.canUndo) doc.undo(); } });

  // 0.8 DC.1 (apps-mount_PART_5): a pick is announced to the page (SuperCadCraft hears `cc-pick` and keeps one selection across its panels);
  // a related pick from another panel comes back through window.ccPickApply(refs). Both are inert outside Super.
  // SC.5 (sc-r5-select): `local` = the entity's handle as the project's object registry spells it (hex, as CadCraft's own links do), so a link that names
  // `<drawing>:<HANDLE>` finds the pick; a ref in that spelling is applied too. `window.ccPickers.cadcraft` = the same adapter by app name (several apps share one page in Super).
  // FX.240: a drawing opened from a DXF names its objects by the file's handles (dxf.js keeps them, dxf2000.js writes them back). In such a drawing an object
  // drawn since the last save has no name yet (its number could be another object's handle), so it says none until a save gives it one.
  const pickNamed = () => doc.all().some((x) => x && typeof x.handle === 'string');
  const pickLocal = (e, named = false) => (typeof e.handle === 'string' && /^[0-9A-Fa-f]{1,16}$/.test(e.handle) ? e.handle.toUpperCase() : !named && Number.isInteger(e.id) && e.id >= 0 ? e.id.toString(16).toUpperCase() : '');
  host.onSelectionChange(() => {
    try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: pickNow() })); } catch { /* no window */ }
  });
  function pickNow() {
    const ids = [...host.selection], named = ids.length ? pickNamed() : false;
    return { app: 'cadcraft', ids: ids.map(String), cls: (() => { const e = host.selection.size ? doc.get(ids[0]) : null; return e && e.layer ? String(e.layer) : undefined; })(),
      refs: ids.length <= 2000 ? ids.map((id) => { const e = doc.get(id), local = e ? pickLocal(e, named) : ''; return { id: String(id), ...(local ? { local } : {}) }; }) : undefined };
  }
  const pickFind = (raw) => {
    if (doc.get(raw)) return raw;
    if (/^\d+$/.test(String(raw)) && doc.get(Number(raw))) return Number(raw);
    const hex = String(raw).split(':').pop().toUpperCase();   // `<drawing>:<HANDLE>`, the registry's spelling
    if (!/^[0-9A-F]{1,16}$/.test(hex) || !String(raw).includes(':')) return null;
    const named = pickNamed(), e = doc.all().find((x) => x && pickLocal(x, named) === hex);
    return e ? e.id : null;
  };
  const pickApply = (refs) => {
    const real = (refs || []).map((r) => (r ? pickFind(r.id) : null)).filter((x) => x != null);
    if (!real.length) return false;
    host.setSelection(new Set(real)); return true;
  };
  window.ccPickApply = pickApply;
  (window.ccPickers = window.ccPickers || {}).cadcraft = { apply: pickApply, get: pickNow, clear: () => { if (host.selection.size) host.setSelection(new Set()); return true; } };

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
