---
title: As-built-lijnen traceren over een puntenwolk
summary: Koppel een laserscan (LAS, LAZ, E57, PLY, PCD, PTX, PTS of XYZ) onder de tekening, snijd er een plattegrondsnede doorheen en teken wanden, deuren en kolommen met objectsnap op de punten ervan.
keywords: puntenwolk, pointcloudattach, pcattach, pointcloud, pc, laserscan, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, opmeting, snede, plattegrondsnede, knoop, snap, traceren, bestaande situatie
from: b0e0aae5
---

## Wat u gaat maken

Een as-built plattegrond: de wanden van een gescand gebouw getekend als lijnen en polylijnen, precies op de punten van de scan.

## Puntenwolk koppelen

1. Stel de eenheden van de tekening eerst in als die er nog geen heeft (het vak {{ui:Eenheden}} in {{ui:Eigenschappen}}, of {{cmd:UNITS}}): CadCraft zet de puntenwolk om van de eigen eenheden naar die van de tekening.
2. Typ {{cmd:POINTCLOUDATTACH}} (of `PCATTACH`) en druk op {{key:Enter}}. Kies een bestand `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` of `.xyz` (het onderwerp over puntenwolkformaten vertelt wat elk formaat meebrengt en wat u moet exporteren uit de eigen software van een scanner). U kunt het bestand ook openen met {{ui:Openen}}, op de pagina neerzetten, of het sturen vanuit de BIM-viewer via {{ui:Traceren in CadCraft}}.
3. `Linkerondercorner van de puntenwolk`: druk op {{key:Enter}} om de eigen coördinaten van het bestand te behouden (een scan die bij het project is geregistreerd, sluit aan op de tekening), of klik op de plek waar de linkerondercorner moet komen.
4. De opdrachtregel meldt hoeveel punten er zichtbaar zijn. De weergave zoomt naar de puntenwolk; die ligt onder de lijnwerk, elk punt van bovenaf gezien.

## Een plattegrondsnede snijden en traceren

1. Typ {{cmd:POINTCLOUD}} (of `PC`) en daarna `S` voor {{ui:Snede}}. Alleen een dunne laag 1.2 m boven het laagste punt van de puntenwolk wordt getoond: wanden, deuropeningen en kolommen zien eruit als een plattegrond.
2. `H` stelt de hoogte van de snede in, `T` de dikte (in tekeneenheden). {{key:Enter}} beëindigt de opdracht.
3. Zet objectsnap aan ({{key:F3}}) met {{ui:Knoop}} onder de snaps. Teken met {{cmd:LINE}} of {{cmd:PLINE}}: de cursor snapt naar de punten van de snede, met het label "Puntenwolk". De eigen eindpunten, middelpunt van lijn en middelpunten van de tekening gaan voor op de puntenwolk, zodat een polylijn die u sluit op het eerste punt uitkomt.
4. Wijzig de snedehoogte om een andere verdieping te traceren, en schakel de snede weer uit (nogmaals `S`) om de hele puntenwolk te zien.

## Meer opties

In {{cmd:POINTCLOUD}}: `C` kleurt de punten naar de kleuren van het bestand, hoogte, intensiteit, LiDAR-klasse of één kleur; `SI` stelt de puntgrootte in; `V` verbergt of toont de puntenwolk; `Z` zoomt ernaar; `D` koppelt hem los.

Het tabblad 3D toont de puntenwolk ook, met het laagste punt op de grond, en met dezelfde snede.

:::note
De puntenwolk maakt geen deel uit van de tekening: hij wordt niet opgeslagen in de DWG of DXF, en ongedaan maken wijzigt hem niet. Koppel hem opnieuw wanneer u de tekening later opent. Bestanden worden op deze computer gelezen; er wordt niets geüpload. Zeer grote scans worden gelijkmatig uitgedund tot 2 miljoen punten. E57-bestanden openen voorlopig tot 6 miljoen punten en 512 MB: exporteer grotere scans als LAS of LAZ.
:::

## Plotten

{{cmd:PLOT}} plot de puntenwolk mee met de tekening, onder de lijnwerk: in een modelplot ({{ui:Alles}} neemt het gebied van de puntenwolk mee) en in elke layoutviewport, in de PDF, de PNG, de SVG en wat u naar een printer stuurt. Er wordt geplot wat op het scherm staat: de snede als die aan staat, de kleuren die u koos, en verborgen als u hem verborg. Op papier worden de punten kleine vierkantjes, waarbij het hoogste punt per vierkantje wint, en een plot bevat maximaal ongeveer 400.000 ervan (een zeer dichte puntenwolk wordt geplot met grotere vierkantjes). De puntenwolk wordt alleen geplot in de tekening waaraan hij is gekoppeld; hij wordt nooit in papierruimte zelf geplot, alleen via een viewport.

## Meerdere scans

Scans die vanaf verschillende posities zijn gemaakt, kunnen in één referentiestelsel worden geregistreerd, met ICP worden verfijnd en als één LAS of E57 worden geëxporteerd: zie [Meerdere scans in één registreren](topic:register-scans).
