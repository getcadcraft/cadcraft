---
title: Offset, rifila, estendi, raccordo e smusso delle pareti
summary: Trasformare linee singole in pareti doppie con Offset, pulire gli angoli con Raccordo, e tagliare e allungare linee con Rifila ed Estendi.
keywords: offset, rifila, estendi, raccordo, smusso, smussa, interrompi, breakatpoint, allunga, pareti, angolo, taglia, allunga, parallelo, raggio, pulizia
from: c6c5cbd0
---

## Cosa si realizza

Una piccola stanza con pareti spesse 200: la faccia interna viene disegnata, la faccia esterna viene sfalsata con offset, gli angoli vengono puliti e una porta viene aperta in una parete.

## Disegnare la faccia interna

1. Digitare `L` e premere {{key:Enter}}.
2. Digitare `0,0` e premere {{key:Enter}}.
3. Digitare `@5000,0` e premere {{key:Enter}}.
4. Digitare `@0,4000` e premere {{key:Enter}}.
5. Digitare `@-5000,0` e premere {{key:Enter}}.
6. Digitare `C` e premere {{key:Enter}}.
7. Fare clic su {{ui:Estensione}}.

Si hanno quattro linee separate. (Una polilinea chiusa farebbe offset in una sola volta; linee separate mostrano come Raccordo pulisce gli angoli.)

## Sfalsare la faccia esterna con offset

1. Digitare `O` e premere {{key:Enter}}. Il prompt legge `Specificare la distanza di offset [Passante (T)] <Passante (T)>:`.
2. Digitare `200` e premere {{key:Enter}}.
3. In corrispondenza di `Selezionare l'oggetto da sfalsare`, fare clic sulla linea inferiore.
4. In corrispondenza di `Specificare un punto sul lato da sfalsare`, fare clic in un punto qualsiasi sotto di essa. Compare una linea parallela 200 più in basso.
5. Fare clic sulla linea destra, quindi fare clic a destra di essa.
6. Fare clic sulla linea superiore, quindi fare clic sopra di essa.
7. Fare clic sulla linea sinistra, quindi fare clic a sinistra di essa.
8. Premere {{key:Enter}} per terminare il comando.

Si dovrebbero vedere quattro linee esterne, ciascuna della stessa lunghezza della sua linea interna, quindi gli angoli esterni non si incontrano.

:::tip
Premere {{key:Enter}} al prompt della distanza per riusare l'ultima distanza. Digitare `T` per Passante: allora ogni copia passa per il punto indicato, a qualunque distanza esso si trovi.
:::

{{cmd:OFFSET}} funziona su linee, archi, cerchi e polilinee. Sfalsare una polilinea chiusa sfalsa tutto il contorno, angoli compresi.

## Pulire gli angoli esterni con Raccordo

{{cmd:FILLET}} unisce due linee in un angolo: le rifila o le estende perché si incontrino. Con un raggio di 0 l'angolo è squadrato.

1. Digitare `F` e premere {{key:Enter}}. Il prompt legge `Selezionare la prima linea [Raggio]:`.
2. Se l'ultimo raccordo eseguito usava un raggio, digitare `R`, premere {{key:Enter}}, digitare `0` e premere {{key:Enter}}.
3. Fare clic sulla linea inferiore esterna vicino alla sua estremità destra.
4. In corrispondenza di `Selezionare la seconda linea`, fare clic sulla linea destra esterna vicino alla sua estremità inferiore.

Le due linee ora si incontrano in un angolo netto, e il comando termina.

5. Premere {{key:Enter}} per ripetere {{cmd:FILLET}}, e fare l'angolo successivo.
6. Ripetere finché non si incontrano tutti e quattro gli angoli esterni.

Fare clic su ogni linea nella parte che si vuole **mantenere**. Con un raggio superiore a 0, Raccordo aggiunge invece un arco tra le linee.

:::tip
Digitare `M` al primo prompt per fare tutti e quattro gli angoli in una volta, oppure disegnare la faccia esterna come un'unica polilinea chiusa e digitare `P`: ogni angolo viene fatto insieme. Tenere premuto {{key:Shift}} mentre si fa clic sulla seconda linea per un angolo netto senza cambiare il raggio.
:::

## Smussare un angolo con Smusso

{{cmd:CHAMFER}} taglia un angolo con una linea retta.

1. Digitare `CHA` e premere {{key:Enter}}.
2. Digitare `D` e premere {{key:Enter}}. Digitare `300` e premere {{key:Enter}} per la prima distanza, quindi premere {{key:Enter}} per usare 300 anche per la seconda.
3. Fare clic sulla linea superiore interna vicino alla sua estremità sinistra, poi sulla linea sinistra interna vicino alla sua estremità superiore.

L'angolo viene tagliato indietro di 300 lungo ciascuna linea e una linea di smusso le unisce. Digitare `A` invece di `D` per indicare una lunghezza sulla prima linea e un angolo.

## Aprire una porta con Rifila

Disegnare prima i due stipiti della porta attraverso la parete inferiore, poi rifilare le linee della parete tra di essi.

