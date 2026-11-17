---
title: Perkelti, kopijuoti, sukti, keisti mastelį, atspindėti, ištempti ir masyvuoti
summary: Išdėliokite baldus kambaryje pagrindinėmis keitimo komandomis, naudodami bazinius taškus, įvestus atstumus ir anuliavimą.
keywords: perkelti, kopijuoti, sukti, keisti mastelį, atspindys, ištempti, masyvas, sujungti, matchprop, atitikti savybes, dažytojas, arrayrect, arraypolar, poliarinis masyvas, naikinti, suskaidyti, anuliuoti, perdaryti, bazinis taškas, poslinkis, keitimas, lygiuoti, paskirstyti, išlygiuoti eilute, vienodai išdėstyti
from: 8eaeee6c
---

## Ką sukursite

Stalas su viena kėde, nukopijuota aplink stalą, pasukta, atspindėta ir pakeista dydžiu. Eigoje naudojate {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} ir {{cmd:UNDO}}.

## Nubraižykite detales

1. Įveskite `REC` ir paspauskite {{key:Enter}}, įveskite `0,0` ir paspauskite {{key:Enter}}, tada įveskite `@1800,900` ir paspauskite {{key:Enter}}. Tai stalas.
2. Įveskite `REC` ir paspauskite {{key:Enter}}, įveskite `300,-700` ir paspauskite {{key:Enter}}, tada įveskite `@450,450` ir paspauskite {{key:Enter}}. Tai kėdė, po stalu.
3. Spustelėkite {{ui:Visas brėžinys}}.

## Perkelti: bazinis taškas, tada antras taškas

Kiekvienas perkėlimas, kopijavimas, sukimas ir mastelio keitimas prasideda nuo **bazinio taško**: taško, kuris yra nešamas arba apie kurį sukama.

1. Spustelėkite kėdę, kad ją pasirinktumėte.
2. Įveskite `M` ir paspauskite {{key:Enter}}. Istorijoje rašoma `1 rastas`.
3. Prie `Nurodykite bazinį tašką` pritraukite prie viršutinio kairiojo kėdės kampo (Galinis taškas) ir spustelėkite.
4. Prie `Nurodykite antrą tašką` įveskite `@0,200` ir paspauskite {{key:Enter}}.

Kėdė pakyla 200 aukštyn, arčiau stalo.

:::tip
Prie `Nurodykite bazinį tašką` įveskite `D`, kad vietoj to nurodytumėte poslinkį: tada CadCraft klausia `Nurodykite poslinkį`, o jūs įvedate, kiek per plotį ir aukštyn, pavyzdžiui `0,200` (žymė `@` nereikalinga).
:::

## Kopijuoti, kiek norite kartų

1. Spustelėkite kėdę.
2. Įveskite `CO` ir paspauskite {{key:Enter}}.
3. Pritraukite prie kėdės apatinio kairiojo kampo ir spustelėkite kaip bazinį tašką.
4. Įveskite `@600,0` ir paspauskite {{key:Enter}}. Atsiranda kopija, 600 dešinėje.
5. Vėl įveskite `@600,0` ir paspauskite {{key:Enter}}. Atsiranda antra kopija, 1200 dešinėje nuo originalo.
6. Paspauskite {{key:Enter}}, kad užbaigtumėte komandą.

{{cmd:COPY}} tęsiasi, kol paspausite {{key:Enter}}. Kiekviena kopija padedama atstumu nuo bazinio taško iki jūsų nurodyto taško. `@` taškas skaičiuojamas nuo paskutinio įvesto taško, kuris po pirmosios kopijos yra tos kopijos taškas, todėl du kartus `@600,0` duoda kopijas 600 ir 1200. Įveskite `U` ir paspauskite {{key:Enter}}, kad atšauktumėte paskutinę kopiją nepalikdami komandos.

Turėtumėte matyti tris kėdes eilėje po stalu.

:::tip
{{cmd:COPY}} skirta kopijoms viename brėžinyje, padėtoms pagal bazinį tašką. Kad perkeltumėte objektus į kitą brėžinį ar skirtuką arba įklijuotumėte vėliau, naudokite iškarpinę: {{key:Mod+C}}, tada {{key:Mod+V}}. {{key:Mod+D}} padaro vieną kopiją, kuri juda kartu su žymekliu. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).
:::

## Atspindėti eilę į kitą pusę

1. Vilkite kertantį langą (iš dešinės į kairę) per tris kėdes, neliesdami stalo.
2. Įveskite `MI` ir paspauskite {{key:Enter}}.
3. Prie `Nurodykite veidrodinės linijos pirmą tašką` pritraukite prie stalo kairiosios pusės vidurio taško (Vidurio taškas) ir spustelėkite.
4. Prie `Nurodykite veidrodinės linijos antrą tašką` pritraukite prie stalo dešiniosios pusės vidurio taško ir spustelėkite.
5. Prie `Naikinti pradinius objektus? [Taip/Ne] <N>` paspauskite {{key:Enter}}, kad jų neišnaikintumėte.

