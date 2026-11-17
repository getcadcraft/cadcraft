---
title: Medžiagų žiniaraščiai pagal zonas
summary: Pažymėkite brėžinio sritis kaip zonas ir įdėkite lentelę kiekvienai, kuri suskaičiuoja joje esančius blokus. Lentelės seka brėžinį, kol dirbate, o jūs pasirenkate, kokius stulpelius kiekviena rodo.
keywords: medžiagų žiniaraštis, BOM, detalių sąrašas, žiniaraštis, zona, plotas, lentelė, skaičius, atributas, stulpeliai, elemento numeris, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** yra pavadintas brėžinio plotas. **Medžiagų žiniaraščio lentelė** išvardija, kas yra vienoje zonoje ar visame brėžinyje: kiekvieną bloką su jo kiekiu ir atributų reikšmėmis. Brėžinyje gali būti tiek zonų ir lentelių, kiek reikia, o viena zona gali turėti kelias lenteles su skirtingais stulpeliais.

Įrankiai yra skirtuke {{ui:Blocks}}, grupėje {{ui:Bill of materials}}, meniu {{ui:More}} grupėje Blokai, ir juos galima įvesti.

## Sukurti zoną

Įveskite {{cmd:BOMZONE}} ir pasirinkite vieną iš:

- spustelėkite du priešingus kampus stačiakampiui,
- pasirinkite {{ui:Polygon}}, spustelėkite kiekvieną kampą ir paspauskite Enter, kad uždarytumėte, arba
- pasirinkite {{ui:Object}} ir nurodykite uždarą polilinijos, apskritimo, elipsės ar uždaro splaino objektą. Jo kontūras nukopijuojamas; objektas lieka kaip buvo.

Tada įveskite zonos pavadinimą. Zona nubrėžiama brūkšniuota linija, o pavadinimas rašomas virš viršutinio kairiojo kampo, sluoksnyje `BOM-ZONES`, kuris nespausdinamas. Įjunkite spausdinimą tam sluoksniui, jei zonas norite matyti popieriuje.

Zona yra įprasta uždara polilinija: perkelkite, tempkite ar vilkite jos rankenėles, o pavadinimas seka. Norėdami pervardyti zoną, redaguokite pavadinimo tekstą arba naudokite {{cmd:BOMZONE}} ir {{ui:Rename}}. {{ui:Zones}} išvardija kiekvieną zoną ir kiek lentelių ji turi.

## Įdėti lentelę

Įveskite {{cmd:BOMTABLE}} (arba {{cmd:BOM}}), pasirinkite zonos kontūrą arba jos pavadinimą, nurodykite teksto aukštį ir spustelėkite, kur turi būti lentelės viršutinis kairysis kampas. Paspauskite Enter vietoj zonos pasirinkimo arba pasirinkite {{ui:Whole}}, kad lentelė būtų visam brėžiniui.

Naujoje lentelėje rodomi elemento numeris, kiekis, bloko pavadinimas ir stulpelis kiekvienam atributui, kurį blokai turi (pirmieji šeši; kiti pasiūlomi nepažymėti). Blokai su tuo pačiu pavadinimu ir tomis pačiomis atributų reikšmėmis dalijasi viena eilute.

## Kas laikoma viduje

- Blokas skaičiuojamas zonoje, kurioje yra jo **įterpimo taškas**.
- Linija, lankas, apskritimas, polilinija, elipsė, splainas ar brūkšniuotė skaičiuojami **visi** zonoje, kurioje yra jų apibrėžiamųjų ribų vidurys (linijai – jos vidurio taškas). Jų ilgis nekertamas ties zonos kraštu.
- Taškas tiksliai ant krašto yra viduje.
- Zonos gali persidengti. Kiekviena zona skaičiuoja pati, todėl objektas persidengimo srityje patenka į abi lenteles.

## Lentelės seka brėžinį

Kai pridedate, perkeliate, kopijuojate ar trinate bloką, redaguojate atributą arba keičiate ar perkeliate zoną, kiekviena lentelė perbraižoma tame pačiame žingsnyje. Atšaukimas atšaukia jūsų pakeitimą ir lentelės pakeitimą kartu.

Kad lentelė nesektų, pažymėkite {{ui:Frozen}} jos nustatymuose. Užšaldyta lentelė keičiasi tik tada, kai redaguojate jos nustatymus arba įvedate {{cmd:BOMUPDATE}}, kuris atnaujina visas lenteles dabar.

## Pasirinkti stulpelius

Pasirinkite lentelę ir įveskite {{cmd:BOMEDIT}}. Dialoge:

- **Stulpeliai**: pažymėkite, kuriuos rodyti (elementas, kiekis, pavadinimas, sluoksnis, ilgis, plotas, pastabos ir kiekvienas atributas), įveskite savo antraštę bet kuriam iš jų ir perkelkite juos aukštyn ar žemyn.
- {{ui:Group rows by}}: bloko pavadinimas ir atributų reikšmės, tik bloko pavadinimas, sluoksnis arba vienas atributas. Sujungtoje eilutėje reikšmė, kuri skiriasi tarp blokų, rodoma kaip „įvairi“.
- {{ui:Sort by}} bet kuriame stulpelyje, didėjimo ar mažėjimo tvarka.
- {{ui:Title}}, {{ui:Show the title}} ir {{ui:Totals row}}.
- {{ui:Count linework by layer}} prideda vieną eilutę kiekvienam sluoksniui su objektų skaičiumi, jų bendru ilgiu ir uždarų figūrų bendru plotu brėžinio vienetais.
- **Pastabos**: pažymėkite stulpelį Pastabos, tada įveskite pastabą bet kuriai lentelės eilutei dialogo apačioje.

Kiekviena lentelė išlaiko savo pasirinkimus.

## Elementų numeriai

Eilutė išlaiko savo elemento numerį tol, kol yra lentelėje. Nauja eilutė gauna kitą laisvą numerį, o numeris, kuris jau buvo išduotas, daugiau nenaudojamas, todėl žymekliai ir pastabos, kuriose cituojamas numeris, lieka teisingi. {{ui:Renumber items}} sunumeruoja juos nuo 1 rodymo tvarka.

Eilutė atpažįstama pagal tai, ką ji grupuoja: pakeiskite, kaip grupuojamos eilutės, arba pakeiskite atributo reikšmę, kurią grupavimas naudoja, ir eilutė laikoma nauja.

## Eksportavimas ir kitos programos

{{cmd:BOMEXPORT}} arba {{ui:Export CSV}} dialoge įrašo lentelę kaip .csv failą skaičiuoklei.

DWG ar DXF faile lentelė yra įprastas linijų ir teksto blokas, todėl kitos programos ją rodo ir spausdina, kaip nubraižyta. Ten tai nėra lentelės objektas ir kitose programose neatnaujinama. Ryšys su zona faile išlaikomas kaip plėtinio duomenys, kuriuos CadCraft nuskaito, todėl lentelė vėl gyva, kai brėžinį atidarote CadCraft iš naujo. R12 DXF formato brėžinys be lapo neišsaugo zonos sluoksnio nustatymo „nespausdinamas“.

Išardžius lentelę, ji tampa laisvomis linijomis ir tekstu, o ryšys nutrūksta.
