---
title: Organisér en tegning med lag
summary: Lav lag til vægge, døre og noter, angiv farver, gør et lag aktuelt, og slå lag fra, frys dem, lås dem eller hold dem fra at blive plottet.
keywords: lag, layers, la, aktuelt lag, frys, tø op, lås, fra, til, plot, ikke plot, farve, lagegenskaber, layiso, layuniso, isolér, layoff, layfrz, laymcur, layon, laythw, omdøb, laymrg, flet, laydel, slet lag
from: ba9f0617
---

## Hvad du laver

Tre lag, Vægge, Døre og Noter, hvert med sin egen farve, med objekter tegnet på hvert og flyttet mellem dem.

## Lagpanelet

Lag findes i panelet til venstre, under {{ui:Lag}}. Hver række viser, fra venstre mod højre:

- en prik: fyldt for det **aktuelle** lag, hvor nye objekter går hen;
- en farveprøve;
- lagnavnet;
- fire knapper: til/fra (øje), frys (snefnug), lås (hængelås) og plot (printer).

Hver tegning har et lag ved navn `0`. Skriv `LA` og tryk {{key:Enter}} for at hoppe til panelet.

## Opret lag

1. Klik på {{ui:Nyt lag}} over listen. En navneboks åbnes.
2. Skriv `Vægge` og tryk {{key:Enter}} (eller klik på {{ui:Tilføj}}).

Statuslinjen siger »Lag Vægge er tilføjet og gjort aktuelt.« Det nye lag får farve 7 (sort på det lyse tema, hvid på det mørke).

3. Klik på {{ui:Nyt lag}} igen, skriv `Døre` og tryk {{key:Enter}}.
4. Klik på {{ui:Nyt lag}} igen, skriv `Noter` og tryk {{key:Enter}}.

Noter er nu aktuelt.

## Giv hvert lag en farve

1. Klik på farveprøven i rækken Vægge. Dit systems farvevælger åbnes.
2. Vælg en farve og bekræft.

Farveprøven og alt på Vægge, der er farvet {{ui:ByLayer}}, skifter farve.

:::note
En valgt farve, der matcher en af de 255 standard CAD-farver, gemmes som det nummer. Enhver anden farve bevares præcist i CadCraft, men gemmes som den nærmeste standardfarve i en DWG- eller DXF-fil.
:::

## Tegn på et lag

1. Klik på navnet **Vægge** i listen. Dens prik bliver fyldt, og statuslinjen siger »Aktuelt lag: Vægge«.
2. Tegn et rektangel (`REC`). Det kommer på Vægge.
3. Klik på **Døre**, og tegn en bue (`A`). Den kommer på Døre.

Du kan også vælge det aktuelle lag i {{ui:Aktuelle indstillinger}} til højre (når intet er valgt), under {{ui:Lag}}.

## Flyt objekter til et andet lag

1. Vælg objekterne.
2. Vælg det nye lag i {{ui:Lag}} i højre panel.

De flytter til det lag og tager dets farve, hvis deres farve er {{ui:ByLayer}}.

## Fra, frys, lås og plot

| Knap | Hvad den gør |
|---|---|
| Til/fra (øje) | Skjuler lagets objekter. De kan ikke ses, vælges eller fanges. |
| Frys (snefnug) | Samme virkning som fra i CadCraft. Holdt adskilt, fordi andre programmer behandler dem forskelligt, og indstillingen gemmes. |
| Lås (hængelås) | Objekter forbliver synlige, og du kan fange til dem, men de kan ikke vælges eller ændres. Godt til en baggrund, du tegner efter. |
| Plot (printer) | Når den er trykket ind, vises laget på skærmen, men **udelades fra plots** og PDF'er. Brug det til konstruktionslinjer og noter til dig selv. |

Hold markøren over en knap for at se, hvad den gør ("Slå fra", "Frys", "Lås", "Plot ikke dette lag").

Du kan ikke slå det aktuelle lag fra: statuslinjen siger »Det er det aktuelle lag. Gør et andet lag aktuelt først.« Klik på et lags navn for at gøre det aktuelt; det tænder og tøer det også op.

Hver lagændring, i panelet eller med en kommando, er ét fortrydelsestrin: {{key:Mod+Z}} sætter den tilbage.

## Arbejd på lag ved at vælge objekter

Du behøver ikke kende et lags navn: vælg et objekt på det. Skriv kommandoen, eller åbn {{ui:Værktøjer}} øverst i panelet {{ui:Lag}}.

