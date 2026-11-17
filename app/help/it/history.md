---
title: Cronologia: versioni e modifiche
summary: Vedere le versioni di un disegno (copie che Studio conserva al salvataggio, e quelle del cloud), aprirne o ripristinarne una, e confrontarne due con le modifiche mostrate a colori.
keywords: cronologia, versioni, cronologia versioni, ripristina, versione precedente, annulla un salvataggio, confronta, confronta disegni, dwgcompare, modifiche, aggiunto, rimosso, modificato, istantanea, backup, versioni cloud
from: 141d37b3
---

## Cosa si crea

Uno sguardo a una versione precedente di un disegno, e un elenco di ciò che è diverso da adesso: cosa è stato aggiunto, cosa è stato rimosso e cosa è stato modificato, segnato a colori sul disegno.

## Aprire la Cronologia

Digitare `HISTORY` (o `HIST`) e premere {{key:Enter}}, oppure scegliere {{ui:Cronologia…}} nel menu {{ui:Altro}} del gruppo {{ui:Vista}}. Il pannello si apre accanto al disegno e resta aperto mentre si lavora, così si può spostare la vista e ingrandire il disegno con i colori sopra.

La Cronologia funziona in CadCraft Studio. In un browser, il pannello indica solo questo.

## Da dove vengono le versioni

- **Su questo computer.** Ogni volta che si apre un disegno da un file in Studio, e ogni volta che lo si salva, Studio conserva una copia del file nella propria memoria su questo computer. La prima copia è {{ui:All'apertura}}: il file com'era prima del primo salvataggio sopra di esso. Studio conserva le 25 copie più recenti di ogni disegno, e le più vecchie vengono eliminate per prime quando tutte le copie insieme superano 400 MB. Un salvataggio che non cambia nulla non conserva nulla. Nulla viene caricato.
- **Nel cloud.** Quando si apre un disegno dai file cloud in Studio, il pannello elenca anche {{ui:Nel cloud}}: ogni versione conservata dal cloud, con il suo numero, chi l'ha salvata e la nota. Il pannello si limita a leggerle. CadCraft non invia ancora i propri salvataggi al cloud, quindi queste sono le versioni salvate da altri dispositivi e dal web. Se Studio segnala che l'accesso è scaduto, accedere di nuovo.

Un disegno non ancora salvato non ha copie: salvarlo prima.

## Aprire o ripristinare una versione

- {{ui:Apri}} mette quella versione in una scheda propria. Il disegno non viene toccato.
- {{ui:Ripristina}} sostituisce questo disegno con quella versione. Chiede prima conferma. Prima di farlo, Studio conserva una copia del disegno così com'è ora nella Cronologia (contrassegnata {{ui:Prima di un ripristino}}), e nulla viene scritto nel file finché non si salva. Un ripristino non si può annullare con {{key:Mod+Z}}; usare quella copia.

## Confronta

1. Fare clic su {{ui:Confronta}} su una versione. Viene confrontata con {{ui:Il disegno com'è ora}}; per confrontarla con un'altra versione, scegliere prima quella in {{ui:Confronta con}}.
2. Leggere il risultato sotto l'elenco: quanti oggetti sono stati aggiunti, rimossi e modificati, e l'elenco di essi. Fare clic su una voce dell'elenco per spostare la vista su di essa.
3. Sul disegno:
   - gli oggetti **verdi** sono stati aggiunti,
   - gli oggetti **rossi** sono stati rimossi (esistono solo nella versione più vecchia),
   - gli oggetti **arancioni** sono stati modificati: la forma nuova è piena e quella vecchia tratteggiata.
4. {{ui:Mostra sul disegno}} attiva e disattiva i colori; {{ui:Cancella i colori}} elimina il risultato. Anche la chiusura del pannello li cancella.

L'elenco indica cosa è cambiato in un oggetto modificato: il suo testo, lo spostamento, la sua forma, il suo layer, colore, tipo di linea o spessore di linea. Ogni foglio viene confrontato separatamente; i colori appaiono sul foglio aperto.

:::note
Un disegno non ha un numero permanente per ogni oggetto, quindi CadCraft abbina gli oggetti in base a ciò che sono: lo stesso oggetto nei due casi è invariato; un oggetto dello stesso tipo e layer che si trova entro la propria dimensione da uno vecchio è lo stesso oggetto, modificato; ciò che resta viene aggiunto o rimosso. Un oggetto spostato lontano da dove era appare rimosso in un punto e aggiunto nell'altro. Un riferimento a blocco conta il contenuto del proprio blocco.
:::

## Errori comuni

- **"Ancora nessuna copia."** Studio conserva una copia a ogni apertura e salvataggio di un disegno che ha un file su questo computer. Un disegno aperto da una scheda del browser, o mai salvato, non ne ha.
- **L'elenco del cloud manca.** Compare per un disegno aperto dal cloud in Studio; un file aperto dal disco non è un disegno cloud.
- **Sembra tutto modificato.** Due versioni salvate da programmi diversi scrivono lo stesso disegno in modi diversi (nomi di blocchi anonimi, arrotondamenti). Confrontare versioni salvate da CadCraft.
