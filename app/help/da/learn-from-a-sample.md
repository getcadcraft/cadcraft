---
title: Lær af en eksempeltegning
summary: Åbn CadCrafts eksempelhus eller eksempel på som udført, og gå gennem dets ark, tegningshoved, målsætninger og lag.
keywords: eksempel, eksempler, eksempeltegning, lær, vejledning, gennemgang, tegningshoved, ark, som udført, arkitektsæt, åbn et eksempel
from: aa1f960a
---

## Det her lærer du

Hvordan et færdigt sæt er bygget: modelrum, ark med viewports i en målestok, et tegningshoved med attributter, målsætninger i fod og tommer og i millimeter, lag. Eksemplerne er CadCrafts egne og frie at bruge til hvad som helst (CC0).

## Åbn et eksempel

1. I panelet til venstre, under {{ui:Tegning}}, klikker du på {{ui:Åbn et eksempel}} (eller skriver {{cmd:SAMPLES}}; i båndstilene står den i menuen {{ui:Fil}}).
2. Klik på {{ui:Åbn}} ved siden af {{ui:Eksempelhus}}. Det åbnes i en fane for sig, så dit arbejde forbliver åbent.

## Se dig omkring i modellen

1. Klik på {{ui:Udstrækning}} (eller skriv `ZOOM` og derefter `E`): grundplanen, facaden, et snit og en vægdetalje.
2. I {{ui:Lag}} klikker du på øjet ved siden af `A-ANNO-DIMS` for at skjule målsætningerne og igen for at vise dem.
3. Klik på en dør: Egenskaber viser en blokreference til `DOOR-32`. Døre og vinduer er blokke, placeret drejet og spejlet.

## Arkene

1. Klik på {{ui:A-101 FLOOR PLAN}} under tegningen: et ARCH D-ark med ét viewport i 1/4" = 1'-0".
2. Dobbeltklik inde i viewporten for at arbejde på modellen gennem den; dobbeltklik uden for den for at komme tilbage.
3. {{ui:A-501 DETAILS}} viser vægdetaljen i 1 1/2" = 1'-0": den samme model i en anden målestok.

## Tegningshovedet

1. På et vilkårligt ark dobbeltklikker du på tegningshovedet: {{ui:Redigér attributter}} viser PROJECT, TITLE, SCALE, DATE, DRAWN og SHEET.
2. Ændr DRAWN til dine initialer, og klik på {{ui:OK}}.
3. For at ændre selve tegningshovedet på alle ark markerer du det og vælger {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér på stedet}}. Se [Attributter](topic:attributes).

## Som udført

Åbn {{ui:Eksempel på som udført}} på samme måde. De grå prikker på `SCAN-SLICE` er et udsnit af en scanning; væggene på `AB-WALL` blev aftegnet over dem. Den østlige væg er 35 mm ude af vinkel: målsætningerne siger det to gange, i millimeter (`AB-DIMS-MM`) og i fod og tommer (`AB-DIMS-FTIN`, de samme længder gennem en målingsskala). De røde skyer på `REV-1` markerer det, opmålingen fandt.

## Næste

- [Ændr målsætningens tekststørrelse](topic:change-dimension-text-size)
- [Plot til PDF](topic:plot-pdf): plot {{ui:A-101 FLOOR PLAN}}.
