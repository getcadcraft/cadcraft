---
title: Egenskabspanelet
summary: Se og ændr alt om de valgte objekter, mange på én gang: koordinater med Z, størrelser, tekst, målsætningsindstillinger, gennemsigtighed og mere. Felterne tager udtryk og længder med enheder.
keywords: totaler, samlet længde, samlet areal, sum, valglængde, egenskaber, egenskabspalette, ctrl+1, pr, ch, mo, ddmodify, varierer, hurtigvalg, pickadd, koordinater, z, kote, tykkelse, gennemsigtighed, materiale, hyperlink, udtryk, quickcalc, hjørnepunkt, målsætningsstil, tolerance, decimaler
from: 10d6a829
---

## Hvad du lærer

Hvordan du åbner egenskabspanelet, ændrer ét objekt eller hundrede i ét trin, skriver præcise koordinater (med Z), bruger udtryk og enheder i ethvert talfelt, og hvad hver type objekt viser.

## Åbn det

Panelet ligger til højre. For at bringe det frem:

- Tryk {{key:Mod+1}}, eller skriv {{cmd:PROPERTIES}} (eller `PR`, `CH`, `MO`).
- Dobbeltklik et objekt (tekst og flerførte henvisninger åbner deres teksteditor i stedet).

Panelet er et flytbart panel som de andre: træk dets greb for at fastgøre det til venstre, højre eller i bunden, eller slip det over tegningen for at frigøre det (se [Arrangér panelerne og brug en anden skærm](common:arrange-panels)).

### Fold det væk

Fastgør-knappen øverst til højre i panelet slår **automatisk skjul** til: panelet foldes til en stribe ved højre kant, og tegningen får pladsen. Peg på stribet (eller tryk {{key:Mod+1}}), så åbnes det over tegningen; flyt væk, og det folder sig igen. Klik fastgør-knappen igen for at holde det åbent. {{cmd:PROPERTIESCLOSE}} folder det også væk.

## Sektioner

Egenskaberne er samlet i sektioner, du kan folde: **Generelt**, **Geometri**, **Tekst**, **Linjer og pile**, **Tilpas**, **Primære enheder**, **Alternative enheder**, **Tolerancer**, **Mønster**, **Diverse**, og for blokke **Attributter** og **Biblioteksemne**. Klik en sektions navn for at folde den væk eller åbne den; CadCraft husker, hvilke du foldede væk.

Træk den tynde linje mellem navnene og værdierne for at gøre navnene bredere eller smallere. Dobbeltklik den for at få den tilbage. Med tastaturet sætter du fokus på den og bruger piletasterne.

## Ændr en værdi

1. Klik en linje. Overskriften siger "Linje".
2. Klik i {{ui:Længde}}. Mens du redigerer, viser feltet den fulde værdi, ikke den afrundede.
3. Skriv `2500` og tryk {{key:Enter}}. Linjen er nu 2500 lang og beholder sit startpunkt og sin vinkel.

{{key:Enter}} eller et klik et andet sted anvender værdien; {{key:Esc}} sætter den gamle værdi tilbage. Hver ændring er ét fortrydelsestrin.

### Udtryk og enheder

Ethvert talfelt tager mere end et helt tal:

| Du skriver | Du får |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (tommer, i en tegning i fod og tommer) |
| `900mm`, `3.5m`, `2ft` | Omregnet til tegningens enheder |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (vinkelfelter) |
| `0.5r`, `100g` | Radianer og gon, som grader |

En længde med en enhed kræver, at tegningen har enheder: sæt {{ui:Enheder}} under {{ui:Nye objekter}} (intet valgt) først. En forkert indtastning afvises med en note under panelet, og intet ændres; den gemmes aldrig som 0. Funktioner: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; vinkler i grader.

## Ændr mange objekter på én gang

1. Vælg flere objekter, f.eks. 8 linjer og 4 målsætninger.
2. Overskriften siger "12 objekter", og en liste øverst tilbyder **Alle (12)**, **Linje (8)** og **Målsætning (4)**.
3. **Alle** viser, hvad hvert objekt har (lag, farve, linjetype …). Vælg **Målsætning (4)** for at se målsætningsindstillinger.
4. Ændr en værdi, f.eks. {{ui:Decimaler}} til `1`.

