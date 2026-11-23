---
title: Command reference
summary: Every command in the CadCraft drafting app, with its aliases, the questions it asks, its options and defaults.
section: reference
order: 20
keywords: commands, aliases, command list, area, perimeter, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
---

Type a command name or an alias and press {{key:Enter}} or {{key:Space}}. Case does not matter, and a leading `_`, `-`, `.` or `'` is ignored. Type `HELP` (or `?`) to print a short list of every command in the command line history; press {{key:F1}} for this help.

How to read the prompts: options are in square brackets, and you choose one by typing its capital letters (`D` for Diameter). A default is in angle brackets; press {{key:Enter}} to accept it. Where a point is asked for, you can click or type any of the formats in [Coordinate and distance entry](topic:coordinate-entry). Where a distance is asked for, you can type a number or click two points.

Pressing {{key:Enter}} where a point or an object is required, and there is no default, ends the command. {{key:Esc}} cancels it. Whatever a command did is one undo step.

## Draw

### LINE

Aliases: `L`. Straight segments, each its own object.

- `Specify first point` (Enter: start from the last point you gave)
- `Specify next point [Undo]`, repeated. After two segments: `[Undo/Close]`.
- `U` takes back the last segment, `C` closes to the first point and ends. Enter ends.

### PLINE

Aliases: `PL`. One polyline of line and arc segments.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close once there are two segments)
- `A` switches to arcs: `Specify endpoint of arc [Line/CLose/Undo]`. Each arc continues tangent to the segment before. `L` goes back to lines, `CL` closes with an arc.
- Enter ends; the polyline stays open.

### CIRCLE

Aliases: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` asks `Specify diameter of circle`.
- `2P`: two ends of a diameter. `3P`: three points on the circle.
- `T` (also the command `TTR`, and {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, the second, then the radius (Enter: the last one). The circle touches both objects (lines, arcs, circles, polyline segments, also inside blocks); of the circles that do, the one touching nearest your picks. "Circle does not exist" when none fits.
- `TTT` (or {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): three objects; the circle touching all three, nearest your picks (three lines give the inner circle or an outer one, depending on where you pick).

### ARC

Aliases: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: an arc through three points.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. The arc runs counterclockwise from start to end.

### RECTANG

Aliases: `REC`, `RECTANGLE`. A closed polyline.

- `Specify first corner point`, `Specify other corner point`. Type `@width,height` for the second corner.

### POLYGON

Aliases: `POL`. A regular polygon as a closed polyline.

- `Enter number of sides <4>` (3 to 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: click or type a point; its distance sets the size and its direction turns the polygon.

### ELLIPSE

Aliases: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, then the distance to the other axis.
- `I` (`Isocircle`, only while {{cmd:ISODRAFT}} is on): center, then radius or `Diameter`: the ellipse a circle shows as on the current isometric plane.

### HATCH

Aliases: `H`, `BH`, `BHATCH`; or {{ui:Hatch}} in the toolbar. Prints the current pattern, scale and angle first.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, repeated (`Undo` once there is an area): each click adds the closed area round it, with the closed shapes inside it as islands. Enter makes one hatch of all of them.
- `S`: `Select closed objects` (closed polylines, circles, closed ellipses).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): the fill is a gradient instead of a pattern. See {{cmd:GRADIENT}} for its questions.

See [Hatch and fill areas](topic:hatch).

### GRADIENT

Aliases: `GD`. Fills an area with a gradient of one or two colors. It asks the gradient first, then goes on as {{cmd:HATCH}} does (`Pick internal point`, `S` for closed objects, {{key:Enter}} to finish).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, repeated; it prints the gradient as it is now each time.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, or one of them inverted (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). The first letters are enough.
- `O`: one color, then its tint from 0 to 1 (0 shades it to black, 0.5 is the color itself, 1 tints it to white). `TW`: the first and the second color. A color is a number from 1 to 255, three numbers such as `255,128,0`, or `#rrggbb`.
- `A`: the angle the gradient runs at. `C`: centered Yes or No (No moves the middle of the gradient to one side).
- It refuses a color or a type it does not know, and a tint outside 0 to 1.

{{cmd:HATCHEDIT}} `G` and Properties (Gradient) change a gradient later, or turn any hatch into one. A gradient is drawn on screen and plotted. DWG 2004 and later keep it as a real gradient hatch; DXF 2000 and DWG 2000 keep it for CadCraft, and other programs see a solid fill in the first color.

### HATCHGENERATEBOUNDARY

Aliases: `HGB`. Makes the boundary again from a hatch that lost it. `Select hatches` (or select them first), then `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Each loop of the hatch becomes a closed polyline on the hatch's layer; the new polylines are left selected. A curved edge comes back as the short straight pieces the hatch keeps.
- With Yes the hatch follows its new boundary, as a hatch made with {{cmd:HATCH}} does. One undo step.
- It says so when no hatch was selected.

### POINT

Aliases: `PO`; or {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Point objects, one per click, until Enter.

- `Specify a point`

### XLINE

Aliases: `XL`; or {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Construction lines, endless both ways. See [Construction lines and rays](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, then `Specify through point` for each line, until Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` asks `Select a line object` first.
- `B`: `Specify angle vertex point`, `Specify angle start point`, then `Specify angle end point` for each line.
- `O`: `Specify offset distance [Through] <Through>`, then `Select a line object` and `Specify side to offset` (or `Specify through point`) for each line.

### RAY

