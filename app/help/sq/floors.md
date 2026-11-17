---
title: Vendos katet mbi njëri-tjetrin në një vizatim
summary: Vizato katin e parë mbi katin e tokës në të njëjtat koordinata dhe fik çdo kat, pa Xref.
keywords: kat, katet, FLOORS, FLR, FLOOR, FLOORLAYERS, kat, nivel, vendos mbi njëri-tjetrin, shtresë projektimi, hapësirë modeli, underlay, xref
from: 7440fc87
---

Katet ju lejojnë të vendosni planimetri mbi njëra-tjetrën në një hapësirë modeli. Çdo kat ka objektet e veta, dhe shtresat vazhdojnë të funksionojnë në të gjitha. Një mur në `P-Walls` mund të jetë në çdo kat.

## Fillimi

Shkruani `FLOORS` (`FLR`), ose zgjidhni {{ui:Katet…}} në menynë {{ui:Më shumë}} të grupit {{ui:Pamja}}, pastaj zgjidhni {{ui:Fillo me katet}}. Ajo që keni vizatuar deri tani shkon në katin e tokës.

## Vizatoni në një kat

Zgjidhni katin me butonin e rrumbullakët në panel. Objektet e reja vendosen në të.

Katet e tjera që janë të shfaqura duken të zbehura nën të. Mund të kapni te ato, kështu që kati i parë përputhet me katin e tokës, por nuk mund t'i ndryshoni derisa t'i bëni katin aktiv. Syri fik një kat. Muret bashkohen vetëm me muret e katit të tyre.

Për të nisur një kat nga ai nën të, zgjidhni atë që doni, zgjidhni katin në panel dhe shtypni {{ui:Kopjo atje}}.

## Vendosni katet në fletë

Zgjidhni një dritare pamjeje në një fletë dhe zgjidhni katin e saj nën {{ui:Kati i shfaqur}} te Vetitë. Një dritare pamjeje pa kat të zgjedhur shfaq të gjithë katet që janë të ndezura.

## Dërgoni skedarin te dikush tjetër

Programet e tjera CAD nuk i njohin katet, kështu që i shfaqin të gjitha katet së bashku. Përpara se të dërgoni një skedar, zgjidhni {{ui:Kthe katet në shtresa}} në panel, ose shkruani `FLOORLAYERS`. Çdo objekt zhvendoset në një shtresë me emrin e katit të vet, si `Ground floor-P-Walls`, kështu që ata mund ta fikin ende çdo kat. Zhbëja e kthen mbrapsht. CadCraft i mban katet në skedarin DWG ose DXF që ruan.
