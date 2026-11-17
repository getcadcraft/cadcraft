---
title: Set di tavole
summary: Raccogliere tavole da molti disegni in un unico elenco numerato, compilare i loro cartigli dal set, pubblicarle come un unico PDF e archiviare il set come zip.
keywords: set di tavole, gestore set di tavole, ssm, sheetset, ccsheets, dst, elenco tavole, indice tavole, cartiglio, campi, pubblica, rinumera, archivia, etransmit, transmittal, sottoinsiemi, tavola di copertina, elenco disegni
from: 2c855720
---

## Cosa si impara

Come raccogliere tavole (layout) da più file di disegno in un **set di tavole**, numerarle e intitolarle, far compilare automaticamente i loro cartigli, pubblicare l'intero set come un unico PDF e comprimere tutto in un unico zip da inviare.

Un set di tavole vive in un proprio piccolo file, `<name>.ccsheets`, nella cartella che contiene i disegni. Il file del set elenca le tavole con percorsi a partire da quella cartella, quindi si può spostare o copiare l'intera cartella.

:::note
Per aprire una cartella in lettura e scrittura servono Chrome o Edge (possono permettere a una pagina di lavorare in una cartella scelta), oppure l'app desktop. Altri browser aprono il set in sola lettura: si può consultarlo e pubblicarlo, e il file del set viene scaricato invece di essere salvato.
:::

## Avviare un set

1. Trovare la sezione {{ui:Set di tavole}} nel pannello sinistro, e aprire il suo menu {{ui:Set}}. Digitare {{cmd:SHEETSET}} (o `SSM`) porta anche lì.
2. Scegliere {{ui:Nuovo set…}}. Dare un nome al set e, se si vuole, il nome e il numero del progetto.
3. Scegliere la cartella che contiene i disegni. Il file del set viene salvato lì.

Per aprire un set più tardi, scegliere {{ui:Apri set…}} e selezionare la stessa cartella. Se la cartella contiene più di un set, CadCraft chiede quale.

## Aggiungere tavole

1. Scegliere {{ui:Aggiungi tavole da un disegno…}} e selezionare uno dei disegni nella cartella.
2. CadCraft legge quel disegno in background (non si apre a schermo) ed elenca le sue tavole. Spuntare quelle desiderate e fare clic su {{ui:OK}}.
3. Selezionare una tavola e premere {{key:F2}} (oppure {{ui:Rinomina e rinumera…}}) per darle un numero e un titolo, come `A-101` e `Pianta del piano terra`.

{{ui:Nuova tavola da modello…}} crea un nuovo disegno dalla tavola di un altro disegno (il suo cartiglio e le sue viewport), con il nome della nuova tavola, e lo aggiunge. Il set ricorda il disegno usato come modello.

## Organizzare il set

- **Sottoinsiemi** raggruppano le tavole, come Architettura › Piante: selezionare dove va e scegliere {{ui:Nuovo sottoinsieme…}}.
- **Ordine**: trascinare una tavola in un altro punto dell'elenco, o su un sottoinsieme per spostarla lì. Con la tastiera, selezionarla e premere {{key:Alt+Up}} o {{key:Alt+Down}}.
- **Aprire una tavola**: fare doppio clic (oppure premere {{key:Enter}}). Il suo disegno si apre nella propria scheda, su quella tavola.
- **Rimuovere**: selezionarla e premere {{key:Delete}}. Il disegno stesso non viene modificato.
- **Annullare**: {{ui:Annulla modifica al set}} e {{ui:Ripristina modifica al set}} scorrono tra le modifiche fatte al set.
- **Rinumerare**: {{ui:Rinumera tavole…}} numera ogni tavola, o quelle di un sottoinsieme, nell'ordine dell'elenco: un prefisso, un inizio e un passo (`A-` e `101` danno A-101, A-102 …).

Ogni modifica viene salvata subito nel file del set.

## Numerare le tavole dai loro campi

Invece di numerare le tavole a mano, lasciare che una regola costruisca ogni numero dai campi della tavola, così una tavola che passa a un altro piano o a un'altra disciplina riceve da sola il nuovo numero.

1. Assegnare i campi a ogni tavola: selezionarla, fare clic su {{ui:Rinomina…}} e, in {{ui:Campi di questa tavola}}, scrivere uno per riga, per esempio `DISCIPLINE = A` e `LEVEL = 1`. Un campo condiviso da tutto il set (per esempio `DISCIPLINE = A`) può andare invece nelle {{ui:Proprietà…}} del set.
2. Aprire il menu del pannello e fare clic su {{ui:Regola di numerazione…}}.
3. Scrivere la regola, per esempio `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` conta progressivamente tra le tavole i cui altri campi hanno lo stesso valore, quindi il piano 1 ottiene A-101, A-102 e il piano 2 ricomincia da A-201. `{SEQ:2}` lo scrive con due cifre; `{SUBSET}` è il nome del sottoinsieme in cui si trova una tavola.
4. Scegliere cosa succede quando cambia un campo: {{ui:Rinumerare le tavole}} mantiene i numeri conformi alla regola dopo ogni modifica; l'altra scelta li numera una sola volta, adesso.

La regola viene salvata nel file del set. Mentre rinumera da sola, modificare i campi di una tavola invece del suo numero.

## Compilare i cartigli dal set

Un cartiglio riceve il suo testo dal set quando i suoi attributi sono contrassegnati con il nome di un campo:

