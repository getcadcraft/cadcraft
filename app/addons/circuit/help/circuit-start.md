---
title: Circuit simulation: getting started
summary: Draw a circuit as a schematic in CadCraft and simulate it with the Circuit simulation add-on: an operating point, a transient and an AC sweep, read on a meter, a scope and a plotter.
section: start
order: 1
keywords: circuit, schematic, simulation, spice, resistor, capacitor, op-amp, transistor, scope, add-on
---

## What it is

Circuit simulation is an add-on for CadCraft. It is free and off until you switch it on in Settings, in the add-ons list. It has a schematic editor with a parts palette and a solver of our own that works out the voltages and currents of what you drew.

Open it from the right panel (the section named Circuit simulation, with a Larger window button), or type {{cmd:CIRCUIT}}.

## Your first circuit

1. Press **Example**. It draws a pulse source, a 1 kΩ resistor and a 1 µF capacitor, with a scope and a plotter on the output net.
2. Press **Operating point** to see the voltage of every net and the current in every part.
3. Press **Transient** to see the capacitor charge on the scope. Press **AC sweep** to see the low-pass response on the plotter: the level falls 3 dB at 159 Hz.
4. Click a part, then change its value under the drawing. Run again.

## Drawing your own

- **Place a part.** Press a part in the palette, then click the drawing. Esc stops placing. Parts snap to a grid.
- **Wire.** Click a pin, then another pin. Click empty space for a junction, and the wire carries on from it. Click a wire to join to it: a junction is put on the wire. Double-click or Esc ends the wire.
- **Move, turn, delete.** Drag a part. R turns it. Delete removes the part or the wire you selected. Undo and Redo are in the row of buttons (also Ctrl+Z and Ctrl+Y).
- **Name a net.** Press **Net name**, then click a pin. Two pins with the same name are on one net. A net named 0 or gnd is ground.
- **Ground.** Every circuit needs one. Place a Ground part on the net that is your zero volts.
- **Switch.** Double-click a switch to open or close it.

Your drawing is kept in this browser. **Save** writes a file, **Open** reads one, **Export netlist** writes a text deck of the elements.
