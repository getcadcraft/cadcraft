---
title: Superposer les étages dans un même dessin
summary: "Dessinez le premier étage au-dessus du rez-de-chaussée aux mêmes coordonnées et désactivez chaque étage, sans références externes."
keywords: étage, étages, FLOORS, FLR, FLOOR, FLOORLAYERS, niveau, superposer, calque de conception, espace objet, fond de plan, xref, référence externe
from: 7440fc87
---

Les étages vous permettent de superposer des plans dans un seul espace objet. Chaque étage a ses propres objets, et les calques fonctionnent sur l'ensemble des étages. Un mur sur `P-Walls` peut se trouver sur n'importe quel étage.

## Démarrer

Tapez `FLOORS` (`FLR`), ou choisissez {{ui:Étages…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}}, puis choisissez {{ui:Commencer avec des étages}}. Ce que vous avez dessiné jusqu'ici va au rez-de-chaussée.

## Dessiner sur un étage

Choisissez l'étage avec le bouton rond du panneau. Les nouveaux objets y sont créés.

Les autres étages affichés sont estompés dessous. Vous pouvez vous y accrocher, de sorte que le premier étage s'aligne sur le rez-de-chaussée, mais vous ne pouvez pas les modifier tant que vous ne les avez pas rendus actifs. L'œil désactive un étage. Les murs ne se joignent qu'aux murs de leur propre étage.

Pour démarrer un étage à partir de celui du dessous, sélectionnez ce que vous voulez, choisissez l'étage dans le panneau et appuyez sur {{ui:Copier ici}}.

## Placer les étages sur des feuilles

Sélectionnez une fenêtre de présentation sur une feuille et choisissez son étage sous {{ui:Étage affiché}} dans Propriétés. Une fenêtre sans étage choisi affiche tous les étages activés.

## Envoyer le fichier à quelqu'un d'autre

Les autres programmes de CAO ne connaissent pas les étages : ils les affichent donc tous ensemble. Avant d'envoyer un fichier, choisissez {{ui:Transformer les étages en calques}} dans le panneau, ou tapez `FLOORLAYERS`. Chaque objet passe sur un calque portant le nom de son étage, comme `Ground floor-P-Walls`, afin de pouvoir encore désactiver chaque étage. Annuler le rétablit. CadCraft conserve les étages dans le fichier DWG ou DXF qu'il enregistre.