Turėtumėte matyti tris kėdes po stalu ir tris atspindėtas kėdes virš jo. Tekstas atspindėtame pasirinkime lieka skaitomas: jis padedamas veidrodiškai, bet nerašomas atvirkščiai.

## Pasukti kėdę

1. Spustelėkite dešiniausią kėdę po stalu.
2. Įveskite `RO` ir paspauskite {{key:Enter}}.
3. Pritraukite prie kėdės apatinio dešiniojo kampo ir spustelėkite kaip bazinį tašką.
4. Įveskite `90` ir paspauskite {{key:Enter}}.

Kėdė pasisuka 90 laipsnių prieš laikrodžio rodyklę apie bazinį tašką. Neigiamas kampas sukasi pagal laikrodžio rodyklę. Vietoj įvedimo galite spustelėti antrą tašką: kampas matuojamas nuo bazinio taško iki to taško.

## Pakeisti stalo mastelį

1. Pasirinkite stalą.
2. Įveskite `SC` ir paspauskite {{key:Enter}}.
3. Pritraukite prie stalo apatinio kairiojo kampo ir spustelėkite kaip bazinį tašką.
4. Įveskite `1.2` ir paspauskite {{key:Enter}}.

Stalas 20 % didesnis, augantis nuo bazinio taško. Koeficientas, mažesnis nei 1, padaro jį mažesnį.

:::note
Jei vietoj mastelio koeficiento spustelite tašką, koeficientas yra atstumas nuo bazinio taško iki to taško. Spustelėjus vieną brėžinio vienetą nuo jo, koeficientas yra 1. Paprastai geriau įvesti skaičių.
:::

## Anuliuoti ir perdaryti

- {{key:Mod+Z}}, mygtukas {{ui:Anuliuoti}} arba `U`, tada {{key:Enter}}, anuliuoja paskutinę komandą. Visa komanda yra vienas žingsnis: anuliavus {{cmd:COPY}}, kuris padarė penkias kopijas, pašalinamos visos penkios.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, mygtukas {{ui:Perdaryti}} arba `REDO` ją grąžina.
- Istorijoje rašoma, kas anuliuota („Anuliuota COPY“).

CadCraft išsaugo paskutinius 500 žingsnių. Sluoksnių nustatymai (įjungtas, užšaldytas, užrakintas, spalva) yra nustatymai, o ne keitimai, todėl jie nėra anuliuojami.

## Ištempti kambarį į plotį

{{cmd:STRETCH}} (`S` arba {{ui:Ištempti}}) perkelia tik tai, kas guli kertančiame lange: jame esantys kampai ir linijų galai juda, viskas kita lieka vietoje, todėl kambarys tampa platesnis, o ne perkeliamas.

1. Įveskite `S` ir paspauskite {{key:Enter}}.
2. Vilkite langą iš dešinės į kairę per dešinę sieną, kad jis apimtų sienos kampus ir visų prie jos prisijungiančių daiktų galus.
3. Paspauskite {{key:Enter}}.
4. Spustelėkite bazinį tašką, tada įveskite `@600,0` ir paspauskite {{key:Enter}}.

Stačiakampis 600 platesnis; linijos, kurios baigėsi ant sienos, vis dar baigiasi ant jos. Lankas, kurio vienas galas yra viduje, išlaiko aukštį; apskritimai ir tekstas juda, kai jų centras ar įterpimo taškas yra viduje; matmuo išmatuoja naują ilgį. Objektai, pasirinkti vienas po kito be lango, tiesiog pasislenka.

Taip pat galite pasirinkti iš anksto: vilkite kertantį langą (arba kertantį laisvosios rankos lasso) per sieną be aktyvios komandos, tada įveskite `S`. STRETCH paima tą pasirinkimą ir ištempia tai, ką jo langai apima, lygiai taip, lyg būtumėte juos vilkę pagal jo paties raginimą.

## Masyvas: eilės ir stulpeliai arba aplink centrą

{{cmd:ARRAY}} (`AR` arba {{ui:Masyvas}}) kopijuoja pasirinkimą tinkleliu arba apskritime.

1. Pasirinkite kėdę, įveskite `AR` ir paspauskite {{key:Enter}}. Paspauskite {{key:Enter}}, kad pasirinktumėte stačiakampį.
2. Rodoma 4 stulpelių ir 3 eilių peržiūra. Įveskite `COU`, paspauskite {{key:Enter}}, tada `5` stulpeliams ir `2` eilėms.
3. Įveskite `S`, paspauskite {{key:Enter}}, tada `600` tarp stulpelių ir `-900` tarp eilių (neigiamas skaičius eina žemyn).
4. Paspauskite {{key:Enter}}, kad padarytumėte kopijas.

