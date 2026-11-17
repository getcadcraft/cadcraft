---
title: File: cosa si apre, cosa si salva
summary: I formati che CadCraft apre, salva ed esporta, cosa viene mantenuto o convertito e dove finiscono i file.
keywords: xclip, clip, contorno xclip, associa ritagliato, dwg, dxf, pdf, r12, apri, salva, esporta, importa, formati, conversione, scarica, saveas, dxfout, salva con nome, salvataggio DWG, formato, qsave, xref, xattach, disegno collegato, riferimento esterno, associa, ricarica, scollega
from: b8c5778d
---

## In breve

| Formato | Apri | Salva | Note |
|---|---|---|---|
| DXF (testo o binario, qualsiasi versione) | Sì | Sì, come DXF R12, DXF 2000 o DXF 2000 (binario) | Un DXF binario si apre come uno di testo e si salva di nuovo come binario. |
| DWG | Sì | Sì, come DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Letto e scritto dalla libreria DWG propria di CadCraft (file da AutoCAD R13 a 2018). Il DWG originale non viene mai modificato. I file danneggiati, o le versioni che il lettore non gestisce, vengono rifiutati con un messaggio. |
| PDF | Importa una pagina: come sottofondo o come oggetti ([Sottofondi PDF](topic:pdf-underlay)) | Sì, tramite stampa | PDF vettoriale di una tavola, o del modello a una scala. |

Ogni disegno aperto (o avviato con {{ui:Nuova}}) ottiene una propria scheda sopra l'area di disegno; un nuovo disegno che nessuno ha ancora toccato viene usato al posto di aggiungere una scheda. Fare clic su una scheda per passare ad essa, sulla sua {{ui:×}} per chiuderla (CadCraft chiede prima se ci sono modifiche non salvate), oppure affiancare i disegni aperti: vedere [Dividere lo schermo](topic:split-screen).

## Aprire un disegno

- Premere {{key:Mod+O}}, fare clic su {{ui:Apri}}, oppure digitare `OPEN`, poi scegliere il file.
- Oppure trascinare un file `.dwg` o `.dxf` nell'area di disegno.

Il file viene letto all'interno del browser. Non viene caricato da nessuna parte. La cronologia riporta quanti oggetti e layer sono entrati e quanto tempo è occorso, e la sezione {{ui:Disegno}} del pannello di sinistra mostra il formato, per esempio "DWG 2018 (AC1032)".

Il lettore DWG fa parte di CadCraft e viene scaricato con il primo DWG che si apre dopo il caricamento della pagina (qualche centinaio di KB), quindi non c'è un download separato da attendere. Legge il file in background, perciò la pagina continua a rispondere mentre si apre un DWG grande.

Un DXF viene letto a blocchi di circa 4 MB, mai come un unico blocco di testo, quindi anche un DXF oltre 512 MB si apre. Il limite è la memoria del computer: mentre si apre un DXF, aspettarsi un consumo di circa 16-20 volte la dimensione del file (un DXF da 100 MB con circa 690.000 oggetti ha usato circa 1.5 GB nel nostro test).

### Cosa entra

