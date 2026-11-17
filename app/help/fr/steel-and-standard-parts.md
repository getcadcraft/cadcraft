---
title: Placer des profilés en acier et des pièces normalisées
summary: Dessinez des profilés en acier, des élévations et des éléments 3D à partir des tableaux de profilés publiés, placez boulons, écrous, rondelles, goupilles, roulements, clavettes et engrenages selon leurs normes, et répertoriez-les dans une liste de pièces.
keywords: acier, profilé, section, forme, profilé W, poutrelle à larges ailes, double T, fer en U, cornière, HSS, tube, tuyau, IPE, HEA, HEB, UPN, poutre, poteau, élément, élévation, aisc, en 10365, boulon, vis, écrou, rondelle, goupille, cheville, roulement, clavette, rainure de clavette, engrenage, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, pièces normalisées, liste de pièces, nomenclature, bom, steelmember, partslist
from: 547c1048
---

La rubrique {{ui:Standard}} de la bibliothèque propose deux types d'éléments, créés ici même à partir de tableaux publiés (rien n'est téléchargé) :

- **Profilés en acier** : 1,335 dimensions. W, S, C, L, HSS et Pipe issus de la base AISC Shapes Database v16.0 ; IPE, HEA, HEB et UPN issus de la norme EN 10365:2017. DetailCraft utilise le même tableau.
- **Pièces normalisées** : vis à tête hexagonale (ISO 4017), boulons à tête hexagonale (ISO 4014), écrous hexagonaux (ISO 4032), rondelles plates (ISO 7089), boulons et écrous hexagonaux en pouces (ASME B18.2.1 et B18.2.2), goupilles cylindriques (ISO 2338), roulements à billes à gorge profonde (ISO 15), clavettes parallèles (DIN 6885-1) et engrenages droits (modules issus de l'ISO 54).

Tout ceci est partagé sous CC0 : vous pouvez l'utiliser librement, sans mention d'auteur.

## Placer un profilé en acier

1. Ouvrez la bibliothèque ({{ui:Bibliothèque}} dans le groupe Blocs, ou saisissez `LIB`) et cliquez sur l'onglet {{ui:Standard}}.
2. Choisissez la famille dans la première liste, par exemple {{ui:Profilés W}}. Saisissez dans la zone de recherche pour réduire les dimensions : `W12` affiche tous les W12.
3. Dans {{ui:Placer comme}}, choisissez :
   - {{ui:Section}} : la section transversale, avec son centre au point d'insertion.
   - {{ui:Altitude}} : l'élément vu de côté, sur la longueur indiquée par {{ui:Longueur (mm)}}, à partir du milieu de son extrémité gauche.
   - {{ui:Élément 3D}} : un solide sur l'onglet 3D (ci-dessous).
4. Cliquez sur {{ui:Placer}} sur la carte de la dimension, puis cliquez à l'endroit voulu, comme pour tout élément de bibliothèque.

Une section ou une élévation devient un bloc. Ses attributs contiennent la dimension, le tableau d'origine, la longueur (pour une élévation) et un matériau que vous pouvez compléter.

:::note
Les profilés S, les fers en U et UPN sont dessinés avec des semelles parallèles d'épaisseur moyenne, et les cornières avec des angles vifs : les semelles réelles sont inclinées et les angles arrondis. Les profilés W, IPE, HEA et HEB comportent leurs congés de raccordement, et les HSS leurs rayons d'angle.
:::

## Créer un élément 3D

Choisissez {{ui:Élément 3D}} et cliquez sur {{ui:Placer}}, ou saisissez {{cmd:STEELMEMBER}} (`SMEMBER`) sur la ligne de commande :

1. À `Dimension de section`, appuyez sur {{key:Enter}} pour la dimension affichée, ou saisissez-en une, par exemple `HSS6x6x1/4` ou `IPE300`.
2. Cliquez sur le point de départ, puis sur le point d'arrivée. L'élément s'étend entre les deux, posé sur le sol.
3. Pour un poteau, saisissez `C`, cliquez sur son point de base et saisissez sa hauteur.

L'élément est un solide fermé sur l'onglet 3D. Déplacez-le ou copiez-le là comme n'importe quel solide. {{key:Mod+Z}} l'annule.

## Placer une pièce normalisée

1. Dans l'onglet {{ui:Standard}}, choisissez la famille, par exemple {{ui:Vis à tête hexagonale}}.
2. Pour une vis, un boulon, une goupille ou une clavette, saisissez sa {{ui:Longueur (mm)}} (en pouces pour les familles en pouces). Pour un engrenage, saisissez les {{ui:Dents}}, la {{ui:Largeur de semelle (mm)}} et l'{{ui:Alésage (mm)}}. Laissez une case vide pour la valeur usuelle qui y est affichée.
3. Cliquez sur {{ui:Placer}} sur la dimension, puis cliquez à l'endroit voulu.

Les vis, boulons et goupilles sont dessinés de côté, la face d'appui de la tête se trouvant au point d'insertion ; les écrous, rondelles, roulements et engrenages sont dessinés de face ; les clavettes, par-dessus. Les filetages sont dessinés selon l'usage : le fond du filet en trait fin, la fin du filetage en trait épais. Les engrenages sont représentés par leur cercle de tête, leur cercle primitif et leur cercle de pied, et non dent par dent.

Chaque bloc de pièce porte en attributs son type, sa norme, sa dimension, sa longueur et son matériau, ainsi que son poids calculé à partir de la forme nominale en acier. Modifiez le matériau dans le panneau {{ui:Propriétés}}.

Les mêmes pièces figurent aussi dans la bibliothèque comme éléments, et PartCraft les ouvre comme pièces paramétriques ({{ui:Pièce normalisée}} dans son groupe Fichier).

## Créer une liste de pièces

- Dans la bibliothèque, cliquez sur {{ui:Liste de pièces}} : toutes les pièces normalisées et tous les profilés en acier du dessin, regroupés par type, norme, dimension, longueur et matériau, avec la quantité et les numéros d'article. {{ui:Télécharger le CSV}} l'enregistre pour un tableur.
- Pour la dessiner, saisissez {{cmd:PARTSLIST}} (`PLIST`), cliquez sur le coin supérieur gauche du tableau, puis appuyez sur {{key:Enter}} pour la hauteur de texte usuelle ou saisissez-en une.

La liste est lue à partir des attributs des blocs ; elle reste donc exacte après l'enregistrement du dessin en DWG ou DXF, puis sa réouverture.

## Erreurs courantes

- **« Aucun profilé en acier ne porte ce nom … » :** saisissez la dimension telle que l'onglet {{ui:Standard}} la liste : `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **L'élément est dans l'onglet 3D, pas dans le plan.** {{cmd:STEELMEMBER}} crée un solide ; ouvrez l'onglet 3D pour le voir. Pour afficher l'acier dans le plan, placez aussi une {{ui:Section}} ou une {{ui:Altitude}}.
- **Une longueur hors plage.** Un boulon doit être plus long que sa tête, et une clavette plus longue que sa largeur. La ligne sous les cartes indique la valeur refusée.
