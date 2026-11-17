---
title: Sélectionner des objets
summary: Choisir des objets un par un, avec une fenêtre ou une capture, avant ou pendant une commande, et retirer des objets d'une sélection.
keywords: sélection, sélectionner, fenêtre, capture, nom-verbe, verbe-nom, pointer, tout, dernier, précédent, clôture, retirer, ajouter, tab, cycle, chevauchement, qselect, sélection rapide, filtre, sélectionner similaires, selectsimilar, maj, désélectionner, ctrl+a, pickfirst
from: 676508c7
---

## Ce que vous allez apprendre

Comment choisir les objets sur lesquels une commande agit. CadCraft propose deux façons de travailler, toutes deux valables :

- **Sélectionner d'abord, puis la commande** (nom-verbe). Sélectionnez des objets, puis tapez `M` pour Déplacer. La commande prend votre sélection et passe directement à sa question suivante.
- **Commande d'abord, puis sélection** (verbe-nom). Tapez `M` ; la commande demande `Sélectionnez des objets :` ; vous sélectionnez, puis appuyez sur {{key:Enter}}.

## Choisir un objet à la fois

1. Sans commande en cours, cliquez sur une ligne. Elle est mise en surbrillance et ses poignées (petits carrés) apparaissent. Le panneau de droite affiche ses propriétés.
2. Cliquez sur un autre objet. Il est ajouté à la sélection.
3. Maintenez {{key:Shift}} et cliquez sur un objet sélectionné. Il est retiré de la sélection.
4. Appuyez sur {{key:Esc}}. Rien n'est sélectionné.

## Fenêtre et capture

Cliquez une fois dans un espace vide, déplacez-vous, puis cliquez à nouveau : cela trace un cadre. Appuyer puis faire glisser trace à la place un lasso à main levée, avec les deux mêmes modes (voir [Sélection au lasso](topic:lasso-selection) ; les Paramètres permettent de faire tracer un rectangle au glissement). Les objets obtenus dépendent du sens :

| Vous déplacez | Cadre | Sélectionne |
|---|---|---|
| De gauche à droite | Fenêtre | Uniquement les objets **entièrement à l'intérieur** du cadre |
| De droite à gauche | Capture | Les objets à l'intérieur du cadre **et** ceux qu'il touche |

1. Dessinez quelques lignes et cercles qui se chevauchent.
2. Cliquez dans l'espace vide à gauche de certains objets, déplacez-vous vers la droite, puis cliquez à nouveau. Seuls les objets entièrement à l'intérieur sont sélectionnés.
3. Appuyez sur {{key:Esc}}.
4. Cliquez dans l'espace vide à droite, déplacez-vous vers la gauche en traversant certains objets, puis cliquez à nouveau. Tout ce que le cadre touche est sélectionné.
5. Maintenez {{key:Shift}} et tracez un cadre ou un lasso sur certains objets sélectionnés. Ils sortent de la sélection.

## Sélectionner, puis lancer une commande

1. Sélectionnez deux cercles.
2. Tapez `M` et appuyez sur {{key:Enter}}.

