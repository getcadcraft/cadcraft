---
title: Stampa in PDF
summary: Creare un PDF di una tavola a dimensione reale, oppure del modello in scala o adattato alla carta, stamparlo dal browser o da Studio, oppure salvarlo come PNG o SVG.
keywords: stampa, stampante, copie, png, svg, immagine, pdf, pubblica, exportpdf, carta, scala, monocromatico, scala di grigi, bianco e nero, spessore di linea, penna, impostazioni di pagina, finestra di stampa, stile di stampa, tabella degli stili di stampa, ctb, dipendente dal colore, retinatura, plotstyles, stylesmanager
from: a4752f83
---

## Cosa si crea

Un PDF di una tavola a dimensione reale, poi un PDF rapido del modello in scala 1:100, e una stampa cartacea.

Il PDF viene creato nel browser; non viene caricato nulla. È un PDF vettoriale: le linee restano nitide a qualsiasi zoom, e il testo può essere cercato.

## Stampare una tavola

1. Fare clic sulla scheda della tavola sotto il disegno.
2. Premere {{key:Mod+P}}, fare clic su {{ui:Stampa}}, oppure digitare `PLOT` e premere Invio.

Si apre la finestra di dialogo {{ui:Stampa in PDF}}. Indica quale tavola viene stampata e su quale carta, "a dimensione reale … come appare". L'anteprima a destra mostra la tavola.

