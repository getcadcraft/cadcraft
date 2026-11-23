---
title: Riferimento dei comandi
summary: Ogni comando dell'app di disegno CadCraft, con i suoi alias, le domande che pone, le sue opzioni e i valori predefiniti.
keywords: comandi, alias, elenco dei comandi, area, perimetro, measuregeom, linea, pline, cerchio, arco, rifila, offset, dimlinear, blocco, inserisci, layout, stampa, zoom, guida, copyclip, cutclip, pasteclip, pasteorig, copybase, duplica, selectall
from: 979ffe3b
---

Digitare un nome di comando o un alias e premere {{key:Enter}} oppure {{key:Space}}. Le maiuscole non contano, e un `_`, `-`, `.` o `'` iniziale viene ignorato. Digitare `HELP` (o `?`) per stampare nella cronologia della riga di comando un breve elenco di tutti i comandi; premere {{key:F1}} per questa guida.

Come leggere i prompt: le opzioni sono tra parentesi quadre, e se ne sceglie una digitandone le lettere maiuscole (`D` per Diametro). Un valore predefinito è tra parentesi angolari; premere {{key:Enter}} per accettarlo. Dove si chiede un punto, si può fare clic oppure digitare uno qualsiasi dei formati di [Inserimento di coordinate e distanze](topic:coordinate-entry). Dove si chiede una distanza, si può digitare un numero oppure fare clic su due punti.

Premere {{key:Enter}} dove si richiede un punto o un oggetto, e non c'è un valore predefinito, termina il comando. {{key:Esc}} lo annulla. Qualunque cosa abbia fatto un comando è un solo passo di annullamento.

## Disegna

### LINE

Alias: `L`. Segmenti rettilinei, ciascuno come oggetto a sé.

