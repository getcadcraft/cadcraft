---
title: Skisser med penn og få presis geometri
summary: Tegn frihånd med penn, mus eller finger, og hvert strøk blir til en ren linje, sirkel, bue, rektangel eller polylinje når pennen løftes, festet til det som allerede er tegnet, med størrelsen klar til å skrive over.
keywords: skisse, penn, pennestift, frihånd, finger, rydd opp, presis, fang, SKETCHLIVE, SKETCHFIX, størrelse, skriv over
from: cd87eb75
---

Start {{cmd:SKETCHLIVE}} (eller velg **Tegn › Mer › Skisser med penn**) og tegn et strøk ved å trykke og dra. Når pennen løftes, leser CadCraft hva som var ment, og legger det i tegningen:

| Strøk | Resultat |
|---|---|
| Nesten rett | En linje. En nesten vannrett eller loddrett linje gjøres helt vannrett eller loddrett. |
| Lukket og rund | En sirkel |
| Del av en rund form | En bue |
| Lukket med fire rette hjørner | Et rektangel |
| Alt annet | En polylinje med rette sider |

Endene på et strøk trekkes til nærmeste ende av det som allerede er tegnet, slik at en skisset vegg møter veggen ved siden av.

## Skriv over størrelsen

Etter hvert strøk viser kommandolinjen størrelsen som standard (en linjes **lengde**, en sirkels eller buens **radius**, et rektangels **bredde**). Trykk {{key:Enter}} for å beholde den, eller skriv et tall eller en lengde, for eksempel `12'6"`, for å erstatte den. En linje beholder sitt første endepunkt, en sirkel sitt sentrum og et rektangel sitt første hjørne.

Trykk {{key:Enter}} på en tom ledetekst for å avslutte, eller skriv `U` for å angre siste strøk. Hele økten er ett angrettrinn.

## Rydd opp i flere strøk samtidig

{{cmd:SKETCHFIX}} samler strøk og gjør dem alle presise når {{key:Enter}} trykkes, noe som passer til en grov layout som er tegnet raskt.

:::note
Alt beregnes på datamaskinen etter regler, uten modell, og ingenting sendes noe sted.
:::
