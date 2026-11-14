---
title: Keyboard and mouse
summary: Every key, mouse action and command-line key in the CadCraft drafting app, as the code handles them.
section: reference
order: 10
keywords: keyboard, shortcuts, keys, mouse, wheel, pan, zoom, right click, middle button, f3, f7, f8, ctrl, command key, hotkeys, copy, cut, paste, duplicate, clipboard, select all
---

Shortcuts are shown for your computer. On a Mac, every {{key:Mod}} shortcut below uses the Command key, and the Control key works too. How keys are written, and how to use F-keys on a Mac, is in [Keys, mice and trackpads](common:keys).

## Typing commands

| Key | What it does |
|---|---|
| Any letter, digit or symbol | Goes to the command line, wherever the pointer is, unless a box in a panel has the cursor |
| {{key:Enter}} | Sends what you typed. On an empty prompt: repeats the last command, ends a command, finishes a selection, or accepts the default in `<…>` |
| {{key:Space}} | Same as {{key:Enter}}, except while CadCraft asks for text (text, block names, dimension text), where it types a space |
| {{key:Esc}} | Cancels the command. With no command running: cancels a grip move or a selection box, then clears the selection |
| {{key:Tab}} | Accepts the suggested command shown to the right of the command line. With nothing typed and the pointer over overlapping objects: highlights the next one there (click to pick it) |
| {{key:Up}} {{key:Down}} | Steps through the lines you typed before (the last 100) |

## Drawing and editing

| Key | What it does |
|---|---|
| {{key:Mod+Z}} | Undo the last command |
| {{key:Mod+Y}} or {{key:Mod+Shift+Z}} | Redo |
| {{key:Mod+A}} | Select every object you can edit on the open tab ({{cmd:SELECTALL}}). If you have typed something at the command line, it selects that text instead |
| {{key:Delete}} | Erase the selected objects ({{cmd:ERASE}}), unless you have typed something at the command line |
| {{key:Backspace}} | Erase the selected objects when the command line does not have the cursor; at the command line it deletes what you typed |
| {{key:Esc}} | With no command running: clear the selection ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Save a copy in the drawing's format (DWG or DXF) |
| {{key:Mod+Shift+S}} | Save as: choose DWG or DXF, then save a copy |
| {{key:Mod+O}} | Open a DWG or DXF |
| {{key:Mod+P}} | Plot to PDF |

Undo, redo, select all and plot do nothing while a command is running: press {{key:Esc}} first.

## Copy, cut and paste

| Key | What it does |
|---|---|
| {{key:Mod+C}} | Copy the selection to the clipboard ({{cmd:COPYCLIP}}). Nothing selected: CadCraft asks for objects |
| {{key:Mod+X}} | Cut: copy the selection, then erase it ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Paste: the copy follows the cursor; click, or type a point, to put it down ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Paste in place: at the coordinates it was copied from ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicate: a copy of the selection moves with the pointer; click to put it down, {{key:Esc}} leaves nothing ({{cmd:DUPLICATE}}) |

The same actions are in the toolbar's {{ui:Edit}} group ({{ui:Copy}}, {{ui:Paste}}) and its {{ui:More}} menu. While another command is running, finish it or press {{key:Esc}} first; pressing {{key:Mod+V}} or {{key:Mod+D}} again while a copy is following the cursor starts over. When you have typed something at the command line, or a command is asking for text, these keys copy, cut and paste that text instead. See [Copy, paste and duplicate](topic:copy-paste).

## Toggles

| Key | Toggle | Status bar button |
|---|---|---|
| {{key:F3}} | Object snaps on or off | {{ui:Snap}} |
| {{key:F7}} | Grid on or off | {{ui:Grid}} |
| {{key:F8}} | Ortho on or off | {{ui:Ortho}} |
| {{key:F10}} | Polar tracking on or off | {{ui:Polar}} |
| {{key:F11}} | Object snap tracking on or off | {{ui:Track}} |
| {{key:F12}} | Dynamic input on or off | {{ui:Dyn}} |

:::mac
On a Mac, F3, F7 and F8 are usually Mission Control and media keys. Hold **fn** with them, or turn on standard function keys in System Settings, as described in [Keys, mice and trackpads](common:keys). The status bar buttons always work.
:::

