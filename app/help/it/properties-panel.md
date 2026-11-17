---
title: Il pannello Proprietà
summary: Vedere e modificare tutto degli oggetti selezionati, molti insieme: coordinate con Z, dimensioni, testo, impostazioni di quotatura, trasparenza e altro. I campi accettano espressioni e lunghezze con unità.
keywords: totali, lunghezza totale, area totale, somma, lunghezza della selezione, proprietà, tavolozza proprietà, ctrl+1, pr, ch, mo, ddmodify, variabile, selezione rapida, pickadd, coordinate, z, quota altimetrica, spessore, trasparenza, materiale, collegamento ipertestuale, espressione, quickcalc, vertice, stile di quotatura, tolleranza, decimali
from: 10d6a829
---

## Cosa si impara

Come aprire il pannello Proprietà, modificare un oggetto o cento in un solo passo, digitare coordinate esatte (con Z), usare espressioni e unità in ogni campo numerico, e cosa mostra ciascun tipo di oggetto.

## Aprirlo

Il pannello si trova a destra. Per portarlo in primo piano:

- Premere {{key:Mod+1}}, oppure digitare {{cmd:PROPERTIES}} (o `PR`, `CH`, `MO`).
- Fare doppio clic su un oggetto (il testo e le multilinee aprono invece il loro editor di testo).

Il pannello è mobile come gli altri: trascinare la sua maniglia per ancorarlo a sinistra, a destra o in basso, oppure rilasciarlo sopra il disegno per renderlo mobile (vedi [Disporre i pannelli e usare un secondo monitor](common:arrange-panels)).

### Ripiegarlo

Il pulsante con la puntina in alto a destra del pannello attiva la **chiusura automatica**: il pannello si ripiega in una striscia sul bordo destro e il disegno ottiene lo spazio. Puntare la striscia (o premere {{key:Mod+1}}) e il pannello si apre sopra il disegno; allontanarsi e si ripiega di nuovo. Fare clic di nuovo sulla puntina per tenerlo aperto. {{cmd:PROPERTIESCLOSE}} lo ripiega anch'esso.

## Sezioni

Le proprietà sono raggruppate in sezioni ripiegabili: **Generale**, **Geometria**, **Testo**, **Linee e frecce**, **Adatta**, **Unità primarie**, **Unità alternative**, **Tolleranze**, **Motivo**, **Varie**, e per i blocchi **Attributi** ed **Elemento della libreria**. Fare clic sul nome di una sezione per ripiegarla o aprirla; CadCraft ricorda quali sono state ripiegate.

Trascinare la sottile linea tra i nomi e i valori per allargare o restringere i nomi. Fare doppio clic per ripristinarla. Con la tastiera, metterla a fuoco e usare i tasti freccia.

## Cambiare un valore

1. Fare clic su una riga. L'intestazione riporta "Linea".
2. Fare clic in {{ui:Lunghezza}}. Durante la modifica il campo mostra il valore completo, non quello arrotondato.
3. Digitare `2500` e premere {{key:Enter}}. La linea ora è lunga 2500, mantenendo il suo punto iniziale e il suo angolo.

{{key:Enter}} o fare clic altrove applica il valore; {{key:Esc}} rimette il valore precedente. Ogni modifica è un unico passo di annulla.

### Espressioni e unità

Ogni campo numerico accetta più di un semplice numero:

| Si digita | Si ottiene |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (pollici, in un disegno in piedi e pollici) |
| `900mm`, `3.5m`, `2ft` | Convertiti nelle unità del disegno |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (campi angolo) |
| `0.5r`, `100g` | Radianti e gon, convertiti in gradi |

Un valore con un'unità richiede che il disegno abbia delle unità: impostare prima {{ui:Unità}} in {{ui:Nuovi oggetti}} (con nulla selezionato). Un inserimento errato viene rifiutato con un avviso sotto il pannello e nulla cambia; non viene mai salvato come 0. Funzioni: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; gli angoli sono in gradi.

## Modificare molti oggetti insieme

1. Selezionare più oggetti, per esempio 8 linee e 4 quote.
2. L'intestazione dice "12 oggetti", e un elenco in alto offre **Tutti (12)**, **Linea (8)** e **Quota (4)**.
3. **Tutti** mostra ciò che ha ogni oggetto (layer, colore, tipo di linea…). Scegliere **Quota (4)** per vedere le impostazioni di quotatura.
4. Modificare un valore, per esempio {{ui:Decimali}} a `1`.

