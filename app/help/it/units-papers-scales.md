---
title: Unità, formati carta e scale
summary: Cosa significano le unità di disegno in CadCraft, i formati carta per tavole e stampe, ogni scala standard, e come le dimensioni di testo e quote si rapportano alla scala di stampa.
keywords: unità, millimetri, pollici, piedi, piedi e pollici, architettonico, ingegneria, frazionario, frazioni, lunits, formato delle lunghezze, precisione, metri, formato carta, a3, a1, arch d, ansi, tabloid, letter, scala, 1:100, 1/4 pollice, scala architettonica, scala ingegneristica, insunits
from: 7dc9b62e
---

## Unità di disegno

Si disegna a grandezza reale, in unità di disegno. Ciò che vale un'unità è l'impostazione **Unità** del disegno:

1. Premere {{key:Esc}} in modo che nulla sia selezionato, sulla scheda {{ui:Model}}.
2. In {{ui:Current settings}}, scegliere {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} o {{ui:Feet}}.

Le quote possono scrivere le loro lunghezze in millimetri, centimetri, metri o chilometri, qualunque sia l'unità del disegno: vedere [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Cambiare le unità non ridimensiona nulla. Cambia il modo in cui si leggono le scale su tavole e stampe, e quali scale vengono offerte. Un disegno aperto da un DWG o DXF mantiene le unità memorizzate nel file; la sezione {{ui:Drawing}} del pannello di sinistra le mostra.

Un disegno {{ui:Unitless}} è trattato come se fosse nell'unità della carta: millimetri sulla carta ISO, pollici sulla carta US.

## Piedi e pollici, e frazioni

Come vengono **scritte e digitate** le lunghezze è un'impostazione separata, il formato delle lunghezze. Non cambia nessuna geometria, cambia solo l'aspetto dei numeri e ciò che si può digitare.

1. Premere {{key:Esc}} in modo che nulla sia selezionato, sulla scheda {{ui:Model}}.
2. In {{ui:Current settings}}, scegliere {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) oppure {{ui:Scientific}} (`1.505E+02`).
3. Scegliere {{ui:Precision}}: le cifre decimali, oppure la frazione più piccola (1/16 è la scelta usuale per l'architettura).

Oppure digitare {{cmd:UNITS}} (`UN`) e rispondere alle sue due domande.

Con {{ui:Architectural}} o {{ui:Engineering}}, un'unità di disegno è un pollice, come in AutoCAD: impostare anche {{ui:Units}} su {{ui:Inches}}. Si possono quindi digitare lunghezze in piedi e pollici ovunque ne sia richiesta una, e nelle caselle di {{ui:Properties}}:

| Si digita | Significa |
|---|---|
| `12'6"` oppure `12'-6"` | 12 piedi 6 pollici (150) |
| `12'6-1/2"` | 12 piedi 6½ pollici. Usare un trattino prima della frazione: {{key:Space}} è {{key:Enter}} nella riga di comando. |
| `12'` | 12 piedi |
| `6"` oppure `6` | 6 pollici: un numero semplice sono pollici |
| `1/2`, `6-1/2` | le frazioni funzionano in ogni formato |

Anche i punti accettano le stesse lunghezze: `@12'6",0` oppure `@10'<90`. Gli angoli restano in gradi.

Il formato si vede nella cronologia ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: le aree in pollici quadrati e piedi quadrati), in {{ui:Properties}}, nelle coordinate della barra di stato, e nelle **nuove quote**. Le tavole mantengono le unità della carta (millimetri o pollici) come decimali.

:::note
Il formato delle lunghezze viene salvato nei file DWG e DXF, e ogni quota conserva il proprio: un disegno salvato si riapre come lo si era lasciato.
:::

## Formati carta

Tavole e stampe del modello usano queste dimensioni, in entrambi gli orientamenti:

| Carta | Dimensione | Unità sul foglio |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetri |
| ISO A3 | 420 × 297 mm | millimetri |
| ISO A2 | 594 × 420 mm | millimetri |
| ISO A1 | 841 × 594 mm | millimetri |
| ISO A0 | 1189 × 841 mm | millimetri |
| Letter | 11 × 8,5 in | pollici |
| Legal | 14 × 8,5 in | pollici |
| Tabloid / ANSI B | 17 × 11 in | pollici |
| ANSI C | 22 × 17 in | pollici |
| ANSI D | 34 × 22 in | pollici |
| ARCH C | 24 × 18 in | pollici |
| ARCH D | 36 × 24 in | pollici |
| ARCH E | 48 × 36 in | pollici |