:::firefox
F7 in Firefox can also ask to turn on caret browsing. Choose **No**, and use the {{ui:Grid}} button if it keeps asking.
:::

## Help

| Key | What it does |
|---|---|
| {{key:F1}} | Opens or closes this help, beside the drawing. It works even while a command is running, and never reaches the command line. |
| {{key:Esc}} | With the cursor in the help panel: clears the search, or closes the panel |

The {{ui:Help}} button in the bar at the top does the same as {{key:F1}}. While you type in the help's search box, nothing reaches the command line. Click on the drawing to give the keys back to CadCraft; the panel stays open beside it.

:::mac
On a Mac keyboard, hold **fn** and press F1, or click {{ui:Help}}.
:::

## Screen

| Key | What it does |
|---|---|
| {{key:Ctrl+Shift+F}} | Cycle normal, full screen, and full screen with the bars hidden. This uses the Control key on every computer, Mac included. |
| {{key:Left}} {{key:Right}} | With a tab under the drawing focused: the previous or next tab |

In full screen, the browser may use the first {{key:Esc}} to leave full screen. Press {{key:Esc}} again to cancel a command.

## Dialogs

| Key | What it does |
|---|---|
| {{key:Esc}} | Closes the dialog ({{ui:Plot to PDF}}, or a question such as "Unsaved changes", where it means {{ui:Cancel}}) |
| {{key:Tab}} | Moves between the dialog's settings and buttons |

While a dialog is open, the drawing's keys are off.

## Panel fields

In a box in the right or left panel:

| Key | What it does |
|---|---|
| {{key:Enter}} | Applies the value and leaves the box |
| {{key:Esc}} | Puts the old value back and leaves the box |
| {{key:Tab}} | Applies and moves to the next box |

While a box has the cursor, letters type into it, not into the command line.

## Mouse

| Action | What it does |
|---|---|
| Click | Picks a point when a command asks for one; picks an object when it asks for objects; otherwise selects an object, or a grip |
| Shift+click | Removes a selected object from the selection (with {{ui:Clicking objects}} set to {{ui:Replaces the selection}} in [Settings](topic:settings): adds it). While picking a point: ignores object snaps for that click |
| Click on empty space, then click again | A selection box: left to right is a window, right to left a crossing |
| Drag on empty space | A lasso: moving right first is a window, left first a crossing; {{key:Space}} while dragging cycles window, crossing and fence; {{key:Esc}} drops it (LASSOMODE 0, or Settings, makes it the rectangle again) |
| Drag through pieces in TRIM or EXTEND | Trims (or extends) every piece the path crosses; hold {{key:Shift}} for the other one |
| Drag a grip | Moves the grip (or click the grip, then click where it goes) |
| Double-click text | Selects it and puts the cursor in its {{ui:Text}} box in the right panel |
| Right-click | Enter. During a grip move or a selection box: cancels it |
| Drag with the right button | Pans |
| Wheel | Zooms in and out about the crosshair |
| Drag with the wheel (middle button) | Pans |
| Double-click the wheel | Zooms to the whole drawing (extents) |
| Drop a DWG or DXF on the drawing | Opens it |

On a trackpad or a touch screen, see [Mouse, trackpad and touch](topic:mouse-trackpad-touch).

## Keys the browser keeps

{{key:Mod+N}}, {{key:Mod+W}} and {{key:Mod+T}} always belong to the browser. CadCraft does not use them: use {{ui:New}} or type `NEW` for a new drawing. CadCraft's clipboard is its own: {{key:Mod+C}} and {{key:Mod+V}} copy objects between CadCraft drawings and tabs, not to or from other programs.

:::mac
If {{key:Mod+Y}} opens your browser's history instead of redoing, use {{key:Mod+Shift+Z}} or the {{ui:Redo}} button.
:::

## Where Move lives

Move is the command `MOVE` (key {{key:M}}): pick the objects, then a base point and a second point or a typed distance. `ALIGN` and `DISTRIBUTE` are there too. BimCraft uses the same names for the same jobs on building elements, but its {{key:M}} is Measure: its Move is {{key:Shift+M}}.
