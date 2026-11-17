---
title: Nustatyti brėžinio ribas
summary: LIMITS nustato brėžinio stačiakampį: tinklelis jį užpildo, ZOOM Visi jį parodo, o įjungus ribas, taškai už jo atmetami. Jos įrašomos DWG ir DXF failuose.
keywords: ribos, brėžinio ribos, LIMITS, LIMMIN, LIMMAX, LIMCHECK, tinklelis, už ribų, lapo dydis, brėžinio sritis, rodyti visą brėžinį, kontūras
from: 9e97b30d
---

**Brėžinio ribos** yra stačiakampis, nurodantis, koks didelis brėžinys turi būti: sritis, kurioje planuojate braižyti, pavyzdžiui lapas 420 × 297. Naujas brėžinys ribų neturi, todėl tinklelis ir brėžinio sritis yra neribotos, kaip anksčiau.

## Nustatykite jas

Įveskite {{cmd:LIMITS}} ir atsakykite:

- `Nurodykite apatinio kairiojo kampo tašką arba [ON/OFF] <0,0>`: taškas arba {{key:Enter}}, kad liktų dabartinis.
- `Nurodykite viršutinio dešiniojo kampo tašką <420,297>`: taškas arba {{key:Enter}}, kad liktų dabartinis. Jis turi būti aukščiau ir dešiniau pirmojo.

Arba pirmame klausime įveskite `ON` arba `OFF`, kad perjungtumėte patikrą nekeisdami stačiakampio. Kampų nustatymas yra vienas atšaukimo žingsnis, ir kiekvienas ON bei OFF taip pat.

## Ką jos daro

- **Tinklelis užpildo ribas** ir sustoja jų krašte. Tai srities vaizdas, todėl įjunkite {{ui:Grid}}, kad jį pamatytumėte.
- **ZOOM Visi** ({{cmd:ZOOM}}, tada {{ui:All}}) parodo ir ribas, ir brėžinį kartu; {{ui:Extents}} vis dar rodo tik brėžinį.
- **Su įjungtomis ribomis** taškas, kurį įvedate arba spustelite už jų, atmetamas su `**Už ribų`, o užklausa lieka. Tai apima komandas, kurios kuria objektus: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, matmenų komandas ir dar kelias. Komandos, kurios tik perkelia, pažymi ar matuoja, neribojamos, taip pat neribojamas įklijavimas, rankenėlės vilkimas ar LISP rutinos sukurtas objektas: ribos yra braižymo vadovas, o ne siena. Su išjungtomis ribomis nieko neatmetama.
- Objektai, kurie jau yra už ribų, lieka kur buvo.

## Failuose ir LISP

Jos įrašomos DWG ir DXF kaip `$LIMMIN`, `$LIMMAX` ir `$LIMCHECK`. Failas iš kitos programos, kuriame yra tik tos programos numatytosios ribos (0,0 iki 12,9 arba 420,297, patikra išjungta), atsidaro be ribų, kad jo tinklelis nebūtų suspaustas į mažą stačiakampį; failas su savo ribomis arba įjungta patikra jas išlaiko. LISP'e `(getvar "LIMMIN")`, `LIMMAX` ir `LIMCHECK` jas nuskaito, o `setvar` jas įrašo kaip vieną atšaukimo žingsnį.

Ribos priklauso modeliui. Lapas (išdėstymas) turi savo popieriaus dydį.
