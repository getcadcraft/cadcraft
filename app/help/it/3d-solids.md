---
title: Modellare in 3D
summary: Vedere il disegno in 3D nella scheda 3D e creare solidi semplici da esso: estrudere (con conicità o lungo un percorso), creare rivoluzioni, spingere e tirare le facce, parallelepipedi, cilindri e cunei, unire, sottrarre e intersecare i solidi, poi spostare, copiare, ruotare ed eliminare, e collocare su una tavola viste piane 2D di essi.
keywords: 3d, tre d, solido, solidi, 3dsolid, regione, corpo, acis, sat, sab, solidi da altri programmi, apri disegno 3D, extrude, ext, revolve, rev, sweep, conicità, percorso, presspull, spingi e tira, press pull, push pull, box, parallelepipedo, cylinder, cyl, cuneo, wedge, 3dorbit, orbita, vista, vscurrent, stile visivo, ombreggiato, linea nascosta, wireframe, raggi x, xray, iso, prospettiva, parallela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo di navigazione, union, uni, sottrai, su, interseca, in, booleana, combina, unisci solidi, viewbase, flatshot, vista piana, vista 2D, vista di disegno, vista frontale, vista dall'alto, vista laterale, linee nascoste
from: 13060e71
---

## Che cosa creerete

Un'impronta di stanza di 1000 × 600 estrusa in un blocco alto 400, una faccia sollevata e un cilindro accanto: poi il modello viene salvato con il disegno ed esportato per un visualizzatore 3D o una stampante.

La scheda {{ui:3D}} si trova accanto a {{ui:Modello}} sotto il disegno. Mostra il disegno dello spazio modello adagiato sul piano nei colori dei layer (i layer spenti o congelati restano nascosti) e i solidi che create. La prima volta che si apre, la vista 3D viene caricata; in seguito passa subito.

## Estrudere una forma

1. Nella scheda {{ui:Modello}}, digitare `REC` e premere Invio. Digitare `0,0`, Invio, `@1000,600`, Invio.
2. Fare clic sulla scheda {{ui:3D}}. La barra degli strumenti mostra il gruppo {{ui:3D}} al posto dei gruppi del disegno.
3. Fare clic su {{ui:Estrudi}} (oppure digitare {{cmd:EXTRUDE}}, `EXT`). Fare clic all'interno del rettangolo, poi premere Invio.
4. Digitare `400` e premere Invio. La cronologia riporta "Estruso 1 solido, altezza 400" con il suo volume.

Le polilinee chiuse (archi compresi), i rettangoli, i poligoni, i cerchi e le ellissi si estrudono; linee e polilinee aperte non si estrudono, e la cronologia ne indica il motivo. È anche possibile selezionare prima le forme nella scheda {{ui:Modello}} e digitare `EXTRUDE` lì. Invece di digitare l'altezza, è possibile indicarla con un clic: il contorno segue il cursore verso l'alto e verso il basso. Un'altezza negativa scende. Digitare `D` al prompt dell'altezza per eliminare le forme 2D dopo l'estrusione (`D` di nuovo le conserva).

Al prompt dell'altezza, `T` (Angolo di conicità) chiede un angolo in gradi: i lati si inclinano di quell'angolo, quindi la parte superiore risulta più piccola (un angolo negativo la rende più grande); un angolo troppo ripido per la forma viene rifiutato. `P` (Percorso) fa scorrere le forme lungo un percorso (vedere sotto).

## Rivoluzione e sweep

