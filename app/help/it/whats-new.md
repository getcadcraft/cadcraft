---
title: Novità in 0.8 e 0.8.1
summary: Un fantasma che completa il disegno, schizzi a penna e foto di schizzi trasformati in geometria, tavole che si impaginano da sole, dettagli proposti mentre si disegna, GRIDMOVE e AUTODIM, tag, file adatti al merge, revisioni ricavate dalle annotazioni, disegno senza vista, limiti del disegno, direzioni, font SHX, diagrammi da testo e correzioni in 0.8.1.
keywords: novità, cosa c'è di nuovo, note di rilascio, registro modifiche, modifiche, 0.8, 0.8.1, versione, nuove funzioni, completamento automatico, fantasma, tab, sketchfix, photosketch, autosheet, dettagli, gridmove, autodim, tag, annotazione, merge, git, fossil, accesso, disegno senza vista, lettore di schermo, limiti, direzioni, aunits, shx, diagramma, ole, cronologia, confronta, a parole, proprietà, piedi e pollici, stira, lingue, dispositivi di input, problemi, live, assistenti
from: 9dd82db5
---

Ecco cosa è cambiato in CadCraft 0.8 e 0.8.1, rispetto alla 0.7. La 0.8 (1 novembre 2026) aggiunge strumenti di disegno che lavorano a partire dal proprio disegno, tramite regole sul computer e senza modello, mentre la 0.8.1 (2 novembre 2026) corregge i bug segnalati dopo di essa.

## Nuove funzioni

### Un disegno che completa l'idea

- **Un fantasma mostra cosa viene dopo.** Senza comandi in esecuzione, un fantasma grigio a linea tratteggiata mostra ciò che i motivi del disegno indicano come successivo: il montante successivo alla stessa spaziatura, il gradino successivo di una scala, il muro mancante di un locale. Premere {{key:Tab}} per disegnarlo come un unico passo di annullamento, oppure {{key:Esc}} per nasconderlo. Considera solo gli oggetti più recenti, quindi resta fluido anche su un disegno grande. Per disattivarlo, andare in {{ui:Impostazioni}} › {{ui:CadCraft}} oppure usare {{cmd:AUTOCOMPLETE}} `Off`.
- **Il punto successivo mentre si disegna una linea.** Durante {{cmd:LINE}} o {{cmd:PLINE}} il fantasma indica il punto successivo: il gradino successivo di una scala, il quarto angolo di un rettangolo, oppure il punto che lo chiude. Avvicinare il cursore e premere {{key:Tab}}, come se si fosse fatto clic lì.
- **Gli schizzi a penna diventano geometria precisa.** {{cmd:SKETCHFIX}}: disegnare tratti approssimativi con una penna, il mouse o un dito e ciascuno diventa una linea, un cerchio, un arco, un rettangolo o una polilinea pulita, agganciata a ciò che è già disegnato. Vedere [Schizzare con una penna e ottenere geometria precisa](topic:sketch-with-a-pen).
- **Una foto di uno schizzo diventa un disegno.** {{cmd:PHOTOSKETCH}} (`PSK`) individua il foglio in una foto, raddrizza la prospettiva, applica il formato carta e la scala indicati e trasporta i tratti a penna su un layer per ogni colore di penna. Le scritte a mano non vengono trasportate.
- **Quotare per regole.** {{cmd:AUTODIM}} (`ADIM`) crea catene di quote lungo i lati scelti, una quota complessiva, le larghezze delle aperture, i diametri dei fori e, con `Grid`, la spaziatura della griglia. Non ripete mai una quota già presente.
- **Spostare una linea di griglia e l'insieme segue.** {{cmd:GRIDMOVE}} (`GM`): i muri che terminano sulla linea di griglia si allungano con essa, i muri che corrono lungo di essa, i pilastri, il suo cerchietto e il tag si spostano, e le quote su di essa misurano la nuova spaziatura. Un unico passo di annullamento.

### Tavole, dettagli e tag

