---
title: Blokų kūrimas ir įterpimas
summary: Paverskite nubrėžtas duris bloku, įterpkite jį kitose vietose, kitokiais mastelio ir pasukimo kampais bei sutvarkykite nenaudojamus blokus.
keywords: blokas, bmake, insert, ddinsert, simbolis, purge, explode, redefine, bazinis taškas, nuoroda, count, bcount, žiniaraštis, csv, atributai, duomenų išgavimas
from: 125a129d
---

## Ką sukursite

Durų simbolis, paverstas bloku `DOOR-900`, tada įterptas tris kartus: kaip nubrėžtas, pasuktas 90 laipsnių ir atspindėtas.

Blokas yra pavadintas objektų rinkinys. Jį nubrėžiate vieną kartą; kiekviena vieta, kurioje jį naudojate, yra **bloko nuoroda**, rodanti į tą patį apibrėžimą. Skyrius {{ui:Blokai}} kairiajame skydelyje išvardija brėžinio blokus ir nurodo, kiek kartų kiekvienas naudojamas.

## Nubrėžkite duris

1. Įveskite `L` ir paspauskite {{key:Enter}}.
2. Įveskite `0,0` ir paspauskite {{key:Enter}}.
3. Įveskite `@0,900` ir paspauskite {{key:Enter}}, tada dar kartą paspauskite {{key:Enter}}. Tai durų varnas.
4. Įveskite `A` ir paspauskite {{key:Enter}}.
5. Įveskite `C` ir paspauskite {{key:Enter}}, kad pirmiausia nurodytumėte centrą.
6. Įveskite `0,0` ir paspauskite {{key:Enter}} centrui nurodyti.
7. Įveskite `900,0` ir paspauskite {{key:Enter}} pradžios taškui.
8. Įveskite `0,900` ir paspauskite {{key:Enter}} pabaigos taškui. Tai atidarymo lankas.
9. Spustelėkite {{ui:Visas brėžinys}}.

Lankai braižomi prieš laikrodžio rodyklę nuo pradžios taško iki pabaigos taško.

## Sukurkite bloką

1. Įveskite `B` ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Sukurti}} grupėje „Blokai“.
2. Prie `Enter block name` įveskite `DOOR-900` ir paspauskite {{key:Enter}}.
3. Prie `Specify insertion base point` įveskite `0,0` ir paspauskite {{key:Enter}}. Tai vyris: taškas, kuris atsiduria ten, kur padedate bloką.
4. Prie `Select objects` vilkite langą aplink varną ir lanką.
5. Paspauskite {{key:Enter}}.

