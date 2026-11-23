---
title: Įterpti iš failo arba bibliotekos
summary: Įkelkite bloką arba visą brėžinį iš kito DWG ar DXF ir įdėkite elementus iš bibliotekos, failo ar kitos bibliotekos, su jų autorių nuorodomis ir atnaujinimais.
keywords: įterpti, failas, biblioteka, librarycraft, elementas, įranga, blokas iš kito brėžinio, wblock, dizaino centras, autoriai, autorystė, licencija, atnaujinimas, srautas, item.json
from: f6e4e452
---

## Įterpti bloką iš kito brėžinio

1. Įveskite `I` ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Įterpti}} grupėje Blokai.
2. Komandų eilutė apačioje klausia `Įveskite bloko pavadinimą arba [Failas/Biblioteka]`. Įveskite ten `F` ir paspauskite {{key:Enter}}.
3. Pasirinkite DWG arba DXF šiame kompiuteryje. Jis nuskaitomas čia; neatveriamas, ir niekas neįkeliama.
4. Lange {{ui:Įterpti iš}} pasirinkite bloką sąraše (rašykite {{ui:Filtruoti blokus}}, kad rastumėte), arba palikite {{ui:Visas brėžinys}}. Spustelėkite {{ui:Įterpti}}.
5. Spustelėkite, kur jis eis, ir užpildykite atributus, kurių prašo.

Galite pradėti ir iš {{ui:Blokai}} skydelio: įveskite `F` jo lauke {{ui:Filtruoti blokus}} ir paspauskite {{key:Enter}}, arba įveskite ką nors, ko nė vienas blokas neatitinka, ir spustelėkite {{ui:Iš failo…}}. `L` ir {{ui:Biblioteka…}} atveria biblioteką tuo pačiu būdu. Iki 0.10.1 versijos raidė, įvesta lauke {{ui:Filtruoti blokus}}, ieškojo tik šio brėžinio blokų ir atsakė „Nė vienas blokas neatitinka filtro.“

Norėdami turėti savo blokų brėžinį po ranka, spustelėkite {{ui:Pridėti brėžinį}} po {{ui:Bibliotekos}} skyriumi {{ui:Blokų skydelyje}} ir pasirinkite DWG arba DXF. Jo blokai rodomi su paveikslėliais; spustelėkite vieną, kad jį įdėtumėte.

Visas brėžinys įeina kaip vienas blokas, pavadintas pagal failą. Pasirinkto bloko viduje esantys blokai įeina taip pat. Sluoksniai, kuriuos jie naudoja, pridedami prie šio brėžinio.

Jei kitas brėžinys yra kitais vienetais (pvz., coliais ir milimetrais), CadCraft pritaiko nuorodą ir apie tai praneša istorijoje.

### Kai vardas jau naudojamas

Jei šis brėžinys jau turi bloką tokiu pačiu pavadinimu, CadCraft klausia:

- {{ui:Palikti esamus}} naudoja šio brėžinio bloką su tuo pavadinimu.
- {{ui:Pervardyti}} įneša naująjį kaip `Name (2)`.

Visas įterpimas yra vienas žingsnis: {{key:Mod+Z}} pašalina nuorodą ir nukopijuotus apibrėžimus.

## Atverti biblioteką

Spustelėkite {{ui:Biblioteka…}} skydelyje {{ui:Blokai}}, arba {{ui:Biblioteka}} grupėje Blokai, arba įveskite `LIB`. Prie `INSERT` raginimo `L` taip pat ją atveria.

Biblioteka turi keturis šaltinius, kaip skirtukus:

- {{ui:Biblioteka}}: CadCraft biblioteka. Ieškokite pagal pavadinimą, gamintoją ar modelį ir filtruokite pagal kategoriją.
- {{ui:Failai…}}: elementų failas (`item.json`) iš bet kurios bibliotekos arba brėžinys, skaičiuoklė ar 3D modelis, iš kurių kuriami elementai: DWG arba DXF (kiekvienas blokas tampa elementu), CSV su pavadinimo ir dydžio stulpeliais, arba glTF ar OBJ modelis. Nieko neįkeliama.
- {{ui:Standartinis}}: plieno profiliai (kaip pjūviai, fasadai ar 3D elementai) ir standartinės detalės, tokios kaip varžtai, veržlės ir guoliai, pagaminti čia pagal paskelbtas lenteles. Žr. [Plieno profilių ir standartinių detalių įdėjimas](topic:steel-and-standard-parts).
- {{ui:Kiti srautai}}: kitos bibliotekos, kurios atsako taip pat kaip Biblioteka. Adresą pridėkite vieną kartą; ši naršyklė jį prisimins.

Kiekvienoje kortelėje rodoma peržiūra, pavadinimas, gamintojas ir modelis, licencija bei versija. Atšauktas elementas pažymėtas {{ui:Atšauktas}} su priežastimi; CadCraft prieš įdedant klausia.

## Įdėti elementą

1. Spustelėkite {{ui:Įterpti}} kortelėje.
2. Spustelėkite, kur eina elementas. Įveskite `R`, kad jį pasuktumėte, arba `S`, kad keistumėte mastelį.
3. Prie `Įveskite elemento numerį (CC-ITEM)` paspauskite {{key:Enter}} dėl kito laisvo numerio arba įveskite savo.