Kėdžių žiedui aplink stalą vietoj to pasirinkite `PO` (Poliarinis), spustelėkite stalo centrą ir nustatykite `I` (elementai), `F` (užpildymo kampas: 360 visam apskritimui, 180 pusei) ir `ROT` (ar kopijos pasisuka į centrą). {{cmd:ARRAYRECT}} ir {{cmd:ARRAYPOLAR}} praleidžia šį klausimą.

## Sujungti dalis į vieną polilinijas

{{cmd:JOIN}} (`J` arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Sujungti}}): pasirinkite linijas, lankus ir atviras polilinijas, kurių galai susijungia, ir paspauskite {{key:Enter}}. Jos tampa viena polilinija, uždara, jei apeina visą apskritimą, kurią vėliau galima poslinkinti vienu veiksmu. Linijos, esančios vienoje tiesėje, tampa viena linija, net jei tarp jų yra tarpų; vieno apskritimo lankai tampa vienu lanku arba apskritimu.

## Atitikti savybes

{{cmd:MATCHPROP}} (`MA` arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Atitikti savybes}}): spustelėkite objektą, kurio išvaizdos norite, tada pasirinkite objektus, kuriuos keisti, ir paspauskite {{key:Enter}}. Jie perima jo sluoksnį ir spalvą; tekstas perima jo aukštį, matmuo – jo dydžius, brūkšniuotė – jos raštą. Antru klausimu įveskite `S` (Parametrai), kad išjungtumėte bet kurį iš šių dalykų.

## Lygiuoti objektus

**Pagal taškus.** {{cmd:ALIGN}} (`AL` arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti}}): pasirinkite objektus ir paspauskite {{key:Enter}}, tada spustelėkite tašką ant jų (šaltinį) ir vietą, kur jis turi atsidurti (paskirties taškas).

- Viena pora juos perkelia. Paspauskite {{key:Enter}} prie `Nurodykite antrą šaltinio tašką`, kad sustabdytumėte čia.
- Dvi poros juos ir pasuka, todėl linija tarp dviejų šaltinio taškų guli išilgai linijos tarp dviejų paskirties taškų. Tada CadCraft klausia `Keisti objektų mastelį pagal lygiavimo taškus?`: `Y` juos atitinkamai padidina arba sumažina.
- Trečia pora juos atspindi, jei jos du taškai yra priešingose tos linijos pusėse.

**Kraštai ir tarpai.** {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti ir paskirstyti}} (arba `ALIGNPANEL`) atveria mažą skydelį virš brėžinio. Pasirinkite objektus, tada:

- pasirinkite, prie ko lygiuoti, {{ui:Lygiuoti pagal}} (visas pasirinkimas, pirmas arba paskutinis pasirinktas objektas arba taškas, kurį spustelėjate), ir spustelėkite {{ui:Kairė}}, {{ui:Centras}}, {{ui:Dešinė}}, {{ui:Viršus}}, {{ui:Vidurys}} arba {{ui:Apačia}};
- arba pasirinkite {{ui:Vienodi tarpai}} arba {{ui:Vienodi centrai}} ir spustelėkite {{ui:Horizontaliai}} arba {{ui:Vertikaliai}}: abu kraštutiniai objektai lieka, o likę išdėstomi vienodai tarp jų (bent trys objektai).

Kiekvienas spustelėjimas yra vienas anuliavimo žingsnis, o pasirinkimas lieka, todėl galite išbandyti kitą variantą. Kiekvienas objektas skaičiuojamas pagal savo ribinį stačiakampį UCS sistemoje, kai ji nustatyta. Komandų eilutėje tas pats yra {{cmd:ALIGNTO}} ir {{cmd:DISTRIBUTE}}.

## Naikinti ir suskaidyti

- {{cmd:ERASE}} (`E` arba {{key:Delete}}) pašalina pasirinktus objektus.
- {{cmd:EXPLODE}} (`X`) suskaido poliliniją į linijas ir lankus, blokų nuorodą – į jos objektus, o matmenį – į linijas, rodykles ir tekstą. Suskaidyti matmenys nebeatsinaujina patys.

## Dažniausios klaidos

- **Atstumo įvedimas be `@` antrame taške.** `600,0` yra absoliutus taškas 600,0, o ne „600 dešinėje“. Naudokite `@600,0` arba paprastą `600`, kai žymeklis nukreiptas tinkama kryptimi.
- **Sukimas vyko ne ta kryptimi.** Teigiami kampai sukasi prieš laikrodžio rodyklę.
- **Anuliavimas pašalino daugiau nei tikėtasi.** Vienas anuliavimas atšaukia visą paskutinę komandą, įskaitant visas jos sukurtas kopijas.
- **Komanda neprašė pasirinkti objektų.** Objektai jau buvo pasirinkti, todėl komanda juos panaudojo. Pirmiausia paspauskite {{key:Esc}}, kad pradėtumėte be pasirinkimo.
