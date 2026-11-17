---
title: Vijat ndihmëse dhe rrezet
summary: Vizato vija që vazhdojnë pa fund (XLINE) ose nga një pikë në një drejtim (RAY) për t'i rreshtuar gjërat, dhe pritini në vija të zakonshme.
keywords: xline, ray, vijë ndihmëse, vijë e pafundme, vijë udhëzuese, vijë reference, përgjysmim, vijë ofseti, vija rreshtimi, xl
from: b6c398bc
---

## Çfarë do të mësoni

Si të vizatoni vija ndihmëse për t'i rreshtuar gjërat gjatë hartimit: nëpër dy pika, horizontale ose vertikale, me një kënd, në mes të dy drejtimeve, ose në një distancë të caktuar nga një vijë. Dhe si t'i prisni në vija të zakonshme kur kanë mbaruar punën.

## Dy llojet

- Një **vijë ndihmëse** ({{cmd:XLINE}}) vazhdon pa fund në të dyja anët.
- Një **rreze** ({{cmd:RAY}}) fillon nga një pikë dhe vazhdon pa fund në një anë.

Të dyja vizatohen në tërë zonën e vizatimit, pavarësisht zmadhimit, në ekran të ndarë dhe në pamjet e dritareve mbi një fletë. {{ui:Shtrirje}} i lë jashtë, kështu që zmadhimi te vizatimi ende përshtat atë që keni vizatuar.

## Vizatoni vija ndihmëse

1. Klikoni {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Vijë ndihmëse}}, ose shkruani `XL` dhe shtypni {{key:Enter}}.
2. Klikoni një pikë. Çdo klikim pas saj shton një vijë ndihmëse nëpër pikën e parë dhe atë që klikoni.
3. Shtypni {{key:Enter}} për të mbaruar.

Në vend të pikës së parë mund të shkruani një opsion:

| Opsioni | Çfarë bën |
|---|---|
| `H` (Hor) | Vija horizontale, nga një për çdo pikë që klikoni. |
| `V` (Ver) | Vija vertikale nëpër çdo pikë. |
| `A` [Kënd (A)] | Vija me kënd që shkruani (në gradë, në drejtim kundër akrepave të orës nga boshti X), nëpër çdo pikë. `R` (Reference) mat këndin nga një vijë që zgjidhni. |
| `B` [Përgjysmim (B)] | Klikoni kulmin, pastaj një pikë përgjatë një ane: çdo pikë që klikoni përgjatë anës tjetër shton vijën në mes të dyjave. |
| `O` (Ofset) | Shkruani një distancë, zgjidhni një vijë, pastaj klikoni anën: një vijë ndihmëse aq larg saj, paralele. `T` (Through) e vendos nëpër një pikë që klikoni në vend të kësaj. Distanca mbahet për herën tjetër. |

## Vizatoni rreze

1. Klikoni {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreze}}, ose shkruani `RAY` dhe shtypni {{key:Enter}}.
2. Klikoni aty ku fillojnë rrezet.
3. Klikoni një pikë për secilën rreze që të kalojë nëpër të. Shtypni {{key:Enter}} për të mbaruar.

## Kapja dhe prerja

Vijat ndihmëse dhe rrezet kapen nga kapjet Nearest, Perpendicular dhe Intersection. Nuk kanë skaje as mes, kështu që Endpoint dhe Midpoint nuk gjejnë asgjë mbi to.

Ato priten dhe pritën si vijat e tjera te {{cmd:TRIM}} dhe {{cmd:BREAK}}:

- Prisni një skaj të vijës ndihmëse dhe ajo bëhet rreze që fillon te prerja.
- Prisni pjesën e largët të një rreze dhe ajo bëhet një vijë e zakonshme.
- Thyeni një vijë ndihmëse në një pikë dhe merrni dy rreze.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} dhe {{cmd:STRETCH}} punojnë edhe mbi to. Një përzgjedhje me dritare nuk i zgjedh kurrë, sepse asnjë dritare nuk mund ta mbajë tërë një vijë pa fund; një përzgjedhje me kryqëzim ose një klikim i zgjedh.

:::note
Një DWG (çdo version) dhe një DXF 2000 i mbajnë si vija ndihmëse. DXF R12 nuk ka të tilla, kështu që atje bëhen vija nëpër tërë vizatimin, dhe ruajtja e thotë këtë. Një printim ose PDF i vizaton vetëm aty ku printohet.
:::
