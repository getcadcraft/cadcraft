---
title: Novità della 0.7
summary: Sottofondi PDF e importazione PDF, disegni scansionati con tracciamento automatico, vere spline con SPLINE, SPLINEDIT e PEDIT, un gestore degli stili di quota, testo che mantiene la formattazione, WBLOCK e scale personalizzate, solidi 3D da altri programmi, registrazione di scansioni, un pannello Laser, esportazione USD, Cronologia e stampa in CadCraft Studio, un primo disegno guidato, la barra degli strumenti su qualsiasi lato o su meno righe, e altro per gli assistenti AI.
keywords: novità, cosa c'è di nuovo, note di rilascio, registro delle modifiche, modifiche, 0.7, versione, nuove funzioni, pdf, pdfattach, pdfimport, sottofondo, scansione, scanattach, scantrace, tracciamento, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formattazione, wblock, scalelistedit, elenco scale, acis, solidi 3d, registerscans, registrare scansioni, icp, e57, las, laser, grbl, g-code, usd, usdout, cronologia, versioni, confronta, stampa, stampante, png, svg, stile di stampa, tipo di linea, guida, scheda riassuntiva, mappa dei comandi, posizione della barra degli strumenti, righe della barra degli strumenti, toolbardock, regen, regenall, trackpad, scorrimento, tabella codici, cirillico, coreano, cinese, giapponese, impianti elettrici, rcd, p&id, pid, acad.lsp, acaddoc.lsp, cartella di supporto, assistenti, mcp, unità, portoghese
from: b9258ca6
---

Questo è ciò che è cambiato in CadCraft 0.7, rispetto alla 0.6. Molto di questo è stato richiesto su Discord. L'elenco è raggruppato per area, con le voci più importanti per prime.

## Novità

### PDF e disegni scansionati

