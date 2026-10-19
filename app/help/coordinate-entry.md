---
title: Coordinate and distance entry
summary: Every way to type a point, a distance, an angle or a number at the CadCraft command line, with examples.
section: reference
order: 30
keywords: dynamic input, dyn, f12, tab, coordinates, absolute, relative, polar, @, direct distance, angle, degrees, last point, lastpoint, typing points, input, arithmetic, calculation, calculator, cal, plus, fraction, expression
---

## Points

When the prompt asks for a point, type one of these and press {{key:Enter}}:

| You type | Meaning | Example |
|---|---|---|
| `x,y` | Absolute: measured from the origin 0,0 | `2500,1200` |
| `#x,y` | Also absolute (accepted for habit) | `#2500,1200` |
| `@dx,dy` | Relative: across and up from the last point | `@600,0` |
| `@d<a` | Relative polar: distance and angle from the last point | `@1500<45` |
| `d<a` | Absolute polar: distance and angle from the origin | `3000<90` |
| a single number | Direct distance: that far from the base point, toward the crosshair | `1200` |
| `*x,y`, `@*dx,dy` | World coordinates while a UCS is set | `*0,0` |

With a UCS set ({{cmd:UCS}}), `x,y`, `@dx,dy` and the angle in `d<a` are measured along the UCS axes. See [Turn the view and use your own coordinates](topic:ucs-and-turned-view).

Or click in the drawing; object snaps and Ortho apply to clicks.

Rules:

- A comma separates X from Y. Decimals use a period: `1250.75,300`.
- Negative values go left and down: `@-600,0`.
- Do not type spaces: {{key:Space}} sends the line, like {{key:Enter}}.
- Numbers may use exponents: `1e3` is 1000.
- No units are typed, and no feet-and-inch notation. Type plain numbers in drawing units.

## The last point

`@` counts from the **last point you gave at any point prompt**, in any command: a click, a snap or a typed point. It is remembered between commands, so you can start a new line `@0,500` away from where the last one ended. Before you have given any point, `@` counts from 0,0.

Some places where this matters:

- In {{cmd:COPY}}, after the first copy the last point is that copy's point. `@600,0` twice places copies 600 and 1200 from the original.
- After you place a dimension, the last point is where you placed the dimension line, not the dimension's end.

When in doubt, use an absolute point, a snap, or a direct distance.

## Direct distance entry

A bare number is a distance from the command's **base point** (the point the rubber band starts from) toward the crosshair:

1. Move the crosshair in the direction you want.
2. Type the distance and press {{key:Enter}}.

With {{ui:Ortho}} on, the direction snaps to straight across or straight up and down, which makes this the fastest way to draw square walls. If there is no base point, or the crosshair sits exactly on it, the number is refused with "Point or option keyword required."

## Angles

- In degrees, as a plain number: `30`, `-45`, `112.5`.
- Measured counterclockwise from the positive X direction (pointing right): 0 is right, 90 up, 180 left, 270 or -90 down.
- Where an angle is asked for (rotation, text angle), you can also click: the angle is measured from the base point to the click. Before a base point exists, the first click sets it and the prompt asks for a second point.

## Distances

Where a distance is asked for (radius, offset, text height, scale factor):

- type a positive number (in a feet-and-inch drawing also `12'6"` or `6-1/2`: see [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions)), or
- click a point: the distance from the command's base point to it, or
- click two points when there is no base point: the prompt changes to `Specify second point`.

"Requires a positive number or two points." means the value was not a number, or was negative.

## Arithmetic in a typed value

Anywhere a length, a coordinate, an angle or a number is typed (the command line, dynamic input, Properties boxes and
dialogs), you can type a calculation with `+`, `-`, `*`, `/` and brackets instead of working it out first:

| Type | Gives |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (in a feet-and-inch drawing) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, in the drawing's units (when its units are set) |
| `@4+7/16,0` | a point 4.4375 to the right of the last one |
| `360/7` | an angle of 51.43 degrees |

- A dash written into a length is still part of it: `4-7/16` is 4 7/16 and `24'-6"` is 24 feet 6 inches. To subtract after
  a foot mark, finish the length first, `24'-0"-6"`, or put the calculation in brackets with spaces round the dash,
  `(24' - 6")` (inside brackets a space is a space; elsewhere it presses {{key:Enter}}).
- A plain number added to a length is in drawing units; multiplying or dividing by one scales the length. Two lengths
  multiplied make an area, so `2'*3'` is refused.
- `abs`, `round`, `ceil` and `floor` work too: `round(10/3)`.
- A calculation that cannot be read is refused with where it went wrong, for example "The calculation ends too soon
  (character 3): a value is missing." Nothing is ever read as 0. {{cmd:CAL}} prints a calculation's value.

## Dynamic input

{{ui:Dyn}} ({{key:F12}}, in the status bar) puts the values by the crosshair while a command asks for a point.

- With no base point yet (a line's first point), the two fields are **X** and **Y**.
- After that, they are the **distance** and the **angle** from the last point.

Typing still goes to the command line; the field by the crosshair shows it, and the rubber band follows it.

1. Type a value: it goes into the highlighted field.
2. Press {{key:Tab}} (or a comma after X). The value is locked (shown bold) and the next field is highlighted. A locked distance keeps the rubber band that long while you aim with the mouse.
3. Type the second value, or just aim, and press {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} draws 50 straight up from the last point.

Pressing {{key:Enter}} after one value without {{key:Tab}} works as direct distance entry. Feet and inches work in the fields too (`12'6"`). Distance and angle prompts (a circle's radius, a rotation) show their value by the crosshair as well.

## Options and defaults

- Options appear in square brackets. Type the capital letters of an option (`D` for `[Diameter]`, `CL` for `CLose`) and press {{key:Enter}}. Longer beginnings of the word also work (`DIA`).
- A default appears in angle brackets, such as `<500>`. Press {{key:Enter}} or right-click to use it.

## The coordinate display

The status bar shows the crosshair's X and Y (in the UCS when one is set), after snaps and Ortho. While a command has a base point it adds `Δ` with the distance and angle from that point, for example `Δ 1500 < 30°`: the numbers you would type as `@1500<30`.

Use {{cmd:ID}} to print a point's coordinates and {{cmd:DIST}} to measure between two points.
