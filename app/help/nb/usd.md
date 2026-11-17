---
title: Eksporter 3D-modellen som USD
summary: Skriv volumlegemene på 3D-fanen som USD for gjengivelsesprogrammer og annen 3D-programvare.
keywords: usd, usda, usdc, usdz, openusd, eksport, 3d, volumlegemer, usdout, export3d
from: 68748934
---

3D-fanens volumlegemer kan skrives som USD.

- Skriv {{cmd:USDOUT}} og velg `.usda` (tekst), `.usdc` (binær) eller `.usdz` (én pakkefil), eller
- skriv {{cmd:EXPORT3D}} og velg {{ui:USD}} for en `.usdz`-pakke.

Hvert volumlegeme blir ett objekt med sine flater som et nett og sin farge som et materiale, i meter med Z opp. Et volumlegeme som brukes flere ganger, skrives én gang og plasseres der hver kopi står.
