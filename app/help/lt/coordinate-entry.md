---
title: Koordinačių ir atstumų įvedimas
summary: Visi būdai įvesti tašką, atstumą, kampą ar skaičių CadCraft komandų eilutėje, su pavyzdžiais.
keywords: dinaminė įvestis, dyn, f12, tab, koordinatės, absoliutus, santykinis, polinis, @, tiesioginis atstumas, kampas, laipsniai, paskutinis taškas, lastpoint, taškų įvedimas, įvestis, aritmetika, skaičiavimas, skaičiuotuvas, cal, pliusas, trupmena, išraiška
from: 7de9252d
---

## Taškai

Kai užklausa prašo taško, įveskite vieną iš šių formų ir paspauskite {{key:Enter}}:

| Įvedate | Reiškia | Pavyzdys |
|---|---|---|
| `x,y` | Absoliutus: matuojama nuo pradžios taško 0,0 | `2500,1200` |
| `#x,y` | Taip pat absoliutus (priimama dėl įpročio) | `#2500,1200` |
| `@dx,dy` | Santykinis: per ir aukštyn nuo paskutinio taško | `@600,0` |
| `@d<a` | Santykinis polinis: atstumas ir kampas nuo paskutinio taško | `@1500<45` |
| `d<a` | Absoliutus polinis: atstumas ir kampas nuo pradžios taško | `3000<90` |
| vienas skaičius | Tiesioginis atstumas: tiek nuo bazinio taško, link kryžmelės | `1200` |
| `*x,y`, `@*dx,dy` | Pasaulio koordinatės, kai nustatyta UCS | `*0,0` |

Kai nustatyta UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` ir kampas `d<a` matuojami pagal UCS ašis. Žr. [Pasukite vaizdą ir naudokite savo koordinates](topic:ucs-and-turned-view).

Arba spustelėkite brėžinyje; spustelėjimams taikomas objektų fiksavimas ir {{ui:Ortho}}.

Taisyklės:

- Kablelis atskiria X nuo Y. Dešimtainiai skaičiai rašomi su tašku: `1250.75,300`.
- Neigiamos reikšmės eina kairėn ir žemyn: `@-600,0`.
- Netipkite tarpų: {{key:Space}} siunčia eilutę, kaip ir {{key:Enter}}.
- Skaičiai gali turėti eksponentes: `1e3` yra 1000.
- Vienetai neįvedami, ir pėdų bei colių žymėjimo nėra. Įveskite paprastus skaičius brėžinio vienetais.

## Paskutinis taškas

`@` skaičiuojamas nuo **paskutinio taško, kurį nurodėte bet kurioje taško užklausoje**, bet kurioje komandoje: spustelėjimo, fiksavimo ar įvesto taško. Jis išsaugomas tarp komandų, todėl naują liniją galite pradėti `@0,500` atstumu nuo tos vietos, kur baigėsi ankstesnė. Kol nenurodėte jokio taško, `@` skaičiuojamas nuo 0,0.

Kai kur tai svarbu:

- Komandoje {{cmd:COPY}} po pirmosios kopijos paskutinis taškas yra tos kopijos taškas. `@600,0` du kartus padeda kopijas 600 ir 1200 atstumu nuo originalo.
- Įdėjus matmenį, paskutinis taškas yra vieta, kur nurodėte matmens liniją, o ne matmens galas.

Jei abejojate, naudokite absoliutų tašką, fiksavimą arba tiesioginį atstumą.

## Tiesioginis atstumo įvedimas

Paprastas skaičius yra atstumas nuo komandos **bazinio taško** (taško, nuo kurio prasideda gumos juosta) link kryžmelės:

1. Perkelkite kryžmelę norima kryptimi.
2. Įveskite atstumą ir paspauskite {{key:Enter}}.

Kai įjungtas {{ui:Ortho}}, kryptis prisitaiko prie tiesios linijos į šoną arba tiesiai aukštyn ir žemyn, todėl tai greičiausias būdas braižyti statmenas sienas. Jei bazinio taško nėra arba kryžmelė yra tiksliai ant jo, skaičius atmetamas su pranešimu „Reikalingas taškas arba parinkties raktinis žodis.“

## Kampai

- Laipsniais, kaip paprastas skaičius: `30`, `-45`, `112.5`.
- Matuojami prieš laikrodžio rodyklę nuo teigiamos X krypties (rodančios į dešinę): 0 yra dešinėje, 90 – aukštyn, 180 – kairėje, 270 arba -90 – žemyn.
- Kur prašoma kampo (sukimo, teksto kampo), galite ir spustelėti: kampas matuojamas nuo bazinio taško iki spustelėjimo. Jei bazinio taško dar nėra, pirmas spustelėjimas jį nustato, o užklausa prašo antro taško.

## Atstumai

Kur prašoma atstumo (spindulio, poslinkio, teksto aukščio, mastelio koeficiento):

- įveskite teigiamą skaičių (brėžinyje pėdomis ir colių dar `12'6"` arba `6-1/2`: žr. [Pėdos ir coliai](topic:units-papers-scales#feet-and-inches-and-fractions)), arba
- spustelėkite tašką: atstumas nuo komandos bazinio taško iki jo, arba
- spustelėkite du taškus, kai bazinio taško nėra: užklausa pasikeičia į `Nurodykite antrąjį tašką`.

„Reikia teigiamo skaičiaus arba dviejų taškų.“ reiškia, kad reikšmė nebuvo skaičius arba buvo neigiama.

## Aritmetika įvestoje reikšmėje

Bet kur, kur įvedamas ilgis, koordinatė, kampas ar skaičius (komandų eilutėje, dinaminėje įvestyje, Ypatybių laukuose ir dialoguose), galite įvesti skaičiavimą su `+`, `-`, `*`, `/` ir skliaustais, vietoj to kad iš anksto apskaičiuotumėte reikšmę:

