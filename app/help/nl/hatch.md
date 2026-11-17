---
title: Arcering en vlakken vullen
summary: Vul een gebied met een effen kleur of een standaardpatroon door erin te klikken of door gesloten vormen te kiezen, stel de schaal en hoek van het patroon in en wijzig een arcering achteraf.
keywords: arcering, bhatch, vullen, massief vullen, patroon, ansi31, ansi37, baksteen, aarde, net, snijlijnen, poché, eiland, begrenzing, schaal, hoek
from: 14399174
---

## Wat u gaat maken

Een wanddoorsnede gevuld met het patroon ANSI31, een kolom erin die leeg blijft, en een massief vlak in de kolom.

## Arceren door binnen een gebied te klikken

1. Teken een rechthoek (`REC`, `0,0`, `@2000,1200`) en een cirkel erbinnen (`C`, `1000,600`, `300`). Klik op {{ui:Alles tonen}}.
2. Klik op {{ui:Arcering}} in de groep {{ui:Tekenen}}, of typ `H` en druk op {{key:Enter}}. De geschiedenis toont welk patroon actief is, bijvoorbeeld `Huidige arcering: ANSI31, schaal 1, hoek 0°`.
3. Typ `P` en druk op {{key:Enter}}, typ `ANSI31` en druk op {{key:Enter}}.
4. Typ `SC` en druk op {{key:Enter}}, typ `20` en druk op {{key:Enter}}. Patroongroottes gelden op papier, dus een tekening die op 1:20 wordt geplot, heeft schaal 20 nodig.
5. Klik bij `Geef een punt binnen de begrenzing op` binnen de rechthoek, buiten de cirkel. De arcering verschijnt als voorbeeld.
6. Druk op {{key:Enter}}. De rechthoek is gearceerd; de cirkel erin blijft leeg, omdat het een eiland is.

Klik binnen meerdere gebieden voordat u op {{key:Enter}} drukt om ze tot één arcering te maken. `U` maakt het laatste gebied ongedaan.

## Een massief vlak

1. Typ `H` en druk op {{key:Enter}}.
2. Typ `P`, druk op {{key:Enter}}, typ `SOLID` en druk op {{key:Enter}}.
3. Klik binnen de cirkel en druk daarna op {{key:Enter}}.

## Gesloten vormen kiezen om te arceren

In plaats van erin te klikken, typt u bij `Geef een punt binnen de begrenzing op` de optie Objecten selecteren (S) en kiest u gesloten polylijnen, cirkels of gesloten ellipsen. Druk daarna op {{key:Enter}}. Vormen die in andere vormen liggen, blijven om en om leeg (de buitenste wordt gearceerd, de volgende blijft leeg, enzovoort).

## Patronen

Typ `?` bij de patroonvraag voor de lijst. De standaardpatronen zijn ANSI31 tot en met ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS en EARTH, en SOLID. In een tekening in inches (of met voet en inch als lengteformaat) worden de inch-maten van de patronen gebruikt, zoals in AutoCAD; anders de millimetermaten.

{{ui:Hoek}} (`A`) draait het hele patroon: ANSI31 onder 90° loopt de andere kant op.

**Patroonbestanden.** Typ bij `Geef een punt binnen de begrenzing op` de optie Patroonbestand (F) en kies een `.pat`-bestand. De patronen erin worden aan de lijst toegevoegd; bij meer dan één patroon wordt u gevraagd welk u wilt gebruiken. Een bestand zonder patroon dat CadCraft kan lezen, wordt gemeld, en elk patroon dat is overgeslagen, wordt geteld. Maten in een `.pat`-bestand hebben geen eigen eenheid, dus ze worden gelezen in de eenheden van de tekening. Alleen bestanden in de gebruikelijke `.pat`-opmaak zijn getest; geen bestanden die door een ander programma zijn gemaakt.

## Een arcering wijzigen

Selecteer de arcering (klik op een van de lijnen). Onder {{ui:Eigenschappen}}: {{ui:Patroon}}, {{ui:Patroonschaal}} en {{ui:Patroonhoek}}. Arceringen uit geopende tekeningen tonen hun patroon als het een van de standaardpatronen is; andere worden getoond als een lichte tint van hun kleur.

