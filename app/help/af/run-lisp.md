---
title: Voer LISP-roetines uit
summary: Wat CadCraft se LISP uitvoer (funksies, aanwysings, opdragte, voorwerpe, dialoë, vla-voorwerpe), hoe om LISP op die opdragreël te tik, en wat dit nog nie het nie.
keywords: lisp, roetine, lsp, dcl, dialoog, opdrag, defun, entget, ssget, vla, vlax, vl, getpoint, fout, verenigbaarheid, wat werk
from: 571bc077
---

## Wat jy sal leer

Wat om te verwag wanneer jy 'n LISP-roetine laai wat vir 'n ander CAD-program geskryf is: watter dele in CadCraft loop, en wat dit nog nie het nie.

CadCraft het sy eie LISP. Dit is geskryf uit die openbare AutoLISP-verwysing, nie uit iemand anders se program nie, so die meeste roetines wat vir AutoCAD geskryf is, werk onveranderd. Waar iets ontbreek, noem die opdragreël die funksie, sodat jy 'n gaping in CadCraft kan onderskei van 'n fout in die roetine.

## Tik LISP op die opdragreël

Tik 'n uitdrukking wat met `(` begin en druk {{key:Enter}}: `(+ 1 2)` druk `3` uit. `!naam` druk die waarde van 'n veranderlike uit. 'n Uitdrukking wat nog nie sluit nie, wag vir die volgende reël.

Op 'n aanwysing antwoord 'n uitdrukking dit: by "Spesifiseer radius" tik `(* 2 12.5)` vir 25.

## Wat loop

- **Die taal:** `defun` (met plaaslike veranderlikes na `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, en `*error*` ('n plaaslike `*error*` werk). Name is nie hoofletter-sensitief nie; heelgetalle en reële getalle verskil, soos jy verwag (`(/ 7 2)` is 3).
- **Ingeboude funksies:** wiskunde, lyste (`car`, `cdr` en hul familie, `assoc`, `nth`, `member`, `subst`, `append`…), stringe (`strcat`, `substr`, `strcase`, `wcmatch`…), omskakelings (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), meetkunde (`polar`, `distance`, `angle`, `inters`) en lêers (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Opdragte:** `(defun c:NAME …)` maak 'n opdrag. `(command …)` en `(command-s …)` bestuur CadCraft se eie opdragte, met `pause` vir jou antwoord.
- **Aanwysings:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` met `initget`-sleutelwoorde, `entsel`, `nentsel` en `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, met filterlyste en `-4`-toetse).
- **Voorwerpe as lyste:** `entget`, `entmod`, `entmake` (blokke ook), `entdel`, `entlast`, `entnext` ('n blokverwysing se eienskappe kom daarna as ATTRIBs, dan 'n SEQEND, sodat eienskaproetines werk), `handent`, keuse-stelle, `tblsearch` en `tblnext`, `layoutlist`, `regapp`, `getvar` en `setvar` vir die instellings wat CadCraft het.
- **Dialoë:** `.dcl`-lêers met `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Knoppies, redigeerbokse, lysbokse, springlyste, wisselknoppe, radioknoppies, rye, kolomme en kasse wys almal. 'n Roetine wat sy dialoog na 'n tydelike lêer skryf, werk ook.
- **Voorwerpe:** `vl-load-com` (dit doen niks nie; niks hoef gelaai te word nie), die `vl-`-lys- en stringfunksies, `vl-catch-all-apply`, en `vla-get-…` / `vla-put-…`-eienskappe, `vla-…`-metodes en `vlax-for` oor die Blocks-, Layers- en Layouts-versamelings, modelruimte en blokeendefinisies, met variante en veilige skikkings.

## Roetines getoets

CadCraft se toetse voer 'n stel roetines uit wat vir hierdie kontroles geskryf is (seleksiefilters, aanwysings, opdragte, voorwerpe, foutbehandelaars), en een gewilde roetine wat mense by naam gevra het: Lee Mac se DelBlocks, by naam deur sy dialoog en deur 'n blok te kies. CadCraft het ook sy eie {{cmd:DELBLOCKS}}, so jy het nie 'n roetine daarvoor nodig nie.

## Nog nie gebou nie

- `grread` (die muis self opspoor), reaktore (`vlr-…`), kurwefunksies (`vlax-curve-…`), woordeboeke en uitgebreide data (`dictsearch`, xdata in `entget` en `entmake`), en die Express Tools se `acet-…`-funksies.
- Beelde en skyfies in dialoë wys as leë rame.
- Om 'n ander program te laat loop, die Windows-register, en lêers buite die wat jy laai: 'n roetine kan sy eie tydelike lêers skryf en lees, wat duur tot jy die bladsy toemaak.

Wanneer 'n roetine een van hierdie bereik, wys die opdragreël "no function definition" en die naam, en sê dat CadCraft dit nog nie het nie.

## Foute om te vermy

- **'n Opdrag met dieselfde naam as een van CadCraft s'n.** CadCraft se eie opdrag bly staan. Laat die roetine s'n as `(c:NAME)` op die opdragreël loop.
- **LISP laat loop wat jy nie vertrou nie.** 'n Roetine kan enigiets in die tekening verander, maar niks buite dit nie: dit kan nie by jou lêers, ander webwerwe of ander programme uitkom nie.
