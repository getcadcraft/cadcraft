---
title: Dynamische blokken
summary: Wat CadCraft doet met dynamische blokken in een DWG: ze behouden hun ware namen, tonen de staat waarin ze zijn opgeslagen, schakelen zichtbaarheidsstaten om, tonen hun overige waarden en blijven dynamisch wanneer ze worden opgeslagen.
keywords: dynamisch blok, dynamische blokken, zichtbaarheid, zichtbaarheidsstaat, omklappen, uitrekken, opzoeken, parameters, aangepast, blokeigenschappen, *u-blokken, dynamisch
from: 26b6aa80
---

## Wat werkt

Een DWG met dynamische blokken wordt geopend met deze functies die werken:

- **Hun ware namen.** Een dynamisch blok staat in het paneel {{ui:Blokken}} onder zijn eigen naam ("Receptacle", "Sink"), niet als naamloos `*U`-blok.
- **De staat waarin ze zijn opgeslagen.** Elke verwijzing toont precies wat het andere programma toonde: de zichtbaarheidsstaat waarop hij stond, uitgerekt of omgeklapt zoals hij was opgeslagen.
- **De zichtbaarheidsstaat wisselen.** Selecteer één verwijzing (of meerdere van hetzelfde blok), open {{ui:Eigenschappen}} en kies in de sectie {{ui:Aangepast}} een andere staat uit de lijst {{ui:Zichtbaarheid}}. De verwijzing toont die staat meteen, ook de attributen: die welke de staat verbergt verdwijnen, die welke hij toont verschijnen met hun waarden. Een verwijzing bewaart elke waarde, dus niets komt leeg terug; {{ui:Eigenschappen}} toont de verborgen waarden gemarkeerd als "verborgen". {{key:Mod+Z}} zet de oude staat in één stap terug.
- **Grips.** Een geselecteerd dynamisch blok toont zijn eigen grips waar zijn parameters liggen: een klein driehoekje voor de zichtbaarheidsstaat (klik erop voor de lijst met staten), pijlen aan de uiteinden van een afstand, een dubbele pijl voor omklappen. Alleen de zichtbaarheidsgrip werkt nu; de andere melden dat in de statusbalk.
- **De overige waarden, alleen-lezen.** Onder de zichtbaarheidslijst toont {{ui:Aangepast}} ook de afstanden, uitlijnhoeken, omklapstanden en punten van het blok zoals de tekening ze bewaart.
- **Zichtbaarheidsstaten bewerken.** Open het blok met {{cmd:BEDIT}}: de editor toont één staat, met de naam in de balk boven de tekening (kies daar een andere). Typ {{cmd:BVSTATE}} om te wisselen, een staat toe te voegen (alles verbergen, alles tonen of behouden wat zichtbaar is), te hernoemen of te verwijderen; {{cmd:BVHIDE}} verbergt geselecteerde objecten in de staat die wordt getoond; {{cmd:BVSHOW}} toont de verborgen objecten vervaagd, zodat u de objecten kunt aanklikken die u terug wilt halen. Sla het blok op: verwijzingen naar een hernoemde staat behouden die onder de nieuwe naam, en verwijzingen naar een verwijderde staat tonen de eerste staat.
- **Blijven dynamisch.** Opgeslagen als DWG in de versie waarin de tekening binnenkwam, blijven de blokken dynamisch, met de staat die u koos: het andere programma opent ze als dezelfde dynamische blokken. Zichtbaarheidsstaten die u bewerkte worden ook opgeslagen: hun nieuwe namen, de staten die u toevoegde en wat elke staat toont.

## Wat alleen-lezen is, of nog niet bestaat

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Afstanden, hoeken of omklappen wijzigen (acties uitrekken, verplaatsen, omklappen) | Ze worden alleen-lezen getoond in {{ui:Aangepast}}; bewerk ze in het programma dat het blok maakte. |
| Opzoek-, XY-, rotatie- en poolparameters | Nog niet gelezen: de verwijzing wordt getoond zoals opgeslagen. |
| De afstand-, omklap- en puntgrips slepen | Ze tonen waar de parameters liggen; de zichtbaarheidsgrip en de lijst {{ui:Zichtbaarheid}} in Eigenschappen wisselen de staten. |
| Dynamische blokken maken (parameters toevoegen, of zichtbaarheidsstaten toevoegen aan een blok dat er geen heeft) | Blokken die u in CadCraft maakt, zijn gewone blokken; {{cmd:BPARAMETER}} zegt dat. |
| Objecten van een blok met zichtbaarheidsstaten toevoegen of wissen in de blokeditor | Het blok wordt dan als gewoon blok opgeslagen (de editor zegt dat bij het sluiten). |
| Ze dynamisch houden in een andere DWG-versie of in DXF | Ze worden opgeslagen als gewone blokken die de gekozen staat tonen, en het opslaan zegt dat. |

:::note
Objecten verplaatsen of wijzigen in {{cmd:BEDIT}} houdt een blok met zichtbaarheidsstaten dynamisch. Een blok zonder staten, of een blok waarvan objecten in de editor zijn toegevoegd of gewist, wordt een gewoon blok.
:::
