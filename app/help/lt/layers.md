---
title: Brėžinio tvarkymas su sluoksniais
summary: Sukurkite sluoksnius sienoms, durims ir pastaboms, nustatykite spalvas, padarykite sluoksnį dabartiniu ir išjunkite, užšaldykite, užrakinkite arba neleiskite jų spausdinti.
keywords: sluoksnis, sluoksniai, la, dabartinis sluoksnis, užšaldyti, atšaldyti, užrakinti, išjungti, įjungti, spausdinti, nespausdinti, spalva, sluoksnio ypatybės, layiso, layuniso, izoliuoti, layoff, layfrz, laymcur, layon, laythw, pervadinti, laymrg, sujungti, laydel, ištrinti sluoksnį
from: ba9f0617
---

## Ką sukursite

Tris sluoksnius – Sienos, Durys ir Pastabos –, kiekvienas su savo spalva, su objektais ant kiekvieno ir perkeltais tarp jų.

## Sluoksnių skydelis

Sluoksniai yra kairiajame skydelyje, po {{ui:Sluoksniai}}. Kiekvienoje eilutėje iš kairės į dešinę rodoma:

- taškas: užpildytas – **dabartiniam** sluoksniui, kur atsiranda nauji objektai;
- spalvos pavyzdys;
- sluoksnio pavadinimas;
- keturi mygtukai: įjungti / išjungti (akis), užšaldyti (snaigė), užrakinti (spyna) ir spausdinti (spausdintuvas).

Kiekvienas brėžinys turi sluoksnį pavadinimu `0`. Įvedus `LA` ir paspaudus {{key:Enter}}, pereinama į skydelį.

## Kurti sluoksnius

1. Spustelėkite {{ui:Naujas sluoksnis}} virš sąrašo. Atsidaro pavadinimo langelis.
2. Įveskite `Sienos` ir paspauskite {{key:Enter}} (arba spustelėkite {{ui:Pridėti}}).

Būsenos juostoje rašoma „Pridėtas sluoksnis Sienos ir padarytas dabartiniu.“ Naujas sluoksnis gauna spalvą 7 (juoda šviesioje temoje, balta tamsioje).

3. Dar kartą spustelėkite {{ui:Naujas sluoksnis}}, įveskite `Durys` ir paspauskite {{key:Enter}}.
4. Dar kartą spustelėkite {{ui:Naujas sluoksnis}}, įveskite `Pastabos` ir paspauskite {{key:Enter}}.

Dabar dabartinis yra Pastabos.

## Nustatyti kiekvieno sluoksnio spalvą

1. Spustelėkite spalvos pavyzdį Sienų eilutėje. Atsidaro jūsų sistemos spalvų parinkiklis.
2. Pasirinkite spalvą ir patvirtinkite.

Pavyzdys ir viskas Sienose, nudažyta {{ui:Pagal sluoksnį}}, pasikeičia.

:::note
Pasirinkta spalva, sutampanti su viena iš 255 standartinių CAD spalvų, įrašoma kaip tas numeris. Bet kuri kita spalva CadCraft išlieka tiksliai, bet DWG ar DXF faile išsaugoma kaip artimiausia standartinė spalva.
:::

## Braižyti ant sluoksnio

1. Spustelėkite pavadinimą **Sienos** sąraše. Jo taškas užpildomas, o būsenos juostoje rašoma „Dabartinis sluoksnis: Sienos“.
2. Nubrėžkite stačiakampį (`REC`). Jis patenka į Sienas.
3. Spustelėkite **Durys** ir nubrėžkite lanką (`A`). Jis patenka į Duris.

Dabartinį sluoksnį taip pat galite pasirinkti skiltyje {{ui:Dabartiniai nustatymai}} dešinėje (nieko nepasirinkus), po {{ui:Sluoksnis}}.

## Perkelti objektus į kitą sluoksnį

1. Pasirinkite objektus.
2. Dešiniajame skydelyje pasirinkite naują sluoksnį {{ui:Sluoksnis}}.

