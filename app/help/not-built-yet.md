---
title: Not built yet
summary: What this build of the CadCraft drafting app does not do yet, and what to do instead today.
section: trouble
order: 20
keywords: missing, limitations, ctb, stb, plot style, properties, ucs, annotative, dynamic block, spline, roadmap, not supported, dwg save, hatch, stretch, array, join, matchprop, break, lengthen, linetype, lineweight, xref, cloud, 3d, solids, booleans, multileader, wipeout
---

CadCraft is in development. This page lists what the current build does not do, so you do not hunt for it. Each item says what to do instead today.

## Files and saving

| Not built yet | Instead, today |
|---|---|
| A CadCraft DWG checked in AutoCAD itself | Every saved version is read back by three other programs' DWG readers and by CadCraft. See [What a DWG keeps and changes](topic:files#what-a-dwg-keeps-and-changes). |
| Saving DXF newer than 2000 | Save as DXF 2000, or as DWG up to AutoCAD 2018. |
| Saving over the opened file in the browser | Every save downloads a new copy; replace the old file yourself if you want to. In CadCraft Studio, {{key:Mod+S}} writes back to the file you opened. |
| Cloud saving and sync between computers | Not available yet. Keep your DWG and DXF files in your own folders. |
| Overlays, and editing a linked drawing in place | Attach the drawing as a link and reload it after changing the other drawing. A link stays a link when you save as DWG, and {{cmd:XCLIP}} clips it. |
| Pictures in DXF; wipeouts that hide what is under them | DXF keeps a picture as its frame with the file name; DWG keeps it as a picture — see [Pictures in a drawing](topic:pictures). A wipeout shows as its frame. |
| Editing multileaders that have a block, several leader lines or curved lines | They are drawn as the other program drew them and move as one. Text multileaders come in editable. |
| Tables in a DXF | Counted in "About this file", not shown. Tables in a DWG are shown as the other program drew them. |
| Binary DXF | Save it as text (ASCII) DXF in the program that made it. |
| Copy and paste with other programs | CadCraft's clipboard works between CadCraft drawings and tabs in the same browser, not with other programs. Save as DWG or DXF and open it there. See [Copy, paste and duplicate](topic:copy-paste). |

## Drawing and editing

