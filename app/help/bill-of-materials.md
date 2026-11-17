---
title: Bills of materials by zone
summary: Mark areas of a drawing as zones and place a table for each that counts the blocks inside it. The tables follow the drawing as you work, and you choose which columns each one shows.
section: tasks
order: 68
keywords: bill of materials, BOM, parts list, schedule, zone, area, table, count, quantity, attribute, columns, item number, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
---

A **zone** is a named area of the drawing. A **bill of materials table** lists what lies inside one zone, or in the whole drawing: each block with its quantity and its attribute values. A drawing can have as many zones and tables as you need, and one zone can have several tables with different columns.

The tools are on the Blocks tab under {{ui:Bill of materials}}, in the Blocks group's More menu, and can be typed.

## Make a zone

Type {{cmd:BOMZONE}} and either

- click two opposite corners for a rectangle,
- choose {{ui:Polygon}}, click each corner and press Enter to close it, or
- choose {{ui:Object}} and pick a closed polyline, a circle, an ellipse or a closed spline. Its outline is copied; the object stays as it is.

Then type the zone's name. The zone is drawn as a dashed outline with its name above the top left corner, on the layer `BOM-ZONES`, which is not plotted. Turn plotting on for that layer if you want zones on paper.

A zone is an ordinary closed polyline: move it, stretch it or drag its grips, and its name follows. To rename a zone, edit the name's text, or use {{cmd:BOMZONE}} and {{ui:Rename}}. {{ui:Zones}} lists every zone and how many tables it has.

## Place a table

Type {{cmd:BOMTABLE}} (or {{cmd:BOM}}), pick the zone's outline or its name, give the text height and click where the table's top left corner goes. Press Enter instead of picking a zone, or choose {{ui:Whole}}, for a table of the whole drawing.

A new table shows the item number, the quantity, the block name and a column for each attribute the blocks carry (the first six; the others are offered unticked). Blocks with the same name and the same attribute values share a row.

## What counts as inside

- A block counts in the zone that holds its **insertion point**.
- A line, arc, circle, polyline, ellipse, spline or hatch counts **whole** in the zone that holds the middle of its extents (for a line, its midpoint). Its length is not cut at the zone's edge.
- A point exactly on the edge is inside.
- Zones may overlap. Each zone counts for itself, so an object in the overlap is in both tables.

## Tables follow the drawing

When you add, move, copy or erase a block, edit an attribute, or reshape or move a zone, every table is redrawn in the same step. Undo takes back your edit and the table change together.

To stop a table from following, tick {{ui:Frozen}} in its settings. A frozen table changes only when you edit its settings or type {{cmd:BOMUPDATE}}, which updates every table now.

## Choose the columns

Select a table and type {{cmd:BOMEDIT}}. In the dialog:

- **Columns**: tick the ones to show (item, quantity, name, layer, length, area, remarks and each attribute), type your own heading for any of them, and move them up or down.
- {{ui:Group rows by}}: block name and attribute values, block name only, layer, or one attribute. In a merged row a value that differs between blocks reads "varies".
- {{ui:Sort by}} any column, ascending or descending.
- {{ui:Title}}, {{ui:Show the title}} and {{ui:Totals row}}.
- {{ui:Count linework by layer}} adds one row per layer with the number of objects, their total length and, for closed shapes, their total area, in drawing units.
- **Remarks**: tick the Remarks column, then type a remark for any row in the table at the bottom of the dialog.

Each table keeps its own choices.

## Item numbers

A row keeps its item number for as long as it is in the table. A new row takes the next free number, and a number that was given out is not used again, so balloons and notes that quote a number stay right. {{ui:Renumber items}} numbers them from 1 in the order shown.

A row is known by what it groups: change how rows are grouped, or change an attribute value that the grouping uses, and the row counts as a new one.

## Export and other programs

{{cmd:BOMEXPORT}}, or {{ui:Export CSV}} in the dialog, saves a table as a .csv file for a spreadsheet.

In a DWG or DXF file a table is an ordinary block of lines and text, so other programs show and plot it as drawn. It is not a table object there, and it does not update in other programs. The link to its zone is kept in the file as extension data that CadCraft reads back, so the table is live again when you reopen the drawing in CadCraft. An R12 DXF of a drawing with no sheet does not keep the "not plotted" setting of the zone layer.

Exploding a table turns it into loose lines and text and ends the link.