Jie perkeliami į tą sluoksnį ir perima jo spalvą, jei jų spalva yra {{ui:Pagal sluoksnį}}.

## Išjungti, užšaldyti, užrakinti ir spausdinti

| Mygtukas | Ką daro |
|---|---|
| Įjungti / išjungti (akis) | Paslepia sluoksnio objektus. Jų negalima matyti, pasirinkti ar prie jų prilipti. |
| Užšaldyti (snaigė) | CadCraft tas pats poveikis kaip išjungti. Laikoma atskirai, nes kitos programos su jais elgiasi skirtingai, ir nustatymas išsaugomas. |
| Užrakinti (spyna) | Objektai lieka matomi ir prie jų galima prilipti, bet jų negalima pasirinkti ar keisti. Tinka fonui, kurį perbraižote. |
| Spausdinti (spausdintuvas) | Kai įjungtas, sluoksnis rodomas ekrane, bet **neįtraukiamas į spausdinimus** ir PDF. Naudokite konstrukcinėms linijoms ir sau skirtoms pastaboms. |

Užveskite pelę ant mygtuko, kad pamatytumėte, ką jis darys („Išjungti“, „Užšaldyti“, „Užrakinti“, „Nespausdinti šio sluoksnio“).

Dabartinio sluoksnio išjungti negalite: būsenos juostoje rašoma „Tai dabartinis sluoksnis. Pirmiausia padarykite kitą sluoksnį dabartiniu.“ Spustelėjus sluoksnio pavadinimą, kad jis taptų dabartiniu, jis taip pat įjungiamas ir atšaldomas.

Kiekvienas sluoksnio pakeitimas skydelyje ar komanda yra vienas atšaukimo žingsnis: {{key:Mod+Z}} jį grąžina.

## Dirbti su sluoksniais pasirenkant objektus

Jums nereikia žinoti sluoksnio pavadinimo: pasirinkite ant jo esantį objektą. Įveskite komandą arba atidarykite {{ui:Įrankiai}} viršuje {{ui:Sluoksniai}} skydelio.

| Komanda | Ką daro |
|---|---|
| {{cmd:LAYISO}} | Pasirinkite objektus ir paspauskite {{key:Enter}}: lieka įjungti tik jų sluoksniai, visi kiti išjungiami. Jei dabartinis sluoksnis išjungtas, vienas izoliuotų sluoksnių tampa dabartiniu. |
| {{cmd:LAYUNISO}} | Vėl įjungia sluoksnius, kuriuos paskutinė {{cmd:LAYISO}} išjungė, ir grąžina dabartinį sluoksnį, kurį ji pakeitė. |
| {{cmd:LAYOFF}} | Spustelėkite objektus vieną po kito: kiekvieno sluoksnis išjungiamas. Įveskite `U`, kad atšauktumėte paskutinį, {{key:Enter}} – baigti. |
| {{cmd:LAYFRZ}} | Tas pats, bet užšaldant kiekvieną sluoksnį. |
| {{cmd:LAYMCUR}} | Spustelėkite objektą: jo sluoksnis tampa dabartiniu (ir įjungiamas bei atšaldomas). Jei jau pasirinktas vienas objektas, naudojamas jis. |
| {{cmd:LAYON}} | Įjungia visus sluoksnius. |
| {{cmd:LAYTHW}} | Atšaldo visus sluoksnius. |

Dabartinis sluoksnis taip neišjungiamas ir neužšaldomas: istorijoje tai nurodoma, o pirmiausia galite padaryti kitą sluoksnį dabartiniu su {{cmd:LAYMCUR}}. Pasirinkus bloko nuorodą, naudojamas pačios nuorodos sluoksnis.

## Pervadinti, sujungti ir ištrinti sluoksnius

