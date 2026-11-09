---
title: HVAC: l'abaco dei canali
summary: Canale rettilineo per dimensione e materiale, ogni raccordo e la superficie di lamiera di ciascuno, come tabella nel disegno o come file CSV.
keywords: abaco, abaco dei canali, lamiera, superficie, piedi quadrati, raccordi, csv, quantità, lunghezza
from: a5764fca
---

## Una tabella nel disegno

Digitare {{cmd:DUCTSCHED}}. La riga di comando riporta i totali; fare clic dove va la tabella (il suo angolo in alto a sinistra). La tabella elenca:

- **canale rettilineo** per forma, dimensione e materiale, con la sua lunghezza e la superficie di lamiera;
- **raccordi** — curve, transizioni e riduzioni, raccordi a T, derivazioni e diramazioni laterali — per tipo e dimensione, con quanti sono e la loro lamiera;
- un totale.

La tabella si aggiorna da sola: ogni modifica a una tratta di canale la cambia nello stesso passaggio ({{cmd:UNDO}} riporta indietro entrambe). L'altezza del testo si imposta in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:HVAC}}.

## Come si calcola la lamiera

- Canale rettilineo: il suo perimetro × la sua lunghezza. Un canale di 24 × 12 in lungo 10 ft ha 6 ft × 10 ft = 60 ft².
- Curve: il perimetro × la lunghezza della mezzeria. Per una curva a raggio il calcolo è esatto: i due fianchi, il tallone e la gola sommati danno proprio quel valore. Una curva di 90° 24 × 12 in con raggio di 24 in ha 18.85 ft².
- Transizioni rettangolari: i loro quattro lati piani, ciascuno calcolato in modo esatto.
- Transizioni circolari e a forma mista: il perimetro medio × la lunghezza inclinata (esatto per una riduzione circolare centrata su entrambe le estremità, approssimato per le altre).
- Derivazione o raccordo a T di una diramazione: il suo collare, cioè il perimetro della diramazione × 2 in (50 mm).

Giunti, sovrapposizioni e sfrido non sono inclusi: aggiungerli in TakeoffCraft come sfrido, oppure secondo la regola della propria officina.

## Un file CSV

{{cmd:EXPORT}} › {{ui:Abaco dei canali (CSV)}} scrive tre tabelle: il canale rettilineo (forma, dimensione, materiale, lunghezza, perimetro, superficie), i raccordi (quantità, superficie di ciascuno, superficie) e ogni sezione (etichetta, sistema, dimensione, lunghezza, portata, velocità, attrito).

Per fare una stima a partire dall'abaco, vedere [Canali in TakeoffCraft](topic:hvac-takeoff).
