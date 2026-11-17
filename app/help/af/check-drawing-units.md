---
title: Kontroleer in watter eenhede 'n tekening is
summary: Sien of 'n oopgemaakte tekening in millimeter, duim of iets anders is, kontroleer dit deur te meet, en weet waarom 'n ander program verskillende eenhede vir dieselfde DXF kan noem.
keywords: eenhede, watter eenhede, kontroleer eenhede, millimeter, mm, duim, metries, imperiaal, DXF-eenhede, STEP na DXF, verkeerde eenhede, duim of mm, INSUNITS, MEASUREMENT, tekeningeenhede, PartCraft DXF
from: c0ee75bb
---

## Wat jy sal doen

Vind uit waarvoor een eenheid in 'n oopgemaakte tekening staan, en maak seker dat die getalle wat jy lees die grootte is wat jy verwag.

## Stappe

1. Maak die tekening oop, druk dan {{key:Esc}} sodat niks gekies is nie, op die {{ui:Model}}-oortjie.
2. In die regterpaneel, onder {{ui:Huidige instellings}}, lees {{ui:Eenhede}}. Dit sê wat een tekeningeenheid beteken: {{ui:Millimeter}}, {{ui:Duim}}, {{ui:Voet}} en so aan. 'n DXF wat uit PartCraft gestoor is, sê {{ui:Millimeter}}.
3. Kontroleer dit deur iets te meet waarvan jy die grootte ken. Tik {{cmd:DIST}} en kies die twee punte van 'n rand of 'n gat. As 'n deel wat jy ken 25 mm is en `25` lees, is die tekening in millimeter; as dit ongeveer `0.98` lees, is dit in duim.

{{ui:Sonder eenhede}} beteken die lêer sê nie. CadCraft behandel dit dan as die papier se eenheid (millimeter op ISO-papier, duim op VSA-papier), en die getalle is net so reg as die program wat hulle geskryf het.

## As die eenhede verkeerd is

Om {{ui:Eenhede}} te verander, **verander niks se grootte nie**: die getalle bly dieselfde en net wat hulle beteken, verander. Stel dit dus net om te sê wat die tekening werklik is. As die getalle millimeter is en {{ui:Eenhede}} sê {{ui:Duim}}, kies {{ui:Millimeter}}. As jy die geometrie self in ander eenhede nodig het, skaal dit met {{cmd:SCALE}} (25.4 van duim na millimeter, 1/25.4 die ander kant toe) en stel dan {{ui:Eenhede}}.

Hoe lengtes geskryf word (desimaal, voet en duim, breuke) is 'n aparte instelling, {{ui:Lengteformaat}}: sien [Eenhede, papiergroottes en skale](topic:units-papers-scales).

## Waarom 'n ander program duim kan sê

'n DXF verklaar sy eenhede in sy kopstuk. Die oudste soort DXF, R12, het glad geen eenhede-veranderlike gehad nie, so 'n program wat R12 streng lees, ignoreer die een wat daarin geskryf is en val terug op sy eie verstek, wat dikwels duim is. Die geometrie in die lêer is in albei gevalle dieselfde: net die etiket verskil. PartCraft skryf sy DXF-lêers as R12 en noem millimeter op twee maniere (`$INSUNITS` 4 en `$MEASUREMENT` 1), sodat meer programme hulle reg lees. As 'n program steeds duim sê, stel sy eenhede op millimeter wanneer jy die lêer oopmaak.

'n Lêer in 'n tekening bring (in plaas daarvan om dit oop te maak) skakel sy eenhede om: sien [Eenhede by invoer](topic:units-on-import).
