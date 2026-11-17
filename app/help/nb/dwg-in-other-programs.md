---
title: Åpne en CadCraft-DWG i andre programmer
summary: Hvilke programmer en DWG lagret av CadCraft er åpnet i, hva som er kontrollert, og hva du gjør når ett klager.
keywords: dwg, åpne i andre programmer, kompatibilitet, åpnes det, revisjon, audit, trueview, andre CAD-programmer, dxf, kontroll, lagre som dwg
from: 0f8c15c4
---

## Hva CadCraft skriver

{{ui:Lagre}} skriver en ekte DWG, i den versjonen tegningen kom i eller den du velger i {{ui:Lagre som}}: AutoCAD 2000, 2004,
2007, 2010, 2013 eller 2018. Ingenting konverteres bak ryggen din: historikken lister opp alt som ble endret underveis (for
eksempel en ekte farge skrevet som nærmeste standardfarge i en DWG fra 2000).

## Hvor den er åpnet

Hver DWG CadCraft skriver, åpnes i alle versjoner av tre programmer som ikke er CadCraft: ODA File Converter (som kontrollerer
filen og ikke reparerer noe i den), LibreDWG og libdxfrw. Deres lesing sammenlignes med CadCraft sin: objekter, lag,
blokker og attributter, måltilsettinger, skravurer, ark og deres visningsområder.

Åpning av CadCraft sine DWG-filer i AutoCAD og i det gratis DWG TrueView kontrolleres på Windows, objekttype for objekttype
(AUDIT, lag, ark, måltilsettinger, skravurer, attributter, dynamiske blokker, klippede referanser, bilder). Resultatene vil
bli listet her når de foreligger.

## Når et annet program klager

1. Lagre på nytt som DXF ({{ui:Lagre som}} › {{ui:DXF 2000}}) og åpne den: de fleste programmer leser DXF.
2. Lagre DWG-filen i en eldre versjon (2013 eller 2010).
3. Si fra til oss på Discord hvilket program og hvilken versjon, og hva det sa; filen hjelper mest.
