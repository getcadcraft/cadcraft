---
title: Files: what opens, what saves
summary: The formats CadCraft opens, saves and exports, what is kept or converted, and where the files go.
section: start
order: 30
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, open, save, export, import, formats, conversion, download, saveas, dxfout, save as, dwg save, format, qsave, xref, xattach, linked drawing, external reference, bind, reload, detach
---

## At a glance

| Format | Open | Save | Notes |
|---|---|---|---|
| DXF (text or binary, any version) | Yes | Yes, as DXF R12, DXF 2000 or DXF 2000 (binary) | A binary DXF opens like a text one and saves back as binary. |
| DWG | Yes | Yes, as DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 or 2018) | Read and written by CadCraft's own DWG library (AutoCAD R13 to 2018 files). Your DWG is never changed. Damaged files, or versions the reader does not handle, are refused with a message. |
| PDF | Brings a page in: as an underlay or as objects ([PDF underlays](topic:pdf-underlay)) | Yes, by plotting | Vector PDF of a sheet, or of the model at a scale. |

Each drawing you open (or start with {{ui:New}}) gets its own tab over the drawing area; a new drawing nobody has touched yet is used instead of adding a tab. Click a tab to switch, its {{ui:×}} to close it (CadCraft asks first if there are unsaved changes), or tile the open drawings side by side: see [Split the screen](topic:split-screen).

## Opening a drawing

- Press {{key:Mod+O}}, click {{ui:Open}}, or type `OPEN`, then choose the file.
- Or drag a `.dwg` or `.dxf` file onto the drawing area.

The file is read inside your browser. It is not uploaded anywhere. The history reports how many objects and layers came in and how long it took, and the {{ui:Drawing}} section of the left panel shows the format, for example "DWG 2018 (AC1032)".

The DWG reader is part of CadCraft and is fetched with the first DWG you open after the page loads (a few hundred KB), so there is no separate download to wait for. It reads the file in the background, so the page keeps responding while a big DWG opens.

A DXF is read in pieces of about 4 MB, never as one block of text, so a DXF over 512 MB opens too. What limits it is your computer's memory: while a DXF opens, expect it to use roughly 16 to 20 times the file's size (a 100 MB DXF with about 690,000 objects used about 1.5 GB in our test).

### What comes in

- Lines, arcs, circles, polylines (with arc segments), ellipses, points, text and multi-line text, solids, hatches (the standard patterns drawn as their lines, others as a flat tone), block references with their attributes (values you can edit; see [Block attributes](topic:attributes)), dimensions, and layouts with their viewports.
- Splines come in as splines (degree, control points, knots, weights, fit points); see [Splines and polylines](topic:splines).
- Multileaders with one leader line and text come in as CadCraft multileaders you can edit (see {{cmd:MLEADER}}). Others (with a block, several leader lines or curved lines) are drawn as the other program drew them and move as one; the history says how many.
- Pictures (images) show as a frame with the picture's file name until you give CadCraft the file with {{cmd:IMAGE}}: see [Pictures in a drawing](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts show as their frame, and what is under them stays visible.
- Tables in a DWG come in as the other program drew them.
- 3D faces in model space come in on the {{ui:3D}} tab, not as 2D objects; so do those inside blocks, once per block reference in the model. In a block and on a sheet they are also drawn flat, as outlines. See [Model in 3D](topic:3d-solids).
- Layers keep their color, on, frozen, locked and plot settings. DEFPOINTS never plots.
- Dimensions become real, editable CadCraft dimensions where their points can be read. They are first shown exactly as the other program drew them; as soon as you change one, CadCraft redraws it in its own style.
- Each layout becomes a sheet tab. In the other program every layout has a hidden first viewport that is the sheet itself; CadCraft leaves that one out.

### What does not come in yet

