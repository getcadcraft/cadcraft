---
title: Flytt, kopier, roter, skaler, speil, strekk og matrise
summary: Legg ut møbler i et rom med de grunnleggende endrekommandoene, med basispunkter, skrevne avstander og angre.
keywords: flytt, kopier, roter, skaler, speil, strekk, matrise, slå sammen, matchprop, match egenskaper, painter, arrayrect, arraypolar, polarmatrise, slett, eksploder, angre, gjør om, basispunkt, forskyvning, endre, innrett, fordel, innrett på linje, fordel jevnt
from: 8eaeee6c
---

## Hva du skal lage

Et bord med én stol, kopiert rundt bordet, snudd, speilet og endret størrelse. Underveis bruker du {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} og {{cmd:UNDO}}.

## Tegn delene

1. Skriv `REC` og trykk {{key:Enter}}, skriv `0,0` og trykk {{key:Enter}}, og skriv deretter `@1800,900` og trykk {{key:Enter}}. Dette er bordet.
2. Skriv `REC` og trykk {{key:Enter}}, skriv `300,-700` og trykk {{key:Enter}}, og skriv deretter `@450,450` og trykk {{key:Enter}}. Dette er en stol, under bordet.
3. Klikk {{ui:Utstrekning}}.

## Flytt: basispunkt, deretter andre punkt

Hver flytting, kopiering, rotasjon og skalering starter fra et **basispunkt**: punktet som blir med, eller punktet som det dreies om.

1. Klikk stolen for å velge den.
2. Skriv `M` og trykk {{key:Enter}}. Historikken sier `1 found`.
3. Ved `Specify base point`, fang øverste venstre hjørne av stolen (Endepunkt) og klikk.
4. Ved `Specify second point`, skriv `@0,200` og trykk {{key:Enter}}.

Stolen flytter seg opp 200, nærmere bordet.

:::tip
Skriv `D` ved `Specify base point` for å gi en forskyvning i stedet: CadCraft spør da `Specify displacement`, og du skriver hvor langt til siden og opp, for eksempel `0,200` (ingen `@` nødvendig).
:::

## Kopier, så mange ganger du vil

1. Klikk stolen.
2. Skriv `CO` og trykk {{key:Enter}}.
3. Fang nedre venstre hjørne av stolen og klikk som basispunkt.
4. Skriv `@600,0` og trykk {{key:Enter}}. En kopi vises 600 til høyre.
5. Skriv `@600,0` igjen og trykk {{key:Enter}}. En andre kopi vises 1200 til høyre for originalen.
6. Trykk {{key:Enter}} for å avslutte kommandoen.

{{cmd:COPY}} fortsetter til du trykker {{key:Enter}}. Hver kopi plasseres med avstanden fra basispunktet til punktet du oppgir. Et `@`-punkt regnes fra det siste punktet du skrev inn, som etter første kopi er den kopiens punkt, så `@600,0` to ganger gir kopier på 600 og 1200. Skriv `U` og trykk {{key:Enter}} for å ta tilbake den siste kopien uten å forlate kommandoen.

Du bør se tre stoler på rad under bordet.

:::tip
{{cmd:COPY}} er for kopier i én tegning, plassert med et basispunkt. For å flytte objekter til en annen tegning eller fane, eller lime dem inn senere, bruk utklippstavlen: {{key:Mod+C}}, deretter {{key:Mod+V}}. {{key:Mod+D}} lager én kopi som følger pekeren. Se [Kopier, lim inn og dupliser](topic:copy-paste).
:::

## Speil raden til den andre siden

1. Dra et kryssvindu (fra høyre til venstre) over de tre stolene, uten å berøre bordet.
2. Skriv `MI` og trykk {{key:Enter}}.
3. Ved `Specify first point of mirror line`, fang Midtpunkt på bordets venstre side og klikk.
4. Ved `Specify second point of mirror line`, fang Midtpunkt på bordets høyre side og klikk.
5. Ved `Erase source objects? [Yes/No] <N>`, trykk {{key:Enter}} for å beholde dem.

