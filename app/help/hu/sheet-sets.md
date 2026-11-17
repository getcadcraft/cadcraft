---
title: Rajzlapkészletek
summary: Több rajzfájl rajzlapjait egyetlen számozott listába gyűjtheti, a címblokkjaikat a készletből töltheti ki, az egészet egyetlen PDF-be publikálhatja, és a készletet zip-fájlba archiválhatja.
keywords: rajzlapkészlet, rajzlapkészlet-kezelő, ssm, sheetset, ccsheets, dst, rajzlaplista, rajzlapjegyzék, címblokk, mezők, publikálás, újraszámozás, archiválás, etransmit, átadólevél, részkészletek, borítólap, rajzlista
from: 2c855720
---

## Mit fog megtanulni

Hogyan gyűjthet rajzlapokat (elrendezéseket) több rajzfájlból egy **rajzlapkészletbe**, hogyan számozhatja és nevezheti el őket, hogyan töltheti ki a címblokkjaikat automatikusan, hogyan publikálhatja az egész készletet egyetlen PDF-ként, és hogyan csomagolhat mindent egy zip-fájlba az elküldéshez.

A rajzlapkészlet saját, kis fájlban él, `<name>.ccsheets` néven, a rajzokat tartalmazó mappában. A készletfájl a rajzlapokat a mappától számított útvonalakkal sorolja fel, így az egész mappa áthelyezhető vagy másolható.

:::note
Mappa olvasásához és íráshoz Chrome vagy Edge szükséges (ezek engedik, hogy egy oldal a kiválasztott mappában dolgozzon), vagy az asztali alkalmazás. Más böngészők csak olvasható módban nyitják meg a készletet: megtekintheti és publikálhatja, a készletfájl pedig letöltődik, nem mentődik.
:::

## Készlet indítása

1. Keresse meg a bal oldali panel {{ui:Rajzlapkészlet}} szakaszát, és nyissa meg a {{ui:Készlet}} menüjét. A {{cmd:SHEETSET}} (vagy `SSM`) beírása is ide visz.
2. Válassza az {{ui:Új készlet…}} lehetőséget. Adjon nevet a készletnek, és ha szeretné, a projekt nevét és számát is.
3. Válassza ki a rajzokat tartalmazó mappát. A készletfájl ott mentődik.

Későbbi megnyitáshoz válassza a {{ui:Készlet megnyitása…}} lehetőséget, és ugyanazt a mappát válassza ki. Ha a mappában több készlet van, a CadCraft megkérdezi, melyiket.

## Rajzlapok hozzáadása

1. Válassza a {{ui:Rajzlapok hozzáadása egy rajzból…}} lehetőséget, és válasszon ki egyet a mappában lévő rajzok közül.
2. A CadCraft a háttérben olvassa be a rajzot (nem nyílik meg a képernyőn), és listázza a rajzlapjait. Jelölje be a kívántakat, és kattintson az {{ui:OK}} gombra.
3. Jelöljön ki egy rajzlapot, és nyomja meg az {{key:F2}} billentyűt (vagy a {{ui:Átnevezés és újraszámozás…}} lehetőséget), hogy számot és címet adjon neki, például `A-101` és `Alaprajz`.

Az {{ui:Új rajzlap sablonból…}} egy másik rajz rajzlapjából (annak címblokkjából és nézetablakaiból) készít új rajzot, az új rajzlap nevét kapja, és hozzáadja. A készlet megjegyzi, melyik rajzot használta sablonként.

## A készlet rendezése

