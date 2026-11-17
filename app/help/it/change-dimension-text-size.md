---
title: Modificare la dimensione del testo delle quote
summary: Rendere il testo delle quote più grande o più piccolo, per le nuove quote e per quelle già presenti nel disegno.
keywords: dimensione testo quota, altezza testo, dimtxt, dimscale, testo quota troppo piccolo, testo quota troppo grande, testo quota più grande, scala di annotazione
from: 30e40633
---

## Per le quote che create dopo

1. Premere Esc in modo che nulla sia selezionato: il pannello destro riporta {{ui:Impostazioni correnti}}.
2. Scorrere il pannello fino a {{ui:Nuove quote}}. Digitare in {{ui:Altezza testo}} l'altezza desiderata su carta (ad esempio `2.5` per 2,5 mm, oppure `3/32"`) e premere Invio.
3. Impostare {{ui:Scala complessiva}} sulla scala di stampa (`50` per 1:50, `48` per 1/4" = 1'-0"): ogni dimensione viene moltiplicata per essa.

Nella riga di comando, {{cmd:DIMTXT}} imposta l'altezza e {{cmd:DIMSCALE}} la scala complessiva.

## Per le quote già presenti nel disegno

1. Selezionare le quote (una, o più di una: scegliere {{ui:Quota}} nell'elenco in cima a Proprietà).
2. Digitare la nuova {{ui:Altezza testo}} (nella sezione {{ui:Testo}}), oppure una nuova {{ui:Scala complessiva}} (nella sezione {{ui:Adattamento}} più in basso), e premere Invio.

Vengono ridisegnate subito, in un solo passo di annullamento. Una quota proveniente dal file di un altro programma viene ridisegnata nello stile di CadCraft non appena la si modifica.

:::tip
Un testo che è leggibile sullo schermo ma minuscolo sul foglio stampato di solito significa che la scala complessiva è 1: impostarla sulla scala della tavola.
:::

Vedere [Impostare dimensioni, decimali e scala delle quote](topic:dimension-settings) per tutte le impostazioni.
