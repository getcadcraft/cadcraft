/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-cadcraft.js — CadCraft's command registry for the shell's input engine (0.5 track IP.3; engine
 * assets/js/app-input.js + app-input-ui.js, map docs/apps/app-input.md; manifest "input": "input-cadcraft.js").
 * DOM-free data, plus hooks() which runs only on the page.
 *
 * COMMANDS: every toolbar command (ui.inc $__tools, $__more, the Edit and Parametric menus, the 3D group of
 * <template data-tools-3d>), the Layers panel's tools, the status bar's drafting aids and the Model / 3D tabs.
 *   id       stable id (people's own styles and .ccinput.json files name it — never rename one)
 *   sel      the app's own button the shell clicks (one code path for every style). Toolbar buttons are found inside their
 *            group ([data-tb-key="…"]), because the 3D group repeats MOVE, COPY, ROTATE and ERASE
 *   in3d     the button is in the 3D group: it runs on the 3D tab (hooks().prepare opens it first)
 *   tab      the command works on the Model tab and the sheets (hooks().prepare leaves the 3D tab first)
 *   defKeys  CadCraft's own keys (cadcraft.js's keydown handler): the CadCraft style. Letters are never keys here: CadCraft
 *            types them into its command line (aliases such as L, C, TR are typed words, not keys)
 *   optional the button exists only sometimes (the 3D group once the 3D tab has opened; Open in ModelCraft where ModelCraft
 *            takes a hand-off)
 * Labels are text keys `input.cmd.<id>` in lang/en.json.
 *
 * STYLES: CadCraft (today's toolbar), Drafting classic (a ribbon laid out like the classic drafting programs; CadCraft's
 * own command line and aliases stay), Ribbon (a ribbon of plain task tabs). Named for a way of working, never for a product.
 * MACROS + CARRY: the keys people gave commands with SHORTCUTS (WL.18, `cadcraft.shortcuts`) are carried once into their own
 * style ("My CadCraft keys") and run through hooks().runText.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });
const T = (grp, cmd) => `[data-tb-key="${grp}"] [data-cmd="${cmd}"]`;   // a 2D toolbar button inside its group
const D3 = (cmd) => `.cc-tool-group[aria-label="3D"] [data-cmd="${cmd}"]`;   // a button of the 3D group (ws3d.js)
const tab = { tab: true };
const in3d = { in3d: true, optional: true };
const WALL = (id, group, icon, cmd, ccic) => C(id, group, icon, T('Walls', cmd), { tab: true, cmd, ...(ccic ? { ccic } : {}) });   // a plan wall tool (the toolbar's Walls group)

// ORS (builder draft): the registry ids these rows add, by menu group; both ribbon styles spread them into their More lists
const ORS_DRAFT = {
  draw: ['draw.divide', 'draw.measure-along', 'draw.boundary', 'draw.blend', 'draw.region'],   // ORS.9, ORS.13
  modify: ['modify.chspace', 'modify.extrim', 'modify.offsetgaptype', 'modify.group', 'modify.ungroup', 'modify.groupedit', 'modify.pickstyle'],   // ORS.9, ORS.30, ORS.8
  blocks: ['blocks.pasteblock', 'blocks.blockreplace', 'blocks.minsert'],   // ORS.9
  tools: ['tools.isodraft', 'tools.isoplane', 'tools.massprop'],   // ORS.10, ORS.13
};

// ORS (builder blocks): ORS.23 the Blocks panel, ORS.24 smart blocks, ORS.31 the LISP editor
const ORS_BLOCKS = { blocks: ['blocks.palette', 'blocks.bconvert', 'blocks.bsearch', 'blocks.breplace'], tools: ['tools.lispedit'] };

// ORS (builder arrays): ORS.2 arrays that stay editable, ORS.7 gradient fills, ORS.29 the boundary from a hatch, ORS.16 clipped viewports
const ORS_ARRAYS = { draw: ['draw.gradient'], modify: ['modify.arraypath', 'modify.arrayedit', 'modify.arrayclose', 'modify.arrayassoc', 'modify.hatchgb'], sheets: ['sheets.vpclip'] };
// ORS.6 / ORS.15 / ORS.26 (builder "dims"): more dimension kinds and tools, multileader editing, annotation scales of objects
const ORS_DIMS = { dims: ['annotate.dimordinate', 'annotate.dimarc', 'annotate.dimjogged', 'annotate.dimjogline', 'annotate.qdim', 'annotate.dimbreak', 'annotate.dimspace', 'annotate.diminspect', 'annotate.dimoverride', 'annotate.dimreassociate', 'annotate.dimdisassociate', 'annotate.centermark', 'annotate.centerline'], notes: ['annotate.mleaderedit', 'annotate.mleaderalign', 'annotate.mleadercollect', 'annotate.objectscale', 'annotate.annoallvisible'] };
// ORS (lead, 2026-11-12): the rest of the Owner Research Suggested commands (builders cleanup, tables, textio, touch), so both ribbon
// styles reach them through the same More lists (bin/test-app-input.mjs: every command reachable from the style's menus)
ORS_DRAFT.modify.push('modify.overkill', 'modify.draworder', 'modify.texttofront', 'modify.hatchtoback', 'modify.flatten');
ORS_DIMS.dims.push('annotate.txt2mtxt', 'annotate.breakline', 'annotate.legacytext', 'annotate.table', 'annotate.tabledit', 'annotate.tablestyle', 'annotate.tableexport',
  'annotate.tablepaste', 'annotate.datalink', 'annotate.datalinkupdate', 'annotate.field', 'annotate.updatefield', 'annotate.dwgprops');
ORS_DRAFT.blocks.push('blocks.burst', 'blocks.ncopy', 'blocks.dataextraction', 'blocks.counttable');
ORS_DRAFT.tools.push('view.isolateobjects', 'view.hideobjects', 'view.unisolateobjects', 'view.laylockfade', 'view.touch-crosshair', 'file.whohas', 'file.audit', 'file.recover');


