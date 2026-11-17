---
title: Nastavenie limitov výkresu
summary: LIMITS nastaví obdĺžnik pre výkres: mriežka ho vyplní, ZOOM Všetko ho zobrazí a pri zapnutých limitoch sa body mimo neprijmú. Ukladajú sa do súborov DWG a DXF.
keywords: limity, limity výkresu, LIMITS, LIMMIN, LIMMAX, LIMCHECK, mriežka, mimo limitov, veľkosť listu, plocha výkresu, zoom všetko, hranica
from: 9e97b30d
---

**Limity výkresu** sú obdĺžnik, ktorý hovorí, aký veľký má výkres byť: plochu, v ktorej plánujete kresliť, napríklad list 420 × 297. Nový výkres ich nemá, takže mriežka a plocha výkresu sú neohraničené, ako predtým.

## Nastavenie

Napíšte {{cmd:LIMITS}} a odpovedzte:

- `Specify lower left corner or [ON/OFF] <0,0>`: bod, alebo {{key:Enter}}, aby ste ponechali aktuálny.
- `Specify upper right corner <420,297>`: bod, alebo {{key:Enter}}, aby ste ponechali aktuálny. Musí byť nad a vpravo od prvého.

Alebo napíšte `ON` alebo `OFF` na prvú otázku, aby ste zapli alebo vypli kontrolu bez zmeny obdĺžnika. Nastavenie rohov je jeden krok späť a každé ON a OFF je tiež jeden krok späť.

## Čo robia

- **Mriežka vyplní limity** a zastaví sa na ich hrane. Je to obraz plochy, takže zapnite {{ui:Mriežka}}, aby ste ju videli.
- **ZOOM All** ({{cmd:ZOOM}}, potom {{ui:Všetko}}) zobrazí limity aj výkres spolu; {{ui:Rozsah}} stále zobrazuje iba výkres.
- **Pri zapnutých limitoch** sa bod, ktorý napíšete alebo kliknete mimo nich, odmietne so `**Outside limits` a výzva zostane. Platí to pre príkazy, ktoré vytvárajú objekty: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, kótovacie príkazy a niekoľko ďalších. Príkazy, ktoré iba posúvajú, vyberajú alebo merajú, nie sú obmedzené, rovnako ako vkladanie, ťahanie úchytu alebo objekt, ktorý vytvorí rutina LISP: limity sú vodítko pre kreslenie, nie stena. Pri vypnutých limitoch sa nič neodmieta.
- Objekty, ktoré sú už mimo, zostanú tam, kde sú.

## V súboroch a v LISP

Ukladajú sa do DWG a DXF ako `$LIMMIN`, `$LIMMAX` a `$LIMCHECK`. Súbor z iného programu, ktorý má iba predvolené limity toho programu (0,0 až 12,9 alebo 420,297, kontrola vypnutá), sa otvorí bez nich, takže jeho mriežka nie je stlačená do malého obdĺžnika; súbor s vlastnými limitmi alebo so zapnutou kontrolou si ich ponechá. V LISP `(getvar "LIMMIN")`, `LIMMAX` a `LIMCHECK` ich čítajú a `setvar` ich zapisuje ako jeden krok späť.

Limity patria modelu. List (rozloženie) má vlastný formát papiera.
