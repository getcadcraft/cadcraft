---
title: Points for BIM programs
summary: Export points, and the insertion points of blocks with a description, to a CSV or TXT file that BIM and survey programs import.
section: tasks
order: 175
keywords: exportpoints, export points, points, csv, txt, pnezd, penzd, xyz, survey points, coordinates, bim, setting out, point file, northing, easting, elevation
---

## What you will make

A point file: one line per point, with its number, northing, easting, elevation and description, which BIM programs
(Revit and Archicad among them) and survey software can import to place survey points, site markers or equipment.

## Export the points

1. Select the points and the block references whose insertion points you want, or select nothing to take every point.
2. Type {{cmd:EXPORTPOINTS}} (or `EXPPTS`, or {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) and press {{key:Enter}}
   (press {{key:Enter}} again at `Select points and blocks` when nothing was selected).
3. When you picked blocks with attributes, CadCraft lists their tags: type the one whose value is the description (for
   example `ITEM`), or anything else to use each block's name.
4. Choose the columns: `PNEZD` (point, northing, easting, elevation, description: the usual one), `PENZD` (easting
   before northing) or `XYZ` (only the coordinates).
5. Choose the units: `D` as drawn, or `M` metres or `F` feet (only when the drawing's units are set: Properties ›
   {{ui:Units}} with nothing selected).
6. With a UCS set, choose `W` world or `U` UCS coordinates (see [UCS and a turned view](topic:ucs-and-turned-view)).
7. Choose `C` for a comma-separated `.csv` or `T` for a tab-separated `.txt`, and the first point number.

The file downloads as `<drawing>-points.csv` (or `.txt`), and the history says how many points it holds.

## What is in the file

- One point per line, ending with a line break (CR LF), three decimals.
- A point's elevation is its Z (0 when it has none). A block's point is its insertion point.
- A description that holds a comma (or a tab in a TXT) or a quote is put in double quotes, with its quotes doubled.
- The format is the one CivilCraft reads and writes, so the file also opens there as points.

## Common mistakes

- Only `D` is offered for the units: the drawing has no units set. Set them, or convert in the other program.
- The points are far from where you expect in the other program: export world coordinates (`W`), or the UCS the other
  program's survey point uses (`U`).
