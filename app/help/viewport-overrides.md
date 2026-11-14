---
title: Viewport class overrides
summary: On a sheet, hide a class or give it another colour, lineweight or fill in one viewport only; the model and the other viewports stay as they are.
section: tasks
order: 121
keywords: viewport, class override, viewport override, hide class in viewport, sheet, layout, VPLAYER, plot, Vectorworks
---

A sheet often shows the same model more than once: a plan with the furniture and a plan without it, or a lighting plan where only the lights are in colour. A viewport class override changes how one [class](topic:classes) shows **in that viewport only**.

1. Open the sheet and select one viewport.
2. Open the Classes panel (`CLASSES`) and pick the class.
3. Under {{ui:This viewport}}, tick {{ui:Hide in this viewport}}, or set {{ui:Color here}}, {{ui:Lineweight here}} or {{ui:Fill here}}.

The list below shows every class this viewport changes. {{ui:Clear this viewport's overrides}} takes them all off. Each change is one undo step.

## What an override changes

- **Hide** hides the class and every class under it in this viewport.
- **Color, lineweight and fill** change the objects of the class whose value is not set on the object itself, that is, objects that take it by class or by layer. An object with its own colour keeps it, as with a viewport layer override.

Overrides show on screen and in plots and PDFs, including a sheet set published to PDF. They work together with the viewport's frozen layers and layer overrides.

Overrides are saved with the drawing in DWG and DXF (with the class list, in the block `CADCRAFT_CLASSES`) and come back on the same viewport when the file is opened in CadCraft.
