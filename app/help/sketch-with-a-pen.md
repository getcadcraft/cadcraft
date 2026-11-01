---
title: Sketch with a pen and get precise geometry
summary: Draw freehand with a pen, mouse or finger and each stroke becomes a clean line, circle, arc, rectangle or polyline as you lift the pen, snapped to what is already drawn, with its size ready to type over.
section: tasks
order: 63
keywords: sketch, pen, stylus, freehand, finger, clean up, precise, snap, SKETCHLIVE, SKETCHFIX, size, type over
---

Start {{cmd:SKETCHLIVE}} (or choose **Draw › More › Sketch with a pen**) and draw a stroke by pressing and dragging. When you lift the pen, CadCraft reads what you meant and puts it in the drawing:

| Your stroke | What you get |
|---|---|
| Nearly straight | A line. A nearly level or plumb line is made exactly level or plumb. |
| Closed and round | A circle |
| Part of a round shape | An arc |
| Closed with four right-angled corners | A rectangle |
| Anything else | A polyline with squared sides |

The ends of a stroke are pulled onto the nearest end of what is already drawn, so a sketched wall meets the wall beside it.

## Type over the size

After each stroke the command line shows its size (a line's **length**, a circle's or arc's **radius**, a rectangle's **width**) as the default. Press {{key:Enter}} to keep it, or type a number or a length such as `12'6"` to replace it. A line keeps its first end, a circle its centre, a rectangle its first corner.

Press {{key:Enter}} on an empty prompt to finish, or type `U` to take the last stroke back. The whole session is one undo step.

## Cleaning up several strokes at once

{{cmd:SKETCHFIX}} collects strokes and makes them all precise when you press {{key:Enter}}, which suits a rough layout drawn quickly.

:::note
Everything is worked out on your computer by rules, with no model and nothing sent anywhere.
:::
