---
title: Markera objekt
summary: Välj objekt ett i taget, med ett fönster eller ett korsande fönster, före eller under ett kommando, och ta objekt ur en markering.
keywords: markera, markering, fönster, korsande, substantiv-verb, välj, alla, senaste, föregående, staket, ta bort, lägg till, tab, cykla, överlappande, snabbmarkering, filter, markera liknande, selectsimilar, shift, avmarkera, ctrl+a, pickfirst
from: 676508c7
---

## Vad du lär dig

Hur du väljer de objekt som ett kommando arbetar med. CadCraft har två sätt att arbeta, och båda är bra:

- **Markera först, sedan kommandot** (substantiv-verb). Markera objekt, skriv sedan `M` för Flytta. Kommandot tar din markering och går direkt vidare till nästa fråga.
- **Kommandot först, sedan markera** (verb-substantiv). Skriv `M`; kommandot frågar `Select objects:`; du markerar och trycker sedan på {{key:Enter}}.

## Välj ett objekt i taget

1. Klicka på en linje när inget kommando körs. Den markeras och dess handtag (små kvadrater) visas. Den högra panelen visar dess egenskaper.
2. Klicka på ett annat objekt. Det läggs till i markeringen.
3. Håll ned {{key:Shift}} och klicka på ett markerat objekt. Det tas bort från markeringen.
4. Tryck på {{key:Esc}}. Inget är markerat.

## Fönster och korsande

Klicka en gång på tomt utrymme, flytta, och klicka igen: en rektangel. Att trycka och dra ritar i stället ett frihandslasso, med samma två typer (se [Lassomarkering](topic:lasso-selection); Inställningar kan göra att ett drag ritar rektangeln). Vilka objekt du får beror på riktningen:

| Du flyttar | Låda | Markerar |
|---|---|---|
| Vänster till höger | Fönster | Bara objekt **helt inne i** lådan |
| Höger till vänster | Korsande | Objekt inne i lådan **och** objekt den rör |

1. Rita några överlappande linjer och cirklar.
2. Klicka på tomt utrymme till vänster om några objekt, flytta åt höger och klicka igen. Bara objekt som ligger helt inne markeras.
3. Tryck på {{key:Esc}}.
4. Klicka på tomt utrymme till höger, flytta åt vänster över några objekt och klicka igen. Allt som lådan rör markeras.
5. Håll ned {{key:Shift}} och rita en låda eller ett lasso över några markerade objekt. De tas bort från markeringen.

## Markera, kör sedan ett kommando

1. Markera två cirklar.
2. Skriv `M` och tryck på {{key:Enter}}.

Historiken säger `2 found`, och prompten går direkt till `Specify base point`. Slutför flytten (se [Flytta, kopiera, rotera, skala och spegla](topic:modify-objects)).

När ett kommando avslutas rensas markeringen, så nästa kommando börjar på nytt.

Kommandon som tar en markering på detta sätt: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} och {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} och {{cmd:CHAMFER}} frågar alltid efter objekt ett i taget i stället; {{cmd:TRIM}} och {{cmd:EXTEND}} tar ett klick eller en väg du drar genom delarna (se [Trimma och förläng](topic:trim-and-extend)).

## Kör ett kommando, markera sedan

1. Se till att inget är markerat ({{key:Esc}}).
2. Skriv `E` och tryck på {{key:Enter}}. Prompten lyder `Select objects:`.
3. Klicka på objekt, eller dra fönster och korsande. Historiken räknar varje val (`1 found`, `3 found`).
4. Tryck på {{key:Enter}}, tryck på {{key:Space}} eller högerklicka för att avsluta markeringen.

Objekten raderas och historiken anger hur många.

Vid en `Select objects:`-prompt kan du också skriva:

- `ALL`, sedan {{key:Enter}}: alla objekt du kan redigera på den öppna fliken.
- `L` (eller `LAST`), sedan {{key:Enter}}: det senast ritade objektet.
- `P` (Previous): objekten det senaste kommandot arbetade med, om de finns kvar.
- `F` (Fence): klicka eller skriv punkter längs en linje; varje objekt som linjen korsar läggs till. Tryck på {{key:Enter}} för att avsluta staketet; `U` tar tillbaka dess sista punkt.
- `W` (Window) eller `C` (Crossing): två hörn, oavsett åt vilket håll du drar.
- `R` (Remove): från och med nu tar klick, fönster och staket objekt **ut**. Prompten lyder `Remove objects:`. `A` (Add) växlar tillbaka.
- `?`: listan över dessa i historiken.

Dessa alternativ visas inte i prompten, precis som i AutoCAD.

## Välj ett av flera objekt som ligger ovanpå varandra

Där objekt överlappar eller nuddar varandra tar ett klick det närmaste. För att få ett annat:

1. Håll pekaren stilla över platsen.
2. Tryck på {{key:Tab}}. Nästa objekt där markeras, och statusfältet säger vilket det är (”2 av 3: Linje på lager Walls”).
3. Tryck på {{key:Tab}} igen tills det du vill ha är markerat, klicka sedan utan att flytta.

