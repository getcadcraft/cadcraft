---
title: Brėžinį tvarkykite sluoksniais
summary: Sukurkite sluoksnius sienoms, durims ir pastaboms, nustatykite spalvas, padarykite sluoksnį dabartiniu ir išjunkite, užšaldykite, užrakinkite arba neleiskite jo spausdinti.
keywords: sluoksnis, sluoksniai, la, dabartinis sluoksnis, užšaldyti, atšaldyti, užrakinti, išjungti, įjungti, spausdinti, nespausdinti, spalva, sluoksnio ypatybės, layiso, layuniso, izoliuoti, layoff, layfrz, laymcur, layon, laythw, pervadinti, laymrg, sujungti, laydel, naikinti sluoksnį
from: cd033591
---

## Ką sukursite

Trys sluoksniai: Walls, Doors ir Notes, kiekvienas su savo spalva, su objektais, nubraižytais ant kiekvieno, ir objektais, perkeltais tarp jų.

## Sluoksnių skydelis

Sluoksniai yra kairiajame skydelyje, po {{ui:Sluoksniai}}. Kiekvienoje eilutėje iš kairės į dešinę rodoma:

- taškas: užpildytas **dabartiniam** sluoksniui, į kurį dedami nauji objektai;
- spalvos pavyzdys;
- sluoksnio pavadinimas;
- keturi mygtukai: įjungti/išjungti (akis), užšaldyti (snaigė), užrakinti (spyna) ir spausdinti (spausdintuvas).

Kiekviename brėžinyje yra sluoksnis, vadinamas `0`. Įvedus `LA` ir paspaudus {{key:Enter}}, pereinama į skydelį.

## Sukurkite sluoksnius

1. Spustelėkite {{ui:Naujas sluoksnis}} virš sąrašo. Atsidaro pavadinimo langelis.
2. Įveskite `Walls` ir paspauskite {{key:Enter}} (arba spustelėkite {{ui:Pridėti}}).

Būsenos juostoje rašoma: „Pridėtas sluoksnis Walls ir padarytas dabartiniu.“ Naujas sluoksnis gauna 7 spalvą (šviesioje temoje juoda, tamsioje – balta).

3. Dar kartą spustelėkite {{ui:Naujas sluoksnis}}, įveskite `Doors` ir paspauskite {{key:Enter}}.
4. Dar kartą spustelėkite {{ui:Naujas sluoksnis}}, įveskite `Notes` ir paspauskite {{key:Enter}}.

Dabar dabartinis yra Notes.

## Kiekvienam sluoksniui nustatykite spalvą

1. Spustelėkite spalvos pavyzdį Walls eilutėje. Atsidaro jūsų sistemos spalvų parinkiklis.
2. Pasirinkite spalvą ir patvirtinkite.

Pasikeičia spalvos pavyzdys ir visi Walls sluoksnio objektai, kurių spalva yra {{ui:Pagal sluoksnį}}.

:::note
Pasirinkta spalva, sutampanti su viena iš 255 standartinių CAD spalvų, įrašoma kaip tas numeris. Bet kuri kita spalva CadCraft išsaugoma tiksliai, tačiau DWG ar DXF faile įrašoma kaip artimiausia standartinė spalva.
:::

## Braižykite sluoksnyje

1. Spustelėkite sluoksnio pavadinimą **Walls** sąraše. Jo taškas užsipildo, o būsenos juostoje rašoma: „Dabartinis sluoksnis: Walls“.
2. Nubraižykite stačiakampį (`REC`). Jis atsidurs sluoksnyje Walls.
3. Spustelėkite **Doors** ir nubraižykite lanką (`A`). Jis atsidurs sluoksnyje Doors.

Dabartinį sluoksnį taip pat galite pasirinkti dešinėje esančiame {{ui:Dabartiniai nustatymai}} skyriuje (kai nieko nepasirinkta), po {{ui:Sluoksnis}}.

## Perkelkite objektus į kitą sluoksnį

