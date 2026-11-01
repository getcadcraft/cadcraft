---
title: Első lépések a CadCrafttal
summary: Mit tud a CadCraft rajzoló alkalmazás, hol fut, és az első rajza az üres képernyőtől a mentett fájlig.
keywords: indítás, első rajz, új, megnyitás, mentés, mentés másként, kezdés, oktatóanyag, bevezetés, gyors útmutató
from: 1a56c575
---

A CadCraft 2D rajzoló alkalmazás. Vonalakat, íveket, polivonalakat, szövegeket, méreteket és blokkokat rajzol és szerkeszt, rajzlapokat állít be rajzfejjel és nézetablakokkal, és PDF-be plottolja őket. Megnyitja a DWG- és DXF-rajzokat, és DWG-ként vagy DXF-ként menti őket.

A böngészőben fut. Nincs mit telepíteni: a webhely megadja a címet, és az egész alkalmazás betöltődik az oldalra. A rajzai az Ön számítógépéről nyílnak meg, és oda is mentődnek vissza. **Semmi nem töltődik fel.**

Ha rajzolt már korábban, ezen az oldalon túl olvassa el a [Más rajzolóprogramokból érkezőknek](topic:coming-from) témakört. A legtöbb szokás átvihető, a kevés kivételt ott találja.

## Szeretné, ha vezetnék?

Írja be: `TOUR` (vagy kattintson a kezdőkártyán a {{ui:Bemutató indítása}} gombra, vagy a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:A bemutató újbóli végigvitele}} pontra). Hat rövid lépés egy, a rajz fölötti dobozban: vonal és kör rajzolása, mozgatás, vágás, valami törlése és méretezése. Minden lépés akkor ér véget, amikor elvégzi, és kihagyhat egy lépést vagy az egész bemutatót. Magától csak az első alkalommal indul. A [puska](topic:cheat-sheet) a leggyakoribb 40 parancsot tartalmazza, a [parancstérkép](topic:command-map) pedig az összes létező parancsot.

## Mire van szüksége

- Naprakész Chrome, Edge, Firefox vagy Safari Mac, Windows vagy Linux számítógépen. Lásd: [Böngészők és platformok](common:browsers).
- A görgős egér a legkényelmesebb. A trackpad is működik; lásd: [Egér, trackpad és érintés](topic:mouse-trackpad-touch).
- Billentyűzet. A CadCraftot beírt parancsok vezérlik, mint a legtöbb rajzolóprogramot.

## Az elv egy bekezdésben

Beír egy parancsot (vagy rákattint a gombjára), és az alul lévő parancssor egyenként kérdezi a dolgokat: „Adja meg az első pontot”, „Adja meg a következő pontot”. Minden kérdésre úgy válaszol, hogy a rajzra kattint vagy beír egy értéket, majd megnyomja az {{key:Enter}} billentyűt. Az {{key:Esc}} megszakít. Ennyi az egész kezelési modell; minden más részlet.

## Az első rajz

Egy 4000 × 3000-es téglalapot rajzol vonalakból, közepére teszi egy kört, és menti a fájlt.

1. Nyissa meg a CadCraftot. A parancssor alul ezt mutatja: `Parancs:`, a rajzterületen pedig egy rövid „Rajzolás indítása” kártya látszik.
2. Írja be: `L`, és nyomja meg az {{key:Enter}} billentyűt. Nem kell előbb a parancssorra kattintani: bárhol gépel, oda kerül.
3. A kérdés `Adja meg az első pontot:` lesz. Írja be: `0,0`, és nyomja meg az {{key:Enter}} billentyűt.
4. Írja be: `@4000,0`, és nyomja meg az {{key:Enter}} billentyűt. Megjelenik egy jobbra futó vonal. A `@` jelentése: „az utolsó ponttól”.
5. Írja be: `@0,3000`, és nyomja meg az {{key:Enter}} billentyűt.
6. Írja be: `@-4000,0`, és nyomja meg az {{key:Enter}} billentyűt.
7. Írja be: `C`, és nyomja meg az {{key:Enter}} billentyűt. A `C` a Zárás (Close) opció: az utolsó vonal visszamegy az első ponthoz, és a parancs véget ér.
8. Kattintson az eszköztár Nézet csoportjában a {{ui:Kiterjedés}} gombra. A téglalap kitölti a képernyőt.

