---
title: MEP drafting: pipe and duct runs
summary: Single-line and double-line pipes by nominal size, rectangular, round and flexible ducts, branches, and how a run stays editable.
section: tasks
order: 10
keywords: pipe, duct, run, single line, double line, nominal size, dn, outside diameter, elbow, mitre, radius, flexible duct, branch, tee, service layer
---

## Pipes

{{cmd:MEPPIPE}} draws a pipe run through the points you click. Before the first point you can change:

- {{ui:Service}}: the service's tag, for example `HF`.
- {{ui:Size}}: a nominal size, `DN15` to `DN600` (in a drawing in inches: `1/2`, `3/4`, `1`, `1-1/4` and so on).
- {{ui:Lines}}: `S` for a single line on the centreline, or `D` for a double line with the two edges at the pipe's real outside diameter and drawn elbows at the bends.

The outside diameters are those of steel pipe (ASME B36.10M, the same table the Piping add-on uses). For copper, plastic or multilayer pipe type the outside diameter itself, for example `Ø22` or `22mm`; the run is drawn at exactly that and its size reads `Ø22`. There is no table of ours for those pipes.

A single-line run is one polyline. A double-line run is a set of lines and arcs: two edges for each straight piece, two arcs for each elbow with a line across where the elbow starts and ends, and a line closing each open end. Elbows are drawn at a centreline radius of 1.5 times the outside diameter, a drawing choice.

## Ducts

{{cmd:MEPDUCT}} draws a duct run. {{ui:Kind}} chooses:

- `R` rectangular: {{ui:Size}} is width by height, for example `400x250`. The plan shows the width.
- `O` round: {{ui:Size}} is the diameter, for example `200`. It is drawn as a double line and its size reads `Ø200`.
- `F` flexible: one wavy line as wide as the duct.

{{ui:Elbow}} chooses `R` radius elbows (centreline radius equal to the duct's width) or `M` mitred corners with the mitre line drawn.

## Branches and connections

Start or end a run on another run and it joins it. On a double-line run the branch stops at the main's edge and that edge is opened for it. Start or end a run near an equipment connection point and it snaps onto the point.

## Editing a run

A run is plain geometry, so move, copy, stretch, trim, extend and erase work on it as on any line. {{cmd:MEPSELECT}} selects every piece of the run you click, with the symbols on it. Each piece remembers its service and size, not its position, so the size tag, the symbols and the legend keep working after you edit it.

Changing a run's size or service after it is drawn is not built yet: erase it and draw it again, or move its pieces to another layer by hand (the size tag and schedule will still say the old service).
