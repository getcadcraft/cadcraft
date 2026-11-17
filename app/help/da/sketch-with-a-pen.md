---
title: Skitsér med en pen og få præcis geometri
summary: Tegn frihåndsstreger med en pen, mus eller finger, og hver streg bliver en ren linje, cirkel, bue, rektangel eller polylinje, når du løfter pennen, fastsnappet til det, der allerede er tegnet, med sin størrelse klar til at overskrive.
keywords: skitse, pen, stylus, frihånd, finger, ryd op, præcis, fang, SKETCHLIVE, SKETCHFIX, størrelse, overskriv
from: cd87eb75
---

Start {{cmd:SKETCHLIVE}} (eller vælg **Tegn › Mere › Skitsér med en pen**) og tegn en streg ved at trykke og trække. Når du løfter pennen, forstår CadCraft, hvad du mente, og sætter det ind i tegningen:

| Din streg | Det du får |
|---|---|
| Næsten lige | En linje. En næsten vandret eller lodret linje gøres præcis vandret eller lodret. |
| Lukket og rund | En cirkel |
| Del af en rund form | En bue |
| Lukket med fire rette hjørner | Et rektangel |
| Alt andet | En polylinje med firkantede sider |

Enderne af en streg trækkes hen til nærmeste endepunkt af det, der allerede er tegnet, så en skitseret væg møder væggen ved siden af.

## Overskriv størrelsen

Efter hver streg viser kommandolinjen dens størrelse (en linjes **længde**, en cirkels eller buens **radius**, et rektangels **bredde**) som standard. Tryk {{key:Enter}} for at beholde den, eller skriv et tal eller en længde, såsom `12'6"`, for at erstatte den. En linje beholder sit første endepunkt, en cirkel sit centrum, et rektangel sit første hjørne.

Tryk {{key:Enter}} ved en tom ledetekst for at afslutte, eller skriv `U` for at fortryde den sidste streg. Hele sessionen er ét fortrydelsestrin.

## Oprydning af flere streger på én gang

{{cmd:SKETCHFIX}} samler streger og gør dem alle præcise, når du trykker {{key:Enter}}, hvilket passer til en grov layout tegnet hurtigt.

:::note
Alt beregnes på din computer efter regler, uden model, og intet sendes nogen steder hen.
:::
