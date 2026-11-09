---
title: Tuyauterie : pente et évacuation
summary: Donnez une pente à une évacuation, vérifiez sa chute et ses altitudes, et contrôlez-la par rapport à la pente minimale du code de plomberie.
keywords: pente, évacuation, drain, eaux usées, eaux pluviales, chute, cote radier, altitude, code de plomberie, ipc, 1/4 in par ft, pourcent
from: 651f0dfb
---

## Un tronçon en pente

{{cmd:PIPE}} › {{ui:Pente}} accepte des pouces par pied (`1/4`, `1/8`, `0.125`) dans un dessin en unités impériales, ou un pourcentage (`2`, `1`) dans un dessin métrique ; `0` correspond à l'horizontale. Le tronçon descend dans le sens où vous le tracez, à partir de l'altitude que vous indiquez à son origine. Son plan affiche la pente et une flèche de sens d'écoulement ; son solide sur l'onglet {{ui:3D}} descend avec lui ; le tableau des tronçons de la nomenclature donne son altitude aux deux extrémités.

Une évacuation d'eaux usées ou d'eaux pluviales dessinée sans pente prend la pente minimale que le International Plumbing Code (2021, tableau 704.1) autorise pour son plus grand diamètre :

- 2-1/2 in et moins : 1/4 in par ft (2 %) ;
- 3 à 6 in : 1/8 in par ft (1 %) ;
- 8 in et plus : 1/16 in par ft (0.5 %).

Une évacuation plus plate que cela est signalée par {{cmd:PIPE}} et {{cmd:PIPESCHED}}. Votre réglementation locale peut différer : il s'agit d'un rappel, non d'un contrôle.

## Longueurs le long de la pente

La longueur d'un tronçon en pente dans le tableau — et dans TakeoffCraft — se mesure le long de la pente : 40 ft à 1/8 in par ft donnent 40.002 ft de tuyau et une chute de 5 in.

Modifiez la pente d'un tronçon dans {{ui:Propriétés}} › {{ui:Réseau de tuyaux}} › {{ui:Pente}}.
