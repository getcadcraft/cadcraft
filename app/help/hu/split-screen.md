---
title: Képernyő osztása
summary: Mutassa a rajzot két, három vagy négy panelen, mindegyiken saját nagyítással, tegyen lapot a modell mellé, és nyisson meg több rajzot egymás mellett.
keywords: osztás, képernyőosztás, panelek, nézetablakok, vports, csempézés, egymás mellett, egymás alatt, két rajz, lapok, dokumentumlapok, összehasonlítás, elválasztó, modell és lap, több rajz, megnyitott rajzok
from: ee2f034b
---

## Amit megtanul

Hogyan nézhet meg egy rajzot egyszerre több panelen, mindegyiket saját nagyítással, valamint hogyan nyithat meg több rajzot, és nézheti őket egymás mellett.

## Egy rajz felosztása panelekre

1. Nyisson meg egy rajzot, vagy rajzoljon néhány vonalat és kört.
2. Nyissa meg a {{ui:Nézet}} › {{ui:Továbbiak}} menüt, és válassza a {{ui:Felosztás egymás mellett}} lehetőséget (vagy gépelje be a {{cmd:VPORTS}} parancsot, majd a `2`-t, és nyomja meg az {{key:Enter}} billentyűt).

A rajzterület két panelre oszlik, mindkettő ugyanazt a nézetet mutatja. Az aktív panel kék keretet kap, és ott jelenik meg a kereszthajszál.

3. Kattintson a másik panelre. Az lesz az aktív. (Az első kattintás csak a panelt váltja; a kijelöléshez kattintson újra.)
4. Nagyítson a görgővel. Csak az a panel nagyít.
5. Húzza a két panel közti vonalat, hogy az egyik szélesebb legyen. Az {{key:Home}} billentyű az elválasztón állva visszateszi középre.

A {{cmd:VPORTS}} parancs fogadja még a `3`-at (két panel az egyik oldalon, egy nagy a másikon: `L` vagy `R`), a `4`-et, valamint az `SI`-t, amellyel újra egy panel marad. Ekkor az aktív panel nézete kitölti a területet. Rajzlapon a {{cmd:VPORTS}} ehelyett nézetablakot ad a laphoz (az AutoCAD szerint); ott a {{cmd:SPLIT}} parancsot gépelje be, vagy használja a Nézet menüt.

## Rajzolás egyik paneltől a másikba

1. Osszon egymás mellé, és minden panelt a rajz más-más sarkára nagyítson.
2. Gépelje be az `L` parancsot, nyomja meg az {{key:Enter}} billentyűt, majd kattintson az első pontra a bal panelen.
3. Kattintson egyszer a jobb panelre, hogy aktívvá tegye, majd kattintson ott a második pontra.

A vonal a két hely között fut. A parancs a panelek váltása közben is folytatódik, a gumiszalag pedig minden panelen látszik.

## A modell rajzlap mellett

1. Osszon egymás mellé.
2. Kattintson a jobb panelre, majd a rajz alatt lévő rajzlap fülére.

A jobb panel a rajzlapot mutatja; a bal még mindig a modellt. Minden panel megtartja a saját terét, így rajzolhat a modellen, és figyelheti, ahogy a rajzlap nézetablaka követi.

## Több rajz egy ablakban

1. Nyisson meg egy rajzot. Majd nyisson meg egy másikat (vagy nyomja meg a {{ui:Új}} gombot).

Minden rajz a saját lapján nyílik meg a rajzterület felett. Lapra kattintva válthat; a parancssor, a panelek és a visszavonás azt a rajzot követi, amelyre átvált. A {{key:Mod+C}} az egyik rajzban, a {{key:Mod+V}} a másikban objektumokat másol a kettő között.

2. Kattintson a {{ui:A megnyitott rajzok egymás mellé rendezése}} gombra (a lapok végén lévő osztásikon), vagy a mellette lévő egymásra helyezett ikonra.

Most minden panel a megnyitott rajzok egyikét mutatja, legfeljebb négyet. Kattintson egy panelre, hogy abban a rajzban dolgozzon.

3. Kattintson a lapon lévő {{ui:×}} gombra, hogy bezárja a rajzot. Ha vannak nem mentett módosításai, a CadCraft előbb rákérdez.

:::tip
Ha az ablakban csak egy új, érintetlen rajz van, a rajz megnyitása ezt a lapot használja, nem ad hozzá újat.
:::

## Együtt eltolás és nagyítás

Két változat összehasonlításához rendezze őket egymás mellé, majd kattintson a {{ui:A panelek nézeteinek összekapcsolása}} gombra (a lapok végén lévő láncszem ikon), vagy válassza ki a {{ui:Nézet}} › {{ui:Továbbiak}} menüben, vagy gépelje be a {{cmd:LINKVIEWS}} parancsot és az `ON`-t. Ekkor egy panelen történő eltolás vagy nagyítás minden olyan panelt, amely a modellt mutatja (vagy minden olyan panelt, amely rajzlapot mutat), ugyanarra a helyre mozgat, így a két rajz egymáshoz igazodva marad. A {{cmd:LINKVIEWS}} `OFF` parancs újra lehetővé teszi, hogy minden panel önállóan mozogjon.

## Gyakori hibák

- **A kattintásom nem történt semmi.** Az aktívvá tette azt a panelt. A kiválasztáshoz vagy rajzoláshoz kattintson újra.
- **A görgő rossz panelt nagyított.** A görgő a mutató alatti panelt nagyítja, és aktívvá teszi.
- **A panelek visszaálltak egyre.** A rajz megnyitásakor az úgy jelenik meg, ahogy mentették; a panelek nélkül mentett rajz egy panellel nyílik meg.
- **Az oldal elhagyásakor nem látható módosításokra figyelmeztet.** Egy másik lapon van módosított rajz. Váltson arra, és mentse, vagy lépjen ki mentés nélkül.
