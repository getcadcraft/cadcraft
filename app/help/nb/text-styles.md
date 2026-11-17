---
title: Sett skrift og størrelse på tekst med tekststiler
summary: Lag navngitte tekststiler med skrift, høyde, bredde og skråstilling, gjør én aktiv for ny tekst, og endre en stil for å endre all tekst som bruker den.
keywords: tekststil, stil, STYLE, ST, TEXTSTYLE, -STYLE, skrift, teksthøyde, breddefaktor, skråstilt, skråstilling, endre skrift, standardstil, bruk stil, DDSTYLE
from: bd5a4883
---

## Det som gjøres

Lag en tekststil som heter `Notes`, med egen skrift og høyde, bruk den for ny tekst, og endre stilen senere, slik at alle merknader som bruker den endres samtidig.

## Steg

1. Skriv {{cmd:STYLE}} (`ST`) og trykk {{key:Enter}}, eller klikk {{ui:Tekststil}} på verktøylinjen {{ui:Tegn}}. Dialogboksen {{ui:Tekststil}} viser stilene i tegningen. Hver tegning har `Standard`.
2. Klikk {{ui:Ny…}}, skriv `Notes` som navn på den nye stilen, og klikk {{ui:OK}}. Statuslinjen sier «Tekststil Notes laget og gjort aktiv.»
3. I {{ui:Skrift}}, velg eller skriv et skriftnavn. Sett {{ui:Høyde (0 = spør hver gang)}} til et tall, for eksempel `2.5`, slik at all ny tekst får den høyden. La den stå på `0` for å bli spurt hver gang.
4. Sett {{ui:Breddefaktor}} og {{ui:Skråvinkel (°)}} hvis bokstavene skal være smalere, bredere eller skråstilte. Eksempellinjen viser resultatet.
5. Klikk {{ui:Lukk}}. Tegn tekst med {{cmd:TEXT}} eller {{cmd:MTEXT}}: ny tekst får den aktive stilen.
6. For å bruke en stil som allerede er laget: åpne dialogen igjen, velg stilen i listen og klikk {{ui:Gjør aktiv}}.
7. For å sette en stil på tekst som allerede er tegnet: velg teksten, åpne dialogen, velg stilen og klikk {{ui:Bruk på valgt tekst}}.

## Endre en stil senere

Endre skrift, høyde, bredde eller skråstilling for en stil i dialogen, så følger all tekst som bruker den med, i ett angrettrinn ({{key:Mod+Z}}). Statuslinjen sier hvor mange tekster som fulgte med.

## Merknader

- {{ui:Slett}} nekter `Standard`, og en stil som tekst fortsatt bruker: endre den teksten til en annen stil først.
- Stilene lagres i tegningens STYLE-tabell, så DXF- og DWG-filer beholder dem.
- På kommandolinjen gjør `-STYLE` det samme med alternativer (Current, New, Font, Height, Width, Oblique, Delete, List).
- En skrift som ikke finnes på datamaskinen som leser tegningen, vises med en annen skrifttype.
