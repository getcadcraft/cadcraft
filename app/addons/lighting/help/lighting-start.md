---
title: Lighting plots: getting started
summary: What the Lighting plots add-on does in CadCraft, how to switch it on, and how to hang your first fixtures on a position.
section: start
order: 1
keywords: lighting, lighting plot, stage, theatre, fixture, instrument, position, pipe, truss, channel, dimmer, DMX, gel, unit number, add-on
---

## What it is

Lighting plots is an add-on for CadCraft that comes with it and is free. You draw the positions the lights hang on (pipes, trusses, booms, floor lines), put fixtures on them, number the units along each position, give them channels and dimmer or DMX addresses, and CadCraft makes the papers a lighting job runs on: the instrument schedule, the channel hookup and a legend. It also warns you about a duplicate unit number, two fixtures on the same DMX addresses, or a dimmer with more on it than it can carry.

It is off until you switch it on: {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Lighting plots}}. Its tools are in the {{ui:Lighting plot}} section of the right panel, as commands (below), and, when you ask for it in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Lighting plot}}, as a group at the end of the toolbar.

## Your first plot

1. Type {{cmd:LPOS}}. Give the position a name (`1E`), choose its kind (Pipe, Truss, Boom or Floor line), click its points and press Enter.
2. Type {{cmd:LFIX}}, choose a fixture type, and click where each fixture goes. A fixture within the distance set in the add-on's settings of a position hangs on it. Type {{ui:S}} (Spread), click a position and give a number to space that many fixtures evenly along it.
3. Type {{cmd:LNUM}} and press Enter. Unit numbers run along each position from the point you drew first, starting again at 1 on each. Type {{ui:C}} first to give channels as well, from the number you choose.
4. Select fixtures and type {{cmd:LSET}} to set the purpose, colour, channel, address, wattage or a note. For the channel, address and unit, `101+` numbers the selection in a row from 101, left to right (`101+2` counts by two).
5. Type {{cmd:LSCHED}} or {{cmd:LHOOK}} to print the schedule or the hookup, and click a point to draw it as a table in the drawing. {{cmd:LLEGEND}} draws the legend.

## Classes

Fixtures are put in the class `Lighting-Fixtures-` plus their type (Lighting-Fixtures-Profile) and positions in `Rigging-` plus their kind, so {{cmd:CLASSES}} can hide or recolour all the lights, or all the pipes, at once, and a viewport can show only one of them.

## Lists and files

{{ui:Export}} writes the instrument schedule or the channel hookup as CSV, or both with the dimmer loads as one workbook. A cell that looks like a formula is saved as text. The schedule lists each position's fixtures in unit order with a count and a wattage for the position, then the total.

## Files open anywhere

Fixtures and positions are ordinary block references and lines in the file; with the add-on off, or in another program, they show, plot and move. The data (unit, channel, purpose and the rest) travels with each object.
