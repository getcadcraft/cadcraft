---
title: Előzmények: verziók és a változások
summary: Tekintse meg a rajz verzióit (a Studio által a mentéskor megőrzött másolatokat és a felhő verzióit), nyisson meg vagy állítson vissza egyet, és hasonlítson össze kettőt, a különbségeket színnel jelölve.
keywords: előzmények, verziók, verziótörténet, visszaállítás, előző verzió, mentés visszavonása, összehasonlítás, rajzok összehasonlítása, dwgcompare, változások, hozzáadva, eltávolítva, módosítva, pillanatkép, biztonsági mentés, felhőbeli verziók
from: 141d37b3
---

## Amit készíteni fog

Egy rajz korábbi verziójának megtekintése, és a mostanitól való eltérések listája: mi került hozzá, mi lett eltávolítva és mi módosult, a rajzon színnel jelölve.

## Az Előzmények megnyitása

Írja be a `HISTORY` (vagy `HIST`) parancsot, és nyomja meg a(z) {{key:Enter}} billentyűt, vagy válassza a(z) {{ui:Előzmények…}} elemet a(z) {{ui:Továbbiak}} menüben a(z) {{ui:Nézet}} csoportban. A panel a rajz mellett nyílik meg, és munka közben is nyitva marad, így a színekkel együtt mozgathatja és nagyíthatja a rajzot.

Az Előzmények a CadCraft Studio-ban működik. Böngészőben a panel csak ezt jelzi.

## Honnan származnak a verziók

- **Ezen a számítógépen.** Minden alkalommal, amikor a Studio-ban fájlból nyit meg egy rajzot, és minden mentéskor a Studio másolatot őriz meg a fájlról a saját tárolójában, ezen a számítógépen. Az első másolat a(z) {{ui:Megnyitáskor}}: a fájl állapota az első mentése előtt. A Studio minden rajzból a legutóbbi 25 másolatot tartja meg; ha az összes másolat együtt meghaladja a 400 MB-ot, a legrégebbiek mennek először. Az a mentés, amely nem változtat semmit, nem tárol újat. Semmi nem kerül feltöltésre.
- **A felhőben.** Ha a Studio-ban a felhőben tárolt fájljaiból nyit meg egy rajzot, a panel a(z) {{ui:A felhőben}} részt is listázza: a felhő által tárolt minden verziót a sorszámával, azzal, aki mentette, és a megjegyzésével. A panel csak olvassa ezeket. A CadCraft a saját mentéseit még nem tölti fel a felhőbe, így ezek más eszközökről és a webről mentett verziók. Ha a Studio lejárt bejelentkezést jelez, jelentkezzen be újra.

Egy még nem mentett rajznak nincs másolata: előbb mentse el.

## Verzió megnyitása vagy visszaállítása

- A(z) {{ui:Megnyitás}} az adott verziót saját lapon nyitja meg. A rajza nem változik.
- A(z) {{ui:Visszaállítás}} lecseréli ezt a rajzot az adott verzióra. Előbb kérdez. A Studio a(z) {{ui:Visszaállítás előtt}} jelöléssel megőrzi a rajz jelenlegi másolatát az Előzményekben, mielőtt ezt megtenné, és a fájlba semmi nem íródik, amíg el nem menti. A visszaállítást a {{key:Mod+Z}} billentyűkombinációval nem lehet visszavonni: használja az említett másolatot.

## Összehasonlítás

1. Kattintson egy verzión a(z) {{ui:Összehasonlítás}} gombra. Az összehasonlítás a(z) {{ui:A rajz jelenlegi állapota}} állapottal történik; ha másik verzióval szeretné összehasonlítani, előbb válassza azt a(z) {{ui:Összehasonlítás ezzel}} mezőben.
2. Olvassa el az eredményt a lista alatt: hány objektum került hozzá, lett eltávolítva és módosult, valamint az elemek listáját. Kattintson a lista egy elemére, és a nézet odaugrik.
3. A rajzon:
   - a **zöld** objektumok hozzáadásra kerültek,
   - a **piros** objektumok eltávolításra kerültek (csak a régebbi verzióban vannak meg),
   - a **narancs** objektumok módosultak: az új alakjuk tömör, a régi szaggatott.
4. A(z) {{ui:Megjelenítés a rajzon}} be- és kikapcsolja a színeket; a(z) {{ui:A színek törlése}} eltávolítja az eredményt. A panel bezárása is törli őket.

A lista megmondja, mi változott egy módosult objektumon: a szövegét, azt, hogy elmozdult, az alakját, a rétegét, a színét, a vonaltípusát vagy a vonalvastagságát. Minden lap külön hasonlítódik össze; a színek a megnyitott lapon jelennek meg.

:::note
A rajzban az objektumoknak nincs tartós azonosítójuk, ezért a CadCraft a jellemzőik alapján párosítja őket: ha ugyanaz az objektum mindkét oldalon megvan, nem változott; ha azonos típusú és azonos rétegű objektum a régi saját méretén belül van, az ugyanaz az objektum, de módosult; ami ezen kívül marad, az hozzáadott vagy eltávolított. Egy messzire elmozdított objektum az egyik helyen eltávolítottként, a másikon hozzáadottként jelenik meg. A blokkhivatkozás a blokkjának tartalmát számolja.
:::

## Gyakori hibák

- **„Még nincs másolat.”** A Studio minden olyan rajz megnyitásakor és mentésekor másolatot készít, amelynek van fájlja ezen a számítógépen. A böngészőlapon megnyitott vagy még el nem mentett rajznak nincs másolata.
- **A felhőlista hiányzik.** A lista csak akkor jelenik meg, ha a Studio-ban a felhőből nyitott meg rajzot; a lemezről megnyitott fájl nem felhőrajz.
- **Minden változottnak látszik.** Két, különböző programokkal mentett verzió ugyanazt a rajzot másként írja (névtelen blokkok nevei, kerekítés). Csak a CadCraft által mentett verziókat hasonlítsa össze.
