---
title: Ordna en ritning med lager
summary: Skapa lager för väggar, dörrar och noteringar, ange färger, gör ett lager aktuellt, och stäng av, frys, lås eller undanta lager från utskrift.
keywords: lager, layer, la, aktuellt lager, frys, tina, lås, av, på, plotta, plotta inte, färg, lagerinställningar, layiso, layuniso, isolera, layoff, layfrz, laymcur, layon, laythw, byt namn, rename, laymrg, sammanslå, laydel, ta bort lager
from: ba9f0617
---

## Vad du gör

Tre lager, Väggar, Dörrar och Noteringar, var och ett med sin egen färg, med objekt ritade på varje och flyttade mellan dem.

## Panelen Lager

Lager finns i panelen till vänster, under {{ui:Lager}}. Varje rad visar, från vänster till höger:

- en prick: ifylld för det **aktuella** lagret, dit nya objekt hamnar;
- ett färgprov;
- lagrets namn;
- fyra knappar: på/av (öga), frys (snöflinga), lås (hänglås) och plotta (skrivare).

Varje ritning har ett lager som heter `0`. Skriver du `LA` och trycker på {{key:Enter}} hoppar du till panelen.

## Skapa lager

1. Klicka på {{ui:Nytt lager}} ovanför listan. En namnruta öppnas.
2. Skriv `Väggar` och tryck på {{key:Enter}} (eller klicka på {{ui:Lägg till (A)}}).

Statusfältet säger "Lagret Väggar lades till och gjordes aktuellt." Det nya lagret får färg 7 (svart på det ljusa temat, vit på det mörka).

3. Klicka på {{ui:Nytt lager}} igen, skriv `Dörrar` och tryck på {{key:Enter}}.
4. Klicka på {{ui:Nytt lager}} igen, skriv `Noteringar` och tryck på {{key:Enter}}.

Noteringar är nu aktuellt.

## Ge varje lager en färg

1. Klicka på färgprovet på raden Väggar. Systemets färgväljare öppnas.
2. Välj en färg och bekräfta.

Färgprovet och allt på Väggar som är färgat {{ui:Enligt lager}} ändras.

:::note
En vald färg som motsvarar en av de 255 standardfärgerna för CAD lagras som det numret. Varje annan färg behålls exakt i CadCraft, men sparas som närmaste standardfärg i en DWG- eller DXF-fil.
:::

## Rita på ett lager

1. Klicka på namnet **Väggar** i listan. Dess prick fylls och statusfältet säger "Aktuellt lager: Väggar".
2. Rita en rektangel (`REC`). Den hamnar på Väggar.
3. Klicka på **Dörrar** och rita en båge (`A`). Den hamnar på Dörrar.

Du kan också välja aktuellt lager i {{ui:Aktuella inställningar}} till höger (när inget är markerat), under {{ui:Lager}}.

## Flytta objekt till ett annat lager

1. Markera objekten.
2. I den högra panelen väljer du det nya lagret i {{ui:Lager}}.

De flyttas till lagret och får dess färg om deras färg är {{ui:Enligt lager}}.

## Av, frys, lås och plotta

| Knapp | Vad den gör |
|---|---|
| På/av (öga) | Döljer lagrets objekt. De kan inte ses, markeras eller fångas. |
| Frys (snöflinga) | Samma effekt som av i CadCraft. Hålls separat eftersom andra program behandlar dem olika, och inställningen sparas. |
| Lås (hänglås) | Objekten förblir synliga och du kan fånga dem, men de kan inte markeras eller ändras. Bra för en bakgrund du spårar över. |
| Plotta (skrivare) | När knappen är nedtryckt visas lagret på skärmen men **utelämnas från utskrifter** och PDF:er. Använd det för konstruktionslinjer och noteringar till dig själv. |

För muspekaren över en knapp för att se vad den gör ("Stäng av", "Frys", "Lås", "Plotta inte detta lager").

Du kan inte stänga av det aktuella lagret: statusfältet säger "Det här är det aktuella lagret. Gör ett annat lager aktuellt först." Att klicka på ett lagers namn för att göra det aktuellt slår även på det och tinar det.

Varje lagerändring, i panelen eller med ett kommando, är ett ångra-steg: {{key:Mod+Z}} återställer den.

## Arbeta med lager genom att välja objekt

Du behöver inte veta ett lagers namn: välj ett objekt på det. Skriv kommandot, eller öppna {{ui:Verktyg}} överst i panelen {{ui:Lager}}.