Du bør se tre stoler under bordet og tre speilede stoler over det. Tekst i et speilet utvalg forblir lesbar: den plasseres speilet, men skrives ikke baklengs.

## Roter en stol

1. Klikk stolen lengst til høyre under bordet.
2. Skriv `RO` og trykk {{key:Enter}}.
3. Fang stolens nedre høyre hjørne og klikk som basispunkt.
4. Skriv `90` og trykk {{key:Enter}}.

Stolen dreies 90 grader mot klokken om basispunktet. En negativ vinkel dreier med klokken. I stedet for å skrive kan du klikke et andre punkt: vinkelen måles fra basispunktet til det punktet.

## Skaler bordet

1. Velg bordet.
2. Skriv `SC` og trykk {{key:Enter}}.
3. Fang bordets nedre venstre hjørne og klikk som basispunkt.
4. Skriv `1.2` og trykk {{key:Enter}}.

Bordet blir 20 % større og vokser bort fra basispunktet. En faktor under 1 gjør det mindre.

:::note
Hvis du klikker et punkt i stedet for å skrive skaleringsfaktoren, er faktoren avstanden fra basispunktet til det punktet. Å klikke ett tegningsenhet unna gir faktor 1. Det er vanligvis best å skrive tallet.
:::

## Angre og gjør om

- {{key:Mod+Z}}, knappen {{ui:Angre}}, eller `U` og deretter {{key:Enter}} angrer den siste kommandoen. En hel kommando er ett steg: å angre en {{cmd:COPY}} som lagde fem kopier fjerner alle fem.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, knappen {{ui:Gjør om}}, eller `REDO` henter den tilbake.
- Historikken sier hva som ble angret ("Angret COPY").

CadCraft beholder de siste 500 stegene. Layer-innstillinger (på, frys, lås, farge) er innstillinger, ikke redigeringer, og angres ikke.

## Strekk et rom bredere

{{cmd:STRETCH}} (`S`, eller {{ui:Strekk}}) flytter bare det som ligger innenfor et kryssvindu: hjørner og linjeender inni det flyttes, alt annet blir stående, slik at rommet blir bredere i stedet for å bli flyttet.

1. Skriv `S` og trykk {{key:Enter}}.
2. Dra et vindu fra høyre til venstre over høyre vegg, slik at det dekker veggens hjørner og endene på alt som møter den.
3. Trykk {{key:Enter}}.
4. Klikk et basispunkt, skriv deretter `@600,0` og trykk {{key:Enter}}.

Rektangelet er 600 bredere; linjer som endte på veggen, slutter fortsatt på den. En bue med én ende inni beholder høyden sin, sirkler og tekst flyttes når senteret eller innsettingspunktet er inni, og et mål måler sin nye lengde. Objekter valgt ett og ett, uten vindu, bare flyttes.

Du kan også velge først: dra kryssvinduet (eller et kryssende lasso) over veggen uten at noen kommando kjører, og skriv deretter `S`. STRETCH tar da det valget og strekker det som vinduene inneholder, akkurat som om du hadde dratt dem ved sin egen ledetekst.

## Matrise: rader og kolonner, eller rundt et senter

{{cmd:ARRAY}} (`AR`, eller {{ui:Matrise}}) kopierer utvalget i et rutenett eller i en sirkel.

1. Velg en stol, skriv `AR`, og trykk {{key:Enter}}. Trykk {{key:Enter}} for Rektangulær.
2. En forhåndsvisning med 4 kolonner og 3 rader vises. Skriv `COU`, trykk {{key:Enter}}, og skriv deretter `5` for kolonner og `2` for rader.
3. Skriv `S`, trykk {{key:Enter}}, og skriv deretter `600` mellom kolonner og `-900` mellom rader (negativ går nedover).
4. Trykk {{key:Enter}} for å lage kopiene.

