---
title: Komandų žinynas
summary: Kiekviena CadCraft braižymo programos komanda su slapyvardžiais, klausimais, parinktimis ir numatytosiomis reikšmėmis.
keywords: komandos, slapyvardžiai, komandų sąrašas, plotas, perimetras, measuregeom, linija, pline, apskritimas, lankas, apkarpyti, poslinkis, dimlinear, blokas, įterpti, išdėstymas, spausdinti, mastelis, žinynas, copyclip, cutclip, pasteclip, pasteorig, copybase, dubliuoti, selectall
from: 7db2646b
---

Įveskite komandos pavadinimą arba slapyvardį ir paspauskite {{key:Enter}} arba {{key:Space}}. Didžiosios ir mažosios raidės nesvarbios, o pradinis `_`, `-`, `.` arba `'` ignoruojamas. Įveskite `HELP` (arba `?`), kad komandų eilutės istorijoje išvestumėte trumpą visų komandų sąrašą; paspauskite {{key:F1}}, kad atidarytumėte šį žinyną.

Kaip skaityti raginimus: parinktys rašomos laužtiniuose skliaustuose, o pasirinkti galite įvesdami jos didžiąsias raides (`D` reiškia Skersmuo). Numatytoji reikšmė rašoma kampiniuose skliaustuose; paspauskite {{key:Enter}}, kad ją priimtumėte. Kai reikia tašką, galite spustelėti arba įvesti bet kurį formatą iš [Koordinačių ir atstumų įvedimas](topic:coordinate-entry). Kai reikia atstumo, galite įvesti skaičių arba spustelėti du taškus.

Jei tašką ar objektą reikia pasirinkti, o numatytosios reikšmės nėra, paspaudus {{key:Enter}} komanda baigiama. {{key:Esc}} ją atšaukia. Ką komanda padarė, yra vienas {{ui:Anuliuoti}} žingsnis.

## Braižymas

### LINE

Slapyvardžiai: `L`. Tiesūs segmentai, kiekvienas – atskiras objektas.

- `Nurodykite pirmąjį tašką` ({{key:Enter}}: pradėti nuo paskutinio jūsų nurodyto taško)
- `Nurodykite kitą tašką [Anuliuoti (U)]`, kartojama. Po dviejų segmentų: `[Anuliuoti (U)/Uždaryti (C)]`.
- `U` atima paskutinį segmentą, `C` uždaro iki pirmojo taško ir baigia. {{key:Enter}} baigia.

### PLINE

Slapyvardžiai: `PL`. Viena polilinija iš tiesių ir lankų segmentų.

- `Nurodykite pradžios tašką`
- `Nurodykite kitą tašką [Lankas (A)/Uždaryti (C)/Anuliuoti (U)]` (Uždaryti, kai yra du segmentai)
- `A` perjungia į lankus: `Nurodykite lanko galinį tašką [Linija (L)/Uždaryti (C)/Anuliuoti (U)]`. Kiekvienas lankas liečia ankstesnį segmentą. `L` grąžina į linijas, `CL` uždaro lanku.
- {{key:Enter}} baigia; polilinija lieka atvira.

### CIRCLE

Slapyvardžiai: `C`.

- `Nurodykite apskritimo centro tašką [3P/2P/Ttr (liestinė liestinė spindulys)]`
- `Nurodykite apskritimo spindulį [Skersmuo] <paskutinis spindulys>`; `D` klausia `Nurodykite apskritimo skersmenį`.
- `2P`: du skersmens galai. `3P`: trys apskritimo taškai.
- `T` (taip pat komanda `TTR` ir {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Apskritimas: liestinė, liestinė, spindulys}}): `Nurodykite pirmosios liestinės tašką ant objekto`, antrąją, tada spindulį (Enter: paskutinis). Apskritimas liečia abu objektus (linijas, lankus, apskritimus, polilinijų segmentus, taip pat blokų viduje); iš tinkamų – tas, kuris liečia arčiausiai jūsų nurodytų taškų. „Apskritimas neegzistuoja“, kai nėra tinkamo.
- `TTT` (arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Apskritimas: liestinė, liestinė, liestinė}}): trys objektai; apskritimas, liečiantis visus tris, arčiausiai jūsų taškų (trys linijos duoda vidinį arba išorinį apskritimą, priklausomai nuo to, kur spustelėjate).

### ARC

Slapyvardžiai: `A`.

- `Nurodykite lanko pradžios tašką [Centras]`, `Nurodykite antrąjį lanko tašką`, `Nurodykite lanko galinį tašką`: lankas per tris taškus.
- `C`: `Nurodykite lanko centro tašką`, `Nurodykite lanko pradžios tašką`, `Nurodykite lanko galinį tašką`. Lankas eina prieš laikrodžio rodyklę nuo pradžios iki galo.

### RECTANG

Slapyvardžiai: `REC`, `RECTANGLE`. Uždara polilinija.

- `Nurodykite pirmojo kampo tašką`, `Nurodykite priešingo kampo tašką`. Antram kampui įveskite `@plotis,aukštis`.

### POLYGON

Slapyvardžiai: `POL`. Taisyklingas daugiakampis kaip uždara polilinija.

- `Įveskite kraštinių skaičių <4>` (3–1024)
- `Nurodykite daugiakampio centrą`
- `Įveskite parinktį [Įbrėžta į apskritimą/Apibrėžta apie apskritimą] <I>`
- `Nurodykite apskritimo spindulį`: spustelėkite arba įveskite tašką; atstumas nustato dydį, kryptis pasuka daugiakampį.

### ELLIPSE

Slapyvardžiai: `EL`.

- `Nurodykite ašies galinį tašką elipsei [Centras]`, `Nurodykite kitą ašies galinį tašką`, `Nurodykite atstumą iki kitos ašies`
- `C`: `Nurodykite elipsės centrą`, `Nurodykite ašies galinį tašką`, tada atstumas iki kitos ašies.

### HATCH

Slapyvardžiai: `H`, `BH`, `BHATCH`; arba {{ui:Brūkšniuotė}} įrankių juostoje. Pirmiausia išveda dabartinį šabloną, mastelį ir kampą.

- `Nurodykite vidinį tašką [Pažymėti objektus/Šablonas/MAsteLis/Kampas]`, kartojama (`Anuliuoti`, kai yra plotas): kiekvienas spustelėjimas prideda aplink jį esantį uždarą plotą, o jame esantys uždari kontūrai tampa salelėmis. {{key:Enter}} sukuria vieną brūkšniuotę iš visų.
- `S`: `Pažymėkite uždarus objektus` (uždarosios polilinijos, apskritimai, uždari elipsiai).
- `P`: `Įveskite šablono pavadinimą, SOLID arba ? sąrašui <dabartinis>`. `SC`: `Nurodykite šablono mastelį`. `A`: `Nurodykite šablono kampą`.

Žr. [Brūkšniuotė ir užpildymo sritys](topic:hatch).

### POINT

Slapyvardžiai: `PO`; arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Taškas}}. Taškų objektai, po vieną kiekvienam spustelėjimui, kol {{key:Enter}}.

- `Nurodykite tašką`

### XLINE

Slapyvardžiai: `XL`; arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Konstrukcinė linija}}. Konstrukcinės linijos, be galo į abi puses. Žr. [Konstrukcinės linijos ir spinduliai](topic:construction-lines).

- `Nurodykite tašką [Hor/Ver/Ang/Bisect/Offset]`, tada `Nurodykite per taškus` kiekvienai linijai, kol {{key:Enter}}.
- `A`: `Įveskite konstrukcinės linijos kampą [Atskaitos] <0>`; `R` pirmiausia klausia `Pasirinkite linijos objektą`.
- `B`: `Nurodykite kampo viršūnės tašką`, `Nurodykite kampo pradžios tašką`, tada `Nurodykite kampo galinį tašką` kiekvienai linijai.
- `O`: `Nurodykite poslinkio atstumą [Per] <Per>`, tada `Pasirinkite linijos objektą` ir `Nurodykite poslinkio pusę` (arba `Nurodykite per tašką`) kiekvienai linijai.

### RAY

Be slapyvardžių; arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Spindulys}}. `Nurodykite pradžios tašką`, tada `Nurodykite per tašką` kiekvienam spinduliui, kol {{key:Enter}}.

### TEXT

Slapyvardžiai: `DT`, `DTEXT`; arba {{ui:Tekstas}} įrankių juostoje. Vienos eilutės tekstas; kiekviena eilutė – atskiras objektas.

- `Nurodykite teksto pradžios tašką [Lygiuoti]`
- `J`: `Įveskite parinktį [Kairė/Centras/Dešinė/Vidurys/TL/MC] <L>`, tada `Nurodykite teksto įterpimo tašką`
- `Nurodykite aukštį <dabartinis teksto aukštis>`
- `Nurodykite teksto sukimo kampą <0>`
- `Įveskite tekstą`, kartojama: kiekvienas {{key:Enter}} pradeda kitą eilutę žemiau. {{key:Enter}} tuščioje eilutėje baigia. {{key:Space}} čia įveda tarpą.

## Keitimas

Slapyvardžiai: `MT`, `T`; arba {{ui:Pastraipa}} įrankių juostoje. Pastraipos tekstas, lūžtantis pagal plotį, rašomas vietoje.

- `Nurodykite pirmąjį kampą`
- `Nurodykite priešingą kampą [Aukštis/Lygiavimas/Eilučių tarpas/Sukimas/Plotis]`: plotis tarp dviejų kampų yra vieta, kur tekstas lūžta. `H` klausia `Nurodykite aukštį`, `J` – `Įveskite lygiavimą [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` – `Įveskite eilučių tarpo koeficientą (0,25–4)`, `R` – `Nurodykite sukimo kampą`, `W` – `Nurodykite plotį (0 – be lūžimo)` ir praleidžia antrąjį kampą.
- Tada brėžinyje atsidaro langelis: rašykite, {{key:Enter}} – nauja pastraipa, {{key:Mod+Enter}} arba spustelėjimas už ribų baigia, {{key:Esc}} atšaukia. Jo juosta nustato aukštį, eilučių tarpą, plotį ir lygiavimą. Žr. [Pridėti tekstą ir žymas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Slapyvardžiai: `ED`, `DDEDIT`; arba dukart spustelėkite tekstą. `Pasirinkite tekstą redagavimui`, kartojama, kol {{key:Enter}}: kiekvienas atsidaro tame pačiame langelyje. Pradėjus pažymėto arba dukart spustelėto teksto redagavimą, redaguojamas tik jis ir komanda baigiama.

### ERASE

Slapyvardžiai: `E`, `DELETE`; arba paspauskite {{key:Delete}} su pažymėtais objektais.

- `Pasirinkite objektus` (praleidžiama, jei objektai jau pažymėti)

### MOVE

Slapyvardžiai: `M`.

- `Pasirinkite objektus`
- `Nurodykite bazinį tašką [Poslinkis]`, `Nurodykite antrąjį tašką`
- `D`: `Nurodykite poslinkį`, įvedamą kaip `dx,dy`.

### COPY

Slapyvardžiai: `CO`, `CP`. Kopijos, tiek kiek kartų nurodote taškus.

- `Pasirinkite objektus`
- `Nurodykite bazinį tašką [Poslinkis]`
- `Nurodykite antrąjį tašką [Anuliuoti (U)]`, kartojama, kol {{key:Enter}}. `U` atima paskutinę kopiją.

### ROTATE

Slapyvardžiai: `RO`.

- `Pasirinkite objektus`, `Nurodykite bazinį tašką`
- `Nurodykite sukimo kampą <paskutinis kampas>`: laipsniais, teigiamas prieš laikrodžio rodyklę; arba spustelėkite tašką, į kurį pasukti.

### SCALE

Slapyvardžiai: `SC`.

- `Pasirinkite objektus`, `Nurodykite bazinį tašką`
- `Nurodykite mastelio koeficientą`: įveskite koeficientą, pvz., `0.5` arba `2`. Spustelėtas taškas duoda atstumą nuo bazinio taško kaip koeficientą.

### MIRROR

Slapyvardžiai: `MI`.

- `Pasirinkite objektus`
- `Nurodykite pirmąjį veidrodinės linijos tašką`, `Nurodykite antrąjį veidrodinės linijos tašką`
- `Ištrinti pradinius objektus? [Taip/Ne] <N>`

### ALIGN

Slapyvardžiai: `AL`; arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti}}.