Most négy vonalnak kell látszania, amelyek téglalapot alkotnak, a parancssor feletti előzményekben pedig szerepel, amit beírt.

9. Írja be: `C`, és nyomja meg az {{key:Enter}} billentyűt a körparancs indításához.
10. Írja be: `2000,1500`, és nyomja meg az {{key:Enter}} billentyűt a középponthoz.
11. Írja be: `500`, és nyomja meg az {{key:Enter}} billentyűt a sugárhoz.

Megjelenik egy kör a téglalap közepén.

12. Nyomja meg a {{key:Mod+S}} billentyűkombinációt, vagy kattintson a Fájl csoportban a {{ui:Mentés}} gombra.

A böngésző letölti a `Drawing1.dwg` fájlt a szokásos letöltések mappájába, az előzmények pedig azt írják, hogy másolatot mentett DWG-ként. Ez a fájl újra megnyílik a CadCraftban és a legtöbb más CAD-programban. (Ha ebben a böngészőben korábban a {{ui:Mentés másként}} alatt a DXF-et választotta, az új rajz `Drawing1.dxf` néven mentődik.)

:::tip
Üres parancssoron az {{key:Enter}} megnyomása megismétli az utolsó parancsot. Ha jobban szereti, az {{key:Enter}} helyett a {{key:Space}} is megteszi: szövegen kívül ugyanazt csinálja.
:::

## Meglévő rajz megnyitása

1. Nyomja meg a {{key:Mod+O}} billentyűkombinációt, vagy kattintson a {{ui:Megnyitás}} gombra.
2. Válasszon ki egy `.dwg` vagy `.dxf` fájlt a fájlválasztóban.

A DWG- vagy DXF-fájlt húzással is megnyithatja a(z) {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}} ablakból a rajzterületre ejtve. A fájlt az oldal olvassa be; soha nem hagyja el a számítógépet.

Hogy mi marad meg és mi konvertálódik, azt a [Fájlok: mi nyílik meg, mi menthető](topic:files) írja le.

## Mentés: mire számítson

A böngészőben a mentés másképp működik, mint egy asztali programban:

- A {{ui:Mentés}} mindig **új másolatot tölt le**. Nem írja felül a megnyitott fájlt. Ha ugyanilyen nevű fájl már van a letöltések mappájában, a böngésző általában számot fűz hozzá, például `Drawing1 (1).dwg`.
- A {{ui:Mentés}} a rajz formátumát használja: DWG-t, ha DWG-t nyitott meg, DXF-et, ha DXF-et. A választáshoz nyomja meg a {{key:Mod+Shift+S}} billentyűkombinációt, vagy kattintson a {{ui:Mentés másként}} gombra, majd válassza a {{ui:DWG}} (és annak verzióját), a {{ui:DXF R12}} vagy a {{ui:DXF 2000}} lehetőséget. Lásd: [Mentés](topic:files#saving).
- A megnyitott fájl soha nem változik.
- Egy másik fájl megnyitása vagy az {{ui:Új}} saját lapra kerül a rajz fölött, így semmi nem záródik be, ami nyitva van. Ha bezár egy rajzlapot, vagy mentetlen módosításokkal elhagyja az oldalt, a CadCraft előbb rákérdez: {{ui:Előbb másolat mentése}}, elvetés vagy {{ui:Mégse}}. A böngészőlap bezárásakor a böngésző saját „Elhagyja az oldalt?” kérdése jelenik meg helyette.

Felhőbe mentés még nincs. Hová kerülnek a fájljai, és miért maradnak magánjellegűek, azt az [Az Ön fájljai és az adatvédelem](common:your-files) magyarázza.

## Merre tovább

Az {{key:F1}} megnyomásával vagy a felső sávban a {{ui:Súgó}} gombra kattintva bármikor megnyithatja ezt a súgót a rajz mellett. Kapcsolat nélkül is működik.

- [A CadCraft képernyője](topic:workspace) minden sávot és panelt megnevez.
- [Rajzolás koordinátákkal](topic:draw-with-coordinates) a legjobb első végigvezetés.
- [Billentyűzet és egér](topic:keyboard) minden billentyűt felsorol.
- A parancssorban írja be: `HELP`, hogy megkapja az összes parancs listáját, vagy olvassa el a [Parancsok referenciáját](topic:commands).
