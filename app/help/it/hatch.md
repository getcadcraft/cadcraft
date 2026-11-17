---
title: Tratteggio e riempimento di aree
summary: Riempie un'area con un colore pieno o un motivo standard facendo clic al suo interno o selezionando forme chiuse, imposta scala e angolo del motivo e permette di modificare il tratteggio in seguito.
keywords: tratteggio, bhatch, riempimento, riempimento solido, motivo, ansi31, ansi37, brick, earth, net, linee di sezione, campitura, isola, contorno, scala, angolo
from: 14399174
---

## Cosa si ottiene

Una sezione di muro riempita con il motivo ANSI31, un pilastro lasciato vuoto al suo interno e un riempimento solido nel pilastro.

## Tratteggio facendo clic all'interno di un'area

1. Disegnare un rettangolo (`REC`, `0,0`, `@2000,1200`) e un cerchio al suo interno (`C`, `1000,600`, `300`). Fare clic su {{ui:Estensione}}.
2. Fare clic su {{ui:Tratteggio}} nel gruppo {{ui:Disegna}}, oppure digitare `H` e premere {{key:Enter}}. La cronologia indica il motivo corrente, per esempio `Tratteggio corrente: ANSI31, scala 1, angolo 0°`.
3. Digitare `P` e premere {{key:Enter}}, digitare `ANSI31` e premere {{key:Enter}}.
4. Digitare `SC` e premere {{key:Enter}}, digitare `20` e premere {{key:Enter}}. Le dimensioni del motivo sono riferite alla carta, quindi un disegno stampato in scala 1:20 richiede scala 20.
5. Alla richiesta `Specificare punto interno`, fare clic all'interno del rettangolo, all'esterno del cerchio. Il tratteggio appare come anteprima.
6. Premere {{key:Enter}}. Il rettangolo viene tratteggiato; il cerchio all'interno resta vuoto, perché è un'isola.

Fare clic all'interno di più aree prima di premere {{key:Enter}} per creare un unico tratteggio. `U` annulla l'ultima area selezionata.

## Riempimento solido

1. Digitare `H` e premere {{key:Enter}}.
2. Digitare `P`, premere {{key:Enter}}, digitare `SOLID` e premere {{key:Enter}}.
3. Fare clic all'interno del cerchio, quindi premere {{key:Enter}}.

## Tratteggiare forme chiuse selezionate

Invece di fare clic all'interno, digitare `S` (Seleziona oggetti) alla richiesta `Specificare punto interno` e selezionare polilinee chiuse, cerchi o ellissi chiuse, quindi premere {{key:Enter}}. Le forme contenute in altre restano vuote a turno (quella esterna tratteggiata, quella successiva vuota, e così via).

## Motivi

Digitare `?` alla richiesta del motivo per vedere l'elenco. I motivi standard sono da ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH e SOLID. In un disegno in pollici (o con piedi e pollici come formato di lunghezza) si usano le dimensioni in pollici dei motivi, come in AutoCAD; altrimenti quelle in millimetri.

{{ui:Angolo}} (`A`) ruota l'intero motivo: ANSI31 a 90° è inclinato nell'altro senso.

**File di motivi.** Digitare `F` (File di motivi) alla richiesta `Specificare punto interno` e scegliere un file `.pat`. I motivi contenuti si aggiungono all'elenco; se ce ne sono più di uno, viene chiesto quale usare. Un file senza motivi che CadCraft può leggere viene segnalato, e gli eventuali motivi saltati vengono conteggiati. Le dimensioni in un file `.pat` non hanno unità proprie, quindi vengono lette nelle unità del disegno. Sono stati provati solo file scritti nel formato `.pat` usuale; nessuno creato da altri programmi.

## Modificare un tratteggio

