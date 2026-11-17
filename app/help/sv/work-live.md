---
title: Arbeta med en ritning tillsammans med Live TeamWork
summary: Vad som ändras i CadCraft när du är i en Live TeamWork-session från CadCraft Studio: andras markörer och markeringar, objekt som någon redigerar, värdens lås, din egen ångra-funktion, och att ansluta från en webbläsare på samma nätverk.
keywords: live, live teamwork, studio live, tillsammans, samarbeta, samredigera, session, dela live, anslut, markör, hållen, redigeras, lås, livelock, liveunlock, livehold, håll lager, håll område, hänglås, ångra, värd, assistent, samma fil, många personer, långsam, gräns, vem ändrade, senaste ändringar, redigeringslogg
from: 0497d2a3
---

## Vad du lär dig

Vad du ser och vad som händer med dina ändringar när flera personer arbetar i samma ritning samtidigt. CadCraft Studio startar och ansluter till Live TeamWork-sessionen (Dela live, Anslut); den här sidan handlar om själva ritningen.

## Alla ritar samtidigt

Rita och redigera som vanligt. Dina egna ändringar syns direkt, även innan de andra har dem, och deras ändringar visas på din skärm en stund efter att de gjort dem. Alla kommandon fungerar: rita, ändra, lager, block, blad, mått, villkor.

Två personer kan ändra samma objekt. När du ändrar olika saker, till exempel färgen och en slutpunkt på en linje, behålls båda ändringarna. När du ändrar samma sak vinner den senare ändringen.

Det som stannar hos dig ensam: det aktuella lagret, färgen och texthöjden för nya objekt, dina måttinställningar, din vy, delad skärm och ditt UCS. Ritningen är delad; hur du tittar på den är det inte.

## Andra personer i din ritning

- **Markörer:** varje persons pekare visas med deras namn i deras egen färg, och kommandot de kör. Du ser markörerna för personer som arbetar nära det som finns på din skärm.
- **Markeringar:** det någon har markerat är omritat i deras färg.
- **Redigeras:** ett objekt som någon har markerat har en etikett, till exempel "Ana redigerar". Du kan fortfarande ändra dess färg eller flytta det, men du kan inte ta bort, spränga eller skriva om det förrän de släpper det. Markerar du det får du veta vem som har det.
- **Vem som ändrade det sist:** markerar du ett objekt som någon annan ändrade i den här sessionen, säger kommandoraden vem, och vad ändringen var ("Ben ändrade det senast: CIRCLE."). Studios Live-panel listar varje senaste ändring under {{ui:Senaste ändringar}}. Ingenting av detta sparas i ritningen: det varar så länge sessionen gör.

## Håll ett lager eller ett område medan du arbetar där

I en stor ritning med flera personer, säg vilken del som är din för tillfället:

1. Skriv `LIVEHOLD` och tryck {{key:Enter}}.
2. Välj `L` och skriv ett lagernamn (Enter behåller det aktuella lagret), eller välj `A` och klicka på två hörn i ett område.
3. Andras ändringar på det lagret, eller av objekt i området, tas tillbaka och de får veta att du arbetar där. Du ser ditt område som en streckad ram; andra ser det i din färg med ditt namn, och lagren du håller listas längst upp till vänster i deras ritning.
4. `LIVEHOLD`, sedan `R`, släpper allt du håller. Att lämna sessionen släpper det också.

Vem som helst i sessionen kan hålla, värden inräknad; värdens lås gäller ovanpå. Ett hållen sparas aldrig i filen.

## När en ändring tas tillbaka

Värdens kopia av ritningen kontrollerar varje ändring. Några kan inte gå in, och CadCraft tar tillbaka dem på din skärm och säger varför på kommandoraden, till exempel:

- någon tog bort objektet, eller lagret eller blocket det behöver, precis innan du;
- någon redigerar objektet, eller håller dess lager eller området det ligger i;
- värden låste det;
- blocket du placerar har rensats, eller ett lager du tar bort har objekt kvar på sig.

## Ångra ångrar ditt eget arbete

{{key:Mod+Z}} och {{ui:Ångra}} ångrar ditt eget senaste kommando, hela det, och lämnar allas andras arbete ifred. Har någon ändrat samma sak sedan dess ångras inget och kommandoraden säger vem som ändrade den. {{key:Mod+Y}} gör om.

## Lås (värden)

Värden kan skydda objekt eller ett helt lager så att ingen ändrar dem, värden inräknad, tills de låses upp:

1. Markera objekten, skriv sedan `LIVELOCK` och tryck {{key:Enter}}. Eller skriv `LIVELOCK` utan markering och välj `L` för att låsa ett lager efter namn: objekt som läggs till på det lagret senare låses också.
2. Låsta objekt ritas streckade med etiketten "Låst av värden" på allas skärm.
3. `LIVEUNLOCK` låser upp dem på samma sätt.

Lås hör till sessionen: de upphör när den avslutas och sparas aldrig i filen.

## Anslut till samma fil

Om du öppnade samma fil som värden öppnade (från en delad mapp eller samma kopia), anslut från ditt eget CadCraft-fönster i Studio: öppna panelen {{ui:Nyttig last}} och använd {{ui:Anslut här}} med värdens kod. Endast de ändringar som gjorts sedan värden öppnade den färdas, så en stor ritning är redo på en gång. Om din fil är en annan ersätter värdens ritning den på din skärm (din fil ligger kvar som den är). Det här fungerar bara så länge din ritning är oförändrad sedan du öppnade den.

## Assistenter i en live-session

En assistent som är ansluten till ditt CadCraft-fönster (se hjälpen om att arbeta med AI-assistenter) ansluter till sessionen som en egen deltagare, och visas för alla som "Assistent (via <ditt namn>)". Värden släpper in den, som en person; värdens egen assistent ansluter direkt. Dess ändringar har egen ångra-funktion: din {{key:Mod+Z}} ångrar ditt arbete, och assistentens ångra ångrar bara dess egna. Den lämnar sessionen när du kopplar från den eller lämnar, och den kan bara arbeta i sessionen medan du kan redigera.

## Anslut från en webbläsare

En medarbetare utan Studio kan skanna bilden under värdens kod med en telefon, surfplatta eller dator på samma nätverk. CadCraft öppnas i webbläsaren, frågar efter ditt namn på kommandoraden, och fylls med värdens ritning när värden släpper in dig. En inbjudningslänk gör att någon kan ansluta från ett annat nätverk: värden behöver en plats i Team Cloud Plan för appen, alla andra ansluter gratis, och länken fungerar bara så länge värdens session är öppen.

## Många personer i en ritning

Varje ändring går till alla i sessionen, så ju fler personer, desto längre tid tar varje ändring att nå var och en, och långsammare datorer och anslutningar släpar efter först. En sessions vanliga storlek är 20 personer; värden kan tillåta fler för en viss session (se hjälpen om att arbeta tillsammans live). Om ritningen känns långsam med många personer hjälper färre personer, färre som redigerar samtidigt, eller en bättre anslutning.

## När sessionen avslutas

Bara värden sparar ritningen. När värden avslutar sessionen behåller alla andra en osparad kopia: spara den om du vill behålla den.

:::note
Något som tagits tillbaka ritas ovanpå objekten runt det på din egen skärm tills du öppnar ritningen igen. Skraffering och fyllda objekt som överlappar kan se annorlunda ut än värdens kopia; ritningen i sig är densamma.
:::
