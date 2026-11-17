---
title: Organiser en tegning med layere
summary: Lag layere for vegger, dører og notater, sett farger, gjør et layer aktivt, og slå layere av, frys dem, lås dem eller hindre dem i å plottes.
keywords: layer, layere, la, aktivt layer, frys, tin, lås, av, på, plott, ikke plott, farge, layeregenskaper, layiso, layuniso, isoler, layoff, layfrz, laymcur, layon, laythw, gi nytt navn, laymrg, slå sammen, laydel, slett layer
from: cd033591
---

## Det du lager

Tre layere, Walls, Doors og Notes, hver med sin egen farge, med objekter tegnet på hver og flyttet mellom dem.

## Layer-panelet

Layerne ligger i panelet til venstre, under {{ui:Layer}}. Hver rad viser, fra venstre mot høyre:

- en prikk: fylt for det **aktive** layeret, der nye objekter havner;
- en fargeprøve;
- layernavnet;
- fire knapper: på/av (øye), frys (snøfnugg), lås (hengelås) og plott (skriver).

Hver tegning har et layer som heter `0`. Hvis du skriver `LA` og trykker {{key:Enter}}, hopper du til panelet.

## Lag layere

1. Klikk {{ui:Nytt layer}} over listen. En navneboks åpnes.
2. Skriv `Walls` og trykk {{key:Enter}} (eller klikk {{ui:Legg til}}).

Statuslinjen sier «La til layer Walls og gjorde det aktivt.» Det nye layeret får farge 7 (svart på lys tema, hvit på mørkt).

3. Klikk {{ui:Nytt layer}} igjen, skriv `Doors` og trykk {{key:Enter}}.
4. Klikk {{ui:Nytt layer}} igjen, skriv `Notes` og trykk {{key:Enter}}.

Notes er nå aktivt.

## Gi hvert layer en farge

1. Klikk fargeprøven på raden Walls. Fargevelgeren i systemet ditt åpnes.
2. Velg en farge og bekreft.

Prøven og alt på Walls som har farge {{ui:EtterLayer}}, endrer seg.

:::note
En valgt farge som samsvarer med en av de 255 standard CAD-fargene, lagres som det nummeret. Enhver annen farge beholdes nøyaktig i CadCraft, men lagres som nærmeste standardfarge i en DWG- eller DXF-fil.
:::

## Tegn på et layer

1. Klikk navnet **Walls** i listen. Prikken fylles, og statuslinjen sier «Aktivt layer: Walls».
2. Tegn et rektangel (`REC`). Det havner på Walls.
3. Klikk **Doors** og tegn en bue (`A`). Den havner på Doors.

Du kan også velge det aktive layeret i {{ui:Gjeldende innstillinger}} til høyre (når ingenting er valgt), under {{ui:Layer}}.

## Flytt objekter til et annet layer

1. Velg objektene.
2. I høyre panel velger du det nye layeret i {{ui:Layer}}.

De flyttes til layeret og får dets farge hvis fargen deres er {{ui:EtterLayer}}.

## Av, frys, lås og plott

| Knapp | Hva den gjør |
|---|---|
| På/av (øye) | Skjuler layerets objekter. De kan ikke ses, velges eller festes til. |
| Frys (snøfnugg) | Samme effekt som av i CadCraft. Holdes adskilt fordi andre programmer behandler dem ulikt, og innstillingen lagres. |
| Lås (hengelås) | Objektene forblir synlige, og du kan feste til dem, men de kan ikke velges eller endres. Godt for en bakgrunn du tegner over. |
| Plott (skriver) | Når knappen er trykket inn, vises layeret på skjermen, men **utelates fra plott** og PDF-er. Bruk det til konstruksjonslinjer og notater til deg selv. |

Hold musepekeren over en knapp for å se hva den gjør («Slå av», «Frys», «Lås», «Ikke plott dette layeret»).

Du kan ikke slå av det aktive layeret: statuslinjen sier «Dette er det aktive layeret. Gjør et annet layer aktivt først.» Å klikke på et layers navn for å gjøre det aktivt, slår det også på og tiner det.

Hver layer-endring, i panelet eller med en kommando, er ett steg i angre: {{key:Mod+Z}} setter det tilbake.

## Arbeid med layere ved å velge objekter

Du trenger ikke kjenne et layers navn: velg et objekt på det. Skriv kommandoen, eller åpne {{ui:Verktøy}} øverst i {{ui:Layer}}-panelet.

