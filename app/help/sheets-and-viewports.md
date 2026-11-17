---
title: Set up a sheet with a title block and viewports
summary: Make a sheet (layout) with a border and title block, set the viewport scale, add a second viewport for a detail, and fill in the title block.
section: tasks
order: 120
keywords: layout, sheet, paper space, viewport, mview, vpview, title block, scale, paper size, border, vports, plot scale, mspace, pspace, model space, enter viewport, double-click viewport
---

## What you will make

An A3 sheet with a title block, the whole plan in one viewport at 1:100, and a second viewport showing one corner at 1:20.

## Model and sheets

You draw the building on the {{ui:Model}} tab, at full size: a 6 m wall is 6000 units long in millimeters. A **sheet** (a layout) is a piece of paper, measured in millimeters or inches. A **viewport** is a window cut in the sheet that shows the model at a scale.

## Before you start

1. Open or draw a plan on the {{ui:Model}} tab.
2. Press {{key:Esc}} so nothing is selected.
3. In {{ui:Current settings}}, set {{ui:Units}} to the unit you drew in, for example {{ui:Millimeters}}.

Units matter: a viewport scale such as 1:100 means one millimeter on the paper shows 100 real millimeters, so CadCraft needs to know what one drawing unit is. A drawing left as {{ui:Unitless}} is taken to be in the paper's unit (millimeters on ISO paper, inches on US paper).

## Make the sheet

1. Click the {{ui:+}} button to the right of the tabs under the drawing, or type `LAYOUT` and press {{key:Enter}}, or click {{ui:New sheet}}.

A new tab, `Layout1`, opens. You should see a sheet on a darker desk: a border, a title block in the lower-right corner and one viewport above it showing the whole model at the largest standard scale that fits. The history names the paper: ISO A3 for metric and unitless drawings, Tabloid (ANSI B) for drawings in inches or feet.

2. Click {{ui:Extents}} to fit the sheet on screen.

## Choose the paper

1. Press {{key:Esc}} so nothing is selected. The right panel heading reads "Sheet: Layout1".
2. In {{ui:Name}}, type `A-101 Plan` and press {{key:Enter}}. The tab is renamed.
3. In {{ui:Paper}}, choose a size.
4. In {{ui:Orientation}}, choose {{ui:Landscape}} or {{ui:Portrait}}.

:::warning
Changing the paper does not move or resize what is already on the sheet. After changing it, check that the border, the title block and the viewport still fit, and move or resize them with grips. Switching between millimeter and inch paper keeps the numbers, so everything changes size: the status bar warns you.
:::

## Set the viewport scale

1. Click the viewport's frame (its edge). The panel heading reads "Viewport".
2. In {{ui:Scale}}, choose `1:100`.

