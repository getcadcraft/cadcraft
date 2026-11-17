---
title: Riferimento dei comandi
summary: Ogni comando dell'app di disegno CadCraft, con i suoi alias, le domande che pone, le sue opzioni e i valori predefiniti.
keywords: comandi, alias, elenco comandi, area, perimetro, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Digitare il nome di un comando o un alias e premere {{key:Enter}} o {{key:Space}}. Non conta se si usano maiuscole o minuscole, e un `_`, `-`, `.` o `'` iniziale viene ignorato. Digitare `HELP` (o `?`) per stampare nella cronologia della riga di comando un breve elenco di tutti i comandi; premere {{key:F1}} per questa guida.

Come leggere le richieste: le opzioni sono tra parentesi quadre, e si sceglie una digitando le sue lettere maiuscole (`D` per Diametro). Un valore predefinito è tra parentesi angolari; premere {{key:Enter}} per accettarlo. Quando si chiede un punto, si può fare clic o digitare uno dei formati indicati in [Inserimento di coordinate e distanze](topic:coordinate-entry). Quando si chiede una distanza, si può digitare un numero o fare clic su due punti.

Premendo {{key:Enter}} dove serve un punto o un oggetto, e non c'è un valore predefinito, il comando termina. {{key:Esc}} lo annulla. Qualsiasi cosa abbia fatto un comando è un solo passo di annullamento.

## Disegno

### LINE

Alias: `L`. Segmenti rettilinei, ciascuno come oggetto a sé.

- `Specify first point` (Invio: inizia dall'ultimo punto indicato)
- `Specify next point [Undo]`, ripetuto. Dopo due segmenti: `[Undo/Close]`.
- `U` annulla l'ultimo segmento, `C` chiude verso il primo punto e termina. Invio termina.

### PLINE

Alias: `PL`. Una polilinea di segmenti rettilinei e archi.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close dopo due segmenti)
- `A` passa agli archi: `Specify endpoint of arc [Line/CLose/Undo]`. Ogni arco prosegue tangente al segmento precedente. `L` torna alle linee, `CL` chiude con un arco.
- Invio termina; la polilinea resta aperta.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` chiede `Specify diameter of circle`.
- `2P`: due estremi di un diametro. `3P`: tre punti sulla circonferenza.
- `T` (anche il comando `TTR`, e {{ui:Disegna}} › {{ui:Altro}} › {{ui:Cerchio: tangente, tangente, raggio}}): `Specify point on object for first tangent of circle`, poi la seconda, poi il raggio (Invio: l'ultimo). Il cerchio tocca entrambi gli oggetti (linee, archi, cerchi, segmenti di polilinea, anche dentro i blocchi); tra quelli che lo fanno, quello che tocca più vicino ai punti scelti. "Circle does not exist" quando nessuno è adatto.
- `TTT` (o {{ui:Disegna}} › {{ui:Altro}} › {{ui:Cerchio: tangente, tangente, tangente}}): tre oggetti; il cerchio che tocca tutti e tre, il più vicino ai punti scelti (tre linee danno il cerchio interno o uno esterno, a seconda di dove si sceglie).

### ARC

Alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: un arco per tre punti.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. L'arco va in senso antiorario dall'inizio alla fine.

### RECTANG

Alias: `REC`, `RECTANGLE`. Una polilinea chiusa.

- `Specify first corner point`, `Specify other corner point`. Digitare `@width,height` per il secondo angolo.

### POLYGON

Alias: `POL`. Un poligono regolare come polilinea chiusa.

- `Enter number of sides <4>` (da 3 a 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: fare clic o digitare un punto; la sua distanza imposta la dimensione e la sua direzione ruota il poligono.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, poi la distanza dall'altro asse.
- `I` (`Isocircle`, solo mentre {{cmd:ISODRAFT}} è attivo): centro, poi raggio o `Diameter`: l'ellisse che un cerchio mostra sul piano isometrico corrente.

### HATCH

Alias: `H`, `BH`, `BHATCH`; oppure {{ui:Tratteggio}} nella barra degli strumenti. Stampa per prima cosa il motivo, la scala e l'angolo correnti.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ripetuto (`Undo` quando c'è già un'area): ogni clic aggiunge l'area chiusa che lo circonda, con le forme chiuse al suo interno come isole. Invio crea un unico tratteggio di tutte.
- `S`: `Select closed objects` (polilinee chiuse, cerchi, ellissi chiuse).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Sfumatura): il riempimento è una sfumatura invece di un motivo. Vedi {{cmd:GRADIENT}} per le sue domande.

Vedi [Tratteggio e riempimento di aree](topic:hatch).

### GRADIENT

Alias: `GD`. Riempie un'area con una sfumatura di uno o due colori. Chiede prima la sfumatura, poi procede come {{cmd:HATCH}} (`Pick internal point`, `S` per oggetti chiusi, Invio per terminare).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ripetuto; stampa ogni volta la sfumatura così com'è.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, oppure uno di essi invertito (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastano le prime lettere.
- `O`: un colore, poi la sua tinta da 0 a 1 (0 lo scurisce fino al nero, 0,5 è il colore stesso, 1 lo schiarisce fino al bianco). `TW`: il primo e il secondo colore. Un colore è un numero da 1 a 255, tre numeri come `255,128,0`, oppure `#rrggbb`.
- `A`: l'angolo lungo cui corre la sfumatura. `C`: centrata Sì o No (No sposta il centro della sfumatura verso un lato).
- Rifiuta un colore o un tipo sconosciuto, e una tinta fuori da 0 a 1.

{{cmd:HATCHEDIT}} `G` e Proprietà (Sfumatura) cambiano una sfumatura in seguito, oppure trasformano un tratteggio qualsiasi in una sfumatura. Una sfumatura è disegnata a schermo e stampata. DWG 2004 e successivi la conservano come vera sfumatura; DXF 2000 e DWG 2000 la conservano per CadCraft, e gli altri programmi vedono un riempimento pieno nel primo colore.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Ricrea il contorno da un tratteggio che lo ha perso. `Select hatches` (o selezionarli prima), poi `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Ogni anello del tratteggio diventa una polilinea chiusa sul layer del tratteggio; le nuove polilinee restano selezionate. Un bordo curvo torna come i brevi tratti rettilinei che il tratteggio mantiene.
- Con Sì il tratteggio segue il suo nuovo contorno, come un tratteggio creato con {{cmd:HATCH}}. Un solo passo di annullamento.
- Lo dice quando non è stato selezionato alcun tratteggio.

### POINT

Alias: `PO`; oppure {{ui:Disegna}} › {{ui:Altro}} › {{ui:Punto}}. Oggetti punto, uno per clic, fino a Invio.

- `Specify a point`

### XLINE

Alias: `XL`; oppure {{ui:Disegna}} › {{ui:Altro}} › {{ui:Linea di costruzione}}. Linee di costruzione, illimitate in entrambe le direzioni. Vedi [Linee di costruzione e semirette](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, poi `Specify through point` per ogni linea, fino a Invio.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` chiede prima `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, poi `Specify angle end point` per ogni linea.
- `O`: `Specify offset distance [Through] <Through>`, poi `Select a line object` e `Specify side to offset` (o `Specify through point`) per ogni linea.

### RAY

Nessun alias; oppure {{ui:Disegna}} › {{ui:Altro}} › {{ui:Semiretta}}. `Specify start point`, poi `Specify through point` per ogni semiretta, fino a Invio.

### TEXT

Alias: `DT`, `DTEXT`; oppure {{ui:Testo}} nella barra degli strumenti. Testo su una riga; ogni riga è un oggetto a sé.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, poi `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ripetuto: ogni Invio inizia la riga successiva sotto. Invio su una riga vuota termina. {{key:Space}} qui inserisce uno spazio.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} mette segni su una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse che la dividono in parti uguali. Si sceglie l'oggetto, poi si indica il numero di parti (da 2 a 32767). Un oggetto aperto riceve un segno in meno delle parti; uno chiuso riceve un segno anche nel punto iniziale. L'oggetto stesso non viene tagliato. I segni sono punti; `Block` chiede invece un blocco di questo disegno e se ruotare per seguire l'oggetto. Le lunghezze lungo spline ed ellissi sono misurate su corde brevi. Rifiuta testi, tratteggi e altri oggetti senza lunghezza.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} mette un segno ogni lunghezza data lungo una linea, un arco, un cerchio, una polilinea, una spline o un'ellisse, contando dall'estremità più vicina al punto scelto (un oggetto chiuso: dal suo inizio). La lunghezza si indica digitandola o con due punti. L'estremità lontana di un oggetto aperto non riceve segni. `Block` mette un blocco su ogni segno invece di un punto. Rifiuta una lunghezza di 0, una più lunga dell'oggetto, e una che produrrebbe più di 32767 segni.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} crea una polilinea chiusa attorno all'area che contiene il punto scelto, a partire da qualsiasi linea, arco, cerchio, polilinea e curva che la delimitano a schermo. I pezzi che giacciono su un arco o un cerchio tornano come segmenti d'arco; i pezzi di ellissi e spline tornano come brevi segmenti rettilinei. Con `Islands` attivo (impostazione iniziale) anche ogni area chiusa al suo interno riceve una propria polilinea. Continuare a scegliere punti; Invio termina. Gli oggetti che delimitano l'area restano invariati. Lo dice quando nessuna area chiusa contiene il punto.

### BLEND

{{cmd:BLEND}} disegna una spline tra le estremità di due curve aperte. Scegliere ogni curva vicino all'estremità da unire. `CONtinuity` sceglie `Tangent` (la spline parte e arriva lungo entrambe le curve) oppure `Smooth` (segue anche come le curve si piegano alle estremità); la scelta resta per la sessione. Le due curve non vengono modificate. Rifiuta oggetti chiusi e due estremità che già si toccano.

### REGION

Alias: `REG`. {{cmd:REGION}} trasforma oggetti chiusi in regioni: aree piane che si possono unire, tagliare e misurare. Si selezionano cerchi, polilinee chiuse, ellissi chiuse o spline chiuse, oppure linee, archi e polilinee aperte che chiudono un anello di estremità in estremità; ogni anello diventa una regione e sostituisce gli oggetti da cui proviene. Gli archi restano archi; ellissi e spline diventano brevi segmenti rettilinei. Ciò che non è chiuso e non chiude alcun anello resta com'è, e lo si segnala con il numero. Nel disegno una regione è una o più polilinee chiuse tenute insieme come gruppo senza nome, così un clic seleziona l'intera regione e una copia è una regione a sé; gli altri programmi che aprono il file vedono polilinee chiuse.

Con regioni nel disegno, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} nella scheda 2D lavorano sulle regioni: `UNION` unisce le regioni selezionate in una sola (le regioni separate diventano una regione con più contorni), `SUBTRACT` chiede le regioni da cui sottrarre e poi quelle da togliere (un foro resta parte della regione), `INTERSECT` mantiene l'area che hanno in comune. Ognuno indica l'area del risultato ed è un solo passo di annullamento. Rifiutano quando non resterebbe nulla o non c'è nulla in comune. Nella scheda 3D, e in un disegno senza regioni, gli stessi comandi lavorano sui solidi come prima.

## Modifica

### MTEXT

Alias: `MT`, `T`; oppure {{ui:Paragrafo}} nella barra degli strumenti. Testo a paragrafo che va a capo su una larghezza, digitato sul posto.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: la larghezza tra i due angoli è dove il testo va a capo. `H` chiede `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` e salta il secondo angolo.
- Poi si apre un riquadro sul disegno: digitare, {{key:Enter}} per un nuovo paragrafo, {{key:Mod+Enter}} o un clic fuori per terminare, {{key:Esc}} per annullare. La sua barra imposta altezza, interlinea, larghezza e allineamento. Vedi [Aggiungere testo ed etichette](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; oppure fare doppio clic su un testo. `Select a text to edit`, ripetuto fino a {{key:Enter}}: ognuno si apre nello stesso riquadro. Avviato su un testo selezionato o su cui si è fatto doppio clic, modifica quello e termina.

### ERASE

Alias: `E`, `DELETE`; oppure premere {{key:Delete}} con oggetti selezionati.

- `Select objects` (saltato quando gli oggetti sono già selezionati)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, digitato come `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copie tante volte quante sono le indicazioni di punti.

`Array` alla richiesta del secondo punto crea una riga in un colpo solo: si indica il numero di elementi (l'originale conta come uno), poi il punto dove va la prima copia; le altre seguono con la stessa spaziatura. `Fit` rende quel punto il posto dell'ultima copia, con le altre distribuite uniformemente in mezzo.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ripetuto fino a Invio. `U` annulla l'ultima copia.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: gradi, positivi in senso antiorario; oppure fare clic su un punto per ruotare verso di esso.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: digitare un fattore come `0.5` o `2`. Un punto cliccato dà come fattore la sua distanza dal punto base.

### MIRROR

Alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Allinea}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Con due coppie: `Scale objects based on alignment points? [Yes/No] <N>`

Vedi [Allineare oggetti](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (o la selezione), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` chiede il punto. La selezione resta.

### DISTRIBUTE

- `Select objects` (almeno tre), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. I due esterni restano fermi; la selezione resta.

### ALIGNPANEL

Alias: `ALP`; oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Allinea e distribuisci}}. Apre il pannello che esegue ALIGNTO e DISTRIBUTE con i clic.

### LASER

Alias: `LASERCUT`; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Laser…}}. Apre il pannello Laser sopra il disegno: cosa fa ogni layer (taglio, incisione, incisione profonda, riempimento, immagine), l'anteprima, il G-code GRBL da salvare, e il riquadro e l'invio via Web Serial. Vedi [Inviare un disegno a un laser](topic:laser-cutting).

### STRETCH