- `Specificare il primo punto` (Invio: parte dall'ultimo punto indicato)
- `Specificare il punto successivo [Annulla (U)]`, ripetuto. Dopo due segmenti: `[Annulla (U)/Chiudi]`.
- `U` riprende l'ultimo segmento, `C` chiude sul primo punto e termina. Invio termina.

### PLINE

Alias: `PL`. Una polilinea di segmenti rettilinei e ad arco.

- `Specificare il punto iniziale`
- `Specificare il punto successivo [Arco/Chiudi/Annulla (U)]` (Chiudi quando ci sono almeno due segmenti)
- `A` passa agli archi: `Specificare il punto finale dell'arco [Linea/Chiudi/Annulla (U)]`. Ogni arco prosegue tangente al segmento precedente. `L` torna alle linee, `CL` chiude con un arco.
- Invio termina; la polilinea resta aperta.

### CIRCLE

Alias: `C`.

- `Specificare il punto centrale del cerchio [3P/2P/Ttr (tangente tangente raggio)]`
- `Specificare il raggio del cerchio [Diametro] <ultimo raggio>`; `D` chiede `Specificare il diametro del cerchio`.
- `2P`: i due estremi di un diametro. `3P`: tre punti sul cerchio.
- `T` (anche il comando `TTR`, e {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specificare il punto sull'oggetto per la prima tangente del cerchio`, la seconda, poi il raggio (Invio: l'ultimo). Il cerchio tocca entrambi gli oggetti (linee, archi, cerchi, segmenti di polilinea, anche dentro blocchi); tra i cerchi che lo fanno, quello più vicino ai punti indicati. "Il cerchio non esiste" quando nessuno va bene.
- `TTT` (oppure {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): tre oggetti; il cerchio che tocca tutti e tre, il più vicino ai punti indicati (tre linee danno il cerchio interno oppure uno esterno, secondo dove si indica).

### ARC

Alias: `A`.

- `Specificare il punto iniziale dell'arco [Centro]`, `Specificare il secondo punto dell'arco`, `Specificare il punto finale dell'arco`: un arco per tre punti.
- `C`: `Specificare il punto centrale dell'arco`, `Specificare il punto iniziale dell'arco`, `Specificare il punto finale dell'arco`. L'arco va in senso antiorario dall'inizio alla fine.

### RECTANG

Alias: `REC`, `RECTANGLE`. Una polilinea chiusa.

- `Specificare il primo angolo`, `Specificare l'altro angolo`. Digitare `@larghezza,altezza` per il secondo angolo.

### POLYGON

Alias: `POL`. Un poligono regolare come polilinea chiusa.

- `Immettere il numero di lati <4>` (da 3 a 1024)
- `Specificare il centro del poligono`
- `Immettere un'opzione [Inscritto nel cerchio/Circoscritto al cerchio] <I>`
- `Specificare il raggio del cerchio`: fare clic o digitare un punto; la sua distanza fissa la dimensione e la sua direzione ruota il poligono.

### ELLIPSE

Alias: `EL`.

- `Specificare il punto finale dell'asse dell'ellisse [Centro]`, `Specificare l'altro punto finale dell'asse`, `Specificare la distanza dall'altro asse`
- `C`: `Specificare il centro dell'ellisse`, `Specificare il punto finale dell'asse`, poi la distanza dall'altro asse.
- `I` (`Isocerchio`, solo mentre {{cmd:ISODRAFT}} è attivo): centro, poi raggio o `Diametro`: l'ellisse che un cerchio mostra sul piano isometrico corrente.

### HATCH

Alias: `H`, `BH`, `BHATCH`; oppure {{ui:Hatch}} nella barra degli strumenti. Stampa prima il motivo, la scala e l'angolo correnti.

- `Indicare un punto interno [Seleziona oggetti/Motivo/SCala/Angolo]`, ripetuto (`Annulla` dopo che c'è un'area): ogni clic aggiunge l'area chiusa attorno a esso, con le forme chiuse al suo interno come isole. Invio ne fa un unico tratteggio di tutte.
- `S`: `Selezionare oggetti chiusi` (polilinee chiuse, cerchi, ellissi chiuse).
- `P`: `Immettere un nome di motivo, SOLID, oppure ? per l'elenco <corrente>`. `SC`: `Specificare la scala del motivo`. `A`: `Specificare l'angolo del motivo`.
- `G` (Sfumatura): il riempimento è una sfumatura invece di un motivo. Vedere {{cmd:GRADIENT}} per le sue domande.

Vedere [Tratteggio e aree con riempimento](topic:hatch).

### GRADIENT

Alias: `GD`. Riempie un'area con una sfumatura di uno o due colori. Chiede prima la sfumatura, poi procede come {{cmd:HATCH}} (`Indicare un punto interno`, `S` per oggetti chiusi, {{key:Enter}} per terminare).

- `Immettere un'opzione di sfumatura [Tipo/Un colore/DUE colori/Angolo/Centrato/eXit] <X>`, ripetuto; ogni volta stampa la sfumatura com'è ora.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, oppure una di esse invertita (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastano le prime lettere.
- `O`: un colore, poi la sua gradazione da 0 a 1 (0 lo scurisce fino al nero, 0,5 è il colore stesso, 1 lo schiarisce fino al bianco). `TW`: il primo e il secondo colore. Un colore è un numero da 1 a 255, tre numeri come `255,128,0`, oppure `#rrggbb`.
- `A`: l'angolo con cui corre la sfumatura. `C`: centrata Sì o No (No sposta il centro della sfumatura da un lato).
- Rifiuta un colore o un tipo che non conosce, e una gradazione fuori da 0 a 1.

{{cmd:HATCHEDIT}} `G` e Proprietà (Sfumatura) modificano in seguito una sfumatura, oppure trasformano un tratteggio qualsiasi in una. Una sfumatura è disegnata a schermo e stampata. DWG 2004 e successivi la conservano come vera sfumatura; DXF 2000 e DWG 2000 la conservano per CadCraft, e gli altri programmi vedono un riempimento pieno del primo colore.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Ricrea il contorno da un tratteggio che lo ha perso. `Selezionare tratteggi` (oppure selezionarli prima), poi `Collegare ogni tratteggio al suo nuovo contorno, così il tratteggio lo segue? [Sì/No] <Sì>`.

- Ogni anello del tratteggio diventa una polilinea chiusa sul layer del tratteggio; le nuove polilinee restano selezionate. Un bordo curvo torna come i brevi tratti rettilinei che il tratteggio conserva.
- Con Sì il tratteggio segue il suo nuovo contorno, come un tratteggio creato con {{cmd:HATCH}}. Un passo di annullamento.
- Lo dice quando non è stato selezionato alcun tratteggio.

### POINT

Alias: `PO`; oppure {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Oggetti punto, uno per clic, fino a Invio.

- `Specificare un punto`

### XLINE

Alias: `XL`; oppure {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Linee di costruzione, illimitate nei due versi. Vedere [Linee di costruzione e semirette](topic:construction-lines).

- `Specificare un punto [Oriz/Vert/Ang/Bisect/Offset]`, poi `Specificare il punto di passaggio` per ogni linea, fino a Invio.
- `A`: `Immettere l'angolo della linea di costruzione [Riferimento] <0>`; `R` chiede prima `Selezionare un oggetto linea`.
- `B`: `Specificare il vertice dell'angolo`, `Specificare il punto iniziale dell'angolo`, poi `Specificare il punto finale dell'angolo` per ogni linea.
- `O`: `Specificare la distanza di offset [Attraverso] <Attraverso>`, poi `Selezionare un oggetto linea` e `Specificare il lato di offset` (oppure `Specificare il punto di passaggio`) per ogni linea.

### RAY

Nessun alias; oppure {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specificare il punto iniziale`, poi `Specificare il punto di passaggio` per ogni semiretta, fino a Invio.

### TEXT

Alias: `DT`, `DTEXT`; oppure {{ui:Text}} nella barra degli strumenti. Testo su una riga; ogni riga è un oggetto a sé.

- `Specificare il punto iniziale del testo [Giustifica]`
- `J`: `Immettere un'opzione [Sinistra/Centro/Destra/Medio/TL/MC] <L>`, poi `Specificare il punto di inserimento del testo`
- `Specificare l'altezza <altezza corrente del testo>`
- `Specificare l'angolo di rotazione del testo <0>`
- `Immettere il testo`, ripetuto: ogni Invio inizia la riga successiva sotto. Invio su una riga vuota termina. {{key:Space}} qui digita uno spazio.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} mette segni su una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse che la dividono in parti uguali. Si indica l'oggetto, poi si dà il numero di parti (da 2 a 32767). Un oggetto aperto riceve un segno in meno delle parti; uno chiuso riceve anche un segno sul suo inizio. L'oggetto stesso non viene tagliato. I segni sono punti; `Blocco` chiede invece un blocco di questo disegno, e se ruotarlo per seguire l'oggetto. Le lunghezze lungo spline ed ellissi sono misurate lungo brevi corde. Rifiuta testi, tratteggi e altri oggetti senza lunghezza.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} mette un segno ogni lunghezza data lungo una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse, contando dall'estremità più vicina al punto indicato (un oggetto chiuso: dal suo inizio). La lunghezza si dà digitandola oppure con due punti. L'estremità lontana di un oggetto aperto non riceve segni. `Blocco` mette un blocco su ogni segno invece di un punto. Rifiuta una lunghezza di 0, una più lunga dell'oggetto, e una che produrrebbe più di 32767 segni.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} crea una polilinea chiusa attorno all'area che contiene il punto indicato, a partire da qualsiasi linea, arco, cerchio, polilinea e curva che la delimitano sullo schermo. I pezzi che giacciono su un arco o un cerchio tornano come segmenti d'arco; i pezzi di ellissi e spline tornano come brevi segmenti rettilinei. Con `Isole` attivo (l'impostazione iniziale), ogni area chiusa al suo interno riceve anch'essa una propria polilinea. Continuare a indicare punti; Invio termina. Gli oggetti che delimitano l'area restano come sono. Lo dice quando nessuna area chiusa contiene il punto.

### BLEND

{{cmd:BLEND}} disegna una spline tra le estremità di due curve aperte. Indicare ciascuna curva vicino all'estremità da unire. `CONtinuità` sceglie `Tangente` (la spline parte e arriva lungo entrambe le curve) oppure `Liscia` (segue anche il modo in cui le curve si piegano alle estremità); la scelta è mantenuta per la sessione. Le due curve non vengono cambiate. Rifiuta oggetti chiusi e due estremità che già si toccano.

### REGION

Alias: `REG`. {{cmd:REGION}} trasforma oggetti chiusi in regioni: aree piane che si possono unire, tagliare e misurare. Si selezionano cerchi, polilinee chiuse, ellissi chiuse o spline chiuse, oppure linee, archi e polilinee aperte che chiudono un anello punta a punta; ogni anello diventa una regione e sostituisce gli oggetti da cui è nato. Gli archi restano archi; ellissi e spline diventano brevi segmenti rettilinei. Ciò che non è chiuso e non chiude un anello viene lasciato com'è, e lo dice quanti sono. Nel disegno una regione è una o più polilinee chiuse tenute insieme come gruppo senza nome, così un clic seleziona l'intera regione e una copia è una regione a sé; altri programmi che aprono il file vedono polilinee chiuse.

Con regioni nel disegno, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} sulla scheda 2D lavorano sulle regioni: `UNION` unisce le regioni selezionate in una (le regioni separate diventano una regione di più contorni), `SUBTRACT` chiede le regioni da cui sottrarre e poi quelle da togliere (un foro resta parte della regione), `INTERSECT` mantiene l'area che hanno tutte in comune. Ciascuno dice l'area del risultato ed è un passo di annullamento. Rifiutano quando non resterebbe nulla o quando non c'è nulla in comune. Sulla scheda 3D, e in un disegno senza regioni, gli stessi comandi lavorano sui solidi come prima.

## Modifica

Alias: `MT`, `T`; oppure {{ui:Paragraph}} nella barra degli strumenti. Testo a paragrafo che va a capo su una larghezza, digitato sul posto.

- `Specificare il primo angolo`
- `Specificare l'angolo opposto [Altezza/Giustifica/Interlinea/Rotazione/Larghezza]`: la larghezza tra i due angoli è dove il testo va a capo. `H` chiede `Specificare l'altezza`, `J` `Immettere la giustificazione [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Immettere il fattore di interlinea (da 0,25 a 4)`, `R` `Specificare l'angolo di rotazione`, `W` `Specificare la larghezza (0 per nessun a capo)` e salta il secondo angolo.
- Poi si apre sul disegno una casella: digitare, {{key:Enter}} per un nuovo paragrafo, {{key:Mod+Enter}} oppure un clic fuori per terminare, {{key:Esc}} per annullare. La sua barra imposta altezza, interlinea, larghezza e giustificazione. Vedere [Aggiungere testo ed etichette](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; oppure fare doppio clic su un testo. `Selezionare un testo da modificare`, ripetuto fino a {{key:Enter}}: ciascuno si apre nella stessa casella. Avviato su un testo selezionato o su cui si è fatto doppio clic, modifica quello e termina.

### ERASE

Alias: `E`, `DELETE`; oppure premere {{key:Delete}} con oggetti selezionati.

- `Selezionare oggetti` (saltato quando gli oggetti sono già selezionati)

### MOVE

Alias: `M`.

- `Selezionare oggetti`
- `Specificare il punto base [Spostamento]`, `Specificare il secondo punto`
- `D`: `Specificare lo spostamento`, digitato come `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copie tante volte quanti sono i punti dati.

`Serie` al prompt del secondo punto crea una riga in un colpo: dare il numero di elementi (l'originale conta come uno), poi il punto dove va la prima copia; le altre seguono alla stessa spaziatura. `Adatta` rende quel punto il posto dell'ultima copia, con le altre distribuite in modo uniforme nel mezzo.

- `Selezionare oggetti`
- `Specificare il punto base [Spostamento]`
- `Specificare il secondo punto [Annulla]`, ripetuto fino a Invio. `U` riprende l'ultima copia.

### ROTATE

Alias: `RO`.

- `Selezionare oggetti`, `Specificare il punto base`
- `Specificare l'angolo di rotazione <ultimo angolo>`: gradi, positivi in senso antiorario; oppure fare clic su un punto per ruotare verso di esso.

### SCALE

Alias: `SC`.

- `Selezionare oggetti`, `Specificare il punto base`
- `Specificare il fattore di scala`: digitare un fattore come `0.5` oppure `2`. Un punto indicato dà come fattore la sua distanza dal punto base.

### MIRROR

Alias: `MI`.

- `Selezionare oggetti`
- `Specificare il primo punto della linea di specchio`, `Specificare il secondo punto della linea di specchio`
- `Cancellare gli oggetti di origine? [Sì/No] <N>`

### ALIGN

Alias: `AL`; oppure {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Selezionare oggetti`
- `Specificare il primo punto di origine`, `Specificare il primo punto di destinazione`
- `Specificare il secondo punto di origine (Invio per continuare)`, `Specificare il secondo punto di destinazione`
- `Specificare il terzo punto di origine (Invio per continuare)`, `Specificare il terzo punto di destinazione`
- Con due coppie: `Scalare gli oggetti in base ai punti di allineamento? [Sì/No] <N>`

Vedere [Allineare oggetti](topic:modify-objects#align-objects).

### ALIGNTO

- `Selezionare oggetti` (o la selezione), `Allinea [Sinistra/Centro/Destra/Superiore/Medio/Inferiore] <Sinistra>`, `A [Selezione/Primo/Ultimo/Punto] <Selezione>`; `P` chiede il punto. La selezione resta.

### DISTRIBUTE

- `Selezionare oggetti` (almeno tre), `Distribuisci [Orizzontalmente/Verticalmente] <Orizzontalmente>`, `Spazia uniformemente [Centri/Spazi] <Spazi>`. I due esterni restano; la selezione resta.

### ALIGNPANEL

Alias: `ALP`; oppure {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Apre il pannello che esegue ALIGNTO e DISTRIBUTE con i clic.

### LASER

Alias: `LASERCUT`; oppure {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Apre il pannello Laser sul disegno: cosa fa ogni layer (taglio, incisione, riempimento, immagine), l'anteprima, il codice G GRBL da salvare, e l'inquadratura e l'invio tramite Web Serial. Vedere [Inviare un disegno a un laser](topic:laser-cutting).

### STRETCH

Alias: `S`; oppure {{ui:Stretch}}. `Selezionare oggetti da stirare`: trascinare finestre di attraversamento (oppure digitare `C`) sulle estremità da spostare. `Specificare il punto base [Spostamento]`, `Specificare il secondo punto`. I punti dentro le finestre si spostano: estremità di linee, vertici di polilinee (i segmenti d'arco mantengono la loro altezza), punti di quota; cerchi, ellissi, testi, punti e blocchi si spostano per intero quando il loro centro o punto di inserimento è dentro. Una selezione fatta prima del comando mantiene le finestre di attraversamento (e i lazi) che l'hanno creata, così stirano allo stesso modo. Senza finestra, gli oggetti si spostano per intero.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; oppure {{ui:Array}}. `Selezionare oggetti`, poi `Immettere il tipo di serie [Rettangolare/POlare] <Rettangolare>` (solo ARRAY).

- Rettangolare parte da 4 colonne × 3 righe, con spaziatura pari a 1,5 volte la dimensione degli oggetti, mostrate come anteprima. `Immettere un'opzione [COUnt/Spaziatura/COLonne/Righe/eXit] <X>`: `COU` chiede colonne e righe, `S` le distanze tra colonne e tra righe (un negativo va a sinistra o in basso), `COL` e `R` una direzione per volta.
- Polare chiede `Specificare il punto centrale della serie`, parte da 6 elementi tutto intorno, ruotati. `Immettere un'opzione [Elementi/Angolo di riempimento/RUOta elementi/eXit] <X>`: `I` gli elementi, `F` l'angolo da riempire (+ antiorario, − orario), `ROT` Sì o No.
- {{key:Enter}} (eXit) crea le copie, come oggetti semplici. Un passo di annullamento.
- `AS` (ASsociativo) passa tra copie semplici e una serie che resta modificabile: un oggetto che si cambia in seguito con {{cmd:ARRAYEDIT}}, dai suoi grip o in Proprietà. La scelta viene ricordata ({{cmd:ARRAYASSOCIATIVITY}}); all'inizio sono copie semplici.

### ARRAYPATH

Copie lungo una curva. `Selezionare oggetti`, poi `Selezionare la curva del percorso`: una linea, un arco, un cerchio, un'ellisse, una polilinea o una spline (non uno degli oggetti in serie). Il percorso parte dalla sua estremità più vicina agli oggetti, e il primo elemento sono gli oggetti dove si trovano.

- `Immettere un'opzione [Metodo/Elementi/SPaziatura/ALlinea/ASsociativo/eXit] <X>`, con anteprima. `M`: `Dividi` distribuisce gli elementi in modo uniforme su tutto il percorso, `Misura` ne mette uno ogni tanto lungo di esso. `I`: il numero di elementi (con Misura, 0 vuol dire quanti ne entrano; un numero oltre la fine del percorso viene limitato a quanto entra). `SP`: la distanza tra gli elementi lungo il percorso (passa a Misura). `AL`: Sì fa girare ogni elemento a seguire il percorso, No li tiene dritti.
- `AS` come in {{cmd:ARRAY}}. Con esso attivo, la serie conserva una propria copia della forma del percorso: modificare dopo la curva del percorso non sposta gli elementi.
- Rifiuta un percorso che non è una curva, e un solo elemento.

### ARRAYEDIT

Modifica una serie creata con ASsociativo. `Selezionare la serie` (oppure selezionarla prima). Stampa com'è ora la serie, poi chiede fino a {{key:Enter}}:

- Rettangolare: `COL` colonne e la loro spaziatura, `R` righe e la loro spaziatura, `A` l'angolo con cui corrono le colonne.
- Polare: `I` elementi, `F` l'angolo di riempimento, `ROT` ruota gli elementi Sì o No.
- Percorso: `M` Dividi o Misura, `I` elementi, `SP` spaziatura, `AL` allinea con il percorso.
- `S` (Sorgente) apre gli oggetti che la serie ripete, da soli, come l'editor di blocchi. Disegnare e modificare lì; {{cmd:ARRAYCLOSE}} salva o scarta, e ogni elemento segue.
- `REP` (REPlace): `Selezionare oggetti di sostituzione`, `Specificare il punto base degli oggetti di sostituzione`, poi fare clic sugli elementi da sostituire, {{key:Enter}}. Quegli elementi mostrano la sostituzione al loro posto; gli oggetti di sostituzione escono dal disegno e vivono nella serie. `RES` (RESet) mostra di nuovo gli oggetti di origine in ogni elemento.
- Ogni modifica è un passo di annullamento. Rifiuta copie semplici, un semplice riferimento a blocco e una serie su un layer bloccato.

I medesimi numeri sono in Proprietà, sotto Serie, e la serie ha dei grip: il suo punto base la sposta, il grip sul secondo elemento imposta la spaziatura, il grip oltre l'ultimo elemento imposta il numero (polare: il secondo elemento imposta quanti elementi, l'ultimo l'angolo di riempimento). {{cmd:EXPLODE}} riporta una serie a copie semplici.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Sorgente: `Salvare le modifiche agli oggetti sorgente della serie? [Salva/Scarta] <Salva>`. Lo dice quando nessun oggetto sorgente di serie è aperto. {{cmd:BCLOSE}} fa lo stesso.

### ARRAYASSOCIATIVITY

`Immettere il nuovo valore per ARRAYASSOCIATIVITY (1 = le serie restano modificabili, 0 = copie semplici)`. Imposta su cosa partono {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}}; la loro opzione `AS` cambia la stessa impostazione. Ricordata in questo browser.

### OFFSET

Alias: `O`. Linee, archi, cerchi e polilinee.

Dove una polilinea si sposta verso l'esterno e i suoi segmenti rettilinei si separano a un angolo, {{cmd:OFFSETGAPTYPE}} decide come si chiude lo spazio.

- `Specificare la distanza di offset [Attraverso] <ultima distanza, oppure Attraverso>`
- `Selezionare l'oggetto da sfalsare`, poi `Specificare il punto sul lato da sfalsare` (oppure, con Attraverso, `Specificare il punto di passaggio`), ripetuto fino a Invio.

### OFFSETGAPTYPE

- `Spazi d'angolo di offset: 0 prolunga, 1 raccordo, 2 smusso`: come {{cmd:OFFSET}} chiude gli spazi agli angoli esterni di una polilinea. `0` prolunga i segmenti finché non si incontrano (l'impostazione iniziale), `1` li unisce con un arco attorno al vecchio angolo, `2` con un taglio dritto. Gli angoli interni e i segmenti d'arco non sono toccati. Mantenuto per questa sessione.

### EXTRIM

{{cmd:EXTRIM}} rifila tutto da un lato di un bordo. Si indica il bordo di taglio (una linea, un arco, un cerchio, una polilinea, un'ellisse, una spline o una linea di costruzione), poi un punto sul lato da liberare: ogni linea, arco, cerchio, polilinea e linea di costruzione che attraversa il bordo perde la sua parte da quel lato, dove parte dal bordo. Mentre si sceglie il lato, i pezzi che verrebbero eliminati seguono il puntatore. Per un bordo chiuso i lati sono interno ed esterno. Gli oggetti che solo toccano il bordo, e testi, tratteggi, spline ed ellissi che lo attraversano, restano come sono. Un passo di annullamento.

### TRIMEXTENDMODE

- `Immettere il nuovo valore per TRIMEXTENDMODE (1 Rapido, 0 Standard)`: come iniziano {{cmd:TRIM}} ed {{cmd:EXTEND}}. `1` Rapido: ogni oggetto è un bordo di taglio o un limite. `0` Standard: chiedono prima i bordi. Anche `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Alias: `TR`. Stampa prima `Impostazioni correnti: modalità Rapida (TRIMEXTENDMODE 1), bordi: nessun prolungamento, il trascinamento disegna un percorso`. In modalità Rapida ogni oggetto visibile è un bordo di taglio, e un oggetto che nulla attraversa viene cancellato; in modalità Standard chiede prima `Selezionare i bordi di taglio (Invio = ogni oggetto)` e taglia solo a quelli.

- `Selezionare l'oggetto da rifilare oppure Shift-selezionare per estendere [Bordi di taglio/Recinto/Attraversamento/mOdalità/Bordo/eRimuovi/Annulla]`, ripetuto: fare clic sul pezzo da rimuovere (appare grigio e tratteggiato mentre il puntatore vi sosta), trascinare un percorso attraverso più pezzi (tutti vanno in un solo passo), oppure fare clic su due punti vuoti per un recinto tra di essi. {{key:Shift}} estende invece. `T` sceglie i bordi di taglio (modalità Standard), `F` chiede i punti del recinto, `C` due angoli di finestra (i pezzi parzialmente dentro vanno via), `O` chiede `Immettere un'opzione di modalità di rifilatura [Rapida/Standard]`, `E` chiede `Immettere una modalità di estensione del bordo implicito [Estendi/Non estendere]` (EDGEMODE), `R` cancella gli oggetti che selezioni, `U` annulla l'ultima scelta o l'ultimo trascinamento. Invio termina. Vedere [Rifilare ed estendere](topic:trim-and-extend).

- Un clic su un tratteggio taglia il tratteggio: i bordi di taglio dividono l'area tratteggiata, e il pezzo su cui si è fatto clic viene portato via (non resta nessun contorno disegnato dov'era). Il tratteggio mantiene il suo motivo o la sua sfumatura; un tratteggio collegato al suo contorno non lo è più dopo, perché non lo riempie più. Lo dice quando nessun bordo di taglio divide lì il tratteggio, quando il clic è fuori dal tratteggio, e quando non resterebbe nulla (usare {{cmd:ERASE}}). Un percorso o un recinto trascinato non taglia i tratteggi.

### EXTEND

Alias: `EX`. Lo stesso di TRIM al contrario: `Selezionare l'oggetto da estendere oppure Shift-selezionare per rifilare [Bordi di limite/Recinto/Attraversamento/mOdalità/Bordo/Annulla]`. Un clic allunga l'estremità più vicina fino al prossimo limite; un percorso o un recinto trascinato allunga ogni oggetto che attraversa; {{key:Shift}} rifila. `B` sceglie i bordi limite (modalità Standard). Modalità e Bordo sono condivisi con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; oppure {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, oppure l'icona di collegamento sulle schede del disegno. `Collegare le viste dei riquadri [ON/OFF]` (Invio passa all'altro stato): finché è attivo, uno spostamento o uno zoom nel riquadro attivo sposta ogni riquadro che mostra lo stesso tipo di spazio. Vedere [Dividere lo schermo](topic:split-screen).

### OPENIN3D

Nessun alias; oppure {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} dove l'app di modellazione 3D accetta un disegno consegnato. Lo apre lì in una nuova scheda, come DWG (nulla viene caricato). Se il browser blocca la scheda, lo dice.

### LASSOMODE

`Immettere il nuovo valore per LASSOMODE (1 = lazo, 0 = rettangolo)`: ciò che disegna premere e trascinare su uno spazio vuoto. Lo stesso di Impostazioni › CadCraft › Trascinamento per selezionare. Vedere [Selezione con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Linee, archi, cerchi e polilinee. Stampa prima `Impostazioni correnti: Modalità = RIFILA, Raggio = 0`.

- `Selezionare il primo oggetto [Annulla/Polilinea/Raggio/Rifila/Multiplo]`
  - `R` chiede `Specificare il raggio di raccordo <ultimo>`. `T` chiede `Immettere un'opzione di modalità di rifilatura [Rifila/Non rifilare]`: con Non rifilare gli oggetti restano come sono e viene aggiunto solo l'arco.
  - `M` tiene il comando attivo per altri angoli fino a {{key:Enter}}; `U` riprende l'ultimo angolo senza uscire dal comando.
  - `P` chiede `Selezionare la polilinea 2D [Raggio]` e arrotonda ogni angolo dove si incontrano due segmenti rettilinei. I raccordi già presenti vengono sostituiti dal nuovo raggio; raggio 0 li toglie. Gli angoli i cui lati sono troppo corti per il raggio vengono lasciati e contati.
- `Selezionare il secondo oggetto oppure Shift-selezionare per applicare l'angolo [Raggio]`. Tenere premuto {{key:Shift}} mentre si fa clic per un angolo vivo, qualunque sia il raggio.

Fare clic su ogni oggetto sulla parte che si vuole mantenere. Due linee che non si incontrano vengono prolungate. Due linee parallele ricevono un semicerchio attraverso lo spazio, all'estremità della prima linea più vicina al clic. Un cerchio non viene mai tagliato. Due segmenti della stessa polilinea uno accanto all'altro ricevono l'arco dentro la polilinea; una polilinea e un altro oggetto funzionano quando il taglio cade sul primo o sull'ultimo segmento della polilinea.

### CHAMFER

Alias: `CHA`. Linee e segmenti rettilinei delle polilinee. Stampa prima le distanze correnti (oppure lunghezza e angolo).

- `Selezionare la prima linea [Annulla/Polilinea/Distanza/Angolo/Rifila/Metodo/Multiplo]`
  - `D` chiede `Specificare la prima distanza di smusso <ultima>` e `Specificare la seconda distanza di smusso <la prima>`: la prima viene tagliata dalla prima linea indicata, la seconda dall'altra.
  - `A` chiede `Specificare la lunghezza dello smusso sulla prima linea` e `Specificare l'angolo dello smusso dalla prima linea`.
  - `E` (Metodo) sceglie quale dei due usa lo smusso successivo. `T`, `M`, `U` e `P` funzionano come in {{cmd:FILLET}}.
- `Selezionare la seconda linea oppure Shift-selezionare per applicare l'angolo [Distanza/Angolo/Metodo]`. {{key:Shift}}+clic fa un angolo vivo.

Una distanza più lunga della linea viene rifiutata (`La distanza è troppo grande.`).

### BREAK e BREAKATPOINT

Alias: `BR`. `Selezionare l'oggetto` (dove si fa clic è il primo punto), `Specificare il secondo punto di interruzione [Primo punto]`; `F` chiede `Specificare il primo punto di interruzione` e `Specificare il secondo punto di interruzione`. La parte tra i due va via; su un cerchio, in senso antiorario dal primo punto. BREAKATPOINT chiede `Specificare il punto di interruzione` e divide l'oggetto in due in quel punto (non un cerchio).

### LENGTHEN

Alias: `LEN`. `Selezionare un oggetto da misurare [Delta/Percentuale/Totale/DYnamic]`: una scelta stampa `Lunghezza corrente` (e l'angolo al centro di un arco) e chiede di nuovo. `DE` chiede `Immettere la lunghezza delta (negativa accorcia) [Angolo]`, `P` `Immettere la lunghezza in percentuale`, `T` `Specificare la lunghezza totale [Angolo]`, `DY` trascina. Poi `Selezionare un oggetto da modificare [Annulla]`, ripetuto: si muove l'estremità più vicina al clic. Linee, archi e polilinee aperte.

### JOIN

Alias: `J`. `Selezionare gli oggetti da unire`. Linee, archi e polilinee aperte che si incontrano punta a punta diventano polilinee (chiuse quando la catena si chiude); linee sulla stessa retta diventano un'unica linea; archi dello stesso cerchio diventano un unico arco o il cerchio. La cronologia dice quanti oggetti si sono uniti e quanti no.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Selezionare l'oggetto sorgente`, poi `Selezionare gli oggetti di destinazione [Impostazioni]` e {{key:Enter}}. Copia layer e colore e, tra oggetti dello stesso tipo, l'altezza e la larghezza del testo, le dimensioni delle quote, o il motivo del tratteggio. `S` chiede `Attivare o disattivare una proprietà [Colore/LAyer/Testo/Quota/Tratteggio]`, ripetuto fino a {{key:Enter}}; la scelta è ricordata per la sessione.

### EXPLODE

Alias: `X`. Le polilinee diventano linee e archi, i riferimenti a blocco diventano i loro oggetti, le quote diventano linee, frecce e testo. Una serie che resta modificabile ({{cmd:ARRAYEDIT}}) diventa copie semplici dei suoi oggetti.

- `Selezionare oggetti`

### GROUP

Alias: `G`. {{cmd:GROUP}} dà agli oggetti selezionati un nome che condividono. Selezionare gli oggetti, poi digitare un nome (senza spazi; `?` elenca i gruppi; Invio crea un gruppo senza nome) e, per un gruppo con nome, una descrizione facoltativa. Da quel momento un clic su uno di essi, o una finestra che ne prende uno, seleziona tutti, così si spostano, copiano e cancellano insieme; ogni oggetto resta un oggetto a sé. Un oggetto può stare in più gruppi. La copia di un gruppo intero è un nuovo gruppo senza nome; la copia di un solo membro entra nel gruppo. I gruppi appartengono allo spazio in cui sono stati creati (il modello oppure una tavola). Sono mantenuti quando si salva come DWG o DXF e si riapre il file in CadCraft; i file DXF 2000 li portano anche come oggetti gruppo per altri programmi, e i gruppi creati in un altro programma vengono letti quando si apre un DXF o un DWG.

### UNGROUP

{{cmd:UNGROUP}} scompone i gruppi: selezionare oggetti dei gruppi (ognuno dei gruppi in cui si trovano viene scomposto) oppure digitare `Nome` e il nome del gruppo. Gli oggetti restano nel disegno. Un passo di annullamento riporta i gruppi.

### GROUPEDIT

{{cmd:GROUPEDIT}} modifica un gruppo. Indicare uno dei suoi oggetti, oppure `Nome` e il suo nome; un gruppo già selezionato viene preso così com'è. Poi: `Add` oggetti (indicati uno alla volta, non gruppo per gruppo), `Remove` oggetti, `REName` il gruppo, cambiarne la `Description`, oppure impostare `Selectable` (se un clic su un oggetto seleziona l'intero gruppo). `eXit` oppure Invio termina. Un gruppo senza più oggetti scompare.

### PICKSTYLE

- `Selezione di gruppo: 0 un clic seleziona un oggetto, 1 l'intero gruppo`: con `1` (l'impostazione iniziale) un clic o una finestra su un oggetto raggruppato seleziona l'intero gruppo; con `0` singoli oggetti, così si può modificare un solo membro. Mantenuto per questa sessione.

## Appunti

Gli appunti propri di CadCraft: funzionano dentro un disegno, tra disegni e tra schede di CadCraft in questo browser. Vedere [Copiare, incollare e duplicare](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, oppure {{ui:Copy}} nel gruppo {{ui:Edit}}. Copia oggetti negli appunti, con i blocchi e i layer che usano. Gli oggetti restano selezionati.

- `Selezionare oggetti da copiare` (saltato quando gli oggetti sono già selezionati)

### CUTCLIP

{{key:Mod+X}}, oppure {{ui:Cut}} nel menu {{ui:More}}. Copia oggetti negli appunti, poi li cancella (un passo di annullamento).

- `Selezionare oggetti da tagliare` (saltato quando gli oggetti sono già selezionati)

### COPYBASE

Copia oggetti negli appunti con un punto base indicato; incollando, quel punto viene posizionato.

- `Specificare il punto base`
- `Selezionare oggetti da copiare`

### PASTECLIP

{{key:Mod+V}}, oppure {{ui:Paste}} nel gruppo {{ui:Edit}}. La copia segue il cursore, pendendo dall'angolo in basso a sinistra del proprio ingombro (oppure dal suo centro, o dal punto di `COPYBASE`; vedere [Impostazioni di CadCraft](topic:settings)).

- `Specificare il punto di inserimento`

Gli oggetti incollati vengono selezionati. Un blocco che il disegno ha già con lo stesso nome mantiene la definizione di questo disegno.

Quando un'area copiata in MarkupCraft è più recente di ciò che ha copiato CadCraft (e ha meno di 6 ore), {{key:Mod+V}} e `PASTECLIP` incollano invece quell'area: vedere `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Paste a copied area}} nel menu {{ui:More}}. Incolla un'area copiata con {{ui:Copy area}} in MarkupCraft come immagine alla sua dimensione reale. Vedere [Immagini in un disegno](topic:pictures).

- `Specificare l'angolo in basso a sinistra dell'area copiata`
- `Scalare la sua dimensione su carta di (100 per una tavola 1:100; Punti: due punti su di essa e la loro distanza reale) [Punti] <1>` (solo quando la tavola non aveva una scala di disegno): un numero, {{key:Enter}} per la dimensione su carta, oppure `P`, poi `Primo punto sull'area incollata`, `Secondo punto sull'area incollata` e la loro distanza reale.

### PASTEORIG

{{key:Mod+Shift+V}}, oppure {{ui:Paste in place}} nel menu {{ui:More}}. Incolla alle coordinate da cui gli oggetti sono stati copiati. Non chiede nulla.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, oppure {{ui:Duplicate and move}} nel menu {{ui:More}}. Una copia degli oggetti si sposta con il puntatore da dove si trova; {{key:Esc}} non lascia nulla. Non usa gli appunti.

- `Selezionare oggetti da duplicare` (saltato quando gli oggetti sono già selezionati)
- `Specificare dove va la copia (Esc non lascia nulla)`: fare clic, digitare un punto, `@dx,dy` (da dove si trovava il puntatore), oppure una distanza verso il cursore.

### SELECT

Chiede `Selezionare oggetti` (con ogni opzione qui sotto) e lascia selezionato ciò che si è scelto, per il comando successivo o per `P` più tardi.

### QSELECT

Alias: `QS`. Nel browser, la finestra {{ui:Quick select}} (vedere [Selezionare oggetti](topic:select-objects#select-by-a-rule-quick-select)). Senza di essa, la riga di comando chiede `Immettere il tipo di oggetto`, `Immettere la proprietà`, `Immettere l'operatore [=/<>/>/</*/Seleziona tutto] <=>` e `Immettere il valore`. Le corrispondenze diventano la selezione.

### SELECTSIMILAR

Alias: `SIM`. `Selezionare oggetti [SElezioni]` (oppure la selezione corrente): seleziona ogni oggetto dello stesso tipo con lo stesso layer e colore (e nome di blocco, motivo di tratteggio). `SE` chiede `Attivare o disattivare una proprietà [LAyer/COlore/NAme/MOtivo/ALtezza]`, ripetuto fino a {{key:Enter}}.

### FIND

Nessun alias; oppure {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Nel browser, la finestra {{ui:Find and replace}} (vedere [Aggiungere testo ed etichette](topic:text#find-and-replace-words)). Senza di essa: `Immettere il testo da trovare`, poi `Immettere il testo sostitutivo (Invio: seleziona ciò che è trovato)`. Cerca nel testo, nei valori degli attributi e nel testo delle quote, nella scheda aperta o nella selezione.

### SELECTALL e DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) seleziona ogni oggetto modificabile sulla scheda aperta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; oppure {{key:Esc}}) annulla la selezione.

## Quote

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distanza orizzontale o verticale.

- `Specificare l'origine della prima linea di riferimento [Seleziona oggetto]` (Invio oppure `S`: `Selezionare l'oggetto da quotare`, poi fare clic su una linea, un arco, un cerchio o un segmento di polilinea)
- `Specificare l'origine della seconda linea di riferimento`
- `Specificare la posizione della linea di quota [Testo/Orizzontale/Verticale/Ruotata]`. `T` chiede il testo (`<>` è il valore misurato), `H` e `V` fissano la direzione, `R` chiede `Specificare l'angolo della linea di quota <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. La distanza reale tra due punti.

- Origini come in {{cmd:DIMLINEAR}}, poi `Specificare la posizione della linea di quota [Testo]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Selezionare un arco, un cerchio o una linea, oppure Invio per un vertice`
- Arco: il suo angolo. Cerchio: `Specificare il secondo punto finale dell'angolo`. Linea: `Selezionare la seconda linea`. Invio: `Specificare il vertice dell'angolo`, `Specificare il primo punto finale dell'angolo`, `Specificare il secondo punto finale dell'angolo`.
- `Specificare la posizione della linea di quota [Testo]`: fare clic dentro l'angolo da misurare.

### DIMRADIUS e DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Selezionare un arco o un cerchio`, poi `Specificare la posizione della linea di quota [Testo]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continua dall'ultima quota lineare o allineata fatta (oppure chiede `Selezionare una quota lineare o allineata`).

- `Specificare la seconda origine della linea di riferimento [Annulla]`, ripetuto fino a Invio.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Come {{cmd:DIMCONTINUE}}, ma ogni quota parte dalla prima origine ed è impilata più lontano.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specificare la posizione della caratteristica`, poi `Specificare l'estremità della guida [Xdatum/Ydatum/Testo]`. Scrive quanto la caratteristica dista dall'origine dell'UCS lungo X o lungo Y, su una guida: una guida che va per lo più su o giù legge X, una che va di lato legge Y; `Xdatum` e `Ydatum` fissano quale. Impostare prima l'origine con {{cmd:UCS}} (senza, è lo 0,0 del disegno). I grip spostano la caratteristica, l'origine e l'estremità della guida, e il valore segue. Salvata come vera quota di ordinata in DWG e DXF. Rifiuta un'estremità della guida sulla caratteristica stessa.

### DIMARC

Alias: `DAR`. `Selezionare un arco o un segmento d'arco di polilinea`, poi `Specificare la posizione della quota di lunghezza d'arco [Testo]`. Misura lungo l'arco (non la corda) e scrive il simbolo dell'arco prima del valore. Rifiuta un cerchio intero, una linea o un segmento rettilineo di polilinea. Un DWG la conserva come quota di lunghezza d'arco; un DXF la conserva come quota angolare con la lunghezza come testo, e CadCraft la riapre come quota di lunghezza d'arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Selezionare un arco o un cerchio`, `Specificare la sostituzione della posizione del centro`, `Specificare la posizione della spezzatura`. Una quota di raggio per una curva il cui centro è lontano o fuori dal foglio: la linea di quota parte dal punto indicato invece che dal centro, con una spezzatura, e scrive comunque il raggio reale. Un DWG la conserva come quota di raggio spezzato; un DXF la conserva come quota di raggio, e CadCraft la riapre spezzata.

### DIMJOGLINE

Alias: `DJL`. `Selezionare la quota da spezzare [Rimuovi]`, poi `Specificare la posizione della spezzatura (o premere Invio)`. Mette un simbolo di spezzatura sulla linea di una quota lineare o allineata, per mostrare che la distanza non è in scala; il valore non cambia. `Rimuovi` lo toglie. Rifiuta gli altri tipi di quota.

### QDIM

Nessun alias. `Selezionare la geometria da quotare`, poi `Specificare la posizione della linea di quota [Continua/Sfalsata/Di base/Ordinata/Raggio/Diametro/punto di Datum]`. Quota più oggetti in un solo passo, dalle estremità di linee e segmenti di polilinee, dai centri di cerchi e archi, da punti e riferimenti a blocchi. Una posizione sopra o sotto gli oggetti misura in attraversamento, una accanto a essi misura in verticale. `Continua` concatena i punti, `Di base` misura tutto dal primo, `Sfalsata` annida le coppie dal centro verso l'esterno, `Ordinata` dà a ogni punto la sua distanza dal datum (`datumPoint` ne sceglie uno nuovo), `Raggio` e `Diametro` quotano ogni cerchio e arco indicato. La modalità è ricordata. Tutto ciò che crea è un passo di annullamento. Lo dice quando ci sono meno di due punti, oppure nessun arco o cerchio per Raggio e Diametro.

### DIMBREAK

Alias: `DBREAK`. `Selezionare le quote a cui aggiungere o rimuovere interruzioni`, poi `Interrompere dove altri oggetti attraversano [Auto/Manuale/Rimuovi] <Auto>`. `Auto` lascia uno spazio nelle linee di quota e di riferimento ovunque un altro oggetto le attraversi, e ricalcola gli spazi quando quegli oggetti o la quota si spostano. `Manuale` (una quota) chiede due punti e lascia uno spazio tra di essi. `Rimuovi` toglie tutti gli spazi. Lo spazio è 1,5 volte l'altezza del testo della quota.

### DIMSPACE

Nessun alias. `Selezionare la quota di base`, `Selezionare le quote da spaziare`, `Immettere il valore di spaziatura oppure Auto <Auto>`. Sposta le linee di quota di quote lineari e allineate parallele (oppure angolari dallo stesso vertice) in modo che stiano alla stessa distanza, contata dalla quota di base, ciascuna dal lato in cui si trova. `0` le allinea con la base; `Auto` è il doppio dell'altezza del testo della quota di base. Le quote non parallele alla base vengono lasciate in pace.

### DIMINSPECT

Nessun alias. `Selezionare le quote`, `Forma del riquadro di ispezione [Tondo/Angolare/Nessuno/rimuovi] <Tondo>`, `Immettere l'etichetta`, `Immettere la frequenza di ispezione <100%>`. Disegna un riquadro attorno al valore con un'etichetta prima e la frequenza di ispezione dopo. `rimuovi` lo toglie. Il testo di tolleranza resta con il valore.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Immettere il nome della variabile di quota da sovrascrivere oppure Cancella`, `Immettere il nuovo valore per …`, di nuovo fino a Invio, poi `Selezionare le quote`. Cambia quelle impostazioni solo sulle quote selezionate; lo stile della quota non cambia. Accetta le variabili che sono un numero o un interruttore (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Cancella` riporta le quote selezionate al loro stile. Rifiuta un nome che non è una variabile del genere e un valore che non può assumere.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Selezionare le quote`, poi per ciascuna le sue origini delle linee di riferimento (`Specificare la prima origine della linea di riferimento su un oggetto`: aggancio a un'estremità o al punto medio di una linea, a un vertice di polilinea, a un centro; Invio lascia libero quel punto), oppure, per una quota di raggio, diametro, raggio spezzato o lunghezza d'arco, `Selezionare un arco o un cerchio`. La quota viene poi legata a quegli oggetti: quando si spostano o cambiano dimensione, la quota la segue nello stesso passo di annullamento e si ri-misura. Spostare a mano un punto legato, oppure cancellare l'oggetto, termina il legame. Il legame è salvato in DWG e DXF 2000 come dati propri di CadCraft; gli altri programmi vedono una quota ordinaria.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Selezionare le quote`. Le libera dagli oggetti a cui sono legate; nulla si sposta.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Selezionare cerchio o arco per aggiungere il segno di centro`, di nuovo fino a Invio. Disegna una croce al centro e quattro linee di centro fino appena oltre la curva (tipo di linea CENTER), come linee semplici sul layer corrente; dimensionate in base alla dimensione della freccia e alla scala generale delle impostazioni di quota correnti, e ruotate con l'UCS. Non seguono il cerchio se questo si sposta.

### CENTERLINE

Alias: `CL`. `Selezionare la prima linea`, `Selezionare la seconda linea`. Disegna una linea a metà tra due linee (lungo la bisettrice quando si incontrano), un po' più lunga di esse, con tipo di linea CENTER. Una linea semplice: non segue le due linee.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nessun alias. Ciascuno chiede `Immettere il nuovo valore per … <corrente>` e imposta quella dimensione per le **nuove** quote: scala generale, altezza del testo, dimensione delle frecce, cifre decimali (fino a 8), spazio attorno al testo, prolungamento oltre la linea di quota, distanza dall'origine. Vedere [Impostare le dimensioni delle quote](topic:dimension-settings).

### DIMLUNIT

Impostazione di quota: il formato solo per le nuove quote (1 scientifico, 2 decimale, 3 ingegneristico, 4 architettonico, 5 frazionario).

### DIMSTYLE e -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Il gestore degli stili di quota: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` nella riga di comando: `Stile di quota [Ripristina/Salva/Elimina/Applica/Confronta/rinominaNome/Elenca]`. Vedere [Impostare le dimensioni delle quote](topic:dimension-settings#named-dimension-styles).

### DIMEDIT e DIMTEDIT

`DIMEDIT` (`DED`): `Modifica quota [Home/Nuovo/Ruota/Obliqua] <Home>`, poi le quote (oppure quelle già selezionate). Nuovo chiede il testo (`<>` = la misura); Ruota un angolo (0 rimette il testo a posto); Obliqua l'angolo delle linee di riferimento rispetto all'asse X (Invio = nessuno; solo quote lineari e allineate). `DIMTEDIT` (`DIMTED`): `Testo della quota [Sinistra/Destra/Centro/Home/Angolo] <Centro>`. Vedere [Impostare le dimensioni delle quote](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Unità nel testo delle nuove quote [Unità del disegno/mm/cm/m/km]`, oppure, con quote selezionate, `Unità nel testo delle quote selezionate`. Scrive la lunghezza misurata in quell'unità con l'unità dopo (DIMLFAC e un suffisso DIMPOST); `D` torna alle unità del disegno. Vedere [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Stampa `Lunghezza arco: … Tipo: …`, poi `Specificare il primo punto [Lunghezza arco/Oggetto/Rettangolare/Poligonale/Libero]`. Rettangolare chiede `Specificare l'angolo opposto`; Poligonale `Specificare il punto successivo (Invio chiude la nuvola) [Annulla]`; Libero segue il puntatore fino a un clic o a {{key:Enter}}; `O` chiede `Selezionare oggetto` e `Invertire la direzione? [Sì/No] <N>` e trasforma l'oggetto in nuvola. `A` chiede `Specificare la lunghezza di ogni arco`. `R`, `P` e `F` scelgono il tipo per la nuvola successiva. Il risultato è una polilinea chiusa di archi.

### MLEADER

Alias: `MLD`; oppure {{ui:Leader}}. `Specificare la posizione della punta della multiguida [Dimensione della freccia/Distanza di atterraggio/Blocco]`, `Specificare la posizione di atterraggio della guida`, poi il testo nella casella sul posto (oppure, senza di essa, `Immettere il testo (una riga vuota termina)`). `Blocco` chiede prima un nome di blocco, e la multiguida mostra quel blocco invece del testo. Altre linee di guida: {{cmd:MLEADEREDIT}}. Salvata come vera multiguida in DWG; DXF conserva le linee, la freccia e il testo che disegna.

### MLEADEREDIT

Alias: `MLE`. `Selezionare una multiguida`, poi `Specificare la posizione della punta della multiguida [Rimuovi guide/Contenuto blocco/Contenuto testo]`: ogni punto aggiunge una linea di guida da una nuova punta allo stesso atterraggio, fino a Invio. `Rimuovi guide` toglie poi la linea di guida su cui si fa clic (una multiguida ne conserva almeno una). `Contenuto blocco` chiede un nome di blocco e mostra quel blocco invece del testo (ne vengono chiesti gli attributi); `Contenuto testo` rimette il testo. Ogni linea di guida ha il proprio grip. Un DWG conserva ogni linea di guida e il blocco in un'unica multiguida.

### MLEADERALIGN

Alias: `MLA`. `Selezionare le multiguide`, poi `Selezionare la multiguida a cui allineare [Distribuisci/Spaziatura/Usa la spaziatura corrente]` e `Specificare la direzione`. Sposta gli atterraggi delle altre multiguide (e il loro testo o blocco) sulla linea che passa per l'atterraggio di quella indicata, nella direzione data; le punte restano dove puntano. `Spaziatura` le imposta anche a distanza uguale; `Distribuisci` chiede due punti e le distribuisce in modo uniforme tra di essi. Servono almeno due multiguide.

### MLEADERCOLLECT

Alias: `MLC`. `Selezionare le multiguide`, poi `Specificare la posizione della multiguida raccolta [Verticale/Orizzontale]` (Invio mantiene il posto della prima). Ne crea una da più: i loro blocchi entrano in un nuovo blocco che contiene ogni blocco affiancato o uno sotto l'altro; i contenuti di testo diventano un'unica nota con una riga per ciascuno. La prima multiguida conserva le sue linee di guida; le altre vengono rimosse. Rifiuta un misto di contenuti testo e blocco.

### TABLE

Alias: `TB`; oppure {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Crea una tabella: un oggetto che si sposta, copia, ruota, scala e stampa come gli altri, con le sue celle conservate come dati.

- `Numero di righe di dati o [Incolla/File/Stile] <3>`, poi `Numero di colonne <3>`, `Altezza del testo` e `Angolo in alto a sinistra della tabella`. La tabella riceve una riga di titolo (una cella unita) e una riga di intestazione sopra le righe di dati.
- `P`: una tabella da celle di foglio di calcolo negli appunti (testo con una tabulazione tra le celle). Premere {{key:Ctrl+V}} con tali celle negli appunti fa lo stesso, a meno che la copia di CadCraft non sia più recente (oppure CadCraft non può dirlo: allora incolla la propria copia e lo dice). `F`: una tabella da un file `.csv` o separato da tabulazioni. La prima riga diventa la riga di intestazione; le larghezze di colonna si adattano al testo.
- `S`: sceglie lo stile di tabella per questa tabella (vedere {{cmd:TABLESTYLE}}).
- Rifiuta un numero di righe o colonne che non è intero, e più celle di quante ne contenga una tabella (2.000 righe, 200 colonne, 40.000 celle).
- {{cmd:EXPLODE}} trasforma una tabella in linee e testo. Salvata come DWG una tabella è un vero oggetto tabella che altri programmi possono modificare; salvata come DXF è un blocco che la disegna, e CadCraft la riapre come tabella.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; oppure fare doppio clic su una cella. Modifica una tabella.

- `Indicare una cella in cui digitare (Invio per terminare) oppure [Riga/Colonna/Dimensione/Unisci/Separa/Allinea/Altezza/Tipo/Cancella]`. Fare clic su una cella, oppure, con una tabella selezionata, digitarne il nome (`B3`: colonna B, riga 3; la riga del titolo è la riga 1). Nel browser si apre una casella sopra la cella: {{key:Enter}} mantiene il testo, {{key:Tab}} va alla cella successiva, {{key:Alt+Enter}} inizia una nuova riga, {{key:Esc}} lascia la cella com'era.
- Un testo che inizia con `=` è una formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, parentesi e funzioni come `sqrt` e `round`. La cella mostra il valore; una formula che nomina la propria cella, una cella fuori dalla tabella o una cella senza numero mostra `####` e la riga di comando dice perché.
- `R` / `C`: `Inserisci` oppure `Elimina` righe o colonne in una cella indicata (quante, e sopra o sotto, a sinistra o a destra). Le formule seguono le celle che nominano.
- `S`: la larghezza della colonna e l'altezza della riga. Una riga non è mai più bassa di ciò che il suo testo richiede. Una tabella selezionata ha anche un grip sul bordo di ogni colonna e di ogni riga.
- `M`: unisce da una cella indicata a un'altra; `U`: separa. `A`: allineamento (`TL` in alto a sinistra … `MC` al centro … `BR` in basso a destra). `H`: l'altezza del testo propria di questa cella (0 = quella dello stile). `K`: rende la riga un titolo, un'intestazione o una riga di dati. `CL`: svuota la cella.
- Rifiuta una tabella su un layer bloccato, l'eliminazione di tutte le righe o colonne, e un'unione che taglierebbe in due un'altra cella unita.

### TABLESTYLE

Alias: `TS`. Elenca gli stili di tabella con quante tabelle ne usano ciascuno, poi `Stile di tabella: [Nuovo/Imposta/Modifica/Elimina/Applica]`.

- Uno stile contiene l'altezza del testo e l'allineamento delle righe di titolo, intestazione e dati, il margine delle celle, e quali bordi vengono disegnati (esterni, tra le righe, tra le colonne).
- `N` crea uno stile dal corrente e lo rende corrente; `S` imposta lo stile corrente (le nuove tabelle lo prendono); `E` modifica uno stile: le tabelle che lo usano vengono ridisegnate; `A` dà alle tabelle selezionate lo stile corrente; `D` elimina uno stile (non Standard, non quello corrente; le tabelle che lo usavano mantengono il loro aspetto).
- Gli stili sono salvati con il disegno (DWG e DXF).

### TABLEEXPORT

Salva ciò che una tabella mostra come file CSV (una formula come il suo valore). `Selezionare una tabella`, oppure selezionarne una prima. Le celle di testo che iniziano con `=`, `+`, `-` o `@` ricevono un `'` iniziale, così un foglio di calcolo non le esegue.

### TABLEPASTE

Alias: `PASTETABLE`. Crea una tabella da celle di foglio di calcolo negli appunti, poi chiede l'angolo in alto a sinistra. Lo stesso di {{cmd:TABLE}} › `Incolla`.

### DATALINK

Alias: `DL`. `Collegamento dati: [Nuovo/Elenca/Rimuovi] <Nuovo>`. `N` chiede un file CSV, colloca una tabella di esso e ricorda il nome del file; `L` elenca i collegamenti con il loro file, la dimensione, quando sono stati letti e quante tabelle lo usano; `R` rimuove un collegamento (le sue tabelle restano come tabelle semplici).

### DATALINKUPDATE

Alias: `DLU`. Rilegge il file di un collegamento dati e riempie di nuovo le tabelle collegate (righe e colonne vengono aggiunte o tolte per corrispondere). Un browser non può aprire un file da solo, quindi chiede di scegliere di nuovo il file. Con più collegamenti chiede quale.

### FIELD

Mette un campo nel disegno: un testo che si calcola da sé. `Campo: [Data/Nomefile/Tavola/Proprietà/Oggetto/Espressione/Codice] <Data>`:

- `D`: adesso, oppure la data salvata, creata o stampata, e un formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: il nome del file, con o senza estensione. `S`: il numero della tavola, il suo titolo, oppure quante tavole ci sono. `P`: una proprietà del disegno per nome (vedere {{cmd:DWGPROPS}}). `O`: indicare un oggetto, poi cosa leggere (area, lunghezza, perimetro, raggio, diametro, layer, nome, x, y, testo, rotazione, colore) e le cifre decimali. `E`: una formula. `C`: un testo con codici digitati così come sono, come `Tavola %<sheetnumber>% di %<sheetcount>%`.
- Poi `Selezionare un testo, una cella di tabella o un blocco con attributi in cui metterlo (Invio: un nuovo testo)`: un testo indicato riceve il campo aggiunto dopo ciò che contiene; una cella di tabella lo stesso; un riferimento a blocco chiede quale attributo; {{key:Enter}} chiede un'altezza e un punto per un nuovo testo.
- A schermo un campo ha uno sfondo grigio chiaro; una stampa o un PDF non lo hanno mai. Digitare a mano sul testo di un campo ne termina il campo. Un campo che non si può calcolare mostra `####`.
- Il campo di un oggetto trova il suo oggetto con la chiave che CadCraft conserva sugli oggetti (Impostazioni › CadCraft › File adatti al merge); con le chiavi disattivate rifiuta.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Selezionare gli oggetti i cui campi aggiornare (Invio: ogni campo) oppure [Impostazioni]`. `S` imposta quando i campi si aggiornano da soli: digitare le lettere di `O` apre, `S` salva, `P` stampa, `R` rigenera (tutte e quattro per iniziare), oppure `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Elenca le proprietà del disegno, poi `Modifica: [Titolo/Oggetto/Autore/Azienda/Parole chiave/coMmenti/Personalizzata/Rimuovi/eXit]`. Le prime sei sono quelle mostrate dal pannello {{ui:Drawing details}}; `U` aggiunge un proprio nome e valore, `R` ne rimuove uno. I campi le leggono (`%<prop:title>%`, `%<prop:Client>%`) e le seguono subito. Rifiuta un nome personalizzato che è uno di quelli predefiniti, oppure che contiene `%`, `<`, `>`, una virgoletta o una barra rovesciata.

## Parametrico

Vedere [Vincolare un disegno](topic:constraints) e [Usare parametri ed equazioni](topic:parameters). I vincoli lavorano sulla scheda {{ui:Model}}.

### GEOMCONSTRAINT e i comandi GC

Alias `GCON`: `Immettere il tipo di vincolo [Orizzontale/Verticale/Perpendicolare/PArallelo/Tangente/Coincidente/CONcentrico/COLlineare/Simmetrico/Uguale/Fissa] <Orizzontale>`, poi i prompt di quel comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Selezionare un oggetto [2Punti] <2Punti>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Selezionare il primo oggetto`, `Selezionare il secondo oggetto` (il secondo si sposta).
- {{cmd:GCCOINCIDENT}}: `Selezionare il primo punto [Oggetto/Vincolo automatico] <Oggetto>`, `Selezionare il secondo punto [Oggetto] <Oggetto>`.
- {{cmd:GCFIX}}: `Selezionare il punto [Oggetto] <Oggetto>`.
- {{cmd:GCSYMMETRIC}}: `Selezionare il primo oggetto [2Punti] <2Punti>`, `Selezionare il secondo oggetto`, `Selezionare la linea di simmetria`.

### DIMCONSTRAINT e i comandi DC

Alias `DCON`: `Selezionare la quota associativa da convertire [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specificare il primo punto di vincolo [Oggetto] <Oggetto>`, `Specificare il secondo punto di vincolo`, `Specificare la posizione della linea di quota`, `Testo della quota <d1=40>` (un numero, un'espressione, oppure `nome=espressione`).
- {{cmd:DCALIGNED}}: come sopra, con `[Oggetto/Punto e linea/2Linee]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Selezionare un arco o un cerchio`. {{cmd:DCANGULAR}}: `Selezionare la prima linea o l'arco`, `Selezionare la seconda linea`.
- {{cmd:DCCONVERT}}: `Selezionare le quote da convertire`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Selezionare oggetti [Impostazioni]`. `S` chiede le tolleranze di distanza e di angolo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Selezionare oggetti`; i loro vincoli vanno via.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Selezionare oggetti [Mostra tutto/Nascondi tutto]`, poi `[Mostra/Nascondi]`.
- {{cmd:DCDISPLAY}}: `Immettere un'opzione [Mostra/Nascondi]`.

### PARAMETERS e -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) apre il pannello {{ui:Parameters}}. `-PARAMETERS`: `Immettere un'opzione [Nuovo/Modifica/Rinomina/Elimina/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Scarica una macro (.swb) che ricostruisce il modello come un unico schizzo vincolato in SolidWorks. Vedere [Spostare schizzi da e verso altri modellatori di parti](topic:solidworks-sketches).

## Blocchi

### ANNOSCALE

Alias: `CANNOSCALE`. Dice la scala di annotazione del disegno e quanti oggetti annotativi contiene, poi chiede `Nuova scala di annotazione`: digitare `1:50`, `1:100`, `2:1`, un numero semplice (`50` è 1:50) oppure il nome di una delle scale proprie del disegno. Ogni testo e quota annotativi viene ridimensionato in modo da stampare alla stessa dimensione alla nuova scala, in un solo passo di annullamento; gli oggetti non annotativi restano come sono, e così un oggetto che conserva un elenco di scale senza la nuova ({{cmd:OBJECTSCALE}}). Vedere [Unità, formati e scale](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Selezionare oggetti annotativi`, poi `Scale di annotazione degli oggetti selezionati [Aggiungi/Elimina/Scala corrente/Elenca/eXit] <Aggiungi>`. Un testo o una quota annotativi conserva un elenco di scale di annotazione. `Aggiungi` ed `Elimina` chiedono una scala (`1:50`, `2:1`, un numero semplice, oppure il nome di una delle scale proprie del disegno); `Scala corrente` aggiunge la scala di annotazione del disegno; `Elenca` stampa le scale di ogni oggetto. Una viewport la cui scala è nell'elenco di un oggetto lo mostra alla dimensione che stampa la sua altezza su carta a quella scala, a schermo e nelle stampe. L'ultima scala non si può eliminare. Gli oggetti non annotativi vengono lasciati fuori: attivare prima Annotativo in Proprietà. Gli elenchi sono salvati in DWG e DXF come dati propri di CadCraft. Vedere [Unità, formati e scale](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Mostrare oggetti annotativi a tutte le scale [ON/OFF]`. On (all'avvio di un disegno): un oggetto annotativo appare anche in una viewport, o nel modello, la cui scala non è nel suo elenco, alla dimensione che ha. Off: non viene mostrato lì, e non può essere indicato nel modello. L'interruttore è un passo di annullamento; non viene conservato nel file.

### SCALELISTEDIT

Alias: `SCALELIST`. `Elenco scale [Aggiungi/Modifica/Elimina/Elenca/Reimposta]` fino a {{key:Enter}}. Aggiungi: `Nome scala`, `Unità della carta`, `Unità del disegno`. Modifica ed Elimina chiedono il nome della scala. Le scale proprie del disegno entrano negli elenchi di scala delle viewport e delle stampe e sono salvate con il disegno. Vedere [Unità, formati e scale](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT e PEDIT

`SPLINE` (`SPL`): `Primo punto della spline [Metodo/Oggetto] (Punti di adattamento)`. Adattamento: punti attraverso cui passa la curva; `Chiudi`, `Annulla`, poi `Tangente iniziale` e `Tangente finale` (un punto, oppure {{key:Enter}}). Metodo › Vertici di controllo chiede un grado (da 1 a 5) e disegna da un poligono di controllo. Oggetto trasforma le polilinee in spline attraverso i loro vertici. `SPLINEDIT` (`SPE`): `[Dati di adattamento/Modifica vertice/converti in Polilinea/Apri o Chiudi/Inverti/Annulla/eXit]`; Dati di adattamento `[Aggiungi/Elimina/Sposta/Pulisci/Tangenti/eXit]`; Modifica vertice `[Aggiungi punto di controllo/Sposta/Peso/eXit]`. `PEDIT` (`PE`): `[Chiudi/Apri/Unisci/Larghezza/Adatta/Spline/Decurva/Gen tipo linea/Inverti/Annulla/eXit]`, `M` per più oggetti; linee, archi e spline sono proposti prima come polilinee. Vedere [Spline e polilinee](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Immettere il nome del blocco`. Se esiste: `Il blocco "…" esiste già. Ridefinirlo? [Sì/No] <N>`.
- `Specificare il punto base di inserimento`
- `Selezionare oggetti`. Sono sostituiti da un unico riferimento al nuovo blocco.

### WBLOCK

Alias: `W`, `-WBLOCK`. Scrive un blocco, alcuni oggetti oppure l'intero disegno come nuovo file DWG o DXF. `Origine di WBLOCK [Blocco/Intero disegno/Oggetti] <Oggetti>`:

- **Oggetti**: `Specificare il punto base di inserimento` (diventa l'origine del nuovo disegno), `Selezionare oggetti`, poi `Formato del file [DWG/DXF/R12 DXF]` e `Nome del file per il nuovo disegno`, poi `Cosa fare con gli oggetti [Mantieni/Converti in blocco/Elimina]`. Converti li sostituisce con un unico riferimento a un blocco con il nome del file; Elimina li rimuove.
- **Blocco**: `Blocco da scrivere`. Gli oggetti propri del blocco, con il suo punto base come origine, compresi i blocchi annidati.
- **Intero disegno**: ogni oggetto dello spazio modello. Le tavole non vengono scritte; usare {{cmd:SAVEAS}} per una copia che le conserva.

Il nuovo file contiene solo i layer, i tipi di linea, gli stili di testo e di quota e i blocchi che usano i suoi oggetti, e le unità del disegno. La versione di un DWG è quella che {{cmd:SAVEAS}} ha usato per ultima. Nel browser il file viene scaricato; in Studio si apre la finestra di salvataggio.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Stampa le modalità, poi `Immettere un'opzione da modificare (Invio a fine) [Invisibile/Costante/Preimpostato]`, `Immettere il nome dell'etichetta dell'attributo`, `Immettere la richiesta dell'attributo`, `Immettere il valore predefinito dell'attributo` (`Immettere il valore dell'attributo` se costante), `Specificare il punto iniziale del testo`, `Specificare l'altezza del testo`, `Specificare l'angolo di rotazione del testo`. {{cmd:BLOCK}} porta le definizioni di attributo nel blocco.

### EATTEDIT e ATTEDIT

`EATTEDIT` (`DDATTE`, oppure doppio clic su un riferimento con attributi; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Selezionare un riferimento a blocco con attributi`, poi la finestra {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): lo stesso riferimento, poi `<richiesta> (<ETICHETTA>) <valore>` per ogni attributo; Invio mantiene un valore. Vedere [Attributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Aggiornare gli attributi dei riferimenti di quale blocco [Nome/Seleziona/Tutti] <Seleziona>`. I valori sono mantenuti; i nuovi attributi ricevono il loro valore predefinito, quelli rimossi se ne vanno, le posizioni vengono reimpostate.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. La finestra: blocco, attributi (etichetta, richiesta, predefinito, modalità, ordine), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT e REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Selezionare il riferimento a blocco da modificare sul posto` (oppure la selezione). `REFCLOSE`: `Salvare le modifiche a "…" [Salva/Scarta] <Salva>`; {{ui:Save the block}} e {{ui:Discard}} nella barra fanno lo stesso. L'intera modifica è un passo di annullamento. Vedere [Attributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: se la pressione di un tratto di penna imposta lo spessore di linea di ciò che {{cmd:SKETCHFIX}} e {{cmd:SKETCHLIVE}} creano (attivo all'inizio). Vedere [Schizzare con una penna](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Dice quale standard di studio è in vigore per questo disegno e da dove viene: il registro proprio del disegno, quello condiviso del team, oppure le proprie Politiche predefinite (altezze del testo `all.anno.*`); senza nessuno, le dimensioni proprie del programma. `[Importa/Layer/Cartiglio/Cancella/eXit]`: `Importa` legge un `.json` `cc-office-standard` (il registro che scrivono SuperCad e BimCraft) in questo disegno, salvato con esso in DWG e DXF; `Layer` aggiunge i layer dello studio che il disegno non ha, in un passo di annullamento, e non ne rimuove mai uno; `Cartiglio` elenca i campi dello studio con i valori propri di questo disegno; `Cancella` rimuove il registro proprio del disegno. Le altezze del testo e delle quote annotative seguono lo standard in vigore. Vedere [Unità, formati e scale](topic:units-papers-scales).

### BPARAMS

Alias: `BPM`, `BLOCKPARAMS`. Apre il gestore dei parametri per il blocco nell'editor di blocchi, per il blocco del riferimento selezionato, oppure per il blocco che si nomina (`Nome del blocco`): parametri con formule, più parametri di visibilità con i loro stati, e i valori e gli stati propri del riferimento selezionato. Vedere [I propri parametri e stati di visibilità](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` fa lo stesso dalla riga di comando: `[Parametro/Visibilità/Stato/Assegna/Riferimento/Fatto]`.

### BEDIT e BCLOSE

`BE`; oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Immettere il nome del blocco da modificare <il blocco del riferimento selezionato>` apre l'editor di blocchi. `BCLOSE` chiede `Chiudere l'editor di blocchi su "…" [Salva/Scarta] <Salva>`; {{ui:Save block}} e {{ui:Discard changes}} nella barra fanno lo stesso. Tutto ciò che si fa nell'editor è un passo di annullamento.

### VIEWBASE

Alias: `FLATSHOT`. Una vista 2D piatta dei solidi nella scheda 3D: `Vista [Fronte/Alto/Destra/Sinistra/Retro/Basso/Iso]`, `Linee nascoste [Mostra/Nascondi]`, una scala (`1:20`, `2:1`; {{key:Enter}} prende quella che entra nella tavola), poi il centro della vista. Un riferimento a blocco: gli spigoli visibili su VIEW-VISIBLE, quelli nascosti tratteggiati su VIEW-HIDDEN. Vedere [Viste piatte su una tavola](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; oppure {{ui:All sheets in one PDF}} nella finestra {{ui:Plot to PDF}}. `Tavole da stampare [Tutte/Alcune]`: {{key:Enter}} stampa ogni tavola, `S` chiede nomi separati da virgole. Un PDF, una pagina e un segnalibro per tavola. Vedere [Ogni tavola in un unico PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Porta alla sezione {{ui:Sheet set}} del pannello di sinistra: tavole di molti disegni, numerate e intitolate, con i loro cartigli compilati dal set, pubblicate in un unico PDF. Vedere [Set di tavole](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): scegliere un DWG o DXF, poi il suo punto di inserimento. {{cmd:XREF}} (`XR`, `-XREF`): `Disegni collegati [?/Allega/Ricarica/Lega/Scollega] (Invio: ?)`; con più collegamenti, scegliere uno dei suoi riferimenti oppure digitare `N` e il suo nome. Vedere [Disegni collegati](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Selezionare un riferimento a blocco da contare, oppure [Tutti/Esporta] (Invio: Tutti)`: un'indicazione seleziona e conta ogni riferimento di quel blocco in questo spazio; {{key:Enter}} oppure `A` li elenca tutti; `E` poi `C` (conteggi) o `A` (attributi) scarica un CSV. Vedere [Contare blocchi ed esportare una tabella](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Immettere il nome del blocco o [File/Libreria] <ultimo blocco>` (le maiuscole non contano). `F` chiede un DWG o DXF, poi l'intero disegno oppure uno dei suoi blocchi; un nome già usato chiede {{ui:Keep existing}} oppure {{ui:Rename}}. `L` apre il pannello della libreria.
- `Specificare il punto di inserimento [Scala/Ruota]`. `S` chiede `Specificare il fattore di scala`, `R` chiede `Specificare l'angolo di rotazione`; entrambi sono ricordati.
- Quando il blocco sta già accanto a oggetti che si ripetono altrove senza di esso, una riga dice quanti posti vengono suggeriti e il prompt acquista `suGgerisci`: `G` li mostra; fare clic vicino a uno per mettere lì il blocco, `A` per tutti, {{key:Enter}} per tornare indietro. Prendono la rotazione dei vicini e i valori predefiniti degli attributi. I disegni con più di 20.000 oggetti nello spazio aperto non vengono cercati.
- Poi `Immettere <richiesta> (<ETICHETTA>) <predefinito>` per ogni attributo che il blocco chiede. Vedere [Attributi di blocco](topic:attributes).

### LIBRARY

Alias: `LIB`. Apre il pannello della libreria: posizionare elementi, controllare gli aggiornamenti, crediti della libreria. Nessuna domanda. Vedere [Inserire da un file o dalla libreria](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; oppure {{ui:3D member}} nella scheda {{ui:Standard}} della libreria. `Dimensione della sezione <W12x26>` (come la elenca la scheda), poi `Punto iniziale [Colonna]` e `Punto finale`: un'asta solida nella scheda 3D tra i due punti, appoggiata a terra. `C` chiede il punto base della colonna e la sua altezza. Un passo di annullamento. Vedere [Posizionare profilati in acciaio e componenti standard](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Angolo in alto a sinistra della distinta componenti`, poi `Altezza del testo <2.5>`: disegna una tabella di ogni componente standard e profilato in acciaio posizionato dalla libreria (numeri di elemento, quantità, componente, norma, dimensione, lunghezza, materiale, massa). Un passo di annullamento. Vedere [Posizionare profilati in acciaio e componenti standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Rimuove le definizioni di blocchi che nulla usa. Nessuna domanda.

### DELBLOCKS

Oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Selezionare il blocco da eliminare [Nome/eXit]`: indicare un riferimento a blocco, oppure `N` per l'elenco dei blocchi con un filtro (sceglierne più d'uno), oppure `X` / {{key:Enter}} per terminare. Ogni riferimento va via — nel modello, su ogni tavola e dentro altri blocchi — poi la definizione, e la riga di comando dice cosa è stato eliminato e cosa no. I blocchi senza nome e i disegni collegati non vengono offerti. Il prompt torna per il blocco successivo; l'intero comando è un passo di annullamento.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} incolla ciò che si è copiato ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) come un unico blocco: si indica il punto di inserimento e un riferimento a un nuovo blocco vi va, selezionato. Il blocco prende un nome proprio (`A$C` e un numero); {{cmd:RENAME}} gliene assegna uno personale. Un passo di annullamento rimuove il riferimento e il blocco.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} chiede il blocco da sostituire e quello da mettere al suo posto (`?` elenca i blocchi), poi cambia ogni riferimento nel modello, su ogni tavola e dentro altri blocchi. Ogni riferimento mantiene il suo posto, la scala, la rotazione, il layer e i valori degli attributi che entrambi i blocchi hanno; gli attributi che ha solo il nuovo blocco partono dai loro predefiniti, e dice quali valori sono stati persi. Quando nulla usa più il vecchio blocco, propone di rimuoverlo. Rifiuta i disegni collegati e una sostituzione che metterebbe un blocco dentro se stesso. Un passo di annullamento.

### MINSERT

{{cmd:MINSERT}} colloca un blocco in righe e colonne: nome del blocco, punto di inserimento, scala, rotazione, numero di righe e colonne, e le distanze tra di esse. L'intero insieme ruota con la rotazione. Ciascuno è un riferimento a sé (10.000 al massimo), quindi ognuno può essere spostato o cancellato in seguito.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Mostra il pannello {{ui:Blocks}} con il cursore nel suo filtro. Ogni blocco ha una piccola immagine; quelli inseriti più di recente vengono per primi. I due pulsanti accanto al filtro passano tra un elenco e una griglia di immagini. Fare clic su un'immagine (oppure su {{ui:Insert}}) per inserire il blocco con {{cmd:INSERT}}, oppure trascinarla nel disegno per metterla dove si lascia.

{{ui:Libraries}}, sotto l'elenco: {{ui:Add a drawing}} prende un file DWG o DXF proprio e ne elenca i blocchi con le immagini, e l'intero disegno come un blocco. Posizionarne uno copia la sua definizione (e i blocchi che annida, e i loro layer) in questo disegno, come fa l'opzione `File` di {{cmd:INSERT}}; un blocco già presente qui con la stessa definizione viene usato senza domande; uno con lo stesso nome ma diverso chiede {{ui:Keep existing}} oppure {{ui:Rename}}. Nel browser il file resta finché la pagina non si chiude. In CadCraft Studio {{ui:Add a folder}} elenca i disegni di una cartella, ciascuno aperto quando vi si fa clic, e file e cartelle vengono ricordati. La piccola x rimuove una libreria dall'elenco; il file non viene toccato. La {{ui:Library}} condivisa è un'altra cosa: vedere [Inserire da un file o dalla libreria](topic:insert-from-file-and-library).

### BCONVERT

Oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Trova la geometria che si ripete e trasforma ogni copia in un riferimento a un unico blocco.

- `Selezionare gli oggetti che si ripetono, oppure [Blocco]`: gli oggetti di una copia. `B` nomina invece un blocco esistente, per trovare copie sparse dei suoi oggetti.
- `Una copia può essere: speculare = No, scalata = No; layer, colore, tipo di linea e spessore = Corrispondenti … [Speculare/Scalata/Proprietà]`: `M`, `S` e `P` cambiano ciò che conta come copia; {{key:Enter}} cerca. Le impostazioni sono ricordate.
- `Nome per il nuovo blocco <Blocco1>`, poi `Specificare il punto base del blocco` ({{key:Enter}} prende l'angolo in basso a sinistra della selezione).
- Dice quanti altri insiemi di oggetti hanno la stessa geometria, evidenzia tutto ciò che sostituirebbe, e chiede `Sì/No`.

Una copia è gli stessi oggetti spostati e ruotati di un angolo qualsiasi (e speculati o scalati di un unico fattore quando sono attivi): ogni oggetto deve avere il suo corrispettivo, con un millesimo di milionesimo della dimensione della selezione. Ogni riferimento riceve la propria rotazione e scala (uno speculare ha una scala Y negativa), e il layer che condividevano i suoi oggetti. Gli oggetti su layer bloccati vengono lasciati stare e contati. Cerca nello spazio aperto (il modello oppure la tavola aperta). Una ricerca molto grande si ferma a un limite di lavoro e lo dice. Un passo di annullamento.

### BSEARCH

Oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Trova blocchi per [Nome/Attributo/Geometria] <Nome>`:

- `N`: parte di un nome di blocco, oppure un modello con `*` e `?`. Elenca ogni blocco con i suoi riferimenti qui e nell'intero disegno.
- `A`: un valore di attributo, oppure `ETICHETTA=valore`. Elenca i blocchi i cui riferimenti lo contengono, con i valori trovati. Gli attributi costanti contano.
- `G`: selezionare oggetti, oppure un riferimento a blocco, e vengono elencati i blocchi la cui forma è simile almeno all'85%, dal più simile. Dimensione, rotazione e specularità non contano. La misura confronta le distanze tra punti distribuiti lungo i contorni, quindi trova i sosia; usare {{cmd:BCONVERT}} per trovare copie esatte.

I riferimenti trovati nello spazio aperto vengono selezionati, pronti per il comando successivo.

### BREPLACE

Oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Sostituisci [Selezionati/Tutti]`: `S` sostituisce i riferimenti a blocco selezionati con il blocco che si nomina; `A` chiede un blocco e la sua sostituzione e cambia ogni riferimento, come fa {{cmd:BLOCKREPLACE}} (lo stesso codice). Un riferimento mantiene il suo posto, la scala, la rotazione, il layer e i valori degli attributi che entrambi i blocchi hanno; i valori per cui il nuovo blocco non ha posto vengono eliminati e nominati. `?` elenca i blocchi. Un passo di annullamento.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; oppure {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Elenca blocchi, attributi e proprietà degli oggetti come tabella o file CSV.

- Lavora sulla selezione, oppure chiede `Selezionare oggetti (Invio: tutto in questo spazio)`.
- `Elenco: [Blocchi/Oggetti/Tutto]` quando la selezione contiene entrambi. I blocchi senza nome, le tabelle e le distinte base non vengono mai elencati.
- Stampa le colonne tra cui scegliere (nome, tipo, layer, X, Y, rotazione, scala, lunghezza, area, colore, tipo di linea, spazio, e una per ogni etichetta di attributo), poi `Colonne, per nome o numero separati da virgole`. Invio prende quelle con l'asterisco: il nome e ogni attributo per i blocchi; tipo, layer e lunghezza per gli oggetti.
- `Raggruppare righe identiche con un conteggio? [Sì/No] <Sì>`, poi `Mettere l'elenco in un: [Tabella/Csv] <Tabella>`. Una tabella è una tabella ordinaria ({{cmd:TABLEDIT}} la modifica) e non è dinamica: rieseguire il comando quando il disegno cambia.
- Rifiuta una colonna che non è nell'elenco. Una tabella contiene 1.999 righe di dati; un file CSV le contiene tutte.

### COUNTTABLE

Conta i riferimenti a blocco della selezione (oppure dello spazio aperto) e mette i conteggi in una tabella (`Blocco`, `Conteggio`) o in un file CSV. Per un conteggio che segue da sé il disegno vedere {{cmd:BOMTABLE}}.

## Tavole e stampa

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; oppure il pulsante {{ui:+}} sotto il disegno. Una nuova tavola con un bordo, un cartiglio e una viewport, su ISO A3 (oppure Tabloid per disegni in pollici o piedi). Nessuna domanda.

### MVIEW

Alias: `MV`. Solo su una tavola ({{cmd:VPORTS}} su una tavola fa lo stesso).

- `Specificare l'angolo della viewport [Poligonale/Oggetto]`, `Specificare l'angolo opposto`. La viewport mostra l'intero modello a una scala standard.
- `P` (Poligonale): fare clic sugli angoli del contorno (`Annulla`, `Chiudi`), {{key:Enter}} a fine. Rifiuta meno di tre angoli.
- `O` (Oggetto): `Selezionare un oggetto chiuso per il contorno della viewport`: una polilinea chiusa, un cerchio o un'ellisse sulla tavola. La viewport prende la sua forma (le curve come brevi pezzi rettilinei); l'oggetto resta com'era. Rifiuta un oggetto non chiuso.

### VPCLIP

Ritaglia una viewport già presente sulla tavola. `Selezionare la viewport da ritagliare` (oppure selezionarla prima), poi `Selezionare l'oggetto su cui ritagliare [Poligonale/Elimina]`:

- Fare clic su una polilinea chiusa, un cerchio o un'ellisse, oppure {{key:Enter}} (o `P`) per fare clic sugli angoli di un poligono.
- `D` (Elimina, offerto quando la viewport è ritagliata) la riporta a rettangolo: il riquadro attorno al contorno che aveva.
- Ciò che la viewport mostra non si sposta sulla carta, e la sua scala resta. Il modello viene disegnato e stampato solo dentro il contorno, e il bordo lo segue. Un passo di annullamento.
- Una viewport ritagliata ha un grip su ogni angolo del suo contorno, oltre al suo centro e ai quattro angoli del suo riquadro (trascinare un angolo del riquadro allunga il contorno con esso). Proprietà mostra Contorno: Rettangolo, oppure Ritagliato con il numero di angoli.
- I file DWG e DXF 2000 conservano il contorno per CadCraft. Gli altri programmi aprono la viewport come il rettangolo che la circonda; DXF R12 conserva solo il rettangolo.
- Nella scheda del modello dice che le viewport stanno sulle tavole.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} è lo stesso anche da una tavola, e {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} lo eseguono. Sul modello: `Immettere il numero di riquadri [SIngolo/2/3/4] <3>`; `2` chiede `[Orizzontale/Verticale] <Verticale>` (Verticale = affiancati), `3` chiede `[Sinistra/Destra] <Destra>` (dove va il riquadro grande). Ogni riquadro mantiene la propria vista e il proprio spazio; un clic rende attivo un riquadro. Su una tavola è {{cmd:MVIEW}}. Vedere [Dividere lo schermo](topic:split-screen).

### VPVIEW

Nessun alias. Solo su una tavola.

- `Selezionare la viewport` (saltato se ne è selezionata una), poi sul modello: `Specificare il primo angolo della finestra da mostrare`, `Specificare l'angolo opposto`.

### UCS

Nessun alias. Un sistema di coordinate proprio; non una modifica. `Specificare l'origine dell'UCS [NOme/OGgetto/Precedente/Globale/Z/3punti] <Globale>`: un punto è una nuova origine, poi `Specificare il punto sull'asse X (Invio mantiene l'angolo)`. `Z`: `Specificare l'angolo di rotazione attorno all'asse Z <90>`. `3`: origine, un punto sul semiasse X positivo, un punto sul lato Y positivo. `OB`: `Selezionare l'oggetto da allineare all'UCS`. `NA`: `[Ripristina/Salva/Elimina/?]` e un nome. La vista ruota in modo che il nuovo asse X sia in piano. Vedere [Ruotare la vista e usare le proprie coordinate](topic:ucs-and-turned-view).

### PLAN

Nessun alias. `Immettere un'opzione [UCS corrente/Ucs/Globale] <UCS corrente>`: ruota la vista del riquadro attivo in modo che l'asse X di quell'UCS (oppure del globale) sia in piano. Nulla nel disegno si sposta.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nessun alias; oppure {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Lo stesso di `UCS Z -90`, `UCS Z 90` e `UCS W`, con la vista che segue.

### VPLAYER

Nessun alias. Su una tavola, oppure dentro una viewport. `Immettere un'opzione [?/Congela/Scongela/Reimposta/Vpvisdflt]`: `F`, `T`, `R` chiedono nomi di layer (virgole, caratteri jolly `*` e `?`), poi viewport `[Tutte/Seleziona/Corrente] <Corrente>`; Reimposta riporta ogni layer al suo predefinito "congelato nelle nuove viewport"; `V` imposta quel predefinito (`[Congelato/Scongelato]`), che {{cmd:MVIEW}} usa. `?` elenca i layer congelati nella viewport corrente. La colonna delle viewport del pannello Layer fa lo stesso per una sola viewport. Vedere [Congelare un layer in una sola viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; oppure doppio clic dentro una viewport. Solo su una tavola. Lavorare sul modello attraverso una viewport: quella selezionata, l'unica sulla tavola, oppure `Fare clic dentro la viewport in cui lavorare`. Spostamento e zoom al suo interno cambiano la vista della viewport (una bloccata nella visualizzazione la mantiene, e invece si sposta il foglio); la nuova vista viene scritta come un passo di annullamento. Vedere [Lavorare sul modello attraverso una viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; oppure doppio clic fuori dalla viewport, oppure clic su una scheda sotto il disegno. Torna alla tavola.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; oppure {{key:Mod+P}}. Apre la finestra {{ui:Plot to PDF}}. Vedere [Stampa in PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; oppure {{ui:Edit tables…}} nella finestra {{ui:Plot to PDF}}. Apre {{ui:Plot style tables}}: cosa stampa ogni colore (colore, grigio, inchiostro, spessore di linea), conservato con il disegno. Vedere [Tabelle degli stili di stampa](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} sposta oggetti tra una tavola e il modello attraverso una viewport, scalati e ruotati perché sembrino uguali dall'altra parte. Su una tavola, selezionare oggetti e vanno nel modello (indicare la viewport quando la tavola ne ha più di una). Mentre si lavora sul modello attraverso una viewport ({{cmd:MSPACE}}), gli oggetti selezionati vanno sulla tavola. Dice quante volte sono diventati più grandi o più piccoli. Le viewport restano sulla loro tavola. Un passo di annullamento.

### ISODRAFT

{{cmd:ISODRAFT}} attiva o disattiva il disegno isometrico `ON` o `OFF`, oppure passa direttamente al piano `Left`, `Top` o `Right`. Quando è attivo: Ortho ({{key:F8}}) mantiene le linee sui due assi del piano (sinistro: 90° e 150°; superiore: 30° e 150°; destro: 30° e 90°), il tracciamento polare ({{key:F10}}) segue gli stessi assi, lo snap alla griglia ({{key:F9}}) usa la griglia isometrica, e la griglia ({{key:F7}}) è disegnata con linee a 30°, 90° e 150°. {{cmd:ELLIPSE}} acquista `Isocerchio`: dare un centro e un raggio (oppure `Diametro`) e disegna l'ellisse che un cerchio mostra sul piano corrente. Il disegno resta piatto: sono aiuti per disegnare una vista prospettica, non un modello 3D. L'impostazione vale per questa sessione e non è salvata nel file.

### ISOPLANE

{{cmd:ISOPLANE}} sceglie il piano su cui lavora il disegno isometrico: `Left`, `Top` oppure `Right`. Invio passa al piano successivo. Mentre il disegno isometrico è attivo, {{key:F5}} fa lo stesso a metà di un comando; quando è disattivo, {{key:F5}} è lasciato al browser.

## Interrogazione

### CAL

Stampa il valore di un calcolo, come viene letto ovunque si digiti una lunghezza.

- `Espressione`: digitarla, per esempio `12'6"+3/4"` oppure `(24'-0")/3`, e premere {{key:Enter}}. CadCraft stampa `= 12'-6 3/4"   (150.75 unità di disegno)`. Vedere [Aritmetica in un valore digitato](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; oppure {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specificare il primo punto`, `Specificare il secondo punto`. Stampa distanza, angolo, Delta X e Delta Y.

### AREA

Alias: `AA`; oppure {{ui:View}} › {{ui:More}} › {{ui:Area}}. Stampa l'area e il perimetro.

- `Specificare il primo angolo [Oggetto/Aggiungi area/Sottrai area] <Oggetto>`
  - Fare clic o digitare gli angoli; a `Specificare il punto successivo (Invio chiude) [Annulla]` premere {{key:Enter}} per chiudere il contorno. `U` riprende l'ultimo angolo.
  - {{key:Enter}} oppure `O`, poi `Selezionare oggetto`: un cerchio (stampa la circonferenza), un'ellisse, una polilinea (una aperta viene chiusa da una linea retta per l'area, e la sua lunghezza viene stampata) oppure un tratteggio (i fori vengono sottratti).
  - `A` (Aggiungi area) e `S` (Sottrai area) mantengono un totale parziale: il prompt inizia con `(modalità ADD)` oppure `(modalità SUBTRACT)`, ogni area viene aggiunta o tolta, e `Area totale = …` viene stampato dopo ciascuna. In questi modi `O` sceglie oggetti fino a {{key:Enter}}, e {{key:Enter}} al primo prompt termina il comando.

### MEASUREGEOM

Alias: `MEA`. `Immettere un'opzione [Distanza/Raggio/Angolo/ARea] <Distanza>`; dopo ogni misura chiede di nuovo, con `eXit` come predefinito.

`Rapida` misura intorno al puntatore mentre lo si muove: la distanza dall'oggetto più vicino a destra, sopra, a sinistra e sotto (lungo gli assi dell'UCS corrente), disegnata man mano; e l'angolo dove due di quei vicini sono dritti e si incontrano. Un clic scrive le quattro distanze, la larghezza e l'altezza libere e gli angoli nella cronologia; Invio torna alle opzioni. Legge ciò che è sullo schermo.

- `D`: due punti, come {{cmd:DIST}}.
- `R`: `Selezionare arco o cerchio`; stampa il raggio e il diametro.
- `A`: un arco (il suo angolo incluso), una linea e poi una seconda linea (l'angolo tra di esse, verso le loro estremità lontane), oppure {{key:Enter}} e tre punti (vertice, poi le due estremità).
- `AR`: come {{cmd:AREA}}, una sola area.

### ID

Nessun alias. `Specificare il punto`; stampa la sua X e la sua Y.

### LIST

Alias: `LI`, `LS`. `Selezionare oggetti`; stampa il tipo, il layer e le misure principali di ogni oggetto.

### MASSPROP

{{cmd:MASSPROP}} dà le proprietà di sezione delle regioni e degli oggetti chiusi che si selezionano, presi insieme: area, perimetro, riquadro di delimitazione, baricentro, momenti d'inerzia rispetto agli assi X e Y passanti per l'origine, il prodotto d'inerzia, i raggi di girazione, gli stessi momenti rispetto al baricentro, e i momenti principali con le direzioni dei loro assi. I fori in una regione contano come fori. I valori sono in unità di disegno ed esatti per contorni fatti di linee e archi; ellissi e spline vengono misurate come brevi segmenti rettilinei, e lo dice. Dopo il rapporto chiede se scriverlo in un file di testo. Gli oggetti non chiusi vengono lasciati fuori, e lo dice quanti sono.

## Vista, file e altro

### ZOOM

Alias: `Z`.

- `Specificare l'angolo della finestra, immettere un fattore di scala (nX) [Estensione/Tutto/Finestra/Precedente/Scala/Centro]`. Fare clic su due angoli per una finestra. `E`, `A` oppure Invio: l'intero disegno.
- `P` (Precedente, oppure {{ui:Previous}} nella barra) torna alla vista precedente, fino a 10 viste per scheda; una serie di passi della rotella o uno spostamento contano come una vista.
- Un numero come `2`, `2x` o `0.5x` (oppure `S` e poi il numero) ingrandisce o riduce di quel fattore attorno al centro dello schermo.
- `C` chiede `Specificare il punto centrale` e `Immettere l'altezza o l'ingrandimento (nX)`.

### PDFATTACH, PDFIMPORT e i comandi PDF

Alias: `PDFATT` per {{cmd:PDFATTACH}}, `PDFIM` per {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} mette una pagina PDF sotto il disegno (file, pagina, punto di inserimento, scala, rotazione); {{cmd:PDFIMPORT}} trasforma linee, curve, riempimenti e testo di una pagina in oggetti del disegno su layer che prendono il nome dal PDF, a grandezza reale, a una scala digitata, oppure scalati da due punti e una distanza reale. {{cmd:PDFCLIP}} ritaglia un sottofondo, {{cmd:PDFADJUST}} imposta attenuazione, contrasto, monocromia o lo disattiva, {{cmd:PDFLAYERS}} accende o spegne i layer propri del PDF, e {{cmd:PDF}} dà di nuovo a CadCraft i file che usano i sottofondi di un disegno. Vedere [Sottofondi PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Completamento automatico del disegno: senza un comando in corso, un fantasma grigio mostra ciò che i motivi del disegno indicano come successivo. {{cmd:AUTOCOMPLETE}} lo attiva con `On` o `Off` (anche Impostazioni › CadCraft) oppure `Show` mostra ciò che suggerirebbe ora. **Tab** disegna il fantasma come un passo di annullamento, **Esc** lo scarta finché il disegno non cambia. Trova tre cose negli oggetti più recenti: la copia successiva di qualcosa disegnato due volte o più a un passo uguale (montanti, colonne, alzata e pedata di una scala), i passi successivi di una scala a polilinea, e il lato mancante di una stanza o di una catena di muri. A metà di {{cmd:LINE}} o {{cmd:PLINE}} il fantasma è il **punto successivo**: il passo successivo di una scala (alzata, pedata, alzata…), il quarto angolo di un rettangolo, il punto che lo chiude, oppure un altro passo uguale. Avvicinare il cursore e premere **Tab**, come se si fosse fatto clic lì; proseguire oppure premere Invio. Calcolato su questo computer con regole, senza modelli.

### AUTOSHEET

Alias: `ASH`. Tavole che si dispongono da sole. {{cmd:AUTOSHEET}} prende i pezzi del disegno (le proprie viste con nome, oppure i pezzi separati del modello, oppure l'intero modello), sceglie una dimensione di carta (oppure quella che si dà), assegna a ogni pezzo una scala standard (una sola per tutti, oppure la più grande che ciascuno può prendere) e dispone le viste in righe su nuove tavole con un cartiglio e una didascalia (nome e scala) sotto ciascuna. Ciò che non entra su una tavola ne riceve una propria. Un passo di annullamento. Calcolato su questo computer con regole, senza modelli.

### PHOTOSKETCH

Alias: `PSK`. Da foto di schizzo a disegno. Scegliere una foto (JPEG, PNG o TIFF) di uno schizzo a mano su un foglio di carta. {{cmd:PHOTOSKETCH}} trova i quattro angoli del foglio, raddrizza la prospettiva, prende la dimensione della carta che si indica (`Paper`, oppure quella standard più vicina) e la `Scala` dello schizzo (1 : n), poi traccia le linee di penna in linee, archi e cerchi, con un layer per ogni colore di penna (nero, rosso, blu, verde). Se non trova il bordo della carta, prende l'intera foto come foglio e lo dice. Le scritte vengono lasciate fuori. Un passo di annullamento. Eseguito su questo computer con elaborazione classica delle immagini, senza modelli, e nulla viene inviato altrove. Vedere anche i comandi per i disegni scansionati.

### AUTODIM

Alias: `ADIM`. Quotatura automatica secondo regole. {{cmd:AUTODIM}} quota gli oggetti selezionati (oppure l'intero disegno) a partire dai loro bordi di livello e di piombo: una catena di quote lungo i lati che si scelgono (`Sides`), un'unica quota complessiva all'esterno, la larghezza di ogni apertura (uno spazio tra linee di muro allineate), un diametro per ogni misura di foro, e con `Grid` la spaziatura tra le linee di griglia. Una quota già presente non viene fatta di nuovo. Un passo di annullamento. Calcolato su questo computer con regole, senza modelli.

### GRIDMOVE

Alias: `GM`. Spostare una linea di griglia porta con sé l'insieme. {{cmd:GRIDMOVE}} sposta una linea di griglia (una linea su un layer il cui nome dice grid o axis) e ciò che vi è appeso: i muri con un'estremità sulla linea si allungano per seguirla, i muri lungo di essa si spostano per intero, i pilastri (riferimenti a blocco e cerchi sulla linea), il suo cerchietto e la sua etichetta si spostano, e le quote i cui punti stanno su di essa misurano la nuova spaziatura. Dare due punti (conta solo la parte attraverso la linea) oppure `Distance`. Un passo di annullamento riporta tutto. Eseguito con regole su questo computer.

### DETAILS

Alias: `DET`. Dettagli che trovano l'utente. {{cmd:DETAILS}} conserva i dettagli propri dello studio: `Add` mette in elenco un blocco di questo disegno, `List` e `Remove` lo gestiscono, `Find` li ordina per ciò che è selezionato (oppure per ciò che si è disegnato per ultimo) secondo le parole sui suoi layer, nei nomi dei blocchi, nei motivi di tratteggio e nelle note, confrontate con il nome e le note di ciascun dettaglio, così un dettaglio di davanzale trova la lattoneria del proprio. Indicare un numero e un punto per posizionarlo. Con `Hint` attivo (anche Impostazioni › CadCraft), selezionare qualcosa che un dettaglio corrisponde mette una riga nella barra di stato. L'elenco è conservato in questo browser, su questo computer, e quell'elenco è quello che viene cercato. `Share` lo mette anche nella propria cartella Documenti (`.cadcraft/firm-details.json`, con il disegno di ogni blocco): `Pull` aggiunge ciò che il team ha e che manca, `Push` aggiunge ciò che si ha e che loro non hanno, `Both` fa entrambe le cose, e nulla viene mai rimosso da nessuno dei due lati. Aprire prima la cartella Documenti ({{cmd:DOCUMENTS}}); quando quella cartella è una cartella Team Cloud Plan, l'intero team condivide un unico elenco. Un elemento di dettaglio nel pannello Libreria ha un pulsante **Aggiungi ai dettagli dello studio** che lo mette nello stesso elenco. Eseguito su questo computer con le parole, senza modelli.

### SKETCHFIX

Alias: `SKF`. Gli schizzi a penna diventano geometria precisa. Premere e trascinare un tratto a mano libera alla volta (penna, mouse o dito), poi Invio. Ogni tratto viene letto come una linea, un cerchio, un arco, un rettangolo o una polilinea: linee quasi orizzontali e verticali diventano esattamente orizzontali e verticali, un tratto chiuso e tondo diventa un cerchio, un tratto chiuso con quattro angoli retti un rettangolo, e le estremità dei tratti vengono tirate insieme e sulle estremità già presenti nel disegno. Un passo di annullamento. Calcolato su questo computer con regole, senza modelli.

### SCANATTACH e i comandi per i disegni scansionati

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} non ha alias. Lavorano su un'immagine, un passo di annullamento ciascuno. {{cmd:SCANATTACH}} inserisce un PNG, JPEG, TIFF (una pagina oppure tutte) o una pagina PDF che è un'immagine. {{cmd:SCANSCALE}} scala il foglio da due punti indicati e dalla distanza reale. {{cmd:SCANALIGN}} lo sposta e lo ruota su due punti (`Scalare il foglio per adattarlo` Sì/No). {{cmd:SCANDESKEW}} mostra l'angolo delle linee lunghe del foglio e lo ruota una volta che si dice `Accetta` oppure si dà un `Valore`. {{cmd:SCANCLEAN}} lo rende bianco e nero (`Soglia` Auto/Adattiva/Livello, `Macchie`) e `Esegui`. {{cmd:SCANCROP}} conserva una finestra. {{cmd:SCANERASE}} cancella un `Rettangolo`, un `Poligono` o un `Lazo`. {{cmd:SCANTRACE}} traccia linee e archi su un nuovo layer (`Tolleranza`, `Finestra`, `Archi`, `Residui`, `Esegui`) e dice cosa ha trovato e cosa ha lasciato come raster. {{cmd:SCANINFO}} elenca il file originale e i passi. {{cmd:RASTERSNAP}} attiva o disattiva lo snap alle linee dei fogli scansionati. Vedere l'argomento Disegni scansionati e il tracciamento.

### REGEN e REGENALL

Alias: `RE` per {{cmd:REGEN}}, `REA` per {{cmd:REGENALL}}. Ricostruisce ciò che è disegnato sullo schermo a partire dal disegno: {{cmd:REGEN}} la scheda che si guarda (su una tavola, anche il modello che le sue viewport mostrano), {{cmd:REGENALL}} ogni scheda, ogni riquadro dello schermo diviso e ogni disegno aperto. Si usano quando l'immagine sembra vecchia dopo una modifica da script o molto grande, oppure quando un assistente ha modificato il disegno; il disegno in sé non viene toccato, quindi non c'è nulla da annullare.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Immettere un'opzione [?/Ripristina/Salva/Finestra/Elimina] <Ripristina>`, poi il nome della vista. `S` salva la vista sullo schermo, `W` una finestra che si indica, `R` mostra una vista salvata, `D` ne elimina una, `?` elenca le viste di questa scheda. Salvare con un nome esistente lo sostituisce; ogni modifica è un passo di annullamento. Le viste appartengono alla scheda su cui sono state salvate. I file DWG e DXF le conservano (la tabella VIEW); le viste di una tavola tornano sulla prima tavola, perché il file non dice quale.

### UNDO e REDO

Alias: `U` per {{cmd:UNDO}}; {{cmd:REDO}} non ha alias. Anche {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Porta al pannello {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Immettere il tipo di linea per i nuovi oggetti` — `ByLayer`, `ByBlock` oppure un nome (`?` li elenca: Continuous, quelli del disegno, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE con le loro misure `2` (metà) e `X2` (doppio)). {{cmd:LWEIGHT}} (`LW`): lo spessore di linea per i nuovi oggetti in mm, oppure `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): la scala dei tipi di linea del disegno (annullabile). {{cmd:LWDISPLAY}} (`LWT`): `Mostra gli spessori di linea [ON/OFF]` — come il pulsante {{ui:LWT}} nella barra di stato. Vedere [Spessori di linea e tipi di linea](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Immettere il tipo di oggetto da rinominare [LAyer/Block]`, `Immettere il vecchio nome`, poi il nuovo nome; gli oggetti o i riferimenti seguono. {{cmd:LAYMRG}}: `Selezionare un oggetto del layer da unire oppure [Nome]` fino a {{key:Enter}}, poi `Selezionare un oggetto del layer di destinazione oppure [Nome]` e `Y`. {{cmd:LAYDEL}}: `Selezionare un oggetto del layer da eliminare oppure [Nome]`, poi `Y`: il layer e ogni oggetto su di esso vanno via (non il layer 0, DEFPOINTS o il layer corrente). Un passo di annullamento ciascuno. Vedere [Organizzare un disegno con i layer](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layer indicando oggetti; anche nel menu {{ui:Tools}} del pannello {{ui:Layers}}. {{cmd:LAYISO}}: `Selezionare oggetti sul layer o sui layer da isolare`, poi {{key:Enter}}: ogni altro layer viene spento. {{cmd:LAYUNISO}} li riaccende. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Selezionare un oggetto sul layer da spegnere` (o congelare), più volte; `U` riprende l'ultimo, {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Selezionare l'oggetto il cui layer diventerà corrente`. {{cmd:LAYON}} accende ogni layer, {{cmd:LAYTHW}} scongela ogni layer. Ciascun comando è un passo di annullamento. Vedere [Organizzare un disegno con i layer](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} avvia un disegno vuoto e {{cmd:OPEN}} apre un DWG o DXF, ciascuno nella propria scheda sopra il disegno (un nuovo disegno non usato viene riutilizzato al posto di una nuova scheda). Chiudere una scheda con modifiche non salvate chiede prima. Vedere [Dividere lo schermo](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, anche {{key:Mod+S}}) scarica una copia nel formato del disegno: DWG se è stato aperto da un DWG, DXF se da un DXF. Un nuovo disegno usa il formato scelto per ultimo in Salva con nome in questo browser, altrimenti DWG.

{{cmd:SAVEAS}} (anche {{key:Mod+Shift+S}}) apre la finestra {{ui:Save a copy as}}: scegliere {{ui:DWG}} (e la sua {{ui:Version}}), {{ui:DXF R12}} o {{ui:DXF 2000}}, poi {{ui:Save}}. La scelta resta per questo disegno e per i nuovi disegni in questo browser.

{{cmd:DXFOUT}} scarica sempre una copia DXF R12, senza cambiare il formato che usa {{cmd:SAVE}}.

Vedere [File: cosa si apre, cosa si salva](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Avvia di nuovo il giro guidato del primo disegno in sei passi. Vedere [Come iniziare](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Posizione della barra degli strumenti [Sopra/Sotto/Sinistra/Destra]`. Vedere [Impostazioni](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Riga di comando [Ancorata in basso/Mobile/Una riga/Righe di cronologia visualizzate/Cronologia comandi (F2)]`: ancora o rende mobile la riga di comando, la rende su una riga, chiede quante righe di cronologia mostrare (da 0 a 12), oppure apre la cronologia. Vedere [Impostazioni](topic:settings#command-line).

### TOPAREA

`Area superiore [Standard/Compatta]`: le barre sopra il disegno come erano, oppure compatte. Vedere [Impostazioni](topic:settings#top-area).

### POLARANG

`Immettere il passo dell'angolo polare in gradi <90>`: il passo su cui si allineano le linee del tracciamento {{ui:Polar}} (più di 0, fino a 180). Mantenuto in questo browser.

### UNITS

Alias: `UN`. Come vengono scritte e digitate le lunghezze.

- `Immettere il formato delle lunghezze [Scientifico/Decimale/Ingegneristico/Architettonico/Frazionario] <corrente>`
- Architettonico e Frazionario: `Immettere il denominatore della frazione più piccola da mostrare (1, 2, 4, 8, 16, 32, 64, 128 o 256)`. Gli altri: `Immettere il numero di cifre decimali (da 0 a 8)`.

Le nuove quote lo seguono. Un passo di annullamento. Lo stesso di {{ui:Length format}} e {{ui:Precision}} in {{ui:Current settings}}; vedere [Piedi e pollici](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Visualizza il layout di un circuito integrato (un file GDSII): progetto sperimentale, solo per visualizzare e misurare.

- Un selettore di file accetta un file `.gds`; con più celle di primo livello, `Immettere la cella di primo livello da disegnare`.
- Ogni layer e tipo di dato diventa un layer del disegno (`GDS 1`, `GDS 2/5`), i riferimenti e le serie vengono collocati piatti, nell'unità utente del file (di solito micrometri). Un passo di annullamento. Nulla viene simulato o verificato, e il file non viene riscritto.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagramma da testo.

- Una casella accoglie il testo (oppure una riga con `;` tra le istruzioni nella riga di comando): un diagramma di flusso Mermaid, un diagramma di componenti PlantUML, D2 oppure un elenco da-a.
- `Specificare l'angolo in alto a sinistra del diagramma`, poi `Specificare l'altezza del testo`.

Blocchi e connettori sono oggetti ordinari sul layer `Diagram`, selezionati alla fine. Un passo di annullamento. Vedere [Disegnare un diagramma da testo](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Gli oggetti OLE che un DWG contiene e che CadCraft non sa posizionare da solo.

- Elenca ciascuno: numero, tipo, dimensione, se ha salvato un'immagine.
- `Immettere un'opzione [Posiziona/eXit] <eXit>`: Posiziona chiede il numero, l'angolo in basso a sinistra e la larghezza, e disegna un riquadro con l'immagine. Un passo di annullamento; l'oggetto conservato non cambia. Vedere [Immagini](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. I propri font SHX.

- `Immettere un'opzione per i font SHX [Cartella/File/Elenco/Rimuovi/Inverti/Cancella] <Elenco>`

{{ui:Folder}} legge ogni `.shx` in una cartella (CadCraft Studio; di nuovo a ogni avvio), {{ui:Files}} prende file scelti (il browser), {{ui:Reverse}} dispone le lettere di un font dall'ultima alla prima. Gli stili di testo che nominano un font caricato si disegnano con esso. Vedere [Disegnare testo con i propri font SHX](topic:shx-fonts).

### LIMITS

Quanto grande deve essere il disegno.

- `Specificare l'angolo in basso a sinistra oppure [ON/OFF] <corrente>`: un punto, `ON` oppure `OFF`.
- `Specificare l'angolo in alto a destra <corrente>`.

La griglia riempie i limiti, {{cmd:ZOOM}} Tutto li mostra, e con i limiti attivi un punto esterno viene rifiutato (`**Fuori dai limiti`). Un passo di annullamento; salvato in DWG e DXF. Vedere [Impostare i limiti del disegno](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Come vengono mostrati e digitati gli angoli.

- `Immettere il formato degli angoli [Gradi decimali/Gradi-primi-secondi/Azimut da topografo] <corrente>`
- `Immettere il numero di cifre decimali (da 0 a 8)`, oppure per gli altri due `Immettere la precisione` (0 gradi, 2 primi, 4 secondi, da 5 a 8 decimali di secondo).

Un passo di annullamento; salvato in DWG e DXF. Lo stesso di {{ui:Angle format}} in {{ui:Current settings}}. Vedere [Digitare e mostrare azimut e angoli](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; oppure {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. La finestra {{ui:Load applications}}: caricare routine `.lsp` e file di finestra `.dcl`, scaricarli, caricarli di nuovo dalla cronologia, e la Suite di avvio. I comandi `(defun c:NOME …)` di una routine poi funzionano come qualsiasi altro. Vedere [Caricare applicazioni](topic:load-applications) e [Eseguire routine LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (oppure {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) apre il proprio file degli alias (righe `ALIAS, *COMANDO`); {{ui:Save}} lo applica. {{cmd:REINIT}} lo applica di nuovo. Vedere [Modificare gli alias dei comandi](topic:command-aliases).

### OPTIONKEYS

Alias: `OPTKEYS`; oppure {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}. Apre il proprio file di lettere delle opzioni (righe `COMANDO.OPZIONE, LETTERE`, come `ARRAY.PO, P`); {{ui:Save}} lo applica e {{cmd:REINIT}} lo applica di nuovo. Vedere [Assegnare alle opzioni dei comandi lettere proprie](topic:option-letters).

### LISPEDIT

Alias: `VLIDE`; oppure {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Apre l'editor LISP, una finestra che resta aperta accanto al disegno.

- Il testo: numeri di riga, il compagno della parentesi sul cursore evidenziato (in rosso quando non ne ha), {{key:Enter}} rientra la nuova riga sotto la parentesi aperta, {{key:Tab}} scrive due spazi, {{key:Esc}} esce dal testo.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): legge ogni forma, come fa {{cmd:APPLOAD}} con il file, e crea i suoi comandi `c:`. Il file compare nell'elenco di {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): valuta le forme selezionate, oppure la forma in cui si trova il cursore.
- {{ui:Stop}}: termina una routine in esecuzione.
- {{ui:Console}}: ciò che la routine ha stampato, e ogni errore con la sua riga; un clic su un errore porta lì. Il testo viene eseguito una forma di primo livello alla volta, quindi la riga è quella della forma, oppure, al suo interno, la riga che chiama la funzione nominata dall'errore.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): un file `.lsp`. Il testo viene conservato anche in questo browser, quindi chiudere la finestra non lo perde.
- Accanto al testo: le funzioni che la routine definisce, quelle che chiama e che questo LISP non ha ancora, quelle che chiama e che non sono né definite in essa né integrate, e gli elenchi completi di ciò che è integrato e di ciò che non lo è.

Un testo con una parentesi che non viene mai chiusa, oppure una stringa che non finisce mai, non viene eseguito: viene indicata la riga. Non ci sono debugger passo passo, punti di interruzione o finestre di controllo. Vedere [Eseguire routine LISP](topic:run-lisp).

### HELP

Alias: `?`. Stampa ogni comando, i suoi alias e una descrizione di una riga nella cronologia della riga di comando. Non apre questa guida: per quella premere {{key:F1}} oppure fare clic su {{ui:Help}}.

## Prompt Seleziona oggetti

A ogni prompt `Selezionare oggetti`: fare clic su oggetti, disegnare finestre (da sinistra a destra) e attraversamenti (da destra a sinistra) con due clic, oppure premere e trascinare un lazo ({{key:Space}} mentre si trascina: finestra, attraversamento, recinto), {{key:Shift}}+clic per togliere, e premere {{key:Enter}} per terminare. Si può anche digitare `ALL` (tutto), `L` (l'ultimo oggetto), `P` (Precedente: ciò che ha usato l'ultimo comando), `F` (Recinto: oggetti che attraversa una linea di punti; `U` riprende un punto), `W` (Finestra), `C` (Attraversamento), `R` (modalità Rimuovi: i clic tolgono oggetti; il prompt dice `Rimuovere oggetti`) e `A` (Aggiungi di nuovo). `?` li elenca. Non sono mostrati nel prompt. {{key:Tab}} su oggetti sovrapposti evidenzia il successivo; fare clic per sceglierlo. Vedere [Selezionare oggetti](topic:select-objects).

### ACCESS

Alias: `AX`. Disegno senza vista. {{cmd:ACCESS}} attiva o disattiva il disegno accessibile (`On`, `Off`) e cambia i suoni di snap (`Sound`) e i comandi vocali (`Voice`); dice prima lo stato. Con l'accesso attivo, ogni comando e risultato viene letto dal lettore di schermo, e l'area di disegno ha un cursore da tastiera. L'argomento di aiuto "Disegno senza vista" elenca i tasti.

### DESCRIBE

Alias: `DESC`. Dice cosa contiene il disegno: quanti oggetti, di che tipo, quanto grandi, quanti layer, cosa è selezionato. Legge soltanto; non cambia nulla.

### WHEREAMI

Alias: `WHERE`. Dice dove si trova il cursore, nelle unità del disegno.

### NEARBY

Dice cosa si trova vicino al cursore, il più vicino per primo, ciascuno con la sua distanza e il lato su cui si trova.

### SAYSEL

Dice cosa è selezionato, una frase per oggetto (lunghezza della linea, estremità e angolo; raggio e centro del cerchio; testo com'è scritto).

### VOICE

Attiva o disattiva i comandi vocali. Sono riconosciuti su questo computer; dove il browser non può farlo, la voce resta disattiva a meno che non si scelga il servizio online del browser in Impostazioni.

### TOUCHCROSSHAIR

Alias: `TCX`. Il mirino spostato per disegnare con un dito, così la punta del dito non copre il punto che si indica. Quando è attivo, un dito sul disegno non indica: sposta un mirino che sta sopra il dito e di lato. Lo snap a oggetto e il tracciamento seguono il mirino. Sollevare il dito non indica nulla e lascia il mirino dov'è. Per indicare, premere il pulsante {{ui:Click}} nell'angolo del disegno, oppure toccare il disegno con un secondo dito. Tenere premuto {{ui:Click}} mentre si muove l'altro dito per trascinare (una finestra di selezione, un lazo, un grip). Un dito tenuto fermo a lungo, oppure il pulsante {{ui:Enter}}, è Invio. Due dita spostano e ingrandiscono come prima. Vicino al bordo inferiore e al bordo lontano il mirino si avvicina al dito, così ogni parte del disegno si raggiunge. Una penna e un mouse indicano sempre direttamente.

{{cmd:TOUCHCROSSHAIR}} dice lo stato e chiede `ON`, `OFF`, `Auto` (attivo solo dove un dito è l'unico puntatore, quindi disattivo su un computer con mouse), `Distance` (quanto il mirino sta lontano dal dito, da 24 a 240 pixel) oppure `Side` (`Left`: in alto e a sinistra, per la mano destra; `Right` per la mano sinistra; i pulsanti passano all'altro angolo). Le stesse scelte sono in Impostazioni › CadCraft, e su un dispositivo con schermo tattile la barra di stato ha un interruttore {{ui:Offset crosshair}}. Le scelte sono conservate in questo browser.

### WHOHAS

Dice chi ha aperto un disegno. In CadCraft Studio su un computer, aprendo un DWG o DXF si scrive accanto ad esso un piccolo file di blocco (`Piano.dwg.cclock`: chi, da quando, quale versione), lo si aggiorna ogni minuto finché il disegno è aperto, e lo si rimuove alla chiusura del disegno. Aprire un disegno che un'altra persona ha aperto dice chi e da quando, e offre {{ui:Open read-only}} (Salva poi chiede un nuovo nome), {{ui:Open anyway}} (l'altra persona lo saprà al prossimo aggiornamento) oppure {{ui:Cancel}}. Salvare sopra un file che un'altra persona ha aperto chiede prima. Un blocco non aggiornato da cinque minuti è detto obsoleto: l'altra copia si è chiusa senza salvare, oppure il computer è in stop.

{{cmd:WHOHAS}} chiede `Corrente` (il disegno aperto), `File` (sceglierne uno), `FOlder` (scegliere una cartella: ogni disegno in essa che è aperto da qualche parte viene elencato), `Path` (digitare un percorso completo) oppure `Name` (il nome che vedono gli altri; il nome del proprio account quando si è connessi). Studio può raggiungere solo le cartelle che si sono scelte: per un disegno aperto da una cartella mai scelta dice una volta che non può annotarlo come aperto; `FOlder` sceglie la cartella, e da allora i blocchi funzionano lì. Il blocco è un avviso per le persone, non una barriera: un altro programma può ancora scrivere il file. In un browser non ci sono cartelle da guardare, e il comando lo dice.

### OVERKILL

Elimina oggetti duplicati e sistema linee e archi sovrapposti, per disegni arrivati pieni di tratti doppi. `Selezionare oggetti da pulire`, {{key:Enter}}, poi {{key:Enter}} di nuovo per pulire con le impostazioni mostrate, oppure cambiarne una prima:

- `Tolleranza`: quanto devono essere vicine due coordinate per essere considerate uguali (0,000001 all'inizio; 0 vuol dire esattamente uguali).
- `Ignora`: proprietà che possono differire tra due oggetti altrimenti uguali. Digitare un nome per attivarla: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, oppure `None` / `All`. {{key:Enter}} a fine.
- `Sovrapposizione`: attivo o disattivo. Attivo, le linee che giacciono su una stessa retta e si sovrappongono diventano una linea (una linea contenuta in un'altra viene semplicemente eliminata), e gli archi dello stesso cerchio che si sovrappongono diventano un arco; gli archi che chiudono un giro completo diventano un cerchio, e un arco che giace su un cerchio viene eliminato.
- `Estremità`: attivo o disattivo. Attivo, le linee sulla stessa retta e gli archi sullo stesso cerchio che si toccano solo testa a testa diventano un unico pezzo.

Ogni tipo di oggetto viene controllato per i duplicati: due oggetti sono duplicati quando la loro geometria è la stessa entro la tolleranza e il loro layer, colore, tipo di linea, scala del tipo di linea, spessore, spessore di estrusione, trasparenza e altezza coincidono (meno quelli che si ignorano). Linee e polilinee aperte coincidono anche quando sono disegnate nel verso opposto. Il primo oggetto nell'ordine di disegno resta e mantiene le sue proprietà. Il comando riporta quanti oggetti ha controllato e quanti ne ha eliminati: duplicati, pezzi sovrapposti uniti, pezzi uniti punta a punta. Un solo {{cmd:UNDO}} riporta tutto. Le impostazioni durano fino alla chiusura della finestra del disegno.

Lascia stare: oggetti su layer bloccati e oggetti nascosti. Non unisce linee con un'altezza (Z) (i duplicati esatti di esse vanno comunque via), e non tocca i segmenti dentro una polilinea (non vengono assottigliati), né una linea che giace su un segmento di polilinea, né una polilinea chiusa disegnata nel verso opposto.

### DRAWORDER

Cambia quali oggetti sono disegnati in primo piano. `Selezionare oggetti da riordinare`, {{key:Enter}}, poi `Sopra gli oggetti`, `Sotto gli oggetti`, `Davanti` oppure `Dietro` ({{key:Enter}} = `Dietro`). `Sopra gli oggetti` e `Sotto gli oggetti` chiedono gli oggetti di riferimento: la selezione va subito davanti al più anteriore di essi, oppure subito dietro al più posteriore. Gli oggetti selezionati mantengono il proprio ordine tra loro. Un passo di annullamento. L'ordine è salvato con il disegno in DWG e DXF, dove è l'ordine in cui vengono scritti gli oggetti.

Sullo schermo ogni oggetto è disegnato nell'ordine del disegno, come lo disegnano gli altri programmi che aprono il file: un riempimento pieno, una polilinea larga o una maschera di testo copre le linee e il testo dietro di sé, e ciò che sta davanti lo copre. Dove una linea attraversa un testo, si vedono entrambi. Immagini e pagine PDF allegate restano sotto il tratto. In un disegno molto grande i cui riempimenti e tratti si sovrappongono e si alternano più di 256 volte, i primi 256 mantengono il loro ordine e il resto disegna i riempimenti sotto le linee, così il ridisegno resta rapido.

### TEXTTOFRONT

Porta testo, quote e guide davanti a tutto il resto nello spazio aperto: `Testo`, `Quote`, `Guide` oppure `Tutto` ({{key:Enter}} = `Tutto`). Un passo di annullamento. Lo dice quando non ce n'è nessuno, oppure quando sono già in primo piano.

### HATCHTOBACK

Manda ogni tratteggio dello spazio aperto dietro a tutto il resto, così i riempimenti smettono di coprire tratti e testi nel file salvato. Nessun prompt. Un passo di annullamento.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra solo gli oggetti selezionati: tutto il resto nello spazio aperto esce dalla vista fino a {{cmd:UNISOLATEOBJECTS}}. A differenza di {{cmd:LAYISO}}, lavora sugli oggetti che si indicano, qualunque siano i loro layer, e non cambia alcun layer. Gli oggetti nascosti non vengono disegnati, indicati, agganciati, ingranditi né stampati, e i comandi che accettano `ALL` li saltano. Ciò che si disegna mentre gli oggetti sono isolati si mostra come al solito.

Vale solo per la sessione: nulla di questo viene salvato con il disegno, non è un passo di annullamento, e riaprendo il disegno si vede tutto. Mentre degli oggetti sono nascosti, la barra di stato mostra un pulsante con il loro numero; un clic su di esso li mostra di nuovo.

### HIDEOBJECTS

Nasconde gli oggetti selezionati fino a {{cmd:UNISOLATEOBJECTS}}. Le stesse regole di {{cmd:ISOLATEOBJECTS}}: solo per la sessione, non salvato, non un passo di annullamento.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Mostra di nuovo ogni oggetto nascosto da {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, e dice quanti ne sono tornati.

### LAYLOCKFADE

Imposta come appaiono gli oggetti sui layer bloccati, e se un clic li raggiunge. Dice lo stato corrente, poi accetta:

- un numero da 0 a 90: la quantità di attenuazione in percento (50 all'inizio). 0 disattiva l'attenuazione.
- `ON` oppure `OFF`: attenuazione attiva o disattiva, mantenendo la quantità.
- `Pick`, poi `Yes` oppure `No`: un clic può selezionare oggetti su layer bloccati quando nessun comando è in corso? `No` (il predefinito): non possono essere indicati affatto. `Yes`: un clic o una finestra li selezionano così che Proprietà possa mostrarli; comunque non si possono cambiare, e il proprio `Selezionare oggetti` di un comando non li prende mai.

Gli snap a oggetto trovano oggetti su layer bloccati in entrambi i casi. Le stampe non vengono mai attenuate. Entrambe le impostazioni sono proprie dell'utente, non del disegno, e sono anche in {{ui:Settings}} sotto {{ui:Locked layers}}.

### BURST

Esplode riferimenti a blocco e mantiene ciò che dicono i loro attributi. `Selezionare riferimenti a blocco da esplodere`, {{key:Enter}}: ogni riferimento viene sostituito dagli oggetti del blocco, e il valore di ogni attributo visibile diventa testo semplice sul layer proprio di quell'attributo (un attributo su layer 0 finisce sul layer del riferimento, come gli altri oggetti del blocco su layer 0). Gli attributi invisibili vengono eliminati. Un blocco dentro il blocco resta un riferimento a blocco. Un passo di annullamento; riporta i riferimenti esplosi e i valori degli attributi trasformati in testo.

Rifiuta un disegno collegato per nome (prima associarlo, oppure copiarne con {{cmd:NCOPY}}), e lascia stare gli altri oggetti selezionati. Per i riferimenti a blocco {{cmd:EXPLODE}} dà gli stessi oggetti; {{cmd:BURST}} considera solo i riferimenti a blocco e conta il testo degli attributi.

### TXT2MTXT

Alias: `T2M`. Unisce testi su una riga in un unico testo a paragrafo. `Selezionare i testi su una riga da unire`, {{key:Enter}}, poi `Paragrafo` (le righe vanno insieme e vanno a capo alla larghezza della riga più larga) oppure `Righe` (ogni testo resta una riga a sé); {{key:Enter}} prende quello usato per ultimo. Le righe sono ordinate dall'alto in basso, poi da sinistra a destra, lungo la direzione del testo superiore. Il paragrafo pende dall'angolo in alto a sinistra del testo superiore e ne prende altezza, rotazione, stile, layer e colore. Un passo di annullamento.

Il testo che è già paragrafo, il testo vuoto e gli altri oggetti nella selezione vengono lasciati stare, e il comando dice quanti sono.

### NCOPY

Copia oggetti da un riferimento a blocco o da un disegno collegato nel disegno, senza esplodere nulla. `Indicare un oggetto dentro un riferimento a blocco o un disegno collegato`: l'oggetto più vicino all'indicazione viene copiato dove si vede, per quanti blocchi sia annidato; indicarne altri, poi {{key:Enter}}. Poi `Punto base per spostare le copie`: {{key:Enter}} le lascia dove sono, oppure dare un punto base e un secondo punto. L'intero comando è un passo di annullamento.

Una copia prende il layer su cui appare: un oggetto su layer 0 dentro un blocco finisce sul layer del riferimento in cui stava, e un colore ByBlock diventa il colore di quel riferimento. Da un disegno collegato il layer `Plan|Walls` diventa `Plan$0$Walls` (il nome dato dal collegamento), creato con il colore, il tipo di linea e lo spessore del layer collegato. Il valore di un attributo viene copiato come testo. I riferimenti a blocco su layer bloccati non si possono indicare.

### FLATTEN

Porta a 0 l'altezza (Z) e lo spessore degli oggetti selezionati. `Selezionare oggetti da appiattire`, {{key:Enter}}. Appiattisce anche gli oggetti dentro le definizioni dei blocchi che la selezione usa (e i blocchi dentro di essi), così ogni riferimento a quei blocchi cambia; i disegni collegati restano come sono. Un passo di annullamento; dice quanti oggetti sono cambiati, e lo dice quando nessuno aveva un'altezza o uno spessore.

Ciò che CadCraft conserva della terza dimensione in un disegno 2D è: un'altezza su cerchi, archi, ellissi, punti, testi, riferimenti a blocco, tratteggi, guide e polilinee (la loro quota), un'altezza a ogni estremità di una linea, e uno spessore su linee, cerchi, archi, polilinee, punti e testi, come il file li aveva. {{cmd:FLATTEN}} azzera esattamente quelli. Non tocca il modello 3D della scheda 3D, né facce 3D o solidi, e un oggetto disegnato su un piano inclinato era già stato riportato sul piano del disegno quando il file è stato aperto.

### BREAKLINE

Disegna una linea con un simbolo di interruzione, per una vista tagliata corta. Dice la dimensione e il prolungamento correnti, poi `Primo punto della linea di interruzione` (oppure `Dimensione` / `Prolungamento` per cambiarli prima), `Secondo punto`, e `Dove si trova il simbolo di interruzione`: fare clic lungo la linea, oppure {{key:Enter}} per il centro. Il risultato è una polilinea sul layer corrente: la linea, che prosegue oltre ogni punto del prolungamento, con un tratto a Z alto quanto la dimensione e la metà della sua lunghezza.

`Dimensione` e `Prolungamento` sono ricordati come proprie impostazioni (la dimensione inizia a due volte l'altezza del testo della quota per la scala della quota; il prolungamento a metà della dimensione). {{key:Enter}} ripete il comando.

### AUDIT

Controlla il disegno aperto per danni e lo ripara. {{cmd:AUDIT}} guarda ogni oggetto nel modello, sulle tavole e dentro i blocchi, e la tabella dei layer, e elenca ciò che trova per tipo:

- numeri non finiti o assurdamente grandi;
- oggetti senza dimensione: una linea senza lunghezza, un cerchio senza raggio, una polilinea con un solo punto, un testo senza lettere o altezza, un riferimento a blocco con scala zero;
- oggetti su un layer che il disegno non ha; riferimenti a un blocco che non c'è; nomi di stili di testo e di quota e nomi di tipi di linea che non sono nel disegno;
- blocchi che contengono se stessi, direttamente o attraverso altri blocchi;
- oggetti che condividono un id, una chiave o un identificatore di file;
- quote senza i punti da cui sono misurate, e tratteggi il cui contorno non è un profilo chiuso.

Poi chiede `Correggerli? [Sì/No]`. `No` non cambia nulla. `Sì` ripara tutto in un solo passo di annullamento: ciò che non si può disegnare viene rimosso (numeri errati, nessuna dimensione, blocco mancante, quota rotta, un tratteggio senza un contorno utilizzabile, il riferimento che chiude un cerchio di blocchi); un layer mancante viene creato; i nomi di stili e tipi di linea sconosciuti tornano ai predefiniti; una chiave condivisa viene sostituita. Stampa quanti oggetti sono stati rimossi e quanti riparati. Gli stessi risultati compaiono nel pannello Problemi, ciascuno con il proprio {{ui:Repair}}.

Non rifiuta nulla, ma controlla solo ciò che CadCraft stesso disegna: i dati conservati per altri programmi (solidi 3D, oggetti OLE) non vengono aperti.

### RECOVER

Apre un DXF o DWG danneggiato. {{cmd:RECOVER}} chiede il file, legge ciò che si può leggere invece di rifiutare il file, elenca ciò che ha saltato o presunto, poi controlla e ripara il disegno come fa {{cmd:AUDIT}} con `Sì`.

- DXF: le righe che non fanno parte di una coppia codice e valore vengono saltate finché le coppie non tornano allineate; una sezione senza fine viene chiusa; un file troncato viene letto fino al punto di troncamento; un DXF binario troncato viene letto fino al suo ultimo valore intero. Quando una sezione, un blocco o un oggetto ancora non si può leggere, viene lasciato fuori e nominato, e la lettura prosegue oltre.
- DWG: gli oggetti che non superano i loro controlli o non si possono decodificare vengono lasciati fuori, e un elenco di oggetti perso viene ricostruito percorrendo i dati degli oggetti.

Il file su disco non viene modificato. Il disegno recuperato si apre non salvato: salvarlo con un nuovo nome. Un file da cui non si può leggere nulla viene rifiutato, con il motivo.

### LEGACYTEXT

Converte il testo digitato con i vecchi font vietnamiti a 8 bit in Unicode. Nomi brevi `TEXTTOUNICODE` e `VNTEXT`.

I vecchi disegni vietnamiti conservano il loro testo come caratteri occidentali che solo il font trasforma in vietnamita: testo TCVN3 nei font ABC (`.VnTime`, `.VnArial`, e i font maiuscoli il cui nome finisce in `H`), e testo VNI nei font VNI (`VNI-Times`). CadCraft mostra questo testo come si legge non appena il disegno è aperto, in base al font del suo stile di testo, dell'oggetto o di una sequenza dentro il testo a paragrafo; il file conserva ancora i vecchi caratteri.

{{cmd:LEGACYTEXT}} dice quanti testi ha trovato per ciascuna codifica e chiede `Convertire … in Unicode?`. `Sì` riscrive ognuno (modello, tavole, blocchi, valori e definizioni degli attributi) e assegna agli stili di testo un font Unicode (Times New Roman, Arial o Courier New secondo il tipo del vecchio font), in un solo passo di annullamento. La formattazione dentro il testo a paragrafo viene conservata.

Quando nessun testo usa un font noto (uno stile che ha perso il nome del font), chiede `Leggere i testi selezionati come [Tcvn3/Vni/Nessuno]`: scegliere la codifica e selezionare i testi. Il testo già in Unicode viene lasciato stare. Il testo sostitutivo delle quote e il testo delle multiguide non vengono convertiti.
