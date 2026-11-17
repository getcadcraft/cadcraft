---
title: Koordinat- og avstandsinntasting
summary: Alle måter å skrive inn et punkt, en avstand, en vinkel eller et tall på CadCraft-kommandolinjen, med eksempler.
keywords: dynamisk inntasting, dyn, f12, tab, koordinater, absolutt, relativ, polar, @, direkte avstand, vinkel, grader, siste punkt, lastpoint, skrive punkter, inntasting, aritmetikk, beregning, kalkulator, cal, pluss, brøk, uttrykk
from: 7de9252d
---

## Punkter

Når kommandoen ber om et punkt, skriv ett av disse og trykk {{key:Enter}}:

| Skriv | Betydning | Eksempel |
|---|---|---|
| `x,y` | Absolutt: målt fra origo 0,0 | `2500,1200` |
| `#x,y` | Også absolutt (godtas av vane) | `#2500,1200` |
| `@dx,dy` | Relativ: over og opp fra siste punkt | `@600,0` |
| `@d<a` | Relativ polar: avstand og vinkel fra siste punkt | `@1500<45` |
| `d<a` | Absolutt polar: avstand og vinkel fra origo | `3000<90` |
| et enkelt tall | Direkte avstand: så langt fra basispunktet, mot krysset | `1200` |
| `*x,y`, `@*dx,dy` | Verdenskoordinater mens et BKS er satt | `*0,0` |

Når et BKS er satt ({{cmd:UCS}}), måles `x,y`, `@dx,dy` og vinkelen i `d<a` langs BKS-aksene. Se [Snu visningen og bruk egne koordinater](topic:ucs-and-turned-view).

Eller klikk i tegningen; objektfang og {{ui:Ortho}} gjelder for klikk.

Regler:

- Et komma skiller X fra Y. Desimaler skrives med punktum: `1250.75,300`.
- Negative verdier går til venstre og ned: `@-600,0`.
- Ikke skriv mellomrom: {{key:Space}} sender linjen, på samme måte som {{key:Enter}}.
- Tall kan bruke eksponent: `1e3` er 1000.
- Enheter skrives ikke, og det finnes ingen fot-og-tommer-notasjon. Skriv vanlige tall i tegningsenheter.

## Siste punkt

`@` teller fra **siste punkt du oppga ved en punktforespørsel**, i hvilken som helst kommando: et klikk, et fang eller et skrevet punkt. Det huskes mellom kommandoer, slik at du kan starte en ny linje `@0,500` fra der den forrige endte. Før du har oppgitt noe punkt, teller `@` fra 0,0.

Steder dette har betydning:

- I {{cmd:COPY}} er siste punkt etter første kopi kopiens punkt. `@600,0` to ganger plasserer kopier 600 og 1200 fra originalen.
- Etter at du har plassert en måltilsetting, er siste punkt der du plasserte mållinjen, ikke målets endepunkt.

Ved tvil, bruk et absolutt punkt, et fang eller en direkte avstand.

## Direkte avstandsinntasting

Et rent tall er en avstand fra kommandoens **basispunkt** (punktet gummibåndet starter fra) mot krysset:

1. Flytt krysset i ønsket retning.
2. Skriv avstanden og trykk {{key:Enter}}.

Med {{ui:Ortho}} på låses retningen til rett over eller rett opp og ned, noe som gjør dette til den raskeste måten å tegne rette vegger på. Hvis det ikke finnes et basispunkt, eller krysset ligger nøyaktig på det, avvises tallet med «Point or option keyword required.»

## Vinkler

- I grader, som et vanlig tall: `30`, `-45`, `112.5`.
- Målt mot klokken fra positiv X-retning (peker til høyre): 0 er høyre, 90 opp, 180 venstre, 270 eller -90 ned.
- Der en vinkel etterspørres (rotasjon, tekstvinkel), kan du også klikke: vinkelen måles fra basispunktet til klikket. Før et basispunkt finnes, setter første klikk det, og ledeteksten ber om et andre punkt.

## Avstander

Der en avstand etterspørres (radius, forskyvning, teksthøyde, skaleringsfaktor):

