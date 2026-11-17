---
title: Ordna en ritning med lager
summary: Skapa lager för väggar, dörrar och anteckningar, ange färger, gör ett lager aktuellt och stäng av, frys, lås eller hindra lager från att plottas.
keywords: lager, la, aktuellt lager, frys, tina, lås, av, på, plotta, plotta inte, färg, lageregenskaper, layiso, layuniso, isolera, layoff, layfrz, laymcur, layon, laythw, byt namn, laymrg, slå ihop, laydel, ta bort lager
from: cd033591
---

## Vad du ska skapa

Tre lager, Walls, Doors och Notes, vart och ett med sin egen färg, med objekt ritade på vart och ett och flyttade mellan dem.

## Panelen {{ui:Lager}}

Lager finns i panelen till vänster, under {{ui:Lager}}. Varje rad visar, från vänster till höger:

- en prick: fylld för det **aktuella** lagret, dit nya objekt hamnar;
- ett färgprov;
- lagrets namn;
- fyra knappar: på/av (öga), frys (snöflinga), lås (hänglås) och plotta (skrivare).

Varje ritning har ett lager som heter `0`. Om du skriver `LA` och trycker på {{key:Enter}} hoppar du till panelen.

## Skapa lager

1. Klicka på {{ui:Nytt lager}} ovanför listan. En namnruta öppnas.
2. Skriv `Walls` och tryck på {{key:Enter}} (eller klicka på {{ui:Lägg till (A)}}).

Statusfältet visar ”Lagret Walls lades till och gjordes aktuellt.” Det nya lagret får färg 7 (svart på ljust tema, vit på mörkt).

3. Klicka på {{ui:Nytt lager}} igen, skriv `Doors` och tryck på {{key:Enter}}.
4. Klicka på {{ui:Nytt lager}} igen, skriv `Notes` och tryck på {{key:Enter}}.

Notes är nu aktuellt.

## Ge varje lager en färg

1. Klicka på färgprovet på raden Walls. Systemets färgväljare öppnas.
2. Välj en färg och bekräfta.

Färgprovet och allt på Walls som är färgsatt {{ui:Enligt lager}} ändras.

:::note
En vald färg som motsvarar en av de 255 standardfärgerna i CAD sparas som det numret. Övriga färger behålls exakt i CadCraft, men sparas som närmaste standardfärg i en DWG- eller DXF-fil.
:::

## Rita på ett lager

1. Klicka på namnet **Walls** i listan. Dess prick fylls i och statusfältet visar ”Aktuellt lager: Walls”.
2. Rita en rektangel (`REC`). Den hamnar på Walls.
3. Klicka på **Doors** och rita en båge (`A`). Den hamnar på Doors.

Du kan också välja aktuellt lager i {{ui:Aktuella inställningar}} till höger (när inget är markerat), under {{ui:Lager}}.

## Flytta objekt till ett annat lager

1. Markera objekten.
2. I den högra panelen väljer du det nya lagret i {{ui:Lager}}.

De flyttas till det lagret och får dess färg om deras färg är {{ui:Enligt lager}}.

## Av, frys, lås och plotta

| Knapp | Vad den gör |
|---|---|
| På/av (öga) | Döljer lagrets objekt. De kan inte ses, markeras eller fångas. |
| Frys (snöflinga) | Samma effekt som av i CadCraft. Hålls åtskilda eftersom andra program hanterar dem olika, och inställningen sparas. |
| Lås (hänglås) | Objekten förblir synliga och du kan fånga dem, men de kan inte markeras eller ändras. Bra för en bakgrund som du spårar över. |
| Plotta (skrivare) | När den är intryckt visas lagret på skärmen men **utelämnas från plottar** och PDF-filer. Använd den för konstruktionslinjer och egna anteckningar. |

Håll muspekaren över en knapp för att se vad den gör (”Stäng av”, ”Frys”, ”Lås”, ”Plotta inte detta lager”).

Du kan inte stänga av det aktuella lagret: statusfältet säger ”Det är det aktuella lagret. Gör ett annat lager aktuellt först.” Att klicka på ett lagers namn för att göra det aktuellt slår också på det och tinar det.

Varje lagerändring, i panelen eller med ett kommando, är ett ångra-steg: {{key:Mod+Z}} återställer den.

## Arbeta med lager genom att välja objekt

Du behöver inte känna till ett lagers namn: välj ett objekt på det. Skriv kommandot, eller öppna {{ui:Verktyg}} överst i panelen {{ui:Lager}}.

