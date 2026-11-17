---
title: Immissione di coordinate e distanze
summary: Tutti i modi per digitare un punto, una distanza, un angolo o un numero nella riga di comando di CadCraft, con esempi.
keywords: input dinamico, dyn, f12, tab, coordinate, assolute, relative, polari, @, distanza diretta, angolo, gradi, ultimo punto, lastpoint, digitazione dei punti, input, aritmetica, calcolo, calcolatrice, cal, somma, frazione, espressione
from: 7de9252d
---

## Punti

Quando il comando richiede un punto, digitare una di queste voci e premere {{key:Enter}}:

| Si digita | Significato | Esempio |
|---|---|---|
| `x,y` | Assoluto: misurato dall'origine 0,0 | `2500,1200` |
| `#x,y` | Anche assoluto (accettato per abitudine) | `#2500,1200` |
| `@dx,dy` | Relativo: in orizzontale e in verticale dall'ultimo punto | `@600,0` |
| `@d<a` | Polare relativo: distanza e angolo dall'ultimo punto | `@1500<45` |
| `d<a` | Polare assoluto: distanza e angolo dall'origine | `3000<90` |
| un solo numero | Distanza diretta: a quella distanza dal punto base, verso il mirino | `1200` |
| `*x,y`, `@*dx,dy` | Coordinate globali mentre è impostato un UCS | `*0,0` |

Con un UCS impostato ({{cmd:UCS}}), `x,y`, `@dx,dy` e l'angolo in `d<a` sono misurati lungo gli assi dell'UCS. Vedere [Ruotare la vista e usare coordinate proprie](topic:ucs-and-turned-view).

Oppure fare clic nel disegno: gli snap a oggetto e Ortho si applicano ai clic.

Regole:

- Una virgola separa X da Y. I decimali usano il punto: `1250.75,300`.
- I valori negativi vanno a sinistra e in basso: `@-600,0`.
- Non digitare spazi: {{key:Space}} invia la riga, come {{key:Enter}}.
- I numeri possono usare gli esponenti: `1e3` vale 1000.
- Non si digitano unità né la notazione piedi e pollici. Digitare numeri semplici nelle unità del disegno.

## L'ultimo punto

`@` conta dall'**ultimo punto indicato in una richiesta di punto**, in qualsiasi comando: un clic, uno snap o un punto digitato. Viene ricordato tra i comandi, quindi è possibile iniziare una nuova linea a `@0,500` di distanza dal punto in cui è terminata la precedente. Prima di indicare un punto qualsiasi, `@` conta da 0,0.

Alcuni casi in cui questo conta:

- In {{cmd:COPY}}, dopo la prima copia l'ultimo punto è il punto di quella copia. `@600,0` due volte posiziona le copie a 600 e 1200 dall'originale.
- Dopo aver posizionato una quota, l'ultimo punto è dove è stata posizionata la linea di quota, non la fine della quota.

In caso di dubbio, usare un punto assoluto, uno snap o una distanza diretta.

## Immissione di distanza diretta