Alias: `S`; oppure {{ui:Stira}}. `Select objects to stretch`: trascinare finestre di intersezione (o digitare `C`) sulle estremità da spostare. `Specify base point [Displacement]`, `Specify second point`. I punti dentro le finestre si spostano: estremi di linee, vertici di polilinee (i segmenti d'arco mantengono la loro altezza), punti di quota; cerchi, ellissi, testi, punti e blocchi si spostano per intero quando il loro centro o punto di inserimento è dentro. Una selezione fatta prima del comando mantiene le finestre di intersezione (e i lazi) che l'hanno creata, così la stirano allo stesso modo. Senza finestra, gli oggetti si spostano per intero.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; oppure {{ui:Serie}}. `Select objects`, poi `Enter array type [Rectangular/POlar] <Rectangular>` (solo ARRAY).

- Rettangolare inizia con 4 colonne × 3 righe, spaziate di 1,5 volte la dimensione degli oggetti, mostrate in anteprima. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` chiede colonne e righe, `S` le distanze tra colonne e tra righe (negativa va a sinistra o in basso), `COL` e `R` una direzione alla volta.
- Polare chiede `Specify center point of array`, inizia con 6 elementi tutto attorno, ruotati. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementi, `F` l'angolo di riempimento (+ antiorario, − orario), `ROT` Sì o No.
- {{key:Enter}} (eXit) crea le copie, come oggetti semplici. Un solo passo di annullamento.
- `AS` (ASsociativa) alterna tra copie semplici e una serie che resta modificabile: un unico oggetto che si cambia in seguito con {{cmd:ARRAYEDIT}}, con i suoi grip o in Proprietà. La scelta viene ricordata ({{cmd:ARRAYASSOCIATIVITY}}); parte dalle copie semplici.

### ARRAYPATH

Copie lungo una curva. `Select objects`, poi `Select path curve`: una linea, un arco, un cerchio, un'ellisse, una polilinea o una spline (non uno degli oggetti in serie). Il percorso inizia dal suo estremo più vicino agli oggetti, e il primo elemento sono gli oggetti dove si trovano.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, con anteprima. `M`: `Divide` distribuisce gli elementi uniformemente su tutto il percorso, `Measure` ne mette uno ogni tanto lungo di esso. `I`: il numero di elementi (con Measure, 0 significa quanti ne entrano; un numero oltre la fine del percorso viene limitato a quanto entra). `SP`: la distanza tra gli elementi lungo il percorso (passa a Measure). `AL`: Sì fa ruotare ogni elemento per seguire il percorso, No li tiene dritti.
- `AS` come in {{cmd:ARRAY}}. Con esso attivo, la serie mantiene una propria copia della forma del percorso: modificare in seguito la curva del percorso non sposta gli elementi.
- Rifiuta un percorso che non è una curva, e un solo elemento.

### ARRAYEDIT

Modifica una serie creata con ASsociativa. `Select array` (o selezionarla prima). Stampa come è ora la serie, poi chiede fino a {{key:Enter}}:

- Rettangolare: `COL` colonne e la loro spaziatura, `R` righe e la loro spaziatura, `A` l'angolo lungo cui corrono le colonne.
- Polare: `I` elementi, `F` l'angolo di riempimento, `ROT` ruota gli elementi Sì o No.
- Percorso: `M` Divide o Measure, `I` elementi, `SP` spaziatura, `AL` allinea al percorso.
- `S` (Sorgente) apre gli oggetti che la serie ripete, da soli, come nell'editor di blocchi. Disegnare e modificare lì; {{cmd:ARRAYCLOSE}} salva o scarta, e ogni elemento segue.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, poi fare clic sugli elementi da sostituire, {{key:Enter}}. Quegli elementi mostrano invece la sostituzione; gli oggetti sostitutivi escono dal disegno e vivono nella serie. `RES` (RESet) mostra di nuovo gli oggetti sorgente in ogni elemento.
- Ogni modifica è un passo di annullamento. Rifiuta copie semplici, un semplice riferimento a blocco e una serie su un layer bloccato.

Gli stessi numeri sono in Proprietà sotto Serie, e la serie ha dei grip: il suo punto base la sposta, il grip sul secondo elemento imposta la spaziatura, il grip oltre l'ultimo elemento imposta il numero (polare: il secondo elemento imposta quanti elementi, l'ultimo l'angolo di riempimento). {{cmd:EXPLODE}} riporta una serie a copie semplici.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Sorgente: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Lo dice quando non sono aperti oggetti sorgente di alcuna serie. {{cmd:BCLOSE}} fa lo stesso.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Imposta con cosa partono {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}}; la loro opzione `AS` cambia la stessa impostazione. Ricordata in questo browser.

### OFFSET

Alias: `O`. Linee, archi, cerchi e polilinee.

Dove una polilinea si sposta verso l'esterno e i suoi segmenti rettilinei si separano a un angolo, {{cmd:OFFSETGAPTYPE}} decide come si chiude la lacuna.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, poi `Specify point on side to offset` (o, con Through, `Specify through point`), ripetuto fino a Invio.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: come {{cmd:OFFSET}} chiude le lacune agli angoli esterni di una polilinea. `0` prolunga i segmenti finché non si incontrano (impostazione iniziale), `1` li unisce con un arco attorno al vecchio angolo, `2` con un taglio dritto. Gli angoli interni e i segmenti d'arco non sono interessati. Mantenuto per questa sessione.

### EXTRIM

{{cmd:EXTRIM}} rifila tutto da un lato di un bordo. Si sceglie il bordo di taglio (una linea, un arco, un cerchio, una polilinea, un'ellisse, una spline o una linea di costruzione), poi un punto sul lato da liberare: ogni linea, arco, cerchio, polilinea e linea di costruzione che attraversa il bordo perde la sua parte da quel lato, dove inizia dal bordo. Mentre si sceglie il lato, i pezzi che verrebbero eliminati seguono il puntatore. Per un bordo chiuso i lati sono interno ed esterno. Gli oggetti che toccano soltanto il bordo, e testi, tratteggi, spline ed ellissi che lo attraversano, restano come sono. Un solo passo di annullamento.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: come iniziano {{cmd:TRIM}} ed {{cmd:EXTEND}}. `1` Rapido: ogni oggetto è un bordo di taglio o di confine. `0` Standard: chiedono prima i bordi. Anche `(setvar "TRIMEXTENDMODE" 0)` nel LISP.

### TRIM

Alias: `TR`. Stampa prima `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. In modalità Rapida ogni oggetto visibile è un bordo di taglio, e un oggetto che nulla attraversa viene cancellato; in modalità Standard chiede prima `Select cutting edges (Enter = every object)` e taglia solo su quelli.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ripetuto: fare clic sul pezzo da togliere (appare grigio e tratteggiato mentre il puntatore vi sosta), trascinare un percorso attraverso più pezzi (tutti in un solo passo), oppure fare clic su due punti vuoti per una recinzione tra di essi. {{key:Shift}} estende invece. `T` sceglie i bordi di taglio (modalità Standard), `F` chiede punti di recinzione, `C` due angoli di finestra (i pezzi parzialmente dentro vanno via), `O` chiede `Enter a trim mode option [Quick/Standard]`, `E` chiede `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` cancella gli oggetti selezionati, `U` annulla l'ultima scelta o trascinamento. Invio termina. Vedi [Rifilare ed estendere](topic:trim-and-extend).

- Un clic su un tratteggio taglia il tratteggio: i bordi di taglio dividono l'area tratteggiata, e il pezzo su cui si è fatto clic viene tolto (non resta alcun contorno disegnato dov'era). Il tratteggio mantiene il suo motivo o la sua sfumatura; un tratteggio collegato al suo contorno non lo è più dopo, perché non lo riempie più. Lo dice quando nessun bordo di taglio divide il tratteggio lì, quando il clic è fuori dal tratteggio, e quando non resterebbe nulla (usare {{cmd:ERASE}}). Un percorso o una recinzione trascinati non tagliano i tratteggi.

### EXTEND

Alias: `EX`. Uguale a TRIM al contrario: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Un clic allunga l'estremità più vicina fino al prossimo confine; un percorso o una recinzione trascinati allungano ogni oggetto che attraversano; {{key:Shift}} rifila. `B` sceglie i bordi di confine (modalità Standard). Modalità e Bordo sono in comune con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Collega le viste dei riquadri}}, o l'icona di collegamento sulle schede del disegno. `Link the panes' views [ON/OFF]` (Invio prende l'altro stato): quando è attivo, uno spostamento o uno zoom nel riquadro attivo sposta ogni riquadro che mostra lo stesso tipo di spazio. Vedi [Dividere lo schermo](topic:split-screen).

### OPENIN3D

Nessun alias; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Open in ModelCraft}} dove l'app di modellazione 3D accetta un disegno consegnato. Lo apre lì in una nuova scheda, come DWG (non viene caricato nulla). Se il browser blocca la scheda, lo dice.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: ciò che disegna premere e trascinare su un punto vuoto. Uguale a Impostazioni › CadCraft › Trascinamento per selezionare. Vedi [Selezione con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Linee, archi, cerchi e polilinee. Stampa prima `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` chiede `Specify fillet radius <last>`. `T` chiede `Enter Trim mode option [Trim/No trim]`: con No trim gli oggetti restano come sono e viene aggiunto solo l'arco.
  - `M` mantiene il comando attivo per altri angoli fino a {{key:Enter}}; `U` annulla l'ultimo angolo senza uscire dal comando.
  - `P` chiede `Select 2D polyline [Radius]` e arrotonda ogni angolo in cui due segmenti rettilinei si incontrano. I raccordi che ha già vengono sostituiti dal nuovo raggio; raggio 0 li toglie. Gli angoli i cui lati sono troppo corti per il raggio vengono lasciati e contati.
- `Select second object or shift-select to apply corner [Radius]`. Tenere premuto {{key:Shift}} mentre si fa clic per uno spigolo vivo, qualunque sia il raggio.

Fare clic su ogni oggetto nella parte che si vuole conservare. Due linee che non si incontrano vengono prolungate. Due linee parallele ricevono un semicerchio attraverso lo spazio, all'estremità della prima linea più vicina al clic. Un cerchio non viene mai tagliato. Due segmenti di una stessa polilinea adiacenti ricevono l'arco all'interno della polilinea; una polilinea e un altro oggetto funzionano quando il taglio cade sul primo o sull'ultimo segmento della polilinea.

### CHAMFER

Alias: `CHA`. Linee e segmenti rettilinei di polilinee. Stampa prima le distanze correnti (o lunghezza e angolo).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` chiede `Specify first chamfer distance <last>` e `Specify second chamfer distance <the first>`: la prima viene tagliata dalla prima linea scelta, la seconda dall'altra.
  - `A` chiede `Specify chamfer length on the first line` e `Specify chamfer angle from the first line`.
  - `E` (mEthod) sceglie quale dei due usa lo smusso successivo. `T`, `M`, `U` e `P` funzionano come in {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. Shift+clic crea uno spigolo vivo.

Una distanza più lunga della linea viene rifiutata (`Distance is too large.`).

### BREAK e BREAKATPOINT

Alias: `BR`. `Select object` (dove si fa clic è il primo punto), `Specify second break point [First point]`; `F` chiede `Specify first break point` e `Specify second break point`. La parte tra i due punti viene tolta; su un cerchio, in senso antiorario dal primo punto. BREAKATPOINT chiede `Specify break point` e divide lì l'oggetto in due (non un cerchio).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: una scelta stampa `Current length` (e l'angolo compreso di un arco) e chiede di nuovo. `DE` chiede `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` trascina. Poi `Select an object to change [Undo]`, ripetuto: si sposta l'estremità più vicina al clic. Linee, archi e polilinee aperte.

### JOIN

Alias: `J`. `Select objects to join`. Linee, archi e polilinee aperte che si incontrano di estremità in estremità diventano polilinee (chiuse quando la catena si chiude); linee sulla stessa retta diventano un'unica linea; archi dello stesso cerchio diventano un unico arco o il cerchio. La cronologia dice quanti oggetti sono stati uniti e quanti no.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, poi `Select destination objects [Settings]` e {{key:Enter}}. Copia layer e colore, e tra oggetti dello stesso tipo l'altezza e la larghezza del testo, le dimensioni di quota o il motivo del tratteggio. `S` chiede `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, ripetuto fino a {{key:Enter}}; la scelta viene ricordata per la sessione.

### EXPLODE

Alias: `X`. Le polilinee diventano linee e archi, i riferimenti a blocco diventano i loro oggetti, le quote diventano linee, frecce e testo. Una serie che resta modificabile ({{cmd:ARRAYEDIT}}) diventa copie semplici dei suoi oggetti.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} assegna agli oggetti selezionati un nome comune. Si selezionano gli oggetti, poi si digita un nome (senza spazi; `?` elenca i gruppi; Invio crea un gruppo senza nome) e, per un gruppo con nome, una descrizione facoltativa. Da quel momento un clic su uno di essi, o una finestra che ne include uno, seleziona tutti, così si spostano, copiano e cancellano insieme; ogni oggetto resta un oggetto a sé. Un oggetto può stare in più gruppi. La copia di un intero gruppo è un nuovo gruppo senza nome; la copia di un solo membro entra nel gruppo. I gruppi appartengono allo spazio in cui sono stati creati (il modello o una tavola). Vengono conservati quando si salva come DWG o DXF e si riapre il file in CadCraft; i file DXF 2000 li portano anche come oggetti gruppo per gli altri programmi, e i gruppi creati in un altro programma vengono letti quando si apre un DXF o DWG.

### UNGROUP

{{cmd:UNGROUP}} scioglie i gruppi: si selezionano oggetti dei gruppi (ciascun gruppo in cui si trovano viene sciolto) oppure si digita `Name` e il nome del gruppo. Gli oggetti restano nel disegno. Un solo passo di annullamento riporta i gruppi.

### GROUPEDIT

{{cmd:GROUPEDIT}} modifica un gruppo. Si sceglie uno dei suoi oggetti, oppure `Name` e il suo nome; un gruppo già selezionato viene preso così com'è. Poi: `Add` oggetti (scelti uno alla volta, non gruppo per gruppo), `Remove` oggetti, `REName` il gruppo, modificare la sua `Description`, oppure impostare `Selectable` (se un clic su un oggetto seleziona l'intero gruppo). `eXit` o Invio termina. Un gruppo senza più oggetti scompare.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: con `1` (impostazione iniziale) un clic o una finestra su un oggetto raggruppato seleziona l'intero gruppo; con `0` oggetti singoli, così si può modificare un solo membro. Mantenuto per questa sessione.

## Appunti

