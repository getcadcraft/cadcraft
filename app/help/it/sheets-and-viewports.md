---
title: Impostare una tavola con cartiglio e viewport
summary: Creare una tavola (layout) con riquadro e cartiglio, impostare la scala del viewport, aggiungere un secondo viewport per un dettaglio e compilare il cartiglio.
keywords: layout, tavola, spazio carta, viewport, mview, vpview, cartiglio, scala, formato carta, riquadro, vports, scala di stampa, mspace, pspace, spazio modello, entrare nel viewport, doppio clic sul viewport
from: 45a45de8
---

## Cosa si realizza

Una tavola A3 con cartiglio, l'intera pianta in un viewport a 1:100, e un secondo viewport che mostra un angolo a 1:20.

## Modello e tavole

Si disegna l'edificio sulla scheda {{ui:Modello}}, a grandezza reale: un muro di 6 m è lungo 6000 unità in millimetri. Una **tavola** (layout) è un foglio di carta, misurato in millimetri o in pollici. Un **viewport** è una finestra ritagliata nella tavola che mostra il modello a una scala.

## Prima di iniziare

1. Aprire o disegnare una pianta sulla scheda {{ui:Modello}}.
2. Premere {{key:Esc}} in modo che non sia selezionato nulla.
3. In {{ui:Impostazioni correnti}}, impostare {{ui:Unità}} sull'unità con cui si è disegnato, per esempio {{ui:Millimetri}}.

Le unità contano: una scala di viewport come 1:100 significa che un millimetro sulla carta mostra 100 millimetri reali, quindi CadCraft deve sapere quanto vale un'unità di disegno. Un disegno lasciato come {{ui:Senza unità}} è inteso nell'unità della carta (millimetri su carta ISO, pollici su carta US).

## Creare la tavola

1. Fare clic sul pulsante {{ui:+}} a destra delle schede sotto il disegno, oppure digitare `LAYOUT` e premere {{key:Enter}}, oppure fare clic su {{ui:Nuova tavola}}.

Si apre una nuova scheda, `Layout1`. Si vede una tavola su uno sfondo più scuro: un riquadro, un cartiglio nell'angolo in basso a destra e un viewport sopra di esso che mostra l'intero modello alla scala standard più grande che ci sta. La cronologia indica il formato carta: ISO A3 per disegni metrici e senza unità, Tabloid (ANSI B) per disegni in pollici o piedi.

2. Fare clic su {{ui:Estensione}} per adattare la tavola allo schermo.

## Scegliere la carta

1. Premere {{key:Esc}} in modo che non sia selezionato nulla. L'intestazione del pannello di destra riporta "Tavola: Layout1".
2. In {{ui:Nome}}, digitare `A-101 Plan` e premere {{key:Enter}}. La scheda viene rinominata.
3. In {{ui:Carta}}, scegliere un formato.
4. In {{ui:Orientamento}}, scegliere {{ui:Orizzontale}} o {{ui:Verticale}}.

:::warning
Cambiare la carta non sposta né ridimensiona ciò che è già sulla tavola. Dopo averla cambiata, verificare che riquadro, cartiglio e viewport stiano ancora, e spostarli o ridimensionarli con i grip. Passare da carta in millimetri a carta in pollici mantiene i numeri, quindi tutto cambia dimensione: la barra di stato avvisa.
:::

## Impostare la scala del viewport

1. Fare clic sul bordo del viewport (la sua cornice). L'intestazione del pannello riporta "Viewport".
2. In {{ui:Scala}}, scegliere `1:100`.

Il modello dentro il viewport viene ridisegnato a 1:100, centrato dove si trovava. L'elenco offre scale metriche da 10:1 a 1:10000; i disegni in pollici o piedi ricevono anche scale architettoniche (1/4" = 1'-0" e simili) e scale ingegneristiche (1" = 20' e simili). {{ui:Adatta l'intero modello}} imposta una scala esatta e non standard che contiene tutto.