Anything CadCraft cannot draw is counted, not guessed at. The "About this file" box in the left panel lists it as "Not shown yet:" followed by each kind of object and how many. Typical cases are tables in a DXF, meshes, and 3D solids inside blocks. 3D solids, regions and bodies in model space show on the 3D tab (see [Model in 3D](topic:3d-solids#solids-from-other-programs)). Viewports twisted in the file show turned, as there, and keep their twist when you save; so do the current UCS, the named UCSs and a turned view.

Text is drawn in one Helvetica-style font. A label that fits on one line in the original program's narrower font can wrap onto two lines in CadCraft.

## Saving

There are three ways to save. Each one downloads a copy.

- **Save**: press {{key:Mod+S}}, click {{ui:Save}}, or type `SAVE` (also `QSAVE`). It saves in the drawing's format: DWG if you opened a DWG, DXF if you opened a DXF. A DWG keeps the version it came in (a 2018 file saves as 2018). A new drawing uses the format and DWG version you last chose in Save as in this browser; if you never chose one, DWG in the AutoCAD 2000 format.
- **Save as**: press {{key:Mod+Shift+S}}, click {{ui:Save as}}, or type `SAVEAS`. The {{ui:Save a copy as}} dialog offers {{ui:DWG}}, with a {{ui:Version}} list (AutoCAD 2018, 2013, 2010, 2007, 2004 or 2000), {{ui:DXF R12}} and {{ui:DXF 2000}}, each with the file name it will give, and the drawing's current format and version already picked. Click {{ui:Save}} to download, or {{ui:Cancel}} (or {{key:Esc}}) to save nothing; the history then says "Not saved." What you choose sticks: {{key:Mod+S}} uses it for this drawing from then on, and new drawings in this browser start with it.
- **DXFOUT**: type `DXFOUT`. It always downloads a DXF R12 copy, and the next {{key:Mod+S}} still saves in the drawing's own format.

The browser downloads `<drawing name>.dwg` or `<drawing name>.dxf`. Every save is a **new download**; the file you opened is never overwritten or changed. The history confirms it, for example "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." For a DXF it says "(DXF R12, opens in any CAD program)". The lines under it list anything that changed on the way.

When CadCraft runs in the desktop app, saving works the way it does in other desktop programs: {{key:Mod+S}} writes the drawing back to the file you opened, in its own format and version, and the history says where it was saved. {{ui:Save as}} and the exports show the system's save dialog, and a `.dwg`, `.dxf` or `.ccsheets` file you double-click opens in CadCraft.

For a PDF, plot instead (see below).

## What a DWG keeps and changes

CadCraft writes the DWG itself, inside your browser, with the same DWG library it reads with. Pick the version in Save as: the AutoCAD 2000 format (file version AC1015) opens in the most programs, old ones included; the newer formats (2004, AC1018, up to 2018, AC1032) also keep true colors. Nothing is uploaded, and saving a DWG works offline.

Each version is checked by reading the saved files back with three other programs' DWG readers and with CadCraft itself. A CadCraft DWG has not been opened in AutoCAD itself yet.

### What a DWG keeps

- Lines, arcs, circles, ellipses, points, and polylines with their arc segments.
- Single-line text with its alignment and width factor.
- Multi-line and wrapped text, as multi-line text. The other program wraps it again from the same width.
- Object colors: by layer, by block, the 255 standard colors, and true colors in the 2004 format and later.
- Layers with their color, linetype, lineweight and their on, frozen, locked and plot settings; objects' own linetypes, lineweights and linetype scales, the linetype patterns and the drawing's linetype scale.
- The drawing units and the length format (decimal, feet and inches, fractions…).
- Blocks with their base point and attribute definitions, including invisible, constant and preset ones.
- Block references with their scale, rotation and attribute values.
- Solid fills, and patterned hatches with their pattern, scale and angle (the pattern's own lines, so other programs draw the same lines CadCraft does).
- Dimensions, as real dimensions: other programs re-measure them when they are stretched. Each keeps its own settings (text height, arrow size, decimals, length format) and its text, and carries the drawn copy every DWG dimension has.
- Sheets (layouts): each sheet with its paper size and units, what is drawn on it, and its viewports with their view and scale.
- Named views.
- Multileaders, as multileaders.
- Layer and block names as you typed them, in upper and lower case. (DXF R12 writes them in capitals.)

### What a DWG changes

Each of these is listed in the history after you save, when it applies to your drawing.

| In CadCraft | In the saved DWG |
|---|---|
| True colors (picked with the color picker), in the 2000 format | The nearest standard color: the 2000 format has only the 255. Save as 2004 or later to keep them |
| Named views of a sheet | Paper-space views: a DWG does not say which sheet, so when CadCraft opens the file again they belong to the first sheet |
| Multi-line text with a width factor | Normal letter width: in a DWG the width factor applies only to single-line text |
| Layer or block names with characters DWG does not allow | Changed: a name from a linked drawing such as `Base\|Walls` becomes `Base$0$Walls` (the way binding a linked drawing names it), and other characters become `_` |

### Why R12, and what converts

When you save as DXF, CadCraft writes DXF R12, the version every CAD program can open. It is older than some features, so a few things are written in a simpler form:

| In CadCraft | In the saved R12 file |
|---|---|
| Multi-line text | One text object per line |
| Ellipses | Polylines that follow the ellipse |
| Hatches (from opened files) | Their outlines only |
| True colors (picked with the color picker) | The nearest standard color |
| Lineweights, and objects' own linetype scales | Left out: R12 has neither (linetypes are kept) |
| Layer and block names | Written in capitals; spaces and other characters become `_`, and names are cut to 31 characters ("Title block" becomes `TITLE_BLOCK`) |
| Layers set not to plot | Other programs will plot them (CadCraft remembers the setting when the drawing has a sheet) |
| Dimensions | Real dimensions with their own drawn block, so other programs show them as you see them |
| Multileaders | The lines, arrowhead and text they draw |
| Named views | Kept, with names in capitals; a sheet's views come back on the first sheet |
| Several sheets | The first sheet is the paper space every program shows; the others are kept as blocks named `CCLAYOUT_1`, `CCLAYOUT_2` … which CadCraft turns back into sheets when it opens the file |

The history lists each of these that applied to your drawing.

:::tip
To keep working on a drawing over several days, save as DXF and open that DXF next time. Everything CadCraft can draw survives the round trip, including dimensions, blocks and all sheets.
:::

## Linked drawings (external references)

{{cmd:XATTACH}} (`XA`, or {{ui:Blocks}} › {{ui:More}} › {{ui:Link a drawing (xref)}}) links another DWG or DXF: pick the file, then click where it goes ({{key:Enter}} puts it at 0,0). It comes in as one block named after the file, at the right scale when the two drawings have different units. Its layers and blocks keep their names with the link's name in front — `Plan|Walls`, `Plan|Door` — so they never mix with yours: turn the linked layers on and off, freeze or lock them like your own. A link is read-only: change the other drawing and reload it. What you set on a link's layers (colour, linetype, lineweight, on/off, freeze, lock, plot) is kept when you reload it, when you save the drawing as DWG while the link is still a link, and when another drawing links this one.

{{cmd:XREF}} (`XR`): `?` lists the links (loaded or not, which file, how many references); `A` attaches; `R` reloads one from its file (pick the file again: the browser cannot reach your folders on its own); `B` binds one (it becomes ordinary blocks and layers named `Plan$0$Walls`); `D` detaches one (its references and layers go). Each is one undo step.

{{cmd:XCLIP}} (`XC`) clips block references and links: select them, `N` for a new boundary, then `R` and two corners or `P` and the points of a polygon ({{key:Enter}} closes it); `D` removes the clip. Only what lies inside shows and plots, and the clip moves with the reference. DWG and DXF 2000 keep clips; DXF R12 saves the reference whole and says so. When you bind a link that has clipped references, {{cmd:XREF}} `B` asks: `A` binds everything, `C` keeps only each reference's clipped part (lines and arcs are cut at the boundary; texts and nested blocks stay when their insertion point is inside).

A drawing you open may link files CadCraft cannot see: it says how many are not loaded. Use {{cmd:XREF}}, `R` and pick each file to see them.

When you save, a loaded link is **bound** into the file (other programs see ordinary blocks and layers named `Plan$0$…`), and the history says so. A link that is not loaded stays a link to its file, in DWG and DXF.

## Open in 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) opens the drawing in the 3D modeling app in a new tab, as a DWG, without uploading it. Changes made there stay there; save them there. The menu item shows only where that app can take a handed-over drawing.

## Plotting a PDF

Press {{key:Mod+P}}, click {{ui:Plot}}, or type `PLOT`. The PDF is made inside the browser and downloaded, or opened in a new tab for printing. See [Plot to PDF](topic:plot-pdf).

## Where the files go

Every save and every plot is a download, so files land wherever your browser puts downloads: usually the Downloads folder. To choose a folder each time, change the download setting in your browser; [Browsers and computers](common:browsers) shows where.

Nothing you open or save is sent to us. See [Where your files go](common:your-files).

## PLN and PLA project files

CadCraft opens DWG and DXF drawings, not Archicad's own files (`.pln`, `.pla`, `.tpl`, `.bpn`). Opening one tells you what it is. In Archicad, save the views or layouts you need as DWG and open those here, or export the model as IFC and open it in BimCraft. Where BimCraft can take the file over, CadCraft offers {{ui:Open in BimCraft}}.

## If the page closes before you save

CadCraft keeps a copy of every drawing you change, in this browser only, a moment after you stop editing. If the tab closes, the browser stops or the computer restarts before you save, CadCraft asks **Recover your work?** the next time it starts: {{ui:Recover}} opens the drawing again, unsaved, in its own tab. Saving the drawing removes its copy. See [Recover your work](common:recover).

## Online and offline

Opening, drawing, saving (DWG and DXF) and plotting all happen on your computer, so they work with no connection once CadCraft has loaded.

To use CadCraft with no connection at all, click {{ui:Save for offline}} in the bar at the top while you are online. The label counts up ("Saving 40 of 212") and ends at "Offline ready". The saved copy includes the DWG reader, about 5 MB in all, so **DWG files open offline too** once it is saved. Click the button again for {{ui:Save again (get the newest version)}} or {{ui:Remove the offline copy}}. "Could not save" means some files did not download: check the connection and click to try again. "Offline not available" means this browser window cannot keep a copy (private windows and some managed computers).

Without a saved copy, the DWG reader is fetched the first time you open a DWG after the page loads, so opening a DWG offline can fail; DXF files never need it. Don't reload the page while offline unless CadCraft is saved.

See [Working offline](common:offline) for the details.

:::offline
You are offline now. Drawings save as DWG or DXF and plot normally, and DXF files open. DWG files open if CadCraft shows "Offline ready", or if the DWG reader already loaded in this tab.
:::

## Constraints in files

Constraints and parameters (see [Constrain a drawing](topic:constraints)) are saved in both DWG and DXF. Each constrained object carries a small CadCraft note (extended data), and an unused block named `CADCRAFT_PARAMETRIC` holds the constraints and the parameter table. Other programs open the drawing normally and ignore both; they may delete the unused block when they purge. The notes refer to objects by their own key, not by the file's handles, so a program that renumbers handles does not break them. When another program has deleted or changed a constrained object, CadCraft drops the constraints on it when it opens the file and says how many. A file without them opens without constraints.

A sketch exported from a part modeler (`.json`) opens too: see [Move sketches to and from other part modelers](topic:solidworks-sketches).

## Not available yet

- Multileaders as multileader objects in a saved DXF (R12 has none: they are saved as what they draw).
- Pictures in a saved DXF (they save as their frames; DWG keeps them as pictures), and wipeouts that hide what is under them.
- Saving a newer DXF version than 2000.
- Cloud saving and sync between computers.

See [Not built yet](topic:not-built-yet) for the full list.
