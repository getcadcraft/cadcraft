---
title: Kreslení perem a získání přesné geometrie
summary: Kreslete volnou rukou perem, myší nebo prstem a každý tah se při zvednutí pera změní v čistou úsečku, kružnici, oblouk, obdélník nebo mnohočáru, přichycenou k tomu, co je už nakresleno, s velikostí připravenou k přepsání.
keywords: skica, pero, stylus, volná ruka, prst, vyčistit, přesný, přichytit, SKETCHLIVE, SKETCHFIX, velikost, přepsat, tlak, tloušťka čáry, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Spusťte {{cmd:SKETCHLIVE}} (nebo zvolte **Kreslení › Více › Kreslit perem**) a nakreslete tah stisknutím a tažením. Když pero zvednete, CadCraft přečte, co jste měli na mysli, a vloží to do výkresu:

| Váš tah | Co dostanete |
|---|---|
| Téměř rovný | Úsečku. Téměř vodorovná nebo svislá čára se udělá přesně vodorovnou nebo svislou. |
| Uzavřený a kulatý | Kružnici |
| Část kulatého tvaru | Oblouk |
| Uzavřený se čtyřmi pravými rohy | Obdélník |
| Cokoli jiného | Mnohočáru s hranatými stranami |

Konce tahu se přitáhnou k nejbližšímu konci toho, co je už nakresleno, takže nakreslená stěna se napojí na stěnu vedle ní.

## Úprava velikosti psaním

Po každém tahu příkazový řádek ukáže jeho velikost (délku úsečky, poloměr kružnice nebo oblouku, šířku obdélníku) jako výchozí hodnotu. Stiskněte {{key:Enter}}, chcete-li ji ponechat, nebo napište číslo či délku, například `12'6"`, chcete-li ji nahradit. Úsečka si ponechá svůj první konec, kružnice svůj střed a obdélník svůj první roh.

Stiskněte {{key:Enter}} u prázdné výzvy, chcete-li skončit, nebo napište `U`, chcete-li vzít poslední tah zpět. Celé sezení je jeden krok zpět.

## Vyčištění několika tahů najednou

{{cmd:SKETCHFIX}} sbírá tahy a udělá je všechny přesné, až stisknete {{key:Enter}}; hodí se to pro hrubý návrh nakreslený rychle.

:::note
Vše se počítá na vašem počítači podle pravidel, bez modelu a bez odesílání kamkoli.
:::

## Tlak nastavuje tloušťku čáry

Tam, kde je pero zapnuto pro aplikace (Nastavení › Globální › Vstupní zařízení › Pero), tah nakreslený perem nese každý bod, který pero podalo, a jeho tlak. Lehký tah udělá tenký objekt a pevný tlustý: průměrný tlak tahu vybere 0,18, 0,25, 0,35 nebo 0,50 mm, a příkazový řádek řekne, který. Tahy nakreslené myší nebo prstem berou aktuální tloušťku čáry jako dřív. {{cmd:PENPRESSURE}} to vypne (nebo znovu zapne); volba se uchovává v tomto prohlížeči.
