---
title: Įdėkite plieno profilius ir standartines detales
summary: Nubraižykite plieno profilius, kraštinius vaizdus ir 3D elementus pagal paskelbtas profilių lenteles, įdėkite varžtus, veržles, poveržles, kaiščius, guolius, raktus ir krumpliaračius pagal jų standartus bei išvardykite juos detalių sąraše.
keywords: plienas, profilis, forma, W forma, plačiasparnis, dvitėjis, kanalas, kampinis, HSS, vamzdis, ipe, hea, heb, upn, sija, kolona, elementas, kraštinis vaizdas, aisc, en 10365, varžtas, sraigtas, veržlė, poveržlė, kaištis, įvorė, guolis, raktas, rakto griovelis, krumpliaratis, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standartinės detalės, detalių sąrašas, specifikacija, bom, steelmember, partslist
from: 547c1048
---

Bibliotekos skirtuke {{ui:Standartinis}} yra du tipų dalykai, sukurti čia pat pagal paskelbtas lenteles (nieko neatsisiunčiama):

- **Plieno profiliai**: 1,335 dydžiai. W, S, C, L, HSS ir Pipe iš AISC Shapes Database v16.0; IPE, HEA, HEB ir UPN iš EN 10365:2017. DetailCraft naudoja tą pačią lentelę.
- **Standartinės detalės**: šešiakampės galvutės sraigtai (ISO 4017), šešiakampiai varžtai (ISO 4014), šešiakampės veržlės (ISO 4032), paprastos poveržlės (ISO 7089), coliniai šešiakampiai varžtai ir veržlės (ASME B18.2.1 ir B18.2.2), lygiagretūs kaiščiai (ISO 2338), gilių griovelių rutuliniai guoliai (ISO 15), lygiagretūs raktai (DIN 6885-1) ir tiesiadančiai krumpliaračiai (moduliai iš ISO 54).

Visa čia pateikta yra bendrinama pagal CC0: naudokite bet kam, autoriaus nurodyti nereikia.

## Įdėkite plieno profilį

1. Atidarykite biblioteką ({{ui:Biblioteka}} grupėje Blokai arba įveskite `LIB`) ir spustelėkite skirtuką {{ui:Standartinis}}.
2. Pirmame sąraše pasirinkite šeimą, pavyzdžiui {{ui:W profiliai}}. Įveskite paieškos lauke, kad susiaurintumėte dydžius: `W12` parodo visus W12.
3. Lauke {{ui:Įdėti kaip}} pasirinkite:
   - {{ui:Pjūvis}}: skerspjūvis, kurio centras yra įterpimo taške.
   - {{ui:Kota}}: elementas, matomas iš šono, toks ilgas, kaip nurodo {{ui:Ilgis (mm)}}, nuo vidurio kairiojo galo.
   - {{ui:3D elementas}}: kietasis kūnas skirtuke 3D (žemiau).
4. Spustelėkite {{ui:Įterpti}} ant dydžio kortelės, tada spustelėkite, kur jis turi būti, kaip su bet kuriuo bibliotekos elementu.

Pjūvis ar kraštinis vaizdas tampa bloku. Jo atributuose yra dydis, lentelė, iš kurios jis paimtas, ilgis (kraštiniam vaizdui) ir medžiaga, kurią galite įrašyti.

:::note
S profiliai, kanalai ir UPN braižomi su lygiagrečiais flanšais vidutinio storio, o kampai – su stačiais kampais: tikrieji flanšai yra nuožulnūs, o kampai suapvalinti. W, IPE, HEA ir HEB turi šaknies suapvalinimus, o HSS – kampų spindulius.
:::

## Sukurkite 3D elementą

Pasirinkite {{ui:3D elementas}} ir spustelėkite {{ui:Įterpti}}, arba komandų eilutėje įveskite {{cmd:STEELMEMBER}} (`SMEMBER`):

