---
title: Organiser en tegning med lag
summary: Lag lag for vegger, dører og merknader, sett farger, gjør et lag aktivt, og slå av, frys, lås eller hindre lag fra å plottes.
keywords: layer, lag, la, aktivt lag, frys, tin, lås, av, på, plott, ikke plott, farge, lagegenskaper, layiso, layuniso, isoler, layoff, layfrz, laymcur, layon, laythw, gi nytt navn, laymrg, slå sammen, laydel, slett lag
from: ba9f0617
---

## Hva du skal lage

Tre lag, Vegger, Dører og Merknader, hver med sin egen farge, med objekter tegnet på hvert og flyttet mellom dem.

## Layer-panelet

Lag står i panelet til venstre, under {{ui:Layer}}. Hver rad viser, fra venstre til høyre:

- en prikk: fylt for det **aktive** laget, der nye objekter går;
- en fargeprøve;
- laget navn;
- fire knapper: på/av (øye), frys (snøfnugg), lås (hengelås) og plott (skriver).

Hver tegning har et lag som heter `0`. Skriv `LA` og trykk {{key:Enter}} for å hoppe til panelet.

## Lag nye lag

1. Klikk {{ui:Nytt layer}} over listen. En navneboks åpnes.
2. Skriv `Vegger` og trykk {{key:Enter}} (eller klikk {{ui:Legg til}}).

Statuslinjen sier «Lag Vegger lagt til og gjort aktivt.» Det nye laget får farge 7 (svart på lyst tema, hvit på mørkt).

3. Klikk {{ui:Nytt layer}} igjen, skriv `Dører` og trykk {{key:Enter}}.
4. Klikk {{ui:Nytt layer}} igjen, skriv `Merknader` og trykk {{key:Enter}}.

Merknader er nå aktivt.

## Gi hvert lag en farge

1. Klikk fargeprøven på raden Vegger. Systemets fargevelger åpnes.
2. Velg en farge og bekreft.

Prøven og alt på Vegger som er farget {{ui:EtterLayer}}, endres.

:::note
En valgt farge som samsvarer med en av de 255 standard CAD-fargene, lagres som det tallet. Enhver annen farge beholdes nøyaktig i CadCraft, men lagres som nærmeste standardfarge i en DWG- eller DXF-fil.
:::

## Tegn på et lag

1. Klikk navnet **Vegger** i listen. Prikken fylles, og statuslinjen sier «Aktivt lag: Vegger».
2. Tegn et rektangel (`REC`). Det havner på Vegger.
3. Klikk **Dører**, og tegn en bue (`A`). Den havner på Dører.

Du kan også velge aktivt lag i {{ui:Gjeldende innstillinger}} til høyre (når ingenting er valgt), under {{ui:Layer}}.

## Flytt objekter til et annet lag

1. Velg objektene.
2. I høyre panel velger du det nye laget i {{ui:Layer}}.

De flyttes til det laget og tar dets farge, hvis fargen deres er {{ui:EtterLayer}}.

## Av, frys, lås og plott

| Knapp | Hva den gjør |
|---|---|
| På/av (øye) | Skjuler laget sine objekter. De kan ikke ses, velges eller fanges. |
| Frys (snøfnugg) | Samme virkning som av i CadCraft. Holdes adskilt fordi andre programmer behandler dem ulikt, og innstillingen lagres. |
| Lås (hengelås) | Objektene forblir synlige, og du kan fange til dem, men de kan ikke velges eller endres. Godt for en bakgrunn du tegner over. |
| Plott (skriver) | Når den er trykket inn, vises laget på skjermen, men **utelates fra plott** og PDF-er. Bruk det til konstruksjonslinjer og notater til deg selv. |

Hold musepekeren over en knapp for å se hva den gjør («Slå av», «Frys», «Lås», «Ikke plott dette laget»).

Du kan ikke slå av aktivt lag: statuslinjen sier «Det er det aktive laget. Gjør et annet lag aktivt først.» Å klikke et lags navn for å gjøre det aktivt, slår det også på og tiner det.

Hver laginnstilling, enten i panelet eller med en kommando, er ett angretrinn: {{key:Mod+Z}} setter den tilbake.

## Arbeid med lag ved å velge objekter

Du trenger ikke kjenne et lags navn: velg et objekt på det. Skriv kommandoen, eller åpne {{ui:Verktøy}} øverst i {{ui:Layer}}-panelet.

