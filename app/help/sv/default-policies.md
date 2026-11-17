---
title: "Standardpolicyer: ange vad en ny ritning börjar med"
summary: Ange en gång vilka enheter, längdformat, precision, texthöjd och bladpapper en ny ritning börjar med, för metriskt och imperiskt arbete, och dela policyerna i kontoret som en liten fil.
keywords: standard, standardvärden, standardpolicyer, policy, kontorsstandard, kontorets standardvärden, mall, ny ritning, enheter, insunits, längdformat, arkitekt, precision, luprec, texthöjd, bladpapper, a1, dela, exportera, importera, json
from: 7b80fd13
---

## Vad du gör

Berätta för CadCraft vad en ny ritning ska börja med, så att ingen på kontoret behöver köra UNITS och ändra samma saker varje gång. Det här är ett tillägg: det är avstängt tills du slår på det, och en policy du inte anger lämnar CadCrafts egna standardvärde precis som det är.

:::note
Dessa är standardvärden för **nya** ritningar och **nya** blad. En ritning du redan har påbörjat ändras inte, och inte heller en ritning du öppnar.
:::

## Steg

1. Öppna Inställningar, gå till {{ui:Tillägg}} och slå på {{ui:Standardpolicyer}}.
2. I Inställningar, öppna fliken **CadCraft** och välj {{ui:Standardpolicyer}} i listan till vänster.
3. Ange de policyer du vill ha. Var och en börjar på **standardvärdet från CadCraft**. En policy med en **Metrisk** och en **Imperisk** ruta tar ett värde för varje slag av ritning; fyll i bara de du behöver.
4. Det finns ingen knapp för att spara: varje ändring sparas när du gör den.
5. Starta en ny ritning. Den har de enheter, längdformat, precision och texthöjd du angett, och dess första nya blad ligger på det papper du valde.

## Policyerna

- **Enheter för en ny ritning**: ingen, millimeter, centimeter, meter, tum eller fot.
- **Längdformat** och **Längdprecision**: det som kommandot UNITS anger, för en ny ritning.
- **Texthöjd för ny text**, i ritningsenheter.
- **Papper för ett nytt blad**: det papper som {{ui:Nytt blad}} använder.
- **Noteringsstorlekar på papper** (Inställningar › Global › Standardpolicyer): kontorets höjder i millimeter som de skrivs ut. CadCraft använder den för noteringar och etiketter: {{cmd:ANNOSCALE}} ställer in höjden som ny text börjar med till den höjden vid noteringsskalan. Se [Enheter, papper och skalor](topic:units-papers-scales#annotate-by-scale).

En ritning i tum eller fot använder de imperiska värdena; alla andra ritningar använder de metriska. En ritning utan enheter använder enhetssystemet som anges under Inställningar › Global › Standardpolicyer, eller det metriska när inget är angivet.

## Dela dem i kontoret

1. Öppna fliken **Global** i Inställningar och välj {{ui:Standardpolicyer}}.
2. Klicka på {{ui:Spara till en fil}}. Du får en liten fil som slutar på `.ccdefaults.json`.
3. På en annan dator slår du på tillägget, öppnar samma plats och klickar på {{ui:Läs in från en fil}}. Filens policyer ersätter dem på den datorn.

En fil innehåller policyerna för alla CadCraft-appar, så samma fil fungerar i BimCraft.

## Bra att veta

- Det finns ingen policy för ett blads skala: ett nytt blads vy anpassas till ritningen, och du anger dess skala på bladet.
- Det finns ingen policy för en måttstil: en ny ritning har inga namngivna måttstilar. Ställ in mått med DIMSTYLE, eller börja från en ritning som har dina.
- Filen är enkel, öppen JSON. En policy som filen anger och som den här versionen inte känner till utelämnas och nämns i meddelandet; resten läses in.
- Policyerna sparas i den här webbläsaren, inte i ritningen. Stäng av tillägget så är allt CadCrafts egna standardvärden igen.
