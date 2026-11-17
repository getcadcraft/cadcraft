---
title: Units on import: a file states its units, or you are asked first
summary: When a file you bring into a drawing states its units, CadCraft converts it and says so. When it does not, CadCraft asks before placing anything and remembers your answer for that file.
section: tasks
order: 90
keywords: units, import, insert, xref, attach, XATTACH, INSERT, OBJ, DWG, DXF, point cloud, library item, millimeters, meters, inches, feet, scale, wrong size, too big, too small, 1000 times, ask, remembered, INSUNITS
---

## What you'll do

Bring a file into a drawing and be sure it comes in at the right size.

## Steps

1. Bring the file in as usual: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH`, or {{ui:Files}} in the Library panel.
2. If the file states its units, nothing is asked. The command line says which units the file states, and the scale used when they differ from the drawing's.
3. If it does not, a dialog asks **Units of** the file. Choose what one unit in the file is and click {{ui:Use these units}}. Nothing is placed before you answer.
4. {{ui:Cancel}} (or {{key:Esc}}) brings nothing in.

## Which files state their units

- **DWG and DXF**: the drawing's insertion units (`$INSUNITS`). A file without them is asked about.
- **Point clouds**: LAS and LAZ with a coordinate system, E57, PTX and PLY state theirs. Others are asked about.
- **OBJ**: never states units. You are asked.
- **glTF and GLB**: meters, by the format's own rule.
- **Pictures**: have no size of their own. `IMAGEATTACH` asks for the width, and offers the width you gave that file before.
- **Scans**: a scan that states its density (dots per inch) comes in at its true size in the drawing's units; `SCANATTACH` still asks for the width.
- **The Point clouds add-on**: asks when you build a cloud whose file states no unit, and labels the cloud's numbers in the unit it carries.

## Good to know

- Opening a DWG or DXF as its own drawing asks nothing: the command line says which units the file states, or that it states none. Properties sets a drawing's units.
- When this drawing has no units either, a file cannot be converted: it is placed number for number and the command line says so.
- The answer is remembered for that file on this computer, in every CadCraft app. The next time it comes in you are not asked, and the command line says the remembered units were used.
- To be asked again: the command palette ({{key:Mod+K}}) › **Ask again for the units of imported files**.
