---
title: Offset, bijsnijden, verlengen, afronden en afschuinen van wanden
summary: Maak van enkele lijnen dubbele wanden met Offset, maak de hoeken schoon met Afronden, en snijd en verleng lijnen met Bijsnijden en Verlengen.
keywords: offset, bijsnijden, verlengen, afronden, afschuinen, breken, breakatpoint, lengte wijzigen, wanden, hoek, snijden, evenwijdig, straal, opschonen
from: c6c5cbd0
---

## Wat u gaat maken

Een kleine kamer met wanden van 200 dik: de binnenzijde wordt getekend, de buitenzijde wordt verschoven, de hoeken worden opgeschoond, en er wordt een doorgang door één wand gesneden.

## De binnenzijde tekenen

1. Typ `L` en druk op {{key:Enter}}.
2. Typ `0,0` en druk op {{key:Enter}}.
3. Typ `@5000,0` en druk op {{key:Enter}}.
4. Typ `@0,4000` en druk op {{key:Enter}}.
5. Typ `@-5000,0` en druk op {{key:Enter}}.
6. Typ `C` en druk op {{key:Enter}}.
7. Klik op {{ui:Alles tonen}}.

U heeft vier losse lijnen. (Een gesloten polylijn zou in één keer kunnen worden verschoven; losse lijnen laten zien hoe Afronden hoeken opschoont.)

## De buitenzijde verschuiven

1. Typ `O` en druk op {{key:Enter}}. De prompt luidt `Specify offset distance [Through] <Through>:`.
2. Typ `200` en druk op {{key:Enter}}.
3. Klik bij `Select object to offset` op de onderste lijn.
4. Klik bij `Specify point on side to offset` ergens eronder. Een evenwijdige lijn verschijnt 200 onder de lijn.
5. Klik op de rechterlijn, klik daarna rechts ervan.
6. Klik op de bovenlijn, klik daarna erboven.
7. Klik op de linkerlijn, klik daarna links ervan.
8. Druk op {{key:Enter}} om het commando te beëindigen.

U ziet vier buitenlijnen, elk even lang als zijn binnenlijn, zodat de buitenhoeken niet samenkomen.

:::tip
Druk bij de afstandsprompt op {{key:Enter}} om de laatste afstand opnieuw te gebruiken. Typ `T` voor Doorheen: dan gaat elke kopie door het punt dat u aanklikt, op welke afstand dat ook is.
:::

{{cmd:OFFSET}} werkt op lijnen, bogen, cirkels en polylijnen. Een gesloten polylijn verschuiven verschuift de hele contour, inclusief hoeken.

## De buitenhoeken opschonen met Afronden

{{cmd:FILLET}} verbindt twee lijnen in een hoek: het snijdt of verlengt beide zodat ze elkaar raken. Met een straal van 0 is de hoek recht.

1. Typ `F` en druk op {{key:Enter}}. De prompt luidt `Select first line [Radius]:`.
2. Als de laatste afronding die u deed een straal gebruikte, typ `R`, druk op {{key:Enter}}, typ `0` en druk op {{key:Enter}}.
3. Klik op de buitenste onderlijn dichtbij het rechteruiteinde.
4. Klik bij `Select second line` op de buitenste rechterlijn dichtbij het onderuiteinde.

De twee lijnen komen nu samen in een scherpe hoek, en het commando eindigt.

5. Druk op {{key:Enter}} om {{cmd:FILLET}} te herhalen, en doe de volgende hoek.
6. Herhaal tot alle vier buitenhoeken samenkomen.

Klik elke lijn op het deel dat u wilt **behouden**. Met een straal boven 0 voegt Afronden in plaats daarvan een boog tussen de lijnen toe.

:::tip
Typ `M` bij de eerste prompt om alle vier hoeken in één keer te doen, of teken de buitenzijde als één gesloten polylijn en typ `P`: elke hoek wordt tegelijk gedaan. Houd {{key:Shift}} ingedrukt terwijl u de tweede lijn aanklikt voor een scherpe hoek zonder de straal te wijzigen.
:::

## Een hoek afschuinen met Afschuinen

{{cmd:CHAMFER}} snijdt een hoek af met een rechte lijn.

1. Typ `CHA` en druk op {{key:Enter}}.
2. Typ `D` en druk op {{key:Enter}}. Typ `300` en druk op {{key:Enter}} voor de eerste afstand, druk daarna op {{key:Enter}} om ook voor de tweede 300 te gebruiken.
3. Klik op de binnenste bovenlijn dichtbij het linkeruiteinde, daarna op de binnenste linkerlijn dichtbij het bovenuiteinde.

De hoek wordt 300 langs elke lijn afgesneden, en een afschuiningslijn verbindt ze. Typ `A` in plaats van `D` om een lengte op de eerste lijn en een hoek op te geven.

## Een doorgang snijden met Bijsnijden

Teken eerst de twee deurstijlen over de onderste wand, en snijd daarna de wandlijnen ertussen bij.

