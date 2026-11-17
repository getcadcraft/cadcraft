---
title: Eenheden bij het importeren, een bestand meldt zijn eenheden of u wordt eerst gevraagd
summary: Wanneer een bestand dat u in een tekening brengt zijn eenheden vermeldt, zet CadCraft het om en zegt dat. Wanneer dat niet zo is, vraagt CadCraft voordat er iets wordt geplaatst en onthoudt het uw antwoord voor dat bestand.
keywords: eenheden, importeren, invoegen, xref, koppelen, XATTACH, INSERT, OBJ, DWG, DXF, puntenwolk, bibliotheekitem, millimeters, meters, inch, voet, schaal, verkeerde grootte, te groot, te klein, 1000 keer, vragen, onthouden, INSUNITS
from: 558f1293
---

## Wat u gaat doen

Een bestand in een tekening brengen en zeker weten dat het op de juiste grootte binnenkomt.

## Stappen

1. Breng het bestand binnen zoals gewoonlijk: `INSERT` › Bestand, `XATTACH`, `POINTCLOUDATTACH`, of {{ui:Bestanden}} in het paneel Bibliotheek.
2. Als het bestand zijn eenheden vermeldt, wordt er niets gevraagd. De opdrachtregel zegt welke eenheden het bestand vermeldt, en de schaal die wordt gebruikt wanneer ze van die van de tekening verschillen.
3. Als dat niet zo is, vraagt een dialoogvenster naar de **Eenheden van** het bestand. Kies wat één eenheid in het bestand is en klik op {{ui:Deze eenheden gebruiken}}. Er wordt niets geplaatst voordat u antwoordt.
4. {{ui:Annuleren}} (of {{key:Esc}}) brengt niets binnen.

## Welke bestanden hun eenheden vermelden

- **DWG en DXF**: de invoegeenheden van de tekening (`$INSUNITS`). Van een bestand zonder die wordt gevraagd.
- **Puntenwolken**: LAS en LAZ met een coördinatensysteem, E57, PTX en PLY vermelden hun eenheden. Bij andere wordt gevraagd.
- **OBJ**: vermeldt nooit eenheden. U wordt gevraagd.
- **glTF en GLB**: meters, volgens de eigen regel van het formaat.
- **Afbeeldingen**: hebben geen eigen grootte. `IMAGEATTACH` vraagt om de breedte, en biedt de breedte aan die u eerder voor dat bestand gaf.
- **Scans**: een scan die zijn dichtheid (punten per inch) vermeldt, komt op zijn ware grootte in de eenheden van de tekening binnen; `SCANATTACH` vraagt nog steeds om de breedte.
- **De add-on Puntenwolken**: vraagt wanneer u een wolk bouwt waarvan het bestand geen eenheid vermeldt, en labelt de getallen van de wolk in de eenheid die hij draagt.

## Goed om te weten

- Een DWG of DXF als eigen tekening openen vraagt niets: de opdrachtregel zegt welke eenheden het bestand vermeldt, of dat het er geen vermeldt. {{ui:Eigenschappen}} stelt de eenheden van een tekening in.
- Wanneer deze tekening ook geen eenheden heeft, kan een bestand niet worden omgezet: het wordt getal voor getal geplaatst en de opdrachtregel zegt dat.
- Het antwoord wordt voor dat bestand op deze computer onthouden, in elke CadCraft-app. De volgende keer dat het binnenkomt, wordt u niet gevraagd, en de opdrachtregel zegt dat de onthouden eenheden zijn gebruikt.
- Om opnieuw gevraagd te worden: het opdrachtenpalet ({{key:Mod+K}}) › **Opnieuw vragen naar de eenheden van geïmporteerde bestanden**.