Un numero semplice è una distanza dal **punto base** del comando (il punto da cui parte l'elastico) verso il mirino:

1. Spostare il mirino nella direzione desiderata.
2. Digitare la distanza e premere {{key:Enter}}.

Con {{ui:Ortho}} attivo, la direzione si allinea in orizzontale o in verticale, e questo è il modo più rapido per disegnare muri squadrati. Se non c'è un punto base, oppure il mirino si trova esattamente su di esso, il numero viene rifiutato con il messaggio "Richiesto un punto o una parola chiave di opzione."

## Angoli

- In gradi, come numero semplice: `30`, `-45`, `112.5`.
- Misurati in senso antiorario dalla direzione X positiva (verso destra): 0 è a destra, 90 in alto, 180 a sinistra, 270 o -90 in basso.
- Dove si richiede un angolo (rotazione, angolo del testo), si può anche fare clic: l'angolo è misurato dal punto base fino al clic. Se un punto base non esiste ancora, il primo clic lo imposta e la richiesta chiede un secondo punto.

## Distanze

Dove si richiede una distanza (raggio, offset, altezza del testo, fattore di scala):

- digitare un numero positivo (in un disegno in piedi e pollici anche `12'6"` o `6-1/2`: vedere [Piedi e pollici](topic:units-papers-scales#feet-and-inches-and-fractions)), oppure
- fare clic su un punto: la distanza dal punto base del comando fino a esso, oppure
- fare clic su due punti quando non c'è un punto base: la richiesta diventa `Specificare il secondo punto`.

"Richiede un numero positivo o due punti." significa che il valore non era un numero, oppure era negativo.

## Calcoli in un valore digitato

Ovunque si digiti una lunghezza, una coordinata, un angolo o un numero (riga di comando, input dinamico, caselle Proprietà e finestre di dialogo), è possibile digitare un calcolo con `+`, `-`, `*`, `/` e parentesi, invece di farlo a mano:

| Digitare | Risultato |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (in un disegno in piedi e pollici) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, nelle unità del disegno (quando sono impostate) |
| `@4+7/16,0` | un punto 4.4375 a destra dell'ultimo |
| `360/7` | un angolo di 51.43 gradi |

- Un trattino scritto in una lunghezza fa comunque parte di essa: `4-7/16` è 4 7/16 e `24'-6"` è 24 piedi 6 pollici. Per sottrarre dopo un segno di piedi, completare prima la lunghezza, `24'-0"-6"`, oppure mettere il calcolo tra parentesi con spazi attorno al trattino, `(24' - 6")` (dentro le parentesi uno spazio è uno spazio; altrove equivale a {{key:Enter}}).
- Un numero semplice sommato a una lunghezza è in unità del disegno; moltiplicare o dividere per un numero scala la lunghezza. Due lunghezze moltiplicate danno un'area, quindi `2'*3'` viene rifiutato.
- Funzionano anche `abs`, `round`, `ceil` e `floor`: `round(10/3)`.
- Un calcolo che non può essere letto viene rifiutato, con l'indicazione del punto in cui c'è l'errore, per esempio "Il calcolo termina troppo presto (carattere 3): manca un valore." Nulla viene mai letto come 0. {{cmd:CAL}} stampa il valore di un calcolo.

## Input dinamico

{{ui:Dyn}} ({{key:F12}}, nella barra di stato) mostra i valori accanto al mirino mentre un comando richiede un punto.

- Se non c'è ancora un punto base (il primo punto di una linea), i due campi sono **X** e **Y**.
- Dopo, sono la **distanza** e l'**angolo** dall'ultimo punto.

La digitazione passa comunque dalla riga di comando; il campo accanto al mirino ne mostra il contenuto e l'elastico lo segue.

1. Digitare un valore: entra nel campo evidenziato.
2. Premere {{key:Tab}} (o una virgola dopo X). Il valore viene bloccato (mostrato in grassetto) e il campo successivo viene evidenziato. Una distanza bloccata mantiene l'elastico di quella lunghezza mentre si punta con il mouse.
3. Digitare il secondo valore, oppure puntare soltanto, e premere {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} disegna 50 verso l'alto dall'ultimo punto.

Premere {{key:Enter}} dopo un solo valore, senza {{key:Tab}}, funziona come immissione di distanza diretta. Anche piedi e pollici funzionano nei campi (`12'6"`). Anche le richieste di distanza e angolo (il raggio di un cerchio, una rotazione) mostrano accanto al mirino il loro valore.

## Opzioni e valori predefiniti

- Le opzioni compaiono tra parentesi quadre. Digitare le lettere maiuscole di un'opzione (`D` per `[Diametro]`, `CL` per `[Chiudi]`) e premere {{key:Enter}}. Funzionano anche inizi più lunghi della parola (`DIA`).
- Un valore predefinito compare tra parentesi angolari, come `<500>`. Premere {{key:Enter}} o fare clic destro per usarlo.

## Altri layout di tastiera e tastierino

I nomi dei comandi, i nomi brevi e le lettere delle opzioni sono lettere latine. Con un layout greco, cirillico (russo, ucraino, bielorusso, serbo, macedone, bulgaro), ebraico, arabo, persiano, thai o coreano attivo non occorre cambiare layout: quando la parola digitata, così com'è, non è un comando, un nome breve o un'opzione, CadCraft la legge in base ai tasti premuti. Il tasto contrassegnato con `L` su una tastiera latina avvia ancora `LINE`, e il tasto `C` risponde ancora all'opzione `Chiudi`, qualunque lettera il layout vi riporti. Anche l'elenco dei comandi corrispondenti, sopra la riga di comando, segue questa regola. Il testo digitato dove un comando ne richiede (il contenuto di {{cmd:TEXT}}, un nome) non viene mai modificato.

Su layout il cui tasto decimale del tastierino produce una virgola, quel tasto digita un punto nella riga di comando e nelle caselle numeriche, quindi `12.5` può essere digitato dal tastierino. Il tasto virgola della tastiera principale continua a separare `x,y`.

Entrambe le funzioni si possono disattivare in {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} e {{ui:Keypad decimal key}}.

## Visualizzazione delle coordinate

La barra di stato mostra X e Y del mirino (nell'UCS quando ne è impostato uno), dopo gli snap e Ortho. Mentre un comando ha un punto base, aggiunge `Δ` con la distanza e l'angolo da quel punto, per esempio `Δ 1500 < 30°`: sono i valori che si digiterebbero come `@1500<30`.

Usare {{cmd:ID}} per stampare le coordinate di un punto e {{cmd:DIST}} per misurare tra due punti.
