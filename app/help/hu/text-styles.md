---
title: Szöveg betűtípusának és méretének beállítása szövegstílusokkal
summary: Készítsen nevesített szövegstílusokat betűtípussal, magassággal, szélességgel és dőléssel, állítson be egyet aktuálisnak az új szövegekhez, és egy stílus módosítása változtassa meg az azt használó összes szöveget.
keywords: szövegstílus, stílus, STYLE, ST, TEXTSTYLE, -STYLE, betűtípus, szövegmagasság, szélességi tényező, dőlés, dőlésszög, betűtípus módosítása, szabványos stílus, stílus alkalmazása, DDSTYLE
from: bd5a4883
---

## Amit el fog végezni

Készítsen `Megjegyzések` nevű szövegstílust saját betűtípussal és magassággal, használja új szövegekhez, majd később módosítsa a stílust, hogy az azt használó minden megjegyzés egyszerre változzon.

## Lépések

1. Gépelje be a {{cmd:STYLE}} (`ST`) parancsot, és nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a {{ui:Rajzolás}} eszköztáron lévő {{ui:Szövegstílus}} gombra. A {{ui:Szövegstílus}} párbeszédpanel felsorolja a rajzban lévő stílusokat. Minden rajzban van `Standard` stílus.
2. Kattintson az {{ui:Új…}} gombra, gépelje be a `Megjegyzések` nevet az új stílushoz, és kattintson az {{ui:OK}} gombra. Az állapotsor ezt írja: „A Megjegyzések szövegstílus létrehozva és aktuálissá téve.”
3. A {{ui:Betűtípus}} mezőben válasszon vagy gépeljen be egy betűtípus nevet. Állítsa be a {{ui:Magasság (0 = minden alkalommal kérdez)}} értéket egy számra, például `2.5`-re, hogy minden új szöveg ezt a magasságot kapja. Hagyja `0`-n, ha minden alkalommal kérdezze meg.
4. Állítsa be a {{ui:Szélességi tényező}} és a {{ui:Dőlésszög (°)}} értékét, ha keskenyebb, szélesebb vagy dőlt betűket szeretne. A mintasor mutatja az eredményt.
5. Kattintson a {{ui:Bezárás (C)}} gombra. Szöveget a {{cmd:TEXT}} vagy {{cmd:MTEXT}} paranccsal rajzoljon: az új szöveg az aktuális stílust kapja.
6. Ha már készített stílust, nyissa meg újra a párbeszédpanelt, válassza ki a listából, és kattintson az {{ui:Aktuálissá tétel}} gombra.
7. Ha már megrajzolt szövegre szeretné ráadni a stílust, jelölje ki a szöveget, nyissa meg a párbeszédpanelt, válassza ki a stílust, és kattintson az {{ui:Alkalmazás a kijelölt szövegre}} gombra.

## Stílus később történő módosítása

A párbeszédpanelen módosítsa a stílus betűtípusát, magasságát, szélességét vagy dőlését, és minden azt használó szöveg követi egy visszavonási lépésben ({{key:Mod+Z}}). Az állapotsor megmondja, hány szöveg követte a változtatást.

## Tudnivalók

- A {{ui:Törlés}} nem engedi a `Standard` stílus törlését, sem olyan stílusét, amelyet még szöveg használ: előbb állítsa arra a szövegre másik stílusát.
- A stílusok a rajz STYLE táblájában mentődnek, így a DXF és DWG fájlok megőrzik azokat.
- A parancssorban a `-STYLE` ugyanezt végzi opciókkal (Aktuális, Új, Betűtípus, Magasság, Szélesség, Dőlés, Törlés, Lista).
- Ha a rajzot olvasó számítógépen nincs meg a betűtípus, a szöveg más betűtípussal jelenik meg.
