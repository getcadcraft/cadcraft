---
title: Lag og sett inn blokker
summary: Gjør en tegnet dør om til en blokk, plasser den igjen på andre posisjoner, skalaer og vinkler, og rydd opp i ubrukte blokker.
keywords: blokk, bmake, sett inn, ddinsert, symbol, purge, eksploder, omdefiner, basispunkt, referanse, tell, bcount, tabell, csv, attributter, datauttrekk
from: 125a129d
---

## Hva du skal lage

Et dørsymbol gjort om til en blokk kalt `DOOR-900`, deretter plassert tre ganger: slik den er tegnet, dreiet 90 grader og speilvendt.

En blokk er en navngitt gruppe objekter. Du tegner den én gang; hvert sted du bruker den, er en **blokkreferanse** som peker tilbake til den ene definisjonen. Seksjonen {{ui:Blokker}} i venstre panel lister opp blokkene i tegningen og hvor ofte hver brukes.

## Tegn døren

1. Skriv `L` og trykk {{key:Enter}}.
2. Skriv `0,0` og trykk {{key:Enter}}.
3. Skriv `@0,900` og trykk {{key:Enter}}, og trykk deretter {{key:Enter}} igjen. Dette er dørbladet.
4. Skriv `A` og trykk {{key:Enter}}.
5. Skriv `C` og trykk {{key:Enter}} for å angi sentrum først.
6. Skriv `0,0` og trykk {{key:Enter}} for sentrum.
7. Skriv `900,0` og trykk {{key:Enter}} for startpunktet.
8. Skriv `0,900` og trykk {{key:Enter}} for sluttpunktet. Dette er dørsvingen.
9. Klikk {{ui:Utstrekning}}.

Buer går mot klokken fra startpunktet til sluttpunktet.

## Lag blokken

1. Skriv `B` og trykk {{key:Enter}}, eller klikk {{ui:Lag}} i gruppen {{ui:Blokker}}.
2. Ved `Enter block name` skriver du `DOOR-900` og trykker {{key:Enter}}.
3. Ved `Specify insertion base point` skriver du `0,0` og trykker {{key:Enter}}. Dette er hengselen: punktet som havner der du plasserer blokken.
4. Ved `Select objects` drar du et vindu rundt bladet og buen.
5. Trykk {{key:Enter}}.

