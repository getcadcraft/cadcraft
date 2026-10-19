---
title: Dimension a plan
summary: Add linear, aligned, angular, radius and diameter dimensions, chain them with Continue and Baseline, and override the text.
section: tasks
order: 90
keywords: dimension, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, chain, string, annotate, dimension tool, where, find, toolbar, measure, mm, cm, m, km, units
---

## What you will make

A dimensioned room: overall width and height, a string of dimensions along one wall, an angled wall, a curved corner and an angle.

Before you start, read [Set dimension sizes](topic:dimension-settings) if your drawing is large: dimension text is 2.5 drawing units tall by default, which is tiny in a drawing measured in millimeters. For the steps below, type `DIMSCALE`, press {{key:Enter}}, type `50` and press {{key:Enter}} first.

## Where the dimension tools are

With the CadCraft menu style (the one CadCraft starts with), the dimension tools are in the toolbar above the drawing, in the {{ui:Annotate}} group: {{ui:Linear}}, {{ui:Aligned}}, {{ui:Angle}}, {{ui:Radius}} and {{ui:Diameter}}. The group's {{ui:More}} menu has {{ui:Continue dimension}} and {{ui:Baseline dimension}}. Hold the pointer over a button to see what it does.

- With the {{ui:Drafting classic}} or {{ui:Ribbon}} menu style, open the {{ui:Annotate}} tab: the tools are in its {{ui:Dimensions}} panel. {{ui:Drafting classic}} also has {{ui:Linear}} on the {{ui:Home}} tab, under {{ui:Annotation}}. See [Menus, keys and mouse](topic:menus-keys-and-mouse).
- Or type the command at the command line under the drawing and press {{key:Enter}}: `DLI` (linear), `DAL` (aligned), `DAN` (angular), `DRA` (radius), `DDI` (diameter), `DCO` (continue), `DBA` (baseline).
- On a narrow screen the toolbar is one row: swipe it sideways to reach {{ui:Annotate}}.

