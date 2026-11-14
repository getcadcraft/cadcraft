---
title: Set the drawing limits
summary: LIMITS sets a rectangle for the drawing: the grid fills it, ZOOM All shows it, and with the limits on, points outside it are refused. They are saved in DWG and DXF files.
section: tasks
order: 63
keywords: limits, drawing limits, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grid, outside limits, sheet size, drawing area, zoom all, boundary
---

**Drawing limits** are a rectangle that says how big the drawing is meant to be: the area you plan to draw in, such as a sheet 420 × 297. A new drawing has none, so the grid and the drawing area are unbounded, as before.

## Set them

Type {{cmd:LIMITS}} and answer:

- `Specify lower left corner or [ON/OFF] <0,0>`: a point, or {{key:Enter}} to keep the current one.
- `Specify upper right corner <420,297>`: a point, or {{key:Enter}} to keep the current one. It must be above and to the right of the first.

Or type `ON` or `OFF` at the first question to switch the check without changing the rectangle. Setting the corners is one undo step, and so is each ON and OFF.

## What they do

- **The grid fills the limits** and stops at their edge. It is a picture of the area, so turn {{ui:Grid}} on to see it.
- **ZOOM All** ({{cmd:ZOOM}}, then {{ui:All}}) shows the limits and the drawing together; {{ui:Extents}} still shows only the drawing.
- **With the limits ON**, a point you type or click outside them is refused with `**Outside limits` and the prompt stays. It covers the commands that make objects: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, the dimension commands and a few more. Commands that only move, select or measure are not limited, and neither is pasting, a grip drag, or an object a LISP routine makes: the limits are a guide for drawing, not a wall. With the limits OFF nothing is refused.
- Objects that are already outside stay where they are.

## In files and LISP

They are saved in DWG and DXF as `$LIMMIN`, `$LIMMAX` and `$LIMCHECK`. A file from another program that has only that program's default limits (0,0 to 12,9 or 420,297, check off) opens with none, so its grid is not squeezed into a small rectangle; a file with limits of its own, or with the check on, keeps them. In LISP, `(getvar "LIMMIN")`, `LIMMAX` and `LIMCHECK` read them and `setvar` writes them, as one undo step.

The limits belong to the model. A sheet (a layout) has its own paper size.
