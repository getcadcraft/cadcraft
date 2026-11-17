---
title: Egy CadCraft DWG megnyitása más programokban
summary: Mely programokban nyitották meg a CadCraft által mentett DWG-fájlt, mit ellenőriztek, és mit tegyen, ha valamelyik program panaszkodik.
keywords: dwg, megnyitás más programokban, kompatibilitás, megnyílik-e, audit, trueview, más CAD-programok, dxf, ellenőrzés, mentés DWG-ként
from: 0f8c15c4
---

## Amit a CadCraft ír

A {{ui:Mentés}} valódi DWG-t ír, abban a verzióban, amelyben a rajz érkezett, vagy abban, amelyet a {{ui:Mentés másként}} alatt választ: AutoCAD 2000, 2004, 2007, 2010, 2013 vagy 2018. Semmi nem alakul át a háttérben: az előzmények felsorolják, ami közben megváltozott (például egy valódi szín a legközelebbi szabványos színként íródik egy 2000-es DWG-ben).

## Hol nyitották meg

A CadCraft által írt minden DWG-t minden verzióban három, a CadCrafttól különböző program nyit meg: az ODA File Converter (amely ellenőrzi a fájlt, de semmit nem javít benne), a LibreDWG és a libdxfrw. Olvasatukat összehasonlítják a CadCraft olvasatával: objektumok, rétegek, blokkok és attribútumok, méretek, sraffozások, lapok és nézetablakaik.

A CadCraft DWG-fájljainak megnyitását AutoCAD-ben és az ingyenes DWG TrueViewban Windowson ellenőrzik, objektumtípusonként (AUDIT, rétegek, lapok, méretek, sraffozások, attribútumok, dinamikus blokkok, levágott hivatkozások, képek). Az eredmények itt jelennek meg, amint rendelkezésre állnak.

## Ha egy másik program panaszkodik

1. Mentse újra DXF-ként ({{ui:Mentés másként}} › {{ui:DXF 2000}}), és nyissa meg azt: a legtöbb program olvassa a DXF-et.
2. Mentse a DWG-t egy régebbi verzióban (2013 vagy 2010).
3. Jelezze nekünk a Discordon, melyik programról és verzióról van szó, és mit írt ki; a fájl segít a legtöbbet.
