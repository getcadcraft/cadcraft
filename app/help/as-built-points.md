---
title: Check as-built points
summary: Read the points a survey crew measured and compare them with the drawing's points and blocks: within or outside a tolerance, not measured, extra — marked in the drawing and written as a CSV report.
section: tasks
order: 61
keywords: as built, as-built, asbuilt, survey, total station, setting out, stake out, point file, csv, txt, pnezd, penzd, xyz, tolerance, deviation, check, compare, exportpoints, layout points
---

{{cmd:ASBUILT}} (alias ASB) is the other half of {{cmd:EXPORTPOINTS}}: you export the drawing's points for the field, the crew sets them out and measures what was built, and ASBUILT compares their file with the drawing.

1. Type {{cmd:ASBUILT}} and select the same points and blocks you exported (Enter takes every POINT, as EXPORTPOINTS does).
2. **Pair the as-built points by** **Number** (the crew kept your point numbers: give the first number you exported from) or **Nearest** (they numbered their own shots: each design point takes the closest one).
3. Give the file's units and coordinates as you exported them (Drawing, Metres or Feet; World or UCS), and the **tolerance** in drawing units.
4. Pick the crew's CSV or TXT file. CadCraft reads it the way CivilCraft does: commas, tabs, semicolons or spaces, a header row naming its columns, or PNEZD by column count.

The command line says how many points were paired, how many are within the tolerance, outside it, not measured and extra, and the largest distance. **Mark them in the drawing?** Yes puts them on the layer **AS-BUILT** as one undo step: a point at each shot, its number and distance beside it, and a red line from the design point to every shot outside the tolerance. A CSV report downloads with every point: design and as-built coordinates, the differences east, north and in height, and the result.

See also [Points for BIM programs](topic:points-for-bim).
