---
title: Lavorare insieme su un disegno con Live TeamWork
summary: Che cosa cambia in CadCraft durante una sessione Live TeamWork da CadCraft Studio: cursori e selezioni degli altri, oggetti in modifica da altri, i bloccaggi dell'host, il proprio annullamento e l'unione da un browser sulla stessa rete.
keywords: live, live teamwork, studio live, insieme, collaborare, co-modifica, sessione, condividi live, unisciti, cursore, riserva, modifica, bloccaggio, livelock, liveunlock, livehold, blocca layer, blocca area, lucchetto, annulla, host, assistente, stesso file, molte persone, lento, limite, chi ha modificato, modifiche recenti, registro modifiche
from: 0497d2a3
---

## Cosa si impara

Che cosa si vede e che cosa succede alle proprie modifiche mentre più persone lavorano contemporaneamente sullo stesso disegno. CadCraft Studio avvia e si unisce alla sessione Live TeamWork (Condividi live, Unisciti); questa pagina riguarda il disegno stesso.

## Tutti disegnano insieme

Disegnare e modificare come al solito. Le proprie modifiche si vedono subito, anche prima che gli altri le abbiano, e quelle degli altri compaiono sullo schermo poco dopo che le fanno. Ogni comando funziona: disegno, modifica, layer, blocchi, tavole, quote, vincoli.

Due persone possono cambiare lo stesso oggetto. Quando si cambiano cose diverse, come il colore e un punto finale di una linea, entrambe le modifiche vengono mantenute. Quando si cambia la stessa cosa, vince la modifica più recente.

Restano solo proprie: il layer corrente, il colore e l'altezza del testo per i nuovi oggetti, le proprie impostazioni di quotatura, la propria vista, la vista divisa e l'UCS. Il disegno è condiviso; il modo in cui lo si guarda no.

## Altre persone nel disegno

- **Cursori:** il puntatore di ciascuna persona compare con il suo nome nel proprio colore, insieme al comando che sta eseguendo. Si vedono i cursori delle persone che lavorano vicino a ciò che è visibile sullo schermo.
- **Selezioni:** ciò che qualcuno ha selezionato è evidenziato con il suo colore.
- **In modifica:** un oggetto selezionato da qualcuno porta un'etichetta come "Ana sta modificando". Si può ancora cambiarne il colore o spostarlo, ma non eliminarlo, scomporlo o riscriverlo finché la persona non lo lascia. Selezionandolo si vede chi lo ha.
- **Chi lo ha cambiato per ultimo:** selezionare un oggetto che qualcun altro ha modificato in questa sessione, e la riga di comando indica chi e che cosa è stato cambiato ("Ben l'ha modificato per ultimo: CIRCLE."). Il pannello Live di Studio elenca ogni modifica recente sotto {{ui:Modifiche recenti}}. Niente di tutto questo viene salvato nel disegno: dura quanto la sessione.

## Riservare un layer o un'area mentre si lavora lì

Su un disegno grande con più persone, indicare quale parte è propria per ora:

1. Digitare `LIVEHOLD` e premere {{key:Enter}}.
2. Scegliere `L` e digitare un nome di layer (Invio mantiene il layer corrente), oppure scegliere `A` e indicare due angoli di un'area.
3. Le modifiche degli altri su quel layer, o agli oggetti in quell'area, vengono annullate e a loro viene comunicato che si sta lavorando lì. Si vede la propria area come cornice tratteggiata; gli altri la vedono nel proprio colore con il proprio nome, e i layer riservati sono elencati in alto a sinistra del loro disegno.
4. `LIVEHOLD`, poi `R`, rilascia tutto ciò che si è riservato. Lasciare la sessione rilascia anche questo.

Chiunque nella sessione può riservare, host compreso; i bloccaggi dell'host restano validi sopra. Una riserva non viene mai salvata nel file.

## Quando una modifica viene annullata

La copia del disegno dell'host controlla ogni modifica. Alcune non possono essere accettate: CadCraft le annulla sullo schermo e lo indica nella riga di comando, ad esempio:

