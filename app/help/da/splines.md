---
title: Splines og polylinjer: SPLINE, SPLINEDIT, PEDIT
summary: Tegn en glat kurve gennem punkter eller ud fra en kontrolpolygon, redigér dens tilpasnings- og kontrolpunkter, og redigér polylinjer (sammenføj, luk, bredde, tilpas, spline, dekurvér) eller lav en spline om til en polylinje.
keywords: spline, splinedit, spl, spe, pedit, pe, tilpasningspunkter, kontrolpunkter, vægte, nurbs, polylinjeredigering, sammenføj, tilpasningskurve, dekurvér, konverter til polylinje, præcision, tangent, kurve, tilpasningstolerance
from: d31f72d8
---

## Hvad du laver

En kurve gennem fem punkter, derefter den samme kurve redigeret på tre måder, og en polylinje bygget af tre linjer.

## Tegn en spline gennem punkter

1. Skriv `SPL` og tryk {{key:Enter}}.
2. Klik eller skriv de punkter, kurven skal gå igennem: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Tryk {{key:Enter}} efter det sidste.
3. {{ui:Starttangent}}: klik på et punkt, kurven skal forlade mod, eller tryk {{key:Enter}} for at lade den bestemme. Gør det samme for sluttangenten.

Kurven går gennem hvert punkt. Skriv `C` i stedet for {{key:Enter}} for at lukke den (kurven vender tilbage til det første punkt). {{key:U}} (`Undo`) tager det sidste punkt tilbage, mens du tegner.

### Tegn en ud fra en kontrolpolygon

Skriv `M` ved den første ledetekst, derefter `C` (kontrolhjørner) og en grad fra 1 til 5 (3 er det sædvanlige). Nu er de punkter, du vælger, hjørnerne i en polygon, der trækker kurven mod sig; kurven starter ved det første og slutter ved det sidste. En lukket kurve snor sig rundt, uden hjørne i samlingen.

### Lav en polylinje om til en spline

Skriv `O` (Objekt) ved den første ledetekst og vælg polylinjer eller linjer. De bliver til splines gennem deres hjørnepunkter; originalerne fjernes.

## Redigér en spline

Vælg den og skriv `SPE` (eller skriv `SPE` og klik på den). Greb viser tilpasningspunkterne (eller kontrolpunkterne for en spline, der ikke har nogen): træk ét for at ændre kurvens form. Ved ledeteksten:

- **Tilpasningsdata** (en spline tegnet gennem punkter): `A` tilføjer et tilpasningspunkt (klik hvor), `D` sletter ét (klik i nærheden), `M` flytter ét (klik i nærheden, og klik derefter på det nye sted), `T` sætter sluttangenterne, `P` fjerner tilpasningspunkterne, så splinen herefter redigeres via sine kontrolpunkter.
- **Redigér hjørnepunkt**: `A` tilføjer et kontrolpunkt uden at ændre kurven, `M` flytter ét, `W` giver et en **vægt** (over 1 trækker kurven tættere på det, under 1 lader den slippe).
- **Åbn** eller **Luk**, og **Omvend** (kurven løber den anden vej).
- **Konvertér til polylinje** (`P`): splinen bliver til en polylinje; præcisionen er, hvor mange segmenter hvert spænd får (10 er det sædvanlige).
- **Fortryd (U)** tager den sidste ændring tilbage; **Afslut (X)** afslutter.

{{ui:Egenskaber}} viser en splines grad, hvor mange tilpasnings- og kontrolpunkter den har, dens længde, og lader dig åbne eller lukke den.

## Redigér en polylinje

Vælg en polylinje og skriv `PE`. En linje, bue eller spline, du vælger, tilbydes først som en polylinje at konvertere til (en spline spørger om præcisionen).

- **Luk** / **Åbn** sammenføjer eller adskiller enderne.
- **Sammenføj** tilføjer linjer, buer og polylinjer, hvis ender møder polylinjens ende. `Fuzz distance` er, hvor langt fra hinanden enderne må være og stadig sammenføjes (0 betyder, at de skal mødes).
- **Bredde** giver hele polylinjen én bredde (0 fjerner den).
- **Tilpas** erstatter polylinjen med en glat kurve, der går gennem dens hjørnepunkter; **Spline** med en kubisk B-spline, der følger dem (den starter og slutter ved første og sidste hjørnepunkt og holder sig tæt på de andre). Begge bliver til en polylinje af korte segmenter, og de oprindelige hjørner bevares, så **Dekurvér** bringer dem tilbage.
- **Linjetypegenerering** angiver, om en stiplet linjetype fortsætter hen over hele polylinjen, eller om den starter forfra ved hvert hjørnepunkt.
- **Omvend** ændrer rækkefølgen af dens hjørnepunkter. **Flere** (`M` ved den første ledetekst) redigerer flere polylinjer med de samme muligheder.

Redigering af en polylinjes hjørnepunkter i {{ui:Egenskaber}} eller med greb forbliver som den var: PEDIT har ingen hjørnepunkteditor.

## I filer

DWG og DXF 2000 gemmer en spline som en spline: grad, kontrolpunkter, knuder, vægte, tilpasningspunkter og tangenter. En spline, du åbner og ikke ændrer, skrives tilbage nøjagtigt, som den kom. DXF R12 har ingen spline: den gemmes som en polylinje langs kurven, og historikken siger, hvor mange segmenter.

Forskyd, beskær, forlæng, afrund, bryd og sammenføj virker ikke på splines. {{cmd:EXPLODE}} en spline, eller {{cmd:PEDIT}} den, for at få en polylinje, som de kommandoer kan bruge.

## Almindelige fejl

- **Kurven svinger over mellem punkter, der ligger tæt.** En kurve gennem punkter bøjer, hvor punkterne gør. Brug færre punkter, eller en kontrolpolygon.
- **"Det er ikke en spline."** SPLINEDIT tager kun splines; {{cmd:PEDIT}} redigerer polylinjer.
- **En lukket tilpasningsspline har en lidt anden form i et andet program.** CadCraft lukker den med én glat samling i første punkt; et andet program kan lukke den med en periodisk kurve. En lukket kontrolpunktspline er den samme i begge.
