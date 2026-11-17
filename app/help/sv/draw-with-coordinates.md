---
title: Rita med koordinater
summary: Rita en exakt golvkontur genom att skriva absoluta, relativa och polära koordinater, samt med direkt avståndsangivelse.
keywords: line, pline, polylinje, koordinater, relativ, polär, absolut, direkt avstånd, @, skriva punkter, exakt, ortogonalt
from: 19e82350
---

## Det du ska skapa

Konturen av ett L-format rum, 6000 × 4500 med en urtagning på 2000 × 1500, ritad exakt, plus en vägg i 30 grader. Du använder alla fyra sätten att skriva en punkt. Arbeta i millimeter: en ritningsenhet motsvarar en millimeter.

Snabbreferensen för alla format finns i [Koordinat- och avståndsangivelse](topic:coordinate-entry).

## Innan du börjar

1. Öppna CadCraft. Om en ritning är öppen, klicka på {{ui:Ny}} först.
2. Tryck på {{key:Esc}} så att inget är markerat. Den högra panelen visar {{ui:Aktuella inställningar}}.
3. Ange {{ui:Enheter}} till {{ui:Millimeter}}. Inget ändras i storlek; det här talar bara om för blad och utskrifter vad en enhet betyder.

## Absoluta koordinater: första punkten

En absolut koordinat är en position mätt från origo, skriven som `x,y`.

1. Skriv `L` och tryck på {{key:Enter}}. Prompten lyder `Ange första punkt:`.
2. Skriv `0,0` och tryck på {{key:Enter}}.

Linjen dras nu från origo till korshåret. Koordinaterna i statusfältet visar avståndet och vinkeln från startpunkten när du rör dig.

## Relativa koordinater: @dx,dy

En relativ koordinat skrivs som `@dx,dy`: så långt åt sidan, så långt upp, från den senaste punkten. Negativa tal går åt vänster eller ned.

3. Skriv `@6000,0` och tryck på {{key:Enter}}. En linje på 6000 går åt höger.
4. Skriv `@0,3000` och tryck på {{key:Enter}}.
5. Skriv `@-2000,0` och tryck på {{key:Enter}}.
6. Skriv `@0,1500` och tryck på {{key:Enter}}.

Du ser fyra sammanhängande linjer som stiger längs rummets högra sida.

## Direkt avståndsangivelse: ett rent tal

När du skriver ett enda tal går CadCraft det avståndet i korshårets riktning. Slå på {{ui:Ortogonalt}} så att riktningen låses till vågrätt eller lodrätt.

7. Tryck på {{key:F8}}, eller klicka på {{ui:Ortogonalt}} i statusfältet. Statusfältet säger ”Ortogonalt på”.
8. Flytta korshåret till vänster om den senaste punkten. Gummibandet förblir vågrätt.
9. Skriv `4000` och tryck på {{key:Enter}}. Linjen går 4000 åt vänster.
10. Flytta korshåret under den senaste punkten.
11. Skriv `4500` och tryck på {{key:Enter}}. Du är tillbaka vid startpunkten.
12. Tryck på {{key:Enter}} på den tomma prompten för att avsluta kommandot.

:::mac
F8 kan styra mediauppspelning på ett Mac-tangentbord. Håll ned **fn** och tryck på F8, eller klicka på {{ui:Ortogonalt}}. Se [Tangenter, möss och styrplattor](common:keys).
:::

Du har nu en sluten L-formad kontur av sex separata linjer.

13. Klicka på {{ui:Utsträckning}} för att se allt.

## Polära koordinater: @avstånd<vinkel

En polär koordinat skrivs som `@avstånd<vinkel`. Vinklar anges i grader, mätta moturs från den positiva X-riktningen: 0 är höger, 90 är upp, 180 är vänster, 270 (eller -90) är ned.

14. Skriv `L` och tryck på {{key:Enter}}.
15. Skriv `6000,0` och tryck på {{key:Enter}} för att starta i det nedre högra hörnet.
16. Skriv `@2500<-30` och tryck på {{key:Enter}}. En linje på 2500 lämnar hörnet och går nedåt och åt höger, 30 grader under horisontalen.
17. Tryck på {{key:Enter}} för att avsluta kommandot.

En polär koordinat utan `@`, som `2500<30`, mäts från origo i stället för från den senaste punkten.

## Samma kontur som en polylinje

Sex separata linjer duger för många uppgifter, men en polylinje är ett enda objekt: den förskjuts, mäts och markeras som en helhet. Använd {{cmd:PLINE}} med samma inmatning.

1. Skriv `PL` och tryck på {{key:Enter}}.
2. Skriv `0,-6000` och tryck på {{key:Enter}} för att starta under den första konturen.
3. Skriv `@6000,0`, tryck sedan på {{key:Enter}}.
4. Skriv `@0,3000`, tryck sedan på {{key:Enter}}.
5. Skriv `@-2000,0`, tryck sedan på {{key:Enter}}.
6. Skriv `@0,1500`, tryck sedan på {{key:Enter}}.
7. Skriv `@-4000,0`, tryck sedan på {{key:Enter}}.
8. Skriv `C` och tryck på {{key:Enter}}. Polylinjen sluts och kommandot avslutas.
9. Klicka på den nya konturen. Den högra panelen visar ”Polylinje”, dess {{ui:Hörn}}, {{ui:Längd}} och, eftersom den är sluten, dess {{ui:Area}}.

Arean ska visa 24000000 (kvadratmillimeter, vilket är 24 kvadratmeter).

## Alternativ när du ritar

- I {{cmd:LINE}} och {{cmd:PLINE}}, skriv `U` och tryck på {{key:Enter}} för att ta tillbaka det senaste segmentet utan att lämna kommandot.
- I {{cmd:LINE}} stänger `C` tillbaka till första punkten när det finns minst två segment.
- I {{cmd:PLINE}} växlar `A` till bågsegment (varje båge fortsätter mjukt från segmentet före), och `L` växlar tillbaka till linjer. I bågläge är stängningsalternativet `CL`.
- Om du trycker på {{key:Enter}} vid `Ange första punkt:` i {{cmd:LINE}} startar det från den senaste punkten du angav, så att du kan fortsätta där du slutade.

## Vanliga misstag

- **Att skriva `6000,0` när du menade `@6000,0`.** Utan `@` mäts punkten från origo, inte från den senaste punkten, så linjen far iväg åt ett oväntat håll. I CadCraft är `x,y` alltid absolut. Skriv `U` och tryck på {{key:Enter}} för att ta tillbaka den.
- **Ett kommatecken som decimalpunkt.** Decimaler skrivs med punkt: `1250.5`. Ett komma skiljer alltid X från Y.
- **Den direkta avståndsangivelsen gick åt fel håll.** Ett rent tal följer korshåret. Flytta korshåret till den sida du vill ha innan du trycker på {{key:Enter}}, och slå på {{ui:Ortogonalt}} för raka linjer.
- **”Point or option keyword required.”** Punkt eller alternativ krävs. CadCraft förstod inte vad du skrev. Kontrollera om det finns mellanslag inne i talet eller ett saknat komma, och skriv det igen.
- **Fot och tum.** CadCraft läser bara vanliga tal. Skriv `150` för 12'-6" i en tumritning, eller `12.5` i en fotritning.
