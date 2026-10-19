---
title: What's new in 0.6
summary: Align and distribute, arithmetic wherever you type a length, title blocks and attributes that are easy to keep up, selection totals, window trim, pasted pictures, points for the field and as-built checks, sample drawings, more point-cloud formats, plot style tables, dimension units, the map location saved in the drawing, and pen and touch.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.6, version, new features, align, distribute, calculation, arithmetic, cal, attributes, title block, battman, attsync, refedit, totals, length, area, trim, extend, window trim, paste picture, screenshot, exportpoints, asbuilt, survey, samples, point cloud, e57, ply, pcd, ptx, apparel, marker, markernest, plot style, dimension units, coordinate system, geographic location, empty click, stretch, pen, touch, indonesian
---

This is what changed in CadCraft 0.6, compared with 0.5. Most of it was asked for on Discord. The list is grouped by area, with the most important first.

## New

### Lining up and measuring

- **ALIGN and Align and distribute.** {{cmd:ALIGN}} (`AL`) moves and turns objects by one, two or three pairs of points, and can scale them to fit. The new {{ui:Align and distribute}} panel ({{ui:Modify}} › {{ui:More}}) lines up the selection's left, center, right, top, middle or bottom edges and spaces objects evenly by their gaps or their centers; each click is one undo step. See [Align objects](topic:modify-objects#align-objects).
- **Type a calculation** wherever a length, coordinate, angle or number is asked for: `4+7/16`, `12'6"+3/4"`, `(24'-0")/3`, `2*450mm`, on the command line, in dynamic input, in Properties and in dialogs. A calculation that can't be read says where it went wrong, and {{cmd:CAL}} prints a calculation's value. On the command line a space is Enter, so put brackets round a subtraction with spaces: `(24' - 6")`. See [Arithmetic in a typed value](topic:coordinate-entry#arithmetic-in-a-typed-value).
- **Totals for a selection.** With several objects selected, Properties shows how many of each kind, their total length and the total area of the closed ones, and the status bar shows the length and area too ({{ui:Settings}} › {{ui:CadCraft}} can hide it). See [Totals of a selection](topic:properties-panel#totals-of-a-selection).

### Title blocks and attributes

- **Edit attributes in a dialog.** Double-click a block reference to change its attribute values, and each one's height, rotation, width, justification, layer and color. {{cmd:ATTEDIT}} asks the values on the command line.
- **Change a block's attributes everywhere.** The block attribute manager ({{cmd:BATTMAN}}) reorders, renames and changes the prompts, defaults and modes of a block's attributes, and {{cmd:ATTSYNC}} (or saving the block editor) brings every reference in line while keeping the values. See [Change the attribute definitions](topic:attributes#change-the-attribute-definitions-battman-attsync).
- **Edit a title block where it sits.** {{cmd:REFEDIT}} edits a block in place on the sheet, with the rest of the drawing faded. All of it is kept in DWG and DXF. See [Edit a title block where it is](topic:attributes#edit-a-title-block-where-it-is-refedit).

### Editing

- **Trim and extend with a window.** {{cmd:TRIMEXTENDMODE}} (1 Quick, 0 Standard) sets how {{cmd:TRIM}} and {{cmd:EXTEND}} start, and {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} can make a drag draw a window that trims every piece it touches, instead of a freehand path. See [Trim inside a window](topic:trim-and-extend#trim-inside-a-window).
- **Paste a picture.** Press {{key:Mod+V}} with a screenshot or a copied picture on the clipboard and it lands on the drawing as a picture. Saving writes the picture file beside the DWG so it shows when the drawing is opened again. See [Paste a screenshot or a copied picture](topic:pictures#paste-a-screenshot-or-a-copied-picture).
- **Clicking an empty spot.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Clicking an empty spot}} can keep the selection when you click where there is no object ({{key:Esc}} clears it), as other drafting programs do. CadCraft still starts the way it did: the click clears, and {{key:Shift}} keeps. See [Clicking an empty spot](topic:settings#clicking-an-empty-spot).

### Points for the field

- **Export points.** {{cmd:EXPORTPOINTS}} writes points, and blocks' insertion points with one of their attributes as the description, to a CSV or TXT file (PNEZD, PENZD or XYZ; drawing units, meters or feet; world or UCS coordinates) for BIM and survey programs. The file opens in CivilCraft too. See [Points for BIM programs](topic:points-for-bim).
- **Check as-built points.** {{cmd:ASBUILT}} reads the points a crew measured and compares them with the points you exported: marked in the drawing on the layer AS-BUILT, with a CSV report. See [Check as-built points](topic:as-built-points).

### Sample drawings

- **Two samples to learn from,** free to use for anything: a small house in feet and inches (plan, elevation, section, detail, four sheets with an editable title block) and a metric as-built traced from a scan. Open them from the left panel's {{ui:Drawing}} section, or type {{cmd:SAMPLES}}. See [Learn from a sample drawing](topic:learn-from-a-sample).
- **New help** on [changing dimension text size](topic:change-dimension-text-size) and on [opening a CadCraft DWG in other programs](topic:dwg-in-other-programs).

### Sheets, plotting and dimensions

- **Plot style tables.** The Plot dialog's {{ui:Plot style}} prints in color, in black, in gray, or with a table of your own that sets each drawing color's printed color, gray, ink strength and lineweight ({{ui:Edit tables…}}, or {{cmd:PLOTSTYLES}}). Each sheet keeps its table, saved with the drawing in DWG and DXF, and tables export and import between drawings. See [Plot style tables](topic:plot-pdf#plot-style-tables).
- **Dimensions in mm, cm, m or km.** Choose {{ui:Units}} under {{ui:New dimensions}} (or for selected dimensions in Properties), or type {{cmd:DIMTEXTUNIT}}. It is saved in DWG and DXF, so other programs show the same text. See [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
- [Dimension a plan](topic:dimensions#where-the-dimension-tools-are) now starts with where the dimension tools are, in each menu style.

### Maps and point clouds

- **The coordinate system and map layers are saved with the drawing.** Set them in {{cmd:MAPLAYERS}} and they are in the DWG or DXF you save, and back when you open it on any computer; each change is one undo step. The internet switch stays with your browser, so a drawing someone sends you asks no map server for anything until you turn it on. See [Saved with the drawing](topic:map-layers#saved-with-the-drawing).
- **Other programs can read where the drawing is.** Saved as DWG 2010 or newer, or DXF 2000, the drawing carries its geographic location the standard way; older versions keep it for CadCraft only, and the save says so. A drawing from another program with a geographic location opens on its system when it names an EPSG code; otherwise the location is kept and saved back as it was. See [Drawings from other programs](topic:map-layers#drawings-from-other-programs).
- **More point-cloud formats.** PLY, PCD and Leica PTX open beside the drawing with their colors and intensity, and so do E57 scans: every scan in the file, each in its place, read in the background, up to 6 million points and 512 MB per file. A scanner maker's own file (RCP, RCS, FLS, LGS, TZF, ZFS) says what it is and how to export E57 or LAS from the maker's software. See [Point cloud formats](topic:point-cloud-formats).

### Files and the library

- **Archicad project files** (`.pln`, `.pla`) are recognized for certain by how they start, and CadCraft says when a file with that name doesn't start like one (renamed, damaged, or older than version 17). See [Archicad projects](topic:files#archicad-projects).
- **Library items in your language.** An item's name, description and type show in your language when the item carries them, and it is placed under that name. See [Items in your language](topic:insert-from-file-and-library#items-in-your-language).

### Live sessions

- **Who changed what.** In a CadCraft Studio live session, select an object and the command line says who changed it last; Studio's Live panel lists the recent edits. It lasts only as long as the session and is never saved. See [Other people on your drawing](topic:work-live#other-people-on-your-drawing).

### Add-ons

- **Automatic markers in the Apparel add-on.** {{cmd:MARKERNEST}} lays a marker's pieces on the fabric for you: grain within the fabric's tolerance, pieces turned round only on fabric that may be turned, mirrored pairs kept, and the gap between pieces you choose. Keep the pieces you placed by hand and let it place the rest, or start over; one Undo takes it back. Styles with long cut lines now go on a marker too. The add-on stays switched off until you turn it on in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}.

## Changed

- **Old DWG files say what they are.** A DWG from AutoCAD Release 12 or earlier now says so plainly and how to get a file CadCraft reads (a DXF or a newer DWG), instead of opening an empty drawing. These files still don't open. See [Troubleshooting](topic:troubleshooting).
- **Phones.** On a phone the drawing now gets about two thirds of the screen's height.
- **Languages.** Spanish (Mexico) has drafts for every new string. In Indonesian, the top toolbar takes three rows on a wide screen (two in English).
- A few English messages read better.

## Fixed

- Drawings from other programs come in the way they were drawn: block references and hatches that were mirrored or drawn from below are no longer turned upside down or left unmirrored, and objects drawn in a tilted plane are shown as seen from above instead of landing far from the drawing.
- Dimensions read from a DWG keep their angle and value when you edit them; before, some jumped to another angle and measured the wrong distance once CadCraft redrew them. A DWG's dimension length factor is honored.
- {{cmd:STRETCH}} takes a selection you made before it: drag a crossing window (or a crossing lasso) over the ends first, then STRETCH, and the ends inside move. See [Stretch a room wider](topic:modify-objects#stretch-a-room-wider).
- The Map layers dialog showed internal names where it should show words (Layers, Add a layer, From, Opacity). It shows words again.

## In every app

- **The toolbar can't get lost.** While full screen hides the bars, a small {{ui:Show bars}} tab stays at the top of the window. {{ui:Settings}} › {{ui:General}} › {{ui:Reset the layout}} puts the toolbar, panels, screen mode and menu style back to how the app starts (your interface size and panel text size stay). In CadCraft Studio, its own {{ui:Settings}} has {{ui:Reset the layout in every app}}. See [Where did my toolbar go?](common:lost-toolbar).
- **A menu on the toolbar.** Right-click the toolbar, or press and hold it, to arrange it, lock it so nothing moves by accident, or reset it. Ribbon menu styles collapse to their tab names: a tab opens its tools for one command; double-click a tab or use the pin to keep the ribbon open. See [The toolbar's own menu](common:lost-toolbar#the-toolbars-own-menu).
- **Interface size.** {{ui:Settings}} › {{ui:General}} › {{ui:Interface size}} makes the bars, toolbars, panels and dialogs 80 % to 140 % of normal, for this app only, so two apps side by side on one monitor both fit. The drawing keeps its own zoom. See [Everything is too big or too small](common:lost-toolbar#everything-is-too-big-or-too-small).
- **Pen and touch.** On a tablet or a touch-screen laptop with a pen, your palm is ignored while you draw, fingers can be left to moving the view, a two-finger tap undoes and a three-finger tap redoes, and the pen's side button and eraser end can undo or redo. {{ui:Settings}} › {{ui:General}} › {{ui:Pen and touch}}. See [Draw with a pen on a tablet](common:pen-and-touch).
- **Live sessions can grow past 20 people.** In CadCraft Studio, when more people knock than the usual 20, Studio tells you what to expect and you choose {{ui:Allow anyway}} for this session or {{ui:Keep it at 20}}. {{ui:Recent edits}} in the Live panel shows who changed what. See [Work together live](common:work-together-live#when-many-people-join).
- **Bahasa Indonesia** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}: a machine-made draft of every word, not yet reviewed by a native speaker. **Spanish (Mexico)** is still a draft too. Help topics are in English.
- **Installers are still not signed** (signing comes next, in 0.7), and CadCraft Studio is not in an app store yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. There is no iPad or iPhone build yet.
- **Fixed:** with the bars hidden, {{ui:Arrange the toolbar…}} in Settings was grayed out, and from the keyboard it lost its place after the first move.

## Not in this version yet

- DWG files from Release 12 and earlier still don't open; only the message is new.
- {{cmd:CAL}} inside another command (`'CAL`) isn't built; CAL runs on its own.
- Reading plot style tables (CTB or STB files) from other programs, and page setups, aren't built yet.
- E57: up to 6 million points and 512 MB per file (export bigger scans as LAS or LAZ); pictures stored in the file are left out; intensity is read only when the scan has no colors. Compressed binary PCD files are refused.
- Point clouds are still not saved in the drawing or plotted. Map layers are saved with the drawing but still draw on screen only, and pictures added from files are not saved.
- A geographic location is written for other programs only in DWG 2010 or newer and DXF 2000. A mesh, scale or sea-level setting from another program is kept, not applied.
- There is no NEST command: nest CadCraft outlines on sheets in PartCraft through DXF. A big marker takes a few seconds, and the page waits meanwhile.
- From earlier versions, still: dynamic block distances, angles and flips are read only; no hatches that follow their boundary, gradients, fonts or formatting inside text, or splines.
- CadCraft's saved DWG files have not been checked in AutoCAD itself yet.

Everything else is in [Not built yet](topic:not-built-yet).