Le nuove tavole partono da ISO A3 per i disegni metrici e senza unità, e da Tabloid per i disegni in pollici o piedi. Le stampe del modello partono da ISO A4 o Letter allo stesso modo, poi ricordano l'ultima scelta. Le tavole dai file aperti mantengono la propria dimensione, mostrata come "Personalizzato" quando non è una di queste.

## Scale

Una scala `1:n` significa che un'unità sulla carta mostra n della stessa unità nel modello: quindi 1:100 mostra 1 m di edificio come 10 mm di carta. CadCraft lo calcola dalle unità del disegno e dall'unità della carta.

**Scale metriche**, offerte per ogni disegno: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Scale architettoniche**, offerte quando le unità sono pollici o piedi: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Scale ingegneristiche**, offerte quando le unità sono pollici o piedi: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Scale proprie.** Digitare `SCALELISTEDIT` (oppure `SCALELIST`) per aggiungere una scala propria, come 1:75 oppure una scala di cantiere di 2 carta : 300 disegno. `Add` chiede un nome, poi le unità della carta e quelle del disegno (un nome come `1:75` propone i propri numeri; premere {{key:Enter}} per accettarli). `Edit`, `Delete`, `List` e `Reset` agiscono sullo stesso elenco; `Reset` torna all'elenco standard. Le proprie scale compaiono dopo quelle standard nell'elenco delle scale di viewport in Proprietà e nella finestra {{ui:Plot to PDF}}; una viewport a quella scala ne mostra il nome, e sono salvate nel disegno (DWG e DXF 2000) come elenco di scale del disegno. Un disegno aperto da un altro programma porta con sé il suo elenco; le scale che corrispondono a una standard non vengono mostrate due volte.

Quando una viewport viene puntata con {{ui:Show the whole model}} oppure {{ui:Pick a window on the model…}}, CadCraft sceglie la scala standard più grande che entra. {{ui:Fit the whole model}} imposta invece una scala esatta, che si legge come rapporto semplice.

## Dimensioni sulla carta e nel modello

Le dimensioni del testo e delle quote sono nelle unità dello spazio in cui si disegna.

| Si vuole sulla carta | Disegnato su una tavola | Disegnato nel modello a 1:50 (disegno in mm) | Disegnato nel modello a 1/4" = 1'-0" (disegno in pollici) |
|---|---|---|---|
| Testo di 2,5 mm | 2,5 | 125 | — |
| Testo di 3/32" | 0,09375 | — | 4,5 |

Per le quote, mantenere le dimensioni come dimensioni di carta e impostare la scala generale ({{cmd:DIMSCALE}}) sulla scala di stampa: 50 per 1:50, 48 per 1/4" = 1'-0". Vedere [Impostare le dimensioni delle quote](topic:dimension-settings).

## Annotare per scala

Disegnare il modello a grandezza reale e lasciare che CadCraft faccia i calcoli sopra per noi.

1. Selezionare il testo o le quote che devono mantenere la loro dimensione sulla carta. In Proprietà spuntare {{ui:Annotative}}. {{ui:Size on paper}} indica allora, per esempio, `2,5 mm a 1:50`.
2. Digitare {{cmd:ANNOSCALE}} e la scala con cui il disegno sarà stampato, per esempio `1:100`.

Ogni testo e quota annotativi viene ridimensionato in modo da stampare alla stessa dimensione alla nuova scala: il testo di 2,5 mm è alto 125 in un disegno in millimetri a 1:50, e 250 a 1:100. La larghezza di un paragrafo cambia con esso; il testo, le frecce e gli spazi di una quota cambiano insieme (la sua scala generale). È un solo passo di annullamento, e gli oggetti non annotativi non vengono mai modificati.

L'impostazione è salvata in DWG e DXF: gli altri programmi leggono il contrassegno di annotatività, e CadCraft conserva anche la scala per cui ogni oggetto è dimensionato.

