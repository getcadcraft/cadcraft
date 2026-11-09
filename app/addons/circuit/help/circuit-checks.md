---
title: Circuit simulation: the checks
summary: What the Circuit simulation add-on warns about in Problems, and how to fix each.
section: reference
order: 20
keywords: problems, checks, ground, floating, loop, short, value
---

## What is checked

The checks show in the Problems panel and update when you change the drawing.

- **No ground.** An error. Place a Ground part, or name a net 0 or gnd.
- **A pin that is not connected.** A warning. Wire it, or remove the part.
- **Two parts with one name.** An error. Rename one.
- **Two net names joined by wiring.** An error: one of the nets is a short, or a name is wrong.
- **A value that is not a number**, or a resistance, capacitance or inductance at or below zero. An error that quotes the value.
- **A net with no DC path to ground.** A warning, for example the node between two capacitors in series. Its voltage is not fixed by the circuit; add a resistor to ground. The analyses still run.
- **A loop of voltage sources and inductors**, or a source with both ends on one net. An error: the current in the loop is undefined. Put a small resistor in it.

Each problem names the part, so selecting it in Problems finds it.
