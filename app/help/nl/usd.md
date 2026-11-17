---
title: Het 3D-model exporteren als USD
summary: De volumes van het 3D-tabblad schrijven als USD voor renderprogramma's en andere 3D-software.
keywords: usd, usda, usdc, usdz, openusd, exporteren, 3d, volumes, usdout, export3d
from: 68748934
---

De volumes op het 3D-tabblad kunnen als USD worden geschreven.

- Typ {{cmd:USDOUT}} en kies `.usda` (tekst), `.usdc` (binair) of `.usdz` (één pakketbestand), of
- typ {{cmd:EXPORT3D}} en kies {{ui:USD}} voor een `.usdz`-pakket.

Elk volume wordt één object met zijn vlakken als mesh en zijn kleur als materiaal, in meters met Z omhoog. Een volume dat meerdere keren is gebruikt, wordt één keer geschreven en geplaatst waar elke kopie staat.
