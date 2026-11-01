---
title: P&ID: process model, stream table and control lists
summary: Link the drawing to a process model, see its streams and line velocities on the sheet, change a line size and carry it through, and write the instrument index, I/O list and loops for the control system.
section: tasks
order: 40
keywords: process, simulation, flowsheet, stream table, hydraulics, velocity, pressure drop, control system, i/o list, instrument index, loop, tag list, csv
---

A drafting and study aid, not an engineering approval. No representation.

## The process model

A process model is a flowsheet (units, streams, the property package) plus the links that tie it to this drawing: each unit to the equipment with the same tag, each stream to the process line that runs between the same two pieces of equipment. Open one with **IMPORT** (a `process.json` made by the assistant, SuperCad Studio or Plant in BimCraft). The model is kept in the drawing, so it travels with the file.

Type **PIDPROC**:

- **Link and run** ties what it can, solves the flowsheet and counts errors and warnings. Anything where the drawing and the flowsheet disagree (a line that enters other equipment, a size that differs between the P&ID and the 3D pipe, equipment missing on either side, a velocity over the limit) is listed and shown in the Problems panel.
- **Stream table** draws a table you can place on the sheet: each stream with its line, from and to, temperature, pressure, vapour fraction, flows, line velocity and drop, and the main mole fractions. It stays current as the model or the drawing changes.
- **Change a line size** asks for a line number and a new size, reruns the hydraulics, and writes the size on every piece of that line. The line number follows the size, and the link follows the number.
- **Control lists** counts the tags, the I/O channels and the loops.

Pressure drop uses the line length, fittings and elevation from the 3D pipe when Plant has one, otherwise what the model says. Viscosity is an assumed default until you give the line one; the Problems panel says so.

## Control system lists

**EXPORT** offers **Control system lists (CSV)** and **(workbook)**: the tag list, the instrument index, the I/O list and the loop list, made from the tags on the drawing.

- Loops come from the instrument letters and the loop number: FT-101, FIC-101 and FV-101 are loop F101.
- A transmitter is an analog input, a control valve with a positioner an analog output, a switch a digital input, a solenoid or on/off valve a digital output, a motor valve outputs and reads back its position, a pump gets start/stop and running. A controller is in the control system and has no channel of its own.
- To use other channels for one symbol, set the property `io` on it (for example `AI,DI`).
- The I/O list ends with a count by type and a spare allowance (20 percent unless you change it).
- Checks: duplicate tags, a valve with no controller or switch in its loop, a controller with nothing measuring.
