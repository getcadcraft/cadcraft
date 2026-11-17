---
title: Maatvoeringtekstgrootte wijzigen
summary: Maak maatvoeringtekst groter of kleiner, voor nieuwe maatvoeringen en voor de maatvoeringen die al in de tekening staan.
keywords: maatvoeringtekstgrootte, teksthoogte, dimtxt, dimscale, maatvoeringtekst te klein, maatvoeringtekst te groot, grotere maatvoeringtekst, annotatieschaal
from: 30e40633
---

## Voor de maatvoeringen die u hierna maakt

1. Druk op {{key:Esc}} zodat niets geselecteerd is: het rechterpaneel toont {{ui:Huidige instellingen}}.
2. Scrol het paneel omlaag naar {{ui:Nieuwe maatvoeringen}}. Typ de hoogte die u op papier wilt in {{ui:Teksthoogte}} (bijvoorbeeld `2.5` voor 2.5 mm, of `3/32"`) en druk op {{key:Enter}}.
3. Zet {{ui:Algemene schaal}} op de plotschaal (`50` voor 1:50, `48` voor 1/4" = 1'-0"): elke afmeting wordt ermee vermenigvuldigd.

Op de opdrachtregel stelt {{cmd:DIMTXT}} de hoogte in en {{cmd:DIMSCALE}} de algemene schaal.

## Voor maatvoeringen die al in de tekening staan

1. Selecteer de maatvoeringen (één, of meer: kies {{ui:Maatvoering}} in de lijst bovenaan Eigenschappen).
2. Typ de nieuwe {{ui:Teksthoogte}} (in de sectie {{ui:Tekst}}), of een nieuwe {{ui:Algemene schaal}} (in de sectie {{ui:Passend maken}} verderop), en druk op {{key:Enter}}.

Ze worden direct opnieuw getekend, in één stap ongedaan te maken. Een maatvoering uit het bestand van een ander programma wordt in de stijl van CadCraft opnieuw getekend zodra u hem wijzigt.

:::tip
Tekst die op het scherm goed is maar op het geplotte blad erg klein, betekent meestal dat de algemene schaal 1 is: stel hem in op de schaal van het blad.
:::

Zie [Maatvoeringsgroottes, decimalen en schaal instellen](topic:dimension-settings) voor elke instelling.
