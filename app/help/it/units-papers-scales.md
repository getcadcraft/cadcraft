---
title: Unità, formati carta e scale
summary: Il significato delle unità di disegno in CadCraft, i formati carta per tavole e stampe, tutte le scale standard, e come le dimensioni di testo e quote si relazionano alla scala di stampa.
keywords: unità, millimetri, pollici, piedi, piedi e pollici, architettura, ingegneria, frazionario, frazioni, lunits, formato delle lunghezze, precisione, metri, formato carta, a3, a1, arch d, ansi, tabloid, letter, scala, 1:100, 1/4 pollice, scala architettonica, scala ingegneristica, insunits
from: 8346236a
---

## Unità di disegno

Si disegna a grandezza reale, in unità di disegno. Ciò che vale un'unità è l'impostazione **Unità** del disegno:

1. Premere {{key:Esc}} in modo che non sia selezionato nulla, sulla scheda {{ui:Modello}}.
2. In {{ui:Impostazioni correnti}}, scegliere {{ui:Unità}}: {{ui:Senza unità}}, {{ui:Millimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Pollici}} o {{ui:Piedi}}.

Le quote possono scrivere le loro lunghezze in millimetri, centimetri, metri o chilometri, indipendentemente dall'unità di disegno: vedere [Quote in mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Il cambio di unità non ridimensiona nulla. Cambia il modo in cui le scale sono lette su tavole e stampe, e quali scale vengono proposte. Un disegno aperto da un DWG o da un DXF mantiene le unità memorizzate nel file; la sezione {{ui:Disegno}} del pannello di sinistra le mostra.

Un disegno {{ui:Senza unità}} è trattato come se fosse nell'unità della carta: millimetri su carta ISO, pollici su carta US.

## Piedi e pollici, e frazioni

Il modo in cui le lunghezze sono **scritte e digitate** è un'impostazione separata, il formato delle lunghezze. Non cambia alcuna geometria, solo l'aspetto dei numeri e ciò che si può digitare.

1. Premere {{key:Esc}} in modo che non sia selezionato nulla, sulla scheda {{ui:Modello}}.
2. In {{ui:Impostazioni correnti}}, scegliere {{ui:Formato delle lunghezze}}: {{ui:Decimale}} (`150.5`), {{ui:Architettura}} (`12'-6 1/2"`), {{ui:Ingegneria}} (`12'-6.5"`), {{ui:Frazionario}} (`150 1/2`) o {{ui:Scientifico}} (`1.505E+02`).
3. Scegliere {{ui:Precisione}}: cifre decimali, oppure la frazione più piccola (1/16 è la scelta usuale per l'architettura).

Oppure digitare {{cmd:UNITS}} (`UN`) e rispondere alle sue due domande.

Con {{ui:Architettura}} o {{ui:Ingegneria}}, un'unità di disegno vale un pollice, come in AutoCAD: impostare anche {{ui:Unità}} su {{ui:Pollici}}. Si possono quindi digitare lunghezze in piedi e pollici ovunque venga chiesta una lunghezza, e nelle caselle di {{ui:Proprietà}}:

| Si digita | Significa |
|---|---|
| `12'6"` o `12'-6"` | 12 piedi 6 pollici (150) |
| `12'6-1/2"` | 12 piedi 6½ pollici. Usare un trattino prima della frazione: {{key:Space}} equivale a {{key:Enter}} sulla riga di comando. |
| `12'` | 12 piedi |
| `6"` o `6` | 6 pollici: un numero semplice è in pollici |
| `1/2`, `6-1/2` | le frazioni funzionano in qualsiasi formato |

I punti accettano le stesse lunghezze: `@12'6",0` oppure `@10'<90`. Gli angoli restano in gradi.

Il formato compare nella cronologia ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: le aree come pollici quadrati e piedi quadrati), in {{ui:Proprietà}}, nelle coordinate nella barra di stato e nelle **nuove quote**. Le tavole mantengono le loro unità carta (millimetri o pollici) come decimali.

:::note
Il formato delle lunghezze è salvato nei file DWG e DXF, e ogni quota mantiene il proprio: un disegno salvato si riapre come lo si era lasciato.
:::

## Formati carta

Tavole e stampe di modello usano queste dimensioni, in entrambi gli orientamenti:

