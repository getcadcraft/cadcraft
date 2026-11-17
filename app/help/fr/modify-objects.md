---
title: Déplacer, copier, faire pivoter, mettre à l'échelle, symétrie, étirer et réseau
summary: Disposez du mobilier dans une pièce avec les commandes de modification de base, en utilisant les points de base, les distances saisies et annuler.
keywords: déplacer, copier, rotation, mise à l'échelle, symétrie, étirer, réseau, joindre, matchprop, reproduire les propriétés, peintre, arrayrect, arraypolar, réseau polaire, effacer, décomposer, annuler, rétablir, point de base, déplacement, modifier, aligner, répartir, aligner en ligne, espacer uniformément
from: 8eaeee6c
---

## Ce que vous allez réaliser

Une table avec une chaise, copiée autour de la table, pivotée, mise en symétrie et redimensionnée. Au fil des étapes, vous utilisez {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} et {{cmd:UNDO}}.

## Dessiner les pièces

1. Saisissez `REC` et appuyez sur {{key:Enter}}, saisissez `0,0` et appuyez sur {{key:Enter}}, puis saisissez `@1800,900` et appuyez sur {{key:Enter}}. C'est la table.
2. Saisissez `REC` et appuyez sur {{key:Enter}}, saisissez `300,-700` et appuyez sur {{key:Enter}}, puis saisissez `@450,450` et appuyez sur {{key:Enter}}. C'est une chaise, sous la table.
3. Cliquez sur {{ui:Étendue}}.

## Déplacer : point de base, puis second point

Chaque déplacement, copie, rotation et mise à l'échelle part d'un **point de base** : le point qui est entraîné, ou autour duquel on pivote.

1. Cliquez sur la chaise pour la sélectionner.
2. Saisissez `M` et appuyez sur {{key:Enter}}. L'historique indique `1 objet trouvé`.
3. À l'invite `Spécifiez le point de base`, accrochez-vous au coin supérieur gauche de la chaise (Extrémité) et cliquez.
4. À l'invite `Spécifiez le deuxième point`, saisissez `@0,200` et appuyez sur {{key:Enter}}.

La chaise monte de 200, plus près de la table.

:::tip
Saisissez `D` à l'invite `Spécifiez le point de base` pour donner un déplacement à la place : CadCraft demande alors `Spécifiez le déplacement`, et vous saisissez la distance horizontale et verticale, par exemple `0,200` (pas besoin de `@`).
:::

## Copier, autant de fois que vous voulez

1. Cliquez sur la chaise.
2. Saisissez `CO` et appuyez sur {{key:Enter}}.
3. Accrochez-vous au coin inférieur gauche de la chaise et cliquez comme point de base.
4. Saisissez `@600,0` et appuyez sur {{key:Enter}}. Une copie apparaît à 600 vers la droite.
5. Saisissez à nouveau `@600,0` et appuyez sur {{key:Enter}}. Une seconde copie apparaît à 1200 vers la droite de l'original.
6. Appuyez sur {{key:Enter}} pour terminer la commande.

{{cmd:COPY}} continue jusqu'à ce que vous appuyiez sur {{key:Enter}}. Chaque copie est placée selon la distance entre le point de base et le point que vous indiquez. Un point `@` se compte à partir du dernier point saisi, qui, après la première copie, est le point de cette copie ; ainsi `@600,0` deux fois donne des copies à 600 et à 1200. Saisissez `U` et appuyez sur {{key:Enter}} pour retirer la dernière copie sans quitter la commande.

Vous devriez voir trois chaises alignées sous la table.

:::tip
{{cmd:COPY}} sert à faire des copies dans un même dessin, placées par un point de base. Pour transporter des objets vers un autre dessin ou onglet, ou pour les coller plus tard, utilisez le presse-papiers : {{key:Mod+C}}, puis {{key:Mod+V}}. {{key:Mod+D}} crée une copie qui suit le pointeur. Voir [Copier, coller et dupliquer](topic:copy-paste).
:::

## Mettre la rangée en symétrie de l'autre côté

1. Faites glisser une capture (de droite à gauche) sur les trois chaises, sans toucher la table.
2. Saisissez `MI` et appuyez sur {{key:Enter}}.
3. À l'invite `Spécifiez le premier point de l'axe de symétrie`, accrochez-vous au Milieu du côté gauche de la table et cliquez.
4. À l'invite `Spécifiez le deuxième point de l'axe de symétrie`, accrochez-vous au Milieu du côté droit de la table et cliquez.
5. À l'invite `Effacer les objets source ? [Oui (Y)/Non (N)] <N>`, appuyez sur {{key:Enter}} pour les conserver.