To show the lengths in millimetres, centimetres, metres or kilometres, see [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Draw something to dimension

1. Type `PL` and press {{key:Enter}}.
2. Type `0,0` and press {{key:Enter}}.
3. Type `@6000,0` and press {{key:Enter}}.
4. Type `@1500<60` and press {{key:Enter}}.
5. Type `@0,2700` and press {{key:Enter}}.
6. Type `@-6750,0` and press {{key:Enter}}.
7. Type `C` and press {{key:Enter}}. The outline closes.
8. Type `C` and press {{key:Enter}} to start a circle.
9. Click inside the room, away from the walls, for the center.
10. Type `600` and press {{key:Enter}}. This is a column.
11. Click {{ui:Extents}}.

## Linear: horizontal or vertical

1. Type `DLI` and press {{key:Enter}}.
2. At `Specify first extension line origin`, snap to the lower-left corner (Endpoint) and click.
3. At `Specify second extension line origin`, snap to the lower-right corner and click.
4. Move the crosshair below the room. The dimension follows, horizontal.
5. Click to place the dimension line.

The history says `Dimension text = 6000`.

Where you place the line decides the direction: below or above gives a horizontal dimension, left or right gives a vertical one. To force it, type `H` (horizontal), `V` (vertical) or `R` (rotated, then an angle) before you place it.

:::tip
Press {{key:Enter}} at the first prompt instead of picking a point, then click a line, arc, circle or polyline segment. CadCraft takes both ends for you.
:::

## Continue: a string of dimensions

{{cmd:DIMCONTINUE}} ({{ui:Annotate}} › {{ui:More}} › {{ui:Continue dimension}}, or `DCO`) carries on from the last linear or aligned dimension you made, each new one starting where the last one ended.

1. Type `DLI` and press {{key:Enter}}.
2. Type `0,0` and press {{key:Enter}} for the first origin.
3. Type `2000,0` and press {{key:Enter}} for the second origin.
4. Click below the room to place it.
5. Type `DCO` and press {{key:Enter}}.
6. Type `4500,0` and press {{key:Enter}}. A second dimension follows on from the first, on the same line.
7. Snap to the lower-right corner and click. A third one completes the string.
8. Press {{key:Enter}} to end the command.

:::note
Here the points are typed as absolute coordinates on purpose. An `@` point counts from the last point you gave, and the last point is where you placed the previous dimension line, not the end of the dimension. Absolute points, snaps or a bare distance with {{ui:Ortho}} on are safer in a dimension string.
:::

Type `U` and press {{key:Enter}} to take back the last dimension in the string without leaving the command.

## Baseline: dimensions stacked from one line

{{cmd:DIMBASELINE}} ({{ui:Annotate}} › {{ui:More}} › {{ui:Baseline dimension}}, or `DBA`) measures every new dimension from the first origin of the last one, and stacks each one a step further out.

1. Type `DLI` and press {{key:Enter}}.
2. Snap to the lower-left corner and click.
3. Snap to the upper-left corner and click.
4. Move the crosshair to the left of the room and click. A vertical dimension appears.
5. Type `DBA` and press {{key:Enter}}.
6. Snap to the upper end of the 60-degree wall (Endpoint) and click. A second vertical dimension appears, one step further out than the first.
7. Press {{key:Enter}} to end.

## Aligned: true length of a sloping line

1. Type `DAL` and press {{key:Enter}}.
2. Press {{key:Enter}} to select an object.
3. Click the 60-degree wall.
4. Move outward and click to place.

The text reads 1500: the true length, measured along the wall.

## Radius and diameter

1. Type `DRA` and press {{key:Enter}}.
2. Click the column circle.
3. Move the crosshair. The leader points from the center toward the crosshair.
4. Click to place the text.

The text reads `R600`. {{cmd:DIMDIAMETER}} (`DDI`) does the same with a ⌀ sign and the diameter.

## Angular

The walls here are one polyline, so measure the corner by its vertex. (Between two separate lines, you can click the lines instead.)

1. Type `DAN` and press {{key:Enter}}.
2. At `Select arc, circle or line, or Enter for a vertex`, press {{key:Enter}}.
3. At `Specify angle vertex`, snap to the lower-right corner and click.
4. At `Specify first angle endpoint`, snap to the lower-left corner and click.
5. At `Specify second angle endpoint`, snap to the upper end of the 60-degree wall and click.
6. Move the crosshair inside the room, near the corner, and click.

The text reads `120°`, the inside angle of the corner. Placed on the other side of the corner, the dimension measures the angle on that side instead. Click an arc at the first prompt to dimension the angle it spans, or click two lines to dimension the angle between them.

## Change the text

To write your own text, type `T` and press {{key:Enter}} before you place the dimension, then type the text. In your text, `<>` stands for the measured value: `<> TYP.` gives `6000 TYP.`. Press {{key:Enter}} on an empty line to keep the measured value.

To change an existing dimension:

1. Click it.
2. In the right panel, type in {{ui:Text}}. Leave it empty for the measured value.
3. Press {{key:Enter}}.

## Dimensions follow the geometry

A dimension remembers its points. Drag one of its grips, or move, rotate or scale it with the objects it measures, and it measures again. If you stretch the geometry without moving the dimension, the dimension does not follow: it keeps its own points.

## Common mistakes

- **The text and arrows are microscopic or huge.** Set the overall scale: see [Set dimension sizes](topic:dimension-settings).
- **"Pick a point inside the angle you want to measure."** The point you clicked for an angular dimension sits on one of the legs. Move it into the angle.
- **Continue started from the wrong dimension.** It always continues from the last linear or aligned dimension made in this session. Make (or remake) the one to continue from first.
- **The dimension came out vertical.** You placed it to the side. Type `H` before placing it.
- **Feet and inches.** Set the drawing's length format to {{ui:Architectural}} first, or a dimension's {{ui:Format}} in {{ui:Properties}}: see [Feet and inches in dimensions](topic:dimension-settings#feet-and-inches-in-dimensions).
- **The numbers are not in the unit you want.** Choose {{ui:Units in the text}}: see [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
