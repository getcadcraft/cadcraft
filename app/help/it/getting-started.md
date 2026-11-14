---
title: Primi passi con CadCraft
summary: Cosa fa l'app di disegno CadCraft, dove funziona e il primo disegno, dallo schermo vuoto al file salvato.
keywords: inizio, primo disegno, nuovo, apri, salva, salva con nome, iniziare, tutorial, introduzione, avvio rapido
from: 1a56c575
---

CadCraft è un'app di disegno 2D. Si disegnano e si modificano linee, archi, polilinee, testi, quote e blocchi, si preparano tavole con cartigli e viewport e le si stampa in PDF. Apre disegni DWG e DXF e li salva come DWG o DXF.

Funziona nel browser. Non c'è nulla da installare: il sito fornisce l'indirizzo e l'intera app si carica nella pagina. I disegni si aprono dal proprio computer e vengono salvati di nuovo su di esso. **Non viene caricato nulla.**

Chi ha già disegnato può leggere, dopo questa pagina, [Chi arriva da altri programmi di disegno](topic:coming-from). La maggior parte delle abitudini resta valida e le poche che cambiano sono elencate lì.

## Si preferisce essere guidati?

Digitare `TOUR` (oppure fare clic su {{ui:Segui la guida}} nella scheda iniziale, o su {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Ripeti la guida}}). Sei brevi passi in un riquadro sopra il disegno: disegnare una linea e un cerchio, spostarlo, rifilarlo, cancellare qualcosa e quotarlo. Ogni passo termina quando lo si esegue ed è possibile saltare un passo o l'intera guida. Parte da sola solo la prima volta. La [scheda riassuntiva](topic:cheat-sheet) riporta i 40 comandi usati più spesso e la [mappa dei comandi](topic:command-map) tutti i comandi esistenti.

## Cosa serve

- Una versione recente di Chrome, Edge, Firefox o Safari su un computer Mac, Windows o Linux. Vedere [Browser e piattaforme](common:browsers).
- Un mouse con rotellina è la soluzione più comoda. Funziona anche un trackpad; vedere [Mouse, trackpad e tocco](topic:mouse-trackpad-touch).
- Una tastiera. CadCraft si usa con comandi digitati, come la maggior parte dei programmi di disegno.

## L'idea in un paragrafo

Si digita un comando (o si fa clic sul suo pulsante) e la riga di comando in basso pone le domande una alla volta: "Specificare il primo punto", "Specificare il punto successivo". Si risponde a ogni domanda facendo clic nel disegno o digitando un valore, poi premendo {{key:Enter}}. Premendo {{key:Esc}} si annulla. Questo è tutto il modello di interazione; il resto è dettaglio.

## Il primo disegno

Si disegnerà un rettangolo di 4000 per 3000 con delle linee, si metterà un cerchio al centro e si salverà il file.

1. Aprire CadCraft. La riga di comando in basso mostra `Comando:` e l'area di disegno mostra una breve scheda "Inizia a disegnare".
2. Digitare `L` e premere {{key:Enter}}. Non serve fare prima clic sulla riga di comando: ciò che si digita finisce lì.
3. Il prompt diventa `Specificare il primo punto:`. Digitare `0,0` e premere {{key:Enter}}.
4. Digitare `@4000,0` e premere {{key:Enter}}. Compare una linea che va verso destra. La `@` significa "dall'ultimo punto".
5. Digitare `@0,3000` e premere {{key:Enter}}.
6. Digitare `@-4000,0` e premere {{key:Enter}}.
7. Digitare `C` e premere {{key:Enter}}. `C` è l'opzione Chiudi: l'ultima linea torna al primo punto e il comando termina.
8. Fare clic su {{ui:Estensione}} nel gruppo Vista della barra degli strumenti. Il rettangolo riempie lo schermo.

Ora si dovrebbero vedere quattro linee che formano un rettangolo, e la cronologia sopra la riga di comando elenca ciò che è stato digitato.

9. Digitare `C` e premere {{key:Enter}} per avviare il comando cerchio.
10. Digitare `2000,1500` e premere {{key:Enter}} per il centro.
11. Digitare `500` e premere {{key:Enter}} per il raggio.

Al centro del rettangolo compare un cerchio.

12. Premere {{key:Mod+S}}, oppure fare clic su {{ui:Salva}} nel gruppo File.

Il browser scarica `Drawing1.dwg` nella cartella dei download abituale e la cronologia indica che è stata salvata una copia come DWG. Quel file si apre di nuovo in CadCraft e nella maggior parte degli altri programmi CAD. (Se in precedenza, in questo browser, si è scelto DXF in {{ui:Salva con nome}}, un nuovo disegno viene salvato invece come `Drawing1.dxf`.)

:::tip
Premere {{key:Enter}} su una riga di comando vuota per ripetere l'ultimo comando. Si può premere {{key:Space}} al posto di {{key:Enter}}: fuori dal testo fa la stessa cosa.
:::

## Aprire un disegno esistente

1. Premere {{key:Mod+O}}, oppure fare clic su {{ui:Apri}}.
2. Scegliere un file `.dwg` o `.dxf` nel selettore di file.

È anche possibile trascinare un file DWG o DXF da {{pick:mac=Finder|windows=Esplora file|linux=il proprio gestore di file}} e rilasciarlo sull'area di disegno. Il file viene letto nella pagina e non lascia mai il computer.

Vedere [File: cosa si apre, cosa si salva](topic:files) per sapere cosa viene mantenuto e cosa convertito.

## Salvare: cosa aspettarsi

Il salvataggio in un browser funziona in modo diverso da un programma desktop:

- {{ui:Salva}} **scarica sempre una nuova copia**. Non sovrascrive il file aperto. Se nella cartella dei download esiste già un file con lo stesso nome, il browser di solito aggiunge un numero, ad esempio `Drawing1 (1).dwg`.
- {{ui:Salva}} usa il formato del disegno: DWG se si è aperto un DWG, DXF se si è aperto un DXF. Per scegliere, premere {{key:Mod+Shift+S}} oppure fare clic su {{ui:Salva con nome}}, poi selezionare {{ui:DWG}} (e la sua versione), {{ui:DXF R12}} o {{ui:DXF 2000}}. Vedere [Salvataggio](topic:files#saving).
- Il file aperto non viene mai modificato.
- Aprire un altro file, o {{ui:Nuovo}}, lo mette in una scheda propria sopra il disegno, quindi nulla di ciò che è aperto viene chiuso. Se si chiude la scheda di un disegno o si lascia la pagina con modifiche non salvate, CadCraft chiede prima: {{ui:Salva prima una copia}}, scartare oppure {{ui:Annulla}}. Chiudendo la scheda del browser compare invece la domanda "Uscire dal sito?" del browser stesso.

Il salvataggio nel cloud non è ancora disponibile. Dove vanno i file e perché restano privati è spiegato in [I file e la privacy](common:your-files).

## Dove andare dopo

Premere {{key:F1}} o fare clic su {{ui:Guida}} nella barra in alto per aprire questa guida accanto al disegno in qualsiasi momento. Funziona senza connessione.

- [Lo schermo di CadCraft](topic:workspace) nomina ogni barra e pannello.
- [Disegnare con le coordinate](topic:draw-with-coordinates) è il miglior primo percorso guidato.
- [Tastiera e mouse](topic:keyboard) elenca tutti i tasti.
- Digitare `HELP` nella riga di comando per un elenco di tutti i comandi, oppure leggere il [Riferimento dei comandi](topic:commands).
