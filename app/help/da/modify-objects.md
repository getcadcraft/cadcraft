---
title: Flyt, kopiér, roter, skalér, spejl, stræk og array
summary: Indret møbler i et rum med de grundlæggende redigeringskommandoer, med basispunkter, indtastede afstande og fortryd.
keywords: flyt, kopiér, roter, skalér, spejl, stræk, array, sammenføj, matchprop, match egenskaber, painter, arrayrect, arraypolar, polært array, slet, eksplodér, fortryd, gentag, basispunkt, forskydning, rediger, justér, fordel, flugt, fordel jævnt
from: 8eaeee6c
---

## Hvad du laver

Et bord med én stol, kopieret rundt om bordet, drejet, spejlet og ændret i størrelse. Undervejs bruger du {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} og {{cmd:UNDO}}.

## Tegn delene

1. Skriv `REC` og tryk {{key:Enter}}, skriv `0,0` og tryk {{key:Enter}}, og skriv derefter `@1800,900` og tryk {{key:Enter}}. Dette er bordet.
2. Skriv `REC` og tryk {{key:Enter}}, skriv `300,-700` og tryk {{key:Enter}}, og skriv derefter `@450,450` og tryk {{key:Enter}}. Dette er en stol under bordet.
3. Klik {{ui:Udstrækning}}.

## Flyt: basispunkt, derefter andet punkt

Hver flytning, kopiering, rotation og skalering starter fra et **basispunkt**: det punkt der føres med, eller det punkt der drejes om.

1. Klik på stolen for at vælge den.
2. Skriv `M` og tryk {{key:Enter}}. Historikken siger `1 fundet`.
3. Ved `Angiv basispunkt` fanger du stolens øverste venstre hjørne (Endepunkt) og klikker.
4. Ved `Angiv andet punkt` skriver du `@0,200` og trykker {{key:Enter}}.

Stolen flyttes 200 op, tættere på bordet.

:::tip
Skriv `D` ved `Angiv basispunkt` for i stedet at angive en forskydning: CadCraft spørger så `Angiv forskydning`, og du skriver hvor langt til siden og op, fx `0,200` (ingen `@` nødvendig).
:::

## Kopiér, så mange gange du vil

1. Klik på stolen.
2. Skriv `CO` og tryk {{key:Enter}}.
3. Fang stolens nederste venstre hjørne og klik som basispunkt.
4. Skriv `@600,0` og tryk {{key:Enter}}. En kopi vises 600 til højre.
5. Skriv `@600,0` igen og tryk {{key:Enter}}. En anden kopi vises 1200 til højre for originalen.
6. Tryk {{key:Enter}} for at afslutte kommandoen.

{{cmd:COPY}} fortsætter, indtil du trykker {{key:Enter}}. Hver kopi placeres ud fra afstanden fra basispunktet til det punkt du angiver. Et `@`-punkt tæller fra det sidst angivne punkt, som efter den første kopi er den kopis punkt, så `@600,0` to gange giver kopier i 600 og 1200. Skriv `U` og tryk {{key:Enter}} for at fjerne den sidste kopi uden at forlade kommandoen.

Du bør se tre stole i række under bordet.

:::tip
{{cmd:COPY}} er til kopier inden for én tegning, placeret ud fra et basispunkt. Til at flytte objekter til en anden tegning eller fane, eller til at sætte dem ind senere, brug udklipsholderen: {{key:Mod+C}}, derefter {{key:Mod+V}}. {{key:Mod+D}} laver én kopi, der følger markøren. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).
:::

## Spejl rækken til den anden side

1. Træk et krydsningsvindue (fra højre mod venstre) over de tre stole, uden at røre bordet.
2. Skriv `MI` og tryk {{key:Enter}}.
3. Ved `Angiv første punkt på spejlingslinjen` fanger du midtpunktet på bordets venstre side og klikker.
4. Ved `Angiv andet punkt på spejlingslinjen` fanger du midtpunktet på bordets højre side og klikker.
5. Ved `Slet kildeobjekter? [Ja (Y)/Nej (N)] <N>` trykker du {{key:Enter}} for at beholde dem.

