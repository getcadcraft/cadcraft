---
title: Spåra as-built-linjer över ett punktmoln
summary: Bifoga en laserskanning (LAS, LAZ, E57, PLY, PCD, PTX, PTS eller XYZ) under ritningen, skär ett plansnitt genom den och rita väggar, dörrar och pelare med objektfångst mot dess punkter.
keywords: punktmoln, pointcloudattach, pcattach, pointcloud, pc, laserskanning, skanning, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, mätning, skiva, plansnitt, nod, fångst, spåra, befintliga förhållanden
from: b0e0aae5
---

## Det du skapar

En as-built-planritning: väggarna i en skannad byggnad ritade som linjer och polylinjer exakt på skanningens punkter.

## Bifoga molnet

1. Ställ först in ritningens enheter om de saknas (rutan {{ui:Units}} i {{ui:Properties}}, eller {{cmd:UNITS}}): CadCraft konverterar molnet från dess egna enheter till ritningens.
2. Skriv {{cmd:POINTCLOUDATTACH}} (eller `PCATTACH`) och tryck på {{key:Enter}}. Välj en fil av typen `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` eller `.xyz` (ämnet om punktmolnsformat beskriver vad varje format ger och vad du ska exportera från en skanners egen programvara). Du kan också öppna filen med {{ui:Open}}, släppa den på sidan eller skicka den från BIM-visarens {{ui:Trace in CadCraft}}.
3. `Nedre vänstra hörnet på molnet`: tryck på {{key:Enter}} för att behålla filens egna koordinater (en skanning som är registrerad mot projektet hamnar rätt mot ritningen), eller klicka där molnets nedre vänstra hörn ska ligga.
4. Kommandoraden visar hur många punkter som visas. Vyn zoomar till molnet; det ligger under linjerna, med varje punkt sedd uppifrån.

## Skär ett plansnitt och spåra

1. Skriv {{cmd:POINTCLOUD}} (eller `PC`) och sedan `S` för {{ui:Slice}}. Bara ett tunt band 1.2 m ovanför molnets lägsta punkt visas: väggar, dörröppningar och pelare blir läsbara som en planritning.
2. `H` anger skärhöjden och `T` dess tjocklek (i ritningsenheter). {{key:Enter}} avslutar kommandot.
3. Slå på objektfångst ({{key:F3}}) med {{ui:Node}} bland fångsterna. Rita med {{cmd:LINE}} eller {{cmd:PLINE}}: markören fångar skivans punkter, märkta ”Punktmoln”. Ritningens egna ändpunkter, mittpunkter och centrum går före molnet, så att en stängd polylinje hamnar på dess första punkt.
4. Ändra skärhöjden för att spåra en annan nivå, och stäng sedan av skivan (`S` igen) för att se hela molnet.

## Fler alternativ

I {{cmd:POINTCLOUD}}: `Färg (C)` färgsätter punkterna efter filens färger, höjd, intensitet, LiDAR-klass eller en enda färg; `Punktstorlek (SI)` anger punktstorleken; `Dölj (V)` döljer eller visar molnet; `Zooma` zoomar till det; `Koppla loss (D)` kopplar loss det.

3D-fliken visar också molnet, med dess lägsta punkt på marken och med samma skiva.

:::note
Molnet ingår inte i ritningen: det sparas inte i DWG eller DXF, och Ångra ändrar det inte. Bifoga det igen när du öppnar ritningen senare. Filerna läses på den här datorn; inget laddas upp. Mycket stora skanningar glesas ut jämnt till 2 miljoner punkter. E57-filer öppnas med upp till 6 miljoner punkter och 512 MB tills vidare: exportera större skanningar som LAS eller LAZ.
:::

## Plotta den

{{cmd:PLOT}} skriver ut molnet tillsammans med ritningen, under linjerna: i en modellutskrift ({{ui:Everything}} inkluderar molnets område) och i varje layoutvyport, i PDF-filen, PNG-filen, SVG-filen och det du skickar till en skrivare. Den skriver ut det som syns på skärmen: skivan om skivan är på, de färger du valde, och ingenting när du har dolt molnet. På papper blir punkterna små kvadrater, där den högsta punkten vinner i varje kvadrat, och en utskrift behåller högst cirka 400 000 av dem (ett mycket tätt moln skrivs ut med större kvadrater). Molnet skrivs bara ut i ritningen det bifogades till; det skrivs aldrig ut i pappersrummet självt, bara genom en vyport.

## Flera skanningar

Skanningar tagna från olika positioner kan registreras i en gemensam ram, finjusteras med ICP och exporteras som en LAS- eller E57-fil: se [Registrera flera skanningar till en](topic:register-scans).