| Kommando | Hva den gjør |
|---|---|
| {{cmd:LAYISO}} | Velg objekter og trykk {{key:Enter}}: bare deres lag forblir på, alle andre lag slås av. Er det aktive laget slått av, blir ett av de isolerte lagene aktivt. |
| {{cmd:LAYUNISO}} | Slår på igjen lagene som den siste {{cmd:LAYISO}} slo av, og gir tilbake det aktive laget den endret. |
| {{cmd:LAYOFF}} | Klikk objekter etter hverandre: hvert objekts lag slås av. Skriv `U` for å ta tilbake det siste, {{key:Enter}} for å avslutte. |
| {{cmd:LAYFRZ}} | Det samme, men fryser hvert lag. |
| {{cmd:LAYMCUR}} | Klikk et objekt: dets lag blir aktivt (og slås på og tines). Med ett objekt allerede valgt, brukes det. |
| {{cmd:LAYON}} | Slår på alle lag. |
| {{cmd:LAYTHW}} | Tiner alle lag. |

Det aktive laget blir aldri slått av eller frosset på denne måten: historikken sier det, og du kan gjøre et annet lag aktivt med {{cmd:LAYMCUR}} først. Velger du en blokkreferanse, brukes referansens eget lag.

## Gi nytt navn, slå sammen og slett lag

- {{cmd:RENAME}}: skriv `LA`, det gamle navnet og det nye. Hvert objekt på laget følger med. (`B` gir en blokk nytt navn på samme måte, med hver referanse til den.)
- {{cmd:LAYMRG}}: klikk et objekt på hvert lag som skal slås sammen (eller skriv `N` og et navn), trykk {{key:Enter}}, velg deretter målaget og svar `Y`. Objektene flyttes til målet — i modellen, på ark og inni blokker — og de sammenslåtte lagene forsvinner.
- {{cmd:LAYDEL}}: velg et objekt på laget (eller `N` og dets navn) og svar `Y`. Laget forsvinner **med hvert objekt på det**, overalt. Lag 0, DEFPOINTS og det aktive laget kan ikke slettes.

Hver er ett angretrinn. Alle tre finnes i {{ui:Verktøy}} øverst i {{ui:Layer}}-panelet.

1. Klikk én vegglinje, skriv `LAYISO` og trykk {{key:Enter}}. Bare Vegger forblir på.
2. Tegn eller endre det du trenger på Vegger.
3. Skriv `LAYUNISO` og trykk {{key:Enter}}. Dører og Merknader kommer tilbake.

## Vanlige feil

- **Nye linjer havnet på feil lag.** Sjekk hvilken prikk som er fylt før du tegner. Et nytt lag blir aktivt så snart du legger det til.
- **Et objekt lar seg ikke velge.** Laget er låst, av eller frosset.
- **Laget skrives fortsatt ut i et annet program.** DXF R12 kan ikke lagre «ikke plott». CadCraft beholder innstillingen for seg selv når tegningen har et ark, men andre programmer plotter det laget.
- **Lagnavn med store bokstaver etter lagring.** DXF R12 lagrer navn med store bokstaver, så `Vegger` kommer tilbake som `VEGGER`, og mellomrom blir `_`. En lagret DWG beholder navn slik du skrev dem.
- **Gi nytt navn til, slå sammen eller slett et lag.** Bruk {{cmd:RENAME}}, {{cmd:LAYMRG}} eller {{cmd:LAYDEL}} (også i {{ui:Verktøy}}): se over.

## Grupper lag

Hold listen kort ved å legge lag i mapper, for eksempel Eksisterende, Foreslått og Tjenester. Hver mappe kan foldes, og bryterne slår alle lagene i den av eller på, fryser dem eller låser dem sammen. Det aktive laget blir aldri slått av.

I {{ui:Verktøy}} på Layer-panelet velger du {{ui:Legg til ferdiglagde grupper}} for et sett laget for små boligprosjekter, {{ui:Grupper etter navn}} for å gruppere lag som deler et prefiks (`E-Walls`, `E-Doors`), eller {{ui:Ny gruppe}}. Dra et lag til en mappe, eller bruk listen over laget for det aktive laget. Skriv i {{ui:Finn en layer}} for å snevre inn listen. `LAYGROUP` (`LG`) gjør det samme på kommandolinjen.

For å gi en gruppe nytt navn, dobbeltklikk navnet (eller velg det og trykk {{key:F2}}), skriv det nye navnet og trykk {{key:Enter}}. {{key:Esc}} beholder det gamle, og {{cmd:UNDO}} setter det tilbake. {{ui:Ny gruppe}} finnes i {{ui:Verktøy}} på Layer-panelet.

Lagene selv endres ikke, så andre CAD-programmer ser dem som en vanlig flat liste. CadCraft beholder gruppene i filen.
