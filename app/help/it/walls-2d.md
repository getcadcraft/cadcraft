---
title: Disegnare muri, porte e finestre intelligenti in 2D
summary: Disegnare muri come una polilinea, unirli in modo pulito e inserire porte e finestre che seguono il muro. Tutto in 2D, senza modello 3D.
keywords: muro, muri, WALL, WA, porta, DOOR, DR, finestra, WINDOW, WN, DELOPENING, muro intelligente, pianta, battente, cerniera, apertura
from: 45845d49
---

Qui i muri sono oggetti di disegno 2D. Non creano un modello 3D, quindi una pianta resta leggera come un disegno a linee. Per un modello di edificio, usare BimCraft.

## Disegnare muri

Digitare `WALL` (`WA`), oppure scegliere {{ui:Muro}} nel menu {{ui:Altro}} del gruppo {{ui:Disegna}}, poi cliccare dei punti come per una polilinea. Premere {{key:Enter}} per terminare, oppure digitare `C` per chiudere il locale.

- `T` imposta lo spessore.
- `J` indica a che cosa seguono i clic: il centro del muro, oppure la sua faccia sinistra o destra.
- `F` imposta il riempimento: nessuno, pieno o tratteggio.

Gli angoli si raccordano a 45° da soli. Un muro che termina entro lo spessore di un altro muro si unisce a T pulita, e i muri che si incrociano si aprono reciprocamente. Le unioni sono salvate con i muri. Per rettangoli, poligoni, archi, divisioni, bloccaggi e il resto, vedere "Forme, tagli, offset e bloccaggi per i muri 2D".

## Aggiungere porte e finestre

Digitare `DOOR` (`DR`) o `WINDOW` (`WN`) e cliccare su un muro. Una porta si apre verso il lato del muro cliccato. `W` imposta la larghezza, `Y` il tipo e `H` il lato della cerniera. Continuare a cliccare per inserirne altre, e premere {{key:Enter}} per terminare. Le porte possono essere ad anta singola, doppia, scorrevole o un passaggio aperto. Le finestre possono essere fisse, a battente o scorrevoli.

## Modificarli

Selezionare un muro per vederne i grip:

- I grip alle estremità allungano il muro. I muri uniti a esso lo seguono.
- Il grip centrale sposta il muro.
- Un grip su un'apertura la fa scorrere lungo il muro.
- Le frecce invertono la cerniera e il verso di apertura di una porta.

Le Proprietà mostrano lo spessore, il riempimento e ciascuna apertura: tipo, larghezza, posizione, cerniera, verso di apertura, se mostrata aperta o chiusa, e Rimuovi. `DELOPENING` elimina l'apertura più vicina al punto cliccato.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` ed `ERASE` funzionano come di consueto. Porte e finestre seguono il loro muro, i muri uniti mantengono le loro unioni, e un solo Annulla riporta tutto indietro.

## In altri programmi

Ogni muro è salvato come blocco normale, quindi gli altri programmi CAD lo mostrano correttamente e possono spostarlo, ma non possono modificarlo come muro. `EXPLODE` trasforma un muro in linee e archi semplici, e a quel punto smette di essere un muro.
