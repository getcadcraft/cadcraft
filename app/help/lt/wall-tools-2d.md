---
title: Sienų formos, pjūviai, poslinkiai ir užraktai 2D sienoms
summary: Braižykite sienas stačiakampiais, daugiakampiais ir lankais, pjaukite ir vėl junkite, perkelkite pagal matmenį ir užrakinkite vieną sieną prie kitos arba prie tinklelio linijos. Tos pačios priemonės kaip BimCraft sienos.
keywords: siena, sienų įrankių juosta, sienų mygtukai, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, jungimo stilius, įstrižai, plokščias, nupjauti statmenai, spyna, rankenėlė, vilkti galą, sukti, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, jungti, drausti jungimą, užraktas, tinklelio linija, skaidyti, tarpas, poslinkis, vietos linija
from: 49044181
---

Šios priemonės veikia su 2D sienomis, sukurtomis `WALL` (žr. „Braižykite 2D sienas, duris ir langus“). Jos naudoja tas pačias taisykles kaip BimCraft sienų įrankiai, todėl siena elgiasi vienodai abiejose programose.

## Kur yra priemonės

- Įrankių juostoje grupė {{ui:Sienos}} turi {{ui:Siena}}, {{ui:Stačiakampis}}, {{ui:Padalyti}} ir {{ui:Poslinkis}}. Jos meniu {{ui:Daugiau}} yra visos kitos sienų priemonės, kiekviena su savo piktograma.
- Juostos meniu stiliuose skirtuke {{ui:Sienos}} yra skydeliai {{ui:Braižyti sienas}}, {{ui:Iškirpti}}, {{ui:Nustatyti ir keisti}}, {{ui:Laikyti}} ir {{ui:Jungti}}.
- Išdėstyme eilutės ir įrankių dėžė rodo tą pačią grupę {{ui:Sienos}}.
- Galite įvesti bet kurią žemiau paminėtą komandą.

## Jungimai išsaugomi

Kai sienos galas patenka ant kitos sienos, CadCraft išsaugo tą jungimą su abiem sienomis. Jungimų nebeskaičiuoja iš to, kur galai atsitiktinai yra. Taigi:

- Sienos, prijungtos prie perkeltos sienos, seka ją ir lieka prijungtos. Jų galai slysta palei savas linijas, todėl nieko nepasisuka.
- Vilkdami vieno sienos galo rankenėlę, sienos, prijungtos ten, išlaiko savo kryptį. Jos galas slysta palei savo liniją, kol pasiekia vilkiamą sieną, todėl vilkiamas galas atsiduria ant tos linijos, ne visada po žymekliu. Peržiūra rodo, kur. Sienos, kuri įsiremia į vilkiamą sieną, seka palei savo liniją. Vilkimas tiesiai palei sieną keičia jos ilgį, o sienos, prijungtos ten, juda kartu.
- `ROTATE` su prijungta siena veikia taip pat: jos kaimynų galai slysta palei savas linijas iki pasuktos sienos.
- Norėdami perkelti kampą, pasirinkite abi sienas, kurios ten susijungia, ir vilkite rankenėlę ant kampo. Abi sienos lieka ant kampo ir abi pasisuka. Toliau esančios sienos lieka, kaip buvo.
- Laikykite {{key:Alt}}, kai spustelite naują rankenėlės vietą, kad sąmoningai nutrauktumėte jungimus: siena nueina ten, kur padėjote, ir niekas nesekam.
- Jei vilkimas pasuktų prijungtą sieną per savo tolimą galą, jis atmetamas ir niekas nepasikeičia.
- Siena, nubrėžta su {{ui:Drausti jungimus}} (`D` `WALL` komandoje), arba išjungta Ypatybėse ({{ui:Drausti jungimą pradžioje}}, {{ui:Drausti jungimą gale}}), lieka laisva tame gale, net jei liečia kitą sieną, kol vėl neleisite.
- `WALLDISJOIN` ({{ui:Drausti jungimą}} grupėje {{ui:Sienos}}) daro tą patį spustelėjimu: spustelėkite sieną arti vieno galo, kad uždraustumėte jungimus tame gale, ir spustelėkite dar kartą, kad leistumėte.
- Senesnis brėžinys dar neturi išsaugotų jungimų. Pirmasis jūsų padarytas pakeitimas juos suranda vieną kartą – iš to, kaip sienos stovėjo prieš pakeitimą – ir išsaugo. `WALLJOINS` tai padaro iš karto.
- DWG ir DXF failai nešioja jungimus kiekvienos sienos viduje. CadCraft juos skaito taip, kaip išsaugota. Programa, kuri neturi išplėstinių duomenų, rodo sienas kaip paprastus blokus ir praranda jungimus; jungimas, kurio sienos buvo perkeltos kitoje programoje, pametamas kitą kartą pakeitus bet kurią iš sienų.

