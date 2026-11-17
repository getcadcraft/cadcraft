---
title: MEP drafting: legend, schedule and limits
summary: The legend of what the drawing uses, the count schedule as a table and a CSV file, and what the add-on does not do yet.
section: reference
order: 30
keywords: legend, schedule, count, quantity, table, csv, export, limits, not built, 3d, bimcraft
---

## Legend

{{cmd:MEPLEGEND}} places a legend: a sample line of each service drawn in (on the service's own layer, so it shows its colour and linetype), then each symbol and each kind of equipment the drawing uses, with its name. It is one block, `MEP_LEGEND`. Run the command again and choose {{ui:Update}} after the drawing changed.

## Schedule

{{cmd:MEPSCHED}} counts the symbols and equipment by kind, size and service, prints the count at the command line and places it as a table (block `MEP_SCHEDULE`). It does not follow the drawing by itself: run the command again and choose {{ui:Update}}. {{cmd:EXPORT}} writes the same count as a CSV file. {{cmd:COUNT}} and its attribute export work on the symbols too, since they are ordinary blocks with attributes.

## Not built yet

- Run lengths are not in the schedule.
- A run's size or service cannot be changed after it is drawn.
- Pipe sizes come from one table, steel pipe; other pipes are drawn at the outside diameter you type.
- A branch opening in a double-line run is not closed again when the branch is erased.
- Symbols do not go on flexible ducts.
- No sanitary fixtures, no fittings placed by themselves (tees and reducers at size changes), no slopes, no sizing or pressure-loss calculation. The Piping and HVAC add-ons do sizing and 3D solids for their own run objects.
- Nothing is read from or written to a BimCraft model: the 3D model and this 2D drawing are separate.
- The legend and schedule are placed in the space that is open (the model or a sheet) and list that space.
