---
title: Sienų formos, pjūviai, poslinkiai ir fiksavimai 2D sienoms
summary: Braižykite sienas kaip stačiakampius, daugiakampius ir lankus, dalinkite ir vėl jungkite, perkelkite pagal matmenį ir fiksuokite vieną sieną prie kitos ar prie tinklelio linijos. Tos pačios priemonės kaip BimCraft sienų.
keywords: siena, sienų juosta, sienų mygtukai, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, jungimo stilius, įstrižai, plokščias, nupjauti statmenai, spynelė, rankenėlė, vilkti galą, sukti, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, jungti, drausti jungimą, fiksavimas, tinklelio linija, padalyti, tarpas, poslinkis, padėties linija
from: f41e7433
---

Šios priemonės veikia 2D sienoms, sukurtoms su `WALL` (žr. „Braižykite išmaniąsias sienas, duris ir langus 2D“). Jos naudoja tas pačias taisykles kaip BimCraft sienų priemonės, todėl siena elgiasi vienodai abiejose programose.

## Kur yra priemonės

- Įrankių juostoje grupėje {{ui:Sienos}} yra {{ui:Siena}}, {{ui:Stačiakampis}}, {{ui:Padalyti}} ir {{ui:Poslinkis}}. Jos {{ui:Daugiau}} meniu yra visos kitos sienų priemonės, kiekviena su savo piktograma.
- Juostos meniu stiliuose skirtuke {{ui:Sienos}} yra skydeliai {{ui:Braižyti sienas}}, {{ui:Iškirpti}}, {{ui:Nustatyti ir keisti}}, {{ui:Laikyti}} ir {{ui:Sujungti}}.
- Išdėstymo lape įrankių eilutės ir įrankių dėžė rodo tą pačią grupę {{ui:Sienos}}.
- Galite įvesti ir bet kurią žemiau nurodytą komandą.

## Jungtys įrašomos

Kai sienos galas patenka ant kitos sienos, CadCraft įrašo tą jungtį kartu su abiem sienomis. Jungčių nebeskaičiuoja iš naujo pagal tai, kur galai atsitiktinai yra. Todėl:

- Sienos, sujungtos su perkeliama siena, seka ją ir lieka sujungtos. Jų galai slysta palei savo linijas, todėl niekas nesisuka.
- Vilkdami sienos galą už rankenėlės, prie to galo sujungta siena išlaiko savo kryptį. Jos galas slysta palei savo liniją, kad susitiktų su vilkama siena, todėl vilkamas galas atsiduria ant tos linijos, ne visada po žymekliu. Peržiūra parodo, kur. Siena, kuri tik prisiglaudžia prie vilkamos sienos, seka palei savo liniją. Vilkant galą tiesiai palei sieną keičiamas jos ilgis, o prie to galo sujungta siena juda kartu.
- `ROTATE` ant sujungtos sienos veikia taip pat: kaimynų galai slysta palei savo linijas iki pasuktos sienos.
- Norėdami perkelti kampą, pasirinkite abi sienas, kurios ten susitinka, ir vilkite rankenėlę kampe. Abi sienos lieka kampe ir abi pasisuka. Tolesnės sienos lieka tokios, kokios buvo.
- Jei tyčia norite nutraukti jungtis, laikykite {{key:Alt}}, spustelėdami naują rankenėlės vietą: siena nueina ten, kur padėjote, ir niekas neseka.
- Jei vilkimas pasuktų sujungtą sieną per jos pačios tolimą galą, jis atmetamas ir nieko nepasikeičia.
- Sieną, nubraižytą su {{ui:Drausti jungimą}} (`D` komandoje `WALL`), arba išjungtą Ypatybėse ({{ui:Drausti jungimą pradžioje}}, {{ui:Drausti jungimą gale}}), palieka laisvą tame gale, net jei ji liečia kitą sieną, kol vėl leisite.
- `WALLDISJOIN` ({{ui:Drausti jungimą}} grupėje {{ui:Sienos}}) daro tą patį vienu spustelėjimu: spustelėkite sieną arti vieno galo, kad uždraustumėte jungimus tame gale, ir spustelėkite dar kartą, kad vėl leistumėte.
- Senesniame brėžinyje įrašytų jungčių dar nėra. Pirmasis jūsų pakeitimas jas kartą suranda, remdamasis sienų padėtimi prieš pakeitimą, ir įrašo. `WALLJOINS` tai padaro iš karto.
- DWG ir DXF failai saugo jungtis kiekvienos sienos viduje. CadCraft jas nuskaito kaip įrašytas. Programa, kuri neišsaugo papildomų duomenų, rodo sienas kaip paprastus blokus ir jungtis praranda; jungtis, kurių sienos perkeltos kitoje programoje, dingsta kitą kartą, kai pakeičiate bet kurią iš jų.

