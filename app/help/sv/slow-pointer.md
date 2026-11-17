---
title: Pekaren hoppar eller släpar över ritningen
summary: Vad du gör när korsmarkören inte följer musen jämnt, på en äldre eller långsammare dator.
keywords: korsmarkör hoppar, pekarfördröjning, korsmarkör långsam, ryckig markör, gammal dator, gammalt grafikkort, integrerad grafik, maskinvaruacceleration, jämnare pekare, långsam bärbar dator
from: 39dc9057
---

CadCraft körs i webbläsaren (CadCraft Studio är också en webbvy), så ingenting i det är byggt för ett visst grafikkort eller ett annat. Korsmarkören ritas av appen, vilket betyder att den bara kan röra sig så snabbt som appen kan rita en bildruta.

## Låt CadCraft dra ner extrafunktionerna

1. Öppna {{ui:Inställningar}} (kugghjulet uppe till höger) och stanna kvar på fliken {{ui:CadCraft}}.
2. Välj {{ui:Jämnare pekare på långsammare datorer}}.
3. Välj {{ui:På}}.

Med den på används datorns egen korsmarkör i stället för den ritade korsmarkören och markeringsrutan (även helskärmens korsmarkör), och objektet under pekaren tänds när pekaren vilar i stället för medan den rör sig. Objektfångst, spårning och gummibandet fungerar som tidigare.

{{ui:Automatisk}} är hur CadCraft startar: den mäter hur lång tid bildrutorna tar när du rör pekaren, och slår på detta själv när de förblir långsamma en stund. Den säger till en gång när det händer. {{ui:Av}} behåller den ritade korsmarkören oavsett hastighet.

## Om det fortfarande är långsamt

- Kontrollera att maskinvaruacceleration är på i din webbläsare: öppna `chrome://gpu` (eller `edge://gpu`) i en ny flik. Om de första raderna säger "Software only" eller "Disabled" ritar webbläsaren utan grafikkortet. En uppdatering av grafikdrivrutinen brukar åtgärda det.
- Stäng andra tunga flikar och program och prova ett mindre webbläsarfönster.
- Berätta för oss via {{ui:Hjälp}}, {{ui:Rapportera ett problem}}: skriv om du använder webbläsaren eller CadCraft Studio, dess version och vad gpu-sidan visar.
