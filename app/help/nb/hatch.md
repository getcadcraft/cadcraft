---
title: Skravur og fyll av områder
summary: Fyll et område med en heldekkende farge eller et standardmønster ved å klikke inni det eller ved å velge lukkede former, angi mønsterets skala og vinkel, og endre en skravur etterpå.
keywords: skravur, bhatch, fyll, heldekkende fyll, mønster, ansi31, ansi37, murstein, jord, nett, snittlinjer, poché, øy, avgrensning, skala, vinkel
from: 14399174
---

## Det du lager

Et veggsnitt fylt med mønsteret ANSI31, en søyle i det som står tom, og et heldekkende fyll i søylen.

## Skravur ved å klikke inni et område

1. Tegn et rektangel (`REC`, `0,0`, `@2000,1200`) og en sirkel inni det (`C`, `1000,600`, `300`). Klikk {{ui:Utstrekning}}.
2. Klikk {{ui:Skravur}} i gruppen {{ui:Tegn}}, eller skriv `H` og trykk {{key:Enter}}. Historikken viser hvilket mønster som er gjeldende, for eksempel `Gjeldende skravur: ANSI31, skala 1, vinkel 0°`.
3. Skriv `P` og trykk {{key:Enter}}, skriv `ANSI31` og trykk {{key:Enter}}.
4. Skriv `SC` og trykk {{key:Enter}}, skriv `20` og trykk {{key:Enter}}. Mønsterstørrelser gjelder på papir, så en tegning som plottes i 1:20 skal ha skala 20.
5. Ved `Angi indre punkt` klikker du inni rektangelet, utenfor sirkelen. Skraveringen vises som en forhåndsvisning.
6. Trykk {{key:Enter}}. Rektangelet er skravert; sirkelen inni står tom, fordi den er en øy.

Klikk inni flere områder før du trykker {{key:Enter}} for å gjøre dem til én skravur. `U` angrer det siste området.

## Et heldekkende fyll

1. Skriv `H` og trykk {{key:Enter}}.
2. Skriv `P`, trykk {{key:Enter}}, skriv `SOLID` og trykk {{key:Enter}}.
3. Klikk inni sirkelen, og trykk deretter {{key:Enter}}.

## Skravur av lukkede former som velges

I stedet for å klikke inni, skriv `S` (Velg objekter) ved `Angi indre punkt`, velg lukkede polylinjer, sirkler eller lukkede ellipser, og trykk deretter {{key:Enter}}. Former inni andre former blir stående tomme annenhver gang (den ytre skraveres, den neste blir tom, og så videre).

## Mønstre

Skriv `?` ved mønsterspørsmålet for å få listen. Standardmønstrene er ANSI31 til ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS og EARTH, og SOLID. I en tegning med tommer (eller med fot og tommer som lengdeformat) brukes tommestørrelsene for mønstrene, slik som i AutoCAD; ellers brukes millimeterstørrelsene.

{{ui:Vinkel}} (`A`) dreier hele mønsteret: ANSI31 ved 90° skråner den andre veien.

**Mønsterfiler.** Skriv `F` (Mønsterfil) ved `Angi indre punkt` og velg en `.pat`-fil. Mønstrene i den legges til i listen; med flere mønstre blir du spurt hvilket som skal brukes. En fil uten mønstre som CadCraft kan lese, får melding om det, og alle mønstre som ble hoppet over, telles. Størrelser i en `.pat`-fil har ingen egen enhet, så de leses i tegningens enheter. Bare filer skrevet i det vanlige `.pat`-formatet er prøvd; ingen laget av andre programmer.

## Endre en skravur

Velg den (klikk på en av linjene i den). I {{ui:Egenskaper}}: {{ui:Mønster}}, {{ui:Mønsterskala}} og {{ui:Mønstervinkel}}. Skraveringer fra åpnede tegninger viser mønsteret sitt når det er et av standardmønstrene; andre vises som en lys tone av fargen sin.

## Vanlige feil

- **«Ingen lukket avgrensning rundt dette punktet.»** Det er et hull i konturen, eller en del av den er utenfor skjermen: CadCraft ser bare på det som er på skjermen. Lukk hullet (zoom inn på hjørnene), eller zoom ut.
- **«Mønsteret er for tett til å tegnes i denne skalaen.»** Linjene ville ligget tettere enn tegningen kan vise. Bruk en større skala: prøv plottskalaen (20 for 1:20).
- **Mønsteret ser enormt eller veldig lite ut.** Skalaen oppgis i tegningsenheter per mønsterenhet; se trinn 4 over.
- **Å flytte konturen flytter ikke skraveringen.** En skravur er ikke knyttet til avgrensningen sin. Flytt begge, eller skravér på nytt.

## En skravur som følger avgrensningen

En skravur laget med `HATCH` husker hva den er avgrenset av. Flytter, dreier eller skalerer du avgrensningen, følger skraveringen og mønsteret med. Drar du et håndtak for å forme om avgrensningen, beregnes skraveringen på nytt. Flytter du skraveringen alene, følger avgrensningen med, som en fylt form i et tegneprogram.

Koblingen opphører, og kommandolinjen sier fra om det, hvis avgrensningen ikke lenger er lukket, eller hvis skraveringen formes om for hånd. Skraveringen selv blir stående. Skriv `AS` under skravering for å lage skraveringer som står alene. Kopierer du en skravur med avgrensningen, får kopien sin egen kobling.

`HATCHEDIT` (`HE`) endrer mønster, skala, vinkel og opprinnelse for en skravur, og knytter den til en avgrensning eller opphever koblingen. Koblingen lagres i DWG- og DXF 2000-filer. En DXF R12-fil har ikke skraveringsobjekter, og koblinger laget i andre programmer leses ikke: bruk `HATCHEDIT` og Koble for dem.

En skravur som ikke lenger har avgrensning (avgrensningen er slettet, eller filen kom uten den), kan få den tilbake: `HATCHGENERATEBOUNDARY` (`HGB`) tegner en lukket polylinje rundt hver løkke i skraveringen og, hvis du svarer Ja, knytter skraveringen til dem.

## Et gradientfyll

`GRADIENT` (`GD`) fyller et område med en gradient i stedet for et mønster: de samme valgene som `HATCH`, etter at den spør om typen (lineær, sylindrisk, sfærisk, halvsfærisk, buet, og hver av dem invertert), én farge med en tone eller to farger, vinkelen, og om den skal være sentrert. I `HATCH` gjør alternativet `G` det samme. `HATCHEDIT` `G`, eller {{ui:Egenskaper}} under Gradient, endrer en gradient eller gjør en vilkårlig skravur om til en gradient.

Et gradientfyll vises på skjermen og i plott. Lagre som DWG 2004 eller nyere, så får andre programmer en ekte gradientskravur. DXF 2000 og DWG 2000 har ikke gradient: der beholder CadCraft den selv, og andre programmer ser et heldekkende fyll i den første fargen.

## Trim en skravur

`TRIM` kutter en skravur som ethvert annet objekt. Klikk på skraveringen på den siden av skjæringskanten du vil fjerne: kantene deler det skraverte området, og den biten fjernes. I hurtigmodus er hvert objekt en skjæringskant; velg kantene først (alternativet `T`) når det er mange. En trimmet skravur er ikke lenger knyttet til avgrensningen sin, fordi den ikke lenger fyller den.
