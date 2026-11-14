---
title: Lo schermo di CadCraft
summary: Un giro di ogni barra, pannello e scheda dell'app di disegno, con il nome che ha sullo schermo.
keywords: schermo, interfaccia, barra degli strumenti, barra multifunzione, pannelli, riga di comando, barra di stato, schede, schede dei layout, proprietà, pannello dei layer, guida
from: b5a33388
---

Lo schermo ha sette parti. Dall'alto in basso: la barra dell'app, la barra degli strumenti, l'area di disegno con un pannello per lato, le schede sotto il disegno, la riga di comando e la barra di stato.

## La barra dell'app

La barra sottile in cima appartiene al sito, non al disegno. Mostra il marchio CadCraft, il nome dell'app, la versione in uso, un link alla pagina dell'app, un pulsante {{ui:Guida}} (o {{key:F1}}), un pulsante {{ui:Salva per l'uso offline}}, un pulsante {{ui:Schermo intero}} e due pulsanti di tema, {{ui:Carta}} e {{ui:Modello}}.

Il pulsante {{ui:Impostazioni}} (ingranaggio) contiene le impostazioni di CadCraft e quelle condivise da tutte le app: vedere [Impostazioni di CadCraft](topic:settings).

{{ui:Salva per l'uso offline}} conserva in questo browser una copia di CadCraft, compreso il suo lettore DWG, così si apre senza connessione. L'etichetta mostra lo stato: "Salvataggio di N su M", "Pronto per l'uso offline", "Salvataggio non riuscito" oppure "Offline non disponibile". Vedere [Lavorare offline](common:offline).

:::note
I pulsanti {{ui:Carta}} e {{ui:Modello}} nella barra dell'app cambiano solo i colori dello schermo: {{ui:Carta}} è un tema chiaro, {{ui:Modello}} uno scuro. Non hanno nulla a che vedere con la scheda {{ui:Modello}} sotto il disegno, che passa dal disegno alle sue tavole.
:::

Il pulsante {{ui:Schermo intero}}, o {{key:Ctrl+Shift+F}} (il tasto Control su ogni computer, Mac compreso), passa in sequenza tre modalità: normale, schermo intero e schermo intero con le barre nascoste. Con le barre nascoste, portare il puntatore sul bordo superiore dello schermo per farle tornare.

## La barra degli strumenti

Sotto la barra dell'app c'è la barra degli strumenti. Ogni pulsante esegue un comando, esattamente come se fosse digitato, quindi la riga di comando pone le stesse domande in entrambi i casi. Passare il puntatore su un pulsante per vedere il suo alias di comando. I gruppi sono:

| Gruppo | Pulsanti |
|---|---|
| File | {{ui:Nuovo}}, {{ui:Apri}}, {{ui:Salva}}, {{ui:Salva con nome}}, {{ui:Stampa}} |
| Disegna | {{ui:Linea}}, {{ui:Polilinea}}, {{ui:Cerchio}}, {{ui:Arco}}, {{ui:Rettangolo}}, {{ui:Poligono}}, {{ui:Ellisse}}, {{ui:Testo}}, {{ui:Paragrafo}}, {{ui:Tratteggio}} e {{ui:Altro}}: {{ui:Punto}}, {{ui:Linea di costruzione}} e {{ui:Semiretta}} (vedere [Linee di costruzione e semirette](topic:construction-lines)) |
| Modifica | {{ui:Sposta}}, {{ui:Copia}}, {{ui:Ruota}}, {{ui:Scala}}, {{ui:Specchio}}, {{ui:Stira}}, {{ui:Offset}}, {{ui:Rifila}}, {{ui:Estendi}}, {{ui:Raccordo}}, {{ui:Smusso}}, {{ui:Scomponi}}, {{ui:Cancella}} e {{ui:Altro}}: {{ui:Serie}}, {{ui:Unisci}}, {{ui:Copia proprietà}}, {{ui:Interrompi}} e {{ui:Allunga}} |
| Annotazioni | {{ui:Lineare}}, {{ui:Allineata}}, {{ui:Angolo}}, {{ui:Raggio}}, {{ui:Diametro}} (quote), {{ui:Richiamo}} (linea di richiamo multipla) e {{ui:Altro}}: {{ui:Quota continua}}, {{ui:Quota di base}} e {{ui:Nuvola di revisione}} |
| Parametrico | {{ui:Auto}}, {{ui:Vincola}}, {{ui:Quota}}, {{ui:Parametri}} e {{ui:Altro}} con ogni vincolo (vedere [Vincolare un disegno](topic:constraints)) |
| Blocchi | {{ui:Crea}}, {{ui:Inserisci}}, {{ui:Libreria}} e {{ui:Altro}}: {{ui:Modifica blocco}} e {{ui:Definisci attributo}} |
| Tavole | {{ui:Nuova tavola}}, {{ui:Viewport}} |
| Modifica | {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}} (negli Appunti), {{ui:Incolla}} e {{ui:Altro}}: un menu con {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica e sposta}}, {{ui:Elimina}}, {{ui:Seleziona tutto}}, {{ui:Non selezionare nulla}}, {{ui:Selezione rapida}}, {{ui:Seleziona simili}} e {{ui:Trova e sostituisci}}, ciascuno con il proprio tasto |
| Vista | {{ui:Estensione}}, {{ui:Finestra}}, {{ui:Precedente}} e {{ui:Altro}}: {{ui:Misura distanza}}, {{ui:Area}}, {{ui:Misura (raggio, angolo …)}} e lo schermo diviso: {{ui:Dividi affiancate}}, {{ui:Dividi impilate}}, {{ui:Quattro riquadri}}, {{ui:Un riquadro}} (vedere [Dividere lo schermo](topic:split-screen)), e {{ui:Ruota la vista di 90° a sinistra}}, {{ui:Ruota la vista di 90° a destra}}, {{ui:Torna al globale}} (vedere [Ruotare la vista](topic:ucs-and-turned-view)) |

{{ui:Copia}} nel primo gruppo {{ui:Modifica}} (quello con {{ui:Sposta}}) è il comando {{cmd:COPY}} (punto base, poi dove va ogni copia); {{ui:Copia}} nel secondo gruppo {{ui:Modifica}} (quello con {{ui:Annulla}}) mette gli oggetti negli Appunti per {{ui:Incolla}}. Vedere [Copiare, incollare e duplicare](topic:copy-paste). Il pulsante del comando in esecuzione resta evidenziato fino al termine del comando. I suggerimenti indicano le scorciatoie di Windows ("Ctrl+O"); su Mac funziona anche {{key:Mod+O}}.

Su una finestra bassa (ad esempio un portatile con lo schermo scalato al 125 % o più) la barra degli strumenti non toglie mai spazio al disegno: quando il disegno avrebbe troppa poca altezza, i pulsanti perdono le parole sotto le icone e i nomi dei gruppi (passare il puntatore su un pulsante per il suo nome) e, se ancora non basta, la barra diventa una riga che scorre di lato. Una finestra più alta riporta le parole.

## Il pannello a sinistra

Il pannello a sinistra ha tre sezioni.

- **{{ui:Layer}}.** Ogni layer del disegno, con un punto pieno su quello corrente. Fare clic su un nome per rendere corrente quel layer. Ogni riga ha un campione di colore (fare clic per scegliere un colore) e quattro pulsanti: acceso/spento (occhio), congela (fiocco di neve), blocca (lucchetto) e stampa (stampante). {{ui:Nuovo layer}} apre una finestra per aggiungerne uno. Vedere [Organizzare un disegno con i layer](topic:layers).
- **{{ui:Blocchi}}.** I blocchi definiti nel disegno, quante volte è usato ciascuno e un pulsante {{ui:Inserisci}} per ognuno. Vedere [Creare e inserire blocchi](topic:blocks).
- **{{ui:Disegno}}.** Informazioni sul file aperto: nome (con "(modificato)" quando ci sono modifiche non salvate), formato, dimensione, unità, numero di oggetti, layer, blocchi e tavole. Dopo l'apertura di un file, una finestra "Informazioni su questo file" elenca tutto ciò che CadCraft non ha potuto mostrare o ha dovuto convertire.

## L'area di disegno

Il centro dello schermo è il disegno. Il puntatore è un mirino. Quando CadCraft richiede un punto, un piccolo indicatore e un'etichetta ("Punto finale", "Punto medio") mostrano dove cadrà uno snap a oggetto. Quando richiede oggetti, il mirino ha un riquadro di selezione e gli oggetti sotto di esso si illuminano.

Quando il disegno è vuoto, una scheda "Inizia a disegnare" mostra alcuni primi comandi. Scompare appena si esegue un comando o si apre un file. È possibile rilasciare un file DWG o DXF in un punto qualsiasi di quest'area per aprirlo.

## Le schede sotto il disegno

Sotto il disegno ci sono le schede: prima {{ui:Modello}}, poi {{ui:3D}}, poi una scheda per ogni tavola (layout), poi un pulsante {{ui:+}}.

- {{ui:Modello}} è il disegno stesso, a grandezza naturale, in unità di disegno.
- {{ui:3D}} mostra il disegno appoggiato al suolo e i solidi ricavati da esso. Finché è visibile, la barra degli strumenti ha un gruppo {{ui:3D}} al posto dei gruppi del disegno. Vedere [Modellare in 3D](topic:3d-solids).
- Ogni scheda di tavola è un foglio di carta con un cartiglio e viewport sul modello. Ciò che si disegna lì è in unità di carta (millimetri o pollici). Fare doppio clic dentro un viewport per lavorare sul modello attraverso di esso (vedere [Lavorare sul modello attraverso un viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Un nome di tavola lungo viene accorciato sulla scheda; passare il puntatore sulla scheda per il nome completo. Con molte tavole, {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Schede delle tavole}} › {{ui:Solo numeri di tavola}} mostra sulla scheda solo il numero di ciascuna tavola (A-101).
- {{ui:+}} crea una nuova tavola con un riquadro, un cartiglio e un viewport. È la stessa cosa del comando {{cmd:LAYOUT}}.
- Fare doppio clic su una scheda di tavola per rinominarla. Con una scheda attiva, {{key:Left}} e {{key:Right}} passano da una scheda all'altra.

Ogni scheda mantiene il proprio zoom e pan. Vedere [Preparare una tavola](topic:sheets-and-viewports).

## Il pannello a destra: Proprietà

Il pannello a destra cambia in base a ciò che è selezionato.

- **Nulla di selezionato, nella scheda {{ui:Modello}}:** l'intestazione riporta {{ui:Impostazioni correnti}}. Qui si impostano {{ui:Layer}}, {{ui:Colore}} e {{ui:Altezza del testo}} per i nuovi oggetti, le {{ui:Unità}} del disegno e le dimensioni delle nuove quote ({{ui:Altezza del testo}}, {{ui:Dimensione freccia}}, {{ui:Decimali}}, {{ui:Scala complessiva}}).
- **Nulla di selezionato, su una tavola:** l'intestazione riporta "Tavola:" e il nome della tavola. È possibile rinominare la tavola, cambiarne {{ui:Carta}} e {{ui:Orientamento}}, {{ui:Stampa questa tavola}} o {{ui:Elimina questa tavola}}. Le impostazioni per i nuovi oggetti seguono sotto.
- **Un oggetto selezionato:** il suo tipo come intestazione (Linea, Cerchio, Testo, Quota, Viewport …), poi il suo layer, colore e geometria. Digitare un nuovo valore e premere {{key:Enter}} per cambiarlo.
- **Più oggetti selezionati:** quanti sono, e il {{ui:Layer}} e il {{ui:Colore}} comuni. Cambiare l'uno o l'altro li cambia tutti. "Variabile" significa che differiscono.

Vedere [Modificare con i grip e Proprietà](topic:grips-and-properties).

Sotto, il pannello {{ui:Parametri}} si apre quando si sceglie {{ui:Parametri}} o si digita {{cmd:PARAMETERS}}: ogni parametro e vincolo dimensionale in un'unica tabella. Vedere [Usare parametri ed equazioni](topic:parameters).

## La riga di comando

In basso c'è la riga di comando: la cronologia di ciò che si è fatto e, sotto, il prompt.

- L'etichetta del prompt riporta `Comando:` quando non è in esecuzione nulla. Mentre un comando è in esecuzione, mostra la domanda, le sue opzioni tra parentesi quadre e il valore predefinito tra parentesi angolari, ad esempio `Specificare il raggio del cerchio [Diametro] <500>:`.
- Mentre si digita il nome di un comando, un suggerimento a destra propone i comandi corrispondenti. Premere {{key:Tab}} per accettare il primo. "Comando inesistente" significa che nulla corrisponde.
- {{key:Up}} e {{key:Down}} richiamano le righe digitate in precedenza.
- La cronologia conserva le ultime 400 righe. Qui compaiono i messaggi dei comandi, le misure di {{cmd:DIST}} e {{cmd:LIST}} e i rapporti di salvataggio e stampa.

## La barra di stato

La riga più in basso è la barra di stato.

- **Coordinate** a sinistra: la X e la Y del mirino. Quando un comando ha un punto base, mostra anche la distanza e l'angolo da esso, ad esempio `Δ 1200 < 90°`.
- **Messaggi** al centro, come "Ortho attivo" o "Layer corrente: Walls". Svaniscono dopo qualche secondo.
- **{{ui:Griglia}}**, **{{ui:Ortho}}**, **{{ui:Polare}}**, **{{ui:Snap}}**, **{{ui:Traccia}}**, **{{ui:Dinam.}}** e **{{ui:LWT}}** a destra. Ognuno è un interruttore; un pulsante premuto è attivo. {{ui:LWT}} mostra gli spessori di linea sullo schermo (vedere [Spessori e tipi di linea](topic:units-papers-scales#line-weights-and-linetypes)). La piccola freccia accanto a {{ui:Snap}} apre {{ui:Snap a oggetto}}, dove si spuntano gli snap attivi. Vedere [Agganciarsi ai punti degli oggetti](topic:object-snaps).

## La finestra Stampa in PDF

{{ui:Stampa}} (o {{key:Mod+P}}) apre la finestra {{ui:Stampa in PDF}}, con le impostazioni a sinistra e un'anteprima in tempo reale a destra. Vedere [Stampa in PDF](topic:plot-pdf).

## La guida

{{key:F1}} o il pulsante {{ui:Guida}} apre questa guida come pannello laterale; il disegno resta utilizzabile accanto ad essa. Funziona senza connessione. {{key:F1}} di nuovo, o {{key:Esc}} dentro il pannello, la chiude. Vedere [Usare questa guida](common:help).
