---
title: Brūkšniuotė ir srities užpildymas
summary: Užpildykite sritį vientisa spalva arba standartiniu raštu spustelėdami jos viduje arba pasirinkdami uždaras formas, nustatykite rašto mastelį ir kampą bei vėliau keiskite brūkšniuotę.
keywords: brūkšniuotė, bhatch, užpildymas, vientisas užpildymas, raštas, ansi31, ansi37, plytos, žemė, tinklas, pjūvio linijos, poché, sala, riba, mastelis, kampas
from: 14399174
---

## Ką sukursite

Sienos pjūvis, užpildytas raštu ANSI31, su tuščia kolona ir vientisu užpildymu kolonoje.

## Brūkšniuotė spustelėjus srities viduje

1. Nubraižykite stačiakampį (`REC`, `0,0`, `@2000,1200`) ir apskritimą jo viduje (`C`, `1000,600`, `300`). Spustelėkite {{ui:Extents}}.
2. Spustelėkite {{ui:Hatch}} grupėje: {{ui:Draw}}, arba įveskite `H` ir paspauskite {{key:Enter}}. Istorijoje nurodoma, koks raštas dabartinis, pavyzdžiui: `Dabartinė brūkšniuotė: ANSI31, mastelis 1, kampas 0°`.
3. Įveskite Raštas (`P`) ir paspauskite {{key:Enter}}, tada įveskite `ANSI31` ir paspauskite {{key:Enter}}.
4. Įveskite `SC` ir paspauskite {{key:Enter}}, tada įveskite `20` ir paspauskite {{key:Enter}}. Rašto dydžiai nurodomi popieriuje, todėl brėžinys, atspausdintas 1:20 mastelyje, reikalauja mastelio 20.
5. Ties `Nurodykite vidinį tašką` spustelėkite stačiakampio viduje, bet ne apskritimo viduje. Brūkšniuotė rodoma kaip peržiūra.
6. Paspauskite {{key:Enter}}. Stačiakampis užbrūkšniuojamas; apskritimas viduje lieka tuščias, nes tai sala.

Prieš spaudžiant {{key:Enter}}, spustelėkite kelias sritis, kad jos taptų viena brūkšniuote. `U` atšaukia paskutinę sritį.

## Vientisas užpildymas

1. Įveskite `H` ir paspauskite {{key:Enter}}.
2. Įveskite Raštas (`P`), paspauskite {{key:Enter}}, įveskite `SOLID` ir paspauskite {{key:Enter}}.
3. Spustelėkite apskritimo viduje, tada paspauskite {{key:Enter}}.

## Uždarų formų brūkšniavimas pasirenkant

Vietoj spustelėjimo vidaus ties `Nurodykite vidinį tašką` įveskite Pasirinkti objektus (`S`) ir pasirinkite uždarąsias polilinijas, apskritimus arba uždarąsias elipses, tada paspauskite {{key:Enter}}. Formos viena kitos viduje paeiliui lieka tuščios (išorinė užbrūkšniuojama, kita viduje lieka tuščia ir t. t.).

## Raštai

Atsakydami į klausimą dėl rašto, įveskite `?`, kad pamatytumėte sąrašą. Standartiniai raštai: nuo ANSI31 iki ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH ir SOLID. Brėžinyje, kurio vienetai yra coliai (arba kurio ilgio formatas – pėdos ir coliai), naudojami raštų dydžiai coliais, kaip AutoCAD; kitais atvejais – milimetrais.

{{ui:Angle}} (`A`) pasuka visą raštą: ANSI31 esant 90° krypsta priešinga kryptimi.

**Rašto failai.** Ties `Nurodykite vidinį tašką` įveskite Rašto failas (`F`) ir pasirinkite `.pat` failą. Jame esantys raštai įtraukiami į sąrašą; jei jų yra daugiau nei vienas, būsite paklausti, kurį naudoti. Failas, kurio raštų CadCraft nepavyksta nuskaityti, apie tai praneša, o visi praleisti raštai suskaičiuojami. `.pat` failų dydžiai neturi savo matavimo vieneto, todėl jie nuskaitomi pagal brėžinio vienetus. Išbandyti tik įprastu `.pat` formatu įrašyti failai; kitų programų sukurti failai nebandyti.

## Brūkšniuotės keitimas

Pasirinkite ją (spustelėkite vieną iš jos linijų). {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} ir {{ui:Pattern angle}}. Iš atidarytų brėžinių brūkšniuotės rodo savo raštą, kai tai vienas iš standartinių; kitos rodomos šviesesniu savo spalvos tonu.

