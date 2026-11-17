---
title: Területek sraffozása és kitöltése
summary: Terület kitöltése egyszínű vagy szabványos mintával úgy, hogy belekattint, vagy zárt alakzatokat jelöl ki, beállítja a minta léptékét és szögét, és később módosíthatja a sraffozást.
keywords: sraffozás, bhatch, kitöltés, tömör kitöltés, minta, ansi31, ansi37, tégla, föld, háló, metszővonalak, poché, sziget, határvonal, léptek, szög
from: 14399174
---

## Mit készít el

Egy falmetszet ANSI31 mintával kitöltve, egy benne lévő oszlop üresen hagyva, és tömör kitöltés az oszlopban.

## Sraffozás terület belsejére kattintva

1. Rajzoljon egy téglalapot (`REC`, `0,0`, `@2000,1200`) és egy kört benne (`C`, `1000,600`, `300`). Kattintson a {{ui:Kiterjedés}} gombra.
2. Kattintson a {{ui:Rajzolás}} csoportban lévő {{ui:Sraffozás}} gombra, vagy írja be a `H` parancsot, majd nyomja meg az {{key:Enter}} billentyűt. Az előzmények megmutatják, melyik minta az aktuális, például `Aktuális sraffozás: ANSI31, léptek 1, szög 0°`.
3. Írja be a `P` parancsot, majd nyomja meg az {{key:Enter}} billentyűt, írja be az `ANSI31` értéket, és nyomja meg az {{key:Enter}} billentyűt.
4. Írja be a `SC` értéket, majd nyomja meg az {{key:Enter}} billentyűt, írja be a `20` értéket, és nyomja meg az {{key:Enter}} billentyűt. A mintaméretek papíron értendők, ezért az 1:20 léptékben plottolt rajzhoz a 20-as léptékű minta kell.
5. A `Adja meg a belső pontot` kérésnél kattintson a téglalapon belülre, a körön kívülre. A sraffozás előnézetben megjelenik.
6. Nyomja meg az {{key:Enter}} billentyűt. A téglalap ki lesz sraffozva; a benne lévő kör üres marad, mert sziget.

Több terület belsejére kattintva az {{key:Enter}} megnyomása előtt egy sraffozássá lesznek. Visszavonás (U) az utolsó területet veszi vissza.

## Tömör kitöltés

1. Írja be a `H` parancsot, majd nyomja meg az {{key:Enter}} billentyűt.
2. Írja be a `P` parancsot, nyomja meg az {{key:Enter}} billentyűt, írja be a `SOLID` értéket, és nyomja meg az {{key:Enter}} billentyűt.
3. Kattintson a körön belülre, majd nyomja meg az {{key:Enter}} billentyűt.

## Kijelölt zárt alakzatok sraffozása

Belekattintás helyett a `Adja meg a belső pontot` kérésnél írja be az Objektumok kijelölése (S) lehetőséget, és jelöljön ki zárt polivonalakat, köröket vagy zárt ellipsziseket, majd nyomja meg az {{key:Enter}} billentyűt. Más alakzatok belsejében lévő alakzatok sorban üresen maradnak (a külső sraffozott, a következő üres, és így tovább).

## Minták

A minta kérdésénél írja be a `?` jelet a listához. A szabványos minták: ANSI31–ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS és EARTH, valamint SOLID. Hüvelykben megadott rajzban (vagy ha a hosszformátum láb és hüvelyk), az AutoCAD-hez hasonlóan a minták hüvelyk-méretei használatosak; egyéb esetben a milliméteresek.

{{ui:Szög}} (`A`) elforgatja az egész mintát: a 90°-os ANSI31 az ellenkező irányba dől.

**Mintafájlok.** Válassza a Mintafájl (F) lehetőséget a `Adja meg a belső pontot` kérésnél, majd válasszon egy `.pat` fájlt. A benne lévő minták csatlakoznak a listához; ha több van, a program megkérdezi, melyiket használja. Ha a fájlban olyan minta van, amelyet a CadCraft nem tud beolvasni, ezt jelzi, és a kihagyott mintákat megszámolja. A `.pat` fájlban a méreteknek nincs saját mértékegységük, ezért a rajz egységeiben olvassák be őket. Csak a szokásos `.pat` formátumban írt fájlokat próbálták ki; más programmal készítetteket nem.

## Sraffozás módosítása

