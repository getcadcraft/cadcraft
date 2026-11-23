---
title: Arcering en gevulde gebieden
summary: Vul een gebied met een volle kleur of een standaardpatroon door erbinnen te klikken of door gesloten vormen aan te wijzen, stel de schaal en hoek van het patroon in, en wijzig een arcering achteraf.
keywords: arcering, bhatch, vulling, volle vulling, patroon, ansi31, ansi37, baksteen, aarde, net, snijlijnen, poché, eiland, begrenzing, schaal, hoek
from: e7feb344
---

## Wat u gaat maken

Een wandsnede gevuld met het patroon ANSI31, een kolom erin die leeg blijft, en een volle vulling in de kolom.

## Arceren door binnen een gebied te klikken

1. Teken een rechthoek (`REC`, `0,0`, `@2000,1200`) en een cirkel erin (`C`, `1000,600`, `300`). Klik op {{ui:Alles tonen}}.
2. Klik op {{ui:Arcering}} in de groep {{ui:Tekenen}}, of typ `H` en druk op {{key:Enter}}. De geschiedenis zegt welk patroon actief is, bijvoorbeeld `Current hatch: ANSI31, scale 1, angle 0°`.
3. Typ `P` en druk op {{key:Enter}}, typ `ANSI31` en druk op {{key:Enter}}.
4. Typ `SC` en druk op {{key:Enter}}, typ `20` en druk op {{key:Enter}}. Patroongroottes staan op papier, dus een tekening die op 1:20 wordt geplot, wil schaal 20.
5. Klik bij `Pick internal point` binnen de rechthoek, buiten de cirkel. De arcering verschijnt als voorbeeld.
6. Druk op {{key:Enter}}. De rechthoek is gearceerd; de cirkel erin blijft leeg, omdat het een eiland is.

Klik binnen meerdere gebieden voordat u op {{key:Enter}} drukt, om ze tot één arcering te maken. `U` neemt het laatste gebied terug.

## Een volle vulling

1. Typ `H` en druk op {{key:Enter}}.
2. Typ `P`, druk op {{key:Enter}}, typ `SOLID` en druk op {{key:Enter}}.
3. Klik binnen de cirkel, en druk daarna op {{key:Enter}}.

## Gesloten vormen aanwijzen om te arceren

Typ in plaats van binnen te klikken, bij `Pick internal point` `S` (Objecten selecteren) en wijs gesloten polylijnen, cirkels of gesloten ellipsen aan, en druk dan op {{key:Enter}}. Vormen die binnen andere liggen, blijven om beurten leeg (de buitenste gearceerd, de volgende leeg, enzovoort).

## Patronen

Typ `?` bij de vraag naar het patroon voor de lijst. De standaardpatronen zijn ANSI31 tot en met ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS en EARTH, en SOLID. In een tekening in inches (of met voet en inch als lengteformaat) worden de inchgroottes van de patronen gebruikt, zoals in AutoCAD; anders de millimetergroottes.

{{ui:Hoek}} (`A`) draait het hele patroon: ANSI31 onder 90° loopt de andere kant op.

**Patroonbestanden.** Typ `F` (Patroonbestand) bij `Pick internal point` en kies een `.pat`-bestand. De patronen erin voegen zich bij de lijst; bij meer dan één wordt u gevraagd welke te gebruiken. Een bestand zonder patroon dat CadCraft kan lezen, zegt dat, en elk patroon dat werd overgeslagen, wordt geteld. Groottes in een `.pat`-bestand hebben geen eigen eenheid, dus ze worden in de eenheden van de tekening gelezen. Alleen bestanden in het gebruikelijke `.pat`-formaat zijn geprobeerd; er is geen bestand van een ander programma geprobeerd.

## Een arcering wijzigen

Selecteer hem (klik op een van zijn lijnen). In {{ui:Eigenschappen}}: {{ui:Patroon}}, {{ui:Patroonschaal}} en {{ui:Patroonhoek}}. Arceringen uit geopende tekeningen tonen hun patroon als het een van de standaardpatronen is; andere tonen als een lichte tint van hun kleur.

## Veelgemaakte fouten