1. Pasirinkite objektus.
2. Dešiniajame skydelyje pasirinkite naują sluoksnį lauke {{ui:Sluoksnis}}.

Jie perkeliami į tą sluoksnį ir perima jo spalvą, jei jų spalva yra {{ui:Pagal sluoksnį}}.

## Išjungti, užšaldyti, užrakinti ir spausdinti

| Mygtukas | Ką daro |
|---|---|
| Įjungti/išjungti (akis) | Paslepia sluoksnio objektus. Jų negalima matyti, pasirinkti ar prisegti. |
| Užšaldyti (snaigė) | CadCraft turi tokį patį poveikį kaip išjungimas. Laikoma atskirai, nes kitos programos į juos žiūri skirtingai, o nustatymas išsaugomas. |
| Užrakinti (spyna) | Objektai lieka matomi ir į juos galima prisegti, bet jų negalima pasirinkti ar keisti. Tinka fonui, kurį perbraižote. |
| Spausdinti (spausdintuvas) | Įjungus sluoksnis rodomas ekrane, bet **neįtraukiamas į spaudinius** ir PDF. Naudokite konstrukcinėms linijoms ir sau skirtoms pastaboms. |

Užvedę pelę ant mygtuko, pamatysite, ką jis darys („Išjungti“, „Užšaldyti“, „Užrakinti“, „Nespausdinti šio sluoksnio“).

Dabartinio sluoksnio išjungti negalima: būsenos juostoje rašoma: „Tai dabartinis sluoksnis. Pirmiausia padarykite dabartiniu kitą sluoksnį.“ Spustelėjus sluoksnio pavadinimą, kad jis taptų dabartiniu, jis taip pat įjungiamas ir atšaldomas.

Kiekvienas sluoksnio pakeitimas, skydelyje ar komanda, yra vienas anuliavimo žingsnis: {{key:Mod+Z}} jį atstato.

## Dirbkite su sluoksniais pasirinkdami objektus

Sluoksnio pavadinimo žinoti nereikia: pasirinkite jame esantį objektą. Įveskite komandą arba atidarykite {{ui:Įrankiai}} viršuje, skydelyje {{ui:Sluoksniai}}.

| Komanda | Ką daro |
|---|---|
| {{cmd:LAYISO}} | Pasirinkite objektus ir paspauskite {{key:Enter}}: įjungti lieka tik jų sluoksniai, visi kiti išjungiami. Jei dabartinis sluoksnis išjungiamas, dabartiniu tampa vienas iš izoliuotų sluoksnių. |
| {{cmd:LAYUNISO}} | Vėl įjungia sluoksnius, kuriuos paskutinė {{cmd:LAYISO}} išjungė, ir grąžina dabartinį sluoksnį, kurį ji pakeitė. |
| {{cmd:LAYOFF}} | Spustelėkite objektus vieną po kito: kiekvieno sluoksnis išjungiamas. Įveskite `U`, kad atšauktumėte paskutinį, {{key:Enter}} – kad baigtumėte. |
| {{cmd:LAYFRZ}} | Tas pats, bet sluoksnius užšaldo. |
| {{cmd:LAYMCUR}} | Spustelėkite objektą: jo sluoksnis tampa dabartiniu (ir įjungiamas bei atšaldomas). Jei jau pasirinktas vienas objektas, naudojamas jis. |
| {{cmd:LAYON}} | Įjungia visus sluoksnius. |
| {{cmd:LAYTHW}} | Atšaldo visus sluoksnius. |

Dabartinis sluoksnis šiuo būdu niekada neišjungiamas ir neužšaldomas: istorijoje tai nurodoma, o pirmiausia galite padaryti kitą sluoksnį dabartiniu naudodami {{cmd:LAYMCUR}}. Pasirinkus bloko nuorodą, naudojamas paties nuorodos sluoksnis.

## Pervadinkite, sujunkite ir naikinkite sluoksnius

