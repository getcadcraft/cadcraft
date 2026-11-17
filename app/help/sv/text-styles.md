---
title: Ställ in typsnitt och storlek för text med textstilar
summary: Skapa namngivna textstilar med ett typsnitt, en höjd, en breddfaktor och en lutning, sätt en som aktuell för ny text, och ändra en stil för att ändra all text som använder den.
keywords: textstil, stil, STYLE, ST, TEXTSTYLE, -STYLE, typsnitt, texthöjd, breddfaktor, lutning, byt typsnitt, standardstil, tillämpa stil, DDSTYLE
from: bd5a4883
---

## Vad du gör

Skapa en textstil som heter `Notes` med eget typsnitt och höjd, använd den för ny text, och ändra senare stilen så att varje anteckning som använder den ändras på en gång.

## Steg

1. Skriv {{cmd:STYLE}} (`ST`) och tryck {{key:Enter}}, eller klicka på {{ui:Textstil}} i verktygsfältet {{ui:Rita}}. Dialogrutan {{ui:Textstil}} listar stilarna i ritningen. Varje ritning har `Standard`.
2. Klicka på {{ui:Ny…}}, skriv `Notes` som namn på den nya stilen och klicka på {{ui:OK}}. Statusraden säger ”Textstil Notes skapades och gjordes aktuell.”
3. Under {{ui:Typsnitt}} väljer eller skriver du ett typsnittsnamn. Sätt {{ui:Höjd (0 = fråga varje gång)}} till ett tal, till exempel `2.5`, så att all ny text får den höjden. Lämna den på `0` för att bli tillfrågad varje gång.
4. Sätt {{ui:Breddfaktor}} och {{ui:Lutningsvinkel (°)}} om du vill ha smalare, bredare eller lutande bokstäver. Exempelraden visar resultatet.
5. Klicka på {{ui:Stäng (C)}}. Rita text med {{cmd:TEXT}} eller {{cmd:MTEXT}}: ny text får den aktuella stilen.
6. För att använda en stil du redan gjort öppnar du dialogrutan igen, väljer den i listan och klickar på {{ui:Gör aktuell}}.
7. För att lägga en stil på text som redan är ritad markerar du texten, öppnar dialogrutan, väljer stilen och klickar på {{ui:Verkställ på markerad text}}.

## Ändra en stil senare

Ändra typsnittet, höjden, breddfaktorn eller lutningen för en stil i dialogrutan, så följer all text som använder den, i ett ångra-steg ({{key:Mod+Z}}). Statusraden säger hur många texter som följde med.

## Anteckningar

- {{ui:Ta bort}} vägrar `Standard`, och en stil som text fortfarande använder: byt först den texten till en annan stil.
- Stilarna sparas i ritningens STYLE-tabell, så DXF- och DWG-filer behåller dem.
- På kommandoraden gör `-STYLE` samma sak med alternativ (Current, New, Font, Height, Width, Oblique, Delete, List).
- Ett typsnitt som inte finns på datorn som läser ritningen visas i ett annat typsnitt.
