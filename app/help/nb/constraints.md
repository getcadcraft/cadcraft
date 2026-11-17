---
title: Legg til betingelser i en tegning
summary: Hold linjer vannrette, endepunkter sammen og mål faste med geometriske og målbetingelser, og la tegningen følge med når du endrer et mål.
keywords: betingelse, betingelser, parametrisk, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, frihetsgrader, fullt betinget
from: f8f21fa4
---

## Hva du lager

En plate der du endrer bredden på ett sted: sidene forblir rette vinkler, ett hjørne blir stående, og høyden er alltid halvparten av bredden.

Betingelser virker på linjer, polylinjer, sirkler, buer og punkter på fanen {{ui:Modell}}. Hver betingelse du legger til, er ett angre-steg.

## Tegn og sett betingelser på konturen

1. Skriv `REC` og trykk {{key:Enter}}. Skriv `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Skriv `AUTOCONSTRAIN` og trykk {{key:Enter}}. Skriv `ALL`, {{key:Enter}}, og trykk deretter {{key:Enter}} igjen.

   Historikken sier «4 constraints applied». Små bokser med **H** og **V** vises ved siden av sidene: dette er betingelseslinjene.
3. Skriv `GCFIX` og trykk {{key:Enter}}. Klikk nær nedre venstre hjørne. En boks med ⊕ vises: hjørnet blir stående der det er.

`AUTOCONSTRAIN` legger til sammenfallende betingelser der endepunkter nesten møtes, og horisontale eller vertikale betingelser der linjer nesten er vannrette eller loddrette. Skriv `S` ved ledeteksten for å endre hvor nær (0.05 tegningsenheter og 1° til å begynne med).

## Legg til målene

1. Skriv `DCHORIZONTAL` og trykk {{key:Enter}}.
2. Klikk nær nedre venstre hjørne, deretter nær nedre høyre hjørne.
3. Klikk under rektangelet for målelinjen.
4. Ledeteksten viser `Dimension text <d1=100>`. Skriv `width=120` og trykk {{key:Enter}}.

   Rektangelet er nå 120 bredt, og etiketten viser `width=120`.
5. Skriv `DCVERTICAL` og trykk {{key:Enter}}, skriv `O` og trykk {{key:Enter}}, og klikk deretter på høyre side.
6. Klikk til høyre for den, skriv `width/2` og trykk {{key:Enter}}.

   Den er 60 høy. Etiketten viser `fx: d1=width/2`: et uttrykk styrer den.

Historikken sier nå at konturen er fullt betinget. For å endre størrelsen, endre `width` (se [Bruk parametere og ligninger](topic:parameters)), eller dobbeltklikk etiketten `width=120`, skriv en ny verdi og velg {{ui:Bruk}}.

## Flytte betingede objekter

Flytt, roter, skaler, håndtak og egenskapspanelet beholder alle betingelsene: det du flytter, holdes fast, og resten følger etter. Når betingelsene ikke kan følge med, blir redigeringen ikke utført, og historikken forklarer hvorfor, for eksempel «Not done: the constraints hold that object where it is». Når du sletter et objekt, fjernes betingelsene sammen med det.

## Speil og trim betingede objekter

- {{cmd:MIRROR}} kopierer betingelsene mellom objektene du speiler, over til kopiene. Sider (hvilken vei en tangent berører, hvilken side en avstand måles til) beregnes på nytt for den speilede kopien, og kopierte mål får egne navn, slik et innlim gjør. Med `Erase source objects` `Y` blir betingelsene liggende på de speilede objektene. Historikken sier hvor mange som fulgte med.
- {{cmd:TRIM}} beholder en linjes eller en buens betingelser på det som gjenstår: en betingelse på en ende går til biten som fortsatt har den enden, en retningsregel ({{ui:Horisontal}}, {{ui:Vertikal}}, {{ui:Parallell}}, {{ui:Vinkelrett}}) gjelder på hver bit, og et mål mellom de to ytterste endene måler dem fortsatt. Betingelser som holdt delen som ble kuttet bort, eller en lengde kuttet endret ({{ui:Lik}}, en buens vinkelutstrekning), fjernes. En trimmet sirkel beholder sine senter- og radiusbetingelser. Trimmede polylinjer mister sine.

## Betingelsene

| Kommando | Beholder |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | en linje eller et segment vannrett eller loddrett (`2P`: to punkter vannrett eller loddrett) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | to linjer parallelle, i rett vinkel eller på én linje |
| {{cmd:GCCOINCIDENT}} | to punkter sammen; `O`: et punkt på en linje, sirkel eller bue |
| {{cmd:GCTANGENT}} | en linje og en sirkel eller bue, eller to av dem, som berører hverandre |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | to sirkler eller buer med ett senter; to lengder eller to radier like |
| {{cmd:GCSYMMETRIC}} | to punkter, linjer eller sirkler speilet over en linje |
| {{cmd:GCFIX}} | et punkt (klikk nær det) eller et helt objekt (`O`) der det er |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | en avstand |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | en radius, en diameter, en vinkel mellom to linjer eller en buevinkel |

{{cmd:GEOMCONSTRAINT}} og {{cmd:DIMCONSTRAINT}} spør hvilken du mener; {{ui:Betingelse}} og {{ui:Måltilsetting}} i gruppen {{ui:Parametrisk}} kjører dem, og {{ui:Mer}} der lister opp hver enkelt. Der du klikker, velges delen: et klikk nær en ende, midten eller et senter tar det punktet; et klikk på en polylinje tar segmentet under det. Det første objektet blir stående, og det andre flyttes for å møte det.

En betingelse som er i konflikt med andre, eller som ikke tilfører noe fordi de andre allerede innebærer den, avvises med en melding, og ingenting flyttes.

## Se, velg og fjern

- Klikk en boks i en betingelseslinje (eller en kvadratisk markering, eller en målsetikett) for å velge den betingelsen; historikken navngir den. Trykk {{key:Delete}} for å fjerne den.
- {{cmd:DELCONSTRAINT}} fjerner alle betingelser fra objektene du velger.
- {{cmd:CONSTRAINTBAR}}: `S` viser alle linjene, `H` skjuler dem; velg objekter først for å vise eller skjule deres. {{ui:Mer}} har {{ui:Vis betingelseslinjer}} og {{ui:Skjul betingelseslinjer}}.
- {{cmd:DCDISPLAY}} viser eller skjuler målbetingelsene. De skrives aldri ut.
- {{cmd:DCCONVERT}} gjør mål tegnet på linjer, sirkler og buer om til målbetingelser.

:::note
Hvis du har brukt AutoCADs parametriske tegning, er kommandonavnene og ledetekstene de samme. Betingelser og parametere lagres i DWG- og DXF-filer i en form andre programmer ignorerer; se [Filer](topic:files#constraints-in-files).
:::
