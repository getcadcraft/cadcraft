---
title: Copia, incolla e duplica
summary: Copiare oggetti negli Appunti di CadCraft, incollarli dove si fa clic o nella stessa posizione, duplicarli con il puntatore e portare il lavoro da un altro disegno o da un'altra scheda.
keywords: copia, taglia, incolla, incolla nella stessa posizione, duplica, Appunti, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, tra disegni, un'altra scheda, punto base
from: 4b9f29d3
---

## Obiettivi

Come copiare oggetti negli Appunti e incollarli dove si fa clic, incollarli nelle loro coordinate originali, duplicarli con il puntatore, tagliarli e portarli in un altro disegno. Tutto questo è anche nel gruppo {{ui:Modifica}} della barra degli strumenti: {{ui:Copia}}, {{ui:Incolla}} e il menu {{ui:Altro}}.

## Copiare e incollare dove si fa clic

1. Selezionare gli oggetti: fare clic su di essi, oppure trascinare una finestra.
2. Premere {{key:Mod+C}}, oppure fare clic su {{ui:Copia}} nel gruppo {{ui:Modifica}}. La riga di comando dice quanti oggetti sono stati copiati. Restano selezionati.
3. Premere {{key:Mod+V}}, oppure fare clic su {{ui:Incolla}}. La copia compare sul cursore, appesa all'angolo in basso a sinistra degli oggetti copiati.
4. Fare clic dove deve andare quell'angolo, oppure digitare un punto come `2000,500` e premere {{key:Enter}}. Gli snap a oggetto e Ortho funzionano come al solito.

Gli oggetti incollati restano selezionati, così possono essere spostati o modificati subito. Un {{key:Mod+Z}} annulla l'intera operazione di incolla.

:::tip
Per appendere la copia a un punto scelto, ad esempio l'angolo di un muro, digitare `COPYBASE`, fare clic sul punto base, selezionare gli oggetti e premere {{key:Enter}}. Incollando, quel punto viene posizionato dove si fa clic. Per appendere ogni copia dal suo centro invece che dall'angolo in basso a sinistra, cambiare {{ui:Punto di incollaggio}} nelle [impostazioni di CadCraft](topic:settings).
:::

## Incolla nella stessa posizione

Premere {{key:Mod+Shift+V}}, oppure scegliere {{ui:Incolla nella stessa posizione}} nel menu {{ui:Altro}}. La copia viene inserita esattamente nelle coordinate da cui è stata copiata, senza clic. Usarlo per portare oggetti in un altro disegno nello stesso punto, oppure da una tavola in un'altra tavola.

## Duplica e sposta

1. Selezionare gli oggetti.
2. Premere {{key:Mod+D}}, oppure scegliere {{ui:Duplica e sposta}} nel menu {{ui:Altro}}.
3. Una copia si posiziona sopra l'originale e si muove con il puntatore. Fare clic dove deve andare. Si può anche digitare uno spostamento come `@0,-600`, oppure una distanza verso il cursore.

Premere {{key:Esc}} prima del clic non lascia nulla. Il duplicato è un unico passo di annullamento e non tocca gli Appunti.

## Taglia

Premere {{key:Mod+X}}, oppure scegliere {{ui:Taglia}} nel menu {{ui:Altro}}. Gli oggetti vanno negli Appunti e vengono cancellati dal disegno, in un unico passo di annullamento. Per riincollarli, usare {{key:Mod+V}} o {{key:Mod+Shift+V}}.

## Tra disegni e schede

Gli Appunti conservano la copia quando si apre un altro disegno, ed è condivisa da tutte le schede di CadCraft in questo browser. Copiare in una scheda, poi premere {{key:Mod+V}} in un'altra.

- I blocchi usati dagli oggetti arrivano con loro. Se il disegno in cui si incolla ha già un blocco con lo stesso nome, viene usata la sua definizione, come fa AutoCAD.
- I layer usati dagli oggetti vengono aggiunti, con colore e impostazioni che avevano.
- La copia non viene riscalata quando i due disegni usano unità diverse: CadCraft lo segnala, e dopo è possibile usare {{cmd:SCALE}}.
- Le viewport restano sulla loro tavola; vengono escluse da una copia.

:::note
Gli Appunti sono quelli di CadCraft. Non è possibile incollare oggetti di CadCraft in un altro programma, né incollare da un altro programma in CadCraft: salvare come DWG o DXF. Una copia molto grande può essere troppo grande per essere condivisa tra schede; la riga di comando dice allora che solo questa scheda può incollarla.
:::

## Errori comuni

- **{{key:Mod+V}} ha incollato testo nella riga di comando.** Era stato digitato qualcosa lì, quindi i tasti agivano sul testo. Premere {{key:Esc}} per cancellarlo, poi premere di nuovo {{key:Mod+V}}.
- **Non è successo nulla, e la barra di stato dice di terminare il comando corrente.** È in esecuzione un altro comando. Premere prima {{key:Esc}}.
- **L'incolla è finito lontano.** Viene appeso all'angolo in basso a sinistra di ciò che è stato copiato, che potrebbe essere un oggetto lontano selezionato per sbaglio. Usare {{ui:Incolla nella stessa posizione}}, oppure copiare con `COPYBASE`.
- **"Nulla incollato" con un motivo.** Ciò che un'altra scheda ha lasciato negli Appunti non può essere letto (era danneggiato, o modificato a mano). Copiare di nuovo gli oggetti.

Vedi l'elenco completo dei tasti in [Tastiera e mouse](topic:keyboard), e ogni prompt nel [Riferimento dei comandi](topic:commands#clipboard).
