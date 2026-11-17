---
title: Esportare il modello 3D in USD
summary: Scrivere i solidi della scheda 3D in USD per programmi di rendering e altro software 3D.
keywords: usd, usda, usdc, usdz, openusd, esporta, 3d, solidi, usdout, export3d
from: 68748934
---

I solidi della scheda 3D possono essere scritti come USD.

- Digitare {{cmd:USDOUT}} e scegliere `.usda` (testo), `.usdc` (binario) oppure `.usdz` (un unico file di pacchetto), oppure
- digitare {{cmd:EXPORT3D}} e scegliere {{ui:USD}} per un pacchetto `.usdz`.

Ogni solido diventa un oggetto con le sue facce come mesh e il suo colore come materiale, in metri con Z verso l'alto. Un solido usato più volte viene scritto una sola volta e posizionato dove si trova ogni copia.