export const COMMANDS = [
  C('file.new', 'file', 'bi-file-earmark-plus', T('File', 'NEW')),
  C('file.open', 'file', 'bi-folder2-open', T('File', 'OPEN'), { defKeys: ['Ctrl+O'] }),
  C('file.save', 'file', 'bi-download', T('File', 'SAVE'), { defKeys: ['Ctrl+S'] }),
  C('file.saveas', 'file', 'bi-file-earmark-arrow-down', T('File', 'SAVEAS'), { defKeys: ['Ctrl+Shift+S'] }),
  C('file.plot', 'file', 'bi-printer', T('File', 'PLOT'), { defKeys: ['Ctrl+P'] }),
  C('file.samples', 'file', 'bi-journal-richtext', '.cc-sec-head [data-cmd="SAMPLES"]'),   // 0.6 DF.9: the Drawing section's link (the File group has no room for a More menu at 1440 px)

  C('draw.line', 'draw', 'bi-slash-lg', T('Draw', 'LINE'), tab),
  C('draw.pline', 'draw', 'bi-vector-pen', T('Draw', 'PLINE'), tab),
  C('draw.wall', 'draw', 'bi-bricks', T('Draw', 'WALL'), tab),   // 0.9 PLAN2D.4
  C('draw.door', 'draw', 'bi-door-open', T('Draw', 'DOOR'), tab),
  C('draw.window', 'draw', 'bi-window', T('Draw', 'WINDOW'), tab),
  C('draw.circle', 'draw', 'bi-circle', T('Draw', 'CIRCLE'), tab),
  C('draw.arc', 'draw', 'bi-bezier2', T('Draw', 'ARC'), tab),
  C('draw.arc-3p', 'draw', 'bi-bezier2', T('Draw', 'ARC 3P'), tab),
  // i18n-ignore-start: command names the ribbon runs, not words (words-11)
  C('draw.arc-sce', 'draw', 'bi-bezier2', T('Draw', 'ARC SCE'), tab),
  C('draw.arc-sca', 'draw', 'bi-bezier2', T('Draw', 'ARC SCA'), tab),
  C('draw.arc-scl', 'draw', 'bi-bezier2', T('Draw', 'ARC SCL'), tab),
  C('draw.arc-sea', 'draw', 'bi-bezier2', T('Draw', 'ARC SEA'), tab),
  C('draw.arc-sed', 'draw', 'bi-bezier2', T('Draw', 'ARC SED'), tab),
  C('draw.arc-ser', 'draw', 'bi-bezier2', T('Draw', 'ARC SER'), tab),
  C('draw.arc-cse', 'draw', 'bi-bezier2', T('Draw', 'ARC CSE'), tab),
  C('draw.arc-csa', 'draw', 'bi-bezier2', T('Draw', 'ARC CSA'), tab),
  C('draw.arc-csl', 'draw', 'bi-bezier2', T('Draw', 'ARC CSL'), tab),
  C('draw.arc-con', 'draw', 'bi-bezier2', T('Draw', 'ARC CON'), tab),
  // i18n-ignore-end
  C('draw.rectang', 'draw', 'bi-square', T('Draw', 'RECTANG'), tab),
  C('draw.polygon', 'draw', 'bi-hexagon', T('Draw', 'POLYGON'), tab),
  C('draw.ellipse', 'draw', 'bi-egg', T('Draw', 'ELLIPSE'), tab),
  C('draw.text', 'draw', 'bi-type', T('Draw', 'TEXT'), tab),
  C('draw.mtext', 'draw', 'bi-text-paragraph', T('Draw', 'MTEXT'), tab),
  C('draw.textstyle', 'draw', 'bi-fonts', T('Draw', 'STYLE'), tab),
  C('draw.mline', 'draw', 'bi-list', T('Draw', 'MLINE'), tab),
  C('draw.hatch', 'draw', 'bi-grid-3x3', T('Draw', 'HATCH'), tab),
  C('draw.gradient', 'draw', 'bi-shadows', T('Draw', 'GRADIENT'), tab),   // ORS.7
  C('draw.point', 'draw', 'bi-dot', T('Draw', 'POINT'), tab),
  C('draw.circle-ttr', 'draw', 'bi-circle', T('Draw', 'CIRCLE T'), tab),
  C('draw.circle-ttt', 'draw', 'bi-circle', T('Draw', 'CIRCLE TTT'), tab),
  C('draw.xline', 'draw', 'bi-arrows', T('Draw', 'XLINE'), tab),
  C('draw.ray', 'draw', 'bi-arrow-up-right', T('Draw', 'RAY'), tab),
  C('draw.sketchlive', 'draw', 'bi-pencil', T('Draw', 'SKETCHLIVE'), tab),   // 0.8 EG.55
  C('draw.sketchfix', 'draw', 'bi-pencil-square', T('Draw', 'SKETCHFIX'), tab),
  C('draw.divide', 'draw', 'bi-distribute-horizontal', T('Draw', 'DIVIDE'), tab),   // ORS.9
  C('draw.measure-along', 'draw', 'bi-rulers', T('Draw', 'MEASURE'), tab),   // ORS.9
  C('draw.boundary', 'draw', 'bi-bounding-box', T('Draw', 'BOUNDARY'), tab),   // ORS.9
  C('draw.blend', 'draw', 'bi-bezier2', T('Draw', 'BLEND'), tab),   // ORS.9
  C('draw.region', 'draw', 'bi-pentagon-half', T('Draw', 'REGION'), tab),   // ORS.13

  // 0.9 WT.1 (walls-plan-10): the plan wall tools, the toolbar's Walls group. Ids are the DU.1 icon set's wall.* ids (app-workspace-icons.js), so a
  // layout shows the CadCraft wall icons; `ccic` names the drawing for CadCraft's own toolbar and menu styles (walls-ui.js). Registry groups stay
  // draw (the tools that make walls) and modify (the rest), the groups SuperCad Studio's Build and Layout tool sets list.
  WALL('wall.line', 'draw', 'bi-bricks', 'WALL', 'wallplan'),
  WALL('wall.rect', 'draw', 'bi-square', 'WALLRECT', 'wallrect'),
  WALL('wall.rectrot', 'draw', 'bi-diamond', 'WALLROT', 'wallrectrot'),
  WALL('wall.polygon', 'draw', 'bi-hexagon', 'WALLPOLY', 'wallpoly'),
  WALL('wall.arccentre', 'draw', 'bi-circle-half', 'WALLARC', 'wallarcc'),
  WALL('wall.arctangent', 'draw', 'bi-bezier', 'WALLTAN', 'walltan'),
  WALL('wall.pick', 'draw', 'bi-cursor', 'WALLPICK', 'wallpick'),
  WALL('wall.trace', 'draw', 'bi-magic', 'WALLTRACE', 'walltrace'),
  WALL('wall.split', 'modify', 'bi-scissors', 'WALLSPLIT', 'wallsplit'),
  WALL('wall.splitgap', 'modify', 'bi-distribute-horizontal', 'WALLSPLITGAP', 'wallsplitgap'),
  WALL('wall.delsegment', 'modify', 'bi-eraser', 'WALLDELSEG', 'walldelseg'),
  WALL('wall.connect', 'modify', 'bi-link', 'WALLREJOIN', 'walljoin'),
  WALL('wall.editdim', 'modify', 'bi-arrow-left-right', 'WALLDIM', 'walleditdim'),
  WALL('wall.offset', 'modify', 'bi-distribute-vertical', 'WALLOFFSET', 'walloffset'),
  WALL('wall.boxstretch', 'modify', 'bi-bounding-box', 'WALLSTRETCH', 'wallbox'),
  WALL('wall.alignlock', 'modify', 'bi-lock', 'WALLHOLD', 'wallalignlock'),
  WALL('wall.lockdim', 'modify', 'bi-lock-fill', 'WALLHOLDDIM', 'walllockdim'),
  WALL('wall.gridlock', 'modify', 'bi-grid-3x3', 'WALLGRID', 'grid'),
  WALL('wall.unlock', 'modify', 'bi-unlock', 'WALLUNHOLD', ''),   // no drawing of its own in the icon set: the Bootstrap icon shows
  WALL('wall.locks', 'modify', 'bi-list-check', 'WALLHOLDS', 'checklist'),
  WALL('wall.disallow', 'modify', 'bi-slash-circle', 'WALLDISJOIN', 'walldisjoin'),
  WALL('wall.joinstyle', 'modify', 'bi-bounding-box-circles', 'WALLJOINSTYLE', 'walljoinstyle'),   // 0.9 WT.5
  WALL('wall.joins', 'modify', 'bi-link-45deg', 'WALLJOINS', 'walljoinsw'),

  C('modify.move', 'modify', 'bi-arrows-move', T('Modify', 'MOVE'), tab),
  C('modify.copy', 'modify', 'bi-copy', T('Modify', 'COPY'), tab),
  C('modify.rotate', 'modify', 'bi-arrow-repeat', T('Modify', 'ROTATE'), tab),
  C('modify.scale', 'modify', 'bi-arrows-angle-expand', T('Modify', 'SCALE'), tab),
  C('modify.mirror', 'modify', 'bi-symmetry-vertical', T('Modify', 'MIRROR'), tab),
  C('modify.stretch', 'modify', 'bi-arrows-expand-vertical', T('Modify', 'STRETCH'), tab),
  C('modify.offset', 'modify', 'bi-distribute-vertical', T('Modify', 'OFFSET'), tab),
  C('modify.trim', 'modify', 'bi-scissors', T('Modify', 'TRIM'), tab),
  C('modify.extend', 'modify', 'bi-arrow-up-right', T('Modify', 'EXTEND'), tab),
  C('modify.fillet', 'modify', 'bi-bezier', T('Modify', 'FILLET'), tab),
  C('modify.chamfer', 'modify', 'bi-triangle-half', T('Modify', 'CHAMFER'), tab),
  C('modify.explode', 'modify', 'bi-asterisk', T('Modify', 'EXPLODE'), tab),
  C('modify.erase', 'modify', 'bi-eraser', T('Modify', 'ERASE'), tab),
  C('modify.array', 'modify', 'bi-grid-3x2', T('Modify', 'ARRAY'), tab),
  C('modify.arraypath', 'modify', 'bi-bezier2', T('Modify', 'ARRAYPATH'), tab),   // ORS.2
  C('modify.arrayedit', 'modify', 'bi-grid-3x2-gap', T('Modify', 'ARRAYEDIT'), tab),   // ORS.2
  C('modify.arrayclose', 'modify', 'bi-check2-square', T('Modify', 'ARRAYCLOSE'), tab),   // ORS.2
  C('modify.arrayassoc', 'modify', 'bi-toggles', T('Modify', 'ARRAYASSOCIATIVITY'), tab),   // ORS.2
  C('modify.hatchgb', 'modify', 'bi-bounding-box', T('Modify', 'HATCHGENERATEBOUNDARY'), tab),   // ORS.29
  C('modify.join', 'modify', 'bi-link', T('Modify', 'JOIN'), tab),
  C('modify.matchprop', 'modify', 'bi-brush', T('Modify', 'MATCHPROP'), tab),
  C('modify.break', 'modify', 'bi-scissors', T('Modify', 'BREAK'), tab),
  C('modify.lengthen', 'modify', 'bi-arrows', T('Modify', 'LENGTHEN'), tab),
  C('modify.overkill', 'modify', 'bi-intersect', T('Modify', 'OVERKILL'), tab),   // ORS.3
  C('modify.draworder', 'modify', 'bi-layers-half', T('Modify', 'DRAWORDER'), tab),   // ORS.4
  C('modify.texttofront', 'modify', 'bi-front', T('Modify', 'TEXTTOFRONT'), tab),   // ORS.4
  C('modify.hatchtoback', 'modify', 'bi-back', T('Modify', 'HATCHTOBACK'), tab),   // ORS.4
  C('modify.flatten', 'modify', 'bi-arrows-collapse', T('Modify', 'FLATTEN'), tab),   // ORS.12
  C('modify.align', 'modify', 'bi-align-start', T('Modify', 'ALIGN'), tab),   // 0.6 DF.2
  C('modify.alignpanel', 'modify', 'bi-distribute-horizontal', T('Modify', 'ALIGNPANEL'), tab),
  C('modify.chspace', 'modify', 'bi-box-arrow-in-down-right', T('Modify', 'CHSPACE'), tab),   // ORS.9
  C('modify.extrim', 'modify', 'bi-scissors', T('Modify', 'EXTRIM'), tab),   // ORS.30
  C('modify.offsetgaptype', 'modify', 'bi-bounding-box-circles', T('Modify', 'OFFSETGAPTYPE'), tab),   // ORS.30
  C('modify.group', 'modify', 'bi-collection', T('Modify', 'GROUP'), tab),   // ORS.8
  C('modify.ungroup', 'modify', 'bi-collection-fill', T('Modify', 'UNGROUP'), tab),   // ORS.8
  C('modify.groupedit', 'modify', 'bi-pencil-square', T('Modify', 'GROUPEDIT'), tab),   // ORS.8
  C('modify.pickstyle', 'modify', 'bi-hand-index', T('Modify', 'PICKSTYLE'), tab),   // ORS.8

  C('annotate.dimlinear', 'annotate', 'bi-arrow-left-right', T('Annotate', 'DIMLINEAR'), tab),
  C('annotate.dimaligned', 'annotate', 'bi-arrows-angle-contract', T('Annotate', 'DIMALIGNED'), tab),
  C('annotate.dimangular', 'annotate', 'bi-triangle', T('Annotate', 'DIMANGULAR'), tab),
  C('annotate.dimradius', 'annotate', 'bi-record-circle', T('Annotate', 'DIMRADIUS'), tab),
  C('annotate.dimdiameter', 'annotate', 'bi-slash-circle', T('Annotate', 'DIMDIAMETER'), tab),
  C('annotate.mleader', 'annotate', 'bi-arrow-up-left', T('Annotate', 'MLEADER'), tab),
  C('annotate.dimcontinue', 'annotate', 'bi-arrow-left-right', T('Annotate', 'DIMCONTINUE'), tab),
  C('annotate.dimbaseline', 'annotate', 'bi-arrow-left-right', T('Annotate', 'DIMBASELINE'), tab),
  C('annotate.dimordinate', 'annotate', 'bi-arrow-bar-up', T('Annotate', 'DIMORDINATE'), tab),   // ORS.6
  C('annotate.dimarc', 'annotate', 'bi-rainbow', T('Annotate', 'DIMARC'), tab),   // ORS.6
  C('annotate.dimjogged', 'annotate', 'bi-lightning', T('Annotate', 'DIMJOGGED'), tab),   // ORS.6
  C('annotate.dimjogline', 'annotate', 'bi-activity', T('Annotate', 'DIMJOGLINE'), tab),   // ORS.6
  C('annotate.qdim', 'annotate', 'bi-lightning-charge', T('Annotate', 'QDIM'), tab),   // ORS.6
  C('annotate.dimbreak', 'annotate', 'bi-scissors', T('Annotate', 'DIMBREAK'), tab),   // ORS.6
  C('annotate.dimspace', 'annotate', 'bi-distribute-vertical', T('Annotate', 'DIMSPACE'), tab),   // ORS.6
  C('annotate.diminspect', 'annotate', 'bi-search', T('Annotate', 'DIMINSPECT'), tab),   // ORS.6
  C('annotate.dimoverride', 'annotate', 'bi-sliders', T('Annotate', 'DIMOVERRIDE'), tab),   // ORS.6
  C('annotate.dimreassociate', 'annotate', 'bi-link-45deg', T('Annotate', 'DIMREASSOCIATE'), tab),   // ORS.6
  C('annotate.dimdisassociate', 'annotate', 'bi-x-circle', T('Annotate', 'DIMDISASSOCIATE'), tab),   // ORS.6
  C('annotate.centermark', 'annotate', 'bi-plus-circle', T('Annotate', 'CENTERMARK'), tab),   // ORS.6
  C('annotate.centerline', 'annotate', 'bi-dash-lg', T('Annotate', 'CENTERLINE'), tab),   // ORS.6
  C('annotate.mleaderedit', 'annotate', 'bi-arrow-up-left-circle', T('Annotate', 'MLEADEREDIT'), tab),   // ORS.15
  C('annotate.mleaderalign', 'annotate', 'bi-align-start', T('Annotate', 'MLEADERALIGN'), tab),   // ORS.15
  C('annotate.mleadercollect', 'annotate', 'bi-collection', T('Annotate', 'MLEADERCOLLECT'), tab),   // ORS.15
  C('annotate.objectscale', 'annotate', 'bi-aspect-ratio', T('Annotate', 'OBJECTSCALE'), tab),   // ORS.26
  C('annotate.annoallvisible', 'annotate', 'bi-eye', T('Annotate', 'ANNOALLVISIBLE'), tab),   // ORS.26
  C('annotate.revcloud', 'annotate', 'bi-cloud', T('Annotate', 'REVCLOUD'), tab),
  C('annotate.txt2mtxt', 'annotate', 'bi-text-paragraph', T('Annotate', 'TXT2MTXT'), tab),   // ORS.12
  C('annotate.breakline', 'annotate', 'bi-activity', T('Annotate', 'BREAKLINE'), tab),   // ORS.12
  C('annotate.legacytext', 'annotate', 'bi-translate', T('Annotate', 'LEGACYTEXT'), tab),   // ORS.21: old Vietnamese font text to Unicode
  C('annotate.redline', 'annotate', 'bi-cloud-check', T('Annotate', 'REDLINE'), tab),   // 0.8 EG.19: a MarkupCraft redline package → revision clouds and a log
  C('annotate.table', 'annotate', 'bi-table', T('Annotate', 'TABLE'), tab),   // ORS.1
  C('annotate.tabledit', 'annotate', 'bi-pencil-square', T('Annotate', 'TABLEDIT'), tab),   // ORS.1
  C('annotate.tablestyle', 'annotate', 'bi-border-style', T('Annotate', 'TABLESTYLE'), tab),   // ORS.1
  C('annotate.tableexport', 'annotate', 'bi-filetype-csv', T('Annotate', 'TABLEEXPORT'), tab),   // ORS.1
  C('annotate.tablepaste', 'annotate', 'bi-clipboard-data', T('Annotate', 'TABLEPASTE'), tab),   // ORS.1
  C('annotate.datalink', 'annotate', 'bi-link', T('Annotate', 'DATALINK'), tab),   // ORS.1
  C('annotate.datalinkupdate', 'annotate', 'bi-arrow-repeat', T('Annotate', 'DATALINKUPDATE'), tab),   // ORS.1
  C('annotate.field', 'annotate', 'bi-braces', T('Annotate', 'FIELD'), tab),   // ORS.22
  C('annotate.updatefield', 'annotate', 'bi-arrow-clockwise', T('Annotate', 'UPDATEFIELD'), tab),   // ORS.22
  C('annotate.dwgprops', 'annotate', 'bi-card-list', T('Annotate', 'DWGPROPS'), tab),   // ORS.22
  C('blocks.credits', 'blocks', 'bi-card-list', T('Blocks', 'CREDITS'), tab),   // the Library credits as a table on a sheet
  C('blocks.bomzone', 'blocks', 'bi-bounding-box', T('Blocks', 'BOMZONE'), tab),   // 0.9.1: live bills of materials by zone (bomzones-cmd.js)
  C('blocks.bomtable', 'blocks', 'bi-table', T('Blocks', 'BOMTABLE'), tab),
  C('blocks.bomedit', 'blocks', 'bi-layout-three-columns', T('Blocks', 'BOMEDIT'), tab),
  C('blocks.bomupdate', 'blocks', 'bi-arrow-repeat', T('Blocks', 'BOMUPDATE'), tab),
  C('blocks.bomexport', 'blocks', 'bi-filetype-csv', T('Blocks', 'BOMEXPORT'), tab),
  C('blocks.tags', 'blocks', 'bi-tags', T('Blocks', 'TAGS'), tab),   // 0.8 SU.915: block attributes as tags that feed schedules
  C('blocks.diagram', 'blocks', 'bi-diagram-2', T('Blocks', 'DIAGRAM'), tab),   // 0.8 SU.883: text (Mermaid, PlantUML, D2, from-to list) drawn as a diagram
  C('blocks.gds', 'blocks', 'bi-cpu', T('Blocks', 'GDSIN'), tab),
  C('blocks.ole', 'blocks', 'bi-paperclip', T('Blocks', 'OLELIST'), tab),   // 0.8 D7.23: the OLE objects a drawing carries; Place puts a copy of the picture where you say   // 0.8 SU.752: view an IC layout (GDSII stream)

  C('param.auto', 'parametric', 'bi-magic', T('Parametric', 'AUTOCONSTRAIN'), tab),
  C('param.geom', 'parametric', 'bi-bounding-box', T('Parametric', 'GEOMCONSTRAINT'), tab),
  C('param.dim', 'parametric', 'bi-bounding-box-circles', T('Parametric', 'DIMCONSTRAINT'), tab),
  C('param.parameters', 'parametric', 'bi-sliders', T('Parametric', 'PARAMETERS'), tab),
  C('param.horizontal', 'parametric', 'bi-dash-lg', T('Parametric', 'GCHORIZONTAL'), tab),
  C('param.vertical', 'parametric', 'bi-grip-vertical', T('Parametric', 'GCVERTICAL'), tab),
  C('param.parallel', 'parametric', 'bi-pause', T('Parametric', 'GCPARALLEL'), tab),
  C('param.perpendicular', 'parametric', 'bi-plus-lg', T('Parametric', 'GCPERPENDICULAR'), tab),
  C('param.coincident', 'parametric', 'bi-record', T('Parametric', 'GCCOINCIDENT'), tab),
  C('param.tangent', 'parametric', 'bi-circle', T('Parametric', 'GCTANGENT'), tab),
  C('param.equal', 'parametric', 'bi-distribute-horizontal', T('Parametric', 'GCEQUAL'), tab),
  C('param.fix', 'parametric', 'bi-lock', T('Parametric', 'GCFIX'), tab),
  C('param.collinear', 'parametric', 'bi-three-dots', T('Parametric', 'GCCOLLINEAR'), tab),
  C('param.concentric', 'parametric', 'bi-bullseye', T('Parametric', 'GCCONCENTRIC'), tab),
  C('param.symmetric', 'parametric', 'bi-symmetry-vertical', T('Parametric', 'GCSYMMETRIC'), tab),
  C('param.dclinear', 'parametric', 'bi-arrow-left-right', T('Parametric', 'DCLINEAR'), tab),
  C('param.dcaligned', 'parametric', 'bi-arrows-angle-contract', T('Parametric', 'DCALIGNED'), tab),
  C('param.dcangular', 'parametric', 'bi-triangle', T('Parametric', 'DCANGULAR'), tab),
  C('param.dcradius', 'parametric', 'bi-record-circle', T('Parametric', 'DCRADIUS'), tab),
  C('param.dcdiameter', 'parametric', 'bi-slash-circle', T('Parametric', 'DCDIAMETER'), tab),
  C('param.dcconvert', 'parametric', 'bi-arrow-left-right', T('Parametric', 'DCCONVERT'), tab),
  C('param.delete', 'parametric', 'bi-x-octagon', T('Parametric', 'DELCONSTRAINT'), tab),
  C('param.bars-show', 'parametric', 'bi-eye', T('Parametric', 'CONSTRAINTBAR S'), tab),
  C('param.bars-hide', 'parametric', 'bi-eye-slash', T('Parametric', 'CONSTRAINTBAR H'), tab),
  C('param.dcdisplay', 'parametric', 'bi-eye', T('Parametric', 'DCDISPLAY'), tab),
  C('param.swbout', 'parametric', 'bi-file-earmark-code', T('Parametric', 'SWBOUT'), tab),

  C('blocks.make', 'blocks', 'bi-box', T('Blocks', 'BLOCK'), tab),
  C('blocks.insert', 'blocks', 'bi-box-arrow-in-down', T('Blocks', 'INSERT'), tab),
  C('blocks.library', 'blocks', 'bi-collection', T('Blocks', 'LIBRARY'), tab),
  C('blocks.bedit', 'blocks', 'bi-pencil-square', T('Blocks', 'BEDIT'), tab),
  C('blocks.attdef', 'blocks', 'bi-tag', T('Blocks', 'ATTDEF'), tab),
  C('blocks.burst', 'blocks', 'bi-box-arrow-up', T('Blocks', 'BURST'), tab),   // ORS.12
  C('blocks.ncopy', 'blocks', 'bi-box-arrow-in-down', T('Blocks', 'NCOPY'), tab),   // ORS.12
  C('blocks.count', 'blocks', 'bi-123', T('Blocks', 'COUNT'), tab),
  C('blocks.xattach', 'blocks', 'bi-paperclip', T('Blocks', 'XATTACH'), tab),
  C('blocks.xref', 'blocks', 'bi-link-45deg', T('Blocks', 'XREF'), tab),
  C('blocks.delblocks', 'blocks', 'bi-trash', T('Blocks', 'DELBLOCKS'), tab),
  C('blocks.dataextraction', 'blocks', 'bi-funnel', T('Blocks', 'DATAEXTRACTION'), tab),   // ORS.11
  C('blocks.counttable', 'blocks', 'bi-list-ol', T('Blocks', 'COUNTTABLE'), tab),   // ORS.11
  C('blocks.palette', 'blocks', 'bi-grid-3x3-gap', T('Blocks', 'BLOCKSPALETTE'), tab),   // ORS.23
  C('blocks.bconvert', 'blocks', 'bi-magic', T('Blocks', 'BCONVERT'), tab),   // ORS.24
  C('blocks.bsearch', 'blocks', 'bi-search', T('Blocks', 'BSEARCH'), tab),   // ORS.24
  C('blocks.breplace', 'blocks', 'bi-arrow-repeat', T('Blocks', 'BREPLACE'), tab),   // ORS.24
  C('blocks.pasteblock', 'blocks', 'bi-clipboard-plus', T('Blocks', 'PASTEBLOCK'), tab),   // ORS.9
  C('blocks.blockreplace', 'blocks', 'bi-arrow-left-right', T('Blocks', 'BLOCKREPLACE'), tab),   // ORS.9
  C('blocks.minsert', 'blocks', 'bi-grid-3x3', T('Blocks', 'MINSERT'), tab),   // ORS.9
  C('blocks.eattedit', 'blocks', 'bi-input-cursor-text', T('Blocks', 'EATTEDIT'), tab),   // 0.6 DF.5
  C('blocks.battman', 'blocks', 'bi-list-ol', T('Blocks', 'BATTMAN'), tab),
  C('blocks.refedit', 'blocks', 'bi-pencil-square', T('Blocks', 'REFEDIT'), tab),
  C('blocks.exportpoints', 'blocks', 'bi-geo-alt', T('Blocks', 'EXPORTPOINTS'), tab),   // 0.6 DF.7

  // the Layers panel's Tools menu (left panel)
  C('layers.manager', 'layers', 'bi-layers-half', '[data-layer-manager]', tab),   // 0.9.1: the Layer manager dialog
  C('layers.iso', 'layers', 'bi-layers', '[data-layer-menu] [data-cmd="LAYISO"]', tab),
  C('layers.uniso', 'layers', 'bi-layers-fill', '[data-layer-menu] [data-cmd="LAYUNISO"]', tab),
  C('layers.off', 'layers', 'bi-eye-slash', '[data-layer-menu] [data-cmd="LAYOFF"]', tab),
  C('layers.frz', 'layers', 'bi-snow', '[data-layer-menu] [data-cmd="LAYFRZ"]', tab),
  C('layers.mcur', 'layers', 'bi-check2-circle', '[data-layer-menu] [data-cmd="LAYMCUR"]', tab),
  C('layers.on', 'layers', 'bi-eye', '[data-layer-menu] [data-cmd="LAYON"]', tab),
  C('layers.thw', 'layers', 'bi-sun', '[data-layer-menu] [data-cmd="LAYTHW"]', tab),
  C('layers.mrg', 'layers', 'bi-intersect', '[data-layer-menu] [data-cmd="LAYMRG"]', tab),
  C('layers.del', 'layers', 'bi-trash', '[data-layer-menu] [data-cmd="LAYDEL"]', tab),
  C('layers.rename', 'layers', 'bi-input-cursor-text', '[data-layer-menu] [data-cmd="RENAME"]', tab),

  C('sheets.layout', 'sheets', 'bi-layout-text-window', T('Sheets', 'LAYOUT'), tab),
  C('sheets.mview', 'sheets', 'bi-window', T('Sheets', 'MVIEW'), tab),
  C('sheets.vpclip', 'sheets', 'bi-crop', T('Sheets', 'VPCLIP'), tab),   // ORS.16

  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', T('Edit', 'UNDO'), { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', T('Edit', 'REDO'), { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.copy', 'edit', 'bi-clipboard', T('Edit', 'COPYCLIP'), { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', T('Edit', 'PASTECLIP'), { defKeys: ['Ctrl+V'] }),
  C('edit.cut', 'edit', 'bi-scissors', '[data-edit-menu] [data-cmd="CUTCLIP"]', { defKeys: ['Ctrl+X'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', '[data-edit-menu] [data-cmd="PASTEORIG"]', { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.paste-picture', 'edit', 'bi-image', '[data-edit-menu] [data-paste-picture]'),   // 0.6 DF.6   // i18n-ignore (a selector)
  C('edit.paste-area', 'edit', 'bi-bounding-box', '[data-edit-menu] [data-cmd="PASTEAREA"]'),   // 0.8 D8.15: a copied area at its true size
  C('edit.duplicate', 'edit', 'bi-files', '[data-edit-menu] [data-cmd="DUPLICATE"]', { defKeys: ['Ctrl+D'] }),
  C('edit.delete', 'edit', 'bi-trash', '[data-edit-menu] [data-cmd="ERASE"]', { defKeys: ['Delete'], fixed: true }),
  C('edit.select-all', 'edit', 'bi-check2-all', '[data-edit-menu] [data-cmd="SELECTALL"]', { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', '[data-edit-menu] [data-cmd="DESELECT"]', { defKeys: ['Escape'], fixed: true }),
  C('edit.qselect', 'edit', 'bi-funnel', '[data-edit-menu] [data-cmd="QSELECT"]', tab),
  C('edit.similar', 'edit', 'bi-ui-checks', '[data-edit-menu] [data-cmd="SELECTSIMILAR"]', tab),
  C('edit.find', 'edit', 'bi-search', '[data-edit-menu] [data-cmd="FIND"]', tab),

  C('view.extents', 'view', 'bi-arrows-fullscreen', T('View', 'ZOOM E'), tab),
  C('view.window', 'view', 'bi-zoom-in', T('View', 'ZOOM W'), tab),
  C('view.previous', 'view', 'bi-skip-backward', T('View', 'ZOOM P'), tab),
  C('view.zoomin', 'view', 'bi-plus-circle', T('View', 'ZOOM 2X'), tab),   // 0.9 D9.9: zoom in 2x
  C('view.zoomout', 'view', 'bi-dash-circle', T('View', 'ZOOM 0.5X'), tab),
  C('view.ucs', 'view', 'bi-bounding-box-circles', T('View', 'UCS'), tab),   // 0.9 D9.5: the UCS commands on the toolbar's View More menu
  // i18n-ignore: command name (words-11)
  C('view.ucs-object', 'view', 'bi-bounding-box', T('View', 'UCS OB'), tab),
  C('view.ucs-world', 'view', 'bi-globe2', T('View', 'UCS W'), tab),
  C('view.split-2v', 'view', 'bi-layout-split', T('View', 'SPLIT 2V'), tab),
  C('view.split-2h', 'view', 'bi-distribute-vertical', T('View', 'SPLIT 2H'), tab),
  C('view.split-4', 'view', 'bi-grid', T('View', 'SPLIT 4'), tab),
  C('view.split-1', 'view', 'bi-square', T('View', 'SPLIT SI'), tab),
  C('view.linkviews', 'view', 'bi-link', T('View', 'LINKVIEWS'), tab),
  C('view.isolateobjects', 'view', 'bi-eye', T('View', 'ISOLATEOBJECTS'), tab),   // ORS.5
  C('view.hideobjects', 'view', 'bi-eye-slash', T('View', 'HIDEOBJECTS'), tab),   // ORS.5
  C('view.unisolateobjects', 'view', 'bi-eye-fill', T('View', 'UNISOLATEOBJECTS'), tab),   // ORS.5
  C('view.laylockfade', 'view', 'bi-lock', T('View', 'LAYLOCKFADE'), tab),   // ORS.28
  C('view.touch-crosshair', 'view', 'bi-hand-index', T('View', 'TOUCHCROSSHAIR'), tab),   // ORS.20: the offset crosshair for fingers
  C('file.whohas', 'file', 'bi-person-lock', T('View', 'WHOHAS'), tab),   // ORS.27: who has a drawing open (the button sits under View, More: File has no More menu)
  C('file.audit', 'file', 'bi-clipboard2-check', T('View', 'AUDIT'), tab),   // ORS.14: check and repair the drawing (under View, More, as WHOHAS)
  C('file.recover', 'file', 'bi-bandaid', T('View', 'RECOVER'), tab),   // ORS.14: open a damaged file
  C('view.turn-left', 'view', 'bi-arrow-counterclockwise', T('View', 'TURNLEFT'), tab),
  C('view.turn-right', 'view', 'bi-arrow-clockwise', T('View', 'TURNRIGHT'), tab),
  C('view.turn-world', 'view', 'bi-compass', T('View', 'TURNWORLD'), tab),
  C('view.maplayers', 'view', 'bi-map', T('View', 'MAPLAYERS'), tab),
  C('view.autosheet', 'view', 'bi-layout-wtf', T('View', 'AUTOSHEET'), tab),   // 0.8 EG.56: the sheets lay themselves out
  C('view.pcattach', 'view', 'bi-cloud-plus', T('View', 'POINTCLOUDATTACH'), tab),
  C('view.pointcloud', 'view', 'bi-cloud-haze2', T('View', 'POINTCLOUD'), tab),
  C('view.open3d', 'view', 'bi-box-arrow-up-right', T('View', 'OPENIN3D'), { optional: true }),
  C('view.model', 'view', 'bi-square', '[data-tabs] > [role="tab"]:nth-child(1)'),
  C('view.3d', 'view', 'bi-box', '[data-tabs] > [role="tab"]:nth-child(2)'),

  C('tools.dist', 'tools', 'bi-rulers', T('View', 'DIST'), tab),
  C('tools.area', 'tools', 'bi-bounding-box', T('View', 'AREA'), tab),
  C('tools.measuregeom', 'tools', 'bi-rulers', T('View', 'MEASUREGEOM'), tab),
  C('tools.isodraft', 'tools', 'bi-box', T('View', 'ISODRAFT'), tab),   // ORS.10
  C('tools.isoplane', 'tools', 'bi-layers-half', T('View', 'ISOPLANE'), tab),   // ORS.10
  C('tools.massprop', 'tools', 'bi-clipboard-data', T('View', 'MASSPROP'), tab),   // ORS.13
  C('tools.compare', 'tools', 'bi-layout-split', T('View', 'COMPARESETTINGS'), tab),
  C('tools.history', 'tools', 'bi-clock-history', T('View', 'HISTORY'), tab),   // 0.7 D7.31
  C('tools.floors', 'tools', 'bi-layers', T('View', 'FLOORS'), tab),   // 0.9 PLAN2D.3
  C('tools.classes', 'tools', 'bi-diagram-3', T('View', 'CLASSES'), tab),   // 0.8 SU.912: the Classes panel (the toolbar button had no registry command)
  C('tools.documents', 'tools', 'bi-folder2-open', T('View', 'DOCUMENTS'), tab),   // 0.8 SU.1058: the Documents panel (View › More)
  C('tools.appload', 'tools', 'bi-filetype-js', T('View', 'APPLOAD'), tab),
  C('tools.aliasedit', 'tools', 'bi-card-text', T('View', 'ALIASEDIT'), tab),
  C('tools.optionkeys', 'tools', 'bi-alphabet', T('View', 'OPTIONKEYS'), tab),   // OPT.1
  C('tools.lispedit', 'tools', 'bi-code-square', T('View', 'LISPEDIT'), tab),   // ORS.31
  C('tools.shortcuts', 'tools', 'bi-keyboard', T('View', 'SHORTCUTS'), tab),
  C('file.laser', 'file', 'bi-lightning', T('View', 'LASER'), tab),   // 0.7 SU.772: the Laser panel (View › More)

  // drafting aids: the status bar's toggles (cadcraft.js keydown: F3, F7, F8, F10, F11, F12)
  C('aids.osnap', 'aids', 'bi-magnet', '[data-toggle="osnap"]', { defKeys: ['F3'] }),
  C('aids.grid', 'aids', 'bi-grid-3x3-gap', '[data-toggle="grid"]', { defKeys: ['F7'] }),
  C('aids.gsnap', 'aids', 'bi-grid-3x3', '[data-toggle="gsnap"]', { defKeys: ['F9'] }),
  C('aids.ortho', 'aids', 'bi-plus-lg', '[data-toggle="ortho"]', { defKeys: ['F8'] }),
  C('aids.polar', 'aids', 'bi-compass', '[data-toggle="polar"]', { defKeys: ['F10'] }),
  C('aids.otrack', 'aids', 'bi-bullseye', '[data-toggle="otrack"]', { defKeys: ['F11'] }),
  C('aids.dyn', 'aids', 'bi-input-cursor', '[data-toggle="dyn"]', { defKeys: ['F12'] }),
  C('aids.lwt', 'aids', 'bi-border-width', '[data-toggle="lwt"]'),

  // the 3D tab's group (ws3d.js puts it in the toolbar the first time the 3D tab opens)
  C('3d.extrude', '3d', 'bi-box-arrow-up', D3('EXTRUDE'), in3d),
  C('3d.presspull', '3d', 'bi-arrows-vertical', D3('PRESSPULL'), in3d),
  C('3d.box', '3d', 'bi-box', D3('BOX'), in3d),
  C('3d.cylinder', '3d', 'bi-database', D3('CYLINDER'), in3d),
  C('3d.wedge', '3d', 'bi-triangle-half', D3('WEDGE'), in3d),
  C('3d.move', '3d', 'bi-arrows-move', D3('MOVE'), in3d),
  C('3d.copy', '3d', 'bi-copy', D3('COPY'), in3d),
  C('3d.rotate', '3d', 'bi-arrow-repeat', D3('ROTATE'), in3d),
  C('3d.erase', '3d', 'bi-eraser', D3('ERASE'), in3d),
  C('3d.orbit', '3d', 'bi-globe', D3('3DORBIT'), in3d),
  C('3d.revolve', '3d', 'bi-arrow-clockwise', D3('REVOLVE'), in3d),
  C('3d.sweep', '3d', 'bi-bezier2', D3('SWEEP'), in3d),
  C('3d.union', '3d', 'bi-union', D3('UNION'), in3d),
  C('3d.subtract', '3d', 'bi-subtract', D3('SUBTRACT'), in3d),
  C('3d.intersect', '3d', 'bi-intersect', D3('INTERSECT'), in3d),
  C('3d.view-iso', '3d', 'bi-badge-3d', D3('VIEW I'), in3d),
  C('3d.view-top', '3d', 'bi-square', D3('VIEW T'), in3d),
  C('3d.view-bottom', '3d', 'bi-square', D3('VIEW BO'), in3d),   // i18n-ignore: command-line text in a selector
  C('3d.view-front', '3d', 'bi-layout-sidebar-inset', D3('VIEW F'), in3d),
  C('3d.view-back', '3d', 'bi-layout-sidebar', D3('VIEW BA'), in3d),   // i18n-ignore: command-line text in a selector
  C('3d.view-left', '3d', 'bi-layout-sidebar', D3('VIEW L'), in3d),
  C('3d.view-right', '3d', 'bi-layout-sidebar-inset-reverse', D3('VIEW R'), in3d),
  C('3d.persp', '3d', 'bi-camera', D3('VIEW P'), in3d),
  C('3d.parallel', '3d', 'bi-camera-video', D3('VIEW PA'), in3d),   // i18n-ignore: command-line text in a selector
  C('3d.view-all', '3d', 'bi-arrows-fullscreen', D3('VIEW E'), in3d),
  C('3d.shaded', '3d', 'bi-circle-fill', D3('VSCURRENT S'), in3d),
  C('3d.edges', '3d', 'bi-circle-half', D3('VSCURRENT E'), in3d),
  C('3d.hidden', '3d', 'bi-circle', D3('VSCURRENT H'), in3d),
  C('3d.wire', '3d', 'bi-bounding-box', D3('VSCURRENT W'), in3d),
  C('3d.xray', '3d', 'bi-transparency', D3('VSCURRENT X'), in3d),
  C('3d.glbout', '3d', 'bi-box-arrow-up-right', D3('GLBOUT'), in3d),
  C('3d.objout', '3d', 'bi-box-arrow-up-right', D3('OBJOUT'), in3d),
  C('3d.stlout', '3d', 'bi-printer', D3('STLOUT'), in3d),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
  C('view.cmdhistory', 'view', 'bi-clock-history', '[data-cmd-hist]', { defKeys: ['F2'], keyOnly: true }),   // 0.9 SU.1083: the command history pop-up (cmdline.js handles F2 itself in CadCraft's own style)
];
export const GROUPS = ['file', 'draw', 'modify', 'annotate', 'parametric', 'blocks', 'layers', 'sheets', 'edit', 'view', 'tools', 'aids', '3d', 'app'];

// CadCraft's own keys = the registry's (what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));

const m = (label, items) => ({ label: 'input.m.' + label, items });
const rtab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items, o]) => ({ label: 'input.m.' + l, items, ...(o || {}) })) });
// RIBBON-COMPACT sizes (docs/apps/app-input.md): a large button, and a group drawn mixed (large first, then small ones three high)
const L = (id) => ({ id, size: 'lg' });
const MIXED = { mixed: true };
const CTL = (control) => ({ control, size: 'sm' });   // an inline control (ribbon-controls.js)
const ARCS = { split: ['draw.arc', 'draw.arc-3p', 'draw.arc-sce', 'draw.arc-sca', 'draw.arc-scl', 'draw.arc-sea', 'draw.arc-sed', 'draw.arc-ser', 'draw.arc-cse', 'draw.arc-csa', 'draw.arc-csl', 'draw.arc-con'], size: 'lg' };   // 0.9 FX.137: the eleven ways to draw an arc
const CIRCLES = { split: ['draw.circle', 'draw.circle-ttr', 'draw.circle-ttt'], size: 'lg' };
// 0.9 WT.1 (walls-plan-10): the Walls tab of both ribbon styles, its panels the wall tool specification's blocks (Draw, Cut, Set and modify, Hold, Join)
const TAB_WALLS = () => rtab('walls', [
  ['walls.draw', [L('wall.line'), 'wall.rect', 'wall.rectrot', 'wall.polygon', 'wall.arccentre', 'wall.arctangent', 'wall.pick', 'wall.trace', 'draw.door', 'draw.window']],
  ['walls.cut', [L('wall.split'), 'wall.splitgap', 'wall.delsegment', 'wall.connect']],
  ['walls.modify', [L('wall.offset'), 'wall.editdim', 'wall.boxstretch']],
  ['walls.hold', [L('wall.alignlock'), 'wall.lockdim', 'wall.gridlock', 'wall.unlock', 'wall.locks']],
  ['walls.join', [L('wall.joinstyle'), 'wall.disallow', 'wall.joins']],
]);

