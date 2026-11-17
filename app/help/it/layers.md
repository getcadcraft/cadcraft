---
title: Organizzare un disegno con i layer
summary: Creare layer per muri, porte e note, impostare i colori, rendere un layer corrente e spegnere, congelare, bloccare o escludere i layer dalla stampa.
keywords: layer, la, layer corrente, congela, scongela, blocca, spento, acceso, stampa, non stampare, colore, proprietà dei layer, layiso, layuniso, isola, layoff, layfrz, laymcur, layon, laythw, rinomina, laymrg, unisci, laydel, elimina layer
from: cd033591
---

## Cosa si realizza

Tre layer, Walls, Doors e Notes, ciascuno con il proprio colore, con oggetti disegnati su ciascuno e spostati tra di essi.

## Il pannello Layers

I layer si trovano nel pannello a sinistra, sotto {{ui:Layers}}. Ogni riga mostra, da sinistra a destra:

- un punto: pieno per il layer **corrente**, dove vanno i nuovi oggetti;
- un campione di colore;
- il nome del layer;
- quattro pulsanti: acceso/spento (occhio), congela (fiocco di neve), blocca (lucchetto) e stampa (stampante).

Ogni disegno ha un layer chiamato `0`. Digitare `LA` e premere {{key:Enter}} porta al pannello.

## Creare layer

1. Fare clic su {{ui:Nuovo layer}} sopra l'elenco. Si apre una casella del nome.
2. Digitare `Walls` e premere {{key:Enter}} (oppure fare clic su {{ui:Aggiungi}}).

La barra di stato indica "Layer Walls aggiunto e reso corrente." Il nuovo layer riceve il colore 7 (nero con il tema chiaro, bianco con quello scuro).

3. Fare di nuovo clic su {{ui:Nuovo layer}}, digitare `Doors` e premere {{key:Enter}}.
4. Fare di nuovo clic su {{ui:Nuovo layer}}, digitare `Notes` e premere {{key:Enter}}.

Notes è ora corrente.

## Assegnare un colore a ciascun layer

1. Fare clic sul campione di colore della riga Walls. Si apre il selettore colori del sistema.
2. Scegliere un colore e confermare.

Cambiano il campione e tutto ciò che su Walls è colorato {{ui:Per layer}}.

:::note
Un colore scelto che corrisponde a uno dei 255 colori CAD standard viene memorizzato come quel numero. Ogni altro colore viene conservato esattamente in CadCraft, ma nei file DWG o DXF viene salvato come il colore standard più vicino.
:::

## Disegnare su un layer

1. Fare clic sul nome **Walls** nell'elenco. Il suo punto si riempie e la barra di stato indica "Layer corrente: Walls".
2. Disegnare un rettangolo (`REC`). Va su Walls.
3. Fare clic su **Doors** e disegnare un arco (`A`). Va su Doors.

È possibile anche scegliere il layer corrente in {{ui:Impostazioni correnti}} a destra (nessun oggetto selezionato), sotto {{ui:Layer}}.

## Spostare oggetti su un altro layer

1. Selezionare gli oggetti.
2. Nel pannello di destra, scegliere il nuovo layer in {{ui:Layer}}.

Vengono spostati su quel layer e assumono il suo colore se il loro colore è {{ui:Per layer}}.

## Spegnere, congelare, bloccare e stampare

| Pulsante | Funzione |
|---|---|
| Acceso/spento (occhio) | Nasconde gli oggetti del layer. Non possono essere visti, selezionati né agganciati. |
| Congela (fiocco di neve) | Stesso effetto dello spegnimento in CadCraft. Tenuto separato perché gli altri programmi li trattano diversamente, e l'impostazione viene salvata. |
| Blocca (lucchetto) | Gli oggetti restano visibili e si può agganciarli, ma non possono essere selezionati né modificati. Utile per uno sfondo su cui si ricalca. |
| Stampa (stampante) | Quando è premuto, il layer è visibile sullo schermo ma **escluso dalle stampe** e dai PDF. Usarlo per linee di costruzione e note personali. |

Passare sopra un pulsante per vedere cosa farà ("Spegni", "Congela", "Blocca", "Non stampare questo layer").

Non è possibile spegnere il layer corrente: la barra di stato indica "Questo è il layer corrente. Prima rendere corrente un altro layer." Fare clic sul nome di un layer per renderlo corrente lo accende anche e lo scongela.

Ogni modifica dei layer, dal pannello o con un comando, è un solo passo di annullamento: {{key:Mod+Z}} lo ripristina.

## Lavorare sui layer selezionando oggetti

Non serve conoscere il nome di un layer: selezionare un oggetto che vi appartiene. Digitare il comando, oppure aprire {{ui:Strumenti}} in alto nel pannello {{ui:Layers}}.