| Kommando | Hva den gjør |
|---|---|
| {{cmd:LAYISO}} | Velg objekter, trykk {{key:Enter}}: bare deres layere forblir på, alle andre layere slås av. Hvis det aktive layeret er slått av, blir ett av de isolerte layerne aktivt. |
| {{cmd:LAYUNISO}} | Slår på igjen layerne som forrige {{cmd:LAYISO}} slo av, og gir tilbake det aktive layeret den endret. |
| {{cmd:LAYOFF}} | Klikk objekter etter hverandre: hvert objekts layer slås av. Skriv `U` for å ta tilbake det siste, {{key:Enter}} for å avslutte. |
| {{cmd:LAYFRZ}} | Det samme, men layerne fryses. |
| {{cmd:LAYMCUR}} | Klikk et objekt: layeret blir aktivt (og slås på og tines). Hvis ett objekt allerede er valgt, brukes det. |
| {{cmd:LAYON}} | Slår på alle layere. |
| {{cmd:LAYTHW}} | Tiner alle layere. |

Det aktive layeret slås aldri av eller fryses på denne måten: historikken sier det, og du kan gjøre et annet layer aktivt med {{cmd:LAYMCUR}} først. Når du velger en blokkreferanse, brukes referansens eget layer.

## Gi nytt navn, slå sammen og slett layere

- {{cmd:RENAME}}: skriv `LA`, det gamle navnet og det nye. Alle objekter på layeret følger med. (`B` gir en blokk nytt navn på samme måte, med alle referanser til den.)
- {{cmd:LAYMRG}}: klikk et objekt på hvert layer som skal slås sammen (eller skriv `N` og et navn), trykk {{key:Enter}}, velg målayeret og svar `Y`. Objektene flyttes til målayeret – i modellen, på ark og inne i blokker – og de sammenslåtte layerne fjernes.
- {{cmd:LAYDEL}}: velg et objekt på layeret (eller `N` og navnet) og svar `Y`. Layeret fjernes **sammen med alle objekter på det**, overalt. Layer 0, DEFPOINTS og det aktive layeret kan ikke slettes.

Hver av dem er ett steg i angre. Alle tre finnes i {{ui:Verktøy}} øverst i {{ui:Layer}}-panelet.

1. Klikk på én veglinje, skriv deretter `LAYISO` og trykk {{key:Enter}}. Bare Walls forblir på.
2. Tegn eller endre det du trenger på Walls.
3. Skriv `LAYUNISO` og trykk {{key:Enter}}. Doors og Notes kommer tilbake.

## Vanlige feil

- **Nye linjer havnet på feil layer.** Sjekk hvilken prikk som er fylt før du tegner. Et nytt layer blir aktivt så snart du legger det til.
- **Et objekt lar seg ikke velge.** Layeret er låst, slått av eller frosset.
- **Layeret skrives ut i et annet program.** DXF R12 kan ikke lagre «ikke plott». CadCraft beholder innstillingen selv når tegningen har et ark, men andre programmer vil skrive ut layeret.
- **Layernavn med store bokstaver etter lagring.** DXF R12 lagrer navn med store bokstaver, så `Walls` kommer tilbake som `WALLS`, og mellomrom blir `_`. En lagret DWG beholder navnene slik du skrev dem.
- **Gi nytt navn, slå sammen eller slett et layer.** Bruk {{cmd:RENAME}}, {{cmd:LAYMRG}} eller {{cmd:LAYDEL}} (også i {{ui:Verktøy}}): se under.

## Grupper layere

Hold listen kort ved å legge layere i mapper, for eksempel Eksisterende, Foreslått og Tjenester. Hver mappe kan foldes sammen, og bryterne slår alle layerne i den på eller av, fryser dem eller låser dem sammen. Det aktive layeret slås aldri av.

I {{ui:Verktøy}} på Layer-panelet velger du {{ui:Legg til ferdiglagde grupper}} for et sett laget for små boligprosjekter, {{ui:Grupper etter navn}} for å gruppere layere som deler et prefiks (`E-Walls`, `E-Doors`), eller {{ui:Ny gruppe}}. Dra et layer over en mappe, eller bruk listen over layerne for det aktive layeret. Skriv i {{ui:Finn en layer}} for å snevre inn listen. `LAYGROUP` (`LG`) gjør det samme på kommandolinjen.

Layerne selv endres ikke, så andre CAD-programmer ser dem som en vanlig, flat liste. CadCraft lagrer gruppene i filen.
