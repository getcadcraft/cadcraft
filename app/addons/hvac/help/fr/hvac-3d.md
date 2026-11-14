---
title: CVC : gaines sur l'onglet 3D
summary: Chaque tronçon de gaine est aussi un solide sur l'onglet 3D de CadCraft, construit à partir du même tronçon et mis à jour au fil du dessin.
keywords: 3d, solide, modèle, gainage, altitude, dessous de gaine, étiquette, glb, coordination
from: e5774345
---

## Le même tronçon en 3D

Chaque tronçon de gaine est construit comme un solide fermé unique sur l'onglet {{ui:3D}}, à son altitude (le dessous de la gaine), avec ses coudes, transitions et piquages. Il est redessiné dans la même étape chaque fois que le tronçon change, de sorte qu'annuler rétablit la 2D et la 3D ensemble.

Les solides portent l'étiquette `HVAC ductwork` : masquez-les ou affichez-les tous depuis les étiquettes de l'onglet 3D. Chaque système a sa propre couleur.

## Reconstruire les solides

{{cmd:DUCT3D}} reconstruit le solide de chaque tronçon et supprime les solides dont le tronçon n'existe plus. Utilisez-la après l'ouverture d'un dessin modifié sans le module CVC (ses tronçons ont bougé, mais pas leurs solides), ou après avoir réactivé les solides.

Désactivez les solides dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:CVC}} › {{ui:Solides sur l'onglet 3D}} pour les très grands dessins ; les solides déjà présents restent jusqu'à ce que vous les effaciez dans l'onglet 3D.

## Sans le module

Un solide est un groupe 3D ordinaire. Il s'enregistre avec le dessin (DWG et DXF), apparaît sur l'onglet 3D et s'exporte en GLB, OBJ et STL avec le reste, que le module CVC soit activé ou non.
