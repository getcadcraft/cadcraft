---
title: Cabinets: getting started
summary: What the Cabinets add-on does in CadCraft, how to switch it on, and how to place a run of cabinets along a wall.
section: start
order: 1
keywords: cabinet, cabinets, kitchen, millwork, casework, joinery, base cabinet, wall cabinet, tall cabinet, drawers, frameless, 32 mm, add-on
---

## What it is

Cabinets is an add-on for CadCraft that comes with it and is free. You place cabinets along a wall in the plan, and CadCraft works out every panel of every cabinet from your construction rules. From the drawing it makes what the shop needs: a cut list by material, how much edge banding the job takes, a nest of the panels on sheets, the nested sheets as a DXF for your CAM program, and a label with a bar code for every piece in the order the pieces come off the machine.

It is off until you switch it on: {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Cabinets}}. Its tools are in the {{ui:Cabinets}} section of the right panel, as commands (below), and, when you ask for it in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Cabinets}}, as a group at the end of the toolbar.

## Your first run of cabinets

1. Type {{cmd:CABINET}}. Click the two ends of the wall line (snap to the wall's face), then click anywhere on the room side.
2. Type the width of the first base cabinet (`600`) and press Enter, or click where it ends. The next one starts where it stops: type `800` for the next.
3. Type {{ui:G}} to leave a gap (for a range or a dishwasher), {{ui:W}} for wall cabinets (they start again at the wall's start, hung above), {{ui:D}} for a drawer base, {{ui:T}} for a tall cabinet, {{ui:U}} to take the last one back. Press Enter when the run is done.
4. Type {{cmd:CABELEV}}, click one of the cabinets and click where the front view goes. It shows every cabinet on that wall with its doors and drawers, and it follows when you move or change a cabinet.
5. Select a cabinet to change its size, kind, shelves, doors or drawers in {{ui:Properties}}.

The whole run is one undo step.

## Units

A drawing in inches, feet or yards uses inch rules (3/4 in carcass, 1/8 in gaps); any other drawing uses millimetre rules (18 mm carcass, 3 mm gaps). In a drawing in metres, type `0.6` for a 600 mm cabinet.

## Files open anywhere

A cabinet and a front view are each saved as a block reference with its drawing inside, and its data kept with it under the application name `CC_CABINET`. A drawing saved as DWG or DXF opens in any CAD program as drawn, and in CadCraft without the add-on with nothing lost.
