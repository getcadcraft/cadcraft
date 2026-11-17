---
title: Rediger med håndtak og Egenskaper
summary: Strekk, flytt og endre størrelse på objekter via håndtakene, og skriv inn eksakte lengder, radier, vinkler og koordinater i Egenskaper-panelet.
keywords: håndtak, egenskaper, strekk, lengde, radius, koordinater, rediger, hurtigegenskaper, egenskapspalett, endre, layer, farge, color
from: f22541ba
---

## Hva du lærer

To raske måter å endre et objekt uten en kommando: dra dets **håndtak**, eller skriv inn nye verdier i **Egenskaper**-panelet til høyre.

## Håndtak

Når du velger objekter (opptil 200 om gangen) uten at en kommando kjører, vises små firkanter på dem. Dette er håndtak:

| Objekt | Håndtak |
|---|---|
| Linje | Begge ender, og midtpunktet (flytter hele linjen) |
| Sirkel | Sentrum (flytter den) og fire punkter på sirkelen (endrer radiusen) |
| Bue | Sentrum, og begge ender (endrer hvor den starter og stopper) |
| Polylinje | Hvert hjørnepunkt |
| Tekst, punkt, blokkreferanse | Innsettingspunktet |
| Ellipse | Sentrum |
| Måltilsetting | Definisjonspunktene og plasseringen av mållinjen |
| Visningsområde | Sentrum (flytter det) og de fire hjørnene (endrer størrelsen) |

### Flytt et håndtak

1. Tegn en linje og klikk på den. Tre håndtak vises.
2. Klikk på håndtaket i den ene enden. Statuslinjen sier «Klikk der dette håndtaket skal gå (Esc for å avbryte). Fang og Ortho gjelder.»
3. Flytt krysset. En forhåndsvisning følger med.
4. Klikk på den nye posisjonen, eller fang et punkt på et annet objekt og klikk.

Enden flyttes, og resten av linjen blir stående. Du kan også trykke på et håndtak og dra det, og slippe der det skal være.

:::note
Du kan ikke skrive inn en koordinat for et håndtak. For en eksakt posisjon, fang et punkt, eller skriv verdien i Egenskaper.
:::

Trykk {{key:Esc}} eller høyreklikk for å avbryte en håndtaksflytting.

## Egenskaper

Det høyre panelet viser egenskapene til det som er valgt.

1. Klikk på en linje. Overskriften i panelet sier «Linje».
2. Klikk i {{ui:Lengde}}, skriv `2500` og trykk {{key:Enter}}.

Linjen er nå nøyaktig 2500 lang, og beholder startpunktet og vinkelen. {{key:Enter}} eller et klikk et annet sted bruker verdien; {{key:Esc}} setter den gamle verdien tilbake. Hver endring er ett steg i angre, også når mange objekter endres samtidig.

Felt tar uttrykk (`=2*45`) og lengder med enheter (`3'6"`, `900mm`), hvert punkt har X, Y og Z, og flere objekter kan endres samtidig. Alt dette står i [Egenskapspanelet](topic:properties-panel).

## Vanlige feil

- **Ingen håndtak vises.** En kommando kjører (trykk {{key:Esc}}), eller mer enn 200 objekter er valgt, eller objektet ligger på et låst layer.
- **Håndtaket havnet på feil sted.** En fangst tok det. Hold {{key:Shift}} mens du klikker for å ignorere fangst.
- **Skriving i Egenskaper gjorde ingenting.** Trykk {{key:Enter}} eller klikk et annet sted for å bruke verdien. En avvist verdi (null eller negative lengder og radier, tekst som ikke er et tall) gjør feltet rødt og sier hvorfor.
- **Skrevne bokstaver havnet i et Egenskapsfelt.** Mens et felt har markøren, skrives tastene der. Trykk {{key:Enter}} eller {{key:Esc}}, og skriv deretter kommandoen.
