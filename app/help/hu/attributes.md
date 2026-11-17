---
title: Blokkattribútumok
summary: Blokkhivatkozás értékeinek megtekintése és módosítása, például tételszám vagy gyártó, és ezek megőrzése másolat mentésekor.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, címblokk, helyben szerkesztés, attribútumszerkesztő, attdef, attribútum meghatározása, bedit, blokkszerkesztő, bclose, attribútum, attribútumok, attdef, attrib, címke, tételszám, érték, láthatatlan, állandó, blokk, tulajdonságok, lista, berendezés címke
from: 34d307c7
---

## Mik az attribútumok

Az attribútum egy elnevezett érték, amely a blokkhivatkozással együtt utazik: például egy berendezés címkéjének tételszáma, egy helyiségcímke neve vagy egy ajtó tűzvédelmi besorolása. A blokk definíciója megmondja, milyen attribútumai vannak (mindegyiknek van **címkéje**, **kérdése**, **alapértéke**, valamint a szövegének helye, mérete és szöge). Minden hivatkozás a saját értékeit hordozza.

Egyes attribútumok **láthatatlanok**: adatot tárolnak, például gyártót vagy típusszámot, de soha nem rajzolódnak ki. Egyesek **állandók**: minden hivatkozásnál ugyanazok, a blokk rögzíti őket.

## Honnan származnak az attribútumok

- A megnyitott DWG- és DXF-fájlok blokkjai megtartják attribútumaikat, hivatkozásonként a saját értékeikkel.
- A {{cmd:INSERT}} paranccsal és a {{ui:Fájl}} lehetőséggel behozott blokkok is megtartják őket. Lásd: [Beszúrás fájlból vagy a könyvtárból](topic:insert-from-file-and-library).
- A könyvtári elemek attribútumos blokkokként érkeznek: egy látható tételszám és az elem adatai, láthatatlanul.

- Saját blokkok: előbb határozza meg az attribútumokat az {{cmd:ATTDEF}} paranccsal (lent), majd a blokk készítésekor jelölje ki őket a többi objektummal együtt.

## Saját blokkok attribútumainak meghatározása

1. Rajzolja meg a blokk vonalait, például egy helyiségcímkét.
2. Válassza a {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútum meghatározása}} menüpontot, vagy írja be: `ATT`, majd nyomja meg az Entert.
3. Az előzmények mutatják a módokat (`Láthatatlan=Nem Állandó=Nem Előre beállított=Nem`). Írja be az `I`, `C` vagy `P` betűt egy mód váltásához, és nyomja meg az Entert, ha mind megfelelő. A láthatatlan értékek megmaradnak, de nem rajzolódnak ki; az állandó minden hivatkozásnál ugyanazt az értéket kapja; az előre beállított nem kérdeződik meg a blokk beszúrásakor.
4. Írja be a címkét (például `ROOM_NO`: nagybetűvel, szóköz nélkül), a kérdést (`Szobaszám`) és egy alapértéket (`101`).
5. Kattintson oda, ahová az érték kerül, és adja meg a magasságot és az elforgatást. A címke látszik a rajzon.
6. Készítse el a blokkot a {{cmd:BLOCK}} paranccsal, a vonalakat és az attribútum-definíciókat együtt kijelölve. A helyükbe kerülő hivatkozás az alapértékeket kapja; minden új {{cmd:INSERT}} ezeket kéri majd.

Egy kijelölt attribútum-definíció a {{ui:Tulajdonságok}} alatt mutatja a {{ui:Címke}}, a {{ui:Kérdés}}, az {{ui:Alapérték}} mezőket és a módokat.

## Blokk módosítása: a blokkszerkesztő

{{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokk szerkesztése}} ({{cmd:BEDIT}}, `BE`) önállóan megnyitja a blokkot: írja be a nevét (vagy előbb jelöljön ki egy hivatkozást). A felső sáv megmondja, melyik blokkot szerkeszti. Rajzoljon, töröljön és módosítson objektumokat a szokásos parancsokkal, és adjon hozzá vagy módosítson attribútum-definíciókat. Ezután kattintson a {{ui:Blokk mentése}} gombra (vagy írja be: {{cmd:BCLOSE}}, majd `S`): minden hivatkozás megmutatja a változást, egy {{key:Mod+Z}} pedig az egészet visszavonja. A {{ui:Módosítások elvetése}} (`BCLOSE`, majd `D`) a blokkot eredeti állapotában hagyja.

Ha attribútum-definíciókat adott hozzá, távolított el vagy módosított, a mentés minden hivatkozást is igazít: a beírt értékek megmaradnak, az új attribútum az alapértéket kapja, az eltávolított eltűnik, és minden attribútum visszakerül oda, ahová a definíció helyezi. Az előzmények kiírják, hány hivatkozás lett frissítve.

## Címblokk szerkesztése a helyén (REFEDIT)

A rajzlapon lévő címblokk gyakran egy blokkon belül van. Hogy vonalait vagy szövegeit a rajzlap elhagyása nélkül módosítsa:

1. Jelölje ki a címblokkot, majd válassza a {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Szerkesztés helyben}} menüpontot (vagy írja be: {{cmd:REFEDIT}}).
2. Tartalma a helyén közönséges objektumokká válik; minden más halványított, és nem módosítható.
3. Módosítson, töröljön vagy rajzoljon: az új objektumok a blokk részei lesznek.
4. Kattintson a felső sávban az {{ui:A blokk mentése}} gombra (vagy írja be: {{cmd:REFCLOSE}}, majd `S`). Minden hivatkozás megmutatja a változást, és egy {{key:Mod+Z}} visszavonja az egész szerkesztést. Az {{ui:Elvetés}} a blokkot eredeti állapotában hagyja.