- `Pasirinkite objektus`
- `Nurodykite pirmąjį šaltinio tašką`, `Nurodykite pirmąjį paskirties tašką`
- `Nurodykite antrąjį šaltinio tašką (Enter – tęsti)`, `Nurodykite antrąjį paskirties tašką`
- `Nurodykite trečiąjį šaltinio tašką (Enter – tęsti)`, `Nurodykite trečiąjį paskirties tašką`
- Su dviem poromis: `Keisti objektų mastelį pagal lygiavimo taškus? [Taip/Ne] <N>`

Žr. [Lygiuoti objektus](topic:modify-objects#align-objects).

### ALIGNTO

- `Pasirinkite objektus` (arba pažymėtus), `Lygiuoti [Kairė/Centras/Dešinė/Viršus/Vidurys/Apačia] <Kairė>`, `Į [Pasirinkimą/Pirmąjį/Paskutinįjį/Tašką] <Pasirinkimą>`; `P` klausia taško. Pažymėjimas lieka.

### DISTRIBUTE

- `Pasirinkite objektus` (bent trys), `Paskirstyti [Horizontaliai/Vertikaliai] <Horizontaliai>`, `Tolygiai išdėstyti [Centrai/Tarpai] <Tarpai>`. Du išoriniai lieka; pažymėjimas lieka.

### ALIGNPANEL

Slapyvardžiai: `ALP`; arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti ir paskirstyti}}. Atidaro skydelį, kuris paleidžia ALIGNTO ir DISTRIBUTE spustelėjimais.

### LASER

Slapyvardžiai: `LASERCUT`; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Lazeris…}}. Atidaro Lazerio skydelį virš brėžinio: ką daro kiekvienas sluoksnis (pjauti, žymėti, graviruoti, užpildyti, paveikslėlis), peržiūra, GRBL G-kodas įrašymui, rėmelio nustatymas ir siuntimas per Web Serial. Žr. [Siųsti brėžinį į lazerį](topic:laser-cutting).

### STRETCH

Slapyvardžiai: `S`; arba {{ui:Ištempti}}. `Pasirinkite objektus tempimui`: vilkite kryžminius langus (arba įveskite `C`) per galus, kad perkeltumėte. `Nurodykite bazinį tašką [Poslinkis]`, `Nurodykite antrąjį tašką`. Taškai langų viduje juda: linijų galai, polilinijų viršūnės (lankų segmentai išlaiko aukštį), matmenų taškai; apskritimai, elipsės, tekstas, taškai ir blokai juda visi, kai jų centras ar įterpimo taškas yra viduje. Pažymėjimas, padarytas prieš komandą, išlaiko langus (ir lasso), kuriais buvo padarytas, todėl tempiama tuo pačiu būdu. Be lango objektai juda visi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Slapyvardžiai: `AR`; arba {{ui:Masyvas}}. `Pasirinkite objektus`, tada `Įveskite masyvo tipą [Stačiakampis/Apskritiminis] <Stačiakampis>` (tik ARRAY).

- Stačiakampis pradeda nuo 4 stulpelių × 3 eilučių, tarpai – 1,5 karto objektų dydžio, rodoma peržiūra. `Įveskite parinktį [Kiekis/Tarpas/Stulpeliai/Eilutės/eXit] <X>`: `COU` klausia stulpelių ir eilučių, `S` – atstumų tarp stulpelių ir tarp eilučių (neigiamas eina į kairę ar žemyn), `COL` ir `R` – po vieną kryptį.
- Apskritiminis klausia `Nurodykite masyvo centro tašką`, pradeda nuo 6 elementų visu apskritimu, pasuktų. `Įveskite parinktį [Elementai/Užpildymo kampas/Sukti elementus/eXit] <X>`: `I` elementai, `F` kampas užpildymui (+ prieš laikrodžio rodyklę, − pagal laikrodžio rodyklę), `ROT` Taip arba Ne.
- {{key:Enter}} (eXit) sukuria kopijas kaip paprastus objektus. Vienas {{ui:Anuliuoti}} žingsnis.

### OFFSET

Slapyvardžiai: `O`. Linijos, lankai, apskritimai ir polilinijos.

- `Nurodykite poslinkio atstumą [Per] <paskutinis atstumas arba Per>`
- `Pasirinkite poslinkio objektą`, tada `Nurodykite tašką poslinkio pusėje` (arba su Per – `Nurodykite per tašką`), kartojama, kol {{key:Enter}}.

### TRIMEXTENDMODE

- `Įveskite naują TRIMEXTENDMODE reikšmę (1 Greitas, 0 Standartinis)`: kaip {{cmd:TRIM}} ir {{cmd:EXTEND}} pradeda veikti. `1` Greitas: kiekvienas objektas yra pjovimo briauna arba riba. `0` Standartinis: pirmiausia klausia briaunų. Taip pat `(setvar "TRIMEXTENDMODE" 0)` LISP.

### TRIM

Slapyvardžiai: `TR`. Pirmiausia išveda `Dabartiniai nustatymai: Greitasis režimas (TRIMEXTENDMODE 1), briaunos: be pratęsimo, vilkimas braižo kelią`. Greitajame režime kiekvienas matomas objektas yra pjovimo briauna, o objektas, kurio niekas nekerta, ištrinamas; Standartiniame režime pirmiausia klausia `Pasirinkite pjovimo briaunas (Enter = visi objektai)` ir pjauna tik ties jomis.

- `Pasirinkite objektą apkarpymui arba pažymėkite su Shift pratęsimui [Pjovimo briaunos/Tvora/Kryžius/Režimas/Briauna/Trinti/Anuliuoti]`, kartojama: spustelėkite dalį, kurią pašalinti (ji rodoma pilka ir brūkšniuota, kol žymeklis ant jos), vilkite kelią per kelias dalis (visos eina vienu žingsniu) arba spustelėkite du tuščius taškus tvorai tarp jų. {{key:Shift}} vietoj to pratęsia. `T` pasirenka pjovimo briaunas (Standartinis režimas), `F` klausia tvoros taškų, `C` – dviejų lango kampų (dalys, iš dalies esančios viduje, eina), `O` klausia `Įveskite apkarpymo režimo parinktį [Greitas/Standartinis]`, `E` klausia `Įveskite numanomos briaunos pratęsimo režimą [Pratęsti/Nepratęsti]` (EDGEMODE), `R` ištrina jūsų pažymėtus objektus, `U` atšaukia paskutinį pasirinkimą ar vilkimą. {{key:Enter}} baigia. Žr. [Apkarpyti ir pratęsti](topic:trim-and-extend).

### EXTEND

Slapyvardžiai: `EX`. Tas pats kaip TRIM, tik atvirkščiai: `Pasirinkite objektą pratęsimui arba pažymėkite su Shift apkarpymui [Ribos briaunos/Tvora/Kryžius/Režimas/Briauna/Anuliuoti]`. Spustelėjimas pailgina arčiausią galą iki kitos ribos; vilkiamas kelias ar tvora pailgina kiekvieną kertamą objektą; {{key:Shift}} apkarpo. `B` pasirenka ribos briaunas (Standartinis režimas). Režimas ir briauna bendri su TRIM.

### LINKVIEWS

Slapyvardžiai: `SYNCVIEWS`; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Susieti sričių vaizdus}}, arba nuorodos piktograma brėžinio skirtukuose. `Susieti sričių vaizdus [ON/OFF]` ({{key:Enter}} pasirenka kitą būseną): kol įjungta, slinkimas ar mastelis aktyvioje srityje perkelia visas sritis, rodančias tos pačios rūšies erdvę. Žr. [Padalinti ekraną](topic:split-screen).

### OPENIN3D

Be slapyvardžių; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Atidaryti ModelCraft}}, kur 3D modeliavimo programa perima perduotą brėžinį. Atidaro jį ten naujame skirtuke, kaip DWG (nieko neįkeliama). Jei naršyklė blokuoja skirtuką, tai nurodoma.

### LASSOMODE

`Įveskite naują LASSOMODE reikšmę (1 = lasso, 0 = stačiakampis)`: ką piešia paspaudimas ir vilkimas tuščioje vietoje. Tas pats kaip Parametrai › CadCraft › Vilkimas pažymėjimui. Žr. [Lasso pažymėjimas](topic:lasso-selection).

### FILLET

Slapyvardžiai: `F`. Linijos, lankai, apskritimai ir polilinijos. Pirmiausia išveda `Dabartiniai nustatymai: Režimas = TRIM, Spindulys = 0`.

- `Pasirinkite pirmąjį objektą [Anuliuoti/Polilinija/Spindulys/Apkarpyti/Keli]`
  - `R` klausia `Nurodykite suapvalinimo spindulį <paskutinis>`. `T` klausia `Įveskite apkarpymo režimo parinktį [Apkarpyti/Be apkarpymo]`: su Be apkarpymo objektai lieka kaip yra ir pridedamas tik lankas.
  - `M` palieka komandą veikiančią daugiau kampų iki {{key:Enter}}; `U` atima paskutinį kampą neišeidamas iš komandos.
  - `P` klausia `Pasirinkite 2D polilinija [Spindulys]` ir suapvalina kiekvieną kampą, kur susitinka dvi tiesios atkarpos. Jau turimi suapvalinimai pakeičiami nauju spinduliu; spindulys 0 juos pašalina. Kampai, kurių kraštinės per trumpos spinduliui, paliekami ir suskaičiuojami.
- `Pasirinkite antrąjį objektą arba pažymėkite su Shift kampui pritaikyti [Spindulys]`. Laikykite {{key:Shift}} spustelėdami, kad gautumėte aštrų kampą, nepriklausomai nuo spindulio.

