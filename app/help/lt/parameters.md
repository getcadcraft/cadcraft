---
title: Parametrų ir lygčių naudojimas
summary: Įvardykite dydžius, valdykite juos išraiškomis, kaip width / 2, ir įveskite skaičių valdomame dydyje, kad pakeistumėte tai, kas jį valdo.
keywords: parametrai, par, parametrų tvarkytuvas, lygtys, išraiškos, kintamieji, dvikryptis, projekto paskirtis, vartotojo parametras, fx
from: 650b9844
---

## Viena lentelė visiems dydžiams

Skydelis {{ui:Parametrai}} (mygtukas {{ui:Parametrai}} grupėje {{ui:Parametrinis}}, arba įveskite {{cmd:PARAMETERS}}) išvardija kiekvieną matmenų apribojimą (`d1`, `rad1`, `dia1`, `ang1`, arba jūsų suteiktą pavadinimą) ir jūsų pačių parametrus kartu. Bet kurį pavadinimą galima naudoti bet kurioje išraiškoje.

Kiekvienoje eilutėje yra:

- **Pavadinimas**: įveskite naują, kad pervadintumėte; visos išraiškos, kurios jį naudoja, seka.
- **Išraiška**: skaičius (`40`) arba išraiška (`width / 2 + gap`). Įveskite ją ir paspauskite {{key:Enter}}: brėžinys seka.
- **Reikšmė**: ką ji apskaičiuoja. Eilutėje, kurią valdo išraiška, čia taip pat galite įvesti skaičių: CadCraft apskaičiuoja parametrą, slypintį už jo. Su `d1 = width / 2` įvedus `30` d1 reikšmėje, `width` nustatoma į 60.

Kai du parametrai valdo reikšmę (`width / 2 + gap`), dialogas klausia, kurį pakeisti. Kiekvienas pakeitimas yra vienas anuliavimo žingsnis ({{key:Mod+Z}}).

## Pridėkite savo

1. Atverkite skydelį {{ui:Parametrai}}.
2. Įveskite pavadinimą (`gap`) ir reikšmę (`10`), tada pasirinkite {{ui:Pridėti}}.
3. Naudokite jį: d1 išraiškoje įveskite `width / 2 + gap` ir paspauskite {{key:Enter}}.

Pavadinimai prasideda raide arba `_` ir turi raides, skaitmenis ir `_`. Funkcijų pavadinimai, `pi` ir vienetų pavadinimai negali būti pavadinimais.

## Išraiškos

| Rašoma | Reiškia |
|---|---|
| `+ - * / ^ %` | sudėti, atimti, dauginti, dalinti, laipsnis, liekana |
| `( )` | grupavimas |
| `sin cos tan asin acos atan atan2` | trigonometrija laipsniais |
| `sqrt pow exp ln log abs sign` | šaknys, laipsniai, logaritmai |
| `ceil floor int round min max` | apvalinimas ir ribos |
| `if(a > b, x, y)` | pasirinkimas |
| `pi` | 3.14159… |

Skaičiai gali turėti vienetą: `25mm`, `1in`, `2'`, `90deg`. Ilgiai su vienetu paverčiami į milimetrus, todėl vienetus naudokite tik brėžiniuose, matuojamuose milimetrais; kitur rašykite paprastus skaičius.

## Komandų eilutėje

`-PARAMETERS` daro tą patį be skydelio: `N` naujas, [Redaguoti (E)] (ir matmenų apribojimą), [Pervadinti (R)], [Naikinti (D)], `?` sąrašas.

## Ką atmeta

- Išraiška, kuri naudoja pati save, tiesiogiai ar per kitus: „width, d1 naudoja vienas kitą.“
- Reikšmė, kurios dydis negali turėti: neigiamas ilgis, kampas virš 180°.
- Reikšmė, kurios brėžinys negali priimti su kitais apribojimais: niekas nesikeičia, o pranešime įvardijami apribojimai, kurie trukdo.
- Parametro, kurį kas nors naudoja, trynimas: skydelis siūlo pirmiausia įrašyti jo reikšmę į juos. Matmenų apribojimo pavadinimas ištrinamas ištrynus patį apribojimą.
