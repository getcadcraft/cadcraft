<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — CadCraft's own section of the Settings dialog (core/components/app-settings.inc includes it).
 * cadcraft.js reads and stores the fields (localStorage cadcraft.settings) and resets them on "cc-settings-reset".
 *   cursor     crosshair + pick box size: small / medium (default) / large / full screen (D8.14: the crosshair edge to edge;
 *              CURSORSIZE 100) — the pick tolerance follows the box
 *   pointer    smoother pointer on slower computers (0.9.1, pointer-perf.js): automatic (default: turned on by itself, with a
 *              note, when the frames stay slow while the pointer moves) / on / off. On = the system's crosshair pointer
 *              instead of the drawn crosshair and pick box, and the object under the pointer lights up when it rests
 *   pasteBase  where a pasted copy hangs from the cursor (PASTECLIP, Ctrl+V): lower-left corner (default) / center
 *   pick       what a click on an object does with no command running: adds to the selection (default; Shift+click
 *              removes) / replaces the selection (Shift+click adds or removes; a window replaces, Shift+window adds)
 *   emptyClick a click on an empty spot with no command running: clears the selection (default; Shift keeps it) / keeps it
 *              (Esc clears it), as the other drafting programs do (0.6 DC.67)
 *   lasso      press and drag on an empty spot: a freehand lasso (default; lasso.js) / a rectangle — LASSOMODE 1 / 0
 *   corner     corner indicator: automatic (default: the axis icon on the Model tab, the view cube on the 3D tab) /
 *              axis icon (the X/Y icon on the Model tab, an X/Y/Z triad on the 3D tab) / view cube (m3d/viewcube.js: at Top on the Model tab, where a click opens the 3D tab looking from there) / none
 *   trimDrag   TRIM / EXTEND, a drag on an empty spot: a freehand path (default) / a window, crossing (0.6 DF.13)
 *   autocomplete  drawing autocomplete: ghost geometry from the drawing's own patterns, Tab accepts (default; 0.8 EG.54) / off
 *   selTotals  the selection's length and area in the status bar: on (default) / off (0.6 DF.4)
 *   tabs       sheet tabs: full names (default) / sheet numbers only (WL.9; the number from the open sheet set, else the
 *              name's first word when it reads like one; the tooltip keeps the whole name)
 *   My tools   buttons of your own (mytools-ui.js; localStorage cadcraft.mytools): list, add / edit / delete, export and
 *              import JSON, import a CUIx file
 */
?>
<?php /* 0.9 SU.1083: the command line (cmdline.js; stored in cc-app-settings:cadcraft → cmdline) and the top area (cadcraft.settings topArea) */ ?>
<fieldset data-sec-group="keys" data-sec-group-label="<?= Lang::e('set.group.keys') ?>" class="shell-set" data-cmdline-settings>
  <legend><?= Lang::e('set.cmdline') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.cmdline') ?>">
    <label><input type="radio" name="ccCmdDock" value="bottom"> <i class="bi bi-window-dock" aria-hidden="true"></i> <?= Lang::e('set.cmdline.dock.bottom') ?></label>
    <label><input type="radio" name="ccCmdDock" value="float"> <i class="bi bi-window-stack" aria-hidden="true"></i> <?= Lang::e('set.cmdline.dock.float') ?></label>
  </div>
  <label class="cc-set-range" for="cc-set-cmdlines"><?= Lang::e('set.cmdline.lines') ?>: <output data-cmd-lines-out for="cc-set-cmdlines"></output></label>
  <input type="range" id="cc-set-cmdlines" name="ccCmdLines" min="0" max="12" step="1" value="4">
  <p><button type="button" class="btn-line btn-sm-cc" data-cmd-std><?= Lang::e('set.cmdline.std') ?></button></p>
  <p class="shell-hint-text"><?= Lang::e('set.cmdline.hint') ?></p>
</fieldset>
<?php /* OPT.1: letters of your own for command options (optionkeys.js; the file is kept in localStorage cadcraft.optionkeys). The same
         editor as OPTIONKEYS; Import replaces the file (the one before is kept as cadcraft.optionkeys.previous), Export saves it. */ ?>
<fieldset data-sec-group="keys" class="shell-set" data-optkeys-settings>
  <legend><?= Lang::e('set.optkeys') ?></legend>
  <p class="shell-hint-text" data-optkeys-count aria-live="polite"></p>
  <p class="cc-set-btns">
    <button type="button" class="btn-line btn-sm-cc" data-optkeys-edit><i class="bi bi-pencil" aria-hidden="true"></i> <?= Lang::e('set.optkeys.edit') ?></button>
    <button type="button" class="btn-line btn-sm-cc" data-optkeys-import><i class="bi bi-upload" aria-hidden="true"></i> <?= Lang::e('optkeys.import') ?></button>
    <button type="button" class="btn-line btn-sm-cc" data-optkeys-export><i class="bi bi-download" aria-hidden="true"></i> <?= Lang::e('optkeys.export') ?></button>
  </p>
  <p class="shell-hint-text"><?= Lang::e('set.optkeys.hint') ?></p>
  <p class="shell-hint-text" data-optkeys-account aria-live="polite"></p>
</fieldset>
<fieldset data-sec-group="keys" class="shell-set">
  <legend><?= Lang::e('set.typedcoords') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.typedcoords') ?>">
    <label><input type="radio" name="ccTypedCoords" value="relative"> <i class="bi bi-arrow-up-right" aria-hidden="true"></i> <?= Lang::e('set.typedcoords.relative') ?></label>
    <label><input type="radio" name="ccTypedCoords" value="absolute"> <i class="bi bi-geo" aria-hidden="true"></i> <?= Lang::e('set.typedcoords.absolute') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.typedcoords.hint') ?></p>
</fieldset>
<?php /* ORS.25: commands typed on any keyboard layout; the keypad decimal key (keylayout.js) */ ?>
<fieldset data-sec-group="keys" class="shell-set" data-cc-keylayout-set>
  <legend><?= Lang::e('keylayout.set.legend') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('keylayout.set.legend') ?>">
    <label><input type="radio" name="ccKeylayout" value="on"> <i class="bi bi-keyboard" aria-hidden="true"></i> <?= Lang::e('keylayout.set.on') ?></label>
    <label><input type="radio" name="ccKeylayout" value="off"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('keylayout.set.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('keylayout.set.hint') ?></p>
</fieldset>
<fieldset data-sec-group="keys" class="shell-set" data-cc-keylayout-keypad-set>
  <legend><?= Lang::e('keylayout.keypad.legend') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('keylayout.keypad.legend') ?>">
    <label><input type="radio" name="ccKeylayoutKeypad" value="on"> <i class="bi bi-dot" aria-hidden="true"></i> <?= Lang::e('keylayout.keypad.on') ?></label>
    <label><input type="radio" name="ccKeylayoutKeypad" value="off"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('keylayout.keypad.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('keylayout.keypad.hint') ?></p>
</fieldset>
<?php /* My tools (0.5 DR.9): mytools-ui.js fills this — buttons of your own, their keys, JSON and CUIx import */ ?>
<fieldset data-sec-group="keys" class="shell-set" data-mytools-settings><legend><?= Lang::e('mytools.legend') ?></legend></fieldset>
<fieldset data-sec-group="pointer" data-sec-group-label="<?= Lang::e('set.group.pointer') ?>" class="shell-set" data-cc-settings>
  <legend><?= Lang::e('set.cursor') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.cursor_size') ?>">
    <label><input type="radio" name="ccCursor" value="small"> <i class="bi bi-plus" aria-hidden="true"></i> <?= Lang::e('set.small') ?></label>
    <label><input type="radio" name="ccCursor" value="medium"> <i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('set.medium') ?></label>
    <label><input type="radio" name="ccCursor" value="large"> <i class="bi bi-crosshair" aria-hidden="true"></i> <?= Lang::e('set.large') ?></label>
    <label><input type="radio" name="ccCursor" value="full"> <i class="bi bi-border-inner" aria-hidden="true"></i> <?= Lang::e('set.full_screen') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.crosshair_pick_box_drawing') ?></p>
</fieldset>
<fieldset data-sec-group="pointer" class="shell-set" data-cc-pointer-set>
  <legend><?= Lang::e('set.pointer') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.pointer') ?>">
    <label><input type="radio" name="ccPointer" value="auto"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('set.pointer.auto') ?></label>
    <label><input type="radio" name="ccPointer" value="on"> <i class="bi bi-speedometer2" aria-hidden="true"></i> <?= Lang::e('set.pointer.on') ?></label>
    <label><input type="radio" name="ccPointer" value="off"> <i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('set.pointer.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.pointer.hint') ?></p>
</fieldset>
<?php /* ORS.20: the offset crosshair for fingers (touch-crosshair-ui.js reads and writes these; kept in this browser) */ ?>
<fieldset data-sec-group="pointer" class="shell-set" data-touch-crosshair-set>
  <legend><?= Lang::e('touchx.set.legend') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('touchx.set.legend') ?>">
    <label><input type="radio" name="ccTouchx" value="auto"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('touchx.set.auto') ?></label>
    <label><input type="radio" name="ccTouchx" value="on"> <i class="bi bi-hand-index" aria-hidden="true"></i> <?= Lang::e('touchx.set.on') ?></label>
    <label><input type="radio" name="ccTouchx" value="off"> <i class="bi bi-x-lg" aria-hidden="true"></i> <?= Lang::e('touchx.set.off') ?></label>
  </div>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('touchx.set.side') ?>">
    <label><input type="radio" name="ccTouchxSide" value="left"> <i class="bi bi-arrow-up-left" aria-hidden="true"></i> <?= Lang::e('touchx.set.side.left') ?></label>
    <label><input type="radio" name="ccTouchxSide" value="right"> <i class="bi bi-arrow-up-right" aria-hidden="true"></i> <?= Lang::e('touchx.set.side.right') ?></label>
  </div>
  <label class="d-flex align-items-center gap-2"><span><?= Lang::e('touchx.set.distance') ?></span>
    <input type="range" class="form-range" name="ccTouchxDistance" min="24" max="240" step="4" value="72" style="max-width: 14rem">
    <output data-touch-crosshair-distance></output></label>
  <p class="shell-hint-text"><?= Lang::e('touchx.set.hint') ?></p>
</fieldset>
<fieldset data-sec-group="select" data-sec-group-label="<?= Lang::e('set.group.select') ?>" class="shell-set">
  <legend><?= Lang::e('set.clicking_objects') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.clicking_objects') ?>">
    <label><input type="radio" name="ccPick" value="add"> <i class="bi bi-plus-circle" aria-hidden="true"></i> <?= Lang::e('set.adds_selection') ?></label>
    <label><input type="radio" name="ccPick" value="replace"> <i class="bi bi-arrow-repeat" aria-hidden="true"></i> <?= Lang::e('set.replaces_selection') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.no_command_running_adds') ?></p>
</fieldset>
<fieldset data-sec-group="select" class="shell-set">
  <legend><?= Lang::e('set.emptyclick') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.emptyclick') ?>">
    <label><input type="radio" name="ccEmptyClick" value="clear"> <i class="bi bi-x-circle" aria-hidden="true"></i> <?= Lang::e('set.emptyclick.clear') ?></label>
    <label><input type="radio" name="ccEmptyClick" value="keep"> <i class="bi bi-check2-circle" aria-hidden="true"></i> <?= Lang::e('set.emptyclick.keep') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.emptyclick.hint') ?></p>
</fieldset>
<fieldset data-sec-group="select" class="shell-set">
  <legend><?= Lang::e('set.lasso') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.lasso') ?>">
    <label><input type="radio" name="ccLasso" value="lasso"> <i class="bi bi-lasso" aria-hidden="true"></i> <?= Lang::e('set.lasso.lasso') ?></label>
    <label><input type="radio" name="ccLasso" value="box"> <i class="bi bi-bounding-box" aria-hidden="true"></i> <?= Lang::e('set.lasso.box') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.lasso.hint') ?></p>
</fieldset>
<?php /* ORS.28: locked layers (cleanup-ui.js, lockedlayers.js) */ ?>
<fieldset data-sec-group="select" class="shell-set" data-ors-locked-set>
  <legend><?= Lang::e('lockfade.set.legend') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('lockfade.set.fade') ?>">
    <label><input type="radio" name="ccOrsLockFadeOn" value="on"> <i class="bi bi-circle-half" aria-hidden="true"></i> <?= Lang::e('lockfade.set.fade.on') ?></label>
    <label><input type="radio" name="ccOrsLockFadeOn" value="off"> <i class="bi bi-circle-fill" aria-hidden="true"></i> <?= Lang::e('lockfade.set.fade.off') ?></label>
  </div>
  <label class="cc-set-range" for="cc-set-ors-lockfade"><?= Lang::e('lockfade.set.amount') ?>: <output data-ors-lockfade-out for="cc-set-ors-lockfade"></output></label>
  <input type="range" id="cc-set-ors-lockfade" name="ccOrsLockFade" min="0" max="90" step="5" value="50">
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('lockfade.set.pick') ?>">
    <label><input type="radio" name="ccOrsLockPick" value="off"> <i class="bi bi-lock" aria-hidden="true"></i> <?= Lang::e('lockfade.set.pick.off') ?></label>
    <label><input type="radio" name="ccOrsLockPick" value="on"> <i class="bi bi-cursor" aria-hidden="true"></i> <?= Lang::e('lockfade.set.pick.on') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('lockfade.set.hint') ?></p>
</fieldset>
<fieldset data-sec-group="select" class="shell-set">
  <legend><?= Lang::e('set.seltotals') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.seltotals') ?>">
    <label><input type="radio" name="ccSelTotals" value="on"> <i class="bi bi-rulers" aria-hidden="true"></i> <?= Lang::e('set.seltotals.on') ?></label>
    <label><input type="radio" name="ccSelTotals" value="off"> <i class="bi bi-eye-slash" aria-hidden="true"></i> <?= Lang::e('set.seltotals.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.seltotals.hint') ?></p>
</fieldset>
<fieldset data-sec-group="edit" data-sec-group-label="<?= Lang::e('set.group.edit') ?>" class="shell-set">
  <legend><?= Lang::e('set.trimdrag') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.trimdrag') ?>">
    <label><input type="radio" name="ccTrimDrag" value="path"> <i class="bi bi-pencil" aria-hidden="true"></i> <?= Lang::e('set.trimdrag.path') ?></label>
    <label><input type="radio" name="ccTrimDrag" value="window"> <i class="bi bi-bounding-box-circles" aria-hidden="true"></i> <?= Lang::e('set.trimdrag.window') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.trimdrag.hint') ?></p>
</fieldset>
<fieldset data-sec-group="edit" class="shell-set">
  <legend><?= Lang::e('set.paste_point') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.paste_point') ?>">
    <label><input type="radio" name="ccPaste" value="lower-left"> <i class="bi bi-arrow-down-left-square" aria-hidden="true"></i> <?= Lang::e('set.lower_left_corner') ?></label>
    <label><input type="radio" name="ccPaste" value="center"> <i class="bi bi-plus-square" aria-hidden="true"></i> <?= Lang::e('set.center') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.where_pasted_copy_hangs') ?></p>
</fieldset>
<fieldset data-sec-group="screen" data-sec-group-label="<?= Lang::e('set.group.screen') ?>" class="shell-set">
  <legend><?= Lang::e('set.top_area') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.top_area') ?>">
    <label><input type="radio" name="ccTopArea" value="standard"> <i class="bi bi-layout-text-window" aria-hidden="true"></i> <?= Lang::e('set.top_area.standard') ?></label>
    <label><input type="radio" name="ccTopArea" value="compact"> <i class="bi bi-arrows-collapse" aria-hidden="true"></i> <?= Lang::e('set.top_area.compact') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.top_area.hint') ?></p>
</fieldset>
<fieldset data-sec-group="screen" class="shell-set">
  <legend><?= Lang::e('set.toolbar_rows') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.toolbar_rows') ?>">
    <label><input type="radio" name="ccToolbarRows" value="auto"> <i class="bi bi-text-wrap" aria-hidden="true"></i> <?= Lang::e('set.toolbar_rows.auto') ?></label>
    <label><input type="radio" name="ccToolbarRows" value="2"> <i class="bi bi-distribute-vertical" aria-hidden="true"></i> <?= Lang::e('set.toolbar_rows.2') ?></label>
    <label><input type="radio" name="ccToolbarRows" value="1"> <i class="bi bi-distribute-horizontal" aria-hidden="true"></i> <?= Lang::e('set.toolbar_rows.1') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.toolbar_rows.hint') ?></p>
</fieldset>
<fieldset data-sec-group="screen" class="shell-set">
  <legend><?= Lang::e('set.toolbar_dock') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.toolbar_dock') ?>">
    <label><input type="radio" name="ccToolbarDock" value="top"> <i class="bi bi-layout-sidebar-inset-reverse" style="transform:rotate(90deg)" aria-hidden="true"></i> <?= Lang::e('set.toolbar_dock.top') ?></label>
    <label><input type="radio" name="ccToolbarDock" value="bottom"> <i class="bi bi-layout-sidebar-inset" style="transform:rotate(90deg)" aria-hidden="true"></i> <?= Lang::e('set.toolbar_dock.bottom') ?></label>
    <label><input type="radio" name="ccToolbarDock" value="left"> <i class="bi bi-layout-sidebar-inset" aria-hidden="true"></i> <?= Lang::e('set.toolbar_dock.left') ?></label>
    <label><input type="radio" name="ccToolbarDock" value="right"> <i class="bi bi-layout-sidebar-inset-reverse" aria-hidden="true"></i> <?= Lang::e('set.toolbar_dock.right') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.toolbar_dock.hint') ?></p>
</fieldset>
<fieldset data-sec-group="screen" class="shell-set">
  <legend><?= Lang::e('set.tabs') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.tabs') ?>">
    <label><input type="radio" name="ccTabs" value="full"> <i class="bi bi-card-text" aria-hidden="true"></i> <?= Lang::e('set.tabs.full') ?></label>
    <label><input type="radio" name="ccTabs" value="number"> <i class="bi bi-123" aria-hidden="true"></i> <?= Lang::e('set.tabs.number') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.tabs.hint') ?></p>
</fieldset>
<fieldset data-sec-group="screen" class="shell-set">
  <legend><?= Lang::e('set.corner_indicator') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.corner_indicator') ?>">
    <label><input type="radio" name="ccCorner" value="auto"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('set.automatic_axis_icon_drawing') ?></label>
    <label><input type="radio" name="ccCorner" value="cube"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('set.view_cube') ?></label>
    <label><input type="radio" name="ccCorner" value="axes"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('set.axis_icon') ?></label>
    <label><input type="radio" name="ccCorner" value="none"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('set.none') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.automatic_shows_axis_icon') ?></p>
</fieldset>
<fieldset data-sec-group="help" data-sec-group-label="<?= Lang::e('set.group.help') ?>" class="shell-set">
  <legend><?= Lang::e('set.autocomplete') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.autocomplete') ?>">
    <label><input type="radio" name="ccAutocomplete" value="on"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('set.autocomplete.on') ?></label>
    <label><input type="radio" name="ccAutocomplete" value="off"> <i class="bi bi-eye-slash" aria-hidden="true"></i> <?= Lang::e('set.autocomplete.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.autocomplete.hint') ?></p>
</fieldset>
<fieldset data-sec-group="help" class="shell-set">
  <legend><?= Lang::e('set.details') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.details') ?>">
    <label><input type="radio" name="ccDetails" value="on"> <i class="bi bi-journal-bookmark" aria-hidden="true"></i> <?= Lang::e('set.details.on') ?></label>
    <label><input type="radio" name="ccDetails" value="off"> <i class="bi bi-eye-slash" aria-hidden="true"></i> <?= Lang::e('set.details.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.details.hint') ?></p>
</fieldset>
<fieldset data-sec-group="help" class="shell-set">
  <legend><?= Lang::e('set.tour') ?></legend>
  <p><button type="button" class="btn-line btn-sm-cc" data-set-tour><?= Lang::e('set.tour.again') ?></button></p>
  <p class="shell-hint-text"><?= Lang::e('set.tour.hint') ?></p>
  <label class="shell-check"><input type="checkbox" name="ccTourAuto" data-tour-auto> <?= Lang::e('set.tour.auto') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.tour.auto.hint') ?></p>
</fieldset>
<?php /* AI assistants and scripts (0.4 part 2 X.6, session agents): host.js fills this with Settings › Assistants (off by default) */ ?>
<div data-assistants-settings data-sec-group="help"></div>
<fieldset data-sec-group="files" data-sec-group-label="<?= Lang::e('set.group.files') ?>" class="shell-set">
  <legend><?= Lang::e('set.filekeys') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.filekeys') ?>">
    <label><input type="radio" name="ccFileKeys" value="on"> <i class="bi bi-git" aria-hidden="true"></i> <?= Lang::e('set.filekeys.on') ?></label>
    <label><input type="radio" name="ccFileKeys" value="off"> <i class="bi bi-eye-slash" aria-hidden="true"></i> <?= Lang::e('set.filekeys.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.filekeys.hint') ?></p>
</fieldset>
