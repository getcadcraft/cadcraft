---
title: Okos falak, ajtók és ablakok rajzolása 2D-ben
summary: Falakat úgy rajzoljon, mint egy polivonalat, tisztán csatlakoztassa őket, és ajtókat és ablakokat helyezzen be, amelyek a falakkal együtt mozognak. Minden 2D, 3D-modell nélkül.
keywords: fal, falak, WALL, WA, ajtó, DOOR, DR, ablak, WINDOW, WN, DELOPENING, okos fal, alaprajz, nyitási irány, zsanér, nyílás
from: 45845d49
---

Itt a falak 2D-s rajzelemek. Nem készítenek 3D-modellt, így az alaprajz ugyanolyan könnyű marad, mint egy vonalrajz. Épületmodellhez a BimCraft-ot kell használni.

## Falak rajzolása

Írja be a `WALL` (`WA`) parancsot, vagy válassza a {{ui:Fal}} elemet a {{ui:Rajzolás}} csoport {{ui:Továbbiak}} menüjéből, majd kattintson pontokra, ahogy egy polivonalnál tenné. A befejezéshez nyomja meg az {{key:Enter}} billentyűt, a helyiség lezárásához pedig írja be a `C`-t.

- A `T` a vastagságot állítja be.
- A `J` megadja, mit kövessenek a kattintásai: a fal középvonalát, vagy a bal vagy jobb oldali felületét.
- Az `F` a kitöltést állítja be: nincs, tömör vagy sraffozás.

A sarkok maguktól ferdevágással csatlakoznak. Az a fal, amely egy másik fal vastagságán belül végződik, tiszta T-csatlakozást alkot vele, a keresztező falak pedig egymás felé nyílnak meg. A csatlakozások a falakkal együtt mentődnek. Téglalapokhoz, sokszögekhez, ívekhez, felosztáshoz, zárakhoz és a többihez lásd: „Falformák, vágások, eltolások és zárak 2D-s falakhoz”.

## Ajtók és ablakok beillesztése

Írja be a `DOOR` (`DR`) vagy a `WINDOW` (`WN`) parancsot, és kattintson egy falra. Az ajtó arra az oldalra nyílik, amerre kattint. A `W` a szélességet, a `Y` a típust, az `H` a zsanér oldalát állítja be. Több elhelyezéséhez tovább kattinthat, a befejezéshez pedig nyomja meg az {{key:Enter}} billentyűt. Az ajtók lehetnek egyszárnyúak, kétszárnyúak, tolóajtók vagy nyitott átjárók. Az ablakok lehetnek fixek, nyíló szárnyúak vagy tolóablakok.

## Módosítás

Jelöljön ki egy falat, hogy lássa a fogópontjait:

- A végfogópontok nyújtják a falat. A hozzá csatlakozó falak követik.
- A középső fogópont mozgatja a falat.
- A nyíláson lévő fogópont a fal mentén csúsztatja.
- A nyilak megfordítják az ajtó zsanérját és nyitási irányát.

A Tulajdonságok megmutatja a vastagságot, a kitöltést és minden nyílást: típus, szélesség, helyzet, zsanér, nyitási irány, nyitva vagy zárva mutatva, valamint az {{ui:Eltávolítás}} gomb. A `DELOPENING` azt a nyílást veszi ki, amelyhez legközelebb kattint.

A `MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` és `ERASE` a szokásos módon működik. Az ajtók és ablakok a falukkal együtt mennek, a csatlakozó falak megtartják a csatlakozásaikat, és egy visszavonási lépés mindent visszavon.

## Más programokban

Minden fal sima blokként mentődik, így más CAD-programok helyesen jelenítik meg, és mozgathatják, de falként nem tudják szerkeszteni. Az `EXPLODE` a falat sima vonalakká és ívekké alakítja, és így már nem lesz fal.
