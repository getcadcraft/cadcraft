---
title: Nastavení limitů výkresu
summary: LIMITS nastaví obdélník pro výkres: mřížka ho vyplní, ZOOM All ho ukáže a při zapnutých limitech se body mimo něj odmítnou. Ukládají se v souborech DWG a DXF.
keywords: limity, limity výkresu, LIMITS, LIMMIN, LIMMAX, LIMCHECK, mřížka, mimo limity, formát listu, plocha výkresu, zoom all, hranice
from: 9e97b30d
---

**Limity výkresu** jsou obdélník, který říká, jak velký má výkres být: plocha, ve které plánujete kreslit, například list 420 × 297. Nový výkres žádné nemá, takže mřížka a plocha výkresu jsou neomezené, jako dřív.

## Nastavení

Napište {{cmd:LIMITS}} a odpovězte:

- `Zadejte levý dolní roh nebo [ON/OFF] <0,0>`: bod, nebo {{key:Enter}}, aby se zachoval aktuální.
- `Zadejte pravý horní roh <420,297>`: bod, nebo {{key:Enter}}, aby se zachoval aktuální. Musí být nad prvním a vpravo od něj.

Nebo na první otázku napište `ON` nebo `OFF`, čímž přepnete kontrolu, aniž byste změnili obdélník. Nastavení rohů je jeden krok zpět a stejně tak každé ON a OFF.

## Co dělají

- **Mřížka vyplní limity** a zastaví se na jejich okraji. Je to obrázek plochy, takže zapněte {{ui:Mřížka}}, abyste ji viděli.
- **ZOOM All** ({{cmd:ZOOM}}, potom {{ui:All}}) ukáže limity a výkres dohromady; {{ui:Rozsah}} ukazuje jen výkres.
- **Při zapnutých limitech** bod, který napíšete nebo kliknete mimo ně, je odmítnut hlášením `**Mimo limity` a výzva zůstane. Platí to pro příkazy, které vytvářejí objekty: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, kótovací příkazy a několik dalších. Příkazy, které jen posouvají, vybírají nebo měří, omezené nejsou, stejně jako vkládání, tažení úchytem nebo objekt, který vytvoří rutina LISP: limity jsou vodítko pro kreslení, ne zeď. Při vypnutých limitech se nic neodmítá.
- Objekty, které jsou už mimo, zůstávají, kde jsou.

## V souborech a v LISP

Ukládají se do DWG a DXF jako `$LIMMIN`, `$LIMMAX` a `$LIMCHECK`. Soubor z jiného programu, který má jen výchozí limity tohoto programu (0,0 až 12,9 nebo 420,297, kontrola vypnutá), se otevře bez nich, takže jeho mřížka není stlačena do malého obdélníku; soubor s vlastními limity nebo se zapnutou kontrolou si je ponechá. V LISP čtou `(getvar "LIMMIN")`, `LIMMAX` a `LIMCHECK` a `setvar` je zapisuje jako jeden krok zpět.

Limity patří modelu. List (rozvržení) má vlastní formát papíru.