| Not built yet | Instead, today |
|---|---|
| Hatches tied to their boundary (associative), gradient fills, and patterns beyond the standard set | Hatch again after changing the outline. Opened hatches with other patterns show as a tone. See [Hatch and fill areas](topic:hatch). |
| Linetypes with shapes or text in them, and lineweights in a saved DXF R12 | Shapes and text in a file's linetype are left out of its dashes; save as DWG to keep lineweights. |
| Patterned hatches in a saved DXF | R12 has no hatch: they are saved as their outlines. Save as DWG to keep the pattern. |
| Associative arrays (edited later as one object) and arrays along a path | {{cmd:ARRAY}} makes plain copies: undo and run it again to change it. |
| {{cmd:STRETCH}} with a crossing polygon | Use one or more crossing windows. |
| {{cmd:PEDIT}} (editing a polyline's vertices and widths at the command line) | Grips, and the vertex browser in Properties (every vertex, its widths and bulge); {{cmd:JOIN}} makes a polyline from pieces. |
| {{cmd:BREAK}} and {{cmd:LENGTHEN}} on ellipses and splines | Draw them again, or {{cmd:TRIM}} to another object. |
| Fillet and chamfer between an arc segment of a polyline and the segment next to it; fillet joining a line into a polyline | {{cmd:EXPLODE}} the polyline, then fillet the pieces. The fillet arc is added as its own object. |
| Trim and extend: the Project option (3D) and extending a polyline's arc end | Trim in the plane of the drawing; for an arc end, explode the polyline or draw the arc again. |
| Text styles, fonts, columns and formatting inside paragraph text (bold, stacked fractions, colors per word) | One Helvetica-style font; one height and color per text object. |
| Paragraph text edited at its rotation | The editor opens level; the text keeps its rotation. |
| Multileaders saved as multileader objects in a DXF; several leader lines on one multileader; block content | A DWG keeps them as multileaders; an R12 DXF keeps what they draw (lines, arrowhead and text). |
| Tables | Lines and text. |
| Attribute definitions kept on their own in a saved file (outside a block), multiple-line attributes | Put attribute definitions into a block before saving: on their own they save as text showing the tag. |
| Layer states (saving and restoring which layers are on) | Use {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, or turn layers on and off by hand. |
| Window polygon and crossing polygon selection, and saved selection filters | Fence (`F`), Window, Crossing, Remove (`R`), {{cmd:QSELECT}} for a rule. |


## The Properties panel

| Not built yet | Instead, today |
|---|---|
| Drawing the Fit choices, and the horizontal text position and text below the line on dimensions other than linear and aligned | They are kept on the object, shown in Properties and saved; CadCraft places the text by its own rule. |
| Materials that other programs see | A saved file keeps the material name for CadCraft; other programs show the layer's material. |
| Transparency in DWG 2000 and DXF files | Other programs show those objects solid; CadCraft keeps the transparency. Save as DWG 2004 or later for everyone. |
| An associative hatch in other programs | The hatch is saved; CadCraft keeps the setting, other programs see a hatch that does not follow its boundary. |
| Coordinates in Properties in the UCS | Properties shows world coordinates; the status bar and {{cmd:ID}} show UCS ones. See [Turn the view and use your own coordinates](topic:ucs-and-turned-view). |
| Annotative scaling | The annotative setting is kept with text; the annotation scale is always 1:1. |
| Changing a dynamic block's distances, angles or flips; dynamic blocks kept dynamic when you save in another DWG version or as DXF | Switch its visibility state in Properties › {{ui:Custom}}; its other values show there read only. It stays dynamic when you save it as DWG in the version the drawing came in. See [Dynamic blocks](topic:dynamic-blocks). |
| Splines with fit and control points | An opened spline becomes a polyline; edit its vertices in Properties. |
| A hatch that follows its boundary (associative) | The associative setting is kept and saved; hatch again after changing the outline. |
## Precision aids

| Not built yet | Instead, today |
|---|---|
| Tracking from points across commands, and the tracking settings dialog (relative polar angles, extra angles) | {{cmd:POLARANG}} sets the step; acquire the points again in the next command. |
| Snap to grid | Type coordinates; the grid is a visual guide only. |
| Arc and Length options while picking an area's corners, and MEASUREGEOM Volume | Draw the outline with {{cmd:PLINE}} (arcs included), then {{cmd:AREA}} `O`. |
| Dynamic input for grips, and its options list (the down arrow) | The command line shows the options. |
| Angles in degrees-minutes-seconds, grads or surveyor's bearings | Type decimal degrees: `30.5` for 30°30'. |
| A view manager dialog; named views of a sheet that come back on that sheet | {{cmd:NAMEDVIEW}} lists and restores views. A saved file keeps them, but a sheet's views come back on the first sheet. |

## Sheets, dimensions and plotting

| Not built yet | Instead, today |
|---|---|
| A title block that updates itself | Edit its texts by hand; the SCALE field does not follow viewport changes. |
| Named dimension styles | Settings for new dimensions plus each dimension's own sizes. See [Set dimension sizes](topic:dimension-settings). |
| Ordinate dimensions, and editable two-line angular dimensions from opened files | They are shown as drawn in the file. |
| Annotative scaling | Set sizes for one plot scale with {{cmd:DIMSCALE}} and text heights. |
| Reading CTB files, named plot styles (STB), and linetype, end, join and fill settings in a plot style | Make the table in {{ui:Plot style tables}} (color, gray, ink and lineweight per color): see [Plot style tables](topic:plot-pdf#plot-style-tables). |
| Page setups | Choose paper, scale and plot style in the {{ui:Plot to PDF}} dialog; a sheet keeps its plot style. |
| Characters outside the Western European set in PDFs | They print as "?". |

## Constraints and parameters

| Not built yet | Instead, today |
|---|---|
| Constraints on sheets, in blocks, on ellipses, splines or text | Constrain on the {{ui:Model}} tab, on lines, polylines, circles, arcs and points. |
| Smooth (G2), and constraining a polyline's arc bulge directly | Tangent and equal; an arc segment follows its two ends. |
| Reference (driven) dimensional constraints, and `3Point` in {{cmd:DCANGULAR}} | A plain dimension (DIMLINEAR …) shows a value without driving it. |
| Dimensional constraints of a fixed size on paper, and plotting them | They show on screen only; add plain dimensions for the plot. |
| Constraints kept through EXPLODE, BREAK, JOIN and other commands that make new objects, and on trimmed polylines | Constrain them again (AUTOCONSTRAIN helps). {{cmd:MIRROR}} and {{cmd:TRIM}} of lines, arcs and circles keep them. |
| Design tables (configurations) in CadCraft | Change parameters in the panel. |
| A tested round trip with SolidWorks | Check the sketch the macro builds before you rely on it. |

## 3D

| Not built yet | Instead, today |
|---|---|
| Fillets, chamfers, shells and lofts; sweeps along a path that rises (3D paths) | Extrude outlines with arcs, push and pull faces, revolve and sweep along flat paths. |
| Extrude in another direction than up | Draw the shape on the ground and extrude it up or down (with a taper or along a path if you like); rotate the solid afterwards. |
| Elevation and thickness of 2D objects | The drawing lies on the ground (height 0) on the 3D tab. |
| Solids, regions, bodies and meshes from other programs (3DSOLID, ACIS, polyface and polygon meshes) | Counted in "About this file", not shown. Ask for them as 3D faces in model space. |
| Copy and paste of solids | On the 3D tab, use {{cmd:COPY}}. The clipboard holds 2D objects only. |
| Sections, views that follow later changes to the solids, and shaded solids on plotted sheets | {{cmd:VIEWBASE}} places flat views (a snapshot); run it again after changing the solids. |
| Materials, textures and lighting settings | The visual styles: shaded, edges, hidden line, wireframe, X-ray. |
| Map layers plotted, on sheets' viewports and in the 3D tab; pictures from files saved with the drawing; a drawing's location written for other programs in DWG 2000–2007 and DXF R12 | Map layers show under the model space on screen; the system and the layer list are saved with the drawing: see [Map layers under the drawing](topic:map-layers) |
| E57 scans over 6 million points or 512 MB, scanner makers' own files (RCP, RCS, FLS, LGS, TZF, ZFS), a point cloud saved with the drawing or plotted, snapping to a cloud on the 3D tab, upright (section) slices on the Model tab | Export big or makers' own scans as LAS or LAZ ([Point cloud formats](topic:point-cloud-formats)); attach the cloud each time you open the drawing; trace from a plan slice on the Model tab: see [Trace as-built lines over a point cloud](topic:point-clouds) |

## Routines and customizing

| Not built yet | Instead, today |
|---|---|
| Compiled or protected LISP (.fas, .vlx), native programs (.arx, .crx, .dbx) and VBA (.dvb) | Load a routine's .lsp source with {{cmd:APPLOAD}}. |
| LISP's `grread`, reactors (`vlr-…`), curve functions (`vlax-curve-…`), dictionaries and extended data, the Express Tools' `acet-…` | The rest of the language runs: see [Run LISP routines](topic:run-lisp). The command line names a missing function when a routine reaches one. |
| Images and slides in a routine's dialog | They show as blank frames; the rest of the dialog works. |
| CraftScript (.craft), Lua and Python in CadCraft | Run them in PartCraft's Script workspace. |
| The Startup Suite and aliases kept on your computer or synced | They are kept in this browser; the desktop app and the cloud service will keep them for you. |

## Help

The help describes this build. When something is added, it moves out of this page and into the walkthroughs.
