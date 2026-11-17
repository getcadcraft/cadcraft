---
title: Dessiner avec des coordonnées
summary: Dessiner un contour exact de pièce en saisissant des coordonnées absolues, relatives et polaires, ainsi que par saisie directe de distance.
keywords: ligne, pline, polyligne, coordonnées, relatif, polaire, absolu, distance directe, @, saisie de points, exact, ortho
from: 19e82350
---

## Ce que vous allez créer

Le contour d'une pièce en L, de 6000 sur 4500 avec une encoche de 2000 sur 1500, dessiné exactement, plus un mur à 30 degrés. Vous utiliserez les quatre façons de saisir un point. Travaillez en millimètres : une unité de dessin représente un millimètre.

La référence rapide de tous les formats se trouve dans [Saisie des coordonnées et des distances](topic:coordinate-entry).

## Avant de commencer

1. Ouvrez CadCraft. Si un dessin est ouvert, cliquez d'abord sur {{ui:Nouvelle}}.
2. Appuyez sur {{key:Esc}} pour qu'aucun objet ne soit sélectionné. Le panneau de droite affiche {{ui:Réglages actuels}}.
3. Réglez {{ui:Unités}} sur {{ui:Millimètres}}. Rien n'est redimensionné ; cela indique seulement aux feuilles et aux tracés ce que représente une unité.

## Coordonnées absolues : le premier point

Une coordonnée absolue est une position mesurée depuis l'origine, saisie sous la forme `x,y`.

1. Saisissez `L` puis appuyez sur {{key:Enter}}. L'invite affiche `Spécifiez le premier point :`.
2. Saisissez `0,0` puis appuyez sur {{key:Enter}}.

La ligne s'étire désormais depuis l'origine jusqu'au réticule. Les coordonnées de la barre d'état indiquent la distance et l'angle depuis le point de départ à mesure que vous déplacez le curseur.

## Coordonnées relatives : @dx,dy

Une coordonnée relative se saisit sous la forme `@dx,dy` : distance horizontale, distance verticale, à partir du dernier point. Les nombres négatifs vont vers la gauche ou vers le bas.

3. Saisissez `@6000,0` puis appuyez sur {{key:Enter}}. Une ligne de 6000 part vers la droite.
4. Saisissez `@0,3000` puis appuyez sur {{key:Enter}}.
5. Saisissez `@-2000,0` puis appuyez sur {{key:Enter}}.
6. Saisissez `@0,1500` puis appuyez sur {{key:Enter}}.

Vous devez voir quatre lignes connectées qui montent le long du côté droit de la pièce.

## Saisie directe de distance : un nombre seul

Lorsque vous saisissez un seul nombre, CadCraft parcourt cette distance dans la direction du réticule. Activez Ortho pour que la direction s'aligne sur l'horizontale ou la verticale.

7. Appuyez sur {{key:F8}}, ou cliquez sur {{ui:Ortho}} dans la barre d'état. La barre d'état affiche « Ortho activé ».
8. Placez le réticule à gauche du dernier point. L'élastique reste horizontal.
9. Saisissez `4000` puis appuyez sur {{key:Enter}}. La ligne va de 4000 vers la gauche.
10. Placez le réticule sous le dernier point.
11. Saisissez `4500` puis appuyez sur {{key:Enter}}. Vous êtes revenu au point de départ.
12. Appuyez sur {{key:Enter}} sur l'invite vide pour terminer la commande.

:::mac
Sur un clavier Mac, F8 peut commander la lecture de médias. Maintenez **fn** et appuyez sur F8, ou cliquez sur {{ui:Ortho}}. Voir [Touches, souris et pavés tactiles](common:keys).
:::

Vous avez maintenant un contour fermé en L, fait de six lignes distinctes.

13. Cliquez sur {{ui:Étendue}} pour tout voir.

## Coordonnées polaires : @distance<angle

