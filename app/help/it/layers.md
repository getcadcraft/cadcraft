---
title: Organizzare un disegno con i layer
summary: Creare layer per muri, porte e note, impostare i colori, rendere corrente un layer, e spegnere, congelare, bloccare o escludere dalla stampa i layer.
keywords: layer, la, layer corrente, congela, scongela, blocca, spegni, accendi, stampa, non stampare, colore, colour, proprietà del layer, layiso, layuniso, isola, layoff, layfrz, laymcur, layon, laythw, rinomina, laymrg, unisci, laydel, elimina layer
from: ba9f0617
---

## Cosa si crea

Tre layer, Muri, Porte e Note, ciascuno con il proprio colore, con oggetti disegnati su ciascuno e spostati tra di essi.

## Il pannello Layer

I layer si trovano nel pannello a sinistra, sotto {{ui:Layers}}. Ogni riga mostra, da sinistra a destra:

- un punto: pieno per il layer **corrente**, dove vanno i nuovi oggetti;
- un campione di colore;
- il nome del layer;
- quattro pulsanti: acceso/spento (occhio), congela (fiocco di neve), blocca (lucchetto) e stampa (stampante).

Ogni disegno ha un layer chiamato `0`. Digitare `LA` e premere {{key:Enter}} porta al pannello.

## Creare layer

1. Fare clic su {{ui:New layer}} sopra l'elenco. Si apre una casella per il nome.
2. Digitare `Muri` e premere {{key:Enter}} (oppure fare clic su {{ui:Add}}).

La barra di stato dice "Layer Muri aggiunto e reso corrente." Il nuovo layer ha il colore 7 (nero sul tema chiaro, bianco su quello scuro).

3. Fare di nuovo clic su {{ui:New layer}}, digitare `Porte` e premere {{key:Enter}}.
4. Fare di nuovo clic su {{ui:New layer}}, digitare `Note` e premere {{key:Enter}}.

Note è ora corrente.

## Dare un colore a ogni layer

1. Fare clic sul campione di colore nella riga di Muri. Si apre il selettore colore del sistema.
2. Scegliere un colore e confermare.

Il campione e tutto ciò che è su Muri colorato {{ui:By layer}} cambiano.

:::note
Un colore scelto che corrisponde a uno dei 255 colori CAD standard viene memorizzato come quel numero. Ogni altro colore viene conservato esattamente in CadCraft, ma nel file DWG o DXF viene salvato come il colore standard più vicino.
:::

## Disegnare su un layer

1. Fare clic sul nome **Muri** nell'elenco. Il suo punto si riempie e la barra di stato dice "Layer corrente: Muri".
2. Disegnare un rettangolo (`REC`). Va su Muri.
3. Fare clic su **Porte**, e disegnare un arco (`A`). Va su Porte.

Si può anche scegliere il layer corrente in {{ui:Current settings}} a destra (nessuna selezione), sotto {{ui:Layer}}.

## Spostare oggetti su un altro layer

1. Selezionare gli oggetti.
2. Nel pannello di destra, scegliere il nuovo layer in {{ui:Layer}}.

Passano a quel layer e assumono il suo colore, se il loro colore è {{ui:By layer}}.

## Spegnere, congelare, bloccare e stampare

| Pulsante | Cosa fa |
|---|---|
| Acceso/spento (occhio) | Nasconde gli oggetti del layer. Non si vedono, non si selezionano e non si agganciano. |
| Congela (fiocco di neve) | Stesso effetto dello spegnimento in CadCraft. Tenuto separato perché gli altri programmi li trattano in modo diverso, e l'impostazione viene salvata. |
| Blocca (lucchetto) | Gli oggetti restano visibili e si può agganciarsi a essi, ma non si possono selezionare né modificare. Utile per uno sfondo su cui si ricalca. |
| Stampa (stampante) | Quando è premuto, il layer è mostrato a schermo ma **escluso dalle stampe** e dai PDF. Usarlo per linee di costruzione e note personali. |

Passando il mouse su un pulsante si vede cosa farà ("Spegni", "Congela", "Blocca", "Non stampare questo layer").

Non si può spegnere il layer corrente: la barra di stato dice "Questo è il layer corrente. Rendere prima corrente un altro layer." Fare clic sul nome di un layer per renderlo corrente lo accende e lo scongela anche.

Ogni modifica dei layer, nel pannello o con un comando, è un solo passo di annullamento: {{key:Mod+Z}} la riporta indietro.

## Lavorare sui layer indicando oggetti

Non serve conoscere il nome di un layer: indicare un oggetto che vi si trova. Digitare il comando, oppure aprire {{ui:Tools}} in cima al pannello {{ui:Layers}}.