const FILE_MENU = ['file.new', 'file.open', 'file.samples', '-', 'file.save', 'file.saveas', '-', 'file.plot', 'file.laser', '-', 'app.settings', 'app.palette', 'app.help'];
const LAYERS = ['layers.manager', 'layers.iso', 'layers.uniso', 'layers.off', 'layers.frz', 'layers.mcur', 'layers.on', 'layers.thw', 'layers.mrg', 'layers.del', 'layers.rename'];
const GEOM = ['param.horizontal', 'param.vertical', 'param.parallel', 'param.perpendicular', 'param.coincident', 'param.tangent', 'param.equal', 'param.fix', 'param.collinear', 'param.concentric', 'param.symmetric'];
const DCONS = ['param.dclinear', 'param.dcaligned', 'param.dcangular', 'param.dcradius', 'param.dcdiameter', 'param.dcconvert'];
const AIDS = ['aids.osnap', 'aids.grid', 'aids.gsnap', 'aids.ortho', 'aids.polar', 'aids.otrack', 'aids.dyn', 'aids.lwt'];
const TAB_3D = (names) => rtab(names[0], [
  [names[1], ['3d.extrude', '3d.presspull', '3d.box', '3d.cylinder', '3d.wedge', '3d.revolve', '3d.sweep']],
  [names[2], ['3d.union', '3d.subtract', '3d.intersect']],
  [names[3], ['3d.move', '3d.copy', '3d.rotate', '3d.erase']],
  [names[4], ['3d.orbit', '3d.view-iso', '3d.view-top', '3d.view-bottom', '3d.view-front', '3d.view-back', '3d.view-left', '3d.view-right', '3d.persp', '3d.parallel', '3d.view-all'], { mixed: true }],
  [names[5], ['3d.shaded', '3d.edges', '3d.hidden', '3d.wire', '3d.xray'], { mixed: true }],
  [names[6], ['3d.glbout', '3d.objout', '3d.stlout']],
]);

