---
title: Beszúrás fájlból vagy a könyvtárból
summary: Hozzon be egy blokkot vagy egy teljes rajzot másik DWG vagy DXF fájlból, és helyezzen el elemeket a Könyvtárból, egy fájlból vagy másik könyvtárból, a forrásmegjelölésükkel és frissítéseikkel együtt.
keywords: beszúrás, fájl, könyvtár, librarycraft, elem, berendezés, blokk másik rajzból, wblock, tervezőközpont, közreműködők, forrásmegjelölés, licenc, frissítés, hírcsatorna, item.json
from: 316188d2
---

## Blokk beszúrása másik rajzból

1. Írja be az `I` parancsot, és nyomja meg a(z) {{key:Enter}} billentyűt, vagy kattintson a(z) {{ui:Beszúrás}} gombra a Blokkok csoportban.
2. Az `Adja meg a blokk nevét vagy [Fájl/Könyvtár (L)]` kérésnél írja be az `F` betűt, és nyomja meg a(z) {{key:Enter}} billentyűt.
3. Válassza ki a DWG vagy DXF fájlt ezen a számítógépen. A fájl itt kerül beolvasásra; nem nyílik meg, és semmi nem töltődik fel.
4. A(z) {{ui:Beszúrás innen}} párbeszédpanelen válasszon egy blokkot a listából (a(z) {{ui:Blokkok szűrése}} mezőbe írva megkeresheti), vagy hagyja meg az {{ui:Az egész rajz}} lehetőséget. Kattintson a(z) {{ui:Beszúrás}} gombra.
5. Kattintson arra a helyre, ahová kerül, és töltse ki a kért attribútumokat.

Az egész rajz egyetlen blokként kerül be, a fájl nevéről elnevezve. A kiválasztott blokkon belüli blokkok is bekerülnek. A használt rétegek hozzáadódnak ehhez a rajzhoz.

Ha a másik rajz más mértékegységben van (mondjuk hüvelyk és milliméter), a CadCraft a hivatkozást ehhez igazítja, és ezt az előzményekben jelzi.

### Ha a név már foglalt

Ha ennek a rajznak már van ugyanolyan nevű blokkja, a CadCraft megkérdezi:

- A(z) {{ui:A meglévők megtartása}} a rajz azonos nevű blokkját használja.
- A(z) {{ui:Átnevezés}} az újat `Név (2)` néven hozza be.

A teljes beszúrás egy lépés: a {{key:Mod+Z}} billentyűkombináció a hivatkozást és a bemásolt definíciókat is visszavonja.

## A könyvtár megnyitása

Kattintson a(z) {{ui:Könyvtár…}} gombra a(z) {{ui:Blokkok}} panelen, vagy a(z) {{ui:Könyvtár}} gombra a Blokkok csoportban, vagy írja be a `LIB` parancsot. A `INSERT` kérésnél az `L` (Könyvtár) is megnyitja.

A könyvtárnak négy forrása van, lapokként:

- {{ui:Könyvtár}}: a CadCraft könyvtára. Keresés név, gyártó vagy típus szerint, szűrés kategória szerint.
- {{ui:Fájlok…}}: egy elemfájl (`item.json`) bármely könyvtárból, vagy egy rajz, táblázat vagy 3D-s modell, amelyből elemeket készíthet: DWG vagy DXF (minden blokkból elem lesz), név- és méretoszlopos CSV, vagy glTF vagy OBJ modell. Semmi nem töltődik fel.
- {{ui:Standard}}: acélszelvények (szelvényként, nézetként vagy 3D-s tartóelemként) és szabványos alkatrészek, például csavarok, anyák és csapágyak, amelyeket közzétett táblázatokból készít ide. Lásd: [Acélszelvények és szabványos alkatrészek elhelyezése](topic:steel-and-standard-parts).
- {{ui:Más csatornák}}: más könyvtárak, amelyek ugyanúgy válaszolnak, mint a Könyvtár. Címüket egyszer adja meg; ez a böngésző megjegyzi.

Minden kártya mutatja az előnézetet, a nevet, a gyártót és a típust, a licencet és a verziót. A visszavont elemet a(z) {{ui:Visszavonva}} jelölés mutatja az okával; a CadCraft megkérdezi, mielőtt elhelyezné.

## Elem elhelyezése

