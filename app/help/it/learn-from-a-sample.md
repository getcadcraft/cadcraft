---
title: Imparare da un disegno di esempio
summary: Aprire la casa di esempio o l'esempio come costruito di CadCraft e scorrerne le tavole, il cartiglio, le quote e i layer.
keywords: esempio, esempi, disegno di esempio, imparare, tutorial, guida passo passo, cartiglio, tavole, come costruito, set architettonico, aprire un esempio
from: aa1f960a
---

## Cosa si impara

Come è costruito un set finito: spazio modello, tavole con viewport in scala, un cartiglio con attributi, quote in piedi e
pollici e in millimetri, layer. Gli esempi sono di CadCraft e liberi per qualsiasi uso (CC0).

## Aprire un esempio

1. Nel pannello a sinistra, sotto {{ui:Disegno}}, fare clic su {{ui:Apri un esempio}} (oppure digitare {{cmd:SAMPLES}}; negli
   stili con barra multifunzione si trova nel menu {{ui:File}}).
2. Fare clic su {{ui:Apri}} accanto a {{ui:Casa di esempio}}. Si apre in una scheda propria, quindi il lavoro in corso resta aperto.

## Esplorare il modello

1. Fare clic su {{ui:Estensione}} (oppure digitare `ZOOM`, poi `E`): la pianta, il prospetto anteriore, una sezione e un dettaglio di muro.
2. In {{ui:Layer}}, fare clic sull'occhio accanto a `A-ANNO-DIMS` per nascondere le quote, e di nuovo per mostrarle.
3. Fare clic su una porta: Proprietà mostra un riferimento a blocco di `DOOR-32`. Porte e finestre sono blocchi, inseriti ruotati e specchiati.

## Le tavole

1. Fare clic su {{ui:A-101 FLOOR PLAN}} sotto il disegno: una tavola ARCH D con un viewport in scala 1/4" = 1'-0".
2. Fare doppio clic dentro il viewport per lavorare sul modello attraverso di esso; doppio clic fuori per tornare indietro.
3. {{ui:A-501 DETAILS}} mostra il dettaglio di muro in scala 1 1/2" = 1'-0": lo stesso modello, un'altra scala.

## Il cartiglio

1. Su una qualsiasi tavola, fare doppio clic sul cartiglio: {{ui:Modifica attributi}} elenca PROJECT, TITLE, SCALE, DATE, DRAWN e SHEET.
2. Cambiare DRAWN con le proprie iniziali e fare clic su {{ui:OK}}.
3. Per modificare il cartiglio stesso su ogni tavola, selezionarlo e scegliere {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica sul posto}}.
   Vedere [Attributi](topic:attributes).

## Il come costruito

Aprire {{ui:Esempio come costruito}} allo stesso modo. I punti grigi su `SCAN-SLICE` sono una fetta di una scansione; i muri su `AB-WALL` sono
stati tracciati sopra di essi. Il muro est è fuori squadra di 35 mm: le quote lo dicono due volte, in millimetri (`AB-DIMS-MM`) e in piedi
e pollici (`AB-DIMS-FTIN`, le stesse lunghezze attraverso una scala di misura). Le nuvole rosse su `REV-1` segnano ciò che il rilievo ha trovato.

## Avanti

- [Cambiare la dimensione del testo delle quote](topic:change-dimension-text-size)
- [Stampa in PDF](topic:plot-pdf): stampare {{ui:A-101 FLOOR PLAN}}.