| Comando | Cosa fa |
|---|---|
| {{cmd:LAYISO}} | Selezionare oggetti, premere {{key:Enter}}: restano accesi solo i loro layer, ogni altro layer viene spento. Se il layer corrente è spento, uno dei layer isolati diventa corrente. |
| {{cmd:LAYUNISO}} | Riaccende i layer che l'ultimo {{cmd:LAYISO}} aveva spento, e restituisce il layer corrente che aveva cambiato. |
| {{cmd:LAYOFF}} | Fare clic su oggetti uno dopo l'altro: il layer di ciascuno viene spento. Digitare `U` per riprendere l'ultimo, {{key:Enter}} per terminare. |
| {{cmd:LAYFRZ}} | Lo stesso, ma congela ciascun layer. |
| {{cmd:LAYMCUR}} | Fare clic su un oggetto: il suo layer diventa corrente (e viene acceso e scongelato). Se un oggetto è già selezionato, si usa quello. |
| {{cmd:LAYON}} | Accende tutti i layer. |
| {{cmd:LAYTHW}} | Scongela tutti i layer. |

Il layer corrente non viene mai spento o congelato in questo modo: la cronologia lo dice, e si può rendere prima corrente un altro layer con {{cmd:LAYMCUR}}. Indicando un riferimento a blocco si usa il layer del riferimento stesso.

## Rinominare, unire ed eliminare layer

- {{cmd:RENAME}}: digitare `LA`, il vecchio nome e il nuovo. Ogni oggetto del layer lo segue. (`B` rinomina un blocco allo stesso modo, con ogni suo riferimento.)
- {{cmd:LAYMRG}}: fare clic su un oggetto di ciascun layer da unire (oppure digitare `N` e un nome), premere {{key:Enter}}, poi indicare il layer di destinazione e rispondere `Y`. Gli oggetti passano alla destinazione — nel modello, nelle tavole e dentro i blocchi — e i layer uniti scompaiono.
- {{cmd:LAYDEL}}: indicare un oggetto del layer (oppure `N` e il suo nome) e rispondere `Y`. Il layer scompare **con ogni oggetto che contiene**, ovunque. Il layer 0, DEFPOINTS e il layer corrente non si possono eliminare.

Ciascuno è un solo passo di annullamento. Tutti e tre si trovano in {{ui:Tools}} in cima al pannello {{ui:Layers}}.

1. Fare clic su una linea di muro, poi digitare `LAYISO` e premere {{key:Enter}}. Resta acceso solo Muri.
2. Disegnare o modificare ciò che serve su Muri.
3. Digitare `LAYUNISO` e premere {{key:Enter}}. Porte e Note tornano.

## Errori comuni

- **Le nuove linee sono finite sul layer sbagliato.** Controllare quale punto è pieno prima di disegnare. Un nuovo layer diventa corrente appena lo si aggiunge.
- **Un oggetto non si seleziona.** Il suo layer è bloccato, spento o congelato.
- **Il layer viene ancora stampato in un altro programma.** DXF R12 non può memorizzare "non stampare". CadCraft conserva l'impostazione per sé quando il disegno ha una tavola, ma gli altri programmi stamperanno quel layer.
- **Nomi dei layer in maiuscolo dopo il salvataggio.** DXF R12 memorizza i nomi in maiuscolo, quindi `Muri` torna come `MURI`, e gli spazi diventano `_`. Un DWG salvato conserva i nomi come sono stati digitati.
- **Rinominare, unire o eliminare un layer.** Usare {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (anche in {{ui:Tools}}): vedere sotto.

## Raggruppare i layer

Per tenere corto l'elenco, si mettono i layer in cartelle, come Esistenti, Di progetto e Impianti. Ogni cartella si ripiega, e i suoi interruttori accendono o spengono tutti i suoi layer, li congelano o li bloccano insieme. Il layer corrente non viene mai spento.

In {{ui:Tools}} sul pannello Layer, scegliere {{ui:Add ready-made groups}} per un insieme pensato per piccoli lavori residenziali, {{ui:Group by name}} per raggruppare layer che condividono un prefisso (`E-Muri`, `E-Porte`), oppure {{ui:New group}}. Trascinare un layer su una cartella, oppure usare l'elenco sopra i layer per il layer corrente. Digitare in {{ui:Find a layer}} per restringere l'elenco. `LAYGROUP` (`LG`) fa lo stesso nella riga di comando.

Per rinominare un gruppo, fare doppio clic sul suo nome (oppure selezionarlo e premere {{key:F2}}), digitare il nuovo nome e premere {{key:Enter}}; {{key:Esc}} conserva il vecchio, e {{cmd:UNDO}} lo ripristina. {{ui:New group}} si trova in {{ui:Tools}} sul pannello Layer.

I layer in sé non cambiano, quindi gli altri programmi CAD li vedono come un elenco piatto ordinario. CadCraft conserva i gruppi nel file.
