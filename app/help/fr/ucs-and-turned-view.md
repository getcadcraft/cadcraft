---
title: Tourner la vue et utiliser vos propres coordonnées (UCS)
summary: Tournez la vue de 90° ou d'un angle quelconque sans rien déplacer dans le dessin, et définissez un système de coordonnées utilisateur (UCS) pour que les points, l'ortho, le repérage polaire, la grille et le nouveau texte suivent les axes propres d'un bâtiment.
keywords: ucs, système de coordonnées utilisateur, plan, tourner la vue, pivoter la vue, rotation de la vue, ucs z, ucs 3point, ucs objet, ucs monde, ucs nommé, ucsfollow, turnleft, turnright, turnworld, bâtiment incliné, grille pivotée
from: 6f152c65
---

## Ce que vous allez apprendre

Comment regarder un dessin tourné, pour qu'un bâtiment dessiné en biais se lise bien d'aplomb à l'écran, et comment taper des points le long de ses propres axes. Rien dans le dessin ne bouge pendant ces opérations : les objets gardent leurs coordonnées, une rotation de vue n'est pas une modification, et le dessin n'est pas marqué comme modifié.

## Tourner la vue d'un quart de tour

1. Cliquez sur {{ui:Vue}} › {{ui:Plus}} › {{ui:Tourner la vue de 90° à gauche}} ou {{ui:Tourner la vue de 90° à droite}}.

Le dessin tourne à l'écran autour du centre de la zone de dessin. Recommencez pour continuer à tourner.

2. Cliquez sur {{ui:Vue}} › {{ui:Plus}} › {{ui:Retour au monde}} pour la remettre à plat.

Les commandes derrière ces menus sont {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} et {{cmd:TURNWORLD}}. Pour leur attribuer une touche, ajoutez une ligne telle que `TL=TURNLEFT` à vos alias avec {{cmd:ALIASEDIT}}.

## S'aligner sur un bâtiment incliné

1. Tapez `UCS` et appuyez sur {{key:Enter}}, puis `OB` et {{key:Enter}}.
2. Cliquez sur une ligne de mur près de l'extrémité qui doit être l'origine.

L'UCS commence maintenant à cette extrémité, son axe X le long du mur, et la vue tourne pour que le mur soit horizontal à l'écran. L'icône des axes, dans le coin inférieur gauche, indique où pointent les axes de l'UCS.

3. Dessinez normalement. Avec l'UCS défini :
   - `x,y` et `@dx,dy` sont mesurés le long des axes de l'UCS ; `d<a` mesure l'angle depuis l'axe X de l'UCS.
   - {{ui:Ortho}}, le repérage polaire et la grille suivent les axes de l'UCS, de même que le réticule.
   - Le nouveau texte et les nouveaux paragraphes suivent l'axe X de l'UCS ; l'horizontale et la verticale de {{cmd:DIMLINEAR}} les suivent aussi.
   - Les coordonnées de la barre d'état et celles de {{cmd:ID}} sont des coordonnées UCS.
4. Pour taper un point du monde pendant qu'un UCS est défini, placez `*` devant : `*0,0` ou `@*100,0`.
5. Tapez `UCS`, {{key:Enter}}, puis {{key:Enter}} à nouveau pour revenir au monde.

## Autres façons de définir un UCS

À l'invite de {{cmd:UCS}} :

| Vous tapez | Ce que cela fait |
|---|---|
| un point | Une nouvelle origine ; cliquez ensuite sur un point du nouvel axe X, ou appuyez sur {{key:Enter}} pour garder l'angle |
| `Z` | Tourne l'UCS autour de son origine, d'un angle que vous tapez (en degrés, sens antihoraire) ou que vous désignez |
| `3` (3 points) | Une origine, un point sur l'axe X positif, et un point du côté Y positif |
| `OB` (Objet) | À partir d'une ligne, d'un arc, d'un cercle, d'un segment de polyligne, d'un texte, d'une référence de bloc, d'un point ou d'une ligne de construction |
| `P` (Précédent) | L'UCS précédent (les dix derniers sont conservés tant que le dessin est ouvert) |
| `W` (Monde) | Retour au monde |
| `NA` (Nommé) | `S` enregistre l'UCS courant sous un nom, `R` en restaure un, `D` en supprime un, `?` les liste |

Chaque changement tourne la vue pour que le nouvel axe X de l'UCS soit horizontal. {{cmd:PLAN}} tourne la vue sans changer l'UCS : {{key:Enter}} pour l'UCS courant, `U` pour un UCS enregistré, `W` pour le monde.

## Bonnes pratiques

- Chaque volet d'un écran partagé garde sa propre rotation. L'UCS appartient au dessin.
- Les feuilles travaillent en coordonnées papier : définissez un UCS dans l'onglet {{ui:Modèle}}, ou à l'intérieur d'une fenêtre de présentation.
- Les fenêtres de sélection tracées dans une vue tournée sélectionnent ce qui se trouve à l'intérieur d'elles à l'écran.
- Les routines LISP reçoivent des points dans l'UCS depuis `getpoint`, peuvent lire `UCSORG`, `UCSXDIR`, `UCSYDIR` et `VIEWTWIST`, et `trans` convertit entre le monde, l'UCS et l'affichage.

:::note
Un fichier enregistré conservera l'UCS et la rotation de la vue dans une version ultérieure ; d'ici là, ils restent actifs tant que le dessin est ouvert.
:::
