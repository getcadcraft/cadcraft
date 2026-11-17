---
title: Formati di nuvole di punti, cosa si allega e cosa esportare
summary: Quali file di scansione laser si allegano sotto il disegno, quali sono un formato proprietario del produttore dello scanner, e cosa esportare dal software dello scanner perché la scansione si allega qui.
keywords: nuvola di punti, pointcloudattach, pcattach, scansione laser, scansione, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, esporta, impossibile aprire, non letto
from: 20a5f4ee
---

## Cosa si allega qui

Allegare questi file con {{cmd:POINTCLOUDATTACH}}, {{ui:Apri}} oppure trascinandoli sulla pagina (vedi l'argomento su come tracciare le linee as-built su una nuvola di punti):

| Formato | Estensione | Cosa viene letto |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punti, colori, intensità, classi LiDAR, il sistema di coordinate e le sue unità. LAZ fino a 1 GB. |
| E57 | `.e57` | Ogni scansione del file, ciascuna posizionata secondo la sua posa; colori, oppure intensità quando il file non ha colori; metri. Le immagini nel file vengono escluse (viene segnalato). Per ora fino a 6 milioni di punti e 512 MB: esportare le scansioni più grandi come LAS o LAZ. |
| PLY | `.ply` | Testo e binario (entrambi gli ordini di byte): x y z dei vertici, colori e intensità. Le facce vengono escluse (viene segnalato). |
| PCD | `.pcd` | Testo e binario: x y z, colori in formato compatto o separati, intensità. I file PCD compressi non sono ancora letti: salvarli come binario o testo. |
| PTX | `.ptx` | Una o più scansioni, ciascuna posizionata dalla propria trasformazione; i punti non misurati dallo scanner vengono esclusi. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Testo: x y z, con intensità e colori quando ci sono le colonne. |

## File che legge solo il software dello scanner

Alcuni file di scansione sono un formato proprietario del produttore dello scanner, senza descrizione pubblica e senza un lettore aperto. CadCraft non può leggerli: allegarne uno stampa cosa è e cosa fare nella riga di comando. Esportare la scansione dal software del produttore come E57 o LAS (oppure PTX, PTS), poi allegare il file esportato.

| File | Estensione | Esportare da |
|---|---|---|
| Progetto ReCap | `.rcp` | ReCap: aprire il progetto ed esportarlo. Il progetto indica solo le sue scansioni, quindi copiare il solo `.rcp` non dà punti. |
| Scansione ReCap | `.rcs` | ReCap: aprire il progetto a cui appartiene la scansione ed esportarlo. |
| Scansione FARO | `.fls` | FARO SCENE. |
| Scansione Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scansione Trimble | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Scansione Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quando l'esportazione chiede un formato, LAS o LAZ mantiene tutto ciò che CadCraft usa (colori, intensità, classi, il sistema di coordinate e le sue unità) nel file più piccolo.
:::

## Perché questi file non vengono letti

Questi formati non sono pubblicati, e l'unico modo per leggerli è la libreria software di ciascun produttore, secondo le sue condizioni. CadCraft legge solo i formati che può leggere con il proprio codice sul computer, quindi una scansione non deve mai essere inviata da nessuna parte per essere allegata.
