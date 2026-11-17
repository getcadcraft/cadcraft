---
title: Organisér en tegning med lag
summary: Opret lag til vægge, døre og noter, angiv farver, gør et lag aktuelt, og slå lag fra, frys dem, lås dem eller forhindr dem i at blive plottet.
keywords: lag, layers, la, aktuelt lag, frys, tø op, lås, slukket, plot, ikke plot, farve, colour, color, lagegenskaber, layiso, layuniso, isolér, layoff, layfrz, laymcur, layon, laythw, omdøb, laymrg, flet, laydel, slet lag
from: cd033591
---

## Hvad du skal lave

Tre lag, Vægge, Døre og Noter, hvert med sin egen farve, med objekter tegnet på hvert lag og flyttet mellem dem.

## Lagpanelet

Lag findes i panelet til venstre, under {{ui:Layers}}. Hver række viser, fra venstre mod højre:

- en prik: fyldt for det **aktuelle** lag, hvor nye objekter havner;
- en farveprøve;
- lagnavnet;
- fire knapper: til/fra (øje), frys (snefnug), lås (hængelås) og plot (printer).

Hver tegning har et lag med navnet `0`. Hvis du skriver `LA` og trykker på {{key:Enter}}, springer du til panelet.

## Opret lag

1. Klik på {{ui:New layer}} over listen. En navnekasse åbner.
2. Skriv `Walls` og tryk på {{key:Enter}} (eller klik på {{ui:Tilføj}}).

Statuslinjen siger "Lag Walls er tilføjet og gjort aktuelt." Det nye lag får farve 7 (sort på det lyse tema, hvid på det mørke).

3. Klik på {{ui:New layer}} igen, skriv `Doors` og tryk på {{key:Enter}}.
4. Klik på {{ui:New layer}} igen, skriv `Notes` og tryk på {{key:Enter}}.

Noter er nu aktuelt.

## Giv hvert lag en farve

1. Klik på farveprøven på rækken for Vægge. Dit systems farvevælger åbner.
2. Vælg en farve og bekræft.

Farveprøven og alt på Vægge, der er farvet {{ui:By layer}}, skifter farve.

:::note
En valgt farve, der svarer til en af de 255 standardfarver i CAD, gemmes som det nummer. Enhver anden farve bevares præcist i CadCraft, men gemmes som den nærmeste standardfarve i en DWG- eller DXF-fil.
:::

## Tegn på et lag

1. Klik på navnet **Walls** i listen. Dens prik bliver fyldt, og statuslinjen siger "Aktuelt lag: Walls".
2. Tegn et rektangel (`REC`). Det havner på Vægge.
3. Klik på **Doors**, og tegn en bue (`A`). Den havner på Døre.

Du kan også vælge det aktuelle lag i {{ui:Current settings}} til højre (når intet er valgt), under {{ui:Layer}}.

## Flyt objekter til et andet lag

1. Vælg objekterne.
2. I højre panel vælger du det nye lag i {{ui:Layer}}.

De flyttes til laget og får dets farve, hvis deres farve er {{ui:By layer}}.

## Fra, frys, lås og plot

| Knap | Hvad den gør |
|---|---|
| Til/fra (øje) | Skjuler lagets objekter. De kan ikke ses, vælges eller fanges. |
| Frys (snefnug) | Samme virkning som fra i CadCraft. Holdes adskilt, fordi andre programmer behandler dem forskelligt, og indstillingen gemmes. |
| Lås (hængelås) | Objekterne forbliver synlige, og du kan fange dem, men de kan ikke vælges eller ændres. Godt til en baggrund, du tegner over. |
| Plot (printer) | Når den er trykket ned, vises laget på skærmen, men **udelades fra plots** og PDF'er. Brug den til konstruktionslinjer og noter til dig selv. |

Hold musen over en knap for at se, hvad den gør ("Sluk", "Frys", "Lås", "Plot ikke dette lag").

Du kan ikke slukke det aktuelle lag: statuslinjen siger "Det er det aktuelle lag. Gør et andet lag aktuelt først." Hvis du klikker på et lags navn for at gøre det aktuelt, tændes og optøs det også.

Hver lagændring, i panelet eller med en kommando, er ét trin i fortryd: {{key:Mod+Z}} sætter den tilbage.

## Arbejd med lag ved at vælge objekter

Du behøver ikke kende et lags navn: vælg et objekt på laget. Skriv kommandoen, eller åbn {{ui:Tools}} øverst i panelet {{ui:Layers}}.

