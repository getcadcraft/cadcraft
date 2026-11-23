---
title: Komandų žinynas
summary: Kiekviena CadCraft braižymo programos komanda su jos trumpaisiais pavadinimais, klausimais, parinktimis ir numatytaisiais nustatymais.
keywords: komandos, slapyvardžiai, komandų sąrašas, plotas, perimetras, measuregeom, linija, pline, apskritimas, lankas, apkirpti, poslinkis, dimlinear, blokas, įterpti, išdėstymas, spausdinti, zoom, žinynas, copyclip, cutclip, pasteclip, pasteorig, copybase, dubliuoti, selectall
from: 979ffe3b
---

Įveskite komandos pavadinimą arba trumpąjį pavadinimą ir paspauskite {{key:Enter}} arba {{key:Space}}. Didžiosios ar mažosios raidės nesvarbu, o pirmasis `_`, `-`, `.` ar `'` ignoruojamas. Įveskite `HELP` (arba `?`), kad komandų eilutės istorijoje išvestumėte trumpą visų komandų sąrašą; paspauskite {{key:F1}}, kad atvertumėte šį žinyną.

Kaip skaityti raginimus: parinktys rašomos laužtiniuose skliaustuose, o pasirenkate ją įvesdami jos didžiąsias raides (`D` Skersmuo). Numatytasis pasirinkimas rašomas kampiniuose skliaustuose; paspauskite {{key:Enter}}, kad jį priimtumėte. Kur reikia taško, galite spustelėti arba įvesti bet kurį formatą iš [Koordinačių ir atstumų įvedimas](topic:coordinate-entry). Kur reikia atstumo, galite įvesti skaičių arba spustelėti du taškus.

Paspaudus {{key:Enter}} ten, kur reikia taško ar objekto ir numatytojo nėra, komanda baigiama. {{key:Esc}} ją atšaukia. Viskas, ką komanda padarė, yra vienas atšaukimo žingsnis.

## Braižymas

### LINE

Trumpieji pavadinimai: `L`. Tiesūs segmentai, kiekvienas savaime objektas.

- `Nurodykite pirmąjį tašką` (Enter: pradėti nuo paskutinio jūsų nurodyto taško)
- `Nurodykite kitą tašką [Anuliuoti (U)]`, kartojama. Po dviejų segmentų: `[Anuliuoti (U)/Uždaryti (C)]`.
- `U` atima paskutinį segmentą, `C` uždaro iki pirmo taško ir baigia. Enter baigia.

### PLINE

Trumpieji pavadinimai: `PL`. Viena polilinija iš tiesių ir lankų segmentų.

- `Nurodykite pradžios tašką`
- `Nurodykite kitą tašką [Lankas (A)/Uždaryti (C)/Anuliuoti (U)]` (Uždaryti, kai yra du segmentai)
- `A` perjungia į lankus: `Nurodykite lanko galinį tašką [Linija (L)/Uždaryti (CL)/Anuliuoti (U)]`. Kiekvienas lankas tęsiasi liestinėje prie ankstesnio segmento. `L` grįžta prie linijų, `CL` uždaro lanku.
- Enter baigia; polilinija lieka atvira.

### CIRCLE

Trumpieji pavadinimai: `C`.

- `Nurodykite apskritimo centrą [3 taškai (3P)/2 taškai (2P)/Liestinė liestinė spindulys (T)]`
- `Nurodykite apskritimo spindulį [Skersmuo (D)] <paskutinis spindulys>`; `D` klausia `Nurodykite apskritimo skersmenį`.
- `2P`: dviejų skersmens galai. `3P`: trys taškai ant apskritimo.
- `T` (taip pat komanda `TTR` ir {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Apskritimas: liestinė, liestinė, spindulys}}): `Nurodykite objekto tašką pirmajai liestinei`, antrajai, tada spindulį (Enter: paskutinis). Apskritimas liečia abu objektus (linijas, lankus, apskritimus, polilinijos segmentus, taip pat blokų viduje); iš tų, kurie tinka, – tas, kuris liečia arčiausiai jūsų pasirinkimų. „Apskritimas neegzistuoja“, kai nieko tinkamo nėra.
- `TTT` (arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Apskritimas: liestinė, liestinė, liestinė}}): trys objektai; apskritimas, liečiantis visus tris, arčiausias jūsų pasirinkimams (trys linijos duoda vidinį arba išorinį apskritimą, priklausomai nuo to, kur spustelite).

### ARC

Trumpieji pavadinimai: `A`.

- `Nurodykite lanko pradžios tašką [Centras (C)]`, `Nurodykite antrąjį lanko tašką`, `Nurodykite lanko galinį tašką`: lankas per tris taškus.
- `C`: `Nurodykite lanko centrą`, `Nurodykite lanko pradžios tašką`, `Nurodykite lanko galinį tašką`. Lankas eina prieš laikrodžio rodyklę nuo pradžios iki galo.

### RECTANG

Trumpieji pavadinimai: `REC`, `RECTANGLE`. Uždara polilinija.

- `Nurodykite pirmąjį kampo tašką`, `Nurodykite kitą kampo tašką`. Antram kampui įveskite `@plotis,aukštis`.

### POLYGON

Trumpieji pavadinimai: `POL`. Taisyklingas daugiakampis kaip uždara polilinija.

- `Įveskite kraštinių skaičių <4>` (3–1024)
- `Nurodykite daugiakampio centrą`
- `Įveskite parinktį [Įbrėžta į apskritimą (I)/Apibrėžta apie apskritimą (C)] <I>`
- `Nurodykite apskritimo spindulį`: spustelėkite arba įveskite tašką; jo atstumas nustato dydį, o kryptis pasuka daugiakampį.

### ELLIPSE

Trumpieji pavadinimai: `EL`.

- `Nurodykite elipsės ašies galinį tašką [Centras (C)]`, `Nurodykite kitą ašies galą`, `Nurodykite atstumą iki kitos ašies`
- `C`: `Nurodykite elipsės centrą`, `Nurodykite ašies galą`, tada atstumą iki kitos ašies.
- `I` (`Izoapskritimas`, tik kol {{cmd:ISODRAFT}} įjungtas): centras, tada spindulys arba `Skersmuo`: elipsė, kurią apskritimas rodo dabartinėje izometrinėje plokštumoje.

### HATCH

Trumpieji pavadinimai: `H`, `BH`, `BHATCH`; arba {{ui:Brūkšniuotė}} įrankių juostoje. Pirmiausia išveda dabartinį raštą, mastelį ir kampą.

- `Nurodykite vidinį tašką [Pasirinkti objektus (S)/Raštas (P)/Mastelis (SC)/Kampas (A)]`, kartojama (`Anuliuoti (U)`, kai yra sritis): kiekvienas spustelėjimas prideda uždarą sritį aplink jį, o joje esantys uždari kontūrai tampa salelėmis. Enter sudaro vieną brūkšniuotę iš visų.
- `S`: `Pasirinkite uždarus objektus` (uždaros polilinijos, apskritimai, uždaros elipsės).
- `P`: `Įveskite rašto pavadinimą, SOLID arba ? sąrašui <dabartinis>`. `SC`: `Nurodykite rašto mastelį`. `A`: `Nurodykite rašto kampą`.
- `G` (Gradientas): užpildas yra gradientas, o ne raštas. Žr. {{cmd:GRADIENT}}, kur aprašyti jo klausimai.

Žr. [Brūkšniuotė ir užpildymo sritys](topic:hatch).

### GRADIENT

Trumpieji pavadinimai: `GD`. Užpildo sritį vienos ar dviejų spalvų gradientu. Pirmiausia klausia gradiento, tada tęsia kaip {{cmd:HATCH}} (`Nurodykite vidinį tašką`, `S` uždariems objektams, {{key:Enter}} baigti).

- `Įveskite gradiento parinktį [Tipas (T)/Viena spalva (O)/Dvi spalvos (TW)/Kampas (A)/Centruotas (C)/Išeiti (X)] <X>`, kartojama; kiekvieną kartą išveda dabartinį gradientą.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` arba vienas iš jų apverstas (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Pakanka pirmųjų raidžių.
- `O`: viena spalva, tada jos tonas nuo 0 iki 1 (0 pašviesina iki juodos, 0,5 yra pati spalva, 1 nudažo iki baltos). `TW`: pirmoji ir antroji spalva. Spalva yra skaičius nuo 1 iki 255, trys skaičiai, pavyzdžiui `255,128,0`, arba `#rrggbb`.
- `A`: kampas, kuriuo gradientas eina. `C`: centruotas Taip arba Ne (Ne perkelia gradiento vidurį į vieną pusę).
- Atmeta spalvą ar tipą, kurio nepažįsta, ir toną už ribų 0–1.

{{cmd:HATCHEDIT}} `G` ir Ypatybės (Gradientas) vėliau keičia gradientą arba paverčia bet kurią brūkšniuotę gradientu. Gradientas rodomas ekrane ir spausdinamas. DWG 2004 ir naujesnės versijos išsaugo jį kaip tikrą gradiento brūkšniuotę; DXF 2000 ir DWG 2000 išsaugo jį CadCraft, o kitos programos mato vientisą užpildą pirmąja spalva.

### HATCHGENERATEBOUNDARY

Trumpieji pavadinimai: `HGB`. Iš naujo sukuria kontūrą iš brūkšniuotės, kuri jį prarado. `Pasirinkite brūkšniuotes` (arba pirmiausia pasirinkite jas), tada `Susieti kiekvieną brūkšniuotę su jos nauju kontūru, kad brūkšniuotė sektų jį? [Taip/Ne] <Taip>`.

- Kiekviena brūkšniuotės kilpa tampa uždara polilinija ant brūkšniuotės sluoksnio; naujos polilinijos lieka pasirinktos. Kreivas kraštas grįžta kaip trumpos tiesios atkarpos, kurias brūkšniuotė išlaiko.
- Su Taip brūkšniuotė seka savo naują kontūrą, kaip brūkšniuotė, sukurta su {{cmd:HATCH}}. Vienas atšaukimo žingsnis.
- Pranešama, kai nebuvo pasirinkta brūkšniuotė.

### POINT

Trumpieji pavadinimai: `PO`; arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Taškas}}. Taškų objektai, po vieną kiekvienam spustelėjimui, kol Enter.

- `Nurodykite tašką`

### XLINE

Trumpieji pavadinimai: `XL`; arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Konstrukcinė linija}}. Konstrukcinės linijos, be galo į abi puses. Žr. [Konstrukcinės linijos ir spinduliai](topic:construction-lines).

- `Nurodykite tašką [Horizontali (HOR)/Vertikali (VER)/Kampu (ANG)/Dalinti kampą (BISECT)/Poslinkis (OFFSET)]`, tada `Nurodykite per einantį tašką` kiekvienai linijai, kol Enter.
- `A`: `Įveskite konstrukcinės linijos kampą [Nuoroda] <0>`; `R` pirmiausia klausia `Pasirinkite linijos objektą`.
- `B`: `Nurodykite kampo viršūnės tašką`, `Nurodykite kampo pradžios tašką`, tada `Nurodykite kampo galinį tašką` kiekvienai linijai.
- `O`: `Nurodykite poslinkio atstumą [Per (T)] <Per>`, tada `Pasirinkite linijos objektą` ir `Nurodykite poslinkio pusę` (arba `Nurodykite per einantį tašką`) kiekvienai linijai.

### RAY

Trumpųjų pavadinimų nėra; arba {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Spindulys}}. `Nurodykite pradžios tašką`, tada `Nurodykite per einantį tašką` kiekvienam spinduliui, kol Enter.

### TEXT

Trumpieji pavadinimai: `DT`, `DTEXT`; arba {{ui:Tekstas}} įrankių juostoje. Vienos eilutės tekstas; kiekviena eilutė yra atskiras objektas.

- `Nurodykite teksto pradžios tašką [Lygiuoti (J)]`
- `J`: `Įveskite parinktį [Kairė (L)/Centras (C)/Dešinė (R)/Vidurys (M)/VK (TL)/VC (MC)] <L>`, tada `Nurodykite teksto įterpimo tašką`
- `Nurodykite aukštį <dabartinis teksto aukštis>`
- `Nurodykite teksto sukimo kampą <0>`
- `Įveskite tekstą`, kartojama: kiekvienas Enter pradeda kitą eilutę žemiau. Enter tuščioje eilutėje baigia. {{key:Space}} čia įveda tarpą.

### DIVIDE

Trumpieji pavadinimai: `DIV`. {{cmd:DIVIDE}} deda žymes ant linijos, lanko, apskritimo, polilinijos, spline ar elipsės, perpjaunančias ją į lygias dalis. Pasirinkite objektą, tada nurodykite dalių skaičių (2–32767). Atviras objektas gauna vienu ženklu mažiau nei dalių; uždaras – žymę ir pradžioje. Pats objektas nekerpamas. Žymės yra taškai; `Blokas` vietoje to prašo šio brėžinio bloko ir ar jis sukasi pagal objektą. Ilgiai palei spline ir elipses matuojami trumpomis stygomis. Atmeta tekstą, brūkšniuotes ir kitus objektus be ilgio.

### MEASURE

Trumpieji pavadinimai: `ME`. {{cmd:MEASURE}} deda žymę kas nurodytą ilgį palei liniją, lanką, apskritimą, polilinija, spline ar elipsę, skaičiuodamas nuo galo arčiausiai to taško, kur spustelėjote (uždaras objektas – nuo jo pradžios). Ilgį įveskite skaičiumi arba dviem taškais. Atviro objekto tolimas galas žymės negauna. `Blokas` vietoje taško deda bloką kiekvienoje žymėje. Atmeta ilgį 0, ilgesnį už objektą ir tokį, kuris sukurtų daugiau nei 32767 žymes.

### BOUNDARY

Trumpieji pavadinimai: `BO`, `BPOLY`. {{cmd:BOUNDARY}} sudaro uždarą polilinija aplink sritį, kurioje yra taškas, kurį pasirenkate, iš linijų, lankų, apskritimų, polilinijų ir kreivių, kurie ją riboja ekrane. Gabalai, gulintys ant lanko ar apskritimo, grįžta kaip lanko segmentai; elipsių ir spline gabalai grįžta kaip trumpos tiesios atkarpos. Su įjungtomis `Salelėmis` (pradžios nustatymas) kiekviena joje esanti uždara sritis gauna savo polilinija. Toliau spustelėkite taškus; Enter baigia. Objektai, ribojantys sritį, lieka kaip buvo. Pranešama, kai nėra uždaros srities su tuo tašku.

### BLEND

{{cmd:BLEND}} nubrėžia spline tarp dviejų atvirų kreivių galų. Spustelėkite kiekvieną kreivę arti galo, kurį jungiate. `CONtinuity` (Tęstinumas) pasirenka `Tangent` (Liestinė; spline išeina ir atvyksta palei abi kreives) arba `Smooth` (Sklandus; dar seka, kaip jos lenkiasi galuose); pasirinkimas išlieka sesijai. Dvi kreivės nekeičiamos. Atmeta uždarus objektus ir du galus, kurie jau susiliečia.

### REGION

Trumpieji pavadinimai: `REG`. {{cmd:REGION}} paverčia uždarus objektus regionais: plokščiomis sritimis, kurias galite jungti, kirpti ir matuoti. Pasirinkite apskritimus, uždaras polilinijas, uždaras elipses ar uždaras spline, arba linijas, lankus ir atviras polilinijas, kurios galas į galą uždaro kilpą; kiekviena kilpa tampa vienu regionu ir pakeičia objektus, iš kurių atsirado. Lankai lieka lankais; elipsės ir spline tampa trumpomis tiesiomis atkarpomis. Kas nėra uždaryta ir nesudaro kilpos, lieka kaip yra, ir apie tai pranešama, kiek jų. Brėžinyje regionas yra viena ar daugiau uždarų polilinijų, sujungtų kaip vardo neturinti grupė, todėl vienas spustelėjimas pasirenka visą regioną, o kopija yra atskiras regionas; kitos programos, atidarančios failą, mato uždaras polilinijas.

Turint regionų brėžinyje, {{cmd:UNION}}, {{cmd:SUBTRACT}} ir {{cmd:INTERSECT}} 2D skirtuke veikia su regionais: `UNION` sujungia pasirinktus regionus į vieną (regionai, esantys atskirai, tampa vienu regionu su keliais kontūrais), `SUBTRACT` klausia regionų, iš kurių atimti, ir tada tų, kuriuos atimti (skylė lieka regiono dalimi), `INTERSECT` palieka sritį, kurią jie visi turi bendrą. Kiekviena nurodo rezultato plotą ir yra vienas atšaukimo žingsnis. Atmeta, kai nieko neliktų arba nėra bendros srities. 3D skirtuke ir brėžinyje be regionų tos pačios komandos veikia kietuosius kūnus kaip anksčiau.

## Keitimas

### MTEXT

Trumpieji pavadinimai: `MT`, `T`; arba {{ui:Paragrafas}} įrankių juostoje. Paragrafo tekstas, kuris lūžta pagal plotį, rašomas vietoje.

- `Nurodykite pirmąjį kampą`
- `Nurodykite priešingą kampą [Aukštis (H)/Lygiavimas (J)/Eilučių tarpas (L)/Sukimas (R)/Plotis (W)]`: plotis tarp dviejų kampų yra vieta, kur tekstas lūžta. `H` klausia `Nurodykite aukštį`, `J` – `Įveskite lygiavimą [VK/VC/VD/ML/MC/MD/AK/AC/AD] <VK>`, `L` – `Įveskite eilučių tarpo koeficientą (0,25–4)`, `R` – `Nurodykite sukimo kampą`, `W` – `Nurodykite plotį (0, jei be lūžimo)` ir praleidžia antrąjį kampą.
- Tada ant brėžinio atsiveria langelis: rašykite, {{key:Enter}} – nauja pastraipa, {{key:Mod+Enter}} arba spustelėjimas už ribų – baigti, {{key:Esc}} – atšaukti. Jo juosta nustato aukštį, eilučių tarpą, plotį ir lygiavimą. Žr. [Pridėkite tekstą ir žymas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Trumpieji pavadinimai: `ED`, `DDEDIT`; arba dukart spustelėkite tekstą. `Pasirinkite tekstą redagavimui`, kartojama, kol {{key:Enter}}: kiekvienas atsidaro tame pačiame langelyje. Pradėtas ant pasirinkto ar dukart spustelėto teksto, redaguoja tik jį ir baigiasi.

### ERASE

Trumpieji pavadinimai: `E`, `DELETE`; arba paspauskite {{key:Delete}} su pasirinktais objektais.

- `Pasirinkite objektus` (praleidžiama, jei objektai jau pasirinkti)

### MOVE

Trumpieji pavadinimai: `M`.

- `Pasirinkite objektus`
- `Nurodykite bazinį tašką [Poslinkis (D)]`, `Nurodykite antrąjį tašką`
- `D`: `Nurodykite poslinkį`, įvedamą kaip `dx,dy`.

### COPY

Trumpieji pavadinimai: `CO`, `CP`. Kopijos tiek kartų, kiek nurodote taškų.

`Masyvas` prie antrojo taško raginimo sudaro eilę vienu kartu: nurodykite elementų skaičių (originalas skaičiuojamas kaip vienas), tada tašką, kur eina pirmoji kopija; kiti seka tokiais pačiais tarpais. `Tilpti` vietoj to padaro tą tašką paskutinės kopijos vieta, o kitos tolygiai išsidėsto tarp jų.

- `Pasirinkite objektus`
- `Nurodykite bazinį tašką [Poslinkis (D)]`
- `Nurodykite antrąjį tašką [Anuliuoti (U)]`, kartojama, kol Enter. `U` atima paskutinę kopiją.

### ROTATE

Trumpieji pavadinimai: `RO`.

- `Pasirinkite objektus`, `Nurodykite bazinį tašką`
- `Nurodykite sukimo kampą <paskutinis kampas>`: laipsniais, teigiamas prieš laikrodžio rodyklę; arba spustelėkite tašką, kad pasuktumėte link jo.

### SCALE

Trumpieji pavadinimai: `SC`.

- `Pasirinkite objektus`, `Nurodykite bazinį tašką`
- `Nurodykite mastelio koeficientą`: įveskite koeficientą, pavyzdžiui `0.5` arba `2`. Spustelėtas taškas duoda savo atstumą nuo bazinio taško kaip koeficientą.

### MIRROR

Trumpieji pavadinimai: `MI`.

- `Pasirinkite objektus`
- `Nurodykite pirmąjį veidrodinės linijos tašką`, `Nurodykite antrąjį veidrodinės linijos tašką`
- `Ištrinti šaltinio objektus? [Taip/Ne] <N>`

### ALIGN

Trumpieji pavadinimai: `AL`; arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti}}.

