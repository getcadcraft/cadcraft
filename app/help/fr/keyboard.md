---
title: Clavier et souris
summary: Chaque touche, action de souris et touche de la ligne de commande de l'application de dessin CadCraft, telles que le code les traite.
keywords: clavier, raccourcis, touches, souris, molette, panoramique, zoom, clic droit, bouton central, f3, f7, f8, ctrl, touche commande, raccourcis clavier, copier, couper, coller, dupliquer, presse-papiers, tout sélectionner
from: a2608a29
---

Les raccourcis sont affichés pour votre ordinateur. Sur Mac, chaque raccourci {{key:Mod}} ci-dessous utilise la touche Commande, et la touche Ctrl fonctionne aussi. La façon d'écrire les touches, et d'utiliser les touches F sur Mac, est décrite dans [Touches, souris et pavés tactiles](common:keys).

## Saisir des commandes

| Touche | Ce qu'elle fait |
|---|---|
| Toute lettre, tout chiffre ou symbole | Va dans la ligne de commande, où que se trouve le pointeur, sauf si une zone d'un panneau a le curseur |
| {{key:Enter}} | Envoie ce que vous avez tapé. Sur une invite vide : répète la dernière commande, termine une commande, achève une sélection, ou accepte la valeur par défaut dans `<…>` |
| {{key:Space}} | Identique à {{key:Enter}}, sauf lorsque CadCraft demande un texte (texte, noms de blocs, texte de cote), où elle saisit un espace |
| {{key:Esc}} | Annule la commande. Sans commande en cours : annule un déplacement de poignée ou un cadre de sélection, puis efface la sélection |
| {{key:Tab}} | Accepte la commande suggérée affichée à droite de la ligne de commande. Sans rien de tapé et avec le pointeur sur des objets superposés : met en surbrillance le suivant (cliquez pour le choisir) |
| {{key:Up}} {{key:Down}} | Parcourt les lignes que vous avez tapées auparavant (les 100 dernières) |

## Dessin et modification

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Mod+Z}} | Annule la dernière commande |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablit |
| {{key:Mod+A}} | Sélectionne chaque objet modifiable de l'onglet ouvert ({{cmd:SELECTALL}}). Si vous avez tapé du texte dans la ligne de commande, sélectionne ce texte à la place |
| {{key:Delete}} | Efface les objets sélectionnés ({{cmd:ERASE}}), sauf si vous avez tapé quelque chose dans la ligne de commande |
| {{key:Backspace}} | Efface les objets sélectionnés lorsque la ligne de commande n'a pas le curseur ; dans la ligne de commande, supprime ce que vous avez tapé |
| {{key:Esc}} | Sans commande en cours : efface la sélection ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Enregistre une copie au format du dessin (DWG ou DXF) |
| {{key:Mod+Shift+S}} | Enregistrer sous : choisissez DWG ou DXF, puis enregistrez une copie |
| {{key:Mod+O}} | Ouvre un DWG ou DXF |
| {{key:Mod+P}} | Trace en PDF |

Annuler, rétablir, tout sélectionner et tracer ne font rien pendant qu'une commande est en cours : appuyez d'abord sur {{key:Esc}}.

## Copier, couper et coller

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Mod+C}} | Copie la sélection dans le presse-papiers ({{cmd:COPYCLIP}}). Rien de sélectionné : CadCraft demande des objets |
| {{key:Mod+X}} | Couper : copie la sélection, puis l'efface ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Coller : la copie suit le curseur ; cliquez, ou tapez un point, pour la poser ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Coller à la même position : aux coordonnées d'origine de la copie ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliquer : une copie de la sélection suit le pointeur ; cliquez pour la poser, {{key:Esc}} ne laisse rien ({{cmd:DUPLICATE}}) |

Les mêmes actions se trouvent dans le groupe {{ui:Édition}} de la barre d'outils ({{ui:Copier}}, {{ui:Coller}}) et dans son menu {{ui:Plus}}. Pendant qu'une autre commande est en cours, terminez-la ou appuyez d'abord sur {{key:Esc}} ; appuyer de nouveau sur {{key:Mod+V}} ou {{key:Mod+D}} pendant qu'une copie suit le curseur recommence. Lorsque vous avez tapé quelque chose dans la ligne de commande, ou lorsqu'une commande demande un texte, ces touches copient, coupent et collent ce texte à la place. Voir [Copier, coller et dupliquer](topic:copy-paste).

## Bascules

| Touche | Bascule | Bouton de la barre d'état |
|---|---|---|
| {{key:F3}} | Accrochages aux objets activés ou désactivés | {{ui:Accrochage}} |
| {{key:F7}} | Grille activée ou désactivée | {{ui:Grille}} |
| {{key:F8}} | Ortho activé ou désactivé | {{ui:Ortho}} |
| {{key:F10}} | Repérage polaire activé ou désactivé | {{ui:Polaire}} |
| {{key:F11}} | Repérage des accrochages aux objets activé ou désactivé | {{ui:Repérage}} |
| {{key:F12}} | Saisie dynamique activée ou désactivée | {{ui:Dyn}} |

:::mac
Sur Mac, F3, F7 et F8 sont généralement les touches Mission Control et multimédia. Maintenez **fn** avec elles, ou activez les touches de fonction standard dans Réglages Système, comme décrit dans [Touches, souris et pavés tactiles](common:keys). Les boutons de la barre d'état fonctionnent toujours.
:::

