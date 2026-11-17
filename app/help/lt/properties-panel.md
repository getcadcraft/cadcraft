---
title: Ypatybių skydelis
summary: Peržiūrėkite ir keiskite viską apie pažymėtus objektus, daugelį iš karto: koordinates su Z, dydžius, tekstą, matmenų nustatymus, skaidrumą ir kt. Laukeliuose priimamos išraiškos ir ilgiai su vienetais.
keywords: sumos, bendras ilgis, bendras plotas, suma, pasirinkimo ilgis, ypatybės, ypatybių paletė, ctrl+1, pr, ch, mo, ddmodify, įvairūs, greitas pasirinkimas, pickadd, koordinatės, z, aukštis, storis, skaidrumas, medžiaga, nuoroda, išraiška, quickcalc, viršūnė, matmenų stilius, tolerancija, dešimtainiai skaitmenys
from: 10d6a829
---

## Ko sužinosite

Kaip atverti Ypatybių skydelį, pakeisti vieną objektą ar šimtą vienu žingsniu, įvesti tikslias koordinates (su Z), naudoti išraiškas ir vienetus bet kuriame skaitiniame lauke, ir ką rodo kiekvienas objekto tipas.

## Atidaryti

Skydelis yra dešinėje. Norėdami jį iškelti į priekį:

- Paspauskite {{key:Mod+1}} arba įveskite {{cmd:PROPERTIES}} (arba `PR`, `CH`, `MO`).
- Dukart spustelėkite objektą (tekstas ir daugiasakės nuorodos atveria savo teksto redaktorių).

Skydelis yra perkeliamas kaip ir kiti: vilkite jo rankenėlę, kad prijungtumėte kairėje, dešinėje ar apačioje, arba numeskite ant brėžinio, kad jis plauktų (žr. [Išdėstykite skydelius ir naudokite antrą monitorių](common:arrange-panels)).

### Sulankstyti

Prisegimo mygtukas viršutiniame dešiniajame skydelio kampe įjungia **automatinį paslėpimą**: skydelis susilanksto į juostelę dešiniajame krašte, o brėžinys gauna vietos. Užveskite pelę ant juostelės (arba paspauskite {{key:Mod+1}}) ir jis atsidaro virš brėžinio; nutolus vėl susilanksto. Dar kartą spustelėkite mygtuką, kad jis liktų atviras. {{cmd:PROPERTIESCLOSE}} taip pat jį sulankstys.

## Skyriai

Ypatybės sugrupuotos skyriais, kuriuos galima sulankstyti: **Bendra**, **Geometrija**, **Tekstas**, **Linijos ir rodyklės**, **Pritaikymas**, **Pagrindiniai vienetai**, **Alternatyvūs vienetai**, **Tolerancijos**, **Šablonas**, **Įvairūs**, o blokams – **Atributai** ir **Bibliotekos elementas**. Spustelėkite skyriaus pavadinimą, kad jį sulankstytumėte arba atvertumėte; CadCraft prisimena, kuriuos sulankstėte.

Vilkite plonają liniją tarp pavadinimų ir reikšmių, kad pavadinimai būtų platesni arba siauresni. Dukart spustelėkite ją, kad grįžtų į pradinę vietą. Klaviatūra – sufokusuokite ją ir naudokite rodyklių klavišus.

## Pakeisti reikšmę

1. Spustelėkite eilutę. Antraštėje parašyta „Linija“.
2. Spustelėkite {{ui:Ilgis}}. Redaguodamas laukas rodo visą reikšmę, o ne suapvalintą.
3. Įveskite `2500` ir paspauskite {{key:Enter}}. Linija dabar yra 2500 ilgio, išlaikydama savo pradžios tašką ir kampą.

{{key:Enter}} arba spustelėjimas kitur pritaiko reikšmę; {{key:Esc}} grąžina seną reikšmę. Kiekvienas pakeitimas yra vienas atšaukimo žingsnis.

### Išraiškos ir vienetai

Kiekvienas skaitinis laukas priima daugiau nei paprastą skaičių:

| Įvedate | Gausite |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (coliais, brėžinyje su pėdomis ir coliais) |
| `900mm`, `3.5m`, `2ft` | Konvertuota į brėžinio vienetus |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (kampų laukuose) |
| `0.5r`, `100g` | Radianai ir gradai, kaip laipsniai |

Ilgiui su vienetu brėžinys turi turėti vienetus: pirmiausia nustatykite {{ui:Vienetai}} skiltyje {{ui:Nauji objektai}} (kai nieko nepasirinkta). Neteisinga įvestis atmetama, skydelio apačioje rodoma pastaba, ir niekas nepasikeičia; ji niekada neįrašoma kaip 0. Funkcijos: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; kampai laipsniais.

## Keisti daug objektų vienu metu

1. Pažymėkite kelis objektus, pavyzdžiui, 8 linijas ir 4 matmenis.
2. Antraštėje parašyta „12 objektų“, o sąraše viršuje siūloma **Visi (12)**, **Linija (8)** ir **Matmuo (4)**.
3. **Visi** rodo, ką turi kiekvienas objektas (sluoksnis, spalva, linijos tipas…). Pasirinkite **Matmuo (4)**, kad pamatytumėte matmenų nustatymus.
4. Pakeiskite reikšmę, pavyzdžiui, {{ui:Dešimtainiai skaitmenys}} į `1`.

