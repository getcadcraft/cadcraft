---
title: Skravur og fyll av områder
summary: Fyll et område med en heldekkende farge eller et standardmønster ved å klikke inni det eller ved å velge lukkede former, angi mønsterets skala og vinkel, og endre en skravur etterpå.
keywords: skravur, hatch, bhatch, fyll, heldekkende fyll, mønster, ansi31, ansi37, murstein, jord, nett, snittlinjer, poché, øy, grense, skala, vinkel
from: e7feb344
---

## Hva du skal lage

Et veggsnitt fylt med mønsteret ANSI31, en søyle i det som er tom, og et heldekkende fyll i søylen.

## Skravur ved å klikke inne i et område

1. Tegn et rektangel (`REC`, `0,0`, `@2000,1200`) og en sirkel inni det (`C`, `1000,600`, `300`). Klikk {{ui:Utstrekning}}.
2. Klikk {{ui:Skravur}} i gruppen {{ui:Tegn}}, eller skriv `H` og trykk {{key:Enter}}. Historikken sier hvilket mønster som er gjeldende, for eksempel `Current hatch: ANSI31, scale 1, angle 0°`.
3. Skriv `P` og trykk {{key:Enter}}, skriv `ANSI31` og trykk {{key:Enter}}.
4. Skriv `SC` og trykk {{key:Enter}}, skriv `20` og trykk {{key:Enter}}. Mønsterstørrelser er på papir, så en tegning plottet i 1:20 vil ha skala 20.
5. Ved `Pick internal point` klikk inni rektangelet, utenfor sirkelen. Skravuren vises som en forhåndsvisning.
6. Trykk {{key:Enter}}. Rektangelet er skravert; sirkelen inni forblir tom, fordi den er en øy.

Klikk inni flere områder før du trykker {{key:Enter}} for å lage én skravur av dem. `U` tar tilbake det siste området.

## Et heldekkende fyll

1. Skriv `H` og trykk {{key:Enter}}.
2. Skriv `P`, trykk {{key:Enter}}, skriv `SOLID` og trykk {{key:Enter}}.
3. Klikk inni sirkelen, og trykk deretter {{key:Enter}}.

## Skravur av lukkede former du velger

I stedet for å klikke inni, skriv `S` (Velg objekter) ved `Pick internal point`, velg lukkede polylinjer, sirkler eller lukkede ellipser, og trykk deretter {{key:Enter}}. Former inni andre forblir tomme annenhver gang (den ytre skraveres, den neste inni forblir tom, og så videre).

## Mønstre

Skriv `?` ved mønsterspørsmålet for listen. De standard er ANSI31 til ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS og EARTH, og SOLID. I en tegning i tommer (eller med fot og tommer som lengdeformat) brukes mønstrenes tommestørrelser, som i AutoCAD; ellers millimeterstørrelsene.

{{ui:Vinkel}} (`A`) dreier hele mønsteret: ANSI31 ved 90° skråner den andre veien.

**Mønsterfiler.** Skriv `F` (Mønsterfil) ved `Pick internal point`, og velg en `.pat`-fil. Mønstrene i den blir med i listen; har den flere, spørres du hvilket som skal brukes. En fil uten mønster CadCraft kan lese, sier det, og et mønster den hoppet over telles. Størrelser i en `.pat`-fil har ingen egen enhet, så de leses i tegningens enheter. Bare filer skrevet i det vanlige `.pat`-formatet er prøvd; ingen laget av et annet program.

## Endre en skravur

Velg den (klikk en av linjene). I {{ui:Egenskaper}}: {{ui:Mønster}}, {{ui:Mønsterskala}} og {{ui:Mønstervinkel}}. Skravurer fra åpnede tegninger viser sitt mønster når det er et av standardmønstrene; andre vises som en lys tone av sin farge.

## Vanlige feil

- **«Ingen lukket grense rundt det punktet.»** Det er et gap i omrisset, eller en del av det er utenfor skjermen: CadCraft ser bare på det som er på skjermen. Lukk gapet (zoom inn på hjørnene), eller zoom ut.
- **«Mønsteret er for tett til å tegnes i denne målestokken.»** Linjene ville ligge nærmere enn tegningen kan vise. Bruk en større skala: prøv plottskalaen (20 for 1:20).
- **Mønsteret ser enormt eller lite ut.** Skalaen er i tegningsenheter per mønsterenhet; se trinn 4 over.
- **Skravuren følger ikke omrisset lenger.** En skravur laget med {{cmd:HATCH}} blir værende med objektene den ble laget av: flytter, vender eller skalerer du omrisset, følger skravuren med; former du den om med et håndtak, beregnes den på nytt. Lenken opphører når omrisset ikke lenger lukker seg, når du former skravuren selv for hånd, eller når du trimmer den, og kommandolinjen sier det. Ingenting er tapt: skravér området på nytt for å lenke det igjen.

## En skravur som holder seg til sin grense

En skravur du lager med `HATCH` husker hva som avgrenser den. Flytter, vender eller skalerer du grensen, følger skravuren og dens mønster med. Dra et håndtak for å forme grensen om, og skravuren beregnes på nytt. Flytter du skravuren alene, følger grensen også med, som en fylt form i et tegneprogram.

Lenken opphører, og kommandolinjen sier det, hvis grensen ikke lenger lukker seg, eller du former skravuren for hånd. Selve skravuren blir. Skriv `AS` mens du skraverer for å lage skravurer som står alene. Kopierer du en skravur med grensen, får kopien sin egen lenke.

`HATCHEDIT` (`HE`) endrer mønster, skala, vinkel og origo for en skravur, og lenker den til en grense eller avslutter lenken. Lenken lagres i DWG- og DXF 2000-filer. En DXF R12-fil har ikke skravurobjekt, og lenker laget i andre programmer leses ikke: bruk `HATCHEDIT` og Lenk for dem.

En skravur som ikke har en grense lenger (grensen ble slettet, eller filen kom uten den), kan få den tilbake: `HATCHGENERATEBOUNDARY` (`HGB`) tegner en lukket polylinje rundt hver løkke i skravuren, og hvis du svarer Ja, lenker den skravuren til dem.

## Et gradientfyll

`GRADIENT` (`GD`) fyller et område med en gradient i stedet for et mønster: de samme valgene som `HATCH`, etter at den spør om typen (lineær, sylindrisk, sfærisk, halvsfærisk, buet, og hver av dem omvendt), én farge med en tone eller to farger, vinkelen, og om den er sentrert eller ikke. I `HATCH` gjør alternativet `G` det samme. `HATCHEDIT` `G`, eller {{ui:Egenskaper}} under {{ui:Gradient}}, endrer en gradient eller gjør en hvilken som helst skravur om til en.

En gradient vises på skjermen og i plotter. Lagres som DWG 2004 eller nyere, får andre programmer en ekte gradientskravur. DXF 2000 og DWG 2000 har ingen gradient: der beholder CadCraft den for seg selv, og andre programmer ser et heldekkende fyll i første farge.

## Trimme en skravur

`TRIM` kapper en skravur som ethvert annet objekt. Klikk skravuren på den siden av skjærekanten du vil fjerne: kantene deler det skraverte området, og den biten fjernes. I hurtigmodus er hvert objekt en skjærekant; velg kantene først (alternativ `T`) når det er mange. En trimmet skravur er ikke lenger lenket til sin grense, fordi den ikke fyller den lenger.
