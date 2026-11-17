---
title: Ajuster et prolonger
summary: Raccourcissez des lignes jusqu'aux lignes qui les croisent et allongez-les jusqu'à les rejoindre, une pièce à la fois ou plusieurs à la fois en faisant glisser un chemin à travers elles.
keywords: trimextendmode, glissement de fenêtre, trim, extend, ajuster, prolonger, tr, ex, ajustement rapide, glisser, main levée, chemin, clôture, capture, maj, arêtes de coupe, arêtes limites, edgemode, mode, standard, rapide, effacer, aperçu, murs, nettoyage
from: 25fbc5bd
---

## Ce que vous allez apprendre

Comment fonctionnent {{cmd:TRIM}} et {{cmd:EXTEND}}, et les moyens rapides de les utiliser : faire glisser à travers de nombreuses pièces à la fois, maintenir {{key:Shift}} pour passer de l'ajustement au prolongement, et voir ce qui va disparaître avant de cliquer.

## Ajuster une pièce

1. Dessinez une longue ligne horizontale et deux courtes lignes qui la croisent.
2. Tapez `TR` et appuyez sur {{key:Enter}}. L'historique indique `Current settings: Quick mode, edges: No extend`.
3. Posez le pointeur sur la longue ligne, entre les deux courtes. Cette partie devient grise et en pointillés : c'est elle qui va disparaître.
4. Cliquez. La partie disparaît.
5. Appuyez sur {{key:Enter}} pour terminer la commande.

En mode rapide (par défaut), chaque objet visible est une arête de coupe : vous n'avez donc jamais à choisir les arêtes d'abord. Cliquez sur la partie à supprimer. Un objet que rien ne croise est effacé entièrement, et l'historique l'indique.

## Ajuster plusieurs pièces d'un seul glissement

1. Dessinez une longue ligne horizontale et dix courtes lignes verticales qui la croisent.
2. Tapez `TR` et appuyez sur {{key:Enter}}.
3. Appuyez sur le bouton de la souris au-dessus de la longue ligne, à gauche de la première ligne verticale, et faites glisser au-dessus de la longue ligne, à travers les dix lignes.

Pendant le glissement, le chemin apparaît en pointillés, et chaque partie qu'il a traversée devient grise. Relâchez : les dix parties du haut sont ajustées en une seule étape. Tapez `U` (annuler) et appuyez sur {{key:Enter}} pour toutes les remettre d'un coup.

:::tip
Vous pouvez aussi cliquer sur deux emplacements vides : la ligne entre eux fonctionne comme un chemin glissé. Tapez `F` (clôture) pour cliquer une suite de points à la place, puis appuyez sur {{key:Enter}}.
:::

:::touch
Faites glisser un doigt de la même façon. Un appui sur une partie l'ajuste.
:::

## Prolonger à la place, avec Maj

1. Dessinez une ligne verticale, et cinq courtes lignes horizontales à sa gauche qui s'arrêtent avant elle.
2. Tapez `TR` et appuyez sur {{key:Enter}}.
3. Maintenez {{key:Shift}}. Posez le pointeur sur une courte ligne : la partie dont elle s'allongerait apparaît grise et en pointillés.
4. Toujours avec {{key:Shift}} maintenu, faites glisser vers le bas à travers les cinq courtes lignes.

Toutes les cinq vont maintenant jusqu'à la ligne verticale. {{key:Shift}} fonctionne dans l'autre sens avec {{cmd:EXTEND}} (`EX`) : un clic prolonge, un {{key:Shift}}+clic ajuste. Prolonger allonge l'extrémité la plus proche de l'endroit où vous cliquez, ou de celui où le chemin croise.

## Ajuster dans une fenêtre

1. Tapez `TR` et appuyez sur {{key:Enter}}.
2. Tapez `C` et appuyez sur {{key:Enter}}.
3. Cliquez sur deux coins autour des parties à supprimer.

Chaque partie située au moins en partie dans la fenêtre est ajustée.

Pour obtenir une fenêtre simplement en glissant, sans taper `C` : {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Glissement pour ajuster et prolonger}} › {{ui:Une fenêtre}}. Ensuite, appuyer sur un endroit vide et glisser dessine une boîte, et chaque partie qu'elle touche est ajustée (ou prolongée, dans {{cmd:EXTEND}}, ou avec {{key:Shift}}). {{ui:Un chemin}} (le réglage de départ) rétablit le chemin à main levée. La ligne de réglages au début de TRIM indique celui qui est actif.

## Choisir les arêtes de coupe (mode Standard)

Parfois, une seule ligne doit couper, par exemple une face de mur croisée par de nombreuses autres lignes.

1. Tapez `TR` et appuyez sur {{key:Enter}}.
2. Tapez `O` (mOde) et appuyez sur {{key:Enter}}, puis tapez `S` (Standard) et appuyez sur {{key:Enter}}.
3. À `Select cutting edges`, cliquez sur les lignes d'arête (ou faites glisser une fenêtre), puis appuyez sur {{key:Enter}}. Appuyer sur {{key:Enter}} sans rien sélectionner fait de chaque objet une arête.
4. Cliquez ou faites glisser à travers les parties à supprimer.

Seules les arêtes choisies coupent, et un objet qu'aucune arête ne croise est laissé intact. Le mode reste actif jusqu'à la fermeture de la page ; tapez `O`, puis `Q` pour revenir au mode rapide. {{cmd:TRIMEXTENDMODE}} le règle avant de commencer, comme le fait la variable du même nom ailleurs : `0` Standard, `1` Rapide. `T` (arêtes de coupe) choisit de nouvelles arêtes à tout moment ; dans {{cmd:EXTEND}}, c'est `B` (arêtes limites).

## Arêtes qui atteindraient

1. Tapez `TR` et appuyez sur {{key:Enter}}.
2. Tapez `E` (arête), appuyez sur {{key:Enter}}, puis `E` (prolonger) et appuyez sur {{key:Enter}}.

Désormais, une ligne ou un arc de coupe qui s'arrête court compte comme s'il continuait : une courte ligne coupe là où elle croiserait si elle était plus longue. Tapez `E`, puis `N` (sans prolongement) pour revenir en arrière. C'est la même chose que EDGEMODE 1 et 0.

## Effacer sans quitter

Tapez `R` (eRase, effacer) et appuyez sur {{key:Enter}}, choisissez les objets à effacer, puis appuyez sur {{key:Enter}}. TRIM reprend.

## Erreurs courantes

- **Une ligne entière a disparu.** En mode rapide, un objet qu'aucune arête ne croise est effacé. Tapez `U` (annuler) pour le remettre, ou passez en mode Standard (`O`, `S`).
- **« Nothing to trim there: no chosen edge crosses that object. »** En mode Standard, seules les arêtes choisies coupent. Tapez `T` pour les choisir à nouveau.
- **« No boundary in that direction. »** Prolonger n'a rien trouvé devant. Cliquez plus près de l'extrémité qui doit s'allonger, ou activez `E` (arête, prolonger) pour les limites qui s'arrêtent court.
- **Le glissement a dessiné un lasso à la place.** Un glissement ne fait d'ajustement que lorsque TRIM ou EXTEND demande un objet. Sans commande en cours, un glissement sélectionne (voir [Sélection au lasso](topic:lasso-selection)).
- **Seules les lignes, arcs, cercles et polylignes peuvent être ajustés.** Décomposez d'abord un bloc pour ajuster ses lignes.
