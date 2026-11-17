---
title: Forskyv, trim, forleng, avrund og fas vegger
summary: Gjør enkeltlinjer om til doble vegger med Forskyv, rydd hjørnene med Avrund, og kutt og forleng linjer med Trim og Forleng.
keywords: forskyv, trim, forleng, avrunding, fasing, skråkant, bryt, breakatpoint, lengdeendring, vegger, hjørne, kutt, parallell, radius, opprydding
from: c6c5cbd0
---

## Hva du skal lage

Et lite rom med 200 tykke vegger: innsiden tegnes, utsiden forskyves, hjørnene ryddes, og en døråpning kuttes gjennom én vegg.

## Tegn innsiden

1. Skriv `L` og trykk {{key:Enter}}.
2. Skriv `0,0` og trykk {{key:Enter}}.
3. Skriv `@5000,0` og trykk {{key:Enter}}.
4. Skriv `@0,4000` og trykk {{key:Enter}}.
5. Skriv `@-5000,0` og trykk {{key:Enter}}.
6. Skriv `C` og trykk {{key:Enter}}.
7. Klikk {{ui:Utstrekning}}.

Du har fire separate linjer. (En lukket polylinje ville forskyves i ett grep; separate linjer viser hvordan Avrund rydder hjørner.)

## Forskyv utsiden

1. Skriv `O` og trykk {{key:Enter}}. Ledeteksten lyder `Specify offset distance [Through] <Through>:`.
2. Skriv `200` og trykk {{key:Enter}}.
3. Ved `Select object to offset`, klikk bunnlinjen.
4. Ved `Specify point on side to offset`, klikk hvor som helst under den. En parallell linje vises 200 under.
5. Klikk høyre linje, og klikk så til høyre for den.
6. Klikk topplinjen, og klikk så over den.
7. Klikk venstre linje, og klikk så til venstre for den.
8. Trykk {{key:Enter}} for å avslutte kommandoen.

Du bør se fire ytre linjer, hver like lang som sin indre linje, slik at de ytre hjørnene ikke møtes.

:::tip
Trykk {{key:Enter}} ved avstandsledeteksten for å bruke sist brukte avstand igjen. Skriv `T` for Through: da går hver kopi gjennom punktet du klikker, uansett hvilken avstand det er.
:::

{{cmd:OFFSET}} virker på linjer, buer, sirkler og polylinjer. Å forskyve en lukket polylinje forskyver hele konturen, med hjørnene med.

## Rydd de ytre hjørnene med Avrund

{{cmd:FILLET}} forbinder to linjer i et hjørne: den trimmer eller forlenger begge slik at de møtes. Med radius 0 blir hjørnet kantet.

1. Skriv `F` og trykk {{key:Enter}}. Ledeteksten lyder `Select first line [Radius]:`.
2. Hvis forrige avrunding brukte en radius, skriv `R`, trykk {{key:Enter}}, skriv `0` og trykk {{key:Enter}}.
3. Klikk den ytre bunnlinjen nær høyre ende.
4. Ved `Select second line`, klikk den ytre høyre linjen nær nedre ende.

De to linjene møtes nå i et skarpt hjørne, og kommandoen avsluttes.

5. Trykk {{key:Enter}} for å gjenta {{cmd:FILLET}}, og gjør neste hjørne.
6. Gjenta til alle fire ytre hjørnene møtes.

Klikk hver linje på den delen du vil **beholde**. Med en radius over 0 legger Avrund til en bue mellom linjene i stedet.

:::tip
Skriv `M` ved den første ledeteksten for å gjøre alle fire hjørnene i ett grep, eller tegn den ytre siden som én lukket polylinje og skriv `P`: hvert hjørne gjøres på én gang. Hold {{key:Shift}} mens du klikker den andre linjen for et skarpt hjørne uten å endre radiusen.
:::

## Fas et hjørne med Fasing

{{cmd:CHAMFER}} kutter av et hjørne med en rett linje.

1. Skriv `CHA` og trykk {{key:Enter}}.
2. Skriv `D` og trykk {{key:Enter}}. Skriv `300` og trykk {{key:Enter}} for første avstand, og trykk deretter {{key:Enter}} for å bruke 300 også for den andre.
3. Klikk den indre topplinjen nær venstre ende, og deretter den indre venstrelinjen nær toppende.

Hjørnet kuttes tilbake 300 langs hver linje, og en skråkantlinje forbinder dem. Skriv `A` i stedet for `D` for å oppgi en lengde på den første linjen og en vinkel.

## Kutt en døråpning med Trim

Tegn først de to dørkarmene over bunnveggen, og trim deretter veglinjene mellom dem.

