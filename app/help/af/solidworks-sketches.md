---
title: Skuif skisse na en van ander onderdeelmodelleerders
summary: Skryf 'n makro wat jou tekening herbou as een beperkte skets in 'n onderdeelmodelleerder, en maak 'n skets oop wat van een uitgevoer is.
keywords: skets, makro, swb, vba, uitvoer, onderdeelmodelleerder, globale veranderlikes, vergelykings, verhoudings, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks is nie beskikbaar waar CadCraft gebou word nie, dus is geen rigting nog in SolidWorks getoets nie. Wat CadCraft skryf, is slegs op struktuur nagegaan. Kontroleer die resultaat voordat jy daarop staatmaak.
:::

## Stuur 'n tekening as 'n skets

1. Beperk en dimensioneer die tekening (sien [Beperk 'n tekening](topic:constraints)).
2. In die {{ui:Parametries}}-groep, maak {{ui:Meer}} oop en kies {{ui:Makro vir SolidWorks (.swb)}}, of tik {{cmd:SWBOUT}}.

   'n Lêer wat na die tekening vernoem is en op `.swb` eindig, laai af.
3. In SolidWorks, kies **Tools > Macro > Run** en kies daardie lêer.

Die makro maak 'n nuwe onderdeel uit jou standaard onderdeelsjabloon, open 'n skets op die Front Plane en teken die model se lyne, sirkels, boë, punte en polilyne daarin, met:

- jou beperkings as sketsverhoudings,
- jou maatbeperkings as dimensies met dieselfde name (`d1@Sketch1`),
- jou eie parameters as globale veranderlikes,
- elke uitdrukking as 'n vergelyking.

Die onderdeel gebruik die tekening se lengte-eenheid. Teks, blokke, arserings, dimensies en blaaie is nie deel van die skets nie; die geskiedenis lys wat weggelaat is. Uitdrukkings sonder 'n vergelykingsvorm daar (`if`, `min`, `max`, `round`, `%` en 'n paar ander) word as hul huidige waarde geskryf, en die geskiedenis sê watter. Enigiets wat die makro nie kan maak nie, word in 'n logslêer langs die makro geskryf, en 'n boodskap som dit aan die einde op.

## Maak 'n skets uit 'n onderdeel oop

1. In SolidWorks, laat die CadCraft-uitvoermakro loop op die onderdeel (laai dit af in die PartCraft-program: Lêer > Uitvoer > Uitvoermakro om onderdele terug te bring). Dit skryf 'n `.json`-lêer in die `cadcraft-sw-export`-formaat langs die onderdeel.
2. In CadCraft, kies {{ui:Maak oop}} en kies daardie `.json`-lêer.
3. As die onderdeel verskeie sketse het, kies een.

Die skets word die tekening, in millimeter: sy lyne, boë, sirkels en punte, sy verhoudings as beperkings, sy maatbeperkings as maatbeperkings met dieselfde name as voorheen (`D1`, `D2` …), sy globale veranderlikes as parameters, en die vergelykings op sy dimensies as hul uitdrukkings. Die geskiedenis lys wat nie oorgedra is nie, soos verhoudings wat CadCraft nie het nie. Waar die skets in die onderdeel sit, word nie behou nie: dit word plat geteken, soos op sy vlak gesien.
