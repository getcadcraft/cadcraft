---
title: Tubazioni: scarico e pendenza
summary: Dare pendenza a uno scarico, vederne la caduta e le quote, e verificarla rispetto alla pendenza minima del codice idraulico.
keywords: pendenza, scarico, drenaggio, acque nere, acque meteoriche, caduta, fondo, quota, codice idraulico, ipc, 1/4 pollice per piede, percento
from: 651f0dfb
---

## Una tratta in pendenza

{{cmd:PIPE}} › {{ui:Pendenza}} accetta pollici per piede (`1/4`, `1/8`, `0.125`) in un disegno in unità imperiali, oppure una percentuale (`2`, `1`) in un disegno metrico; `0` è orizzontale. La tratta cade nella direzione in cui la si disegna, a partire dalla quota indicata al suo inizio. La sua pianta mostra la pendenza e una freccia di flusso; il suo solido sulla scheda {{ui:3D}} scende con essa; la tabella delle tratte nell'abaco ne indica la quota alle due estremità.

Uno scarico di acque nere o di acque meteoriche disegnato senza pendenza assume la pendenza minima che l'International Plumbing Code (2021, Table 704.1) consente per la sua dimensione maggiore:

- 2-1/2 in e inferiori: 1/4 in per piede (2 %);
- da 3 a 6 in: 1/8 in per piede (1 %);
- 8 in e superiori: 1/16 in per piede (0.5 %).

Uno scarico più piatto di questo viene segnalato da {{cmd:PIPE}} e {{cmd:PIPESCHED}}. Il codice locale potrebbe essere diverso: si tratta di un promemoria, non di un controllo.

## Lunghezze lungo la pendenza

La lunghezza di una tratta in pendenza nell'abaco — e in TakeoffCraft — è misurata lungo la pendenza: 40 ft con 1/8 in per piede sono 40.002 ft di tubazione e cadono di 5 in.

Per modificare la pendenza di una tratta, andare su {{ui:Proprietà}} › {{ui:Tratta di tubazione}} › {{ui:Pendenza}}.
