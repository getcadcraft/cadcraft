---
title: Oříznutí a prodloužení
summary: Ořízněte čáry tam, kde je protínají jiné, a prodlužte je až k jiným, a to po jednom kusu nebo mnoha najednou tažením cesty přes ně.
keywords: trimextendmode, tažení okna, trim, extend, tr, ex, rychlé oříznutí, tažení, volná ruka, cesta, plot, křížení, shift, ořezové hrany, hraniční hrany, edgemode, režim, standardní, rychlý, smazat, náhled, stěny, úklid
from: 25fbc5bd
---

## Co se naučíte

Jak fungují {{cmd:TRIM}} a {{cmd:EXTEND}} a rychlé způsoby jejich použití: tažením přejedete mnoho kusů najednou, podržením {{key:Shift}} přepínáte mezi oříznutím a prodloužením a před kliknutím vidíte, co zmizí.

## Oříznutí jednoho kusu

1. Nakreslete dlouhou vodorovnou čáru a dvě krátké čáry, které ji protínají.
2. Napište `TR` a stiskněte {{key:Enter}}. Historie říká `Aktuální nastavení: rychlý režim, hrany: bez prodloužení`.
3. Položte ukazatel na dlouhou čáru mezi dvěma krátkými. Ten kus zešedne a bude přerušovaný: je to ten, co zmizí.
4. Klikněte. Kus zmizí.
5. Stiskněte {{key:Enter}} pro ukončení příkazu.

V rychlém režimu (výchozí) je každý viditelný objekt ořezovou hranou, takže hrany nikdy nevybíráte předem. Klikněte na kus, který chcete odstranit. Objekt, který nic neprotíná, se smaže celý a historie to oznámí.

## Oříznutí mnoha kusů jedním tažením

1. Nakreslete dlouhou vodorovnou čáru a deset krátkých svislých čar, které ji protínají.
2. Napište `TR` a stiskněte {{key:Enter}}.
3. Stiskněte tlačítko myši nad dlouhou čarou, nalevo od první svislé čáry, a táhněte přes všech deset nad dlouhou čarou.

Při tažení se cesta zobrazí jako přerušovaná čára a každý kus, který přejela, zešedne. Pusťte: všech deset horních kusů se ořízne jedním krokem. Napište `U` a stiskněte {{key:Enter}}, a všechny se vrátí najednou.

:::tip
Můžete také klepnout na dvě prázdná místa: čára mezi nimi funguje jako tažená cesta. Napište `F` (Plot) a místo toho klikejte na řadu bodů, pak stiskněte {{key:Enter}}.
:::

:::touch
Stejně přejeďte prstem. Klepnutí na kus ho ořízne.
:::

## Místo toho prodloužení, se Shiftem

1. Nakreslete svislou čáru a pět krátkých vodorovných čar nalevo od ní, které před ní končí.
2. Napište `TR` a stiskněte {{key:Enter}}.
3. Podržte {{key:Shift}}. Položte ukazatel na krátkou čáru: část, o kterou by se prodloužila, zešedne a bude přerušovaná.
4. Stále držte {{key:Shift}} a přetáhněte přes těch pět krátkých čar dolů.

Všech pět nyní dosahuje ke svislé čáře. {{key:Shift}} funguje v {{cmd:EXTEND}} (`EX`) naopak: klik prodlužuje, {{key:Shift}}+klik ořezává. Prodloužení prodlouží konec nejblíž místu, kam kliknete, nebo kde cesta protíná.

## Oříznutí uvnitř okna

1. Napište `TR` a stiskněte {{key:Enter}}.
2. Napište `C` a stiskněte {{key:Enter}}.
3. Klikněte na dva rohy kolem kusů, které chcete odstranit.

Každý kus, který leží alespoň částečně uvnitř okna, se ořízne.

Chcete-li okno získat jen tažením, bez psaní `C`: {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Tažení při oříznutí a prodloužení}} › {{ui:Okno}}. Pak stisknutí na prázdném místě a tažení nakreslí rámeček a každý kus, kterého se dotkne, se ořízne (nebo prodlouží, v {{cmd:EXTEND}} nebo se {{key:Shift}}). {{ui:Dráha}} (výchozí) vrátí volnou cestu. Řádek nastavení na začátku {{cmd:TRIM}} říká, který režim je zapnutý.

## Výběr ořezových hran (standardní režim)

Někdy má řezat jen jedna čára, například líc stěny, který protíná mnoho dalších čar.

1. Napište `TR` a stiskněte {{key:Enter}}.
2. Napište `O` (režim) a stiskněte {{key:Enter}}, pak napište `S` (standardní) a stiskněte {{key:Enter}}.
3. Na výzvě `Vyberte ořezové hrany` klikněte na hrany (nebo přetáhněte okno) a stiskněte {{key:Enter}}. Stisknutí {{key:Enter}} bez výběru udělá z každého objektu hranu.
4. Klikněte nebo přetáhněte přes kusy, které chcete odstranit.

Řežou jen zvolené hrany a objekt, který žádná hrana neprotíná, zůstane netknutý. Režim zůstane až do zavření stránky; napište `O`, pak `Q`, aby se vrátil rychlý režim. {{cmd:TRIMEXTENDMODE}} ho nastaví před začátkem, stejně jako proměnná téhož jména v jiných místech: `0` standardní, `1` rychlý. `T` (ořezové hrany) vybere nové hrany kdykoli; v {{cmd:EXTEND}} je to `B` (hraniční hrany).

## Hrany, které by dosáhly

1. Napište `TR` a stiskněte {{key:Enter}}.
2. Napište `E` (hrana) a stiskněte {{key:Enter}}, pak `E` (prodloužení) a stiskněte {{key:Enter}}.

Teď se řezná čára nebo oblouk, který končí dřív, počítá, jako by pokračoval: krátká čára řeže tam, kde by protnula, kdyby byla delší. Napište `E`, pak `N` (bez prodloužení), abyste se vrátili. Je to totéž jako {{cmd:EDGEMODE}} 1 a 0.

## Smazání bez opuštění

Napište `R` (smazat) a stiskněte {{key:Enter}}, vyberte objekty ke smazání a stiskněte {{key:Enter}}. {{cmd:TRIM}} pokračuje.

## Časté chyby

- **Zmizela celá čára.** V rychlém režimu se objekt, který nic neprotíná, smaže. Napište `U`, aby se vrátila, nebo přepněte na standardní režim (`O`, `S`).
- **"Není co oříznout: žádná vybraná hrana tento objekt neprotíná."** Standardní režim řeže jen na hranách, které jste zvolili. Napište `T`, abyste je vybrali znovu.
- **"V tom směru není žádná hranice."** Prodloužení nenašlo nic před sebou. Klikněte blíž ke konci, který má růst, nebo zapněte `E` (hrana, prodloužení) pro hranice, které končí dřív.
- **Tažení nakreslilo lasso.** Tažení ořezává jen tehdy, když se {{cmd:TRIM}} nebo {{cmd:EXTEND}} ptá na objekt. Když žádný příkaz neběží, tažení vybírá (viz [Výběr lassem](topic:lasso-selection)).
- **Oříznout lze jen úsečky, oblouky, kružnice a mnohočáry.** Nejdřív rozložte blok, abyste mohli oříznout jeho čáry.
