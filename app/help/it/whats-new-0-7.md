---
title: Novità della 0.7 (precedente)
summary: PDF sotto il disegno e importazione PDF, disegni scansionati con traccia automatica, spline reali con SPLINE, SPLINEDIT e PEDIT, un gestore degli stili di quotatura, testo che mantiene la formattazione, WBLOCK e scale proprie, solidi 3D da altri programmi, registrazione delle scansioni, un pannello Laser, esportazione USD, Cronologia e stampa in CadCraft Studio, una prima guida al disegno, la barra degli strumenti su qualsiasi lato o su meno righe, e altro per gli assistenti IA.
keywords: novità 0.7, versione precedente, note di rilascio, changelog, modifiche, 0.7, versione, nuove funzioni, pdf, pdfattach, pdfimport, sottofondo, scansione, scanattach, scantrace, traccia, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formattazione, wblock, scalelistedit, elenco scale, acis, solidi 3d, registerscans, registrazione scansioni, icp, e57, las, laser, grbl, g-code, usd, usdout, cronologia, versioni, confronta, stampa, stampante, png, svg, stile di stampa, tipo di linea, guida, scheda di riferimento, mappa dei comandi, posizione barra degli strumenti, righe della barra degli strumenti, toolbardock, regen, regenall, trackpad, scorrimento, pagina di codici, cirillico, coreano, cinese, giapponese, elettrico, rcd, p&id, pid, acad.lsp, acaddoc.lsp, cartella di supporto, assistenti, mcp, unità, portoghese
from: d07ca034
---

Ecco che cosa è cambiato in CadCraft 0.7, rispetto alla 0.6. Molto è stato chiesto su Discord. L'elenco è raggruppato per area, con le cose più importanti per prime.

## Novità

### PDF e disegni scansionati

