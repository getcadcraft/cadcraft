---
title: Vázlatrajzolás tollal, pontos geometriával
summary: Rajzoljon szabadkézzel tollal, egérrel vagy ujjal: minden vonásból tiszta vonal, kör, ív, téglalap vagy polivonal lesz, amint felemeli a tollat. A vonás a már meglévő rajzhoz illeszkedik, mérete pedig gépelhetően készen áll.
keywords: vázlat, toll, érintőtoll, szabadkézi, ujj, tisztítás, pontos, snap, SKETCHLIVE, SKETCHFIX, méret, felülírás
from: cd87eb75
---

Indítsa el a {{cmd:SKETCHLIVE}} parancsot (vagy válassza a **Rajzolás › Továbbiak › Vázlatrajzolás tollal** menüpontot), és rajzoljon egy vonást a toll nyomva tartásával és húzásával. Amikor felemeli a tollat, a CadCraft felismeri, mire gondolt, és ezt teszi a rajzba:

| A vonás | Az eredmény |
|---|---|
| Majdnem egyenes | Vonal. A majdnem vízszintes vagy függőleges vonal pontosan vízszintes vagy függőleges lesz. |
| Zárt és kerek | Kör |
| Kerek alakzat része | Ív |
| Zárt, négy derékszögű sarokkal | Téglalap |
| Minden más | Derékszögű szakaszokból álló polivonal |

A vonás végei a már meglévő legközelebbi végpontra húzódnak, így a megrajzolt fal a mellette lévő falhoz csatlakozik.

## Méret felülírása

Minden vonás után a parancssor alapértelmezettként mutatja annak méretét (vonalnál a **hosszát**, körnél vagy ívnél a **sugarát**, téglalapnál a **szélességét**). Nyomja meg az {{key:Enter}} billentyűt a megtartásához, vagy gépeljen be egy számot, illetve egy hosszúságot, például `12'6"`-ot, a cseréjéhez. A vonal megtartja az első végét, a kör a középpontját, a téglalap az első sarkát.

Üres parancssornál nyomja meg az {{key:Enter}} billentyűt a befejezéshez, vagy gépelje be a `U` betűt (Visszavonás) az utolsó vonás visszavonásához. A teljes munkamenet egy visszavonási lépés.

## Több vonás egyidejű tisztítása

A {{cmd:SKETCHFIX}} vonásokat gyűjt, és az {{key:Enter}} megnyomásakor mindet pontossá teszi, ami a gyorsan felrajzolt, durva elrendezéshez illik.

:::note
Minden a saját számítógépén, szabályok alapján készül el: nincs modell, és semmi nem kerül elküldésre sehova.
:::
