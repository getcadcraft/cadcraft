---
title: Spline e polilinee: SPLINE, SPLINEDIT, PEDIT
summary: Disegnare una curva morbida che passa per punti o da un poligono di controllo, modificarne i punti di interpolazione e di controllo, e modificare le polilinee (unisci, chiudi, larghezza, interpola, spline, rimuovi curvatura) oppure trasformare una spline in polilinea.
keywords: spline, splinedit, spl, spe, pedit, pe, punti di interpolazione, punti di controllo, pesi, nurbs, modifica polilinea, unisci, curva interpolata, rimuovi curvatura, converti in polilinea, precisione, tangente, curva, tolleranza di interpolazione
from: d31f72d8
---

## Che cosa si ottiene

Una curva che passa per cinque punti, poi la stessa curva modificata in tre modi, e una polilinea costruita con tre linee.

## Disegnare una spline per punti

1. Digitare `SPL` e premere {{key:Enter}}.
2. Fare clic o digitare i punti che la curva deve attraversare: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Premere {{key:Enter}} dopo l'ultimo.
3. {{ui:Tangente iniziale}}: fare clic su un punto verso cui la curva deve partire, oppure premere {{key:Enter}} per lasciare che decida. Fare lo stesso per la tangente finale.

La curva passa per ogni punto. Digitare `C` invece di premere {{key:Enter}} per chiuderla (la curva torna al primo punto). {{key:U}} (`Annulla`) toglie l'ultimo punto mentre si disegna.

### Disegnare da un poligono di controllo

Digitare `M` al primo prompt, poi `C` (Vertici di controllo) e un grado da 1 a 5 (3 è il valore usuale). Ora i punti scelti sono gli angoli di un poligono che tira la curva verso di sé; la curva inizia sul primo e termina sull'ultimo. Una curva chiusa gira intorno, senza angolo nel punto di giunzione.

### Trasformare una polilinea in spline

Al primo prompt digitare `O` (Oggetto) e selezionare polilinee o linee. Diventano spline che passano per i loro vertici; gli originali vengono eliminati.

## Modificare una spline

Selezionarla e digitare `SPE` (oppure digitare `SPE` e fare clic su di essa). I grip mostrano i punti di interpolazione (o i punti di controllo di una spline che non ne ha): trascinarne uno per rimodellare la curva. Al prompt:

- **Dati di interpolazione** (una spline disegnata per punti): `A` aggiunge un punto di interpolazione (fare clic dove), `D` ne elimina uno (fare clic vicino), `M` ne sposta uno (fare clic vicino, poi clic sulla nuova posizione), `T` imposta le tangenti finali, `P` elimina i punti di interpolazione, così da quel momento la spline viene modificata tramite i suoi punti di controllo.
- **Modifica vertice**: `A` aggiunge un punto di controllo senza cambiare la curva, `M` ne sposta uno, `W` assegna a uno un **peso** (sopra 1 avvicina la curva a esso, sotto 1 la lascia allontanare).
- **Apri** o **Chiudi**, e **Inverti** (la curva percorre l'altro verso).
- **converti in Polilinea** (`P`): la spline diventa una polilinea; la precisione è il numero di segmenti per ogni campata (10 è il valore usuale).
- **Annulla** toglie l'ultima modifica; **Esci (X)** termina.

{{ui:Proprietà}} mostra il grado della spline, quanti punti di interpolazione e di controllo ha, la sua lunghezza, e permette di aprirla o chiuderla.

## Modificare una polilinea

Selezionare una polilinea e digitare `PE`. Una linea, un arco o una spline scelti vengono prima proposti come polilinea da convertire (per una spline viene chiesta la precisione).

- **Chiudi** / **Apri** unisce o separa le estremità.
- **Unisci** aggiunge linee, archi e polilinee le cui estremità coincidono con quella della polilinea. `Distanza di tolleranza` è quanto possono distare le estremità restando unite (0 significa che devono coincidere).
- **Larghezza** assegna alla polilinea intera una sola larghezza (0 la rimuove).
- **Interpola** sostituisce la polilinea con una curva morbida che passa per i suoi vertici; **Spline** con una B-spline cubica che li segue (parte e termina sul primo e sull'ultimo vertice e resta vicina agli altri). Entrambe diventano una polilinea di segmenti brevi, e gli angoli originali vengono conservati, così **Rimuovi curvatura** li ripristina.
- **Gen. tipo linea** indica se un tipo di linea tratteggiata continua per tutta la polilinea oppure ricomincia a ogni vertice.
- **Inverti** cambia l'ordine dei suoi vertici. **Multiplo** (`M` al primo prompt) modifica più polilinee con le stesse opzioni.

Modificare i vertici di una polilinea in {{ui:Proprietà}} o con i grip resta come prima: PEDIT non ha un editor di vertici.

## Nei file

DWG e DXF 2000 conservano una spline come spline: grado, punti di controllo, nodi, pesi, punti di interpolazione e tangenti. Una spline aperta e non modificata viene riscritta esattamente com'era. DXF R12 non prevede le spline: viene salvata come polilinea lungo la curva, e la cronologia indica quanti segmenti.

Offset, rifila, estendi, raccordo, spezza e unisci non funzionano sulle spline. Usare {{cmd:EXPLODE}} su una spline, oppure {{cmd:PEDIT}} su di essa, per ottenere una polilinea che quei comandi accettano.

## Errori comuni

- **La curva supera tra punti vicini.** Una curva per punti si piega dove si piegano i punti. Usarne meno, oppure un poligono di controllo.
- **"That is not a spline."** SPLINEDIT accetta solo spline; {{cmd:PEDIT}} modifica le polilinee.
- **Una spline chiusa per interpolazione ha una forma leggermente diversa in un altro programma.** CadCraft la chiude con un unico giunto morbido nel primo punto; un altro programma potrebbe chiuderla con una curva periodica. Una spline chiusa per punti di controllo è identica in entrambi.
