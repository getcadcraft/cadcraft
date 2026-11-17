---
title: Ekzekuto rutinat LISP
summary: Çfarë ekzekuton LISP-i i CadCraft (funksione, kërkesa, komanda, objekte, dialogje, objekte vla), si shkruhet LISP në rreshtin e komandës dhe çfarë nuk ka ende.
keywords: lisp, rutinë, lsp, dcl, dialog, komandë, defun, entget, ssget, vla, vlax, vl, getpoint, gabim, përputhshmëri, çfarë funksionon
from: 571bc077
---

## Çfarë do të mësoni

Çfarë të pritet kur ngarkoni një rutinë LISP të shkruar për një program tjetër CAD: cilat pjesë ekzekutohen në CadCraft dhe çfarë nuk ka ende.

CadCraft ka LISP-in e vet. Është shkruar nga referenca publike e AutoLISP, jo nga programi i ndonjë tjetri, kështu që shumica e rutinave të shkruara për AutoCAD funksionojnë pa ndryshime. Kur mungon diçka, rreshti i komandës emron funksionin, kështu që mund ta dalloni një mungesë në CadCraft nga një gabim në rutinë.

## Shkruaj LISP në rreshtin e komandës

Shkruaj një shprehje që fillon me `(` dhe shtyp {{key:Enter}}: `(+ 1 2)` shfaq `3`. `!name` shfaq vlerën e një ndryshoreje. Një shprehje që s’mbyllet ende pret rreshtin tjetër.

Te një kërkesë, një shprehje përgjigjet asaj: te "Cakto rrezen" shkruaj `(* 2 12.5)` për 25.

## Çfarë ekzekutohet

- **Gjuha:** `defun` (me lokalet pas `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, dhe `*error*` (një `*error*` lokal punon). Emrat nuk janë të ndjeshëm ndaj shkronjave; numrat e plotë dhe realët ndryshojnë, siç pritet (`(/ 7 2)` është 3).
- **Funksionet e integruara:** matematikë, lista (`car`, `cdr` dhe familja e tyre, `assoc`, `nth`, `member`, `subst`, `append`…), vargje (`strcat`, `substr`, `strcase`, `wcmatch`…), konvertime (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), gjeometri (`polar`, `distance`, `angle`, `inters`) dhe skedarë (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komandat:** `(defun c:NAME …)` krijon një komandë. `(command …)` dhe `(command-s …)` drejtojnë komandat vetjake të CadCraft, me `pause` për përgjigjen tuaj.
- **Kërkesat:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` me fjalë kyçe `initget`, `entsel`, `nentsel` dhe `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, me lista filtrash dhe testime `-4`).
- **Objektet si lista:** `entget`, `entmod`, `entmake` (edhe blloqet), `entdel`, `entlast`, `entnext` (atributet e një reference bllok vijnë pas saj si ATTRIB, pastaj një SEQEND, kështu që rutinat e atributeve funksionojnë), `handent`, grupe përzgjedhjesh, `tblsearch` dhe `tblnext`, `layoutlist`, `regapp`, `getvar` dhe `setvar` për cilësimet që ka CadCraft.
- **Dialogjet:** skedarë `.dcl` me `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Butonat, kutitë e redaktimit, kutitë e listave, listat me zgjedhje, çelësat, butonat radio, rreshtat, kolonat dhe kutitë shfaqen të gjitha. Një rutinë që e shkruan dialogun e vet në një skedar të përkohshëm gjithashtu punon.
- **Objektet:** `vl-load-com` (s’bën asgjë; asgjë s’ka nevojë për ngarkim), funksionet e listave dhe vargjeve `vl-`, `vl-catch-all-apply`, dhe vetitë `vla-get-…` / `vla-put-…`, metodat `vla-…` dhe `vlax-for` mbi koleksionet Blocks, Layers dhe Layouts, hapësirën e modelit dhe përkufizimet e blloqeve, me variante dhe vargje të sigurta.

## Rutina të testuara

Testet e CadCraft ekzekutojnë një grup rutinash të shkruara për këto kontrolle (filtra përzgjedhjeje, kërkesa, komanda, objekte, trajtues gabimesh), dhe një rutinë të njohur që njerëzit kërkuan me emër: DelBlocks i Lee Mac, me emër përmes dialogut të vet dhe duke zgjedhur një bllok. CadCraft ka edhe {{cmd:DELBLOCKS}} të vetin, kështu që s’ju duhet rutinë për atë.

## Nuk është ndërtuar ende

- `grread` (gjurmimi i miut vetë), reaktorët (`vlr-…`), funksionet e kurbave (`vlax-curve-…`), fjalorët dhe të dhënat e zgjeruara (`dictsearch`, xdata në `entget` dhe `entmake`), dhe funksionet `acet-…` të Express Tools.
- Imazhet dhe diapozitivat në dialoge shfaqen si kornizë boshe.
- Ekzekutimi i një programi tjetër, regjistri i Windows dhe skedarët jashtë atyre që ngarkoni: një rutinë mund të shkruajë dhe lexojë skedarët e vet të përkohshëm, që mbeten deri sa mbyllni faqen.

Kur një rutinë arrin një nga këto, rreshti i komandës shfaq "nuk ka përkufizim funksioni" dhe emrin, dhe thotë se CadCraft s’e ka ende.

## Gabimet që duhen shmangur

- **Një komandë me të njëjtin emër me një nga ato të CadCraft.** Komanda e vet e CadCraft mbetet. Ekzekutoje atë të rutinës si `(c:NAME)` në rreshtin e komandës.
- **Ekzekutimi i LISP që nuk e besoni.** Një rutinë mund të ndryshojë çdo gjë në vizatim, por asgjë jashtë tij: s’mund t’i arrijë skedarët tuaj, faqet e tjera apo aplikacionet e tjera.
