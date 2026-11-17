---
title: Opsæt et ark med et tegningshoved og viewports
summary: Lav et ark (layout) med en ramme og et tegningshoved, sæt viewport-skalaen, tilføj en anden viewport til en detalje, og udfyld tegningshovedet.
keywords: layout, ark, papirrum, viewport, mview, vpview, tegningshoved, skala, papirstørrelse, ramme, vports, plotskala, mspace, pspace, modelrum, gå ind i viewport, dobbeltklik på viewport
from: 45a45de8
---

## Hvad du skal lave

Et A3-ark med et tegningshoved, hele planen i én viewport i 1:100 og en anden viewport, der viser et hjørne i 1:20.

## Model og ark

Du tegner bygningen på fanen {{ui:Model}}, i fuld størrelse: en 6 m væg er 6000 enheder lang i millimeter. Et **ark** (et layout) er et stykke papir, målt i millimeter eller tommer. En **viewport** er et vindue, skåret i arket, der viser modellen i en skala.

## Før du begynder

1. Åbn eller tegn en plan på fanen {{ui:Model}}.
2. Tryk {{key:Esc}}, så intet er valgt.
3. Under {{ui:Aktuelle indstillinger}} sætter du {{ui:Enheder}} til den enhed, du tegnede i, for eksempel {{ui:Millimeter}}.

Enheder betyder noget: en viewport-skala som 1:100 betyder, at én millimeter på papiret viser 100 virkelige millimeter. CadCraft skal derfor vide, hvad én tegnenhed er. En tegning, der står på {{ui:Uden enheder}}, tages som værende i papirets enhed (millimeter på ISO-papir, tommer på US-papir).

## Lav arket

1. Klik på knappen {{ui:+}} til højre for fanerne under tegningen, eller skriv `LAYOUT` og tryk {{key:Enter}}, eller klik på {{ui:Nyt ark}}.

En ny fane, `Layout1`, åbnes. Du bør se et ark på et mørkere bord: en ramme, et tegningshoved i det nederste højre hjørne og én viewport over det, der viser hele modellen i den største standardskala, der passer. Historikken navngiver papiret: ISO A3 for metriske tegninger og tegninger uden enheder, Tabloid (ANSI B) for tegninger i tommer eller fod.

2. Klik på {{ui:Udstrækning}} for at tilpasse arket til skærmen.

## Vælg papiret

1. Tryk {{key:Esc}}, så intet er valgt. Overskriften i højre panel lyder »Ark: Layout1«.
2. I {{ui:Navn}} skriver du `A-101 Plan` og trykker {{key:Enter}}. Fanen omdøbes.
3. Under {{ui:Papir}} vælger du en størrelse.
4. Under {{ui:Orientering}} vælger du {{ui:Liggende}} eller {{ui:Stående}}.

:::warning
Hvis du ændrer papiret, flyttes eller ændres det, der allerede er på arket, ikke. Efter du har ændret det, skal du tjekke, at rammen, tegningshovedet og viewporten stadig passer, og flytte eller ændre dem med grebene. Skift mellem millimeter- og tommepapir beholder tallene, så alt ændrer størrelse. Statuslinjen advarer dig.
:::

## Sæt viewport-skalaen

1. Klik på viewportens ramme (dens kant). Panelets overskrift lyder »Viewport«.
2. Under {{ui:Skalér}} vælger du `1:100`.

