---
title: Egenskapspanelet
summary: Se og endre alt om de valgte objektene, mange om gangen: koordinater med Z, størrelser, tekst, måltilsetningsinnstillinger, gjennomsiktighet og mer. Felt tar uttrykk og lengder med enheter.
keywords: summer, total lengde, totalt areal, sum, utvalgslengde, egenskaper, egenskapspalett, ctrl+1, pr, ch, mo, ddmodify, varierer, hurtigvalg, pickadd, koordinater, z, høyde, tykkelse, gjennomsiktighet, materiale, hyperkobling, uttrykk, quickcalc, hjørnepunkt, måltilsetningsstil, toleranse, desimaler
from: 10d6a829
---

## Det du lærer

Hvordan du åpner Egenskaper-panelet, endrer ett objekt eller hundre i ett steg, skriver eksakte koordinater (med Z), bruker uttrykk og enheter i alle tallfelt, og hva hver type objekt viser.

## Åpne det

Panelet ligger til høyre. For å hente det frem:

- Trykk {{key:Mod+1}}, eller skriv {{cmd:PROPERTIES}} (eller `PR`, `CH`, `MO`).
- Dobbeltklikk et objekt (tekst og flerledere åpner tekstredigeringen sin i stedet).

Panelet er et flyttbart panel som de andre: dra håndtaket for å feste det til venstre, høyre eller nederst, eller slipp det over tegningen for å gjøre det flytende (se [Ordne panelene og bruk en andre skjerm](common:arrange-panels)).

### Skjul det

Festeknappen øverst til høyre i panelet slår på **automatisk skjuling**: panelet legges sammen til en stripe ved høyre kant, og tegningen får plassen. Pek på stripen (eller trykk {{key:Mod+1}}), så åpnes den over tegningen; flytt bort, og den legges sammen igjen. Klikk festeknappen igjen for å holde den åpen. {{cmd:PROPERTIESCLOSE}} skjuler den også.

## Seksjoner

Egenskapene er gruppert i seksjoner du kan skjule: **Generelt**, **Geometri**, **Tekst**, **Linjer og piler**, **Tilpasning**, **Primære enheter**, **Alternative enheter**, **Toleranser**, **Mønster**, **Diverse**, og for blokker **Attributter** og **Bibliotekselement**. Klikk på en seksjons navn for å skjule eller åpne den; CadCraft husker hvilke du skjulte.

Dra den tynne linjen mellom navnene og verdiene for å gjøre navnene bredere eller smalere. Dobbeltklikk på den for å sette den tilbake. Med tastaturet: sett fokus på den og bruk piltastene.

## Endre en verdi

1. Klikk på en linje. Overskriften leser «Linje».
2. Klikk i {{ui:Lengde}}. Mens du redigerer, viser feltet hele verdien, ikke den avrundede.
3. Skriv `2500` og trykk {{key:Enter}}. Linjen er nå 2500 lang, og beholder startpunktet og vinkelen.

{{key:Enter}} eller klikk et annet sted bruker verdien; {{key:Esc}} setter den gamle verdien tilbake. Hver endring er ett steg å angre.

### Uttrykk og enheter

Hvert tallfelt tar mer enn et enkelt tall:

| Du skriver | Du får |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (tommer, i en tegning i fot og tommer) |
| `900mm`, `3.5m`, `2ft` | Konvertert til tegningens enheter |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (vinkelfelt) |
| `0.5r`, `100g` | Radianer og gon, som grader |

En lengde med enhet krever at tegningen har enheter: sett {{ui:Enheter}} under {{ui:Nye objekter}} (med ingenting valgt) først. En ugyldig verdi avvises med en merknad under panelet, og ingenting endres; den lagres aldri som 0. Funksjoner: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; vinkler i grader.

## Endre mange objekter samtidig

1. Velg flere objekter, for eksempel 8 linjer og 4 måltilsetninger.
2. Overskriften sier «12 objekter», og en liste øverst tilbyr **Alle (12)**, **Linje (8)** og **Måltilsetning (4)**.
3. **Alle** viser hva hvert objekt har (layer, farge, linjetype …). Velg **Måltilsetning (4)** for å se innstillingene for måltilsetninger.
4. Endre en verdi, for eksempel {{ui:Desimaler}} til `1`.

