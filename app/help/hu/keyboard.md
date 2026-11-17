---
title: Billentyűzet és egér
summary: Minden billentyű, egérművelet és parancssori billentyű a CadCraft rajzoló alkalmazásban, ahogy a kód kezeli őket.
keywords: billentyűzet, billentyűparancsok, gyorsbillentyűk, billentyűk, egér, görgő, panorámázás, nagyítás, jobb kattintás, középső gomb, F3, F7, F8, Ctrl, Command billentyű, másolás, kivágás, beillesztés, kettőzés, vágólap, összes kijelölése
from: a2608a29
---

A gyorsbillentyűk az Ön számítógépéhez igazítva jelennek meg. Macen minden {{key:Mod}} gyorsbillentyű a Command billentyűt használja, a Control billentyű is működik. A billentyűk írásmódja és a Mac F-billentyűinek használata a [Billentyűk, egerek és érintőpadok](common:keys) oldalon olvasható.

## Parancsok gépelése

| Billentyű | Mit tesz |
|---|---|
| Bármely betű, szám vagy jel | A parancssorba kerül, bárhol is van a mutató, hacsak egy panel mezőjében nincs kurzor |
| {{key:Enter}} | Elküldi a beírtakat. Üres parancssornál: megismétli az utolsó parancsot, befejez egy parancsot, lezárja a kijelölést, vagy elfogadja az alapértelmezést a `<…>`-ben |
| {{key:Space}} | Ugyanaz, mint a(z) {{key:Enter}}, kivéve ha a CadCraft szöveget kér (szöveg, blokknevek, méretszöveg); ilyenkor szóközt ír |
| {{key:Esc}} | Megszakítja a parancsot. Parancs nélkül: megszakítja a fogópont mozgatását vagy a kijelölő téglalapot, majd törli a kijelölést |
| {{key:Tab}} | Elfogadja a parancssor jobb oldalán megjelenő javasolt parancsot. Ha nincs beírva semmi, és a mutató átfedő objektumokon van: a következőt emeli ki (kattintással választható ki) |
| {{key:Up}} {{key:Down}} | Végiglépked a korábban beírt sorokon (az utolsó 100) |

## Rajzolás és szerkesztés

| Billentyű | Mit tesz |
|---|---|
| {{key:Mod+Z}} | Visszavonja az utolsó parancsot |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Ismétlés |
| {{key:Mod+A}} | Kijelöli a megnyitott lapon az összes szerkeszthető objektumot ({{cmd:SELECTALL}}). Ha szöveget írt a parancssorba, azt jelöli ki |
| {{key:Delete}} | Törli a kijelölt objektumokat ({{cmd:ERASE}}), hacsak nem írt be valamit a parancssorba |
| {{key:Backspace}} | Törli a kijelölt objektumokat, ha a parancssornak nincs kurzora; a parancssorban a beírt szöveget törli |
| {{key:Esc}} | Parancs nélkül: törli a kijelölést ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Másolatot ment a rajz formátumában (DWG vagy DXF) |
| {{key:Mod+Shift+S}} | Mentés másként: válasszon DWG vagy DXF formátumot, majd mentsen másolatot |
| {{key:Mod+O}} | DWG vagy DXF megnyitása |
| {{key:Mod+P}} | Plottolás PDF-be |

A visszavonás, az ismétlés, az összes kijelölése és a plottolás nem működik, amíg parancs fut: nyomja meg előbb a(z) {{key:Esc}} billentyűt.

## Másolás, kivágás és beillesztés

| Billentyű | Mit tesz |
|---|---|
| {{key:Mod+C}} | Másolja a kijelölést a vágólapra ({{cmd:COPYCLIP}}). Nincs kijelölés: a CadCraft objektumokat kér |
| {{key:Mod+X}} | Kivágás: másolja a kijelölést, majd törli ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Beillesztés: a másolat a mutatót követi; kattintson, vagy írjon be egy pontot az elhelyezéshez ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Beillesztés helyben: abba a koordinátába, ahonnan másolták ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Kettőzés: a kijelölés másolata a mutatóval mozog; kattintson az elhelyezéshez, a(z) {{key:Esc}} nem hagy semmit ({{cmd:DUPLICATE}}) |