Istorijoje parašoma: `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Skydelyje {{ui:Blokai}} DOOR-900 rodomas su `1×` šalia: viena nuoroda. Spustelėkite duris: dabar jos pažymimos kaip vienas objektas, „Bloko nuoroda“.

:::tip
Galite pirmiausia pažymėti objektus, tada įvesti `B`. CadCraft vis tiek paklaus pavadinimo ir bazinio taško, o tada naudos jūsų pažymėtus objektus.
:::

## Įterpkite bloką

1. Įveskite `I` ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Įterpti}} šalia DOOR-900 skydelyje {{ui:Blokai}}.
2. Prie `Enter block name or [File/Library] <DOOR-900>` paspauskite {{key:Enter}}. (Skydelio mygtukas {{ui:Įterpti}} pats įrašo pavadinimą.)
3. Durys seka kryžiuką. Spustelėkite, kur turi būti vyris.

Atsiranda antrosios durys.

## Įterpkite pasuktą arba pakeisto mastelio

1. Įveskite `I` ir paspauskite {{key:Enter}}, tada paspauskite {{key:Enter}}, kad patvirtintumėte pavadinimą.
2. Prie `Specify insertion point [Scale/Rotate]` įveskite `R` ir paspauskite {{key:Enter}}.
3. Įveskite `90` ir paspauskite {{key:Enter}}. Peržiūra pasisuka.
4. Spustelėkite, kad padėtumėte.

Vietoj to įveskite `S`, jei norite nustatyti mastelio koeficientą; jis taikomas abiem kryptimis. Mastelis ir pasukimas įsimenami kitam įterpimui. Norėdami atspindėti duris, įterpkite jas, tada naudokite {{cmd:MIRROR}} ant nuorodos.

## Pakeiskite įdėtą bloką

Pažymėkite bloko nuorodą. Dešiniajame skydelyje galite pakeisti {{ui:X}}, {{ui:Y}}, {{ui:Mastelis X}}, {{ui:Mastelis Y}} ir {{ui:Pasukimas}}. Neigiamas {{ui:Mastelis X}} apverčia bloką.

## Iš naujo apibrėžkite bloką

Norėdami pakeisti visas duris iš karto, sukurkite bloką tuo pačiu pavadinimu:

1. Nubrėžkite naująją durų versiją.
2. Įveskite `B` ir paspauskite {{key:Enter}}, tada įveskite `DOOR-900`.
3. Prie `Block "DOOR-900" already exists. Redefine it?` įveskite `Y` ir paspauskite {{key:Enter}}.
4. Nurodykite bazinį tašką ir pažymėkite naujus objektus, kaip anksčiau.

Kiekviena DOOR-900 nuoroda dabar rodo naująją versiją.

Arba redaguokite patį bloką: {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Redaguoti bloką}} ({{cmd:BEDIT}}) atidaro jį atskirai, o {{ui:Įrašyti bloką}} jį grąžina. Žr. [Bloko atributai](topic:attributes#change-a-block-the-block-editor).

## Suskaičiuokite blokus ir eksportuokite žiniaraštį

Įveskite {{cmd:COUNT}} (arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Suskaičiuoti blokus}}), tada:

- spustelėkite vienas duris: šioje erdvėje pažymimos visos durys, o istorijoje parašoma, kiek jų yra čia ir visame brėžinyje;
- arba paspauskite {{key:Enter}}: istorijoje išvardijami visi blokai su jų skaičiais, daugiausia – pirmiausia;
- arba įveskite `E`, tada `C` – CSV su skaičiais (modelyje, lapuose, iš viso), arba `A` – po eilutę kiekvienai nuorodai su jos sluoksniu, pozicija, pasukimu ir visomis atributų reikšmėmis: žiniaraštis, kurį galima atidaryti skaičiuoklėje.

Nepavadinti blokai (matmenys, lentelės) ir nuorodos vidiniuose blokuose neskaičiuojamos. Langeliai, prasidedantys kaip formulė (`=`, `+`, `-`, `@`), gauna priekyje `'`, kad skaičiuoklė juos rodytų kaip tekstą.

## Išskaidykite ir išvalykite

- {{cmd:EXPLODE}} (`X`) pažymėtą bloko nuorodą paverčia atskirais objektais. Apibrėžimas lieka.
- {{cmd:PURGE}} (`PU`) pašalina bloko apibrėžimus, kurių niekas nebenaudoja. Istorijoje parašoma, kiek jų pašalinta.

## Bloko pavadinimai

Pavadinimas gali būti iki 255 simbolių ir gali turėti tarpų, bet negali prasidėti žvaigždute ir negali turėti simbolių `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ar kairiojo kabutės ženklo (`` ` ``). Įrašant DXF R12, pavadinimai rašomi didžiosiomis raidėmis, kiti simboliai, nei raidės, skaitmenys, `$`, `_` ir `-`, tampa `_`, o pavadinimai sutrumpinami iki 31 simbolio; istorijoje parašoma, kiek jų pakeista. Trumpi pavadinimai didžiosiomis raidėmis, skaitmenimis ir brūkšneliais, kaip `DOOR-900`, išlieka nepakitę. Įrašytas DWG išsaugo pavadinimus taip, kaip įvedėte, didžiosiomis ir mažosiomis raidėmis; keičiami tik simboliai, kurių DWG neleidžia (`|` tampa `$0$`, kiti – `_`).

## Įrašykite bloką arba objektus atskiru failu

Įveskite `W` ({{cmd:WBLOCK}}) ir pasirinkite **Objektai**, **Blokas** arba **Visas brėžinys**. Rezultatas – naujas DWG arba DXF, kuriame yra tik sluoksniai, stiliai ir blokai, kuriuos jis naudoja, o pradžios tašku tampa jūsų bazinis taškas. Objektus galite palikti, paversti bloku arba ištrinti iš šio brėžinio.

## Dažnos klaidos

- **Blokas nukrito toli nuo kryžiuko.** Bazinis taškas nebuvo ant objektų. Sukurkite bloką iš naujo, bazinį tašką padėdami ant kampo arba vyrio.
- **„No objects selected; nothing made.“** Paspaudėte {{key:Enter}} prieš pažymėdami ką nors.
- **„This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK).“** Šiame brėžinyje blokų dar nėra. Įveskite `F`, kad atsineštumėte bloką iš kito brėžinio, arba `L` – iš bibliotekos. Žr. [Įterpimas iš failo ar bibliotekos](topic:insert-from-file-and-library).
- **„A viewport cannot go in a block.“** Neįtraukite vaizdo langų rėmelių į pažymėjimą.
