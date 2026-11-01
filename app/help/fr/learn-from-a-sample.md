---
title: Apprendre à partir d'un dessin exemple
summary: Ouvrir la maison exemple ou l'exemple de récolement de CadCraft et parcourir ses feuilles, son cartouche, ses cotes et ses calques.
keywords: exemple, exemples, dessin exemple, apprendre, tutoriel, pas à pas, cartouche, feuilles, récolement, jeu d'architecture, ouvrir un exemple
from: aa1f960a
---

## Ce que vous allez apprendre

Comment se construit un jeu de plans terminé : l'espace objet, des feuilles avec des fenêtres de présentation à une échelle, un cartouche avec des attributs, des cotes en pieds et pouces et en millimètres, des calques. Les exemples sont ceux de CadCraft et libres d'utilisation pour tout (CC0).

## Ouvrir un exemple

1. Dans le panneau de gauche, sous {{ui:Dessin}}, cliquez sur {{ui:Ouvrir un exemple}} (ou saisissez {{cmd:SAMPLES}} ; dans les styles à ruban, il se trouve dans le menu {{ui:Fichier}}).
2. Cliquez sur {{ui:Ouvrir}} à côté de {{ui:Maison exemple}}. Il s'ouvre dans un onglet à part, et votre travail reste donc ouvert.

## Parcourir le modèle

1. Cliquez sur {{ui:Étendue}} (ou saisissez `ZOOM`, puis `E`) : le plan de l'étage, la façade avant, une coupe et un détail de mur.
2. Dans {{ui:Calques}}, cliquez sur l'œil à côté de `A-ANNO-DIMS` pour masquer les cotes, et de nouveau pour les afficher.
3. Cliquez sur une porte : Propriétés montre une référence de bloc `DOOR-32`. Les portes et les fenêtres sont des blocs, placés pivotés et en symétrie.

## Les feuilles

1. Cliquez sur {{ui:A-101 FLOOR PLAN}} sous le dessin : une feuille ARCH D avec une fenêtre de présentation à 1/4" = 1'-0".
2. Double-cliquez dans la fenêtre pour travailler sur le modèle à travers elle ; double-cliquez à l'extérieur pour revenir.
3. {{ui:A-501 DETAILS}} montre le détail de mur à 1 1/2" = 1'-0" : le même modèle, une autre échelle.

## Le cartouche

1. Sur n'importe quelle feuille, double-cliquez sur le cartouche : {{ui:Modifier les attributs}} liste PROJECT, TITLE, SCALE, DATE, DRAWN et SHEET.
2. Remplacez DRAWN par vos initiales et cliquez sur {{ui:OK}}.
3. Pour modifier le cartouche lui-même sur toutes les feuilles, sélectionnez-le et choisissez {{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier sur place}}. Voir [Attributs](topic:attributes).

## Le récolement

Ouvrez {{ui:Exemple de récolement}} de la même façon. Les points gris sur `SCAN-SLICE` sont une tranche de scan ; les murs sur `AB-WALL` ont été tracés par-dessus. Le mur est est désaxé de 35 mm : les cotes le disent deux fois, en millimètres (`AB-DIMS-MM`) et en pieds et pouces (`AB-DIMS-FTIN`, les mêmes longueurs au travers d'une échelle de mesure). Les nuages rouges sur `REV-1` marquent ce que le relevé a trouvé.

## Ensuite

- [Changer la taille du texte des cotes](topic:change-dimension-text-size)
- [Tracer en PDF](topic:plot-pdf) : tracez {{ui:A-101 FLOOR PLAN}}.