1. Digitare `L` e premere {{key:Enter}}.
2. Digitare `1000,200` e premere {{key:Enter}}.
3. Digitare `@0,-600` e premere {{key:Enter}}, quindi premere di nuovo {{key:Enter}}.
4. Premere {{key:Enter}} per ripetere {{cmd:LINE}}.
5. Digitare `1900,200` e premere {{key:Enter}}.
6. Digitare `@0,-600` e premere {{key:Enter}}, quindi premere di nuovo {{key:Enter}}.

Ora si hanno due linee corte che attraversano la parete inferiore a 900 di distanza.

7. Digitare `TR` e premere {{key:Enter}}. La cronologia riporta `Impostazioni correnti: modalità rapida, bordi: senza estensione`.
8. Fare clic sulla linea interna inferiore tra i due stipiti. Quel pezzo scompare. (Passare prima il puntatore su di essa: il pezzo che verrà eliminato diventa grigio e tratteggiato.)
9. Fare clic sulla linea esterna inferiore tra i due stipiti. Anche quel pezzo scompare.
10. Fare clic sulla parte di ciascuno stipite che sporge sopra la parete, e sulla parte sotto di essa.
11. Premere {{key:Enter}} per terminare il comando.

Si dovrebbe vedere un'apertura di 900 nella parete inferiore, con gli stipiti che chiudono le estremità della parete.

Nella modalità rapida (quella predefinita) Rifila non chiede prima di scegliere i bordi di taglio: ogni oggetto visibile è un bordo di taglio. Scegliere il pezzo che si vuole eliminare, oppure trascinare un percorso attraverso più pezzi per rifilarli tutti in una volta. Digitare `U` e premere {{key:Enter}} per annullare l'ultima scelta o trascinamento senza uscire dal comando. Recinto, intersezione, bordi scelti e {{key:Shift}} per estendere sono in [Rifila ed estendi](topic:trim-and-extend).

## Estendere una linea fino a incontrarne un'altra

{{cmd:EXTEND}} allunga un'estremità di linea, arco o polilinea finché non incontra l'oggetto successivo in quella direzione.

1. Digitare `L` e premere {{key:Enter}}.
2. Digitare `1000,2000` e premere {{key:Enter}}.
3. Digitare `@2000,0` e premere {{key:Enter}}, quindi premere di nuovo {{key:Enter}}. La linea si ferma 2000 prima della parete destra.
4. Digitare `EX` e premere {{key:Enter}}.
5. Fare clic sulla nuova linea vicino alla sua estremità destra.
6. Premere {{key:Enter}} per terminare il comando.

La linea ora arriva fino alla faccia interna della parete destra. Ogni oggetto visibile è un limite; scegliere vicino all'estremità che deve allungarsi. Dentro {{cmd:TRIM}}, {{key:Shift}}+clic fa lo stesso.

## Interrompere e allungare

{{cmd:BREAK}} (`BR`, oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Interrompi}}) taglia un'interruzione senza un bordo di taglio: fare clic sull'oggetto dove inizia l'interruzione (quel clic è il primo punto), poi dove termina. Su un cerchio viene eliminata la parte in senso antiorario dal primo punto al secondo. `F` alla seconda domanda consente di indicare di nuovo il primo punto, e {{cmd:BREAKATPOINT}} divide un oggetto in due in un unico punto, senza interruzione.

{{cmd:LENGTHEN}} (`LEN`) modifica una lunghezza a un'estremità:

1. Digitare `LEN` e premere {{key:Enter}}. Fare clic su una linea per vederne la lunghezza attuale; il prompt chiede di nuovo.
2. Scegliere il modo: `DE` (Delta: una quantità da aggiungere, negativa per togliere; `A` per l'angolo di un arco), `P` (Percentuale: 50 la dimezza), `T` (Totale: la lunghezza che deve avere) oppure `DY` (Dinamico: trascinare l'estremità).
3. Fare clic su ciascun oggetto vicino all'estremità che deve spostarsi. `U` annulla l'ultimo; {{key:Enter}} termina.

Linee, archi e polilinee aperte (il loro segmento terminale) possono essere allungati.

## Errori comuni

- **Una linea intera è scomparsa.** Nulla la attraversava, quindi la modalità rapida l'ha cancellata. Digitare `U` per ripristinarla; verificare che la linea di taglio la attraversi davvero (ingrandire) e che non si trovi su un layer spento.
- **"Nessun limite in quella direzione."** Estendi non ha trovato nulla contro cui fermarsi. Scegliere più vicino all'estremità che deve allungarsi.
- **"Il raggio è troppo grande."** L'arco andrebbe oltre l'estremità di una delle linee. Usare un raggio più piccolo.
- **"Si può tagliare indietro solo il primo o l'ultimo segmento di una polilinea aperta."** Scegliere due segmenti della polilinea uno accanto all'altro, oppure digitare `P` per arrotondare ogni angolo.
- **L'offset è andato dal lato sbagliato.** Il lato è quello dove si fa clic dopo aver scelto l'oggetto. Annullare con {{key:Mod+Z}} e fare clic dall'altro lato.
- **"Impossibile eseguire l'offset così lontano."** L'offset rovescerebbe l'arco, il cerchio o la polilinea. Usare una distanza più piccola.
