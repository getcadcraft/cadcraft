---
title: What's new in 0.7 (earlier)
summary: PDF underlays and PDF import, scanned drawings with an automatic trace, real splines with SPLINE, SPLINEDIT and PEDIT, a dimension style manager, text that keeps its formatting, WBLOCK and your own scales, 3D solids from other programs, registering scans, a Laser panel, USD export, History and printing in CadCraft Studio, a guided first drawing, the toolbar on any side or in fewer rows, and more for AI assistants.
section: start
order: 6
keywords: whats new 0.7, earlier release, release notes, changelog, changes, 0.7, version, new features, pdf, pdfattach, pdfimport, underlay, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatting, wblock, scalelistedit, scale list, acis, 3d solids, registerscans, register scans, icp, e57, las, laser, grbl, g-code, usd, usdout, history, versions, compare, print, printer, png, svg, plot style, linetype, tour, cheat sheet, command map, toolbar position, toolbar rows, toolbardock, regen, regenall, trackpad, swipe, code page, cyrillic, korean, chinese, japanese, electrical, rcd, p&id, pid, acad.lsp, acaddoc.lsp, support folder, assistants, mcp, units, portuguese
---

This is what changed in CadCraft 0.7, compared with 0.6. Much of it was asked for on Discord. The list is grouped by area, with the most important first.

## New

### PDFs and scanned drawings