Visi keturi matmenys pasikeičia vienu atšaukimo žingsniu. Laukas, kuriame rašoma **Įvairūs**, reiškia, kad objektai skiriasi; įvedus reikšmę, ji nustatoma visiems. Objektai užrakintuose sluoksniuose paliekami kaip yra, o pastaboje nurodoma, kiek jų.

## Pažymėtų objektų sumos

Pažymėjus kelis objektus, skiltis {{ui:Sumos}} viršuje nurodo:

- **Objektai**: kiek kokio tipo, pavyzdžiui, „8 linijos, 2 polilinijos, 1 apskritimas“.
- **Bendras ilgis**: linijų, lankų ir polilinijų suma (įskaitant splainus) ir kiek objektų tai yra.
- **Bendras plotas**: uždarų objektų suma: apskritimai, pilnos elipsės, uždarosios polilinijos ir brūkšniuotės (brūkšniuotės skylės atimamos).

Jie pateikiami brėžinio ilgio formatu (pėdomis ir coliais, kai jis tokį naudoja; plotai tada kvadratiniais coliais ir kvadratinėmis pėdomis). Būsenos juosta rodo tą patį ilgį ir plotą, kai pažymėti objektai; {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Pasirinkimo ilgis ir plotas}} › {{ui:Paslėpta}} tai išjungia. Vienam objektui {{ui:Geometrija}} rodo jo paties ilgį ir plotą, kaip anksčiau.

## Koordinatės

Kiekvienas taškas rodo **X**, **Y** ir **Z**: linijos pradžią ir pabaigą, centrus, įterpimo taškus, teksto pozicijas, dabartinę polilinijos viršūnę. Linijos taip pat rodo **Delta X**, **Delta Y** ir **Delta Z** (tik skaitymui). Polilinijos ir brūkšniuotės turi **Aukštį** (vieną Z visam objektui).

Kryžiaus mygtukas šalia taško pavadinimo leidžia pasirinkti tašką brėžinyje: spustelėkite jį, tada spustelėkite naują poziciją (prilipimai veikia). Reikšmės yra pasaulio koordinatės.

## Bendra

