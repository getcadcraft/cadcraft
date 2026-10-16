<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — CadCraft's own section of the Settings dialog (core/components/app-settings.inc includes it).
 * cadcraft.js reads and stores the fields (localStorage cadcraft.settings) and resets them on "cc-settings-reset".
 *   cursor     crosshair + pick box size: small / medium (default) / large — the pick tolerance follows the box
 *   pasteBase  where a pasted copy hangs from the cursor (PASTECLIP, Ctrl+V): lower-left corner (default) / center
 *   pick       what a click on an object does with no command running: adds to the selection (default; Shift+click
 *              removes) / replaces the selection (Shift+click adds or removes; a window replaces, Shift+window adds)
 *   lasso      press and drag on an empty spot: a freehand lasso (default; lasso.js) / a rectangle — LASSOMODE 1 / 0
 *   corner     corner indicator: automatic (default: the axis icon on the Model tab, the view cube on the 3D tab) /
 *              axis icon (the X/Y icon on the Model tab, an X/Y/Z triad on the 3D tab) / view cube (m3d/viewcube.js: at Top on the Model tab, where a click opens the 3D tab looking from there) / none
 *   tabs       sheet tabs: full names (default) / sheet numbers only (WL.9; the number from the open sheet set, else the
 *              name's first word when it reads like one; the tooltip keeps the whole name)
 *   My tools   buttons of your own (mytools-ui.js; localStorage cadcraft.mytools): list, add / edit / delete, export and
 *              import JSON, import a CUIx file
 */
?>
<fieldset class="shell-set" data-cc-settings>
  <legend><?= Lang::e('set.cursor') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.cursor_size') ?>">
    <label><input type="radio" name="ccCursor" value="small"> <i class="bi bi-plus" aria-hidden="true"></i> <?= Lang::e('set.small') ?></label>
    <label><input type="radio" name="ccCursor" value="medium"> <i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('set.medium') ?></label>
    <label><input type="radio" name="ccCursor" value="large"> <i class="bi bi-crosshair" aria-hidden="true"></i> <?= Lang::e('set.large') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.crosshair_pick_box_drawing') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.paste_point') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.paste_point') ?>">
    <label><input type="radio" name="ccPaste" value="lower-left"> <i class="bi bi-arrow-down-left-square" aria-hidden="true"></i> <?= Lang::e('set.lower_left_corner') ?></label>
    <label><input type="radio" name="ccPaste" value="center"> <i class="bi bi-plus-square" aria-hidden="true"></i> <?= Lang::e('set.center') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.where_pasted_copy_hangs') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.clicking_objects') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.clicking_objects') ?>">
    <label><input type="radio" name="ccPick" value="add"> <i class="bi bi-plus-circle" aria-hidden="true"></i> <?= Lang::e('set.adds_selection') ?></label>
    <label><input type="radio" name="ccPick" value="replace"> <i class="bi bi-arrow-repeat" aria-hidden="true"></i> <?= Lang::e('set.replaces_selection') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.no_command_running_adds') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.lasso') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.lasso') ?>">
    <label><input type="radio" name="ccLasso" value="lasso"> <i class="bi bi-lasso" aria-hidden="true"></i> <?= Lang::e('set.lasso.lasso') ?></label>
    <label><input type="radio" name="ccLasso" value="box"> <i class="bi bi-bounding-box" aria-hidden="true"></i> <?= Lang::e('set.lasso.box') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.lasso.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.corner_indicator') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.corner_indicator') ?>">
    <label><input type="radio" name="ccCorner" value="auto"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('set.automatic_axis_icon_drawing') ?></label>
    <label><input type="radio" name="ccCorner" value="cube"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('set.view_cube') ?></label>
    <label><input type="radio" name="ccCorner" value="axes"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('set.axis_icon') ?></label>
    <label><input type="radio" name="ccCorner" value="none"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('set.none') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.automatic_shows_axis_icon') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.tabs') ?></legend>
  <div class="shell-seg cc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.tabs') ?>">
    <label><input type="radio" name="ccTabs" value="full"> <i class="bi bi-card-text" aria-hidden="true"></i> <?= Lang::e('set.tabs.full') ?></label>
    <label><input type="radio" name="ccTabs" value="number"> <i class="bi bi-123" aria-hidden="true"></i> <?= Lang::e('set.tabs.number') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.tabs.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.toolbar_display') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.toolbar_display') ?>">
    <label><input type="radio" name="ccToolbarDisplay" value="full"> <i class="bi bi-grid-3x2-gap" aria-hidden="true"></i> <?= Lang::e('set.toolbar_display_full') ?></label>
    <label><input type="radio" name="ccToolbarDisplay" value="symbols"> <i class="bi bi-fonts" aria-hidden="true"></i> <?= Lang::e('set.toolbar_display_symbols') ?></label>
    <label><input type="radio" name="ccToolbarDisplay" value="text"> <i class="bi bi-layout-text-window" aria-hidden="true"></i> <?= Lang::e('set.toolbar_display_text') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.toolbar_display_hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.toolbar_rows') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.toolbar_rows') ?>">
    <label><input type="radio" name="ccToolbarRows" value="auto"> <i class="bi bi-text-wrap" aria-hidden="true"></i> <?= Lang::e('set.toolbar_rows_auto') ?></label>
    <label><input type="radio" name="ccToolbarRows" value="2"> <i class="bi bi-distribute-vertical" aria-hidden="true"></i> <?= Lang::e('set.toolbar_rows_2') ?></label>
    <label><input type="radio" name="ccToolbarRows" value="1"> <i class="bi bi-distribute-horizontal" aria-hidden="true"></i> <?= Lang::e('set.toolbar_rows_1') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.toolbar_rows_hint') ?></p>
</fieldset>
<?php /* My tools (0.5 DR.9): mytools-ui.js fills this — buttons of your own, their keys, JSON and CUIx import */ ?>
<fieldset class="shell-set" data-mytools-settings><legend><?= Lang::e('mytools.legend') ?></legend></fieldset>
<?php /* AI assistants and scripts (0.4 part 2 X.6, session agents): host.js fills this with Settings › Assistants (off by default) */ ?>
<div data-assistants-settings></div>
