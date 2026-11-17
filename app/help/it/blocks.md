---
title: Creare e inserire blocchi
summary: Trasformare una porta disegnata in un blocco, inserirla di nuovo in altre posizioni, scale e angoli, ed eliminare i blocchi inutilizzati.
keywords: blocco, bmake, inserisci, ddinsert, simbolo, purge, esplodi, ridefinisci, punto base, riferimento, conta, bcount, abaco, csv, attributi, estrazione dati
from: 125a129d
---

## Cosa si realizza

Un simbolo di porta reso un blocco chiamato `DOOR-900`, poi inserito tre volte: come disegnato, ruotato di 90 gradi e specchiato.

Un blocco è un gruppo di oggetti con nome. Lo si disegna una volta; ogni punto in cui viene usato è un **riferimento a blocco** che rimanda all'unica definizione. La sezione {{ui:Blocchi}} nel pannello di sinistra elenca i blocchi del disegno e quante volte ciascuno è usato.

## Disegnare la porta

1. Digitare `L` e premere {{key:Enter}}.
2. Digitare `0,0` e premere {{key:Enter}}.
3. Digitare `@0,900` e premere {{key:Enter}}, poi premere di nuovo {{key:Enter}}. Questa è l'anta della porta.
4. Digitare `A` e premere {{key:Enter}}.
5. Digitare `C` e premere {{key:Enter}} per indicare prima il centro.
6. Digitare `0,0` e premere {{key:Enter}} per il centro.
7. Digitare `900,0` e premere {{key:Enter}} per il punto iniziale.
8. Digitare `0,900` e premere {{key:Enter}} per il punto finale. Questo è l'arco di apertura.
9. Fare clic su {{ui:Estensione}}.

Gli archi procedono in senso antiorario dal punto iniziale al punto finale.

## Creare il blocco

1. Digitare `B` e premere {{key:Enter}}, oppure fare clic su {{ui:Crea}} nel gruppo Blocchi.
2. Al prompt `Digitare il nome del blocco`, digitare `DOOR-900` e premere {{key:Enter}}.
3. Al prompt `Specificare il punto base di inserimento`, digitare `0,0` e premere {{key:Enter}}. Questa è la cerniera: il punto che si posiziona dove si inserisce il blocco.
4. Al prompt `Selezionare oggetti`, trascinare una finestra attorno all'anta e all'arco.
5. Premere {{key:Enter}}.

La cronologia riporta `Blocco "DOOR-900" creato da 2 oggetti, sostituiti con un unico riferimento.` Il pannello {{ui:Blocchi}} elenca DOOR-900 con `1×` accanto: un solo riferimento. Fare clic sulla porta: ora si seleziona come un unico oggetto, un "Riferimento a blocco".

:::tip
Si possono selezionare prima gli oggetti e poi digitare `B`. CadCraft chiede comunque il nome e il punto base, poi usa la selezione.
:::

## Inserire il blocco

1. Digitare `I` e premere {{key:Enter}}, oppure fare clic su {{ui:Inserisci}} accanto a DOOR-900 nel pannello {{ui:Blocchi}}.
2. Al prompt `Digitare il nome del blocco o [File/Libreria] <DOOR-900>`, premere {{key:Enter}}. (Il pulsante {{ui:Inserisci}} del pannello compila automaticamente il nome.)
3. La porta segue il mirino. Fare clic dove deve andare la cerniera.

Appare una seconda porta.

## Inserire ruotato o scalato

1. Digitare `I` e premere {{key:Enter}}, poi premere {{key:Enter}} per accettare il nome.
2. Al prompt `Specificare il punto di inserimento [Scala/Ruota]`, digitare `R` e premere {{key:Enter}}.
3. Digitare `90` e premere {{key:Enter}}. L'anteprima ruota.
4. Fare clic per posizionarlo.

Digitare `S` invece per impostare un fattore di scala; vale in entrambe le direzioni. Scala e rotazione vengono ricordate per l'inserimento successivo. Per specchiare una porta, inserirla e poi usare {{cmd:MIRROR}} sul riferimento.

## Modificare un blocco inserito

