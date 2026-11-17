---
title: Historik: versioner och vad som ändrats
summary: Se versionerna av en ritning (kopior som Studio sparar när du sparar, och molnets), öppna eller återställ en, och jämför två med det som ändrats visat i färg.
keywords: historik, versioner, versionshistorik, återställ, föregående version, ångra en sparning, jämför, jämför ritningar, dwgcompare, ändringar, tillagd, borttagen, ändrad, ögonblicksbild, säkerhetskopia, molnversioner
from: 141d37b3
---

## Vad du skapar

En titt på en tidigare version av en ritning, och en lista över vad som skiljer sig från nu: vad som lagts till, vad som tagits bort och vad som ändrats, markerat i färg på ritningen.

## Öppna Historik

Skriv `HISTORY` (eller `HIST`) och tryck på {{key:Enter}}, eller välj {{ui:Historik…}} i menyn {{ui:Mer}} i gruppen {{ui:Vy}}. Panelen öppnas bredvid ritningen och förblir öppen medan du arbetar, så att du kan panorera och zooma i ritningen med färgerna på.

Historik fungerar i CadCraft Studio. I en webbläsare säger panelen bara det.

## Var versionerna kommer ifrån

- **På den här datorn.** Varje gång du öppnar en ritning från en fil i Studio, och varje gång du sparar den, behåller Studio en kopia av filen i sin egen lagring på den här datorn. Den första kopian är {{ui:Som den öppnades}}: filen så som den var innan din första sparning över den. Studio behåller de senaste 25 kopiorna av varje ritning, och de äldsta går först när alla kopior tillsammans överstiger 400 MB. En sparning som inte ändrar något sparar ingen kopia. Inget laddas upp.
- **I molnet.** När du öppnar en ritning från dina molnfiler i Studio listar panelen även {{ui:I molnet}}: varje version molnet har, med dess nummer, vem som sparade den och anteckningen. Panelen läser bara dem. CadCraft skickar ännu inte sina egna sparningar till molnet, så det här är versionerna som sparats från andra enheter och från webben. Logga in igen i Studio om den säger att inloggningen gick ut.

En ritning du inte sparat än har inga kopior: spara den först.

## Öppna eller återställ en version

- {{ui:Öppna}} lägger den versionen i en egen flik. Din ritning berörs inte.
- {{ui:Återställ}} ersätter den här ritningen med den versionen. Den frågar först. Studio sparar en kopia av ritningen som den är nu i Historik (markerad {{ui:Före en återställning}}) innan den gör det, och inget skrivs till filen förrän du sparar. En återställning kan inte ångras med {{key:Mod+Z}}; använd kopian.

## Jämför

1. Klicka på {{ui:Jämför}} vid en version. Den jämförs med {{ui:Ritningen som den är nu}}; vill du i stället jämföra den med en annan version, välj den först i {{ui:Jämför med}}.
2. Läs resultatet under listan: hur många objekt som lagts till, tagits bort och ändrats, och en lista över dem. Klicka på ett objekt i listan för att flytta vyn dit.
3. På ritningen:
   - **gröna** objekt lades till,
   - **röda** objekt togs bort (de finns bara i den äldre versionen),
   - **orangea** objekt ändrades: den nya formen är heldragen och den gamla streckad.
4. {{ui:Visa på ritningen}} slår av och på färgerna; {{ui:Rensa färgerna}} tar bort resultatet. Att stänga panelen rensar dem också.

Listan säger vad som ändrats i ett ändrat objekt: dess text, att det flyttats, dess form, dess lager, färg, linjetyp eller linjetjocklek. Varje blad jämförs för sig; färgerna visas på det blad som är öppet.

:::note
En ritning har inget bestående nummer för varje objekt, så CadCraft matchar objekt efter vad de är: samma objekt på båda sidor är oförändrat; ett objekt av samma typ och lager som ligger inom sin egen storlek från ett gammalt objekt är samma objekt, ändrat; det som återstår läggs till eller tas bort. Ett objekt som flyttats långt från där det var visas som borttaget på ett ställe och tillagt på ett annat. En blockreferens räknar innehållet i sitt block.
:::

## Vanliga misstag

- **"Inga kopior än."** Studio behåller en kopia vid varje öppning och sparning av en ritning som har en fil på den här datorn. En ritning som öppnats från en webbläsarflik, eller som aldrig sparats, har inga.
- **Molnlistan saknas.** Den visas för en ritning som öppnats från molnet i Studio; en fil som öppnats från disken är inte en molnritning.
- **Allt ser ändrat ut.** Två versioner som sparats av olika program skriver samma ritning på olika sätt (namn på anonyma block, avrundning). Jämför versioner som sparats av CadCraft.