Jelölje ki (kattintson egyik vonalára). A {{ui:Tulajdonságok}} területen: {{ui:Minta}}, {{ui:Minta léptéke}} és {{ui:Minta szöge}}. A megnyitott rajzok sraffozásai a mintájukat mutatják, ha az a szabványos minták egyike; a többi a színük halvány árnyalataként jelenik meg.

## Gyakori hibák

- **„Nincs zárt határvonal ezen a ponton.”** A körvonalban rés van, vagy annak egy része kívül esik a képernyőn: a CadCraft csak a képernyőn látható elemeket vizsgálja. Zárja be a rést (nagyítson rá a sarkokra), vagy kicsinyítsen.
- **„A minta túl sűrű ehhez a léptékhez.”** A vonalak közelebb lennének egymáshoz, mint amennyit a rajz meg tud jeleníteni. Használjon nagyobb léptéket: próbálja a plottolási léptéket (1:20 esetén 20).
- **A minta túl nagynak vagy túl kicsinek látszik.** A léptéket rajzegységben adják meg mintaegységenként; lásd a fenti 4. lépést.
- **A körvonal mozgatásakor a sraffozás nem mozdul.** A sraffozás nincs a határvonalához kötve. Mozgassa mindkettőt, vagy sraffozza újra.

## Határvonalához kötődő sraffozás

A `HATCH` paranccsal készített sraffozás emlékszik, mi határolja. Ha a határvonalat mozgatja, elforgatja vagy átméretezi, a sraffozás és a mintája vele együtt változik. Ha fogópontot húz a határvonal átalakításához, a sraffozás újra kiszámításra kerül. Ha csak a sraffozást mozgatja, a határvonala is vele jön, mint egy kitöltött alakzat egy rajzolóprogramban.

A kapcsolat megszűnik, és a parancssor ezt jelzi, ha a határvonal már nem záródik, vagy ha kézzel alakítja át a sraffozást. Maga a sraffozás megmarad. Sraffozás közben írja be az `AS` parancsot, ha önálló sraffozásokat szeretne készíteni. Ha a sraffozást a határvonalával együtt másolja, a másolatnak saját kapcsolata lesz.

A `HATCHEDIT` (`HE`) módosítja a sraffozás mintáját, léptékét, szögét és kezdőpontját, valamint a határvonalhoz köti, vagy a kapcsolatot megszünteti. A kapcsolat DWG és DXF 2000 fájlban mentődik. A DXF R12 fájlban nincs sraffozás objektum, a más programokban készült kapcsolatok pedig nem olvasódnak be: ezekhez használja a `HATCHEDIT` parancsot és a Kapcsolás (L) lehetőséget.

Ha a sraffozásnak már nincs határvonala (a határvonalat törölték, vagy a fájl nélküle érkezett), visszaadhatja: a `HATCHGENERATEBOUNDARY` (`HGB`) parancs minden sraffozott hurok köré zárt polivonalat rajzol, és ha Igen választ ad, a sraffozást ezekhez köti.

## Színátmenetes kitöltés

A `GRADIENT` (`GD`) parancs színátmenettel tölti ki a területet minta helyett: ugyanazokkal a kijelölésekkel, mint a `HATCH`, miután megkérdezi a típust (lineáris, hengeres, gömbi, félgömbi, görbített, és ezek mindegyike fordítva), egy szín árnyalattal vagy két szín, a szöget, és hogy középre helyezve legyen-e. A `HATCH` parancsban a Színátmenet (G) lehetőség ugyanezt teszi. A `HATCHEDIT` `G` parancsa, vagy a {{ui:Tulajdonságok}} alatti Színátmenet, bármely sraffozást színátmenetessé tesz vagy módosítja.

A színátmenet megjelenik a képernyőn és a plottolt rajzon. DWG 2004 vagy újabb formátumban mentve más programok valódi színátmenetes sraffozást kapnak. A DXF 2000 és a DWG 2000 nem ismeri a színátmenetet: ott a CadCraft megtartja magának, a más programok pedig az első színnel kitöltött tömör kitöltést látják.

## Sraffozás levágása

A `TRIM` úgy vágja a sraffozást, mint bármely más objektumot. Kattintson a sraffozásra a levágóél azon oldalán, amelyet el szeretne távolítani: az élek felosztják a sraffozott területet, és ez a rész eltávolításra kerül. Gyors módban minden objektum levágóél; ha sok van, előbb jelölje ki a levágóéleket (T). A levágott sraffozás nincs többé a határvonalához kötve, mert már nem tölti ki azt.