## Veelgemaakte fouten

- **"Geen gesloten begrenzing rond dat punt."** Er zit een opening in de omtrek, of een deel ervan is buiten beeld: CadCraft kijkt alleen naar wat in beeld is. Sluit de opening (zoom in op de hoeken), of zoom uit.
- **"Het patroon is te dicht om op deze schaal te tekenen."** De lijnen zouden dichter bij elkaar liggen dan de tekening kan tonen. Gebruik een grotere schaal: probeer de plotschaal (20 voor 1:20).
- **Het patroon ziet er enorm of piepklein uit.** De schaal is in tekeneenheden per patroon-eenheid; zie stap 4 hierboven.
- **Het verplaatsen van de omtrek verplaatst de arcering niet.** Een arcering is niet aan zijn begrenzing vastgemaakt. Verplaats beide, of arceer opnieuw.

## Een arcering die aan zijn begrenzing blijft

Een arcering die u maakt met `HATCH`, onthoudt wat hem begrenst. Verplaats, draai of schaal de begrenzing, dan gaan de arcering en het patroon mee. Sleep een grip om de begrenzing van vorm te veranderen, dan wordt de arcering opnieuw berekend. Verplaatst u de arcering alleen, dan gaat de begrenzing mee, zoals bij een gevuld vlak in een tekenprogramma.

De koppeling eindigt, en de opdrachtregel meldt dat, als de begrenzing niet meer sluit of u de arcering met de hand van vorm verandert. De arcering zelf blijft bestaan. Typ `AS` tijdens het arceren om arceringen te maken die los staan. Kopieert u een arcering met zijn begrenzing, dan krijgt de kopie een eigen koppeling.

`HATCHEDIT` (`HE`) wijzigt het patroon, de schaal, de hoek en het oorsprongspunt van een arcering, en koppelt de arcering aan een begrenzing of beëindigt de koppeling. De koppeling wordt opgeslagen in DWG- en DXF 2000-bestanden. Een DXF R12-bestand heeft geen arceringsobject, en koppelingen die in andere programma's zijn gemaakt, worden niet gelezen: gebruik daarvoor `HATCHEDIT` en Koppelen.

Heeft een arcering geen begrenzing meer (de begrenzing is gewist, of het bestand kwam zonder begrenzing), dan kan CadCraft die terugmaken: `HATCHGENERATEBOUNDARY` (`HGB`) tekent een gesloten polylijn rond elke lus van de arcering en koppelt de arcering aan die lijnen als u Ja antwoordt.

## Een verloopvulling

`GRADIENT` (`GD`) vult een gebied met een verloop in plaats van een patroon: dezelfde keuzes als bij `HATCH`, daarna het type (lineair, cilindrisch, bolvormig, halfbolvormig, gebogen, en elk daarvan omgekeerd), één kleur met een tint of twee kleuren, de hoek, en gecentreerd of niet. Bij `HATCH` doet de optie `G` hetzelfde. `HATCHEDIT` `G`, of {{ui:Eigenschappen}} onder Verloop, wijzigt een verloop of maakt van elke arcering een verloop.

Een verloop is zichtbaar op het scherm en in plots. Opslaan als DWG 2004 of later, dan krijgen andere programma's een echte verloop-arcering. DXF 2000 en DWG 2000 kennen geen verloop: daar houdt CadCraft het voor zichzelf, en andere programma's zien een massief vlak in de eerste kleur.

## Een arcering bijsnijden

`TRIM` snijdt een arcering bij zoals elk ander object. Klik op de arcering aan de kant van de snijrand die u wilt verwijderen: de randen verdelen het gearceerde gebied, en dat stuk wordt verwijderd. In de snelle modus is elk object een snijrand; kies de randen eerst (optie `T`) als er veel zijn. Een bijgesneden arcering is niet meer aan zijn begrenzing gekoppeld, omdat ze die niet meer vult.
