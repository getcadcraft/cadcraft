---
title: Brūkšniuotė ir užpildymo sritys
summary: Užpildykite sritį vientisa spalva arba standartiniu raštu, spustelėdami jos viduje arba pasirinkdami uždarus objektus, nustatykite rašto mastelį ir kampą bei vėliau pakeiskite brūkšniuotę.
keywords: brūkšniuotė, bhatch, užpildas, vientisas užpildas, raštas, ansi31, ansi37, plyta, žemė, tinklas, pjūvio linijos, poché, sala, kontūras, mastelis, kampas
from: e7feb344
---

## Ką sukursite

Sienos pjūvį, užpildytą ANSI31 raštu, stulpą jame paliktą tuščią ir vientisą užpildą stulpe.

## Brūkšniuoti spustelint srities viduje

1. Nubrėžkite stačiakampį (`REC`, `0,0`, `@2000,1200`) ir apskritimą jo viduje (`C`, `1000,600`, `300`). Spustelėkite {{ui:Visas brėžinys}}.
2. Spustelėkite {{ui:Brūkšniuotė}} grupėje {{ui:Braižymas}}, arba įveskite `H` ir paspauskite {{key:Enter}}. Istorijoje nurodoma dabartinė brūkšniuotė, pavyzdžiui `Dabartinė brūkšniuotė: ANSI31, mastelis 1, kampas 0°`.
3. Įveskite `P` ir paspauskite {{key:Enter}}, įveskite `ANSI31` ir paspauskite {{key:Enter}}.
4. Įveskite `SC` ir paspauskite {{key:Enter}}, įveskite `20` ir paspauskite {{key:Enter}}. Rašto dydžiai nurodomi popieriuje, todėl brėžinys, atspausdintas 1:20, nori mastelio 20.
5. Prie `Nurodykite vidinį tašką` spustelėkite stačiakampio viduje, bet ne apskritimo viduje. Brūkšniuotė rodoma kaip peržiūra.
6. Paspauskite {{key:Enter}}. Stačiakampis nubrūkšniuojamas; apskritimas viduje lieka tuščias, nes jis yra sala.

Prieš paspausdami {{key:Enter}}, spustelėkite kelių sričių viduje, kad jos taptų viena brūkšniuote. `U` atšaukia paskutinę sritį.

## Vientisas užpildas

1. Įveskite `H` ir paspauskite {{key:Enter}}.
2. Įveskite `P`, paspauskite {{key:Enter}}, įveskite `SOLID` ir paspauskite {{key:Enter}}.
3. Spustelėkite apskritimo viduje, tada paspauskite {{key:Enter}}.

## Brūkšniuoti pasirinktas uždaras formas

Vietoj spustelėjimo viduje, prie `Nurodykite vidinį tašką`, įveskite `S` (Pasirinkti objektus) ir pasirinkite uždaras polilinijas, apskritimus arba uždaras elipses, tada paspauskite {{key:Enter}}. Formos viduje kitose paliekamos tuščios iš eilės (išorinė nubrūkšniuojama, kita viduje lieka tuščia, ir t. t.).

## Raštai

Prie rašto klausimo įveskite `?`, kad gautumėte sąrašą. Standartiniai yra ANSI31–ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ir EARTH, taip pat SOLID. Brėžinyje coliais (arba su pėdomis ir coliais kaip ilgio formatu) naudojami coliniai rašto dydžiai, kaip AutoCAD; kitaip – milimetriniai.

{{ui:Kampas}} (`A`) pasuka visą raštą: ANSI31 kampu 90° krypsta kita kryptimi.

**Rašto failai.** Prie `Nurodykite vidinį tašką` įveskite `F` (Rašto failas) ir pasirinkite `.pat` failą. Jame esantys raštai įtraukiami į sąrašą; jei jų daugiau nei vienas, klausiama, kurį naudoti. Failas be rašto, kurį CadCraft gali perskaityti, tai praneša, o bet koks praleistas raštas suskaičiuojamas. `.pat` failo dydžiai neturi savo vieneto, todėl skaitomi brėžinio vienetais. Išbandyti tik failai, parašyti įprastu `.pat` formatu; jokio, sukurto kita programa.

## Keisti brūkšniuotę

Pasirinkite ją (spustelėkite vieną iš jos linijų). {{ui:Ypatybės}} skydelyje: {{ui:Raštas}}, {{ui:Šablono mastelis}} ir {{ui:Šablono kampas}}. Brėžinių atidarytos brūkšniuotės rodo savo raštą, kai jis yra vienas iš standartinių; kiti rodomi kaip šviesus savo spalvos tonas.

## Dažnos klaidos

