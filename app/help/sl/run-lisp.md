---
title: Zaganjanje rutin LISP
summary: Kaj izvaja LISP programa CadCraft (funkcije, pozive, ukaze, objekte, pogovorna okna, objekte vla), kako LISP vnesete v ukazno vrstico in česa mu še ni.
keywords: lisp, rutina, lsp, dcl, pogovorno okno, ukaz, defun, entget, ssget, vla, vlax, vl, getpoint, napaka, združljivost, kaj deluje
from: 571bc077
---

## Kaj se boste naučili

Kaj pričakovati, ko naložite rutino LISP, napisano za drug CAD program: kateri deli tečejo v CadCraft in česa CadCraft še nima.

CadCraft ima svoj LISP. Napisan je bil po javnem referenčnem priročniku AutoLISP, ne po programu koga drugega, zato večina rutin, napisanih za AutoCAD, deluje nespremenjena. Kjer nečesa manjka, ukazna vrstica navede ime funkcije, tako da ločite vrzel v CadCraft od napake v rutini.

## Vnos LISP v ukazno vrstico

Vnesite izraz, ki se začne z `(`, in pritisnite {{key:Enter}}: `(+ 1 2)` izpiše `3`. `!ime` izpiše vrednost spremenljivke. Izraz, ki se še ne zapre, počaka na naslednjo vrstico.

Pri pozivu izraz nanj odgovori: pri pozivu "Določite polmer" vnesite `(* 2 12.5)` za 25.

## Kaj teče

- **Jezik:** `defun` (z lokalnimi spremenljivkami za `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` in `*error*` (lokalni `*error*` deluje). Imena niso občutljiva na velike in male črke; cela in realna števila se razlikujeta, kot pričakujete (`(/ 7 2)` je 3).
- **Vgrajene funkcije:** matematika, seznami (`car`, `cdr` in njihova družina, `assoc`, `nth`, `member`, `subst`, `append` …), nizi (`strcat`, `substr`, `strcase`, `wcmatch` …), pretvorbe (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrija (`polar`, `distance`, `angle`, `inters`) in datoteke (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Ukazi:** `(defun c:IME …)` naredi ukaz. `(command …)` in `(command-s …)` poganjata lastne ukaze CadCraft, s `pause` za vaš odgovor.
- **Pozivi:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` s ključnimi besedami `initget`, `entsel`, `nentsel` in `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, s seznami filtrov in preizkusi `-4`).
- **Objekti kot seznami:** `entget`, `entmod`, `entmake` (tudi bloki), `entdel`, `entlast`, `entnext` (atributi sklica na blok pridejo za njim kot ATTRIB, nato SEQEND, tako da rutine za atribute delujejo), `handent`, izbori, `tblsearch` in `tblnext`, `layoutlist`, `regapp`, `getvar` in `setvar` za nastavitve, ki jih CadCraft ima.
- **Pogovorna okna:** datoteke `.dcl` z `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Vsi gumbi, polja za vnos, seznami, spustni seznami, preklopniki, izbirni gumbi, vrstice, stolpci in okvirji se prikažejo. Rutina, ki zapiše svoje pogovorno okno v začasno datoteko, prav tako deluje.
- **Objekti:** `vl-load-com` (ne naredi nič; ničesar ni treba naložiti), funkcije seznamov in nizov `vl-`, `vl-catch-all-apply`, lastnosti `vla-get-…` / `vla-put-…`, metode `vla-…` in `vlax-for` nad zbirkami Blocks, Layers in Layouts, prostor modela in definicije blokov, z variantami in varnimi nizi.

## Preizkušene rutine

Preizkusi CadCraft zaženejo nabor rutin, napisanih za ta preverjanja (filtri izbora, pozivi, ukazi, objekti, obravnavniki napak), in eno priljubljeno rutino, ki so jo uporabniki zahtevali po imenu: DelBlocks Lee Maca, po imenu prek njegovega pogovornega okna in z izbiro bloka. CadCraft ima tudi svoj {{cmd:DELBLOCKS}}, zato zanj ne potrebujete rutine.

## Še ni izdelano

- `grread` (sledenje miški sami), reaktorji (`vlr-…`), funkcije krivulj (`vlax-curve-…`), slovarji in razširjeni podatki (`dictsearch`, xdata v `entget` in `entmake`) ter funkcije `acet-…` iz Express Tools.
- Slike in diapozitivi v pogovornih oknih se prikažejo kot prazni okvirji.
- Zagon drugega programa, register Windows in datoteke zunaj tistih, ki jih naložite: rutina lahko zapisuje in bere svoje začasne datoteke, ki ostanejo, dokler ne zaprete strani.

Ko rutina doseže eno od teh, ukazna vrstica prikaže "ni definicije funkcije" in ime ter sporoči, da CadCraft tega še nima.

## Napake, ki se jim je treba izogniti

- **Ukaz z istim imenom, kot ga ima CadCraft.** Ukaz CadCraft ostane. Rutino zaženite kot `(c:IME)` v ukazni vrstici.
- **Zaganjanje LISP, ki mu ne zaupate.** Rutina lahko spremeni karkoli v risbi, nič zunaj nje: ne doseže vaših datotek, drugih spletnih mest ali drugih aplikacij.
