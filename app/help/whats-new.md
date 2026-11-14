---
title: What's new in 0.8 and 0.8.1
summary: A ghost that finishes your drawing, pen sketches and sketch photos turned into geometry, sheets that lay themselves out, details offered as you draw, GRIDMOVE and AUTODIM, tags, merge-friendly files, redlines turned into revisions, drafting without sight, drawing limits, bearings, SHX fonts, diagrams from text, and fixes in 0.8.1.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, autocomplete, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, draft without sight, screen reader, limits, bearings, aunits, shx, diagram, ole, history, compare, in words, properties, feet and inches, stretch, languages, input devices, problems, live, assistants
---

This is what changed in CadCraft 0.8 and 0.8.1, compared with 0.7. 0.8 (1 November 2026) adds drawing helpers that work from your own drawing, by rules on your computer and with no model, and 0.8.1 (2 November 2026) fixes bugs reported after it.

## New

### Drawing that finishes your thought

- **A ghost shows what comes next.** With no command running, a grey dashed ghost shows what your drawing's own patterns say comes next: the next stud at the same spacing, the next step of a stair, the missing wall of a room. Press {{key:Tab}} to draw it as one undo step, or {{key:Esc}} to dismiss it. It looks only at the newest objects, so it stays smooth on a big drawing. Turn it off in {{ui:Settings}} › {{ui:CadCraft}} or with {{cmd:AUTOCOMPLETE}} `Off`.
- **The next point while you draw a line.** In the middle of {{cmd:LINE}} or {{cmd:PLINE}} the ghost is the next point: the next step of a stair, the fourth corner of a rectangle, or the point that closes it. Bring the cursor near it and press {{key:Tab}}, as if you had clicked there.
- **Pen sketches become precise geometry.** {{cmd:SKETCHFIX}}: draw rough strokes with a pen, mouse or finger and each one becomes a clean line, circle, arc, rectangle or polyline, snapped to what is already drawn. See [Sketch with a pen and get precise geometry](topic:sketch-with-a-pen).
- **A photo of a sketch becomes a drawing.** {{cmd:PHOTOSKETCH}} (`PSK`) finds the paper in a photo, straightens the perspective, applies the paper size and scale you give, and traces the pen lines onto a layer for each pen color. Lettering is not traced.
- **Dimension it by rules.** {{cmd:AUTODIM}} (`ADIM`) makes chains of dimensions along the sides you choose, an overall size, opening widths, hole diameters and, with `Grid`, grid spacing. It never repeats a dimension that is already there.
- **Move a grid line and the set follows.** {{cmd:GRIDMOVE}} (`GM`): walls that end on the grid line stretch with it, walls along it, columns, its bubble and tag move, and dimensions on it measure the new spacing. One undo step.

### Sheets, details and tags

- **Sheets that lay themselves out.** {{cmd:AUTOSHEET}} takes your named views (or the separate pieces of the model), picks a paper size and a standard scale, and puts the views on new sheets with a title block and a name-and-scale caption. Everything stays editable. See [Lay out sheets for me](topic:lay-out-sheets-for-me).
- **Your firm's details, offered as you draw.** {{cmd:DETAILS}} (`DET`) keeps your own detail blocks. When what you select matches one by the words on its layers, block names and notes, the status bar says so; pick it and place it. {{cmd:DETAILS}} › Share puts your list in your Documents folder and brings in what your team has added. Settings turns the offers off.
- **Tags on blocks.** {{cmd:TAGS}} defines a tag (its kind, the values it may take, the blocks it applies to), sets it on the block references you select, and lists them as a schedule you can save as CSV. The definitions are kept in the DWG. See [Tags](topic:tags).
- **Drawing limits.** {{cmd:LIMITS}} sets a rectangle for the drawing: the grid fills it and zoom All shows it. The limits show as an outline and are saved in DWG and DXF, with the paper limits. See [Set the drawing limits](topic:drawing-limits).

### Working with other people and other programs

