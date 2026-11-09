---
title: Draw a roller-chain sprocket
summary: Pick a chain number and a tooth count and draw the sprocket's tooth outline, pitch circle and bore, from a chain table read from public catalogues.
section: tasks
order: 1
keywords: sprocket, roller chain, chain, ansi, iso 606, b29.1, 40, 50, 60, 80, 08a, 08b, pitch, teeth, tooth, gear
---

## Draw a sprocket

Switch the add-on on in Settings › Add-ons, then type {{cmd:SPROCKET}} (or `SPR`). Answer the chain number (for example `40`, `80`, `08A` or `10B`), the number of teeth (at least 6), the bore (it suggests one third of the root diameter) and click the centre. The outline is drawn tooth by tooth on layer SPROCKET, the pitch circle and centre lines on SPROCKET-CENTER and the bore on SPROCKET-BORE. It is one undo step.

The command line gives the pitch, root and tip diameters and says whether the chain seats on the tooth and clears it. The rollers sit one pitch apart on the pitch circle `p / sin(180° / N)`; the tooth is the seat arc around each roller and the flank leaving it.

## The chain table

{{cmd:CHAINS}} lists every chain number in the table: ANSI 25 to 240 (14), ISO 606 A series (11, with the light 085) and B series (13), with pitch, roller diameter, width between inner plates and inner plate height in millimetres, and how many catalogues agree. Chains 25 and 35 (and ISO 04C and 06C) have no rollers; their "roller" is the bushing diameter. An ANSI chain and its ISO A-series twin (40 and 08A, for example) are the same chain; their inner widths differ by up to 0.3 mm because ANSI gives a nominal width and ISO a minimum.

{{cmd:CHAINSOURCES}} lists the public catalogues the numbers were read from, with their addresses and the date they were read.

## What this is not

- The numbers are read from manufacturers' catalogues and reference pages and kept only where at least two of them print the same value. They are **not copied from ISO 606 or ANSI/ASME B29.1**, which we do not hold, and the catalogues do not name an edition.
- Some numbers are left out: a chain whose width between inner plates only one catalogue prints (ISO 04C, 06C, 36A) is not in the table, and a plate height the catalogues disagree on is shown as not available (it is not used to draw the outline).
- The **tooth form is this add-on's own**: seat clearance 2 %, seat half angle 80 degrees, tip diameter at 0.35 pitch above the pitch circle. It is proved against the chain it is made for, but it is not the standard's tooth form and has not been compared with any catalogue sprocket. Check it with your sprocket maker before cutting.
- It draws the face of the sprocket. Hub, keyway, strength and wear are not part of it.
