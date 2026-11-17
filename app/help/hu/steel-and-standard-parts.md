---
title: Acélszelvények és szabványos alkatrészek elhelyezése
summary: Rajzoljon acélszelvényeket, homlokzatokat és 3D elemeket a közzétett szelvénytáblázatokból, helyezzen el csavarokat, anyákat, alátéteket, csapokat, csapágyakat, reteszeket és fogaskerekeket a szabványaik szerint, és sorolja fel őket alkatrészlistában.
keywords: acél, szelvény, profil, alak, W-alak, széles öv, I-gerenda, U-szelvény, szögacél, hss, cső, pipe, ipe, hea, heb, upn, gerenda, oszlop, elem, homlokzat, aisc, en 10365, csavar, anya, alátét, csap, tüske, csapágy, retesz, horony, fogaskerék, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, szabványos alkatrészek, alkatrészlista, anyagjegyzék, bom, steelmember, partslist
from: 547c1048
---

A könyvtár {{ui:Standard}} lapján kétféle elem található, amelyeket itt, közzétett táblázatokból állítottak elő (semmi nem töltődik le):

- **Acélszelvények**: 1 335 méret. A W, S, C, L, HSS és Pipe szelvények az AISC Shapes Database v16.0 adatbázisból, az IPE, HEA, HEB és UPN szelvények az EN 10365:2017 szabványból származnak. A DetailCraft ugyanazt a táblázatot használja.
- **Szabványos alkatrészek**: hatlapfejű csavarok (ISO 4017), hatlapú csavarok (ISO 4014), hatlapú anyák (ISO 4032), sima alátétek (ISO 7089), collos hatlapú csavarok és anyák (ASME B18.2.1 és B18.2.2), párhuzamos csapok (ISO 2338), mélyhornyú golyóscsapágyak (ISO 15), párhuzamos reteszek (DIN 6885-1) és egyenes fogú fogaskerekek (modulok az ISO 54 szerint).

Mindez CC0 licenc alatt van megosztva: bármire felhasználhatja, forrásmegjelölés nélkül.

## Acélszelvény elhelyezése

1. Nyissa meg a könyvtárat ({{ui:Könyvtár}} a Blokkok csoportban, vagy gépelje be a `LIB` parancsot), és kattintson a {{ui:Standard}} lapra.
2. Válassza ki a családot az első listában, például a {{ui:W szelvények}} lehetőséget. A keresőmezőbe gépelve szűkítheti a méreteket: a `W12` megmutatja az összes W12-t.
3. Az {{ui:Elhelyezés mint}} részben válassza ki:
   - {{ui:Metszet}}: a keresztmetszet, a beszúrási pont középpontjával.
   - {{ui:Magasság}}: az elem oldalról nézve, a {{ui:Hossz (mm)}} szerinti hosszal, a bal vége közepétől.
   - {{ui:3D elem}}: egy test a 3D lapon (lent).
4. Kattintson az {{ui:Elhelyezés}} gombra a méret kártyáján, majd kattintson oda, ahová kerülnie kell, mint bármely könyvtári elemnél.

A metszet vagy homlokzat blokká válik. Attribútumai tartalmazzák a méretet, a táblázatot, amelyből származik, a hosszt (homlokzat esetén) és egy kitölthető anyagot.

:::note
Az S-szelvényeket, az U-szelvényeket és az UPN-eket párhuzamos övekkel, az átlagos vastagsággal rajzoljuk, a szögacélokat pedig derékszögű sarkokkal: a valódi övek ferdék, a sarkok lekerekítettek. A W, IPE, HEA és HEB szelvényeken megvannak a gyöklekerekítések, a HSS-eken pedig a sarokradiuszok.
:::

## 3D elem készítése

Válassza a {{ui:3D elem}} lehetőséget, és kattintson az {{ui:Elhelyezés}} gombra, vagy gépelje be a parancssorba a {{cmd:STEELMEMBER}} (`SMEMBER`) parancsot:

