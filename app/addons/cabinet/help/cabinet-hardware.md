---
title: Cabinets: drilling, hardware, side view and 3D
summary: The 32 mm drilling of every cabinet, the hardware list, a side view cut through a cabinet, and the cabinets on the 3D tab.
section: tasks
order: 3
keywords: drilling, 32 mm, system holes, shelf pins, hinge, hinge cup, plate, drawer slide, hardware, legs, side view, section, 3d, solids
---

## Drilling

Type {{cmd:CABDRILL}}. CadCraft lists the holes of every cabinet part that is drilled. {{cmd:EXPORT}} › {{ui:Cabinet drilling (CSV)}} writes every hole as a row: the part, its face, the kind of hole, **x** along the part's length, **y** across its width, the diameter and the depth.

- **Sides** are drilled on the inside face. **y** runs from the back edge to the front edge; **x** from the floor (a notched kick) or from the bottom of the box. Shelf-pin holes sit on two lines, 37 mm from the front and the back edge, 32 mm apart, the first 64 mm from the end. Hinge plates take two of the same holes on the hinge side only. Drawer slides take a front and a rear hole.
- **Doors** are drilled on the back face for cup hinges (Ø35, 12.5 deep, the centre 22.5 mm from the hinge edge, 100 mm from each end; two hinges up to 1000 mm, three to 1600, four to 2200). **y** counts from the **hinge edge**. A pair of doors is one part of two: the second is the mirror image.
- A side is one part of quantity two, drilled on its inside face. Two sides are mirror images of each other.

Every number (the 37, 32 and 64, the cup size, the hinge spacing) is one of the construction rules, so a shop with other numbers changes them. The numbers are the common frameless-cabinet ones; check them against your hardware maker's sheet before you drill.

## Hardware list

Type {{cmd:CABHARD}}. It counts hinges and plates, shelf pins (four a shelf), drawer slides by length, legs (four a base cabinet, six over 900 mm wide), hanging brackets, pulls (one a front) and panel fasteners (two a joint). {{cmd:EXPORT}} › {{ui:Cabinet hardware list (CSV)}} saves it.

## Side view

{{cmd:CABSIDE}}: pick a cabinet and a point. The cabinet is drawn cut through its middle and seen from the side: the side panel, bottom, top or rails, back, shelves, plinth, the fronts and each drawer box. It follows the cabinet when its size or rules change.

## 3D

{{cmd:CAB3D}} puts the cabinets on the 3D tab as solids (panels, shelves, plinth, fronts). With {{ui:Settings}} › {{ui:Cabinets}} › {{ui:Keep the cabinets on the 3D tab}} on, they follow every change you make.
