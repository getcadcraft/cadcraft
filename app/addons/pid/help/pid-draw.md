---
title: P&ID: flow diagram, heat-exchanger network, HAZOP nodes and live values
summary: Draw the process flow diagram and the heat-exchanger network grid, mark HAZOP nodes on the sheet, put plant values beside the symbols, and draw a tube sheet or a plume.
section: tasks
order: 46
keywords: pfd, process flow diagram, heat exchanger network, pinch, grid, hazop node, markupcraft, live, historian, opc ua, tube sheet, plume, running totals
---

A drafting and study aid, not an engineering approval. No representation.

## Process flow diagram

With a process model in the drawing (IMPORT, then {{cmd:PIDPROC}}), type {{cmd:PIDPFD}} and pick a corner. The units are drawn in columns by flow, streams get arrows with their name, temperature and pressure, recycles run over the top, and the stream table goes under the diagram. One undo step.

## Heat-exchanger network

Run the pinch calculator first, then {{cmd:PIDHEN}}. It asks for the smallest temperature difference and the stream data (supply and target temperature, CP in kW/K), then draws the grid: hot streams on top, cold below, the pinch line, each match as a pair of circles with its duty, heaters and coolers. The Problems panel says how many units there are against the minimum and warns about a match that leaves less than the smallest difference. This is a first design by the pinch method; stream splitting is not done.

## HAZOP nodes

{{cmd:PIDNODE}}: pick two corners, give the node a name and its design intent. The equipment tags and line numbers inside the boundary go into the node, the boundary and its label are drawn on the layer HAZOP-NODE, and the node is saved with the drawing (it travels in DWG and DXF as the hidden safety block). Export gives the worksheet as **XLSX** or **PDF**, and the node boxes as a JSON file for MarkupCraft. A team study aid: the guide words and the risk matrix are vocabulary and an example, a facilitated team does the study.

## Live values

{{cmd:PIDLIVE}} puts readings beside the tagged symbols, coloured by state (ok, high, low, stale, bad), on layers LIVE-OK, LIVE-HIGH and so on; a new reading replaces the old labels in one undo step. Give the readings as CSV with the header `tag,time,value,quality`, or press Enter to read Studio's plant connection (the browser alone cannot reach a plant). Read only: nothing here controls anything, and nothing here is an alarm system.

## Tube sheet and plume

{{cmd:PIDTUBESHEET}} draws the tube sheet of the exchanger in the exchanger calculator (shell, every tube, the pass lane). {{cmd:PIDPLUME}} draws the contours of the stack in the air calculator with the stack, a wind arrow and the note that this is a screening, not AERMOD and not a permit model.

## Running totals

When the app shows running totals, the emissions, cost and pinch-free batch calculators feed the status bar: process emissions per year, the installed plant cost and the batch campaign length. A figure appears only after you ran that calculator.