- `Pasirinkite objektus`
- `Nurodykite pirmąjį šaltinio tašką`, `Nurodykite pirmąjį paskirties tašką`
- `Nurodykite antrąjį šaltinio tašką (Enter tęsti)`, `Nurodykite antrąjį paskirties tašką`
- `Nurodykite trečiąjį šaltinio tašką (Enter tęsti)`, `Nurodykite trečiąjį paskirties tašką`
- Su dviem poromis: `Keisti objektų mastelį pagal lygiavimo taškus? [Taip/Ne] <N>`

Žr. [Lygiuoti objektus](topic:modify-objects#align-objects).

### ALIGNTO

- `Pasirinkite objektus` (arba pasirinkimą), `Lygiuoti [Kairė/Centras/Dešinė/Viršus/Vidurys/Apačia] <Kairė>`, `Pagal [Pasirinkimą/Pirmą/Paskutinį/Tašką] <Pasirinkimas>`; `P` klausia taško. Pasirinkimas lieka.

### DISTRIBUTE

- `Pasirinkite objektus` (bent tris), `Paskirstyti [Horizontaliai/Vertikaliai] <Horizontaliai>`, `Tolygiai išdėstyti [Centrus/Tarpus] <Tarpai>`. Du kraštiniai lieka; pasirinkimas lieka.

### ALIGNPANEL

Trumpieji pavadinimai: `ALP`; arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti ir paskirstyti}}. Atveria skydelį, kuris paleidžia ALIGNTO ir DISTRIBUTE spustelėjimais.

### LASER

Trumpieji pavadinimai: `LASERCUT`; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Lazeris…}}. Atveria Lazerio skydelį virš brėžinio: ką daro kiekvienas sluoksnis (pjauti, žymėti, graviruoti, užpildyti, paveikslėlis), peržiūrą, GRBL G-kodą įrašymui, rėmelio nustatymą ir siuntimą per Web Serial. Žr. [Siųskite brėžinį lazeriui](topic:laser-cutting).

### STRETCH

Trumpieji pavadinimai: `S`; arba {{ui:Ištempti}}. `Pasirinkite objektus tempimui`: vilkite kryžminius langus (arba įveskite `C`) per galus, kad perkeltumėte. `Nurodykite bazinį tašką [Poslinkis (D)]`, `Nurodykite antrąjį tašką`. Taškai langų viduje juda: linijų galai, polilinijų viršūnės (lankų segmentai išlaiko aukštį), matmenų taškai; apskritimai, elipsės, tekstas, taškai ir blokai juda visi, kai jų centras ar įterpimo taškas yra viduje. Pasirinkimas, padarytas prieš komandą, išlaiko kryžminius langus (ir lasus), kurie jį sudarė, todėl jie ištempia taip pat. Be lango objektai juda visi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Trumpieji pavadinimai: `AR`; arba {{ui:Masyvas}}. `Pasirinkite objektus`, tada `Įveskite masyvo tipą [Stačiakampis (R)/Poliarinis (PO)] <Stačiakampis>` (tik ARRAY).

- Stačiakampis prasideda nuo 4 stulpelių × 3 eilučių, tarpai – 1,5 karto daugiau nei objektų dydis, rodoma peržiūra. `Įveskite parinktį [Skaičius (COU)/Tarpai (S)/Stulpeliai (COL)/Eilutės (R)/Baigti (X)] <X>`: `COU` klausia stulpelių ir eilučių, `S` – atstumų tarp stulpelių ir tarp eilučių (neigiamas eina kairėn ar žemyn), `COL` ir `R` – po vieną kryptį.
- Poliarinis klausia `Nurodykite masyvo centro tašką`, prasideda nuo 6 elementų visa apimtimi, pasuktas. `Įveskite parinktį [Elementai (I)/Užpildymo kampas (F)/Sukti elementus (ROT)/Baigti (X)] <X>`: `I` elementai, `F` kampas, kurį užpildyti (+ prieš laikrodžio rodyklę, − pagal laikrodžio rodyklę), `ROT` Taip arba Ne.
- {{key:Enter}} (Baigti (X)) sukuria kopijas kaip paprastus objektus. Vienas atšaukimo žingsnis.
- `AS` (Susietas) perjungia tarp paprastų kopijų ir masyvo, kurį galima vėliau redaguoti: vienas objektas, kurį keičiate vėliau su {{cmd:ARRAYEDIT}}, rankenėlėmis ar Ypatybėse. Pasirinkimas prisimenamas ({{cmd:ARRAYASSOCIATIVITY}}); pradžioje jis yra paprastos kopijos.

### ARRAYPATH

Kopijos palei kreivę. `Pasirinkite objektus`, tada `Pasirinkite kelio kreivę`: linija, lankas, apskritimas, elipsė, polilinija ar spline (ne vienas iš masyvuojamų objektų). Kelias prasideda nuo jo galo, arčiau objektų, o pirmasis elementas yra objektai ten, kur jie yra.

- `Įveskite parinktį [Būdas (M)/Elementai (I)/Tarpai (SP)/Lygiavimas (AL)/Susietas (AS)/Baigti (X)] <X>`, su peržiūra. `M`: `Padalyti` paskirsto elementus tolygiai per visą kelią, `Matuoti` deda po vieną kas tiek palei jį. `I`: elementų skaičius (su Matuoti 0 reiškia, kiek telpa; skaičius už kelio galo sulaikomas iki to, kas telpa). `SP`: atstumas tarp elementų palei kelią (perjungia į Matuoti). `AL`: Taip sukasi kiekvienas elementas pagal kelią, Ne palieka juos vertikaliai.
- `AS` kaip {{cmd:ARRAY}}. Jam įjungus, masyvas išlaiko savo kelio formos kopiją: vėliau keičiant kelio kreivę elementai nejuda.
- Atmeta kelią, kuris nėra kreivė, ir vieną elementą.

### ARRAYEDIT

Keičia masyvą, sukurtą su Susietuoju (AS). `Pasirinkite masyvą` (arba pasirinkite jį pirmiausia). Išveda, koks masyvas dabar yra, tada klausia iki {{key:Enter}}:

- Stačiakampis: `COL` stulpeliai ir jų tarpai, `R` eilutės ir jų tarpai, `A` kampas, kuriuo eina stulpeliai.
- Poliarinis: `I` elementai, `F` užpildymo kampas, `ROT` sukti elementus Taip ar Ne.
- Kelias: `M` Padalyti arba Matuoti, `I` elementai, `SP` tarpai, `AL` lygiuoti su keliu.
- `S` (Šaltinis) atveria objektus, kuriuos masyvas kartoja, savarankiškai, kaip bloko redaktorius. Brėžkite ir redaguokite ten; {{cmd:ARRAYCLOSE}} įrašo arba atmeta, ir kiekvienas elementas seka.
- `REP` (Pakeisti): `Pasirinkite pakaitalo objektus`, `Nurodykite pakaitalo objektų bazinį tašką`, tada spustelėkite elementus, kuriuos keisti, ir {{key:Enter}}. Tie elementai rodo pakaitalą; pakaitalo objektai išeina iš brėžinio ir gyvena masyve. `RES` (Atstatyti) vėl rodo šaltinio objektus kiekviename elemente.
- Kiekvienas pakeitimas yra vienas atšaukimo žingsnis. Atmeta paprastas kopijas, paprastą bloko nuorodą ir masyvą užrakintame sluoksnyje.

Tie patys skaičiai yra Ypatybėse skiltyje Masyvas, o masyvas turi rankenėles: jo bazinis taškas jį perkelia, rankenėlė prie antrojo elemento nustato tarpą, rankenėlė už paskutinio elemento nustato skaičių (poliariniame: antrasis elementas nustato, kiek elementų, o paskutinis elementas – užpildymo kampą). {{cmd:EXPLODE}} paverčia masyvą atgal į paprastas kopijas.

### ARRAYCLOSE

Baigia {{cmd:ARRAYEDIT}} Šaltinį: `Įrašyti masyvo šaltinio objektų pakeitimus? [Įrašyti/Atmesti] <Įrašyti>`. Pranešama, kai nėra atidarytų masyvo šaltinio objektų. {{cmd:BCLOSE}} daro tą patį.

### ARRAYASSOCIATIVITY

`Įveskite naują ARRAYASSOCIATIVITY reikšmę (1 = masyvai lieka redaguojami, 0 = paprastos kopijos)`. Nustato, nuo ko pradeda {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ir {{cmd:ARRAYPATH}}; jų parinktis `AS` keičia tą patį nustatymą. Prisimenama šioje naršyklėje.

### OFFSET

Trumpieji pavadinimai: `O`. Linijos, lankai, apskritimai ir polilinijos.

Kai polilinija išsiplečia į išorę ir jos tiesiosios atkarpos kampe atitolsta, {{cmd:OFFSETGAPTYPE}} nusprendžia, kaip užpildyti tarpą.

- `Nurodykite poslinkio atstumą [Per (T)] <paskutinis atstumas arba Per>`
- `Pasirinkite objektą poslinkiui`, tada `Nurodykite pusės tašką poslinkiui` (arba su Per, `Nurodykite per einantį tašką`), kartojama, kol Enter.

### OFFSETGAPTYPE

- `Poslinkio kampų tarpai: 0 pratęsti, 1 suapvalinti, 2 nuašlifuoti`: kaip {{cmd:OFFSET}} užpildo tarpus išoriniuose polilinijos kampuose. `0` pratęsia segmentus, kol susitinka (pradžios nustatymas), `1` sujungia juos lanku aplink seną kampą, `2` – tiesia nupjovimu. Vidiniai kampai ir lankų segmentai nepaveikiami. Išsaugoma šiai sesijai.

### EXTRIM

{{cmd:EXTRIM}} apkerpa viską vienoje kraštinės pusėje. Pasirinkite pjovimo kraštą (liniją, lanką, apskritimą, polilinija, elipsę, spline ar konstrukcinę liniją), tada spustelėkite tašką pusėje, kurią išvalyti: kiekviena linija, lankas, apskritimas, polilinija ir konstrukcinė linija, kertanti kraštą, praranda savo dalį toje pusėje, kur ji prasideda ties kraštu. Kol renkate pusę, dalys, kurios dings, seka žymeklį. Uždaram kraštui pusės yra vidus ir išorė. Objektai, kurie tik liečia kraštą, ir tekstas, brūkšniuotės, spline bei elipsės, kertantys jį, lieka kaip yra. Vienas atšaukimo žingsnis.

### TRIMEXTENDMODE

- `Įveskite naują TRIMEXTENDMODE reikšmę (1 Greitas, 0 Standartinis)`: kaip {{cmd:TRIM}} ir {{cmd:EXTEND}} pradeda. `1` Greitas: kiekvienas objektas yra pjovimo kraštas ar riba. `0` Standartinis: pirmiausia klausia kraštų. Taip pat `(setvar "TRIMEXTENDMODE" 0)` LISP.

### TRIM

Trumpieji pavadinimai: `TR`. Pirmiausia išveda `Dabartiniai nustatymai: Greitasis režimas (TRIMEXTENDMODE 1), kraštai: be pratęsimo, vilkimas nubrėžia kelią`. Greitajame režime kiekvienas matomas objektas yra pjovimo kraštas, o objektas, kurio niekas nekerta, ištrinamas; Standartiniame režime pirmiausia klausia `Pasirinkite pjovimo kraštus (Enter = kiekvienas objektas)` ir pjauna tik ties jais.

- `Pasirinkite objektą apkirpimui arba su Shift pasirinkite pratęsimui [Pjovimo kraštai (T)/Tvora (F)/Kryžminis (C)/Režimas (O)/Kraštas (E)/Trinti (R)/Anuliuoti (U)]`, kartojama: spustelėkite gabalą, kurį pašalinti (jis rodomas pilkas ir punktyrinis, kol žymeklis ant jo ilsisi), vilkite kelią per kelis gabalus (visi eina vienu žingsniu) arba spustelėkite du tuščius taškus tvorai tarp jų. {{key:Shift}} vietoje to pratęsia. `T` pasirenka pjovimo kraštus (Standartiniame režime), `F` klausia tvoros taškų, `C` – dviejų lango kampų (dalinai viduje esantys gabalai eina), `O` klausia `Įveskite apkirpimo režimo parinktį [Greitas/Standartinis]`, `E` klausia `Įveskite numanomo krašto pratęsimo režimą [Pratęsti/Be pratęsimo]` (EDGEMODE), `R` trina pasirinktus objektus, `U` atšaukia paskutinį pasirinkimą ar vilkimą. Enter baigia. Žr. [Apkirpti ir pratęsti](topic:trim-and-extend).

- Spustelėjimas ant brūkšniuotės ją apkerpa: pjovimo kraštai padalija brūkšniuotą sritį, o spustelėtas gabalas pašalinamas (jokio nubrėžto kontūro nelieka tenai, kur jis buvo). Brūkšniuotė išlaiko savo raštą ar gradientą; brūkšniuotė, susieta su savo kontūru, vėliau nebėra susieta, nes jos nebeužpildo. Pranešama, kai nėra krašto, kuris dalintų brūkšniuotę toje vietoje, kai spustelėjimas nėra ant brūkšniuotės, ir kai nieko neliktų (naudokite {{cmd:ERASE}}). Vilkiamas kelias ar tvora brūkšniuotės neapkerpa.

### EXTEND

Trumpieji pavadinimai: `EX`. Tas pats, kas TRIM, atvirkščiai: `Pasirinkite objektą pratęsimui arba su Shift pasirinkite apkirpimui [Ribiniai kraštai (B)/Tvora (F)/Kryžminis (C)/Režimas (O)/Kraštas (E)/Anuliuoti (U)]`. Spustelėjimas pailgina arčiausią galą iki kito ribos; vilkiamas kelias ar tvora pailgina kiekvieną objektą, kurį jie kerta; {{key:Shift}} apkerpa. `B` pasirenka ribinius kraštus (Standartiniame režime). Režimas ir Kraštas bendri su TRIM.

### LINKVIEWS

Trumpieji pavadinimai: `SYNCVIEWS`; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Susieti skydelių vaizdus}}, arba nuorodos piktograma brėžinių skirtukuose. `Susieti skydelių vaizdus [ON/OFF]` (Enter perjungia į kitą būseną): kol įjungta, slinkimas ar didinimas aktyviame skydelyje perkelia kiekvieną skydelį, rodantį tokio pat tipo erdvę. Žr. [Padalyti ekraną](topic:split-screen).

### OPENIN3D

Trumpųjų pavadinimų nėra; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Atverti ModelCraft}}, kur 3D modeliavimo programa priima perduotą brėžinį. Atveria jį ten naujame skirtuke kaip DWG (nieko neįkeliama). Jei naršyklė blokuoja skirtuką, tai pranešama.

### LASSOMODE

`Įveskite naują LASSOMODE reikšmę (1 = lasas, 0 = stačiakampis)`: ką daro paspaudimas ir vilkimas tuščioje vietoje. Tas pats, kas Parametrai › CadCraft › Vilkimas pasirinkimui. Žr. [Lasso pasirinkimas](topic:lasso-selection).

### FILLET

Trumpieji pavadinimai: `F`. Linijos, lankai, apskritimai ir polilinijos. Pirmiausia išveda `Dabartiniai nustatymai: Režimas = TRIM, Spindulys = 0`.

- `Pasirinkite pirmąjį objektą [Anuliuoti (U)/Polilinija (P)/Spindulys (R)/Apkirpti (T)/Keli (M)]`
  - `R` klausia `Nurodykite suapvalinimo spindulį <paskutinis>`. `T` klausia `Įveskite apkirpimo režimo parinktį [Apkirpti/Be apkirpimo]`: su Be apkirpimo objektai lieka kaip yra ir pridedamas tik lankas.
  - `M` palieka komandą veikiančią daugiau kampų, kol {{key:Enter}}; `U` atima paskutinį kampą neišeidamas iš komandos.
  - `P` klausia `Pasirinkite 2D polilinija [Spindulys]` ir suapvalina kiekvieną kampą, kur susitinka dvi tiesios atkarpos. Jau turimi suapvalinimai pakeičiami nauju spinduliu; spindulys 0 juos pašalina. Kampai, kurių kraštinės per trumpos spinduliui, lieka ir suskaičiuojami.
- `Pasirinkite antrąjį objektą arba su Shift pasirinkite kampui taikyti [Spindulys (R)]`. Laikykite {{key:Shift}}, spustelėdami, kad gautumėte aštrų kampą, nepriklausomai nuo spindulio.

Spustelėkite kiekvieną objektą ant dalies, kurią norite išlaikyti. Dvi linijos, kurios nesusitinka, pratęsiamos. Dvi lygiagrečios linijos gauna pusapskritimį per tarpą, ties pirmosios linijos galu arčiausiai jūsų spustelėjimo. Apskritimas niekada nekerpamas. Du gretimi tos pačios polilinijos segmentai gauna lanką polilinijos viduje; polilinija ir kitas objektas veikia, kai pjūvis patenka ant pirmojo ar paskutiniojo polilinijos segmento.

### CHAMFER

Trumpieji pavadinimai: `CHA`. Linijos ir tiesūs polilinijų segmentai. Pirmiausia išveda dabartinius atstumus (arba ilgį ir kampą).

- `Pasirinkite pirmąją liniją [Anuliuoti (U)/Polilinija (P)/Atstumas (D)/Kampas (A)/Apkirpti (T)/Būdas (E)/Keli (M)]`
  - `D` klausia `Nurodykite pirmąjį nuošlifavimo atstumą <paskutinis>` ir `Nurodykite antrąjį nuošlifavimo atstumą <pirmasis>`: pirmasis nupjaunamas nuo pirmosios pasirinktos linijos, antrasis – nuo kitos.
  - `A` klausia `Nurodykite nuošlifavimo ilgį pirmojoje linijoje` ir `Nurodykite nuošlifavimo kampą nuo pirmosios linijos`.
  - `E` (Būdas) pasirenka, kuris iš dviejų naudojamas kitam nuošlifavimui. `T`, `M`, `U` ir `P` veikia kaip {{cmd:FILLET}}.
- `Pasirinkite antrąją liniją arba su Shift pasirinkite kampui taikyti [Atstumas/Kampas/Būdas]`. {{key:Shift}}+spustelėjimas daro aštrų kampą.

Atstumas, ilgesnis už liniją, atmetamas (`Atstumas per didelis.`).

### BREAK ir BREAKATPOINT

