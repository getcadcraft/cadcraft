---
title: Disegnare un diagramma da testo
summary: Incollare un diagramma di flusso Mermaid, un diagramma dei componenti PlantUML, D2, un elenco da-a o XML di draw.io, e CadCraft dispone blocchi e connettori che si possono modificare come gli altri oggetti.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modello locale, diagramma, diagramma di flusso, mermaid, plantuml, d2, da a, elenco da-a, diagramma a blocchi, connettori, da testo a diagramma, DIAGRAM, TEXTDIAGRAM, diagramma di sistema, schema di cablaggio, tubazioni, csv
from: b26af54b
---

Digitare {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Si apre una finestra: incollare il testo, scegliere {{ui:Disegna}}, fare clic sull'angolo in alto a sinistra del diagramma e indicare l'altezza del testo. CadCraft legge il testo, dispone i blocchi per livelli con connettori ad angolo retto e li disegna su un layer chiamato `Diagram`. I nuovi oggetti sono selezionati, quindi è possibile spostarli subito. Sono oggetti normali: per cambiare il testo di un blocco usare {{cmd:TEXTEDIT}}, per allungare un connettore usare i suoi grip, per cancellare un blocco cancellarlo, per aggiungere linee proprie disegnarle. Un solo {{cmd:UNDO}} annulla l'intero diagramma.

Alla riga di comando, senza la finestra, il testo può essere su una sola riga con `;` tra le istruzioni: `flowchart LR; A[Pump] --> B[Tank]`.

## Cosa legge

| Testo | Cosa viene letto |
|---|---|
| **Mermaid** `flowchart` o `graph` con `TD`, `TB`, `BT`, `LR` o `RL` | `A`, `A[testo]`, `A(testo)`, `A([testo])`, `A{testo}` (una decisione, disegnata come rombo), testo tra virgolette, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, un'etichetta come `-->|testo|` o `-- testo -->`, catene `A --> B --> C`, gruppi `A & B --> C`, `<br/>` per una nuova riga, commenti `%%` |
| **PlantUML** tra `@startuml` e `@enduml` (componenti e distribuzione) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` e altri con nomi `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, catene, `a: Label`, `direction: right`, nomi tra virgolette, commenti `#` |
| **Un elenco da-a** (una tabella incollata come testo o CSV) | colonne `from`, `to` e facoltativamente `label` e `type` (`dashed` disegna un connettore tratteggiato), in qualsiasi ordine, separate da virgole, punti e virgola o tabulazioni; senza riga di intestazione le prime tre colonne sono from, to, label |

| Testo | Cosa viene letto |
|---|---|
| **XML di draw.io** (testo di un file `.drawio`, `<mxfile>` o `<mxGraphModel>`) | riquadri, riquadri arrotondati, ellissi, rombi per le decisioni e testo semplice; riquadri contenitore e a corsie (disegnati tratteggiati con il loro titolo); connettori con i loro punti intermedi, estremità a freccia (`endArrow`, `startArrow`) e `dashed=1`; le etichette HTML diventano testo semplice, `<UserObject label>` e `<object label>` funzionano |

Qualsiasi altra cosa su una riga (stili, note, cornici di ciclo) viene saltata, e la riga di comando dice quante righe sono state saltate. Un diagramma può avere al massimo 400 blocchi e 1200 connettori.

## Il draw.io XML mantiene le posizioni

Gli altri formati dicono che cosa si collega a che cosa, quindi CadCraft le dispone. L'XML di draw.io dice già dove si trova ogni cosa, quindi CadCraft la mantiene: ogni blocco resta dove lo mette il file, in scala in modo che un carattere da 12 pixel diventi l'altezza del testo indicata (un riquadro di 120 per 60 pixel è 60 per 30 unità di disegno all'altezza 6), e l'angolo in alto a sinistra del diagramma va sull'angolo su cui si fa clic. I connettori vanno dal bordo di un blocco al bordo del successivo, passando per i loro punti intermedi; un connettore con `orthogonalEdgeStyle` e senza punti intermedi riceve una piega ad angolo retto.

Il salvataggio predefinito di draw.io è compresso. La finestra e la riga di comando lo aprono automaticamente; uno strumento dell'assistente in una finestra senza flusso di compressione lo segnala, e `File › Export as › XML` con *Compressed* deselezionato dà XML semplice. Immagini, connettori con un'estremità libera e seconde pagine vengono saltati e contati.

## Scrivere con un modello sul proprio computer

Un modello locale (Ollama, LM Studio, llama.cpp, Jan) può scrivere l'XML o il testo Mermaid a partire dal contenuto di un PDF o di un SVG, e il risultato entra attraverso la stessa finestra, oppure direttamente nel disegno quando il modello è collegato come assistente: `diagram_from_text` accetta `format` `drawio`. I modelli piccoli fanno più errori nell'XML che in Mermaid o in un elenco da-a, quindi un primo tentativo con Mermaid costa meno; ciò che il lettore non può usare viene saltato e contato, non indovinato. Vedi Collegare l'IA per le ricette dei modelli.

## Come viene disposto

I blocchi vanno in livelli seguendo i connettori (un connettore che torna indietro viene disegnato risalendo), ordinati per ridurre gli incroci, con connettori ad angolo retto che escono dal fondo di un blocco ed entrano nella parte alta del successivo; `LR` e `RL` trasformano i livelli in colonne. L'altezza del testo indicata determina la dimensione di tutto.

## Sottografi e diagrammi di sequenza

- Un `subgraph name [Title]` … `end` di Mermaid disegna un riquadro tratteggiato con il suo titolo intorno ai blocchi; i sottografi possono essere annidati. La disposizione non tiene fuori dal riquadro gli altri blocchi, quindi spostare un blocco fuori posto con i suoi grip.
- Un `sequenceDiagram` di Mermaid, o testo PlantUML con righe `participant` e messaggi `->`, viene disegnato come blocchi in alto, con una linea di vita tratteggiata sotto ciascuno e una riga per messaggio. `-->` e `-->>` sono tratteggiati, `->>` e `-)` hanno una punta di freccia, `autonumber` numera i messaggi, un messaggio a sé stessi forma un anello. Note e cornici `loop` / `alt` vengono saltate.

## Simboli per diagrammi a linea singola e di tubazioni

Un blocco può essere un simbolo disegnato, con il suo nome sotto, invece di un riquadro. Indicare il simbolo nel testo:

| Testo | Come |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` oppure una riga `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` oppure `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Un elenco da-a | colonne `from_symbol` e `to_symbol` |

I nomi sono quelli dei simboli P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` e il resto della libreria P&ID) e del set Elettrico (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` e così via). Un nome che due set hanno in comune va al set P&ID; scrivere `pid:` o `el:` davanti per scegliere. Un nome che CadCraft non conosce viene saltato e contato. I simboli sono disegnati come linee semplici, cerchi e archi sul layer `Diagram`, scalati all'altezza del testo; non sono i blocchi con tag dell'add-on, quindi per un disegno esecutivo usare i comandi P&ID o Elettrico.

Gli assistenti IA possono fare lo stesso tramite lo strumento `diagram_from_text` nella finestra.