Spustelėkite kiekvieną objektą ant dalies, kurią norite išlaikyti. Dvi linijos, kurios nesusikerta, pailginamos. Dvi lygiagrečios linijos gauna pusapskritimį per tarpą, prie pirmosios linijos galo, arčiausio jūsų spustelėjimo. Apskritimas niekada nepjaunamas. Dvi gretimos tos pačios polilinijos atkarpos gauna lanką polilinijos viduje; polilinija ir kitas objektas veikia, kai pjūvis patenka į pirmąją ar paskutinę polilinijos atkarpą.

### CHAMFER

Slapyvardžiai: `CHA`. Linijos ir tiesios polilinijų atkarpos. Pirmiausia išveda dabartinius atstumus (arba ilgį ir kampą).

- `Pasirinkite pirmąją liniją [Anuliuoti/Polilinija/Atstumas/Kampas/Apkarpyti/meTodas/Keli]`
  - `D` klausia `Nurodykite pirmąjį nuokirtimo atstumą <paskutinis>` ir `Nurodykite antrąjį nuokirtimo atstumą <pirmasis>`: pirmasis nupjaunamas nuo pirmos jūsų pasirinktos linijos, antrasis – nuo kitos.
  - `A` klausia `Nurodykite nuokirtimo ilgį ant pirmos linijos` ir `Nurodykite nuokirtimo kampą nuo pirmos linijos`.
  - `E` (meTodas) pasirenka, kuris iš dviejų naudojamas kitam nuokirtimui. `T`, `M`, `U` ir `P` veikia kaip FILLET.
- `Pasirinkite antrąją liniją arba pažymėkite su Shift kampui pritaikyti [Atstumas/Kampas/meTodas]`. Shift+spustelėjimas daro aštrų kampą.

Atstumas, ilgesnis nei linija, atmetamas (`Atstumas per didelis.`).

### BREAK ir BREAKATPOINT

Slapyvardžiai: `BR`. `Pasirinkite objektą` (kur spustelite, yra pirmasis taškas), `Nurodykite antrąjį pertraukos tašką [Pirmas taškas]`; `F` klausia `Nurodykite pirmąjį pertraukos tašką` ir `Nurodykite antrąjį pertraukos tašką`. Dalis tarp jų pašalinama; apskritime – prieš laikrodžio rodyklę nuo pirmojo taško. BREAKATPOINT klausia `Nurodykite pertraukos tašką` ir perskiria objektą į dvi dalis tame taške (ne apskritimą).

### LENGTHEN

Slapyvardžiai: `LEN`. `Pasirinkite objektą matavimui [Pokytis/Procentas/Bendras/Dinaminis]`: spustelėjimas išveda `Dabartinis ilgis` (ir lanko apimtą kampą) ir vėl klausia. `DE` klausia `Įveskite ilgio pokytį (neigiamas sutrumpina) [Kampas]`, `P` – `Įveskite ilgio procentą`, `T` – `Nurodykite bendrą ilgį [Kampas]`, `DY` – vilkimas. Tada `Pasirinkite objektą keitimui [Anuliuoti]`, kartojama: pasislenka galas, arčiausias spustelėjimui. Linijos, lankai ir atviros polilinijos.

### JOIN

Slapyvardžiai: `J`. `Pasirinkite objektus sujungimui`. Linijos, lankai ir atviros polilinijos, besiliečiančios galas į galą, tampa polilinijomis (uždaromis, kai grandinė užsidaro); vienoje tiesėje esančios linijos tampa viena linija; to paties apskritimo lankai tampa vienu lanku arba apskritimu. Istorijoje nurodoma, kiek objektų sujungta ir kiek ne.

### MATCHPROP

Slapyvardžiai: `MA`, `PAINTER`. `Pasirinkite šaltinio objektą`, tada `Pasirinkite paskirties objektus [Parametrai]` ir {{key:Enter}}. Nukopijuoja sluoksnį ir spalvą, o tarp to paties tipo objektų – teksto aukštį ir plotį, matmenų dydžius ar brūkšniuotės šabloną. `S` klausia `Įjungti arba išjungti savybę [Spalva/Sluoksnis/Tekstas/Matmuo/Brūkšniuotė]`, kartojama, kol {{key:Enter}}; pasirinkimas prisimenamas sesijai.

### EXPLODE

Slapyvardžiai: `X`. Polilinijos tampa linijomis ir lankais, blokų nuorodos – savo objektais, matmenys – linijomis, rodyklių galais ir tekstu.

- `Pasirinkite objektus`

## Iškarpyklė

CadCraft savo iškarpyklė: veikia brėžinio viduje, tarp brėžinių ir tarp CadCraft skirtukų šioje naršyklėje. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, arba {{ui:Kopijuoti}} grupėje {{ui:Redagavimas}}. Kopijuoja objektus į iškarpyklę su jų naudojamais blokais ir sluoksniais. Objektai lieka pažymėti.

- `Pasirinkite objektus kopijavimui` (praleidžiama, jei objektai jau pažymėti)

### CUTCLIP

{{key:Mod+X}}, arba {{ui:Iškirpti}} meniu {{ui:Daugiau}}. Kopijuoja objektus į iškarpyklę, tada ištrina juos (vienas {{ui:Anuliuoti}} žingsnis).

- `Pasirinkite objektus iškirpimui` (praleidžiama, jei objektai jau pažymėti)

### COPYBASE

Kopijuoja objektus į iškarpyklę su bazės tašku, kurį pasirenkate; įklijavimas padeda tą tašką.

- `Nurodykite bazinį tašką`
- `Pasirinkite objektus kopijavimui`

### PASTECLIP

{{key:Mod+V}}, arba {{ui:Įklijuoti}} grupėje {{ui:Redagavimas}}. Kopija seka žymeklį, kabodama nuo apatinio kairiojo savo ribų kampo (arba nuo centro, arba nuo `COPYBASE` taško; žr. [CadCraft parametrai](topic:settings)).

- `Nurodykite įterpimo tašką`

Įklijuoti objektai pažymimi. Blokas, kurį brėžinys jau turi tuo pačiu pavadinimu, išlaiko šio brėžinio apibrėžimą.

Kai MarkupCraft nukopijuota sritis yra naujesnė nei tai, ką nukopijavo CadCraft (ir jai nėra daugiau nei 6 valandos), {{key:Mod+V}} ir `PASTECLIP` vietoje to įklijuoja tą sritį: žr. `PASTEAREA`.

### PASTEAREA

Slapyvardžiai: `PAREA`. {{ui:Įklijuoti nukopijuotą sritį}} meniu {{ui:Daugiau}}. Įklijuoja sritį, nukopijuotą MarkupCraft su {{ui:Kopijuoti sritį}}, kaip paveikslėlį tikru dydžiu. Žr. [Paveikslėliai brėžinyje](topic:pictures).

- `Nurodykite nukopijuotos srities apatinio kairiojo kampo tašką`
- `Mastelis pagal popieriaus dydį (100 – 1:100 lapui; Taškai: du taškai ir jų tikras atstumas) [Taškai] <1>` (tik kai lape nebuvo brėžinio mastelio): skaičius, {{key:Enter}} – popieriaus dydžiui, arba `P`, tada `Pirmas įklijuotos srities taškas`, `Antras įklijuotos srities taškas` ir jų tikras atstumas.

### PASTEORIG

{{key:Mod+Shift+V}}, arba {{ui:Įklijuoti vietoje}} meniu {{ui:Daugiau}}. Įklijuoja tose koordinatėse, iš kurių objektai buvo nukopijuoti. Nieko neklausia.

### DUPLICATE

Slapyvardžiai: `DUP`. {{key:Mod+D}}, arba {{ui:Dubliuoti ir perkelti}} meniu {{ui:Daugiau}}. Objektų kopija juda kartu su žymekliu nuo jo dabartinės vietos; {{key:Esc}} nieko nepalieka. Iškarpyklės nenaudoja.

- `Pasirinkite objektus dubliavimui` (praleidžiama, jei objektai jau pažymėti)
- `Nurodykite, kur eis kopija (Esc – nieko nepalieka)`: spustelėkite, įveskite tašką, `@dx,dy` (nuo tos vietos, kur buvo žymeklis) arba atstumą link žymeklio.

### SELECT

Klausia `Pasirinkite objektus` (su visomis žemiau esančiomis parinktimis) ir palieka pasirinktus pažymėtus kitai komandai arba vėliau `P`.

### QSELECT

