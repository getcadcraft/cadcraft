---
title: HVAC: kanaalstrangen tekenen
summary: Teken rechthoekige, ronde en platovale kanaalstrangen op hun hartlijn; bochten, verlopen, T-stukken, aftakstukken en zijtakken komen vanzelf.
keywords: kanaal, strang, hartlijn, bocht, radiusbocht, verstekbocht, verloop, reducer, T-stuk, aftakstuk, zijtak, vertakking, onderkant kanaal, hoogte
from: 56124011
---

## Een strang tekenen

Typ {{cmd:DUCT}} en klik op de punten van de hartlijn van de strang. Terwijl u klikt, bepalen deze opties wat daarna komt:

- {{ui:Vorm}} — rechthoekig, rond of platovaal (een platovaal kanaal ligt met de platte zijden boven en onder).
- {{ui:Maat}} — breedte × hoogte (`24x12`, `600x300`) of een diameter (`14`). De volgende secties krijgen die maat; een maatwijziging maakt een verloop.
- {{ui:Luchtstroom}} — het luchtdebiet van de sectie; de add-on dimensioneert het op gelijke wrijving (zie [Kanalen dimensioneren](topic:hvac-sizing)).
- {{ui:Hoogte}} — de onderkant van het kanaal, vóór het eerste punt (9 ft of 2700 mm, tenzij u dit wijzigt bij {{ui:Instellingen}}).
- {{ui:Systeem}} — toevoer, retour, afvoer, buitenlucht of overig. Elk heeft zijn eigen laag (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) en zijn eigen kleur op het {{ui:3D}}-tabblad.
- {{ui:Tag}} — een naam zoals `S-1`, gebruikt door de kanaalstaat en het 3D-tabblad.
- {{ui:Ongedaan maken}} — neemt het laatste punt terug.

Een strang bevat maximaal 100 punten; begin voor meer een nieuwe strang vanaf het eind ervan.

## De fittingen die het maakt

- **Bochten** op elke hoek. De hartlijnstraal van een radiusbocht is de breedte van het kanaal maal de radiusverhouding van de strang (1 voor rechthoekig, 1.5 voor rond en platovaal, zoals gebruikelijk; wijzig dit bij {{ui:Eigenschappen}}). Een verstekbocht heeft een vierkante keel en een versteklijn; kies deze bij {{ui:Instellingen}} of {{ui:Eigenschappen}}.
- **Verlopen** waar de maat of vorm verandert, net na de hoek (na de bocht). Elke zijde loopt hoogstens 15° schuin (een standaardwaarde die de add-on gebruikt, geen codewaarde), en geen enkel verloop is korter dan 6 in of 150 mm. Rond naar rond heet een reducer. De onderkant blijft vlak; de bovenkant springt.
- **Aftakkingen**: begin een strang binnen een andere, of eindig er binnenin, en het punt verschuift naar de hartlijn van die strang. De aftakking wordt teruggesneden tot de zijde van de hoofdstrang, krijgt een kraag van 2 in of 50 mm, en de hoofdstrang krijgt daar een opening. Een ronde of platovale aftakking is een aftakstuk; een rechthoekige is een T-stuk wanneer die de hoofdstrang vierkant raakt (binnen 15°), en anders een zijtak.

## De strang wijzigen

- Sleep de grip van een punt om het te verplaatsen; de fittingen volgen.
- {{ui:Eigenschappen}} › {{ui:Kanaalstrang}}: tag, systeem, vorm, maat (de hele strang), onderkant kanaal, bochten, de radiusverhouding, materiaal en maatlabels.
- {{cmd:DUCTSIZE}}: kies een sectie en stel de maat in op basis van het luchtdebiet, typ een maat of wijzig de vorm — voor die sectie of de hele strang.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} en {{cmd:ERASE}} werken zoals bij elk object. Een kopie krijgt een eigen identiteit. Een aftakking waarvan de hoofdstrang wegbeweegt, is niet meer verbonden: teken haar opnieuw op de hoofdstrang.