3. Se la pianta non è più centrata, cambiare {{ui:X}} e {{ui:Y}} sotto {{ui:Centro vista (modello)}} nel pannello di destra: sono il punto del modello mostrato al centro del viewport.

## Mostrare una parte del modello in un viewport

1. Con il viewport selezionato, fare clic su {{ui:Scegliere una finestra sul modello…}} nel pannello di destra (oppure digitare `VPVIEW` e premere {{key:Enter}}).
2. CadCraft passa alla scheda {{ui:Modello}}. Fare clic su un angolo dell'area da mostrare.
3. Fare clic sull'angolo opposto.

Si torna sulla tavola, e il viewport mostra quell'area alla scala standard più grande che ci sta; la cronologia indica quale. {{ui:Mostra l'intero modello}} riporta alla pianta intera a una scala standard.

## Aggiungere un secondo viewport per un dettaglio

1. Fare spazio sulla tavola: selezionare il primo viewport e trascinare un grip d'angolo per rimpicciolirlo.
2. Digitare `MV` e premere {{key:Enter}}, oppure fare clic su {{ui:Viewport}} nel gruppo Tavole.
3. Fare clic su un angolo del nuovo viewport sulla tavola.
4. Fare clic sull'angolo opposto.

Il nuovo viewport mostra l'intero modello. La cronologia indica la sua scala.

5. Fare clic sulla cornice del nuovo viewport.
6. Fare clic su {{ui:Scegliere una finestra sul modello…}} e scegliere una piccola area intorno a un angolo della pianta.
7. In {{ui:Scala}}, scegliere `1:20`.

Le cornici dei viewport sono sul layer `Viewports`, impostato per non essere stampato, quindi le cornici si vedono sullo schermo ma non nel PDF.

## Compilare il cartiglio

Il cartiglio è fatto di linee e testo normali sul layer `Title block`. Parte con il nome del disegno, la scala del primo viewport, la data di oggi e il numero della tavola.

1. Fare doppio clic sul grande testo del titolo. Si apre una casella di modifica sopra di esso.
2. Digitare il titolo della tavola.
3. Fare clic su {{ui:OK}}, oppure premere {{key:Mod+Enter}}.

Fare lo stesso per gli altri campi. Usare {{cmd:TEXT}} per scrivere nella cella vuota "DRAWN BY". Il testo SCALE non si aggiorna da solo quando si cambia la scala di un viewport: modificarlo a mano.

## Disegnare sulla tavola

Tutto ciò che si disegna su una scheda tavola sta sulla carta, in unità di carta: il testo alto 3.5 è alto 3.5 mm su una tavola ISO. Note, frecce del nord e riquadri di tavola appartengono qui.

Per modificare la pianta, andare alla scheda {{ui:Modello}}, oppure lavorare attraverso un viewport (sezione successiva); ogni viewport mostra la modifica.

## Lavorare sul modello attraverso un viewport

1. Fare doppio clic dentro un viewport, lontano dalla sua cornice. Oppure digitare `MS` e premere {{key:Enter}}: con un solo viewport sulla tavola entra direttamente; con più viewport, fare clic dentro quello desiderato.

La cornice viene disegnata più spessa, la cronologia indica che si è dentro, e la scheda tavola resta selezionata. Tutto ciò che si disegna o modifica ora sta sul modello, in unità del modello, come nella scheda {{ui:Modello}}: una linea disegnata dentro un viewport a 1:100 è in millimetri reali. I layer congelati in questo viewport non possono essere selezionati qui.

2. Girare la rotella o trascinare con il pulsante centrale per zoomare e spostare ciò che mostra il viewport. La tavola resta dov'è.
3. Fare doppio clic in qualsiasi punto fuori dalla cornice, oppure digitare `PS` e premere {{key:Enter}}.

Si torna sulla tavola. Il viewport conserva la vista in cui lo si era lasciato; {{key:Mod+Z}} riporta in un solo passo la vista precedente. Fare clic su una qualsiasi scheda sotto il disegno fa uscire anche dal viewport.

