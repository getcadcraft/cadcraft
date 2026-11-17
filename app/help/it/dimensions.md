---
title: Quotare una pianta
summary: Aggiungere quote lineari, allineate, angolari, di raggio e di diametro, concatenarle con Continua e Base, e sostituire il testo.
keywords: quota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, catena, serie, annota, strumento di quotatura, dove, trova, barra degli strumenti, misura, mm, cm, m, km, unità
from: 9ee65123
---

## Cosa si realizza

Una stanza quotata: larghezza e altezza complessive, una serie di quote lungo una parete, una parete inclinata, un angolo arrotondato e un angolo.

Prima di iniziare, leggere [Impostare dimensioni, decimali e scala delle quote](topic:dimension-settings) se il disegno è grande: il testo delle quote è alto per impostazione predefinita 2.5 unità di disegno, cioè minuscolo in un disegno misurato in millimetri. Per i passi qui sotto, digitare `DIMSCALE`, premere {{key:Enter}}, digitare `50` e premere {{key:Enter}} prima di tutto.

## Dove sono gli strumenti di quotatura

Con lo stile di menu CadCraft (quello con cui CadCraft si avvia), gli strumenti di quota si trovano nella barra degli strumenti sopra il disegno, nel gruppo {{ui:Annotazioni}}: {{ui:Lineare}}, {{ui:Allineata}}, {{ui:Angolo}}, {{ui:Raggio}} e {{ui:Diametro}}. Il menu {{ui:Altro}} del gruppo contiene {{ui:Quota continua}} e {{ui:Quota di base}}. Tenere il puntatore su un pulsante per vedere cosa fa.

- Con lo stile di menu {{ui:Disegno classico}} o {{ui:Barra multifunzione}}, aprire la scheda {{ui:Annotazioni}}: gli strumenti sono nel suo pannello {{ui:Quote}}. {{ui:Disegno classico}} ha anche {{ui:Lineare}} nella scheda {{ui:Home}}, sotto {{ui:Annotazione}}. Vedi [Menu, tasti e mouse](topic:menus-keys-and-mouse).
- Oppure digitare il comando nella riga di comando sotto il disegno e premere {{key:Enter}}: `DLI` (lineare), `DAL` (allineata), `DAN` (angolare), `DRA` (raggio), `DDI` (diametro), `DCO` (continua), `DBA` (base).
- Su uno schermo stretto la barra degli strumenti è su una sola riga: scorrere di lato per raggiungere {{ui:Annotazioni}}.