- **Mettere una pagina PDF sotto il disegno.** {{cmd:PDFATTACH}} (`PDFATT`) colloca una pagina alla sua dimensione reale o a una scala digitata. Agganciarsi alle sue linee, attenuarla, renderla monocromatica ({{cmd:PDFADJUST}}), ritagliarla ({{cmd:PDFCLIP}}) e cambiare i layer propri del PDF ({{cmd:PDFLAYERS}}). Si stampa come linee, riempimenti e testo, e un DWG o DXF 2000 la conserva come collegamento al file. Aprendo un PDF con {{ui:Apri}} si chiede se allegarlo o importarlo. Vedere [Sottofondi PDF e importazione PDF](topic:pdf-underlay).
- **Trasformare una pagina PDF in oggetti di disegno.** {{cmd:PDFIMPORT}} (`PDFIM`) crea linee, polilinee, cerchi, archi, tratteggi pieni e testo su layer che prendono il nome dal PDF, alla dimensione reale, a una scala digitata, oppure scalati da due punti e una distanza reale, in un solo passo di annullamento. Vedere [Importare una pagina](topic:pdf-underlay#import-a-page).
- **Disegni scansionati.** {{cmd:SCANATTACH}} importa un PNG, JPEG o TIFF (una pagina o tutte) oppure una pagina PDF che è un'immagine. Poi si scala da due punti ({{cmd:SCANSCALE}}), si allinea ({{cmd:SCANALIGN}}), si raddrizza dalle sue linee lunghe ({{cmd:SCANDESKEW}}), si rende bianco e nero ed eliminano le macchie ({{cmd:SCANCLEAN}}), si ritaglia e si cancellano parti. Ogni passo è un solo passo di annullamento e il file originale viene conservato. Vedere [Disegni scansionati e la traccia](topic:scanned-drawings).
- **Tracciare una scansione in linee e archi.** {{cmd:SCANTRACE}} disegna le linee della scansione come linee e archi su un nuovo layer, SCAN-TRACE, con una tolleranza impostata, e lascia testo e tratteggi come sono. Il rapporto indica che cosa ha creato e che cosa ha lasciato, e non è una garanzia che il risultato sia corretto: verificarlo sul foglio. {{cmd:RASTERSNAP}} permette agli snap a oggetto di trovare estremità, angoli e incroci della scansione. Nulla viene inviato da nessuna parte e non si usa alcun modello addestrato. Vedere [La traccia](topic:scanned-drawings#the-trace).

### Disegno e modifica

- **Spline reali.** {{cmd:SPLINE}} (`SPL`) disegna una curva passante per punti o da punti di controllo (grado da 1 a 5), con tangenti alle estremità; {{cmd:SPLINEDIT}} (`SPE`) sposta, aggiunge ed elimina punti di interpolazione o di controllo, imposta i pesi, apre, chiude, inverte, oppure trasforma una spline in polilinea. Le spline dai file DWG e DXF si aprono come spline, e DWG e DXF 2000 le salvano come spline. Vedere [Spline e polilinee](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) chiude e apre polilinee, unisce linee e archi a esse, imposta una sola larghezza, fa passare una curva per i vertici o una spline lungo di essi e la riporta indietro con Decurve, inverte, e modifica più elementi insieme. Vedere [Modificare una polilinea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) scrive un blocco, alcuni oggetti o l'intero disegno in un nuovo DWG o DXF che contiene solo i layer, gli stili e i blocchi che usano. Vedere [Scrivere un blocco o oggetti in un file proprio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) ridisegna la scheda in cui ci si trova a partire dal disegno, {{cmd:REGENALL}} (`REA`) ogni scheda, riquadro e disegno aperto. Vedere [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Testo e quote

- **Il testo mantiene la formattazione.** Il testo a paragrafo proveniente da altri programmi mantiene i colori per parola, il grassetto e il corsivo, la sottolineatura, le frazioni impilate e le altezze: viene disegnato a schermo e nei PDF, resta quando si modificano le parole, e viene salvato di nuovo. Vedere [Formattazione nel testo a paragrafo di altri programmi](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestore di stili di quotatura.** {{cmd:DIMSTYLE}} (`D`) crea, modifica, confronta e applica stili di quotatura con nome; cambiare uno stile cambia ogni quota che lo usa. {{cmd:DIMEDIT}} (`DED`) rimette a posto il testo, ne digita uno nuovo, lo ruota o inclina le linee di estensione; {{cmd:DIMTEDIT}} sposta il testo a sinistra, a destra o al centro. Vedere [Stili di quotatura con nome](topic:dimension-settings#named-dimension-styles).
- **Scale proprie.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) aggiunge scale come 1:75 agli elenchi di scale della viewport e della stampa; sono salvate nel disegno (DWG e DXF 2000), e un disegno di un altro programma porta il proprio elenco. Vedere [Scale](topic:units-papers-scales#scales).
- **Testo in altri alfabeti.** I file DXF salvati con le pagine di codici cirillico, coreano, cinese, giapponese o vietnamita ora si aprono con il loro testo, e il testo cinese, giapponese e coreano viene stampato nei PDF (la stampa scarica un carattere più grande la prima volta che serve). Vedere [Carattere](topic:text#font).

### Stampa

- **Altro nelle tabelle di stile di stampa.** Per ogni colore una tabella può ora impostare anche un tipo di linea, la fine e l'unione della linea, e uno stile di riempimento che stampa i riempimenti pieni come linee di tratteggio; la tabella ha un proprio elenco di spessori di linea e una scala dei tipi di linea. Vedere [Tabelle di stile di stampa](topic:plot-pdf#plot-style-tables).
- **Stampa, e file PNG e SVG.** La finestra di stampa ha {{ui:Stampa…}}, {{ui:Scarica PNG}} (300 dpi) e {{ui:Scarica SVG}}. In CadCraft Studio elenca le stampanti del computer, la loro carta e il numero di copie. Vedere [Stampa](topic:plot-pdf#print) e [File immagine e SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nuvole di punti

- **Solidi 3D da altri programmi.** Solidi, regioni e corpi nello spazio modello di un disegno compaiono nella scheda 3D, in sola lettura, e salvando come DWG vengono riscritti invariati. Le facce su superfici che CadCraft non disegna ancora sono elencate, non indovinate. Vedere [Solidi da altri programmi](topic:3d-solids#solids-from-other-programs).
- **Registrare più scansioni.** {{cmd:REGISTERSCANS}} (`REGSCAN`) colloca scansioni prese da posizioni diverse in un unico riferimento, tramite coppie di punti o coordinate di destinazione digitate, le affina con ICP, salva la registrazione come piccolo file di progetto, e scrive la nuvola registrata come un unico file LAS o E57. Vedere [Registrare più scansioni in una](topic:register-scans).
- **Esportazione USD.** {{cmd:USDOUT}}, oppure {{cmd:EXPORT3D}} › {{ui:USD}}, scrive i solidi della scheda 3D come `.usda`, `.usdc` o `.usdz`. Vedere [Esportare il modello 3D in USD](topic:usd).
- **Calcoli nella scheda 3D.** Dove gli strumenti della scheda 3D chiedono una distanza, si può digitare un calcolo, come sulla riga di comando. Vedere [Aritmetica in un valore digitato](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Realizzazione

- **Inviare un disegno a un laser.** {{cmd:LASER}}, oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Laser…}}, apre un pannello sopra il disegno: ogni layer taglia, incide, incide linee, riempie forme, incide un'immagine oppure non viene inviato, con la sua potenza, velocità e passate. L'anteprima segue le modifiche, {{ui:Salva G-code…}} scrive il G-code in modalità laser GRBL, e in Chrome o Edge il pannello può inquadrare il lavoro e inviarlo tramite USB. Le impostazioni sono salvate nel disegno (DWG e DXF). Vedere [Inviare un disegno a un laser](topic:laser-cutting).
- **Simboli di impianti edilizi nell'add-on Elettrico.** Prese per dati, telefono e TV, interruttori a chiave e a tempo, un termostato, un segnale di uscita, rilevatori, punto di chiamata e sirena, un ventilatore, uno scaldabagno, una cucina, un punto di ricarica per veicoli elettrici, un contatore di energia e un sottoquadro, e simboli RCD e RCBO. Un circuito può avere un RCD, il quadro ha una colonna RCD, e i controlli segnalano i circuiti prese senza RCD da 30 mA o meno. È un promemoria di progetto, non un controllo normativo.
- **Un add-on P&ID.** P&ID disegna schemi di processo: simboli con punti di collegamento, linee di processo e di segnale, etichette, numeri di linea, elenchi di linee, apparecchiature, strumenti e valvole (CSV o cartella di lavoro) e controlli. È incluso in CadCraft ed è disattivato finché non lo si attiva in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Add-on}}. È un ausilio al disegno, non un'approvazione tecnica, e i suoi termini sono per ora solo in inglese.

### Primi passi e schermo

- **Un primo disegno guidato.** {{cmd:TOUR}} (oppure {{ui:Segui la guida}} sulla scheda di avvio) accompagna in sei passi nel disegno reale: una linea, un cerchio, uno spostamento, un taglio, una cancellazione e una quota. Parte da sola la prima volta che CadCraft si apre senza nulla dentro. Vedere [Preferisci essere guidato?](topic:getting-started#prefer-to-be-guided)
- **Una scheda di riferimento e una mappa dei comandi.** La [scheda di riferimento](topic:cheat-sheet) contiene i 40 comandi di uso quotidiano su una pagina, anche come PDF da stampare, e la [mappa dei comandi](topic:command-map) elenca i comandi con i loro nomi brevi, dalla A alla Z.
- **La barra degli strumenti su ogni lato.** {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Posizione della barra degli strumenti}}: in alto (come prima), in basso, a sinistra o a destra, oppure digitare {{cmd:TOOLBARDOCK}}. Vedere [Posizione della barra degli strumenti](topic:settings#toolbar-position).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Righe della barra degli strumenti}}: adattare a capo, 2 righe o 1 riga, per la barra di CadCraft e per gli stili Drafting classico e barra multifunzione. {{key:Shift+Ctrl+F1}} scorre le opzioni, {{key:Ctrl+F1}} scorre ciò che mostrano i pulsanti, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} le impostano. La suggestione di avvio ha un pulsante di chiusura. Grazie a GJoe2, che l'ha inviato come pull request. Vedere [Righe della barra degli strumenti](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Cronologia.** {{cmd:HISTORY}} (`HIST`), oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Cronologia…}}: le copie che Studio conserva quando si apre e si salva un disegno, e le versioni cloud del disegno quando lo si è aperto dal cloud. Aprire o ripristinarne una, o confrontarne due, con ciò che è stato aggiunto, rimosso e modificato mostrato a colori. Vedere [Cronologia](topic:history).
- **acad.lsp e acaddoc.lsp.** Scegliere una cartella di supporto in {{cmd:APPLOAD}}: quei due file vengono caricati all'avvio di CadCraft (acaddoc.lsp di nuovo per ogni nuova scheda del disegno), e `S::STARTUP` viene eseguito dopo di essi. Vedere [Caricare applicazioni](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **La finestra di stampa in una finestra propria.** Un pulsante nella barra del titolo la sposta in una finestra che si può collocare su un altro monitor. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).

### Per gli assistenti IA

- **File per nome, in cartelle scelte.** In CadCraft Studio un assistente può aprire, salvare e stampare file per nome, e fornire a un comando il file che richiede (INSERT da un file, esportazione di COUNT, SAVEAS, PLOT), ma solo nelle cartelle aggiunte in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Assistenti}} › {{ui:Cartelle che possono usare}}. Vedere [Lasciarlo usare file nelle cartelle scelte](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Meno chiamate.** Un assistente può digitare un'intera riga di comando in una volta, mantenere un comando aperto tra le sue chiamate, contare oggetti per tipo e layer senza elencarli, e collocare un blocco con i suoi valori di attributo in un solo passo.
- **Senza finestra.** La riga di comando `cadcraft` scrive stampe SVG e converte, stampa, verifica o descrive molti file insieme. Il pacchetto MCP non è ancora pubblicato. Vedere [Lavorare sui file senza aprire CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Modificato

- **Il trackpad scorre.** Muovere due dita su un trackpad e la vista 2D le segue; pizzicare e la rotella del mouse fanno zoom. Vedere [Mouse, trackpad e tocco](topic:mouse-trackpad-touch).
- **Gli oggetti OLE sono conservati.** Gli oggetti incorporati di un DXF compaiono come immagine o come cornice con etichetta e vengono riscritti dal DXF 2000. Quelli di un DWG sono conservati e riscritti quando si salva come DWG, ma non ancora mostrati. Prima venivano persi al salvataggio. Vedere [Oggetti da altri programmi (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Le unità di un nuovo disegno** seguono l'unità scelta in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}}.

## Corretto

- I layout che si aprivano vuoti, o che perdevano un viewport e mostravano l'intero modello al suo posto, ora si aprono con i loro viewport reali. Un layout senza collegamento al proprio contenuto viene conservato e il rapporto di apertura lo segnala.
- I file DXF in pagine di codici più vecchie mostravano testo cirillico e coreano illeggibile. Ora si leggono correttamente.
- Il testo a paragrafo di altri programmi perdeva la formattazione quando veniva aperto, e veniva salvato semplice.

## In tutte le app

- **Unità.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} ha un elenco per ciascuna di lunghezza, area, volume, angolo e pendenza, con le dimensioni esatte date dalle definizioni delle unità (il piede topografico USA è un'unità propria). Disattivare le unità che non si usano le toglie dagli elenchi, e sceglierne una fa iniziare il nuovo lavoro con essa. Un file mantiene sempre la propria unità. In CadCraft la scelta imposta le unità di un nuovo disegno quando è un'unità che un disegno può contenere; la casella {{ui:Unità}} di CadCraft non segue ancora questi interruttori. Quando un disegno ha delle unità, una lunghezza digitata può avere il simbolo di qualsiasi unità. Vedere [Unità, valori digitati ed elenchi delle unità](common:unit-lists).
- **Un layout più denso e pannelli che si riordinano.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Densità della disposizione}} › {{ui:Compatta}} mette più cose sullo schermo (gli schermi touch e i telefoni mantengono i pulsanti grandi). Ogni pannello laterale ha una barra del titolo sottile: trascinarla per ancorare o rendere mobile il pannello, rilasciarla sulla barra di un altro pannello per condividere una cornice come schede, fissarla per farla scorrere verso il bordo, oppure nasconderla e farla riapparire dal bordo. Vedere [Disporre i pannelli](common:arrange-panels#make-the-layout-denser).
- **Le finestre di dialogo si spostano.** Trascinare una finestra di dialogo dalla sua barra del titolo per toglierla dalla strada del disegno; torna dove era stata lasciata. Fare doppio clic sulla barra del titolo per centrarla di nuovo. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).
- **Ricette per assistenti IA.** Dieci richieste svolte per il proprio assistente (ordinare un disegno, stampare un insieme, verificare disegni, fare domande a un modello, totalizzare un computo, provare una variante di un pezzo…), ciascuna con gli strumenti che chiama e i permessi che richiede, e ciascuna riprodotta dai nostri test. Le app non contengono IA. Vedere [Ricette per assistenti IA](common:assistants-recipes).
- **Lingue.** **Italiano**, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** ora hanno ogni parola delle app, come bozze non ancora riviste da un madrelingua. Le guide sono in inglese.
- **CadCraft Studio** dice perché un controllo di aggiornamento è fallito (nessun file per il proprio sistema ancora, nessuna rete, una firma non valida) invece di dire solo "Fatto", e smette di riproporre una scheda Novità chiusa finché non c'è una versione più recente.

## Non ancora in questa versione

- **La 0.7 non è firmata digitalmente.** La firma, e il pacchetto Microsoft Store, sono stati spostati alla 0.8 perché la convalida del certificato non è ancora arrivata. Controllare l'SHA-256 accanto a ogni file su getcadcraft.com/download. Su Windows, se SmartScreen blocca l'installer, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su un Mac, la prima volta, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. CadCraft Studio non è ancora in uno store di app, e non esiste ancora una build per iPad o iPhone.
- Gli elenchi di angoli e pendenze in {{ui:Unità}} sono salvati, ma nessuna casella li legge ancora.
- Gli oggetti OLE di un DWG sono conservati ma non mostrati, e le immagini metafile dentro gli oggetti OLE non vengono disegnate.
- La lettura delle tabelle di stile di stampa (file CTB) da altri programmi attende un file di esempio.
- Il testo asiatico più vecchio scritto come codici `\M+` viene letto, ma non è ancora stato verificato con un file di un altro programma.
- Sottofondi PDF: le immagini dentro la pagina sono mostrate a schermo ma non stampate, la stampa di un assistente lascia fuori i sottofondi, e non è stato verificato come altri programmi leggono il ritaglio e la scala salvati.
- Cronologia: CadCraft non invia ancora i suoi salvataggi al cloud, quindi le versioni cloud sono quelle salvate da altri dispositivi e dal web. La cronologia è solo in CadCraft Studio.
- Non è stato verificato se Studio mantiene la cartella di supporto acad.lsp dopo un riavvio; se lo chiede, scegliere di nuovo la cartella in APPLOAD.
- Il pannello Laser non è stato ancora provato su un laser reale: provare ogni impostazione su uno scarto. CadCraft Studio non ha Web Serial, quindi in Studio il pannello salva solo il G-code.
- La registrazione delle scansioni è stata provata su scansioni inventate, non ancora su un insieme di uno scanner reale.
- Lo scorrimento a due dita è stato provato con eventi di trackpad simulati, non ancora su un trackpad reale.
- {{cmd:PEDIT}} non ha l'opzione Modifica vertice (usare i grip o le Proprietà). Offset, taglio, estendi, raccordo, spezza e unisci non accettano ancora spline; l'altezza (Z) di una spline non viene conservata.
- Il nuovo testo a paragrafo non può ancora ricevere codici di formattazione, e le stampe SVG mostrano il testo formattato in un solo colore.
- L'opzione Intero disegno di WBLOCK scrive solo il modello, non le tavole. Lo stile di quotatura corrente non viene salvato nel file: un disegno si apre con Standard corrente.
- Gli stili del menu a barra multifunzione non hanno ancora elenchi di layer, colori o tipi di linea: usare il pannello {{ui:Layer}} e {{ui:Proprietà}}.
- Le nuvole di punti non sono ancora salvate nel disegno né stampate, e i file E57 si aprono fino a 6 milioni di punti e 512 MB.
- I file DWG salvati da CadCraft non sono ancora stati verificati in AutoCAD stesso.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet).
