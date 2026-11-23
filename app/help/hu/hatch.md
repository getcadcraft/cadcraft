---
title: Sraffozás és kitöltött területek
summary: Töltsön ki egy területet tömör színnel vagy szabványos mintával úgy, hogy belekattint vagy zárt alakzatokat jelöl ki, állítsa be a minta léptékét és szögét, és utólag módosítsa a sraffozást.
keywords: sraffozás, bhatch, kitöltés, tömör kitöltés, minta, ansi31, ansi37, tégla, föld, háló, metszetvonalak, poché, sziget, határ, lépték, szög
from: e7feb344
---

## Amit készíteni fog

Egy falmetszet ANSI31 mintával, egy üresen hagyott oszloppal, és egy tömör kitöltés az oszlopban.

## Sraffozás kattintással egy területen belül

1. Rajzoljon egy téglalapot (`REC`, `0,0`, `@2000,1200`) és egy kört benne (`C`, `1000,600`, `300`). Kattintson a {{ui:Kiterjedés}} gombra.
2. Kattintson a {{ui:Rajzolás}} csoport {{ui:Sraffozás}} gombjára, vagy írja be a `H` betűt, és nyomja meg az {{key:Enter}} billentyűt. Az előzmények megmutatják az aktuális mintát, például `Current hatch: ANSI31, scale 1, angle 0°`.
3. Írja be a `P` betűt, és nyomja meg az {{key:Enter}} billentyűt, írja be az `ANSI31` szót, és nyomja meg az {{key:Enter}} billentyűt.
4. Írja be az `SC` betűket, és nyomja meg az {{key:Enter}} billentyűt, írja be a `20` számot, és nyomja meg az {{key:Enter}} billentyűt. A mintaméretek papíron értendők, ezért az 1:20 léptékben kinyomtatott rajzhoz a 20-as lépték kell.
5. A `Pick internal point` kérdésnél kattintson a téglalapon belül, a körön kívül. A sraffozás előnézetben megjelenik.
6. Nyomja meg az {{key:Enter}} billentyűt. A téglalap sraffozott lesz; a benne lévő kör üres marad, mert sziget.

Több területen belül is kattinthat az {{key:Enter}} megnyomása előtt, hogy egyetlen sraffozást készítsen belőlük. A `U` visszavonja az utolsó területet.

## Tömör kitöltés

1. Írja be a `H` betűt, és nyomja meg az {{key:Enter}} billentyűt.
2. Írja be a `P` betűt, nyomja meg az {{key:Enter}} billentyűt, írja be a `SOLID` szót, és nyomja meg az {{key:Enter}} billentyűt.
3. Kattintson a körön belül, majd nyomja meg az {{key:Enter}} billentyűt.

## Kijelölt zárt alakzatok sraffozása

Ahelyett, hogy belekattintana, a `Pick internal point` kérdésnél írja be az `S` betűt (Objektumok kijelölése), jelöljön ki zárt polivonalakat, köröket vagy zárt ellipsziseket, majd nyomja meg az {{key:Enter}} billentyűt. Az alakzatokon belüli alakzatok sorban üresek maradnak (a külső sraffozott, a következő belül üres, és így tovább).

## Minták

A minta kérdésnél írja be a `?` jelet a listához. A szabványos minták az ANSI31-től az ANSI38-ig, a LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS és EARTH, valamint a SOLID. Hüvelykben megadott rajzon (vagy láb és hüvelyk hosszformátummal) a minták hüvelyk méretei használatosak, ahogy az AutoCAD-ben; egyébként a milliméteresek.

A {{ui:Szög}} (`A`) elforgatja az egész mintát: 90°-os ANSI31 a másik irányba dől.

**Mintafájlok.** A `Pick internal point` kérdésnél írja be az `F` betűt (mintafájl), és válasszon egy `.pat` fájlt. A benne lévő minták csatlakoznak a listához; ha több van, megkérdezi, melyiket használja. A CadCraft által nem olvasható mintát nem tartalmazó fájl ezt jelzi, és a kihagyott mintákat megszámolja. A `.pat` fájl méretei saját mértékegység nélkül vannak, ezért a rajz mértékegységeiben értelmeződnek. Csak a szokásos `.pat` formátumban írt fájlokat próbálták ki; más program által készítettet nem.

## Sraffozás módosítása

Jelölje ki (kattintson az egyik vonalára). A {{ui:Tulajdonságok}} panelen: {{ui:Minta}}, {{ui:Minta léptéke}} és {{ui:Minta szöge}}. A megnyitott rajzok sraffozásai megmutatják a mintájukat, ha az egyike a szabványosak; a többi a színük halvány árnyalataként jelenik meg.

