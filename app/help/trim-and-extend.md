---
title: Trim and extend
summary: Cut lines back where others cross them and lengthen them to meet others, one piece at a time or many at once by dragging a path through them.
section: tasks
order: 52
keywords: trimextendmode, window drag, trim, extend, tr, ex, quick trim, drag, freehand, path, fence, crossing, shift, cutting edges, boundary edges, edgemode, mode, standard, quick, erase, preview, walls, cleanup
---

## What you will learn

How {{cmd:TRIM}} and {{cmd:EXTEND}} work, and the fast ways to use them: drag through many pieces at once, hold {{key:Shift}} to switch between trimming and extending, and see what will go before you click.

## Trim one piece

1. Draw a long horizontal line and two short lines across it.
2. Type `TR` and press {{key:Enter}}. The history says `Current settings: Quick mode, edges: No extend`.
3. Rest the pointer on the long line between the two short ones. That piece turns grey and dashed: it is what will go.
4. Click. The piece disappears.
5. Press {{key:Enter}} to end the command.

In Quick mode (the default) every visible object is a cutting edge, so you never choose edges first. Click the piece you want gone. An object that nothing crosses is erased whole, and the history says so.

## Trim many pieces in one drag

1. Draw a long horizontal line and ten short vertical lines across it.
2. Type `TR` and press {{key:Enter}}.
3. Press the mouse button above the long line, to the left of the first vertical line, and drag across all ten above the long line.

While you drag, the path shows as a dashed line, and every piece it has crossed turns grey. Let go: all ten top pieces are trimmed in one step. Type `U` and press {{key:Enter}} to put them all back at once.

:::tip
You can also click two empty spots: the line between them works like a dragged path. Type `F` (Fence) to click a run of points instead, then press {{key:Enter}}.
:::

:::touch
Drag a finger the same way. A tap on a piece trims it.
:::

## Extend instead, with Shift

1. Draw a vertical line, and five short horizontal lines to its left that stop before it.
2. Type `TR` and press {{key:Enter}}.
3. Hold {{key:Shift}}. Rest the pointer on a short line: the part it would grow by shows grey and dashed.
4. Still holding {{key:Shift}}, drag down through the five short lines.

All five now run to the vertical line. {{key:Shift}} works the other way round in {{cmd:EXTEND}} (`EX`): a click extends, a {{key:Shift}}+click trims. Extend lengthens the end nearest where you click or where the path crosses.

## Trim inside a window

1. Type `TR` and press {{key:Enter}}.
2. Type `C` and press {{key:Enter}}.
3. Click two corners round the pieces to remove.

Every piece that lies at least partly inside the window is trimmed.

To get a window just by dragging, without typing `C`: {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} ›
{{ui:A window}}. Then pressing on an empty spot and dragging draws a box, and every piece it touches is trimmed (or extended,
in {{cmd:EXTEND}}, or with {{key:Shift}}). {{ui:A path}} (the start) brings the freehand path back. The settings line at the
start of TRIM says which one is on.

## Choose the cutting edges (Standard mode)

Sometimes only one line should cut, such as a wall face with many other lines crossing it.

1. Type `TR` and press {{key:Enter}}.
2. Type `O` (mOde) and press {{key:Enter}}, then type `S` (Standard) and press {{key:Enter}}.
3. At `Select cutting edges`, click the edge lines (or drag a window), then press {{key:Enter}}. Pressing {{key:Enter}} with nothing selected makes every object an edge.
4. Click or drag through the pieces to remove.

Only the chosen edges cut, and an object no edge crosses is left alone. The mode is kept until you close the page; type `O`, then `Q` to go back to Quick. {{cmd:TRIMEXTENDMODE}} sets it before you start, as the variable of that name does elsewhere: `0` Standard, `1` Quick. `T` (cuTting edges) chooses new edges at any time; in {{cmd:EXTEND}} it is `B` (Boundary edges).

## Edges that would reach

1. Type `TR` and press {{key:Enter}}.
2. Type `E` (Edge) and press {{key:Enter}}, then `E` (Extend) and press {{key:Enter}}.

Now a cutting line or arc that stops short counts as if it went on: a short line cuts where it would cross if it were longer. Type `E`, then `N` (No extend) to switch back. This is the same as EDGEMODE 1 and 0.

## Erase without leaving

Type `R` (eRase) and press {{key:Enter}}, pick the objects to erase, and press {{key:Enter}}. TRIM carries on.

## Common mistakes

- **A whole line disappeared.** In Quick mode an object nothing crosses is erased. Type `U` to put it back, or switch to Standard mode (`O`, `S`).
- **"Nothing to trim there: no chosen edge crosses that object."** Standard mode only cuts at the edges you chose. Type `T` to choose them again.
- **"No boundary in that direction."** Extend found nothing ahead. Click nearer the end that should grow, or turn on `E` (Edge, Extend) for boundaries that stop short.
- **The drag drew a lasso instead.** A drag only trims while TRIM or EXTEND is asking for an object. With no command running, a drag selects (see [Lasso selection](topic:lasso-selection)).
- **Only lines, arcs, circles and polylines can be trimmed.** Explode a block first to trim its lines.
