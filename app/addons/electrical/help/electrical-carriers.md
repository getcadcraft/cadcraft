---
title: Electrical: trays, conduits, cable lengths and fill
summary: Size the routes as cable trays or conduits, type each cable's outside diameter, and get the cable schedule (with lengths along the routes) and the fill of every tray and conduit.
section: reference
order: 40
keywords: cable tray, conduit, fill, cable schedule, route, outside diameter, ELCARRIER, ELCR, EMT, PVC, length, slack
---

The routes drawn with {{cmd:ELROUTE}} (lines and polylines on layers starting `EL-ROUTE`) carry the circuits' cables. {{cmd:ELCARRIER}} (`ELCR`) makes them trays or conduits and judges the fill.

- {{ui:Size}}: select route lines, then choose Tray (width and usable depth in mm) or Conduit (EMT or PVC40 and a trade size). The routes move to a layer that names them: `EL-ROUTE-TRAY-300X100`, `EL-ROUTE-CONDUIT-EMT-114` (trade size without the fraction bar: 12, 34, 1, 114, 112, 2, 212, 3, 312, 4).
- {{ui:Od}}: the outside diameter of a cable type, exactly as written in the circuits' cable field (for example `3x2.5`), from the maker. Without it the fill is not judged and the cable types are listed. It is never guessed.
- {{ui:Run}}: each circuit with a board is one cable, routed from the board to its farthest device along the shortest way through the routes. It prints the cable schedule (length with 10% slack and 1 m at each end), the fill of every sized tray and conduit with the next trade size that would hold the cables, and saves the schedule as CSV.

Fill limits are the usual 53 / 31 / 40 % for one / two / more cables in a conduit and 50 % in a tray. They are labelled defaults; the code in force decides. A device with no continuous route from the board is listed and given no length.
