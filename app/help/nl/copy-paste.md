---
title: Kopiëren, plakken en dupliceren
summary: Kopieer objecten naar het klembord van CadCraft, plak ze waar u klikt of op dezelfde plaats, dupliceer met de aanwijzer, en breng werk over van een andere tekening of een ander tabblad.
keywords: kopiëren, knippen, plakken, plakken op dezelfde plaats, dupliceren, klembord, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, tussen tekeningen, ander tabblad, basispunt
from: 4b9f29d3
---

## Wat u leert

Hoe u objecten naar het klembord kopieert, ze plakt waar u klikt, ze op hun eigen coördinaten plakt, ze met de aanwijzer dupliceert, ze knipt en ze naar een andere tekening brengt. Alles hier staat ook in de groep {{ui:Bewerken}} van de werkbalk: {{ui:Kopiëren}}, {{ui:Plakken}} en het menu {{ui:Meer}}.

## Kopiëren en plakken waar u klikt

1. Selecteer de objecten: klik erop, of sleep een venster.
2. Druk op {{key:Mod+C}}, of klik op {{ui:Kopiëren}} in de groep {{ui:Bewerken}}. De opdrachtregel zegt hoeveel objecten zijn gekopieerd. Ze blijven geselecteerd.
3. Druk op {{key:Mod+V}}, of klik op {{ui:Plakken}}. De kopie verschijnt bij de aanwijzer, hangend aan de linkerbenedenhoek van de gekopieerde objecten.
4. Klik waar die hoek naartoe moet, of typ een punt zoals `2000,500` en druk op {{key:Enter}}. Objectsnaps en Ortho werken zoals gewoonlijk.

De geplakte objecten zijn geselecteerd, zodat u ze meteen kunt verplaatsen of wijzigen. Eén {{key:Mod+Z}} haalt het hele plakken ongedaan.

:::tip
Wilt u dat de kopie hangt aan een punt dat u kiest, zoals de hoek van een muur? Typ `COPYBASE`, klik het basispunt, selecteer de objecten en druk op {{key:Enter}}. Plakken plaatst dat punt dan waar u klikt. Om elke kopie te laten hangen aan het midden in plaats van aan de linkerbenedenhoek, wijzigt u {{ui:Plakpunt}} in de [CadCraft-instellingen](topic:settings).
:::

## Plakken op dezelfde plaats

Druk op {{key:Mod+Shift+V}}, of kies {{ui:Plakken op dezelfde plaats}} in het menu {{ui:Meer}}. De kopie komt precies op de coördinaten waarvan ze gekopieerd is, zonder klik. Gebruik dit om objecten naar een andere tekening op dezelfde plek te brengen, of van een blad naar een ander blad.

## Dupliceren en verplaatsen

1. Selecteer de objecten.
2. Druk op {{key:Mod+D}}, of kies {{ui:Dupliceren en verplaatsen}} in het menu {{ui:Meer}}.
3. Een kopie ligt bovenop het origineel en beweegt mee met de aanwijzer. Klik waar hij naartoe moet. U kunt ook een verplaatsing typen, zoals `@0,-600`, of een afstand richting de cursor.

{{key:Esc}} vóór de klik laat niets achter. Het duplicaat is één stap ongedaan te maken en raakt het klembord niet aan.

## Knippen

Druk op {{key:Mod+X}}, of kies {{ui:Knippen}} in het menu {{ui:Meer}}. De objecten gaan naar het klembord en worden uit de tekening gewist, in één stap ongedaan te maken. Plak ze terug met {{key:Mod+V}} of {{key:Mod+Shift+V}}.

## Tussen tekeningen en tabbladen

Het klembord bewaart zijn kopie wanneer u een andere tekening opent, en het wordt gedeeld door elk CadCraft-tabblad in deze browser. Kopieer in het ene tabblad en druk daarna in een ander tabblad op {{key:Mod+V}}.

- Blokken die de objecten gebruiken, komen mee. Als de tekening waarin u plakt al een blok met dezelfde naam heeft, wordt diens eigen definitie gebruikt, zoals AutoCAD doet.
- Lagen die de objecten gebruiken, worden toegevoegd, met de kleur en instellingen die ze hadden.
- De kopie wordt niet opnieuw geschaald wanneer de twee tekeningen verschillende eenheden gebruiken: CadCraft meldt dat, en daarna kunt u {{cmd:SCALE}} gebruiken.
- Viewports blijven op hun blad; ze worden uit een kopie weggelaten.

:::note
Het klembord is van CadCraft zelf. U kunt CadCraft-objecten niet in een ander programma plakken, of vanuit een ander programma in CadCraft: sla op als DWG of DXF. Een zeer grote kopie past misschien niet om tussen tabbladen te delen; de opdrachtregel zegt dan dat alleen dit tabblad hem kan plakken.
:::

## Veelgemaakte fouten

- **{{key:Mod+V}} plakte tekst in de opdrachtregel.** U had daar iets getypt, dus de toetsen werkten op de tekst. Druk op {{key:Esc}} om die te wissen, en druk daarna opnieuw op {{key:Mod+V}}.
- **Er gebeurde niets, en de statusbalk zegt de huidige opdracht af te maken.** Een andere opdracht loopt. Druk eerst op {{key:Esc}}.
- **Het plakken kwam ver weg terecht.** Het hangt aan de linkerbenedenhoek van wat u kopieerde, wat een ver object kan zijn dat u per ongeluk hebt geselecteerd. Gebruik {{ui:Plakken op dezelfde plaats}}, of kopieer met `COPYBASE`.
- **"Niets geplakt" met een reden.** Wat een ander tabblad op het klembord heeft achtergelaten, kon niet worden gelezen (het was beschadigd, of met de hand gewijzigd). Kopieer de objecten opnieuw.

Zie de volledige lijst van toetsen in [Toetsenbord en muis](topic:keyboard), en elke prompt in de [Opdrachtreferentie](topic:commands#clipboard).
