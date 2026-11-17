---
title: Disegnare senza vista
summary: Attivando Accesso, CadCraft legge ad alta voce ogni comando e risultato tramite lo screen reader, descrive il disegno e ciò che si trova vicino al cursore, consente di spostare il cursore da tastiera, riproduce un suono per ogni snap e grip e accetta comandi vocali dove il browser può farlo sul proprio computer.
keywords: accessibilità, screen reader, non vedenti, ipovisione, NVDA, VoiceOver, JAWS, Orca, cursore da tastiera, comandi vocali, parlato, suoni, suoni di snap, descrivi disegno, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Accesso** consente di disegnare senza vedere lo schermo. È disattivato finché non lo si attiva, così nessuno lo ottiene per sbaglio.

## Attivarlo

Aprire **Impostazioni** (l'icona a ingranaggio, oppure Ctrl+,), trovare **Disegno senza vista** e scegliere **Acceso**. Oppure digitare `ACCESS` nella riga di comando e rispondere `Acceso`. Viene ricordato su questo computer.

Con Accesso attivo:

- **Tutto ciò che la riga di comando dice viene letto** tramite lo screen reader: ciò che è stato digitato, la richiesta, la risposta e ogni errore. CadCraft usa le proprie regioni live (cortesi e urgenti), quindi uno screen reader che legge le regioni live non richiede alcuna configurazione. Errori e annullamenti interrompono; tutto il resto attende il proprio turno.
- **L'area di disegno è raggiungibile.** Premere Tab finché non si sente "Disegno", oppure premere Shift+Tab dalla riga di comando. È una regione che inoltra i tasti a CadCraft.

## Tasti sul disegno

| Tasto | Cosa fa |
|---|---|
| Tasti freccia | Spostano il cursore da tastiera. Un passo è circa un centesimo di ciò che mostra lo schermo, arrotondato a 1, 2 o 5. Shift sposta dieci volte di più, Ctrl un decimo. |
| Invio | Sceglie il punto sotto il cursore, esattamente come un clic. |
| Space | Preme Invio nella riga di comando: completa LINE, accetta il valore predefinito. |
| Tab, Shift+Tab | Passano allo snap point successivo o precedente vicino al cursore, dal più vicino. |
| G | Scorre i grip degli oggetti selezionati. |
| D | Descrive il disegno: quanti oggetti, di che tipo, quanto grandi, cosa è selezionato. |
| W | Dice dove si trova il cursore e quanto dista dall'ultimo punto. |
| N | Dice cosa si trova vicino al cursore, dal più vicino, con distanza e lato. |
| S | Descrive gli oggetti selezionati. |
| R | Ripete l'ultima cosa detta. |
| V | Attiva o disattiva la voce. |
| / | Va alla riga di comando. |
| ? | Elenca questi tasti. |

Lo spostamento con i tasti dice dove si è arrivati. Quando un comando attende un punto, dice anche di quanto e in quale direzione ci si trova dall'ultimo punto, per esempio "2400 dall'ultimo punto, verso destra, a 0 gradi".

## Comandi

- {{cmd:ACCESS}} attiva o disattiva Accesso, i suoni degli snap e la voce, e ne dice lo stato.
- {{cmd:DESCRIBE}} dice cosa contiene il disegno.
- {{cmd:WHEREAMI}} dice dove si trova il cursore.
- {{cmd:NEARBY}} dice cosa si trova vicino al cursore.
- {{cmd:SAYSEL}} dice cosa è selezionato, una frase per oggetto.
- {{cmd:VOICE}} attiva o disattiva i comandi vocali.

Questi cinque leggono il disegno e stampano una risposta; non cambiano nulla.

## Suoni per snap e grip

Attivare **Suoni di snap e grip** in Impostazioni. Ogni tipo di snap ha un proprio tono e suono, così si distingue un punto finale da un punto medio, un centro, un'intersezione e gli altri, e un grip ha un doppio ticchettio. Il suono si sposta a sinistra o a destra per seguire il cursore sullo schermo. I suoni vengono generati sul proprio computer; non si scarica nulla.

## Comandi vocali

Attivare **Comandi vocali** in Impostazioni. Dire il nome di un comando ("line", "circle", "move"), poi dire i numeri come si leggono: "punto trecento virgola quattrocento", "distanza milleduecento", "angolo quarantacinque". "Invio", "annulla" e "ripristina" fanno quello che dicono. Quello che è stato sentito viene ripetuto ad alta voce, e una frase che non è un comando viene segnalata, non indovinata.

**Dove viene riconosciuto il parlato.** CadCraft non ha un servizio vocale proprio e non invia audio a nessuno. Chiede al browser di riconoscere il parlato su questo computer. Se il browser può farlo, la scelta è **Su questo computer** e nessun audio esce dal computer. Se non può, la voce resta disattivata, a meno che si scelga **Servizio online del browser**, che consente al browser di inviare l'audio al servizio vocale del suo produttore. Impostazioni indica quale dei due si applica, prima di decidere.

## Cosa non fa ancora

- Solo CadCraft ha Accesso. Le altre sette app seguiranno, con gli stessi tasti e suoni.
- Il testo di un disegno (una nota, il nome di un blocco) viene letto così com'è scritto; non viene mai interpretato come istruzione.
- È stato provato con verifiche sintetiche e con i test del browser; le verifiche a mano con NVDA, VoiceOver e un tester non vedente o ipovedente devono ancora essere fatte. Se lo si prova, segnalare cosa manca.
