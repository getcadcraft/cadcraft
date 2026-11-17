---
title: Åbn en CadCraft-DWG i andre programmer
summary: Hvilke programmer en DWG gemt af CadCraft er åbnet i, hvad der er kontrolleret, og hvad du gør, når et af dem brokker sig.
keywords: dwg, åbn i andre programmer, kompatibilitet, kan den åbnes, audit, trueview, andre cad-programmer, dxf, kontrol, gem som dwg
from: 0f8c15c4
---

## Hvad CadCraft skriver

{{ui:Gem}} skriver en rigtig DWG, i den version tegningen kom i, eller den du vælger i {{ui:Gem som}}: AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018. Intet konverteres bag din ryg: historikken lister alt, der er ændret undervejs (fx en ægte farve, skrevet som den nærmeste standardfarve i en 2000-DWG).

## Hvor den er åbnet

Hver DWG, CadCraft skriver, åbnes i alle versioner af tre programmer, der ikke er CadCraft: ODA File Converter (som kontrollerer filen og ikke reparerer noget i den), LibreDWG og libdxfrw. Deres læsning sammenlignes med CadCraft's: objekter, lag, blokke og attributter, målsætninger, skraveringer, ark og deres viewports.

Åbning af CadCraft's DWG-filer i AutoCAD og i den gratis DWG TrueView kontrolleres på Windows, objekttype for objekttype (AUDIT, lag, ark, målsætninger, skraveringer, attributter, dynamiske blokke, klippede referencer, billeder). Resultaterne vil stå her, når de er klar.

## Når et andet program brokker sig

1. Gem igen som DXF ({{ui:Gem som}} › {{ui:DXF 2000}}) og åbn den: de fleste programmer læser DXF.
2. Gem DWG i en ældre version (2013 eller 2010).
3. Fortæl os på Discord, hvilket program og hvilken version, og hvad det sagde; filen hjælper mest.
