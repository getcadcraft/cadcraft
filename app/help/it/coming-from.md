---
title: Passare da altri programmi di disegno
summary: Come comandi, tasti e abitudini noti si ritrovano in CadCraft, e le differenze che fanno inciampare chi disegna da tempo.
keywords: passaggio, differenze, migrare, abitudini, alias, input dinamico, pickfirst, pickadd, qsave, saveas, salva con nome, mtext, ctb, tracciamento polare, xref, scorciatoie da tastiera, familiari, copyclip, pasteclip, pasteorig, copybase, appunti
from: b58688e7
---

Se si è usato AutoCAD, o un programma costruito sullo stesso modello, gran parte di ciò che si conosce funziona anche qui: la riga di comando, gli alias come `L`, `C`, `TR` e `O`, Invio o Space per ripetere, la selezione a finestra e a intersezione, gli snap a oggetto su F3, Ortho su F8, lo spazio modello con layout e viewport. Questa pagina elenca ciò che corrisponde direttamente, e poi le differenze che sorprendono. Leggere la seconda parte anche se si scorre la prima.

## Cosa corrisponde direttamente

| Abitudine | In CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Stessi comandi, stessi alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Uguale |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Stessi comandi di quota |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` digitati nella riga di comando | Uguale, per le nuove quote |
| `B` per creare un blocco, `I` per inserire, `PU` per eliminare elementi inutilizzati | Uguale (elimina solo i blocchi inutilizzati) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` poi `E` o `W` | Uguale |
| Digitare `_LINE` o `-LAYER` da uno script o per abitudine | Il `_`, `-`, `.` o `'` iniziale viene ignorato |
| Invio o Space su un prompt vuoto ripete l'ultimo comando | Uguale |
| Esc annulla; un altro Esc cancella la selezione | Uguale |
| `@dx,dy`, `@d<a`, angoli digitati in senso antiorario a partire da est | Uguale |
| Finestra da sinistra a destra, intersezione da destra a sinistra, clic-clic; premere e trascinare per il lazo, Space scorre tra finestra / intersezione / recinto (LASSOMODE) | Uguale |
| Selezionare prima, poi il comando (sostantivo-verbo) | Uguale; un comando concluso cancella la selezione |
| `ALL` e `L` in Selezionare oggetti | Uguale |
| Shift+clic toglie dalla selezione | Uguale. Le impostazioni possono far sostituire la selezione con un clic, come fa PICKADD 0: vedere [Impostazioni di CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Stessi comandi e stessi tasti; l'incolla posiziona la copia dal suo angolo in basso a sinistra, come fa PASTECLIP |
| Snap a oggetto su F3, griglia su F7, Ortho su F8 | Stessi tasti |
| Doppio clic sulla rotellina per lo zoom estensione | Uguale |
| Il testo specchiato resta leggibile | Uguale (come con MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Uguale; su Mac funziona anche Command |

Il [Riferimento dei comandi](topic:commands) elenca ogni comando e alias.

:::tip
Se piace la barra multifunzione di AutoCAD, scegliere lo stile di menu {{ui:Disegno classico}} in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Menu, tasti e mouse}}: schede Home, Inserisci, Annota, Parametrico, Vista, Gestisci e Output sopra la stessa riga di comando, e il pulsante centrale fa pan mentre il clic destro equivale a Invio. Vedere [Menu, tasti e mouse](topic:menus-keys-and-mouse).
:::

La [mappa dei comandi](topic:command-map) elenca ogni comando di CadCraft con i suoi nomi brevi, e il [promemoria](topic:cheat-sheet) elenca i 40 più usati (anche come PDF di una pagina).

## Differenze che sorprendono

### I punti digitati sono assoluti

Con l'input dinamico attivo, l'altro programma tratta un `100,0` digitato come secondo punto come relativo. **La riga di comando di CadCraft no:** lì `x,y` è sempre misurato dall'origine. Con {{ui:Dinam.}} ({{key:F12}}) attivo, usare invece i suoi campi: distanza, {{key:Tab}}, angolo. Usare `@100,0` per "100 a destra dell'ultimo punto", oppure spostare il mirino nella direzione giusta e digitare un semplice `100`.

### Shift salta gli snap; non attiva Ortho

Tenere premuto Shift durante un clic ignora gli snap a oggetto per quel clic. Non attiva temporaneamente Ortho. Usare F8 o il pulsante {{ui:Ortho}}.

### Il clic destro è sempre Invio

