---
title: Rajz rendezése rétegekkel
summary: Hozzon létre rétegeket falakhoz, ajtókhoz és megjegyzésekhez, állítson be színeket, tegyen egy réteget aktuálissá, és kapcsolja ki, fagyassza be, zárolja vagy zárja ki a nyomtatásból.
keywords: réteg, rétegek, la, aktuális réteg, befagyasztás, feloldás, zárolás, ki, be, nyomtatás, nem nyomtatott, szín, rétegtulajdonságok, layiso, layuniso, izolálás, layoff, layfrz, laymcur, layon, laythw, átnevezés, egyesítés, laymrg, törlés, laydel
from: ba9f0617
---

## Amit készíteni fog

Három réteget, a Walls, a Doors és a Notes nevűeket, mindegyik saját színnel, mindegyikre rajzolt objektumokkal, amelyeket áthelyez közöttük.

## A Rétegek panel

A rétegek a bal oldali panelen vannak, a {{ui:Rétegek}} alatt. Minden sor balról jobbra mutatja:

- egy pöttyöt: teli az **aktuális** rétegnél, ahova az új objektumok kerülnek;
- egy színmintát;
- a réteg nevét;
- négy gombot: be/ki (szem), befagyasztás (hópehely), zárolás (lakat) és nyomtatás (nyomtató).

Minden rajzban van egy `0` nevű réteg. Ha beírja az `LA` parancsot, és megnyomja az {{key:Enter}} billentyűt, a panelre ugrik.

## Rétegek létrehozása

1. Kattintson a lista fölötti {{ui:Új réteg}} gombra. Megnyílik a névmező.
2. Írja be a `Walls` szót, és nyomja meg az {{key:Enter}} billentyűt (vagy kattintson a {{ui:Hozzáadás}} gombra).

Az állapotsor ezt írja: „Added layer Walls and made it current.” Az új réteg a 7-es színt kapja (fekete a világos, fehér a sötét témán).

3. Kattintson ismét az {{ui:Új réteg}} gombra, írja be a `Doors` szót, és nyomja meg az {{key:Enter}} billentyűt.
4. Kattintson ismét az {{ui:Új réteg}} gombra, írja be a `Notes` szót, és nyomja meg az {{key:Enter}} billentyűt.

A Notes most az aktuális réteg.

## Szín adása minden rétegnek

1. Kattintson a Walls sorában lévő színmintára. Megnyílik a rendszer színválasztója.
2. Válasszon színt, és erősítse meg.

A minta és a Walls rétegen minden, amely {{ui:Rétegről}} színű, megváltozik.

:::note
A kiválasztott szín, ha egyezik a 255 szabványos CAD szín valamelyikével, azt a számot kapja. Minden más szín a CadCraftban pontosan megmarad, de DWG vagy DXF fájlba a legközelebbi szabványos színként kerül mentésre.
:::

## Rajzolás egy rétegen

1. Kattintson a listában a **Walls** névre. A pöttye megtelik, és az állapotsor ezt írja: „Current layer: Walls”.
2. Rajzoljon egy téglalapot (`REC`). Az a Walls rétegre kerül.
3. Kattintson a **Doors**-ra, és rajzoljon egy ívet (`A`). Az a Doors rétegre kerül.

Az aktuális réteget a jobb oldali {{ui:Jelenlegi beállítások}} alatt is kiválaszthatja (ha nincs kijelölés), a {{ui:Réteg}} menüpontnál.

## Objektumok áthelyezése másik rétegre

1. Jelölje ki az objektumokat.
2. A jobb oldali panelen válassza ki az új réteget a {{ui:Réteg}} menüpontnál.

Átkerülnek arra a rétegre, és felveszik annak színét, ha a színük {{ui:Rétegről}}.

## Kikapcsolás, befagyasztás, zárolás és nyomtatás

| Gomb | Mit csinál |
|---|---|
| Be/ki (szem) | Elrejti a réteg objektumait. Nem láthatók, nem jelölhetők ki, és nem lehet rájuk fogni. |
| Befagyasztás (hópehely) | A CadCraftban ugyanaz a hatása, mint a kikapcsolásnak. Azért külön van, mert más programok másképp kezelik, és a beállítás mentésre kerül. |
| Zárolás (lakat) | Az objektumok láthatók maradnak, és rájuk lehet fogni, de nem jelölhetők ki és nem módosíthatók. Jó olyan háttérhez, amelyet követ. |
| Nyomtatás (nyomtató) | Ha be van nyomva, a réteg látszik a képernyőn, de **kimarad a nyomtatásokból** és a PDF-ekből. Konstrukciós vonalakhoz és saját megjegyzésekhez használja. |

A gombra mutatva megjelenik, mit fog tenni („Turn off”, „Freeze”, „Lock”, „Do not plot this layer”).

Az aktuális réteget nem kapcsolhatja ki: az állapotsor ezt írja: „That is the current layer. Make another layer current first.” A réteg nevére kattintva, hogy aktuálissá tegye, az be is kapcsolja és fel is oldja.

A rétegek minden változtatása, a panelben vagy parancsra, egy visszavonási lépés: a {{key:Mod+Z}} visszaállítja.

## Rétegek kezelése objektumok kijelölésével

Nem kell tudnia a réteg nevét: jelöljön ki egy rajta lévő objektumot. Írja be a parancsot, vagy nyissa meg a {{ui:Rétegek}} panel tetején lévő {{ui:Eszközök}} menüt.

