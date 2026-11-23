---
title: Tratteggio e aree con riempimento
summary: Riempire un'area con un colore pieno o un motivo standard facendo clic al suo interno o scegliendo forme chiuse, impostare la scala e l'angolo del motivo, e modificare il tratteggio in seguito.
keywords: tratteggio, bhatch, riempimento, riempimento pieno, motivo, ansi31, ansi37, mattone, terra, rete, linee di sezione, campitura, isola, contorno, scala, angolo
from: e7feb344
---

## Cosa si crea

Una sezione di muro riempita con il motivo ANSI31, una colonna lasciata vuota e un riempimento pieno nella colonna.

## Tratteggiare facendo clic dentro un'area

1. Disegnare un rettangolo (`REC`, `0,0`, `@2000,1200`) e un cerchio al suo interno (`C`, `1000,600`, `300`). Fare clic su {{ui:Extents}}.
2. Fare clic su {{ui:Hatch}} nel gruppo {{ui:Draw}}, oppure digitare `H` e premere {{key:Enter}}. La cronologia indica il motivo corrente, per esempio `Tratteggio corrente: ANSI31, scala 1, angolo 0°`.
3. Digitare `P` e premere {{key:Enter}}, digitare `ANSI31` e premere {{key:Enter}}.
4. Digitare `SC` e premere {{key:Enter}}, digitare `20` e premere {{key:Enter}}. Le dimensioni dei motivi sono su carta, quindi un disegno stampato in 1:20 vuole la scala 20.
5. Al prompt `Indicare un punto interno`, fare clic dentro il rettangolo, fuori dal cerchio. Il tratteggio appare come anteprima.
6. Premere {{key:Enter}}. Il rettangolo viene tratteggiato; il cerchio all'interno resta vuoto, perché è un'isola.

Fare clic dentro più aree prima di premere {{key:Enter}} per farne un unico tratteggio. `U` annulla l'ultima area.

## Riempimento pieno

1. Digitare `H` e premere {{key:Enter}}.
2. Digitare `P`, premere {{key:Enter}}, digitare `SOLID` e premere {{key:Enter}}.
3. Fare clic dentro il cerchio, poi premere {{key:Enter}}.

## Tratteggiare forme chiuse indicate

Invece di fare clic dentro, digitare `S` (Seleziona oggetti) al prompt `Indicare un punto interno` e indicare polilinee chiuse, cerchi o ellissi chiuse, poi premere {{key:Enter}}. Le forme dentro altre restano vuote a turno (quella esterna tratteggiata, la successiva vuota, e così via).

## Motivi

Digitare `?` alla domanda sul motivo per l'elenco. I motivi standard sono da ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ed EARTH, e SOLID. In un disegno in pollici (oppure con piedi e pollici come formato delle lunghezze) si usano le misure in pollici dei motivi, come in AutoCAD; altrimenti quelle in millimetri.

{{ui:Angle}} (`A`) ruota l'intero motivo: ANSI31 a 90° scende nell'altro verso.

**File dei motivi.** Digitare `F` (File di motivo) al prompt `Indicare un punto interno` e scegliere un file `.pat`. I motivi contenuti si aggiungono all'elenco; se ce ne sono più di uno viene chiesto quale usare. Un file senza motivi che CadCraft sa leggere lo segnala, e ogni motivo saltato viene conteggiato. Le misure in un file `.pat` non hanno un'unità propria, quindi vengono lette nelle unità del disegno. Sono stati provati solo file scritti nel formato `.pat` consueto; nessuno prodotto da altri programmi.

## Modificare un tratteggio

Selezionarlo (fare clic su una delle sue linee). In {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} e {{ui:Pattern angle}}. I tratteggi dei disegni aperti mostrano il loro motivo quando è uno di quelli standard; gli altri appaiono con un tono chiaro del loro colore.

## Errori comuni