Om du flyttar pekaren börjar du om. Detta fungerar när inget kommando körs, vid `Select objects:` och överallt där ett kommando frågar efter ett objekt.

## Markera efter en regel: Snabbmarkering

{{cmd:QSELECT}} (`QS`, eller {{ui:Redigera}} › {{ui:Mer}} › {{ui:Snabbmarkering}}) markerar varje objekt som matchar en regel, till exempel varje cirkel med en radie under 50, eller varje blockreferens som heter DOOR-900.

1. Öppna {{ui:Snabbmarkering}}.
2. Välj {{ui:Objekttyp}} (listan räknar varje typ), och sedan {{ui:Egenskap}}: {{ui:Lager}}, {{ui:Färg}}, och för vissa typer {{ui:Längd}}, {{ui:Radie}}, {{ui:Area}}, {{ui:Texthöjd}}, {{ui:Textinnehåll}}, {{ui:Blocknamn}} eller {{ui:Skrafferingsmönster}}.
3. Välj {{ui:Operator}} och {{ui:Värde}}. `*` matchar med jokertecken (`DOOR-*`); {{ui:Markera allt}} tar varje objekt av typen. Antalet längst ned visar hur många som matchar medan du väljer.
4. {{ui:Hur det tillämpas}}: ta med matchningarna, eller allt annat. {{ui:Tillämpa på}} {{ui:Aktuell markering}} begränsar det du hade markerat; {{ui:Lägg till i aktuell markering}} lägger till i det.
5. Klicka på {{ui:Markera}}. Kör sedan kommandot du vill ha: det använder markeringen.

## Markera liknande

Markera ett eller flera objekt och skriv {{cmd:SELECTSIMILAR}} (`SIM`), eller välj {{ui:Redigera}} › {{ui:Mer}} › {{ui:Markera liknande}}. Varje objekt av samma typ på samma lager och med samma färg markeras; blockreferenser behöver också samma block, skraffering samma mönster. Skriv `SE` vid dess `Select objects`-prompt för att välja vad som måste matcha.

## Markera nu, använd senare

Skriv `SELECT` och tryck på {{key:Enter}}, välj objekt med något av sätten ovan, och tryck på {{key:Enter}}. De förblir markerade för nästa kommando, och `P` väljer dem igen vid en senare `Select objects:`-prompt.

## Markera allt

När inget kommando körs trycker du på {{key:Mod+A}}, eller väljer {{ui:Markera allt}} i verktygsfältets meny {{ui:Redigera}} › {{ui:Mer}}, för att markera varje objekt du kan redigera på den öppna fliken. Om du har skrivit något på kommandoraden markerar {{key:Mod+A}} i stället den texten: tryck på {{key:Esc}} för att rensa den först. Vid en `Select objects:`-prompt skriver du `ALL`. {{ui:Avmarkera}} i samma meny, eller {{key:Esc}}, rensar markeringen.

:::tip
Om du hellre vill att varje klick ersätter markeringen (och {{key:Shift}} lägger till i den), ställ in {{ui:Klick på objekt}} till {{ui:Ersätter markeringen}} i [CadCraft-inställningar](topic:settings).
:::

## Vad som inte kan markeras

- Objekt på ett lager som är **av**, **fruset** eller **låst**. Låsta objekt förblir synliga, och du kan fortfarande fånga dem, men du kan inte markera eller ändra dem.
- På en bladflik: modellen som visas inne i en vyport. Du markerar bladets egna objekt (ritningshuvudet, anteckningar, vyportramarna). För att redigera modellen går du till fliken {{ui:Modell}}.

## Radera snabbt

Markera objekt och tryck sedan på {{key:Delete}} (eller {{key:Backspace}} när kommandoraden inte har markören). På ett Mac-tangentbord fungerar tangenten märkt delete när du har klickat i ritningen; medan kommandoraden har markören trycker du fn och delete samtidigt. Detta kör {{cmd:ERASE}} på markeringen. Om inget händer har du skrivit något på kommandoraden: tryck på {{key:Esc}}, eller skriv `E` och tryck på {{key:Enter}} i stället.

## Vanliga misstag

- **Fönstret tog för lite.** Du drog från vänster till höger, vilket bara tar det som ligger helt inne. Dra från höger till vänster för ett korsande.
- **Ett klick på tomt utrymme startade en låda.** Ett klick på tomt utrymme startar ett fönster; det andra klicket avslutar det. Tryck på {{key:Esc}} eller högerklicka för att släppa det.
- **Ett klick på tomt utrymme släppte markeringen.** Det gör det, om du inte håller ned {{key:Shift}}. För att behålla markeringen vid ett sådant klick och rensa den bara med {{key:Esc}}, ställ in {{ui:Klick på en tom yta}} till {{ui:Behåller markeringen}} i [CadCraft-inställningar](topic:settings#clicking-an-empty-spot).
- **Kommandot använde objekt du inte menade.** Något var fortfarande markerat när du startade det. Tryck på {{key:Esc}} före ett kommando för att börja med inget markerat.
- **Inget är markerat efter ett kommando.** Det är avsiktligt: ett avslutat kommando rensar markeringen.
