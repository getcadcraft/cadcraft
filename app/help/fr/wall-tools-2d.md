---
title: Formes de murs, coupes, décalages et verrouillages pour murs 2D
summary: Dessinez des murs en rectangles, polygones et arcs, coupez-les et rejoignez-les, déplacez-les selon une cote, et verrouillez un mur sur un autre ou sur une ligne de trame. Mêmes outils que les murs de BimCraft.
keywords: mur, barre des murs, boutons de mur, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, style de jonction, onglet, couper d'équerre, cadenas, poignée, faire glisser l'extrémité, pivoter, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, jonction, interdire la jonction, verrouillage, ligne de trame, couper, intervalle, décalage, ligne d'implantation
from: 49044181
---

Ces outils agissent sur les murs 2D créés par `WALL` (voir « Dessiner des murs, portes et fenêtres intelligents en 2D »). Ils suivent les mêmes règles que les outils de murs de BimCraft, si bien qu'un mur se comporte de la même façon dans les deux.

## Où se trouvent les outils

- Sur la barre d'outils, le groupe {{ui:Murs}} comporte {{ui:Mur}}, {{ui:Rectangle}}, {{ui:Diviser}} et {{ui:Décaler}}. Son menu {{ui:Plus}} contient tous les autres outils de murs, chacun avec son icône.
- Dans les styles de menu en ruban, l'onglet {{ui:Murs}} comporte les panneaux {{ui:Dessiner des murs}}, {{ui:Couper}}, {{ui:Définir et modifier}}, {{ui:Maintenir}} et {{ui:Joindre}}.
- Dans une présentation, les rangées d'outils et la boîte à outils montrent le même groupe {{ui:Murs}}.
- Vous pouvez aussi taper n'importe laquelle des commandes citées ci-dessous.

## Les jonctions sont enregistrées

Lorsqu'une extrémité de mur tombe sur un autre mur, CadCraft enregistre cette jonction avec les deux murs. Il ne recalcule plus les jonctions à partir de l'endroit où tombent les extrémités. Ainsi :

- Les murs joints à un mur que vous déplacez le suivent et restent joints. Leurs extrémités glissent le long de leurs propres lignes, si bien que rien ne pivote.
- Faites glisser une extrémité de mur par sa poignée, et le mur joint à cet endroit garde aussi sa direction. Son extrémité glisse le long de sa propre ligne pour rejoindre le mur déplacé : l'extrémité déplacée tombe donc sur cette ligne, et pas toujours sous le curseur. L'aperçu montre où. Un mur qui vient buter contre le mur déplacé suit le long de sa propre ligne. Faire glisser l'extrémité directement le long du mur change sa longueur, et le mur joint à cet endroit se déplace avec elle.
- `ROTATE` sur un mur joint fonctionne de la même façon : les extrémités de ses voisins glissent le long de leurs lignes jusqu'au mur pivoté.
- Pour déplacer un angle, sélectionnez les deux murs qui s'y rejoignent et faites glisser la poignée de l'angle. Les deux murs restent sur l'angle et tournent tous les deux. Les murs plus loin restent comme ils étaient.
- Maintenez {{key:Alt}} lorsque vous cliquez sur la nouvelle place de la poignée pour rompre volontairement les jonctions : le mur va où vous le placez, et rien ne suit.
- Si un glissement ferait pivoter un mur joint jusqu'à repasser par son propre bout éloigné, il est refusé et rien ne change.
- Un mur dessiné avec {{ui:Interdire les jonctions}} (`D` dans `WALL`), ou désactivé dans Propriétés ({{ui:Interdire la jonction au début}}, {{ui:Interdire la jonction à la fin}}), reste libre à cette extrémité, même s'il touche un autre mur, jusqu'à ce que vous l'autorisiez à nouveau.
- `WALLDISJOIN` ({{ui:Interdire la jonction}} dans le groupe {{ui:Murs}}) fait la même chose d'un clic : cliquez sur un mur près d'une extrémité pour interdire les jonctions à cette extrémité, et cliquez à nouveau pour les autoriser.
- Un dessin ancien n'a pas encore de jonctions enregistrées. La première modification que vous faites les repère une fois, à partir de la position des murs avant cette modification, et les enregistre. `WALLJOINS` le fait immédiatement.
- Les fichiers DWG et DXF portent les jonctions à l'intérieur de chaque mur. CadCraft les relit telles qu'elles ont été enregistrées. Un programme qui ne conserve pas les données étendues affiche les murs comme des blocs ordinaires et perd les jonctions ; une jonction dont les murs ont été déplacés dans un autre programme est perdue à la prochaine modification de l'un des deux murs.