- **Részkészletek** rajzlapokat csoportosítanak, például Építészet › Alaprajzok: jelölje ki, hova kerüljön, és válassza az {{ui:Új részkészlet…}} lehetőséget.
- **Sorrend**: húzza a rajzlapot a lista másik helyére, vagy egy részkészletre, hogy oda helyezze. Billentyűzettel jelölje ki, és nyomja meg az {{key:Alt+Up}} vagy az {{key:Alt+Down}} billentyűt.
- **Rajzlap megnyitása**: kattintson rá duplán (vagy nyomja meg az {{key:Enter}} billentyűt). A rajza saját lapon nyílik meg, azon a rajzlapon.
- **Eltávolítás**: jelölje ki, és nyomja meg a {{key:Delete}} billentyűt. Maga a rajz nem változik.
- **Visszavonás**: a {{ui:Készletmódosítás visszavonása}} és a {{ui:Készletmódosítás ismétlése}} a készletben végzett változtatások között lépeget.
- **Újraszámozás**: a {{ui:Rajzlapok újraszámozása…}} minden rajzlapot vagy egy részkészlet rajzlapjait a lista sorrendjében számozza: előtag, kezdőszám és lépésköz (az `A-` és a `101` A-101, A-102 …-t ad).

Minden változtatás azonnal mentődik a készletfájlba.

## Rajzlapok számozása a mezőik alapján

Kézi számozás helyett hagyja, hogy egy szabály a rajzlap mezőiből építse fel a számot, így az a rajzlap, amely másik szintre vagy szakágba kerül, magától kapja meg az új számát.

1. Adja meg minden rajzlap mezőit: jelölje ki, kattintson az {{ui:Átnevezés…}} gombra, majd az {{ui:A rajzlap mezői}} mezőbe soronként egyet írjon, például `DISCIPLINE = A` és `LEVEL = 1`. Azt a mezőt, amelyet az egész készlet megoszt (mondjuk `DISCIPLINE = A`), a készlet {{ui:Tulajdonságok…}} részébe is beírhatja.
2. Nyissa meg a panel menüjét, és kattintson a {{ui:Számozási szabály…}} lehetőségre.
3. Írja meg a szabályt, például `{DISCIPLINE}-{LEVEL}{SEQ:2}`. A `{SEQ}` azokon a rajzlapokon belül számol felfelé, amelyeknek a többi mezője ugyanaz, így az 1. szint A-101, A-102 számokat kap, a 2. szint pedig A-201-gyel kezd újra. A `{SEQ:2}` két számjeggyel írja ki; a `{SUBSET}` annak a részkészletnek a neve, amelyben a rajzlap van.
4. Válassza ki, mi történjen, ha egy mező változik: az {{ui:A rajzlapok újraszámozása}} minden változtatás után a szabály szerint tartja a számokat; a másik lehetőség most egyszer számozza őket.

A szabály a készletfájlban mentődik. Amíg önmagában számoz újra, a rajzlap mezőit változtassa, ne a számát.

## Címblokkok kitöltése a készletből

Egy címblokk a készletből kapja a szövegét, ha az attribútumait egy mező nevével jelölték meg:

| Címke | Mit jelenít meg |
|---|---|
| `SHEETNUMBER` (vagy `SHEET_NO`, `DWG_NO`) | A rajzlap száma |
| `SHEETTITLE` (vagy `TITLE`, `SHEET_TITLE`) | A rajzlap címe |
| `SHEETDESC` | A rajzlap leírása |
| `PROJECTNAME` (vagy `PROJECT`) | A projekt neve |
| `PROJECTNUMBER` (vagy `PROJECT_NO`, `JOB_NO`) | A projekt száma |
| `SHEETSETNAME` | A készlet neve |
| `SHEETINDEX`, `SHEETCOUNT` | „3 a 12-ből”, és 12 |
| Saját, például `CLIENT` | Az a érték, amelyet a {{ui:Készletmezők…}} alatt megadott |

A {{ui:Készletmezők…}} tartalmazza a projekt nevét és számát, és a saját mezőit, soronként `NÉV = érték` alakban.

A {{ui:Rajzok frissítése}} beírja a számokat, címeket és mezőket a készlet minden rajzának címblokkjába, és átnevezi minden rajzlap elrendezési fülét a készlet szerint (alapértelmezésben a szám és a cím, például `A-101 Alaprajz`; a {{ui:Készletmezők…}} › {{ui:Elrendezéslapok nevei}} ezt módosítja). Minden rajz a helyén mentődik, a saját formátumában és verziójában. Miután újraszámozta vagy átnevezte a rajzlapokat, futtassa újra, és a fülek és a címblokkok követik.

