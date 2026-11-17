---
title: Forme, tagli, offset e bloccaggi per i muri 2D
summary: Disegnare muri come rettangoli, poligoni e archi, dividerli e ricongiungerli, spostarli di una quota, e bloccare un muro a un altro o a una linea di griglia. Gli stessi strumenti dei muri di BimCraft.
keywords: muro, muri, barra dei muri, pulsanti dei muri, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stile di unione, 45°, piatta, squadra, lucchetto, grip, trascina estremità, ruota, non consentire unione, bloccaggio, linea di griglia, dividi, intervallo, offset, linea di posizione, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unione
from: f41e7433
---

Questi strumenti lavorano sui muri 2D creati con `WALL` (vedere "Disegnare muri, porte e finestre intelligenti in 2D"). Usano le stesse regole degli strumenti muro di BimCraft, quindi un muro si comporta allo stesso modo in entrambi.

## Dove sono gli strumenti

- Nella barra degli strumenti, il gruppo {{ui:Muri}} contiene {{ui:Muro}}, {{ui:Rettangolo}}, {{ui:Dividi}} e {{ui:Offset}}. Il suo menu {{ui:Altro}} contiene tutti gli altri strumenti muro, ciascuno con la sua icona.
- Negli stili di menu a barra multifunzione, la scheda {{ui:Muri}} ha i pannelli {{ui:Disegna muri}}, {{ui:Taglia}}, {{ui:Imposta e modifica}}, {{ui:Mantieni}} e {{ui:Unisci}}.
- In una tavola (layout), le righe degli strumenti e la casella degli strumenti mostrano lo stesso gruppo {{ui:Muri}}.
- Si possono anche digitare tutti i comandi elencati sotto.

## Le unioni sono memorizzate

Quando l'estremità di un muro cade su un altro muro, CadCraft salva quell'unione con entrambi i muri. Non ricalcola più le unioni dalla posizione in cui si trovano le estremità. Quindi:

