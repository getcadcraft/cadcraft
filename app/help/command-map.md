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

## All commands (275)

| Command | Short names | What it does |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbit the 3D view with the left button |
| `ACCESS` | `AX` | Turn drafting without sight on or off: results spoken through your screen reader, a keyboard cursor on the drawing, snap sounds and spoken commands. |
| `ALIASEDIT` |  | Edit command aliases in one text file (the familiar L, *LINE format) |
| `ALIGN` | `AL` | Move and turn objects so that source points land on destination points (one, two or three pairs), and scale them if you want |
| `ALIGNPANEL` | `ALP` | Open the Align and distribute panel |
| `ALIGNTO` |  | Line up the selected objects' left, centre, right, top, middle or bottom edges, on the selection, the first or last picked object, or a point |
| `APPLOAD` | `AP` | Load applications: LISP routines (.lsp) and their dialog files (.dcl); the Startup Suite (AP) |
| `ARC` | `A` | Three points, or center, start and end |
| `AREA` | `AA` | Area and perimeter by points or of an object; Add and Subtract keep a running total (AA) |
| `ARRAY` | `AR` | Copies in rows and columns, or round a center (AR) |
| `ARRAYPOLAR` |  | Copies round a center point |
| `ARRAYRECT` |  | Copies in rows and columns |
| `ASBUILT` | `ASB` | ASBUILT reads the as-built points a crew measured (CSV / TXT, as EXPORTPOINTS writes) and compares them with the drawing’s points: within or outside the tolerance, not measured, extra. Marks them on the layer AS-BUILT and downloads a CSV report. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Define an attribute (a tag a block asks a value for) to put in a block (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edit a block reference's attribute values on the command line, one after another (Enter keeps a value) |
| `ATTSYNC` |  | Bring a block's references in line with its attribute definitions: new ones added with their defaults, removed ones dropped, positions and text reset; values kept |
| `AUNITS` | `ANGUNITS` | How angles are shown and typed: decimal degrees, degrees-minutes-seconds or bearings like N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Drawing autocomplete on or off, or list what the drawing's patterns suggest now. |
| `AUTOCONSTRAIN` |  | Add coincident, horizontal and vertical constraints where the geometry is already close |
| `AUTODIM` | `ADIM` | Dimension by rules: overall size, chains along the sides, openings, hole diameters and grid spacing, without repeating what is already dimensioned. |
| `AUTOSHEET` | `ASH` | Lays out sheets by itself: picks paper and standard scales and places every view with a caption and a title block. |
| `BATTMAN` |  | Block attribute manager: order, tags, prompts, defaults and modes of a block's attributes, then its references updated |
| `BCLOSE` |  | Close the block editor: save the block or discard the changes |
| `BEDIT` | `BE` | Block editor: edit a block's objects and attributes; BCLOSE saves (BE) |
| `BLOCK` | `B`, `BMAKE` | Make a block from objects (they become one reference) |
| `BOX` |  | A box: two corners and a height (3D) |
| `BPARAMETER` | `BPARAM` | Not built yet: adding a parameter (such as Visibility) to a block. |
| `BREAK` | `BR` | Break a line, arc, circle or polyline between two points (BR) |
| `BREAKATPOINT` |  | Split a line, arc or polyline in two at a point |
| `BVHIDE` | `BVH` | In the block editor: hide objects in the current visibility state. |
| `BVSHOW` | `BVSH` | In the block editor: show objects the current visibility state hides (they show faded to pick). |
| `BVSTATE` | `BVS` | In the block editor, on a block with visibility states: switch to a state, or add, rename or delete one. |
| `CAL` |  | Work out a length or number: + − * / and brackets, as you type them anywhere |
| `CHAMFER` | `CHA` | Bevel the corner between two lines (D two distances, A length and angle, P every corner of a polyline) |
| `CIRCLE` | `C` | Center and radius, diameter, 2 or 3 points |
| `CLASS` |  | Put the selected objects in a class, or with nothing selected set the active class (? lists them) |
| `CLASSES` | `CLS` | The Classes panel: classes sort objects across layers; show, hide and style them, and override them per viewport (CLS) |
| `COMPARESETTINGS` | `CMPSET` | Compare dimension styles, text styles, layers, sheets or units: two in this drawing, or this drawing against another open one, and copy a value across. |
| `CONSTRAINTBAR` | `CBAR` | Show or hide the constraint bars (Showall / Hideall, or per object) |
| `COPY` | `CO`, `CP` | Copy objects, as many times as you click |
| `COPYBASE` |  | Copy objects to the clipboard with a base point you pick |
| `COPYCLIP` |  | Copy objects to the clipboard (Ctrl+C); PASTECLIP places them |
| `COUNT` | `BCOUNT` | Count block references: pick one to select and count every reference of its block |
| `CURSORSIZE` |  | The crosshair's size: 100 runs it edge to edge across the drawing (Settings › Cursor › Full screen) |
| `CUTCLIP` |  | Cut objects to the clipboard (Ctrl+X): copy, then erase |
| `CYLINDER` | `CYL` | A cylinder: centre, radius and height (3D) |
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
| `DESCRIBE` | `DESC` | Say what the drawing holds: how many objects, of what kind, how big, what is selected. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Clear the selection (Esc) |
| `DETAILS` | `DET` | Your firm's own details, found for what you are drawing: find, add a block, list, remove, turn the offers on or off. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Draw a diagram from text: a Mermaid flowchart, a PlantUML component diagram, D2 or a from-to list, as blocks and connectors you can edit |
| `DIMALIGNED` | `DAL`, `DIMALI` | True distance between two points |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angle between two lines, of an arc, or by three points |
| `DIMASZ` |  | Dimension setting: Arrow size |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensions stacked from one base line |
| `DIMCONSTRAINT` | `DCON` | Dimensional constraints: linear, aligned, angular, radius, diameter, convert |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | A chain of dimensions, each from the end of the last |
| `DIMDEC` |  | Dimension setting: Decimal places |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter of an arc or circle |
| `DIMEDIT` | `DED`, `DIMED` | Change dimension text (Home, New text, Rotate) or slant the extension lines (Oblique) |
| `DIMEXE` |  | Dimension setting: Extension beyond the dimension line |
| `DIMEXO` |  | Dimension setting: Offset from the origin |
| `DIMGAP` |  | Dimension setting: Gap round the text |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontal or vertical distance (R for any angle) |
| `DIMLUNIT` |  | Dimension setting: length format (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius of an arc or circle |
| `DIMSCALE` |  | Dimension setting: Overall scale (sizes × this) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Make, change, set current, delete, apply and compare named dimension styles (the dialog; -DIMSTYLE on the command line) |
| `DIMTEDIT` | `DIMTED` | Move dimension text to the left, right or center of the dimension line, or turn it |
| `DIMTEXTUNIT` | `DTU` | Dimension text in mm, cm, m or km, or in the drawing's own units: the selected dimensions, else new ones (DTU) |
| `DIMTXT` |  | Dimension setting: Text height |
| `DIST` | `DI` | Distance and angle between two points |
| `DISTRIBUTE` |  | Space the selected objects evenly, side to side or up and down: equal steps between centres, or equal gaps; the outer two stay |
| `DOCUMENTS` | `DOCS` | Open the Documents panel: check drawings out and in, revisions, release states and approval for a project folder |
| `DUPLICATE` | `DUP` | A copy that moves with the pointer: click to put it down (Ctrl+D) |
| `DXFOUT` |  | Download the drawing as DXF R12 (Save keeps its own format) |
| `EATTEDIT` | `DDATTE` | Edit a block reference's attributes: values, text and properties, one attribute at a time |
| `ELLIPSE` | `EL` | Axis endpoints and the other half-axis |
| `ERASE` | `E`, `DELETE` | Remove objects |
| `EXPLODE` | `X` | Break polylines, blocks and dimensions into their parts |
| `EXPORT` | `EXP` | Save a copy of the drawing in a file type an add-on writes |
| `EXPORT3D` | `3DEXPORT` | Export the 3D model: GLB, OBJ or STL |
| `EXPORTPOINTS` | `EXPPTS` | Write points, and blocks' insertion points with one attribute as the description, to a CSV or TXT file (PNEZD, PENZD or XYZ) for BIM and survey programs |
| `EXTEND` | `EX` | Lengthen objects to meet others: click near an end, drag through several, or Shift+click to trim |
| `EXTRUDE` | `EXT` | Extrude closed 2D objects into solids (3D) |
| `FILLET` | `F` | Round or square the corner between two objects (R radius, P every corner of a polyline, M several) |
| `FIND` |  | Find and replace words in text, attribute values and dimension text |
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
| `GRIDMOVE` | `GM` | Move a grid line and carry what hangs on it: walls stretch, columns, bubbles and tags move, dimensions follow. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fill an area with a solid fill or a pattern: click inside it, or select closed objects (H) |
| `HELP` | `?` | This list |
| `HISTORY` | `HIST` | HISTORY (HIST): the versions of this drawing — copies kept on this computer when Studio saves it, and the cloud's versions — to open, restore, and compare with what changed shown in colour. |
| `ID` |  | Coordinates of a point |
| `IMAGE` | `IM` | Give CadCraft the picture files a drawing uses (a DWG stores only where they were). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Place a picture (PNG or JPEG) from a file. |
| `IMAGECLIP` | `ICL` | Clip a picture to a rectangle or a polygon, or remove its clip. |
| `IMPORT` | `IMP` | Import a file of a kind an add-on reads, into this drawing |
| `INSERT` | `I`, `DDINSERT` | Place a block (S scale, R rotate); F from a DWG/DXF file, L from the library |
| `INTERSECT` | `IN` | Keep only what solids have in common (3D) |
| `JOIN` | `J` | Join lines, arcs and polylines that meet end to end into one polyline; lines on one line into one line (J) |
| `LASER` | `LASERCUT` | Open the Laser panel: send layers to a laser cutter or engraver (GRBL G-code) |
| `LASSOMODE` |  | Press and drag draws a lasso (1) or a rectangle (0) |
| `LAYDEL` |  | Delete a layer and every object on it (in the model, on sheets and in blocks) |
| `LAYER` | `LA` | Show the layers panel |
| `LAYFRZ` |  | Freeze the layer of each object you pick |
| `LAYISO` |  | Isolate the layers of the selected objects (every other layer off) |
| `LAYMCUR` |  | Make the layer of the object you pick current |
| `LAYMRG` |  | Merge layers: their objects move to a target layer, and the merged layers go |
| `LAYOFF` |  | Turn off the layer of each object you pick |
| `LAYON` |  | Turn every layer on |
| `LAYOUT` | `LO`, `NEWLAYOUT` | A new sheet with a title block and a viewport |
| `LAYTHW` |  | Thaw every layer |
| `LAYUNISO` |  | Turn back on the layers LAYISO turned off |
| `LENGTHEN` | `LEN` | Lengthen or shorten lines, arcs and polylines: by an amount, a percentage, to a total, or by dragging (LEN) |
| `LIBRARY` | `LIB` | The library panel: place items, check for updates, credits |
| `LIMITS` |  | Set the drawing limits: ON, OFF, or the lower-left and upper-right corners. With the limits ON, points outside them are refused |
| `LINE` | `L` | Straight segments, each its own object |
| `LINETYPE` | `LT`, `CELTYPE` | The linetype new objects get (by layer, by block, or a named one) |
| `LINKVIEWS` | `SYNCVIEWS` | Pan and zoom every pane together (split screen), to compare two drawings or revisions |
| `LIST` | `LI`, `LS` | Describe objects in the history |
| `LTSCALE` | `LTS` | The drawing's linetype scale (every dash and gap is multiplied by it) |
| `LWDISPLAY` | `LWT` | Show or hide lineweights on screen (the LWT button in the status bar) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | The lineweight new objects get (by layer, by block, default, or mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | map layers under the model space: the drawing’s coordinate system, tiles, WMS, WMTS, ArcGIS, pictures |
| `MATCHPROP` | `MA`, `PAINTER` | Match properties: copy one object's layer, color and more onto others (MA) |
| `MEASUREGEOM` | `MEA` | Measure a distance, a radius, an angle or an area (MEA) |
| `MIRROR` | `MI` | Mirror objects across a line |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: an arrow, a leader and a note, as one object (MLD) |
| `MOVE` | `M` | Move objects by a base point and a second point |
| `MSPACE` | `MS` | Work on the model through a viewport of the open sheet (or double-click inside the viewport). |
| `MTEXT` | `MT`, `T` | Paragraph text: drag its width, then type in place; Enter starts a new paragraph (T) |
| `MVIEW` | `MV` | A viewport onto the model, on a layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Named views: save the view on screen (or a window) under a name and go back to it (NV) |
| `NEARBY` |  | Say what lies close to the cursor, nearest first, with the distance and the side. |
| `NEW` |  | Start a new drawing |
| `OBJOUT` |  | Export the 3D model as OBJ |
| `OFFSET` | `O` | Parallel copies at a distance |
| `OLELIST` | `OLES` | List the OLE objects a drawing carries and put a copy of one's picture where you choose |
| `OPEN` |  | Open a DWG or DXF from this computer |
| `OPENIN3D` |  | Open this drawing in the 3D modeling app, in a new tab (nothing is uploaded) |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | The Parameters panel: user parameters and dimensional constraints in one table |
| `PARTSLIST` | `PLIST` | A parts list table of every standard part and steel section placed from the Library |
| `PASTEAREA` | `PAREA` | Paste an area copied in MarkupCraft (Copy area) at its true size, as a picture. |
| `PASTECLIP` |  | Paste the clipboard: it follows the cursor, click where it goes (Ctrl+V) |
| `PASTEORIG` |  | Paste the clipboard at the coordinates it was copied from (Ctrl+Shift+V) |
| `PDF` |  | Give CadCraft the PDF files the drawing's underlays use |
| `PDFADJUST` |  | Fade, contrast, monochrome or switch off a PDF underlay |
| `PDFATTACH` | `PDFATT` | Attach a PDF page as an underlay (PDFATTACH) |
| `PDFCLIP` |  | Clip a PDF underlay to a rectangle or polygon |
| `PDFIMPORT` | `PDFIM` | Turn a PDF page's lines, fills and text into drawing objects (PDFIMPORT) |
| `PDFLAYERS` |  | Switch the layers of a PDF underlay on or off |
| `PEDIT` | `PE` | Edit a polyline: close, open, join, width, fit curve, spline curve, decurve, linetype generation, reverse; lines, arcs and splines can be turned into polylines |
| `PHOTOSKETCH` | `PSK` | Turns a photo of a hand sketch on paper into lines and arcs at a scale, straightening the perspective and giving each pen colour its own layer. |
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
| `QPMODE` | `QP` | Quick Properties by the cursor on or off |
| `QSELECT` | `QS` | Quick select: every object of a type whose layer, color, size or name matches (QS) |
| `RASTERSNAP` |  | Turn snapping to the lines of scanned sheets on or off. |
| `RAY` |  | Ray: a construction line from a point, endless one way. |
| `RECTANG` | `REC`, `RECTANGLE` | A closed polyline from two corners |
| `REDLINE` | `RDL` | Redline to revision: read a MarkupCraft redline package, accept or reject each change, cloud the accepted ones with a revision log, and save the answers file (RDL) |
| `REDO` |  | Redo what was undone |
| `REFCLOSE` |  | Finish editing a block in place: save it, or discard the changes |
| `REFEDIT` |  | Edit a block in place, where a reference of it sits, with the rest of the drawing faded; REFCLOSE saves it |
| `REGEN` | `RE` | Rebuild what is drawn in this tab from the drawing |
| `REGENALL` | `REA` | Rebuild what is drawn in every tab, pane and open drawing |
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
| `SUBTRACT` | `SU` | Take solids away from others (3D) |
| `SWBOUT` | `SWMACRO` | Download a macro for SolidWorks (.swb) that rebuilds the model as one constrained sketch |
| `SWEEP` |  | Sweep closed 2D objects along a path (line, polyline, arc, circle) into solids (3D) |
| `TAGS` |  | Tags on block references: define a tag (kind, allowed values, blocks it applies to), set it on the selected references, and list them as a schedule that you can save as CSV |
| `TEXT` | `DT`, `DTEXT` | Single-line text; Enter starts the next line |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edit text in place: pick a text (or double-click one) (ED) |
| `TEXTMASK` | `TMASK` | Put a background mask behind texts (the drawing's background or a colour), or take it away. |
| `TOOLBAR` |  | Choose what the toolbar buttons show: icons and text, just icons, or just text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Put the toolbar on the top, bottom, left or right of the window |
| `TOOLBARROWS` |  | Choose how many rows the toolbar uses: wrap to fit, 2, or 1 (Shift+Ctrl+F1) |
| `TOUR` | `TUTORIAL` | Take the six-step first-drawing tour again |
| `TRIM` | `TR` | Cut objects back to where others cross them: click a piece, drag through several, or Shift+click to extend |
| `TRIMEXTENDMODE` |  | How TRIM and EXTEND start: 1 Quick (every object is a cutting edge or boundary), 0 Standard (choose the edges first) |
| `TTR` |  | A circle tangent to two objects, with a radius you give (the same as CIRCLE T). |
| `TURNLEFT` |  | Turn the view 90° left (counter-clockwise): UCS Z -90, and the view follows. Nothing in the drawing moves. |
| `TURNRIGHT` |  | Turn the view 90° right (clockwise): UCS Z 90, and the view follows. Nothing in the drawing moves. |
| `TURNWORLD` |  | Back to the world: UCS World, and the view is level again. |
| `UCS` |  | Your own coordinate system: an origin and an X axis (origin, Z angle, 3point, OBject, Previous, World, NAmed). Points you type, ortho, polar tracking, the grid and new text follow it; the view turns so its X axis is level. Nothing in the drawing moves. |
| `UNDO` | `U` | Undo the last command |
| `UNION` | `UNI` | Join solids into one (3D) |
| `UNITS` | `UN`, `DDUNITS` | How lengths are shown and typed: decimal, feet and inches, fractions (UN) |
| `USDOUT` |  | Export the 3D model as USD (.usda text, .usdc binary or a .usdz package) |
| `VIEW` | `-VIEW`, `V` | Standard 3D views, perspective or parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Place a flat 2D view of the 3D solids (front, top, side or isometric, hidden lines dashed) on a sheet or in the model |
| `VIEWLABEL` | `VL` | A view title on a sheet that shows its viewport's view name, and changes with it. |
| `VOICE` |  | Turn spoken commands on or off. They are recognised on this computer. |
| `VPLAYER` |  | Freeze or thaw layers in some viewports only (Freeze, Thaw, Reset), and choose which layers new viewports start frozen (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Split the drawing area into panes, each with its own view (on a sheet: a viewport, as MVIEW) |
| `VPVIEW` |  | Set what a viewport shows: pick a window on the model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visual style of the 3D view: shaded, edges, hidden line, wireframe, X-ray |
| `WBLOCK` | `W`, `-WBLOCK` | Write a block, some objects or the whole drawing to a new DWG or DXF file (W) |
| `WEDGE` | `WE` | A wedge: two corners and a height; it slopes away from the first corner (3D) |
| `WHEREAMI` | `WHERE` | Say where the cursor is. |
| `XATTACH` | `XA` | Link another DWG or DXF into this drawing, shown read-only (XREF lists and reloads them) |
| `XCLIP` | `XC` | Clip block references and linked drawings to a rectangle or a polygon, or remove the clip. |
| `XLINE` | `XL` | Construction line, endless both ways: through two points, horizontal, vertical, at an angle, bisecting an angle, or offset from a line. |
| `XREF` | `XR`, `-XREF` | Linked drawings (external references): list, attach, reload, bind, detach |
| `ZOOM` | `Z` | Extents, or a window |
