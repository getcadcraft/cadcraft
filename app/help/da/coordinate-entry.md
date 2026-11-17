---
title: Indtastning af koordinater og afstande
summary: Alle måder at skrive et punkt, en afstand, en vinkel eller et tal ind på CadCraft-kommandolinjen, med eksempler.
keywords: dynamisk input, dyn, f12, tab, koordinater, absolut, relativ, polar, @, direkte afstand, vinkel, grader, sidste punkt, lastpoint, indtastning af punkter, input, aritmetik, beregning, lommeregner, cal, plus, brøk, udtryk
from: 7de9252d
---

## Punkter

Når kommandoen beder om et punkt, skriv et af disse og tryk {{key:Enter}}:

| Du skriver | Betyder | Eksempel |
|---|---|---|
| `x,y` | Absolut: målt fra origo 0,0 | `2500,1200` |
| `#x,y` | Også absolut (accepteret af vane) | `#2500,1200` |
| `@dx,dy` | Relativ: til siden og op fra det sidste punkt | `@600,0` |
| `@d<a` | Relativ polar: afstand og vinkel fra det sidste punkt | `@1500<45` |
| `d<a` | Absolut polar: afstand og vinkel fra origo | `3000<90` |
| et enkelt tal | Direkte afstand: så langt fra basispunktet, mod krydset | `1200` |
| `*x,y`, `@*dx,dy` | Verdenskoordinater, mens et UCS er sat | `*0,0` |

Når et UCS er sat ({{cmd:UCS}}), måles `x,y`, `@dx,dy` og vinklen i `d<a` langs UCS-akserne. Se [Drej visningen og brug dine egne koordinater](topic:ucs-and-turned-view).

Eller klik i tegningen; objektfang og {{ui:Ortho}} gælder for klik.

Regler:

- Et komma adskiller X fra Y. Decimaler skrives med punktum: `1250.75,300`.
- Negative værdier går til venstre og nedad: `@-600,0`.
- Skriv ingen mellemrum: {{key:Space}} sender linjen, ligesom {{key:Enter}}.
- Tal må bruge eksponenter: `1e3` er 1000.
- Der skrives ingen enheder, og der bruges ingen fod-og-tommer-notation. Skriv almindelige tal i tegningens enheder.

## Det sidste punkt

`@` tæller fra **det sidste punkt du angav ved et hvilket som helst punktspørgsmål**, i enhver kommando: et klik, et fang eller et indtastet punkt. Det huskes mellem kommandoer, så du kan starte en ny linje `@0,500` fra der, hvor den forrige sluttede. Før du har angivet noget punkt, tæller `@` fra 0,0.

Nogle steder hvor det har betydning:

- I {{cmd:COPY}} er det sidste punkt efter den første kopi den kopis punkt. `@600,0` to gange placerer kopier 600 og 1200 fra originalen.
- Efter du har placeret en målsætning, er det sidste punkt der, hvor du placerede målelinjen, ikke målsætningens endepunkt.

Ved tvivl: brug et absolut punkt, et fang eller en direkte afstand.

## Indtastning af direkte afstand

Et tal alene er en afstand fra kommandoens **basispunkt** (punktet det gummibånd starter fra) mod krydset:

1. Flyt krydset i den retning du vil have.
2. Skriv afstanden og tryk {{key:Enter}}.

Med {{ui:Ortho}} tændt låses retningen til vandret eller lodret, og det gør dette til den hurtigste måde at tegne lige vægge på. Hvis der ikke er noget basispunkt, eller krydset ligger præcist på det, afvises tallet med "Der kræves et punkt eller et valgord."

## Vinkler

- I grader, som et almindeligt tal: `30`, `-45`, `112.5`.
- Målt mod uret fra den positive X-retning (pegende til højre): 0 er højre, 90 op, 180 venstre, 270 eller -90 ned.
- Hvor en vinkel bedes angivet (rotation, tekstvinkel), kan du også klikke: vinklen måles fra basispunktet til klikket. Før et basispunkt findes, sætter første klik det, og spørgsmålet beder om et andet punkt.

## Afstande

Hvor en afstand bedes angivet (radius, forskydning, teksthøjde, skalafaktor):

