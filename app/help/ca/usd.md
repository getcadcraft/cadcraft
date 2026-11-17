---
title: Exporta el model 3D com a USD
summary: Escriu els sòlids de la pestanya 3D com a USD per a programes de renderitzat i altre programari 3D.
keywords: usd, usda, usdc, usdz, openusd, exporta, 3d, sòlids, usdout, export3d
from: 68748934
---

Els sòlids de la pestanya 3D es poden escriure com a USD.

- Escriviu {{cmd:USDOUT}} i trieu `.usda` (text), `.usdc` (binari) o `.usdz` (un fitxer de paquet), o
- escriviu {{cmd:EXPORT3D}} i trieu {{ui:USD}} per a un paquet `.usdz`.

Cada sòlid esdevé un objecte, amb les seves cares com a malla i el seu color com a material, en metres amb Z cap amunt. Un sòlid usat diverses vegades s'escriu una sola vegada, i es col·loca on és cada còpia.
