---
title: Menyer, tangenter och mus
summary: Välj en menystil som passar hur du redan arbetar, ge valfritt kommando en egen tangent eller en tangent som skriver ett kommando, flytta kommandon mellan menyflikar, och ange vad hjulet och musknapparna gör.
keywords: menystil, menyer, menyflik, verktygsfält, kommandorad, kortkommandon, snabbtangenter, tangenter, anpassa, ändra tilldelning, genvägar, textnycklar, mus, hjul, invertera, zoomriktning, mittknapp, högerknapp, panorera, exportera, importera, byta, bekant, klassisk ritning
from: 8bbf4f88
---

CadCraft:s kommandon är desamma oavsett hur du når dem, och kommandoraden finns alltid där med sina alias (`L`, `C`, `TR` …). En **menystil** avgör bara var knapparna sitter på skärmen, vad de heter där och vilka tangenter som kör dem. Välj en i {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menyer, tangenter och mus}}; ändringen gäller direkt, och den här webbläsaren minns den.

## De tre stilarna

| Stil | Vad du får |
|---|---|
| {{ui:CadCraft}} | CadCraft:s egna verktygsfält: Fil, Rita, Ändra, Notera, Parametrisk, Block, Blad, Redigera och Vy, var och en med en {{ui:Mer}}-meny. Standard. |
| {{ui:Klassisk ritning}} | En menyflik upplagd som klassiska 2D-ritprogram lägger sina: en meny {{ui:Fil}} och snabbknappar, sedan flikarna {{ui:Start}} (Rita, Ändra, Notering, {{ui:Lager}}, Block, Egenskaper, Verktyg, Urklipp), {{ui:Infoga}}, {{ui:Notera}}, {{ui:Parametrisk}}, {{ui:Vy}}, {{ui:Hantera}}, {{ui:Utdata}} och {{ui:3D}}. Skriv kommandon som vanligt. Mittknappen panorerar; ett högerklick är {{key:Enter}}, och att dra med högerknappen gör ingenting. |
| {{ui:Menyflik}} | En menyflik med enkla uppgiftsflikar: {{ui:Rita}}, {{ui:Ändra}}, {{ui:Notera}}, {{ui:Parametrisk}}, {{ui:Block}}, {{ui:Blad}}, {{ui:Vy}}, {{ui:3D}} och {{ui:Verktyg}}, med en meny {{ui:Fil}} och snabbknappar till höger. Mitt- och högerknapparna panorerar, precis som i CadCraft:s egen stil. |

Varje stil behåller CadCraft:s tangenter: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, och {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} för ritningshjälpmedlen. Bokstäver är aldrig tangenter: CadCraft skriver dem i kommandoraden.

Menyflikarna innehåller också verktygen i panelen {{ui:Lager}} och ritningshjälpmedlen i statusfältet. Fliken {{ui:3D}} fylls när 3D-fliken under ritningen har öppnats; ett 3D-verktyg som väljs på fliken Modell öppnar först 3D-fliken, och ett 2D-verktyg som väljs på 3D-fliken går först tillbaka till fliken Modell.

:::tip
En tangent som hör till CadCraft:s egen layout men som din stil gav ett annat kommando gör ingenting, och statusfältet säger vart dess kommando tog vägen (”I Mina tangenter är Ortho Ctrl+Alt+O”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sin betydelse. Medan ett kommando körs, eller medan bokstäver skrivs i kommandoraden, hör tangenterna till kommandoraden.
:::

## Gör den till din egen

1. Välj stilen som ligger närmast det du vill ha, och klicka sedan på {{ui:Anpassa…}}.
2. Under {{ui:Tangenter och menyer}} hittar du ett kommando (sökrutan hjälper). Klicka på {{ui:Lägg till en tangent}} och tryck på tangenten. Klicka på en tangent för att ta bort den.
3. Med en menyflik flyttar {{ui:Var det sitter}} kommandot till en annan flik och panel, till menyn {{ui:Fil}}, eller till {{ui:Bara tangenter}}.
4. Under {{ui:Mus}} anger du hjulet och knapparna som panorerar ritningen.
5. Ge den ett namn och klicka på {{ui:Spara}}.

Om du sparar en inbyggd stil skapas en egen kopia (”Min klassiska ritning”); den inbyggda ändras aldrig. En tangent som tilldelats två kommandon visas i rött och måste åtgärdas innan du kan spara.

## Tangenter som skriver ett kommando

{{cmd:SHORTCUTS}} (Vy › Mer › {{ui:Kortkommandon…}}) ger en tangent en hel kommandorad, till exempel {{key:Ctrl+Alt+L}} för `LINE` eller {{key:F9}} för `ZOOM E`. Dessa tangenter hör till den stil som används: första gången den här versionen öppnas förs tangenterna du skapade i en äldre version över till din egen stil ”Mina CadCraft-tangenter”, en gång, och fungerar som tidigare. Om du exporterar stilen tas de med.

## Mus

- **Musens hjul**: {{ui:Rulla uppåt zoomar in}} (standard) eller {{ui:Rulla uppåt zoomar ut}}, och hur snabbt. En nypning på styrplattan zoomar alltid åt det håll som fingrarna rör sig.
- **Panorera ritningen med**: mittknappen, högerknappen eller båda. Ett högerklick utan dragning är alltid {{key:Enter}}. Vänsterknappen väljer och ritar alltid i CadCraft, så att bocka i den ändrar inget här.
- **Dra i 3D-vyerna**: 3D-fliken har sina egna knappar i alla stilar (vänster kretsar, mitt och höger panorerar).

## Ta med den

{{ui:Exportera}} sparar stilen som används som en liten `.ccinput.json`-fil; {{ui:Importera…}} lägger till en sådan, från en annan dator eller en kollega. En importerad fil kan bara peka på CadCraft:s egna kommandon: allt annat i den utelämnas och räknas i statusfältet. {{ui:Ta bort den här stilen}} tar bort en av dina egna.

:::note
De här inställningarna stannar i den här webbläsaren. {{ui:Använd den här stilen i alla appar}} under stilkorten gör att varje app öppnas i sin motsvarande stil (sitt eget verktygsfält, en menyflik eller Klassisk ritning), med de ändringar du gjort i varje app. CadCraft har ingen menyradsstil: när en annan apps menyrad väljs för alla appar behåller CadCraft sitt eget verktygsfält.
:::

Relaterat: [Tangentbord och mus](topic:keyboard) · [CadCraft-inställningar](topic:settings) · [Kommer från annan ritprogramvara](topic:coming-from) · [Kommandoalias](topic:command-aliases)
