---
title: Patakbuhin ang mga LISP routine
summary: Ano ang tumatakbo sa LISP ng CadCraft (mga function, prompt, command, object, dialog, vla object), paano mag-type ng LISP sa command line, at ano ang wala pa.
keywords: lisp, routine, lsp, dcl, dialog, command, defun, entget, ssget, vla, vlax, vl, getpoint, error, compatibility, ano ang gumagana
from: 571bc077
---

## Ano ang matututunan mo

Ano ang aasahan kapag nag-load ka ng LISP routine na isinulat para sa ibang CAD program: aling bahagi ang tumatakbo sa CadCraft, at ano ang wala pa.

May sariling LISP ang CadCraft. Isinulat ito mula sa pampublikong AutoLISP reference, hindi mula sa programa ng sinuman, kaya karamihan ng routine na isinulat para sa AutoCAD ay tumatakbo nang walang pagbabago. Kapag may kulang, ipinapakita ng command line ang pangalan ng function, para malaman mo kung ang kulang ay nasa CadCraft o mali ang routine.

## I-type ang LISP sa command line

I-type ang expression na nagsisimula sa `(` at pindutin ang {{key:Enter}}: ang `(+ 1 2)` ay magpi-print ng `3`. Ang `!name` ay nagpapakita ng value ng isang variable. Ang expression na hindi pa nagsasara ay naghihintay sa susunod na linya.

Sa isang prompt, sumasagot ang expression: sa "Specify radius", i-type ang `(* 2 12.5)` para sa 25.

## Ano ang tumatakbo

- **Ang wika:** `defun` (may mga local pagkatapos ng `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, at `*error*` (gumagana ang local na `*error*`). Hindi case-sensitive ang mga pangalan; magkaiba ang integer at real, gaya ng inaasahan mo (`(/ 7 2)` ay 3).
- **Mga built-in na function:** matematika, lista (`car`, `cdr` at ang kanilang pamilya, `assoc`, `nth`, `member`, `subst`, `append`…), string (`strcat`, `substr`, `strcase`, `wcmatch`…), conversion (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometry (`polar`, `distance`, `angle`, `inters`) at file (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Mga command:** ang `(defun c:NAME …)` ay gumagawa ng command. Ang `(command …)` at `(command-s …)` ay nagpapatakbo ng sariling command ng CadCraft, kasama ang `pause` para sa sagot mo.
- **Mga prompt:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` na may `initget` keyword, `entsel`, `nentsel` at `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, na may filter list at `-4` test).
- **Mga object bilang lista:** `entget`, `entmod`, `entmake` (pati mga block), `entdel`, `entlast`, `entnext` (ang attribute ng block reference ay nasa likod nito bilang ATTRIB, saka SEQEND, kaya gumagana ang mga attribute routine), `handent`, mga selection set, `tblsearch` at `tblnext`, `layoutlist`, `regapp`, `getvar` at `setvar` para sa mga setting na mayroon ang CadCraft.
- **Mga dialog:** mga `.dcl` file na may `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Lumalabas ang mga button, edit box, list box, popup list, toggle, radio button, row, column at box. Gumagana rin ang routine na nagsusulat ng dialog nito sa pansamantalang file.
- **Mga object:** `vl-load-com` (wala itong ginagawa; walang kailangang i-load), ang mga `vl-` list at string function, `vl-catch-all-apply`, at ang mga property na `vla-get-…` / `vla-put-…`, mga method na `vla-…`, at `vlax-for` sa mga koleksyon ng Blocks, Layers at Layouts, model space at block definition, kasama ang mga variant at safe array.

## Mga routine na nasubukan

Nagpapatakbo ang mga test ng CadCraft ng isang hanay ng mga routine na isinulat para sa mga pagsusuring ito (selection filter, prompt, command, object, error handler), at isang sikat na routine na hiniling ng mga tao sa pangalan: ang DelBlocks ni Lee Mac, sa pangalan sa pamamagitan ng dialog nito at sa pamamagitan ng pag-pick ng block. May sariling {{cmd:DELBLOCKS}} din ang CadCraft, kaya hindi mo kailangan ng routine para doon.

## Hindi pa nagagawa

- `grread` (pagsubaybay sa mouse nang ikaw mismo), reactors (`vlr-…`), curve function (`vlax-curve-…`), dictionaries at extended data (`dictsearch`, xdata sa `entget` at `entmake`), at ang mga function ng Express Tools na `acet-…`.
- Ang mga larawan at slide sa dialog ay lumalabas bilang blangkong frame.
- Ang pagpapatakbo ng ibang programa, ang Windows registry, at mga file sa labas ng mga na-load mo: ang routine ay maaaring magsulat at magbasa ng sarili nitong pansamantalang file, na tumatagal hanggang isara mo ang pahina.

Kapag naabot ng isang routine ang isa sa mga ito, ipinapakita ng command line ang "no function definition" at ang pangalan, at sinasabing hindi pa ito kayang gawin ng CadCraft.

## Mga dapat iwasan

- **Command na may kaparehong pangalan sa isa sa CadCraft.** Nananatili ang sariling command ng CadCraft. Patakbuhin ang routine bilang `(c:NAME)` sa command line.
- **Pagpapatakbo ng LISP na hindi mo pinagkakatiwalaan.** Maaaring baguhin ng routine ang anumang nasa drawing, pero wala sa labas nito: hindi nito maaabot ang iyong mga file, ibang site o ibang app.
