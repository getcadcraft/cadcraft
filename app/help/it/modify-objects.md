---
title: Sposta, copia, ruota, scala, specchia, stira e serie
summary: Disporre dei mobili in una stanza con i comandi di modifica di base, usando punti base, distanze digitate e annulla.
keywords: sposta, copia, ruota, scala, specchio, stira, serie, unisci, matchprop, copia proprietà, pennello, arrayrect, arraypolar, serie polare, cancella, esplodi, annulla, ripristina, punto base, spostamento, modifica, allinea, distribuisci, allinea in linea, spaziatura uniforme
from: 8eaeee6c
---

## Cosa si realizza

Un tavolo con una sedia, copiata intorno al tavolo, ruotata, specchiata e ridimensionata. Nel corso dell'operazione si usano {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} e {{cmd:UNDO}}.

## Disegnare i pezzi

1. Digitare `REC` e premere {{key:Enter}}, digitare `0,0` e premere {{key:Enter}}, quindi digitare `@1800,900` e premere {{key:Enter}}. Questo è il tavolo.
2. Digitare `REC` e premere {{key:Enter}}, digitare `300,-700` e premere {{key:Enter}}, quindi digitare `@450,450` e premere {{key:Enter}}. Questa è una sedia, sotto il tavolo.
3. Fare clic su {{ui:Estensione}}.

## Sposta: punto base, poi secondo punto

Ogni spostamento, copia, rotazione e scala parte da un **punto base**: il punto che viene trascinato con l'oggetto, oppure attorno al quale l'oggetto ruota.

1. Fare clic sulla sedia per selezionarla.
2. Digitare `M` e premere {{key:Enter}}. La cronologia riporta `1 trovato`.
3. In corrispondenza di `Specificare il punto base`, agganciare l'angolo superiore sinistro della sedia (Punto finale) e fare clic.
4. In corrispondenza di `Specificare il secondo punto`, digitare `@0,200` e premere {{key:Enter}}.

La sedia sale di 200, avvicinandosi al tavolo.

:::tip
Digitare `D` in corrispondenza di `Specificare il punto base` per indicare invece uno spostamento: CadCraft chiede `Specificare lo spostamento`, e si digita quanto spostarsi in orizzontale e in verticale, ad esempio `0,200` (senza bisogno di `@`).
:::

## Copia, quante volte si vuole

1. Fare clic sulla sedia.
2. Digitare `CO` e premere {{key:Enter}}.
3. Agganciare l'angolo inferiore sinistro della sedia e fare clic come punto base.
4. Digitare `@600,0` e premere {{key:Enter}}. Compare una copia spostata di 600 a destra.
5. Digitare di nuovo `@600,0` e premere {{key:Enter}}. Compare una seconda copia a 1200 a destra dell'originale.
6. Premere {{key:Enter}} per terminare il comando.

{{cmd:COPY}} continua fino a quando si preme {{key:Enter}}. Ogni copia è collocata in base alla distanza tra il punto base e il punto indicato. Un punto con `@` si calcola a partire dall'ultimo punto inserito, che dopo la prima copia è il punto di quella copia: quindi `@600,0` due volte produce copie a 600 e 1200. Digitare `U` e premere {{key:Enter}} per annullare l'ultima copia senza uscire dal comando.

Si dovrebbero vedere tre sedie in fila sotto il tavolo.

:::tip
{{cmd:COPY}} serve per copiare oggetti all'interno dello stesso disegno, collocati tramite un punto base. Per portare oggetti in un altro disegno o scheda, oppure per incollarli in seguito, usare gli Appunti: {{key:Mod+C}}, poi {{key:Mod+V}}. {{key:Mod+D}} crea una copia che segue il puntatore. Vedere [Copia, incolla e duplica](topic:copy-paste).
:::

## Specchia la fila dall'altro lato

1. Trascinare una finestra di intersezione (da destra a sinistra) sulle tre sedie, senza toccare il tavolo.
2. Digitare `MI` e premere {{key:Enter}}.
3. In corrispondenza di `Specificare il primo punto della linea di specchio`, agganciare il Punto medio del lato sinistro del tavolo e fare clic.
4. In corrispondenza di `Specificare il secondo punto della linea di specchio`, agganciare il Punto medio del lato destro del tavolo e fare clic.
5. In corrispondenza di `Cancellare gli oggetti di origine? [Sì (Y)/No] <N>`, premere {{key:Enter}} per conservarli.

