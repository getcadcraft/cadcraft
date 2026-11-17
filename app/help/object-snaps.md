---
title: Snap to points on objects
summary: Use object snaps, Ortho and the grid to pick exact endpoints, midpoints, centers and intersections with the mouse.
section: tasks
order: 20
keywords: osnap, object snap, endpoint, midpoint, center, intersection, perpendicular, quadrant, nearest, node, insertion, ortho, grid, f3, f8, f7, polar tracking, polar, polarang, object snap tracking, otrack, tracking, f10, f11
---

## What you will make

A rectangle with its two diagonals, a circle centered where they cross, and a line from the middle of one side square onto the circle. Every point is picked with the mouse, and every point is exact.

## How snapping works

While a command asks for a point, CadCraft looks for snap points within about 10 pixels of the crosshair. When it finds one, a marker and a label appear ("Endpoint", "Intersection"), and a click lands **exactly** on that point, not where the crosshair is.

Snaps are on when {{ui:Snap}} in the status bar is pressed. {{key:F3}} turns them on and off.

The snaps you can use are:

| Snap | Lands on |
|---|---|
| Endpoint | The ends of lines, arcs and polyline segments |
| Midpoint | The middle of lines, arcs and polyline segments |
| Center | The center of circles and arcs, and of polyline arc segments |
| Quadrant | The 0, 90, 180 and 270 degree points of circles and arcs |
| Intersection | Where two objects cross |
| Perpendicular | The point on an object square to the last point (needs a base point) |
| Tangent | The point on a circle or arc where a line from the last point just touches it. With no last point yet (a line's first point), the marker says "deferred": the touch point is worked out once the next point is known, so a line from Tangent to Tangent touches both circles |
| Nearest | The nearest point on any object |
| Node | Point objects |
| Insertion | The insertion point of text and block references |

All of them are on by default except Tangent and Nearest. Nearest tends to win when you want something else; turn Tangent on when you need it.

## Choose your snaps

1. Click the small arrow next to {{ui:Snap}} in the status bar. The {{ui:Object snaps}} list opens.
2. Tick or untick snaps. Changes apply at once.
3. Click the arrow again to close the list.

CadCraft remembers your choice, and the {{ui:Grid}}, {{ui:Ortho}} and {{ui:Snap}} settings, in this browser.

## Steps

1. Type `REC` and press {{key:Enter}}.
2. Type `0,0` and press {{key:Enter}}.
3. Type `@4000,3000` and press {{key:Enter}}. A rectangle appears.
4. Click {{ui:Extents}}.
5. Type `L` and press {{key:Enter}}.
6. Move the crosshair to the lower-left corner. The marker shows "Endpoint". Click.
7. Move to the upper-right corner until "Endpoint" shows. Click.
8. Press {{key:Enter}} to end the line.
9. Press {{key:Enter}} again to repeat {{cmd:LINE}}, and draw the other diagonal from the lower-right corner to the upper-left corner the same way.
10. Type `C` and press {{key:Enter}} to start a circle.
11. Move the crosshair to where the diagonals cross. The marker shows "Intersection". Click.
12. Type `800` and press {{key:Enter}}.

You should see a circle centered exactly on the crossing.

13. Type `L` and press {{key:Enter}}.
14. Move to the middle of the left side of the rectangle until "Midpoint" shows. Click.
15. Move the crosshair onto the circle, on its left side. The marker shows "Perpendicular" or "Quadrant"; both are the same point here. Click.
16. Press {{key:Enter}}.

The new line runs from the middle of the left side and stops exactly on the circle.

## Skip a snap for one click

Hold {{key:Shift}} while you click. Object snaps are ignored for that click, and the point goes exactly where the crosshair is (or along the Ortho direction, if Ortho is on).

## Ortho

{{ui:Ortho}} ({{key:F8}}) keeps the next point straight across or straight up and down from the base point. It applies to clicks and to direct distance entry (a bare number typed at the prompt). Object snaps win over Ortho: if a snap marker shows, the click goes to the snap.

## Polar tracking

{{ui:Polar}} ({{key:F10}}) is Ortho at more angles. While a command has a base point (the last point of a line, a move's base point), the pointer lines up whenever it comes near a ray from it at a multiple of the polar step: a dotted line shows, and a label by the crosshair reads `Polar: 1200 < 30°`. Click to use that point, or type a distance: `1200` goes exactly 1200 along the ray.

The step is 90° until you change it: type {{cmd:POLARANG}}, press {{key:Enter}}, and type `30` (or 45, 22.5, 15 …). Polar and Ortho exclude each other: turning one on turns the other off.

## Object snap tracking

{{ui:Track}} ({{key:F11}}) lines the pointer up with snap points you have rested on, so you can pick a point level with one corner and above another without drawing helper lines.

1. Turn on {{ui:Snap}} and {{ui:Track}}, and start a command that asks for a point (`L`).
2. Rest the pointer on a snap point, such as a corner, for half a second, without clicking. A small cross marks it: it is acquired. Rest on it again to drop it.
3. Move the pointer straight away from it, horizontally or vertically. A dotted line follows the pointer and the label reads `Track: 600 < 90°`. Click, or type a distance.
4. Acquire a second point, and move to where the vertical through one meets the horizontal through the other: the pointer snaps to that crossing (`Track: where two lines meet`).

With {{ui:Polar}} on as well, acquired points track at every polar angle. Up to seven points are kept, until the command ends. {{key:Shift}} turns tracking off for one click, like snaps.

## Grid

{{ui:Grid}} ({{key:F7}}) shows a grid of lines behind the drawing, with heavier lines every fifth line; the spacing changes as you zoom. It is only a guide until you turn on {{ui:Grid snap}} ({{key:F9}}): then clicks land on the nearest grid point, unless an object snap takes the point first.

## Function keys on your computer

{{key:F9}} is Grid snap, {{key:F10}} is Polar and {{key:F11}} is Track.

:::mac
On a Mac, F3, F7, F8 and F9 usually control Mission Control and media. Hold **fn** with the key, or turn on standard function keys, as described in [Keys, mice and trackpads](common:keys). The status bar buttons always work.
:::

:::firefox
In Firefox, F7 is also the key for caret browsing. If Firefox asks whether to turn caret browsing on, choose **No**. Use the {{ui:Grid}} button if the question keeps coming back.
:::

:::touch
On a touch screen there is no hover, so the snap marker only appears where your finger touches. Zoom in close for small targets, or type coordinates instead.
:::

## Common mistakes

- **The click went to the wrong point.** Look at the marker label before you click: Endpoint wins over Midpoint when both are near. Zoom in, or untick snaps you do not need.
- **No marker appears.** {{ui:Snap}} is off, or the snap you want is unticked, or the object is on a layer that is off or frozen.
- **Snaps grab the wrong thing in a busy drawing.** Zoom in. The snap distance is measured in screen pixels, so zooming in makes it smaller on the drawing.
- **Expecting Shift to give a straight line.** In CadCraft, Shift turns snaps off for one click. Use {{ui:Ortho}} for straight lines.
- **Expecting points to land on grid points.** Turn on {{ui:Grid snap}} ({{key:F9}}), or type coordinates for round numbers.