Modellen inde i viewporten tegnes om i 1:100, centreret, hvor den var. Listen tilbyder metriske skalaer fra 10:1 til 1:10000. Tegninger i tommer eller fod får også arkitektoniske skalaer (1/4" = 1'-0" og lignende) og ingeniørskalaer (1" = 20' og lignende). {{ui:Tilpas hele modellen}} sætter en nøjagtig, ikke-standard skala, der passer til alt.

3. Hvis planen ikke længere er centreret, ændrer du {{ui:X}} og {{ui:Y}} under {{ui:Visningens centrum (model)}} i højre panel. Det er modelpunktet, der vises i midten af viewporten.

## Vis en del af modellen i en viewport

1. Med viewporten valgt klikker du på {{ui:Vælg et vindue på modellen…}} i højre panel (eller skriver `VPVIEW` og trykker {{key:Enter}}).
2. CadCraft skifter til fanen {{ui:Model}}. Klik på et hjørne af det område, der skal vises.
3. Klik på det modsatte hjørne.

Du er tilbage på arket, og viewporten viser området i den største standardskala, der passer. Historikken siger, hvilken. {{ui:Vis hele modellen}} går tilbage til hele planen i en standardskala.

## Tilføj en anden viewport til en detalje

1. Skab plads på arket: vælg den første viewport, og træk et hjørnegreb, så den bliver mindre.
2. Skriv `MV` og tryk {{key:Enter}}, eller klik på {{ui:Viewport}} i gruppen Ark.
3. Klik på et hjørne af den nye viewport på arket.
4. Klik på det modsatte hjørne.

Den nye viewport viser hele modellen. Historikken siger dens skala.

5. Klik på den nye viewports ramme.
6. Klik på {{ui:Vælg et vindue på modellen…}}, og vælg et lille område omkring et hjørne af planen.
7. Under {{ui:Skalér}} vælger du `1:20`.

Viewport-rammerne ligger på laget `Viewports`, som er sat til ikke at plotte. Rammerne vises derfor på skærmen, men ikke i PDF'en.

## Udfyld tegningshovedet

Tegningshovedet består af almindelige linjer og tekst på laget `Title block`. Det starter med tegningens navn, skalaen for den første viewport, dagens dato og arknummeret.

1. Dobbeltklik på den store titeltekst. En redigeringsboks åbnes over den.
2. Skriv arkets titel.
3. Klik på {{ui:OK}}, eller tryk {{key:Mod+Enter}}.

Gør det samme for de andre felter. Brug {{cmd:TEXT}} til at skrive i den tomme celle »DRAWN BY«. Teksten SCALE opdaterer sig ikke selv, når du ændrer en viewports skala. Rediger den i hånden.

## Tegn på arket

Alt, hvad du tegner på en arkfane, ligger på papiret i papirenheder: tekst 3.5 høj er 3.5 mm høj på et ISO-ark. Noter, nordpile og arkrammer hører hjemme her.

For at ændre selve planen går du til fanen {{ui:Model}} eller arbejder gennem en viewport (næste afsnit). Hver viewport viser ændringen.

## Arbejd på modellen gennem en viewport

1. Dobbeltklik inde i en viewport, væk fra dens ramme. Eller skriv `MS` og tryk {{key:Enter}}: med én viewport på arket går du direkte ind. Med flere klikker du inde i den, du vil have.

Rammen tegnes tykkere, historikken siger, at du er inde, og arkets fane forbliver valgt. Alt, hvad du tegner eller ændrer nu, er på modellen, i modelenheder, som på fanen {{ui:Model}}: en linje tegnet inde i en viewport i 1:100 er i virkelige millimeter. Lag, der er frosset i denne viewport, kan ikke vælges her.

2. Drej hjulet, eller træk med midterknappen, for at zoome og panorere det, viewporten viser. Arket bliver, hvor det er.
3. Dobbeltklik et sted uden for rammen, eller skriv `PS` og tryk {{key:Enter}}.

Du er tilbage på arket. Viewporten beholder den visning, du forlod den med. {{key:Mod+Z}} sætter den gamle visning tilbage i ét trin. Klik på en vilkårlig fane under tegningen forlader også viewporten.

:::note
En viewport, hvis visning er låst ({{ui:Visning låst}} i Egenskaber), beholder sin visning. Inde i den flytter panorering og zoom i stedet hele arket. En viewport, der er slået fra, kan ikke gås ind i.
:::

## Mærk en visning med dens navn

En visningstitel under en viewport kan vise viewportens visningsnavn og følge med det:

1. Giv visningen et navn: vælg viewportens ramme, og udfyld {{ui:Visningsnavn}} i Egenskaber. Eller gem visningen på fanen {{ui:Model}} med {{cmd:NAMEDVIEW}} og skriv med viewporten valgt `VPVIEW`, `V` og visningens navn. Viewporten viser så den visning og tager dens navn.
2. Skriv `VIEWLABEL` (`VL`) og tryk {{key:Enter}}, og klik derefter, hvor etiketten skal være ({{key:Enter}} placerer den under viewportens nederste venstre hjørne).

Når visningsnavnet ændres, ændrer etiketten sig med det, i samme trin i fortryd.

## Frys et lag i én viewport

For at skjule et lag i én viewport, men ikke i de andre (møbler i en detalje, for eksempel):

1. Vælg viewportens ramme, eller arbejd inde i den (dobbeltklik).

Panelet {{ui:Lag}} får én knap mere på hver række, og en linje over listen siger det.

2. Klik på den knap på lagets række.

Laget forsvinder kun fra den viewport. Klik igen for at tø op. {{key:Mod+Z}} fortryder begge dele. For flere lag eller viewporte på én gang skriver du `VPLAYER`: `F` (Frys) eller `T` (Tø op), lagnavnene (`A-*` tager hvert lag, der starter med A-), og derefter Aktuel (`C`), Alle (`A`) eller Vælg (`S`). `VPLAYER` med `V` (Vpvisdflt) vælger de lag, som nye viewporte starter frosset med.

## Flere ark

Hver {{ui:+}} tilføjer et ark mere (`Layout2`, `Layout3` …) med det næste arknummer. For at slette det åbne ark trykker du {{key:Esc}} og klikker på {{ui:Slet dette ark}} i højre panel. Der spørges ikke om det. {{key:Mod+Z}} bringer det tilbage.

Plot et ark med {{ui:Plot dette ark}} eller {{key:Mod+P}}. Se [Plot til PDF](topic:plot-pdf).

## Almindelige fejl

- **Viewporten viser intet.** Modellen er tom, eller visningen peger et andet sted. Vælg rammen, og klik på {{ui:Vis hele modellen}}.
- **Skalalisten viser kun forhold og ingen fod-og-tomme-skalaer.** Sæt {{ui:Enheder}} til {{ui:Tommer}} eller {{ui:Fod}} på fanen {{ui:Model}}.
- **1:100 ser ti gange for stor eller lille ud.** Tegnenhederne er forkerte. Sæt {{ui:Enheder}} til, hvad én enhed virkelig er.
- **Klik på planen inde i viewporten vælger intet.** På et ark vælger du arkets egne objekter. Dobbeltklik inde i viewporten først for at arbejde på planen gennem den.
- **Klik uden for viewporten gør intet.** Du er inde i en viewport. Dobbeltklik uden for den, eller skriv `PS`, for at arbejde på arket igen.
- **»Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first.«** Viewporte placeres på et layout. Åbn en layoutfane (eller lav en med LAYOUT) først. {{cmd:MVIEW}} virker kun på en arkfane.
