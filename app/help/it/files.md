---
title: File: cosa si apre, cosa si salva
summary: I formati che CadCraft apre, salva ed esporta, cosa viene mantenuto o convertito e dove vanno i file.
keywords: xclip, clip, contorno xclip, incorpora ritagliato, dwg, dxf, pdf, r12, apri, salva, esporta, importa, formati, conversione, scarica, saveas, dxfout, salva con nome, salvataggio dwg, formato, qsave, xref, xattach, disegno collegato, riferimento esterno, incorpora, ricarica, scollega
from: 6d68b34e
---

## In sintesi

| Formato | Apri | Salva | Note |
|---|---|---|---|
| DXF (testo, qualsiasi versione) | Sì | Sì, come DXF R12 o DXF 2000 | Il DXF binario viene rifiutato: salvarlo prima come DXF di testo. |
| DWG | Sì | Sì, come DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Letto e scritto dalla libreria DWG di CadCraft (file AutoCAD da R13 a 2018). Il DWG originale non viene mai modificato. I file danneggiati, o le versioni che il lettore non gestisce, vengono rifiutati con un messaggio. |
| PDF | Porta dentro una pagina: come sottofondo o come oggetti ([Sottofondi PDF](topic:pdf-underlay)) | Sì, stampando | PDF vettoriale di una tavola, o del modello in scala. |

Ogni disegno aperto (o avviato con {{ui:Nuovo}}) ha la propria scheda sopra l'area di disegno; un nuovo disegno che nessuno ha toccato viene riutilizzato invece di aggiungere una scheda. Fare clic su una scheda per passare ad essa, sulla sua {{ui:×}} per chiuderla (CadCraft chiede prima se ci sono modifiche non salvate), oppure affiancare i disegni aperti: vedere [Dividere lo schermo](topic:split-screen).

## Aprire un disegno

- Premere {{key:Mod+O}}, fare clic su {{ui:Apri}}, oppure digitare `OPEN`, poi scegliere il file.
- Oppure trascinare un file `.dwg` o `.dxf` sull'area di disegno.

Il file viene letto all'interno del browser. Non viene caricato da nessuna parte. La cronologia riporta quanti oggetti e layer sono entrati e quanto tempo ha richiesto, e la sezione {{ui:Disegno}} del pannello a sinistra mostra il formato, ad esempio "DWG 2018 (AC1032)".

Il lettore DWG fa parte di CadCraft e viene scaricato con il primo DWG aperto dopo il caricamento della pagina (poche centinaia di KB), quindi non c'è un download separato da attendere. Legge il file in background, perciò la pagina continua a rispondere mentre si apre un DWG grande.

### Cosa entra

- Linee, archi, cerchi, polilinee (con segmenti ad arco), ellissi, punti, testi e testi multilinea, solidi, tratteggi (i motivi standard disegnati con le loro linee, gli altri come tinta piatta), riferimenti a blocco con i loro attributi (valori modificabili; vedere [Attributi di blocco](topic:attributes)), quote e layout con i loro viewport.
- Le spline entrano come spline (grado, punti di controllo, nodi, pesi, punti di adattamento); vedere [Spline e polilinee](topic:splines).
- Le linee di richiamo multiple con una linea di richiamo e un testo entrano come linee di richiamo multiple di CadCraft modificabili (vedere {{cmd:MLEADER}}). Le altre (con un blocco, più linee di richiamo o linee curve) vengono disegnate come le ha disegnate l'altro programma e si spostano come un unico oggetto; la cronologia dice quante.
- Le immagini compaiono come un riquadro con il nome del file dell'immagine finché non si fornisce il file a CadCraft con {{cmd:IMAGE}}: vedere [Immagini in un disegno](topic:pictures#show-the-pictures-a-dwg-uses). I wipeout compaiono come il loro riquadro e ciò che sta sotto di essi resta visibile.
- Le tabelle di un DWG entrano come le ha disegnate l'altro programma.
- Le facce 3D nello spazio modello entrano nella scheda {{ui:3D}}, non come oggetti 2D; così anche quelle dentro i blocchi, una volta per ogni riferimento a blocco nel modello. In un blocco e su una tavola sono disegnate anche piatte, come contorni. Vedere [Modellare in 3D](topic:3d-solids).
- I layer mantengono colore, stato acceso, congelato, bloccato e impostazioni di stampa. DEFPOINTS non viene mai stampato.
- Le quote diventano vere quote modificabili di CadCraft dove i loro punti possono essere letti. Vengono mostrate prima esattamente come le ha disegnate l'altro programma; appena se ne cambia una, CadCraft la ridisegna nel proprio stile.
- Ogni layout diventa una scheda di tavola. Nell'altro programma ogni layout ha un primo viewport nascosto che è la tavola stessa; CadCraft lo omette.