1. Skriv `L` og trykk {{key:Enter}}.
2. Skriv `1000,200` og trykk {{key:Enter}}.
3. Skriv `@0,-600` og trykk {{key:Enter}}, og trykk deretter {{key:Enter}} igjen.
4. Trykk {{key:Enter}} for å gjenta {{cmd:LINE}}.
5. Skriv `1900,200` og trykk {{key:Enter}}.
6. Skriv `@0,-600` og trykk {{key:Enter}}, og trykk deretter {{key:Enter}} igjen.

Du har nå to korte linjer som krysser bunnveggen 900 fra hverandre.

7. Skriv `TR` og trykk {{key:Enter}}. Historikken sier `Gjeldende innstillinger: Quick mode, edges: No extend`.
8. Klikk den indre bunnlinjen mellom de to karmene. Den biten forsvinner. (Hold pekeren over den først: biten som skal fjernes, blir grå og stiplet.)
9. Klikk den ytre bunnlinjen mellom de to karmene. Den biten forsvinner også.
10. Klikk den delen av hver karm som stikker opp over veggen, og delen under.
11. Trykk {{key:Enter}} for å avslutte kommandoen.

Du bør se en 900 åpning i bunnveggen, med karmene som lukker veggendene.

I Quick-modus (standard) ber Trim deg ikke velge kuttekanter først: hvert synlige objekt er en kuttekant. Velg biten du vil fjerne, eller dra en bane gjennom flere biter for å trimme dem alle på én gang. Skriv `U` og trykk {{key:Enter}} for å få tilbake det siste valget eller draget uten å forlate kommandoen. Gjerde, kryssing, valgte kanter og {{key:Shift}} for å forlenge er i [Trim og forleng](topic:trim-and-extend).

## Forleng en linje til en annen

{{cmd:EXTEND}} forlenger en linje, bue eller polylinjeende til den møter neste objekt i den retningen.

1. Skriv `L` og trykk {{key:Enter}}.
2. Skriv `1000,2000` og trykk {{key:Enter}}.
3. Skriv `@2000,0` og trykk {{key:Enter}}, og trykk deretter {{key:Enter}} igjen. Linjen stopper 2000 før høyre vegg.
4. Skriv `EX` og trykk {{key:Enter}}.
5. Klikk den nye linjen nær høyre ende.
6. Trykk {{key:Enter}} for å avslutte kommandoen.

Linjen går nå til den indre flaten på høyre vegg. Hvert synlige objekt er en grense; velg nær enden som skal vokse. Inne i {{cmd:TRIM}} gjør {{key:Shift}}+klikk det samme.

## Bryt og forleng lengde

{{cmd:BREAK}} (`BR`, eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Bryt}}) kutter et gap uten en kuttekant: klikk objektet der gapet starter (det klikket er første punkt), og klikk deretter der det slutter. På en sirkel går delen mot klokken fra første til andre punkt. `F` ved det andre spørsmålet lar deg gi første punkt på nytt, og {{cmd:BREAKATPOINT}} deler et objekt i to i ett punkt, uten gap.

{{cmd:LENGTHEN}} (`LEN`) endrer en lengde i én ende:

1. Skriv `LEN` og trykk {{key:Enter}}. Klikk en linje for å se gjeldende lengde; ledeteksten spør igjen.
2. Velg hvordan: `DE` (Delta: et beløp å legge til, negativt for å trekke fra; `A` for en buevinkel), `P` (Percent: 50 halverer den), `T` (Total: lengden den skal ha) eller `DY` (Dynamic: dra enden).
3. Klikk hvert objekt nær enden som skal flyttes. `U` tar tilbake det siste; {{key:Enter}} avslutter.

Linjer, buer og åpne polylinjer (deres endesegment) kan forlenges.

## Vanlige feil

- **En hel linje forsvant.** Ingenting krysset den, så Quick-modus slettet den. Skriv `U` for å få den tilbake; kontroller at kuttelinjen faktisk krysser den (zoom inn), og at den ikke ligger på et layer som er av.
- **«No boundary in that direction.»** Ingen grense i den retningen. Forleng fant ingenting å støte på. Velg nærmere enden som skal vokse.
- **«Radius is too large.»** Radius er for stor. Buen ville gå forbi enden på en av linjene. Bruk en mindre radius.
- **«Only the first or last segment of an open polyline can be cut back.»** Bare det første eller siste segmentet i en åpen polylinje kan kuttes tilbake. Velg to segmenter av polylinjen ved siden av hverandre, eller skriv `P` for å runde av hvert hjørne.
- **Forskyvningen gikk til feil side.** Siden er der du klikker etter at du har valgt objektet. Angre med {{key:Mod+Z}} og klikk på den andre siden.
- **«Cannot offset that far.»** Forskyvningen ville vende buen, sirkelen eller polylinjen på innsiden. Bruk en mindre avstand.
