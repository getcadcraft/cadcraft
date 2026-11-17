---
title: Disponi le tavole per me
summary: Disporre automaticamente le parti di un disegno su tavole: CadCraft sceglie un formato carta e una scala standard adatti, colloca ogni parte con un cartiglio e la scala sotto, e lascia tutto modificabile.
keywords: tavole, layout, layout, carta, scala, automatico, AUTOSHEET, cartiglio, viewport, viste salvate
from: 7f315dff
---

Scegliere **Vista › Altro › Disponi le tavole per me** (oppure digitare {{cmd:AUTOSHEET}}). CadCraft individua le parti del disegno (le viste salvate, oppure i gruppi separati del modello), sceglie un formato carta e una scala standard in cui stanno, e le colloca su nuove tavole con un cartiglio, una didascalia e la scala sotto ciascuna.

Prima dell'esecuzione è possibile modificarne il funzionamento: **Parti** (viste salvate, gruppi, l'intero disegno, oppure lasciare decidere), **Carta** (automatica oppure un formato come `iso-a1`), **Scala** (una scala per tutti, oppure ogni parte con la propria) e **Tavole** (quante parti condividono una tavola).

Le tavole sono tavole normali: si può spostare un viewport, cambiarne la scala o eliminare una tavola come di consueto. Premere {{key:Ctrl+Z}} una volta per annullare tutte le nuove tavole.

## Legende numerate

In {{cmd:AUTOSHEET}} scegliere **Legende numerate** per aggiungere una legenda numerata sotto le viste di ogni tavola. Elenca i layer disegnati in quelle viste, una riga numerata ciascuno, come testo semplice modificabile come ogni altro testo. Scegliere **File** per leggere un proprio elenco di legende (per ogni riga un numero e le sue parole, separati da una tabulazione, una virgola o un punto e virgola): un layer il cui nome corrisponde a un numero dell'elenco riceve le sue parole. Con l'app non viene fornito alcun elenco di legende.
