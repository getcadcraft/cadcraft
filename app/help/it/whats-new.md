---
title: Novità della 0.9
summary: Tratteggi che seguono il loro contorno, gruppi di layer, piani sovrapposti, muri intelligenti 2D con porte e finestre, stili di testo e un editor di testo formattato, una riga di comando mobile, scatto alla griglia, dieci modi di disegnare un arco e il pannello Documenti.
keywords: novità, 0.9, note di rilascio, changelog, tratteggio, tratteggio associativo, hatchedit, file pat, file di motivo, gruppi di layer, laygroup, piani, piani sovrapposti, floorlayers, muri intelligenti, muro, porta, finestra, strumenti muro, stile di testo, stile, editor mtext, testo a paragrafo, formattazione, riga di comando mobile, riga di comando, area superiore, compatta, snap alla griglia, grid snap, f9, arco, pannello documenti, check out, acciaio UK, draw.io, testo thai, dxf r12, whats new, 0.8, 0.8.1, versione, nuove funzioni, completamento automatico, ghost, tab, sketchfix, photosketch, autosheet, dettagli, gridmove, autodim, tag, redline, merge, git, fossil, accesso, disegno senza vista, lettore di schermo, limiti, direzioni, aunits, shx, diagramma, ole, cronologia, confronta, a parole, proprietà, piedi e pollici, stretch, lingue, dispositivi di input, problemi, live, assistenti
from: 8b6dea0b
---

Ecco che cosa è cambiato in CadCraft 0.9, rispetto alla 0.8.1. CadCraft è l'app di disegno 2D e 3D di CadCraft Studio 0.9 e delle sue otto app. La 0.9 completa il disegno in pianta, aggiunge stili di testo e un vero editor di testo, e dà più spazio sullo schermo.

## Novità

### Disegno in pianta

