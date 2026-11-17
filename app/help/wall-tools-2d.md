---
title: Wall shapes, cuts, offsets and locks for 2D walls
summary: Draw walls as rectangles, polygons and arcs, split and rejoin them, move them by a dimension, and lock one wall to another or to a grid line. The same tools as BimCraft's walls.
section: tasks
order: 74
keywords: wall, walls toolbar, wall buttons, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, join style, mitre, butt, square off, padlock, grip, drag end, rotate, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, join, disallow join, lock, grid line, split, gap, offset, location line
---

These tools work on the 2D walls from `WALL` (see "Draw smart walls, doors and windows in 2D"). They use the same rules as the wall tools in BimCraft, so a wall behaves alike in both.

## Where the tools are

- On the toolbar, the {{ui:Walls}} group has {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} and {{ui:Offset}}. Its {{ui:More}} menu has every other wall tool, each with its icon.
- In the ribbon menu styles, the {{ui:Walls}} tab has the panels {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} and {{ui:Join}}.
- In a layout, the tool rows and the toolbox show the same {{ui:Walls}} group.
- You can also type any command named below.

## Joins are stored

When a wall end lands on another wall, CadCraft saves that join with both walls. It no longer works the joins out again from where the ends happen to be. So:

- Walls joined to a wall you move follow it and stay joined. Their ends slide along their own lines, so nothing turns.
- Drag one end of a wall by its grip and the wall joined there keeps its direction too. Its end slides along its own line to meet the dragged wall, so the dragged end lands on that line, not always under the cursor. The preview shows where. A wall that butts into the dragged wall follows along its own line. Dragging the end straight along the wall changes its length, and the wall joined there moves with it.
- `ROTATE` on a joined wall works the same way: the ends of its neighbours slide along their own lines to the turned wall.
- To move a corner, select both walls that meet there and drag the grip on the corner. Both walls stay on the corner and both turn. Walls further along stay as they were.
- Hold {{key:Alt}} when you click the grip's new place to break the joins on purpose: the wall goes where you put it and nothing follows.
- If a drag would turn a joined wall back through its own far end, it is refused and nothing changes.
- A wall you draw with {{ui:Disallow joins}} (`D` in `WALL`), or turn off in Properties ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), stays free at that end, even if it touches another wall, until you allow it again.
- `WALLDISJOIN` ({{ui:Disallow join}} in the {{ui:Walls}} group) does the same with a click: click a wall near one end to disallow joins at that end, and click it again to allow them.
- An older drawing has no stored joins yet. The first change you make finds them once, from how the walls stood before the change, and saves them. `WALLJOINS` does it at once.
- DWG and DXF files carry the joins inside each wall. CadCraft reads them back as saved. A program that keeps no extended data shows the walls as plain blocks and drops the joins, and a join whose walls were moved in another program is dropped the next time you change either wall.

## Join style of a corner

A corner where two walls meet end to end is drawn as a mitre unless you choose another style.

- `WALLJOINSTYLE` ({{ui:Join style}} in the {{ui:Walls}} group): click the corner. Each click goes to the next style: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, then {{ui:Mitre}} again. Type `T` to switch which of the two walls runs through at the corner you clicked last. Press {{key:Enter}} to finish. One run of the command is one undo step.
- {{ui:Butt}}: one wall runs through to the far face of the other, and the other stops against its side. {{ui:Square off}}: the same, but the wall that runs through ends square to itself. At a right angle the two look alike.
- In Properties of a wall: {{ui:Join style at start}}, {{ui:Join style at end}}, and {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- The style is saved with both walls and travels in DWG and DXF files. A copy of a wall starts without it.
- A T join has no style to choose: the wall whose side is met runs through. A corner where three or more walls meet stays a mitre. So does a very sharp corner (under about 30 degrees) and two walls in one line.

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
- `WALLSPLITGAP` ({{ui:Split with gap}}): the same split, but it asks for the gap first.
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
- `WALLGRID`: lock a wall to a grid line (a line on a grid layer with its tag in text at one end), either along it or with one end on it. A wall locked along the line keeps the distance it has from it. Move the grid line with `GRIDMOVE` and the wall follows whole, with its joined walls. A wall that lies along a grid line moves whole with it even without a lock, and a wall that only ends on the line is stretched by that end.
- `WALLHOLDS` lists the locks. `WALLUNHOLD` takes the locks off a wall.
- Each lock shows a small padlock on the plan: beside the middle of the locked wall, or beside the end that is locked to a grid line. Click a padlock to take that lock off.

## What is not here yet

Locks use the centre lines of the walls. Walls here do not have layers, so there is no layer priority at a junction, and the walls do not curve (see arcs above). Nobody has tried these tools on a large drawing, and they have not been checked in another CAD program.