L'historique indique « 2 trouvés », et l'invite passe directement à « Spécifiez le point de base ». Terminez le déplacement (voir [Déplacer, copier, faire pivoter, mettre à l'échelle et symétrie](topic:modify-objects)).

Lorsqu'une commande se termine, la sélection est effacée, pour que la suivante parte de zéro.

Les commandes qui acceptent ainsi une sélection préalable : {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} et {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} et {{cmd:CHAMFER}} demandent toujours de choisir les objets un par un ; {{cmd:TRIM}} et {{cmd:EXTEND}} acceptent un clic ou un tracé que vous faites glisser à travers les morceaux (voir [Ajuster et prolonger](topic:trim-and-extend)).

## Lancer une commande, puis sélectionner

1. Assurez-vous que rien n'est sélectionné ({{key:Esc}}).
2. Tapez `E` et appuyez sur {{key:Enter}}. L'invite indique `Sélectionnez des objets :`.
3. Cliquez sur les objets, ou faites glisser des fenêtres et des captures. L'historique compte chaque choix (`1 trouvé`, `3 trouvés`).
4. Appuyez sur {{key:Enter}}, appuyez sur {{key:Space}} ou faites un clic droit pour terminer la sélection.

Les objets sont effacés, et l'historique indique combien.

À une invite `Sélectionnez des objets :`, vous pouvez aussi taper :

- `ALL`, puis {{key:Enter}} : chaque objet modifiable dans l'onglet ouvert.
- `L` (ou `LAST`), puis {{key:Enter}} : l'objet dessiné le plus récemment.
- `P` (Précédent) : les objets sur lesquels la dernière commande a travaillé, s'ils sont encore là.
- `F` (Clôture) : cliquez ou tapez des points le long d'une ligne ; chaque objet que la ligne traverse est ajouté. Appuyez sur {{key:Enter}} pour terminer la clôture ; `U` (Annuler) retire son dernier point.
- `W` (Fenêtre) ou `C` (Capture) : deux coins, dans le sens où vous faites glisser.
- `R` (Retirer) : à partir de maintenant, les clics, les fenêtres et les clôtures retirent des objets **de** la sélection. L'invite indique `Retirez des objets :`. `A` (Ajouter) rétablit le mode d'ajout.
- `?` : la liste de ces options dans l'historique.

Ces options ne sont pas affichées dans l'invite, comme dans AutoCAD.

## Choisir l'un de plusieurs objets superposés

Lorsque des objets se chevauchent ou se touchent, un clic prend le plus proche. Pour en obtenir un autre :

1. Gardez le pointeur immobile sur l'endroit.
2. Appuyez sur {{key:Tab}}. L'objet suivant à cet endroit est mis en surbrillance, et la barre d'état indique lequel (« 2 sur 3 : Ligne sur le calque Murs »).
3. Appuyez à nouveau sur {{key:Tab}} jusqu'à ce que l'objet voulu soit en surbrillance, puis cliquez sans bouger.

Déplacer le pointeur recommence. Cela fonctionne sans commande en cours, à l'invite « Sélectionnez des objets » et partout où une commande vous demande de choisir un objet.

## Sélectionner selon une règle : Sélection rapide

{{cmd:QSELECT}} (`QS`, ou {{ui:Édition}} › {{ui:Plus}} › {{ui:Sélection rapide}}) sélectionne chaque objet qui correspond à une règle, par exemple chaque cercle dont le rayon est inférieur à 50, ou chaque référence de bloc nommée DOOR-900.

1. Ouvrez {{ui:Sélection rapide}}.
2. Choisissez {{ui:Type d'objet}} (la liste compte chaque type), puis {{ui:Propriété}} : {{ui:Calque}}, {{ui:Couleur}} et, pour certains types, {{ui:Longueur}}, {{ui:Rayon}}, {{ui:Aire}}, {{ui:Hauteur du texte}}, {{ui:Contenu du texte}}, {{ui:Nom du bloc}} ou {{ui:Motif de hachure}}.
3. Choisissez {{ui:Opérateur}} et {{ui:Valeur}}. `*` correspond avec des caractères génériques (`DOOR-*`) ; {{ui:Tout sélectionner}} prend chaque objet du type. Le compte en bas indique combien d'objets correspondent pendant vos choix.
4. {{ui:Mode d'application}} : inclure les correspondances, ou tout le reste. {{ui:Appliquer à}} {{ui:Sélection actuelle}} restreint ce que vous aviez sélectionné ; {{ui:Ajouter à la sélection actuelle}} y ajoute.
5. Cliquez sur {{ui:Sélectionner}}. Lancez ensuite la commande voulue : elle utilise la sélection.

## Sélectionner des objets similaires

Sélectionnez un ou plusieurs objets et tapez {{cmd:SELECTSIMILAR}} (`SIM`), ou choisissez {{ui:Édition}} › {{ui:Plus}} › {{ui:Sélectionner similaires}}. Chaque objet du même type, sur le même calque et de la même couleur est sélectionné ; les références de bloc exigent aussi le même bloc, et les hachures le même motif. Tapez `SE` à l'invite « Sélectionnez des objets » pour choisir ce qui doit correspondre.

## Sélectionner maintenant, utiliser plus tard

Tapez `SELECT` et appuyez sur {{key:Enter}}, choisissez des objets avec l'un des moyens ci-dessus, puis appuyez sur {{key:Enter}}. Ils restent sélectionnés pour la commande suivante, et `P` les reprend à une invite « Sélectionnez des objets » ultérieure.

## Tout sélectionner

Sans commande en cours, appuyez sur {{key:Mod+A}}, ou choisissez {{ui:Tout sélectionner}} dans le menu {{ui:Édition}} › {{ui:Plus}} de la barre d'outils, pour sélectionner chaque objet modifiable de l'onglet ouvert. Si vous avez tapé quelque chose sur la ligne de commande, {{key:Mod+A}} sélectionne ce texte à la place : appuyez d'abord sur {{key:Esc}} pour l'effacer. À une invite « Sélectionnez des objets », tapez `ALL`. {{ui:Tout désélectionner}} dans le même menu, ou {{key:Esc}}, efface la sélection.

:::tip
Si vous préférez que chaque clic remplace la sélection (et que {{key:Shift}} l'ajoute), réglez {{ui:Clic sur les objets}} sur {{ui:Remplace la sélection}} dans [Paramètres de CadCraft](topic:settings).
:::

## Ce qui ne peut pas être sélectionné

- Les objets sur un calque **désactivé**, **gelé** ou **verrouillé**. Les objets verrouillés restent visibles, et vous pouvez encore vous y accrocher, mais vous ne pouvez ni les sélectionner ni les modifier.
- Sur un onglet de feuille, le modèle affiché dans une fenêtre de présentation. Vous sélectionnez les objets propres à la feuille (le cartouche, les notes, les cadres des fenêtres de présentation). Pour modifier le modèle, allez à l'onglet {{ui:Modèle}}.

## Effacer rapidement

Sélectionnez des objets, puis appuyez sur {{key:Delete}} (ou {{key:Backspace}} lorsque la ligne de commande n'a pas le curseur). Sur un clavier Mac, la touche marquée delete fonctionne une fois que vous avez cliqué dans le dessin ; lorsque la ligne de commande a le curseur, appuyez ensemble sur fn et delete. Cela lance {{cmd:ERASE}} sur la sélection. Si rien ne se passe, c'est que vous avez tapé quelque chose sur la ligne de commande : appuyez sur {{key:Esc}}, ou tapez `E` et appuyez sur {{key:Enter}} à la place.

## Erreurs courantes

- **La fenêtre a pris trop peu.** Vous avez tiré de gauche à droite, ce qui ne prend que ce qui est entièrement à l'intérieur. Tirez de droite à gauche pour une capture.
- **Un clic dans l'espace vide a lancé un cadre.** Un clic dans l'espace vide lance une fenêtre ; le second clic la termine. Appuyez sur {{key:Esc}} ou faites un clic droit pour l'abandonner.
- **Un clic dans l'espace vide a relâché la sélection.** C'est le comportement normal, sauf si vous maintenez {{key:Shift}}. Pour conserver la sélection lors d'un tel clic et ne l'effacer qu'avec {{key:Esc}}, réglez {{ui:Clic sur un endroit vide}} sur {{ui:Garde la sélection}} dans [Paramètres de CadCraft](topic:settings#clicking-an-empty-spot).
- **La commande a utilisé des objets que vous ne vouliez pas.** Quelque chose était encore sélectionné au lancement. Appuyez sur {{key:Esc}} avant une commande pour commencer sans rien de sélectionné.
- **Rien n'est sélectionné après une commande.** C'est voulu : une commande terminée efface la sélection.
