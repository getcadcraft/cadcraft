---
title: Registrare più scansioni in una sola
summary: Posizionare scansioni prese da punti diversi in un unico sistema tramite coppie di punti scelti o target digitati, affinarle con ICP, salvare la registrazione come progetto ed esportare la nuvola registrata in LAS o E57. Il comando è REGISTERSCANS.
keywords: registrazione, registrare, scansioni, nuvola di punti, icp, iterative closest point, target, coppie di punti, trasformazione rigida, allineare, unire, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Cosa si ottiene

Più scansioni dello stesso luogo (ciascuna presa da una propria posizione dello scanner) iniziano nelle proprie coordinate. Registrarle significa assegnare a ogni scansione un solo posizionamento, in modo che stiano tutte in un unico sistema, poi salvare il risultato come progetto ed esportare la nuvola registrata in un unico file LAS o E57.

## Posizionare le scansioni

1. Aprire la finestra digitando `REGISTERSCANS` (o `REGSCAN`). {{ui:Aggiungi scansioni…}} accetta file LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, oppure trascinarli sulla finestra. Le scansioni con unità diverse vengono rifiutate con una nota: convertirne prima una.
2. Scegliere {{ui:Scansione da spostare}} e {{ui:Posiziona rispetto a}}. L'immagine mostra ogni scansione nel sistema così com'è ora, con un colore per ciascuna: {{ui:Pianta}}, {{ui:Fronte}} o {{ui:Lato}}; trascinare per spostare la vista, usare la rotellina per lo zoom.
3. **Per coppie di punti.** Fare clic su {{ui:Scegli una coppia}}, poi su un punto della scansione da spostare, poi sullo stesso punto in un'altra scansione (un angolo, un target, il piede di un pilastro). Farlo almeno tre volte, con punti non allineati e distanziati tra loro. Fare clic su {{ui:Posiziona per coppie}}: la scansione viene posizionata con un adattamento ai minimi quadrati, e **Residuo** mostra di quanto ogni coppia manca ancora. Una coppia con un numero grande indica una scelta sbagliata: rimuoverla con la croce e posizionare di nuovo.
4. **Per target.** Se sono note le coordinate reali di un punto (target rilevati), fare clic su {{ui:Scegli, poi digita l'obiettivo}}, fare clic sul punto nella sua scansione e digitare X, Y e Z del target nella riga. Coppie e target digitati si possono mescolare liberamente.

## Affinare con ICP

Le coppie danno un posizionamento grezzo. {{ui:Affina}} sposta la scansione finché le sue superfici non coincidono con quelle dell'altra: prima **punto a punto**, poi **punto a piano**. La tabella elenca ogni passo con il suo errore e quanti punti sono stati abbinati; la linea sopra mostra la discesa dell'errore. {{ui:Stop}} termina l'elaborazione dopo il passo in corso e conserva quanto raggiunto. {{ui:Annulla}} annulla l'intera elaborazione (o l'ultimo posizionamento); {{ui:Ripristina}} riporta la scansione alle sue coordinate nel file.

Per mantenere il lavoro rapido su un portatile, ICP lavora su una quota ridotta dei punti ({{ui:Punti usati}}, da 5.000 a 60.000) e ignora le corrispondenze oltre {{ui:Massima distanza di corrispondenza}} (per impostazione predefinita il 5% della dimensione della scansione, che si riduce man mano che l'elaborazione si stabilizza). Serve prima un posizionamento grezzo: scansioni che si sovrappongono appena segnalano di non poter essere abbinate. Superfici soltanto piane o soltanto rettilinee non possono correggere la propria posizione lungo sé stesse: in quel caso aggiungere coppie.

## Salvare ed esportare

- {{ui:Salva progetto}} scrive un piccolo file `.ccscans.json`: nome e dimensione di ogni scansione, un'impronta dei suoi primi 64 KB, con la sua trasformazione. Non contiene punti. {{ui:Apri progetto…}} ritrova i file di scansione tramite questi riferimenti (i file devono essere stati aggiunti prima) e ripristina ogni trasformazione.
- {{ui:Esporta LAS}} ed {{ui:Esporta E57}} scrivono un unico file con ogni scansione nella sua posizione registrata. I punti negli originali non vengono mai riscritti: la trasformazione viene applicata in uscita. Con {{ui:Leggi ogni punto dai file}} attivo, ogni file viene riletto per ogni punto (fino a 20 milioni per scansione); disattivato, vengono scritti solo i punti visualizzati nel visualizzatore.
- {{ui:Mostra la nuvola registrata}} (CadCraft) scrive il LAS e lo collega sotto il disegno alle sue coordinate, come qualsiasi nuvola.

:::note
Nulla viene caricato. La registrazione lavora nelle unità dei file e mantiene i millimetri: un LAS viene scritto con una scala adatta (fino a 0.1 mm), un E57 con valori double. Un sistema di coordinate viene riportato nel LAS solo quando ogni scansione indica lo stesso codice EPSG. Il writer E57 è nostro; è verificato rileggendo i suoi file con questo lettore e con libE57Format.
:::
