---
title: Anyagjegyzékek zónánként
summary: Jelöljön ki területeket a rajzon zónaként, és helyezzen el minden zónához egy táblázatot, amely megszámolja a benne lévő blokkokat. A táblázatok munka közben követik a rajzot, és Ön választja ki, mely oszlopokat mutatják.
keywords: anyagjegyzék, BOM, alkatrészlista, kimutatás, zóna, terület, táblázat, darabszám, attribútum, oszlopok, tételszám, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

A **zóna** a rajz egy elnevezett területe. Az **anyagjegyzék-táblázat** felsorolja, mi van egy zónán belül vagy az egész rajzban: minden blokkot a darabszámával és attribútumértékeivel. Egy rajzon annyi zóna és táblázat lehet, amennyi kell, és egy zónának több táblázata is lehet, eltérő oszlopokkal.

Az eszközök a Blokkok lapon, a {{ui:Anyagjegyzék}} alatt érhetők el, a Blokkok csoport Továbbiak menüjében, és be is írhatók.

## Zóna készítése

Írja be: {{cmd:BOMZONE}}, majd válasszon az alábbiak közül:

- kattintson két átellenes sarokra téglalaphoz,
- válassza a {{ui:Sokszög}} lehetőséget, kattintson minden sarokra, és a zárásához nyomja meg az Entert, vagy
- válassza az {{ui:Objektum}} lehetőséget, és jelöljön ki egy zárt polivonalat, kört, ellipszist vagy zárt splinet. Körvonalát átmásolja; maga az objektum változatlan marad.

Ezután írja be a zóna nevét. A zóna szaggatott körvonalként rajzolódik meg, a neve a bal felső sarka fölött áll, a `BOM-ZONES` rétegen, amely nem plottolódik. Kapcsolja be a plottolást ehhez a réteghez, ha a zónákat papíron is látni szeretné.

A zóna egy közönséges zárt polivonal: mozgatható, nyújtható, fogópontjaival húzható, a neve pedig követi. Átnevezéséhez szerkessze a név szövegét, vagy használja a {{cmd:BOMZONE}} parancsot és a {{ui:Átnevezés}} lehetőséget. A {{ui:Zónák}} listázza az összes zónát, és megmutatja, hány táblázata van.

## Táblázat elhelyezése

Írja be: {{cmd:BOMTABLE}} (vagy {{cmd:BOM}}), válassza ki a zóna körvonalát vagy nevét, adja meg a szöveg magasságát, majd kattintson oda, ahová a táblázat bal felső sarka kerül. Ha zóna kijelölése helyett az Entert nyomja meg, vagy a {{ui:Egész}} lehetőséget választja, az egész rajz táblázatát kapja.

Az új táblázat megmutatja a tételszámot, a darabszámot, a blokk nevét, és minden attribútumhoz egy oszlopot, amelyet a blokkok hordoznak (az első hatot; a többi kipipálatlanul kínálkozik). Az azonos nevű és azonos attribútumértékű blokkok egy sort osztoznak.

## Mi számít a zónán belülinek

- Egy blokk ahhoz a zónához tartozik, amelyik a **beillesztési pontját** tartalmazza.
- Egy vonal, ív, kör, polivonal, ellipszis, spline vagy sraffozás **egészben** ahhoz a zónához tartozik, amelyik a kiterjedése közepét tartalmazza (vonalnál a felezőpontját). Hossza nem vágódik el a zóna szélénél.
- A szélen pontosan fekvő pont belül van.
- A zónák átfedhetnek. Minden zóna önmagáért számol, így az átfedésben lévő objektum mindkét táblázatban szerepel.

## A táblázatok követik a rajzot

Ha blokkot ad hozzá, mozgat, másol vagy töröl, attribútumot szerkeszt, vagy zónát alakít át vagy mozgat, minden táblázat ugyanabban a lépésben újrarajzolódik. A visszavonás egyszerre veszi vissza az Ön szerkesztését és a táblázat változását.

Hogy egy táblázat ne kövesse a változásokat, jelölje be a beállításaiban a {{ui:Befagyasztott}} jelölőt. A befagyasztott táblázat csak akkor változik, ha szerkeszti a beállításait, vagy begépeli a {{cmd:BOMUPDATE}} parancsot, amely most frissíti az összes táblázatot.

## Oszlopok kiválasztása

Jelöljön ki egy táblázatot, és írja be: {{cmd:BOMEDIT}}. A párbeszédpanelen:

- **Oszlopok**: jelölje be a megjelenítendőket (tétel, darabszám, név, réteg, hossz, terület, megjegyzés és minden attribútum), írjon saját fejlécet bármelyikhez, és mozgassa fel vagy le őket.
- {{ui:Sorok csoportosítása}}: blokknév és attribútumértékek, csak blokknév, réteg vagy egy attribútum. Összevont sorban az az érték, amely a blokkok között eltér, „változó” felirattal jelenik meg.
- {{ui:Rendezés}} bármely oszlop szerint, növekvő vagy csökkenő sorrendben.
- {{ui:Cím}}, {{ui:Cím megjelenítése}} és {{ui:Összesítő sor}}.
- {{ui:Vonalas elemek számlálása rétegenként}}: rétegenként egy sort ad az objektumok számával, teljes hosszukkal, és zárt alakzatoknál a teljes területükkel, rajzegységben.
- **Megjegyzések**: jelölje be a Megjegyzések oszlopot, majd a párbeszédpanel alján írjon megjegyzést a táblázat bármely sorához.

Minden táblázat megőrzi a saját beállításait.

## Tételszámok

A sor addig megtartja tételszámát, amíg a táblázatban van. Az új sor a következő szabad számot kapja, és a már kiosztott számot nem használják újra, így a számokra hivatkozó jelölések és megjegyzések helyesek maradnak. A {{ui:Tételek újraszámozása}} a megjelenítési sorrendben 1-től kezdve számozza őket.

Egy sort az határoz meg, mit csoportosít: ha megváltoztatja a sorok csoportosítását, vagy olyan attribútumértéket, amelyet a csoportosítás használ, a sor új sorként számít.

## Exportálás és más programok

A {{cmd:BOMEXPORT}} parancs, vagy a párbeszédpanel {{ui:Exportálás CSV-ként}} gombja a táblázatot .csv-fájlként menti táblázatkezelőbe.

DWG- vagy DXF-fájlban a táblázat közönséges vonalakból és szövegből álló blokk: más programok úgy mutatják és plottolják, ahogy megrajzolták. Ott nem táblázat-objektum, és más programokban nem frissül. A zónához fűződő kapcsolat a fájlban bővített adatként marad meg, amelyet a CadCraft visszaolvas, így a rajz újbóli megnyitásakor a táblázat ismét élő lesz a CadCraftban. Lapot nem tartalmazó rajz R12-es DXF-je nem őrzi meg a zónaréteg „nem plottolható” beállítását.

A táblázat szétbontása különálló vonalakká és szöveggé alakítja, és megszünteti a kapcsolatot.
