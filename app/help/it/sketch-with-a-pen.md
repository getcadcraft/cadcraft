---
title: Schizzare con la penna e ottenere geometrie precise
summary: Disegnare a mano libera con penna, mouse o dito e ogni tratto diventa una linea, un cerchio, un arco, un rettangolo o una polilinea pulita quando si solleva la penna, agganciata a ciò che è già disegnato, con la sua dimensione pronta da sovrascrivere.
keywords: schizzo, penna, pennino, a mano libera, dito, pulisci, preciso, snap, SKETCHLIVE, SKETCHFIX, dimensione, sovrascrivi
from: cd87eb75
---

Avviare {{cmd:SKETCHLIVE}} (oppure scegliere **Disegna › Altro › Schizza con la penna**) e disegnare un tratto premendo e trascinando. Quando si solleva la penna, CadCraft interpreta l'intenzione e la inserisce nel disegno:

| Il tratto | Cosa si ottiene |
|---|---|
| Quasi diritto | Una linea. Una linea quasi orizzontale o verticale viene resa esattamente orizzontale o verticale. |
| Chiuso e tondo | Un cerchio |
| Parte di una forma tonda | Un arco |
| Chiuso con quattro angoli retti | Un rettangolo |
| Qualsiasi altra cosa | Una polilinea con lati squadrati |

Le estremità di un tratto vengono agganciate all'estremità più vicina di ciò che è già disegnato, così un muro schizzato si unisce al muro accanto.

## Sovrascrivere la dimensione

Dopo ogni tratto la riga di comando mostra la sua dimensione (la **lunghezza** di una linea, il **raggio** di un cerchio o di un arco, la **larghezza** di un rettangolo) come valore predefinito. Premere {{key:Enter}} per mantenerla, oppure digitare un numero o una lunghezza come `12'6"` per sostituirla. Una linea mantiene la sua prima estremità, un cerchio il suo centro, un rettangolo il suo primo angolo.

Premere {{key:Enter}} su un prompt vuoto per terminare, oppure digitare `U` per annullare l'ultimo tratto. L'intera sessione è un'unica operazione di annulla.

## Pulire più tratti in una volta

{{cmd:SKETCHFIX}} raccoglie i tratti e li rende tutti precisi quando si preme {{key:Enter}}, il che è adatto a una disposizione approssimativa disegnata in fretta.

:::note
Tutto viene calcolato sul computer con regole, senza modelli e senza inviare nulla altrove.
:::
