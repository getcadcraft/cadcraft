---
title: Formes, coupes, décalages et verrouillages des murs 2D
summary: Dessiner des murs en rectangles, polygones et arcs, les couper et les rejoindre, les déplacer d'une cote, et verrouiller un mur à un autre ou à une ligne de trame. Les mêmes outils que les murs de BimCraft.
keywords: mur, barre d'outils murs, boutons de mur, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, style de jonction, onglet, plate, couper d'équerre, cadenas, poignée, étirer l'extrémité, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, jonction, interdire la jonction, verrouillage, ligne de trame, coupe, intervalle, décalage, ligne de localisation
from: f41e7433
---

Ces outils agissent sur les murs 2D créés avec `WALL` (voir « Dessiner des murs, portes et fenêtres intelligents en 2D »). Ils suivent les mêmes règles que les outils de murs de BimCraft, si bien qu'un mur se comporte de la même façon dans les deux.

## Où se trouvent les outils

- Sur la barre d'outils, le groupe {{ui:Murs}} comprend {{ui:Mur}}, {{ui:Rectangle}}, {{ui:Diviser}} et {{ui:Décaler}}. Son menu {{ui:Plus}} contient tous les autres outils de murs, chacun avec son icône.
- Dans les styles de menu en ruban, l'onglet {{ui:Murs}} comprend les panneaux {{ui:Dessiner des murs}}, {{ui:Couper}}, {{ui:Définir et modifier}}, {{ui:Maintenir}} et {{ui:Joindre}}.
- Dans une présentation, les lignes de barre d'outils et la boîte à outils affichent le même groupe {{ui:Murs}}.
- Vous pouvez aussi taper n'importe quelle commande citée ci-dessous.

## Les jonctions sont enregistrées

Lorsqu'une extrémité de mur tombe sur un autre mur, CadCraft enregistre cette jonction avec les deux murs. Il ne recalcule plus les jonctions d'après l'endroit où se trouvent les extrémités. Donc :

- Les murs joints à un mur que vous déplacez le suivent et restent joints. Leurs extrémités glissent le long de leurs propres lignes, si bien que rien ne tourne.
- Si vous faites glisser une extrémité d'un mur par sa poignée, le mur joint à cet endroit garde aussi sa direction. Son extrémité glisse le long de sa propre ligne pour rejoindre le mur déplacé : l'extrémité déplacée se place donc sur cette ligne, pas toujours sous le curseur. L'aperçu montre où. Un mur qui vient buter contre le mur déplacé suit le long de sa propre ligne. Faire glisser l'extrémité droit le long du mur modifie sa longueur, et le mur joint à cet endroit se déplace avec elle.
- `ROTATE` sur un mur joint fonctionne de la même façon : les extrémités de ses voisins glissent le long de leurs propres lignes jusqu'au mur tourné.
- Pour déplacer un angle, sélectionnez les deux murs qui s'y rejoignent et faites glisser la poignée de l'angle. Les deux murs restent sur l'angle et pivotent tous les deux. Les murs plus loin restent comme ils étaient.
- Maintenez {{key:Alt}} quand vous cliquez sur le nouvel emplacement de la poignée pour rompre volontairement les jonctions : le mur va où vous le placez et rien ne suit.
- Si un glissement ferait pivoter un mur joint à travers sa propre extrémité éloignée, il est refusé et rien ne change.
- Un mur dessiné avec {{ui:Interdire les jonctions}} (`D` dans `WALL`), ou désactivé dans Propriétés ({{ui:Interdire la jonction au début}}, {{ui:Interdire la jonction à la fin}}), reste libre à cette extrémité, même s'il touche un autre mur, jusqu'à ce que vous l'autorisiez de nouveau.
- `WALLDISJOIN` ({{ui:Interdire la jonction}} dans le groupe {{ui:Murs}}) fait la même chose d'un clic : cliquez sur un mur près d'une extrémité pour interdire les jonctions à cette extrémité, et cliquez de nouveau pour les autoriser.
- Un dessin ancien n'a pas encore de jonctions enregistrées. La première modification que vous faites les trouve une fois, d'après la position des murs avant la modification, et les enregistre. `WALLJOINS` le fait tout de suite.
- Les fichiers DWG et DXF portent les jonctions à l'intérieur de chaque mur. CadCraft les relit telles qu'enregistrées. Un programme qui ne conserve pas les données étendues affiche les murs comme de simples blocs et supprime les jonctions, et une jonction dont les murs ont été déplacés dans un autre programme est supprimée la prochaine fois que vous modifiez l'un des deux murs.

## Style de jonction d'un angle

Un angle où deux murs se rencontrent bout à bout est dessiné en onglet, sauf si vous choisissez un autre style.

