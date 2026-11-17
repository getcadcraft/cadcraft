---
title: Eseguire le routine LISP
summary: Cosa esegue il LISP di CadCraft (funzioni, prompt, comandi, oggetti, finestre di dialogo, oggetti vla), come digitare LISP sulla riga di comando e cosa non è ancora disponibile.
keywords: lisp, routine, lsp, dcl, finestra di dialogo, comando, defun, entget, ssget, vla, vlax, vl, getpoint, errore, compatibilità, cosa funziona
from: 571bc077
---

## Cosa si impara

Cosa aspettarsi quando si carica una routine LISP scritta per un altro programma CAD: quali parti vengono eseguite in CadCraft e cosa non è ancora disponibile.

CadCraft ha un proprio LISP. È stato scritto a partire dal riferimento pubblico di AutoLISP, non dal programma di qualcun altro, quindi la maggior parte delle routine scritte per AutoCAD funziona senza modifiche. Dove manca qualcosa, la riga di comando indica la funzione, così si distingue una lacuna di CadCraft da un errore nella routine.

## Digitare LISP sulla riga di comando

Digitare un'espressione che inizia con `(` e premere {{key:Enter}}: `(+ 1 2)` stampa `3`. `!name` stampa il valore di una variabile. Un'espressione non ancora chiusa attende la riga successiva.

Su un prompt, un'espressione ne fornisce la risposta: al prompt "Specificare il raggio" digitare `(* 2 12.5)` per ottenere 25.

## Cosa viene eseguito

- **Il linguaggio:** `defun` (con variabili locali dopo `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` e `*error*` (un `*error*` locale funziona). I nomi non distinguono maiuscole e minuscole; interi e reali sono diversi, come ci si aspetta (`(/ 7 2)` dà 3).
- **Funzioni integrate:** matematica, liste (`car`, `cdr` e la loro famiglia, `assoc`, `nth`, `member`, `subst`, `append`…), stringhe (`strcat`, `substr`, `strcase`, `wcmatch`…), conversioni (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) e file (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comandi:** `(defun c:NAME …)` crea un comando. `(command …)` e `(command-s …)` pilotano i comandi di CadCraft, con `pause` per attendere la risposta.
- **Prompt:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` con parole chiave di `initget`, `entsel`, `nentsel` e `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, con liste di filtri e test `-4`).
- **Oggetti come liste:** `entget`, `entmod`, `entmake` (anche per i blocchi), `entdel`, `entlast`, `entnext` (gli attributi di un riferimento a blocco seguono come ATTRIB, poi un SEQEND, così le routine sugli attributi funzionano), `handent`, insiemi di selezione, `tblsearch` e `tblnext`, `layoutlist`, `regapp`, `getvar` e `setvar` per le impostazioni disponibili in CadCraft.
- **Finestre di dialogo:** file `.dcl` con `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Pulsanti, campi di modifica, elenchi, elenchi a discesa, interruttori, pulsanti di opzione, righe, colonne e riquadri vengono tutti visualizzati. Anche una routine che scrive la propria finestra in un file temporaneo funziona.
- **Oggetti:** `vl-load-com` (non fa nulla: non serve caricare nulla), le funzioni `vl-` di liste e stringhe, `vl-catch-all-apply`, e le proprietà `vla-get-…` / `vla-put-…`, i metodi `vla-…` e `vlax-for` sulle collezioni Blocks, Layers e Layouts, lo spazio modello e le definizioni di blocco, con varianti e array sicuri.

## Routine testate

I test di CadCraft eseguono un insieme di routine scritte per questi controlli (filtri di selezione, prompt, comandi, oggetti, gestori degli errori), e una routine molto richiesta per nome: DelBlocks di Lee Mac, per nome tramite la sua finestra di dialogo e scegliendo un blocco. CadCraft dispone anche del proprio {{cmd:DELBLOCKS}}, quindi non serve una routine per quello.

## Non ancora implementato

- `grread` (seguire il mouse direttamente), reattori (`vlr-…`), funzioni di curve (`vlax-curve-…`), dizionari e dati estesi (`dictsearch`, xdata in `entget` e `entmake`), e le funzioni `acet-…` di Express Tools.
- Le immagini e le diapositive nelle finestre di dialogo appaiono come riquadri vuoti.
- L'esecuzione di un altro programma, il registro di Windows e i file al di fuori di quelli caricati: una routine può scrivere e leggere i propri file temporanei, che durano finché non si chiude la pagina.

Quando una routine raggiunge una di queste funzioni, la riga di comando mostra "nessuna definizione di funzione" e il nome, e indica che CadCraft non ha ancora quella funzione.

## Errori da evitare

- **Un comando con lo stesso nome di uno di CadCraft.** Il comando di CadCraft resta. Eseguire quello della routine come `(c:NAME)` sulla riga di comando.
- **Eseguire LISP di cui non ci si fida.** Una routine può modificare qualsiasi cosa nel disegno, ma nulla al di fuori: non può accedere ai file, ad altri siti o ad altre app.
