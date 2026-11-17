---
title: Sélection au lasso
summary: Appuyez et faites glisser un contour libre autour des objets pour les sélectionner, en fenêtre, en capture ou en clôture ; basculez avec Espace pendant que vous faites glisser.
keywords: lasso, lassomode, glisser, main levée, sélectionner, sélection, fenêtre, capture, clôture, espace, polygone, tactile, stylet, rectangle
from: 9ec6154d
---

## Ce que vous allez apprendre

Comment sélectionner des objets en les entourant d'un dessin, et comment retrouver le rectangle lorsque vous le souhaitez.

## Dessiner un lasso

1. Dessinez quelques lignes et cercles rapprochés.
2. Sans commande en cours, appuyez sur le bouton de la souris dans une zone vide, puis faites glisser autour de certains d'entre eux en allant **vers la droite** d'abord.
3. Relâchez.

Seuls les objets entièrement compris dans le contour sont sélectionnés. Le contour est tracé en trait plein pendant le glissement : c'est un lasso en fenêtre.

## Fenêtre, capture et clôture

Les objets obtenus dépendent du premier mouvement de votre glissement, et de {{key:Space}} :

| Vous faites glisser | Lasso | Sélectionne |
|---|---|---|
| Vers la droite d'abord | Fenêtre (contour plein) | Seulement les objets **entièrement compris** |
| Vers la gauche d'abord | Capture (pointillés, vert) | Les objets compris **et** les objets que le contour touche |
| Appuyez sur {{key:Space}} pendant le glissement | Fenêtre, puis capture, puis clôture | Clôture (trajet en pointillés, non fermé) : seulement les objets que le trajet croise |

1. Appuyez dans une zone vide et faites glisser autour de certains objets en allant **vers la gauche** d'abord. Tout ce que le contour touche est sélectionné aussi.
2. Appuyez sur {{key:Esc}}.
3. Appuyez et faites glisser de nouveau ; tout en maintenant le bouton, appuyez une fois sur {{key:Space}}. Le contour devient une capture ; appuyez à nouveau sur {{key:Space}} pour une clôture.

{{key:Shift}} pendant le relâchement retire les objets de la sélection (avec « Clic sur les objets : Ajouter » dans les Paramètres).

## Dans une commande

Un lasso fonctionne partout où CadCraft demande `Sélectionnez des objets` : tracez-le, puis appuyez sur {{key:Enter}} pour terminer. {{cmd:STRETCH}} prend un lasso en capture comme fenêtre, ce qui vous permet d'étirer en une seule fois une partie en L d'un dessin.

{{cmd:TRIM}} et {{cmd:EXTEND}} utilisent un glissement différemment : là, ils ajustent (ou prolongent) chaque morceau que le trajet croise. Voir [Ajuster et prolonger](topic:trim-and-extend).

## Le rectangle

Un clic dans un espace vide, un déplacement, puis un second clic dessinent toujours le rectangle de fenêtre (de gauche à droite) ou de capture (de droite à gauche).

Pour que le glissement redessine le rectangle, ouvrez {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Glisser pour sélectionner}} et choisissez {{ui:Rectangle}}, ou tapez {{cmd:LASSOMODE}}, puis `0`. Tapez {{cmd:LASSOMODE}}, puis `1` pour le lasso. Le choix est conservé dans ce navigateur.

:::touch
Glissez un doigt ou un stylet de la même façon. Un simple toucher sélectionne toujours un seul objet.
:::

## Erreurs fréquentes

- **Rien n'a été sélectionné.** Le lasso était une fenêtre et aucun objet ne se trouvait entièrement à l'intérieur. Commencez le glissement vers la gauche, ou appuyez sur {{key:Space}} pendant le glissement.
- **Le glissement a déplacé une poignée.** Appuyer sur la poignée d'un objet sélectionné déplace la poignée. Commencez le lasso dans une zone vide.
- **Espace a mis fin à la commande.** {{key:Space}} ne bascule le lasso que lorsque le bouton est maintenu ; sinon, c'est Entrée.
