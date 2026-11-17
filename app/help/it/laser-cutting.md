---
title: Inviare un disegno a un laser
summary: Aprire il pannello Laser, scegliere cosa fa ogni layer (taglio, tracciatura, incisione, riempimento, immagine), visualizzare in anteprima i movimenti della testina, salvare il G-code in modalità laser GRBL, oppure inviarlo dal browser dopo aver inquadrato il lavoro.
keywords: laser, taglierina laser, incisore laser, GRBL, G-code, gcode, incisione, riempimento, dithering, incisione immagine, tracciatura, taglio, Web Serial, inquadra il lavoro, potenza, velocità, passate, LASER, LASERCUT, CNC
from: 72b56db0
---

Il pannello {{ui:Laser}} trasforma i layer di un disegno in un programma per un laser che usa GRBL (la maggior parte dei controller laser a diodo e CO2 per hobby e piccole officine). Digitare `LASER` (o `LASERCUT`) e premere {{key:Enter}}, oppure scegliere {{ui:Laser…}} nel menu {{ui:Altro}} del gruppo {{ui:Vista}}. Negli stili a barra multifunzione si trova nel menu {{ui:File}} e accanto a {{ui:Stampa}}. Il pannello si apre sopra il disegno e resta aperto mentre si disegna: l'anteprima segue ogni modifica.

:::warning
Provare ogni impostazione prima su materiale di scarto, indossare protezioni per gli occhi adatte al laser in uso, tenere il coperchio chiuso dove ce n'è uno, e non lasciare mai un laser in funzione incustodito. I valori con cui inizia un layer sono segnaposto, non raccomandazioni per alcun materiale.
:::

## Cosa viene inviato

Il pannello legge il modello (non i fogli), sui layer accesi e scongelati:

- Linee, archi, cerchi, polilinee (i segmenti ad arco restano archi), ellissi e spline. Una forma che termina dove inizia è considerata chiusa.
- I blocchi vengono scomposti: un oggetto sul layer 0 dentro un blocco segue il layer del riferimento a blocco.
- Un tratteggio invia il suo contorno, quindi un logo tratteggiato su un layer **Riempi** viene riempito.
- Un'immagine (`IMAGEATTACH`) viene incisa su un layer impostato su **Incidi immagine**, quando è squadrata (non ruotata né inclinata) e il suo file è aperto in CadCraft.
- Testo, quote, linee di richiamo, punti e linee di costruzione non vengono inviati; il pannello indica quanti ne ha lasciati fuori. Per incidere il testo, disegnare le lettere come forme oppure tratteggiarle.

Le misure vengono inviate in millimetri a partire dalle unità del disegno (`UNITS`): un disegno in pollici viene moltiplicato per 25.4. Un disegno senza unità impostate viene inviato con un'unità corrispondente a un millimetro. Selezionare {{ui:Solo gli oggetti selezionati}} per inviare una parte del disegno.

## Scegliere cosa fa ogni layer

Ogni layer con qualcosa sopra è una riga. {{ui:Operazione}} lo imposta su **Taglia**, **Tracciatura**, **Incidi linee**, **Riempi forme**, **Incidi immagine** oppure **Non inviare**, con una {{ui:Potenza %}}, una {{ui:Velocità mm/min}} e un numero di {{ui:Passate}}. Ogni modifica è un solo passo di annullamento ed è salvata nel disegno: DWG (ogni versione salvata da CadCraft) e DXF conservano le impostazioni, quindi il disegno si apre con esse la volta successiva. Gli altri programmi aprono il file come prima; vedono un blocco inutilizzato chiamato CADCRAFT_LASER (eliminarlo lì con Elimina elementi inutilizzati rimuove le impostazioni).

- **Riempi** brucia l'interno delle forme chiuse con linee distanti {{ui:Interlinea}}, a un {{ui:Angolo}}, in entrambi i versi oppure in uno solo, con un overscan così la testina è alla velocità corretta quando il laser si accende; la tratteggiatura incrociata aggiunge una seconda passata a 90°. Una forma con un foro resta aperta in corrispondenza del foro.
- **Incidi immagine** trasforma un'immagine in punti (Floyd–Steinberg, Atkinson, ordinato, oppure semplice bianco e nero a una soglia) oppure, con *Livelli di grigio*, in potenza variabile.
- Ordine: prima immagini e riempimenti, poi incisione di linee, poi tracciature, poi tagli, così un pezzo tagliato non si muove mentre viene inciso. All'interno di un layer i percorsi vanno **dall'interno verso l'esterno** (un foro prima della lastra in cui si trova), passando sempre al più vicino.

## Anteprima, poi salvataggio

L'anteprima disegna ciò che fa la testina: le linee in incisione in colore, i movimenti rapidi in grigio, e un riquadro verde attorno a tutto ciò che viene inciso. Sotto ci sono la dimensione, la lunghezza di incisione e una stima del tempo (senza accelerazione; una macchina reale impiega di più). {{ui:Salva G-code…}} scrive il G-code in modalità laser GRBL: `$32=1`, `M4` (oppure `M3`) con valori S, movimenti `G0` e `G1`, `M5` alla fine. X0 Y0 è l'angolo inferiore sinistro del lavoro, a meno che non si scelga l'origine del disegno: impostare lì lo zero di lavoro della macchina.

## Inviare dal browser

In Chrome ed Edge, {{ui:Connetti…}} chiede di scegliere la porta USB del laser. Non si connette né invia nulla finché non si preme un pulsante. Premere prima {{ui:Inquadra il lavoro}}: la testina traccia il riquadro del lavoro con il laser **spento** (oppure alla bassa potenza impostata per un puntatore), così si vede dove inciderà. Solo allora si attiva {{ui:Invia lavoro}}, che si disattiva di nuovo se si cambia qualcosa. {{ui:Pausa}} trattiene la testina, {{ui:Stop}} la trattiene, reimposta il controller (il laser si spegne) e invia `M5`. Dove manca Web Serial (Firefox, Safari e CadCraft Studio, che non ha ancora Web Serial) il pannello offre solo il salvataggio: salvare il G-code e inviarlo con il programma del proprio laser.

## Non ancora implementato

Non ancora implementato: altri formati di controller (Ruida, laser Marlin, file dei produttori), ponticelli e attacchi d'ingresso, offset del kerf, librerie di materiali, assi rotativo e Z, allineamento con la fotocamera, testo come contorni.
