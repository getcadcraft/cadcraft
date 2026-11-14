---
title: Hatch and fill areas
summary: Fill an area with a solid color or a standard pattern by clicking inside it or by picking closed shapes, set the pattern's scale and angle, and change a hatch afterwards.
section: tasks
order: 85
keywords: hatch, bhatch, fill, solid fill, pattern, ansi31, ansi37, brick, earth, net, section lines, poché, island, boundary, scale, angle
---

## What you will make

A wall section filled with the ANSI31 pattern, a column in it left empty, and a solid fill in the column.

## Hatch by clicking inside an area

1. Draw a rectangle (`REC`, `0,0`, `@2000,1200`) and a circle inside it (`C`, `1000,600`, `300`). Click {{ui:Extents}}.
2. Click {{ui:Hatch}} in the {{ui:Draw}} group, or type `H` and press {{key:Enter}}. The history says which pattern is current, for example `Current hatch: ANSI31, scale 1, angle 0°`.
3. Type `P` and press {{key:Enter}}, type `ANSI31` and press {{key:Enter}}.
4. Type `SC` and press {{key:Enter}}, type `20` and press {{key:Enter}}. Pattern sizes are on paper, so a drawing plotted at 1:20 wants scale 20.
5. At `Pick internal point`, click inside the rectangle, outside the circle. The hatch shows as a preview.
6. Press {{key:Enter}}. The rectangle is hatched; the circle inside stays empty, because it is an island.

Click inside several areas before pressing {{key:Enter}} to make them one hatch. `U` takes back the last area.

## A solid fill

1. Type `H` and press {{key:Enter}}.
2. Type `P`, press {{key:Enter}}, type `SOLID` and press {{key:Enter}}.
3. Click inside the circle, then press {{key:Enter}}.

## Hatch closed shapes you pick

Instead of clicking inside, type `S` (Select objects) at `Pick internal point` and pick closed polylines, circles or closed ellipses, then press {{key:Enter}}. Shapes inside others are left empty in turn (the outer one hatched, the next one in empty, and so on).

## Patterns

Type `?` at the pattern question for the list. The standard ones are ANSI31 to ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS and EARTH, and SOLID. In a drawing in inches (or with feet and inches as its length format) the inch sizes of the patterns are used, as in AutoCAD; otherwise the millimeter ones.

{{ui:Angle}} (`A`) turns the whole pattern: ANSI31 at 90° slopes the other way.

**Pattern files.** Type `F` (Pattern file) at `Pick internal point` and choose a `.pat` file. The patterns in it join the list; with more than one you are asked which to use. A file with no pattern CadCraft can read says so, and any pattern it skipped is counted. Sizes in a `.pat` file have no unit of their own, so they are read in the drawing's units. Only files written to the usual `.pat` format have been tried; none made by another program.

## Change a hatch

Select it (click one of its lines). In {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} and {{ui:Pattern angle}}. Hatches from opened drawings show their pattern when it is one of the standard ones; others show as a light tone of their color.

## Common mistakes

- **"No closed boundary round that point."** There is a gap in the outline, or part of it is off screen: CadCraft looks only at what is on screen. Close the gap (zoom in on the corners), or zoom out.
- **"The pattern is too dense to draw at this scale."** The lines would be closer than the drawing can show. Use a larger scale: try the plot scale (20 for 1:20).
- **The pattern looks huge or tiny.** The scale is in drawing units per pattern unit; see step 4 above.
- **Moving the outline does not move the hatch.** A hatch is not tied to its boundary. Move both, or hatch again.

## A hatch that stays with its boundary

A hatch you make with `HATCH` remembers what bounds it. Move, turn or scale the boundary and the hatch and its pattern go with it. Drag a grip to reshape the boundary and the hatch is worked out again. Move the hatch on its own and its boundary comes too, like a filled shape in a drawing program.

The link ends, and the command line says so, if the boundary no longer closes or you reshape the hatch by hand. The hatch itself stays. Type `AS` while hatching to make hatches that stand alone. Copy a hatch with its boundary and the copy has its own link.

`HATCHEDIT` (`HE`) changes the pattern, scale, angle and origin of a hatch, and links it to a boundary or ends the link. The link is saved in DWG and DXF 2000 files. A DXF R12 file has no hatch object, and links made in other programs aren't read: use `HATCHEDIT` and Link for those.