- **Turn a markup into a revision.** {{cmd:REDLINE}} reads the package MarkupCraft writes and lists every change. Accept or reject each with a note; the accepted ones get a revision cloud and a revision log in one undo step, and you save the answers file that closes the markups in MarkupCraft. See [Turn a markup into a revision](topic:redline-to-revision).
- **Drawings that git and Fossil can merge.** With {{ui:Merge-friendly files}} on in {{ui:Settings}} › {{ui:CadCraft}}, every object gets a key that never changes (files are about 10 percent bigger). `cadcraft merge base ours theirs` then merges two people's edits of one DWG or DXF object by object and reports only where two people changed the same thing. See [Merge two people's edits of one drawing](topic:merge-drawings).
- **What changed, in words.** In History, Compare gives a plain list: where things changed, how big the places are, what was added, removed or changed, and the text that was edited. See [Say in words what changed](topic:changes-in-words).
- **Bearings and angles.** Type a direction as a surveyor's bearing such as N45°23'30"E, or in degrees, minutes and seconds, anywhere an angle is asked for; AUNITS sets how angles are shown. See [Type and show bearings and angles](topic:bearings-and-angles).
- **Your own SHX fonts.** Give CadCraft a folder of SHX fonts and text styles that name them are drawn in them, on screen and in plots. See [Draw text in your own SHX fonts](topic:shx-fonts).
- **A diagram from text.** {{cmd:DIAGRAM}} reads a Mermaid flowchart, a PlantUML component diagram, D2 or a from-to list and draws blocks and connectors you can edit. See [Draw a diagram from text](topic:text-to-diagram).
- **OLE objects in a DWG.** {{cmd:OLELIST}} lists the OLE objects a DWG carries that CadCraft cannot place by itself, and places a copy of a picture where you say. See [Pictures](topic:pictures#objects-from-other-programs-ole).
- **Your calculations stay with the drawing.** Calc sheets and design reasons are kept in the DWG with the class table.

### Drafting without sight

- Turn on {{ui:Drafting without sight}} in {{ui:Settings}} (or type {{cmd:ACCESS}} and answer `On`). CadCraft speaks every command and result through your screen reader, describes the drawing and what is near the cursor, lets you move the cursor and pick points with the keyboard, and plays a sound for each snap and grip. Where your browser can recognize speech on your computer, commands can be spoken. See [Draft without sight](topic:draft-without-sight).

### In every app

- **Languages.** 54 languages; ten are new (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Languages beyond English are machine drafts until a native speaker reads them.
- **Input devices.** Trackpad, pen, 3D mouse, game controller and MIDI controls.
- **Toolbar rows and the property grid.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} offers Wrap, 2 rows or 1 row in the other apps. CadCraft keeps its own setting in {{ui:Settings}} › {{ui:CadCraft}} (see [Toolbar rows](topic:settings#toolbar-rows)). The shared property grid is in three other apps, not in CadCraft.
- **Problems, Live and add-ons.** A shared Problems panel that warns in every app, a Live view of who is where in CadCraft Studio (see [Work on one drawing together](topic:work-live)), and an add-on listing.
- **Connect your AI.** One connection from CadCraft Studio to all eight apps, with a read-only, suggest or edit level per app and a plain-words log of what the assistant did. CadCraft has no AI of its own, and Ask in every app uses the AI you connect.

## Fixed in 0.8.1

- **Properties showed 150 instead of 12'-6"** in feet-and-inches drawings. Fields the app reads itself keep their text again.
- **DWG files whose classes section was read as the wrong type** (GitHub cadcraft#5) now open correctly.
- **The crosshair no longer shows behind pop-ups.**
- **Studio and the packed editions can switch language at run time.** Before, they were English only. Not yet tested on every platform: tell us if the language does not change.
- **Tablets in portrait** give spare grid height to the canvas, and sheets mode starts at 760 px or less.
- **STRETCH with a crossing window, and LIMITS,** were reported on Studio 0.8.0 and were already right in the 0.8 web build; the reporter's installer was older. Studio 0.8.1 carries them.

## Not in this version yet

- **0.8 and 0.8.1 are not code-signed.** Windows may warn (choose {{ui:More info}}, then {{ui:Run anyway}}); on a Mac, right-click CadCraft Studio and choose {{ui:Open}}. Store builds are on hold, and the iPad and iPhone build was not rebuilt for 0.8.1.
- **Pen sketches and sketch photos** have been tried only on made-up photos and a mouse, not yet with a real pen, touch screen or hand sketch on paper.
- **Drafting without sight** has been tested with automated checks, not yet with a screen reader or a blind tester.
- **Sharing details** has not had a two-person check, and a Team Cloud Plan folder as the Documents folder is not built.
- **Merging** works for CadCraft's DWG and DXF files; the same for the other apps' files is not built.
- **Undo across windows:** CadCraft reports each finished step, but Studio has no single Undo for all apps yet; each app undoes its own steps.
- **A DWG's OLE objects** are kept but not drawn in place.
- **Reading plot style tables (CTB files)** from other programs is built but has not been checked against a file from another program.
- **Connect your AI:** one-click connect in Studio, the hosted connector for browser AI, your own API key inside Studio and the published MCP package are not promised in this release.

For the version before this one, see [What's new in 0.7](topic:whats-new-0-7).