Trumpieji pavadinimai: `BR`. `Pasirinkite objektą` (kur spustelite, yra pirmasis taškas), `Nurodykite antrąjį pertraukos tašką [Pirmas taškas (F)]`; `F` klausia `Nurodykite pirmąjį pertraukos tašką` ir `Nurodykite antrąjį pertraukos tašką`. Tarpas tarp jų išeina; apskritime – prieš laikrodžio rodyklę nuo pirmojo taško. BREAKATPOINT klausia `Nurodykite pertraukos tašką` ir perskiria objektą į dvi dalis tame taške (ne apskritimas).

### LENGTHEN

Trumpieji pavadinimai: `LEN`. `Pasirinkite objektą matavimui [Delta (DE)/Procentas (P)/Viso (T)/Dinaminis (DY)]`: spustelėjimas išveda `Dabartinis ilgis` (ir lanko apimtą kampą) ir klausia vėl. `DE` klausia `Įveskite ilgio pokytį (neigiamas sutrumpina) [Kampas]`, `P` – `Įveskite ilgio procentą`, `T` – `Nurodykite visą ilgį [Kampas]`, `DY` vilkia. Tada `Pasirinkite objektą keitimui [Anuliuoti (U)]`, kartojama: judėti pirmiausia gali galas arčiausiai spustelėjimo. Linijos, lankai ir atviros polilinijos.

### JOIN

Trumpieji pavadinimai: `J`. `Pasirinkite objektus sujungimui`. Linijos, lankai ir atviros polilinijos, kurios susitinka galas į galą, tampa polilinijomis (uždaromis, kai grandinė užsidaro); linijos vienoje linijoje tampa viena linija; lankai to paties apskritimo tampa vienu lanku ar apskritimu. Istorijoje nurodoma, kiek objektų sujungta ir kiek ne.

### MATCHPROP

Trumpieji pavadinimai: `MA`, `PAINTER`. `Pasirinkite šaltinio objektą`, tada `Pasirinkite paskirties objektus [Parametrai (S)]` ir {{key:Enter}}. Nukopijuoja sluoksnį ir spalvą, o tarp to paties tipo objektų – teksto aukštį ir plotį, matmenų dydžius ar brūkšniuotės raštą. `S` klausia `Įjungti arba išjungti savybę [Spalva/Sluoksnis/Tekstas/Matmuo/Brūkšniuotė]`, kartojama, kol {{key:Enter}}; pasirinkimas prisimenamas sesijai.

### EXPLODE

Trumpieji pavadinimai: `X`. Polilinijos tampa linijomis ir lankais, bloko nuorodos – savo objektais, matmenys – linijomis, rodyklių galais ir tekstu. Masyvas, kuris lieka redaguojamas ({{cmd:ARRAYEDIT}}), tampa paprastomis savo objektų kopijomis.

- `Pasirinkite objektus`

### GROUP

Trumpieji pavadinimai: `G`. {{cmd:GROUP}} suteikia pasirinktiems objektams bendrą pavadinimą. Pasirinkite objektus, tada įveskite pavadinimą (be tarpų; `?` išvardija grupes; Enter sudaro grupę be pavadinimo) ir, grupei su pavadinimu, neprivalomą aprašymą. Nuo tada spustelėjus vieną iš jų, arba langą, kuris kurį nors paima, pasirenkami visi, todėl jie juda, kopijuojami ir trinami kartu; kiekvienas objektas vis dar yra savarankiškas objektas. Objektas gali būti keliose grupėse. Visos grupės kopija yra nauja grupė be pavadinimo; vieno nario kopija savarankiškai prisijungia prie grupės. Grupės priklauso erdvei, kurioje buvo sukurtos (modeliui ar lapui). Jos išlieka, kai įrašote kaip DWG ar DXF ir vėl atidarote failą CadCraft; DXF 2000 failai taip pat neša jas kaip grupių objektus kitoms programoms, o grupės, sukurtos kitoje programoje, nuskaitomos atidarius DXF ar DWG.

### UNGROUP

{{cmd:UNGROUP}} išardo grupes: pasirinkite grupių objektus (kiekviena grupė, kuriai jie priklauso, išardoma) arba įveskite `Name` ir grupės pavadinimą. Objektai lieka brėžinyje. Vienas atšaukimo žingsnis grąžina grupes.

### GROUPEDIT

{{cmd:GROUPEDIT}} keičia vieną grupę. Pasirinkite vieną iš jos objektų arba `Name` ir jos pavadinimą; grupė, kuri jau pasirinkta, priimama tokia, kokia yra. Tada: `Add` objektus (pasirenkami po vieną, ne grupėmis), `Remove` objektus, `REName` grupę, pakeisti jos `Description`, arba nustatyti `Selectable` (ar spustelėjimas ant vieno objekto pasirenka visą grupę). `eXit` arba Enter baigia. Grupė be objektų išnyksta.

### PICKSTYLE

- `Grupės pasirinkimas: 0 spustelėjimas pasirenka vieną objektą, 1 visą jo grupę`: su `1` (pradžios nustatymas) spustelėjimas ar langas ant sugrupuoto objekto pasirenka visą jo grupę; su `0` – atskirus objektus, kad galėtumėte redaguoti vieną narį. Išsaugoma šiai sesijai.

## Iškarpinė

CadCraft savoji iškarpinė: ji veikia viename brėžinyje, tarp brėžinių ir tarp CadCraft skirtukų šioje naršyklėje. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, arba {{ui:Kopijuoti}} grupėje {{ui:Redaguoti}}. Nukopijuoja objektus į iškarpinę kartu su blokais ir sluoksniais, kuriuos jie naudoja. Objektai lieka pasirinkti.

- `Pasirinkite objektus kopijavimui` (praleidžiama, jei objektai jau pasirinkti)

### CUTCLIP

{{key:Mod+X}}, arba {{ui:Iškirpti}} meniu {{ui:Daugiau}}. Nukopijuoja objektus į iškarpinę, tada juos ištrina (vienas atšaukimo žingsnis).

- `Pasirinkite objektus iškirpimui` (praleidžiama, jei objektai jau pasirinkti)

### COPYBASE

Nukopijuoja objektus į iškarpinę su bazės tašku, kurį pasirenkate; įklijavimas padeda tą tašką.

- `Nurodykite bazinį tašką`
- `Pasirinkite objektus kopijavimui`

### PASTECLIP

{{key:Mod+V}}, arba {{ui:Įklijuoti}} grupėje {{ui:Redaguoti}}. Kopija seka žymeklį ir kabo nuo apatinio kairiojo savo apimties kampo (arba nuo centro, arba nuo `COPYBASE` taško; žr. [CadCraft nustatymai](topic:settings)).

- `Nurodykite įterpimo tašką`

Įklijuoti objektai pasirenkami. Blokas, kurį brėžinys jau turi tuo pačiu pavadinimu, išlaiko šio brėžinio apibrėžimą.

Kai sritis, nukopijuota MarkupCraft, yra naujesnė nei tai, ką nukopijavo CadCraft (ir jaunesnė nei 6 valandos), {{key:Mod+V}} ir `PASTECLIP` vietoj to įklijuoja tą sritį: žr. `PASTEAREA`.

### PASTEAREA

Trumpieji pavadinimai: `PAREA`. {{ui:Įklijuoti nukopijuotą sritį}} meniu {{ui:Daugiau}}. Įklijuoja sritį, nukopijuotą su {{ui:Kopijuoti sritį}} MarkupCraft, kaip paveikslėlį tikru dydžiu. Žr. [Paveikslėliai brėžinyje](topic:pictures).

- `Nurodykite nukopijuotos srities apatinį kairįjį kampą`
- `Mastelis popieriaus dydžiu (100 1:100 lapui; Taškai: du jo taškai ir jų tikras atstumas) [Taškai] <1>` (tik tada, kai lape nebuvo brėžinio mastelio): skaičius, {{key:Enter}} popieriaus dydžiui arba `P`, tada `Pirmasis įklijuotos srities taškas`, `Antrasis įklijuotos srities taškas` ir jų tikras atstumas.

### PASTEORIG

{{key:Mod+Shift+V}}, arba {{ui:Įklijuoti vietoje}} meniu {{ui:Daugiau}}. Įklijuoja koordinatėse, iš kurių objektai buvo nukopijuoti. Nieko neklausia.

### DUPLICATE

Trumpieji pavadinimai: `DUP`. {{key:Mod+D}}, arba {{ui:Dubliuoti ir perkelti}} meniu {{ui:Daugiau}}. Objektų kopija juda kartu su žymekliu iš savo vietos; {{key:Esc}} nepalieka nieko. Iškarpinės nenaudoja.

- `Pasirinkite objektus dubliavimui` (praleidžiama, jei objektai jau pasirinkti)
- `Nurodykite, kur eina kopija (Esc nepalieka nieko)`: spustelėkite, įveskite tašką, `@dx,dy` (nuo tos vietos, kur buvo žymeklis) arba atstumą link žymeklio.

### SELECT

Klausia `Pasirinkite objektus` (su visomis žemiau esančiomis parinktimis) ir palieka pasirinktus objektus pasirinktus kitai komandai arba vėliau `P`.

### QSELECT

