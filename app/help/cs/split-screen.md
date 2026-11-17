---
title: Rozdělení obrazovky
summary: Zobrazte výkres ve dvou, třech nebo čtyřech oknech, každém s vlastním přiblížením, položte list vedle modelu a otevřete více výkresů vedle sebe.
keywords: rozdělit, rozdělení obrazovky, okna, VPORTS, výřezy, dlaždice, vedle sebe, pod sebou, dva výkresy, karty, karty dokumentů, porovnat, dělicí čára, model a list, více výkresů, otevřené výkresy
from: ee2f034b
---

## Co se naučíte

Jak si prohlížet jeden výkres v několika oknech najednou, každé s vlastním přiblížením, a jak otevřít více výkresů a zobrazit je vedle sebe.

## Rozdělení jednoho výkresu na okna

1. Otevřete výkres, nebo nakreslete několik úseček a kružnic.
2. Otevřete {{ui:Pohled}} › {{ui:Více}} a zvolte {{ui:Rozdělit vedle sebe}} (nebo napište {{cmd:VPORTS}}, pak `2` a {{key:Enter}}).

Oblast výkresu se rozdělí na dvě okna, obě zobrazují stejný pohled. Aktivní okno má modrý rámeček a dostane křížek.

3. Klikněte do druhého okna. Stane se aktivním. (Ten první klik jen přepne okna; klikněte znovu pro výběr.)
4. Přibližujte kolečkem myši. Přiblíží se jen to okno.
5. Přetažením čáry mezi okny ji zvětšíte. Když je dělítko zaměřené, {{key:Home}} jej vrátí doprostřed.

{{cmd:VPORTS}} přijímá také `3` (dvě okna na jedné straně a velké na druhé: `L` nebo `R`), `4` a `SI` pro návrat k jednomu oknu. Pohled aktivního okna pak vyplní celou oblast. Na listu přidá {{cmd:VPORTS}} místo toho výřez na list (jako v AutoCADu); tam napište {{cmd:SPLIT}}, nebo použijte nabídku Pohled.

## Kreslení z jednoho okna do druhého

1. Rozdělte vedle sebe a přibližte každé okno na jiný roh výkresu.
2. Napište `L` a stiskněte {{key:Enter}}, pak klikněte na první bod v levém okně.
3. Jedním kliknutím v pravém okně jej aktivujte, pak klikněte na druhý bod tam.

Čára vede mezi oběma místy. Příkaz pokračuje, i když měníte okna, a gumová čára se ukazuje ve všech oknech.

## Model vedle listu

1. Rozdělte vedle sebe.
2. Klikněte do pravého okna a pak na kartu listu pod výkresem.

Pravé okno ukazuje list, levé stále model. Každé okno si drží svůj prostor, takže můžete kreslit na model a sledovat, jak ho výřez listu následuje.

## Několik výkresů v jednom okně

1. Otevřete výkres. Pak otevřete další (nebo stiskněte {{ui:Nová}}).

Každý výkres se otevře ve vlastní kartě nad oblastí výkresu. Kliknutím na kartu přepnete; řádek příkazů, panely i zpět se řídí výkresem, na který přepnete. {{key:Mod+C}} v jednom výkresu a {{key:Mod+V}} v jiném zkopírují objekty mezi nimi.

2. Klikněte na {{ui:Uspořádat otevřené výkresy vedle sebe}} (ikona rozdělení na konci karet), nebo na ikonu pod sebou vedle ní.

Každé okno teď ukazuje jeden z otevřených výkresů, až čtyři. Kliknutím na okno pracujete v tomto výkresu.

3. Kliknutím na {{ui:×}} na kartě výkres zavřete. Pokud má neuložené změny, CadCraft se nejdříve zeptá.

:::tip
Otevření výkresu, když okno obsahuje jen nový nedotčený výkres, použije tuto kartu místo přidání nové.
:::

## Posun a přiblížení společně

Chcete-li porovnat dvě revize, uspořádejte je vedle sebe a klikněte na {{ui:Propojit pohledy oken}} (ikona odkazu na konci karet), nebo to zvolte v {{ui:Pohled}} › {{ui:Více}}, případně napište {{cmd:LINKVIEWS}} a `ON`. Posun nebo přiblížení v jednom okně pak přesune všechna okna zobrazující model (nebo všechna okna zobrazující list) na stejné místo, takže obě výkresy zůstanou zarovnané. {{cmd:LINKVIEWS}} `OFF` nechá každé okno opět se hýbat samostatně.

## Časté chyby

- **Váš klik nic neudělal.** Aktivoval to okno. Klikněte znovu pro výběr nebo kreslení.
- **Kolečko přiblížilo špatné okno.** Kolečko přibližuje okno pod kurzorem a aktivuje je.
- **Okna se vrátila na jedno.** Otevření výkresu ukáže, jak byl uložen; výkres uložený bez oken se otevře v jednom.
- **Při opuštění stránky se objeví varování o neuložených změnách, které nevidíte.** Jiná karta drží výkres se změnami. Přepněte na ni a uložte, nebo odejděte bez uložení.