| Tag | Cosa mostra |
|---|---|
| `SHEETNUMBER` (o `SHEET_NO`, `DWG_NO`) | Il numero della tavola |
| `SHEETTITLE` (o `TITLE`, `SHEET_TITLE`) | Il titolo della tavola |
| `SHEETDESC` | La descrizione della tavola |
| `PROJECTNAME` (o `PROJECT`) | Il nome del progetto |
| `PROJECTNUMBER` (o `PROJECT_NO`, `JOB_NO`) | Il numero del progetto |
| `SHEETSETNAME` | Il nome del set |
| `SHEETINDEX`, `SHEETCOUNT` | "3 di 12", e 12 |
| Campi propri, come `CLIENT` | Ciò che è stato scritto per esso in {{ui:Imposta i campi…}} |

{{ui:Imposta i campi…}} contiene il nome e il numero del progetto e i propri campi, uno per riga nella forma `NOME = valore`.

{{ui:Aggiorna disegni}} scrive numeri, titoli e campi nei cartigli di ogni disegno del set, e rinomina la scheda di ogni tavola come indica il set (per impostazione predefinita numero e titolo, per esempio `A-101 Pianta del piano terra`; {{ui:Imposta i campi…}} › {{ui:Nomi delle schede dei layout}} lo cambia). Ogni disegno viene salvato sul posto, nel proprio formato e versione. Dopo aver rinumerato o rinominato le tavole, eseguirlo di nuovo e schede e cartigli si aggiornano.

## Un elenco delle tavole nella tavola di copertina

Selezionare la tavola di copertina nell'elenco e scegliere {{ui:Metti l'elenco delle tavole su questa tavola}}. Una tabella di ogni tavola (numero e titolo, sotto il suo sottoinsieme) viene inserita nell'angolo in alto a sinistra della tavola. {{ui:Aggiorna disegni}} e {{ui:Pubblica in PDF}} la mantengono aggiornata. È un unico blocco, `CC_SHEETLIST`: spostarlo come qualsiasi riferimento a blocco.

## Pubblicare il set

{{ui:Pubblica in PDF}} crea un unico PDF con una pagina per tavola, nell'ordine del set, a ciascuna dimensione di carta della tavola, con un segnalibro per tavola ("A-101 — Pianta del piano terra"). Con un sottoinsieme selezionato, CadCraft chiede se pubblicare solo quel sottoinsieme. I cartigli nel PDF vengono compilati dal set anche prima di aggiornare i disegni; pubblicare non modifica i disegni. Il PDF viene scaricato.

{{ui:Pubblica in DWG…}} scrive ogni tavola come proprio DWG (DWG 2018): il modello e quella sola tavola, con il cartiglio compilato dal set, con nome derivato dal suo numero e titolo (`A-101 Pianta del piano terra.dwg`). Scegliere {{ui:DWG}}, oppure {{ui:DWG + PDF}} per avere anche il PDF del set accanto ad essi. Un `publish.json` elenca ogni file con la sua dimensione e il suo SHA-256. Quando la cartella del set è scrivibile (CadCraft Studio, oppure una cartella scelta nel browser) i file finiscono in una cartella `<nome set> - pubblicato`; altrimenti vengono scaricati come un unico zip. Le [sovrascritture di classe](topic:viewport-overrides) della viewport vengono portate in ogni DWG.

## Archiviare il set

{{ui:Archivia come zip}} impacchetta il file del set, ogni disegno che usa e ciò a cui quei disegni fanno riferimento (disegni collegati, e quelli a loro volta, e le immagini), mantenendone le cartelle, più un `Transmittal.txt` che elenca ogni file. Un collegamento che non si trova nella cartella del set viene elencato lì come mancante. I collegamenti si trovano per percorso dal disegno, poi per nome del file ovunque nella cartella.

## Il file del set

Il file `.ccsheets` è JSON leggibile con qualsiasi editor di testo:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Clinica Riverside",
  "properties": { "PROJECTNAME": "Clinica Riverside", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Piante", "sheets": [
    { "id": "p1", "file": "piante/Piano 1.dwg", "layout": "A-101 Pianta piano 1", "number": "A-101", "title": "Pianta piano 1" }
  ] } ]
}
```

I percorsi sono relativi alla cartella del set, con `/` tra le cartelle. CadCraft controlla il file all'apertura: un percorso assoluto, una tavola senza file o layout, o un testo che non è semplice vengono omessi, e la cronologia lo segnala.

## Risoluzione dei problemi

| Cosa si vede | Perché | Cosa fare |
|---|---|---|
| "Questa cartella è in sola lettura qui" | Il browser non può scrivere nella cartella | Usare Chrome o Edge, oppure l'app desktop; intanto {{ui:Scarica il file del set}} conserva le modifiche |
| Una tavola manca nel PDF: "non ha alcun layout chiamato …" | Il layout della tavola è stato rinominato o rimosso nel suo disegno | Aprire il disegno e controllarne le schede; rimuovere la tavola e aggiungerla di nuovo |
| Un cartiglio resta vuoto | I suoi attributi hanno altri tag | Rinominare i tag degli attributi con i nomi dei campi indicati sopra (BEDIT) |
| "ha già un layout chiamato … quindi la scheda non è stata rinominata" | Due tavole dello stesso disegno otterrebbero lo stesso nome di scheda | Dare a una delle due un altro numero o titolo |