export const STYLES = {
  cadcraft: {
    format: 'cadcraft-input', version: 1, id: 'cadcraft', name: 'input.style.cadcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: the 3D tab keeps its own buttons
  },
  drafting: {
    format: 'cadcraft-input', version: 1, id: 'drafting', name: 'input.style.drafting', builtin: true, layout: 'ribbon', commandLine: true,
    menus: [m('file', FILE_MENU)],
    quick: ['file.new', 'file.open', 'file.save', 'file.saveas', 'file.plot', 'edit.undo', 'edit.redo'],
    tabs: [
      // the classic Home tab (0.7 WS.8): the four drawing tools large, the rest small and stacked, so the tab fits one screen
      rtab('home', [
        ['draw', [L('draw.line'), L('draw.pline'), CIRCLES, ARCS, 'draw.rectang', 'draw.polygon', 'draw.ellipse', 'draw.hatch'], { more: ['draw.point', 'draw.circle-ttr', 'draw.circle-ttt', 'draw.xline', 'draw.ray', 'draw.sketchlive', 'draw.sketchfix', 'draw.mline', 'draw.wall', 'draw.door', 'draw.window', ...ORS_DRAFT.draw, ...ORS_ARRAYS.draw] }],
        ['modify', [L('modify.move'), 'modify.rotate', 'modify.scale', 'modify.mirror', 'modify.stretch', 'modify.array', L('modify.trim'), 'modify.extend', 'modify.fillet', 'modify.chamfer', 'modify.offset', 'modify.join', 'modify.explode', L('modify.erase'), 'modify.copy'], { more: ['modify.break', 'modify.lengthen', 'modify.align', 'modify.alignpanel', ...ORS_DRAFT.modify, ...ORS_ARRAYS.modify] }],
        ['annotation', [L('draw.mtext'), L('annotate.dimlinear'), 'annotate.mleader']],
        ['layers', [L('layers.manager'), CTL('layers'), 'layers.off', 'layers.frz', 'layers.mcur'], { more: LAYERS.filter((x) => !['layers.manager', 'layers.off', 'layers.frz', 'layers.mcur'].includes(x)) }],
        ['block', ['blocks.insert', 'blocks.make']],
        ['properties', [CTL('color'), CTL('linetype'), CTL('lineweight'), 'modify.matchprop'], MIXED],
        ['utilities', [L('tools.dist'), 'tools.area', 'edit.qselect'], { more: ['tools.measuregeom', 'edit.select-all', 'edit.similar', 'edit.select-none', ...ORS_DRAFT.tools] }],
        ['clipboard', [L('edit.paste'), 'edit.copy', 'edit.cut', 'edit.delete'], { more: ['edit.paste-in-place', 'edit.paste-picture', 'edit.paste-area', 'edit.duplicate'] }],
      ]),
      rtab('insert', [['block', ['blocks.bedit', 'blocks.attdef', 'blocks.eattedit', 'blocks.battman', 'blocks.refedit']], ['reference', ['blocks.xattach', 'blocks.xref']], ['library', ['blocks.library', 'blocks.credits']], ['pointcloud', ['view.pcattach', 'view.pointcloud']], ['data', ['blocks.count', 'blocks.credits', 'blocks.tags', 'blocks.diagram', 'blocks.gds', 'blocks.ole', 'blocks.delblocks', 'blocks.exportpoints', ...ORS_DRAFT.blocks, ...ORS_BLOCKS.blocks]], ['bom', ['blocks.bomzone', 'blocks.bomtable', 'blocks.bomedit', 'blocks.bomupdate', 'blocks.bomexport']], ['map', ['view.maplayers']]]),
      TAB_WALLS(),
      rtab('annotate', [['text', ['draw.text', 'draw.mtext', 'draw.textstyle', 'edit.find']], ['dimensions', ['annotate.dimaligned', 'annotate.dimangular', 'annotate.dimradius', 'annotate.dimdiameter', 'annotate.dimcontinue', 'annotate.dimbaseline', ...ORS_DIMS.dims], MIXED], ['markup', ['annotate.revcloud', 'annotate.redline', ...ORS_DIMS.notes]]]),
      rtab('parametric', [['geometric', [L('param.auto'), L('param.geom'), ...GEOM, 'param.bars-show', 'param.bars-hide']], ['dimensional', ['param.dim', ...DCONS, 'param.dcdisplay'], MIXED], ['manage', ['param.delete', 'param.parameters', 'param.swbout']]]),
      rtab('view', [['navigate', ['view.extents', 'view.window', 'view.previous', 'view.zoomin', 'view.zoomout']], ['viewports', ['view.split-2v', 'view.split-2h', 'view.split-4', 'view.split-1', 'view.linkviews'], MIXED], ['coordinates', ['view.turn-left', 'view.turn-right', 'view.turn-world', 'view.ucs', 'view.ucs-object', 'view.ucs-world']], ['model', ['view.model', 'view.3d', 'view.open3d', 'view.autosheet']], ['aids', AIDS, MIXED]]),
      rtab('manage', [['customization', ['tools.appload', 'tools.aliasedit', 'tools.optionkeys', ...ORS_BLOCKS.tools, 'tools.shortcuts']], ['compare', ['tools.compare', 'tools.history', 'tools.documents', 'tools.classes', 'tools.floors']]]),
      rtab('output', [['plot', ['file.plot', 'file.laser']], ['sheets', ['sheets.layout', 'sheets.mview', ...ORS_ARRAYS.sheets]]]),
      TAB_3D(['3d', 'modeling', 'solidedit', 'modify', 'views', 'visual', 'export']),
    ],
    labels: { 'file.plot': 'input.lbl.drafting.plot', 'draw.mtext': 'input.lbl.drafting.mtext', 'annotate.dimlinear': 'input.lbl.drafting.dim', 'modify.matchprop': 'input.lbl.drafting.matchprop' },
    keys: { ...DEFAULT_KEYS },
    // the classic program: the middle button pans, a right click is Enter (no right-drag pan)
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: null },
  },
  ribbon: {
    format: 'cadcraft-input', version: 1, id: 'ribbon', name: 'input.style.ribbon', builtin: true, layout: 'ribbon',
    menus: [m('file', FILE_MENU)],
    quick: ['file.open', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: [
      rtab('draw', [
        ['lines', [L('draw.line'), 'draw.pline', 'draw.mline', 'draw.xline', 'draw.ray'], { more: ['draw.point', 'draw.sketchlive', 'draw.sketchfix', ...ORS_DRAFT.draw, ...ORS_ARRAYS.draw] }],
        ['shapes', [CIRCLES, ARCS, 'draw.rectang', 'draw.polygon', 'draw.ellipse']],
        ['text', [L('draw.text'), 'draw.mtext', 'draw.textstyle']],
        ['fill', ['draw.hatch']],
        ['plan', ['draw.wall', 'draw.door', 'draw.window']],
      ]),
      rtab('modify', [
        ['clipboard', [L('edit.paste'), 'edit.cut', 'edit.copy', 'edit.delete'], { more: ['edit.paste-in-place', 'edit.paste-picture', 'edit.paste-area', 'edit.duplicate'] }],
        ['arrange', [L('modify.move'), 'modify.copy', 'modify.rotate', 'modify.scale', 'modify.mirror', 'modify.stretch', 'modify.array'], { more: ['modify.align', 'modify.alignpanel'] }],
        ['shape', [L('modify.trim'), 'modify.extend', 'modify.fillet', 'modify.chamfer', 'modify.offset', 'modify.join', 'modify.explode', 'modify.erase'], { more: ['modify.break', 'modify.lengthen', 'modify.matchprop', ...ORS_DRAFT.modify, ...ORS_ARRAYS.modify] }],
        ['select', ['edit.select-all', 'edit.select-none', 'edit.qselect', 'edit.similar', 'edit.find']],
      ]),
      TAB_WALLS(),
      rtab('annotate', [['text', [L('draw.text'), 'draw.mtext', 'draw.textstyle']], ['dimensions', [L('annotate.dimlinear'), 'annotate.dimaligned', 'annotate.dimangular', 'annotate.dimradius'], { more: ['annotate.dimdiameter', 'annotate.dimcontinue', 'annotate.dimbaseline', ...ORS_DIMS.dims] }], ['notes', ['annotate.mleader', 'annotate.revcloud', 'annotate.redline', ...ORS_DIMS.notes]]]),
      rtab('parametric', [['constraints', ['param.auto', 'param.geom', 'param.dim', 'param.parameters']], ['geometric', GEOM], ['dimensional', [...DCONS, 'param.dcdisplay']], ['manage', ['param.delete', 'param.bars-show', 'param.bars-hide', 'param.swbout']]]),
      rtab('blocks', [['blocks', ['blocks.make', 'blocks.insert', 'blocks.bedit', 'blocks.attdef', 'blocks.eattedit', 'blocks.battman', 'blocks.refedit', 'blocks.count', 'blocks.credits', 'blocks.tags', 'blocks.diagram', 'blocks.gds', 'blocks.ole', 'blocks.delblocks', 'blocks.exportpoints', ...ORS_DRAFT.blocks, ...ORS_BLOCKS.blocks]], ['bom', ['blocks.bomzone', 'blocks.bomtable', 'blocks.bomedit', 'blocks.bomupdate', 'blocks.bomexport']], ['links', ['blocks.xattach', 'blocks.xref', 'blocks.library']], ['layers', LAYERS]]),
      rtab('sheets', [['sheets', ['sheets.layout', 'sheets.mview', ...ORS_ARRAYS.sheets]], ['plot', ['file.plot', 'file.laser']]]),
      rtab('view', [['zoom', ['view.extents', 'view.window', 'view.previous', 'view.zoomin', 'view.zoomout']], ['panes', ['view.split-2v', 'view.split-2h', 'view.split-4', 'view.split-1', 'view.linkviews']], ['turn', ['view.turn-left', 'view.turn-right', 'view.turn-world', 'view.ucs', 'view.ucs-object', 'view.ucs-world']], ['show', ['view.model', 'view.3d', 'view.open3d', 'view.maplayers', 'view.pcattach', 'view.pointcloud', 'view.autosheet']], ['aids', AIDS]]),
      TAB_3D(['3d', 'modeling', 'solidedit', 'modify', 'views', 'visual', 'export']),
      rtab('tools', [['measure', ['tools.dist', 'tools.area', 'tools.measuregeom', ...ORS_DRAFT.tools]], ['customize', ['tools.appload', 'tools.aliasedit', 'tools.optionkeys', ...ORS_BLOCKS.tools, 'tools.shortcuts', 'tools.compare', 'tools.history', 'tools.documents', 'tools.classes', 'tools.floors']]]),
    ],
    keys: { ...DEFAULT_KEYS },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },
  },
};
export const STYLE_ORDER = ['cadcraft', 'drafting', 'ribbon'];