3. In {{ui:Stile di stampa}}, scegliere {{ui:Monocromatico (nero)}} per linee nere, {{ui:Colore (come disegnato)}} per mantenere i colori, {{ui:Scala di grigi}}, oppure una tabella propria (vedi [Tabelle degli stili di stampa](topic:plot-pdf#plot-style-tables)). La tavola mantiene questa scelta: viene salvata con il disegno.
4. In {{ui:Spessore di linea}}, scegliere una larghezza di penna da 0.13 mm a 0.70 mm. Le linee con lo spessore predefinito vengono stampate con questa larghezza; quelle con uno spessore proprio (del layer o dell'oggetto, oppure della penna del loro colore nella tabella) vengono stampate con quello.
5. Fare clic su {{ui:Scarica PDF}}.

Il browser scarica un PDF con il nome del disegno e della tavola, ad esempio `Drawing1-A-101 Plan.pdf`. La cronologia riporta la sua dimensione in byte e il formato della carta in millimetri.

Una tavola viene sempre stampata in scala 1:1 sulla propria carta. Per cambiare la carta, cambiarla sulla tavola stessa (vedi [Impostare una tavola](topic:sheets-and-viewports)). I layer impostati per non essere stampati vengono esclusi, così come i bordi dei viewport.

## Tutte le tavole in un unico PDF

Con due o più tavole, la finestra di dialogo {{ui:Stampa in PDF}} ha {{ui:Tutte le tavole in un unico PDF}}; oppure digitare {{cmd:PUBLISH}}. Premere Invio include tutte le tavole; `S` (Alcune) chiede i loro nomi, separati da virgole. Viene scaricato un unico PDF con una pagina per tavola, nell'ordine delle schede, ciascuna con il proprio formato di carta, e un segnalibro per tavola con il suo nome. Ogni tavola viene stampata con la propria tabella degli stili di stampa; una tavola senza una tabella scelta usa quella scelta per ultima nella finestra di dialogo e lo spessore di penna scelto per ultimo.

## Stampare il modello

1. Fare clic sulla scheda {{ui:Modello}}.
2. Premere {{key:Mod+P}}.

La finestra di dialogo indica che stampa il modello su un foglio di carta e mostra altre impostazioni:

3. In {{ui:Area}}, scegliere cosa stampare:
   - {{ui:Tutto (estensione)}}: l'intero disegno.
   - {{ui:Ciò che è sullo schermo}}: l'area visibile nel disegno in questo momento.
   - {{ui:Una finestra…}}: poi fare clic su {{ui:Scegli}}, fare clic su due angoli del disegno, e la finestra di dialogo torna visibile.
4. In {{ui:Carta}}, scegliere un formato: da ISO A4 ad A0, Letter, Legal, Tabloid e ANSI C e D, oppure ARCH C, D ed E.
5. In {{ui:Orientamento}}, scegliere {{ui:Orizzontale}} o {{ui:Verticale}}.
6. In {{ui:Scala}}, scegliere {{ui:Adatta alla carta}} oppure una scala come `1:100`.

Sotto le impostazioni, una riga indica la scala e le dimensioni che l'area assume sulla carta. Se è più grande della carta, lo segnala: i bordi vengono tagliati. Scegliere una scala più piccola, una carta più grande oppure {{ui:Adatta alla carta}}.

7. Fare clic su {{ui:Scarica PDF}}.

Una stampa del modello lascia un margine di 5 mm lungo il bordo, perché la maggior parte delle stampanti non può stampare fino al bordo. {{ui:Adatta alla carta}} dà una scala irregolare (la cronologia e la riga informativa indicano "(adattato)"); scegliere una scala standard quando il disegno deve misurare con precisione.

:::note
Le scale sono riferite alle unità reali. Perché 1:100 sia corretto, impostare {{ui:Unità}} in {{ui:Impostazioni correnti}} sul valore corrispondente a un'unità di disegno. Un disegno senza unità viene considerato in millimetri.
:::

## Tabelle degli stili di stampa

Una tabella degli stili di stampa indica come viene stampato ciascuno dei 255 colori standard del disegno, come fa una tabella degli stili di stampa dipendenti dal colore (CTB) in altri programmi CAD. Ne sono integrate tre:

| Tabella | Stampa |
|---|---|
| {{ui:Colore (come disegnato)}} | Ogni oggetto nel proprio colore. |
| {{ui:Monocromatico (nero)}} | Ogni colore in nero: la scelta abituale per i disegni. |
| {{ui:Scala di grigi}} | Ogni colore come il proprio grigio, così che i colori restino distinti su una stampante in bianco e nero. |

Per crearne una propria, ad esempio linee rosse spesse e nere, tutto il resto sottile:

1. Nella finestra di dialogo {{ui:Stampa in PDF}}, fare clic su {{ui:Modifica tabelle…}} (oppure digitare {{cmd:PLOTSTYLES}}).
2. Fare clic su {{ui:Nuova}} e digitare un nome, come `office`, in {{ui:Nome}}. Per partire da una tabella integrata, sceglierla in {{ui:Tabella}} e fare clic su {{ui:Copia}}.
3. Fare clic su un colore nella griglia. {{key:Shift}}+clic seleziona un intervallo di colori, {{key:Mod}}+clic ne aggiunge un altro, e {{ui:Seleziona tutti i colori}} li seleziona tutti.
4. Impostare come vengono stampati i colori selezionati:
   - {{ui:Stampa in}}: {{ui:Il proprio colore}}, {{ui:Nero}} o {{ui:Altro colore…}}.
   - {{ui:Come grigio}}: il colore come il proprio grigio.
   - {{ui:Inchiostro (%)}}: 100 è inchiostro pieno, 50 è a metà strada verso il bianco (retinatura), per le linee di sfondo.
   - {{ui:Spessore di linea}}: {{ui:Il proprio spessore di linea}} mantiene lo spessore dell'oggetto o del layer; un valore stampa ogni linea di quel colore con quella larghezza.
   - {{ui:Tipo di linea}}: stampa ogni linea di quel colore con un altro tipo di linea (ad esempio tutto il rosso tratteggiato); {{ui:Usa il tipo di linea dell'oggetto}} le lascia invariate.
   - {{ui:Terminazione della linea}} e {{ui:Giunzione delle linee}}: terminazioni piatte, quadrate o arrotondate, e angoli a punta, smussati o arrotondati (arrotondati, come in precedenza, quando non si imposta nulla).
   - {{ui:Stile di riempimento}}: un riempimento pieno di quel colore viene stampato con linee di tratteggio (barre orizzontali o verticali, inclinate, incrociate, rombi, punti quadrati) invece che con inchiostro, per stampanti e planimetrie dove l'inchiostro pieno risulta troppo pesante.

   La tabella ha altre due impostazioni: {{ui:Spessori di linea}}, le larghezze che conosce (una linea stampata va alla più vicina), e {{ui:Scala del tipo di linea}}, un fattore sulle tratteggiature di ogni tipo di linea che non è ISO.
5. Fare clic su {{ui:Fine}}. La tabella viene conservata nel disegno e la tavola (o il modello) ora viene stampata con essa. {{ui:Annulla}} annulla le modifiche.

Un colore con una propria penna mostra un punto nell'angolo, e un punto in basso quando imposta uno spessore di linea. Un oggetto con un colore reale (non uno dei 255) usa la penna del colore standard più vicino.

Il disegno conserva le sue tabelle e la scelta di ciascuna tavola quando si salva come DWG (dal 2000 al 2018) o DXF (R12 o 2000), e si riapre con esse. Altri programmi vedono il nome nell'impostazione di pagina di ciascuna tavola (`office.ctb`), non la tabella stessa. Un disegno proveniente da un altro programma la cui impostazione di pagina indica una tabella come `monochrome.ctb` viene stampato con la tabella integrata di quel nome; per qualsiasi altro nome la finestra di dialogo indica che il disegno non la contiene e stampa i colori del disegno finché non si sceglie una tabella o non se ne crea una con quel nome.

Per usare una tabella in un altro disegno, fare clic su {{ui:Esporta}} in {{ui:Tabelle degli stili di stampa}} (salva `office.plotstyle.json`), poi su {{ui:Importa…}} nell'altro disegno. {{ui:Importa…}} accetta anche un file `.ctb` di un altro programma: viene letto dalla descrizione pubblicata del formato e **non è ancora stato verificato su un file reale**. Vengono letti il colore, la retinatura e lo spessore di ogni colore; scala di grigi, numeri di penna, tipi di linea, terminazioni e giunzioni delle linee e stili di riempimento non vengono letti, e una tabella con nome (`.stb`) viene rifiutata. Confrontare la prima stampa con quanto atteso, e inviarci il file se è errato.

## Stampa

**Nel browser**, fare clic su {{ui:Stampa…}}. CadCraft crea il PDF e apre per esso la finestra di stampa del browser. Scegliere lì "Dimensioni effettive" o 100% (non "Adatta") per mantenere la scala. Se il browser non riesce a stampare dalla pagina, il PDF si apre invece in una nuova scheda: stamparlo da lì con {{key:Mod+P}}.

Si può anche fare clic su {{ui:Apri per stampare}}: il PDF si apre in una nuova scheda del browser e lo si stampa da lì.

:::safari
Safari può mostrare il PDF e attendere che si usi **File**, poi **Stampa**.
:::

Se il browser blocca la nuova scheda, CadCraft scarica invece il PDF e lo indica nella cronologia. Consentire i pop-up per il sito per aprirlo in una scheda la prossima volta.

**In CadCraft Studio**, la finestra {{ui:Stampa in PDF}} elenca le stampanti del computer. Scegliere la {{ui:Stampante}}, la {{ui:Carta nella stampante}} e il numero di {{ui:Copie}}, poi fare clic su {{ui:Stampa…}}. {{ui:Uguale alla stampa}} sceglie la carta della stampante che ha le dimensioni della tavola (A3 per una tavola A3); quando la stampante non ne ha, usa la propria carta e adatta la tavola ad essa. Su Windows la tavola viene inviata come immagine a 300 dpi, perché Windows non può stampare un PDF senza un programma PDF; su Linux e macOS il PDF stesso va al servizio di stampa del sistema. Nulla lascia il computer.

## File immagine e SVG

{{ui:Scarica PNG}} salva la tavola stampata come immagine a 300 dpi (ridotta solo quando una tavola molto grande risulterebbe più grande di quanto il browser possa generare; la cronologia lo indica). {{ui:Scarica SVG}} la salva come disegno scalabile in millimetri, con le linee e il testo della stampa. Entrambi provengono dalla stessa stampa del PDF, con lo stesso stile di stampa, spessore di linea e area. Le immagini inserite nel disegno sono presenti solo nel PDF; la cronologia indica quante ne sono state escluse.

## Immagini

Le immagini vengono stampate alla loro risoluzione, sotto le linee. {{ui:Immagini}} nella finestra di dialogo le limita a 600, 300 o 150 dpi per un file più piccolo. Linee, testo e tratteggi restano sempre nitidi (vettoriali), e la trasparenza resta trasparenza. Vedi [Immagini in un disegno](topic:pictures).

## Impostazioni memorizzate

La finestra di dialogo ricorda l'ultima carta, l'orientamento, la scala e lo spessore di linea usati in questo browser. La tabella degli stili di stampa viene conservata con ciascuna tavola nel disegno; una tavola senza tabella scelta parte da quella scelta per ultima. Una finestra scelta viene mantenuta fino al ricaricamento della pagina; dopo, la finestra di dialogo parte da {{ui:Tutto (estensione)}}.

## Errori comuni

- **Il PDF è vuoto o i pulsanti sono grigi.** Non c'è nulla da stampare (un modello vuoto), oppure è scelto {{ui:Una finestra…}} e non è ancora stata scelta alcuna finestra ("Scegliere la finestra da stampare.").
- **Nel PDF il testo mostra "?".** Il testo in polacco, ceco, cirillico, greco e le altre scritture d'Europa viene stampato come è: il PDF contiene allora le lettere necessarie (dal font Liberation Sans, che ha le larghezze di Helvetica), e il testo può essere comunque selezionato e cercato. Anche il testo in cinese, giapponese e coreano viene stampato come è: quando un disegno lo contiene, la stampa scarica un font più grande (circa 10 MB, una sola volta) e il PDF contiene solo i caratteri usati, quindi serve una connessione la prima volta (non in una copia offline salvata in precedenza). L'ebraico viene stampato con lo stesso font incorporato del testo latino, e il testo arabo, persiano e urdu fa scaricare alla stampa un altro font (meno di 1 MB, una sola volta); le righe da destra a sinistra vengono ordinate e le loro lettere unite (vedi [Testo](topic:text)). Gli ideogrammi rari al di fuori di quei font, e le scritture che richiedono una composizione complessa come l'hindi, vengono stampati come "?", e la cronologia li conta.
- **Tutte le linee hanno lo stesso spessore.** Il loro spessore è quello predefinito: assegnare a layer o oggetti uno {{ui:Spessore di linea}} nel pannello destro (vedi [Spessori di linea e tipi di linea](topic:units-papers-scales#line-weights-and-linetypes)), oppure impostare gli spessori per colore in una [tabella degli stili di stampa](topic:plot-pdf#plot-style-tables).
- **"(non presente in questo disegno)" accanto allo stile di stampa.** Il disegno proviene da un altro programma e indica una tabella che non include. Scegliere una delle tabelle, oppure crearne una con quel nome.
- **Linee di costruzione stampate.** Impostare il loro layer per non essere stampato: fare clic sul relativo pulsante stampante nel pannello {{ui:Layer}}.
- **La stampa ha la dimensione sbagliata.** La stampante l'ha ridimensionata. Stampare a dimensione effettiva.
- **{{key:Mod+P}} ha aperto la finestra di stampa del browser.** Il cursore era in un campo nel pannello destro, oppure era aperta un'altra finestra di dialogo. Premere Invio o {{key:Esc}} per uscire dal campo, poi riprovare, oppure fare clic su {{ui:Stampa}}.
- **{{key:Mod+P}} non ha fatto nulla.** È in esecuzione un comando. Premere prima {{key:Esc}}.
