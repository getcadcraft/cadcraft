---
title: "Politiche predefinite: impostare con cosa inizia un nuovo disegno"
summary: Stabilire una volta quali unità, formato delle lunghezze, precisione, altezza del testo e carta del foglio inizia un nuovo disegno, per lavori metrici e imperiali, e condividere le politiche in ufficio con un piccolo file.
keywords: predefinito, predefiniti, politiche predefinite, politica, standard di ufficio, predefiniti di ufficio, modello, nuovo disegno, unità, insunits, formato delle lunghezze, architettura, precisione, luprec, altezza del testo, carta del foglio, a1, condividi, esporta, importa, json
from: 7b80fd13
---

## Obiettivo

Indicare a CadCraft con cosa deve iniziare un nuovo disegno, così nessuno in ufficio deve eseguire UNITS e cambiare ogni volta le stesse cose. È un add-on: resta disattivato finché non viene attivato, e una politica che non viene impostata lascia il valore predefinito di CadCraft esattamente com'è.

:::note
Sono predefiniti per i **nuovi** disegni e per i **nuovi** fogli. Un disegno già avviato non viene modificato, e nemmeno un disegno che si apre.
:::

## Passaggi

1. Aprire Impostazioni, andare su {{ui:Add-on}} e attivare {{ui:Politiche predefinite}}.
2. In Impostazioni, aprire la scheda **CadCraft** e scegliere {{ui:Politiche predefinite}} nell'elenco a sinistra.
3. Impostare le politiche desiderate. Ognuna parte dal valore predefinito di CadCraft. Una politica con una casella **Metrico** e una **Imperiale** accetta un valore per ogni tipo di disegno; compilare solo quelle che servono.
4. Non c'è un pulsante Salva: ogni modifica viene salvata appena viene fatta.
5. Avviare un nuovo disegno. Avrà le unità, il formato delle lunghezze, la precisione e l'altezza del testo impostati, e il suo primo nuovo foglio sarà sulla carta scelta.

## Le politiche

- **Unità di un nuovo disegno**: nessuna, millimetri, centimetri, metri, pollici o piedi.
- **Formato delle lunghezze** e **Precisione delle lunghezze**: ciò che imposta il comando UNITS, per un nuovo disegno.
- **Altezza del nuovo testo**, nelle unità di disegno.
- **Carta di un nuovo foglio**: la carta usata da Nuovo foglio.
- **Dimensioni delle annotazioni su carta** (Impostazioni › Globale › Politiche predefinite): le altezze dell'ufficio in millimetri, come stampate. CadCraft usa quella per note ed etichette: {{cmd:ANNOSCALE}} imposta l'altezza con cui inizia il nuovo testo, con quell'altezza alla scala di annotazione. Vedi [Unità, carte e scale](topic:units-papers-scales#annotate-by-scale).

Un disegno in pollici o piedi usa i valori Imperiali; qualunque altro disegno usa quelli Metrici. Un disegno senza unità usa il sistema di unità impostato in Impostazioni › Globale › Politiche predefinite, oppure Metrico se non ne è impostato nessuno.

## Condividerle in ufficio

1. In Impostazioni, aprire la scheda **Globale** e scegliere {{ui:Politiche predefinite}}.
2. Fare clic su {{ui:Salva in un file}}. Si ottiene un piccolo file che termina con `.ccdefaults.json`.
3. Su un altro computer, attivare l'add-on, aprire lo stesso punto e fare clic su {{ui:Carica da un file}}. Le politiche del file sostituiscono quelle di quel computer.

Un solo file contiene le politiche di ogni app di CadCraft, quindi lo stesso file funziona anche in BimCraft.

## Da sapere

- Non esiste una politica per la scala di un foglio: la vista di un nuovo foglio viene adattata al disegno, e la sua scala si imposta sul foglio.
- Non esiste una politica per lo stile di quotatura: un nuovo disegno non ha stili di quotatura con nome. Impostare le quote con DIMSTYLE, oppure partire da un disegno che li contiene.
- Il file è JSON semplice e leggibile. Una politica che il file nomina ma questa versione non conosce viene esclusa e segnalata nel messaggio; il resto viene caricato comunque.
- Le politiche sono conservate in questo browser, non nel disegno. Disattivando l'add-on, tutto torna quello di CadCraft.