1. Typ `L` en druk op {{key:Enter}}.
2. Typ `1000,200` en druk op {{key:Enter}}.
3. Typ `@0,-600` en druk op {{key:Enter}}, en druk daarna nogmaals op {{key:Enter}}.
4. Druk op {{key:Enter}} om {{cmd:LINE}} te herhalen.
5. Typ `1900,200` en druk op {{key:Enter}}.
6. Typ `@0,-600` en druk op {{key:Enter}}, en druk daarna nogmaals op {{key:Enter}}.

U heeft nu twee korte lijnen die de onderste wand kruisen, 900 uit elkaar.

7. Typ `TR` en druk op {{key:Enter}}. De geschiedenis zegt `Current settings: Quick mode, edges: No extend`.
8. Klik op de binnenste onderlijn tussen de twee stijlen. Dat stuk verdwijnt. (Laat de aanwijzer er eerst op rusten: het stuk dat gaat, wordt grijs en gestippeld.)
9. Klik op de buitenste onderlijn tussen de twee stijlen. Dat stuk verdwijnt ook.
10. Klik op het deel van elke stijl dat boven de wand uitsteekt, en het deel eronder.
11. Druk op {{key:Enter}} om het commando te beëindigen.

U ziet een opening van 900 in de onderste wand, met de stijlen die de wanduiteinden afsluiten.

In de snelle modus (de standaard) vraagt Bijsnijden niet eerst om snijkanten te kiezen: elk zichtbaar object is een snijkant. Kies het stuk dat weg moet, of sleep een pad door meerdere stukken om ze allemaal tegelijk bij te snijden. Typ `U` en druk op {{key:Enter}} om de laatste keuze of sleep ongedaan te maken zonder het commando te verlaten. Hekje, kruisvenster, gekozen snijkanten en {{key:Shift}} om te verlengen staan in [Bijsnijden en verlengen](topic:trim-and-extend).

## Een lijn verlengen tot aan een andere

{{cmd:EXTEND}} verlengt een lijn, boog of polylijnuiteinde totdat het het volgende object in die richting raakt.

1. Typ `L` en druk op {{key:Enter}}.
2. Typ `1000,2000` en druk op {{key:Enter}}.
3. Typ `@2000,0` en druk op {{key:Enter}}, en druk daarna nogmaals op {{key:Enter}}. De lijn stopt 2000 voor de rechtermuur.
4. Typ `EX` en druk op {{key:Enter}}.
5. Klik op de nieuwe lijn dichtbij het rechteruiteinde.
6. Druk op {{key:Enter}} om het commando te beëindigen.

De lijn loopt nu tot het binnenvlak van de rechterwand. Elk zichtbaar object is een grens; kies dichtbij het uiteinde dat moet groeien. In {{cmd:TRIM}} doet {{key:Shift}}+klikken hetzelfde.

## Breken en lengte wijzigen

{{cmd:BREAK}} (`BR`, of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Breken}}) snijdt een gat zonder snijkant: klik op het object waar het gat begint (die klik is het eerste punt), klik daarna waar het eindigt. Bij een cirkel verdwijnt het deel tegen de klok in van het eerste naar het tweede punt. `F` bij de tweede vraag laat u het eerste punt opnieuw geven, en {{cmd:BREAKATPOINT}} splitst een object in twee op één punt, zonder gat.

{{cmd:LENGTHEN}} (`LEN`) wijzigt een lengte aan één uiteinde:

1. Typ `LEN` en druk op {{key:Enter}}. Klik op een lijn om de huidige lengte te zien; de prompt vraagt opnieuw.
2. Kies de manier: `DE` (Delta: een bedrag om toe te voegen, negatief om af te trekken; `A` voor de hoek van een boog), `P` (Procent: 50 halveert hem), `T` (Totaal: de lengte die hij moet hebben) of `DY` (Dynamisch: sleep het uiteinde).
3. Klik elk object aan dichtbij het uiteinde dat moet bewegen. `U` neemt de laatste terug; {{key:Enter}} beëindigt.

Lijnen, bogen en open polylijnen (hun eindsegment) kunnen worden verlengd.

## Veelgemaakte fouten

- **Een hele lijn verdween.** Niets kruiste die, dus de snelle modus wiste hem. Typ `U` om hem terug te zetten; controleer of de snijlijn hem werkelijk kruist (zoom in) en niet op een uitgeschakelde laag staat.
- **"Geen grens in die richting."** Verlengen vond geen grens om tegen aan te lopen. Kies dichter bij het uiteinde dat moet groeien.
- **"Straal is te groot."** De boog zou voorbij het uiteinde van een van de lijnen lopen. Gebruik een kleinere straal.
- **"Alleen het eerste of laatste segment van een open polylijn kan worden ingekort."** Kies twee segmenten van de polylijn die naast elkaar liggen, of typ `P` om elke hoek ervan af te ronden.
- **De verschuiving ging naar de verkeerde kant.** De kant is waar u klikt nadat u het object heeft gekozen. Maak ongedaan met {{key:Mod+Z}} en klik aan de andere kant.
- **"Kan niet zo ver verschuiven."** De verschuiving zou de boog, cirkel of polylijn binnenstebuiten keren. Gebruik een kleinere afstand.