/** IP.4: each style's family ("use this style in every app"). CadCraft has no menu-bar style: that family keeps CadCraft's own. */
export const FAMILY = { cadcraft: 'own', drafting: 'classic', ribbon: 'ribbon' };
export const STORE = 'cadcraft.input';
/** WL.18: keys may type text at CadCraft's command line; SHORTCUTS' old store is carried in once. */
export const MACROS = true;
export const CARRY = { from: 'cadcraft.shortcuts' };

/**
 * The page side the shell asks for (app-input-ui.js). CadCraft has its own command line (commandLine 'own'): every style
 * keeps it, letters still go to it, and keys are honoured there while it is empty (keysIn). The 2D tools leave the 3D tab
 * first, the 3D tools open it first. cadcraft.js sets window.ccInputHooks = { status, busy }.
 */
export function hooks({ root, t }) {
  const host = () => window.cadcraft?.host;
  const on3d = () => !!host()?.ws3d?.active;
  const tabBtn = (n) => root.querySelector(`[data-tabs] > [role="tab"]:nth-child(${n})`);
  const until = async (f) => { for (let i = 0; i < 100 && !f(); i++) await new Promise((r) => setTimeout(r, 50)); return f(); };
  return {
    commandLine: 'own',
    // CadCraft's command line has the focus most of the time: while nothing is typed in it, a style's keys still work there
    keysIn: (n) => n?.matches?.('[data-cmd-input]') && n.value === '',
    why(c, b, generic) {
      if (b && (c.in3d || c.tab) && b.closest('[role="group"][hidden]') && !b.disabled && b.getAttribute('aria-disabled') !== 'true') {
        // a 2D tool while the 3D tab shows (or a 3D tool on the Model tab): prepare() switches tabs first
        if (c.tab && on3d()) return '';
        if (c.in3d && !on3d()) return '';
      }
      return generic(c, b);
    },
    async prepare(c) {
      if (c.tab && on3d()) { tabBtn(1)?.click(); return (await until(() => !on3d())) ? '' : t('input.why.2d'); }
      if (c.in3d && !on3d()) { tabBtn(2)?.click(); return (await until(on3d)) ? '' : t('input.why.3d'); }
      return '';
    },
    mouse: (mm) => setMouse(mm),
    runText: (text) => host()?.shortcuts?.run(text),
  };
}