## Kampo jungimo stilius

Kampas, kuriame dvi sienos susitinka galas į galą, braižomas kaip įstrižas, nebent pasirinksite kitą stilių.

- `WALLJOINSTYLE` ({{ui:Jungimo stilius}} grupėje {{ui:Sienos}}): spustelėkite kampą. Kiekvienas spustelėjimas pereina prie kito stiliaus: {{ui:Įstrižai}}, {{ui:Plokščias}}, {{ui:Nupjauti statmenai}}, tada vėl {{ui:Įstrižai}}. Įveskite `T`, kad perjungtumėte, kuri iš dviejų sienų eina per kampą, kurį spustelėjote paskutinį. Baigti paspauskite {{key:Enter}}. Vienas komandos paleidimas yra vienas anuliavimo žingsnis.
- {{ui:Plokščias}}: viena siena eina iki kitos sienos tolimo paviršiaus, o kita sustoja prie jos šono. {{ui:Nupjauti statmenai}}: tas pats, tik siena, kuri eina per, baigiasi statmenai sau. Stačiu kampu abu atrodo vienodai.
- Sienos Ypatybėse: {{ui:Jungimo stilius pradžioje}}, {{ui:Jungimo stilius gale}}, {{ui:Eina per pradžioje}}, {{ui:Eina per gale}}.
- Stilius įrašomas kartu su abiem sienomis ir keliauja DWG bei DXF failuose. Sienos kopija prasideda be jo.
- T jungtis stiliaus nepasirenka: eina ta siena, prie kurios šono atsiremta. Kampas, kuriame susitinka trys ar daugiau sienų, lieka įstrižas. Taip pat lieka labai aštrus kampas (mažesnis nei apie 30 laipsnių) ir dvi sienos vienoje tiesėje.

## Braižykite sienų formas

Kiekviena jų sukuria sienas vienu anuliavimo žingsniu su sujungtais kampais. `WALL` komandoje `O` nustato padėties poslinkį (kiek kairėn nuo jūsų spustelėjimų eina siena), o `D` išjungia jungimą sienoms, kurias braižysite toliau.

- `WALLRECT` (`WR`): dvi priešingos kampų viršūnės, kaip `RECTANG`.
- `WALLROT`: pirmoji kraštinė, tada kiek toli išeina kita kraštinė, stačiakampiui bet kokiu kampu.
- `WALLPOLY` (`WP`): kraštinių skaičius (nuo 3 iki 64), centras, `I` įbrėžtam arba `C` apibrėžtam, tada spindulys, kaip `POLYGON`.
- `WALLARC` (`WARC`): centras, pradžia, pabaiga. `D` pasuka lanką kita kryptimi.
- `WALLTAN`: spustelėkite arti sienos galo, tada lanko galą, kuris išeina palei tą sieną.
- `WALLPICK`: spustelėkite liniją arba polilinija ir nurodykite, ar imti ir prie jos prijungtas linijas.
- `WALLTRACE`: spustelėkite uždaro linijų ir sienų ploto vidų, kad aplink mažiausią jo sritį būtų sienos.

