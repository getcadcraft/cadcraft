---
title: Trimma och förläng
summary: Klipp av linjer där andra korsar dem, och förläng dem till andra, en bit i taget eller många på en gång genom att dra en bana genom dem.
keywords: trimextendmode, fönsterdragning, trimma, förläng, tr, ex, snabbtrimning, dra, frihand, bana, staket, korsande, shift, skärkanter, gränskanter, edgemode, läge, standard, snabb, radera, förhandsvisning, väggar, städning
from: 25fbc5bd
---

## Vad du lär dig

Hur {{cmd:TRIM}} och {{cmd:EXTEND}} fungerar, och de snabba sätten att använda dem: dra genom många bitar på en gång, håll ned {{key:Shift}} för att växla mellan att trimma och att förlänga, och se vad som försvinner innan du klickar.

## Trimma en bit

1. Rita en lång vågrät linje och två korta linjer som korsar den.
2. Skriv `TR` och tryck på {{key:Enter}}. Historiken säger `Aktuella inställningar: Snabbläge, kanter: Ingen förlängning`.
3. Vila pekaren på den långa linjen mellan de två korta. Den biten blir grå och streckad: det är den som försvinner.
4. Klicka. Biten försvinner.
5. Tryck på {{key:Enter}} för att avsluta kommandot.

I snabbläge (standard) är varje synligt objekt en skärkant, så du väljer aldrig kanter först. Klicka på biten du vill ta bort. Ett objekt som inget korsar raderas helt, och historiken säger det.

## Trimma många bitar i ett drag

1. Rita en lång vågrät linje och tio korta lodräta linjer som korsar den.
2. Skriv `TR` och tryck på {{key:Enter}}.
3. Tryck ned musknappen ovanför den långa linjen, till vänster om den första lodräta linjen, och dra över alla tio ovanför den långa linjen.

Medan du drar visas banan som en streckad linje, och varje bit den har korsat blir grå. Släpp: alla tio övre bitarna trimmas i ett steg. Skriv `U` och tryck på {{key:Enter}} för att lägga tillbaka dem alla på en gång.

:::tip
Du kan också klicka på två tomma platser: linjen mellan dem fungerar som en dragen bana. Skriv `F` (Staket) för att i stället klicka på en serie punkter, och tryck sedan på {{key:Enter}}.
:::

:::touch
Dra med ett finger på samma sätt. Ett tryck på en bit trimmar den.
:::

## Förläng i stället, med Shift

1. Rita en lodrät linje, och fem korta vågräta linjer till vänster om den som slutar innan den.
2. Skriv `TR` och tryck på {{key:Enter}}.
3. Håll ned {{key:Shift}}. Vila pekaren på en kort linje: den del den skulle växa med visas grå och streckad.
4. Fortfarande med {{key:Shift}} nedtryckt, dra nedåt genom de fem korta linjerna.

Alla fem går nu fram till den lodräta linjen. {{key:Shift}} fungerar tvärtom i {{cmd:EXTEND}} (`EX`): ett klick förlänger, ett {{key:Shift}}+klick trimmar. Förläng förlänger änden närmast där du klickar eller där banan korsar.

## Trimma inom ett fönster

1. Skriv `TR` och tryck på {{key:Enter}}.
2. Skriv `C` och tryck på {{key:Enter}}.
3. Klicka på två hörn runt bitarna som ska tas bort.

Varje bit som ligger åtminstone delvis inne i fönstret trimmas.

Om du vill ha ett fönster bara genom att dra, utan att skriva `C`: {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Dragning för att trimma och förlänga}} ›
{{ui:Ett fönster}}. Tryck sedan på en tom plats och dra för att rita en ruta. Varje bit den berör trimmas (eller förlängs, i {{cmd:EXTEND}}, eller med {{key:Shift}}). {{ui:En bana}} (startläget) återställer den frihandsbanan. Inställningsraden i början av TRIM säger vilket läge som är på.

## Välj skärkanterna (standardläge)

Ibland ska bara en linje skära, till exempel en väggsida med många andra linjer som korsar den.

1. Skriv `TR` och tryck på {{key:Enter}}.
2. Skriv `O` (läge) och tryck på {{key:Enter}}, skriv sedan `S` (Standard) och tryck på {{key:Enter}}.
3. Vid `Välj skärkanter` klicka på kantlinjerna (eller dra ett fönster), och tryck sedan på {{key:Enter}}. Att trycka på {{key:Enter}} när inget är markerat gör varje objekt till en kant.
4. Klicka eller dra genom de bitar som ska tas bort.

Endast de valda kanterna skär, och ett objekt som ingen kant korsar lämnas i fred. Läget behålls tills du stänger sidan. Skriv `O` och sedan `Q` för att gå tillbaka till snabbläge. {{cmd:TRIMEXTENDMODE}} sätter det innan du börjar, precis som variabeln med det namnet gör på andra ställen: `0` Standard, `1` Snabb. `T` (skärkanter) väljer nya kanter när som helst. I {{cmd:EXTEND}} är det `B` (gränskanter).

## Kanter som skulle nå fram

1. Skriv `TR` och tryck på {{key:Enter}}.
2. Skriv `E` (Kant) och tryck på {{key:Enter}}, sedan `E` (Förläng) och tryck på {{key:Enter}}.

Nu räknas en skärlinje eller båge som stannar för kort som om den fortsatte: en kort linje skär där den skulle korsa om den vore längre. Skriv `E`, och sedan `N` (Ingen förlängning) för att gå tillbaka. Detta är samma sak som EDGEMODE 1 och 0.

## Radera utan att lämna

Skriv `R` (radera) och tryck på {{key:Enter}}, välj objekten som ska raderas och tryck på {{key:Enter}}. TRIM fortsätter.

## Vanliga misstag

- **En hel linje försvann.** I snabbläge raderas ett objekt som inget korsar. Skriv `U` för att få tillbaka det, eller byt till standardläge (`O`, `S`).
- **"Inget att trimma där: ingen vald kant korsar det objektet."** Standardläget skär bara vid de kanter du valt. Skriv `T` för att välja dem igen.
- **"Ingen gräns i den riktningen."** Förläng hittade inget framför. Klicka närmare änden som ska växa, eller slå på `E` (Kant, Förläng) för gränser som stannar för kort.
- **Dra ritade ett lasso i stället.** Ett drag trimmar bara medan TRIM eller EXTEND efterfrågar ett objekt. Utan att något kommando körs markerar ett drag (se [Lassomarkering](topic:lasso-selection)).
- **Bara linjer, bågar, cirklar och polylinjer kan trimmas.** Spräng ett block först för att trimma dess linjer.
