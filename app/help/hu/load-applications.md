---
title: Alkalmazások betöltése (APPLOAD)
summary: Töltsön be LISP-rutinokat és azok párbeszédfájljait, távolítsa el őket, töltse be újra az előzményekből, és a gyakran használtakat tartsa meg az Indítási csomagban.
keywords: appload, ap, alkalmazás betöltése, lisp, lsp, dcl, rutin, indítási csomag, eltávolítás, előzmények, áthúzás, betöltés, testreszabás, kezelés
from: 89e0ee95
---

## Amit megtanul

Hogyan töltsön be egy LISP-rutint (egy `.lsp` fájlt), hogy a parancsai működjenek a CadCraftban, hogyan távolítsa el, és hogyan érje el, hogy a CadCraft indulásakor mindig betöltődjön.

## Rutin betöltése

1. Nyissa meg a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Alkalmazás betöltése…}} menüpontot, vagy írja be az {{cmd:APPLOAD}} parancsot (vagy az `AP`-t), majd nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson a {{ui:Fájl betöltése…}} gombra, és válasszon ki egy vagy több `.lsp` fájlt. Az a rutin, amely párbeszédpanelt nyit, általában egy `.dcl` fájllal jár együtt: azt is válassza ki.
3. A párbeszédpanel megmondja, mit hozott létre az egyes fájl, például: „Betöltve: delblocks.lsp: 1 parancs, DELBLOCKS.”
4. Kattintson a {{ui:Bezárás (C)}} gombra, írja be a rutin parancsát, és nyomja meg az {{key:Enter}} billentyűt.

A `.lsp` és `.dcl` fájlokat a rajzra vagy az Alkalmazások betöltése párbeszédpanelre is húzhatja: azonnal betöltődnek.

A fájl itt, a böngészőben olvasódik be. Semmi nem töltődik fel.

:::tip
Üres parancssorban nyomja meg az {{key:Enter}} billentyűt a rutin parancsának újrafuttatásához, mint bármely más parancsnál. A parancsaliasai is elérik: lásd: „Parancsaliasok szerkesztése”.
:::

## Rutin eltávolítása

Az {{ui:Alkalmazások betöltése}} alatt, a {{ui:Betöltött alkalmazások}} részben kattintson a fájl melletti {{ui:Eltávolítás a memóriából}} gombra. A általa létrehozott parancsok addig megszűnnek, amíg újra be nem tölti.

## Rutin betöltése minden CadCraft-indításkor

1. Töltse be a rutint.
2. A {{ui:Betöltött alkalmazások}} alatt kattintson a mellette lévő {{ui:Hozzáadás az Indítási csomaghoz}} gombra.

Ettől kezdve a rutin magától betöltődik, valahányszor a CadCraft ebben a böngészőben elindul. Ennek megszüntetéséhez kattintson a mellette lévő {{ui:Eltávolítás}} gombra az {{ui:Indítási csomag}} alatt.

Az Indítási csomag a fájl egy példányát tárolja ennek a böngészőnek a tárhelyén. Ha megváltoztatja a rutint, töltse be az új fájlt, és adja hozzá újra.

## Az acad.lsp és acaddoc.lsp betöltése támogatási mappából (Studio)

A CadCraft Studioban az Alkalmazások betöltése párbeszédpanel {{ui:Támogatási mappa}} része a számítógépén lévő mappát vesz fel. Kattintson a {{ui:Mappa kiválasztása…}} gombra. A CadCraft indulásakor beolvassa az `acad.lsp`-t, majd az `acaddoc.lsp`-t abból a mappából (a nevek kis- és nagybetűitől függetlenül), betölti őket, majd betölti az Indítási csomagot. Az `acaddoc.lsp` minden új rajzfül megnyitásakor újra beolvasódik. A mappa többi fájlja nem olvasódik be, a 2 MB-nál nagyobb fájl pedig üzenettel kihagyásra kerül.

Ha egy fájl `S::STARTUP` nevű függvényt határoz meg, az egyszer lefut a fájlok betöltése után (az Indítási csomag után is). A {{ui:Betöltés most}} ugyanezt kérésre elvégzi; a {{ui:Törlés}} elfelejti a mappát.

A böngészőben egy oldal nem tud mappát megtartani, így nincs támogatási mappa: használja a fent leírt Indítási csomagot. A lefordított `.fas` és `.vlx` fájlok, valamint a natív programok továbbra is visszautasítódnak.

## Fájl újratöltése az előzményekből

Az {{ui:Előzmények}} listázza a böngészőben betöltött fájlokat, a legújabbal elöl. Kattintson a mellette lévő {{ui:Betöltés}} gombra az újratöltéshez, anélkül hogy a számítógépén keresné.

## Fájlok, amelyeket a CadCraft nem tud betölteni

| Fájl | Mi az | Mit tegyen |
|---|---|---|
| `.fas`, `.vlx` | fordított vagy védett LISP | helyette a `.lsp` forrást töltse be |
| `.arx`, `.crx`, `.dbx` | natív Windows-programok | ezeket a CadCraftban nem lehet futtatni |
| `.dvb` | VBA-projekt | ezeket a CadCraftban nem lehet futtatni |
| `.craft`, `.lua`, `.py` | CraftScript-szkriptek | nyissa meg őket a PartCraft Szkript munkaterületén |

Az Alkalmazások betöltése párbeszédpanel kiválasztáskor megmondja, melyik típus egy fájl.

## Rutin leállítása

Nyomja meg az {{key:Esc}} billentyűt. A rutin egyik kérdésénél az Esc a rutin által elvárt módon megszakítja (lefut a saját takarítása). Ha foglalt, és nem kérdez semmit, az Esc azonnal leállítja, és ezt jelzi; a betöltött rutinok betöltve maradnak.

:::note
Amit egy rutin megváltoztat a rajzban, az egy lépés: egy {{key:Mod+Z}} mindent visszavon.
:::