- **„Aplink tą tašką nėra uždaro kontūro.“** Kontūre yra tarpas arba jo dalis nematoma ekrane: CadCraft žiūri tik į tai, kas matoma ekrane. Uždarykite tarpą (priartinkite kampus) arba atitolinkite.
- **„Raštas per tankus, kad būtų nubrėžtas šiuo mastelio dydžiu.“** Linijos būtų arčiau, nei brėžinys gali parodyti. Naudokite didesnį mastelį: pabandykite spausdinimo mastelį (20 kaip 1:20).
- **Raštas atrodo didelis ar mažas.** Mastelis yra brėžinio vienetais per rašto vienetą; žr. 4 žingsnį aukščiau.
- **Brūkšniuotė nebeseka savo kontūro.** Brūkšniuotė, sukurta su {{cmd:HATCH}}, lieka su objektais, iš kurių ji sukurta: perkelkite, pasukite ar keiskite kontūro mastelį – brūkšniuotė eina kartu; pertvarkykite ją rankenėle – brūkšniuotė apskaičiuojama iš naujo. Ryšys nutrūksta, kai kontūras nebeužsidaro, kai pertvarkote brūkšniuotę rankiniu būdu arba kai ją apkerpate; komandų eilutė tai nurodo. Niekas neprarandama: vėl nubrūkšniuokite sritį, kad susietumėte iš naujo.

## Brūkšniuotė, kuri lieka su savo kontūru

Brūkšniuotė, kurią sukuriate su `HATCH`, prisimena, kas ją riboja. Perkelkite, pasukite ar keiskite kontūro mastelį – brūkšniuotė ir jos raštas eina kartu. Vilkite rankenėlę, kad pertvarkytumėte kontūrą – brūkšniuotė apskaičiuojama iš naujo. Perkelkite pačią brūkšniuotę – kontūras eina kartu, kaip užpildyta forma piešimo programoje.

Ryšys nutrūksta, ir komandų eilutė tai nurodo, jei kontūras nebeužsidaro arba jei brūkšniuotę pertvarkote rankiniu būdu. Pati brūkšniuotė lieka. Brūkšniuodami įveskite `AS`, kad kurtumėte savarankiškas brūkšniuotes. Nukopijavus brūkšniuotę su kontūru, kopija turi savo ryšį.

`HATCHEDIT` (`HE`) keičia brūkšniuotės raštą, mastelį, kampą ir pradžią bei susieja ją su kontūru arba nutraukia ryšį. Ryšys išsaugomas DWG ir DXF 2000 failuose. DXF R12 failas brūkšniuotės objekto neturi, o kitų programų padaryti ryšiai neskaitomi: tokiems naudokite `HATCHEDIT` ir Susieti.

Brūkšniuotė, kuri nebeturi kontūro (kontūras ištrintas arba failas atėjo be jo), gali jį atgauti: `HATCHGENERATEBOUNDARY` (`HGB`) nubrėžia uždarą polilinijas aplink kiekvieną brūkšniuotės kilpą ir, jei atsakysite Taip, susieja brūkšniuotę su jomis.

## Gradiento užpildas

`GRADIENT` (`GD`) užpildo sritį gradientu vietoj rašto: tie patys pasirinkimai kaip `HATCH`, o prieš tai klausiama tipo (tiesinis, cilindrinis, sferinis, pusrutulinis, lenktas ir kiekvienas iš jų apverstas), vienos spalvos su tonu arba dviejų spalvų, kampo ir ar centruotas. `HATCH` parinktis `G` daro tą patį. `HATCHEDIT` `G` arba {{ui:Ypatybės}} skiltyje Gradientas keičia gradientą arba bet kurią brūkšniuotę paverčia gradientu.

Gradientas rodomas ekrane ir spausdinimuose. Įrašius kaip DWG 2004 ar naujesnę versiją, kitos programos gauna tikrą gradiento brūkšniuotę. DXF 2000 ir DWG 2000 gradiento neturi: ten CadCraft jį laiko sau, o kitos programos mato vientisą užpildą pirmąja spalva.

## Apkirpti brūkšniuotę

`TRIM` apkerpa brūkšniuotę kaip bet kurį kitą objektą. Spustelėkite brūkšniuotę toje pjovimo krašto pusėje, kurią norite pašalinti: kraštai padalija brūkšniuotą sritį, ir tas gabalas pašalinamas. Greitajame režime kiekvienas objektas yra pjovimo kraštas; kai jų daug, pirmiausia pasirinkite kraštus (parinktis `T`). Apkirpta brūkšniuotė nebėra susieta su savo kontūru, nes jo nebeužpildo.
