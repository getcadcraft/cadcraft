---
title: Įterpimas iš failo ar bibliotekos
summary: Įkelti bloką arba visą brėžinį iš kito DWG ar DXF failo ir įterpti elementus iš Bibliotekos, failo ar kitos bibliotekos, su autorystės nurodymais ir atnaujinimais.
keywords: įterpti, failas, biblioteka, librarycraft, elementas, įranga, blokas iš kito brėžinio, wblock, dizaino centras, autorystė, nurodymas, licencija, atnaujinimas, srautas, item.json
from: 316188d2
---

## Įterpti bloką iš kito brėžinio

1. Įveskite `I` ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Įterpti}} Blokų grupėje.
2. Prie `Įveskite bloko pavadinimą arba [Failas/Biblioteka (L)]` įveskite `F` ir paspauskite {{key:Enter}}.
3. Pasirinkite DWG arba DXF šiame kompiuteryje. Jis nuskaitomas čia; jis neatveriamas, ir niekas nėra įkeliama.
4. Dialoge {{ui:Įterpti iš}} pasirinkite bloką iš sąrašo (rašykite laukelyje {{ui:Filtruoti blokus}}, kad jį rastumėte), arba palikite {{ui:Visas brėžinys}}. Spustelėkite {{ui:Įterpti}}.
5. Spustelėkite, kur jis turi būti, ir užpildykite visus atributus, kurių jis prašo.

Visas brėžinys įkeliamas kaip vienas blokas, pavadintas pagal failą. Bloke, kurį pasirinkote, esantys blokai įkeliami kartu. Sluoksniai, kuriuos jie naudoja, pridedami prie šio brėžinio.

Jei kito brėžinio vienetai kiti (pavyzdžiui, coliai ir milimetrai), CadCraft pritaiko nuorodos mastelį ir apie tai praneša istorijoje.

### Kai pavadinimas jau naudojamas

Jei šiame brėžinyje jau yra blokas tuo pačiu pavadinimu, CadCraft klausia:

- {{ui:Palikti esamus}} naudoja šio brėžinio bloką tuo pavadinimu.
- {{ui:Pervadinti}} įkelia naują bloką kaip `Pavadinimas (2)`.

Visas įterpimas yra vienas žingsnis: {{key:Mod+Z}} pašalina nuorodą ir nukopijuotus apibrėžimus.

## Atverti biblioteką

Spustelėkite {{ui:Biblioteka…}} {{ui:Blokai}} skydelyje, arba {{ui:Biblioteka}} Blokų grupėje, arba įveskite `LIB`. Prie `INSERT` raginimo `L` taip pat atveria ją.

Bibliotekoje yra keturi šaltiniai, pateikiami skirtukais:

- {{ui:Biblioteka}}: CadCraft biblioteka. Ieškokite pagal pavadinimą, gamintoją ar modelį ir filtruokite pagal kategoriją.
- {{ui:Failai…}}: elementų failas (`item.json`) iš bet kurios bibliotekos arba brėžinys, skaičiuoklė ar 3D modelis, iš kurių kuriami elementai: DWG ar DXF (kiekvienas blokas tampa elementu), CSV su pavadinimo ir dydžio stulpeliais, arba glTF ar OBJ modelis. Niekas neįkeliama.
- {{ui:Standartinis}}: plieno profiliai (kaip pjūviai, fasadai ar 3D elementai) ir standartinės detalės, pavyzdžiui, varžtai, veržlės ir guoliai, sukurti čia pagal paskelbtas lenteles. Žr. [Plieno profilių ir standartinių detalių įterpimas](topic:steel-and-standard-parts).
- {{ui:Kiti srautai}}: kitos bibliotekos, kurios atsako taip pat kaip Biblioteka. Adresą įrašykite vieną kartą; ši naršyklė jį prisimena.

Kiekvienoje kortelėje rodomas peržiūros vaizdas, pavadinimas, gamintojas ir modelis, licencija bei versija. Atšauktas elementas pažymimas {{ui:Atšauktas}} su priežastimi; prieš įterpiant jį, CadCraft klausia.

## Įterpti elementą

1. Kortelėje spustelėkite {{ui:Įterpti}}.
2. Spustelėkite, kur turi būti elementas. Pirmiausia įveskite `R`, kad jį pasuktumėte, arba `S`, kad pakeistumėte mastelį.
3. Prie `Įveskite elemento numerį (CC-ITEM)` paspauskite {{key:Enter}}, kad gautumėte kitą laisvą numerį, arba įveskite savo.

