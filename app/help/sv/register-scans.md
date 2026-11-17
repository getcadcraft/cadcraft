---
title: Registrera flera skanningar till en
summary: Placera skanningar tagna från olika positioner i en gemensam ram med valda punktpar eller inskrivna mål, förfina dem med ICP, spara registreringen som ett projekt och exportera det registrerade molnet som LAS eller E57. Kommandot är REGISTERSCANS.
keywords: registrera, registrering, skanningar, punktmoln, icp, iterative closest point, mål, punktpar, stel transformation, justera, sammanfoga, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Vad du gör

Flera skanningar av samma plats (var och en från sin egen skannerposition) börjar i sina egna koordinater. Registrera dem: ge varje skanning en placering så att alla hamnar i samma ram, spara sedan det som ett projekt och skriv det registrerade molnet till en LAS- eller E57-fil.

## Placera skanningarna

1. Öppna dialogrutan (skriv `REGISTERSCANS` (eller `REGSCAN`)). {{ui:Lägg till skanningar…}} tar emot LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eller XYZ-filer, eller så släpper du dem på dialogrutan. Skanningar med olika enheter avvisas med en notering: konvertera en först.
2. Välj {{ui:Skanning att flytta}} och {{ui:Placera mot}}. Bilden visar varje skanning i ramen som den är nu, i en egen färg: {{ui:Plan}}, {{ui:Fram}} eller {{ui:Sida}}; dra för att panorera, använd hjulet för att zooma.
3. **Med punktpar.** Klicka på {{ui:Välj ett par}}, sedan en punkt på skanningen som ska flyttas, sedan samma plats på en annan skanning (ett hörn, ett mål, foten av en pelare). Gör detta minst tre gånger, med punkter som inte ligger på en linje och som är utspridda. Klicka på {{ui:Placera med par}}: skanningen placeras med en minstakvadratanpassning, och **Kvar** visar hur långt varje par fortfarande missar. Ett par med ett stort tal är ett dåligt val: ta bort det med krysset och placera om.
4. **Med mål.** Om en punkts verkliga koordinater är kända (inmätta mål) klickar du på {{ui:Välj, skriv sedan mål}}, klickar på punkten på dess skanning och skriver målets X, Y och Z i raden. Par och inskrivna mål kan blandas fritt.

## Förfina med ICP

Par ger en grov placering. {{ui:Förfina}} flyttar skanningen tills dess ytor sitter på den andra skanningens: först **punkt till punkt**, sedan **punkt till plan**. Tabellen visar varje steg med dess fel och hur många punkter som matchade; raden ovanför ritar hur felet sjunker. {{ui:Stopp}} avslutar körningen efter steget som pågår och behåller det som nåtts. {{ui:Ångra}} tar tillbaka hela körningen (eller den senaste placeringen); {{ui:Återställ}} sätter tillbaka skanningen till dess filkoordinater.

För att det ska gå snabbt på en bärbar dator arbetar ICP med en utglesad andel av punkterna ({{ui:Använda punkter}}, 5,000 till 60,000) och ignorerar matchningar längre bort än {{ui:Största matchningsavstånd}} (som standard 5% av skanningens storlek, och det krymper när det stabiliseras). Den behöver en grov placering först: skanningar som knappt överlappar rapporterar att de inte kan matchas. Ytor som bara är plana eller bara raka kan inte fixera en position längs sig själva; lägg då till par.

## Spara och exportera

- {{ui:Spara projekt}} skriver en liten `.ccscans.json`-fil: varje skannings namn, storlek och ett fingeravtryck av dess första 64 KB, tillsammans med dess transform. Den innehåller inga punkter. {{ui:Öppna projekt…}} hittar skanningsfilerna via dessa referenser (filerna måste läggas till först) och återställer varje transform.
- {{ui:Exportera LAS}} och {{ui:Exportera E57}} skriver en fil med alla skanningar på sin registrerade plats. Punkterna skrivs aldrig om i originalen; transformen tillämpas på vägen ut. Med {{ui:Läs alla punkter från filerna}} på läses varje fil på nytt för varje punkt (upp till 20 miljoner per skanning); av skrivs bara de punkter som visas i visaren.
- {{ui:Visa registrerat moln}} (CadCraft) skriver LAS-filen och kopplar den under ritningen på dess egna koordinater, precis som vilket moln som helst.

:::note
Inget laddas upp. Registreringen sker i filernas egna enheter och behåller millimeter: en LAS skrivs med en skala som passar (ned till 0.1 mm), en E57 med double-tal. Ett koordinatsystem förs över till LAS endast när alla skanningar anger samma EPSG-kod. E57-skrivaren är vår egen; den kontrolleras genom att dess filer läses tillbaka med denna läsare och med libE57Format.
:::
