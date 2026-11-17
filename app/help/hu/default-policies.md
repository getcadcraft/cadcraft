---
title: "Alapértelmezett szabályzatok: meghatározza, mivel induljon egy új rajz"
summary: Egyszer adja meg, milyen egységgel, hosszformátummal, pontossággal, szövegmagassággal és lapmérettel induljon egy új rajz, metrikus és birodalmi munkához egyaránt, és ossza meg a szabályzatokat az irodában egy kis fájlban.
keywords: alapértelmezés, alapértelmezések, alapértelmezett szabályzatok, szabályzat, irodai szabvány, irodai alapértelmezések, sablon, új rajz, egységek, insunits, hosszformátum, építészeti, pontosság, luprec, szövegmagasság, lapméret, a1, megosztás, export, import, json
from: 7b80fd13
---

## Amit csinálni fog

Adja meg a CadCraftnak, mivel induljon egy új rajz, hogy az iroda egyetlen munkatársának se kelljen minden alkalommal futtatnia a UNITS parancsot és ugyanazokat a dolgokat átállítania. Ez egy bővítmény: addig kikapcsolva van, amíg be nem kapcsolja, és ha egy szabályzatot nem állít be, a CadCraft saját alapértelmezése marad érintetlen.

:::note
Ezek az alapértelmezések az **új** rajzokra és az **új** lapokra vonatkoznak. A már elkezdett rajz nem változik, és a megnyitott rajz sem.
:::

## Lépések

1. Nyissa meg a Beállításokat, lépjen a {{ui:Bővítmények}} lapra, és kapcsolja be az {{ui:Alapértelmezett szabályzatok}} elemet.
2. A Beállításokban nyissa meg a **CadCraft** lapot, és a bal oldali listában válassza az {{ui:Alapértelmezett szabályzatok}} elemet.
3. Állítsa be a kívánt szabályzatokat. Mindegyik a **CadCraft saját** értékén indul. Ahol van **Metrikus** és **Birodalmi** mező, minden rajztípusnak külön értéke van; csak a szükségeseket töltse ki.
4. Nincs Mentés gomb: minden módosítás azonnal mentődik.
5. Kezdjen egy új rajzot. Az a beállított egységgel, hosszformátummal, pontossággal és szövegmagassággal indul, és az első új lapja a kiválasztott papírra kerül.

## A szabályzatok

- **Egy új rajz egységei**: nincs, milliméter, centiméter, méter, hüvelyk vagy láb.
- **Hosszformátum** és **Hosszpontosság**: amit a UNITS parancs beállít egy új rajzhoz.
- **Az új szöveg magassága**, rajzegységekben.
- **Egy új lap papírja**: amelyet az Új lap használ.
- **Megjegyzésméretek papíron** (Beállítások › Általános › Alapértelmezett szabályzatok): az iroda magasságai milliméterben, nyomtatva. A CadCraft a megjegyzésekhez és feliratokhoz használja: az {{cmd:ANNOSCALE}} beállítja az új szöveg magasságát erre a magasságra a feliratozási léptéken. Lásd: [Egységek, papírok és léptékek](topic:units-papers-scales#annotate-by-scale).

Hüvelykben vagy lábban megadott rajz a birodalmi értékeket használja; minden más rajz a metrikusakat. Egységek nélküli rajz a Beállítások › Általános › Alapértelmezett szabályzatok között beállított egységrendszert használja, vagy metrikust, ha nincs beállítva.

## Megosztás az irodában

1. A Beállításokban nyissa meg az **Általános** lapot, és válassza az {{ui:Alapértelmezett szabályzatok}} elemet.
2. Kattintson a {{ui:Mentés fájlba}} gombra. Kap egy kis fájlt, amely `.ccdefaults.json` kiterjesztésű.
3. Egy másik számítógépen kapcsolja be a bővítményt, nyissa meg ugyanezt a helyet, és kattintson a {{ui:Betöltés fájlból}} gombra. A fájl szabályzatai felülírják az adott számítógép szabályzatait.

Egy fájl az összes CadCraft-alkalmazás szabályzatát tartalmazza, így ugyanaz a fájl a BimCraftban is működik.

## Jó tudni

- A lap léptékére nincs szabályzat: egy új lap nézete a rajzhoz igazodik, a léptéket pedig a lapon állítja be.
- A méretezési stílusra nincs szabályzat: egy új rajzban nincsenek elnevezett méretezési stílusok. Méretek beállításához használja a DIMSTYLE parancsot, vagy kezdjen olyan rajzzal, amelyben már megvannak az Ön stílusai.
- A fájl sima, nyitható JSON. Ha a fájl olyan szabályzatot nevez meg, amelyet ez a verzió nem ismer, azt kihagyja, és az üzenetben megnevezi; a többi betöltődik.
- A szabályzatok ebben a böngészőben tárolódnak, nem a rajzban. Ha kikapcsolja a bővítményt, minden újra a CadCraft saját értéke lesz.