- Linee, archi, cerchi, polilinee (con segmenti ad arco), ellissi, punti, testo e testo multilinea, solidi, tratteggi (i motivi standard disegnati come le loro linee, gli altri come tinta piatta), riferimenti a blocco con i loro attributi (valori modificabili; vedere [Attributi di blocco](topic:attributes)), quote, e layout con i loro viewport.
- Le spline entrano come spline (grado, punti di controllo, nodi, pesi, punti di adattamento); vedere [Spline e polilinee](topic:splines).
- Le multiguide con una sola linea di richiamo e testo entrano come multiguide di CadCraft modificabili (vedere {{cmd:MLEADER}}). Le altre (con un blocco, più linee di richiamo o linee curve) vengono disegnate come le ha disegnate l'altro programma e si spostano come un unico oggetto; la cronologia indica quante sono.
- Le immagini (picture) appaiono come riquadro con il nome del file finché non si fornisce a CadCraft il file con {{cmd:IMAGE}}: vedere [Immagini in un disegno](topic:pictures#show-the-pictures-a-dwg-uses). Le cancellazioni (wipeout) appaiono come il loro riquadro, e ciò che sta sotto resta visibile.
- Le tabelle in un DWG entrano come le ha disegnate l'altro programma.
- Le facce 3D nello spazio modello entrano nella scheda {{ui:3D}}, non come oggetti 2D; così quelle dentro i blocchi, una volta per riferimento a blocco nel modello. In un blocco e su una tavola sono disegnate anche piatte, come contorni. Vedere [Modello in 3D](topic:3d-solids).
- I layer mantengono colore, stato acceso, congelato, bloccato e impostazioni di stampa. DEFPOINTS non viene mai stampato.
- Le quote diventano quote di CadCraft reali e modificabili dove si possono leggere i loro punti. Vengono mostrate prima esattamente come le ha disegnate l'altro programma; appena se ne modifica una, CadCraft la ridisegna nel proprio stile.
- Ogni layout diventa una scheda tavola. Nell'altro programma ogni layout ha un primo viewport nascosto che è la tavola stessa; CadCraft lo lascia fuori.

### Cosa non entra ancora

Tutto ciò che CadCraft non sa disegnare viene contato, non indovinato. La casella "Info su questo file" nel pannello di sinistra lo elenca come "Non ancora mostrato:" seguito da ogni tipo di oggetto e da quanti sono. I casi tipici sono le tabelle in un DXF, le mesh e i solidi 3D dentro i blocchi. I solidi 3D, le regioni e i corpi nello spazio modello appaiono nella scheda 3D (vedere [Modello in 3D](topic:3d-solids#solids-from-other-programs)). I viewport ruotati nel file appaiono ruotati, come lì, e mantengono la rotazione quando si salva; così la UCS corrente, le UCS con nome e una vista ruotata.

Il testo è disegnato con un unico carattere in stile Helvetica. Un'etichetta che sta su una riga nel carattere più stretto del programma originale può andare su due righe in CadCraft.

## Salvataggio

Ci sono tre modi per salvare. Ognuno scarica una copia.

- **Salva**: premere {{key:Mod+S}}, fare clic su {{ui:Salva}}, oppure digitare `SAVE` (anche `QSAVE`). Salva nel formato del disegno: DWG se si è aperto un DWG, DXF se si è aperto un DXF. Un DWG mantiene la versione in cui è arrivato (un file 2018 si salva come 2018). Un nuovo disegno usa il formato e la versione DWG scelti per ultimi in {{ui:Salva con nome}} in questo browser; se non se ne è scelta nessuna, DWG nel formato AutoCAD 2000.
- **Salva con nome**: premere {{key:Mod+Shift+S}}, fare clic su {{ui:Salva con nome}}, oppure digitare `SAVEAS`. La finestra {{ui:Salva una copia con nome}} offre {{ui:DWG}}, con un elenco {{ui:Versione}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, ciascuno con il nome del file che assegnerà, e con il formato e la versione attuali del disegno già selezionati. Fare clic su {{ui:Salva}} per scaricare, oppure su {{ui:Annulla}} (o {{key:Esc}}) per non salvare nulla; la cronologia riporta allora "Non salvato." Ciò che si sceglie resta: {{key:Mod+S}} lo usa per questo disegno da quel momento, e i nuovi disegni in questo browser partono con quello.
- **DXFOUT**: digitare `DXFOUT`. Scarica sempre una copia DXF R12, e il successivo {{key:Mod+S}} salva comunque nel formato proprio del disegno.

Il browser scarica `<nome disegno>.dwg` o `<nome disegno>.dxf`. Ogni salvataggio è un **nuovo download**; il file aperto non viene mai sovrascritto o modificato. La cronologia lo conferma, per esempio "Copia salvata come Plan.dwg (DWG (AutoCAD 2018)). Il file originale Plan.dxf è invariato." Per un DXF dice "(DXF R12, si apre in qualsiasi programma CAD)". Le righe sotto elencano ciò che è cambiato durante il salvataggio.

Quando CadCraft gira nell'app desktop, il salvataggio funziona come negli altri programmi desktop: {{key:Mod+S}} riscrive il disegno nel file aperto, nel suo formato e nella sua versione, e la cronologia indica dove è stato salvato. {{ui:Salva con nome}} e le esportazioni mostrano la finestra di salvataggio del sistema, e un file `.dwg`, `.dxf` o `.ccsheets` su cui si fa doppio clic si apre in CadCraft.

Per un PDF, stampare invece (vedere sotto).

## Cosa conserva e cosa cambia in un DWG

CadCraft scrive il DWG da sé, all'interno del browser, con la stessa libreria DWG con cui lo legge. Scegliere la versione in {{ui:Salva con nome}}: il formato AutoCAD 2000 (versione file AC1015) si apre nella maggior parte dei programmi, anche quelli vecchi; i formati più recenti (2004, AC1018, fino al 2018, AC1032) conservano anche i colori reali. Nulla viene caricato, e il salvataggio di un DWG funziona offline.

Ogni versione viene verificata rileggendo i file salvati con i lettori DWG di altri tre programmi e con CadCraft stesso. Un DWG di CadCraft non è ancora stato aperto in AutoCAD stesso.

### Cosa conserva un DWG

- Linee, archi, cerchi, ellissi, punti e polilinee con i loro segmenti ad arco.
- Testo su una riga con il suo allineamento e fattore di larghezza.
- Testo multilinea e a capo, come testo multilinea. L'altro programma lo va a capo di nuovo con la stessa larghezza.
- Colori degli oggetti: per layer, per blocco, i 255 colori standard, e i colori reali nel formato 2004 e successivi.
- Layer con colore, tipo di linea, spessore di linea e impostazioni di stato acceso, congelato, bloccato e stampa; tipi di linea, spessori e scale propri degli oggetti, i motivi dei tipi di linea e la scala dei tipi di linea del disegno.
- Le unità del disegno e il formato delle lunghezze (decimale, piedi e pollici, frazioni…).
- Blocchi con il loro punto base e le definizioni di attributo, incluse quelle invisibili, costanti e preimpostate.
- Riferimenti a blocco con la loro scala, rotazione e valori degli attributi.
- Riempimenti pieni e tratteggi con motivo, con la loro scala e il loro angolo (le linee del motivo stesso, così gli altri programmi disegnano le stesse linee di CadCraft).
- Quote, come quote reali: gli altri programmi le rimisurano quando vengono allungate. Ognuna mantiene le proprie impostazioni (altezza del testo, dimensione delle frecce, decimali, formato delle lunghezze) e il proprio testo, e porta la copia disegnata che ogni quota DWG possiede.
- Tavole (layout): ciascuna con formato carta e unità, ciò che vi è disegnato, e i suoi viewport con vista e scala.
- Viste con nome.
- Multiguide, come multiguide.
- Nomi di layer e blocchi come li si è digitati, in maiuscolo e minuscolo. (DXF R12 li scrive in maiuscolo.)

### Cosa cambia in un DWG

Ognuna di queste voci è elencata nella cronologia dopo il salvataggio, quando si applica al disegno.

| In CadCraft | Nel DWG salvato |
|---|---|
| Colori reali (scelti con il selettore colore), nel formato 2000 | Il colore standard più vicino: il formato 2000 ha solo i 255. Salvare come 2004 o successivo per conservarli |
| Viste con nome di una tavola | Viste dello spazio carta: un DWG non dice a quale tavola appartengono, quindi quando CadCraft riapre il file appartengono alla prima tavola |
| Testo multilinea con fattore di larghezza | Larghezza normale delle lettere: in un DWG il fattore di larghezza vale solo per il testo su una riga |
| Nomi di layer o blocchi con caratteri non ammessi dal DWG | Modificati: un nome proveniente da un disegno collegato come `Base\|Walls` diventa `Base$0$Walls` (come lo nomina l'associazione di un disegno collegato), e gli altri caratteri diventano `_` |

### Perché R12 e cosa viene convertito

Quando si salva come DXF, CadCraft scrive DXF R12, la versione che ogni programma CAD sa aprire. È più vecchia di alcune funzioni, quindi alcune cose vengono scritte in forma più semplice:

| In CadCraft | Nel file R12 salvato |
|---|---|
| Testo multilinea | Un oggetto di testo per riga |
| Ellissi | Polilinee che seguono l'ellisse |
| Tratteggi (da file aperti) | Solo i loro contorni |
| Colori reali (scelti con il selettore colore) | Il colore standard più vicino |
| Spessori di linea, e scale dei tipi di linea propri degli oggetti | Esclusi: R12 non li ha (i tipi di linea sono conservati) |
| Nomi di layer e blocchi | Scritti in maiuscolo; spazi e altri caratteri diventano `_`, e i nomi vengono troncati a 31 caratteri ("Cartiglio" diventa `CARTIGLIO`) |
| Layer impostati per non essere stampati | Gli altri programmi li stamperanno (CadCraft ricorda l'impostazione quando il disegno ha una tavola) |
| Quote | Quote reali con un proprio blocco disegnato, così gli altri programmi le mostrano come si vedono |
| Multiguide | Le linee, la freccia e il testo che disegnano |
| Viste con nome | Mantenute, con nomi in maiuscolo; le viste di una tavola tornano sulla prima tavola |
| Più tavole | La prima tavola è lo spazio carta che ogni programma mostra; le altre sono conservate come blocchi chiamati `CCLAYOUT_1`, `CCLAYOUT_2` … che CadCraft riconverte in tavole quando apre il file |

La cronologia elenca ciascuna di queste voci che si è applicata al disegno.

:::tip
Per continuare a lavorare su un disegno per più giorni, salvare come DXF e riaprire quel DXF la volta successiva. Tutto ciò che CadCraft sa disegnare sopravvive al ciclo di salvataggio e riapertura, incluse quote, blocchi e tutte le tavole.
:::

## Disegni collegati (riferimenti esterni)

{{cmd:XATTACH}} (`XA`, oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Collega un disegno (riferimento esterno)}}) collega un altro DWG o DXF: scegliere il file, poi fare clic dove va ({{key:Enter}} lo mette in 0,0). Entra come un unico blocco chiamato come il file, alla scala giusta quando i due disegni hanno unità diverse. I suoi layer e blocchi mantengono i loro nomi con il nome del collegamento davanti (`Plan|Walls`, `Plan|Door`), così non si mescolano mai con i propri: si accendono e spengono, congelano o bloccano i layer collegati come quelli propri. Un collegamento è in sola lettura: si modifica l'altro disegno e lo si ricarica. Ciò che si imposta sui layer di un collegamento (colore, tipo di linea, spessore, acceso/spento, congelato, bloccato, stampa) viene mantenuto quando lo si ricarica, quando si salva il disegno come DWG mentre il collegamento è ancora un collegamento, e quando un altro disegno collega questo.

{{cmd:XREF}} (`XR`): `?` elenca i collegamenti (caricati o no, quale file, quanti riferimenti); `A` collega; `R` ricarica uno dal suo file (scegliere di nuovo il file: il browser non può raggiungere le cartelle da solo); `B` associa uno (diventa blocchi e layer normali chiamati `Plan$0$Walls`); `D` scollega uno (i suoi riferimenti e layer spariscono). Ognuno è un solo passo di annullamento.

{{cmd:XCLIP}} (`XC`) ritaglia riferimenti a blocco e collegamenti: selezionarli, `N` per un nuovo contorno, poi `R` e due angoli oppure `P` e i punti di un poligono ({{key:Enter}} lo chiude); `D` rimuove il ritaglio. Si vede e si stampa solo ciò che sta dentro, e il ritaglio si sposta con il riferimento. DWG e DXF 2000 conservano i ritagli; DXF R12 salva il riferimento intero e lo segnala. Quando si associa un collegamento che ha riferimenti ritagliati, {{cmd:XREF}} `B` chiede: `A` associa tutto, `C` conserva solo la parte ritagliata di ogni riferimento (linee e archi vengono tagliati al contorno; testi e blocchi annidati restano se il loro punto di inserimento è dentro).

Un disegno aperto può collegare file che CadCraft non riesce a vedere: lo indica con quanti non sono caricati. Usare {{cmd:XREF}}, `R` e scegliere ciascun file per vederli.

Quando si salva, un collegamento caricato viene **associato** nel file (gli altri programmi vedono blocchi e layer normali chiamati `Plan$0$…`), e la cronologia lo segnala. Un collegamento non caricato resta un collegamento al suo file, in DWG e DXF.

## Apri in 3D

{{ui:Vista}} › {{ui:Altro}} › {{ui:Apri in ModelCraft}} ({{cmd:OPENIN3D}}) apre il disegno nell'app di modellazione 3D in una nuova scheda, come DWG, senza caricarlo. Le modifiche fatte lì restano lì: salvarle da lì. La voce di menu compare solo dove quell'app può ricevere un disegno passato.

## Stampare un PDF

Premere {{key:Mod+P}}, fare clic su {{ui:Stampa}}, oppure digitare `PLOT`. Il PDF viene creato nel browser e scaricato, oppure aperto in una nuova scheda per la stampa. Vedere [Stampa in PDF](topic:plot-pdf).

## Dove finiscono i file

Ogni salvataggio e ogni stampa è un download, quindi i file finiscono dove il browser mette i download: di solito nella cartella Download. Per scegliere una cartella ogni volta, cambiare l'impostazione dei download nel browser; [Browser e computer](common:browsers) mostra dove.

Nulla di ciò che si apre o salva viene inviato a noi. Vedere [Dove finiscono i file](common:your-files).

## File di progetto PLN e PLA

CadCraft apre i disegni DWG e DXF, non i file propri di Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Aprendone uno, viene indicato di cosa si tratta. In Archicad, salvare come DWG le viste o le tavole necessarie e aprirle qui, oppure esportare il modello come IFC e aprirlo in BimCraft. Dove BimCraft può prendere in carico il file, CadCraft propone {{ui:Apri in BimCraft}}.

## Se la pagina si chiude prima di salvare

CadCraft conserva una copia di ogni disegno modificato, solo in questo browser, poco dopo aver smesso di modificare. Se la scheda si chiude, il browser si ferma o il computer si riavvia prima del salvataggio, alla successiva apertura CadCraft chiede **Recuperare il lavoro?**: {{ui:Recupera}} riapre il disegno, non salvato, in una propria scheda. Salvare il disegno rimuove la sua copia. Vedere [Recupera il lavoro](common:recover).

## Online e offline

Aprire, disegnare, salvare (DWG e DXF) e stampare avvengono tutti sul computer, quindi funzionano senza connessione una volta caricato CadCraft.

Per usare CadCraft senza alcuna connessione, fare clic su {{ui:Salva per l'uso offline}} nella barra in alto mentre si è online. L'etichetta conta ("Salvataggio 40 di 212") e finisce con "Pronto offline". La copia salvata include il lettore DWG, circa 5 MB in tutto, quindi **i file DWG si aprono anche offline** una volta salvata. Fare di nuovo clic sul pulsante per {{ui:Salva di nuovo (scarica la versione più recente)}} o {{ui:Rimuovi la copia offline}}. "Impossibile salvare" significa che alcuni file non sono stati scaricati: controllare la connessione e fare clic per riprovare. "Offline non disponibile" significa che questa finestra del browser non può conservare una copia (finestre private e alcuni computer gestiti).

Senza una copia salvata, il lettore DWG viene scaricato la prima volta che si apre un DWG dopo il caricamento della pagina, quindi aprire un DWG offline può fallire; i file DXF non ne hanno mai bisogno. Non ricaricare la pagina offline a meno che CadCraft non sia stato salvato.

Vedere [Lavorare offline](common:offline) per i dettagli.

:::offline
Ora si è offline. I disegni si salvano come DWG o DXF e si stampano normalmente, e i file DXF si aprono. I file DWG si aprono se CadCraft mostra "Pronto offline", oppure se il lettore DWG è già caricato in questa scheda.
:::

## Vincoli nei file

I vincoli e i parametri (vedere [Vincolare un disegno](topic:constraints)) vengono salvati sia in DWG sia in DXF. Ogni oggetto vincolato porta una piccola nota di CadCraft (dati estesi), e un blocco inutilizzato chiamato `CADCRAFT_PARAMETRIC` contiene i vincoli e la tabella dei parametri. Gli altri programmi aprono il disegno normalmente e ignorano entrambi; possono eliminare il blocco inutilizzato quando eseguono Elimina elementi inutilizzati. Le note si riferiscono agli oggetti tramite la propria chiave, non tramite gli handle del file, quindi un programma che rinumera gli handle non le rompe. Quando un altro programma ha eliminato o modificato un oggetto vincolato, CadCraft toglie i vincoli su di esso all'apertura del file e dice quanti sono. Un file senza di essi si apre senza vincoli.

Uno schizzo esportato da un modellatore di parti (`.json`) si apre anche: vedere [Spostare gli schizzi da e verso altri modellatori di parti](topic:solidworks-sketches).

## Non ancora disponibili

- Multiguide come oggetti multiguida in un DXF salvato (R12 non ne ha: vengono salvate come ciò che disegnano).
- Immagini in un DXF salvato (si salvano come i loro riquadri; il DWG le conserva come immagini), e cancellazioni (wipeout) che nascondono ciò che sta sotto.
- Salvare un DXF di versione più recente della 2000.
- Salvataggio su cloud e sincronizzazione tra computer.

Vedere [Non ancora implementato](topic:not-built-yet) per l'elenco completo.
