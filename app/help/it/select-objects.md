---
title: Selezionare oggetti
summary: Scegliere oggetti uno per uno, con una finestra o un incrocio, prima o durante un comando, ed eliminare oggetti dalla selezione.
keywords: seleziona, selezione, finestra, incrocio, sostantivo-verbo, scegli, tutto, ultimo, precedente, recinto, rimuovi, aggiungi, tab, ciclo, sovrapposti, qselect, selezione rapida, filtro, seleziona simili, selectsimilar, shift, deseleziona, ctrl+a, pickfirst
from: 676508c7
---

## Cosa si impara

Come scegliere gli oggetti su cui agisce un comando. CadCraft ha due modi di lavorare, ed entrambi vanno bene:

- **Prima la selezione, poi il comando** (sostantivo-verbo). Selezionare gli oggetti, poi digitare `M` per Sposta. Il comando accoglie la selezione e passa subito alla domanda successiva.
- **Prima il comando, poi la selezione** (verbo-sostantivo). Digitare `M`; il comando chiede `Selezionare oggetti:`; si selezionano gli oggetti, poi si preme {{key:Enter}}.

## Selezionare un oggetto alla volta

1. Senza un comando in corso, fare clic su una linea. Viene evidenziata e compaiono i suoi grip (piccoli quadrati). Il pannello a destra mostra le sue proprietà.
2. Fare clic su un altro oggetto. Viene aggiunto alla selezione.
3. Tenere premuto {{key:Shift}} e fare clic su un oggetto selezionato. Viene tolto dalla selezione.
4. Premere {{key:Esc}}. Nulla è selezionato.

## Finestra e incrocio

Fare clic una volta su uno spazio vuoto, spostarsi e fare clic di nuovo: si ottiene un rettangolo. Premere e trascinare disegna invece un lazo a mano libera, con gli stessi due tipi (vedere [Selezione a lazo](topic:lasso-selection); le Impostazioni possono far disegnare un rettangolo al trascinamento). Gli oggetti ottenuti dipendono dalla direzione:

| Direzione | Riquadro | Seleziona |
|---|---|---|
| Da sinistra a destra | Finestra | Solo gli oggetti **completamente dentro** il riquadro |
| Da destra a sinistra | Incrocio | Gli oggetti dentro il riquadro **e** quelli che tocca |

1. Disegnare alcune linee e cerchi che si sovrappongono.
2. Fare clic su uno spazio vuoto a sinistra di alcuni oggetti, spostarsi a destra e fare clic di nuovo. Vengono selezionati solo gli oggetti completamente dentro.
3. Premere {{key:Esc}}.
4. Fare clic su uno spazio vuoto a destra, spostarsi a sinistra attraversando alcuni oggetti e fare clic di nuovo. Viene selezionato tutto ciò che il riquadro tocca.
5. Tenere premuto {{key:Shift}} e disegnare un riquadro o un lazo su alcuni oggetti selezionati. Escono dalla selezione.

## Selezionare, poi eseguire un comando

1. Selezionare due cerchi.
2. Digitare `M` e premere {{key:Enter}}.

La cronologia dice `2 trovati`, e il prompt passa subito a `Specificare il punto base`. Completare lo spostamento (vedere [Sposta, copia, ruota, scala e specchio](topic:modify-objects)).

Quando un comando termina, la selezione viene cancellata, così il comando successivo parte da zero.

I comandi che accettano la selezione in questo modo sono: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} e {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} e {{cmd:CHAMFER}} chiedono invece sempre di scegliere gli oggetti uno alla volta; {{cmd:TRIM}} ed {{cmd:EXTEND}} accettano una scelta oppure un percorso che si trascina attraverso i pezzi (vedere [Rifila ed estendi](topic:trim-and-extend)).

## Eseguire un comando, poi selezionare

1. Assicurarsi che nulla sia selezionato ({{key:Esc}}).
2. Digitare `E` e premere {{key:Enter}}. Il prompt legge `Selezionare oggetti:`.
3. Fare clic sugli oggetti, oppure trascinare finestre e incroci. La cronologia conta ogni scelta (`1 trovato`, `3 trovati`).
4. Premere {{key:Enter}}, premere {{key:Space}} o fare clic con il tasto destro per terminare la selezione.

Gli oggetti vengono cancellati e la cronologia indica quanti sono.

A un prompt `Selezionare oggetti:` si può anche digitare:

- `ALL`, poi {{key:Enter}}: ogni oggetto modificabile nella scheda aperta.
- `L` (o `LAST`), poi {{key:Enter}}: l'oggetto disegnato più di recente.
- `P` (Precedente): gli oggetti su cui ha lavorato l'ultimo comando, se sono ancora presenti.
- `F` (Recinto): fare clic o digitare punti lungo una linea; viene aggiunto ogni oggetto che la linea attraversa. Premere {{key:Enter}} per terminare il recinto; `U` annulla il suo ultimo punto.
- `W` (Finestra) o `C` (Incrocio): due angoli, in qualunque direzione si trascini.
- `R` (Rimuovi): da ora in poi, clic, finestre e recinti tolgono oggetti **dalla** selezione. Il prompt legge `Rimuovere oggetti:`. `A` (Aggiungi) torna indietro.
- `?`: l'elenco di queste opzioni nella cronologia.

Queste opzioni non vengono mostrate nel prompt, come in AutoCAD.

## Scegliere uno tra più oggetti sovrapposti

Dove gli oggetti si sovrappongono o si toccano, un clic prende quello più vicino. Per ottenerne un altro:

1. Tenere fermo il puntatore sul punto.
2. Premere {{key:Tab}}. Il successivo oggetto lì viene evidenziato, e la barra di stato dice quale è ("2 di 3: Linea sul layer Walls").
3. Premere di nuovo {{key:Tab}} finché non è evidenziato quello desiderato, poi fare clic senza muoversi.