Slapyvardžiai: `QS`. Naršyklėje – {{ui:Greitasis pasirinkimas}} langas (žr. [Pasirinkti objektus](topic:select-objects#select-by-a-rule-quick-select)). Be jo komandų eilutė klausia `Įveskite objekto tipą`, `Įveskite savybę`, `Įveskite operatorių [=/<>/>/</*/Pasirinkti visus] <=>` ir `Įveskite reikšmę`. Atitikimai tampa pažymėjimu.

### SELECTSIMILAR

Slapyvardžiai: `SIM`. `Pasirinkite objektus [Parametrai]` (arba dabartinis pažymėjimas): pažymi kiekvieną to paties tipo objektą su tuo pačiu sluoksniu ir spalva (ir bloko pavadinimu, brūkšniuotės šablonu). `SE` klausia `Įjungti arba išjungti savybę [Sluoksnis/Spalva/Pavadinimas/Šablonas/Aukštis]`, kartojama, kol {{key:Enter}}.

### FIND

Be slapyvardžių; arba {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Ieškoti ir pakeisti}}. Naršyklėje – {{ui:Ieškoti ir pakeisti}} langas (žr. [Pridėti tekstą ir žymas](topic:text#find-and-replace-words)). Be jo: `Įveskite tekstą paieškai`, tada `Įveskite pakeitimo tekstą (Enter: pažymėti rastus)`. Ieško tekste, atributų reikšmėse ir matmenų tekste, atvirame skirtuke arba pažymėjime.

### SELECTALL ir DESELECT

`SELECTALL` (slapyvardis `AI_SELALL`, {{key:Mod+A}}) pažymi kiekvieną redaguojamą objektą atvirame skirtuke. `DESELECT` (slapyvardžiai `AI_DESELECT`, `SELECTNONE`; arba {{key:Esc}}) panaikina pažymėjimą.

## Matmenys

### DIMLINEAR

Slapyvardžiai: `DLI`, `DIMLIN`. Horizontalus arba vertikalus atstumas.

- `Nurodykite pirmosios plėtinio linijos pradžią [Pasirinkti objektą]` (Enter arba `S`: `Pasirinkite objektą matavimui`, tada spustelėkite linijos, lanko, apskritimo ar polilinijos atkarpą)
- `Nurodykite antrosios plėtinio linijos pradžią`
- `Nurodykite matmens linijos vietą [Tekstas/Horizontaliai/Vertikaliai/Pasuktas]`. `T` klausia teksto (`<>` yra išmatuota reikšmė), `H` ir `V` nustato kryptį, `R` klausia `Nurodykite matmens linijos kampą <0>`.

### DIMALIGNED

Slapyvardžiai: `DAL`, `DIMALI`. Tikras atstumas tarp dviejų taškų.

- Pradžios kaip {{cmd:DIMLINEAR}}, tada `Nurodykite matmens linijos vietą [Tekstas]`.

### DIMANGULAR

Slapyvardžiai: `DAN`, `DIMANG`.

- `Pasirinkite lanką, apskritimą ar liniją, arba Enter viršūnei`
- Lankas: jo kampas. Apskritimas: `Nurodykite antrąjį kampo galinį tašką`. Linija: `Pasirinkite antrąją liniją`. Enter: `Nurodykite kampo viršūnę`, `Nurodykite pirmąjį kampo galinį tašką`, `Nurodykite antrąjį kampo galinį tašką`.
- `Nurodykite matmens linijos vietą [Tekstas]`: spustelėkite kampo viduje, kad jį išmatuotumėte.

### DIMRADIUS ir DIMDIAMETER

Slapyvardžiai: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Pasirinkite lanką arba apskritimą`, tada `Nurodykite matmens linijos vietą [Tekstas]`.

### DIMCONTINUE

Slapyvardžiai: `DCO`, `DIMCONT`. Tęsia nuo paskutinio sukurto tiesinio ar pasvirojo matmens (arba klausia `Pasirinkite tiesinį arba pasvirąjį matmenį`).

- `Nurodykite antrosios plėtinio linijos pradžią [Anuliuoti (U)]`, kartojama, kol {{key:Enter}}.

### DIMBASELINE

Slapyvardžiai: `DBA`, `DIMBASE`. Kaip {{cmd:DIMCONTINUE}}, bet kiekvienas matmuo prasideda nuo pirmosios pradžios ir sukraunamas toliau.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Be slapyvardžių. Kiekvienas klausia `Įveskite naują reikšmę … <dabartinė>` ir nustato tą dydį **naujiems** matmenims: bendras mastelis, teksto aukštis, rodyklės dydis, dešimtainiai skaitmenys (iki 8), tarpas aplink tekstą, plėtinys už matmens linijos, poslinkis nuo pradžios taško. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings).

### DIMLUNIT

Matmenų nustatymas: naujų matmenų ilgio formatas (1 mokslinis, 2 dešimtainis, 3 inžinerinis, 4 architektūrinis, 5 trupmeninis).

### DIMSTYLE ir -DIMSTYLE

Slapyvardžiai: `DST`, `DDIM`, `D`. Matmenų stilių tvarkyklė: {{ui:Nustatyti dabartinį}}, {{ui:Naujas…}}, {{ui:Keisti…}}, {{ui:Pervardyti…}}, {{ui:Naikinti}}, {{ui:Palyginti…}}, {{ui:Taikyti pasirinktiems}}. `-DIMSTYLE` komandų eilutėje: `Matmenų stilius [Atkurti/Įrašyti/Ištrinti/Taikyti/Palyginti/pervardyti/Sąrašas]`. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ir DIMTEDIT

`DIMEDIT` (`DED`): `Matmens redagavimas [Pradžia/Naujas/Sukti/Įstrižai] <Pradžia>`, tada matmenys (arba jau pažymėti). Naujas klausia teksto (`<>` = matavimas); Sukti – kampo (0 grąžina tekstą); Įstrižai – plėtinio linijų kampo nuo X ašies (Enter = nėra; tik tiesiniams ir pasvirajams matmenims). `DIMTEDIT` (`DIMTED`): `Matmens tekstas [Kairė/Dešinė/Centras/Pradžia/Kampas] <Centras>`. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Slapyvardžiai: `DTU`. `Vienetai naujų matmenų tekste [Brėžinio vienetai/mm/cm/m/km]`, arba su pažymėtais matmenimis `Vienetai pažymėtų matmenų tekste`. Išmatuotą ilgį parašo tuo vienetu, o vienetas rašomas po jo (DIMLFAC ir DIMPOST priesaga); `D` grąžina į brėžinio vienetus. Žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Slapyvardžiai: `RC`. Išveda `Lanko ilgis: … Tipas: …`, tada `Nurodykite pirmąjį tašką [Lanko ilgis/Objektas/Stačiakampis/Daugiakampis/Laisvas]`. Stačiakampis klausia `Nurodykite priešingą kampą`; Daugiakampis – `Nurodykite kitą tašką (Enter uždaro debesį) [Anuliuoti]`; Laisvas seka žymeklį, kol spustelėjimas ar {{key:Enter}}; `O` klausia `Pasirinkite objektą` ir `Apverst kryptį? [Taip/Ne] <N>` ir paverčia objektą debesiu. `A` klausia `Nurodykite kiekvieno lanko ilgį`. `R`, `P` ir `F` pasirenka kito debesies tipą. Rezultatas – uždara polilinija iš lankų.

### MLEADER

Slapyvardžiai: `MLD`; arba {{ui:Nuoroda}}. `Nurodykite nukreipiamosios rodyklės vietą [Rodyklės dydis/Nusileidimo atstumas]`, `Nurodykite nusileidimo vietą`, tada tekstas vietiniame langelyje (arba be jo `Įveskite tekstą (tuščia eilutė baigia)`). Įrašoma kaip tikra daugiarodyklinė DWG; DXF išsaugo linijas, rodyklę ir tekstą, kuriuos nubraižo.

## Parametrai

Žr. [Apriboti brėžinį](topic:constraints) ir [Naudoti parametrus ir lygtis](topic:parameters). Apribojimai veikia skirtuke {{ui:Modelis}}.

### GEOMCONSTRAINT ir GC komandos

Slapyvardis `GCON`: `Įveskite apribojimo tipą [Horizontalus/Vertikalus/Statmenas/Lygiagretus/Liečiantis/Sutampantis/Koncentriškas/Vienatiesis/Simetriškas/Lygus/Fiksuotas] <Horizontalus>`, tada tos komandos raginimai.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Pasirinkite objektą [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Pasirinkite pirmąjį objektą`, `Pasirinkite antrąjį objektą` (antrasis juda).
- {{cmd:GCCOINCIDENT}}: `Pasirinkite pirmąjį tašką [Objektas/Automatinis apribojimas] <Objektas>`, `Pasirinkite antrąjį tašką [Objektas] <Objektas>`.
- {{cmd:GCFIX}}: `Pasirinkite tašką [Objektas] <Objektas>`.
- {{cmd:GCSYMMETRIC}}: `Pasirinkite pirmąjį objektą [2Points] <2Points>`, `Pasirinkite antrąjį objektą`, `Pasirinkite simetrijos liniją`.

### DIMCONSTRAINT ir DC komandos

Slapyvardis `DCON`: `Pasirinkite matmenį konvertavimui [Tiesinis/Horizontalus/Vertikalus/Pasvirasis/Kampinis/Spindulinis/Skersmuo/Konvertuoti] <Pasvirasis>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Nurodykite pirmąjį apribojimo tašką [Objektas] <Objektas>`, `Nurodykite antrąjį apribojimo tašką`, `Nurodykite matmens linijos vietą`, `Matmens tekstas <d1=40>` (skaičius, išraiška arba `pavadinimas=išraiška`).
- {{cmd:DCALIGNED}}: kaip aukščiau, su `[Objektas/Taškas ir linija/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Pasirinkite lanką arba apskritimą`. {{cmd:DCANGULAR}}: `Pasirinkite pirmąją liniją arba lanką`, `Pasirinkite antrąją liniją`.
- {{cmd:DCCONVERT}}: `Pasirinkite matmenis konvertavimui`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Pasirinkite objektus [Parametrai]`. `S` klausia atstumo ir kampo toleranciją.
- {{cmd:DELCONSTRAINT}} (slapyvardis `DELCON`): `Pasirinkite objektus`; jų apribojimai pašalinami.
- {{cmd:CONSTRAINTBAR}} (slapyvardis `CBAR`): `Pasirinkite objektus [Rodyti visus/Slėpti visus]`, tada `[Rodyti/Slėpti]`.
- {{cmd:DCDISPLAY}}: `Įveskite parinktį [Rodyti/Slėpti]`.

### PARAMETERS ir -PARAMETERS

{{cmd:PARAMETERS}} (slapyvardžiai `PAR`, `PARAM`) atidaro {{ui:Parametrai}} skydelį. `-PARAMETERS`: `Įveskite parinktį [Naujas/Redaguoti/Pervadinti/Ištrinti/?] <?>`.

### SWBOUT

Slapyvardis `SWMACRO`. Atsisiunčia makrokomandą (.swb), kuri SolidWorks atkuria modelį kaip vieną apribotą eskizą. Žr. [Perkelti eskizus į kitus detalių modeliavimo įrankius ir iš jų](topic:solidworks-sketches).

## Blokai

### ANNOSCALE

Slapyvardžiai: `CANNOSCALE`. Pasako brėžinio anotacijos mastelį ir kiek anotacinių objektų jame yra, tada klausia `Naujas anotacijos mastelis`: įveskite `1:50`, `1:100`, `2:1`, paprastą skaičių (`50` yra 1:50) arba vieno iš brėžinio mastelių pavadinimą. Kiekvienas anotacinis tekstas ir matmuo pakeičiamas dydžiu, kad naujame mastelyje būtų spausdinamas tuo pačiu dydžiu, vienu {{ui:Anuliuoti}} žingsniu; neanotaciniai objektai paliekami. Žr. [Vienetai, popieriai ir mastelis](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Slapyvardžiai: `SCALELIST`. `Mastelių sąrašas [Pridėti/Redaguoti/Ištrinti/Sąrašas/Atkurti]` iki {{key:Enter}}. Pridėti: `Mastelio pavadinimas`, `Popieriaus vienetai`, `Brėžinio vienetai`. Redaguoti ir Ištrinti klausia mastelio pavadinimo. Brėžinio mastelius prisijungia prie rodinio ir spausdinimo mastelių sąrašų ir išsaugomi su brėžiniu. Žr. [Vienetai, popieriai ir mastelis](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ir PEDIT

`SPLINE` (`SPL`): `Pirmasis splaino taškas [Metodas/Objektas] (Tinkami taškai)`. Tinkami: taškai, per kuriuos eina kreivė; `Uždaryti`, `Anuliuoti`, tada `Pradžios liestinė` ir `Pabaigos liestinė` (taškas arba {{key:Enter}}). Metodas › Valdymo viršūnės klausia laipsnio (1–5) ir braižo pagal valdymo daugiakampį. Objektas paverčia polilinijas splainais per jų viršūnes. `SPLINEDIT` (`SPE`): `[Tinkamų taškų duomenys/Redaguoti viršūnę/konvertuoti į Polilinija/Atidaryti arba Uždaryti/Apversti/Anuliuoti/eXit]`; Tinkamų taškų duomenys `[Pridėti/Ištrinti/Perkelti/Išvalyti/Liestinės/eXit]`; Redaguoti viršūnę `[Pridėti valdymo tašką/Perkelti/Svoris/eXit]`. `PEDIT` (`PE`): `[Uždaryti/Atidaryti/Sujungti/Plotis/Tinkamas/Splainas/Nutiesinti/Linijos tipo generavimas/Apversti/Anuliuoti/eXit]`, `M` keliems objektams; linijos, lankai ir splainai pirmiausia siūlomi kaip polilinijos. Žr. [Splainai ir polilinijos](topic:splines).

### BLOCK

Slapyvardžiai: `B`, `BMAKE`.

- `Įveskite bloko pavadinimą`. Jei jis yra: `Blokas "…" jau yra. Perdaryti? [Taip/Ne] <N>`.
- `Nurodykite įterpimo bazinį tašką`
- `Pasirinkite objektus`. Jie pakeičiami viena nuoroda į naują bloką.

### WBLOCK

Slapyvardžiai: `W`, `-WBLOCK`. Įrašo bloką, kai kuriuos objektus ar visą brėžinį kaip naują DWG ar DXF failą. `WBLOCK šaltinis [Blokas/Visas brėžinys/Objektai] <Objektai>`:

- **Objektai**: `Nurodykite įterpimo bazinį tašką` (jis tampa naujo brėžinio pradžia), `Pasirinkite objektus`, tada `Failo formatas [DWG/DXF/R12 DXF]` ir `Naujo brėžinio failo pavadinimas`, tada `Ką daryti su objektais [Išlaikyti/Konvertuoti į bloką/Ištrinti]`. Konvertuoti pakeičia juos viena nuoroda į failo pavadinimo bloką; Ištrinti pašalina.
- **Blokas**: `Bloko, kurį įrašyti`. Paties bloko objektai, su jo bazės tašku kaip pradžia, įskaitant įdėtus blokus.
- **Visas brėžinys**: kiekvienas modelio erdvės objektas. Lapai neįrašomi; kopijai su lapais naudokite {{cmd:SAVEAS}}.

Naujas failas turi tik tuos sluoksnius, linijų tipus, tekstą ir matmenų stilius bei blokus, kuriuos naudoja jo objektai, ir brėžinio vienetus. DWG versija yra ta, kurią {{cmd:SAVEAS}} naudojo paskutinį kartą. Naršyklėje failas atsisiunčiamas; Studio programoje atsidaro įrašymo langas.

### ATTDEF

Slapyvardžiai: `ATT`, `DDATTDEF`, `-ATTDEF`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Apibrėžti atributą}}. Pirmiausia išveda režimus, tada `Įveskite keičiamą parinktį (Enter, kai baigta) [Nematomas/Pastovus/Iš anksto nustatytas]`, `Įveskite atributo žymos pavadinimą`, `Įveskite atributo raginimą`, `Įveskite numatytąją atributo reikšmę` (`Įveskite atributo reikšmę`, kai pastovus), `Nurodykite teksto pradžios tašką`, `Nurodykite teksto aukštį`, `Nurodykite teksto sukimo kampą`. {{cmd:BLOCK}} į bloką įtraukia atributų apibrėžimus.

### EATTEDIT ir ATTEDIT

`EATTEDIT` (`DDATTE`, arba dukart spustelėkite nuorodą su atributais; {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti atributus}}): `Pasirinkite bloko nuorodą su atributais`, tada {{ui:Redaguoti atributus}} langas. `ATTEDIT` (`ATE`, `-ATTEDIT`): ta pati nuoroda, tada `<raginimas> (<ŽYMA>) <reikšmė>` kiekvienam atributui; {{key:Enter}} palieka reikšmę. Žr. [Atributai](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Atnaujinti kurio bloko nuorodų atributus [Pavadinimas/Pasirinkti/Visi] <Pasirinkti>`. Reikšmės išsaugomos; nauji atributai gauna numatytąją reikšmę, pašalinti dingsta, vietos atstatomos.

### BATTMAN

{{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Atributų tvarkyklė}}. Langas: blokas, atributai (žyma, raginimas, numatytoji reikšmė, režimai, tvarka), {{ui:Atnaujinti nuorodas (reikšmės išsaugomos)}}, {{ui:Taikyti}}.

### REFEDIT ir REFCLOSE

{{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti vietoje}}. `REFEDIT`: `Pasirinkite bloko nuorodą redagavimui vietoje` (arba pažymėjimą). `REFCLOSE`: `Įrašyti pakeitimus į "…" [Įrašyti/Atmesti] <Įrašyti>`; juostos {{ui:Įrašyti bloką}} ir {{ui:Atmesti}} atlieka tą patį. Visas redagavimas yra vienas {{ui:Anuliuoti}} žingsnis. Žr. [Atributai](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT ir BCLOSE

`BE`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti bloką}}. `Įveskite bloko pavadinimą redagavimui <pasirinktos nuorodos blokas>` atidaro bloko redaktorių. `BCLOSE` klausia `Uždaryti bloko redaktorių "…" [Įrašyti/Atmesti] <Įrašyti>`; juostos {{ui:Įrašyti bloką}} ir {{ui:Atmesti pakeitimus}} atlieka tą patį. Viskas, kas atlikta redaktoriuje, yra vienas {{ui:Anuliuoti}} žingsnis.

### VIEWBASE

Slapyvardis: `FLATSHOT`. Plokščias 2D kietųjų kūnų vaizdas 3D skirtuke: `Vaizdas [Priekis/Viršus/Dešinė/Kairė/Galas/Apačia/Izo]`, `Paslėptos linijos [Rodyti/Slėpti]`, mastelis (`1:20`, `2:1`; {{key:Enter}} pasirenka tinkamą lapui), tada vaizdo centras. Viena bloko nuoroda: matomos briaunos VIEW-VISIBLE sluoksnyje, paslėptos brūkšniuotos VIEW-HIDDEN sluoksnyje. Žr. [Plokšti vaizdai lape](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Slapyvardžiai: `-PUBLISH`; arba {{ui:Visi lapai viename PDF}} {{ui:Spausdinti į PDF}} lange. `Lapai spausdinimui [Visi/Keli]`: {{key:Enter}} spausdina kiekvieną lapą, `S` klausia pavadinimų, atskirtų kableliais. Vienas PDF, puslapis ir žymė kiekvienam lapui. Žr. [Visi lapai viename PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Slapyvardžiai: `SSM`, `SHEETSETMANAGER`. Perveda į kairiojo skydelio skyrių {{ui:Lapų rinkinys}}: lapai iš daugelio brėžinių, sunumeruoti ir pavadinti, antraštės blokai užpildomi iš rinkinio, paskelbiami vienu PDF. Žr. [Lapų rinkiniai](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pasirinkite DWG ar DXF, tada jo įterpimo tašką. {{cmd:XREF}} (`XR`, `-XREF`): `Susieti brėžiniai [?/Prikabinti/Įkelti iš naujo/Įrašyti/Atjungti] (Enter: ?)`; su daugiau nei viena nuoroda pasirinkite vieną iš jų nuorodų arba įveskite `N` ir jos pavadinimą. Žr. [Susieti brėžiniai](topic:files#linked-drawings-external-references).

### COUNT

Slapyvardžiai: `BCOUNT`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Suskaičiuoti blokus}}. `Pasirinkite bloko nuorodą skaičiavimui, arba [Visi/Eksportuoti] (Enter: Visi)`: spustelėjimas pažymi ir suskaičiuoja kiekvieną to bloko nuorodą šioje erdvėje; {{key:Enter}} arba `A` išvardija visas; `E`, tada `C` (skaičiai) arba `A` (atributai) atsisiunčia CSV. Žr. [Suskaičiuoti blokus ir eksportuoti sąrašą](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Slapyvardžiai: `I`, `DDINSERT`.

- `Įveskite bloko pavadinimą arba [Failas/Biblioteka] <paskutinis blokas>` (didžiosios ir mažosios raidės nesvarbios). `F` klausia DWG ar DXF, tada visą brėžinį ar vieną iš jo blokų; jau naudojamas pavadinimas klausia {{ui:Palikti esamus}} arba {{ui:Pervardyti}}. `L` atidaro bibliotekos skydelį.
- `Nurodykite įterpimo tašką [Mastelis/Sukimas]`. `S` klausia `Nurodykite mastelio koeficientą`, `R` klausia `Nurodykite sukimo kampą`; abu prisimenami.
- Tada `Įveskite <raginimas> (<ŽYMA>) <numatytoji>` kiekvienam atributui, kurio blokas reikalauja. Žr. [Bloko atributai](topic:attributes).

### LIBRARY

Slapyvardžiai: `LIB`. Atidaro bibliotekos skydelį: įdėti elementus, tikrinti atnaujinimus, bibliotekos padėkos. Klausimų nėra. Žr. [Įterpti iš failo ar bibliotekos](topic:insert-from-file-and-library).

### STEELMEMBER

Slapyvardžiai: `SMEMBER`; arba {{ui:3D elementas}} bibliotekos skirtuke {{ui:Standartinis}}. `Profilio dydis <W12x26>` (kaip skirtuke pateikta), tada `Pradžios taškas [Stulpas]` ir `Galinis taškas`: kietas elementas 3D skirtuke tarp dviejų taškų, stovintis ant žemės. `C` klausia stulpo pagrindo taško ir jo aukščio. Vienas {{ui:Anuliuoti}} žingsnis. Žr. [Įdėti plieno profilius ir standartines detales](topic:steel-and-standard-parts).

### PARTSLIST

Slapyvardžiai: `PLIST`. `Detalių sąrašo viršutinis kairysis kampas`, tada `Teksto aukštis <2.5>`: nubraižo lentelę su kiekviena standartine detale ir plieno profiliu, įdėtu iš bibliotekos (eilės numeris, kiekis, detalė, standartas, dydis, ilgis, medžiaga, masė). Vienas {{ui:Anuliuoti}} žingsnis. Žr. [Įdėti plieno profilius ir standartines detales](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Slapyvardžiai: `PU`. Pašalina blokų apibrėžimus, kurių niekas nenaudoja. Klausimų nėra.

### DELBLOCKS

Arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Ištrinti blokus}}. `Pasirinkite bloką trynimui [Pavadinimas/eXit]`: pasirinkite bloko nuorodą, arba `N` sąrašui su filtru (galite pasirinkti kelis), arba `X` / {{key:Enter}} baigti. Ištrinama kiekviena nuoroda – modelyje, kiekviename lape ir kituose blokuose – tada apibrėžimas; komandų eilutė nurodo, kas ištrinta ir kas ne. Be pavadinimo blokai ir susieti brėžiniai nesiūlomi. Raginimas grįžta kitam blokui; visa komanda yra vienas {{ui:Anuliuoti}} žingsnis.

## Lapai ir spausdinimas

### LAYOUT

Slapyvardžiai: `LO`, `NEWLAYOUT`; arba mygtukas {{ui:+}} po brėžiniu. Naujas lapas su rėmu, antraštės bloku ir vienu rodiniu, ISO A3 formate (arba Tabloid brėžiniams coliais ar pėdomis). Klausimų nėra.

### MVIEW

Slapyvardžiai: `MV`. Tik lape ({{cmd:VPORTS}} lape daro tą patį).

- `Nurodykite rodinio kampą`, `Nurodykite priešingą kampą`. Rodinys rodo visą modelį standartiniu masteliu.

### VPORTS

Slapyvardžiai: `VIEWPORTS`. {{cmd:SPLIT}} yra tas pats ir iš lapo, o {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Padalyti greta}}, {{ui:Padalyti sukrautai}}, {{ui:Keturios sritys}}, {{ui:Viena sritis}} paleidžia jį. Modelyje: `Įveskite sričių skaičių [Viena/2/3/4] <3>`; `2` klausia `[Horizontaliai/Vertikaliai] <Vertikaliai>` (Vertikaliai = greta), `3` klausia `[Kairė/Dešinė] <Dešinė>` (kur eina didelė sritis). Kiekviena sritis išlaiko savo vaizdą ir erdvę; spustelėjimas padaro sritį aktyvia. Lape tai {{cmd:MVIEW}}. Žr. [Padalinti ekraną](topic:split-screen).

### VPVIEW

Be slapyvardžių. Tik lape.

- `Pasirinkite rodinį` (praleidžiama, jei jau pažymėtas), tada modelyje: `Nurodykite pirmąjį rodomo lango kampą`, `Nurodykite priešingą kampą`.

### UCS

Be slapyvardžių. Jūsų koordinačių sistema; ne redagavimas. `Nurodykite UCS pradžią [Pavadinta/Objektas/Ankstesnis/Pasaulis/Z/3taškai] <Pasaulis>`: taškas tampa nauja pradžia, tada `Nurodykite tašką X ašyje (Enter palieka kampą)`. `Z`: `Nurodykite sukimo kampą apie Z ašį <90>`. `3`: pradžia, taškas teigiamoje X ašyje, taškas teigiamoje Y pusėje. `OB`: `Pasirinkite objektą UCS lygiavimui`. `NA`: `[Atkurti/Įrašyti/Ištrinti/?]` ir pavadinimas. Vaizdas pasisuka taip, kad nauja X ašis būtų horizontali. Žr. [Pasukti vaizdą ir naudoti savo koordinates](topic:ucs-and-turned-view).

### PLAN

Be slapyvardžių. `Įveskite parinktį [Dabartinė ucs/Ucs/Pasaulis] <Dabartinė ucs>`: pasuka aktyvios srities vaizdą taip, kad UCS X ašis (ar pasaulio) būtų horizontali. Niekas brėžinyje nejuda.

### TURNLEFT, TURNRIGHT, TURNWORLD

Be slapyvardžių; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Pasukti vaizdą 90° į kairę}}, {{ui:Pasukti vaizdą 90° į dešinę}}, {{ui:Grįžti į pasaulį}}. Tas pats kaip `UCS Z -90`, `UCS Z 90` ir `UCS W`, o vaizdas seka.

### VPLAYER

Be slapyvardžių. Lape arba rodinio viduje. `Įveskite parinktį [?/Įšaldyti/Atšaldyti/Atkurti/Vpvisdflt]`: `F`, `T`, `R` klausia sluoksnių pavadinimų (kableliai, `*` ir `?` pakaitos), tada `[Visi/Pasirinkti/Dabartinis] <Dabartinis>` rodinių; Atkurti grąžina kiekvieną sluoksnį į numatytąją „įšaldyta naujuose rodiniuose“ būseną; `V` nustato tą numatytąją (`[Įšaldytas/Atšaldytas]`), kurią naudoja {{cmd:MVIEW}}. `?` išvardija sluoksnius, įšaldytus dabartiniame rodinyje. Sluoksnių skydelio rodinio stulpelis daro tą patį vienam rodiniui. Žr. [Įšaldyti sluoksnį viename rodinyje](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Slapyvardžiai: `MS`; arba dukart spustelėkite rodinio viduje. Tik lape. Dirbti su modeliu per rodinį: pasirinktą, vienintelį lape arba `Spustelėkite rodinio viduje, kad dirbtumėte`. Slinkimas ir mastelis viduje keičia rodinio vaizdą (su užrakintu rodymu lapas juda); naujas vaizdas įrašomas kaip vienas {{ui:Anuliuoti}} žingsnis. Žr. [Dirbti su modeliu per rodinį](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Slapyvardžiai: `PS`; arba dukart spustelėkite už rodinio ribų, arba spustelėkite skirtuką po brėžiniu. Grįžti į lapą.

### PLOT

Slapyvardžiai: `PRINT`, `PUBLISH`, `EXPORTPDF`; arba {{key:Mod+P}}. Atidaro langą {{ui:Spausdinti į PDF}}. Žr. [Spausdinti į PDF](topic:plot-pdf).

### PLOTSTYLES

Slapyvardžiai: `STYLESMANAGER`, `PSTABLES`; arba {{ui:Redaguoti lenteles…}} lange {{ui:Spausdinti į PDF}}. Atidaro {{ui:Spausdinimo stiliaus lentelės}}: kaip kiekviena spalva spausdinama (spalva, pilka, rašalas, linijos storis), išsaugoma su brėžiniu. Žr. [Spausdinimo stiliaus lentelės](topic:plot-pdf#plot-style-tables).

## Informacija

### CAL

Išveda skaičiavimo reikšmę taip, kaip ji būtų skaitoma visur, kur įvedamas ilgis.

- `Išraiška`: įveskite, pavyzdžiui, `12'6"+3/4"` arba `(24'-0")/3`, ir paspauskite {{key:Enter}}. CadCraft išveda `= 12'-6 3/4"   (150.75 brėžinio vienetų)`. Žr. [Aritmetika įvestoje reikšmėje](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Slapyvardžiai: `DI`; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Matuoti atstumą}}.

- `Nurodykite pirmąjį tašką`, `Nurodykite antrąjį tašką`. Išveda atstumą, kampą, Delta X ir Delta Y.

### AREA

Slapyvardžiai: `AA`; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Plotas}}. Išveda plotą ir perimetrą.

- `Nurodykite pirmąjį kampo tašką [Objektas/Pridėti plotą/Atimti plotą] <Objektas>`
  - Spustelėkite arba įveskite kampus; ties `Nurodykite kitą tašką (Enter uždaro) [Anuliuoti]` paspauskite {{key:Enter}}, kad uždarytumėte kontūrą. `U` atima paskutinį kampą.
  - {{key:Enter}} arba `O`, tada `Pasirinkite objektą`: apskritimas (išveda jo ilgį), elipsė, polilinija (atvira uždaroma tiesia linija plotui, o jos ilgis išvedamas) arba brūkšniuotė (skylės atimamos).
  - `A` (Pridėti plotą) ir `S` (Atimti plotą) saugo bendrą sumą: raginimas prasideda `(PRIDĖJIMO režimas)` arba `(ATIMIMO režimas)`, kiekvienas plotas pridedamas arba atimamas, ir po kiekvieno išvedamas `Bendras plotas = …`. Šiuose režimuose `O` renka objektus iki {{key:Enter}}, o {{key:Enter}} pirmame raginime baigia komandą.

### MEASUREGEOM

Slapyvardžiai: `MEA`. `Įveskite parinktį [Atstumas/Spindulys/Kampas/Plotas] <Atstumas>`; po kiekvieno matavimo klausia vėl, o numatytoji yra `eXit`.

- `D`: du taškai, kaip {{cmd:DIST}}.
- `R`: `Pasirinkite lanką arba apskritimą`; išveda spindulį ir skersmenį.
- `A`: lankas (jo apimtas kampas), linija ir tada antra linija (kampas tarp jų, link jų tolimų galų), arba {{key:Enter}} ir trys taškai (viršūnė, tada abu galai).
- `AR`: kaip {{cmd:AREA}}, vienas plotas.

### ID

Be slapyvardžių. `Nurodykite tašką`; išveda jo X ir Y.

### LIST

Slapyvardžiai: `LI`, `LS`. `Pasirinkite objektus`; išveda kiekvieno objekto tipą, sluoksnį ir pagrindinius matmenis.

## Rodinys, failai ir kita

### ZOOM

Slapyvardžiai: `Z`.

- `Nurodykite lango kampą, įveskite mastelio koeficientą (nX) [Ribos/Visi/Langas/Ankstesnis/Mastelis/Centras]`. Spustelėkite du kampus langui. `E`, `A` arba Enter: visas brėžinys.
- `P` (Ankstesnis arba {{ui:Ankstesnis}} įrankių juostoje) grąžina į ankstesnį vaizdą, iki 10 vaizdų skirtuke; vienas ratuko žingsnių ruožas ar vienas slinkimas skaičiuojami kaip vienas vaizdas.
- Skaičius, pvz., `2`, `2x` ar `0.5x` (arba `S`, tada skaičius), priartina ar atitolina per tą koeficientą apie ekrano vidurį.
- `C` klausia `Nurodykite centro tašką` ir `Įveskite aukštį arba padidinimą (nX)`.

### PDFATTACH, PDFIMPORT ir PDF komandos

Slapyvardžiai: `PDFATT` – {{cmd:PDFATTACH}}, `PDFIM` – {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} padeda PDF puslapį po brėžiniu (failas, puslapis, įterpimo taškas, mastelis, sukimas); {{cmd:PDFIMPORT}} paverčia puslapio linijas, kreives, užpildus ir tekstą brėžinio objektais sluoksniuose, pavadintuose pagal PDF, tikru dydžiu, įvestu masteliu arba pagal du taškus ir tikrą atstumą. {{cmd:PDFCLIP}} apkerpa pagrindą, {{cmd:PDFADJUST}} nustato ryškinimą, kontrastą, monochromiją arba jį išjungia, {{cmd:PDFLAYERS}} įjungia ar išjungia PDF savo sluoksnius, o {{cmd:PDF}} vėl nurodo CadCraft failus, kuriuos naudoja brėžinio pagrindai. Žr. [PDF pagrindai](topic:pdf-underlay).

### AUTOCOMPLETE

Slapyvardis: `AUTOC`. Brėžinio automatinis pildymas: be veikiančios komandos pilka šmėkla rodo, ką brėžinio paties šablonai nurodo kaip kitą. {{cmd:AUTOCOMPLETE}} įjungia `On` arba išjungia `Off` (taip pat Parametrai › CadCraft) arba `Show` parodo, ką pasiūlytų dabar. **Tab** nubraižo šmėklą kaip vieną {{ui:Anuliuoti}} žingsnį, **Esc** ją atmeta, kol brėžinys nepasikeis. Randa tris dalykus naujausiuose objektuose: kitą kopiją to, kas nubraižyta du kartus ar daugiau kartų lygiu žingsniu (stovai, stulpai, laiptų aukštis ir pakopa), kitus polilinijos laiptų žingsnius ir trūkstamą kambario ar sienų grandinės pusę. Viduryje {{cmd:LINE}} ar {{cmd:PLINE}} šmėkla yra **kitas taškas**: kitas laiptų žingsnis (aukštis, pakopa, aukštis…), ketvirtas stačiakampio kampas, taškas, kuris jį uždaro, arba dar vienas lygus žingsnis. Priartinkite žymeklį ir paspauskite **Tab**, tarsi būtumėte spustelėję ten; tęskite arba paspauskite Enter. Apskaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### AUTOSHEET

Slapyvardis: `ASH`. Lapai, kurie išsidėsto patys. {{cmd:AUTOSHEET}} paima brėžinio dalis (jūsų pavadintus vaizdus, atskiras modelio dalis arba visą modelį), parenka popieriaus dydį (arba jūsų nurodytą), kiekvienai daliai suteikia standartinį mastelį (vienas visiems arba didžiausias, kurį kiekviena telpa) ir išdėsto vaizdus eilėmis naujuose lapuose su antraštės bloku ir užrašu (pavadinimas ir mastelis) po kiekvienu. Tai, kas netelpa viename lape, gauna savo lapą. Vienas {{ui:Anuliuoti}} žingsnis. Apskaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### PHOTOSKETCH

Slapyvardis: `PSK`. Eskizo nuotrauka į brėžinį. Pasirinkite nuotrauką (JPEG, PNG ar TIFF) popieriaus lape nupiešto eskizo. {{cmd:PHOTOSKETCH}} suranda lapo keturis kampus, ištiesina perspektyvą, paima jūsų nurodytą popieriaus dydį (`Popierius` arba artimiausią standartinį) ir eskizo `Mastelį` (1 : n), tada perveda pieštuko linijas į linijas, lankus ir apskritimus – kiekvienai pieštuko spalvai (juoda, raudona, mėlyna, žalia) savo sluoksnį. Jei nerandama popieriaus kraštas, visa nuotrauka laikoma lapu, ir tai nurodoma. Raidės paliekamos. Vienas {{ui:Anuliuoti}} žingsnis. Apdorojama šiame kompiuteryje klasikiniu vaizdo apdorojimu, be modelio, niekur nesiunčiant.

### AUTODIM

Slapyvardis: `ADIM`. Automatinis matavimas pagal taisykles. {{cmd:AUTODIM}} pamatuoja pažymėtus objektus (arba visą brėžinį) pagal jų lygį ir statmenus kraštus: matmenų grandinę palei jūsų pasirinktas puses (`Pusės`), vieną bendrą matmenį išorėje, kiekvienos angos plotį (tarpą tarp kolinearių sienų linijų), skersmenį kiekvienam skylės dydžiui, o su `Tinklelis` – tinklelio linijų tarpus. Matmuo, kuris jau yra, nekuriamas dar kartą. Vienas {{ui:Anuliuoti}} žingsnis. Apskaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### GRIDMOVE

Slapyvardis: `GM`. Tinklelio linijos perkėlimas perkelia ir visa, kas nuo jos kabo. {{cmd:GRIDMOVE}} perkelia tinklelio liniją (liniją sluoksnyje, kurio pavadinime yra grid ar axis) ir tai, kas nuo jos kabo: sienos, kurių galas yra ant linijos, ištempiamos jai sekti, palei ją esančios sienos juda visos, stulpeliai (blokų nuorodos ir apskritimai ant linijos), jos burbulas ir žymė juda, o matmenys, kurių taškai yra ant jos, išmatuoja naują tarpą. Duokite du taškus (skaičiuojama tik dalis per liniją) arba `Atstumas`. Vienas {{ui:Anuliuoti}} žingsnis viską grąžina. Atliekama pagal taisykles šiame kompiuteryje.

### DETAILS

Slapyvardis: `DET`. Detalės, kurios randa jus. {{cmd:DETAILS}} saugo jūsų įmonės detales: `Pridėti` įdeda šio brėžinio bloką į sąrašą, `Sąrašas` ir `Pašalinti` jį tvarko, o `Ieškoti` surikiuoja jas pagal pažymėtą (arba paskutiniais nubraižytą) objektą pagal žodžius jo sluoksniuose, bloko pavadinimuose, brūkšniavimo šablonuose ir pastabose, lyginant su kiekvienos detalės pavadinimu ir pastabomis, todėl langų antgalis suranda jūsų palangės apdailą. Pasirinkite numerį ir tašką, kad ją įdėtumėte. Kai įjungtas `Užuomina` (taip pat Parametrai › CadCraft), pažymėjus ką nors, ką atitinka detalė, būsenos juostoje rodoma viena eilutė. Sąrašas saugomas šioje naršyklėje, šiame kompiuteryje, ir būtent jis ieškomas. `Bendrinti` įdeda jį ir į jūsų Dokumentų aplanką (`.cadcraft/firm-details.json`, su kiekvieno bloko brėžiniu): `Gauti` prideda tai, ką turi jūsų komanda ir ko neturite, `Siųsti` prideda tai, ką turite, o jos neturi, `Abu` daro abu, ir niekas nepašalinama iš abiejų pusių. Pirma atidarykite Dokumentų aplanką ({{cmd:DOCUMENTS}}); jei tas aplankas yra Team Cloud Plan aplankas, visa komanda dalijasi vienu sąrašu. Detalės elementas bibliotekos skydelyje turi mygtuką **Pridėti prie mano įmonės detalių**, kuris įdeda jį į tą patį sąrašą. Apskaičiuojama šiame kompiuteryje pagal žodžius, be modelio.

### SKETCHFIX

Slapyvardis: `SKF`. Pieštuku eskizai tampa tiksliais brėžiniais. Paspauskite ir vilkite po vieną laisvos rankos brūkšnį (pieštuku, pele ar pirštu), tada Enter. Kiekvienas brūkšnys skaitomas kaip linija, apskritimas, lankas, stačiakampis ar polilinija: beveik horizontalios ir vertikalios linijos tampa tiksliai horizontalios ir vertikalios, uždaras apvalus brūkšnys tampa apskritimu, uždaras brūkšnys su keturiais statiniais kampais – stačiakampiu, o brūkšnių galai sutraukiami kartu ir prie galų, kurie jau yra brėžinyje. Vienas {{ui:Anuliuoti}} žingsnis. Apskaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### SCANATTACH ir nuskaitytų brėžinių komandos

Slapyvardžiai: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} slapyvardžių neturi. Jos veikia su paveikslėliu, kiekviena – vienas {{ui:Anuliuoti}} žingsnis. {{cmd:SCANATTACH}} įdeda PNG, JPEG, TIFF (vieną puslapį ar visus) arba PDF puslapį, kuris yra paveikslėlis. {{cmd:SCANSCALE}} pakeičia lapo mastelį pagal du pasirinktus taškus ir tikrą atstumą. {{cmd:SCANALIGN}} perkelia ir pasuka jį į du taškus (`Pritaikyti lapo mastelį` Taip/Ne). {{cmd:SCANDESKEW}} parodo lapo ilgų linijų kampą ir pasuka lapą, kai priimate `Priimti` arba nurodote `Reikšmę`. {{cmd:SCANCLEAN}} paverčia jį juodai baltu (`Slenkstis` Auto/Adaptive/Level, `Dėmės`) ir `Vykdyti`. {{cmd:SCANCROP}} palieka langą. {{cmd:SCANERASE}} ištrina `Stačiakampį`, `Daugiakampį` ar `Lasso`. {{cmd:SCANTRACE}} perveda linijas ir lankus į naują sluoksnį (`Tolerancija`, `Langas`, `Lankai`, `Likučiai`, `Vykdyti`) ir praneša, ką rado ir ką paliko kaip rastrą. {{cmd:SCANINFO}} išvardija originalų failą ir žingsnius. {{cmd:RASTERSNAP}} įjungia arba išjungia prisegimą prie nuskaitytų lapų linijų (On / Off). Žr. temą Nuskaityti brėžiniai ir pėdsakas.