Trumpieji pavadinimai: `QS`. Naršyklėje – dialogas {{ui:Greitasis pasirinkimas}} (žr. [Pasirinkti objektus](topic:select-objects#select-by-a-rule-quick-select)). Be jo komandų eilutė klausia `Įveskite objekto tipą`, `Įveskite savybę`, `Įveskite operatorių [=/<>/>/</*/Pasirinkti visus] <=>` ir `Įveskite reikšmę`. Sutampantys tampa pasirinkimu.

### SELECTSIMILAR

Trumpieji pavadinimai: `SIM`. `Pasirinkite objektus [Parametrai (SE)]` (arba dabartinį pasirinkimą): pasirenka kiekvieną to paties tipo objektą su tuo pačiu sluoksniu ir spalva (ir bloko pavadinimu, brūkšniuotės raštu). `SE` klausia `Įjungti arba išjungti savybę [Sluoksnis (LA)/Spalva (CO)/Pavadinimas (NA)/Raštas (PA)/Aukštis (HE)]`, kartojama, kol {{key:Enter}}.

### FIND

Trumpųjų pavadinimų nėra; arba {{ui:Redaguoti}} › {{ui:Daugiau}} › {{ui:Ieškoti ir pakeisti}}. Naršyklėje – dialogas {{ui:Ieškoti ir pakeisti}} (žr. [Pridėkite tekstą ir žymas](topic:text#find-and-replace-words)). Be jo: `Įveskite tekstą paieškai`, tada `Įveskite pakeitimo tekstą (Enter: pasirinkti rastą)`. Ieško tekste, atributų reikšmėse ir matmenų tekste, atvirame skirtuke arba pasirinkime.

### SELECTALL ir DESELECT

`SELECTALL` (trumpasis pavadinimas `AI_SELALL`, {{key:Mod+A}}) pasirenka kiekvieną objektą, kurį galite redaguoti atvirame skirtuke. `DESELECT` (trumpieji pavadinimai `AI_DESELECT`, `SELECTNONE`; arba {{key:Esc}}) išvalo pasirinkimą.

## Matmenys

### DIMLINEAR

Trumpieji pavadinimai: `DLI`, `DIMLIN`. Horizontalus ar vertikalus atstumas.

- `Nurodykite pirmojo pratęsimo linijos pradžios tašką [Pasirinkti objektą (S)]` (Enter arba `S`: `Pasirinkite objektą matmeniui`, tada spustelėkite liniją, lanką, apskritimą ar polilinijos segmentą)
- `Nurodykite antrojo pratęsimo linijos pradžios tašką`
- `Nurodykite matmens linijos vietą [Tekstas (T)/Horizontali (H)/Vertikali (V)/Pasukta (R)]`. `T` klausia teksto (`<>` yra išmatuota reikšmė), `H` ir `V` nustato kryptį, `R` klausia `Nurodykite matmens linijos kampą <0>`.

### DIMALIGNED

Trumpieji pavadinimai: `DAL`, `DIMALI`. Tikras atstumas tarp dviejų taškų.

- Pradžios taškai kaip {{cmd:DIMLINEAR}}, tada `Nurodykite matmens linijos vietą [Tekstas (T)]`.

### DIMANGULAR

Trumpieji pavadinimai: `DAN`, `DIMANG`.

- `Pasirinkite lanką, apskritimą ar liniją, arba Enter viršūnei`
- Lankas: jo kampas. Apskritimas: `Nurodykite antrąjį kampo galinį tašką`. Linija: `Pasirinkite antrą liniją`. Enter: `Nurodykite kampo viršūnę`, `Nurodykite pirmąjį kampo galinį tašką`, `Nurodykite antrąjį kampo galinį tašką`.
- `Nurodykite matmens linijos vietą [Tekstas (T)]`: spustelėkite kampo viduje, kad jį išmatuotumėte.

### DIMRADIUS ir DIMDIAMETER

Trumpieji pavadinimai: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Pasirinkite lanką ar apskritimą`, tada `Nurodykite matmens linijos vietą [Tekstas (T)]`.

### DIMCONTINUE

Trumpieji pavadinimai: `DCO`, `DIMCONT`. Tęsia nuo paskutinio sukurto tiesinio ar įstrižo matmens (arba klausia `Pasirinkite tiesinį arba įstrižą matmenį`).

- `Nurodykite antrojo pratęsimo linijos pradžios tašką [Anuliuoti (U)]`, kartojama, kol Enter.

### DIMBASELINE

Trumpieji pavadinimai: `DBA`, `DIMBASE`. Kaip {{cmd:DIMCONTINUE}}, bet kiekvienas matmuo prasideda nuo pirmosios pradžios ir sukraunamas toliau.

### DIMORDINATE

Trumpieji pavadinimai: `DOR`, `DIMORD`. `Nurodykite elemento vietą`, tada `Nurodykite nuorodos galinį tašką [Xdatum (X)/Ydatum (Y)/Tekstas (T)]`. Įrašo, kiek toli elementas nuo UCS pradžios X ar Y kryptimi, nuorodoje: nuoroda, einanti daugiausia aukštyn ar žemyn, rodo X, o einanti į šoną – Y; `Xdatum` ir `Ydatum` nustato, kuris. Pirmiausia nustatykite pradžią su {{cmd:UCS}} (be jos tai brėžinio 0,0). Rankenėlės perkelia elementą, pradžią ir nuorodos galą, o vertė seka. DWG ir DXF išsaugoma kaip tikras ordinatės matmuo. Atmeta nuorodos galą ant paties elemento.

### DIMARC

Trumpieji pavadinimai: `DAR`. `Pasirinkite lanką arba polilinijos lanko segmentą`, tada `Nurodykite lanko ilgio matmens vietą [Tekstas (T)]`. Matuoja palei lanką (ne tiesiai per styga) ir įrašo lanko ženklą prieš reikšmę. Atmeta pilną apskritimą, liniją ar tiesų polilinijos segmentą. DWG išlaiko jį kaip lanko ilgio matmenį; DXF išlaiko kaip kampinį matmenį su ilgiu kaip tekstu, o CadCraft vėl atidaro jį kaip lanko ilgio matmenį.

### DIMJOGGED

Trumpieji pavadinimai: `DJO`, `JOG`. `Pasirinkite lanką ar apskritimą`, `Nurodykite centro vietos perrašymą`, `Nurodykite lūžio vietą`. Lūžusio spindulio matmuo kreivei, kurios centras toli arba už lapo ribų: matmens linija prasideda nuo jūsų nurodyto taško, o ne nuo centro, su lūžiu viduje, ir vis tiek rodo tikrą spindulį. DWG išlaiko jį kaip lūžusio spindulio matmenį; DXF išlaiko kaip spindulio matmenį, o CadCraft vėl atidaro jį lūžusį.

### DIMJOGLINE

Trumpieji pavadinimai: `DJL`. `Pasirinkite matmenį lūžiui pridėti [Šalinti]`, tada `Nurodykite lūžio vietą (arba paspauskite Enter)`. Deda lūžio ženklą ant tiesinio ar įstrižo matmens linijos, rodantį, kad atstumas nenubrėžtas mastelyje; vertė nesikeičia. `Šalinti` jį nuima. Atmeta kitus matmenų tipus.

### QDIM

Trumpųjų pavadinimų nėra. `Pasirinkite geometriją matmeniui`, tada `Nurodykite matmens linijos padėtį [Tęstinis/Pakopinis/Bazinis/Ordinatė/Spindulys/Skersmuo/Bazinis taškas (datumPoint)]`. Pamatuoja kelis objektus viename žingsnyje: nuo linijų ir polilinijų segmentų galų, apskritimų ir lankų centrų, taškų ir blokų nuorodų. Padėtis virš ar po objektais matuoja skersai, o šalia jų – aukštyn. `Tęstinis` sujungia taškus grandine, `Bazinis` matuoja visus nuo pirmojo, `Pakopinis` įdeda poras iš vidurio į išorę, `Ordinatė` duoda kiekvienam taškui jo atstumą nuo bazinio taško (`datumPoint` pasirenka naują), `Spindulys` ir `Skersmuo` matmenuoja kiekvieną pasirinktą apskritimą ar lanką. Režimas prisimenamas. Viskas, ką ji sukuria, yra vienas atšaukimo žingsnis. Praneša, kai yra mažiau nei du taškai, arba nėra lankų ar apskritimų spinduliui ir skersmeniui.

### DIMBREAK

Trumpieji pavadinimai: `DBREAK`. `Pasirinkite matmenis pertraukoms pridėti ar pašalinti`, tada `Nutraukti, kur kerta kiti objektai [Auto/Rankinis/Šalinti] <Auto>`. `Auto` palieka tarpą matmens ir pratęsimo linijose, kur tik kitas objektas jas kerta, ir perskaičiuoja tarpus, kai tie objektai ar matmuo pajuda. `Rankinis` (vienam matmeniui) klausia dviejų taškų ir palieka tarpą tarp jų. `Šalinti` nuima visus tarpus. Tarpas yra 1,5 karto didesnis už matmens teksto aukštį.

### DIMSPACE

Trumpųjų pavadinimų nėra. `Pasirinkite bazinį matmenį`, `Pasirinkite matmenis tarpams`, `Įveskite tarpo reikšmę arba Auto <Auto>`. Perkelia lygiagrečių tiesinių ir įstrižų matmenų linijas (arba kampinių apie tą patį viršūnę), kad jos stovėtų vienodu atstumu viena nuo kitos, skaičiuojant nuo bazinio matmens, kiekviena savo pusėje. `0` suderina juos su baziniu, `Auto` yra dvigubas bazinio matmens teksto aukštis. Matmenys, nelygiagretūs su baziniu, lieka nepaliesti.

### DIMINSPECT

Trumpųjų pavadinimų nėra. `Pasirinkite matmenis`, `Patikros rėmelio forma [Apvalus/Kampinis/Nėra/šalinti] <Apvalus>`, `Įveskite etiketę`, `Įveskite patikros dažnį <100%>`. Nubrėžia rėmelį aplink reikšmę, su etikete prieš ją ir patikros dažniu po jos. `šalinti` nuima rėmelį. Tolerancijos tekstas lieka su reikšme.

### DIMOVERRIDE

Trumpieji pavadinimai: `DOV`, `DIMOVER`. `Įveskite matmens kintamojo pavadinimą perrašymui arba Clear (Išvalyti)`, `Įveskite naują reikšmę ...`, kol Enter, tada `Pasirinkite matmenis`. Keičia tuos nustatymus tik pasirinktiems matmenims; matmens stilius nekeičiamas. Priima kintamuosius, kurie yra skaičius ar jungiklis (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` grąžina pasirinktus matmenis į jų stilių. Atmeta pavadinimą, kuris nėra toks kintamasis, ir reikšmę, kurios jis negali priimti.

### DIMREASSOCIATE

Trumpieji pavadinimai: `DRE`, `DIMREASSOC`. `Pasirinkite matmenis`, tada kiekvienam jo pratęsimo linijų pradžios taškai (`Nurodykite pirmojo pratęsimo linijos pradžios tašką objekte`: prisilipkite prie galo ar linijos vidurio, polilinijos kampo, centro; Enter palieka tašką laisvą), arba spindulio, skersmens, lūžusio spindulio ar lanko ilgio matmeniui `Pasirinkite lanką ar apskritimą`. Matmuo tada susiejamas su tais objektais: jiems pajudėjus ar pakeitus dydį, jis seka tame pačiame atšaukimo žingsnyje ir vėl matuoja. Susietą tašką pajudinus ranka arba ištrynus objektą, susiejimas nutrūksta. DWG ir DXF 2000 saugo susiejimą kaip CadCraft savus duomenis; kitos programos mato paprastą matmenį.

### DIMDISASSOCIATE

Trumpieji pavadinimai: `DDA`, `DIMDISASSOC`. `Pasirinkite matmenis`. Atlaisvina juos nuo objektų, prie kurių jie susieti; niekas nepajuda.

### CENTERMARK

Trumpieji pavadinimai: `CM`, `DIMCENTER`, `DCE`. `Pasirinkite apskritimą ar lanką centro žymei pridėti`, kartojama, kol Enter. Nubrėžia kryžių centre ir keturias ašines linijas, tęsiasi tiek, kad išeitų už kreivės (linijos tipas CENTER), kaip paprastas linijas dabartiniame sluoksnyje; dydis priklauso nuo dabartinio matmens nustatymų rodyklės dydžio ir bendro mastelio, sukasi su UCS. Jos neseka apskritimo, jei jis pajuda.

### CENTERLINE

Trumpieji pavadinimai: `CL`. `Pasirinkite pirmąją liniją`, `Pasirinkite antrąją liniją`. Nubrėžia liniją per vidurį tarp dviejų linijų (palei pusiausvyrą, kai jos susitinka), šiek tiek ilgesnę už jas, linijos tipu CENTER. Tai paprasta linija: ji nesekia dviejų linijų.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Trumpųjų pavadinimų nėra. Kiekviena klausia `Įveskite naują ... reikšmę <dabartinė>` ir nustato tą dydį **naujiems** matmenims: bendras mastelis, teksto aukštis, rodyklės dydis, dešimtainiai skaičiai (iki 8), tarpas aplink tekstą, pratęsimas už matmens linijos, poslinkis nuo pradžios. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings).

### DIMLUNIT

Matmenų nustatymas: naujų matmenų ilgio formatas (1 mokslinis, 2 dešimtainis, 3 inžinerinis, 4 architektūrinis, 5 trupmeninis).

### DIMSTYLE ir -DIMSTYLE

Trumpieji pavadinimai: `DST`, `DDIM`, `D`. Matmenų stilių tvarkyklė: {{ui:Nustatyti dabartinį}}, {{ui:Naujas…}}, {{ui:Keisti…}}, {{ui:Pervardyti…}}, {{ui:Naikinti}}, {{ui:Palyginti…}}, {{ui:Taikyti pasirinktiems}}. `-DIMSTYLE` komandų eilutėje: `Matmenų stilius [Atkurti/Įrašyti/Ištrinti/Taikyti/Palyginti/Pervadinti/Sąrašas]`. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ir DIMTEDIT

`DIMEDIT` (`DED`): `Matmens redagavimas [Pradžia/Naujas/Sukti/Įstrižas] <Pradžia>`, tada matmenys (arba jau pasirinkti). Naujas klausia teksto (`<>` = išmatuota reikšmė); Sukti – kampo (0 grąžina tekstą į vietą); Įstrižas – pratęsimo linijų kampo nuo X ašies (Enter = nėra; tik tiesiniams ir įstrižiems matmenims). `DIMTEDIT` (`DIMTED`): `Matmens tekstas [Kairė/Dešinė/Centras/Pradžia/Kampas] <Centras>`. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Trumpieji pavadinimai: `DTU`. `Vienetai naujų matmenų tekste [Brėžinio vienetai/mm/cm/m/km]`, arba su pasirinktais matmenimis `Vienetai pasirinktų matmenų tekste`. Įrašo išmatuotą ilgį tuo vienetu su vienetu po jo (DIMLFAC ir DIMPOST priesaga); `D` grąžina prie brėžinio vienetų. Žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Parametrinis

Žr. [Apribokite brėžinį](topic:constraints) ir [Naudokite parametrus ir lygtis](topic:parameters). Apribojimai veikia skirtuke {{ui:Modelis}}.

### GEOMCONSTRAINT ir GC komandos

Trumpasis pavadinimas `GCON`: `Įveskite apribojimo tipą [Horizontalus/Vertikalus/Statmenas/Lygiagretus (PA)/Liestinė/Sutampantis/Koncentriškas (CON)/Kolinearus (COL)/Simetriškas/Lygus/Fiksuotas] <Horizontalus>`, tada tos komandos raginimai.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Pasirinkite objektą [2 taškai] <2 taškai>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Pasirinkite pirmąjį objektą`, `Pasirinkite antrąjį objektą` (antrasis juda).
- {{cmd:GCCOINCIDENT}}: `Pasirinkite pirmąjį tašką [Objektas/Automatinis apribojimas] <Objektas>`, `Pasirinkite antrąjį tašką [Objektas] <Objektas>`.
- {{cmd:GCFIX}}: `Pasirinkite tašką [Objektas] <Objektas>`.
- {{cmd:GCSYMMETRIC}}: `Pasirinkite pirmąjį objektą [2 taškai] <2 taškai>`, `Pasirinkite antrąjį objektą`, `Pasirinkite simetrijos liniją`.

### DIMCONSTRAINT ir DC komandos

Trumpasis pavadinimas `DCON`: `Pasirinkite asociatyvų matmenį konvertavimui [Tiesinis/Horizontalus/Vertikalus/Įstrižas/Kampinis/Spindulio/Skersmens/Konvertuoti] <Įstrižas>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Nurodykite pirmąjį apribojimo tašką [Objektas] <Objektas>`, `Nurodykite antrąjį apribojimo tašką`, `Nurodykite matmens linijos vietą`, `Matmens tekstas <d1=40>` (skaičius, išraiška arba `pavadinimas=išraiška`).
- {{cmd:DCALIGNED}}: kaip aukščiau, su `[Objektas/Taškas ir linija/2 linijos]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Pasirinkite lanką ar apskritimą`. {{cmd:DCANGULAR}}: `Pasirinkite pirmąją liniją ar lanką`, `Pasirinkite antrą liniją`.
- {{cmd:DCCONVERT}}: `Pasirinkite matmenis konvertavimui`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Pasirinkite objektus [Parametrai (S)]`. `S` klausia atstumo ir kampo tolerancijų.
- {{cmd:DELCONSTRAINT}} (trumpasis pavadinimas `DELCON`): `Pasirinkite objektus`; jų apribojimai išnyksta.
- {{cmd:CONSTRAINTBAR}} (trumpasis pavadinimas `CBAR`): `Pasirinkite objektus [Rodyti visus/Slėpti visus]`, tada `[Rodyti/Slėpti]`.
- {{cmd:DCDISPLAY}}: `Įveskite parinktį [Rodyti/Slėpti]`.

### PARAMETERS ir -PARAMETERS

{{cmd:PARAMETERS}} (trumpieji pavadinimai `PAR`, `PARAM`) atveria skydelį {{ui:Parametrai}}. `-PARAMETERS`: `Įveskite parinktį [Naujas/Redaguoti/Pervadinti/Ištrinti/?] <?>`.

### SWBOUT

Trumpasis pavadinimas `SWMACRO`. Atsisiunčia makrokomandą (.swb), kuri SolidWorks atkuria modelį kaip vieną apribotą eskizą. Žr. [Perkelkite eskizus į kitus detalių modeliavimo įrankius ir iš jų](topic:solidworks-sketches).

## Blokai

### ANNOSCALE

Trumpieji pavadinimai: `CANNOSCALE`. Pasako brėžinio anotacijos mastelį ir kiek anotacinių objektų jame yra, tada klausia `Naujas anotacijos mastelis`: įveskite `1:50`, `1:100`, `2:1`, paprastą skaičių (`50` yra 1:50) arba vieno iš brėžinio savų mastelių pavadinimą. Kiekvienas anotacinis tekstas ir matmuo pakeičiamas dydžiu, kad naujame mastelyje atsispausdintų tokio pat dydžio, vienu atšaukimo žingsniu; neanotaciniai objektai paliekami nepaliesti, taip pat objektas, kuris turi mastelių sąrašą be naujojo ({{cmd:OBJECTSCALE}}). Žr. [Vienetai, popieriai ir masteliai](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Trumpieji pavadinimai: `OBJSCALE`. `Pasirinkite anotacinius objektus`, tada `Pasirinktų objektų anotacijos masteliai [Pridėti/Ištrinti/Dabartinis mastelis/Sąrašas/Baigti (X)] <Pridėti>`. Anotacinis tekstas ar matmuo išlaiko anotacijos mastelių sąrašą. `Pridėti` ir `Ištrinti` klausia mastelio (`1:50`, `2:1`, paprastas skaičius arba vieno iš brėžinio savų mastelių pavadinimas); `Dabartinis mastelis` prideda brėžinio anotacijos mastelį; `Sąrašas` išveda kiekvieno objekto mastelius. Rodinys, kurio mastelis yra objekto sąraše, rodo objektą dydžiu, kuris atspausdina jo popieriaus aukštį tuo mastelio, ekrane ir spausdinimuose. Paskutinio mastelio ištrinti negalima. Neanotaciniai objektai praleidžiami: pirmiausia Ypatybėse įjunkite Anotacinis. Sąrašai išsaugomi DWG ir DXF kaip CadCraft savi duomenys. Žr. [Vienetai, popieriai ir masteliai](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Trumpieji pavadinimai: `ANNOALL`. `Rodyti anotacinius objektus visais masteliais [ON/OFF]`. Įjungta (kaip brėžinys prasideda): anotacinis objektas rodomas ir rodinyje, ar modelyje, kurio mastelis nėra jo sąraše, dabartiniu dydžiu. Išjungta: ten nerodomas ir modelyje negali būti pasirinktas. Perjungiklis yra vienas atšaukimo žingsnis; į failą neįrašomas.

### SCALELISTEDIT

Trumpieji pavadinimai: `SCALELIST`. `Mastelių sąrašas [Pridėti/Redaguoti/Ištrinti/Sąrašas/Atstatyti]`, kol {{key:Enter}}. Pridėti: `Mastelio pavadinimas`, `Popieriaus vienetai`, `Brėžinio vienetai`. Redaguoti ir Ištrinti klausia mastelio pavadinimo. Brėžinio savi masteliai papildo rodinių ir spausdinimo mastelių sąrašus ir išsaugomi su brėžiniu. Žr. [Vienetai, popieriai ir masteliai](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ir PEDIT

`SPLINE` (`SPL`): `Pirmasis spline taškas [Būdas/Objektas] (Taškai, per kuriuos eina)`. Taškai: kreivė eina per taškus; `Uždaryti`, `Anuliuoti`, tada `Pradžios liestinė` ir `Galinė liestinė` (taškas arba {{key:Enter}}). Būdas › Kontroliniai taškai klausia laipsnio (1–5) ir braižo pagal kontrolinį daugiakampį. Objektas paverčia polilinijas spline per jų viršūnes. `SPLINEDIT` (`SPE`): `[Taškų duomenys/Redaguoti viršūnę/Paversti į polilinija/Atverti ar uždaryti/Apversti/Anuliuoti/Baigti (X)]`; Taškų duomenys `[Pridėti/Ištrinti/Perkelti/Išvalyti/Liestinės/Baigti (X)]`; Redaguoti viršūnę `[Pridėti kontrolinį tašką/Perkelti/Svoris/Baigti (X)]`. `PEDIT` (`PE`): `[Uždaryti/Atverti/Sujungti/Plotis/Pritaikyti/Spline/Atkreivinti/Linijos tipo generavimas/Apversti/Anuliuoti/Baigti (X)]`, `M` keliems objektams; linijos, lankai ir spline pirmiausia pasiūlomi kaip polilinijos. Žr. [Splainai ir polilinijos](topic:splines).

### BLOCK

Trumpieji pavadinimai: `B`, `BMAKE`.

- `Įveskite bloko pavadinimą`. Jei jis egzistuoja: `Blokas "…" jau yra. Perrašyti? [Taip/Ne] <N>`.
- `Nurodykite įterpimo bazinį tašką`
- `Pasirinkite objektus`. Jie pakeičiami viena nuoroda į naująjį bloką.

### WBLOCK

Trumpieji pavadinimai: `W`, `-WBLOCK`. Įrašo bloką, kai kuriuos objektus ar visą brėžinį į naują DWG ar DXF failą. `WBLOCK šaltinis [Blokas/Visas brėžinys/Objektai] <Objektai>`:

- **Objektai**: `Nurodykite įterpimo bazinį tašką` (jis tampa naujo brėžinio pradžia), `Pasirinkite objektus`, tada `Failo formatas [DWG/DXF/R12 DXF]` ir `Naujo brėžinio failo pavadinimas`, tada `Ką daryti su objektais [Palikti/Paversti į bloką/Ištrinti]`. Paversti pakeičia juos viena nuoroda į bloką, pavadintą pagal failą; Ištrinti juos pašalina.
- **Blokas**: `Blokas, kurį įrašyti`. Paties bloko objektai, su jo bazinio taško kaip pradžia, įskaitant įdėtus blokus.
- **Visas brėžinys**: kiekvienas objektas modelio erdvėje. Lapai neįrašomi; kopijai su lapais naudokite {{cmd:SAVEAS}}.

Naujame faile lieka tik tie sluoksniai, linijų tipai, teksto ir matmenų stiliai bei blokai, kuriuos naudoja jo objektai, ir brėžinio vienetai. DWG versija yra ta, kurią paskutinį kartą naudojo {{cmd:SAVEAS}}. Naršyklėje failas atsisiunčiamas; CadCraft Studio atsidaro įrašymo dialogas.

### ATTDEF

Trumpieji pavadinimai: `ATT`, `DDATTDEF`, `-ATTDEF`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Apibrėžti atributą}}. Išveda režimus, tada `Įveskite keičiamą parinktį (Enter, kai baigta) [Nematomas/Pastovus/Iš anksto nustatytas]`, `Įveskite atributo žymos pavadinimą`, `Įveskite atributo raginimą`, `Įveskite numatytąją atributo reikšmę` (`Įveskite atributo reikšmę`, kai pastovus), `Nurodykite teksto pradžios tašką`, `Nurodykite teksto aukštį`, `Nurodykite teksto sukimo kampą`. {{cmd:BLOCK}} įtraukia atributų apibrėžimus į bloką.

### EATTEDIT ir ATTEDIT

`EATTEDIT` (`DDATTE`, arba dukart spustelėkite nuorodą su atributais; {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti atributus}}): `Pasirinkite bloko nuorodą su atributais`, tada dialogas {{ui:Redaguoti atributus}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ta pati nuoroda, tada `<raginimas> (<TAG>) <reikšmė>` kiekvienam atributui; {{key:Enter}} palieka reikšmę. Žr. [Atributai](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Kurių blokų nuorodų atributus atnaujinti [Pavadinimas/Pasirinkti/Visi] <Pasirinkti>`. Reikšmės išsaugomos; nauji atributai gauna numatytąją reikšmę, pašalinti išnyksta, pozicijos atstatomos.

### BATTMAN

{{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Atributų tvarkyklė}}. Dialogas: blokas, atributai (žyma, raginimas, numatytoji reikšmė, režimai, tvarka), {{ui:Atnaujinti nuorodas (reikšmės išsaugomos)}}, {{ui:Taikyti}}.

### REFEDIT ir REFCLOSE

{{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti vietoje}}. `REFEDIT`: `Pasirinkite bloko nuorodą redagavimui vietoje` (arba pasirinkimą). `REFCLOSE`: `Įrašyti pakeitimus į "…" [Įrašyti/Atmesti] <Įrašyti>`; juostos {{ui:Įrašyti bloką}} ir {{ui:Atmesti}} daro tą patį. Visas redagavimas yra vienas atšaukimo žingsnis. Žr. [Atributai](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: ar rašiklio spaudimas nustato linijos storį, kurį daro {{cmd:SKETCHFIX}} ir {{cmd:SKETCHLIVE}} (iš pradžių įjungta). Žr. [Skicuokite rašikliu](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Trumpasis pavadinimas `OFFSTD`. Parodo, koks biuro standartas galioja šiam brėžiniui ir iš kur jis kilęs: brėžinio paties įrašas, jūsų komandos bendras arba jūsų Numatytosios politikos (teksto aukščiai `all.anno.*`); be jų – programos pačios dydžiai. `[Importuoti/Sluoksniai/Titulo blokas/Išvalyti/Baigti (X)]`: `Importuoti` nuskaito `cc-office-standard` .json (įrašą, kurį rašo SuperCad ir BimCraft) į šį brėžinį, išsaugomą su juo DWG ir DXF; `Sluoksniai` prideda biuro sluoksnius, kurių brėžiniui trūksta, vienu atšaukimo žingsniu, ir niekada nepašalina; `Titulo blokas` išvardija biuro laukus su šio brėžinio pačių reikšmėmis; `Išvalyti` pašalina paties brėžinio įrašą. Anotacinių tekstų ir matmenų aukščiai seka galiojantį standartą. Žr. [Vienetai, popieriai ir masteliai](topic:units-papers-scales).

### BPARAMS

Trumpieji pavadinimai: `BPM`, `BLOCKPARAMS`. Atveria parametrų tvarkyklę bloko, kuris yra bloko redaktoriuje, pasirinktos nuorodos bloke ar jūsų nurodytame bloke (`Bloko pavadinimas`): parametrai su formulėmis, keli matomumo parametrai su savo būsenomis ir pasirinktos nuorodos savos reikšmės ir būsenos. Žr. [Jūsų parametrai ir matomumo būsenos](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` daro tą patį komandų eilutėje: `[Parametras/Matomumas/Būsena/Priskirti/Nuoroda/Baigti]`.

### BEDIT ir BCLOSE

`BE`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti bloką}}. `Įveskite redaguojamo bloko pavadinimą <pasirinktos nuorodos blokas>` atveria bloko redaktorių. `BCLOSE` klausia `Uždaryti bloko redaktorių "…" [Įrašyti/Atmesti] <Įrašyti>`; juostos {{ui:Įrašyti bloką}} ir {{ui:Atmesti pakeitimus}} daro tą patį. Viskas, kas padaryta redaktoriuje, yra vienas atšaukimo žingsnis.

### VIEWBASE

Trumpasis pavadinimas `FLATSHOT`. Plokščias 2D kietųjų kūnų vaizdas 3D skirtuke: `Vaizdas [Priekis/Viršus/Dešinė/Kairė/Galas/Apačia/Izometrinis]`, `Paslėptos linijos [Rodyti/Slėpti]`, mastelis (`1:20`, `2:1`; {{key:Enter}} pasirenka tinkamą lapui), tada vaizdo centras. Viena bloko nuoroda: matomi kraštai ant VIEW-VISIBLE, paslėptos – punktyrinės ant VIEW-HIDDEN. Žr. [Plokšti vaizdai lape](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Trumpieji pavadinimai: `-PUBLISH`; arba {{ui:Visi lapai viename PDF}} dialoge {{ui:Spausdinti į PDF}}. `Lapai spausdinimui [Visi/Keli]`: {{key:Enter}} spausdina kiekvieną lapą, `S` klausia pavadinimų, atskirtų kableliais. Vienas PDF, puslapis ir žymė kiekvienam lapui. Žr. [Visi lapai viename PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Trumpieji pavadinimai: `SSM`, `SHEETSETMANAGER`. Nukreipia jus į kairiojo skydelio skyrių {{ui:Lapų rinkinys}}: lapai iš daugelio brėžinių, sunumeruoti ir pavadinti, jų titulo blokai užpildyti iš rinkinio, paskelbti kaip vienas PDF. Žr. [Lapų rinkiniai](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pasirinkite DWG ar DXF, tada jo įterpimo tašką. {{cmd:XREF}} (`XR`, `-XREF`): `Susietos brėžiniai [?/Pridėti/Perkrauti/Susieti/Atjungti] (Enter: ?)`; su daugiau nei viena nuoroda pasirinkite vieną iš jų arba įveskite `N` ir jos pavadinimą. Žr. [Susieti brėžiniai](topic:files#linked-drawings-external-references).

### COUNT

Trumpieji pavadinimai: `BCOUNT`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Suskaičiuoti blokus}}. `Pasirinkite bloko nuorodą skaičiavimui arba [Visi/Eksportuoti] (Enter: Visi)`: pasirinkimas pažymi ir suskaičiuoja kiekvieną to bloko nuorodą šioje erdvėje; {{key:Enter}} arba `A` išvardija visas; `E`, tada `C` (skaičiai) arba `A` (atributai) atsisiunčia CSV. Žr. [Suskaičiuokite blokus ir eksportuokite tvarkaraštį](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Trumpieji pavadinimai: `I`, `DDINSERT`.

- `Įveskite bloko pavadinimą arba [Failas/Biblioteka] <paskutinis blokas>` (didžiosios ar mažosios raidės nesvarbu). `F` klausia DWG ar DXF, tada visas brėžinys arba vienas jo blokų; jau naudojamas vardas klausia {{ui:Palikti esamus}} arba {{ui:Pervardyti}}. `L` atveria bibliotekos skydelį.
- `Nurodykite įterpimo tašką [Mastelis (S)/Sukti (R)]`. `S` klausia `Nurodykite mastelio koeficientą`, `R` – `Nurodykite sukimo kampą`; abu prisimenami.
- Kai blokas jau stovi šalia objektų, kurie kartojasi kitur be jo, eilutė nurodo, kiek vietų siūloma, o raginimas įgyja `suGgested` (pasiūlyta): `G` jas rodo; spustelėkite netoli vienos, kad ten įdėtumėte bloką, `A` – visoms, {{key:Enter}} grįžta. Jos perima savo kaimynų sukimą ir numatytąsias atributų reikšmes. Brėžiniai su daugiau nei 20 000 objektų atvirojoje erdvėje neieškomi.
- Tada `Įveskite <raginimas> (<TAG>) <numatytoji>` kiekvienam atributui, kurio blokas prašo. Žr. [Bloko atributai](topic:attributes).

### LIBRARY

Trumpieji pavadinimai: `LIB`. Atveria bibliotekos skydelį: įdėti elementus, tikrinti atnaujinimus, bibliotekos autorius. Klausimų nėra. Žr. [Įterpti iš failo ar bibliotekos](topic:insert-from-file-and-library).

### STEELMEMBER

Trumpieji pavadinimai: `SMEMBER`; arba {{ui:3D elementas}} bibliotekos skirtuke {{ui:Standartinis}}. `Profilio dydis <W12x26>` (kaip skirtukas jį išvardija), tada `Pradžios taškas [Stulpas]` ir `Galinis taškas`: kietas elementas 3D skirtuke tarp dviejų taškų, stovintis ant žemės. `C` klausia stulpo bazinio taško ir jo aukščio. Vienas atšaukimo žingsnis. Žr. [Plieno profilių ir standartinių detalių įdėjimas](topic:steel-and-standard-parts).

### PARTSLIST

Trumpieji pavadinimai: `PLIST`. `Detalių sąrašo viršutinis kairysis kampas`, tada `Teksto aukštis <2.5>`: nubrėžia lentelę su kiekviena standartine detale ir plieno profiliu, įdėtu iš bibliotekos (elementų numeriai, kiekis, detalė, standartas, dydis, ilgis, medžiaga, masė). Vienas atšaukimo žingsnis. Žr. [Plieno profilių ir standartinių detalių įdėjimas](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Trumpieji pavadinimai: `PU`. Pašalina blokų apibrėžimus, kurių niekas nenaudoja. Klausimų nėra.

### DELBLOCKS

Arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Naikinti blokus}}. `Pasirinkite bloką trynimui [Pavadinimas/Baigti (X)]`: pasirinkite bloko nuorodą, arba `N` – blokų sąrašą su filtru (galite pasirinkti kelis), arba `X` / {{key:Enter}} baigti. Kiekviena nuoroda išnyksta – modelyje, kiekviename lape ir viduje kitų blokų – ir tada apibrėžimas; komandų eilutė nurodo, kas ištrinta ir ko nepavyko. Bevardžiai blokai ir susieti brėžiniai nesiūlomi. Raginimas grįžta kitam blokui; visa komanda yra vienas atšaukimo žingsnis.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} įklijuoja tai, ką nukopijavote ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), kaip vieną bloką: pasirinkite įterpimo tašką, ten atsiranda viena nuoroda į naują bloką, pasirinkta. Blokas gauna savo pavadinimą (`A$C` ir numerį); {{cmd:RENAME}} suteikia jūsų. Vienas atšaukimo žingsnis pašalina nuorodą ir bloką.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} klausia bloko, kurį pakeisti, ir bloko, kuris įdedamas jo vietoje (`?` išvardija blokus), tada pakeičia kiekvieną nuorodą modelyje, kiekviename lape ir viduje kitų blokų. Kiekviena nuoroda išlaiko savo vietą, mastelį, sukimą, sluoksnį ir abiejų blokų atributų reikšmes; atributai, kurių turi tik naujasis blokas, prasideda nuo numatytųjų reikšmių, ir jis praneša, kurios reikšmės buvo atmestos. Kai senasis blokas nebenaudojamas, siūlo jį pašalinti. Atmeta susietus brėžinius ir pakaitalą, kuris įdėtų bloką į save. Vienas atšaukimo žingsnis.

### MINSERT

{{cmd:MINSERT}} deda bloką eilėmis ir stulpeliais: bloko pavadinimas, įterpimo taškas, mastelis, sukimas, eilučių ir stulpelių skaičius bei atstumai tarp jų. Visas rinkinys pasisuka su sukimu. Kiekvienas elementas yra atskira nuoroda (ne daugiau kaip 10 000), todėl bet kurį galima vėliau perkelti ar ištrinti.

### BLOCKSPALETTE

Trumpieji pavadinimai: `BLOCKSPAL`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Blokų skydelis}}. Rodo {{ui:Blokai}} skydelį su žymekliu jo filtre. Kiekvienas blokas turi mažą paveikslėlį; naujausiai įdėti – pirmi. Du mygtukai prie filtro perjungia sąrašą ir paveikslėlių tinklelį. Spustelėkite paveikslėlį (arba {{ui:Įterpti}}), kad įdėtumėte bloką su {{cmd:INSERT}}, arba nuvilkite jį ant brėžinio, kad įdėtumėte ten, kur paleidžiate.

