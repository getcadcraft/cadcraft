---
title: Skissa med penna och få exakt geometri
summary: Rita frihand med penna, mus eller finger, och varje streck blir en ren linje, cirkel, båge, rektangel eller polylinje när du lyfter pennan, fångad till det som redan är ritat, med sin storlek redo att skrivas över.
keywords: skiss, skissa, penna, pekpenna, frihand, finger, städa upp, exakt, fångst, SKETCHLIVE, SKETCHFIX, storlek, skriv över, tryck, linjetjocklek, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Starta {{cmd:SKETCHLIVE}} (eller välj **{{ui:Rita}} › {{ui:Mer}} › {{ui:Skissa med penna}}**) och rita ett streck genom att trycka och dra. När du lyfter pennan läser CadCraft vad du menade och lägger det i ritningen:

| Ditt streck | Vad du får |
|---|---|
| Nästan rakt | En linje. En nästan vågrät eller lodrät linje görs exakt vågrät eller lodrät. |
| Slutet och runt | En cirkel |
| En del av en rund form | En båge |
| Slutet med fyra räta hörn | En rektangel |
| Annat | En polylinje med kantiga sidor |

Strecken ändpunkter dras till närmaste ände av det som redan är ritat, så en skissad vägg möter väggen bredvid.

## Skriv över storleken

Efter varje streck visar kommandoraden dess storlek (en linjes **längd**, en cirkels eller bågens **radie**, en rektangels **bredd**) som standardvärde. Tryck på {{key:Enter}} för att behålla det, eller skriv ett tal eller en längd som `12'6"` för att ersätta det. En linje behåller sin första ände, en cirkel sitt centrum, en rektangel sitt första hörn.

Tryck på {{key:Enter}} på en tom prompt för att avsluta, eller skriv `U` för att ta tillbaka det senaste strecket. Hela sessionen är ett ångra-steg.

## Städa upp flera streck på en gång

{{cmd:SKETCHFIX}} samlar streck och gör dem alla exakta när du trycker på {{key:Enter}}, vilket passar en grov planlösning som ritats snabbt.

:::note
Allt räknas ut på din dator med regler, utan modell och utan att något skickas någonstans.
:::

## Tryck styr linjetjockleken

Där pennan är aktiverad för apparna (Inställningar › Global › Inmatningsenheter › Penna) bär ett streck som ritas med penna varje punkt pennan gav och dess tryck. Ett lätt streck gör ett tunt objekt och ett fast ett tjockt: strykets medeltryck väljer 0,18, 0,25, 0,35 eller 0,50 mm, och kommandoraden säger vilket. Streck ritade med mus eller finger använder den aktuella linjetjockleken som förut. {{cmd:PENPRESSURE}} stänger av detta (eller slår på det igen); valet sparas i den här webbläsaren.