## Kampo jungimo stilius

Kampas, kur dvi sienos susijungia galas į galą, nubrėžiamas įstrižai, nebent pasirinksite kitą stilių.

- `WALLJOINSTYLE` ({{ui:Jungimo stilius}} grupėje {{ui:Sienos}}): spustelėkite kampą. Kiekvienas spustelėjimas pereina prie kito stiliaus: {{ui:Įstrižai}}, {{ui:Plokščias}}, {{ui:Nupjauti statmenai}}, tada vėl {{ui:Įstrižai}}. Įveskite `T`, kad perjungtumėte, kuri iš dviejų sienų eina per kampą, kurį spustelėjote paskutinį. Paspauskite {{key:Enter}}, kad baigtumėte. Vienas komandos paleidimas yra vienas atšaukimo žingsnis.
- {{ui:Plokščias}}: viena siena eina iki kitos sienos tolimo paviršiaus, o kita sustoja prie jos šono. {{ui:Nupjauti statmenai}}: tas pats, bet siena, kuri eina per, baigiasi statmenai sau. Stačiu kampu abu atrodo panašiai.
- Sienos Ypatybėse: {{ui:Jungimo stilius pradžioje}}, {{ui:Jungimo stilius gale}} ir {{ui:Eina per pradžioje}}, {{ui:Eina per gale}}.
- Stilius išsaugomas kartu su abiem sienomis ir keliauja DWG bei DXF failuose. Sienos kopija prasideda be jo.
- T jungimas stiliaus neturi: eina ta siena, kurios šonas yra pasiektas. Kampas, kur susijungia trys ar daugiau sienų, lieka įstrižas. Taip pat lieka labai aštrus kampas (mažesnis nei apie 30 laipsnių) ir dvi sienos vienoje linijoje.

## Nubrėžti sienų formas

Kiekviena iš šių komandų sukuria sienas vienu atšaukimo žingsniu, su sujungtais kampais. `WALL` komandoje `O` nustato padėties poslinkį (kiek kairėn nuo jūsų spustelėjimų eina siena), o `D` išjungia jungimą kitoms nubrėžiamoms sienoms.

- `WALLRECT` (`WR`): du priešingi kampai, kaip `RECTANG`.
- `WALLROT`: pirmoji kraštinė, tada kiek toli išeina kita kraštinė, stačiakampiui bet kuriuo kampu.
- `WALLPOLY` (`WP`): kraštinių skaičius (3–64), centras, `I` įbrėžtas arba `C` apibrėžtas, tada spindulys, kaip `POLYGON`: spustelėkite jį arba įveskite (įvestas spindulys eina link žymeklio arba išilgai X, kai žymeklis dar ant centro).
- `WALLARC` (`WARC`): centras, pradžia, pabaiga. `D` pasuka lanką kita kryptimi.
- `WALLTAN`: spustelėkite netoli sienos galo, tada lanko galą, kuris išeina palei tą sieną.
- `WALLPICK`: spustelėkite liniją ar polilinija ir pasakykite, ar imti ir prie jos prijungtas linijas.
- `WALLTRACE`: spustelėkite uždaroje linijų ir sienų srityje, kad aplink mažiausią jų padėtumėte sienas.

Plano sienos tiesios, todėl lankas nubrėžiamas kaip trumpos tiesios sienos po 15 laipsnių kiekviena. Jos susijungia kaip bet kuris kampas.

## Pjauti sienas

- `WALLSPLIT` (`WS`): spustelėkite sieną, tada tašką. `C` pjauna ten, kur kita siena ją kerta, `G` palieka tarpą tarp dalių, `F` daro pjūvio galus laisvus, o ne prijungtus. Pirmoji dalis išlaiko sienos vietą brėžinyje, o durys ir langai eina kartu su savo dalimi. Pjūvis per duris ar langą atmetamas.
- `WALLSPLITGAP` ({{ui:Padalyti su tarpu}}): tas pats padalijimas, bet pirmiausia klausia tarpo.
- `WALLDELSEG`: spustelėkite sieną, tada dviejų gabalo, kurį trinti, galus.
- `WALLREJOIN`: spustelėkite dvi vienos sienos dalis, kad jos vėl taptų viena.

