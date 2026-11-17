---
title: Įvesti ir rodyti rumbus bei kampus laipsniais, minutėmis, sekundėmis
summary: Įveskite kryptį kaip geodezinį rumbą, pvz., N45°23'30"E, arba kaip laipsnius, minutes, sekundes bet kur, kur prašoma kampo, ir pasirinkite, kaip brėžinys rodo kampus su AUNITS.
keywords: rumbas, rumbai, geodezija, geodezininkas, kvadrantinis rumbas, N45E, laipsniai minutės sekundės, DMS, kampas, kryptis, sklypas, sklypai, išdėstymas, poligonometrija, AUNITS, ANGUNITS, kampo formatas, polinis, tiesioginis atstumas, DIST
from: af805567
---

Visur, kur CadCraft prašo **kampo arba krypties**, galite įvesti **kvadrantinį rumbą** arba kampą **laipsniais, minutėmis ir sekundėmis**, taip pat paprastą laipsnių skaičių.

## Rumbai

Rumbas nurodo šiaurę arba pietus, kampą iki 90°, tada rytus arba vakarus:

| Įvedate | Kryptis |
|---|---|
| `N45°23'30"E` arba `N45d23'30"E` | 45°23'30" nuo šiaurės link rytų |
| `S10-30-00W` arba `S 10 30 W` | 10°30' nuo pietų link vakarų (brūkšniai arba tarpai tarp dalių) |
| `N45.5E` | 45.5° nuo šiaurės link rytų |
| `N`, `E`, `S`, `W` | tiesiai į šiaurę, rytus, pietus, vakarus |

Raidės gali būti bet kokio rašymo (didžiosios ar mažosios). Ispanų kalboje `O` taip pat reiškia vakarus (oeste). `d` ir `°` reiškia tą patį; `'` – minutės, `"` – sekundės.

Norėdami nubrėžti 20 m ilgio sklypo liniją rumbu N45°23'E, pradėkite {{cmd:LINE}} ir įveskite pirmą tašką, tada įveskite `@20<N45d23'E`. Tas pats veikia {{cmd:ROTATE}} kampo raginime, kiekviename kitame raginime, kuris prašo kampo, ir kampo langelyje {{ui:Dynamic input}}.

## Laipsniai, minutės, sekundės

`45°23'30"`, `45d23'30"`, `45d30'` arba `45d` yra kampas nuo X ašies, prieš laikrodžio rodyklę. `°` arba `d` yra būtini: `45-23-30` skaitoma kaip aritmetika (45 − 23 − 30). Minutės ir sekundės turi būti mažesnės nei 60. Paprastas skaičius su aritmetika (`360/7`) vis dar veikia.

## Kaip rodomi kampai

Įveskite {{cmd:AUNITS}} (arba pasirinkite {{ui:Angle format}} skiltyje {{ui:Properties}} › {{ui:Current settings}}) ir pasirinkite:

- **Dešimtainiai laipsniai** (numatytasis): `44.6083°`.
- **Laipsniai, minutės, sekundės**: `44°36'30"`.
- **Geodeziniai rumbai**: `N45°23'30"E`.

Tikslumą nurodo tai, ką įvedate {{cmd:AUNITS}}: 0 rodo laipsnius, 2 – minutes, 4 – sekundes, o 5–8 prideda dešimtainių sekundžių skaitmenų. Formatas rodomas {{cmd:DIST}}, būsenos juostoje, dinaminėje įvestyje ir sekimo patarimuose bei kampų langeliuose {{ui:Properties}} (redaguojamas langelis priima bet kurią aukščiau nurodytą formą). Tai vienas atšaukimo žingsnis, ir jis išsaugomas DWG ir DXF failuose (`$AUNITS`, `$AUPREC`); LISP jį skaito ir rašo kaip `AUNITS` ir `AUPREC`.
