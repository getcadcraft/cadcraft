---
title: Punti per i programmi BIM
summary: Esportare punti, e i punti di inserimento dei blocchi con una descrizione, in un file CSV o TXT che i programmi BIM e di rilievo importano.
keywords: exportpoints, esporta punti, punti, csv, txt, pnezd, penzd, xyz, punti di rilievo, coordinate, bim, picchettamento, file di punti, nord, est, quota
from: d80e2d53
---

## Cosa si realizza

Un file di punti: una riga per punto, con il suo numero, nord, est, quota e descrizione, che i programmi BIM (tra cui Revit e Archicad) e i software di rilievo possono importare per posizionare punti di rilievo, riferimenti di cantiere o attrezzature.

## Esportare i punti

1. Selezionare i punti e i riferimenti a blocchi di cui si vogliono i punti di inserimento, oppure non selezionare nulla per prendere tutti i punti.
2. Digitare {{cmd:EXPORTPOINTS}} (o `EXPPTS`, oppure {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Esporta punti}}) e premere {{key:Enter}}
   (premere di nuovo {{key:Enter}} a `Selezionare punti e blocchi` quando non è stato selezionato nulla).
3. Quando sono stati scelti blocchi con attributi, CadCraft elenca i loro tag: digitare quello il cui valore è la descrizione (per esempio `ITEM`), oppure qualsiasi altro testo per usare il nome di ciascun blocco.
4. Scegliere le colonne: `PNEZD` (punto, nord, est, quota, descrizione: quello usuale), `PENZD` (est prima di nord) oppure `XYZ` (solo le coordinate).
5. Scegliere le unità: `D` come disegnato, oppure `M` metri o `F` piedi (solo quando le unità del disegno sono impostate: Proprietà › {{ui:Unità}} con nulla selezionato).
6. Con un UCS impostato, scegliere `W` globale oppure `U` coordinate UCS (vedi [UCS e una vista ruotata](topic:ucs-and-turned-view)).
7. Scegliere `C` per un `.csv` con valori separati da virgole, oppure `T` per un `.txt` con valori separati da tabulazioni, e il primo numero di punto.

Il file viene scaricato come `<drawing>-points.csv` (o `.txt`), e la cronologia dice quanti punti contiene.

## Cosa c'è nel file

- Un punto per riga, seguito da un a capo (CR LF), con tre decimali.
- La quota di un punto è la sua Z (0 se non ne ha). Il punto di un blocco è il suo punto di inserimento.
- Una descrizione che contiene una virgola (o una tabulazione in un TXT) oppure un apice viene messa tra virgolette doppie, con gli apici raddoppiati.
- Il formato è quello che CivilCraft legge e scrive, quindi il file si apre anche lì come punti.

## Errori comuni

- Per le unità viene offerta solo `D`: il disegno non ha unità impostate. Impostarle, oppure convertire nell'altro programma.
- I punti sono lontani da dove ci si aspetta nell'altro programma: esportare le coordinate globali (`W`), oppure l'UCS usato dal punto di rilievo dell'altro programma (`U`).
