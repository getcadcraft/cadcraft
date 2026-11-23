---
title: Skisser med penn og få presis geometri
summary: Tegn frihånd med en penn, mus eller finger, og hvert strøk blir en ren linje, sirkel, bue, et rektangel eller en polylinje når du løfter pennen, festet til det som allerede er tegnet, med størrelsen klar til å skrive over.
keywords: skisse, penn, pennespiss, frihånd, finger, rydd opp, presis, fang, SKETCHLIVE, SKETCHFIX, størrelse, skriv over, trykk, linjevekt, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Start {{cmd:SKETCHLIVE}} (eller velg **Tegn › Mer › Skisser med penn**) og tegn et strøk ved å trykke og dra. Når du løfter pennen, leser CadCraft hva du mente og legger det i tegningen:

| Ditt strøk | Hva du får |
|---|---|
| Nesten rett | En linje. En nesten vannrett eller loddrett linje blir nøyaktig vannrett eller loddrett. |
| Lukket og rundt | En sirkel |
| Del av en rund form | En bue |
| Lukket med fire rettvinklede hjørner | Et rektangel |
| Alt annet | En polylinje med rette sider |

Endene av et strøk trekkes til nærmeste ende av det som allerede er tegnet, så en skissert vegg møter veggen ved siden av.

## Skriv over størrelsen

Etter hvert strøk viser kommandolinjen dens størrelse som standard: en linjes **lengde**, en sirkels eller bues **radius**, et rektangels **bredde**. Trykk {{key:Enter}} for å beholde den, eller skriv et tall eller en lengde som `12'6"` for å erstatte den. En linje beholder sin første ende, en sirkel sitt senter, et rektangel sitt første hjørne.

Trykk {{key:Enter}} på en tom ledetekst for å fullføre, eller skriv `U` for å ta tilbake det siste strøket. Hele økten er ett angretrinn.

## Rydde opp i flere strøk samtidig

{{cmd:SKETCHFIX}} samler strøk og gjør dem alle presise når du trykker {{key:Enter}}. Det passer til en grov plan tegnet raskt.

:::note
Alt regnes ut på datamaskinen din etter regler, uten modell, og ingenting sendes noe sted.
:::

## Trykk setter linjevekten

Der pennen er slått på for appene (Innstillinger › Globalt › Inndataenheter › Penn), bærer et strøk tegnet med en penn hvert punkt pennen ga, og trykket sitt. Et lett strøk gir et tynt objekt, og et fast et tykt: strøkets gjennomsnittlige trykk velger 0,18, 0,25, 0,35 eller 0,50 mm, og kommandolinjen sier hvilken. Strøk tegnet med mus eller finger tar den gjeldende linjevekten som før. {{cmd:PENPRESSURE}} slår dette av (eller på igjen). Valget lagres i denne nettleseren.
