---
title: De weergave draaien en uw eigen coördinaten gebruiken (UCS)
summary: Draai de weergave 90° of naar elke hoek zonder iets in de tekening te verplaatsen, en stel een gebruikerscoördinatensysteem (UCS) in zodat punten, ortho, polaire tracering, het raster en nieuwe tekst de eigen assen van een gebouw volgen.
keywords: ucs, gebruikerscoördinatensysteem, plattegrond, weergave draaien, weergave roteren, weergavedraaiing, ucs z, ucs 3punt, ucs object, ucs wereld, benoemde ucs, ucsfollow, turnleft, turnright, turnworld, schuin gebouw, gedraaid raster
from: 6f152c65
---

## Wat u leert

Hoe u een tekening gedraaid bekijkt, zodat een schuin gebouw op het scherm recht lijkt, en hoe u punten langs de eigen assen intypt. Er verandert niets aan de tekening terwijl u dit doet: objecten houden hun coördinaten, draaien is geen bewerking, en de tekening wordt niet als gewijzigd gemarkeerd.

## De weergave een kwartslag draaien

1. Klik op {{ui:Weergave}} › {{ui:Meer}} › {{ui:Weergave 90° linksom draaien}} of {{ui:Weergave 90° rechtsom draaien}}.

De tekening draait op het scherm rond het midden van het tekengebied. Doe het nog eens om door te draaien.

2. Klik op {{ui:Weergave}} › {{ui:Meer}} › {{ui:Terug naar wereld}} om hem weer recht te zetten.

De opdrachten daarachter zijn {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} en {{cmd:TURNWORLD}}. Om er een toets aan toe te kennen, voegt u een regel toe zoals `TL=TURNLEFT` aan uw aliassen met {{cmd:ALIASEDIT}}.

## Uitlijnen op een schuin gebouw

1. Typ `UCS` en druk op {{key:Enter}}, en daarna `OB` en {{key:Enter}}.
2. Klik op een wandlijn dicht bij het uiteinde dat het oorsprongspunt moet zijn.

De UCS begint nu bij dat uiteinde, met zijn X-as langs de wand, en de weergave draait zodat de wand op het scherm recht staat. Het assenpictogram linksonder laat zien waar de UCS-assen naar wijzen.

3. Teken zoals gewoonlijk. Met de UCS ingesteld:
   - `x,y` en `@dx,dy` worden langs de UCS-assen gemeten; `d<a` meet de hoek vanaf de UCS X-as.
   - {{ui:Ortho}}, polaire tracering en het raster volgen de UCS-assen, net als het kruishaar.
   - Nieuwe tekst en nieuwe alinea's lopen langs de UCS X-as; de horizontale en verticale van {{cmd:DIMLINEAR}} volgen die ook.
   - De coördinaten in de statusbalk en van {{cmd:ID}} zijn UCS-coördinaten.
4. Om een wereldpunt in te typen terwijl een UCS is ingesteld, zet u `*` ervoor: `*0,0` of `@*100,0`.
5. Typ `UCS`, {{key:Enter}}, en daarna nogmaals {{key:Enter}} om terug te gaan naar de wereld.

## Andere manieren om een UCS in te stellen

Bij de prompt {{cmd:UCS}}:

| U typt | Wat het doet |
|---|---|
| een punt | Een nieuwe oorsprong; klik daarna op een punt op de nieuwe X-as, of druk op {{key:Enter}} om de hoek te behouden |
| `Z` | Draait de UCS om zijn oorsprong over een hoek die u typt (graden, tegen de klok in) of kiest |
| `3` (3punt) | Een oorsprong, een punt langs de positieve X-as, en een punt aan de positieve Y-kant |
| `OB` (OBject) | Uit een lijn, boog, cirkel, polylijnsegment, tekst, blokverwijzing, punt of hulplijn |
| `P` (Vorige) | De UCS vóór deze (de laatste tien worden bewaard zolang de tekening open is) |
| `W` (Wereld) | Terug naar de wereld |
| `NA` (NAamgeving) | `S` slaat de huidige UCS op onder een naam, `R` herstelt er een, `D` verwijdert er een, `?` toont ze |

Elke wijziging draait de weergave zodat de nieuwe UCS X-as recht staat. {{cmd:PLAN}} draait de weergave zonder de UCS te wijzigen: {{key:Enter}} voor de huidige UCS, `U` voor een opgeslagen, `W` voor de wereld.

## Goed om te weten

- Elk paneel van een gesplitst scherm houdt zijn eigen draaiing. De UCS hoort bij de tekening.
- Bladen werken in papiercoördinaten; stel een UCS in op het tabblad {{ui:Model}}, of binnen een viewport.
- Selectievensters die in een gedraaide weergave worden gesleept, selecteren wat er op het scherm binnenin ligt.
- LISP-routines krijgen punten in de UCS van `getpoint`, kunnen `UCSORG`, `UCSXDIR`, `UCSYDIR` en `VIEWTWIST` lezen, en `trans` zet om tussen de wereld, de UCS en het scherm.

:::note
Een opgeslagen bestand bewaart de UCS en de draaiing van de weergave in een latere build; tot die tijd gelden ze zolang de tekening open is.
:::
