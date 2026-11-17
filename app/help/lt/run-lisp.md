---
title: LISP rutinų paleidimas
summary: Ką vykdo CadCraft LISP (funkcijos, raginimai, komandos, objektai, dialogai, vla objektai), kaip įvesti LISP komandų eilutėje ir ko dar nėra.
keywords: lisp, rutina, lsp, dcl, dialogas, komanda, defun, entget, ssget, vla, vlax, vl, getpoint, klaida, suderinamumas, kas veikia
from: 571bc077
---

## Ko išmoksite

Ko tikėtis paleidus LISP rutiną, parašytą kitai CAD programai: kurios dalys veikia CadCraft ir ko jam dar trūksta.

CadCraft turi savo LISP. Jis sukurtas pagal viešą AutoLISP žinyną, o ne pagal kieno nors kito programą, todėl dauguma AutoCAD rutinų veikia be pakeitimų. Kur ko nors trūksta, komandų eilutėje nurodoma funkcija, todėl galite atskirti CadCraft spragą nuo klaidos rutinoje.

## Rašykite LISP komandų eilutėje

Įveskite išraišką, prasidedančią `(`, ir paspauskite {{key:Enter}}: `(+ 1 2)` išveda `3`. `!name` išveda kintamojo reikšmę. Išraiška, kuri dar neužsidarė, laukia kitos eilutės.

Prie raginimo „Nurodykite spindulį“ išraiška į jį atsako: įveskite `(* 2 12.5)`, kad gautumėte 25.

## Kas veikia

- **Kalba:** `defun` (lokaliniai kintamieji po `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` ir `*error*` (lokalus `*error*` veikia). Pavadinimai nejautrūs didžiosioms ir mažosioms raidėms; sveikieji ir realieji skaičiai skiriasi, kaip ir tikėtasi (`(/ 7 2)` yra 3).
- **Įmontuotos funkcijos:** matematika, sąrašai (`car`, `cdr` ir jų šeima, `assoc`, `nth`, `member`, `subst`, `append`…), eilutės (`strcat`, `substr`, `strcase`, `wcmatch`…), konvertavimai (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrija (`polar`, `distance`, `angle`, `inters`) ir failai (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komandos:** `(defun c:NAME …)` sukuria komandą. `(command …)` ir `(command-s …)` valdo pačios CadCraft komandas, o `pause` laukia jūsų atsakymo.
- **Raginimai:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` su `initget` raktažodžiais, `entsel`, `nentsel` ir `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, su filtrų sąrašais ir `-4` tikrinimais).
- **Objektai kaip sąrašai:** `entget`, `entmod`, `entmake` (taip pat blokai), `entdel`, `entlast`, `entnext` (blokinės nuorodos atributai eina po jos kaip ATTRIB, o paskui SEQEND, todėl veikia atributų rutinos), `handent`, pasirinkimų rinkiniai, `tblsearch` ir `tblnext`, `layoutlist`, `regapp`, `getvar` ir `setvar` CadCraft turimiems nustatymams.
- **Dialogai:** `.dcl` failai su `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Rodomi visi mygtukai, redagavimo laukai, sąrašų langai, iššokantys sąrašai, jungikliai, radijo mygtukai, eilutės, stulpeliai ir dėžės. Rutina, kuri savo dialogą įrašo į laikiną failą, taip pat veikia.
- **Objektai:** `vl-load-com` (nieko nedaro; nieko įkelti nereikia), `vl-` sąrašų ir eilučių funkcijos, `vl-catch-all-apply`, ir `vla-get-…` / `vla-put-…` savybės, `vla-…` metodai ir `vlax-for` per Blokų, Sluoksnių ir Maketų kolekcijas, modelio erdvę ir blokų apibrėžimus, su variantais ir saugiais masyvais.

## Išbandytos rutinos

CadCraft testai paleidžia rutinų rinkinį, parašytą šiems patikrinimams (pasirinkimo filtrai, raginimai, komandos, objektai, klaidų tvarkytojai), ir vieną populiarią rutiną, kurios žmonės prašė vardu: Lee Mac DelBlocks, paleidžiamą vardu per jos dialogą ir pasirenkant bloką. CadCraft turi ir savo {{cmd:DELBLOCKS}}, todėl rutinos tam nereikia.

## Dar nesukurta

- `grread` (pelės sekimas pačiam), reaktoriai (`vlr-…`), kreivių funkcijos (`vlax-curve-…`), žodynai ir išplėstiniai duomenys (`dictsearch`, xdata `entget` ir `entmake`) bei Express Tools `acet-…` funkcijos.
- Paveikslėliai ir skaidrės dialoguose rodomi kaip tušti rėmeliai.
- Kitos programos paleidimas, Windows registras ir failai, kurių neįkėlėte: rutina gali rašyti ir skaityti savo laikinus failus, kurie išlieka, kol uždarote puslapį.

Kai rutina pasiekia vieną iš šių dalykų, komandų eilutėje rodomas pranešimas „no function definition“, funkcijos pavadinimas ir nurodoma, kad CadCraft jos dar neturi.

## Klaidos, kurių reikia vengti

- **Komanda su tokiu pat pavadinimu kaip CadCraft komanda.** CadCraft komanda lieka. Rutinos komandą paleiskite komandų eilutėje kaip `(c:NAME)`.
- **LISP, kuriuo nepasitikite, paleidimas.** Rutina gali pakeisti bet ką brėžinyje, bet nieko už jo ribų: ji negali pasiekti jūsų failų, kitų svetainių ar kitų programų.