- **Mettere una pagina PDF sotto il disegno.** {{cmd:PDFATTACH}} (`PDFATT`) colloca una pagina a grandezza naturale o in una scala digitata. Agganciarsi alle sue linee, attenuarla, renderla monocromatica ({{cmd:PDFADJUST}}), ritagliarla ({{cmd:PDFCLIP}}) e commutare i layer propri del PDF ({{cmd:PDFLAYERS}}). Viene stampata come linee, riempimenti e testo, e un DWG o DXF 2000 la mantiene come collegamento al file. Aprire un PDF con {{ui:Apri}} chiede se collegarlo o importarlo. Vedere [Sottofondi PDF e importazione PDF](topic:pdf-underlay).
- **Trasformare una pagina PDF in oggetti di disegno.** {{cmd:PDFIMPORT}} (`PDFIM`) crea linee, polilinee, cerchi, archi, tratteggi pieni e testo su layer che prendono il nome dal PDF, a grandezza naturale, in una scala digitata, oppure in scala da due punti e una distanza reale, in un unico passo di annullamento. Vedere [Importare una pagina](topic:pdf-underlay#import-a-page).
- **Disegni scansionati.** {{cmd:SCANATTACH}} porta dentro un PNG, JPEG o TIFF (una pagina o tutte) oppure una pagina PDF che è un'immagine. Poi la si porta in scala da due punti ({{cmd:SCANSCALE}}), la si allinea ({{cmd:SCANALIGN}}), la si raddrizza dalle sue linee lunghe ({{cmd:SCANDESKEW}}), la si rende in bianco e nero eliminando i puntini ({{cmd:SCANCLEAN}}), la si ritaglia e se ne cancellano parti. Ogni passo è un passo di annullamento e il file originale viene conservato. Vedere [Disegni scansionati e tracciamento](topic:scanned-drawings).
- **Tracciare una scansione in linee e archi.** {{cmd:SCANTRACE}} disegna le linee della scansione come linee e archi su un nuovo layer, SCAN-TRACE, con una tolleranza impostata, e lascia testo e tratteggi come sono. Il rapporto dice cosa ha creato e cosa ha lasciato, e non afferma che il risultato sia corretto: verificarlo sulla tavola. {{cmd:RASTERSNAP}} permette agli snap a oggetto di trovare le estremità, gli angoli e gli incroci della scansione. Nulla viene inviato da nessuna parte e non si usa alcun modello addestrato. Vedere [Il tracciamento](topic:scanned-drawings#the-trace).

### Disegnare e modificare

- **Vere spline.** {{cmd:SPLINE}} (`SPL`) disegna una curva attraverso punti o da punti di controllo (grado da 1 a 5), con tangenti alle estremità; {{cmd:SPLINEDIT}} (`SPE`) sposta, aggiunge ed elimina punti di adattamento o di controllo, imposta i pesi, apre, chiude, inverte o trasforma una spline in una polilinea. Le spline dei file DWG e DXF si aprono come spline, e DWG e DXF 2000 le salvano come spline. Vedere [Spline e polilinee](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) chiude e apre polilinee, vi unisce linee e archi, imposta un unico spessore, adatta una curva ai vertici o una spline lungo di essi e la annulla con Decurve, inverte e modifica più polilinee insieme. Vedere [Modificare una polilinea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) scrive un blocco, alcuni oggetti o l'intero disegno in un nuovo DWG o DXF che contiene solo i layer, gli stili e i blocchi che usano. Vedere [Scrivere un blocco o degli oggetti in un file proprio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) ridisegna dal disegno la scheda in uso, {{cmd:REGENALL}} (`REA`) ogni scheda, riquadro e disegno aperto. Vedere [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Testo e quote

- **Il testo mantiene la formattazione.** Il testo a paragrafo proveniente da altri programmi mantiene i colori per parola, grassetto e corsivo, sottolineatura, frazioni impilate e altezze: sono disegnati sullo schermo e nei PDF, mantenuti quando si modificano le parole e salvati di nuovo. Vedere [Formattazione dentro il testo a paragrafo proveniente da altri programmi](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestore degli stili di quota.** {{cmd:DIMSTYLE}} (`D`) crea, modifica, confronta e applica stili di quotatura con nome; cambiare uno stile cambia ogni quota che lo usa. {{cmd:DIMEDIT}} (`DED`) rimette a posto il testo, digita un nuovo testo, lo ruota o inclina le linee di riferimento; {{cmd:DIMTEDIT}} sposta il testo a sinistra, a destra o al centro. Vedere [Stili di quotatura con nome](topic:dimension-settings#named-dimension-styles).
- **Scale personalizzate.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) aggiunge scale come 1:75 agli elenchi delle scale dei viewport e di stampa; sono salvate nel disegno (DWG e DXF 2000), e un disegno proveniente da un altro programma porta il proprio elenco. Vedere [Scale](topic:units-papers-scales#scales).
- **Testo in altri alfabeti.** I file DXF salvati nelle tabelle codici cirillica, coreana, cinese, giapponese o vietnamita ora si aprono con il loro testo, e il testo cinese, giapponese e coreano viene stampato nei PDF (la stampa scarica un carattere più grande la prima volta che serve). Vedere [Carattere](topic:text#font).

### Stampa

- **Più opzioni nelle tabelle degli stili di stampa.** Per ogni colore una tabella può ora impostare anche un tipo di linea, la terminazione e il raccordo delle linee e uno stile di riempimento che stampa i riempimenti pieni come linee di tratteggio; la tabella ha un proprio elenco di spessori di linea e una scala dei tipi di linea. Vedere [Tabelle degli stili di stampa](topic:plot-pdf#plot-style-tables).
- **Stampa, e file PNG e SVG.** La finestra Stampa ha {{ui:Stampa…}}, {{ui:Scarica PNG}} (300 dpi) e {{ui:Scarica SVG}}. In CadCraft Studio elenca le stampanti del computer, la loro carta e il numero di copie. Vedere [Stampa](topic:plot-pdf#print) e [File di immagine e SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nuvole di punti

- **Solidi 3D da altri programmi.** I solidi, le regioni e i corpi nello spazio modello di un disegno compaiono nella scheda 3D, in sola lettura, e il salvataggio come DWG li riscrive invariati. Le facce su superfici che CadCraft non sa ancora disegnare sono elencate, non tirate a indovinare. Vedere [Solidi da altri programmi](topic:3d-solids#solids-from-other-programs).
- **Registrare più scansioni.** {{cmd:REGISTERSCANS}} (`REGSCAN`) colloca in un unico riferimento scansioni acquisite da posizioni diverse, per coppie di punti o coordinate di target digitate, le perfeziona con ICP, salva la registrazione come piccolo file di progetto e scrive la nuvola registrata come un unico file LAS o E57. Vedere [Registrare più scansioni in una](topic:register-scans).
- **Esportazione USD.** {{cmd:USDOUT}}, oppure {{cmd:EXPORT3D}} › {{ui:USD}}, scrive i solidi della scheda 3D come `.usda`, `.usdc` o `.usdz`. Vedere [Esportare il modello 3D come USD](topic:usd).
- **Calcoli nella scheda 3D.** Dove gli strumenti della scheda 3D chiedono una distanza, si può digitare un calcolo, come nella riga di comando. Vedere [Aritmetica in un valore digitato](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Realizzare oggetti

- **Inviare un disegno a un laser.** {{cmd:LASER}}, oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Laser…}}, apre un pannello sopra il disegno: ogni layer taglia, incide a linee, incide a riempimento, incide un'immagine oppure non viene inviato, con la propria potenza, velocità e passate. L'anteprima segue le modifiche, {{ui:Salva G-code…}} scrive G-code in modalità laser GRBL e in Chrome o Edge il pannello può inquadrare il lavoro e inviarlo via USB. Le impostazioni sono salvate nel disegno (DWG e DXF). Vedere [Inviare un disegno a un laser](topic:laser-cutting).
- **Simboli di impianti dell'edificio nell'add-on Elettrico.** Prese dati, telefono e TV, interruttori a chiave e orari, un termostato, un'indicazione di uscita, rilevatori, pulsante di allarme e sirena, un ventilatore, uno scaldabagno, un piano cottura, un punto di ricarica per veicoli elettrici, un contatore di energia e un sottoquadro, e simboli RCD e RCBO. Un circuito può avere un RCD, l'abaco del quadro ha una colonna RCD e le verifiche indicano i circuiti di prese senza RCD da 30 mA o meno. È un promemoria di progetto, non una verifica normativa.
- **Un add-on P&ID.** P&ID disegna schemi di processo: simboli con punti di connessione, linee di processo e di segnale, tag, numeri di linea, elenchi di linee, apparecchiature, strumenti e valvole (CSV o cartella di lavoro) e verifiche. È incluso in CadCraft ed è disattivato finché non lo si attiva in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Add-on}}. È un aiuto al disegno, non un'approvazione ingegneristica, e per ora i suoi testi sono solo in inglese.

### Primi passi e schermo

- **Un primo disegno guidato.** {{cmd:TOUR}} (oppure {{ui:Segui la guida}} nella scheda iniziale) accompagna in sei passi nel disegno vero: una linea, un cerchio, uno spostamento, una rifilatura, una cancellazione e una quota. Parte da sola la prima volta che CadCraft si apre senza nulla dentro. Vedere [Si preferisce essere guidati?](topic:getting-started#prefer-to-be-guided)
- **Una scheda riassuntiva e una mappa dei comandi.** La [scheda riassuntiva](topic:cheat-sheet) ha i 40 comandi di uso quotidiano in una pagina, anche come PDF da stampare, e la [mappa dei comandi](topic:command-map) elenca i comandi con i loro nomi brevi, dalla A alla Z.
- **La barra degli strumenti su qualsiasi lato.** {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Posizione della barra degli strumenti}}: in alto (come prima), in basso, a sinistra o a destra, oppure digitare {{cmd:TOOLBARDOCK}}. Vedere [Posizione della barra degli strumenti](topic:settings#toolbar-position).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Righe della barra degli strumenti}}: adatta alla larghezza, 2 righe o 1 riga, per la barra degli strumenti di CadCraft e per gli stili Disegno classico e Barra multifunzione. {{key:Shift+Ctrl+F1}} le scorre, {{key:Ctrl+F1}} scorre ciò che mostrano i pulsanti, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} le impostano. Il suggerimento iniziale ha un pulsante di chiusura. Grazie a GJoe2, che lo ha inviato come pull request. Vedere [Righe della barra degli strumenti](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Cronologia.** {{cmd:HISTORY}} (`HIST`), oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Cronologia…}}: le copie che Studio conserva quando si apre e si salva un disegno, e le versioni cloud del disegno quando lo si è aperto dal cloud. Aprirne o ripristinarne una, oppure confrontarne due, con ciò che è stato aggiunto, rimosso e modificato mostrato a colori. Vedere [Cronologia](topic:history).
- **acad.lsp e acaddoc.lsp.** Scegliere una cartella di supporto in {{cmd:APPLOAD}}: questi due file vengono caricati all'avvio di CadCraft (acaddoc.lsp di nuovo per ogni nuova scheda di disegno) e `S::STARTUP` viene eseguito dopo di essi. Vedere [Caricare applicazioni](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **La finestra Stampa in una finestra propria.** Un pulsante nella sua barra del titolo la sposta in una finestra che si può mettere su un altro monitor. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).

### Per gli assistenti AI

- **File per nome, nelle cartelle scelte.** In CadCraft Studio un assistente può aprire, salvare e stampare file per nome, e consegnare a un comando il file che richiede (INSERT da un file, l'esportazione di COUNT, SAVEAS, PLOT), ma solo dentro le cartelle aggiunte in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Assistenti}} › {{ui:Cartelle che possono usare}}. Vedere [Permettergli di usare file in cartelle scelte](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Meno chiamate.** Un assistente può digitare un'intera riga di comando in un colpo solo, tenere aperto un comando tra le chiamate, contare gli oggetti per tipo e layer senza elencarli e collocare un blocco con i valori dei suoi attributi in un unico passo.
- **Senza una finestra.** La riga di comando `cadcraft` scrive stampe SVG e converte, stampa, verifica o descrive molti file in una volta. Il pacchetto MCP non è ancora pubblicato. Vedere [Lavorare sui file senza aprire CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Modificato

- **Un trackpad esegue il pan.** Muovendo due dita su un trackpad la vista 2D le segue; il pizzico e la rotellina del mouse eseguono lo zoom. Vedere [Mouse, trackpad e tocco](topic:mouse-trackpad-touch).
- **Gli oggetti OLE vengono mantenuti.** Gli oggetti incorporati di un DXF compaiono come la loro immagine o come un riquadro con etichetta e sono salvati di nuovo da DXF 2000. Quelli di un DWG vengono mantenuti e riscritti quando si salva come DWG, ma non ancora mostrati. Prima si perdevano al salvataggio. Vedere [Oggetti di altri programmi (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Le unità di un nuovo disegno** seguono l'unità contrassegnata con la stella in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}}.

## Corretto

- I layout che si aprivano vuoti, o perdevano un viewport e mostravano al suo posto l'intero modello, ora si aprono con i loro veri viewport. Un layout senza collegamento al suo contenuto viene mantenuto e il rapporto di apertura lo dice.
- I file DXF nelle vecchie tabelle codici mostravano testo cirillico e coreano illeggibile. Ora si leggono correttamente.
- Il testo a paragrafo proveniente da altri programmi perdeva la formattazione all'apertura e veniva salvato di nuovo senza formattazione.

## In ogni app

- **Unità.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} ha un elenco per lunghezza, area, volume, angolo e pendenza, con le dimensioni esatte date dalle definizioni delle unità (il piede di rilievo statunitense è un'unità a sé). Disattivare le unità che non si usano mai ed escono dagli elenchi delle unità; contrassegnarne una con la stella e il nuovo lavoro parte da essa. Un file mantiene sempre la propria unità. In CadCraft la stella imposta le unità di un nuovo disegno quando è un'unità che un disegno può portare; la finestra {{ui:Unità}} di CadCraft non segue ancora gli interruttori. Quando un disegno ha le unità, una lunghezza digitata può portare il simbolo di qualsiasi unità. Vedere [Unità, valori digitati ed elenchi di unità](common:unit-lists).
- **Una disposizione più densa e pannelli che si mettono via.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Densità della disposizione}} › {{ui:Compatta}} fa stare più cose sullo schermo (gli schermi tattili e i telefoni mantengono i pulsanti grandi). Ogni pannello laterale ha una barra del titolo sottile: trascinarla per ancorare o rendere mobile il pannello, rilasciarla sulla barra di un altro pannello per condividere un unico riquadro come schede, fissarlo per farlo scorrere via sul bordo, oppure nasconderlo e richiamarlo dal bordo. Vedere [Disporre i pannelli](common:arrange-panels#make-the-layout-denser).
- **Le finestre di dialogo si spostano.** Trascinare una finestra di dialogo dalla barra del titolo per toglierla di mezzo al disegno; ricompare dove la si è lasciata. Fare doppio clic sulla barra del titolo per centrarla di nuovo. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).
- **Ricette per gli assistenti AI.** Dieci richieste svolte per il proprio assistente (riordinare un disegno, stampare un set, verificare disegni, fare domande a un modello, totalizzare un computo, provare una variante di parte…), ciascuna con gli strumenti che chiama e i permessi che richiede, e ciascuna riprodotta dai nostri test. Le app non contengono AI. Vedere [Ricette per gli assistenti AI](common:assistants-recipes).
- **Lingue.** **Português (Portugal)** è nuovo in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Lingua}}. Esso, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** hanno ora ogni parola delle app, come bozze non ancora riviste da un madrelingua. Gli argomenti della guida sono in inglese.
- **CadCraft Studio** dice perché un controllo degli aggiornamenti non è riuscito (nessun file per il proprio sistema, nessuna rete, una firma non valida) invece di dire solo "Fine", e smette di riproporre una scheda Novità che è stata chiusa finché non c'è un rilascio più recente.

## Non ancora in questa versione

- **La 0.7 non è firmata digitalmente.** La firma, e il pacchetto per il Microsoft Store, sono passati alla 0.8 perché la convalida del certificato non è ancora arrivata. Controllare lo SHA-256 accanto a ciascun file su getcadcraft.com/download. Su Windows, se SmartScreen blocca il programma di installazione, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, la prima volta, fare clic con il pulsante destro su CadCraft Studio e scegliere {{ui:Apri}}. CadCraft Studio non è ancora in uno store di app e non esiste ancora una versione per iPad o iPhone.
- Gli elenchi di angolo e pendenza in {{ui:Unità}} sono salvati, ma nessuna finestra li legge ancora.
- Gli oggetti OLE di un DWG vengono mantenuti ma non mostrati, e le immagini metafile dentro gli oggetti OLE non sono disegnate.
- La lettura delle tabelle degli stili di stampa (file CTB) di altri programmi attende un file di esempio.
- Il testo asiatico più vecchio scritto come codici `\M+` viene letto, ma non è ancora stato confrontato con un file di un altro programma.
- Sottofondi PDF: le immagini dentro la pagina sono mostrate sullo schermo ma non stampate, la stampa di un assistente lascia fuori i sottofondi, e come gli altri programmi leggono il ritaglio e la scala salvati non è ancora stato verificato in essi.
- Cronologia: CadCraft non invia ancora i propri salvataggi al cloud, quindi le versioni cloud sono quelle salvate da altri dispositivi e dal web. La Cronologia è solo in CadCraft Studio.
- Se Studio mantenga la cartella di supporto acad.lsp dopo un riavvio non è ancora stato verificato; se lo chiede, scegliere di nuovo la cartella in APPLOAD.
- Il pannello Laser non è ancora stato provato su un vero laser: provare ogni impostazione su un materiale di scarto. CadCraft Studio non ha Web Serial, quindi in Studio il pannello salva solo G-code.
- La registrazione di scansioni è stata provata su scansioni inventate, non ancora su un set di uno scanner vero.
- Il pan con due dita è stato provato con eventi di trackpad simulati, non ancora su un vero trackpad.
- {{cmd:PEDIT}} non ha l'opzione Modifica vertice (usare i grip o Proprietà). Offset, rifila, estendi, raccordo, spezza e unisci non accettano ancora spline; l'altezza (Z) di una spline non viene mantenuta.
- Al nuovo testo a paragrafo non si possono ancora dare codici di formattazione, e le stampe SVG mostrano il testo formattato in un solo colore.
- L'opzione Intero disegno di WBLOCK scrive solo il modello, non le tavole. Lo stile di quota corrente non è salvato nel file: un disegno si apre con Standard come corrente.
- Gli stili di menu con barra multifunzione non hanno ancora elenchi di layer, colore o tipo di linea: usare il pannello {{ui:Layer}} e {{ui:Proprietà}}.
- Le nuvole di punti non sono ancora salvate nel disegno né stampate, e i file E57 si aprono fino a 6 milioni di punti e 512 MB.
- I file DWG salvati da CadCraft non sono ancora stati verificati in AutoCAD stesso.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet).
