---
title: Controleren in welke eenheden een tekening staat
summary: Zie of een geopende tekening in millimeters, inch of iets anders staat, controleer het door te meten, en weet waarom een ander programma andere eenheden kan noemen voor dezelfde DXF.
keywords: eenheden, welke eenheden, eenheden controleren, millimeter, mm, inch, metrisch, imperiaal, DXF-eenheden, STEP naar DXF, verkeerde eenheden, inch of mm, INSUNITS, MEASUREMENT, tekeningeenheden, PartCraft DXF
from: c0ee75bb
---

## Wat u gaat doen

Ontdek wat één eenheid in een geopende tekening betekent, en controleer of de getallen die u leest de grootte hebben die u verwacht.

## Stappen

1. Open de tekening en druk daarna op {{key:Esc}} zodat niets is geselecteerd, op het tabblad {{ui:Model}}.
2. Lees in het rechterpaneel, onder {{ui:Huidige instellingen}}, {{ui:Eenheden}}. Daar staat wat één tekeneenheid betekent: {{ui:Millimeter}}, {{ui:Inch}}, {{ui:Voet}} enzovoort. Een DXF die is opgeslagen vanuit PartCraft zegt {{ui:Millimeter}}.
3. Controleer het met iets waarvan u de grootte kent. Typ {{cmd:DIST}} en kies de twee uiteinden van een rand of een gat. Als een onderdeel dat u kent 25 mm is en `25` aangeeft, staat de tekening in millimeters; als er ongeveer `0.98` staat, staat hij in inch.

{{ui:Zonder eenheid}} betekent dat het bestand het niet zegt. CadCraft behandelt het dan als de eenheid van het papier (millimeter op ISO-papier, inch op US-papier), en de getallen zijn alleen zo juist als het programma dat ze schreef.

## Als de eenheden verkeerd zijn

Het wijzigen van {{ui:Eenheden}} **verandert de grootte van niets**: de getallen blijven gelijk en alleen wat ze betekenen verandert. Stel het dus alleen in om te zeggen wat de tekening werkelijk is. Als de getallen millimeters zijn en {{ui:Eenheden}} zegt {{ui:Inch}}, kies dan {{ui:Millimeter}}. Als u de geometrie zelf in andere eenheden nodig heeft, schaal die dan met {{cmd:SCALE}} (25.4 van inch naar millimeter, 1/25.4 de andere kant op) en stel daarna {{ui:Eenheden}} in.

Hoe lengtes worden geschreven (decimaal, voet en inch, breuken) is een aparte instelling, {{ui:Lengteformaat}}: zie [Eenheden, papierformaten en schalen](topic:units-papers-scales).

## Waarom een ander programma inch kan aangeven

Een DXF geeft zijn eenheden aan in zijn kop. De oudste soort DXF, R12, had helemaal geen variabele voor eenheden, dus een programma dat R12 strikt leest, negeert wat erin staat en valt terug op zijn eigen standaard, wat vaak inch is. De geometrie in het bestand is in beide gevallen hetzelfde: alleen het label verschilt. PartCraft schrijft zijn DXF-bestanden als R12 en geeft millimeter op twee manieren aan (`$INSUNITS` 4 en `$MEASUREMENT` 1), zodat meer programma's ze goed lezen. Als een programma nog steeds inch aangeeft, stel dan de eenheden in op millimeter wanneer u het bestand opent.

Een bestand in een tekening halen (in plaats van het te openen) zet de eenheden om: zie [Eenheden bij importeren](topic:units-on-import).
