---
title: Öppna en CadCraft-DWG i andra program
summary: Vilka program en DWG som sparats av CadCraft har öppnats i, vad som kontrolleras och vad du gör när ett program klagar.
keywords: dwg, öppna i andra program, kompatibilitet, öppnas det, AUDIT, trueview, andra CAD-program, dxf, kontroll, spara som dwg
from: 0f8c15c4
---

## Vad CadCraft skriver

{{ui:Spara}} skriver en riktig DWG, i den version ritningen kom in i eller den du väljer i {{ui:Spara som}}: AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018. Inget konverteras bakom din rygg: historiken listar allt som ändrades på vägen (till exempel en äkta färg som skrivs som närmaste standardfärg i en DWG 2000).

## Var den har öppnats

Varje DWG som CadCraft skriver öppnas, i varje version, av tre program som inte är CadCraft: ODA File Converter (som kontrollerar filen och inte reparerar något i den), LibreDWG och libdxfrw. Deras läsning jämförs med CadCraft: objekt, lager, block och attribut, mått, skraffering, blad och deras vyportar.

Att öppna CadCraft-DWG-filer i AutoCAD och i den kostnadsfria DWG TrueView kontrolleras på Windows, objektslag för objektslag (AUDIT, lager, blad, mått, skraffering, attribut, dynamiska block, klippta referenser, bilder). Resultaten listas här när de finns.

## När ett annat program klagar

1. Spara på nytt som DXF ({{ui:Spara som}} › {{ui:DXF 2000}}) och öppna den. De flesta program läser DXF.
2. Spara DWG-filen i en äldre version (2013 eller 2010).
3. Berätta för oss på Discord vilket program och vilken version det gäller, och vad det sa. Filen hjälper mest.
