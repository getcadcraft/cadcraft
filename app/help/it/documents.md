---
title: Documenti: check-out, revisioni e rilascio
summary: Tenere sotto controllo i disegni di una cartella di progetto: fare il check-out di un file perché nessun altro lo modifichi, fare il check-in come nuova revisione, inviarlo in revisione e rilasciarlo con il nome di un approvatore; cronologia, usi, distinta base e cartigli che mostrano la revisione.
keywords: impostazioni del progetto, approvatori, amministratori, lettere di revisione, ASME, sola lettura, confronta revisioni, apri copia, partcraft, bimcraft, documenti, DOCUMENTS, DOCS, archivio, gestione documenti, pdm, check-out, check-in, checkout, checkin, blocca, revisione, rev, lettera di revisione, rilascio, rilasciato, approva, approvazione, verifica, obsoleto, dove è usato, bom, distinta base, cartiglio, tabella delle revisioni, cartella di progetto
from: ee938722
---

## Cosa si ottiene

Una cartella di progetto in cui ogni disegno ha una revisione (A.1, A.2 … poi A, B …) e uno stato (In lavorazione, In revisione, Rilasciato, Obsoleto), in cui una sola persona alla volta può modificare un file, e in cui ogni check-out, check-in, approvazione e check-out forzato viene registrato con chi lo ha fatto e quando.

Tutto è conservato nella cartella stessa, in una cartella nascosta `.ccvault` accanto ai disegni. Una cartella su un'unità condivisa o una cartella sincronizzata funziona per un intero team. Non c'è alcun server e nulla viene caricato.

## Aprire Documenti

Digitare `DOCUMENTS` (oppure `DOCS`) e premere {{key:Enter}}. Il pannello si apre accanto al disegno.

Scegliere {{ui:Scegli la cartella di progetto}} e selezionare la cartella che contiene i disegni del progetto. Le cartelle di progetto funzionano in CadCraft Studio e nei browser che possono aprire una cartella (Chrome, Edge). Negli altri browser il pannello lo segnala.

La prima volta, digitare il proprio nome (compare su ogni operazione) e il nome di questo computer. Se si è effettuato l'accesso, il nome è già inserito.

## Creare un archivio

