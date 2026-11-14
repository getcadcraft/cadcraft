---
title: Tubazioni: disegnare tratte di tubazione
summary: Disegnare tratte di tubazione per materiale, classe e dimensione nominale, a linea singola o doppia; curve, riduzioni, raccordi a T e a Y si creano da soli.
keywords: tubo, tratta, mezzeria, nps, dn, schedule 40, schedule 80, tipo k, tipo l, tipo m, curva, riduzione, raccordo a T, raccordo a Y, derivazione, linea doppia, linea singola, quota
from: d0ed1b49
---

## Disegnare una tratta

Digitare {{cmd:PIPE}} e fare clic sui punti della mezzeria della tratta. Prima del primo punto si possono modificare:

- {{ui:Materiale}} e {{ui:Classe}} — acciaio Schedule 40 o 80, rame tipo K, L o M, PVC Schedule 40 o 80, PEX SDR 9 (vedere [Dimensioni dei tubi e loro origine](topic:piping-tables)).
- {{ui:Dimensione}} — una dimensione nominale: `2`, `1-1/2` (o `1 1/2`, `1.5`), oppure `DN50` in un disegno metrico. Una dimensione non prodotta per quel materiale viene rifiutata. Cambiare la dimensione tra un punto e l'altro crea una riduzione.
- {{ui:Sistema}} — acqua fredda domestica, acqua calda, ritorno di acqua calda, acque nere, ventilazione, acque meteoriche, acqua refrigerata, acqua calda per riscaldamento, gas naturale, protezione antincendio o altro. Ognuno ha un proprio layer, una propria etichetta e un proprio colore 3D.
- {{ui:Quota}} — la quota della mezzeria all'inizio.
- {{ui:Pendenza}} — per gli scarichi (vedere [Scarico e pendenza](topic:piping-drainage)).
- {{ui:Linee}} — linea singola (la mezzeria, con simboli) o linea doppia (il diametro esterno del tubo in scala).
- {{ui:Etichetta}} — un nome come `CW-1`, mostrato sull'etichetta.

## I raccordi che crea

- **Curve** a ogni svolta: 90° e 45° per nome, gli altri angoli per il loro valore. Le curve in acciaio sono disegnate con la curva a grande raggio di ASME B16.9 (1.5 × la dimensione a partire da 3/4 in); le curve degli altri materiali sono disegnate con un solo diametro esterno — una scelta di disegno, non una dimensione del raccordo.
- **Riduzioni** dove la dimensione cambia, concentriche, subito dopo l'angolo.
- **Raccordi a T** dove una tratta inizia o finisce su un'altra: un raccordo a T quando incontra la linea principale a squadra (entro 15°), un raccordo a T ridotto quando è più piccola, un raccordo a Y ad angolo.

## Modificare una tratta

Trascinare il grip di un punto per spostarlo. {{ui:Proprietà}} › {{ui:Tratta di tubazione}} contiene l'etichetta, il sistema, il materiale e la classe, la dimensione (per l'intera tratta), la quota, la pendenza e le linee, e mostra il diametro esterno e interno della tratta. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} e {{cmd:ERASE}} funzionano come su qualsiasi oggetto.
