---
title: Circuit simulation: analyses and instruments
summary: How to run the operating point, the transient and the AC sweep, and how to read them on the meter, the scope and the plotter.
section: tasks
order: 5
keywords: operating point, transient, AC sweep, meter, scope, plotter, bode, frequency response
---

## The three analyses

- **Operating point.** The DC solution: every source at its DC value, capacitors open, inductors shorted. The result is a table of net voltages and part currents. A **meter** shows the voltage of its net on the drawing.
- **Transient.** The circuit over time, from the operating point. Type the stop time and the step. A **scope** shows the voltage of the net it sits on; put several scopes to see several nets. The trace joins the solved points; nothing is smoothed. A smaller step is closer to the exact answer, and a very small step on a long time is refused (over 20000 steps).
- **AC sweep.** The small-signal response at the operating point, from a start to an end frequency with points per decade. A source needs an AC size (an AC source has one; a DC or pulse source has an "AC size for the sweep" value). A **plotter** shows the level (dB relative to 1 V) and the phase of its net. With a 1 V AC source the level is the gain.

## Current

The current of a part is shown in the operating point table, from its first pin to its second. For a source it runs from the + pin to the − pin through the source, so a source that delivers power reads negative.

## What is checked

The analyses do not run while the rule check has an error. See the checks topic.