Ugyanezek a műveletek megvannak az eszköztár {{ui:Szerkesztés}} csoportjában ({{ui:Másolás}}, {{ui:Beillesztés}}) és a {{ui:Továbbiak}} menüben. Ha másik parancs fut, fejezze be, vagy nyomja meg előbb a(z) {{key:Esc}} billentyűt; a {{key:Mod+V}} vagy {{key:Mod+D}} újranyomása, miközben egy másolat a mutatót követi, újrakezdi a műveletet. Ha a parancssorba írt valamit, vagy egy parancs szöveget kér, ezek a billentyűk azt a szöveget másolják, vágják és illesztik be. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## Kapcsolók

| Billentyű | Kapcsoló | Állapotsor gomb |
|---|---|---|
| {{key:F3}} | Objektumfogás be- vagy kikapcsolása | {{ui:Fogás}} |
| {{key:F7}} | Rács be- vagy kikapcsolása | {{ui:Rács}} |
| {{key:F8}} | Ortho be- vagy kikapcsolása | {{ui:Ortho}} |
| {{key:F10}} | Polárkövetés be- vagy kikapcsolása | {{ui:Polár}} |
| {{key:F11}} | Objektumfogás-követés be- vagy kikapcsolása | {{ui:Követés}} |
| {{key:F12}} | Dinamikus bevitel be- vagy kikapcsolása | {{ui:Dyn}} |

:::mac
Macen az F3, F7 és F8 általában a Mission Control és a médiabillentyűk. Tartsa nyomva velük a **fn** billentyűt, vagy kapcsolja be a standard funkcióbillentyűket a Rendszerbeállításokban, ahogy a [Billentyűk, egerek és érintőpadok](common:keys) oldalon olvasható. Az állapotsor gombjai mindig működnek.
:::

:::firefox
A Firefoxban az F7 a szövegkurzoros böngészést is felajánlhatja. Válassza a **Nem** lehetőséget, és ha továbbra is kérdez, használja a(z) {{ui:Rács}} gombot.
:::

## Súgó

| Billentyű | Mit tesz |
|---|---|
| {{key:F1}} | Megnyitja vagy bezárja ezt a súgót a rajz mellett. Parancs futása közben is működik, a parancssorhoz nem jut el. |
| {{key:Esc}} | A súgópanelben lévő kurzorral: törli a keresést, vagy bezárja a panelt |

A felső sávban lévő {{ui:Súgó}} gomb ugyanazt teszi, mint az {{key:F1}}. Amíg a súgó keresőmezőjébe ír, semmi nem jut a parancssorba. A billentyűk visszaadásához kattintson a rajzra; a panel mellette nyitva marad.

:::mac
Macen tartsa nyomva a **fn** billentyűt és nyomja meg az F1-et, vagy kattintson a {{ui:Súgó}} gombra.
:::

## Képernyő

| Billentyű | Mit tesz |
|---|---|
| {{key:Ctrl+Shift+F}} | Körbejár: normál, teljes képernyő, és teljes képernyő a sávok elrejtésével. Ez minden számítógépen a Control billentyűt használja, a Macet is beleértve. |
| {{key:Left}} {{key:Right}} | A rajz alatti lap fókuszában: az előző vagy a következő lap |

Teljes képernyőn a böngésző az első {{key:Esc}} billentyűvel léphet ki a teljes képernyőből. A parancs megszakításához nyomja meg újra a(z) {{key:Esc}} billentyűt.

## Párbeszédpanelek

| Billentyű | Mit tesz |
|---|---|
| {{key:Esc}} | Bezárja a párbeszédpanelt ({{ui:Plottolás PDF-be}}, vagy egy kérdést, például a „nem mentett módosítások”-at, ahol ez a {{ui:Mégse}} gombot jelenti) |
| {{key:Tab}} | Mozog a párbeszédpanel beállításai és gombjai között |

