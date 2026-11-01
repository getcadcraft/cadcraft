---
title: Harness and cabinet wiring: the checks
summary: What the Harness and cabinet wiring add-on warns about in Problems, and how to fix each.
section: reference
order: 20
keywords: problems, checks, wire id, unrouted, overlap, rail, unplaced
---

## What is checked

The checks appear in the Problems panel and update when you change the drawing.

- **Wires with no id.** A note. Fix: {{cmd:HNUM}} numbers them.
- **Wires with no length.** A warning, shown once the drawing has a harness or a cabinet device: their devices are not tied to a harness node, not both in the cabinet, and no length was typed.
- **Devices overlapping on a rail**, or **a device past the end of its rail.** A warning. Devices count as on a rail when their centre is within the rail's width.
- **Schematic devices not in the cabinet yet.** A note, once any device is placed. Field devices (motors, lamps, switches, push buttons) are not expected in the cabinet.
- **Cabinet devices the schematic does not have.** A warning: the tag on the device does not match any tag in the schematic.

The module sizes (a one-pole breaker is 17.5 mm wide, a contactor 45 mm, a terminal 6.2 mm) are typical; change a device's size in Properties to match the part you buy.
