---
title: Otvorenie DWG z CadCraft v iných programoch
summary: Ktoré programy otvorili DWG uložené v CadCraft, čo sa kontroluje a čo robiť, keď jeden z nich niečo hlási.
keywords: dwg, otvoriť v iných programoch, kompatibilita, sa otvorí, audit, trueview, iné CAD programy, dxf, kontrola, uložiť ako dwg
from: 0f8c15c4
---

## Čo CadCraft zapisuje

{{ui:Uložiť}} zapíše skutočný DWG vo verzii, v akej výkres prišiel, alebo v tej, ktorú zvolíte v {{ui:Uložiť ako}}: AutoCAD 2000, 2004, 2007, 2010, 2013 alebo 2018. Nič sa nekonvertuje za vaším chrbtom: história uvedie všetko, čo sa počas toho zmenilo (napríklad skutočná farba zapísaná ako najbližšia štandardná farba v DWG 2000).

## Kde bol otvorený

Každý DWG, ktorý CadCraft zapíše, otvárajú vo všetkých verziách tri programy, ktoré nie sú CadCraft: ODA File Converter (ktorý súbor kontroluje a nič v ňom neopravuje), LibreDWG a libdxfrw. Ich čítanie sa porovnáva s čítaním CadCraft: objekty, hladiny, bloky a atribúty, kóty, šráfovania, listy a ich výrezy.

Otváranie súborov DWG z CadCraft v AutoCAD a v bezplatnom DWG TrueView sa overuje vo Windows, druh objektu po druhu (AUDIT, hladiny, listy, kóty, šráfovania, atribúty, dynamické bloky, orezané referencie, obrázky). Výsledky sa tu uvedú, keď budú hotové.

## Keď iný program niečo hlási

1. Uložte znova ako DXF ({{ui:Uložiť ako}} › {{ui:DXF 2000}}) a otvorte ho: väčšina programov číta DXF.
2. Uložte DWG v staršej verzii (2013 alebo 2010).
3. Napíšte nám na Discord, aký program a verziu a čo hlásil; súbor pomôže najviac.
