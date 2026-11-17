---
title: Een plattegrond van maatvoeringen voorzien
summary: Voeg lineaire, uitgelijnde, hoek-, radius- en diametermaatvoeringen toe, ketenen ze met Doortrekken en Basismaatvoering, en overschrijf de tekst.
keywords: maatvoering, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, keten, reeks, annoteren, maatvoeringsgereedschap, waar, zoeken, werkbalk, meten, mm, cm, m, km, eenheden
from: 9ee65123
---

## Wat u gaat maken

Een van maten voorziene kamer: totale breedte en hoogte, een reeks maten langs één muur, een schuine muur, een gebogen hoek en een hoek.

Voordat u begint, leest u [Maatvoeringsgroottes instellen](topic:dimension-settings) als uw tekening groot is: maattekst is standaard 2.5 tekeneenheden hoog, wat klein is in een tekening gemeten in millimeters. Voor de stappen hieronder typt u eerst `DIMSCALE`, drukt u op {{key:Enter}}, typt u `50` en drukt u op {{key:Enter}}.

## Waar de maatvoeringsgereedschappen zijn

Met de menustijl van CadCraft (de stijl waarmee CadCraft start) staan de maatvoeringsgereedschappen in de werkbalk boven de tekening, in de groep {{ui:Annoteren}}: {{ui:Lineair}}, {{ui:Uitgelijnd}}, {{ui:Hoek}}, {{ui:Radius}} en {{ui:Diameter}}. Het menu {{ui:Meer}} van de groep heeft {{ui:Maatvoering doortrekken}} en {{ui:Basismaatvoering}}. Houd de aanwijzer boven een knop om te zien wat hij doet.

- Met de menustijl {{ui:Klassiek tekenen}} of {{ui:Lint}} opent u het tabblad {{ui:Annoteren}}: de gereedschappen staan in het paneel {{ui:Maatvoering}}. {{ui:Klassiek tekenen}} heeft ook {{ui:Lineair}} op het tabblad {{ui:Start}}, onder {{ui:Annotatie}}. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).
- Of typ de opdracht op de opdrachtregel onder de tekening en druk op {{key:Enter}}: `DLI` (lineair), `DAL` (uitgelijnd), `DAN` (hoek), `DRA` (radius), `DDI` (diameter), `DCO` (doortrekken), `DBA` (basis).
- Op een smal scherm staat de werkbalk op één rij: veeg hem opzij om bij {{ui:Annoteren}} te komen.

