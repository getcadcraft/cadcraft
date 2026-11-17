---
title: Pontok BIM-programokhoz
summary: Pontok és a leírással ellátott blokkok beszúrási pontjainak exportálása CSV vagy TXT fájlba, amelyet BIM- és felmérőprogramok importálnak.
keywords: exportpoints, pontok exportálása, pontok, csv, txt, pnezd, penzd, xyz, felmérési pontok, koordináták, bim, kitűzés, pontfájl, északi koordináta, keleti koordináta, magasság
from: d80e2d53
---

## Amit elkészít

Egy pontfájl: soronként egy pont, a számával, északi és keleti koordinátájával, magasságával és leírásával, amelyet a BIM-programok (köztük a Revit és az Archicad) és a felmérőszoftverek importálhatnak felmérési pontok, telekhatár-jelek vagy berendezések elhelyezéséhez.

## Pontok exportálása

1. Jelölje ki azokat a pontokat és blokkhivatkozásokat, amelyek beszúrási pontját exportálni szeretné, vagy ne jelöljön ki semmit, hogy minden pontot vegyen.
2. Írja be az {{cmd:EXPORTPOINTS}} (vagy `EXPPTS`, vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Pontok exportálása}}) parancsot, és nyomja meg az {{key:Enter}} billentyűt (a `Jelölje ki a pontokat és a blokkokat` kérésnél nyomja meg újra az {{key:Enter}} billentyűt, ha nincs semmi kijelölve).
3. Ha attribútumokkal rendelkező blokkokat jelölt ki, a CadCraft felsorolja a címkéiket: írja be azt, amelynek értéke a leírás (például `ITEM`), vagy bármi mást, hogy minden blokk a nevét kapja leírásul.
4. Válassza ki az oszlopokat: `PNEZD` (pont, északi, keleti, magasság, leírás: a szokásos), `PENZD` (a keleti az északi előtt) vagy `XYZ` (csak a koordináták).
5. Válassza ki a mértékegységet: `D` a rajz szerint, `M` méter vagy `F` láb (csak ha a rajz mértékegysége be van állítva: {{ui:Tulajdonságok}} › {{ui:Mértékegységek}}, miközben nincs semmi kijelölve).
6. Ha van beállított UCS, válassza a `W` (világ) vagy a `U` (UCS) koordinátákat (lásd [UCS és elforgatott nézet](topic:ucs-and-turned-view)).
7. Válassza a `C`-t egy vesszővel elválasztott `.csv`, vagy a `T`-t egy tabulátorral elválasztott `.txt` fájlhoz, és adja meg az első pontszámot.

A fájl `<drawing>-points.csv` (vagy `.txt`) néven töltődik le, és az előzmények megmondják, hány pontot tartalmaz.

## Mi van a fájlban

- Soronként egy pont, sortöréssel (CR LF) lezárva, három tizedesjeggyel.
- Egy pont magassága a Z-je (ha nincs, 0). Egy blokk pontja a beszúrási pontja.
- Ha egy leírás vesszőt (vagy TXT-ben tabulátort) vagy idézőjelet tartalmaz, dupla idézőjelbe kerül, és az idézőjelei duplázódnak.
- A formátum az, amelyet a CivilCraft olvas és ír, így a fájl ott is pontként nyílik meg.

## Gyakori hibák

- Az egységek között csak a `D` kínálkozik: a rajznak nincs mértékegysége beállítva. Állítsa be, vagy konvertálja a másik programban.
- A pontok a másik programban nem ott vannak, ahol várja: exportálja a világkoordinátákat (`W`), vagy azt az UCS-t, amelyet a másik program felmérési pontja használ (`U`).