Vous devriez voir trois chaises sous la table et trois chaises en symétrie au-dessus. Le texte d'une sélection en symétrie reste lisible : il est placé en miroir, mais n'est pas écrit à l'envers.

## Faire pivoter une chaise

1. Cliquez sur la chaise la plus à droite sous la table.
2. Saisissez `RO` et appuyez sur {{key:Enter}}.
3. Accrochez-vous au coin inférieur droit de la chaise et cliquez comme point de base.
4. Saisissez `90` et appuyez sur {{key:Enter}}.

La chaise pivote de 90 degrés dans le sens antihoraire autour du point de base. Un angle négatif fait pivoter dans le sens horaire. Au lieu de saisir un angle, vous pouvez cliquer sur un second point : l'angle est mesuré depuis le point de base jusqu'à ce point.

## Mettre la table à l'échelle

1. Sélectionnez la table.
2. Saisissez `SC` et appuyez sur {{key:Enter}}.
3. Accrochez-vous au coin inférieur gauche de la table et cliquez comme point de base.
4. Saisissez `1.2` et appuyez sur {{key:Enter}}.

La table est agrandie de 20 %, en s'éloignant du point de base. Un facteur inférieur à 1 la rend plus petite.

:::note
Si vous cliquez sur un point au lieu de saisir le facteur d'échelle, le facteur est la distance entre le point de base et ce point. Un clic à une unité de dessin du point de base donne un facteur de 1. Saisir le nombre est généralement ce que vous voulez.
:::

## Annuler et rétablir

- {{key:Mod+Z}}, le bouton {{ui:Annuler}}, ou `U` puis {{key:Enter}} annule la dernière commande. Une commande entière est une seule étape : annuler un {{cmd:COPY}} qui a fait cinq copies en retire cinq.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, le bouton {{ui:Rétablir}}, ou `REDO` la rétablit.
- L'historique indique ce qui a été annulé (« COPY annulé »).

CadCraft conserve les 500 dernières étapes. Les réglages de calques (activé, gel, verrouillage, couleur) sont des réglages, non des modifications, et ne sont pas annulés.

## Élargir une pièce

{{cmd:STRETCH}} (`S`, ou {{ui:Étirer}}) ne déplace que ce qui se trouve à l'intérieur d'une fenêtre de capture : les coins et extrémités de lignes situés dedans bougent, le reste ne bouge pas, si bien que la pièce s'élargit au lieu de se déplacer.

1. Saisissez `S` et appuyez sur {{key:Enter}}.
2. Faites glisser une fenêtre de droite à gauche sur le mur de droite, de façon à couvrir les coins du mur et les extrémités de tout ce qui le touche.
3. Appuyez sur {{key:Enter}}.
4. Cliquez un point de base, puis saisissez `@600,0` et appuyez sur {{key:Enter}}.

Le rectangle est 600 plus large ; les lignes qui se terminaient sur le mur s'y terminent toujours. Un arc dont une extrémité est à l'intérieur conserve sa hauteur, les cercles et textes bougent quand leur centre ou leur point d'insertion est à l'intérieur, et une cote mesure sa nouvelle longueur. Les objets désignés un par un, sans fenêtre, se déplacent simplement.

Vous pouvez aussi sélectionner d'abord : faites glisser la fenêtre de capture (ou un lasso de capture) sur le mur sans commande en cours, puis saisissez `S`. STRETCH prend cette sélection et étire ce que ses fenêtres contiennent, exactement comme si vous les aviez tracées à son invite.

## Réseau : rangées et colonnes, ou autour d'un centre

{{cmd:ARRAY}} (`AR`, ou {{ui:Réseau}}) copie la sélection en grille ou en cercle.

1. Sélectionnez une chaise, saisissez `AR` et appuyez sur {{key:Enter}}. Appuyez sur {{key:Enter}} pour Rectangulaire.
2. Un aperçu de 4 colonnes et 3 rangées apparaît. Saisissez `COU`, appuyez sur {{key:Enter}}, puis `5` pour les colonnes et `2` pour les rangées.
3. Saisissez `S`, appuyez sur {{key:Enter}}, puis `600` entre les colonnes et `-900` entre les rangées (négatif vers le bas).
4. Appuyez sur {{key:Enter}} pour créer les copies.