| Parancs | Mit csinál |
|---|---|
| {{cmd:LAYISO}} | Jelöljön ki objektumokat, nyomja meg az {{key:Enter}} billentyűt: csak az ő rétegeik maradnak be, minden más réteg ki van kapcsolva. Ha az aktuális réteg ki van kapcsolva, az izolált rétegek egyike lesz aktuális. |
| {{cmd:LAYUNISO}} | Visszakapcsolja az utolsó {{cmd:LAYISO}} által kikapcsolt rétegeket, és visszaadja az általa módosított aktuális réteget. |
| {{cmd:LAYOFF}} | Kattintson egymás után objektumokra: mindegyik rétegét kikapcsolja. A `U` betűvel visszavonja az utolsót, az {{key:Enter}} billentyűvel fejezi be. |
| {{cmd:LAYFRZ}} | Ugyanez, de a rétegeket befagyasztja. |
| {{cmd:LAYMCUR}} | Kattintson egy objektumra: a rétege aktuálissá válik (és bekapcsol, feloldódik). Ha már egy objektum ki van jelölve, azt használja. |
| {{cmd:LAYON}} | Minden réteget bekapcsol. |
| {{cmd:LAYTHW}} | Minden réteget feloldja. |

Az aktuális réteget így soha nem kapcsolja ki vagy fagyasztja be: az előzmények ezt megmondják, és előbb az {{cmd:LAYMCUR}} paranccsal másik réteget tehet aktuálissá. Blokkhivatkozás kiválasztásakor a hivatkozás saját rétegét használja.

## Rétegek átnevezése, egyesítése és törlése

- {{cmd:RENAME}}: írja be az `LA` betűket, a régi nevet és az újat. Minden objektum a réteggel együtt követi. (A `B` ugyanígy nevez át egy blokkot, minden hivatkozásával együtt.)
- {{cmd:LAYMRG}}: kattintson egy objektumra mindegyik egyesítendő rétegen (vagy írja be az `N` betűt és egy nevet), nyomja meg az {{key:Enter}} billentyűt, majd válassza ki a céltréteget, és válaszoljon `Y`-nal. Az objektumok a célrétegre kerülnek — a modellben, a lapokon és a blokkokon belül —, az egyesített rétegek pedig megszűnnek.
- {{cmd:LAYDEL}}: válasszon ki a rétegen egy objektumot (vagy írja be az `N` betűt és a nevet), és válaszoljon `Y`-nal. A réteg **a rajta lévő minden objektummal együtt** törlődik, mindenhol. A 0 réteg, a DEFPOINTS és az aktuális réteg nem törölhető.

Mindhárom egy visszavonási lépés. Mindhárom az {{ui:Rétegek}} panel tetején lévő {{ui:Eszközök}} alatt van.

1. Kattintson egy falvonalra, majd írja be a `LAYISO` parancsot, és nyomja meg az {{key:Enter}} billentyűt. Csak a Walls marad be.
2. Rajzoljon vagy módosítson, amit szükséges, a Walls rétegen.
3. Írja be a `LAYUNISO` parancsot, és nyomja meg az {{key:Enter}} billentyűt. A Doors és a Notes visszajön.

## Gyakori hibák

- **Az új vonalak rossz rétegre kerültek.** Rajzolás előtt nézze meg, melyik pötty van tele. Új réteg hozzáadásakor az rögtön aktuálissá válik.
- **Egy objektum nem jelölhető ki.** A rétege zárolt, ki van kapcsolva vagy be van fagyasztva.
- **A réteg más programban is kinyomtatódik.** A DXF R12 nem tárolja a „ne nyomtasd” beállítást. A CadCraft a beállítást a saját számára megtartja, ha a rajznak van lapja, de más programok ki fogják nyomtatni azt a réteget.
- **Nagybetűs rétegnevek mentés után.** A DXF R12 a neveket nagybetűvel tárolja, így a `Walls` `WALLS`-ként jön vissza, a szóközök pedig `_` jelet kapnak. A mentett DWG megtartja a neveket úgy, ahogy beírta.
- **Réteg átnevezése, egyesítése vagy törlése.** Használja a {{cmd:RENAME}}, {{cmd:LAYMRG}} vagy {{cmd:LAYDEL}} parancsot (az {{ui:Eszközök}} menüben is): lásd lent.

## Rétegek csoportosítása

A lista rövid tartásához tegye a rétegeket mappákba, például Meglévő, Tervezett és Közművek névvel. Minden mappa összecsukható, a kapcsolói az összes rétegét be- vagy kikapcsolják, befagyasztják vagy együtt zárolják. Az aktuális réteget soha nem kapcsolja ki.

A Rétegek panel {{ui:Eszközök}} menüjében válassza a {{ui:Kész csoportok hozzáadása}} lehetőséget a kis lakóépületi munkákhoz készült csoportokért, a {{ui:Csoportosítás név szerint}} lehetőséget az azonos előtagú rétegek (`E-Walls`, `E-Doors`) csoportosításához, vagy a {{ui:Új csoport}} lehetőséget. Húzzon egy réteget egy mappára, vagy használja az aktuális réteg fölötti listát. A {{ui:Réteg keresése}} mezőbe írva szűkítheti a listát. A `LAYGROUP` (`LG`) ugyanezt végzi a parancssorban.

A csoport átnevezéséhez kattintson duplán a nevére (vagy jelölje ki, és nyomja meg az {{key:F2}} billentyűt), írja be az új nevet, és nyomja meg az {{key:Enter}} billentyűt; az {{key:Esc}} megtartja a régit, és a {{cmd:UNDO}} visszaállítja. Az {{ui:Új csoport}} a Rétegek panel {{ui:Eszközök}} menüjében van.

A rétegek maguk nem változnak, ezért más CAD-programok egyszerű, lapos listaként látják őket. A CadCraft a csoportokat a fájlban tárolja.
