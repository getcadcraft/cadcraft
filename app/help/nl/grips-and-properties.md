---
title: Bewerken met grips en Eigenschappen
summary: Rek, verplaats en wijzig het formaat van objecten via hun grips, en typ exacte lengtes, stralen, hoeken en coördinaten in het paneel Eigenschappen.
keywords: grips, eigenschappen, rekken, lengte, straal, coördinaten, bewerken, snelle eigenschappen, eigenschappenpalet, wijzigen, laag, kleur, color
from: f22541ba
---

## Wat u leert

Twee snelle manieren om een object te wijzigen zonder opdracht: sleep de **grips** ervan, of typ nieuwe waarden in het paneel **Eigenschappen** rechts.

## Grips

Wanneer u objecten selecteert (maximaal 200 tegelijk) terwijl geen opdracht actief is, verschijnen er kleine vierkantjes op. Dit zijn de grips:

| Object | Grips |
|---|---|
| Lijn | Beide uiteinden, en het midden (verplaatst de hele lijn) |
| Cirkel | Het middelpunt (verplaatst hem) en vier punten op de cirkel (wijzigen de straal) |
| Boog | Het middelpunt en beide uiteinden (wijzigen waar hij begint en eindigt) |
| Polylijn | Elk hoekpunt |
| Tekst, punt, blokverwijzing | Het invoegpunt |
| Ellips | Het middelpunt |
| Maatvoering | De bepalende punten en de positie van de maatlijn |
| Viewport | Het middelpunt (verplaatst hem) en de vier hoeken (wijzigen het formaat) |

### Een grip verplaatsen

1. Teken een lijn en klik erop. Er verschijnen drie grips.
2. Klik op de grip aan één uiteinde. In de statusbalk staat: "Klik waar deze grip heen moet (Esc om te annuleren). Snaps en Ortho gelden."
3. Beweeg het kruisdraad. Er verschijnt een voorbeeld.
4. Klik op de nieuwe positie, of snap naar een punt op een ander object en klik.

Het uiteinde verplaatst zich en de rest van de lijn blijft staan. U kunt ook op een grip drukken en slepen, en loslaten waar hij moet komen.

:::note
U kunt geen coördinaat typen voor een grip. Voor een exacte positie: snap naar een punt, of typ de waarde in Eigenschappen.
:::

Druk op {{key:Esc}} of klik met de rechtermuisknop om een grip-verplaatsing te annuleren.

## Eigenschappen

Het rechterpaneel toont de eigenschappen van wat is geselecteerd.

1. Klik op een lijn. De kop van het paneel leest "Lijn".
2. Klik in {{ui:Length}}, typ `2500` en druk op {{key:Enter}}.

De lijn is nu precies 2500 lang en behoudt zijn startpunt en hoek. {{key:Enter}} of klikken elders past een waarde toe; {{key:Esc}} zet de oude waarde terug. Elke wijziging is één stap om ongedaan te maken, ook wanneer veel objecten tegelijk veranderen.

Velden accepteren expressies (`=2*45`) en lengtes met eenheden (`3'6"`, `900mm`), elk punt heeft X, Y en Z, en meerdere objecten kunnen tegelijk worden gewijzigd. Alles staat in [Het paneel Eigenschappen](topic:properties-panel).

## Veelvoorkomende fouten

- **Er verschijnen geen grips.** Een opdracht is actief (druk op Esc), of er zijn meer dan 200 objecten geselecteerd, of het object staat op een vergrendelde laag.
- **De grip ging naar de verkeerde plek.** Een snap heeft hem gevangen. Houd {{key:Shift}} ingedrukt terwijl u klikt om snaps te negeren.
- **Typen in Eigenschappen deed niets.** Druk op {{key:Enter}} of klik elders om toe te passen. Een geweigerde invoer (nul of negatieve lengtes en stralen, tekst die geen waarde is) kleurt het veld rood en zegt waarom.
- **Getypte letters kwamen in een veld van Eigenschappen terecht.** Zolang een veld de cursor heeft, typt u daarin. Druk op {{key:Enter}} of {{key:Esc}}, en typ daarna de opdracht.
