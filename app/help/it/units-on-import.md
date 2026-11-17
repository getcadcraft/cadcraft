---
title: Unità all'importazione: un file dichiara le sue unità, oppure viene chiesto prima
summary: Quando un file che si porta in un disegno dichiara le sue unità, CadCraft le converte e lo indica. Quando non le dichiara, CadCraft chiede prima di inserire qualsiasi cosa e ricorda la risposta per quel file.
keywords: unità, importazione, inserisci, riferimento esterno, collega, XATTACH, INSERT, OBJ, DWG, DXF, nuvola di punti, elemento della libreria, millimetri, metri, pollici, piedi, scala, dimensione errata, troppo grande, troppo piccolo, 1000 volte, chiedi, ricordato, INSUNITS
from: 558f1293
---

## Cosa si fa

Portare un file in un disegno e assicurarsi che entri nella dimensione giusta.

## Passi

1. Portare il file come al solito: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH`, oppure {{ui:File}} nel pannello Libreria.
2. Se il file dichiara le sue unità, non viene chiesto nulla. La riga di comando indica quali unità dichiara il file, e la scala usata quando sono diverse da quelle del disegno.
3. Se non le dichiara, una finestra di dialogo chiede le **Unità del file**. Scegliere quanto vale un'unità nel file e fare clic su {{ui:Usa queste unità}}. Non si inserisce nulla prima della risposta.
4. {{ui:Annulla}} (oppure {{key:Esc}}) non porta dentro nulla.

## Quali file dichiarano le unità

- **DWG e DXF**: le unità di inserimento del disegno (`$INSUNITS`). Per un file senza di esse viene chiesto.
- **Nuvole di punti**: LAS e LAZ con un sistema di coordinate, E57, PTX e PLY dichiarano le loro. Per gli altri viene chiesto.
- **OBJ**: non dichiara mai le unità. Viene chiesto.
- **glTF e GLB**: metri, per la regola del formato stesso.
- **Immagini**: non hanno una dimensione propria. `IMAGEATTACH` chiede la larghezza, e propone la larghezza data prima a quel file.
- **Scansioni**: una scansione che dichiara la sua densità (punti per pollice) entra alla sua dimensione reale nelle unità del disegno; `SCANATTACH` chiede comunque la larghezza.
- **L'add-on Point clouds**: chiede quando si costruisce una nuvola il cui file non dichiara alcuna unità, ed etichetta i numeri della nuvola con l'unità che porta.

## Note utili

- Aprire un DWG o un DXF come disegno proprio non chiede nulla: la riga di comando indica quali unità dichiara il file, oppure che non ne dichiara nessuna. {{ui:Proprietà}} imposta le unità di un disegno.
- Se anche questo disegno non ha unità, un file non può essere convertito: viene posizionato numero per numero e la riga di comando lo indica.
- La risposta viene ricordata per quel file su questo computer, in tutte le app di CadCraft. La volta successiva che entra non viene chiesto nulla, e la riga di comando dice che sono state usate le unità ricordate.
- Per essere chiesti di nuovo: la palette dei comandi ({{key:Mod+K}}) › **Chiedi di nuovo le unità dei file importati**.
