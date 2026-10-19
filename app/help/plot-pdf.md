---
title: Plot to PDF
summary: Make a PDF of a sheet at full size, or of the model at a scale or fitted to the paper, and print it from the browser.
section: tasks
order: 130
keywords: plot, print, pdf, publish, exportpdf, paper, scale, monochrome, grayscale, black and white, line weight, pen, page setup, plot window, plot style, plot style table, ctb, color dependent, screening, plotstyles, stylesmanager
---

## What you will make

A PDF of a sheet at full size, then a quick PDF of the model at 1:100, and a printout.

The PDF is made inside your browser; nothing is uploaded. It is a vector PDF: lines stay sharp at any zoom, and text can be searched.

## Plot a sheet

1. Click the sheet's tab under the drawing.
2. Press {{key:Mod+P}}, click {{ui:Plot}}, or type `PLOT` and press {{key:Enter}}.

The {{ui:Plot to PDF}} dialog opens. It says which sheet it plots and on what paper, "at full size … as you see it". The preview on the right shows the sheet.

3. In {{ui:Plot style}}, choose {{ui:Monochrome (black)}} for black lines, {{ui:Colour (as drawn)}} to keep the colors, {{ui:Grayscale}}, or a table of your own (see [Plot style tables](topic:plot-pdf#plot-style-tables)). The sheet keeps this choice: it is saved with the drawing.
4. In {{ui:Line weight}}, choose a pen width from 0.13 mm to 0.70 mm. Lines with the default lineweight print at this width; lines with their own lineweight (layer or object, or their color's pen in the table) print at that.
5. Click {{ui:Download PDF}}.

The browser downloads a PDF named after the drawing and the sheet, for example `Drawing1-A-101 Plan.pdf`. The history reports its size in bytes and its paper size in millimeters.

A sheet always plots at 1:1 on its own paper. To change the paper, change it on the sheet itself (see [Set up a sheet](topic:sheets-and-viewports)). Layers set not to plot are left out, and so are viewport frames.

## Every sheet in one PDF

With two or more sheets, the {{ui:Plot to PDF}} dialog has {{ui:All sheets in one PDF}}; or type {{cmd:PUBLISH}}. {{key:Enter}} takes every sheet; `S` (Some) asks for their names, separated by commas. One PDF downloads with a page per sheet, in tab order, each at its own paper size, and a bookmark per sheet with its name. Each sheet plots with its own plot style table; a sheet with none chosen uses the one you last chose in the dialog, and the pen width you last chose.

## Plot the model

1. Click the {{ui:Model}} tab.
2. Press {{key:Mod+P}}.

The dialog says it plots the model onto a sheet of paper, and shows more settings:

3. In {{ui:Area}}, choose what to plot:
   - {{ui:Everything (extents)}}: the whole drawing.
   - {{ui:What is on screen}}: the area you see in the drawing now.
   - {{ui:A window…}}: then click {{ui:Pick}}, click two corners on the drawing, and the dialog comes back.
4. In {{ui:Paper}}, choose a size: ISO A4 to A0, Letter, Legal, Tabloid and ANSI C and D, or ARCH C, D and E.
5. In {{ui:Orientation}}, choose {{ui:Landscape}} or {{ui:Portrait}}.
6. In {{ui:Scale}}, choose {{ui:Fit to paper}} or a scale such as `1:100`.

Under the settings, a line reports the scale and how big the area comes out on the paper. If it is bigger than the paper, it says so: the edges are cut off. Choose a smaller scale, a bigger paper, or {{ui:Fit to paper}}.

7. Click {{ui:Download PDF}}.

A model plot leaves a 5 mm margin round the edge, because most printers cannot print to the edge. {{ui:Fit to paper}} gives an odd scale (the history and the info line say "(fitted)"); choose a standard scale when the drawing must measure true.

:::note
Scales read in real units. For 1:100 to be right, set {{ui:Units}} in {{ui:Current settings}} to what one drawing unit is. A unitless drawing is taken to be in millimeters.
:::

## Plot style tables

A plot style table says what each of the 255 standard drawing colors prints as, the way a color-dependent plot style table (CTB) does in other CAD programs. Three are built in:

| Table | Prints |
|---|---|
| {{ui:Colour (as drawn)}} | Every object in its own color. |
| {{ui:Monochrome (black)}} | Every color black: the usual choice for drawings. |
| {{ui:Grayscale}} | Every color as its gray, so colors stay apart on a black-and-white printer. |

To make your own, for example red lines thick and black, everything else thin:

1. In the {{ui:Plot to PDF}} dialog, click {{ui:Edit tables…}} (or type {{cmd:PLOTSTYLES}}).
2. Click {{ui:New}}, and type a name such as `office` in {{ui:Name}}. To start from a built-in table instead, choose it in {{ui:Table}} and click {{ui:Copy}}.
3. Click a color in the grid. {{key:Shift}}+click selects a range of colors, {{key:Mod}}+click adds one more, and {{ui:Select every colour}} takes them all.
4. Set what the selected colors print as:
   - {{ui:Prints in}}: {{ui:Its own colour}}, {{ui:Black}} or {{ui:Another colour…}}.
   - {{ui:As a gray}}: the color as its gray.
   - {{ui:Ink (%)}}: 100 is full ink, 50 is half way to white (screening), for background lines.
   - {{ui:Lineweight}}: {{ui:Its own lineweight}} keeps the object's or layer's lineweight; a value prints every line of that color at that width.
5. Click {{ui:Done}}. The table is kept in the drawing, and the sheet (or the model) now plots with it. {{ui:Cancel}} drops the changes.

A colour with its own pen shows a dot in its corner, and a dot at the bottom when it sets a lineweight. An object with a true color (not one of the 255) uses the pen of the nearest standard color.

The drawing keeps its tables and each sheet's choice when you save as DWG (2000 to 2018) or DXF (R12 or 2000), and opens with them again. Other programs see the name in each sheet's page setup (`office.ctb`), not the table itself. A drawing from another program whose page setup names a table such as `monochrome.ctb` plots with the built-in table of that name; for any other name the dialog says the drawing does not have it, and plots the drawing colors until you choose a table or make one with that name.

To use a table in another drawing, click {{ui:Export}} in {{ui:Plot style tables}} (it saves `office.plotstyle.json`), then {{ui:Import…}} in the other drawing. Reading CTB files from other programs is not built yet.

## Print

1. In the dialog, click {{ui:Open to print}}.
2. The PDF opens in a new browser tab.
3. Print from that tab with the browser's print command ({{key:Mod+P}} there).

In the printer settings, choose "Actual size" or 100% (not "Fit") to keep the scale.

:::safari
Safari may show the PDF and wait for you to use **File**, then **Print**.
:::

If your browser blocks the new tab, CadCraft downloads the PDF instead and says so in the history. Allow pop-ups for the site to open it in a tab next time.

## Pictures

Pictures print at their own resolution, under the lines. {{ui:Pictures}} in the dialog caps them at 600, 300 or 150 dpi for a smaller file. Lines, text and hatches always stay sharp (vector), and transparency stays transparency. See [Pictures in a drawing](topic:pictures).

## Settings that are remembered

The dialog remembers your last paper, orientation, scale and line weight in this browser. The plot style table is kept with each sheet in the drawing; a sheet with none chosen starts on the one you chose last. A picked window is kept until you reload the page; after that the dialog starts at {{ui:Everything (extents)}}.

## Common mistakes

- **The PDF is blank or the buttons are grey.** There is nothing to plot (an empty model), or {{ui:A window…}} is chosen and no window is picked yet ("Pick the window to plot.").
- **Text shows "?" in the PDF.** The PDF uses the built-in Helvetica font, which only has Western European characters. The history counts how many characters were replaced.
- **All lines are the same thickness.** Their lineweight is the default: give layers or objects a {{ui:Lineweight}} in the right panel (see [Line weights and linetypes](topic:units-papers-scales#line-weights-and-linetypes)), or set lineweights per color in a [plot style table](topic:plot-pdf#plot-style-tables).
- **"(not in this drawing)" next to the plot style.** The drawing came from another program and names a table it does not include. Choose one of the tables, or make one with that name.
- **Construction lines printed.** Set their layer not to plot: click its printer button in the {{ui:Layers}} panel.
- **The printout is the wrong size.** The printer scaled it. Print at actual size.
- **{{key:Mod+P}} opened the browser's print dialog.** The cursor was in a box in the right panel, or another dialog was open. Press {{key:Enter}} or {{key:Esc}} to leave the box, then try again, or click {{ui:Plot}}.
- **{{key:Mod+P}} did nothing.** A command is running. Press {{key:Esc}} first.
