---
title: Organizzare un disegno con le classi
summary: Le classi ordinano gli oggetti in un secondo modo, trasversalmente ai layer (Lighting-Fixtures-Spot): mostrarle e nasconderle, assegnare loro colore, tipo di linea, spessore, riempimento e stile di testo che gli oggetti possono prendere "per classe", e impostare la classe in cui vanno i nuovi oggetti.
keywords: classe, classi, CLASSES, CLS, CLASS, per classe, ByClass, classe attiva, usa alla creazione, Nessuna, layer di progetto, scala del layer, quota, Vectorworks
from: 672de9cb
---

I layer indicano *dove* un oggetto appartiene nel disegno; le classi indicano *che cosa* è. Un muro sul layer `Level 1` può stare nella classe `Walls-Exterior`, un apparecchio a spot sul layer `Ceiling` nella classe `Lighting-Fixtures-Spot`. È possibile nascondere tutti gli apparecchi di illuminazione su tutti i layer in una sola volta, oppure stampare più spessi tutti i muri esterni, senza spostare nulla da un layer all'altro.

Ogni oggetto inizia nella classe **Nessuna**. Un disegno senza classi proprie funziona esattamente come prima.

## Aprire il pannello Classi

Digitare `CLASSES` (o `CLS`) e premere {{key:Enter}}, oppure scegliere {{ui:Classi…}} nel menu {{ui:Altro}} del gruppo {{ui:Vista}}. Il pannello si apre sopra il disegno e resta aperto mentre si disegna.

- **Aggiungere una classe:** digitare il nome nella casella in alto e premere {{key:Enter}}. Un `-` crea un livello: `Lighting-Fixtures-Spot` sta sotto `Lighting-Fixtures`, che sta sotto `Lighting`; i livelli mancanti vengono aggiunti automaticamente.
- **Mostrare o nascondere:** l'occhio accanto a una classe. Nascondere una classe nasconde tutte le classi sottostanti, a video e su carta.
- **Classe attiva:** il pulsante tondo. I nuovi oggetti disegnati vanno nella classe attiva.
- **Selezionare una classe:** fare clic sul suo nome. I pulsanti e le impostazioni sotto l'elenco agiscono poi su di essa.

Il numero alla fine di ogni riga indica quanti oggetti contiene quella classe (nel modello, sulle tavole e dentro le definizioni dei blocchi).

## Inserire oggetti in una classe

Selezionare gli oggetti, scegliere una classe nel pannello e scegliere {{ui:Imposta classe}}. Spuntare prima {{ui:Per classe}} perché prendano da essa colore, tipo di linea, spessore, riempimento e stile di testo. È anche possibile:

- digitare `CLASS` con oggetti selezionati e inserire un nome di classe (un nome nuovo crea la classe);
- digitare `CLASS` senza nulla selezionato per impostare la classe attiva; `?` elenca le classi con i relativi conteggi;
- usare la sezione {{ui:Classe}} del pannello Proprietà: la classe, e un interruttore {{ui:… per classe}} per colore, tipo di linea e spessore (riempimento per i tratteggi, stile di testo per i testi);
- selezionare per classe con `QSELECT`: scegliere la proprietà {{ui:Classe}}.

{{ui:Seleziona i suoi oggetti}} seleziona tutti gli oggetti della classe scelta sulla tavola aperta (o nel modello).

## Come si disegna un oggetto: oggetto, classe, layer

Colore, tipo di linea, spessore, riempimento e stile di testo di un oggetto possono essere **per classe**, come possono essere per layer. CadCraft cerca nel seguente ordine:

1. Il valore proprio dell'oggetto, a meno che quel valore non sia per classe.
2. Il valore della classe, quando l'oggetto lo prende per classe e la classe ne ha uno.
3. Il valore del layer.

Una classe il cui colore (o tipo di linea …) è {{ui:Non impostata}} passa l'oggetto al suo layer. Scegliere una classe e impostare sotto i pulsanti il suo {{ui:Colore}}, {{ui:Tipo di linea}}, {{ui:Spessore di linea}}, {{ui:Riempimento (tratteggi)}} e {{ui:Stile testo}}. Spuntare {{ui:Usa alla creazione}} perché i nuovi oggetti disegnati in quella classe le prendano tutte per classe.

Ogni modifica nel pannello è un solo passo di annullamento.

## Rinominare ed eliminare

{{ui:Rinomina}} modifica il nome sul posto: premere {{key:Enter}} per conservarlo, {{key:Esc}} per uscire. Le classi sottostanti seguono (`Lighting-Spot` diventa `Light-Spot` quando `Lighting` diventa `Light`), e così i loro oggetti e le eventuali sostituzioni per viewport.

{{ui:Elimina}} rimuove la classe e tutte le classi sottostanti. I loro oggetti passano a **Nessuna**. Un solo {{ui:Annulla}} riporta tutto. **Nessuna** non può essere rinominata né eliminata.

## Layer di progetto

Sotto {{ui:Layer di progetto}} ogni layer può avere una scala (`1:50`) e una quota. Un layer di progetto è un layer normale: spazio modello e tavole funzionano come prima, e la scala e la quota sono conservate nel disegno per gli strumenti che le useranno.

## Nei file DWG e DXF

Le classi sono conservate in ogni versione DWG che CadCraft salva e in DXF (R12 e 2000). La classe di ogni oggetto è un suo dato esteso (applicazione `CADCRAFT_CLASS`), quindi AutoCAD e altri programmi la conservano con l'oggetto. L'elenco delle classi, i colori e la visibilità sono conservati in un unico blocco non utilizzato chiamato `CADCRAFT_CLASSES`; se un altro programma elimina gli elementi inutilizzati, compreso quel blocco, CadCraft trova comunque la classe di ogni oggetto e le classi tornano con le impostazioni predefinite.

Gli altri programmi non conoscono le classi: disegnano ogni oggetto con i valori propri o del suo layer.

Vedere anche [Sostituzioni di classe per viewport](topic:viewport-overrides) e [Organizzare un disegno con i layer](topic:layers).
