<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * CadCraft drafting UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered: toolbar, panels, command line and status bar. cadcraft.js runs the drawing.
 * Drawings open and save on this computer; nothing here posts anywhere.
 *
 *   top     toolbar: file · draw · modify · annotate · blocks · sheets · edit · view (each button runs a typed command);
 *           while the 3D tab shows: file · 3D (from <template data-tools-3d>, ws3d.js) · edit
 *           Edit = Undo, Redo, Copy (COPYCLIP), Paste (PASTECLIP) + a "More" menu (details.cc-menu, items run commands too)
 *   left    layers · blocks · drawing facts
 *   stage   the drawing (two canvases: drawing + live overlay) · Model / layout tabs
 *   right   properties of the selection (or the current settings, or the open sheet's) · Parameters (params-panel.js; PARAMETERS)
 *   bottom  command history + command line · status bar (coordinates, Grid/Ortho/Snap)
 *   dialog  Plot (to PDF); the library panel is built by libpanel.js
 */
Lang::use($__build); echo Lang::bootTag();   // language files (docs/LANG.md); harmless once app-shell.inc does it
// "Open in 3D" (0.4 part 2): hand the drawing to the 3D modeling app — only when it is open in this area AND the build it
// runs here takes a handed-over file (manifest "accepts": ["handoff"]; handoff.js), as BimCraft's "Edit in CadCraft".
$__3dApp = Catalog::app('modelcraft');
$__3dBuild = $__3dApp && Catalog::openIn($__3dApp, $__area['key']) ? AppBuilds::resolve($__3dApp['slug'], $__area['key']) : null;
$__3dUrl = $__3dBuild && in_array('handoff', $__3dBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__3dApp['slug'] : '';
// an Archicad project opened here (0.4 part 2, N.4) can go on to BimCraft by the same rule
$__bimApp = Catalog::app('bimcraft');
$__bimBuild = $__bimApp && Catalog::openIn($__bimApp, $__area['key']) ? AppBuilds::resolve($__bimApp['slug'], $__area['key']) : null;
$__bimUrl = $__bimBuild && in_array('handoff', $__bimBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__bimApp['slug'] : '';
$__tools = [
    'File' => [   // i18n-ignore: group id (label toolbar.group.file; data-tb-key keeps arranged toolbars)
        ['NEW', 'file-earmark-plus', Lang::t('ui.new'), Lang::t('ui.new_drawing')],
        ['OPEN', 'folder2-open', Lang::t('ui.open'), Lang::t('ui.open_dwg_dxf_ctrl')],
        ['SAVE', 'download', Lang::t('ui.save'), Lang::t('ui.save_copy_drawing_s')],
        ['SAVEAS', 'file-earmark-arrow-down', Lang::t('ui.save_as'), Lang::t('ui.save_copy_dwg_dxf')],
        ['PLOT', 'printer', Lang::t('ui.plot'), Lang::t('ui.plot_pdf_ctrl_p')],
    ],
    'Draw' => [   // i18n-ignore: group id (label toolbar.group.draw; data-tb-key keeps arranged toolbars)
        ['LINE', 'slash-lg', Lang::t('ui.line'), Lang::t('ui.line.title')],
        ['PLINE', 'vector-pen', Lang::t('ui.polyline'), Lang::t('ui.polyline_pl')],
        ['CIRCLE', 'circle', Lang::t('ui.circle'), Lang::t('ui.circle.title')],
        ['ARC', 'bezier2', Lang::t('ui.arc'), Lang::t('ui.arc.title')],
        ['RECTANG', 'square', Lang::t('ui.rectangle'), Lang::t('ui.rectangle_rec')],
        ['POLYGON', 'hexagon', Lang::t('ui.polygon'), Lang::t('ui.polygon_pol')],
        ['ELLIPSE', 'egg', Lang::t('ui.ellipse'), Lang::t('ui.ellipse_el')],
        ['TEXT', 'type', Lang::t('ui.text'), Lang::t('toolbar.text.title')],
        ['MTEXT', 'text-paragraph', Lang::t('toolbar.mtext'), Lang::t('toolbar.mtext.title')],
        ['HATCH', 'grid-3x3', Lang::t('toolbar.hatch'), Lang::t('toolbar.hatch.title')],
    ],
    'Modify' => [   // i18n-ignore: group id (label toolbar.group.modify; data-tb-key keeps arranged toolbars)
        ['MOVE', 'arrows-move', Lang::t('ui.move'), Lang::t('ui.move.title')],
        ['COPY', 'copy', Lang::t('ui.copy'), Lang::t('ui.copy_objects_base_point')],
        ['ROTATE', 'arrow-repeat', Lang::t('ui.rotate'), Lang::t('ui.rotate_ro')],
        ['SCALE', 'arrows-angle-expand', Lang::t('ui.scale'), Lang::t('ui.scale_sc')],
        ['MIRROR', 'symmetry-vertical', Lang::t('ui.mirror'), Lang::t('ui.mirror_mi')],
        ['STRETCH', 'arrows-expand-vertical', Lang::t('toolbar.stretch'), Lang::t('toolbar.stretch.title')],
        ['OFFSET', 'distribute-vertical', Lang::t('ui.offset'), Lang::t('ui.offset.title')],
        ['TRIM', 'scissors', Lang::t('ui.trim'), Lang::t('ui.trim_tr')],
        ['EXTEND', 'arrow-up-right', Lang::t('ui.extend'), Lang::t('ui.extend_ex')],
        ['FILLET', 'bezier', Lang::t('ui.fillet'), Lang::t('ui.fillet.title')],
        ['CHAMFER', 'triangle-half', Lang::t('toolbar.chamfer'), Lang::t('toolbar.chamfer.title')],
        ['EXPLODE', 'asterisk', Lang::t('ui.explode'), Lang::t('ui.explode.title')],
        ['ERASE', 'eraser', Lang::t('ui.erase'), Lang::t('ui.erase_e_delete')],
    ],
    'Annotate' => [   // i18n-ignore: group id (label toolbar.group.annotate; data-tb-key keeps arranged toolbars)
        ['DIMLINEAR', 'arrow-left-right', Lang::t('ui.linear'), Lang::t('ui.linear_dimension_horizontal_vertical')],
        ['DIMALIGNED', 'arrows-angle-contract', Lang::t('ui.aligned'), Lang::t('ui.aligned_dimension_dal')],
        ['DIMANGULAR', 'triangle', Lang::t('ui.angle'), Lang::t('ui.angular_dimension_dan')],
        ['DIMRADIUS', 'record-circle', Lang::t('ui.radius'), Lang::t('ui.radius_dimension_dra')],
        ['DIMDIAMETER', 'slash-circle', Lang::t('ui.diameter'), Lang::t('ui.diameter_dimension_ddi')],
        ['MLEADER', 'arrow-up-left', Lang::t('toolbar.mleader'), Lang::t('toolbar.mleader.title')],
    ],
    'Parametric' => [   // i18n-ignore: group id (label toolbar.group.parametric; data-tb-key keeps arranged toolbars)
        ['AUTOCONSTRAIN', 'magic', Lang::t('ui.auto'), Lang::t('ui.add_coincident_horizontal_vertical')],
        ['GEOMCONSTRAINT', 'bounding-box', Lang::t('ui.constrain'), Lang::t('ui.geomconstraint.title')],
        ['DIMCONSTRAINT', 'bounding-box-circles', Lang::t('ui.dimension'), Lang::t('ui.dimensional_constraint_linear_aligned')],
        ['PARAMETERS', 'sliders', Lang::t('ui.parameters'), Lang::t('ui.parameters_panel_user_parameters')],
    ],
    'Blocks' => [   // i18n-ignore: group id (label toolbar.group.blocks; data-tb-key keeps arranged toolbars)
        ['BLOCK', 'box', Lang::t('ui.make'), Lang::t('ui.make_block_objects_b')],
        ['INSERT', 'box-arrow-in-down', Lang::t('ui.insert'), Lang::t('ui.insert.title')],
        ['LIBRARY', 'collection', Lang::t('ui.library'), Lang::t('ui.library_place_items_check')],
    ],
    'Sheets' => [   // i18n-ignore: group id (label toolbar.group.sheets; data-tb-key keeps arranged toolbars)
        ['LAYOUT', 'layout-text-window', Lang::t('ui.new_sheet'), Lang::t('ui.new_layout_title_block')],
        ['MVIEW', 'window', Lang::t('ui.viewport'), Lang::t('ui.add_viewport_onto_model')],
    ],
    'Edit' => [   // i18n-ignore: group id (label toolbar.group.edit; data-tb-key keeps arranged toolbars)
        ['UNDO', 'arrow-counterclockwise', Lang::t('ui.undo'), Lang::t('ui.undo_ctrl_z')],
        ['REDO', 'arrow-clockwise', Lang::t('ui.redo'), Lang::t('ui.redo_ctrl_y')],
        ['COPYCLIP', 'clipboard', Lang::t('ui.copy'), Lang::t('ui.copy_selection_clipboard_ctrl')],
        ['PASTECLIP', 'clipboard-plus', Lang::t('ui.paste'), Lang::t('ui.paste_copy_follows_cursor')],
    ],
    'View' => [   // i18n-ignore: group id (label toolbar.group.view; data-tb-key keeps arranged toolbars)
        ['ZOOM E', 'arrows-fullscreen', Lang::t('ui.extents'), Lang::t('ui.zoom_whole_drawing_double')],
        ['ZOOM W', 'zoom-in', Lang::t('ui.window'), Lang::t('ui.zoom_window_z_w')],
        ['ZOOM P', 'skip-backward', Lang::t('toolbar.zoomprev'), Lang::t('toolbar.zoomprev.title')],
    ],
];
// Less-used tools of a group, in its "More" menu: [command, label, alias shown as the key]
$__more = [
    'Draw' => [   // i18n-ignore (the group's key in $__tools, not shown); Point moved here for XLINE / RAY (0.5 DR.6): two rows at 1440 px
        ['POINT', Lang::t('toolbar.point'), 'PO'],
        ['CIRCLE T', Lang::t('toolbar.circle.ttr'), 'C T'],   // 0.5 DR.1
        ['CIRCLE TTT', Lang::t('toolbar.circle.ttt'), 'C TTT'],   // 0.5 DR.2
        ['XLINE', Lang::t('toolbar.xline'), 'XL'],
        ['RAY', Lang::t('toolbar.ray'), 'RAY'],
    ],
    'Annotate' => [   // i18n-ignore (the group's key in $__tools, not shown)
        ['DIMCONTINUE', Lang::t('toolbar.dimcontinue'), 'DCO'],
        ['DIMBASELINE', Lang::t('toolbar.dimbaseline'), 'DBA'],
        ['REVCLOUD', Lang::t('toolbar.revcloud'), 'RC'],
    ],
    'Blocks' => [   // i18n-ignore (the group's key in $__tools, not shown)
        ['BEDIT', Lang::t('toolbar.bedit'), 'BE'],
        ['ATTDEF', Lang::t('toolbar.attdef'), 'ATT'],
        ['COUNT', Lang::t('toolbar.count'), 'COUNT'],
        ['XATTACH', Lang::t('toolbar.xattach'), 'XA'],
        ['XREF', Lang::t('toolbar.xref'), 'XR'],
        ['DELBLOCKS', Lang::t('toolbar.delblocks'), 'DELBLOCKS'],
    ],
    'View' => [   // i18n-ignore (the group's key in $__tools, not shown)
        ['DIST', Lang::t('toolbar.measure'), 'DI'],
        ['AREA', Lang::t('toolbar.area'), 'AA'],
        ['MEASUREGEOM', Lang::t('toolbar.measuregeom'), 'MEA'],
        ['SPLIT 2V', Lang::t('toolbar.split.2v'), 'SPLIT'],
        ['SPLIT 2H', Lang::t('toolbar.split.2h'), 'SPLIT'],
        ['SPLIT 4', Lang::t('toolbar.split.4'), 'SPLIT'],
        ['SPLIT SI', Lang::t('toolbar.split.1'), 'SPLIT'],
        // a turned view (0.5 DR.8): UCS Z ∓90, which turns the view with it (as UCSFOLLOW 1); nothing in the drawing moves
        ['TURNLEFT', Lang::t('toolbar.turn.left'), 'TURNLEFT'],
        ['TURNRIGHT', Lang::t('toolbar.turn.right'), 'TURNRIGHT'],
        ['TURNWORLD', Lang::t('toolbar.turn.world'), 'TURNWORLD'],
        ['COMPARESETTINGS', Lang::t('toolbar.compare'), 'CMPSET'],   // 0.5 WL.12
        ['MAPLAYERS', Lang::t('toolbar.maplayers'), 'ML'],   // 0.5 SG.3
        ['POINTCLOUDATTACH', Lang::t('toolbar.pcattach'), 'PCATTACH'],   // 0.5 SG.1
        ['POINTCLOUD', Lang::t('toolbar.pointcloud'), 'PC'],
        ['LINKVIEWS', Lang::t('toolbar.linkviews'), 'LINKVIEWS'],
        ...($__3dUrl ? [['OPENIN3D', Lang::t('toolbar.open3d', ['app' => $__3dApp['name']]), 'OPENIN3D']] : []),
        // customizing (session cad-lisp): here, since a File "More" would push the toolbar to three rows at 1440 px
        ['APPLOAD', Lang::t('toolbar.appload'), 'AP'],
        ['ALIASEDIT', Lang::t('toolbar.aliasedit'), 'ALIASEDIT'],
        ['SHORTCUTS', Lang::t('toolbar.shortcuts'), 'KEYS'],   // 0.5 WL.18
    ],
    'Modify' => [   // i18n-ignore (the group's key in $__tools, not shown)
        ['ARRAY', Lang::t('toolbar.array'), 'AR'],
        ['JOIN', Lang::t('toolbar.join'), 'J'],
        ['MATCHPROP', Lang::t('toolbar.matchprop.long'), 'MA'],
        ['BREAK', Lang::t('toolbar.break'), 'BR'],
        ['LENGTHEN', Lang::t('toolbar.lengthen'), 'LEN'],
    ],
];
?>
<main id="main" class="cc" data-cadcraft<?php if ($__3dUrl): ?> data-open3d-url="<?= e($__3dUrl) ?>" data-open3d-app="<?= e($__3dApp['name']) ?>"<?php endif; ?><?php if ($__bimUrl): ?> data-bim-url="<?= e($__bimUrl) ?>"<?php endif; ?>>
  <h1 class="visually-hidden"><?= Lang::e('ui.h1', ['app' => $app['name']]) ?></h1>

  <div class="cc-tools" role="toolbar" aria-label="<?= Lang::e('ui.tools') ?>">
    <?php foreach ($__tools as $__group => $__items): ?>
      <?php $__glabel = Lang::t('toolbar.group.' . strtolower($__group)); ?>
      <div class="cc-tool-group" role="group" data-tb-key="<?= e($__group) ?>" aria-label="<?= e($__glabel) ?>">
        <span class="cc-tool-label" aria-hidden="true"><?= e($__glabel) ?></span>
        <div class="cc-tool-row">
          <?php foreach ($__items as [$__cmd, $__icon, $__label, $__title]): ?>
            <button type="button" class="cc-tool" data-cmd="<?= e($__cmd) ?>" title="<?= e($__title) ?>">
              <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= e($__label) ?></span>
            </button>
          <?php endforeach; ?>
          <?php if (!empty($__more[$__group])): ?>
            <details class="cc-menu" data-group-menu="<?= e($__group) ?>">
              <summary class="cc-tool" title="<?= Lang::e('toolbar.more.title', ['group' => $__glabel]) ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('toolbar.more') ?></span></summary>
              <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('toolbar.more.title', ['group' => $__glabel]) ?>">
                <?php foreach ($__more[$__group] as [$__cmd, $__label, $__key]): ?>
                  <button type="button" role="menuitem" data-cmd="<?= e($__cmd) ?>"><?= e($__label) ?> <kbd><?= e($__key) ?></kbd></button>
                <?php endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Edit'): /* i18n-ignore: group id */ ?>
            <details class="cc-menu" data-edit-menu>
              <summary class="cc-tool" title="<?= Lang::e('ui.more_editing_cut_paste') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('ui.more') ?></span></summary>
              <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('ui.more_editing') ?>">
                <button type="button" role="menuitem" data-cmd="CUTCLIP"><?= Lang::e('ui.cut') ?> <kbd>Ctrl+X</kbd></button>
                <button type="button" role="menuitem" data-cmd="COPYCLIP"><?= Lang::e('ui.copy') ?> <kbd>Ctrl+C</kbd></button>
                <button type="button" role="menuitem" data-cmd="PASTECLIP"><?= Lang::e('ui.paste') ?> <kbd>Ctrl+V</kbd></button>
                <button type="button" role="menuitem" data-cmd="PASTEORIG"><?= Lang::e('ui.paste_place') ?> <kbd>Ctrl+Shift+V</kbd></button>
                <button type="button" role="menuitem" data-cmd="DUPLICATE"><?= Lang::e('ui.duplicate_move') ?> <kbd>Ctrl+D</kbd></button>
                <button type="button" role="menuitem" data-cmd="ERASE"><?= Lang::e('ui.delete') ?> <kbd>Delete</kbd></button>
                <hr>
                <button type="button" role="menuitem" data-cmd="SELECTALL"><?= Lang::e('ui.select_all') ?> <kbd>Ctrl+A</kbd></button>
                <button type="button" role="menuitem" data-cmd="DESELECT"><?= Lang::e('ui.select_none') ?> <kbd>Esc</kbd></button>
                <button type="button" role="menuitem" data-cmd="QSELECT"><?= Lang::e('toolbar.qselect') ?> <kbd>QS</kbd></button><?php /* i18n-ignore: a command alias */ ?>
                <button type="button" role="menuitem" data-cmd="SELECTSIMILAR"><?= Lang::e('toolbar.similar') ?> <kbd>SIM</kbd></button><?php /* i18n-ignore: a command alias */ ?>
                <button type="button" role="menuitem" data-cmd="FIND"><?= Lang::e('toolbar.find') ?> <kbd>FIND</kbd></button><?php /* i18n-ignore: a command alias */ ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Parametric'): /* i18n-ignore: group id */ ?>
            <details class="cc-menu" data-param-menu>
              <summary class="cc-tool" title="<?= Lang::e('ui.more_constraints_dimensional_constraints') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('ui.more') ?></span></summary>
              <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('ui.more_constraints') ?>">
                <button type="button" role="menuitem" data-cmd="GCHORIZONTAL"><?= Lang::e('ui.horizontal') ?></button>
                <button type="button" role="menuitem" data-cmd="GCVERTICAL"><?= Lang::e('ui.vertical') ?></button>
                <button type="button" role="menuitem" data-cmd="GCPARALLEL"><?= Lang::e('ui.parallel') ?></button>
                <button type="button" role="menuitem" data-cmd="GCPERPENDICULAR"><?= Lang::e('ui.perpendicular') ?></button>
                <button type="button" role="menuitem" data-cmd="GCCOINCIDENT"><?= Lang::e('ui.coincident') ?></button>
                <button type="button" role="menuitem" data-cmd="GCTANGENT"><?= Lang::e('ui.tangent') ?></button>
                <button type="button" role="menuitem" data-cmd="GCEQUAL"><?= Lang::e('ui.equal') ?></button>
                <button type="button" role="menuitem" data-cmd="GCFIX"><?= Lang::e('ui.fix') ?></button>
                <button type="button" role="menuitem" data-cmd="GCCOLLINEAR"><?= Lang::e('ui.collinear') ?></button>
                <button type="button" role="menuitem" data-cmd="GCCONCENTRIC"><?= Lang::e('ui.concentric') ?></button>
                <button type="button" role="menuitem" data-cmd="GCSYMMETRIC"><?= Lang::e('ui.symmetric') ?></button>
                <hr>
                <button type="button" role="menuitem" data-cmd="DCLINEAR"><?= Lang::e('ui.linear_dimensional') ?></button>
                <button type="button" role="menuitem" data-cmd="DCALIGNED"><?= Lang::e('ui.aligned_dimensional') ?></button>
                <button type="button" role="menuitem" data-cmd="DCANGULAR"><?= Lang::e('ui.angular_dimensional') ?></button>
                <button type="button" role="menuitem" data-cmd="DCRADIUS"><?= Lang::e('ui.radius_dimensional') ?></button>
                <button type="button" role="menuitem" data-cmd="DCDIAMETER"><?= Lang::e('ui.diameter_dimensional') ?></button>
                <button type="button" role="menuitem" data-cmd="DCCONVERT"><?= Lang::e('ui.convert_dimensions') ?></button>
                <hr>
                <button type="button" role="menuitem" data-cmd="DELCONSTRAINT"><?= Lang::e('ui.delete_constraints') ?></button>
                <button type="button" role="menuitem" data-cmd="CONSTRAINTBAR S"><?= Lang::e('ui.show_constraint_bars') ?></button>
                <button type="button" role="menuitem" data-cmd="CONSTRAINTBAR H"><?= Lang::e('ui.hide_constraint_bars') ?></button>
                <button type="button" role="menuitem" data-cmd="DCDISPLAY"><?= Lang::e('ui.show_hide_dimensional_constraints') ?></button>
                <hr>
                <button type="button" role="menuitem" data-cmd="SWBOUT"><?= Lang::e('ui.macro_solidworks_swb') ?></button>
              </div>
            </details>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
    <input type="file" class="visually-hidden" accept=".dwg,.dxf,.json,.ccsheets,.pln,.pla,.tpl,.bpn,.las,.laz,.xyz,.pts" tabindex="-1" aria-hidden="true" data-file>
  </div>

  <?php
  // The 3D group: ws3d.js puts it in the toolbar (after File) when the 3D tab first opens, and shows it only while that
  // tab shows, in place of the 2D-only groups — so the toolbar keeps its rows. Buttons run typed commands (commands3d.js).
  $__tools3d = [
      ['EXTRUDE', 'box-arrow-up', Lang::t('ui.extrude'), Lang::t('ui.extrude_closed_2d_objects')],
      ['PRESSPULL', 'arrows-vertical', Lang::t('ui.presspull'), Lang::t('ui.push_pull_face_solid')],
      ['BOX', 'box', Lang::t('ui.box'), Lang::t('ui.box_two_corners_height')],
      ['CYLINDER', 'database', Lang::t('ui.cylinder'), Lang::t('ui.cylinder_centre_radius_height')],
      ['WEDGE', 'triangle-half', Lang::t('ui.wedge'), Lang::t('ui.wedge_two_corners_height')],
      ['MOVE', 'arrows-move', Lang::t('ui.move'), Lang::t('ui.move_solids_faces_edges')],
      ['COPY', 'copy', Lang::t('ui.copy'), Lang::t('ui.copy_solids_co')],
      ['ROTATE', 'arrow-repeat', Lang::t('ui.rotate'), Lang::t('ui.rotate_solids_ro')],
      ['ERASE', 'eraser', Lang::t('ui.erase'), Lang::t('ui.erase_solids_faces_edges')],
      ['3DORBIT', 'globe', Lang::t('ui.orbit'), Lang::t('ui.3dorbit.title')],
  ];
  ?>
  <template data-tools-3d>
    <div class="cc-tool-group" role="group" aria-label="3D">
      <span class="cc-tool-label" aria-hidden="true">3D</span>
      <div class="cc-tool-row">
        <?php foreach ($__tools3d as [$__cmd, $__icon, $__label, $__title]): ?>
          <button type="button" class="cc-tool" data-cmd="<?= e($__cmd) ?>" title="<?= e($__title) ?>">
            <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= e($__label) ?></span>
          </button>
        <?php endforeach; ?>
        <details class="cc-menu" data-bool3d-menu>
          <summary class="cc-tool" title="<?= Lang::e('toolbar.bool.title') ?>"><i class="bi bi-intersect" aria-hidden="true"></i><span><?= Lang::e('toolbar.bool') ?></span></summary>
          <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('toolbar.bool') ?>">
            <button type="button" role="menuitem" data-cmd="REVOLVE"><?= Lang::e('toolbar.revolve') ?> <kbd>REV</kbd></button><?php /* i18n-ignore: command aliases */ ?>
            <button type="button" role="menuitem" data-cmd="SWEEP"><?= Lang::e('toolbar.sweep') ?> <kbd>SWEEP</kbd></button><?php /* i18n-ignore: command aliases */ ?>
            <hr>
            <button type="button" role="menuitem" data-cmd="UNION"><?= Lang::e('toolbar.bool.union') ?> <kbd>UNI</kbd></button><?php /* i18n-ignore: command aliases */ ?>
            <button type="button" role="menuitem" data-cmd="SUBTRACT"><?= Lang::e('toolbar.bool.subtract') ?> <kbd>SU</kbd></button><?php /* i18n-ignore: command aliases */ ?>
            <button type="button" role="menuitem" data-cmd="INTERSECT"><?= Lang::e('toolbar.bool.intersect') ?> <kbd>IN</kbd></button><?php /* i18n-ignore: command aliases */ ?>
          </div>
        </details>
        <details class="cc-menu" data-view3d-menu>
          <summary class="cc-tool" title="<?= Lang::e('ui.standard_views_perspective_parallel') ?>"><i class="bi bi-badge-3d" aria-hidden="true"></i><span><?= Lang::e('ui.views') ?></span></summary>
          <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('ui.views') ?>">
            <button type="button" role="menuitem" data-cmd="VIEW I"><?= Lang::e('ui.iso') ?></button>
            <button type="button" role="menuitem" data-cmd="VIEW T"><?= Lang::e('ui.top') ?></button>
            <button type="button" role="menuitem" data-cmd="VIEW BO"><?= Lang::e('ui.bottom') ?></button>
            <button type="button" role="menuitem" data-cmd="VIEW F"><?= Lang::e('ui.front') ?></button>
            <button type="button" role="menuitem" data-cmd="VIEW BA"><?= Lang::e('ui.back') ?></button>
            <button type="button" role="menuitem" data-cmd="VIEW L"><?= Lang::e('ui.left') ?></button>
            <button type="button" role="menuitem" data-cmd="VIEW R"><?= Lang::e('ui.right') ?></button>
            <hr>
            <button type="button" role="menuitemradio" aria-checked="true" data-proj="persp" data-cmd="VIEW P"><?= Lang::e('ui.perspective') ?></button>
            <button type="button" role="menuitemradio" aria-checked="false" data-proj="parallel" data-cmd="VIEW PA"><?= Lang::e('ui.parallel') ?></button>
            <hr>
            <button type="button" role="menuitem" data-cmd="VIEW E"><?= Lang::e('ui.zoom_everything') ?></button>
          </div>
        </details>
        <details class="cc-menu" data-style3d-menu>
          <summary class="cc-tool" title="<?= Lang::e('ui.visual_style_shaded_edges') ?>"><i class="bi bi-circle-half" aria-hidden="true"></i><span><?= Lang::e('ui.style') ?></span></summary>
          <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('ui.visual_style') ?>">
            <button type="button" role="menuitemradio" aria-checked="false" data-style-key="shaded" data-cmd="VSCURRENT S"><?= Lang::e('ui.shaded') ?></button>
            <button type="button" role="menuitemradio" aria-checked="true" data-style-key="edges" data-cmd="VSCURRENT E"><?= Lang::e('ui.shaded_edges') ?></button>
            <button type="button" role="menuitemradio" aria-checked="false" data-style-key="hidden" data-cmd="VSCURRENT H"><?= Lang::e('ui.hidden_line') ?></button>
            <button type="button" role="menuitemradio" aria-checked="false" data-style-key="wire" data-cmd="VSCURRENT W"><?= Lang::e('ui.wireframe') ?></button>
            <button type="button" role="menuitemradio" aria-checked="false" data-style-key="xray" data-cmd="VSCURRENT X"><?= Lang::e('ui.x_ray') ?></button>
          </div>
        </details>
        <details class="cc-menu" data-export3d-menu>
          <summary class="cc-tool" title="<?= Lang::e('ui.export_3d_model_glb') ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span><?= Lang::e('ui.export') ?></span></summary>
          <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('ui.export_3d_model') ?>">
            <button type="button" role="menuitem" data-cmd="GLBOUT"><?= Lang::e('ui.glb_gltf_viewers_web') ?></button>
            <button type="button" role="menuitem" data-cmd="OBJOUT"><?= Lang::e('ui.obj') ?></button>
            <button type="button" role="menuitem" data-cmd="STLOUT"><?= Lang::e('ui.stl_3d_printing_millimeters') ?></button>
          </div>
        </details>
      </div>
    </div>
  </template>

  <aside class="cc-panel cc-left" aria-label="<?= Lang::e('ui.layers_drawing') ?>">
    <section class="cc-sec" data-layers-sec>
      <div class="cc-sec-head">
        <h2 class="cc-h"><?= Lang::e('ui.layers') ?></h2>
        <span class="cc-sec-tools">
          <button type="button" class="cc-linkbtn" data-layer-new><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('ui.new_layer') ?></button>
          <details class="cc-menu" data-layer-menu>
            <summary class="cc-linkbtn" title="<?= Lang::e('layers.tools.title') ?>"><?= Lang::e('layers.tools') ?></summary>
            <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('layers.tools.title') ?>">
              <?php foreach ([['LAYISO', 'layers.tools.iso'], ['LAYUNISO', 'layers.tools.uniso'], ['LAYOFF', 'layers.tools.off'], ['LAYFRZ', 'layers.tools.frz'], ['LAYMCUR', 'layers.tools.mcur'], null, ['LAYON', 'layers.tools.on'], ['LAYTHW', 'layers.tools.thw'], null, ['LAYMRG', 'layers.tools.mrg'], ['LAYDEL', 'layers.tools.del'], ['RENAME', 'layers.tools.ren']] as $__lt): ?>
                <?php if (!$__lt): ?><hr><?php continue; endif; ?>
                <button type="button" role="menuitem" data-cmd="<?= e($__lt[0]) ?>"><?= Lang::e($__lt[1]) ?> <kbd><?= e($__lt[0]) ?></kbd></button>
              <?php endforeach; ?>
            </div>
          </details>
        </span>
      </div>
      <form class="cc-layer-form" data-layer-form hidden>
        <label class="visually-hidden" for="cc-layer-name"><?= Lang::e('ui.layer_name') ?></label>
        <input type="text" id="cc-layer-name" class="cc-input" maxlength="255" placeholder="<?= Lang::e('ui.layer_name') ?>" autocomplete="off" data-layer-name>
        <button type="submit" class="btn-plot btn-sm-cc"><?= Lang::e('ui.add') ?></button>
      </form>
      <p class="cc-note cc-vpfrz-note" data-vpfrz-note hidden><?= Lang::e('vp.frz.note') ?></p>
      <ul class="cc-layers" data-layer-list></ul>
      <p class="cc-note"><?= Lang::e('ui.filled_dot_current_layer') ?></p>
    </section>
    <section class="cc-sec" data-blocks-sec>
      <div class="cc-sec-head">
        <h2 class="cc-h"><?= Lang::e('ui.blocks') ?></h2>
        <button type="button" class="cc-linkbtn" data-library><i class="bi bi-collection" aria-hidden="true"></i> <?= Lang::e('ui.library_2') ?></button>
      </div>
      <ul class="cc-blocks" data-block-list></ul>
      <p class="cc-note" data-blocks-empty><?= Lang::e('ui.no_blocks_yet_select') ?> <strong><?= Lang::e('ui.make') ?></strong> <?= Lang::e('ui.or_type') ?> <kbd>B</kbd><?= Lang::e('ui.turn_them_into_block') ?> <kbd>I</kbd> <?= Lang::e('ui.then') ?> <kbd>F</kbd> <?= Lang::e('ui.brings_one_another_drawing') ?> <strong><?= Lang::e('ui.library_2') ?></strong> <?= Lang::e('ui.places_library_items') ?></p>
    </section>
    <section class="cc-sec cc-ss" data-sheetset-sec aria-labelledby="cc-ss-head">
      <div class="cc-sec-head">
        <h2 class="cc-h" id="cc-ss-head"><?= Lang::e('sheetset.h') ?></h2>
        <span class="cc-sec-tools">
          <details class="cc-menu" data-sheetset-menu>
            <summary class="cc-linkbtn" title="<?= Lang::e('sheetset.menu.title') ?>"><?= Lang::e('sheetset.menu') ?></summary>
            <div class="cc-menu-list" role="menu" aria-label="<?= Lang::e('sheetset.menu.title') ?>">
              <?php foreach ([['open', 'sheetset.m.open'], ['new', 'sheetset.m.new'], null, ['add', 'sheetset.m.add'], ['newsheet', 'sheetset.m.newsheet'], ['subset', 'sheetset.m.subset'], ['rename', 'sheetset.m.rename'], ['remove', 'sheetset.m.remove'], ['renumber', 'sheetset.m.renumber'], ['numbering', 'sheetset.m.numbering'], ['props', 'sheetset.m.props'], null, ['publish', 'sheetset.m.publish'], ['update', 'sheetset.m.update'], ['list', 'sheetset.m.list'], ['archive', 'sheetset.m.archive'], null, ['undo', 'sheetset.m.undo'], ['redo', 'sheetset.m.redo'], ['download', 'sheetset.m.download'], ['close', 'sheetset.m.close']] as $__ss): ?>
                <?php if (!$__ss): ?><hr><?php continue; endif; ?>
                <button type="button" role="menuitem" data-ss="<?= e($__ss[0]) ?>"><?= Lang::e($__ss[1]) ?></button>
              <?php endforeach; ?>
            </div>
          </details>
        </span>
      </div>
      <div data-sheetset-tree></div>
      <p class="cc-note" data-sheetset-empty><?= Lang::e('sheetset.empty') ?></p>
    </section>
    <section class="cc-sec">
      <h2 class="cc-h"><?= Lang::e('ui.drawing') ?></h2>
      <dl class="cc-dl" data-info></dl>
      <div data-report></div>
    </section>
  </aside>

  <section class="cc-stage" aria-label="<?= Lang::e('ui.drawing_area') ?>" data-stage>
    <nav class="cc-doctabs" data-doctabs hidden aria-label="<?= Lang::e('doctabs.label') ?>"></nav>
    <div class="cc-canvases">
      <canvas class="cc-canvas" data-base aria-hidden="true"></canvas>
      <canvas class="cc-canvas cc-over" data-over aria-label="<?= Lang::e('ui.canvas.aria') ?>"></canvas>
    </div>
    <div class="cc-hint" data-hint>
      <div class="cc-hint-head">
        <p class="cc-hint-h"><?= Lang::e('ui.start_drawing') ?></p>
        <button type="button" class="cc-x cc-hint-close" data-hint-close aria-label="<?= Lang::e('ui.close') ?>" title="<?= Lang::e('ui.close') ?>"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
      </div>
      <ul>
        <li><?= Lang::e('ui.type') ?> <kbd>L</kbd> <?= Lang::e('ui.and_press') ?> <kbd>Enter</kbd> <?= Lang::e('ui.line_click_points_type') ?> <kbd>@100,0</kbd><?= Lang::e('ui.press') ?> <kbd>Enter</kbd> <?= Lang::e('ui.to_finish') ?></li>
        <li><kbd>C</kbd> <?= Lang::e('ui.circle_2') ?> <kbd>REC</kbd> <?= Lang::e('ui.rectangle_2') ?> <kbd>TR</kbd> <?= Lang::e('ui.trim_2') ?> <kbd>O</kbd> <?= Lang::e('ui.offset_type') ?> <kbd>HELP</kbd> <?= Lang::e('ui.every_command') ?></li>
        <li><?= Lang::e('ui.wheel_zoom_drag_wheel') ?> <kbd>Enter</kbd>.</li>
        <li><kbd>DLI</kbd> <?= Lang::e('ui.dimensions') ?> <kbd>B</kbd> <?= Lang::e('ui.makes_block') ?> <strong>+</strong> <?= Lang::e('ui.under_drawing_makes_sheet') ?> <kbd>Ctrl</kbd>+<kbd>P</kbd> <?= Lang::e('ui.plots_pdf') ?></li>
        <li><?= Lang::e('ui.drop_dwg_dxf_here') ?></li>
      </ul>
    </div>
    <div class="cc-drop" data-drop hidden><span><i class="bi bi-box-arrow-in-down-right" aria-hidden="true"></i> <?= Lang::e('ui.drop_dwg_dxf_open') ?></span></div>
    <div class="cc-busy" data-busy hidden><span data-busy-text><?= Lang::e('ui.working') ?></span></div>
    <nav class="cc-tabs" aria-label="<?= Lang::e('ui.model_layouts') ?>">
      <div class="cc-tablist" role="tablist" data-tabs></div>
      <button type="button" class="cc-tab-add" data-cmd="LAYOUT" title="<?= Lang::e('ui.new_sheet_layout_title') ?>"><i class="bi bi-plus-lg" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('ui.new_sheet') ?></span></button>
    </nav>
  </section>

  <aside class="cc-panel cc-right" aria-label="<?= Lang::e('ui.properties') ?>">
    <section class="cc-sec">
      <h2 class="cc-h" data-props-h><?= Lang::e('ui.properties') ?></h2>
      <div data-props></div>
    </section>
    <section class="cc-sec cc-params" data-params-sec hidden aria-labelledby="cc-params-h">
      <div class="cc-sec-head">
        <h2 class="cc-h" id="cc-params-h"><?= Lang::e('ui.parameters') ?></h2>
        <button type="button" class="cc-x" data-params-close aria-label="<?= Lang::e('ui.close_parameters_panel') ?>"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
      </div>
      <div data-params></div>
    </section>
  </aside>

  <div class="cc-cmd">
    <ol class="cc-history" data-history aria-live="polite" aria-label="<?= Lang::e('ui.command_history') ?>"></ol>
    <form class="cc-cmdline" data-cmd-form autocomplete="off">
      <label for="cc-cmd" class="cc-prompt" data-prompt><?= Lang::e('ui.command') ?></label>
      <input type="text" id="cc-cmd" class="cc-cmd-input" data-cmd-input spellcheck="false" autocapitalize="off" aria-describedby="cc-suggest">
      <span class="cc-suggest" id="cc-suggest" data-suggest></span>
    </form>
  </div>

  <dialog class="cc-dialog" data-plot aria-labelledby="cc-plot-h">
    <form method="dialog" class="cc-plot" data-plot-form>
      <div class="cc-plot-head">
        <h2 class="cc-h" id="cc-plot-h"><?= Lang::e('ui.plot_pdf') ?></h2>
        <button type="button" class="cc-x" data-plot-close aria-label="<?= Lang::e('ui.close') ?>"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
      </div>
      <div class="cc-plot-body">
        <div class="cc-plot-opts">
          <p class="cc-note" data-plot-what></p>
          <div class="cc-props" data-plot-model>
            <label for="cc-plot-area"><?= Lang::e('ui.area') ?></label>
            <div class="cc-row">
              <select id="cc-plot-area" class="cc-select" data-plot-area>
                <option value="extents"><?= Lang::e('ui.everything_extents') ?></option>
                <option value="display"><?= Lang::e('ui.what_screen') ?></option>
                <option value="window"><?= Lang::e('ui.a_window') ?></option>
              </select>
              <button type="button" class="btn-line btn-sm-cc" data-plot-pick hidden><?= Lang::e('ui.pick') ?></button>
            </div>
            <label for="cc-plot-paper"><?= Lang::e('ui.paper') ?></label>
            <select id="cc-plot-paper" class="cc-select" data-plot-paper></select>
            <label for="cc-plot-orient"><?= Lang::e('ui.orientation') ?></label>
            <select id="cc-plot-orient" class="cc-select" data-plot-orient>
              <option value="landscape"><?= Lang::e('ui.landscape') ?></option>
              <option value="portrait"><?= Lang::e('ui.portrait') ?></option>
            </select>
            <label for="cc-plot-scale"><?= Lang::e('ui.scale') ?></label>
            <select id="cc-plot-scale" class="cc-select" data-plot-scale></select>
          </div>
          <div class="cc-props">
            <label for="cc-plot-ink"><?= Lang::e('ui.ink') ?></label>
            <select id="cc-plot-ink" class="cc-select" data-plot-ink>
              <option value="mono"><?= Lang::e('ui.black_monochrome') ?></option>
              <option value="color"><?= Lang::e('ui.drawing_colours') ?></option>
            </select>
            <label for="cc-plot-pen"><?= Lang::e('ui.line_weight') ?></label>
            <select id="cc-plot-pen" class="cc-select" data-plot-pen></select>
            <label for="cc-plot-dpi"><?= Lang::e('ui.plot.pictures') ?></label>
            <select id="cc-plot-dpi" class="cc-select" data-plot-dpi>
              <option value="0"><?= Lang::e('ui.plot.pictures.own') ?></option>
              <option value="600"><?= Lang::e('ui.plot.dpi', ['n' => 600]) ?></option>
              <option value="300"><?= Lang::e('ui.plot.dpi', ['n' => 300]) ?></option>
              <option value="150"><?= Lang::e('ui.plot.dpi', ['n' => 150]) ?></option>
            </select>
          </div>
          <p class="cc-note" data-plot-info></p>
        </div>
        <div class="cc-plot-preview"><canvas data-plot-canvas aria-label="<?= Lang::e('ui.preview_plotted_sheet') ?>"></canvas></div>
      </div>
      <div class="cc-plot-foot">
        <span class="cc-note" data-plot-status></span>
        <button type="button" class="btn-line btn-sm-cc" data-plot-publish hidden title="<?= Lang::e('plot.publish.title') ?>"><?= Lang::e('plot.publish') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-plot-open><?= Lang::e('ui.open_print') ?></button>
        <button type="button" class="btn-plot btn-sm-cc" data-plot-save><?= Lang::e('ui.download_pdf') ?></button>
      </div>
    </form>
  </dialog>

  <footer class="cc-status" aria-label="<?= Lang::e('ui.status') ?>">
    <output class="cc-coords" data-coords>0, 0</output>
    <span class="cc-status-msg" data-status></span>
    <div class="cc-toggles">
      <button type="button" class="cc-toggle" data-toggle="grid" aria-pressed="true" title="<?= Lang::e('ui.grid_f7') ?>"><?= Lang::e('ui.grid') ?></button>
      <button type="button" class="cc-toggle" data-toggle="ortho" aria-pressed="false" title="<?= Lang::e('ui.ortho_f8') ?>"><?= Lang::e('ui.ortho') ?></button>
      <button type="button" class="cc-toggle" data-toggle="polar" aria-pressed="false" title="<?= Lang::e('status.polar.title') ?>"><?= Lang::e('status.polar') ?></button>
      <button type="button" class="cc-toggle" data-toggle="osnap" aria-pressed="true" title="<?= Lang::e('ui.object_snap_f3') ?>"><?= Lang::e('ui.snap') ?></button>
      <button type="button" class="cc-toggle" data-toggle="otrack" aria-pressed="false" title="<?= Lang::e('status.otrack.title') ?>"><?= Lang::e('status.otrack') ?></button>
      <button type="button" class="cc-toggle" data-toggle="dyn" aria-pressed="false" title="<?= Lang::e('status.dyn.title') ?>"><?= Lang::e('status.dyn') ?></button>
      <button type="button" class="cc-toggle" data-toggle="lwt" aria-pressed="false" title="<?= Lang::e('status.lwt.title') ?>"><?= Lang::e('status.lwt') ?></button>
      <button type="button" class="cc-toggle" data-qp aria-pressed="false" title="<?= Lang::e('status.qp.title') ?>"><?= Lang::e('status.qp') ?></button>
      <details class="cc-snapkinds">
        <summary title="<?= Lang::e('ui.choose_snaps') ?>"><i class="bi bi-chevron-up" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('ui.choose_snaps') ?></span></summary>
        <fieldset data-snap-kinds>
          <legend><?= Lang::e('ui.object_snaps') ?></legend>
        </fieldset>
      </details>
    </div>
  </footer>
</main>