Alle fire måltilsetningene endres, i ett steg å angre. Et felt som står **Varierer** betyr at objektene er forskjellige; skriver du en verdi, settes den på alle. Objekter på låste layer blir stående som de er, og merknaden sier hvor mange det er.

## Summer for et utvalg

Med flere objekter valgt, sier avsnittet {{ui:Summer}} øverst:

- **Objekter**: hvor mange av hver type, for eksempel «8 linjer, 2 polylinjer, 1 sirkel».
- **Total lengde**: linjene, buene og polylinjene lagt sammen (splines teller også med), og hvor mange objekter det er.
- **Totalt areal**: de lukkede lagt sammen: sirkler, hele ellipser, lukkede polylinjer og skravurer (en skravurs hull trekkes fra).

De vises i tegningens lengdeformat (fot og tommer når den bruker det; arealer da i kvadrattommer og kvadratfot). Statuslinjen viser den samme lengden og arealet når objekter er valgt; {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Lengde og areal for utvalget}} › {{ui:Skjult}} slår det av. For ett objekt viser {{ui:Geometri}} sin egen lengde og sitt eget areal, som før.

## Koordinater

Hvert punkt viser **X**, **Y** og **Z**: start og slutt på en linje, sentrum, innsettingspunkter, tekstposisjoner og gjeldende polylinje-hjørnepunkt. Linjer viser også **Delta X**, **Delta Y** og **Delta Z** (skrivebeskyttet). Polylinjer og skravurer har en **Høyde** (én Z for hele objektet).

Sikteknappen ved siden av et punkts navn lar deg velge det i tegningen i stedet: klikk på den, og klikk så på den nye posisjonen (fang virker). Verdiene er verdenskoordinater.

## Generelt

