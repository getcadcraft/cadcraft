---
title: CadCraft settings
summary: The settings that belong to the drafting app: cursor size, where a pasted copy hangs from the cursor, what a click does to the selection, how many rows the toolbar uses, and the corner indicator.
section: reference
order: 5
keywords: cursorsize, full screen crosshair, full-screen cursor, edge to edge, toolbar rows, toolbar display, ctrl f1, settings, preferences, options, corner indicator, view cube, axis icon, ucs icon, cursor, crosshair, pick box, paste point, base point, clicking objects, selection, pickadd, shift, reset
---

Open {{ui:Settings}} with the gear in the app bar or {{key:Mod+,}}. The first tab, {{ui:CadCraft}}, holds the settings that belong to this app; {{ui:General}} holds the ones every app in the family shares (theme, panel text size and widths, the toolbar's look and order). CadCraft's settings exist only in the app: you change them here, and this browser remembers them. {{ui:Reset CadCraft settings}} puts every one back to the start.

## Cursor

**Small**, **Medium** (the start), **Large** or **Full screen**: the size of the crosshair and of the pick box in the drawing. A bigger pick box also picks objects from a little farther away, which helps on a touch screen or a very fine drawing.

**Full screen** runs the crosshair's two lines edge to edge across the drawing, also when no command is running, so you can check by eye that two things line up across the whole view. With the view split, the lines stay in the pane you are working in. The same as AutoCAD's {{cmd:CURSORSIZE}} 100: type {{cmd:CURSORSIZE}} and 100 for full screen; a smaller number picks the nearest size (under 5 Small, 5 to 9 Medium, 10 to 99 Large).

## Paste point

Where a pasted copy hangs from the cursor after {{key:Mod+V}} ({{cmd:PASTECLIP}}), until you click:

- **Lower-left corner** (the start): the lower-left corner of the copied objects' extents, as in AutoCAD.
- **Center**: the middle of their extents. Handy for placing a symbol by eye.

A copy made with `COPYBASE` always hangs from the base point you picked. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) ignores this setting: it keeps the original coordinates. See [Copy, paste and duplicate](topic:copy-paste).

## Clicking objects

What a click in the drawing does to the selection when no command is running:

- **Adds to the selection** (the start): each click or window adds objects; {{key:Shift}}+click, or a {{key:Shift}}+window, takes them out.
- **Replaces the selection**: a click or window selects only what it picks. {{key:Shift}}+click adds an object, or takes out one that is already selected; a {{key:Shift}}+window adds.

At a `Select objects:` prompt inside a command, clicks always add (and {{key:Shift}} removes), whatever this setting says. See [Select objects](topic:select-objects).

## Clicking an empty spot

What a click where there is no object does when no command is running. Either way it starts a selection window (a second click finishes it).

- **Clears the selection** (the start): what was selected is let go. Hold {{key:Shift}} as you click to keep it.
- **Keeps the selection**: the selection stays, as in other drafting programs; the window adds to it. Press {{key:Esc}} to clear the selection.

## Dragging to select

What pressing and dragging on an empty spot draws:

- **Lasso** (the start): a freehand outline. Moving right first selects what lies wholly inside it, left first what it touches; {{key:Space}} while dragging switches between window, crossing and fence.
- **Rectangle**: the box, as a click and a second click draw it.

{{cmd:LASSOMODE}} `1` or `0` sets the same. See [Lasso selection](topic:lasso-selection).

## Dragging to trim and extend

What pressing on an empty spot and dragging does in {{cmd:TRIM}} and {{cmd:EXTEND}}:

- **A path** (the start): a freehand path; every piece it crosses is trimmed (or extended).
- **A window**: a box; every piece it touches is trimmed, as the `C` option does.

See [Trim and extend](topic:trim-and-extend).

## Toolbar position

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Top** (the start, how it has always been), **Bottom**, **Left** or **Right**. On the left or the right the tool groups stack in a column that scrolls when it is taller than the window, and the buttons wrap two or three to a line. The choice is saved with your settings, and {{cmd:TOOLBARDOCK}} (`TBDOCK`) sets it from the command line. {{ui:General}} › {{ui:Reset the layout}} puts the toolbar back on top.

The menu styles' bars sit inside the toolbar and move with it, but the {{ui:Ribbon}} style is made to run across the top or the bottom: on a side it gets a narrow column that scrolls. On a phone the toolbar stays where the phone layout puts it.

## Toolbar rows

How many lines the tools use above the drawing, in the CadCraft toolbar and in the {{ui:Drafting classic}} and {{ui:Ribbon}} styles:

- **Wrap to fit** (the start): the tools wrap to the width of the window.
- **2 rows**: at most two lines. When the tools wrap to two lines or fewer at this width they just wrap; otherwise they sit in two rows that scroll sideways.
- **1 row**: one line that scrolls sideways, which leaves the drawing the most room.

{{key:Shift+Ctrl+F1}} steps through the three, and {{cmd:TOOLBARROWS}} sets one. What the buttons show (icons and text, just icons, or just text) is a setting of {{ui:General}} › {{ui:Toolbar}}; {{key:Ctrl+F1}} steps through it and {{cmd:TOOLBAR}} sets it.

## Corner indicator

What sits in the corner of the drawing:

- **Automatic** (the start): the axis icon on the {{ui:Model}} tab and the view cube on the {{ui:3D}} tab.
- **Axis icon**: the X and Y marker at the bottom left of the {{ui:Model}} tab, and a small X, Y and Z marker on the {{ui:3D}} tab.
- **View cube**: a cube at the top right of both tabs. On the {{ui:Model}} tab it shows the drawing from the top, and clicking another face, edge or corner opens the {{ui:3D}} tab looking from there. On the 3D tab it turns with the view: click to look from a side, drag to orbit, and the house goes back to the iso view. See [Model in 3D](topic:3d-solids).
- **None**: nothing in the corner.

Sheets show neither.

## Length and area of the selection

- **In the status bar** (the start): with objects selected, the status bar shows their total length and the total area of
  the closed ones. See [Totals of a selection](topic:properties-panel#totals-of-a-selection).
- **Hidden**: the status bar leaves them out. Properties still shows them for several objects.

## Grid, Ortho and snaps

These are not in the dialog: the {{ui:Grid}}, {{ui:Ortho}} and {{ui:Snap}} buttons in the status bar (or {{key:F7}}, {{key:F8}}, {{key:F3}}) and the list of object snaps beside them are remembered as you leave them. See [Snap to points on objects](topic:object-snaps).
