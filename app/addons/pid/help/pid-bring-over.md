---
title: P&ID: bring a job over
summary: Read a DEXPI file or a stream table from another tool into the drawing, and write the diagram out as DEXPI, with one short guide for each type of tool the job comes from.
section: switching
order: 20
keywords: dexpi, proteus, xml, import, export, stream table, heat and material balance, csv, xlsx, spreadsheet, move a job, other software, interchange
---

## What you'll do

Move one job across without redrawing it. The add-on reads two kinds of file and writes one:

| File | Direction | What comes over |
|---|---|---|
| DEXPI plant model (ProteusXML, `.xml`) | in and out | equipment with tags and nozzles, piping network systems and their segments, valves and in-line parts, instrumentation, line data, connections, positions |
| Stream table (`.csv` or `.xlsx`) | in | stream names, temperature, pressure, vapour fraction, flows, composition, as a table on the sheet |

Use the `IMPORT` command and pick the file type, or `EXPORT` for DEXPI. Everything the reader could not bring is listed once, by kind, in the Problems panel under "Imported files".

## From a P&ID or plant-design program

1. In the other tool, export the P&ID as DEXPI (ProteusXML), one drawing at a time.
2. Run `IMPORT` and choose "DEXPI plant model".
3. Items with a position in the file are placed there. Items without one are laid out in a grid below the drawing: move them where they belong.
4. Run `PIDCHECK` and open the line list: line numbers and sizes should match the source.

:::note
The drawing graphics in the file are not used. Symbols are drawn again from this add-on's own library, so a symbol class it has no symbol for is listed and not placed. Signal lines are not drawn; the instruments they join are.
:::

## From a process simulator or a datasheet

1. Export the stream (heat and material balance) table to CSV or Excel. Streams may run across or down. Keep the unit in the label, as in "Temperature (°C)", or in a Units column.
2. Run `IMPORT` and choose "Stream table".
3. The table is put on the sheet. A pressure marked gauge is made absolute; a column with no unit is read as °C and bar; each is noted in the Problems panel.

A table has no topology: it does not bring the flowsheet itself, only the stream conditions.

## Check what came over

- Compare the equipment list with the source's equipment list.
- Compare two streams you know by hand: flow, temperature and the composition sum.
- Connections that point at nothing are reported once, as a count.

## Sending a job back

`EXPORT` and choose "DEXPI plant model". Each line number becomes a piping network system, each drawn piece of line a segment with its centre line, equipment gets a nozzle at every connection, and the valve's actuator is written inside the valve. The class names follow the DEXPI test cases; the file is for exchange, not an engineering approval.
