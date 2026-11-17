---
title: Fogás objektumok pontjaira
summary: Használjon objektumfogásokat, Orthót és rácsot a végpontok, felezőpontok, középpontok és metszéspontok pontos kijelöléséhez egérrel.
keywords: osnap, objektumfogás, végpont, felezőpont, középpont, metszéspont, merőleges, kvadráns, legközelebbi, csomópont, beszúrás, ortho, rács, f3, f8, f7, polárkövetés, polár, polarang, objektumfogás-követés, otrack, követés, f10, f11
from: 3cf17f94
---

## Mit fog létrehozni

Egy téglalap két átlóval, egy kör, amelynek középpontja oda kerül, ahol az átlók metszik egymást, és egy vonal az egyik oldal felezőpontjától a körig. Minden pontot egérrel jelöl ki, és minden pont pontos.

## Hogyan működik a fogás

Amíg egy parancs pontot kér, a CadCraft a keresztszál körül kb. 10 pixeles körzetben fogáspontokat keres. Ha talál egyet, megjelenik egy jelölő és egy címke („Végpont”, „Metszéspont”), és a kattintás **pontosan** erre a pontra kerül, nem oda, ahol a keresztszál van.

A fogás akkor van bekapcsolva, ha az állapotsor {{ui:Fogás}} gombja be van nyomva. Az {{key:F3}} billentyű ki- és bekapcsolja őket.

A használható fogások:

| Fogás | Ide kerül |
|---|---|
| Végpont | Vonalak, ívek és polivonal-szakaszok végei |
| Felezőpont | Vonalak, ívek és polivonal-szakaszok felezőpontja |
| Középpont | Körök és ívek középpontja, valamint a polivonal ívszakaszainak középpontja |
| Kvadráns | Körök és ívek 0°, 90°, 180° és 270°-os pontjai |
| Metszéspont | Ahol két objektum metszi egymást |
| Merőleges | Az objektumon lévő pont, amely derékszögben van az utolsó ponthoz képest (alappont szükséges) |
| Érintő | Körön vagy íven az a pont, ahol az utolsó pontból húzott vonal éppen érinti. Ha még nincs utolsó pont (egy vonal első pontja), a jelölő „halasztott”-at mutat: az érintési pontot a következő pont ismeretében számítja ki, így az Érintőtől az Érintőig húzott vonal mindkét kört érinti |
| Legközelebbi | Bármely objektum legközelebbi pontja |
| Csomópont | Pontobjektumok |
| Beszúrási pont | Szövegek és blokkhivatkozások beszúrási pontja |

Mindegyik alapértelmezés szerint be van kapcsolva, az Érintő és a Legközelebbi kivételével. A Legközelebbi gyakran nyer, amikor mást szeretne; az Érintőt szükség esetén kapcsolja be.

## Fogások kiválasztása

1. Kattintson az állapotsor {{ui:Fogás}} melletti kis nyílra. Megnyílik az {{ui:Objektumfogások}} lista.
2. Jelölje be vagy törölje a fogásokat. A módosítások azonnal érvényesek.
3. A lista bezárásához kattintson újra a nyílra.

A CadCraft megjegyzi a választását, valamint a {{ui:Rács}}, {{ui:Ortho}} és {{ui:Fogás}} beállításokat ebben a böngészőben.

## Lépések

1. Írja be: `REC`, majd nyomja meg az {{key:Enter}} billentyűt.
2. Írja be: `0,0`, majd nyomja meg az {{key:Enter}} billentyűt.
3. Írja be: `@4000,3000`, majd nyomja meg az {{key:Enter}} billentyűt. Megjelenik egy téglalap.
4. Kattintson az {{ui:Kiterjedés}} gombra.
5. Írja be: `L`, majd nyomja meg az {{key:Enter}} billentyűt.
6. Mozgassa a keresztszálat a bal alsó sarokba. A jelölő „Végpont”-ot mutat. Kattintson.
7. Mozgassa a jobb felső sarokra, amíg meg nem jelenik a „Végpont”. Kattintson.
8. Nyomja meg az {{key:Enter}} billentyűt a vonal befejezéséhez.
9. Nyomja meg újra az {{key:Enter}} billentyűt a {{cmd:LINE}} ismétléséhez, és ugyanilyen módon húzza meg a másik átlót a jobb alsó sarokból a bal felső sarokba.
10. Írja be: `C`, majd nyomja meg az {{key:Enter}} billentyűt a kör kezdéséhez.
11. Mozgassa a keresztszálat oda, ahol az átlók metszik egymást. A jelölő „Metszéspont”-ot mutat. Kattintson.
12. Írja be: `800`, majd nyomja meg az {{key:Enter}} billentyűt.

Olyan kört kell látnia, amelynek középpontja pontosan a metszéspontban van.

13. Írja be: `L`, majd nyomja meg az {{key:Enter}} billentyűt.
14. Mozgassa a téglalap bal oldalának felezőpontjáig, amíg meg nem jelenik a „Felezőpont”. Kattintson.
15. Mozgassa a keresztszálat a körre, annak bal oldalára. A jelölő „Merőleges” vagy „Kvadráns” jelenik meg; itt mindkettő ugyanaz a pont. Kattintson.
16. Nyomja meg az {{key:Enter}} billentyűt.

Az új vonal a bal oldal felezőpontjától fut, és pontosan a körön áll meg.

## Fogás kihagyása egy kattintásra

Tartsa lenyomva a {{key:Shift}} billentyűt kattintás közben. Ilyenkor az objektumfogások figyelmen kívül maradnak az adott kattintásnál, és a pont pontosan a keresztszál helyére kerül (vagy az Ortho irányába, ha az Ortho be van kapcsolva).

