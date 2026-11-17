---
title: Check what units a drawing is in
summary: See whether an opened drawing is in millimeters, inches or something else, check it by measuring, and know why another program can name different units for the same DXF.
section: tasks
order: 89
keywords: units, what units, which units, check units, millimeters, mm, inches, metric, imperial, DXF units, STEP to DXF, wrong units, inches or mm, INSUNITS, MEASUREMENT, drawing units, PartCraft DXF
---

## What you'll do

Find out what one unit in an opened drawing stands for, and make sure the numbers you read are the size you expect.

## Steps

1. Open the drawing, then press {{key:Esc}} so nothing is selected, on the {{ui:Model}} tab.
2. In the right panel, under {{ui:Current settings}}, read {{ui:Units}}. It says what one drawing unit stands for: {{ui:Millimeters}}, {{ui:Inches}}, {{ui:Feet}} and so on. A DXF saved from PartCraft says {{ui:Millimeters}}.
3. Check it by measuring something whose size you know. Type {{cmd:DIST}} and pick the two ends of an edge or a hole. If a part you know is 25 mm reads `25`, the drawing is in millimeters; if it reads about `0.98`, it is in inches.

{{ui:Unitless}} means the file does not say. CadCraft then treats it as the paper's unit (millimeters on ISO paper, inches on US paper), and the numbers are only as right as the program that wrote them.

## If the units are wrong

Changing {{ui:Units}} **resizes nothing**: the numbers stay the same and only what they mean changes. So set it only to say what the drawing really is. If the numbers are millimeters and {{ui:Units}} says {{ui:Inches}}, choose {{ui:Millimeters}}. If you need the geometry itself in other units, scale it with {{cmd:SCALE}} (25.4 from inches to millimeters, 1/25.4 the other way) and then set {{ui:Units}}.

How lengths are written (decimal, feet and inches, fractions) is a separate setting, {{ui:Length format}}: see [Units, paper sizes and scales](topic:units-papers-scales).

## Why another program can say inches

A DXF states its units in its header. The oldest kind of DXF, R12, had no units variable at all, so a program that reads R12 strictly ignores the one written there and falls back to its own default, which is often inches. The geometry in the file is the same either way: only the label differs. PartCraft writes its DXF files as R12 and states millimeters two ways (`$INSUNITS` 4 and `$MEASUREMENT` 1) so more programs read them right. If a program still says inches, set its units to millimeters when you open the file.

Bringing a file into a drawing (rather than opening it) converts its units: see [Units on import](topic:units-on-import).
