---
title: Kaartlagen onder de tekening
summary: Toon straatkaarten, luchtfoto's of een afbeelding met een wereldbestand onder de modelruimte, geplaatst volgens het coördinatenstelsel van de tekening.
keywords: kaart, kaartlagen, maplayers, ml, geomap, achtergrondkaart, luchtfoto, satelliet, tegels, xyz, wms, wmts, kaartservice, wereldbestand, coördinatenstelsel, epsg, state plane, utm, georeferentie, situatietekening, geolocatie, geografische locatie, geodata, opgeslagen, dwg, dxf
from: f103045f
---

## Wat u gaat maken

Een situatietekening getekend over een luchtfoto of een straatkaart, elk op de juiste plek.

## CadCraft vertellen waar de tekening ligt

1. Stel de eenheden van de tekening in via {{ui:Eigenschappen}} › {{ui:Eenheden}} (bijvoorbeeld feet of meters).
2. Typ {{cmd:MAPLAYERS}} (of `ML`) en druk op {{key:Enter}}.
3. Typ onder {{ui:Waar de tekening staat}} een naam of een EPSG-code in {{ui:Zoek een stelsel}} (bijvoorbeeld `2277` of `Texas Central`) en kies het bij {{ui:Stelsel}}.
4. Als de tekening in de eigen coördinaten van dat stelsel is getekend, laat u de plaatsing op 0 staan. Zo niet, geef dan één punt van de tekening ({{ui:X van tekening}}, {{ui:Y van tekening}}), waar dat punt op het kaartraster ligt ({{ui:Easting}}, {{ui:Northing}}), en hoeveel de tekening ten opzichte van het oosten is gedraaid ({{ui:Gedraaid (°)}}).
5. Klik op {{ui:Dit stelsel gebruiken}}.

## Een laag toevoegen

1. Schakel bovenaan het dialoogvenster {{ui:Kaartlagen van internet}} in. Tot die tijd wordt er niets aan een server gevraagd; wanneer die aan staat, zien de servers die u toevoegt het gebied op het scherm en uw internetadres, nooit uw tekening.
2. Kies bij {{ui:Een laag toevoegen}} waar hij vandaan komt:
   - **Tegels (XYZ)**: een tegeladres met `{z}`, `{x}` en `{y}`, een naam en de bronvermelding die de aanbieder vraagt.
   - **WMS**, **WMTS** of **ArcGIS**: het adres van de service, daarna {{ui:Lagen ophalen}} en kies er een.
   - **Een afbeelding**: een PNG of JPEG met het wereldbestand (en het `.prj`-bestand als er een is).
3. De laag wordt onder de tekening getoond. De bronvermelding staat rechtsonder in de tekening.

Elke laag in de lijst kan worden verborgen, doorzichtiger of minder doorzichtig worden gemaakt, omhoog of omlaag worden verplaatst, of worden verwijderd.

Elke wijziging aan het stelsel of de lagen is één stap van {{cmd:UNDO}}.

## Opgeslagen met de tekening

Het coördinatenstelsel en de lijst met lagen worden in de tekening opgeslagen wanneer u hem als DWG of DXF opslaat, en komen terug wanneer u hem weer opent, op elke computer. Afbeeldingen uit bestanden worden niet opgeslagen: voeg ze na het openen opnieuw toe. De schakelaar {{ui:Kaartlagen van internet}} wordt niet in de tekening opgeslagen: die hoort bij deze browser, dus een tekening die iemand u stuurt, vraagt aan geen enkele server iets totdat u hem zelf inschakelt.

Wat andere programma's zien:

| Opgeslagen als | De locatie van de tekening | De kaartlagen |
|---|---|---|
| DWG 2010, 2013 of 2018, DXF 2000 | Geschreven op de standaardmanier waarop programma's de geografische locatie van een tekening lezen: de EPSG-code van het stelsel, één punt van de tekening en waar het op het kaartraster ligt, de eenheden en het noorden. | Alleen CadCraft |
| DWG 2000, 2004 of 2007, DXF R12 | Alleen CadCraft (CadCraft meldt dat bij het opslaan) | Alleen CadCraft |

- **Gecontroleerd:** de ODA File Converter leest de locatie zonder fouten, en een DXF-bibliotheek (ezdxf) leest de EPSG-code en de plaatsing precies.
- **Nog niet gecontroleerd:** of andere tekenprogramma's het stelsel herkennen aan de EPSG-code. Een programma dat een eigen lijst van stelsels onder andere namen bijhoudt, kan de tekening zonder locatie tonen.
- Andere programma's tonen een blok met de naam `CADCRAFT_GEO` in de bloklijst. Het is de eigen kopie van CadCraft van het stelsel en de lagen; het wordt nooit in de tekening geplaatst. Laat het daar staan.

## Tekeningen uit andere programma's

Wanneer een tekening uit een ander programma een geografische locatie heeft, leest CadCraft die:

- Als er een EPSG-code in staat, toont {{ui:Waar de tekening staat}} dat stelsel en worden de kaartlagen daarop geplaatst.
- Als CadCraft het stelsel niet kent (de eigen naam van een ander programma ervoor, een lokaal raster of een schaalfactor), wordt de locatie niet gebruikt, maar wordt ze bewaard en ongewijzigd teruggeschreven, zodat het andere programma haar nog steeds vindt. Kies een stelsel bij {{ui:Waar de tekening staat}} om dat te vervangen.

:::note
Kaartlagen worden alleen op het scherm getekend: ze worden niet geplot. Gebruik alleen kaartdiensten waarvan de voorwaarden dat toestaan, en houd hun bronvermelding zichtbaar.
:::
