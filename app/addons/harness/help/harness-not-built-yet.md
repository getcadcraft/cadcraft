---
title: Harness and cabinet wiring: not built yet
summary: What the Harness and cabinet wiring add-on does not do yet, so you know before you plan a job around it.
section: reference
order: 90
keywords: limits, not built, missing, nailboard, formboard, duct fill, connector library, roadmap
---

## Not built yet

- **A nailboard drawing at full size.** The harness drawing is a plan of nodes and segments with their lengths, not a plotted board with connector images.
- **A connector and terminal library.** Devices come from the schematic's symbols; the wire end is a choice from a short list (ferrule, ring, fork …), not a part number.
- **Duct fill.** The ducts are drawn and listed, but how full they are is not calculated.
- **Routing in 3D.** Lengths in the cabinet are the distance between centres along the duct grid, times a slack factor you set; wires are not laid out one by one.
- **Wires between two sheets of a cable.** A multi-core cable is listed as separate wires; cable markers from the Electrical add-on are not read.
