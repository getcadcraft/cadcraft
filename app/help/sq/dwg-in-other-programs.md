---
title: Hapja e një DWG të CadCraft në programe të tjera
summary: Cilët programe kanë hapur një DWG të ruajtur nga CadCraft, çfarë kontrollohet, dhe çfarë të bëni kur një program ankohet.
keywords: dwg, hapje në programe të tjera, përputhshmëri, a hapet, audit, trueview, programe të tjera CAD, dxf, kontroll, ruaj si dwg
from: 0f8c15c4
---

## Çfarë shkruan CadCraft

{{ui:Ruaj}} shkruan një DWG të vërtetë, në versionin me të cilin erdhi vizatimi ose në atë që zgjidhni te {{ui:Ruaj si}}: AutoCAD 2000, 2004, 2007, 2010, 2013 ose 2018. Asgjë nuk konvertohet pa e ditur ju: historiku liston çdo gjë që u ndryshua gjatë rrugës (për shembull një ngjyrë e vërtetë e shkruar si ngjyra standarde më e afërt në një DWG 2000).

## Ku është hapur

Çdo DWG që shkruan CadCraft hapet, në çdo version, nga tre programe që nuk janë CadCraft: ODA File Converter (që e kontrollon skedarin dhe nuk riparon asgjë në të), LibreDWG dhe libdxfrw. Leximi i tyre krahasohet me atë të CadCraft: objektet, shtresat, blloqet dhe atributet, dimensionet, vijëzimet, fletët dhe dritaret e tyre.

Hapja e skedarëve DWG të CadCraft në AutoCAD dhe në DWG TrueView falas po kontrollohet në Windows, lloj objekti pas lloji (AUDIT, shtresat, fletët, dimensionet, vijëzimet, atributet, blloqet dinamike, referencat e prera, imazhet). Rezultatet do të listohen këtu kur të jenë gati.

## Kur një program tjetër ankohet

1. Ruajeni përsëri si DXF ({{ui:Ruaj si}} › {{ui:DXF 2000}}) dhe hapeni atë: shumica e programeve lexojnë DXF.
2. Ruajeni DWG në një version më të vjetër (2013 ose 2010).
3. Na tregoni në Discord cili program dhe cili version, dhe çfarë tha; skedari ndihmon më së shumti.