Elementas tampa bloku pavadinimu `LIB_<name>_v<version>`, nubrėžtu šio brėžinio vienetais. Jei brėžinys neturi vienetų, elementas įdedamas milimetrais, o istorijoje tai nurodoma; pirmiausia nustatykite {{ui:Vienetai}} dešiniajame skydelyje.

Jo duomenys keliauja kartu kaip nematomi atributai: elemento ID ir versija, licencija ir autorystė, gamintojas, modelis, kategorija ir matmenys. Žr. [Bloko atributai](topic:attributes).

## Elementai jūsų kalba

Elementas gali turėti savo pavadinimą ir aprašymą kitomis kalbomis. Kai jie yra CadCraft nustatyta kalba (Parametrai › Bendra › Kalba), kortelė ir įdėto bloko elemento pavadinimas juos naudoja. Pats blokas išlaiko pavadinimą, sudarytą iš elemento savojo pavadinimo, todėl brėžinyje yra vienas blokas vienam elementui, nesvarbu, kuria kalba jį įdėjote.

## Tikrinti atnaujinimus

1. Atverkite biblioteką.
2. Spustelėkite {{ui:Tikrinti atnaujinimus}}.

Kiekvienas bibliotekos elementas brėžinyje išvardijamas su savo elementų numeriais ir nurodoma, ar jis atnaujintas, ar turi naujesnę versiją (ir kas pasikeitė), ar buvo atšauktas. Spustelėkite {{ui:Atnaujinti}} eilutėje arba {{ui:Atnaujinti visus}}. Kiekviena nuoroda pereina į naujos versijos bloką ir išlaiko savo elemento numerį, kiekį, vietą, kampą ir sluoksnį. {{key:Mod+Z}} atšaukia atnaujinimą.

## Nurodykite, ką panaudojote

Spustelėkite {{ui:Bibliotekos autoriai}}. Kiekvienas elementas išvardytas su savo autorystės eilute ir licencija.

- {{ui:Kopijuoti autorystės nurodymą}} nukopijuoja vieno elemento eilutę; {{ui:Kopijuoti viską}} nukopijuoja visas eilutes.
- {{ui:Atsisiųsti CSV}} įrašo sąrašą su elementų numeriais, gamintojais, modeliais, licencijomis ir autorystėmis. Jis atsidaro bet kurioje skaičiuoklėje.

Licencijos, pavyzdžiui CC BY, reikalauja nurodyti autorių, kur naudojate kūrinį. Įdėkite eilutes į brėžinį, specifikaciją arba projekto pastabas.

## Simboliai ir turtas

Bibliotekoje yra trys elementų rūšys: Simboliai (braižymo konvencijos, 2D), Tipai (iš ko elementas sudarytas) ir Turtas (fiziniai objektai). Skirtuke {{ui:Biblioteka}} sąrašas {{ui:Elemento rūšis}} rodo Simbolius ir turtą kartu, tik Simbolius arba tik turtą. Tipai yra tai, iš ko sudaromas BimCraft projektas, todėl CadCraft jų nerodo.

## Prisijungti prie bibliotekos

Spustelėkite {{ui:Prisijungti prie bibliotekos}}. Atsidaro nedidelis langas svetainėje; prisijungus ten, CadCraft gali rodyti jūsų komandos elementus ir registruoti tai, ką įdedate, kad sužinotumėte, kai pasikeičia naudotas elementas. Prisijungimas galioja šiam naršyklės skirtukui. Panaikinkite jį bet kada savo paskyros saugumo puslapyje.

## Saugoti savo objektus skiltyje Mano objektai

{{ui:Mano objektai}} yra privatus sąrašas Bibliotekoje, kurį mato tik jūs. Jo nėra viešoje bibliotekoje ir paieškoje, jis nerodomas jūsų komandai, ir jis seka jūsų paskyrą kiekviename kompiuteryje, kuriame prisijungiate prie bibliotekos.

1. Bibliotekos skydelyje spustelėkite {{ui:Failai…}} ir perskaitykite failą.
2. Ant elemento, kurį norite turėti vėl, spustelėkite {{ui:Saugoti mano objektuose}}.
3. Vėliau spustelėkite {{ui:Mano objektai}} ir spustelėkite {{ui:Įterpti}}. Jis įdedamas kaip bet kuris bibliotekos elementas, ir {{ui:Tikrinti atnaujinimus}} jį apima.
4. {{ui:Pašalinti iš mano objektų}} išima jį iš sąrašo. Jau įdėtos kopijos brėžiniuose lieka.

Turite būti prisijungę prie bibliotekos. Failo skaitymas nieko neįkelia; elemento išsaugojimas siunčia tik tą elementą į jūsų paskyrą.

:::note
„Mano objektai“ yra bandomi ir gali dar nebūti atverti jūsų paskyrai. Jei rodoma „Mano objektai šiai paskyrai dar neatverti“, vis tiek galite įdėti elementus iš savo failų naudodami {{ui:Failai…}}.
:::

## Dažnos klaidos

- **„Elementų kūrimas iš IFC tipų vyksta BimCraft.“** IFC ir šeimos failai skaitomi BimCraft programoje. Sukurkite elementą ten arba Bibliotekoje, tada naudokite jo `item.json` čia.
- **„Bibliotekos nepavyko pasiekti.“** Esate neprisijungę arba biblioteka neveikia. Brėžinyje jau esantiems elementams tai neturi poveikio.
- **Elementas per didelis arba per mažas.** Brėžinio vienetai neteisingi arba nenustatyti. Atšaukite, nustatykite {{ui:Vienetai}} ir įdėkite iš naujo.
