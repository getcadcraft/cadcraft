---
title: Tubazioni: portata e pressione in un'alimentazione idrica
summary: PIPENET segue le tubazioni di alimentazione disegnate a partire dalla sorgente, somma le unità di apparecchio indicate a ogni estremità libera e trova la portata, la velocità e la perdita di pressione verso ciascun apparecchio.
keywords: alimentazione, acqua, unità di apparecchio, richiesta, portata, velocità, perdita di pressione, hazen-williams, PIPENET, PNET, prevalenza statica, calda, fredda
from: ece38a8e
---

Digitare {{cmd:PIPENET}} (`PNET`) e fare clic sull'estremità di una tratta dove arriva l'alimentazione.

Per ogni estremità libera chiede che cosa c'è: un tipo di apparecchio (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) oppure un numero di unità di apparecchio (0 per nessuno). Le risposte vengono ricordate per quel punto; {{ui:Reimposta}} le dimentica. {{ui:Pressione}} indica la pressione di alimentazione alla sorgente e la pressione che serve a un apparecchio, in kPa.

Per ogni apparecchio stampa le unità di apparecchio che trasporta, la pressione persa dalla sorgente (attrito secondo Hazen–Williams, raccordi, e la salita o la discesa della tubazione: una tubazione che scende lungo il percorso in cui è disegnata guadagna pressione quando è alimentata dal suo estremo basso) e ciò che resta della pressione di alimentazione. Sono elencate le tratte troppo piccole per la portata che trasportano (velocità troppo alta).

**Richiesta** usa una curva predefinita dalle unità di apparecchio alla portata, che è un esempio etichettato. Prima di fare affidamento sulle portate, inserire nelle impostazioni del motore la curva del codice in vigore. Le perdite nei raccordi sono valori predefiniti arrotondati. I cicli sono ignorati. Verificare i risultati con un ingegnere. {{ui:Esporta}} › Rete di alimentazione scrive ogni tratta in CSV.
