---
title: Een CadCraft-DWG openen in andere programma's
summary: In welke programma's een door CadCraft opgeslagen DWG is geopend, wat er is gecontroleerd en wat u moet doen als een programma klaagt.
keywords: dwg, openen in andere programma's, compatibiliteit, opent het, audit, trueview, andere cad-programma's, dxf, controleren, opslaan als dwg
from: 0f8c15c4
---

## Wat CadCraft schrijft

{{ui:Opslaan}} schrijft een echte DWG, in de versie waarin de tekening binnenkwam of de versie die u kiest bij {{ui:Opslaan als}}: AutoCAD 2000, 2004, 2007, 2010, 2013 of 2018. Er wordt niets achter uw rug omgezet: de geschiedenis toont alles wat onderweg is veranderd (bijvoorbeeld een ware kleur die in een DWG 2000 als de dichtstbijzijnde standaardkleur is geschreven).

## Waar het is geopend

Elke DWG die CadCraft schrijft, wordt in elke versie geopend door drie programma's die niet CadCraft zijn: de ODA File Converter (die het bestand controleert en er niets in repareert), LibreDWG en libdxfrw. Hun lezing wordt vergeleken met die van CadCraft: objecten, lagen, blokken en attributen, maatvoering, arceringen, bladen en hun viewports.

Het openen van CadCraft-DWG-bestanden in AutoCAD en in de gratis DWG TrueView wordt op Windows gecontroleerd, per soort object (AUDIT, lagen, bladen, maatvoering, arceringen, attributen, dynamische blokken, afgeknipte verwijzingen, rasterafbeeldingen). De resultaten worden hier vermeld zodra ze binnen zijn.

## Als een ander programma klaagt

1. Sla opnieuw op als DXF ({{ui:Opslaan als}} › {{ui:DXF 2000}}) en open dat: de meeste programma's lezen DXF.
2. Sla de DWG op in een oudere versie (2013 of 2010).
3. Laat ons via Discord weten welk programma en welke versie, en wat het meldde; het bestand helpt het meest.
