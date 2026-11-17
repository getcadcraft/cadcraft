---
title: LISP-rutiinide käitamine
summary: Mida CadCraft'i LISP käitab (funktsioonid, küsimused, käsud, objektid, dialoogid, vla-objektid), kuidas kirjutada LISP käsureale ja mida sellel veel pole.
keywords: lisp, rutiin, lsp, dcl, dialoog, käsk, defun, entget, ssget, vla, vlax, vl, getpoint, viga, ühilduvus, mis töötab
from: 571bc077
---

## Mida õpid

Mida oodata, kui laadid teise CAD-programmi jaoks kirjutatud LISP-rutiini: millised osad töötavad CadCraft'is ja mida sellel veel pole.

CadCraft'il on oma LISP. See on kirjutatud avalikust AutoLISP-viitest, mitte kellegi teise programmist, nii et enamik AutoCAD'i jaoks kirjutatud rutiine töötab muutmata kujul. Kui midagi puudub, nimetab käsurida funktsiooni, nii et saad eristada CadCraft'i puudujääki rutiini veast.

## Kirjuta LISP käsureale

Kirjuta avaldis, mis algab `(`-ga, ja vajuta {{key:Enter}}: `(+ 1 2)` kuvab `3`. `!nimi` kuvab muutuja väärtuse. Avaldis, mis ei ole veel lõppenud, ootab järgmist rida.

Küsimusele vastab avaldis: küsimuse „Määra raadius“ juures kirjuta `(* 2 12.5)`, et saada 25.

## Mis töötab

- **Keel:** `defun` (kohalikud muutujad pärast `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` ja `*error*` (kohalik `*error*` töötab). Nimed ei ole suur- ja väiketähtede suhtes tundlikud; täisarvud ja reaalarvud erinevad, nagu eeldad (`(/ 7 2)` on 3).
- **Sisseehitatud funktsioonid:** matemaatika, loendid (`car`, `cdr` ja nende sugulased, `assoc`, `nth`, `member`, `subst`, `append`…), stringid (`strcat`, `substr`, `strcase`, `wcmatch`…), teisendused (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geomeetria (`polar`, `distance`, `angle`, `inters`) ja failid (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Käsud:** `(defun c:NAME …)` teeb käsu. `(command …)` ja `(command-s …)` juhivad CadCraft'i enda käske, `pause` ootab sinu vastust.
- **Küsimused:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` koos `initget`-märksõnadega, `entsel`, `nentsel` ja `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, filtriloenditega ja `-4` testidega).
- **Objektid loenditena:** `entget`, `entmod`, `entmake` (ka plokid), `entdel`, `entlast`, `entnext` (ploki viite atribuudid tulevad selle järel ATTRIB-idena, seejärel SEQEND, nii et atribuutide rutiinid töötavad), `handent`, valikukogumid, `tblsearch` ja `tblnext`, `layoutlist`, `regapp`, `getvar` ja `setvar` CadCraft'i sätete jaoks.
- **Dialoogid:** `.dcl`-failid koos `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` ja `done_dialog`-iga. Nupud, sisestusväljad, loendikastid, hüppeloendid, lülitid, raadionupud, read, veerud ja kastid kuvatakse kõik. Rutiin, mis kirjutab oma dialoogi ajutisse faili, töötab samuti.
- **Objektid:** `vl-load-com` (ei tee midagi; midagi ei pea laadima), `vl-` loendi- ja stringifunktsioonid, `vl-catch-all-apply` ning `vla-get-…` ja `vla-put-…` omadused, `vla-…` meetodid ja `vlax-for` üle kogude Blocks, Layers ja Layouts, mudeliruum ja plokimääratlused, variantide ja massiividega.

## Testitud rutiinid

CadCraft'i testid käivitavad hulga rutiine, mis on kirjutatud nende kontrollide jaoks (valikufiltrid, küsimused, käsud, objektid, veatöötlejad), ja ühe populaarse rutiini, mida inimesed on nime järgi palunud: Lee Mac'i DelBlocks, nime järgi selle dialoogi kaudu ja ploki valimisega. CadCraft'il on ka oma {{cmd:DELBLOCKS}}, nii et selleks ei pea rutiini vaja olema.

## Pole veel valmis

- `grread` (hiire jälgimine ise), reaktorid (`vlr-…`), kõverafunktsioonid (`vlax-curve-…`), sõnastikud ja laiendatud andmed (`dictsearch`, xdata `entget`-is ja `entmake`-is) ning Express Tools'i `acet-…` funktsioonid.
- Pildid ja slaidid dialoogides kuvatakse tühjade raamidena.
- Teise programmi käivitamine, Windowsi register ja failid, mis pole sinu laaditud: rutiin võib kirjutada ja lugeda oma ajutisi faile, mis kestavad seni, kuni sulged lehe.

Kui rutiin jõuab ühele neist, näitab käsurida „funktsiooni definitsioon puudub“, nime ning ütleb, et CadCraft'il seda veel pole.

## Vältimist vajavad vead

- **Käsk, millel on sama nimi kui CadCraft'i omal.** CadCraft'i oma käsk jääb alles. Käivita rutiini oma kui `(c:NAME)` käsurealt.
- **Usaldamatu LISP-i käitamine.** Rutiin võib muuta kõike joonises, kuid mitte midagi väljaspool seda: ta ei pääse sinu failidele, teistele saitidele ega teistele rakendustele.