:::note
Un viewport la cui visualizzazione è bloccata ({{ui:Visualizzazione bloccata}} in {{ui:Proprietà}}) mantiene la sua vista: dentro di esso, zoom e spostamento muovono l'intera tavola. Un viewport spento non può essere aperto.
:::

## Etichettare una vista con il suo nome

Un titolo di vista sotto un viewport può mostrare il nome della vista del viewport e seguirlo:

1. Dare un nome alla vista: selezionare la cornice del viewport e compilare {{ui:Nome vista}} in {{ui:Proprietà}}, oppure salvare la vista sulla scheda {{ui:Modello}} con {{cmd:NAMEDVIEW}} e, con il viewport selezionato, digitare `VPVIEW`, `V` e il nome della vista: il viewport mostra quella vista e ne prende il nome.
2. Digitare `VIEWLABEL` (`VL`) e premere {{key:Enter}}, poi fare clic dove va l'etichetta ({{key:Enter}} la mette sotto l'angolo in basso a sinistra del viewport).

Quando il nome della vista cambia, l'etichetta cambia con esso, nello stesso passo di annullamento.

## Congelare un layer in un solo viewport

Per nascondere un layer in un solo viewport ma non negli altri (per esempio l'arredo in un dettaglio):

1. Selezionare la cornice del viewport, oppure lavorare dentro di esso (doppio clic).

Il pannello {{ui:Layer}} ottiene un pulsante in più su ogni riga, e una riga sopra l'elenco lo segnala.

2. Fare clic su quel pulsante nella riga del layer.

Il layer scompare solo da quel viewport. Fare di nuovo clic per scongelarlo; {{key:Mod+Z}} annulla l'una o l'altra cosa. Per più layer o viewport insieme, digitare `VPLAYER`: `F` (Congela) o `T` (Scongela), i nomi dei layer (`A-*` prende ogni layer che inizia con A-), poi `C` (Corrente), `A` (Tutti) o `S` (Seleziona). `VPLAYER` `V` (Vpvisdflt) sceglie i layer con cui i nuovi viewport partono congelati.

## Altre tavole

Ogni {{ui:+}} aggiunge un'altra tavola (`Layout2`, `Layout3` …) con il numero successivo. Per eliminare la tavola aperta, premere {{key:Esc}} e fare clic su {{ui:Elimina questa tavola}} nel pannello di destra. Viene eliminata senza chiedere conferma; {{key:Mod+Z}} la riporta.

Stampare una tavola con {{ui:Stampa questa tavola}} oppure con {{key:Mod+P}}; vedere [Stampa in PDF](topic:plot-pdf).

## Errori comuni

- **Il viewport non mostra nulla.** Il modello è vuoto, oppure la vista è puntata altrove. Selezionare la cornice e fare clic su {{ui:Mostra l'intero modello}}.
- **L'elenco delle scale mostra solo rapporti e nessuna scala in piedi e pollici.** Impostare {{ui:Unità}} su {{ui:Pollici}} o {{ui:Piedi}} nella scheda {{ui:Modello}}.
- **1:100 sembra dieci volte troppo grande o troppo piccolo.** Le unità di disegno sono sbagliate. Impostare {{ui:Unità}} su ciò che vale davvero un'unità.
- **Fare clic sulla pianta dentro il viewport non seleziona nulla.** Su una tavola si selezionano gli oggetti della tavola stessa. Fare prima doppio clic dentro il viewport per lavorare sulla pianta attraverso di esso.
- **I clic fuori dal viewport non fanno nulla.** Si è dentro un viewport: fare doppio clic fuori da esso, oppure digitare `PS`, per lavorare di nuovo sulla tavola.
- **"I viewport vanno in un layout. Aprire prima una scheda layout (oppure crearne una con LAYOUT)."** {{cmd:MVIEW}} funziona solo su una scheda tavola.
