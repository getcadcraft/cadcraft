---
title: Pokreni LISP rutine
summary: Šta CadCraft-ov LISP pokreće (funkcije, prompte, komande, objekte, dijaloge, vla objekte), kako se LISP kuca u komandnu liniju i šta još nema.
keywords: lisp, rutina, lsp, dcl, dijalog, komanda, defun, entget, ssget, vla, vlax, vl, getpoint, greška, kompatibilnost, šta radi
from: 571bc077
---

## Šta ćete naučiti

Šta očekivati kada učitate LISP rutinu napisanu za drugi CAD program: koji delovi rade u CadCraft-u, a šta još nema.

CadCraft ima sopstveni LISP. Napisan je prema javnom AutoLISP priručniku, a ne prema tuđem programu, tako da većina rutina napisanih za AutoCAD radi bez izmena. Kada nešto nedostaje, komandna linija navodi funkciju, pa možete razlikovati nedostatak u CadCraft-u od greške u rutini.

## Ukucaj LISP u komandnu liniju

Ukucajte izraz koji počinje sa `(` i pritisnite {{key:Enter}}: `(+ 1 2)` ispisuje `3`. `!ime` ispisuje vrednost promenljive. Izraz koji se još nije zatvorio čeka sledeći red.

Na promptu izraz daje odgovor: na „Zadaj poluprečnik“ ukucajte `(* 2 12.5)` za 25.

## Šta radi

- **Jezik:** `defun` (sa lokalnim promenljivama posle `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` i `*error*` (lokalni `*error*` radi). Imena nisu osetljiva na velika i mala slova; celi i realni brojevi se razlikuju, kao što očekujete (`(/ 7 2)` je 3).
- **Ugrađene funkcije:** matematika, liste (`car`, `cdr` i njihova porodica, `assoc`, `nth`, `member`, `subst`, `append`…), stringovi (`strcat`, `substr`, `strcase`, `wcmatch`…), pretvaranja (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrija (`polar`, `distance`, `angle`, `inters`) i datoteke (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komande:** `(defun c:IME …)` pravi komandu. `(command …)` i `(command-s …)` pokreću CadCraft-ove sopstvene komande, uz `pause` za vaš odgovor.
- **Promptovi:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` sa `initget` ključnim rečima, `entsel`, `nentsel` i `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, sa listama filtera i `-4` proverama).
- **Objekti kao liste:** `entget`, `entmod`, `entmake` (i blokovi), `entdel`, `entlast`, `entnext` (atributi referenci blokova dolaze posle njih kao ATTRIB, zatim SEQEND, pa rutine za atribute rade), `handent`, skupovi selekcije, `tblsearch` i `tblnext`, `layoutlist`, `regapp`, `getvar` i `setvar` za podešavanja koja CadCraft ima.
- **Dijalozi:** `.dcl` datoteke sa `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Dugmad, polja za unos, liste, padajuće liste, prekidači, radio dugmad, redovi, kolone i okviri se prikazuju. Radi i rutina koja svoj dijalog upisuje u privremenu datoteku.
- **Objekti:** `vl-load-com` (ne radi ništa; ništa ne treba učitavati), `vl-` funkcije za liste i stringove, `vl-catch-all-apply`, i `vla-get-…` / `vla-put-…` svojstva, `vla-…` metode i `vlax-for` nad kolekcijama Blokova, Slojeva i Listova, prostorom modela i definicijama blokova, sa varijantama i nizovima.

## Testirane rutine

CadCraft-ovi testovi pokreću skup rutina napisanih za ove provere (filteri selekcije, promptovi, komande, objekti, rukovaoci grešaka) i jednu popularnu rutinu koju su korisnici tražili po imenu: Lee Mac-ov DelBlocks, po imenu kroz njen dijalog i izborom bloka. CadCraft ima i sopstvenu {{cmd:DELBLOCKS}}, pa za to ne treba rutina.

## Još nije napravljeno

- `grread` (praćenje miša sami), reaktori (`vlr-…`), funkcije krivih (`vlax-curve-…`), rečnici i prošireni podaci (`dictsearch`, xdata u `entget` i `entmake`), kao i `acet-…` funkcije Express Tools-a.
- Slike i slajdovi u dijalozima se prikazuju kao prazni okviri.
- Pokretanje drugog programa, Windows registar i datoteke van onih koje učitate: rutina može da piše i čita sopstvene privremene datoteke, koje traju dok ne zatvorite stranicu.

Kada rutina naiđe na nešto od ovoga, komandna linija prikazuje „nema definicije funkcije“ i naziv, i kaže da CadCraft to još nema.

## Greške koje treba izbeći

- **Komanda sa istim imenom kao jedna od CadCraft-ovih.** CadCraft-ova sopstvena komanda ostaje. Rutinu pokrenite kao `(c:IME)` na komandnoj liniji.
- **Pokretanje LISP-a kome ne verujete.** Rutina može da menja šta god u crtežu, ali ništa van njega: ne može da pristupi vašim datotekama, drugim sajtovima ili drugim aplikacijama.
