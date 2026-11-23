---
title: Forme dei muri, tagli, offset e blocchi per muri 2D
summary: Disegnare muri come rettangoli, poligoni e archi, dividerli e ricongiungerli, spostarli di una quota, e bloccare un muro a un altro o a una linea di griglia. Gli stessi strumenti dei muri di BimCraft.
keywords: muro, barra muri, pulsanti muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stile di giunzione, 45°, piatta, squadra, lucchetto, grip, trascina estremità, ruota, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unisci, disattiva unione, blocco, linea di griglia, dividi, intervallo, offset, linea di posizione
from: 49044181
---

Questi strumenti lavorano sui muri 2D creati con `WALL` (vedere "Disegnare muri, porte e finestre intelligenti in 2D"). Usano le stesse regole degli strumenti muro di BimCraft, così un muro si comporta allo stesso modo in entrambi.

## Dove sono gli strumenti

- Nella barra degli strumenti, il gruppo {{ui:Walls}} ha {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} e {{ui:Offset}}. Il suo menu {{ui:More}} contiene tutti gli altri strumenti muro, ciascuno con la sua icona.
- Negli stili a barra multifunzione, la scheda {{ui:Walls}} ha i pannelli {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} e {{ui:Join}}.
- In un layout, le righe degli strumenti e la casella degli strumenti mostrano lo stesso gruppo {{ui:Walls}}.
- Si può anche digitare qualsiasi comando elencato sotto.

## Le giunzioni sono memorizzate

Quando l'estremità di un muro cade su un altro muro, CadCraft salva quella giunzione con entrambi i muri. Non ricalcola più le giunzioni da dove capitano le estremità. Quindi:

- I muri uniti a un muro che si sposta lo seguono e restano uniti. Le loro estremità scorrono lungo le proprie linee, quindi nulla gira.
- Trascinando un'estremità di muro con il suo grip, il muro unito lì mantiene anche la sua direzione. La sua estremità scorre lungo la propria linea per incontrare il muro trascinato, quindi l'estremità trascinata cade su quella linea, non sempre sotto il cursore. L'anteprima mostra dove. Un muro che entra nel muro trascinato segue lungo la propria linea. Trascinando l'estremità direttamente lungo il muro se ne cambia la lunghezza, e il muro unito lì si muove con essa.
- {{cmd:ROTATE}} su un muro unito funziona allo stesso modo: le estremità dei vicini scorrono lungo le proprie linee fino al muro ruotato.
- Per spostare un angolo, selezionare entrambi i muri che vi si incontrano e trascinare il grip sull'angolo. Entrambi i muri restano sull'angolo e ruotano entrambi. I muri più lontani restano come erano.
- Tenere premuto {{key:Alt}} quando si fa clic sulla nuova posizione del grip per rompere le giunzioni di proposito: il muro va dove lo si mette e nulla lo segue.
- Se un trascinamento farebbe ruotare un muro unito attraverso la sua estremità lontana, viene rifiutato e nulla cambia.
- Un muro disegnato con {{ui:Disallow joins}} (`D` in `WALL`), oppure disattivato in Proprietà ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), resta libero a quell'estremità, anche se tocca un altro muro, finché non lo si consente di nuovo.
- `WALLDISJOIN` ({{ui:Disallow join}} nel gruppo {{ui:Walls}}) fa lo stesso con un clic: fare clic su un muro vicino a un'estremità per impedire le unioni a quell'estremità, e fare clic di nuovo per consentirle.
- Un disegno più vecchio non ha ancora giunzioni memorizzate. La prima modifica le trova una volta, a partire da come stavano i muri prima della modifica, e le salva. `WALLJOINS` lo fa subito.
- I file DWG e DXF portano le giunzioni dentro ciascun muro. CadCraft le rilegge come salvate. Un programma che non conserva dati estesi mostra i muri come blocchi semplici e perde le giunzioni, e una giunzione i cui muri sono stati spostati in un altro programma viene persa alla modifica successiva di uno dei due muri.

## Stile di giunzione di un angolo

Un angolo dove due muri si incontrano punta a punta è disegnato a 45° a meno che non si scelga un altro stile.

