---
title: Move, copy, rotate, scale, mirror, stretch and array
summary: Lay out furniture in a room with the basic modify commands, using base points, typed distances and undo.
section: tasks
order: 40
keywords: move, copy, rotate, scale, mirror, stretch, array, join, matchprop, match properties, painter, arrayrect, arraypolar, polar array, erase, explode, undo, redo, base point, displacement, modify, align, distribute, line up, space evenly
---

## What you will make

A table with one chair, copied round the table, turned, mirrored and resized. Along the way you use {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} and {{cmd:UNDO}}.

## Draw the pieces

1. Type `REC` and press {{key:Enter}}, type `0,0` and press {{key:Enter}}, then type `@1800,900` and press {{key:Enter}}. This is the table.
2. Type `REC` and press {{key:Enter}}, type `300,-700` and press {{key:Enter}}, then type `@450,450` and press {{key:Enter}}. This is a chair, below the table.
3. Click {{ui:Extents}}.

## Move: base point, then second point

Every move, copy, rotate and scale starts from a **base point**: the point that is carried along, or turned about.

1. Click the chair to select it.
2. Type `M` and press {{key:Enter}}. The history says `1 found`.
3. At `Specify base point`, snap to the chair's upper-left corner (Endpoint) and click.
4. At `Specify second point`, type `@0,200` and press {{key:Enter}}.

The chair moves up 200, closer to the table.

:::tip
Type `D` at `Specify base point` to give a displacement instead: CadCraft then asks `Specify displacement`, and you type how far across and up, such as `0,200` (no `@` needed).
:::

## Copy, as many times as you like

1. Click the chair.
2. Type `CO` and press {{key:Enter}}.
3. Snap to the chair's lower-left corner and click as the base point.
4. Type `@600,0` and press {{key:Enter}}. A copy appears 600 to the right.
5. Type `@600,0` again and press {{key:Enter}}. A second copy appears 1200 to the right of the original.
6. Press {{key:Enter}} to end the command.

{{cmd:COPY}} keeps going until you press {{key:Enter}}. Each copy is placed by the distance from the base point to the point you give. An `@` point counts from the last point you entered, which after the first copy is that copy's point, so `@600,0` twice gives copies at 600 and 1200. Type `U` and press {{key:Enter}} to take back the last copy without leaving the command.

You should see three chairs in a row below the table.

:::tip
{{cmd:COPY}} is for copies inside one drawing, placed by a base point. To carry objects to another drawing or tab, or to paste them later, use the clipboard: {{key:Mod+C}}, then {{key:Mod+V}}. {{key:Mod+D}} makes one copy that moves with the pointer. See [Copy, paste and duplicate](topic:copy-paste).
:::

## Mirror the row to the other side

1. Drag a crossing (right to left) over the three chairs, without touching the table.
2. Type `MI` and press {{key:Enter}}.
3. At `Specify first point of mirror line`, snap to the Midpoint of the table's left side and click.
4. At `Specify second point of mirror line`, snap to the Midpoint of the table's right side and click.
5. At `Erase source objects? [Yes/No] <N>`, press {{key:Enter}} to keep them.

You should see three chairs below the table and three mirrored chairs above it. Text in a mirrored selection stays readable: it is placed mirrored but not written backwards.

## Rotate a chair

1. Click the rightmost chair below the table.
2. Type `RO` and press {{key:Enter}}.
3. Snap to the chair's lower-right corner and click as the base point.
4. Type `90` and press {{key:Enter}}.

The chair turns 90 degrees counterclockwise about the base point. A negative angle turns clockwise. Instead of typing, you can click a second point: the angle is measured from the base point to that point.

## Scale the table

1. Select the table.
2. Type `SC` and press {{key:Enter}}.
3. Snap to the table's lower-left corner and click as the base point.
4. Type `1.2` and press {{key:Enter}}.

The table is 20% bigger, growing away from the base point. A factor below 1 makes it smaller.

:::note
If you click a point instead of typing the scale factor, the factor is the distance from the base point to that point. Clicking one drawing unit away gives a factor of 1. Typing the number is usually what you want.
:::

## Undo and redo

- {{key:Mod+Z}}, the {{ui:Undo}} button, or `U` then {{key:Enter}} undoes the last command. A whole command is one step: undoing a {{cmd:COPY}} that made five copies removes all five.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, the {{ui:Redo}} button, or `REDO` brings it back.
- The history says what was undone ("Undid COPY").