| Carta | Dimensione | Unità sulla tavola |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetri |
| ISO A3 | 420 × 297 mm | millimetri |
| ISO A2 | 594 × 420 mm | millimetri |
| ISO A1 | 841 × 594 mm | millimetri |
| ISO A0 | 1189 × 841 mm | millimetri |
| Letter | 11 × 8.5 in | pollici |
| Legal | 14 × 8.5 in | pollici |
| Tabloid / ANSI B | 17 × 11 in | pollici |
| ANSI C | 22 × 17 in | pollici |
| ANSI D | 34 × 22 in | pollici |
| ARCH C | 24 × 18 in | pollici |
| ARCH D | 36 × 24 in | pollici |
| ARCH E | 48 × 36 in | pollici |

Le nuove tavole partono su ISO A3 per i disegni metrici e senza unità, e su Tabloid per i disegni in pollici o piedi. Le stampe di modello partono su ISO A4 o Letter allo stesso modo, poi ricordano l'ultima scelta. Le tavole dei file aperti mantengono la propria dimensione, mostrata come "Personalizzato" quando non corrisponde a una di queste.

## Scale

Una scala `1:n` significa che un'unità sulla carta mostra n unità della stessa misura nel modello, quindi 1:100 mostra 1 m di edificio come 10 mm di carta. CadCraft ricava questo valore dalle unità di disegno e dall'unità della carta.

**Scale metriche**, proposte per ogni disegno: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Scale architettoniche**, proposte quando le unità sono pollici o piedi: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Scale ingegneristiche**, proposte quando le unità sono pollici o piedi: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Scale personalizzate.** Digitare `SCALELISTEDIT` (oppure `SCALELIST`) per aggiungere una scala propria, per esempio 1:75 oppure una scala di cantiere di 2 carta : 300 disegno. `Aggiungi` chiede un nome, poi le unità della carta e le unità del disegno (un nome come `1:75` propone i suoi numeri; premere {{key:Enter}} per accettarli). `Modifica`, `Elimina`, `Elenco` e `Ripristina` lavorano sulla stessa lista; `Ripristina` torna alla lista standard. Le proprie scale compaiono dopo quelle standard nell'elenco delle scale di viewport in {{ui:Proprietà}} e nella finestra {{ui:Stampa in PDF}}; un viewport a quella scala si legge con il suo nome, e le scale sono salvate nel disegno (DWG e DXF 2000) come elenco di scale del disegno. Un disegno aperto da un altro programma porta con sé il proprio elenco; le scale che corrispondono a una standard non vengono mostrate due volte.

Quando un viewport viene puntato con {{ui:Mostra l'intero modello}} o {{ui:Scegliere una finestra sul modello…}}, CadCraft sceglie la scala standard più grande che ci sta. {{ui:Adatta l'intero modello}} imposta invece una scala esatta, che viene letta come un semplice rapporto.

## Dimensioni su carta e nel modello

Testo e dimensioni delle quote sono nelle unità dello spazio in cui si disegna.

| Si vuole su carta | Disegnato su una tavola | Disegnato nel modello a 1:50 (disegno in mm) | Disegnato nel modello a 1/4" = 1'-0" (disegno in pollici) |
|---|---|---|---|
| Testo di 2.5 mm | 2.5 | 125 | — |
| Testo di 3/32" | 0.09375 | — | 4.5 |

Per le quote, mantenere le dimensioni come dimensioni su carta e impostare la scala generale ({{cmd:DIMSCALE}}) sulla scala di stampa: 50 per 1:50, 48 per 1/4" = 1'-0". Vedere [Impostare le dimensioni delle quote](topic:dimension-settings).

## Annotare per scala

Disegnare il modello a grandezza reale e lasciare che CadCraft esegua i calcoli sopra.

1. Selezionare il testo o le quote che devono mantenere la loro dimensione su carta. In {{ui:Proprietà}}, spuntare {{ui:Annotativo}}. {{ui:Dimensione su carta}} riporta allora, per esempio, `2.5 mm at 1:50`.
2. Digitare {{cmd:ANNOSCALE}} e la scala con cui il disegno sarà stampato, per esempio `1:100`.