Per mostrare le lunghezze in millimetri, centimetri, metri o chilometri, vedi [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Disegnare qualcosa da quotare

1. Digitare `PL` e premere {{key:Enter}}.
2. Digitare `0,0` e premere {{key:Enter}}.
3. Digitare `@6000,0` e premere {{key:Enter}}.
4. Digitare `@1500<60` e premere {{key:Enter}}.
5. Digitare `@0,2700` e premere {{key:Enter}}.
6. Digitare `@-6750,0` e premere {{key:Enter}}.
7. Digitare `C` e premere {{key:Enter}}. Il contorno si chiude.
8. Digitare `C` e premere {{key:Enter}} per avviare un cerchio.
9. Fare clic dentro la stanza, lontano dalle pareti, per il centro.
10. Digitare `600` e premere {{key:Enter}}. È un pilastro.
11. Fare clic su {{ui:Estensione}}.

## Lineare: orizzontale o verticale

1. Digitare `DLI` e premere {{key:Enter}}.
2. Al prompt `Specificare l'origine della prima linea di riferimento`, agganciare l'angolo in basso a sinistra (Punto finale) e fare clic.
3. Al prompt `Specificare l'origine della seconda linea di riferimento`, agganciare l'angolo in basso a destra e fare clic.
4. Spostare il mirino sotto la stanza. La quota lo segue, orizzontale.
5. Fare clic per posizionare la linea di quota.

La cronologia riporta `Testo della quota = 6000`.

Dove si posiziona la linea decide la direzione: sotto o sopra dà una quota orizzontale, a sinistra o a destra una verticale. Per forzarla, digitare `H` (orizzontale), `V` (verticale) o `R` (ruotata, poi un angolo) prima di posizionarla.

:::tip
Premere {{key:Enter}} al primo prompt invece di scegliere un punto, poi fare clic su una linea, un arco, un cerchio o un segmento di polilinea. CadCraft prende entrambe le estremità.
:::

## Continua: una serie di quote

{{cmd:DIMCONTINUE}} ({{ui:Annotazioni}} › {{ui:Altro}} › {{ui:Quota continua}}, oppure `DCO`) prosegue dall'ultima quota lineare o allineata creata: ogni nuova quota parte dal punto in cui è finita la precedente.

1. Digitare `DLI` e premere {{key:Enter}}.
2. Digitare `0,0` e premere {{key:Enter}} per la prima origine.
3. Digitare `2000,0` e premere {{key:Enter}} per la seconda origine.
4. Fare clic sotto la stanza per posizionarla.
5. Digitare `DCO` e premere {{key:Enter}}.
6. Digitare `4500,0` e premere {{key:Enter}}. Una seconda quota segue la prima, sulla stessa linea.
7. Agganciare l'angolo in basso a destra e fare clic. Una terza quota completa la serie.
8. Premere {{key:Enter}} per terminare il comando.

:::note
Qui i punti sono digitati come coordinate assolute di proposito. Un punto con `@` conta dall'ultimo punto dato, e l'ultimo punto è dove è stata posizionata la quota precedente, non la fine della quota. Punti assoluti, snap o una distanza diretta con {{ui:Ortho}} attivo sono più sicuri in una serie di quote.
:::

Digitare `U` e premere {{key:Enter}} per annullare l'ultima quota della serie senza uscire dal comando.

## Base: quote impilate da una linea

{{cmd:DIMBASELINE}} ({{ui:Annotazioni}} › {{ui:Altro}} › {{ui:Quota di base}}, oppure `DBA`) misura ogni nuova quota dalla prima origine dell'ultima, e impila ciascuna un passo più lontana.

1. Digitare `DLI` e premere {{key:Enter}}.
2. Agganciare l'angolo in basso a sinistra e fare clic.
3. Agganciare l'angolo in alto a sinistra e fare clic.
4. Spostare il mirino a sinistra della stanza e fare clic. Compare una quota verticale.
5. Digitare `DBA` e premere {{key:Enter}}.
6. Agganciare l'estremità superiore della parete a 60 gradi (Punto finale) e fare clic. Compare una seconda quota verticale, un passo più lontana della prima.
7. Premere {{key:Enter}} per terminare.

## Allineata: lunghezza reale di una linea inclinata

1. Digitare `DAL` e premere {{key:Enter}}.
2. Premere {{key:Enter}} per selezionare un oggetto.
3. Fare clic sulla parete a 60 gradi.
4. Spostarsi verso l'esterno e fare clic per posizionarla.

Il testo riporta 1500: la lunghezza reale, misurata lungo la parete.

## Raggio e diametro

1. Digitare `DRA` e premere {{key:Enter}}.
2. Fare clic sul cerchio del pilastro.
3. Spostare il mirino. La linea di richiamo punta dal centro verso il mirino.
4. Fare clic per posizionare il testo.

Il testo riporta `R600`. {{cmd:DIMDIAMETER}} (`DDI`) fa lo stesso con il segno ⌀ e il diametro.

## Angolare

Le pareti qui sono un'unica polilinea, quindi l'angolo si misura tramite il suo vertice. (Tra due linee separate si possono invece fare clic le linee.)

1. Digitare `DAN` e premere {{key:Enter}}.
2. Al prompt `Selezionare arco, cerchio o linea, oppure premere Invio per un vertice`, premere {{key:Enter}}.
3. Al prompt `Specificare il vertice dell'angolo`, agganciare l'angolo in basso a destra e fare clic.
4. Al prompt `Specificare la prima estremità dell'angolo`, agganciare l'angolo in basso a sinistra e fare clic.
5. Al prompt `Specificare la seconda estremità dell'angolo`, agganciare l'estremità superiore della parete a 60 gradi e fare clic.
6. Spostare il mirino dentro la stanza, vicino all'angolo, e fare clic.

Il testo riporta `120°`, l'angolo interno del vertice. Posizionata dall'altra parte del vertice, la quota misura invece l'angolo da quel lato. Fare clic su un arco al primo prompt per quotare l'angolo che abbraccia, oppure su due linee per quotare l'angolo tra di esse.

## Cambiare il testo

Per scrivere un testo proprio, digitare `T` e premere {{key:Enter}} prima di posizionare la quota, poi digitare il testo. Nel testo scritto, `<>` rappresenta il valore misurato: `<> TYP.` dà `6000 TYP.`. Premere {{key:Enter}} su una riga vuota per mantenere il valore misurato.

Per modificare una quota esistente:

1. Fare clic su di essa.
2. Nel pannello destro, digitare in {{ui:Testo}}. Lasciare vuoto per il valore misurato.
3. Premere {{key:Enter}}.

## Le quote seguono la geometria

Una quota ricorda i suoi punti. Trascinare uno dei suoi grip, oppure spostare, ruotare o scalare la quota insieme agli oggetti che misura, e la quota torna a misurare. Se si stira la geometria senza spostare la quota, la quota non la segue: mantiene i propri punti.

## Errori comuni

- **Il testo e le frecce sono microscopici o enormi.** Impostare la scala complessiva: vedi [Impostare dimensioni, decimali e scala delle quote](topic:dimension-settings).
- **"Scegliere un punto all'interno dell'angolo da misurare."** Il punto su cui si è fatto clic per una quota angolare sta su uno dei lati. Spostarlo dentro l'angolo.
- **La serie Continua è partita dalla quota sbagliata.** Continua parte sempre dall'ultima quota lineare o allineata creata in questa sessione. Creare (o ricreare) prima quella da cui continuare.
- **La quota è venuta verticale.** È stata posizionata di lato. Digitare `H` prima di posizionarla.
- **Piedi e pollici.** Impostare prima il formato delle lunghezze del disegno su {{ui:Architettura}}, oppure il {{ui:Formato}} di una quota in {{ui:Proprietà}}: vedi [Piedi e pollici nelle quote](topic:dimension-settings#feet-and-inches-in-dimensions).
- **I numeri non sono nell'unità voluta.** Scegliere {{ui:Unità nel testo}}: vedi [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