| Kommando | Vad det gör |
|---|---|
| {{cmd:LAYISO}} | Markera objekt och tryck på {{key:Enter}}: endast deras lager förblir på, alla andra lager stängs av. Om det aktuella lagret stängs av blir ett av de isolerade lagren aktuellt. |
| {{cmd:LAYUNISO}} | Slår på igen de lager som senaste LAYISO stängde av, och återställer det aktuella lager som det ändrade. |
| {{cmd:LAYOFF}} | Klicka på objekt ett efter ett: varje objekts lager stängs av. Skriv `U` för att ta tillbaka det senaste, {{key:Enter}} för att avsluta. |
| {{cmd:LAYFRZ}} | Samma, men fryser varje lager. |
| {{cmd:LAYMCUR}} | Klicka på ett objekt: dess lager blir aktuellt (och slås på och tinas). Om ett objekt redan är markerat används det. |
| {{cmd:LAYON}} | Slår på alla lager. |
| {{cmd:LAYTHW}} | Tinar alla lager. |

Det aktuella lagret stängs aldrig av eller fryses på detta sätt: historiken säger det, och du kan först göra ett annat lager aktuellt med {{cmd:LAYMCUR}}. När du väljer en blockreferens används referensens eget lager.

## Byt namn på, slå ihop och ta bort lager

- {{cmd:RENAME}}: skriv `LA`, det gamla namnet och det nya. Alla objekt på lagret följer med. (`B` byter namn på ett block på samma sätt, med alla dess referenser.)
- {{cmd:LAYMRG}}: klicka på ett objekt på varje lager som ska slås ihop (eller skriv `N` och ett namn), tryck på {{key:Enter}}, välj sedan målslagret och svara `Y`. Objekten flyttas till målet — i modellen, på blad och inuti block — och de sammanslagna lagren tas bort.
- {{cmd:LAYDEL}}: välj ett objekt på lagret (eller `N` och dess namn) och svara `Y`. Lagret tas bort **tillsammans med alla objekt på det**, överallt. Lager 0, DEFPOINTS och det aktuella lagret kan inte tas bort.

Varje är ett ångra-steg. Alla tre finns under {{ui:Verktyg}} överst i panelen {{ui:Lager}}.

1. Klicka på en vägglinje, skriv sedan `LAYISO` och tryck på {{key:Enter}}. Endast Walls förblir på.
2. Rita eller ändra det du behöver på Walls.
3. Skriv `LAYUNISO` och tryck på {{key:Enter}}. Doors och Notes kommer tillbaka.

## Vanliga misstag

- **Nya linjer hamnade på fel lager.** Kontrollera vilken prick som är fylld innan du ritar. Ett nytt lager blir aktuellt så snart du lägger till det.
- **Ett objekt går inte att markera.** Dess lager är låst, avstängt eller fruset.
- **Lagret skrivs fortfarande ut i ett annat program.** DXF R12 kan inte lagra ”plotta inte”. CadCraft behåller inställningen själv när ritningen har ett blad, men andra program kommer att plotta lagret.
- **Lagernamn med versaler efter sparning.** DXF R12 lagrar namn med versaler, så `Walls` kommer tillbaka som `WALLS`, och mellanslag blir `_`. En sparad DWG behåller namnen som du skrev dem.
- **Byta namn på, slå ihop eller ta bort ett lager.** Använd {{cmd:RENAME}}, {{cmd:LAYMRG}} eller {{cmd:LAYDEL}} (även under {{ui:Verktyg}}): se nedan.

## Gruppera lager

Håll listan kort genom att lägga lager i mappar, till exempel Existing, Proposed och Services. Varje mapp kan fällas ihop, och dess reglage slår på eller av alla dess lager, fryser dem eller låser dem tillsammans. Det aktuella lagret stängs aldrig av.

I {{ui:Verktyg}} i panelen {{ui:Lager}} väljer du {{ui:Lägg till färdiga grupper}} för en uppsättning gjord för mindre bostadsprojekt, {{ui:Gruppera efter namn}} för att gruppera lager som delar ett prefix (`E-Walls`, `E-Doors`), eller {{ui:Ny grupp}}. Dra ett lager till en mapp, eller använd listan ovanför lagren för det aktuella lagret. Skriv i {{ui:Hitta ett lager}} för att begränsa listan. `LAYGROUP` (`LG`) gör detsamma på kommandoraden.

Lagren i sig ändras inte, så andra CAD-program ser dem som en vanlig platt lista. CadCraft sparar grupperna i filen.