Pour un anneau de chaises autour d'une table, choisissez `PO` (Polaire) à la place, cliquez sur le centre de la table, puis réglez éléments (I), angle de remplissage (F) (360 pour tout le tour, 180 pour la moitié) et `ROT` (si les copies pivotent pour faire face au centre). {{cmd:ARRAYRECT}} et {{cmd:ARRAYPOLAR}} évitent la question.

## Joindre des pièces en une seule polyligne

{{cmd:JOIN}} (`J`, ou {{ui:Modifier}} › {{ui:Plus}} › {{ui:Joindre}}) : sélectionnez des lignes, arcs et polylignes ouvertes dont les extrémités se rejoignent, puis appuyez sur {{key:Enter}}. Ils deviennent une seule polyligne, fermée s'ils font tout le tour, que vous pouvez ensuite décaler d'un seul coup. Des lignes alignées deviennent une seule ligne même avec des espaces entre elles ; des arcs d'un même cercle deviennent un seul arc, ou le cercle.

## Reproduire les propriétés

{{cmd:MATCHPROP}} (`MA`, ou {{ui:Modifier}} › {{ui:Plus}} › {{ui:Reproduire les propriétés}}) : cliquez sur l'objet dont vous voulez l'aspect, puis sélectionnez les objets à modifier et appuyez sur {{key:Enter}}. Ils prennent son calque et sa couleur ; un texte prend sa hauteur, une cote ses dimensions, une hachure son motif. Saisissez `S` (Paramètres) à la seconde question pour désactiver l'un de ces éléments.

## Aligner les objets

**Par points.** {{cmd:ALIGN}} (`AL`, ou {{ui:Modifier}} › {{ui:Plus}} › {{ui:Aligner}}) : sélectionnez les objets et appuyez sur {{key:Enter}}, puis cliquez un point sur eux (la source) et l'endroit où il doit aller (la destination).

- Une seule paire les déplace. Appuyez sur {{key:Enter}} à l'invite `Spécifiez le deuxième point source` pour vous arrêter là.
- Deux paires les font aussi pivoter, de sorte que la ligne entre les deux points source suit la ligne entre les deux points de destination. CadCraft demande ensuite `Mettre les objets à l'échelle selon les points d'alignement ?` : répondez Oui (Y) pour les agrandir ou les réduire aussi dans cette proportion.
- Une troisième paire les met en symétrie lorsque ses deux points sont de part et d'autre de cette ligne.

**Bords et espacement.** {{ui:Modifier}} › {{ui:Plus}} › {{ui:Aligner et répartir}} (ou `ALIGNPANEL`) ouvre un petit panneau au-dessus du dessin. Sélectionnez des objets, puis :

- choisissez l'élément d'alignement dans {{ui:Aligner sur}} (la sélection entière, le premier ou le dernier objet désigné, ou un point que vous cliquez), puis cliquez sur {{ui:Gauche}}, {{ui:Centre}}, {{ui:Droite}}, {{ui:Dessus}}, {{ui:Milieu}} ou {{ui:Dessous}} ;
- ou choisissez {{ui:Espaces égaux}} ou {{ui:Centres égaux}}, puis cliquez sur {{ui:En largeur}} ou {{ui:En hauteur}} : les deux objets extrêmes restent en place, les autres sont répartis régulièrement entre eux (trois objets au minimum).

Chaque clic est une étape d'annulation, et la sélection reste, ce qui permet d'essayer autre chose. Chaque objet est compté par son cadre englobant, dans le SCU lorsqu'il est défini. Dans la ligne de commande, les équivalents sont {{cmd:ALIGNTO}} et {{cmd:DISTRIBUTE}}.

## Effacer et décomposer

- {{cmd:ERASE}} (`E`, ou {{key:Delete}}) supprime les objets sélectionnés.
- {{cmd:EXPLODE}} (`X`) décompose une polyligne en lignes et arcs, une référence de bloc en ses objets, et une cote en lignes, pointes de flèche et texte. Les cotes décomposées ne se mesurent plus elles-mêmes.

## Erreurs fréquentes

- **Saisir une distance sans `@` au second point.** `600,0` est le point absolu 600,0, et non « 600 vers la droite ». Utilisez `@600,0`, ou un simple `600` avec le réticule dans la bonne direction.
- **La rotation a eu lieu dans le mauvais sens.** Les angles positifs pivotent dans le sens antihoraire.
- **Annuler a retiré plus que prévu.** Une annulation retire toute la dernière commande, y compris chaque copie qu'elle a faite.
- **La commande n'a pas demandé de sélectionner des objets.** Des objets étaient déjà sélectionnés, et la commande les a utilisés. Appuyez d'abord sur {{key:Esc}} pour commencer sans rien sélectionner.
