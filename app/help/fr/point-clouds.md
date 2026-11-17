---
title: Tracer les lignes de récolement sur un nuage de points
summary: Attachez un scan laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) sous le dessin, découpez-y une coupe en plan et dessinez murs, portes et poteaux avec l'accrochage aux objets sur ses points.
keywords: nuage de points, pointcloudattach, pcattach, pointcloud, pc, scan laser, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, récolement, as-built, relevé, coupe, coupe en plan, nœud, accrochage, tracer, conditions existantes
from: b0e0aae5
---

## Ce que vous allez produire

Un plan d'étage en récolement : les murs d'un bâtiment scanné, dessinés en lignes et polylignes exactement sur les points du scan.

## Attacher le nuage

1. Définissez d'abord les unités du dessin s'il n'en a pas (la zone {{ui:Unités}} dans {{ui:Propriétés}}, ou {{cmd:UNITS}}) : CadCraft convertit le nuage de ses unités d'origine vers celles du dessin.
2. Tapez {{cmd:POINTCLOUDATTACH}} (ou `PCATTACH`) puis appuyez sur {{key:Enter}}. Choisissez un fichier `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz` (la rubrique sur les formats de nuage de points indique ce que chacun apporte et ce qu'il faut exporter depuis le logiciel du scanner). Vous pouvez aussi ouvrir le fichier avec {{ui:Ouvrir}}, le déposer sur la page, ou l'envoyer depuis la visionneuse BIM avec {{ui:Tracer dans CadCraft}}.
3. `Coin inférieur gauche du nuage` : appuyez sur {{key:Enter}} pour conserver les coordonnées propres du fichier (un scan recalé sur le projet s'aligne sur le dessin), ou cliquez à l'emplacement où doit se placer le coin inférieur gauche.
4. La ligne de commande indique le nombre de points affichés. La vue fait un zoom sur le nuage ; celui-ci se trouve sous les lignes du dessin, chaque point étant vu d'en haut.

## Couper une tranche en plan et tracer

1. Tapez {{cmd:POINTCLOUD}} (ou `PC`), puis {{ui:Coupe}} (`S`). Seule une fine bande située 1.2 m au-dessus du point le plus bas du nuage s'affiche : murs, ouvertures de portes et poteaux se lisent comme un plan d'étage.
2. `H` règle la hauteur de la coupe, `T` son épaisseur (en unités du dessin). {{key:Enter}} termine la commande.
3. Activez l'accrochage aux objets ({{key:F3}}) avec {{ui:Nœud}} parmi les accrochages. Dessinez avec {{cmd:LINE}} ou {{cmd:PLINE}} : le curseur s'accroche aux points de la coupe, étiquetés « Nuage de points ». Les extrémités, milieux et centres propres au dessin l'emportent sur le nuage ; ainsi, fermer une polyligne revient sur son premier point.
4. Changez la hauteur de coupe pour tracer un autre niveau, puis désactivez la coupe (`S` de nouveau) pour voir tout le nuage.

## Plus d'options

Dans {{cmd:POINTCLOUD}} : Couleur : les points prennent les couleurs du fichier, la hauteur, l'intensité, la classe LiDAR ou une couleur unique ; Taille (SI) règle la taille des points ; Masquer/afficher (V) masque ou affiche le nuage ; Zoom ramène la vue sur le nuage ; Détacher le détache du dessin.

L'onglet 3D affiche aussi le nuage, son point le plus bas posé au sol, avec la même coupe.

:::note
Le nuage ne fait pas partie du dessin : il n'est pas enregistré dans le DWG ni dans le DXF, et annuler ne le modifie pas. Attachez-le de nouveau lorsque vous rouvrez le dessin plus tard. Les fichiers sont lus sur cet ordinateur ; rien n'est envoyé. Les scans très volumineux sont allégés uniformément à 2 millions de points. Pour le moment, les fichiers E57 s'ouvrent jusqu'à 6 millions de points et 512 MB : exportez les scans plus grands en LAS ou LAZ.
:::

## Tracer le nuage

{{cmd:PLOT}} imprime le nuage avec le dessin, sous les lignes : dans un tracé du modèle ({{ui:Tout}} inclut la zone du nuage) et dans chaque fenêtre de présentation, dans le PDF, le PNG, le SVG et ce que vous envoyez à une imprimante. Il imprime ce qui est affiché à l'écran : la coupe si elle est active, les couleurs choisies, et rien si vous l'avez masqué. Sur papier, les points deviennent de petits carrés, le point le plus haut l'emportant dans chacun, et un tracé en conserve au plus environ 400 000 (un nuage très dense s'imprime avec des carrés plus grands). Le nuage n'est tracé que dans le dessin auquel il est attaché ; il n'est jamais imprimé dans l'espace papier lui-même, seulement par une fenêtre de présentation.

## Plusieurs scans

Des scans pris depuis différentes positions peuvent être recalés dans un même repère, affinés avec ICP et exportés en un seul LAS ou E57 : voir [Recaler plusieurs scans en un seul](topic:register-scans).
