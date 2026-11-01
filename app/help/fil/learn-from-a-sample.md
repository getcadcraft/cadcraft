---
title: Matuto mula sa sample na drawing
summary: Buksan ang sample na bahay ng CadCraft o ang sample as-built nito, at tingnan ang mga sheet, title block, dimension, at layer nito.
keywords: sample, mga sample, halimbawang drawing, matuto, tutorial, walkthrough, title block, sheets, as-built, architectural set, magbukas ng sample
from: aa1f960a
---

## Ano ang matututunan mo

Paano binubuo ang isang tapos na set: model space, mga sheet na may viewport sa isang scale, title block na may attribute, dimension sa feet at inches at sa millimeters, mga layer. Sariling sample ng CadCraft ang mga ito at libre silang gamitin para sa anuman (CC0).

## Magbukas ng sample

1. Sa kaliwang panel, sa ilalim ng {{ui:Drawing}}, i-click ang {{ui:Magbukas ng sample}} (o i-type ang {{cmd:SAMPLES}}; sa mga ribbon style, nasa menu na {{ui:File}} ito).
2. I-click ang {{ui:Buksan}} sa tabi ng {{ui:Sample na bahay}}. Bumubukas ito sa sarili nitong tab, kaya nananatiling bukas ang trabaho mo.

## Tingnan ang paligid ng model

1. I-click ang {{ui:Extents}} (o i-type ang `ZOOM`, saka `E`): ang floor plan, ang front elevation, isang section, at isang wall detail.
2. Sa {{ui:Mga Layer}}, i-click ang mata sa tabi ng `A-ANNO-DIMS` para itago ang mga dimension, at muli para ipakita ang mga ito.
3. I-click ang isang pinto: ipinapakita ng {{ui:Properties}} ang block reference ng `DOOR-32`. Ang mga pinto at bintana ay mga block, na inilagay na nakaikot at nakasalamin.

## Ang mga sheet

1. I-click ang {{ui:A-101 FLOOR PLAN}} sa ilalim ng drawing: isang ARCH D na sheet na may isang viewport sa 1/4" = 1'-0".
2. I-double-click sa loob ng viewport para gumana sa model sa pamamagitan nito; i-double-click sa labas para bumalik.
3. Ang {{ui:A-501 DETAILS}} ay nagpapakita ng wall detail sa 1 1/2" = 1'-0": ang parehong model, sa ibang scale.

## Ang title block

1. Sa anumang sheet, i-double-click ang title block: nililista ng {{ui:I-edit ang mga attribute}} ang PROJECT, TITLE, SCALE, DATE, DRAWN, at SHEET.
2. Palitan ang DRAWN ng iyong mga inisyal at i-click ang {{ui:OK}}.
3. Para baguhin ang mismong title block sa bawat sheet, piliin ito at piliin ang {{ui:Mga Block}} › {{ui:Higit pa}} › {{ui:I-edit sa lugar}}. Tingnan ang [Mga attribute](topic:attributes).

## Ang as-built

Buksan ang {{ui:Sample na as-built}} sa parehong paraan. Ang mga kulay-abong tuldok sa `SCAN-SLICE` ay isang hiwa ng scan; ang mga pader sa `AB-WALL` ay ginuhit sa ibabaw ng mga ito. Ang east wall ay 35 mm na wala sa parisukat: sinasabi ito ng mga dimension nang dalawang beses, sa millimeters (`AB-DIMS-MM`) at sa feet at inches (`AB-DIMS-FTIN`, ang parehong haba sa pamamagitan ng measurement scale). Ang mga pulang cloud sa `REV-1` ay nagmamarka ng nakita ng survey.

## Susunod

- [Baguhin ang laki ng teksto ng dimension](topic:change-dimension-text-size)
- [I-plot sa PDF](topic:plot-pdf): i-plot ang {{ui:A-101 FLOOR PLAN}}.
