---
title: Pictures in a drawing
summary: Place a PNG or JPEG picture, clip it to a rectangle or a polygon, show the pictures a DWG uses, and plot them sharp.
section: tasks
order: 87
keywords: pastearea, parea, copy area, copied area, markupcraft, true size, real size, overlay, ole, ole2frame, embedded object, paste picture, paste screenshot, ctrl+v, clipboard image, screenshot, picture, image, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, photo, raster, imagedef, xref, plot, pdf, resolution
---

## What you will make

A company logo placed in a title block, clipped to the part you want, and a PDF in which it prints at its own resolution.

## Place a picture

1. Type {{cmd:IMAGEATTACH}} (or `IAT`) and press {{key:Enter}}. Pick a PNG or JPEG file.
2. `Specify the lower-left corner`: click, or type a point.
3. `Specify its width`: the width in drawing units. {{key:Enter}} keeps one unit per pixel.
4. `Specify its rotation angle`: {{key:Enter}} for none.

The picture is one object: select it by its frame, and move, copy, rotate, scale or erase it like any block.

:::note
The picture file stays with the drawing while it is open. A saved DWG names the file, as other programs do; it does not hold the pixels. Keep the picture next to the drawing.
:::

## Paste a screenshot or a copied picture

1. Copy the picture (a screenshot with {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=your screenshot tool}},
   or Copy image in another program or a browser).
2. Point at where it should go on the drawing and press {{key:Mod+V}}.

The picture's lower-left corner lands at the pointer (or the middle of the view), 40 % as wide as what you see; move,
scale and clip it like any picture. Its name is the drawing's with `-picture-1.png` (then `-2`, …), and the history says so.
{{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} does the same from the menu (the browser may ask first).

A DWG keeps only the name of a picture's file, so saving the drawing also saves the picture as its own file. Keep the two in
the same folder: the drawing shows the picture from there. In the browser that is a second download, and the history says so.
With nothing but CadCraft objects on the clipboard, {{key:Mod+V}} pastes those, as before.

## Paste an area copied in MarkupCraft

{{ui:Copy area}} in MarkupCraft copies part of a sheet as a picture that knows how big it is. CadCraft pastes it at that size.

1. In MarkupCraft, copy the area (a rectangle, a circle or a freeform shape; {{ui:Copy as overlay}} if you want to see your drawing through it).
2. In CadCraft, press {{key:Mod+V}}, or type {{cmd:PASTEAREA}} (or `PAREA`), or choose {{ui:Edit}} › {{ui:More}} › {{ui:Paste a copied area}}.
3. `Specify the lower-left corner of the copied area`: click, or type a point. A frame of the area's size follows the pointer.

How big it lands:

- **The sheet had a drawing scale:** at its real size, in the drawing's units (a 1:50 detail of a 2 m stair is 2 m long in a metre drawing, 78.74 in an inch drawing). Nothing more is asked.
- **The sheet had no scale:** CadCraft says its size on paper and asks for a scale: type `100` for a 1:100 sheet, press {{key:Enter}} for the paper size, or type `P`, click two points on the pasted picture and type how far apart they really are (as {{cmd:SCANSCALE}} does). The lower-left corner stays where you put it.

A drawing with no units takes millimeters, as a PDF underlay does. An overlay keeps its paper see-through and starts as faded as it was copied; outside a circle or a freeform shape is see-through too. The pasted area is a picture like any other: move, rotate, scale, clip or erase it, and the whole paste is one undo step. Saved as a DWG it is an IMAGE with its fade and transparency.

{{key:Mod+V}} pastes the area when the picture on the clipboard is the area's, or when the area was copied after anything you copied in CadCraft (and in the last 6 hours). Otherwise it pastes as before. {{cmd:PASTEAREA}} pastes the last copied area at any time.

## Show the pictures a DWG uses

A DWG stores only where its pictures were, so CadCraft shows each one as a frame with its file name.

1. Type {{cmd:IMAGE}} (or `IM`). The command line lists each picture file and whether it shows.
2. Pick the files (several at once). A file whose name contains the one the drawing names also counts, because exports often add a project prefix.

## Clip a picture

1. Type {{cmd:IMAGECLIP}} (or `ICL`) and select the picture.
2. Choose `R` and click two corners, or `P` and click the points of a polygon, then {{key:Enter}}. `D` removes the clip.

## Plot pictures

Pictures go into the PDF as pictures, at their own resolution and under the lines. In the {{ui:Plot}} dialog, {{ui:Pictures}} can cap them at 600, 300 or 150 dpi to make the file smaller. A JPEG goes in as it is.

## What is saved where

| Format | Pictures |
|---|---|
| DWG (every version) | As pictures (IMAGE), with their clip |
| DXF | As their frames with the file name; the save says so |

## Objects from other programs (OLE)

A drawing can hold objects another program made, such as a picture from a paint program or a spreadsheet range (OLE objects). CadCraft doesn't run or edit them, and can't insert new ones. What it does:

- **In a DXF**, an OLE object opens as a frame. If the object saved a picture of itself and that picture is a bitmap, the picture is drawn inside the frame; otherwise the frame carries a label with the object's type, such as "Microsoft Excel Worksheet (OLE)". You can move, copy and erase the frame like a block. {{cmd:SAVEAS}} to DXF 2000 writes it as an OLE object again, with its data unchanged.
- **In a DWG**, the objects are kept and written back when you save as a DWG, byte for byte, but they are **not shown**: a DWG keeps an object's place inside its own data, and CadCraft doesn't read it yet. The history says how many were kept. Type {{cmd:OLELIST}} to see what they are (type, size, whether each saved a picture) and to put a copy of a picture where you choose: **Place** asks for the number, the lower left corner and the width, and draws a frame with the picture in it. That copy is a frame you can move or erase; the object itself stays in the drawing and is still written back when you save.
- An object that came from a DXF is saved in a DWG as its frame and label only; the history says so. Save as DXF 2000 to keep the object itself.
- Pictures that are metafiles (what many programs save) are not drawn: the frame and label show instead.

## Common mistakes

| You see | Why | Fix |
|---|---|---|
| A frame with a file name | CadCraft does not have the file | {{cmd:IMAGE}}, then pick the file |
| "That is not a picture" | The object picked is not a picture | Pick the picture's frame |
