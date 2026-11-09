---
title: Leidingwerk: aan de slag
summary: Wat de add-on Leidingwerk in CadCraft doet, hoe u hem inschakelt, en hoe leidingwerk in een gewoon DWG- of DXF-bestand wordt bewaard.
keywords: leidingwerk, leiding, add-on, sanitair, werktuigbouw, staal, koper, pvc, pex, klep, p&id, staat, afvoer
from: 1048242c
---

## Wat het is

Leidingwerk is een add-on voor CadCraft die bij CadCraft hoort en gratis is. U klikt op de hartlijn van een leidingstrang, en hij tekent de leiding in haar echte maat — staal, koper, PVC of PEX, op nominale maat en schema of type uit de openbare normen — met zijn bochten, verlopen en T-stukken, de kleppen die u erop zet, een helling voor afvoeren, een volume op het tabblad {{ui:3D}} en een regel in de leiding- en fittingstaat. Er hoort een symboolset in P&ID-stijl bij.

Hij staat uit totdat u hem inschakelt: {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Add-ons}} › {{ui:Leidingwerk}}. De gereedschappen staan in het gedeelte {{ui:Leidingwerk}} van het rechterpaneel, als opdrachten (hieronder), en, als u erom vraagt in {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Leidingwerk}}, als groep aan het eind van de werkbalk.

Een tekening in inch of voet geeft maten aan met NPS (`2"`) en meet in voet; elke andere tekening benoemt staal en PVC met DN (`DN50`), en koper en PEX op hun nominale maat en buitendiameter in millimeter, en meet in meter.

## Uw eerste leidingstrang

1. Typ {{cmd:PIPE}}. Typ {{ui:M}} voor het materiaal, {{ui:Z}} en een maat (`2`, `1-1/2`, `DN50`).
2. Klik op de punten van de strang. Elke hoek krijgt een bocht. Druk op Enter om te eindigen.
3. Om af te takken, begint u de volgende strang op de eerste: de klik springt naar de hartlijn ervan en er komt daar een T-stuk.
4. Typ {{cmd:VALVE}} en klik op een strang om er een klep op te zetten.
5. Typ {{cmd:PIPESCHED}} en klik waar de staat moet komen.

## Bestanden overal openen

Een leidingstrang wordt opgeslagen als blokverwijzing met zijn tekening erin, en zijn gegevens worden erbij bewaard onder de toepassingsnaam `CC_PIPING`; dat geldt ook voor een symbool. Leidingwerk opgeslagen als DWG of DXF opent in elk CAD-programma zoals getekend, en in CadCraft zonder de add-on zonder verlies. De volumes zijn gewone 3D-groepen op het tabblad {{ui:3D}}.