Non esiste un menu del clic destro. Un clic destro nel disegno equivale a Invio: termina un comando, conclude una selezione o ripete l'ultimo comando. Durante uno spostamento con grip o un riquadro di selezione, annulla invece. Trascinare con il pulsante destro per fare pan.

### Nessun pan con Space

Space è Invio, quindi tenere premuto Space e trascinare non fa pan. Fare pan con il pulsante centrale o destro, oppure allontanare e riavvicinare lo zoom in un altro punto con la rotellina.

### Rifila ed Estendi

Rifila ed Estendi iniziano in modalità Rapida: ogni oggetto visibile è un bordo di taglio o un limite, il pezzo sotto il puntatore mostra cosa sparirà, un percorso trascinato rifila ogni pezzo che attraversa, e un oggetto che nulla attraversa viene cancellato. {{key:Shift}} passa da rifila a estendi. `O` passa alla modalità Standard (scegliere prima i bordi), `F` e `C` sono recinto e intersezione, `E` è EDGEMODE, `R` cancella. Non esiste l'opzione `P` (Proietta): CadCraft rifila nel piano del disegno.

### Raccordo e smusso

{{cmd:FILLET}} e {{cmd:CHAMFER}} hanno le opzioni già note: Annulla (U), Polilinea (P), Raggio (R) (o Distanza, Angolo e Metodo (E)), Rifila (T) e Multiplo (M), e Shift+clic per uno spigolo vivo. Un raccordo tra una polilinea e una linea aggiunge l'arco come oggetto a sé anziché unirlo alla polilinea, e gli angoli di polilinea accanto a un segmento d'arco restano come sono.

### Testo multilinea e testo su una sola riga

