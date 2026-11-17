---
title: Recaler plusieurs scans en un seul
summary: Placer des scans pris depuis différentes positions dans un même repère, par des paires de points pointés ou des cibles saisies, les affiner avec ICP, enregistrer le recalage comme projet et exporter le nuage recalé en LAS ou E57. La commande est REGISTERSCANS.
keywords: recalage, recaler, scans, nuage de points, icp, point le plus proche itératif, cibles, paires de points, transformation rigide, aligner, fusionner, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Ce que vous allez faire

Plusieurs scans d'un même lieu (chacun pris depuis sa propre position du scanner) démarrent dans leurs propres coordonnées. Recalez-les : donnez à chaque scan un seul placement pour qu'ils se trouvent tous dans un même repère, puis enregistrez-le comme projet et écrivez le nuage recalé dans un seul fichier LAS ou E57.

## Placer les scans

1. Ouvrez la boîte de dialogue (tapez `REGISTERSCANS` (ou `REGSCAN`)). {{ui:Ajouter des scans…}} accepte les fichiers LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou vous pouvez les déposer sur la boîte de dialogue. Les scans qui utilisent des unités différentes sont refusés avec une remarque : convertissez-en un d'abord.
2. Choisissez {{ui:Scan à déplacer}} et {{ui:Placer contre}}. L'image montre chaque scan dans le repère tel qu'il est actuellement, une couleur par scan : {{ui:Plan}}, {{ui:Face}} ou {{ui:Côté}} ; faites glisser pour effectuer un panoramique, utilisez la molette pour zoomer.
3. **Par paires de points.** Cliquez sur {{ui:Choisir une paire}}, puis sur un point du scan à déplacer, puis sur le même endroit d'un autre scan (un coin, une cible, le pied d'un poteau). Faites-le au moins trois fois, avec des points qui ne sont pas alignés et bien répartis. Cliquez sur {{ui:Placer par paires}} : le scan est placé par un ajustement aux moindres carrés, et **Restant** indique l'écart qui subsiste pour chaque paire. Une paire dont le chiffre est élevé est un mauvais pointage : retirez-la avec la croix, puis placez à nouveau.
4. **Par cibles.** Si les coordonnées réelles d'un point sont connues (cibles levées), cliquez sur {{ui:Choisir, puis saisir la cible}}, cliquez sur le point dans son scan, puis saisissez les X, Y et Z de la cible dans la ligne. Les paires et les cibles saisies se combinent librement.

## Affiner avec ICP

Les paires donnent un placement approximatif. {{ui:Affiner}} déplace le scan jusqu'à ce que ses surfaces se posent sur celles de l'autre scan : d'abord **point à point**, puis **point à plan**. Le tableau liste chaque étape avec son erreur et le nombre de points appariés ; la ligne au-dessus trace la baisse de l'erreur. {{ui:Arrêter}} termine l'exécution après l'étape en cours et conserve ce qui a été atteint. {{ui:Annuler}} annule l'exécution complète (ou le dernier placement) ; {{ui:Réinitialiser}} remet le scan à ses coordonnées de fichier.

Pour rester rapide sur un ordinateur portable, ICP travaille sur une partie allégée des points ({{ui:Points utilisés}}, de 5,000 à 60,000) et ignore les appariements plus éloignés que {{ui:Plus grande distance d'appariement}} (par défaut 5 % de la taille du scan, valeur qui diminue à mesure que le calage se stabilise). Il a besoin d'un placement approximatif au préalable : les scans qui se recouvrent à peine signalent qu'ils ne peuvent pas être appariés. Les surfaces uniquement planes ou uniquement rectilignes ne permettent pas de corriger une position le long d'elles-mêmes ; ajoutez alors des paires.

## Enregistrer et exporter

- {{ui:Enregistrer le projet}} écrit un petit fichier `.ccscans.json` : le nom de chaque scan, sa taille et une empreinte de ses 64 KB initiaux, avec sa transformation. Il ne contient aucun point. {{ui:Ouvrir un projet…}} retrouve les fichiers de scan à partir de ces références (les fichiers doivent d'abord être ajoutés) et rétablit toutes les transformations.
- {{ui:Exporter en LAS}} et {{ui:Exporter en E57}} écrivent un seul fichier contenant chaque scan à sa place recalée. Les points des originaux ne sont jamais réécrits ; la transformation est appliquée à la sortie. Avec {{ui:Lire chaque point depuis les fichiers}} activé, chaque fichier est relu pour chaque point (jusqu'à 20 millions par scan) ; désactivé, seuls les points affichés dans la visionneuse sont écrits.
- {{ui:Afficher le nuage recalé}} (CadCraft) écrit le LAS et l'attache sous le dessin à ses propres coordonnées, comme tout nuage.

:::note
Rien n'est envoyé. Le recalage s'effectue dans les unités propres des fichiers et conserve les millimètres : un LAS est écrit avec une échelle adaptée (jusqu'à 0.1 mm), un E57 avec des nombres en double précision. Un système de coordonnées n'est reporté dans le LAS que si chaque scan indique le même code EPSG. Le writer E57 est le nôtre ; il est vérifié en relisant ses fichiers avec ce lecteur et avec libE57Format.
:::