## Dažniausios klaidos

- **„Šiame taške nėra uždaro kontūro.“** Kontūre yra tarpas arba jo dalis nematoma ekrane: CadCraft ieško tik to, kas matoma ekrane. Uždarykite tarpą (priartinkite kampus) arba nutolinkite vaizdą.
- **„Šiuo masteliu raštas per tankus nubraižyti.“** Linijos būtų arčiau viena kitos, nei gali parodyti brėžinys. Naudokite didesnį mastelį: išbandykite spausdinimo mastelį (20, esant 1:20).
- **Raštas atrodo arba per didelis, arba per mažas.** Mastelis nurodomas brėžinio vienetais, tenkančiais rašto vienetui; žr. 4 veiksmą aukščiau.
- **Perkėlus kontūrą, brūkšniuotė nejuda.** Brūkšniuotė nėra susieta su savo riba. Perkelkite abu arba brūkšniuokite iš naujo.

## Brūkšniuotė, išlaikanti ryšį su riba

Brūkšniuotė, sukurta komanda `HATCH`, prisimena, kuri riba ją riboja. Perkelkite, pasukite ar keiskite ribos mastelį – kartu su ja judės ir brūkšniuotė bei jos raštas. Patempkite valdiklį, kad pakeistumėte ribos formą, ir brūkšniuotė bus apskaičiuota iš naujo. Perkėlus pačią brūkšniuotę, kartu judės ir jos riba, kaip užpildyta figūra brėžinių programoje.

Ryšys nutrūksta, ir komandų eilutė apie tai praneša, jei riba nebeuždaroma arba brūkšniuotę pakeičiate rankiniu būdu. Pati brūkšniuotė lieka. Brūkšniuodami įveskite `AS`, kad sukurtumėte savarankiškas brūkšniuotes. Nukopijavus brūkšniuotę kartu su riba, kopija turi savo ryšį.

`HATCHEDIT` (`HE`) keičia brūkšniuotės raštą, mastelį, kampą ir pradžios tašką bei susieja ją su riba arba nutraukia ryšį. Ryšys įrašomas DWG ir DXF 2000 failuose. DXF R12 faile brūkšniuotės objekto nėra, o kitose programose sukurti ryšiai neskaitomi: tokiais atvejais naudokite `HATCHEDIT` ir Susieti.

Brūkšniuotė, kuri nebeturi ribos (riba ištrinta arba failas atėjo be jos), gali ją atgauti: `HATCHGENERATEBOUNDARY` (`HGB`) nubraižo uždarą poliliniją aplink kiekvieną brūkšniuotės kontūrą ir, jei atsakysite Taip, susieja brūkšniuotę su jomis.

## Gradiento užpildymas

`GRADIENT` (`GD`) užpildo sritį gradientu, o ne raštu: nurodomos tos pačios sritys kaip `HATCH`, o po to klausiama tipo (tiesinis, cilindrinis, sferinis, pusrutulio, lenktas ir kiekvienas iš jų apverstas), vienos spalvos su atspalviu arba dviejų spalvų, kampo ir ar centruotas. `HATCH` komandoje tą patį atlieka parinktis Gradientas (`G`). `HATCHEDIT` `G` arba {{ui:Properties}} skiltyje Gradientas keičia gradientą arba paverčia bet kurią brūkšniuotę gradientu.

Gradientas rodomas ekrane ir spausdinyje. Įrašius DWG 2004 arba naujesniu formatu, kitos programos gaus tikrą gradiento brūkšniuotę. DXF 2000 ir DWG 2000 gradientų nėra: tuomet CadCraft jį išsaugo tik sau, o kitos programos mato vientisą užpildymą pirmąja spalva.

## Brūkšniuotės apkarpymas

`TRIM` apkerpa brūkšniuotę kaip bet kurį kitą objektą. Spustelėkite brūkšniuotę toje pusėje, kurios pjovimo kraštinės pusės norite atsikratyti: kraštinės padalija brūkšniuotą sritį, ir ta dalis pašalinama. Greitajame režime kiekvienas objektas yra pjovimo kraštinė; kai jų daug, pirmiausia pasirinkite kraštines (parinktis Pjūvio kraštinės (`T`)). Apkirpta brūkšniuotė nebesusieta su riba, nes ji jos nebeužpildo.