| Comando | Funzione |
|---|---|
| {{cmd:LAYISO}} | Selezionare oggetti, premere {{key:Enter}}: restano accesi solo i loro layer, tutti gli altri layer vengono spenti. Se il layer corrente viene spento, uno dei layer isolati diventa corrente. |
| {{cmd:LAYUNISO}} | Riaccende i layer spenti dall'ultimo {{cmd:LAYISO}} e ripristina il layer corrente che aveva modificato. |
| {{cmd:LAYOFF}} | Fare clic sugli oggetti uno dopo l'altro: il layer di ciascuno viene spento. Digitare `U` per annullare l'ultimo, {{key:Enter}} per terminare. |
| {{cmd:LAYFRZ}} | Lo stesso, congelando ciascun layer. |
| {{cmd:LAYMCUR}} | Fare clic su un oggetto: il suo layer diventa corrente (e viene acceso e scongelato). Con un oggetto già selezionato, si usa quello. |
| {{cmd:LAYON}} | Accende tutti i layer. |
| {{cmd:LAYTHW}} | Scongela tutti i layer. |

Il layer corrente non viene mai spento o congelato in questo modo: la cronologia lo segnala, e prima è possibile rendere corrente un altro layer con {{cmd:LAYMCUR}}. Selezionare un riferimento a blocco usa il layer del riferimento stesso.

## Rinominare, unire ed eliminare layer

- {{cmd:RENAME}}: digitare `LA`, il vecchio nome e il nuovo. Ogni oggetto del layer lo segue. (`B` rinomina un blocco allo stesso modo, con tutti i suoi riferimenti.)
- {{cmd:LAYMRG}}: fare clic su un oggetto di ciascun layer da unire (oppure digitare `N` e un nome), premere {{key:Enter}}, poi selezionare il layer di destinazione e rispondere `Y`. Gli oggetti passano alla destinazione — nel modello, nelle tavole e all'interno dei blocchi — e i layer uniti vengono eliminati.
- {{cmd:LAYDEL}}: selezionare un oggetto sul layer (oppure `N` e il suo nome) e rispondere `Y`. Il layer viene eliminato **insieme a tutti gli oggetti che contiene**, ovunque. Il layer 0, DEFPOINTS e il layer corrente non possono essere eliminati.

Ciascuna è un solo passo di annullamento. Tutte e tre si trovano in {{ui:Strumenti}} in alto nel pannello {{ui:Layers}}.

1. Fare clic su una linea di muro, poi digitare `LAYISO` e premere {{key:Enter}}. Resta acceso solo Walls.
2. Disegnare o modificare ciò che serve su Walls.
3. Digitare `LAYUNISO` e premere {{key:Enter}}. Doors e Notes tornano visibili.

## Errori comuni

- **Le nuove linee sono finite nel layer sbagliato.** Controllare quale punto è pieno prima di disegnare. Un nuovo layer diventa corrente appena viene aggiunto.
- **Un oggetto non si seleziona.** Il suo layer è bloccato, spento o congelato.
- **Il layer viene ancora stampato in un altro programma.** Il DXF R12 non può memorizzare "non stampare". CadCraft conserva l'impostazione per sé quando il disegno ha una tavola, ma gli altri programmi stamperanno quel layer.
- **Nomi dei layer in maiuscolo dopo il salvataggio.** Il DXF R12 memorizza i nomi in maiuscolo, quindi `Walls` ritorna come `WALLS`, e gli spazi diventano `_`. Un DWG salvato mantiene i nomi come sono stati digitati.
- **Rinominare, unire o eliminare un layer.** Usare {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (anche in {{ui:Strumenti}}): vedere sotto.

## Raggruppare i layer

Mantenere breve l'elenco inserendo i layer in cartelle, come Existing, Proposed e Services. Ogni cartella si chiude, e i suoi interruttori accendono o spengono tutti i suoi layer, li congelano o li bloccano insieme. Il layer corrente non viene mai spento.

In {{ui:Strumenti}} nel pannello {{ui:Layers}}, scegliere {{ui:Aggiungi gruppi predefiniti}} per un insieme pensato per piccoli lavori residenziali, {{ui:Raggruppa per nome}} per raggruppare i layer che hanno lo stesso prefisso (`E-Walls`, `E-Doors`), oppure {{ui:Nuovo gruppo}}. Trascinare un layer su una cartella, oppure usare l'elenco sopra i layer per il layer corrente. Digitare in {{ui:Trova un layer}} per restringere l'elenco. `LAYGROUP` (`LG`) fa lo stesso dalla riga di comando.

I layer in sé non cambiano, quindi gli altri programmi CAD li vedono come un normale elenco piatto. CadCraft conserva i gruppi nel file.