Ogni testo e quota annotativa viene ridimensionata in modo da stampare alla stessa dimensione nella nuova scala: un testo di 2.5 mm è alto 125 in un disegno in millimetri a 1:50 e alto 250 a 1:100. La larghezza di un paragrafo cambia con essa; testo, frecce e spazi di una quota cambiano insieme (la sua scala generale). È un solo passo di annullamento, e gli oggetti non annotativi non vengono mai modificati.

L'impostazione è salvata in DWG e DXF: gli altri programmi leggono il flag annotativo, e CadCraft conserva anche la scala per cui ogni oggetto è dimensionato.

Se lo studio imposta le altezze su carta nell'add-on Default Policies (Impostazioni › Globale › Default Policies › Dimensioni annotazioni su carta), {{cmd:ANNOSCALE}} imposta anche l'altezza con cui parte il nuovo testo, pari a quella dello studio per le note a quella scala. Vedere [Default Policies](topic:default-policies).

### Un oggetto a più scale

Una tavola mostra spesso la stessa pianta a 1:100 e una sua parte a 1:50. Dare alle note e alle quote entrambe le scale, e ogni viewport le mostra alla loro dimensione su carta:

1. Selezionare il testo e le quote annotativi e digitare `OBJECTSCALE`.
2. Scegliere `Aggiungi` e digitare la scala, per esempio `1:50`. (`Scala corrente` aggiunge la scala di annotazione del disegno; `Elenco` mostra ciò che ogni oggetto conserva; `Elimina` ne rimuove una.)

Un viewport la cui scala è nell'elenco di un oggetto lo mostra alla dimensione per quella scala: un testo di 2.5 mm è disegnato alto 250 in un viewport 1:100 e alto 125 in uno 1:50, sullo schermo e nella stampa. L'oggetto resta dov'è; cambia solo la sua dimensione. In un viewport a una scala che non è nell'elenco di un oggetto, l'oggetto si mostra alla dimensione che ha, finché non si digita `ANNOALLVISIBLE` e si sceglie `OFF`: allora viene escluso lì. {{cmd:ANNOSCALE}} ridimensiona gli oggetti che elencano la nuova scala e lascia gli altri come sono.

Gli elenchi sono salvati in DWG e DXF come dati propri di CadCraft. Un altro programma vede ogni oggetto come annotativo, alla sola scala per cui è dimensionato. L'interruttore ANNOALLVISIBLE non viene conservato nel file.

## Spessori di linea e tipi di linea

Un layer, o un oggetto, può avere uno **spessore di linea** (da 0.05 a 2.11 mm) e un **tipo di linea** (tratteggiato, nascosto, asse, fantasma, puntinato…). Impostarli nel pannello di destra: con nulla selezionato, {{ui:Tipo di linea}} e {{ui:Spessore di linea}} in {{ui:Impostazioni correnti}} sono ciò che ottengono i nuovi oggetti ({{ui:Per layer}} per seguire il loro layer), e i due sotto {{ui:Layer …}} sono quelli del layer corrente. Con oggetti selezionati, le stesse due righe e {{ui:Scala del tipo di linea}} modificano quegli oggetti. I comandi sono {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

I tipi di linea si vedono sullo schermo e nelle stampe. Le loro tratteggiature sono in unità di disegno: un disegno metrico usa le misure ISO (DASHED: tratti di 12.7 mm), un disegno in pollici quelle in pollici (0.5"). Se i tratti appaiono troppo piccoli o troppo grandi, cambiare la {{ui:Scala del tipo di linea}} del disegno (LTSCALE): ogni tratto e ogni spazio viene moltiplicato per essa; la scala propria di un oggetto la moltiplica di nuovo. Un motivo troppo fine per essere visto affatto viene disegnato come linea continua.

Gli spessori di linea vengono stampati, in mm sulla carta qualunque sia la scala. Le linee con lo spessore {{ui:Predefinito}} usano la larghezza della penna scelta nella finestra {{ui:Stampa in PDF}} (da 0.13 a 0.70 mm; 0.25 mm all'inizio); uno spessore di 0 viene stampato come la linea più sottile. Sullo schermo ogni linea è larga un pixel, finché non si preme {{ui:LWT}} nella barra di stato (oppure si digita {{cmd:LWDISPLAY}}): allora uno spessore superiore a 0.25 mm viene disegnato più largo (0.5 mm = 2 pixel) nel modello, e alla sua larghezza reale sulla carta in una tavola. La scelta è mantenuta in questo browser.