- {{cmd:RENAME}}: įveskite `LA`, senąjį pavadinimą ir naująjį. Kiekvienas sluoksnio objektas seka. (`B` taip pervadina bloką, su visomis jo nuorodomis.)
- {{cmd:LAYMRG}}: spustelėkite objektą kiekviename sluoksnyje, kurį jungiate (arba įveskite `N` ir pavadinimą), paspauskite {{key:Enter}}, tada pasirinkite tikslinį sluoksnį ir atsakykite `Y`. Objektai perkeliami į tikslinį – modelyje, lapuose ir blokuose – o sujungti sluoksniai išnyksta.
- {{cmd:LAYDEL}}: pasirinkite objektą sluoksnyje (arba `N` ir jo pavadinimą) ir atsakykite `Y`. Sluoksnis išnyksta **su visais jame esančiais objektais**, visur. Sluoksnio 0, DEFPOINTS ir dabartinio sluoksnio ištrinti negalima.

Kiekviena yra vienas atšaukimo žingsnis. Visos trys yra {{ui:Įrankiai}} viršuje {{ui:Sluoksniai}} skydelio.

1. Spustelėkite vieną sienos liniją, tada įveskite `LAYISO` ir paspauskite {{key:Enter}}. Lieka įjungtos tik Sienos.
2. Nubrėžkite arba pakeiskite, ko reikia, Sienose.
3. Įveskite `LAYUNISO` ir paspauskite {{key:Enter}}. Durys ir Pastabos grįžta.

## Dažnos klaidos

- **Naujos linijos atsidūrė neteisingame sluoksnyje.** Prieš braižydami patikrinkite, kuris taškas užpildytas. Naujas sluoksnis tampa dabartiniu, kai tik jį pridedate.
- **Objekto nepavyksta pasirinkti.** Jo sluoksnis užrakintas, išjungtas arba užšaldytas.
- **Sluoksnis vis dar spausdinamas kitoje programoje.** DXF R12 negali saugoti „nespausdinti“. CadCraft išsaugo šį nustatymą sau, kai brėžinys turi lapą, bet kitos programos tą sluoksnį atspausdins.
- **Sluoksnių pavadinimai didžiosiomis raidėmis po įrašymo.** DXF R12 saugo pavadinimus didžiosiomis raidėmis, todėl `Sienos` grįžta kaip `SIENOS`, o tarpai tampa `_`. Įrašytas DWG išlaiko pavadinimus taip, kaip įvedėte.
- **Sluoksnio pervadinimas, sujungimas ar ištrynimas.** Naudokite {{cmd:RENAME}}, {{cmd:LAYMRG}} arba {{cmd:LAYDEL}} (taip pat {{ui:Įrankiai}}): žr. aukščiau.

## Grupuoti sluoksnius

Kad sąrašas būtų trumpas, sluoksnius dėkite į aplankus, pavyzdžiui Esami, Projektuojami ir Inžineriniai tinklai. Kiekvienas aplankas sulankstomas, o jo jungikliai įjungia arba išjungia visus jo sluoksnius, užšaldo ar užrakina juos kartu. Dabartinis sluoksnis niekada neišjungiamas.

Skydelio {{ui:Įrankiai}} sluoksnių skyriuje pasirinkite {{ui:Pridėti paruoštas grupes}} – rinkinį, skirtą mažiems gyvenamiesiems darbams, {{ui:Grupuoti pagal pavadinimą}} – sugrupuoti sluoksnius, turinčius bendrą priešdėlį (`E-Sienos`, `E-Durys`), arba {{ui:Nauja grupė}}. Vilkite sluoksnį ant aplanko arba naudokite sąrašą virš sluoksnių dabartiniam sluoksniui. Įveskite {{ui:Rasti sluoksnį}}, kad susiaurintumėte sąrašą. `LAYGROUP` (`LG`) tą patį daro komandų eilutėje.

Norėdami pervadinti grupę, dukart spustelėkite jos pavadinimą (arba pasirinkite ir paspauskite {{key:F2}}), įveskite naują pavadinimą ir paspauskite {{key:Enter}}; {{key:Esc}} palieka seną, o {{cmd:UNDO}} jį grąžina. {{ui:Nauja grupė}} yra {{ui:Įrankiai}} sluoksnių skydelyje.

Patys sluoksniai nesikeičia, todėl kitos CAD programos mato juos kaip įprastą plokščią sąrašą. CadCraft grupes išsaugo faile.
