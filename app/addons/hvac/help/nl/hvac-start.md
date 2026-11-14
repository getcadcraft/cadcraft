---
title: HVAC: aan de slag
summary: Wat de HVAC-add-on in CadCraft doet, hoe u hem inschakelt en hoe kanaalwerk in een gewoon DWG- of DXF-bestand wordt bewaard.
keywords: hvac, add-on, kanaalwerk, kanaal, mechanisch, plaatwerk, luchtdebiet, cfm, gelijke wrijving, staat
from: a9ad5492
---

## Wat het is

HVAC is een add-on voor CadCraft die erbij hoort en gratis is. Het tekent kanaalwerk: u klikt op de hartlijn van een kanaalstrang, en de add-on tekent beide zijden van het kanaal met zijn bochten, verlopen en aftakfittingen, dimensioneert het op basis van het luchtdebiet, bouwt het als volume op het {{ui:3D}}-tabblad op en zet het in een kanaalstaat met het plaatwerkoppervlak.

Het staat uit tot u het inschakelt: {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Add-ons}} › {{ui:HVAC}}. De gereedschappen staan in het gedeelte {{ui:HVAC}} van het rechterpaneel, als opdrachten (hieronder), en, als u erom vraagt bij {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:HVAC}}, als groep aan het eind van de werkbalk.

Maten volgen de eenheden van de tekening: een tekening in inches of feet krijgt maten in inches, luchtdebiet in cfm en wrijving in inch waterkolom per 100 ft; elke andere tekening krijgt millimeters, liter per seconde en pascal per meter.

## Uw eerste kanaalstrang

1. Typ {{cmd:DUCT}}. Typ {{ui:Z}} en een maat, bijvoorbeeld `24x12` (breedte × hoogte) — of {{ui:A}} en het luchtdebiet, en de add-on kiest de maat.
2. Klik op de punten van de strang. Elke hoek krijgt vanzelf een bocht. Druk op Enter om te eindigen.
3. Om af te takken, begin de volgende strang binnen de eerste: de klik verschuift naar de hartlijn ervan en de aftakking krijgt daar een T-stuk of aftakstuk.
4. Typ {{cmd:DUCTSCHED}} en klik waar de kanaalstaat moet komen.

Zie [Kanaalstrangen tekenen](topic:hvac-ducts) voor alles wat een strang kan.

## Bestanden die overal opengaan

Een kanaalstrang wordt opgeslagen als blokverwijzing met zijn tekening erin, en zijn gegevens worden erbij bewaard onder de applicatienaam `CC_HVAC`. Kanaalwerk dat als DWG of DXF is opgeslagen, opent dus in elk CAD-programma als het getekende kanaal, en opent in CadCraft zonder de add-on zonder dat er iets verloren gaat. Zijn volumes zijn gewone 3D-groepen op het {{ui:3D}}-tabblad. Met HVAC ingeschakeld zijn de strangen weer kanaalstrangen.
