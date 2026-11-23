---
title: Mappa dei comandi: cosa digitare
summary: Ogni comando di CadCraft con i suoi nomi brevi, dalla A alla Z, ricavato dal programma stesso, e le abitudini di altri programmi di disegno che differiscono.
keywords: mappa dei comandi, comandi, alias, nomi brevi, provenienza, elenco dei comandi, cosa digitare, cancella, rifila, equivalente, differenze
from: 9426856f
---

CadCraft accetta i nomi dei comandi e i nomi brevi che si conoscono da altri programmi di disegno: digitare `L` per una linea, `TR` per rifilare, `E` per cancellare. Quindi per la maggior parte dei comandi non c'è una tabella di corrispondenze da imparare: il nome che si conosce è lo stesso qui. L'elenco qui sotto contiene tutti i comandi di CadCraft, ricavato dal programma stesso. {{key:Enter}} ripete l'ultimo comando; `HELP` nella riga di comando stampa lo stesso elenco.

Pochi comandi non sono uguali, oppure non sono ancora implementati:

- **Salva** scarica una copia nel browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio scrive il file. Vedere [Passare da altri software di disegno](topic:coming-from).
- **PLOT** crea un PDF (anche PNG e SVG), con una tabella di stili di stampa; non c'è un gestore di impostazione pagina.
- **DIMSTYLE** e **PEDIT** sono implementati; **PEDIT** non ha l'opzione Vertice di modifica (lo fanno i grip).
- **TABLE** non è ancora implementato; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} lo sono.
- I comandi propri di una routine (AutoLISP `C:NOME`) compaiono dopo averla caricata con {{cmd:APPLOAD}}; non sono elencati qui.

## Tutti i comandi (402)

