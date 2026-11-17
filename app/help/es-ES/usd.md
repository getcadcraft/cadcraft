---
title: Exportar el modelo 3D como USD
summary: Escriba los sólidos de la pestaña 3D como USD para programas de render y otro software 3D.
keywords: usd, usda, usdc, usdz, openusd, exportar, 3d, sólidos, usdout, export3d
from: 68748934
---

Los sólidos de la pestaña 3D se pueden escribir como USD.

- Escriba {{cmd:USDOUT}} y elija `.usda` (texto), `.usdc` (binario) o `.usdz` (un archivo de paquete), o
- escriba {{cmd:EXPORT3D}} y elija {{ui:USD}} para un paquete `.usdz`.

Cada sólido se convierte en un objeto con sus caras como malla y su color como material, en metros con Z hacia arriba. Un sólido usado varias veces se escribe una sola vez y se coloca donde está cada copia.
