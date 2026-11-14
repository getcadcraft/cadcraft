---
title: Circuit simulation: what it does not do
summary: What the Circuit simulation add-on does not do and how far to trust it, including that Multisim files and part models are not read.
section: trouble
order: 90
keywords: limits, not built, multisim, spice, models, accuracy
---

## What is not there

- **Other programs' files.** Multisim files and part models are not read, and nothing here is promised about them. The add-on has its own file (Save and Open) and writes a plain text netlist of the elements.
- **Real part models.** There is no library of real transistors, op-amps or diodes. You type the figures of the part you mean. The op-amp has no supply rails, so it never saturates, and no bandwidth limit.
- **More analyses.** No noise, temperature sweep, Monte Carlo, Fourier or DC sweep in the panel yet.
- **Other instruments.** The meter reads DC voltage; there is no wattmeter, signal generator window or logic analyser.
- **Boards.** Printed circuit boards are not part of this add-on.

## How far to trust it

The solver is our own, written from the published method (modified nodal analysis with Newton iteration). It has been checked against closed forms: a divider, an RC step, a series RLC resonance, a half-wave rectifier, an op-amp gain stage, a MOSFET, a transistor bias and an LED. Each is a small case. A circuit with sharp switching or a very wide range of time constants may fail to converge; then it says so and does not give a guess.

It is for learning, checking an idea and designing small circuits. It is not a sign-off tool, and the answers are only as good as the values you typed.
