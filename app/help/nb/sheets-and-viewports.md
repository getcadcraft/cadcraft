---
title: Sett opp et ark med tegningshode og visningsområder
summary: Lag et ark (layout) med ramme og tegningshode, sett målestokken for visningsområdet, legg til et andre visningsområde for en detalj, og fyll ut tegningshodet.
keywords: layout, ark, papirrom, visningsområde, mview, vpview, tegningshode, skala, papirstørrelse, ramme, vports, plottskala, mspace, pspace, modellrom, gå inn i visningsområde, dobbeltklikk visningsområde
from: 45a45de8
---

## Hva du skal lage

Et A3-ark med tegningshode, hele planen i ett visningsområde i 1:100, og et andre visningsområde som viser ett hjørne i 1:20.

## Modell og ark

Du tegner bygningen på fanen {{ui:Modell}}, i full størrelse: en 6 m vegg er 6000 enheter lang i millimeter. Et **ark** (en layout) er et stykke papir, målt i millimeter eller tommer. Et **visningsområde** er et vindu kuttet i arket som viser modellen i en målestokk.

## Før du begynner

1. Åpne eller tegn en plan på fanen {{ui:Modell}}.
2. Trykk {{key:Esc}} slik at ingenting er valgt.
3. Under {{ui:Gjeldende innstillinger}}, sett {{ui:Enheter}} til enheten du tegnet i, for eksempel {{ui:Millimeter}}.

Enheter betyr noe: en målestokk som 1:100 betyr at én millimeter på papiret viser 100 virkelige millimeter, så CadCraft må vite hva én tegneenhet er. En tegning som er satt til {{ui:Uten enhet}}, tas som om den er i papirets enhet (millimeter på ISO-papir, tommer på US-papir).

## Lag arket

1. Klikk {{ui:+}}-knappen til høyre for fanene under tegningen, eller skriv `LAYOUT` og trykk {{key:Enter}}, eller klikk {{ui:Nytt ark}}.

En ny fane, `Layout1`, åpnes. Du bør se et ark på et mørkere skrivebord: en ramme, et tegningshode nede til høyre og ett visningsområde over det, som viser hele modellen i den største standardmålestokken som passer. Historikken navngir papiret: ISO A3 for metriske og enhetsløse tegninger, Tabloid (ANSI B) for tegninger i tommer eller fot.

2. Klikk {{ui:Utstrekning}} for å tilpasse arket på skjermen.

## Velg papiret

1. Trykk {{key:Esc}} slik at ingenting er valgt. Overskriften i høyre panel lyder «Ark: Layout1».
2. I {{ui:Navn}} skriver du `A-101 Plan` og trykker {{key:Enter}}. Fanen får nytt navn.
3. I {{ui:Papir}} velger du en størrelse.
4. I {{ui:Orientering}} velger du {{ui:Liggende}} eller {{ui:Stående}}.

:::warning
Å endre papiret flytter ikke eller endrer størrelsen på det som allerede er på arket. Etter at du har endret det, kontroller at rammen, tegningshodet og visningsområdet fortsatt passer, og flytt eller endre størrelsen med grep. Å bytte mellom millimeter- og tommepapir beholder tallene, så alt endrer størrelse: statuslinjen varsler deg.
:::

## Sett visningsområdets målestokk

1. Klikk på visningsområdets ramme (kanten). Panelets overskrift lyder «Visningsområde».
2. I {{ui:Skala}} velger du `1:100`.