Gli appunti propri di CadCraft: funzionano dentro un disegno, tra disegni e tra schede di CadCraft in questo browser. Vedi [Copiare, incollare e duplicare](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, oppure {{ui:Copia}} nel gruppo {{ui:Modifica}}. Copia oggetti negli appunti, con i blocchi e i layer che usano. Gli oggetti restano selezionati.

- `Select objects to copy` (saltato quando gli oggetti sono già selezionati)

### CUTCLIP

{{key:Mod+X}}, oppure {{ui:Taglia}} nel menu {{ui:Altro}}. Copia oggetti negli appunti, poi li cancella (un solo passo di annullamento).

- `Select objects to cut` (saltato quando gli oggetti sono già selezionati)

### COPYBASE

Copia oggetti negli appunti con un punto base scelto; incollando, quel punto viene collocato.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, oppure {{ui:Incolla}} nel gruppo {{ui:Modifica}}. La copia segue il cursore, appesa dall'angolo in basso a sinistra della sua estensione (o dal suo centro, o dal punto di {{cmd:COPYBASE}}; vedi [Impostazioni di CadCraft](topic:settings)).

- `Specify insertion point`

Gli oggetti incollati vengono selezionati. Un blocco che il disegno ha già con lo stesso nome mantiene la definizione di questo disegno.

Quando un'area copiata in MarkupCraft è più recente di ciò che CadCraft ha copiato (e ha meno di 6 ore), {{key:Mod+V}} e `PASTECLIP` incollano invece quell'area: vedi `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Incolla area copiata}} nel menu {{ui:Altro}}. Incolla un'area copiata con {{ui:Copia area}} in MarkupCraft come immagine alla sua dimensione reale. Vedi [Immagini in un disegno](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (solo quando la tavola non aveva una scala del disegno): un numero, {{key:Enter}} per la dimensione carta, oppure `P`, poi `First point on the pasted area`, `Second point on the pasted area` e la loro distanza reale.

### PASTEORIG

{{key:Mod+Shift+V}}, oppure {{ui:Incolla nella stessa posizione}} nel menu {{ui:Altro}}. Incolla alle coordinate da cui gli oggetti sono stati copiati. Non chiede nulla.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, oppure {{ui:Duplica e sposta}} nel menu {{ui:Altro}}. Una copia degli oggetti si sposta con il puntatore da dove si trova; {{key:Esc}} non lascia nulla. Non usa gli appunti.

- `Select objects to duplicate` (saltato quando gli oggetti sono già selezionati)
- `Specify where the copy goes (Esc leaves nothing)`: fare clic, digitare un punto, `@dx,dy` (da dove era il puntatore), oppure una distanza verso il cursore.

### SELECT

Chiede `Select objects` (con ogni opzione qui sotto) e lascia selezionato ciò che si è scelto, per il comando successivo o per `P` più tardi.

### QSELECT

Alias: `QS`. Nel browser, la finestra {{ui:Selezione rapida}} (vedi [Selezionare oggetti](topic:select-objects#select-by-a-rule-quick-select)). Senza di essa, la riga di comando chiede `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` e `Enter value`. Le corrispondenze diventano la selezione.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (o la selezione corrente): seleziona ogni oggetto dello stesso tipo con lo stesso layer e colore (e nome del blocco, motivo del tratteggio). `SE` chiede `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, ripetuto fino a {{key:Enter}}.

### FIND

Nessun alias; oppure {{ui:Modifica}} › {{ui:Altro}} › {{ui:Trova e sostituisci}}. Nel browser, la finestra {{ui:Trova e sostituisci}} (vedi [Aggiungere testo ed etichette](topic:text#find-and-replace-words)). Senza di essa: `Enter text to find`, poi `Enter replacement text (Enter: select what is found)`. Cerca nel testo, nei valori degli attributi e nel testo delle quote, nella scheda aperta o nella selezione.

### SELECTALL e DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) seleziona ogni oggetto modificabile nella scheda aperta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; oppure {{key:Esc}}) annulla la selezione.

## Quote

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distanza orizzontale o verticale.

- `Specify first extension line origin [Select object]` (Invio o `S`: `Select object to dimension`, poi fare clic su una linea, un arco, un cerchio o un segmento di polilinea)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` chiede il testo (`<>` è il valore misurato), `H` e `V` fissano la direzione, `R` chiede `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. La distanza vera tra due punti.

- Origini come in {{cmd:DIMLINEAR}}, poi `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arco: il suo angolo. Cerchio: `Specify second angle endpoint`. Linea: `Select second line`. Invio: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: fare clic dentro l'angolo da misurare.

### DIMRADIUS e DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, poi `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continua dalla ultima quota lineare o allineata creata (o chiede `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ripetuto fino a Invio.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Come {{cmd:DIMCONTINUE}}, ma ogni quota parte dalla prima origine e viene impilata più lontano.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, poi `Specify leader endpoint [Xdatum/Ydatum/Text]`. Scrive quanto il punto dista dall'origine dell'SCU lungo X o lungo Y, su una linea di richiamo: una linea che va per lo più in su o in giù legge X, una che va di lato legge Y; `Xdatum` e `Ydatum` lo fissano. Impostare prima l'origine con {{cmd:UCS}} (senza di essa è 0,0 del disegno). I grip spostano il punto, l'origine e l'estremità della linea, e il valore segue. Salvata come vera quota di ordinata in DWG e DXF. Rifiuta un'estremità della linea sul punto stesso.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, poi `Specify arc length dimension location [Text]`. Misura lungo l'arco (non la corda) e scrive il simbolo dell'arco prima del valore. Rifiuta un cerchio completo, una linea o un segmento rettilineo di polilinea. Un DWG la conserva come quota di lunghezza d'arco; un DXF la conserva come quota angolare con la lunghezza come testo, e CadCraft la riapre come quota di lunghezza d'arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Una quota di raggio per una curva il cui centro è lontano o fuori dalla tavola: la linea di quota parte dal punto indicato invece che dal centro, con una spezzatura, e riporta comunque il raggio vero. Un DWG la conserva come quota di raggio spezzato; un DXF la conserva come quota di raggio, e CadCraft la riapre spezzata.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, poi `Specify jog location (or press Enter)`. Mette un simbolo di spezzatura sulla linea di una quota lineare o allineata, per indicare che la distanza non è disegnata in scala; il valore non cambia. `Remove` lo toglie. Rifiuta altri tipi di quota.

### QDIM

Nessun alias. `Select geometry to dimension`, poi `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Quota più oggetti in un solo passo, dalle estremità di linee e segmenti di polilinea, dai centri di cerchi e archi, da punti e riferimenti a blocco. Una posizione sopra o sotto gli oggetti misura in attraversamento, una accanto a loro misura in verticale. `Continuous` concatena i punti, `Baseline` misura tutto dal primo, `Staggered` annida coppie dal centro verso l'esterno, `Ordinate` dà a ogni punto la sua distanza dal datum (`datumPoint` ne sceglie uno nuovo), `Radius` e `Diameter` quotano ogni cerchio e arco scelto. La modalità viene ricordata. Tutto ciò che crea è un solo passo di annullamento. Lo dice quando ci sono meno di due punti, o nessun arco o cerchio per Raggio e Diametro.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, poi `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` lascia una lacuna nelle linee di quota e di riferimento ovunque un altro oggetto le attraversi, e ricalcola le lacune quando quegli oggetti o la quota si spostano. `Manual` (una quota) chiede due punti e lascia una lacuna tra di essi. `Remove` toglie ogni lacuna. La lacuna è 1,5 volte l'altezza del testo della quota.

### DIMSPACE

Nessun alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Sposta le linee di quota di quote lineari e allineate parallele (o angolari attorno allo stesso vertice) in modo che stiano alla stessa distanza, contata dalla quota di base, ciascuna dal lato in cui si trova. `0` le allinea alla base; `Auto` è il doppio dell'altezza del testo della quota di base. Le quote non parallele alla base restano dove sono.

### DIMINSPECT

Nessun alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Disegna un riquadro attorno al valore con un'etichetta prima di esso e la frequenza di ispezione dopo. `remove` toglie il riquadro. Il testo di tolleranza resta con il valore.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, di nuovo fino a Invio, poi `Select dimensions`. Modifica quelle impostazioni solo sulle quote selezionate; lo stile della quota non cambia. Accetta le variabili che sono un numero o un interruttore (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` riporta le quote selezionate al loro stile. Rifiuta un nome che non è una variabile di questo tipo e un valore che non può accettare.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, poi per ciascuna le sue origini di linea di riferimento (`Specify first extension line origin on an object`: aggancio a un'estremità o al punto medio di una linea, a un vertice di polilinea, a un centro; Invio lascia il punto libero), oppure per una quota di raggio, diametro, raggio spezzato o lunghezza d'arco `Select arc or circle`. La quota viene poi legata a quegli oggetti: quando si spostano o cambiano dimensione, la quota li segue nello stesso passo di annullamento e si ricalcola. Spostare a mano un punto legato, o cancellare l'oggetto, rompe il legame. Il legame viene salvato in DWG e DXF 2000 come dati propri di CadCraft; gli altri programmi vedono una quota ordinaria.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Le libera dagli oggetti a cui sono legate; nulla si sposta.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, di nuovo fino a Invio. Disegna una croce al centro e quattro linee di centro fino appena oltre la curva (tipo di linea CENTER), come semplici linee sul layer corrente; dimensionate dalla dimensione della freccia e dalla scala generale delle impostazioni di quota correnti, ruotate con l'SCU. Non seguono il cerchio se questo si sposta.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Disegna una linea a metà strada tra due linee (lungo la bisettrice quando si incontrano), un po' più lunga di esse, con tipo di linea CENTER. Una semplice linea: non segue le due linee.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nessun alias. Ognuno chiede `Enter new value for … <current>` e imposta quella dimensione per le quote **nuove**: scala generale, altezza del testo, dimensione della freccia, cifre decimali (fino a 8), spazio attorno al testo, prolungamento oltre la linea di quota, distanza dall'origine. Vedi [Impostare le dimensioni delle quote](topic:dimension-settings).

### DIMLUNIT

Impostazione quota: il formato delle sole nuove quote (1 scientifico, 2 decimale, 3 ingegneristico, 4 architettonico, 5 frazionario).

### DIMSTYLE e -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Il gestore degli stili di quota: {{ui:Imposta corrente}}, {{ui:Nuovo…}}, {{ui:Modifica…}}, {{ui:Rinomina…}}, {{ui:Elimina}}, {{ui:Confronta…}}, {{ui:Applica alla selezione}}. `-DIMSTYLE` nella riga di comando: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Vedi [Impostare le dimensioni delle quote](topic:dimension-settings#named-dimension-styles).

### DIMEDIT e DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, poi le quote (o quelle già selezionate). New chiede il testo (`<>` = la misura); Rotate un angolo (0 rimette il testo a posto); Oblique l'angolo delle linee di riferimento rispetto all'asse X (Invio = nessuno; solo quote lineari e allineate). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Vedi [Impostare le dimensioni delle quote](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, oppure con quote selezionate `Units in the text of the selected dimensions`. Scrive la lunghezza misurata in quell'unità con l'unità dopo (DIMLFAC e un suffisso DIMPOST); `D` torna alle unità del disegno. Vedi [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Stampa `Arc length: … Type: …`, poi `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular chiede `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand segue il puntatore fino a un clic o {{key:Enter}}; `O` chiede `Select object` e `Reverse direction? [Yes/No] <N>` e trasforma l'oggetto in nuvola. `A` chiede `Specify the length of each arc`. `R`, `P` e `F` scelgono il tipo per la nuvola successiva. Il risultato è una polilinea chiusa di archi.

### MLEADER

Alias: `MLD`; oppure {{ui:Richiamo}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, poi il testo nel riquadro sul posto (o, senza di esso, `Enter text (an empty line ends)`). `Block` chiede prima un nome di blocco e il richiamo multiplo mostra quel blocco invece del testo. Altre linee di richiamo: {{cmd:MLEADEREDIT}}. Salvato come vero richiamo multiplo in DWG; DXF conserva le linee, la freccia e il testo che disegna.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, poi `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: ogni punto aggiunge una linea di richiamo da una nuova freccia allo stesso punto di arrivo, fino a Invio. `Remove leaders` toglie poi la linea di richiamo su cui si fa clic (un richiamo multiplo ne mantiene almeno una). `Block content` chiede un nome di blocco e mostra quel blocco invece del testo (ne vengono chiesti gli attributi); `Text content` rimette il testo. Ogni linea di richiamo ha il proprio grip. Un DWG mantiene ogni linea di richiamo e il blocco in un unico richiamo multiplo.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, poi `Select multileader to align to [Distribute/Spacing/Use current spacing]` e `Specify direction`. Sposta i punti di arrivo degli altri richiami multipli (e il loro testo o blocco) sulla linea che passa per il punto di arrivo di quello scelto in quella direzione; le frecce restano dove puntano. `Spacing` li rende anche a distanza uguale; `Distribute` chiede due punti e li distribuisce uniformemente tra di essi. Servono almeno due richiami multipli.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, poi `Specify collected multileader location [Vertical/Horizontal]` (Invio mantiene il posto del primo). Crea un unico richiamo multiplo da più richiami: il contenuto di blocco va in un nuovo blocco che contiene tutti i blocchi affiancati o uno sotto l'altro; il contenuto di testo diventa un'unica nota con una riga per ciascuno. Il primo richiamo multiplo mantiene le sue linee di richiamo; gli altri vengono rimossi. Rifiuta una miscela di contenuto di testo e di blocco.

### TABLE

Alias: `TB`; oppure {{ui:Annota}} › {{ui:Altro}} › {{ui:Tabella}}. Crea una tabella: un oggetto che si sposta, copia, ruota, scala e stampa come ogni altro, con le sue celle mantenute come dati.

- `Number of data rows or [Paste/File/Style] <3>`, poi `Number of columns <3>`, `Text height` e `Top left corner of the table`. La tabella riceve una riga di titolo (una cella unita) e una riga di intestazione sopra le righe di dati.
- `P`: una tabella da celle di un foglio di calcolo negli appunti (testo con una tabulazione tra le celle). Premere {{key:Ctrl+V}} con tali celle negli appunti fa lo stesso, a meno che la copia propria di CadCraft non sia più recente (o CadCraft non riesca a distinguerle: allora incolla la propria copia e lo dice). `F`: una tabella da un file `.csv` o separato da tabulazioni. La prima riga diventa la riga di intestazione; le larghezze di colonna si adattano al testo.
- `S`: sceglie lo stile della tabella per questa tabella (vedi {{cmd:TABLESTYLE}}).
- Rifiuta un numero di righe o colonne che non sia intero, e più celle di quante ne contenga una tabella (2.000 righe, 200 colonne, 40.000 celle).
- {{cmd:EXPLODE}} trasforma una tabella in linee e testo. Salvata come DWG una tabella è un vero oggetto tabella che gli altri programmi possono modificare; salvata come DXF è un blocco che la disegna, e CadCraft la riapre di nuovo come tabella.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; oppure fare doppio clic su una cella. Modifica una tabella.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Fare clic su una cella, oppure, con una tabella selezionata, digitarne il nome (`B3`: colonna B, riga 3; la riga del titolo è la riga 1). Nel browser si apre un riquadro sopra la cella: {{key:Enter}} mantiene il testo, {{key:Tab}} passa alla cella successiva, {{key:Alt+Enter}} inizia una nuova riga, {{key:Esc}} lascia la cella com'era.
- Un testo che inizia con `=` è una formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, parentesi e funzioni come `sqrt` e `round`. La cella mostra il valore; una formula che nomina la propria cella, una cella fuori dalla tabella o una cella senza numero mostra `####` e la riga di comando dice perché.
- `R` / `C`: `Insert` o `Delete` righe o colonne su una cella scelta (quante, e sopra o sotto, a sinistra o a destra). Le formule seguono le celle che nominano.
- `S`: la larghezza della colonna e l'altezza della riga. Una riga non è mai più bassa di quanto il suo testo richiede. Una tabella selezionata ha anche un grip sul bordo di ogni colonna e di ogni riga.
- `M`: unisce da una cella scelta a un'altra; `U`: separa. `A`: allineamento (`TL` in alto a sinistra … `MC` centro … `BR` in basso a destra). `H`: l'altezza del testo di questa cella (0 = quella dello stile). `K`: rende la riga un titolo, un'intestazione o una riga di dati. `CL`: svuota la cella.
- Rifiuta una tabella su un layer bloccato, l'eliminazione di ogni riga o colonna, e un'unione che taglierebbe in due un'altra cella unita.

### TABLESTYLE

Alias: `TS`. Elenca gli stili di tabella con quante tabelle usa ciascuno, poi `Table style: [New/Set/Edit/Delete/Apply]`.

- Uno stile contiene l'altezza del testo e l'allineamento delle righe di titolo, intestazione e dati, il margine delle celle, e quali bordi vengono disegnati (esterni, tra le righe, tra le colonne).
- `N` crea uno stile da quello corrente e lo rende corrente; `S` imposta lo stile corrente (le nuove tabelle lo prendono); `E` ne modifica uno: le tabelle che lo usano vengono ridisegnate; `A` assegna lo stile corrente alle tabelle selezionate; `D` ne elimina uno (non Standard, non quello corrente; le tabelle che lo usavano mantengono il loro aspetto).
- Gli stili vengono salvati con il disegno (DWG e DXF).

### TABLEEXPORT

Salva ciò che una tabella mostra come file CSV (una formula come il suo valore). `Select a table`, o selezionarne una prima. Le celle di testo che iniziano con `=`, `+`, `-` o `@` ricevono un `'` iniziale, così un foglio di calcolo non le esegue.

### TABLEPASTE

Alias: `PASTETABLE`. Crea una tabella da celle di un foglio di calcolo negli appunti, poi chiede il suo angolo in alto a sinistra. Come {{cmd:TABLE}} › `Paste`.

### DATALINK

Alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` chiede un file CSV, inserisce una tabella da esso e ricorda il nome del file; `L` elenca i collegamenti con il loro file, la dimensione, quando è stato letto e quante tabelle lo usano; `R` rimuove un collegamento (le sue tabelle restano come tabelle semplici).

### DATALINKUPDATE

Alias: `DLU`. Rilegge il file di un collegamento dati e riempie di nuovo le tabelle collegate (righe e colonne vengono aggiunte o rimosse per corrispondere). Un browser non può aprire un file da solo, quindi chiede di scegliere di nuovo il file. Con più collegamenti chiede quale.

### FIELD

Inserisce un campo nel disegno: un testo che si calcola da sé. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: adesso, oppure la data salvata, creata o stampata, e un formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: il nome del file, con o senza estensione. `S`: il numero della tavola, il suo titolo, o quante tavole ci sono. `P`: una proprietà del disegno per nome (vedi {{cmd:DWGPROPS}}). `O`: si sceglie un oggetto, poi cosa leggere (area, lunghezza, perimetro, raggio, diametro, layer, nome, x, y, testo, rotazione, colore) e le cifre decimali. `E`: una formula. `C`: un testo con codici digitati così come sono, come `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Poi `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: un testo scelto riceve il campo aggiunto dopo ciò che contiene; una cella di tabella allo stesso modo; un riferimento a blocco chiede quale attributo; {{key:Enter}} chiede un'altezza e un punto per un nuovo testo.
- A schermo un campo ha uno sfondo grigio chiaro; una stampa o un PDF non lo hanno mai. Digitare a mano sopra il testo di un campo termina il campo. Un campo che non si può calcolare mostra `####`.
- Il campo di un oggetto trova il suo oggetto tramite la chiave che CadCraft conserva sugli oggetti (Impostazioni › CadCraft › File adatti alla fusione); con le chiavi disattivate, rifiuta.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` imposta quando i campi si aggiornano da soli: digitare le lettere di `O` apri, `S` salva, `P` stampa, `R` rigenera (tutte e quattro per iniziare), oppure `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Elenca le proprietà del disegno, poi `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Le prime sei sono quelle che mostra il pannello {{ui:Proprietà del disegno}}; `U` aggiunge un proprio nome e valore, `R` ne rimuove uno. I campi li leggono (`%<prop:title>%`, `%<prop:Client>%`) e seguono subito. Rifiuta un nome personalizzato che è uno di quelli predefiniti o che contiene `%`, `<`, `>`, un apice o una barra rovesciata.

## Parametrico

Vedi [Vincolare un disegno](topic:constraints) e [Usare parametri ed equazioni](topic:parameters). I vincoli lavorano sulla scheda {{ui:Modello}}.

### GEOMCONSTRAINT e i comandi GC

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, poi le richieste di quel comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (il secondo si sposta).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT e i comandi DC

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (un numero, un'espressione, o `name=expression`).
- {{cmd:DCALIGNED}}: come sopra, con `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` chiede le tolleranze di distanza e angolo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; i loro vincoli vengono rimossi.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, poi `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS e -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) apre il pannello {{ui:Parametri}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Scarica una macro (.swb) che ricostruisce il modello come un unico schizzo vincolato in SolidWorks. Vedi [Spostare gli schizzi da e verso altri modellatori di parti](topic:solidworks-sketches).

## Blocchi

### ANNOSCALE

Alias: `CANNOSCALE`. Dice la scala di annotazione del disegno e quanti oggetti annotativi contiene, poi chiede `New annotation scale`: digitare `1:50`, `1:100`, `2:1`, un numero nudo (`50` è 1:50) o il nome di una delle scale proprie del disegno. Ogni testo e quota annotativi viene ridimensionato in modo da stampare alla stessa dimensione alla nuova scala, in un solo passo di annullamento; gli oggetti non annotativi restano come sono, e così un oggetto che mantiene un elenco di scale senza quella nuova ({{cmd:OBJECTSCALE}}). Vedi [Unità, carte e scale](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Select annotative objects`, poi `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Un testo o una quota annotativi mantiene un elenco di scale di annotazione. `Add` e `Delete` chiedono una scala (`1:50`, `2:1`, un numero nudo, o il nome di una delle scale proprie del disegno); `Current scale` aggiunge la scala di annotazione del disegno; `List` stampa le scale di ogni oggetto. Una viewport la cui scala è nell'elenco di un oggetto mostra l'oggetto alla dimensione che stampa la sua altezza su carta a quella scala, a schermo e nelle stampe. L'ultima scala non può essere eliminata. Gli oggetti non annotativi vengono esclusi: attivare prima Annotativo in Proprietà. Gli elenchi sono salvati in DWG e DXF come dati propri di CadCraft. Vedi [Unità, carte e scale](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Attivo (come all'avvio di un disegno): un oggetto annotativo viene mostrato anche in una viewport, o nel modello, la cui scala non è nel suo elenco, alla dimensione che ha. Disattivo: non viene mostrato lì e non può essere scelto nel modello. L'interruttore è un passo di annullamento; non viene conservato nel file.

### SCALELISTEDIT

Alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` fino a {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit e Delete chiedono il nome della scala. Le scale proprie del disegno entrano negli elenchi delle scale delle viewport e di stampa e vengono salvate con il disegno. Vedi [Unità, carte e scale](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT e PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punti per cui passa la curva; `Close`, `Undo`, poi `Start tangent` e `End tangent` (un punto, o {{key:Enter}}). Method › Control vertices chiede un grado (da 1 a 5) e disegna da un poligono di controllo. Object trasforma le polilinee in spline passanti per i loro vertici. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` per più oggetti; linee, archi e spline vengono proposti prima come polilinee. Vedi [Spline e polilinee](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Enter block name`. Se esiste: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Vengono sostituiti da un unico riferimento al nuovo blocco.

### WBLOCK

Alias: `W`, `-WBLOCK`. Scrive un blocco, alcuni oggetti o l'intero disegno come nuovo file DWG o DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (diventa l'origine del nuovo disegno), `Select objects`, poi `File format [DWG/DXF/R12 DXF]` e `File name for the new drawing`, poi `What to do with the objects [Retain/Convert to block/Delete]`. Convert li sostituisce con un unico riferimento a un blocco con il nome del file; Delete li rimuove.
- **Block**: `Block to write out`. Gli oggetti del blocco stesso, con il suo punto base come origine, compresi i blocchi annidati.
- **Entire drawing**: ogni oggetto dello spazio modello. Le tavole non vengono scritte; usare {{cmd:SAVEAS}} per una copia che le conserva.

Il nuovo file contiene solo i layer, i tipi di linea, i testi e gli stili di quota e i blocchi che i suoi oggetti usano, e le unità del disegno. La versione di un DWG è quella che {{cmd:SAVEAS}} ha usato per ultima. Nel browser il file viene scaricato; in Studio si apre la finestra di salvataggio.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Definisci attributo}}. Stampa le modalità, poi `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` se costante), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} porta le definizioni di attributo nel blocco.

### EATTEDIT e ATTEDIT

`EATTEDIT` (`DDATTE`, oppure doppio clic su un riferimento con attributi; {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica attributi}}): `Select a block reference with attributes`, poi la finestra {{ui:Modifica attributi}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): lo stesso riferimento, poi `<prompt> (<TAG>) <value>` per ogni attributo; {{key:Enter}} mantiene un valore. Vedi [Attributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Valori mantenuti; i nuovi attributi ricevono il loro valore predefinito, quelli rimossi vengono tolti, le posizioni si reimpostano.

### BATTMAN

{{ui:Blocchi}} › {{ui:Altro}} › {{ui:Gestore attributi}}. La finestra: blocco, attributi (etichetta, richiesta, valore predefinito, modalità, ordine), {{ui:Aggiorna i riferimenti (valori mantenuti)}}, {{ui:Applica}}.

### REFEDIT e REFCLOSE

{{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica sul posto}}. `REFEDIT`: `Select the block reference to edit in place` (o la selezione). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; i pulsanti della barra {{ui:Salva il blocco}} e {{ui:Scarta}} fanno lo stesso. L'intera modifica è un solo passo di annullamento. Vedi [Attributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT e BCLOSE

`BE`; oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica blocco}}. `Enter block name to edit <the selected reference's block>` apre l'editor di blocchi. `BCLOSE` chiede `Close the block editor on "…" [Save/Discard] <Save>`; i pulsanti della barra {{ui:Salva blocco}} e {{ui:Scarta modifiche}} fanno lo stesso. Tutto ciò che si fa nell'editor è un solo passo di annullamento.

### VIEWBASE

Alias: `FLATSHOT`. Una vista 2D piatta dei solidi nella scheda 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, una scala (`1:20`, `2:1`; {{key:Enter}} prende quella che si adatta alla tavola), poi il centro della vista. Un solo riferimento a blocco, con i bordi visibili su VIEW-VISIBLE e quelli nascosti tratteggiati su VIEW-HIDDEN. Vedi [Viste piatte su una tavola](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; oppure {{ui:Tutte le tavole in un unico PDF}} nella finestra {{ui:Stampa in PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} stampa ogni tavola, `S` chiede i nomi separati da virgole. Un unico PDF, una pagina e un segnalibro per tavola. Vedi [Ogni tavola in un unico PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Porta alla sezione {{ui:Set di tavole}} del pannello sinistro: tavole di molti disegni, numerate e intitolate, con i cartigli compilati dal set, pubblicate in un unico PDF. Vedi [Set di tavole](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): si sceglie un DWG o DXF, poi il suo punto di inserimento. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; con più collegamenti si sceglie uno dei suoi riferimenti o si digita `N` e il suo nome. Vedi [Disegni collegati](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Conta blocchi}}. `Select a block reference to count, or [All/Export] (Enter: All)`: una scelta seleziona e conta ogni riferimento di quel blocco in questo spazio; {{key:Enter}} o `A` li elenca tutti; `E` poi `C` (conteggi) o `A` (attributi) scarica un CSV. Vedi [Contare i blocchi ed esportare un prospetto](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (non conta se maiuscole o minuscole). `F` chiede un DWG o DXF, poi l'intero disegno o uno dei suoi blocchi; un nome già usato chiede {{ui:Mantieni esistente}} o {{ui:Rinomina}}. `L` apre il pannello della libreria.
- `Specify insertion point [Scale/Rotate]`. `S` chiede `Specify scale factor`, `R` chiede `Specify rotation angle`; entrambi vengono ricordati.
- Quando il blocco si trova già accanto a oggetti che si ripetono altrove senza di esso, una riga dice quanti posti vengono suggeriti e la richiesta acquisisce `suGgested`: `G` li mostra; fare clic vicino a uno per mettervi il blocco, `A` per tutti, {{key:Enter}} per tornare indietro. Prendono la rotazione dei loro vicini e i valori predefiniti degli attributi. I disegni con più di 20.000 oggetti nello spazio aperto non vengono cercati.
- Poi `Enter <prompt> (<TAG>) <default>` per ogni attributo che il blocco richiede. Vedi [Attributi di blocco](topic:attributes).

### LIBRARY

Alias: `LIB`. Apre il pannello della libreria: inserisce elementi, controlla gli aggiornamenti, i crediti della libreria. Nessuna domanda. Vedi [Inserire da un file o dalla libreria](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; oppure {{ui:Asta 3D}} sulla scheda {{ui:Standard}} della libreria. `Section size <W12x26>` (come la scheda lo elenca), poi `Start point [Column]` e `End point`: un elemento solido nella scheda 3D tra i due punti, appoggiato a terra. `C` chiede il punto base del pilastro e la sua altezza. Un solo passo di annullamento. Vedi [Inserire sezioni in acciaio e parti standard](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Top left corner of the parts list`, poi `Text height <2.5>`: disegna una tabella di ogni parte standard e sezione in acciaio inserita dalla libreria (numeri d'ordine, quantità, parte, norma, dimensione, lunghezza, materiale, massa). Un solo passo di annullamento. Vedi [Inserire sezioni in acciaio e parti standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Rimuove le definizioni di blocchi che nessuno usa. Nessuna domanda.

### DELBLOCKS

Oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Elimina blocchi}}. `Select block to delete [Name/eXit]`: si sceglie un riferimento a blocco, oppure `N` per l'elenco dei blocchi con un filtro (sceglierne più di uno), oppure `X` / {{key:Enter}} per terminare. Ogni riferimento viene eliminato — nel modello, su ogni tavola e dentro altri blocchi — poi la definizione, e la riga di comando dice cosa è stato eliminato e cosa no. I blocchi senza nome e i disegni collegati non vengono proposti. La richiesta torna per il blocco successivo; l'intero comando è un solo passo di annullamento.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} incolla ciò che si è copiato ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) come un unico blocco: si sceglie il punto di inserimento e vi va un riferimento a un nuovo blocco, selezionato. Il blocco riceve un nome proprio (`A$C` e un numero); {{cmd:RENAME}} gli dà quello scelto. Un solo passo di annullamento rimuove il riferimento e il blocco.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} chiede il blocco da sostituire e il blocco da mettere al suo posto (`?` elenca i blocchi), poi cambia ogni riferimento nel modello, su ogni tavola e dentro altri blocchi. Ogni riferimento mantiene posizione, scala, rotazione, layer e i valori degli attributi che entrambi i blocchi hanno; gli attributi che ha solo il nuovo blocco partono dai valori predefiniti, e segnala quali valori sono stati eliminati. Quando nulla usa più il vecchio blocco, propone di rimuoverlo. Rifiuta disegni collegati e una sostituzione che metterebbe un blocco dentro se stesso. Un solo passo di annullamento.

### MINSERT

{{cmd:MINSERT}} inserisce un blocco in righe e colonne: nome del blocco, punto di inserimento, scala, rotazione, numero di righe e colonne, e le distanze tra di esse. L'intero insieme ruota con la rotazione. Ciascuno è un riferimento a sé (al massimo 10.000), quindi ognuno può essere spostato o cancellato in seguito.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Pannello Blocchi}}. Mostra il pannello {{ui:Blocchi}} con il cursore nel suo filtro. Ogni blocco ha una piccola immagine; quelli inseriti più di recente vengono per primi. I due pulsanti accanto al filtro passano tra un elenco e una griglia di immagini. Fare clic su un'immagine (o su {{ui:Inserisci}}) per inserire il blocco con {{cmd:INSERT}}, oppure trascinarlo sul disegno per inserirlo dove lo si rilascia.

{{ui:Libraries}}, sotto l'elenco: {{ui:Add a drawing}} accetta un file DWG o DXF proprio e ne elenca i blocchi con le immagini, e l'intero disegno come un blocco. Inserendone uno si copiano la sua definizione (e i blocchi che annida, e i loro layer) in questo disegno, come fa l'opzione `File` di {{cmd:INSERT}}; un blocco già presente qui con la stessa definizione viene usato senza domande, uno con lo stesso nome ma diverso chiede {{ui:Mantieni esistente}} o {{ui:Rinomina}}. In un browser il file resta finché la pagina non si chiude. In CadCraft Studio {{ui:Add a folder}} elenca i disegni di una cartella, ciascuno aperto quando lo si fa clic, e file e cartelle vengono ricordati. La piccola x rimuove una libreria dall'elenco; il file non viene toccato. La {{ui:Library}} condivisa è un'altra cosa: vedi [Inserire da un file o dalla libreria](topic:insert-from-file-and-library).

### BCONVERT

Oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Convert repeats to blocks}}. Trova la geometria che si ripete e trasforma ogni copia in un riferimento a un unico blocco.

- `Select the objects that repeat, or [Block]`: gli oggetti di una copia. `B` indica invece un blocco esistente, per trovare copie sparse dei suoi oggetti.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` e `P` cambiano ciò che conta come copia; {{key:Enter}} cerca. Le impostazioni vengono ricordate.
- `Name for the new block <Block1>`, poi `Specify the block's base point` ({{key:Enter}} prende l'angolo in basso a sinistra della selezione).
- Dice quanti altri insiemi di oggetti hanno la stessa geometria, evidenzia tutto ciò che sostituirebbe e chiede `Yes/No`.

Una copia sono gli stessi oggetti spostati e ruotati di un angolo qualsiasi (e specchiati o scalati di un fattore unico quando sono attivi): ogni oggetto deve avere il suo corrispondente, entro un milionesimo della dimensione della selezione. Ogni riferimento riceve la propria rotazione e scala (uno specchiato una scala Y negativa), e il layer che gli oggetti condividevano. Gli oggetti su layer bloccati non vengono toccati e vengono contati. Cerca nello spazio aperto (il modello o la tavola aperta). Una ricerca molto grande si ferma a un limite di lavoro e lo dice. Un solo passo di annullamento.

### BSEARCH

Oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Trova blocchi}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: parte del nome di un blocco, o un modello con `*` e `?`. Elenca ogni blocco con i suoi riferimenti qui e in tutto il disegno.
- `A`: un valore di attributo, o `TAG=value`. Elenca i blocchi i cui riferimenti lo contengono, con i valori trovati. Gli attributi costanti contano.
- `G`: si selezionano oggetti, o un riferimento a blocco, e vengono elencati, dal migliore, i blocchi la cui forma è somigliante almeno all'85%. Dimensione, rotazione e specularità non contano. La misura confronta le distanze tra punti distribuiti lungo i contorni, quindi trova i sosia; per trovare copie esatte usare {{cmd:BCONVERT}}.

I riferimenti trovati nello spazio aperto vengono selezionati, pronti per il comando successivo.

### BREPLACE

Oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Sostituisci blocchi}}. `Replace [Selected/All]`: `S` sostituisce i riferimenti a blocco selezionati con il blocco che si indica; `A` chiede un blocco e la sua sostituzione e cambia ogni riferimento, come fa {{cmd:BLOCKREPLACE}} (stesso codice). Un riferimento mantiene posizione, scala, rotazione, layer e i valori degli attributi che entrambi i blocchi hanno; i valori per i quali il nuovo blocco non ha posto vengono eliminati e segnalati. `?` elenca i blocchi. Un solo passo di annullamento.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Data extraction}}. Elenca blocchi, loro attributi e proprietà degli oggetti come tabella o file CSV.

- Lavora sulla selezione, oppure chiede `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` quando la selezione contiene entrambi. I blocchi senza nome, le tabelle e le distinte base non vengono mai elencati.
- Stampa le colonne da scegliere (nome, tipo, layer, X, Y, rotazione, scala, lunghezza, area, colore, tipo di linea, spazio, e una per ogni etichetta di attributo), poi `Columns, by name or number with commas between`. {{key:Enter}} prende quelle con l'asterisco: il nome e ogni attributo per i blocchi; tipo, layer e lunghezza per gli oggetti.
- `Put identical rows together with a count? [Yes/No] <Yes>`, poi `Put the list in a: [Table/Csv] <Table>`. Una tabella è una normale tabella ({{cmd:TABLEDIT}} la modifica) e non è attiva: rieseguire il comando quando il disegno cambia.
- Rifiuta una colonna che non è nell'elenco. Una tabella contiene 1.999 righe di dati; un file CSV le contiene tutte.

### COUNTTABLE

Conta i riferimenti a blocco della selezione (o dello spazio aperto) e mette i conteggi in una tabella (`Block`, `Count`) o in un file CSV. Per un conteggio che segue da sé il disegno vedi {{cmd:BOMTABLE}}.

## Tavole e stampa

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; oppure il pulsante {{ui:+}} sotto il disegno. Una nuova tavola con un bordo, un cartiglio e una sola viewport, in ISO A3 (o Tabloid per disegni in pollici o piedi). Nessuna domanda.

### MVIEW

Alias: `MV`. Solo su una tavola ({{cmd:VPORTS}} su una tavola fa lo stesso).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. La viewport mostra l'intero modello a una scala standard.
- `P` (Poligonale): fare clic sugli angoli del contorno (`Undo`, `Close`), {{key:Enter}} a fine lavoro. Rifiuta meno di tre angoli.
- `O` (Oggetto): `Select a closed object for the viewport's outline`: una polilinea chiusa, un cerchio o un'ellisse sulla tavola. La viewport prende la sua forma (le curve come brevi pezzi rettilinei); l'oggetto resta com'era. Rifiuta un oggetto non chiuso.

### VPCLIP

Ritaglia una viewport già presente sulla tavola. `Select viewport to clip` (o selezionarla prima), poi `Select the object to clip to [Polygonal/Delete]`:

- Fare clic su una polilinea chiusa, un cerchio o un'ellisse, oppure {{key:Enter}} (o `P`) per fare clic sugli angoli di un poligono.
- `D` (Elimina, proposto quando la viewport è ritagliata) la riporta a rettangolo: il riquadro attorno al contorno che aveva.
- Ciò che la viewport mostra non si sposta sulla carta, e la sua scala resta. Il modello viene disegnato e stampato solo dentro il contorno, e il bordo lo segue. Un solo passo di annullamento.
- Una viewport ritagliata ha un grip su ogni angolo del suo contorno, oltre al centro e ai quattro angoli del suo riquadro (trascinare un angolo del riquadro allunga anche il contorno). Proprietà mostra Contorno: Rettangolo, oppure Ritagliato con il numero di angoli.
- I file DWG e DXF 2000 conservano il contorno per CadCraft. Gli altri programmi aprono la viewport come il rettangolo che la circonda; DXF R12 conserva solo il rettangolo.
- Nella scheda del modello dice che le viewport stanno sulle tavole.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} è lo stesso anche dalla tavola, e {{ui:Vista}} › {{ui:Altro}} › {{ui:Dividi affiancati}}, {{ui:Dividi sovrapposti}}, {{ui:Quattro riquadri}}, {{ui:Un riquadro}} lo eseguono. Sul modello: `Enter number of panes [SIngle/2/3/4] <3>`; `2` chiede `[Horizontal/Vertical] <Vertical>` (Verticale = affiancati), `3` chiede `[Left/Right] <Right>` (dove va il riquadro grande). Ogni riquadro mantiene la propria vista e il proprio spazio; un clic rende attivo un riquadro. Su una tavola è {{cmd:MVIEW}}. Vedi [Dividere lo schermo](topic:split-screen).

### VPVIEW

Nessun alias. Solo su una tavola.

- `Select viewport` (saltato se ne è selezionata una), poi sul modello: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Nessun alias. Un sistema di coordinate proprio; non una modifica. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: un punto è una nuova origine, poi `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origine, un punto sul semiasse X positivo, un punto sul lato Y positivo. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` e un nome. La vista ruota in modo che il nuovo asse X sia in piano. Vedi [Ruotare la vista e usare le proprie coordinate](topic:ucs-and-turned-view).

### PLAN

Nessun alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: ruota la vista del riquadro attivo in modo che l'asse X dell'SCU (o quello del mondo) sia in piano. Nulla del disegno si sposta.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nessun alias; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Ruota la vista di 90° a sinistra}}, {{ui:Ruota la vista di 90° a destra}}, {{ui:Torna al globale}}. Come `UCS Z -90`, `UCS Z 90` e `UCS W`, con la vista che segue.

### VPLAYER

Nessun alias. Su una tavola, o dentro una viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` chiedono nomi di layer (virgole, caratteri jolly `*` e `?`), poi le viewport `[All/Select/Current] <Current>`; Reset riporta ogni layer al suo valore predefinito "congelato nelle nuove viewport"; `V` imposta quel valore predefinito (`[Frozen/Thawed]`), che {{cmd:MVIEW}} usa. `?` elenca i layer congelati nella viewport corrente. La colonna viewport del pannello Layer fa lo stesso per una sola viewport. Vedi [Congelare un layer in una viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; oppure fare doppio clic dentro una viewport. Solo su una tavola. Lavorare sul modello attraverso una viewport: quella selezionata, l'unica sulla tavola, oppure `Click inside the viewport to work in`. Spostare e ingrandire al suo interno cambia la vista della viewport (una bloccata nella visualizzazione la mantiene e si sposta la tavola); la nuova vista viene scritta come un solo passo di annullamento. Vedi [Lavorare sul modello attraverso una viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; oppure fare doppio clic fuori dalla viewport, o fare clic su una scheda sotto il disegno. Torna alla tavola.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; oppure {{key:Mod+P}}. Apre la finestra {{ui:Stampa in PDF}}. Vedi [Stampa in PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; oppure {{ui:Modifica tabelle…}} nella finestra {{ui:Stampa in PDF}}. Apre {{ui:Tabelle degli stili di stampa}}: come ogni colore viene stampato (colore, grigio, inchiostro, spessore di linea), conservato con il disegno. Vedi [Tabelle degli stili di stampa](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} sposta oggetti tra una tavola e il modello attraverso una viewport, scalati e ruotati in modo che appaiano uguali dall'altro lato. Su una tavola, si selezionano oggetti e vanno sul modello (si indica la viewport quando la tavola ne ha più di una). Mentre si lavora sul modello attraverso una viewport ({{cmd:MSPACE}}), gli oggetti selezionati tornano sulla tavola. Dice di quante volte sono diventati più grandi o più piccoli. Le viewport restano sulla loro tavola. Un solo passo di annullamento.

### ISODRAFT

{{cmd:ISODRAFT}} attiva o disattiva il disegno isometrico (`ON` o `OFF`), oppure passa direttamente al piano `Left`, `Top` o `Right`. Quando è attivo: Ortho ({{key:F8}}) mantiene le linee sui due assi del piano (sinistro: 90° e 150°; superiore: 30° e 150°; destro: 30° e 90°), il tracciamento polare ({{key:F10}}) segue gli stessi assi, lo snap alla griglia ({{key:F9}}) usa la griglia isometrica, e la griglia ({{key:F7}}) è disegnata con linee a 30°, 90° e 150°. {{cmd:ELLIPSE}} acquisisce `Isocircle`: si danno un centro e un raggio (o `Diameter`) e disegna l'ellisse che un cerchio mostra sul piano corrente. Il disegno resta piatto: sono aiuti per disegnare una vista pittorica, non un modello 3D. L'impostazione vale per questa sessione e non viene salvata nel file.

### ISOPLANE

{{cmd:ISOPLANE}} sceglie il piano su cui lavora il disegno isometrico: `Left`, `Top` o `Right`. Invio passa al piano successivo. Mentre il disegno isometrico è attivo, {{key:F5}} fa lo stesso nel mezzo di un comando; quando è disattivo, {{key:F5}} è lasciato al browser.

## Interrogazione

### CAL

Stampa il valore di un calcolo, come viene letto ovunque si digiti una lunghezza.

- `Expression`: digitarla, per esempio `12'6"+3/4"` o `(24'-0")/3`, e premere {{key:Enter}}. CadCraft stampa `= 12'-6 3/4"   (150.75 drawing units)`. Vedi [Aritmetica in un valore digitato](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Misura distanza}}.

- `Specify first point`, `Specify second point`. Stampa distanza, angolo, Delta X e Delta Y.

### AREA

Alias: `AA`; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Area}}. Stampa l'area e il perimetro.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Fare clic o digitare gli angoli; a `Specify next point (Enter closes) [Undo]` premere {{key:Enter}} per chiudere il contorno. `U` annulla l'ultimo angolo.
  - {{key:Enter}} o `O`, poi `Select object`: un cerchio (stampa la sua circonferenza), un'ellisse, una polilinea (una aperta viene chiusa da una linea retta per l'area, e la sua lunghezza viene stampata) o un tratteggio (i fori vengono sottratti).
  - `A` (Aggiungi area) e `S` (Sottrai area) mantengono un totale parziale: la richiesta inizia con `(ADD mode)` o `(SUBTRACT mode)`, ogni area viene aggiunta o tolta, e `Total area = …` viene stampato dopo ciascuna. In questi modi `O` sceglie oggetti fino a {{key:Enter}}, e {{key:Enter}} alla prima richiesta termina il comando.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; dopo ogni misura chiede di nuovo, con `eXit` come predefinito.

`Quick` misura attorno al puntatore mentre lo si muove: la distanza dall'oggetto più vicino a destra, sopra, a sinistra e sotto (lungo gli assi dell'SCU corrente), disegnata man mano; e l'angolo dove due di questi vicini sono rettilinei e si incontrano. Un clic scrive nella cronologia le quattro distanze, la larghezza e l'altezza libere e gli angoli; Invio torna alle opzioni. Legge ciò che è sullo schermo.

- `D`: due punti, come {{cmd:DIST}}.
- `R`: `Select arc or circle`; stampa raggio e diametro.
- `A`: un arco (il suo angolo compreso), una linea e poi una seconda linea (l'angolo tra di esse, verso le loro estremità lontane), oppure {{key:Enter}} e tre punti (vertice, poi le due estremità).
- `AR`: come {{cmd:AREA}}, un'area.

### ID

Nessun alias. `Specify point`; stampa le sue X e Y.

### LIST

Alias: `LI`, `LS`. `Select objects`; stampa tipo, layer e principali misure di ogni oggetto.

### MASSPROP

{{cmd:MASSPROP}} dà le proprietà di sezione delle regioni e degli oggetti chiusi selezionati, considerati insieme: area, perimetro, riquadro di delimitazione, centroide, momenti d'inerzia rispetto agli assi X e Y passanti per l'origine, il prodotto d'inerzia, i raggi d'inerzia, gli stessi momenti rispetto al centroide, e i momenti principali con le direzioni dei loro assi. I fori in una regione contano come fori. Le figure sono in unità del disegno ed esatte per contorni fatti di linee e archi; ellissi e spline vengono misurate come brevi segmenti rettilinei, e lo dice. Dopo il rapporto chiede se scriverlo in un file di testo. Gli oggetti non chiusi vengono esclusi, e lo dice con il numero.

## Vista, file e altro

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Fare clic su due angoli per una finestra. `E`, `A` o Invio: l'intero disegno.
- `P` (Precedente, oppure {{ui:Precedente}} nella barra degli strumenti) torna alla vista precedente, fino a 10 viste per scheda; una serie di scatti di rotellina o uno spostamento contano come una vista.
- Un numero come `2`, `2x` o `0.5x` (oppure `S` e poi il numero) ingrandisce o riduce di quel fattore attorno al centro dello schermo.
- `C` chiede `Specify center point` e `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT e i comandi PDF

Alias: `PDFATT` per {{cmd:PDFATTACH}}, `PDFIM` per {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} mette una pagina PDF sotto il disegno (file, pagina, punto di inserimento, scala, rotazione); {{cmd:PDFIMPORT}} trasforma linee, curve, riempimenti e testo di una pagina in oggetti del disegno su layer che prendono il nome dal PDF, alla dimensione reale, a una scala digitata, o scalati da due punti e una distanza reale. {{cmd:PDFCLIP}} ritaglia un sottofondo, {{cmd:PDFADJUST}} imposta attenuazione, contrasto, monocromia o lo disattiva, {{cmd:PDFLAYERS}} accende e spegne i layer propri del PDF, e {{cmd:PDF}} indica di nuovo a CadCraft i file usati dai sottofondi di un disegno. Vedi [Sottofondi PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Completamento automatico del disegno: senza comandi in corso, un'ombra grigia mostra cosa dicono gli schemi del disegno che viene dopo. {{cmd:AUTOCOMPLETE}} la attiva con `On` o la disattiva con `Off` (anche Impostazioni › CadCraft) oppure `Show` mostra ciò che suggerirebbe ora. **Tab** disegna l'ombra come un solo passo di annullamento, **Esc** la nasconde finché il disegno non cambia. Trova tre cose tra gli oggetti più recenti: la prossima copia di qualcosa disegnato due volte o più a un passo regolare (montanti, colonne, alzata e pedata di una scala), i prossimi gradini di una scala a polilinea, e il lato mancante di una stanza o di una catena di muri. Nel mezzo di {{cmd:LINE}} o {{cmd:PLINE}} l'ombra è il **prossimo punto**: il prossimo gradino di una scala (alzata, pedata, alzata…), il quarto angolo di un rettangolo, il punto che lo chiude, oppure un altro passo uguale. Avvicinare il cursore e premere **Tab**, come se si fosse fatto clic lì; proseguire o premere Invio. Calcolato su questo computer con regole, senza modello.

### AUTOSHEET

Alias: `ASH`. Tavole che si impaginano da sole. {{cmd:AUTOSHEET}} prende i pezzi del disegno (le viste con nome, oppure i pezzi separati del modello, oppure l'intero modello), sceglie un formato carta (o quello che si indica), assegna a ogni pezzo una scala standard (una per tutti, oppure la più grande che ognuno può accettare) e dispone le viste in righe su nuove tavole con un cartiglio e una didascalia (nome e scala) sotto ciascuna. Ciò che non entra su una tavola ne ottiene una propria. Un solo passo di annullamento. Calcolato su questo computer con regole, senza modello.

### PHOTOSKETCH

Alias: `PSK`. Da foto di schizzo a disegno. Si sceglie una foto (JPEG, PNG o TIFF) di uno schizzo a mano su un foglio di carta. {{cmd:PHOTOSKETCH}} trova i quattro angoli del foglio, raddrizza la prospettiva, prende il formato carta indicato (`Paper`, oppure il più vicino standard) e la `Scale` dello schizzo (1 : n), poi traccia i tratti di penna in linee, archi e cerchi, con un layer per ogni colore di penna (nero, rosso, blu, verde). Se non riesce a trovare il bordo del foglio, prende l'intera foto come tavola e lo dice. Le scritte vengono escluse. Un solo passo di annullamento. Eseguito su questo computer con elaborazione d'immagine classica, senza modello, senza inviare nulla altrove. Vedi anche i comandi per disegni scansionati.

### AUTODIM

Alias: `ADIM`. Quotatura automatica secondo regole. {{cmd:AUTODIM}} quota gli oggetti selezionati (o l'intero disegno) a partire dai loro bordi di livello e a piombo: una catena di quote lungo i lati che si scelgono (`Sides`), una quota complessiva all'esterno, la larghezza di ogni apertura (una distanza tra linee di muro allineate), un diametro per ogni misura di foro, e con `Grid` la spaziatura tra le linee della griglia. Una quota già presente non viene creata di nuovo. Un solo passo di annullamento. Calcolato su questo computer con regole, senza modello.

### GRIDMOVE

Alias: `GM`. Spostare una linea della griglia porta con sé l'insieme. {{cmd:GRIDMOVE}} sposta una linea della griglia (una linea su un layer il cui nome dice griglia o asse) e ciò che vi è appeso: i muri con un'estremità sulla linea si allungano per seguirla, i muri lungo di essa si spostano per intero, le colonne (riferimenti a blocco e cerchi sulla linea), il suo cerchietto e la sua etichetta si spostano, e le quote i cui punti stanno su di essa misurano la nuova spaziatura. Dare due punti (conta solo la parte attraverso la linea) oppure `Distance`. Un solo passo di annullamento riporta tutto indietro. Eseguito su questo computer con regole.

### DETAILS

Alias: `DET`. Dettagli che trovano da soli. {{cmd:DETAILS}} conserva i dettagli propri dello studio: `Add` mette in elenco un blocco di questo disegno, `List` e `Remove` lo gestiscono, e `Find` li ordina per ciò che è selezionato (o per ciò che si è disegnato per ultimo) in base alle parole dei suoi layer, dei nomi dei blocchi, dei motivi di tratteggio e delle note, confrontate con il nome e le note di ogni dettaglio; così un capo di finestra trova la sua lamiera di davanzale. Scegliere un numero e un punto per collocarlo. Con `Hint` attivo (anche Impostazioni › CadCraft), selezionare qualcosa che un dettaglio riguarda mette una riga nella barra di stato. L'elenco è conservato in questo browser, su questo computer, ed è quello che viene cercato. `Share` lo mette anche nella propria cartella Documenti (`.cadcraft/firm-details.json`, con il disegno di ogni blocco): `Pull` aggiunge ciò che il team ha e a voi manca, `Push` aggiunge ciò che avete e a loro manca, `Both` fa entrambe le cose, e non viene mai rimosso nulla da nessuna parte. Aprire prima la cartella Documenti ({{cmd:DOCUMENTS}}); quando quella cartella è una cartella di un piano Team Cloud, l'intero team condivide un solo elenco. Un elemento di dettaglio nel pannello Libreria ha un pulsante **Aggiungi ai dettagli del mio studio** che lo mette nello stesso elenco. Calcolato su questo computer con parole, senza modello.

### SKETCHFIX

Alias: `SKF`. Gli schizzi a penna diventano geometria precisa. Premere e trascinare un tratto a mano libera alla volta (penna, mouse o dito), poi Invio. Ogni tratto viene letto come una linea, un cerchio, un arco, un rettangolo o una polilinea: le linee quasi orizzontali e a piombo diventano esattamente tali, un tratto chiuso e rotondo diventa un cerchio, un tratto chiuso con quattro angoli retti un rettangolo, e le estremità dei tratti vengono tirate insieme e sulle estremità già presenti nel disegno. Un solo passo di annullamento. Calcolato su questo computer con regole, senza modello.

### SCANATTACH e i comandi per disegni scansionati

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} non ne ha. Lavorano su un'immagine, un passo di annullamento ciascuno. {{cmd:SCANATTACH}} inserisce un PNG, JPEG, TIFF (una pagina o tutte) oppure una pagina PDF che è un'immagine. {{cmd:SCANSCALE}} scala la tavola da due punti scelti e dalla distanza reale. {{cmd:SCANALIGN}} la sposta e ruota su due punti (`Scale the sheet to fit` Sì/No). {{cmd:SCANDESKEW}} mostra l'angolo delle linee lunghe della tavola e la ruota una volta che si dà `Accept` o un `Value`. {{cmd:SCANCLEAN}} la rende bianco e nero (`Threshold` Auto/Adaptive/Level, `Specks`) e `Run`. {{cmd:SCANCROP}} conserva una finestra. {{cmd:SCANERASE}} cancella un `Rectangle`, un `Polygon` o un `Lasso`. {{cmd:SCANTRACE}} traccia linee e archi su un nuovo layer (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e riferisce cosa ha trovato e cosa ha lasciato come raster. {{cmd:SCANINFO}} elenca il file originale e i passaggi. {{cmd:RASTERSNAP}} attiva o disattiva lo snap alle linee delle tavole scansionate (On o Off). Vedi l'argomento Disegni scansionati e il tracciamento.

### REGEN e REGENALL

Alias: `RE` per {{cmd:REGEN}}, `REA` per {{cmd:REGENALL}}. Ricostruisce ciò che è disegnato a schermo dal disegno: {{cmd:REGEN}} la scheda che si sta guardando (su una tavola, anche il modello che le sue viewport mostrano), {{cmd:REGENALL}} ogni scheda, ogni riquadro dello schermo diviso e ogni disegno aperto. Si usano quando l'immagine sembra vecchia dopo una modifica scritta a script o molto grande, o quando un assistente ha modificato il disegno; il disegno in sé non viene toccato, quindi non c'è nulla da annullare.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, poi il nome della vista. `S` salva la vista a schermo, `W` una finestra scelta, `R` mostra una vista salvata, `D` ne elimina una, `?` elenca le viste di questa scheda. Salvare con un nome esistente lo sostituisce; ogni modifica è un passo di annullamento. Le viste appartengono alla scheda su cui sono state salvate. I file DWG e DXF le conservano (la tabella VIEW); le viste di una tavola tornano sulla prima tavola, perché il file non dice quale sia.

### UNDO e REDO

Alias: `U` per {{cmd:UNDO}}; {{cmd:REDO}} non ne ha. Anche {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Porta al pannello {{ui:Layer}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` oppure un nome (`?` li elenca: Continuous, quelli propri del disegno, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE con le loro misure `2` (metà) e `X2` (doppio)). {{cmd:LWEIGHT}} (`LW`): lo spessore di linea per i nuovi oggetti in mm, oppure `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): la scala dei tipi di linea del disegno (annullabile). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — come il pulsante {{ui:LWT}} nella barra di stato. Vedi [Spessori e tipi di linea](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, poi il nuovo nome; gli oggetti o i riferimenti lo seguono. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` fino a {{key:Enter}}, poi `Select object on target layer or [Name]` e `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, poi `Y`: il layer e ogni oggetto su di esso vanno via (non il layer 0, DEFPOINTS né il layer corrente). Un passo di annullamento ciascuno. Vedi [Organizzare un disegno con i layer](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layer scegliendo oggetti; anche nel menu {{ui:Strumenti}} del pannello {{ui:Layer}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, poi {{key:Enter}}: ogni altro layer viene spento. {{cmd:LAYUNISO}} li riaccende. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (o congelato), di continuo; `U` annulla l'ultimo, {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} accende ogni layer, {{cmd:LAYTHW}} scongela ogni layer. Ogni comando è un passo di annullamento. Vedi [Organizzare un disegno con i layer](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} avvia un disegno vuoto e {{cmd:OPEN}} apre un DWG o DXF, ciascuno nella propria scheda sopra il disegno (un nuovo disegno non modificato viene usato al posto di una nuova scheda). Chiudere una scheda con modifiche non salvate chiede prima. Vedi [Dividere lo schermo](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, anche {{key:Mod+S}}) scarica una copia nel formato del disegno: DWG se è stato aperto da un DWG, DXF se da un DXF. Un nuovo disegno usa il formato scelto per ultimo in Salva con nome in questo browser, altrimenti DWG.

{{cmd:SAVEAS}} (anche {{key:Mod+Shift+S}}) apre la finestra {{ui:Salva una copia con nome}}: si sceglie {{ui:DWG}} (e la sua {{ui:Versione}}), {{ui:DXF R12}} oppure {{ui:DXF 2000}}, poi {{ui:Salva}}. La scelta resta per questo disegno e per i nuovi disegni in questo browser.

{{cmd:DXFOUT}} scarica sempre una copia DXF R12, senza cambiare il formato che usa {{cmd:SAVE}}.

Vedi [File: cosa si apre, cosa si salva](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Avvia di nuovo la guida in sei passi al primo disegno. Vedi [Primi passi](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Vedi [Impostazioni](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: ancora o rende mobile la riga di comando, la rende su una sola riga, chiede quante righe di cronologia mostrare (da 0 a 12), oppure apre la cronologia. Vedi [Impostazioni](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: le barre sopra il disegno come erano, oppure compatte. Vedi [Impostazioni](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: il passo su cui si allineano le linee di tracciamento {{ui:Polare}} (più di 0, fino a 180). Ricordato in questo browser.

### UNITS

Alias: `UN`. Come si scrivono e si digitano le lunghezze.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architettonico e Frazionario: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Per gli altri: `Enter number of decimal places (0 to 8)`.

Le nuove quote lo seguono. Un solo passo di annullamento. Come {{ui:Formato delle lunghezze}} e {{ui:Precisione}} in {{ui:Impostazioni correnti}}; vedi [Piedi e pollici](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Visualizza un layout di circuito integrato (un file GDSII): prova di laboratorio, solo per visualizzare e misurare.

- Un selettore di file accetta un file `.gds`; con più celle principali, `Enter the top cell to draw`.
- Ogni layer e tipo di dato diventa un layer del disegno (`GDS 1`, `GDS 2/5`), i riferimenti e le serie vengono collocati piatti, nell'unità utente del file (di solito micrometri). Un solo passo di annullamento. Nulla viene simulato o verificato, e il file non viene riscritto.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagramma da testo.

- Una casella riceve il testo (o una riga con `;` tra le istruzioni nella riga di comando): un diagramma di flusso Mermaid, un diagramma di componenti PlantUML, D2 o un elenco da-a.
- `Specify the top left corner of the diagram`, poi `Specify the text height`.

Blocchi e connettori sono oggetti ordinari sul layer `Diagram`, selezionati quando termina. Un solo passo di annullamento. Vedi [Disegnare un diagramma da testo](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Gli oggetti OLE che un DWG contiene e che CadCraft non sa collocare da sé.

- Elenca ciascuno: numero, tipo, dimensione, se ha salvato un'immagine.
- `Enter an option [Place/eXit] <eXit>`: Place chiede il numero, l'angolo in basso a sinistra e la larghezza, e disegna una cornice con l'immagine. Un solo passo di annullamento; l'oggetto conservato non viene modificato. Vedi [Immagini](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. I propri font SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} legge ogni `.shx` di una cartella (CadCraft Studio; di nuovo a ogni avvio), {{ui:Files}} prende file scelti (il browser), {{ui:Reverse}} dispone le lettere di un font dall'ultima alla prima. Gli stili di testo che nominano un font caricato disegnano con esso. Vedi [Disegnare testo con i propri font SHX](topic:shx-fonts).

### LIMITS

Quanto grande deve essere il disegno.

- `Specify lower left corner or [ON/OFF] <current>`: un punto, `ON` oppure `OFF`.
- `Specify upper right corner <current>`.

La griglia riempie i limiti, {{cmd:ZOOM}} All li mostra, e con i limiti ON un punto esterno viene rifiutato (`**Outside limits`). Un solo passo di annullamento; salvato in DWG e DXF. Vedi [Impostare i limiti del disegno](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Come si mostrano e si digitano gli angoli.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, oppure per gli altri due `Enter precision` (0 gradi, 2 minuti, 4 secondi, da 5 a 8 decimali di secondo).

Un solo passo di annullamento; salvato in DWG e DXF. Come {{ui:Formato dell'angolo}} in {{ui:Impostazioni correnti}}. Vedi [Digitare e mostrare direzioni e angoli](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Carica applicazione…}}. La finestra {{ui:Carica applicazioni}}: carica routine `.lsp` e file di finestra `.dcl`, le scarica, le ricarica dalla cronologia, e la Startup Suite. I comandi `(defun c:NAME …)` di una routine funzionano poi come tutti gli altri. Vedi [Caricare applicazioni](topic:load-applications) ed [Eseguire routine LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:Modifica alias…}}) apre il file dei propri alias (righe `ALIAS, *COMMAND`); {{ui:Salva}} lo applica. {{cmd:REINIT}} lo applica di nuovo. Vedi [Modificare gli alias dei comandi](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; oppure {{ui:Vista}} › {{ui:Altro}} › {{ui:LISP editor}}. Apre l'editor LISP, una finestra che resta aperta accanto al disegno.

- Il testo: numeri di riga, il corrispondente della parentesi sul cursore evidenziato (rosso se non ne ha uno), {{key:Enter}} rientra la nuova riga sotto la parentesi aperta, {{key:Tab}} inserisce due spazi, {{key:Esc}} lascia il testo.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): legge ogni forma, come {{cmd:APPLOAD}} fa con il file, e crea i suoi comandi `c:`. Il file compare nell'elenco di {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): valuta le forme selezionate, oppure quella in cui si trova il cursore.
- {{ui:Stop}}: termina una routine in esecuzione.
- {{ui:Console}}: ciò che la routine ha stampato, e ogni errore con la sua riga; un clic su un errore vi porta. Il testo viene eseguito una forma di primo livello alla volta, quindi la riga è quella della forma, o al suo interno la riga che chiama la funzione indicata dall'errore.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): un file `.lsp`. Il testo viene anche conservato in questo browser, quindi chiudere la finestra non lo perde.
- Accanto al testo: le funzioni che la routine definisce, quelle che chiama e che questo LISP non ha ancora, quelle che chiama che non sono né definite in essa né integrate, e gli elenchi completi di ciò che è integrato e ciò che non lo è.

Un testo con una parentesi che non viene mai chiusa, o una stringa che non finisce mai, non viene eseguito: viene indicata la riga. Non esistono debugger passo passo, punti di interruzione né finestre di controllo. Vedi [Eseguire routine LISP](topic:run-lisp).

### HELP

Alias: `?`. Stampa ogni comando, i suoi alias e una descrizione di una riga nella cronologia della riga di comando. Non apre questa guida: per quella premere {{key:F1}} o fare clic su {{ui:Guida}}.

## Richiesta di selezione oggetti

A ogni richiesta `Select objects`: fare clic sugli oggetti, disegnare finestre (da sinistra a destra) e intersezioni (da destra a sinistra) con due clic, oppure premere e trascinare un lazo ({{key:Space}} mentre si trascina: finestra, intersezione, recinzione), {{key:Shift}}+clic per togliere, e premere {{key:Enter}} per terminare. Si può anche digitare `ALL` (tutto), `L` (l'ultimo oggetto), `P` (Precedente: ciò che usava l'ultimo comando), `F` (Fence: oggetti attraversati da una linea di punti; `U` annulla un punto), `W` (Window), `C` (Crossing), `R` (modalità Rimozione: i clic tolgono oggetti; la richiesta dice `Remove objects`) e `A` (Aggiungi di nuovo). `?` li elenca. Non vengono mostrati nella richiesta. {{key:Tab}} su oggetti sovrapposti evidenzia il successivo; fare clic per sceglierlo. Vedi [Selezionare oggetti](topic:select-objects).

### ACCESS

Alias: `AX`. Disegnare senza vista. {{cmd:ACCESS}} attiva o disattiva l'accesso (`On`, `Off`) e cambia i suoni di snap (`Sound`) e i comandi vocali (`Voice`); dice prima lo stato. Con l'accesso attivo, ogni comando e risultato viene letto dal lettore dello schermo, e l'area di disegno ha un cursore da tastiera. L'argomento della guida "Disegno senza vista" elenca i tasti.

### DESCRIBE

Alias: `DESC`. Dice cosa contiene il disegno: quanti oggetti, di che tipo, di che dimensione, quanti layer, cosa è selezionato. Legge soltanto; non cambia nulla.

### WHEREAMI

Alias: `WHERE`. Dice dove si trova il cursore, nelle unità del disegno.

### NEARBY

Dice cosa si trova vicino al cursore, dal più vicino, ciascuno con la sua distanza e il lato su cui si trova.

### SAYSEL

Dice cosa è selezionato, una frase per oggetto (lunghezza della linea, estremità e angolo; raggio e centro del cerchio; testo come scritto).

### VOICE

Attiva o disattiva i comandi vocali. Sono riconosciuti su questo computer; dove il browser non può farlo, la voce resta spenta, a meno che non si scelga il servizio online del browser in Impostazioni.

### TOUCHCROSSHAIR

Alias: `TCX`. Il mirino spostato per disegnare con il dito, così la punta del dito non copre il punto scelto. Quando è attivo, un dito sul disegno non sceglie: muove un mirino che sta sopra il dito e di lato. Gli snap a oggetto e il tracciamento seguono il mirino. Sollevare il dito non sceglie nulla e lascia il mirino dov'è. Per scegliere, premere il pulsante {{ui:Click}} nell'angolo del disegno, oppure toccare il disegno con un secondo dito. Tenere premuto {{ui:Click}} mentre si muove l'altro dito per trascinare (una finestra di selezione, un lazo, un grip). Un dito tenuto fermo a lungo, oppure il pulsante {{ui:Enter}}, è Invio. Due dita spostano e ingrandiscono come prima. Vicino al bordo inferiore e al bordo lontano il mirino si avvicina al dito, così ogni parte del disegno è raggiungibile. Una penna e un mouse scelgono sempre direttamente.

{{cmd:TOUCHCROSSHAIR}} dice lo stato e chiede `ON`, `OFF`, `Auto` (attivo solo dove un dito è l'unico puntatore, quindi disattivo su un computer con mouse), `Distance` (quanto il mirino si trova lontano dal dito, da 24 a 240 pixel) oppure `Side` (`Left`: in alto e a sinistra, per la mano destra; `Right` per la mano sinistra; i pulsanti passano all'altro angolo). Le stesse scelte sono in Impostazioni › CadCraft, e su un dispositivo con schermo tattile la barra di stato ha un interruttore {{ui:Offset crosshair}}. Le scelte vengono conservate in questo browser.

### WHOHAS

Dice chi ha aperto un disegno. In CadCraft Studio su un computer, aprire un DWG o DXF scrive accanto ad esso un piccolo file di blocco (`Plan.dwg.cclock`: chi, da quando, quale versione), lo aggiorna ogni minuto finché il disegno è aperto, e lo rimuove alla chiusura del disegno. Aprire un disegno che un'altra persona ha aperto dice chi e da quando, e propone {{ui:Open read-only}} (Salva poi chiede un nuovo nome), {{ui:Open anyway}} (l'altra persona viene avvisata al suo prossimo aggiornamento) oppure {{ui:Cancel}}. Salvare sopra un file che un'altra persona ha aperto chiede prima. Un blocco non aggiornato da cinque minuti viene detto obsoleto: l'altra copia è stata chiusa senza salvare, oppure il computer è in stop.

{{cmd:WHOHAS}} chiede `Current` (il disegno aperto), `File` (sceglierne uno), `FOlder` (scegliere una cartella: viene elencato ogni disegno che in essa risulta aperto da qualche parte), `Path` (digitare un percorso completo) oppure `Name` (il nome che vedono gli altri; il nome del proprio account quando si è connessi). Studio può raggiungere solo le cartelle che si sono scelte: per un disegno aperto da una cartella mai scelta, dice una volta che non può segnare il disegno come aperto; `FOlder` sceglie la cartella, e da allora i blocchi funzionano lì. Il blocco è una nota per le persone, non una barriera: un altro programma può comunque scrivere il file. In un browser non ci sono cartelle da esaminare, e il comando lo dice.

### OVERKILL

Elimina oggetti duplicati e sistema linee e archi sovrapposti, per disegni che arrivano pieni di tratti doppi. `Select objects to clean up`, {{key:Enter}}, poi {{key:Enter}} di nuovo per pulire con le impostazioni mostrate, oppure cambiarne una prima:

- `Tolerance`: quanto devono essere vicine due coordinate per essere considerate uguali (0,000001 all'inizio; 0 significa esattamente uguali).
- `Ignore`: proprietà che possono differire tra due oggetti altrimenti uguali. Digitare un nome per attivarla: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, oppure `None` / `All`. {{key:Enter}} a fine lavoro.
- `Overlap`: attivo o disattivo. Se attivo, le linee lungo una stessa retta che si sovrappongono diventano un'unica linea (una linea contenuta in un'altra viene semplicemente eliminata), e gli archi sullo stesso cerchio che si sovrappongono diventano un unico arco; gli archi che chiudono un giro completo diventano un cerchio, e un arco su un cerchio viene eliminato.
- `Ends`: attivo o disattivo. Se attivo, le linee lungo una stessa retta e gli archi sullo stesso cerchio che si toccano solo di estremità in estremità diventano un unico pezzo.

Ogni tipo di oggetto viene controllato per i duplicati: due oggetti sono duplicati quando la geometria è la stessa entro la tolleranza e layer, colore, tipo di linea, scala del tipo di linea, spessore di linea, spessore, trasparenza e altezza coincidono (meno quelli che si ignorano). Linee e polilinee aperte coincidono anche se disegnate nel senso opposto. Il primo oggetto nell'ordine di disegno resta e mantiene le proprie proprietà. Il comando riferisce quanti oggetti ha controllato ed eliminato: duplicati, pezzi sovrapposti uniti, pezzi uniti di estremità in estremità. Un solo {{cmd:UNDO}} riporta tutto. Le impostazioni durano fino alla chiusura della finestra del disegno.

Lascia intatti: oggetti su layer bloccati e oggetti nascosti. Non unisce linee con un'altezza (Z) (i duplicati esatti di esse vengono comunque eliminati), e non tocca i segmenti dentro una polilinea (non vengono diradati), una linea sopra un segmento di polilinea, né una polilinea chiusa disegnata nel senso opposto.

### DRAWORDER

Cambia quali oggetti vengono disegnati davanti. `Select objects to re-order`, {{key:Enter}}, poi `Above objects`, `Under objects`, `Front` o `Back` ({{key:Enter}} = `Back`). `Above objects` e `Under objects` chiedono gli oggetti di riferimento: la selezione va subito davanti al più avanzato di essi, oppure subito dietro al più arretrato. Gli oggetti selezionati mantengono il loro ordine reciproco. Un solo passo di annullamento. L'ordine viene salvato con il disegno in DWG e DXF, dove è l'ordine in cui gli oggetti vengono scritti.

A schermo CadCraft disegna prima le aree riempite (tratteggi pieni, polilinee spesse, maschere), poi le linee, poi i testi, così il testo si legge sempre sopra un riempimento; l'ordine di disegno si vede tra gli oggetti riempiti e tra le immagini. Gli altri programmi che aprono il file disegnano ogni oggetto nell'ordine salvato.

### TEXTTOFRONT

Porta testi, quote e richiami davanti a tutto il resto nello spazio aperto: `Text`, `Dimensions`, `Leaders` oppure `All` ({{key:Enter}} = `All`). Un solo passo di annullamento. Lo dice quando non ce n'è nessuno, o quando sono già in primo piano.

### HATCHTOBACK

Manda ogni tratteggio dello spazio aperto dietro a tutto il resto, così i riempimenti smettono di coprire linee e testi nel file salvato. Nessuna richiesta. Un solo passo di annullamento.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra solo gli oggetti selezionati: tutto il resto dello spazio aperto esce di vista fino a {{cmd:UNISOLATEOBJECTS}}. A differenza di {{cmd:LAYISO}} lavora sugli oggetti che si scelgono, qualunque sia il loro layer, e non cambia alcun layer. Gli oggetti nascosti non vengono disegnati, scelti, agganciati, ingranditi o stampati, e i comandi che accettano `ALL` li saltano. Ciò che si disegna mentre gli oggetti sono isolati appare come al solito.

Vale per la sola sessione: nulla di questo viene salvato con il disegno, non è un passo di annullamento, e riaprendo il disegno si vede tutto. Mentre gli oggetti sono nascosti, la barra di stato mostra un pulsante con il loro numero; farvi clic per mostrarli di nuovo.

### HIDEOBJECTS

Nasconde gli oggetti selezionati fino a {{cmd:UNISOLATEOBJECTS}}. Le stesse regole di {{cmd:ISOLATEOBJECTS}}: solo per la sessione, non salvato, non è un passo di annullamento.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Mostra di nuovo ogni oggetto nascosto da {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, e dice quanti ne sono tornati.

### LAYLOCKFADE

Imposta come appaiono gli oggetti su layer bloccati e se un clic li raggiunge. Dice lo stato corrente, poi accetta:

- un numero da 0 a 90: la quantità di attenuazione in percentuale (50 all'inizio). 0 disattiva l'attenuazione.
- `ON` oppure `OFF`: attenuazione attiva o disattiva, mantenendo la quantità.
- `Pick`, poi `Yes` oppure `No`: un clic può selezionare oggetti su layer bloccati quando non è in corso alcun comando? `No` (predefinito): non possono essere scelti affatto. `Yes`: un clic o una finestra li seleziona perché {{ui:Proprietà}} possa mostrarli; comunque non si possono modificare, e la `Select objects` di un comando non li prende mai.

Gli snap a oggetto trovano oggetti su layer bloccati in entrambi i casi. Le stampe non sono mai attenuate. Entrambe le impostazioni sono dell'utente, non del disegno, e sono anche in {{ui:Impostazioni}} sotto {{ui:Locked layers}}.

### BURST

Scompone i riferimenti a blocco e mantiene ciò che dicono i loro attributi. `Select block references to burst`, {{key:Enter}}: ogni riferimento viene sostituito dagli oggetti del blocco, e il valore di ogni attributo visibile diventa testo semplice sul layer proprio di quell'attributo (un attributo sul layer 0 finisce sul layer del riferimento, come gli altri oggetti del blocco sul layer 0). Gli attributi invisibili vengono eliminati. Un blocco dentro il blocco resta un riferimento a blocco. Un solo passo di annullamento; riferisce i riferimenti scomposti e i valori degli attributi trasformati in testo.

Rifiuta un disegno collegato per nome (prima collegarlo, oppure copiarne parti con {{cmd:NCOPY}}), e lascia intatti gli altri oggetti selezionati. Per i riferimenti a blocco {{cmd:EXPLODE}} dà gli stessi oggetti; {{cmd:BURST}} prende solo riferimenti a blocco e conta il testo degli attributi.

### TXT2MTXT

Alias: `T2M`. Unisce testi su una riga in un unico testo a paragrafo. `Select single-line text to join`, {{key:Enter}}, poi `Paragraph` (le righe si fondono e vanno a capo sulla larghezza della riga più larga) oppure `Lines` (ogni testo resta una riga a sé); {{key:Enter}} prende quello usato per ultimo. Le righe sono ordinate dall'alto in basso, poi da sinistra a destra, lungo la direzione del testo più in alto. Il paragrafo pende dall'angolo in alto a sinistra del testo più in alto e ne prende altezza, rotazione, stile, layer e colore. Un solo passo di annullamento.

Un testo già a paragrafo, un testo vuoto e gli altri oggetti nella selezione vengono lasciati stare, e il comando dice quanti sono.

### NCOPY

Copia oggetti da un riferimento a blocco o da un disegno collegato nel disegno, senza scomporre nulla. `Pick an object inside a block reference or a linked drawing`: l'oggetto più vicino al punto scelto viene copiato dove si vede, per quanti livelli di blocco sia annidato; sceglierne altri, poi {{key:Enter}}. Poi `Base point to move the copies`: {{key:Enter}} le lascia dove sono, oppure si dà un punto base e un secondo punto. L'intero comando è un solo passo di annullamento.

Una copia prende il layer su cui si vede: un oggetto sul layer 0 dentro un blocco finisce sul layer del riferimento in cui si trovava, e un colore ByBlock diventa il colore di quel riferimento. Da un disegno collegato, il layer `Plan|Walls` diventa `Plan$0$Walls` (il nome che dà il collegamento), creato con il colore, il tipo di linea e lo spessore del layer collegato. Il valore di un attributo viene copiato come testo. I riferimenti a blocco su layer bloccati non possono essere scelti.

### FLATTEN

Imposta a 0 l'altezza (Z) e lo spessore degli oggetti selezionati. `Select objects to flatten`, {{key:Enter}}. Appiattisce anche gli oggetti dentro le definizioni dei blocchi che la selezione usa (e i blocchi dentro di essi), così ogni riferimento a quei blocchi cambia; i disegni collegati restano come sono. Un solo passo di annullamento; riferisce quanti oggetti sono cambiati, e lo dice quando nessuno aveva altezza o spessore.

Ciò che CadCraft conserva della terza dimensione in un disegno 2D è: un'altezza su cerchi, archi, ellissi, punti, testi, riferimenti a blocco, tratteggi, richiami e polilinee (la loro quota), un'altezza a ogni estremità di una linea, e uno spessore su linee, cerchi, archi, polilinee, punti e testi, come li aveva il file. {{cmd:FLATTEN}} azzera esattamente quelle cose. Non tocca il modello 3D nella scheda 3D, né le facce o i solidi 3D, e un oggetto disegnato su un piano inclinato era già stato riportato sul piano del disegno all'apertura del file.

### BREAKLINE

Disegna una linea con il simbolo di interruzione, per una vista che viene tagliata corta. Dice la dimensione e il prolungamento correnti, poi `First point of the break line` (oppure `Size` / `Extension` per cambiarli prima), `Second point`, e `Where the break symbol sits`: fare clic lungo la linea, oppure {{key:Enter}} per il centro. Il risultato è una polilinea sul layer corrente: la linea, che va oltre ciascun punto del prolungamento, con un tratto a forma di Z alto quanto la dimensione e la metà di lunghezza.

`Size` e `Extension` vengono ricordati come impostazioni (la dimensione inizia al doppio dell'altezza del testo della quota per la scala della quota; il prolungamento alla metà della dimensione). {{key:Enter}} ripete il comando.

### AUDIT

Verifica il disegno aperto per individuare danni e lo ripara. {{cmd:AUDIT}} guarda ogni oggetto nel modello, sulle tavole e dentro i blocchi, e la tabella dei layer, ed elenca ciò che trova per tipo:

- numeri non finiti o assurdamente grandi;
- oggetti senza dimensione: una linea di lunghezza zero, un cerchio di raggio zero, una polilinea con un solo punto, un testo senza lettere o altezza, un riferimento a blocco di scala zero;
- oggetti su un layer che il disegno non ha; riferimenti a un blocco che non c'è; nomi di stili di testo e di quota e nomi di tipi di linea che non sono nel disegno;
- blocchi che contengono se stessi, direttamente o attraverso altri blocchi;
- oggetti che condividono un identificativo, una chiave o un riferimento di file;
- quote senza i punti da cui sono misurate, e tratteggi il cui contorno non è una linea chiusa.

Poi chiede `Fix them? [Yes/No]`. `No` non cambia nulla. `Yes` ripara tutto in un solo passo di annullamento: ciò che non si può disegnare viene rimosso (numeri errati, nessuna dimensione, blocco mancante, quota rotta, tratteggio senza un contorno utilizzabile, il riferimento che chiude un cerchio di blocchi); un layer mancante viene creato; i nomi di stili e tipi di linea sconosciuti tornano ai predefiniti; una chiave condivisa viene sostituita. Stampa quanti oggetti sono stati rimossi e quanti riparati. Gli stessi rilievi compaiono nel pannello Problemi, ciascuno con il proprio {{ui:Ripara}}.

Non rifiuta nulla, ma controlla solo ciò che CadCraft stesso disegna: i dati conservati per altri programmi (solidi 3D, oggetti OLE) non vengono aperti.

### RECOVER

Apre un DXF o DWG danneggiato. {{cmd:RECOVER}} chiede il file, legge ciò che si può leggere invece di rifiutare il file, elenca ciò che ha saltato o presunto, poi controlla e ripara il disegno come fa {{cmd:AUDIT}} con `Yes`.

- DXF: le righe che non fanno parte di una coppia codice e valore vengono saltate finché le coppie tornano in ordine; una sezione senza fine viene chiusa; un file troncato viene letto fino al punto di taglio; un DXF binario troncato viene letto fino all'ultimo valore intero. Quando una sezione, un blocco o un oggetto non si possono ancora leggere, vengono lasciati fuori e indicati per nome, e la lettura prosegue oltre di essi.
- DWG: gli oggetti che non superano i loro controlli o non si possono decodificare vengono lasciati fuori, e un elenco di oggetti perso viene ricostruito percorrendo i dati degli oggetti.

Il file sul disco non viene cambiato. Il disegno recuperato si apre non salvato: salvarlo con un nuovo nome. Un file da cui non si può leggere proprio nulla viene rifiutato, con il motivo.

### LEGACYTEXT

Converte in Unicode il testo digitato con i vecchi font vietnamiti a 8 bit. Nomi brevi `TEXTTOUNICODE` e `VNTEXT`.

I disegni vietnamiti più vecchi conservano il loro testo come caratteri occidentali che solo il font trasforma in vietnamita: testo TCVN3 nei font ABC (`.VnTime`, `.VnArial`, e i font maiuscoli il cui nome finisce in `H`), e testo VNI nei font VNI (`VNI-Times`). CadCraft mostra tale testo come si legge non appena il disegno è aperto, in base al font del suo stile di testo, dell'oggetto, o di una porzione del testo a paragrafo; il file conserva ancora i vecchi caratteri.

{{cmd:LEGACYTEXT}} dice quanti testi ha trovato per ogni codifica e chiede `Convert … to Unicode?`. `Yes` riscrive ciascuno (modello, tavole, blocchi, valori e definizioni degli attributi) e assegna agli stili di testo un font Unicode (Times New Roman, Arial o Courier New, secondo il tipo del vecchio font), in un solo passo di annullamento. La formattazione dentro il testo a paragrafo viene mantenuta.

Quando nessun testo usa un font noto (uno stile che ha perso il nome del font), chiede `Read selected texts as [Tcvn3/Vni/None]`: si sceglie la codifica e si selezionano i testi. Il testo già in Unicode viene lasciato stare. Le sostituzioni di testo delle quote e il testo dei richiami multipli non vengono convertiti.
