---
title: Skraffering och fyllning av ytor
summary: Fyll en yta med en heltäckande färg eller ett standardmönster genom att klicka inuti den eller välja slutna former, ange mönstrets skala och vinkel, och ändra skraffering i efterhand.
keywords: skraffering, bhatch, fyllning, heltäckande fyllning, mönster, ansi31, ansi37, tegel, jord, nät, sektionslinjer, poché, ö, avgränsning, skala, vinkel
from: 14399174
---

## Vad du skapar

En väggsektion fylld med mönstret ANSI31, en pelare i den lämnad tom, och en heltäckande fyllning i pelaren.

## Skraffera genom att klicka inuti en yta

1. Rita en rektangel (`REC`, `0,0`, `@2000,1200`) och en cirkel inuti den (`C`, `1000,600`, `300`). Klicka på {{ui:Utsträckning}}.
2. Klicka på {{ui:Skraffering}} i gruppen {{ui:Rita}}, eller skriv `H` och tryck på {{key:Enter}}. Historiken visar vilket mönster som är aktuellt, till exempel `Current hatch: ANSI31, scale 1, angle 0°`.
3. Skriv `P` och tryck på {{key:Enter}}, skriv `ANSI31` och tryck på {{key:Enter}}.
4. Skriv `SC` och tryck på {{key:Enter}}, skriv `20` och tryck på {{key:Enter}}. Mönsterstorlekar gäller på papper, så en ritning som plottas i 1:20 vill ha skala 20.
5. Vid `Pick internal point` klickar du inuti rektangeln, utanför cirkeln. Skrafferingen visas som en förhandsvisning.
6. Tryck på {{key:Enter}}. Rektangeln skrafferas; cirkeln inuti förblir tom, eftersom den är en ö.

Klicka inuti flera ytor innan du trycker på {{key:Enter}} för att göra dem till en skraffering. `U` tar tillbaka den senaste ytan.

## En heltäckande fyllning

1. Skriv `H` och tryck på {{key:Enter}}.
2. Skriv `P`, tryck på {{key:Enter}}, skriv `SOLID` och tryck på {{key:Enter}}.
3. Klicka inuti cirkeln och tryck sedan på {{key:Enter}}.

## Skraffera slutna former du väljer

I stället för att klicka inuti, skriv `S` (Välj objekt) vid `Pick internal point` och välj slutna polylinjer, cirklar eller slutna ellipser, och tryck sedan på {{key:Enter}}. Former inuti andra lämnas tomma i tur och ordning (den yttre skrafferas, nästa lämnas tom, och så vidare).

## Mönster

Skriv `?` vid mönsterfrågan för listan. Standardmönstren är ANSI31 till ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS och EARTH, samt SOLID. I en ritning i tum (eller med fot och tum som längdformat) används mönstrens tumstorlekar, precis som i AutoCAD; annars millimeterstorlekarna.

{{ui:Vinkel}} (`A`) vrider hela mönstret: ANSI31 vid 90° lutar åt andra hållet.

**Mönsterfiler.** Skriv `F` (Mönsterfil) vid `Pick internal point` och välj en `.pat`-fil. Mönstren i den läggs till i listan; med fler än ett frågas du vilket som ska användas. En fil utan mönster som CadCraft kan läsa säger det, och eventuella mönster som hoppades över räknas. Storlekar i en `.pat`-fil har ingen egen enhet, så de läses i ritningens enheter. Endast filer skrivna i det vanliga `.pat`-formatet har testats; inga som gjorts av ett annat program.

## Ändra en skraffering

Markera den (klicka på en av dess linjer). I {{ui:Egenskaper}}: {{ui:Mönster}}, {{ui:Mönsterskala}} och {{ui:Mönstervinkel}}. Skrafferingar från öppnade ritningar visar sitt mönster när det är ett av standardmönstren; andra visas som en ljus ton av deras färg.

## Vanliga misstag

- **"Ingen sluten gräns runt den punkten."** Det finns ett gap i konturen, eller en del av den ligger utanför skärmen: CadCraft tittar bara på det som syns på skärmen. Stäng gapet (zooma in på hörnen), eller zooma ut.
- **"Mönstret är för tätt för att ritas i den här skalan."** Linjerna skulle ligga tätare än ritningen kan visa. Använd en större skala: prova plottskalan (20 för 1:20).
- **Mönstret ser enormt eller pyttelitet ut.** Skalan anger ritningsenheter per mönsterenhet; se steg 4 ovan.
- **Att flytta konturen flyttar inte skrafferingen.** En skraffering är inte kopplad till sin gräns. Flytta båda, eller skraffera på nytt.

## En skraffering som följer sin gräns

En skraffering du gör med `HATCH` kommer ihåg vad som avgränsar den. Flyttar, vrider eller skalar du gränsen följer skrafferingen och dess mönster med. Drar du i ett handtag för att forma om gränsen räknas skrafferingen ut på nytt. Flyttar du skrafferingen själv följer dess gräns med, som en fylld form i ett ritprogram.

Länken upphör, och kommandoraden säger det, om gränsen inte längre sluts eller om du ändrar formen på skrafferingen för hand. Skrafferingen i sig finns kvar. Skriv `AS` medan du skraffierar för att göra fristående skrafferingar. Kopierar du en skraffering med dess gräns får kopian en egen länk.

`HATCHEDIT` (`HE`) ändrar mönster, skala, vinkel och ursprung för en skraffering, och länkar den till en gräns eller avslutar länken. Länken sparas i DWG- och DXF 2000-filer. En DXF R12-fil har inget skrafferingsobjekt, och länkar gjorda i andra program läses inte: använd `HATCHEDIT` och Länk för dem.