For en ring av stoler rundt et bord, velg `PO` (Polar) i stedet, klikk bordets senter, og sett `I` (elementer), `F` (fyllvinkel: 360 for hele veien rundt, 180 for halvparten) og `ROT` (om kopiene skal dreies mot senteret). {{cmd:ARRAYRECT}} og {{cmd:ARRAYPOLAR}} hopper over spørsmålet.

## Slå sammen biter til én polylinje

{{cmd:JOIN}} (`J`, eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Slå sammen}}): velg linjer, buer og åpne polylinjer der endene møtes, og trykk {{key:Enter}}. De blir til én polylinje, lukket når de går hele veien rundt, og den kan du deretter forskyve i ett grep. Linjer som ligger på én linje blir til én linje, selv med mellomrom mellom seg; buer på én sirkel blir til én bue, eller til sirkelen.

## Match egenskaper

{{cmd:MATCHPROP}} (`MA`, eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Match egenskaper}}): klikk objektet som har utseendet du vil ha, velg objektene som skal endres, og trykk {{key:Enter}}. De tar over layeret og fargen; en tekst tar over høyden, et mål sine størrelser, og en skravur sitt mønster. Skriv `S` (Innstillinger) ved det andre spørsmålet for å slå av noen av disse.

## Juster objekter

**Etter punkter.** {{cmd:ALIGN}} (`AL`, eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Innrett}}): velg objektene og trykk {{key:Enter}}, og klikk deretter et punkt på dem (kilden) og hvor det skal hen (målet).

- Ett par flytter dem. Trykk {{key:Enter}} ved `Specify second source point` for å stoppe der.
- To par dreier dem også, slik at linjen mellom de to kildepunktene ligger langs linjen mellom de to målpunktene. CadCraft spør da `Scale objects based on alignment points?`: `Y` gjør dem også større eller mindre tilsvarende.
- Et tredje par speiler dem når de to punktene ligger på hver sin side av den linjen.

**Kanter og avstander.** {{ui:Endre}} › {{ui:Mer}} › {{ui:Innrett og fordel}} (eller `ALIGNPANEL`) åpner et lite panel over tegningen. Velg objekter, og deretter:

- velg hva som skal rettes inn mot i {{ui:Innrett til}} (hele utvalget, det første eller siste objektet du valgte, eller et punkt du klikker), og klikk {{ui:Venstre}}, {{ui:Senter}}, {{ui:Høyre}}, {{ui:Topp}}, {{ui:Midten}} eller {{ui:Bunn}};
- eller velg {{ui:Like mellomrom}} eller {{ui:Like sentre}} og klikk {{ui:Bortover}} eller {{ui:Opp og ned}}: de to ytterste objektene blir stående, og resten fordeles jevnt mellom dem (minst tre objekter).

Hvert klikk er ett steg du kan angre, og utvalget blir stående, så du kan prøve noe annet. Hvert objekt telles etter sin avgrensningsboks, i BKS når en er satt. På kommandolinjen er det samme {{cmd:ALIGNTO}} og {{cmd:DISTRIBUTE}}.

## Slett og eksploder

- {{cmd:ERASE}} (`E`, eller {{key:Delete}}) fjerner de valgte objektene.
- {{cmd:EXPLODE}} (`X`) deler en polylinje i linjer og buer, en blokkreferanse i sine objekter, og et mål i linjer, pilspisser og tekst. Eksploderte mål måler ikke lenger seg selv.

## Vanlige feil

- **Å skrive en avstand uten `@` ved det andre punktet.** `600,0` er det absolutte punktet 600,0, ikke "600 til høyre". Bruk `@600,0`, eller bare `600` med krysset pekende riktig vei.
- **Rotasjonen gikk feil vei.** Positive vinkler dreier mot klokken.
- **Angre fjernet mer enn ventet.** Ett angre tar tilbake hele siste kommando, inkludert alle kopier den lagde.
- **Kommandoen ba ikke om å velge objekter.** Objekter var allerede valgt, så den brukte dem. Trykk {{key:Esc}} først for å starte uten noe valgt.
