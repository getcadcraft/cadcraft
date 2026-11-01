---
title: Cabinets: not built yet
summary: What the Cabinets add-on does not do yet, so you know before you plan a job around it.
section: reference
order: 90
keywords: limits, not built, missing, roadmap, cabinets, g-code, drilling, face frame
---

## Not built yet

- **G-code straight from CadCraft.** The nested sheets go out as a DXF; PartCraft turns that DXF into G-code through its post processors (a program for each sheet) once its Manufacture entry for nested sheets is mounted. Until then your CAM program reads the DXF.
- **Drilling files for a drilling machine.** The holes are listed and exported as a CSV; no machine format (boring-machine files) is written yet.
- **Face-frame cabinets.** Only frameless boxes are built for now.
- **Corner cabinets, end panels, fillers and worktops** as parts of their own. A gap ({{ui:G}} in {{cmd:CABINET}}) leaves the space.
- **QR codes** on the labels (a Code 128 bar code is there).
- **Bar optimisation for profiles** (lengths cut from bars): that comes with the window builder.
