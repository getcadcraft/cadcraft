---
title: Impostare i limiti del disegno
summary: LIMITS imposta un rettangolo per il disegno: la griglia lo riempie, ZOOM Tutti lo mostra e, con i limiti attivi, i punti fuori da esso vengono rifiutati. Sono salvati nei file DWG e DXF.
keywords: limiti, limiti del disegno, LIMITS, LIMMIN, LIMMAX, LIMCHECK, griglia, fuori dai limiti, formato tavola, area di disegno, zoom tutti, contorno
from: 9e97b30d
---

**I limiti del disegno** sono un rettangolo che indica quanto grande deve essere il disegno: l'area in cui si prevede di disegnare, per esempio una tavola 420 × 297. Un disegno nuovo non ne ha, quindi griglia e area di disegno sono illimitate, come prima.

## Impostarli

Digitare {{cmd:LIMITS}} e rispondere:

- `Specificare l'angolo in basso a sinistra o [ON/OFF] <0,0>`: un punto, oppure {{key:Enter}} per mantenere quello attuale.
- `Specificare l'angolo in alto a destra <420,297>`: un punto, oppure {{key:Enter}} per mantenere quello attuale. Deve trovarsi sopra e a destra del primo.

Oppure digitare `ON` o `OFF` alla prima domanda per attivare o disattivare il controllo senza cambiare il rettangolo. Impostare gli angoli è un solo passo di annullamento, e lo è anche ogni ON e OFF.

## Cosa fanno

- **La griglia riempie i limiti** e si ferma al loro bordo. È un'immagine dell'area, quindi attivare {{ui:Griglia}} per vederla.
- **ZOOM Tutti** ({{cmd:ZOOM}}, poi {{ui:Tutti}}) mostra insieme i limiti e il disegno; {{ui:Estensione}} mostra ancora solo il disegno.
- **Con i limiti attivi**, un punto digitato o cliccato fuori da essi viene rifiutato con `**Fuori dai limiti` e la richiesta resta. Riguarda i comandi che creano oggetti: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, i comandi di quotatura e alcuni altri. I comandi che solo spostano, selezionano o misurano non sono limitati, e nemmeno l'incollaggio, il trascinamento di un grip o un oggetto creato da una routine LISP: i limiti sono una guida per il disegno, non un muro. Con i limiti disattivati non viene rifiutato nulla.
- Gli oggetti già fuori restano dove sono.

## Nei file e in LISP

Sono salvati in DWG e DXF come `$LIMMIN`, `$LIMMAX` e `$LIMCHECK`. Un file di un altro programma che ha solo i limiti predefiniti di quel programma (da 0,0 a 12,9 o 420,297, controllo disattivato) si apre senza limiti, così la sua griglia non viene compressa in un rettangolo piccolo; un file con propri limiti, o con il controllo attivo, li mantiene. In LISP, `(getvar "LIMMIN")`, `LIMMAX` e `LIMCHECK` li leggono e `setvar` li scrive, come un solo passo di annullamento.

I limiti appartengono al modello. Una tavola (un layout) ha un proprio formato carta.