{{ui:Bibliotekos}} po sąrašu: {{ui:Pridėti brėžinį}} priima jūsų DWG ar DXF failą ir išvardija jo blokus su paveikslėliais bei visą brėžinį kaip vieną bloką. Įdėjus vieną, jo apibrėžimas (ir įdėti blokai bei jų sluoksniai) nukopijuojamas į šį brėžinį, kaip daro {{cmd:INSERT}} parinktis `File`; blokas, kuris jau čia yra su tuo pačiu apibrėžimu, naudojamas be klausimo, o tokio paties pavadinimo, bet kitokio, klausia {{ui:Palikti esamus}} arba {{ui:Pervardyti}}. Naršyklėje failas lieka, kol užsidaro puslapis. CadCraft Studio {{ui:Pridėti aplanką}} išvardija aplanko brėžinius, kiekvienas atidaromas paspaudus; failai ir aplankai prisimenami. Mažas x pašalina biblioteką iš sąrašo; failas nepaliečiamas. Bendroji {{ui:Biblioteka}} yra kas kita: žr. [Įterpti iš failo ar bibliotekos](topic:insert-from-file-and-library).

### BCONVERT

Arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Pasikartojančius objektus paversti blokais}}. Randa pasikartojančią geometriją ir paverčia kiekvieną kopiją nuoroda į vieną bloką.

- `Pasirinkite pasikartojančius objektus arba [Blokas (B)]`: vienos kopijos objektai. `B` vietoje to nurodo esamą bloką, kad rastų laisvas jo objektų kopijas.
- `Kopija gali būti: veidrodinė = Ne, keisto mastelio = Ne; sluoksnis, spalva, linijos tipas ir linijos storis = Atitinka … [Veidrodinė (M)/Keistas mastelis (S)/Ypatybės (P)]`: `M`, `S` ir `P` perjungia tai, kas laikoma kopija; {{key:Enter}} ieško. Nustatymai prisimenami.
- `Naujo bloko pavadinimas <Blokas1>`, tada `Nurodykite bloko bazinį tašką` ({{key:Enter}} paima apatinį kairįjį pasirinkimo kampą).
- Pranešama, kiek kitų objektų rinkinių yra ta pati geometrija, paryškinamas visa, ką jis pakeistų, ir klausiama `Taip/Ne`.

Kopija yra tie patys objektai, perkelti ir pasukti bet kokiu kampu (ir veidrodiniai arba keisto mastelio, kai tie įjungti); kiekvienas objektas turi turėti savo atitikmenį, iki milijonosios pasirinkimo dydžio. Kiekviena nuoroda gauna savo sukimą ir mastelį (veidrodinė – neigiamą Y mastelį), o sluoksnį, kurį objektai turėjo bendrą. Objektai užrakintuose sluoksniuose paliekami nepaliesti ir suskaičiuojami. Ieškoma atvirojoje erdvėje (modelyje ar atviram lape). Labai didelė paieška sustoja ties darbo riba ir apie tai praneša. Vienas atšaukimo žingsnis.

### BSEARCH

Arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Rasti blokus}}. `Ieškoti blokų pagal [Pavadinimas/Atributas/Geometrija] <Pavadinimas>`:

- `N`: dalis bloko pavadinimo arba šablonas su `*` ir `?`. Išvardija kiekvieną bloką su jo nuorodomis čia ir visame brėžinyje.
- `A`: atributo reikšmė arba `TAG=reikšmė`. Išvardija blokus, kurių nuorodos ją turi, su rastomis reikšmėmis. Pastovūs atributai skaičiuojami.
- `G`: pasirinkite objektus arba vieną bloko nuorodą, ir išvardijami blokai, kurių forma panaši bent 85 %, geriausi pirmi. Dydis, sukimas ir veidrodinis atspindys neskaičiuojami. Matas lygina atstumus tarp taškų, išbarstytų palei kontūrus, todėl randa panašumus; tikras kopijas rasti naudokite {{cmd:BCONVERT}}.

Atvirojoje erdvėje rastos nuorodos pasirenkamos, paruoštos kitai komandai.

### BREPLACE

Arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Pakeisti blokus}}. `Pakeisti [Pasirinktus/Visus]`: `S` pakeičia pasirinktas bloko nuorodas bloku, kurį nurodote; `A` klausia bloko ir jo pakaitalo ir pakeičia kiekvieną nuorodą, kaip daro {{cmd:BLOCKREPLACE}} (tas pats kodas). Nuoroda išlaiko savo vietą, mastelį, sukimą, sluoksnį ir abiejų blokų atributų reikšmes; reikšmes, kurių naujas blokas neturi kur dėti, atmeta ir įvardija. `?` išvardija blokus. Vienas atšaukimo žingsnis.

### DATAEXTRACTION

Trumpieji pavadinimai: `EATTEXT`, `DX`; arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Duomenų išgavimas}}. Išvardija blokus, jų atributus ir objektų savybes kaip lentelę arba CSV failą.

- Veikia su pasirinkimu arba klausia `Pasirinkite objektus (Enter: viskas šioje erdvėje)`.
- `List: [Blokai/Objektai/Visi]`, kai pasirinkime yra abu. Bevardžiai blokai, lentelės ir medžiagų sąrašai niekada neišvardijami.
- Išveda stulpelius, iš kurių galima rinktis (pavadinimas, tipas, sluoksnis, X, Y, sukimas, mastelis, ilgis, plotas, spalva, linijos tipas, erdvė ir po vieną kiekvienai atributo žymai), tada `Stulpeliai, pagal pavadinimą ar numerį, atskirti kableliais`. {{key:Enter}} pasirenka pažymėtus: blokams – pavadinimą ir kiekvieną atributą; objektams – tipą, sluoksnį ir ilgį.
- `Sudėti vienodas eilutes kartu su skaičiumi? [Taip/Ne] <Taip>`, tada `Įdėti sąrašą į: [Lentelę/Csv] <Lentelė>`. Lentelė yra įprasta lentelė ({{cmd:TABLEDIT}} ją redaguoja) ir nėra gyva: paleiskite komandą iš naujo, kai brėžinys pasikeičia.
- Atmeta stulpelį, kurio sąraše nėra. Lentelė talpina 1 999 duomenų eilutes; CSV failas talpina visas.

### COUNTTABLE

Suskaičiuoja pasirinkimo (arba atviros erdvės) blokų nuorodas ir įdeda skaičius į lentelę (`Blokas`, `Skaičius`) ar CSV failą. Skaičiavimui, kuris seka brėžinį savaime, žr. {{cmd:BOMTABLE}}.

## Lapai ir spausdinimas

### LAYOUT

Trumpieji pavadinimai: `LO`, `NEWLAYOUT`; arba {{ui:+}} mygtukas po brėžiniu. Naujas lapas su rėmeliu, titulo bloku ir vienu rodiniu, ISO A3 (arba Tabloid brėžiniams coliais ar pėdomis). Klausimų nėra.

### MVIEW

Trumpieji pavadinimai: `MV`. Tik lape ({{cmd:VPORTS}} lape daro tą patį).

- `Nurodykite rodinio kampą [Daugiakampis (P)/Objektas (O)]`, `Nurodykite priešingą kampą`. Rodinys rodo visą modelį standartiniu mastelyje.
- `P` (Daugiakampis): spustelėkite kontūro kampus (`Anuliuoti (U)`, `Uždaryti (C)`), {{key:Enter}}, kai baigta. Atmeta mažiau nei tris kampus.
- `O` (Objektas): `Pasirinkite uždarą objektą rodinio kontūrui`: uždara polilinija, apskritimas ar elipsė lape. Rodinys perima jo formą (kreivės kaip trumpos tiesios dalys); objektas lieka toks, koks buvo. Atmeta objektą, kuris nėra uždaras.

### VPCLIP

Iškerpa jau lape esantį rodinį. `Pasirinkite rodinį iškirpimui` (arba pirmiausia pasirinkite jį), tada `Pasirinkite objektą, prie kurio iškirpti [Daugiakampis/Naikinti]`:

- Spustelėkite uždarą polilinija, apskritimą ar elipsę, arba {{key:Enter}} (arba `P`), kad spustelėtumėte daugiakampio kampus.
- `D` (Naikinti, siūloma, kai rodinys iškirptas) vėl padaro jį stačiakampiu: dėžę aplink kontūrą, kokį jis turėjo.
- Tai, ką rodinys rodo popieriuje, nejuda, ir jo mastelis lieka. Modelis nubrėžiamas ir spausdinamas tik kontūro viduje, o kraštas seka jį. Vienas atšaukimo žingsnis.
- Iškirptas rodinys turi rankenėlę ant kiekvieno savo kontūro kampo, be centro ir keturių dėžės kampų (vilkiant dėžės kampą ištempiamas ir kontūras). Ypatybės rodo Kontūras: Stačiakampis arba Iškirptas su kampų skaičiumi.
- DWG ir DXF 2000 failai išlaiko kontūrą CadCraft. Kitos programos atidaro rodinį kaip stačiakampį aplink jį; DXF R12 išlaiko tik stačiakampį.
- Modelio skirtuke pranešama, kad rodiniai yra lapuose.

### VPORTS

Trumpieji pavadinimai: `VIEWPORTS`. {{cmd:SPLIT}} yra tas pats ir iš lapo, o {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Padalyti greta}}, {{ui:Padalyti sukrautai}}, {{ui:Keturios sritys}}, {{ui:Viena sritis}} tai paleidžia. Modelyje: `Įveskite sričių skaičių [Viena (SI)/2/3/4] <3>`; `2` klausia `[Horizontaliai/Vertikaliai] <Vertikaliai>` (Vertikaliai = greta), `3` klausia `[Kairė/Dešinė] <Dešinė>` (kur eina didelė sritis). Kiekviena sritis išlaiko savo vaizdą ir erdvę; spustelėjimas padaro sritį aktyvia. Lape tai yra {{cmd:MVIEW}}. Žr. [Padalyti ekraną](topic:split-screen).

### VPVIEW

Trumpųjų pavadinimų nėra. Tik lape.

- `Pasirinkite rodinį` (praleidžiama, jei jau pasirinktas vienas), tada modelyje: `Nurodykite rodomo lango pirmąjį kampą`, `Nurodykite priešingą kampą`.

### UCS

Trumpųjų pavadinimų nėra. Jūsų pačių koordinačių sistema; ne redagavimas. `Nurodykite UCS pradžią [Pavadintas/Objektas/Ankstesnis/Pasaulis/Z/3 taškai] <Pasaulis>`: taškas yra nauja pradžia, tada `Nurodykite tašką X ašyje (Enter palieka kampą)`. `Z`: `Nurodykite sukimo kampą apie Z ašį <90>`. `3`: pradžia, taškas teigiamoje X ašyje, taškas teigiamoje Y pusėje. `OB`: `Pasirinkite objektą UCS lygiavimui`. `NA`: `[Atstatyti/Įrašyti/Naikinti/?]` ir pavadinimas. Vaizdas pasisuka, kad nauja X ašis būtų horizontali. Žr. [Pasukite vaizdą ir naudokite savo koordinates](topic:ucs-and-turned-view).

### PLAN

Trumpųjų pavadinimų nėra. `Įveskite parinktį [Dabartinis UCS/Ucs/Pasaulis] <Dabartinis UCS>`: pasuka aktyvios srities vaizdą, kad UCS X ašis (arba pasaulio) būtų horizontali. Nieko brėžinyje nejuda.

### TURNLEFT, TURNRIGHT, TURNWORLD

Trumpųjų pavadinimų nėra; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Pasukti vaizdą 90° į kairę}}, {{ui:Pasukti vaizdą 90° į dešinę}}, {{ui:Grįžti į pasaulį}}. Tas pats, kas `UCS Z -90`, `UCS Z 90` ir `UCS W`, su vaizdu, kuris seka.

### VPLAYER

