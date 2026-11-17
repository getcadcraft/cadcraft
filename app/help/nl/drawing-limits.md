---
title: Tekenlimieten instellen
summary: LIMITS legt een rechthoek voor de tekening vast: het raster vult die, ZOOM Alles toont die, en met de limieten aan worden punten erbuiten geweigerd. Ze worden opgeslagen in DWG- en DXF-bestanden.
keywords: limieten, tekenlimieten, LIMITS, LIMMIN, LIMMAX, LIMCHECK, raster, buiten de limieten, papierformaat, tekengebied, zoom alles, begrenzing
from: 9e97b30d
---

**Tekenlimieten** zijn een rechthoek die aangeeft hoe groot de tekening bedoeld is: het gebied waarin u wilt tekenen, zoals een blad van 420 × 297. Een nieuwe tekening heeft er geen, dus het raster en het tekengebied zijn onbegrensd, zoals voorheen.

## Ze instellen

Typ {{cmd:LIMITS}} en antwoord:

- `Geef de linkeronderhoek op of [ON/OFF] <0,0>`: een punt, of {{key:Enter}} om het huidige te behouden.
- `Geef de rechterbovenhoek op <420,297>`: een punt, of {{key:Enter}} om het huidige te behouden. Het moet boven en rechts van het eerste liggen.

Of typ `ON` of `OFF` bij de eerste vraag om de controle aan of uit te zetten zonder de rechthoek te wijzigen. Het instellen van de hoeken is één stap ongedaan maken, en dat geldt ook voor elke ON en OFF.

## Wat ze doen

- **Het raster vult de limieten** en stopt aan hun rand. Het is een beeld van het gebied, dus zet {{ui:Raster}} aan om het te zien.
- **ZOOM Alles** ({{cmd:ZOOM}}, daarna {{ui:Alles}}) toont de limieten en de tekening samen; {{ui:Alles tonen}} toont nog steeds alleen de tekening.
- **Met de limieten AAN** wordt een punt dat u typt of aanklikt buiten de limieten geweigerd met `**Buiten de limieten`, en de prompt blijft staan. Dit geldt voor de opdrachten die objecten maken: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, de maatvoeringopdrachten en een paar andere. Opdrachten die alleen verplaatsen, selecteren of meten, worden niet beperkt, en ook niet plakken, een grip slepen of een object dat een LISP-routine maakt: de limieten zijn een hulp bij het tekenen, geen muur. Met de limieten UIT wordt niets geweigerd.
- Objecten die al buiten de limieten liggen, blijven waar ze zijn.

## In bestanden en LISP

Ze worden in DWG en DXF opgeslagen als `$LIMMIN`, `$LIMMAX` en `$LIMCHECK`. Een bestand van een ander programma dat alleen de standaardlimieten van dat programma heeft (0,0 tot 12,9 of 420,297, controle uit), wordt zonder limieten geopend, zodat het raster niet in een klein kader wordt geperst; een bestand met eigen limieten, of met de controle aan, behoudt ze. In LISP lezen `(getvar "LIMMIN")`, `LIMMAX` en `LIMCHECK` ze, en schrijft `setvar` ze, als één stap ongedaan maken.

De limieten horen bij het model. Een blad (een indeling) heeft zijn eigen papierformaat.