Modellen i visningsområdet tegnes på nytt i 1:100, sentrert der den var. Listen tilbyr metriske målestokker fra 10:1 til 1:10000. Tegninger i tommer eller fot får også arkitektmålestokker (1/4" = 1'-0" og lignende) og ingeniørmålestokker (1" = 20' og lignende). {{ui:Tilpass hele modellen}} setter en eksakt, ikke-standard målestokk som passer alt.

3. Hvis planen ikke lenger er sentrert, endre {{ui:X}} og {{ui:Y}} under {{ui:Visningens sentrum (modell)}} i høyre panel: det er modellpunktet som vises i midten av visningsområdet.

## Vis en del av modellen i et visningsområde

1. Med visningsområdet valgt, klikk {{ui:Velg et vindu på modellen…}} i høyre panel (eller skriv `VPVIEW` og trykk {{key:Enter}}).
2. CadCraft bytter til fanen {{ui:Modell}}. Klikk ett hjørne av området som skal vises.
3. Klikk det motsatte hjørnet.

Du er tilbake på arket, og visningsområdet viser det området i den største standardmålestokken som passer; historikken sier hvilken. {{ui:Vis hele modellen}} går tilbake til hele planen i en standardmålestokk.

## Legg til et andre visningsområde for en detalj

1. Lag plass på arket: velg det første visningsområdet og dra et hjørnegrep for å gjøre det mindre.
2. Skriv `MV` og trykk {{key:Enter}}, eller klikk {{ui:Visningsområde}} i gruppen Ark.
3. Klikk ett hjørne av det nye visningsområdet på arket.
4. Klikk det motsatte hjørnet.

Det nye visningsområdet viser hele modellen. Historikken sier hvilken målestokk det har.

5. Klikk på rammen til det nye visningsområdet.
6. Klikk {{ui:Velg et vindu på modellen…}} og velg et lite område rundt ett hjørne av planen.
7. I {{ui:Skala}} velger du `1:20`.

Rammene til visningsområder ligger på layeren `Viewports`, som er satt til ikke å plotte. Rammene vises altså på skjermen, men ikke i PDF-en.

## Fyll ut tegningshodet

Tegningshodet er laget av vanlige linjer og tekst på layeren `Title block`. Det starter med tegningsnavnet, målestokken til det første visningsområdet, dagens dato og arknummeret.

1. Dobbeltklikk den store tittelteksten. En redigeringsboks åpnes over den.
2. Skriv arkets tittel.
3. Klikk {{ui:OK}}, eller trykk {{key:Mod+Enter}}.

Gjør det samme for de andre feltene. Bruk {{cmd:TEXT}} for å skrive i den tomme cellen «DRAWN BY». Teksten SCALE oppdateres ikke av seg selv når du endrer et visningsområdes målestokk: rediger den for hånd.

## Tegn på arket

Alt du tegner på en arkfane, er på papiret, i papirenheter: tekst 3.5 høy er 3.5 mm høy på et ISO-ark. Merknader, nordpiler og arkrammer hører hjemme her.

For å endre selve planen, gå til fanen {{ui:Modell}}, eller arbeid gjennom et visningsområde (neste avsnitt). Hvert visningsområde viser endringen.

## Arbeid på modellen gjennom et visningsområde

1. Dobbeltklikk inne i et visningsområde, borte fra rammen. Eller skriv `MS` og trykk {{key:Enter}}: med ett visningsområde på arket går den rett inn; med flere klikker du inne i det du vil ha.

Rammen tegnes tykkere, historikken sier at du er inne, og arkfanen forblir valgt. Alt du tegner eller endrer nå, er på modellen, i modellenheter, som på fanen {{ui:Modell}}: en linje tegnet inne i et visningsområde i 1:100 er i virkelige millimeter. Layere som er frosset i dette visningsområdet, kan ikke velges her.

2. Snu hjulet eller dra med midtknappen for å zoome og panorere det visningsområdet viser. Arket blir der det er.
3. Dobbeltklikk hvor som helst utenfor rammen, eller skriv `PS` og trykk {{key:Enter}}.

Du er tilbake på arket. Visningsområdet beholder visningen du forlot det med; {{key:Mod+Z}} setter den gamle visningen tilbake i ett steg. Å klikke på en fane under tegningen forlater også visningsområdet.

:::note
Et visningsområde der visningen er låst ({{ui:Visning låst}} i {{ui:Egenskaper}}), beholder visningen sin: inni det flytter panorering og zoom hele arket i stedet. Et visningsområde som er slått av, kan ikke gås inn i.
:::

## Merk en visning med navnet sitt

En visningstittel under et visningsområde kan vise visningsområdets visningsnavn og følge med på det:

1. Gi visningen et navn: velg visningsområdets ramme og fyll ut {{ui:Visningsnavn}} i {{ui:Egenskaper}}. Eller lagre visningen på fanen {{ui:Modell}} med {{cmd:NAMEDVIEW}} og, med visningsområdet valgt, skriv `VPVIEW`, `V` og visningens navn: visningsområdet viser da den visningen og tar dens navn.
2. Skriv `VIEWLABEL` (`VL`) og trykk {{key:Enter}}, og klikk deretter der etiketten skal være ({{key:Enter}} setter den under visningsområdets nedre venstre hjørne).

Når visningsnavnet endres, endrer etiketten seg med det, i samme angre-steg.

## Frys en layer i ett visningsområde

For å skjule en layer i ett visningsområde men ikke i de andre (møbler i en detalj, for eksempel):

1. Velg visningsområdets ramme, eller arbeid inne i det (dobbeltklikk).

Panelet {{ui:Layers}} får en knapp til på hver rad, og en linje over listen sier det.

2. Klikk den knappen på layerens rad.

Layeren forsvinner fra det visningsområdet alene. Klikk igjen for å tine den; {{key:Mod+Z}} angrer begge deler. For flere layere eller visningsområder samtidig skriver du `VPLAYER`: `F` (Frys) eller `T` (Tin), layernavnene (`A-*` tar alle layere som begynner med A-), og deretter `C` (Aktiv), `A` (Alle) eller `S` (Velg). `VPLAYER` `V` (Vpvisdflt) velger layere som nye visningsområder starter med frosset.

## Flere ark

Hver {{ui:+}} legger til et nytt ark (`Layout2`, `Layout3` …) med neste arknummer. For å slette det åpne arket, trykk {{key:Esc}} og klikk {{ui:Slett dette arket}} i høyre panel. Det spørres ikke etter bekreftelse; {{key:Mod+Z}} henter det tilbake.

Plott et ark med {{ui:Plott dette arket}} eller {{key:Mod+P}}; se [Plott til PDF](topic:plot-pdf).

## Vanlige feil

- **Visningsområdet viser ingenting.** Modellen er tom, eller visningen er rettet et annet sted. Velg rammen og klikk {{ui:Vis hele modellen}}.
- **Målestokklisten viser bare forhold og ingen fot- og tommemålestokker.** Sett {{ui:Enheter}} til {{ui:Tommer}} eller {{ui:Fot}} på fanen {{ui:Modell}}.
- **1:100 ser ti ganger for stor eller liten ut.** Tegneenhetene er feil. Sett {{ui:Enheter}} til det én enhet virkelig er.
- **Å klikke på planen inne i visningsområdet velger ingenting.** På et ark velger du arkets egne objekter. Dobbeltklikk inne i visningsområdet først for å arbeide på planen gjennom det.
- **Klikk utenfor visningsområdet gjør ingenting.** Du er inne i et visningsområde: dobbeltklikk utenfor det, eller skriv `PS`, for å arbeide på arket igjen.
- **«Visningsområder hører hjemme på et ark. Åpne en arkfane (eller lag en med LAYOUT) først.»** {{cmd:MVIEW}} fungerer bare på en arkfane.
