---
title: Organiser en tegning med klasser
summary: Klasser sorterer objekter på en annen måte, på tvers av layere (Lighting-Fixtures-Spot). Vis og skjul dem, gi dem farge, linjetype, linjevekt, fyll og tekststil som objekter kan ta «etter klasse», og angi klassen nye objekter legges i.
keywords: klasse, klasser, CLASSES, CLS, CLASS, etter klasse, ByClass, aktiv klasse, bruk ved opprettelse, None, designlayer, layerskala, høyde, Vectorworks
from: 672de9cb
---

Layere forteller *hvor* et objekt hører hjemme i tegningen; klasser forteller *hva* det er. En vegg på layeren `Level 1` kan være i klassen `Walls-Exterior`, og en spotlampe på layeren `Ceiling` i klassen `Lighting-Fixtures-Spot`. Du kan skjule alle lamper på alle layere samtidig, eller plotte alle ytterveggene tykkere, uten å flytte noe mellom layere.

Hvert objekt starter i klassen **None**. En tegning uten egne klasser fungerer akkurat som før.

## Åpne panelet Klasser

Skriv `CLASSES` (eller `CLS`) og trykk {{key:Enter}}, eller velg {{ui:Klasser…}} i menyen {{ui:Mer}} i gruppen {{ui:Visning}}. Panelet åpnes over tegningen og forblir åpent mens du tegner.

- **Legg til en klasse:** skriv navnet i boksen øverst og trykk {{key:Enter}}. En `-` lager et nivå: `Lighting-Fixtures-Spot` ligger under `Lighting-Fixtures`, som ligger under `Lighting`. De manglende nivåene legges til for deg.
- **Vis eller skjul:** øyet ved siden av en klasse. Å skjule en klasse skjuler alle klasser under den, både på skjermen og på papiret.
- **Aktiv klasse:** den runde knappen. Nye objekter du tegner, havner i den aktive klassen.
- **Velg en klasse:** klikk på navnet. Knappene og innstillingene under listen virker da på den.

Tallet på slutten av hver rad er hvor mange objekter som er i klassen (i modellen, på arkene og inne i blokkdefinisjoner).

## Legg objekter i en klasse

Velg objektene, velg en klasse i panelet og velg {{ui:Sett klasse}}. Kryss av for {{ui:EtterKlasse}} først, slik at de tar farge, linjetype, linjevekt, fyll og tekststil fra klassen. Du kan også:

- skriv `CLASS` med objekter valgt og angi et klassenavn (et nytt navn lager klassen);
- skriv `CLASS` uten noe valgt for å sette den aktive klassen; `?` lister klassene med antall;
- bruk seksjonen {{ui:Klasse}} i egenskapspanelet: klassen, og en bryter {{ui:… EtterKlasse}} for farge, linjetype og linjevekt (fyll for skravurer, tekststil for tekst);
- velg etter klasse med `QSELECT`: velg egenskapen {{ui:Klasse}}.

{{ui:Velg objektene}} velger alle objekter i den valgte klassen på det åpne arket (eller i modellen).

## Hvordan et objekt tegnes: objekt, klasse, layer

En objekts farge, linjetype, linjevekt, fyll og tekststil kan være **etter klasse**, på samme måte som de kan være etter layer. CadCraft ser i denne rekkefølgen:

1. Objektets egen verdi, med mindre den verdien er etter klasse.
2. Klassens verdi, når objektet tar den etter klasse og klassen har en.
3. Layerens verdi.

En klasse der farge (eller linjetype …) er {{ui:Ikke satt}}, sender objektet videre til layeren. Velg en klasse og sett dens {{ui:Farge}}, {{ui:Linjetype}}, {{ui:Linjevekt}}, {{ui:Fyll (skravurer)}} og {{ui:Tekststil}} under knappene. Kryss av for {{ui:Bruk ved opprettelse}} for at nye objekter som tegnes i klassen, tar alle disse etter klasse.

Hver endring i panelet er ett steg å angre.

## Gi nytt navn og slett

{{ui:Gi nytt navn}} redigerer navnet på stedet: trykk {{key:Enter}} for å beholde det, og {{key:Esc}} for å avslutte. Klassene under følger med (`Lighting-Spot` blir `Light-Spot` når `Lighting` blir `Light`), og det samme gjør objektene deres og overstyringene i visningsområder.

{{ui:Slett}} fjerner klassen og alle klasser under den. Objektene deres flyttes til **None**. Ett {{ui:Angre}} får alt tilbake. **None** kan ikke gis nytt navn eller slettes.

## Designlayere

Under {{ui:Designlayer}} kan hver layer ha en målestokk (`1:50`) og en høyde. En designlayer er en vanlig layer: modellrom og ark fungerer som før, og målestokken og høyden lagres sammen med tegningen for verktøyene som skal bruke dem.

## I DWG- og DXF-filer

Klasser lagres i alle DWG-versjoner CadCraft lagrer, og i DXF (R12 og 2000). Hvert objekts klasse er dets egne utvidede data (applikasjon `CADCRAFT_CLASS`), så AutoCAD og andre programmer beholder den sammen med objektet. Klasselisten, farger og synlighet lagres i én ubrukt blokk med navnet `CADCRAFT_CLASSES`. Hvis et annet program renser bort den blokken, finner CadCraft likevel hvert objekts klasse, og klassene kommer tilbake med standardinnstillinger.

Andre programmer kjenner ikke til klasser: de tegner hvert objekt med sine egne verdier eller layerens verdier.

Se også [Klasseoverstyringer i visningsområder](topic:viewport-overrides) og [Organiser en tegning med layere](topic:layers).
