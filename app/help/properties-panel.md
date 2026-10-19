---
title: The Properties panel
summary: See and change everything about the selected objects, many at once: coordinates with Z, sizes, text, dimension settings, transparency and more. Fields take expressions and lengths with units.
section: tasks
order: 61
keywords: totals, total length, total area, sum, selection length, properties, properties palette, ctrl+1, pr, ch, mo, ddmodify, varies, quick select, pickadd, coordinates, z, elevation, thickness, transparency, material, hyperlink, expression, quickcalc, vertex, dimension style, tolerance, decimals
---

## What you will learn

How to open the Properties panel, change one object or a hundred in one step, type exact coordinates (with Z), use expressions and units in any number field, and what each kind of object shows.

## Open it

The panel sits on the right. To bring it to the front:

- Press {{key:Mod+1}}, or type {{cmd:PROPERTIES}} (or `PR`, `CH`, `MO`).
- Double-click an object (text and multileaders open their text editor instead).

The panel is a movable panel like the others: drag its grip to dock it left, right or at the bottom, or drop it over the drawing to float it (see [Arrange the panels and use a second monitor](common:arrange-panels)).

### Fold it away

The pin button at the top right of the panel turns on **auto-hide**: the panel folds to a strip at the right edge and the drawing gets the room. Point at the strip (or press {{key:Mod+1}}) and it opens over the drawing; move away and it folds again. Click the pin again to keep it open. {{cmd:PROPERTIESCLOSE}} folds it too.

## Sections

Properties are grouped in sections you can fold: **General**, **Geometry**, **Text**, **Lines and arrows**, **Fit**, **Primary units**, **Alternate units**, **Tolerances**, **Pattern**, **Misc**, and for blocks **Attributes** and **Library item**. Click a section's name to fold or open it; CadCraft remembers which ones you folded.

Drag the thin line between the names and the values to make the names wider or narrower. Double-click it to put it back. With the keyboard, focus it and use the arrow keys.

## Change a value

1. Click a line. The heading reads "Line".
2. Click in {{ui:Length}}. While you edit, the field shows the full value, not the rounded one.
3. Type `2500` and press {{key:Enter}}. The line is now 2500 long, keeping its start point and angle.

{{key:Enter}} or clicking elsewhere applies the value; {{key:Esc}} puts the old value back. Every change is one undo step.

### Expressions and units

Every number field takes more than a plain number:

| You type | You get |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inches, in a drawing in feet and inches) |
| `900mm`, `3.5m`, `2ft` | Converted into the drawing's units |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (angle fields) |
| `0.5r`, `100g` | Radians and grads, as degrees |

A length with a unit needs the drawing to have units: set {{ui:Units}} under {{ui:New objects}} (nothing selected) first. A bad entry is refused with a note under the panel and nothing changes; it is never saved as 0. Functions: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; angles in degrees.

## Change many objects at once

1. Select several objects, for example 8 lines and 4 dimensions.
2. The heading says "12 objects", and a list at the top offers **All (12)**, **Line (8)** and **Dimension (4)**.
3. **All** shows what every object has (layer, color, linetype…). Pick **Dimension (4)** to see dimension settings.
4. Change a value, for example {{ui:Decimals}} to `1`.

All four dimensions change, in one undo step. A field that reads **Varies** means the objects differ; typing a value sets it on all of them. Objects on locked layers are left as they are, and the note says how many.

## Totals of a selection

With several objects selected, the {{ui:Totals}} section at the top says:

- **Objects**: how many of each kind, for example "8 lines, 2 polylines, 1 circle".
- **Total length**: the lines, arcs and polylines added up (splines from other programs count: they come in as
  polylines), and how many objects that is.
- **Total area**: the closed ones added up: circles, whole ellipses, closed polylines and hatches (a hatch's holes are
  taken off).

They are in the drawing's length format (feet and inches when it uses them; areas then in square inches and square feet).
The status bar shows the same length and area whenever objects are selected; {{ui:Settings}} › {{ui:CadCraft}} ›
{{ui:Length and area of the selection}} › {{ui:Hidden}} turns that off. For one object, {{ui:Geometry}} shows its own length
and area, as before.

## Coordinates

Every point shows **X**, **Y** and **Z**: start and end of a line, centers, insertion points, text positions, the current polyline vertex. Lines also show **Delta X**, **Delta Y** and **Delta Z** (read-only). Polylines and hatches have an **Elevation** (one Z for the whole object).

The crosshair button beside a point's name lets you pick it in the drawing instead: click it, then click the new position (snaps work). Values are world coordinates.