Du bør se tre stole under bordet og tre spejlede stole over det. Tekst i et spejlet valg forbliver læsbar: den placeres spejlet, men skrives ikke baglæns.

## Roter en stol

1. Klik på den yderste højre stol under bordet.
2. Skriv `RO` og tryk {{key:Enter}}.
3. Fang stolens nederste højre hjørne og klik som basispunkt.
4. Skriv `90` og tryk {{key:Enter}}.

Stolen drejes 90 grader mod uret om basispunktet. En negativ vinkel drejer med uret. I stedet for at skrive kan du klikke et andet punkt: vinklen måles fra basispunktet til det punkt.

## Skalér bordet

1. Vælg bordet.
2. Skriv `SC` og tryk {{key:Enter}}.
3. Fang bordets nederste venstre hjørne og klik som basispunkt.
4. Skriv `1.2` og tryk {{key:Enter}}.

Bordet er 20 % større og vokser væk fra basispunktet. En faktor under 1 gør det mindre.

:::note
Hvis du klikker et punkt i stedet for at skrive skaleringsfaktoren, er faktoren afstanden fra basispunktet til punktet. Et klik én tegneenhed væk giver faktor 1. At skrive tallet er normalt det, du ønsker.
:::

## Fortryd og gentag

- {{key:Mod+Z}}, knappen {{ui:Fortryd}}, eller `U` og {{key:Enter}} fortryder den sidste kommando. En hel kommando er ét trin: fortrydes en {{cmd:COPY}}, der lavede fem kopier, fjernes alle fem.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, knappen {{ui:Gentag}}, eller `REDO` henter den tilbage.
- Historikken siger, hvad der blev fortrudt ("Fortrudt COPY").

CadCraft gemmer de sidste 500 trin. Lagindstillinger (tændt, frosset, låst, farve) er indstillinger, ikke redigeringer, og de fortrydes ikke.

## Stræk et rum bredere

{{cmd:STRETCH}} (`S`, eller {{ui:Stræk}}) flytter kun det, der ligger inde i et krydsningsvindue: hjørner og linjeender inde i det flyttes, alt andet bliver stående, så rummet bliver bredere i stedet for at flytte sig.

1. Skriv `S` og tryk {{key:Enter}}.
2. Træk et vindue fra højre mod venstre over højre væg, så det dækker væggens hjørner og enderne af alt, der støder op til den.
3. Tryk {{key:Enter}}.
4. Klik et basispunkt, skriv derefter `@600,0` og tryk {{key:Enter}}.

Rektanglet er 600 bredere; linjer, der endte på væggen, slutter stadig på den. En bue med den ene ende inde i vinduet bevarer sin højde, cirkler og tekst flytter sig, når deres centrum eller indsætningspunkt er inde, og en målsætning måler sin nye længde. Objekter valgt ét ad gangen, uden vindue, flytter sig blot.

Du kan også vælge først: træk krydsningsvinduet (eller et krydsningslasso) over væggen, uden at nogen kommando kører, og skriv derefter `S`. STRETCH tager det valg og strækker det, vinduerne holder, lige som om du havde trukket dem ved kommandoens egen ledetekst.

## Array: rækker og kolonner, eller rundt om et centrum

{{cmd:ARRAY}} (`AR`, eller {{ui:Array}}) kopierer valget i et gitter eller i en cirkel.

1. Vælg en stol, skriv `AR` og tryk {{key:Enter}}. Tryk {{key:Enter}} for Rektangulær.
2. En forhåndsvisning af 4 kolonner og 3 rækker vises. Skriv `COU`, tryk {{key:Enter}}, og skriv derefter `5` for kolonner og `2` for rækker.
3. Skriv `S`, tryk {{key:Enter}}, og skriv derefter `600` mellem kolonner og `-900` mellem rækker (negativ går nedad).
4. Tryk {{key:Enter}} for at lave kopierne.