- `WALLJOINSTYLE` ({{ui:Join style}} nel gruppo {{ui:Walls}}): fare clic sull'angolo. Ogni clic passa allo stile successivo: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, poi di nuovo {{ui:Mitre}}. Digitare `T` per cambiare quale dei due muri passa all'angolo cliccato per ultimo. Premere {{key:Enter}} per terminare. Un'esecuzione del comando è un solo passo di annullamento.
- {{ui:Butt}}: un muro attraversa fino alla faccia lontana dell'altro, e l'altro si ferma contro il suo lato. {{ui:Square off}}: lo stesso, ma il muro che attraversa termina squadrato su sé stesso. Ad angolo retto i due sono uguali.
- In Proprietà di un muro: {{ui:Join style at start}}, {{ui:Join style at end}}, e {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Lo stile è salvato con entrambi i muri e viaggia nei file DWG e DXF. Una copia di un muro parte senza.
- Una giunzione a T non ha stile da scegliere: passa il muro il cui lato viene incontrato. Un angolo dove si incontrano tre o più muri resta a 45°. Lo stesso vale per un angolo molto acuto (sotto circa 30 gradi) e per due muri in linea.

## Disegnare forme di muri

Ciascuna crea i muri in un solo passo di annullamento, con gli angoli uniti. In `WALL`, `O` imposta un offset di posizionamento (quanto a sinistra dei clic va il muro) e `D` disattiva l'unione per i muri successivi.

- `WALLRECT` (`WR`): due angoli opposti, come `RECTANG`.
- `WALLROT`: il primo lato, poi quanto è lontano l'altro lato, per un rettangolo a un angolo qualsiasi.
- `WALLPOLY` (`WP`): il numero di lati (da 3 a 64), il centro, `I` per inscritto oppure `C` per circoscritto, poi il raggio, come `POLYGON`: fare clic, oppure digitarlo (un raggio digitato va verso il puntatore, oppure lungo X quando il puntatore è ancora sul centro).
- `WALLARC` (`WARC`): centro, inizio, fine. `D` inverte il verso dell'arco.
- `WALLTAN`: fare clic vicino all'estremità di un muro, poi sull'estremità dell'arco, che parte lungo quel muro.
- `WALLPICK`: fare clic su una linea o polilinea e dire se prendere anche le linee unite ad essa.
- `WALLTRACE`: fare clic dentro un'area chiusa di linee e muri per mettere muri attorno alla più piccola.

I muri in pianta sono rettilinei, quindi un arco è disegnato come brevi muri dritti di 15 gradi ciascuno. Si uniscono come qualsiasi angolo.

## Tagliare muri

- `WALLSPLIT` (`WS`): fare clic sul muro, poi sul punto. `C` taglia dove un altro muro lo attraversa, `G` lascia un intervallo tra le parti, `F` rende le estremità tagliate libere invece che unite. La prima parte mantiene il posto del muro nel disegno, e porte e finestre seguono la loro parte. Un taglio attraverso una porta o una finestra viene rifiutato.
- `WALLSPLITGAP` ({{ui:Split with gap}}): la stessa divisione, ma chiede prima l'intervallo.
- `WALLDELSEG`: fare clic sul muro, poi sulle due estremità del pezzo da eliminare.
- `WALLREJOIN`: fare clic su due parti di un muro per riunirle.

## Spostare muri per distanza

- `WALLDIM` ({{ui:Edit by dimension}}): fare clic su una quota lineare o allineata che va da un muro a un altro, poi digitare il nuovo valore. Il muro all'estremità lontana si sposta squadrato su sé stesso, il muro al primo estremo resta fermo, e i muri uniti ad esso seguono. Il punto lontano della quota si sposta con il suo muro, quindi la quota mostra il valore digitato.
- `WALLOFFSET` (`WO`): fare clic su un muro, poi sul lato verso cui spostarlo (`D` digita una distanza, `C` crea invece una copia).
- `WALLSTRETCH`: una finestra attorno alle estremità del muro, poi un punto base e un secondo punto.
- In Proprietà, una {{ui:Length}} digitata mantiene l'inizio e trascina con sé il muro unito all'estremità lontana, e un nuovo {{ui:Thickness}} cresce a partire dalla {{ui:Location line}} scelta (la faccia sinistra, la faccia destra oppure il centro).

## Quota tra gli assi dei muri

L'asse di un muro non viene disegnato, ma lo snap a oggetto lo trova. Con lo snap a oggetto attivo ({{key:F3}}), spostare il puntatore sul centro dello spessore di un muro: il segno legge `Wall center: endpoint` oppure `Wall center: midpoint`, e l'asse appare come linea tratteggiata mentre il segno vi è sopra. Con {{ui:Perpendicular}} o {{ui:Nearest}} attivi nell'elenco degli snap a oggetto, questi funzionano anche sull'asse.

1. Avviare `DIMLINEAR` (oppure `DIMALIGNED`).
2. Fare clic sul primo muro dove il segno legge `Wall center: midpoint` oppure `Wall center: endpoint`.
3. Fare clic sul secondo muro allo stesso modo, poi fare clic dove va la linea di quota.
4. Per cambiare la distanza, avviare `WALLDIM`, fare clic sulla quota e digitare il nuovo valore. Si sposta il secondo muro.

Lo snap all'asse funziona in ogni comando che chiede un punto.

## Bloccare muri

Un blocco resta con il muro nel file. Se si sposta un muro bloccato, l'altro lo segue. Se una modifica sposta i due muri in modo diverso, viene rifiutata e nulla cambia.

- `WALLHOLD`: blocca un muro a un altro muro. `A` lo porta prima sulla linea dell'altro muro, `K` mantiene la distanza che ha.
- `WALLHOLDDIM`: blocca la distanza tra due muri paralleli.
- `WALLGRID`: blocca un muro a una linea di griglia (una linea su un layer di griglia con la sua etichetta in testo a un'estremità), lungo di essa oppure con un'estremità su di essa. Un muro bloccato lungo la linea mantiene la distanza che ha da essa. Spostare la linea di griglia con `GRIDMOVE` e il muro la segue per intero, insieme ai muri uniti. Un muro che giace lungo una linea di griglia si muove per intero con essa anche senza blocco, e un muro che termina soltanto sulla linea viene allungato da quell'estremità.
- `WALLHOLDS` elenca i blocchi. `WALLUNHOLD` toglie i blocchi da un muro.
- Ogni blocco mostra un piccolo lucchetto sulla pianta: accanto al centro del muro bloccato, oppure accanto all'estremità bloccata a una linea di griglia. Fare clic su un lucchetto per togliere quel blocco.

## Cosa non c'è ancora

I blocchi usano le linee centrali dei muri. I muri qui non hanno layer, quindi non c'è priorità di layer in una giunzione, e i muri non si curvano (vedere gli archi sopra). Nessuno ha ancora provato questi strumenti su un disegno grande, e non sono stati verificati in un altro programma CAD.
