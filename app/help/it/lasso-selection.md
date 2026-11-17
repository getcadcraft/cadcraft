---
title: Selezione a lazo
summary: Premere e trascinare un contorno a mano libera attorno agli oggetti per selezionarli, come finestra, intersezione o recinto; cambiare con Space mentre si trascina.
keywords: lazo, lassomode, trascinamento, mano libera, seleziona, selezione, finestra, intersezione, recinto, space, poligono, tocco, penna, rettangolo
from: 9ec6154d
---

## Cosa si apprende

Come selezionare oggetti disegnando un contorno attorno a essi, e come riottenere il rettangolo quando serve.

## Disegnare un lazo

1. Disegnare alcune linee e cerchi vicini tra loro.
2. Senza comandi in esecuzione, premere il pulsante del mouse su uno spazio vuoto e trascinare attorno ad alcuni di essi, spostandosi prima a **destra**.
3. Rilasciare.

Vengono selezionati solo gli oggetti completamente all'interno del contorno. Il contorno è disegnato a linea continua durante il trascinamento: si tratta di un lazo a finestra.

## Finestra, intersezione e recinto

Quali oggetti si ottengono dipende dal primo movimento del trascinamento e da {{key:Space}}:

| Si trascina | Lazo | Seleziona |
|---|---|---|
| Prima a destra | Finestra (contorno continuo) | Solo oggetti **completamente all'interno** |
| Prima a sinistra | Intersezione (tratteggiato, verde) | Oggetti all'interno **e** oggetti toccati dal contorno |
| Premere {{key:Space}} durante il trascinamento | Finestra, poi intersezione, poi recinto | Recinto (un percorso tratteggiato, non chiuso): solo gli oggetti attraversati dal percorso |

1. Premere su uno spazio vuoto e trascinare attorno ad alcuni oggetti, spostandosi prima a **sinistra**. Vengono selezionati anche tutti gli oggetti toccati dal contorno.
2. Premere {{key:Esc}}.
3. Premere e trascinare di nuovo; tenendo ancora premuto il pulsante, premere {{key:Space}} una volta. Il contorno diventa un'intersezione; premere di nuovo {{key:Space}} per un recinto.

{{key:Shift}} al rilascio toglie invece gli oggetti dalla selezione (con "Clic sugli oggetti: Aggiunge" nelle Impostazioni).

## All'interno di un comando

Un lazo funziona ovunque CadCraft chieda `Selezionare oggetti`: disegnarlo, poi premere {{key:Enter}} per terminare. {{cmd:STRETCH}} usa un lazo a intersezione come finestra, così è possibile allungare in un'unica operazione una parte a L di un disegno.

{{cmd:TRIM}} ed {{cmd:EXTEND}} usano il trascinamento in modo diverso: qui tagliano (o estendono) ogni elemento attraversato dal percorso. Vedere [Rifila ed estendi](topic:trim-and-extend).

## Il rettangolo

Un clic su uno spazio vuoto, uno spostamento e un secondo clic disegnano sempre la finestra rettangolare (da sinistra a destra) o l'intersezione (da destra a sinistra).

Per fare in modo che un trascinamento disegni di nuovo il rettangolo, aprire {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Trascinamento per selezionare}} e scegliere {{ui:Rettangolo}}, oppure digitare {{cmd:LASSOMODE}}, poi `0`. Digitare {{cmd:LASSOMODE}}, poi `1` per il lazo. La scelta viene mantenuta in questo browser.

:::touch
Trascinare con un dito o una penna allo stesso modo. Un tocco seleziona ancora un solo oggetto.
:::

## Errori comuni

- **Non è stato selezionato nulla.** Il lazo era una finestra e nessun oggetto era completamente all'interno. Iniziare il trascinamento verso sinistra, oppure premere {{key:Space}} durante il trascinamento.
- **Il trascinamento ha spostato un grip.** Premere sul grip di un oggetto selezionato sposta il grip. Iniziare il lazo su uno spazio vuoto.
- **Space ha concluso il comando.** {{key:Space}} cambia il lazo solo mentre il pulsante è premuto; altrimenti equivale a {{key:Enter}}.
