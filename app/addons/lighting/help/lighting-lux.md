---
title: Lighting: how much light reaches the floor
summary: Give each fixture type its photometry file (.ies or .ldt), pick an area, and get the direct illuminance at points across it, written on the drawing.
section: reference
order: 30
keywords: lux, illuminance, photometry, ies, ldt, eulumdat, LPHOTO, LLUX, LUX, uniformity, direct light, floor
---

1. {{cmd:LPHOTO}} (`LPH`): pick a fixture type and give it a `.ies` or `.ldt` file from the maker. Files are kept in this browser.
2. {{cmd:LLUX}} (`LUX`): click two corners (or choose Object for a closed polyline). Type the mounting height of the fixtures (a fixture's own height wins), the height of the surface (0 = the floor), the spacing of the points, and the light loss factor.

It writes the lux at each point on layer `LX-LUX` and prints the lowest, average and highest, the lowest over the average, the lumens and watts over the area and the watts per square metre.

**What the number is.** Direct light from the fixtures named, aimed straight down, at the points given: no light from walls, no shadows. It is a lower bound for a room and a good figure for a stage floor. Fixtures with no file are left out and counted. Targets (a lux level a standard asks for) are for you to type; the add-on does not carry any.
