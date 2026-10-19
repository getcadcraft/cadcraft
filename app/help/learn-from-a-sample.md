---
title: Learn from a sample drawing
summary: Open CadCraft's sample house or sample as-built and walk through its sheets, title block, dimensions and layers.
section: start
order: 15
keywords: sample, samples, example drawing, learn, tutorial, walkthrough, title block, sheets, as-built, architectural set, open a sample
---

## What you will learn

How a finished set is built: model space, sheets with viewports at a scale, a title block with attributes, dimensions in feet and
inches and in millimetres, layers. The samples are CadCraft's own and free to use for anything (CC0).

## Open a sample

1. In the left panel, under {{ui:Drawing}}, click {{ui:Open a sample}} (or type {{cmd:SAMPLES}}; in the ribbon styles it is in
   the {{ui:File}} menu).
2. Click {{ui:Open}} beside {{ui:Sample house}}. It opens in a tab of its own, so your work stays open.

## Look round the model

1. Click {{ui:Extents}} (or type `ZOOM`, then `E`): the floor plan, the front elevation, a section and a wall detail.
2. In {{ui:Layers}}, click the eye beside `A-ANNO-DIMS` to hide the dimensions, and again to show them.
3. Click a door: Properties shows a block reference of `DOOR-32`. Doors and windows are blocks, placed turned and mirrored.

## The sheets

1. Click {{ui:A-101 FLOOR PLAN}} under the drawing: an ARCH D sheet with one viewport at 1/4" = 1'-0".
2. Double-click inside the viewport to work on the model through it; double-click outside to come back.
3. {{ui:A-501 DETAILS}} shows the wall detail at 1 1/2" = 1'-0": the same model, another scale.

## The title block

1. On any sheet, double-click the title block: {{ui:Edit attributes}} lists PROJECT, TITLE, SCALE, DATE, DRAWN and SHEET.
2. Change DRAWN to your initials and click {{ui:OK}}.
3. To change the title block itself on every sheet, select it and choose {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}.
   See [Attributes](topic:attributes).

## The as-built

Open {{ui:Sample as-built}} the same way. The grey dots on `SCAN-SLICE` are a slice of a scan; the walls on `AB-WALL` were
traced over them. The east wall is 35 mm out of square: the dimensions say so twice, in millimetres (`AB-DIMS-MM`) and in feet
and inches (`AB-DIMS-FTIN`, the same lengths through a measurement scale). The red clouds on `REV-1` mark what the survey found.

## Next

- [Change dimension text size](topic:change-dimension-text-size)
- [Plot to PDF](topic:plot-pdf): plot {{ui:A-101 FLOOR PLAN}}.
