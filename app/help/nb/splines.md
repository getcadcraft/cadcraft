---
title: Splines og polylinjer: SPLINE, SPLINEDIT, PEDIT
summary: Tegn en jevn kurve gjennom punkter eller fra en kontrollpolygon, rediger tilpasnings- og kontrollpunktene, og rediger polylinjer (slå sammen, lukk, bredde, tilpass, spline, fjern kurvatur) eller gjør en spline om til en polylinje.
keywords: spline, splinedit, spl, spe, pedit, pe, tilpasningspunkter, kontrollpunkter, vekter, nurbs, rediger polylinje, slå sammen, tilpasningskurve, fjern kurvatur, gjør om til polylinje, presisjon, tangent, kurve, tilpasningstoleranse
from: d31f72d8
---

## Det som lages

En kurve gjennom fem punkter, deretter samme kurve redigert på tre måter, og en polylinje bygget av tre linjer.

## Tegn en spline gjennom punkter

1. Skriv `SPL` og trykk {{key:Enter}}.
2. Klikk eller skriv punktene kurven skal gå gjennom: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Trykk {{key:Enter}} etter det siste.
3. {{ui:Starttangent}}: klikk et punkt kurven skal forlate mot, eller trykk {{key:Enter}} for å la programmet bestemme. Gjør det samme for sluttangenten.

Kurven går gjennom hvert punkt. Skriv `C` i stedet for {{key:Enter}} for å lukke den (kurven går tilbake til første punkt). {{key:U}} (`Angre`) tar siste punkt tilbake mens tegningen pågår.

### Tegn én fra en kontrollpolygon

Skriv `M` ved første ledetekst, deretter `C` (Kontrollpunkter) og en grad fra 1 til 5 (3 er vanlig). De valgte punktene er nå hjørnene i en polygon som trekker kurven mot seg; kurven starter i det første og slutter i det siste. En lukket kurve går rundt, uten hjørne i overgangen.

### Gjør en polylinje om til en spline

Skriv `O` (Objekt) ved første ledetekst, og velg polylinjer eller linjer. De blir til splines gjennom hjørnepunktene; originalene fjernes.

## Rediger en spline

Velg den og skriv `SPE` (eller skriv `SPE` og klikk på den). Håndtakene viser tilpasningspunktene (eller kontrollpunktene for en spline som ikke har noen): dra et for å forme kurven om. Ved ledeteksten:

- **Tilpasningsdata** (en spline tegnet gjennom punkter): `A` legger til et tilpasningspunkt (klikk der), `D` sletter ett (klikk nær det), `M` flytter ett (klikk nær det, og klikk deretter på det nye stedet), `T` setter sluttangentene, `P` fjerner tilpasningspunktene, slik at splinen fra da av redigeres med kontrollpunktene.
- **Rediger hjørnepunkt**: `A` legger til et kontrollpunkt uten å endre kurven, `M` flytter ett, `W` gir ett en **vekt** (over 1 trekker kurven nærmere det, under 1 gjør at kurven trekkes mindre mot det).
- **Åpne (O)** eller **Lukk (C)**, og **Reverser** (kurven går den andre veien).
- **Gjør om til polylinje (P)**: splinen blir en polylinje; presisjonen er hvor mange segmenter hvert spenn får (10 er vanlig).
- **Angre (U)** tar siste endring tilbake; **Avslutt (X)** avslutter.

{{ui:Egenskaper}} viser splinens grad, hvor mange tilpasnings- og kontrollpunkter den har, lengden, og gjør det mulig å åpne eller lukke den.

## Rediger en polylinje

Velg en polylinje og skriv `PE`. En linje, bue eller spline som velges, tilbys først som polylinje å gjøre om til (en spline ber om presisjonen).

- **Lukk (C)** / **Åpne (O)** slår sammen eller skiller endene.
- **Slå sammen (J)** legger til linjer, buer og polylinjer hvis ender møter polylinjens ende. `Fuzz distance` er hvor langt fra hverandre endene kan være og likevel slås sammen (0 betyr at de må møtes).
- **Bredde (W)** gir hele polylinjen én bredde (0 fjerner den).
- **Tilpass (F)** erstatter polylinjen med en jevn kurve som går gjennom hjørnepunktene; **Spline** med en kubisk B-spline som følger dem (den starter og slutter i første og siste hjørnepunkt og holder seg nær de andre). Begge blir til en polylinje med korte segmenter, og de opprinnelige hjørnene beholdes, slik at **Fjern kurvatur (D)** gjenoppretter dem.
- **Linjetypegenerering** sier om en stiplet linjetype fortsetter langs hele polylinjen eller starter på nytt ved hvert hjørnepunkt.
- **Reverser** endrer rekkefølgen på hjørnepunktene. **Flere (M)** (skriv `M` ved første ledetekst) redigerer flere polylinjer med de samme alternativene.

Redigering av hjørnepunktene på en polylinje i {{ui:Egenskaper}} eller med håndtak forblir som den var: PEDIT har ingen hjørnepunkteditor.

## I filer

DWG og DXF 2000 beholder en spline som spline: grad, kontrollpunkter, knuter, vekter, tilpasningspunkter og tangenter. En spline som åpnes og ikke endres, skrives tilbake nøyaktig slik den kom. DXF R12 har ingen spline: den lagres som en polylinje langs kurven, og historikken sier hvor mange.

Forskyv, Trim, Forleng, Avrund, Bryt og Slå sammen virker ikke på splines. {{cmd:EXPLODE}} en spline, eller {{cmd:PEDIT}} den, for å få en polylinje som disse kommandoene tar.

## Vanlige feil

- **Kurven skyter over mellom punkter som ligger tett.** En kurve gjennom punkter bøyer seg der punktene gjør det. Bruk færre punkter, eller en kontrollpolygon.
- **«Dette er ikke en spline.»** SPLINEDIT tar bare splines; {{cmd:PEDIT}} redigerer polylinjer.
- **En lukket tilpasningsspline har en litt annen form i et annet program.** CadCraft lukker den med én jevn overgang i første punkt; et annet program kan lukke den med en periodisk kurve. En lukket kontrollpunktspline er lik i begge.
