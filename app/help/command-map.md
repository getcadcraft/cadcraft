---
title: Command map: what to type
summary: Every command CadCraft has with its short names, A to Z, made from the program itself, and the habits from other drafting programs that differ.
section: switching
order: 215
keywords: command map, commands, aliases, short names, coming from, command list, what to type, erase, trim, equivalent, differences
---

CadCraft takes the command names and short names people know from other drafting programs: type `L` for a line, `TR` to trim, `E` to erase. So there is no translation table to learn for most of them: the name you know is the name here. The list below is every command CadCraft has, made from the program itself. {{key:Enter}} repeats the last one; `HELP` in the command line prints the same list.

The few that are not the same, or not built:

- **Save** downloads a copy in the browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio it writes the file. See [Coming from other drafting software](topic:coming-from).
- **PLOT** makes a PDF (also PNG and SVG), with a plot style table; there is no page setup manager.
- **DIMSTYLE** and **PEDIT** are built; **PEDIT** has no Edit-vertex option (grips do that).
- **TABLE** is not built; {{cmd:XREF}}, {{cmd:SPLINE}} and {{cmd:WBLOCK}} are.
- A routine's own commands (AutoLISP `C:NAME`) show up after you load it with {{cmd:APPLOAD}}; they are not listed here.

## All commands (402)

