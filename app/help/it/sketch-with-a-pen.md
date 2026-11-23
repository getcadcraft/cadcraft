---
title: Schizzare con una penna e ottenere geometria precisa
summary: Disegnare a mano libera con una penna, il mouse o un dito, e ogni tratto diventa una linea, un cerchio, un arco, un rettangolo o una polilinea puliti quando si solleva la penna, agganciati a ciò che è già disegnato, con la dimensione pronta per essere sovrascritta.
keywords: schizzo, penna, pennino, mano libera, dito, pulire, preciso, snap, SKETCHLIVE, SKETCHFIX, dimensione, digitare sopra, pressione, spessore di linea, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Avviare {{cmd:SKETCHLIVE}} (oppure scegliere **Disegna › Altro › Schizzo con penna**) e disegnare un tratto premendo e trascinando. Quando si solleva la penna, CadCraft legge ciò che si intendeva e lo mette nel disegno:

| Tratto disegnato | Cosa si ottiene |
|---|---|
| Quasi dritto | Una linea. Una linea quasi orizzontale o verticale diventa esattamente orizzontale o verticale. |
| Chiuso e tondo | Un cerchio |
| Parte di una forma tonda | Un arco |
| Chiuso con quattro angoli retti | Un rettangolo |
| Qualsiasi altra cosa | Una polilinea con lati squadrati |

Le estremità di un tratto vengono tirate sull'estremità più vicina di ciò che è già disegnato, così un muro schizzato incontra il muro accanto.

## Digitare sopra la dimensione

Dopo ogni tratto la riga di comando mostra la sua dimensione (la **lunghezza** di una linea, il **raggio** di un cerchio o di un arco, la **larghezza** di un rettangolo) come valore predefinito. Premere {{key:Enter}} per mantenerla, oppure digitare un numero o una lunghezza come `12'6"` per sostituirla. Una linea mantiene la sua prima estremità, un cerchio il suo centro, un rettangolo il suo primo angolo.

Premere {{key:Enter}} su un prompt vuoto per terminare, oppure digitare `U` per annullare l'ultimo tratto. L'intera sessione è un solo passo di annullamento.

## Pulire più tratti insieme

{{cmd:SKETCHFIX}} raccoglie i tratti e li rende tutti precisi quando si preme {{key:Enter}}; è adatto a un layout grezzo disegnato in fretta.

:::note
Tutto viene calcolato sul proprio computer con regole, senza modelli, e nulla viene inviato altrove.
:::

## La pressione imposta lo spessore di linea

Dove la penna è attivata per le app (Impostazioni › Globale › Dispositivi di input › Penna), un tratto disegnato con la penna conserva ogni punto che la penna ha fornito e la sua pressione. Un tratto leggero produce un oggetto sottile e uno deciso uno spesso: la pressione media del tratto sceglie 0,18, 0,25, 0,35 o 0,50 mm, e la riga di comando indica quale. I tratti disegnati con il mouse o con un dito prendono lo spessore di linea corrente, come prima. {{cmd:PENPRESSURE}} disattiva questo effetto (oppure lo riattiva); la scelta viene conservata in questo browser.
