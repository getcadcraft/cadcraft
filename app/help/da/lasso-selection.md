---
title: Lassovalg
summary: Tryk og træk en frihåndskontur rundt om objekter for at vælge dem som et vindue, et kryds eller et hegn; skift med Space, mens du trækker.
keywords: lasso, lassomode, træk, frihånd, vælg, valg, vindue, kryds, hegn, space, polygon, touch, pen, rektangel
from: 9ec6154d
---

## Hvad du lærer

Hvordan du vælger objekter ved at tegne rundt om dem, og hvordan du får rektanglet tilbage, når du vil have det.

## Tegn et lasso

1. Tegn et par linjer og cirkler tæt på hinanden.
2. Uden at en kommando kører, trykker du med museknappen på et tomt sted og trækker rundt om nogle af dem, og flytter først **til højre**.
3. Slip knappen.

Kun objekter, der helt ligger inde i konturen, bliver valgt. Konturen tegnes med fuld linje, mens du trækker: det er et vindue-lasso.

## Vindue, kryds og hegn

Hvilke objekter du får, afhænger af den første bevægelse i dit træk og af {{key:Space}}:

| Du trækker | Lasso | Vælger |
|---|---|---|
| Først mod højre | Vindue (fuld kontur) | Kun objekter **helt inde** i konturen |
| Først mod venstre | Kryds (stiplet, grøn) | Objekter inde i konturen **og** objekter, som konturen rører |
| Tryk på {{key:Space}} mens du trækker | Vindue, derefter kryds, derefter hegn | Hegn (en stiplet sti, ikke lukket): kun objekter, stien krydser |

1. Tryk på et tomt sted og træk rundt om nogle objekter, og flyt først **mod venstre**. Alt, som konturen rører, bliver også valgt.
2. Tryk på {{key:Esc}}.
3. Tryk og træk igen; mens knappen stadig er nede, trykker du én gang på {{key:Space}}. Konturen bliver til et kryds. Tryk på {{key:Space}} igen for et hegn.

{{key:Shift}}, når du slipper, fjerner objekterne fra valget i stedet (med "Klik på objekter: Tilføj" i Indstillinger).

## Inde i en kommando

Et lasso virker overalt, hvor CadCraft beder om `Select objects`: tegn det, og tryk derefter på {{key:Enter}} for at afslutte. {{cmd:STRETCH}} bruger et kryds-lasso som sit vindue, så du kan strække en L-formet del af en tegning på én gang.

{{cmd:TRIM}} og {{cmd:EXTEND}} bruger et træk på en anden måde: her beskærer (eller forlænger) de hvert stykke, stien krydser. Se [Beskær og forlæng](topic:trim-and-extend).

## Rektanglet

Et klik på et tomt sted, en flytning og et andet klik tegner altid rektangelvinduet (fra venstre mod højre) eller krydset (fra højre mod venstre).

Vil du have, at et træk igen tegner rektanglet, skal du åbne {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Træk for at vælge}} og vælge {{ui:Rektangel}}, eller skrive {{cmd:LASSOMODE}} og derefter `0`. Skriv {{cmd:LASSOMODE}} og derefter `1` for lassoet. Valget gemmes i denne browser.

:::touch
Træk med en finger eller en pen på samme måde. Et tryk vælger stadig ét objekt.
:::

## Almindelige fejl

- **Intet blev valgt.** Lassoet var et vindue, og intet lå helt inde i det. Start trækket mod venstre, eller tryk på {{key:Space}} mens du trækker.
- **Trækket flyttede et greb.** Hvis du trykker på et greb på et valgt objekt, flyttes grebet. Start lassoet på et tomt sted.
- **Space afsluttede kommandoen.** {{key:Space}} skifter kun lasso, mens knappen er nede; ellers virker den som {{key:Enter}}.
