---
title: Dessiner des murs, portes et fenêtres intelligents en 2D
summary: Dessiner des murs comme une polyligne, les raccorder proprement, et insérer des portes et fenêtres qui suivent le mur. Tout en 2D, sans modèle 3D.
keywords: mur, murs, WALL, WA, porte, DOOR, DR, fenêtre, WINDOW, WN, DELOPENING, mur intelligent, plan d'étage, battant, charnière, ouverture
from: 45845d49
---

Les murs ici sont des objets de dessin 2D. Ils ne créent aucun modèle 3D, si bien qu'un plan reste aussi léger qu'un dessin au trait. Pour un modèle de bâtiment, utilisez BimCraft.

## Dessiner des murs

Tapez `WALL` (`WA`), ou choisissez {{ui:Mur}} dans le menu {{ui:Plus}} du groupe {{ui:Dessiner}}, puis cliquez des points comme pour une polyligne. Appuyez sur {{key:Enter}} pour terminer, ou tapez `C` pour fermer la pièce.

- `T` règle l'épaisseur.
- `J` indique ce que vos clics suivent : le centre du mur, ou sa face gauche ou droite.
- `F` règle le remplissage : aucun, plein ou hachures.

Les angles se mettent en onglet d'eux-mêmes. Un mur qui se termine à l'intérieur de l'épaisseur d'un autre mur se joint en T propre, et les murs qui se croisent s'ouvrent l'un sur l'autre. Les jonctions sont enregistrées avec les murs. Pour les rectangles, polygones, arcs, coupes, verrouillages et le reste, voir « Formes, coupes, décalages et verrouillages des murs 2D ».

## Ajouter des portes et des fenêtres

Tapez `DOOR` (`DR`) ou `WINDOW` (`WN`) et cliquez sur un mur. Une porte s'ouvre du côté du mur où vous cliquez. `W` règle la largeur, `Y` le type et `H` le côté de la charnière. Continuez à cliquer pour en placer d'autres, et appuyez sur {{key:Enter}} pour terminer. Les portes peuvent être simples, doubles, coulissantes ou un simple passage ouvert. Les fenêtres peuvent être fixes, à battant ou coulissantes.

## Les modifier

Sélectionnez un mur pour voir ses poignées :

- Les poignées d'extrémité étirent le mur. Les murs joints à lui suivent.
- La poignée du milieu déplace le mur.
- Une poignée sur une ouverture la fait glisser le long du mur.
- Les flèches inversent la charnière et le sens d'ouverture d'une porte.

Propriétés affiche l'épaisseur, le remplissage et chaque ouverture : type, largeur, position, charnière, sens d'ouverture, affichée ouverte ou fermée, et {{ui:Retirer}}. `DELOPENING` supprime l'ouverture la plus proche de l'endroit où vous cliquez.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` et `ERASE` fonctionnent comme d'habitude. Portes et fenêtres suivent leur mur, les murs joints gardent leurs jonctions, et un seul {{ui:Annuler}} revient sur tout.

## Dans d'autres programmes

Chaque mur est enregistré comme un bloc ordinaire, donc les autres logiciels de CAO l'affichent correctement et peuvent le déplacer, mais ils ne peuvent pas le modifier en tant que mur. `EXPLODE` transforme un mur en simples lignes et arcs, et il cesse alors d'être un mur.