- **"No closed boundary round that point."** Er is een gat in de omtrek, of een deel ervan staat buiten het scherm: CadCraft kijkt alleen naar wat op het scherm staat. Sluit het gat (zoom in op de hoeken), of zoom uit.
- **"The pattern is too dense to draw at this scale."** De lijnen zouden dichter op elkaar liggen dan de tekening kan tonen. Gebruik een grotere schaal: probeer de plotschaal (20 voor 1:20).
- **Het patroon lijkt enorm of minuscuul.** De schaal is in tekeneenheden per patroonseenheid; zie stap 4 hierboven.
- **De arcering volgt zijn omtrek niet meer.** Een arcering die met {{cmd:HATCH}} is gemaakt, blijft gekoppeld aan de objecten waaruit hij is gemaakt: verplaats, draai of schaal de omtrek en de arcering gaat mee; hervorm hem met een grip en de arcering wordt opnieuw berekend. De koppeling eindigt wanneer de omtrek niet meer sluit, wanneer u de arcering zelf met de hand herformt, of wanneer u hem bijsnijdt, en de opdrachtregel zegt dat. Er gaat niets verloren: arceer het gebied opnieuw om het opnieuw te koppelen.

## Een arcering die aan zijn begrenzing blijft hangen

Een arcering die u met `HATCH` maakt, onthoudt wat hem begrenst. Verplaats, draai of schaal de begrenzing, en de arcering en zijn patroon gaan mee. Sleep aan een grip om de begrenzing te herformen, en de arcering wordt opnieuw berekend. Verplaats de arcering apart, dan komt zijn begrenzing ook mee, als een gevulde vorm in een tekenprogramma.

De koppeling eindigt, en de opdrachtregel zegt dat, als de begrenzing niet meer sluit of u de arcering met de hand herformt. De arcering zelf blijft bestaan. Typ `AS` tijdens het arceren om zelfstandige arceringen te maken. Kopieer een arcering met haar begrenzing, dan heeft de kopie een eigen koppeling.

`HATCHEDIT` (`HE`) wijzigt het patroon, de schaal, de hoek en de oorsprong van een arcering, en koppelt hem aan een begrenzing of beëindigt de koppeling. De koppeling wordt bewaard in DWG- en DXF 2000-bestanden. Een DXF R12-bestand heeft geen arceringsobject, en koppelingen die in andere programma's zijn gemaakt, worden niet gelezen: gebruik daarvoor `HATCHEDIT` en Koppelen.

Een arcering die geen begrenzing meer heeft (de begrenzing is gewist, of het bestand kwam er zonder), kan er weer een krijgen: `HATCHGENERATEBOUNDARY` (`HGB`) tekent een gesloten polylijn rond elke lus van de arcering en koppelt de arcering eraan als u Ja antwoordt.

## Een verloopvulling

`GRADIENT` (`GD`) vult een gebied met een verloop in plaats van een patroon: dezelfde keuzes als `HATCH`, nadat het het type vraagt (lineair, cilindrisch, bolvormig, halfbolvormig, gebogen, en elk daarvan omgekeerd), één kleur met een tint of twee kleuren, de hoek, en of het gecentreerd is. In `HATCH` doet de optie `G` hetzelfde. `HATCHEDIT` `G`, of {{ui:Eigenschappen}} onder Verloop, wijzigt een verloop of maakt er een van elke arcering.

Een verloop wordt op het scherm en in plots getoond. Opgeslagen als DWG 2004 of later, krijgen andere programma's een echte verloop-arcering. DXF 2000 en DWG 2000 kennen geen verloop: daar bewaart CadCraft het voor zichzelf, en andere programma's zien een volle vulling in de eerste kleur.

## Een arcering bijsnijden

`TRIM` snijdt een arcering bij zoals elk ander object. Klik op de arcering aan de kant van de snijrand die u weg wilt hebben: de randen splitsen het gearceerde gebied en dat stuk wordt verwijderd. In de modus Snel is elk object een snijrand; kies eerst de randen (optie `T`) als er veel zijn. Een bijgesneden arcering is niet meer aan haar begrenzing gekoppeld, omdat ze die niet meer vult.
