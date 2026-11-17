---
title: "Konstruktionslinjer og stråler"
summary: "Tegn linjer, der løber uden ende (XLINE), eller fra et punkt én vej (RAY), for at rette ting ind, og trim dem til almindelige linjer."
keywords: xline, ray, konstruktionslinje, konstruktionslinjer, uendelig linje, hjælpelinje, referencelinje, halvering, forskudt linje, layoutlinjer, xl
from: b6c398bc
---

## Hvad du lærer

Sådan tegner du konstruktionslinjer til at rette ting ind, mens du tegner: gennem to punkter, vandret eller lodret, i en vinkel, halvvejs mellem to retninger eller i en fast afstand fra en linje. Og sådan trimmer du dem til almindelige linjer, når de har gjort deres arbejde.

## To slags

- En **konstruktionslinje** ({{cmd:XLINE}}) løber uden ende i begge retninger.
- En **stråle** ({{cmd:RAY}}) starter i et punkt og løber uden ende i én retning.

Begge tegnes over hele tegneområdet uanset zoom, i delt skærm og i viewporte på et ark. {{ui:Udstrækning}} udelader dem, så zoom til tegningen stadig passer med det, du har tegnet.

## Tegn konstruktionslinjer

1. Klik {{ui:Tegn}} › {{ui:Mere}} › {{ui:Konstruktionslinje}}, eller skriv `XL` og tryk {{key:Enter}}.
2. Klik et punkt. Hvert klik efter det tilføjer en konstruktionslinje gennem det første punkt og det, du klikker på.
3. Tryk {{key:Enter}} for at afslutte.

I stedet for det første punkt kan du skrive en valgmulighed:

| Valgmulighed | Hvad den gør |
|---|---|
| `H` (Hor) | Vandrette linjer, én gennem hvert punkt, du klikker på. |
| `V` (Ver) | Lodrette linjer gennem hvert punkt. |
| `A` (Ang) | Linjer i en vinkel, du skriver (grader, mod uret fra X-aksen), gennem hvert punkt. `R` (Reference) måler vinklen fra en linje, du vælger. |
| `B` (Bisect) | Klik på hjørnet, og derefter et punkt langs én side: hvert punkt, du klikker på langs den anden side, tilføjer linjen halvvejs mellem de to. |
| `O` (Offset) | Skriv en afstand, vælg en linje, og klik så på siden: en konstruktionslinje så langt fra den, parallel med den. `T` (Through) lægger den i stedet gennem et punkt, du klikker på. Afstanden huskes til næste gang. |

## Tegn stråler

1. Klik {{ui:Tegn}} › {{ui:Mere}} › {{ui:Stråle}}, eller skriv `RAY` og tryk {{key:Enter}}.
2. Klik, hvor strålerne starter.
3. Klik et punkt for hver stråle, den skal gå gennem. Tryk {{key:Enter}} for at afslutte.

## Snap til dem og trim dem

Konstruktionslinjer og stråler tager fangene nærmeste, vinkelret og skæringspunkt. De har ingen endepunkter og ingen midte, så endepunkt og midtpunkt finder intet på dem.

De kan klippes og klippes af, ligesom andre linjer i {{cmd:TRIM}} og {{cmd:BREAK}}:

- Trimmer du den ene ende af en konstruktionslinje, bliver den til en stråle, der starter ved snittet.
- Trimmer du den fjerne del af en stråle, bliver den til en almindelig linje.
- Brækker du en konstruktionslinje i ét punkt, får du to stråler.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} og {{cmd:STRETCH}} virker også på dem. Et vinduesvalg vælger aldrig dem, fordi intet vindue kan rumme hele en uendelig linje; et krydsvindue eller et klik gør det.

:::note
En DWG (alle versioner) og en DXF 2000 gemmer dem som konstruktionslinjer. DXF R12 har ingen, så der bliver de til linjer hen over tegningen, og gemningen siger det. Et plot eller en PDF tegner dem kun over det, der udskrives.
:::
