---
title: Skravering og udfyldning af områder
summary: Udfyld et område med en massiv farve eller et standardmønster ved at klikke inde i det eller vælge lukkede figurer, angiv mønsterets skala og vinkel, og ændr en skravering bagefter.
keywords: skravering, hatch, bhatch, udfyldning, massiv udfyldning, mønster, ansi31, ansi37, mursten, jord, net, snitlinjer, poché, ø, kant, skala, vinkel
from: 14399174
---

## Hvad du laver

Et vægsnit udfyldt med mønsteret ANSI31, med en søjle i det, der er tom, og en massiv udfyldning i søjlen.

## Skravér ved at klikke inde i et område

1. Tegn et rektangel (`REC`, `0,0`, `@2000,1200`) og en cirkel inde i det (`C`, `1000,600`, `300`). Klik på {{ui:Udstrækning}}.
2. Klik på {{ui:Skravering}} i gruppen {{ui:Tegn}}, eller skriv `H` og tryk {{key:Enter}}. Historikken viser, hvilket mønster der er aktuelt, fx `Current hatch: ANSI31, scale 1, angle 0°`.
3. Skriv `P` og tryk {{key:Enter}}, skriv `ANSI31` og tryk {{key:Enter}}.
4. Skriv `SC` og tryk {{key:Enter}}, skriv `20` og tryk {{key:Enter}}. Mønsterstørrelser gælder på papiret, så en tegning, der plottes i 1:20, skal have skala 20.
5. Ved `Pick internal point` klikker du inde i rektanglet, uden for cirklen. Skraveringen vises som en forhåndsvisning.
6. Tryk {{key:Enter}}. Rektanglet er skraveret; cirklen inde i det forbliver tom, fordi den er en ø.

Klik inde i flere områder, før du trykker {{key:Enter}}, for at gøre dem til én skravering. `U` fjerner det sidste område.

## En massiv udfyldning

1. Skriv `H` og tryk {{key:Enter}}.
2. Skriv `P`, tryk {{key:Enter}}, skriv `SOLID` og tryk {{key:Enter}}.
3. Klik inde i cirklen, og tryk derefter {{key:Enter}}.

## Skravér lukkede figurer, du vælger

I stedet for at klikke inde i området skriver du `S` (Vælg objekter) ved `Pick internal point` og vælger lukkede polylinjer, cirkler eller lukkede ellipser, og trykker derefter {{key:Enter}}. Figurer inde i andre figurer lades tomme skiftevis (den yderste skraveres, den næste ind i er tom, og så videre).

## Mønstre

Skriv `?` ved mønsterspørgsmålet for at se listen. De standardmønstre er ANSI31 til ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS og EARTH samt SOLID. I en tegning i tommer (eller med fod og tommer som længdeformat) bruges mønstrenes tommestørrelser, som i AutoCAD; ellers bruges millimeterstørrelserne.

{{ui:Vinkel}} (`A`) drejer hele mønsteret: ANSI31 ved 90° hælder den den anden vej.

**Mønsterfiler.** Skriv `F` (Mønsterfil) ved `Pick internal point` og vælg en `.pat`-fil. Mønstrene i den føjes til listen; med flere spørges du, hvilket der skal bruges. En fil, CadCraft ikke kan læse mønstre fra, siger det, og eventuelle mønstre, den springer over, tælles. Størrelser i en `.pat`-fil har ingen egen enhed, så de læses i tegningens enheder. Kun filer skrevet i det sædvanlige `.pat`-format er afprøvet; ingen lavet af andet program.

## Ændr en skravering

Vælg den (klik på en af dens linjer). I {{ui:Egenskaber}}: {{ui:Mønster}}, {{ui:Mønsterskala}} og {{ui:Mønstervinkel}}. Skraveringer fra åbnede tegninger viser deres mønster, når det er et af standardmønstrene; andre vises som en lys tone af deres farve.

## Almindelige fejl

- **"No closed boundary round that point."** Der er et hul i konturen, eller en del af den er uden for skærmen: CadCraft kigger kun på det, der er på skærmen. Luk hullet (zoom ind på hjørnerne), eller zoom ud.
- **"The pattern is too dense to draw at this scale."** Linjerne ville ligge tættere, end tegningen kan vise. Brug en større skala: prøv plotskalaen (20 for 1:20).
- Mønsteret ser enormt eller lille ud. Skalaen angives i tegningsenheder pr. mønsterenhed; se trin 4 ovenfor.
- **Flytning af konturen flytter ikke skraveringen.** En skravering er ikke knyttet til sin kant. Flyt begge, eller skravér igen.

## En skravering, der bliver ved sin kant

En skravering, du laver med `HATCH`, husker, hvad der afgrænser den. Flytter, drejer eller skalerer du kanten, følger skraveringen og dens mønster med. Træk i et greb for at ændre kanten, og skraveringen beregnes igen. Flytter du skraveringen alene, følger dens kant med, ligesom en udfyldt figur i et tegneprogram.

Forbindelsen ophører, og kommandolinjen siger det, hvis kanten ikke længere er lukket, eller du ændrer skraveringen manuelt. Skraveringen selv bliver. Skriv `AS` under skravering for at lave skraveringer, der står alene. Kopierer du en skravering med dens kant, får kopien sin egen forbindelse.

`HATCHEDIT` (`HE`) ændrer mønster, skala, vinkel og begyndelsespunkt for en skravering og knytter den til en kant eller ophæver forbindelsen. Forbindelsen gemmes i DWG- og DXF 2000-filer. En DXF R12-fil har intet skraveringsobjekt, og forbindelser lavet i andre programmer læses ikke: brug `HATCHEDIT` og `Link` til dem.

En skravering, der ikke længere har en kant (kanten blev slettet, eller filen kom uden den), kan få den tilbage: `HATCHGENERATEBOUNDARY` (`HGB`) tegner en lukket polylinje rundt om hver løkke i skraveringen, og hvis du svarer Ja, knyttes skraveringen til dem.

## En farveforløbsudfyldning

`GRADIENT` (`GD`) udfylder et område med et farveforløb i stedet for et mønster: de samme valg som `HATCH`, efter at den har spurgt om typen (lineær, cylindrisk, sfærisk, halvsfærisk, buet og hver af disse omvendt), én farve med en tone eller to farver, vinklen og om den skal centreres. I `HATCH` gør tilvalget `G` det samme. `HATCHEDIT` `G` eller {{ui:Egenskaber}} under Farveforløb ændrer et farveforløb eller gør en vilkårlig skravering til et.

Et farveforløb vises på skærmen og i plots. Gemmer du som DWG 2004 eller nyere, får andre programmer en rigtig farveforløbsskravering. DXF 2000 og DWG 2000 har intet farveforløb: her beholder CadCraft det selv, og andre programmer ser en massiv udfyldning i første farve.

## Trim en skravering

`TRIM` skærer en skravering ligesom ethvert andet objekt. Klik på skraveringen på den side af skæreranden, du vil fjerne: kanterne deler det skraverede område, og det stykke fjernes. I hurtigtilstand er hvert objekt en skærerand; vælg kanterne først (tilvalg `T`), når der er mange. En beskåret skravering er ikke længere knyttet til sin kant, fordi den ikke længere udfylder den.
