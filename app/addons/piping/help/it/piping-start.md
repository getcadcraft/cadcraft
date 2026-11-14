---
title: Tubazioni: come iniziare
summary: Che cosa fa il componente aggiuntivo Tubazioni in CadCraft, come attivarlo, e come le tubazioni vengono conservate in un normale file DWG o DXF.
keywords: tubazioni, tubo, componente aggiuntivo, idraulica, meccanica, acciaio, rame, pvc, pex, valvola, p&id, abaco, scarico
from: 1048242c
---

## Che cos'è

Tubazioni è un componente aggiuntivo di CadCraft, incluso e gratuito. Si fa clic sulla mezzeria di una tratta di tubo, e il componente disegna il tubo nella sua dimensione reale — acciaio, rame, PVC o PEX, per dimensione nominale e schedule o tipo secondo le norme pubbliche — con le sue curve, riduzioni e raccordi a T, le valvole che vi si inseriscono, una pendenza per gli scarichi, un solido sulla scheda {{ui:3D}} e una riga nell'abaco delle tubazioni e dei raccordi. Ne fa parte anche un insieme di simboli in stile P&ID.

È disattivato finché non lo si attiva: {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Add-on}} › {{ui:Tubazioni}}. I suoi strumenti si trovano nella sezione {{ui:Tubazioni}} del pannello destro, come comandi (sotto), e, quando li si richiede in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Tubazioni}}, come gruppo alla fine della barra degli strumenti.

Un disegno in pollici o piedi indica le dimensioni con NPS (`2"`) e misura in piedi; ogni altro disegno indica acciaio e PVC con DN (`DN50`), rame e PEX con la loro dimensione nominale e il diametro esterno in millimetri, e misura in metri.

## La prima tratta di tubazione

1. Digitare {{cmd:PIPE}}. Digitare {{ui:M}} per il materiale, {{ui:Z}} e una dimensione (`2`, `1-1/2`, `DN50`).
2. Fare clic sui punti della tratta. Ogni angolo riceve una curva. Premere Invio per terminare.
3. Per diramare, avviare la tratta successiva sulla prima: il clic si sposta sulla sua mezzeria e vi viene inserito un raccordo a T.
4. Digitare {{cmd:VALVE}} e fare clic su una tratta per inserirvi una valvola.
5. Digitare {{cmd:PIPESCHED}} e fare clic dove va l'abaco.

## File apribili ovunque

Una tratta di tubazione viene salvata come riferimento a blocco con il suo disegno all'interno, e i suoi dati vengono conservati con essa sotto il nome dell'applicazione `CC_PIPING`; lo stesso vale per un simbolo. Le tubazioni salvate come DWG o DXF si aprono in qualsiasi programma CAD come disegnate, e in CadCraft senza il componente aggiuntivo, senza perdite. I suoi solidi sono normali gruppi 3D sulla scheda {{ui:3D}}.