| Kommando | Hvad den gør |
|---|---|
| {{cmd:LAYISO}} | Vælg objekter, tryk {{key:Enter}}: kun deres lag forbliver tændt, hvert andet lag slås fra. Hvis det aktuelle lag slås fra, bliver et af de isolerede lag aktuelt. |
| {{cmd:LAYUNISO}} | Tænder de lag igen, som den sidste {{cmd:LAYISO}} slog fra, og giver det aktuelle lag tilbage, som den ændrede. |
| {{cmd:LAYOFF}} | Klik på objekter efter hinanden: hvert objekts lag slås fra. Skriv `U` for at tage det sidste tilbage, {{key:Enter}} for at afslutte. |
| {{cmd:LAYFRZ}} | Det samme, men fryser hvert lag. |
| {{cmd:LAYMCUR}} | Klik på et objekt: dets lag bliver aktuelt (og tændes og tøs op). Med ét objekt allerede valgt bruges det. |
| {{cmd:LAYON}} | Slår alle lag til. |
| {{cmd:LAYTHW}} | Tøer alle lag op. |

Det aktuelle lag slås aldrig fra eller fryses på denne måde: historikken siger det, og du kan gøre et andet lag aktuelt med {{cmd:LAYMCUR}} først. Vælges en blokreference, bruges referencens eget lag.

## Omdøb, flet og slet lag

- {{cmd:RENAME}}: skriv `LA`, det gamle navn og det nye. Hvert objekt på laget følger. (`B` omdøber en blok på samme måde, med hver reference til den.)
- {{cmd:LAYMRG}}: klik på et objekt på hvert lag, der skal flettes (eller skriv `N` og et navn), tryk {{key:Enter}}, vælg derefter målet og svar `Y`. Objekterne flytter til målet — i modellen, på ark og inde i blokke — og de fletede lag forsvinder.
- {{cmd:LAYDEL}}: vælg et objekt på laget (eller `N` og dets navn) og svar `Y`. Laget forsvinder **med hvert objekt på det**, overalt. Lag 0, DEFPOINTS og det aktuelle lag kan ikke slettes.

Hver er ét fortrydelsestrin. Alle tre findes i {{ui:Værktøjer}} øverst i panelet {{ui:Lag}}.

1. Klik på én væglinje, skriv `LAYISO` og tryk {{key:Enter}}. Kun Vægge forbliver tændt.
2. Tegn eller ændr det, du har brug for, på Vægge.
3. Skriv `LAYUNISO` og tryk {{key:Enter}}. Døre og Noter kommer tilbage.

## Almindelige fejl

- **Nye linjer kom på det forkerte lag.** Tjek, hvilken prik der er fyldt, før du tegner. Et nyt lag bliver aktuelt, så snart du tilføjer det.
- **Et objekt vil ikke vælges.** Dets lag er låst, slået fra eller frosset.
- **Laget udskrives stadig i et andet program.** DXF R12 kan ikke gemme »plot ikke«. CadCraft beholder indstillingen for sig selv, når tegningen har et ark, men andre programmer vil plotte det lag.
- **Lagnavne med store bogstaver efter gemning.** DXF R12 gemmer navne med store bogstaver, så `Vægge` kommer tilbage som `VÆGGE`, og mellemrum bliver til `_`. En gemt DWG beholder navne, som du skrev dem.
- **Omdøbning, fletning eller sletning af et lag.** Brug {{cmd:RENAME}}, {{cmd:LAYMRG}} eller {{cmd:LAYDEL}} (også i {{ui:Værktøjer}}): se nedenfor.

## Gruppér lag

Hold listen kort ved at lægge lag i mapper, for eksempel Eksisterende, Foreslået og Installationer. Hver mappe folder sig sammen, og dens kontakter slår alle dens lag til eller fra, fryser dem eller låser dem sammen. Det aktuelle lag slås aldrig fra.

I {{ui:Værktøjer}} på lagpanelet vælger du {{ui:Tilføj færdige grupper}} for et sæt lavet til små boligprojekter, {{ui:Gruppér efter navn}} for at gruppere lag, der deler et præfiks (`E-Vægge`, `E-Døre`), eller {{ui:Ny gruppe}}. Træk et lag over en mappe, eller brug listen over det aktuelle lag. Skriv i {{ui:Find et lag}} for at snævre listen ind. `LAYGROUP` (`LG`) gør det samme på kommandolinjen.

For at omdøbe en gruppe, dobbeltklik på dens navn (eller vælg den og tryk {{key:F2}}), skriv det nye navn og tryk {{key:Enter}}; {{key:Esc}} beholder det gamle, og {{cmd:UNDO}} gendanner det. {{ui:Ny gruppe}} findes i {{ui:Værktøjer}} på lagpanelet.

Lagene selv ændres ikke, så andre CAD-programmer ser dem som en almindelig flad liste. CadCraft gemmer grupperne i filen.