CadCraft keeps the last 500 steps. Layer settings (on, freeze, lock, color) are settings, not edits, and are not undone.

## Stretch a room wider

{{cmd:STRETCH}} (`S`, or {{ui:Stretch}}) moves only what lies inside a crossing window: corners and line ends inside it move, everything else stays put, so the room gets wider instead of moving.

1. Type `S` and press {{key:Enter}}.
2. Drag a window from right to left over the right-hand wall, so it covers the wall's corners and the ends of anything meeting it.
3. Press {{key:Enter}}.
4. Click a base point, then type `@600,0` and press {{key:Enter}}.

The rectangle is 600 wider; lines that ended on the wall still end on it. An arc with one end inside keeps its height, circles and text move when their center or insertion point is inside, and a dimension measures its new length. Objects picked one by one, without a window, simply move.

You can also select first: drag the crossing window (or a crossing lasso) over the wall with no command running, then type `S`. STRETCH takes that selection and stretches what its windows hold, just as if you had dragged them at its own prompt.

## Array: rows and columns, or round a center

{{cmd:ARRAY}} (`AR`, or {{ui:Array}}) copies the selection in a grid or in a circle.

1. Select a chair and type `AR`, press {{key:Enter}}. Press {{key:Enter}} for Rectangular.
2. A preview of 4 columns and 3 rows appears. Type `COU`, press {{key:Enter}}, then `5` for columns and `2` for rows.
3. Type `S`, press {{key:Enter}}, then `600` between columns and `-900` between rows (negative goes down).
4. Press {{key:Enter}} to make the copies.

For a ring of chairs round a table, choose `PO` (Polar) instead, click the table's center, and set `I` (items), `F` (fill angle: 360 for all the way round, 180 for half) and `ROT` (whether the copies turn to face the center). {{cmd:ARRAYRECT}} and {{cmd:ARRAYPOLAR}} skip the question.

## Join pieces into one polyline

{{cmd:JOIN}} (`J`, or {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): select lines, arcs and open polylines whose ends meet, and press {{key:Enter}}. They become one polyline, closed when they go all the way round, which you can then offset in one go. Lines that lie on one line become one line even with gaps between them; arcs of one circle become one arc, or the circle.

## Match properties

{{cmd:MATCHPROP}} (`MA`, or {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): click the object whose look you want, then select the objects to change and press {{key:Enter}}. They take its layer and color; a text takes its height, a dimension its sizes, a hatch its pattern. Type `S` (Settings) at the second question to turn any of these off.

## Align objects

**By points.** {{cmd:ALIGN}} (`AL`, or {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): select the objects and press {{key:Enter}}, then
click a point on them (the source) and where it should go (the destination).

- One pair moves them. Press {{key:Enter}} at `Specify second source point` to stop there.
- Two pairs also turn them, so the line between the two source points lies along the line between the two destination
  points. CadCraft then asks `Scale objects based on alignment points?`: `Y` makes them that much bigger or smaller too.
- A third pair mirrors them when its two points are on opposite sides of that line.

**Edges and spacing.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (or `ALIGNPANEL`) opens a small panel
over the drawing. Select objects, then:

- pick what to line up with in {{ui:Align to}} (the whole selection, the first or the last object you picked, or a point
  you click) and click {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} or {{ui:Bottom}};
- or pick {{ui:Equal gaps}} or {{ui:Equal centres}} and click {{ui:Across}} or {{ui:Up and down}}: the outer two objects
  stay, the rest are spaced evenly between them (three objects at least).

Each click is one undo step, and the selection stays, so you can try another. Each object counts by its bounding box, in the
UCS when one is set. On the command line the same is {{cmd:ALIGNTO}} and {{cmd:DISTRIBUTE}}.

## Erase and explode

- {{cmd:ERASE}} (`E`, or {{key:Delete}}) removes the selected objects.
- {{cmd:EXPLODE}} (`X`) breaks a polyline into lines and arcs, a block reference into its objects, and a dimension into lines, arrowheads and text. Exploded dimensions no longer measure themselves.

## Common mistakes

- **Typing a distance without `@` at the second point.** `600,0` is the absolute point 600,0, not "600 to the right". Use `@600,0`, or a bare `600` with the crosshair pointing the right way.
- **The rotation went the wrong way.** Positive angles turn counterclockwise.
- **Undo removed more than expected.** One undo takes back the whole last command, including every copy it made.
- **The command did not ask to select objects.** Objects were already selected, so it used them. Press {{key:Esc}} first to start with nothing selected.