Selezionare un riferimento a blocco. Nel pannello di destra si possono modificare {{ui:X}}, {{ui:Y}}, {{ui:Scala X}}, {{ui:Scala Y}} e {{ui:Rotazione}}. Un valore negativo di {{ui:Scala X}} lo capovolge.

## Ridefinire un blocco

Per cambiare tutte le porte in una volta, creare un blocco con lo stesso nome:

1. Disegnare la nuova versione della porta.
2. Digitare `B` e premere {{key:Enter}}, e digitare `DOOR-900`.
3. Al prompt `Blocco "DOOR-900" già esistente. Ridefinirlo?`, digitare `Y` e premere {{key:Enter}}.
4. Indicare il punto base e selezionare i nuovi oggetti, come prima.

Ogni riferimento a DOOR-900 ora mostra la nuova versione.

Oppure modificare il blocco stesso: {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica blocco}} ({{cmd:BEDIT}}) lo apre da solo, e {{ui:Salva blocco}} lo riporta nel disegno. Vedere [Attributi di blocco](topic:attributes#change-a-block-the-block-editor).

## Contare i blocchi ed esportare un abaco

Digitare {{cmd:COUNT}} (oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Conta blocchi}}), poi:

- fare clic su una porta: vengono selezionate tutte le porte di questo spazio, e la cronologia indica quante ce ne sono qui e in tutto il disegno;
- oppure premere {{key:Enter}}: la cronologia elenca ogni blocco con il suo conteggio, dal più numeroso;
- oppure digitare `E`, poi `C` per un CSV dei conteggi (nel modello, sulle tavole, in totale) oppure `A` per una riga per riferimento con layer, posizione, rotazione e ogni valore di attributo: un abaco da aprire in un foglio di calcolo.

I blocchi senza nome (quote, tabelle) e i riferimenti dentro altri blocchi non vengono contati. Le celle che iniziano come una formula (`=`, `+`, `-`, `@`) ricevono un `'` iniziale, così il foglio di calcolo le mostra come testo.

## Eliminare elementi inutilizzati ed esplodere

- {{cmd:EXPLODE}} (`X`) riporta un riferimento a blocco selezionato in oggetti separati. La definizione resta.
- {{cmd:PURGE}} (`PU`) rimuove le definizioni di blocco che nessuno usa più. La cronologia indica quante ne ha rimosse.

## Nomi dei blocchi

Un nome può arrivare a 255 caratteri e può contenere spazi, ma non può iniziare con un asterisco e non può contenere `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` o un apice inverso. Salvando in DXF R12, i nomi vengono scritti in maiuscolo, i caratteri diversi da lettere, cifre, `$`, `_` e `-` diventano `_`, e i nomi vengono troncati a 31 caratteri; la cronologia indica quanti sono cambiati. I nomi brevi in maiuscolo, cifre e trattini, come `DOOR-900`, restano invariati. Un DWG salvato mantiene i nomi come sono stati digitati, maiuscole e minuscole; cambiano solo i caratteri che il DWG non ammette (un `|` diventa `$0$`, gli altri diventano `_`).

## Scrivere un blocco o degli oggetti in un file a parte

Digitare `W` ({{cmd:WBLOCK}}) e scegliere **Oggetti**, **Blocco** o **Intero disegno**. Il risultato è un nuovo DWG o DXF che contiene solo i layer, gli stili e i blocchi che usa, con il punto base come origine. Per gli oggetti si possono conservarli, trasformarli in un blocco o eliminarli da questo disegno.

## Errori comuni

- **Il blocco è finito lontano dal mirino.** Il punto base non era sugli oggetti. Creare di nuovo il blocco con il punto base su un angolo o su una cerniera.
- **"Nessun oggetto selezionato; nulla creato."** È stato premuto {{key:Enter}} prima di selezionare qualsiasi oggetto.
- **"Questo disegno non contiene ancora blocchi: F inserisce un blocco da un file, L dalla libreria (oppure creare un blocco con BLOCK)."** Digitare `F` per portare un blocco da un altro disegno, oppure `L` per la libreria. Vedere [Inserire da file o dalla libreria](topic:insert-from-file-and-library).
- **"Un viewport non può entrare in un blocco."** Escludere dalla selezione i riquadri dei viewport.
