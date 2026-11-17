---
title: Socodsii habraacyada LISP
summary: Waxa LISP-ka CadCraft ku socodsiiyo (shaqooyinka, weydiimaha, amarrada, shayada, wada-hadallada, shayada vla), sida LISP loogu qoro sadarka amarka, iyo waxa aanu weli lahayn.
keywords: lisp, habraac, lsp, dcl, wada-hadal, amar, defun, entget, ssget, vla, vlax, vl, getpoint, khalad, u hoggaansan, waxa shaqeeya
from: 571bc077
---

## Waxa aad baranaysaa

Waxa la filayo marka habraac LISP ah oo loogu talagalay barnaamij CAD kale la soo rogo: qaybaha ka shaqeeya CadCraft, iyo waxa aanu weli lahayn.

CadCraft wuxuu leeyahay LISP u gaar ah. Waxaa lagu qoray buugga tixraaca AutoLISP ee furan, ma aha wax laga soo qaatay barnaamij qof kale; sidaas darteed inta badan habraacyada loogu talagalay AutoCAD way shaqeeyaan iyada oo aan wax laga beddelin. Meel uu waxa maqan yahay, sadarka amarka wuxuu magacaabaa shaqada, si aad u kala saari karto kala-goynta CadCraft iyo khaladka habraaca.

## Ku qor LISP sadarka amarka

Ku qor tilmaam ku bilaabma `(` oo taabo {{key:Enter}}: `(+ 1 2)` wuxuu soo bandhigayaa `3`. `!magac` wuxuu soo bandhigayaa qiimaha doorsoomaha. Tilmaam aan weli xirmin wuxuu sugayaa sadarka xigta.

Weydiin kasta ka jawaab tilmaam: marka hadalku yahay "Dooro radius", ku qor `(* 2 12.5)` si aad u hesho 25.

## Waxa shaqeeya

- **Luuqadda:** `defun` (oo leh doorsoomayaasha gudaha ka dib `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, iyo `*error*` (`*error*` gudaha ayaa shaqeeya). Magacyadu ma kala saaran xarfaha weyn iyo yar; tirooyinka tiro dhabani iyo tiro sax ah way kala duwan yihiin, sida aad filaysay (`(/ 7 2)` waa 3).
- **Shaqooyinka dhismaha ah:** xisaabta, liisaska (`car`, `cdr` iyo qoyskooda, `assoc`, `nth`, `member`, `subst`, `append`…), qoraallada (`strcat`, `substr`, `strcase`, `wcmatch`…), beddelka (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), joomatari (`polar`, `distance`, `angle`, `inters`) iyo faylalka (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Amarrada:** `(defun c:NAME …)` wuxuu sameeyaa amar. `(command …)` iyo `(command-s …)` waxay socodsiiyaan amarrada CadCraft, iyadoo `pause` uu sugayo jawaabtaada.
- **Weydiimaha:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` oo leh ereyada `initget`, `entsel`, `nentsel` iyo `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, oo leh liisaska shaandhaynta iyo tijaabooyinka `-4`).
- **Shayada liisaska ahaan:** `entget`, `entmod`, `entmake` (blocks sidoo kale), `entdel`, `entlast`, `entnext` (sifooyinka block reference-ka waxay ka dambeeyaan sida ATTRIB, ka dibna SEQEND, si habraacyada sifooyinka ay u shaqeeyaan), `handent`, doorashooyinka, `tblsearch` iyo `tblnext`, `layoutlist`, `regapp`, `getvar` iyo `setvar` dejinta CadCraft leedahay.
- **Wada-hadallada:** faylalka `.dcl` oo leh `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Badhamada, sanduuqyada qoraalka, liisaska, liisaska hoos-u-furmaya, furayaasha iyo sanduuqyada safka, tiirarka iyo sanduuqyada oo dhan way muuqdaan. Habraac wada-hadalkiisa ku qora fayl ku meel-gaar ah wuu shaqeeyaa.
- **Shayada:** `vl-load-com` (waxba ma sameeyo; waxba ma u baahna in la soo rarto), shaqooyinka liisaska iyo qoraallada `vl-`, `vl-catch-all-apply`, iyo `vla-get-…` / `vla-put-…` sifooyinka, habraacyada `vla-…` iyo `vlax-for` oo ku saabsan ururrada Blocks, Layers iyo Layouts, model space iyo qeexidda blocks, oo leh variants iyo safe arrays.

## Habraacyada la tijaabiyay

Tijaabooyinka CadCraft waxay socodsiiyaan habraacyo loo qoray hubinta kuwan (shaandhooyinka doorashada, weydiimaha, amarrada, shayada, maareeyeyaasha khaladka), iyo mid caan ah oo dad badan magac ahaan weydiiyeen: Lee Mac's DelBlocks, magac ahaan wada-hadalkiisa iyo marka block la doorto. CadCraft wuxuu leeyahay {{cmd:DELBLOCKS}} gaar ah, sidaas darteed habraac looma baahna taas.

## Weli lama dhisin

- `grread` (raacida mouse-ka adiga), reactors (`vlr-…`), shaqooyinka curve-ka (`vlax-curve-…`), qaamuusyada iyo xogta dheeraadka ah (`dictsearch`, xdata ee `entget` iyo `entmake`), iyo shaqooyinka `acet-…` ee Express Tools.
- Sawirrada iyo slide-yada wada-hadallada waxay u muuqdaan xidhmo madhan.
- Barnaamij kale oo socodsiin, diiwaanka Windows, iyo faylal aan adiga laga soo rarin: habraac wuxuu qori karaa oo akhrin karaa faylashiisa ku meel-gaarka ah, kuwaas oo jiri doona ilaa aad bogga xirto.

Marka habraac gaaro mid ka mid ah kuwan, sadarka amarka wuxuu muujinayaa "ma jiro qeexid shaqo" iyo magaca, wuxuuna sheegayaa in CadCraft aanu weli haysan.

## Khaladaadka laga fogaado

- **Amar magac isku mid ah oo ka mid ah kuwa CadCraft.** Amarka CadCraft wuu ku sii jiraa. Amarka habraaca ku socodsii `(c:NAME)` sadarka amarka.
- **LISP aadan aamin socodsiinta.** Habraac wuxuu bedeli karaa wax kasta oo ku jira naqshadda, laakiin ma jiro wax ka baxsan: ma gaari karo faylalkaaga, goobaha kale ama barnaamijyada kale.
