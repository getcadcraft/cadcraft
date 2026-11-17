---
title: Rajz küldése lézernek
summary: Nyissa meg a Lézer panelt, válassza ki, mit csináljon minden réteg (vágás, bevágás, gravírozás, kitöltés, kép), tekintse meg a fej mozgását, mentse el a GRBL lézermód G-kódot, vagy küldje el a böngészőből a feladat körvonalának bejárása után.
keywords: lézer, lézervágó, lézergravírozó, GRBL, G-kód, gcode, gravírozás, kitöltés, dither, képgravírozás, bevágás, vágás, Web Serial, feladat körvonalának bejárása, teljesítmény, sebesség, menetek, LASER, LASERCUT, CNC
from: 72b56db0
---

A {{ui:Lézer}} panel a rajz rétegeit olyan programmá alakítja, amely GRBL vezérlőn futó lézerhez való (a legtöbb hobbi- és kisüzemi diódás és CO2-es vezérlő). Írja be a `LASER` (vagy `LASERCUT`) parancsot, és nyomja meg a(z) {{key:Enter}} billentyűt, vagy válassza a(z) {{ui:Lézer…}} elemet a(z) {{ui:Továbbiak}} menüben a(z) {{ui:Nézet}} csoportban. A szalagos stílusban a {{ui:Fájl}} menüben, és a {{ui:Plottolás}} gomb mellett található. A panel a rajz fölé nyílik, és a rajzolás közben is nyitva marad: az előnézet minden változást követ.

:::warning
Minden beállítást próbáljon ki előbb selejtanyagon, viseljen a lézerhez illő védőszemüveget, ahol van fedél, tartsa zárva, és soha ne hagyjon működő lézert felügyelet nélkül. A rétegek kezdőértékei helyőrzők, nem ajánlások egyetlen anyagra sem.
:::

## Mit küld el

A panel a modellt olvassa (nem a lapokat), a be- és nem zárolt rétegeken:

- Vonalak, ívek, körök, polivonalak (az ívszakaszok ívek maradnak), ellipszisek és spline-ok. Az az alakzat, amely ott ér véget, ahol kezdődött, zártnak számít.
- A blokkok szét vannak bontva: a blokkon belül a 0 rétegen lévő objektum a blokkhivatkozás rétegével együtt megy.
- Egy kitöltés a határát küldi, így egy kitöltött logó a **Alakzatok kitöltése** rétegen kitöltve lesz.
- Egy kép (`IMAGEATTACH`) gravírozódik, ha a **Kép gravírozása** értékre állított rétegen van, ha négyzetes (nincs elforgatva vagy megdöntve), és a fájlja meg van nyitva a CadCraft-ban.
- A szöveg, a méretezések, a vezetővonalak, a pontok és a szerkesztővonalak nem kerülnek elküldésre; a panel jelzi, hány darabot hagyott ki. Szöveg égetéséhez rajzolja le a betűket alakzatként, vagy sraffozza őket.

A méretek a rajz mértékegységéből milliméterben mennek ki (`UNITS`): a hüvelykben készült rajz értékeit 25,4-gyel szorozzuk. Mértékegység nélküli rajz egy egységét egy milliméternek küldi. Jelölje be a(z) {{ui:Csak a kijelölt objektumok}} lehetőséget a rajz egy részének küldéséhez.

## Minden réteg feladatának beállítása

Minden olyan réteg, amelyen van valami, egy sort kap. A {{ui:Feladat}} oszlopban beállítható: **Vágás**, **Bevágás**, **Vonalak gravírozása**, **Alakzatok kitöltése**, **Kép gravírozása** vagy **Nincs küldve**, valamint a {{ui:Teljesítmény %}}, a {{ui:Sebesség mm/perc}} és a {{ui:Menetek}} értékek. Minden változtatás egy visszavonási lépés, és a rajzba mentődik: a DWG (minden CadCraft-verzióval mentett) és a DXF megőrzi a beállításokat, így a rajz legközelebb azokkal nyílik meg. Más programok a fájlt a szokásos módon nyitják meg; ott egy használaton kívüli, CADCRAFT_LASER nevű blokk látszik (ha azt ott kiüríti, a beállítások törlődnek).

- **Alakzatok kitöltése** a zárt alakzatok belsejét égeti ki vonalakkal, a {{ui:Sortávolság}} távolságra, a {{ui:Szög}} szögben, mindkét irányban vagy csak egy irányban, túlfutással, hogy a fej a lézer bekapcsolásakor már sebességen legyen. A keresztsraffozás egy második menetet ad 90°-ban. A lyukkal rendelkező alakzat a lyuknál nyitva marad.
- **Kép gravírozása** a képet pontokká alakítja (Floyd–Steinberg, Atkinson, rendezett vagy egyszerű fekete-fehér küszöbértékkel), vagy a *Szürkeárnyalatok* beállítással változó teljesítménnyel.
- Sorrend: előbb a képek és a kitöltések, majd a vonalgravírozás, majd a bevágások, végül a vágások, így a kivágott alkatrész nem mozdul el gravírozás közben. Egy rétegen belül az útvonalak **belülről kezdve** haladnak (a lyuk, mielőtt az a lemez, amelyben van), a legközelebbi következik.

## Előnézet, majd mentés

Az előnézet azt rajzolja, amit a fej csinál: az égető vonalak színesen, a gyors mozgások szürkén, és egy zöld doboz mindenen, ami ég. Alatta a méret, az égetés hossza és egy időbecslés látszik (gyorsulás nélkül; egy valódi gép tovább dolgozik). A {{ui:G-kód mentése…}} GRBL lézermód G-kódot ír: `$32=1`, `M4` (vagy `M3`) S-értékekkel, `G0` és `G1` mozgások, a végén `M5`. Az X0 Y0 a feladat bal alsó sarka, hacsak nem a rajz origóját választja: a gépén ide állítsa a munkanullpontot.

## Küldés a böngészőből

Chrome-ban és Edge-ben a(z) {{ui:Csatlakozás…}} gomb kéri a lézer USB-portjának kiválasztását. Semmi nem csatlakozik és nem küldődik, amíg nem nyom gombot. Először nyomja meg a(z) {{ui:A feladat körvonalának bejárása}} gombot: a fej a feladat dobozát a lézer **kikapcsolt** állapotában (vagy a mutatóhoz beállított alacsony teljesítménnyel) bejárja, hogy lássa, hol fog égetni. Csak ezután válik aktívvá a(z) {{ui:Feladat küldése}} gomb, és ha bármit módosít, újra kikapcsol. A(z) {{ui:Szünet}} megtartja a fejet, a(z) {{ui:Leállítás}} szintén megtartja, alaphelyzetbe állítja a vezérlőt (a lézer kikapcsol), és elküldi az `M5` parancsot. Ahol a Web Serial hiányzik (Firefox, Safari, és a CadCraft Studio, amelynek még nincs Web Serial támogatása), a panel csak mentést kínál: mentse a G-kódot, és a saját lézerprogramjával küldje el.

## Még nincs elkészítve

Még nincs elkészítve: más vezérlők formátumai (Ruida, Marlin lézerek, gyártói fájlok), fülek és belépő- és kilépőívek, rés-eltolás, anyagkönyvtárak, forgó és Z tengelyek, kameraillesztés, szöveg körvonalként.
