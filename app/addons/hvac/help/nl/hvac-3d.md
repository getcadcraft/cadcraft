---
title: HVAC: kanalen op het 3D-tabblad
summary: Elke kanaalstrang is ook een volume op het 3D-tabblad van CadCraft, opgebouwd uit dezelfde strang en bijgewerkt terwijl u tekent.
keywords: 3d, volume, model, kanaalwerk, hoogte, onderkant kanaal, tag, glb, coördinatie
from: e5774345
---

## Dezelfde strang in 3D

Elke kanaalstrang wordt als één gesloten volume op het {{ui:3D}}-tabblad gebouwd, op zijn hoogte (de onderkant van het kanaal), met zijn bochten, verlopen en aftakkingen. Het wordt in dezelfde stap opnieuw getekend wanneer de strang verandert, zodat ongedaan maken de 2D- en de 3D-tekening samen terugdraait.

De volumes krijgen de tag `HVAC ductwork`: verberg of toon ze allemaal via de tags op het 3D-tabblad. Elk systeem heeft zijn eigen kleur.

## Opnieuw opbouwen

{{cmd:DUCT3D}} bouwt het volume van elke strang opnieuw op en verwijdert volumes waarvan de strang is verdwenen. Gebruik het na het openen van een tekening die is bewerkt zonder de HVAC-add-on (de strangen zijn verplaatst, maar hun volumes niet), of nadat u volumes weer hebt ingeschakeld.

Schakel volumes uit bij {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:HVAC}} › {{ui:Volumes op het 3D-tabblad}} voor zeer grote tekeningen; de volumes die er al zijn, blijven staan tot u ze op het 3D-tabblad wist.

## Zonder de add-on

Een volume is een gewone 3D-groep. Het wordt met de tekening opgeslagen (DWG en DXF), staat op het 3D-tabblad en wordt samen met al het andere geëxporteerd naar GLB, OBJ en STL, met of zonder ingeschakelde HVAC.
