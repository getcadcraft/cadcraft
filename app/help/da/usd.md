---
title: Eksportér 3D-modellen som USD
summary: Skriv massive legemer fra 3D-fanen som USD til renderingsprogrammer og andet 3D-software.
keywords: usd, usda, usdc, usdz, openusd, eksport, 3d, massive legemer, usdout, export3d
from: 68748934
---

Massive legemer på 3D-fanen kan skrives som USD.

- Skriv {{cmd:USDOUT}} og vælg `.usda` (tekst), `.usdc` (binær) eller `.usdz` (én pakkefil), eller
- skriv {{cmd:EXPORT3D}} og vælg {{ui:USD}} for en `.usdz`-pakke.

Hvert massivt legeme bliver ét objekt med sine flader som et net og sin farve som et materiale, i meter med Z opad. Et massivt legeme, der bruges flere gange, skrives én gang og placeres, hvor hver kopi er.
