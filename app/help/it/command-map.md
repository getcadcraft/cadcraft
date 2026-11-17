---
title: Mappa dei comandi: cosa digitare
summary: Ogni comando di CadCraft con i suoi nomi brevi, dalla A alla Z, ricavato dal programma stesso, e le abitudini di altri programmi di disegno che differiscono.
keywords: mappa dei comandi, comandi, alias, nomi brevi, provenienza da altri programmi, elenco comandi, cosa digitare, cancella, rifila, equivalente, differenze
from: 3bdfd3e6
---

CadCraft usa i nomi dei comandi e i nomi brevi che le persone conoscono da altri programmi di disegno: digitare `L` per una linea, `TR` per rifilare, `E` per cancellare. Quindi non c'è una tabella di corrispondenze da imparare per la maggior parte di essi: il nome che conosci è lo stesso qui. L'elenco qui sotto contiene tutti i comandi di CadCraft, ricavato dal programma stesso. {{key:Enter}} ripete l'ultimo comando; `HELP` nella riga di comando stampa lo stesso elenco.

Le poche differenze, o i comandi non ancora implementati:

- **Salva** scarica una copia nel browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio scrive il file. Vedi [Provenienza da altri programmi di disegno](topic:coming-from).
- **PLOT** crea un PDF (anche PNG e SVG), con una tabella di stili di stampa; non esiste un gestore di impostazione pagina.
- **DIMSTYLE** e **PEDIT** sono implementati; **PEDIT** non ha l'opzione Modifica vertice (la fanno i grip).
- **TABLE** non è ancora implementato; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} lo sono.
- I comandi propri di una routine (AutoLISP `C:NOME`) compaiono dopo averla caricata con {{cmd:APPLOAD}}; non sono elencati qui.

## Tutti i comandi (398)

