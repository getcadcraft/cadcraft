---
title: Immagini in un disegno
summary: Inserire un'immagine PNG o JPEG, ritagliarla a un rettangolo o a un poligono, mostrare le immagini usate da un DWG e stamparle nitide.
keywords: pastearea, parea, copia area, area copiata, markupcraft, dimensione reale, dimensione vera, sovrapposizione, ole, ole2frame, oggetto incorporato, incolla immagine, incolla screenshot, ctrl+v, immagine negli appunti, screenshot, immagine, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, stampa, pdf, risoluzione
from: 4025ac97
---

## Cosa si realizza

Un logo aziendale collocato in un cartiglio, ritagliato alla parte desiderata, e un PDF in cui viene stampato alla sua risoluzione.

## Inserire un'immagine

1. Digitare {{cmd:IMAGEATTACH}} (oppure `IAT`) e premere {{key:Enter}}. Scegliere un file PNG o JPEG.
2. `Specificare l'angolo in basso a sinistra`: fare clic, oppure digitare un punto.
3. `Specificare la larghezza`: la larghezza in unità di disegno. {{key:Enter}} mantiene la larghezza proposta: un'unità per pixel, oppure la larghezza che si è data a questo file l'ultima volta (il prompt lo indica).
4. `Specificare l'angolo di rotazione`: {{key:Enter}} per nessuna rotazione.

L'immagine è un unico oggetto: si seleziona dal suo riquadro, e si può spostare, copiare, ruotare, scalare o cancellare come un blocco qualsiasi.

:::note
Il file dell'immagine resta con il disegno finché il disegno è aperto. Un DWG salvato indica il nome del file, come fanno gli altri programmi; non contiene i pixel. Tenere l'immagine accanto al disegno.
:::

## Incollare uno screenshot o un'immagine copiata

1. Copiare l'immagine (uno screenshot con {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=lo strumento di cattura dello schermo}},
   oppure Copia immagine in un altro programma o in un browser).
2. Puntare il punto dove deve andare sul disegno e premere {{key:Mod+V}}.

