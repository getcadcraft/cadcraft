---
title: Skissa med penna och få exakt geometri
summary: Rita fritt med penna, mus eller finger och varje streck blir en ren linje, cirkel, båge, rektangel eller polylinje när du lyfter pennan, fångad till det som redan är ritat, med storleken redo att skrivas över.
keywords: skiss, penna, styluspenna, frihand, finger, rensa upp, exakt, fånga, SKETCHLIVE, SKETCHFIX, storlek, skriv över
from: cd87eb75
---

Starta {{cmd:SKETCHLIVE}} (eller välj **Rita › Mer › Skissa med penna**) och rita ett streck genom att trycka och dra. När du lyfter pennan läser CadCraft av vad du menade och lägger det i ritningen:

| Ditt streck | Vad du får |
|---|---|
| Nästan rakt | En linje. En nästan vågrät eller lodrät linje görs exakt vågrät eller lodrät. |
| Slutet och runt | En cirkel |
| En del av en rund form | En båge |
| Slutet med fyra räta hörn | En rektangel |
| Annat | En polylinje med kantiga sidor |

Streckets ändar dras till närmaste ände av det som redan är ritat, så att en skissad vägg möter väggen bredvid.

## Skriv över storleken

Efter varje streck visar kommandoraden dess storlek (en linjes **längd**, en cirkels eller bågens **radie**, en rektangels **bredd**) som standardvärde. Tryck {{key:Enter}} för att behålla den, eller skriv ett tal eller ett längdvärde, till exempel `12'6"`, för att ersätta den. En linje behåller sin första ände, en cirkel sitt centrum, en rektangel sitt första hörn.

Tryck {{key:Enter}} på en tom prompt för att avsluta, eller skriv `U` för att ta tillbaka det sista strecket. Hela sessionen är ett ångra-steg.

## Rensa upp flera streck samtidigt

{{cmd:SKETCHFIX}} samlar streck och gör dem alla exakta när du trycker {{key:Enter}}, vilket passar en grov layout som ritats snabbt.

:::note
Allt beräknas på din dator med regler, utan modell och utan att något skickas någonstans.
:::
