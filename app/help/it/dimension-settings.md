---
title: Impostare dimensioni, decimali e scala delle quote
summary: Scegliere altezza del testo, dimensione delle frecce, decimali e scala complessiva per le nuove quote, modificare quelle esistenti, e capire come funzionano gli stili di quotatura in CadCraft.
keywords: stile di quotatura, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, scala complessiva, decimali, dimensione della freccia, scala di annotazione, dimtextunit, unità nel testo, mm, cm, m, km, millimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Obiettivi

Quanto sono grandi il testo e le frecce delle quote, come impostarli per un disegno stampato in scala 1:50 o 1:100, e come modificare le quote già create.

## Come funzionano le dimensioni delle quote

Ogni quota porta con sé il proprio insieme di dimensioni: altezza del testo, dimensione della freccia, decimali, lo spazio intorno al testo, quanto le linee di riferimento superano la linea di quota e quanto partono lontane dall'oggetto. I valori predefiniti sono vicini allo stile ISO comune:

| Impostazione | Predefinito | Comando |
|---|---|---|
| Altezza del testo | 2.5 | {{cmd:DIMTXT}} |
| Dimensione della freccia | 2.5 | {{cmd:DIMASZ}} |
| Decimali | 2 (zeri finali eliminati) | {{cmd:DIMDEC}} |
| Spazio intorno al testo | 0.625 | {{cmd:DIMGAP}} |
| Prolungamento oltre la linea di quota | 1.25 | {{cmd:DIMEXE}} |
| Distanza dall'oggetto | 0.625 | {{cmd:DIMEXO}} |
| Scala complessiva | 1 | {{cmd:DIMSCALE}} |

Ogni dimensione viene moltiplicata per la **scala complessiva**. Impostare le dimensioni come si vogliono sulla carta (testo di 2.5 mm), e impostare la scala complessiva alla scala di stampa (50 per 1:50). Il testo è quindi alto 2.5 × 50 = 125 unità di disegno, e si stampa a 2.5 mm.

:::note
Gli stili di quotatura con nome si gestiscono con {{cmd:DIMSTYLE}}: vedi la sezione sotto. Ogni quota conserva anche le impostazioni con cui è stata creata, così è ancora possibile modificare una sola quota in {{ui:Proprietà}}.
:::

## Impostare le dimensioni per le nuove quote

Entrambi i modi qui sotto cambiano solo le quote create dopo.

### Nel pannello Impostazioni correnti

1. Premere {{key:Esc}} perché nulla sia selezionato. Nella scheda {{ui:Modello}} il pannello destro riporta {{ui:Impostazioni correnti}}.
2. Scorrere il pannello fino a {{ui:Nuove quote}}, oltre le righe di layer, colore, unità e {{ui:Layer 0}} (su uno schermo piccolo inizia sotto il bordo inferiore). Fare clic in {{ui:Scala complessiva}}, digitare `50` e premere {{key:Enter}}.
3. Impostare {{ui:Altezza testo}}, {{ui:Dimensione freccia}} e {{ui:Decimali}} allo stesso modo, se si vogliono altri valori.

La barra di stato conferma ciascuna impostazione, per esempio "Scala complessiva per le nuove quote: 50".

### Alla riga di comando

1. Digitare `DIMSCALE` e premere {{key:Enter}}.
2. Al prompt `Immettere il nuovo valore per DIMSCALE <1>`, digitare `50` e premere {{key:Enter}}.

La cronologia conferma "DIMSCALE = 50. Le nuove quote lo usano; selezionare quelle esistenti per cambiare le loro." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} e {{cmd:DIMEXO}} funzionano allo stesso modo. Premere {{key:Enter}} al prompt per mantenere il valore corrente.

### Piedi e pollici nelle quote