Trumpųjų pavadinimų nėra. Lape arba rodinio viduje. `Įveskite parinktį [?/Užšaldyti/Atšaldyti/Atstatyti/Vpvisdflt]`: `F`, `T`, `R` klausia sluoksnių pavadinimų (kableliai, `*` ir `?` pakaitos), tada `[Visi/Pasirinkti/Dabartinis] <Dabartinis>` rodinių; Atstatyti grąžina kiekvieną sluoksnį į jo numatytąją būseną „užšaldyta naujuose rodiniuose“; `V` nustato tą numatytąją (`[Užšaldyta/Atšaldyta]`), kurią naudoja {{cmd:MVIEW}}. `?` išvardija sluoksnius, užšaldytus dabartiniame rodinyje. Sluoksnių skydelio rodinių stulpelis daro tą patį vienam rodiniui. Žr. [Užšaldyti sluoksnį viename rodinyje](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Trumpieji pavadinimai: `MS`; arba dukart spustelėkite rodinio viduje. Tik lape. Dirbkite su modeliu per rodinį: pasirinktą, vienintelį lape arba `Spustelėkite rodinio viduje, kad dirbtumėte` jame. Judėjimas ir didinimas viduje keičia rodinio vaizdą (su ekrano užrakinimu rodinys išlieka, o lapas juda); naujas vaizdas įrašomas kaip vienas atšaukimo žingsnis. Žr. [Dirbti su modeliu per rodinį](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Trumpieji pavadinimai: `PS`; arba dukart spustelėkite už rodinio ribų, arba spustelėkite skirtuką po brėžiniu. Grįžti į lapą.

### PLOT

Trumpieji pavadinimai: `PRINT`, `PUBLISH`, `EXPORTPDF`; arba {{key:Mod+P}}. Atveria dialogą {{ui:Spausdinti į PDF}}. Žr. [Spausdinti į PDF](topic:plot-pdf).

### PLOTSTYLES

Trumpieji pavadinimai: `STYLESMANAGER`, `PSTABLES`; arba {{ui:Redaguoti lenteles…}} dialoge {{ui:Spausdinti į PDF}}. Atveria {{ui:Spausdinimo stiliaus lentelės}}: ką kiekviena spalva spausdinama (spalva, pilka, rašalas, linijos storis), išsaugoma kartu su brėžiniu. Žr. [Spausdinimo stiliaus lentelės](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} perkelia objektus tarp lapo ir modelio per rodinį, pakeisdamas mastelį ir pasukdamas, kad iš kitos pusės atrodytų taip pat. Lape pasirinkite objektus, ir jie eina į modelį (pasirinkite rodinį, kai lape yra daugiau nei vienas). Kai dirbate modelyje per rodinį ({{cmd:MSPACE}}), pasirinkti objektai ateina į lapą. Pranešama, kiek kartų jie tapo didesni ar mažesni. Rodiniai lieka savo lape. Vienas atšaukimo žingsnis.

### ISODRAFT

{{cmd:ISODRAFT}} įjungia arba išjungia izometrinį braižymą `ON` arba `OFF`, arba tiesiai pereina į plokštumą `Left` (Kairė), `Top` (Viršus) ar `Right` (Dešinė). Kol jis įjungtas: Ortogonalus ({{key:F8}}) laiko linijas palei dvi plokštumos ašis (kairė: 90° ir 150°; viršus: 30° ir 150°; dešinė: 30° ir 90°), poliarinis sekimas ({{key:F10}}) seka tas pačias ašis, prilipimas prie tinklelio ({{key:F9}}) naudoja izometrinį tinklelį, o tinklelis ({{key:F7}}) braižomas linijomis 30°, 90° ir 150°. {{cmd:ELLIPSE}} įgyja `Izoapskritimas`: duokite centrą ir spindulį (arba `Skersmuo`), ir ji nubrėžia elipsę, kurią apskritimas rodo dabartinėje plokštumoje. Brėžinys lieka plokščias: tai pagalbos braižant vaizdui, ne 3D modeliui. Nustatymas galioja šiai sesijai ir nėra išsaugomas faile.

### ISOPLANE

{{cmd:ISOPLANE}} pasirenka izometrinę plokštumą, kurioje braižoma: `Left` (Kairė), `Top` (Viršus) arba `Right` (Dešinė). Enter pereina į kitą plokštumą. Kol izometrinis braižymas įjungtas, {{key:F5}} daro tą patį komandos viduryje; kol išjungtas, {{key:F5}} paliekamas naršyklei.

## Užklausos

### CAL

Išveda skaičiavimo reikšmę taip, kaip ji būtų skaitoma visur, kur įvedamas ilgis.

- `Išraiška`: įveskite, pavyzdžiui, `12'6"+3/4"` arba `(24'-0")/3`, ir paspauskite {{key:Enter}}. CadCraft išveda `= 12'-6 3/4"   (150.75 brėžinio vienetai)`. Žr. [Aritmetika įvestoje reikšmėje](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Trumpieji pavadinimai: `DI`; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Matuoti atstumą}}.

- `Nurodykite pirmąjį tašką`, `Nurodykite antrąjį tašką`. Išveda atstumą, kampą, Delta X ir Delta Y.

### AREA

Trumpieji pavadinimai: `AA`; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Plotas}}. Išveda plotą ir perimetrą.

- `Nurodykite pirmąjį kampo tašką [Objektas/Pridėti plotą/Atimti plotą] <Objektas>`
  - Spustelėkite arba įveskite kampus; prie `Nurodykite kitą tašką (Enter uždaro) [Anuliuoti (U)]` paspauskite {{key:Enter}}, kad uždarytumėte kontūrą. `U` atima paskutinį kampą.
  - {{key:Enter}} arba `O`, tada `Pasirinkite objektą`: apskritimas (išveda jo apskritimo ilgį), elipsė, polilinija (atvira uždaroma tiesia linija plotui, o jos ilgis išvedamas) arba brūkšniuotė (skylės atimamos).
  - `A` (Pridėti plotą) ir `S` (Atimti plotą) saugo bėgančią sumą: raginimas prasideda `(PRIDĖJIMO režimas)` arba `(ATIMIMO režimas)`, kiekvienas plotas pridedamas arba atimamas, o po kiekvieno išvedama `Bendras plotas = …`. Šiuose režimuose `O` renka objektus iki {{key:Enter}}, o {{key:Enter}} prie pirmojo raginimo baigia komandą.

### MEASUREGEOM

Trumpieji pavadinimai: `MEA`. `Įveskite parinktį [Atstumas/Spindulys/Kampas/Plotas] <Atstumas>`; po kiekvieno matavimo klausia dar kartą, o numatytasis yra `Baigti (X)`.

`Greitasis` matuoja aplink žymeklį, kai jį judinate: atstumą iki artimiausio objekto dešinėje, aukščiau, kairėje ir žemiau (išilgai dabartinio UCS ašių), nubrėžiamą judant, ir kampą, kur du tokie kaimynai yra tiesūs ir susitinka. Spustelėjimas įrašo keturis atstumus, aiškų plotį ir aukštį bei kampus į istoriją; Enter grįžta prie parinkčių. Jis skaito, kas matoma ekrane.

- `D`: du taškai, kaip {{cmd:DIST}}.
- `R`: `Pasirinkite lanką ar apskritimą`; išveda spindulį ir skersmenį.
- `A`: lankas (jo apimtas kampas), linija, tada antra linija (kampas tarp jų, link jų tolimų galų), arba {{key:Enter}} ir trys taškai (viršūnė, tada abu galai).
- `AR`: kaip {{cmd:AREA}}, vienas plotas.

### ID

Trumpųjų pavadinimų nėra. `Nurodykite tašką`; išveda jo X ir Y.

### LIST

Trumpieji pavadinimai: `LI`, `LS`. `Pasirinkite objektus`; išveda kiekvieno objekto tipą, sluoksnį ir pagrindinius matmenis.

### MASSPROP

{{cmd:MASSPROP}} pateikia pasirinktų regionų ir uždarų objektų skerspjūvio savybes, paimtas kartu: plotas, perimetras, apribojantis stačiakampis, centroidas, inercijos momentai apie X ir Y ašis per pradžią, inercijos sandauga, inercijos spinduliai, tie patys momentai apie centroidą, ir pagrindiniai momentai bei jų ašių kryptys. Skylės regione skaičiuojamos kaip skylės. Skaičiai yra brėžinio vienetais ir tikslūs kontūrams iš linijų ir lankų; elipsės ir spline matuojami kaip trumpos tiesios atkarpos, ir apie tai pranešama. Po ataskaitos klausiama, ar ją įrašyti į tekstinį failą. Neuždari objektai paliekami nuošalyje, ir pranešama, kiek jų.

## Rodinys, failas ir kita

### ZOOM

Trumpieji pavadinimai: `Z`.

- `Nurodykite lango kampą, įveskite mastelio koeficientą (nX) [Visas brėžinys (E)/Visi (A)/Langas (W)/Ankstesnis (P)/Mastelis (S)/Centras (C)]`. Spustelėkite du kampus lango. `E`, `A` arba Enter: visas brėžinys.
- `P` (Ankstesnis, arba {{ui:Ankstesnis}} įrankių juostoje) grįžta į ankstesnį vaizdą, iki 10 vaizdų skirtuke; vienas ratuko žingsnių eilutė ar vienas poslinkis skaičiuojamas kaip vienas vaizdas.
- Skaičius, pavyzdžiui `2`, `2x` arba `0.5x` (arba `S` ir tada skaičius), priartina arba atitolina tuo koeficientu ekrano vidurio atžvilgiu.
- `C` klausia `Nurodykite centro tašką` ir `Įveskite aukštį ar padidinimą (nX)`.

### PDFATTACH, PDFIMPORT ir PDF komandos

Trumpieji pavadinimai: `PDFATT` {{cmd:PDFATTACH}}, `PDFIM` {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} deda PDF puslapį po brėžiniu (failas, puslapis, įterpimo taškas, mastelis, sukimas); {{cmd:PDFIMPORT}} paverčia puslapio linijas, kreives, užpildus ir tekstą brėžinio objektais ant sluoksnių, pavadintų pagal PDF, tikru dydžiu, įvestu mastelių arba mastelio pagal du taškus ir tikrą atstumą. {{cmd:PDFCLIP}} iškerpa pagrindą, {{cmd:PDFADJUST}} nustato išblukimą, kontrastą, vienspalvį ar išjungia, {{cmd:PDFLAYERS}} perjungia paties PDF sluoksnius, o {{cmd:PDF}} vėl suteikia CadCraft failus, kuriuos naudoja brėžinio pagrindai. Žr. [PDF pagrindai](topic:pdf-underlay).

### AUTOCOMPLETE

Trumpieji pavadinimai: `AUTOC`. Brėžinio automatinis pildymas: kai nevykdoma jokia komanda, pilka šmėkla rodo, ką brėžinio šablonai sako, kas ateina toliau. {{cmd:AUTOCOMPLETE}} įjungia `On` arba išjungia `Off` (taip pat Parametrai › CadCraft) arba `Show` parodo, ką jis siūlytų dabar. **Tab** nubrėžia šmėklą kaip vieną atšaukimo žingsnį, **Esc** ją atmeta, kol brėžinys nepakinta. Ji randa tris dalykus naujausiuose objektuose: kitą kopiją to, kas nubrėžta du ar daugiau kartų lygiu žingsniu (stovai, stulpai, laiptų aukštis ir pakopa), kitus polilinijos laiptų žingsnius ir trūkstamą kambario ar sienų grandinės pusę. {{cmd:LINE}} ar {{cmd:PLINE}} viduryje šmėkla yra **kitas taškas**: kitas laiptų žingsnis (aukštis, pakopa, aukštis…), keturis stačiakampio kampas, taškas, kuris jį uždaro, arba dar vienas lygus žingsnis. Priartinkite žymeklį ir paspauskite **Tab**, tarsi būtumėte spustelėję ten; tęskite arba paspauskite Enter. Skaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### AUTOSHEET

Trumpieji pavadinimai: `ASH`. Lapai, kurie išsidėsto patys. {{cmd:AUTOSHEET}} paima brėžinio dalis (jūsų pavadintus rodinius, arba atskiras modelio dalis, arba visą modelį), parenka popieriaus dydį (arba jūsų duotą), kiekvienai daliai suteikia standartinį mastelį (vienas visoms arba didžiausias, kurį kiekviena gali priimti) ir išdėsto rodinius eilėmis naujuose lapuose su titulo bloku ir antraše (pavadinimas ir mastelis) po kiekvienu. Kas netelpa viename lape, gauna savo lapą. Vienas atšaukimo žingsnis. Skaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### PHOTOSKETCH

Trumpieji pavadinimai: `PSK`. Eskizo nuotrauka į brėžinį. Pasirinkite nuotrauką (JPEG, PNG ar TIFF) ranka nupiešto eskizo ant popieriaus lapo. {{cmd:PHOTOSKETCH}} randa lapo keturis kampus, ištiesina perspektyvą, paima popieriaus dydį, kurį nurodote (`Paper` arba artimiausią standartinį) ir eskizo `Scale` (1 : n), tada perbraižo rašiklio linijas į linijas, lankus ir apskritimus, kiekvienai rašiklio spalvai po sluoksnį (juoda, raudona, mėlyna, žalia). Jei nerandamas popieriaus kraštas, laikoma, kad lapas yra visa nuotrauka, ir apie tai pranešama. Užrašai paliekami. Vienas atšaukimo žingsnis. Atliekama šiame kompiuteryje klasikiniu paveikslėlių apdorojimu, be modelio, niekas niekur neišsiunčiama. Taip pat žr. nuskenuoto brėžinio komandas.

### AUTODIM

Trumpieji pavadinimai: `ADIM`. Automatinis matavimas pagal taisykles. {{cmd:AUTODIM}} išmatuoja pasirinktus objektus (arba visą brėžinį) pagal jų lygius ir statmenus kraštus: matmenų grandinę palei pasirinktas puses (`Sides`), vieną bendrą matmenį už jos, kiekvienos angos plotį (tarpas tarp sienų linijų), skylių skersmenį kiekvienam skylės dydžiui ir su `Grid` – tinklelio linijų tarpą. Matmuo, kuris jau yra, nekuriamas dar kartą. Vienas atšaukimo žingsnis. Skaičiuojama šiame kompiuteryje pagal taisykles, be modelio.

### GRIDMOVE

Trumpieji pavadinimai: `GM`. Perkeliant tinklelio liniją, rinkinys seka. {{cmd:GRIDMOVE}} perkelia tinklelio liniją (liniją sluoksnyje, kurio pavadinime yra grid arba axis) ir tai, kas ant jos kabo: sienos, kurių galas yra ant linijos, ištempiamos jai sekant, sienos išilgai jos juda visos, stulpai (bloko nuorodos ir apskritimai ant linijos), jos burbulas ir žyma juda, o matmenys, kurių taškai yra ant jos, matuoja naują tarpą. Duokite du taškus (skaičiuojama tik dalis skersai linijos) arba `Distance`. Vienas atšaukimo žingsnis atstato viską. Atliekama pagal taisykles šiame kompiuteryje.

### DETAILS

Trumpieji pavadinimai: `DET`. Detalės, kurios randa jus. {{cmd:DETAILS}} saugo jūsų firmos pačių detales: `Add` įdeda šio brėžinio bloką į sąrašą, `List` ir `Remove` jį tvarko, `Find` surikiuoja jas pagal tai, kas pasirinkta (arba ką paskutinį nubrėžėte), pagal žodžius sluoksniuose, blokų pavadinimuose, brūkšniuotės raštuose ir pastabose, palyginus su kiekvienos detalės pavadinimu ir pastabomis, todėl langų viršus randa jūsų palangės apdailą. Pasirinkite numerį ir tašką, kad ją padėtumėte. Su įjungtu `Hint` (taip pat Parametrai › CadCraft), pasirinkus ką nors, su kuo sutampa detalė, būsenos juostoje atsiranda viena eilutė. Sąrašas saugomas šioje naršyklėje, šiame kompiuteryje, ir ieškoma būtent jame. `Share` įdeda jį ir į jūsų Dokumentų aplanką (`.cadcraft/firm-details.json`, su kiekvieno bloko brėžiniu): `Pull` prideda tai, ką turi jūsų komanda, o jūs neturite, `Push` prideda tai, ką turite jūs, o jie neturi, `Both` daro abu, ir niekas niekada nepašalinama iš abiejų pusių. Pirmiausia atverkite Dokumentų aplanką ({{cmd:DOCUMENTS}}); kai tas aplankas yra Team Cloud Plan aplankas, visa komanda dalijasi vienu sąrašu. Bibliotekos skydelio detalės elementas turi mygtuką **Pridėti prie mano firmos detalių**, kuris įdeda ją į tą patį sąrašą. Atliekama pagal žodžius šiame kompiuteryje, be modelio.

### SKETCHFIX

Trumpieji pavadinimai: `SKF`. Rašiklio eskizai tampa tiksliais. Vieną laisvą brūkšnį vienu metu paspauskite ir vilkite (rašikliu, pele ar pirštu), tada Enter. Kiekvienas brūkšnys skaitomas kaip linija, apskritimas, lankas, stačiakampis ar polilinija: beveik lygios ir statmenos linijos tampa tiksliai lygios ir statmenos, uždaras apvalus brūkšnys – apskritimu, uždaras brūkšnys su keturiais statiais kampais – stačiakampiu, o brūkšnių galai sutraukiami kartu ir prie galų, kurie jau yra brėžinyje. Vienas atšaukimo žingsnis. Atliekama pagal taisykles šiame kompiuteryje, be modelio.

### SCANATTACH ir nuskenuoto brėžinio komandos