- I muri uniti a un muro spostato lo seguono e restano uniti. Le loro estremità scorrono lungo le proprie linee, quindi nulla ruota.
- Trascinando un'estremità di un muro con il suo grip, anche il muro unito lì mantiene la sua direzione. La sua estremità scorre lungo la propria linea per incontrare il muro trascinato, quindi l'estremità trascinata cade su quella linea, non sempre sotto il cursore. L'anteprima mostra dove. Un muro che si appoggia al muro trascinato segue lungo la sua linea. Trascinando l'estremità lungo il muro se ne cambia la lunghezza, e il muro unito lì si sposta con essa.
- `ROTATE` su un muro unito funziona allo stesso modo: le estremità dei vicini scorrono lungo le proprie linee fino al muro ruotato.
- Per spostare un angolo, selezionare entrambi i muri che vi si incontrano e trascinare il grip sull'angolo. Entrambi restano sull'angolo e ruotano entrambi. I muri più avanti restano come erano.
- Tenere premuto {{key:Alt}} quando si clicca la nuova posizione del grip per rompere le unioni di proposito: il muro va dove lo si mette e nulla lo segue.
- Se un trascinamento farebbe ruotare un muro unito attraverso la propria estremità opposta, viene rifiutato e nulla cambia.
- Un muro disegnato con {{ui:Non consentire unioni}} (`D` in `WALL`), oppure disattivato nelle Proprietà ({{ui:Non consentire unione all'inizio}}, {{ui:Non consentire unione alla fine}}), resta libero a quell'estremità, anche se tocca un altro muro, finché non lo si riabilita.
- `WALLDISJOIN` ({{ui:Non consentire unione}} nel gruppo {{ui:Muri}}) fa lo stesso con un clic: cliccare un muro vicino a un'estremità per vietare le unioni a quell'estremità, e cliccarlo di nuovo per consentirle.
- Un disegno più vecchio non ha ancora unioni memorizzate. La prima modifica le trova una volta, dallo stato dei muri prima della modifica, e le salva. `WALLJOINS` lo fa subito.
- I file DWG e DXF contengono le unioni all'interno di ciascun muro. CadCraft le rilegge come salvate. Un programma che non conserva i dati estesi mostra i muri come blocchi semplici e perde le unioni; un'unione i cui muri sono stati spostati in un altro programma viene persa alla prossima modifica di uno dei due muri.

## Stile di unione di un angolo

Un angolo dove due muri si incontrano testa a testa viene disegnato a {{ui:45°}} a meno che non si scelga un altro stile.

- `WALLJOINSTYLE` ({{ui:Stile di unione}} nel gruppo {{ui:Muri}}): cliccare l'angolo. Ogni clic passa allo stile successivo: {{ui:45°}}, {{ui:Piatta}}, {{ui:Squadra}}, poi di nuovo {{ui:45°}}. Digitare `T` per scegliere quale dei due muri passa attraverso l'angolo cliccato per ultimo. Premere {{key:Enter}} per terminare. Una esecuzione del comando è un solo passo di annullamento.
- {{ui:Piatta}}: un muro passa fino alla faccia lontana dell'altro, e l'altro si ferma contro il suo lato. {{ui:Squadra}}: lo stesso, ma il muro che passa termina perpendicolare a se stesso. Ad angolo retto i due risultati sono uguali.
- Nelle Proprietà di un muro: {{ui:Stile di unione all'inizio}}, {{ui:Stile di unione alla fine}}, e {{ui:Passa attraverso all'inizio}}, {{ui:Passa attraverso alla fine}}.
- Lo stile è salvato con entrambi i muri e viaggia nei file DWG e DXF. Una copia di un muro nasce senza.
- Un'unione a T non ha stile da scegliere: passa il muro il cui lato viene toccato. Un angolo dove si incontrano tre o più muri resta a {{ui:45°}}. Così anche un angolo molto acuto (sotto circa 30 gradi) e due muri in linea.

## Disegnare forme di muri

Ciascuna crea i muri in un solo passo di annullamento, con gli angoli uniti. In `WALL`, `O` imposta un offset di posizionamento (quanto a sinistra dei clic va il muro) e `D` disattiva l'unione per i muri che si disegnano dopo.

- `WALLRECT` (`WR`): due angoli opposti, come `RECTANG`.
- `WALLROT`: il primo lato, poi quanto è lontano l'altro lato, per un rettangolo a qualsiasi angolo.
- `WALLPOLY` (`WP`): il numero di lati (da 3 a 64), il centro, `I` per inscritto o `C` per circoscritto, poi il raggio, come `POLYGON`.
- `WALLARC` (`WARC`): centro, inizio, fine. `D` inverte il verso dell'arco.
- `WALLTAN`: cliccare vicino all'estremità di un muro, poi l'estremità dell'arco, che parte lungo quel muro.
- `WALLPICK`: cliccare una linea o una polilinea e indicare se prendere anche le linee unite a essa.
- `WALLTRACE`: cliccare dentro un'area chiusa di linee e muri per mettere dei muri attorno alla più piccola.

I muri in pianta sono rettilinei, quindi un arco viene disegnato come brevi muri rettilinei di 15 gradi ciascuno. Si uniscono come qualsiasi angolo.

## Tagliare muri

- `WALLSPLIT` (`WS`): cliccare il muro, poi il punto. `C` taglia dove un altro muro lo attraversa, `G` lascia uno spazio tra le parti, `F` rende le estremità del taglio libere invece che unite. La prima parte mantiene il posto del muro nel disegno, e porte e finestre seguono la loro parte. Un taglio attraverso una porta o una finestra viene rifiutato.
- {{ui:Dividi con intervallo}} (`WALLSPLITGAP`): la stessa divisione, ma chiede prima l'intervallo.
- `WALLDELSEG`: cliccare il muro, poi le due estremità del pezzo da eliminare.
- `WALLREJOIN`: cliccare due parti di uno stesso muro per riunirle in una.

## Spostare muri di una distanza

- `WALLDIM`: cliccare una quota lineare o allineata che va da un muro all'altro, poi digitare il nuovo valore. Il muro all'estremità lontana si sposta perpendicolare a se stesso, il muro al primo estremo resta fermo, e i muri uniti a esso seguono.
- `WALLOFFSET` (`WO`): cliccare un muro, poi il lato a cui spostarlo (`D` digita una distanza, `C` crea una copia).
- `WALLSTRETCH`: una finestra attorno alle estremità dei muri, poi un punto base e un secondo punto.
- Nelle Proprietà, una {{ui:Lunghezza}} digitata mantiene il punto di partenza e porta con sé il muro unito all'estremità lontana, e un nuovo {{ui:Spessore}} cresce a partire dalla {{ui:Linea di posizione}} scelta (la faccia sinistra, la faccia destra o il centro).

## Bloccare muri

Un bloccaggio resta con il muro nel file. Se si sposta un muro bloccato, l'altro lo segue. Se una modifica sposta i due muri in modi diversi, viene rifiutata e nulla cambia.

- `WALLHOLD`: blocca un muro a un altro muro. `A` lo sposta prima sulla linea dell'altro muro, `K` mantiene la distanza che ha.
- `WALLHOLDDIM`: blocca la distanza tra due muri paralleli.
- `WALLGRID`: blocca un muro a una linea di griglia (una linea su un layer di griglia con la sua etichetta come testo a un'estremità), lungo di essa oppure con un'estremità su di essa. Un muro bloccato lungo la linea mantiene la distanza che ha da essa. Spostando la linea di griglia con `GRIDMOVE`, il muro la segue intero, con i muri uniti. Un muro che giace lungo una linea di griglia si sposta intero con essa anche senza blocco, e un muro che termina soltanto sulla linea viene allungato da quell'estremità.
- `WALLHOLDS` elenca i bloccaggi. `WALLUNHOLD` toglie i bloccaggi da un muro.
- Ogni bloccaggio mostra un piccolo lucchetto sulla pianta: accanto al centro del muro bloccato, oppure accanto all'estremità bloccata a una linea di griglia. Cliccare un lucchetto per toglierlo.

## Cosa non c'è ancora

I bloccaggi usano le linee centrali dei muri. Qui i muri non hanno layer, quindi non c'è una priorità di layer in un incrocio, e i muri non sono curvi (vedere gli archi sopra). Nessuno ha ancora provato questi strumenti su un disegno grande, e non sono stati verificati in un altro programma CAD.
