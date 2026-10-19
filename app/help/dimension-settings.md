---
title: Set dimension sizes, decimals and scale
summary: Choose text height, arrow size, decimals and overall scale for new dimensions, change existing ones, and understand how dimension styles work in CadCraft.
section: tasks
order: 100
keywords: dimension style, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, overall scale, decimals, arrow size, annotation scale, dimtextunit, units in the text, mm, cm, m, km, millimetres, metres, dimlfac, dimpost
---

## What you will learn

How big dimension text and arrows are, how to set them for a drawing plotted at 1:50 or 1:100, and how to change dimensions you already made.

## How dimension sizes work

Every dimension carries its own set of sizes: text height, arrow size, decimals, the gap round the text, how far extension lines run past the dimension line and how far they start from the object. The defaults are close to the common ISO style:

| Setting | Default | Command |
|---|---|---|
| Text height | 2.5 | {{cmd:DIMTXT}} |
| Arrow size | 2.5 | {{cmd:DIMASZ}} |
| Decimals | 2 (trailing zeros dropped) | {{cmd:DIMDEC}} |
| Gap round the text | 0.625 | {{cmd:DIMGAP}} |
| Extension past the dimension line | 1.25 | {{cmd:DIMEXE}} |
| Offset from the object | 0.625 | {{cmd:DIMEXO}} |
| Overall scale | 1 | {{cmd:DIMSCALE}} |

Every size is multiplied by the **overall scale**. Set the sizes as you want them on paper (2.5 mm text), and set the overall scale to the plot scale (50 for 1:50). The text is then 2.5 × 50 = 125 drawing units tall, which plots at 2.5 mm.

:::note
CadCraft can't make a new named dimension style yet. It has one set of settings for new dimensions, and each dimension keeps the settings it was made with. A drawing you open keeps its named styles: select a dimension and choose one under {{ui:Dimension style}} in {{ui:Properties}} to give it that style's settings.
:::

## Set the sizes for new dimensions

Either way below changes only dimensions you make afterwards.

### In the Current settings panel

1. Press {{key:Esc}} so nothing is selected. On the {{ui:Model}} tab the right panel reads {{ui:Current settings}}.
2. Under {{ui:New dimensions}}, click in {{ui:Overall scale}}, type `50` and press {{key:Enter}}.
3. Set {{ui:Text height}}, {{ui:Arrow size}} and {{ui:Decimals}} the same way if you want other values.

The status bar confirms each one, for example "Overall scale for new dimensions: 50".

### At the command line

1. Type `DIMSCALE` and press {{key:Enter}}.
2. At `Enter new value for DIMSCALE <1>`, type `50` and press {{key:Enter}}.

The history confirms "DIMSCALE = 50. New dimensions use it; select existing ones to change theirs." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} and {{cmd:DIMEXO}} work the same way. Press {{key:Enter}} at the prompt to keep the current value.

### Feet and inches in dimensions

New dimensions use the drawing's length format: set it with {{ui:Length format}} in {{ui:Current settings}} or {{cmd:UNITS}} (see [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions)), and the next dimension reads `12'-6 1/2"`. {{cmd:DIMLUNIT}} sets only the dimensions' format (2 decimal, 3 engineering, 4 architectural, 5 fractional). For a dimension you already made, select it and choose {{ui:Format}} in {{ui:Properties}}; with a fractional format, its {{ui:Fraction}} box takes the power of two (4 = 1/16).

## Dimensions in mm, cm, m or km

A dimension measures in drawing units. It can write that length in millimetres, centimetres, metres or kilometres instead, with the unit after the number: a 1250 mm wall reads `1250 mm`, `125 cm`, `1.25 m` or `0.00125 km`.

1. Set the drawing's {{ui:Units}} in {{ui:Current settings}} first (see [Units, paper sizes and scales](topic:units-papers-scales#drawing-units)), so CadCraft knows what one drawing unit is. A unitless drawing is read as millimetres, and {{cmd:DIMTEXTUNIT}} says so.
2. For new dimensions: press {{key:Esc}} so nothing is selected, and under {{ui:New dimensions}} choose {{ui:Units in the text}}: {{ui:Drawing units}}, `mm`, `cm`, `m` or `km`.
3. For dimensions you already made: select them, and in {{ui:Properties}} › {{ui:Primary units}} choose {{ui:Units in the text}}.

Or type {{cmd:DIMTEXTUNIT}} (`DTU`) and answer `D`, `MM`, `CM`, `M` or `KM`: with dimensions selected it changes them (one undo step), with nothing selected it sets new dimensions.

{{ui:Decimals}} ({{cmd:DIMDEC}}) still sets how many decimal places show: with metres and 3 decimals, 1234 mm reads `1.234 m`. The text is written as a decimal number. On a sheet, dimensions measure in the sheet's paper unit (millimetres or inches).

A saved DWG or DXF keeps the choice as the dimension's measurement scale (DIMLFAC) and a suffix (DIMPOST, ` m`), so other programs show the same text. If you change the drawing's {{ui:Units}} later, dimensions written in mm, cm, m or km are refitted, so they keep saying the right length. {{ui:Set by hand (scale or suffix)}} means the dimension's {{ui:Measurement scale}} or suffix was set some other way; choose a unit to replace them.

## Change dimensions you already made

1. Click one dimension.
2. The right panel shows {{ui:Kind}}, {{ui:Measured}}, {{ui:Text}}, {{ui:Text height}}, {{ui:Arrow size}}, {{ui:Decimals}} and {{ui:Overall scale}}.
3. Type a new value and press {{key:Enter}}.

The dimension redraws at once. For angular dimensions, {{ui:Decimals (°)}} sets the decimals of the angle.

:::note
With several dimensions selected, the panel shows the rows they share, and a value that differs between them reads {{ui:Varies}}. A value you type changes every selected dimension in one step, so one {{key:Mod+Z}} puts them all back.
:::

## Dimensions from opened drawings

A dimension from an opened DWG or DXF is shown exactly as the other program drew it. Its panel says "Shown as the program that made it drew it. Change it and CadCraft draws it again in its own style." As soon as you change any value, move a grip, or move the dimension, CadCraft redraws it with its own arrowheads and font, using the sizes it read from the file.

Some dimensions can only be read as drawn, not as editable dimensions; the panel then shows "Drawn from" and a block name, and the "About this file" box counts them.

## Common mistakes

- **Changing DIMSCALE did not change anything on screen.** The setting is for new dimensions. Select existing ones and change {{ui:Overall scale}} in the panel.
- **Decimals show fewer digits than set.** Trailing zeros are dropped: 2 decimals show `1250` and `1250.5`, not `1250.00`.
- **Text is the right height on paper in a viewport but wrong in a model plot.** The overall scale must match the scale you plot at. Plotting at Fit to paper gives an odd scale; choose a standard scale in the plot dialog.
- **Units such as mm or m in the text.** Choose {{ui:Units in the text}} (see [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). For any other word after the number, type it in an override: `<> TYP.`.
