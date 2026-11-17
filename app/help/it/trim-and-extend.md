---
title: Rifilare ed estendere
summary: Accorciare le linee fino alle linee che le attraversano e allungarle fino a toccarne altre, un pezzo alla volta o molti insieme trascinando un percorso attraverso di esse.
keywords: trimextendmode, trascinamento a finestra, rifila, estendi, tr, ex, rifila rapida, trascina, mano libera, percorso, recinto, intersezione, shift, bordi di taglio, bordi di contorno, edgemode, modalità, standard, rapida, cancella, anteprima, muri, pulizia
from: 25fbc5bd
---

## Cosa si imparerà

Come funzionano {{cmd:TRIM}} ed {{cmd:EXTEND}}, e i modi rapidi per usarli: trascinare attraverso molti pezzi in una volta, tenere premuto {{key:Shift}} per passare dal rifilare all'estendere, e vedere che cosa sparirà prima di fare clic.

## Rifilare un pezzo

1. Disegnare una linea orizzontale lunga e due linee corte che la attraversano.
2. Digitare `TR` e premere {{key:Enter}}. La cronologia dice `Current settings: Quick mode, edges: No extend`.
3. Posare il puntatore sulla linea lunga tra le due corte. Quel pezzo diventa grigio e tratteggiato: è ciò che sparirà.
4. Fare clic. Il pezzo scompare.
5. Premere {{key:Enter}} per terminare il comando.

In modalità Rapida (predefinita) ogni oggetto visibile è un bordo di taglio, quindi non occorre scegliere prima i bordi. Fare clic sul pezzo da eliminare. Un oggetto che niente attraversa viene cancellato intero, e la cronologia lo dice.

## Rifilare molti pezzi con un trascinamento

1. Disegnare una linea orizzontale lunga e dieci linee verticali corte che la attraversano.
2. Digitare `TR` e premere {{key:Enter}}.
3. Premere il pulsante del mouse sopra la linea lunga, a sinistra della prima linea verticale, e trascinare attraverso tutte e dieci sopra la linea lunga.

Durante il trascinamento il percorso appare come una linea tratteggiata, e ogni pezzo attraversato diventa grigio. Rilasciare: tutti e dieci i pezzi superiori vengono rifilati in un solo passaggio. Digitare `U` e premere {{key:Enter}} per rimetterli tutti insieme.

:::tip
Si possono anche fare clic su due punti vuoti: la linea tra di essi funziona come un percorso trascinato. Digitare `F` (Recinto) per fare clic su una serie di punti, poi premere {{key:Enter}}.
:::

:::touch
Trascinare con un dito nello stesso modo. Un tocco su un pezzo lo rifila.
:::

## Estendere invece, con Shift

1. Disegnare una linea verticale, e cinque linee orizzontali corte alla sua sinistra che si fermano prima di essa.
2. Digitare `TR` e premere {{key:Enter}}.
3. Tenere premuto {{key:Shift}}. Posare il puntatore su una linea corta: la parte di cui crescerebbe appare grigia e tratteggiata.
4. Tenendo ancora premuto {{key:Shift}}, trascinare verso il basso attraverso le cinque linee corte.

Ora tutte e cinque arrivano alla linea verticale. {{key:Shift}} funziona al contrario in {{cmd:EXTEND}} (`EX`): un clic estende, un {{key:Shift}}+clic rifila. Estendere allunga l'estremità più vicina al punto su cui si fa clic o dove il percorso attraversa.

## Rifilare dentro una finestra

1. Digitare `TR` e premere {{key:Enter}}.
2. Digitare `C` e premere {{key:Enter}}.
3. Fare clic su due angoli attorno ai pezzi da rimuovere.

Ogni pezzo che si trova almeno in parte dentro la finestra viene rifilato.

Per avere una finestra solo trascinando, senza digitare `C`: {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Trascinamento per rifilare ed estendere}} › {{ui:Una finestra}}. Poi premere su un punto vuoto e trascinare disegna un riquadro, e ogni pezzo che tocca viene rifilato (o esteso, in {{cmd:EXTEND}}, oppure con {{key:Shift}}). {{ui:Un percorso}} (quello predefinito) riporta il percorso a mano libera. La riga delle impostazioni all'avvio di TRIM dice quale è attivo.

## Scegliere i bordi di taglio (modalità Standard)

A volte deve tagliare una sola linea, per esempio la faccia di un muro attraversata da molte altre linee.

1. Digitare `TR` e premere {{key:Enter}}.
2. Digitare `O` (modalità) e premere {{key:Enter}}, poi digitare `S` (Standard) e premere {{key:Enter}}.
3. Al messaggio `Select cutting edges`, fare clic sulle linee di bordo (oppure trascinare una finestra), poi premere {{key:Enter}}. Premere {{key:Enter}} senza nulla selezionato rende ogni oggetto un bordo.
4. Fare clic o trascinare attraverso i pezzi da rimuovere.

Tagliano solo i bordi scelti, e un oggetto che nessun bordo attraversa resta com'è. La modalità resta attiva finché non si chiude la pagina; digitare `O`, poi `Q` per tornare alla modalità Rapida. {{cmd:TRIMEXTENDMODE}} la imposta prima di iniziare, come fa la variabile di quel nome altrove: `0` Standard, `1` Rapida. `T` (bordi di taglio) sceglie nuovi bordi in qualsiasi momento; in {{cmd:EXTEND}} è `B` (bordi di contorno).

## Bordi che arriverebbero

1. Digitare `TR` e premere {{key:Enter}}.
2. Digitare `E` (Bordo) e premere {{key:Enter}}, poi `E` (Estendi) e premere {{key:Enter}}.

Ora una linea o un arco di taglio che si ferma prima conta come se proseguisse: una linea corta taglia dove incrocerebbe se fosse più lunga. Digitare `E`, poi `N` (Non estendere) per tornare indietro. È lo stesso che EDGEMODE 1 e 0.

## Cancellare senza uscire

Digitare `R` (Cancella) e premere {{key:Enter}}, scegliere gli oggetti da cancellare e premere {{key:Enter}}. TRIM prosegue.

## Errori comuni

- **Una linea intera è sparita.** In modalità Rapida un oggetto che niente attraversa viene cancellato. Digitare `U` per rimetterlo, oppure passare alla modalità Standard (`O`, `S`).
- **"Nothing to trim there: no chosen edge crosses that object."** Niente da rifilare lì: nessun bordo scelto attraversa quell'oggetto. La modalità Standard taglia solo nei bordi scelti. Digitare `T` per sceglierli di nuovo.
- **"No boundary in that direction."** Nessun contorno in quella direzione: estendi non ha trovato nulla davanti. Fare clic più vicino all'estremità che deve crescere, oppure attivare `E` (Bordo, Estendi) per i contorni che si fermano prima.
- **Il trascinamento ha tracciato un lazo invece.** Un trascinamento rifila solo mentre TRIM o EXTEND chiede un oggetto. Senza un comando attivo, il trascinamento seleziona (vedi [Selezione con lazo](topic:lasso-selection)).
- **Si possono rifilare solo linee, archi, cerchi e polilinee.** Esplodere prima un blocco per rifilare le sue linee.
