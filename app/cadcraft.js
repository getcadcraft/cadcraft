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
import { installBlockParams } from './blockparams-ui.js';   // 0.11 SU.1804: the Parameters manager
import { penStrokes } from './pen-cad.js';   // 0.11 SU.1807
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
import { textToCborDxf } from './dxf-cbor.js';   // FX.391: Save as CBOR
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
import './office-cmd.js';   // OFFICESTANDARD (0.11 BK.181)
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
import { wallAxisSnaps } from './walls-snap.js';   // 0.10.1 (#1973): object snap on a wall's centre line
import { isWall, model as wallModel } from './plan2d/walls.js';
import './walls-tools.js';   // the wall tool's recipes in plan walls (0.9 WT.2/3/4/7, walls-plan-09)
import './mline-cmd.js';   // MLINE (0.9 FX.94)
import { installWalls, wallGripClick, wallGripPreview, wallGripCommit, wallGripGhost } from './walls-cmd.js';   // WALL, DOOR, WINDOW (0.9 PLAN2D.4)
import { installWallLocks } from './walls-locks.js';   // the Hold block's padlocks on the plan (0.9 WT.3, walls-plan-10)
import { installWallIcons } from './walls-ui.js';   // the wall tools' icons from the CadCraft icon set (0.9 WT.1)
import { installPlan } from './plan2d-cmd.js';   // FLOORS, LAYGROUP, HATCHEDIT, the hatch link (0.9 PLAN2D.1–3)
import { grouped, setGroupOpen, groupSwitch, setLayerGroup, groupsOf, deleteGroup, renameGroup } from './layergroups.js';   // 0.9 PLAN2D.2
import { installClasses } from './classes-cmd.js';   // CLASSES, CLASS, Properties › Class (0.8 SU.912, sx-classes)
import './vault-cmd.js';   // DOCUMENTS (DOCS): the project document manager (0.8 SU.1058, sx-vault)
import { CloudAttach, CLOUD_ACCEPT } from './cloud-cad.js';
import { installMaps } from './maps-cad.js';   // MAPLAYERS (0.5 SG.3; maplayers.js loads on first use)   // POINTCLOUDATTACH, POINTCLOUD (0.5 SG.1; the reader loads with the first cloud)
import './diagram-cmd.js';   // DIAGRAM: a diagram from Mermaid / PlantUML / D2 / a from-to list (0.8 SU.883)
import './gds-cmd.js';   // GDSIN: view an IC layout, a GDSII stream (0.8 SU.752 spike)
import './ole-cmd.js';   // OLELIST: the OLE objects a DWG carries (0.8 D7.23)
import { LIB as SHX_LIB, useDoc as shxUseDoc, keepFonts as shxKeepFonts } from './shx-text.js';   // SHX fonts you load (0.8 D8.7)
import { rescanFolder as shxRescan } from './shx-cmd.js';   // SHXFONTS
import { cadProblems, auditIds, auditReady } from './problems-cadcraft.js';   // 0.8 P.6: the file's findings as shared Problems
import './textmask-cmd.js';   // TEXTMASK (0.5 WL.8, cad-files)
import './xclip-cmd.js';   // XCLIP (0.5 WL.16, cad-files)
import { useLegacyDoc } from './legacy-text-cmd.js';   // ORS.21: LEGACYTEXT; old Vietnamese font text is shown decoded
import './audit-cmd.js';   // ORS.14: AUDIT, RECOVER
import { retype as keyRetype, PhysicalLine, keypadPoint, insertAt as keyInsertAt, setKeyLayoutPrefs } from './keylayout.js';   // ORS.25: commands on any keyboard layout; the keypad decimal key
import { auditProblemsAsync, fixAudit } from './audit.js';   // ORS.14: the findings in the Problems panel
import { isEmpty as auditListedEmpty } from './problems-cadcraft.js';   // ORS.14
import { PadDetector } from './wheel-pad.js';   // 0.7 D7.56
import { panButton, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and pan buttons (input-cadcraft.js)
import { mountSave } from './save-ui.js';
import { mountSelectDialogs } from './select-dialogs.js';
import { mountPlot } from './plot-ui.js';
import { mountTextEdit } from './text-edit.js';
import { mountBlocks } from './blocks-ui.js';
import { mountOpen } from './open-ui.js';
import { mountCadSettings } from './cadui-settings.js';
import { mountCadCmdline } from './cadui-cmdline.js';
import { mountCadToolbar } from './cadui-toolbar.js';
import { mountCadPointer } from './cadui-pointer.js';
import { mountCadShort } from './cadui-short.js';
import { mountCadTextEdit } from './cadui-textedit.js';
import { mountCadPointerCost } from './cadui-pointer-cost.js';
import { mountCadCycleGrips } from './cadui-cycle-grips.js';
import { mountCadKeysPaste } from './cadui-keys-paste.js';
import { mountCadLayers } from './cadui-layers.js';
import { mountCadFacts } from './cadui-facts.js';
import { mountCadLayoutBars } from './cadui-layout-bars.js';
import { mountCadPanes } from './cadui-panes.js';
import { mountCadMyTools } from './cadui-mytools.js';
import { mountCadTabs3d } from './cadui-tabs3d.js';
import { mountCadCorner } from './cadui-corner.js';

const root = document.querySelector('[data-cadcraft]');
/** The library needs getcadcraft.com's API: off in the self-hosted browser edition (devshell `#cc-edition` {library: false}). */
const libraryOn = (() => { try { const ed = JSON.parse(document.getElementById('cc-edition')?.textContent || 'null'); return !ed || ed.library !== false; } catch { return true; } })();
if (root) init(root);

function init(root) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const CS = { clipStore: undefined, nextPdf: undefined, accessUi: undefined, coordsNode: undefined, dynSize: undefined, typedAt: undefined, keyHintNow: undefined, statusTimer: undefined, lastRemember: undefined, lastKind: undefined, down: undefined, panning: undefined, pendingBox: undefined, gripEdit: undefined, vpCtxKey: undefined, lastRaw: undefined, cycle: undefined, drag: undefined, pinch: undefined, longPress: undefined, fitFrame: undefined, cancelEdit: undefined, snapOnceKind: undefined, acq: undefined, ptrResting: undefined, ptrRestTimer: undefined, ptrLoop: undefined, ptrLast: undefined, ptrMoved: undefined, ptrSkip: undefined, ptrMoveAt: undefined, nextGhost: undefined, lastIdleGhost: undefined, lastOffer: undefined, offerTimer: undefined, drawTimer: undefined, wallLocks: undefined, dynMenu: undefined, pasteWait: undefined, lastReport: undefined, layerCount: undefined, layerGroupsSeen: undefined, rowsFrame: undefined, ws3dLoad: undefined, targetSeq: undefined, recoverNotes: undefined, dragDepth: undefined, leaving: undefined };
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
  const { persist, setCursor, applyKeyLayout, setRadio } = mountCadSettings({
    settings,
    get view() { return view; },
    get settingsDlg() { return settingsDlg; },
    get RADIO_SETTINGS() { return RADIO_SETTINGS; },
  });

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
  // Paste point and what a click does to the selection: two radio groups in the same panel.
  const RADIO_SETTINGS = { ccPaste: 'pasteBase', ccPick: 'pick', ccCorner: 'corner', ccLasso: 'lasso', ccTabs: 'tabs', ccSelTotals: 'selTotals', ccTrimDrag: 'trimDrag', ccEmptyClick: 'emptyClick', ccTypedCoords: 'typedCoords', ccKeylayout: 'keyLayout', ccKeylayoutKeypad: 'keypadPoint', ccPointer: 'pointer', ccAutocomplete: 'autocomplete', ccDetails: 'details', ccFileKeys: 'fileKeys', ccToolbarRows: 'toolbarRows', ccToolbarDock: 'toolbarDock', ccTopArea: 'topArea' };
  applyKeyLayout();
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
  CS.clipStore = null;
  try { CS.clipStore = window.localStorage; } catch { CS.clipStore = null; }
  const clipboard = new Clipboard(CS.clipStore);

  // ---- host for the command engine ----
  const commandHooks = new Set();
  const selListeners = new Set();   // listeners of the selection (host.onSelectionChange; the shell's design reasons, shell-mount.js)
  const { scheduleProps, renderSelTotals, renderProps, fmtL, fmtA, renderInfo, renderToolbar, hideHint, openTrySample, regSample } = mountCadFacts({
    CS, ui, settings, doc, root,
    get props() { return props; },
    get host() { return host; },
    get NEEDS_OBJECTS() { return NEEDS_OBJECTS; },
    get print() { return print; },
    get openLocal() { return openLocal; },
  });
  const { applyMove, pointerRested, applyPointerLight, setPointerMode, watchPointer, pointerSteppedDown, autoGhosts, withNextGhost, acceptGhost, dismissGhost, offerDetails } = mountCadPointerCost({
    CS, ui, settings, doc, view, fmtL, root,
    get ptrSaved() { return ptrSaved; },
    get moveCursor() { return moveCursor; },
    get governor() { return governor; },
    get refreshCursor() { return refreshCursor; },
    get ptrNote() { return ptrNote; },
    get ptrAuto() { return ptrAuto; },
    get auto() { return auto; },
    get engine() { return engine; },
    get host() { return host; },
    get AUTO_REACH_PX() { return AUTO_REACH_PX; },
    get status() { return status; },
  });
  const { canSelectNow, wantsPoint, updateCursorMode, pointFor, moveCursor, refreshCursor } = mountCadTextEdit({
    CS, settings, doc, view, pointerRested, autoGhosts, withNextGhost, fmtL,
    get engine() { return engine; },
    get acquired() { return acquired; },
    get host() { return host; },
    get dynPoint() { return dynPoint; },
    get governor() { return governor; },
    get setCoords() { return setCoords; },
    get renderDyn() { return renderDyn; },
  });
  const { print, setPrompt, parseL, isLen, setCoords, dynPoint, renderDyn, keypadDot, submit, suggest } = mountCadCmdline({
    CS, ui, settings, doc, view, updateCursorMode, fmtL,
    get engine() { return engine; },
    get dyn() { return dyn; },
    get host() { return host; },
    get dynBox() { return dynBox; },
    get physLine() { return physLine; },
    get typed() { return typed; },
    get drop() { return drop; },
  });
  const { applyToolbarRows, applyToolbarDock, applyTopArea, hookShellReset, setToolbarDisplay, toolbarDisplay, focusCommandLine } = mountCadLayoutBars({
    CS, ui, settings, view, root,
    get ROW_BARS() { return ROW_BARS; },
    get host() { return host; },
    get cmdLine() { return cmdLine; },
  });
  const { applyCorner, downloadBlob, ask, newDrawing, keepTarget, busy, confirmLeave } = mountCadCorner({
    CS, ui, settings, doc, view, renderInfo, print, focusCommandLine, root,
    get cube2d() { return cube2d; },
    get host() { return host; },
    get fileHost() { return fileHost; },
    get saveFile() { return saveFile; },
    get tabs() { return tabs; },
    get saveTargets() { return saveTargets; },
  });
  const { getvarForMacro, historyKey, stampAddons, offerAddons, currentBytes, drawingOf, sheetSetHere } = mountCadMyTools({
    settings, doc, busy,
    get saveTargets() { return saveTargets; },
    get saveFormat() { return saveFormat; },
    get dwgVersion() { return dwgVersion; },
    get readDrawing() { return readDrawing; },
    get host() { return host; },
  });
  const { dwgVersion, saveFormat, exportSet, saveFile, writeDrawing, saveAs } = mountSave({
    doc, view, print, renderInfo, focusCommandLine, stampAddons, root,
    get engine() { return engine; },
    get host() { return host; },
    get saveTargets() { return saveTargets; },
    get fileHost() { return fileHost; },
    get keepTarget() { return keepTarget; },
    get localHist() { return localHist; },
  });
  const { closeMenus, toggle, placeSnapMenu, status, rememberView, zoomPrevious } = mountCadToolbar({
    CS, ui, settings, persist, doc, view, renderDyn, refreshCursor, root,
    get toggles() { return toggles; },
    get acquired() { return acquired; },
    get dyn() { return dyn; },
    get engine() { return engine; },
    get snapMenu() { return snapMenu; },
    get snapBox() { return snapBox; },
    get viewHist() { return viewHist; },
  });
  const { renderTabs, open3d } = mountCadTabs3d({
    CS, ui, settings, doc, view, hideHint, print, submit, setCoords, sheetSetHere, closeMenus, applyCorner, busy, root,
    get engine() { return engine; },
    get leaveViewport() { return leaveViewport; },
    get host() { return host; },
  });
  const host = {
    cursor: null, selection: new Set(), shift: false,
    clipboard, settings,
    print, prompt: setPrompt,
    onSelectionChange(fn) { selListeners.add(fn); return () => selListeners.delete(fn); },   // the shell's design reasons (shell-mount.js)
    setSelection(set) { CS.accessUi?.onSelection(set); host.selection = new Set(set); if (set.windows?.length) host.selection.windows = set.windows; view.state.selection = host.selection; refreshGrips(); scheduleProps(); offerDetails(); view.invalidate(); layersForViewport(); for (const f of selListeners) f(); },
    pickAt: (p) => cycledAt(p) ?? view.pick(p, undefined, engine.busy),   // Tab cycling (cycleTab) wins while the pointer stays put; ORS.28: a command never picks on a locked layer
    pickWindow: (w, crossing) => view.pickWindow(w, crossing, true),   // ORS.28: commands only (the idle window calls view.pickWindow itself)
    pickLasso: (pts, mode) => lassoHits(doc.all().filter((e) => doc.editable(e)), pts, mode, doc.blocks, (e) => view.boundsOf(e)),
    setLasso(on) { setRadio('ccLasso', on ? 'lasso' : 'box'); status(t(on ? 'status.lasso.on' : 'status.lasso.off')); },   // LASSOMODE
    editText: (e) => editText(e),   // MTEXT / TEXTEDIT: the in-place editor
    quickSelect: (o) => quickSelectDialog(o),   // QSELECT
    findDialog: (o) => findDialog(o),   // FIND
    onBlockEdit: (be) => showBlockEdit(be),   // BEDIT / BCLOSE: the banner
    pickRadius: () => view.cursorSpec().pick / (view.zoom || 1),   // the pick tolerance in drawing units (BVSHOW, DB.9)
    cancelEdit: () => { if (!CS.cancelEdit) return false; CS.cancelEdit(); return true; },
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
    status: busy,
    zoomWindow: (a, b, o = {}) => { rememberView(); view.fitPoints([a, b], o.exact ? 1 : 0.9); },   // in a turned view: the window as it lies on screen
    zoomPrevious,
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
    choose: ask,
    // INSERT, option Library; LIBRARY; the Blocks panel's "Library…"
    // (the self-hosted browser edition has no getcadcraft.com API: the commands say so, no network call)
    library: () => { if (libraryOn) return lib.pick(); print(t('lib.edition.off')); return Promise.resolve(null); },
    libraryPlaced: (item) => lib.placed(item),
    openLibrary: (o) => { if (libraryOn) lib.open(o); else print(t('lib.edition.off')); },
    /** The model area on screen (for plotting "what is on screen"), when the model is open. */
    viewExtents: () => (doc.inModel ? { minX: view.toWorld(0, view.h).x, minY: view.toWorld(0, view.h).y, maxX: view.toWorld(view.w, 0).x, maxY: view.toWorld(view.w, 0).y } : null),
    // the 3D tab (ws3d.js, loaded the first time it opens; commands3d.js): the workspace while it shows, opening it, downloads
    ws3d: null,
    open3d,
    saveBlob: downloadBlob,
    plotPrefs: () => ({ ink: plotPrefs.ink || 'mono', style: plotPrefs.style || '', pen: +(plotPrefs.pen || 0.25) }),   // PUBLISH plots as the Plot dialog last did (a sheet's own table first)
    render3dTabs: renderTabs,
  };
  host.cloud = new CloudAttach({ doc: () => doc, redraw: () => view.invalidate(true), on3d: () => host.ws3d?.cloudChanged?.() });
  // under the drawing: map layers (maps-cad.js), then a point cloud
  const maps = installMaps({ root, attrib: root.querySelector('.cc-canvases'), view, doc, say: print, busy, ask, refocus: focusCommandLine });
  host.maps = maps;
  view.underlay = (ctx, T, v) => { maps.paint(ctx, T, v); host.cloud.draw(ctx, T, v); };
  const pdfUi = installPdfUnder({ root, view, doc });   // PDF pages under the drawing (0.7 D7.24: pdfunder-ui.js)
  installScanUi({ root, view, doc, host });   // scanned drawings: file chooser, PDF pages as pictures, snap to raster lines (0.7 LC.6: scan-ui.js)
  CS.nextPdf = null;   // a PDF chosen in Open: the next PDFATTACH / PDFIMPORT takes it instead of asking for a file
  host.pickPdfs = ({ multiple = false } = {}) => { if (CS.nextPdf) { const f = CS.nextPdf; CS.nextPdf = null; return Promise.resolve([f]); } return pdfUi.pick(multiple); };
  view.underlayKey = () => host.cloud.version + '|' + maps.key();
  setPlotCloud(() => host.cloud);   // 0.10 FX.297: a plot prints the point cloud too (PDF, SVG, PNG, printer)
  view.snapExtra = (p, r) => host.cloud.snap(p, r);
  // 0.10.1 (#1973): object snap on a plan wall's centre line (walls-snap.js), under the kinds that are switched on
  view.snapWalls = (p, r, kinds, base, nearby) => { const ws = nearby.filter(isWall).map(wallModel).filter(Boolean); return ws.length ? wallAxisSnaps(ws, p, r, kinds, base, (k) => t('plan2d.snap.axis.' + k)) : null; };
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
        run: async () => { await auditReady(doc); return [...cadProblems({ doc, report: CS.lastReport }, { t, shx: SHX_LIB }), ...(await auditProblemsAsync(doc, { t, skip: auditListedEmpty }))]; },   // ORS.14: AUDIT's findings too (0.11 PERF.9: in slices)
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
  CS.accessUi = null;   // drafting without sight (access-ui.js), once mounted below

  // ---- dynamic input (F12; dynin.js): the values by the crosshair; typing still goes to the command line ----
  const dyn = new DynInput();
  dyn.parseAngle = (x) => { const r = readAngle(x); return r.ok ? r.value : NaN; };
  /**
   * The coordinate readout, written on every pointer move: the same text node, its words changed in place, and only when they
   * differ. (0.9.1, suggestion #1504: `textContent =` swaps the node, which woke every observer of the page's tree on each move
   * — the toolbar rows, the tooltips, the tab strips, the menu states — and each of them measured the page again.)
   */
  CS.coordsNode = null;
  const dynBox = el('div', { className: 'cc-dyn', hidden: true, 'aria-hidden': 'true' });
  ui.stage.append(dynBox);
  CS.dynSize = null;
  window.addEventListener('resize', () => { CS.dynSize = null; });

  // ---- command line ----
  const typed = [];
  CS.typedAt = -1;
  ui.form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
  // ORS.25: the line as physical keys (for a command typed with a non-Latin layout), and the keypad decimal key as a point
  const physLine = new PhysicalLine();
  CS.keyHintNow = null;
  host.keyHint = (line) => (CS.keyHintNow && CS.keyHintNow.of === line ? CS.keyHintNow.keys : null);
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
      CS.typedAt = e.key === 'ArrowUp' ? Math.max(0, (CS.typedAt < 0 ? typed.length : CS.typedAt) - 1) : Math.min(typed.length, CS.typedAt + 1);
      ui.input.value = typed[CS.typedAt] ?? '';
      suggest();
      return;
    }
    if (e.key === 'Tab' && !e.shiftKey && !ui.input.value && acceptGhost()) { e.preventDefault(); return; }
    if (e.key === 'Tab' && ui.suggest.dataset.cmd) { e.preventDefault(); ui.input.value = ui.suggest.dataset.cmd; suggest(); return; }
    if (e.key === 'Tab' && !e.shiftKey && !ui.input.value && cycleTab()) e.preventDefault();
  });
  ui.input.addEventListener('input', () => { physLine.after(ui.input.value); /* ORS.25 */ suggest(); if (dyn.on) refreshCursor(); else renderDyn(); });


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
      const feed = () => { if (!rest.length || !engine.waiting) return; engine.text(rest.shift(), { script: true }); setTimeout(feed, 0); };   // OPT.1: a button's macro is English
      setTimeout(feed, 0);
    });
  }

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
  snapBox.dataset.popfit = 'off';   // FX (Imtaar 2026-11-21): app-popfit.js measured it inside the clipped status bar and cut it to 64px below the screen; it places itself
  snapMenu.addEventListener('toggle', placeSnapMenu);
  addEventListener('resize', placeSnapMenu);
  document.addEventListener('pointerdown', (e) => { if (snapMenu.open && !snapMenu.contains(e.target)) snapMenu.open = false; });

  CS.statusTimer = 0;

  // ---- zoom previous: up to 10 views per tab; a run of wheel steps or one pan counts once ----
  const viewHist = new Map();
  CS.lastRemember = 0;
  CS.lastKind = '';

  // ---- pointer ----
  CS.down = null;         // { x, y, button, world }
  CS.panning = null;      // { x, y }
  CS.pendingBox = null;   // first corner of a click-click window (world)
  CS.gripEdit = null;     // { id, key, from }
  CS.vpCtxKey = '';       // what the Layers panel's freeze-in-viewport column last showed (VP.2)
  CS.lastRaw = null;
  CS.cycle = null;        // Tab cycling: { at (world), ids, i } (cycleTab)
  CS.drag = null;         // press and drag: { kind 'lasso' | 'path' (TRIM / EXTEND), start (screen), pts (world), mode } (lasso.js)

  const { cycleTab, cycledAt, gripAt, click, selectionBase, finishBox, onDynGrip, commitGrip, escapeKey, rightClick, cancelLocal, refreshGrips } = mountCadCycleGrips({
    CS, ui, settings, doc, view, dismissGhost, wantsPoint, canSelectNow, pointFor, updateCursorMode, refreshCursor, dynPoint, suggest, submit, status, host, engine, scheduleProps, focusCommandLine,
    get params() { return params; },
  });
  const { startDrag, dragMove, cancelDrag, finishDrag, useTouch, touchDown, touchMove, touchUp } = mountCadPointer({
    CS, settings, view, rememberView, host, engine, selectionBase, rightClick, cancelLocal, root,
    get keyRow() { return keyRow; },
    get touchPts() { return touchPts; },
    get stagePos() { return stagePos; },
  });
  // while dragging a lasso, Space cycles window → crossing → fence and Esc drops it (before the command line sees the key);
  // Shift switches TRIM ↔ EXTEND, so the preview follows it at once
  document.addEventListener('keydown', (e) => {
    if (CS.drag && CS.drag.kind === 'lasso' && e.key === ' ') { e.preventDefault(); e.stopPropagation(); CS.drag.mode = nextMode(CS.drag.mode || 'window'); view.state.lasso = { pts: CS.drag.pts, mode: CS.drag.mode }; view.invalidate(); return; }
    if (CS.drag && e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); CS.down = null; cancelDrag(); return; }
    if (e.key === 'Shift' && !host.shift && engine.waiting?.opts.path) { host.shift = true; if (CS.lastRaw) moveCursor(CS.lastRaw); }
  }, true);
  document.addEventListener('keyup', (e) => { if (e.key === 'Shift' && host.shift && engine.waiting?.opts.path) { host.shift = false; if (CS.lastRaw) moveCursor(CS.lastRaw); } }, true);

  // ---- touch (S.8): a second finger cancels what the first began and the two pinch-zoom and pan; a long press is a
  // right click (Enter); fingers get bigger grips and pick boxes and the key row under the command line ----
  const touchPts = new Map();   // pointerId → point over the canvases
  CS.pinch = null;
  CS.longPress = 0;
  ui.over.addEventListener('pointercancel', (e) => {
    touchPts.delete(e.pointerId); clearTimeout(CS.longPress);
    CS.pinch = null; CS.down = null; CS.panning = null;
    if (CS.drag) cancelDrag();
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
  CS.fitFrame = 0;
  const { switchPane, viewportAt, enterViewport, commitViewport, leaveViewport } = mountCadPanes({
    doc, view, scheduleProps, print, host, engine, refreshGrips, renderTabs, applyCorner, root,
    get tabs() { return tabs; },
    get renderLayers() { return renderLayers; },
  });
  const { fitSoon, stagePos, pos, paneFromEvent, dropCrosshair, dev3d, devAt3d } = mountCadShort({
    CS, ui, view, renderDyn, host, keyRow, FIT, switchPane, root,
  });
  if (typeof ResizeObserver === 'function') { const ro = new ResizeObserver(fitSoon); ro.observe(root); ro.observe(ui.stage); }
  window.addEventListener('resize', fitSoon);
  fitSoon();


  ui.over.addEventListener('contextmenu', (e) => e.preventDefault());
  ui.over.addEventListener('pointerdown', (e) => {
    moveGate.flush();
    if (e.pointerType === 'touch' && touchDown(e)) return;   // a second finger: pinch and pan (S.8)
    try { ui.over.setPointerCapture(e.pointerId); } catch { /* a synthetic or already-lifted pointer: nothing to capture */ }
    if (paneFromEvent(e) && e.button === 0) { CS.down = null; return; }   // the first click into another pane only makes it active (as AutoCAD)
    const p = pos(e);
    host.shift = e.shiftKey; host.alt = e.altKey;
    if (e.button === 1) { e.preventDefault(); if (!panButton(1)) { CS.down = null; return; } rememberView('pan'); CS.panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: unless the style took middle-pan away
    if (view.entered && e.button === 0 && !view.insideEntered(p.x, p.y)) { CS.down = null; return; }   // outside the entered viewport: only a double-click (leave) acts
    CS.down = { ...p, button: e.button, world: view.toWorld(p.x, p.y), moved: false };
  });
  ui.over.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' && touchMove(e)) return;
    const p = pos(e);
    host.shift = e.shiftKey; host.alt = e.altKey;
    if (view.panes) { const sp = stagePos(e), hp = view.paneAt(sp.x, sp.y); if (hp !== view.hoverPane) { view.hoverPane = hp; view.invalidate(); } }
    if (CS.panning) { view.panBy(p.x - CS.panning.x, p.y - CS.panning.y); CS.panning = p; }
    else if (CS.drag) dragMove(p);
    else if (CS.down && !CS.down.moved && Math.hypot(p.x - CS.down.x, p.y - CS.down.y) > (e.pointerType === 'touch' ? 10 : 4)) {   // a finger wobbles more
      CS.down.moved = true;
      clearTimeout(CS.longPress);
      if (CS.down.button === 2) { if (panButton(2)) { rememberView('pan'); CS.panning = p; ui.over.classList.add('is-panning'); } }   // IP.3: right-drag pans only where the style says so
      else if (CS.down.button === 0 && engine.expects === 'entity' && engine.waiting?.opts.path && !CS.gripEdit) startDrag('path', p);   // TRIM / EXTEND: a freehand path
      else if (CS.down.button === 0 && canSelectNow() && !CS.gripEdit && !CS.pendingBox) {
        const g = gripAt(CS.down);
        if (g && g.shape) { CS.down = null; onDynGrip(g); }   // a dynamic block's grip: no drag of its own yet (DB.5)
        else if (g) CS.gripEdit = { id: g.id, key: g.key, from: { x: g.x, y: g.y } };
        else if (settings.lasso !== 'box') startDrag('lasso', p);
        else view.state.box = { a: CS.down.world, b: CS.down.world };
      }
    }
    CS.lastRaw = view.toWorld(p.x, p.y);
    watchPointer(!!(CS.panning || CS.drag || CS.down));
    moveGate.push(applyMove);   // at once, or folded into this frame's one update when moves come faster than frames (pointer-perf.js)
  });
  ui.over.addEventListener('pointerup', (e) => {
    moveGate.flush();
    if (e.pointerType === 'touch' && touchUp(e)) return;
    const p = pos(e);
    if (CS.panning) { CS.panning = null; ui.over.classList.remove('is-panning'); CS.down = null; return; }
    if (CS.drag) { CS.down = null; finishDrag(); return; }
    if (!CS.down) return;
    const d = CS.down; CS.down = null;
    const raw = view.toWorld(p.x, p.y);
    if (d.button === 2) { if (!d.moved) rightClick(); return; }
    if (d.button !== 0) return;
    if (view.state.box) { finishBox(view.state.box.a, raw); return; }
    if (CS.gripEdit && d.moved) { commitGrip(pointFor(raw)); return; }
    click(raw);
    CS.cycle = null;
  });
  ui.over.addEventListener('pointerleave', dropCrosshair);
  // The crosshair is painted on the canvas, so a popup that opens under a still pointer (a dialog, a menu, a floating panel) left it showing
  // with no pointerleave to clear it: drop it when any pointer move lands outside the drawing, and when a modal dialog opens.
  document.addEventListener('pointermove', (e) => { if (view.state.cursor && !CS.down && !ui.over.contains(e.target) && e.target !== ui.over) dropCrosshair(); }, true);
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
      if (CS.lastRaw) moveCursor(view.toWorld(p.x, p.y));
      return;
    }
    const step = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    rememberView('wheel');
    view.zoomAt(p.x, p.y, Math.pow(1.0018, -step * (e.ctrlKey ? 1 : wheelFactor())));   // IP.3: the style's wheel (a pinch stays as it is)
    if (CS.lastRaw) moveCursor(view.toWorld(p.x, p.y));
  }, { passive: false });
  ui.over.addEventListener('auxclick', (e) => { if (e.button === 1 && e.detail === 2) { rememberView(); view.fit(); } });
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
  installTablesUi({ host, doc, view, engine, stage: ui.stage, focus: focusCommandLine });   // ORS.1 (tables-ui.js)
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
  CS.cancelEdit = null;   // closes an open editor without saving (Esc, or another command starting)
  const { editText } = mountTextEdit({
    ui, doc, view, fmtL, focusCommandLine,
    get cancelEdit() { return CS.cancelEdit; }, set cancelEdit(v) { CS.cancelEdit = v; },
  });



  CS.snapOnceKind = null;   // FX.34: an object snap typed at a point prompt ('mid', 'end' …), for the next pick only
  host.snapOnce = (k) => { if (CS.snapOnceKind === (k || null)) return; CS.snapOnceKind = k || null; view.invalidate(); };

  // Object snap tracking: rest the pointer on a snap point to acquire it (again to drop it); up to 7, for one command.
  const acquired = [];
  CS.acq = null;   // { x, y, timer }


  // ---- the pointer's cost (0.9.1, suggestion #1504; pointer-perf.js) ----
  // One update per frame; and Settings › CadCraft › Smoother pointer on slower computers (Automatic / On / Off): "light" =
  // the system's crosshair pointer instead of a drawn one, and the object under the pointer is looked up when it rests.
  // Automatic watches the frames while the pointer moves and turns light on, once, with a note, when they stay slow.
  // Under browser automation (navigator.webdriver: tests, screenshots, films) Automatic never steps down and every move is
  // applied at once, unless localStorage cadcraft.pointer says { "auto": true } (browser-pointer-lag.mjs).
  const ptrSaved = (() => { try { return JSON.parse(localStorage.getItem('cadcraft.pointer') || '{}') || {}; } catch { return {}; } })();
  const ptrAuto = !navigator.webdriver || ptrSaved.auto === true;
  const governor = new PointerGovernor({ mode: settings.pointer, stepped: !!ptrSaved.stepped });
  const moveGate = frameGate({ frame: (cb) => requestAnimationFrame(cb), gap: ptrAuto ? 12 : 0 });
  view.beforeFrame = () => moveGate.flush();
  document.addEventListener('keydown', () => moveGate.flush(), true);
  CS.ptrResting = false;
  CS.ptrRestTimer = 0;
  // the frames while the pointer moves: a loop that runs only then, and never counts a frame spent panning, dragging or zooming
  CS.ptrLoop = 0;
  CS.ptrLast = 0;
  CS.ptrMoved = false;
  CS.ptrSkip = false;
  CS.ptrMoveAt = 0;
  ui.over.addEventListener('wheel', () => { CS.ptrSkip = true; }, { passive: true });
  document.addEventListener('visibilitychange', () => governor.rest());
  doc.on((kind) => { if (kind === 'load') governor.rest(); });
  // the note, once: what was turned down and where to change it
  const ptrNote = el('div', { className: 'cc-ptr-note', role: 'status', hidden: true },
    el('p', {}, el('strong', {}, t('ptr.note.title')), ' ', t('ptr.note.body')),
    el('button', { type: 'button', className: 'cc-hint-close', 'aria-label': t('ptr.note.close'), dataset: { ptrNoteClose: '' }, onclick: () => { ptrNote.hidden = true; focusCommandLine(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' })));
  ui.stage.append(ptrNote);
  applyPointerLight();
  host.pointerPerf = { get light() { return governor.light; }, get mode() { return governor.mode; }, get stepped() { return governor.stepped; }, setMode: (m) => { setRadio('ccPointer', m); setPointerMode(settings.pointer); }, feed: (dt) => { const r = ptrAuto ? governor.frame(dt) : null; if (r === 'down') pointerSteppedDown(); return r; }, gate: moveGate };

  // ---- drawing autocomplete (0.8 EG.54): ghosts of what the drawing's own patterns say comes next; Tab accepts, Esc dismisses ----
  const auto = new Autocomplete(doc);
  auto.on = settings.autocomplete !== 'off';
  const AUTO_REACH_PX = 140;   // a ghost shows while the cursor is within this many screen pixels of it
  // EG.54: a running LINE / PLINE: the ghost of its next point (nextPoint, autocomplete.js) while the cursor is near it; Tab clicks it
  CS.nextGhost = null;
  CS.lastIdleGhost = '';
  host.getAutocomplete = () => auto.on;
  // ---- drafting without sight (0.8 EG.52): spoken results, a keyboard cursor, snap sounds, voice (access-ui.js) ----
  CS.accessUi = mountAccess({
    doc, view, engine, host, ui, settings, fmt: fmtL, moveCursor,
    click, runLine: (s) => { ui.input.value = s; submit(); }, cancel: escapeKey,
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
  CS.lastOffer = '';
  CS.offerTimer = 0;
  host.getDetailsHint = () => settings.details !== 'off';
  host.setDetailsHint = (on) => setRadio('ccDetails', on ? 'on' : 'off');
  doc.on(() => { if (view.state.preview.some((g) => g.auto)) view.state.preview = []; });
  // ... and while drawing: once a command has finished and nothing is selected, the newest dozen objects are matched the same way
  CS.drawTimer = 0;
  doc.on((kind) => {
    if (kind !== 'change') return;
    clearTimeout(CS.drawTimer);
    if (settings.details === 'off' || host.selection?.size) return;
    CS.drawTimer = setTimeout(() => {
      if (settings.details === 'off' || host.selection?.size || engine.busy) return;
      const o = offerFor(doc, null, { recent: 12 });
      if (o && o.id !== CS.lastOffer) { CS.lastOffer = o.id; status(t('details.offer', { name: o.name })); }
    }, 900);
  });


  CS.wallLocks = null;

  // ---- a dynamic block's grips (0.5 DB.5; dyngrips.js): the visibility grip opens the list of states; the others show where
  // their parameters are, and say they don't act yet ----
  CS.dynMenu = null;
  host.dynGrip = (g) => onDynGrip(g);



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
      if (k === 'v' && !e.shiftKey && !textKeys) { clearTimeout(CS.pasteWait); CS.pasteWait = setTimeout(() => { CS.pasteWait = 0; editKey('PASTECLIP'); }, 80); return; }
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
  CS.pasteWait = 0;
  document.addEventListener('paste', (e) => {
    const tgt = e.target;
    if (tgt !== ui.input && tgt?.closest?.('input, textarea, select, [contenteditable="true"], dialog')) return;   // someone else's field
    if (tgt === ui.input && (ui.input.value !== '' || engine.expects === 'string')) return;   // text typed at the command line
    const ours = !!CS.pasteWait;
    clearTimeout(CS.pasteWait); CS.pasteWait = 0;
    const item = [...(e.clipboardData?.items || [])].find((i) => i.kind === 'file' && /^image\/(png|jpeg)$/i.test(i.type));
    // ORS.1: spreadsheet cells on the clipboard (text with tabs) become a table, unless CadCraft's own copy is waiting to be pasted
    const cells = ours && !item && !engine.busy ? e.clipboardData?.getData('text/plain') : '';
    if (cells && tablesLooksLikeCells(cells)) { if (host.tablesCellsWin?.()) { e.preventDefault(); tablesSetPaste(cells); engine.run('TABLEPASTE'); return; } print(t('tables.paste.hint')); }
    // FX.399 (lab pass 32): one line of plain text pasted into the EMPTY command line goes into the box when CadCraft's own clipboard holds nothing
    if (tgt === ui.input && !item) {
      const one = String(e.clipboardData?.getData('text/plain') || '').replace(/\r?\n$/, '');
      if (one && !/[\r\n]/.test(one) && one.length <= 1000 && !clipboard.get().clip) { e.preventDefault(); ui.input.value = one; ui.input.dispatchEvent(new Event('input', { bubbles: true })); return; }
    }
    if (!item && !ours) return;
    e.preventDefault();
    if (item) pastePicture(item.getAsFile()); else editKey('PASTECLIP');
  }, true);
  const { pastePicture, pastePictureFromApi, editKey } = mountCadKeysPaste({
    CS, doc, view, print, status, closeMenus, host, engine,
  });
  for (const b of root.querySelectorAll('[data-paste-picture]')) b.addEventListener('click', pastePictureFromApi);


  // ---- layers panel ----
  const ACI_NAMES = { 1: t('app.aci.red'), 2: t('app.aci.yellow'), 3: t('app.aci.green'), 4: t('app.aci.cyan'), 5: t('app.aci.blue'), 6: t('app.aci.magenta'), 7: t('app.ink_black_white'), 8: t('app.aci.gray'), 9: t('app.light_gray') };
  const { swatch, layersForViewport, renderLayers, setCurrent, colorLabel } = mountCadLayers({
    CS, ui, doc, view, print, status, host, ACI_NAMES, scheduleProps, root, toHex6, nearestBasic,
  });
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


  // ---- properties panel (props.js; session cad-props) ----
  const props = createPropsPanel({
    root, ui, doc, view, host, engine, status, print, colorLabel, ACI_NAMES, setCurrent, fmtL, fmtA,
    lib: { open: (x) => lib.open(x) },
    pickAdd: { get: () => settings.pick === 'add', set: (on) => setRadio('ccPick', on ? 'add' : 'replace') },
    ucsIcon: { get: () => settings.corner !== 'none', set: (on) => { setRadio('ccCorner', on ? 'auto' : 'none'); applyCorner(); } },
  });
  host.props = props;
  installRibbonControls({ doc, controls: props.controls, setCurrent, t });


  // ---- drawing facts ----
  CS.lastReport = null;

  CS.layerCount = 0;

  CS.layerGroupsSeen = null;   // FX.401
  // Toolbar availability: a button that cannot do anything on this drawing right now is greyed out
  const NEEDS_OBJECTS = new Set(['MOVE', 'COPY', 'ROTATE', 'SCALE', 'MIRROR', 'STRETCH', 'OFFSET', 'TRIM', 'EXTEND', 'FILLET', 'CHAMFER', 'EXPLODE', 'ERASE',
    'BLOCK', 'COPYCLIP', 'PLOT', 'ZOOM E', 'ZOOM W']);

  doc.on((kind) => {
    if (kind === 'load') viewHist.clear();   // zoom previous starts again with each drawing
    if (kind === 'layers' || kind === 'load' || doc.layers.size !== CS.layerCount || doc.meta.layerGroups !== CS.layerGroupsSeen) { CS.layerCount = doc.layers.size; CS.layerGroupsSeen = doc.meta.layerGroups; renderLayers(); }   // FX.401: an undone group rename redraws the panel too
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

  ui.hint.querySelector('[data-hint-close]')?.addEventListener('click', () => { hideHint(); focusCommandLine(); });   // CP.1 (GJoe2)
  ui.hint.querySelector('[data-hint-sample]')?.addEventListener('click', openTrySample);
  if (window.ccPalette) regSample(); else window.addEventListener('load', regSample);
  ui.hint.querySelector('[data-hint-tour]')?.addEventListener('click', () => { hideHint(); host.startTour?.(); });   // 0.7 D7.06
  settingsDlg?.querySelector('[data-set-tour]')?.addEventListener('click', () => { settingsDlg.close?.(); host.startTour?.(); });
  {   // OPT.1: Settings › CadCraft › Option letters: edit, import and export the person's own letters for command options (appload.js)
    const box = settingsDlg?.querySelector('[data-optkeys-settings]');
    if (box) {
      const out = box.querySelector('[data-optkeys-count]');
      const count = (note = '') => { if (out) out.textContent = t('set.optkeys.count', { n: host.optionKeysCount?.() ?? 0 }) + (note ? ' ' + note : ''); };
      box.querySelector('[data-optkeys-edit]')?.addEventListener('click', async () => { settingsDlg.close?.(); if (engine.busy) { engine.escape(); await engine.done; } await engine.run('OPTIONKEYS'); });
      box.querySelector('[data-optkeys-import]')?.addEventListener('click', async () => { const r = await host.optionKeysImport?.(); if (r) count(r.note); });
      box.querySelector('[data-optkeys-export]')?.addEventListener('click', () => host.optionKeysExportFile?.());
      // OPT.2: the file follows the account; say where it stands (and take the account's copy when Settings opens)
      const where = box.querySelector('[data-optkeys-account]');
      const account = () => { if (!where) return; const st = host.optionKeysAccount?.() || { state: 'local', code: 'signed-out' }; where.textContent = t(st.state === 'saved' ? 'set.optkeys.account.saved' : st.state === 'offline' ? 'set.optkeys.account.offline' : st.state === 'error' ? 'set.optkeys.account.error' : 'set.optkeys.account.local'); where.dataset.state = st.state; };
      const refresh = () => { count(); account(); host.optionKeysSync?.({ connect: true }).then(() => { count(); account(); }).catch(() => {}); };
      box.querySelector('[data-optkeys-import]')?.addEventListener('click', () => setTimeout(account, 1500));
      new MutationObserver(() => { if (settingsDlg.open) refresh(); }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
      count(); account();
    }
  }
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
  CS.rowsFrame = 0;
  host.setToolbarDock = (side) => { if (!['top', 'bottom', 'left', 'right'].includes(side)) return false; setRadio('ccToolbarDock', side); applyToolbarDock(); return true; };
  host.getToolbarDock = () => settings.toolbarDock;
  host.setTopArea = (mode) => { if (mode !== 'compact' && mode !== 'standard') return false; setRadio('ccTopArea', mode); applyTopArea(); return true; };
  host.getTopArea = () => settings.topArea;
  applyTopArea();
  // ---- the command line (0.9 SU.1083, cmdline.js): docked or floating, its height in history lines, F2 = the history pop-up ----
  const cmdLine = installCmdLine({ root, bar: root.querySelector('[data-cmd-bar]'), history: ui.history, form: ui.form, input: ui.input, settingsDlg,
    slug: settingsDlg?.getAttribute('data-app') || 'cadcraft', t, status, focus: focusCommandLine,
    shortcutTaken: (k) => !!host.shortcuts && new Map(host.shortcuts.keys()).has(k) });
  host.cmdline = cmdLine;
  host.setCmdLines = (n) => cmdLine.lines(n);   // the layout-fit prompt (app-fit.js) asks for one line when the drawing is still short
  host.getCmdLines = () => cmdLine.state().lines;
  if (!hookShellReset()) for (const ms of [300, 1000, 3000, 8000]) setTimeout(hookShellReset, ms);
  new ResizeObserver(applyToolbarRows).observe(root);
  new MutationObserver(applyToolbarRows).observe(root, { childList: true, subtree: true, attributeFilter: ['data-shell-tb', 'hidden'] });
  new MutationObserver(applyToolbarRows).observe(document.body, { attributes: true, attributeFilter: ['data-shell-tb'] });
  document.fonts?.ready.then(applyToolbarRows);
  applyToolbarRows();
  applyToolbarDock();
  /** Icons + text → icons → text (the shell's Toolbar buttons setting; same radios as Settings › General). */
  const TB_CYCLE = ['both', 'icons', 'labels'];
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


  // ---- split screen (panes.js, view.js; VPORTS, View › More) ----
  const dividers = createDividers(ui.base.parentElement, {
    get: () => (view.panes ? { layout: view.panes.layout, fx: view.panes.fx, fy: view.panes.fy, W: view.W, H: view.H } : null),
    set: (key, f) => view.setSplit(key, f),
    label: (key) => t(key === 'fx' ? 'panes.divider.v' : 'panes.divider.h'),
  });
  view.onPanes = () => dividers.render();
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
  host.report = { get: () => CS.lastReport, set: (r) => { CS.lastReport = r; } };
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

  view.onLeaveRequest = () => leaveViewport();
  view.onEnteredLost = () => { view.entered = null; root.classList.remove('is-in-viewport'); renderTabs(); applyCorner(); };
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
  installBlockParams({ root, doc, host, el, t, print, focusCommandLine });   // 0.11 SU.1804: BPARAMS's dialog
  host.penStroke = penStrokes(window);   // 0.11 SU.1807: the last pen stroke from the shell's app-pen.js (only where PEN_SHARED prints #cc-pen)
  host.clientToWorld = (x, y) => { const r = ui.over.getBoundingClientRect(); return view.toWorld(x - r.left, y - r.top); };
  host.pickOfficeFile = async () => { try { const [f] = await fileHost.openFile({ types: [{ description: t('office.file.type'), extensions: ['.json'] }] }); return f || null; } catch { return null; } };   // 0.11 BK.181: OFFICESTANDARD Import
  installLayerManager({ root, doc, host, el, t, print, focusCommandLine, swatch, toHex6, nearestBasic, colorLabel });   // 0.9.1: LAYER's dialog (one place for all layer work)
  installBomDialog({ root, doc, host, el, t, print, focusCommandLine });   // 0.9.1: BOMEDIT's dialog (bomzones-ui.js)
  // the menu styles (0.5 IP.3, input-cadcraft.js + the shell's app-input-ui.js): their messages go to the status bar, and
  // letters stay CadCraft's while a command runs or something is typed at the command line
  window.ccInputHooks = { status: (text) => status(text || ''), busy: () => engine.busy || ui.input.value !== '' };
  host.turnView =(tw) => { if (view.turnTo(tw)) { refreshGrips(); status(t(Math.abs(tw) > 1e-12 ? 'cmd.plan.turned' : 'cmd.plan.world', { ang: fmt(deg(normAngle(tw))) })); } };
  host.viewTwist = () => view.tw || 0;
  host.ucsChanged = () => { view.invalidate(true); if (CS.lastRaw) moveCursor(CS.lastRaw); };
  // COMPARESETTINGS (0.5 WL.12; compare-ui.js): this drawing against itself or another open one
  host.compareSettings = () => openCompare({ root, el, t, has: hasKey, doc, print,
    docs: () => tabs.list.map((r) => { const d = tabs.docOf(r.id); return { id: r.id, name: d.meta.name || 'Drawing', doc: d }; }),
    onChange: (d) => { if (d === doc) { renderLayers(); scheduleProps(); view.invalidate(true); } } }).then(() => focusCommandLine());
  // HISTORY (0.7 D7.31; history-ui.js): the copies Studio keeps on this computer each time it saves, and the cloud's versions of a
  // drawing opened from there. The page only reads: nothing is uploaded, and the cloud's token stays in the shell.
  const deskBridge = window.cadcraftDesktop && Number(window.cadcraftDesktop.version) >= 1 ? window.cadcraftDesktop : null;
  const localHist = deskBridge && globalThis.indexedDB ? new LocalHistory() : null;
  const cloudHist = deskBridge?.cloud ? new CloudHistory(deskBridge.cloud) : null;
  host.stampAddons = stampAddons;
  host.offerAddons = offerAddons;
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


  // ---- the 3D tab: ws3d.js (and three.js) load the first time it opens ----
  CS.ws3dLoad = null;
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
  host.applyCorner = applyCorner;
  host.cube2d = cube2d;

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
    get lastReport() { return CS.lastReport; }, set lastReport(v) { CS.lastReport = v; },
    get nextPdf() { return CS.nextPdf; }, set nextPdf(v) { CS.nextPdf = v; },
    get recoverNotes() { return CS.recoverNotes; },
  });



  ui.file.addEventListener('change', () => { const f = ui.file.files[0]; ui.file.value = ''; if (f) openLocal(f); });

  // Files through the shell's host adapter (0.4 W2.18; host.js): Open is the browser's picker or the desktop's dialog, files
  // the app was started with or handed later (desktop double-click, an installed web app) open in tabs, and SAVE writes the
  // drawing back where it came from on the desktop (in the browser it stays a download).
  const fileHost = getHost({ app: 'cadcraft' });
  host.drawingLock = installDrawingLock({ host, fileHost, doc, t, print, ask, version: new URL(import.meta.url).pathname.split('/').slice(-2, -1)[0] || null });   // ORS.27: who has a drawing open (drawing-lock-ui.js; Studio only)
  const saveTargets = new Map();   // doc.meta.hostFile → the HostFile that drawing came from / was last saved to
  CS.targetSeq = 0;
  // 0.6.1 FIX-061-OPEN-HANG: Open from the toolbar or the command line runs as the OPEN command, and that command waits for
  // the file to open — so opening must never wait for the command that is running to finish when it is that one (it waited
  // forever: the drawing never opened and every later command hung behind it). A second Open while the dialog is still up
  // asks for no second dialog; files open one after another, never two loads at once.
  const FILE_COMMANDS = new Set(['OPEN', 'SAMPLES', 'RECOVER']);   // RECOVER: ORS.14
  fileHost.onOpenFiles(async (files) => { for (const f of files) await openHostFile(f); });

  // ORS.14 RECOVER (audit-cmd.js): pick one DXF or DWG and open it through readDrawing's tolerant branch. → null (nothing picked) | { file, notes, doc, failed? }
  CS.recoverNotes = null;
  host.recoverOpen = async () => {
    let files;
    try { files = await fileHost.openFile({ types: [{ description: t('files.type.drawings'), extensions: ['.dwg', '.dxf'] }] }); } catch { files = []; }
    const hf = (files || [])[0];
    if (!hf) return null;
    let file;
    try { const b = await hf.file(); file = b instanceof File ? b : new File([b], hf.name, { lastModified: hf.lastModified || Date.now() }); } catch { return { file: hf.name, failed: true, notes: [] }; }
    if (!/\.(dwg|dxf)$/i.test(file.name)) { print(t('app.open.wrong_type', { file: file.name })); return null; }
    const notes = [];
    const ok = await oneAtATime(async () => { CS.recoverNotes = notes; try { return await openLocalNow(file, null); } finally { CS.recoverNotes = null; } });
    focusCommandLine();
    return { file: file.name, notes, doc, failed: !ok };
  };









  ui.stage.append(beBar);

  const { quickSelectDialog, findDialog } = mountSelectDialogs({
    doc, colorLabel, focusCommandLine, root,
  });








  // drop a file anywhere on the stage
  CS.dragDepth = 0;
  ui.stage.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types?.includes('Files')) { e.preventDefault(); CS.dragDepth++; ui.drop.hidden = false; } });
  ui.stage.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
  ui.stage.addEventListener('dragleave', () => { if (--CS.dragDepth <= 0) { CS.dragDepth = 0; ui.drop.hidden = true; } });
  ui.stage.addEventListener('drop', (e) => {
    e.preventDefault(); CS.dragDepth = 0; ui.drop.hidden = true;
    fileHost.fromDrop(e.dataTransfer).then(async (files) => { for (const f of files) await openHostFile(f); });   // each in its own tab
  });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  CS.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (tabs.anyDirty() && !CS.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !tabs.anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmLeave())) return;
    CS.leaving = true;
    setTimeout(() => location.assign(url.href), doc.dirty ? 0 : 800);
  });

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
  CS.wallLocks = installWallLocks(view, doc);
  host.wallLocks = CS.wallLocks;   // after the constraints' overlay, which it draws over
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
    download: downloadBlob,
    openDrawing: async (drawing, name) => { if (!tabs.pristine()) await tabs.add({ name }); doc.load({ ...drawing, meta: { ...(drawing.meta || {}), name } }); },
  }).catch((err) => console.warn('add-ons did not start:', err));   // i18n-ignore (developer message)

  // ---- AI assistants and scripts (0.4 part 2 X.5, session agents; agents.js on host.js's control channel): tools only, off until Settings › Assistants ----
  installFieldsUi({ host, doc, view });   // ORS.22 (fields-ui.js): after the panels that set view.extraOverlay
  installAgents({ doc, engine, host, view, print, canvases: [ui.base, ui.over], saveFile: (format) => saveFile(format || undefined),
    download: downloadBlob, report: () => CS.lastReport });
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
