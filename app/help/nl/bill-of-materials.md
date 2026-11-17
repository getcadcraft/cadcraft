---
title: Materiaallijsten per zone
summary: Markeer gebieden van een tekening als zones en plaats voor elk een tabel die de blokken erin telt. De tabellen volgen de tekening terwijl u werkt, en u kiest welke kolommen elke tabel toont.
keywords: materiaallijst, BOM, onderdelenlijst, staat, zone, gebied, tabel, tellen, attribuut, kolommen, artikelnummer, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Een **zone** is een benoemd gebied van de tekening. Een **materiaallijsttabel** somt op wat binnen één zone ligt, of in de hele tekening: elk blok met zijn hoeveelheid en zijn attribuutwaarden. Een tekening kan zoveel zones en tabellen hebben als u nodig hebt, en één zone kan meerdere tabellen hebben met verschillende kolommen.

De hulpmiddelen staan op het tabblad Blokken onder {{ui:Materiaallijst}}, in het menu Meer van de groep Blokken, en ze kunnen worden getypt.

## Een zone maken

Typ {{cmd:BOMZONE}} en kies één van deze:

- klik twee tegenoverliggende hoeken voor een rechthoek,
- kies {{ui:Veelhoek}}, klik elke hoek en druk op Enter om hem te sluiten, of
- kies {{ui:Object}} en kies een gesloten polylijn, cirkel, ellips of een gesloten spline. Zijn contour wordt gekopieerd; het object blijft zoals het is.

Typ dan de naam van de zone. De zone wordt getekend als een gestreepte contour met zijn naam boven de linkerbovenhoek, op de laag `BOM-ZONES`, die niet wordt geplot. Zet het plotten aan voor die laag als u zones op papier wilt.

Een zone is een gewone gesloten polylijn: verplaats, rek uit of sleep zijn grepen, en de naam volgt. Om een zone te hernoemen, bewerkt u de tekst van de naam, of gebruikt u {{cmd:BOMZONE}} en {{ui:Hernoemen}}. {{ui:Zones}} toont elke zone en hoeveel tabellen hij heeft.

## Een tabel plaatsen

Typ {{cmd:BOMTABLE}} (of {{cmd:BOM}}), kies de contour van de zone of zijn naam, geef de teksthoogte op en klik waar de linkerbovenhoek van de tabel moet komen. Druk op Enter in plaats van een zone te kiezen, of kies {{ui:Geheel}}, voor een tabel van de hele tekening.

Een nieuwe tabel toont het artikelnummer, de hoeveelheid, de blocknaam en een kolom voor elk attribuut dat de blokken dragen (de eerste zes; de andere worden aangeboden zonder vinkje). Blokken met dezelfde naam en dezelfde attribuutwaarden delen één rij.

## Wat als binnen telt

- Een blok telt in de zone die zijn **invoegpunt** bevat.
- Een lijn, boog, cirkel, polylijn, ellips, spline of arcering telt **geheel** in de zone die het midden van zijn omvang bevat (voor een lijn is dat zijn middelpunt). Zijn lengte wordt niet afgesneden bij de rand van de zone.
- Een punt precies op de rand is binnen.
- Zones mogen overlappen. Elke zone telt voor zichzelf, dus een object in de overlap staat in beide tabellen.

## Tabellen volgen de tekening

Wanneer u een blok toevoegt, verplaatst, kopieert of wist, een attribuut bewerkt, of een zone van vorm verandert of verplaatst, wordt elke tabel in dezelfde stap opnieuw getekend. Ongedaan maken neemt uw bewerking en de tabelwijziging samen terug.

Om een tabel te laten stoppen met volgen, vinkt u {{ui:Bevroren}} aan in de instellingen ervan. Een bevroren tabel verandert alleen wanneer u zijn instellingen bewerkt of {{cmd:BOMUPDATE}} typt, wat nu elke tabel bijwerkt.

## De kolommen kiezen

Selecteer een tabel en typ {{cmd:BOMEDIT}}. In het dialoogvenster:

- **Kolommen**: vink de kolommen aan die u wilt tonen (post, hoeveelheid, naam, laag, lengte, oppervlakte, opmerkingen en elk attribuut), typ uw eigen kop voor elk ervan, en verplaats ze omhoog of omlaag.
- {{ui:Rijen groeperen op}}: blocknaam en attribuutwaarden, alleen blocknaam, laag, of één attribuut. In een samengevoegde rij staat "varieert" bij een waarde die tussen blokken verschilt.
- {{ui:Sorteren op}} elke kolom, oplopend of aflopend.
- {{ui:Titel}}, {{ui:Titel tonen}} en {{ui:Totalenrij}}.
- {{ui:Lijnwerk per laag tellen}} voegt per laag één rij toe met het aantal objecten, hun totale lengte en, voor gesloten vormen, hun totale oppervlakte, in tekeningeenheden.
- **Opmerkingen**: vink de kolom Opmerkingen aan, typ dan een opmerking voor elke rij in het onderste deel van het dialoogvenster.

Elke tabel houdt zijn eigen keuzes.

## Artikelnummers

Een rij houdt zijn artikelnummer zolang hij in de tabel staat. Een nieuwe rij krijgt het volgende vrije nummer, en een uitgegeven nummer wordt niet opnieuw gebruikt, zodat ballonnen en notities die een nummer noemen kloppen. {{ui:Items hernummeren}} nummert ze vanaf 1 in de getoonde volgorde.

Een rij wordt herkend aan wat hij groepeert: wijzigt u hoe rijen worden gegroepeerd, of wijzigt u een attribuutwaarde die de groepering gebruikt, dan telt de rij als een nieuwe.

## Export en andere programma's

{{cmd:BOMEXPORT}}, of {{ui:CSV exporteren}} in het dialoogvenster, slaat een tabel op als .csv-bestand voor een spreadsheet.

In een DWG- of DXF-bestand is een tabel een gewoon blok van lijnen en tekst, zodat andere programma's hem tonen en plotten zoals getekend. Het is daar geen tabelobject, en het wordt niet bijgewerkt in andere programma's. De koppeling met zijn zone wordt in het bestand bewaard als uitbreidingsgegevens die CadCraft terugleest, zodat de tabel weer actief is wanneer u de tekening opnieuw opent in CadCraft. Een R12-DXF van een tekening zonder blad bewaart de instelling "niet geplot" van de laag van de zone niet.

Een tabel ontbinden maakt hem tot losse lijnen en tekst en beëindigt de koppeling.
