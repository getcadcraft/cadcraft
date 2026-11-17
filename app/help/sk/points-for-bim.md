---
title: Body pre BIM programy
summary: Exportujte body a vkladacie body blokov s popisom do súboru CSV alebo TXT, ktorý importujú BIM a geodetické programy.
keywords: exportpoints, export bodov, body, csv, txt, pnezd, penzd, xyz, geodetické body, súradnice, bim, vytyčovanie, súbor bodov, sever, východ, výška
from: d80e2d53
---

## Čo vytvoríte

Súbor bodov: jeden riadok na bod, s číslom, severom, východom, výškou a popisom, ktoré môžu importovať BIM programy (medzi nimi Revit a Archicad) a geodetický softvér, aby umiestnili geodetické body, značky lokality alebo zariadenia.

## Export bodov

1. Vyberte body a bloky, ktorých vkladacie body chcete, alebo nevyberte nič, aby sa vzali všetky body.
2. Napíšte {{cmd:EXPORTPOINTS}} (alebo `EXPPTS`, alebo {{ui:Bloky}} › {{ui:Viac}} › {{ui:Exportovať body}}) a stlačte {{key:Enter}} (pri `Vyberte body a bloky` stlačte {{key:Enter}} znova, keď nič nebolo vybrané).
3. Keď ste vybrali bloky s atribútmi, CadCraft vypíše ich značky: napíšte tú, ktorej hodnota je popis (napríklad `ITEM`), alebo čokoľvek iné, aby sa použil názov každého bloku.
4. Vyberte stĺpce: `PNEZD` (bod, sever, východ, výška, popis: obvyklý), `PENZD` (východ pred severom) alebo `XYZ` (iba súradnice).
5. Vyberte jednotky: `D` ako nakreslené, alebo `M` metre, alebo `F` stopy (iba keď sú jednotky výkresu nastavené: {{ui:Vlastnosti}} › {{ui:Jednotky}} pri ničom nevybranom).
6. Ak je nastavený UCS, vyberte `W` svetové alebo `U` UCS súradnice (pozri [UCS a otočený pohľad](topic:ucs-and-turned-view)).
7. Vyberte `C` pre súbor `.csv` oddelený čiarkami alebo `T` pre `.txt` oddelený tabulátorom, a prvé číslo bodu.

Súbor sa stiahne ako `<drawing>-points.csv` (alebo `.txt`) a história uvedie, koľko bodov obsahuje.

## Čo je v súbore

- Jeden bod na riadok, ukončený zalomením riadka (CR LF), tri desatinné miesta.
- Výška bodu je jeho Z (0, ak ho nemá). Vkladací bod bloku je jeho bod.
- Popis, ktorý obsahuje čiarku (alebo tabulátor v TXT) alebo úvodzovku, je v dvojitých úvodzovkách, so zdvojenými úvodzovkami.
- Formát je ten, ktorý číta a zapisuje CivilCraft, takže sa súbor tam tiež otvorí ako body.

## Časté chyby

- Pre jednotky sa ponúka iba `D`: výkres nemá nastavené jednotky. Nastavte ich, alebo prepočítajte v druhom programe.
- Body sú ďaleko od toho, čo čakáte, v inom programe: exportujte svetové súradnice (`W`), alebo UCS, ktorý používa geodetický bod druhého programu (`U`).
