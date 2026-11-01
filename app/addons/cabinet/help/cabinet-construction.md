---
title: Cabinets: how they are built
summary: The construction rules the Cabinets add-on builds with, how each part's size is worked out, and how to change the rules.
section: reference
order: 10
keywords: construction, frameless, 32 mm system, carcass, back, groove, toe kick, plinth, legs, reveal, door, drawer, slide, shelf, rules
---

## The default: frameless, 32 mm system

Every cabinet is a box of panels: the sides run the full height of the box, the bottom (and on wall and tall cabinets the top) sits between the sides, and a base cabinet has two rails across the top instead of a top panel, so the worktop can be fixed through them. The back sits in grooves in the sides and the bottom. Base and tall cabinets stand on adjustable legs with a plinth board in front. Doors and drawer fronts cover the box (full overlay) with an even gap all round.

What a 600 mm base cabinet (870 high, 560 deep) is made of with the millimetre rules:

| Part | Size (mm) | Edge banding |
|---|---|---|
| Side × 2 | 720 × 560 × 18 | front edge |
| Bottom | 564 × 560 × 18 | front edge |
| Front rail | 564 × 100 × 18 | front edge |
| Back rail | 564 × 100 × 18 | none |
| Back | 580 × 710 × 8 | none |
| Shelf | 562 × 516 × 18 | front edge |
| Door | 717 × 597 × 18 | all four edges |
| Plinth | 600 × 150 × 18 | none |

The box is 870 − 150 = 720 high. Inside, it is 600 − 2 × 18 = 564 wide. The back goes 8 mm into each groove. The shelf is 1 mm short at each end and stops 20 mm behind the front. The door is 3 mm smaller than the box each way, so two doors side by side have a 3 mm gap.

Sizes are **finished sizes**, with the banding on. The cut list also gives the cut size: the banding's thickness comes off each banded edge.

## Doors and drawers

- A cabinet wider than one door may be (600 mm or 24 in) gets a pair. A tall cabinet whose door would be taller than 1400 mm (55 in) gets two rows of doors with a fixed shelf between them. {{ui:Properties}} › {{ui:Doors}} sets one, two or none.
- A drawer base has fronts of equal height (or the heights you give). Each drawer box is as wide as the opening less the slide gap at each side (13 mm), as deep as the longest slide that fits, and 40 mm lower than its front. Its bottom sits in 6 mm grooves.

## Changing the rules

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Cabinets}} sets the carcass thickness, the gap between fronts, the back (in grooves, between the panels, or on the back), the back's thickness and the toe kick (legs and a plinth, notched sides, or none). The settings apply to cabinets you place from then on: each cabinet keeps the rules it was built with, so a drawing gives the same cut list wherever it is opened.

**A drafting aid.** The rules are common shop practice, not any maker's system. Check the sizes against the hardware you will fit (hinges, slides, legs) before you cut.
