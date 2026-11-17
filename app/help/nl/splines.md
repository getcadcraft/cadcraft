---
title: Splines en polylijnen: SPLINE, SPLINEDIT, PEDIT
summary: Teken een gladde curve door punten of vanuit een besturingspolygoon, bewerk de passpunten en besturingspunten, en bewerk polylijnen (samenvoegen, sluiten, breedte, passen, spline, ontbuigen) of zet een spline om in een polylijn.
keywords: spline, splinedit, spl, spe, pedit, pe, passpunten, besturingspunten, gewichten, nurbs, polylijn bewerken, samenvoegen, passende curve, ontbuigen, omzetten naar polylijn, precisie, raaklijn, curve, passingstolerantie
from: d31f72d8
---

## Wat u gaat maken

Een curve door vijf punten, daarna dezelfde curve op drie manieren bewerkt, en een polylijn van drie lijnen.

## Een spline door punten tekenen

1. Typ `SPL` en druk op {{key:Enter}}.
2. Klik of typ de punten waar de curve doorheen moet gaan: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Druk op {{key:Enter}} na het laatste punt.
3. {{ui:Starttangens}}: klik op een punt waar de curve naartoe moet vertrekken, of druk op {{key:Enter}} om CadCraft dat te laten bepalen. Doe hetzelfde voor de eindtangens.

De curve gaat door elk punt. Typ `C` in plaats van {{key:Enter}} om hem te sluiten (de curve keert terug naar het eerste punt). {{key:U}} (`Undo`) neemt het laatste punt terug terwijl u tekent.

### Tekenen vanuit een besturingspolygoon

Typ `M` bij de eerste prompt, daarna `C` (besturingshoekpunten) en een graad van 1 tot 5 (3 is gebruikelijk). Nu zijn de punten die u kiest de hoeken van een polygoon die de curve naar zich toe trekt; de curve begint bij de eerste en eindigt bij de laatste. Een gesloten curve loopt rond, zonder hoek bij de verbinding.

### Een polylijn omzetten in een spline

Typ bij de eerste prompt `O` (Object) en selecteer polylijnen of lijnen. Ze worden splines door hun hoekpunten; de originelen verdwijnen.

## Een spline bewerken

Selecteer hem en typ `SPE` (of typ `SPE` en klik erop). Grepen tonen de passpunten (of de besturingspunten van een spline die er geen heeft): sleep er een om de curve te hervormen. Bij de prompt:

- **Passpuntgegevens** (een spline getekend door punten): `A` voegt een passpunt toe (klik waar), `D` verwijdert er een (klik dichtbij), `M` verplaatst er een (klik dichtbij, klik daarna op de nieuwe plaats), `T` stelt de eindtangens in, `P` wist de passpunten, zodat de spline daarna via zijn besturingspunten wordt bewerkt.
- **Hoekpunt bewerken**: `A` voegt een besturingspunt toe zonder de curve te veranderen, `M` verplaatst er een, `W` geeft er een **gewicht** (boven 1 trekt de curve dichter naar zich toe, onder 1 laat hij los).
- **Openen** of **Sluiten (C)**, en **Omkeren (R)** (de curve loopt de andere kant op).
- **Naar polylijn omzetten (P)**: de spline wordt een polylijn; de precisie is hoeveel segmenten elk deel krijgt (10 is gebruikelijk).
- **Ongedaan maken (U)** neemt de laatste wijziging terug; **Afsluiten (X)** beëindigt.

{{ui:Eigenschappen}} toont de graad van een spline, hoeveel passpunten en besturingspunten hij heeft, zijn lengte, en laat u hem openen of sluiten.

## Een polylijn bewerken

Selecteer een polylijn en typ `PE`. Een lijn, boog of spline die u kiest, wordt eerst aangeboden als polylijn om naar om te zetten (een spline vraagt om de precisie).

- **Sluiten (C)** / **Openen** verbindt of scheidt de uiteinden.
- **Samenvoegen (J)** voegt lijnen, bogen en polylijnen toe waarvan de uiteinden aansluiten op het uiteinde van de polylijn. `Fuzz distance` is hoe ver uiteinden uit elkaar mogen liggen en toch nog samenvoegen (0 betekent dat ze elkaar moeten raken).
- **Breedte (W)** geeft de hele polylijn één breedte (0 verwijdert die).
- **Passen (F)** vervangt de polylijn door een gladde curve die door zijn hoekpunten gaat; **Spline** door een kubieke B-spline die ze volgt (die begint en eindigt bij het eerste en laatste hoekpunt en blijft dicht bij de andere). Beide worden een polylijn van korte segmenten, en de oorspronkelijke hoeken blijven bewaard, zodat **Ontbuigen** ze terugbrengt.
- **Lijntype genereren (L)** zegt of een streeplijntype over de hele polylijn doorloopt of bij elk hoekpunt opnieuw begint.
- **Omkeren (R)** verandert de volgorde van zijn hoekpunten. **Meervoudig (M)** (`M` bij de eerste prompt) bewerkt meerdere polylijnen met dezelfde opties.

Het bewerken van de hoekpunten van een polylijn in {{ui:Eigenschappen}} of met grepen blijft zoals het was: PEDIT heeft geen hoekpunteditor.

## In bestanden

DWG en DXF 2000 bewaren een spline als spline: graad, besturingspunten, knopen, gewichten, passpunten en tangenten. Een spline die u opent en niet wijzigt, wordt precies zo teruggeschreven als hij kwam. DXF R12 kent geen spline: hij wordt opgeslagen als polylijn langs de curve, en de geschiedenis vermeldt hoeveel.

Offset, bijsnijden, verlengen, afronden, breken en samenvoegen werken niet op splines. Gebruik {{cmd:EXPLODE}} op een spline, of {{cmd:PEDIT}}, om een polylijn te krijgen die die opdrachten wel aankunnen.

## Veelvoorkomende fouten

- **De curve schiet door tussen dicht bij elkaar liggende punten.** Een curve door punten buigt waar de punten dat doen. Gebruik minder punten, of een besturingspolygoon.
- **"Dit is geen spline."** SPLINEDIT werkt alleen op splines; {{cmd:PEDIT}} bewerkt polylijnen.
- **Een gesloten passpuntspline heeft in een ander programma een iets andere vorm.** CadCraft sluit hem met één gladde verbinding bij het eerste punt; een ander programma sluit hem misschien met een periodieke curve. Een gesloten besturingspuntspline is in beide hetzelfde.