`T`, `MT` e `MTEXT` sono testi multilinea digitati sul posto, con larghezza, interlinea e allineamento; `DT` e `DTEXT` sono testi su una sola riga, come si conoscono. Non ci sono stili di testo né colonne, e non è ancora possibile digitare una formattazione nel testo (grassetto, frazioni impilate); la formattazione che arriva da un file viene conservata, disegnata e salvata (vedere [Aggiungere testo ed etichette](topic:text#formatting-inside-paragraph-text-from-other-programs)). Tutto viene disegnato con un carattere di tipo Helvetica.

### Salva significa «scarica una copia»

{{key:Mod+S}}, `SAVE` e `QSAVE` scaricano una copia nel formato del disegno: un DWG aperto si salva come DWG, un DXF come DXF. Nel browser non viene sovrascritto nulla sul posto, e i file aperti non vengono mai modificati. In CadCraft Studio, {{key:Mod+S}} riscrive il file aperto.

`SAVEAS` ({{key:Mod+Shift+S}}) è una piccola finestra di dialogo, non un esploratore di file: scegliere {{ui:DWG}} (con la sua {{ui:Versione}}, da AutoCAD 2000 a 2018), {{ui:DXF R12}} o {{ui:DXF 2000}} e fare clic su {{ui:Salva}}. Il browser decide dove va lo scaricamento. `DXFOUT` scarica sempre DXF R12.

Un DWG aperto si salva nella versione in cui è arrivato; un disegno nuovo si salva nel formato AutoCAD 2000, salvo che non se ne scelga un altro. Tavole, quote e motivi di tratteggio vengono conservati. Vedere [File: cosa si apre, cosa si salva](topic:files#saving).

### Layer: più semplici

- Ogni modifica di layer (acceso, congela, blocca, colore, stampa, tipo di linea, spessore, layer corrente) è un solo passo di annullamento.
- Spento e congela hanno lo stesso effetto in CadCraft.
- I layer che un disegno congela in un viewport restano congelati lì: a video, nelle stampe e quando lo si salva come DWG o DXF.
- Un viewport che mostra un layer con il proprio colore, tipo di linea, spessore o trasparenza continua a farlo a video, nelle stampe e in un DWG salvato (il DXF conserva le impostazioni proprie del layer; il salvataggio lo segnala). La modifica di questi valori per viewport non è ancora implementata.
- Non esiste un gestore delle proprietà dei layer né stati dei layer; {{cmd:RENAME}}, {{cmd:LAYMRG}} e {{cmd:LAYDEL}} rinominano, uniscono ed eliminano i layer. Tipi di linea e spessori si impostano nel pannello di destra (vedere [Spessori e tipi di linea](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} e {{cmd:LAYMCUR}} funzionano indicando gli oggetti.
- Il salvataggio in DXF R12 scrive i nomi dei layer in maiuscolo. Un DWG li conserva come li si è digitati.

### Stili di quotatura

`DIMSTYLE` apre un gestore per gli stili con nome (nuovo, modifica, imposta corrente, confronta, applica). `DIMSCALE` e le altre impostazioni continuano a modificare ciò che usano le nuove quote, e ogni quota conserva le proprie dimensioni, che si possono cambiare anche nel pannello Proprietà. Lo stile corrente non viene salvato nel file. Le quote seguono il formato delle lunghezze del disegno (decimale, oppure piedi e pollici con {{cmd:UNITS}}), oppure il proprio {{ui:Formato}}. Vedere [Impostare le dimensioni delle quote](topic:dimension-settings).

### La stampa è più semplice

Le tabelle degli stili di stampa funzionano per colore, come fanno i file CTB: Monocromatico, Colore e Scala di grigi sono integrate, è possibile crearne di proprie, e ogni tavola conserva la propria tabella. La lettura dei file CTB è costruita sulla descrizione pubblicata ed è stata provata solo su file creati da noi; le tabelle degli stili di stampa con nome (STB) e le impostazioni pagina non sono ancora implementate. Le linee vengono stampate con il loro spessore, le altre con uno spessore penna unico. Le tavole si stampano in scala 1:1 sul proprio formato carta; il modello si stampa a una scala scelta o adattata. Vedere [Stampa in PDF](topic:plot-pdf).

### Lavorare all'interno di un viewport

Come si conosce: doppio clic dentro un viewport (o digitare {{cmd:MSPACE}}) per lavorare sul modello attraverso di esso, e doppio clic fuori (o {{cmd:PSPACE}}) per tornare alla tavola. All'interno, pan e zoom cambiano ciò che mostra il viewport, a meno che la sua visualizzazione non sia bloccata; in tal caso spostano la tavola. Fare clic su una scheda sotto il disegno esce anche dal viewport. Vedere [Lavorare sul modello attraverso un viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Tracciamento e input dinamico sì, snap alla griglia non ancora

La griglia serve solo per guardare: i punti non vi si agganciano (non esiste una modalità di snap F9). Il tracciamento polare ({{key:F10}}, passo impostato con {{cmd:POLARANG}}) e il tracciamento da snap a oggetto ({{key:F11}}: sostare su un punto di snap per acquisirlo) funzionano come si conosce; vedere [Agganciarsi agli oggetti](topic:object-snaps#polar-tracking). L'input dinamico ({{key:F12}}) mostra distanza e angolo (o X e Y) accanto al mirino; vedere [Immissione di coordinate e distanze](topic:coordinate-entry#dynamic-input).

### Piedi e pollici

Scegliere {{ui:Formato delle lunghezze}} {{ui:Architettura}} oppure {{ui:Ingegneria}} (o digitare {{cmd:UNITS}}) e digitare le lunghezze come si è abituati: `12'6"`, `12'6-1/2"`. Usare un trattino, non uno spazio, prima di una frazione: {{key:Space}} equivale a {{key:Enter}}. Impostare anche {{ui:Unità}} su {{ui:Pollici}}, così le tavole e le stampe offrono scale architettoniche. Il formato viene conservato nei file DWG e DXF salvati. Vedere [Piedi e pollici](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copia e incolla restano in CadCraft

{{key:Mod+C}}, {{key:Mod+X}} e {{key:Mod+V}} copiano, tagliano e incollano oggetti all'interno di un disegno, tra disegni e tra schede di CadCraft nello stesso browser. Gli Appunti sono quelli di CadCraft: non è possibile incollare oggetti di CadCraft in un altro programma, né oggetti di un altro programma in CadCraft. Incollando da un disegno in altre unità non si riscala: usare dopo {{cmd:SCALE}}. {{key:Mod+D}} è un duplicato che si sposta con il puntatore, un'aggiunta di CadCraft. Vedere [Copia, incolla e duplica](topic:copy-paste).

### Tasti del browser non utilizzabili

Una pagina web non può prendere {{key:Mod+N}}, {{key:Mod+W}} o {{key:Mod+T}} dal browser: aprono e chiudono finestre e schede. Usare il pulsante {{ui:Nuova}} oppure digitare `NEW`. Vedere [Tasti, mouse e trackpad](common:keys).

## Comandi che potresti cercare e non sono ancora qui

{{cmd:TABLE}} non è ancora implementato. Digitandolo compare "Comando sconosciuto". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} e {{cmd:XREF}} sono implementati.) [Non ancora implementato](topic:not-built-yet) elenca cosa fare al suo posto oggi.
