---
title: Keyra LISP-rútínur
summary: Hvað LISP CadCraft keyrir (föll, spurningar, skipanir, hlutir, valgluggar, vla-hlutir), hvernig LISP er skrifað á skipanalínuna og hvað vantar enn.
keywords: lisp, rútína, lsp, dcl, valgluggi, skipun, defun, entget, ssget, vla, vlax, vl, getpoint, villa, samhæfi, hvað virkar
from: 571bc077
---

## Það sem þú lærir

Hvers má búast við þegar LISP-rútína sem skrifuð er fyrir annað CAD-forrit er hlaðin: hvaða hlutar keyra í CadCraft og hvað vantar enn.

CadCraft er með sitt eigið LISP. Það var skrifað eftir opinberri AutoLISP-tilvísun, ekki eftir forriti neins annars, svo flestar rútínur sem skrifaðar eru fyrir AutoCAD keyra óbreyttar. Þar sem eitthvað vantar nefnir skipanalínan fallið, svo þú getur greint bil í CadCraft frá villu í rútínunni.

## Skrifaðu LISP á skipanalínuna

Skrifaðu segð sem byrjar á `(` og ýttu á {{key:Enter}}: `(+ 1 2)` prentar `3`. `!nafn` prentar gildi breytu. Segð sem er ekki enn lokuð bíður eftir næstu línu.

Við spurningu svarar segð henni: við „Veldu radíus“ skrifarðu `(* 2 12.5)` fyrir 25.

## Hvað keyrir

- **Tungumálið:** `defun` (með staðbundnum breytum eftir `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` og `*error*` (staðbundið `*error*` virkar). Heiti eru ekki háð há- og lágstöfum; heiltölur og rauntölur eru ólíkar, eins og þú býst við (`(/ 7 2)` er 3).
- **Innbyggð föll:** stærðfræði, listar (`car`, `cdr` og þeirra fjölskylda, `assoc`, `nth`, `member`, `subst`, `append`…), strengir (`strcat`, `substr`, `strcase`, `wcmatch`…), umbreytingar (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), rúmfræði (`polar`, `distance`, `angle`, `inters`) og skrár (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Skipanir:** `(defun c:NAME …)` býr til skipun. `(command …)` og `(command-s …)` stjórna eigin skipunum CadCraft, með `pause` fyrir svarið þitt.
- **Spurningar:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` með `initget`-lyklum, `entsel`, `nentsel` og `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, með síulistum og `-4`-prófum).
- **Hlutir sem listar:** `entget`, `entmod`, `entmake` (líka blokkir), `entdel`, `entlast`, `entnext` (eigindi blokkavísunar koma á eftir henni sem ATTRIB, og síðan SEQEND, svo eigindarútínur virka), `handent`, valmengi, `tblsearch` og `tblnext`, `layoutlist`, `regapp`, `getvar` og `setvar` fyrir stillingarnar sem CadCraft hefur.
- **Valgluggar:** `.dcl`-skrár með `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` og `done_dialog`. Hnappar, innsláttarreitir, listakassar, fellilistar, gátreitir, valrofar, raðir, dálkar og kassar birtast öll. Rútína sem skrifar valgluggann sinn í tímabundna skrá virkar líka.
- **Hlutir (COM):** `vl-load-com` (gerir ekkert; ekkert þarf að hlaða), `vl-`-lista- og strengjaföll, `vl-catch-all-apply`, og `vla-get-…` / `vla-put-…` eiginleikar, `vla-…`-aðferðir og `vlax-for` yfir söfnin Blocks, Layers og Layouts, líkanrýmið og blokkaskilgreiningar, með afbrigðum og öruggum fylkjum.

## Prófaðar rútínur

Prófanir CadCraft keyra safn rútína sem skrifaðar eru fyrir þessar prófanir (valsíur, spurningar, skipanir, hluti, villumeðhöndlara), og eina vinsæla rútínu sem fólk bað um með nafni: DelBlocks eftir Lee Mac, bæði með nafni í valglugganum og með því að velja blokk. CadCraft er líka með eigin {{cmd:DELBLOCKS}}, svo þú þarft ekki rútínu fyrir það.

## Ekki enn smíðað

- `grread` (að fylgjast með músinni sjálfur), keðjur (`vlr-…`), ferilföll (`vlax-curve-…`), orðabækur og viðbótargögn (`dictsearch`, xdata í `entget` og `entmake`), og `acet-…`-föll Express Tools.
- Myndir og skyggnur í valgluggum birtast sem auðir rammar.
- Keyrsla annarra forrita, Windows-skrásetningin og skrár utan þeirra sem þú hleður: rútína getur skrifað og lesið eigin tímabundnar skrár, sem endast þar til þú lokar síðunni.

Þegar rútína nær í eitthvað af þessu sýnir skipanalínan „engin skilgreining falls“ og heitið, og segir að CadCraft hafi það ekki enn.

## Mistök sem best er að forðast

- **Skipun með sama nafni og ein af skipunum CadCraft.** Skipun CadCraft helst. Keyrðu rútínu þeirrar skipunar sem `(c:NAME)` á skipanalínunni.
- **Að keyra LISP sem þú treystir ekki.** Rútína getur breytt hverju sem er í teikningunni, en engu utan hennar: hún nær ekki í skrárnar þínar, aðrar síður eða önnur forrit.
