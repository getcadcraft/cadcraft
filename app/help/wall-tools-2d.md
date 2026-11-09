---
title: Wall shapes, cuts, offsets and locks for 2D walls
summary: Draw walls as rectangles, polygons and arcs, split and rejoin them, move them by a dimension, and lock one wall to another or to a grid line. The same tools as BimCraft's walls.
section: tasks
order: 74
keywords: wall, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, join, disallow join, lock, grid line, split, gap, offset, location line
---

These tools work on the 2D walls from `WALL` (see "Draw smart walls, doors and windows in 2D"). They use the same rules as the wall tools in BimCraft, so a wall behaves alike in both.

## Joins are stored

When a wall end lands on another wall, CadCraft saves that join with both walls. It no longer works the joins out again from where the ends happen to be. So:

- Walls joined to a wall you move follow it and stay joined. Their ends slide along their own lines, so nothing turns.
- A wall you draw with {{ui:Disallow joins}} (`D` in `WALL`), or turn off in Properties ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), stays free at that end, even if it touches another wall, until you allow it again.
- An older drawing has no stored joins yet. The first change you make finds them once, from how the walls stood before the change, and saves them. `WALLJOINS` does it at once.
- DWG and DXF files carry the joins inside each wall. CadCraft reads them back as saved. A program that keeps no extended data shows the walls as plain blocks and drops the joins, and a join whose walls were moved in another program is dropped the next time you change either wall.

## Draw wall shapes

Each one makes the walls in one undo step, with the corners joined. In `WALL`, `O` sets a placement offset (how far to the left of your clicks the wall goes) and `D` turns joining off for the walls you draw next.

- `WALLRECT` (`WR`): two opposite corners, like `RECTANG`.
- `WALLROT`: the first side, then how far out the other side goes, for a rectangle at any angle.
- `WALLPOLY` (`WP`): the number of sides (3 to 64), the centre, `I` for inscribed or `C` for circumscribed, then the radius, like `POLYGON`.
- `WALLARC` (`WARC`): centre, start, end. `D` turns the arc the other way.
- `WALLTAN`: click near the end of a wall, then the end of the arc, which leaves along that wall.
- `WALLPICK`: click a line or polyline and say whether to take the lines joined to it as well.
- `WALLTRACE`: click inside a closed area of lines and walls to put walls round the smallest one.

Plan walls are straight, so an arc is drawn as short straight walls of 15 degrees each. They join like any corner.

## Cut walls

- `WALLSPLIT` (`WS`): click the wall, then the point. `C` cuts where another wall crosses it, `G` leaves a gap between the parts, `F` makes the cut ends free instead of joined. The first part keeps the wall's place in the drawing, and doors and windows go with their part. A cut through a door or window is refused.
- `WALLDELSEG`: click the wall, then the two ends of the piece to delete.
- `WALLREJOIN`: click two parts of one wall to make them one again.

## Move walls by distance

- `WALLDIM`: click a linear or aligned dimension that runs from one wall to another, then type the new value. The wall at the far end moves square to itself, the wall at the first end holds, and the walls joined to it follow.
- `WALLOFFSET` (`WO`): click a wall, then the side to move it to (`D` types a distance, `C` makes a copy instead).
- `WALLSTRETCH`: a window round the wall ends, then a base point and a second point.
- In Properties, a typed {{ui:Length}} keeps the start and takes the wall joined at the far end with it, and a new {{ui:Thickness}} grows away from the {{ui:Location line}} you chose (the left face, the right face or the centre).

## Lock walls

A lock stays with the wall in the file. If you move one locked wall, the other follows. If one change moves both walls differently, it is refused and nothing changes.

- `WALLHOLD`: lock a wall to another wall. `A` moves it onto the other wall's line first, `K` keeps the distance it has.
- `WALLHOLDDIM`: lock the distance between two parallel walls.
- `WALLGRID`: lock a wall to a grid line (a line on a grid layer with its tag in text at one end), either along it or with one end on it. Move the grid line with `GRIDMOVE` and the wall follows; a wall that only starts on the line no longer travels whole.
- `WALLHOLDS` lists the locks. `WALLUNHOLD` takes the locks off a wall.

## What is not here yet

Locks use the centre lines of the walls. Walls here do not have a join style or a layer priority, and the walls do not curve (see arcs above). Nobody has tried these tools on a large drawing, and they have not been checked in another CAD program.