1. Ties `Pjūvio dydis` paspauskite {{key:Enter}}, kad būtų rodomas dydis, arba įveskite kitą, pavyzdžiui `HSS6x6x1/4` ar `IPE300`.
2. Spustelėkite pradžios tašką, tada galo tašką. Elementas eina tarp jų, stovėdamas ant žemės.
3. Kolonai įveskite [Kolona (C)], spustelėkite jos pagrindo tašką ir įveskite aukštį.

Elementas yra uždarytas kietasis kūnas skirtuke 3D. Perkelkite ar kopijuokite jį ten kaip bet kurį kitą kietąjį kūną. {{key:Mod+Z}} jį pašalina.

## Įdėkite standartinę detalę

1. Skirtuke {{ui:Standartinis}} pasirinkite šeimą, pavyzdžiui {{ui:Šešiakampės galvutės sraigtai}}.
2. Sraigtui, varžtui, kaiščiui ar raktui įveskite jo {{ui:Ilgis (mm)}} (coliniams šeimoms – coliais). Krumpliaračiui įveskite {{ui:Dantys}}, {{ui:Paviršiaus plotis (mm)}} ir {{ui:Anga (mm)}}. Palikite langelį tuščią, kad būtų naudojama jame rodoma įprasta reikšmė.
3. Spustelėkite {{ui:Įterpti}} ant dydžio ir spustelėkite, kur jis turi būti.

Sraigtai, varžtai ir kaiščiai braižomi iš šono, o galvutės atraminis paviršius yra įterpimo taške; veržlės, poveržlės, guoliai ir krumpliaračiai braižomi iš priekio; raktai – iš viršaus. Sriegiai braižomi įprastai: šaknis – plona linija, sriegio galas – storesne linija. Krumpliaračiai braižomi kaip viršūnės apskritimas, padalos apskritimas ir šaknies apskritimas, o ne dantis po danties.

Kiekvieno elemento blokas turi savo tipą, standartą, dydį, ilgį ir medžiagą kaip atributus, o jo svoris apskaičiuojamas pagal nominalų plieno profilį. Medžiagą keiskite skydelyje {{ui:Ypatybės}}.

Tos pačios detalės bibliotekoje yra ir kaip elementai, o PartCraft jas atidaro kaip parametrines detales (Standartinė detalė jos grupėje Failas).

## Sudarykite detalių sąrašą

- Bibliotekoje spustelėkite {{ui:Detalių sąrašas}}: kiekviena standartinė detalė ir plieno profilis brėžinyje, sugrupuoti pagal tipą, standartą, dydį, ilgį ir medžiagą, su kiekiu ir eilės numeriais. {{ui:Atsisiųsti CSV}} įrašo jį skaičiuoklei.
- Norėdami jį nubraižyti, įveskite {{cmd:PARTSLIST}} (`PLIST`), spustelėkite viršutinį kairįjį lentelės kampą ir paspauskite {{key:Enter}}, kad būtų naudojamas įprastas teksto aukštis, arba įveskite savo.

Sąrašas skaitomas iš blokų atributų, todėl jis išlieka teisingas, kai brėžinys įrašomas kaip DWG ar DXF ir vėl atidaromas.

## Dažnos klaidos

- **„Nėra plieno profilio, vadinamo …“**: įveskite dydį taip, kaip jį rodo skirtukas {{ui:Standartinis}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Elementas yra skirtuke 3D, ne plane.** {{cmd:STEELMEMBER}} sukuria kietąjį kūną; atidarykite skirtuką 3D, kad jį pamatytumėte. Norėdami parodyti plieną plane, taip pat įdėkite {{ui:Pjūvis}} ar {{ui:Kota}}.
- **Ilgis už ribų.** Varžtas turi būti ilgesnis už savo galvutę, o raktas – ilgesnis už savo plotį. Eilutė po kortelėmis nurodo, kuri reikšmė atmesta.
