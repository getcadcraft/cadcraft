---
title: Draw with coordinates
summary: Draw an exact floor outline by typing absolute, relative and polar coordinates, and by direct distance entry.
section: tasks
order: 10
keywords: line, pline, polyline, coordinates, relative, polar, absolute, direct distance, @, typing points, exact, ortho
---

## What you will make

The outline of an L-shaped room, 6000 by 4500 with a 2000 by 1500 notch, drawn exactly, plus a wall at 30 degrees. You will use all four ways of typing a point. Work in millimeters: one drawing unit stands for one millimeter.

The quick reference for every format is in [Coordinate and distance entry](topic:coordinate-entry).

## Before you start

1. Open CadCraft. If a drawing is open, click {{ui:New}} first.
2. Press {{key:Esc}} so that nothing is selected. The right panel reads {{ui:Current settings}}.
3. Set {{ui:Units}} to {{ui:Millimeters}}. Nothing is resized; this only tells sheets and plots what a unit means.

## Absolute coordinates: the first point

An absolute coordinate is a position measured from the origin, typed as `x,y`.

1. Type `L` and press {{key:Enter}}. The prompt reads `Specify first point:`.
2. Type `0,0` and press {{key:Enter}}.

The line is now rubber-banding from the origin to the crosshair. The coordinates in the status bar show the distance and angle from the start point as you move.

## Relative coordinates: @dx,dy

A relative coordinate is typed as `@dx,dy`: so far across, so far up, from the last point. Negative numbers go left or down.

3. Type `@6000,0` and press {{key:Enter}}. A 6000 line runs to the right.
4. Type `@0,3000` and press {{key:Enter}}.
5. Type `@-2000,0` and press {{key:Enter}}.
6. Type `@0,1500` and press {{key:Enter}}.

You should see four connected lines climbing up the right side of the room.

## Direct distance entry: a bare number

When you type a single number, CadCraft goes that distance in the direction of the crosshair. Turn on Ortho so the direction snaps to horizontal or vertical.

7. Press {{key:F8}}, or click {{ui:Ortho}} in the status bar. The status bar says "Ortho on".
8. Move the crosshair to the left of the last point. The rubber band stays horizontal.
9. Type `4000` and press {{key:Enter}}. The line goes 4000 to the left.
10. Move the crosshair below the last point.
11. Type `4500` and press {{key:Enter}}. You are back at the start point.
12. Press {{key:Enter}} on the empty prompt to end the command.

:::mac
F8 may control media playback on a Mac keyboard. Hold **fn** and press F8, or click {{ui:Ortho}}. See [Keys, mice and trackpads](common:keys).
:::

You now have a closed L-shaped outline made of six separate lines.

13. Click {{ui:Extents}} to see all of it.

## Polar coordinates: @distance<angle

A polar coordinate is typed as `@distance<angle`. Angles are in degrees, measured counterclockwise from the positive X direction: 0 is right, 90 is up, 180 is left, 270 (or -90) is down.

14. Type `L` and press {{key:Enter}}.
15. Type `6000,0` and press {{key:Enter}} to start at the lower-right corner.
16. Type `@2500<-30` and press {{key:Enter}}. A 2500 line leaves the corner, heading down and to the right at 30 degrees below horizontal.
17. Press {{key:Enter}} to end the command.

A polar coordinate without `@`, such as `2500<30`, is measured from the origin instead of from the last point.

## The same outline as one polyline

Six separate lines are fine for many jobs, but a polyline is one object: it offsets, measures and selects as a whole. Use {{cmd:PLINE}} with the same input.

1. Type `PL` and press {{key:Enter}}.
2. Type `0,-6000` and press {{key:Enter}} to start below the first outline.
3. Type `@6000,0`, then press {{key:Enter}}.
4. Type `@0,3000`, then press {{key:Enter}}.
5. Type `@-2000,0`, then press {{key:Enter}}.
6. Type `@0,1500`, then press {{key:Enter}}.
7. Type `@-4000,0`, then press {{key:Enter}}.
8. Type `C` and press {{key:Enter}}. The polyline closes and the command ends.
9. Click the new outline. The right panel shows "Polyline", its {{ui:Vertices}}, {{ui:Length}} and, because it is closed, its {{ui:Area}}.

The area should read 24000000 (square millimeters, which is 24 square meters).

## Options while drawing

- In {{cmd:LINE}} and {{cmd:PLINE}}, type `U` and press {{key:Enter}} to take back the last segment without leaving the command.
- In {{cmd:LINE}}, `C` closes back to the first point once there are at least two segments.
- In {{cmd:PLINE}}, `A` switches to arc segments (each arc continues smoothly from the segment before), and `L` switches back to lines. In arc mode, the close option is `CL`.
- Pressing {{key:Enter}} at `Specify first point:` in {{cmd:LINE}} starts from the last point you gave, so you can carry on where you stopped.

## Common mistakes

- **Typing `6000,0` when you meant `@6000,0`.** Without `@`, the point is measured from the origin, not from the last point, so the line shoots off somewhere unexpected. In CadCraft, `x,y` is always absolute. Press `U` and {{key:Enter}} to take it back.
- **A comma typed as a decimal point.** Decimals use a period: `1250.5`. A comma always separates X from Y.
- **The direct distance went the wrong way.** A bare number follows the crosshair. Move the crosshair to the side you want before you press {{key:Enter}}, and turn on {{ui:Ortho}} for straight lines.
- **"Point or option keyword required."** CadCraft did not understand what you typed. Check for spaces inside the number or a missing comma, and type it again.
- **Feet and inches.** CadCraft reads plain numbers only. Type `150` for 12'-6" in an inch drawing, or `12.5` in a foot drawing.
