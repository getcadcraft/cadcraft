---
title: Forskyd, beskær, forlæng, afrund og affas vægge
summary: Lav enkeltlinjer om til dobbelte vægge med Forskyd, rens hjørnerne med Afrund, og skær og forlæng linjer med Beskær og Forlæng.
keywords: offset, trim, extend, fillet, chamfer, skråkant, bryd, breakatpoint, forlæng længde, vægge, hjørne, skær, forlæng, parallel, radius, oprydning
from: c6c5cbd0
---

## Hvad du laver

Et lille rum med 200 tykke vægge: indersiden tegnes, ydersiden forskydes, hjørnerne ryddes op, og en døråbning skæres gennem en væg.

## Tegn indersiden

1. Skriv `L` og tryk {{key:Enter}}.
2. Skriv `0,0` og tryk {{key:Enter}}.
3. Skriv `@5000,0` og tryk {{key:Enter}}.
4. Skriv `@0,4000` og tryk {{key:Enter}}.
5. Skriv `@-5000,0` og tryk {{key:Enter}}.
6. Skriv `C` og tryk {{key:Enter}}.
7. Klik {{ui:Udstrækning}}.

Du har fire separate linjer. (En lukket polylinje ville forskydes på én gang; separate linjer viser, hvordan Afrund rydder hjørner.)

## Forskyd ydersiden

1. Skriv `O` og tryk {{key:Enter}}. Ledeteksten lyder `Angiv forskydningsafstand [Gennem (T)] <Gennem (T)>:`.
2. Skriv `200` og tryk {{key:Enter}}.
3. Ved `Vælg objekt der skal forskydes` klikker du på den nederste linje.
4. Ved `Angiv punkt på den side der skal forskydes` klikker du et sted under den. En parallel linje vises 200 under.
5. Klik på den højre linje, og klik derefter til højre for den.
6. Klik på den øverste linje, og klik derefter over den.
7. Klik på den venstre linje, og klik derefter til venstre for den.
8. Tryk {{key:Enter}} for at afslutte kommandoen.

Du bør se fire ydre linjer, hver lige så lang som sin indre linje, så de ydre hjørner ikke mødes.

:::tip
Tryk {{key:Enter}} ved afstandsledeteksten for at bruge den sidste afstand igen. Skriv `T` for Gennem: så går hver kopi gennem det punkt, du klikker, uanset hvilken afstand det er.
:::

{{cmd:OFFSET}} virker på linjer, buer, cirkler og polylinjer. Forskydning af en lukket polylinje forskyder hele konturen, inklusive hjørnerne.

## Ryd de ydre hjørner op med Afrund

{{cmd:FILLET}} forbinder to linjer i et hjørne: den beskærer eller forlænger begge, så de mødes. Med en radius på 0 er hjørnet firkantet.

1. Skriv `F` og tryk {{key:Enter}}. Ledeteksten lyder `Vælg første linje [Radius]:`.
2. Hvis den sidste afrunding, du lavede, brugte en radius, skriv `R`, tryk {{key:Enter}}, skriv `0` og tryk {{key:Enter}}.
3. Klik på den ydre nederste linje tæt på dens højre ende.
4. Ved `Vælg anden linje` klikker du på den ydre højre linje tæt på dens nederste ende.

De to linjer mødes nu i et skarpt hjørne, og kommandoen slutter.

5. Tryk {{key:Enter}} for at gentage {{cmd:FILLET}}, og lav det næste hjørne.
6. Gentag, indtil alle fire ydre hjørner mødes.

Klik på hver linje på den del, du vil **beholde**. Med en radius over 0 tilføjer Afrund i stedet en bue mellem linjerne.

:::tip
Skriv `M` ved den første ledetekst for at lave alle fire hjørner på én gang, eller tegn ydersiden som én lukket polylinje og skriv `P`: hvert hjørne udføres samtidig. Hold {{key:Shift}} nede, mens du klikker på den anden linje, for et skarpt hjørne uden at ændre radius.
:::

## Affas et hjørne med Affas

{{cmd:CHAMFER}} skærer et hjørne af med en ret linje.

1. Skriv `CHA` og tryk {{key:Enter}}.
2. Skriv `D` og tryk {{key:Enter}}. Skriv `300` og tryk {{key:Enter}} for den første afstand, og tryk derefter {{key:Enter}} for også at bruge 300 til den anden.
3. Klik på den indre øverste linje tæt på dens venstre ende, og derefter på den indre venstre linje tæt på dens øverste ende.

Hjørnet skæres tilbage 300 langs hver linje, og en affasningslinje forbinder dem. Skriv `A` i stedet for `D` for at angive en længde på den første linje og en vinkel.

## Skær en døråbning med Beskær

Tegn først de to dørkarme hen over den nederste væg, og beskær derefter vægens linjer mellem dem.

