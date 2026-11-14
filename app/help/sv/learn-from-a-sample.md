---
title: Lär dig av en exempelritning
summary: Öppna CadCrafts exempelhus eller exempel som byggt och gå igenom dess blad, ritningshuvud, mått och lager.
keywords: exempel, exempelritning, lära, handledning, genomgång, ritningshuvud, blad, som byggt, arkitektursats, öppna ett exempel
from: aa1f960a
---

## Det här lär du dig

Hur en färdig ritningssats är uppbyggd: modellrum, blad med vyportar i en skala, ett ritningshuvud med attribut, mått i fot och
tum och i millimeter, lager. Exemplen är CadCrafts egna och fria att använda till vad som helst (CC0).

## Öppna ett exempel

1. I den vänstra panelen, under {{ui:Ritning}}, klickar du på {{ui:Öppna ett exempel}} (eller skriver {{cmd:SAMPLES}}; i
   menyflikstilarna finns det i menyn {{ui:Fil}}).
2. Klicka på {{ui:Öppna}} vid {{ui:Exempelhus}}. Det öppnas i en egen flik, så ditt arbete förblir öppet.

## Titta runt i modellen

1. Klicka på {{ui:Utsträckning}} (eller skriv `ZOOM` och sedan `E`): planritningen, framsidans fasad, en sektion och en väggdetalj.
2. I {{ui:Lager}} klickar du på ögat bredvid `A-ANNO-DIMS` för att dölja måtten, och igen för att visa dem.
3. Klicka på en dörr: Egenskaper visar en blockreferens till `DOOR-32`. Dörrar och fönster är block, placerade vridna och speglade.

## Bladen

1. Klicka på {{ui:A-101 FLOOR PLAN}} under ritningen: ett ARCH D-blad med en vyport i 1/4" = 1'-0".
2. Dubbelklicka i vyporten för att arbeta på modellen genom den; dubbelklicka utanför för att gå tillbaka.
3. {{ui:A-501 DETAILS}} visar väggdetaljen i 1 1/2" = 1'-0": samma modell, en annan skala.

## Ritningshuvudet

1. På ett blad dubbelklickar du på ritningshuvudet: {{ui:Redigera attribut}} listar PROJECT, TITLE, SCALE, DATE, DRAWN och SHEET.
2. Ändra DRAWN till dina initialer och klicka på {{ui:OK}}.
3. För att ändra själva ritningshuvudet på alla blad markerar du det och väljer {{ui:Block}} › {{ui:Mer}} › {{ui:Redigera på plats}}.
   Se [Attribut](topic:attributes).

## Som byggt

Öppna {{ui:Exempel som byggt}} på samma sätt. De grå punkterna på `SCAN-SLICE` är en skiva av en skanning; väggarna på `AB-WALL` ritades
över dem. Östra väggen avviker 35 mm från vinkelrätt: måtten visar det två gånger, i millimeter (`AB-DIMS-MM`) och i fot
och tum (`AB-DIMS-FTIN`, samma längder genom en måttskala). De röda molnen på `REV-1` markerar vad uppmätningen fann.

## Nästa steg

- [Ändra måtttextens storlek](topic:change-dimension-text-size)
- [Plotta till PDF](topic:plot-pdf): plotta {{ui:A-101 FLOOR PLAN}}.
