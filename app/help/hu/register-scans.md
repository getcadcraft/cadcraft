---
title: Több letapogatás regisztrálása egybe
summary: Helyezze el a különböző pozíciókból készített letapogatásokat egy keretbe kijelölt pontpárokkal vagy beírt célpontokkal, finomítsa őket ICP-vel, mentse a regisztrációt projektként, és a regisztrált felhőt LAS vagy E57 formátumban exportálja. A parancs: REGISTERSCANS.
keywords: regisztráció, regisztrálás, letapogatások, pontfelhő, icp, iteratív legközelebbi pont, célpontok, pontpárok, merev transzformáció, igazítás, egyesítés, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Mit fog csinálni

Egy hely több letapogatása (mindegyik a saját letapogatási pozíciójából) a saját koordinátáival indul. Regisztrálja őket: adjon minden letapogatásnak egy elhelyezést, hogy mind egy keretben legyen, majd mentse ezt projektként, és írja ki a regisztrált felhőt egyetlen LAS vagy E57 fájlba.

## Letapogatások elhelyezése

1. Nyissa meg a párbeszédpanelt (írja be: `REGISTERSCANS`, vagy `REGSCAN`). A {{ui:Letapogatások hozzáadása…}} gombbal LAS, LAZ, E57, PLY, PCD, PTX, PTS vagy XYZ fájlokat adhat hozzá, vagy húzza őket a párbeszédpanelre. Az eltérő mértékegységet használó letapogatásokat a program figyelmeztetéssel elutasítja: előbb alakítsa át az egyiket.
2. Válassza a {{ui:Mozgatandó letapogatás}} és az {{ui:Elhelyezés ehhez}} lehetőséget. A kép mindegyik letapogatást az aktuális helyzetében mutatja, mindegyiket más színnel: {{ui:Alaprajz}}, {{ui:Elölnézet}} vagy {{ui:Oldalnézet}}; húzással mozgathatja, a görgővel nagyíthat.
3. **Pontpárokkal.** Kattintson a {{ui:Pár kijelölése}} gombra, majd egy pontra a mozgatandó letapogatáson, majd ugyanarra a helyre egy másik letapogatáson (egy sarok, egy célpont, egy oszlop talppontja). Ezt legalább háromszor végezze el, olyan pontokkal, amelyek nincsenek egy egyenesen és egymástól távol vannak. Kattintson az {{ui:Elhelyezés párokkal}} gombra: a letapogatás legkisebb négyzetes illesztéssel kerül elhelyezésre, a **Maradék** mutatja, mennyire tér el még minden pár. A nagy számmal rendelkező pár rossz pont: távolítsa el a kereszt ikonnal, és helyezze el újra.
4. **Célpontokkal.** Ha egy pont valódi koordinátái ismertek (geodéziai célpontok), kattintson a {{ui:Kijelölés, majd a cél beírása}} gombra, kattintson a pontra a letapogatásán, és a sorban írja be a célpont X, Y és Z koordinátáit. A párok és a beírt célpontok szabadon kombinálhatók.

## Finomítás ICP-vel

A párok durva elhelyezést adnak. A {{ui:Finomítás}} addig mozgatja a letapogatást, amíg a felületei rá nem illeszkednek a másik letapogatás felületeire: először **pont-pont**, majd **pont-sík** módszerrel. A táblázat minden lépést felsorol a hibájával és azzal, hány pont illeszkedett; a fölötte lévő vonal a hiba csökkenését mutatja. A {{ui:Leállítás}} a folyamatban lévő lépés után befejezi a futást, és megtartja az elért állapotot. A {{ui:Visszavonás}} a teljes futást (vagy az utolsó elhelyezést) visszavonja; a {{ui:Visszaállítás}} visszaállítja a letapogatást a fájlbeli koordinátáira.

Hogy laptopon is gyors maradjon, az ICP a pontok egy ritkított részén dolgozik ({{ui:Használt pontok}}, 5 000 és 60 000 között), és figyelmen kívül hagyja az ennél távolabbi egyezéseket: a {{ui:Legnagyobb egyeztetési távolság}} (alapértelmezésben a letapogatás méretének 5%-a, és a közelítéskor csökken). Először durva elhelyezés kell: az alig átfedő letapogatások jelzik, hogy nem illeszthetők egymáshoz. A csak síkok vagy csak egyenesek nem tudják rögzíteni a helyzetet a saját irányukban; ilyenkor adjon hozzá pontpárokat.

## Mentés és exportálás

- A {{ui:Projekt mentése}} egy kis `.ccscans.json` fájlt ír: minden letapogatás nevét, méretét és az első 64 KB-jának ujjlenyomatát a transzformációjával együtt. Pontokat nem tartalmaz. A {{ui:Projekt megnyitása…}} ezek a hivatkozások alapján megtalálja a letapogatási fájlokat (a fájlokat előbb hozzá kell adni), és visszaállítja mindegyik transzformációt.
- Az {{ui:LAS exportálása}} és az {{ui:E57 exportálása}} egyetlen fájlba írja az összes letapogatást a regisztrált helyén. Az eredeti fájlok pontjai nem íródnak át; a transzformáció kimenetkor kerül alkalmazásra. Ha az {{ui:Olvassa be az összes pontot a fájlokból}} be van kapcsolva, minden pontnál újra beolvassa a fájlokat (letapogatásonként legfeljebb 20 millió pontig); kikapcsolva csak a megjelenítőben látható pontok kerülnek kiírásra.
- Az {{ui:A regisztrált felhő megjelenítése}} (CadCraft) megírja a LAS-fájlt, és a rajz alá csatolja a saját koordinátáival, mint bármely felhőt.

:::note
Semmi sem töltődik fel. A regisztráció a fájlok saját mértékegységében dolgozik, és megőrzi a millimétereket: a LAS-t egy illeszkedő léptékkel írja (akár 0,1 mm-ig), az E57-et dupla pontosságú számokkal. A koordinátarendszer csak akkor kerül át a LAS-be, ha minden letapogatás ugyanazt az EPSG-kódot nevezi meg. Az E57-író saját fejlesztés; a fájljait ezzel az olvasóval és a libE57Format-tal visszaolvasva ellenőrizzük.
:::
