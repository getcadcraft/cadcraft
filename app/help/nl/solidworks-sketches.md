---
title: Schetsen naar en van andere onderdeelmodelleurs verplaatsen
summary: Schrijf een macro die uw tekening opnieuw opbouwt als één beperkte schets in een onderdeelmodelleur, en open een schets die daaruit is geëxporteerd.
keywords: schets, macro, swb, vba, export, onderdeelmodelleur, globale variabelen, vergelijkingen, relaties, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks is niet beschikbaar waar CadCraft wordt gebouwd, dus geen van beide richtingen is nog in SolidWorks getest. Wat CadCraft schrijft wordt alleen op structuur gecontroleerd. Controleer het resultaat voordat u erop vertrouwt.
:::

## Een tekening als schets verzenden

1. Beperk en bemaat de tekening (zie [Een tekening beperken](topic:constraints)).
2. Open in de groep {{ui:Parametrisch}} {{ui:Meer}} en kies {{ui:Macro voor SolidWorks (.swb)}}, of typ {{cmd:SWBOUT}}.

   Een bestand met de naam van de tekening, eindigend op `.swb`, wordt gedownload.
3. Kies in SolidWorks **Extra > Macro > Uitvoeren** en selecteer dat bestand.

De macro maakt een nieuw onderdeel op basis van uw standaard onderdeelsjabloon, opent een schets op het Vooraanzichtvlak en tekent daarin de lijnen, cirkels, bogen, punten en polylijnen van het model, met:

- uw beperkingen als schetsrelaties,
- uw maatbeperkingen als maten met dezelfde namen (`d1@Sketch1`),
- uw eigen parameters als globale variabelen,
- elke expressie als vergelijking.

Het onderdeel gebruikt de lengte-eenheid van de tekening. Tekst, blokken, arceringen, maten en bladen maken geen deel uit van de schets; de geschiedenis somt op wat is weggelaten. Expressies zonder vergelijkingsvorm daar (`if`, `min`, `max`, `round`, `%` en een paar andere) worden geschreven als hun huidige waarde, en de geschiedenis vermeldt welke. Alles wat de macro niet kan maken, wordt naar een logbestand naast de macro geschreven, en aan het eind vat een bericht het samen.

## Een schets uit een onderdeel openen

1. Voer in SolidWorks de CadCraft-exportmacro uit op het onderdeel (download hem in de app PartCraft: Bestand > Exporteren > Exportmacro om onderdelen terug te halen). Hij schrijft een `.json`-bestand in de indeling `cadcraft-sw-export` naast het onderdeel.
2. Kies in CadCraft {{ui:Openen}} en selecteer dat `.json`-bestand.
3. Wanneer het onderdeel meerdere schetsen heeft, kiest u er één.

De schets wordt de tekening, in millimeters: de lijnen, bogen, cirkels en punten, de relaties als beperkingen, de maten als maatbeperkingen met de oorspronkelijke namen (`D1`, `D2` …), de globale variabelen als parameters, en de vergelijkingen op de maten als hun expressies. De geschiedenis somt op wat niet is overgenomen, zoals relaties die CadCraft niet heeft. De plaats van de schets in het onderdeel wordt niet bewaard: hij wordt plat getekend, zoals hij op zijn vlak te zien is.