- **Tavole che si impaginano da sole.** {{cmd:AUTOSHEET}} prende le viste salvate (o i singoli pezzi del modello), sceglie un formato carta e una scala standard e colloca le viste su nuove tavole con un cartiglio e una didascalia con nome e scala. Tutto resta modificabile. Vedere [Impaginare le tavole per me](topic:lay-out-sheets-for-me).
- **I dettagli dello studio, proposti mentre si disegna.** {{cmd:DETAILS}} (`DET`) conserva i propri blocchi di dettaglio. Quando ciò che si seleziona corrisponde a uno di essi tramite le parole nei suoi layer, nei nomi dei blocchi e nelle note, la barra di stato lo segnala; si può selezionarlo e collocarlo. {{cmd:DETAILS}} › Condividi inserisce l'elenco nella cartella Documenti e importa ciò che il team ha aggiunto. Impostazioni disattiva i suggerimenti.
- **Tag sui blocchi.** {{cmd:TAGS}} definisce un tag (il suo tipo, i valori che può assumere, i blocchi a cui si applica), lo imposta sui riferimenti a blocco selezionati e li elenca come un abaco che si può salvare come CSV. Le definizioni sono conservate nel DWG. Vedere [Tag](topic:tags).
- **Limiti del disegno.** {{cmd:LIMITS}} imposta un rettangolo per il disegno: la griglia lo riempie e zoom Tutto lo mostra. I limiti appaiono come contorno e vengono salvati in DWG e DXF, insieme ai limiti del foglio. Vedere [Impostare i limiti del disegno](topic:drawing-limits).

### Lavorare con altre persone e altri programmi

- **Trasformare un'annotazione in una revisione.** {{cmd:REDLINE}} legge il pacchetto scritto da MarkupCraft ed elenca ogni modifica. Accettare o rifiutare ciascuna con una nota; quelle accettate ricevono una nuvola di revisione e un registro delle revisioni in un unico passo di annullamento, e si salva il file delle risposte che chiude le annotazioni in MarkupCraft. Vedere [Trasformare un'annotazione in una revisione](topic:redline-to-revision).
- **Disegni che git e Fossil possono unire.** Con {{ui:File adatti al merge}} attivo in {{ui:Impostazioni}} › {{ui:CadCraft}}, ogni oggetto riceve una chiave che non cambia mai (i file sono circa il 10 per cento più grandi). `cadcraft merge base ours theirs` unisce poi le modifiche di due persone a un oggetto DWG o DXF, oggetto per oggetto, e segnala solo dove due persone hanno cambiato la stessa cosa. Vedere [Unire le modifiche di due persone a un disegno](topic:merge-drawings).
- **Cosa è cambiato, a parole.** In Cronologia, Confronta fornisce un elenco semplice: dove sono cambiate le cose, quanto sono grandi le aree, cosa è stato aggiunto, rimosso o modificato, e il testo modificato. Vedere [Dire a parole cosa è cambiato](topic:changes-in-words).
- **Direzioni e angoli.** Digitare una direzione da rilievo, come N45°23'30"E, oppure in gradi, primi e secondi, ovunque venga richiesto un angolo; AUNITS imposta come vengono mostrati gli angoli. Vedere [Inserire e mostrare direzioni e angoli](topic:bearings-and-angles).
- **Font SHX propri.** Dare a CadCraft una cartella di font SHX: gli stili di testo che li indicano vengono disegnati con essi, a video e nelle stampe. Vedere [Disegnare testo con font SHX propri](topic:shx-fonts).
- **Un diagramma da testo.** {{cmd:DIAGRAM}} legge un diagramma di flusso Mermaid, un diagramma dei componenti PlantUML, D2 o un elenco da-a e disegna blocchi e connettori modificabili. Vedere [Disegnare un diagramma da testo](topic:text-to-diagram).
- **Oggetti OLE in un DWG.** {{cmd:OLELIST}} elenca gli oggetti OLE contenuti in un DWG che CadCraft non può collocare da solo, e colloca una copia di un'immagine dove indicato. Vedere [Immagini](topic:pictures#objects-from-other-programs-ole).
- **I calcoli restano con il disegno.** I fogli di calcolo e le motivazioni di progetto sono conservati nel DWG insieme alla tabella delle classi.

### Disegno senza vista

