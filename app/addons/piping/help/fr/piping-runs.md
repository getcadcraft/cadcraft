---
title: Tuyauterie : dessiner des tronçons de tuyauterie
summary: Dessinez des tronçons de tuyaux par matériau, classe et taille nominale, à trait simple ou double ; les coudes, réductions, tés et culottes se créent d'eux-mêmes.
keywords: tuyau, tronçon, axe, nps, dn, schedule 40, schedule 80, type k, type l, type m, coude, réduction, té, culotte, piquage, double trait, trait simple, altitude
from: d0ed1b49
---

## Dessiner un tronçon

Tapez {{cmd:PIPE}} puis cliquez sur les points de l'axe du tronçon. Avant le premier point, vous pouvez modifier :

- {{ui:Matériau}} et {{ui:Classe}} — acier Schedule 40 ou 80, cuivre type K, L ou M, PVC Schedule 40 ou 80, PEX SDR 9 (voir [Dimensions des tuyaux et origine des données](topic:piping-tables)).
- {{ui:Taille}} — un diamètre nominal : `2`, `1-1/2` (ou `1 1/2`, `1.5`), ou `DN50` dans un dessin métrique. Une taille que le matériau ne fabrique pas est refusée. Changer la taille entre deux points crée une réduction.
- {{ui:Système}} — eau froide sanitaire, eau chaude, retour d'eau chaude, eaux usées, ventilation, eaux pluviales, eau glacée, eau de chauffage chaude, gaz naturel, protection incendie ou autre. Chacun a son propre calque, son étiquette et sa couleur 3D.
- {{ui:Altitude}} — l'altitude de l'axe au départ.
- {{ui:Pente}} — pour les évacuations (voir [Pente et évacuation](topic:piping-drainage)).
- {{ui:Lignes}} — trait simple (l'axe, avec symboles) ou double trait (le diamètre extérieur du tuyau à l'échelle).
- {{ui:Repère}} — un nom tel que `CW-1`, affiché sur l'étiquette.

## Les raccords créés

- **Coudes** à chaque changement de direction : 90° et 45° par leur nom, les autres angles par leur valeur. Les coudes en acier sont dessinés avec le cintrage à grand rayon de l'ASME B16.9 (1.5 × la taille à partir de 3/4 in) ; les coudes des autres matériaux sont dessinés à un diamètre extérieur — un choix de dessin, non une dimension du raccord.
- **Réductions** là où la taille change, concentriques, juste après l'angle.
- **Tés** lorsqu'un tronçon commence ou finit sur un autre : un té lorsqu'il rejoint la conduite principale à angle droit (à 15° près), un té de réduction lorsqu'il est plus petit, une culotte lorsqu'il arrive en biais.

## Modifier un tronçon

Faites glisser la poignée d'un point pour le déplacer. {{ui:Propriétés}} › {{ui:Réseau de tuyaux}} donne le repère, le système, le matériau et la classe, la taille (pour tout le tronçon), l'altitude, la pente et les lignes, et affiche les diamètres extérieur et intérieur du tronçon. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} et {{cmd:ERASE}} fonctionnent comme sur tout autre objet.
