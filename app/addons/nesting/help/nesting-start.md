---
title: Nest outlines on plates or a roll
summary: Lay the closed outlines of your drawing on plates or a roll with as little waste as it can, draw the sheets beside the drawing and save them as DXF for the cutter.
section: tasks
order: 1
keywords: nest, nesting, sheet, plate, roll, cut, laser, plasma, router, waterjet, cnc, waste, efficiency, dxf
---

## Nest the outlines

Switch the add-on on in Settings › Add-ons. Select the closed outlines to cut — closed polylines (their arcs stay arcs) and circles; a closed shape inside another is a hole of it — and type {{cmd:NEST}} (or `NST`). Answer:

- **Plates** (length and width) or a **Roll** (its width);
- the **margin** kept clear at the edges and the **space** between parts;
- how many **copies** of each part;
- whether parts may **turn**: by 90 degrees, by any angle (15° steps) or not at all.

The sheets are drawn to the right of the drawing on layer NEST-SHEET, with the parts on NEST-PARTS and their names on NEST-LABELS. Your own outlines are not moved. The command line says how many plates (or how much roll) it used, the share of material the parts take, and anything that did not fit. The layout is checked again on the exact shapes, so no two parts overlap or come closer than the spacing.

## Save it for the cutter

File › Export › **Nested sheets (DXF)** (or {{cmd:EXPORT}} on the command line) writes the last nest as a DXF (layers SHEET, PARTS, LABELS). Lead-ins, the cutting order and common-line cutting are your cutter's software's job.

The nesting is the same engine as PartCraft's Export › Nest, which also unfolds sheet metal parts.