## Gyakori hibák

- **„Nincs zárt határ ezen a ponton.”** Hiány van a körvonalban, vagy annak egy része a képernyőn kívül esik: a CadCraft csak a képernyőn látható dolgokat vizsgálja. Zárja be a rést (nagyítson a sarkokra), vagy kicsinyítsen.
- **„A minta túl sűrű ezen a léptéken a rajzoláshoz.”** A vonalak közelebb lennének egymáshoz, mint amit a rajz meg tud jeleníteni. Használjon nagyobb léptéket: próbálja a kinyomtatási léptéket (20 az 1:20-hoz).
- **A minta hatalmasnak vagy aprónak látszik.** A lépték rajzegységben van mintaegységenként; lásd fent a 4. lépést.
- **A sraffozás már nem követi a körvonalát.** A {{cmd:HATCH}} paranccsal készült sraffozás ahhoz az objektumhoz tartozik, amelyből készült: ha mozgatja, forgatja vagy méretezi a körvonalat, a sraffozás vele megy; ha fogópontos átalakítással módosítja, a sraffozás újraszámítódik. A kapcsolat megszűnik, ha a körvonal már nem záródik, ha magát a sraffozást kézzel alakítja át, vagy ha levágja, és a parancssor ezt jelzi. Semmi nem vész el: a területet újra sraffozva újra kapcsolja.

## Sraffozás, amely a határához tartozik

Az `HATCH` paranccsal készített sraffozás emlékszik arra, mi határolja. Ha mozgatja, forgatja vagy méretezi a határt, a sraffozás és a mintája vele megy. Ha egy fogópontot húz a határ alakjának módosításához, a sraffozás újraszámítódik. Ha magát a sraffozást mozgatja, a határa is jön vele, mint egy kitöltött alakzat egy rajzprogramban.

A kapcsolat megszűnik, és a parancssor ezt jelzi, ha a határ már nem záródik, vagy ha kézzel alakítja át a sraffozást. A sraffozás maga megmarad. Sraffozás közben az `AS` betűket írja be, hogy önálló sraffozásokat készítsen. Ha határával együtt másol egy sraffozást, a másolat saját kapcsolatot kap.

A `HATCHEDIT` (`HE`) megváltoztatja a sraffozás mintáját, léptékét, szögét és kiindulópontját, és határhoz köti, vagy megszünteti a kötést. A kapcsolat a DWG és a DXF 2000 fájlokban mentődik. Egy DXF R12 fájlban nincs sraffozás-objektum, és más programok által készített kapcsolatokat nem olvas be: ezekhez használja a `HATCHEDIT` parancsot és a Kapcsolás lehetőséget.

Ha egy sraffozásnak már nincs határa (a határt törölték, vagy a fájl nélküle érkezett), visszaadhatja: a `HATCHGENERATEBOUNDARY` (`HGB`) minden hurok köré zárt polivonalat rajzol, és ha az Igen választ adja, a sraffozást hozzákapcsolja.

## Színátmenetes kitöltés

A `GRADIENT` (`GD`) az alakzatot mintázat helyett színátmenettel tölti ki: ugyanazokkal a kiválasztásokkal, mint a `HATCH`, miután megkérdezi a típust (lineáris, hengeres, gömbi, félgömbi, görbült, és ezek mindegyike megfordítva), egy színt árnyalattal vagy két színt, a szöget, és hogy középre igazított-e. A `HATCH` paranccsal a `G` opció ugyanezt teszi. A `HATCHEDIT` `G` paranccsal, vagy a {{ui:Tulajdonságok}} alatt a Színátmenet menüpontnál módosíthatja a színátmenetet, vagy bármely sraffozást színátmenetessé alakíthat.

A színátmenet a képernyőn és a nyomtatásban is megjelenik. Ha DWG 2004 vagy újabb formátumban menti, más programok valódi színátmenetes sraffozást kapnak. A DXF 2000 és a DWG 2000 formátumban nincs színátmenet: ott a CadCraft csak a saját használatára tartja meg, más programok az első színnel kitöltött tömör kitöltést látják.

## Sraffozás levágása

A `TRIM` ugyanúgy vágja a sraffozást, mint bármely más objektumot. Kattintson a sraffozásra a vágóél azon oldalán, amelyet el szeretne távolítani: az élek felosztják a sraffozott területet, és a kiválasztott darab eltűnik. Gyors módban minden objektum vágóél; ha sok van, előbb válassza ki az éleket (`T` opció). A levágott sraffozás már nincs a határához kötve, mert már nem tölti ki azt.
