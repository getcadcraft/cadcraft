---
title: Rasterafbeeldingen in een tekening
summary: Plaats een PNG- of JPEG-afbeelding, knip die bij tot een rechthoek of een veelhoek, toon de afbeeldingen die een DWG gebruikt, en plot ze scherp.
keywords: pastearea, parea, gebied kopiëren, gekopieerd gebied, markupcraft, ware grootte, werkelijke grootte, overlay, ole, ole2frame, ingesloten object, afbeelding plakken, schermafbeelding plakken, ctrl+v, klembordafbeelding, schermafbeelding, afbeelding, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plotten, pdf, resolutie
from: 4025ac97
---

## Wat u gaat maken

Een bedrijfslogo in een titelblok, bijgeknipt tot het deel dat u wilt, en een PDF waarin het met zijn eigen resolutie wordt afgedrukt.

## Een afbeelding plaatsen

1. Typ {{cmd:IMAGEATTACH}} (of `IAT`) en druk op {{key:Enter}}. Kies een PNG- of JPEG-bestand.
2. `Specify the lower-left corner`: klik, of typ een punt.
3. `Specify its width`: de breedte in tekeneenheden. {{key:Enter}} houdt de aangeboden breedte aan: één eenheid per pixel, of de breedte die u de vorige keer voor dit bestand gaf (de prompt zegt welke).
4. `Specify its rotation angle`: {{key:Enter}} voor geen rotatie.

De afbeelding is één object: selecteer hem via zijn kader, en verplaats, kopieer, roteer, schaal of wis hem zoals elk ander blok.

:::note
Het afbeeldingsbestand blijft bij de tekening zolang die open is. Een opgeslagen DWG noemt het bestand, zoals andere programma's doen; hij bevat de pixels niet. Bewaar de afbeelding naast de tekening.
:::

## Een schermafbeelding of gekopieerde afbeelding plakken

1. Kopieer de afbeelding (een schermafbeelding met {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=uw schermafdrukprogramma}}, of Afbeelding kopiëren in een ander programma of in een browser).
2. Wijs waar hij op de tekening moet komen en druk op {{key:Mod+V}}.

De linker onderhoek van de afbeelding komt op de aanwijzer (of het midden van het beeld), 40 % zo breed als wat u ziet; verplaats, schaal en knip hem bij zoals elke andere afbeelding. De naam is die van de tekening met `-picture-1.png` (daarna `-2`, …), en de geschiedenis zegt dat. {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Een afbeelding plakken}} doet hetzelfde vanuit het menu (de browser vraagt misschien eerst).

Een DWG houdt alleen de naam van het bestand van een afbeelding bij, dus wanneer u de tekening opslaat, wordt de afbeelding ook als eigen bestand opgeslagen. Houd de twee in dezelfde map: de tekening toont de afbeelding van daar. In de browser is dat een tweede download, en de geschiedenis zegt dat.

Als er alleen CadCraft-objecten op het klembord staan, plakt {{key:Mod+V}} die, zoals voorheen.

## Een gebied geplakt uit MarkupCraft

{{ui:Gebied kopiëren}} in MarkupCraft kopieert een deel van een blad als een afbeelding die weet hoe groot die is. CadCraft plakt het op die grootte.

1. Kopieer in MarkupCraft het gebied (een rechthoek, een cirkel of een vrije vorm; {{ui:Kopiëren als overlay}} als u uw tekening erdoorheen wilt zien).
2. Druk in CadCraft op {{key:Mod+V}}, of typ {{cmd:PASTEAREA}} (of `PAREA`), of kies {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Gekopieerd gebied plakken}}.
3. `Specify the lower-left corner of the copied area`: klik, of typ een punt. Een kader van de grootte van het gebied volgt de aanwijzer.

Zo groot wordt het:

- **Het blad had een tekenschaal:** op de werkelijke grootte, in de tekeneenheden (een detail van 1:50 van een trap van 2 m is 2 m lang in een tekening in meter, 78.74 in in een tekening in inch). Er wordt verder niets gevraagd.
- **Het blad had geen schaal:** CadCraft zegt zijn grootte op papier en vraagt om een schaal: typ `100` voor schaal 1:100, druk op {{key:Enter}} voor de papiergrootte, of typ `P`, klik op twee punten op de geplakte afbeelding en typ hoe ver ze werkelijk uit elkaar liggen (zoals {{cmd:SCANSCALE}} doet). De linker onderhoek blijft waar u hem plaatste.