- {{cmd:REVOLVE}} (`REV`, oppure {{ui:Altro}} › {{ui:Rivoluzione attorno a un asse}}): selezionare le forme chiuse, premere Invio, poi fare clic sui due estremi dell'asse (oppure digitare `X` o `Y` per l'asse del disegno passante per 0,0), quindi digitare un angolo o premere Invio per un giro completo. La forma ruota attorno all'asse e si alza dal piano: disegnare metà del contorno di un vaso accanto a una linea, poi fare la rivoluzione attorno alla linea. La forma può toccare l'asse ma non attraversarlo. Un giro completo ha 48 passi.
- {{cmd:SWEEP}} (oppure {{ui:Altro}} › {{ui:Sweep lungo un percorso}}, oppure `P` al prompt dell'altezza di EXTRUDE): selezionare le forme chiuse (il profilo), premere Invio, poi fare clic sul percorso: una linea, una polilinea, un arco, un cerchio o un'ellisse. Il profilo si alza attraverso il percorso, con il suo centro su di esso, e scorre lungo di esso; gli angoli sono a ingletto, e un percorso chiuso crea un anello. Un piccolo rettangolo fatto scorrere lungo il contorno di una stanza crea uno zoccolino; un cerchio lungo una polilinea crea un tubo.

## Spingere e tirare una faccia

1. Fare clic su {{ui:Spinge o tira}} (oppure digitare {{cmd:PRESSPULL}}).
2. Fare clic sulla faccia superiore del blocco.
3. Digitare `100` e premere Invio, oppure spostare il cursore e fare clic. Il blocco risulta alto 500.

## Parallelepipedi, cilindri e cunei

- {{cmd:BOX}}: fare clic o digitare due angoli, poi un'altezza.
- {{cmd:CYLINDER}} (`CYL`): il centro, il raggio, poi un'altezza. I cilindri e i cerchi estrusi hanno 48 lati, con ombreggiatura liscia.
- {{cmd:WEDGE}} (`WE`): due angoli e un'altezza. Ha altezza piena nel primo angolo e scende a zero nell'altro.

Nella scheda 3D un clic cade sulla faccia o sullo spigolo sotto il cursore, altrimenti sul piano, così un parallelepipedo può poggiare su un altro solido.

## Spostare, copiare, ruotare ed eliminare solidi

Nella scheda 3D, un clic seleziona un solido; trascinare da sinistra a destra per una finestra, da destra a sinistra per un attraversamento. Poi:

- {{cmd:MOVE}}: fare clic su un punto base e su dove deve andare, oppure digitare `<100,0,0>` (o `@100,0`) per una distanza lungo X, Y e Z.
- {{cmd:COPY}}: come sopra, ma lasciando l'originale.
- {{cmd:ROTATE}}: digitare un angolo (ruota attorno al centro della selezione, attorno a Z), oppure fare clic sul centro, su un punto iniziale e indicare l'angolo.
- {{cmd:ERASE}} oppure {{key:Delete}}.

## Unire, sottrarre e intersecare solidi

Aprire {{ui:Altro}} nella barra degli strumenti 3D, oppure digitare il comando:

- {{cmd:UNION}} (`UNI`): selezionare i solidi, premere Invio: diventano un solo solido.
- {{cmd:SUBTRACT}} (`SU`): selezionare i solidi da mantenere e premere Invio, poi quelli da togliere e premere Invio. Un foro attraverso un blocco: disegnare un cilindro che lo attraversi, poi sottrarre il cilindro.
- {{cmd:INTERSECT}} (`IN`): selezionare i solidi, premere Invio: resta solo ciò che hanno tutti in comune.

La cronologia riporta il volume del risultato. Ogni operazione è un passo di annullamento. La prima che si esegue carica il motore booleano 3D (circa 0,5 MB; incluso in {{ui:Salva per l'uso offline}}). Possono essere combinati solo solidi chiusi: un solido con spigoli aperti (da facce 3D sciolte di un altro programma) viene rifiutato, con il motivo indicato. Il risultato è un solo solido; le facce curve restano composte da piccole facce piane, come lo era il cilindro.

Fare doppio clic su un solido per modificarne facce e spigoli separatamente; {{key:Esc}} lo chiude di nuovo. Ogni modifica 3D è un passo di annullamento nella stessa cronologia del disegno: {{key:Mod+Z}} annulla l'ultima operazione eseguita in una delle due schede.

## Viste piane su una tavola

1. Aprire una scheda tavola (oppure restare su {{ui:Modello}}), poi digitare {{cmd:VIEWBASE}} (oppure `FLATSHOT`).
2. Scegliere la vista: Invio per la vista frontale, oppure `T` (dall'alto), `R` (destra), `L` (sinistra), `BA` (posteriore), `BO` (inferiore), `I` (isometrica).
3. Invio mostra le linee nascoste, tratteggiate; `H` le esclude.
4. Invio adotta la scala suggerita da CadCraft: su una tavola, la scala standard più grande (ad esempio 1:20) con cui la vista entra in meno della metà del foglio. Oppure digitarne una: `1:50`, `2:1`.
5. Fare clic, o digitare, dove deve andare il centro della vista.

La vista è un unico riferimento a blocco, `VIEW-FRONT-1` e così via: gli spigoli visibili sul layer VIEW-VISIBLE (0,5 mm), quelli nascosti su VIEW-HIDDEN (tratteggiati, 0,25 mm). Spostarla, quotarla e stamparla come qualsiasi altro disegno. È un'immagine dei solidi nel momento in cui è stata creata: dopo averli modificati, eliminare la vista ed eseguire di nuovo {{cmd:VIEWBASE}}. Per altre viste, eseguirlo una volta per ogni vista.

## Guardarsi intorno

Trascinare con la rotellina per orbitare, {{key:Shift}} + trascinamento con la rotellina oppure con il pulsante destro per fare pan, e ruotare la rotellina per fare zoom sul cursore. Su un trackpad, due dita orbitano e un pizzico fa zoom. Un clic destro senza trascinamento equivale a Invio, come nelle altre schede. `3DORBIT` permette al pulsante sinistro di orbitare finché non si preme Invio o {{key:Esc}}.

- {{ui:Viste}} (oppure {{cmd:VIEW}}): Isometrica, Dall'alto, Dal basso, Frontale, Posteriore, Sinistra, Destra, Prospettiva o Parallela, e Zoom su tutto.
- {{ui:Stile}} (oppure {{cmd:VSCURRENT}}, `VS`): Ombreggiato, Ombreggiato con spigoli, Linea nascosta, Wireframe o Raggi X.

I punti su cui si fa clic si agganciano ai solidi (angoli, spigoli, facce) e al disegno 2D sul piano: gli estremi e i punti medi delle sue linee e dei suoi archi, e i punti lungo di essi. Le linee 2D non vengono mai selezionate nella scheda 3D. Quando un comando richiede oggetti 2D (EXTRUDE, REVOLVE, SWEEP), un clic ne sceglie uno, un trascinamento da sinistra a destra prende ciò che è interamente contenuto nella finestra, e un trascinamento da destra a sinistra prende ciò che viene attraversato, come nella scheda {{ui:Modello}}.

Un cubo di navigazione si trova in alto a destra della scheda 3D: fare clic su una faccia, uno spigolo o un angolo per guardare da lì, trascinarlo per orbitare, e il pulsante a forma di casa riporta alla vista isometrica. È l'impostazione {{ui:Automatica}}, l'inizio di {{ui:Indicatore d'angolo}} nelle [impostazioni di CadCraft](topic:settings). Se impostato su {{ui:Cubo di navigazione}}, la scheda {{ui:Modello}} mostra anche un cubo, che guarda dall'alto; fare clic su un altro lato apre la scheda 3D guardando da lì. Se impostato su {{ui:Icona degli assi}}, entrambe le schede mostrano invece il marcatore degli assi.

## Solidi da altri programmi

Un disegno proveniente da un altro programma può contenere solidi 3D, regioni e corpi (3DSOLID, REGION, BODY: l'altro programma ne conserva la forma come dati ACIS). CadCraft mostra quelli dello spazio modello nella scheda 3D, con il colore del loro layer e con i propri spigoli, la prima volta che si apre la scheda; la riga di comando indica poi quanti ne sono stati disegnati.

- Vengono mostrati così come sono: non è possibile selezionarli, spostarli o modificarli. I layer spenti o congelati li nascondono.
- Salvando come DWG, ciascuno viene riscritto invariato, in qualsiasi versione DWG, così l'altro programma li ritrova. I file DXF non li conservano: CadCraft li scrive solo nei DWG e lo segnala quando si salva come DXF.
- Disegnati: facce piane e facce di cilindri, coni, sfere, tori e semplici superfici spline, con spigoli diritti, arrotondati e spline. Una faccia su qualsiasi altro tipo di superficie, o una che CadCraft non riesce a disporre, non viene interpretata: viene omessa ed elencata, ad esempio "Non ancora disegnato (solidi 3D): 2 facce su superficie spline (sweepsur), una superficie non ancora disegnata."
- I solidi all'interno dei blocchi non vengono ancora mostrati; "Info su questo file" li conta.

Le facce curve vengono disegnate come piccoli pezzi piani, distanti circa 7,5°, quindi un solido curvo appare un po' sfaccettato da vicino.

## Salvare ed esportare

Il salvataggio conserva il modello 3D, sia in DWG sia in DXF. Ogni faccia viene inserita come faccia 3D sul layer `CC-3D`, così gli altri programmi mostrano i solidi, e CadCraft conserva nel file una propria copia esatta, che rilegge all'apertura del disegno, con la vista 3D come era (camera, proiezione e stile visivo). Le facce 3D create da altri programmi arrivano nella scheda 3D come facce sciolte, raggruppate come un unico gruppo. Una faccia 3D all'interno di un blocco arriva una volta per ogni riferimento a quel blocco nel modello, collocata e ruotata come il riferimento; nel blocco stesso e su una tavola, una faccia 3D viene disegnata piana, come il suo contorno.

{{ui:Esporta}} nel gruppo 3D scarica i soli solidi: GLB per visualizzatori e web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) o STL per la stampa 3D, in millimetri ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} chiede quale formato usare.

:::note
Il modello 3D è in scala reale. Un disegno senza unità viene considerato in millimetri, quindi `1000` equivale a un metro. Se successivamente si cambiano le unità del disegno (Proprietà, senza nulla selezionato), i solidi vengono scalati insieme ad esse, così restano sul disegno, e la cronologia lo segnala. Un {{key:Mod+Z}} annulla insieme il cambio di unità e la scalatura.
:::