The model inside the viewport redraws at 1:100, centered where it was. The list offers metric scales from 10:1 to 1:10000; drawings in inches or feet also get architectural scales (1/4" = 1'-0" and the like) and engineering scales (1" = 20' and the like). {{ui:Fit the whole model}} sets an exact, non-standard scale that fits everything.

3. If the plan is no longer centered, change {{ui:X}} and {{ui:Y}} under {{ui:View center (model)}} in the right panel: they are the model point shown in the middle of the viewport.

## Show part of the model in a viewport

1. With the viewport selected, click {{ui:Pick a window on the model…}} in the right panel (or type `VPVIEW` and press {{key:Enter}}).
2. CadCraft switches to the {{ui:Model}} tab. Click one corner of the area to show.
3. Click the opposite corner.

You are back on the sheet, and the viewport shows that area at the largest standard scale that fits; the history says which. {{ui:Show the whole model}} goes back to the whole plan at a standard scale.

## Add a second viewport for a detail

1. Make room on the sheet: select the first viewport and drag a corner grip to make it smaller.
2. Type `MV` and press {{key:Enter}}, or click {{ui:Viewport}} in the Sheets group.
3. Click one corner of the new viewport on the sheet.
4. Click the opposite corner.

The new viewport shows the whole model. The history says its scale.

5. Click the new viewport's frame.
6. Click {{ui:Pick a window on the model…}} and pick a small area round one corner of the plan.
7. In {{ui:Scale}}, choose `1:20`.

Viewport frames are on the layer `Viewports`, which is set not to plot, so the frames show on screen but not in the PDF.

## Fill in the title block

The title block is made of ordinary lines and text on the layer `Title block`. It starts with the drawing name, the scale of the first viewport, today's date and the sheet number.

1. Double-click the large title text. An editing box opens over it.
2. Type the title of the sheet.
3. Click {{ui:OK}}, or press {{key:Mod+Enter}}.

Do the same for the other fields. Use {{cmd:TEXT}} to write in the empty "DRAWN BY" cell. The SCALE text does not update itself when you change a viewport's scale: edit it by hand.

## Draw on the sheet

Anything you draw on a sheet tab is on the paper, in paper units: text 3.5 high is 3.5 mm tall on an ISO sheet. Notes, north arrows and sheet borders belong here.

To change the plan itself, go to the {{ui:Model}} tab, or work through a viewport (next section); every viewport shows the change.

## Work on the model through a viewport

1. Double-click inside a viewport, away from its frame. Or type `MS` and press {{key:Enter}}: with one viewport on the sheet it goes straight in; with several, click inside the one you want.

The frame is drawn heavier, the history says you are inside, and the sheet's tab stays selected. Everything you draw or change now is on the model, in model units, as on the {{ui:Model}} tab: a line drawn inside a viewport at 1:100 is in real millimeters. Layers frozen in this viewport cannot be picked here.

2. Turn the wheel or drag with the middle button to zoom and pan what the viewport shows. The sheet stays where it is.
3. Double-click anywhere outside the frame, or type `PS` and press {{key:Enter}}.

You are back on the sheet. The viewport keeps the view you left it with; {{key:Mod+Z}} puts the old view back in one step. Clicking any tab under the drawing also leaves the viewport.

:::note
A viewport whose display is locked ({{ui:Display locked}} in Properties) keeps its view: inside it, pan and zoom move the whole sheet instead. A viewport that is turned off cannot be entered.
:::

## Label a view with its name

A view title under a viewport can show the viewport's view name and keep up with it:

1. Give the view a name: select the viewport's frame and fill in {{ui:View name}} in Properties — or save the view on the {{ui:Model}} tab with {{cmd:NAMEDVIEW}} and, with the viewport selected, type `VPVIEW`, `V` and the view's name: the viewport shows that view and takes its name.
2. Type `VIEWLABEL` (`VL`) and press {{key:Enter}}, then click where the label goes ({{key:Enter}} puts it under the viewport's lower-left corner).

When the view name changes, the label changes with it, in the same undo step.

## Freeze a layer in one viewport

To hide a layer in one viewport but not the others (furniture in a detail, say):

1. Select the viewport's frame, or work inside it (double-click).

The {{ui:Layers}} panel gets one more button on each row, and a line above the list says so.

2. Click that button on the layer's row.

The layer disappears from that viewport only. Click again to thaw it; {{key:Mod+Z}} undoes either. For several layers or viewports at once, type `VPLAYER`: `F` (Freeze) or `T` (Thaw), the layer names (`A-*` takes every layer starting with A-), then `C` (Current), `A` (All) or `S` (Select). `VPLAYER` `V` (Vpvisdflt) picks layers that new viewports start frozen in.

## More sheets

Each {{ui:+}} adds another sheet (`Layout2`, `Layout3` …) with the next sheet number. To delete the open sheet, press {{key:Esc}} and click {{ui:Delete this sheet}} in the right panel. It goes without asking; {{key:Mod+Z}} brings it back.

Plot a sheet with {{ui:Plot this sheet}} or {{key:Mod+P}}; see [Plot to PDF](topic:plot-pdf).

## Common mistakes

- **The viewport shows nothing.** The model is empty, or the view is aimed somewhere else. Select the frame and click {{ui:Show the whole model}}.
- **The scale list shows only ratios and no feet-and-inch scales.** Set {{ui:Units}} to {{ui:Inches}} or {{ui:Feet}} on the {{ui:Model}} tab.
- **1:100 looks ten times too big or small.** The drawing units are wrong. Set {{ui:Units}} to what one unit really is.
- **Clicking the plan inside the viewport selects nothing.** On a sheet you select the sheet's own objects. Double-click inside the viewport first to work on the plan through it.
- **Clicks outside the viewport do nothing.** You are inside a viewport: double-click outside it, or type `PS`, to work on the sheet again.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** {{cmd:MVIEW}} only works on a sheet tab.