Se lo studio imposta le altezze su carta nel componente Politiche predefinite (Impostazioni › Globale › Politiche predefinite › Dimensioni delle annotazioni su carta), {{cmd:ANNOSCALE}} imposta anche l'altezza con cui inizia il nuovo testo sull'altezza dello studio per le note a quella scala. Vedere [Politiche predefinite](topic:default-policies).

### Un oggetto a più scale

Una tavola mostra spesso la stessa pianta a 1:100 e una sua parte a 1:50. Dare alle note e alle quote entrambe le scale, e ogni viewport le mostra alla loro dimensione su carta:

1. Selezionare il testo e le quote annotativi e digitare `OBJECTSCALE`.
2. Scegliere `Add` e digitare la scala, per esempio `1:50`. (`Current scale` aggiunge la scala di annotazione del disegno; `List` mostra le scale che conserva ogni oggetto; `Delete` ne toglie una.)

Una viewport la cui scala è nell'elenco di un oggetto lo mostra alla dimensione per quella scala: il testo di 2,5 mm è disegnato alto 250 in una viewport 1:100 e alto 125 in una 1:50, a schermo e nella stampa. L'oggetto resta dov'è; cambia solo la dimensione. In una viewport a una scala che non è nell'elenco di un oggetto, l'oggetto mostra la dimensione che ha, finché non si digita `ANNOALLVISIBLE` e si sceglie `OFF`: allora viene omesso lì. {{cmd:ANNOSCALE}} ridimensiona gli oggetti che elencano la nuova scala e lascia gli altri come sono.

Gli elenchi sono salvati in DWG e DXF come dati propri di CadCraft. Un altro programma vede ogni oggetto come annotativo, alla sola scala per cui è dimensionato. L'interruttore ANNOALLVISIBLE non viene conservato nel file.

## Spessori di linea e tipi di linea

Un layer, oppure un oggetto, può avere uno **spessore di linea** (da 0,05 a 2,11 mm) e un **tipo di linea** (tratteggiata, nascosta, di centro, fantasma, punteggiata…). Si impostano nel pannello di destra: senza selezione, {{ui:Linetype}} e {{ui:Lineweight}} sotto {{ui:Current settings}} sono ciò che ricevono i nuovi oggetti ({{ui:By layer}} per seguire il loro layer), e i due sotto {{ui:Layer …}} sono quelli del layer corrente. Con oggetti selezionati, le stesse due righe e {{ui:Linetype scale}} modificano quegli oggetti. I comandi sono {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

I tipi di linea si mostrano a schermo e nelle stampe. I loro tratti sono in unità di disegno: un disegno metrico usa le misure ISO (DASHED: tratti di 12,7 mm), un disegno in pollici quelle in pollici (0,5"). Se i tratti sembrano troppo piccoli o troppo grandi, cambiare {{ui:Linetype scale}} del disegno (LTSCALE): ogni tratto e spazio viene moltiplicato per essa; la scala di un oggetto la moltiplica ancora. Un motivo troppo fine per essere visto viene disegnato come linea continua.

Gli spessori di linea si stampano in mm sulla carta, qualunque sia la scala. Le linee con lo spessore {{ui:Default}} usano la larghezza di penna scelta nella finestra {{ui:Plot to PDF}} (da 0,13 a 0,70 mm; 0,25 mm all'inizio); uno spessore di 0 stampa la linea più sottile. A schermo ogni linea è larga un pixel finché non si preme {{ui:LWT}} nella barra di stato (oppure si digita {{cmd:LWDISPLAY}}): allora uno spessore superiore a 0,25 mm viene disegnato più largo (0,5 mm = 2 pixel) nel modello, e alla sua vera larghezza sulla carta in una tavola. La scelta è conservata in questo browser.

## Lo standard di studio

Uno studio può conservare altezze del testo su carta, layer, campi del cartiglio e modelli in un unico registro, lo standard di studio. CadCraft lo legge in quest'ordine: il registro del disegno (impostato con {{cmd:OFFICESTANDARD}} › `Import`, conservato nel file), lo standard condiviso del team, poi le proprie Politiche predefinite. Il testo e le quote annotativi prendono da esso l'altezza su carta alla scala di annotazione. Uno standard vuoto non cambia nulla. {{cmd:OFFICESTANDARD}} › `Layers` aggiunge i layer dello studio che un disegno non ha.
