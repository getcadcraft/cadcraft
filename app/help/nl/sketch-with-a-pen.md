---
title: Schetsen met een pen en precieze geometrie krijgen
summary: Teken vrij met een pen, muis of vinger, en elke streek wordt een nette lijn, cirkel, boog, rechthoek of polylijn zodra u de pen optilt, aan wat al getekend is gesnapt, met de grootte klaar om over te typen.
keywords: schetsen, pen, stylus, vrij, vinger, opruimen, precies, snap, SKETCHLIVE, SKETCHFIX, grootte, overtypen, druk, lijndikte, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Start {{cmd:SKETCHLIVE}} (of kies **Tekenen › Meer › Schetsen met een pen**) en teken een streek door te drukken en te slepen. Wanneer u de pen optilt, leest CadCraft wat u bedoelde en zet het in de tekening:

| Uw streek | Wat u krijgt |
|---|---|
| Bijna recht | Een lijn. Een bijna horizontale of loodrechte lijn wordt precies horizontaal of loodrecht gemaakt. |
| Gesloten en rond | Een cirkel |
| Deel van een ronde vorm | Een boog |
| Gesloten met vier rechte hoeken | Een rechthoek |
| Al het andere | Een polylijn met rechte zijden |

De uiteinden van een streek worden getrokken naar het dichtstbijzijnde uiteinde van wat al getekend is, zodat een geschetste wand aansluit op de wand ernaast.

## De grootte overtypen

Na elke streek toont de opdrachtregel de grootte ervan (de **lengte** van een lijn, de **straal** van een cirkel of boog, de **breedte** van een rechthoek) als standaardwaarde. Druk op {{key:Enter}} om die te houden, of typ een getal of een lengte zoals `12'6"` om hem te vervangen. Een lijn behoudt zijn eerste uiteinde, een cirkel zijn middelpunt, een rechthoek zijn eerste hoek.

Druk op {{key:Enter}} bij een lege vraag om af te ronden, of typ `U` om de laatste streek terug te nemen. De hele sessie is één ongedaan-maken-stap.

## Meerdere streken tegelijk opruimen

{{cmd:SKETCHFIX}} verzamelt streken en maakt ze allemaal precies wanneer u op {{key:Enter}} drukt, wat geschikt is voor een ruwe indeling die snel is getekend.

:::note
Alles wordt op uw computer berekend met regels, zonder model, en niets wordt ergens naartoe gestuurd.
:::

## Druk bepaalt de lijndikte

Waar de pen voor de apps is ingeschakeld (Instellingen › Algemeen › Invoerapparaten › Pen), bevat een streek die met een pen wordt getekend elk punt dat de pen gaf, met de druk ervan. Een lichte streek maakt een dun object en een stevige een dik object: de gemiddelde druk van de streek kiest 0,18, 0,25, 0,35 of 0,50 mm, en de opdrachtregel zegt welke. Streken getekend met een muis of vinger nemen de huidige lijndikte, zoals voorheen. {{cmd:PENPRESSURE}} zet dit uit (of weer aan); de keuze wordt in deze browser bewaard.