Plano sienos tiesios, todėl lankas braižomas kaip trumpos 15 laipsnių tiesios sienos. Jos jungiasi kaip bet koks kampas.

## Pjaustykite sienas

- `WALLSPLIT` (`WS`): spustelėkite sieną, tada tašką. `C` pjauna ten, kur kita siena ją kerta, `G` palieka tarpą tarp dalių, `F` daro pjūvio galus laisvus vietoj sujungtų. Pirmoji dalis išlieka sienos vietoje brėžinyje, o durys ir langai eina kartu su savo dalimi. Pjūvis per duris ar langą atmetamas.
- `WALLSPLITGAP` ({{ui:Padalyti su tarpu}}): tas pats padalijimas, bet pirmiausia klausia tarpo.
- `WALLDELSEG`: spustelėkite sieną, tada dvi dalies, kurią trinti, galus.
- `WALLREJOIN`: spustelėkite dvi vienos sienos dalis, kad vėl taptų viena.

## Perkelkite sienas atstumu

- `WALLDIM`: spustelėkite linijinį ar suderintą matmenį, einantį nuo vienos sienos iki kitos, tada įveskite naują reikšmę. Tolimo galo siena perkeliama statmenai sau, pirmojo galo siena išlieka, o prie jos sujungtos sienos seka.
- `WALLOFFSET` (`WO`): spustelėkite sieną, tada pusę, į kurią ją perkelti (`D` įveda atstumą, `C` vietoj to padaro kopiją).
- `WALLSTRETCH`: langas aplink sienų galus, tada bazinis taškas ir antrasis taškas.
- Ypatybėse įvestas {{ui:Ilgis}} išlaiko pradžią ir su savimi pasiima prie tolimo galo sujungtą sieną, o nauja {{ui:Storis}} auga nuo pasirinktos {{ui:Padėties linija}} (kairės pusės, dešinės pusės ar centro).

## Fiksuokite sienas

Fiksavimas lieka su siena faile. Jei perkeliate vieną užfiksuotą sieną, kita seka. Jei vienas pakeitimas perkelia abi sienas skirtingai, jis atmetamas ir nieko nepasikeičia.

- `WALLHOLD`: užfiksuokite sieną prie kitos sienos. `A` pirmiausia perkelia ją į kitos sienos liniją, `K` išlaiko jos turimą atstumą.
- `WALLHOLDDIM`: užfiksuokite atstumą tarp dviejų lygiagrečių sienų.
- `WALLGRID`: užfiksuokite sieną prie tinklelio linijos (linijos tinklelio sluoksnyje su jos žyma tekste viename gale), arba išilgai jos, arba vienu galu ant jos. Išilgai linijos užfiksuota siena išlaiko atstumą, kurį turi nuo jos. Perkelkite tinklelio liniją su `GRIDMOVE`, ir siena seka visa, kartu su savo sujungtomis sienomis. Siena, gulinti išilgai tinklelio linijos, juda visa kartu su ja net be fiksavimo, o siena, kuri tik baigiasi ant linijos, ištempiama tuo galu.
- `WALLHOLDS` išvardija fiksavimus. `WALLUNHOLD` nuima fiksavimus nuo sienos.
- Kiekvienas fiksavimas plane rodomas mažos spynelės ženklu: šalia užfiksuotos sienos vidurio arba šalia galo, užfiksuoto prie tinklelio linijos. Spustelėkite spynelę, kad nuimtumėte tą fiksavimą.

## Kas dar neįgyvendinta

Fiksavimai naudoja sienų centro linijas. Čia sienos neturi sluoksnių, todėl sankryžoje nėra sluoksnių prioriteto, o sienos nesilenkia (žr. lankus aukščiau). Šių priemonių dar niekas nebandė dideliame brėžinyje, ir jos nepatikrintos kitoje CAD programoje.
