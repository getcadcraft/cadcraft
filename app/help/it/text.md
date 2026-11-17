---
title: Aggiungere testo ed etichette
summary: Inserire etichette di locali con testo a riga singola, scrivere note a capo automatico con testo multilinea digitato sul posto e modificare il testo in un secondo momento.
keywords: testo, dtext, mtext, mleader, multileader, richiamo, revcloud, nuvola di revisione, nuvola, trova, sostituisci, trova e sostituisci, paragrafo, a capo, interlinea, etichetta, nota, annotazione, altezza, allineamento, textmask, maschera di sfondo, maschera, wipeout, rotazione, modifica testo, ddedit, textedit, carattere
from: 4b76be99
---

## Cosa si realizza

Due etichette di locali, centrate nei rispettivi locali, una nota che va a capo alla sua larghezza, poi una correzione a una delle etichette.

## Altezza del testo e scala del disegno

L'altezza del testo è espressa in unità di disegno. In un disegno in millimetri che verrà stampato in scala 1:50, un testo alto 2,5 mm sulla carta deve essere alto 2,5 × 50 = 125 unità nel modello. Su una scheda di layout si disegna in unità carta, quindi 2,5 lì corrisponde a 2,5 mm sulla carta.

## Inserire un'etichetta centrata

1. Digitare `DT` e premere Invio (oppure fare clic su {{ui:Testo}} nella barra degli strumenti). Il prompt è `Specificare il punto iniziale del testo [Allineamento (J)]:`.
2. Digitare `J` e premere Invio.
3. Al prompt `Immettere un'opzione [Sinistra (L)/Centro (C)/Destra (R)/Medio/TL/MC] <L>:`, digitare `MC` e premere Invio.
4. Al prompt `Specificare il punto di inserimento del testo`, fare clic al centro di un locale.
5. Al prompt `Specificare l'altezza`, digitare `250` e premere Invio.
6. Al prompt `Specificare l'angolo di rotazione del testo <0>`, premere Invio.
7. Al prompt `Immettere il testo`, digitare `KITCHEN` e premere Invio.

L'etichetta compare, centrata sul punto su cui si è fatto clic.

8. Premere Invio sul prompt `Immettere il testo` vuoto per terminare il comando.

## Scrivere una nota che va a capo

Il testo multilinea ({{cmd:MTEXT}}) va a capo in base a una larghezza ed è digitato direttamente sul disegno.

