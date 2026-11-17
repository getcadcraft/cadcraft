---
title: LISP rutīnu palaišana
summary: Ko CadCraft LISP palaiž (funkcijas, uzvednes, komandas, objekti, dialogi, vla objekti), kā ierakstīt LISP komandrindā un kas tam vēl nav.
keywords: lisp, rutīna, lsp, dcl, dialogs, komanda, defun, entget, ssget, vla, vlax, vl, getpoint, kļūda, saderība, kas darbojas
from: 571bc077
---

## Ko jūs uzzināsiet

Ko sagaidīt, ielādējot LISP rutīnu, kas rakstīta citai CAD programmai: kuras daļas darbojas CadCraft un kas tam vēl nav.

CadCraft ir savs LISP. Tas ir izveidots pēc publiskās AutoLISP atsauces, nevis no kādas citas programmas, tāpēc lielākā daļa AutoCAD rutīnu darbojas bez izmaiņām. Ja kaut kas trūkst, komandrinda norāda funkciju, tāpēc varat atšķirt CadCraft trūkumu no kļūdas rutīnā.

## Ierakstiet LISP komandrindā

Ierakstiet izteiksmi, kas sākas ar `(`, un nospiediet {{key:Enter}}: `(+ 1 2)` izdrukā `3`. `!name` izdrukā mainīgā vērtību. Izteiksme, kas vēl nav aizvērta, gaida nākamo rindu.

Uzvednē izteiksme uz to atbild: pie uzvednes "Norādiet rādiusu" ierakstiet `(* 2 12.5)`, lai iegūtu 25.

## Kas darbojas

- **Valoda:** `defun` (ar lokāliem mainīgajiem pēc `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` un `*error*` (lokāls `*error*` darbojas). Nosaukumi neatšķir lielos un mazos burtus; veselie un reālie skaitļi atšķiras, kā jūs sagaidāt (`(/ 7 2)` ir 3).
- **Iebūvētās funkcijas:** matemātika, saraksti (`car`, `cdr` un to saime, `assoc`, `nth`, `member`, `subst`, `append`…), virknes (`strcat`, `substr`, `strcase`, `wcmatch`…), pārveidošana (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), ģeometrija (`polar`, `distance`, `angle`, `inters`) un faili (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komandas:** `(defun c:NAME …)` izveido komandu. `(command …)` un `(command-s …)` vada CadCraft pašas komandas, ar `pause` jūsu atbildei.
- **Uzvednes:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` ar `initget` atslēgvārdiem, `entsel`, `nentsel` un `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, ar filtru sarakstiem un `-4` pārbaudēm).
- **Objekti kā saraksti:** `entget`, `entmod`, `entmake` (arī blokiem), `entdel`, `entlast`, `entnext` (bloka atsauces atribūti seko tai kā ATTRIB, tad SEQEND, tāpēc atribūtu rutīnas darbojas), `handent`, atlases kopas, `tblsearch` un `tblnext`, `layoutlist`, `regapp`, `getvar` un `setvar` CadCraft iestatījumiem.
- **Dialogi:** `.dcl` faili ar `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Rādās pogas, teksta lauki, saraksti, nolaižamie saraksti, slēdži, radio pogas, rindas, kolonnas un kastes. Rutīna, kas ieraksta savu dialogu pagaidu failā, arī darbojas.
- **Objekti:** `vl-load-com` (tas neko nedara; nekas nav jāielādē), `vl-` saraksta un virknes funkcijas, `vl-catch-all-apply`, un `vla-get-…` / `vla-put-…` īpašības, `vla-…` metodes un `vlax-for` pār kolekcijām `Blocks`, `Layers` un `Layouts`, modeļa telpu un bloku definīcijām, ar variantiem un drošiem masīviem.

## Testētās rutīnas

CadCraft testi palaiž rutīnu kopu, kas rakstīta šīm pārbaudēm (atlases filtri, uzvednes, komandas, objekti, kļūdu apstrādātāji), un vienu populāru rutīnu, ko lietotāji pieprasīja vārdā: Lee Mac DelBlocks, pēc nosaukuma caur tās dialogu un norādot uz bloku. CadCraft pats piedāvā savu {{cmd:DELBLOCKS}}, tādēļ rutīna tam nav vajadzīga.

## Vēl nav izveidots

- `grread` (peles izsekošana pašam), reaktori (`vlr-…`), līkņu funkcijas (`vlax-curve-…`), vārdnīcas un paplašinātie dati (`dictsearch`, xdata `entget` un `entmake`) un Express Tools `acet-…` funkcijas.
- Attēli un slaidi dialogos rādās kā tukši rāmji.
- Citas programmas palaišana, Windows reģistrs un faili ārpus tiem, ko ielādējat: rutīna var rakstīt un lasīt savus pagaidu failus, kas paliek līdz lapas aizvēršanai.

Kad rutīna sasniedz kādu no šiem, komandrinda rāda "nav funkcijas definīcijas" un nosaukumu un norāda, ka CadCraft to vēl nav.

## Kļūdas, no kurām izvairīties

- **Komanda ar tādu pašu nosaukumu kā CadCraft komandai.** CadCraft komanda paliek. Palaidiet rutīnas komandu kā `(c:NAME)` komandrindā.
- **LISP, kam neuzticaties.** Rutīna var mainīt jebko zīmējumā, bet neko ārpus tā: tā nevar piekļūt jūsu failiem, citām vietnēm vai citām lietotnēm.