1. Skriv `L` og tryk {{key:Enter}}.
2. Skriv `1000,200` og tryk {{key:Enter}}.
3. Skriv `@0,-600` og tryk {{key:Enter}}, og tryk derefter {{key:Enter}} igen.
4. Tryk {{key:Enter}} for at gentage {{cmd:LINE}}.
5. Skriv `1900,200` og tryk {{key:Enter}}.
6. Skriv `@0,-600` og tryk {{key:Enter}}, og tryk derefter {{key:Enter}} igen.

Du har nu to korte linjer, der krydser den nederste væg 900 fra hinanden.

7. Skriv `TR` og tryk {{key:Enter}}. Historikken siger `Aktuelle indstillinger: Hurtig tilstand, kanter: Ingen forlængelse`.
8. Klik på den indre nederste linje mellem de to karme. Det stykke forsvinder. (Hvil først markøren på det: stykket, der skal væk, bliver grårt og stiplet.)
9. Klik på den ydre nederste linje mellem de to karme. Det stykke forsvinder også.
10. Klik på den del af hver karm, der stikker op over væggen, og på den del under den.
11. Tryk {{key:Enter}} for at afslutte kommandoen.

Du bør se en 900 åbning i den nederste væg, med karmene, der lukker vægenderne.

I Hurtig tilstand (standard) beder Beskær dig ikke om at vælge skærekanter først: alle synlige objekter er skærekanter. Vælg det stykke, du vil have væk, eller træk en sti hen over flere stykker for at beskære dem alle på én gang. Skriv `U` og tryk {{key:Enter}} for at fortryde det sidste valg eller træk uden at forlade kommandoen. Vindue, kryds, valgte kanter og {{key:Shift}} for at forlænge står i [Beskær og forlæng](topic:trim-and-extend).

## Forlæng en linje til en anden

{{cmd:EXTEND}} forlænger en linje, bue eller polylinjeende, indtil den møder det næste objekt i den retning.

1. Skriv `L` og tryk {{key:Enter}}.
2. Skriv `1000,2000` og tryk {{key:Enter}}.
3. Skriv `@2000,0` og tryk {{key:Enter}}, og tryk derefter {{key:Enter}} igen. Linjen stopper 2000 før den højre væg.
4. Skriv `EX` og tryk {{key:Enter}}.
5. Klik på den nye linje tæt på dens højre ende.
6. Tryk {{key:Enter}} for at afslutte kommandoen.

Linjen løber nu til den indre flade af den højre væg. Alle synlige objekter er grænser; vælg tæt på den ende, der skal vokse. Inde i {{cmd:TRIM}} gør {{key:Shift}}+klik det samme.

## Bryd og forlæng længde

{{cmd:BREAK}} (`BR`, eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Bryd}}) skærer et hul uden en skærekant: klik på objektet, hvor hullet starter (det klik er første punkt), og klik derefter, hvor det slutter. På en cirkel går den del, der er mod uret fra første til andet punkt. `F` ved det andet spørgsmål lader dig angive første punkt igen, og {{cmd:BREAKATPOINT}} deler et objekt i to i ét punkt uden hul.

{{cmd:LENGTHEN}} (`LEN`) ændrer en længde i den ene ende:

1. Skriv `LEN` og tryk {{key:Enter}}. Klik på en linje for at se dens nuværende længde; ledeteksten spørger igen.
2. Vælg hvordan: `DE` (Delta: et beløb, der skal lægges til, negativt for at trække fra; `A` for en buevinkel), `P` (Procent: 50 halverer den), `T` (I alt: den længde, den skal have) eller `DY` (Dynamisk: træk enden).
3. Klik på hvert objekt tæt på enden, der skal flyttes. `U` tager det sidste tilbage; {{key:Enter}} afslutter.

Linjer, buer og åbne polylinjer (deres endesegment) kan forlænges.

## Almindelige fejl

- **En hel linje forsvandt.** Intet krydsede den, så Hurtig tilstand slettede den. Skriv `U` for at få den tilbage; kontrollér, at skærelinjen virkelig krydser den (zoom ind), og at den ikke ligger på et lag, der er slukket.
- **"Ingen grænse i den retning."** Forlæng fandt intet at løbe ind i. Vælg tættere på den ende, der skal vokse.
- **"Radius er for stor."** Buen ville løbe forbi enden af en af linjerne. Brug en mindre radius.
- **"Kun første eller sidste segment af en åben polylinje kan skæres tilbage."** Vælg to segmenter af polylinjen ved siden af hinanden, eller skriv `P` for at afrunde hvert hjørne af den.
- **Forskydningen gik til den forkerte side.** Siden er der, hvor du klikker, efter at have valgt objektet. Fortryd med {{key:Mod+Z}}, og klik på den anden side.
- **"Kan ikke forskyde så langt."** Forskydningen ville vende buen, cirklen eller polylinjen forkert. Brug en mindre afstand.