1. A `Szelvényméret` kérdésnél nyomja meg az {{key:Enter}} billentyűt a megjelenített mérethez, vagy gépeljen be egyet, például `HSS6x6x1/4` vagy `IPE300` méretet.
2. Kattintson a kezdőpontra, majd a végpontra. Az elem közöttük fut, a talajon állva.
3. Oszlop esetén gépelje be a `C` betűt, kattintson az alappontjára, és gépelje be a magasságát.

Az elem zárt test a 3D lapon. Ott úgy mozgathatja vagy másolhatja, mint bármely más testet. A {{key:Mod+Z}} ismét eltávolítja.

## Szabványos alkatrész elhelyezése

1. A {{ui:Standard}} lapon válassza ki a családot, például a {{ui:Hatlapfejű csavarok}} lehetőséget.
2. Csavar, csap vagy retesz esetén gépelje be a {{ui:Hossz (mm)}} értéket (a collos családoknál colban). Fogaskerék esetén gépelje be a {{ui:Fogak}}, a {{ui:Fogszélesség (mm)}} és a {{ui:Furat (mm)}} értékét. Hagyjon egy mezőt üresen, hogy a benne látható szokásos érték maradjon.
3. Kattintson az {{ui:Elhelyezés}} gombra a méretnél, majd kattintson oda, ahová kerülnie kell.

A csavarok és csapok oldalról rajzolódnak, a fej támasztófelülete a beszúrási pontban van; az anyák, alátétek, csapágyak és fogaskerekek szembenézetben, a reteszek felülnézetben. A menetek a megszokott módon rajzolódnak: a menet alja vékony vonallal, a menetvég vastaggal. A fogaskerekek a fejkörükkel, osztókörükkel és fenékkörükkel rajzolódnak, nem fogankét.

Minden alkatrész blokkja attribútumként hordozza a típusát, szabványát, méretét, hosszát és anyagát, a súlyát pedig az acél névleges alakjából számítja. Az anyagot a {{ui:Tulajdonságok}} panelen módosíthatja.

Ugyanezek az alkatrészek elemként a könyvtárban is szerepelnek, a PartCraft pedig paraméteres alkatrészként nyitja meg őket (a {{ui:Szabványos alkatrész}} a Fájl csoportjában).

## Alkatrészlista készítése

- A könyvtárban kattintson az {{ui:Alkatrészlista}} gombra: a rajzban lévő minden szabványos alkatrész és acélszelvény típus, szabvány, méret, hossz és anyag szerint csoportosítva, a darabszámmal és a tételszámokkal. A {{ui:CSV letöltése}} táblázatkezelőbe menthető fájlt készít.
- Ha le szeretné rajzolni, gépelje be a {{cmd:PARTSLIST}} (`PLIST`) parancsot, kattintson a táblázat bal felső sarkára, és nyomja meg az {{key:Enter}} billentyűt a szokásos szövegmagassághoz, vagy gépeljen be egyet.

A lista a blokkok attribútumaiból készül, így a rajz DWG vagy DXF formátumban történő mentése és újbóli megnyitása után is helyes marad.

## Gyakori hibák

- **„Nincs ilyen nevű acélszelvény …”**: a méretet úgy gépelje be, ahogy a {{ui:Standard}} lap felsorolja: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Az elem a 3D lapon van, nem az alaprajzon.** A {{cmd:STEELMEMBER}} testet készít; a megtekintéséhez nyissa meg a 3D lapot. Ahhoz, hogy az acél az alaprajzon is látszódjon, helyezzen el {{ui:Metszet}} vagy {{ui:Magasság}} elemet is.
- **A hossz a tartományon kívül esik.** Egy csavarnak hosszabbnak kell lennie, mint a fejének, egy reteszének pedig hosszabbnak, mint a szélességének. A kártyák alatti sor megmondja, melyik értéket utasította el.