- Attivare {{ui:Disegno senza vista}} in {{ui:Impostazioni}} (oppure digitare {{cmd:ACCESS}} e rispondere `On`). CadCraft annuncia ogni comando e risultato tramite il lettore di schermo, descrive il disegno e ciò che è vicino al cursore, consente di spostare il cursore e selezionare i punti con la tastiera, e riproduce un suono per ogni snap e grip. Dove il browser può riconoscere il parlato sul computer, i comandi possono essere dettati. Vedere [Disegnare senza vista](topic:draft-without-sight).

### In ogni app

- **Lingue.** 54 lingue; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili, uzbeco). Le lingue diverse dall'inglese restano bozze automatiche finché un madrelingua non le legge.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller di gioco e comandi MIDI.
- **Righe della barra degli strumenti e la griglia delle proprietà.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre A capo, 2 righe o 1 riga nelle altre app. CadCraft mantiene una propria impostazione in {{ui:Impostazioni}} › {{ui:CadCraft}} (vedere [Righe della barra degli strumenti](topic:settings#toolbar-rows)). La griglia delle proprietà condivisa è presente in altre tre app, non in CadCraft.
- **Problemi, Live e add-on.** Un pannello Problemi condiviso che avvisa in ogni app, una vista Live di chi si trova dove in CadCraft Studio (vedere [Lavorare insieme su un disegno](topic:work-live)), e un elenco degli add-on.
- **Collegare la propria AI.** Un unico collegamento da CadCraft Studio a tutte e otto le app, con un livello per app di sola lettura, di suggerimento o di modifica, e un registro in parole semplici di ciò che l'assistente ha fatto. CadCraft non ha una propria AI, e Chiedi in ogni app usa l'AI che si collega.

## Corretto in 0.8.1

- **Le proprietà mostravano 150 invece di 12'-6"** nei disegni in piedi e pollici. I campi che l'app legge da sola tornano a mantenere il proprio testo.
- **I file DWG la cui sezione delle classi veniva letta come tipo sbagliato** (GitHub cadcraft#5) ora si aprono correttamente.
- **Il mirino non compare più dietro le finestre a comparsa.**
- **Studio e le edizioni impacchettate possono cambiare lingua durante l'esecuzione.** Prima erano solo in inglese. Non ancora provato su tutte le piattaforme: segnalarci se la lingua non cambia.
- **Tablet in verticale:** la tela riceve l'altezza della griglia rimasta libera, e la modalità tavole parte da 760 px o meno.
- **STRETCH con una finestra di intersezione e LIMITS** sono stati segnalati su Studio 0.8.0, ma erano già corretti nella build web 0.8; l'installer di chi ha segnalato era più vecchio. Studio 0.8.1 li include.

## Non ancora in questa versione

- **0.8 e 0.8.1 non hanno la firma del codice.** Windows può avvisare (scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}); su Mac, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. Le versioni per gli store sono sospese, e la build per iPad e iPhone non è stata ricompilata per la 0.8.1.
- **Schizzi a penna e foto di schizzi** sono stati provati solo con foto di prova e un mouse, non ancora con una penna reale, uno schermo touch o uno schizzo a mano su carta.
- **Disegno senza vista** è stato testato con controlli automatici, non ancora con un lettore di schermo o un tester non vedente.
- **La condivisione dei dettagli** non ha avuto una verifica con due persone, e una cartella Team Cloud Plan come cartella Documenti non è stata realizzata.
- **L'unione** funziona per i file DWG e DXF di CadCraft; per i file delle altre app non è stata realizzata.
- **Annulla tra finestre:** CadCraft segnala ogni passo completato, ma Studio non ha ancora un unico Annulla per tutte le app; ogni app annulla i propri passi.
- **Gli oggetti OLE di un DWG** vengono conservati ma non disegnati nella posizione originale.
- **La lettura delle tabelle di stile di stampa (file CTB)** di altri programmi è realizzata ma non è stata verificata con un file di altri programmi.
- **Collegare la propria AI:** il collegamento con un clic in Studio, il connettore ospitato per l'AI nel browser, la propria chiave API in Studio e il pacchetto MCP pubblicato non sono previsti in questa versione.

Per la versione precedente, vedere [Novità in 0.7](topic:whats-new-0-7).