Om de lengten in millimeters, centimeters, meters of kilometers te tonen, zie [Maatvoeringen in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Teken iets om te voorzien van maten

1. Typ `PL` en druk op {{key:Enter}}.
2. Typ `0,0` en druk op {{key:Enter}}.
3. Typ `@6000,0` en druk op {{key:Enter}}.
4. Typ `@1500<60` en druk op {{key:Enter}}.
5. Typ `@0,2700` en druk op {{key:Enter}}.
6. Typ `@-6750,0` en druk op {{key:Enter}}.
7. Typ `C` en druk op {{key:Enter}}. De omtrek sluit zich.
8. Typ `C` en druk op {{key:Enter}} om een cirkel te beginnen.
9. Klik in de kamer, uit de buurt van de muren, voor het middelpunt.
10. Typ `600` en druk op {{key:Enter}}. Dit is een kolom.
11. Klik op {{ui:Alles tonen}}.

## Lineair: horizontaal of verticaal

1. Typ `DLI` en druk op {{key:Enter}}.
2. Bij `Geef de oorsprong van de eerste maathulplijn op`, snap naar de linkerbenedenhoek (Eindpunt) en klik.
3. Bij `Geef de oorsprong van de tweede maathulplijn op`, snap naar de rechterbenedenhoek en klik.
4. Beweeg het kruishaar onder de kamer. De maatvoering volgt, horizontaal.
5. Klik om de maatlijn te plaatsen.

De geschiedenis zegt `Maattekst = 6000`.

Waar u de lijn plaatst, bepaalt de richting: onder of boven geeft een horizontale maatvoering, links of rechts een verticale. Om het te forceren, typt u `H` (horizontaal), `V` (verticaal) of `R` (geroteerd, en dan een hoek) voordat u hem plaatst.

:::tip
Druk bij de eerste prompt op {{key:Enter}} in plaats van een punt te kiezen, en klik daarna op een lijn, boog, cirkel of polylijnsegment. CadCraft neemt beide uiteinden voor u over.
:::

## Doortrekken: een reeks maten

{{cmd:DIMCONTINUE}} ({{ui:Annoteren}} › {{ui:Meer}} › {{ui:Maatvoering doortrekken}}, of `DCO`) gaat verder vanaf de laatste lineaire of uitgelijnde maatvoering die u maakte, en elke nieuwe begint waar de vorige eindigde.

1. Typ `DLI` en druk op {{key:Enter}}.
2. Typ `0,0` en druk op {{key:Enter}} voor de eerste oorsprong.
3. Typ `2000,0` en druk op {{key:Enter}} voor de tweede oorsprong.
4. Klik onder de kamer om hem te plaatsen.
5. Typ `DCO` en druk op {{key:Enter}}.
6. Typ `4500,0` en druk op {{key:Enter}}. Een tweede maatvoering volgt op de eerste, op dezelfde lijn.
7. Snap naar de rechterbenedenhoek en klik. Een derde maakt de reeks compleet.
8. Druk op {{key:Enter}} om de opdracht te beëindigen.

:::note
Hier zijn de punten bewust als absolute coördinaten getypt. Een `@`-punt telt vanaf het laatste punt dat u gaf, en het laatste punt is waar u de vorige maatlijn plaatste, niet het einde van de maatvoering. Absolute punten, snaps of een losse afstand met {{ui:Ortho}} aan zijn veiliger in een reeks maten.
:::

Typ `U` en druk op {{key:Enter}} om de laatste maatvoering in de reeks ongedaan te maken zonder de opdracht te verlaten.

## Basismaatvoering: maten vanaf één lijn gestapeld

{{cmd:DIMBASELINE}} ({{ui:Annoteren}} › {{ui:Meer}} › {{ui:Basismaatvoering}}, of `DBA`) meet elke nieuwe maatvoering vanaf het eerste oorsprongspunt van de laatste, en stapelt elke een stap verder naar buiten.

1. Typ `DLI` en druk op {{key:Enter}}.
2. Snap naar de linkerbenedenhoek en klik.
3. Snap naar de linkerbovenhoek en klik.
4. Beweeg het kruishaar links van de kamer en klik. Een verticale maatvoering verschijnt.
5. Typ `DBA` en druk op {{key:Enter}}.
6. Snap naar het bovenste einde van de muur van 60 graden (Eindpunt) en klik. Een tweede verticale maatvoering verschijnt, een stap verder naar buiten dan de eerste.
7. Druk op {{key:Enter}} om te beëindigen.

## Uitgelijnd: echte lengte van een schuine lijn

1. Typ `DAL` en druk op {{key:Enter}}.
2. Druk op {{key:Enter}} om een object te selecteren.
3. Klik op de muur van 60 graden.
4. Beweeg naar buiten en klik om te plaatsen.

De tekst leest 1500: de echte lengte, gemeten langs de muur.

## Radius en diameter

1. Typ `DRA` en druk op {{key:Enter}}.
2. Klik op de cirkel van de kolom.
3. Beweeg het kruishaar. De leider wijst van het middelpunt naar het kruishaar.
4. Klik om de tekst te plaatsen.

De tekst leest `R600`. {{cmd:DIMDIAMETER}} (`DDI`) doet hetzelfde met een ⌀-teken en de diameter.

## Hoek

De muren hier vormen één polylijn, dus meet u de hoek via het hoekpunt. (Tussen twee afzonderlijke lijnen kunt u in plaats daarvan de lijnen aanklikken.)

1. Typ `DAN` en druk op {{key:Enter}}.
2. Bij `Selecteer boog, cirkel of lijn, of Enter voor een hoekpunt`, druk op {{key:Enter}}.
3. Bij `Geef het hoekpunt van de hoek op`, snap naar de rechterbenedenhoek en klik.
4. Bij `Geef het eerste eindpunt van de hoek op`, snap naar de linkerbenedenhoek en klik.
5. Bij `Geef het tweede eindpunt van de hoek op`, snap naar het bovenste einde van de muur van 60 graden en klik.
6. Beweeg het kruishaar binnen de kamer, dicht bij de hoek, en klik.

De tekst leest `120°`, de binnenhoek van de hoek. Geplaatst aan de andere kant van de hoek, meet de maatvoering in plaats daarvan de hoek aan die kant. Klik bij de eerste prompt op een boog om de hoek te meten die hij overspant, of klik twee lijnen aan om de hoek tussen hen te meten.

## De tekst wijzigen

Om uw eigen tekst te schrijven, typt u `T` en drukt u op {{key:Enter}} voordat u de maatvoering plaatst, en typt u daarna de tekst. In uw tekst staat `<>` voor de gemeten waarde: `<> TYP.` geeft `6000 TYP.`. Druk op {{key:Enter}} op een lege regel om de gemeten waarde te houden.

Om een bestaande maatvoering te wijzigen:

1. Klik erop.
2. Typ in het rechterpaneel in {{ui:Tekst}}. Laat het leeg voor de gemeten waarde.
3. Druk op {{key:Enter}}.

## Maatvoeringen volgen de geometrie

Een maatvoering onthoudt zijn punten. Sleep een van zijn grepen, of verplaats, roteer of schaal hem samen met de objecten die hij meet, en hij meet opnieuw. Als u de geometrie uitrekt zonder de maatvoering te verplaatsen, volgt de maatvoering niet: hij houdt zijn eigen punten.

## Veelgemaakte fouten

- **De tekst en pijlen zijn microscopisch klein of enorm.** Stel de algemene schaal in: zie [Maatvoeringsgroottes instellen](topic:dimension-settings).
- **"Kies een punt binnen de hoek die u wilt meten."** Het punt dat u voor een hoekmaatvoering aanklikte, ligt op een van de benen. Verplaats het naar binnen de hoek.
- **Doortrekken begon bij de verkeerde maatvoering.** Het gaat altijd verder vanaf de laatste lineaire of uitgelijnde maatvoering die in deze sessie is gemaakt. Maak (of maak opnieuw) eerst degene waarvandaan u wilt doorgaan.
- **De maatvoering kwam verticaal uit.** U plaatste hem aan de zijkant. Typ `H` voordat u hem plaatst.
- **Voet en duim.** Stel eerst het lengteformaat van de tekening in op {{ui:Architectonisch}}, of het {{ui:Formaat}} van een maatvoering in {{ui:Eigenschappen}}: zie [Voet en duim in maatvoeringen](topic:dimension-settings#feet-and-inches-in-dimensions).
- **De getallen staan niet in de eenheid die u wilt.** Kies {{ui:Eenheden in de tekst}}: zie [Maatvoeringen in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