Til en ring af stole rundt om et bord vælger du i stedet `PO` (Polar), klikker på bordets centrum og angiver `I` (elementer), `F` (udfyldningsvinkel: 360 for hele vejen rundt, 180 for halvdelen) og `ROT` (om kopierne drejes mod centrum). {{cmd:ARRAYRECT}} og {{cmd:ARRAYPOLAR}} springer spørgsmålet over.

## Sammenføj dele til én polylinje

{{cmd:JOIN}} (`J`, eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Sammenføj}}): vælg linjer, buer og åbne polylinjer, hvis ender mødes, og tryk {{key:Enter}}. De bliver til én polylinje, lukket hvis de går hele vejen rundt, og den kan du så forskyde på én gang. Linjer, der ligger på samme linje, bliver til én linje, selv med huller imellem; buer på samme cirkel bliver til én bue, eller til cirklen.

## Match egenskaber

{{cmd:MATCHPROP}} (`MA`, eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Match egenskaber}}): klik på objektet, hvis udseende du vil have, vælg derefter de objekter, der skal ændres, og tryk {{key:Enter}}. De får dets lag og farve; en tekst får dens højde, en målsætning dens størrelser, en skravering dens mønster. Skriv `S` (Indstillinger) ved det andet spørgsmål for at slå en af disse fra.

## Justér objekter

**Efter punkter.** {{cmd:ALIGN}} (`AL`, eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér}}): vælg objekterne og tryk {{key:Enter}}, klik derefter et punkt på dem (kilden) og det sted, hvor det skal hen (destinationen).

- Ét par flytter dem. Tryk {{key:Enter}} ved `Angiv andet kildepunkt` for at stoppe der.
- To par drejer dem også, så linjen mellem de to kildepunkter ligger langs linjen mellem de to destinationspunkter. CadCraft spørger så `Skalér objekter ud fra justeringspunkter?`: `Y` gør dem også så meget større eller mindre.
- Et tredje par spejler dem, når dets to punkter ligger på hver sin side af linjen.

**Kanter og afstand.** {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér og fordel}} (eller `ALIGNPANEL`) åbner et lille panel over tegningen. Vælg objekter, og derefter:

- vælg, hvad der skal flugtes med i {{ui:Justér til}} (hele valget, det første eller sidste objekt du valgte, eller et punkt du klikker), og klik {{ui:Venstre}}, {{ui:Centrum}}, {{ui:Højre}}, {{ui:Top}}, {{ui:Midt}} eller {{ui:Bund}};
- eller vælg {{ui:Lige mellemrum}} eller {{ui:Lige centre}} og klik {{ui:På tværs}} eller {{ui:Op og ned}}: de to yderste objekter bliver stående, og resten fordeles jævnt imellem dem (mindst tre objekter).

Hvert klik er ét fortrydelsestrin, og valget bliver, så du kan prøve noget andet. Hvert objekt tælles ud fra sin omsluttende boks, i UCS når en er sat. På kommandolinjen er det samme {{cmd:ALIGNTO}} og {{cmd:DISTRIBUTE}}.

## Slet og eksplodér

- {{cmd:ERASE}} (`E`, eller {{key:Delete}}) fjerner de valgte objekter.
- {{cmd:EXPLODE}} (`X`) opdeler en polylinje i linjer og buer, en blokreference i sine objekter og en målsætning i linjer, pilespidser og tekst. Eksploderede målsætninger måler ikke længere sig selv.

## Almindelige fejl

- **Skriver en afstand uden `@` ved det andet punkt.** `600,0` er det absolutte punkt 600,0, ikke "600 til højre". Brug `@600,0`, eller et nøgent `600` med krydset pegende den rigtige vej.
- **Drejningen gik den forkerte vej.** Positive vinkler drejer mod uret.
- **Fortryd fjernede mere end forventet.** Ét fortryd tager hele den sidste kommando tilbage, inklusive alle de kopier den lavede.
- **Kommandoen bad ikke om at vælge objekter.** Objekterne var allerede valgt, så den brugte dem. Tryk først {{key:Esc}} for at starte uden noget valgt.
