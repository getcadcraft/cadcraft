---
title: Beszúrás fájlból vagy a könyvtárból
summary: Hozzon be egy blokkot vagy egy egész rajzot másik DWG vagy DXF fájlból, és helyezzen el elemeket a Könyvtárból, egy fájlból vagy másik könyvtárból, a forrásmegjelöléseikkel és frissítéseikkel együtt.
keywords: beszúrás, fájl, könyvtár, librarycraft, elem, berendezés, blokk másik rajzból, wblock, tervezőközpont, közreműködők, forrásmegjelölés, licenc, frissítés, csatorna, item.json
from: f6e4e452
---

## Blokk beszúrása másik rajzból

1. Írja be az `I` betűt, és nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a {{ui:Beszúrás}} gombra a Blokkok csoportban.
2. Az ablak alján lévő parancssor ezt kérdezi: `Enter block name or [File/Library]`. Írja be ide az `F` betűt, és nyomja meg az {{key:Enter}} billentyűt.
3. Válassza ki a számítógépén lévő DWG vagy DXF fájlt. Helyben olvassa be; nem nyílik meg, és semmi nem töltődik fel.
4. A {{ui:Beszúrás innen}} párbeszédpanelen válasszon egy blokkot a listából (a {{ui:Blokkok szűrése}} mezőbe írva megkeresheti), vagy hagyja meg az {{ui:Az egész rajz}} lehetőséget. Kattintson a {{ui:Beszúrás}} gombra.
5. Kattintson oda, ahová kerülnie kell, és töltse ki az attribútumokat, amelyeket kér.

A {{ui:Blokkok}} panelről is indulhat: írja be az `F` betűt a {{ui:Blokkok szűrése}} mezőbe, és nyomja meg az {{key:Enter}} billentyűt, vagy írjon be valamit, amire egyetlen blokk sem illik, és kattintson a {{ui:Fájlból…}} gombra. Az `L` és a {{ui:Könyvtár…}} ugyanígy nyitja meg a könyvtárat. A 0.10.1 verzió előtt a {{ui:Blokkok szűrése}} mezőbe írt betű csak ennek a rajznak a blokkjait kereste, és ezt írta: „No block matches the filter.”

Ha saját blokkjaiból álló rajzot szeretne kéznél tartani, kattintson a {{ui:Blokkok}} panel {{ui:Könyvtárak}} alatti {{ui:Rajz hozzáadása}} gombra, és válassza ki a DWG vagy DXF fájlt. A blokkjai képpel együtt listázódnak; kattintson egyre az elhelyezéshez.

Az egész rajz egyetlen blokként jön be, a fájl nevét viselve. A kiválasztott blokkon belüli blokkok is bejönnek. A általuk használt rétegek hozzáadódnak ehhez a rajzhoz.

Ha a másik rajz más mértékegységben van (mondjuk hüvelyk és milliméter), a CadCraft a hivatkozást ehhez igazítja, és ezt az előzményekben jelzi.

### Ha a név már foglalt

Ha ennek a rajznak már van ugyanilyen nevű blokkja, a CadCraft kérdez:

- A {{ui:A meglévők megtartása}} gomb ennek a rajznak az adott nevű blokkját használja.
- Az {{ui:Átnevezés}} gomb az újat `Name (2)` névvel hozza be.

A teljes beszúrás egy lépés: a {{key:Mod+Z}} eltávolítja a hivatkozást és a bemásolt definíciókat.

## A könyvtár megnyitása

Kattintson a {{ui:Blokkok}} panel {{ui:Könyvtár…}} gombjára, vagy a Blokkok csoport {{ui:Könyvtár}} gombjára, vagy írja be a `LIB` parancsot. Az `INSERT` kérdésnél az `L` is megnyitja.

A könyvtárnak négy forrása van, füleken:

- {{ui:Könyvtár}}: a CadCraft könyvtára. Keresés név, gyártó vagy típus szerint, szűrés kategória szerint.
- {{ui:Fájlok…}}: egy elemfájl (`item.json`) bármely könyvtárból, vagy egy rajz, táblázat vagy 3D-modell, amelyből elemeket készít: DWG vagy DXF (minden blokk egy elem lesz), név- és méretoszlopokat tartalmazó CSV, vagy glTF vagy OBJ modell. Semmi nem töltődik fel.
- {{ui:Standard}}: acélszelvények (szelvényként, homlokzatként vagy 3D-elemként) és szabványos alkatrészek, mint csavarok, anyák és csapágyak, amelyeket közzétett táblázatokból készítenek itt. Lásd: [Acélszelvények és szabványos alkatrészek elhelyezése](topic:steel-and-standard-parts).
- {{ui:Más csatornák}}: más könyvtárak, amelyek ugyanúgy válaszolnak, mint a Könyvtár. Címüket egyszer adja meg; ez a böngésző megjegyzi.

Minden kártya mutatja az előnézetet, a nevet, a gyártót és a típust, a licencet és a verziót. A visszavont elemet {{ui:Visszavont}} jelöli, az okkal együtt; a CadCraft megkérdezi, mielőtt elhelyezne egyet.

## Elem elhelyezése

1. Kattintson az {{ui:Elhelyezés}} gombra egy kártyán.
2. Kattintson oda, ahová az elem kerül. Előbb írja be az `R` betűt az elforgatáshoz, vagy az `S` betűt a méretezéshez.
3. A `Enter Item number (CC-ITEM)` kérdésnél nyomja meg az {{key:Enter}} billentyűt a következő szabad számért, vagy írja be a sajátját.

