---
title: Nézetablak-osztályok felülbírálása
summary: Rajzlapon egy osztályt elrejthet, vagy más színt, vonalvastagságot vagy kitöltést adhat neki csak egy nézetablakban; a modell és a többi nézetablak nem változik.
keywords: nézetablak, osztály felülbírálása, nézetablak felülbírálása, osztály elrejtése nézetablakban, rajzlap, elrendezés, VPLAYER, plottolás, Vectorworks
from: c1a2b51f
---

Egy rajzlap gyakran többször mutatja ugyanazt a modellt: egy alaprajz a bútorokkal, és egy másik bútorok nélkül, vagy egy világítási terv, ahol csak a lámpák színesek. A nézetablak-osztály felülbírálás úgy módosítja, hogy egy [osztály](topic:classes) hogyan látszik, **csak ebben a nézetablakban**.

1. Nyissa meg a rajzlapot, és jelöljön ki egy nézetablakot.
2. Nyissa meg az osztályok panelt (`CLASSES`), és válassza ki az osztályt.
3. Az {{ui:Ez a nézetablak}} csoportban jelölje be az {{ui:Elrejtés ebben a nézetablakban}} négyzetet, vagy állítsa be a {{ui:Szín itt}}, a {{ui:Vonalvastagság itt}} vagy a {{ui:Kitöltés itt}} értéket.

Az alábbi listában minden osztály szerepel, amelyet ez a nézetablak módosít. A {{ui:A nézetablak felülbírálásainak törlése}} gomb mindet egyszerre törli. Minden módosítás egy visszavonási lépés.

## Mit változtat a felülbírálás

- Az **elrejtés** elrejti az osztályt és az alatta lévő összes osztályt ebben a nézetablakban.
- A **szín, vonalvastagság és kitöltés** az osztály azon objektumait módosítja, amelyeknél az érték nincs magán az objektumon beállítva, vagyis azokét, amelyek osztály vagy réteg szerint veszik át. Az objektum saját színét megtartja, ahogy a nézetablak-réteg felülbírálásánál is.

A felülbírálások a képernyőn, a plottokban és a PDF-ekben egyaránt megjelennek, beleértve a PDF-be közzétett rajzlapkészletet is. Együtt működnek a nézetablak befagyasztott rétegeivel és rétegfelülbírálásaival.

A felülbírálások a rajzzal együtt mentődnek DWG- és DXF-fájlban (az osztálylistával együtt, a `CADCRAFT_CLASSES` blokkban), és a fájl CadCraft-ban való megnyitásakor ugyanarra a nézetablakra kerülnek vissza.
