---
title: Skravering og udfyldning af områder
summary: Udfyld et område med en ensfarvet farve eller et standardmønster ved at klikke inde i det eller ved at vælge lukkede figurer, sæt mønstrets skala og vinkel, og ændr en skravering bagefter.
keywords: skravering, bhatch, udfyldning, ensfarvet udfyldning, mønster, ansi31, ansi37, mursten, jord, net, snitlinjer, poché, ø, kontur, skala, vinkel
from: e7feb344
---

## Hvad du laver

Et vægsnit udfyldt med ANSI31-mønsteret, en søjle i det tom, og en ensfarvet udfyldning i søjlen.

## Skravér ved at klikke inde i et område

1. Tegn et rektangel (`REC`, `0,0`, `@2000,1200`) og en cirkel inde i det (`C`, `1000,600`, `300`). Klik på {{ui:Udstrækning}}.
2. Klik på {{ui:Skravering}} i gruppen {{ui:Tegn}}, eller skriv `H` og tryk {{key:Enter}}. Historikken siger, hvilket mønster der er aktuelt, for eksempel `Current hatch: ANSI31, scale 1, angle 0°`.
3. Skriv `P` og tryk {{key:Enter}}, skriv `ANSI31` og tryk {{key:Enter}}.
4. Skriv `SC` og tryk {{key:Enter}}, skriv `20` og tryk {{key:Enter}}. Mønsterstørrelser er på papir, så en tegning plottet i 1:20 vil have skala 20.
5. Ved `Pick internal point` klik inde i rektanglet, udenfor cirklen. Skraveringen vises som en forhåndsvisning.
6. Tryk {{key:Enter}}. Rektanglet bliver skraveret; cirklen indeni forbliver tom, fordi den er en ø.

Klik inde i flere områder, før du trykker {{key:Enter}}, for at lave dem til én skravering. `U` tager det sidste område tilbage.

## En ensfarvet udfyldning

1. Skriv `H` og tryk {{key:Enter}}.
2. Skriv `P`, tryk {{key:Enter}}, skriv `SOLID` og tryk {{key:Enter}}.
3. Klik inde i cirklen, og tryk derefter {{key:Enter}}.

## Skravér lukkede figurer, du vælger

I stedet for at klikke inde i, skriv `S` (Vælg objekter) ved `Pick internal point` og vælg lukkede polylinjer, cirkler eller lukkede ellipser, og tryk derefter {{key:Enter}}. Figurer inde i andre forbliver tomme på skift (den ydre skraveres, den næste indeni er tom, og så videre).

## Mønstre

Skriv `?` ved mønsterspørgsmålet for listen. De standard er ANSI31 til ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS og EARTH, og SOLID. I en tegning i tommer (eller med fod og tommer som længdeformat) bruges tommestørrelserne for mønstrene, som i AutoCAD; ellers millimeterstørrelserne.

{{ui:Vinkel}} (`A`) drejer hele mønstret: ANSI31 ved 90° hælder den den anden vej.

**Mønsterfiler.** Skriv `F` (Mønsterfil) ved `Pick internal point` og vælg en `.pat`-fil. Mønstrene i den føjes til listen; med mere end ét spørges du, hvilket der skal bruges. En fil uden et mønster CadCraft kan læse, siger det, og ethvert mønster den sprang over, tælles. Størrelser i en `.pat`-fil har ingen egen enhed, så de læses i tegningens enheder. Kun filer skrevet i det sædvanlige `.pat`-format er prøvet; ingen lavet af et andet program.

## Ændr en skravering

Vælg den (klik på en af dens linjer). I {{ui:Egenskaber}}: {{ui:Mønster}}, {{ui:Mønsterskala}} og {{ui:Mønstervinkel}}. Skraveringer fra åbnede tegninger viser deres mønster, når det er et af standardmønstrene; andre vises som en lys tone af deres farve.

## Almindelige fejl

- **»Ingen lukket kontur om det punkt.«** Der er et hul i konturen, eller en del af den er uden for skærmen: CadCraft ser kun på det, der er på skærmen. Luk hullet (zoom ind på hjørnerne), eller zoom ud.
- **»Mønsteret er for tæt til at tegne i denne skala.«** Linjerne ville ligge tættere, end tegningen kan vise. Brug en større skala: prøv plotskalaen (20 for 1:20).
- **Mønsteret ser enormt eller lillebitte ud.** Skalaen er i tegningsenheder pr. mønsterenhed; se trin 4 ovenfor.
- **Skraveringen holder op med at følge sin kontur.** En skravering lavet med {{cmd:HATCH}} bliver hos de objekter, den blev lavet af: flyt, drej eller skalér konturen, og skraveringen følger med; formgiv den med et greb, og skraveringen beregnes igen. Forbindelsen ophører, når konturen ikke længere lukker, når du selv formgiver skraveringen i hånden, eller når du beskærer den, og kommandolinjen siger det. Intet er tabt: skravér området igen for at forbinde det på ny.

## En skravering, der bliver ved sin kontur

En skravering du laver med `HATCH`, husker, hvad der afgrænser den. Flyt, drej eller skalér konturen, og skraveringen og dens mønster følger med. Træk i et greb for at formgive konturen, og skraveringen beregnes igen. Flyt skraveringen alene, og dens kontur følger med, som en udfyldt figur i et tegneprogram.

Forbindelsen ophører, og kommandolinjen siger det, hvis konturen ikke længere lukker, eller du formgiver skraveringen i hånden. Selve skraveringen bliver. Skriv `AS` mens du skraverer for at lave skraveringer, der står alene. Kopiér en skravering med dens kontur, så har kopien sin egen forbindelse.

`HATCHEDIT` (`HE`) ændrer mønster, skala, vinkel og oprindelse for en skravering og forbinder den til en kontur eller afslutter forbindelsen. Forbindelsen gemmes i DWG- og DXF 2000-filer. En DXF R12-fil har intet skraveringsobjekt, og forbindelser lavet i andre programmer læses ikke: brug `HATCHEDIT` og Forbind for dem.

En skravering, der ikke længere har nogen kontur (konturen blev slettet, eller filen kom uden den), kan få den tilbage: `HATCHGENERATEBOUNDARY` (`HGB`) tegner en lukket polylinje rundt om hver løkke i skraveringen og, hvis du svarer Ja, forbinder skraveringen til dem.

## En farveforløbsudfyldning

`GRADIENT` (`GD`) udfylder et område med et farveforløb i stedet for et mønster: de samme valg som `HATCH`, efter at den spørger typen (lineær, cylindrisk, sfærisk, halvkugleformet, buet, og hver af dem vendt), én farve med en tone eller to farver, vinklen, og centreret eller ej. I `HATCH` gør valgmuligheden `G` det samme. `HATCHEDIT` `G`, eller {{ui:Egenskaber}} under Farveforløb, ændrer et farveforløb eller gør en hvilken som helst skravering til et.

Et farveforløb vises på skærmen og i plots. Gem som DWG 2004 eller senere, og andre programmer får en rigtig farveforløbsskravering. DXF 2000 og DWG 2000 har ikke farveforløb: der beholder CadCraft det for sig selv, og andre programmer ser en ensfarvet udfyldning i den første farve.

## Beskær en skravering

`TRIM` beskærer en skravering ligesom ethvert andet objekt. Klik på skraveringen på den side af skærekanten, du vil fjerne: kanterne deler det skraverede område, og stykket fjernes. I hurtigtilstand er hvert objekt en skærekant; vælg kanterne først (valgmulighed `T`), når der er mange. En beskåret skravering er ikke længere forbundet med sin kontur, fordi den ikke længere udfylder den.