## Perkelti sienas pagal atstumą

- `WALLDIM` ({{ui:Redaguoti pagal matmenį}}): spustelėkite tiesinį arba įstrižą matmenį, einantį nuo vienos sienos iki kitos, tada įveskite naują reikšmę. Siena tolimame gale perkeliama statmenai sau, siena pirmame gale išlieka, o prie jos prijungtos sienos seka. Matmens tolimas taškas juda kartu su sienos, todėl matmuo rodo jūsų įvestą reikšmę.
- `WALLOFFSET` (`WO`): spustelėkite sieną, tada pusę, į kurią ją perkelti (`D` įveda atstumą, `C` daro kopiją).
- `WALLSTRETCH`: langas aplink sienų galus, tada bazinis taškas ir antras taškas.
- Ypatybėse įvestas {{ui:Ilgis}} išlaiko pradžią ir kartu perkelia sieną, prijungtą tolimame gale; naujas {{ui:Storis}} auga nuo pasirinktos {{ui:Vietos linijos}} (kairiojo paviršiaus, dešiniojo paviršiaus arba centro).

## Matmuo tarp sienų centro linijų

Sienos centro linija nėra nubrėžta, bet objektų prilipimas ją randa. Kai objektų prilipimas įjungtas ({{key:F3}}), užveskite žymeklį ant vidurio sienos storio: žymė rodo `Sienos centras: galas` arba `Sienos centras: vidurys`, o centro linija rodoma punktyrine linija, kol žymė ant jos. Su {{ui:Statmenas}} arba {{ui:Artimiausias}} įjungtais objektų prilipimų sąraše, jie veikia ir centro linijoje.

1. Pradėkite `DIMLINEAR` (arba `DIMALIGNED`).
2. Spustelėkite pirmąją sieną, kur žymė rodo `Sienos centras: vidurys` arba `Sienos centras: galas`.
3. Spustelėkite antrąją sieną tuo pačiu būdu, tada spustelėkite, kur eina matmens linija.
4. Norėdami pakeisti atstumą, pradėkite `WALLDIM`, spustelėkite matmenį ir įveskite naują reikšmę. Antroji siena pajuda.

Centro linijos prilipimas veikia kiekvienoje komandoje, kuri prašo taško.

## Užrakinti sienas

Užraktas lieka su siena faile. Jei perkeliate vieną užrakintą sieną, kita seka. Jei vienas pakeitimas perkelia abi sienas skirtingai, jis atmetamas ir niekas nepasikeičia.

- `WALLHOLD`: užrakinkite sieną prie kitos sienos. `A` pirmiausia perkelia ją ant kitos sienos linijos, `K` išlaiko atstumą, kurį ji turi.
- `WALLHOLDDIM`: užrakinkite atstumą tarp dviejų lygiagrečių sienų.
- `WALLGRID`: užrakinkite sieną prie tinklelio linijos (linijos tinklelio sluoksnyje, kurios žyma tekste yra viename gale), arba išilgai jos, arba vienu galu ant jos. Siena, užrakinta išilgai linijos, išlaiko atstumą, kurį turi nuo jos. Perkelkite tinklelio liniją su `GRIDMOVE`, ir siena seka visa, kartu su prijungtomis sienomis. Siena, kuri guli išilgai tinklelio linijos, juda visa kartu su ja net be užrakto, o siena, kuri tik baigiasi ant linijos, ištempiama tuo galu.
- `WALLHOLDS` išvardija užraktus. `WALLUNHOLD` nuima užraktus nuo sienos.
- Kiekvienas užraktas planuose rodo mažą spynelę: šalia užrakintos sienos vidurio arba šalia galo, užrakinto prie tinklelio linijos. Spustelėkite spynelę, kad nuimtumėte tą užraktą.

## Kas dar neįgyvendinta

Užraktai naudoja sienų centro linijas. Čia sienos neturi sluoksnių, todėl sankryžoje nėra sluoksnių prioriteto, o sienos nesilenkia (žr. lankus aukščiau). Niekas šių įrankių nebandė didelame brėžinyje, ir jie nepatikrinti kitoje CAD programoje.