:::firefox
Dans Firefox, F7 peut aussi demander d'activer la navigation par curseur. Choisissez **Non**, et utilisez le bouton {{ui:Grille}} si la question revient.
:::

## Aide

| Touche | Ce qu'elle fait |
|---|---|
| {{key:F1}} | Ouvre ou ferme cette aide, à côté du dessin. Fonctionne même pendant qu'une commande est en cours, et n'atteint jamais la ligne de commande. |
| {{key:Esc}} | Curseur dans le panneau d'aide : efface la recherche, ou ferme le panneau |

Le bouton {{ui:Aide}} de la barre du haut fait la même chose que {{key:F1}}. Pendant que vous tapez dans la zone de recherche de l'aide, rien n'atteint la ligne de commande. Cliquez sur le dessin pour rendre les touches à CadCraft ; le panneau reste ouvert à côté.

:::mac
Sur un clavier Mac, maintenez **fn** et appuyez sur F1, ou cliquez sur {{ui:Aide}}.
:::

## Écran

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Ctrl+Shift+F}} | Fait défiler : normal, plein écran, puis plein écran avec les barres masquées. Utilise la touche Ctrl sur tous les ordinateurs, y compris Mac. |
| {{key:Left}} {{key:Right}} | Lorsqu'un onglet sous le dessin a le focus : l'onglet précédent ou suivant |

En plein écran, le navigateur peut utiliser la première {{key:Esc}} pour quitter le plein écran. Appuyez de nouveau sur {{key:Esc}} pour annuler une commande.

## Boîtes de dialogue

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Esc}} | Ferme la boîte de dialogue ({{ui:Tracer en PDF}}, ou une question comme « Modifications non enregistrées », où elle signifie {{ui:Annuler}}) |
| {{key:Tab}} | Passe entre les réglages et les boutons de la boîte de dialogue |

Pendant qu'une boîte de dialogue est ouverte, les touches du dessin sont désactivées.

## Champs des panneaux

Dans une zone du panneau de droite ou de gauche :

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Enter}} | Applique la valeur et quitte la zone |
| {{key:Esc}} | Rétablit l'ancienne valeur et quitte la zone |
| {{key:Tab}} | Applique et passe à la zone suivante |

Lorsqu'une zone a le curseur, les lettres s'y tapent, et non dans la ligne de commande.

## Souris

| Action | Ce qu'elle fait |
|---|---|
| Clic | Choisit un point lorsqu'une commande en demande un ; choisit un objet lorsqu'elle demande des objets ; sinon sélectionne un objet ou une poignée |
| Maj+clic | Retire un objet sélectionné de la sélection (si {{ui:Clic sur les objets}} est réglé sur {{ui:Remplace la sélection}} dans [Paramètres](topic:settings) : l'ajoute). Lors du choix d'un point : ignore les accrochages aux objets pour ce clic |
| Clic dans le vide, puis nouveau clic | Un cadre de sélection : de gauche à droite, c'est une fenêtre ; de droite à gauche, une capture |
| Glisser dans le vide | Un lasso : vers la droite d'abord, c'est une fenêtre ; vers la gauche d'abord, une capture. {{key:Space}} pendant le glissement fait défiler fenêtre, capture et clôture ; {{key:Esc}} l'abandonne (LASSOMODE 0, ou Paramètres, le rend à nouveau rectangulaire) |
| Glisser à travers des morceaux dans TRIM ou EXTEND | Ajuste (ou prolonge) chaque morceau traversé par le tracé ; maintenez {{key:Shift}} pour l'autre mode |
| Glisser une poignée | Déplace la poignée (ou cliquez sur la poignée, puis cliquez à l'endroit où elle doit aller) |
| Double-clic sur un texte | Le sélectionne et place le curseur dans sa zone {{ui:Texte}} du panneau de droite |
| Clic droit | Entrée. Pendant un déplacement de poignée ou un cadre de sélection : l'annule |
| Glisser avec le bouton droit | Panoramique |
| Molette | Zoom avant et arrière autour du réticule |
| Glisser avec la molette (bouton central) | Panoramique |
| Double-clic sur la molette | Zoome sur tout le dessin (étendue) |
| Déposer un DWG ou DXF sur le dessin | L'ouvre |

Sur un pavé tactile ou un écran tactile, voir [Souris, pavé tactile et écran tactile](topic:mouse-trackpad-touch).

## Touches conservées par le navigateur

{{key:Mod+N}}, {{key:Mod+W}} et {{key:Mod+T}} appartiennent toujours au navigateur. CadCraft ne les utilise pas : utilisez {{ui:Nouvelle}} ou tapez `NEW` pour un nouveau dessin. Le presse-papiers de CadCraft est le sien : {{key:Mod+C}} et {{key:Mod+V}} copient des objets entre les dessins et onglets de CadCraft, et non vers d'autres programmes ni depuis eux.

:::mac
Si {{key:Mod+Y}} ouvre l'historique de votre navigateur au lieu de rétablir, utilisez {{key:Mod+Shift+Z}} ou le bouton {{ui:Rétablir}}.
:::

## Où se trouve Déplacer

Déplacer est la commande `MOVE` (touche {{key:M}}) : choisissez les objets, puis un point de base et un second point ou une distance saisie. `ALIGN` et `DISTRIBUTE` existent aussi. BimCraft utilise les mêmes noms pour les mêmes tâches sur les éléments de construction, mais sa touche {{key:M}} est Mesurer : son Déplacer est {{key:Shift+M}}.
