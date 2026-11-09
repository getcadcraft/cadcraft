---
title: Leidingwerk: leidingstrangen tekenen
summary: Teken leidingstrangen per materiaal, klasse en nominale maat, in enkele of dubbele lijn; bochten, verlopen, T-stukken en Y-stukken komen vanzelf.
keywords: leiding, strang, hartlijn, nps, dn, schedule 40, schedule 80, type k, type l, type m, bocht, verloop, T-stuk, Y-stuk, aftakking, dubbele lijn, enkele lijn, hoogte
from: d0ed1b49
---

## Een strang tekenen

Typ {{cmd:PIPE}} en klik op de punten van de hartlijn van de strang. Voor het eerste punt kunt u wijzigen:

- {{ui:Materiaal}} en {{ui:Klasse}} — staal Schedule 40 of 80, koper type K, L of M, PVC Schedule 40 of 80, PEX SDR 9 (zie [Leidingmaten en hun herkomst](topic:piping-tables)).
- {{ui:Maat}} — een nominale maat: `2`, `1-1/2` (of `1 1/2`, `1.5`), of `DN50` in een metrische tekening. Een maat die voor het materiaal niet bestaat, wordt geweigerd. Het wijzigen van de maat tussen twee punten maakt een verloop.
- {{ui:Systeem}} — koud huishoudwater, warm water en warmwaterretour, sanitair, ventilatie, regenwater, koelwater, warm verwarmingswater, aardgas, brandbeveiliging of overig. Elk heeft een eigen laag, label en 3D-kleur.
- {{ui:Hoogte}} — de hoogte van de hartlijn aan het begin.
- {{ui:Helling}} — voor afvoeren (zie [Afvoer en helling](topic:piping-drainage)).
- {{ui:Lijnen}} — enkele lijn (de hartlijn, met symbolen) of dubbele lijn (de buitendiameter van de leiding op schaal).
- {{ui:Tag}} — een naam zoals `CW-1`, getoond op het label.

## De fittingen die het maakt

- **Bochten** bij elke hoek: 90° en 45° bij naam, andere hoeken op hun hoek. Stalen bochten worden getekend met de lange-straal-buiging van ASME B16.9 (1.5 × de maat vanaf 3/4 in); buigingen van andere materialen worden getekend op één buitendiameter — een tekenkeuze, geen afmeting van een fitting.
- **Verlopen** waar de maat verandert, concentrisch, direct na de hoek.
- **T-stukken** waar een strang begint of eindigt op een andere: een T-stuk wanneer hij de hoofdleiding haaks raakt (binnen 15°), een verloop-T-stuk wanneer hij kleiner is, een Y-stuk onder een hoek.

## Een strang wijzigen

Sleep de grip van een punt om het te verplaatsen. {{ui:Eigenschappen}} › {{ui:Leidingstrang}} bevat de tag, het systeem, het materiaal en de klasse, de maat (de hele strang), de hoogte, de helling en de lijnen, en toont de buiten- en binnendiameter van de strang. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} en {{cmd:ERASE}} werken als bij elk object.