Een tekening zonder eenheden krijgt millimeters, zoals een PDF-onderlegger. Een overlay houdt zijn papier doorzichtig en begint zo vervaagd als hij gekopieerd werd; buiten een cirkel of een vrije vorm is hij ook doorzichtig. Het geplakte gebied is een afbeelding zoals elke andere: verplaats, roteer, schaal, knip bij of wis hem, en het hele plakken is één stap ongedaan te maken. Opgeslagen als DWG is het een IMAGE met zijn vervaging en transparantie.

{{key:Mod+V}} plakt het gebied wanneer de afbeelding op het klembord bij het gebied hoort, of wanneer het gebied is gekopieerd na alles wat u in CadCraft kopieerde (en in de laatste 6 uur). Anders plakt het zoals voorheen. {{cmd:PASTEAREA}} plakt het laatst gekopieerde gebied op elk moment.

## De afbeeldingen tonen die een DWG gebruikt

Een DWG slaat alleen op waar zijn afbeeldingen stonden, dus CadCraft toont elk als een kader met zijn bestandsnaam.

1. Typ {{cmd:IMAGE}} (of `IM`). De opdrachtregel somt elk afbeeldingsbestand op en of het getoond wordt.
2. Kies de bestanden (meerdere tegelijk). Een bestand waarvan de naam de naam bevat die de tekening noemt, telt ook mee, omdat exports vaak een projectvoorvoegsel toevoegen.

## Een afbeelding bijknippen

1. Typ {{cmd:IMAGECLIP}} (of `ICL`) en selecteer de afbeelding.
2. Kies `R` en klik op twee hoeken, of `P` en klik op de punten van een veelhoek, en druk daarna op {{key:Enter}}. `D` verwijdert de knip.

## Afbeeldingen plotten

Afbeeldingen gaan als afbeeldingen de PDF in, met hun eigen resolutie en onder de lijnen. In het dialoogvenster {{ui:Plot to PDF}} kunnen {{ui:Pictures}} ze beperken tot 600, 300 of 150 dpi om het bestand kleiner te maken. Een JPEG gaat er zoals hij is in.

## Wat waar wordt opgeslagen

| Indeling | Afbeeldingen |
|---|---|
| DWG (elke versie) | Als afbeeldingen (IMAGE), met hun knip |
| DXF | Als hun kaders met de bestandsnaam; de opslag zegt dat |

## Objecten van andere programma's (OLE)

Een tekening kan objecten bevatten die een ander programma maakte, zoals een afbeelding uit een tekenprogramma of een spreadsheetbereik (OLE-objecten). CadCraft voert ze niet uit en bewerkt ze niet, en kan geen nieuwe invoegen. Wat het wel doet:

- **In een DXF** opent een OLE-object als kader. Als het object een afbeelding van zichzelf heeft opgeslagen en die afbeelding een bitmap is, wordt de afbeelding binnen het kader getekend; anders draagt het kader een label met het type van het object, zoals "Microsoft Excel Worksheet (OLE)". U kunt het kader verplaatsen, kopiëren en wissen zoals een blok. {{cmd:SAVEAS}} naar DXF 2000 schrijft het weer als OLE-object, met zijn gegevens ongewijzigd.
- **In een DWG** blijven de objecten bewaard en worden ze teruggeschreven wanneer u als DWG opslaat, byte voor byte, maar ze **worden niet getoond**: een DWG houdt de plek van een object binnen zijn eigen gegevens bij, en CadCraft leest dat nog niet. De geschiedenis zegt hoeveel er bewaard zijn. Typ {{cmd:OLELIST}} om te zien wat ze zijn (type, grootte, of elk een afbeelding heeft opgeslagen), en om een kopie van een afbeelding te plaatsen waar u wilt: **Plaatsen** vraagt om het nummer, de linker onderhoek en de breedte, en tekent een kader met de afbeelding erin. Die kopie is een kader dat u kunt verplaatsen of wissen; het object zelf blijft in de tekening en wordt nog steeds teruggeschreven wanneer u opslaat.
- Een object dat uit een DXF kwam, wordt in een DWG alleen als zijn kader en label opgeslagen; de geschiedenis zegt dat. Sla op als DXF 2000 om het object zelf te behouden.
- Afbeeldingen die metafiles zijn (wat veel programma's opslaan) worden niet getekend: het kader en het label worden in plaats daarvan getoond.

## Veelvoorkomende fouten

| U ziet | Waarom | Oplossing |
|---|---|---|
| Een kader met een bestandsnaam | CadCraft heeft het bestand niet | {{cmd:IMAGE}}, en kies daarna het bestand |
| "Dat is geen afbeelding" | Het gekozen object is geen afbeelding | Kies het kader van de afbeelding |
