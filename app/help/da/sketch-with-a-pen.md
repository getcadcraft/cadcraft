---
title: Skitsér med en pen og få præcis geometri
summary: Tegn frihånd med en pen, mus eller finger, og hver streg bliver til en ren linje, cirkel, bue, rektangel eller polylinje, når du løfter pennen, fanget til det, der allerede er tegnet, med sin størrelse klar til at skrive over.
keywords: skitse, pen, griffel, frihånd, finger, rydde op, præcis, fang, SKETCHLIVE, SKETCHFIX, størrelse, skriv over, tryk, linjetykkelse, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Start {{cmd:SKETCHLIVE}} (eller vælg **Tegn › Mere › Skitsér med en pen**) og tegn en streg ved at trykke og trække. Når du løfter pennen, læser CadCraft, hvad du mente, og sætter det ind i tegningen:

| Din streg | Hvad du får |
|---|---|
| Næsten lige | En linje. En næsten vandret eller lodret linje gøres præcis vandret eller lodret. |
| Lukket og rund | En cirkel |
| Del af en rund figur | En bue |
| Lukket med fire retvinklede hjørner | Et rektangel |
| Alt andet | En polylinje med firkantede sider |

Enderne af en streg trækkes hen på den nærmeste ende af det, der allerede er tegnet, så en skitseret væg møder væggen ved siden af.

## Skriv størrelsen over

Efter hver streg viser kommandolinjen dens størrelse (en linjes **længde**, en cirkels eller buens **radius**, et rektangels **bredde**) som standard. Tryk {{key:Enter}} for at beholde den, eller skriv et tal eller en længde såsom `12'6"` for at erstatte den. En linje beholder sin første ende, en cirkel sit centrum, et rektangel sit første hjørne.

Tryk {{key:Enter}} på en tom prompt for at afslutte, eller skriv `U` for at tage den sidste streg tilbage. Hele sessionen er ét fortrydelsestrin.

## Rydning af flere streger på én gang

{{cmd:SKETCHFIX}} samler streger og gør dem alle præcise, når du trykker {{key:Enter}}, hvilket passer til en hurtigt tegnet, ru opstilling.

:::note
Alt beregnes på din computer efter regler, uden model, og intet sendes nogen steder hen.
:::

## Trykket angiver linjetykkelsen

Hvor pennen er slået til for appene ({{ui:Indstillinger}} › Globalt › Inputenheder › Pen), bærer en streg tegnet med en pen hvert punkt, pennen gav, og dets tryk. En let streg laver et tyndt objekt, og en fast et tykt: strægens gennemsnitlige tryk vælger 0.18, 0.25, 0.35 eller 0.50 mm, og kommandolinjen siger, hvilken. Streger tegnet med mus eller finger tager den aktuelle linjetykkelse, som før. {{cmd:PENPRESSURE}} slår dette fra (eller til igen); valget gemmes i denne browser.