Tutte e quattro le quote cambiano, in un unico passo di annulla. Un campo che riporta **Variabile** significa che gli oggetti differiscono; digitare un valore lo imposta su tutti. Gli oggetti su layer bloccati restano invariati, e l'avviso indica quanti sono.

## Totali di una selezione

Con più oggetti selezionati, la sezione {{ui:Totali}} in alto indica:

- **Oggetti**: quanti per tipo, per esempio "8 linee, 2 polilinee, 1 cerchio".
- **Lunghezza totale**: la somma di linee, archi e polilinee (anche le spline contano), e quanti oggetti sono.
- **Area totale**: la somma di quelli chiusi: cerchi, ellissi complete, polilinee chiuse e tratteggi (i fori di un tratteggio vengono sottratti).

Sono nel formato di lunghezza del disegno (piedi e pollici quando lo usa; le aree allora in pollici quadrati e piedi quadrati).
La barra di stato mostra la stessa lunghezza e area ogni volta che ci sono oggetti selezionati; {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Lunghezza e area della selezione}} › {{ui:Nascosto}} la disattiva. Per un solo oggetto, {{ui:Geometria}} mostra la sua lunghezza e area, come prima.

## Coordinate

Ogni punto mostra **X**, **Y** e **Z**: inizio e fine di una linea, centri, punti di inserimento, posizioni del testo, il vertice corrente di una polilinea. Le linee mostrano anche **Delta X**, **Delta Y** e **Delta Z** (sola lettura). Polilinee e tratteggi hanno una **Quota altimetrica** (una sola Z per tutto l'oggetto).

Il pulsante a mirino accanto al nome di un punto permette di sceglierlo nel disegno: fare clic su di esso, poi sulla nuova posizione (gli snap funzionano). I valori sono coordinate globali.

## Generale

| Campo | Cos'è |
|---|---|
| {{ui:Layer}}, {{ui:Colore}}, {{ui:Tipo di linea}}, {{ui:Scala del tipo di linea}}, {{ui:Spessore di linea}} | Come nel pannello dei layer; {{ui:Per layer}} segue il layer |
| {{ui:Trasparenza}} | Per layer, per blocco, oppure da 0 a 90% |
| {{ui:Spessore}} | Quanto linee, cerchi, archi, polilinee, punti e testo si estendono in Z |
| {{ui:Materiale}} | Per layer, per blocco, Globale oppure un nome portato da un disegno |
| {{ui:Stile di stampa}} | Sola lettura: i disegni si stampano per colore, tramite la [tabella degli stili di stampa](topic:plot-pdf#plot-style-tables) della tavola |
| {{ui:Collegamento ipertestuale}} | Un indirizzo web conservato con l'oggetto |

## Cosa mostra ogni tipo

| Selezionato | Si può modificare |
|---|---|
| Linea | X, Y, Z di inizio e fine; lunghezza; angolo |
| Cerchio | Centro; raggio; diametro; circonferenza; area (ciascuno imposta il raggio) |
| Arco | Centro; raggio; angolo di inizio e fine; angolo totale; corda (mostra lunghezza dell'arco e area) |
| Ellisse | Centro; raggio maggiore e minore; rapporto dei raggi; angolo dell'asse maggiore; angolo di inizio e fine |
| Polilinea | Il browser dei vertici (sotto); larghezza globale; quota altimetrica; chiusa; area quando è chiusa (la scala rispetto al suo centro) |
| Testo | Contenuto; stile; allineamento; altezza; rotazione; fattore di larghezza; angolo di inclinazione; larghezza definita; interlinea; annotativo; posizione |
| Riferimento a blocco | Punto di inserimento; rotazione; scala X, Y, Z e scala uniforme; valori degli attributi |
| Tratteggio | Motivo; scala; angolo; origine; associativo; rilevamento delle isole; colore di sfondo; quota altimetrica |
| Quota | Vedi sotto |
| Linea di richiamo multipla | Testo; altezza; larghezza; lato del testo; dimensione della freccia; distanza di atterraggio; punto della freccia |
| Viewport | Scala; centro e dimensione sul foglio; centro della vista nel modello; attivo; visualizzazione bloccata |

### Vertici della polilinea

{{ui:Vertice corrente}} indica a quale vertice appartengono i campi sotto. Usare i pulsanti freccia, oppure digitare un numero, per passare a un altro vertice; non c'è limite al numero. Ogni vertice ha X, Y, la larghezza del segmento iniziale e finale, e il bulge del segmento che parte da lì (0 = dritto).

## Quote

Una quota mostra il suo **Stile di quotatura**, ciò che misura, i suoi punti e ogni impostazione:

- **Linee e frecce:** punta della freccia per ciascuna estremità, dimensione della freccia, dimensione del segno, colori e spessori delle linee di quota e di riferimento, nascondere una delle due metà o una delle linee di riferimento, distanza e prolungamento delle linee di riferimento.
- **Testo:** sostituzione (lasciare vuoto per il valore misurato; `<>` lo rappresenta dentro il proprio testo), stile, colore, altezza, distanza, posizione verticale e orizzontale, sempre orizzontale, rotazione, riempimento di sfondo.
- **Adatta:** scala complessiva, spaziatura delle linee di base, cosa si sposta quando manca spazio, spostamento del testo.
- **Unità primarie:** formato, decimali, arrotondamento, prefisso, suffisso, scala di misura, separatore decimale, sopprimere gli zeri iniziali e finali; per gli angoli, il formato e i decimali dell'angolo.
- **Unità alternative:** attive o no, formato, decimali, moltiplicatore (25.4 converte i pollici in millimetri), arrotondamento, prefisso e suffisso.
- **Tolleranze:** nessuna, simmetrica, scostamento, limiti o base, con valori superiore e inferiore, decimali, altezza e posizione.

Modificare una di queste impostazioni su una quota aperta elimina il disegno che ne aveva fatto l'altro programma, e CadCraft lo ridisegna.

:::note
La posizione orizzontale del testo (accanto alla prima o alla seconda linea di riferimento) e il testo sotto la linea vengono disegnati sulle quote lineari e allineate; sulle altre quote vengono conservati e salvati ma non ancora disegnati. Le scelte di Adatta vengono conservate e salvate ma non ancora disegnate: CadCraft posiziona il testo con la propria regola (sopra la linea, fuori quando non ci sta).
:::

## Nulla selezionato

Con nulla selezionato il pannello mostra:

- **Nuovi oggetti:** il layer, il colore, il tipo di linea, lo spessore di linea e l'altezza del testo che ricevono i nuovi oggetti; le unità del disegno e il formato di lunghezza; il tipo di linea e lo spessore del layer corrente; le dimensioni per le nuove quote. Su una tavola, il nome della tavola, la carta e l'orientamento vengono prima.
- **Vista:** il centro, l'altezza e la larghezza di ciò che si vede. Digitare un valore per spostare la vista lì.
- **Varie:** l'icona UCS attiva o no, l'UCS (sempre Globale: CadCraft non ha ancora sistemi di coordinate utente) e la scala di annotazione.

## I pulsanti in alto

| Pulsante | Fa |
|---|---|
| Imbuto | {{cmd:QSELECT}}: seleziona per tipo e proprietà |
| Freccia | {{cmd:SELECT}}: seleziona oggetti dalla riga di comando |
| Più o 1 | Se un clic aggiunge alla selezione (più) o la sostituisce (1); la stessa impostazione di {{ui:Impostazioni}}, {{ui:CadCraft}} |
| Puntina | Chiusura automatica, sopra |

## Errori comuni

- **Digitare in un campo non ha fatto nulla.** Premere {{key:Enter}} o fare clic altrove per applicarlo. Un campo rosso e un avviso significano che l'inserimento è stato rifiutato.
- **Una lunghezza con unità viene rifiutata.** Il disegno non ha unità. Impostare {{ui:Unità}} con nulla selezionato.
- **Si vedono solo Layer e Colore.** Sono selezionati più tipi di oggetti ed è scelto **Tutti**. Scegliere un tipo nell'elenco in alto.
- **Alcuni oggetti non sono cambiati.** Sono su un layer bloccato. Sbloccare il layer nel pannello dei layer.
- **I caratteri digitati sono finiti in un campo.** Mentre un campo ha il cursore, i tasti scrivono lì. Premere {{key:Enter}} o {{key:Esc}}, poi digitare il comando.
