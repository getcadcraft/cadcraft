---
title: Novità della 0.9 (precedente)
summary: Tratteggi che seguono il loro contorno, gruppi di layer, piani sovrapposti, muri intelligenti 2D con porte e finestre, stili di testo e un editor di testo formattato, una riga di comando mobile, aggancio alla griglia, dieci modi per disegnare un arco e il pannello Documenti.
keywords: novità 0.9, versione precedente, novità, 0.9, note di rilascio, registro modifiche, tratteggio, tratteggio associativo, hatchedit, file pat, file di motivo, gruppi di layer, laygroup, piani, piani sovrapposti, floorlayers, muri intelligenti, muro, porta, finestra, strumenti muro, stile di testo, stile, editor mtext, testo a paragrafo, formattazione, riga di comando mobile, riga di comando, area superiore, compatta, aggancio alla griglia, f9, arco, pannello documenti, check out, misure acciaio UK, draw.io, testo thai, dxf r12, cosa c'è di nuovo, cronologia, 0.8, 0.8.1, versione, nuove funzioni, completamento automatico, fantasma, scheda, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, disegno senza vista, lettore di schermo, limits, azimut, aunits, shx, diagram, ole, cronologia, confronta, a parole, proprietà, piedi e pollici, stira, lingue, dispositivi di input, problemi, live, assistenti
from: 3451e64c
---

Questo è ciò che è cambiato in CadCraft 0.9, rispetto alla 0.8.1. CadCraft è l'app di disegno 2D e 3D di CadCraft Studio 0.9 e delle sue otto app. La 0.9 completa il disegno in pianta, aggiunge stili di testo e un vero editor di testo, e dà più spazio sullo schermo.

## Novità

### Disegno in pianta

- **Tratteggi che seguono il loro contorno.** {{cmd:HATCH}} si collega a ciò che lo delimita. Spostare, ruotare o scalare il contorno, e il tratteggio con il suo motivo lo segue; rimodellarlo, e il tratteggio viene ricalcolato. {{cmd:HATCHEDIT}} (`HE`) modifica un tratteggio in seguito e crea o termina il legame. Vedere [Tratteggio e aree con riempimento](topic:hatch).
- **File di motivi di tratteggio.** Alla domanda `Indicare un punto interno` di {{cmd:HATCH}}, digitare `F` (File di motivo) e scegliere un file `.pat`. Sono stati provati solo file scritti nel formato consueto.
- **Gruppi di layer.** In {{ui:Tools}} sul pannello {{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}}, e {{ui:Find a layer}}; oppure digitare {{cmd:LAYGROUP}} (`LG`). Vedere [Organizzare un disegno con i layer](topic:layers#group-layers).
- **Piani sovrapposti.** {{cmd:FLOORS}} (`FLR`), oppure {{ui:Floors…}} nel menu {{ui:More}} del gruppo {{ui:View}}. Una viewport su una tavola può mostrare un piano sotto {{ui:Floor shown}} in Proprietà. {{cmd:FLOORLAYERS}} trasforma i piani in layer per un file destinato a un altro. Vedere [Sovrapporre piani in un disegno](topic:floors).
- **Muri intelligenti 2D, porte e finestre.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. Angoli, giunzioni a T e incroci vengono calcolati automaticamente. I muri conservano la memoria di come si uniscono, e Proprietà ottiene Disallow join at start / at end, una Location line e una Length modificabile. Vedere [Disegnare muri, porte e finestre in 2D](topic:walls-2d).
- **Lo strumento muro sui muri in pianta.** Digitare {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e gli altri. Non hanno ancora pulsanti nella barra. Vedere [Forme dei muri, tagli, offset e blocchi per muri 2D](topic:wall-tools-2d).

### Testo

- **Stili di testo.** {{cmd:STYLE}} (`ST`), oppure {{ui:Text style}} nella barra {{ui:Draw}}: stili con nome, con font, altezza, fattore di larghezza e inclinazione. Vedere [Impostare font e dimensione del testo con gli stili di testo](topic:text-styles).
- **Un editor di testo a paragrafo formattato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} oppure un doppio clic sul testo apre una casella con font, dimensione, grassetto, corsivo, sottolineatura, barrato, colore, allineamento e i segni di grado, più-meno e diametro, oltre a {{ui:OK}} e {{ui:Cancel}}. Vedere [Formattare il testo a paragrafo](topic:format-paragraph-text).
- **Un diagramma da XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) legge anche l'XML draw.io incollato. Vedere [Disegnare un diagramma da testo](topic:text-to-diagram).
- **Testo thai in una stampa PDF.** Prima veniva stampato come punti interrogativi.