- skriv et positivt tall (i en tegning med fot og tommer også `12'6"` eller `6-1/2`: se [Fot og tommer](topic:units-papers-scales#feet-and-inches-and-fractions)), eller
- klikk et punkt: avstanden fra kommandoens basispunkt til det, eller
- klikk to punkter når det ikke finnes et basispunkt: ledeteksten endres til `Angi andre punkt`.

«Krever et positivt tall eller to punkter.» betyr at verdien ikke var et tall, eller at den var negativ.

## Aritmetikk i en skrevet verdi

Overalt der en lengde, en koordinat, en vinkel eller et tall skrives (kommandolinjen, dynamisk inntasting, egenskapsfelt og dialogbokser), kan du skrive en beregning med `+`, `-`, `*`, `/` og parenteser i stedet for å regne den ut først:

| Skriv | Gir |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (i en tegning med fot og tommer) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, i tegningens enheter (når enhetene er satt) |
| `@4+7/16,0` | et punkt 4.4375 til høyre for det forrige |
| `360/7` | en vinkel på 51.43 grader |

- En strek skrevet inn i en lengde er fortsatt en del av den: `4-7/16` er 4 7/16, og `24'-6"` er 24 fot 6 tommer. For å trekke fra etter et fotmerke, avslutt lengden først, `24'-0"-6"`, eller sett beregningen i parenteser med mellomrom rundt streken, `(24' - 6")` (inne i parenteser er et mellomrom bare et mellomrom; ellers sender det {{key:Enter}}).
- Et vanlig tall lagt til en lengde er i tegningsenheter. Å multiplisere eller dividere med et tall skalerer lengden. To lengder multiplisert gir et areal, så `2'*3'` avvises.
- `abs`, `round`, `ceil` og `floor` fungerer også: `round(10/3)`.
- En beregning som ikke kan leses, avvises med angivelse av hva som gikk galt, for eksempel «The calculation ends too soon (character 3): a value is missing.» Ingenting blir noen gang lest som 0. {{cmd:CAL}} skriver ut verdien av en beregning.

## Dynamisk inntasting

{{ui:Dyn}} ({{key:F12}}, i statuslinjen) plasserer verdiene ved krysset mens en kommando ber om et punkt.

- Uten basispunkt ennå (en linjes første punkt) er de to feltene **X** og **Y**.
- Etter det er de **avstanden** og **vinkelen** fra siste punkt.

Skriving går fortsatt til kommandolinjen. Feltet ved krysset viser den, og gummibåndet følger den.

1. Skriv en verdi: den går inn i det uthevede feltet.
2. Trykk {{key:Tab}} (eller et komma etter X). Verdien låses (vises med fet skrift), og neste felt uthevs. En låst avstand holder gummibåndet så langt mens du sikter med musen.
3. Skriv den andre verdien, eller sikt bare, og trykk {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} tegner 50 rett opp fra siste punkt.

Trykk {{key:Enter}} etter én verdi uten {{key:Tab}} fungerer som direkte avstandsinntasting. Fot og tommer fungerer også i feltene (`12'6"`). Avstand- og vinkelforespørsler (radius for en sirkel, en rotasjon) viser også verdien ved krysset.

## Alternativer og standardverdier

- Alternativer vises i hakeparenteser. Skriv de store bokstavene i et alternativ (`D` for `[Diameter]`, `CL` for `CLose`) og trykk {{key:Enter}}. Lengre starter på ordet fungerer også (`DIA`).
- En standardverdi vises i vinkelparenteser, for eksempel `<500>`. Trykk {{key:Enter}} eller høyreklikk for å bruke den.

## Andre tastaturoppsett og tastaturblokken

Kommandonavn, korte navn og alternativbokstaver er latinske bokstaver. Med et gresk, kyrillisk (russisk, ukrainsk, hviterussisk, serbisk, makedonsk, bulgarsk), hebraisk, arabisk, persisk, thai eller koreansk oppsett aktivt trenger du ikke bytte oppsett: når ordet du skrev ikke er en kommando, et kort navn eller et alternativ slik det står, leser CadCraft det etter tastene du trykket. Tasten merket `L` på et latinsk tastatur starter fortsatt `LINE`, og tasten `C` svarer fortsatt Close, uansett hvilken bokstav oppsettet har på den. Listen over passende kommandoer over kommandolinjen følger samme regel. Tekst du skriver der en kommando ber om tekst (innholdet i {{cmd:TEXT}}, et navn), endres aldri.

På oppsett der tastaturets desimaltast gir komma, skriver den tasten et punkt på kommandolinjen og i tallfelt, slik at `12.5` kan skrives på tastaturblokken. Kommatasten på hovedtastaturet skiller fortsatt `x,y`.

Begge kan slås av i {{ui:Innstillinger}}: {{ui:Commands on a non-Latin keyboard layout}} og {{ui:Keypad decimal key}}.

## Koordinatvisningen

Statuslinjen viser krysset X og Y (i BKS når et er satt), etter fang og Ortho. Mens en kommando har et basispunkt, legger den til `Δ` med avstand og vinkel fra det punktet, for eksempel `Δ 1500 < 30°`: tallene du ville skrevet som `@1500<30`.

Bruk {{cmd:ID}} for å skrive ut et punkts koordinater og {{cmd:DIST}} for å måle mellom to punkter.
