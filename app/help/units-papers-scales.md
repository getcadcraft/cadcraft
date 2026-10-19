---
title: Units, paper sizes and scales
summary: What drawing units mean in CadCraft, the paper sizes for sheets and plots, every standard scale, and how text and dimension sizes relate to the plot scale.
section: reference
order: 40
keywords: units, millimeters, inches, feet, feet and inches, architectural, engineering, fractional, fractions, lunits, length format, precision, meters, paper size, a3, a1, arch d, ansi, tabloid, letter, scale, 1:100, 1/4 inch, architectural scale, engineering scale, insunits
---

## Drawing units

You draw at full size, in drawing units. What one unit stands for is the drawing's **Units** setting:

1. Press {{key:Esc}} so nothing is selected, on the {{ui:Model}} tab.
2. In {{ui:Current settings}}, choose {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimetres}}, {{ui:Centimetres}}, {{ui:Metres}}, {{ui:Inches}} or {{ui:Feet}}.

Dimensions can write their lengths in millimetres, centimetres, metres or kilometres whatever the drawing unit: see [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Changing the units resizes nothing. It changes how scales are read on sheets and in plots, and which scales are offered. A drawing opened from a DWG or DXF keeps the units stored in the file; the {{ui:Drawing}} section of the left panel shows them.

A {{ui:Unitless}} drawing is treated as being in the paper's unit: millimeters on ISO paper, inches on US paper.

## Feet and inches, and fractions

How lengths are **written and typed** is a separate setting, the length format. It changes no geometry, only how numbers look and what you can type.

1. Press {{key:Esc}} so nothing is selected, on the {{ui:Model}} tab.
2. In {{ui:Current settings}}, choose {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) or {{ui:Scientific}} (`1.505E+02`).
3. Choose {{ui:Precision}}: decimal places, or the smallest fraction (1/16 is the usual choice for architectural).

Or type {{cmd:UNITS}} (`UN`) and answer its two questions.

With {{ui:Architectural}} or {{ui:Engineering}}, one drawing unit is one inch, as in AutoCAD: set {{ui:Units}} to {{ui:Inches}} too. You can then type lengths in feet and inches anywhere a length is asked for, and in the {{ui:Properties}} boxes:

| You type | Means |
|---|---|
| `12'6"` or `12'-6"` | 12 feet 6 inches (150) |
| `12'6-1/2"` | 12 feet 6½ inches. Use a hyphen before the fraction: {{key:Space}} is {{key:Enter}} at the command line. |
| `12'` | 12 feet |
| `6"` or `6` | 6 inches: a plain number is inches |
| `1/2`, `6-1/2` | fractions work in any format |

Points take the same lengths: `@12'6",0` or `@10'<90`. Angles stay in degrees.

The format shows in the history ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: areas as square inches and square feet), in {{ui:Properties}}, in the coordinates on the status bar, and in **new dimensions**. Sheets keep their paper units (millimeters or inches) as decimals.

:::note
The length format is saved in DWG and DXF files, and each dimension keeps its own: a saved drawing opens again as you left it.
:::

## Paper sizes

Sheets and model plots use these sizes, in either orientation:

| Paper | Size | Unit on the sheet |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeters |
| ISO A3 | 420 × 297 mm | millimeters |
| ISO A2 | 594 × 420 mm | millimeters |
| ISO A1 | 841 × 594 mm | millimeters |
| ISO A0 | 1189 × 841 mm | millimeters |
| Letter | 11 × 8.5 in | inches |
| Legal | 14 × 8.5 in | inches |
| Tabloid / ANSI B | 17 × 11 in | inches |
| ANSI C | 22 × 17 in | inches |
| ANSI D | 34 × 22 in | inches |
| ARCH C | 24 × 18 in | inches |
| ARCH D | 36 × 24 in | inches |
| ARCH E | 48 × 36 in | inches |

New sheets start on ISO A3 for metric and unitless drawings, and on Tabloid for drawings in inches or feet. Model plots start on ISO A4 or Letter the same way, then remember your last choice. Sheets from opened files keep their own size, shown as "Custom" when it is not one of these.

## Scales

A scale `1:n` means one unit on paper shows n of the same unit in the model, so 1:100 shows 1 m of building as 10 mm of paper. CadCraft works this out from the drawing units and the paper's unit.

**Metric scales**, offered for every drawing: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architectural scales**, offered when the units are inches or feet: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Engineering scales**, offered when the units are inches or feet: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

When a viewport is aimed with {{ui:Show the whole model}} or {{ui:Pick a window on the model…}}, CadCraft picks the largest standard scale that fits. {{ui:Fit the whole model}} sets an exact scale instead, which reads as a plain ratio.

## Sizes on paper and in the model

Text and dimension sizes are in the units of the space you draw in.

| You want on paper | Drawn on a sheet | Drawn in the model at 1:50 (mm drawing) | Drawn in the model at 1/4" = 1'-0" (inch drawing) |
|---|---|---|---|
| 2.5 mm text | 2.5 | 125 | — |
| 3/32" text | 0.09375 | — | 4.5 |

For dimensions, keep the sizes as paper sizes and set the overall scale ({{cmd:DIMSCALE}}) to the plot scale: 50 for 1:50, 48 for 1/4" = 1'-0". See [Set dimension sizes](topic:dimension-settings).

## Line weights and linetypes

A layer, or an object, can have a **lineweight** (0.05 to 2.11 mm) and a **linetype** (dashed, hidden, center, phantom, dot…). Set them in the right panel: with nothing selected, {{ui:Linetype}} and {{ui:Lineweight}} under {{ui:Current settings}} are what new objects get ({{ui:By layer}} to follow their layer), and the two under {{ui:Layer …}} are the current layer's own. With objects selected, the same two rows and {{ui:Linetype scale}} change those objects. The commands are {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) and {{cmd:LTSCALE}} (`LTS`).

Linetypes show on screen and in plots. Their dashes are in drawing units: a metric drawing uses the ISO sizes (DASHED: 12.7 mm dashes), an inch drawing the inch ones (0.5"). If the dashes look too small or too large, change the drawing's {{ui:Linetype scale}} (LTSCALE): every dash and gap is multiplied by it; an object's own scale multiplies it again. A pattern too fine to see at all is drawn as a solid line.

Lineweights print in plots, in mm on the paper whatever the scale. Lines with the {{ui:Default}} lineweight use the pen width chosen in the {{ui:Plot to PDF}} dialog (0.13 to 0.70 mm; 0.25 mm to start with); a lineweight of 0 prints as the thinnest line. On screen every line is one pixel wide until you press {{ui:LWT}} in the status bar (or type {{cmd:LWDISPLAY}}): then a lineweight above 0.25 mm draws wider (0.5 mm = 2 pixels) in the model, and at its true width on the paper on a sheet. The choice is kept in this browser.