Une coordonnée polaire se saisit sous la forme `@distance<angle`. Les angles sont exprimés en degrés, mesurés dans le sens inverse des aiguilles d'une montre depuis la direction X positive : 0 est à droite, 90 est en haut, 180 est à gauche, 270 (ou -90) est en bas.

14. Saisissez `L` puis appuyez sur {{key:Enter}}.
15. Saisissez `6000,0` puis appuyez sur {{key:Enter}} pour commencer au coin inférieur droit.
16. Saisissez `@2500<-30` puis appuyez sur {{key:Enter}}. Une ligne de 2500 part du coin, vers le bas et vers la droite, à 30 degrés sous l'horizontale.
17. Appuyez sur {{key:Enter}} pour terminer la commande.

Une coordonnée polaire sans `@`, comme `2500<30`, est mesurée depuis l'origine et non depuis le dernier point.

## Le même contour en une seule polyligne

Six lignes séparées conviennent à beaucoup de tâches, mais une polyligne est un seul objet : elle se décale, se mesure et se sélectionne d'un seul bloc. Utilisez {{cmd:PLINE}} avec la même saisie.

1. Saisissez `PL` puis appuyez sur {{key:Enter}}.
2. Saisissez `0,-6000` puis appuyez sur {{key:Enter}} pour commencer sous le premier contour.
3. Saisissez `@6000,0`, puis appuyez sur {{key:Enter}}.
4. Saisissez `@0,3000`, puis appuyez sur {{key:Enter}}.
5. Saisissez `@-2000,0`, puis appuyez sur {{key:Enter}}.
6. Saisissez `@0,1500`, puis appuyez sur {{key:Enter}}.
7. Saisissez `@-4000,0`, puis appuyez sur {{key:Enter}}.
8. Saisissez `C` puis appuyez sur {{key:Enter}}. La polyligne se ferme et la commande se termine.
9. Cliquez sur le nouveau contour. Le panneau de droite affiche « Polyligne », ses {{ui:Sommets}}, sa {{ui:Longueur}} et, comme elle est fermée, son {{ui:Aire}}.

L'aire doit afficher 24000000 (millimètres carrés, soit 24 mètres carrés).

## Options pendant le dessin

- Dans {{cmd:LINE}} et {{cmd:PLINE}}, saisissez `U` puis appuyez sur {{key:Enter}} pour annuler le dernier segment sans quitter la commande.
- Dans {{cmd:LINE}}, `C` referme la ligne sur le premier point dès qu'il y a au moins deux segments.
- Dans {{cmd:PLINE}}, `A` passe en segments d'arc (chaque arc se prolonge en douceur à partir du segment précédent), et `L` revient aux lignes. En mode arc, l'option de fermeture est `CL`.
- Appuyer sur {{key:Enter}} à `Spécifiez le premier point :` dans {{cmd:LINE}} repart du dernier point donné, pour reprendre là où vous vous étiez arrêté.

## Erreurs courantes

- **Saisir `6000,0` alors que vous vouliez `@6000,0`.** Sans `@`, le point est mesuré depuis l'origine et non depuis le dernier point : la ligne part ailleurs, de façon inattendue. Dans CadCraft, `x,y` est toujours absolu. Saisissez `U` puis appuyez sur {{key:Enter}} pour la reprendre.
- **Une virgule saisie comme point décimal.** Les décimales utilisent un point : `1250.5`. La virgule sépare toujours X et Y.
- **La distance directe est allée du mauvais côté.** Un nombre seul suit le réticule. Placez le réticule du côté voulu avant d'appuyer sur {{key:Enter}}, et activez {{ui:Ortho}} pour les lignes droites.
- **« Un point ou un mot-clé d'option est requis. »** CadCraft n'a pas compris votre saisie. Vérifiez les espaces dans le nombre ou une virgule manquante, puis saisissez-le de nouveau.
- **Pieds et pouces.** CadCraft ne lit que les nombres simples. Saisissez `150` pour 12'-6" dans un dessin en pouces, ou `12.5` dans un dessin en pieds.
