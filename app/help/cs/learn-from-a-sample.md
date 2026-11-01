---
title: Učení z ukázkového výkresu
summary: Otevřete ukázkový dům nebo ukázku skutečného provedení z CadCraftu a projděte jejich listy, razítko, kóty a vrstvy.
keywords: ukázka, ukázky, ukázkový výkres, učit se, návod, postup, razítko, listy, skutečné provedení, architektonická sada, otevřít ukázku
from: aa1f960a
---

## Co se naučíte

Jak je postavena hotová sada: prostor modelu, listy s výřezy v měřítku, razítko s atributy, kóty ve stopách a palcích i v milimetrech, vrstvy. Ukázky jsou vlastní dílo CadCraftu a lze je libovolně používat (CC0).

## Otevření ukázky

1. V levém panelu klikněte pod {{ui:Výkres}} na {{ui:Otevřít ukázku}} (nebo napište {{cmd:SAMPLES}}; ve stylech s pásem karet je v nabídce {{ui:Soubor}}).
2. Klikněte na {{ui:Otevřít}} vedle {{ui:Ukázkový dům}}. Otevře se ve vlastní kartě, takže Vaše práce zůstane otevřená.

## Prohlídka modelu

1. Klikněte na {{ui:Rozsah}} (nebo napište `ZOOM`, potom `E`): půdorys, čelní pohled, řez a detail stěny.
2. Ve {{ui:Vrstvy}} klikněte na oko vedle `A-ANNO-DIMS` a kóty skryjete, dalším kliknutím je zase zobrazíte.
3. Klikněte na dveře: Vlastnosti zobrazí odkaz na blok `DOOR-32`. Dveře a okna jsou bloky, umístěné natočené a zrcadlené.

## Listy

1. Klikněte pod výkresem na {{ui:A-101 FLOOR PLAN}}: list ARCH D s jedním výřezem v měřítku 1/4" = 1'-0".
2. Dvojitým kliknutím uvnitř výřezu pracujete skrz něj na modelu; dvojitým kliknutím vně se vrátíte.
3. {{ui:A-501 DETAILS}} ukazuje detail stěny v měřítku 1 1/2" = 1'-0": stejný model, jiné měřítko.

## Razítko

1. Na libovolném listu dvakrát klikněte na razítko: {{ui:Upravit atributy}} uvádí PROJECT, TITLE, SCALE, DATE, DRAWN a SHEET.
2. Změňte DRAWN na své iniciály a klikněte na {{ui:OK}}.
3. Chcete-li změnit samotné razítko na všech listech, vyberte je a zvolte {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit na místě}}. Viz [Atributy](topic:attributes).

## Skutečné provedení

Otevřete {{ui:Ukázka skutečného provedení}} stejným způsobem. Šedé tečky na `SCAN-SLICE` jsou řez skenem; stěny na `AB-WALL` byly obkresleny přes ně. Východní stěna je o 35 mm mimo pravý úhel: kóty to říkají dvakrát, v milimetrech (`AB-DIMS-MM`) a ve stopách a palcích (`AB-DIMS-FTIN`, stejné délky přes měřítko měření). Červené oblaky na `REV-1` označují, co zaměření zjistilo.

## Dál

- [Změna velikosti textu kóty](topic:change-dimension-text-size)
- [Vykreslení do PDF](topic:plot-pdf): vykreslete {{ui:A-101 FLOOR PLAN}}.