Muovere il puntatore ricomincia. Funziona senza un comando in corso, al prompt `Selezionare oggetti:` e ovunque un comando chieda di scegliere un solo oggetto.

## Selezionare con una regola: Selezione rapida

{{cmd:QSELECT}} (`QS`, oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Selezione rapida}}) seleziona ogni oggetto che corrisponde a una regola, ad esempio ogni cerchio con raggio inferiore a 50, o ogni riferimento a blocco chiamato DOOR-900.

1. Aprire {{ui:Selezione rapida}}.
2. Scegliere {{ui:Tipo di oggetto}} (l'elenco conta ogni tipo), poi {{ui:Proprietà}}: {{ui:Layer}}, {{ui:Colore}} e, per alcuni tipi, {{ui:Lunghezza}}, {{ui:Raggio}}, {{ui:Area}}, {{ui:Altezza testo}}, {{ui:Contenuto del testo}}, {{ui:Nome del blocco}} o {{ui:Motivo di tratteggio}}.
3. Scegliere {{ui:Operatore}} e {{ui:Valore}}. `*` corrisponde con i caratteri jolly (`DOOR-*`); {{ui:Seleziona tutto}} prende ogni oggetto del tipo. Il conteggio in fondo mostra quanti corrispondono mentre si sceglie.
4. {{ui:Come applicare}}: includere le corrispondenze, oppure tutto il resto. {{ui:Applica a}} {{ui:Selezione corrente}} restringe ciò che era selezionato; {{ui:Aggiungi alla selezione corrente}} vi aggiunge.
5. Fare clic su {{ui:Seleziona}}. Poi eseguire il comando desiderato: userà la selezione.

## Selezionare simili

Selezionare uno o più oggetti e digitare {{cmd:SELECTSIMILAR}} (`SIM`), oppure scegliere {{ui:Modifica}} › {{ui:Altro}} › {{ui:Seleziona simili}}. Vengono selezionati tutti gli oggetti dello stesso tipo, sullo stesso layer e con lo stesso colore; i riferimenti a blocco richiedono anche lo stesso blocco, i tratteggi lo stesso motivo. Digitare `SE` al suo prompt `Selezionare oggetti` per scegliere cosa deve corrispondere.

## Selezionare ora, usare dopo

Digitare `SELECT` e premere {{key:Enter}}, scegliere oggetti con uno qualsiasi dei modi sopra e premere {{key:Enter}}. Restano selezionati per il comando successivo, e `P` li richiama a un prompt `Selezionare oggetti:` successivo.

## Selezionare tutto

Senza un comando in corso, premere {{key:Mod+A}}, oppure scegliere {{ui:Seleziona tutto}} nel menu {{ui:Modifica}} › {{ui:Altro}} della barra degli strumenti, per selezionare ogni oggetto modificabile nella scheda aperta. Se è stato digitato qualcosa nella riga di comando, {{key:Mod+A}} seleziona invece quel testo: premere prima {{key:Esc}} per cancellarlo. A un prompt `Selezionare oggetti:`, digitare `ALL`. {{ui:Non selezionare nulla}} nello stesso menu, o {{key:Esc}}, cancella la selezione.

:::tip
Se si preferisce che ogni clic sostituisca la selezione (e {{key:Shift}} aggiunga), impostare {{ui:Clic sugli oggetti}} su {{ui:Sostituisce la selezione}} nelle [Impostazioni di CadCraft](topic:settings).
:::

## Cosa non si può selezionare

- Oggetti su un layer **spento**, **congelato** o **bloccato**. Gli oggetti bloccati restano visibili, e si può ancora agganciarsi a loro, ma non si possono selezionare né modificare.
- Su una scheda di tavola, il modello mostrato in una viewport. Si selezionano gli oggetti propri della tavola (il cartiglio, le note, i bordi delle viewport). Per modificare il modello, passare alla scheda {{ui:Modello}}.

## Cancellare rapidamente

Selezionare gli oggetti, poi premere {{key:Delete}} (oppure {{key:Backspace}} quando la riga di comando non ha il cursore). Su una tastiera Mac, il tasto indicato come delete funziona dopo aver fatto clic nel disegno; mentre la riga di comando ha il cursore, premere insieme fn e delete. Questo esegue {{cmd:ERASE}} sulla selezione. Se non succede nulla, è stato digitato qualcosa nella riga di comando: premere {{key:Esc}}, oppure digitare `E` e premere {{key:Enter}}.

## Errori comuni

- **La finestra ha preso troppo poco.** Si è trascinato da sinistra a destra, che prende solo ciò che è completamente dentro. Per un incrocio trascinare da destra a sinistra.
- **Un clic su uno spazio vuoto ha avviato un riquadro.** Un clic su uno spazio vuoto avvia una finestra; il secondo clic la completa. Premere {{key:Esc}} o fare clic con il tasto destro per annullarla.
- **Un clic su uno spazio vuoto ha rilasciato la selezione.** Succede, a meno di tenere premuto {{key:Shift}}. Per mantenere la selezione con quel clic e cancellarla solo con {{key:Esc}}, impostare {{ui:Clic su un punto vuoto}} su {{ui:Mantiene la selezione}} nelle [Impostazioni di CadCraft](topic:settings#clicking-an-empty-spot).
- **Il comando ha usato oggetti non voluti.** Qualcosa era ancora selezionato quando è stato avviato. Premere {{key:Esc}} prima di un comando per partire senza nulla selezionato.
- **Dopo un comando non c'è nulla di selezionato.** È voluto: un comando concluso cancella la selezione.