Selezionarlo (fare clic su una delle sue linee). In {{ui:Proprietà}}: {{ui:Motivo}}, {{ui:Scala del motivo}} e {{ui:Angolo del motivo}}. I tratteggi di disegni aperti mostrano il loro motivo quando è uno di quelli standard; gli altri appaiono come un tono chiaro del loro colore.

## Errori comuni

- **"Nessun contorno chiuso intorno a quel punto."** C'è un'interruzione nel contorno, oppure una sua parte è fuori schermo: CadCraft considera solo ciò che è visibile. Chiudere l'interruzione (ingrandire sugli angoli), oppure ridurre lo zoom.
- **"Il motivo è troppo fitto per essere disegnato a questa scala."** Le linee sarebbero più vicine di quanto il disegno possa mostrare. Usare una scala maggiore: provare la scala di stampa (20 per 1:20).
- **Il motivo appare enorme o minuscolo.** La scala è espressa in unità di disegno per unità del motivo; vedere il punto 4 sopra.
- **Spostando il contorno, il tratteggio non si sposta.** Un tratteggio non è legato al suo contorno. Spostare entrambi, oppure tratteggiare di nuovo.

## Un tratteggio che resta legato al suo contorno

Un tratteggio creato con `HATCH` ricorda il contorno che lo delimita. Spostando, ruotando o scalando il contorno, il tratteggio e il suo motivo lo seguono. Trascinando un grip per rimodellare il contorno, il tratteggio viene ricalcolato. Spostando il tratteggio da solo, anche il suo contorno lo segue, come una forma riempita in un programma di disegno.

Il collegamento si interrompe, e la riga di comando lo segnala, se il contorno non è più chiuso o se si rimodella il tratteggio a mano. Il tratteggio resta. Digitare `AS` durante il tratteggio per creare tratteggi indipendenti. Copiando un tratteggio insieme al suo contorno, la copia ha un proprio collegamento.

`HATCHEDIT` (`HE`) modifica motivo, scala, angolo e origine di un tratteggio, e lo collega a un contorno oppure ne interrompe il collegamento. Il collegamento viene salvato nei file DWG e DXF 2000. Un file DXF R12 non ha oggetti tratteggio, e i collegamenti creati in altri programmi non vengono letti: per questi usare `HATCHEDIT` e l'opzione Collega.

Un tratteggio che non ha più un contorno (il contorno è stato cancellato, oppure il file ne era privo) può riottenerlo: `HATCHGENERATEBOUNDARY` (`HGB`) disegna una polilinea chiusa intorno a ciascun anello del tratteggio e, se si risponde Sì, collega il tratteggio a queste polilinee.

## Un riempimento a sfumatura

`GRADIENT` (`GD`) riempie un'area con una sfumatura invece di un motivo: le stesse selezioni di `HATCH`, dopo aver chiesto il tipo (lineare, cilindrica, sferica, emisferica, curva, e ciascuna di esse invertita), un colore con una tonalità oppure due colori, l'angolo e se centrata o no. In `HATCH` l'opzione `G` fa lo stesso. `HATCHEDIT` `G`, oppure {{ui:Proprietà}} sotto Sfumatura, cambia una sfumatura o trasforma qualsiasi tratteggio in una sfumatura.

Una sfumatura appare a schermo e nelle stampe. Salvando in DWG 2004 o successivo, gli altri programmi ottengono un vero tratteggio a sfumatura. DXF 2000 e DWG 2000 non hanno sfumature: lì CadCraft la conserva per sé, e gli altri programmi vedono un riempimento solido con il primo colore.

## Tagliare un tratteggio

`TRIM` taglia un tratteggio come qualsiasi altro oggetto. Fare clic sul tratteggio dal lato della linea di taglio che si vuole eliminare: i bordi dividono l'area tratteggiata e quel pezzo viene rimosso. In modalità Rapida ogni oggetto è una linea di taglio; scegliere prima i bordi (opzione `T`) quando sono molti. Un tratteggio tagliato non è più collegato al suo contorno, perché non lo riempie più.