## Style de jonction d'un angle

Un angle où deux murs se rejoignent bout à bout est dessiné en onglet, sauf si vous choisissez un autre style.

- `WALLJOINSTYLE` ({{ui:Style de jonction}} dans le groupe {{ui:Murs}}) : cliquez sur l'angle. Chaque clic passe au style suivant : {{ui:Onglet}}, {{ui:Plate}}, {{ui:Couper d'équerre}}, puis {{ui:Onglet}} à nouveau. Tapez `T` pour inverser le mur qui traverse l'angle sur lequel vous avez cliqué en dernier. Appuyez sur {{key:Enter}} pour terminer. Une exécution de la commande est une seule étape d'annulation.
- {{ui:Plate}} : un mur traverse jusqu'à la face éloignée de l'autre, et l'autre s'arrête contre son côté. {{ui:Couper d'équerre}} : même chose, mais le mur qui traverse se termine d'équerre par rapport à lui-même. À angle droit, les deux se ressemblent.
- Dans les Propriétés d'un mur : {{ui:Style de jonction au début}}, {{ui:Style de jonction à la fin}}, et {{ui:Traverse au début}}, {{ui:Traverse à la fin}}.
- Le style est enregistré avec les deux murs et voyage dans les fichiers DWG et DXF. Une copie d'un mur démarre sans lui.
- Une jonction en T n'a pas de style à choisir : le mur dont on touche le côté traverse. Un angle où trois murs ou plus se rejoignent reste en onglet. Il en va de même pour un angle très aigu (moins d'environ 30 degrés) et pour deux murs alignés.

## Dessiner des formes de murs

Chacune crée les murs en une seule étape d'annulation, avec les angles joints. Dans `WALL`, `O` règle un décalage de placement (de combien à gauche de vos clics le mur passe), et `D` désactive la jonction pour les murs que vous dessinez ensuite.

- `WALLRECT` (`WR`) : deux coins opposés, comme `RECTANG`.
- `WALLROT` : le premier côté, puis jusqu'où va l'autre côté, pour un rectangle à n'importe quel angle.
- `WALLPOLY` (`WP`) : le nombre de côtés (3 à 64), le centre, `I` pour inscrit ou `C` pour circonscrit, puis le rayon, comme `POLYGON` : cliquez, ou tapez-le (un rayon tapé va vers le pointeur, ou suit X lorsque le pointeur est encore sur le centre).
- `WALLARC` (`WARC`) : centre, début, fin. `D` inverse le sens de l'arc.
- `WALLTAN` : cliquez près de l'extrémité d'un mur, puis sur la fin de l'arc, qui part le long de ce mur.
- `WALLPICK` : cliquez sur une ligne ou une polyligne, et indiquez si vous voulez aussi prendre les lignes qui y sont jointes.
- `WALLTRACE` : cliquez à l'intérieur d'une zone fermée de lignes et de murs pour poser des murs autour de la plus petite.

Les murs de plan sont droits : un arc est donc dessiné comme de courts murs droits de 15 degrés chacun. Ils se joignent comme tout angle.

## Couper des murs

- `WALLSPLIT` (`WS`) : cliquez sur le mur, puis sur le point. `C` coupe là où un autre mur le croise, `G` laisse un intervalle entre les morceaux, `F` rend les extrémités coupées libres au lieu de jointes. La première partie garde la place du mur dans le dessin, et les portes et fenêtres suivent leur morceau. Une coupe à travers une porte ou une fenêtre est refusée.
- `WALLSPLITGAP` ({{ui:Diviser avec un intervalle}}) : la même coupe, mais elle demande d'abord l'intervalle.
- `WALLDELSEG` : cliquez sur le mur, puis sur les deux extrémités du morceau à supprimer.
- `WALLREJOIN` : cliquez sur deux morceaux d'un même mur pour n'en refaire qu'un.

## Déplacer des murs selon une distance

- `WALLDIM` ({{ui:Modifier par cote}}) : cliquez sur une cote linéaire ou alignée qui va d'un mur à un autre, puis tapez la nouvelle valeur. Le mur à l'extrémité éloignée se déplace d'équerre par rapport à lui-même, le mur à la première extrémité reste en place, et les murs joints à lui suivent. Le point éloigné de la cote se déplace avec son mur, si bien que la cote affiche la valeur que vous avez tapée.
- `WALLOFFSET` (`WO`) : cliquez sur un mur, puis sur le côté vers lequel le déplacer (`D` tape une distance, `C` crée une copie à la place).
- `WALLSTRETCH` : une fenêtre autour des extrémités de mur, puis un point de base et un second point.
- Dans Propriétés, une {{ui:Longueur}} tapée conserve le départ et entraîne le mur joint à l'extrémité éloignée ; une nouvelle {{ui:Épaisseur}} s'étend à partir de la {{ui:Ligne d'implantation}} que vous avez choisie (la face gauche, la face droite ou le centre).

## Cote entre les axes des murs

L'axe d'un mur n'est pas dessiné, mais l'accrochage aux objets le trouve. Avec l'accrochage aux objets actif ({{key:F3}}), placez le pointeur au milieu de l'épaisseur d'un mur : le repère affiche `Axe du mur : extrémité` ou `Axe du mur : milieu`, et l'axe apparaît en tireté tant que le repère est dessus. Avec {{ui:Perpendiculaire}} ou {{ui:Le plus proche}} activé dans la liste des accrochages aux objets, ceux-ci fonctionnent aussi sur l'axe.

1. Lancez `DIMLINEAR` (ou `DIMALIGNED`).
2. Cliquez sur le premier mur là où le repère affiche `Axe du mur : milieu` ou `Axe du mur : extrémité`.
3. Cliquez sur le second mur de la même façon, puis cliquez à l'endroit où passe la ligne de cote.
4. Pour modifier la distance, lancez `WALLDIM`, cliquez sur la cote et tapez la nouvelle valeur. Le second mur se déplace.

L'accrochage à l'axe fonctionne dans toutes les commandes qui demandent un point.

## Verrouiller des murs

Un verrouillage reste attaché au mur dans le fichier. Si vous déplacez un mur verrouillé, l'autre le suit. Si une modification déplace les deux murs de façon différente, elle est refusée et rien ne change.

- `WALLHOLD` : verrouiller un mur sur un autre mur. `A` le place d'abord sur la ligne de l'autre mur, `K` conserve la distance qu'il a.
- `WALLHOLDDIM` : verrouiller la distance entre deux murs parallèles.
- `WALLGRID` : verrouiller un mur sur une ligne de trame (une ligne sur un calque de trame avec son repère en texte à une extrémité), soit le long de celle-ci, soit avec une extrémité dessus. Un mur verrouillé le long de la ligne garde la distance qu'il a par rapport à elle. Déplacez la ligne de trame avec `GRIDMOVE`, et le mur suit entièrement, avec ses murs joints. Un mur situé le long d'une ligne de trame se déplace entièrement avec elle, même sans verrouillage, et un mur qui ne fait que se terminer sur la ligne est étiré par cette extrémité.
- `WALLHOLDS` liste les verrouillages. `WALLUNHOLD` retire les verrouillages d'un mur.
- Chaque verrouillage affiche un petit cadenas sur le plan : à côté du milieu du mur verrouillé, ou à côté de l'extrémité verrouillée sur une ligne de trame. Cliquez sur un cadenas pour retirer ce verrouillage.

## Ce qui n'est pas encore là

Les verrouillages utilisent les axes des murs. Ici, les murs n'ont pas de calques : il n'y a donc pas de priorité de calque à une jonction, et les murs ne sont pas courbes (voir les arcs ci-dessus). Personne n'a encore testé ces outils sur un grand dessin, et ils n'ont pas été vérifiés dans un autre logiciel de CAO.
