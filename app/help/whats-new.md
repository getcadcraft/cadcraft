---
title: What's new in 0.10
summary: Tables as real objects, a Blocks panel with pictures and smart blocks, editable and path arrays, gradient fills, fields, viewports with any outline, AUDIT and RECOVER, binary DXF, right-to-left text, a LISP editor, a touch crosshair, and plan walls that stay joined.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, table, tables, tabledit, table style, formulas, merged cells, csv, spreadsheet, paste cells, blocks panel, block library, smart blocks, convert repeats, find blocks, replace blocks, data extraction, array, associative array, arraypath, path array, gradient, field, fields, hatch boundary, trim hatch, viewport, vpclip, polygonal viewport, audit, recover, damaged drawing, binary dxf, right-to-left, arabic, hebrew, vietnamese, tcvn3, vni, keyboard layout, decimal comma, keypad, lispedit, lisp editor, touch crosshair, finger, walls, disallow join, wall icons, toolbox, default policies, pro layouts, trackpad, swipe, tour
---

This is what changed in CadCraft 0.10, compared with 0.9. The big parts are tables as real objects, smarter blocks, more drafting tools, a LISP editor and plan walls that stay joined.

## New

### Tables

- **Tables as real objects.** {{cmd:TABLE}} makes one, a double-click edits its cells ({{cmd:TABLEDIT}}), and {{cmd:TABLESTYLE}} sets table styles. Cells take formulas (sums, averages, counts) and can be merged. {{cmd:TABLEEXPORT}} writes CSV, and {{cmd:TABLEPASTE}} pastes spreadsheet cells as a table. See [the TABLE command](topic:commands#table).

### Blocks

- **A Blocks panel with pictures.** {{cmd:BLOCKSPALETTE}} shows each block with a small picture, and its {{ui:Libraries}} list takes the blocks of other drawings and folders. See [Blocks](topic:blocks).
- **Smart blocks.** {{cmd:BCONVERT}} finds geometry that repeats and turns every copy into one block, {{cmd:BSEARCH}} finds blocks by name, attribute or geometry, and {{cmd:BREPLACE}} swaps one block for another.
- **Block and attribute data out.** {{cmd:DATAEXTRACTION}} lists blocks, their attributes and object properties as a table or a CSV file.

### Drafting

- **Arrays that stay editable, and arrays along a path.** {{cmd:ARRAY}} with the associative option, {{cmd:ARRAYPATH}}, and {{cmd:ARRAYEDIT}} to change one later. See [ARRAYPATH](topic:commands#arraypath).
- **Gradient fills.** {{cmd:GRADIENT}} fills an area with one or two colors.
- **Hatch extras.** {{cmd:HATCHGENERATEBOUNDARY}} makes the boundary of a hatch again, and a hatch can be trimmed. See [Hatch and fill areas](topic:hatch).
- **Fields and formulas in text.** {{cmd:FIELD}} puts the sheet number, the date, the file name or an object's area into text, attributes and table cells.
- **Sheet viewports with any outline.** {{cmd:MVIEW}} takes `Polygonal` or `Object`, and {{cmd:VPCLIP}} clips a viewport that is already on the sheet. See [Sheets and viewports](topic:sheets-and-viewports).

### Files and text

- **Check and repair a damaged drawing.** {{cmd:AUDIT}} and {{cmd:RECOVER}}. See [AUDIT](topic:commands#audit).
- **Binary DXF** files open.
- **Right-to-left and Arabic-script text**, and the old Vietnamese encodings TCVN3 and VNI.
- **Commands typed on any keyboard layout**, and the keypad decimal key on a layout with a decimal comma.

### LISP

- **A LISP editor.** {{cmd:LISPEDIT}} opens a window to write, load, run and stop a routine, with line numbers, bracket matching and a console that shows errors by line. See [LISPEDIT](topic:commands#lispedit) and [Run LISP routines](topic:run-lisp).

### Touch

- **An offset crosshair for a finger.** {{cmd:TOUCHCROSSHAIR}} (`TCX`) puts the crosshair above and to one side of your finger, so your fingertip does not cover the point you pick. See [TOUCHCROSSHAIR](topic:commands#touchcrosshair).

### Plan walls

- **Walls stay joined.** Moving or resizing a wall carries the walls joined to it, and a joined wall no longer goes sloped when an end moves. Disallow join frees one wall end. The wall tool has 37 new icons. See [Wall shapes, cuts, offsets and locks for 2D walls](topic:wall-tools-2d).

### Layout and add-ons

- **The toolbox and info box layout** no longer shows the toolbar twice beside the toolbox column. See [Work in the toolbox and info box layout](common:layout-toolbox).
- **Default Policies add-on** (off by default): an office sets once what a new drawing starts with. See [Default Policies](topic:default-policies).

## Fixed

- {{cmd:SCANATTACH}} brought a scan in 25.4 or 304.8 times too big in an inch or feet drawing.
- {{cmd:GRIDMOVE}} moved a wall along the grid line twice, and {{cmd:WALLGRID}} Along pulled a wall beside the line onto it.
- The Properties palette was empty in layouts with a tray on the right (Vector, Sketch, Rhino).
- A point cloud shown under a layout disappeared when the layout was plotted.
- In CadCraft Studio on Linux (Wayland), Download PDF, PNG or SVG froze the window.
- Undo of an edit that made an id-keyed list left the key behind.
- Help topics that disagreed with the app (object snaps, sheets, blocks and more) were corrected.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the drawing. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **A two-finger trackpad swipe pans** the drawing.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- {{cmd:DATALINK}} reads CSV only. The LISP console reports the line of the top-level form, not the exact line inside it.
- The Wayland save fix has not been tried on a real Linux desktop. Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