L'angolo in basso a sinistra dell'immagine va al puntatore (o al centro della vista) ed è larga il 40 % di ciò che si vede; spostarla, scalarla e ritagliarla come qualsiasi immagine. Il nome è quello del disegno con `-picture-1.png` (poi `-2`, …), e la cronologia lo riporta. {{ui:Modifica}} › {{ui:Altro}} › {{ui:Incolla un'immagine}} fa lo stesso dal menu (il browser può chiedere prima).

Un DWG conserva solo il nome del file di un'immagine, quindi salvando il disegno si salva anche l'immagine come file proprio. Tenere i due nella stessa cartella: il disegno mostra l'immagine da lì. Nel browser è un secondo download, e la cronologia lo segnala. Se negli appunti ci sono solo oggetti di CadCraft, {{key:Mod+V}} incolla quelli, come prima.

## Incollare un'area copiata in MarkupCraft

{{ui:Copia area}} in MarkupCraft copia una parte di una tavola come immagine che sa quanto è grande. CadCraft la incolla a quella dimensione.

1. In MarkupCraft, copiare l'area (un rettangolo, un cerchio o una forma libera; {{ui:Copia come sovrapposizione}} se si vuole vedere il proprio disegno attraverso di essa).
2. In CadCraft, premere {{key:Mod+V}}, oppure digitare {{cmd:PASTEAREA}} (oppure `PAREA`), o scegliere {{ui:Modifica}} › {{ui:Altro}} › {{ui:Incolla area copiata}}.
3. `Specificare l'angolo in basso a sinistra dell'area copiata`: fare clic, oppure digitare un punto. Un riquadro della dimensione dell'area segue il puntatore.

Quanto è grande quando viene incollata:

- **La tavola aveva una scala di disegno:** in dimensione reale, nelle unità del disegno (un dettaglio 1:50 di una scala di 2 m è lungo 2 m in un disegno in metri, 78.74 in un disegno in pollici). Non viene chiesto altro.
- **La tavola non aveva scala:** CadCraft dice quanto è grande su carta e chiede una scala: digitare `100` per una tavola 1:100, premere {{key:Enter}} per la dimensione su carta, oppure digitare `P`, fare clic su due punti dell'immagine incollata e digitare quanto sono distanti in realtà (come fa {{cmd:SCANSCALE}}). L'angolo in basso a sinistra resta dove lo si è messo.

Un disegno senza unità prende i millimetri, come fa un sottofondo PDF. Una sovrapposizione mantiene la carta trasparente e inizia sbiadita quanto era quando è stata copiata; anche l'esterno di un cerchio o di una forma libera è trasparente. L'area incollata è un'immagine come le altre: si può spostare, ruotare, scalare, ritagliare o cancellare, e l'intero incollamento è un solo passo di annullamento. Salvata come DWG, è un IMAGE con la sua dissolvenza e trasparenza.

{{key:Mod+V}} incolla l'area quando l'immagine negli appunti è quella dell'area, oppure quando l'area è stata copiata dopo qualsiasi cosa copiata in CadCraft (e nelle ultime 6 ore). Altrimenti incolla come prima. {{cmd:PASTEAREA}} incolla in qualsiasi momento l'ultima area copiata.

## Mostrare le immagini usate da un DWG

Un DWG memorizza solo dove si trovavano le sue immagini, quindi CadCraft mostra ciascuna come un riquadro con il nome del file.

1. Digitare {{cmd:IMAGE}} (oppure `IM`). La riga di comando elenca ogni file immagine e se viene mostrato.
2. Scegliere i file (più di uno alla volta). Vale anche un file il cui nome contiene quello indicato dal disegno, perché le esportazioni spesso aggiungono un prefisso di progetto.

## Ritagliare un'immagine

1. Digitare {{cmd:IMAGECLIP}} (oppure `ICL`) e selezionare l'immagine.
2. Scegliere `R` e fare clic su due angoli, oppure `P` e fare clic sui punti di un poligono, poi {{key:Enter}}. `D` rimuove il ritaglio.

## Stampare le immagini

Le immagini entrano nel PDF come immagini, alla loro risoluzione e sotto le linee. Nella finestra {{ui:Stampa}}, {{ui:Immagini}} può limitarle a 600, 300 o 150 dpi per rendere il file più piccolo. Un JPEG entra così com'è.

## Cosa viene salvato dove

| Formato | Immagini |
|---|---|
| DWG (ogni versione) | Come immagini (IMAGE), con il loro ritaglio |
| DXF | Come i loro riquadri con il nome del file; il salvataggio lo segnala |

## Oggetti di altri programmi (OLE)

Un disegno può contenere oggetti creati da un altro programma, come un'immagine di un programma di pittura o un intervallo di un foglio di calcolo (oggetti OLE). CadCraft non li esegue né li modifica, e non può inserirne di nuovi. Ciò che fa:

- **In un DXF**, un oggetto OLE si apre come riquadro. Se l'oggetto ha salvato un'immagine di se stesso e tale immagine è una bitmap, l'immagine viene disegnata dentro il riquadro; altrimenti il riquadro porta un'etichetta con il tipo dell'oggetto, come "Microsoft Excel Worksheet (OLE)". Si possono spostare, copiare e cancellare il riquadro come un blocco. {{cmd:SAVEAS}} in DXF 2000 lo scrive di nuovo come oggetto OLE, con i suoi dati invariati.
- **In un DWG**, gli oggetti vengono conservati e riscritti quando si salva come DWG, byte per byte, ma **non vengono mostrati**: un DWG conserva la posizione di un oggetto all'interno dei propri dati, e CadCraft non la legge ancora. La cronologia indica quanti sono stati conservati. Digitare {{cmd:OLELIST}} per vedere di cosa si tratta (tipo, dimensione, se ciascuno ha salvato un'immagine) e per mettere una copia di un'immagine dove si preferisce: **Posiziona** chiede il numero, l'angolo in basso a sinistra e la larghezza, e disegna un riquadro con l'immagine dentro. Quella copia è un riquadro che si può spostare o cancellare; l'oggetto originale resta nel disegno ed è sempre riscritto quando si salva.
- Un oggetto proveniente da un DXF viene salvato in un DWG solo come riquadro ed etichetta; la cronologia lo segnala. Salvare come DXF 2000 per conservare l'oggetto stesso.
- Le immagini che sono metafile (ciò che salvano molti programmi) non vengono disegnate: al loro posto compaiono riquadro ed etichetta.

## Errori comuni

| Si vede | Perché | Soluzione |
|---|---|---|
| Un riquadro con un nome di file | CadCraft non ha il file | {{cmd:IMAGE}}, poi scegliere il file |
| "Questo non è un'immagine" | L'oggetto selezionato non è un'immagine | Selezionare il riquadro dell'immagine |
