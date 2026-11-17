---
title: Rétegek rendezése a rajzon
summary: Hozzon létre rétegeket falakhoz, ajtókhoz és megjegyzésekhez, állítson be színeket, tegyen egy réteget aktuálissá, és kapcsolja ki, fagyassza be vagy zárolja őket, vagy zárja ki a plottolásból.
keywords: réteg, rétegek, la, aktuális réteg, befagyasztás, feloldás, zárolás, ki, be, plottolás, plottolás tiltása, szín, rétegtulajdonságok, layiso, layuniso, izolálás, layoff, layfrz, laymcur, layon, laythw, átnevezés, laymrg, összevonás, laydel, réteg törlése
from: cd033591
---

## Amit elkészít

Három réteg: `Walls`, `Doors` és `Notes`, mindegyiknek saját színnel, és rajtuk rajzolt objektumokkal, amelyeket rétegek között áthelyez.

## A Rétegek panel

A rétegek a bal oldali panelen, a {{ui:Rétegek}} alatt találhatók. Minden sor balról jobbra mutatja:

- egy pöttyöt: a **aktuális** rétegnél teli, ide kerülnek az új objektumok;
- egy színmintát;
- a réteg nevét;
- négy gombot: be/ki (szem), befagyasztás (hópehely), zárolás (lakat) és plottolás (nyomtató).

Minden rajzban van egy `0` nevű réteg. Az `LA` beírása és az {{key:Enter}} megnyomása a panelre ugrik.

## Rétegek létrehozása

1. Kattintson a lista fölötti {{ui:Új réteg}} gombra. Megnyílik egy névmező.
2. Írja be a `Walls` szót, és nyomja meg az {{key:Enter}} billentyűt (vagy kattintson a {{ui:Hozzáadás}} gombra).

Az állapotsor ezt írja: „Walls réteg hozzáadva, és ez lett az aktuális.”

Az új réteg a 7-es színt kapja (fekete a világos, fehér a sötét témán).

3. Kattintson újra az {{ui:Új réteg}} gombra, írja be a `Doors` szót, és nyomja meg az {{key:Enter}} billentyűt.
4. Kattintson újra az {{ui:Új réteg}} gombra, írja be a `Notes` szót, és nyomja meg az {{key:Enter}} billentyűt.

A `Notes` most az aktuális réteg.

## Szín adása minden rétegnek

1. Kattintson a `Walls` sorában lévő színmintára. Megnyílik a rendszer színválasztója.
2. Válasszon színt, és erősítse meg.

A minta és a `Walls` rétegen lévő, {{ui:Rétegről}} színezett minden változik.

:::note
A kiválasztott szín, ha megegyezik a 255 szabványos CAD-szín egyikével, ahhoz tartozó számként tárolódik. Minden más szín pontosan megmarad a CadCraftban, de DWG- vagy DXF-fájlba a legközelebbi szabványos színként kerül mentésre.
:::

## Rajzolás rétegen

1. Kattintson a **Walls** nevére a listában. A pöttye megtelik, és az állapotsor: „Aktuális réteg: Walls”.
2. Rajzoljon téglalapot (`REC`). Az a Walls rétegre kerül.
3. Kattintson a **Doors**-ra, és rajzoljon egy ívet (`A`). Az a Doors rétegre kerül.

Az aktuális réteget a jobb oldali {{ui:Jelenlegi beállítások}} panelen is kiválaszthatja (ha semmi nincs kijelölve), a {{ui:Réteg}} alatt.

## Objektumok áthelyezése másik rétegre

1. Jelölje ki az objektumokat.
2. A jobb oldali panelen válassza ki az új réteget a {{ui:Réteg}} mezőben.

Átkerülnek arra a rétegre, és átveszik annak színét, ha színük {{ui:Rétegről}}.

## Kikapcsolás, befagyasztás, zárolás és plottolás

| Gomb | Mit csinál |
|---|---|
| Be/ki (szem) | Elrejti a réteg objektumait. Nem látszanak, nem jelölhetők ki, és nem lehet rájuk fogni. |
| Befagyasztás (hópehely) | A CadCraftban ugyanaz, mint a kikapcsolás. Külön van tartva, mert más programok másként kezelik őket, és a beállítás mentésre kerül. |
| Zárolás (lakat) | Az objektumok láthatók maradnak, és lehet rájuk fogni, de nem jelölhetők ki és nem módosíthatók. Jó olyan háttérhez, amelyre rajzolni szeretne. |
| Plottolás (nyomtató) | Ha meg van nyomva, a réteg látszik a képernyőn, de **nem kerül bele a plotokba** és a PDF-ekbe. Építési vonalakhoz és saját megjegyzésekhez használja. |

Vigye az egérmutatót egy gomb fölé, hogy lássa, mit csinál („Kikapcsolás”, „Befagyasztás”, „Zárolás”, „Ne plottolja ezt a réteget”).

Az aktuális réteget nem lehet kikapcsolni: az állapotsor ezt írja: „Ez az aktuális réteg. Előbb tegyen másik réteget aktuálissá.” Ha a réteg nevére kattint, hogy aktuálissá váljon, az be is kapcsolódik, és a befagyasztása is feloldódik.

Minden rétegváltozás – akár a panelen, akár parancsból – egy visszavonási lépés: a {{key:Mod+Z}} visszaállítja.

## Rétegek kezelése objektum kijelölésével

Nem kell tudnia a réteg nevét: jelöljön ki rajta egy objektumot. Írja be a parancsot, vagy nyissa meg az {{ui:Eszközök}} menüt a {{ui:Rétegek}} panel tetején.

