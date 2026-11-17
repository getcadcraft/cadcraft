---
title: Ricalca linee come costruito su una nuvola di punti
summary: Collega una scansione laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) sotto il disegno, tagliane una sezione in pianta e disegna muri, porte e pilastri con snap a oggetto sui suoi punti.
keywords: nuvola di punti, pointcloudattach, pcattach, pointcloud, pc, scansione laser, scansione, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, come costruito, rilievo effettivo, rilievo, sezione, taglio in pianta, nodo, snap, ricalco, stato di fatto
from: b0e0aae5
---

## Cosa si realizza

Una pianta del piano come costruito: i muri di un edificio scansionato disegnati come linee e polilinee esattamente sui punti della scansione.

## Collegare la nuvola

1. Impostare prima le unità del disegno, se non ne ha (la casella {{ui:Units}} in {{ui:Properties}}, oppure {{cmd:UNITS}}): CadCraft converte la nuvola dalle proprie unità a quelle del disegno.
2. Digitare {{cmd:POINTCLOUDATTACH}} (oppure `PCATTACH`) e premere {{key:Enter}}. Scegliere un file `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz` (l'argomento sui formati delle nuvole di punti spiega cosa porta ciascuno e cosa esportare dal software dello scanner). È anche possibile aprire il file con {{ui:Open}}, trascinarlo nella pagina oppure inviarlo dal visualizzatore BIM con {{ui:Trace in CadCraft}}.
3. `Angolo inferiore sinistro della nuvola`: premere {{key:Enter}} per mantenere le coordinate proprie del file (una scansione registrata nel progetto si allinea al disegno), oppure fare clic dove deve andare l'angolo inferiore sinistro della nuvola.
4. La riga di comando indica quanti punti vengono mostrati. La vista si adatta alla nuvola; questa sta sotto il tratto, con ogni punto visto dall'alto.

## Tagliare una sezione in pianta e ricalcare

1. Digitare {{cmd:POINTCLOUD}} (oppure `PC`), poi `S` per {{ui:Slice}}. Si vede solo una fascia sottile a 1.2 m sopra il punto più basso della nuvola: muri, aperture di porte e pilastri si leggono come una pianta.
2. `H` imposta l'altezza del taglio, `T` lo spessore (in unità del disegno). {{key:Enter}} termina il comando.
3. Attivare lo snap a oggetto ({{key:F3}}) con {{ui:Node}} tra gli snap. Disegnare con {{cmd:LINE}} o {{cmd:PLINE}}: il cursore si aggancia ai punti della sezione, etichettati "Nuvola di punti". Gli estremi, i punti medi e i centri propri del disegno hanno la precedenza sulla nuvola, quindi chiudendo una polilinea si arriva sul suo primo punto.
4. Cambiare l'altezza del taglio per ricalcare un altro livello, poi disattivare la sezione (di nuovo `S`) per vedere l'intera nuvola.

## Altre opzioni

In {{cmd:POINTCLOUD}}: `C` colora i punti in base ai colori del file, all'altezza, all'intensità, alla classe LiDAR o a un colore unico; `SI` imposta la dimensione del punto; `V` nasconde o mostra la nuvola; `Z` adatta la vista alla nuvola; `D` la scollega.

La scheda 3D mostra anche la nuvola, con il suo punto più basso a terra, e la stessa sezione.

:::note
La nuvola non fa parte del disegno: non viene salvata nel DWG o nel DXF, e Annulla non la modifica. Ricollegarla quando si riapre il disegno più tardi. I file vengono letti su questo computer; nulla viene caricato. Le scansioni molto grandi vengono sfoltite uniformemente fino a 2 milioni di punti. I file E57 si aprono fino a 6 milioni di punti e 512 MB per ora: esportare le scansioni più grandi in LAS o LAZ.
:::

## Stampare

{{cmd:PLOT}} stampa la nuvola con il disegno, sotto il tratto: in una stampa del modello ({{ui:Everything}} comprende l'area della nuvola) e in ogni viewport del layout, nel PDF, nel PNG, nell'SVG e in ciò che si invia a una stampante. Stampa ciò che è visibile sullo schermo: la sezione se è attiva, i colori scelti, e nulla se è stata nascosta. Su carta i punti diventano piccoli quadrati, prevalendo ognuno il punto più alto, e una stampa ne mantiene al massimo circa 400.000 (una nuvola molto densa viene stampata con quadrati più grandi). La nuvola viene stampata solo nel disegno a cui è collegata; non viene mai stampata direttamente nello spazio carta, solo attraverso una viewport.

## Più scansioni

Le scansioni prese da posizioni diverse possono essere registrate in un unico riferimento, affinate con ICP ed esportate come un solo LAS o E57: vedi [Registra più scansioni in una](topic:register-scans).
