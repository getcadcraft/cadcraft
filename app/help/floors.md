---
title: Stack floors in one drawing
summary: Draw the first floor over the ground floor at the same coordinates and turn each floor off, with no Xrefs.
section: tasks
order: 73
keywords: floor, floors, FLOORS, FLR, FLOOR, FLOORLAYERS, storey, level, stack, design layer, model space, underlay, xref
---

Floors let you stack plans in one model space. Each floor has its own objects, and layers carry on working across all of them. A wall on `P-Walls` can be on any floor.

## Start

Type `FLOORS` (`FLR`), or choose {{ui:Floors…}} in the {{ui:More}} menu of the {{ui:View}} group, then choose {{ui:Start with floors}}. What you've drawn so far goes on the ground floor.

## Draw on a floor

Pick the floor with the round button in the panel. New objects go on it.

Other floors that are on show faded under it. You can snap to them, so the first floor lines up with the ground floor, but you can't change them until you make them the active floor. The eye turns a floor off. Walls only join walls on their own floor.

To start a floor from the one below, select what you want, choose the floor in the panel and press {{ui:Copy there}}.

## Put floors on sheets

Select a viewport on a sheet and choose its floor under {{ui:Floor shown}} in Properties. A viewport with no floor chosen shows all the floors that are on.

## Send the file to someone else

Other CAD programs don't know about floors, so they show every floor together. Before sending a file, choose {{ui:Turn floors into layers}} in the panel, or type `FLOORLAYERS`. Each object moves to a layer named after its floor, such as `Ground floor-P-Walls`, so they can still turn each floor off. Undo takes it back. CadCraft keeps floors in the DWG or DXF file it saves.
