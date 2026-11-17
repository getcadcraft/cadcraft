---
title: Výběr lassem
summary: Stiskněte a táhněte volný obrys kolem objektů a vyberte je jako okno, křížení nebo plot; během tažení přepínejte mezerníkem.
keywords: lasso, lassomode, tažení, volný tvar, vybrat, výběr, okno, křížení, plot, mezerník, mnohoúhelník, dotyk, pero, obdélník
from: 9ec6154d
---

## Co se naučíte

Jak vybrat objekty nakreslením obrysu kolem nich a jak získat zpět obdélník, když ho chcete.

## Nakreslení lassa

1. Nakreslete několik čar a kružnic blízko sebe.
2. Když neběží žádný příkaz, stiskněte tlačítko myši na prázdném místě a táhněte kolem některých z nich, nejdřív **doprava**.
3. Uvolněte.

Vybrány jsou jen objekty, které jsou celé uvnitř obrysu. Obrys se během tažení kreslí plnou čarou: jde o okenní lasso.

## Okno, křížení a plot

Které objekty dostanete, závisí na prvním pohybu tažení a na {{key:Space}}:

| Táhnete | Lasso | Vybere |
|---|---|---|
| Nejdřív doprava | Okno (plný obrys) | Jen objekty **celé uvnitř** |
| Nejdřív doleva | Křížení (čárkovaně, zeleně) | Objekty uvnitř **a** objekty, kterých se obrys dotýká |
| Stisknete {{key:Space}} během tažení | Okno, pak křížení, pak plot | Plot (čárkovaná cesta, neuzavřená): jen objekty, které cesta protíná |

1. Stiskněte na prázdném místě a táhněte kolem některých objektů, nejdřív **doleva**. Vybrány jsou i všechny objekty, kterých se obrys dotkne.
2. Stiskněte {{key:Esc}}.
3. Stiskněte a táhněte znovu; stále držíte tlačítko a jednou stiskněte {{key:Space}}. Obrys se změní na křížení; dalším stisknutím {{key:Space}} přejdete na plot.

{{key:Shift}} při uvolnění naopak objekty z výběru odebere (s volbou „Kliknutí na objekty: Přidat“ v {{ui:Nastavení}}).

## Uvnitř příkazu

Lasso funguje všude tam, kde CadCraft žádá `Vyberte objekty`: nakreslete ho a pak stiskněte {{key:Enter}} pro dokončení. {{cmd:STRETCH}} bere křížení lasso jako své okno, takže můžete v jednom tahu natáhnout část výkresu tvaru L.

{{cmd:TRIM}} a {{cmd:EXTEND}} používají tažení jinak: tam ořezávají (nebo prodlužují) každý kus, který cesta protíná. Viz [Oříznout a prodloužit](topic:trim-and-extend).

## Obdélník

Kliknutí na prázdné místo, pohyb a druhé kliknutí vždy nakreslí obdélníkové okno (zleva doprava) nebo křížení (zprava doleva).

Chcete-li, aby tažení znovu kreslilo obdélník, otevřete {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Tažení při výběru}} a zvolte {{ui:Obdélník}}, nebo napište {{cmd:LASSOMODE}} a potom `0`. Pro lasso napište {{cmd:LASSOMODE}} a potom `1`. Volba se uchová v tomto prohlížeči.

:::touch
Táhněte prstem nebo perem stejným způsobem. Klepnutí dál vybere jeden objekt.
:::

## Časté chyby

- **Nic nebylo vybráno.** Lasso bylo okno a nic nebylo celé uvnitř. Začněte tažení doleva, nebo stiskněte {{key:Space}} během tažení.
- **Tažení posunulo úchyt.** Stisknutí na úchytu vybraného objektu přesune úchyt. Začněte lasso na prázdném místě.
- **Mezerník ukončil příkaz.** {{key:Space}} přepíná lasso jen tehdy, když je tlačítko stisknuté; jinak je to {{key:Enter}}.