### Più spazio e ausili di disegno

- **Una riga di comando mobile e più sottile, e un'area superiore compatta.** Trascinare la maniglia della riga di comando per renderla mobile, trascinare il suo bordo superiore per averne meno righe, {{key:F2}} apre la cronologia. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} e le scelte dell'area superiore hanno le stesse impostazioni. Vedere [Impostazioni](topic:settings#command-line).
- **Menu di snap a oggetto.** Clic destro su {{ui:Snap}} nella barra di stato, oppure digitare {{cmd:OSNAP}}.
- **Aggancio alla griglia.** Il pulsante {{ui:Grid snap}} nella barra di stato, oppure {{key:F9}}: i punti indicati vanno al punto di griglia più vicino quando nessuno snap a oggetto ha preso il punto.
- **Arco in dieci modi, e Continua.** {{ui:Arc}} nella barra {{ui:Draw}} oppure {{cmd:ARC}}: tre punti, la famiglia Inizio/Centro/Fine e la famiglia Centro/Inizio/Fine, e Continua (premere {{key:Enter}} sul punto iniziale) dall'ultima linea, arco o polilinea.
- **Il pannello Documenti.** {{cmd:DOCUMENTS}} (`DOCS`) oppure {{ui:Documents…}} nel menu {{ui:More}} del gruppo {{ui:View}}: revisione, stato e prelievo per ogni disegno in una cartella di progetto. Si apre come finestra centrata. Vedere [Documenti](topic:documents).

### File

- **Misure d'acciaio UK.** 976 sezioni nel pannello Standard, digitate come nei disegni (per esempio `305x165x40 UB`).
- **Pacchetti sudafricani** (pratica di disegno e regolamenti edilizi) come pacchetti del componente Regolamenti edilizi. I numeri non sono verificati.
- **Componenti aggiuntivi per CadCraft,** aggiunti su richiesta e disattivati per impostazione predefinita: progettazione dell'illuminazione interna, progettazione di chip (da HDL a layout), intaglio con fresa, simulazione di circuiti, pignoni per catene a rulli e pacchetti nazionali di regolamenti edilizi.

## Corretto

- Spostare, ruotare o scalare un tratteggio lasciava indietro il suo motivo.
- {{cmd:GRIDMOVE}} portava con sé un intero muro in pianta che inizia solo sulla linea di griglia. Ora un muro viene giudicato dalle sue estremità.
- La griglia era mostrata solo entro i limiti del disegno anche con i limiti disattivati.
- L'elenco dei blocchi nel pannello laterale scorre, e un nome che non è un blocco elenca i blocchi che iniziano con esso ("Forse intendevi").
- I file DXF R12 che AutoCAD rifiutava ("Unknown group 1001 for table") ora si aprono lì.
- I file molto grandi (circa 70.000 entità e oltre) non si aprivano con "Maximum call stack size exceeded".
- I file DWG di AutoCAD 2018 e successivi con una versione di manutenzione alta non si aprivano con "bad BITLONG code 11".
- Nella casella del testo a paragrafo, una nuova dimensione digitata per una parte selezionata mantiene la selezione.

## In ogni app

Suggerimenti Bootstrap su ogni controllo che ha un'indicazione, un suggerimento di avvio che si può chiudere, schede a scorrimento quando non entrano, e un titolo della scheda del browser che segue il disegno aperto (`<disegno> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} è ora un menu a discesa di scelte a due righe. L'elenco delle lingue in {{ui:Settings}} è più lungo che nella 0.8. La co-modifica dal vivo, le raccolte della Libreria e le unità di peso e temperatura sono descritte nelle note di Studio.

## Limiti dichiarati

- Il testo a paragrafo non ha elenchi puntati o numerati, righello delle tabulazioni né giustificazione. Le stampe PDF impostano il testo in Helvetica.
- I muri in pianta sono rettilinei, quindi un arco è disegnato come brevi muri. La verifica della comunità sullo strumento muro è in attesa.
- I gruppi di layer non sono scritti nel formato proprio di AutoCAD, quindi AutoCAD mostra un elenco piatto. Gli altri programmi mostrano tutti i piani insieme, a meno di eseguire {{cmd:FLOORLAYERS}}.
- Il pannello Documenti non è stato provato da due persone su una cartella condivisa reale. L'intaglio con fresa non è stato provato su nessuna macchina reale. La stima dell'illuminazione è stata verificata con un tracciamento di fotoni, non con un altro programma. I componenti aggiuntivi di ingegneria sono strumenti di verifica, non un sostituto della revisione di un ingegnere.
- Le lingue diverse dall'inglese sono bozze automatiche, e alcune delle nuove parole sono solo in inglese.

## Prima: 0.8 e 0.8.1

Questo è ciò che è cambiato in CadCraft 0.8 e 0.8.1, rispetto alla 0.7. La 0.8 (1 novembre 2026) aggiunge strumenti di disegno che lavorano dal proprio disegno, con regole sul proprio computer e senza modelli, e la 0.8.1 (2 novembre 2026) corregge gli errori segnalati dopo di essa.

### Novità

**Un disegno che completa il pensiero**

- **Un fantasma mostra cosa viene dopo.** Senza un comando in corso, un fantasma grigio tratteggiato mostra ciò che i motivi del proprio disegno indicano come successivo: il montante successivo alla stessa spaziatura, il passo successivo di una scala, il muro mancante di una stanza. Premere {{key:Tab}} per disegnarlo come un solo passo di annullamento, oppure {{key:Esc}} per scartarlo. Guarda solo gli oggetti più recenti, quindi resta fluido su un disegno grande. Disattivarlo in {{ui:Settings}} › {{ui:CadCraft}}, oppure con {{cmd:AUTOCOMPLETE}} `Off`.
- **Il punto successivo mentre si disegna una linea.** A metà di {{cmd:LINE}} o {{cmd:PLINE}} il fantasma è il punto successivo: il passo successivo di una scala, il quarto angolo di un rettangolo, oppure il punto che lo chiude. Avvicinare il cursore e premere {{key:Tab}}, come se si fosse fatto clic lì.
- **Gli schizzi a penna diventano geometria precisa.** {{cmd:SKETCHFIX}}: disegnare tratti grezzi con penna, mouse o dito e ognuno diventa una linea, un cerchio, un arco, un rettangolo o una polilinea puliti, agganciati a ciò che è già disegnato. Vedere [Schizzare con una penna e ottenere geometria precisa](topic:sketch-with-a-pen).
- **Una foto di uno schizzo diventa un disegno.** {{cmd:PHOTOSKETCH}} (`PSK`) trova la carta in una foto, raddrizza la prospettiva, applica la dimensione della carta e la scala che si danno, e traccia le linee di penna su un layer per ogni colore di penna. Le scritte non vengono tracciate.
- **Quotarlo secondo regole.** {{cmd:AUTODIM}} (`ADIM`) crea catene di quote lungo i lati scelti, un ingombro complessivo, larghezze di aperture, diametri di fori e, con `Grid`, la spaziatura della griglia. Non ripete mai una quota già presente.
- **Spostare una linea di griglia e l'insieme la segue.** {{cmd:GRIDMOVE}} (`GM`): i muri che terminano sulla linea di griglia si allungano con essa, i muri lungo di essa, i pilastri, il suo cerchietto e la sua etichetta si spostano, e le quote su di essa misurano la nuova spaziatura. Un solo passo di annullamento.

**Tavole, dettagli ed etichette**

- **Tavole che si dispongono da sole.** {{cmd:AUTOSHEET}} prende le proprie viste con nome (oppure i pezzi separati del modello), sceglie una dimensione di carta e una scala standard, e dispone le viste su nuove tavole con un cartiglio e una didascalia con nome e scala. Tutto resta modificabile. Vedere [Disporre le tavole per me](topic:lay-out-sheets-for-me).
- **I dettagli propri dello studio, proposti mentre si disegna.** {{cmd:DETAILS}} (`DET`) conserva i propri blocchi di dettaglio. Quando ciò che si seleziona corrisponde a uno di essi per le parole sui suoi layer, nei nomi dei blocchi e nelle note, la barra di stato lo segnala; si indica e lo si posiziona. {{cmd:DETAILS}} › Condividi mette l'elenco nella propria cartella Documenti e porta ciò che il team ha aggiunto. Le impostazioni disattivano i suggerimenti.
- **Etichette sui blocchi.** {{cmd:TAGS}} definisce un'etichetta (il suo tipo, i valori che può avere, i blocchi a cui si applica), la imposta sui riferimenti a blocco selezionati, ed elenca questi come tabella che si può salvare in CSV. Le definizioni sono conservate nel DWG. Vedere [Etichette](topic:tags).
- **Limiti del disegno.** {{cmd:LIMITS}} imposta un rettangolo per il disegno: la griglia lo riempie e lo zoom Estensione lo mostra. I limiti appaiono come contorno e sono salvati in DWG e DXF, insieme ai limiti della carta. Vedere [Impostare i limiti del disegno](topic:drawing-limits).

**Lavorare con altre persone e altri programmi**

- **Trasformare un'annotazione in una revisione.** {{cmd:REDLINE}} legge il pacchetto che scrive MarkupCraft ed elenca ogni modifica. Accettare o rifiutare ciascuna con una nota; quelle accettate ricevono una nuvola di revisione e un registro delle revisioni in un solo passo di annullamento, e si salva il file delle risposte che chiude le annotazioni in MarkupCraft. Vedere [Trasformare un'annotazione in una revisione](topic:redline-to-revision).
- **Disegni che git e Fossil possono unire.** Con {{ui:Merge-friendly files}} attivo in {{ui:Settings}} › {{ui:CadCraft}}, ogni oggetto riceve una chiave che non cambia mai (i file sono circa il 10 per cento più grandi). `cadcraft merge base ours theirs` unisce due modifiche di due persone a un oggetto DWG o DXF alla volta, e segnala solo dove due persone hanno cambiato la stessa cosa. Vedere [Unire due modifiche di una persona a un disegno](topic:merge-drawings).
- **Cosa è cambiato, a parole.** Nella Cronologia, Confronta dà un elenco semplice: dove le cose sono cambiate, quanto sono grandi le zone, cosa è stato aggiunto, rimosso o modificato, e il testo modificato. Vedere [Dire a parole cosa è cambiato](topic:changes-in-words).
- **Azimut e angoli.** Digitare una direzione come azimut da topografo, per esempio N45°23'30"E, oppure in gradi, primi e secondi, ovunque venga chiesto un angolo; AUNITS imposta come vengono mostrati gli angoli. Vedere [Digitare e mostrare azimut e angoli](topic:bearings-and-angles).
- **I propri font SHX.** Dare a CadCraft una cartella di font SHX, e gli stili di testo che li nominano si disegnano con essi, a schermo e nelle stampe. Vedere [Disegnare testo con i propri font SHX](topic:shx-fonts).
- **Un diagramma da testo.** {{cmd:DIAGRAM}} legge un diagramma di flusso Mermaid, un diagramma di componenti PlantUML, D2 oppure un elenco da-a, e disegna blocchi e connettori modificabili. Vedere [Disegnare un diagramma da testo](topic:text-to-diagram).
- **Oggetti OLE in un DWG.** {{cmd:OLELIST}} elenca gli oggetti OLE che un DWG contiene e che CadCraft non sa posizionare da solo, e posiziona una copia di un'immagine dove si indica. Vedere [Immagini](topic:pictures#objects-from-other-programs-ole).
- **I propri calcoli restano con il disegno.** I fogli di calcolo e le motivazioni di progetto sono conservati nel DWG insieme alla tabella delle classi.

