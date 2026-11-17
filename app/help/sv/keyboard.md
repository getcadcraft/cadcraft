---
title: Tangentbord och mus
summary: Varje tangent, musåtgärd och kommandoradstangent i CadCraft-ritappen, så som koden hanterar dem.
keywords: tangentbord, genvägar, tangenter, mus, hjul, panorera, zooma, högerklick, mittknapp, f3, f7, f8, ctrl, kommandotangent, snabbtangenter, kopiera, klipp ut, klistra in, duplicera, urklipp, markera allt
from: a2608a29
---

Genvägar visas för din dator. På en Mac använder varje {{key:Mod}}-genväg nedan Command-tangenten, och Control-tangenten fungerar också. Hur tangenter skrivs, och hur du använder F-tangenterna på en Mac, finns i [Tangentbord, möss och styrplattor](common:keys).

## Skriva kommandon

| Tangent | Vad den gör |
|---|---|
| Valfri bokstav, siffra eller symbol | Hamnar på kommandoraden, var pekaren än är, om inte en ruta i en panel har markören |
| {{key:Enter}} | Skickar det du skrev. På en tom prompt: upprepar det senaste kommandot, avslutar ett kommando, slutför ett val, eller godkänner standardvärdet i `<…>` |
| {{key:Space}} | Samma som {{key:Enter}}, förutom när CadCraft frågar efter text (text, blocknamn, måttext), där den skriver ett mellanslag |
| {{key:Esc}} | Avbryter kommandot. När inget kommando körs: avbryter en handtagsflyttning eller en markeringsruta, och rensar sedan markeringen |
| {{key:Tab}} | Godkänner det föreslagna kommandot som visas till höger om kommandoraden. När inget är skrivet och pekaren är över överlappande objekt: markerar nästa objekt där (klicka för att välja det) |
| {{key:Up}} {{key:Down}} | Bläddrar bland raderna du skrev tidigare (de senaste 100) |

## Rita och redigera

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+Z}} | Ångra det senaste kommandot |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om |
| {{key:Mod+A}} | Markerar varje objekt du kan redigera på den öppna fliken ({{cmd:SELECTALL}}). Om du har skrivit något på kommandoraden markeras den texten i stället |
| {{key:Delete}} | Raderar markerade objekt ({{cmd:ERASE}}), om du inte har skrivit något på kommandoraden |
| {{key:Backspace}} | Raderar markerade objekt när kommandoraden inte har markören; på kommandoraden tar den bort det du skrev |
| {{key:Esc}} | När inget kommando körs: rensar markeringen ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Sparar en kopia i ritningens format (DWG eller DXF) |
| {{key:Mod+Shift+S}} | Spara som: välj DWG eller DXF, och spara sedan en kopia |
| {{key:Mod+O}} | Öppnar en DWG eller DXF |
| {{key:Mod+P}} | Plottar till PDF |

Ångra, gör om, markera allt och plotta gör ingenting medan ett kommando körs: tryck först på {{key:Esc}}.

## Kopiera, klipp ut och klistra in

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+C}} | Kopierar markeringen till urklippet ({{cmd:COPYCLIP}}). Inget markerat: CadCraft frågar efter objekt |
| {{key:Mod+X}} | Klipp ut: kopierar markeringen och raderar den sedan ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Klistra in: kopian följer pekaren; klicka, eller skriv en punkt, för att placera den ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Klistra in på plats: på de koordinater den kopierades från ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicera: en kopia av markeringen följer pekaren; klicka för att placera den, {{key:Esc}} lämnar ingenting ({{cmd:DUPLICATE}}) |

Samma åtgärder finns i verktygsfältets grupp {{ui:Redigera}} ({{ui:Kopiera}}, {{ui:Klistra in}}) och i menyn {{ui:Mer}}. Medan ett annat kommando körs: avsluta det eller tryck först på {{key:Esc}}; att trycka på {{key:Mod+V}} eller {{key:Mod+D}} igen när en kopia följer pekaren börjar om. När du har skrivit något på kommandoraden, eller ett kommando frågar efter text, kopierar, klipper ut och klistrar dessa tangenter in den texten i stället. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

## Växlar

| Tangent | Växel | Knapp i statusfältet |
|---|---|---|
| {{key:F3}} | Objektfångst på eller av | {{ui:Fångst}} |
| {{key:F7}} | Rutnät på eller av | {{ui:Rutnät}} |
| {{key:F8}} | Ortogonalt på eller av | {{ui:Ortogonalt}} |
| {{key:F10}} | Polär spårning på eller av | {{ui:Polär}} |
| {{key:F11}} | Spårning av objektfångst på eller av | {{ui:Spår}} |
| {{key:F12}} | Dynamisk inmatning på eller av | {{ui:Dyn}} |

:::mac
På en Mac är F3, F7 och F8 vanligtvis Mission Control och mediatangenter. Håll **fn** intryckt tillsammans med dem, eller slå på vanliga funktionstangenter i Systeminställningar, som beskrivs i [Tangentbord, möss och styrplattor](common:keys). Knapparna i statusfältet fungerar alltid.
:::

:::firefox
F7 i Firefox kan också fråga om du vill slå på caret browsing. Välj **Nej**, och använd knappen {{ui:Rutnät}} om den fortsätter att fråga.
:::

