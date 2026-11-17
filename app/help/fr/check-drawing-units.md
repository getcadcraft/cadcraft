---
title: Vérifier les unités d'un dessin
summary: Voyez si un dessin ouvert est en millimètres, en pouces ou dans une autre unité, vérifiez-le en mesurant, et sachez pourquoi un autre programme peut indiquer des unités différentes pour le même DXF.
keywords: unités, quelles unités, vérifier les unités, millimètres, mm, pouces, métrique, impérial, unités DXF, STEP vers DXF, mauvaises unités, pouces ou mm, INSUNITS, MEASUREMENT, unités du dessin, PartCraft DXF
from: c0ee75bb
---

## Ce que vous allez faire

Trouver ce que représente une unité dans un dessin ouvert, et vérifier que les nombres que vous lisez correspondent à la taille attendue.

## Étapes

1. Ouvrez le dessin, puis appuyez sur {{key:Esc}} pour qu'aucun objet ne soit sélectionné, sur l'onglet {{ui:Modèle}}.
2. Dans le panneau de droite, sous {{ui:Réglages actuels}}, lisez {{ui:Unités}}. Il indique ce que représente une unité du dessin : {{ui:Millimètres}}, {{ui:Pouces}}, {{ui:Pieds}} et ainsi de suite. Un DXF enregistré depuis PartCraft indique {{ui:Millimètres}}.
3. Vérifiez en mesurant quelque chose dont vous connaissez la taille. Tapez {{cmd:DIST}} et désignez les deux extrémités d'une arête ou d'un trou. Si une pièce dont vous connaissez la cote fait 25 mm et s'affiche `25`, le dessin est en millimètres ; si elle s'affiche environ `0.98`, il est en pouces.

{{ui:Sans unité}} signifie que le fichier ne l'indique pas. CadCraft considère alors l'unité du papier (millimètres sur les formats ISO, pouces sur les formats US), et les nombres ne sont justes que dans la mesure où le programme qui les a écrits l'est.

## Si les unités sont fausses

Modifier {{ui:Unités}} **ne redimensionne rien** : les nombres restent les mêmes, seule leur signification change. Ne réglez donc ce champ que pour indiquer ce que le dessin est réellement. Si les nombres sont en millimètres et que {{ui:Unités}} indique {{ui:Pouces}}, choisissez {{ui:Millimètres}}. Si vous avez besoin de la géométrie elle-même dans d'autres unités, mettez-la à l'échelle avec {{cmd:SCALE}} (25.4 pour passer des pouces aux millimètres, 1/25.4 dans l'autre sens), puis réglez {{ui:Unités}}.

La façon d'écrire les longueurs (décimal, pieds et pouces, fractions) est un réglage distinct, {{ui:Format de longueur}} : voir [Unités, formats de feuille et échelles](topic:units-papers-scales).

## Pourquoi un autre programme peut indiquer des pouces

Un DXF déclare ses unités dans son en-tête. Le plus ancien type de DXF, R12, n'a aucune variable d'unités ; un programme qui lit strictement le R12 ignore donc celle qui y est écrite et prend sa valeur par défaut, souvent les pouces. La géométrie du fichier est la même dans tous les cas : seule l'étiquette diffère. PartCraft écrit ses fichiers DXF en R12 et indique les millimètres de deux façons (`$INSUNITS` 4 et `$MEASUREMENT` 1) pour que davantage de programmes les lisent correctement. Si un programme indique encore des pouces, réglez ses unités sur les millimètres à l'ouverture du fichier.

Importer un fichier dans un dessin (au lieu de l'ouvrir) convertit ses unités : voir [Unités à l'importation](topic:units-on-import).
