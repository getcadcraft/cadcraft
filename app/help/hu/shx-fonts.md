---
title: Saját SHX-betűtípusokkal való szövegrajzolás
summary: Adjon meg a CadCraftnak egy SHX-betűtípus-mappát (vagy válassza ki a fájlokat), és a nevükkel hivatkozó szövegstílusok a betűtípusokkal rajzolódnak ki a képernyőn, nyomtatásban és PDF-ben, a stílus magasságával, szélességi tényezőjével és dőlésszögével.
keywords: shx, betűtípus, betűtípusok, alakzatos betűtípus, big font, bigfont, unifont, örökölt, perzsa, farszi, arab, szövegstílus, hiányzó betűtípus, helyettesített betűtípus, SHXFONTS, mappa, fordított, vizuális sorrend, simplex, isocp
from: 14b0a4ab
---

Más programokkal készült rajzok gyakran **SHX-betűtípusokat** neveznek meg a szövegstílusaikban, a DWG pedig nem tartalmazza azokat. A betűtípus nélkül a CadCraft a szöveget a saját betűképével rajzolja ki, ez hétköznapi latin szövegnél rendben van, de olyan régi betűtípusoknál nem, amelyek egyszerű karakterkódokat más betűformákra képeznek le, például régi perzsa feliratozásnál.

Adja meg a CadCraftnak a betűtípusokat, és a szöveget azokban rajzolja ki.

## Betűtípusok betöltése

Írja be a {{cmd:SHXFONTS}} (`SHX`) parancsot, és válassza az alábbiakat:

- {{ui:Mappa}} (CadCraft Studio): válasszon egy mappát. Minden benne lévő `.shx` fájl most beolvasódik, és minden CadCraft-indításkor újra.
- {{ui:Fájlok}} (böngésző): válasszon egy vagy több `.shx` fájlt. Ezek ebben a böngészőben maradnak, és soha nem töltődnek fel.
- {{ui:Lista}}: a betöltött betűtípusok, és azok, amelyeket a megnyitott rajz megnevez, de még nem töltötte be.
- {{ui:Eltávolítás}} és {{ui:Törlés}}: egy betűtípus, vagy az összes elfelejtése.

A CadCraft nem tartalmazhat harmadik fél betűtípusait, ezért soha nem szállít egyet sem: ezeket a felhasználónak kell megadnia. A rajz csak megnevezi a betűtípusait, és nem őrzi meg azok másolatát.

## Mi történik

A szövegstílus betűtípusának neve a név alapján párosodik egy betöltött betűtípussal, figyelmen kívül hagyva a kis- és nagybetűket, a mappát és a `.shx` kiterjesztést (a `SIMPLEX.SHX` a `simplex`-et találja meg). Egy ilyen stílusú szöveg vonalakként rajzolódik ki: a képernyőn, nyomtatásban és PDF-ben, a szöveg saját helyén, magasságával, forgatásával, szélességi tényezőjével és dőlésszögével. Szélessége a betűtípusé, így a {{ui:Középpont}} és a {{ui:Jobb}} igazítás, a tördelés és a kijelölés azt mutatja, amit lát. Az a stílus, amelynek betűtípusa nincs betöltve, megtartja a beépített betűképet; ha olyan rajzot nyit meg, amely be nem töltött betűtípusokat nevez meg, a parancssor ezt jelzi.

A Standard stílus is számít: ha a rajz Standard stílusa saját betűtípust nevez meg, megtartja azt.

## Betűtípusok, amelyek már vizuális sorrendben vannak

Sok régi perzsa és arab SHX-betűtípus már a képernyőre formált, balról jobbra rajzolt betűket tartalmaz, így a logikai sorrendben beírt szöveg visszafelé jelenik meg. Írja be a {{cmd:SHXFONTS}} parancsot, válassza a {{ui:Megfordítás}} lehetőséget, és adja meg a betűtípus nevét: a szövege ekkor utolsó betűjével kezdve rendeződik el. Az visszavonásához futtassa újra. A kapcsoló a betűtípushoz tartozik, ebben a böngészőben tárolódik, és nincs elmentve a rajzba.

## Ami még nincs lefedve

- Az inline formázókódokat tartalmazó szöveg (színek, egymásra állított törtek MTEXT-ben) a beépített betűképen marad.
- A nagy betűtípusok (a kétbájtos fajta) pótolják azokat a kódokat, amelyek a fő betűtípusból hiányoznak, de a kelet-ázsiai kódlapon lévő szöveg, amelyet a CadCraft már Unicode-dá alakított, nem képeződik vissza a betűtípus kétbájtos kódjaira.
- A betűtípus-olvasó a formátum közzétett leírását követi, és a CadCraftnak készült betűtípusokon tesztelték. Ha valamelyik saját betűtípusa hibásan rajzolódik ki, küldje el nekünk a betűtípust és a rajzot.
