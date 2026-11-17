---
title: Megvalósult pontok ellenőrzése
summary: Olvassa be a mérőcsapat által felmért pontokat, és hasonlítsa össze őket a rajz pontjaival és blokkjaival: tűrésen belül vagy kívül, nem mért és többlet pontok — jelölve a rajzon és CSV-jelentésként mentve.
keywords: as built, as-built, asbuilt, felmérés, totálállomás, kitűzés, pontok kitűzése, pontfájl, csv, txt, pnezd, penzd, xyz, tűrés, eltérés, ellenőrzés, összehasonlítás, exportpoints, kitűzési pontok
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) az {{cmd:EXPORTPOINTS}} párja: a rajz pontjait exportálja a terepi munkához, a csapat kitűzi őket, megméri, ami megépült, az ASBUILT pedig összehasonlítja a fájlukat a rajzzal.

1. Írja be: `ASBUILT`, és jelölje ki ugyanazokat a pontokat és blokkokat, amelyeket exportált (az Enter minden POINT-ot kijelöl, ahogy az EXPORTPOINTS is).
2. **Párosítsa a megvalósult pontokat** **Szám** szerint (a csapat megtartotta a pontszámait: adja meg az első számot, amellyel exportált), vagy **Legközelebbi** alapján (saját számozást használtak: minden tervezési pont a hozzá legközelebbit kapja).
3. Adja meg a fájl mértékegységeit és koordinátáit, ahogy exportálta őket (Rajz, Méter vagy Láb; Világ vagy UCS), és a **tűrést** rajzegységben.
4. Válassza ki a csapat CSV- vagy TXT-fájlját. A CadCraft úgy olvassa be, ahogy a CivilCraft: vesszővel, tabulátorral, pontosvesszővel vagy szóközzel tagolva, oszlopneveket megadó fejléc-sorral, vagy PNEZD esetén az oszlopok száma alapján.

A parancssor megmondja, hány pont lett párosítva, hány van tűrésen belül, hány kívül, hány nem mért és hány többlet pont van, valamint a legnagyobb távolságot. **Megjelöli a rajzon?** Az Igen a pontokat az **AS-BUILT** rétegre helyezi egy visszavonási lépésként: minden mérési ponthoz egy pont kerül, mellette a száma és a távolsága, valamint piros vonal húzódik a tervezési ponttól minden tűrésen kívüli mérési pontig. Egy CSV-jelentés is letölthető minden ponttal: a tervezési és a megvalósult koordináták, a különbségek keletre, északra és magasságban, valamint az eredmény.

Lásd még: [Pontok BIM-programokhoz](topic:points-for-bim).
