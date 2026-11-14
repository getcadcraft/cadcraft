---
title: CVC : dessiner les tronçons de gaines
summary: Dessinez des tronçons de gaines rectangulaires, rondes et ovales plates sur leur axe ; les coudes, transitions, réductions, tés, piquages et dérivations se créent automatiquement.
keywords: gaine, tronçon, axe, coude, coude à rayon, coude à onglet, transition, réduction, té, piquage, dérivation, dessous de gaine, altitude
from: 56124011
---

## Dessiner un tronçon

Saisissez {{cmd:DUCT}} puis cliquez sur les points de l'axe du tronçon. Pendant les clics, ces options modifient ce qui suit :

- {{ui:Forme}} — rectangulaire, ronde ou ovale plate (une ovale plate repose avec ses faces plates en haut et en bas).
- {{ui:Taille}} — largeur × hauteur (`24x12`, `600x300`) ou un diamètre (`14`). Les sections suivantes la reprennent ; un changement de taille crée une transition.
- {{ui:Débit d'air}} — le débit de la section ; le module la dimensionne à perte de charge linéaire égale (voir [Dimensionner les gaines](topic:hvac-sizing)).
- {{ui:Altitude}} — le dessous de la gaine, avant le premier point (9 ft ou 2700 mm sauf si vous le modifiez dans {{ui:Paramètres}}).
- {{ui:Système}} — soufflage, reprise, extraction, air neuf ou autre. Chacun a son propre calque (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) et sa propre couleur sur l'onglet {{ui:3D}}.
- {{ui:Repère}} — un nom comme `S-1`, utilisé par le tableau et par l'onglet 3D.
- {{ui:Annuler}} — retire le dernier point.

Un tronçon comporte jusqu'à 100 points ; pour en tracer davantage, commencez un autre tronçon à partir de la fin du premier.

## Les accessoires créés

- **Coudes** à chaque changement de direction. Le rayon sur axe d'un coude à rayon est égal à la largeur de la gaine multipliée par le rapport du tronçon (1 pour le rectangulaire, 1.5 pour le rond et l'ovale plat, comme d'habitude ; modifiez-le dans {{ui:Propriétés}}). Un coude à onglet a une gorge carrée et une ligne d'onglet ; choisissez-le dans {{ui:Paramètres}} ou dans {{ui:Propriétés}}.
- **Transitions** là où la taille ou la forme change, juste après le coude. Chaque côté a une pente d'au plus 15° (valeur par défaut utilisée par le module, et non une valeur de norme), et aucune n'est plus courte que 6 in ou 150 mm. Rond vers rond s'appelle une réduction. Le dessous reste plat ; le dessus présente un décrochement.
- **Dérivations** : commencez un tronçon à l'intérieur d'un autre, ou terminez-le dans un autre, et le point se déplace sur l'axe de ce tronçon. La dérivation est coupée au niveau du côté de la principale, reçoit une collerette de 2 in ou 50 mm, et la principale reçoit une ouverture à cet endroit. Une dérivation ronde ou ovale plate est un piquage ; une dérivation rectangulaire est un té si elle rejoint la principale à angle droit (à 15° près), et une dérivation latérale sinon.

## Modifier un tronçon

- Faites glisser la poignée d'un point pour le déplacer ; les accessoires suivent.
- {{ui:Propriétés}} › {{ui:Réseau de gaines}} : repère, système, forme, taille (tout le tronçon), dessous de gaine, coudes, rapport de rayon, matériau et étiquettes de taille.
- {{cmd:DUCTSIZE}} : choisissez une section, puis dimensionnez-la à partir de son débit d'air, saisissez une taille ou changez sa forme — pour cette section ou pour tout le tronçon.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} et {{cmd:ERASE}} fonctionnent comme sur tout objet. Une copie reçoit sa propre identité. Une dérivation dont la principale s'éloigne n'est plus reliée : tracez-la de nouveau sur la principale.