| Įvedate | Gaunama |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (pėdų ir colių brėžinyje) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, brėžinio vienetais (kai jo vienetai nustatyti) |
| `@4+7/16,0` | taškas 4.4375 dešinėje nuo paskutinio |
| `360/7` | 51.43 laipsnio kampas |

- Brūkšnys, įrašytas į ilgį, yra jo dalis: `4-7/16` yra 4 7/16, o `24'-6"` yra 24 pėdos 6 coliai. Norėdami atimti po pėdų ženklo, pirma užbaikite ilgį, `24'-0"-6"`, arba įdėkite skaičiavimą į skliaustus su tarpais aplink brūkšnį: `(24' - 6")` (skliaustuose tarpas yra tarpas; kitur jis paspaudžia {{key:Enter}}).
- Paprastas skaičius, pridedamas prie ilgio, laikomas brėžinio vienetais; dauginant ar dalijant iš jo ilgis keičiamas. Du ilgiai, sudauginti, sudaro plotą, todėl `2'*3'` atmetama.
- Veikia ir `abs`, `round`, `ceil` bei `floor`: `round(10/3)`.
- Skaičiavimas, kurio negalima perskaityti, atmetamas nurodant, kur įvyko klaida, pavyzdžiui: „Skaičiavimas baigiasi per anksti (simbolis 3): trūksta reikšmės.“ Niekas niekada nėra skaitoma kaip 0. {{cmd:CAL}} parodo skaičiavimo reikšmę.

## Dinaminė įvestis

{{ui:Dyn}} ({{key:F12}}, būsenos juostoje) deda reikšmes šalia kryžmelės, kol komanda prašo taško.

- Kol nėra bazinio taško (pirmasis linijos taškas), du laukai yra **X** ir **Y**.
- Vėliau jie yra **atstumas** ir **kampas** nuo paskutinio taško.

Įvestis vis tiek eina į komandų eilutę; lauke prie kryžmelės rodoma tai, kas įvedama, o gumos juosta seka ją.

1. Įveskite reikšmę: ji patenka į paryškintą lauką.
2. Paspauskite {{key:Tab}} (arba kablelį po X). Reikšmė užrakinama (rodoma paryškinta), ir paryškinamas kitas laukas. Užrakintas atstumas išlaiko gumos juostą tokio ilgio, kol nukreipiate pelę.
3. Įveskite antrą reikšmę arba tiesiog nukreipkite ir paspauskite {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} nubraižo 50 tiesiai aukštyn nuo paskutinio taško.

Paspaudus {{key:Enter}} po vienos reikšmės be {{key:Tab}}, veikia kaip tiesioginio atstumo įvedimas. Pėdos ir coliai veikia ir laukuose (`12'6"`). Atstumo ir kampo užklausos (apskritimo spindulys, sukimas) taip pat rodo savo reikšmę šalia kryžmelės.

## Parinktys ir numatytosios reikšmės

- Parinktys rodomos laužtiniuose skliaustuose. Įveskite parinkties didžiąsias raides (`D` – `[Diameter]`, `CL` – `CLose`) ir paspauskite {{key:Enter}}. Ilgesnės žodžio pradžios taip pat veikia (`DIA`).
- Numatytoji reikšmė rodoma kampiniuose skliaustuose, pavyzdžiui `<500>`. Paspauskite {{key:Enter}} arba dešinįjį pelės klavišą, kad ją naudotumėte.

## Kiti klaviatūros išdėstymai ir skaitmenų klaviatūra

Komandų pavadinimai, trumposios formos ir parinkčių raidės yra lotyniškos. Esant graikiškam, kirilicos (rusų, ukrainiečių, baltarusių, serbų, makedonų, bulgarų), hebrajiškam, arabiškam, persiškam, tajiškam ar korėjiečiam išdėstymui, perjungti išdėstymo nereikia: kai įvestas žodis nėra komanda, trumpoji forma ar parinktis tokia, kokia yra, CadCraft jį skaito pagal paspaustus klavišus. Lotyniškos klaviatūros klavišas, pažymėtas `L`, vis tiek pradeda `LINE`, o klavišas `C` vis tiek atsako `Close`, nepriklausomai nuo to, kokią raidę išdėstymas jam priskiria. Virš komandų eilutės rodomas atitinkamų komandų sąrašas seka tą pačią taisyklę. Tekstas, kurį įvedate ten, kur komanda prašo teksto ({{cmd:TEXT}} turinys, pavadinimas), niekada nekeičiamas.

Išdėstymuose, kuriuose skaitmenų klaviatūros dešimtainis klavišas įveda kablelį, tas klavišas įveda tašką komandų eilutėje ir skaičių laukuose, todėl `12.5` galima įvesti skaitmenų klaviatūra. Pagrindinės klaviatūros kablelio klavišas vis tiek atskiria `x,y`.

Abu tai galima išjungti {{ui:Settings}} parametruose: {{ui:Commands on a non-Latin keyboard layout}} ir {{ui:Keypad decimal key}}.

## Koordinačių rodinys

Būsenos juostoje rodomos kryžmelės X ir Y (UCS, jei nustatyta), po fiksavimų ir {{ui:Ortho}}. Kai komanda turi bazinį tašką, pridedamas `Δ` su atstumu ir kampu nuo to taško, pavyzdžiui `Δ 1500 < 30°`: tai skaičiai, kuriuos įvestumėte kaip `@1500<30`.

Naudokite {{cmd:ID}}, kad atspausdintumėte taško koordinates, ir {{cmd:DIST}}, kad išmatuotumėte atstumą tarp dviejų taškų.