**Disegnare senza vista**

- Attivare {{ui:Drafting without sight}} in {{ui:Settings}} (oppure digitare {{cmd:ACCESS}} e rispondere `On`). CadCraft legge ad alta voce, con il lettore di schermo, ogni comando e risultato, descrive il disegno e ciò che è vicino al cursore, permette di muovere il cursore e indicare punti con la tastiera, e riproduce un suono per ogni snap e grip. Dove il browser può riconoscere la voce sul proprio computer, i comandi possono essere pronunciati. Vedere [Disegnare senza vista](topic:draft-without-sight).

**In ogni app**

- **Lingue.** 54 lingue; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili, uzbeco). Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller di gioco e comandi MIDI.
- **Righe della barra degli strumenti e griglia delle proprietà.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} offre A capo, 2 righe o 1 riga nelle altre app. CadCraft mantiene la propria impostazione in {{ui:Settings}} › {{ui:CadCraft}} (vedere [Righe della barra degli strumenti](topic:settings#toolbar-rows)). La griglia delle proprietà condivisa è in tre altre app, non in CadCraft.
- **Problemi, Live e componenti aggiuntivi.** Un pannello Problemi condiviso che avvisa in ogni app, una vista Live di chi si trova dove in CadCraft Studio (vedere [Lavorare insieme su un disegno](topic:work-live)), e un elenco dei componenti aggiuntivi.
- **Collegare la propria IA.** Un unico collegamento da CadCraft Studio a tutte e otto le app, con un livello di sola lettura, suggerimento o modifica per ogni app, e un registro in parole semplici di ciò che l'assistente ha fatto. CadCraft non ha una propria IA, e Chiedi in ogni app usa l'IA che si collega.

### Corretto nella 0.8.1

- **Le Proprietà mostravano 150 invece di 12'-6"** nei disegni in piedi e pollici. I campi che l'app legge da sé tornano a mostrare il loro testo.
- **File DWG la cui sezione delle classi era letta come tipo sbagliato** (GitHub cadcraft#5) ora si aprono correttamente.
- **Il mirino non appare più dietro le finestre a comparsa.**
- **Studio e le edizioni impacchettate possono cambiare lingua durante l'esecuzione.** Prima erano solo in inglese. Non ancora provato su ogni piattaforma: segnalare se la lingua non cambia.
- **I tablet in verticale** danno lo spazio di griglia in più alla tela, e la modalità tavole parte da 760 px o meno.
- **STRETCH con una finestra di attraversamento, e LIMITS,** erano stati segnalati su Studio 0.8.0 ed erano già corretti nella build web 0.8; l'installatore di chi aveva segnalato era più vecchio. Studio 0.8.1 li contiene.

### Non ancora in questa versione

- **La 0.8 e la 0.8.1 non sono firmate digitalmente.** Windows può avvisare (scegliere {{ui:More info}}, poi {{ui:Run anyway}}); su un Mac, fare clic destro su CadCraft Studio e scegliere {{ui:Open}}. Le build per lo store sono in attesa, e la build per iPad e iPhone non è stata ricostruita per la 0.8.1.
- **Gli schizzi a penna e le foto di schizzi** sono stati provati solo su foto inventate e con un mouse, non ancora con una penna reale, uno schermo tattile o uno schizzo a mano su carta.
- **Il disegno senza vista** è stato provato con controlli automatici, non ancora con un lettore di schermo o un tester non vedente.
- **La condivisione dei dettagli** non ha avuto una verifica da due persone, e una cartella Team Cloud Plan come cartella Documenti non è costruita.
- **L'unione** funziona per i file DWG e DXF di CadCraft; per i file delle altre app non è costruita.
- **Annullamento tra finestre:** CadCraft segnala ogni passo concluso, ma Studio non ha ancora un unico Annulla per tutte le app; ogni app annulla i propri passi.
- **Gli oggetti OLE di un DWG** sono conservati ma non disegnati al loro posto.
- **La lettura delle tabelle di stili di stampa (file CTB)** da altri programmi è costruita ma non è stata verificata con un file di un altro programma.
- **Collegare la propria IA:** il collegamento con un clic in Studio, il connettore ospitato per l'IA del browser, la propria chiave API dentro Studio e il pacchetto MCP pubblicato non sono promessi in questa versione.

Per la versione precedente a questa, vedere [Novità della 0.7](topic:whats-new-0-7).
