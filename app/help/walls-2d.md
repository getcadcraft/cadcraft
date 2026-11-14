---
title: Draw smart walls, doors and windows in 2D
summary: Draw walls like a polyline, join them cleanly, and drop in doors and windows that move with the wall. All 2D, with no 3D model.
section: tasks
order: 72
keywords: wall, walls, WALL, WA, door, DOOR, DR, window, WINDOW, WN, DELOPENING, smart wall, floor plan, swing, hinge, opening
---

Walls here are 2D drafting objects. They make no 3D model, so a plan stays as light as a line drawing. For a building model, use BimCraft.

## Draw walls

Type `WALL` (`WA`), or choose {{ui:Wall}} in the {{ui:More}} menu of the {{ui:Draw}} group, then click points as you would for a polyline. Press {{key:Enter}} to finish, or type `C` to close the room.

- `T` sets the thickness.
- `J` says what your clicks follow: the centre of the wall, or its left or right face.
- `F` sets the fill: none, solid or hatch.

Corners mitre by themselves. A wall that ends within another wall's thickness joins it in a clean T, and walls that cross open up to each other. The joins are saved with the walls. For rectangles, polygons, arcs, splitting, locks and the rest, see "Wall shapes, cuts, offsets and locks for 2D walls".

## Add doors and windows

Type `DOOR` (`DR`) or `WINDOW` (`WN`) and click on a wall. A door swings to the side of the wall you click. `W` sets the width, `Y` the type and `H` the hinge side. Keep clicking to place more, and press {{key:Enter}} to finish. Doors can be single, double, sliding or an open doorway. Windows can be fixed, casement or sliding.

## Change them

Select a wall to see its grips:

- The end grips stretch the wall. Walls joined to it follow.
- The middle grip moves the wall.
- A grip on an opening slides it along the wall.
- The arrows flip a door's hinge and swing.

Properties shows the thickness, the fill and each opening: type, width, position, hinge, swing, shown open or closed, and Remove. `DELOPENING` takes out the opening nearest where you click.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` and `ERASE` work as usual. Doors and windows go with their wall, joined walls keep their joins, and one Undo takes it all back.

## In other programs

Each wall is saved as an ordinary block, so other CAD programs show it correctly and can move it, but they can't edit it as a wall. `EXPLODE` turns a wall into plain lines and arcs, and it stops being a wall.
