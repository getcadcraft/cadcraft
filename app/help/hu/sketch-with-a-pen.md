---
title: Rajzolás tollal és pontos geometria
summary: Szabadkézzel rajzoljon tollal, egérrel vagy ujjal: minden vonásból tiszta vonal, kör, ív, téglalap vagy polivonal lesz, amint felemeli a tollat, a meglévő rajzhoz igazítva, méretét pedig átírhatja.
keywords: vázlat, toll, érintőceruza, szabadkézi, ujj, tisztítás, pontos, fogás, SKETCHLIVE, SKETCHFIX, méret, átírás, nyomás, vonalvastagság, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Indítsa el a {{cmd:SKETCHLIVE}} parancsot (vagy válassza a **Rajzolás › Továbbiak › Rajzolás tollal** menüpontot), és húzzon egy vonást a nyomva tartott és mozgatott mutatóval. Amikor felemeli a tollat, a CadCraft értelmezi a szándékát, és a rajzba teszi:

| Az Ön vonása | Ezt kapja |
|---|---|
| Közel egyenes | Vonal. A közel vízszintes vagy függőleges vonal pontosan vízszintes vagy függőleges lesz. |
| Zárt és kerek | Kör |
| Kerek alakzat része | Ív |
| Négy derékszögű sarkú zárt alakzat | Téglalap |
| Minden más | Derékszögű oldalú polivonal |

A vonás végeit a már meglévő rajz legközelebbi végéhez húzza, így egy vázlatos fal csatlakozik a mellette lévő falhoz.

## Méret átírása

Minden vonás után a parancssor a vonás méretét mutatja alapértelmezettként (egy vonal **hosszát**, egy kör vagy ív **sugarát**, egy téglalap **szélességét**). Nyomja meg az {{key:Enter}} billentyűt a megtartásához, vagy írjon be egy számot vagy hosszt, például `12'6"`, hogy lecserélje. A vonal az első végpontját, a kör a középpontját, a téglalap az első sarkát megtartja.

Üres kérdésnél nyomja meg az {{key:Enter}} billentyűt a befejezéshez, vagy írja be a `U` betűt az utolsó vonás visszavonásához. Az egész munkamenet egy visszavonási lépés.

## Több vonás egyszerre tisztítása

A {{cmd:SKETCHFIX}} vonásokat gyűjt, és az {{key:Enter}} megnyomásakor mindet pontossá teszi, ez gyorsan rajzolt, durva elrendezéshez jó.

:::note
Minden szabályok alapján számítódik ki a saját számítógépén, modell nélkül, és semmi nem küldődik sehová.
:::

## A nyomás állítja a vonalvastagságot

Ahol a tollat bekapcsolták az alkalmazásokhoz (Beállítások › Globális › Beviteli eszközök › Toll), a tollal húzott vonás minden pontot és a nyomását is megőrzi. A könnyű vonás vékony, az erős vastag objektumot készít: a vonás átlagos nyomása 0,18, 0,25, 0,35 vagy 0,50 mm-t választ, és a parancssor megmondja, melyiket. Az egérrel vagy ujjal húzott vonások a szokásos aktuális vonalvastagságot kapják. A {{cmd:PENPRESSURE}} ezt kikapcsolja (vagy újra bekapcsolja); a választás ebben a böngészőben marad meg.
