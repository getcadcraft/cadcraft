---
title: Konstruksjonslinjer og stråler
summary: Tegn linjer som fortsetter uten ende (XLINE) eller fra et punkt én vei (RAY) for å justere ting, og trim dem til vanlige linjer.
keywords: xline, ray, konstruksjonslinje, konstruksjonslinjer, uendelig linje, hjelpelinje, referanselinje, halvering, forskjøvet linje, layoutlinjer, xl
from: b6c398bc
---

## Hva du lærer

Hvordan du tegner konstruksjonslinjer for å justere ting mens du tegner: gjennom to punkter, vannrett eller loddrett, i en vinkel, midt mellom to retninger, eller en fastsatt avstand fra en linje. Og hvordan du trimmer dem til vanlige linjer når de har gjort jobben sin.

## To typer

- En **konstruksjonslinje** ({{cmd:XLINE}}) fortsetter uten ende i begge retninger.
- En **stråle** ({{cmd:RAY}}) starter i et punkt og fortsetter uten ende i én retning.

Begge tegnes over hele tegneområdet uansett zoom, i delt skjerm og i visningsområder på et ark. {{ui:Utstrekning}} utelater dem, slik at zoom til tegningen fortsatt passer det du tegnet.

## Tegn konstruksjonslinjer

1. Klikk {{ui:Tegn}} › {{ui:Mer}} › {{ui:Konstruksjonslinje}}, eller skriv `XL` og trykk {{key:Enter}}.
2. Klikk et punkt. Hvert klikk etter det legger til en konstruksjonslinje gjennom det første punktet og punktet du klikker.
3. Trykk {{key:Enter}} for å avslutte.

I stedet for det første punktet kan du skrive et alternativ:

| Alternativ | Gjør dette |
|---|---|
| `H` (Vannrett) | Vannrette linjer, én gjennom hvert punkt du klikker. |
| `V` (Loddrett) | Loddrette linjer gjennom hvert punkt. |
| `A` (Vinkel) | Linjer i en vinkel du skriver (grader, mot klokken fra X-aksen), gjennom hvert punkt. `R` (Referanse) måler vinkelen fra en linje du velger. |
| `B` (Halvering) | Klikk hjørnet, deretter et punkt langs én side: hvert punkt du klikker langs den andre siden, legger til linjen midt mellom de to. |
| `O` (Forskyvning) | Skriv en avstand, velg en linje, og klikk så på siden: en konstruksjonslinje så langt fra den, parallelt. `T` (Gjennom) legger den gjennom et punkt du klikker i stedet. Avstanden huskes til neste gang. |

## Tegn stråler

1. Klikk {{ui:Tegn}} › {{ui:Mer}} › {{ui:Stråle}}, eller skriv `RAY` og trykk {{key:Enter}}.
2. Klikk der strålene starter.
3. Klikk et punkt for hver stråle den skal gå gjennom. Trykk {{key:Enter}} for å avslutte.

## Fest til dem og trim dem

Konstruksjonslinjer og stråler tar fangene Nærmeste, Vinkelrett og Skjæringspunkt. De har ingen ender og ingen midte, så Endepunkt og Midtpunkt finner ingenting på dem.

De kan kutte og bli kuttet som andre linjer i {{cmd:TRIM}} og {{cmd:BREAK}}:

- Trim den ene enden av en konstruksjonslinje, så blir den en stråle som starter ved kuttet.
- Trim den fjerne delen av en stråle, så blir den en vanlig linje.
- Bryt en konstruksjonslinje i ett punkt, og du får to stråler.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} og {{cmd:STRETCH}} virker også på dem. Et vindusutvalg velger dem aldri, fordi ingen vindu kan romme hele en uendelig linje; et kryssingsvindu eller et klikk gjør det.

:::note
En DWG (alle versjoner) og en DXF 2000 beholder dem som konstruksjonslinjer. DXF R12 har ingen, så der blir de linjer over hele tegningen, og lagringen sier fra om det. En utskrift eller PDF tegner dem bare så langt det som skrives ut.
:::
