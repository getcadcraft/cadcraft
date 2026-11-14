---
title: Cabinets: cut list, nesting and labels
summary: The cut list by material, edge-banding totals, nesting the panels on sheets, the DXF for your CAM program, and a bar-coded label for every piece.
section: tasks
order: 2
keywords: cut list, cutting list, edge banding, banding, nesting, nest, sheets, cnc, router, cam, dxf, labels, barcode, bar code, code 128, csv
---

## The cut list

Type {{cmd:CABLIST}}. CadCraft lists how many pieces each material takes, the area to cut and about how many sheets that is, and how many metres (or feet) of each edge banding the job needs. {{cmd:EXPORT}} › {{ui:Cabinet cut list (CSV)}} saves every part as a row for a spreadsheet: its id (`B01-03` = cabinet B01, part 3), name, cabinet, material, thickness, finished size, quantity, grain, the banding on each edge (L1 and L2 run along the length, W1 and W2 along the width; L1 is the front edge) and the cut size.

## Nesting

Type {{cmd:CABNEST}}. Each material is nested on its own sheets (2440 × 1220 mm or 96 × 48 in, set in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Cabinets}} with the edge kept clear and the space between parts: your cutter's diameter and a little more). Parts with grain stay along the sheet's length. CadCraft says how many sheets each material takes and how much of them is used.

{{cmd:EXPORT}} › {{ui:Cabinet sheets, nested (DXF)}} saves every sheet in one DXF: the sheet outlines on layer `SHEET`, the parts on `PARTS`, each named by its piece id and its number on the sheet on `LABELS`. Open it in your CAM program (PartCraft's Manufacture, or your router's own software) to make the toolpaths and the G-code.

## Labels

{{cmd:EXPORT}} › {{ui:Cabinet labels (HTML, print at 100 %)}} saves a page for every label sheet. Print it at 100 % (no fit to page) on the label sheet chosen in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Cabinets}} › {{ui:Label sheet}}: A4 or Letter sheets, or one label a page for a label printer. Each label has the part's name and cabinet, its size and material, its sheet and number in the nest, a small drawing of the part with its banded edges drawn heavy and the grain as an arrow, and a Code 128 bar code of its piece id.

With {{ui:Labels in}} › {{ui:Cutting order (nest)}} the labels come in the order the pieces come off the sheets, so you can label each piece as it is cut.
