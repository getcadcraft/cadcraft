---
title: Skraffering och fyllda ytor
summary: Fyll en yta med en heltäckande färg eller ett standardmönster genom att klicka inuti den eller välja slutna former, ange mönstrets skala och vinkel, och ändra en skraffering efteråt.
keywords: skraffering, hatch, bhatch, fyllning, heltäckande fyllning, mönster, ansi31, ansi37, tegel, jord, nät, sektionslinjer, fylld sektion, ö, gräns, skala, vinkel
from: e7feb344
---

## Vad du gör

En väggsektion fylld med mönstret ANSI31, en pelare i den lämnad tom, och en heltäckande fyllning i pelaren.

## Skraffera genom att klicka inuti en yta

1. Rita en rektangel (`REC`, `0,0`, `@2000,1200`) och en cirkel inuti den (`C`, `1000,600`, `300`). Klicka på {{ui:Utsträckning}}.
2. Klicka på {{ui:Skraffering}} i gruppen {{ui:Rita}}, eller skriv `H` och tryck på {{key:Enter}}. Historiken säger vilket mönster som är aktuellt, till exempel `Current hatch: ANSI31, scale 1, angle 0°`.
3. Skriv `P` och tryck på {{key:Enter}}, skriv `ANSI31` och tryck på {{key:Enter}}.
4. Skriv `SC` och tryck på {{key:Enter}}, skriv `20` och tryck på {{key:Enter}}. Mönsterstorlekar gäller på papper, så en ritning utskriven i 1:20 vill ha skala 20.
5. Vid `Pick internal point` klickar du inuti rektangeln, utanför cirkeln. Skraffen visas som en förhandsvisning.
6. Tryck på {{key:Enter}}. Rektangeln skrafferas; cirkeln inuti förblir tom, eftersom den är en ö.

Klicka inuti flera ytor innan du trycker på {{key:Enter}} för att göra dem till en skraffering. `U` tar tillbaka den senaste ytan.

## En heltäckande fyllning

1. Skriv `H` och tryck på {{key:Enter}}.
2. Skriv `P`, tryck på {{key:Enter}}, skriv `SOLID` och tryck på {{key:Enter}}.
3. Klicka inuti cirkeln och tryck sedan på {{key:Enter}}.

## Skraffera slutna former du väljer

I stället för att klicka inuti skriver du `S` (Välj objekt) vid `Pick internal point`, väljer slutna polylinjer, cirklar eller slutna ellipser och trycker sedan på {{key:Enter}}. Former inuti andra lämnas tomma i tur (den yttre skrafferas, nästa inuti lämnas tom, och så vidare).

## Mönster

Skriv `?` vid mönsterfrågan för listan. De vanliga är ANSI31 till ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS och EARTH, samt SOLID. I en ritning i tum (eller med fot och tum som längdformat) används mönstrens tumstorlekar, som i AutoCAD; annars millimeterstorlekarna.

{{ui:Vinkel}} (`A`) vrider hela mönstret: ANSI31 vid 90° lutar åt det andra hållet.

**Mönsterfiler.** Skriv `F` (Mönsterfil) vid `Pick internal point` och välj en `.pat`-fil. Mönstren i den läggs till i listan; med fler än ett frågas du vilket som ska användas. En fil utan mönster som CadCraft kan läsa säger det, och varje mönster som hoppades över räknas. Storlekar i en `.pat`-fil har ingen egen enhet, så de läses i ritningens enheter. Endast filer skrivna i det vanliga `.pat`-formatet har prövats; inga gjorda av andra program.

## Ändra en skraffering

Markera den (klicka på en av dess linjer). I {{ui:Egenskaper}}: {{ui:Mönster}}, {{ui:Mönsterskala}} och {{ui:Mönstervinkel}}. Skrafferingar från öppnade ritningar visar sitt mönster när det är ett av standardmönstren; andra visas som en ljus ton av sin färg.

## Vanliga misstag

- **"No closed boundary round that point."** Det finns ett gap i konturen, eller en del av den ligger utanför skärmen: CadCraft tittar bara på det som syns. Stäng gapet (zooma in på hörnen), eller zooma ut.
- **"The pattern is too dense to draw at this scale."** Linjerna skulle ligga tätare än ritningen kan visa. Använd en större skala: prova utskriftsskalan (20 för 1:20).
- **Mönstret ser enormt eller pyttelitet ut.** Skalan anges i ritningsenheter per mönsterenhet; se steg 4 ovan.
- **Skraffen följer inte längre sin kontur.** En skraffering gjord med {{cmd:HATCH}} stannar med de objekt den gjordes av: flytta, vrid eller skala konturen så följer skraffen med; formar du om den med ett handtag räknas skraffen ut på nytt. Kopplingen upphör när konturen inte längre sluter sig, när du formar om skraffen för hand, eller när du trimmar den, och kommandoraden säger det. Inget går förlorat: skrafferar du området igen kopplas det på nytt.

## En skraffering som följer sin gräns

En skraffering du gör med `HATCH` kommer ihåg vad som avgränsar den. Flyttar, vrider eller skalar du gränsen följer skraffen och dess mönster med. Drar du i ett handtag för att forma om gränsen räknas skraffen ut på nytt. Flyttar du skraffen själv följer gränsen med, som en fylld form i ett ritprogram.

Kopplingen upphör, och kommandoraden säger det, om gränsen inte längre sluter sig eller du formar om skraffen för hand. Skraffen själv finns kvar. Skriv `AS` medan du skraffar för att göra fristående skrafferingar. Kopierar du en skraffering med dess gräns får kopian sin egen koppling.

`HATCHEDIT` (`HE`) ändrar mönster, skala, vinkel och origo för en skraffering, och kopplar den till en gräns eller avslutar kopplingen. Kopplingen sparas i DWG- och DXF 2000-filer. En DXF R12-fil har inget skraffobjekt, och kopplingar gjorda i andra program läses inte: använd `HATCHEDIT` och Koppla för dem.

En skraffering som inte längre har någon gräns (gränsen raderades, eller filen kom utan den) kan få tillbaka den: `HATCHGENERATEBOUNDARY` (`HGB`) ritar en sluten polylinje runt varje slinga i skraffen och, om du svarar Ja, kopplar skraffen till dem.

## En övertoningsfyllning

`GRADIENT` (`GD`) fyller en yta med en övertoning i stället för ett mönster: samma val som `HATCH`, efter att den frågat typ (linjär, cylindrisk, sfärisk, halvsfärisk, krökt, och var och en av dessa inverterad), en färg med en ton eller två färger, vinkeln, och centrerad eller inte. I `HATCH` gör alternativet `G` detsamma. `HATCHEDIT` `G`, eller {{ui:Egenskaper}} under Övertoning, ändrar en övertoning eller gör vilken skraffering som helst till en.

En övertoning visas på skärmen och i utskrifter. Sparar du som DWG 2004 eller senare får andra program en riktig övertoningsskraffering. DXF 2000 och DWG 2000 har ingen övertoning: där behåller CadCraft den för sig själv, och andra program ser en heltäckande fyllning i den första färgen.

## Trimma en skraffering

`TRIM` klipper en skraffering som vilket annat objekt som helst. Klicka på skraffen på den sida av skärkanten du vill bli av med: kanterna delar den skrafferade ytan och den biten tas bort. I snabbläge är varje objekt en skärkant; välj kanterna först (alternativ `T`) när det finns många. En trimmad skraffering är inte längre kopplad till sin gräns, eftersom den inte längre fyller den.
