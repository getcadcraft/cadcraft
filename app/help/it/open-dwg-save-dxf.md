---
title: Aprire un DWG, modificarlo e salvare una copia
summary: Aprire un disegno ricevuto, verificare cosa è arrivato, apportare una modifica e rispedire una copia come DWG o DXF.
keywords: dwg, dxf, apri, importa, esporta, salva, r12, andata e ritorno, consulente, xref, verifica disegno, saveas, salva con nome, salvataggio dwg, formato
from: 49de4bf6
---

## Cosa si farà

Aprire un DWG da un consulente, verificare cosa CadCraft ha potuto e non ha potuto mostrare, aggiungere una nota, stampare una tavola in PDF e salvare una copia da rispedire, come DWG o DXF.

## Aprire il file

1. Premere {{key:Mod+O}}, oppure fare clic su {{ui:Apri}}.
2. Scegliere il file `.dwg`.

La riga di stato mostra "Lettura …" mentre il disegno viene letto. Quando è finita, il disegno riempie lo schermo e la cronologia dice, per esempio, "Aperto plan.dwg: 18,240 oggetti su 64 layer", con il tempo impiegato.

:::offline
Si è offline. Se il pulsante {{ui:Salva per l'uso offline}} indica "Pronto offline", i file DWG si aprono normalmente. Se non è così, e in questa scheda non è ancora stato aperto alcun DWG, l'apertura di un DWG può non riuscire, perché il lettore DWG di CadCraft viene caricato con il primo DWG: aprire un DXF, oppure salvare CadCraft per l'uso offline la prossima volta che si è online. Vedi [Lavorare offline](common:offline).
:::

## Verificare cosa è arrivato

1. Guardare la sezione {{ui:Disegno}} del pannello di sinistra: formato e versione, unità, numero di oggetti e layer, e tavole.
2. Leggere la casella "Informazioni su questo file" sotto, se presente.

La casella elenca:

- **Non ancora mostrato:** oggetti che CadCraft non può ancora disegnare, per tipo e numero. Vengono esclusi, non indovinati.
- **Layout (tavole) arrivati:** aprirli con le schede sotto il disegno.
- **Quote che si possono solo leggere come disegnate.**

3. Fare clic sulle schede sotto il disegno per vedere ciascuna tavola.
4. Controllare {{ui:Unità}} in {{ui:Impostazioni correnti}} (nulla selezionato, scheda {{ui:Modello}}). Se dice {{ui:Senza unità}} ma si sa che il disegno è in millimetri, impostarlo, così le scale della tavola e della stampa risultano corrette.

:::tip
Se ci si aspettava una parte del disegno e non la si vede, controllare il pannello {{ui:Layer}}: il layer può essere spento o congelato nel file. Fare clic sul suo nome per renderlo corrente; questo lo accende.
:::

## Apportare la modifica

1. Creare un layer per le note: fare clic su {{ui:Nuovo layer}}, digitare `NOTES` e premere {{key:Enter}}.
2. Digitare `DT` e premere {{key:Enter}}.
3. Fare clic dove va la nota.
4. Digitare un'altezza del testo adatta al disegno (vedi [Aggiungere testo ed etichette](topic:text)) e premere {{key:Enter}}.
5. Premere {{key:Enter}} per mantenere la rotazione a 0.
6. Digitare la nota e premere {{key:Enter}}.
7. Premere di nuovo {{key:Enter}} per terminare.

Le modifiche alle quote importate sono consentite: appena se ne cambia una, CadCraft la ridisegna nel proprio stile.

## Stampare una tavola per la revisione

1. Fare clic sulla scheda della tavola.
2. Premere {{key:Mod+P}}.
3. Fare clic su {{ui:Scarica PDF}}.

Vedi [Stampa in PDF](topic:plot-pdf).

## Salvare una copia

1. Premere {{key:Mod+S}}, oppure fare clic su {{ui:Salva}}.

Avendo aperto un DWG, il browser scarica `<name>.dwg`, nella versione in cui era il DWG. La cronologia dice, per esempio, "Copia salvata come Plan.dwg (DWG (AutoCAD 2018))." ed elenca, nelle righe sotto, ciò che è cambiato durante il salvataggio.

2. Leggere quelle righe prima di inviare il file. [Cosa conserva e cosa modifica un DWG](topic:files#what-a-dwg-keeps-and-changes) spiega ciascuna.

Il DWG originale non viene mai modificato. Ogni salvataggio è un nuovo download.

## Salvare come DWG o DXF

Per scegliere il formato:

1. Premere {{key:Mod+Shift+S}}, oppure fare clic su {{ui:Salva con nome}}.

La finestra {{ui:Salva una copia con nome}} si apre con quattro scelte, ciascuna con il nome di file che darà: {{ui:DWG}}, con il suo elenco {{ui:Versione}}, {{ui:DXF R12}}, {{ui:DXF 2000}} e {{ui:DXF 2000 (binary)}}. Il formato e la versione correnti del disegno sono già selezionati.

2. Fare clic sul formato desiderato. Per il DWG, scegliere la versione usata dall'altro studio, oppure una più vecchia: AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000.
3. Fare clic su {{ui:Salva}}.

La copia viene scaricata. Da quel momento {{key:Mod+S}} salva questo disegno in quel formato, e anche i nuovi disegni iniziano con esso, in questo browser. {{ui:Annulla}} o {{key:Esc}} non salvano nulla, e la cronologia dice "Non salvato."

Come scegliere:

- **DWG** conserva di più: tavole con le loro finestre, quote reali, motivi di tratteggio, nomi di layer e blocchi come li si è digitati, e testo multilinea come testo multilinea. La versione AutoCAD 2000 si apre nella maggior parte dei programmi; la 2004 e successive conservano anche i colori reali.
- **DXF 2000** è un file di testo che conserva quasi ciò che conserva un DWG: ogni tavola come layout con le sue finestre, quote reali, motivi di tratteggio, colori reali, spessori di linea, tipi di linea e nomi come li si è digitati. Si apre in AutoCAD 2000 e successivi e nella maggior parte dei programmi CAD. I multileader diventano le linee, le frecce e il testo che disegnano. Un DXF aperto nella versione 2000 o successiva viene salvato come DXF 2000.
- **DXF 2000 (binary)** contiene lo stesso contenuto del DXF 2000 nella forma binaria del formato: un file più piccolo che conserva ogni numero esattamente. I file DXF binari di altri programmi si aprono come quelli di testo, e un disegno aperto da un DXF binario viene salvato di nuovo come binario.
- **DXF R12** si apre in quasi ogni programma CAD. Conserva la prima tavola con le sue finestre, e le altre tavole di CadCraft. Semplifica le novità, come il testo multilinea e i tratteggi.

## Cosa vedrà l'altro studio

In un DWG:

- Linee, archi, cerchi, ellissi, polilinee, testo, testo multilinea, blocchi con i loro attributi, riempimenti pieni, motivi di tratteggio e layer come si vedono.
- Quote reali: l'altro programma le rimisura quando vengono allungate.
- Ogni tavola, con la sua carta e le sue finestre.
- Multileader come multileader. Nella versione AutoCAD 2000, i colori reali diventano il colore standard più vicino.

In un DXF R12:

- Linee, archi, cerchi, polilinee, testo, riferimenti a blocco e quote come si vedono. Le quote restano quote reali.
- Nomi dei layer in maiuscolo, con gli spazi sostituiti da `_`.
- La prima tavola come spazio carta del disegno, con le sue finestre. Le altre tavole arrivano come blocchi chiamati `CCLAYOUT_1` e così via; se servono tutte le tavole come layout, inviare anche un PDF di ciascuna tavola.
- Testo multilinea come righe separate, ellissi come polilinee, tratteggi come contorni.

In entrambi i casi, ciò che è elencato come "Non ancora mostrato" all'apertura del DWG **non** è nella copia, a meno che la cronologia non dica che è stato conservato: gli oggetti OLE di un DWG e i suoi solidi 3D nello spazio modello vengono riscritti quando si salva come DWG. Dirlo al destinatario, e inviare anche un PDF.

## Errori comuni

- **"CadCraft apre disegni DWG e DXF."** Il file ha un'altra estensione. Controllare che sia `.dwg` o `.dxf`.
- **"Questo disegno non può essere letto."** Il DWG è danneggiato o in una versione che il lettore non gestisce. Chiedere un DXF, oppure il DWG salvato in una versione più vecchia.
- **"Questo DXF binario termina nel mezzo di un oggetto."** Il file è troncato o danneggiato. Digitare RECOVER per aprire ciò che può essere letto, oppure chiedere di nuovo il file.
- **Il file salvato si chiama `name (1).dwg` o `name (1).dxf`.** Il browser lo fa quando nella cartella c'è già un file con lo stesso nome.
- **Hanno un programma più vecchio che non apre il DWG.** Salvare come DWG con {{ui:Versione}} {{ui:AutoCAD 2000}}, oppure come {{ui:DXF R12}}: quasi ogni programma CAD lo apre.
- **Parti del disegno mancano.** I disegni collegati (xref) non vengono caricati finché non si scelgono i loro file ({{cmd:XREF}}, `R`), e le immagini appaiono come riquadri con i loro nomi di file.
