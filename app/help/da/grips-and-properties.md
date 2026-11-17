---
title: Redigér med greb og Egenskaber
summary: Stræk, flyt og ændr størrelse på objekter via deres greb, og skriv præcise længder, radier, vinkler og koordinater i panelet Egenskaber.
keywords: greb, egenskaber, stræk, længde, radius, koordinater, redigér, hurtige egenskaber, egenskabspalette, ændr, lag, farve
from: f22541ba
---

## Det lærer du

To hurtige måder at ændre et objekt på uden en kommando: træk i dets **greb**, eller skriv nye værdier i panelet **Egenskaber** til højre.

## Greb

Når du vælger objekter (op til 200 ad gangen) uden at en kommando kører, dukker små firkanter op på dem. Det er greb:

| Objekt | Greb |
|---|---|
| Linje | Begge ender og midten (flytter hele linjen) |
| Cirkel | Centrum (flytter den) og fire punkter på cirklen (ændrer radius) |
| Bue | Centrum og begge ender (ændrer, hvor den starter og slutter) |
| Polylinje | Hvert hjørnepunkt |
| Tekst, punkt, blokreference | Indsætningspunktet |
| Ellipse | Centrum |
| Målsætning | Dens definerende punkter og målelinjens placering |
| Viewport | Centrum (flytter den) og de fire hjørner (ændrer størrelse) |

### Flyt et greb

1. Tegn en linje og klik på den. Tre greb dukker op.
2. Klik på grebet i den ene ende. Statuslinjen siger »Klik, hvor dette greb skal hen (Esc for at annullere). Fang og Ortogonal gælder.«
3. Flyt krydsmarkøren. En forhåndsvisning følger med.
4. Klik på den nye position, eller fang et punkt på et andet objekt og klik.

Enden flytter sig, og resten af linjen bliver stående. Du kan også trykke på et greb og trække det og slippe det, hvor det skal være.

:::note
Du kan ikke skrive en koordinat for et greb. For en præcis position fanger du et punkt, eller skriver værdien i Egenskaber.
:::

Tryk {{key:Esc}} eller højreklik for at annullere en grebflytning.

## Egenskaber

Det højre panel viser egenskaberne for det, der er valgt.

1. Klik på en linje. Panelets overskrift siger »Linje«.
2. Klik i {{ui:Længde}}, skriv `2500` og tryk {{key:Enter}}.

Linjen er nu præcis 2500 lang og beholder sit startpunkt og sin vinkel. {{key:Enter}} eller et klik et andet sted anvender en værdi; {{key:Esc}} sætter den gamle værdi tilbage. Hver ændring er ét fortrydelsestrin, også når mange objekter ændres på én gang.

Felterne tager udtryk (`=2*45`) og længder med enheder (`3'6"`, `900mm`), hvert punkt har X, Y og Z, og flere objekter kan ændres samtidigt. Alt det står i [Panelet Egenskaber](topic:properties-panel).

## Typiske fejl

- **Ingen greb vises.** En kommando kører (tryk {{key:Esc}}), eller mere end 200 objekter er valgt, eller objektet ligger på et låst lag.
- **Grebet kom det forkerte sted hen.** Et fang tog det. Hold {{key:Shift}} nede, mens du klikker, for at ignorere fang.
- **Skrivning i Egenskaber gjorde ingenting.** Tryk {{key:Enter}} eller klik et andet sted for at anvende. En afvist indtastning (nul eller negative længder og radier, tekst der ikke er en værdi) gør feltet rødt og siger, hvorfor.
- **Skrevne bogstaver gik ind i et Egenskaber-felt.** Mens et felt har markøren, skrives taster dér. Tryk {{key:Enter}} eller {{key:Esc}}, og skriv derefter kommandoen.