Alle fire målsætninger ændres i ét fortrydelsestrin. Et felt, der viser **Varierer**, betyder, at objekterne er forskellige; skriver du en værdi, sættes den på dem alle. Objekter på låste lag lades, som de er, og noten siger, hvor mange.

## Samlinger af et valg

Med flere objekter valgt siger afsnittet {{ui:Totaler}} øverst:

- **Objekter**: hvor mange af hver slags, f.eks. "8 linjer, 2 polylinjer, 1 cirkel".
- **Samlet længde**: linjer, buer og polylinjer lagt sammen (splines tælles også med), og hvor mange objekter det er.
- **Samlet areal**: de lukkede lagt sammen: cirkler, hele ellipser, lukkede polylinjer og skraveringer (en skraverings huller trækkes fra).

De er i tegningens længdeformat (fod og tommer, når den bruger dem; arealer så i kvadrattommer og kvadratfod). Statuslinjen viser den samme længde og det samme areal, når objekter er valgt; {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Længde og areal af valget}} › {{ui:Skjult}} slår det fra. For ét objekt viser {{ui:Geometri}} dets egen længde og areal, som før.

## Koordinater

Hvert punkt viser **X**, **Y** og **Z**: start og slut på en linje, centre, indsætningspunkter, tekstpositioner og det aktuelle polylinjehjørne. Linjer viser også **Delta X**, **Delta Y** og **Delta Z** (kun læsning). Polylinjer og skraveringer har en **Kote** (én Z for hele objektet).

Krydsknappen ved siden af et punkts navn lader dig vælge det i tegningen i stedet: klik den, og klik så den nye position (fang virker). Værdierne er verdenskoordinater.

## Generelt

