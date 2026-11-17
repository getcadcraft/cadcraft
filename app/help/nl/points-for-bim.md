---
title: Punten voor BIM-programma's
summary: Exporteer punten, en de invoegpunten van blokken met een beschrijving, naar een CSV- of TXT-bestand dat BIM- en opmetingsprogramma's kunnen importeren.
keywords: exportpoints, punten exporteren, punten, csv, txt, pnezd, penzd, xyz, opmetingspunten, coördinaten, bim, uitzetten, puntbestand, northing, easting, hoogte
from: d80e2d53
---

## Wat u gaat maken

Een puntbestand: één regel per punt, met het puntnummer, northing, easting, hoogte en beschrijving, dat BIM-programma's (onder andere Revit en Archicad) en opmetingssoftware kunnen importeren om opmetingspunten, terreinmarkeringen of apparatuur te plaatsen.

## De punten exporteren

1. Selecteer de punten en de blokverwijzingen waarvan u de invoegpunten wilt, of selecteer niets om elk punt te nemen.
2. Typ {{cmd:EXPORTPOINTS}} (of `EXPPTS`, of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Punten exporteren}}) en druk op {{key:Enter}}
   (druk nogmaals op {{key:Enter}} bij `Selecteer punten en blokken` wanneer niets was geselecteerd).
3. Wanneer u blokken met attributen hebt gekozen, somt CadCraft hun tags op: typ de tag waarvan de waarde de beschrijving is (bijvoorbeeld `ITEM`), of iets anders om de naam van elk blok te gebruiken.
4. Kies de kolommen: `PNEZD` (punt, northing, easting, hoogte, beschrijving: de gebruikelijke), `PENZD` (easting vóór northing) of `XYZ` (alleen de coördinaten).
5. Kies de eenheden: `D` zoals getekend, of `M` meter of `F` ft (alleen wanneer de eenheden van de tekening zijn ingesteld: Eigenschappen › {{ui:Eenheden}} met niets geselecteerd).
6. Met een UCS ingesteld, kies `W` wereld of `U` UCS-coördinaten (zie [UCS en een gedraaide weergave](topic:ucs-and-turned-view)).
7. Kies `C` voor een door komma's gescheiden `.csv` of `T` voor een door tabs gescheiden `.txt`, en het eerste puntnummer.

Het bestand wordt gedownload als `<drawing>-points.csv` (of `.txt`), en de geschiedenis meldt hoeveel punten erin staan.

## Wat er in het bestand staat

- Eén punt per regel, afgesloten met een regeleinde (CR LF), drie decimalen.
- De hoogte van een punt is zijn Z (0 wanneer het er geen heeft). Het punt van een blok is zijn invoegpunt.
- Een beschrijving die een komma (of een tab in een TXT) of een aanhalingsteken bevat, staat tussen dubbele aanhalingstekens, met de aanhalingstekens verdubbeld.
- Het formaat is dat wat CivilCraft leest en schrijft, dus het bestand opent daar ook als punten.

## Veelgemaakte fouten

- Alleen `D` wordt voor de eenheden aangeboden: de tekening heeft geen eenheden ingesteld. Stel ze in, of reken om in het andere programma.
- De punten liggen ver van waar u ze verwacht in het andere programma: exporteer wereldcoördinaten (`W`), of het UCS dat het opmetingspunt van het andere programma gebruikt (`U`).