- **Tratteggi che seguono il loro contorno.** {{cmd:HATCH}} si collega a ciò che lo delimita. Spostare, ruotare o scalare il contorno e il tratteggio e il suo motivo lo seguono; rimodellarlo e il tratteggio viene ricalcolato. {{cmd:HATCHEDIT}} (`HE`) modifica un tratteggio in seguito e crea o interrompe il collegamento. Vedere [Tratteggio e aree di riempimento](topic:hatch).
- **File di motivi per il tratteggio.** Alla richiesta di {{cmd:HATCH}} `Specificare un punto interno`, digitare `F` (File di motivo) e scegliere un file `.pat`. Sono stati provati solo file scritti nel formato consueto.
- **Gruppi di layer.** Negli {{ui:Strumenti}} del pannello {{ui:Layer}}: {{ui:Nuovo gruppo}}, {{ui:Aggiungi gruppi predefiniti}}, {{ui:Raggruppa per nome}}, e {{ui:Trova un layer}}; oppure digitare {{cmd:LAYGROUP}} (`LG`). Vedere [Organizzare un disegno con i layer](topic:layers#group-layers).
- **Piani sovrapposti.** {{cmd:FLOORS}} (`FLR`), oppure {{ui:Piani…}} nel menu {{ui:Altro}} del gruppo {{ui:Vista}}. Una viewport su una tavola può mostrare un piano scegliendo {{ui:Piano visualizzato}} nelle Proprietà. {{cmd:FLOORLAYERS}} trasforma i piani in layer per un file destinato a qualcun altro. Vedere [Sovrapporre piani in un disegno](topic:floors).
- **Muri, porte e finestre intelligenti 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. Angoli, unioni a T e incroci sono calcolati automaticamente. I muri conservano una registrazione di come si uniscono, e le Proprietà ottengono {{ui:Non consentire unione all'inizio}} / {{ui:Non consentire unione alla fine}}, una {{ui:Linea di posizione}} e una {{ui:Lunghezza}} modificabile. Vedere [Disegnare muri 2D, porte e finestre](topic:walls-2d).
- **Lo strumento muro sui muri in pianta.** Digitare {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e gli altri. Non hanno ancora pulsanti nella barra degli strumenti. Vedere [Forme, tagli, offset e bloccaggi per i muri 2D](topic:wall-tools-2d).

### Testo

- **Stili di testo.** {{cmd:STYLE}} (`ST`), oppure {{ui:Stile testo}} nella barra {{ui:Disegna}}: stili con nome, con un tipo di carattere, un'altezza, un fattore di larghezza e un'inclinazione. Vedere [Impostare il tipo di carattere e la dimensione del testo con gli stili di testo](topic:text-styles).
- **Un editor di testo a paragrafo formattato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doppio clic sul testo apre una casella con tipo di carattere, dimensione, grassetto, corsivo, sottolineato, barrato, colore, allineamento e i simboli di grado, più-meno e diametro, più {{ui:OK}} e {{ui:Annulla}}. Vedere [Formattare il testo a paragrafo](topic:format-paragraph-text).
- **Un diagramma da XML di draw.io.** {{cmd:DIAGRAM}} (`T2D`) legge anche l'XML di draw.io incollato. Vedere [Disegnare un diagramma da testo](topic:text-to-diagram).
- **Testo thai in una stampa PDF.** Prima veniva stampato con punti interrogativi.

### Più spazio e ausili al disegno

- **Una riga di comando mobile e più sottile, e un'area superiore compatta.** Trascinare il grip della riga di comando per renderla mobile, trascinare il suo bordo superiore per averne meno righe, {{key:F2}} apre la cronologia. {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Riga di comando}} e le scelte dell'area superiore hanno le stesse impostazioni. Vedere [Impostazioni](topic:settings#command-line).
- **Menu snap agli oggetti.** Fare clic destro su {{ui:Snap}} nella barra di stato, oppure digitare {{cmd:OSNAP}}.
- **Snap alla griglia.** Il pulsante {{ui:Snap a griglia}} nella barra di stato, oppure {{key:F9}}: i punti scelti vanno al punto di griglia più vicino quando nessuno snap a oggetto ha preso il punto.
- **Arco in dieci modi, e Continua.** {{ui:Arco}} nella barra {{ui:Disegna}} o {{cmd:ARC}}: a 3 punti, la famiglia Inizio/Centro/Fine e la famiglia Centro/Inizio/Fine, e Continua (premere {{key:Enter}} nel punto di inizio) dall'ultima linea, arco o polilinea.
- **Il pannello Documenti.** {{cmd:DOCUMENTS}} (`DOCS`) oppure {{ui:Documenti…}} nel menu {{ui:Altro}} del gruppo {{ui:Vista}}: revisione, stato e prelievo per ogni disegno in una cartella di progetto. Si apre come finestra di dialogo centrata. Vedere [Documenti](topic:documents).

### File

- **Misure di acciaio UK.** 976 sezioni nel pannello Standard, digitate come sui disegni (per esempio `305x165x40 UB`).
- **Pacchetti sudafricani** (pratica di disegno e regolamenti edilizi) come pacchetti dell'add-on Regolamenti edilizi. I numeri non sono verificati.
- **Add-on per CadCraft,** aggiunti su richiesta e disattivati di default: progettazione dell'illuminazione interna, progettazione di chip (da HDL al layout), incisione con router, simulazione di circuiti, pignoni per catene a rulli e pacchetti nazionali di Regolamenti edilizi.

## Corretto

- Spostare, ruotare o scalare un tratteggio lasciava indietro il suo motivo.
- {{cmd:GRIDMOVE}} trascinava un intero muro in pianta che inizia solo sulla linea di griglia. Ora un muro è valutato dalle sue estremità.
- La griglia era visibile solo entro i limiti del disegno anche con i limiti disattivati.
- L'elenco dei blocchi nel pannello laterale scorre, e un nome che non è un blocco elenca i blocchi che iniziano con quel nome ("Intendevi forse").
- I file DXF R12 che AutoCAD rifiutava ("Unknown group 1001 for table") ora si aprono.
- I file molto grandi (circa 70.000 entità e oltre) non si aprivano, con "Maximum call stack size exceeded".
- I file DWG di AutoCAD 2018 e successivi con una versione di manutenzione alta non si aprivano, con "bad BITLONG code 11".
- Nella casella del testo a paragrafo, una nuova dimensione digitata per una parte selezionata mantiene la selezione.

## In tutte le app

Suggerimenti Bootstrap su ogni controllo con un suggerimento, un suggerimento d'avvio che si può chiudere, schede a scorrimento quando non entrano, e un titolo della scheda del browser che segue il disegno aperto (`<drawing> - CadCraft | CadCraft`). {{ui:Impostazioni}} › {{ui:Layout}} ora è un menu a tendina di scelte su due righe. L'elenco delle lingue in {{ui:Impostazioni}} è più lungo che nella 0.8. Il co-editing Live, le raccolte della Libreria e le unità di peso e temperatura sono descritti nelle note di Studio.

## Limiti dichiarati

- Il testo a paragrafo non ha elenchi puntati o numerati, righello delle tabulazioni né giustificazione. Le stampe PDF impostano il testo in Helvetica.
- I muri in pianta sono rettilinei, quindi un arco viene disegnato come brevi muri. La verifica della comunità sullo strumento muro è in attesa.
- I gruppi di layer non sono scritti nel formato proprio di AutoCAD, quindi AutoCAD mostra un elenco piatto. Gli altri programmi mostrano tutti i piani insieme, a meno che non si esegua {{cmd:FLOORLAYERS}}.
- Il pannello Documenti non è stato provato da due persone su una vera condivisione. L'incisione con router non è stata eseguita su nessuna macchina reale. La stima dell'illuminazione è stata verificata con un tracciamento dei fotoni, non con un altro programma. Gli add-on di ingegneria sono strumenti di verifica, non sostituiscono la revisione di un ingegnere.
- Le lingue diverse dall'inglese sono bozze automatiche, e alcune delle nuove parole sono solo in inglese.

## Precedenti: 0.8 e 0.8.1

Ecco che cosa è cambiato in CadCraft 0.8 e 0.8.1, rispetto alla 0.7. La 0.8 (1 novembre 2026) aggiunge strumenti di aiuto al disegno che lavorano dal disegno stesso, con regole sul computer e senza modelli, e la 0.8.1 (2 novembre 2026) corregge i bug segnalati dopo di essa.

### Novità

**Un disegno che completa il pensiero**

- **Un fantasma mostra che cosa viene dopo.** Senza un comando in corso, un fantasma grigio tratteggiato mostra ciò che i motivi del disegno indicano come successivo: il montante successivo alla stessa spaziatura, il passo successivo di una scala, il muro mancante di un locale. Premere {{key:Tab}} per disegnarlo come un solo passo di annullamento, oppure {{key:Esc}} per scartarlo. Guarda solo gli oggetti più recenti, quindi resta fluido su un disegno grande. Disattivarlo in {{ui:Impostazioni}} › {{ui:CadCraft}} oppure con {{cmd:AUTOCOMPLETE}} `Off`.
- **Il punto successivo mentre si disegna una linea.** Nel mezzo di {{cmd:LINE}} o {{cmd:PLINE}} il fantasma è il punto successivo: il passo successivo di una scala, il quarto angolo di un rettangolo, oppure il punto che lo chiude. Avvicinare il cursore e premere {{key:Tab}}, come se si fosse cliccato lì.
- **Schizzi a penna diventano geometria precisa.** {{cmd:SKETCHFIX}}: disegnare tratti grezzi con una penna, un mouse o un dito e ciascuno diventa una linea, un cerchio, un arco, un rettangolo o una polilinea pulita, agganciata a ciò che è già disegnato. Vedere [Schizzare con una penna e ottenere geometria precisa](topic:sketch-with-a-pen).
- **Una foto di uno schizzo diventa un disegno.** {{cmd:PHOTOSKETCH}} (`PSK`) trova il foglio in una foto, raddrizza la prospettiva, applica il formato del foglio e la scala indicati, e traccia le linee a penna su un layer per ogni colore di penna. Le scritte non vengono tracciate.
- **Quotatura per regole.** {{cmd:AUTODIM}} (`ADIM`) crea catene di quote lungo i lati scelti, una dimensione complessiva, larghezze di aperture, diametri di fori e, con `Grid`, la spaziatura della griglia. Non ripete mai una quota già presente.
- **Spostare una linea di griglia e l'insieme la segue.** {{cmd:GRIDMOVE}} (`GM`): i muri che terminano sulla linea di griglia si allungano con essa, quelli che giacciono lungo di essa, i pilastri, il suo cerchietto e la sua etichetta si spostano, e le quote su di essa misurano la nuova spaziatura. Un solo passo di annullamento.

**Tavole, dettagli ed etichette**

- **Tavole che si impaginano da sole.** {{cmd:AUTOSHEET}} prende le viste denominate (oppure i singoli pezzi del modello), sceglie un formato di carta e una scala standard, e colloca le viste su nuove tavole con un cartiglio e una didascalia con nome e scala. Tutto resta modificabile. Vedere [Impaginare le tavole per me](topic:lay-out-sheets-for-me).
- **I dettagli della propria azienda, proposti mentre si disegna.** {{cmd:DETAILS}} (`DET`) conserva i propri blocchi di dettaglio. Quando ciò che si seleziona corrisponde a uno di essi, tramite le parole nei nomi dei layer, nei nomi dei blocchi e nelle note, la barra di stato lo segnala; si sceglie e si colloca. {{cmd:DETAILS}} › Condividi mette l'elenco nella cartella Documenti e porta ciò che il team ha aggiunto. Le Impostazioni disattivano le proposte.
- **Tag sui blocchi.** {{cmd:TAGS}} definisce un tag (il suo tipo, i valori che può assumere, i blocchi a cui si applica), lo imposta sui riferimenti a blocco selezionati e li elenca come un abaco che si può salvare come CSV. Le definizioni sono conservate nel DWG. Vedere [Tag](topic:tags).
- **Limiti del disegno.** {{cmd:LIMITS}} imposta un rettangolo per il disegno: la griglia lo riempie e lo zoom Tutto lo mostra. I limiti appaiono come contorno e sono salvati in DWG e DXF, insieme ai limiti carta. Vedere [Impostare i limiti del disegno](topic:drawing-limits).

**Lavorare con altre persone e altri programmi**

- **Trasformare un'annotazione in una revisione.** {{cmd:REDLINE}} legge il pacchetto scritto da MarkupCraft ed elenca ogni modifica. Si accetta o si rifiuta ciascuna con una nota; quelle accettate ottengono una nuvola di revisione e un registro delle revisioni, in un solo passo di annullamento, e si salva il file delle risposte che chiude le annotazioni in MarkupCraft. Vedere [Trasformare un'annotazione in una revisione](topic:redline-to-revision).
- **Disegni che git e Fossil possono unire.** Con {{ui:File adatti al merge}} attivo in {{ui:Impostazioni}} › {{ui:CadCraft}}, ogni oggetto riceve una chiave che non cambia mai (i file sono circa il 10 per cento più grandi). `cadcraft merge base ours theirs` poi unisce, oggetto per oggetto, le modifiche di due persone a un DWG o DXF, e segnala solo dove due persone hanno cambiato la stessa cosa. Vedere [Unire le modifiche di due persone a un disegno](topic:merge-drawings).
- **Che cosa è cambiato, a parole.** Nella Cronologia, Confronta dà un elenco semplice: dove le cose sono cambiate, quanto sono grandi le zone, che cosa è stato aggiunto, rimosso o modificato, e il testo modificato. Vedere [Dire a parole che cosa è cambiato](topic:changes-in-words).
- **Direzioni e angoli.** Digitare una direzione come azimut da topografo, per esempio N45°23'30"E, oppure in gradi, primi e secondi, dove si chiede un angolo; AUNITS imposta come vengono mostrati gli angoli. Vedere [Digitare e mostrare direzioni e angoli](topic:bearings-and-angles).
- **Propri font SHX.** Dare a CadCraft una cartella di font SHX: gli stili di testo che li nominano vengono disegnati con essi, a schermo e nelle stampe. Vedere [Disegnare testo con i propri font SHX](topic:shx-fonts).
- **Un diagramma da testo.** {{cmd:DIAGRAM}} legge un diagramma di flusso Mermaid, un diagramma a componenti PlantUML, D2 oppure un elenco da-a, e disegna blocchi e connettori modificabili. Vedere [Disegnare un diagramma da testo](topic:text-to-diagram).
- **Oggetti OLE in un DWG.** {{cmd:OLELIST}} elenca gli oggetti OLE che un DWG contiene e che CadCraft non può collocare da solo, e colloca una copia di un'immagine dove si indica. Vedere [Immagini](topic:pictures#objects-from-other-programs-ole).
- **I propri calcoli restano con il disegno.** I fogli di calcolo e le ragioni di progetto sono conservati nel DWG insieme alla tabella delle classi.

**Disegno senza vista**

- Attivare {{ui:Disegno senza vista}} in {{ui:Impostazioni}} (oppure digitare {{cmd:ACCESS}} e rispondere `On`). CadCraft legge ad alta voce ogni comando e risultato tramite il lettore di schermo, descrive il disegno e ciò che è vicino al cursore, consente di spostare il cursore e scegliere punti con la tastiera, e riproduce un suono per ogni snap e grip. Dove il browser sa riconoscere il parlato sul computer, i comandi possono essere dettati. Vedere [Disegnare senza vista](topic:draft-without-sight).

**In tutte le app**

- **Lingue.** 54 lingue; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili, uzbeco). Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller di gioco e comandi MIDI.
- **Righe della barra degli strumenti e la griglia delle proprietà.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre A capo, 2 righe o 1 riga nelle altre app. CadCraft mantiene la propria impostazione in {{ui:Impostazioni}} › {{ui:CadCraft}} (vedere [Righe della barra degli strumenti](topic:settings#toolbar-rows)). La griglia delle proprietà condivisa è in altre tre app, non in CadCraft.
- **Problemi, Live e add-on.** Un pannello Problemi condiviso che avvisa in ogni app, una vista Live di chi si trova dove in CadCraft Studio (vedere [Lavorare insieme su un disegno con Live TeamWork](topic:work-live)), e un elenco degli add-on.
- **Collegare l'IA.** Un unico collegamento da CadCraft Studio a tutte e otto le app, con un livello di sola lettura, suggerimento o modifica per ogni app, e un registro in parole semplici di ciò che l'assistente ha fatto. CadCraft non ha un'IA propria, e Chiedi in ogni app usa l'IA che si collega.

### Corretto nella 0.8.1

- **Le Proprietà mostravano 150 invece di 12'-6"** nei disegni in piedi e pollici. I campi che l'app legge da sola mantengono di nuovo il proprio testo.
- **I file DWG la cui sezione delle classi veniva letta come tipo sbagliato** (GitHub cadcraft#5) ora si aprono correttamente.
- **Il mirino non compare più dietro le finestre a comparsa.**
- **Studio e le edizioni impacchettate possono cambiare lingua durante l'esecuzione.** Prima erano solo in inglese. Non ancora provato su tutte le piattaforme: segnalare se la lingua non cambia.
- **I tablet in verticale** cedono altezza della griglia alla tela, e la modalità fogli parte da 760 px o meno.
- **STRETCH con una finestra di intersezione, e LIMITS,** erano stati segnalati su Studio 0.8.0 ed erano già corretti nella build web 0.8; l'installer di chi ha segnalato era più vecchio. Studio 0.8.1 li contiene.

### Non ancora in questa versione

- **0.8 e 0.8.1 non sono firmate digitalmente.** Windows può avvisare (scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}); su un Mac, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. Le versioni per store sono sospese, e la build per iPad e iPhone non è stata ricostruita per la 0.8.1.
- **Schizzi a penna e foto di schizzi** sono stati provati solo su foto inventate e con un mouse, non ancora con una penna reale, uno schermo touch o uno schizzo a mano su carta.
- **Disegno senza vista** è stato testato con controlli automatici, non ancora con un lettore di schermo o un tester non vedente.
- **La condivisione dei dettagli** non ha avuto un controllo a due persone, e una cartella Team Cloud Plan come cartella Documenti non è realizzata.
- **La unione (merge)** funziona per i file DWG e DXF di CadCraft; per i file delle altre app non è ancora realizzata.
- **Annulla tra finestre:** CadCraft segnala ogni passo concluso, ma Studio non ha ancora un unico Annulla per tutte le app; ogni app annulla i propri passi.
- **Gli oggetti OLE di un DWG** sono conservati ma non disegnati al loro posto.
- **La lettura delle tabelle di stile di stampa (file CTB)** da altri programmi è realizzata ma non è stata verificata con un file di un altro programma.
- **Collegare l'IA:** il collegamento con un solo clic in Studio, il connettore ospitato per l'IA nel browser, la propria chiave API dentro Studio e il pacchetto MCP pubblicato non sono promessi in questa versione.

Per la versione precedente, vedere [Novità della 0.7](topic:whats-new-0-7).
