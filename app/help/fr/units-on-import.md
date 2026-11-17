---
title: Unités à l'importation : un fichier indique ses unités, ou on vous les demande d'abord
summary: Lorsqu'un fichier que vous importez dans un dessin indique ses unités, CadCraft le convertit et le signale. Lorsque ce n'est pas le cas, CadCraft demande avant de rien placer et retient votre réponse pour ce fichier.
keywords: unités, importer, insérer, référence externe, joindre, XATTACH, INSERT, OBJ, DWG, DXF, nuage de points, élément de bibliothèque, millimètres, mètres, pouces, pieds, échelle, mauvaise taille, trop grand, trop petit, 1000 fois, demander, mémorisé, INSUNITS
from: 558f1293
---

## Ce que vous allez faire

Importer un fichier dans un dessin et vous assurer qu'il entre à la bonne taille.

## Étapes

1. Importez le fichier comme d'habitude : `INSERT` › Fichier, `XATTACH`, `POINTCLOUDATTACH`, ou {{ui:Fichiers}} dans le panneau Bibliothèque.
2. Si le fichier indique ses unités, rien n'est demandé. La ligne de commande indique les unités du fichier, ainsi que l'échelle utilisée lorsqu'elles diffèrent de celles du dessin.
3. Sinon, une boîte de dialogue demande les **Unités de** le fichier. Choisissez ce que vaut une unité du fichier, puis cliquez sur {{ui:Utiliser ces unités}}. Rien n'est placé avant votre réponse.
4. {{ui:Annuler}} (ou {{key:Esc}}) n'importe rien.

## Quels fichiers indiquent leurs unités

- **DWG et DXF** : les unités d'insertion du dessin (`$INSUNITS`). Un fichier qui n'en a pas donne lieu à une question.
- **Nuages de points** : les LAS et LAZ avec un système de coordonnées, les E57, PTX et PLY indiquent les leurs. Les autres donnent lieu à une question.
- **OBJ** : n'indique jamais ses unités. On vous les demande.
- **glTF et GLB** : des mètres, selon la règle du format.
- **Images** : n'ont pas de taille propre. `IMAGEATTACH` demande la largeur, et propose la largeur que vous aviez donnée à ce fichier auparavant.
- **Scans** : un scan qui indique sa densité (points par pouce) est importé à sa taille réelle dans les unités du dessin ; `SCANATTACH` demande tout de même la largeur.
- **Le module complémentaire Nuages de points** : demande lorsque vous construisez un nuage dont le fichier n'indique aucune unité, et étiquette les nombres du nuage dans l'unité qu'il porte.

## Bon à savoir

- Ouvrir un DWG ou un DXF comme dessin propre ne demande rien : la ligne de commande indique les unités du fichier, ou qu'il n'en indique aucune. {{ui:Propriétés}} définit les unités d'un dessin.
- Lorsque ce dessin n'a pas non plus d'unités, un fichier ne peut pas être converti : il est placé nombre pour nombre, et la ligne de commande le signale.
- La réponse est mémorisée pour ce fichier sur cet ordinateur, dans toutes les applications CadCraft. La prochaine fois qu'il est importé, vous n'êtes pas interrogé, et la ligne de commande indique que les unités mémorisées ont été utilisées.
- Pour être à nouveau interrogé : la palette de commandes ({{key:Mod+K}}) › **Demander à nouveau les unités des fichiers importés**.