Historikken sier `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panelet {{ui:Blokker}} lister DOOR-900 med `1×` ved siden av: én referanse. Klikk på døren: den velges nå som ett objekt, en «Blokkreferanse».

:::tip
Du kan velge objektene først og deretter skrive `B`. CadCraft spør fortsatt etter navn og basispunkt, og bruker deretter utvalget ditt.
:::

## Sett inn blokken

1. Skriv `I` og trykk {{key:Enter}}, eller klikk {{ui:Sett inn}} ved siden av DOOR-900 i panelet {{ui:Blokker}}.
2. Ved `Enter block name or [File/Library] <DOOR-900>` trykker du {{key:Enter}}. (Knappen {{ui:Sett inn}} i panelet fyller inn navnet for deg.)
3. Døren følger krysset. Klikk der hengselen skal være.

En andre dør dukker opp.

## Sett inn dreid eller skalert

1. Skriv `I` og trykk {{key:Enter}}, og trykk deretter {{key:Enter}} for å godta navnet.
2. Ved `Specify insertion point [Scale/Rotate]` skriver du `R` og trykker {{key:Enter}}.
3. Skriv `90` og trykk {{key:Enter}}. Forhåndsvisningen dreier seg.
4. Klikk for å plassere den.

Skriv `S` i stedet for å angi en skaleringsfaktor; den gjelder begge retninger. Skalering og rotasjon huskes ved neste innsetting. For å speilvende en dør, sett den inn og bruk {{cmd:MIRROR}} på referansen.

## Endre en plassert blokk

Velg en blokkreferanse. I høyre panel kan du endre {{ui:X}}, {{ui:Y}}, {{ui:Skala X}}, {{ui:Skala Y}} og {{ui:Rotasjon}}. En negativ {{ui:Skala X}} speiler den.

## Omdefiner en blokk

For å endre alle dører samtidig, lag en blokk med samme navn:

1. Tegn den nye versjonen av døren.
2. Skriv `B` og trykk {{key:Enter}}, og skriv `DOOR-900`.
3. Ved `Block "DOOR-900" already exists. Redefine it?` skriver du `Y` og trykker {{key:Enter}}.
4. Angi basispunktet og velg de nye objektene, som før.

Hver referanse til DOOR-900 viser nå den nye versjonen.

Eller rediger selve blokken: {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger blokk}} ({{cmd:BEDIT}}) åpner den alene, og {{ui:Lagre blokk}} legger den tilbake. Se [Blokkattributter](topic:attributes#change-a-block-the-block-editor).

## Tell blokker og eksporter en tabell

Skriv {{cmd:COUNT}} (eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Tell blokker}}), og deretter:

- klikk på én dør: alle dører i dette området velges, og historikken sier hvor mange det er her og i hele tegningen;
- eller trykk {{key:Enter}}: historikken lister hver blokk med antallet, flest først;
- eller skriv `E`, deretter `C` for en CSV med antallene (i modellen, på ark og totalt) eller `A` for én rad per referanse med layer, posisjon, rotasjon og hver attributtverdi – en tabell du kan åpne i et regneark.

Ikke-navngitte blokker (mål, tabeller) og referanser inne i andre blokker telles ikke. Celler som begynner som en formel (`=`, `+`, `-`, `@`) får et innledende `'`, slik at et regneark viser dem som tekst.

## Eksploder og rens

- {{cmd:EXPLODE}} (`X`) gjør en valgt blokkreferanse om til separate objekter igjen. Definisjonen består.
- {{cmd:PURGE}} (`PU`) fjerner blokkdefinisjoner som ingenting bruker lenger. Historikken sier hvor mange den fjernet.

## Blokknavn

Et navn kan være opptil 255 tegn og kan inneholde mellomrom, men det kan ikke begynne med en stjerne, og kan ikke inneholde `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` eller et backtick-tegn. Når du lagrer DXF R12, skrives navn med store bokstaver, andre tegn enn bokstaver, sifre, `$`, `_` og `-` blir til `_`, og navn kuttes til 31 tegn; historikken sier hvor mange som ble endret. Korte navn med store bokstaver, sifre og bindestreker, som `DOOR-900`, består uendret. En lagret DWG beholder navn slik du skrev dem, med store og små bokstaver; bare tegn DWG ikke tillater, endres (en `|` blir `$0$`, andre blir `_`).

## Skriv en blokk eller objekter til en egen fil

Skriv `W` ({{cmd:WBLOCK}}) og velg **Objekter**, **Blokk** eller **Hele tegningen**. Resultatet er en ny DWG eller DXF som bare inneholder layerne, stilene og blokkene den bruker, med basispunktet ditt som origo. For objekter kan du beholde dem, gjøre dem om til en blokk, eller slette dem fra denne tegningen.

## Vanlige feil

- **Blokken havnet langt fra krysset.** Basispunktet var ikke på objektene. Lag blokken på nytt med basispunktet på et hjørne eller en hengsel.
- **«Ingen objekter er valgt; ingenting er laget.»** Du trykket {{key:Enter}} før du valgte noe.
- **«Denne tegningen har ingen blokker ennå: F setter inn én fra en fil, L fra biblioteket (eller lag en med BLOCK).»** Skriv `F` for å hente en blokk fra en annen tegning, eller `L` for biblioteket. Se [Sett inn fra en fil eller biblioteket](topic:insert-from-file-and-library).
- **«Et visningsområde kan ikke være med i en blokk.»** Ta ikke med rammer for visningsområder i utvalget.