| Comando | Nomi brevi | Cosa fa |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Ruota la vista 3D con il pulsante sinistro |
| `ACCESS` | `AX` | Attiva o disattiva il disegno senza vista: risultati letti dal lettore di schermo, un cursore da tastiera sul disegno, suoni di snap e comandi vocali. |
| `ALIASEDIT` |  | Modifica gli alias dei comandi in un unico file di testo (il formato familiare L, *LINE) |
| `ALIGN` | `AL` | Sposta e ruota gli oggetti in modo che i punti di origine cadano sui punti di destinazione (una, due o tre coppie), e li scala se si vuole |
| `ALIGNPANEL` | `ALP` | Apre il pannello Allinea e distribuisci |
| `ALIGNTO` |  | Allinea i bordi sinistro, centrale, destro, superiore, medio o inferiore degli oggetti selezionati, sulla selezione, sul primo o sull'ultimo oggetto indicato, oppure su un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra gli oggetti annotativi a ogni scala, oppure solo dove la scala della viewport (o del disegno) è nel loro elenco |
| `ANNOSCALE` | `CANNOSCALE` | Imposta la scala di annotazione del disegno: il testo e le quote annotativi vengono ridimensionati per stampare alla stessa dimensione |
| `APPLOAD` | `AP` | Carica applicazioni: routine LISP (.lsp) e i loro file di finestra di dialogo (.dcl); la Suite di avvio (AP) |
| `ARC` | `A` | Arco: 3 punti, Inizio/Centro/Fine, Inizio/Centro/Angolo, Inizio/Centro/Lunghezza, Inizio/Fine/Angolo, Inizio/Fine/Direzione, Inizio/Fine/Raggio, Centro/Inizio/Fine, Centro/Inizio/Angolo, Centro/Inizio/Lunghezza, Continua |
| `AREA` | `AA` | Area e perimetro per punti o di un oggetto; Aggiungi e Sottrai mantengono un totale parziale (AA) |
| `ARRAY` | `AR` | Copie in righe e colonne, oppure intorno a un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Imposta se i comandi ARRAY creano serie che restano modificabili (1) o semplici copie (0) |
| `ARRAYCLOSE` |  | Termina la modifica degli oggetti sorgente di una serie |
| `ARRAYEDIT` |  | Modifica una serie creata con l'opzione Associativo: numeri, spaziatura, oggetti sorgente, un solo elemento |
| `ARRAYPATH` |  | Copie di oggetti lungo una linea, un arco, una polilinea o un'altra curva |
| `ARRAYPOLAR` |  | Copie intorno a un punto centrale |
| `ARRAYRECT` |  | Copie in righe e colonne |
| `ASBUILT` | `ASB` | ASBUILT legge i punti as-built rilevati da una squadra (CSV / TXT, come scrive EXPORTPOINTS) e li confronta con i punti del disegno: entro o fuori tolleranza, non misurati, in più. Li contrassegna sul layer AS-BUILT e scarica un rapporto CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definisce un attributo (un'etichetta per cui un blocco chiede un valore) da inserire in un blocco (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Modifica i valori degli attributi di un riferimento a blocco sulla riga di comando, uno dopo l'altro (Invio mantiene un valore) |
| `ATTSYNC` |  | Allinea i riferimenti di un blocco alle sue definizioni di attributo: quelli nuovi aggiunti con i valori predefiniti, quelli rimossi eliminati, posizioni e testo reimpostati; valori mantenuti |
| `AUDIT` |  | Controlla il disegno aperto per danni: numeri non finiti, oggetti senza dimensione, layer, blocchi, stili e tipi di linea mancanti, blocchi che contengono se stessi, id condivisi, quote e tratteggi danneggiati. Elenca ciò che trova per tipo e chiede prima di correggere; la correzione è un solo passo di annullamento. |
| `AUNITS` | `ANGUNITS` | Come vengono mostrati e digitati gli angoli: gradi decimali, gradi-primi-secondi oppure azimut come N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Completamento automatico del disegno attivo o disattivo, oppure elenca ciò che i motivi del disegno suggeriscono ora. |
| `AUTOCONSTRAIN` |  | Aggiunge vincoli di coincidenza, orizzontali e verticali dove la geometria è già vicina |
| `AUTODIM` | `ADIM` | Quota secondo regole: ingombro complessivo, catene lungo i lati, aperture, diametri dei fori e interasse della griglia, senza ripetere ciò che è già quotato. |
| `AUTOSHEET` | `ASH` | Dispone le tavole da sola: sceglie carta e scale standard, e colloca ogni vista con una didascalia e un cartiglio. |
| `BATTMAN` |  | Gestore degli attributi di blocco: ordine, etichette, richieste, valori predefiniti e modalità degli attributi di un blocco, poi aggiornamento dei suoi riferimenti |
| `BCLOSE` |  | Chiude l'editor di blocchi: salva il blocco o scarta le modifiche |
| `BCONVERT` |  | BCONVERT trova geometrie che si ripetono e le trasforma in riferimenti a blocco. Selezionare gli oggetti che si ripetono: ogni altro insieme di oggetti nello spazio aperto con la stessa geometria, spostato e ruotato di un angolo qualsiasi, viene trovato, e con Speculare o Scalato attivi vengono trovate anche le immagini speculari e le copie a un'altra dimensione. Dare al nuovo blocco un nome e un punto base; la selezione e ogni copia diventano riferimenti ad esso, ciascuno con la propria rotazione e scala. Oppure scegliere Blocco e indicare un blocco esistente per trovare copie sparse dei suoi oggetti. Una copia deve avere lo stesso layer, colore, tipo di linea e spessore, a meno che Proprietà non sia impostato su Ignora. Gli oggetti su layer bloccati non vengono toccati. Un solo passo di annullamento. |
| `BEDIT` | `BE` | Editor di blocchi: modifica gli oggetti e gli attributi di un blocco; BCLOSE salva (BE) |
| `BLEND` |  | BLEND: una spline tra le estremità di due curve aperte, indicate vicino alle estremità da unire. CONtinuità: Tangente segue entrambe le direzioni, Liscia segue anche come si curvano. |
| `BLOCK` | `B`, `BMAKE` | Crea un blocco da oggetti (diventano un unico riferimento) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: ogni riferimento a un blocco diventa un riferimento a un altro, nello stesso punto e con la stessa scala e rotazione. I valori degli attributi che entrambi i blocchi hanno vengono mantenuti. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra il pannello Blocchi con il cursore nel suo filtro. Il pannello mostra un'immagine di ogni blocco (prima quelli inseriti più di recente), come elenco o griglia; fare clic su un'immagine o trascinarla sul disegno per inserire il blocco con INSERT. Sotto Librerie, aggiungere un file DWG o DXF proprio: i suoi blocchi sono elencati con le immagini e vengono copiati in questo disegno quando se ne inserisce uno. In CadCraft Studio si può aggiungere anche una cartella di disegni, e file e cartelle vengono ricordati. |
| `BOMEDIT` | `BOMCOLUMNS` | Colonne, raggruppamento, ordinamento, titolo, totali e note di una tabella di distinta base |
| `BOMEXPORT` |  | Salva una tabella di distinta base come file .csv |
| `BOMTABLE` | `BOM` | Una tabella di distinta base dinamica di una zona, o dell'intero disegno |
| `BOMUPDATE` |  | Aggiorna ora ogni tabella di distinta base, anche quelle bloccate |
| `BOMZONE` | `BZONE` | Un'area con nome del disegno per una distinta base: due angoli, un poligono, oppure il contorno di un oggetto chiuso |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): indicare un punto dentro un'area chiusa e ottenere attorno ad essa una polilinea chiusa. Gli archi restano archi. Le isole contornano anche le aree al loro interno. |
| `BOX` |  | Un parallelepipedo: due angoli e un'altezza (3D) |
| `BPARAMETER` | `BPARAM` | Non ancora implementato: aggiungere un parametro (come Visibilità) a un blocco. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri di blocco: parametri con nome e formule, e più parametri di visibilità in un blocco. Funziona nell'editor di blocchi (assegna gli oggetti selezionati a uno stato) e su un riferimento selezionato (i suoi valori e i suoi stati). |
| `BREAK` | `BR` | Spezza una linea, un arco, un cerchio o una polilinea tra due punti (BR) |
| `BREAKATPOINT` |  | Divide in due una linea, un arco o una polilinea in un punto |
| `BREAKLINE` |  | Disegna una linea con un simbolo di interruzione; dimensione e prolungamento oltre le estremità vengono ricordati. |
| `BREPLACE` |  | BREPLACE sostituisce un blocco con un altro. Selezionati: indicare riferimenti a blocchi e il blocco da usare al loro posto. Tutti: dare un nome a un blocco e alla sua sostituzione, e ogni riferimento in ogni spazio e dentro altri blocchi cambia. Un riferimento mantiene il suo posto, la scala, la rotazione e il layer, e i valori degli attributi che entrambi i blocchi hanno; i valori per cui il nuovo blocco non ha posto vengono eliminati e segnalati. |
| `BSEARCH` |  | BSEARCH trova blocchi. Nome: parte di un nome di blocco, oppure un modello con * e ?. Attributo: un valore (o TAG=valore) contenuto negli attributi di un riferimento. Geometria: selezionare oggetti o un riferimento a blocco, e vengono elencati i blocchi la cui forma è simile almeno all'85%, dal più simile; dimensione, rotazione e specularità non contano. I riferimenti trovati nello spazio aperto vengono selezionati, pronti per il comando successivo. |
| `BURST` |  | Esplode riferimenti a blocchi e mantiene ciò che dicono i loro attributi: ogni valore diventa testo sul layer dell'attributo. |
| `BVHIDE` | `BVH` | Nell'editor di blocchi: nasconde oggetti nello stato di visibilità corrente. |
| `BVSHOW` | `BVSH` | Nell'editor di blocchi: mostra gli oggetti che lo stato di visibilità corrente nasconde (appaiono sbiaditi per poterli indicare). |
| `BVSTATE` | `BVS` | Nell'editor di blocchi, su un blocco con stati di visibilità: passa a uno stato, oppure ne aggiunge, rinomina o elimina uno. |
| `CAL` |  | Calcola una lunghezza o un numero: + − * / e parentesi, come si digitano ovunque |
| `CENTERLINE` | `CL` | Linea di mezzeria tra due linee: a metà strada tra di esse, oppure lungo la bisettrice quando si incontrano (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Segno di centro: una croce al centro di un cerchio o di un arco, con linee di centro che sporgono oltre di poco (CM) |
| `CHAMFER` | `CHA` | Smussa l'angolo tra due linee (D due distanze, A lunghezza e angolo, P ogni angolo di una polilinea) |
| `CHSPACE` |  | CHSPACE: sposta oggetti tra una tavola e il modello attraverso una viewport. Vengono scalati e ruotati perché sembrino uguali dall'altra parte. Su una tavola vanno nel modello; mentre si lavora attraverso una viewport (MSPACE) vanno sulla tavola. |
| `CIRCLE` | `C` | Centro e raggio, diametro, 2 o 3 punti |
| `CLASS` |  | Mette gli oggetti selezionati in una classe, oppure, senza selezione, imposta la classe attiva (? le elenca) |
| `CLASSES` | `CLS` | Il pannello Classi: le classi ordinano gli oggetti attraverso i layer; si possono mostrare, nascondere e definirne lo stile, ed eseguire sostituzioni per viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ancora o rende mobile la riga di comando, la rende su una sola riga, ne imposta le righe di cronologia, oppure apre la cronologia (F2) |
| `COMPARESETTINGS` | `CMPSET` | Confronta stili di quota, stili di testo, layer, tavole o unità: due in questo disegno, oppure questo disegno con un altro aperto, e copia un valore. |
| `CONSTRAINTBAR` | `CBAR` | Mostra o nasconde le barre dei vincoli (Mostra tutto / Nascondi tutto, oppure per oggetto) |
| `COPY` | `CO`, `CP` | Copia oggetti, tante volte quanti sono i clic |
| `COPYBASE` |  | Copia oggetti negli Appunti con un punto base indicato |
| `COPYCLIP` |  | Copia oggetti negli Appunti (Ctrl+C); PASTECLIP li incolla |
| `COUNT` | `BCOUNT` | Conta riferimenti a blocchi: indicarne uno per selezionare e contare ogni riferimento del suo blocco |
| `COUNTTABLE` |  | Inserisce una tabella di conteggi di blocchi |
| `CREDITS` |  | Inserisce nel disegno i crediti della Libreria sotto forma di tabella. Eseguirlo di nuovo per aggiornare la tabella con gli elementi presenti ora nel disegno. |
| `CURSORSIZE` |  | Dimensione del mirino: 100 lo porta da un bordo all'altro del disegno (Impostazioni › Cursore › Schermo intero) |
| `CUTCLIP` |  | Taglia oggetti negli Appunti (Ctrl+X): copia, poi cancella |
| `CYLINDER` | `CYL` | Un cilindro: centro, raggio e altezza (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Elenca blocchi, attributi e proprietà degli oggetti come tabella nel disegno o in un file CSV |
| `DATALINK` | `DL` | Una tabella da un file CSV che ricorda il file, così può essere riletto |
| `DATALINKUPDATE` | `DLU` | Rilegge il file di un collegamento dati e riempie di nuovo le sue tabelle |
| `DCALIGNED` | `DCALI` | Vincolo quotato: distanza reale tra punti, un punto e una linea, o due linee |
| `DCANGULAR` | `DCANG` | Vincolo quotato: angolo tra due linee, o di un arco |
| `DCCONVERT` |  | Trasforma le quote disegnate su geometrie vincolabili in vincoli quotati |
| `DCDIAMETER` | `DCDIA` | Vincolo quotato: diametro di un cerchio o di un arco |
| `DCDISPLAY` |  | Mostra o nasconde i vincoli quotati sul disegno |
| `DCHORIZONTAL` | `DCHOR` | Vincolo quotato: distanza orizzontale |
| `DCLINEAR` | `DCLIN` | Vincolo quotato: distanza orizzontale o verticale, dal punto in cui lo si colloca |
| `DCRADIUS` | `DCRAD` | Vincolo quotato: raggio di un cerchio o di un arco |
| `DCVERTICAL` | `DCVER` | Vincolo quotato: distanza verticale |
| `DELBLOCKS` |  | Elimina blocchi: ogni riferimento (anche quelli annidati, su ogni tavola) e le definizioni |
| `DELCONSTRAINT` | `DELCON` | Rimuove ogni vincolo (geometrico e quotato) dagli oggetti selezionati |
| `DELOPENING` |  | Toglie una porta o una finestra da un muro. |
| `DESCRIBE` | `DESC` | Dice cosa contiene il disegno: quanti oggetti, di che tipo, quanto grandi, cosa è selezionato. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Annulla la selezione (Esc) |
| `DETAILS` | `DET` | I dettagli propri dello studio, trovati per ciò che si sta disegnando: trova, aggiungi un blocco, elenca, rimuovi, attiva o disattiva i suggerimenti. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Disegna un diagramma da testo: un diagramma di flusso Mermaid, un diagramma di componenti PlantUML, D2, un elenco da-a o XML draw.io, come blocchi e connettori modificabili |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distanza reale tra due punti |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angolo tra due linee, di un arco, oppure tramite tre punti |
| `DIMARC` | `DAR` | Quota di lunghezza d'arco: la distanza lungo un arco, con il simbolo dell'arco (DAR) |
| `DIMASZ` |  | Impostazione di quota: dimensione delle frecce |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Quote impilate da una linea di base |
| `DIMBREAK` | `DBREAK` | Interrompe le linee di quota e di riferimento dove attraversano altri oggetti (Auto), tra due punti (Manuale), oppure rimuove le interruzioni |
| `DIMCONSTRAINT` | `DCON` | Vincoli quotati: lineari, allineati, angolari, raggio, diametro, converti |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una catena di quote, ciascuna dalla fine della precedente |
| `DIMDEC` |  | Impostazione di quota: cifre decimali |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diametro di un arco o di un cerchio |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libera le quote dagli oggetti a cui sono legate (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Modifica il testo della quota (Home, Nuovo testo, Ruota) oppure inclina le linee di riferimento (Obliqua) |
| `DIMEXE` |  | Impostazione di quota: prolungamento oltre la linea di quota |
| `DIMEXO` |  | Impostazione di quota: distanza dall'origine |
| `DIMGAP` |  | Impostazione di quota: spazio attorno al testo |
| `DIMINSPECT` |  | Quota di ispezione: un riquadro attorno al valore con un'etichetta e la frequenza di controllo del pezzo |
| `DIMJOGGED` | `DJO`, `JOG` | Quota di raggio spezzato: un raggio disegnato da un punto più vicino quando il centro è lontano (DJO) |
| `DIMJOGLINE` | `DJL` | Aggiunge un simbolo di spezzatura a una linea di quota lineare o allineata, per mostrare che la distanza non è in scala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distanza orizzontale o verticale (R per un angolo qualsiasi) |
| `DIMLUNIT` |  | Impostazione di quota: formato delle lunghezze (1 scientifico, 2 decimale, 3 ingegneristico, 4 architettonico, 5 frazionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Quota di ordinata: la distanza X o Y di un punto dall'origine dell'UCS, su una guida (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sovrascrive le variabili di quota sulle quote selezionate senza cambiarne lo stile; Cancella rimette lo stile (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raggio di un arco o di un cerchio |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Lega i punti di una quota a oggetti, così la quota li segue e si ri-misura quando si spostano (DRE) |
| `DIMSCALE` |  | Impostazione di quota: scala generale (dimensioni × questo valore) |
| `DIMSPACE` |  | Spaziatura uniforme tra quote parallele, misurata da una quota di base (0 le allinea, Auto è il doppio dell'altezza del testo) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crea, modifica, imposta come corrente, elimina, applica e confronta stili di quota con nome (la finestra; -DIMSTYLE nella riga di comando) |
| `DIMTEDIT` | `DIMTED` | Sposta il testo della quota a sinistra, a destra o al centro della linea di quota, oppure lo ruota |
| `DIMTEXTUNIT` | `DTU` | Testo della quota in mm, cm, m o km, oppure nelle unità del disegno: le quote selezionate, altrimenti quelle nuove (DTU) |
| `DIMTXT` |  | Impostazione di quota: altezza del testo |
| `DIST` | `DI` | Distanza e angolo tra due punti |
| `DISTRIBUTE` |  | Distribuisce gli oggetti selezionati in modo uniforme, da lato a lato o dall'alto in basso: passi uguali tra i centri, oppure spazi uguali; i due esterni restano |
| `DIVIDE` | `DIV` | DIVIDE (DIV): segni che dividono una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse in parti uguali. Punti, oppure con Blocco un blocco su ogni segno. |
| `DOCUMENTS` | `DOCS` | Apre il pannello Documenti: registra e restituisce i disegni, le revisioni, gli stati di rilascio e l'approvazione per una cartella di progetto |
| `DOOR` | `DR` | Inserisce una porta in un muro. Il lato su cui si fa clic è quello verso cui si apre. |
| `DRAWORDER` |  | Modifica l'ordine di disegno: porta oggetti in primo piano, li manda sullo sfondo, oppure li mette sopra o sotto altri oggetti. |
| `DUPLICATE` | `DUP` | Una copia che segue il puntatore: fare clic per posarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Le proprietà del disegno: titolo, autore e il resto, e le proprie coppie nome-valore |
| `DXFOUT` |  | Scarica il disegno come DXF R12 (Salva mantiene il suo formato) |
| `EATTEDIT` | `DDATTE` | Modifica gli attributi di un riferimento a blocco: valori, testo e proprietà, un attributo alla volta |
| `ELLIPSE` | `EL` | Estremi dell'asse e l'altra semiasse |
| `ERASE` | `E`, `DELETE` | Rimuove oggetti |
| `EXPLODE` | `X` | Spezza polilinee, blocchi e quote nelle loro parti |
| `EXPORT` | `EXP` | Salva una copia del disegno in un tipo di file che un componente aggiuntivo scrive |
| `EXPORT3D` | `3DEXPORT` | Esporta il modello 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Scrive punti, e i punti di inserimento dei blocchi con un attributo come descrizione, in un file CSV o TXT (PNEZD, PENZD o XYZ) per programmi BIM e di rilievo |
| `EXTEND` | `EX` | Allunga oggetti fino a incontrarne altri: fare clic vicino a un'estremità, trascinare attraverso più oggetti, oppure Shift+clic per rifilare |
| `EXTRIM` |  | EXTRIM: indicare un bordo di taglio, poi un lato. Tutto ciò che attraversa il bordo viene rifilato da quel lato. I pezzi che verrebbero eliminati appaiono mentre si muove il puntatore. |
| `EXTRUDE` | `EXT` | Estrude oggetti 2D chiusi in solidi (3D) |
| `FIELD` |  | Inserisce un campo in un testo, in una cella di tabella o in un attributo: una data, il nome del file, il numero della tavola, una proprietà del disegno, l'area o la lunghezza di un oggetto, oppure una formula |
| `FILLET` | `F` | Arrotonda o squadra l'angolo tra due oggetti (R raggio, P ogni angolo di una polilinea, M più angoli) |
| `FIND` |  | Trova e sostituisce parole nel testo, nei valori degli attributi e nel testo delle quote |
| `FLATTEN` |  | Porta a 0 l'altezza (Z) e lo spessore degli oggetti selezionati, anche nei blocchi che usano. |
| `FLOOR` |  | Sceglie il piano su cui disegnare, ne aggiunge uno, oppure sposta o copia la selezione su di esso. |
| `FLOORLAYERS` |  | Trasforma i piani in layer chiamati Piano-Layer, per un file destinato a chi non usa i piani. |
| `FLOORS` | `FLR` | Apre il pannello Piani: sovrappone piani in un unico spazio modello. |
| `GCCOINCIDENT` |  | Vincolo: due punti coincidono, oppure un punto resta su un oggetto |
| `GCCOLLINEAR` |  | Vincolo: due linee restano su una stessa retta |
| `GCCONCENTRIC` |  | Vincolo: due cerchi o archi condividono un centro |
| `GCEQUAL` |  | Vincolo: due linee restano della stessa lunghezza, oppure due cerchi o archi dello stesso raggio |
| `GCFIX` |  | Vincolo: un punto o un intero oggetto resta dov'è |
| `GCHORIZONTAL` |  | Vincolo: una linea (o due punti) resta orizzontale |
| `GCPARALLEL` |  | Vincolo: due linee restano parallele |
| `GCPERPENDICULAR` |  | Vincolo: due linee restano ad angolo retto |
| `GCSYMMETRIC` |  | Vincolo: due punti, linee o cerchi si specchiano l'uno nell'altro rispetto a una linea |
| `GCTANGENT` |  | Vincolo: una linea e un cerchio o un arco (o due di essi) restano tangenti |
| `GCVERTICAL` |  | Vincolo: una linea (o due punti) resta verticale |
| `GDSIN` | `GDS` | Visualizza il layout di un circuito integrato (un file GDSII): ogni layer e tipo di dato come layer del disegno, piatto, in unità utente; solo per visualizzare e misurare (prova di laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Vincoli geometrici: orizzontale, verticale, parallelo, tangente, coincidente… |
| `GLBOUT` |  | Esporta il modello 3D come GLB (glTF) |
| `GRADIENT` | `GD` | Riempie un'area con una sfumatura di uno o due colori |
| `GRID` |  | Imposta la griglia: la distanza tra le linee, ogni N-esima linea come linea principale, ON o OFF, oppure Auto per seguire di nuovo lo zoom |
| `GRIDMOVE` | `GM` | Sposta una linea di griglia e porta con sé ciò che vi è appeso: i muri si allungano, pilastri, cerchietti ed etichette si spostano, le quote seguono. |
| `GROUP` | `G` | GROUP (G): dà agli oggetti selezionati un nome condiviso. Un clic su uno di essi seleziona poi tutti. Invio sul nome crea un gruppo senza nome. |
| `GROUPEDIT` |  | GROUPEDIT: modifica un gruppo. Indicare uno dei suoi oggetti o darne il Nome, poi Aggiungi o Rimuovi oggetti, RINomina, cambiarne la Descrizione, oppure decidere se un clic lo seleziona per intero. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Riempie un'area con un riempimento pieno o un motivo: fare clic al suo interno, oppure selezionare oggetti chiusi (H) |
| `HATCHEDIT` | `HE` | Modifica un tratteggio: motivo, scala, angolo, origine e il suo legame con un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ricrea i contorni a polilinea da un tratteggio, collegati o no |
| `HATCHTOBACK` |  | Manda ogni tratteggio dietro a tutto il resto. |
| `HELP` | `?` | Questo elenco |
| `HIDEOBJECTS` |  | Nasconde gli oggetti selezionati fino a UNISOLATEOBJECTS. Non viene salvato con il disegno. |
| `HISTORY` | `HIST` | HISTORY (HIST): le versioni di questo disegno — copie conservate su questo computer quando Studio lo salva, e le versioni del cloud — da aprire, ripristinare e confrontare con ciò che è cambiato, mostrato a colori. |
| `ID` |  | Coordinate di un punto |
| `IMAGE` | `IM` | Dà a CadCraft i file immagine usati da un disegno (un DWG memorizza solo dove si trovavano). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Inserisce un'immagine (PNG o JPEG) da un file. |
| `IMAGECLIP` | `ICL` | Ritaglia un'immagine su un rettangolo o un poligono, oppure ne rimuove il ritaglio. |
| `IMPORT` | `IMP` | Importa in questo disegno un file di un tipo che un componente aggiuntivo legge |
| `INSERT` | `I`, `DDINSERT` | Inserisce un blocco (S scala, R ruota); F da un file DWG/DXF, L dalla libreria |
| `INTERSECT` | `IN` | Mantiene solo ciò che i solidi hanno in comune (3D), oppure l'area condivisa dalle regioni 2D |
| `ISODRAFT` |  | ISODRAFT: disegno isometrico attivo o disattivo, oppure direttamente sul piano Sinistro, Superiore o Destro. Quando è attivo, Ortho e il tracciamento polare seguono i due assi del piano, la griglia è disegnata in isometria, e ELLISSE ha Isocerchio. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra solo gli oggetti selezionati; tutto il resto in questo spazio è nascosto fino a UNISOLATEOBJECTS. Non viene salvato con il disegno. |
| `ISOPLANE` |  | ISOPLANE: sceglie il piano isometrico su cui disegnare: Sinistro, Superiore o Destro. Invio passa al successivo, come fa F5 quando il disegno isometrico è attivo. |
| `JOIN` | `J` | Unisce linee, archi e polilinee che si incontrano punta a punta in un'unica polilinea; linee sulla stessa retta in un'unica linea (J) |
| `LASER` | `LASERCUT` | Apre il pannello Laser: invia i layer a una macchina da taglio laser o a un incisore (codice G GRBL) |
| `LASSOMODE` |  | Premere e trascinare disegna un lazo (1) o un rettangolo (0) |
| `LAYDEL` |  | Elimina un layer e ogni oggetto che contiene (nel modello, nelle tavole e nei blocchi) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Apre il gestore dei layer: ogni layer in un'unica tabella |
| `LAYERPANEL` |  | Mostra il pannello dei layer |
| `LAYFRZ` |  | Congela il layer di ogni oggetto indicato |
| `LAYGROUP` | `LG` | Raggruppa i layer in cartelle nel pannello Layer. |
| `LAYISO` |  | Isola i layer degli oggetti selezionati (tutti gli altri layer spenti) |
| `LAYLOCKFADE` |  | Imposta quanto sbiadiscono gli oggetti sui layer bloccati, e se un clic può selezionarli. |
| `LAYMCUR` |  | Rende corrente il layer dell'oggetto indicato |
| `LAYMRG` |  | Unisce layer: i loro oggetti passano a un layer di destinazione, e i layer uniti scompaiono |
| `LAYOFF` |  | Spegne il layer di ogni oggetto indicato |
| `LAYON` |  | Accende tutti i layer |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Una nuova tavola con un cartiglio e una viewport |
| `LAYTHW` |  | Scongela tutti i layer |
| `LAYUNISO` |  | Riaccende i layer che LAYISO aveva spento |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte il testo digitato con i vecchi font vietnamiti a 8 bit (font TCVN3 / ABC come .VnTime, e VNI come VNI-Times) in Unicode. Questo testo è già mostrato come si legge; con il comando viene riscritto in modo definitivo, con un conteggio e un solo passo di annullamento. |
| `LENGTHEN` | `LEN` | Allunga o accorcia linee, archi e polilinee: di una quantità, di una percentuale, fino a un totale, oppure trascinando (LEN) |
| `LIBRARY` | `LIB` | Il pannello della libreria: posiziona elementi, controlla gli aggiornamenti, i crediti |
| `LIMITS` |  | Imposta i limiti del disegno: ON, OFF, oppure gli angoli in basso a sinistra e in alto a destra. Con i limiti attivi, i punti fuori vengono rifiutati |
| `LINE` | `L` | Segmenti rettilinei, ciascuno come oggetto a sé |
| `LINETYPE` | `LT`, `CELTYPE` | Il tipo di linea assegnato ai nuovi oggetti (per blocco, per layer, oppure uno con nome) |
| `LINKVIEWS` | `SYNCVIEWS` | Scorre e ingrandisce tutti i riquadri insieme (schermo diviso), per confrontare due disegni o revisioni |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) apre l'editor LISP: una finestra per scrivere, caricare e provare una routine. Carica nel disegno legge ogni forma, come fa APPLOAD con il file, e ne crea i comandi. Esegui selezione valuta le forme selezionate, oppure la forma in cui si trova il cursore. La console mostra ciò che la routine ha stampato e ogni errore con la sua riga. La parentesi corrispondente viene evidenziata mentre si digita, e Invio rientra la nuova riga. Nuovo, Apri e Salva lavorano su un file .lsp. Gli elenchi accanto al testo mostrano le funzioni che la routine definisce, quelle che chiama e che questo LISP non ha ancora, e tutte quelle che possiede. La finestra non blocca il disegno, quindi una routine può chiedere punti; Stop o Esc termina una routine in esecuzione. |
| `LIST` | `LI`, `LS` | Descrive gli oggetti nella cronologia |
| `LTSCALE` | `LTS` | La scala dei tipi di linea del disegno (ogni tratto e ogni spazio viene moltiplicato per essa) |
| `LWDISPLAY` | `LWT` | Mostra o nasconde gli spessori di linea a schermo (il pulsante LWT nella barra di stato) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Lo spessore di linea assegnato ai nuovi oggetti (per layer, per blocco, predefinito, oppure in mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Layer cartografici sotto lo spazio modello: il sistema di coordinate del disegno, tessere, WMS, WMTS, ArcGIS, immagini |
| `MASSPROP` |  | MASSPROP: proprietà di sezione di regioni e oggetti chiusi: area, perimetro, baricentro, momenti e prodotto d'inerzia, raggi di girazione e assi principali. Esatto per linee e archi. Può scrivere il rapporto in un file di testo. |
| `MATCHPROP` | `MA`, `PAINTER` | Copia proprietà: copia layer, colore e altro di un oggetto su altri (MA) |
| `MEASURE` | `ME` | MEASURE (ME): un segno ogni lunghezza data lungo una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse, a partire dall'estremità più vicina al punto indicato. Punti, oppure con Blocco un blocco su ogni segno. |
| `MEASUREGEOM` | `MEA` | Misura una distanza, un raggio, un angolo o un'area (MEA) |
| `MINSERT` |  | MINSERT: inserisce un blocco in righe e colonne in un'unica operazione. Ognuno è un riferimento a sé, quindi ciascuno può essere spostato o cancellato. |
| `MIRROR` | `MI` | Specchia oggetti rispetto a una linea |
| `MLEADER` | `MLD`, `MLEAD` | Multiguida: una freccia, una guida e una nota, come un unico oggetto (MLD) |
| `MLEADERALIGN` | `MLA` | Allinea le multiguide a una di esse lungo una direzione, a spaziatura uguale oppure distribuite tra due punti (MLA) |
| `MLEADERCOLLECT` | `MLC` | Raccoglie più multiguide in una: i loro blocchi in riga o colonna, oppure le loro note una sotto l'altra (MLC) |
| `MLEADEREDIT` | `MLE` | Aggiunge linee di guida a una multiguida o le rimuove; cambia il suo contenuto tra testo e blocco (MLE) |
| `MLINE` |  | Disegna insieme linee parallele, unite agli angoli. |
| `MOVE` | `M` | Sposta oggetti con un punto base e un secondo punto |
| `MSPACE` | `MS` | Lavora sul modello attraverso una viewport della tavola aperta (oppure con doppio clic dentro la viewport). |
| `MTEXT` | `MT`, `T` | Testo a paragrafo: trascinare la larghezza, poi digitare sul posto; Invio inizia un nuovo paragrafo (T) |
| `MVIEW` | `MV` | Una viewport sul modello, su un layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Viste con nome: salva la vista sullo schermo (o una finestra) con un nome e vi torna (NV) |
| `NCOPY` |  | Copia oggetti da un riferimento a blocco o da un disegno collegato nel disegno, senza esplodere nulla. |
| `NEARBY` |  | Dice cosa si trova vicino al cursore, dal più vicino, con la distanza e il lato. |
| `NEW` |  | Inizia un nuovo disegno |
| `OBJECTSCALE` | `OBJSCALE` | Scale di annotazione del testo e delle quote annotative: aggiunge una scala, ne elimina una, aggiunge la scala corrente, oppure le elenca (ogni viewport le mostra alla dimensione per la propria scala) |
| `OBJOUT` |  | Esporta il modello 3D come OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Lo standard di studio: altezze del testo su carta, layer, campi del cartiglio e modelli in un unico registro. Mostra quello in vigore e da dove viene; importa un registro .json in questo disegno, aggiunge i layer dello studio che mancano, elenca i campi del cartiglio. |
| `OFFSET` | `O` | Copie parallele a una distanza |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: come OFFSET chiude gli spazi agli angoli esterni di una polilinea. 0 prolunga i segmenti, 1 aggiunge un arco, 2 aggiunge un taglio dritto. Mantenuto per questa sessione. |
| `OLELIST` | `OLES` | Elenca gli oggetti OLE che un disegno contiene e inserisce una copia dell'immagine di uno di essi dove si sceglie |
| `OPEN` |  | Apre un DWG o DXF da questo computer |
| `OPENIN3D` |  | Apre questo disegno nell'app di modellazione 3D, in una nuova scheda (nulla viene caricato) |
| `OPTIONKEYS` | `OPTKEYS` | Dà alle opzioni dei comandi lettere proprie (ARRAY.PO, P), in un unico file di testo |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Apre il menu degli snap a oggetto: si scelgono quali snap sono attivi. Anche clic destro su Snap nella barra di stato. |
| `OVERKILL` |  | Elimina oggetti duplicati e unisce linee e archi sovrapposti o che si toccano punta a punta, entro una tolleranza. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Il pannello Parametri: parametri utente e vincoli quotati in un'unica tabella |
| `PARTSLIST` | `PLIST` | Una tabella di distinta componenti di ogni componente standard e profilato in acciaio posizionato dalla libreria |
| `PASTEAREA` | `PAREA` | Incolla un'area copiata in MarkupCraft (Copia area) alla sua dimensione reale, come immagine. |
| `PASTEBLOCK` |  | PASTEBLOCK: incolla ciò che si è copiato come un unico blocco. Il blocco prende un nome proprio; RINOMINA gliene assegna uno personale. |
| `PASTECLIP` |  | Incolla gli Appunti: segue il cursore, fare clic dove va (Ctrl+V) |
| `PASTEORIG` |  | Incolla gli Appunti alle coordinate da cui sono stati copiati (Ctrl+Shift+V) |
| `PDF` |  | Dà a CadCraft i file PDF usati dai sottofondi del disegno |
| `PDFADJUST` |  | Attenua, regola contrasto, monocromia o disattiva un sottofondo PDF |
| `PDFATTACH` | `PDFATT` | Allega una pagina PDF come sottofondo (PDFATTACH) |
| `PDFCLIP` |  | Ritaglia un sottofondo PDF su un rettangolo o un poligono |
| `PDFIMPORT` | `PDFIM` | Trasforma linee, riempimenti e testo di una pagina PDF in oggetti del disegno (PDFIMPORT) |
| `PDFLAYERS` |  | Accende o spegne i layer di un sottofondo PDF |
| `PEDIT` | `PE` | Modifica una polilinea: chiudi, apri, unisci, larghezza, adatta curva, curva spline, decurva, generazione del tipo di linea, inverti; linee, archi e spline possono diventare polilinee |
| `PENPRESSURE` |  | Se la pressione di un tratto di penna imposta lo spessore di linea di ciò che SKETCHFIX e SKETCHLIVE creano (attivo all'inizio). Mantenuto in questo browser. |
| `PHOTOSKETCH` | `PSK` | Trasforma una foto di uno schizzo a mano su carta in linee e archi a una scala, raddrizzando la prospettiva e dando a ogni colore di penna il proprio layer. |
| `PICKSTYLE` |  | PICKSTYLE: se selezionare un oggetto di un gruppo seleziona l'intero gruppo (1, impostazione iniziale) oppure solo quell'oggetto (0). Mantenuto per questa sessione. |
| `PLAN` |  | Ruota la vista in modo che l'asse X dell'UCS (UCS corrente, un UCS salvato, oppure il Globale) sia in piano sullo schermo. Nulla nel disegno si sposta. |
| `PLINE` | `PL` | Una polilinea di segmenti rettilinei e ad arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Stampa in PDF: un layout, oppure il modello a una scala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabelle degli stili di stampa: stabilisce come viene stampato ogni colore (colore, nero, grigio, inchiostro, spessore di linea); è conservato con il disegno (STYLESMANAGER) |
| `POINT` | `PO` | Oggetti punto |
| `POINTCLOUD` | `PC` | la nuvola di punti collegata: sezione, altezza, spessore, colore, dimensione, visibilità, zoom, scollega |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | collega una nuvola di punti (LAS, LAZ, XYZ, PTS) sotto il disegno |
| `POLARANG` |  | Il passo del tracciamento polare in gradi (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un poligono regolare |
| `PRESSPULL` |  | Spinge o tira una faccia di un solido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Apre il pannello Proprietà (anche Ctrl+1, oppure doppio clic su un oggetto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Ripiega il pannello Proprietà sul bordo della finestra |
| `PSPACE` | `PS` | Esce dalla viewport in cui si lavora e torna alla tavola (oppure con doppio clic fuori di essa). |
| `PUBLISH` | `-PUBLISH` | Stampa più tavole, o tutte, in un unico PDF (una pagina e un segnalibro per tavola) |
| `PURGE` | `PU` | Rimuove le definizioni di blocchi che nulla usa |
| `QDIM` |  | Quota rapida: quota più oggetti in una volta (continua, di base, sfalsata, ordinata, raggio o diametro) |
| `QPMODE` | `QP` | Proprietà rapide vicino al cursore attive o disattive |
| `QSELECT` | `QS` | Selezione rapida: ogni oggetto di un tipo il cui layer, colore, dimensione o nome corrisponde (QS) |
| `RASTERSNAP` |  | Attiva o disattiva lo snap alle linee dei fogli scansionati. |
| `RAY` |  | Semiretta: una linea di costruzione da un punto, illimitata in un verso. |
| `RECOVER` |  | Apre un DXF o DWG danneggiato: salta ciò che non si può leggere invece di rifiutare il file, dice cosa è stato saltato, poi controlla e ripara il disegno come fa AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilinea chiusa da due angoli |
| `REDLINE` | `RDL` | Da annotazione a revisione: legge il pacchetto di annotazioni di MarkupCraft, accetta o rifiuta ogni modifica, circonda con una nuvola di revisione quelle accettate con un registro, e salva il file delle risposte (RDL) |
| `REDO` |  | Ripristina ciò che era stato annullato |
| `REFCLOSE` |  | Termina la modifica di un blocco sul posto: lo salva, oppure scarta le modifiche |
| `REFEDIT` |  | Modifica un blocco sul posto, dove si trova un suo riferimento, con il resto del disegno sbiadito; REFCLOSE lo salva |
| `REGEN` | `RE` | Ricostruisce in questa scheda ciò che è disegnato, a partire dal disegno |
| `REGENALL` | `REA` | Ricostruisce ciò che è disegnato in ogni scheda, riquadro e disegno aperto |
| `REGION` | `REG` | REGION (REG): crea regioni piane da oggetti chiusi, o da linee, archi e polilinee che chiudono un anello punta a punta. UNIONE, SOTTRAI e INTERSEZIONE combinano poi le regioni, e MASSPROP ne dà le proprietà di sezione. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra più scansioni: le colloca in un unico riquadro con coppie di punti indicati o bersagli, le raffina con ICP, ed esporta un unico LAS o E57 |
| `REINIT` |  | Ricarica il file degli alias |
| `RENAME` | `-RENAME`, `REN` | Rinomina un layer o un blocco (ogni oggetto o riferimento lo segue) |
| `REVCLOUD` | `RC` | Nuvola di revisione: circonda un rettangolo, un poligono, un percorso a mano libera o un oggetto (RC) |
| `REVOLVE` | `REV` | Ruota oggetti 2D chiusi attorno a un asse in solidi (3D) |
| `ROTATE` | `RO` | Ruota oggetti attorno a un punto base |
| `SAMPLES` | `SAMPLE` | Apre uno dei disegni campione di CadCraft (un insieme architettonico, un as-built) da cui imparare |
| `SAVE` | `QSAVE` | Scarica il disegno nel suo formato (DWG o DXF) |
| `SAVEAS` |  | Scarica il disegno come DWG o DXF: si sceglie quale |
| `SAYSEL` |  | Dice cosa è selezionato, una frase per oggetto. |
| `SCALE` | `SC` | Scala oggetti attorno a un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Aggiunge, modifica ed elimina le scale proprie del disegno; compaiono negli elenchi di scala di viewport e stampa e sono salvate nel file (SCALELIST) |
| `SCANALIGN` | `SCL` | Allinea un foglio scansionato su due punti: sposta, ruota e, se si sceglie, scala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserisce un disegno scansionato: un PNG, JPEG o TIFF (una pagina o tutte le pagine di un file multipagina) oppure una pagina PDF che è un'immagine. |
| `SCANCLEAN` | `SCC` | Rende bianco e nero un foglio scansionato e ne rimuove le macchie. |
| `SCANCROP` | `SCR` | Ritaglia un foglio scansionato su una finestra. |
| `SCANDESKEW` | `SCD` | Trova l'angolo con cui sono orientate le linee lunghe del foglio scansionato e lo raddrizza una volta accettato l'angolo. |
| `SCANERASE` | `SCE` | Cancella un'area di un foglio scansionato: un rettangolo, un poligono o un lazo. |
| `SCANINFO` | `SCI` | Mostra il file originale di un foglio scansionato e i passi fatti da allora. |
| `SCANSCALE` | `SCS` | Scala un foglio scansionato: si indicano due punti su di esso e si digita la distanza reale tra loro. |
| `SCANTRACE` | `SCT` | Traccia un foglio scansionato in linee e archi su un nuovo layer, con una tolleranza impostata. Testo e tratteggi restano raster. |
| `SELECT` |  | Seleziona ora oggetti (per P, Precedente, nel comando successivo) |
| `SELECTALL` | `AI_SELALL` | Seleziona ogni oggetto modificabile su questa scheda (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleziona ogni oggetto simile a quelli indicati: stesso tipo, layer e colore (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra il pannello Set di tavole: tavole di molti disegni, numerate, pubblicate in un unico PDF. |
| `SHORTCUTS` | `KEYS` | Dà a qualsiasi comando un tasto proprio (Ctrl o Alt con una lettera, oppure un tasto funzione libero), conservato in questo browser o nell'app desktop. |
| `SHXFONTS` | `SHX` | Dà a CadCraft font SHX da una cartella o da file, così gli stili di testo che li nominano si disegnano con essi (elenca, rimuove, inverte) |
| `SKETCHFIX` | `SKF` | Disegna tratti a mano libera; ognuno diventa una linea, un cerchio, un arco, un rettangolo o una polilinea puliti, squadrati e uniti agli altri. |
| `SKETCHLIVE` | `SKL` | Schizza con una penna: ogni tratto diventa una linea, un cerchio, un arco o un rettangolo precisi quando si solleva la penna, agganciati al disegno, con la dimensione da digitare sopra. |
| `SPLINE` | `SPL` | Disegna una spline attraverso punti (oppure con un poligono di controllo), oppure trasforma una polilinea in una spline |
| `SPLINEDIT` | `SPE` | Modifica una spline: punti di adattamento, punti di controllo e pesi, apre o chiude, inverte, oppure la converte in polilinea |
| `SPLIT` |  | Divide l'area di disegno in riquadri (come VPORTS sul modello; anche da una tavola) |
| `STEELMEMBER` | `SMEMBER` | Un'asta d'acciaio in 3D da un profilato standard: due punti (una trave) oppure un punto base e un'altezza (Colonna) |
| `STLOUT` |  | Esporta il modello 3D come STL (millimetri) |
| `STRETCH` | `S` | Stira: trascinare una finestra di attraversamento sulle estremità per spostarle; ciò che sta dentro si sposta, il resto resta (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stili di testo: il font, l'altezza, la larghezza e l'inclinazione che assume il nuovo testo (la finestra; -STYLE nella riga di comando) |
| `SUBTRACT` | `SU` | Sottrae solidi da altri (3D), oppure regioni 2D da altre regioni |
| `SWBOUT` | `SWMACRO` | Scarica una macro per SolidWorks (.swb) che ricostruisce il modello come un unico schizzo vincolato |
| `SWEEP` |  | Fa scorrere oggetti 2D chiusi lungo un percorso (linea, polilinea, arco, cerchio) in solidi (3D) |
| `TABLE` | `TB` | Crea una tabella: righe e colonne, oppure da celle di foglio di calcolo negli Appunti o in un file CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Modifica una tabella: digitare in una cella, inserire ed eliminare righe e colonne, dimensioni, celle unite, allineamento |
| `TABLEEXPORT` |  | Salva ciò che una tabella mostra come file CSV |
| `TABLEPASTE` | `PASTETABLE` | Crea una tabella da celle di foglio di calcolo negli Appunti |
| `TABLESTYLE` | `TS` | Stili di tabella: altezze del testo, allineamento, margine e bordi per le righe di titolo, intestazione e dati |
| `TAGS` |  | Etichette sui riferimenti a blocchi: definisce un'etichetta (tipo, valori ammessi, blocchi a cui si applica), la imposta sui riferimenti selezionati, ed elenca questi come tabella che si può salvare in CSV |
| `TEXT` | `DT`, `DTEXT` | Testo su una riga; Invio inizia la riga successiva |
| `TEXTEDIT` | `ED`, `DDEDIT` | Modifica il testo sul posto: indicare un testo (oppure farvi doppio clic) (ED) |
| `TEXTMASK` | `TMASK` | Mette una maschera di sfondo dietro i testi (lo sfondo del disegno o un colore), oppure la toglie. |
| `TEXTTOFRONT` |  | Porta testo, quote e guide davanti a tutto il resto. |
| `TOOLBAR` |  | Sceglie cosa mostrano i pulsanti della barra: icone e testo, solo icone, oppure solo testo (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Porta la barra degli strumenti in alto, in basso, a sinistra o a destra della finestra |
| `TOOLBARROWS` |  | Sceglie quante righe usa la barra: a capo per adattarsi, 2 o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Rende le barre sopra il disegno standard o compatte |
| `TOUCHCROSSHAIR` | `TCX` | Mirino spostato per disegnare con un dito: un dito muove un mirino che sta sopra e accanto ad esso, così il dito non copre il punto indicato. Sollevare il dito non indica nulla; il pulsante Clic, oppure un tocco con un secondo dito, indica sul mirino, e tenere premuto Clic mentre si muove trascina. Una pressione lunga o il pulsante Invio è Invio. Due dita spostano e ingrandiscono. Opzioni: ON, OFF, Auto (attivo solo dove un dito è l'unico puntatore), Distanza, Lato. |
| `TOUR` | `TUTORIAL` | Rifà il giro guidato del primo disegno in sei passi |
| `TRIM` | `TR` | Rifila oggetti fino a dove altri li incrociano: fare clic su un pezzo, trascinare attraverso più pezzi, oppure Shift+clic per estendere |
| `TRIMEXTENDMODE` |  | Come iniziano TRIM ed EXTEND: 1 Rapido (ogni oggetto è un bordo di taglio o un limite), 0 Standard (si scelgono prima i bordi) |
| `TTR` |  | Un cerchio tangente a due oggetti, con un raggio dato (come CIRCLE T). |
| `TURNLEFT` |  | Ruota la vista di 90° a sinistra (in senso antiorario): UCS Z -90, e la vista segue. Nulla nel disegno si sposta. |
| `TURNRIGHT` |  | Ruota la vista di 90° a destra (in senso orario): UCS Z 90, e la vista segue. Nulla nel disegno si sposta. |
| `TURNWORLD` |  | Torna al globale: UCS Globale, e la vista torna in piano. |
| `TXT2MTXT` | `T2M` | Unisce testi su una riga in un unico testo a paragrafo, dall'alto in basso. |
| `UCS` |  | Il proprio sistema di coordinate: un'origine e un asse X (origine, angolo Z, 3punti, OGgetto, Precedente, Globale, NOme). I punti digitati, ortho, il tracciamento polare, la griglia e il nuovo testo lo seguono; la vista ruota in modo che il suo asse X sia in piano. Nulla nel disegno si sposta. |
| `UNDO` | `U` | Annulla l'ultimo comando |
| `UNGROUP` |  | UNGROUP: scompone i gruppi. Selezionare oggetti dei gruppi, oppure dare un Nome. Gli oggetti restano nel disegno. |
| `UNION` | `UNI` | Unisce solidi in uno (3D), oppure regioni 2D in un'unica regione |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostra di nuovo ogni oggetto nascosto da ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Come vengono mostrate e digitate le lunghezze: decimale, piedi e pollici, frazioni (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ricalcola i campi, e sceglie quando si aggiornano da soli |
| `USDOUT` |  | Esporta il modello 3D come USD (testo .usda, binario .usdc oppure pacchetto .usdz) |
| `VIEW` | `-VIEW`, `V` | Viste 3D standard, prospettiche o parallele (3D) |
| `VIEWBASE` | `FLATSHOT` | Colloca una vista 2D piatta dei solidi 3D (fronte, alto, lato o isometrica, linee nascoste tratteggiate) su una tavola o nel modello |
| `VIEWLABEL` | `VL` | Un titolo di vista su una tavola che mostra il nome della vista della sua viewport, e cambia con essa. |
| `VOICE` |  | Attiva o disattiva i comandi vocali. Sono riconosciuti su questo computer. |
| `VPCLIP` |  | Ritaglia una viewport della tavola su un oggetto chiuso o su un poligono disegnato; Elimina la riporta a rettangolo |
| `VPLAYER` |  | Congela o scongela layer solo in alcune viewport (Congela, Scongela, Reimposta), e sceglie quali layer le nuove viewport iniziano congelate (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide l'area di disegno in riquadri, ciascuno con la propria vista (su una tavola: una viewport, come MVIEW) |
| `VPVIEW` |  | Imposta ciò che mostra una viewport: indicare una finestra sul modello |
| `VSCURRENT` | `VS`, `SHADEMODE` | Stile visivo della vista 3D: ombreggiato, bordi, linea nascosta, struttura metallica, raggi X |
| `WALL` | `WA` | Disegna muri 2D come una polilinea. Si uniscono, e portano porte e finestre. |
| `WALLARC` | `WARC` | Disegna un arco di muri. I muri in pianta sono rettilinei, quindi l'arco è disegnato come brevi muri dritti (15 gradi ciascuno) che si uniscono. |
| `WALLDELSEG` |  | Elimina un pezzo di muro tra due punti. Ciò che resta rimane come uno o due muri. |
| `WALLDIM` |  | Digita un nuovo valore per una quota: il muro all'estremità lontana si sposta squadrato su sé stesso, il muro al primo estremo resta fermo, e i muri uniti a esso seguono. |
| `WALLDISJOIN` |  | Indicare un muro vicino a un'estremità per impedire le unioni a quell'estremità: l'estremità è disegnata squadrata e nulla la segue. Indicarlo di nuovo per consentirle. |
| `WALLGRID` |  | Blocca un muro su una linea di griglia: lungo di essa, oppure un'estremità su di essa. Sposta la linea con GRIDMOVE e il muro la segue. |
| `WALLHOLD` |  | Allinea e blocca: un muro mantiene il suo posto rispetto a un altro (sulla sua linea, oppure alla distanza che ha). Se uno si sposta, l'altro lo segue. |
| `WALLHOLDDIM` |  | Blocca la distanza tra due muri paralleli. Se uno si sposta, l'altro lo segue per mantenerla. |
| `WALLHOLDS` |  | Elenca i blocchi sui muri. |
| `WALLJOINS` |  | Dà a ogni muro di un disegno più vecchio il suo id e memorizza le unioni tra di essi. Accade anche alla prima modifica. |
| `WALLJOINSTYLE` |  | Fare clic su un angolo dove due muri si incontrano punta a punta per cambiare come è disegnato: 45°, piatta, squadra. T inverte quale muro passa. |
| `WALLOFFSET` | `WO` | Sposta un muro squadrato su sé stesso di una distanza (i muri uniti a esso seguono), oppure ne crea una copia a quella distanza. |
| `WALLPICK` |  | Crea muri su una linea o polilinea del disegno, con le linee unite a essa se si risponde Sì. |
| `WALLPOLY` | `WP` | Disegna muri attorno a un poligono regolare di 3-64 lati, come POLYGON. |
| `WALLRECT` | `WR` | Disegna quattro muri uniti da due angoli opposti, come RECTANG. |
| `WALLREJOIN` |  | Rende di nuovo un solo muro due parti di un muro. La prima mantiene il suo posto nel disegno. |
| `WALLROT` |  | Disegna quattro muri uniti come un rettangolo ruotato a un angolo qualsiasi: il primo lato, poi quanto è lontano l'altro lato. |
| `WALLSPLIT` | `WS` | Divide un muro in due in un punto o dove un altro muro lo attraversa. Le parti restano unite a meno che non si chieda un intervallo o estremità libere. Porte e finestre seguono la loro parte. |
| `WALLSPLITGAP` |  | Divide un muro lasciando un intervallo: digitare l'intervallo, indicare il muro, poi il punto. Le parti mantengono estremità libere e possono essere riunite. |
| `WALLSTRETCH` |  | Allunga con una finestra: le estremità dei muri al suo interno si spostano, i muri interamente dentro si spostano per intero, e i muri che entrano nei loro lati scorrono con essi. |
| `WALLTAN` |  | Continua un muro con un arco che parte da esso lungo il muro (disegnato come brevi muri dritti). |
| `WALLTRACE` |  | Crea muri attorno alla più piccola area chiusa di linee e muri intorno al punto su cui si fa clic. |
| `WALLUNHOLD` |  | Toglie i blocchi da un muro (e i blocchi degli altri muri su di esso). |
| `WBLOCK` | `W`, `-WBLOCK` | Scrive un blocco, alcuni oggetti o l'intero disegno in un nuovo file DWG o DXF (W) |
| `WEDGE` | `WE` | Un cuneo: due angoli e un'altezza; scende a partire dal primo angolo (3D) |
| `WHEREAMI` | `WHERE` | Dice dove si trova il cursore. |
| `WHOHAS` |  | Dice chi ha aperto un disegno. CadCraft Studio conserva un piccolo file di blocco accanto a ogni disegno aperto (Piano.dwg.cclock: chi, da quando, quale versione) e lo rimuove alla chiusura. Opzioni: Corrente (il disegno aperto), File (indicarne uno), Cartella (ogni disegno di una cartella aperto da qualche parte; questo permette anche a Studio di tenere i file di blocco in quella cartella), Percorso (digitarlo), Nome (il nome che vedono gli altri). Un blocco non aggiornato da cinque minuti è detto obsoleto. Non disponibile in un browser. |
| `WINDOW` | `WN` | Inserisce una finestra in un muro. |
| `XATTACH` | `XA` | Collega un altro DWG o DXF a questo disegno, mostrato in sola lettura (XREF li elenca e li ricarica) |
| `XCLIP` | `XC` | Ritaglia riferimenti a blocchi e disegni collegati su un rettangolo o un poligono, oppure ne rimuove il ritaglio. |
| `XLINE` | `XL` | Linea di costruzione, illimitata nei due versi: per due punti, orizzontale, verticale, con un angolo, bisettrice di un angolo, oppure a distanza da una linea. |
| `XREF` | `XR`, `-XREF` | Disegni collegati (riferimenti esterni): elenca, allega, ricarica, lega, scollega |
| `ZOOM` | `Z` | Estensione, oppure una finestra |