| Parancs | Mit csinál |
|---|---|
| {{cmd:LAYISO}} | Jelöljön ki objektumokat, majd nyomja meg az Entert: csak az ő rétegeik maradnak bekapcsolva, minden más réteg ki lesz kapcsolva. Ha az aktuális réteg ki volt kapcsolva, az izolált rétegek egyike lesz az aktuális. |
| {{cmd:LAYUNISO}} | Visszakapcsolja azokat a rétegeket, amelyeket az utolsó {{cmd:LAYISO}} kikapcsolt, és visszaadja az általa megváltoztatott aktuális réteget. |
| {{cmd:LAYOFF}} | Kattintson egymás után objektumokra: mindegyik rétege ki lesz kapcsolva. A `U` beírásával visszavonja az utolsót, az {{key:Enter}} billentyűvel fejezze be. |
| {{cmd:LAYFRZ}} | Ugyanaz, de a rétegeket befagyasztja. |
| {{cmd:LAYMCUR}} | Kattintson egy objektumra: a rétege aktuálissá válik (és bekapcsolódik, a befagyasztása pedig feloldódik). Ha már van egy kijelölt objektum, azt használja. |
| {{cmd:LAYON}} | Minden réteget bekapcsol. |
| {{cmd:LAYTHW}} | Minden rétegről feloldja a befagyasztást. |

Az aktuális réteget ilyen módon sem lehet kikapcsolni vagy befagyasztani: az előzmények ezt jelzik, és előbb a {{cmd:LAYMCUR}} paranccsal tehet másik réteget aktuálissá. Blokkhivatkozás kiválasztásakor a hivatkozás saját rétege számít.

## Rétegek átnevezése, összevonása és törlése

- {{cmd:RENAME}}: írja be az `LA` parancsot, a régi nevet és az újat. Minden objektum követi. (A `B` ugyanígy nevezi át a blokkot, minden hivatkozásával együtt.)
- {{cmd:LAYMRG}}: kattintson egy objektumra mindegyik összevonandó rétegen (vagy írja be az `N`-t és egy nevet), nyomja meg az {{key:Enter}} billentyűt, majd válassza ki a célréteget, és válaszoljon `Y`-nal. Az objektumok a célrétegre kerülnek – a modellben, a rajzlapokon és a blokkokon belül is –, az összevont rétegek pedig megszűnnek.
- {{cmd:LAYDEL}}: jelöljön ki egy objektumot a rétegen (vagy írja be az `N`-t és a nevét), és válaszoljon `Y`-nal. A réteg **minden rajta lévő objektummal együtt** törlődik, mindenhol. A `0` réteg, a DEFPOINTS és az aktuális réteg nem törölhető.

Mindhárom egy visszavonási lépés. Mindhárom megtalálható az {{ui:Eszközök}} menüben is a {{ui:Rétegek}} panel tetején.

1. Kattintson egy falvonalra, majd írja be a `LAYISO` parancsot, és nyomja meg az {{key:Enter}} billentyűt. Csak a Walls marad bekapcsolva.
2. Rajzoljon vagy módosítson, amire szüksége van a Walls rétegen.
3. Írja be a `LAYUNISO` parancsot, és nyomja meg az {{key:Enter}} billentyűt. A Doors és a Notes visszajön.

## Gyakori hibák

- **Az új vonalak rossz rétegre kerültek.** Rajzolás előtt nézze meg, melyik pötty van megtelve. Egy új réteg aktuálissá válik, amint hozzáadja.
- **Egy objektum nem jelölhető ki.** A rétege zárolt, ki van kapcsolva, vagy be van fagyasztva.
- **A réteg más programban is kinyomtatódik.** A DXF R12 nem tudja tárolni a „ne plottolja” beállítást. A CadCraft megtartja magának a beállítást, ha a rajznak van rajzlapja, de más programok ki fogják plottolni a réteget.
- **Nagybetűs rétegnevek mentés után.** A DXF R12 nagybetűkkel tárolja a neveket, így a `Walls` `WALLS`-ként jön vissza, a szóközök pedig `_` jelet kapnak. A DWG-ben mentett fájl megtartja a nevet úgy, ahogy beírta.
- **Réteg átnevezése, összevonása vagy törlése.** Használja a {{cmd:RENAME}}, {{cmd:LAYMRG}} vagy {{cmd:LAYDEL}} parancsot (ezek az {{ui:Eszközök}} menüben is megtalálhatók): lásd lentebb.

## Rétegek csoportosítása

A lista rövid tartásához tegye a rétegeket mappákba, például Meglévő, Tervezett és Szolgáltatások nevűekbe. Minden mappa összecsukható, kapcsolói az összes rétegét egyszerre be- vagy kikapcsolják, befagyasztják vagy zárolják. Az aktuális réteg soha nincs kikapcsolva.

A Rétegek panel {{ui:Eszközök}} menüjében válassza a {{ui:Kész csoportok hozzáadása}} lehetőséget egy kis lakóépületi munkákra szánt csoportkészlethez, a {{ui:Csoportosítás név szerint}} lehetőséget a közös előtagú (`E-Walls`, `E-Doors`) rétegek csoportosításához, vagy az {{ui:Új csoport}} lehetőséget. Húzzon egy réteget egy mappára, vagy az aktuális réteghez használja a rétegek fölötti listát. Írjon a {{ui:Réteg keresése}} mezőbe, hogy szűkítse a listát. A `LAYGROUP` (`LG`) parancs ugyanezt teszi a parancssorban.

A rétegek maguk nem változnak, így más CAD-programok egyszerű, lapos listaként látják őket. A CadCraft a csoportokat a fájlban tárolja.