Párbeszédpanel nyitott állapotában a rajz billentyűi ki vannak kapcsolva.

## Panelmezők

A jobb vagy bal panel egy mezőjében:

| Billentyű | Mit tesz |
|---|---|
| {{key:Enter}} | Alkalmazza az értéket, és kilép a mezőből |
| {{key:Esc}} | Visszaállítja a régi értéket, és kilép a mezőből |
| {{key:Tab}} | Alkalmazza, és a következő mezőre lép |

Amíg a mezőben van a kurzor, a betűk ide írnak, nem a parancssorba.

## Egér

| Művelet | Mit tesz |
|---|---|
| Kattintás | Pontot választ, ha a parancs pontot kér; objektumot választ, ha objektumokat kér; egyébként objektumot vagy fogópontot jelöl ki |
| Shift+kattintás | Eltávolít egy kijelölt objektumot a kijelölésből (ha az {{ui:Objektumokra kattintás}} beállítás a [Beállításokban](topic:settings) {{ui:Felváltja a kijelölést}} értéken áll, akkor hozzáadja). Pont megadásakor: ezúttal figyelmen kívül hagyja az objektumfogásokat |
| Kattintás üres területen, majd újabb kattintás | Kijelölő téglalap: balról jobbra ablak, jobbról balra keresztező |
| Húzás üres területen | Lasszó: jobbra húzva ablak, balra húzva keresztező; a(z) {{key:Space}} húzás közben körbejárja az ablakot, a keresztezőt és a kerítést; a(z) {{key:Esc}} elengedi (LASSOMODE 0, vagy a Beállítások, újra téglalap lesz) |
| Húzás a TRIM vagy EXTEND alatt, részeken át | Minden átvágott (vagy meghosszabbított) darabot levág; a másik módhoz tartsa nyomva a {{key:Shift}} billentyűt |
| Fogópont húzása | Mozgatja a fogópontot (vagy kattintson a fogópontra, majd arra a helyre, ahová kerül) |
| Szövegre duplán kattintás | Kijelöli, és a kurzort a jobb oldali panel {{ui:Szöveg}} mezőjébe helyezi |
| Jobb kattintás | Enter. Fogópont-mozgatás vagy kijelölő téglalap közben: megszakítja |
| Húzás a jobb gombbal | Panorámázás |
| Görgő | Nagyít és kicsinyít a kereszthez képest |
| Húzás a görgővel (középső gomb) | Panorámázás |
| Dupla kattintás a görgőn | Az egész rajzra nagyít (kiterjedés) |
| DWG vagy DXF húzása a rajzra | Megnyitja |

Érintőpadon vagy érintőképernyőn lásd: [Egér, érintőpad és érintés](topic:mouse-trackpad-touch).

## A böngésző által megtartott billentyűk

A {{key:Mod+N}}, {{key:Mod+W}} és {{key:Mod+T}} mindig a böngészőé. A CadCraft nem használja őket: új rajzhoz használja a {{ui:Új}} gombot, vagy írja be a `NEW` parancsot. A CadCraft vágólapja saját: a {{key:Mod+C}} és {{key:Mod+V}} objektumokat másol a CadCraft-rajzok és -lapok között, nem más programok felé vagy onnan.

:::mac
Ha a {{key:Mod+Y}} a böngésző előzményeit nyitja meg az ismétlés helyett, használja a {{key:Mod+Shift+Z}} billentyűkombinációt vagy a(z) {{ui:Ismétlés}} gombot.
:::

## A Mozgatás helye

A Mozgatás a `MOVE` parancs (a {{key:M}} billentyű): válassza ki az objektumokat, majd adjon meg egy alappontot, és egy második pontot vagy egy beírt távolságot. Az `ALIGN` és a `DISTRIBUTE` is itt van. A BimCraft ugyanazokat a neveket használja ugyanazokra a feladatokra az épületelemeken, de ott a {{key:M}} a Mérés, a Mozgatás pedig a {{key:Shift+M}}.
