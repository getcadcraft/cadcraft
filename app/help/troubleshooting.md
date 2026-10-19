---
title: Troubleshooting
summary: Messages CadCraft shows and problems you may meet, each with the cause and the fix.
section: trouble
order: 10
keywords: problem, error, not working, message, cannot open, unknown command, nothing happens, stuck, keys not working, blank, missing, fix
---

## Opening files

| Message or symptom | Cause | Fix |
|---|---|---|
| "CadCraft opens DWG and DXF drawings. "…" is neither." | The file is not a `.dwg` or `.dxf`. | Open the drawing file itself. PDFs and images cannot be opened. |
| "This is a binary DXF. Save it as ASCII DXF (or open the DWG) and try again." | Binary DXF is not read. | Ask for a text (ASCII) DXF, or the DWG. |
| "This file is not a readable DXF (bad group code on line …)." | The DXF is damaged or not really a DXF. | Ask for the file again, or for a DWG. |
| "This drawing could not be read. It may be damaged, or saved in a version the reader does not handle yet (…)." | The DWG reader could not read it. | Ask for the DWG saved in an older version, or a DXF. |
| "This drawing is from AutoCAD R11 / R12 (DWG AC1009), older than CadCraft reads …" | DWG files from Release 12 and earlier use a format CadCraft does not read. | In the program that made it, save it as DXF (any version) or as a newer DWG, and open that. CadCraft's own Save as offers DXF R12 for programs that want that old format. |
| "Could not open …" followed by a network message, on the first DWG | The DWG reader could not be downloaded: you are offline and CadCraft is not saved for offline use, or the connection dropped. | Go online and try again, or open a DXF. Click {{ui:Save for offline}} and wait for "Offline ready" so DWG files open offline next time. See [Working offline](common:offline). |
| The offline button says "Could not save" | Some files did not download. | Check the connection and click the button to try again. |
| The offline button says "Offline not available" | Private windows and some managed computers cannot keep an offline copy. | Use a normal window, or stay online. |
| CadCraft does not open with no connection | It was not saved for offline use in this browser, or the browser cleared it. | Next time you are online, click {{ui:Save for offline}} and wait for "Offline ready". |
| The drawing opens but parts are missing | Objects CadCraft cannot draw yet, or layers that are off or frozen in the file. | Read "About this file" in the left panel. Check the {{ui:Layers}} panel. |
| Text wraps onto two lines | CadCraft draws text in a Helvetica-style font, wider than some CAD fonts. | Shorten the text in Properties, or live with the extra line. |
| A circle shows as an ellipse, or mirrored text reads the right way round | The object was drawn in a tilted plane, or seen from below, in the program that made the file. CadCraft shows it as seen from above, the way the plan view of that program does; text is kept readable. | Nothing to fix. To see it the other program's way, ask for the drawing flattened, or with the objects drawn from above. |
| A block, circle or dimension sits somewhere other than in the program that made the file | A drawing case CadCraft reads wrong. | Tell us on Discord, with the file if you can share it. |

## The command line

| Message or symptom | Cause | Fix |
|---|---|---|
| "Unknown command "…". Type HELP for the list." | No command or alias by that name. | Type `HELP`, or see [Command reference](topic:commands). Some familiar commands are [not built yet](topic:not-built-yet). |
| "No such command" next to the command line while typing | What you typed matches nothing yet. | Keep typing, or check the spelling. |
| "Point or option keyword required." | What you typed is not a point or an option. | Check the format: `x,y`, `@dx,dy`, `@d<a`, or a single number. See [Coordinate and distance entry](topic:coordinate-entry). |
| "Requires a positive number or two points." | A distance was negative or not a number. | Type a positive number, or click two points. |
| "Requires an angle in degrees or two points." | The angle was not a number. | Type degrees as a plain number. |
| "Requires a number." | A number was expected. | Type digits only. |
| "Invalid option keyword." | The letters do not match an option. | Type the capital letters shown in the square brackets. |
| `*Cancel*` | You pressed {{key:Esc}}, or {{key:Enter}} where a point was required. | Start the command again. |
| Typing does not reach the command line | A box in a panel or a dialog has the cursor. | Press {{key:Enter}} or {{key:Esc}}, or click on the drawing. |
| The command uses objects you did not pick | They were selected before you started it. | Press {{key:Esc}} before the command. |
| A line went somewhere unexpected | `x,y` is absolute. | Use `@dx,dy` for relative points. |
| "Finish or cancel the current command first (Esc)." | You pressed {{key:Mod+S}} while a command was running. | Press {{key:Esc}}, then save. |
| "Could not save as DWG (AutoCAD 2000): … Try Save as, then DXF." | Something in the drawing could not be written as DWG. | Press {{key:Mod+Shift+S}}, choose {{ui:DXF R12}} and click {{ui:Save}}. |
| "Not saved." | You closed the {{ui:Save a copy as}} dialog with {{ui:Cancel}} or {{key:Esc}}. | Press {{key:Mod+Shift+S}} again and click {{ui:Save}}. |

## Editing