## General

| Field | What it is |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | As in the layers panel; {{ui:By layer}} follows the layer |
| {{ui:Transparency}} | By layer, by block, or 0 to 90% |
| {{ui:Thickness}} | How far lines, circles, arcs, polylines, points and text extend in Z |
| {{ui:Material}} | By layer, by block, Global or a name a drawing brought |
| {{ui:Plot style}} | Read-only: drawings plot by color, through the sheet's [plot style table](topic:plot-pdf#plot-style-tables) |
| {{ui:Hyperlink}} | A web address kept with the object |

## What each type shows

| Selected | You can change |
|---|---|
| Line | Start and end X, Y, Z; length; angle |
| Circle | Center; radius; diameter; circumference; area (each sets the radius) |
| Arc | Center; radius; start and end angle; total angle; chord (shows arc length and area) |
| Ellipse | Center; major and minor radius; radius ratio; major axis angle; start and end angle |
| Polyline | The vertex browser (below); global width; elevation; closed; area when closed (scales it about its center) |
| Text | Contents; style; justify; height; rotation; width factor; obliquing angle; defined width; line spacing; annotative; position |
| Block reference | Insertion point; rotation; scale X, Y, Z and uniform scale; attribute values |
| Hatch | Pattern; scale; angle; origin; associative; island detection; background color; elevation |
| Dimension | See below |
| Multileader | Text; height; width; text side; arrowhead size; landing distance; arrowhead point |
| Viewport | Scale; center and size on the sheet; view center in the model; on; display locked |

### Polyline vertices

{{ui:Current vertex}} shows which vertex the fields below it belong to. Use the arrow buttons, or type a number, to move to another vertex; there is no limit on how many. Each vertex has X, Y, start and end segment width, and the bulge of the segment that starts there (0 = straight).

## Dimensions

A dimension shows its **Dimension style**, what it measures, its points, and every setting:

- **Lines and arrows:** arrowhead for each end, arrow size, tick size, colors and lineweights of the dimension and extension lines, hiding either half or either extension line, extension line offset and extension.
- **Text:** override (leave empty for the measured value; `<>` stands for it inside your own text), style, color, height, offset, vertical and horizontal position, always horizontal, rotation, background fill.
- **Fit:** overall scale, baseline spacing, what moves when space is short, text movement.
- **Primary units:** format, decimals, round off, prefix, suffix, measurement scale, decimal separator, suppress leading and trailing zeros; for angles the angle format and decimals.
- **Alternate units:** on or off, format, decimals, multiplier (25.4 turns inches into millimeters), round off, prefix and suffix.
- **Tolerances:** none, symmetrical, deviation, limits or basic, with upper and lower values, decimals, height and position.

Changing any of them on an opened dimension drops the drawing the other program made of it, and CadCraft draws it again.

:::note
The horizontal text position (beside the first or second extension line) and text below the line are drawn on linear and aligned dimensions; on other dimensions they are kept and saved but not drawn yet. The Fit choices are kept and saved but not drawn yet: CadCraft places text by its own rule (above the line, outside when it does not fit).
:::

## Nothing selected

With nothing selected the panel shows:

- **New objects:** the layer, color, linetype, lineweight and text height new objects get; the drawing's units and length format; the current layer's linetype and lineweight; sizes for new dimensions. On a sheet, the sheet's name, paper and orientation come first.
- **View:** the center, height and width of what is on screen. Type a value to move the view there.
- **Misc:** the UCS icon on or off, the UCS (always World: CadCraft has no user coordinate systems yet) and the annotation scale.

## The buttons at the top

| Button | Does |
|---|---|
| Funnel | {{cmd:QSELECT}}: select by type and property |
| Pointer | {{cmd:SELECT}}: select objects at the command line |
| Plus or 1 | Whether a click adds to the selection (plus) or replaces it (1); the same setting as Settings, {{ui:CadCraft}} |
| Pin | Auto-hide, above |

## Common mistakes

- **Typing in a field did nothing.** Press {{key:Enter}} or click elsewhere to apply it. A red field and a note mean the entry was refused.
- **A length with a unit is refused.** The drawing has no units. Set {{ui:Units}} with nothing selected.
- **Only Layer and Color show.** Several kinds of objects are selected and **All** is chosen. Pick one kind in the list at the top.
- **Some objects did not change.** They are on a locked layer. Unlock the layer in the layers panel.
- **Typed letters went into a field.** While a field has the cursor, keys type there. Press {{key:Enter}} or {{key:Esc}}, then type the command.
