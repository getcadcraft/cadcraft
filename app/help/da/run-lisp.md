---
title: Kør LISP-rutiner
summary: Hvad CadCraft's LISP kører (funktioner, prompter, kommandoer, objekter, dialoger, vla-objekter), hvordan du skriver LISP på kommandolinjen, og hvad det ikke har endnu.
keywords: lisp, rutine, lsp, dcl, dialog, kommando, defun, entget, ssget, vla, vlax, vl, getpoint, fejl, kompatibilitet, hvad der virker
from: 571bc077
---

## Hvad du lærer

Hvad du kan forvente, når du indlæser en LISP-rutine skrevet til et andet CAD-program: hvilke dele der kører i CadCraft, og hvad det ikke har endnu.

CadCraft har sin egen LISP. Den er skrevet ud fra den offentlige AutoLISP-reference, ikke fra andres program, så de fleste rutiner skrevet til AutoCAD kører uændrede. Hvor noget mangler, nævner kommandolinjen funktionen, så du kan se forskel på et hul i CadCraft og en fejl i rutinen.

## Skriv LISP på kommandolinjen

Skriv et udtryk, der starter med `(`, og tryk {{key:Enter}}: `(+ 1 2)` udskriver `3`. `!navn` udskriver værdien af en variabel. Et udtryk, der ikke er lukket endnu, venter på næste linje.

Ved en prompt svarer et udtryk på den: ved »Angiv radius« skriv `(* 2 12.5)` for 25.

## Hvad der kører

- **Sproget:** `defun` (med lokale variable efter `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` og `*error*` (en lokal `*error*` virker). Navne skelner ikke mellem store og små bogstaver; heltal og reelle tal er forskellige, som du forventer (`(/ 7 2)` er 3).
- **Indbyggede funktioner:** matematik, lister (`car`, `cdr` og deres familie, `assoc`, `nth`, `member`, `subst`, `append`…), strenge (`strcat`, `substr`, `strcase`, `wcmatch`…), konverteringer (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometri (`polar`, `distance`, `angle`, `inters`) og filer (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Kommandoer:** `(defun c:NAVN …)` laver en kommando. `(command …)` og `(command-s …)` styrer CadCraft's egne kommandoer, med `pause` til dit svar.
- **Prompter:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` med `initget`-nøgleord, `entsel`, `nentsel` og `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, med filterlister og `-4`-tests).
- **Objekter som lister:** `entget`, `entmod`, `entmake` (også blokke), `entdel`, `entlast`, `entnext` (en blokreferences attributter kommer efter den som ATTRIB, og derefter en SEQEND, så attributrutiner virker), `handent`, valgsæt, `tblsearch` og `tblnext`, `layoutlist`, `regapp`, `getvar` og `setvar` for de indstillinger CadCraft har.
- **Dialoger:** `.dcl`-filer med `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Knapper, redigeringsfelter, lister, rullelister, kontakter, radioknapper, rækker, kolonner og bokse vises alle. En rutine, der skriver sin dialog til en midlertidig fil, virker også.
- **Objekter:** `vl-load-com` (den gør ingenting; intet skal indlæses), `vl-`-liste- og strengfunktionerne, `vl-catch-all-apply`, og `vla-get-…`- / `vla-put-…`-egenskaber, `vla-…`-metoder og `vlax-for` over samlingerne Blocks, Layers og Layouts, modelrum og blokdefinitioner, med varianter og safe arrays.

## Rutiner testet

CadCraft's tests kører en række rutiner skrevet til disse kontroller (valgfiltre, prompter, kommandoer, objekter, fejlhåndterere), og én populær rutine, som folk bad om ved navn: Lee Mac's DelBlocks, både ved navn gennem dens dialog og ved at vælge en blok. CadCraft har også sin egen {{cmd:DELBLOCKS}}, så du behøver ikke en rutine til det.

## Ikke lavet endnu

- `grread` (at spore musen selv), reaktorer (`vlr-…`), kurvefunktioner (`vlax-curve-…`), ordbøger og udvidede data (`dictsearch`, xdata i `entget` og `entmake`) og Express Tools' `acet-…`-funktioner.
- Billeder og dias i dialoger vises som tomme felter.
- Kørsel af et andet program, Windows-registret og filer uden for dem, du indlæser: en rutine kan skrive og læse sine egne midlertidige filer, som holdes, til du lukker siden.

Når en rutine rammer en af disse, viser kommandolinjen "no function definition" og navnet og siger, at CadCraft ikke har den endnu.

## Fejl at undgå

- **En kommando med samme navn som en af CadCraft's.** CadCraft's egen kommando bliver. Kør rutinens som `(c:NAVN)` på kommandolinjen.
- **Kørsel af LISP, du ikke stoler på.** En rutine kan ændre alt i tegningen, men intet udenfor den: den kan ikke nå dine filer, andre websteder eller andre apps.
