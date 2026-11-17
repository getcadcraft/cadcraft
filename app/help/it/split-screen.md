---
title: Dividere lo schermo
summary: Mostrare il disegno in due, tre o quattro riquadri, ciascuno con il proprio zoom, affiancare un foglio al modello e aprire più disegni uno accanto all'altro.
keywords: dividi, dividi schermo, riquadri, vports, viewport, affiancato, sovrapposto, due disegni, schede, schede del documento, confronta, divisore, modello e foglio, più disegni, disegni aperti
from: ee2f034b
---

## Che cosa si impara

Come osservare un disegno in più riquadri contemporaneamente, ciascuno con il proprio zoom, e come aprire più disegni e vederli affiancati.

## Dividere un disegno in riquadri

1. Aprire un disegno, oppure disegnare alcune linee e cerchi.
2. Aprire {{ui:Vista}} › {{ui:Altro}} e scegliere {{ui:Dividi affiancati}} (oppure digitare {{cmd:VPORTS}}, poi `2`, poi {{key:Enter}}).

L'area del disegno si divide in due riquadri, che mostrano la stessa vista. Il riquadro attivo ha una cornice blu e riceve il mirino.

3. Fare clic nell'altro riquadro. Diventa attivo. (Quel primo clic serve solo a cambiare riquadro; fare clic di nuovo per scegliere.)
4. Ingrandire con la rotellina. Si ingrandisce solo quel riquadro.
5. Trascinare la linea tra i riquadri per allargarne uno. {{key:Home}} su un divisore selezionato lo riporta al centro.

{{cmd:VPORTS}} accetta anche `3` (due riquadri su un lato e uno grande sull'altro: `L` o `R`), `4`, e `SI` per tornare a un solo riquadro. La vista del riquadro attivo riempie allora l'area. Su un foglio, {{cmd:VPORTS}} aggiunge invece una viewport al foglio (come in AutoCAD); digitare {{cmd:SPLIT}} lì, oppure usare il menu Vista.

## Disegnare da un riquadro in un altro

1. Dividere affiancati, e ingrandire ogni riquadro su un angolo diverso del disegno.
2. Digitare `L` e premere {{key:Enter}}, poi fare clic sul primo punto nel riquadro di sinistra.
3. Fare clic una volta nel riquadro di destra per renderlo attivo, poi fare clic lì sul secondo punto.

La linea corre tra i due punti. Un comando prosegue mentre si cambia riquadro, e l'elastico appare in ogni riquadro.

## Il modello accanto a un foglio

1. Dividere affiancati.
2. Fare clic sul riquadro di destra, poi fare clic sulla scheda di un foglio sotto il disegno.

Il riquadro di destra mostra il foglio; quello di sinistra mostra ancora il modello. Ogni riquadro mantiene il proprio spazio, quindi si può disegnare sul modello e vedere la viewport del foglio seguire le modifiche.

## Più disegni in una finestra

1. Aprire un disegno. Poi aprirne un altro (oppure premere {{ui:Nuova}}).

Ogni disegno si apre nella propria scheda sopra l'area del disegno. Fare clic su una scheda per passare da un disegno all'altro; la riga di comando, i pannelli e l'annulla seguono il disegno a cui si passa. {{key:Mod+C}} in un disegno e {{key:Mod+V}} in un altro copiano gli oggetti tra i due.

2. Fare clic su {{ui:Affianca i disegni aperti}} (l'icona di divisione alla fine delle schede), oppure sull'icona sovrapposta accanto ad essa.

Ogni riquadro mostra ora uno dei disegni aperti, fino a quattro. Fare clic su un riquadro per lavorare su quel disegno.

3. Fare clic su {{ui:×}} su una scheda per chiudere quel disegno. Se ha modifiche non salvate, CadCraft lo chiede prima.

:::tip
Aprire un disegno mentre la finestra contiene solo un disegno nuovo e intatto usa quella scheda invece di aggiungerne una.
:::

## Spostare e ingrandire insieme

Per confrontare due revisioni, affiancarle, poi fare clic su {{ui:Collega le viste dei riquadri}} (l'icona a catena alla fine delle schede), oppure sceglierla in {{ui:Vista}} › {{ui:Altro}}, oppure digitare {{cmd:LINKVIEWS}} e `ON`. Ora uno spostamento (pan) o uno zoom in un riquadro porta ogni riquadro che mostra il modello (o ogni riquadro che mostra un foglio) nello stesso punto, così i due disegni restano allineati. {{cmd:LINKVIEWS}} `OFF` lascia di nuovo che ogni riquadro si muova da solo.

## Errori comuni

- **Il clic non ha fatto nulla.** Ha reso attivo quel riquadro. Fare clic di nuovo per scegliere o disegnare.
- **La rotellina ha ingrandito il riquadro sbagliato.** La rotellina ingrandisce il riquadro sotto il puntatore e lo rende attivo.
- **I riquadri sono tornati a uno.** Aprire un disegno lo mostra come era stato salvato; un disegno salvato senza riquadri si apre in uno solo.
- **Lasciare la pagina avvisa di modifiche non salvate che non si vedono.** Un'altra scheda contiene un disegno con modifiche. Passare a quella e salvare, oppure uscire senza salvare.
