---
title: Trim og forleng
summary: Kapp linjer tilbake der andre krysser dem, og forleng dem til å møte andre, ett stykke om gangen eller mange på én gang ved å dra en bane gjennom dem.
keywords: trimextendmode, vindusdrag, trim, forleng, tr, ex, hurtigtrim, dra, frihånd, bane, gjerde, kryssing, shift, kuttekanter, grensekanter, edgemode, modus, standard, hurtig, slett, forhåndsvisning, vegger, opprydding
from: 25fbc5bd
---

## Det du lærer

Hvordan {{cmd:TRIM}} og {{cmd:EXTEND}} fungerer, og de raske måtene å bruke dem på: dra gjennom mange stykker om gangen, hold nede {{key:Shift}} for å bytte mellom trim og forlengelse, og se hva som fjernes før du klikker.

## Trim ett stykke

1. Tegn en lang vannrett linje og to korte linjer over den.
2. Skriv `TR` og trykk {{key:Enter}}. Historikken sier `Current settings: Quick mode, edges: No extend`.
3. Hold pekeren på den lange linjen mellom de to korte. Det stykket blir grått og stiplet: det er det som fjernes.
4. Klikk. Stykket forsvinner.
5. Trykk {{key:Enter}} for å avslutte kommandoen.

I hurtigmodus (standard) er hvert synlig objekt en kuttekant, så du må aldri velge kanter først. Klikk på stykket du vil fjerne. Et objekt som ingenting krysser, slettes helt, og historikken sier det.

## Trim mange stykker i ett drag

1. Tegn en lang vannrett linje og ti korte loddrette linjer over den.
2. Skriv `TR` og trykk {{key:Enter}}.
3. Trykk museknappen over den lange linjen, til venstre for den første loddrette linjen, og dra over alle ti over den lange linjen.

Mens du drar, vises banen som en stiplet linje, og hvert stykke den har krysset, blir grått. Slipp: alle ti øverste stykker trimmes i ett steg. Skriv `U` og trykk {{key:Enter}} for å legge dem tilbake alle på en gang.

:::tip
Du kan også klikke på to tomme punkter: linjen mellom dem fungerer som et dratt spor. Skriv `F` (Gjerde) for å klikke på en rekke punkter i stedet, og trykk deretter {{key:Enter}}.
:::

:::touch
Dra med en finger på samme måte. Et trykk på et stykke trimmer det.
:::

## Forleng i stedet, med Shift

1. Tegn en loddrett linje, og fem korte vannrette linjer til venstre for den, som stopper før den.
2. Skriv `TR` og trykk {{key:Enter}}.
3. Hold nede {{key:Shift}}. Hold pekeren på en kort linje: delen den ville vokst med, vises grå og stiplet.
4. Hold fortsatt nede {{key:Shift}}, og dra nedover gjennom de fem korte linjene.

Nå går alle fem til den loddrette linjen. {{key:Shift}} virker motsatt vei i {{cmd:EXTEND}} (`EX`): et klikk forlenger, et {{key:Shift}}+klikk trimmer. Forleng gjør linjen lengre i enden nærmest der du klikker, eller der banen krysser.

## Trim innenfor et vindu

1. Skriv `TR` og trykk {{key:Enter}}.
2. Skriv `C` og trykk {{key:Enter}}.
3. Klikk to hjørner rundt stykkene som skal fjernes.

Hvert stykke som ligger minst delvis innenfor vinduet, trimmes.

For å få et vindu bare ved å dra, uten å skrive `C`: {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Dragning for å trimme og forlenge}} › {{ui:Et vindu}}. Da tegner et trykk på et tomt sted og et drag en boks, og hvert stykke den berører, trimmes (eller forlenges, i {{cmd:EXTEND}}, eller med {{key:Shift}}). {{ui:En bane}} (standard) henter den frihåndsbanen tilbake. Innstillingslinjen i starten av TRIM sier hvilken som er på.

## Velg kuttekantene (standardmodus)

Noen ganger bør bare én linje kutte, for eksempel en veggflate med mange andre linjer som krysser den.

1. Skriv `TR` og trykk {{key:Enter}}.
2. Skriv `O` (modus) og trykk {{key:Enter}}, og skriv deretter `S` (Standard) og trykk {{key:Enter}}.
3. Ved `Select cutting edges` klikker du kantlinjene (eller drar et vindu), og trykker deretter {{key:Enter}}. Trykker du {{key:Enter}} uten noe valgt, blir hvert objekt en kant.
4. Klikk eller dra gjennom stykkene som skal fjernes.

Bare de valgte kantene kutter, og et objekt ingen kant krysser, blir stående. Modusen beholdes til du lukker siden; skriv `O`, deretter `Q` for å gå tilbake til hurtig. {{cmd:TRIMEXTENDMODE}} setter den før du starter, slik variabelen med samme navn gjør andre steder: `0` Standard, `1` Hurtig. `T` (cuTting edges, kuttekanter) velger nye kanter når som helst; i {{cmd:EXTEND}} er det `B` (Boundary edges, grensekanter).

## Kanter som ville nå frem

1. Skriv `TR` og trykk {{key:Enter}}.
2. Skriv `E` (Edge, kant) og trykk {{key:Enter}}, og deretter `E` (Extend, forleng) og trykk {{key:Enter}}.

Nå regnes en kuttelinje eller bue som stopper for kort, som om den fortsatte: en kort linje kutter der den ville krysset hvis den var lengre. Skriv `E`, deretter `N` (No extend, ingen forlengelse) for å gå tilbake. Dette er det samme som EDGEMODE 1 og 0.

## Slett uten å avslutte

Skriv `R` (eRase, slett) og trykk {{key:Enter}}, velg objektene som skal slettes, og trykk {{key:Enter}}. TRIM fortsetter.

## Vanlige feil

- **En hel linje forsvant.** I hurtigmodus slettes et objekt som ingenting krysser. Skriv `U` for å få det tilbake, eller bytt til standardmodus (`O`, `S`).
- **"Ingenting å trimme der: ingen valgt kant krysser det objektet."** Standardmodus kutter bare der du har valgt kanter. Skriv `T` for å velge dem på nytt.
- **"Ingen grense i den retningen."** Forleng fant ingenting foran. Klikk nærmere enden som skal vokse, eller slå på `E` (Edge, Extend) for grenser som stopper for kort.
- **Draget tegnet et lasso i stedet.** Et drag trimmer bare mens TRIM eller EXTEND ber om et objekt. Uten kommando i gang velger et drag (se [Lassovalg](topic:lasso-selection)).
- **Bare linjer, buer, sirkler og polylinjer kan trimmes.** Eksploder en blokk først for å trimme linjene i den.
