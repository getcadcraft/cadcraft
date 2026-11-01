---
title: P&ID: loop binding and faceplates
summary: Tie each controller of the drawing to what it reads and drives in a plant model, run the loops, and work a faceplate in auto or manual.
section: tasks
order: 47
keywords: loop, controller, faceplate, pid, tuning, simulation, set point, auto, manual, binding
---

A model, not a plant: nothing here talks to equipment. No representation.

Open **Loops and faceplates** in the add-on panel. Every controller of the drawing (an instrument that sits in a loop) has a row: what it reads (`T1.h` for the level of tank T1), what it drives (`valve.V1`), the set point, the gain, the reset time and the action. The plant model below is JSON: tanks, reactors, valves and sources, as in the dynamic simulation calculator.

1. Fill in the rows. A controller without a measurement and an output is listed as not tied; the simulation leaves it out and says so.
2. Press **Run the loops**. Each controller gets a faceplate: mode, SP, PV, OUT and the error, with a trend of the measurement and the output.
3. **To manual** holds the output where it was, and you can type another; **To auto** hands it back. Changing the set point runs the model again.

If the numerical solver cannot follow a loop (a gain too high for the model), the panel says it ran out of steps; lower the gain or lengthen the reset time.
