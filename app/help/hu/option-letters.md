---
title: Saját betűk megadása a parancsopciókhoz
summary: Adja meg a parancsok opcióira a saját betűit, bármilyen nyelven, egy szerkeszthető, importálható és exportálható szövegfájlból.
keywords: opcióbetűk, optionkeys, optkeys, opciókulcs, kulcsszó, átírás, leképezés, testreszabás, egyéni betűk, polár, tömb, P, PO, nyelv, opciók fordítása, rövid alak, importálás, exportálás, többértelmű
from: 7c8328c6
---

## Amit megtanul

Hogyan módosíthatja a betűket, amelyeket a parancs opcióinak megválaszolásához ír be. Például az {{cmd:ARRAY}} parancs a `[Rectangular/POlar]` kérdést teszi fel, és a `PO` betűt fogadja el a Polár opcióhoz; a `P` vagy bármely más betű ugyanezt teheti, ha szeretné, a saját nyelvén is.

## Hogyan válaszolnak az opciókra

Ha egy parancs szögletes zárójelben mutat opciókat, a nagybetűs betűk a beírandók: a `POlar` opció `PO`, az `eXit` opció `X`.

Beírhat kevesebb betűt is. Ha az Ön által beírt betűk csak egy megjelenített opcióra illenek, a CadCraft azt fogadja el: a `[Rectangular/POlar]` kérdésnél az egyedüli `P` a Polár. Ha két opcióra is illik, a parancssor megnevezi őket, és újra kérdez:

```
C ezt jelentheti: COUnt, COLumns. Írjon be több betűt.
```

A számokat soha nem találgatja: a beírt távolság vagy darabszám mindig számként értelmeződik.

## Saját betűk hozzáadása

Minden parancs megtartja a beépített betűit. Az Ön betűi ezekre kerülnek, így a listája csak azt tartalmazza, amit megváltoztatott.

1. Nyissa meg a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Opcióbetűk}} menüpontot, és kattintson az {{ui:Szerkesztés…}} gombra. Vagy írja be az {{cmd:OPTIONKEYS}} parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. A {{ui:Parancs}} alatt válassza ki a parancsot, például `ARRAY`. A lista minden olyan parancsot tartalmaz, amely opciókat kér, és az utoljára használt parancsnál indul.
3. Az {{ui:Opció}} alatt válassza ki az opciót. Mindegyik zárójelben mutatja a beépített betűit, például `POlar (PO)`.
4. A {{ui:Saját betűk}} mezőbe írja be a kívánt betűket, például `P`, majd kattintson a {{ui:Hozzáadás}} gombra.
5. Az opció most a {{ui:Saját betűk}} alatt jelenik meg a beépített és a saját betűivel együtt. Kattintson a {{ui:Mentés}} gombra.

Indítsa el az {{cmd:ARRAY}} parancsot, válasszon ki egy objektumot, és nyomja meg az {{key:Enter}} billentyűt. A kérdés az opció után megmutatja az Ön betűit, `POlar (P)`, és a `P` válaszol rá.

Egy betű eltávolításához kattintson a sora végén lévő x jelre, majd a {{ui:Mentés}} gombra. Az opció visszatér a csak beépített betűire.

## Betűk, amelyeket nem használhat

A szerkesztő elutasítja azokat a betűket, amelyek elrejtenének valamit, amit a parancssor már olvas, és megmondja, miért:

- ugyanazon parancs más opciójának beépített betűit (az `R` a Polár opcióhoz az `ARRAY` parancsban, ahol az `R` a Téglalap);
- három vagy több betűs objektumfogás-szót, mint az `END`, `MID` vagy `CEN`, valamint az `ALL` és `LAST` szavakat;
- ugyanazt a betűt két különböző opcióhoz ugyanazon parancson belül.

Amíg bármi piros színnel van jelölve, a {{ui:Mentés}} ki van kapcsolva: javítsa a sort vagy törölje, és újra bekapcsol. A kérdések beépített betűi mindig elsőbbséget élveznek az Önéi felett, így a listája soha nem akadályozhatja meg a beépített válaszok működését. Azok a betűk, amelyek egy parancs nevével egyeznek, például az `L` vagy a `C`, rendben vannak: opció-kérdésnél a parancssor választ olvas, nem parancsot indít.

Egy parancshoz felsorolt opciók azoknak a parancsoknak a kérdéseiből származnak, amelyek ugyanazokat a kérdéseket használják, ezért egy parancs néha olyan opciót is felsorol, amelyet csak bizonyos esetekben kérdez.

