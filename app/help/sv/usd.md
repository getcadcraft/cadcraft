---
title: Exportera 3D-modellen som USD
summary: Skriv solider från 3D-fliken som USD för renderingsprogram och annan 3D-programvara.
keywords: usd, usda, usdc, usdz, openusd, export, 3d, solider, usdout, export3d
from: 68748934
---

Solider på 3D-fliken kan skrivas som USD.

- Skriv {{cmd:USDOUT}} och välj `.usda` (text), `.usdc` (binär) eller `.usdz` (en paketfil), eller
- skriv {{cmd:EXPORT3D}} och välj {{ui:USD}} för ett `.usdz`-paket.

Varje solid blir ett objekt med sina ytor som ett nät och sin färg som ett material, i meter med Z uppåt. En solid som används flera gånger skrivs en gång och placeras där varje kopia är.