No aliases; or {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, then `Specify through point` for each ray, until Enter.

### TEXT

Aliases: `DT`, `DTEXT`; or {{ui:Text}} in the toolbar. Single-line text; each line is its own object.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, then `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, repeated: each Enter starts the next line below. Enter on an empty line ends. {{key:Space}} types a space here.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} puts marks on a line, arc, circle, polyline, spline or ellipse that cut it into equal parts. Pick the object, then give the number of parts (2 to 32767). An open object gets one mark fewer than parts; a closed one gets a mark on its start too. The object itself is not cut. The marks are points; `Block` asks for a block of this drawing instead and whether it turns to follow the object. Lengths along splines and ellipses are measured along short chords. It refuses text, hatches and other objects that have no length.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} puts a mark every given length along a line, arc, circle, polyline, spline or ellipse, counting from the end nearest where you picked it (a closed object: from its start). Give the length by typing it or by two points. The far end of an open object gets no mark. `Block` places a block at each mark instead of a point. It refuses a length of 0, one longer than the object, and one that would make more than 32767 marks.

### BOUNDARY

Aliases: `BO`, `BPOLY`. {{cmd:BOUNDARY}} makes a closed polyline round the area that holds the point you pick, from whatever lines, arcs, circles, polylines and curves bound it on screen. Pieces that lie on an arc or circle come back as arc segments; pieces of ellipses and splines come back as short straight segments. With `Islands` on (the start setting) each closed area inside it gets its own polyline too. Keep picking points; Enter ends. The objects that bound the area are left as they are. It says so when no closed area holds the point.

### BLEND

{{cmd:BLEND}} draws a spline between the ends of two open curves. Pick each curve near the end to join. `CONtinuity` chooses `Tangent` (the spline leaves and arrives along both curves) or `Smooth` (it also bends the way they bend at the ends); the choice is kept for the session. The two curves are not changed. It refuses closed objects and two ends that already meet.

### REGION

Alias: `REG`. {{cmd:REGION}} turns closed objects into regions: flat areas you can join, cut and measure. Select circles, closed polylines, closed ellipses or closed splines, or lines, arcs and open polylines that close a loop end to end; each loop becomes one region and replaces the objects it came from. Arcs stay arcs; ellipses and splines become short straight segments. What is not closed and closes no loop is left as it is, and it says how many. In the drawing a region is one or more closed polylines held together as an unnamed group, so a click selects the whole region and a copy is a region of its own; other programs that open the file see closed polylines.

With regions in the drawing, {{cmd:UNION}}, {{cmd:SUBTRACT}} and {{cmd:INTERSECT}} on the 2D tab work on regions: `UNION` joins the selected regions into one (regions that are apart become one region of several outlines), `SUBTRACT` asks for the regions to subtract from and then the ones to take away (a hole stays part of the region), `INTERSECT` keeps the area they all share. Each says the area of the result and is one undo step. They refuse when nothing would be left or nothing is shared. On the 3D tab, and in a drawing with no regions, the same commands work on solids as before.

## Modify


Aliases: `MT`, `T`; or {{ui:Paragraph}} in the toolbar. Paragraph text that wraps to a width, typed in place.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: the width across the two corners is where the text wraps. `H` asks `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` and skips the second corner.
- Then a box opens on the drawing: type, {{key:Enter}} for a new paragraph, {{key:Mod+Enter}} or a click outside to finish, {{key:Esc}} to cancel. Its bar sets height, line spacing, width and justification. See [Add text and labels](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliases: `ED`, `DDEDIT`; or double-click a text. `Select a text to edit`, repeated until {{key:Enter}}: each opens in the same box. Started on a selected or double-clicked text, it edits that one and ends.
### ERASE

Aliases: `E`, `DELETE`; or press {{key:Delete}} with objects selected.

- `Select objects` (skipped when objects are already selected)

### MOVE

Aliases: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, typed as `dx,dy`.

### COPY

Aliases: `CO`, `CP`. Copies as many times as you give points.

`Array` at the second-point prompt makes a row in one go: give the number of items (the original counts as one), then the point where the first copy goes; the others follow at the same spacing. `Fit` makes that point the place of the last copy instead, with the others spread evenly between.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, repeated until Enter. `U` takes back the last copy.

### ROTATE

Aliases: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: degrees, counterclockwise positive; or click a point to rotate toward it.

### SCALE

Aliases: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: type a factor such as `0.5` or `2`. A clicked point gives its distance from the base point as the factor.

### MIRROR

Aliases: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliases: `AL`; or {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- With two pairs: `Scale objects based on alignment points? [Yes/No] <N>`

See [Align objects](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (or the selection), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` asks for the point. The selection stays.

### DISTRIBUTE

- `Select objects` (three at least), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. The outer two stay; the selection stays.

### ALIGNPANEL

Aliases: `ALP`; or {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Opens the panel that runs ALIGNTO and DISTRIBUTE by clicks.

### LASER

Aliases: `LASERCUT`; or {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Opens the Laser panel over the drawing: what each layer does (cut, score, engrave, fill, picture), the preview, GRBL G-code to save, and framing and sending over Web Serial. See [Send a drawing to a laser](topic:laser-cutting).

### STRETCH

Aliases: `S`; or {{ui:Stretch}}. `Select objects to stretch`: drag crossing windows (or type `C`) over the ends to move. `Specify base point [Displacement]`, `Specify second point`. Points inside the windows move: line ends, polyline vertices (arc segments keep their height), dimension points; circles, ellipses, text, points and blocks move whole when their center or insertion point is inside. A selection made before the command keeps the crossing windows (and lassos) that made it, so they stretch the same way. Without a window, the objects move whole.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliases: `AR`; or {{ui:Array}}. `Select objects`, then `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY only).

- Rectangular starts at 4 columns × 3 rows, spaced 1.5 times the objects' size, shown as a preview. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` asks columns and rows, `S` the distances between columns and between rows (negative goes left or down), `COL` and `R` one direction each.
- Polar asks `Specify center point of array`, starts at 6 items all the way round, rotated. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` items, `F` the angle to fill (+ counterclockwise, − clockwise), `ROT` Yes or No.
- {{key:Enter}} (eXit) makes the copies, as plain objects. One undo step.
- `AS` (ASsociative) switches between plain copies and an array that stays editable: one object you change later with {{cmd:ARRAYEDIT}}, by its grips or in Properties. The choice is remembered ({{cmd:ARRAYASSOCIATIVITY}}); it starts on plain copies.

### ARRAYPATH

Copies along a curve. `Select objects`, then `Select path curve`: a line, arc, circle, ellipse, polyline or spline (not one of the objects being arrayed). The path starts at its end nearer the objects, and the first item is the objects where they are.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, with a preview. `M`: `Divide` spreads the items evenly over the whole path, `Measure` puts one every so far along it. `I`: the number of items (with Measure, 0 means as many as fit; a number past the end of the path is held to what fits). `SP`: the distance between items along the path (switches to Measure). `AL`: Yes turns each item to follow the path, No keeps them upright.
- `AS` as in {{cmd:ARRAY}}. With it on, the array keeps its own copy of the path's shape: editing the path curve afterwards does not move the items.
- It refuses a path that is not a curve, and one item.

### ARRAYEDIT

Changes an array made with ASsociative. `Select array` (or select it first). It prints what the array is now, then asks until {{key:Enter}}:

- Rectangular: `COL` columns and their spacing, `R` rows and their spacing, `A` the angle the columns run at.
- Polar: `I` items, `F` the fill angle, `ROT` rotate items Yes or No.
- Path: `M` Divide or Measure, `I` items, `SP` spacing, `AL` align with the path.
- `S` (Source) opens the objects the array repeats, on their own, like the block editor. Draw and edit there; {{cmd:ARRAYCLOSE}} saves or discards, and every item follows.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, then click the items to replace, {{key:Enter}}. Those items show the replacement instead; the replacement objects leave the drawing and live in the array. `RES` (RESet) shows the source objects in every item again.
- Each change is one undo step. It refuses plain copies, a plain block reference and an array on a locked layer.

The same numbers are in Properties under Array, and the array has grips: its base point moves it, the grip at the second item sets the spacing, the grip past the last item sets the count (polar: the second item sets how many items, the last item the fill angle). {{cmd:EXPLODE}} turns an array back into plain copies.

### ARRAYCLOSE

Ends {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. It says so when no array's source objects are open. {{cmd:BCLOSE}} does the same.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Sets what {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR and {{cmd:ARRAYPATH}} start on; their option `AS` changes the same setting. Remembered in this browser.

### OFFSET

Aliases: `O`. Lines, arcs, circles and polylines.

Where a polyline moves outward and its straight segments come apart at a corner, {{cmd:OFFSETGAPTYPE}} decides how the gap is closed.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, then `Specify point on side to offset` (or, with Through, `Specify through point`), repeated until Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: how {{cmd:OFFSET}} closes the gaps at the outer corners of a polyline. `0` extends the segments until they meet (the start setting), `1` joins them with an arc round the old corner, `2` with a straight cut. Inner corners and arc segments are not affected. Kept for this session.

### EXTRIM

{{cmd:EXTRIM}} trims everything on one side of an edge. Pick the cutting edge (a line, arc, circle, polyline, ellipse, spline or construction line), then pick a point on the side to clear: every line, arc, circle, polyline and construction line that crosses the edge loses its part on that side, where it starts at the edge. While you choose the side, the pieces that would go follow the pointer. For a closed edge the sides are inside and outside. Objects that only touch the edge, and text, hatches, splines and ellipses that cross it, are left as they are. One undo step.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: how {{cmd:TRIM}} and {{cmd:EXTEND}} start. `1` Quick: every object is a cutting edge or boundary. `0` Standard: they ask for the edges first. Also `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliases: `TR`. Prints `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` first. In Quick mode every visible object is a cutting edge, and an object nothing crosses is erased; in Standard mode it asks `Select cutting edges (Enter = every object)` first and cuts only at those.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, repeated: click the piece to remove (it shows grey and dashed while the pointer rests on it), drag a path through several pieces (all go in one step), or click two empty spots for a fence between them. {{key:Shift}} extends instead. `T` chooses cutting edges (Standard mode), `F` asks fence points, `C` two window corners (pieces partly inside go), `O` asks `Enter a trim mode option [Quick/Standard]`, `E` asks `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` erases objects you select, `U` undoes the last pick or drag. Enter ends. See [Trim and extend](topic:trim-and-extend).

- A click on a hatch cuts the hatch: the cutting edges split the hatched area, and the piece you clicked is taken away (no drawn outline is left where it was). The hatch keeps its pattern or gradient; a hatch that was linked to its boundary is not linked afterwards, because it no longer fills it. It says so when no cutting edge splits the hatch there, when the click is off the hatch, and when nothing would be left (use {{cmd:ERASE}}). A dragged path or fence does not cut hatches.

### EXTEND

Aliases: `EX`. The same as TRIM the other way round: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. A click lengthens the end nearest it to the next boundary; a dragged path or fence lengthens every object it crosses; {{key:Shift}} trims. `B` chooses boundary edges (Standard mode). Mode and Edge are shared with TRIM.

### LINKVIEWS

Aliases: `SYNCVIEWS`; or {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, or the link icon on the drawing tabs. `Link the panes' views [ON/OFF]` (Enter takes the other state): while on, a pan or zoom in the active pane moves every pane showing the same kind of space. See [Split the screen](topic:split-screen).

### OPENIN3D

No aliases; or {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} where the 3D modeling app takes a handed-over drawing. Opens it there in a new tab, as a DWG (nothing is uploaded). If the browser blocks the tab, it says so.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: what pressing and dragging on an empty spot draws. The same as Settings › CadCraft › Dragging to select. See [Lasso selection](topic:lasso-selection).

### FILLET

Aliases: `F`. Lines, arcs, circles and polylines. Prints `Current settings: Mode = TRIM, Radius = 0` first.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` asks `Specify fillet radius <last>`. `T` asks `Enter Trim mode option [Trim/No trim]`: with No trim the objects stay as they are and only the arc is added.
  - `M` keeps the command going for more corners until {{key:Enter}}; `U` takes back the last corner without leaving the command.
  - `P` asks `Select 2D polyline [Radius]` and rounds every corner where two straight segments meet. Fillets it already has are replaced by the new radius; radius 0 takes them out. Corners whose sides are too short for the radius are left and counted.
- `Select second object or shift-select to apply corner [Radius]`. Hold {{key:Shift}} as you click for a sharp corner, whatever the radius.

Click each object on the part you want to keep. Two lines that do not meet are extended. Two parallel lines get a half circle across the gap, at the end of the first line nearest your click. A circle is never cut. Two segments of one polyline next to each other get the arc inside the polyline; a polyline and another object work when the cut lands on the polyline's first or last segment.

### CHAMFER

Aliases: `CHA`. Lines and the straight segments of polylines. Prints the current distances (or length and angle) first.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` asks `Specify first chamfer distance <last>` and `Specify second chamfer distance <the first>`: the first is cut from the first line you pick, the second from the other.
  - `A` asks `Specify chamfer length on the first line` and `Specify chamfer angle from the first line`.
  - `E` (mEthod) chooses which of the two the next chamfer uses. `T`, `M`, `U` and `P` work as in {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+click makes a sharp corner.

A distance longer than the line is refused (`Distance is too large.`).

### BREAK and BREAKATPOINT

Aliases: `BR`. `Select object` (where you click is the first point), `Specify second break point [First point]`; `F` asks `Specify first break point` and `Specify second break point`. The part between goes; on a circle, counter-clockwise from the first point. BREAKATPOINT asks `Specify break point` and splits the object in two there (not a circle).

### LENGTHEN

Aliases: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: a pick prints `Current length` (and an arc's included angle) and asks again. `DE` asks `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` drags. Then `Select an object to change [Undo]`, repeated: the end nearest the click moves. Lines, arcs and open polylines.

### JOIN

Aliases: `J`. `Select objects to join`. Lines, arcs and open polylines that meet end to end become polylines (closed when the chain closes); lines on one line become one line; arcs of one circle become one arc or the circle. The history says how many objects joined and how many did not.

### MATCHPROP

Aliases: `MA`, `PAINTER`. `Select source object`, then `Select destination objects [Settings]` and {{key:Enter}}. Copies layer and color, and between objects of the same kind the text height and width, the dimension sizes, or the hatch pattern. `S` asks `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, repeated until {{key:Enter}}; the choice is remembered for the session.

### EXPLODE

Aliases: `X`. Polylines become lines and arcs, block references become their objects, dimensions become lines, arrowheads and text. An array that stays editable ({{cmd:ARRAYEDIT}}) becomes plain copies of its objects.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} gives the selected objects a name they share. Select the objects, then type a name (no spaces; `?` lists the groups; Enter makes an unnamed group) and, for a named group, an optional description. From then on a click on one of them, or a window that takes one, selects them all, so they move, copy and erase together; each object is still its own object. An object can be in several groups. A copy of a whole group is a new unnamed group; a copy of one member on its own joins the group. Groups belong to the space they were made in (the model or a sheet). They are kept when you save as DWG or DXF and open the file again in CadCraft; DXF 2000 files also carry them as group objects for other programs, and groups made in another program are read when a DXF or DWG is opened.

### UNGROUP

{{cmd:UNGROUP}} takes groups apart: select objects of the groups (each group they are in is taken apart) or type `Name` and the group's name. The objects stay in the drawing. One undo step brings the groups back.

### GROUPEDIT

{{cmd:GROUPEDIT}} changes one group. Pick one of its objects, or `Name` and its name; a group that is already selected is taken as it is. Then: `Add` objects (picked one at a time, not group by group), `Remove` objects, `REName` the group, change its `Description`, or set `Selectable` (whether a click on one object selects the whole group). `eXit` or Enter ends. A group with no objects left is gone.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: with `1` (the start setting) a click or a window on a grouped object selects its whole group; with `0` single objects, so you can edit one member. Kept for this session.

## Clipboard

CadCraft's own clipboard: it works within a drawing, between drawings and between CadCraft tabs in this browser. See [Copy, paste and duplicate](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, or {{ui:Copy}} in the {{ui:Edit}} group. Copies objects to the clipboard, with the blocks and layers they use. The objects stay selected.

- `Select objects to copy` (skipped when objects are already selected)

### CUTCLIP

{{key:Mod+X}}, or {{ui:Cut}} in the {{ui:More}} menu. Copies objects to the clipboard, then erases them (one undo step).

- `Select objects to cut` (skipped when objects are already selected)

### COPYBASE

Copies objects to the clipboard with a base point you pick; pasting places that point.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, or {{ui:Paste}} in the {{ui:Edit}} group. The copy follows the cursor, hanging from the lower-left corner of its extents (or its center, or the `COPYBASE` point; see [CadCraft settings](topic:settings)).

- `Specify insertion point`

The pasted objects are selected. A block the drawing already has under the same name keeps this drawing's definition.

When an area copied in MarkupCraft is newer than what CadCraft copied (and less than 6 hours old), {{key:Mod+V}} and `PASTECLIP` paste that area instead: see `PASTEAREA`.

### PASTEAREA

Aliases: `PAREA`. {{ui:Paste a copied area}} in the {{ui:More}} menu. Pastes an area copied with {{ui:Copy area}} in MarkupCraft as a picture at its true size. See [Pictures in a drawing](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (only when the sheet had no drawing scale): a number, {{key:Enter}} for the paper size, or `P`, then `First point on the pasted area`, `Second point on the pasted area` and their true distance.

### PASTEORIG

{{key:Mod+Shift+V}}, or {{ui:Paste in place}} in the {{ui:More}} menu. Pastes at the coordinates the objects were copied from. Asks nothing.

### DUPLICATE

Aliases: `DUP`. {{key:Mod+D}}, or {{ui:Duplicate and move}} in the {{ui:More}} menu. A copy of the objects moves with the pointer from where it is; {{key:Esc}} leaves nothing. Does not use the clipboard.

- `Select objects to duplicate` (skipped when objects are already selected)
- `Specify where the copy goes (Esc leaves nothing)`: click, type a point, `@dx,dy` (from where the pointer was), or a distance toward the cursor.

### SELECT

Asks `Select objects` (with every option below) and leaves what you chose selected, for the next command or for `P` later.

### QSELECT

Aliases: `QS`. In the browser, the {{ui:Quick select}} dialog (see [Select objects](topic:select-objects#select-by-a-rule-quick-select)). Without it, the command line asks `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` and `Enter value`. The matches become the selection.

### SELECTSIMILAR

Aliases: `SIM`. `Select objects [SEttings]` (or the current selection): selects every object of the same type with the same layer and color (and block name, hatch pattern). `SE` asks `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, repeated until {{key:Enter}}.

### FIND

No aliases; or {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. In the browser, the {{ui:Find and replace}} dialog (see [Add text and labels](topic:text#find-and-replace-words)). Without it: `Enter text to find`, then `Enter replacement text (Enter: select what is found)`. Looks in text, attribute values and dimension text, on the open tab or in the selection.

### SELECTALL and DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selects every object you can edit on the open tab. `DESELECT` (aliases `AI_DESELECT`, `SELECTNONE`; or {{key:Esc}}) clears the selection.

## Dimensions

### DIMLINEAR

Aliases: `DLI`, `DIMLIN`. Horizontal or vertical distance.

- `Specify first extension line origin [Select object]` (Enter or `S`: `Select object to dimension`, then click a line, arc, circle or polyline segment)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` asks for text (`<>` is the measured value), `H` and `V` fix the direction, `R` asks `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliases: `DAL`, `DIMALI`. The true distance between two points.

- Origins as in {{cmd:DIMLINEAR}}, then `Specify dimension line location [Text]`.

### DIMANGULAR

Aliases: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arc: its angle. Circle: `Specify second angle endpoint`. Line: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: click inside the angle to measure.

### DIMRADIUS and DIMDIAMETER

Aliases: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, then `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliases: `DCO`, `DIMCONT`. Continues from the last linear or aligned dimension made (or asks `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, repeated until Enter.

### DIMBASELINE

Aliases: `DBA`, `DIMBASE`. Like {{cmd:DIMCONTINUE}}, but every dimension starts from the first origin and is stacked further out.

### DIMORDINATE

Aliases: `DOR`, `DIMORD`. `Specify feature location`, then `Specify leader endpoint [Xdatum/Ydatum/Text]`. Writes how far the feature is from the UCS origin along X or along Y, on a leader: a leader that runs mostly up or down reads X, one that runs sideways reads Y; `Xdatum` and `Ydatum` fix which. Set the origin first with {{cmd:UCS}} (without one it is the drawing's 0,0). Grips move the feature, the origin and the leader's end, and the value follows. Saved as a real ordinate dimension in DWG and DXF. Refuses a leader end on the feature itself.

### DIMARC

Aliases: `DAR`. `Select arc or polyline arc segment`, then `Specify arc length dimension location [Text]`. Measures along the arc (not the chord) and writes the arc symbol before the value. Refuses a full circle, a line or a straight polyline segment. A DWG keeps it as an arc length dimension; a DXF keeps it as an angular dimension with the length as its text, and CadCraft opens it as an arc length dimension again.

### DIMJOGGED

Aliases: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. A radius dimension for a curve whose center is far away or off the sheet: the dimension line starts at the point you give instead of the center, with a jog in it, and still writes the true radius. A DWG keeps it as a jogged radius dimension; a DXF keeps it as a radius dimension, and CadCraft opens it jogged again.

### DIMJOGLINE

Aliases: `DJL`. `Select dimension to add jog [Remove]`, then `Specify jog location (or press Enter)`. Puts a jog symbol on the line of a linear or aligned dimension, to show the distance is not drawn to scale; the value does not change. `Remove` takes it off. Refuses other kinds of dimension.

### QDIM

No aliases. `Select geometry to dimension`, then `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Dimensions several objects in one step, from the ends of lines and polyline segments, centers of circles and arcs, points and block references. A position above or below the objects measures across, one beside them measures up. `Continuous` chains the points, `Baseline` measures all from the first, `Staggered` nests pairs from the middle out, `Ordinate` gives each point its distance from the datum (`datumPoint` picks a new one), `Radius` and `Diameter` dimension every circle and arc picked. The mode is remembered. Everything it makes is one undo step. Says so when there are fewer than two points, or no arcs or circles for Radius and Diameter.

### DIMBREAK

Aliases: `DBREAK`. `Select dimensions to add or remove breaks`, then `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` leaves a gap in the dimension and extension lines wherever another object crosses them, and works the gaps out again when those objects or the dimension move. `Manual` (one dimension) asks two points and leaves a gap between them. `Remove` takes every gap off. The gap is 1.5 times the dimension's text height.

### DIMSPACE

No aliases. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Moves the dimension lines of parallel linear and aligned dimensions (or angular ones about the same vertex) so they sit the same distance apart, counted from the base dimension, each on the side it is on. `0` lines them up with the base; `Auto` is twice the base dimension's text height. Dimensions that are not parallel to the base are left alone.

### DIMINSPECT

No aliases. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Draws a frame round the value with a label before it and the inspection rate after it. `remove` takes the frame off. Tolerance text stays with the value.

### DIMOVERRIDE

Aliases: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, again until Enter, then `Select dimensions`. Changes those settings on the selected dimensions only; the dimension style is not changed. Takes the variables that are a number or a switch (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` puts the selected dimensions back on their style. Refuses a name that is not such a variable and a value it cannot take.

### DIMREASSOCIATE

Aliases: `DRE`, `DIMREASSOC`. `Select dimensions`, then for each one its extension line origins (`Specify first extension line origin on an object`: snap to an end or the middle of a line, a polyline corner, a center; Enter keeps that point free), or for a radius, diameter, jogged radius or arc length dimension `Select arc or circle`. The dimension is then tied to those objects: when they move or change size it follows in the same undo step and measures again. Moving a tied point by hand, or erasing the object, ends that tie. The tie is saved in DWG and DXF 2000 as CadCraft's own data; other programs see an ordinary dimension.

### DIMDISASSOCIATE

Aliases: `DDA`, `DIMDISASSOC`. `Select dimensions`. Frees them from the objects they are tied to; nothing moves.

### CENTERMARK

Aliases: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, again until Enter. Draws a cross at the center and four center lines to just beyond the curve (linetype CENTER), as plain lines on the current layer; sized from the arrow size and overall scale of the current dimension settings, turned with the UCS. They do not follow the circle if it moves.

### CENTERLINE

Aliases: `CL`. `Select first line`, `Select second line`. Draws a line midway between two lines (along the bisector when they meet), a little longer than they are, in linetype CENTER. A plain line: it does not follow the two lines.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

No aliases. Each asks `Enter new value for … <current>` and sets that size for **new** dimensions: overall scale, text height, arrow size, decimal places (up to 8), gap round the text, extension beyond the dimension line, offset from the origin. See [Set dimension sizes](topic:dimension-settings).

### DIMLUNIT

Dimension setting: the format of new dimensions only (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional).

### DIMSTYLE and -DIMSTYLE

Aliases: `DST`, `DDIM`, `D`. The Dimension style manager: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` on the command line: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. See [Set dimension sizes](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, then the dimensions (or those already selected). New asks for the text (`<>` = the measurement); Rotate for an angle (0 puts the text back); Oblique for the extension lines' angle from the X axis (Enter = none; linear and aligned dimensions only). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. See [Set dimension sizes](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliases: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, or with dimensions selected `Units in the text of the selected dimensions`. Writes the measured length in that unit with the unit after it (DIMLFAC and a DIMPOST suffix); `D` goes back to drawing units. See [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliases: `RC`. Prints `Arc length: … Type: …`, then `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular asks `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand follows the pointer until a click or {{key:Enter}}; `O` asks `Select object` and `Reverse direction? [Yes/No] <N>` and turns the object into the cloud. `A` asks `Specify the length of each arc`. `R`, `P` and `F` choose the type for the next cloud. The result is a closed polyline of arcs.

### MLEADER

Aliases: `MLD`; or {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, then the text in the in-place box (or, without it, `Enter text (an empty line ends)`). `Block` asks a block name first and the multileader shows that block instead of text. More leader lines: {{cmd:MLEADEREDIT}}. Saved as a real multileader in DWG; DXF keeps the lines, arrowhead and text it draws.

### MLEADEREDIT

Aliases: `MLE`. `Select a multileader`, then `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: each point adds a leader line from a new arrowhead to the same landing, until Enter. `Remove leaders` then takes off the leader line you click (a multileader keeps at least one). `Block content` asks a block name and shows that block instead of the text (its attributes are asked for); `Text content` puts text back. Each leader line has its own grip. A DWG keeps every leader line and the block in one multileader.

### MLEADERALIGN

Aliases: `MLA`. `Select multileaders`, then `Select multileader to align to [Distribute/Spacing/Use current spacing]` and `Specify direction`. Moves the other multileaders' landings (and their text or block) onto the line through the picked one's landing in that direction; the arrowheads stay where they point. `Spacing` also sets them an equal distance apart; `Distribute` asks two points and spreads them evenly between. Needs at least two multileaders.

### MLEADERCOLLECT

Aliases: `MLC`. `Select multileaders`, then `Specify collected multileader location [Vertical/Horizontal]` (Enter keeps the first one's place). Makes one multileader out of several: block content goes into a new block that holds every block side by side or one under the other; text content becomes one note with a line for each. The first multileader keeps its leader lines; the others are removed. Refuses a mix of text and block content.

### TABLE

Aliases: `TB`; or {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Makes a table: one object that you move, copy, rotate, scale and plot like any other, with its cells kept as data.

- `Number of data rows or [Paste/File/Style] <3>`, then `Number of columns <3>`, `Text height` and `Top left corner of the table`. The table gets a title row (one merged cell) and a header row above the data rows.
- `P`: a table from spreadsheet cells on the clipboard (text with a tab between cells). Pressing {{key:Ctrl+V}} with such cells on the clipboard does the same, unless CadCraft's own copy is the newer one (or CadCraft cannot tell: then it pastes its own copy and says so). `F`: a table from a `.csv` or tab-separated file. The first row becomes the header row; column widths fit the text.
- `S`: choose the table style for this table (see {{cmd:TABLESTYLE}}).
- It refuses a row or column count that is not a whole number, and more cells than a table holds (2,000 rows, 200 columns, 40,000 cells).
- {{cmd:EXPLODE}} turns a table into lines and text. Saved as DWG a table is a real table object other programs can edit; saved as DXF it is a block that draws it, and CadCraft opens it as a table again.

### TABLEDIT

Aliases: `TABLEEDIT`, `TABEDIT`; or double-click a cell. Edits a table.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Click a cell, or with a table selected type its name (`B3`: column B, row 3; the title row is row 1). In the browser a box opens over the cell: {{key:Enter}} keeps the text, {{key:Tab}} goes to the next cell, {{key:Alt+Enter}} starts a new line, {{key:Esc}} leaves the cell as it was.
- A text that starts with `=` is a formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, with `+ - * / ^`, brackets and functions such as `sqrt` and `round`. The cell shows the value; a formula that names its own cell, a cell outside the table or a cell without a number shows `####` and the command line says why.
- `R` / `C`: `Insert` or `Delete` rows or columns at a picked cell (how many, and above or below, left or right). Formulas follow the cells they name.
- `S`: the column's width and the row's height. A row is never lower than its text needs. A selected table also has a grip on each column's and each row's edge.
- `M`: merge from one picked cell to another; `U`: unmerge. `A`: alignment (`TL` top left … `MC` middle center … `BR` bottom right). `H`: this cell's own text height (0 = the style's). `K`: make the row a title, header or data row. `CL`: empty the cell.
- It refuses a table on a locked layer, deleting every row or column, and a merge that would cut another merged cell in two.

### TABLESTYLE

Aliases: `TS`. Lists the table styles with how many tables use each, then `Table style: [New/Set/Edit/Delete/Apply]`.

- A style holds the text height and alignment of title, header and data rows, the cell margin, and which borders are drawn (outer, between rows, between columns).
- `N` makes a style from the current one and makes it current; `S` sets the current style (new tables take it); `E` edits one: tables that use it are redrawn; `A` gives selected tables the current style; `D` deletes one (not Standard, not the current one; tables that used it keep their look).
- Styles are saved with the drawing (DWG and DXF).

### TABLEEXPORT

Saves what a table shows as a CSV file (a formula as its value). `Select a table`, or select one first. Text cells that start with `=`, `+`, `-` or `@` get a leading `'` so a spreadsheet does not run them.

### TABLEPASTE

Aliases: `PASTETABLE`. Makes a table from spreadsheet cells on the clipboard, then asks its top left corner. The same as {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliases: `DL`. `Data link: [New/List/Remove] <New>`. `N` asks for a CSV file, places a table of it and remembers the file's name; `L` lists the links with their file, size, when it was read and how many tables use it; `R` removes a link (its tables stay as plain tables).

### DATALINKUPDATE

Aliases: `DLU`. Reads a data link's file again and refills the tables linked to it (rows and columns are added or removed to match). A browser cannot open a file by itself, so it asks you to choose the file again. With several links it asks which one.

### FIELD

Puts a field in the drawing: text that works itself out. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: now, or the saved, created or plotted date, and a format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: the file name, with or without its extension. `S`: the sheet's number, its title, or how many sheets there are. `P`: a drawing property by name (see {{cmd:DWGPROPS}}). `O`: pick an object, then what to read (area, length, perimeter, radius, diameter, layer, name, x, y, text, rotation, color) and the decimals. `E`: a formula. `C`: a text with codes typed as they are, such as `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Then `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: a picked text gets the field added after what it holds; a table cell likewise; a block reference asks which attribute; {{key:Enter}} asks a height and a point for a new text.
- On screen a field has a light gray background; a plot and a PDF never have it. Typing over a field's text by hand ends the field. A field that cannot be worked out shows `####`.
- An object's field finds its object by the key CadCraft keeps on objects (Settings › CadCraft › Merge-friendly files); with keys turned off it refuses.

### UPDATEFIELD

Aliases: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` sets when fields update by themselves: type the letters of `O` open, `S` save, `P` plot, `R` regen (all four to start with), or `NONE`.

### DWGPROPS

Aliases: `DRAWINGPROPS`. Lists the drawing's properties, then `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. The first six are the ones the {{ui:Drawing details}} panel shows; `U` adds your own name and value, `R` removes one. Fields read them (`%<prop:title>%`, `%<prop:Client>%`) and follow at once. It refuses a custom name that is one of the built-in ones or holds `%`, `<`, `>`, a quote or a backslash.

## Parametric

See [Constrain a drawing](topic:constraints) and [Use parameters and equations](topic:parameters). Constraints work on the {{ui:Model}} tab.

### GEOMCONSTRAINT and the GC commands

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, then that command's prompts.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (the second one moves).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT and the DC commands

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (a number, an expression, or `name=expression`).
- {{cmd:DCALIGNED}}: as above, with `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` asks the distance and angle tolerances.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; their constraints go.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, then `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (aliases `PAR`, `PARAM`) opens the {{ui:Parameters}} panel. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Downloads a macro (.swb) that rebuilds the model as one constrained sketch in SolidWorks. See [Move sketches to and from other part modelers](topic:solidworks-sketches).

## Blocks

### ANNOSCALE

Aliases: `CANNOSCALE`. Says the drawing's annotation scale and how many annotative objects it holds, then asks `New annotation scale`: type `1:50`, `1:100`, `2:1`, a bare number (`50` is 1:50) or the name of one of the drawing's own scales. Every annotative text and dimension is resized so it prints at the same size at the new scale, in one undo step; objects that are not annotative are left alone, and so is an object that keeps a list of scales without the new one ({{cmd:OBJECTSCALE}}). See [Units, papers and scales](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliases: `OBJSCALE`. `Select annotative objects`, then `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. An annotative text or dimension keeps a list of annotation scales. `Add` and `Delete` ask a scale (`1:50`, `2:1`, a bare number, or the name of one of the drawing's own scales); `Current scale` adds the drawing's annotation scale; `List` prints each object's scales. A viewport whose scale is in an object's list shows the object at the size that prints its paper height at that scale, on screen and in plots. The last scale cannot be deleted. Objects that are not annotative are left out: turn Annotative on in Properties first. The lists are saved in DWG and DXF as CadCraft's own data. See [Units, papers and scales](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliases: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. On (as a drawing starts): an annotative object also shows in a viewport, or in the model, whose scale is not in its list, at the size it has. Off: it is not shown there, and cannot be picked in the model. The switch is one undo step; it is not kept in the file.

### SCALELISTEDIT

Aliases: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` until {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit and Delete ask for the scale's name. The drawing's own scales join the viewport and plot scale lists and are saved with the drawing. See [Units, papers and scales](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: points the curve passes through; `Close`, `Undo`, then `Start tangent` and `End tangent` (a point, or {{key:Enter}}). Method › Control vertices asks a degree (1 to 5) and draws from a control polygon. Object turns polylines into splines through their vertices. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` for several objects; lines, arcs and splines are offered as polylines first. See [Splines and polylines](topic:splines).

### BLOCK

Aliases: `B`, `BMAKE`.

- `Enter block name`. If it exists: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. They are replaced by one reference to the new block.

### WBLOCK

Aliases: `W`, `-WBLOCK`. Writes a block, some objects or the whole drawing as a new DWG or DXF file. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (it becomes the new drawing's origin), `Select objects`, then `File format [DWG/DXF/R12 DXF]` and `File name for the new drawing`, then `What to do with the objects [Retain/Convert to block/Delete]`. Convert replaces them with one reference to a block of the file's name; Delete removes them.
- **Block**: `Block to write out`. The block's own objects, with its base point as the origin, nested blocks included.
- **Entire drawing**: every object in model space. Sheets are not written; use {{cmd:SAVEAS}} for a copy that keeps them.

The new file holds only the layers, linetypes, text and dimension styles and blocks that its objects use, and the drawing's units. The version of a DWG is the one {{cmd:SAVEAS}} last used. In the browser the file downloads; in Studio the save dialog opens.

### ATTDEF

Aliases: `ATT`, `DDATTDEF`, `-ATTDEF`; or {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Prints the modes, then `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` when constant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} takes attribute definitions into the block.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, or double-click a reference with attributes; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, then the {{ui:Edit attributes}} dialog. `ATTEDIT` (`ATE`, `-ATTEDIT`): the same reference, then `<prompt> (<TAG>) <value>` for each attribute; {{key:Enter}} keeps a value. See [Attributes](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Values kept; new attributes get their default, removed ones go, placements reset.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. The dialog: block, attributes (tag, prompt, default, modes, order), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (or the selection). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; the bar's {{ui:Save the block}} and {{ui:Discard}} do the same. The whole edit is one undo step. See [Attributes](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: whether a pen stroke's pressure sets the lineweight of what {{cmd:SKETCHFIX}} and {{cmd:SKETCHLIVE}} make (on at first). See [Sketch with a pen](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Says which office standard is in force for this drawing and where it comes from: the drawing's own record, your team's shared one, or your Default Policies (text heights `all.anno.*`); with none, the program's own sizes. `[Import/Layers/Title block/Clear/eXit]`: `Import` reads a `cc-office-standard` .json (the record SuperCad and BimCraft write) into this drawing, saved with it in DWG and DXF; `Layers` adds the office layers the drawing lacks, in one undo step, and never removes one; `Title block` lists the office's fields with this drawing's own values; `Clear` removes the drawing's own record. Annotative text and dimension heights follow the standard in force. See [Units, papers and scales](topic:units-papers-scales).

### BPARAMS

Aliases: `BPM`, `BLOCKPARAMS`. Opens the Parameters manager for the block in the block editor, the selected reference's block, or the block you name (`Block name`): parameters with formulas, several visibility parameters with their states, and the selected reference's own values and states. See [Your own parameters and visibility states](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` does the same on the command line: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT and BCLOSE

`BE`; or {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` opens the block editor. `BCLOSE` asks `Close the block editor on "…" [Save/Discard] <Save>`; the banner's {{ui:Save block}} and {{ui:Discard changes}} do the same. Everything done in the editor is one undo step.

### VIEWBASE

Alias: `FLATSHOT`. A flat 2D view of the solids on the 3D tab: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, a scale (`1:20`, `2:1`; {{key:Enter}} takes the one that fits the sheet), then the view's center. One block reference, visible edges on VIEW-VISIBLE, hidden ones dashed on VIEW-HIDDEN. See [Flat views on a sheet](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliases: `-PUBLISH`; or {{ui:All sheets in one PDF}} in the {{ui:Plot to PDF}} dialog. `Sheets to plot [All/Some]`: {{key:Enter}} plots every sheet, `S` asks for names separated by commas. One PDF, a page and a bookmark per sheet. See [Every sheet in one PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliases: `SSM`, `SHEETSETMANAGER`. Brings you to the {{ui:Sheet set}} section of the left panel: sheets from many drawings, numbered and titled, their title blocks filled from the set, published as one PDF. See [Sheet sets](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pick a DWG or DXF, then its insertion point. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; with more than one link, pick one of its references or type `N` and its name. See [Linked drawings](topic:files#linked-drawings-external-references).

### COUNT

Aliases: `BCOUNT`; or {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: a pick selects and counts every reference of that block in this space; {{key:Enter}} or `A` lists them all; `E` then `C` (counts) or `A` (attributes) downloads a CSV. See [Count blocks and export a schedule](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliases: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (case does not matter). `F` asks for a DWG or DXF, then the whole drawing or one of its blocks; a name already used asks {{ui:Keep existing}} or {{ui:Rename}}. `L` opens the library panel.
- `Specify insertion point [Scale/Rotate]`. `S` asks `Specify scale factor`, `R` asks `Specify rotation angle`; both are remembered.
- When the block already stands next to objects that repeat elsewhere without it, a line says how many places are suggested and the prompt gains `suGgested`: `G` shows them; click near one to put the block there, `A` for all of them, {{key:Enter}} to go back. They take the rotation of their neighbors and default attribute values. Drawings over 20,000 objects in the open space are not searched.
- Then `Enter <prompt> (<TAG>) <default>` for each attribute the block asks for. See [Block attributes](topic:attributes).

### LIBRARY

Aliases: `LIB`. Opens the library panel: place items, check for updates, library credits. No questions. See [Insert from a file or the library](topic:insert-from-file-and-library).

### STEELMEMBER

Aliases: `SMEMBER`; or {{ui:3D member}} on the library's {{ui:Standard}} tab. `Section size <W12x26>` (as the tab lists it), then `Start point [Column]` and `End point`: a solid member on the 3D tab between the two points, sitting on the ground. `C` asks for the column's base point and its height. One undo step. See [Place steel sections and standard parts](topic:steel-and-standard-parts).

### PARTSLIST

Aliases: `PLIST`. `Top left corner of the parts list`, then `Text height <2.5>`: draws a table of every standard part and steel section placed from the library (item numbers, quantity, part, standard, size, length, material, mass). One undo step. See [Place steel sections and standard parts](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliases: `PU`. Removes block definitions that nothing uses. No questions.

### DELBLOCKS

Or {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: pick a block reference, or `N` for the list of blocks with a filter (choose several), or `X` / {{key:Enter}} to end. Every reference goes — in the model, on every sheet and inside other blocks — and then the definition, and the command line says what was deleted and what couldn't be. Unnamed blocks and linked drawings are not offered. The prompt comes back for the next block; the whole command is one undo step.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} pastes what you copied ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) as one block: pick the insertion point and one reference to a new block goes there, selected. The block gets a name of its own (`A$C` and a number); {{cmd:RENAME}} gives it yours. One undo step removes the reference and the block.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} asks for the block to replace and the block to put in its place (`?` lists the blocks), then changes every reference in the model, on every sheet and inside other blocks. Each reference keeps its place, scale, rotation, layer and the values of the attributes both blocks have; attributes only the new block has start at their defaults, and it tells you which values were dropped. When nothing uses the old block any more it offers to remove it. It refuses linked drawings and a replacement that would put a block inside itself. One undo step.

### MINSERT

{{cmd:MINSERT}} places a block in rows and columns: block name, insertion point, scale, rotation, number of rows and columns, and the distances between them. The whole set turns with the rotation. Each one is its own reference (10,000 at most), so any of them can be moved or erased afterward.

### BLOCKSPALETTE

Aliases: `BLOCKSPAL`; or {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Shows the {{ui:Blocks}} panel with the cursor in its filter. Each block has a small picture; the ones placed most recently come first. The two buttons beside the filter switch between a list and a grid of pictures. Click a picture (or {{ui:Insert}}) to place the block with {{cmd:INSERT}}, or drag it onto the drawing to place it where you drop it.

{{ui:Libraries}}, under the list: {{ui:Add a drawing}} takes a DWG or DXF file of your own and lists its blocks with pictures, and the whole drawing as one block. Placing one copies its definition (and the blocks it nests, and their layers) into this drawing, as {{cmd:INSERT}}'s `File` option does; a block that is already here with the same definition is used without a question, one of the same name that differs asks {{ui:Keep existing}} or {{ui:Rename}}. In a browser the file stays until the page closes. In CadCraft Studio {{ui:Add a folder}} lists the drawings in a folder, each opened when you click it, and files and folders are remembered. The small x removes a library from the list; the file is not touched. The shared {{ui:Library}} is a different thing: see [Insert from a file or the library](topic:insert-from-file-and-library).

### BCONVERT

Or {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Finds geometry that repeats and turns every copy into a reference to one block.

- `Select the objects that repeat, or [Block]`: the objects of one copy. `B` names an existing block instead, to find loose copies of its objects.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` and `P` switch what counts as a copy; {{key:Enter}} searches. The settings are remembered.
- `Name for the new block <Block1>`, then `Specify the block's base point` ({{key:Enter}} takes the lower left corner of the selection).
- It says how many other sets of objects are the same geometry, highlights everything it would replace, and asks `Yes/No`.

A copy is the same objects moved and turned by any angle (and mirrored or scaled by one factor when those are on): every object must have its counterpart, to within a millionth of the selection's size. Each reference gets its own rotation and scale (a mirrored one a negative Y scale), and the layer its objects shared. Objects on locked layers are left alone and counted. It searches the open space (the model or the open sheet). A very large search stops at a work limit and says so. One undo step.

### BSEARCH

Or {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: part of a block name, or a pattern with `*` and `?`. Lists each block with its references here and in the whole drawing.
- `A`: an attribute value, or `TAG=value`. Lists the blocks whose references hold it, with the values found. Constant attributes count.
- `G`: select objects, or one block reference, and the blocks whose shape is at least 85% alike are listed, best first. Size, rotation and mirroring do not count. The measure compares the distances between points spread along the outlines, so it finds look-alikes; use {{cmd:BCONVERT}} to find exact copies.

The references found in the open space are selected, ready for the next command.

### BREPLACE

Or {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` replaces the block references you select with the block you name; `A` asks for a block and its replacement and changes every reference, as {{cmd:BLOCKREPLACE}} does (the same code). A reference keeps its place, scale, rotation, layer and the values of attributes both blocks have; values the new block has no place for are dropped and named. `?` lists the blocks. One undo step.

### DATAEXTRACTION

Aliases: `EATTEXT`, `DX`; or {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Lists blocks, their attributes and object properties as a table or a CSV file.

- Works on the selection, or asks `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` when the selection holds both. Unnamed blocks, tables and bills of materials are never listed.
- It prints the columns to choose from (name, type, layer, X, Y, rotation, scale, length, area, color, linetype, space, and one per attribute tag), then `Columns, by name or number with commas between`. {{key:Enter}} takes the starred ones: the name and every attribute for blocks; type, layer and length for objects.
- `Put identical rows together with a count? [Yes/No] <Yes>`, then `Put the list in a: [Table/Csv] <Table>`. A table is an ordinary table ({{cmd:TABLEDIT}} edits it) and is not live: run the command again after the drawing changes.
- It refuses a column that is not in the list. A table holds 1,999 rows of data; a CSV file takes them all.

### COUNTTABLE

Counts the block references of the selection (or of the open space) and puts the counts in a table (`Block`, `Count`) or a CSV file. For a count that follows the drawing by itself see {{cmd:BOMTABLE}}.

## Sheets and plotting

### LAYOUT

Aliases: `LO`, `NEWLAYOUT`; or the {{ui:+}} button under the drawing. A new sheet with a border, a title block and one viewport, on ISO A3 (or Tabloid for drawings in inches or feet). No questions.

### MVIEW

Aliases: `MV`. On a sheet only ({{cmd:VPORTS}} on a sheet does the same).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. The viewport shows the whole model at a standard scale.
- `P` (Polygonal): click the corners of the outline (`Undo`, `Close`), {{key:Enter}} when done. It refuses fewer than three corners.
- `O` (Object): `Select a closed object for the viewport's outline`: a closed polyline, a circle or an ellipse on the sheet. The viewport takes its shape (curves as short straight pieces); the object stays as it was. It refuses an object that is not closed.

### VPCLIP

Clips a viewport that is already on the sheet. `Select viewport to clip` (or select it first), then `Select the object to clip to [Polygonal/Delete]`:

- Click a closed polyline, circle or ellipse, or {{key:Enter}} (or `P`) to click the corners of a polygon.
- `D` (Delete, offered when the viewport is clipped) makes it a rectangle again: the box round the outline it had.
- What the viewport shows does not move on the paper, and its scale stays. The model is drawn and plotted only inside the outline, and the border follows it. One undo step.
- A clipped viewport has a grip at each corner of its outline, besides its center and the four corners of its box (dragging a box corner stretches the outline with it). Properties shows Outline: Rectangle, or Clipped with the number of corners.
- DWG and DXF 2000 files keep the outline for CadCraft. Other programs open the viewport as the rectangle round it; DXF R12 keeps the rectangle only.
- On the model tab it says viewports are on sheets.

### VPORTS

Aliases: `VIEWPORTS`. {{cmd:SPLIT}} is the same from a sheet too, and {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} run it. On the model: `Enter number of panes [SIngle/2/3/4] <3>`; `2` asks `[Horizontal/Vertical] <Vertical>` (Vertical = side by side), `3` asks `[Left/Right] <Right>` (where the big pane goes). Each pane keeps its own view and space; a click makes a pane active. On a sheet it is {{cmd:MVIEW}}. See [Split the screen](topic:split-screen).

### VPVIEW

No aliases. On a sheet only.

- `Select viewport` (skipped if one is selected), then on the model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

No aliases. A coordinate system of your own; not an edit. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: a point is a new origin, then `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origin, a point on the positive X axis, a point on the positive-Y side. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` and a name. The view turns so the new X axis is level. See [Turn the view and use your own coordinates](topic:ucs-and-turned-view).

### PLAN

No aliases. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: turns the active pane's view so that UCS's X axis (or the world's) is level. Nothing in the drawing moves.

### TURNLEFT, TURNRIGHT, TURNWORLD

No aliases; or {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. The same as `UCS Z -90`, `UCS Z 90` and `UCS W`, with the view following.

### VPLAYER

No aliases. On a sheet, or inside a viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` ask for layer names (commas, `*` and `?` wildcards), then `[All/Select/Current] <Current>` viewports; Reset puts each layer back to its "frozen in new viewports" default; `V` sets that default (`[Frozen/Thawed]`), which {{cmd:MVIEW}} uses. `?` lists the layers frozen in the current viewport. The Layers panel's viewport column does the same for one viewport. See [Freeze a layer in one viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliases: `MS`; or double-click inside a viewport. On a sheet only. Work on the model through a viewport: the one selected, the only one on the sheet, or `Click inside the viewport to work in`. Pan and zoom inside change the viewport's view (a display-locked one keeps it and the sheet moves instead); the new view is written as one undo step. See [Work on the model through a viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliases: `PS`; or double-click outside the viewport, or click a tab under the drawing. Back to the sheet.

### PLOT

Aliases: `PRINT`, `PUBLISH`, `EXPORTPDF`; or {{key:Mod+P}}. Opens the {{ui:Plot to PDF}} dialog. See [Plot to PDF](topic:plot-pdf).

### PLOTSTYLES

Aliases: `STYLESMANAGER`, `PSTABLES`; or {{ui:Edit tables…}} in the {{ui:Plot to PDF}} dialog. Opens {{ui:Plot style tables}}: what each color prints as (color, gray, ink, lineweight), kept with the drawing. See [Plot style tables](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} moves objects between a sheet and the model through a viewport, scaled and turned so they look the same from the other side. On a sheet, select objects and they go to the model (pick the viewport when the sheet has more than one). While you work on the model through a viewport ({{cmd:MSPACE}}), the selected objects come to the sheet. It says how many times bigger or smaller they became. Viewports stay on their sheet. One undo step.

### ISODRAFT

{{cmd:ISODRAFT}} turns isometric drafting `ON` or `OFF`, or goes straight onto the `Left`, `Top` or `Right` plane. While it is on: Ortho ({{key:F8}}) keeps lines along the plane's two axes (left: 90° and 150°; top: 30° and 150°; right: 30° and 90°), polar tracking ({{key:F10}}) follows the same axes, snap to grid ({{key:F9}}) uses the isometric grid, and the grid ({{key:F7}}) is drawn with lines at 30°, 90° and 150°. {{cmd:ELLIPSE}} gains `Isocircle`: give a center and a radius (or `Diameter`) and it draws the ellipse a circle shows as on the current plane. The drawing stays flat: these are aids for drawing a pictorial view, not a 3D model. The setting is for this session and is not saved in the file.

### ISOPLANE

{{cmd:ISOPLANE}} chooses the plane isometric drafting works on: `Left`, `Top` or `Right`. Enter goes to the next plane. While isometric drafting is on, {{key:F5}} does the same in the middle of a command; while it is off, {{key:F5}} is left to the browser.

## Inquiry

### CAL

Prints the value of a calculation, as it would be read anywhere a length is typed.

- `Expression`: type it, for example `12'6"+3/4"` or `(24'-0")/3`, and press {{key:Enter}}. CadCraft prints `= 12'-6 3/4"   (150.75 drawing units)`. See [Arithmetic in a typed value](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliases: `DI`; or {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. Prints distance, angle, Delta X and Delta Y.

### AREA

Aliases: `AA`; or {{ui:View}} › {{ui:More}} › {{ui:Area}}. Prints the area and perimeter.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Click or type corners; at `Specify next point (Enter closes) [Undo]` press {{key:Enter}} to close the outline. `U` takes back the last corner.
  - {{key:Enter}} or `O`, then `Select object`: a circle (prints its circumference), an ellipse, a polyline (an open one is closed by a straight line for the area, and its length is printed) or a hatch (holes are taken off).
  - `A` (Add area) and `S` (Subtract area) keep a running total: the prompt starts with `(ADD mode)` or `(SUBTRACT mode)`, each area is added or taken off, and `Total area = …` is printed after each. In these modes `O` picks objects until {{key:Enter}}, and {{key:Enter}} at the first prompt ends the command.

### MEASUREGEOM

Aliases: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; after each measurement it asks again, with `eXit` the default.

`Quick` measures round the pointer as you move it: the distance to the nearest object to the right, above, left and below (along the axes of the current UCS), drawn as you go, and the angle where two of those neighbours are straight and meet. A click writes the four distances, the clear width and height and the angles to the history; Enter goes back to the options. It reads what is on screen.

- `D`: two points, as {{cmd:DIST}}.
- `R`: `Select arc or circle`; prints the radius and diameter.
- `A`: an arc (its included angle), a line and then a second line (the angle between them, toward their far ends), or {{key:Enter}} and three points (vertex, then the two ends).
- `AR`: as {{cmd:AREA}}, one area.

### ID

No aliases. `Specify point`; prints its X and Y.

### LIST

Aliases: `LI`, `LS`. `Select objects`; prints each object's type, layer and main measurements.

### MASSPROP

{{cmd:MASSPROP}} gives the section properties of the regions and closed objects you select, taken together: area, perimeter, bounding box, centroid, moments of inertia about the X and Y axes through the origin, the product of inertia, radii of gyration, the same moments about the centroid, and the principal moments with the directions of their axes. Holes in a region count as holes. Figures are in drawing units and exact for outlines made of lines and arcs; ellipses and splines are measured as short straight segments, and it says so. After the report it asks whether to write it to a text file. Objects that are not closed are left out, and it says how many.

## View, file and other

### ZOOM

Aliases: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Click two corners for a window. `E`, `A` or Enter: the whole drawing.
- `P` (Previous, or {{ui:Previous}} in the toolbar) goes back to the view before, up to 10 views per tab; a run of wheel steps or one pan counts as one view.
- A number such as `2`, `2x` or `0.5x` (or `S` and then the number) zooms in or out by that factor round the middle of the screen.
- `C` asks `Specify center point` and `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Aliases: `PDFATT` for {{cmd:PDFATTACH}}, `PDFIM` for {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} puts a PDF page under the drawing (file, page, insertion point, scale, rotation); {{cmd:PDFIMPORT}} turns a page's lines, curves, fills and text into drawing objects on layers named after the PDF, at true size, a typed scale, or scaled from two points and a real distance. {{cmd:PDFCLIP}} clips an underlay, {{cmd:PDFADJUST}} sets fade, contrast, monochrome or switches it off, {{cmd:PDFLAYERS}} switches the PDF's own layers, and {{cmd:PDF}} gives CadCraft the files a drawing's underlays use again. See [PDF underlays](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Drawing autocomplete: with no command running, a grey ghost shows what your drawing's own patterns say comes next. {{cmd:AUTOCOMPLETE}} turns it `On` or `Off` (also Settings › CadCraft) or `Show`s what it would suggest now. **Tab** draws the ghost as one undo step, **Esc** dismisses it until the drawing changes. It finds three things in the newest objects: the next copy of something drawn twice or more at an even step (studs, columns, a stair's riser and tread), the next steps of a polyline stair, and the missing side of a room or wall chain. In the middle of {{cmd:LINE}} or {{cmd:PLINE}} the ghost is the **next point**: the next step of a stair (riser, tread, riser…), the fourth corner of a rectangle, the point that closes it, or one more equal step. Bring the cursor near it and press **Tab**, as if you had clicked there; carry on or press Enter. Worked out on this computer by rules, with no model.

### AUTOSHEET

Alias: `ASH`. Sheets that lay themselves out. {{cmd:AUTOSHEET}} takes the pieces of the drawing (your named views, or the separate pieces of the model, or the whole model), chooses a paper size (or the one you give), gives every piece a standard scale (one scale for all, or the largest each can take) and places the views in rows on new sheets with a title block and a caption (name and scale) under each. What does not fit on one sheet gets a sheet of its own. One undo step. Worked out on this computer by rules, with no model.

### PHOTOSKETCH

Alias: `PSK`. Sketch photo to drawing. Choose a photo (JPEG, PNG or TIFF) of a hand sketch on a sheet of paper. {{cmd:PHOTOSKETCH}} finds the sheet's four corners, straightens the perspective, takes the paper size you name (`Paper`, or the nearest standard one) and the `Scale` of the sketch (1 : n), then traces the pen lines into lines, arcs and circles, a layer for each pen colour (black, red, blue, green). If it cannot find the paper's edge it takes the whole photo as the sheet and says so. Lettering is left out. One undo step. Done on this computer with classic image processing, no model, nothing sent anywhere. See also the scanned-drawing commands.

### AUTODIM

Alias: `ADIM`. Auto-dimension by rules. {{cmd:AUTODIM}} dimensions the selected objects (or the whole drawing) from their level and plumb edges: a chain of dimensions along the sides you choose (`Sides`), one overall dimension outside it, the width of each opening (a gap between collinear wall lines), a diameter for each size of hole, and with `Grid` the spacing between grid lines. A dimension that is already there is not made again. One undo step. Worked out on this computer by rules, with no model.

### GRIDMOVE

Alias: `GM`. Moving a grid line carries the set. {{cmd:GRIDMOVE}} moves a grid line (a line on a layer whose name says grid or axis) and what hangs on it: walls with an end on the line stretch to follow it, walls along it move whole, columns (block references and circles on the line), its bubble and tag move, and dimensions whose points sit on it measure the new spacing. Give two points (only the part across the line counts) or `Distance`. One undo step takes it all back. Done by rules on this computer.

### DETAILS

Alias: `DET`. Details that find you. {{cmd:DETAILS}} keeps your firm's own details: `Add` puts a block of this drawing in the list, `List` and `Remove` manage it, and `Find` ranks them for what is selected (or for what you drew last) by the words on its layers, block names, hatch patterns and notes against each detail's name and notes, so a window head finds your sill flashing. Pick a number and a point to place it. With `Hint` on (also Settings › CadCraft), selecting something a detail matches puts one line in the status bar. The list is kept in this browser, on this computer, and that list is the one searched. `Share` puts it in your Documents folder too (`.cadcraft/firm-details.json`, with each block's drawing): `Pull` adds what your team has and you lack, `Push` adds what you have and they lack, `Both` does both, and nothing is ever removed from either side. Open the Documents folder first ({{cmd:DOCUMENTS}}); when that folder is a Team Cloud Plan folder, the whole team shares one list. A detail item in the Library panel has an **Add to my firm's details** button that puts it in the same list. Worked out on this computer by words, with no model.

### SKETCHFIX

Alias: `SKF`. Pen sketches become precise geometry. Press and drag one freehand stroke at a time (pen, mouse or finger), then Enter. Each stroke is read as a line, circle, arc, rectangle or polyline: nearly level and plumb lines are made exactly level and plumb, a closed round stroke becomes a circle, a closed stroke with four right-angled corners a rectangle, and the ends of the strokes are pulled together and onto the ends already in the drawing. One undo step. Worked out on this computer by rules, with no model.

### SCANATTACH and the scanned-drawing commands

Aliases: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} has none. They work on a picture, one undo step each. {{cmd:SCANATTACH}} inserts a PNG, JPEG, TIFF (one page or all) or a PDF page that is a picture. {{cmd:SCANSCALE}} scales the sheet from two picked points and the true distance. {{cmd:SCANALIGN}} moves and turns it onto two points (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} shows the angle of the sheet's long lines and turns the sheet once you `Accept` or give a `Value`. {{cmd:SCANCLEAN}} makes it black and white (`Threshold` Auto/Adaptive/Level, `Specks`) and `Run`. {{cmd:SCANCROP}} keeps a window. {{cmd:SCANERASE}} erases a `Rectangle`, `Polygon` or `Lasso`. {{cmd:SCANTRACE}} traces lines and arcs onto a new layer (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) and reports what it found and what it left as raster. {{cmd:SCANINFO}} lists the original file and the steps. {{cmd:RASTERSNAP}} turns snapping to the lines of scanned sheets On or Off. See the topic Scanned drawings and the trace.

### REGEN and REGENALL

Aliases: `RE` for {{cmd:REGEN}}, `REA` for {{cmd:REGENALL}}. Rebuild what is drawn on screen from the drawing: {{cmd:REGEN}} the tab you are looking at (on a sheet, the model its viewports show too), {{cmd:REGENALL}} every tab, every split-screen pane and every open drawing. Use them when the picture looks stale after a scripted or very large change, or an assistant edited the drawing; the drawing itself is not touched, so there is nothing to undo.

### NAMEDVIEW

Aliases: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, then the view's name. `S` saves the view on screen, `W` a window you pick, `R` shows a saved view, `D` deletes one, `?` lists the views of this tab. Saving under an existing name replaces it; each change is one undo step. Views belong to the tab they were saved on. DWG and DXF files keep them (the VIEW table); a sheet's views come back on the first sheet, since the file does not say which.

### UNDO and REDO

Aliases: `U` for {{cmd:UNDO}}; {{cmd:REDO}} has none. Also {{key:Mod+Z}} and {{key:Mod+Y}}.

### LAYER

Aliases: `LA`. Jumps to the {{ui:Layers}} panel.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` or a name (`?` lists them: Continuous, the drawing's own, and DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE with their `2` (half) and `X2` (double) sizes). {{cmd:LWEIGHT}} (`LW`): the lineweight for new objects in mm, or `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): the drawing's linetype scale (undoable). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — the same as the {{ui:LWT}} button in the status bar. See [Line weights and linetypes](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, then the new name; objects or references follow. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` until {{key:Enter}}, then `Select object on target layer or [Name]` and `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, then `Y`: the layer and every object on it go (not layer 0, DEFPOINTS or the current layer). One undo step each. See [Organize a drawing with layers](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layers by picking objects; also in the {{ui:Layers}} panel's {{ui:Tools}} menu. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, then {{key:Enter}}: every other layer goes off. {{cmd:LAYUNISO}} turns them back on. {{cmd:LAYOFF}} and {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (or frozen), over and over; `U` takes back the last one, {{key:Enter}} ends. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} turns every layer on, {{cmd:LAYTHW}} thaws every layer. Each command is one undo step. See [Organize a drawing with layers](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} starts an empty drawing and {{cmd:OPEN}} opens a DWG or DXF, each in its own tab over the drawing (an untouched new drawing is used instead of a new tab). Closing a tab with unsaved changes asks first. See [Split the screen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, also {{key:Mod+S}}) downloads a copy in the drawing's format: DWG if it was opened from a DWG, DXF if from a DXF. A new drawing uses the format last chosen in Save as in this browser, else DWG.

{{cmd:SAVEAS}} (also {{key:Mod+Shift+S}}) opens the {{ui:Save a copy as}} dialog: choose {{ui:DWG}} (and its {{ui:Version}}), {{ui:DXF R12}} or {{ui:DXF 2000}}, then {{ui:Save}}. The choice sticks for this drawing and for new drawings in this browser.

{{cmd:DXFOUT}} always downloads a DXF R12 copy, without changing the format {{cmd:SAVE}} uses.

See [Files: what opens, what saves](topic:files#saving).

### TOUR

Aliases: `TUTORIAL`. Starts the six-step first-drawing tour again. See [Getting started](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliases: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. See [Settings](topic:settings#toolbar-position).

### COMMANDLINE

Aliases: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: docks or floats the command line, makes it one line, asks how many history lines to show (0 to 12), or opens the history. See [Settings](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: the bars above the drawing as they were, or compact. See [Settings](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: the step {{ui:Polar}} tracking lines up at (more than 0, up to 180). Kept in this browser.

### UNITS

Aliases: `UN`. How lengths are written and typed.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural and Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. The others: `Enter number of decimal places (0 to 8)`.

New dimensions follow it. One undo step. Same as {{ui:Length format}} and {{ui:Precision}} in {{ui:Current settings}}; see [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliases: `GDS`. View an IC layout (a GDSII stream file): lab spike, for viewing and measuring only.

- A file picker takes a `.gds` file; with several top cells, `Enter the top cell to draw`.
- Every layer and datatype becomes a drawing layer (`GDS 1`, `GDS 2/5`), references and arrays are placed flat, in the file's user unit (usually micrometres). One undo step. Nothing is simulated or checked and the file is not written back.

### DIAGRAM

Aliases: `TEXTDIAGRAM`, `T2D`. A diagram from text.

- A box takes the text (or one line with `;` between statements at the command line): a Mermaid flowchart, a PlantUML component diagram, D2 or a from-to list.
- `Specify the top left corner of the diagram`, then `Specify the text height`.

Blocks and connectors are ordinary objects on layer `Diagram`, selected when it ends. One undo step. See [Draw a diagram from text](topic:text-to-diagram).

### OLELIST

Aliases: `OLES`. The OLE objects a DWG carries that CadCraft cannot place by itself.

- Lists each one: number, type, size, whether it saved a picture.
- `Enter an option [Place/eXit] <eXit>`: Place asks for the number, the lower left corner and the width, and draws a frame with the picture. One undo step; the kept object is not changed. See [Pictures](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliases: `SHX`. Your own SHX fonts.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} reads every `.shx` in a folder (CadCraft Studio; again at each start), {{ui:Files}} takes picked files (the browser), {{ui:Reverse}} lays out one font's letters last first. Text styles that name a loaded font draw in it. See [Draw text in your own SHX fonts](topic:shx-fonts).

### LIMITS

How big the drawing is meant to be.

- `Specify lower left corner or [ON/OFF] <current>`: a point, `ON` or `OFF`.
- `Specify upper right corner <current>`.

The grid fills the limits, {{cmd:ZOOM}} All shows them, and with them ON a point outside is refused (`**Outside limits`). One undo step; saved in DWG and DXF. See [Set the drawing limits](topic:drawing-limits).

### AUNITS

Aliases: `ANGUNITS`. How angles are shown and typed.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, or for the other two `Enter precision` (0 degrees, 2 minutes, 4 seconds, 5 to 8 decimals of a second).

One undo step; saved in DWG and DXF. Same as {{ui:Angle format}} in {{ui:Current settings}}. See [Type and show bearings and angles](topic:bearings-and-angles).

### APPLOAD

Aliases: `AP`; or {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. The {{ui:Load applications}} dialog: load `.lsp` routines and `.dcl` dialog files, unload them, load them again from the history, and the Startup Suite. A routine's `(defun c:NAME …)` commands then work like any other. See [Load applications](topic:load-applications) and [Run LISP routines](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (or {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) opens your aliases file (`ALIAS, *COMMAND` lines); {{ui:Save}} applies it. {{cmd:REINIT}} applies it again. See [Edit command aliases](topic:command-aliases).

### OPTIONKEYS

Aliases: `OPTKEYS`; or {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}. Opens your option letters file (`COMMAND.OPTION, LETTERS` lines, such as `ARRAY.PO, P`); {{ui:Save}} applies it and {{cmd:REINIT}} applies it again. See [Give command options your own letters](topic:option-letters).

### LISPEDIT

Aliases: `VLIDE`; or {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Opens the LISP editor, a window that stays open beside the drawing.

- The text: line numbers, the partner of the parenthesis at the cursor marked (red when it has none), {{key:Enter}} indents the new line under the open parenthesis, {{key:Tab}} types two spaces, {{key:Esc}} leaves the text.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): reads every form, as {{cmd:APPLOAD}} does with the file, and makes its `c:` commands. The file shows in {{cmd:APPLOAD}}'s list.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): evaluates the selected forms, or the form the cursor is in.
- {{ui:Stop}}: ends a routine that is running.
- {{ui:Console}}: what the routine printed, and each error with its line; click an error to go there. The text is run one top-level form at a time, so the line is the form's, or inside it the line that calls the function the error names.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): a `.lsp` file. The text is also kept in this browser, so closing the window does not lose it.
- Beside the text: the functions the routine defines, the ones it calls that this LISP does not have yet, the ones it calls that are neither defined in it nor built in, and the full lists of what is built and what is not.

A text with a parenthesis that is never closed, or a string that never ends, is not run: the line is named. There is no step-by-step debugger, breakpoints or watch window. See [Run LISP routines](topic:run-lisp).

### HELP

Aliases: `?`. Prints every command, its aliases and a one-line description in the command line history. It does not open this help: press {{key:F1}} or click {{ui:Help}} for that.

## Select objects prompt

At any `Select objects` prompt: click objects, draw windows (left to right) and crossings (right to left) with two clicks, or press and drag a lasso ({{key:Space}} while dragging: window, crossing, fence), {{key:Shift}}+click to remove, and press {{key:Enter}} to finish. You can also type `ALL` (everything), `L` (the last object), `P` (Previous: what the last command used), `F` (Fence: objects a line of points crosses; `U` takes back a point), `W` (Window), `C` (Crossing), `R` (Remove mode: picks take objects out; the prompt reads `Remove objects`) and `A` (Add again). `?` lists them. They are not shown in the prompt. {{key:Tab}} over overlapping objects highlights the next one; click to pick it. See [Select objects](topic:select-objects).

### ACCESS

Alias: `AX`. Draft without sight. {{cmd:ACCESS}} turns Access on or off (`On`, `Off`) and switches snap sounds (`Sound`) and voice commands (`Voice`); it says the state first. With Access on, every command and result is spoken through your screen reader and the drawing area has a keyboard cursor. The help topic "Draft without sight" has the keys.

### DESCRIBE

Alias: `DESC`. Say what the drawing holds: how many objects, of what kind, how big, how many layers, what is selected. Reads only; changes nothing.

### WHEREAMI

Alias: `WHERE`. Say where the cursor is, in the drawing's units.

### NEARBY

Say what lies close to the cursor, nearest first, each with its distance and the side it is on.

### SAYSEL

Say what is selected, one sentence per object (line length, ends and angle; circle radius and centre; text as written).

### VOICE

Turn spoken commands on or off. They are recognised on this computer; where the browser cannot do that, voice stays off unless you choose the browser's online service in Settings.

### TOUCHCROSSHAIR

Alias: `TCX`. The offset crosshair for drafting with a finger, so the fingertip does not cover the point you pick. While it is on, one finger on the drawing does not pick: it moves a crosshair that sits above the finger and to one side. Object snaps and tracking follow the crosshair. Lifting the finger picks nothing and leaves the crosshair where it is. To pick, press the {{ui:Click}} button in the corner of the drawing, or tap anywhere on the drawing with a second finger. Hold {{ui:Click}} while you move the other finger to drag (a selection window, a lasso, a grip). A finger pressed and held still, or the {{ui:Enter}} button, is Enter. Two fingers pan and zoom as before. Near the bottom edge and the far side edge the crosshair closes in on the finger, so every part of the drawing can be reached. A pen and a mouse always pick directly.

{{cmd:TOUCHCROSSHAIR}} says the state and asks `ON`, `OFF`, `Auto` (on only where a finger is the only pointer, so it is off on a computer with a mouse), `Distance` (how far the crosshair sits from the finger, 24 to 240 pixels) or `Side` (`Left`: up and to the left, for the right hand; `Right` for the left hand; the buttons move to the other corner). The same choices are in Settings › CadCraft, and on a device with a touch screen the status bar has an {{ui:Offset crosshair}} switch. The choices are kept in this browser.

### WHOHAS

Says who has a drawing open. In CadCraft Studio on a computer, opening a DWG or DXF writes a small lock file beside it (`Plan.dwg.cclock`: who, since when, which version), refreshes it every minute while the drawing is open, and removes it when the drawing is closed. Opening a drawing someone else has open says who and since when and offers {{ui:Open read-only}} (Save then asks for a new name), {{ui:Open anyway}} (the other person is told at their next refresh) or {{ui:Cancel}}. Saving over a file someone else has open asks first. A lock that has not been refreshed for five minutes is said to be stale: the other copy closed without saving or the computer is asleep.

{{cmd:WHOHAS}} asks `Current` (the open drawing), `File` (pick one), `FOlder` (pick a folder: every drawing in it that is open somewhere is listed), `Path` (type a full path) or `Name` (the name others see; your account's name when you are signed in). Studio can reach only folders you have chosen: for a drawing opened from a folder that was never chosen it says once that it cannot note the drawing as open; `FOlder` chooses the folder, and locks work there from then on. The lock is a note for people, not a barrier: another program can still write the file. In a browser there are no folders to look in, and the command says so.


### OVERKILL

Deletes duplicate objects and tidies overlapping lines and arcs, for drawings that arrive full of doubled linework. `Select objects to clean up`, {{key:Enter}}, then {{key:Enter}} again to clean up with the settings shown, or change one first:

- `Tolerance`: how close two coordinates must be to count as the same (0.000001 to start with; 0 means exactly the same).
- `Ignore`: properties that may differ between two objects that are otherwise the same. Type a name to switch it: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, or `None` / `All`. {{key:Enter}} when done.
- `Overlap`: on or off. On, lines along one straight line that overlap become one line (a line lying inside another is simply deleted), and arcs on one circle that overlap become one arc; arcs that close a full turn become a circle, and an arc lying on a circle is deleted.
- `Ends`: on or off. On, lines along one straight line and arcs on one circle that only touch end to end become one piece.

Every type of object is checked for duplicates: two objects are duplicates when their geometry is the same within the tolerance and their layer, color, linetype, linetype scale, lineweight, thickness, transparency and height match (less the ones you ignore). Lines and open polylines also match when drawn the other way round. The first object in the draw order stays and keeps its own properties. The command reports how many objects it checked and deleted: duplicates, overlapping pieces merged, pieces joined end to end. One {{cmd:UNDO}} takes it all back. The settings last until you close the drawing window.

It leaves alone: objects on locked layers and hidden objects. It does not merge lines with a height (Z) (exact duplicates of them still go), and it does not touch segments inside a polyline (they are not thinned), a line lying on a polyline's segment, and a closed polyline drawn the other way round.

### DRAWORDER

Changes which objects are drawn in front. `Select objects to re-order`, {{key:Enter}}, then `Above objects`, `Under objects`, `Front` or `Back` ({{key:Enter}} = `Back`). `Above objects` and `Under objects` ask for the reference objects: the selection goes right in front of the front-most of them, or right behind the back-most. The selected objects keep their own order among themselves. One undo step. The order is saved with the drawing in DWG and DXF, where it is the order the objects are written in.

On screen every object is drawn in the drawing's order, as other programs that open the file draw it: a solid hatch, a wide polyline or a text mask covers the lines and text behind it, and what is in front of it covers it. Where a line crosses a text, both show. Pictures and attached PDF pages stay under the linework. In a very large drawing whose fills and linework overlap and alternate more than 256 times, the first 256 keep their order and the rest draw their fills under the lines, so redrawing stays quick.

### TEXTTOFRONT

Brings text, dimensions and leaders in front of everything else in the open space: `Text`, `Dimensions`, `Leaders` or `All` ({{key:Enter}} = `All`). One undo step. Says so when there is none, or when they are already at the front.

### HATCHTOBACK

Sends every hatch of the open space behind everything else, so fills stop covering linework and text in the saved file. No prompts. One undo step.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Shows only the selected objects: everything else in the open space goes out of sight until {{cmd:UNISOLATEOBJECTS}}. Unlike {{cmd:LAYISO}} it works on the objects you pick, whatever their layers, and changes no layer. Hidden objects are not drawn, picked, snapped to, zoomed to or plotted, and commands that take `ALL` pass them over. What you draw while objects are isolated shows as usual.

This is for the session only: nothing about it is saved with the drawing, it is not an undo step, and opening the drawing again shows everything. While objects are hidden the status bar shows a button with their number; click it to show them again.

### HIDEOBJECTS

Hides the selected objects until {{cmd:UNISOLATEOBJECTS}}. The same rules as {{cmd:ISOLATEOBJECTS}}: for the session only, not saved, not an undo step.

### UNISOLATEOBJECTS

Aliases: `UNISOLATE`, `UNHIDE`. Shows every object hidden by {{cmd:ISOLATEOBJECTS}} or {{cmd:HIDEOBJECTS}} again, and says how many came back.

### LAYLOCKFADE

Sets how objects on locked layers look and whether a click reaches them. It says the current state, then takes:

- a number from 0 to 90: the fade amount in percent (50 to start with). 0 turns the fade off.
- `ON` or `OFF`: fade on or off, keeping the amount.
- `Pick`, then `Yes` or `No`: may a click select objects on locked layers while no command is running? `No` (the default): they cannot be picked at all. `Yes`: a click or a window selects them so {{ui:Properties}} can show them; they still cannot be changed, and a command's own `Select objects` never takes them.

Object snaps find objects on locked layers either way. Plots are never faded. Both settings are yours, not the drawing's, and are also in {{ui:Settings}} under {{ui:Locked layers}}.

### BURST

Explodes block references and keeps what their attributes say. `Select block references to burst`, {{key:Enter}}: each reference is replaced by the block's objects, and each visible attribute's value becomes plain text on that attribute's own layer (an attribute on layer 0 lands on the reference's layer, like the block's other objects on layer 0). Invisible attributes are dropped. A block inside the block stays a block reference. One undo step; it reports the references burst and the attribute values turned into text.

It refuses a linked drawing by name (bind it first, or copy from it with {{cmd:NCOPY}}), and leaves other selected objects alone. For block references {{cmd:EXPLODE}} gives the same objects; {{cmd:BURST}} takes block references only and counts the attribute text.

### TXT2MTXT

Alias: `T2M`. Joins single-line texts into one paragraph text. `Select single-line text to join`, {{key:Enter}}, then `Paragraph` (the lines run together and wrap at the widest line's width) or `Lines` (each text stays a line of its own); {{key:Enter}} takes the one used last. The lines are ordered top to bottom, then left to right, along the direction of the top text. The paragraph hangs from the top text's upper-left corner and takes its height, rotation, style, layer and color. One undo step.

Text that is already paragraph text, blank text and other objects in the selection are left alone, and the command says how many.

### NCOPY

Copies objects out of a block reference or a linked drawing into the drawing, without exploding anything. `Pick an object inside a block reference or a linked drawing`: the object nearest the pick is copied where it shows, however many blocks deep it sits; pick more, then {{key:Enter}}. Next `Base point to move the copies`: {{key:Enter}} leaves them in place, or give a base point and a second point. The whole command is one undo step.

A copy takes the layer it shows on: an object on layer 0 inside a block lands on the layer of the reference it sat in, and a ByBlock color becomes that reference's color. From a linked drawing, layer `Plan|Walls` becomes `Plan$0$Walls` (the name binding the link gives it), made with the linked layer's color, linetype and lineweight. An attribute's value is copied as text. Block references on locked layers cannot be picked.

### FLATTEN

Sets the height (Z) and the thickness of the selected objects to 0. `Select objects to flatten`, {{key:Enter}}. It also flattens the objects inside the block definitions the selection uses (and the blocks inside those), so every reference to those blocks changes; linked drawings are left as they are. One undo step; it reports how many objects changed, and says so when none had a height or a thickness.

What CadCraft keeps of the third dimension in a 2D drawing is: a height on circles, arcs, ellipses, points, text, block references, hatches, leaders and polylines (their elevation), a height at each end of a line, and a thickness on lines, circles, arcs, polylines, points and text, as the file had them. {{cmd:FLATTEN}} clears exactly those. It does not touch the 3D model on the 3D tab, 3D faces or solids, and an object drawn in a tilted plane was already brought into the drawing plane when the file was opened.

### BREAKLINE

Draws a line with a break symbol, for a view that is cut short. It says the current size and extension, then `First point of the break line` (or `Size` / `Extension` to change them first), `Second point`, and `Where the break symbol sits`: click along the line, or {{key:Enter}} for the middle. The result is one polyline on the current layer: the line, running past each point by the extension, with a Z-shaped stroke as tall as the size and half as long.

`Size` and `Extension` are remembered as your settings (the size starts at twice the dimension text height times the dimension scale; the extension at half the size). {{key:Enter}} repeats the command.

### AUDIT

Checks the open drawing for damage and repairs it. {{cmd:AUDIT}} looks at every object in the model, on the sheets and inside blocks, and at the layer table, and lists what it finds by kind:

- numbers that are not finite or are absurdly large;
- objects with no size: a line of no length, a circle of no radius, a polyline with one place, text with no letters or height, a block reference of zero scale;
- objects on a layer the drawing does not have; references to a block that is not there; text and dimension style names and linetype names that are not in the drawing;
- blocks that contain themselves, directly or through other blocks;
- objects that share an id, a key or a file handle;
- dimensions without the points they are measured from, and hatches whose boundary is not a closed outline.

Then it asks `Fix them? [Yes/No]`. `No` changes nothing. `Yes` repairs everything in one undo step: what cannot be drawn is removed (bad numbers, no size, missing block, broken dimension, a hatch with no usable boundary, the reference that closes a circle of blocks); a missing layer is made; unknown style and linetype names go back to the defaults; a shared key is replaced. It prints how many objects were removed and how many repaired. The same findings appear in the Problems panel, each with its own {{ui:Repair}}.

It refuses nothing, but it only checks what CadCraft itself draws: data kept for other programs (3D solids, OLE objects) is not opened.


### RECOVER

Opens a damaged DXF or DWG. {{cmd:RECOVER}} asks for the file, reads what can be read instead of refusing the file, lists what it skipped or assumed, then checks and repairs the drawing as {{cmd:AUDIT}} does with `Yes`.

- DXF: lines that are not part of a code and value pair are skipped until the pairs line up again; a section with no end is closed; a file that is cut short is read up to the cut; a binary DXF that is cut short is read up to its last whole value. When a section, a block or an object still cannot be read, it is left out and named, and the reading goes on past it.
- DWG: objects that fail their checks or cannot be decoded are left out, and a lost object list is rebuilt by walking the object data.

The file on disk is not changed. The recovered drawing opens unsaved: save it under a new name. A file from which nothing at all can be read is refused, with the reason.


### LEGACYTEXT

Converts text typed with old 8-bit Vietnamese fonts to Unicode. Short names `TEXTTOUNICODE` and `VNTEXT`.

Older Vietnamese drawings hold their text as Western characters that only the font turns into Vietnamese: TCVN3 text in the ABC fonts (`.VnTime`, `.VnArial`, and the upper-case fonts whose names end in `H`), and VNI text in the VNI fonts (`VNI-Times`). CadCraft shows such text as it reads as soon as the drawing is open, by the font of its text style, of the object, or of a run inside paragraph text; the file still holds the old characters.

{{cmd:LEGACYTEXT}} says how many texts it found in each encoding and asks `Convert … to Unicode?`. `Yes` rewrites every one (model, sheets, blocks, attribute values and definitions) and gives the text styles a Unicode font (Times New Roman, Arial or Courier New by the old font's kind), in one undo step. Formatting inside paragraph text is kept.

When no text uses a known font (a style that lost its font name), it asks `Read selected texts as [Tcvn3/Vni/None]`: choose the encoding and select the texts. Text that is already Unicode is left alone. Dimension text overrides and multileader text are not converted.