Csatolt rajz, dinamikus blokk, vagy olyan hivatkozás, amelynek vízszintes és függőleges léptéke eltér, nem szerkeszthető helyben: használja a {{cmd:BEDIT}} parancsot (vagy nyissa meg a csatolt rajzot).

:::note
A blokkszerkesztőben mentse vagy vesse el a módosításokat, mielőtt elmenti a rajzot: a szerkesztő nyitott állapotában mentett fájl a blokkot a változtatás előtti állapotában tartalmazza.
:::

## Értékek megadása blokk elhelyezésekor

1. Írja be: `I`, majd nyomja meg az Entert, írja be a blokk nevét, és nyomja meg az Entert.
2. Kattintson oda, ahová kerülnie kell.
3. A CadCraft minden értéket megkérdez, például: `Adja meg a tételszámot (ITEM) <>`. Írja be az értéket, és nyomja meg az Entert, vagy nyomja meg az Entert a szögletes zárójelben látható alapérték megtartásához.

A blokk által előre beállítottnak és állandónak jelölt értékeket nem kérdezi meg. Ezek az alapértéket kapják.

## Értékek megtekintése és módosítása

1. Kattintson egy blokkhivatkozásra.
2. A jobb oldali panelen, a {{ui:Attribútumok}} alatt minden címkének megvan az értéke. A láthatatlanok mellett `rejtett` áll.
3. Kattintson egy értékre, írja be az újat, és nyomja meg az Entert.

A rajz azonnal megmutatja az új értéket. Minden változtatás egy lépés: a {{key:Mod+Z}} visszavonja.

**Az attribútumszerkesztő.** Kattintson duplán egy attribútumos hivatkozásra (vagy írja be: {{cmd:EATTEDIT}}): megnyílik az {{ui:Attribútumok szerkesztése}} párbeszédpanel, amely minden címkét a kérdésével és az értékével együtt listáz. Írja be az új értékeket; kattintson egy sorra, hogy az adott attribútum {{ui:Magasság}}, {{ui:Elforgatás}}, {{ui:Szélességi tényező}}, {{ui:Igazítás}}, {{ui:Réteg}}, {{ui:Szín}} és {{ui:Láthatatlan}} beállításait csak ehhez a hivatkozáshoz módosítsa. Az {{ui:Alkalmaz}} a párbeszédpanelt nyitva tartja; az {{ui:OK}} alkalmazza és bezárja. Minden {{ui:Alkalmaz}} vagy {{ui:OK}} egy visszavonási lépés.

**A parancssoron** az {{cmd:ATTEDIT}} sorra megkérdezi az értékeket: írjon be újat, vagy nyomja meg az Entert a megtartáshoz.

## Attribútum-definíciók módosítása (BATTMAN, ATTSYNC)

{{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútumkezelő}} ({{cmd:BATTMAN}}) felsorolja a blokk attribútumait: módosíthat címkét, kérdést vagy alapértéket, bejelölheti a {{ui:Láthatatlan}}, {{ui:Állandó}} vagy {{ui:Előre beállított}} jelölőt, és felfelé vagy lefelé mozgathatja őket (ez határozza meg, milyen sorrendben kérdezik az értékeket). Ha be van jelölve a {{ui:A hivatkozások frissítése (az értékek megmaradnak)}}, az {{ui:Alkalmaz}} minden hivatkozást is igazít: az átnevezett címke megtartja az értékeit. Minden {{ui:Alkalmaz}} egy visszavonási lépés.

A {{cmd:ATTSYNC}} kézzel igazítja a hivatkozásokat blokkjuk definícióihoz: `S` egy hivatkozást választ ki, `N` egy blokkot nevez meg, `A` minden blokkot feldolgoz. Az értékek megmaradnak.

A könyvtári elem saját mezőinek értékei (azonosítója, verziója, licence és forrásmegjelölése) látszanak, de nem szerkeszthetők, hogy a frissítések ellenőrzése továbbra is működjön. A tételszám és a mennyiség az Ön módosítására van bízva.

## Listázás

Jelöljön ki hivatkozásokat, és írja be: `LI` (a {{cmd:LIST}} parancshoz). Az előzmények minden attribútumot `CÍMKE = érték` alakban mutatnak, ahol ez érvényes, `(láthatatlan)` vagy `(állandó)` jelzéssel.

## Mozgatás, forgatás és szétbontás

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} és {{cmd:MIRROR}} megtartja az értékeket; a szöveg a blokkal együtt mozog, és olvasható marad.
- {{cmd:EXPLODE}} a látható attribútumokat szöveggé alakítja az értékeikkel együtt. A láthatatlanok elvesznek.

## Mentés

A mentett DWG és a mentett DXF is minden attribútumot megőriz: minden blokk definícióját (a láthatatlan, állandó és előre beállított attribútumokkal együtt), és minden hivatkozás értékeit. Más CAD-programok ezeket közönséges blokkattribútumként olvassák.

DXF R12-ben a 255 karakternél hosszabb érték 255 karakterre csonkolódik, az előzmények ezt jelzik.

## Gyakori hibák

- **Az érték nem jelenik meg a rajzon.** Láthatatlan, vagy üres. A láthatatlan értékek a jobb oldali panelen továbbra is megjelennek.
- **A beírt érték a parancssorba került.** Kattintson előbb a jobb oldali panel érték-mezőjébe.
