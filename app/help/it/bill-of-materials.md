---
title: Distinte dei materiali per zona
summary: Contrassegnare aree del disegno come zone e collocare per ciascuna una tabella che conta i blocchi al suo interno. Le tabelle seguono il disegno mentre si lavora, e si sceglie quali colonne mostra ciascuna.
keywords: distinta dei materiali, DM, elenco parti, abaco, zona, area, tabella, conteggio, quantità, attributo, colonne, numero di voce, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Una **zona** è un'area con nome del disegno. Una **tabella di distinta dei materiali** elenca ciò che si trova all'interno di una zona, oppure nell'intero disegno: ogni blocco con la sua quantità e i valori dei suoi attributi. Un disegno può avere tante zone e tabelle quante servono, e una zona può avere più tabelle con colonne diverse.

Gli strumenti si trovano nella scheda Blocchi sotto {{ui:Distinta base}}, nel menu Altro del gruppo Blocchi, e possono essere digitati.

## Creare una zona

Digitare {{cmd:BOMZONE}} e scegliere uno dei seguenti modi:

- fare clic su due angoli opposti per un rettangolo,
- scegliere {{ui:Poligono}}, fare clic su ogni angolo e premere Invio per chiuderlo, oppure
- scegliere {{ui:Oggetto}} e indicare una polilinea chiusa, un cerchio, un'ellisse o una spline chiusa. Il suo contorno viene copiato; l'oggetto resta com'è.

Poi digitare il nome della zona. La zona viene disegnata come un contorno tratteggiato con il suo nome sopra l'angolo in alto a sinistra, sul layer `BOM-ZONES`, che non viene stampato. Attivare la stampa per quel layer se si vogliono le zone su carta.

Una zona è una normale polilinea chiusa: spostarla, allungarla o trascinarne i grip, e il suo nome la segue. Per rinominare una zona, modificare il testo del nome, oppure usare {{cmd:BOMZONE}} e {{ui:Rinomina}}. {{ui:Zone}} elenca ogni zona e quante tabelle contiene.

## Collocare una tabella

Digitare {{cmd:BOMTABLE}} (oppure {{cmd:BOM}}), indicare il contorno della zona o il suo nome, indicare l'altezza del testo e fare clic dove deve andare l'angolo in alto a sinistra della tabella. Premere Invio invece di indicare una zona, oppure scegliere {{ui:Intero}}, per una tabella dell'intero disegno.

Una nuova tabella mostra il numero di voce, la quantità, il nome del blocco e una colonna per ogni attributo contenuto nei blocchi (i primi sei; gli altri vengono proposti senza spunta). I blocchi con lo stesso nome e gli stessi valori di attributo condividono una riga.

## Cosa conta come interno

- Un blocco conta nella zona che contiene il suo **punto di inserimento**.
- Una linea, un arco, un cerchio, una polilinea, un'ellisse, una spline o un tratteggio contano **per intero** nella zona che contiene il centro della loro estensione (per una linea, il suo punto medio). La sua lunghezza non viene tagliata al bordo della zona.
- Un punto esattamente sul bordo è considerato interno.
- Le zone possono sovrapporsi. Ogni zona conta per sé, quindi un oggetto nella zona di sovrapposizione appare in entrambe le tabelle.

## Le tabelle seguono il disegno

Quando si aggiunge, sposta, copia o elimina un blocco, si modifica un attributo, oppure si rimodella o sposta una zona, ogni tabella viene ridisegnata nello stesso passo. Annulla riporta indietro la modifica e la variazione della tabella insieme.

Per impedire a una tabella di seguire il disegno, spuntare {{ui:Congelato}} nelle sue impostazioni. Una tabella congelata cambia solo quando si modificano le sue impostazioni oppure si digita {{cmd:BOMUPDATE}}, che aggiorna subito ogni tabella.

## Scegliere le colonne

Selezionare una tabella e digitare {{cmd:BOMEDIT}}. Nella finestra:

- **Colonne**: spuntare quelle da mostrare (voce, quantità, nome, layer, lunghezza, area, note e ciascun attributo), digitare un'intestazione personalizzata per una qualsiasi di esse, e spostarle su o giù.
- {{ui:Raggruppa righe per}}: nome del blocco e valori degli attributi, solo nome del blocco, layer, oppure un attributo. In una riga unita, un valore che differisce tra i blocchi viene indicato come "varia".
- {{ui:Ordina per}} una colonna qualsiasi, in ordine crescente o decrescente.
- {{ui:Titolo}}, {{ui:Mostra il titolo}} e {{ui:Riga dei totali}}.
- {{ui:Conta linee per layer}} aggiunge una riga per layer con il numero di oggetti, la loro lunghezza totale e, per le forme chiuse, la loro area totale, in unità di disegno.
- **Note**: spuntare la colonna Note, poi digitare una nota per una qualsiasi riga della tabella nella parte inferiore della finestra.

Ogni tabella conserva le proprie scelte.

## Numeri di voce

Una riga conserva il proprio numero di voce per tutto il tempo in cui è nella tabella. Una nuova riga prende il numero libero successivo, e un numero già assegnato non viene più riutilizzato, così i riferimenti e le note che citano un numero restano corretti. {{ui:Rinumera le voci}} li numera da 1 nell'ordine mostrato.

Una riga è riconosciuta da ciò che raggruppa: se si cambia il modo di raggruppare le righe, oppure si cambia un valore di attributo usato dal raggruppamento, la riga viene considerata nuova.

## Esportazione e altri programmi

{{cmd:BOMEXPORT}}, oppure {{ui:Esporta CSV}} nella finestra, salva una tabella come file .csv per un foglio di calcolo.

In un file DWG o DXF, una tabella è un normale blocco di linee e testo, quindi altri programmi la mostrano e la stampano così come è disegnata. Lì non è un oggetto tabella, e non si aggiorna negli altri programmi. Il collegamento alla sua zona viene conservato nel file come dati di estensione che CadCraft rilegge, così la tabella torna attiva quando si riapre il disegno in CadCraft. Un DXF R12 di un disegno senza tavola non conserva l'impostazione "non stampato" del layer della zona.

Far esplodere una tabella la trasforma in linee e testo sciolti e interrompe il collegamento.
