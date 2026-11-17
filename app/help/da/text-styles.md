---
title: Angiv skrifttype og størrelse for tekst med tekststile
summary: Lav navngivne tekststile med en skrifttype, højde, bredde og hældning, gør én aktuel for ny tekst, og ændr en stil for at ændre al tekst, der bruger den.
keywords: tekststil, stil, STYLE, ST, TEXTSTYLE, -STYLE, skrifttype, teksthøjde, breddefaktor, hældning, skråstilling, skift skrifttype, standardstil, anvend stil, DDSTYLE
from: bd5a4883
---

## Hvad du gør

Laver en tekststil ved navn `Notes` med sin egen skrifttype og højde, bruger den til ny tekst, og senere ændrer stilen, så alle noter, der bruger den, ændrer sig på én gang.

## Trin

1. Skriv {{cmd:STYLE}} (`ST`) og tryk {{key:Enter}}, eller klik på {{ui:Tekststil}} i værktøjslinjen {{ui:Tegn}}. Dialogboksen {{ui:Tekststil}} viser stilene i tegningen. Alle tegninger har `Standard`.
2. Klik på {{ui:Ny…}}, skriv `Notes` som navn på den nye stil, og klik på {{ui:OK}}. Statuslinjen siger »Tekststil Notes er oprettet og gjort aktuel.«
3. Under {{ui:Skrifttype}} vælger eller skriver du et skrifttypenavn. Sæt {{ui:Højde (0 = spørg hver gang)}} til et tal, såsom `2.5`, så al ny tekst får den højde. Lad den stå på `0` for at blive spurgt hver gang.
4. Sæt {{ui:Breddefaktor}} og {{ui:Hældningsvinkel (°)}}, hvis du vil have smallere, bredere eller skrå bogstaver. Eksempellinjen viser resultatet.
5. Klik på {{ui:Luk (C)}}. Tegn tekst med {{cmd:TEXT}} eller {{cmd:MTEXT}}: ny tekst får den aktuelle stil.
6. For at bruge en stil, du allerede har lavet, åbner du dialogen igen, vælger den i listen og klikker på {{ui:Gør aktuel}}.
7. For at sætte en stil på tekst, der allerede er tegnet, vælger du teksten, åbner dialogen, vælger stilen og klikker på {{ui:Anvend på valgt tekst}}.

## Ændr en stil senere

Ændr skrifttype, højde, bredde eller hældning for en stil i dialogen, og al tekst, der bruger den, følger med, på ét fortrydelsestrin ({{key:Mod+Z}}). Statuslinjen siger, hvor mange tekster der fulgte med.

## Noter

- {{ui:Slet}} afviser `Standard`, og en stil, som tekst stadig bruger: skift først den tekst til en anden stil.
- Stilene gemmes i tegningens STYLE-tabel, så DXF- og DWG-filer beholder dem.
- På kommandolinjen gør `-STYLE` det samme med muligheder (Current, New, Font, Height, Width, Oblique, Delete, List).
- En skrifttype, der ikke findes på den computer, som læser tegningen, vises i en anden skrift.
