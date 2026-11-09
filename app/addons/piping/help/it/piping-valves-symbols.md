---
title: Tubazioni: valvole e simboli P&ID
summary: Inserire valvole, filtri, flange e unioni sulle tratte di tubazione, e collocare da soli un insieme di simboli in stile P&ID.
keywords: valvola, saracinesca, globo, sfera, ritegno, farfalla, tappo, valvola di regolazione, filtro, flangia, unione, p&id, schema, simbolo, pompa, valvola di sicurezza, strumento, cerchietto
from: d3ad5259
---

## Valvole sulle tratte

Digitare {{cmd:VALVE}} e fare clic su una tratta di tubazione; la valvola va dove si fa clic, dimensionata sulla tratta (su una tratta a linea doppia, abbastanza grande da sporgere oltre il tubo). {{ui:Tipo}} sceglie valvola a saracinesca, a globo, a sfera, di ritegno, a farfalla, a tappo o di regolazione, un filtro a Y, un giunto flangiato o un'unione. {{ui:Rimuovi}} toglie quella più vicina. La linea della tratta è interrotta sotto ogni valvola, e ogni valvola è conteggiata nell'abaco per tipo e dimensione.

## Simboli da soli

{{cmd:PIDSYM}} inserisce simboli schematici per uno schema di processo e strumentazione (P&ID) o per uno schema a colonne montanti: le valvole sopra, una valvola a tre vie, una valvola di sicurezza, una riduzione, un tappo, una pompa centrifuga, cerchietti per gli strumenti (montati in campo, oppure montati su pannello con la linea che li attraversa) con la loro etichetta — lettere sopra il numero, come in `PI 101` — e una freccia di flusso. {{ui:Angolo}} ruota i simboli successivi. La loro dimensione si imposta in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Tubazioni}}.

Le forme seguono le convenzioni comuni di questi schemi (ANSI/ISA-5.1 per i cerchietti degli strumenti, ISO 10628-2 per valvole e apparecchiature); i disegni sono propri di CadCraft.
