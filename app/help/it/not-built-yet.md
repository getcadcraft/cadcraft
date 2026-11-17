---
title: Non ancora implementato
summary: Ciò che questa versione dell'app di disegno CadCraft non fa ancora, e cosa fare oggi.
keywords: mancante, limitazioni, ctb, stb, stile di stampa, proprietà, ucs, annotativo, blocco dinamico, spline, roadmap, non supportato, salvataggio dwg, tratteggio, stira, serie, unisci, matchprop, spezza, allunga, tipo di linea, spessore di linea, xref, nuvola, 3d, solidi, booleane, multileader, wipeout
from: 87e56521
---

CadCraft è in sviluppo. Questa pagina elenca ciò che la versione attuale non fa, così non occorre cercarlo. Ogni voce indica cosa fare oggi.

## File e salvataggio

| Non ancora implementato | Invece, oggi |
|---|---|
| Un DWG di CadCraft verificato in AutoCAD stesso | Ogni versione salvata viene riletta da tre altri programmi con lettori DWG e da CadCraft. Vedi [Cosa conserva e cosa modifica un DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Salvataggio di DXF più recenti del 2000 | Salvare come DXF 2000, oppure come DWG fino ad AutoCAD 2018. |
| Salvataggio sopra il file aperto nel browser | Ogni salvataggio scarica una nuova copia; sostituire il vecchio file a mano, se lo si desidera. In CadCraft Studio, {{key:Mod+S}} riscrive il file aperto. |
| Salvataggio nel cloud e sincronizzazione tra computer | CadCraft non invia ancora i salvataggi al cloud: conservare i file DWG e DXF nelle proprie cartelle. In CadCraft Studio, [Cronologia](topic:history) elenca le versioni nel cloud di un disegno salvato altrove e le copie dei propri salvataggi su questo computer. |
| Sovrapposizioni, e modifica sul posto di un disegno collegato | Allegare il disegno come collegamento e ricaricarlo dopo aver modificato l'altro disegno. Un collegamento resta tale quando si salva come DWG, e {{cmd:XCLIP}} lo ritaglia. |
| Immagini nei DXF; wipeout che nascondono ciò che sta sotto | Il DXF conserva un'immagine come il suo riquadro con il nome del file; il DWG la conserva come immagine: vedi [Immagini in un disegno](topic:pictures). Un wipeout appare come il suo riquadro. |
| Modifica di multileader con linee di richiamo curve, con linee di richiamo su entrambi i lati del contenuto, o con un blocco ruotato o scalato in modo non uniforme | Vengono disegnati come li ha disegnati l'altro programma e si spostano come un unico oggetto. I multileader con linee di richiamo rette verso un'unica destinazione, e con testo o blocco come contenuto, sono modificabili ({{cmd:MLEADEREDIT}}). |
| Nelle tabelle di altri programmi: una cella che contiene un blocco, formattazione del testo dentro una cella, bordi e colori per cella di una tabella DXF, una tabella suddivisa in colonne | La tabella si apre come tabella modificabile ({{cmd:TABLEDIT}}) e viene mostrata come l'altro programma l'ha disegnata finché non la si modifica; poi CadCraft la ridisegna dalle sue celle: testo semplice, formule come `=G3*H3` e `=Sum(I3:I9)`, allineamento e altezze del testo. Una cella con blocco risulta poi vuota. Una tabella DWG non modificata viene salvata di nuovo con i dati di cella che aveva. |
| Un vero oggetto tabella in un DXF salvato | Un DWG conserva una tabella come tabella che gli altri programmi possono modificare. Un DXF la conserva come il blocco che la disegna, con una registrazione propria di CadCraft: CadCraft la riapre come tabella; gli altri programmi vedono un blocco. Una tabella specchiata o scalata in modo non uniforme viene salvata così anche in un DWG. |
| Copia e incolla con altri programmi | Gli appunti di CadCraft funzionano tra disegni e schede di CadCraft nello stesso browser, non con altri programmi. Salvare come DWG o DXF e aprirlo lì. Vedi [Copia, incolla e duplica](topic:copy-paste). |

## Disegno e modifica

| Non ancora implementato | Invece, oggi |
|---|---|
| Motivi di tratteggio che CadCraft non ha, e riempimenti sfumati esattamente come li dipingono altri programmi | I tratteggi aperti con motivi che CadCraft non ha vengono mostrati con un tono. Un riempimento sfumato ({{cmd:GRADIENT}}) viene dipinto nel modo proprio di CadCraft per ciascun tipo: simile per genere a quello degli altri programmi, non punto per punto. Il DWG 2004 e successivi lo conservano come vero tratteggio sfumato; in un file DXF 2000 o DWG 2000 solo CadCraft lo rilegge, e gli altri programmi vedono un riempimento pieno. I motivi si caricano da un file `.pat`, e un tratteggio può essere collegato al suo contorno e poi lo segue: vedi [Tratteggio e aree di riempimento](topic:hatch). |
| Tipi di linea con forme o testo, e spessori di linea in un DXF R12 salvato | Le forme e il testo nel tipo di linea di un file sono esclusi dai tratteggi della linea; salvare come DWG per conservare gli spessori di linea. |
| Tratteggi con motivo in un DXF salvato | R12 non ha tratteggi: vengono salvati come i loro contorni. Salvare come DWG per conservare il motivo. |
| Serie create da un altro programma o modificabili da esso; righe e livelli nelle serie su percorso e polari; una serie che segue la sua curva di percorso | Una serie creata con ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; modificata con {{cmd:ARRAYEDIT}}) viene salvata come riferimento a blocco con i numeri propri di CadCraft: gli altri programmi la mostrano, la spostano, la stampano e la esplodono, ma non ne possono cambiare i conteggi; una serie creata in un altro programma si apre qui come semplice riferimento a blocco. Una serie su percorso conserva una copia del suo percorso: modificare la curva in seguito non sposta gli elementi. |
| Finestre ritagliate dei fogli, da e verso altri programmi | Una finestra ritagliata con {{cmd:VPCLIP}} o creata con {{cmd:MVIEW}} Poligonale o Oggetto viene salvata con il contorno proprio di CadCraft: gli altri programmi la aprono come il rettangolo che la circonda, e una finestra ritagliata in un altro programma si apre qui come il suo rettangolo. Il DXF R12 conserva solo il rettangolo. |
| {{cmd:STRETCH}} con un poligono di intersezione | Usare una o più finestre di intersezione. |
| {{cmd:PEDIT}} Modifica vertice (un vertice alla volta sulla riga di comando) | Maniglie, e il browser dei vertici in Proprietà (ogni vertice, le sue larghezze e il suo bulge). Il resto di PEDIT è implementato: vedi [Spline e polilinee](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} e {{cmd:JOIN}} su ellissi e spline | {{cmd:EXPLODE}} una spline (oppure {{cmd:PEDIT}} su di essa) per ottenere una polilinea che questi comandi accettano. |
| Raccordo e smusso tra un segmento ad arco di una polilinea e il segmento accanto; raccordo che unisce una linea in una polilinea | {{cmd:EXPLODE}} la polilinea, poi raccordare i pezzi. L'arco di raccordo viene aggiunto come oggetto proprio. |
| Rifila ed estendi: l'opzione Progetto (3D) ed estensione dell'estremità ad arco di una polilinea | Rifilare nel piano del disegno; per un'estremità ad arco, esplodere la polilinea o disegnare di nuovo l'arco. |
| Oggetti OLE: inserirli, eseguirli o modificarli; mostrare quelli di un DWG dove il file li colloca; immagini metafile | Vedi [Immagini](topic:pictures#objects-from-other-programs-ole). Gli oggetti di un DXF si mostrano come bitmap o come riquadro con etichetta; quelli di un DWG vengono conservati, non disegnati sul posto (OLELIST li elenca e colloca una copia di un'immagine dove si indica). |
| Digitare formattazioni (grassetto, frazioni impilate, colori per parola) nel testo di paragrafo; font diversi dal font di tipo Helvetica; colonne | La formattazione presente in un file viene mantenuta, disegnata e salvata (vedi Testo); il nuovo testo di paragrafo ha un'unica altezza e un unico colore. |
| Testo di paragrafo modificato alla sua rotazione | L'editor si apre in piano; il testo mantiene la sua rotazione. |
| Multileader salvati come oggetti multileader in un DXF | Un DWG li conserva come multileader, con ogni linea di richiamo e un blocco come contenuto; un DXF conserva ciò che disegnano (linee, frecce e il testo o il blocco). |
| Nelle tabelle ({{cmd:TABLE}}): testo che va a capo in una cella, tabelle che si dividono in parti, stile di testo della tabella e colori per tipo di riga in una finestra di dialogo, un collegamento dati a un file di foglio di calcolo (`.xlsx`) o uno che legge il file da solo | Il testo di una cella va a capo solo dove lo si interrompe ({{key:Alt+Enter}}); allargare la colonna. {{cmd:DATALINK}} legge un file `.csv`, e {{cmd:DATALINKUPDATE}} chiede di scegliere di nuovo il file. {{cmd:DATAEXTRACTION}} e {{cmd:COUNTTABLE}} creano una tabella che non segue il disegno da sola: rieseguirli (un conteggio dinamico: {{cmd:BOMTABLE}}). |
| Definizioni di attributi conservate da sole in un file salvato (fuori da un blocco), attributi su più righe | Inserire le definizioni di attributi in un blocco prima di salvare: da sole vengono salvate come testo che mostra il tag. |
| Stati dei layer (salvare e ripristinare quali layer sono accesi) | Usare {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, oppure accendere e spegnere i layer a mano. |
| Selezione a poligono di finestra e a poligono di intersezione, e filtri di selezione salvati | Recinto (`F`), Finestra, Intersezione, Rimuovi (`R`), {{cmd:QSELECT}} per una regola. |


## Il pannello Proprietà

| Non ancora implementato | Invece, oggi |
|---|---|
| Disegno delle scelte di Adatta, e posizione orizzontale del testo e testo sotto la linea sulle quote diverse da lineari e allineate | Sono conservate sull'oggetto, mostrate in Proprietà e salvate; CadCraft colloca il testo con la propria regola. |
| Materiali che gli altri programmi vedono | Un file salvato conserva il nome del materiale per CadCraft; gli altri programmi mostrano il materiale del layer. |
| Trasparenza nei file DWG 2000 e DXF | Gli altri programmi mostrano quegli oggetti pieni; CadCraft conserva la trasparenza. Salvare come DWG 2004 o successivo per tutti. |
| Un collegamento di tratteggio creato in un altro programma | CadCraft salva il proprio collegamento nei file DWG e DXF 2000; i collegamenti creati in altri programmi non vengono letti. Usare `HATCHEDIT` e Collegamento: vedi [Tratteggio e aree di riempimento](topic:hatch). |
| Coordinate in Proprietà nell'UCS | Proprietà mostra le coordinate globali; la barra di stato e {{cmd:ID}} mostrano quelle dell'UCS. Vedi [Ruotare la vista e usare le proprie coordinate](topic:ucs-and-turned-view). |
| Una posizione separata per un oggetto annotativo a ciascuna delle sue scale; lettura dei registri per scala che altri programmi conservano | Un testo o una quota annotativa conserva un elenco di scale ({{cmd:OBJECTSCALE}}) e ogni finestra lo mostra alla dimensione della sua scala, nello stesso punto. L'elenco viene salvato come dato proprio di CadCraft: un altro programma vede l'oggetto alla sola scala per cui è dimensionato, e un elenco creato in un altro programma non viene letto. Vedi [Unità, fogli e scale](topic:units-papers-scales#annotate-by-scale). |
| Modificare distanze, angoli o capovolgimenti di un blocco dinamico; blocchi dinamici che restano dinamici quando si salva in un'altra versione DWG o come DXF | Cambiare il suo stato di visibilità in Proprietà › {{ui:Personalizzato}}; gli altri suoi valori vi appaiono in sola lettura. Resta dinamico se lo si salva come DWG nella versione con cui è arrivato il disegno. Vedi [Blocchi dinamici](topic:dynamic-blocks). |
| Tolleranza di adattamento delle spline, spline di grado 6 e superiore, spline 3D | Sono implementati punti di adattamento e di controllo, gradi da 1 a 5 e pesi: vedi [Spline e polilinee](topic:splines). L'altezza (Z) di una spline non viene conservata. |
## Ausili di precisione

| Non ancora implementato | Invece, oggi |
|---|---|
| Tracciamento da punti tra i comandi, e la finestra delle impostazioni di tracciamento (angoli polari relativi, angoli extra) | {{cmd:POLARANG}} imposta il passo; acquisire di nuovo i punti nel comando successivo. |
| Aggancio alla griglia | Digitare le coordinate; la griglia è solo una guida visiva. |
| Opzioni Arco e Lunghezza nella scelta degli angoli di un'area, e Volume di MEASUREGEOM | Disegnare il contorno con {{cmd:PLINE}} (archi inclusi), poi {{cmd:AREA}} `O`. |
| Input dinamico per le maniglie, e il suo elenco di opzioni (la freccia in basso) | La riga di comando mostra le opzioni. |
| Angoli in gradi, primi e secondi, gradi centesimali o azimut da topografo | Digitare gradi decimali: `30.5` per 30°30'. |
| Una finestra di gestione delle viste; viste con nome di un foglio che tornano su quel foglio | {{cmd:NAMEDVIEW}} elenca e ripristina le viste. Un file salvato le conserva, ma le viste di un foglio tornano sul primo foglio. |

## Tavole, quote e stampa

| Non ancora implementato | Invece, oggi |
|---|---|
| Campi per la scala di una finestra, un oggetto con nome come un layer o un blocco, un collegamento ipertestuale, e campi del set di tavole oltre il numero e il nome del foglio; campi scritti come oggetti campo che altri programmi aggiornano | {{cmd:FIELD}} ha la data, il nome del file, il numero, il nome e il conteggio del foglio, le proprietà del disegno ({{cmd:DWGPROPS}}), l'area, la lunghezza e altre proprietà di un oggetto, e le formule, nel testo, negli attributi e nelle celle di tabella. Un altro programma mostra un campo di CadCraft come il testo che ha letto per ultimo; CadCraft legge i campi data, nome del file, proprietà, foglio ed espressione di un altro programma e lascia gli altri tipi come testo. La scala di una finestra si scrive a mano. |
| Salvare quale stile di quotatura è corrente; testo di quota trascinato in un punto libero | Un disegno si apre con Standard corrente. Il testo sta sulla linea di quota (DIMTEDIT Sinistra / Destra / Centro). Vedi [Impostare le dimensioni delle quote](topic:dimension-settings). |
| Quote angolari modificabili a due righe da file aperti che CadCraft non riesce a interpretare | Vengono mostrate come disegnate nel file. Quote di ordinata, lunghezza d'arco e raggio spezzato si aprono come quote modificabili. |
| Verifica del lettore CTB rispetto a un file di un altro programma (è implementato, dalla descrizione pubblicata), stili di stampa con nome (STB), tramatura, numeri di penna, scala di grigi da un CTB e regolazione adattiva del tipo di linea in uno stile di stampa | Creare la tabella in {{ui:Tabelle degli stili di stampa}} (colore, grigio, inchiostro, spessore di linea, tipo di linea, terminazione e giunzione delle linee, e stile di riempimento per colore): vedi [Tabelle degli stili di stampa](topic:plot-pdf#plot-style-tables). |
| Impostazioni di pagina | Scegliere carta, scala e stile di stampa nella finestra {{ui:Stampa in PDF}}; un foglio conserva il suo stile di stampa. |
| Hindi e altre scritture che richiedono una composizione complessa nei PDF, e ideogrammi rari (scritture europee, cirillico, greco, ebraico, arabo, persiano, urdu, thai, cinese, giapponese e coreano, nella stampa) | Vengono stampati come "?". |
| Testo in scrittura araba e testo cinese, giapponese o coreano nello stesso PDF stampato | Una stampa usa un solo font: una delle due scritture viene stampata come "?". |
| Marcatori di direzione espliciti nel testo (incorporamenti, sovrascritture, isolamenti) | Vengono ignorati: ogni riga è ordinata solo in base alle sue lettere. |
| Immagini dentro una pagina PDF allegata, in una stampa | Vengono stampati linee, riempimenti e testo della pagina. Una pagina che è solo un'immagine si inserisce con {{cmd:SCANATTACH}}, e le immagini vengono stampate. Vedi [Sottofondi PDF](topic:pdf-underlay#plot-and-save). |
| Invio di un lavoro a un laser da CadCraft Studio (Studio non ha Web Serial) | Salvare il G-code e inviarlo con il programma proprio del laser, oppure inviarlo da Chrome o Edge. Vedi [Inviare un disegno a un laser](topic:laser-cutting#send-from-the-browser). |

## Vincoli e parametri

| Non ancora implementato | Invece, oggi |
|---|---|
| Vincoli su fogli, in blocchi, su ellissi, spline o testo | Vincolare nella scheda {{ui:Modello}}, su linee, polilinee, cerchi, archi e punti. |
| Liscio (G2), e vincolare direttamente il bulge di un arco di polilinea | Tangente e uguale; un segmento ad arco segue le sue due estremità. |
| Vincoli dimensionali di riferimento (guidati), e `3Point` in {{cmd:DCANGULAR}} | Una quota semplice (DIMLINEAR …) mostra un valore senza guidarlo. |
| Vincoli dimensionali di dimensione fissa su carta, e la loro stampa | Si vedono solo a schermo; aggiungere quote semplici per la stampa. |
| Vincoli conservati attraverso EXPLODE, BREAK, JOIN e altri comandi che creano nuovi oggetti, e su polilinee rifilate | Vincolarli di nuovo (AUTOCONSTRAIN aiuta). {{cmd:MIRROR}} e {{cmd:TRIM}} di linee, archi e cerchi li conservano. |
| Tabelle di progetto (configurazioni) in CadCraft | Cambiare i parametri nel pannello. |
| Un test completo di andata e ritorno con SolidWorks | Controllare lo schizzo creato dalla macro prima di farvi affidamento. |

## 3D

| Non ancora implementato | Invece, oggi |
|---|---|
| Raccordi, smussi, svuotamenti e loft; sweep lungo un percorso che sale (percorsi 3D) | Estrudere contorni con archi, spingere e tirare facce, far ruotare e fare sweep lungo percorsi piani. |
| Estrusione in una direzione diversa dall'alto | Disegnare la forma sul piano ed estruderla verso l'alto o verso il basso (con sformo o lungo un percorso, se si desidera); ruotare il solido dopo. |
| Quota e spessore di oggetti 2D | Il disegno giace sul piano (altezza 0) nella scheda 3D. |
| Modifica di solidi, regioni e corpi da altri programmi; visualizzazione di quelli dentro i blocchi; loro facce su superfici a forma libera come sweep, loft o altre; mesh poliface e poligonali | I solidi dello spazio modello si mostrano nella scheda 3D come sono e vengono salvati invariati in DWG; ciò che non viene disegnato è elencato all'apertura della scheda 3D. Richiedere le mesh come facce 3D nello spazio modello. Vedi [Solidi da altri programmi](topic:3d-solids#solids-from-other-programs). |
| Copia e incolla di solidi | Nella scheda 3D, usare {{cmd:COPY}}. Gli appunti contengono solo oggetti 2D. |
| Sezioni, viste che seguono le modifiche successive ai solidi, e solidi ombreggiati su fogli stampati | {{cmd:VIEWBASE}} posiziona viste piane (un'istantanea); rieseguirlo dopo aver modificato i solidi. |
| Materiali, texture e impostazioni di illuminazione | Gli stili visivi: ombreggiato, bordi, linea nascosta, wireframe, raggi X. |
| Livelli cartografici stampati, nelle finestre dei fogli e nella scheda 3D; immagini da file salvati con il disegno; posizione del disegno scritta per altri programmi in DWG 2000–2007 e DXF R12 | I livelli cartografici si mostrano sotto lo spazio modello a schermo; il sistema e l'elenco dei livelli vengono salvati con il disegno: vedi [Livelli cartografici sotto il disegno](topic:map-layers). |
| Scansioni E57 oltre 6 milioni di punti o 512 MB, file propri dei produttori di scanner (RCP, RCS, FLS, LGS, TZF, ZFS), una nuvola di punti salvata con il disegno o stampata, aggancio a una nuvola nella scheda 3D, sezioni verticali (sezione) nella scheda Modello | Esportare le scansioni grandi o dei produttori come LAS o LAZ ([Formati nuvola di punti](topic:point-cloud-formats)); allegare la nuvola ogni volta che si apre il disegno; tracciare da una sezione in pianta nella scheda Modello: vedi [Tracciare linee come costruito su una nuvola di punti](topic:point-clouds). |
| Registrazione di scansioni: trovare target (sfere, scacchiere) in una scansione da sola, risolvere tutte le scansioni insieme (bundle adjustment), scala, registrazione su un modello | Scegliere punti corrispondenti o digitare le coordinate dei target, poi affinare una scansione alla volta con ICP: vedi [Registrare più scansioni in una](topic:register-scans). |

## Routine e personalizzazione

| Non ancora implementato | Invece, oggi |
|---|---|
| LISP compilato o protetto (.fas, .vlx), programmi nativi (.arx, .crx, .dbx) e VBA (.dvb) | Caricare il sorgente .lsp di una routine con {{cmd:APPLOAD}}. |
| `grread` di LISP, reattori (`vlr-…`), funzioni di curva (`vlax-curve-…`), dizionari e dati estesi, `acet-…` di Express Tools | Il resto del linguaggio funziona: vedi [Eseguire routine LISP](topic:run-lisp). La riga di comando indica una funzione mancante quando una routine la richiede. |
| Immagini e diapositive nella finestra di dialogo di una routine | Appaiono come riquadri vuoti; il resto della finestra funziona. |
| CraftScript (.craft), Lua e Python in CadCraft | Eseguirli nell'area Script di PartCraft. |
| Elenchi di layer, colori e tipi di linea negli stili di menu della barra multifunzione | Usare il pannello {{ui:Layer}} e {{ui:Proprietà}}. |
| La Startup Suite e gli alias conservati sul proprio computer o sincronizzati | Sono conservati in questo browser; l'app desktop e il servizio cloud li conserveranno. In Studio, `acad.lsp` e `acaddoc.lsp` vengono letti da una cartella di supporto che si sceglie (Carica applicazioni). |

## Guida

La guida descrive questa versione. Quando qualcosa viene aggiunto, esce da questa pagina e passa nelle guide passo passo.