Si dovrebbero vedere tre sedie sotto il tavolo e tre sedie specchiate sopra di esso. Il testo in una selezione specchiata resta leggibile: è collocato specchiato ma non scritto al contrario.

## Ruota una sedia

1. Fare clic sulla sedia più a destra sotto il tavolo.
2. Digitare `RO` e premere {{key:Enter}}.
3. Agganciare l'angolo inferiore destro della sedia e fare clic come punto base.
4. Digitare `90` e premere {{key:Enter}}.

La sedia ruota di 90 gradi in senso antiorario attorno al punto base. Un angolo negativo ruota in senso orario. Invece di digitare, è possibile fare clic su un secondo punto: l'angolo è misurato dal punto base a quel punto.

## Scala il tavolo

1. Selezionare il tavolo.
2. Digitare `SC` e premere {{key:Enter}}.
3. Agganciare l'angolo inferiore sinistro del tavolo e fare clic come punto base.
4. Digitare `1.2` e premere {{key:Enter}}.

Il tavolo è più grande del 20%, crescendo allontanandosi dal punto base. Un fattore inferiore a 1 lo rende più piccolo.

:::note
Se invece di digitare il fattore di scala si fa clic su un punto, il fattore è la distanza tra il punto base e quel punto. Fare clic a una unità di disegno di distanza dà un fattore 1. Di solito conviene digitare il numero.
:::

## Annulla e ripristina

- {{key:Mod+Z}}, il pulsante {{ui:Annulla}}, oppure `U` e poi {{key:Enter}} annulla l'ultimo comando. Un intero comando è un solo passaggio: annullare un {{cmd:COPY}} che ha creato cinque copie ne rimuove tutte e cinque.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, il pulsante {{ui:Ripristina}}, oppure `REDO` lo riporta indietro.
- La cronologia indica cosa è stato annullato ("Annullato COPY").

CadCraft conserva gli ultimi 500 passaggi. Le impostazioni dei layer (acceso, congela, blocca, colore) sono impostazioni, non modifiche, e non vengono annullate.

## Stira una stanza più larga

{{cmd:STRETCH}} (`S`, oppure {{ui:Stira}}) sposta solo ciò che si trova dentro una finestra di intersezione: gli angoli e le estremità delle linee comprese nella finestra si spostano, tutto il resto resta fermo, così la stanza si allarga invece di spostarsi.

1. Digitare `S` e premere {{key:Enter}}.
2. Trascinare una finestra da destra a sinistra sopra la parete destra, in modo che copra gli angoli della parete e le estremità di tutto ciò che la incontra.
3. Premere {{key:Enter}}.
4. Fare clic su un punto base, quindi digitare `@600,0` e premere {{key:Enter}}.

Il rettangolo è più largo di 600; le linee che terminavano sulla parete restano attaccate ad essa. Un arco con un estremo dentro conserva la sua altezza; cerchi e testi si spostano quando il loro centro o punto di inserimento è dentro; una quota misura la nuova lunghezza. Gli oggetti scelti uno per uno, senza una finestra, si limitano a spostarsi.

È anche possibile selezionare prima: trascinare la finestra di intersezione (o un lazo di intersezione) sopra la parete senza alcun comando in esecuzione, quindi digitare `S`. STRETCH usa quella selezione e allunga ciò che le sue finestre contengono, come se fossero state trascinate alla sua richiesta.

## Serie: righe e colonne, oppure intorno a un centro

{{cmd:ARRAY}} (`AR`, oppure {{ui:Serie}}) copia la selezione in una griglia o in un cerchio.

1. Selezionare una sedia, digitare `AR` e premere {{key:Enter}}. Premere {{key:Enter}} per Rettangolare.
2. Compare un'anteprima di 4 colonne e 3 righe. Digitare `COU`, premere {{key:Enter}}, quindi `5` per le colonne e `2` per le righe.
3. Digitare `S`, premere {{key:Enter}}, quindi `600` tra le colonne e `-900` tra le righe (negativo verso il basso).
4. Premere {{key:Enter}} per creare le copie.

Per un anello di sedie intorno a un tavolo, scegliere `PO` (Polare) invece, fare clic sul centro del tavolo e impostare `I` (elementi), `F` (angolo di riempimento: 360 per tutto il giro, 180 per metà) e `ROT` (se le copie ruotano per essere rivolte verso il centro). {{cmd:ARRAYRECT}} e {{cmd:ARRAYPOLAR}} saltano la domanda.

