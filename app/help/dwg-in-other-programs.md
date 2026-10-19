---
title: Open a CadCraft DWG in other programs
summary: Which programs a DWG saved by CadCraft has been opened in, what is checked, and what to do when one complains.
section: trouble
order: 30
keywords: dwg, open in other programs, compatibility, does it open, audit, trueview, other cad programs, dxf, check, save as dwg
---

## What CadCraft writes

{{ui:Save}} writes a real DWG, in the version the drawing came in or the one you choose in {{ui:Save as}}: AutoCAD 2000, 2004,
2007, 2010, 2013 or 2018. Nothing is converted behind your back: the history lists anything that changed on the way (for
example a true colour written as the nearest standard colour in a 2000 DWG).

## Where it has been opened

Every DWG CadCraft writes is opened, in every version, by three programs that are not CadCraft: the ODA File Converter (which
checks the file and repairs nothing in it), LibreDWG and libdxfrw. Their reading is compared with CadCraft's: objects, layers,
blocks and attributes, dimensions, hatches, sheets and their viewports.

Opening CadCraft's DWG files in AutoCAD and in the free DWG TrueView is being checked on Windows, object kind by object kind
(AUDIT, layers, sheets, dimensions, hatches, attributes, dynamic blocks, clipped references, pictures). The results will be
listed here when they are in.

## When another program complains

1. Save again as DXF ({{ui:Save as}} › {{ui:DXF 2000}}) and open that: most programs read DXF.
2. Save the DWG in an older version (2013 or 2010).
3. Tell us on Discord which program and version, and what it said; the file helps most.
