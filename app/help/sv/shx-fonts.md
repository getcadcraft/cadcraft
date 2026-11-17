---
title: Rita text med egna SHX-typsnitt
summary: Ge CadCraft en mapp med SHX-typsnitt (eller välj filerna) och textstilarna som anger dem ritas i dem, på skärmen och i en plot eller PDF, med stilens höjd, breddfaktor och lutning.
keywords: shx, typsnitt, formtypsnitt, big font, bigfont, unifont, äldre, persiska, farsi, arabiska, textstil, saknat typsnitt, ersatt typsnitt, SHXFONTS, mapp, omvänd, visuell ordning, simplex, isocp
from: 14b0a4ab
---

Ritningar från andra program anger ofta **SHX-typsnitt** i sina textstilar, och en DWG innehåller dem inte. Utan typsnittet ritar CadCraft texten i sitt eget typsnitt, vilket är bra för vanlig latinsk text men inte för gamla typsnitt som mappar vanliga teckenkoder till andra bokstavsformer, till exempel äldre persiska anteckningar.

Ge CadCraft typsnitten, så ritar den texten i dem.

## Läs in dina typsnitt

Skriv {{cmd:SHXFONTS}} (`SHX`) och välj:

- {{ui:Mapp}} (CadCraft Studio): välj en mapp. Varje `.shx`-fil i den läses nu, och igen varje gång CadCraft startar.
- {{ui:Filer}} (webbläsaren): välj en eller flera `.shx`-filer. De sparas i den här webbläsaren och laddas aldrig upp.
- {{ui:Lista (L)}}: de typsnitt som är inlästa, och de som den öppna ritningen anger men som du inte har läst in.
- {{ui:Ta bort (R)}} och {{ui:Rensa}}: glöm ett typsnitt, eller alla.

CadCraft kan inte innehålla tredjepartstypsnitt, så det levererar aldrig några: de kommer från dig. En ritning anger bara sina typsnitt, och den behåller ingen kopia av dem.

## Vad som händer

Namnet på en textstils typsnitt matchas mot ett inläst typsnitt via dess namn, utan hänsyn till versaler, mapp och `.shx` (`SIMPLEX.SHX` hittar `simplex`). En text i en sådan stil ritas som linjer, på skärmen, i en plot och i en PDF, på textens egen plats, med dess höjd, rotation, breddfaktor och lutningsvinkel. Dess bredd är typsnittets egen, så justering till {{ui:Centrum}} och {{ui:Höger}}, radbrytning och val stämmer med vad du ser. En stil vars typsnitt inte är inläst behåller det inbyggda typsnittet, och när du öppnar en ritning som anger typsnitt du inte läst in säger kommandoraden det.

Stilen Standard räknas också: en ritning vars Standard-stil anger ett eget typsnitt behåller det.

## Typsnitt som redan är i visuell ordning

Många gamla persiska och arabiska SHX-typsnitt innehåller bokstäver som redan är formade för skärmen och ritas från vänster till höger, så en text skriven i logisk ordning blir baklänges. Skriv {{cmd:SHXFONTS}}, välj {{ui:Vänd (R)}}, och ange typsnittet: dess text läggs då ut med sista bokstaven först. Kör det igen för att ångra. Omkopplingen hör till typsnittet, sparas i den här webbläsaren och sparas inte i ritningen.

## Vad som inte täcks ännu

- Text med inbäddade formatkoder (färger, staplar i en MTEXT) förblir i det inbyggda typsnittet.
- Stora typsnitt (de med dubbelbyte) fyller i för koder som huvudtypsnittet saknar, men en text i en östasiatisk kodsida som CadCraft redan har gjort om till Unicode mappas inte tillbaka till typsnittets dubbelbytekoder.
- Typsnittsläsaren följer den publicerade beskrivningen av formatet och testades på typsnitt gjorda för CadCraft. Om ett av dina ritar fel, skicka oss typsnittet och ritningen.
