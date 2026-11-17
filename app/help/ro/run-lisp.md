---
title: Rularea rutinelor LISP
summary: Ce rulează LISP-ul CadCraft (funcții, solicitări, comenzi, obiecte, casete de dialog, obiecte vla), cum tastați LISP pe linia de comandă și ce nu are încă.
keywords: lisp, rutină, lsp, dcl, casetă de dialog, comandă, defun, entget, ssget, vla, vlax, vl, getpoint, eroare, compatibilitate, ce funcționează
from: 571bc077
---

## Ce veți afla

Ce să așteptați când încărcați o rutină LISP scrisă pentru alt program CAD: ce părți rulează în CadCraft și ce nu are încă.

CadCraft are propriul LISP. A fost scris după referința publică AutoLISP, nu după programul altcuiva, așa că majoritatea rutinelor scrise pentru AutoCAD rulează neschimbate. Acolo unde ceva lipsește, linia de comandă numește funcția, astfel încât să deosebiți o lipsă a CadCraft de o greșeală din rutină.

## Tastarea LISP pe linia de comandă

Tastați o expresie care începe cu `(` și apăsați {{key:Enter}}: `(+ 1 2)` afișează `3`. `!nume` afișează valoarea unei variabile. O expresie care nu s-a închis încă așteaptă următorul rând.

La o solicitare, o expresie îi răspunde: la „Specificați raza” tastați `(* 2 12.5)` pentru 25.

## Ce rulează

- **Limbajul:** `defun` (cu variabile locale după `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` și `*error*` (o `*error*` locală funcționează). Numele nu fac deosebire între majuscule și minuscule; numerele întregi și cele reale diferă, cum vă așteptați (`(/ 7 2)` dă 3).
- **Funcții încorporate:** matematică, liste (`car`, `cdr` și familia lor, `assoc`, `nth`, `member`, `subst`, `append`…), șiruri (`strcat`, `substr`, `strcase`, `wcmatch`…), conversii (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrie (`polar`, `distance`, `angle`, `inters`) și fișiere (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comenzi:** `(defun c:NAME …)` creează o comandă. `(command …)` și `(command-s …)` acționează comenzile proprii ale CadCraft, cu `pause` pentru a aștepta un răspuns.
- **Solicitări:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` cu cuvinte cheie `initget`, `entsel`, `nentsel` și `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, cu liste de filtre și teste `-4`).
- **Obiecte ca liste:** `entget`, `entmod`, `entmake` (și blocuri), `entdel`, `entlast`, `entnext` (atributele unei referințe de bloc vin după ea, ca ATTRIB, apoi un SEQEND, astfel încât rutinele de atribute funcționează), `handent`, seturi de selecție, `tblsearch` și `tblnext`, `layoutlist`, `regapp`, `getvar` și `setvar` pentru setările pe care le are CadCraft.
- **Casete de dialog:** fișiere `.dcl` cu `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Butoanele, casetele de editare, listele, listele derulante, comutatoarele, butoanele radio, rândurile, coloanele și casetele se afișează toate. O rutină care își scrie caseta de dialog într-un fișier temporar funcționează și ea.
- **Obiecte:** `vl-load-com` (nu face nimic; nimic nu trebuie încărcat), funcțiile de liste și șiruri `vl-`, `vl-catch-all-apply` și proprietățile `vla-get-…` / `vla-put-…`, metodele `vla-…` și `vlax-for` peste colecțiile Blocks, Layers și Layouts, spațiul model și definițiile de bloc, cu variante și matrice sigure.

## Rutine testate

Testele CadCraft rulează un set de rutine scrise pentru aceste verificări (filtre de selecție, solicitări, comenzi, obiecte, handlere de erori) și o rutină pe care utilizatorii au cerut-o pe nume: DelBlocks al lui Lee Mac, după nume prin caseta sa de dialog și prin alegerea unui bloc. CadCraft are și propria {{cmd:DELBLOCKS}}, așa că nu aveți nevoie de o rutină pentru asta.

## Încă neimplementate

- `grread` (urmărirea manuală a mouse-ului), reactoarele (`vlr-…`), funcțiile de curbă (`vlax-curve-…`), dicționarele și datele extinse (`dictsearch`, xdata în `entget` și `entmake`) și funcțiile `acet-…` ale Express Tools.
- Imaginile și diapozitivele din casetele de dialog apar ca cadre goale.
- Rularea altui program, registrul Windows și fișierele din afara celor pe care le încărcați: o rutină poate scrie și citi propriile fișiere temporare, care există până închideți pagina.

Când o rutină ajunge la una dintre acestea, linia de comandă afișează „nu există definiție de funcție” și numele, și spune că CadCraft nu are încă funcția.

## Greșeli de evitat

- **O comandă cu același nume ca una dintre cele ale CadCraft.** Comanda CadCraft rămâne. Rulați pe cea a rutinei ca `(c:NAME)` pe linia de comandă.
- **Rularea unui LISP în care nu aveți încredere.** O rutină poate modifica orice în desen, dar nimic din afara lui: nu poate ajunge la fișierele dvs., la alte site-uri sau la alte aplicații.