## Ortho

{{ui:Ortho}} ({{key:F8}}) a következő pontot az alappontból egyenesen vízszintesen vagy függőlegesen tartja. Kattintásokra és közvetlen távolságbevitelre (a parancs kérésénél beírt csupasz számra) is vonatkozik. Az objektumfogások felülírják az Orthót: ha fogásjelölő látszik, a kattintás a fogáshoz kerül.

## Polárkövetés

{{ui:Polár}} ({{key:F10}}) több szögben működő Ortho. Ha a parancsnak van alappontja (egy vonal utolsó pontja, egy mozgatás alappontja), a mutató beigazodik, amikor egy, az alappontból induló sugár közelébe kerül, a polárlépés többszöröseinél: szaggatott vonal jelenik meg, és a keresztszál mellett a `Polar: 1200 < 30°` címke látszik. Kattintson a pont használatához, vagy írjon be egy távolságot: az `1200` pontosan 1200-at visz a sugár mentén.

A lépésköz 90°, amíg meg nem változtatja: írja be a {{cmd:POLARANG}} parancsot, nyomja meg az {{key:Enter}} billentyűt, és írja be: `30` (vagy 45, 22.5, 15 …). A Polár és az Ortho kizárják egymást: az egyik bekapcsolása kikapcsolja a másikat.

## Objektumfogás-követés

{{ui:Követés}} ({{key:F11}}) a mutatót ahhoz a fogáspontokhoz igazítja, amelyekre rááll, így egy sarokkal azonos szinten és egy másik fölött úgy választhat pontot, hogy nem kell segédvonalakat rajzolnia.

1. Kapcsolja be a {{ui:Fogás}} és a {{ui:Követés}} funkciót, majd indítson olyan parancsot, amely pontot kér (`L`).
2. Állítsa a mutatót egy fogáspontra, például egy sarokra, fél másodpercig, kattintás nélkül. Egy kis kereszt jelöli: rögzítve lett. Ha újra rááll, eldobja.
3. Mozgassa a mutatót egyenesen tőle, vízszintesen vagy függőlegesen. Szaggatott vonal követi a mutatót, a címke pedig `Track: 600 < 90°` feliratot mutat. Kattintson, vagy írjon be egy távolságot.
4. Rögzítsen egy második pontot, és mozogjon oda, ahol az egyiken átmenő függőleges és a másikon átmenő vízszintes találkozik: a mutató arra a metszéspontra ugrik (`Track: where two lines meet`).

Ha a {{ui:Polár}} is be van kapcsolva, a rögzített pontok minden polárszögön követnek. Legfeljebb hét pont marad meg, amíg a parancs véget nem ér. A {{key:Shift}} billentyű a követést is kikapcsolja egy kattintásra, ahogy a fogásokat.

## Rács

{{ui:Rács}} ({{key:F7}}) rácsvonalakat mutat a rajz mögött, minden ötödik vonal vastagabb; a rácsköz változik a nagyításkor. Csak segédeszköz, amíg be nem kapcsolja a {{ui:Rácsfogás}} ({{key:F9}}) funkciót: ekkor a kattintások a legközelebbi rácspontra kerülnek, hacsak egy objektumfogás előbb nem veszi át a pontot.

## Funkcióbillentyűk a számítógépen

{{key:F9}} a Rácsfogás, {{key:F10}} a Polár, {{key:F11}} a Követés.

:::mac
Mac-en az F3, F7, F8 és F9 általában a Mission Controlt és a médiát vezérli. Tartsa lenyomva az **fn** billentyűt a billentyűvel együtt, vagy kapcsolja be a szokásos funkcióbillentyűket, ahogy a [Billentyűk, egerek és érintőpadok](common:keys) témakörben le van írva. Az állapotsor gombjai mindig működnek.
:::

:::firefox
A Firefoxban az F7 a kurzoros böngészés (caret browsing) billentyűje is. Ha a Firefox megkérdezi, bekapcsolja-e a kurzoros böngészést, válassza a **Nem** lehetőséget. Ha a kérdés újra és újra megjelenik, használja a {{ui:Rács}} gombot.
:::

:::touch
Érintőképernyőn nincs lebegés (hover), így a fogásjelölő csak ott jelenik meg, ahol az ujja hozzáér. Kis célpontokhoz nagyítson rá közelről, vagy inkább írja be a koordinátákat.
:::

## Gyakori hibák

- **A kattintás rossz pontra került.** A kattintás előtt nézze meg a jelölő címkéjét: a Végpont nyer a Felezőpont felett, ha mindkettő közel van. Nagyítson rá, vagy törölje ki azokat a fogásokat, amelyekre nincs szüksége.
- **Nem jelenik meg jelölő.** A {{ui:Fogás}} ki van kapcsolva, vagy a kívánt fogás nincs bejelölve, vagy az objektum olyan rétegen van, amely ki van kapcsolva vagy befagyasztva.
- **A fogás rossz dolgot ragad meg zsúfolt rajzban.** Nagyítson rá. A fogástávolság képernyőpixelben van mérve, így a nagyítás a rajzon kisebbé teszi.
- **Azt várja, hogy a Shift egyenes vonalat ad.** A CadCraftban a Shift egy kattintásra kikapcsolja a fogásokat. Egyenes vonalakhoz használja az {{ui:Ortho}} funkciót.
- **Kerek értékekre pontokat várna rácson.** Kapcsolja be a {{ui:Rácsfogás}} ({{key:F9}}) funkciót, vagy írjon be koordinátákat.