| Kommando | Hvad den gør |
|---|---|
| {{cmd:LAYISO}} | Vælg objekter, og tryk på {{key:Enter}}: kun deres lag forbliver tændt, alle andre lag slås fra. Hvis det aktuelle lag er slukket, bliver et af de isolerede lag aktuelt. |
| {{cmd:LAYUNISO}} | Tænder de lag igen, som den sidste {{cmd:LAYISO}} slukkede, og giver det aktuelle lag tilbage, som den ændrede. |
| {{cmd:LAYOFF}} | Klik på objekter, et efter et: hvert objekts lag slås fra. Skriv `U` for at fortryde det sidste, og {{key:Enter}} for at afslutte. |
| {{cmd:LAYFRZ}} | Det samme, men laget fryses. |
| {{cmd:LAYMCUR}} | Klik på et objekt: dets lag bliver aktuelt (og tændes og optøs). Hvis ét objekt allerede er valgt, bruges det. |
| {{cmd:LAYON}} | Tænder alle lag. |
| {{cmd:LAYTHW}} | Optøer alle lag. |

Det aktuelle lag slukkes eller fryses aldrig på denne måde: historikken siger det, og du kan gøre et andet lag aktuelt med {{cmd:LAYMCUR}} først. Når du vælger en blokreference, bruges referencens eget lag.

## Omdøb, flet og slet lag

- {{cmd:RENAME}}: skriv `LA`, det gamle navn og det nye. Alle objekter på laget følger med. (`B` omdøber en blok på samme måde, med alle referencer til den.)
- {{cmd:LAYMRG}}: klik på et objekt på hvert lag, der skal flettes (eller skriv `N` og et navn), tryk på {{key:Enter}}, vælg derefter målLaget og svar `Y`. Objekterne flyttes til målet — i modellen, på ark og inde i blokke — og de flettede lag forsvinder.
- {{cmd:LAYDEL}}: vælg et objekt på laget (eller `N` og dets navn) og svar `Y`. Laget forsvinder **med alle objekter på det**, overalt. Lag 0, DEFPOINTS og det aktuelle lag kan ikke slettes.

Hver er ét trin i fortryd. Alle tre findes i {{ui:Tools}} øverst i panelet {{ui:Layers}}.

1. Klik på en vægslinje, skriv derefter `LAYISO` og tryk på {{key:Enter}}. Kun Vægge forbliver tændt.
2. Tegn eller ændr det, du har brug for, på Vægge.
3. Skriv `LAYUNISO` og tryk på {{key:Enter}}. Døre og Noter kommer tilbage.

## Almindelige fejl

- **Nye linjer havnede på et forkert lag.** Kontroller, hvilken prik der er fyldt, før du tegner. Et nyt lag bliver aktuelt, så snart du tilføjer det.
- **Et objekt vil ikke vælges.** Dets lag er låst, slukket eller frosset.
- **Laget bliver stadig printet i et andet program.** DXF R12 kan ikke gemme "plot ikke". CadCraft gemmer indstillingen selv, når tegningen har et ark, men andre programmer vil plotte laget.
- **Lagnavne med store bogstaver efter lagring.** DXF R12 gemmer navne med store bogstaver, så `Walls` kommer tilbage som `WALLS`, og mellemrum bliver til `_`. En gemt DWG bevarer navne, som du skrev dem.
- **Omdøbning, fletning eller sletning af et lag.** Brug {{cmd:RENAME}}, {{cmd:LAYMRG}} eller {{cmd:LAYDEL}} (også i {{ui:Tools}}): se nedenfor.

## Gruppér lag

Hold listen kort ved at lægge lag i mapper, for eksempel Eksisterende, Foreslået og Installationer. Hver mappe kan foldes sammen, og dens kontakter tænder eller slukker alle dens lag, fryser dem eller låser dem sammen. Det aktuelle lag slukkes aldrig.

I {{ui:Tools}} på panelet Lag vælger du {{ui:Add ready-made groups}} for et sæt lavet til små boligprojekter, {{ui:Group by name}} for at gruppere lag, der har samme præfiks (`E-Walls`, `E-Doors`), eller {{ui:New group}}. Træk et lag over på en mappe, eller brug listen over lagene for det aktuelle lag. Skriv i {{ui:Find a layer}} for at indsnævre listen. `LAYGROUP` (`LG`) gør det samme på kommandolinjen.

Selve lagene ændres ikke, så andre CAD-programmer ser dem som en almindelig flad liste. CadCraft gemmer grupperne i filen.
