---
title: Open a DWG, edit it and save a copy
summary: Open a drawing someone sent you, check what came in, make a change, and send back a copy as DWG or DXF.
section: tasks
order: 140
keywords: dwg, dxf, binary dxf, open, import, export, save, r12, round trip, consultant, xref, check drawing, saveas, save as, dwg save, format
---

## What you will do

Open a DWG from a consultant, check what CadCraft could and could not show, add a note, plot a sheet to PDF and save a copy to send back, as DWG or DXF.

## Open the file

1. Press {{key:Mod+O}}, or click {{ui:Open}}.
2. Choose the `.dwg` file.

The status line shows "Reading …" while the drawing is read. When it is done, the drawing fills the screen, and the history says, for example, "Opened plan.dwg: 18,240 objects on 64 layers", with how long it took.

:::offline
You are offline. If the {{ui:Save for offline}} button reads "Offline ready", DWG files open normally. If not, and no DWG has been opened in this tab yet, opening a DWG can fail because CadCraft's DWG reader is fetched with the first DWG: open a DXF instead, or save CadCraft for offline use next time you are online. See [Working offline](common:offline).
:::

## Check what came in

1. Look at the {{ui:Drawing}} section of the left panel: format and version, units, number of objects and layers, and sheets.
2. Read the "About this file" box under it, if there is one.

The box lists:

- **Not shown yet:** objects CadCraft cannot draw yet, by kind and count. They are left out, not guessed at.
- **Layouts (sheets) came in:** open them with the tabs under the drawing.
- **Dimensions that could only be read as drawn.**

3. Click through the tabs under the drawing to see each sheet.
4. Check {{ui:Units}} in {{ui:Current settings}} (nothing selected, {{ui:Model}} tab). If it says {{ui:Unitless}} but you know the drawing is in millimeters, set it, so that sheet and plot scales read right.

:::tip
If you expected a part of the drawing and cannot see it, check the {{ui:Layers}} panel: the layer may be off or frozen in the file. Click its name to make it current; that turns it on.
:::

## Make your change

1. Make a layer for your notes: click {{ui:New layer}}, type `NOTES` and press {{key:Enter}}.
2. Type `DT` and press {{key:Enter}}.
3. Click where the note goes.
4. Type a text height that suits the drawing (see [Add text and labels](topic:text)) and press {{key:Enter}}.
5. Press {{key:Enter}} to keep the rotation at 0.
6. Type your note and press {{key:Enter}}.
7. Press {{key:Enter}} again to finish.

Edits to imported dimensions are fine: as soon as you change one, CadCraft redraws it in its own style.

## Plot a sheet for review

1. Click the sheet's tab.
2. Press {{key:Mod+P}}.
3. Click {{ui:Download PDF}}.

See [Plot to PDF](topic:plot-pdf).

## Save a copy

1. Press {{key:Mod+S}}, or click {{ui:Save}}.

You opened a DWG, so the browser downloads `<name>.dwg`, in the version the DWG came in. The history says, for example, "Saved a copy as Plan.dwg (DWG (AutoCAD 2018))." and lists, on the lines under it, anything that changed on the way.

2. Read those lines before you send the file. [What a DWG keeps and changes](topic:files#what-a-dwg-keeps-and-changes) explains each one.

Your original DWG is never changed. Every save is a new download.

## Save as DWG or DXF

To choose the format yourself:

1. Press {{key:Mod+Shift+S}}, or click {{ui:Save as}}.

The {{ui:Save a copy as}} dialog opens with four choices, each with the file name it will give: {{ui:DWG}}, with its {{ui:Version}} list, {{ui:DXF R12}}, {{ui:DXF 2000}} and {{ui:DXF 2000 (binary)}}. The drawing's current format and version are already picked.

2. Click the format you want. For DWG, pick the version the other office uses, or an older one: AutoCAD 2018, 2013, 2010, 2007, 2004 or 2000.
3. Click {{ui:Save}}.

The copy downloads. From now on, {{key:Mod+S}} saves this drawing in that format, and new drawings start with it too, in this browser. {{ui:Cancel}} or {{key:Esc}} saves nothing, and the history says "Not saved."

Which one to pick:

- **DWG** keeps the most: sheets with their viewports, real dimensions, hatch patterns, layer and block names as you typed them, and multi-line text as multi-line text. The AutoCAD 2000 version opens in the most programs; 2004 and later also keep true colors.
- **DXF 2000** is a text file that keeps almost what a DWG keeps: every sheet as a layout with its viewports, real dimensions, hatch patterns, true colours, lineweights, linetypes, and names as you typed them. It opens in AutoCAD 2000 and later and most CAD programs. Multileaders become the lines, arrowheads and text they draw. A DXF opened in version 2000 or later saves as DXF 2000.
- **DXF 2000 (binary)** keeps exactly what DXF 2000 keeps, as binary data instead of text: usually about a quarter smaller, quicker to read, and every number exact. Most CAD programs open it; a few simpler ones read only text DXF. A binary DXF you opened saves as binary again.
- **DXF R12** opens in almost any CAD program. It keeps the first sheet with its viewports, and CadCraft's other sheets. It simplifies newer things, such as multi-line text and hatches.

## What the other office will see

In a DWG:

- Lines, arcs, circles, ellipses, polylines, text, multi-line text, blocks with their attributes, solid fills, hatch patterns and layers as you see them.
- Real dimensions: the other program re-measures them when they are stretched.
- Every sheet, with its paper and its viewports.
- Multileaders as multileaders. In the AutoCAD 2000 version, true colors become the nearest standard color.

In a DXF R12:

- Lines, arcs, circles, polylines, text, block references and dimensions as you see them. Dimensions stay real dimensions.
- Layer names in capitals, with spaces turned into `_`.
- The first sheet as the drawing's paper space, with its viewports. Further sheets arrive as blocks named `CCLAYOUT_1` and so on; if they need every sheet as a layout, plot PDFs of each sheet for them as well.
- Multi-line text as separate lines, ellipses as polylines, hatches as outlines.

Either way, anything listed as "Not shown yet" when you opened the DWG is **not** in the copy, unless the history says it was kept: a DWG's OLE objects and its 3D solids in model space are written back when you save as DWG. Tell them, and send a PDF as well.

## Common mistakes

- **"CadCraft opens DWG and DXF drawings."** The file has another extension. Check it is a `.dwg` or `.dxf`.
- **"This drawing could not be read."** The DWG is damaged or in a version the reader does not handle. Ask for a DXF, or for the DWG saved in an older version.
- **"This binary DXF ends in the middle of a group"** or **"… has a group code the DXF reference does not define".** The file is cut off or damaged. Ask for it again, or for a text DXF or the DWG.
- **The saved file is called `name (1).dwg` or `name (1).dxf`.** The browser does that when a file with the same name is already in the folder.
- **They have an older program that cannot open the DWG.** Save as DWG with {{ui:Version}} {{ui:AutoCAD 2000}}, or as {{ui:DXF R12}}: almost any CAD program opens it.
- **Parts of the drawing are missing.** Linked drawings (xrefs) are not loaded until you pick their files ({{cmd:XREF}}, `R`), and pictures show as frames with their file names.