## Egy választás minden parancsra

Az {{ui:Parancs}} alatt válassza a {{ui:Minden parancs}} lehetőséget. Az opciók ekkor minden parancs összes opciója lesznek, például a eXit vagy az Undo. Az itt megadott betűk bárhol válaszolnak az adott opcióra, ahol egy parancs felkínálja. Az egy adott parancsra megadott betűk felülírják ezeket.

## Betűk a saját nyelvén

A betűk bármilyen ábécéből származhatnak, így úgy válaszolhat az opciókra, hogy nem kell váltania a billentyűzetet: adjon hozzá például `З` betűt a Close opcióhoz a {{ui:Minden parancs}} alatt, vagy `П` betűt a POlar opcióhoz az `ARRAY` parancsban.

A CadCraft csak az angol betűkkel érkezik. A saját listáját Ön, az irodája vagy a nyelvét használók állítják be, és az {{ui:Exportálás}} fájlt készít, amelyet továbbadhat.

## Szerkesztés szövegként

A szerkesztőben a {{ui:Szerkesztés szövegként}} ugyanazt a listát mutatja szövegsorokként, opciónként egyet; ezt menti az {{ui:Exportálás}} is:

```
ARRAY.PO,  P
*.X,       Q
```

Minden sor a parancsból, egy pontból, az opció beépített betűiből, egy vesszőből és az Ön betűiből áll. A parancs helyén álló csillag minden parancsot jelent. A `;` karakterrel kezdődő sor megjegyzés.

## Ami változatlan marad

- A beépített betűk az Önéi mellett is működnek.
- A rutinok és az eszköztár gombjai a beépített betűket használják, így a betöltött elemek nem törnek el. Ha a saját betűi útjában lévő beépített betűket saját kezűleg szeretné beírni, írjon elé aláhúzást: `_PO`.
- A parancs rövid neve más dolog: lásd [Parancsok álneveinek szerkesztése](topic:command-aliases).

## Sorok, amelyeket a CadCraft elutasít

Szövegként szerkesztéskor vagy fájl importálásakor a szerkesztő minden problémát a sorszámával együtt jelez:

- a parancs nem létezik (a parancs álneve megengedett: az `AR.PO` `ARRAY.PO`-ként értelmeződik);
- a sor nem `PARANCS.OPCIÓ, BETŰK` alakú;
- a betűkben szóköz vagy előjel van (csak betűk és számjegyek, legfeljebb 16);
- ugyanazok a betűk két különböző opciót válaszolnának ugyanazon parancson belül.

## Importálás és exportálás

Az {{ui:Exportálás}} a betűit szövegfájlba menti, hogy megőrizze vagy másnak továbbadja. Az {{ui:Importálás…}} egy ilyen fájlt olvas be. Mindkettő a szerkesztőben és a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Opcióbetűk}} alatt is megtalálható.

A Beállításokban az {{ui:Importálás…}} a fájlját a kiválasztott fájllal helyettesíti. Az ütköző vagy használhatatlan sort tartalmazó fájl nem kerül be; a sorok megtekintéséhez nyissa meg a szerkesztőt, és importálja ott. A szerkesztőben az import csak kitölti a mezőt: semmi nem változik, amíg nem kattint a {{ui:Mentés}} gombra.

## Újratöltés vagy eltávolítás

Írja be a {{cmd:REINIT}} parancsot, és nyomja meg az {{key:Enter}} billentyűt, hogy a fájlt újra alkalmazza. Egy betű eltávolításához törölje a sorát, és kattintson a {{ui:Mentés}} gombra.

## A betűi követik a fiókját

Amikor be van jelentkezve a getcadcraft.com oldalra, a betűit a fiókjához kötve tárolja a rendszer. Ha másik böngészőben vagy másik számítógépen nyitja meg a CadCraftot ugyanazzal a fiókkal, a betűk maguktól megérkeznek; a parancssor ezt írja: `Opcióbetűk a fiókjából`. Ha két helyen módosította őket, a legújabb példány marad meg, a helyette lévő egyszer megmarad.

A {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Opcióbetűk}} megmutatja az állapotukat. Kijelentkezve vagy offline állapotban a betűk ebben a böngészőben maradnak, és a következő mentéskor, bejelentkezve, eljutnak a fiókjába.

Kapcsolódó: [Parancsok álneveinek szerkesztése](topic:command-aliases) · [CadCraft beállítások](topic:settings) · [Parancsok](topic:commands)