### Cosa non entra ancora

Tutto ciò che CadCraft non sa disegnare viene contato, non tirato a indovinare. La finestra "Informazioni su questo file" nel pannello a sinistra lo elenca come "Non ancora mostrati:" seguito da ogni tipo di oggetto e da quanti sono. Casi tipici sono le tabelle in un DXF, le mesh e i solidi 3D dentro i blocchi. I solidi 3D, le regioni e i corpi nello spazio modello compaiono nella scheda 3D (vedere [Modellare in 3D](topic:3d-solids#solids-from-other-programs)). I viewport ruotati nel file compaiono ruotati, come nell'originale, e mantengono la rotazione quando si salva; lo stesso vale per l'UCS corrente, gli UCS con nome e una vista ruotata.

Il testo è disegnato in un unico carattere di tipo Helvetica. Un'etichetta che sta su una riga nel carattere più stretto del programma originale può andare a capo su due righe in CadCraft.

## Salvare

Ci sono tre modi per salvare. Ognuno scarica una copia.

- **Salva**: premere {{key:Mod+S}}, fare clic su {{ui:Salva}}, oppure digitare `SAVE` (anche `QSAVE`). Salva nel formato del disegno: DWG se si è aperto un DWG, DXF se si è aperto un DXF. Un DWG mantiene la versione con cui è entrato (un file 2018 viene salvato come 2018). Un nuovo disegno usa il formato e la versione DWG scelti per ultimi in Salva con nome in questo browser; se non si è mai scelto, DWG nel formato AutoCAD 2000.
- **Salva con nome**: premere {{key:Mod+Shift+S}}, fare clic su {{ui:Salva con nome}}, oppure digitare `SAVEAS`. La finestra {{ui:Salva una copia con nome}} offre {{ui:DWG}}, con un elenco {{ui:Versione}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, ciascuno con il nome di file che darà, e con il formato e la versione attuali del disegno già selezionati. Fare clic su {{ui:Salva}} per scaricare, oppure su {{ui:Annulla}} (o {{key:Esc}}) per non salvare nulla; la cronologia riporta allora "Non salvato." Ciò che si sceglie resta: {{key:Mod+S}} lo usa da quel momento per questo disegno e i nuovi disegni in questo browser partono con esso.
- **DXFOUT**: digitare `DXFOUT`. Scarica sempre una copia DXF R12 e il successivo {{key:Mod+S}} salva ancora nel formato proprio del disegno.

Il browser scarica `<nome del disegno>.dwg` o `<nome del disegno>.dxf`. Ogni salvataggio è un **nuovo download**; il file aperto non viene mai sovrascritto né modificato. La cronologia lo conferma, ad esempio "Salvata una copia come Plan.dwg (DWG (AutoCAD 2018)). Il file originale Plan.dxf non è stato modificato." Per un DXF riporta "(DXF R12, si apre in qualsiasi programma CAD)". Le righe sotto elencano tutto ciò che è cambiato lungo il percorso.

Quando CadCraft funziona nell'app desktop, il salvataggio funziona come negli altri programmi desktop: {{key:Mod+S}} riscrive il disegno nel file aperto, nel suo formato e nella sua versione, e la cronologia dice dove è stato salvato. {{ui:Salva con nome}} e le esportazioni mostrano la finestra di salvataggio del sistema, e un file `.dwg`, `.dxf` o `.ccsheets` su cui si fa doppio clic si apre in CadCraft.

Per un PDF, stampare invece (vedere sotto).

## Cosa mantiene e cosa cambia un DWG

CadCraft scrive il DWG da sé, dentro il browser, con la stessa libreria DWG con cui lo legge. Scegliere la versione in Salva con nome: il formato AutoCAD 2000 (versione file AC1015) si apre nel maggior numero di programmi, anche vecchi; i formati più recenti (2004, AC1018, fino al 2018, AC1032) mantengono anche i colori reali. Non viene caricato nulla e il salvataggio di un DWG funziona offline.

Ogni versione è verificata rileggendo i file salvati con i lettori DWG di altri tre programmi e con CadCraft stesso. Un DWG di CadCraft non è ancora stato aperto in AutoCAD stesso.

### Cosa mantiene un DWG

- Linee, archi, cerchi, ellissi, punti e polilinee con i loro segmenti ad arco.
- Testo su una riga con la sua giustificazione e il fattore di larghezza.
- Testo multilinea e a capo, come testo multilinea. L'altro programma lo manda a capo di nuovo con la stessa larghezza.
- Colori degli oggetti: DaLayer, DaBlocco, i 255 colori standard e i colori reali nel formato 2004 e successivi.
- Layer con colore, tipo di linea, spessore di linea e impostazioni di acceso, congelato, bloccato e stampa; i tipi di linea, gli spessori di linea e le scale dei tipi di linea propri degli oggetti, i motivi dei tipi di linea e la scala dei tipi di linea del disegno.
- Le unità del disegno e il formato delle lunghezze (decimale, piedi e pollici, frazioni…).
- Blocchi con il loro punto base e le definizioni di attributo, compresi quelli invisibili, costanti e predefiniti.
- Riferimenti a blocco con scala, rotazione e valori degli attributi.
- Riempimenti pieni e tratteggi a motivo con motivo, scala e angolo (le linee proprie del motivo, così gli altri programmi disegnano le stesse linee di CadCraft).
- Quote, come vere quote: gli altri programmi le rimisurano quando vengono stirate. Ciascuna mantiene le proprie impostazioni (altezza del testo, dimensione freccia, decimali, formato delle lunghezze) e il proprio testo, e porta la copia disegnata che ha ogni quota DWG.
- Tavole (layout): ogni tavola con il formato carta e le unità, ciò che vi è disegnato e i suoi viewport con vista e scala.
- Viste salvate.
- Linee di richiamo multiple, come linee di richiamo multiple.
- Nomi di layer e di blocco come digitati, in maiuscolo e minuscolo. (Il DXF R12 li scrive in maiuscolo.)

### Cosa cambia un DWG

Ognuna di queste voci è riportata nella cronologia dopo il salvataggio, quando riguarda il disegno.

| In CadCraft | Nel DWG salvato |
|---|---|
| Colori reali (scelti con il selettore di colore), nel formato 2000 | Il colore standard più vicino: il formato 2000 ha solo i 255. Salvare con nome come 2004 o successivo per mantenerli |
| Viste salvate di una tavola | Viste dello spazio carta: un DWG non dice quale tavola, quindi quando CadCraft riapre il file appartengono alla prima tavola |
| Testo multilinea con fattore di larghezza | Larghezza normale delle lettere: in un DWG il fattore di larghezza vale solo per il testo su una riga |
| Nomi di layer o di blocco con caratteri che il DWG non ammette | Modificati: un nome da un disegno collegato come `Base\|Walls` diventa `Base$0$Walls` (come lo chiama l'incorporazione di un disegno collegato), e gli altri caratteri diventano `_` |

### Perché R12 e cosa si converte

Quando si salva come DXF, CadCraft scrive DXF R12, la versione che ogni programma CAD sa aprire. È più vecchia di alcune funzioni, quindi alcune cose vengono scritte in forma più semplice:

| In CadCraft | Nel file R12 salvato |
|---|---|
| Testo multilinea | Un oggetto testo per riga |
| Ellissi | Polilinee che seguono l'ellisse |
| Tratteggi (da file aperti) | Solo i loro contorni |
| Colori reali (scelti con il selettore di colore) | Il colore standard più vicino |
| Spessori di linea e scale dei tipi di linea propri degli oggetti | Omessi: R12 non ha né gli uni né le altre (i tipi di linea vengono mantenuti) |
| Nomi di layer e di blocco | Scritti in maiuscolo; gli spazi e gli altri caratteri diventano `_` e i nomi vengono tagliati a 31 caratteri ("Title block" diventa `TITLE_BLOCK`) |
| Layer impostati per non essere stampati | Gli altri programmi li stamperanno (CadCraft ricorda l'impostazione quando il disegno ha una tavola) |
| Quote | Vere quote con il proprio blocco disegnato, così gli altri programmi le mostrano come le si vede |
| Linee di richiamo multiple | Le linee, la freccia e il testo che disegnano |
| Viste salvate | Mantenute, con nomi in maiuscolo; le viste di una tavola tornano sulla prima tavola |
| Più tavole | La prima tavola è lo spazio carta che ogni programma mostra; le altre sono mantenute come blocchi di nome `CCLAYOUT_1`, `CCLAYOUT_2` … che CadCraft ritrasforma in tavole quando apre il file |

La cronologia elenca ognuna di queste voci che ha riguardato il disegno.

:::tip
Per continuare a lavorare su un disegno per diversi giorni, salvare come DXF e aprire quel DXF la volta successiva. Tutto ciò che CadCraft sa disegnare sopravvive al viaggio di andata e ritorno, comprese le quote, i blocchi e tutte le tavole.
:::

## Disegni collegati (riferimenti esterni)

{{cmd:XATTACH}} (`XA`, oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Collega un disegno (riferimento esterno)}}) collega un altro DWG o DXF: scegliere il file, poi fare clic dove va ({{key:Enter}} lo mette in 0,0). Entra come un unico blocco con il nome del file, nella scala giusta quando i due disegni hanno unità diverse. I suoi layer e blocchi mantengono i propri nomi preceduti dal nome del collegamento — `Plan|Walls`, `Plan|Door` — così non si mescolano mai con i propri: i layer collegati si accendono e si spengono, si congelano o si bloccano come i propri. Un collegamento è di sola lettura: modificare l'altro disegno e ricaricarlo. Ciò che si imposta sui layer di un collegamento (colore, tipo di linea, spessore di linea, acceso/spento, congela, blocca, stampa) viene mantenuto quando lo si ricarica, quando si salva il disegno come DWG mentre il collegamento è ancora un collegamento e quando un altro disegno collega questo.

{{cmd:XREF}} (`XR`): `?` elenca i collegamenti (caricati o no, quale file, quanti riferimenti); `A` collega; `R` ricarica uno dal suo file (indicare di nuovo il file: il browser non può raggiungere da solo le cartelle); `B` incorpora uno (diventa blocchi e layer ordinari di nome `Plan$0$Walls`); `D` scollega uno (i suoi riferimenti e layer se ne vanno). Ognuno è un passo di annullamento.

{{cmd:XCLIP}} (`XC`) ritaglia riferimenti a blocco e collegamenti: selezionarli, `N` per un nuovo contorno, poi `R` e due angoli oppure `P` e i punti di un poligono ({{key:Enter}} lo chiude); `D` rimuove il ritaglio. Solo ciò che sta dentro viene mostrato e stampato, e il ritaglio si sposta con il riferimento. DWG e DXF 2000 mantengono i ritagli; DXF R12 salva il riferimento intero e lo dice. Quando si incorpora un collegamento che ha riferimenti ritagliati, {{cmd:XREF}} `B` chiede: `A` incorpora tutto, `C` mantiene solo la parte ritagliata di ogni riferimento (linee e archi vengono tagliati al contorno; testi e blocchi annidati restano quando il loro punto di inserimento è dentro).

Un disegno aperto può collegare file che CadCraft non vede: dice quanti non sono caricati. Usare {{cmd:XREF}}, `R` e indicare ogni file per vederli.

Quando si salva, un collegamento caricato viene **incorporato** nel file (gli altri programmi vedono blocchi e layer ordinari di nome `Plan$0$…`) e la cronologia lo dice. Un collegamento non caricato resta un collegamento al suo file, in DWG e DXF.

## Aprire in 3D

{{ui:Vista}} › {{ui:Altro}} › {{ui:Apri in ModelCraft}} ({{cmd:OPENIN3D}}) apre il disegno nell'app di modellazione 3D in una nuova scheda, come DWG, senza caricarlo. Le modifiche fatte lì restano lì; salvarle lì. La voce di menu compare solo dove quell'app può ricevere un disegno consegnato.

## Stampare un PDF

Premere {{key:Mod+P}}, fare clic su {{ui:Stampa}}, oppure digitare `PLOT`. Il PDF viene creato dentro il browser e scaricato, oppure aperto in una nuova scheda per la stampa. Vedere [Stampa in PDF](topic:plot-pdf).

## Dove vanno i file

Ogni salvataggio e ogni stampa è un download, quindi i file finiscono dove il browser mette i download: di solito la cartella Download. Per scegliere ogni volta una cartella, cambiare l'impostazione dei download nel browser; [Browser e computer](common:browsers) mostra dove.

Nulla di ciò che si apre o si salva viene inviato a noi. Vedere [Dove vanno i file](common:your-files).

## File di progetto PLN e PLA

CadCraft apre disegni DWG e DXF, non i file propri di Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Aprirne uno indica di cosa si tratta. In Archicad, salvare come DWG le viste o i layout necessari e aprire quelli qui, oppure esportare il modello come IFC e aprirlo in BimCraft. Dove BimCraft può prendere in carico il file, CadCraft offre {{ui:Apri in BimCraft}}.

## Se la pagina si chiude prima del salvataggio

CadCraft conserva una copia di ogni disegno modificato, solo in questo browser, un istante dopo che si smette di modificare. Se la scheda si chiude, il browser si ferma o il computer si riavvia prima del salvataggio, alla successiva apertura CadCraft chiede **Recuperare il lavoro?**: {{ui:Recupera}} riapre il disegno, non salvato, in una scheda propria. Salvare il disegno ne rimuove la copia. Vedere [Recuperare il lavoro](common:recover).

## Online e offline

Aprire, disegnare, salvare (DWG e DXF) e stampare avvengono tutti sul computer, quindi funzionano senza connessione una volta caricato CadCraft.

Per usare CadCraft senza alcuna connessione, fare clic su {{ui:Salva per l'uso offline}} nella barra in alto mentre si è online. L'etichetta conta ("Salvataggio di 40 su 212") e termina con "Pronto per l'uso offline". La copia salvata comprende il lettore DWG, circa 5 MB in tutto, quindi **anche i file DWG si aprono offline** una volta salvata. Fare di nuovo clic sul pulsante per {{ui:Salva di nuovo (scarica la versione più recente)}} o {{ui:Rimuovi la copia offline}}. "Salvataggio non riuscito" significa che alcuni file non sono stati scaricati: controllare la connessione e fare clic per riprovare. "Offline non disponibile" significa che questa finestra del browser non può conservare una copia (finestre private e alcuni computer gestiti).

Senza una copia salvata, il lettore DWG viene scaricato la prima volta che si apre un DWG dopo il caricamento della pagina, quindi aprire un DWG offline può non riuscire; i file DXF non ne hanno mai bisogno. Non ricaricare la pagina offline a meno che CadCraft non sia salvato.

Vedere [Lavorare offline](common:offline) per i dettagli.

:::offline
Si è offline. I disegni si salvano come DWG o DXF e si stampano normalmente, e i file DXF si aprono. I file DWG si aprono se CadCraft mostra "Pronto per l'uso offline", oppure se il lettore DWG è già stato caricato in questa scheda.
:::

## Vincoli nei file

I vincoli e i parametri (vedere [Vincolare un disegno](topic:constraints)) sono salvati sia in DWG sia in DXF. Ogni oggetto vincolato porta una piccola nota di CadCraft (dati estesi) e un blocco inutilizzato di nome `CADCRAFT_PARAMETRIC` contiene i vincoli e la tabella dei parametri. Gli altri programmi aprono il disegno normalmente e ignorano entrambi; possono eliminare il blocco inutilizzato quando eseguono la pulizia. Le note si riferiscono agli oggetti con una chiave propria, non con gli handle del file, quindi un programma che rinumera gli handle non le rompe. Quando un altro programma ha eliminato o modificato un oggetto vincolato, CadCraft elimina i vincoli su di esso all'apertura del file e dice quanti. Un file che non li ha si apre senza vincoli.

Si apre anche uno schizzo esportato da un modellatore di parti (`.json`): vedere [Spostare schizzi da e verso altri modellatori di parti](topic:solidworks-sketches).

## Non ancora disponibile

- Linee di richiamo multiple come oggetti linea di richiamo multipla in un DXF salvato (R12 non ne ha: vengono salvate come ciò che disegnano).
- Immagini in un DXF salvato (vengono salvate come i loro riquadri; il DWG le mantiene come immagini) e wipeout che nascondono ciò che sta sotto.
- Salvare una versione DXF più recente della 2000.
- Salvataggio nel cloud e sincronizzazione tra computer.

Vedere [Non ancora implementato](topic:not-built-yet) per l'elenco completo.
