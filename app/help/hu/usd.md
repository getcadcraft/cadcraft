---
title: A 3D modell exportálása USD formátumban
summary: A 3D lap testeit USD formátumban írja ki renderelő programokhoz és más 3D szoftverekhez.
keywords: usd, usda, usdc, usdz, openusd, exportálás, 3d, testek, usdout, export3d
from: 68748934
---

A 3D lap testei USD formátumban is kiírhatók.

- Írja be a {{cmd:USDOUT}} parancsot, és válassza a `.usda` (szöveges), `.usdc` (bináris) vagy `.usdz` (egy csomagfájl) lehetőséget, vagy
- írja be az {{cmd:EXPORT3D}} parancsot, és válassza a {{ui:USD}} lehetőséget egy `.usdz` csomaghoz.

Mindegyik test egy objektum lesz: lapjai hálóként, színe anyagként, méterben, a Z tengely felfelé mutat. Egy többször használt testet egyszer írunk ki, és oda kerül, ahol minden példány van.