Elementas tampa bloku, pavadintu `LIB_<pavadinimas>_v<versija>`, ir įterpiamas šio brėžinio vienetais. Jei brėžinys neturi vienetų, elementas įterpiamas milimetrais ir apie tai pranešama istorijoje; pirmiausia dešiniajame skydelyje nustatykite {{ui:Vienetai}}.

Jo duomenys keliauja kartu kaip nematomi atributai: elemento id ir versija, licencija ir autorystė, gamintojas, modelis, kategorija ir dydžiai. Žr. [Bloko atributai](topic:attributes).

## Elementai jūsų kalba

Elementas gali turėti pavadinimą ir aprašymą kitomis kalbomis. Kai jie yra kalba, kuria nustatyta CadCraft (Parametrai › Bendra › Kalba), kortelėje ir įterptame bloke rodomas elemento pavadinimas naudoja juos. Pats blokas turi pavadinimą, sudarytą iš paties elemento pavadinimo, todėl brėžinyje kiekvienam elementui tenka vienas blokas, nepriklausomai nuo to, kokia kalba jis įterptas.

## Tikrinti atnaujinimus

1. Atidarykite biblioteką.
2. Spustelėkite {{ui:Tikrinti atnaujinimus}}.

Kiekvienas brėžinio bibliotekos elementas išvardijamas su savo elementų numeriais ir nurodoma, ar jis atnaujintas, ar turi naujesnę versiją (ir kas pasikeitė), ar buvo atšauktas. Spustelėkite {{ui:Atnaujinti}} eilutėje arba {{ui:Atnaujinti visus}}. Kiekviena nuoroda perkeliama į naujos versijos bloką ir išlaiko savo elemento numerį, kiekį, vietą, kampą ir sluoksnį. {{key:Mod+Z}} atšaukia atnaujinimą.

## Nurodykite, ką naudojote

Spustelėkite {{ui:Bibliotekos autoriai}}. Kiekvienas elementas išvardijamas su savo autorystės eilute ir licencija.

- {{ui:Kopijuoti autorystės nurodymą}} nukopijuoja vieno elemento eilutę; {{ui:Kopijuoti viską}} nukopijuoja visas eilutes.
- {{ui:Atsisiųsti CSV}} išsaugo sąrašą su elementų numeriais, gamintojais, modeliais, licencijomis ir autorystės nurodymais. Jį galima atidaryti bet kurioje skaičiuoklėje.

Licencijos, tokios kaip CC BY, reikalauja nurodyti autorių, kur naudojate darbą. Įdėkite šias eilutes į brėžinį, specifikaciją ar projekto pastabas.

## Simboliai ir ištekliai

Bibliotekoje yra trys elementų rūšys: Simboliai (brėžinių susitarimai, 2D), Tipai (iš ko sudarytas elementas) ir Ištekliai (fiziniai objektai). {{ui:Biblioteka}} skirtuke sąrašas {{ui:Elemento rūšis}} rodo Simbolius ir Išteklius kartu, tik Simbolius arba tik Išteklius. Tipai yra tai, iš ko sudaromas BimCraft projektas, todėl CadCraft jų nerodo.

## Prisijungti prie bibliotekos

Spustelėkite {{ui:Prisijungti prie bibliotekos}}. Atsidaro nedidelis langas svetainėje; prisijungus ten, CadCraft gali rodyti jūsų komandos elementus ir registruoti tai, ką įterpiate, kad sužinotumėte, kai pasikeičia naudojamas elementas. Prisijungimas galioja šiam naršyklės skirtukui. Panaikinti jį galite bet kada savo paskyros saugumo puslapyje.

## Dažnos klaidos

- **„Elementų kūrimas iš IFC tipų yra BimCraft programoje.“** IFC ir šeimų failai skaitomi BimCraft programoje. Sukurkite elementą ten arba Bibliotekoje, tada čia naudokite jo `item.json`.
- **„Nepavyko pasiekti bibliotekos.“** Esate neprisijungę arba biblioteka neveikia. Brėžinyje jau esantys elementai nepaveikiami.
- **Elementas per didelis arba per mažas.** Brėžinio vienetai neteisingi arba nenustatyti. Atšaukite, nustatykite {{ui:Vienetai}} ir įterpkite elementą iš naujo.
