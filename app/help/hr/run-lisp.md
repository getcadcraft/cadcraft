---
title: Pokretanje LISP rutina
summary: Što LISP u CadCraftu pokreće (funkcije, upite, naredbe, objekte, dijaloge, vla objekte), kako upisati LISP u naredbeni redak i što još nema.
keywords: lisp, rutina, lsp, dcl, dijalog, naredba, defun, entget, ssget, vla, vlax, vl, getpoint, pogreška, kompatibilnost, što radi
from: 571bc077
---

## Što ćete naučiti

Što očekivati kad učitate LISP rutinu napisanu za drugi CAD program: koji dijelovi rade u CadCraftu i što još nedostaje.

CadCraft ima vlastiti LISP. Napisan je prema javnoj AutoLISP referenci, a ne prema tuđem programu, pa većina rutina napisanih za AutoCAD radi nepromijenjena. Gdje nešto nedostaje, naredbeni redak imenuje funkciju, pa možete razlikovati nedostatak u CadCraftu od pogreške u rutini.

## Upišite LISP u naredbeni redak

Upišite izraz koji počinje s `(` i pritisnite {{key:Enter}}: `(+ 1 2)` ispisuje `3`. `!name` ispisuje vrijednost varijable. Izraz koji se još nije zatvorio čeka sljedeći redak.

Na upit izraz je odgovor: na upit „Unesite radijus“ upišite `(* 2 12.5)` za 25.

## Što radi

- **Jezik:** `defun` (s lokalnim varijablama iza `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` i `*error*` (lokalni `*error*` radi). Imena ne razlikuju velika i mala slova; cijeli i realni brojevi razlikuju se kao što očekujete (`(/ 7 2)` je 3).
- **Ugrađene funkcije:** matematika, liste (`car`, `cdr` i njihova obitelj, `assoc`, `nth`, `member`, `subst`, `append`…), nizovi (`strcat`, `substr`, `strcase`, `wcmatch`…), pretvorbe (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrija (`polar`, `distance`, `angle`, `inters`) i datoteke (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Naredbe:** `(defun c:NAME …)` stvara naredbu. `(command …)` i `(command-s …)` pokreću CadCraftove naredbe, uz `pause` za vaš odgovor.
- **Upiti:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` s ključnim riječima iz `initget`, `entsel`, `nentsel` i `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, s popisima filtera i `-4` testovima).
- **Objekti kao liste:** `entget`, `entmod`, `entmake` (i blokovi), `entdel`, `entlast`, `entnext` (atributi reference bloka slijede je kao ATTRIB, zatim SEQEND, pa rutine za atribute rade), `handent`, skupovi odabira, `tblsearch` i `tblnext`, `layoutlist`, `regapp`, `getvar` i `setvar` za postavke koje CadCraft ima.
- **Dijalozi:** `.dcl` datoteke s `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` i `done_dialog`. Prikazuju se gumbi, polja za unos, popisi, skočni popisi, prekidači, radio gumbi, reci, stupci i okviri. Radi i rutina koja svoj dijalog zapisuje u privremenu datoteku.
- **Objekti:** `vl-load-com` (ne radi ništa; ništa se ne mora učitavati), funkcije `vl-` za liste i nizove, `vl-catch-all-apply`, te `vla-get-…` i `vla-put-…` svojstva, `vla-…` metode i `vlax-for` nad zbirkama Blocks, Layers i Layouts, prostorom modela i definicijama blokova, s varijantama i sigurnim nizovima.

## Testirane rutine

CadCraftovi testovi pokreću skup rutina napisanih za ove provjere (filteri odabira, upiti, naredbe, objekti, rukovatelji pogreškama) i jednu popularnu rutinu koju su korisnici tražili po imenu: DelBlocks autora Leeja Maca, po imenu kroz njegov dijalog i odabirom bloka. CadCraft ima i vlastiti {{cmd:DELBLOCKS}}, pa rutina za to nije potrebna.

## Još nije izrađeno

- `grread` (praćenje miša vlastitim kodom), reaktori (`vlr-…`), funkcije krivulja (`vlax-curve-…`), rječnici i prošireni podaci (`dictsearch`, xdata u `entget` i `entmake`) te `acet-…` funkcije iz Express Tools.
- Slike i dijapozitivi u dijalozima prikazuju se kao prazni okviri.
- Pokretanje drugog programa, Windows registar i datoteke izvan onih koje učitate: rutina može zapisivati i čitati vlastite privremene datoteke, koje traju dok ne zatvorite stranicu.

Kad rutina dođe do nečega od ovoga, naredbeni redak prikazuje „nema definicije funkcije“ i naziv te kaže da CadCraft to još nema.

## Pogreške koje treba izbjeći

- **Naredba istog imena kao jedna od CadCraftovih.** CadCraftova naredba ostaje. Rutinu pokrenite kao `(c:NAME)` u naredbenom retku.
- **Pokretanje LISP-a kojem ne vjerujete.** Rutina može promijeniti sve u crtežu, ali ništa izvan njega: ne može doći do vaših datoteka, drugih stranica ni drugih aplikacija.
