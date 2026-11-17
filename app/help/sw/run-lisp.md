---
title: Endesha taratibu za LISP
summary: Kile LISP ya CadCraft inaendesha (kazi, vidokezo, amri, vitu, vidirisha, vitu vya vla), jinsi ya kuandika LISP kwenye mstari wa amri, na kile ambacho bado hakina.
keywords: lisp, utaratibu, lsp, dcl, kidirisha, amri, defun, entget, ssget, vla, vlax, vl, getpoint, hitilafu, upatanifu, kinachofanya kazi
from: 571bc077
---

## Utakachojifunza

Unachotarajia unapopakia utaratibu wa LISP ulioandikwa kwa programu nyingine ya CAD: sehemu zipi zinaendeshwa kwenye CadCraft, na zipi bado hazipo.

CadCraft ina LISP yake. Iliandikwa kutoka kwenye marejeo ya umma ya AutoLISP, si kutoka programu ya mtu mwingine, kwa hiyo taratibu nyingi zilizoandikwa kwa AutoCAD zinaendeshwa bila mabadiliko. Mahali kitu kinapokosekana, mstari wa amri unataja kazi hiyo, ili uweze kutofautisha pengo la CadCraft na kosa la utaratibu.

## Andika LISP kwenye mstari wa amri

Andika usemi unaoanza na `(` kisha bonyeza {{key:Enter}}: `(+ 1 2)` huchapisha `3`. `!name` huchapisha thamani ya kigezo. Usemi usiofungwa bado unasubiri mstari unaofuata.

Kwenye kidokezo, usemi hujibu: kwenye 'Specify radius' andika `(* 2 12.5)` kwa 25.

## Kinachoendeshwa

- **Lugha yenyewe:** `defun` (pamoja na vigezo vya ndani baada ya `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, na `*error*` (`*error*` ya ndani inafanya kazi). Majina hayajali herufi kubwa au ndogo; nambari kamili na nambari halisi ni tofauti, kama unavyotarajia (`(/ 7 2)` ni 3).
- **Kazi zilizojengwa ndani:** hisabati, orodha (`car`, `cdr` na familia yake, `assoc`, `nth`, `member`, `subst`, `append`…), mifuatano (`strcat`, `substr`, `strcase`, `wcmatch`…), ubadilishaji (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), jiometri (`polar`, `distance`, `angle`, `inters`) na faili (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Amri:** `(defun c:NAME …)` huunda amri. `(command …)` na `(command-s …)` huendesha amri za CadCraft zenyewe, pamoja na `pause` kwa jibu lako.
- **Vidokezo:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` pamoja na maneno ya `initget`, `entsel`, `nentsel` na `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, pamoja na orodha za vichujio na majaribio ya `-4`).
- **Vitu kama orodha:** `entget`, `entmod`, `entmake` (pia bloku), `entdel`, `entlast`, `entnext` (sifa za marejeo la bloku zinakuja baada yake kama ATTRIB, kisha SEQEND, kwa hiyo taratibu za sifa zinafanya kazi), `handent`, seti za uteuzi, `tblsearch` na `tblnext`, `layoutlist`, `regapp`, `getvar` na `setvar` kwa mipangilio ambayo CadCraft inayo.
- **Vidirisha:** faili za `.dcl` zenye `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Vitufe, visanduku vya kuingiza, orodha, orodha ibukizi, swichi, vitufe vya redio, safu mlalo, safu wima na visanduku vyote vinaonyeshwa. Utaratibu unaoandika kidirisha chake kwenye faili la muda pia unafanya kazi.
- **Vitu:** `vl-load-com` (haifanyi chochote; hakuna kitu kinachohitaji kupakiwa), kazi za orodha na mifuatano za `vl-`, `vl-catch-all-apply`, na sifa za `vla-get-…` / `vla-put-…`, mbinu za `vla-…` na `vlax-for` juu ya mkusanyiko wa Blocks, Layers na Layouts, nafasi ya modeli na ufafanuzi wa bloku, pamoja na vibadala na safe arrays.

## Taratibu zilizojaribiwa

Majaribio ya CadCraft huendesha seti ya taratibu zilizoandikwa kwa ukaguzi huu (vichujio vya uteuzi, vidokezo, amri, vitu, vishughulikiaji vya makosa), pamoja na utaratibu mmoja maarufu ambao watu waliuomba kwa jina: Lee Mac's DelBlocks, kwa jina kupitia kidirisha chake na kwa kuchagua bloku. CadCraft pia ina {{cmd:DELBLOCKS}} yake, kwa hiyo huhitaji utaratibu kwa hilo.

## Bado havijajengwa

- `grread` (kufuatilia kipanya mwenyewe), vitendo vya majibu (reactors, `vlr-…`), kazi za mikunjo (`vlax-curve-…`), kamusi na data iliyopanuliwa (`dictsearch`, xdata katika `entget` na `entmake`), na kazi za `acet-…` za Express Tools.
- Picha na slaidi kwenye vidirisha huonekana kama fremu tupu.
- Kuendesha programu nyingine, rejista ya Windows, na faili zilizo nje ya zile ulizopakia: utaratibu unaweza kuandika na kusoma faili zake za muda, ambazo hudumu hadi ufunge ukurasa.

Utaratibu unapofikia mojawapo ya haya, mstari wa amri unaonyesha "no function definition" pamoja na jina, na kusema kwamba CadCraft bado haina kazi hiyo.

## Makosa ya kuepuka

- **Amri yenye jina sawa na moja ya CadCraft.** Amri ya CadCraft inabaki. Endesha ya utaratibu kama `(c:NAME)` kwenye mstari wa amri.
- **Kuendesha LISP usiyoiamini.** Utaratibu unaweza kubadilisha chochote kwenye mchoro, lakini si kitu nje yake: hauwezi kufikia faili zako, tovuti nyingine au programu nyingine.
