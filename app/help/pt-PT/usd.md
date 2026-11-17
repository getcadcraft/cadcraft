---
title: Exportar o modelo 3D como USD
summary: Guardar os sólidos do separador 3D em USD para programas de renderização e outro software 3D.
keywords: usd, usda, usdc, usdz, openusd, exportar, 3d, sólidos, usdout, export3d
from: 68748934
---

Os sólidos do separador 3D podem ser guardados como USD.

- Escreva {{cmd:USDOUT}} e escolha `.usda` (texto), `.usdc` (binário) ou `.usdz` (um só ficheiro de pacote), ou
- escreva {{cmd:EXPORT3D}} e escolha {{ui:USD}} para um pacote `.usdz`.

Cada sólido torna-se um objeto com as suas faces como malha e a sua cor como material, em metros com Z para cima. Um sólido usado várias vezes é escrito uma só vez e colocado onde está cada cópia.
