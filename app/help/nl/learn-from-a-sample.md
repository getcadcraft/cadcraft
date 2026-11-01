---
title: Leren van een voorbeeldtekening
summary: Open het voorbeeldhuis of het voorbeeld as-built van CadCraft en loop door de bladen, het titelblok, de maatvoering en de lagen.
keywords: voorbeeld, voorbeelden, voorbeeldtekening, leren, handleiding, rondleiding, titelblok, bladen, as-built, architectonische set, een voorbeeld openen
from: aa1f960a
---

## Wat u leert

Hoe een afgewerkte set is opgebouwd: modelruimte, bladen met viewports op schaal, een titelblok met attributen, maatvoering in feet en inches en in millimeters, lagen. De voorbeelden zijn van CadCraft zelf en vrij te gebruiken voor alles (CC0).

## Een voorbeeld openen

1. Klik in het linkerpaneel, onder {{ui:Tekening}}, op {{ui:Een voorbeeld openen}} (of typ {{cmd:SAMPLES}}; in de lintstijlen staat het in het menu {{ui:Bestand}}).
2. Klik op {{ui:Openen}} naast {{ui:Voorbeeldhuis}}. Het opent in een eigen tabblad, zodat uw werk open blijft.

## Het model verkennen

1. Klik op {{ui:Alles tonen}} (of typ `ZOOM` en daarna `E`): de plattegrond, de voorgevel, een doorsnede en een wanddetail.
2. Klik in {{ui:Lagen}} op het oog naast `A-ANNO-DIMS` om de maatvoering te verbergen, en nogmaals om haar te tonen.
3. Klik op een deur: Eigenschappen toont een blokverwijzing naar `DOOR-32`. Deuren en ramen zijn blokken, geplaatst gedraaid en gespiegeld.

## De bladen

1. Klik onder de tekening op {{ui:A-101 FLOOR PLAN}}: een ARCH D-blad met één viewport op 1/4" = 1'-0".
2. Dubbelklik in de viewport om er het model doorheen te bewerken; dubbelklik erbuiten om terug te gaan.
3. {{ui:A-501 DETAILS}} toont het wanddetail op 1 1/2" = 1'-0": hetzelfde model, een andere schaal.

## Het titelblok

1. Dubbelklik op een blad op het titelblok: {{ui:Attributen bewerken}} toont PROJECT, TITLE, SCALE, DATE, DRAWN en SHEET.
2. Wijzig DRAWN in uw initialen en klik op {{ui:OK}}.
3. Om het titelblok zelf op elk blad te wijzigen, selecteert u het en kiest u {{ui:Blokken}} › {{ui:Meer}} › {{ui:Ter plekke bewerken}}. Zie [Attributen](topic:attributes).

## Het as-built

Open {{ui:Voorbeeld as-built}} op dezelfde manier. De grijze punten op `SCAN-SLICE` zijn een plak van een scan; de wanden op `AB-WALL` zijn erover overgetrokken. De oostwand staat 35 mm uit het lood: de maatvoering zegt dat twee keer, in millimeters (`AB-DIMS-MM`) en in feet en inches (`AB-DIMS-FTIN`, dezelfde lengtes via een meetschaal). De rode wolken op `REV-1` markeren wat de opmeting vond.

## Daarna

- [De tekstgrootte van maatvoering wijzigen](topic:change-dimension-text-size)
- [Plotten naar pdf](topic:plot-pdf): plot {{ui:A-101 FLOOR PLAN}}.