| Command | Short names | What it does |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbit the 3D view with the left button |
| `ACCESS` | `AX` | Turn drafting without sight on or off: results spoken through your screen reader, a keyboard cursor on the drawing, snap sounds and spoken commands. |
| `ALIASEDIT` |  | Edit command aliases in one text file (the familiar L, *LINE format) |
| `ALIGN` | `AL` | Move and turn objects so that source points land on destination points (one, two or three pairs), and scale them if you want |
| `ALIGNPANEL` | `ALP` | Open the Align and distribute panel |
| `ALIGNTO` |  | Line up the selected objects' left, centre, right, top, middle or bottom edges, on the selection, the first or last picked object, or a point |
| `ANNOALLVISIBLE` | `ANNOALL` | Show annotative objects at every scale, or only where the viewport's (or the drawing's) scale is in their list |
| `ANNOSCALE` | `CANNOSCALE` | Set the drawing's annotation scale: annotative text and dimensions are resized to print at the same size |
| `APPLOAD` | `AP` | Load applications: LISP routines (.lsp) and their dialog files (.dcl); the Startup Suite (AP) |
| `ARC` | `A` | Arc: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Area and perimeter by points or of an object; Add and Subtract keep a running total (AA) |
| `ARRAY` | `AR` | Copies in rows and columns, or round a center (AR) |
| `ARRAYASSOCIATIVITY` |  | Sets whether the ARRAY commands make arrays that stay editable (1) or plain copies (0) |
| `ARRAYCLOSE` |  | Ends editing an array's source objects |
| `ARRAYEDIT` |  | Changes an array made with the Associative option: counts, spacing, source objects, one item |
| `ARRAYPATH` |  | Copies of objects along a line, arc, polyline or other curve |
| `ARRAYPOLAR` |  | Copies round a center point |
| `ARRAYRECT` |  | Copies in rows and columns |
| `ASBUILT` | `ASB` | ASBUILT reads the as-built points a crew measured (CSV / TXT, as EXPORTPOINTS writes) and compares them with the drawing’s points: within or outside the tolerance, not measured, extra. Marks them on the layer AS-BUILT and downloads a CSV report. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Define an attribute (a tag a block asks a value for) to put in a block (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edit a block reference's attribute values on the command line, one after another (Enter keeps a value) |
| `ATTSYNC` |  | Bring a block's references in line with its attribute definitions: new ones added with their defaults, removed ones dropped, positions and text reset; values kept |
| `AUDIT` |  | Checks the open drawing for damage: numbers that are not finite, objects with no size, missing layers, blocks, styles and linetypes, blocks that contain themselves, shared ids, broken dimensions and hatches. Lists what it finds by kind and asks before fixing; the fix is one undo step. |
| `AUNITS` | `ANGUNITS` | How angles are shown and typed: decimal degrees, degrees-minutes-seconds or bearings like N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Drawing autocomplete on or off, or list what the drawing's patterns suggest now. |
| `AUTOCONSTRAIN` |  | Add coincident, horizontal and vertical constraints where the geometry is already close |
| `AUTODIM` | `ADIM` | Dimension by rules: overall size, chains along the sides, openings, hole diameters and grid spacing, without repeating what is already dimensioned. |
| `AUTOSHEET` | `ASH` | Lays out sheets by itself: picks paper and standard scales and places every view with a caption and a title block. |
| `BATTMAN` |  | Block attribute manager: order, tags, prompts, defaults and modes of a block's attributes, then its references updated |
| `BCLOSE` |  | Close the block editor: save the block or discard the changes |
| `BCONVERT` |  | BCONVERT finds geometry that repeats and turns it into block references. Select the objects that repeat: every other set of objects in the open space that is the same geometry, moved and turned by any angle, is found, and with Mirrored or Scaled turned on also mirror images and copies at another size. Give the new block a name and a base point; the selection and every copy become references to it, each with its own rotation and scale. Or choose Block and name an existing block to find loose copies of its objects. A copy must have the same layer, color, linetype and lineweight unless Properties is set to Ignore. Objects on locked layers are left alone. One undo step. |
| `BEDIT` | `BE` | Block editor: edit a block's objects and attributes; BCLOSE saves (BE) |
| `BLEND` |  | BLEND: a spline between the ends of two open curves, picked near the ends to join. CONtinuity: Tangent follows both directions, Smooth also follows how they bend. |
| `BLOCK` | `B`, `BMAKE` | Make a block from objects (they become one reference) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: every reference to one block becomes a reference to another, in the same place with the same scale and rotation. Values of attributes both blocks have are kept. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE shows the Blocks panel with the cursor in its filter. The panel shows a picture of each block (the ones placed most recently first), as a list or a grid; click a picture or drag it onto the drawing to place the block with INSERT. Under Libraries, add a DWG or DXF file of your own: its blocks are listed with pictures and are copied into this drawing when you place one. In CadCraft Studio a folder of drawings can be added too, and files and folders are remembered. |
| `BOMEDIT` | `BOMCOLUMNS` | A bill of materials table's columns, grouping, sorting, title, totals and remarks |
| `BOMEXPORT` |  | Save a bill of materials table as a .csv file |
| `BOMTABLE` | `BOM` | A live bill of materials table of one zone, or of the whole drawing |
| `BOMUPDATE` |  | Update every bill of materials table now, frozen ones too |
| `BOMZONE` | `BZONE` | A named area of the drawing for a bill of materials: two corners, a polygon, or a closed object's outline |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pick a point inside a closed area and get a closed polyline round it. Arcs stay arcs. Islands outlines the areas inside it too. |
| `BOX` |  | A box: two corners and a height (3D) |
| `BPARAMETER` | `BPARAM` | Not built yet: adding a parameter (such as Visibility) to a block. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Block parameters: named parameters with formulas, and several visibility parameters in one block. Works in the block editor (assign the selected objects to a state) and on a selected reference (its own values and states). |
| `BREAK` | `BR` | Break a line, arc, circle or polyline between two points (BR) |
| `BREAKATPOINT` |  | Split a line, arc or polyline in two at a point |
| `BREAKLINE` |  | Draw a line with a break symbol; its size and the extension past the ends are remembered. |
| `BREPLACE` |  | BREPLACE swaps one block for another. Selected: pick block references and name the block to use instead. All: name a block and its replacement, and every reference in every space and inside other blocks changes. A reference keeps its place, scale, rotation and layer, and the values of attributes both blocks have; values the new block has no place for are dropped and named. |
| `BSEARCH` |  | BSEARCH finds blocks. Name: part of a block name, or a pattern with * and ?. Attribute: a value (or TAG=value) held by a reference's attributes. Geometry: select objects or one block reference, and the blocks whose shape is at least 85% alike are listed, best first; size, rotation and mirroring do not count. The references found in the open space are selected, ready for the next command. |
| `BURST` |  | Explode block references and keep what their attributes say: each value becomes text on the attribute's layer. |
| `BVHIDE` | `BVH` | In the block editor: hide objects in the current visibility state. |
| `BVSHOW` | `BVSH` | In the block editor: show objects the current visibility state hides (they show faded to pick). |
| `BVSTATE` | `BVS` | In the block editor, on a block with visibility states: switch to a state, or add, rename or delete one. |
| `CAL` |  | Work out a length or number: + − * / and brackets, as you type them anywhere |
| `CENTERLINE` | `CL` | Center line between two lines: midway between them, or along the bisector when they meet (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Center mark: a cross at the center of a circle or arc, with center lines to just beyond it (CM) |
| `CHAMFER` | `CHA` | Bevel the corner between two lines (D two distances, A length and angle, P every corner of a polyline) |
| `CHSPACE` |  | CHSPACE: move objects between a sheet and the model through a viewport. They are scaled and turned so they look the same from the other side. On a sheet they go to the model; while you work through a viewport (MSPACE) they come to the sheet. |
| `CIRCLE` | `C` | Center and radius, diameter, 2 or 3 points |
| `CLASS` |  | Put the selected objects in a class, or with nothing selected set the active class (? lists them) |
| `CLASSES` | `CLS` | The Classes panel: classes sort objects across layers; show, hide and style them, and override them per viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dock or float the command line, make it one line, set its history lines, or open the history (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compare dimension styles, text styles, layers, sheets or units: two in this drawing, or this drawing against another open one, and copy a value across. |
| `CONSTRAINTBAR` | `CBAR` | Show or hide the constraint bars (Showall / Hideall, or per object) |
| `COPY` | `CO`, `CP` | Copy objects, as many times as you click |
| `COPYBASE` |  | Copy objects to the clipboard with a base point you pick |
| `COPYCLIP` |  | Copy objects to the clipboard (Ctrl+C); PASTECLIP places them |
| `COUNT` | `BCOUNT` | Count block references: pick one to select and count every reference of its block |
| `COUNTTABLE` |  | Place a table of block counts |
| `CREDITS` |  | Puts the Library credits in the drawing as a table. Run it again to update the table from the items in the drawing now. |
| `CURSORSIZE` |  | The crosshair's size: 100 runs it edge to edge across the drawing (Settings › Cursor › Full screen) |
| `CUTCLIP` |  | Cut objects to the clipboard (Ctrl+X): copy, then erase |
| `CYLINDER` | `CYL` | A cylinder: centre, radius and height (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | List blocks, their attributes and object properties as a table in the drawing or a CSV file |
| `DATALINK` | `DL` | A table from a CSV file that remembers the file, so it can be read again |
| `DATALINKUPDATE` | `DLU` | Read a data link's file again and refill its tables |
| `DCALIGNED` | `DCALI` | Dimensional constraint: true distance between points, a point and a line, or two lines |
| `DCANGULAR` | `DCANG` | Dimensional constraint: angle between two lines, or of an arc |
| `DCCONVERT` |  | Turn dimensions drawn on constrainable geometry into dimensional constraints |
| `DCDIAMETER` | `DCDIA` | Dimensional constraint: diameter of a circle or arc |
| `DCDISPLAY` |  | Show or hide dimensional constraints on the drawing |
| `DCHORIZONTAL` | `DCHOR` | Dimensional constraint: horizontal distance |
| `DCLINEAR` | `DCLIN` | Dimensional constraint: horizontal or vertical distance, from where you place it |
| `DCRADIUS` | `DCRAD` | Dimensional constraint: radius of a circle or arc |
| `DCVERTICAL` | `DCVER` | Dimensional constraint: vertical distance |
| `DELBLOCKS` |  | Delete blocks: every reference (nested ones too, on every sheet) and the definitions |
| `DELCONSTRAINT` | `DELCON` | Remove every constraint (geometric and dimensional) from the objects you select |
| `DELOPENING` |  | Take a door or window out of a wall. |
| `DESCRIBE` | `DESC` | Say what the drawing holds: how many objects, of what kind, how big, what is selected. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Clear the selection (Esc) |
| `DETAILS` | `DET` | Your firm's own details, found for what you are drawing: find, add a block, list, remove, turn the offers on or off. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Draw a diagram from text: a Mermaid flowchart, a PlantUML component diagram, D2, a from-to list or draw.io XML, as blocks and connectors you can edit |
| `DIMALIGNED` | `DAL`, `DIMALI` | True distance between two points |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angle between two lines, of an arc, or by three points |
| `DIMARC` | `DAR` | Arc length dimension: the distance along an arc, with the arc symbol (DAR) |
| `DIMASZ` |  | Dimension setting: Arrow size |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensions stacked from one base line |
| `DIMBREAK` | `DBREAK` | Break dimension and extension lines where they cross other objects (Auto), between two points (Manual), or remove the breaks |
| `DIMCONSTRAINT` | `DCON` | Dimensional constraints: linear, aligned, angular, radius, diameter, convert |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | A chain of dimensions, each from the end of the last |
| `DIMDEC` |  | Dimension setting: Decimal places |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter of an arc or circle |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Free dimensions from the objects they are tied to (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Change dimension text (Home, New text, Rotate) or slant the extension lines (Oblique) |
| `DIMEXE` |  | Dimension setting: Extension beyond the dimension line |
| `DIMEXO` |  | Dimension setting: Offset from the origin |
| `DIMGAP` |  | Dimension setting: Gap round the text |
| `DIMINSPECT` |  | Inspection dimension: a frame round the value with a label and how often the part is checked |
| `DIMJOGGED` | `DJO`, `JOG` | Jogged radius dimension: a radius drawn from a nearer point when the center is far away (DJO) |
| `DIMJOGLINE` | `DJL` | Add a jog symbol to a linear or aligned dimension line, to show the distance is not drawn to scale (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontal or vertical distance (R for any angle) |
| `DIMLUNIT` |  | Dimension setting: length format (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinate dimension: the X or Y distance of a point from the UCS origin, on a leader (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Override dimension variables on selected dimensions without changing their style; Clear puts the style back (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius of an arc or circle |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Tie a dimension's points to objects, so it follows and measures again when they move (DRE) |
| `DIMSCALE` |  | Dimension setting: Overall scale (sizes × this) |
| `DIMSPACE` |  | Even spacing between parallel dimensions, measured from a base dimension (0 lines them up, Auto is twice the text height) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Make, change, set current, delete, apply and compare named dimension styles (the dialog; -DIMSTYLE on the command line) |
| `DIMTEDIT` | `DIMTED` | Move dimension text to the left, right or center of the dimension line, or turn it |
| `DIMTEXTUNIT` | `DTU` | Dimension text in mm, cm, m or km, or in the drawing's own units: the selected dimensions, else new ones (DTU) |
| `DIMTXT` |  | Dimension setting: Text height |
| `DIST` | `DI` | Distance and angle between two points |
| `DISTRIBUTE` |  | Space the selected objects evenly, side to side or up and down: equal steps between centres, or equal gaps; the outer two stay |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marks that cut a line, arc, circle, polyline, spline or ellipse into equal parts. Points, or with Block a block at each mark. |
| `DOCUMENTS` | `DOCS` | Open the Documents panel: check drawings out and in, revisions, release states and approval for a project folder |
| `DOOR` | `DR` | Put a door in a wall. The side you click is the side it swings to. |
| `DRAWORDER` |  | Change the draw order: bring objects to the front, send them to the back, or put them above or under other objects. |
| `DUPLICATE` | `DUP` | A copy that moves with the pointer: click to put it down (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | The drawing's properties: title, author and the rest, and your own name and value pairs |
| `DXFOUT` |  | Download the drawing as DXF R12 (Save keeps its own format) |
| `EATTEDIT` | `DDATTE` | Edit a block reference's attributes: values, text and properties, one attribute at a time |
| `ELLIPSE` | `EL` | Axis endpoints and the other half-axis |
| `ERASE` | `E`, `DELETE` | Remove objects |
| `EXPLODE` | `X` | Break polylines, blocks and dimensions into their parts |
| `EXPORT` | `EXP` | Save a copy of the drawing in a file type an add-on writes |
| `EXPORT3D` | `3DEXPORT` | Export the 3D model: GLB, OBJ or STL |
| `EXPORTPOINTS` | `EXPPTS` | Write points, and blocks' insertion points with one attribute as the description, to a CSV or TXT file (PNEZD, PENZD or XYZ) for BIM and survey programs |
| `EXTEND` | `EX` | Lengthen objects to meet others: click near an end, drag through several, or Shift+click to trim |
| `EXTRIM` |  | EXTRIM: pick one cutting edge, then a side. Everything that crosses the edge is trimmed on that side. The pieces that would go show as you move the pointer. |
| `EXTRUDE` | `EXT` | Extrude closed 2D objects into solids (3D) |
| `FIELD` |  | Put a field in a text, a table cell or an attribute: a date, the file name, the sheet number, a drawing property, an object's area or length, or a formula |
| `FILLET` | `F` | Round or square the corner between two objects (R radius, P every corner of a polyline, M several) |
| `FIND` |  | Find and replace words in text, attribute values and dimension text |
| `FLATTEN` |  | Set the height (Z) and thickness of the selected objects to 0, in the blocks they use too. |
| `FLOOR` |  | Choose the floor to draw on, add one, or move or copy the selection to one. |
| `FLOORLAYERS` |  | Turn floors into layers named Floor-Layer, for a file going to someone without floors. |
| `FLOORS` | `FLR` | Open the Floors panel: stack floors in one model space. |
| `GCCOINCIDENT` |  | Constraint: two points meet, or a point stays on an object |
| `GCCOLLINEAR` |  | Constraint: two lines stay on one line |
| `GCCONCENTRIC` |  | Constraint: two circles or arcs share a centre |
| `GCEQUAL` |  | Constraint: two lines stay the same length, or two circles/arcs the same radius |
| `GCFIX` |  | Constraint: a point or a whole object stays where it is |
| `GCHORIZONTAL` |  | Constraint: a line (or two points) stays horizontal |
| `GCPARALLEL` |  | Constraint: two lines stay parallel |
| `GCPERPENDICULAR` |  | Constraint: two lines stay at right angles |
| `GCSYMMETRIC` |  | Constraint: two points, lines or circles mirror each other across a line |
| `GCTANGENT` |  | Constraint: a line and a circle or arc (or two of them) stay tangent |
| `GCVERTICAL` |  | Constraint: a line (or two points) stays vertical |
| `GDSIN` | `GDS` | View an IC layout (a GDSII stream file): every layer and datatype as a drawing layer, flat, in user units; for viewing and measuring only (lab spike) |
| `GEOMCONSTRAINT` | `GCON` | Geometric constraints: horizontal, vertical, parallel, tangent, coincident… |
| `GLBOUT` |  | Export the 3D model as GLB (glTF) |
| `GRADIENT` | `GD` | Fills an area with a gradient of one or two colors |
| `GRID` |  | Set the grid: the distance between the lines, every Nth line as a major line, ON or OFF, or Auto to follow the zoom again |
| `GRIDMOVE` | `GM` | Move a grid line and carry what hangs on it: walls stretch, columns, bubbles and tags move, dimensions follow. |
| `GROUP` | `G` | GROUP (G): give the selected objects a name they share. A click on one of them then selects them all. Enter at the name makes an unnamed group. |
| `GROUPEDIT` |  | GROUPEDIT: change a group. Pick one of its objects or give its Name, then Add or Remove objects, REName it, change its Description, or say whether a click selects it whole. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fill an area with a solid fill or a pattern: click inside it, or select closed objects (H) |
| `HATCHEDIT` | `HE` | Change a hatch: pattern, scale, angle, origin, and its link to a boundary. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Makes the boundary polylines again from a hatch, linked to it or not |
| `HATCHTOBACK` |  | Send every hatch behind everything else. |
| `HELP` | `?` | This list |
| `HIDEOBJECTS` |  | Hide the selected objects until UNISOLATEOBJECTS. Not saved with the drawing. |
| `HISTORY` | `HIST` | HISTORY (HIST): the versions of this drawing — copies kept on this computer when Studio saves it, and the cloud's versions — to open, restore, and compare with what changed shown in colour. |
| `ID` |  | Coordinates of a point |
| `IMAGE` | `IM` | Give CadCraft the picture files a drawing uses (a DWG stores only where they were). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Place a picture (PNG or JPEG) from a file. |
| `IMAGECLIP` | `ICL` | Clip a picture to a rectangle or a polygon, or remove its clip. |
| `IMPORT` | `IMP` | Import a file of a kind an add-on reads, into this drawing |
| `INSERT` | `I`, `DDINSERT` | Place a block (S scale, R rotate); F from a DWG/DXF file, L from the library |
| `INTERSECT` | `IN` | Keep only what solids have in common (3D), or the area 2D regions share |
| `ISODRAFT` |  | ISODRAFT: isometric drafting on or off, or straight onto the Left, Top or Right plane. While it is on, Ortho and polar tracking follow the plane's two axes, the grid is drawn isometric, and ELLIPSE has Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Show only the selected objects; everything else in this space is hidden until UNISOLATEOBJECTS. Not saved with the drawing. |
| `ISOPLANE` |  | ISOPLANE: choose the isometric plane to draw on: Left, Top or Right. Enter goes to the next one, as F5 does while isometric drafting is on. |
| `JOIN` | `J` | Join lines, arcs and polylines that meet end to end into one polyline; lines on one line into one line (J) |
| `LASER` | `LASERCUT` | Open the Laser panel: send layers to a laser cutter or engraver (GRBL G-code) |
| `LASSOMODE` |  | Press and drag draws a lasso (1) or a rectangle (0) |
| `LAYDEL` |  | Delete a layer and every object on it (in the model, on sheets and in blocks) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Open the Layer manager: every layer in one table |
| `LAYERPANEL` |  | Show the layers panel |
| `LAYFRZ` |  | Freeze the layer of each object you pick |
| `LAYGROUP` | `LG` | Group layers into folders in the Layers panel. |
| `LAYISO` |  | Isolate the layers of the selected objects (every other layer off) |
| `LAYLOCKFADE` |  | Set how much objects on locked layers fade, and whether a click can select them. |
| `LAYMCUR` |  | Make the layer of the object you pick current |
| `LAYMRG` |  | Merge layers: their objects move to a target layer, and the merged layers go |
| `LAYOFF` |  | Turn off the layer of each object you pick |
| `LAYON` |  | Turn every layer on |
| `LAYOUT` | `LO`, `NEWLAYOUT` | A new sheet with a title block and a viewport |
| `LAYTHW` |  | Thaw every layer |
| `LAYUNISO` |  | Turn back on the layers LAYISO turned off |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converts text typed with old Vietnamese fonts (TCVN3 / ABC fonts such as .VnTime, and VNI fonts such as VNI-Times) to Unicode. Such text is already shown as it reads; this rewrites it for good, with a count and one undo step. |
| `LENGTHEN` | `LEN` | Lengthen or shorten lines, arcs and polylines: by an amount, a percentage, to a total, or by dragging (LEN) |
| `LIBRARY` | `LIB` | The library panel: place items, check for updates, credits |
| `LIMITS` |  | Set the drawing limits: ON, OFF, or the lower-left and upper-right corners. With the limits ON, points outside them are refused |
| `LINE` | `L` | Straight segments, each its own object |
| `LINETYPE` | `LT`, `CELTYPE` | The linetype new objects get (by layer, by block, or a named one) |
| `LINKVIEWS` | `SYNCVIEWS` | Pan and zoom every pane together (split screen), to compare two drawings or revisions |
| `LISPEDIT` | `VLIDE` | LISPEDIT (or VLIDE) opens the LISP editor: a window to write, load and try a routine. Load into the drawing reads every form, as loading the file with APPLOAD does, and makes its commands. Run selection evaluates the selected forms, or the form the cursor is in. The console shows what the routine printed and each error with its line. The matching parenthesis is marked as you type and Enter indents the new line. New, Open and Save work on a .lsp file. The lists beside the text show the functions the routine defines, the ones it calls that this LISP does not have yet, and every function it has. The window does not block the drawing, so a routine can ask for points; Stop or Esc ends a routine that is running. |
| `LIST` | `LI`, `LS` | Describe objects in the history |
| `LTSCALE` | `LTS` | The drawing's linetype scale (every dash and gap is multiplied by it) |
| `LWDISPLAY` | `LWT` | Show or hide lineweights on screen (the LWT button in the status bar) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | The lineweight new objects get (by layer, by block, default, or mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | map layers under the model space: the drawing’s coordinate system, tiles, WMS, WMTS, ArcGIS, pictures |
| `MASSPROP` |  | MASSPROP: section properties of regions and closed objects: area, perimeter, centroid, moments and product of inertia, radii of gyration and the principal axes. Exact for lines and arcs. It can write the report to a text file. |
| `MATCHPROP` | `MA`, `PAINTER` | Match properties: copy one object's layer, color and more onto others (MA) |
| `MEASURE` | `ME` | MEASURE (ME): a mark every given length along a line, arc, circle, polyline, spline or ellipse, from the end nearest your pick. Points, or with Block a block at each mark. |
| `MEASUREGEOM` | `MEA` | Measure a distance, a radius, an angle or an area (MEA) |
| `MINSERT` |  | MINSERT: place a block in rows and columns in one go. Each one is its own reference, so you can move or erase any of them. |
| `MIRROR` | `MI` | Mirror objects across a line |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: an arrow, a leader and a note, as one object (MLD) |
| `MLEADERALIGN` | `MLA` | Line multileaders up with one of them along a direction, at equal spacing, or distributed between two points (MLA) |
| `MLEADERCOLLECT` | `MLC` | Collect several multileaders into one: their blocks in a row or a column, or their notes one under the other (MLC) |
| `MLEADEREDIT` | `MLE` | Add leader lines to a multileader or remove them; switch its content between text and a block (MLE) |
| `MLINE` |  | Draw parallel lines together, joined at the corners. |
| `MOVE` | `M` | Move objects by a base point and a second point |
| `MSPACE` | `MS` | Work on the model through a viewport of the open sheet (or double-click inside the viewport). |
| `MTEXT` | `MT`, `T` | Paragraph text: drag its width, then type in place; Enter starts a new paragraph (T) |
| `MVIEW` | `MV` | A viewport onto the model, on a layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Named views: save the view on screen (or a window) under a name and go back to it (NV) |
| `NCOPY` |  | Copy objects out of a block reference or a linked drawing into the drawing, without exploding it. |
| `NEARBY` |  | Say what lies close to the cursor, nearest first, with the distance and the side. |
| `NEW` |  | Start a new drawing |
| `OBJECTSCALE` | `OBJSCALE` | Annotation scales of annotative text and dimensions: add a scale, delete one, add the current scale, or list them (each viewport shows them at the size for its own scale) |
| `OBJOUT` |  | Export the 3D model as OBJ |
| `OFFICESTANDARD` | `OFFSTD` | The office standard: text heights on paper, layers, title block fields and templates in one record. Shows the one in force and where it comes from; Import a .json record into this drawing, add the office layers the drawing lacks, list the title block fields. |
| `OFFSET` | `O` | Parallel copies at a distance |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: how OFFSET closes the gaps at the outer corners of a polyline. 0 extends the segments, 1 adds an arc, 2 adds a straight cut. Kept for this session. |
| `OLELIST` | `OLES` | List the OLE objects a drawing carries and put a copy of one's picture where you choose |
| `OPEN` |  | Open a DWG or DXF from this computer |
| `OPENIN3D` |  | Open this drawing in the 3D modeling app, in a new tab (nothing is uploaded) |
| `OPTIONKEYS` | `OPTKEYS` | Give command options letters of your own (ARRAY.PO, P), in one text file |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Open the object snap menu: pick which snaps are on. Also a right-click on Snap in the status bar. |
| `OVERKILL` |  | Delete duplicate objects and merge overlapping or end-to-end lines and arcs, within a tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | The Parameters panel: user parameters and dimensional constraints in one table |
| `PARTSLIST` | `PLIST` | A parts list table of every standard part and steel section placed from the Library |
| `PASTEAREA` | `PAREA` | Paste an area copied in MarkupCraft (Copy area) at its true size, as a picture. |
| `PASTEBLOCK` |  | PASTEBLOCK: paste what you copied as one block. The block gets a name of its own; RENAME gives it yours. |
| `PASTECLIP` |  | Paste the clipboard: it follows the cursor, click where it goes (Ctrl+V) |
| `PASTEORIG` |  | Paste the clipboard at the coordinates it was copied from (Ctrl+Shift+V) |
| `PDF` |  | Give CadCraft the PDF files the drawing's underlays use |
| `PDFADJUST` |  | Fade, contrast, monochrome or switch off a PDF underlay |
| `PDFATTACH` | `PDFATT` | Attach a PDF page as an underlay (PDFATTACH) |
| `PDFCLIP` |  | Clip a PDF underlay to a rectangle or polygon |
| `PDFIMPORT` | `PDFIM` | Turn a PDF page's lines, fills and text into drawing objects (PDFIMPORT) |
| `PDFLAYERS` |  | Switch the layers of a PDF underlay on or off |
| `PEDIT` | `PE` | Edit a polyline: close, open, join, width, fit curve, spline curve, decurve, linetype generation, reverse; lines, arcs and splines can be turned into polylines |
| `PENPRESSURE` |  | Whether a pen stroke's pressure sets the lineweight of what SKETCHFIX and SKETCHLIVE make (on by default). Kept in this browser. |
| `PHOTOSKETCH` | `PSK` | Turns a photo of a hand sketch on paper into lines and arcs at a scale, straightening the perspective and giving each pen colour its own layer. |
| `PICKSTYLE` |  | PICKSTYLE: whether selecting one object of a group selects the whole group (1, the start setting) or just that object (0). Kept for this session. |
| `PLAN` |  | Turn the view so the UCS X axis (Current ucs, a saved Ucs, or the World) is level on screen. Nothing in the drawing moves. |
| `PLINE` | `PL` | A polyline of line and arc segments |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot to PDF: a layout, or the model at a scale |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plot style tables: set what each colour prints as (colour, black, gray, ink, lineweight); kept with the drawing (STYLESMANAGER) |
| `POINT` | `PO` | Point objects |
| `POINTCLOUD` | `PC` | the attached point cloud: slice, height, thickness, color, size, visible, zoom, detach |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | attach a point cloud (LAS, LAZ, XYZ, PTS) under the drawing |
| `POLARANG` |  | The polar tracking step in degrees (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | A regular polygon |
| `PRESSPULL` |  | Push or pull a face of a solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Open the Properties panel (also Ctrl+1, or double-click an object) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Fold the Properties panel to the edge of the window |
| `PSPACE` | `PS` | Leave the viewport you are working in and go back to the sheet (or double-click outside it). |
| `PUBLISH` | `-PUBLISH` | Plot several or all sheets into one PDF (a page and a bookmark per sheet) |
| `PURGE` | `PU` | Remove block definitions nothing uses |
| `QDIM` |  | Quick dimension: dimension several objects at once (continuous, baseline, staggered, ordinate, radius or diameter) |
| `QPMODE` | `QP` | Quick Properties by the cursor on or off |
| `QSELECT` | `QS` | Quick select: every object of a type whose layer, color, size or name matches (QS) |
| `RASTERSNAP` |  | Turn snapping to the lines of scanned sheets on or off. |
| `RAY` |  | Ray: a construction line from a point, endless one way. |
| `RECOVER` |  | Opens a damaged DXF or DWG: skips what cannot be read instead of refusing the file, says what was skipped, then checks and repairs the drawing as AUDIT does. |
| `RECTANG` | `REC`, `RECTANGLE` | A closed polyline from two corners |
| `REDLINE` | `RDL` | Redline to revision: read a MarkupCraft redline package, accept or reject each change, cloud the accepted ones with a revision log, and save the answers file (RDL) |
| `REDO` |  | Redo what was undone |
| `REFCLOSE` |  | Finish editing a block in place: save it, or discard the changes |
| `REFEDIT` |  | Edit a block in place, where a reference of it sits, with the rest of the drawing faded; REFCLOSE saves it |
| `REGEN` | `RE` | Rebuild what is drawn in this tab from the drawing |
| `REGENALL` | `REA` | Rebuild what is drawn in every tab, pane and open drawing |
| `REGION` | `REG` | REGION (REG): make flat areas (regions) from closed objects, or from lines, arcs and polylines that close a loop end to end. UNION, SUBTRACT and INTERSECT then combine regions, and MASSPROP gives their section properties. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Register several scans: place them in one frame by picked point pairs or targets, refine with ICP, export one LAS or E57 |
| `REINIT` |  | Reload your aliases file |
| `RENAME` | `-RENAME`, `REN` | Rename a layer or a block (every object or reference follows) |
| `REVCLOUD` | `RC` | Revision cloud: round a rectangle, a polygon, a freehand path or an object (RC) |
| `REVOLVE` | `REV` | Turn closed 2D objects about an axis into solids (3D) |
| `ROTATE` | `RO` | Rotate objects about a base point |
| `SAMPLES` | `SAMPLE` | Open one of CadCraft's sample drawings (an architectural set, an as-built) to learn from |
| `SAVE` | `QSAVE` | Download the drawing in its format (DWG or DXF) |
| `SAVEAS` |  | Download the drawing as DWG or DXF: choose which |
| `SAYSEL` |  | Say what is selected, one sentence each. |
| `SCALE` | `SC` | Scale objects about a base point |
| `SCALELISTEDIT` | `SCALELIST` | Add, edit and delete the drawing's own scales; they appear in the viewport and plot scale lists and are saved in the file (SCALELIST) |
| `SCANALIGN` | `SCL` | Align a scanned sheet to two points: move, turn and, if you choose, scale it. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insert a scanned drawing: a PNG, JPEG or TIFF (one page or all pages of a multi-page file) or a PDF page that is a picture. |
| `SCANCLEAN` | `SCC` | Make a scanned sheet black and white and remove specks. |
| `SCANCROP` | `SCR` | Crop a scanned sheet to a window. |
| `SCANDESKEW` | `SCD` | Find the angle a scanned sheet's long lines lie at and turn the sheet square once you accept the angle. |
| `SCANERASE` | `SCE` | Erase an area of a scanned sheet: a rectangle, a polygon or a lasso. |
| `SCANINFO` | `SCI` | Show a scanned sheet's original file and the steps taken since. |
| `SCANSCALE` | `SCS` | Scale a scanned sheet: pick two points on it and type the true distance between them. |
| `SCANTRACE` | `SCT` | Trace a scanned sheet into lines and arcs on a new layer, to a tolerance you set. Text and hatching stay as raster. |
| `SELECT` |  | Select objects now (for P, Previous, in the next command) |
| `SELECTALL` | `AI_SELALL` | Select every object you can edit on this tab (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Select every object like the ones you pick: same type, layer and color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Shows the Sheet Set panel: sheets from many drawings, numbered, published as one PDF. |
| `SHORTCUTS` | `KEYS` | Give any command a key of your own (Ctrl or Alt with a letter, or a free function key), kept in this browser or desktop app. |
| `SHXFONTS` | `SHX` | Give CadCraft SHX fonts from a folder or files, so text styles that name them draw in them (list, remove, reverse) |
| `SKETCHFIX` | `SKF` | Draw freehand strokes; each becomes a clean line, circle, arc, rectangle or polyline, squared and joined to the others. |
| `SKETCHLIVE` | `SKL` | Sketch with a pen: each stroke becomes a precise line, circle, arc or rectangle as you lift the pen, snapped to the drawing, with its size to type over. |
| `SPLINE` | `SPL` | Draw a spline through points (or with a control polygon), or turn a polyline into one |
| `SPLINEDIT` | `SPE` | Edit a spline: fit points, control points and weights, open or close it, reverse it, or convert it to a polyline |
| `SPLIT` |  | Split the drawing area into panes (as VPORTS on the model; from a sheet too) |
| `STEELMEMBER` | `SMEMBER` | A steel member in 3D from a standard section: two points (a beam) or a base point and a height (Column) |
| `STLOUT` |  | Export the 3D model as STL (millimeters) |
| `STRETCH` | `S` | Stretch: drag a crossing window over the ends to move; what is inside moves, the rest stays (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Text styles: the font, height, width and slant new text takes (the dialog; -STYLE on the command line) |
| `SUBTRACT` | `SU` | Take solids away from others (3D), or 2D regions away from regions |
| `SWBOUT` | `SWMACRO` | Download a macro for SolidWorks (.swb) that rebuilds the model as one constrained sketch |
| `SWEEP` |  | Sweep closed 2D objects along a path (line, polyline, arc, circle) into solids (3D) |
| `TABLE` | `TB` | Make a table: rows and columns, or from spreadsheet cells on the clipboard or a CSV file |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edit a table: type in a cell, insert and delete rows and columns, sizes, merged cells, alignment |
| `TABLEEXPORT` |  | Save what a table shows as a CSV file |
| `TABLEPASTE` | `PASTETABLE` | Make a table from spreadsheet cells on the clipboard |
| `TABLESTYLE` | `TS` | Table styles: text heights, alignment, margin and borders for title, header and data rows |
| `TAGS` |  | Tags on block references: define a tag (kind, allowed values, blocks it applies to), set it on the selected references, and list them as a schedule that you can save as CSV |
| `TEXT` | `DT`, `DTEXT` | Single-line text; Enter starts the next line |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edit text in place: pick a text (or double-click one) (ED) |
| `TEXTMASK` | `TMASK` | Put a background mask behind texts (the drawing's background or a colour), or take it away. |
| `TEXTTOFRONT` |  | Bring all text, dimensions and leaders in front of everything else. |
| `TOOLBAR` |  | Choose what the toolbar buttons show: icons and text, just icons, or just text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Put the toolbar on the top, bottom, left or right of the window |
| `TOOLBARROWS` |  | Choose how many rows the toolbar uses: wrap to fit, 2, or 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Make the bars above the drawing standard or compact |
| `TOUCHCROSSHAIR` | `TCX` | Offset crosshair for drafting with a finger: one finger moves a crosshair that sits above and beside it, so the finger does not cover the pick point. Lifting the finger picks nothing; the Click button or a tap with a second finger picks at the crosshair, and holding Click while you move drags. A long press or the Enter button is Enter. Two fingers pan and zoom. Options: ON, OFF, Auto (on only where a finger is the only pointer), Distance, Side. |
| `TOUR` | `TUTORIAL` | Take the six-step first-drawing tour again |
| `TRIM` | `TR` | Cut objects back to where others cross them: click a piece, drag through several, or Shift+click to extend |
| `TRIMEXTENDMODE` |  | How TRIM and EXTEND start: 1 Quick (every object is a cutting edge or boundary), 0 Standard (choose the edges first) |
| `TTR` |  | A circle tangent to two objects, with a radius you give (the same as CIRCLE T). |
| `TURNLEFT` |  | Turn the view 90° left (counter-clockwise): UCS Z -90, and the view follows. Nothing in the drawing moves. |
| `TURNRIGHT` |  | Turn the view 90° right (clockwise): UCS Z 90, and the view follows. Nothing in the drawing moves. |
| `TURNWORLD` |  | Back to the world: UCS World, and the view is level again. |
| `TXT2MTXT` | `T2M` | Join single-line texts into one paragraph text, top to bottom. |
| `UCS` |  | Your own coordinate system: an origin and an X axis (origin, Z angle, 3point, OBject, Previous, World, NAmed). Points you type, ortho, polar tracking, the grid and new text follow it; the view turns so its X axis is level. Nothing in the drawing moves. |
| `UNDO` | `U` | Undo the last command |
| `UNGROUP` |  | UNGROUP: take groups apart. Select objects of the groups, or give a Name. The objects stay in the drawing. |
| `UNION` | `UNI` | Join solids into one (3D), or 2D regions into one region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Show every object hidden by ISOLATEOBJECTS or HIDEOBJECTS again. |
| `UNITS` | `UN`, `DDUNITS` | How lengths are shown and typed: decimal, feet and inches, fractions (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Work the fields out again, and choose when they update by themselves |
| `USDOUT` |  | Export the 3D model as USD (.usda text, .usdc binary or a .usdz package) |
| `VIEW` | `-VIEW`, `V` | Standard 3D views, perspective or parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Place a flat 2D view of the 3D solids (front, top, side or isometric, hidden lines dashed) on a sheet or in the model |
| `VIEWLABEL` | `VL` | A view title on a sheet that shows its viewport's view name, and changes with it. |
| `VOICE` |  | Turn spoken commands on or off. They are recognised on this computer. |
| `VPCLIP` |  | Clips a sheet viewport to a closed object or a drawn polygon; Delete makes it a rectangle again |
| `VPLAYER` |  | Freeze or thaw layers in some viewports only (Freeze, Thaw, Reset), and choose which layers new viewports start frozen (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Split the drawing area into panes, each with its own view (on a sheet: a viewport, as MVIEW) |
| `VPVIEW` |  | Set what a viewport shows: pick a window on the model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visual style of the 3D view: shaded, edges, hidden line, wireframe, X-ray |
| `WALL` | `WA` | Draw 2D walls like a polyline. They join, and carry doors and windows. |
| `WALLARC` | `WARC` | Draw an arc of walls. Plan walls are straight, so the arc is drawn as short straight walls (15 degrees each) that join. |
| `WALLDELSEG` |  | Delete a piece of a wall between two points. What is left stays as one or two walls. |
| `WALLDIM` |  | Type a new value for a dimension: the wall at its far end moves square to itself, the wall at the first end holds, and the walls joined to it follow. |
| `WALLDISJOIN` |  | Pick a wall near one end to disallow joins at that end: the end is drawn square and nothing follows it. Pick it again to allow them. |
| `WALLGRID` |  | Lock a wall to a grid line: along it, or one end on it. Move the line with GRIDMOVE and the wall follows. |
| `WALLHOLD` |  | Align and lock: a wall keeps its place against another wall (on its line, or at the distance it has). If one moves the other follows. |
| `WALLHOLDDIM` |  | Lock the distance between two parallel walls. If one moves, the other follows to keep it. |
| `WALLHOLDS` |  | List the locks on the walls. |
| `WALLJOINS` |  | Give every wall of an older drawing its id and store the joins between them. This also happens at the first change you make. |
| `WALLJOINSTYLE` |  | Click a corner where two walls meet end to end to change how it is drawn: mitre, butt, square off. T switches which wall runs through. |
| `WALLOFFSET` | `WO` | Move a wall square to itself by a distance (the walls joined to it follow), or make a copy at that distance. |
| `WALLPICK` |  | Make walls on a line or polyline in the drawing, with the lines joined to it if you say Yes. |
| `WALLPOLY` | `WP` | Draw walls round a regular polygon of 3 to 64 sides, like POLYGON. |
| `WALLRECT` | `WR` | Draw four joined walls from two opposite corners, like RECTANG. |
| `WALLREJOIN` |  | Make two parts of a wall one wall again. The first keeps its place in the drawing. |
| `WALLROT` |  | Draw four joined walls as a rectangle turned to any angle: the first side, then how far out. |
| `WALLSPLIT` | `WS` | Split a wall in two at a point or where another wall crosses. The parts stay joined unless you ask for a gap or free ends. Doors and windows go with their part. |
| `WALLSPLITGAP` |  | Split a wall leaving a gap: type the gap, pick the wall, then the point. The parts keep free ends and can be rejoined. |
| `WALLSTRETCH` |  | Stretch with a window: wall ends inside it move, walls wholly inside move whole, and walls that butt into their sides slide with them. |
| `WALLTAN` |  | Continue a wall with an arc that leaves it along the wall (drawn as short straight walls). |
| `WALLTRACE` |  | Make walls round the smallest closed area of lines and walls around the point you click. |
| `WALLUNHOLD` |  | Take the locks off a wall (and the locks of other walls to it). |
| `WBLOCK` | `W`, `-WBLOCK` | Write a block, some objects or the whole drawing to a new DWG or DXF file (W) |
| `WEDGE` | `WE` | A wedge: two corners and a height; it slopes away from the first corner (3D) |
| `WHEREAMI` | `WHERE` | Say where the cursor is. |
| `WHOHAS` |  | Says who has a drawing open. CadCraft Studio keeps a small lock file beside each open drawing (Plan.dwg.cclock: who, since when, which version) and removes it on close. Options: Current (the open drawing), File (pick one), FOlder (every drawing in a folder that is open somewhere; this also lets Studio keep lock files in that folder), Path (type one), Name (the name others see). A lock not refreshed for five minutes is said to be stale. Not available in a browser. |
| `WINDOW` | `WN` | Put a window in a wall. |
| `XATTACH` | `XA` | Link another DWG or DXF into this drawing, shown read-only (XREF lists and reloads them) |
| `XCLIP` | `XC` | Clip block references and linked drawings to a rectangle or a polygon, or remove the clip. |
| `XLINE` | `XL` | Construction line, endless both ways: through two points, horizontal, vertical, at an angle, bisecting an angle, or offset from a line. |
| `XREF` | `XR`, `-XREF` | Linked drawings (external references): list, attach, reload, bind, detach |
| `ZOOM` | `Z` | Extents, or a window |
