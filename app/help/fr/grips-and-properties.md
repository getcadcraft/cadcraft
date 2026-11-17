---
title: Modifier avec les poignées et Propriétés
summary: Étirer, déplacer et redimensionner des objets par leurs poignées, et saisir des longueurs, rayons, angles et coordonnées exacts dans le panneau Propriétés.
keywords: poignées, propriétés, étirer, longueur, rayon, coordonnées, modifier, propriétés rapides, palette des propriétés, changer, calque, couleur
from: f22541ba
---

## Ce que vous allez apprendre

Deux façons rapides de modifier un objet sans commande : faire glisser ses **poignées**, ou saisir de nouvelles valeurs dans le panneau **Propriétés** à droite.

## Poignées

Lorsque vous sélectionnez des objets (jusqu'à 200 à la fois) sans commande en cours, de petits carrés apparaissent sur eux. Ce sont les poignées :

| Objet | Poignées |
|---|---|
| Ligne | Les deux extrémités et le milieu (déplace toute la ligne) |
| Cercle | Le centre (le déplace) et quatre points du cercle (modifient le rayon) |
| Arc | Le centre et les deux extrémités (modifient le début et la fin) |
| Polyligne | Chaque sommet |
| Texte, point, référence de bloc | Le point d'insertion |
| Ellipse | Le centre |
| Cote | Ses points de définition et la position de la ligne de cote |
| Fenêtre de présentation | Le centre (la déplace) et les quatre coins (la redimensionnent) |

### Déplacer une poignée

1. Dessinez une ligne et cliquez dessus. Trois poignées apparaissent.
2. Cliquez sur la poignée à une extrémité. La barre d'état indique « Cliquez à l'endroit où doit aller cette poignée (Échap pour annuler). Les accrochages et l'ortho s'appliquent. »
3. Déplacez le réticule. Un aperçu suit.
4. Cliquez sur la nouvelle position, ou accrochez-vous à un point d'un autre objet et cliquez.

L'extrémité se déplace et le reste de la ligne reste en place. Vous pouvez aussi appuyer sur une poignée et la faire glisser, puis la relâcher à l'endroit voulu.

:::note
Vous ne pouvez pas saisir de coordonnées pour une poignée. Pour une position exacte, accrochez-vous à un point, ou saisissez la valeur dans Propriétés.
:::

Appuyez sur {{key:Esc}} ou faites un clic droit pour annuler un déplacement de poignée.

## Propriétés

Le panneau de droite affiche les propriétés de ce qui est sélectionné.

1. Cliquez sur une ligne. L'en-tête du panneau indique « Ligne ».
2. Cliquez dans {{ui:Longueur}}, tapez `2500` et appuyez sur {{key:Enter}}.

La ligne mesure maintenant exactement 2500, en conservant son point de départ et son angle. {{key:Enter}} ou un clic ailleurs applique une valeur ; {{key:Esc}} rétablit l'ancienne valeur. Chaque modification correspond à une seule étape d'annulation, même lorsque de nombreux objets changent en même temps.

Les champs acceptent des expressions (`=2*45`) et des longueurs avec unités (`3'6"`, `900mm`), chaque point possède X, Y et Z, et plusieurs objets peuvent être modifiés ensemble. Tout cela est décrit dans [Le panneau Propriétés](topic:properties-panel).

## Erreurs fréquentes

- **Aucune poignée n'apparaît.** Une commande est en cours (appuyez sur {{key:Esc}}), ou plus de 200 objets sont sélectionnés, ou l'objet est sur un calque verrouillé.
- **La poignée est allée au mauvais endroit.** Un accrochage l'a attrapée. Maintenez {{key:Shift}} pendant le clic pour ignorer les accrochages.
- **La saisie dans Propriétés n'a rien fait.** Appuyez sur {{key:Enter}} ou cliquez ailleurs pour appliquer. Une valeur refusée (longueurs et rayons nuls ou négatifs, texte qui n'est pas une valeur) met le champ en rouge et indique la raison.
- **Les lettres tapées sont allées dans un champ de Propriétés.** Tant qu'un champ a le curseur, les touches s'y écrivent. Appuyez sur {{key:Enter}} ou {{key:Esc}}, puis tapez la commande.
