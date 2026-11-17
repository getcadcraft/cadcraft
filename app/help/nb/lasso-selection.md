---
title: Lasso-utvalg
summary: Trykk og dra en fri omriss rundt objekter for å velge dem, som et vindu, en kryssing eller et gjerde; bytt med Space mens du drar.
keywords: lasso, lassomode, dra, frihånd, velg, utvalg, vindu, kryssing, gjerde, space, mangekant, berøring, penn, rektangel
from: 9ec6154d
---

## Hva du lærer

Hvordan du velger objekter ved å tegne rundt dem, og hvordan du får rektangelet tilbake når du vil ha det.

## Tegn en lasso

1. Tegn noen linjer og sirkler tett sammen.
2. Uten at en kommando kjører, trykker du musknappen på et tomt sted og drar rundt noen av dem, og beveger deg **til høyre** først.
3. Slipp.

Bare objekter som ligger helt innenfor omrisset, blir valgt. Omrisset tegnes heltrukket mens du drar: dette er en vindu-lasso.

## Vindu, kryssing og gjerde

Hvilke objekter du får, avhenger av den første bevegelsen i draget og av {{key:Space}}:

| Du drar | Lasso | Velger |
|---|---|---|
| Til høyre først | Vindu (heltrukket omriss) | Bare objekter **helt innenfor** |
| Til venstre først | Kryssing (stiplet, grønn) | Objekter innenfor **og** objekter som omrisset berører |
| Trykk {{key:Space}} mens du drar | Vindu, deretter kryssing, deretter gjerde | Gjerde (en stiplet bane, ikke lukket): bare objekter banen krysser |

1. Trykk på et tomt sted og dra rundt noen objekter, og beveg deg **til venstre** først. Alt omrisset berører, blir også valgt.
2. Trykk {{key:Esc}}.
3. Trykk og dra igjen; mens du fortsatt holder knappen inne, trykker du {{key:Space}} én gang. Omrisset blir til en kryssing; trykk {{key:Space}} igjen for et gjerde.

{{key:Shift}} når du slipper, fjerner objektene fra utvalget i stedet (med «Klikk på objekter: Legger til» i {{ui:Innstillinger}}).

## Inne i en kommando

En lasso fungerer overalt der CadCraft ber om `Velg objekter`: tegn den, og trykk {{key:Enter}} for å avslutte. {{cmd:STRETCH}} tar en kryssingslasso som vindu, slik at du kan strekke en L-formet del av en tegning i ett drag.

{{cmd:TRIM}} og {{cmd:EXTEND}} bruker et drag annerledes: der trimmer (eller forlenger) de hver del banen krysser. Se [Trim og forleng](topic:trim-and-extend).

## Rektangelet

Et klikk på tomt rom, en bevegelse og et nytt klikk tegner alltid rektangelvinduet (venstre til høyre) eller kryssingen (høyre til venstre).

For å få et drag til å tegne rektangelet igjen, åpne {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Dra for å velge}} og velg {{ui:Rektangel}}, eller skriv {{cmd:LASSOMODE}} og deretter `0`. Skriv {{cmd:LASSOMODE}} og deretter `1` for lassoen. Valget beholdes i denne nettleseren.

:::touch
Dra med en finger eller en penn på samme måte. Et trykk velger fortsatt ett objekt.
:::

## Vanlige feil

- **Ingenting ble valgt.** Lassoen var et vindu, og ingenting lå helt innenfor. Start draget til venstre, eller trykk {{key:Space}} mens du drar.
- **Draget flyttet et håndtak.** Å trykke på et valgt objekts håndtak flytter håndtaket. Start lassoen på et tomt sted.
- **Space avsluttet kommandoen.** {{key:Space}} bytter lassoen bare mens knappen holdes nede; ellers er det Enter.
