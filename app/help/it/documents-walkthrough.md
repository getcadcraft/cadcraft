---
title: Documenti e revisioni (l'archivio)
summary: Una guida passo passo su un lavoro reale: mettere una cartella di progetto sotto controllo, fare il check-out di un disegno, modificarlo, fare il check-in con una nota, inviarlo per la revisione, approvarlo e rilasciarlo, vedere la cronologia e chi lo usa, cosa vede una seconda persona mentre è bloccato, e come funziona con le cartelle cloud.
keywords: archivio, documenti, guida passo passo, tutorial, check-out, check-in, revisione, rilascio, approva, blocco, cronologia, dove usato, cartella cloud, cartella di progetto, gestione documenti, pdm, due persone, cartella condivisa
from: 3829528d
---

## Obiettivo

Ana lavora alla Riverside Clinic con un collega, Ben. I disegni del progetto stanno in una cartella a cui hanno accesso entrambi (un'unità condivisa, una cartella sincronizzata o una cartella cloud). Alla fine, un file sarà passato dalla sua prima copia a una revisione rilasciata **A**, sarà stato modificato di nuovo come **B.1**, si sarà visto chi ha fatto cosa, e si sarà visto cosa vede Ben quando il file è bloccato da Ana.

Tutto è conservato in una cartella nascosta `.ccvault` accanto ai file: nessun server, nulla caricato (una cartella cloud fa eccezione, vedi l'ultimo passo). Per ogni pulsante e regola in un unico punto, vedi l'argomento *Documenti: check-out, revisioni e rilascio* dove l'app lo prevede.

## 1. Impostare la cartella di progetto

1. Scegliere {{ui:Documenti…}} nel menu {{ui:Altro}} della scheda **Vista**, oppure digitare `DOCUMENTS` (o `DOCS`) e premere {{key:Enter}}.
2. Scegliere {{ui:Scegli la cartella di progetto}} e selezionare la cartella che contiene i disegni del progetto. (Le cartelle di progetto funzionano in Studio e nei browser che sanno aprire una cartella, come Chrome ed Edge. Negli altri browser il pannello lo segnala.)
3. Scegliere {{ui:Cambia}} accanto a **Utente:** e digitare il nome, `Ana` (se lo chiede, anche il nome di questo computer). Il pannello ora riporta *Utente: Ana su* e il computer. Il nome di chi opera compare su ogni operazione.
4. Scegliere {{ui:Crea un archivio in questa cartella}} e digitare il nome del progetto, `Riverside clinic`. Il pannello riporta *Archivio avviato per Riverside clinic.*

## 2. Mettere un file sotto controllo

1. Aprire **File non nell'archivio** e scegliere {{ui:Aggiungi}} accanto a `plans/A-101.dxf`.
2. Compare sotto **File nell'archivio** alla revisione **A.1**, stato **In lavorazione**. A.1 è la sua prima copia: l'archivio conserva una copia di ogni revisione.

## 3. Check-out, modifica, check-in

1. Scegliere {{ui:Apri}} accanto a `plans/A-101.dxf`. Il disegno si apre in CadCraft e il pannello si chiude per lasciarlo visibile. Il pannello resta a un comando di distanza: `DOCUMENTS`.
2. Riaprire il pannello e scegliere {{ui:Check-out}}. La riga ora riporta **In check-out a Ana**. È stato creato un file di blocco in `.ccvault/locks`; nessun altro può fare il check-out di questo file finché non viene fatto il check-in.
3. Disegnare qualcosa: aggiungere una linea, spostare un muro. Nulla di quanto fatto può essere salvato sul file dell'archivio se il disegno non è in check-out a Ana; {{ui:Salva con nome}} funziona sempre per una copia personale.
4. Aprire il pannello, scegliere {{ui:Check-in}} e digitare cosa è cambiato (`Spostata la porta`). Il pannello riporta *Check-in eseguito come A.2*. Il file nella cartella di progetto è ora il disegno che era aperto, e il blocco è stato rimosso. Eseguire il check-in senza modifiche mantiene la revisione.

Se si cambia idea, {{ui:Annulla check-out}} restituisce il file senza una nuova revisione.

## 4. Revisione e rilascio

1. Scegliere {{ui:Invia in revisione}}. Lo stato diventa **In revisione** e il file è in sola lettura.
2. Prima di approvare, scegliere {{ui:Impostazioni del progetto}} ed elencare chi può approvare (un nome per riga), per esempio `Ben` e `Carla`, e spuntare la regola per cui chi approva deve essere diverso dall'autore. Scegliere {{ui:Salva impostazioni}}. Ora l'archivio stesso rifiuta chiunque altro.
3. Ben (o Carla) sceglie {{ui:Approva}} e digita il nome di chi approva. Lo stato diventa **Rilasciato** e la revisione diventa **A**, con *approvato da* e il nome. Un file rilasciato è in sola lettura. {{ui:Rimanda indietro}} lo avrebbe riportato a In lavorazione, con un motivo.

Il nome dell'approvatore è quello digitato nel pannello: è una registrazione di chi ha firmato, non una prova di identità.

## 5. Una nuova revisione

1. Sul file rilasciato, scegliere {{ui:Nuova revisione}}. Il file viene riservato per la lettera successiva.
2. Modificarlo, poi scegliere {{ui:Check-in}}. La revisione è **B.1**, in lavorazione. Rilasciarla allo stesso modo e diventerà **B**. {{ui:Annulla check-out}} prima del primo check-in la lascia a **A**.

Le lettere delle revisioni vanno A, B … Z, AA, AB. Se lo standard dell'ufficio ne salta alcune, l'impostazione di progetto *Usa la sequenza ASME Y14.35* salta I, O, Q, S, X e Z per le revisioni successive.

## 6. Vedere cosa è successo

Scegliere il nome del file per aprirne i dettagli:

- **{{ui:Cronologia}}**: ogni evento, dal più recente, con chi, quale computer e quando: *Check-in A.2* da Ana, *Rilasciato* da Ben, e così via.
- **{{ui:Revisioni}}**: la tabella delle revisioni. {{ui:Apri copia}} apre una revisione come semplice copia che non può sovrascrivere il file dell'archivio; {{ui:Confronta con}} elenca cosa è stato aggiunto, rimosso e modificato rispetto alla revisione precedente, o a un'altra.
- **{{ui:Usa}}**: i disegni a cui questo si collega (riferimenti esterni).
- **{{ui:Usato da}}**: elenca ogni altro disegno dell'archivio che si collega a questo: se si modifica una pianta di base, si sa quali tavole controllare.

## Revisione sulla tavola

Con il disegno aperto (e un layout al suo interno), scegliere {{ui:Tabella delle revisioni}}: una tabella delle revisioni rilasciate viene disegnata in alto a destra della tavola. Scegliere {{ui:Compila i cartigli}} per riempire gli attributi del cartiglio contrassegnati `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` o `APPROVED_BY` con la revisione, lo stato, la data e l'approvatore del file. Quando si approva il rilascio successivo, la tabella delle revisioni viene aggiornata.

## 7. Cosa vede Ben mentre il file è in check-out

Ora fare di nuovo il check-out del file, e chiedere a Ben di aprire la stessa cartella di progetto sul suo computer e di aprire il pannello. Sulla riga del file lui vede **In check-out da Ana sul computer di Ana dal** [orario], e nessun pulsante {{ui:Check-out}}. Se prova comunque, l'archivio rifiuta: il blocco è un file che il sistema non crea due volte, quindi due persone non possono avere entrambe il file, nemmeno nello stesso istante, quando la cartella è su disco in Studio. (In un browser la cartella consente solo un tentativo, e il pannello lo dice in **Cartella**.)

Se Ana è via e Ben ha bisogno del file, {{ui:Forza check-out}} lo libera. Lui deve digitare un motivo; viene registrato nel log con il nome di chi aveva il check-out. Quando il progetto elenca degli amministratori, solo loro possono farlo. Un check-out più vecchio del limite di scadenza (14 giorni per impostazione predefinita) viene segnato come *da molto tempo*. Dopo la forzatura, il check-in tardivo di Ana viene rifiutato, così le due persone non possono sovrascriversi a vicenda.

## 8. Cartelle cloud

Una cartella cloud è una cartella di progetto conservata nello spazio di archiviazione cloud del team, così il team non ha bisogno di un'unità condivisa. In Studio, con l'accesso all'account CadCraft, il pannello mostra {{ui:Apri una cartella cloud}} accanto a {{ui:Scegli la cartella di progetto}}. Scegliere e selezionare la cartella, elencata come spazio di lavoro / cartella. Un proprietario dello spazio di lavoro crea prima la cartella, e lo spazio di archiviazione cloud del team deve essere attivo. Tutto quanto sopra funziona allo stesso modo; il server crea il blocco, che è rigoroso tra persone. Se non si è connessi, il pannello chiede di accedere. In una normale scheda del browser il pulsante cloud non viene offerto: usare Studio.

## Prova

Eseguire gli otto passi qui sopra con una copia di un file reale. Per i passi a due persone serve un'altra persona, oppure due finestre con due nomi. Se si prova con una vera cartella condivisa, la pagina di test della Community elenca un controllo che chiede esattamente questo, e accetta i risultati.
