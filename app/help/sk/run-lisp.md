---
title: Spúšťanie rutín LISP
summary: Čo spúšťa LISP v CadCraft (funkcie, výzvy, príkazy, objekty, dialógové okná, objekty vla), ako zadávať LISP na riadku príkazov a čo zatiaľ nemá.
keywords: lisp, rutina, lsp, dcl, dialóg, príkaz, defun, entget, ssget, vla, vlax, vl, getpoint, chyba, kompatibilita, čo funguje
from: 571bc077
---

## Čo sa naučíte

Čo očakávať, keď načítate rutinu LISP napísanú pre iný CAD program: ktoré časti bežia v CadCraft a čo zatiaľ nemá.

CadCraft má vlastný LISP. Bol napísaný podľa verejnej referencie AutoLISP, nie podľa cudzieho programu, takže väčšina rutín napísaných pre AutoCAD beží bez zmeny. Kde niečo chýba, riadok príkazov uvedie názov funkcie, takže medzeru v CadCraft odlíšite od chyby v rutine.

## Zadávanie LISP na riadku príkazov

Zadajte výraz, ktorý začína `(`, a stlačte {{key:Enter}}: `(+ 1 2)` vypíše `3`. `!name` vypíše hodnotu premennej. Výraz, ktorý sa ešte neuzavrel, čaká na ďalší riadok.

Výraz vie odpovedať na výzvu: pri výzve "Zadajte polomer" zadajte `(* 2 12.5)` pre 25.

## Čo beží

- **Jazyk:** `defun` (s lokálnymi premennými za `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` a `*error*` (lokálne `*error*` funguje). Názvy nie sú citlivé na veľkosť písmen; celé a reálne čísla sa líšia, ako sa čaká (`(/ 7 2)` je 3).
- **Vstavané funkcie:** matematika, zoznamy (`car`, `cdr` a ich rodina, `assoc`, `nth`, `member`, `subst`, `append`…), reťazce (`strcat`, `substr`, `strcase`, `wcmatch`…), konverzie (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) a súbory (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Príkazy:** `(defun c:NAME …)` vytvorí príkaz. `(command …)` a `(command-s …)` ovládajú vlastné príkazy CadCraft, s `pause` na vašu odpoveď.
- **Výzvy:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` s kľúčovými slovami `initget`, `entsel`, `nentsel` a `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, so zoznamami filtrov a testami `-4`).
- **Objekty ako zoznamy:** `entget`, `entmod`, `entmake` (aj bloky), `entdel`, `entlast`, `entnext` (atribúty odkazu na blok nasledujú za ním ako ATTRIB a potom SEQEND, takže rutiny atribútov fungujú), `handent`, množiny výberu, `tblsearch` a `tblnext`, `layoutlist`, `regapp`, `getvar` a `setvar` pre nastavenia, ktoré CadCraft má.
- **Dialógy:** súbory `.dcl` s `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Tlačidlá, editačné polia, zoznamy, rozbaľovacie zoznamy, prepínače, prepínacie tlačidlá, riadky, stĺpce a rámy sa zobrazia. Rutina, ktorá zapíše svoj dialóg do dočasného súboru, funguje tiež.
- **Objekty:** `vl-load-com` (nerobí nič; nič sa nemusí načítavať), funkcie zoznamov a reťazcov `vl-`, `vl-catch-all-apply` a vlastnosti `vla-get-…` / `vla-put-…`, metódy `vla-…` a `vlax-for` nad kolekciami Blocks, Layers a Layouts, priestor modelu a definície blokov, s variantmi a bezpečnými poľami.

## Otestované rutiny

Testy CadCraft spúšťajú sadu rutín napísaných na tieto kontroly (filtre výberu, výzvy, príkazy, objekty, obslužné rutiny chýb) a jednu populárnu rutinu, o ktorú ľudia žiadali menom: DelBlocks od Lee Maca, menom cez jeho dialóg a výberom bloku. CadCraft má tiež vlastný {{cmd:DELBLOCKS}}, takže na to rutinu nepotrebujete.

## Ešte nie je hotové

- `grread` (sledovanie myši vlastnými silami), reaktory (`vlr-…`), funkcie kriviek (`vlax-curve-…`), slovníky a rozšírené dáta (`dictsearch`, xdata v `entget` a `entmake`) a funkcie Express Tools `acet-…`.
- Obrázky a snímky v dialógoch sa zobrazujú ako prázdne rámy.
- Spúšťanie iného programu, register Windows a súbory mimo tých, ktoré načítate: rutina môže zapisovať a čítať vlastné dočasné súbory, ktoré vydržia, kým nezavriete stránku.

Keď rutina narazí na jednu z týchto vecí, riadok príkazov zobrazí „žiadna definícia funkcie“ a názov a uvedie, že CadCraft to zatiaľ nemá.

## Chyby, ktorým sa treba vyhnúť

- **Príkaz s rovnakým názvom ako jeden z príkazov CadCraft.** Príkaz CadCraft zostane. Rutinu spustite ako `(c:NAME)` na riadku príkazov.
- **Spúšťanie LISP, ktorému nedôverujete.** Rutina môže zmeniť čokoľvek vo výkrese, ale nič mimo neho: nedostane sa k vašim súborom, iným stránkam ani iným aplikáciám.