| Message or symptom | Cause | Fix |
|---|---|---|
| An object will not select | Its layer is locked, off or frozen; or you are on a sheet and it is the model inside a viewport. | Unlock the layer, or go to the {{ui:Model}} tab. |
| "Nothing found there." | No object under the click. | Zoom in and click on the line itself. |
| "Nothing crosses that object there." | {{cmd:TRIM}} found no object crossing the piece you picked. | Check that the cutting line really crosses it. |
| "Cannot trim that object." | Trim works on lines, arcs, circles and polylines. | Explode blocks first, or erase and redraw. |
| "No boundary in that direction." | {{cmd:EXTEND}} found nothing to meet. | Pick nearer the end that should grow. |
| "Cannot offset that object." | Offset works on lines, arcs, circles and polylines. | Explode it first, or draw a parallel line. |
| "Cannot offset that far." | The offset would turn the shape inside out. | Use a smaller distance. |
| "Radius is too large." or "Distance is too large." | The fillet or chamfer would run past the end of a line. | Set a smaller radius with `R`, or smaller distances with `D`. |
| "Only the first or last segment of an open polyline can be cut back." | The corner would cut into the middle of a polyline. | Pick two segments of the polyline next to each other, or use `P` for every corner. |
| "Pick a second, different line." | The second pick was the same line, or not a line. | Pick another line. |
| "Only polylines, block references and dimensions explode." | The selection had nothing to explode. | Select a polyline, block reference or dimension. |
| "That is the current layer. Make another layer current first." | You tried to turn off the current layer. | Click another layer's name, then turn this one off. |
| "There is already a layer called …" | Layer names must be unique. | Choose another name. |
| Undo did not undo a layer change | Layer settings are not undone. | Change the setting back by hand. |
| "Nothing to undo." | There is nothing left to undo, or you opened or started a drawing (that clears the history). | — |

## Dimensions and blocks

| Message or symptom | Cause | Fix |
|---|---|---|
| Dimension text and arrows are tiny or huge | Sizes are in drawing units; the overall scale does not fit the drawing. | Set {{cmd:DIMSCALE}} to the plot scale; see [Set dimension sizes](topic:dimension-settings). |
| "Pick a point inside the angle you want to measure." | The angular dimension's location sits on a leg. | Click inside the angle. |
| "Those lines are parallel." | Parallel lines have no angle between them. | Pick two lines that meet. |
| "Pick a linear or aligned dimension." | {{cmd:DIMCONTINUE}} or {{cmd:DIMBASELINE}} needs one to start from. | Pick a linear or aligned dimension. |
| "This drawing has no blocks yet: F inserts one from a file, L from the library …" | The drawing has no blocks of its own. | Type `F` or `L`, or make a block with {{cmd:BLOCK}}. |
| "No block called "…"." | The name is wrong. | The message lists the blocks there are. |
| "A block name cannot start with * or use …" followed by a list of characters | The name has a character blocks cannot use. | Use letters, digits, `-` and `_`. |
| "A block cannot contain itself." | The selection holds a reference to the block being made. | Leave that reference out. |
| "No objects selected; nothing made." | You pressed {{key:Enter}} before selecting. | Run {{cmd:BLOCK}} again and select the objects. |

## Sheets and plotting

| Message or symptom | Cause | Fix |
|---|---|---|
| "Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first." | {{cmd:MVIEW}} on the {{ui:Model}} tab. | Click a sheet tab first. |
| "Open the layout with the viewport first." | {{cmd:VPVIEW}} on the {{ui:Model}} tab. | Click the sheet tab first. |
| A viewport scale looks ten times wrong | The drawing units are wrong. | Set {{ui:Units}} in {{ui:Current settings}}. |
| "There is nothing to plot yet." | The model is empty. | Draw something, or open a drawing. |
| "Pick the window to plot." | {{ui:A window…}} is chosen and no window was picked. | Click {{ui:Pick}} and pick two corners. |
| "… bigger than the paper: the edges are cut off." | The area does not fit at that scale. | Choose a smaller scale, a larger paper, or {{ui:Fit to paper}}. |
| "The browser blocked the new tab, so the PDF was downloaded instead." | Pop-ups are blocked for the site. | Open the downloaded PDF, or allow pop-ups for the site. |
| Characters print as "?" | The PDF font has Western European characters only. | Not built yet for other scripts. |
| Construction lines show in the PDF | Their layer plots. | Click the layer's printer button. |
| All lines are equally thick | Their lineweight is {{ui:Default}}, so they print at the dialog's pen width. | Give the layers or objects a {{ui:Lineweight}} in the right panel, or choose a {{ui:Line weight}} in the dialog. To see lineweights on screen, press {{ui:LWT}} in the status bar. |

## Keys and the screen

| Symptom | Cause | Fix |
|---|---|---|
| F3, F7 or F8 changes volume or opens Mission Control | Mac function keys. | Hold **fn**, or use the status bar buttons. See [Keys, mice and trackpads](common:keys). |
| F7 asks about caret browsing | Firefox's own use of F7. | Choose No; use the {{ui:Grid}} button. |
| {{key:Mod+N}} opened a browser window | The browser keeps that key. | Click {{ui:New}} or type `NEW`. |
| {{key:Mod+A}} selected the command line's text | The command line had the cursor. | Click an object first, or type `ALL` at a `Select objects` prompt. |
| {{key:Delete}} does not erase | The command line had the cursor. | Type `E` and press {{key:Enter}}. |
| Right-click does nothing on a Mac trackpad | Control-click may count as an ordinary click. | Click with two fingers. |
| Nothing pans on a trackpad | There is no middle button, and Space does not pan. | Drag with a right-click held, or zoom out and in at another spot. |
| The first {{key:Esc}} left full screen | The browser uses Esc to leave full screen. | Press {{key:Esc}} again to cancel the command. |
| {{key:F1}} does nothing on a Mac | F1 is a brightness key. | Hold **fn**, or click {{ui:Help}}. |
| Typing goes into the help's search box | The help panel has the cursor. | Click on the drawing. |
| The drawing went blank | You zoomed far away. | Click {{ui:Extents}}, or double-click the wheel. |
| "Leave site?" when closing the tab | There are unsaved changes. | Stay, save with {{key:Mod+S}}, then close. |
