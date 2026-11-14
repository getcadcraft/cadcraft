---
title: Harness and cabinet wiring: getting started
summary: What the Harness and cabinet wiring add-on does in CadCraft, how to give wires an id, colour and gauge, and get the from-to list and the bill of materials.
section: start
order: 1
keywords: harness, wire harness, wiring, from-to, wire list, cabinet, control cabinet, DIN rail, duct, terminal, ferrule, gauge, bill of materials, add-on
---

## What it is

Harness and cabinet wiring is an add-on for CadCraft that comes with it and is free. It works on a schematic drawn with the Electrical add-on. Each run of wire between two connection points is one wire; you give it an id, a colour, a gauge, a type and a treatment for each end. CadCraft then makes the papers a wiring job runs on: the from-to list, the wire list with cut lengths, the connector tables, the segments of a harness drawing with the wires and the diameter of each, and a bill of materials with wire, wire ends, devices, rails and ducts.

It is off until you switch it on: {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Harness and cabinet wiring}}. Its tools are in the {{ui:Wiring}} section of the right panel, as commands (below), and, when you ask for it in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Wiring}}, as a group at the end of the toolbar.

## Your first wiring list

1. Draw the schematic with the Electrical add-on (symbols with a device tag, wires on a wire layer).
2. Type {{cmd:HNUM}}. Every wire without an id gets the next one (`W001`, `W002`, … — the format is in the settings).
3. Select wires and type {{cmd:HWIRE}}. Choose a field (Colour, Gauge, Type, End 1, End 2, Length, Note, Id), type its value and press Enter for the next, or Enter again to finish. Colours are the IEC two-letter codes (`BK`, `BN`, `RD` …); the gauge is a size in mm² (`1.5`) or an AWG (`18 AWG`). Properties shows the same fields for a selected wire.
4. Type {{cmd:HFROMTO}} to print the list, and click a point to draw it as a table. {{cmd:HCUT}} is the wire list with cut lengths, {{cmd:HCONN}} the connector tables (every pin and its wire), {{cmd:HBOM}} the bill of materials.

A net of three or more pins is wired as a chain (each wire runs from one pin to the next, top to bottom) or as a star (the top left pin to every other); choose in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Wiring}}. A wire's settings are kept under its two pins, so changing the choice leaves the settings of wires that no longer exist behind and gives the new ones the defaults. The two sides of a terminal stay apart, because a field wire lands on one and a panel wire leaves the other. What you set is kept with the wire's first device and follows its tag and pin, so moving things on the sheet does not lose it.

## Where lengths come from

A wire has no length until one of three things gives it one:

- **A harness drawing.** {{cmd:HHARN}} draws nodes and segments (type {{ui:B}} to start a branch from a node you click). {{cmd:HEND}} ties devices to a node (a terminal strip by its tag, `-X1`). {{cmd:HROUTE}} finds each wire's shortest way along the segments, adds the allowance at each end and the service loop (settings), and writes the number of wires and the diameter of the bundle on every segment.
- **The cabinet layout.** {{cmd:HPANEL}} draws the back panel, {{cmd:HRAIL}} a DIN rail, {{cmd:HDUCT}} a wiring duct. {{cmd:HMOD}} puts the schematic's devices on a rail; type `*` to place every one that is left, side by side. A wire between two devices in the cabinet is the distance between their centres, along the duct grid, times the slack factor, plus the allowances.
- **A length you type** with {{cmd:HWIRE}}, which wins over the other two.

The diameters are typical values for stranded wire; use the real figures from the wire you buy.

## Files open anywhere

Harness drawings and cabinet parts are ordinary lines and block references in the file; with the add-on off, or in another program, they show, plot and move. {{ui:Export}} writes the from-to list, the wire list and the bill of materials as CSV, or all the lists as one workbook.
