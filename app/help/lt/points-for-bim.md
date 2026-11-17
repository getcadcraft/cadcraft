---
title: Taškai BIM programoms
summary: Eksportuokite taškus ir blokų įterpimo taškus su aprašymu į CSV arba TXT failą, kurį importuoja BIM ir geodezijos programos.
keywords: exportpoints, eksportuoti taškus, taškai, csv, txt, pnezd, penzd, xyz, geodeziniai taškai, koordinatės, bim, nužymėjimas, taškų failas, šiaurinė koordinatė, rytinė koordinatė, aukštis
from: d80e2d53
---

## Ką sukursite

Taškų failą: viena eilutė kiekvienam taškui su numeriu, šiaurine koordinate, rytine koordinate, aukščiu ir aprašymu. BIM programos (tarp jų Revit ir Archicad) bei geodezijos programinė įranga gali jį importuoti, kad įdėtų geodezinius taškus, aikštelės žymes ar įrangą.

## Eksportuoti taškus

1. Pasirinkite taškus ir blokų nuorodas, kurių įterpimo taškus norite, arba nieko nepasirinkite, kad paimtumėte visus taškus.
2. Įveskite {{cmd:EXPORTPOINTS}} (arba `EXPPTS`, arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Eksportuoti taškus}}) ir paspauskite {{key:Enter}} (dar kartą paspauskite {{key:Enter}} ties `Pasirinkite taškus ir blokus`, kai nieko nepasirinkta).
3. Kai pasirinkote blokus su atributais, CadCraft išvardija jų žymes: įveskite tą, kurios reikšmė yra aprašymas (pavyzdžiui, `ITEM`), arba bet ką kitą, kad būtų naudojamas kiekvieno bloko pavadinimas.
4. Pasirinkite stulpelius: `PNEZD` (taškas, šiaurė, rytai, aukštis, aprašymas: įprastas), `PENZD` (rytai prieš šiaurę) arba `XYZ` (tik koordinatės).
5. Pasirinkite vienetus: `D` kaip nubraižyta, `M` metrai arba `[Pėdos (F)]` (tik tada, kai brėžinio vienetai nustatyti: {{ui:Ypatybės}} › {{ui:Vienetai}}, kai nieko nepasirinkta).
6. Jei nustatyta UCS, pasirinkite pasaulio koordinates (`[Pasaulio (W)]`) arba `U` UCS koordinates (žr. [UCS ir pasukta vaizdas](topic:ucs-and-turned-view)).
7. Pasirinkite `[Kableliais (C)]` `.csv` arba `T` tabuliacijomis atskirtą `.txt` ir pirmą taško numerį.

Failas atsisiunčiamas kaip `<drawing>-points.csv` (arba `.txt`), o istorijoje nurodoma, kiek taškų jame yra.

## Kas yra faile

- Vienas taškas vienoje eilutėje, baigiamas eilutės pabaiga (CR LF), trys dešimtainiai skaitmenys.
- Taško aukštis yra jo Z (0, jei jo nėra). Bloko taškas yra jo įterpimo taškas.
- Aprašymas, kuriame yra kablelis (arba tabuliacija TXT faile) ar kabutės, įdedamas į dvigubas kabutes, o jo kabutės dvigubinamos.
- Formatas yra tas, kurį skaito ir rašo CivilCraft, todėl failas ten taip pat atsidaro kaip taškai.

## Dažnos klaidos

- Vienetams siūlomas tik `D`: brėžiniui vienetai nenustatyti. Nustatykite juos arba konvertuokite kitoje programoje.
- Taškai kitoje programoje yra toli nuo to, ko tikitės: eksportuokite pasaulio koordinates (`W`) arba UCS, kurią naudoja kitos programos geodezinis taškas (`U`).