Le nuove quote usano il formato delle lunghezze del disegno: impostarlo con {{ui:Formato delle lunghezze}} in {{ui:Impostazioni correnti}} oppure con {{cmd:UNITS}} (vedi [Piedi e pollici](topic:units-papers-scales#feet-and-inches-and-fractions)), e la quota successiva riporta `12'-6 1/2"`. {{cmd:DIMLUNIT}} imposta solo il formato delle quote (2 decimale, 3 ingegneria, 4 architettura, 5 frazionario). Per una quota già creata, selezionarla e scegliere {{ui:Formato}} in {{ui:Proprietà}}; con un formato frazionario, la sua casella {{ui:Frazione}} accetta la potenza di due (4 = 1/16).

## Quote in mm, cm, m o km

Una quota misura nelle unità di disegno. Può scrivere quella lunghezza in millimetri, centimetri, metri o chilometri, con l'unità dopo il numero: un muro di 1250 mm è scritto `1250 mm`, `125 cm`, `1.25 m` o `0.00125 km`.

1. Impostare prima le {{ui:Unità}} del disegno in {{ui:Impostazioni correnti}} (vedi [Unità, formati carta e scale](topic:units-papers-scales#drawing-units)), così CadCraft sa quanto vale un'unità di disegno. Un disegno senza unità viene letto come millimetri, e {{cmd:DIMTEXTUNIT}} lo dice.
2. Per le nuove quote: premere {{key:Esc}} perché nulla sia selezionato, e in {{ui:Nuove quote}} scegliere {{ui:Unità nel testo}}: {{ui:Unità del disegno}}, `mm`, `cm`, `m` o `km`.
3. Per le quote già create: selezionarle, e in {{ui:Proprietà}} › {{ui:Unità primarie}} scegliere {{ui:Unità nel testo}}.

Oppure digitare {{cmd:DIMTEXTUNIT}} (`DTU`) e rispondere `D`, `MM`, `CM`, `M` o `KM`: con delle quote selezionate le cambia (un unico passo di annullamento); con nulla selezionato imposta le nuove quote.

{{ui:Decimali}} ({{cmd:DIMDEC}}) imposta ancora quante cifre decimali si vedono: con metri e 3 decimali, 1234 mm diventa `1.234 m`. Il testo è scritto come numero decimale. Su una tavola, le quote misurano nell'unità carta della tavola (millimetri o pollici).

Un DWG o DXF salvato conserva la scelta come scala di misura della quota (DIMLFAC) e come suffisso (DIMPOST, ` m`), così gli altri programmi mostrano lo stesso testo. Se si cambiano più tardi le {{ui:Unità}} del disegno, le quote scritte in mm, cm, m o km vengono riadattate, così continuano a riportare la lunghezza giusta. {{ui:Impostate a mano (scala o suffisso)}} significa che la {{ui:Scala di misura}} o il suffisso della quota sono stati impostati in altro modo; scegliere un'unità per sostituirli.

## Modificare quote già create

1. Fare clic su una quota. L'intestazione del pannello destro riporta {{ui:Quota}}.
2. Le impostazioni sono in sezioni; scorrere il pannello per raggiungere quelle successive:
   - {{ui:Generali}}: {{ui:Stile di quotatura}}
   - {{ui:Geometria}}: {{ui:Tipo}} e {{ui:Misura}} (sola lettura)
   - {{ui:Testo}}: {{ui:Testo sostitutivo}} e {{ui:Altezza testo}}
   - {{ui:Linee e frecce}}: {{ui:Dimensione freccia}}
   - {{ui:Adattamento}}: {{ui:Scala complessiva}}
   - {{ui:Unità primarie}}: {{ui:Decimali}}
3. Digitare un nuovo valore e premere {{key:Enter}}.

La quota viene ridisegnata subito. Per le quote angolari, {{ui:Decimali (°)}} imposta i decimali dell'angolo.

:::note
Con più quote selezionate, il pannello mostra le righe che hanno in comune, e un valore diverso tra loro riporta {{ui:Variabile}}. Un valore digitato cambia tutte le quote selezionate in un unico passo, quindi un {{key:Mod+Z}} le riporta tutte com'erano.
:::

## Quote da disegni aperti

Una quota da un DWG o DXF aperto viene mostrata esattamente come l'ha disegnata l'altro programma. Il suo pannello dice "Mostrata come l'ha disegnata il programma che l'ha creata. Se la si modifica, CadCraft la ridisegna nel proprio stile." Appena si cambia un valore, si sposta un grip o si sposta la quota, CadCraft la ridisegna con le proprie frecce e il proprio carattere, usando le dimensioni lette dal file.

Alcune quote possono essere solo lette come disegnate, non come quote modificabili; il pannello allora mostra "Disegnata da" e il nome di un blocco, e la casella "Informazioni su questo file" le conta.

## Errori comuni

- **Cambiare DIMSCALE non ha cambiato nulla sullo schermo.** L'impostazione vale per le nuove quote. Selezionare quelle esistenti e cambiare {{ui:Scala complessiva}} nel pannello.
- **I decimali mostrano meno cifre di quelle impostate.** Gli zeri finali vengono eliminati: con 2 decimali si vede `1250` e `1250.5`, non `1250.00`.
- **Il testo ha l'altezza giusta su carta in una viewport, ma sbagliata in una stampa del modello.** La scala complessiva deve corrispondere alla scala di stampa. Stampare con Adatta alla carta dà una scala irregolare; scegliere una scala standard nella finestra di stampa.
- **Unità come mm o m nel testo.** Scegliere {{ui:Unità nel testo}} (vedi [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Per qualsiasi altra parola dopo il numero, scriverla in un testo sostitutivo: `<> TYP.`.

## Stili di quotatura con nome

Digitare `DIMSTYLE` (`D`) per aprire {{ui:Gestione stili di quotatura}}. Elenca gli stili del disegno, quante quote usa ciascuno e quale è corrente. **Standard** c'è sempre.

- {{ui:Imposta corrente}}: le nuove quote usano le impostazioni di quello stile e ne portano il nome.
- {{ui:Nuovo…}}: un nuovo stile che parte come copia di uno a scelta.
- {{ui:Modifica…}}: gli stessi campi della sezione quote di {{ui:Proprietà}} (linee e frecce, testo, adattamento, unità, unità alternative, tolleranze). Premere {{ui:OK}} e lo stile cambia, **e ogni quota che lo usa cambia con esso**, impostazione per impostazione. Un'impostazione cambiata su una sola quota resta com'è, a meno che lo stile non cambi quella impostazione.
- {{ui:Rinomina…}} ed {{ui:Elimina}}: Standard non si può rinominare né eliminare, né si può farlo con lo stile corrente o con uno che le quote usano.
- {{ui:Confronta…}}: ciò che differisce tra due stili.
- {{ui:Applica alla selezione}}: selezionare prima le quote; prendono le impostazioni dello stile e il suo nome.

`-DIMSTYLE` fa lo stesso dalla riga di comando: `Ripristina`, `Salva` (le impostazioni correnti, comprese quelle digitate con {{cmd:DIMTXT}} e gli altri comandi, sotto un nome), `Elimina`, `Applica`, `Confronta`, `Rinomina`, `Elenca`.

Gli stili vengono salvati in un DWG o DXF (nella sua tabella degli stili di quotatura) e letti dai file che si aprono. Lo stile *corrente* non viene salvato: un disegno si apre con Standard corrente. Standard mantiene le proprie impostazioni mentre un altro stile è corrente.

## Modificare il testo e le linee di riferimento

{{cmd:DIMEDIT}} (`DED`) lavora sulle quote selezionate: **Home** riporta il testo dove lo mette lo stile, **New** scrive altro testo (`<>` rappresenta la misura), **Rotate** ruota il testo, **Oblique** inclina le linee di riferimento delle quote lineari e allineate all'angolo digitato (premere {{key:Enter}} per nessuno). {{cmd:DIMTEDIT}} sposta il testo a **Left**, **Right** o **Center** della linea di quota, oppure lo ruota (**Angle**), oppure lo riporta a **Home**. Il testo resta sempre sulla linea di quota: non può essere trascinato in un punto libero.