## Hjälp

| Tangent | Vad den gör |
|---|---|
| {{key:F1}} | Öppnar eller stänger den här hjälpen, bredvid ritningen. Den fungerar även medan ett kommando körs, och når aldrig kommandoraden. |
| {{key:Esc}} | Med markören i hjälppanelen: rensar sökningen, eller stänger panelen |

Knappen {{ui:Hjälp}} i fältet högst upp gör samma sak som {{key:F1}}. Medan du skriver i hjälpens sökruta når inget tangenttryck kommandoraden. Klicka på ritningen för att ge tangenterna tillbaka till CadCraft; panelen förblir öppen bredvid den.

:::mac
På ett Mac-tangentbord: håll **fn** intryckt och tryck på F1, eller klicka på {{ui:Hjälp}}.
:::

## Skärm

| Tangent | Vad den gör |
|---|---|
| {{key:Ctrl+Shift+F}} | Växlar mellan normal vy, helskärm och helskärm med fälten dolda. Det här använder Control-tangenten på varje dator, även Mac. |
| {{key:Left}} {{key:Right}} | Med en flik under ritningen i fokus: föregående eller nästa flik |

I helskärm kan webbläsaren använda den första {{key:Esc}} för att lämna helskärmen. Tryck på {{key:Esc}} igen för att avbryta ett kommando.

## Dialogrutor

| Tangent | Vad den gör |
|---|---|
| {{key:Esc}} | Stänger dialogrutan ({{ui:Plotta till PDF}}, eller en fråga som "Osparade ändringar", där det betyder {{ui:Avbryt}}) |
| {{key:Tab}} | Flyttar mellan dialogrutans inställningar och knappar |

Medan en dialogruta är öppen är ritningens tangenter avstängda.

## Panelfält

I en ruta i den högra eller vänstra panelen:

| Tangent | Vad den gör |
|---|---|
| {{key:Enter}} | Tillämpar värdet och lämnar rutan |
| {{key:Esc}} | Återställer det gamla värdet och lämnar rutan |
| {{key:Tab}} | Tillämpar och går till nästa ruta |

Medan en ruta har markören skrivs bokstäver i den, inte på kommandoraden.

## Mus

| Åtgärd | Vad den gör |
|---|---|
| Klick | Väljer en punkt när ett kommando frågar efter en; väljer ett objekt när det frågar efter objekt; annars markeras ett objekt, eller ett handtag |
| Shift+klick | Tar bort ett markerat objekt från markeringen (med {{ui:Klicka på objekt}} satt till {{ui:Ersätter markeringen}} i [Inställningar](topic:settings): lägger till det). När du väljer en punkt: ignorerar objektfångster för det klicket |
| Klicka på tomt utrymme, klicka sedan igen | En markeringsruta: vänster till höger är ett fönster, höger till vänster ett korsande val |
| Dra på tomt utrymme | Ett lasso: rör du dig åt höger först är det ett fönster, vänster först ett korsande val; {{key:Space}} medan du drar växlar mellan fönster, korsande och staket; {{key:Esc}} släpper det (LASSOMODE 0, eller Inställningar, gör det till rektangel igen) |
| Dra genom delar i TRIM eller EXTEND | Trimmar (eller förlänger) varje del som banan korsar; håll {{key:Shift}} för det andra läget |
| Dra ett handtag | Flyttar handtaget (eller klicka på handtaget och sedan där det ska ta vägen) |
| Dubbelklicka på text | Markerar den och sätter markören i dess {{ui:Text}}-ruta i den högra panelen |
| Högerklick | Enter. Under en handtagsflyttning eller en markeringsruta: avbryter den |
| Dra med högerknappen | Panorerar |
| Hjul | Zoomar in och ut kring korset |
| Dra med hjulet (mittknappen) | Panorerar |
| Dubbelklicka på hjulet | Zoomar till hela ritningen (utsträckning) |
| Släpp en DWG eller DXF på ritningen | Öppnar den |

På styrplatta eller pekskärm, se [Mus, styrplatta och touch](topic:mouse-trackpad-touch).

## Tangenter som webbläsaren behåller

{{key:Mod+N}}, {{key:Mod+W}} och {{key:Mod+T}} tillhör alltid webbläsaren. CadCraft använder dem inte: använd {{ui:Ny}} eller skriv `NEW` för en ny ritning. CadCraft:s urklipp är eget: {{key:Mod+C}} och {{key:Mod+V}} kopierar objekt mellan CadCraft-ritningar och flikar, inte till eller från andra program.

:::mac
Om {{key:Mod+Y}} öppnar webbläsarens historik i stället för att göra om, använd {{key:Mod+Shift+Z}} eller knappen {{ui:Gör om}}.
:::

## Var Flytta finns

Flytta är kommandot `MOVE` (tangent {{key:M}}): välj objekten, och sedan en baspunkt och en andra punkt eller ett inskrivet avstånd. `ALIGN` och `DISTRIBUTE` finns också. BimCraft använder samma namn för samma jobb på byggnadselement, men dess {{key:M}} är Mät: dess Flytta är {{key:Shift+M}}.