- `WALLJOINSTYLE` ({{ui:Style de jonction}} dans le groupe {{ui:Murs}}) : cliquez sur l'angle. Chaque clic passe au style suivant : {{ui:Onglet}}, {{ui:Plate}}, {{ui:Couper d'équerre}}, puis de nouveau {{ui:Onglet}}. Tapez `T` pour changer lequel des deux murs traverse l'angle sur lequel vous avez cliqué en dernier. Appuyez sur {{key:Enter}} pour terminer. Une exécution de la commande est une seule étape d'annulation.
- {{ui:Plate}} : un mur traverse jusqu'à la face éloignée de l'autre, et l'autre s'arrête contre son côté. {{ui:Couper d'équerre}} : la même chose, mais le mur qui traverse se termine d'équerre par rapport à lui-même. À angle droit, les deux se ressemblent.
- Dans les Propriétés d'un mur : {{ui:Style de jonction au début}}, {{ui:Style de jonction à la fin}}, et {{ui:Traverse au début}}, {{ui:Traverse à la fin}}.
- Le style est enregistré avec les deux murs et voyage dans les fichiers DWG et DXF. Une copie d'un mur démarre sans lui.
- Une jonction en T n'a pas de style à choisir : le mur dont le côté est atteint traverse. Un angle où trois murs ou plus se rencontrent reste en onglet. Il en va de même pour un angle très aigu (inférieur à environ 30 degrés) et pour deux murs dans le prolongement l'un de l'autre.

## Dessiner des formes de murs

Chacune crée les murs en une seule étape d'annulation, avec les angles joints. Dans `WALL`, `O` règle un décalage de placement (de combien à gauche de vos clics le mur est placé), et `D` désactive la jonction pour les murs que vous dessinez ensuite.

- `WALLRECT` (`WR`) : deux coins opposés, comme `RECTANG`.
- `WALLROT` : le premier côté, puis la distance de l'autre côté, pour un rectangle à n'importe quel angle.
- `WALLPOLY` (`WP`) : le nombre de côtés (3 à 64), le centre, `I` pour inscrit ou `C` pour circonscrit, puis le rayon, comme `POLYGON`.
- `WALLARC` (`WARC`) : centre, début, fin. `D` inverse le sens de l'arc.
- `WALLTAN` : cliquez près de l'extrémité d'un mur, puis sur la fin de l'arc, qui part le long de ce mur.
- `WALLPICK` : cliquez sur une ligne ou une polyligne, et indiquez si vous voulez aussi prendre les lignes qui y sont jointes.
- `WALLTRACE` : cliquez à l'intérieur d'une zone fermée de lignes et de murs pour placer des murs autour de la plus petite.

Les murs de plan sont droits, donc un arc est dessiné sous forme de courts murs droits de 15 degrés chacun. Ils se joignent comme n'importe quel angle.

## Couper des murs

- `WALLSPLIT` (`WS`) : cliquez sur le mur, puis sur le point. `C` coupe là où un autre mur le croise, `G` laisse un intervalle entre les parties, `F` rend les extrémités coupées libres au lieu de jointes. La première partie garde la place du mur dans le dessin, et portes et fenêtres suivent leur partie. Une coupe à travers une porte ou une fenêtre est refusée.
- {{ui:Diviser avec un intervalle}} (`WALLSPLITGAP`) : la même coupe, mais elle demande d'abord l'intervalle.
- `WALLDELSEG` : cliquez sur le mur, puis sur les deux extrémités du segment à supprimer.
- `WALLREJOIN` : cliquez sur deux parties d'un même mur pour les réunir de nouveau.

## Déplacer des murs d'une distance

- `WALLDIM` : cliquez sur une cote linéaire ou alignée qui va d'un mur à un autre, puis tapez la nouvelle valeur. Le mur à l'extrémité éloignée se déplace d'équerre par rapport à lui-même, le mur à la première extrémité reste en place, et les murs qui y sont joints suivent.
- `WALLOFFSET` (`WO`) : cliquez sur un mur, puis sur le côté où le placer (`D` tape une distance, `C` fait une copie à la place).
- `WALLSTRETCH` : une fenêtre autour des extrémités du mur, puis un point de base et un second point.
- Dans les Propriétés, une {{ui:Longueur}} saisie conserve le début et entraîne avec elle le mur joint à l'extrémité éloignée, et une nouvelle {{ui:Épaisseur}} s'agrandit en s'éloignant de la {{ui:Ligne de localisation}} que vous avez choisie (la face gauche, la face droite ou le centre).

## Verrouiller des murs

Un verrouillage reste attaché au mur dans le fichier. Si vous déplacez un mur verrouillé, l'autre le suit. Si une seule modification déplace les deux murs de façon différente, elle est refusée et rien ne change.

- `WALLHOLD` : verrouille un mur à un autre mur. `A` le déplace d'abord sur la ligne de l'autre mur, `K` conserve la distance qu'il a.
- `WALLHOLDDIM` : verrouille la distance entre deux murs parallèles.
- `WALLGRID` : verrouille un mur à une ligne de trame (une ligne sur un calque de trame, avec son repère en texte à une extrémité), soit le long de celle-ci, soit avec une extrémité posée dessus. Un mur verrouillé le long de la ligne conserve la distance qu'il a par rapport à elle. Déplacez la ligne de trame avec `GRIDMOVE` et le mur la suit en entier, avec ses murs joints. Un mur qui se trouve le long d'une ligne de trame se déplace entièrement avec elle, même sans verrouillage, et un mur qui ne fait que se terminer sur la ligne est étiré par cette extrémité.
- `WALLHOLDS` liste les verrouillages. `WALLUNHOLD` retire les verrouillages d'un mur.
- Chaque verrouillage affiche un petit cadenas sur le plan : à côté du milieu du mur verrouillé, ou à côté de l'extrémité verrouillée sur une ligne de trame. Cliquez sur un cadenas pour retirer ce verrouillage.

## Ce qui n'est pas encore là

Les verrouillages utilisent les axes des murs. Les murs ici n'ont pas de calques, donc il n'y a pas de priorité de calque à une jonction, et les murs ne sont pas courbes (voir les arcs ci-dessus). Personne n'a encore essayé ces outils sur un grand dessin, et ils n'ont pas été vérifiés dans un autre logiciel de CAO.