## Rajzlaplista a borítólapon

Jelölje ki a listában a borítólapot, és válassza a {{ui:A rajzlaplista elhelyezése erre a rajzlapra}} lehetőséget. A rajzlap bal felső sarkába minden rajzlap táblázata kerül (szám és cím, a részkészlete alatt). A {{ui:Rajzok frissítése}} és a {{ui:Publikálás PDF-be}} tartja naprakészen. Ez egyetlen blokk, `CC_SHEETLIST`: mozgassa, mint bármely blokkhivatkozást.

## A készlet publikálása

A {{ui:Publikálás PDF-be}} egy PDF-et készít, rajzlaponként egy oldallal, a készlet sorrendjében, minden rajzlap saját papírméretében, minden rajzlaphoz egy könyvjelzővel („A-101 — Alaprajz”). Ha egy részkészlet van kijelölve, a CadCraft megkérdezi, csak azt publikálja-e. A PDF címblokkjai már a rajzok frissítése előtt is a készletből töltődnek ki; maga a publikálás nem módosítja a rajzokat. A PDF letöltődik.

A {{ui:Publikálás DWG-be…}} minden rajzlapot külön DWG-ként ír ki (DWG 2018): a modellt és azt az egy rajzlapot, címblokkjával a készletből kitöltve, a száma és címe szerint elnevezve (`A-101 Level 1 floor plan.dwg`). Válassza a {{ui:DWG}} lehetőséget, vagy a {{ui:DWG + PDF}} lehetőséget a készlet PDF-jével együtt. A `publish.json` felsorolja minden fájl méretét és SHA-256 értékét. Ha a készlet mappája írható (CadCraft Studio, vagy a böngészőben kiválasztott mappa), a fájlok a `<set name> - published` mappába kerülnek; különben egyetlen zip-fájlként töltődnek le. A nézetablak-osztályfelülírásai minden DWG-ben megmaradnak.

## A készlet archiválása

Az {{ui:Archiválás zipként}} becsomagolja a készletfájlt, minden használt rajzot és azt, amire ezek a rajzok hivatkoznak (a külső hivatkozásként használt rajzokat, és azoknak a hivatkozásait is, valamint a képeket), megtartva a mappáikat, és mellé egy `Transmittal.txt` fájlt, amely minden fájlt felsorol. A készlet mappáján kívülre mutató hivatkozás hiányzóként szerepel ott. A hivatkozásokat a rajztól számított útvonaluk alapján, majd a mappán belül bárhol a fájlnevük alapján találja meg.

## A készletfájl

A `.ccsheets` fájl JSON, amelyet bármely szövegszerkesztőben olvashat:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Az útvonalak a készlet mappájához viszonyítottak, a mappák között `/` jellel. A CadCraft megnézi a fájlt, amikor megnyitja: az abszolút útvonalat, a fájl vagy elrendezés nélküli rajzlapot, vagy a nem egyszerű szöveget kihagyja, és az előzmények ezt megmondják.

## Hibaelhárítás

| Amit lát | Miért | Mit tegyen |
|---|---|---|
| „Ez a mappa itt csak olvasható” | A böngésző nem ír a mappába | Használjon Chrome-ot vagy Edge-et, vagy az asztali alkalmazást; addig a {{ui:A készletfájl letöltése}} megőrzi a változtatásait |
| A rajzlap kimarad a PDF-ből: „nincs ilyen nevű elrendezés …” | A rajzlap elrendezését átnevezték vagy eltávolították a rajzában | Nyissa meg a rajzot, és ellenőrizze a füleit; távolítsa el a rajzlapot, és adja hozzá újra |
| A címblokk üres marad | Az attribútumai más címkéket kapnak | Nevezze át az attribútumcímkéket a fenti mezőnevekre (BEDIT) |
| „már van ilyen nevű elrendezés …, ezért a fület nem nevezte át” | Egy rajz két rajzlapja ugyanazt a fülnevet kapná | Adjon az egyiknek másik számot vagy címet |