## Unisci i pezzi in una polilinea

{{cmd:JOIN}} (`J`, oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Unisci}}): selezionare linee, archi e polilinee aperte le cui estremità coincidono, quindi premere {{key:Enter}}. Diventano un'unica polilinea, chiusa se fanno un giro completo, che può poi essere sfalsata in una volta sola. Le linee che giacciono su una stessa retta diventano una sola linea anche con spazi tra di loro; gli archi di uno stesso cerchio diventano un solo arco, oppure il cerchio.

## Copia proprietà

{{cmd:MATCHPROP}} (`MA`, oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Copia proprietà}}): fare clic sull'oggetto del cui aspetto si vuole la copia, quindi selezionare gli oggetti da modificare e premere {{key:Enter}}. Questi assumono il suo layer e il suo colore; un testo assume la sua altezza, una quota le sue dimensioni, un tratteggio il suo motivo. Digitare `S` (Impostazioni) alla seconda domanda per escludere una qualsiasi di queste.

## Allinea oggetti

**Per punti.** {{cmd:ALIGN}} (`AL`, oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Allinea}}): selezionare gli oggetti e premere {{key:Enter}}, quindi fare clic su un punto di essi (l'origine) e sul punto in cui deve andare (la destinazione).

- Una coppia li sposta. Premere {{key:Enter}} in corrispondenza di `Specificare il secondo punto di origine` per fermarsi lì.
- Due coppie li ruotano anche, in modo che la linea tra i due punti di origine giaccia lungo la linea tra i due punti di destinazione. CadCraft chiede poi `Scalare gli oggetti in base ai punti di allineamento?`: `Y` li ingrandisce o riduce in proporzione.
- Una terza coppia li specchia quando i suoi due punti si trovano da lati opposti di quella linea.

**Bordi e spaziature.** {{ui:Modifica}} › {{ui:Altro}} › {{ui:Allinea e distribuisci}} (oppure `ALIGNPANEL`) apre un piccolo pannello sopra il disegno. Selezionare gli oggetti, quindi:

- scegliere con cosa allineare in {{ui:Allinea a}} (l'intera selezione, il primo o l'ultimo oggetto scelto, oppure un punto su cui si fa clic) e fare clic su {{ui:Sinistra}}, {{ui:Centro}}, {{ui:Destra}}, {{ui:Alto}}, {{ui:Al centro}} o {{ui:Sotto}};
- oppure scegliere {{ui:Spazi uguali}} o {{ui:Centri uguali}} e fare clic su {{ui:In orizzontale}} o {{ui:In verticale}}: i due oggetti esterni restano fermi, e i restanti sono distribuiti in modo uniforme tra di essi (almeno tre oggetti).

Ogni clic è un passaggio di annullamento, e la selezione resta, così è possibile provare un'altra soluzione. Ogni oggetto viene contato in base al suo riquadro di delimitazione, nel sistema di coordinate utente (UCS) quando ne è impostato uno. Dalla riga di comando si usano gli stessi comandi {{cmd:ALIGNTO}} e {{cmd:DISTRIBUTE}}.

## Cancella ed esplodi

- {{cmd:ERASE}} (`E`, oppure {{key:Delete}}) rimuove gli oggetti selezionati.
- {{cmd:EXPLODE}} (`X`) scompone una polilinea in linee e archi, un riferimento a blocco nei suoi oggetti, e una quota in linee, frecce e testo. Le quote esplose non si misurano più automaticamente.

## Errori comuni

- **Digitare una distanza senza `@` nel secondo punto.** `600,0` è il punto assoluto 600,0, non "600 a destra". Usare `@600,0`, oppure un semplice `600` con il mirino orientato nella direzione giusta.
- **La rotazione è andata nel verso sbagliato.** Gli angoli positivi ruotano in senso antiorario.
- **Annulla ha rimosso più del previsto.** Un solo annullamento riporta indietro l'intero ultimo comando, incluse tutte le copie che ha creato.
- **Il comando non ha chiesto di selezionare oggetti.** Gli oggetti erano già selezionati, quindi li ha usati. Premere prima {{key:Esc}} per iniziare senza nulla di selezionato.
