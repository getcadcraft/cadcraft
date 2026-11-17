---
title: Vnos in prikaz smeri in kotov v stopinjah, minutah in sekundah
summary: Vnesite smer kot geodetsko smer, na primer N45°23'30"E, ali kot stopinje-minute-sekunde kjer koli je zahtevan kot, in izberite, kako risba prikazuje kote z AUNITS.
keywords: smer, bearing, geodet, kvadrantna smer, N45E, stopinje minute sekunde, DMS, kot, usmeritev, parcela, parcele, zakoličba, poligonski vlak, AUNITS, ANGUNITS, format kota, polarno, neposredna razdalja, DIST
from: af805567
---

Kjer koli CadCraft zahteva **kot ali smer**, lahko vnesete **kvadrantno smer** ali kot v **stopinjah, minutah in sekundah**, pa tudi navadno število stopinj.

## Smeri

Smer imenuje sever ali jug, kot do 90°, nato vzhod ali zahod:

| Vnesete | Smer |
|---|---|
| `N45°23'30"E` ali `N45d23'30"E` | 45°23'30" od severa proti vzhodu |
| `S10-30-00W` ali `S 10 30 W` | 10°30' od juga proti zahodu (vezaji ali presledki med deli) |
| `N45.5E` | 45.5° od severa proti vzhodu |
| `N`, `E`, `S`, `W` | točno sever, vzhod, jug, zahod |

Črke so lahko katerekoli velikosti. V španščini `O` pomeni tudi zahod (oeste). `d` in `°` pomenita isto; `'` so minute in `"` sekunde.

Za zarisovanje parcelne meje dolžine 20 m pod N45°23'E začnite {{cmd:LINE}}, vnesite prvo točko in nato `@20<N45d23'E`. Enako deluje pri pozivu za kot pri {{cmd:ROTATE}}, pri vsakem drugem pozivu, ki zahteva kot, ter v polju za kot v {{ui:Dynamic input}}.

## Stopinje, minute, sekunde

`45°23'30"`, `45d23'30"`, `45d30'` ali `45d` je kot od osi X, v nasprotni smeri urnega kazalca. Znak `°` ali `d` je potreben: `45-23-30` se prebere kot računska operacija (45 − 23 − 30). Minute in sekunde morajo biti pod 60. Navadno število z računom (`360/7`) še vedno deluje.

## Kako so prikazani koti

Vnesite {{cmd:AUNITS}} (ali izberite {{ui:Angle format}} v {{ui:Properties}} › {{ui:Current settings}}) in izberite:

- **Decimalne stopinje** (privzeto): `44.6083°`.
- **Stopinje-minute-sekunde**: `44°36'30"`.
- **Geodetske smeri**: `N45°23'30"E`.

Natančnost sledi temu, kar vnesete za {{cmd:AUNITS}}: 0 prikaže stopinje, 2 minute, 4 sekunde, 5 do 8 pa doda decimalke sekunde. Oblika se prikaže v {{cmd:DIST}}, v vrstici stanja, v dinamičnem vnosu in v sledilnih namigih ter v poljih kotov v {{ui:Properties}} (polje, ki ga urejate, sprejme katerokoli zgoraj navedeno obliko). Je en korak razveljavitve in se shrani v datotekah DWG in DXF (`$AUNITS`, `$AUPREC`); LISP jo bere in zapisuje kot `AUNITS` in `AUPREC`.
