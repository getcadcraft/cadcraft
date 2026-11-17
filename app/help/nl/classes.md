---
title: Een tekening ordenen met klassen
summary: Klassen ordenen objecten op een tweede manier, over lagen heen (`Lighting-Fixtures-Spot`): toon en verberg ze, geef ze een kleur, lijntype, lijndikte, vulling en tekststijl die objecten "volgens klasse" kunnen overnemen, en stel de klasse in waarin nieuwe objecten komen.
keywords: klasse, klassen, CLASSES, CLS, CLASS, volgens klasse, ByClass, actieve klasse, gebruiken bij maken, Geen, ontwerplaag, laagschaal, hoogte, Vectorworks
from: 672de9cb
---

Lagen geven aan *waar* een object in de tekening hoort; klassen geven aan *wat* het is. Een wand op laag `Level 1` kan in klasse `Walls-Exterior` zitten, een spotlamp op laag `Ceiling` in klasse `Lighting-Fixtures-Spot`. U kunt in één keer elke lamp op elke laag verbergen, of elke buitenwand zwaarder laten plotten, zonder iets naar een andere laag te verplaatsen.

Elk object begint in klasse **Geen**. Een tekening zonder eigen klassen werkt precies zoals voorheen.

## Het paneel Klassen openen

Typ `CLASSES` (of `CLS`) en druk op {{key:Enter}}, of kies {{ui:Klassen…}} in het menu {{ui:Meer}} van de groep {{ui:Weergave}}. Het paneel opent over de tekening en blijft open terwijl u tekent.

- **Een klasse toevoegen:** typ de naam in het vak bovenaan en druk op {{key:Enter}}. Een `-` maakt een niveau: `Lighting-Fixtures-Spot` staat onder `Lighting-Fixtures`, dat onder `Lighting` staat; de ontbrekende niveaus worden voor u toegevoegd.
- **Tonen of verbergen:** het oog naast een klasse. Een klasse verbergen verbergt alle klassen eronder, op het scherm en op papier.
- **Actieve klasse:** de ronde knop. Nieuwe objecten die u tekent, gaan in de actieve klasse.
- **Een klasse kiezen:** klik op de naam. De knoppen en instellingen eronder werken dan erop.

Het getal aan het eind van elke rij is het aantal objecten in die klasse (in het model, op de bladen en in blokdefinities).

## Objecten in een klasse plaatsen

Selecteer de objecten, kies een klasse in het paneel en kies {{ui:Klasse instellen}}. Vink eerst {{ui:Volgens klasse}} aan zodat ze hun kleur, lijntype, lijndikte, vulling en tekststijl uit de klasse halen. U kunt ook:

- typ `CLASS` met objecten geselecteerd en voer een klassenaam in (een nieuwe naam maakt de klasse);
- typ `CLASS` met niets geselecteerd om de actieve klasse in te stellen; `?` geeft de klassen met hun aantallen;
- gebruik het gedeelte {{ui:Class}} van het paneel Eigenschappen: de klasse, en een schakelaar {{ui:… volgens klasse}} voor kleur, lijntype en lijndikte (vulling voor arceringen, tekststijl voor tekst);
- selecteer op klasse met `QSELECT`: kies de eigenschap {{ui:Class}}.

{{ui:De objecten ervan selecteren}} selecteert elk object van de gekozen klasse op het open blad (of in het model).

## Hoe een object wordt getekend: object, klasse, laag

De kleur, het lijntype, de lijndikte, vulling en tekststijl van een object kunnen **volgens klasse** zijn, net zoals ze volgens laag kunnen zijn. CadCraft kijkt in deze volgorde:

1. De eigen waarde van het object, tenzij die waarde volgens klasse is.
2. De waarde van de klasse, wanneer het object die volgens klasse neemt en de klasse er één heeft.
3. De waarde van de laag.

Een klasse waarvan de kleur (of het lijntype …) {{ui:Niet ingesteld}} is, geeft het object door aan zijn laag. Kies een klasse en stel daaronder, onder de knoppen, de {{ui:Kleur}}, {{ui:Lijntype}}, {{ui:Lijndikte}}, {{ui:Vulling (arceringen)}} en {{ui:Tekststijl}} in. Vink {{ui:Gebruiken bij maken}} aan om nieuwe objecten die in die klasse worden getekend al hun eigenschappen volgens klasse te laten nemen.

Elke wijziging in het paneel is één stap voor {{ui:Ongedaan maken}}.

## Hernoemen en verwijderen

{{ui:Hernoemen}} bewerkt de naam ter plekke: druk op {{key:Enter}} om te bewaren, op {{key:Esc}} om te verlaten. De klassen eronder volgen (`Lighting-Spot` wordt `Light-Spot` wanneer `Lighting` `Light` wordt), en zo ook hun objecten en eventuele viewport-overschrijvingen.

{{ui:Verwijderen}} verwijdert de klasse en alle klassen eronder. Hun objecten gaan naar **Geen**. Eén keer {{ui:Ongedaan maken}} zet alles terug. **Geen** kan niet worden hernoemd of verwijderd.

## Ontwerplagen

Onder {{ui:Ontwerplagen}} kan elke laag een schaal (`1:50`) en een hoogte hebben. Een ontwerplaag is een gewone laag: modelruimte en bladen werken zoals voorheen, en de schaal en hoogte worden met de tekening bewaard voor de hulpmiddelen die ze gaan gebruiken.

## In DWG- en DXF-bestanden

Klassen worden bewaard in elke DWG-versie die CadCraft opslaat en in DXF (R12 en 2000). De klasse van elk object is zijn eigen uitgebreide gegevens (toepassing `CADCRAFT_CLASS`), zodat AutoCAD en andere programma's die bij het object bewaren. De lijst van klassen, kleuren en zichtbaarheid wordt bewaard in één ongebruikt blok met de naam `CADCRAFT_CLASSES`; als een ander programma dat blok opschoont, vindt CadCraft nog steeds de klasse van elk object, en de klassen komen terug met standaardinstellingen.

Andere programma's kennen geen klassen: ze tekenen elk object met zijn eigen waarden of die van zijn laag.

Zie ook [Klasse-overschrijvingen per viewport](topic:viewport-overrides) en [Een tekening ordenen met lagen](topic:layers).
