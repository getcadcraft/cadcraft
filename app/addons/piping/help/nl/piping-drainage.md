---
title: Leidingwerk: afvoer en helling
summary: Geef een afvoer een helling, bekijk het verval en de hoogtes, en controleer de helling tegen de minimumhelling van de installatiecode.
keywords: helling, afvoer, afvoerleiding, sanitair, regenwater, verval, invert, hoogte, installatiecode, ipc, 1/4 inch per foot, procent
from: 651f0dfb
---

## Een leidingstrang met helling

{{cmd:PIPE}} › {{ui:Helling}} neemt inches per foot (`1/4`, `1/8`, `0.125`) in een tekening in imperiale eenheden, of een procent (`2`, `1`) in een metrische tekening; `0` is horizontaal. De leidingstrang loopt af in de richting waarin u hem tekent, vanaf de hoogte die u bij het begin opgeeft. Het plan toont de helling en een stroomrichtingpijl; het volume op het tabblad {{ui:3D}} loopt er ook mee af; de strangentabel van de leidingstaat geeft de hoogte aan beide uiteinden.

Een sanitaire of regenwaterafvoer die zonder helling wordt getekend, krijgt de kleinste helling die de International Plumbing Code (2021, tabel 704.1) toestaat voor de grootste maat:

- 2-1/2 in en kleiner: 1/4 in per foot (2 %);
- 3 tot 6 in: 1/8 in per foot (1 %);
- 8 in en groter: 1/16 in per foot (0.5 %).

Een afvoer die vlakker is dan dat, wordt gemeld door {{cmd:PIPE}} en {{cmd:PIPESCHED}}. Uw plaatselijke voorschriften kunnen afwijken: dit is een herinnering, geen keuring.

## Lengtes langs de helling

De lengte van een leidingstrang met helling in de staat — en in TakeoffCraft — wordt langs de helling gemeten: 40 ft bij 1/8 in per foot is 40.002 ft leiding en valt 5 in.

Wijzig de helling van een leidingstrang in {{ui:Eigenschappen}} › {{ui:Leidingstrang}} › {{ui:Helling}}.
