---
title: Beskær og forlæng
summary: Skær linjer af, hvor andre krydser dem, og forlæng dem, så de møder andre, ét stykke ad gangen eller mange på én gang ved at trække en sti gennem dem.
keywords: trimextendmode, vinduestræk, beskær, forlæng, tr, ex, hurtig beskæring, træk, frihånd, sti, hegn, kryds, shift, skærekanter, grænsekanter, edgemode, tilstand, standard, hurtig, slet, forhåndsvisning, vægge, oprydning
from: 25fbc5bd
---

## Hvad du lærer

Hvordan {{cmd:TRIM}} og {{cmd:EXTEND}} virker, og de hurtige måder at bruge dem på: træk gennem mange stykker på én gang, hold {{key:Shift}} for at skifte mellem beskæring og forlængelse, og se, hvad der forsvinder, før du klikker.

## Beskær ét stykke

1. Tegn en lang vandret linje og to korte linjer på tværs af den.
2. Skriv `TR` og tryk {{key:Enter}}. Historikken siger `Aktuelle indstillinger: Hurtig tilstand, kanter: Ingen forlængelse`.
3. Hold markøren på den lange linje mellem de to korte. Det stykke bliver grå og stiplet: det er det, der vil forsvinde.
4. Klik. Stykket forsvinder.
5. Tryk {{key:Enter}} for at afslutte kommandoen.

I hurtig tilstand (standard) er hvert synligt objekt en skærekant, så du aldrig vælger kanter først. Klik på det stykke, du vil have væk. Et objekt, som intet krydser, slettes helt, og historikken siger det.

## Beskær mange stykker i ét træk

1. Tegn en lang vandret linje og ti korte lodrette linjer på tværs af den.
2. Skriv `TR` og tryk {{key:Enter}}.
3. Tryk museknappen over den lange linje, til venstre for den første lodrette linje, og træk hen over alle ti over den lange linje.

Mens du trækker, vises stien som en stiplet linje, og hvert stykke, den har krydset, bliver grå. Slip: alle ti øverste stykker beskæres i ét trin. Skriv `U` og tryk {{key:Enter}} for at sætte dem alle tilbage på én gang.

:::tip
Du kan også klikke på to tomme steder: linjen mellem dem virker som en trukket sti. Skriv `F` (Hegn) for i stedet at klikke en række punkter, og tryk derefter {{key:Enter}}.
:::

:::touch
Træk med en finger på samme måde. Et tryk på et stykke beskærer det.
:::

## Forlæng i stedet, med Shift

1. Tegn en lodret linje og fem korte vandrette linjer til venstre for den, der stopper før den.
2. Skriv `TR` og tryk {{key:Enter}}.
3. Hold {{key:Shift}} nede. Hold markøren på en kort linje: den del, den ville vokse med, vises grå og stiplet.
4. Hold stadig {{key:Shift}} nede, og træk ned gennem de fem korte linjer.

Alle fem går nu til den lodrette linje. {{key:Shift}} virker omvendt i {{cmd:EXTEND}} (`EX`): et klik forlænger, og et {{key:Shift}}+klik beskærer. Forlæng forlænger den ende, der er tættest på, hvor du klikker, eller hvor stien krydser.

## Beskær inde i et vindue

1. Skriv `TR` og tryk {{key:Enter}}.
2. Skriv `C` og tryk {{key:Enter}}.
3. Klik to hjørner rundt om de stykker, der skal fjernes.

Hvert stykke, der mindst delvist ligger inde i vinduet, beskæres.

For at få et vindue blot ved at trække, uden at skrive `C`: {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Træk for at beskære og forlænge}} › {{ui:Et vindue}}. Når du derefter trykker på et tomt sted og trækker, tegnes en boks, og hvert stykke, den rører, beskæres (eller forlænges, i {{cmd:EXTEND}}, eller med {{key:Shift}}). {{ui:En sti}} (udgangspunktet) gendanner den frihåndssti. Indstillingslinjen i starten af TRIM siger, hvilken der er aktiv.

## Vælg skærekanterne (Standard-tilstand)

Nogle gange skal kun én linje skære, f.eks. en vægflade med mange andre linjer, der krydser den.

1. Skriv `TR` og tryk {{key:Enter}}.
2. Skriv `O` (Tilstand) og tryk {{key:Enter}}, og skriv derefter `S` (Standard) og tryk {{key:Enter}}.
3. Ved `Vælg skærekanter` klik på kantlinjerne (eller træk et vindue), og tryk derefter {{key:Enter}}. Tryk {{key:Enter}} uden noget valgt, og hvert objekt bliver en kant.
4. Klik eller træk gennem de stykker, der skal fjernes.

Kun de valgte kanter skærer, og et objekt, som ingen kant krydser, lades være. Tilstanden bevares, indtil du lukker siden. Skriv `O`, og derefter `Q` for at vende tilbage til hurtig. {{cmd:TRIMEXTENDMODE}} sætter den, før du starter, ligesom variablen med det navn gør andre steder: `0` Standard, `1` Hurtig. `T` (Skærekanter) vælger nye kanter når som helst. I {{cmd:EXTEND}} er det `B` (Grænsekanter).

## Kanter, der ville nå

1. Skriv `TR` og tryk {{key:Enter}}.
2. Skriv `E` (Kant) og tryk {{key:Enter}}, og derefter `E` (Forlæng) og tryk {{key:Enter}}.

Nu tæller en skærelinje eller bue, der stopper for tidligt, som om den fortsatte: en kort linje skærer dér, hvor den ville krydse, hvis den var længere. Skriv `E`, og derefter `N` (Ingen forlængelse) for at skifte tilbage. Det er det samme som EDGEMODE 1 og 0.

## Slet uden at forlade

Skriv `R` (Slet) og tryk {{key:Enter}}, vælg de objekter, der skal slettes, og tryk {{key:Enter}}. TRIM fortsætter.

## Almindelige fejl

- **En hel linje forsvandt.** I hurtig tilstand slettes et objekt, som intet krydser. Skriv `U` for at få det tilbage, eller skift til Standard-tilstand (`O`, `S`).
- **» Intet at beskære der: ingen valgt kant krydser objektet. «** Standard-tilstand skærer kun ved de kanter, du valgte. Skriv `T` for at vælge dem igen.
- **» Ingen grænse i den retning. «** Forlæng fandt intet forude. Klik tættere på den ende, der skal vokse, eller slå `E` (Kant, Forlæng) til for grænser, der stopper for tidligt.
- **Trækket tegnede et lasso i stedet.** Et træk beskærer kun, mens TRIM eller EXTEND spørger efter et objekt. Når ingen kommando kører, vælger et træk (se [Lassovalg](topic:lasso-selection)).
- **Kun linjer, buer, cirkler og polylinjer kan beskæres.** Eksplodér først blokken for at beskære dens linjer.