| Comando | Nomi brevi | Cosa fa |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbita la vista 3D con il pulsante sinistro |
| `ACCESS` | `AX` | Attiva o disattiva il disegno senza vista: risultati letti dallo screen reader, un cursore da tastiera sul disegno, suoni di snap e comandi vocali. |
| `ALIASEDIT` |  | Modifica gli alias dei comandi in un unico file di testo (il formato familiare L, *LINE) |
| `ALIGN` | `AL` | Sposta e ruota gli oggetti in modo che i punti di origine cadano sui punti di destinazione (una, due o tre coppie), e li scala se lo desideri |
| `ALIGNPANEL` | `ALP` | Apre il pannello Allinea e distribuisci |
| `ALIGNTO` |  | Allinea i bordi sinistro, centro, destro, superiore, medio o inferiore degli oggetti selezionati, rispetto alla selezione, al primo o all'ultimo oggetto scelto, o a un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra gli oggetti annotativi a ogni scala, oppure solo dove la scala della viewport (o del disegno) è nel loro elenco |
| `ANNOSCALE` | `CANNOSCALE` | Imposta la scala di annotazione del disegno: testo e quote annotativi vengono ridimensionati per stampare alla stessa dimensione |
| `APPLOAD` | `AP` | Carica applicazioni: routine LISP (.lsp) e i relativi file di dialogo (.dcl); la Startup Suite (AP) |
| `ARC` | `A` | Arco: 3 punti, Inizio/Centro/Fine, Inizio/Centro/Angolo, Inizio/Centro/Lunghezza, Inizio/Fine/Angolo, Inizio/Fine/Direzione, Inizio/Fine/Raggio, Centro/Inizio/Fine, Centro/Inizio/Angolo, Centro/Inizio/Lunghezza, Continua |
| `AREA` | `AA` | Area e perimetro per punti o di un oggetto; Aggiungi e Sottrai mantengono un totale parziale (AA) |
| `ARRAY` | `AR` | Copie in righe e colonne, oppure intorno a un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Imposta se i comandi ARRAY creano serie modificabili (1) o semplici copie (0) |
| `ARRAYCLOSE` |  | Termina la modifica degli oggetti sorgente di una serie |
| `ARRAYEDIT` |  | Modifica una serie creata con l'opzione Associativa: numeri, spaziatura, oggetti sorgente, un singolo elemento |
| `ARRAYPATH` |  | Copie di oggetti lungo una linea, un arco, una polilinea o altra curva |
| `ARRAYPOLAR` |  | Copie intorno a un punto centrale |
| `ARRAYRECT` |  | Copie in righe e colonne |
| `ASBUILT` | `ASB` | ASBUILT legge i punti come costruito misurati da una squadra (CSV / TXT, come scrive EXPORTPOINTS) e li confronta con i punti del disegno: entro o fuori tolleranza, non misurati, extra. Li contrassegna sul layer AS-BUILT e scarica un rapporto CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definisce un attributo (un'etichetta per cui un blocco chiede un valore) da inserire in un blocco (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Modifica sulla riga di comando i valori degli attributi di un riferimento a blocco, uno dopo l'altro (Invio mantiene un valore) |
| `ATTSYNC` |  | Allinea i riferimenti di un blocco alle sue definizioni di attributo: quelli nuovi vengono aggiunti con i valori predefiniti, quelli rimossi eliminati, posizioni e testi reimpostati; i valori sono mantenuti |
| `AUDIT` |  | Controlla il disegno aperto per individuare danni: numeri non finiti, oggetti senza dimensione, layer, blocchi, stili e tipi di linea mancanti, blocchi che contengono se stessi, id condivisi, quote e tratteggi danneggiati. Elenca ciò che trova per tipo e chiede prima di correggere; la correzione è un unico passo di annulla. |
| `AUNITS` | `ANGUNITS` | Come vengono mostrati e digitati gli angoli: gradi decimali, gradi-primi-secondi o direzioni come N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Completamento automatico del disegno attivato o disattivato, oppure elenca ora i suggerimenti dei modelli del disegno. |
| `AUTOCONSTRAIN` |  | Aggiunge vincoli di coincidenza, orizzontali e verticali dove la geometria è già vicina |
| `AUTODIM` | `ADIM` | Quotatura per regole: dimensione complessiva, catene lungo i lati, aperture, diametri dei fori e spaziatura della griglia, senza ripetere ciò che è già quotato. |
| `AUTOSHEET` | `ASH` | Dispone le tavole da sola: sceglie carta e scale standard e colloca ogni vista con una didascalia e un cartiglio. |
| `BATTMAN` |  | Gestore degli attributi dei blocchi: ordine, etichette, richieste, valori predefiniti e modalità degli attributi di un blocco, poi aggiornamento dei suoi riferimenti |
| `BCLOSE` |  | Chiude l'editor di blocchi: salva il blocco o scarta le modifiche |
| `BCONVERT` |  | BCONVERT trova geometrie che si ripetono e le trasforma in riferimenti a blocco. Seleziona gli oggetti che si ripetono: ogni altro insieme di oggetti nello spazio aperto con la stessa geometria, spostato e ruotato di qualsiasi angolo, viene trovato e, con Specchiato o Scalato attivi, anche le immagini speculari e le copie a un'altra dimensione. Assegna un nome al nuovo blocco e un punto base; la selezione e ogni copia diventano riferimenti ad esso, ciascuno con la propria rotazione e scala. Oppure scegli Blocco e indica un blocco esistente per trovare copie sciolte dei suoi oggetti. Una copia deve avere lo stesso layer, colore, tipo di linea e spessore di linea, a meno che Proprietà non sia impostato su Ignora. Gli oggetti su layer bloccati non vengono toccati. Un solo passo di annulla. |
| `BEDIT` | `BE` | Editor di blocchi: modifica oggetti e attributi di un blocco; BCLOSE salva (BE) |
| `BLEND` |  | BLEND: una spline tra le estremità di due curve aperte, scelte vicino alle estremità per unirle. CONtinuità: Tangente segue entrambe le direzioni, Liscia segue anche come si curvano. |
| `BLOCK` | `B`, `BMAKE` | Crea un blocco da oggetti (diventano un unico riferimento) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: ogni riferimento a un blocco diventa un riferimento a un altro, nello stesso punto e con la stessa scala e rotazione. I valori degli attributi presenti in entrambi i blocchi vengono mantenuti. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra il pannello Blocchi con il cursore nel suo filtro. Il pannello mostra un'immagine di ogni blocco (prima quelli inseriti più di recente), come elenco o griglia; fai clic su un'immagine o trascinala nel disegno per inserire il blocco con INSERT. In Librerie, aggiungi un file DWG o DXF tuo: i suoi blocchi sono elencati con le immagini e vengono copiati in questo disegno quando ne inserisci uno. In CadCraft Studio si può aggiungere anche una cartella di disegni, e file e cartelle vengono ricordati. |
| `BOMEDIT` | `BOMCOLUMNS` | Colonne, raggruppamento, ordinamento, titolo, totali e note di una tabella distinta base |
| `BOMEXPORT` |  | Salva una tabella distinta base come file .csv |
| `BOMTABLE` | `BOM` | Una tabella distinta base dinamica di una zona, o dell'intero disegno |
| `BOMUPDATE` |  | Aggiorna ora tutte le tabelle distinta base, anche quelle bloccate |
| `BOMZONE` | `BZONE` | Un'area con nome del disegno per una distinta base: due angoli, un poligono o il contorno di un oggetto chiuso |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): indica un punto dentro un'area chiusa e ottieni una polilinea chiusa intorno ad essa. Gli archi restano archi. Isole contorna anche le aree al suo interno. |
| `BOX` |  | Un parallelepipedo: due angoli e un'altezza (3D) |
| `BPARAMETER` | `BPARAM` | Non ancora implementato: aggiunta di un parametro (come Visibilità) a un blocco. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri di blocco: parametri con nome e formule, e più parametri di visibilità in un blocco. Funziona nell'editor di blocchi (assegna gli oggetti selezionati a uno stato) e su un riferimento selezionato (con i suoi valori e stati). |
| `BREAK` | `BR` | Spezza una linea, un arco, un cerchio o una polilinea tra due punti (BR) |
| `BREAKATPOINT` |  | Divide in due una linea, un arco o una polilinea in un punto |
| `BREAKLINE` |  | Disegna una linea con un simbolo di interruzione; dimensione e prolungamento oltre le estremità sono ricordati. |
| `BREPLACE` |  | BREPLACE sostituisce un blocco con un altro. Selezionati: indica i riferimenti a blocco e il blocco da usare al loro posto. Tutti: indica un blocco e la sua sostituzione, e ogni riferimento in ogni spazio e dentro altri blocchi cambia. Un riferimento mantiene posto, scala, rotazione e layer, e i valori degli attributi presenti in entrambi i blocchi; i valori per cui il nuovo blocco non ha posto vengono eliminati e segnalati. |
| `BSEARCH` |  | BSEARCH trova blocchi. Nome: parte di un nome di blocco, o uno schema con * e ?. Attributo: un valore (o TAG=valore) contenuto negli attributi di un riferimento. Geometria: seleziona oggetti o un riferimento a blocco, e vengono elencati i blocchi la cui forma è simile almeno all'85%, il migliore per primo; dimensione, rotazione e specchiatura non contano. I riferimenti trovati nello spazio aperto vengono selezionati, pronti per il comando successivo. |
| `BURST` |  | Esplode i riferimenti a blocco e mantiene ciò che dicono i loro attributi: ogni valore diventa testo sul layer dell'attributo. |
| `BVHIDE` | `BVH` | Nell'editor di blocchi: nasconde gli oggetti nello stato di visibilità corrente. |
| `BVSHOW` | `BVSH` | Nell'editor di blocchi: mostra gli oggetti che lo stato di visibilità corrente nasconde (appaiono sbiaditi per poterli scegliere). |
| `BVSTATE` | `BVS` | Nell'editor di blocchi, su un blocco con stati di visibilità: passa a uno stato, oppure aggiungi, rinomina o elimina uno stato. |
| `CAL` |  | Calcola una lunghezza o un numero: + − * / e parentesi, come li digiti ovunque |
| `CENTERLINE` | `CL` | Linea di mezzeria tra due linee: a metà strada tra di esse, o lungo la bisettrice quando si incontrano (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Segno di centro: una croce al centro di un cerchio o arco, con linee di centro che si prolungano appena oltre (CM) |
| `CHAMFER` | `CHA` | Smussa l'angolo tra due linee (D due distanze, A lunghezza e angolo, P ogni angolo di una polilinea) |
| `CHSPACE` |  | CHSPACE: sposta oggetti tra un foglio e il modello attraverso una viewport. Vengono scalati e ruotati in modo da apparire uguali dall'altro lato. Su un foglio vanno al modello; mentre lavori attraverso una viewport (MSPACE) tornano sul foglio. |
| `CIRCLE` | `C` | Centro e raggio, diametro, 2 o 3 punti |
| `CLASS` |  | Mette gli oggetti selezionati in una classe, oppure, senza selezione, imposta la classe attiva (? le elenca) |
| `CLASSES` | `CLS` | Il pannello Classi: le classi raggruppano oggetti su più layer; mostrale, nascondile e definisci il loro stile, e sovrascrivile per viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Aggancia o rendi mobile la riga di comando, rendila su una sola riga, imposta le righe della cronologia o apri la cronologia (F2) |
| `COMPARESETTINGS` | `CMPSET` | Confronta stili di quota, stili di testo, layer, tavole o unità: due in questo disegno, o questo disegno con un altro aperto, e copia un valore da una parte all'altra. |
| `CONSTRAINTBAR` | `CBAR` | Mostra o nasconde le barre dei vincoli (Mostra tutto / Nascondi tutto, oppure per oggetto) |
| `COPY` | `CO`, `CP` | Copia oggetti, tante volte quante fai clic |
| `COPYBASE` |  | Copia oggetti negli Appunti con un punto base che scegli |
| `COPYCLIP` |  | Copia oggetti negli Appunti (Ctrl+C); PASTECLIP li incolla |
| `COUNT` | `BCOUNT` | Conta riferimenti a blocco: scegline uno per selezionare e contare ogni riferimento del suo blocco |
| `COUNTTABLE` |  | Inserisce una tabella con i conteggi dei blocchi |
| `CREDITS` |  | Inserisce i crediti della Libreria nel disegno come tabella. Eseguilo di nuovo per aggiornare la tabella con gli elementi presenti ora nel disegno. |
| `CURSORSIZE` |  | Dimensione del mirino: 100 lo porta da un bordo all'altro del disegno (Impostazioni › Cursore › Schermo intero) |
| `CUTCLIP` |  | Taglia oggetti negli Appunti (Ctrl+X): copia, poi cancella |
| `CYLINDER` | `CYL` | Un cilindro: centro, raggio e altezza (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Elenca blocchi, i loro attributi e le proprietà degli oggetti come tabella nel disegno o in un file CSV |
| `DATALINK` | `DL` | Una tabella da un file CSV che ricorda il file, così può essere letta di nuovo |
| `DATALINKUPDATE` | `DLU` | Rilegge il file di un collegamento dati e riempie di nuovo le sue tabelle |
| `DCALIGNED` | `DCALI` | Vincolo quotato: distanza reale tra punti, un punto e una linea, o due linee |
| `DCANGULAR` | `DCANG` | Vincolo quotato: angolo tra due linee, o di un arco |
| `DCCONVERT` |  | Trasforma le quote disegnate su geometrie vincolabili in vincoli quotati |
| `DCDIAMETER` | `DCDIA` | Vincolo quotato: diametro di un cerchio o arco |
| `DCDISPLAY` |  | Mostra o nasconde i vincoli quotati nel disegno |
| `DCHORIZONTAL` | `DCHOR` | Vincolo quotato: distanza orizzontale |
| `DCLINEAR` | `DCLIN` | Vincolo quotato: distanza orizzontale o verticale, da dove lo posizioni |
| `DCRADIUS` | `DCRAD` | Vincolo quotato: raggio di un cerchio o arco |
| `DCVERTICAL` | `DCVER` | Vincolo quotato: distanza verticale |
| `DELBLOCKS` |  | Elimina blocchi: ogni riferimento (anche quelli annidati, su ogni foglio) e le definizioni |
| `DELCONSTRAINT` | `DELCON` | Rimuove ogni vincolo (geometrico e quotato) dagli oggetti selezionati |
| `DELOPENING` |  | Toglie una porta o una finestra da un muro. |
| `DESCRIBE` | `DESC` | Dice cosa contiene il disegno: quanti oggetti, di che tipo, quanto grande, cosa è selezionato. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Cancella la selezione (Esc) |
| `DETAILS` | `DET` | I dettagli costruttivi della tua azienda, trovati per ciò che stai disegnando: trova, aggiungi un blocco, elenca, rimuovi, attiva o disattiva le proposte. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Disegna un diagramma da testo: un diagramma di flusso Mermaid, un diagramma dei componenti PlantUML, D2, un elenco da-a o XML draw.io, come blocchi e connettori modificabili |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distanza reale tra due punti |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angolo tra due linee, di un arco, o per tre punti |
| `DIMARC` | `DAR` | Quota di lunghezza d'arco: la distanza lungo un arco, con il simbolo dell'arco (DAR) |
| `DIMASZ` |  | Impostazione quota: dimensione freccia |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Quote impilate da una linea di base |
| `DIMBREAK` | `DBREAK` | Interrompe le linee di quota e di riferimento dove incrociano altri oggetti (Automatico), tra due punti (Manuale), oppure rimuove le interruzioni |
| `DIMCONSTRAINT` | `DCON` | Vincoli quotati: lineari, allineati, angolari, raggio, diametro, converti |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una catena di quote, ciascuna dalla fine della precedente |
| `DIMDEC` |  | Impostazione quota: cifre decimali |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diametro di un arco o cerchio |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libera le quote dagli oggetti a cui sono collegate (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambia il testo della quota (Home, Nuovo testo, Ruota) o inclina le linee di riferimento (Obliquo) |
| `DIMEXE` |  | Impostazione quota: prolungamento oltre la linea di quota |
| `DIMEXO` |  | Impostazione quota: distanza dall'origine |
| `DIMGAP` |  | Impostazione quota: spazio intorno al testo |
| `DIMINSPECT` |  | Quota di ispezione: un riquadro intorno al valore con un'etichetta e la frequenza di controllo del pezzo |
| `DIMJOGGED` | `DJO`, `JOG` | Quota del raggio spezzato: un raggio disegnato da un punto più vicino quando il centro è lontano (DJO) |
| `DIMJOGLINE` | `DJL` | Aggiunge un simbolo di interruzione a una linea di quota lineare o allineata, per indicare che la distanza non è disegnata in scala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distanza orizzontale o verticale (R per qualsiasi angolo) |
| `DIMLUNIT` |  | Impostazione quota: formato della lunghezza (1 scientifico, 2 decimale, 3 ingegneristico, 4 architettonico, 5 frazionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Quota di ordinata: la distanza X o Y di un punto dall'origine UCS, su una linea di richiamo (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sovrascrive le variabili di quota sulle quote selezionate senza cambiarne lo stile; Cancella riporta lo stile (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raggio di un arco o cerchio |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Collega i punti di una quota a oggetti, così segue e misura di nuovo quando si spostano (DRE) |
| `DIMSCALE` |  | Impostazione quota: scala complessiva (dimensioni × questo) |
| `DIMSPACE` |  | Spaziatura uguale tra quote parallele, misurata da una quota di base (0 le allinea, Automatico è due volte l'altezza del testo) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crea, modifica, imposta come corrente, elimina, applica e confronta stili di quota con nome (la finestra; -DIMSTYLE nella riga di comando) |
| `DIMTEDIT` | `DIMTED` | Sposta il testo della quota a sinistra, a destra o al centro della linea di quota, oppure lo ruota |
| `DIMTEXTUNIT` | `DTU` | Testo della quota in mm, cm, m o km, oppure nelle unità del disegno: le quote selezionate, altrimenti quelle nuove (DTU) |
| `DIMTXT` |  | Impostazione quota: altezza del testo |
| `DIST` | `DI` | Distanza e angolo tra due punti |
| `DISTRIBUTE` |  | Spazia gli oggetti selezionati in modo uniforme, da lato a lato o dall'alto in basso: passi uguali tra i centri, oppure spazi uguali; i due esterni restano |
| `DIVIDE` | `DIV` | DIVIDE (DIV): segni che dividono una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse in parti uguali. Punti, oppure con Blocco un blocco a ogni segno. |
| `DOCUMENTS` | `DOCS` | Apre il pannello Documenti: controlla i disegni in uscita e in entrata, le revisioni, gli stati di rilascio e l'approvazione per una cartella di progetto |
| `DOOR` | `DR` | Inserisce una porta in un muro. Il lato su cui fai clic è quello verso cui si apre. |
| `DRAWORDER` |  | Cambia l'ordine di disegno: porta gli oggetti in primo piano, mandali in fondo, oppure mettili sopra o sotto altri oggetti. |
| `DUPLICATE` | `DUP` | Una copia che segue il puntatore: fai clic per posarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Le proprietà del disegno: titolo, autore e il resto, e le tue coppie nome-valore |
| `DXFOUT` |  | Scarica il disegno come DXF R12 (Salva mantiene il proprio formato) |
| `EATTEDIT` | `DDATTE` | Modifica gli attributi di un riferimento a blocco: valori, testo e proprietà, un attributo alla volta |
| `ELLIPSE` | `EL` | Estremità dell'asse e l'altro semiasse |
| `ERASE` | `E`, `DELETE` | Rimuove oggetti |
| `EXPLODE` | `X` | Scompone polilinee, blocchi e quote nelle loro parti |
| `EXPORT` | `EXP` | Salva una copia del disegno in un tipo di file che un componente aggiuntivo scrive |
| `EXPORT3D` | `3DEXPORT` | Esporta il modello 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Scrive punti, e i punti di inserimento dei blocchi con un attributo come descrizione, in un file CSV o TXT (PNEZD, PENZD o XYZ) per programmi BIM e di rilievo |
| `EXTEND` | `EX` | Allunga oggetti fino a incontrarne altri: fai clic vicino a un'estremità, trascina attraverso più oggetti, oppure Shift+clic per rifilare |
| `EXTRIM` |  | EXTRIM: scegli un bordo di taglio, poi un lato. Tutto ciò che attraversa il bordo viene rifilato da quel lato. I pezzi che verrebbero eliminati si vedono mentre muovi il puntatore. |
| `EXTRUDE` | `EXT` | Estrude oggetti 2D chiusi in solidi (3D) |
| `FIELD` |  | Inserisce un campo in un testo, in una cella di tabella o in un attributo: una data, il nome del file, il numero del foglio, una proprietà del disegno, l'area o la lunghezza di un oggetto, oppure una formula |
| `FILLET` | `F` | Arrotonda o squadra l'angolo tra due oggetti (R raggio, P ogni angolo di una polilinea, M più angoli) |
| `FIND` |  | Trova e sostituisce parole nel testo, nei valori degli attributi e nel testo delle quote |
| `FLATTEN` |  | Imposta a 0 l'altezza (Z) e lo spessore degli oggetti selezionati, anche nei blocchi che usano. |
| `FLOOR` |  | Scegli il piano su cui disegnare, aggiungine uno, oppure sposta o copia la selezione su di esso. |
| `FLOORLAYERS` |  | Trasforma i piani in layer chiamati Piano-Layer, per un file destinato a qualcuno senza piani. |
| `FLOORS` | `FLR` | Apre il pannello Piani: sovrapponi piani in un unico spazio modello. |
| `GCCOINCIDENT` |  | Vincolo: due punti coincidono, oppure un punto resta su un oggetto |
| `GCCOLLINEAR` |  | Vincolo: due linee restano sulla stessa retta |
| `GCCONCENTRIC` |  | Vincolo: due cerchi o archi condividono un centro |
| `GCEQUAL` |  | Vincolo: due linee restano della stessa lunghezza, oppure due cerchi o archi dello stesso raggio |
| `GCFIX` |  | Vincolo: un punto o un intero oggetto resta dov'è |
| `GCHORIZONTAL` |  | Vincolo: una linea (o due punti) resta orizzontale |
| `GCPARALLEL` |  | Vincolo: due linee restano parallele |
| `GCPERPENDICULAR` |  | Vincolo: due linee restano ad angolo retto |
| `GCSYMMETRIC` |  | Vincolo: due punti, linee o cerchi si specchiano l'uno rispetto all'altro attraverso una linea |
| `GCTANGENT` |  | Vincolo: una linea e un cerchio o arco (o due di essi) restano tangenti |
| `GCVERTICAL` |  | Vincolo: una linea (o due punti) resta verticale |
| `GDSIN` | `GDS` | Visualizza un layout IC (un file stream GDSII): ogni layer e tipo di dato come layer del disegno, piatto, in unità utente; solo per visualizzare e misurare (prova di laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Vincoli geometrici: orizzontale, verticale, parallelo, tangente, coincidente… |
| `GLBOUT` |  | Esporta il modello 3D come GLB (glTF) |
| `GRADIENT` | `GD` | Riempie un'area con una sfumatura di uno o due colori |
| `GRIDMOVE` | `GM` | Sposta una linea di griglia e porta con sé ciò che vi è appeso: i muri si allungano, pilastri, cerchietti ed etichette si spostano, le quote seguono. |
| `GROUP` | `G` | GROUP (G): dà agli oggetti selezionati un nome condiviso. Un clic su uno di essi li seleziona tutti. Invio sul nome crea un gruppo senza nome. |
| `GROUPEDIT` |  | GROUPEDIT: modifica un gruppo. Scegli uno dei suoi oggetti o indica il Nome, poi Aggiungi o Rimuovi oggetti, RINOMINA, cambia la Descrizione, oppure indica se un clic lo seleziona per intero. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Riempie un'area con un riempimento pieno o un motivo: fai clic al suo interno, oppure seleziona oggetti chiusi (H) |
| `HATCHEDIT` | `HE` | Modifica un tratteggio: motivo, scala, angolo, origine e il suo collegamento a un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Crea di nuovo le polilinee di contorno da un tratteggio, collegate o no |
| `HATCHTOBACK` |  | Manda ogni tratteggio dietro a tutto il resto. |
| `HELP` | `?` | Questo elenco |
| `HIDEOBJECTS` |  | Nasconde gli oggetti selezionati fino a UNISOLATEOBJECTS. Non viene salvato con il disegno. |
| `HISTORY` | `HIST` | HISTORY (HIST): le versioni di questo disegno — copie conservate su questo computer quando Studio lo salva, e le versioni del cloud — da aprire, ripristinare e confrontare con le modifiche mostrate a colori. |
| `ID` |  | Coordinate di un punto |
| `IMAGE` | `IM` | Indica a CadCraft i file immagine usati da un disegno (un DWG memorizza solo dove si trovano). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Inserisce un'immagine (PNG o JPEG) da un file. |
| `IMAGECLIP` | `ICL` | Ritaglia un'immagine a un rettangolo o a un poligono, oppure ne rimuove il ritaglio. |
| `IMPORT` | `IMP` | Importa in questo disegno un file di un tipo che un componente aggiuntivo legge |
| `INSERT` | `I`, `DDINSERT` | Inserisce un blocco (S scala, R ruota); F da un file DWG/DXF, L dalla libreria |
| `INTERSECT` | `IN` | Mantiene solo ciò che i solidi hanno in comune (3D), oppure l'area in comune tra regioni 2D |
| `ISODRAFT` |  | ISODRAFT: disegno isometrico attivato o disattivato, oppure direttamente sul piano Sinistro, Superiore o Destro. Quando è attivo, Ortho e il tracciamento polare seguono i due assi del piano, la griglia è disegnata isometrica e ELLISSE ha Isocerchio. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra solo gli oggetti selezionati; tutto il resto in questo spazio è nascosto fino a UNISOLATEOBJECTS. Non viene salvato con il disegno. |
| `ISOPLANE` |  | ISOPLANE: scegli il piano isometrico su cui disegnare: Sinistro, Superiore o Destro. Invio passa al successivo, come fa F5 quando il disegno isometrico è attivo. |
| `JOIN` | `J` | Unisce linee, archi e polilinee che si incontrano punta a punta in un'unica polilinea; linee sulla stessa retta in un'unica linea (J) |
| `LASER` | `LASERCUT` | Apre il pannello Laser: invia i layer a una macchina per il taglio o l'incisione laser (G-code GRBL) |
| `LASSOMODE` |  | Premi e trascina disegna un lazo (1) o un rettangolo (0) |
| `LAYDEL` |  | Elimina un layer e ogni oggetto su di esso (nel modello, nei fogli e nei blocchi) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Apre il gestore dei layer: ogni layer in un'unica tabella |
| `LAYERPANEL` |  | Mostra il pannello dei layer |
| `LAYFRZ` |  | Congela il layer di ogni oggetto che scegli |
| `LAYGROUP` | `LG` | Raggruppa i layer in cartelle nel pannello Layer. |
| `LAYISO` |  | Isola i layer degli oggetti selezionati (tutti gli altri layer spenti) |
| `LAYLOCKFADE` |  | Imposta quanto sbiadiscono gli oggetti sui layer bloccati, e se un clic può selezionarli. |
| `LAYMCUR` |  | Rende corrente il layer dell'oggetto che scegli |
| `LAYMRG` |  | Unisce layer: i loro oggetti passano a un layer di destinazione, e i layer uniti vengono eliminati |
| `LAYOFF` |  | Spegne il layer di ogni oggetto che scegli |
| `LAYON` |  | Accende tutti i layer |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Un nuovo foglio con un cartiglio e una viewport |
| `LAYTHW` |  | Scongela tutti i layer |
| `LAYUNISO` |  | Riaccende i layer che LAYISO aveva spento |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte il testo digitato con i vecchi font vietnamiti (font TCVN3 / ABC come .VnTime, e font VNI come VNI-Times) in Unicode. Questo testo è già mostrato come si legge; questo comando lo riscrive in modo definitivo, con un conteggio e un solo passo di annulla. |
| `LENGTHEN` | `LEN` | Allunga o accorcia linee, archi e polilinee: di una quantità, di una percentuale, a un totale, o trascinando (LEN) |
| `LIBRARY` | `LIB` | Il pannello della libreria: inserisci elementi, controlla gli aggiornamenti, crediti |
| `LIMITS` |  | Imposta i limiti del disegno: ON, OFF, oppure gli angoli in basso a sinistra e in alto a destra. Con i limiti ON, i punti fuori vengono rifiutati |
| `LINE` | `L` | Segmenti rettilinei, ciascuno un oggetto a sé |
| `LINETYPE` | `LT`, `CELTYPE` | Il tipo di linea che ricevono i nuovi oggetti (per layer, per blocco, o uno con nome) |
| `LINKVIEWS` | `SYNCVIEWS` | Sposta e ingrandisci insieme tutti i riquadri (schermo diviso), per confrontare due disegni o revisioni |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) apre l'editor LISP: una finestra per scrivere, caricare e provare una routine. Carica nel disegno legge ogni forma, come fa APPLOAD con il file, e ne crea i comandi. Esegui selezione valuta le forme selezionate, o quella in cui si trova il cursore. La console mostra ciò che la routine ha stampato e ogni errore con la sua riga. La parentesi corrispondente è evidenziata mentre digiti, e Invio rientra la nuova riga. Nuovo, Apri e Salva lavorano su un file .lsp. Gli elenchi accanto al testo mostrano le funzioni che la routine definisce, quelle che chiama e che questo LISP non ha ancora, e tutte quelle che ha. La finestra non blocca il disegno, quindi una routine può chiedere dei punti; Stop o Esc termina una routine in esecuzione. |
| `LIST` | `LI`, `LS` | Descrive gli oggetti nella cronologia |
| `LTSCALE` | `LTS` | La scala dei tipi di linea del disegno (ogni tratto e ogni spazio viene moltiplicato per essa) |
| `LWDISPLAY` | `LWT` | Mostra o nasconde gli spessori di linea a schermo (il pulsante LWT nella barra di stato) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Lo spessore di linea che ricevono i nuovi oggetti (per layer, per blocco, predefinito, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Layer cartografici sotto lo spazio modello: il sistema di coordinate del disegno, riquadri, WMS, WMTS, ArcGIS, immagini |
| `MASSPROP` |  | MASSPROP: proprietà di sezione di regioni e oggetti chiusi: area, perimetro, baricentro, momenti e prodotto d'inerzia, raggi di girazione e assi principali. Esatto per linee e archi. Può scrivere il rapporto in un file di testo. |
| `MATCHPROP` | `MA`, `PAINTER` | Copia proprietà: copia il layer, il colore e altro di un oggetto su altri (MA) |
| `MEASURE` | `ME` | MEASURE (ME): un segno ogni lunghezza indicata lungo una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse, a partire dall'estremità più vicina al punto scelto. Punti, oppure con Blocco un blocco a ogni segno. |
| `MEASUREGEOM` | `MEA` | Misura una distanza, un raggio, un angolo o un'area (MEA) |
| `MINSERT` |  | MINSERT: inserisce un blocco in righe e colonne in un colpo solo. Ciascuno è un riferimento a sé, quindi puoi spostare o cancellare ognuno. |
| `MIRROR` | `MI` | Specchia oggetti rispetto a una linea |
| `MLEADER` | `MLD`, `MLEAD` | Multiriferimento: una freccia, una linea di richiamo e una nota, come un unico oggetto (MLD) |
| `MLEADERALIGN` | `MLA` | Allinea più multiriferimenti con uno di essi lungo una direzione, a spaziatura uguale, oppure distribuiti tra due punti (MLA) |
| `MLEADERCOLLECT` | `MLC` | Raccoglie più multiriferimenti in uno: i loro blocchi in riga o colonna, oppure le loro note una sotto l'altra (MLC) |
| `MLEADEREDIT` | `MLE` | Aggiunge linee di richiamo a un multiriferimento o le rimuove; cambia il contenuto tra testo e blocco (MLE) |
| `MLINE` |  | Disegna linee parallele insieme, unite agli angoli. |
| `MOVE` | `M` | Sposta oggetti con un punto base e un secondo punto |
| `MSPACE` | `MS` | Lavora sul modello attraverso una viewport del foglio aperto (o doppio clic dentro la viewport). |
| `MTEXT` | `MT`, `T` | Testo a paragrafo: trascina la larghezza, poi digita sul posto; Invio inizia un nuovo paragrafo (T) |
| `MVIEW` | `MV` | Una viewport sul modello, su un layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Viste con nome: salva la vista a schermo (o una finestra) con un nome e tornaci (NV) |
| `NCOPY` |  | Copia oggetti da un riferimento a blocco o da un disegno collegato nel disegno, senza scomporlo. |
| `NEARBY` |  | Dice cosa si trova vicino al cursore, il più vicino per primo, con la distanza e il lato. |
| `NEW` |  | Avvia un nuovo disegno |
| `OBJECTSCALE` | `OBJSCALE` | Scale di annotazione del testo e delle quote annotativi: aggiungi una scala, eliminane una, aggiungi la scala corrente, oppure elencale (ogni viewport le mostra alla dimensione per la propria scala) |
| `OBJOUT` |  | Esporta il modello 3D come OBJ |
| `OFFSET` | `O` | Copie parallele a una distanza |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: come OFFSET chiude gli spazi agli angoli esterni di una polilinea. 0 prolunga i segmenti, 1 aggiunge un arco, 2 aggiunge un taglio dritto. Mantenuto per questa sessione. |
| `OLELIST` | `OLES` | Elenca gli oggetti OLE che un disegno contiene e mette una copia dell'immagine di uno dove scegli |
| `OPEN` |  | Apre un DWG o DXF da questo computer |
| `OPENIN3D` |  | Apre questo disegno nell'app di modellazione 3D, in una nuova scheda (non viene caricato nulla) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Apre il menu snap a oggetto: scegli quali snap sono attivi. Anche clic destro su Snap nella barra di stato. |
| `OVERKILL` |  | Elimina oggetti duplicati e unisce linee e archi sovrapposti o punta a punta, entro una tolleranza. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Il pannello Parametri: parametri utente e vincoli quotati in un'unica tabella |
| `PARTSLIST` | `PLIST` | Una tabella elenco parti di ogni parte standard e profilo in acciaio posizionato dalla Libreria |
| `PASTEAREA` | `PAREA` | Incolla un'area copiata in MarkupCraft (Copia area) alla sua dimensione reale, come immagine. |
| `PASTEBLOCK` |  | PASTEBLOCK: incolla quanto hai copiato come un unico blocco. Il blocco riceve un nome proprio; RINOMINA gliene dà uno tuo. |
| `PASTECLIP` |  | Incolla gli Appunti: segue il cursore, fai clic dove deve andare (Ctrl+V) |
| `PASTEORIG` |  | Incolla gli Appunti alle coordinate da cui sono stati copiati (Ctrl+Shift+V) |
| `PDF` |  | Indica a CadCraft i file PDF usati dai sottofondi del disegno |
| `PDFADJUST` |  | Sbiadisce, contrasta, rende monocromatico o spegne un sottofondo PDF |
| `PDFATTACH` | `PDFATT` | Allega una pagina PDF come sottofondo (PDFATTACH) |
| `PDFCLIP` |  | Ritaglia un sottofondo PDF a un rettangolo o a un poligono |
| `PDFIMPORT` | `PDFIM` | Trasforma linee, riempimenti e testo di una pagina PDF in oggetti del disegno (PDFIMPORT) |
| `PDFLAYERS` |  | Accende o spegne i layer di un sottofondo PDF |
| `PEDIT` | `PE` | Modifica una polilinea: chiudi, apri, unisci, larghezza, curva di adattamento, curva spline, rimuovi curvatura, generazione del tipo di linea, inverti; linee, archi e spline possono essere trasformati in polilinee |
| `PHOTOSKETCH` | `PSK` | Trasforma una foto di uno schizzo a mano su carta in linee e archi a una scala, raddrizzando la prospettiva e dando a ogni colore di penna il proprio layer. |
| `PICKSTYLE` |  | PICKSTYLE: se selezionando un oggetto di un gruppo si seleziona l'intero gruppo (1, impostazione iniziale) o solo quell'oggetto (0). Mantenuto per questa sessione. |
| `PLAN` |  | Ruota la vista in modo che l'asse X dell'UCS (UCS corrente, un UCS salvato, oppure il Globale) sia orizzontale a schermo. Nulla nel disegno si sposta. |
| `PLINE` | `PL` | Una polilinea di segmenti rettilinei e ad arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Stampa in PDF: un layout, oppure il modello a una scala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabelle degli stili di stampa: imposta come stampa ogni colore (colore, nero, grigio, inchiostro, spessore di linea); mantenuto con il disegno (STYLESMANAGER) |
| `POINT` | `PO` | Oggetti punto |
| `POINTCLOUD` | `PC` | La nuvola di punti collegata: sezione, altezza, spessore, colore, dimensione, visibile, zoom, scollega |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Collega una nuvola di punti (LAS, LAZ, XYZ, PTS) sotto il disegno |
| `POLARANG` |  | Il passo del tracciamento polare in gradi (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un poligono regolare |
| `PRESSPULL` |  | Spinge o tira una faccia di un solido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Apre il pannello Proprietà (anche Ctrl+1, o doppio clic su un oggetto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Ripiega il pannello Proprietà sul bordo della finestra |
| `PSPACE` | `PS` | Esci dalla viewport in cui lavori e torna al foglio (o doppio clic fuori da essa). |
| `PUBLISH` | `-PUBLISH` | Stampa più fogli, o tutti, in un unico PDF (una pagina e un segnalibro per foglio) |
| `PURGE` | `PU` | Rimuove le definizioni di blocchi che nessuno usa |
| `QDIM` |  | Quota rapida: quota più oggetti insieme (continua, di base, sfalsata, ordinata, raggio o diametro) |
| `QPMODE` | `QP` | Proprietà rapide accanto al cursore attivate o disattivate |
| `QSELECT` | `QS` | Selezione rapida: ogni oggetto di un tipo il cui layer, colore, dimensione o nome corrisponde (QS) |
| `RASTERSNAP` |  | Attiva o disattiva lo snap alle linee dei fogli scansionati. |
| `RAY` |  | Semiretta: una linea di costruzione da un punto, illimitata in una direzione. |
| `RECOVER` |  | Apre un DXF o DWG danneggiato: salta ciò che non può essere letto invece di rifiutare il file, dice cosa è stato saltato, poi controlla e ripara il disegno come fa AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilinea chiusa da due angoli |
| `REDLINE` | `RDL` | Redline in revisione: legge un pacchetto redline di MarkupCraft, accetta o rifiuta ogni modifica, nuvola quelle accettate con un registro delle revisioni e salva il file delle risposte (RDL) |
| `REDO` |  | Ripristina ciò che è stato annullato |
| `REFCLOSE` |  | Termina la modifica di un blocco sul posto: salvalo o scarta le modifiche |
| `REFEDIT` |  | Modifica un blocco sul posto, dove si trova un suo riferimento, con il resto del disegno sbiadito; REFCLOSE lo salva |
| `REGEN` | `RE` | Ricostruisce ciò che è disegnato in questa scheda a partire dal disegno |
| `REGENALL` | `REA` | Ricostruisce ciò che è disegnato in ogni scheda, riquadro e disegno aperto |
| `REGION` | `REG` | REGION (REG): crea regioni piane da oggetti chiusi, o da linee, archi e polilinee che chiudono un ciclo punta a punta. UNION, SUBTRACT e INTERSECT poi combinano le regioni, e MASSPROP ne dà le proprietà di sezione. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra più scansioni: le posiziona in un unico riquadro con coppie di punti scelte o target, affina con ICP, esporta un unico LAS o E57 |
| `REINIT` |  | Ricarica il tuo file di alias |
| `RENAME` | `-RENAME`, `REN` | Rinomina un layer o un blocco (ogni oggetto o riferimento lo segue) |
| `REVCLOUD` | `RC` | Nuvola di revisione: arrotonda un rettangolo, un poligono, un percorso a mano libera o un oggetto (RC) |
| `REVOLVE` | `REV` | Ruota oggetti 2D chiusi attorno a un asse, in solidi (3D) |
| `ROTATE` | `RO` | Ruota oggetti attorno a un punto base |
| `SAMPLES` | `SAMPLE` | Apre uno dei disegni di esempio di CadCraft (un insieme architettonico, un as-built) per imparare |
| `SAVE` | `QSAVE` | Scarica il disegno nel suo formato (DWG o DXF) |
| `SAVEAS` |  | Scarica il disegno come DWG o DXF: scegli quale |
| `SAYSEL` |  | Dice cosa è selezionato, una frase per ciascun oggetto. |
| `SCALE` | `SC` | Scala oggetti attorno a un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Aggiungi, modifica ed elimina le scale del disegno; compaiono negli elenchi di scale di viewport e stampa e sono salvate nel file (SCALELIST) |
| `SCANALIGN` | `SCL` | Allinea un foglio scansionato a due punti: sposta, ruota e, se scegli, scala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserisce un disegno scansionato: un PNG, JPEG o TIFF (una pagina o tutte le pagine di un file multipagina), oppure una pagina PDF che è un'immagine. |
| `SCANCLEAN` | `SCC` | Rende un foglio scansionato in bianco e nero e rimuove le macchie. |
| `SCANCROP` | `SCR` | Ritaglia un foglio scansionato a una finestra. |
| `SCANDESKEW` | `SCD` | Trova l'angolo con cui sono disposte le linee lunghe di un foglio scansionato e raddrizza il foglio una volta accettato l'angolo. |
| `SCANERASE` | `SCE` | Cancella un'area di un foglio scansionato: un rettangolo, un poligono o un lazo. |
| `SCANINFO` | `SCI` | Mostra il file originale di un foglio scansionato e i passaggi fatti da allora. |
| `SCANSCALE` | `SCS` | Scala un foglio scansionato: scegli due punti su di esso e digita la distanza reale tra loro. |
| `SCANTRACE` | `SCT` | Ricalca un foglio scansionato in linee e archi su un nuovo layer, con una tolleranza che imposti. Testo e tratteggi restano come raster. |
| `SELECT` |  | Seleziona oggetti ora (per P, Precedente, nel comando successivo) |
| `SELECTALL` | `AI_SELALL` | Seleziona ogni oggetto modificabile in questa scheda (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleziona ogni oggetto simile a quelli che scegli: stesso tipo, layer e colore (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra il pannello Set di tavole: tavole di molti disegni, numerate, pubblicate come un unico PDF. |
| `SHORTCUTS` | `KEYS` | Assegna a qualsiasi comando un tasto proprio (Ctrl o Alt con una lettera, oppure un tasto funzione libero), conservato in questo browser o nell'app desktop. |
| `SHXFONTS` | `SHX` | Assegna a CadCraft font SHX da una cartella o da file, così gli stili di testo che li nominano vengono disegnati con essi (elenca, rimuovi, inverti) |
| `SKETCHFIX` | `SKF` | Disegna tratti a mano libera; ognuno diventa una linea, un cerchio, un arco, un rettangolo o una polilinea pulita, squadrata e unita alle altre. |
| `SKETCHLIVE` | `SKL` | Schizza con una penna: ogni tratto diventa una linea, un cerchio, un arco o un rettangolo precisi quando alzi la penna, agganciati al disegno, con la dimensione da digitare sopra. |
| `SPLINE` | `SPL` | Disegna una spline attraverso punti (o con un poligono di controllo), oppure trasforma una polilinea in una spline |
| `SPLINEDIT` | `SPE` | Modifica una spline: punti di adattamento, punti di controllo e pesi, apri o chiudi, inverti, oppure converti in polilinea |
| `SPLIT` |  | Divide l'area di disegno in riquadri (come VPORTS sul modello; anche da un foglio) |
| `STEELMEMBER` | `SMEMBER` | Un elemento d'acciaio in 3D da un profilo standard: due punti (una trave) oppure un punto base e un'altezza (Colonna) |
| `STLOUT` |  | Esporta il modello 3D come STL (millimetri) |
| `STRETCH` | `S` | Allunga: trascina una finestra di intersezione sulle estremità per spostare; ciò che è dentro si sposta, il resto resta (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stili di testo: il font, altezza, larghezza e inclinazione che prende il nuovo testo (la finestra; -STYLE nella riga di comando) |
| `SUBTRACT` | `SU` | Toglie solidi da altri (3D), oppure regioni 2D da regioni |
| `SWBOUT` | `SWMACRO` | Scarica una macro per SolidWorks (.swb) che ricostruisce il modello come un unico schizzo vincolato |
| `SWEEP` |  | Fa scorrere oggetti 2D chiusi lungo un percorso (linea, polilinea, arco, cerchio) in solidi (3D) |
| `TABLE` | `TB` | Crea una tabella: righe e colonne, oppure da celle di foglio di calcolo negli Appunti o da un file CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Modifica una tabella: digita in una cella, inserisci ed elimina righe e colonne, dimensioni, celle unite, allineamento |
| `TABLEEXPORT` |  | Salva ciò che mostra una tabella come file CSV |
| `TABLEPASTE` | `PASTETABLE` | Crea una tabella da celle di foglio di calcolo negli Appunti |
| `TABLESTYLE` | `TS` | Stili di tabella: altezze del testo, allineamento, margini e bordi per le righe di titolo, intestazione e dati |
| `TAGS` |  | Etichette sui riferimenti a blocco: definisci un'etichetta (tipo, valori ammessi, blocchi a cui si applica), impostala sui riferimenti selezionati, ed elencale come tabella che puoi salvare come CSV |
| `TEXT` | `DT`, `DTEXT` | Testo su una riga; Invio inizia la riga successiva |
| `TEXTEDIT` | `ED`, `DDEDIT` | Modifica il testo sul posto: scegli un testo (o doppio clic su uno) (ED) |
| `TEXTMASK` | `TMASK` | Mette una maschera di sfondo dietro i testi (lo sfondo del disegno o un colore), oppure la toglie. |
| `TEXTTOFRONT` |  | Porta tutti i testi, le quote e le linee di richiamo davanti a tutto il resto. |
| `TOOLBAR` |  | Sceglie cosa mostrano i pulsanti della barra degli strumenti: icone e testo, solo icone, oppure solo testo (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Mette la barra degli strumenti in alto, in basso, a sinistra o a destra della finestra |
| `TOOLBARROWS` |  | Sceglie quante righe usa la barra degli strumenti: a capo per adattarsi, 2, oppure 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Rende standard o compatte le barre sopra il disegno |
| `TOUCHCROSSHAIR` | `TCX` | Mirino spostato per disegnare con il dito: un dito sposta un mirino posto sopra e di lato, così il dito non copre il punto scelto. Sollevare il dito non sceglie nulla; il pulsante Clic o un tocco con un secondo dito sceglie nel mirino, e tenendo premuto Clic mentre ti muovi trascini. Una pressione lunga o il pulsante Invio è Invio. Due dita spostano e ingrandiscono. Opzioni: ON, OFF, Automatico (attivo solo dove un dito è l'unico puntatore), Distanza, Lato. |
| `TOUR` | `TUTORIAL` | Ripete il giro guidato in sei passi del primo disegno |
| `TRIM` | `TR` | Taglia oggetti fino a dove altri li attraversano: fai clic su un pezzo, trascina attraverso più pezzi, oppure Shift+clic per estendere |
| `TRIMEXTENDMODE` |  | Come iniziano RIFILA ed ESTENDI: 1 Rapido (ogni oggetto è un bordo di taglio o un confine), 0 Standard (scegli prima i bordi) |
| `TTR` |  | Un cerchio tangente a due oggetti, con un raggio che indichi (come CIRCLE T) |
| `TURNLEFT` |  | Ruota la vista di 90° a sinistra (antiorario): UCS Z -90, e la vista segue. Nulla nel disegno si sposta. |
| `TURNRIGHT` |  | Ruota la vista di 90° a destra (orario): UCS Z 90, e la vista segue. Nulla nel disegno si sposta. |
| `TURNWORLD` |  | Torna al Globale: UCS Globale, e la vista è di nuovo orizzontale. |
| `TXT2MTXT` | `T2M` | Unisce i testi su una riga in un unico testo a paragrafo, dall'alto in basso. |
| `UCS` |  | Il tuo sistema di coordinate: un'origine e un asse X (origine, angolo Z, 3punti, OGgetto, Precedente, Globale, NOme). I punti digitati, ortho, il tracciamento polare, la griglia e il nuovo testo lo seguono; la vista ruota in modo che il suo asse X sia orizzontale. Nulla nel disegno si sposta. |
| `UNDO` | `U` | Annulla l'ultimo comando |
| `UNGROUP` |  | UNGROUP: scioglie i gruppi. Seleziona oggetti dei gruppi, oppure indica un Nome. Gli oggetti restano nel disegno. |
| `UNION` | `UNI` | Unisce solidi in uno (3D), oppure regioni 2D in un'unica regione |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostra di nuovo ogni oggetto nascosto da ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Come vengono mostrate e digitate le lunghezze: decimali, piedi e pollici, frazioni (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ricalcola i campi, e scegli quando si aggiornano da soli |
| `USDOUT` |  | Esporta il modello 3D come USD (testo .usda, binario .usdc oppure un pacchetto .usdz) |
| `VIEW` | `-VIEW`, `V` | Viste 3D standard, prospettiche o parallele (3D) |
| `VIEWBASE` | `FLATSHOT` | Inserisce una vista 2D piatta dei solidi 3D (fronte, alto, lato o isometrica, linee nascoste tratteggiate) su un foglio o nel modello |
| `VIEWLABEL` | `VL` | Un titolo di vista su un foglio che mostra il nome della vista della sua viewport, e cambia con essa. |
| `VOICE` |  | Attiva o disattiva i comandi vocali. Sono riconosciuti su questo computer. |
| `VPCLIP` |  | Ritaglia una viewport di foglio a un oggetto chiuso o a un poligono disegnato; Elimina la riporta a rettangolo |
| `VPLAYER` |  | Congela o scongela i layer solo in alcune viewport (Congela, Scongela, Reimposta), e sceglie quali layer le nuove viewport iniziano congelate (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide l'area di disegno in riquadri, ciascuno con la propria vista (su un foglio: una viewport, come MVIEW) |
| `VPVIEW` |  | Imposta cosa mostra una viewport: scegli una finestra sul modello |
| `VSCURRENT` | `VS`, `SHADEMODE` | Stile visivo della vista 3D: ombreggiato, spigoli, linea nascosta, wireframe, raggi X |
| `WALL` | `WA` | Disegna muri 2D come una polilinea. Si uniscono e ospitano porte e finestre. |
| `WALLARC` | `WARC` | Disegna un arco di muri. I muri in pianta sono rettilinei, quindi l'arco è disegnato come brevi muri rettilinei (15 gradi ciascuno) che si uniscono. |
| `WALLDELSEG` |  | Elimina un tratto di muro tra due punti. Ciò che resta rimane come uno o due muri. |
| `WALLDIM` |  | Digita un nuovo valore per una quota: il muro all'estremità lontana si sposta perpendicolare a sé stesso, il muro alla prima estremità resta fermo, e i muri uniti seguono. |
| `WALLDISJOIN` |  | Scegli un muro vicino a un'estremità per non consentire le unioni a quell'estremità: l'estremità è disegnata squadrata e niente la segue. Sceglilo di nuovo per consentirle. |
| `WALLGRID` |  | Blocca un muro a una linea di griglia: lungo di essa, oppure un'estremità su di essa. Sposta la linea con GRIDMOVE e il muro la segue. |
| `WALLHOLD` |  | Allinea e blocca: un muro mantiene il suo posto rispetto a un altro muro (sulla sua linea, o alla distanza che ha). Se uno si sposta, l'altro segue. |
| `WALLHOLDDIM` |  | Blocca la distanza tra due muri paralleli. Se uno si sposta, l'altro segue per mantenerla. |
| `WALLHOLDS` |  | Elenca i blocchi dei muri. |
| `WALLJOINS` |  | Dà a ogni muro di un disegno più vecchio il suo id e memorizza le unioni tra di essi. Accade anche alla prima modifica che fai. |
| `WALLJOINSTYLE` |  | Clic su un angolo dove due muri si incontrano punta a punta per cambiare come è disegnato: a onglet, testa, squadrato. T scambia quale muro passa attraverso. |
| `WALLOFFSET` | `WO` | Sposta un muro perpendicolare a sé stesso di una distanza (i muri uniti lo seguono), oppure crea una copia a quella distanza. |
| `WALLPICK` |  | Crea muri su una linea o polilinea nel disegno, con le linee unite ad essa se dici Sì. |
| `WALLPOLY` | `WP` | Disegna muri intorno a un poligono regolare da 3 a 64 lati, come POLYGON. |
| `WALLRECT` | `WR` | Disegna quattro muri uniti da due angoli opposti, come RECTANG. |
| `WALLREJOIN` |  | Rende di nuovo un unico muro due parti di un muro. La prima mantiene il suo posto nel disegno. |
| `WALLROT` |  | Disegna quattro muri uniti come un rettangolo ruotato a un angolo qualsiasi: il primo lato, poi quanto è lontano. |
| `WALLSPLIT` | `WS` | Divide un muro in due in un punto o dove un altro muro lo attraversa. Le parti restano unite a meno che tu non chieda un intervallo o estremità libere. Porte e finestre seguono la loro parte. |
| `WALLSPLITGAP` |  | Divide un muro lasciando un intervallo: digita l'intervallo, scegli il muro, poi il punto. Le parti hanno estremità libere e possono essere riunite. |
| `WALLSTRETCH` |  | Allunga con una finestra: le estremità dei muri al suo interno si spostano, i muri interamente all'interno si spostano per intero, e i muri che sbattono sui suoi lati scorrono con essi. |
| `WALLTAN` |  | Continua un muro con un arco che si stacca da esso lungo il muro (disegnato come brevi muri rettilinei). |
| `WALLTRACE` |  | Crea muri intorno alla più piccola area chiusa di linee e muri attorno al punto su cui fai clic. |
| `WALLUNHOLD` |  | Toglie i blocchi da un muro (e i blocchi di altri muri verso di esso). |
| `WBLOCK` | `W`, `-WBLOCK` | Scrive un blocco, alcuni oggetti o l'intero disegno in un nuovo file DWG o DXF (W) |
| `WEDGE` | `WE` | Un cuneo: due angoli e un'altezza; scende a partire dal primo angolo (3D) |
| `WHEREAMI` | `WHERE` | Dice dove si trova il cursore. |
| `WHOHAS` |  | Dice chi ha aperto un disegno. CadCraft Studio mantiene un piccolo file di blocco accanto a ogni disegno aperto (Plan.dwg.cclock: chi, da quando, quale versione) e lo rimuove alla chiusura. Opzioni: Corrente (il disegno aperto), File (sceglierne uno), Cartella (ogni disegno in una cartella aperto da qualche parte; questo permette anche a Studio di tenere i file di blocco in quella cartella), Percorso (digitalo), Nome (il nome che vedono gli altri). Un blocco non aggiornato per cinque minuti è considerato obsoleto. Non disponibile nel browser. |
| `WINDOW` | `WN` | Inserisce una finestra in un muro. |
| `XATTACH` | `XA` | Collega un altro DWG o DXF a questo disegno, mostrato in sola lettura (XREF li elenca e li ricarica) |
| `XCLIP` | `XC` | Ritaglia riferimenti a blocco e disegni collegati a un rettangolo o a un poligono, oppure ne rimuove il ritaglio. |
| `XLINE` | `XL` | Linea di costruzione, illimitata in entrambe le direzioni: per due punti, orizzontale, verticale, con un angolo, bisettrice di un angolo, oppure a distanza da una linea. |
| `XREF` | `XR`, `-XREF` | Disegni collegati (riferimenti esterni): elenca, collega, ricarica, lega, scollega |
| `ZOOM` | `Z` | Estensione, oppure una finestra |