- **"Nessun contorno chiuso attorno a quel punto."** C'è un vuoto nel contorno, oppure una parte è fuori schermo: CadCraft guarda solo ciò che è sullo schermo. Chiudere il vuoto (ingrandire sugli angoli), oppure ridurre lo zoom.
- **"Il motivo è troppo fitto per essere disegnato a questa scala."** Le linee sarebbero più vicine di quanto il disegno possa mostrare. Usare una scala maggiore: provare la scala di stampa (20 per 1:20).
- **Il motivo sembra enorme o minuscolo.** La scala è espressa in unità di disegno per unità del motivo; vedere il punto 4 sopra.
- **Il tratteggio non segue più il suo contorno.** Un tratteggio creato con {{cmd:HATCH}} resta legato agli oggetti da cui è nato: spostare, ruotare o scalare il contorno, e il tratteggio lo segue; rimodellarlo con un grip, e il tratteggio viene ricalcolato. Il legame termina quando il contorno non si chiude più, quando si rimodella a mano il tratteggio stesso, oppure quando lo si rifila, e la riga di comando lo dice. Non si perde nulla: tratteggiare di nuovo l'area per ricollegarla.

## Un tratteggio che resta legato al suo contorno

Un tratteggio creato con `HATCH` ricorda ciò che lo delimita. Spostare, ruotare o scalare il contorno, e il tratteggio con il suo motivo lo segue. Trascinare un grip per rimodellare il contorno, e il tratteggio viene ricalcolato. Spostare il tratteggio da solo, e il suo contorno lo segue, come una forma riempita in un programma di disegno.

Il legame termina, e la riga di comando lo dice, se il contorno non si chiude più o se si rimodella il tratteggio a mano. Il tratteggio resta. Digitare `AS` durante il tratteggio per creare tratteggi indipendenti. Copiare un tratteggio con il suo contorno, e la copia ha un legame proprio.

`HATCHEDIT` (`HE`) modifica motivo, scala, angolo e origine di un tratteggio, e lo collega a un contorno oppure termina il legame. Il legame è salvato nei file DWG e DXF 2000. Un file DXF R12 non ha un oggetto tratteggio, e i legami creati in altri programmi non vengono letti: usare `HATCHEDIT` e Collega per quelli.

Un tratteggio che non ha più un contorno (il contorno è stato cancellato, oppure il file è arrivato senza) può riaverlo: `HATCHGENERATEBOUNDARY` (`HGB`) disegna una polilinea chiusa attorno a ogni anello del tratteggio e, se si risponde Sì, lo collega ad esse.

## Un riempimento sfumato

`GRADIENT` (`GD`) riempie un'area con una sfumatura invece che con un motivo: le stesse indicazioni di `HATCH`, dopo che chiede il tipo (lineare, cilindrico, sferico, emisferico, curvo, e ciascuno di essi invertito), un colore con una gradazione oppure due colori, l'angolo, e se centrato oppure no. In `HATCH` l'opzione `G` fa lo stesso. `HATCHEDIT` `G`, oppure {{ui:Properties}} sotto Sfumatura, modifica una sfumatura o trasforma un tratteggio qualsiasi in una sfumatura.

Una sfumatura è mostrata a schermo e nelle stampe. Salvando come DWG 2004 o successivo, gli altri programmi ricevono un vero tratteggio sfumato. DXF 2000 e DWG 2000 non hanno sfumature: lì CadCraft la conserva per sé, e gli altri programmi vedono un riempimento pieno del primo colore.

## Rifilare un tratteggio

`TRIM` taglia un tratteggio come qualsiasi altro oggetto. Fare clic sul tratteggio dal lato del bordo di taglio che si vuole eliminare: i bordi dividono l'area tratteggiata e quel pezzo viene rimosso. In modalità Rapida ogni oggetto è un bordo di taglio; scegliere prima i bordi (opzione `T`) quando sono molti. Un tratteggio rifilato non è più collegato al suo contorno, perché non lo riempie più.