1. Digitare `T` e premere Invio, oppure fare clic su {{ui:Paragrafo}} nella barra degli strumenti.
2. Al prompt `Specificare il primo angolo`, fare clic dove deve trovarsi l'angolo in alto a sinistra della nota.
3. Per cambiare prima l'altezza, digitare `H`, premere Invio, digitare `250` e premere Invio.
4. Al prompt `Specificare l'angolo opposto [Altezza (H)/Allineamento (J)/Interlinea (L)/Rotazione (R)/Larghezza (W)]`, fare clic a destra del primo angolo. La distanza in orizzontale è la larghezza alla quale il testo va a capo; la distanza in verticale non ne limita l'altezza.
5. Si apre una casella sopra il disegno con il cursore al suo interno. Digitare `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Le parole vanno a capo alla larghezza mentre si digita.
6. Premere Invio per iniziare un nuovo paragrafo e digitare `CHECK ON SITE`.
7. Premere {{key:Mod+Enter}}, fare clic su {{ui:OK}} oppure fare clic in un punto qualsiasi fuori dalla casella. La nota è un unico oggetto.

La barra sopra la casella consente di cambiare {{ui:Altezza}}, {{ui:Interlinea}} (1 è normale, 1,5 è una volta e mezza), {{ui:Larghezza}} (0 = nessun a capo) e {{ui:Allineamento}} mentre si digita. {{key:Esc}} oppure {{ui:Annulla}} chiude la casella senza aggiungere nulla.

Le opzioni al secondo angolo: `H` altezza, `J` allineamento (`TL` alto a sinistra … `BR` basso a destra: l'angolo o il punto medio della casella che resta fermo), `L` interlinea, `R` rotazione, `W` una larghezza digitata invece del secondo angolo.

:::note
Mentre la casella è aperta, {{key:Space}} digita uno spazio e Invio inizia un nuovo paragrafo. Un DWG salvato mantiene il testo multilinea come MTEXT; un DXF R12 non ha testo multilinea, quindi ogni riga viene salvata come testo a sé stante.
:::

### Diverse righe singole

{{cmd:TEXT}} (`DT`) chiede una riga alla volta: ogni Invio avvia la riga successiva, 1,667 volte l'altezza del testo più in basso, e ogni riga è un oggetto a sé stante. Premere Invio su una riga vuota per terminare.

## Opzioni di allineamento

| Opzione | Il punto su cui si fa clic è |
|---|---|
| Sinistra (predefinita) | L'estremità sinistra della linea di base |
| Centro | Il centro della linea di base |
| Destra | L'estremità destra della linea di base |
| Medio, MC | Il centro del testo, in orizzontale e in verticale |
| TL | L'angolo in alto a sinistra |

## Modificare il testo

1. Fare doppio clic su un oggetto di testo. Si apre nella stessa casella del testo multilinea, con il cursore alla fine.
2. Cambiare le parole.
3. Premere {{key:Mod+Enter}} oppure fare clic fuori dalla casella. Il testo sul disegno cambia; {{key:Esc}} lo lascia com'era.

{{cmd:TEXTEDIT}} (`ED`) fa lo stesso: scegliere un testo dopo l'altro e premere Invio al termine.

Per modificare un testo selezionato nel pannello di destra: {{ui:Testo}}, {{ui:Altezza}}, {{ui:Larghezza di a capo}} (0 = nessun a capo), {{ui:Interlinea}}, {{ui:Rotazione}}, la posizione X e Y e {{ui:Allineamento}}. L'elenco {{ui:Allineamento}} offre anche Basso a sinistra, che a volte viene usato dal testo di altri programmi.

## Formattazione nel testo multilinea di altri programmi

Il testo multilinea in un DWG o DXF può contenere codici al suo interno: colori parola per parola, grassetto e corsivo, sottolineatura, soprallineatura e barrato, frazioni impilate come 1/2, e un'altezza diversa per una parola. CadCraft mantiene questi codici, li disegna (a schermo e in un PDF stampato) e li salva invariati.

Quando si modifica un testo di questo tipo (doppio clic, {{cmd:TEXTEDIT}}, il campo Testo del pannello di destra oppure {{cmd:FIND}} con Sostituisci), si modificano le sue parole semplici. Una parola digitata entra nel blocco accanto e ne prende colore e stile; gli altri codici restano dove sono. Se si riscrivono i numeri di una frazione impilata, quella frazione diventa testo semplice. Impostare l'intero testo dal campo Testo mantiene i codici solo dove è possibile capire quali parole sono rimaste.

I nomi dei caratteri (`\F`) vengono mantenuti e salvati, ma tutto è disegnato con l'unico carattere in stile Helvetica. Non esiste ancora una barra degli strumenti per digitare i codici.

## Indicare qualcosa: linee di richiamo multiple

{{ui:Richiamo}} nel gruppo {{ui:Annotazioni}} ({{cmd:MLEADER}}, `MLD`) disegna una freccia, una linea di richiamo, un breve appoggio e una nota, come un unico oggetto.

1. Fare clic su {{ui:Richiamo}}. Al prompt `Specificare il punto della freccia della linea di richiamo`, fare clic su ciò a cui si riferisce la nota.
2. Al prompt `Specificare il punto di appoggio della linea di richiamo`, fare clic dove deve andare la nota. L'appoggio si orienta verso il lato su cui si è fatto clic.
3. Digitare la nota nella casella che si apre e premere {{key:Mod+Enter}}.

`A` e `L` al primo prompt impostano la dimensione della freccia e la lunghezza dell'appoggio; l'altezza del testo deriva da {{ui:Altezza testo}} per le nuove quote, moltiplicata per {{ui:Scala complessiva}}. Fare doppio clic su una linea di richiamo multipla per cambiarne le parole. I grip spostano la freccia e l'appoggio; la nota segue l'appoggio. In {{ui:Proprietà}}: {{ui:Testo}}, {{ui:Altezza}}, {{ui:Larghezza di a capo}}, {{ui:Dimensione freccia}} e {{ui:Distanza di appoggio}}.

:::note
Le linee di richiamo multiple vengono salvate come vere linee di richiamo multiple in DWG. Il DXF non ha linee di richiamo multiple in R12 o 2000, quindi lì vengono salvate come le linee, la freccia e il testo che disegnano.
:::

## Segnare le modifiche con una nuvola di revisione

{{ui:Annotazioni}} › {{ui:Altro}} › {{ui:Nuvola di revisione}} ({{cmd:REVCLOUD}}, `RC`) disegna una nuvola di archi attorno a ciò che è cambiato. La cronologia mostra la lunghezza dell'arco e il tipo che verrà usato.

- **Rettangolare** (la prima volta): fare clic su due angoli.
- `P` **Poligonale**: fare clic sugli angoli, Invio chiude la nuvola.
- `F` **A mano libera**: fare clic dove inizia e muovere il puntatore attorno all'area senza fare clic; viene aggiunto un arco ogni lunghezza d'arco. Fare clic o premere Invio per chiudere.
- `O` **Oggetto**: scegliere una polilinea chiusa, un cerchio o un'ellisse (oppure una linea, un arco o una polilinea aperta); diventa la nuvola. `Invertire la direzione?` `Y` rivolge gli archi verso l'interno.
- `A` **Lunghezza arco**: la lunghezza di ciascun arco. Scegliere una lunghezza adatta alla scala di stampa.

La nuvola è una polilinea chiusa di archi, quindi viene salvata in tutti i formati.

## Trovare e sostituire parole

{{ui:Modifica}} › {{ui:Altro}} › {{ui:Trova e sostituisci}} ({{cmd:FIND}}) cerca nel testo, nei valori degli attributi dei blocchi e nel testo delle quote sulla scheda aperta (oppure solo negli oggetti selezionati).

1. Digitare le parole in {{ui:Trova}}. L'elenco mostra ogni punto in cui compaiono e il conteggio.
2. Scegliere {{ui:Distingui maiuscole e minuscole}}, {{ui:Solo parole intere}} oppure {{ui:Usa caratteri jolly (* e ?)}} se servono, e deselezionare dove non cercare.
3. Fare clic su {{ui:Seleziona i trovati}} per selezionare quegli oggetti, oppure digitare le nuove parole in {{ui:Sostituisci con}} (l'elenco mostra cosa diventa ciascuna) e fare clic su {{ui:Sostituisci tutto}}. Un solo {{key:Mod+Z}} annulla tutte le sostituzioni.

Il valore misurato di una quota non è testo, quindi non viene mai sostituito: in `<> TYP.` può essere sostituito solo `TYP.`.

## Nascondere le linee dietro un'etichetta

1. Selezionare i testi, digitare {{cmd:TEXTMASK}} e premere Invio.
2. `B` dipinge lo sfondo del disegno dietro di essi; `C` chiede un numero di colore. `O` rimuove la maschera.
3. `Fattore di scostamento del bordo`: Invio mantiene 1,5, cioè mezza altezza del testo attorno al testo.

La maschera copre le linee sotto il testo, a schermo e in stampa. DWG 2004 o successivi e DXF 2000 la mantengono; il formato DWG 2000 e il DXF R12 non possono, e il salvataggio lo segnala.

## Carattere

Tutto il testo è disegnato con un carattere in stile Helvetica, a schermo e nei PDF. Il testo dei disegni aperti mantiene le sue parole, altezza e posizione, ma non il suo carattere originale (il nome di un carattere all'interno del testo multilinea viene mantenuto nel file, vedi sopra).

Nei PDF stampati, il testo in qualsiasi scrittura europea, cirillica o greca viene stampato come è (il PDF contiene le lettere necessarie e il testo resta selezionabile e ricercabile). Anche il testo cinese, giapponese e coreano viene stampato come è (la stampa scarica un carattere più ampio la prima volta che serve). Il testo arabo, persiano, urdu ed ebraico viene stampato come è (vedi la sezione successiva). I caratteri per cui nessun carattere ha una lettera vengono stampati come "?", e la cronologia indica quanti sono.

## Testo da destra a sinistra: arabo, persiano, urdu, ebraico

Digitare il testo come in qualsiasi altro punto: {{cmd:TEXT}} e {{cmd:MTEXT}} disegnano ogni riga nell'ordine di lettura. Una riga la cui prima lettera è araba o ebraica si legge da destra a sinistra; numeri e parole latine al suo interno mantengono il proprio ordine da sinistra a destra, e le lettere in alfabeto arabo sono unite. Una riga che inizia con una lettera latina resta da sinistra a destra, con le parole da destra a sinistra al suo interno. Ogni paragrafo di un testo su più righe ha una propria direzione, e un paragrafo a capo la mantiene su ogni riga.

Il testo viene memorizzato come è stato digitato, quindi i file DWG e DXF lo scambiano con altri programmi senza modifiche. Il punto di inserimento e l'allineamento ({{ui:Sinistra}}, {{ui:Centro}}, {{ui:Destra}}) hanno lo stesso significato di qualsiasi altro testo: una nota da destra a sinistra che deve pendere dalla sua estremità destra richiede {{ui:Destra}}.

A schermo le lettere provengono dai caratteri del sistema. In un PDF stampato, l'ebraico usa lo stesso carattere incorporato del testo latino; il testo in alfabeto arabo fa scaricare alla stampa un altro carattere (meno di 1 MB, una sola volta), e l'intero PDF viene poi stampato con quel carattere. Quel carattere non ha una forma propria per tre caratteri urdu (heh goal, yeh barree e il punto completo urdu): vengono stampati nella forma della lettera araba più vicina. Un disegno che contiene sia testo in alfabeto arabo sia testo cinese, giapponese o coreano ne stampa uno dei due come "?", perché una stampa usa un solo carattere. Il testo in un carattere SHX caricato viene ordinato e unito quando il carattere contiene le lettere nei loro posti Unicode; per i vecchi caratteri le cui lettere sono già formate, usare {{ui:Inverti}} in {{cmd:SHXFONTS}} come prima.

## Errori comuni

- **Il testo è troppo piccolo per essere visto.** L'altezza è in unità di disegno. In un disegno grande, usare un'altezza maggiore (vedi sopra), oppure ingrandire.
- **Il comando si è chiuso dopo una riga.** Si è premuto Invio su una riga vuota in {{cmd:TEXT}}. Riavviare il comando, oppure usare il testo multilinea (`T`), dove Invio avvia un nuovo paragrafo.
- **`T` ha aperto una casella invece di chiedere una riga.** Come in AutoCAD, `T` è il testo multilinea ({{cmd:MTEXT}}); il testo a riga singola è `DT`.
- **Il testo va a capo in un punto diverso in AutoCAD.** CadCraft va a capo con le larghezze di Helvetica; un altro carattere può far stare una parola più o meno su una riga.
- **Testo in una copia speculare.** Viene posizionato specularmente ma resta leggibile da sinistra a destra.