| Felt | Hvad det er |
|---|---|
| {{ui:Lag}}, {{ui:Farve}}, {{ui:Linjetype}}, {{ui:Linjetypeskala}}, {{ui:Linjetykkelse}} | Som i lagpanelet; {{ui:ByLayer}} følger laget |
| {{ui:Gennemsigtighed}} | Efter lag, efter blok, eller 0 til 90 % |
| {{ui:Tykkelse}} | Hvor langt linjer, cirkler, buer, polylinjer, punkter og tekst går i Z |
| {{ui:Materiale}} | Efter lag, efter blok, Global eller et navn, en tegning har medbragt |
| {{ui:Plotstil}} | Kun læsning: tegninger plottes efter farve, gennem arkets [plotstiltabel](topic:plot-pdf#plot-style-tables) |
| {{ui:Hyperlink}} | En webadresse gemt med objektet |

## Hvad hver type viser

| Valgt | Du kan ændre |
|---|---|
| Linje | Start- og slut-X, Y, Z; længde; vinkel |
| Cirkel | Center; radius; diameter; omkreds; areal (hver sætter radius) |
| Bue | Center; radius; start- og slutvinkel; samlet vinkel; korde (viser buelængde og areal) |
| Ellipse | Center; stor og lille radius; radiusforhold; vinkel på storakse; start- og slutvinkel |
| Polylinje | Hjørnebrowseren (nedenfor); global bredde; kote; lukket; areal når lukket (skalerer om dens center) |
| Tekst | Indhold; stil; justering; højde; rotation; breddefaktor; skævvinkel; defineret bredde; linjeafstand; annotativ; position |
| Blokreference | Indsætningspunkt; rotation; skala X, Y, Z og ensartet skala; attributværdier |
| Skravering | Mønster; skala; vinkel; oprindelse; associativ; øgenkendelse; baggrundsfarve; kote |
| Målsætning | Se nedenfor |
| Flere henvisningslinjer | Tekst; højde; bredde; tekstside; pilespidsstørrelse; landingsafstand; pilespidspunkt |
| Viewport | Skala; center og størrelse på arket; visningscenter i modellen; til; visning låst |

### Polylinjehjørner

{{ui:Aktuelt hjørnepunkt}} viser, hvilket hjørne felterne under det hører til. Brug pilknapperne, eller skriv et nummer, for at gå til et andet hjørne; der er ingen grænse for antallet. Hvert hjørne har X, Y, start- og slutsegmentbredde og bulge på segmentet, der starter der (0 = lige).

## Målsætninger

En målsætning viser sin **Målsætningsstil**, hvad den måler, sine punkter og alle sine indstillinger:

- **Linjer og pile:** pilespids for hver ende, pilstørrelse, markeringsstørrelse, farver og linjetykkelser for målelinjen og hjælpelinjerne, skjul en af halvdelene eller en af hjælpelinjerne, forskydning og forlængelse af hjælpelinjer.
- **Tekst:** tilsidesættelse (lad være tom for den målte værdi; `<>` står for den i din egen tekst), stil, farve, højde, forskydning, lodret og vandret position, altid vandret, rotation, baggrundsudfyldning.
- **Tilpas:** samlet skala, afstand mellem grundlinjer, hvad der flytter sig, når pladsen er knap, tekstbevægelse.
- **Primære enheder:** format, decimaler, afrunding, præfiks, suffiks, målestok, decimaltegn, undertrykkelse af førende og efterfølgende nuller; for vinkler vinkelformat og decimaler.
- **Alternative enheder:** til eller fra, format, decimaler, multiplikator (25.4 gør tommer til millimeter), afrunding, præfiks og suffiks.
- **Tolerancer:** ingen, symmetriske, afvigelse, grænser eller basis, med øvre og nedre værdier, decimaler, højde og position.

Ændrer du en af dem på en åbnet målsætning, fjernes den tegning, det andet program lavede af den, og CadCraft tegner den igen.

:::note
Den vandrette tekstposition (ved siden af første eller anden hjælpelinje) og tekst under linjen tegnes på lineære og justerede målsætninger; på andre målsætninger gemmes og bevares de, men tegnes endnu ikke. Tilpas-valgene gemmes og bevares, men tegnes endnu ikke: CadCraft placerer tekst efter sin egen regel (over linjen, uden for når den ikke passer).
:::

## Intet valgt

Uden valg viser panelet:

- **Nye objekter:** laget, farven, linjetypen, linjetykkelsen og teksthøjden nye objekter får; tegningens enheder og længdeformat; det aktuelle lags linjetype og linjetykkelse; størrelser for nye målsætninger. På et ark kommer arkets navn, papir og orientering først.
- **Visning:** centret, højden og bredden af det, der er på skærmen. Skriv en værdi for at flytte visningen dertil.
- **Diverse:** UCS-ikonet til eller fra, UCS (altid Verden: CadCraft har endnu ingen brugerkoordinatsystemer) og annotationsskalaen.

## Knapperne øverst

| Knap | Gør |
|---|---|
| Tragt | {{cmd:QSELECT}}: vælg efter type og egenskab |
| Pil | {{cmd:SELECT}}: vælg objekter på kommandolinjen |
| Plus eller 1 | Om et klik tilføjer til valget (plus) eller erstatter det (1); samme indstilling som Indstillinger, {{ui:CadCraft}} |
| Fastgør | Automatisk skjul, ovenfor |

## Almindelige fejl

- **Skrivning i et felt gjorde ingenting.** Tryk {{key:Enter}} eller klik et andet sted for at anvende det. Et rødt felt og en note betyder, at indtastningen blev afvist.
- **En længde med en enhed afvises.** Tegningen har ingen enheder. Sæt {{ui:Enheder}}, uden at noget er valgt.
- **Kun Lag og Farve vises.** Flere slags objekter er valgt, og **Alle** er valgt. Vælg én slags i listen øverst.
- **Nogle objekter ændrede sig ikke.** De ligger på et låst lag. Lås laget op i lagpanelet.
- **Skrevne bogstaver gik ind i et felt.** Mens et felt har markøren, skrives taster der. Tryk {{key:Enter}} eller {{key:Esc}}, og skriv derefter kommandoen.