Az elem `LIB_<name>_v<version>` nevű blokk lesz, és ennek a rajznak a mértékegységeiben rajzolódik. Ha a rajznak nincs mértékegysége, az elem milliméterben kerül be, és az előzmények ezt jelzik; állítsa be előbb a jobb oldali panelen a {{ui:Mértékegységek}} értéket.

Adatai láthatatlan attribútumokként utaznak: az elem azonosítója és verziója, licence és forrásmegjelölése, gyártója, típusa, kategóriája és méretei. Lásd: [Blokkattribútumok](topic:attributes).

## Elemek a Ön nyelvén

Az elem nevét és leírását más nyelveken is megadhatja. Ha van olyan nyelven, amelyre a CadCraft be van állítva (Beállítások › Általános › Nyelv), a kártya és az elhelyezett blokk elemneve azt használja. Maga a blokk az elem saját nevéből készült nevet tartja meg, így egy rajzon elemenként egy blokk van, bármilyen nyelven helyezték is el.

## Frissítések keresése

1. Nyissa meg a könyvtárat.
2. Kattintson a {{ui:Frissítések keresése}} gombra.

A rajzban lévő minden könyvtári elem listázódik az elemszámaival, és azzal, hogy naprakész-e, van-e újabb verziója (és mi változott benne), vagy visszavonták. Kattintson egy sor {{ui:Frissítés}} gombjára, vagy az {{ui:Összes frissítése}} gombra. Minden hivatkozás az új verzió blokkjára lép, és megtartja elemszámát, mennyiségét, helyét, szögét és rétegét. A {{key:Mod+Z}} visszavonja a frissítést.

## A felhasznált anyagok feltüntetése

Kattintson a {{ui:Könyvtári közreműködők}} gombra. Minden elem a forrásmegjelölési sorával és a licencével szerepel.

- A {{ui:Forrásmegjelölés másolása}} egy elem sorát másolja; az {{ui:Összes másolása}} minden sort másol.
- A {{ui:CSV letöltése}} elmenti a listát az elemszámokkal, gyártókkal, típusokkal, licencekkel és forrásmegjelölésekkel. Bármely táblázatkezelőben megnyílik.

A CC BY-hoz hasonló licencek kérik, hogy a munka felhasználásánál nevezze meg a szerzőt. Tegye a sorokat a rajzra, a műszaki leírásba vagy a projekt jegyzeteibe.

## Szimbólumok és eszközök

A Könyvtárnak háromféle eeleme van: Szimbólumok (rajzi jelölések, 2D), Típusok (az elem anyagának összetétele) és Eszközök (fizikai tárgyak). A {{ui:Könyvtár}} fülön az {{ui:Elem típusa}} lista a Szimbólumokat és eszközöket együtt mutatja, csak a Szimbólumokat, vagy csak az Eszközöket. A Típusokból áll egy BimCraft-projekt, ezért a CadCraft nem listázza őket.

## Bejelentkezés a könyvtárba

Kattintson a {{ui:Bejelentkezés a könyvtárba}} gombra. Egy kis ablak nyílik a webhelyen; miután ott bejelentkezett, a CadCraft meg tudja mutatni csapata elemeit, és rögzíti, amit elhelyez, így értesül, ha egy használt elem megváltozik. A bejelentkezés ezen a böngészőlapon marad meg. Bármikor visszavonhatja a fiókja biztonsági oldalán.

## Saját objektumok megtartása a Saját objektumokban

A {{ui:Saját objektumok}} a Könyvtár egyik magánlistája, amelyet csak Ön lát. Nem szerepel a nyilvános könyvtárban, a keresésben, és nem látja a csapata; a fiókjával követi Önt minden olyan számítógépen, ahol a könyvtárba bejelentkezik.

1. A Könyvtár panelen kattintson a {{ui:Fájlok…}} gombra, és olvasson be egy fájlt.
2. Azon az elemen, amelyet újra szeretne, kattintson a {{ui:Megtartás a saját objektumokban}} gombra.
3. Később kattintson a {{ui:Saját objektumok}} gombra, majd a {{ui:Elhelyezés}} gombra. Úgy helyezi el, mint bármely könyvtári elemet, és a {{ui:Frissítések keresése}} is vonatkozik rá.
4. A {{ui:Eltávolítás a saját objektumok közül}} kiveszi a listából. A rajzokba már elhelyezett másolatok megmaradnak.

Be kell jelentkeznie a könyvtárba. Egy fájl beolvasása semmit nem tölt fel; egy elem megtartása csak azt az egy elemet küldi a fiókjába.

:::note
A Saját objektumok még tesztelés alatt áll, és lehet, hogy a fiókja számára még nincs megnyitva. Ha azt írja: „A Saját objektumok még nincs megnyitva ehhez a fiókhoz”, a saját fájljaiból továbbra is elhelyezhet elemeket a {{ui:Fájlok…}} segítségével.
:::

## Gyakori hibák

- **„Az IFC-típusokból készült elemek a BimCraftban vannak.”** Az IFC- és családfájlokat a BimCraft alkalmazás olvassa. Készítse el az elemet ott vagy a Könyvtárban, majd használja itt az `item.json` fájlját.
- **„A könyvtár nem érhető el.”** Offline van, vagy a könyvtár nem működik. A rajzban már lévő elemeket ez nem érinti.
- **Egy elem túl nagy vagy túl kicsi.** A rajz mértékegységei rosszak vagy nincsenek beállítva. Vonja vissza, állítsa be a {{ui:Mértékegységek}} értéket, és helyezze el újra.
