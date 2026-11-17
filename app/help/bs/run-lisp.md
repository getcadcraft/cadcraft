---
title: Pokretanje LISP rutina
summary: Šta LISP u CadCraft-u pokreće (funkcije, upite, komande, objekte, dijaloge, vla-objekte), kako upisati LISP u komandnu liniju i šta mu još nedostaje.
keywords: lisp, rutina, lsp, dcl, dijalog, komanda, defun, entget, ssget, vla, vlax, vl, getpoint, greška, kompatibilnost, šta radi
from: 571bc077
---

## Šta ćete naučiti

Šta očekivati kada učitate LISP rutinu napisanu za drugi CAD program: koji dijelovi rade u CadCraft-u, a šta još nije podržano.

CadCraft ima svoj LISP. Napisan je prema javnoj AutoLISP referenci, a ne prema tuđem programu, pa većina rutina napisanih za AutoCAD radi bez izmjena. Gdje nečega nedostaje, komandna linija navodi funkciju, pa možete razlikovati nedostatak u CadCraft-u od greške u rutini.

## Upisivanje LISP-a u komandnu liniju

Upišite izraz koji počinje sa `(` i pritisnite {{key:Enter}}: `(+ 1 2)` ispisuje `3`. `!ime` ispisuje vrijednost promjenljive. Izraz koji se još nije zatvorio čeka sljedeći red.

Na upitu izraz daje odgovor: na "Zadaj poluprečnik" upišite `(* 2 12.5)` za 25.

## Šta se izvršava

- **Jezik:** `defun` (sa lokalnim promjenljivama iza `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` i `*error*` (lokalni `*error*` također radi). Imena nisu osjetljiva na velika i mala slova; cijeli i realni brojevi se razlikuju, kao što očekujete (`(/ 7 2)` je 3).
- **Ugrađene funkcije:** matematika, liste (`car`, `cdr` i njihova familija, `assoc`, `nth`, `member`, `subst`, `append`…), nizovi znakova (`strcat`, `substr`, `strcase`, `wcmatch`…), konverzije (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrija (`polar`, `distance`, `angle`, `inters`) i datoteke (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komande:** `(defun c:NAME …)` pravi komandu. `(command …)` i `(command-s …)` upravljaju CadCraft-ovim komandama, uz `pause` za vaš odgovor.
- **Upiti:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` sa ključnim riječima iz `initget`, `entsel`, `nentsel` i `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, sa listama filtera i `-4` testovima).
- **Objekti kao liste:** `entget`, `entmod`, `entmake` (također blokovi), `entdel`, `entlast`, `entnext` (atributi reference bloka dolaze poslije nje kao ATTRIB, zatim SEQEND, pa rutine za atribute rade), `handent`, skupovi odabira, `tblsearch` i `tblnext`, `layoutlist`, `regapp`, `getvar` i `setvar` za postavke koje CadCraft ima.
- **Dijalozi:** `.dcl` datoteke sa `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` i `done_dialog`. Dugmad, polja za unos, liste, padajuće liste, prekidači, radio dugmad, redovi, kolone i okviri se svi prikazuju. Rutina koja svoj dijalog zapisuje u privremenu datoteku također radi.
- **Objekti:** `vl-load-com` (ne radi ništa; ništa ne treba učitavati), funkcije `vl-` za liste i nizove znakova, `vl-catch-all-apply`, i svojstva `vla-get-…` / `vla-put-…`, metode `vla-…` i `vlax-for` nad kolekcijama Blocks, Layers i Layouts, prostorom modela i definicijama blokova, sa varijantama i sigurnim nizovima.

## Testirane rutine

CadCraft-ovi testovi pokreću skup rutina napisanih za ove provjere (filteri odabira, upiti, komande, objekti, rukovaoci grešaka), i jednu popularnu rutinu koju su korisnici tražili po imenu: Lee Mac-ov DelBlocks, po imenu kroz njegov dijalog i odabirom bloka. CadCraft ima i vlastitu {{cmd:DELBLOCKS}}, pa vam rutina za to nije potrebna.

## Još nije napravljeno

- `grread` (sami pratite miša), reaktori (`vlr-…`), funkcije krivulja (`vlax-curve-…`), rječnici i prošireni podaci (`dictsearch`, xdata u `entget` i `entmake`), i funkcije `acet-…` iz Express Tools-a.
- Slike i slajdovi u dijalozima prikazuju se kao prazni okviri.
- Pokretanje drugog programa, Windows registar i datoteke van onih koje učitate: rutina može zapisivati i čitati vlastite privremene datoteke, koje traju dok ne zatvorite stranicu.

Kada rutina dođe do nečega od ovoga, komandna linija prikazuje "nema definicije funkcije" i naziv, i kaže da CadCraft to još nema.

## Greške koje treba izbjegavati

- **Komanda sa istim imenom kao neka od CadCraft-ovih.** CadCraft-ova vlastita komanda ostaje. Rutinu pokrenite kao `(c:NAME)` u komandnoj liniji.
- **Pokretanje LISP-a kojem ne vjerujete.** Rutina može promijeniti sve u crtežu, ali ništa izvan njega: ne može doći do vaših datoteka, drugih sajtova ili drugih aplikacija.
