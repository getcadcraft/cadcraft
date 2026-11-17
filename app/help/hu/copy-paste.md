---
title: Másolás, beillesztés és kettőzés
summary: Objektumok másolása a CadCraft vágólapjára, beillesztés oda, ahova kattint, vagy helyben, a kettőzés a mutatóval, és munka átvitele másik rajzból vagy lapról.
keywords: másolás, kivágás, beillesztés, beillesztés helyben, kettőzés, vágólap, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, rajzok között, másik lap, alappont
from: 4b9f29d3
---

## Amit megtanul

Hogyan másoljon objektumokat a vágólapra, és illessze be őket oda, ahova kattint, vagy a saját koordinátáikra; hogyan kettőzze őket a mutatóval, hogyan vágja ki őket, és hogyan vigye át egy másik rajzba. Mindez a Szerkesztés csoportban is megtalálható az eszköztáron: {{ui:Másolás}}, {{ui:Beillesztés}} és a {{ui:További}} menü.

## Másolás és beillesztés ott, ahol kattint

1. Jelölje ki az objektumokat: kattintson rájuk, vagy húzzon ablakot.
2. Nyomja meg a {{key:Mod+C}} billentyűket, vagy kattintson a {{ui:Másolás}} gombra a {{ui:Szerkesztés}} csoportban. A parancssor megmondja, hány objektum lett átmásolva. Kijelölve maradnak.
3. Nyomja meg a {{key:Mod+V}} billentyűket, vagy kattintson a {{ui:Beillesztés}} gombra. A másolat a kurzorra kerül, a másolt objektumok bal alsó sarkától lógva.
4. Kattintson arra a helyre, ahová ez a sarok kerül, vagy írjon be egy pontot, például `2000,500`, és nyomja meg az {{key:Enter}} billentyűt. A tárgyfogások és az Ortho szokás szerint működnek.

A beillesztett objektumok kijelöltek, így azonnal mozgathatók vagy módosíthatók. Egy {{key:Mod+Z}} az egész beillesztést visszavonja.

:::tip
Azt szeretné, hogy a másolat egy Ön által választott ponttól, például egy fal sarkától lógjon? Írja be a `COPYBASE` parancsot, kattintson az alappontra, jelölje ki az objektumokat, és nyomja meg az {{key:Enter}} billentyűt. A beillesztéskor ez a pont ott kerül, ahova kattint. Ha minden másolat a középpontjától lógjon a bal alsó sarok helyett, módosítsa a {{ui:Beillesztési pont}} beállítást a [CadCraft beállításai](topic:settings) között.
:::

## Beillesztés helyben

Nyomja meg a {{key:Mod+Shift+V}} billentyűket, vagy válassza a {{ui:Beillesztés helyben}} elemet a {{ui:További}} menüben. A másolat pontosan ugyanazokra a koordinátákra kerül, ahonnan át lett másolva, kattintás nélkül. Akkor használja, ha az objektumokat ugyanarra a helyre szeretné átvinni egy másik rajzba, vagy egy lapról másik lapra.

## Kettőzés és mozgatás

1. Jelölje ki az objektumokat.
2. Nyomja meg a {{key:Mod+D}} billentyűket, vagy válassza a {{ui:Kettőzés és mozgatás}} elemet a {{ui:További}} menüben.
3. Az eredeti tetején lévő másolat a mutatóval együtt mozog. Kattintson arra a helyre, ahová kerülnie kell. Megadhat egy elmozdulást is, például `@0,-600`-at, vagy egy távolságot a kurzor irányába.

A kattintás előtt az {{key:Esc}} nem hagy semmit maga után. A kettőzés egy visszavonási lépés, és nem érinti a vágólapot.

## Kivágás

Nyomja meg a {{key:Mod+X}} billentyűket, vagy válassza a {{ui:Kivágás}} elemet a {{ui:További}} menüben. Az objektumok a vágólapra kerülnek, és egy visszavonási lépésben törlődnek a rajzból. Visszaillesztéshez használja a {{key:Mod+V}} vagy a {{key:Mod+Shift+V}} billentyűket.

## Rajzok és lapok között

A vágólap megtartja a másolatát, amikor másik rajzot nyit meg, és ezt a böngészőben minden CadCraft lap megosztja. Másoljon az egyik lapon, majd a másikon nyomja meg a {{key:Mod+V}} billentyűket.

- Az objektumok által használt blokkok velük együtt érkeznek. Ha a beillesztendő rajzban már van ugyanilyen nevű blokk, annak saját definícióját használja, ahogy az AutoCAD is teszi.
- Az objektumok által használt rétegek hozzáadódnak, az eredeti színükkel és beállításaikkal.
- A másolat nem méreteződik át, ha a két rajz különböző egységeket használ: a CadCraft jelzi ezt, és utána használhatja a {{cmd:SCALE}} parancsot.
- A nézetablakok a lapjukon maradnak; a másolatból kimaradnak.

:::note
A vágólap a CadCraft saját vágólapja. A CadCraft-objektumokat nem illesztheti be más programba, és más programból sem illeszthet be CadCraftba: ehelyett mentse DWG vagy DXF formátumban. Egy nagyon nagy másolat túl nagy lehet a lapok közötti megosztáshoz; ilyenkor a parancssor csak azt mondja, hogy csak ez a lap tudja beilleszteni.
:::

## Gyakori hibák

- **A {{key:Mod+V}} szöveget illesztett a parancssorba.** Valamit már beírt oda, így a billentyűk a szövegen hatottak. Az {{key:Esc}} megnyomásával törölje, majd nyomja meg újra a {{key:Mod+V}} billentyűket.
- **Nem történt semmi, és az állapotsor azt írja, fejezze be az aktuális parancsot.** Egy másik parancs fut. Először nyomja meg az {{key:Esc}} billentyűt.
- **A beillesztés messze került.** A másolt objektumok bal alsó sarkától lóg, ami egy véletlenül kijelölt távoli objektum lehet. Használja a {{ui:Beillesztés helyben}} parancsot, vagy másolja a `COPYBASE` parancsal.
- **„Nem lett beillesztve” indokkal.** Amit egy másik lap a vágólapra tett, azt nem lehetett beolvasni (sérült volt, vagy kézzel módosították). Másolja újra az objektumokat.

A billentyűk teljes listáját lásd a [Billentyűzet és egér](topic:keyboard) témakörben, és minden kérdést a [Parancshivatkozásban](topic:commands#clipboard).
