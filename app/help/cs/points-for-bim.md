---
title: Body pro programy BIM
summary: Exportujte body a vkládací body bloků s popisem do souboru CSV nebo TXT, který importují programy BIM a geodetický software.
keywords: exportpoints, export bodů, body, csv, txt, pnezd, penzd, xyz, geodetické body, souřadnice, bim, vytyčení, soubor bodů, souřadnice Y, souřadnice X, výška
from: d80e2d53
---

## Co vytvoříte

Soubor bodů: jeden řádek na bod, s jeho číslem, souřadnicí Y, souřadnicí X, výškou a popisem. Programy BIM (mezi nimi Revit a Archicad) a geodetický software jej mohou importovat, aby umístily geodetické body, značky stavby nebo zařízení.

## Exportovat body

1. Vyberte body a bloky, jejichž vkládací body chcete, nebo nevybírejte nic, a vezmou se všechny body.
2. Napište {{cmd:EXPORTPOINTS}} (nebo `EXPPTS`, nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Exportovat body}}) a stiskněte {{key:Enter}} (u výzvy `Vyberte body a bloky` stiskněte {{key:Enter}} znovu, když nic nebylo vybráno).
3. Vybrali-li jste bloky s atributy, CadCraft vypíše jejich značky: napište tu, jejíž hodnota je popis (například `ITEM`), nebo cokoli jiného, abyste použili název každého bloku.
4. Zvolte sloupce: `PNEZD` (bod, Y, X, výška, popis: obvyklé), `PENZD` (X před Y), nebo `XYZ` (jen souřadnice).
5. Zvolte jednotky: `D` jak je nakresleno, `M` metry, nebo `F` stopy (jen když jsou jednotky výkresu nastaveny: Vlastnosti › {{ui:Jednotky}} při nevybrání čehokoli).
6. Je-li nastaven UCS, zvolte `W` světové, nebo `U` souřadnice UCS (viz [UCS a otočený pohled](topic:ucs-and-turned-view)).
7. Zvolte `C` pro `.csv` oddělené čárkami, nebo `T` pro `.txt` oddělené tabulátorem, a první číslo bodu.

Soubor se stáhne jako `<drawing>-points.csv` (nebo `.txt`) a historie uvede, kolik bodů obsahuje.

## Co je v souboru

- Jeden bod na řádek, ukončený zalomením řádku (CR LF), tři desetinná místa.
- Výška bodu je jeho Z (0, když ji nemá). Bod bloku je jeho vkládací bod.
- Popis, který obsahuje čárku (nebo tabulátor v TXT) nebo uvozovku, je uzavřen do dvojitých uvozovek, s zdvojenými uvozovkami uvnitř.
- Formát je ten, který čte a zapisuje CivilCraft, takže soubor se tam otevře také jako body.

## Časté chyby

- Pro jednotky se nabízí jen `D`: výkres nemá nastavené jednotky. Nastavte je, nebo převeďte v druhém programu.
- Body jsou v jiném programu daleko od očekávaného místa: exportujte světové souřadnice (`W`), nebo UCS, který používá geodetický bod druhého programu (`U`).
