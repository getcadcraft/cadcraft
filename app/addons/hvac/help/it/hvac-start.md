---
title: HVAC: primi passi
summary: Che cosa fa il componente HVAC in CadCraft, come attivarlo e come le canalizzazioni vengono conservate in un normale file DWG o DXF.
keywords: hvac, add-on, canalizzazioni, canale, meccanico, lamiera, portata, cfm, perdita costante, abaco
from: a9ad5492
---

## Che cos'è

HVAC è un add-on di CadCraft, incluso e gratuito. Disegna le canalizzazioni: si fa clic sulla mezzeria di una tratta di canale, e il componente disegna entrambi i lati del canale con le sue curve, transizioni e raccordi di diramazione, lo dimensiona in base alla portata, lo costruisce come solido nella scheda {{ui:3D}} e lo elenca in un abaco dei canali con la superficie della sua lamiera.

È disattivato finché non lo si attiva: {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Add-on}} › {{ui:HVAC}}. I suoi strumenti si trovano nella sezione {{ui:HVAC}} del pannello destro, come comandi (qui sotto), e, quando lo si richiede in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:HVAC}}, come gruppo alla fine della barra degli strumenti.

Le dimensioni seguono le unità del disegno: un disegno in pollici o piedi ha dimensioni in pollici, portata in cfm e perdita in pollici di colonna d'acqua ogni 100 piedi; ogni altro disegno ha millimetri, litri al secondo e pascal al metro.

## La prima tratta di canale

1. Digitare {{cmd:DUCT}}. Digitare {{ui:Z}} e una dimensione, per esempio `24x12` (larghezza × altezza) — oppure {{ui:A}} e la portata, e il componente sceglie la dimensione.
2. Fare clic sui punti della tratta. Ogni angolo riceve una curva da solo. Premere Invio per terminare.
3. Per derivare, iniziare la tratta successiva dentro la prima: il clic si sposta sulla sua mezzeria e la diramazione riceve lì un raccordo a T o una derivazione.
4. Digitare {{cmd:DUCTSCHED}} e fare clic dove va l'abaco.

Vedere [Disegno delle tratte di canale](topic:hvac-ducts) per tutto ciò che una tratta può fare.

## File aperti ovunque

Una tratta di canale viene salvata come riferimento a blocco con il suo disegno dentro, e i suoi dati sono conservati con essa sotto il nome applicativo `CC_HVAC`. Quindi le canalizzazioni salvate come DWG o DXF si aprono in qualsiasi programma CAD come canale disegnato, e si aprono in CadCraft senza il componente senza perdere nulla. I suoi solidi sono normali gruppi 3D nella scheda {{ui:3D}}. Con HVAC attivo, le tratte tornano a essere tratte di canale.