- skriv et positivt tal (i en tegning med fod og tommer også `12'6"` eller `6-1/2`: se [Fod og tommer](topic:units-papers-scales#feet-and-inches-and-fractions)), eller
- klik et punkt: afstanden fra kommandoens basispunkt til det, eller
- klik to punkter når der ikke er noget basispunkt: spørgsmålet skifter til `Angiv andet punkt`.

"Kræver et positivt tal eller to punkter." betyder, at værdien ikke var et tal, eller at den var negativ.

## Regning i en indtastet værdi

Overalt hvor en længde, en koordinat, en vinkel eller et tal skrives ind (kommandolinjen, dynamisk input, egenskabsfelter og dialogbokse), kan du skrive en beregning med `+`, `-`, `*`, `/` og parenteser i stedet for at regne den ud først:

| Skriv | Giver |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (i en tegning med fod og tommer) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, i tegningens enheder (når de er sat) |
| `@4+7/16,0` | et punkt 4.4375 til højre for det sidste |
| `360/7` | en vinkel på 51.43 grader |

- Et bindestreg skrevet ind i en længde er stadig en del af den: `4-7/16` er 4 7/16, og `24'-6"` er 24 fod 6 tommer. For at trække fra efter et fodtegn afslutter du længden først, `24'-0"-6"`, eller sætter beregningen i parenteser med mellemrum omkring bindestregen, `(24' - 6")` (inde i parenteser er et mellemrum et mellemrum; ellers sender det {{key:Enter}}).
- Et almindeligt tal lagt til en længde er i tegningens enheder; at gange eller dele med et tal skalerer længden. To længder ganget med hinanden giver et areal, så `2'*3'` afvises.
- `abs`, `round`, `ceil` og `floor` virker også: `round(10/3)`.
- En beregning, der ikke kan læses, afvises med angivelse af, hvor det gik galt, for eksempel "Beregningen slutter for tidligt (tegn 3): en værdi mangler." Intet læses nogensinde som 0. {{cmd:CAL}} viser en beregnings værdi.

## Dynamisk input

{{ui:Dyn}} ({{key:F12}}, i statuslinjen) viser værdierne ved krydset, mens en kommando beder om et punkt.

- Uden basispunkt endnu (en linjes første punkt) er de to felter **X** og **Y**.
- Derefter er de **afstanden** og **vinklen** fra det sidste punkt.

Indtastning går stadig til kommandolinjen; feltet ved krydset viser den, og gummibåndet følger den.

1. Skriv en værdi: den går ind i det markerede felt.
2. Tryk {{key:Tab}} (eller et komma efter X). Værdien låses (vises med fed), og det næste felt markeres. En låst afstand holder gummibåndet så langt, mens du sigter med musen.
3. Skriv den anden værdi, eller bare sigt, og tryk {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} tegner 50 lige op fra det sidste punkt.

Tryk {{key:Enter}} efter én værdi uden {{key:Tab}} virker som direkte afstandsindtastning. Fod og tommer virker også i felterne (`12'6"`). Spørgsmål om afstand og vinkel (en cirkels radius, en rotation) viser også deres værdi ved krydset.

## Valgmuligheder og standardværdier

- Valgmuligheder vises i firkantede parenteser. Skriv valgmulighedens store bogstaver (`D` for `[Diameter]`, `CL` for `[Luk (CL)]`) og tryk {{key:Enter}}. Længere begyndelser af ordet virker også (`DIA`).
- En standardværdi vises i vinkelparenteser, for eksempel `<500>`. Tryk {{key:Enter}} eller højreklik for at bruge den.

## Andre tastaturlayouts og det numeriske tastatur

Kommandonavne, korte navne og valgbogstaver er latinske bogstaver. Med et græsk, kyrillisk (russisk, ukrainsk, hviderussisk, serbisk, makedonsk, bulgarsk), hebraisk, arabisk, persisk, thai eller koreansk layout aktivt behøver du ikke skifte layout: når det ord, du skrev, ikke er en kommando, et kort navn eller et valg, som det står, læser CadCraft det ud fra de taster, du trykkede. Tasten mærket `L` på et latinsk tastatur starter stadig `LINE`, og tasten `C` svarer stadig `Luk`, uanset hvilket bogstav layoutet sætter på den. Listen over matchende kommandoer over kommandolinjen følger samme regel. Tekst du skriver, hvor en kommando beder om tekst (indholdet af {{cmd:TEXT}}, et navn), ændres aldrig.

På layouts, hvor decimaltasten på det numeriske tastatur giver et komma, skriver tasten et punkt på kommandolinjen og i talfelter, så `12.5` kan skrives på det numeriske tastatur. Kommatasten på hovedtastaturet adskiller stadig `x,y`.

Begge dele kan slås fra i {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} og {{ui:Keypad decimal key}}.

## Koordinatvisningen

Statuslinjen viser krydsets X og Y (i UCS, når et er sat), efter fang og {{ui:Ortho}}. Mens en kommando har et basispunkt, tilføjes `Δ` med afstanden og vinklen fra det punkt, for eksempel `Δ 1500 < 30°`: tallene du ville skrive som `@1500<30`.

Brug {{cmd:ID}} til at vise et punkts koordinater og {{cmd:DIST}} til at måle mellem to punkter.