1. Kattintson a kártya {{ui:Elhelyezés}} gombjára.
2. Kattintson arra a helyre, ahová az elem kerül. Az elforgatásához előbb írja be az `R` betűt, a méretezéséhez az `S` betűt.
3. Az `Adja meg az elemszámot (CC-ITEM)` kérésnél nyomja meg a(z) {{key:Enter}} billentyűt a következő szabad számért, vagy írjon be sajátot.

Az elem `LIB_<name>_v<version>` nevű blokk lesz, és ennek a rajznak a mértékegységében rajzolódik meg. Ha a rajznak nincs mértékegysége, az elem milliméterben kerül be, és az előzmények ezt jelzik; előbb állítsa be a(z) {{ui:Mértékegységek}} értéket a jobb oldali panelen.

Az adatai láthatatlan attribútumokként utaznak: az elem azonosítója és verziója, licence és forrásmegjelölése, gyártója, típusa, kategóriája és méretei. Lásd: [Blokkattribútumok](topic:attributes).

## Elemek a saját nyelvén

Az elem nevét és leírását más nyelveken is megadhatja. Ha van olyan nyelven, amelyre a CadCraft be van állítva (Beállítások › Általános › Nyelv), a kártya és az elhelyezett blokk elemneve ezeket használja. A blokk maga az elem saját nevéből készült nevet tartja meg, így egy rajzban elemenként egy blokk van, bármilyen nyelven helyezték is el.

## Frissítések keresése

1. Nyissa meg a könyvtárat.
2. Kattintson a(z) {{ui:Frissítések keresése}} gombra.

A rajzban szereplő minden könyvtári elem listázva van az elemszámaival, és azzal, hogy naprakész-e, van-e újabb verziója (és mi változott), vagy visszavonták. Kattintson a sor {{ui:Frissítés}} gombjára, vagy a(z) {{ui:Összes frissítése}} gombra. Minden hivatkozás az új verzió blokkjára mozdul, és megtartja az elemszámát, a mennyiségét, a helyét, a szögét és a rétegét. A {{key:Mod+Z}} billentyűkombináció visszavonja a frissítést.

## A felhasznált elemek forrásmegjelölése

Kattintson a(z) {{ui:Könyvtári közreműködők}} gombra. Minden elem a forrásmegjelölési sorával és a licencével szerepel.

- A(z) {{ui:Forrásmegjelölés másolása}} egy elem sorát másolja; a(z) {{ui:Összes másolása}} minden sort másol.
- A(z) {{ui:CSV letöltése}} az elemszámokkal, gyártókkal, típusokkal, licencekkel és forrásmegjelölésekkel együtt menti el a listát. Bármely táblázatkezelőben megnyílik.

A CC BY-hoz hasonló licencek kérik, hogy a munka felhasználásakor a szerzőt tüntesse fel. Tegye a sorokat a rajzra, a specifikációba vagy a projektjegyzetekbe.

## Szimbólumok és eszközök

A Könyvtárnak három típusú eleme van: Szimbólumok (rajzi jelölések, 2D), Típusok (az elem összetétele) és Eszközök (fizikai tárgyak). A {{ui:Könyvtár}} lapon az {{ui:Elem típusa}} lista a Szimbólumokat és az Eszközöket együtt, csak a Szimbólumokat vagy csak az Eszközöket mutatja. A Típusokból épül fel a BimCraft-projekt, ezért a CadCraft nem listázza őket.

## Bejelentkezés a könyvtárba

Kattintson a(z) {{ui:Bejelentkezés a könyvtárba}} gombra. Egy kis ablak nyílik meg a weboldalon; miután bejelentkezett, a CadCraft meg tudja mutatni a csapata elemeit, és rögzíti, amit elhelyez, így értesül, ha egy használt elem megváltozik. A bejelentkezés ebben a böngészőlapban érvényes. Bármikor visszavonhatja a fiókja biztonsági oldalán.

## Gyakori hibák

- **„Az IFC-típusokból való elemkészítés a BimCraftban van.”** Az IFC- és családfájlokat a BimCraft alkalmazás olvassa be. Készítse el ott vagy a Könyvtárban, majd itt használja az `item.json` fájlját.
- **„A könyvtár nem érhető el.”** Offline állapotban van, vagy a könyvtár nem üzemel. A rajzban már lévő elemeket ez nem érinti.
- **Egy elem túl nagy vagy túl kicsi.** A rajz mértékegysége hibás, vagy nincs beállítva. Vonja vissza a műveletet, állítsa be a(z) {{ui:Mértékegységek}} értéket, és helyezze el újra az elemet.
