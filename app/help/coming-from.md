---
title: Coming from other drafting software
summary: How familiar commands, keys and habits map to CadCraft, and the differences that trip up experienced drafters.
section: switching
order: 10
keywords: switching, differences, migrate, habits, aliases, dynamic input, pickfirst, pickadd, qsave, saveas, save as, mtext, ctb, polar tracking, xref, keyboard shortcuts, familiar, copyclip, pasteclip, pasteorig, copybase, clipboard
---

If you have used AutoCAD, or a program built on the same model, most of what you know works here: the command line, aliases such as `L`, `C`, `TR` and `O`, Enter or Space to repeat, window and crossing selection, object snaps on F3, Ortho on F8, model space with layouts and viewports. This page lists what maps directly, and then the differences that catch people out. Read the second half even if you skim the first.

## What maps directly

| Habit | In CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Same commands, same aliases |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Same |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Same dimension commands |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` typed at the command line | Same, for new dimensions |
| `B` to make a block, `I` to insert, `PU` to purge | Same (purge removes unused blocks only) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` then `E` or `W` | Same |
| Typing `_LINE` or `-LAYER` from a script or a habit | The leading `_`, `-`, `.` or `'` is ignored |
| Enter or Space on an empty prompt repeats the last command | Same |
| Esc cancels; Esc again clears the selection | Same |
| `@dx,dy`, `@d<a`, typed angles counterclockwise from east | Same |
| Window left to right, crossing right to left, click-click; press and drag for a lasso, Space cycles window / crossing / fence (LASSOMODE) | Same |
| Select first, then the command (noun-verb) | Same; a finished command clears the selection |
| `ALL` and `L` at Select objects | Same |
| Shift+click removes from the selection | Same. Settings can make a click replace the selection instead, as PICKADD 0 does: see [CadCraft settings](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Same commands and keys; pasting places the copy by its lower-left corner, as PASTECLIP does |
| F3 object snap, F7 grid, F8 Ortho | Same keys |
| Double-click the wheel to zoom extents | Same |
| Mirrored text stays readable | Same (as with MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Same; on a Mac, Command works too |

The [Command reference](topic:commands) lists every command and alias.

:::tip
If you like the ribbon of AutoCAD, pick the {{ui:Drafting classic}} menu style in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}: Home, Insert, Annotate, Parametric, View, Manage and Output tabs over the same command line, and the middle button pans while a right click is Enter. See [Menus, keys and mouse](topic:menus-keys-and-mouse).
:::

## Differences that trip people up

### Typed points are absolute

With dynamic input on, the other program treats a typed `100,0` for a second point as relative. **CadCraft's command line does not:** there, `x,y` is always measured from the origin. With {{ui:Dyn}} ({{key:F12}}) on, use its fields instead: distance, {{key:Tab}}, angle. Use `@100,0` for "100 to the right of the last point", or move the crosshair the right way and type a bare `100`.

### Shift skips snaps; it does not give Ortho

Holding Shift while you click ignores object snaps for that click. It does not temporarily switch Ortho. Use F8 or the {{ui:Ortho}} button.

### Right-click is always Enter

There is no right-click menu. A right-click in the drawing is Enter: it ends a command, finishes a selection, or repeats the last command. During a grip move or a selection box, it cancels instead. Drag with the right button to pan.

### No Space-bar panning

Space is Enter, so holding Space and dragging does not pan. Pan with the middle button or the right button, or zoom out and back in at another spot with the wheel.

### Trim and Extend

Trim and Extend start in Quick mode: every visible object is a cutting edge or a boundary, the piece under the pointer shows what will go, a dragged path trims every piece it crosses, and an object nothing crosses is erased. {{key:Shift}} switches between trim and extend. `O` switches to Standard mode (choose the edges first), `F` and `C` are fence and crossing, `E` is EDGEMODE, `R` erases. There is no `P` (Project) option: CadCraft trims in the plane of the drawing.

### Fillet and chamfer

{{cmd:FILLET}} and {{cmd:CHAMFER}} take the options you know: Undo, Polyline, Radius (or Distance, Angle and mEthod), Trim and Multiple, and {{key:Shift}}+click for a sharp corner. A fillet between a polyline and a line adds the arc as its own object instead of joining them into the polyline, and polyline corners next to an arc segment are left as they are.

### Paragraph text and single-line text

`T`, `MT` and `MTEXT` are paragraph text typed in place, with a width, line spacing and justification; `DT` and `DTEXT` are single-line text, as you know them. There are no text styles, columns or in-text formatting (bold, stacked fractions); everything draws in a Helvetica-style font.

### Save means "download a copy"

{{key:Mod+S}}, `SAVE` and `QSAVE` download a copy in the drawing's format: a DWG you opened saves as DWG, a DXF as DXF. Nothing is overwritten in place, and opened files are never changed.

`SAVEAS` ({{key:Mod+Shift+S}}) is a small dialog, not a file browser: pick {{ui:DWG}} (with its {{ui:Version}}, AutoCAD 2000 to 2018) or {{ui:DXF R12}} and click {{ui:Save}}. The browser decides where the download goes. `DXFOUT` always downloads DXF R12.

A DWG you opened saves in the version it came in; a new drawing saves in the AutoCAD 2000 format unless you pick another. Sheets, dimensions and hatch patterns are kept. See [Files: what opens, what saves](topic:files#saving).

### Layers: simpler, and not undone

- Every layer change (on, freeze, lock, color, plot, linetype, lineweight, current layer) is one undo step.
- Off and freeze have the same effect in CadCraft.
- Layers a drawing freezes in one viewport stay frozen there: on screen, in plots and when you save it as DWG or DXF.
- A viewport that shows a layer in its own colour, linetype, lineweight or transparency keeps doing so on screen, in plots and in a saved DWG (DXF keeps the layer's own settings; the save says so). Changing those per viewport is not built yet.
- There is no layer properties manager and no layer states; {{cmd:RENAME}}, {{cmd:LAYMRG}} and {{cmd:LAYDEL}} rename, merge and delete layers. Linetypes and lineweights are set in the right panel (see [Line weights and linetypes](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} and {{cmd:LAYMCUR}} work by picking.
- Saving to DXF R12 writes layer names in capitals. A DWG keeps them as you typed them.

### Dimension styles are per dimension

There are no named dimension styles to manage. `DIMSCALE` and the other settings change what new dimensions use; each dimension keeps its own sizes, which you change in the Properties panel. Dimensions follow the drawing's length format (decimal, or feet and inches with {{cmd:UNITS}}), or their own {{ui:Format}}. See [Set dimension sizes](topic:dimension-settings).

### Plotting is simpler

Plot style tables work by color, as CTB files do: Monochrome, Colour and Grayscale are built in, you can make your own, and each sheet keeps its table. Reading CTB or STB files and page setups are not built yet. Lines print at their lineweight, the others at one pen width. Sheets plot at 1:1 on their own paper; the model plots at a chosen scale or fitted. See [Plot to PDF](topic:plot-pdf).

### Working inside a viewport

As you know it: double-click inside a viewport (or type {{cmd:MSPACE}}) to work on the model through it, and double-click outside it (or {{cmd:PSPACE}}) to go back to the sheet. Inside, pan and zoom change what the viewport shows, unless its display is locked; then they move the sheet. Clicking a tab under the drawing also leaves the viewport. See [Work on the model through a viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Tracking and dynamic input yes, grid snap not yet

The grid is for looking at only; points do not snap to it (there is no F9 snap mode). Polar tracking ({{key:F10}}, step set with {{cmd:POLARANG}}) and object snap tracking ({{key:F11}}: rest on a snap point to acquire it) work as you know them; see [Snap to objects](topic:object-snaps#polar-tracking). Dynamic input ({{key:F12}}) shows distance and angle (or X and Y) by the crosshair; see [Coordinate and distance entry](topic:coordinate-entry#dynamic-input).

### Feet and inches

Choose {{ui:Length format}} {{ui:Architectural}} or {{ui:Engineering}} (or type {{cmd:UNITS}}), and type lengths as you know them: `12'6"`, `12'6-1/2"`. Use a hyphen, not a space, before a fraction: {{key:Space}} is {{key:Enter}}. Set {{ui:Units}} to {{ui:Inches}} too, so that sheets and plots offer architectural scales. The format is not yet kept in saved files. See [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copy and paste stays inside CadCraft

{{key:Mod+C}}, {{key:Mod+X}} and {{key:Mod+V}} copy, cut and paste objects within a drawing, between drawings, and between CadCraft tabs in the same browser. The clipboard is CadCraft's own: you cannot paste CadCraft objects into another program, or objects from another program into CadCraft. Pasting from a drawing in other units does not rescale: use {{cmd:SCALE}} afterwards. {{key:Mod+D}} is a duplicate that moves with the pointer, a CadCraft addition. See [Copy, paste and duplicate](topic:copy-paste).

### Browser keys you cannot use

A web page cannot take {{key:Mod+N}}, {{key:Mod+W}} or {{key:Mod+T}} from the browser: they open and close windows and tabs. Use the {{ui:New}} button or type `NEW`. See [Keys, mice and trackpads](common:keys).

## Commands you may reach for that are not here yet

{{cmd:PEDIT}}, {{cmd:XREF}} and {{cmd:TABLE}} are not built. Typing one says "Unknown command". [Not built yet](topic:not-built-yet) lists what to do instead today.
