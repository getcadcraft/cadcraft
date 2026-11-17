---
title: Kjør LISP-rutiner
summary: Hva CadCraft-LISP kjører (funksjoner, ledetekster, kommandoer, objekter, dialoger og vla-objekter), hvordan du skriver LISP på kommandolinjen, og hva det ikke har ennå.
keywords: lisp, rutine, lsp, dcl, dialog, kommando, defun, entget, ssget, vla, vlax, vl, getpoint, feil, kompatibilitet, hva som virker
from: 571bc077
---

## Hva du får vite

Hva du kan forvente når du laster en LISP-rutine skrevet for et annet CAD-program: hvilke deler som kjører i CadCraft, og hva det ikke har ennå.

CadCraft har sin egen LISP. Den er skrevet etter den offentlige AutoLISP-referansen, ikke etter noe annet programs, så de fleste rutiner skrevet for AutoCAD kjører uendret. Der noe mangler, nevner kommandolinjen funksjonen, slik at du kan skille et hull i CadCraft fra en feil i rutinen.

## Skriv LISP på kommandolinjen

Skriv et uttrykk som starter med `(`, og trykk {{key:Enter}}: `(+ 1 2)` skriver `3`. `!navn` skriver verdien til en variabel. Et uttrykk som ikke er lukket ennå, venter på neste linje.

Ved en ledetekst svarer et uttrykk på den: ved «Angi radius» skriver du `(* 2 12.5)` for 25.

## Hva som kjører

- **Språket:** `defun` (med lokale variabler etter `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` og `*error*` (en lokal `*error*` fungerer). Navn skiller ikke mellom store og små bokstaver. Heltall og reelle tall skiller seg, som du forventer (`(/ 7 2)` er 3).
- **Innebygde funksjoner:** matematikk, lister (`car`, `cdr` og familien deres, `assoc`, `nth`, `member`, `subst`, `append` …), strenger (`strcat`, `substr`, `strcase`, `wcmatch` …), konverteringer (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometri (`polar`, `distance`, `angle`, `inters`) og filer (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Kommandoer:** `(defun c:NAVN …)` lager en kommando. `(command …)` og `(command-s …)` styrer CadCraft sine egne kommandoer, med `pause` for ditt svar.
- **Ledetekster:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` med `initget`-nøkkelord, `entsel`, `nentsel` og `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, med filterlister og `-4`-tester).
- **Objekter som lister:** `entget`, `entmod`, `entmake` (også blokker), `entdel`, `entlast`, `entnext` (attributtene til en blokkreferanse kommer etter den som ATTRIB, og deretter et SEQEND, slik at attributtrutiner virker), `handent`, utvalgssett, `tblsearch` og `tblnext`, `layoutlist`, `regapp`, `getvar` og `setvar` for innstillingene CadCraft har.
- **Dialoger:** `.dcl`-filer med `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` og `done_dialog`. Knapper, redigeringsfelt, lister, rullegardinlister, brytere, radioknapper, rader, kolonner og bokser vises alle. En rutine som skriver dialogen sin til en midlertidig fil, virker også.
- **Objekter:** `vl-load-com` (den gjør ingenting; ingenting må lastes), `vl-`-listefunksjonene og strengfunksjonene, `vl-catch-all-apply`, og `vla-get-…`- og `vla-put-…`-egenskaper, `vla-…`-metoder og `vlax-for` over samlingene Blocks, Layers og Layouts, modellrom og blokkdefinisjoner, med varianter og sikre tabeller.

## Rutiner som er testet

CadCraft sine tester kjører et sett rutiner skrevet for disse kontrollene (valgfiltre, ledetekster, kommandoer, objekter, feilbehandlere), og én populær rutine som folk har bedt om med navn: Lee Mac sin DelBlocks, både med navn gjennom dialogen og ved å klikke på en blokk. CadCraft har også sin egen {{cmd:DELBLOCKS}}, så du trenger ikke en rutine for det.

## Ikke bygget ennå

- `grread` (å følge musen selv), reaktorer (`vlr-…`), kurvefunksjoner (`vlax-curve-…`), ordbøker og utvidede data (`dictsearch`, xdata i `entget` og `entmake`), og `acet-…`-funksjonene i Express Tools.
- Bilder og lysbilder i dialoger vises som tomme rammer.
- Å kjøre et annet program, Windows-registeret og filer utenfor dem du laster inn. En rutine kan skrive og lese sine egne midlertidige filer, som varer til du lukker siden.

Når en rutine når en av disse, viser kommandolinjen «ingen funksjonsdefinisjon» og navnet, og sier at CadCraft ikke har den ennå.

## Feil å unngå

- **En kommando med samme navn som en av CadCraft sine.** CadCraft sin egen kommando består. Kjør rutinens som `(c:NAVN)` på kommandolinjen.
- **Å kjøre LISP du ikke stoler på.** En rutine kan endre alt i tegningen, men ingenting utenfor den: den kan ikke nå filene dine, andre nettsteder eller andre apper.