Una cartella che non è ancora un archivio offre {{ui:Crea un archivio in questa cartella}}. Digitare il nome del progetto. Poi aprire {{ui:File non nell'archivio}} e scegliere {{ui:Aggiungi}} accanto a ogni file da mettere sotto controllo. Un file aggiunto parte dalla revisione **A.1**, In lavorazione.

## Modificare un disegno

1. Scegliere {{ui:Apri}} accanto a un disegno. Si apre in CadCraft. Se non è in check-out a proprio nome, lo si può solo consultare, senza modificarlo: {{ui:Salva}} rifiuta di sovrascriverlo e ne spiega il motivo (usare {{ui:Salva con nome}} per conservare una copia propria).
2. Scegliere {{ui:Check-out}}. Nessun altro può ora fare il check-out; il pannello mostra chi lo ha, su quale computer e da quando.
3. Disegnare.
4. Scegliere {{ui:Check-in}} e descrivere cosa è cambiato. Il disegno aperto viene salvato nella cartella di progetto nel proprio formato e diventa la revisione successiva (A.1, poi A.2). Fare il check-in senza modifiche mantiene la revisione.

{{ui:Annulla check-out}} restituisce il file senza creare una nuova revisione.

## Verifica e rilascio

- {{ui:Invia in revisione}}: il file è in sola lettura durante la verifica.
- {{ui:Approva}}: digitare il nome dell'approvatore. A.3 diventa **A**, Rilasciato. I file rilasciati sono in sola lettura.
- {{ui:Rimanda indietro}}: torna In lavorazione, con il motivo.
- {{ui:Nuova revisione}} su un file rilasciato lo mette in check-out per la lettera successiva: il suo primo check-in è **B.1**. {{ui:Annulla check-out}} prima di allora lo lascia a A.
- {{ui:Rendi obsoleto}} ritira un file rilasciato.

Un progetto può conservare un elenco di chi può approvare e può richiedere che l'approvatore non sia la persona che ha fatto il check-in del file (vedi Impostazioni del progetto più avanti).

## Impostazioni del progetto

Aprire {{ui:Impostazioni del progetto}} nel pannello:

- **Approvatori**: un nome per riga. Se ce ne sono, solo loro possono approvare un rilascio.
- **L'approvatore deve essere diverso dall'autore**: la regola dei "quattro occhi".
- **Amministratori**: un nome per riga. Se ce ne sono, solo loro possono forzare il check-out di un altro o modificare queste impostazioni.
- **Lettere di revisione da escludere**: {{ui:Usa la sequenza ASME Y14.35}} salta I, O, Q, S, X e Z, oppure digitare le proprie lettere. Le lettere già assegnate restano; la scelta vale per le revisioni successive.
- **Un check-out è considerato scaduto dopo**: il numero di giorni (14 per impostazione predefinita).

Scegliere {{ui:Salva impostazioni}}. La modifica viene registrata nel log con chi l'ha fatta.

## Un file è rimasto in check-out

{{ui:Forza check-out}} libera un file che un altro ha in check-out (è assente, o il suo computer si è guastato). Bisogna digitare un motivo: viene registrato nel log con il nome di chi aveva il check-out. Se il progetto ha degli amministratori, solo loro possono farlo. Un check-out più vecchio di 14 giorni viene segnalato come check-out di lunga durata.

## Cronologia, revisioni, usi, usato da

Scegliere il nome di un file per vedere:

- {{ui:Cronologia}}: ogni evento, dal più recente, con chi, quale computer e quando.
- {{ui:Revisioni}}: ogni revisione conservata. Una copia di ogni revisione è nell'archivio (lo stesso contenuto viene conservato una sola volta). {{ui:Apri copia}} apre quella revisione come copia semplice, che non può sovrascrivere il file dell'archivio. {{ui:Confronta con}} elenca cosa è stato aggiunto, rimosso e modificato tra quella revisione e la precedente (o un'altra scelta), e lo evidenzia sul disegno.
- {{ui:Usa}}: i disegni a cui è collegato (riferimenti esterni, xref), i documenti a cui punta un modello IFC, le parti di un assieme PartCraft.
- {{ui:Usato da}}: ogni file dell'archivio che usa questo.

{{ui:Distinta base (CSV)}} salva l'elenco di tutto ciò che usa un file, livello per livello, con quantità, revisioni e stati, per un foglio di calcolo.

## Una tabella delle revisioni sulla tavola

Con un disegno aperto che ha un layout, scegliere {{ui:Tabella delle revisioni}}. Una tabella delle revisioni rilasciate (revisione, data, da chi, approvato, descrizione) viene disegnata in alto a destra della tavola visualizzata. Quando si approva un rilascio, la tabella viene aggiornata.

## Revisione nel cartiglio

Assegnare agli attributi del cartiglio uno di questi tag e scegliere {{ui:Compila i cartigli}} sul disegno aperto:

| Tag | Compilato con |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | la revisione (B, o B.2 mentre è in lavorazione) |
| `VAULT.STATE` | lo stato (Rilasciato …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | la data dell'ultima revisione |
| `VAULT.APPROVER`, `APPROVED_BY` | chi ha approvato l'ultimo rilascio |

## PartCraft e BimCraft

PartCraft e BimCraft hanno lo stesso pannello Documenti per i propri file: parti e assiemi in PartCraft, modelli IFC in BimCraft. Il check-in salva il modello aperto nella cartella di progetto, e un assieme mostra quali parti usa e una distinta base.

## Da sapere

- Due persone sulla stessa cartella condivisa non possono fare entrambe il check-out di un file: il check-out è un file che il sistema rifiuta di creare due volte. In un browser, e in uno Studio la cui shell è precedente a questa funzione, la garanzia è quella che la cartella consente: due check-out nello stesso istante potrebbero riuscire entrambi. Il pannello indica quale dei due casi si applica.
- Non modificare né eliminare a mano la cartella `.ccvault`. Il log al suo interno è la registrazione; l'archivio ricostruisce il proprio elenco da lì, se necessario.
- Modificare un file nella cartella senza farne il check-out viene mostrato come {{ui:Modificato nella cartella senza check-out}}.