| Felt | Hva det er |
|---|---|
| {{ui:Layer}}, {{ui:Farge}}, {{ui:Linjetype}}, {{ui:Linjetypeskala}}, {{ui:Linjevekt}} | Som i layer-panelet; {{ui:EtterLayer}} følger layeren |
| {{ui:Gjennomsiktighet}} | EtterLayer, EtterBlokk, eller 0 til 90 % |
| {{ui:Tykkelse}} | Hvor langt linjer, sirkler, buer, polylinjer, punkter og tekst strekker seg i Z |
| {{ui:Materiale}} | EtterLayer, EtterBlokk, Global eller et navn tegningen har med seg |
| {{ui:Plottestil}} | Skrivebeskyttet: tegninger plottes etter farge, gjennom arkets [plottestiltabell](topic:plot-pdf#plot-style-tables) |
| {{ui:Hyperkobling}} | En nettadresse som lagres med objektet |

## Hva hver type viser

| Valgt | Du kan endre |
|---|---|
| Linje | Start- og slutt-X, Y, Z; lengde; vinkel |
| Sirkel | Sentrum; radius; diameter; omkrets; areal (hver setter radiusen) |
| Bue | Sentrum; radius; start- og sluttvinkel; total vinkel; korde (viser buelengde og areal) |
| Ellipse | Sentrum; hoved- og bireradius; radiusforhold; vinkel på hovedaksen; start- og sluttvinkel |
| Polylinje | Hjørnepunkt-nettleseren (under); global bredde; høyde; lukket; areal når lukket (skalerer det om sitt sentrum) |
| Tekst | Innhold; stil; justering; høyde; rotasjon; breddefaktor; skråvinkel; definert bredde; linjeavstand; annoterende; posisjon |
| Blokkreferanse | Innsettingspunkt; rotasjon; skala X, Y, Z og jevn skala; attributtverdier |
| Skravur | Mønster; skala; vinkel; opprinnelse; assosiativ; øydeteksjon; bakgrunnsfarge; høyde |
| Måltilsetning | Se under |
| Flerhjelpelinje | Tekst; høyde; bredde; tekstside; pilspissstørrelse; landingsavstand; pilspisspunkt |
| Visningsområde | Skala; sentrum og størrelse på arket; visningssentrum i modellen; på; visning låst |

### Polylinje-hjørnepunkter

{{ui:Gjeldende hjørnepunkt}} viser hvilket hjørnepunkt feltene under det tilhører. Bruk pilknappene, eller skriv et nummer, for å flytte til et annet hjørnepunkt; det er ingen grense for hvor mange. Hvert hjørnepunkt har X, Y, start- og sluttbredde for segmentet, og bulen til segmentet som starter der (0 = rett).

## Måltilsetninger

En måltilsetning viser sin **Måltilsetningsstil**, hva den måler, sine punkter, og alle innstillingene:

- **Linjer og piler:** pilspiss for hver ende, pilstørrelse, tikkstørrelse, farger og linjevekter for måle- og hjelpelinjene, skjuling av hver halvdel eller hver hjelpelinje, forskyvning og forlengelse av hjelpelinjen.
- **Tekst:** overstyring (la stå tomt for den målte verdien; `<>` står for den inne i din egen tekst), stil, farge, høyde, forskyvning, vertikal og horisontal posisjon, alltid horisontal, rotasjon, bakgrunnsfyll.
- **Tilpasning:** total skala, grunnlinjeavstand, hva som flyttes når det er lite plass, tekstbevegelse.
- **Primære enheter:** format, desimaler, avrunding, prefiks, suffiks, målestokk, desimalskilletegn, undertrykk innledende og avsluttende nuller; for vinkler vinkelformatet og desimalene.
- **Alternative enheter:** på eller av, format, desimaler, multiplikator (25.4 gjør tommer til millimeter), avrunding, prefiks og suffiks.
- **Toleranser:** ingen, symmetrisk, avvik, grenser eller grunnleggende, med øvre og nedre verdier, desimaler, høyde og posisjon.

Å endre noen av dem på en åpnet måltilsetning fjerner tegningen det andre programmet laget av den, og CadCraft tegner den på nytt.

:::note
Den horisontale tekstposisjonen (ved siden av første eller andre hjelpelinje) og tekst under linjen tegnes på lineære og innrettede måltilsetninger; på andre måltilsetninger lagres de og beholdes, men tegnes ikke ennå. Tilpasningsvalgene lagres og beholdes, men tegnes ikke ennå: CadCraft plasserer teksten etter sin egen regel (over linjen, utenfor når den ikke får plass).
:::

## Ingenting er valgt

Med ingenting valgt viser panelet:

- **Nye objekter:** layeren, farge, linjetype, linjevekt og teksthøyde nye objekter får; tegningens enheter og lengdeformat; gjeldende layers linjetype og linjevekt; størrelser for nye måltilsetninger. På et ark kommer arkets navn, papir og orientering først.
- **Visning:** sentrum, høyde og bredde av det som er på skjermen. Skriv en verdi for å flytte visningen dit.
- **Diverse:** BKS-ikonet på eller av, BKS (alltid Verden: CadCraft har ikke brukerkoordinatsystemer ennå) og annoteringsskalaen.

## Knappene øverst

| Knapp | Gjør |
|---|---|
| Filter | {{cmd:QSELECT}}: velg etter type og egenskap |
| Peker | {{cmd:SELECT}}: velg objekter på kommandolinjen |
| Pluss eller 1 | Om et klikk legger til i utvalget (pluss) eller erstatter det (1); den samme innstillingen som under Innstillinger, {{ui:CadCraft}} |
| Feste | Automatisk skjuling, over |

## Vanlige feil

- **Å skrive i et felt gjorde ingenting.** Trykk {{key:Enter}} eller klikk et annet sted for å bruke det. Et rødt felt og en merknad betyr at verdien ble avvist.
- **Et lengdemål med enhet avvises.** Tegningen har ingen enheter. Sett {{ui:Enheter}} med ingenting valgt.
- **Bare Layer og Farge vises.** Flere typer objekter er valgt, og **Alle** er valgt. Velg én type i listen øverst.
- **Noen objekter endret seg ikke.** De ligger på en låst layer. Lås opp layeren i layer-panelet.
- **Bokstaver du skrev, gikk inn i et felt.** Mens et felt har markøren, skrives taster der. Trykk {{key:Enter}} eller {{key:Esc}}, og skriv så kommandoen.