- qualcuno ha eliminato l'oggetto, oppure il layer o il blocco di cui ha bisogno, poco prima;
- qualcuno sta modificando quell'oggetto, oppure ne ha riservato il layer o l'area in cui si trova;
- l'host lo ha bloccato;
- il blocco che si inserisce è stato eliminato con Elimina elementi inutilizzati, oppure un layer che si elimina contiene ancora oggetti.

## Annulla annulla il proprio lavoro

{{key:Mod+Z}} e {{ui:Annulla}} annullano il proprio ultimo comando, per intero, e lasciano intatto il lavoro degli altri. Quando qualcuno ha cambiato la stessa cosa nel frattempo, nulla viene annullato e la riga di comando indica chi l'ha cambiata. {{key:Mod+Y}} ripristina.

## Bloccaggi (l'host)

L'host può proteggere oggetti o un intero layer in modo che nessuno li cambi, host compreso, finché non vengono sbloccati:

1. Selezionare gli oggetti, poi digitare `LIVELOCK` e premere {{key:Enter}}. Oppure digitare `LIVELOCK` senza nulla selezionato e scegliere `L` per bloccare un layer per nome: anche gli oggetti aggiunti in seguito a quel layer vengono bloccati.
2. Gli oggetti bloccati sono disegnati tratteggiati con l'etichetta "Bloccato dall'host" sullo schermo di tutti.
3. `LIVEUNLOCK` li sblocca nello stesso modo.

I bloccaggi appartengono alla sessione: finiscono quando finisce e non vengono mai salvati nel file.

## Unirsi con lo stesso file

Se si è aperto proprio il file che ha aperto l'host (da una cartella condivisa o dalla stessa copia), unirsi dalla propria finestra di CadCraft in Studio: aprire il pannello {{ui:Variabili}} e usare {{ui:Unisciti qui}} con il codice dell'host. Vengono trasferite solo le modifiche fatte dopo che l'host lo ha aperto, quindi un disegno grande è pronto subito. Se il file è diverso, il disegno dell'host sostituisce il proprio sullo schermo (il file resta com'è). Funziona solo finché il proprio disegno non è cambiato dall'apertura.

## Assistenti in una sessione live

Un assistente collegato alla propria finestra di CadCraft (vedere la guida su come lavorare con assistenti IA) si unisce alla sessione come partecipante autonomo, mostrato a tutti come "Assistente (tramite <nome>)". L'host lo ammette come una persona; l'assistente dell'host si unisce subito. Le sue modifiche hanno un annullamento proprio: il proprio {{key:Mod+Z}} annulla il proprio lavoro, e l'annullamento dell'assistente annulla solo le sue. Lascia la sessione quando lo si scollega o si esce, e può lavorare nella sessione solo mentre si può modificare.

## Unirsi da un browser

Un collega senza Studio può inquadrare con un telefono, un tablet o un computer sulla stessa rete l'immagine con il codice dell'host. CadCraft si apre nel browser, chiede il proprio nome sulla riga di comando, e si riempie con il disegno dell'host quando l'host lo ammette. Un link di invito permette di unirsi da un'altra rete: l'host ha bisogno di una postazione Team Cloud Plan per l'app, gli altri si uniscono gratis, e il link funziona solo finché la sessione dell'host è aperta.

## Molte persone su un disegno

Ogni modifica va a tutti nella sessione, quindi più persone ci sono, più tempo impiega ogni modifica per arrivare a ciascuna, e i portatili e le connessioni più lente restano indietro per primi. La dimensione abituale di una sessione è 20 persone; l'host può consentirne di più per una sessione (vedere la guida su come lavorare insieme in live). Se il disegno sembra lento con molte persone, aiutano meno persone, meno persone che modificano nello stesso momento, o una connessione migliore.

## Quando la sessione finisce

Solo l'host salva il disegno. Quando l'host termina la sessione, tutti gli altri conservano una copia non salvata: salvarla se la si vuole conservare.

:::note
Una modifica annullata viene disegnata sopra gli oggetti vicini sul proprio schermo finché non si riapre il disegno. Tratteggi e oggetti riempiti che si sovrappongono possono apparire diversi dalla copia dell'host; il disegno in sé è lo stesso.
:::