| Laukas | Ką reiškia |
|---|---|
| {{ui:Sluoksnis}}, {{ui:Spalva}}, {{ui:Linijos tipas}}, {{ui:Linijos tipo mastelis}}, {{ui:Linijos storis}} | Kaip sluoksnių skydelyje; {{ui:Pagal sluoksnį}} seka sluoksnį |
| {{ui:Skaidrumas}} | Pagal sluoksnį, pagal bloką arba 0–90 % |
| {{ui:Storis}} | Kiek linijos, apskritimai, lankai, polilinijos, taškai ir tekstas tęsiasi Z kryptimi |
| {{ui:Medžiaga}} | Pagal sluoksnį, pagal bloką, Globali arba pavadinimas, kurį atnešė brėžinys |
| {{ui:Spausdinimo stilius}} | Tik skaitymui: brėžiniai spausdinami pagal spalvą, per lapo [spausdinimo stiliaus lentelę](topic:plot-pdf#plot-style-tables) |
| {{ui:Nuoroda}} | Interneto adresas, saugomas su objektu |

## Ką rodo kiekvienas tipas

| Pasirinktas | Galite keisti |
|---|---|
| Linija | Pradžios ir pabaigos X, Y, Z; ilgis; kampas |
| Apskritimas | Centras; spindulys; skersmuo; apskritimo ilgis; plotas (kiekvienas nustato spindulį) |
| Lankas | Centras; spindulys; pradžios ir pabaigos kampas; bendras kampas; styga (rodo lanko ilgį ir plotą) |
| Elipsė | Centras; didžiosios ir mažosios ašies spinduliai; spindulių santykis; didžiosios ašies kampas; pradžios ir pabaigos kampas |
| Polilinija | Viršūnių naršyklė (žemiau); bendras plotis; aukštis; uždaryta; plotas, kai uždaryta (keičia dydį apie jos centrą) |
| Tekstas | Turinys; stilius; lygiavimas; aukštis; pasukimas; pločio koeficientas; pasvirimo kampas; apibrėžtas plotis; eilučių tarpas; anotatyvus; pozicija |
| Bloko nuoroda | Įterpimo taškas; pasukimas; mastelis X, Y, Z ir vienodas mastelis; atributų reikšmės |
| Brūkšniuotė | Šablonas; mastelis; kampas; pradžia; asociatyvi; salų aptikimas; fono spalva; aukštis |
| Matmuo | Žr. žemiau |
| Daugiasakė nuoroda | Tekstas; aukštis; plotis; teksto pusė; rodyklės dydis; nusileidimo atstumas; rodyklės taškas |
| Vaizdo langas | Mastelis; centras ir dydis lape; vaizdo centras modelyje; įjungtas; rodymas užrakintas |

### Polilinijos viršūnės

{{ui:Dabartinė viršūnė}} rodo, kuriai viršūnei priklauso žemiau esantys laukai. Naudokite rodyklių mygtukus arba įveskite numerį, kad pereitumėte į kitą viršūnę; viršūnių skaičiui ribų nėra. Kiekviena viršūnė turi X, Y, pradžios ir pabaigos atkarpos plotį bei tos atkarpos, kuri prasideda joje, išlinkimą (0 = tiesi).

## Matmenys

Matmuo rodo savo **Matmenų stilių**, ką jis matuoja, savo taškus ir kiekvieną nustatymą:

- **Linijos ir rodyklės:** rodyklės galvutė kiekvienam galui, rodyklės dydis, žymeklio dydis, matmens ir pratęsimo linijų spalvos bei linijų storiai, bet kurios pusės ar bet kurios pratęsimo linijos paslėpimas, pratęsimo linijos poslinkis ir ilgis.
- **Tekstas:** perrašymas (palikite tuščią išmatuotai reikšmei; `<>` jūsų tekste ją pakeičia), stilius, spalva, aukštis, poslinkis, vertikali ir horizontali pozicija, visada horizontalus, pasukimas, fono užpildas.
- **Pritaikymas:** bendras mastelis, bazinių linijų tarpas, kas juda, kai trūksta vietos, teksto judėjimas.
- **Pagrindiniai vienetai:** formatas, dešimtainiai skaitmenys, apvalinimas, priešdėlis, priesaga, matavimo mastelis, dešimtainis skirtukas, slopinami pirmaujantys ir baigiamieji nuliai; kampams – kampo formatas ir dešimtainiai skaitmenys.
- **Alternatyvūs vienetai:** įjungta arba išjungta, formatas, dešimtainiai skaitmenys, daugiklis (25.4 paverčia coliais į milimetrus), apvalinimas, priešdėlis ir priesaga.
- **Tolerancijos:** nėra, simetrinės, nuokrypis, ribos arba bazinės, su viršutine ir apatine reikšmėmis, dešimtainiais skaitmenimis, aukščiu ir pozicija.

Pakeitus bet kurį iš jų atidarytame matmenyje, kitos programos nubraižytas jo vaizdas numetamas, o CadCraft jį nubraižo iš naujo.

:::note
Horizontali teksto pozicija (šalia pirmos arba antros pratęsimo linijos) ir tekstas po linija nubraižomi tiesiniuose ir įstrižuose matmenyse; kituose matmenyse jie išsaugomi, bet dar nenubraižomi. Pritaikymo pasirinkimai išsaugomi, bet dar nenubraižomi: CadCraft tekstą dėlioja pagal savo taisyklę (virš linijos, už jos, kai netelpa).
:::

## Nieko nepažymėta

Kai nieko nepažymėta, skydelis rodo:

- **Nauji objektai:** sluoksnį, spalvą, linijos tipą, linijos storį ir teksto aukštį, kuriuos gaus nauji objektai; brėžinio vienetus ir ilgio formatą; dabartinio sluoksnio linijos tipą ir storį; naujų matmenų dydžius. Lape pirmiausia rodomas lapo pavadinimas, popierius ir orientacija.
- **Vaizdas:** ekrane matomo vaizdo centras, aukštis ir plotis. Įveskite reikšmę, kad perkeltumėte vaizdą ten.
- **Įvairūs:** UCS piktogramos įjungimas arba išjungimas, UCS (visada Pasaulio: CadCraft dar neturi vartotojo koordinačių sistemų) ir anotacijos mastelis.

## Viršutiniai mygtukai

| Mygtukas | Ką atlieka |
|---|---|
| Piltuvėlis | {{cmd:QSELECT}}: pasirinkimas pagal tipą ir savybę |
| Rodyklė | {{cmd:SELECT}}: objektų pasirinkimas komandų eilutėje |
| Pliusas arba 1 | Ar spustelėjimas prideda prie pasirinkimo (pliusas), ar jį pakeičia (1); tas pats nustatymas kaip {{ui:Parametrai}}, {{ui:CadCraft}} |
| Prisegimo mygtukas | Automatinis paslėpimas, žr. aukščiau |

## Dažnos klaidos

- **Įvedimas į lauką nieko nepakeitė.** Paspauskite {{key:Enter}} arba spustelėkite kitur, kad jį pritaikytumėte. Raudonas laukas ir pastaba reiškia, kad įvestis atmesta.
- **Ilgis su vienetu atmetamas.** Brėžinys neturi vienetų. Nustatykite {{ui:Vienetai}}, kai nieko nepasirinkta.
- **Rodomi tik Sluoksnis ir Spalva.** Pažymėta kelių tipų objektų ir pasirinktas **Visi**. Viršuje sąraše pasirinkite vieną tipą.
- **Kai kurie objektai nepasikeitė.** Jie yra užrakintame sluoksnyje. Atrakinkite sluoksnį sluoksnių skydelyje.
- **Raidės įrašytos į lauką.** Kol laukas turi žymeklį, klavišai rašo ten. Paspauskite {{key:Enter}} arba {{key:Esc}}, tada įveskite komandą.