### REGEN ir REGENALL

Slapyvardžiai: `RE` – {{cmd:REGEN}}, `REA` – {{cmd:REGENALL}}. Iš naujo nubraižo tai, kas matoma ekrane pagal brėžinį: {{cmd:REGEN}} – skirtuką, kurį žiūrite (lape – ir modelį, kurį rodo jo rodiniai), {{cmd:REGENALL}} – kiekvieną skirtuką, kiekvieną padalyto ekrano sritį ir kiekvieną atvirą brėžinį. Naudokite, kai vaizdas atrodo pasenęs po scenarijaus ar labai didelio pakeitimo, arba kai brėžinį redagavo asistentas; pats brėžinys nekeičiamas, todėl nėra ko anuliuoti.

### NAMEDVIEW

Slapyvardžiai: `NV`, `VIEWS`. `Įveskite parinktį [?/Atkurti/Įrašyti/Langas/Ištrinti] <Atkurti>`, tada vaizdo pavadinimas. `S` įrašo ekrane matomą vaizdą, `W` – langą, kurį pasirenkate, `R` rodo įrašytą vaizdą, `D` ištrina vieną, `?` išvardija šio skirtuko vaizdus. Įrašymas pavadinimu, kuris jau yra, jį pakeičia; kiekvienas pakeitimas yra vienas {{ui:Anuliuoti}} žingsnis. Vaizdai priklauso skirtukui, kuriame buvo įrašyti. DWG ir DXF failai juos saugo (VIEW lentelė); lapo vaizdai grįžta į pirmąjį lapą, nes failas nenurodo, kuriam.