Trumpieji pavadinimai: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} trumpojo pavadinimo neturi. Jos veikia su paveikslėliu, kiekviena – vienas atšaukimo žingsnis. {{cmd:SCANATTACH}} įdeda PNG, JPEG, TIFF (vieną puslapį arba visus) arba PDF puslapį, kuris yra paveikslėlis. {{cmd:SCANSCALE}} nustato lapo mastelį pagal du pasirinktus taškus ir tikrą atstumą. {{cmd:SCANALIGN}} perkelia ir pasuka jį į du taškus (`Scale the sheet to fit` Taip/Ne). {{cmd:SCANDESKEW}} parodo ilgų lapo linijų kampą ir pasuka lapą, kai `Accept` (Priimti) arba įvedate `Value` (Reikšmė). {{cmd:SCANCLEAN}} padaro jį juodai baltą (`Threshold` Auto/Adaptive/Level, `Specks`) ir `Run` (Vykdyti). {{cmd:SCANCROP}} palieka langą. {{cmd:SCANERASE}} ištrina `Rectangle` (Stačiakampis), `Polygon` (Daugiakampis) ar `Lasso` (Lasas). {{cmd:SCANTRACE}} nubrėžia linijas ir lankus į naują sluoksnį (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ir praneša, ką rado ir ką paliko kaip rastrą. {{cmd:SCANINFO}} išvardija originalų failą ir žingsnius. {{cmd:RASTERSNAP}} įjungia arba išjungia prilipimą prie nuskenuotų lapų linijų (On arba Off). Žr. temą Nuskenuoti brėžiniai ir pėdsakas.

### REGEN ir REGENALL

Trumpieji pavadinimai: `RE` {{cmd:REGEN}}, `REA` {{cmd:REGENALL}}. Perkuria ekrane tai, kas nupiešta iš brėžinio: {{cmd:REGEN}} – skirtuką, kurį žiūrite (lape – ir modelį, kurį rodo jo rodiniai), {{cmd:REGENALL}} – kiekvieną skirtuką, kiekvieną padalyto ekrano sritį ir kiekvieną atvirą brėžinį. Naudokite, kai vaizdas atrodo pasenęs po scenarijaus ar labai didelio pakeitimo, arba kai asistentas redagavo brėžinį; pats brėžinys nesikeičia, todėl nėra ko atšaukti.

### NAMEDVIEW

Trumpieji pavadinimai: `NV`, `VIEWS`. `Įveskite parinktį [?/Atkurti/Įrašyti/Langas/Ištrinti] <Atkurti>`, tada vaizdo pavadinimas. `S` įrašo ekrane esantį vaizdą, `W` – langą, kurį pasirenkate, `R` parodo įrašytą vaizdą, `D` ištrina vieną, `?` išvardija šio skirtuko vaizdus. Įrašymas pagal esamą pavadinimą jį pakeičia; kiekvienas pakeitimas yra vienas atšaukimo žingsnis. Vaizdai priklauso skirtukui, kuriame jie buvo įrašyti. DWG ir DXF failai juos išlaiko (VIEW lentelė); lapo vaizdai grįžta į pirmąjį lapą, nes failas nenurodo, kuris.

### UNDO ir REDO

Trumpieji pavadinimai: `U` {{cmd:UNDO}}; {{cmd:REDO}} trumpojo pavadinimo neturi. Taip pat {{key:Mod+Z}} ir {{key:Mod+Y}}.

### LAYER

Trumpieji pavadinimai: `LA`. Pereina į skydelį {{ui:Sluoksniai}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Įveskite linijos tipą naujiems objektams` — `ByLayer` (pagal sluoksnį), `ByBlock` (pagal bloką) arba pavadinimas (`?` išvardija juos: Continuous, brėžinio savieji ir DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE su jų `2` (pusė) ir `X2` (dvigubas) dydžiais). {{cmd:LWEIGHT}} (`LW`): naujų objektų linijos storis mm arba `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): brėžinio linijos tipo mastelis (atšaukiamas). {{cmd:LWDISPLAY}} (`LWT`): `Rodyti linijų storius [ON/OFF]` — tas pats kaip {{ui:LWT}} mygtukas būsenos juostoje. Žr. [Linijų storiai ir linijų tipai](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Įveskite pervadinamo objekto tipą [LAyer (sluoksnis)/Block (blokas)]`, `Įveskite senąjį pavadinimą`, tada naują pavadinimą; objektai ar nuorodos seka. {{cmd:LAYMRG}}: `Pasirinkite objektą sujungiamame sluoksnyje arba [Pavadinimas]` kol {{key:Enter}}, tada `Pasirinkite objektą tiksliniame sluoksnyje arba [Pavadinimas]` ir `Y`. {{cmd:LAYDEL}}: `Pasirinkite objektą trinamame sluoksnyje arba [Pavadinimas]`, tada `Y`: sluoksnis ir visi jame esantys objektai išnyksta (ne sluoksnis 0, DEFPOINTS ar dabartinis sluoksnis). Kiekviena yra vienas atšaukimo žingsnis. Žr. [Brėžinio tvarkymas su sluoksniais](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Sluoksniai pasirenkant objektus; taip pat {{ui:Sluoksniai}} skydelio meniu {{ui:Įrankiai}}. {{cmd:LAYISO}}: `Pasirinkite objektus izoliuojamame(-uose) sluoksnyje(-iuose)`, tada {{key:Enter}}: kiekvienas kitas sluoksnis išjungiamas. {{cmd:LAYUNISO}} juos vėl įjungia. {{cmd:LAYOFF}} ir {{cmd:LAYFRZ}}: `Pasirinkite objektą sluoksnyje, kurį išjungti` (arba užšaldyti), vis iš naujo; `U` atima paskutinį, {{key:Enter}} baigia. {{cmd:LAYMCUR}}: `Pasirinkite objektą, kurio sluoksnis taps dabartiniu`. {{cmd:LAYON}} įjungia visus sluoksnius, {{cmd:LAYTHW}} atšaldo visus. Kiekviena komanda yra vienas atšaukimo žingsnis. Žr. [Brėžinio tvarkymas su sluoksniais](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} pradeda tuščią brėžinį, o {{cmd:OPEN}} atveria DWG ar DXF, kiekvienas savo skirtuke virš brėžinio (nepaliestas naujas brėžinys naudojamas vietoj naujo skirtuko). Uždarant skirtuką su neįrašytais pakeitimais, klausiama pirmiausia. Žr. [Padalyti ekraną](topic:split-screen).

{{cmd:SAVE}} (trumpasis pavadinimas `QSAVE`, taip pat {{key:Mod+S}}) atsisiunčia kopiją brėžinio formatu: DWG, jei atidarytas iš DWG, DXF, jei iš DXF. Naujas brėžinys naudoja formatą, paskutinį pasirinktą Įrašyti kaip šioje naršyklėje, kitaip DWG.

{{cmd:SAVEAS}} (taip pat {{key:Mod+Shift+S}}) atveria dialogą {{ui:Įrašyti kopiją kaip}}: pasirinkite {{ui:DWG}} (ir jo {{ui:Versija}}), {{ui:DXF R12}} arba {{ui:DXF 2000}}, tada {{ui:Įrašyti}}. Pasirinkimas galioja šiam brėžiniui ir naujiems brėžiniams šioje naršyklėje.

{{cmd:DXFOUT}} visada atsisiunčia DXF R12 kopiją, nekeisdama formato, kurį naudoja {{cmd:SAVE}}.

Žr. [Failai: ką atidaro, ką įrašo](topic:files#saving).

### TOUR

Trumpieji pavadinimai: `TUTORIAL`. Pakartoja šešių žingsnių pirmo brėžinio ekskursiją. Žr. [Pradžia](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Trumpieji pavadinimai: `TBDOCK`. `Įrankių juostos padėtis [Viršuje/Apačioje/Kairėje/Dešinėje]`. Žr. [Nustatymai](topic:settings#toolbar-position).

### COMMANDLINE

Trumpieji pavadinimai: `CMDLINE`. `Komandų eilutė [Prijungta apačioje/Plaukianti/Viena eilutė/Rodomos istorijos eilutės/Komandų istorija (F2)]`: prijungia arba atplėš komandų eilutę, padaro ją viena eilute, klausia, kiek istorijos eilučių rodyti (0–12), arba atveria istoriją. Žr. [Nustatymai](topic:settings#command-line).

### TOPAREA

`Viršutinė sritis [Standartinė/Kompaktiška]`: juostos virš brėžinio, kaip buvo, arba kompaktiškos. Žr. [Nustatymai](topic:settings#top-area).

### POLARANG

`Įveskite poliarinio kampo žingsnį laipsniais <90>`: žingsnis, prie kurio lygiuojasi {{ui:Poliarinis}} sekimo linijos (daugiau nei 0, iki 180). Išsaugoma šioje naršyklėje.

### UNITS

Trumpieji pavadinimai: `UN`. Kaip rašomi ir įvedami ilgiai.

- `Įveskite ilgio formatą [Mokslinis/Dešimtainis/Inžinerinis/Architektūrinis/Trupmeninis] <dabartinis>`
- Architektūrinis ir Trupmeninis: `Įveskite mažiausios rodomos trupmenos vardiklį (1, 2, 4, 8, 16, 32, 64, 128 arba 256)`. Kitiems: `Įveskite dešimtainių skaitmenų skaičių (0–8)`.

Nauji matmenys seka tai. Vienas atšaukimo žingsnis. Tas pats, kas {{ui:Ilgio formatas}} ir {{ui:Tikslumas}} skiltyje {{ui:Dabartiniai nustatymai}}; žr. [Pėdos ir coliai](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Trumpieji pavadinimai: `GDS`. Peržiūrėti IC išdėstymą (GDSII srauto failą): laboratorinis bandymas, tik peržiūrai ir matavimui.

- Failų rinkiklis priima `.gds` failą; su keliais viršutiniais elementais – `Įveskite viršutinį elementą piešimui`.
- Kiekvienas sluoksnis ir duomenų tipas tampa brėžinio sluoksniu (`GDS 1`, `GDS 2/5`), nuorodos ir masyvai įdedami plokščiai, failo vartotojo vienetais (paprastai mikrometrais). Vienas atšaukimo žingsnis. Nieko neimituojama ir netikrinama, o failas atgal neįrašomas.

### DIAGRAM

Trumpieji pavadinimai: `TEXTDIAGRAM`, `T2D`. Diagrama iš teksto.

- Langelis priima tekstą (arba vieną eilutę su `;` tarp sakinių komandų eilutėje): Mermaid schemą, PlantUML komponentų diagramą, D2 ar nuo–iki sąrašą.
- `Nurodykite diagramos viršutinį kairįjį kampą`, tada `Nurodykite teksto aukštį`.

Blokai ir jungtys yra įprasti objektai sluoksnyje `Diagram`, pasirenkami, kai baigiasi. Vienas atšaukimo žingsnis. Žr. [Nubraižykite diagramą iš teksto](topic:text-to-diagram).

### OLELIST

Trumpieji pavadinimai: `OLES`. OLE objektai, kuriuos DWG turi ir CadCraft pats negali įdėti.

- Išvardija kiekvieną: numerį, tipą, dydį, ar išsaugojo paveikslėlį.
- `Įveskite parinktį [Įdėti/Baigti (X)] <Baigti>`: Įdėti klausia numerio, apatinio kairiojo kampo ir pločio, ir nubrėžia rėmelį su paveikslėliu. Vienas atšaukimo žingsnis; išsaugotas objektas nekeičiamas. Žr. [Paveikslėliai](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Trumpieji pavadinimai: `SHX`. Jūsų SHX šriftai.

- `Įveskite SHX šrifto parinktį [Aplankas/Failai/Sąrašas/Pašalinti/Atvirkščiai/Išvalyti] <Sąrašas>`

{{ui:Aplankas}} nuskaito kiekvieną `.shx` aplanke (CadCraft Studio; iš naujo kiekvieno paleidimo metu), {{ui:Failai}} priima pasirinktus failus (naršyklė), {{ui:Atvirkščiai}} išdėsto vieno šrifto raides atvirkščiai. Teksto stiliai, kurie nurodo įkeltą šriftą, piešiami juo. Žr. [Piešti tekstą savo SHX šriftais](topic:shx-fonts).

### LIMITS

Kokio dydžio brėžinys turėtų būti.

- `Nurodykite apatinį kairįjį kampą arba [ON/OFF] <dabartinis>`: taškas, `ON` arba `OFF`.
- `Nurodykite viršutinį dešinįjį kampą <dabartinis>`.

Tinklelis užpildo ribas, {{cmd:ZOOM}} Visi jas parodo, o su įjungtomis ribomis ON taškas už jų atmetamas (`**Outside limits`). Vienas atšaukimo žingsnis; išsaugoma DWG ir DXF. Žr. [Nustatyti brėžinio ribas](topic:drawing-limits).

### AUNITS

Trumpieji pavadinimai: `ANGUNITS`. Kaip rodomi ir įvedami kampai.

- `Įveskite kampo formatą [Dešimtainiai laipsniai/Laipsniai-minutės-sekundės/Geodeziniai azimutai] <dabartinis>`
- `Įveskite dešimtainių skaitmenų skaičių (0–8)`, arba kitiems dviems `Įveskite tikslumą` (0 laipsnių, 2 minutės, 4 sekundės, 5–8 sekundės dešimtainiai).

Vienas atšaukimo žingsnis; išsaugoma DWG ir DXF. Tas pats, kas {{ui:Kampo formatas}} skiltyje {{ui:Dabartiniai nustatymai}}. Žr. [Įvesti ir rodyti azimutus ir kampus](topic:bearings-and-angles).

### APPLOAD

Trumpieji pavadinimai: `AP`; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Įkelti programą…}}. Dialogas {{ui:Įkelti programas}}: įkelkite `.lsp` rutinas ir `.dcl` dialogų failus, iškraukite juos, įkelkite iš naujo iš istorijos, ir paleidimo rinkinys. Rutinos `(defun c:NAME …)` komandos tada veikia kaip bet kuri kita. Žr. [Įkelti programas](topic:load-applications) ir [Paleisti LISP rutinas](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:Redaguoti slapyvardžius…}}) atveria jūsų slapyvardžių failą (`ALIAS, *COMMAND` eilutės); {{ui:Įrašyti}} jį pritaiko. {{cmd:REINIT}} pritaiko jį iš naujo. Žr. [Redaguoti komandų slapyvardžius](topic:command-aliases).

### OPTIONKEYS

Trumpieji pavadinimai: `OPTKEYS`; arba {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Parinkčių raidės}} › {{ui:Redaguoti…}}. Atveria jūsų parinkčių raidžių failą (`COMMAND.OPTION, LETTERS` eilutės, pavyzdžiui `ARRAY.PO, P`); {{ui:Įrašyti}} jį pritaiko, o {{cmd:REINIT}} pritaiko iš naujo. Žr. [Suteikite komandos parinktims savo raides](topic:option-letters).

### LISPEDIT

Trumpieji pavadinimai: `VLIDE`; arba {{ui:Rodinys}} › {{ui:Daugiau}} › {{ui:LISP redaktorius}}. Atveria LISP redaktorių – langą, kuris lieka atviras šalia brėžinio.

- Tekstas: eilučių numeriai, parą prie žymeklio esančio skliausto pažymėta (raudona, kai jos nėra), {{key:Enter}} įtraukia naują eilutę po atidarytu skliaustu, {{key:Tab}} įveda du tarpus, {{key:Esc}} palieka tekstą.
- {{ui:Įkelti į brėžinį}} ({{key:Ctrl+Shift+Enter}}): nuskaito kiekvieną formą, kaip {{cmd:APPLOAD}} daro su failu, ir sukuria jo `c:` komandas. Failas rodomas {{cmd:APPLOAD}} sąraše.
- {{ui:Vykdyti pasirinkimą}} ({{key:Ctrl+Enter}}): įvertina pasirinktas formas arba formą, kurioje yra žymeklis.
- {{ui:Stop}}: baigia veikiančią rutiną.
- {{ui:Konsolė}}: ką rutina išvedė ir kiekviena klaida su eilute; spustelėkite klaidą, kad nueitumėte ten. Tekstas vykdomas po vieną aukščiausio lygio formą, todėl eilutė yra formos, arba jos viduje – eilutė, kuri kviečia funkciją, nurodytą klaidoje.
- {{ui:Naujas}}, {{ui:Atverti}}, {{ui:Įrašyti}} ({{key:Ctrl+S}}): `.lsp` failas. Tekstas taip pat saugomas šioje naršyklėje, todėl langą uždarius tekstas nepraranda.
- Šalia teksto: funkcijos, kurias rutina apibrėžia, tos, kurias ji kviečia ir kurių šis LISP dar neturi, tos, kurias ji kviečia ir kurios nei apibrėžtos joje, nei įmontuotos, ir pilni sąrašai to, kas įmontuota ir kas ne.

Tekstas su niekada neuždarytu skliaustu arba stringu, kuris niekada nesibaigia, nevykdomas: nurodoma eilutė. Nėra žingsnis po žingsnio derintuvo, sustojimo taškų ar stebėjimo lango. Žr. [Paleisti LISP rutinas](topic:run-lisp).

### HELP

Trumpieji pavadinimai: `?`. Išveda kiekvieną komandą, jos trumpuosius pavadinimus ir vienos eilutės aprašymą komandų eilutės istorijoje. Neatveria šio žinyno: tam paspauskite {{key:F1}} arba spustelėkite {{ui:Žinynas}}.

## Pasirinkti objektus raginimas

Prie bet kurio `Pasirinkite objektus` raginimo: spustelėkite objektus, nubrėžkite langus (iš kairės į dešinę) ir kryžminius langus (iš dešinės į kairę) dviem spustelėjimais arba paspauskite ir vilkite lasą ({{key:Space}} vilkimo metu: langas, kryžminis, tvora), {{key:Shift}}+spustelėjimas pašalina, o {{key:Enter}} baigia. Taip pat galite įvesti `ALL` (visi), `L` (paskutinis objektas), `P` (Ankstesnis: ką naudojo paskutinė komanda), `F` (Tvora: objektai, kuriuos kerta linija iš taškų; `U` atima tašką), `W` (Langas), `C` (Kryžminis), `R` (Šalinimo režimas: spustelėjimai išima objektus; raginimas rodo `Remove objects`) ir `A` (Pridėti vėl). `?` išvardija juos. Jie neišvedami raginime. {{key:Tab}} ant persidengiančių objektų paryškina kitą; spustelėkite, kad jį pasirinktumėte. Žr. [Pasirinkti objektus](topic:select-objects).

### ACCESS

Trumpieji pavadinimai: `AX`. Braižymas be regėjimo. {{cmd:ACCESS}} įjungia arba išjungia prieigą (`On`, `Off`) ir perjungia prilipimo garsus (`Sound`) bei balso komandas (`Voice`); pirmiausia nurodo būseną. Kai prieiga įjungta, kiekviena komanda ir rezultatas skaitomi per ekrano skaitytuvą, o brėžinio srityje yra klaviatūros žymeklis. Žinyno tema „Braižymas be regėjimo“ turi klavišus.

### DESCRIBE

Trumpieji pavadinimai: `DESC`. Pasakyti, ką brėžinys turi: kiek objektų, kokių, kokio dydžio, kiek sluoksnių, kas pasirinkta. Tik skaito; nieko nekeičia.

### WHEREAMI

Trumpieji pavadinimai: `WHERE`. Pasakyti, kur yra žymeklis, brėžinio vienetais.

### NEARBY

Pasakyti, kas yra arti žymeklio, arčiausias pirmas, kiekvienas su savo atstumu ir puse, kurioje jis yra.

### SAYSEL

Pasakyti, kas pasirinkta, po vieną sakinį kiekvienam objektui (linijos ilgis, galai ir kampas; apskritimo spindulys ir centras; tekstas taip, kaip parašytas).

### VOICE

Įjungti arba išjungti balsu įvedamas komandas. Jos atpažįstamos šiame kompiuteryje; kur naršyklė to negali, balsas lieka išjungtas, nebent Parametruose pasirinksite naršyklės internetinę paslaugą.

### TOUCHCROSSHAIR

Trumpieji pavadinimai: `TCX`. Poslinkio kryžiukas braižymui pirštu, kad pirštas nedengtų pasirinkimo taško. Kol jis įjungtas, vienas pirštas ant brėžinio nieko nepasirenka: jis perkelia kryžiuką, kuris yra virš piršto ir šone. Objektų prilipimai ir sekimas seka kryžiuką. Pakėlus pirštą nieko nepasirenkama ir kryžiukas lieka vietoje. Norėdami pasirinkti, paspauskite {{ui:Spustelėti}} mygtuką brėžinio kampe arba bakstelėkite bet kur brėžinyje antru pirštu. Laikykite {{ui:Spustelėti}}, judindami kitą pirštą, kad vilktumėte (pasirinkimo langą, lasą, rankenėlę). Pirštas, paspaustas ir laikomas vietoje, arba {{ui:Enter}} mygtukas yra Enter. Du pirštai slenka ir didina kaip anksčiau. Arti apatinio krašto ir tolimo šoninio krašto kryžiukas artėja prie piršto, todėl pasiekiama kiekviena brėžinio dalis. Rašiklis ir pelė visada pasirenka tiesiogiai.

{{cmd:TOUCHCROSSHAIR}} nurodo būseną ir klausia `ON`, `OFF`, `Auto` (įjungta tik ten, kur pirštas yra vienintelis rodyklė, todėl kompiuteryje su pele ji išjungta), `Distance` (kiek toli kryžiukas yra nuo piršto, nuo 24 iki 240 taškų) arba `Side` (`Left`: aukštyn ir į kairę, dešinei rankai; `Right` kairiajai; mygtukai perkeliami į kitą kampą). Tie patys pasirinkimai yra Parametrai › CadCraft, o įrenginyje su jutikliniu ekranu būsenos juostoje yra jungiklis {{ui:Poslinkio kryžiukas}}. Pasirinkimai išsaugomi šioje naršyklėje.

### WHOHAS

Pasako, kas turi atvirą brėžinį. CadCraft Studio kompiuteryje atidarius DWG ar DXF, šalia jo įrašomas mažas užrakto failas (`Plan.dwg.cclock`: kas, nuo kada, kuri versija), kas minutę atnaujinamas, kol brėžinys atviras, ir pašalinamas uždarius brėžinį. Atidarius brėžinį, kurį kažkas kitas jau turi atvirą, pasakoma, kas ir nuo kada, ir siūloma {{ui:Atidaryti tik skaitymui}} (Įrašyti tada klausia naujo pavadinimo), {{ui:Atidaryti vis tiek}} (kitas asmuo bus informuotas kitą atnaujinimą) arba {{ui:Atšaukti}}. Perrašant failą, kurį kažkas kitas turi atvirą, klausiama pirmiausia. Užraktas, neatnaujintas penkias minutes, laikomas pasenusiu: kita kopija buvo uždaryta neįrašius arba kompiuteris miega.

{{cmd:WHOHAS}} klausia `Current` (dabartinis atidarytas brėžinys), `File` (pasirinkti vieną), `FOlder` (pasirinkti aplanką: išvardijami visi jame esantys brėžiniai, kurie kur nors atidaryti), `Path` (įvesti pilną kelią) arba `Name` (vardas, kurį mato kiti; jūsų paskyros vardas, kai esate prisijungę). Studio gali pasiekti tik aplankus, kuriuos pats pasirinkote: brėžiniui, atidarytam iš aplanko, kuris niekada nebuvo pasirinktas, vieną kartą pasako, kad negali pažymėti brėžinio kaip atvirą; `FOlder` pasirenka aplanką, ir nuo to laiko užraktai ten veikia. Užraktas yra pastaba žmonėms, ne kliūtis: kita programa vis tiek gali įrašyti failą. Naršyklėje aplankų nėra, ir komanda apie tai praneša.

### OVERKILL

Ištrina dublikatus objektus ir sutvarko persidengiančias linijas bei lankus, brėžiniams, kurie ateina pilni dvigubų linijų. `Pasirinkite objektus valymui`, {{key:Enter}}, tada {{key:Enter}} dar kartą, kad valytumėte rodomais nustatymais, arba pirmiausia pakeiskite vieną:

- `Tolerance` (Tolerancija): kaip arti turi būti dvi koordinatės, kad būtų laikomos tomis pačiomis (pradžioje 0.000001; 0 reiškia tiksliai tas pačias).
- `Ignore` (Ignoruoti): savybės, kurios gali skirtis tarp dviejų kitaip vienodų objektų. Įveskite pavadinimą, kad jį perjungtumėte: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, arba `None` / `All`. {{key:Enter}}, kai baigta.
- `Overlap` (Persidengimas): įjungta arba išjungta. Įjungta, linijos vienoje tiesioje linijoje, kurios persidengia, tampa viena linija (linija, esanti kitos viduje, tiesiog ištrinama), o lankai to paties apskritimo, kurie persidengia, tampa vienu lanku; lankai, kurie uždaro pilną apsisukimą, tampa apskritimu, o lankas, gulintis ant apskritimo, ištrinamas.
- `Ends` (Galai): įjungta arba išjungta. Įjungta, linijos vienoje tiesioje linijoje ir lankai to paties apskritimo, kurie liečiasi tik galas į galą, tampa vienu gabalu.

Kiekvienas objekto tipas tikrinamas dėl dublikatų: du objektai yra dublikatai, kai jų geometrija yra ta pati su tolerancija ir jų sluoksnis, spalva, linijos tipas, linijos tipo mastelis, linijos storis, storis, skaidrumas ir aukštis sutampa (išskyrus tas, kurias ignoruojate). Linijos ir atviros polilinijos taip pat sutampa, kai nubrėžtos atvirkščiai. Pirmasis objektas piešimo tvarkoje lieka ir išlaiko savo savybes. Komanda praneša, kiek objektų patikrino ir ištrynė: dublikatus, sujungtus persidengiančius gabalus, galas į galą sujungtus gabalus. Vienas {{cmd:UNDO}} viską atšaukia. Nustatymai galioja, kol uždarote brėžinio langą.

Ji nepaliečia: objektų užrakintuose sluoksniuose ir paslėptų objektų. Ji nesujungia linijų su aukščiu (Z) (tikri jų dublikatai vis tiek išeina), ir neliečia atkarpų polilinijos viduje (jos neretinamos), linijos, gulinčios ant polilinijos atkarpos, ir uždaros polilinijos, nubrėžtos atvirkščiai.

### DRAWORDER

Keičia, kurie objektai piešiami priekyje. `Pasirinkite objektus pertvarkymui`, {{key:Enter}}, tada `Virš objektų`, `Po objektais`, `Priekis` arba `Galas` ({{key:Enter}} = `Galas`). `Virš objektų` ir `Po objektais` klausia atskaitos objektų: pasirinkimas pastatomas tiesiai priekyje priekinio iš jų arba tiesiai už galinio iš jų. Pasirinkti objektai išlaiko savo tvarką tarp savęs. Vienas atšaukimo žingsnis. DWG ir DXF išsaugo tvarką su brėžiniu – tai tvarka, kuria objektai rašomi.

Ekrane kiekvienas objektas piešiamas pagal brėžinio tvarką, kaip kiti programos piešia atidarytą failą: vientisa brūkšniuotė, plati polilinija ar teksto kaukė uždengia už jos esančias linijas ir tekstą, o priekyje esantis dalykas uždengia ją. Kur linija kerta tekstą, rodomi abu. Paveikslėliai ir pridėti PDF puslapiai lieka po linijomis. Labai dideliame brėžinyje, kur užpildai ir linijos persidengia ir kaitaliojasi daugiau nei 256 kartus, pirmosios 256 išlaiko savo tvarką, o likusios užpildymai piešiami po linijomis, kad perpiešimas būtų greitas.

### TEXTTOFRONT

Iškelia tekstą, matmenis ir nuorodas prieš visa kita atvirojoje erdvėje: `Tekstas`, `Matmenys`, `Nuorodos` arba `Visi` ({{key:Enter}} = `Visi`). Vienas atšaukimo žingsnis. Pranešama, kai nieko nėra, arba kai jie jau yra priekyje.

### HATCHTOBACK

Nusiunčia visas atvirosios erdvės brūkšniuotes už visko kito, kad užpildai nebeuždengtų linijų ir teksto įrašytame faile. Klausimų nėra. Vienas atšaukimo žingsnis.

### ISOLATEOBJECTS

Trumpieji pavadinimai: `ISOLATE`. Rodo tik pasirinktus objektus: viskas kitas atvirojoje erdvėje paslepiama, kol {{cmd:UNISOLATEOBJECTS}}. Skirtingai nuo {{cmd:LAYISO}}, ji veikia su objektais, kuriuos pasirenkate, nepriklausomai nuo jų sluoksnių, ir nekeičia nė vieno sluoksnio. Paslėpti objektai nepiešiami, nepasirenkami, prie jų neprilimpama, į juos nepriartinama ir jie nespausdinami, o komandos, kurios priima `ALL`, juos praleidžia. Ką nubrėžiate, kol objektai izoliuoti, rodoma įprastai.

Tai tik šiai sesijai: nieko apie tai nėra įrašoma su brėžiniu, tai nėra atšaukimo žingsnis, ir vėl atidarius brėžinį rodoma viskas. Kol objektai paslėpti, būsenos juostoje rodomas mygtukas su jų skaičiumi; spustelėkite jį, kad vėl parodytumėte.

### HIDEOBJECTS

Paslepia pasirinktus objektus, kol {{cmd:UNISOLATEOBJECTS}}. Tos pačios taisyklės kaip {{cmd:ISOLATEOBJECTS}}: tik šiai sesijai, neįrašoma, nėra atšaukimo žingsnis.

### UNISOLATEOBJECTS

Trumpieji pavadinimai: `UNISOLATE`, `UNHIDE`. Vėl parodo visus objektus, paslėptus su {{cmd:ISOLATEOBJECTS}} ar {{cmd:HIDEOBJECTS}}, ir praneša, kiek jų grįžo.

### LAYLOCKFADE

Nustato, kaip atrodo objektai užrakintuose sluoksniuose ir ar spustelėjimas juos pasiekia. Ji nurodo dabartinę būseną, tada priima:

- skaičių nuo 0 iki 90: išblukimo kiekis procentais (pradžioje 50). 0 išjungia išblukimą.
- `ON` arba `OFF`: išblukimas įjungtas arba išjungtas, kiekis išlieka.
- `Pick`, tada `Yes` arba `No`: ar spustelėjimas gali pasirinkti objektus užrakintuose sluoksniuose, kai nevykdoma jokia komanda? `No` (numatytasis): jų visai negalima pasirinkti. `Yes`: spustelėjimas ar langas juos pasirenka, kad {{ui:Ypatybės}} galėtų juos rodyti; jų vis tiek negalima keisti, o komandos savas `Pasirinkite objektus` jų niekada nepaima.

Objektų prilipimai randa objektus užrakintuose sluoksniuose abiem atvejais. Spausdinimai niekada neišblunka. Abu nustatymai yra jūsų, o ne brėžinio, ir taip pat yra Parametrai skiltyje {{ui:Užrakinti sluoksniai}}.

### BURST

Išskaido bloko nuorodas ir išsaugo tai, ką sako jų atributai. `Pasirinkite bloko nuorodas išskaidymui`, {{key:Enter}}: kiekviena nuoroda pakeičiama bloko objektais, o kiekvieno matomo atributo reikšmė tampa paprastu tekstu to atributo sluoksnyje (atributas sluoksnyje 0 patenka į nuorodos sluoksnį, kaip kiti bloko objektai sluoksnyje 0). Nematomi atributai numetami. Blokas viduje lieka bloko nuoroda. Vienas atšaukimo žingsnis; praneša, kiek nuorodų išskaidyta ir kiek atributų reikšmių paversta tekstu.

Atmeta susietą brėžinį pagal pavadinimą (pirmiausia susiekite jį, arba nukopijuokite iš jo su {{cmd:NCOPY}}), ir palieka kitus pasirinktus objektus nepaliestus. Bloko nuorodoms {{cmd:EXPLODE}} duoda tuos pačius objektus; {{cmd:BURST}} paima tik bloko nuorodas ir suskaičiuoja atributų tekstą.

### TXT2MTXT

Trumpieji pavadinimai: `T2M`. Sujungia vienos eilutės tekstus į vieną paragrafo tekstą. `Pasirinkite vienos eilutės tekstą sujungimui`, {{key:Enter}}, tada `Paragrafas` (eilutės susilieja ir lūžta pagal plačiausios eilutės plotį) arba `Lines` (kiekvienas tekstas lieka atskira eilute); {{key:Enter}} pasirenka paskutiniai naudotą. Eilutės surikiuojamos iš viršaus į apačią, tada iš kairės į dešinę, palei viršutinio teksto kryptį. Paragrafas kabo nuo viršutinio teksto viršutinio kairiojo kampo ir perima jo aukštį, sukimą, stilių, sluoksnį ir spalvą. Vienas atšaukimo žingsnis.

Jau paragrafo tekstas, tuščias tekstas ir kiti pasirinkimo objektai paliekami nepaliesti, o komanda praneša, kiek jų.

### NCOPY

Nukopijuoja objektus iš bloko nuorodos ar susieto brėžinio į brėžinį, nieko neišskaidydama. `Pasirinkite objektą bloko nuorodos ar susieto brėžinio viduje`: kopijuojamas objektas, arčiausias paspaudimui, kur jis rodomas, nepriklausomai nuo to, kiek blokų giliai jis yra; paspauskite daugiau, tada {{key:Enter}}. Tada `Bazinis taškas kopijoms perkelti`: {{key:Enter}} palieka jas vietoje, arba nurodykite bazinį tašką ir antrą tašką. Visa komanda yra vienas atšaukimo žingsnis.

Kopija priima sluoksnį, kuriame ji rodoma: objektas sluoksnyje 0 bloke patenka į nuorodos, kurioje jis buvo, sluoksnį, o ByBlock spalva tampa tos nuorodos spalva. Iš susieto brėžinio sluoksnis `Plan|Walls` tampa `Plan$0$Walls` (vardas, kurį suteikia ryšys), sukurtas su susieto sluoksnio spalva, linijos tipu ir linijos storiu. Atributo reikšmė nukopijuojama kaip tekstas. Bloko nuorodos užrakintuose sluoksniuose negali būti pasirenkamos.

### FLATTEN

Nustato pasirinktų objektų aukštį (Z) ir storį į 0. `Pasirinkite objektus išlyginimui`, {{key:Enter}}. Ji taip pat išlygina objektus blokų apibrėžimuose, kuriuos naudoja pasirinkimas (ir blokus viduje tų blokų), todėl kiekviena tų blokų nuoroda pasikeičia; susieti brėžiniai paliekami kaip yra. Vienas atšaukimo žingsnis; praneša, kiek objektų pasikeitė, ir sako, kai nė vienas neturėjo aukščio ar storio.

Ką CadCraft išlaiko trečiajam matmeniui 2D brėžinyje: aukštis apskritimuose, lankuose, elipsėse, taškuose, tekste, bloko nuorodose, brūkšniuotėse, nuorodose ir polilinijose (jų aukštis), aukštis kiekviename linijos gale, ir storis linijose, apskritimuose, lankuose, polilinijose, taškuose ir tekste – kaip failas juos turėjo. {{cmd:FLATTEN}} išvalo tai ir nieko daugiau. Jis nesiliečia prie 3D modelio 3D skirtuke, 3D paviršių ar kietųjų kūnų, o objektas, nubrėžtas pasvirusioje plokštumoje, buvo atvestas į brėžinio plokštumą jau atidarius failą.

### BREAKLINE

Nubrėžia liniją su lūžio ženklu, skirtą rodiniui, kuris nupjautas trumpai. Pasako dabartinį dydį ir išplėtimą, tada `First point of the break line` (arba `Size` / `Extension`, kad pirmiausia juos pakeistumėte), `Second point` ir `Where the break symbol sits`: spustelėkite palei liniją arba {{key:Enter}} vidurio. Rezultatas yra viena polilinija dabartiniame sluoksnyje: linija, einanti per kiekvieną tašką išplėsta, su Z formos brūkšniu, aukščiu lygiu dydžiui ir perpus trumpesniu.

`Size` ir `Extension` prisimenami kaip jūsų nustatymai (dydis pradžioje yra dvigubas matmens teksto aukštis, padaugintas iš matmens mastelio; išplėtimas – pusė dydžio). {{key:Enter}} kartoja komandą.

### AUDIT

Tikrina atidarytą brėžinį dėl pažeidimų ir juos taiso. {{cmd:AUDIT}} patikrina kiekvieną objektą modelyje, lapuose ir blokuose, taip pat sluoksnių lentelę, ir išvardija tai, ką randa, pagal rūšį:

- neskaitmeninės ar begalinės didelės reikšmės;
- objektai be dydžio: linija be ilgio, apskritimas be spindulio, polilinija su viena viršūne, tekstas be raidžių ar aukščio, bloko nuoroda su nuliniu mastelio koeficientu;
- objektai sluoksnyje, kurio brėžinys neturi; nuorodos į bloką, kurio nėra; teksto ir matmenų stilių bei linijų tipų pavadinimai, kurių nėra brėžinyje;
- blokai, kurie patys į save įeina, tiesiogiai ar per kitus blokus;
- objektai, kurie turi bendrą identifikatorių, raktą ar failo rodyklę;
- matmenys be taškų, iš kurių jie matuojami, ir brūkšniuotės, kurių kontūras nėra uždaras.

Tada klausia `Ištaisyti juos? [Taip/Ne]`. `Ne` nieko nekeičia. `Taip` taiso viską vienu atšaukimo žingsniu: pašalinama tai, ko negalima nubrėžti (blogos reikšmės, nėra dydžio, trūkstamas blokas, pažeistas matmuo, brūkšniuotė be tinkamo kontūro, nuoroda, kuri uždaro blokų ratą); trūkstamas sluoksnis sukuriamas; nežinomi stilių ir linijų tipų pavadinimai grįžta prie numatytųjų; bendras raktas pakeičiamas. Praneša, kiek objektų pašalinta ir kiek pataisyta. Tos pačios išvados rodomos Problemų skydelyje, kiekviena su savo {{ui:Taisyti}}.

Nieko neatmeta, bet tikrina tik tai, ką CadCraft pats nubrėžia: duomenys, saugomi kitoms programoms (3D kietieji kūnai, OLE objektai), neatveriami.

### RECOVER

Atidaro pažeistą DXF ar DWG. {{cmd:RECOVER}} klausia failo, nuskaito tai, ką galima perskaityti, vietoj to, kad atmestų failą, išvardija tai, ką praleido ar laikė teisingu, tada patikrina ir taiso brėžinį, kaip {{cmd:AUDIT}} daro su `Taip`.

- DXF: eilutės, kurios nėra kodo ir reikšmės poros, praleidžiamos, kol poros vėl susilygiuoja; skyrius be pabaigos uždaromas; failas, nutrauktas per pusę, nuskaitomas iki nutraukimo; dvejetainis DXF, nutrauktas per pusę, nuskaitomas iki paskutinės pilnos reikšmės. Kai skyrius, blokas ar objektas vis dar neskaitomas, jis paliekamas ir įvardijamas, o skaitymas tęsiasi už jo.
- DWG: objektai, kurie nepraeina patikrų ar negali būti iššifruoti, paliekami, o prarasto objektų sąrašas atkuriamas, peržiūrint objektų duomenis.

Failas diske nekeičiamas. Atkurtas brėžinys atsidaro neįrašytas: įrašykite jį nauju pavadinimu. Failas, iš kurio visiškai nieko neperskaitoma, atmetamas su priežastimi.

### LEGACYTEXT

Konvertuoja tekstą, įvestą senais 8 bitų vietnamietiškais šriftais, į Unicode. Trumpieji pavadinimai `TEXTTOUNICODE` ir `VNTEXT`.

Senesni vietnamietiški brėžiniai laiko savo tekstą kaip Vakarų simbolius, kuriuos tik šriftas paverčia vietnamietiškais: TCVN3 tekstas ABC šriftuose (`.VnTime`, `.VnArial` ir didžiosiomis raidėmis rašomi šriftai, kurių pavadinimai baigiasi `H`) ir VNI tekstas VNI šriftuose (`VNI-Times`). CadCraft tokį tekstą rodo taip, kaip jį skaito, kai tik atidaromas brėžinys, pagal jo teksto stiliaus šriftą, objekto ar paragrafo teksto dalies šriftą; failas vis dar laiko senus simbolius.

{{cmd:LEGACYTEXT}} praneša, kiek tekstų rasta kiekvienoje koduotėje, ir klausia `Konvertuoti … į Unicode?`. `Taip` perrašo kiekvieną (modelį, lapus, blokus, atributų reikšmes ir apibrėžimus) ir suteikia teksto stiliams Unicode šriftą (Times New Roman, Arial ar Courier New pagal senojo šrifto rūšį), vienu atšaukimo žingsniu. Paragrafo teksto formatavimas išlieka.

Kai joks tekstas nenaudoja žinomo šrifto (stilius, kuris prarado šrifto pavadinimą), klausia `Skaityti pasirinktus tekstus kaip [Tcvn3/Vni/Nėra]`: pasirinkite koduotę ir pasirinkite tekstus. Tekstas, kuris jau yra Unicode, paliekamas nepaliestas. Matmenų teksto perrašymai ir daugiaelementės nuorodos teksto nekonvertuojami.
