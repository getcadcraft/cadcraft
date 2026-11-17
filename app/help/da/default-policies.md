---
title: "Standardpolitikker: angiv hvad en ny tegning starter med"
summary: "Angiv én gang, hvilke enheder, længdeformat, præcision, teksthøjde og arkpapir en ny tegning starter med, til metrisk og til imperialt arbejde, og del politikkerne på kontoret som en lille fil."
keywords: standard, standarder, standardpolitikker, politik, kontorstandard, kontorstandarder, skabelon, ny tegning, enheder, insunits, længdeformat, arkitekt, præcision, luprec, teksthøjde, arkpapir, a1, del, eksporter, importer, json
from: 7b80fd13
---

## Hvad du gør

Fortæl CadCraft, hvad en ny tegning skal starte med, så ingen på kontoret behøver at køre UNITS og ændre de samme ting hver gang. Dette er et add-on: det er slukket, indtil du tænder det, og en politik du ikke angiver, lader CadCraft's egen standard være præcis, som den er.

:::note
Disse er standarder for **nye** tegninger og **nye** ark. En tegning, du allerede har startet, ændres ikke, og det gør en tegning, du åbner, heller ikke.
:::

## Trin

1. Åbn Indstillinger, gå til {{ui:Add-ons}} og slå {{ui:Standardpolitikker}} til.
2. I Indstillinger, åbn fanen **CadCraft** og vælg {{ui:Standardpolitikker}} i listen til venstre.
3. Angiv de politikker, du vil have. Hver starter på **CadCraft's egen**. En politik med en **Metrisk**- og en **Imperial**-boks tager én værdi for hver slags tegning; udfyld kun de, du har brug for.
4. Der er ingen Gem-knap: hver ændring gemmes, mens du foretager den.
5. Start en ny tegning. Den har de enheder, længdeformat, præcision og teksthøjde, du angav, og dens første nye ark ligger på det papir, du valgte.

## Politikkerne

- **Enheder for en ny tegning**: ingen, millimeter, centimeter, meter, tommer eller fod.
- **Længdeformat** og **Længdepræcision**: det UNITS-kommandoen sætter, for en ny tegning.
- **Højde på ny tekst**, i tegningsenheder.
- **Papir for et nyt ark**: det papir, Nyt ark bruger.
- **Annoteringsstørrelser på papir** (Indstillinger › Global › Standardpolitikker): kontorets højder i millimeter, som de udskrives. CadCraft bruger den for noter og labels: {{cmd:ANNOSCALE}} sætter højden, ny tekst starter med, til den højde ved annoteringsskalaen. Se [Enheder, papir og skalaer](topic:units-papers-scales#annotate-by-scale).

En tegning i tommer eller fod bruger de imperiale værdier; enhver anden tegning bruger de metriske. En tegning uden enheder bruger det enhedssystem, der er sat i Indstillinger › Global › Standardpolitikker, eller metrisk, når intet er sat.

## Del dem på kontoret

1. Åbn fanen **Global** i Indstillinger, og vælg {{ui:Standardpolitikker}}.
2. Klik {{ui:Gem i en fil}}. Du får en lille fil, der ender på `.ccdefaults.json`.
3. På en anden computer: slå add-on'et til, åbn det samme sted, og klik {{ui:Indlæs fra en fil}}. Filens politikker erstatter dem på den computer.

Én fil indeholder politikkerne for alle CadCraft-apps, så den samme fil virker i BimCraft.

## Godt at vide

- Der er ingen politik for et arks skala: et nyt arks visning tilpasses til tegningen, og du angiver dens skala på arket.
- Der er ingen politik for en målsætningsstil: en ny tegning har ingen navngivne målsætningsstile. Sæt målsætninger op med DIMSTYLE, eller start fra en tegning, der har dine.
- Filen er almindelig, åben JSON. En politik, filen nævner, som denne version ikke kender, udelades og nævnes i beskeden; resten indlæses.
- Politikker gemmes i denne browser, ikke i tegningen. Slår du add-on'et fra, er alt CadCraft's egent igen.