### UNDO ir REDO

Slapyvardžiai: `U` – {{cmd:UNDO}}; {{cmd:REDO}} slapyvardžio neturi. Taip pat {{key:Mod+Z}} ir {{key:Mod+Y}}.

### LAYER

Slapyvardžiai: `LA`. Peršoka į {{ui:Sluoksniai}} skydelį.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Įveskite nauju objektams skirtą linijos tipą` – `ByLayer`, `ByBlock` arba pavadinimas (`?` išvardija: Continuous, brėžinio savieji, ir DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE su jų `2` (pusė) ir `X2` (dvigubas) dydžiais). {{cmd:LWEIGHT}} (`LW`): naujų objektų linijos storis mm, arba `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): brėžinio linijos tipo mastelis (su {{ui:Anuliuoti}}). {{cmd:LWDISPLAY}} (`LWT`): `Rodyti linijų storius [ON/OFF]` – tas pats kaip {{ui:LWT}} mygtukas būsenos juostoje. Žr. [Linijų storiai ir linijų tipai](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Įveskite pervadinamo objekto tipą [LAyer/Block]`, `Įveskite senąjį pavadinimą`, tada naują pavadinimą; objektai ar nuorodos seka. {{cmd:LAYMRG}}: `Pasirinkite objektą sujungiamame sluoksnyje arba [Pavadinimas]` iki {{key:Enter}}, tada `Pasirinkite objektą paskirties sluoksnyje arba [Pavadinimas]` ir `Y`. {{cmd:LAYDEL}}: `Pasirinkite objektą trinamame sluoksnyje arba [Pavadinimas]`, tada `Y`: sluoksnis ir kiekvienas jame esantis objektas dingsta (ne sluoksnis 0, DEFPOINTS ar dabartinis sluoksnis). Kiekviena komanda – vienas {{ui:Anuliuoti}} žingsnis. Žr. [Tvarkyti brėžinį naudojant sluoksnius](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Sluoksniai pagal pasirinktus objektus; taip pat {{ui:Sluoksniai}} skydelio {{ui:Įrankiai}} meniu. {{cmd:LAYISO}}: `Pasirinkite objektus izoliuojamame sluoksnyje (-iuose)`, tada {{key:Enter}}: visi kiti sluoksniai išjungiami. {{cmd:LAYUNISO}} juos vėl įjungia. {{cmd:LAYOFF}} ir {{cmd:LAYFRZ}}: `Pasirinkite objektą sluoksnyje, kurį išjungti` (ar įšaldyti), kartojama; `U` atima paskutinį, {{key:Enter}} baigia. {{cmd:LAYMCUR}}: `Pasirinkite objektą, kurio sluoksnis taps dabartiniu`. {{cmd:LAYON}} įjungia visus sluoksnius, {{cmd:LAYTHW}} atšaldo visus. Kiekviena komanda – vienas {{ui:Anuliuoti}} žingsnis. Žr. [Tvarkyti brėžinį naudojant sluoksnius](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} pradeda tuščią brėžinį, o {{cmd:OPEN}} atidaro DWG ar DXF, kiekvienas savo skirtuke virš brėžinio (nepakeistas naujas brėžinys naudojamas vietoj naujo skirtuko). Uždarant skirtuką su neįrašytais pakeitimais, klausiama pirmiau. Žr. [Padalinti ekraną](topic:split-screen).

{{cmd:SAVE}} (slapyvardis `QSAVE`, taip pat {{key:Mod+S}}) atsisiunčia kopiją brėžinio formatu: DWG, jei atidarytas iš DWG, DXF, jei iš DXF. Naujas brėžinys naudoja formatą, paskutinį pasirinktą Įrašyti kaip šioje naršyklėje, kitaip DWG.

{{cmd:SAVEAS}} (taip pat {{key:Mod+Shift+S}}) atidaro langą {{ui:Įrašyti kopiją kaip}}: pasirinkite {{ui:DWG}} (ir jo {{ui:Versija}}), {{ui:DXF R12}} arba {{ui:DXF 2000}}, tada {{ui:Įrašyti}}. Pasirinkimas galioja šiam brėžiniui ir naujiems brėžiniams šioje naršyklėje.

{{cmd:DXFOUT}} visada atsisiunčia DXF R12 kopiją, nekeisdamas formato, kurį naudoja {{cmd:SAVE}}.

Žr. [Failai: kas atsidaro, kas įrašoma](topic:files#saving).

### TOUR

Slapyvardžiai: `TUTORIAL`. Pradeda šešių žingsnių pirmojo brėžinio ekskursiją iš naujo. Žr. [Pradžia](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Slapyvardžiai: `TBDOCK`. `Įrankių juostos padėtis [Viršuje/Apačioje/Kairėje/Dešinėje]`. Žr. [Parametrai](topic:settings#toolbar-position).

### COMMANDLINE

Slapyvardžiai: `CMDLINE`. `Komandų eilutė [Prisegta apačioje/Plaukianti/Viena eilutė/Rodomos istorijos eilutės/Komandų istorija (F2)]`: prisega arba atskiria komandų eilutę, padaro ją viena eilute, klausia, kiek istorijos eilučių rodyti (0–12), arba atidaro istoriją. Žr. [Parametrai](topic:settings#command-line).

### TOPAREA

`Viršutinė sritis [Standartinė/Kompaktiška]`: juostos virš brėžinio, kaip buvo, arba kompaktiškos. Žr. [Parametrai](topic:settings#top-area).

### POLARANG

`Įveskite poliarinio kampo žingsnį laipsniais <90>`: žingsnis, pagal kurį lygiuojasi {{ui:Poliarinis}} sekimo linijos (daugiau nei 0, iki 180). Saugoma šioje naršyklėje.

### UNITS

Slapyvardžiai: `UN`. Kaip rašomi ir įvedami ilgiai.

- `Įveskite ilgio formatą [Moksliniai/Dešimtainiai/Inžineriniai/Architektūriniai/Trupmeniniai] <dabartinis>`
- Architektūriniai ir Trupmeniniai: `Įveskite mažiausios rodomos trupmenos vardiklį (1, 2, 4, 8, 16, 32, 64, 128 ar 256)`. Kitiems: `Įveskite dešimtainių skaitmenų skaičių (0–8)`.

Naujiems matmenims taikomas. Vienas {{ui:Anuliuoti}} žingsnis. Tas pats kaip {{ui:Ilgio formatas}} ir {{ui:Tikslumas}} lange {{ui:Dabartiniai nustatymai}}; žr. [Pėdos ir coliai](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Slapyvardžiai: `GDS`. Peržiūrėti IC išdėstymą (GDSII srauto failą): laboratorinis bandymas, tik peržiūrai ir matavimui.

- Failo pasirinkimo langas priima `.gds` failą; su keliomis viršutinėmis ląstelėmis – `Įveskite viršutinę ląstelę, kurią braižyti`.
- Kiekvienas sluoksnis ir duomenų tipas tampa brėžinio sluoksniu (`GDS 1`, `GDS 2/5`), nuorodos ir masyvai išdėstomi plokščiai, failo vartotojo vienetais (paprastai mikrometrais). Vienas {{ui:Anuliuoti}} žingsnis. Niekas nemodeliuojama ir netikrinama, o failas atgal neįrašomas.

### DIAGRAM

Slapyvardžiai: `TEXTDIAGRAM`, `T2D`. Schema iš teksto.

- Langelis priima tekstą (arba vieną eilutę su `;` tarp teiginių komandų eilutėje): Mermaid srauto schemą, PlantUML komponentų schemą, D2 ar nuo-iki sąrašą.
- `Nurodykite schemos viršutinį kairįjį kampą`, tada `Nurodykite teksto aukštį`.

Blokai ir jungtys yra įprasti objektai sluoksnyje `Diagram`, pažymimi baigus. Vienas {{ui:Anuliuoti}} žingsnis. Žr. [Nubraižyti schemą iš teksto](topic:text-to-diagram).

### OLELIST

Slapyvardžiai: `OLES`. DWG turimi OLE objektai, kurių CadCraft pats negali įdėti.

- Išvardija kiekvieną: numerį, tipą, dydį, ar išsaugojo paveikslėlį.
- `Įveskite parinktį [Įdėti/eXit] <eXit>`: Įdėti klausia numerio, apatinio kairiojo kampo ir pločio, ir nubraižo rėmelį su paveikslėliu. Vienas {{ui:Anuliuoti}} žingsnis; išsaugotas objektas nekeičiamas. Žr. [Paveikslėliai](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Slapyvardžiai: `SHX`. Jūsų SHX šriftai.

- `Įveskite SHX šrifto parinktį [Aplankas/Failai/Sąrašas/Pašalinti/Atvirkščiai/Išvalyti] <Sąrašas>`

{{ui:Aplankas}} nuskaito kiekvieną `.shx` aplanke (CadCraft Studio; iš naujo kiekvieną paleidimą), {{ui:Failai}} – pasirinktus failus (naršyklėje), {{ui:Atvirkščiai}} išdėsto vieno šrifto raides iš paskutinės pirmą. Teksto stiliai, kurie nurodo įkeltą šriftą, piešiami juo. Žr. [Nubraižyti tekstą savo SHX šriftais](topic:shx-fonts).

### LIMITS

Kokio dydžio brėžinys turėtų būti.

- `Nurodykite apatinį kairįjį kampą arba [ON/OFF] <dabartinis>`: taškas, `ON` arba `OFF`.
- `Nurodykite viršutinį dešinįjį kampą <dabartinis>`.

Tinklelis užpildo ribas, {{cmd:ZOOM}} Visi jas parodo, o kai ribos ON, taškas už jų atmetamas (`**Outside limits`). Vienas {{ui:Anuliuoti}} žingsnis; išsaugoma DWG ir DXF. Žr. [Nustatyti brėžinio ribas](topic:drawing-limits).

### AUNITS

Slapyvardžiai: `ANGUNITS`. Kaip rodomi ir įvedami kampai.

- `Įveskite kampo formatą [Dešimtainiai laipsniai/Laipsniai-minutės-sekundės/Geodeziniai azimutai] <dabartinis>`
- `Įveskite dešimtainių skaitmenų skaičių (0–8)`, arba kitoms dviem `Įveskite tikslumą` (0 laipsnių, 2 minutės, 4 sekundės, 5–8 sekundės dešimtainiai).

Vienas {{ui:Anuliuoti}} žingsnis; išsaugoma DWG ir DXF. Tas pats kaip {{ui:Kampo formatas}} lange {{ui:Dabartiniai nustatymai}}. Žr. [Įvesti ir rodyti azimutus ir kampus](topic:bearings-and-angles).

### APPLOAD

Slapyvardžiai: `AP`; arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Įkelti programą…}}. Langas {{ui:Įkelti programas}}: įkelkite `.lsp` rutinas ir `.dcl` dialogo failus, iškelkite juos, įkelkite iš istorijos iš naujo ir paleisties rinkinį. Rutinos `(defun c:NAME …)` komandos veikia kaip bet kurios kitos. Žr. [Įkelti programas](topic:load-applications) ir [Paleisti LISP rutinas](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Redaguoti slapyvardžius…}}) atidaro jūsų slapyvardžių failą (`ALIAS, *COMMAND` eilutės); {{ui:Įrašyti}} jį pritaiko. {{cmd:REINIT}} pritaiko jį dar kartą. Žr. [Redaguoti komandų slapyvardžius](topic:command-aliases).

### HELP

Slapyvardžiai: `?`. Komandų eilutės istorijoje išveda kiekvieną komandą, jos slapyvardžius ir vienos eilutės aprašymą. Neatidaro šio žinyno: tam paspauskite {{key:F1}} arba spustelėkite {{ui:Žinynas}}.

## Pažymėjimo raginimas

Bet kuriame raginime `Pasirinkite objektus`: spustelėkite objektus, braižykite langus (iš kairės į dešinę) ir kryžius (iš dešinės į kairę) dviem spustelėjimais arba paspauskite ir vilkite lasso ({{key:Space}} vilkimo metu: langas, kryžius, tvora), {{key:Shift}}+spustelėjimas pašalina, o {{key:Enter}} baigia. Taip pat galite įvesti `ALL` (viską), `L` (paskutinį objektą), `P` (Ankstesnis: ką naudojo paskutinė komanda), `F` (Tvora: objektus, kuriuos kerta taškų linija; `U` atima tašką), `W` (Langas), `C` (Kryžius), `R` (Pašalinimo režimas: pasirinkimai išima objektus; raginimas rodo `Pašalinti objektus`) ir `A` (Pridėti vėl). `?` išvardija juos. Jie raginime nerodomi. {{key:Tab}} per persidengiančius objektus paryškina kitą; spustelėkite, kad jį pasirinktumėte. Žr. [Pasirinkti objektus](topic:select-objects).
