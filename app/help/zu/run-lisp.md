---
title: Sebenzisa izinkomba ze-LISP
summary: Okwenziwa yi-LISP ye-CadCraft (imisebenzi, izimemo, imiyalo, izinto, izingxoxo, izinto ze-vla), indlela yokuthayipha i-LISP emugqeni womyalo, nokuthi yiziphi ezingakabi khona.
keywords: lisp, inkomba, lsp, dcl, ingxoxo, umyalo, defun, entget, ssget, vla, vlax, vl, getpoint, iphutha, ukuhambisana, okusebenzayo
from: 571bc077
---

## Okuzofunda

Okulindeleke uma ulayisha inkomba ye-LISP ebhalelwe enye iprogramu ye-CAD: yiziphi izingxenye ezisebenza ku-CadCraft, nokuthi yiziphi ezingakabi khona.

I-CadCraft inolimi lwayo lwe-LISP. Lwabhalwa kusukela ku-AutoLISP reference esemthethweni, hhayi kusuka kwenye iprogramu, ngakho iningi lezinkomba ezibhalelwe i-AutoCAD lizosebenza ngaphandle kokushintshwa. Lapho kukhona okungekho, umugqa womyalo utshela igama lomsebenzi, ukuze ukwazi ukuhlukanisa phakathi kwesithiyo se-CadCraft nephutha enkombeni.

## Thayipha i-LISP emugqeni womyalo

Thayipha isisho esiqala ngo-`(` bese ucindezela {{key:Enter}}: `(+ 1 2)` ibonisa `3`. `!name` ibonisa inani locwaningo. Isisho esingakavaleki silinda umugqa olandelayo.

Kwiprompt, isisho siyiphendula: ku-"Cacisa irediyasi" thayipha `(* 2 12.5)` ukuze uthole 25.

## Okusebenzayo

- **Ulimi:** `defun` (nezinguquko zasendaweni ngemva kwe-`/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, kanye ne-`*error*` (i-`*error*` yasendaweni iyasebenza). Amagama awaphathwa ngaphandle kwamacala; izinombolo eziphelele nezinamachashaza ziyahlukahluka, njengoba ulindele (`(/ 7 2)` ngu-3).
- **Imisebenzi evele ngokwayo:** izibalo, izinhlu (`car`, `cdr` nomndeni wazo, `assoc`, `nth`, `member`, `subst`, `append`…), amagama (`strcat`, `substr`, `strcase`, `wcmatch`…), ukuguqulwa (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), ijometri (`polar`, `distance`, `angle`, `inters`) namafayela (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Imiyalo:** `(defun c:NAME …)` yenza umyalo. `(command …)` no-`(command-s …)` ushayela imiyalo yeCadCraft, kusetshenziswa `pause` ukulinda impendulo yakho.
- **Imibuzo:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` nezinkeyiwedi ze-`initget`, `entsel`, `nentsel` no-`ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, nezinhlu zezihlungi nokuhlola ngo-`-4`).
- **Izinto njengezinhlu:** `entget`, `entmod`, `entmake` (namabhulokhi), `entdel`, `entlast`, `entnext` (izimfanelo zesethuli yebhulokhi zilandela njenge-ATTRIBs, bese kuba yi-SEQEND, ukuze izinkomba zezimfanelo zisebenze), `handent`, amasethi okukhetha, `tblsearch` no-`tblnext`, `layoutlist`, `regapp`, `getvar` no-`setvar` kwizilungiselelo ezinayo i-CadCraft.
- **Izingxoxo:** amafayela `.dcl` nge-`load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Konke okulandelayo kuyabonakala: izinkinobho, amabhokisi okubhala, uhlu lwezinhlu, izinhlu ezikhethwayo, amaswishi, izinkinobho zokukhetha, imigqa, izinkolomu namabhokisi. Inkomba ebhala ingxoxo yayo kwifayela lesikhashana nayo iyasebenza.
- **Izinto:** `vl-load-com` (ayenzi lutho; akukho okudingeka ukulayishwa), izinkomba zohlu nezinkomba ze-`vl-`, `vl-catch-all-apply`, kanye nezakhiwo ze-`vla-get-…` / `vla-put-…`, izindlela ze-`vla-…` kanye ne-`vlax-for` ezindaweni zeBlocks, Layers neLayouts, indawo yemodeli nezincazelo zamabhulokhi, ngezinhlobo ezahlukene nezinhlu eziphephile.

## Izinkomba ezivivinywe

Izivivinyo ze-CadCraft zisebenzisa isethi yezinkomba ezibhalelwe lezi zivivinyo (izihlungi zokukhetha, izimemo, imiyalo, izinto, abaphathi bamaphutha), nenkomba eyodwa edume ayicelwa ngegama: i-DelBlocks ka-Lee Mac, ngegama layo ngengxoxo yayo nangokukhetha ibhulokhi. I-CadCraft nayo inayo {{cmd:DELBLOCKS}} yayo, ngakho awudingi inkomba yalokho.

## Akakakhiwa okwamanje

- I-`grread` (ukulandela imbewu yesikhombi wena ngokwakho), izinguquko (`vlr-…`), imisebenzi yamajika (`vlax-curve-…`), amadikishinari nedatha eyengeziwe (`dictsearch`, i-xdata ku-`entget` nasku-`entmake`), nemisebenzi ye-Express Tools `acet-…`.
- Izithombe nezilayidi ezingxoxweni zibonakala njengezinhlaka eziyize.
- Ukusebenzisa enye iprogramu, irejista ye-Windows, namafayela angaphandle kwalawo ofakayo: inkomba ingabhala futhi ifunde amafayela ayo wesikhashana, ahlala uze uvale ikhasi.

Lapho inkomba ifika kokunye kwalokhu, umugqa womyalo ubonisa "no function definition" negama, bese ushono ukuthi i-CadCraft ayinakho okwamanje.

## Izinkinga okufanele uzigweme

- **Umyalo onegama elifanayo nomunye we-CadCraft.** Umyalo we-CadCraft uhlala njalo. Sebenzisa owenkomba njenge-`(c:NAME)` emugqeni womyalo.
- **Ukusebenzisa i-LISP ongayithembi.** Inkomba ingashintsha noma yini emdwebweni, kodwa akukho okunye: ayikwazi ukufinyelela amafayela akho, amasayithi nezinye izinhlelo.
