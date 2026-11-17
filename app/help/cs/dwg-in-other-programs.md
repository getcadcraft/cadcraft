---
title: Otevření DWG z CadCraft v jiných programech
summary: V kterých programech byl DWG uložený z CadCraft otevřen, co se kontroluje a co dělat, když si jeden stěžuje.
keywords: dwg, otevření v jiných programech, kompatibilita, otevře se, audit, trueview, jiné CAD programy, dxf, kontrola, uložit jako dwg
from: 0f8c15c4
---

## Co CadCraft zapisuje

{{ui:Uložit}} zapisuje skutečný DWG, ve verzi, ve které výkres přišel, nebo ve verzi, kterou zvolíte v {{ui:Uložit jako}}: AutoCAD 2000, 2004, 2007, 2010, 2013 nebo 2018. Nic se za vašimi zády nepřevádí: historie vypíše vše, co se na cestě změnilo (například pravá barva zapsaná jako nejbližší standardní barva v DWG 2000).

## Kde byl otevřen

Každý DWG, který CadCraft zapíše, je ve všech verzích otevřen třemi programy, které nejsou CadCraft: ODA File Converter (který soubor kontroluje a nic v něm neopravuje), LibreDWG a libdxfrw. Jejich čtení se porovnává s čtením CadCraft: objekty, vrstvy, bloky a atributy, kóty, šrafy, listy a jejich výřezy.

Otevírání DWG souborů z CadCraft v AutoCADu a v bezplatném DWG TrueView se ověřuje na Windows, druh objektu po druhu (AUDIT, vrstvy, listy, kóty, šrafy, atributy, dynamické bloky, oříznuté odkazy, obrázky). Výsledky sem budou vypsány, až budou hotové.

## Když si jiný program stěžuje

1. Uložte znovu jako DXF ({{ui:Uložit jako}} › {{ui:DXF 2000}}) a otevřete ho: většina programů čte DXF.
2. Uložte DWG v starší verzi (2013 nebo 2010).
3. Napište nám na Discord, který program a verzi máte a co hlásil; soubor pomáhá nejvíc.