- **Put a PDF page under the drawing.** {{cmd:PDFATTACH}} (`PDFATT`) places a page at its true size or a scale you type. Snap to its lines, fade it, make it monochrome ({{cmd:PDFADJUST}}), clip it ({{cmd:PDFCLIP}}) and switch the PDF's own layers ({{cmd:PDFLAYERS}}). It plots as lines, fills and text, and a DWG or DXF 2000 keeps it as a link to the file. Opening a PDF with {{ui:Open}} asks whether to attach or import it. See [PDF underlays and PDF import](topic:pdf-underlay).
- **Turn a PDF page into drawing objects.** {{cmd:PDFIMPORT}} (`PDFIM`) makes lines, polylines, circles, arcs, solid hatches and text on layers named after the PDF, at true size, a typed scale, or scaled from two points and a real distance, in one undo step. See [Import a page](topic:pdf-underlay#import-a-page).
- **Scanned drawings.** {{cmd:SCANATTACH}} brings in a PNG, JPEG or TIFF (one page or all of them) or a PDF page that is a picture. Then scale it from two points ({{cmd:SCANSCALE}}), align it ({{cmd:SCANALIGN}}), square it from its own long lines ({{cmd:SCANDESKEW}}), make it black and white and remove specks ({{cmd:SCANCLEAN}}), crop it and erase parts of it. Each step is one undo step and the original file is kept. See [Scanned drawings and the trace](topic:scanned-drawings).
- **Trace a scan into lines and arcs.** {{cmd:SCANTRACE}} draws the scan's lines as lines and arcs on a new layer, SCAN-TRACE, to a tolerance you set, and leaves text and hatching as they are. The report says what it made and what it left, and it is not a claim that the result is right: check it against the sheet. {{cmd:RASTERSNAP}} lets object snaps find the scan's ends, corners and crossings. Nothing is sent anywhere and no trained model is used. See [The trace](topic:scanned-drawings#the-trace).

### Drawing and editing

- **Real splines.** {{cmd:SPLINE}} (`SPL`) draws a curve through points or from control points (degree 1 to 5), with end tangents; {{cmd:SPLINEDIT}} (`SPE`) moves, adds and deletes fit or control points, sets weights, opens, closes, reverses, or turns a spline into a polyline. Splines from DWG and DXF files open as splines, and DWG and DXF 2000 save them as splines. See [Splines and polylines](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) closes and opens polylines, joins lines and arcs to them, sets one width, fits a curve through the vertices or a spline along them and takes it back with Decurve, reverses, and edits several at once. See [Edit a polyline](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) writes a block, some objects or the whole drawing to a new DWG or DXF holding only the layers, styles and blocks they use. See [Write a block or objects to a file of their own](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN and REGENALL.** {{cmd:REGEN}} (`RE`) redraws the tab you are on from the drawing, {{cmd:REGENALL}} (`REA`) every tab, pane and open drawing. See [REGEN and REGENALL](topic:commands#regen-and-regenall).

### Text and dimensions

- **Text keeps its formatting.** Paragraph text from other programs keeps its colors per word, bold and italic, underline, stacked fractions and heights: they are drawn on screen and in PDFs, kept when you edit the words, and saved back. See [Formatting inside paragraph text from other programs](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **A dimension style manager.** {{cmd:DIMSTYLE}} (`D`) makes, changes, compares and applies named dimension styles; changing a style changes every dimension that uses it. {{cmd:DIMEDIT}} (`DED`) puts text back, types new text, turns it or slants the extension lines; {{cmd:DIMTEDIT}} moves the text left, right or to the center. See [Named dimension styles](topic:dimension-settings#named-dimension-styles).
- **Your own scales.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) adds scales such as 1:75 to the viewport and plot scale lists; they are saved in the drawing (DWG and DXF 2000), and a drawing from another program brings its own list. See [Scales](topic:units-papers-scales#scales).
- **Text in other alphabets.** DXF files saved in Cyrillic, Korean, Chinese, Japanese or Vietnamese code pages now open with their text, and Chinese, Japanese and Korean text prints in PDFs (the plot fetches a larger font the first time it needs one). See [Font](topic:text#font).

### Plotting and printing

- **More in plot style tables.** For each color a table can now also set a linetype, the line end and line join, and a fill style that prints solid fills as hatch lines; the table has its own list of lineweights and a linetype scale. See [Plot style tables](topic:plot-pdf#plot-style-tables).
- **Print, and PNG and SVG files.** The Plot dialog has {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) and {{ui:Download SVG}}. In CadCraft Studio it lists the computer's printers, their paper and the number of copies. See [Print](topic:plot-pdf#print) and [Picture and SVG files](topic:plot-pdf#picture-and-svg-files).

### 3D and point clouds

- **3D solids from other programs.** Solids, regions and bodies in a drawing's model space show on the 3D tab, read only, and saving as DWG writes them back unchanged. Faces on surfaces CadCraft does not draw yet are listed, not guessed. See [Solids from other programs](topic:3d-solids#solids-from-other-programs).
- **Register several scans.** {{cmd:REGISTERSCANS}} (`REGSCAN`) places scans taken from different positions in one frame, by point pairs or typed target coordinates, refines them with ICP, saves the registration as a small project file, and writes the registered cloud as one LAS or E57 file. See [Register several scans into one](topic:register-scans).
- **USD export.** {{cmd:USDOUT}}, or {{cmd:EXPORT3D}} › {{ui:USD}}, writes the 3D tab's solids as `.usda`, `.usdc` or `.usdz`. See [Export the 3D model as USD](topic:usd).
- **Calculations on the 3D tab.** Where the 3D tab's tools ask for a distance, you can type a calculation, as on the command line. See [Arithmetic in a typed value](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Making things

- **Send a drawing to a laser.** {{cmd:LASER}}, or {{ui:View}} › {{ui:More}} › {{ui:Laser…}}, opens a panel over the drawing: each layer cuts, scores, engraves lines, fills shapes, engraves a picture or is not sent, with its power, speed and passes. The preview follows your edits, {{ui:Save G-code…}} writes GRBL laser-mode G-code, and in Chrome or Edge the panel can frame the job and send it over USB. The settings are saved in the drawing (DWG and DXF). See [Send a drawing to a laser](topic:laser-cutting).
- **Building installation symbols in the Electrical add-on.** Data, telephone and TV outlets, key and time switches, a thermostat, exit sign, detectors, call point and sounder, a fan, water heater, cooker, EV charging point, energy meter and sub-board, and RCD and RCBO symbols. A circuit can carry an RCD, the panel schedule has an RCD column, and the checks name socket circuits with no RCD of 30 mA or less. It is a planning reminder, not a code check.
- **A P&ID add-on.** P&ID draws process diagrams: symbols with connection points, process and signal lines, tags, line numbers, line, equipment, instrument and valve lists (CSV or a workbook) and checks. It comes with CadCraft and is switched off until you turn it on in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}. It is a drafting aid, not an engineering approval, and its words are in English only for now.

### Getting started and the screen

- **A guided first drawing.** {{cmd:TOUR}} (or {{ui:Take the tour}} on the start card) walks you through six steps in the real drawing: a line, a circle, a move, a trim, an erase and a dimension. It starts by itself the first time CadCraft opens with nothing in it. See [Prefer to be guided?](topic:getting-started#prefer-to-be-guided)
- **A cheat sheet and a command map.** The [cheat sheet](topic:cheat-sheet) has the 40 everyday commands on one page, also as a PDF to print, and the [command map](topic:command-map) lists commands with their short names, A to Z.
- **The toolbar on any side.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: top (as before), bottom, left or right, or type {{cmd:TOOLBARDOCK}}. See [Toolbar position](topic:settings#toolbar-position).
- **Toolbar rows.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: wrap to fit, 2 rows or 1 row, for the CadCraft toolbar and the Drafting classic and Ribbon styles. {{key:Shift+Ctrl+F1}} steps through them, {{key:Ctrl+F1}} through what the buttons show, and {{cmd:TOOLBARROWS}} and {{cmd:TOOLBAR}} set them. The start hint has a close button. Thanks to GJoe2, who sent this as a pull request. See [Toolbar rows](topic:settings#toolbar-rows).

### In CadCraft Studio

- **History.** {{cmd:HISTORY}} (`HIST`), or {{ui:View}} › {{ui:More}} › {{ui:History…}}: the copies Studio keeps when you open and save a drawing, and the drawing's cloud versions when you opened it from the cloud. Open or restore one, or compare two, with what was added, removed and changed shown in color. See [History](topic:history).
- **acad.lsp and acaddoc.lsp.** Choose a support folder in {{cmd:APPLOAD}}: those two files load when CadCraft starts (acaddoc.lsp again for each new drawing tab), and `S::STARTUP` runs after them. See [Load applications](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **The Plot dialog in its own window.** A button in its title bar moves it into a window you can put on another monitor. See [Move a dialog](common:arrange-panels#move-a-dialog).

### For AI assistants

- **Files by name, in folders you choose.** In CadCraft Studio an assistant can open, save and plot files by name, and hand a command the file it asks for (INSERT from a file, COUNT's export, SAVEAS, PLOT), but only inside the folders you add under {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. See [Let it use files in folders you choose](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Fewer calls.** An assistant can type a whole command line in one go, keep a command open between its calls, count objects by type and layer without listing them, and place a block with its attribute values in one step.
- **Without a window.** The `cadcraft` command line writes SVG plots and converts, plots, checks or describes many files at once. The MCP package is not published yet. See [Work on files without opening CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Changed

- **A trackpad pans.** Move two fingers on a trackpad and the 2D view follows them; pinch and the mouse wheel zoom. See [Mouse, trackpad and touch](topic:mouse-trackpad-touch).
- **OLE objects are kept.** A DXF's embedded objects show as their picture or as a labelled frame and are saved back by DXF 2000. A DWG's are kept and written back when you save as DWG, but not shown yet. Before, they were lost on save. See [Objects from other programs (OLE)](topic:pictures#objects-from-other-programs-ole).
- **The units of a new drawing** follow the unit you star in {{ui:Settings}} › {{ui:General}} › {{ui:Units}}.

## Fixed

- Layouts that opened empty, or lost a viewport and showed the whole model in its place, now open with their real viewports. A layout with no link to its contents is kept and the open report says so.
- DXF files in older code pages showed garbled Cyrillic and Korean text. They read right now.
- Paragraph text from other programs lost its formatting when it was opened and was saved back plain.

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. In CadCraft the star sets the units of a new drawing when it is a unit a drawing can carry; CadCraft's own {{ui:Units}} box does not follow the switches yet. Once a drawing has units, a length you type can carry any unit's mark. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- A DWG's OLE objects are kept but not shown, and metafile pictures inside OLE objects are not drawn.
- Reading plot style tables (CTB files) from other programs waits for a sample file.
- Older Asian text written as `\M+` codes is read, but has not been checked against a file from another program yet.
- PDF underlays: pictures inside the page are shown on screen but not plotted, an assistant's plot leaves underlays out, and how other programs read the saved clip and scale has not been checked in them.
- History: CadCraft does not send its saves to the cloud yet, so the cloud versions are the ones saved from other devices and the web. History is in CadCraft Studio only.
- Whether Studio keeps the acad.lsp support folder after a restart has not been checked yet; if it asks, choose the folder again in APPLOAD.
- The Laser panel has not been tried on a real laser yet: test every setting on scrap. CadCraft Studio has no Web Serial, so in Studio the panel saves G-code only.
- Registering scans has been tested on made-up scans, not yet on a real scanner's set.
- Two-finger panning has been tried with simulated trackpad events, not yet on a real trackpad.
- {{cmd:PEDIT}} has no Edit vertex option (use grips or Properties). Offset, trim, extend, fillet, break and join do not take splines yet; a spline's height (Z) is not kept.
- New paragraph text can't be given formatting codes yet, and SVG plots show formatted text in one color.
- WBLOCK's Entire drawing writes the model only, not the sheets. The current dimension style is not saved in the file: a drawing opens with Standard current.
- The ribbon menu styles have no layer, color or linetype lists yet: use the {{ui:Layers}} panel and {{ui:Properties}}.
- Point clouds are still not saved in the drawing or plotted, and E57 files open up to 6 million points and 512 MB.
- CadCraft's saved DWG files have not been checked in AutoCAD itself yet.

Everything else is in [Not built yet](topic:not-built-yet).