| Kommando | Vad det gör |
|---|---|
| {{cmd:LAYISO}} | Markera objekt, tryck på {{key:Enter}}: bara deras lager förblir på, alla andra lager stängs av. Om det aktuella lagret är avstängt blir ett av de isolerade lagren aktuellt. |
| {{cmd:LAYUNISO}} | Slår på igen de lager som senaste {{cmd:LAYISO}} stängde av, och återställer det aktuella lager det ändrade. |
| {{cmd:LAYOFF}} | Klicka på objekt efter varandra: varje objekts lager stängs av. Skriv `U` för att ta tillbaka det senaste, {{key:Enter}} för att avsluta. |
| {{cmd:LAYFRZ}} | Samma sak, men lagren fryses. |
| {{cmd:LAYMCUR}} | Klicka på ett objekt: dess lager blir aktuellt (och slås på och tinas). Om ett objekt redan är markerat används det. |
| {{cmd:LAYON}} | Slår på alla lager. |
| {{cmd:LAYTHW}} | Tinar alla lager. |

Det aktuella lagret stängs aldrig av eller fryses på detta sätt: historiken säger det, och du kan göra ett annat lager aktuellt med {{cmd:LAYMCUR}} först. Om du väljer en blockreferens används referensens eget lager.

## Byt namn, slå samman och ta bort lager

- {{cmd:RENAME}}: skriv `LA`, det gamla namnet och det nya. Varje objekt på lagret följer med. (`B` byter namn på ett block på samma sätt, med varje referens till det.)
- {{cmd:LAYMRG}}: klicka på ett objekt på varje lager som ska slås samman (eller skriv `N` och ett namn), tryck på {{key:Enter}}, välj sedan målagret och svara `Y`. Objekten flyttas till målet – i modellen, på blad och inuti block – och de sammanslagna lagren tas bort.
- {{cmd:LAYDEL}}: välj ett objekt på lagret (eller `N` och dess namn) och svara `Y`. Lagret tas bort **med varje objekt på det**, överallt. Lager 0, DEFPOINTS och det aktuella lagret kan inte tas bort.

Varje är ett ångra-steg. Alla tre finns under {{ui:Verktyg}} överst i panelen {{ui:Lager}}.

1. Klicka på en väggslinje, skriv `LAYISO` och tryck på {{key:Enter}}. Bara Väggar förblir på.
2. Rita eller ändra det du behöver på Väggar.
3. Skriv `LAYUNISO` och tryck på {{key:Enter}}. Dörrar och Noteringar kommer tillbaka.

## Vanliga misstag

- **Nya linjer hamnade på fel lager.** Kontrollera vilken prick som är ifylld innan du ritar. Ett nytt lager blir aktuellt så snart du lägger till det.
- **Ett objekt går inte att markera.** Dess lager är låst, avstängt eller fruset.
- **Lagret skrivs fortfarande ut i ett annat program.** DXF R12 kan inte lagra "plotta inte". CadCraft behåller inställningen för sig själv när ritningen har ett blad, men andra program skriver ut det lagret.
- **Lagernamn i versaler efter sparning.** DXF R12 lagrar namn med versaler, så `Väggar` blir `VÄGGAR`, och mellanslag blir `_`. En sparad DWG behåller namnen som du skrev dem.
- **Byta namn, slå samman eller ta bort ett lager.** Använd {{cmd:RENAME}}, {{cmd:LAYMRG}} eller {{cmd:LAYDEL}} (även under {{ui:Verktyg}}): se nedan.

## Gruppera lager

Håll listan kort genom att lägga lager i mappar, till exempel Befintlig, Föreslagen och Installationer. Varje mapp fälls ihop, och dess reglage slår på eller av alla dess lager, fryser dem eller låser dem tillsammans. Det aktuella lagret stängs aldrig av.

Under {{ui:Verktyg}} i panelen Lager väljer du {{ui:Lägg till färdiga grupper}} för en uppsättning gjord för mindre bostadsarbeten, {{ui:Gruppera efter namn}} för att gruppera lager som delar ett prefix (`E-Väggar`, `E-Dörrar`), eller {{ui:Ny grupp}}. Dra ett lager till en mapp, eller använd listan ovanför lagren för det aktuella lagret. Skriv i {{ui:Hitta ett lager}} för att begränsa listan. `LAYGROUP` (`LG`) gör detsamma på kommandoraden.

För att byta namn på en grupp, dubbelklicka på dess namn (eller markera den och tryck på {{key:F2}}), skriv det nya namnet och tryck på {{key:Enter}}; {{key:Esc}} behåller det gamla, och {{cmd:UNDO}} återställer det. {{ui:Ny grupp}} finns under {{ui:Verktyg}} i panelen Lager.

Lagren själva ändras inte, så andra CAD-program ser dem som en vanlig platt lista. CadCraft sparar grupperna i filen.
