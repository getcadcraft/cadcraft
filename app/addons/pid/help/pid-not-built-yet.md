---
title: P&ID: not built yet
summary: What the P&ID add-on does not do yet, so you know before you plan a job around it.
section: reference
order: 90
keywords: limits, not built, missing, roadmap, p&id
---

## Not built yet

- **Specifications and sizes from a pipe spec**: a line number's size and spec are text; nothing checks them against a piping class. The 3D piping with specs is a separate add-on in BimCraft.
- **Loop diagrams, cause-and-effect and data sheets** from the instrument index.
- **Several sheets with a drawing list** and cross-references between off-page connectors: the connectors carry a label; nothing joins them across drawings yet.
- **Bubbles for sub-systems, insulation and heat tracing marks**: insulation is a text field in the line list.
- **Moving a line when an item it ends on moves**: lines are never attached. Move the line's end with its grip.
- **Symbols from other libraries**: the library is CadCraft's own; draw others as blocks.
- **Other languages** for the add-on's words: they come with the next language update.
- **Stream splitting and optimising the temperatures** in the heat-exchanger network grid; the grid is a first design.
- **The PDF of the HAZOP worksheet** has no logo or signature block; the worksheet's PDF is plain tables.
- **MarkupCraft shows the node boxes only after its own importer** reads the JSON file: it is exported here, not yet read there.
- **Live values from Studio** need Studio's plant connection (OPC UA is Rust, built with Studio).