- {{cmd:RENAME}}: įveskite `LA`, senąjį pavadinimą ir naująjį. Kiekvienas sluoksnio objektas pereina prie naujo pavadinimo. (`B` pervadina bloką taip pat, kartu su visomis jo nuorodomis.)
- {{cmd:LAYMRG}}: spustelėkite objektą kiekviename sujungiamame sluoksnyje (arba įveskite `N` ir pavadinimą), paspauskite {{key:Enter}}, tada pasirinkite paskirties sluoksnį ir atsakykite `Y`. Objektai perkeliami į paskirties sluoksnį – modelyje, lapuose ir blokuose, o sujungti sluoksniai pašalinami.
- {{cmd:LAYDEL}}: pasirinkite objektą sluoksnyje (arba `N` ir jo pavadinimą) ir atsakykite `Y`. Sluoksnis pašalinamas **kartu su visais jame esančiais objektais**, visur. Sluoksnio 0, DEFPOINTS ir dabartinio sluoksnio naikinti negalima.

Kiekvienas yra vienas anuliavimo žingsnis. Visi trys yra {{ui:Įrankiai}} viršuje, skydelyje {{ui:Sluoksniai}}.

1. Spustelėkite vieną sienos liniją, tada įveskite `LAYISO` ir paspauskite {{key:Enter}}. Įjungtas lieka tik Walls.
2. Nubraižykite arba pakeiskite, ko reikia, sluoksnyje Walls.
3. Įveskite `LAYUNISO` ir paspauskite {{key:Enter}}. Doors ir Notes grįžta.

## Dažniausios klaidos

- **Naujos linijos atsidūrė klaidingame sluoksnyje.** Prieš braižydami patikrinkite, kuris taškas užpildytas. Naujas sluoksnis tampa dabartiniu, kai tik jį pridedate.
- **Objekto nepavyksta pasirinkti.** Jo sluoksnis užrakintas, išjungtas arba užšaldytas.
- **Sluoksnis vis dar spausdinamas kitoje programoje.** DXF R12 negali saugoti „nespausdinti“. CadCraft nustatymą išsaugo pats, kai brėžinys turi lapą, bet kitos programos tą sluoksnį spausdins.
- **Išsaugojus sluoksnių pavadinimai rašomi didžiosiomis raidėmis.** DXF R12 saugo pavadinimus didžiosiomis raidėmis, todėl `Walls` grįžta kaip `WALLS`, o tarpai virsta `_`. Išsaugotas DWG saugo pavadinimus taip, kaip įvedėte.
- **Pervadinant, sujungiant ar naikinant sluoksnį.** Naudokite {{cmd:RENAME}}, {{cmd:LAYMRG}} arba {{cmd:LAYDEL}} (taip pat {{ui:Įrankiai}}): žr. žemiau.

## Grupuokite sluoksnius

Sąrašą laikykite trumpą, sluoksnius dėdami į aplankus, pvz., Existing, Proposed ir Services. Kiekvienas aplankas sutraukiamas, o jo jungikliai įjungia arba išjungia visus jo sluoksnius, užšaldo juos ar užrakina kartu. Dabartinis sluoksnis niekada neišjungiamas.

Skydelyje {{ui:Sluoksniai}} spustelėkite {{ui:Įrankiai}} ir pasirinkite {{ui:Pridėti paruoštas grupes}} – paruoštą grupių rinkinį mažiems gyvenamiesiems darbams, {{ui:Grupuoti pagal pavadinimą}}, kad sugrupuotumėte sluoksnius, turinčius bendrą priešdėlį (`E-Walls`, `E-Doors`), arba {{ui:Nauja grupė}}. Vilkite sluoksnį ant aplanko arba naudokite sąrašą virš sluoksnių dabartiniam sluoksniui. Įveskite {{ui:Rasti sluoksnį}}, kad susiaurintumėte sąrašą. `LAYGROUP` (`LG`) daro tą patį komandų eilutėje.

Patys sluoksniai nesikeičia, todėl kitos CAD programos mato įprastą plokščią sąrašą. CadCraft grupes saugo faile.
