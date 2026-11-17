---
title: Flytta skisser till och från andra delmodellerare
summary: Skriv ett makro som bygger om din ritning som en villkorad skiss i en delmodellerare, och öppna en skiss som exporterats från en.
keywords: skiss, makro, swb, vba, export, delmodellerare, globala variabler, ekvationer, relationer, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks finns inte där CadCraft byggs, så ingen riktning har testats i SolidWorks ännu. Det CadCraft skriver kontrolleras endast avseende struktur. Kontrollera resultatet innan du förlitar dig på det.
:::

## Skicka en ritning som skiss

1. Villkora och måttsätt ritningen (se [Villkora en ritning](topic:constraints)).
2. I gruppen {{ui:Parametrisk}} öppnar du {{ui:Mer}} och väljer {{ui:Makro för SolidWorks (.swb)}}, eller skriver {{cmd:SWBOUT}}.

   En fil med namn efter ritningen, med filändelsen `.swb`, laddas ner.
3. I SolidWorks väljer du **Tools > Macro > Run** och väljer den filen.

Makrot skapar en ny del från din standardmall för delar, öppnar en skiss på Front Plane och ritar modellens linjer, cirklar, bågar, punkter och polylinjer i den, med:

- dina villkor som skissrelationer,
- dina måttvillkor som mått med samma namn (`d1@Sketch1`),
- dina egna parametrar som globala variabler,
- varje uttryck som en ekvation.

Delen använder ritningens längdenhet. Text, block, skrafferingar, mått och blad ingår inte i skissen; historiken listar vad som lämnats utanför. Uttryck som saknar ekvationsform där (`if`, `min`, `max`, `round`, `%` och några till) skrivs som sitt aktuella värde, och historiken säger vilka. Allt makrot inte kan skapa skrivs till en loggfil bredvid makrot, och ett meddelande sammanfattar det i slutet.

## Öppna en skiss från en del

1. I SolidWorks kör du CadCraft-exportmakrot (ladda ner det i PartCraft-appen: Fil > Exportera > Exportera makro för att ta tillbaka delar) på delen. Det skriver en `.json`-fil i formatet `cadcraft-sw-export` bredvid delen.
2. I CadCraft väljer du {{ui:Öppna}} och väljer den `.json`-filen.
3. När delen har flera skisser väljer du en.

Skissen blir ritningen, i millimeter: dess linjer, bågar, cirklar och punkter, dess relationer som villkor, dess mått som måttvillkor med samma namn som de hade (`D1`, `D2` …), dess globala variabler som parametrar och ekvationerna på dess mått som uttryck. Historiken listar vad som inte följde med, till exempel relationer som CadCraft inte har. Var skissen sitter i delen sparas inte: den ritas plant, sett mot sitt plan.
