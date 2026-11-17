---
title: Vendos kufijtë e vizatimit
summary: LIMITS vendos një drejtkëndësh për vizatimin: rrjeta e mbush, ZOOM All e shfaq, dhe me kufijtë aktivë, pikat jashtë tyre refuzohen. Ruhen në skedarët DWG dhe DXF.
keywords: kufij, kufijtë e vizatimit, LIMITS, LIMMIN, LIMMAX, LIMCHECK, rrjetë, jashtë kufijve, madhësia e fletës, zona e vizatimit, zoom all, kufi
from: 9e97b30d
---

**Kufijtë e vizatimit** janë një drejtkëndësh që tregon sa e madhe pritet të jetë vizatimi: zona ku planifikoni të vizatoni, si një fletë 420 × 297. Një vizatim i ri nuk ka asnjë, kështu që rrjeta dhe zona e vizatimit janë të pakufizuara, si më parë.

## Vendosini

Shkruani {{cmd:LIMITS}} dhe përgjigjuni:

- `Specify lower left corner or [ON/OFF] <0,0>`: një pikë, ose {{key:Enter}} për ta mbajtur të tanishmen.
- `Specify upper right corner <420,297>`: një pikë, ose {{key:Enter}} për ta mbajtur të tanishmen. Duhet të jetë mbi dhe djathtas nga e para.

Ose shkruani `ON` ose `OFF` te pyetja e parë për të ndërruar kontrollin pa ndryshuar drejtkëndëshin. Vendosja e cepave është një hap zhbërjeje, dhe po ashtu çdo ON dhe OFF.

## Çfarë bëjnë

- **Rrjeta mbush kufijtë** dhe ndalon te skaji i tyre. Është një pamje e zonës, kështu që ndizeni {{ui:Rrjetë}} për ta parë.
- **ZOOM All** ({{cmd:ZOOM}}, pastaj {{ui:Të gjitha}}) shfaq kufijtë dhe vizatimin së bashku; {{ui:Shtrirje}} ende shfaq vetëm vizatimin.
- **Me kufijtë ON**, një pikë që shkruani ose klikoni jashtë tyre refuzohet me `**Outside limits` dhe kërkesa mbetet. Mbulon komandat që krijojnë objekte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, komandat e dimensioneve dhe disa të tjera. Komandat që vetëm zhvendosin, zgjedhin ose matin nuk kufizohen, as ngjitja, tërheqja me dorezë, apo një objekt që krijon një rutinë LISP: kufijtë janë një udhëzues për vizatim, jo një mur. Me kufijtë OFF nuk refuzohet asgjë.
- Objektet që janë tashmë jashtë mbeten aty ku janë.

## Në skedarë dhe LISP

Ruhen në DWG dhe DXF si `$LIMMIN`, `$LIMMAX` dhe `$LIMCHECK`. Një skedar nga një program tjetër që ka vetëm kufijtë parazgjedhur të atij programi (0,0 deri 12,9 ose 420,297, kontrolli i çaktivizuar) hapet pa asnjë, që rrjeta e tij të mos shtypet në një drejtkëndësh të vogël; një skedar me kufijtë e vet, ose me kontrollin të ndezur, i mban ata. Në LISP, `(getvar "LIMMIN")`, `LIMMAX` dhe `LIMCHECK` i lexojnë ata, dhe `setvar` i shkruan, si një hap zhbërjeje.

Kufijtë i takojnë modelit. Një fletë (një paraqitje) ka madhësinë e vet të letrës.
