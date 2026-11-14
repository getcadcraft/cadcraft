---
title: Windows and doors: cut list, bars, glass and labels
summary: The profile cut list with angles and welding allowances, the bars to saw with the least waste, steel, glass sizes, hardware and gaskets, and labels in sawing order.
section: tasks
order: 2
keywords: cut list, bars, saw, optimisation, optimization, waste, kerf, mitre, miter, weld, steel, reinforcement, glass, hardware, gasket, labels, csv
---

## The workshop list

Type {{cmd:WINLIST}}. It counts the profile pieces, the bars to saw for each profile and colour with the waste, the glass, and the hardware and gaskets. {{cmd:WINBARS}} lists every bar: which pieces on it, their angles, and what is left.

## What the cut length is

- **Frame, sash, bead** are mitred at 45°. The length is the long (outside) edge.
- **PVC** corners are welded; each corner melts about 3 mm, so every welded end is cut 1.5 mm longer. Aluminium has no allowance. Beads are clipped in and are never welded.
- **Mullions and transoms** are cut square (90°) to the opening they sit in.
- **Steel**: every PVC frame or sash profile longer than the system's limit, and every mullion and transom, gets a steel reinforcement, shorter than the profile by a set-back at each end.

## Bars

Pieces are cut from stock bars (6.5 m for the example PVC systems, 6 m steel and aluminium) with the system's saw cut and the bar ends trimmed. Each profile and colour is optimised on its own, trying every way a small job can be cut (the lower bound on bars is shown when the search finishes: if it says the result is not proven, the best found in the time allowed is used). The setting {{ui:Share mitre cuts between pieces on a bar}} lets two mitred ends that meet be one cut, which saves the profile's face width for each such pair; it is a way of sawing (the operator turns every other piece), so it is off by default.

## Files

{{cmd:EXPORT}} writes {{ui:Window profile cut list (CSV)}}, {{ui:Window bars to saw (CSV)}} (every cut with its position on the bar), {{ui:Window glass list (CSV)}}, {{ui:Window hardware list (CSV)}} and {{ui:Window labels (HTML, print at 100 %)}}. The labels carry the cut length, the angles, the bar and cut number, and a Code 128 bar code of the piece id; they come in sawing order.

## Hardware

Per sash: a handle, hinges (two, three over a set height) or a tilt-and-turn set, locking points (one for about each 1.1 m of sash perimeter, at least two) and as many strikers. Per pane: glazing packers and gasket. Per frame: gasket; per mullion or transom end: a connector. The counts are a starting point: check them against your hardware maker's tables.
