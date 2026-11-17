---
title: Skicujte perem a získejte přesnou geometrii
summary: Kreslete volnou rukou perem, myší nebo prstem a každý tah se po zvednutí pera změní v čistou úsečku, kružnici, oblouk, obdélník nebo mnohočáru, přichycenou k tomu, co je už nakresleno, s velikostí, kterou můžete přepsat.
keywords: skica, pero, stylus, volná ruka, prst, vyčistit, přesný, přichycení, SKETCHLIVE, SKETCHFIX, velikost, přepsat
from: cd87eb75
---

Spusťte {{cmd:SKETCHLIVE}} (nebo zvolte **Kreslení › Více › Skicovat perem**) a nakreslete tah stisknutím a tažením. Když pero zvednete, CadCraft pochopí, co jste zamýšleli, a vloží to do výkresu:

| Váš tah | Co dostanete |
|---|---|
| Téměř přímka | Úsečka. Téměř vodorovná nebo svislá čára se zarovná přesně do vodorovné nebo svislé polohy. |
| Uzavřený a kulatý | Kružnice |
| Část kruhového tvaru | Oblouk |
| Uzavřený se čtyřmi pravoúhlými rohy | Obdélník |
| Cokoli jiného | Mnohočára s pravoúhlými stranami |

Konce tahu se přitáhnou k nejbližšímu konci toho, co je už nakresleno, takže nakreslená stěna naváže na stěnu vedle ní.

## Přepište velikost

Po každém tahu řádek příkazů ukáže jeho velikost jako výchozí hodnotu (délku úsečky, poloměr kružnice nebo oblouku, šířku obdélníku). Stiskněte {{key:Enter}} pro její ponechání, nebo napište číslo či délku, například `12'6"`, a nahraďte ji. Úsečka si zachová svůj první konec, kružnice svůj střed, obdélník svůj první roh.

Na prázdném řádku stiskněte {{key:Enter}} pro dokončení, nebo napište `U` pro vrácení posledního tahu. Celé sezení je jeden krok zpět.

## Vyčištění několika tahů najednou

{{cmd:SKETCHFIX}} sbírá tahy a všechny je zpřesní po stisknutí {{key:Enter}}, což se hodí pro hrubý náčrt nakreslený rychle.

:::note
Vše se počítá na vašem počítači podle pravidel, bez modelu a bez odesílání kamkoli.
:::
