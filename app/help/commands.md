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

### HATCH

Aliases: `H`, `BH`, `BHATCH`; or {{ui:Hatch}} in the toolbar. Prints the current pattern, scale and angle first.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, repeated (`Undo` once there is an area): each click adds the closed area round it, with the closed shapes inside it as islands. Enter makes one hatch of all of them.
- `S`: `Select closed objects` (closed polylines, circles, closed ellipses).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.

See [Hatch and fill areas](topic:hatch).

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

### OFFSET

Aliases: `O`. Lines, arcs, circles and polylines.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, then `Specify point on side to offset` (or, with Through, `Specify through point`), repeated until Enter.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: how {{cmd:TRIM}} and {{cmd:EXTEND}} start. `1` Quick: every object is a cutting edge or boundary. `0` Standard: they ask for the edges first. Also `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliases: `TR`. Prints `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` first. In Quick mode every visible object is a cutting edge, and an object nothing crosses is erased; in Standard mode it asks `Select cutting edges (Enter = every object)` first and cuts only at those.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, repeated: click the piece to remove (it shows grey and dashed while the pointer rests on it), drag a path through several pieces (all go in one step), or click two empty spots for a fence between them. {{key:Shift}} extends instead. `T` chooses cutting edges (Standard mode), `F` asks fence points, `C` two window corners (pieces partly inside go), `O` asks `Enter a trim mode option [Quick/Standard]`, `E` asks `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` erases objects you select, `U` undoes the last pick or drag. Enter ends. See [Trim and extend](topic:trim-and-extend).

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

Aliases: `X`. Polylines become lines and arcs, block references become their objects, dimensions become lines, arrowheads and text.

- `Select objects`

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

Aliases: `MLD`; or {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance]`, `Specify leader landing location`, then the text in the in-place box (or, without it, `Enter text (an empty line ends)`). Saved as a real multileader in DWG; DXF keeps the lines, arrowhead and text it draws.

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

## Sheets and plotting

### LAYOUT

Aliases: `LO`, `NEWLAYOUT`; or the {{ui:+}} button under the drawing. A new sheet with a border, a title block and one viewport, on ISO A3 (or Tabloid for drawings in inches or feet). No questions.

### MVIEW

Aliases: `MV`. On a sheet only ({{cmd:VPORTS}} on a sheet does the same).

- `Specify corner of viewport`, `Specify opposite corner`. The viewport shows the whole model at a standard scale.

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

- `D`: two points, as {{cmd:DIST}}.
- `R`: `Select arc or circle`; prints the radius and diameter.
- `A`: an arc (its included angle), a line and then a second line (the angle between them, toward their far ends), or {{key:Enter}} and three points (vertex, then the two ends).
- `AR`: as {{cmd:AREA}}, one area.

### ID

No aliases. `Specify point`; prints its X and Y.

### LIST

Aliases: `LI`, `LS`. `Select objects`; prints each object's type, layer and main measurements.

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

